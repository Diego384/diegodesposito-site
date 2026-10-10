const candidates = [
  {
    slug: 'osteria-al-buco', name: 'Osteria Al Buco', kind: 'Osteria · Vico Equense', theme: 'buco',
    official: 'https://osteriaalbuco.wixsite.com/website',
    headlineA: 'La tradizione', headlineB: 'inizia da qui.',
    intro: 'Un concept editoriale per portare in primo piano l’identità dell’osteria, la proposta di cucina di mare e di terra e la pizza cotta nel forno a legna, con un percorso semplice anche da smartphone.',
    fact: 'Il sito pubblico racconta una storia iniziata nel 1969 e presenta cucina di mare e di terra insieme alla pizza cotta nel forno a legna.',
    focus: [
      ['01', 'La storia del locale', 'Una presentazione breve e leggibile, con le informazioni da confermare insieme alla proprietà.'],
      ['02', 'Menu in evidenza', 'Un accesso diretto alla proposta gastronomica, mantenuta aggiornata dal ristorante.'],
      ['03', 'Contatto senza attriti', 'Un percorso mobile chiaro. Telefono e prenotazioni si attivano solo con recapiti confermati.']
    ],
    first: 'Riordino della pagina iniziale e del percorso verso il menu, con verifica dei collegamenti e delle informazioni pratiche.',
    close: 'La prima consegna può essere una pagina mobile essenziale; orari, menu e canali di prenotazione restano quelli approvati dal locale.',
    art: 'CUCINA VICANA', mark: 'AB'
  },
  {
    slug: 'ristorante-mustafa', name: 'Ristorante Mustafà', kind: 'Ristorante · Marina d’Equa', theme: 'mustafa',
    official: 'https://www.ristorantemustafa.it/it/menu/',
    headlineA: 'Dal menu', headlineB: 'al tavolo.',
    intro: 'Una proposta digitale pensata per chi sta scegliendo dove mangiare: menu facile da raggiungere, informazioni essenziali ben ordinate e un percorso diretto verso i canali ufficiali del ristorante.',
    fact: 'Il sito ufficiale presenta il ristorante a Marina d’Equa, una sezione menu e un percorso per la prenotazione del tavolo.',
    focus: [
      ['01', 'Menu consultabile', 'Una pagina ordinata e aggiornata dal ristorante, progettata prima di tutto per il telefono.'],
      ['02', 'Informazioni pratiche', 'Posizione, dettagli e contatti raccolti in una struttura facile da scorrere.'],
      ['03', 'Richiesta di prenotazione', 'Il pulsante conduce al canale scelto e confermato dal titolare, senza simulare prenotazioni.']
    ],
    first: 'Riorganizzazione mobile di menu, posizione e contatti; data e contenuti del menu vengono concordati con il ristorante.',
    close: 'Nessuna disponibilità o prenotazione è attiva in questa anteprima. Il percorso reale si collega solo ai sistemi autorizzati.',
    art: 'MARINA D’EQUA', mark: 'M'
  },
  {
    slug: 'caseificio-starace', name: 'Caseificio Starace', kind: 'Caseificio · Vico Equense', theme: 'starace',
    official: 'https://www.caseificiostarace1920.com/',
    headlineA: 'Il sapere', headlineB: 'si fa esperienza.',
    intro: 'Un concept che distingue con immediatezza il racconto del caseificio, le esperienze e i prodotti, aiutando il visitatore a capire quale percorso approfondire.',
    fact: 'Il sito pubblico racconta una tradizione familiare dal 1920 e presenta esperienze di lavorazione casearia, prodotti e shop.',
    focus: [
      ['01', 'Esperienze', 'Una sezione dedicata a cosa si fa, a chi è rivolto e a come chiedere informazioni.'],
      ['02', 'Prodotti', 'Categorie leggibili e schede aggiornabili a partire dai dati confermati dal caseificio.'],
      ['03', 'Percorsi distinti', 'Visita, shop e racconto del caseificio con accessi chiari, senza duplicare contenuti.']
    ],
    first: 'Revisione della navigazione e della resa mobile tra esperienze e shop; testi, prezzi e disponibilità vengono validati dal titolare.',
    close: 'Catalogo, prezzi e prenotazioni qui sono dimostrativi: nessun acquisto o appuntamento può essere effettuato da questa pagina.',
    art: 'ARTE CASEARIA', mark: 'S'
  },
  {
    slug: 'cerase-vico-equense', name: 'Cerasè', kind: 'Ristorante · Vico Equense', theme: 'cerase',
    official: 'https://www.cerasevicoequense.it/',
    headlineA: 'Dalla tavola', headlineB: 'alla permanenza.',
    intro: 'Un concept che mette in relazione il ristorante e Cerasè Apartment, lasciando chiara la scelta iniziale e dando spazio a menu, informazioni e soggiorno.',
    fact: 'Il sito presenta una proposta di cucina di mare e pizza e rimanda anche a Cerasè Apartment.',
    focus: [
      ['01', 'Scegli il percorso', 'Due accessi ben distinti per chi cerca il ristorante e per chi vuole conoscere l’appartamento.'],
      ['02', 'Menu e cucina', 'Una pagina dedicata ai contenuti gastronomici forniti e approvati dal locale.'],
      ['03', 'Informazioni aggiornate', 'Eventi, contatti e contenuti stagionali da rivedere con la proprietà prima della pubblicazione.']
    ],
    first: 'Un intervento circoscritto alla gerarchia della homepage e ai collegamenti tra ristorante e appartamento, con verifica dei contenuti insieme alla proprietà.',
    close: 'Questo concept non modifica il sito esistente e non pubblica menu, eventi o disponibilità aggiornati.',
    art: 'CUCINA · OSPITALITÀ', mark: 'C'
  },
  {
    slug: 'bb-stella', name: 'B&B Stella', kind: 'Bed & Breakfast · Vico Equense', theme: 'stella',
    official: 'https://www.bnbstella.it/',
    headlineA: 'Due camere.', headlineB: 'La tua partenza.',
    intro: 'Una pagina accogliente che mette in ordine camere, servizi e informazioni per muoversi sul territorio, rendendo più semplice chiedere disponibilità al canale scelto dalla struttura.',
    fact: 'Il sito descrive due camere con bagno privato, climatizzatore e Wi-Fi e raccoglie itinerari per la zona.',
    focus: [
      ['01', 'Le camere', 'Caratteristiche e dotazioni presentate in modo immediato, usando materiali approvati dalla struttura.'],
      ['02', 'Come organizzarsi', 'Informazioni di arrivo e collegamenti al territorio raccolti in una pagina ordinata.'],
      ['03', 'Richiedi disponibilità', 'Un contatto chiaro, da collegare solo all’indirizzo o al canale confermato dalla titolare.']
    ],
    first: 'Una pagina responsive per camere, servizi e richiesta di disponibilità, con revisione dei contenuti prima della messa online.',
    close: 'La demo non mostra camere reali né gestisce richieste di soggiorno.',
    art: 'OSPITALITÀ · VICO EQUENSE', mark: 'ST'
  },
  {
    slug: 'frate-cosimo', name: 'Frate Cosimo', kind: 'Ristorante · Pizzeria · Preazzano', theme: 'frate',
    official: 'https://www.fratecosimo.it/',
    headlineA: 'Sapori vicani,', headlineB: 'senza giri lunghi.',
    intro: 'Un concept essenziale per trovare da telefono ciò che serve: proposta del locale, menu, indicazioni e contatto, collegati alle fonti ufficiali aggiornate.',
    fact: 'Il sito presenta Frate Cosimo come ristorante e pizzeria a Preazzano e rimanda al menu e alle indicazioni stradali.',
    focus: [
      ['01', 'Menu a portata di mano', 'Un ingresso diretto alla versione del menu scelta dal ristorante.'],
      ['02', 'Come arrivare', 'La posizione e le indicazioni ufficiali subito visibili su schermi piccoli.'],
      ['03', 'Contatti essenziali', 'Telefono ed email con azioni semplici, dopo una verifica dei recapiti.']
    ],
    first: 'Pagina singola mobile con menu, posizione e contatti; collegamenti e informazioni vengono verificati con l’attività.',
    close: 'I pulsanti di chiamata, mappa e menu restano inattivi in questa dimostrazione.',
    art: 'PREAZZANO · VICO EQUENSE', mark: 'FC'
  },
  {
    slug: 'caseificio-luigi-parlato', name: 'Caseificio Luigi Parlato', kind: 'Caseificio · Arola', theme: 'parlato',
    official: 'https://caseificioparlato.it/',
    headlineA: 'Una tradizione', headlineB: 'da tramandare.',
    intro: 'Una proposta di sito che unisce la storia del caseificio, il Provolone del Monaco e le informazioni pratiche per capire come conoscere e acquistare i prodotti.',
    fact: 'Il sito racconta un’attività avviata nel 1973 ad Arola e la produzione di Provolone del Monaco.',
    focus: [
      ['01', 'La storia', 'Una presentazione breve della lavorazione e della tradizione, basata sui contenuti approvati.'],
      ['02', 'Prodotti', 'Schede essenziali per le specialità, senza attivare ordini o disponibilità non concordate.'],
      ['03', 'Come acquistare', 'Informazioni pratiche e contatti che il caseificio desidera rendere pubblici.']
    ],
    first: 'Prima versione di una pagina storia-prodotti-contatti, con testi e immagini forniti o approvati dal caseificio.',
    close: 'La scheda prodotto è un esempio grafico: non rappresenta un catalogo ufficiale né un servizio di vendita.',
    art: 'AROLA · DAL 1973', mark: 'LP'
  },
  {
    slug: 'caseificio-carbone', name: 'Caseificio Carbone', kind: 'Caseificio · Moiano', theme: 'carbone',
    official: 'https://www.caseificiocarbone.it/',
    headlineA: 'Dalla bottega', headlineB: 'alle persone.',
    intro: 'Un concept che accompagna il visitatore tra specialità casearie e punti vendita, con un percorso pratico per trovare il prodotto e il luogo più comodo.',
    fact: 'Il sito pubblico racconta il caseificio a Moiano, presenta prodotti e dedica una sezione ai punti vendita.',
    focus: [
      ['01', 'Specialità in evidenza', 'Schede ordinate per raccontare i prodotti, partendo da testi approvati dall’attività.'],
      ['02', 'Punti vendita', 'Sedi e indicazioni strutturate per consultazione rapida da telefono.'],
      ['03', 'Contatto', 'Una via chiara per chiedere informazioni, senza carrello o ordini simulati.']
    ],
    first: 'Revisione responsive delle pagine prodotto e punti vendita; nomi, sedi e dati si verificano prima della pubblicazione.',
    close: 'Nessun punto vendita o prodotto può essere raggiunto o acquistato tramite questo concept.',
    art: 'MOIANO · SAPORI LOCALI', mark: 'CB'
  },
  {
    slug: 'casale-del-golfo', name: 'Il Casale del Golfo', kind: 'Ospitalità · Moiano', theme: 'casale',
    official: 'https://www.ilcasaledelgolfo.it/chi-siamo/',
    headlineA: 'Un luogo,', headlineB: 'più modi di viverlo.',
    intro: 'Una proposta di navigazione per distinguere soggiorno, ristorazione e occasioni speciali, così ogni visitatore può iniziare dal percorso che gli interessa.',
    fact: 'Il concept ipotizza percorsi distinti per soggiorno, ristorazione e occasioni speciali: la presenza e la struttura di ciascun servizio sono da confermare con la proprietà.',
    focus: [
      ['01', 'Soggiornare', 'Un percorso dedicato a tipologie, dotazioni e richiesta di informazioni, da completare con la struttura.'],
      ['02', 'Mangiare', 'Un accesso chiaro alla ristorazione e ai contenuti aggiornati direttamente dall’attività.'],
      ['03', 'Occasioni speciali', 'Una pagina informativa sugli eventi, da progettare in base ai servizi confermati.']
    ],
    first: 'Prototipo della navigazione principale e dei tre percorsi; prima di svilupparlo vanno confermati servizi e contenuti attuali.',
    close: 'I contenuti e le funzioni qui rappresentati sono proposte visive da validare con la proprietà prima di qualsiasi progetto.',
    art: 'OSPITALITÀ · MOIANO', mark: 'CG'
  },
  {
    slug: 'ristorante-sant-angelo-monte-faito', name: 'Ristorante Sant’Angelo', kind: 'Ristorante · Monte Faito', theme: 'santangelo',
    official: 'https://ristorantesantangelomontefaito.it/',
    headlineA: 'La montagna', headlineB: 'incontra la tavola.',
    intro: 'Un concept per portare in primo piano menu e indicazioni per arrivare al ristorante sul Monte Faito, con una grafica che richiama il paesaggio senza usare foto o marchi dell’attività.',
    fact: 'Il sito pubblico presenta il ristorante sul Monte Faito, un menu e la possibilità di prenotare per telefono.',
    focus: [
      ['01', 'Menu leggibile', 'Categorie ordinate e facili da consultare, da aggiornare solo con il menu confermato.'],
      ['02', 'Posizione e accesso', 'Informazioni per raggiungere la struttura valorizzate e leggibili da mobile.'],
      ['03', 'Contatto autorizzato', 'Telefono o altro canale scelto dal ristorante: nessuna chiamata o prenotazione parte da questa demo.']
    ],
    first: 'Aggiornamento mirato dell’esperienza mobile di menu, posizione e contatto, senza cambiare il sistema di prenotazione esistente.',
    close: 'Menu, orari e disponibilità non sono operativi in questa anteprima; consultare sempre le informazioni ufficiali.',
    art: 'MONTE FAITO · GOLFO DI NAPOLI', mark: 'SA'
  }
];

