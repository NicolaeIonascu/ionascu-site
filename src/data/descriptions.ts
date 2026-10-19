// Short project descriptions (DRAFT, English). Written from your Gmail and Fiverr history, with no prices, names or contact details.
// Projects not listed here have no description yet (no usable history was found). Edit freely; empty or missing = nothing is shown.
// "check" notes are for you, not for the site: remove them when you have confirmed the facts.

export interface ProjectNote { text: string; product?: string; check?: string } // product = what the product is (from the manufacturer's public pages)

export const descriptions: Record<string, ProjectNote> = {
  'cambridge-skylights': {
    text: 'A six-step installation guide for a 600 x 600 mm roof skylight. The film shows the product\'s benefits first, then every assembly step through to the finished result. The client was closely involved: we agreed the script in questions and answers, and the changes they asked for were built in before delivery.',
  },
  ledi: {
    text: 'A 165-second Full HD installation film for an LED lighting system, the client\'s first animation of a product. We began with a rough animatic to agree the story and the sequence of steps, then rendered the final visuals. As the client added more steps during the work, the film grew to cover the complete installation.',
  },
  marantec: {
    text: 'A 248-second installation film for the Synergy 200 and 300 series of garage door operators. The work followed three stages: a script with exact timing, an animatic, then rendering and post-production. The client refined details throughout, and the film was fine-tuned until every step matched the real product.',
    check: 'Is Synergy a garage door operator? (Marantec makes them; confirm.)',
  },
  'ts-pool': {
    text: 'A Full HD film with music in which the product assembles itself piece by piece. We agreed the idea in a rough animatic first, then moved on to visualisation and compositing.',
    check: 'Fiverr client ts_smart: confirm this is the TS-Pool film.',
  },
  'true-metal-supply': {
    text: 'Installation animations for a US supplier of metal roofing and siding. Several short films were made over time, including one for a post anchor and a short modelled animation. The client came back for new films, which tells you the format works for them.',
    check: 'Which film is the one in the portfolio: post anchor, or the 20 s animation?',
  },
  fourseasons: {
    text: 'Short installation videos for a Canadian roofing company, each with its logo animation. The same collaboration included the individual trims and flashings rendered in 4K with transparency for the company\'s website, and later a short installation video for a sister brand.',
  },
  sagiper: {
    text: 'An installation film for a siding and soffit system, produced for the North American market. We reviewed a rough animatic with text together: the repetitive saw cutting was removed, a pause was added at the critical step, and the logo was placed. The film was then rendered and set to music. Stills from the film were later used in printed material.',
  },
  metigla: {
    product: 'METIGLA EDGE is a rectangular steel rainwater system with a click-and-play fitting, made from fully recyclable steel on robotised lines in Romania. It was launched in 2026 as the first complete rectangular steel rainwater system produced in the country.',
    text: 'An installation film for the Metigla rainwater system, showing how the gutters, downpipes and fixings fit together for a quick, tidy installation.',
    check: 'Confirm the film shows the EDGE system and what it covers (gutter, downpipe, accessories).',
  },
  aquasystem: {
    product: 'AQUASYSTEM metal soffits: perforated and solid metal panels that close the underside of roof eaves and ventilate the roof space.',
    text: 'An installation film for AQUASYSTEM metal soffits, based on the manufacturer’s own installation recommendations. It shows how the soffit panels are fixed under the eaves and how they meet the profiles and trims.',
    check: 'Product detail comes only from the video title (Recommendations for installing metal soffits). Confirm perforated/solid panels and what the film covers.',
  },
  sagiwall: {
    product: 'Heavy-gauge PVC tongue-and-groove cladding with a PVDF top layer that blocks over 95% of UV, in 27 finishes, in 12 ft and 19 ft lengths.',
    text: 'An installation film for SAGIWALL exterior siding, made for Sagiper. It walks the installer through fixing the tongue-and-groove panels with their trims, step by step.',
    check: 'Confirm what the film covers (panels, corners, trims).',
  },
  'marantec-wke': {
    product: 'The wireless keyless-entry keypad lets owners open a garage door with a personal code instead of a remote.',
    text: 'A short installation film for a wireless keypad that opens a garage door with a PIN. It shows mounting, pairing with the operator and setting the code.',
    check: 'Confirm WKE = Wireless Keyless Entry keypad, and what the film shows.',
  },
  roofart: {
    text: 'Installation films for a Moldovan manufacturer of metal roofing and rainwater systems with a branch in Romania. Each version went through feedback rounds with their marketing and production teams, checked against the real installation order and brand rules (logo placement, product names, text size). Films were delivered in English and Romanian.',
  },
  'roofart-opritor': {
    text: 'A snow guard installation film for Roofart. During review, the production team checked the order in which the pipes are fitted, and details such as the logo on the tools were corrected. Delivered in Romanian and English.',
    check: 'Confirm "Opritor" = snow guard (opritor zapada).',
  },
  'roofart-tdm': {
    product: 'RoofArt ARCTICA is a double-modular metal roof tile: each panel is two 350 mm modules, 1205 x 770 mm, weighing about 4 kg per m2, with the fixings hidden in the panel overlap, so nothing is drilled through the visible surface. Any panel can be lifted out later, even mid-roof, and a roof of this size can be laid by two people. Minimum pitch 15 degrees, six colours, 50-year anti-corrosion and 25-year colour warranty.',
    text: 'An installation film for the RoofArt double-modular metal roof tile (TDM, tigla dublu modulara). It shows how the two-module panels are laid with hidden fixings, how accessories such as eaves, ridge and verge are fitted, and why the roof can be installed by a small crew.',
    check: 'TDM = tigla dublu modulara (confirmed by the product page). Confirm which model the film shows (ARCTICA?).',
  },
  'double-modular': {
    product: 'RoofArt ARCTICA is a double-modular metal roof tile: each panel is two 350 mm modules, 1205 x 770 mm, weighing about 4 kg per m2, with the fixings hidden in the panel overlap, so nothing is drilled through the visible surface. Any panel can be lifted out later, even mid-roof, and a roof of this size can be laid by two people. Minimum pitch 15 degrees, six colours, 50-year anti-corrosion and 25-year colour warranty.',
    text: 'The same double-modular roof tile presented as its own card on the old site; it currently uses the same video as RoofArt TDM.',
    check: 'This card duplicates Roofart TDM. Provide its own video or remove the card.',
  },
  'vodaland-minislot': {
    product: 'The Mini Slot channel drain is only 4 inches wide with a narrow 5/8-inch slot, so it fits into concrete or paver surfaces almost invisibly.',
    text: 'A 60-second film for a stainless steel slot drain. The work followed three stages: animatic, simulations and visualisation, matched to the visual style of the client\'s own product renders. Later the film was updated so that the connection section shows only sealant, after customers had been confused by a different fastening method.',
  },
  'vodaland-sand-trap-base': {
    text: 'One of a series of drainage product films for Vodaland. Each film is checked by the company against the real product before it is accepted, down to details such as the direction of the logo.',
  },
  'vodaland-border': {
    product: 'Plastic edging supplied in 1 m lengths, each with five positions for EasyPave anchors.',
    text: 'A product film for a plastic landscape border by Vodaland. Part of a long-running series of films for the company\'s drainage and yard products.',
    check: 'No specific history found. Add what the film explains.',
  },
  'vodaland-separator': {
    text: 'A product film for a separator by Vodaland, part of the series of drainage and yard product animations made for the company.',
    check: 'No specific history found. Add what the film explains.',
  },
  'vodaland-easypave': {
    product: 'EasyPave is a ground-reinforcement grid system; edging and anchors lock the grid and the pavers in place.',
    text: 'A product film for the Easypave paving system by Vodaland, part of the series of drainage and yard product animations made for the company.',
    check: 'No specific history found. Add what the film explains.',
  },
  'ikea-helmer-assembly-animation': {
    text: 'A step-by-step assembly animation for the IKEA HELMER drawer cabinet: every part, screw and drawer shown in the order it goes together, so the customer can follow it without reading a word.',
    check: 'Minimal text; no history found. Add how the project came about.',
  },
  opure: {
    text: 'A short product film for Opure, showing the product and how it is installed in the yard or garden.',
    check: 'Minimal text; no information found. Say what Opure is.',
  },
  ecomodule: {
    text: 'An installation film for the Ecomodule system, showing how its parts fit together step by step.',
    check: 'Minimal text; no information found. Say what Ecomodule is.',
  },
  'pvc-fence': {
    text: 'An installation film for a PVC fence: posts, panels and fixings shown in the order they are assembled.',
    check: 'Minimal text; no information found. Add the brand and what the film covers.',
  },
};
