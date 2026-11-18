// Romanian texts for the portfolio: titles, short summaries and the project descriptions (see descriptions.ts for English).
import type { Project } from './projects';
import type { ProjectNote } from './descriptions';

export const projectTitleRo = (p: Project) =>
  p.showcase
    ? `${p.brand} ${p.product} – animație 3D de asamblare`
    : `${p.brand}${p.product ? ' ' + p.product : ''} – animație 3D de instalare`;

const categoryRo: Record<string, string> = {
  Drainage: 'drenaj',
  Furniture: 'mobilier',
  Lighting: 'iluminat',
  Roofing: 'acoperișuri',
  Siding: 'placări exterioare',
  Yard: 'curte și grădină',
  Other: 'altele',
};

const summariesRo: Record<string, string> = {
  'ikea-helmer-assembly-animation': 'O prezentare personală: manualul IKEA HELMER cu multe pagini transformat într-o animație 3D de asamblare de un minut.',
  'vodaland-sand-trap-base': 'Animație de instalare a bazei de nisip din plastic Vodaland de 4" (DN100) pentru sisteme de drenaj.',
};

export const projectSummaryRo = (p: Project) =>
  summariesRo[p.slug] ??
  `Animație 3D de instalare pas cu pas pentru ${p.brand}${p.product ? ' ' + p.product : ''} (${categoryRo[p.category] ?? p.category.toLowerCase()}), realizată pornind de la instrucțiunile de asamblare ale clientului.`;

const ARCTICA =
  'RoofArt ARCTICA este o țiglă metalică dublu modulară: fiecare panou are două module de 350 mm, 1205 x 770 mm, cântărește aproximativ 4 kg pe m², iar elementele de fixare sunt ascunse în suprapunerea panourilor, astfel încât nimic nu este găurit prin suprafața vizibilă. Orice panou poate fi scos ulterior, chiar și din mijlocul acoperișului, iar un acoperiș de această dimensiune poate fi montat de două persoane. Pantă minimă de 15 grade, șase culori, garanție anticorozivă de 50 de ani și garanție a culorii de 25 de ani.';