const esc = function(value) {
  return String(value).replace(/[&<>"']/g, function(character) {
    return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[character];
  });
};

const app = document.getElementById('app');
const pageType = document.body.dataset.view;

function sharedHeader() {
  return '<div class="disclosure"><span>CONCEPT INDIPENDENTE</span><p>Proposta dimostrativa non commissionata, non ufficiale e non approvata dall’attività.</p><a href="/proposte/">Tutti i concept <b aria-hidden="true">↗</b></a></div>' +
    '<header class="concept-header"><a class="concept-brand" href="/"><span class="brand-mark">D<span>.</span></span><span>Diego.dev<small>WEB CONCEPT · VICO EQUENSE</small></span></a><nav aria-label="Navigazione concept"><a href="/proposte/">Indice</a><a href="https://diegodesposito.it/#contatti">Contatta Diego <span aria-hidden="true">↗</span></a></nav></header>';
}

function sharedFooter(extra) {
  return '<footer class="concept-footer"><a href="/">Diego<span>.</span>dev</a><p>Nome e fatti pubblici sono riportati solo per identificare il soggetto del concept. Nessun rapporto di collaborazione o approvazione è implicato.</p>' + extra + '</footer>';
}

function renderDirectory() {
  document.title = 'Concept web locali | Diego D’Esposito';
  const cards = candidates.map(function(item, index) {
    return '<article class="idea-card theme-' + esc(item.theme) + '"><div class="idea-card-top"><span>' + String(index + 1).padStart(2, '0') + ' / 10</span><span>' + esc(item.kind) + '</span></div><div class="idea-mark" aria-hidden="true">' + esc(item.mark) + '</div><h2>' + esc(item.name) + '</h2><p>' + esc(item.first) + '</p><a href="/proposte/' + esc(item.slug) + '/">Apri il concept <span aria-hidden="true">↗</span></a></article>';
  }).join('');
  app.innerHTML = sharedHeader() +
    '<main id="contenuto"><section class="directory-hero"><div><p class="overline"><span></span> PENISOLA SORRENTINA · 10 PROPOSTE</p><h1>Idee locali,<br><em>fatte per farsi vedere.</em></h1><p class="directory-intro">Dieci concept originali per immaginare come un sito chiaro, veloce e adatto al telefono possa raccontare un’attività del territorio.</p><p class="directory-note">Sono esercizi visivi indipendenti: ogni contenuto, funzione, contatto e immagine andrà condiviso e approvato dal titolare prima di un eventuale progetto.</p><a class="solid-button" href="mailto:info@diegodesposito.it?subject=Confronto%20su%20un%20concept%20web">Parliamo di un progetto <span aria-hidden="true">↗</span></a></div><div class="directory-orbit" aria-hidden="true"><div class="orbit-ring ring-one"></div><div class="orbit-ring ring-two"></div><div class="orbit-card"><small>VICO EQUENSE / WEB STUDIO</small><strong>Una buona<br>prima impressione<br><em>parte da qui.</em></strong><span>10 CONCEPT · 2026</span></div><i class="orbit-dot dot-one"></i><i class="orbit-dot dot-two"></i></div></section><section class="idea-section\" aria-labelledby=\"idea-title\"><div class=\"idea-heading\"><div><p class=\"overline\"><span></span> LA RACCOLTA</p><h2 id=\"idea-title\">Un’idea per<br><em>ogni attività.</em></h2></div><p>Ogni pagina mette in scena una possibile direzione, con contenuti originali e un primo intervento da discutere. I siti ufficiali sono linkati per confronto; nessuna funzione commerciale è attiva qui.</p></div><div class=\"idea-grid\">' + cards + '</div></section></main>' +
    sharedFooter('<a class=\"footer-official\" href=\"mailto:info@diegodesposito.it\">info@diegodesposito.it</a>');
}

