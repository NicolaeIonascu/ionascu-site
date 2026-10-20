#!/usr/bin/env python3
"""Export only this site's database without logging credentials or executing PHP."""
import os
import re
import subprocess
import sys
from pathlib import Path

source = Path("/var/www/ionascu2/www/wp-config.php").read_text()
target = Path(sys.argv[1])
values = {}
for name in ("DB_NAME", "DB_USER", "DB_PASSWORD", "DB_HOST"):
    # Standard WordPress single-quoted literal definitions; fail closed otherwise.
    match = re.search(
        r"""define\s*\(\s*['"]""" + name + r"""['"]\s*,\s*'((?:\\.|[^'\\])*)'\s*\)""",
        source,
    )
    if not match:
        raise SystemExit("Unsupported WordPress definition: " + name)
    values[name] = re.sub(r"\\([\\'])", r"\1", match.group(1))

def quote(value):
    return '"' + value.replace("\\", "\\\\").replace('"', '\\"').replace("\n", "\\n").replace("\r", "\\r") + '"'

host = values["DB_HOST"]
options = {"user": values["DB_USER"], "password": values["DB_PASSWORD"]}
if ":" in host:
    host, suffix = host.split(":", 1)
    if suffix.isdigit():
        options["port"] = suffix
    elif suffix.startswith("/"):
        options["socket"] = suffix
    else:
        raise SystemExit("Unsupported database host format")
options["host"] = host
if sys.argv[1] == "--check":
    print("WordPress database settings parsed successfully; no credentials displayed.")
    raise SystemExit(0)
config = target / "mysql.cnf"
fd = os.open(str(config), os.O_WRONLY | os.O_CREAT | os.O_EXCL, 0o600)
try:
    with os.fdopen(fd, "w") as handle:
        handle.write("[client]\n")
        for key, value in options.items():
            handle.write(key + "=" + quote(value) + "\n")
    with (target / "wordpress.sql").open("wb") as dump:
        subprocess.run(
            ["mysqldump", "--defaults-extra-file=" + str(config),
             # MySQL 8.0.32 requires global FLUSH rights for single-transaction.
             # Lock only this database's tables for the export instead.
             "--lock-tables", "--set-gtid-purged=OFF", "--quick", "--no-tablespaces",
             "--hex-blob", "--databases", values["DB_NAME"]],
            stdout=dump, check=True,
        )
finally:
    config.unlink()
if (target / "wordpress.sql").stat().st_size == 0:
    raise SystemExit("Database backup is empty")
