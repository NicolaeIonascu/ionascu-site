// Romanian version of src/data/services.ts (same structure, same slugs and videos).
import type { Faq, Service } from './services';

export const commonFaqRo: Faq[] = [
  {
    q: 'Ce aveți nevoie pentru a începe un proiect?',
    a: 'Ghidul existent de asamblare sau de instalare (PDF, desene sau text) și orice fișiere 3D sau CAD, desene ori fotografii ale produsului. Trimiteți ce aveți și stabilim ce mai lipsește.',
  },
  {
    q: 'Văd animația înainte să fie finală?',
    a: 'Da. Lucrul începe cu un scenariu cronometrat și o previzualizare brută a animației, astfel încât puteți aproba succesiunea înainte de randarea finală.',
  },
  {
    q: 'Unde pot folosi filmul finalizat?',
    a: 'Pe site-ul dvs., pe YouTube, pe paginile de produs, pe ecrane din magazine, la târguri și la instruiri. Se livrează ca fișier video standard.',
  },
];

export const servicesRo: Service[] = [
  {
    slug: '3d-assembly-instruction-animation',
    name: 'Animație 3D de asamblare și instalare',
    seoTitle: 'Animație 3D pentru instrucțiuni de asamblare și instalare | IONASCU',
    seoDescription:
      'Animație 3D pas cu pas despre cum se asamblează sau se instalează produsul dvs., realizată din manual sau din modelul CAD. Pentru mobilier, materiale de construcții și echipamente.',
    h1: 'Animație 3D pentru instrucțiuni de asamblare și instalare',
    blurb: 'Videoclipuri pas cu pas care înlocuiesc manualele lungi.',
    lead: 'Clienții nu citesc manuale lungi, cu multe pagini, iar montatorii nu pot ghici ordinea pașilor. O animație scurtă arată fiecare pas, de la prima piesă până la rezultatul final, astfel încât oamenii fac totul corect din prima, cu mai puține apeluri la suport și mai puține retururi.',
    sections: [
      {
        title: 'De la manualul tipărit la instrucțiunea animată',
        paragraphs: [
          'Majoritatea producătorilor au deja un ghid de asamblare sau de instalare: o broșură tipărită, un PDF, un set de desene. Este corect și totuși mulți oameni nu îl pot urmări. Transformăm acest ghid într-o instrucțiune animată. Fiecare pas este arătat în ordine, de la prima piesă până la rezultatul final, astfel încât clientul vede ce are de făcut, în loc să descifreze desene bidimensionale.',
          'Animația păstrează logica manualului dvs.: aceleași piese, aceeași succesiune, aceleași note de siguranță. Se schimbă felul în care este înțeles. Mișcarea arată unde se montează fiecare piesă, în ce sens se rotește și cum se potrivește, iar nimeni nu trebuie să citească niciun cuvânt.',
        ],
      },
      {
        title: 'Nu aveți manual tipărit? Nu este o problemă',
        paragraphs: [
          'Animația nu trebuie să pornească de la o versiune tipărită. Produsul poate fi nou și să nu aibă deloc manual. Dacă avem un model 3D sau CAD, desene ori fotografii, iar inginerul dvs. explică succesiunea lucrărilor, putem realiza direct videoclipul de instalare. Filmul devine atunci instrucțiunea principală, iar paginile tipărite pot fi create din cadrele lui.',
          'Pentru spectator, aceasta este mult mai intuitiv. Un film scurt le permite oamenilor să urmărească lucrarea în ritmul lor, pe telefon, la masă sau pe șantier.',
        ],
      },
      {
        title: 'Asamblare pe masă, instalare pe șantier',
        paragraphs: [
          'Asamblarea se face pe o masă, acasă. Instalarea se face pe un acoperiș, pe un perete sau pe teren, acolo unde produsul întâlnește structura reală. Arătăm ambele: animația așază produsul în mediul său și arată cum se integrează în clădire, cu uneltele și elementele de fixare folosite la fiecare pas.',
        ],
      },
      {
        title: 'Ce primiți',
        bullets: [
          '<strong>Un scenariu cronometrat.</strong> Procesul este împărțit în acțiuni scurte, astfel încât vedeți durata și structura înainte de a anima ceva.',
          '<strong>O previzualizare brută.</strong> Dvs. și specialistul dvs. tehnic verificați ordinea pașilor, poziția fiecărei piese și ritmul.',
          '<strong>Filmul final</strong> ca fișier video standard, gata pentru site-ul dvs., YouTube, un cod QR pe cutie sau un ecran din magazin.',
          '<strong>Imagini ale pașilor</strong> pentru ghidul tipărit, astfel încât videoclipul și tiparul să arate aceeași succesiune.',
        ],
      },
    ],
    videos: ['lrt3ct5HByI', 'd-UUjJY0BCw', '3y16XYr2j8o', 'jEhK-wPAPUo', 'wqqrdCAVzXU', 'bQvHA4M-3Fw'],
    points: [
      { title: 'De la manual la videoclip', text: 'Transformăm textul, desenele sau ghidul dvs. PDF într-o animație clară, cronometrată.' },
      { title: 'Asamblare sau instalare', text: 'Pe o masă, acasă, sau pe șantier, pe un acoperiș, un perete ori pe teren: animația arată cum se potrivește produsul în structura reală.' },
      { title: 'Fiecare pas vizibil', text: 'Piesele, uneltele și elementele de fixare sunt arătate în ordinea exactă a lucrării.' },
      { title: 'Scurt și clar', text: 'Ghidul tipărit cu multe pagini al dulapului IKEA HELMER a devenit o animație de un minut.' },
      { title: 'Video și tipar împreună', text: 'Folosiți animația online, iar imaginile pașilor în ghidul tipărit.' },
      { title: 'Gata pentru orice canal', text: 'Pagina produsului, YouTube, cod QR pe cutie, ecran în magazin.' },
    ],
    faq: [
      {
        q: 'Cu ce este o animație mai bună decât un manual tipărit?',
        a: 'Persoanelor cărora le este greu să își imagineze desene 2D le este ușor să urmărească mișcarea. O animație scurtă arată ce trebuie făcut, în ce ordine și unde se montează fiecare piesă, fără a fi nevoie să citiți.',
      },
      {
        q: 'Puteți anima o întreagă gamă de produse?',
        a: 'Da. Un aspect unitar pentru mai multe produse este obișnuit: un singur stil vizual și o singură structură, repetate pentru fiecare produs.',
      },
      {
        q: 'Pot primi și imagini pentru un ghid tipărit?',
        a: 'Da. Cadrele individuale pot fi exportate ca imagini numerotate ale pașilor, astfel încât videoclipul și ghidul tipărit să arate aceeași succesiune.',
      },
      {
        q: 'Avem nevoie de un manual tipărit existent?',
        a: 'Nu. Un manual ajută, dar nu este obligatoriu. Pentru un produs nou putem porni de la un model 3D sau CAD, desene ori fotografii, împreună cu inginerul dvs. care explică succesiunea, și realizăm direct filmul de instalare.',
      },
    ],
  },
  {
    slug: '3d-product-animation',
    name: 'Animație 3D de produs',
    seoTitle: 'Animație 3D de produs și videoclip de prezentare | IONASCU',
    seoDescription:
      'Filme 3D animate care arată ce este produsul dvs., pentru ce este folosit și de ce este mai bun. Pentru site, vânzări, târguri și rețele sociale.',
    h1: 'Animație 3D de produs și videoclip de prezentare',
    blurb: 'Filme care arată ce este produsul dvs. și de ce este mai bun.',
    lead: 'Un film care vă prezintă produsul: ce este, la ce folosește și de ce este mai bun decât alternativele. Animația 3D poate arăta ce nu poate arăta o cameră: interiorul, materialele, modul de funcționare și un produs care nu a fost încă realizat.',
    sections: [
      {
        title: 'Mai mult decât instalarea: povestea întreagă a produsului',
        paragraphs: [
          'O instrucțiune arată cum se instalează un produs. O animație de produs spune întreaga poveste. Arată ce este produsul, pentru ce a fost creat, cum funcționează, ce îl face mai bun și care sunt caracteristicile lui. Este un film mai lung și mai bogat, făcut pentru cumpărător la fel de mult ca pentru montator.',
          'Fiind realizat în 3D, filmul poate arăta ceea ce nu poate arăta o cameră: interiorul unei unități, straturile și materialele, felul în care piesele lucrează împreună sub sarcină și un produs care nu a fost încă fabricat.',
        ],
      },
      {
        title: 'Ce poate conține un film de produs',
        bullets: [
          '<strong>Scop și utilizare.</strong> La ce folosește produsul și unde este utilizat.',
          '<strong>Cum funcționează.</strong> Secțiuni și vederi explodate care fac principiul vizibil.',
          '<strong>Avantaje și caracteristici.</strong> Beneficiile principale și datele tehnice, evidențiate pe ecran într-un limbaj simplu.',
          '<strong>Instalarea pe scurt.</strong> Cum se montează produsul, prezentat ca parte din poveste și nu ca ghid complet.',
          '<strong>Produsul în mediul său.</strong> O clădire, o instalație, o curte: spectatorul vede cum se integrează.',
        ],
      },
      {
        title: 'Unde funcționează filmul',
        paragraphs: [
          'Pe pagina produsului, în prezentări de vânzări, la târguri, la distribuitori și în rețelele sociale. Mulți clienți folosesc ambele filme: animația de produs pentru marketing și vânzări, iar animația de instrucțiuni pentru suportul de după vânzare.',
        ],
      },
    ],
    featured: {
      id: 'VnTKpfw-2y8',
      title: 'Module de cântărire pentru silozuri',
      text: 'Un film despre modulele de cântărire care permit cântărirea silozurilor. Prezintă produsul, avantajele lui și modul în care se montează, astfel încât cumpărătorul înțelege ce face și de ce merită ales.',
    },
    videos: ['bO8hlWcV6hA', 'mqF5zQI0bek', 's7h52WPbWOg'],
    points: [
      { title: 'Ce este și la ce folosește', text: 'O poveste clară, în unul-două minute, astfel încât cumpărătorul înțelege produsul dintr-o privire.' },
      { title: 'Beneficii, nu doar caracteristici', text: 'Avantajele principale sunt arătate și evidențiate pe ecran, într-un limbaj simplu.' },
      { title: 'Priviți în interior', text: 'Secțiuni și vederi explodate arată structura, straturile și materialele.' },
      { title: 'Înainte de a fi construit', text: 'Realizat din CAD, astfel încât puteți prezenta un produs înainte de prima unitate fabricată.' },
      { title: 'Pentru fiecare canal', text: 'Site, prezentări de vânzări, târguri, rețele sociale și distribuitori.' },
      { title: 'Un singur stil pentru toată gama', text: 'Un aspect unitar pentru toate produsele dvs.' },
    ],
    faq: [
      {
        q: 'Care este diferența dintre o animație de produs și o animație de instrucțiuni?',
        a: 'Un film de instrucțiuni arată cum se asamblează sau se instalează produsul. O animație de produs prezintă ce este, ce face și de ce merită cumpărat. Mulți clienți le folosesc pe ambele: una pentru marketing, cealaltă pentru suportul de după vânzare.',
      },
    ],
  },
  {
    slug: 'interactive-3d-product-instructions',
    name: 'Prezentări interactive 3D',
    seoTitle: 'Prezentări interactive 3D pentru produse | IONASCU',
    seoDescription:
      'Prezentări 3D interactive în browser: rotiți, măriți și apăsați pe piese pentru a vedea cum este construit și cum se instalează produsul. Fără pluginuri, pe orice dispozitiv.',
    h1: 'Prezentări interactive 3D pentru produse',
    blurb: 'Rotiți, măriți și apăsați pe piese direct în browser.',
    lead: 'Mergeți dincolo de videoclip: clienții rotesc și măresc produsul în browser și apasă pe o piesă pentru a vedea cum se instalează. Funcționează pe telefoane și pe computere, fără pluginuri.',
    sections: [
      {
        title: 'Un produs pe care îl puteți explora',
        paragraphs: [
          'Prezentările interactive 3D sunt aplicații demonstrative care rulează direct în browser. Sunt construite pe tehnologia Verge3D, deci nu trebuie instalat nimic, iar ele funcționează pe telefoane, tablete și computere. Clientul nu urmărește o poveste. Clientul ia produsul în mână și îl privește din toate părțile.',
        ],
      },
      {
        title: 'Ce poate face spectatorul',
        bullets: [
          '<strong>Să rotească</strong> modelul 3D în jurul obiectului și să mărească orice detaliu.',
          '<strong>Să ascundă și să afișeze piese</strong> pentru a vedea în interior și pentru a privi mai atent un modul.',
          '<strong>Să citească indicii.</strong> Etichete, texte explicative și pictograme apar unde este nevoie.',
          '<strong>Să audă sunet.</strong> Audio susține explicația acolo unde ajută.',
        ],
      },
      {
        title: 'Configuratoare: de la alegere la producție',
        paragraphs: [
          'Aceeași tehnologie construiește configuratoare de produse. Vizitatorul rotește modelul 3D în browser și alege culoarea, forma, textura și dimensiunile în mod interactiv. Rezultatul nu este doar o imagine. Configurația aleasă poate fi trimisă direct departamentului de producție, care planifică lucrarea, și departamentului financiar, care pregătește prețul și factura.',
          'Toate informațiile sunt strânse fără personal la mijloc, fără retastare și fără neînțelegeri. Pentru managerul de vânzări, munca devine mult mai simplă: comanda sosește completă, iar timpul se duce în discuții cu clienții, nu în colectarea parametrilor.',
        ],
      },
      {
        title: 'Unde se potrivește',
        paragraphs: [
          'Pe o pagină de produs care trebuie să explice un produs complex, la un distribuitor care are nevoie să îl demonstreze, la un târg, pe o tabletă, și în procesul de vânzare în care fiecare client își dorește o variantă puțin diferită. Un model interactiv poate fi adăugat pe propriul site cu un link sau cu un embed.',
        ],
      },
    ],
    videos: [],
    points: [
      { title: 'Apăsați pentru a vedea pasul', text: 'Exemple: canal de drenaj pentru terasă, instalarea cotului și a capacului, sistem de apă pluvială.' },
      { title: 'Rulează în browser', text: 'Fără aplicație sau plugin de instalat. Rapid pe mobil.' },
      { title: 'Integrați în pagina produsului', text: 'Adăugați pe propriul site cu un link sau cu un embed.' },
    ],
    faq: [
      {
        q: 'Trebuie clienții să instaleze ceva?',
        a: 'Nu. Prezentările interactive rulează în browser, pe telefoane, tablete și computere, fără aplicație sau plugin.',
      },
      {
        q: 'Poate un configurator să transmită comanda departamentelor noastre de producție și financiar?',
        a: 'Da. Configurația aleasă de vizitator poate fi trimisă mai departe către producție și finanțe. Modul în care se conectează la sistemele dvs. se stabilește pentru fiecare proiect.',
      },
    ],
  },
];