export const descriptionsRo: Record<string, ProjectNote> = {
  'cambridge-skylights': {
    text: 'Un ghid de instalare în șase pași pentru un luminator de acoperiș de 600 x 600 mm. Filmul arată mai întâi avantajele produsului, apoi fiecare pas de asamblare până la rezultatul final. Clientul a fost implicat îndeaproape: am convenit scenariul prin întrebări și răspunsuri, iar modificările cerute au fost incluse înainte de livrare.',
  },
  ledi: {
    text: 'Un film de instalare Full HD de 165 de secunde pentru un sistem de iluminat LED, prima animație de produs a clientului. Am început cu un animatic brut pentru a conveni povestea și succesiunea pașilor, apoi am randat imaginile finale. Pe măsură ce clientul a adăugat pași noi pe parcurs, filmul a crescut până a acoperit instalarea completă.',
  },
  marantec: {
    text: 'Un film de instalare de 248 de secunde pentru seriile Synergy 200 și 300 de motoare pentru uși de garaj. Lucrul a urmat trei etape: un scenariu cu cronometrare exactă, un animatic, apoi randarea și postproducția. Clientul a rafinat detaliile pe tot parcursul, iar filmul a fost ajustat fin până când fiecare pas a corespuns produsului real.',
  },
  'ts-pool': {
    text: 'Un film Full HD cu muzică în care produsul se asamblează singur, piesă cu piesă. Am convenit ideea mai întâi într-un animatic brut, apoi am trecut la vizualizare și compoziție.',
  },
  'true-metal-supply': {
    text: 'Animații de instalare pentru un furnizor american de acoperișuri și placări metalice. De-a lungul timpului au fost realizate mai multe filme scurte, inclusiv unul pentru un ancoraj de stâlp și o scurtă animație modelată. Clientul a revenit pentru filme noi, ceea ce arată că formatul funcționează pentru el.',
  },
  fourseasons: {
    text: 'Videoclipuri scurte de instalare pentru o companie canadiană de acoperișuri, fiecare cu animația logoului. Aceeași colaborare a inclus profilele și tablele de finisaj individuale randate în 4K cu transparență pentru site-ul companiei, iar ulterior un scurt videoclip de instalare pentru un brand înrudit.',
  },
  sagiper: {
    text: 'Un film de instalare pentru un sistem de placări exterioare și soffit, produs pentru piața nord-americană. Am revizuit împreună un animatic brut cu text: tăierea repetitivă cu fierăstrăul a fost eliminată, a fost adăugată o pauză la pasul critic, iar logoul a fost plasat. Filmul a fost apoi randat și însoțit de muzică. Cadre din film au fost folosite ulterior în materiale tipărite.',
  },
  metigla: {
    product: 'METIGLA EDGE este un sistem dreptunghiular de colectare a apei pluviale din oțel, cu îmbinare „click-and-play”, realizat din oțel complet reciclabil pe linii robotizate din România. A fost lansat în 2026 ca primul sistem complet dreptunghiular din oțel pentru apă pluvială produs în țară.',
    text: 'Un film de instalare pentru sistemul de apă pluvială Metigla, care arată cum se potrivesc jgheaburile, burlanele și elementele de fixare pentru o instalare rapidă și îngrijită.',
  },
  aquasystem: {
    product: 'Soffituri metalice AQUASYSTEM: panouri metalice perforate și pline care închid partea inferioară a streașinilor și ventilează spațiul acoperișului.',
    text: 'Un film de instalare pentru soffiturile metalice AQUASYSTEM, bazat pe recomandările de instalare ale producătorului. Arată cum se fixează panourile soffit sub streașină și cum se întâlnesc cu profilele și tablele de finisaj.',
  },
  sagiwall: {
    product: 'Placaj PVC cu pană și uluc, de grosime mare, cu strat superior PVDF care blochează peste 95% din razele UV, în 27 de finisaje, în lungimi de 12 ft și 19 ft.',
    text: 'Un film de instalare pentru placările exterioare SAGIWALL, realizat pentru Sagiper. Îl ghidează pe montator, pas cu pas, în fixarea panourilor cu pană și uluc împreună cu profilele de finisaj.',
  },
  'marantec-wke': {
    product: 'Tastatura wireless de acces fără cheie le permite proprietarilor să deschidă o ușă de garaj cu un cod personal, în loc de telecomandă.',
    text: 'Un film scurt de instalare pentru o tastatură wireless care deschide o ușă de garaj cu un cod PIN. Arată montarea, asocierea cu motorul și setarea codului.',
  },
  roofart: {
    text: 'Filme de instalare pentru un producător moldovean de acoperișuri metalice și sisteme de colectare a apei pluviale, cu o filială în România. Fiecare versiune a trecut prin runde de feedback cu echipele lor de marketing și de producție, verificată față de ordinea reală a instalării și de regulile de brand (poziția logoului, denumirile produselor, dimensiunea textului). Filmele au fost livrate în engleză și în română.',
  },
  'roofart-opritor': {
    text: 'Un film de instalare pentru opritoarele de zăpadă Roofart. În timpul revizuirii, echipa de producție a verificat ordinea în care se montează țevile, iar detalii precum logoul de pe unelte au fost corectate. Livrat în română și engleză.',
  },
  'roofart-tdm': {
    product: ARCTICA,
    text: 'Un film de instalare pentru țigla metalică dublu modulară RoofArt (TDM, țiglă dublu modulară). Arată cum se așază panourile cu două module cu elemente de fixare ascunse, cum se montează accesoriile precum streașina, coama și lateralele și de ce acoperișul poate fi montat de o echipă mică.',
  },
  'double-modular': {
    product: ARCTICA,
    text: 'Aceeași țiglă dublu modulară prezentată ca o fișă separată pe vechiul site; în prezent folosește același videoclip ca RoofArt TDM.',
  },
  'vodaland-minislot': {
    product: 'Canalul de drenaj Mini Slot are doar 4 inci lățime, cu o fantă îngustă de 5/8 inch, astfel încât se integrează aproape invizibil în betoane sau în suprafețe pavate.',
    text: 'Un film de 60 de secunde pentru un canal de drenaj cu fantă din oțel inoxidabil. Lucrul a urmat trei etape: animatic, simulări și vizualizare, potrivite cu stilul vizual al randărilor proprii ale produsului clientului. Ulterior filmul a fost actualizat astfel încât secțiunea de conectare să arate doar sigilant, după ce clienții fuseseră induși în eroare de o altă metodă de fixare.',
  },
  'vodaland-sand-trap-base': {
    text: 'Unul dintr-o serie de filme despre produse de drenaj pentru Vodaland. Fiecare film este verificat de companie față de produsul real înainte de a fi acceptat, până la detalii precum direcția logoului.',
  },
  'vodaland-border': {
    product: 'Bordură de plastic furnizată în lungimi de 1 m, fiecare cu cinci poziții pentru ancorele EasyPave.',
    text: 'Un film de produs pentru o bordură de plastic pentru amenajarea peisagistică, realizat pentru Vodaland. Face parte dintr-o serie de filme de lungă durată pentru produsele de drenaj și de curte ale companiei.',
  },
  'vodaland-separator': {
    text: 'Un film de produs pentru un separator Vodaland, parte din seria de animații de produse de drenaj și de curte realizate pentru companie.',
  },
  'vodaland-easypave': {
    product: 'EasyPave este un sistem de grilă pentru armarea terenului; bordurile și ancorele blochează grila și pavajul în poziție.',
    text: 'Un film de produs pentru sistemul de pavare Easypave de la Vodaland, parte din seria de animații de produse de drenaj și de curte realizate pentru companie.',
  },
  'ikea-helmer-assembly-animation': {
    text: 'O animație de asamblare pas cu pas pentru dulapul cu sertare IKEA HELMER: fiecare piesă, șurub și sertar arătate în ordinea în care se montează, astfel încât clientul îl poate urmări fără să citească niciun cuvânt.',
  },
  opure: {
    text: 'Un film scurt de produs pentru Opure, care arată produsul și cum se instalează în curte sau în grădină.',
  },
  ecomodule: {
    text: 'Un film de instalare pentru sistemul Ecomodule, care arată pas cu pas cum se potrivesc piesele lui.',
  },
  'pvc-fence': {
    text: 'Un film de instalare pentru un gard din PVC: stâlpii, panourile și elementele de fixare arătate în ordinea în care se asamblează.',
  },
};