function renderConcept(item) {
  document.title = 'Concept indipendente — ' + item.name + ' | Diego D’Esposito';
  const cards = item.focus.map(function(point) {
    return '<article class="focus-card"><span>' + esc(point[0]) + '</span><h3>' + esc(point[1]) + '</h3><p>' + esc(point[2]) + '</p></article>';
  }).join('');
  app.innerHTML = sharedHeader() +
    '<main id="contenuto" class="theme-' + esc(item.theme) + '"><section class="concept-hero"><div class="hero-copy"><p class="overline"><span></span> ' + esc(item.kind.toUpperCase()) + ' <i>·</i> CONCEPT ' + String(candidates.indexOf(item) + 1).padStart(2, '0') + '</p><h1>' + esc(item.headlineA) + '<br><em>' + esc(item.headlineB) + '</em></h1><p class="hero-intro">' + esc(item.intro) + '</p><div class="hero-actions"><a class="solid-button" href="#direzione">Scopri la proposta <span aria-hidden="true">↓</span></a><a class="quiet-link" href="' + esc(item.official) + '" target="_blank" rel="nofollow noopener noreferrer">Sito pubblico di riferimento <span aria-hidden="true">↗</span></a></div><p class="hero-footnote">Anteprima grafica · nessuna prenotazione, richiesta o vendita è attiva</p></div><div class="concept-art\" aria-label=\"Composizione grafica originale per il concept\" role=\"img\"><div class=\"art-grid\"></div><div class=\"art-sun\"></div><div class=\"art-line line-a\"></div><div class=\"art-line line-b\"></div><div class=\"art-orbit\"></div><div class=\"art-caption\">' + esc(item.art) + '</div><div class=\"mini-site\"><div class=\"mini-site-top\"><span>' + esc(item.mark) + '</span><i></i><i></i><i></i><small>CONCEPT UI / 2026</small></div><div class=\"mini-site-body\"><p>' + esc(item.kind.toUpperCase()) + '</p><strong>' + esc(item.name) + '</strong><span>' + esc(item.art) + '</span><div class=\"mini-rule\"></div><div class=\"mini-menu\"><b>Scopri</b><b>Informazioni</b><b>Contatti</b></div><div class=\"mini-cta\">PERCORSO DA CONCORDARE <span>↗</span></div></div></div><span class=\"art-index\">0' + String(candidates.indexOf(item) + 1) + ' / 10</span></div></section><section class=\"direction-section\" id=\"direzione\"><div class=\"direction-title\"><p class=\"overline\"><span></span> IPOTESI DI LAVORO</p><h2>Una presenza digitale<br><em>più semplice da usare.</em></h2></div><div class=\"direction-copy\"><p class=\"fact-note\"><span>IL PUNTO DI PARTENZA</span>' + esc(item.fact) + '</p><p>' + esc(item.close) + '</p><a class=\"official-link\" href=\"' + esc(item.official) + '\" target=\"_blank\" rel=\"nofollow noopener noreferrer\">Confronta con il sito pubblico <span aria-hidden=\"true\">↗</span></a></div></section><section class=\"focus-section\"><div class=\"focus-heading\"><p class=\"overline\"><span></span> LA DIREZIONE VISIVA</p><p>Una struttura possibile, da adattare insieme a chi gestisce l’attività.</p></div><div class=\"focus-grid\">' + cards + '</div></section><section class=\"plan-section\"><div class=\"plan-intro\"><p class=\"overline\"><span></span> PRIMO INTERVENTO</p><h2>Un progetto piccolo,<br><em>con un obiettivo chiaro.</em></h2><p>' + esc(item.first) + '</p></div><div class=\"plan-steps\"><article><span>01</span><div><h3>Confronto</h3><p>Ascolto dell’obiettivo e verifica dei contenuti e dei canali attuali.</p></div></article><article><span>02</span><div><h3>Prototipo approvato</h3><p>Struttura e grafica si definiscono con chi rappresenta l’attività.</p></div></article><article><span>03</span><div><h3>Sviluppo e consegna</h3><p>Funzioni, tempi e preventivo si concordano prima di iniziare.</p></div></article></div></section><section class=\"concept-contact\"><div><p class=\"overline\"><span></span> PROSSIMO PASSO</p><h2>Da concept<br><em>a progetto condiviso.</em></h2></div><div><p>Questa pagina è una proposta indipendente. Se l’attività è interessata, si parte da un confronto e dai contenuti autorizzati.</p><a class=\"solid-button\" href=\"mailto:info@diegodesposito.it?subject=' + encodeURIComponent('Confronto sul concept web per ' + item.name) + '\">Scrivi a Diego <span aria-hidden=\"true\">↗</span></a><a class=\"quiet-link\" href=\"/proposte/\">Torna ai concept <span aria-hidden=\"true\">↖</span></a></div></section></main>' +
    sharedFooter('<a class=\"footer-website\" href=\"' + esc(item.official) + '\" target=\"_blank\" rel=\"nofollow noopener noreferrer\">Apri sito pubblico di riferimento ↗</a>');
}

if (pageType === 'directory') {
  renderDirectory();
} else {
  const slug = document.body.dataset.slug;
  const selected = candidates.find(function(item) { return item.slug === slug; });
  if (selected) renderConcept(selected);
  else {
    document.title = 'Concept web locali | Diego D’Esposito';
    app.innerHTML = sharedHeader() + '<main class=\"not-found\"><h1>Concept non trovato.</h1><a class=\"solid-button\" href=\"/proposte/\">Torna all’indice</a></main>' + sharedFooter('');
  }
}
