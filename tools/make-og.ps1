# Draws the social-share (og:image) pictures, 1200x630, in English (public/og/<name>.jpg) and Romanian (public/og/<name>-ro.jpg).
# Run from the project folder:   powershell -ExecutionPolicy Bypass -File tools\make-og.ps1
# Pages point to them with image="/og/<name>.jpg"; on /ro/ pages the layout adds "-ro" by itself.
# Needs Windows (System.Drawing) and the fonts Impact and Roboto. To add a page: add a line to $pages below.
param([string]$Root = (Split-Path -Parent $PSScriptRoot))
Add-Type -AssemblyName System.Drawing
$out = Join-Path $Root 'public\og'; New-Item -ItemType Directory -Force $out | Out-Null
$assets = Join-Path $Root 'src\assets'
$px = [System.Drawing.GraphicsUnit]::Pixel; $reg = [System.Drawing.FontStyle]::Regular
$flame = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255,177,98))
$white = [System.Drawing.Brushes]::White
$soft  = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(220,238,233,223))
$navy  = [System.Drawing.Color]::FromArgb(27,38,50)
$dot = [string][char]183

function Save-Jpg($bmp,$path){ $enc=[System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object MimeType -eq 'image/jpeg'; $ep=[System.Drawing.Imaging.EncoderParameters]::new(1); $ep.Param[0]=[System.Drawing.Imaging.EncoderParameter]::new([System.Drawing.Imaging.Encoder]::Quality,90L); $bmp.Save($path,$enc,$ep) }
function New-Canvas(){ $b=[System.Drawing.Bitmap]::new(1200,630); $g=[System.Drawing.Graphics]::FromImage($b); $g.SmoothingMode='AntiAlias'; $g.InterpolationMode='HighQualityBicubic'; $g.TextRenderingHint='AntiAliasGridFit'; $g.PixelOffsetMode='HighQuality'; return @($b,$g) }
function Draw-Cover($g,$img,$x,$y,$w,$h){ $s=[Math]::Max($w/$img.Width,$h/$img.Height); $sw=$w/$s; $sh=$h/$s; $sx=($img.Width-$sw)/2; $sy=($img.Height-$sh)/2; $g.DrawImage($img,[System.Drawing.Rectangle]::new($x,$y,$w,$h),[single]$sx,[single]$sy,[single]$sw,[single]$sh,$px) }
function Fit-Font($g,$text,$max,$width){ for($s=$max;$s -ge 36;$s-=2){ $f=[System.Drawing.Font]::new('Impact',$s,$reg,$px); if($g.MeasureString($text,$f).Width -le $width){ return $f } } return [System.Drawing.Font]::new('Impact',36,$reg,$px) }

# ---- pages: name, background (relative to src/assets), line 1 (white), line 2 (orange, may be empty), subtitle, layout
$pages = @{
 en = @(
  @('about',        'people\nicolae.jpg',            'NICOLAE',               'IONASCU',               "3D artist  $dot  25+ years of experience", 'portrait'),
  @('services',     'hero-poster.png',               'SERVICES',              '',                      '3D assembly & installation instruction animations', 'full'),
  @('service-3d-assembly-instruction-animation', 'portfolio\ikea.jpg', '3D ASSEMBLY & INSTALLATION', 'INSTRUCTION ANIMATION', 'Step-by-step films that replace long manuals', 'full'),
  @('service-3d-product-animation', 'portfolio\roofart.jpg', '3D PRODUCT ANIMATION', '& EXPLAINER VIDEO', 'Show what your product is and why it is better', 'full'),
  @('service-interactive-3d-product-instructions', 'portfolio\metigla.png', 'INTERACTIVE 3D', 'PRODUCT PRESENTATIONS', 'Rotate, zoom and click parts in the browser', 'full'),
  @('process',      'portfolio\cambridge-skylights.png', 'PROCESS',           '',                      'How a technical 3D film is made: from idea to final video', 'full'),
  @('testimonials', 'portfolio\marantec-wke.png',    'WHAT CLIENTS',          'SAY',                   'Manufacturers on working with Nicolae Ionascu', 'full'),
  @('contact',      'hero-poster.png',               'GET A QUOTE',           '',                      'Send us your manual, drawings or a 3D/CAD model', 'full'),
  @('blog',         'portfolio\roofart-tdm.png',     'BLOG',                  '',                      'Practical guides on assembly instructions and technical animation', 'full'),
  @('blog-how-to-create-3d-assembly-instructions', 'portfolio\sagiper.png', 'HOW TO CREATE', '3D ASSEMBLY INSTRUCTIONS', 'What you provide and how the process works', 'full'),
  @('blog-ways-to-work-together', 'hero-poster.png', 'WAYS TO WORK',          'TOGETHER',              "White-label, referral and joint offering. Let's work together", 'full')
 )
 ro = @(
  @('about',        'people\nicolae.jpg',            'NICOLAE',               'IONASCU',               "Artist 3D  $dot  peste 25 de ani de experiență", 'portrait'),
  @('services',     'hero-poster.png',               'SERVICII',              '',                      'Animații 3D pentru instrucțiuni de asamblare și instalare', 'full'),
  @('service-3d-assembly-instruction-animation', 'portfolio\ikea.jpg', 'ANIMAȚIE 3D DE ASAMBLARE', 'ȘI INSTALARE', 'Filme pas cu pas care înlocuiesc manualele lungi', 'full'),
  @('service-3d-product-animation', 'portfolio\roofart.jpg', 'ANIMAȚIE 3D DE PRODUS', 'ȘI VIDEOCLIP DE PREZENTARE', 'Arătați ce este produsul dvs. și de ce este mai bun', 'full'),
  @('service-interactive-3d-product-instructions', 'portfolio\metigla.png', 'PREZENTĂRI INTERACTIVE', '3D PENTRU PRODUSE', 'Rotiți, măriți și apăsați pe piese în browser', 'full'),
  @('process',      'portfolio\cambridge-skylights.png', 'PROCES',            '',                      'Cum se realizează un film tehnic 3D: de la idee la videoclipul final', 'full'),
  @('testimonials', 'portfolio\marantec-wke.png',    'CE SPUN',               'CLIENȚII',              'Producători despre colaborarea cu Nicolae Ionascu', 'full'),
  @('contact',      'hero-poster.png',               'CERE O OFERTĂ',         '',                      'Trimiteți-ne manualul, desenele sau un model 3D/CAD', 'full'),
  @('blog',         'portfolio\roofart-tdm.png',     'BLOG',                  '',                      'Ghiduri practice despre instrucțiuni de asamblare și animație tehnică', 'full'),
  @('blog-how-to-create-3d-assembly-instructions', 'portfolio\sagiper.png', 'CUM SE CREEAZĂ', 'INSTRUCȚIUNI 3D DE ASAMBLARE', 'Ce furnizați și cum decurge procesul', 'full'),
  @('blog-ways-to-work-together', 'hero-poster.png', 'MODURI DE',             'COLABORARE',            'White-label, recomandare și ofertă comună. Să colaborăm', 'full'),
  @('producatori',  'portfolio\roofart.jpg',         'MANUALUL DVS.,',        'ANIMAT.',               'Animații 3D de montaj pentru producători din Moldova', 'full')
 )
 ru = @(
  @('about',        'people\nicolae.jpg',            'NICOLAE',               'IONASCU',               "3D-художник  $dot  более 25 лет опыта", 'portrait'),
  @('services',     'hero-poster.png',               'УСЛУГИ',                '',                      '3D-анимация инструкций по сборке и монтажу', 'full'),
  @('service-3d-assembly-instruction-animation', 'portfolio\ikea.jpg', '3D-АНИМАЦИЯ СБОРКИ', 'И МОНТАЖА', 'Пошаговые фильмы, заменяющие длинные инструкции', 'full'),
  @('service-3d-product-animation', 'portfolio\roofart.jpg', '3D-АНИМАЦИЯ ПРОДУКТА', 'И ОБЪЯСНЯЮЩЕЕ ВИДЕО', 'Покажите, что такое ваше изделие и чем оно лучше', 'full'),
  @('service-interactive-3d-product-instructions', 'portfolio\metigla.png', 'ИНТЕРАКТИВНЫЕ', '3D-ПРЕЗЕНТАЦИИ', 'Вращайте, приближайте и нажимайте на детали в браузере', 'full'),
  @('process',      'portfolio\cambridge-skylights.png', 'ПРОЦЕСС',           '',                      'Как создаётся технический 3D-фильм: от идеи до готового видео', 'full'),
  @('testimonials', 'portfolio\marantec-wke.png',    'ЧТО ГОВОРЯТ',           'КЛИЕНТЫ',               'Производители о работе с Nicolae Ionascu', 'full'),
  @('contact',      'hero-poster.png',               'ЗАПРОСИТЬ ЦЕНУ',        '',                      'Пришлите инструкцию, чертежи или 3D/CAD-модель', 'full'),
  @('blog',         'portfolio\roofart-tdm.png',     'БЛОГ',                  '',                      'Практические руководства по инструкциям по сборке и технической анимации', 'full'),
  @('blog-how-to-create-3d-assembly-instructions', 'portfolio\sagiper.png', 'КАК СОЗДАТЬ', '3D-ИНСТРУКЦИИ ПО СБОРКЕ', 'Что нужно предоставить и как проходит процесс', 'full'),
  @('blog-ways-to-work-together', 'hero-poster.png', 'СПОСОБЫ',               'СОТРУДНИЧЕСТВА',        'White-label, рекомендации и совместное предложение. Давайте сотрудничать', 'full'),
  @('producatori',  'portfolio\roofart.jpg',         'ВАША ИНСТРУКЦИЯ,',      'В АНИМАЦИИ.',           '3D-анимации монтажа для производителей Молдовы', 'full')
 )
}

function Make-Page($p,$suffix){
  $name,$bgRel,$l1,$l2,$sub,$layout = $p
  $c=New-Canvas; $bmp=$c[0]; $g=$c[1]
  $bg=[System.Drawing.Image]::FromFile((Join-Path $assets $bgRel))
  if($layout -eq 'portrait'){
    $g.Clear($navy); Draw-Cover $g $bg 700 0 500 630
    $edge=[System.Drawing.Drawing2D.LinearGradientBrush]::new([System.Drawing.Rectangle]::new(660,0,120,630),[System.Drawing.Color]::FromArgb(255,27,38,50),[System.Drawing.Color]::FromArgb(0,27,38,50),[single]0); $g.FillRectangle($edge,660,0,120,630)
    $textW=600
  } else {
    Draw-Cover $g $bg 0 0 1200 630
    $grad=[System.Drawing.Drawing2D.LinearGradientBrush]::new([System.Drawing.Rectangle]::new(0,0,1200,630),[System.Drawing.Color]::FromArgb(238,27,38,50),[System.Drawing.Color]::FromArgb(60,27,38,50),[single]0); $g.FillRectangle($grad,0,0,1200,630)
    $textW=1056
  }
  $bg.Dispose()
  $fBrand=[System.Drawing.Font]::new('Roboto Condensed',28,[System.Drawing.FontStyle]::Bold,$px); $fSub=[System.Drawing.Font]::new('Roboto',30,$reg,$px)
  $g.DrawString('IONASCU',$fBrand,$flame,72,70)
  $f1=Fit-Font $g $l1 100 $textW; if($l2){ $f1=Fit-Font $g $l2 $f1.Size $textW }
  $y=150
  $g.DrawString($l1,$f1,$white,66,$y); $y+=[int]($f1.Size*1.18)
  if($l2){ $g.DrawString($l2,$f1,$flame,66,$y); $y+=[int]($f1.Size*1.18) }
  $y+=18
  $g.DrawString($sub,$fSub,$white,[System.Drawing.RectangleF]::new(72,$y,$textW,120))
  $g.DrawString('ionascu.com',$fSub,$soft,72,556)
  $g.Dispose(); Save-Jpg $bmp (Join-Path $out "$name$suffix.jpg"); $bmp.Dispose()
}

function Make-Home($suffix,$h1a,$h1b,$s1,$s2){
  $c=New-Canvas; $bmp=$c[0]; $g=$c[1]
  $hero=[System.Drawing.Image]::FromFile((Join-Path $assets 'hero-poster.png')); Draw-Cover $g $hero 0 0 1200 630; $hero.Dispose()
  $grad=[System.Drawing.Drawing2D.LinearGradientBrush]::new([System.Drawing.Rectangle]::new(0,0,1200,630),[System.Drawing.Color]::FromArgb(240,27,38,50),[System.Drawing.Color]::FromArgb(30,27,38,50),[single]0); $g.FillRectangle($grad,0,0,1200,630)
  $fH=Fit-Font $g $h1a 104 1056; $fSub=[System.Drawing.Font]::new('Roboto',30,$reg,$px); $fBrand=[System.Drawing.Font]::new('Roboto Condensed',28,[System.Drawing.FontStyle]::Bold,$px)
  $g.DrawString('IONASCU',$fBrand,$flame,72,96)
  $g.DrawString($h1a,$fH,$white,66,140); $g.DrawString($h1b,$fH,$flame,66,262)
  $g.DrawString($s1,$fSub,$white,72,415); $g.DrawString($s2,$fSub,$soft,72,461)
  $g.Dispose(); Save-Jpg $bmp (Join-Path $out "home$suffix.jpg"); $bmp.Dispose()
}

function Make-Portfolio($suffix,$title,$sub){
  $c=New-Canvas; $bmp=$c[0]; $g=$c[1]; $g.Clear($navy)
  $names='ikea.jpg','cambridge-skylights.png','sagiper.png','metigla.png','roofart.jpg','vodaland-separator.png'
  $gap=8; $cw=[int]((1200-4*$gap)/3); $ch=[int]((500-3*$gap)/2)
  for($i=0;$i -lt 6;$i++){ $col=$i%3; $row=[int][Math]::Floor($i/3); $x=$gap+$col*($cw+$gap); $y=$gap+$row*($ch+$gap)
    $im=[System.Drawing.Image]::FromFile((Join-Path $assets "portfolio\$($names[$i])")); Draw-Cover $g $im $x $y $cw $ch; $im.Dispose() }
  $fA=[System.Drawing.Font]::new('Impact',66,$reg,$px); $fS=[System.Drawing.Font]::new('Roboto',26,$reg,$px)
  $g.DrawString($title,$fA,$flame,30,528)
  $w=$g.MeasureString($title,$fA).Width
  $g.DrawString($sub,$fS,$white,[single](30+$w+24),[single]566)
  $g.Dispose(); Save-Jpg $bmp (Join-Path $out "portfolio$suffix.jpg"); $bmp.Dispose()
}

Make-Home '' 'YOUR PRODUCT,' 'ANIMATED.' '3D assembly & installation instruction videos' "for manufacturers  $dot  ionascu.com"
Make-Home '-ro' 'PRODUSUL DVS.,' 'ANIMAT.' 'Videoclipuri 3D cu instrucțiuni de asamblare și instalare' "pentru producători  $dot  ionascu.com"
Make-Home '-ru' 'ВАШ ПРОДУКТ,' 'В АНИМАЦИИ.' '3D-видеоинструкции по сборке и монтажу' "для производителей  $dot  ionascu.com"
Make-Portfolio '-ru' 'ПОРТФОЛИО' "3D-анимации сборки и монтажа  $dot  ionascu.com"
Make-Portfolio '' 'PORTFOLIO' "3D assembly & installation animations  $dot  ionascu.com"
Make-Portfolio '-ro' 'PORTOFOLIU' "Animații 3D de asamblare și instalare  $dot  ionascu.com"
foreach($p in $pages.en){ Make-Page $p '' }
foreach($p in $pages.ro){ Make-Page $p '-ro' }
foreach($p in $pages.ru){ Make-Page $p '-ru' }
Get-ChildItem $out -Filter '*.jpg' | Select-Object -ExpandProperty Name
