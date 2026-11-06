# Draws the social-share (og:image) pictures, 1200x630, for the pages that have no picture of their own.
# Run from the project folder:   powershell -ExecutionPolicy Bypass -File tools\make-og.ps1
# Output: public/og/<name>.jpg  (the pages point to them with image="/og/<name>.jpg")
# Needs Windows (System.Drawing) and the fonts Impact and Roboto. To add a page: add a line to $pages below.
param([string]$Root = (Split-Path -Parent $PSScriptRoot))
Add-Type -AssemblyName System.Drawing
$out = Join-Path $Root 'public\og'; New-Item -ItemType Directory -Force $out | Out-Null
$assets = Join-Path $Root 'src\assets'
$px = [System.Drawing.GraphicsUnit]::Pixel; $reg = [System.Drawing.FontStyle]::Regular
$flame = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(255,177,98))
$white = [System.Drawing.Brushes]::White
$soft  = [System.Drawing.SolidBrush]::new([System.Drawing.Color]::FromArgb(220,238,233,223))

# name, background image (relative to src/assets), line 1 (white), line 2 (orange, may be empty), subtitle, layout
$pages = @(
  @('about',        'people\nicolae.jpg',            'NICOLAE',               'IONASCU',               "3D artist  $([char]183)  25+ years of experience", 'portrait'),
  @('services',     'hero-poster.png',               'SERVICES',              '',                      '3D assembly & installation instruction animations', 'full'),
  @('service-3d-assembly-instruction-animation', 'portfolio\ikea.jpg', '3D ASSEMBLY & INSTALLATION', 'INSTRUCTION ANIMATION', 'Step-by-step films that replace long manuals', 'full'),
  @('service-3d-product-animation', 'portfolio\roofart.jpg', '3D PRODUCT ANIMATION', '& EXPLAINER VIDEO', 'Show what your product is and why it is better', 'full'),
  @('service-interactive-3d-product-instructions', 'portfolio\metigla.png', 'INTERACTIVE 3D', 'PRODUCT INSTRUCTIONS', 'Rotate, zoom and click parts in the browser', 'full'),
  @('process',      'portfolio\cambridge-skylights.png', 'PROCESS',           '',                      'How a technical 3D film is made: from idea to final video', 'full'),
  @('testimonials', 'portfolio\marantec-wke.png',    'WHAT CLIENTS',          'SAY',                   'Manufacturers on working with Nicolae Ionascu', 'full'),
  @('contact',      'hero-poster.png',               'GET A QUOTE',           '',                      'Send me your manual, drawings or a 3D/CAD model', 'full'),
  @('blog',         'portfolio\roofart-tdm.png',     'BLOG',                  '',                      'Practical guides on assembly instructions and technical animation', 'full'),
  @('blog-how-to-create-3d-assembly-instructions', 'portfolio\sagiper.png', 'HOW TO CREATE', '3D ASSEMBLY INSTRUCTIONS', 'What you provide and how the process works', 'full'),
  @('blog-tekom-2026', 'hero-poster.png',            'TEKOM 2026',            'WAYS TO WORK TOGETHER', 'Formats of cooperation for technical communication teams', 'full')
)

function Save-Jpg($bmp,$path){ $enc=[System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object MimeType -eq 'image/jpeg'; $ep=[System.Drawing.Imaging.EncoderParameters]::new(1); $ep.Param[0]=[System.Drawing.Imaging.EncoderParameter]::new([System.Drawing.Imaging.Encoder]::Quality,90L); $bmp.Save($path,$enc,$ep) }
function Draw-Cover($g,$img,$x,$y,$w,$h){ $s=[Math]::Max($w/$img.Width,$h/$img.Height); $sw=$w/$s; $sh=$h/$s; $sx=($img.Width-$sw)/2; $sy=($img.Height-$sh)/2; $g.DrawImage($img,[System.Drawing.Rectangle]::new($x,$y,$w,$h),[single]$sx,[single]$sy,[single]$sw,[single]$sh,$px) }
function Fit-Font($g,$text,$max,$width){ for($s=$max;$s -ge 36;$s-=2){ $f=[System.Drawing.Font]::new('Impact',$s,$reg,$px); if($g.MeasureString($text,$f).Width -le $width){ return $f } } return [System.Drawing.Font]::new('Impact',36,$reg,$px) }

foreach($p in $pages){
  $name,$bgRel,$l1,$l2,$sub,$layout = $p
  $bmp=[System.Drawing.Bitmap]::new(1200,630); $g=[System.Drawing.Graphics]::FromImage($bmp)
  $g.SmoothingMode='AntiAlias'; $g.InterpolationMode='HighQualityBicubic'; $g.TextRenderingHint='AntiAliasGridFit'; $g.PixelOffsetMode='HighQuality'
  $bg=[System.Drawing.Image]::FromFile((Join-Path $assets $bgRel))
  if($layout -eq 'portrait'){
    $g.Clear([System.Drawing.Color]::FromArgb(27,38,50)); Draw-Cover $g $bg 700 0 500 630
    $edge=[System.Drawing.Drawing2D.LinearGradientBrush]::new([System.Drawing.Rectangle]::new(660,0,120,630),[System.Drawing.Color]::FromArgb(255,27,38,50),[System.Drawing.Color]::FromArgb(0,27,38,50),[single]0); $g.FillRectangle($edge,660,0,120,630)
    $textW=600
  } else {
    Draw-Cover $g $bg 0 0 1200 630
    $grad=[System.Drawing.Drawing2D.LinearGradientBrush]::new([System.Drawing.Rectangle]::new(0,0,1200,630),[System.Drawing.Color]::FromArgb(238,27,38,50),[System.Drawing.Color]::FromArgb(60,27,38,50),[single]0); $g.FillRectangle($grad,0,0,1200,630)
    $textW=1056
  }
  $bg.Dispose()
  $fBrand=[System.Drawing.Font]::new('Roboto Condensed',28,[System.Drawing.FontStyle]::Bold,$px)
  $fSub=[System.Drawing.Font]::new('Roboto',30,$reg,$px)
  $g.DrawString('IONASCU',$fBrand,$flame,72,70)
  $size=100; $f1=Fit-Font $g $l1 $size $textW
  if($l2){ $f2=Fit-Font $g $l2 $f1.Size $textW; $f1=$f2 } else { $f2=$f1 }
  $y=150
  $g.DrawString($l1,$f1,$white,66,$y); $y+=[int]($f1.Size*1.18)
  if($l2){ $g.DrawString($l2,$f1,$flame,66,$y); $y+=[int]($f1.Size*1.18) }
  $y+=18
  $rect=[System.Drawing.RectangleF]::new(72,$y,$textW,120)
  $g.DrawString($sub,$fSub,$white,$rect)
  $g.DrawString('ionascu.com',$fSub,$soft,72,556)
  $g.Dispose(); Save-Jpg $bmp (Join-Path $out "$name.jpg"); $bmp.Dispose()
  "{0}.jpg" -f $name
}
