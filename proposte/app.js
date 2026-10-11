const candidates = [
  {
    slug: 'osteria-al-buco', name: 'Osteria Al Buco', kind: 'Osteria · Vico Equense', theme: 'buco',
    official: 'https://osteriaalbuco.wixsite.com/website', layout: 'buco',
    thumb: 'buco-tavola.optimized.jpg', thumbAlt: 'Piatto dalla galleria pubblicata dall’Osteria Al Buco',
    hook: 'La storia del 1969, la cucina di mare e di terra e la pizza nel forno a legna, nello stesso percorso.',
    title: 'Dal 1969,<br>il Buco è casa.', intro: 'Cinque tavoli di legno, una famiglia e una cucina legata a Vico Equense: il concept fa partire la navigazione dalla storia vera del locale e porta rapidamente a menu, orari e telefono.',
    media: {
      hero: ['buco-tavola.optimized.jpg', 'Immagine dalla galleria dell’Osteria Al Buco'],
      story: ['buco-storia.optimized.jpg', 'Immagine dalla galleria dell’Osteria Al Buco'],
      food: ['buco-pizza.optimized.jpg', 'Immagine dalla galleria dell’Osteria Al Buco']
    }
  },
  {
    slug: 'ristorante-mustafa', name: 'Ristorante Mustafà', kind: 'Ristorante · Marina d’Equa', theme: 'mustafa',
    official: 'https://www.ristorantemustafa.it/', layout: 'mustafa',
    thumb: 'mustafa-terrazza.optimized.jpg', thumbAlt: 'Terrazza vista mare del Ristorante Mustafà',
    hook: 'La terrazza sulla spiaggia di Marina d’Equa diventa la protagonista del percorso verso tavoli ed eventi.',
    title: 'Un tavolo<br>con vista.', intro: 'A Marina d’Equa, la terrazza sul mare, la cucina di pesce, i dolci fatti in casa e i vini sono già il racconto del Mustafà. Qui immagini e video ufficiali guidano fino al contatto.',
    media: {
      hero: ['mustafa-terrazza.optimized.jpg', 'Terrazza sul mare mostrata dal sito del Ristorante Mustafà'],
      shore: ['mustafa-mare.optimized.jpg', 'Ristorante Mustafà sul mare, immagine del sito ufficiale'],
      evening: ['mustafa-sala.optimized.jpg', 'Terrazza apparecchiata, immagine del sito ufficiale']
    }
  },
  {
    slug: 'caseificio-starace', name: 'Caseificio Starace', kind: 'Caseificio · Vico Equense', theme: 'starace',
    official: 'https://www.caseificiostarace1920.com/', layout: 'starace',
    thumb: 'starace-provolone.optimized.jpg', thumbAlt: 'Provolone di Vico Equense del Caseificio Starace',
    hook: 'Dal tour di due ore alla Mozzarella Experience: esperienze, Provolone e negozio si trovano subito.',
    title: 'Non solo formaggio.<br>Un’esperienza da vivere.', intro: 'La tradizione familiare dal 1920 incontra esperienze casearie prenotabili. Il concept mette in primo piano durata, prezzo di partenza, specialità e informazioni per arrivare al negozio.',
    media: {
      hero: ['starace-provolone.optimized.jpg', 'Provolone di Vico Equense presentato sul sito Starace'],
      tasting: ['starace-product-1.optimized.jpg', 'Formaggio Starace fotografato sul sito ufficiale'],
      craft: ['starace-product-2.optimized.jpg', 'Formaggio Starace fotografato sul sito ufficiale']
    }
  },
  {
    slug: 'cerase-vico-equense', name: 'Cerasè', kind: 'Ristorante · Vico Equense', theme: 'cerase',
    official: 'https://www.cerasevicoequense.it/', layout: 'cerase',
    thumb: 'cerase-cover.optimized.jpg', thumbAlt: 'Piatto di mare dal sito ufficiale Cerasè',
    hook: 'Pescato del giorno, Pizza di Vico e Cerasè Apartment: tre ingressi per tre motivi diversi di visita.',
    title: 'Il mare nel piatto.<br>Vico intorno a te.', intro: 'Vista sul Golfo e sul Vesuvio, cucina di mare con pescato del giorno, la Pizza di Vico e un appartamento: il concept organizza le proposte di Cerasè in percorsi distinti.',
    media: {
      dish: ['cerase-cover.optimized.jpg', 'Piatto di mare fotografato sul sito ufficiale Cerasè'],
      room: ['cerase-ristorante.optimized.jpg', 'Ambiente Cerasè mostrato sul sito ufficiale'],
      chef: ['cerase-chef.optimized.jpg', 'Chef Michele nella fotografia pubblicata da Cerasè']
    }
  },
  {
    slug: 'bb-stella', name: 'B&B Stella', kind: 'Bed & Breakfast · Vico Equense', theme: 'stella',
    official: 'https://www.bnbstella.it/', layout: 'stella',
    thumb: 'bb-stella-illustrazione.svg', thumbAlt: 'Illustrazione originale di una casa storica e dei collegamenti',
    hook: 'Una dimora del XVI secolo, due camere e quattro mete: il soggiorno parte dai dettagli giusti.',
    title: 'Una casa antica.<br>Quattro mete vicine.', intro: 'Una dimora del XVI secolo ristrutturata, due camere con bagno privato, aria condizionata e Wi-Fi. L’illustrazione originale racconta il soggiorno e i collegamenti citati dal B&B Stella.',
    media: {}
  },
  {
    slug: 'frate-cosimo', name: 'Frate Cosimo', kind: 'Ristorante · Pizzeria · Preazzano', theme: 'frate',
    official: 'https://www.fratecosimo.it/', menu: 'https://www.eccoilmenu.it/vai/frate-cosimo', layout: 'frate',
    thumb: 'frate-cosimo-illustrazione.svg', thumbAlt: 'Illustrazione originale di un pacchero ai porcini e provola fumé',
    hook: 'Pacchero ai porcini e fonduta di provola fumé, spaghetti alla Nerano e menu completo in primo piano.',
    title: 'Piatti inediti.<br>Radici napoletane.', intro: 'La promessa del Frate Cosimo è «piatti unici, inediti ed invitanti». Il concept le dà una forma concreta con i piatti riportati nel menu collegato dal ristorante e un accesso immediato alle informazioni per arrivare.',
    media: {}
  },
  {
    slug: 'caseificio-luigi-parlato', name: 'Caseificio Luigi Parlato', kind: 'Caseificio · Arola', theme: 'parlato',
    official: 'https://caseificioparlato.it/', layout: 'parlato',
    thumb: 'parlato-illustrazione.svg', thumbAlt: 'Illustrazione originale di un provolone e delle colline di Arola',
    hook: 'Una storia casearia che attraversa i secoli: dagli avi del XVII secolo al caseificio fondato nel 1973.',
    title: 'Una storia che<br>prende forma.', intro: 'Il racconto parte dalle colline di Arola: gli avi di Luigi Parlato praticavano l’arte casearia già nel XVII secolo; il caseificio nasce nel 1973 e lavora latte italiano, fresco e stagionato.',
    media: {}
  },
  {
    slug: 'caseificio-carbone', name: 'Caseificio Carbone', kind: 'Caseificio · Moiano', theme: 'carbone',
    official: 'https://www.caseificiocarbone.it/', layout: 'carbone',
    thumb: 'carbone-provolone.optimized.jpg', thumbAlt: 'Provolone del Monaco del Caseificio Carbone',
    hook: 'La filiera locale del Provolone del Monaco e tre prodotti raccontati con le fotografie del caseificio.',
    title: 'Dal latte,<br>una storia di famiglia.', intro: 'A Moiano, tecniche familiari e filiera km 0 legata alla Vacca Agerolese raccontano la specialità del Caseificio Carbone: il Provolone del Monaco. Il concept collega prodotti e punti vendita.',
    media: {
      hero: ['carbone-provolone.optimized.jpg', 'Provolone del Monaco nella galleria del Caseificio Carbone'],
      provola: ['carbone-prod2.optimized.jpg', 'Prodotto caseario fotografato sul sito del Caseificio Carbone'],
      fresh: ['carbone-treccia.optimized.jpg', 'Formaggio fresco fotografato sul sito del Caseificio Carbone']
    }
  },
  {
    slug: 'casale-del-golfo', name: 'Il Casale del Golfo', kind: 'Agriturismo · Moiano', theme: 'casale',
    official: 'https://www.ilcasaledelgolfo.it/chi-siamo/', layout: 'casale',
    thumb: 'casale-vista.optimized.jpg', thumbAlt: 'Paesaggio dal sito ufficiale del Casale del Golfo',
    hook: 'Undici appartamenti, pizzeria con forno a legna, orto a km 0 e spazi per eventi in un solo itinerario.',
    title: 'Tra il Golfo<br>e la montagna.', intro: 'A Moiano, Il Casale del Golfo unisce soggiorno e gastronomia: undici appartamenti, ristorante-pizzeria con forno a legna, orto per il ristorante e sale interne ed esterne per eventi.',
    media: {
      hero: ['casale-vista.optimized.jpg', 'Paesaggio dal sito del Casale del Golfo'],
      garden: ['casale-giardino.optimized.jpg', 'Giardino della struttura, immagine dal sito ufficiale']
    }
  },
  {
    slug: 'ristorante-sant-angelo-monte-faito', name: 'Ristorante Sant’Angelo', kind: 'Ristorante · Monte Faito', theme: 'santangelo',
    official: 'https://ristorantesantangelomontefaito.it/', layout: 'santangelo',
    thumb: 'santangelo-illustrazione.svg', thumbAlt: 'Illustrazione originale di Monte Faito, terrazza e brace',
    hook: 'Il menu alla brace incontra la terrazza affacciata sul Golfo di Napoli, con indicazioni per arrivare.',
    title: 'Fuoco acceso.<br>Monte Faito davanti.', intro: 'La famiglia Somma racconta una terrazza panoramica affacciata sul Golfo di Napoli, con vista su Sorrento e Capri, e carni cotte alla brace. Il concept porta menu e contatti in primo piano.',
    media: {}
  }
];

const esc = function(value) {
  return String(value).replace(/[&<>"']/g, function(character) {
    return {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'}[character];
  });
};

const app = document.getElementById('app');
const pageType = document.body.dataset.view;
const asset = function(file) { return '/proposte/assets/ufficiali/' + file; };
const mail = function(name) { return 'mailto:info@diegodesposito.it?subject=' + encodeURIComponent('Confronto sul concept per ' + name); };

function sharedHeader() {
  return '<div class="disclosure"><span>CONCEPT INDIPENDENTE</span><p>Anteprima non commissionata. I contenuti verificati e i media sono del rispettivo titolare.</p><a href="/proposte/">Tutti i concept <b aria-hidden="true">↗</b></a></div>' +
    '<header class="concept-header"><a class="concept-brand" href="/"><span class="brand-mark">D<span>.</span></span><span>Diego.dev<small>WEB STUDIO · VICO EQUENSE</small></span></a><nav aria-label="Navigazione"><a href="/proposte/">Indice</a><a href="https://diegodesposito.it/#contatti">Contatta Diego <span aria-hidden="true">↗</span></a></nav></header>';
}

function sharedFooter(item) {
  const target = item ? '<a class="footer-website" href="' + esc(item.official) + '" target="_blank" rel="nofollow noopener noreferrer">Fonte ufficiale ↗</a>' : '<a class="footer-website" href="mailto:info@diegodesposito.it">info@diegodesposito.it</a>';
  return '<footer class="concept-footer"><a href="/">Diego<span>.</span>dev</a><p>Concept indipendente e dimostrativo. Nomi, marchi e materiali delle attività restano dei rispettivi titolari; non è implicita alcuna collaborazione o approvazione.</p>' + target + '</footer>';
}

function photo(item, key, extra) {
  const entry = item.media[key];
  if (!entry) return '';
  const file = entry[0];
  const alt = entry[1];
  return '<figure class="source-photo ' + (extra || '') + '"><img src="' + esc(asset(file)) + '" alt="' + esc(alt) + '" loading="lazy"><figcaption><span>' + esc(alt) + '</span><a href="' + esc(item.official) + '" target="_blank" rel="nofollow noopener noreferrer">Vedi il sito ufficiale ↗</a></figcaption></figure>';
}

function illustration(item, file, caption, extra) {
  return '<figure class="source-photo original-art ' + (extra || '') + '"><img src="' + esc(asset(file)) + '" alt="' + esc(caption) + '" loading="lazy"><figcaption><span>Illustrazione originale realizzata per questo concept</span><a href="' + esc(item.official) + '" target="_blank" rel="nofollow noopener noreferrer">Verifica i dettagli sul sito ↗</a></figcaption></figure>';
}

function shell(item, body) {
  const index = String(candidates.indexOf(item) + 1).padStart(2, '0');
  document.title = 'Concept indipendente — ' + item.name + ' | Diego D’Esposito';
  return sharedHeader() + '<main id="contenuto" class="site-concept page-' + esc(item.layout) + ' theme-' + esc(item.theme) + '" data-concept="' + index + '">' + body + '</main>' + sharedFooter(item);
}

function renderBuco(item) {
  return shell(item, [
    '<section class="buco-hero page-width"><div class="buco-copy"><p class="overline"><span></span> OSTERIA VICANA · DAL 1969</p><h1>' + item.title + '</h1><p>' + item.intro + '</p><div class="page-actions"><a class="action-button" href="https://osteriaalbuco.wixsite.com/website">Menu e prenotazioni <b>↗</b></a><a class="text-action" href="tel:+390818016255">Chiama l’osteria · 081 801 6255</a></div><span class="source-pill">Storia e informazioni: sito pubblico dell’osteria</span></div>' + photo(item, 'hero', 'buco-photo-main') + '<div class="year-stamp"><b>1969</b><span>OTTOBRE<br>VICO EQUENSE</span></div></section>',
    '<section class="buco-story page-width"><div class="story-mark"><span>5</span><small>TAVOLI<br>DI LEGNO</small><i>✳</i></div><div><p class="section-kicker">UNA STORIA DI FAMIGLIA</p><h2>Dal piccolo “buco”<br>alla tavola di oggi.</h2><p>Francesco La Ragione e Genoveffa avviano l’osteria nell’ottobre 1969. Il concept mette questa origine davanti al visitatore e la collega alla proposta che il locale racconta oggi.</p></div>' + photo(item, 'story', 'buco-photo-story') + '</section>',
    '<section class="buco-menu"><div class="page-width"><p class="section-kicker">TRE ANIME, UNA CUCINA</p><h2>Dal territorio<br>al forno a legna.</h2><div class="buco-tracks"><article><span>01 / MARE</span><h3>Piatti di mare</h3><p>Un percorso dedicato alle proposte di mare che il sito presenta insieme alla cucina di terra.</p></article><article><span>02 / TERRA</span><h3>Piatti di terra</h3><p>Una cucina legata al territorio vicano e a ingredienti freschi, come racconta l’osteria.</p></article><article><span>03 / FORNO</span><h3>Pizza napoletana</h3><p>La pizza cotta nel forno a legna merita un ingresso visivo riconoscibile e un menu facile da trovare.</p></article></div>' + photo(item, 'food', 'buco-food-photo') + '</div></section>',
    '<section class="buco-visit page-width"><div><p class="section-kicker">A TAVOLA, IN VIA ROMA</p><h2>Orari e contatto,<br>prima di partire.</h2><p>Via Roma 19 · Vico Equense<br>Lunedì, martedì e giovedì–domenica<br>12:00–16:00 · 18:30–24:00<br>Mercoledì chiuso</p><p class="caveat">Contenuti ripresi dal sito ufficiale; verificare sempre eventuali variazioni.</p></div><div class="visit-card"><span>PRENOTAZIONI</span><a href="tel:+390818016255">081 801 6255</a><a href="tel:+393342587514">334 258 7514</a><a class="action-button" href="' + esc(item.official) + '">Visita il sito dell’osteria ↗</a></div></section>',
    contact(item, 'Raccontiamo il Buco', 'Una proposta pensata intorno alla sua storia vera, alla cucina vicana e ai modi concreti in cui gli ospiti scelgono dove sedersi.')
  ].join(''));
}

function renderMustafa(item) {
  return shell(item, [
    '<section class="mustafa-cover">' + photo(item, 'hero', 'mustafa-cover-photo') + '<div class="mustafa-title"><p class="overline"><span></span> MARINA D’EQUA · SEIANO</p><h1>' + item.title + '</h1><p>' + item.intro + '</p><a class="action-button light-action" href="https://wa.me/393501250681">Contatta il ristorante <b>↗</b></a><p class="mustafa-season">APERTURA INDICATA DAL SITO · MARZO—NOVEMBRE</p></div><div class="mustafa-side-note">SUL MARE<br><b>VICO EQUENSE</b></div></section>',
    '<section class="mustafa-promise page-width"><div><p class="section-kicker">UNA TERRAZZA SULLA SPIAGGIA</p><h2>Il Golfo e il Vesuvio<br>fanno già parte del menu.</h2><p>Il sito descrive una terrazza affacciata sul mare, cucina della Penisola Sorrentina con pesce fresco, dolci fatti in casa e vini. La grafica li porta al centro del racconto.</p><p class="caveat">Stagionalità e dettagli operativi da ricontrollare sul sito prima di ogni pubblicazione.</p></div>' + photo(item, 'shore', 'mustafa-shore-photo') + '</section>',
    '<section class="mustafa-film"><div class="page-width"><div><p class="section-kicker">IL LOCALE, IN MOVIMENTO</p><h2>Una finestra<br>sulla Marina.</h2><p>Nel sito del ristorante è incorporato anche un video. Integrarlo nella pagina aiuta chi visita da lontano a immaginare la terrazza e il luogo.</p></div><div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/7z9k2lpZqxs?rel=0&playsinline=1" title="Video incorporato nel sito ufficiale del Ristorante Mustafà" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><span>Video già presente sul sito pubblico del ristorante</span></div></div></section>',
    '<section class="mustafa-occasions page-width"><div class="occasions-heading"><p class="section-kicker">NON SOLO UNA CENA</p><h2>Tre occasioni.<br>Una terrazza sul mare.</h2></div><div class="occasion-list"><article><span>01</span><div><h3>Pranzo o cena</h3><p>Pesce fresco, cucina mediterranea, dolci fatti in casa e vini.</p></div></article><article><span>02</span><div><h3>Momenti da festeggiare</h3><p>Il ristorante si propone per anniversari, comunioni e feste.</p></div></article><article><span>03</span><div><h3>Matrimoni vista mare</h3><p>Una sezione dedicata alla terrazza e alle richieste per ricevimenti sul mare.</p></div></article></div>' + photo(item, 'evening', 'mustafa-evening-photo') + '</section>',
    contact(item, 'La prima scelta è la vista', 'La proposta mette la terrazza, il video ufficiale e il contatto in primo piano; menu, stagionalità e richieste evento rimandano ai canali del ristorante.')
  ].join(''));
}

function renderStarace(item) {
  return shell(item, [
    '<section class="starace-hero page-width"><div class="starace-intro"><p class="overline"><span></span> ARTE CASEARIA · DAL 1920</p><h1>' + item.title + '</h1><p>' + item.intro + '</p><a class="action-button" href="#esperienze">Scegli l’esperienza <b>↓</b></a><span>ESPERIENZE PUBBLICATE DAL CASEIFICIO</span></div>' + photo(item, 'hero', 'starace-hero-photo') + '<div class="starace-roundel"><span>FATTO<br>CON LE TUE<br><b>MANI</b></span></div></section>',
    '<section class="starace-experiences" id="esperienze"><div class="page-width"><div class="experience-heading"><div><p class="section-kicker">IMPARARE FACENDO</p><h2>Tre modi per<br>entrare nel caseificio.</h2></div><p>Le esperienze elencate qui riprendono durata e prezzi di partenza mostrati dal sito ufficiale al momento della consultazione.</p></div><div class="experience-list"><article><span class="experience-number">01</span><div><h3>Artigianato Caseario<br>Full Experience</h3><p>Un’immersione a 360° nella produzione tradizionale dei formaggi di Vico Equense.</p></div><div class="experience-meta"><b>2 ORE</b><strong>da €150<small> / persona</small></strong><a href="' + esc(item.official) + '">Dettagli ufficiali ↗</a></div></article><article><span class="experience-number">02</span><div><h3>Mozzarella<br>Experience</h3><p>Scoprire il mondo del latte e diventare casaro per un giorno.</p></div><div class="experience-meta"><b>2 ORE</b><strong>da €85</strong><a href="' + esc(item.official) + '">Dettagli ufficiali ↗</a></div></article><article><span class="experience-number">03</span><div><h3>Mozzarella +<br>Burro Experience</h3><p>La lavorazione della mozzarella, la preparazione del burro e una degustazione.</p></div><div class="experience-meta"><b>2 ORE</b><strong>da €150<small> / persona</small></strong><a href="' + esc(item.official) + '">Dettagli ufficiali ↗</a></div></article></div><p class="caveat">Prezzi, calendario e disponibilità possono cambiare: il sito ufficiale resta il riferimento per prenotare.</p></div></section>',
    '<section class="starace-product page-width"><div class="starace-product-copy"><p class="section-kicker">LA SPECIALITÀ DI VICO EQUENSE</p><h2>Provolone: una forma<br>da conoscere.</h2><p>Il Caseificio Starace descrive il Provolone di Vico Equense con forma allungata, peso tra 2,5 e 8 kg e stagionatura di almeno sei mesi. Il concept trasforma la scheda del prodotto in una lettura visiva, senza sostituirne la descrizione ufficiale.</p><a class="text-action" href="' + esc(item.official) + '">Leggi la scheda ufficiale ↗</a></div><div class="starace-still">' + photo(item, 'tasting', 'starace-still-small') + photo(item, 'craft', 'starace-still-large') + '<span>LATTE · MANI · STAGIONATURA</span></div></section>',
    '<section class="starace-store"><div class="page-width"><div><p class="section-kicker">ANCHE IN NEGOZIO</p><h2>Visita il caseificio<br>a Vico Equense.</h2><p>Via Luigi Avellino 45 · Vico Equense<br>Vendita: tutti i giorni, 8:00–14:00 e 16:00–21:00<br>Telefono: 081 879 9581</p></div><div class="store-aside"><span>INDICAZIONE DEL SITO UFFICIALE</span><p>Da Vico Equense, il caseificio suggerisce di percorrere Via Raffaele Bosco e segnala una strada scomoda proposta da alcune mappe.</p><a class="action-button" href="' + esc(item.official) + '">Controlla come arrivare ↗</a></div></div></section>',
    contact(item, 'Dalla visita al prodotto', 'Un percorso disegnato attorno alle esperienze prenotabili, alla specialità casearia e alla visita del negozio Starace.')
  ].join(''));
}

function renderCerase(item) {
  return shell(item, [
    '<section class="cerase-hero"><div class="cerase-hero-copy"><p class="overline"><span></span> CUCINA DI MARE · PIZZA DI VICO</p><h1>' + item.title + '</h1><p>' + item.intro + '</p><div class="page-actions"><a class="action-button" href="' + esc(item.official) + '">Scopri il ristorante <b>↗</b></a><a class="text-action" href="https://apartment.cerasevicoequense.it/">Cerasè Apartment ↗</a></div></div>' + photo(item, 'dish', 'cerase-hero-photo') + '<span class="cerase-seal">VICO<br><b>EQUENSE</b><i>•</i> DAL MARE ALLA TAVOLA</span></section>',
    '<section class="cerase-film"><div class="page-width"><div class="cerase-film-copy"><p class="section-kicker">IL PANORAMA È PARTE DELL’ESPERIENZA</p><h2>Il Golfo cambia<br>colore durante il giorno.</h2><p>Il sito ufficiale racconta la vista sul Vesuvio attraverso un video panoramico girato al Cerasè. Qui quel filmato apre il racconto, insieme alle immagini della cucina.</p><a href="' + esc(item.official) + '" class="text-action">Video dal sito ufficiale ↗</a></div><figure class="cerase-video"><video controls preload="none" playsinline poster="' + esc(asset(item.media.dish[0])) + '"><source src="https://www.cerasevicoequense.it/wp-content/uploads/2026/03/panorama-di-cerase.mp4" type="video/mp4">Il browser non supporta il video incorporato.</video><figcaption>Video panoramico pubblicato da Cerasè</figcaption></figure></div></section>',
    '<section class="cerase-menu page-width"><div class="cerase-menu-heading"><p class="section-kicker">DAL MENU PUBBLICATO</p><h2>Tre assaggi<br>del racconto di mare.</h2><p>Piatti e nomi riprendono il menu online; la proposta li presenta come una selezione editoriale, non come disponibilità garantita.</p></div><div class="dish-stack"><article><span>ANTIPASTO</span><h3>Polpo alla brace</h3><p>Con fonduta di Provolone del Monaco.</p></article><article><span>PRIMO</span><h3>Linguine allo scoglio</h3><p>Tra i primi piatti più amati indicati da Cerasè.</p></article><article><span>PRIMO</span><h3>Pacchero di Gragnano</h3><p>Totanetti di paranza, datterino giallo e limone.</p></article><a class="action-button" href="' + esc(item.official) + '">Menu aggiornato ↗</a></div>' + photo(item, 'chef', 'cerase-chef-photo') + '</section>',
    '<section class="cerase-paths"><div class="page-width"><p class="section-kicker">DUE MODI DI VIVERE CERASÈ</p><h2>Una tavola.<br>Un soggiorno.</h2><div class="cerase-path-grid"><article class="cerase-path restaurant-path">' + photo(item, 'room', 'cerase-room-photo') + '<div><span>01 · RISTORANTE</span><h3>Dal mare alla tavola</h3><p>Pescato del giorno, menu di mare, la Pizza di Vico e la vista del Golfo.</p><a href="' + esc(item.official) + '">Vai al sito del ristorante ↗</a></div></article><article class="cerase-path apartment-path"><div class="apartment-art" aria-hidden="true"><span>CERASÈ</span><b>APARTMENT</b><i>VICO EQUENSE</i></div><div><span>02 · OSPITALITÀ</span><h3>Fermarsi a Vico</h3><p>Il sito presenta anche un appartamento dedicato a chi vuole prolungare la visita.</p><a href="https://apartment.cerasevicoequense.it/">Scopri Cerasè Apartment ↗</a></div></article></div></div></section>',
    contact(item, 'Partire dal mare, arrivare a Vico', 'Il concept riordina video, menu, pizza e appartamento, mantenendo visibili le due destinazioni e le rispettive fonti.')
  ].join(''));
}

function renderStella(item) {
  return shell(item, [
    '<section class="stella-hero page-width"><div><p class="overline"><span></span> DIMORA STORICA · VICO EQUENSE</p><h1>' + item.title + '</h1><p>' + item.intro + '</p><a class="action-button" href="' + esc(item.official) + '">Visita il sito del B&B <b>↗</b></a><span class="source-pill">Illustrazione originale · non è una fotografia della struttura</span></div>' + illustration(item, 'bb-stella-illustrazione.svg', 'Illustrazione originale: B&B storico con due finestre e itinerari verso le destinazioni indicate dal sito', 'stella-illustration') + '</section>',
    '<section class="stella-details"><div class="page-width"><div class="stella-numbers"><article><b>16<sup>°</sup></b><span>SECOLO<br>DIMORA STORICA</span></article><article><b>02</b><span>CAMERE<br>CON BAGNO PRIVATO</span></article><article><b>Wi-Fi</b><span>ARIA CONDIZIONATA<br>IN OGNI CAMERA</span></article></div><div class="stella-story"><div><p class="section-kicker">UN SOGGIORNO CON RADICI</p><h2>Una struttura antica,<br>restaurata per accogliere.</h2></div><p>Il sito del B&B Stella descrive una struttura del XVI secolo, recentemente ristrutturata. La scheda proposta separa ciò che serve a scegliere la camera dai dettagli utili per organizzare il soggiorno.</p></div></div></section>',
    '<section class="stella-map page-width"><div class="stella-map-copy"><p class="section-kicker">PUNTO DI PARTENZA</p><h2>Quattro mete<br>dal tuo soggiorno.</h2><p>Capri, Sorrento, Pompei e Napoli sono le mete che il sito segnala come facilmente raggiungibili. Il concept le mette su una sola mappa illustrata e rimanda alla pagina “Collegamenti” per i mezzi di trasporto.</p><a href="' + esc(item.official) + '" class="text-action">Informazioni e collegamenti ufficiali ↗</a></div><div class="destination-map" aria-label="Schema illustrativo delle mete citate dal B&B"><span class="map-line"></span><span class="map-stop stop-origin"><b>STELLA</b><small>VICO EQUENSE</small></span><span class="map-stop stop-sorrento">SORRENTO</span><span class="map-stop stop-capri">CAPRI</span><span class="map-stop stop-pompei">POMPEI</span><span class="map-stop stop-napoli">NAPOLI</span><small class="map-caption">SCHEMA CONCETTUALE · NON IN SCALA</small></div></section>',
    contact(item, 'Due camere, un punto di partenza', 'Una pagina per far capire in pochi secondi com’è fatta la struttura e quali informazioni di collegamento il visitatore può consultare.')
  ].join(''));
}

function renderFrate(item) {
  return shell(item, [
    '<section class="frate-hero page-width"><div><p class="overline"><span></span> PREAZZANO · RISTORANTE E PIZZERIA</p><h1>' + item.title + '</h1><p>' + item.intro + '</p><blockquote>“La cultura napoletana sposa il piacere alla fantasia.”</blockquote><div class="page-actions"><a class="action-button" href="' + esc(item.menu) + '">Apri il menu completo <b>↗</b></a><a class="text-action" href="tel:+390818024781">Chiama · 081 802 47 81</a></div></div>' + illustration(item, 'frate-cosimo-illustrazione.svg', 'Illustrazione originale del pacchero di Gragnano con porcini e provola fumé', 'frate-dish-art') + '</section>',
    '<section class="frate-signature"><div class="page-width"><div><p class="section-kicker">DAL MENU COLLEGATO DAL RISTORANTE</p><h2>Un pacchero<br>con tre strati di sapore.</h2><p>Pacchero di Gragnano, funghi porcini e gocce di fonduta di provola affumicata: uno dei primi piatti descritti nella carta online del Frate Cosimo.</p><span class="caveat">Nome e ingredienti riletti dal menu pubblico; verificare la carta corrente con il ristorante.</span></div><div class="dish-notes"><article><b>01</b><span>GRAGNANO<br>Il formato di pasta</span></article><article><b>02</b><span>PORCINI<br>Il profumo del bosco</span></article><article><b>03</b><span>PROVOLA FUMÉ<br>La fonduta finale</span></article></div></div></section>',
    '<section class="frate-menu page-width"><div><p class="section-kicker">UN MENU, PIÙ FIRME</p><h2>Una piccola selezione<br>della carta.</h2><p>Il concept non inventa un menu: mette in evidenza preparazioni già pubblicate e invita ad aprire la carta completa.</p><a class="text-action" href="' + esc(item.menu) + '">Consulta piatti e prezzi aggiornati ↗</a></div><div class="frate-dish-list"><article><span>PRIMO</span><h3>Spaghetti alla Nerano</h3><p>Zucchine fritte, Parmigiano Reggiano, basilico e burro al kefir.</p></article><article><span>PRIMO</span><h3>Ravioli alla caprese</h3><p>Pasta fresca ripiena di formaggi e maggiorana, con sugo di pomodoro.</p></article><article><span>PIZZA</span><h3>Pizza Frate Cosimo</h3><p>Fior di latte, porcini, prosciutto crudo, rucola e scaglie di Parmigiano.</p></article></div></section>',
    '<section class="frate-arrive"><div class="page-width"><div><p class="section-kicker">A PREAZZANO</p><h2>Apri la mappa.<br>Trova il menu.</h2><p>Via Raffaele Bosco, 794<br>Preazzano · Vico Equense</p></div><div class="frate-contact"><a href="tel:+390818024781">081 802 47 81</a><a href="mailto:info@fratecosimo.it">info@fratecosimo.it</a><a href="https://maps.app.goo.gl/6ajErPwdY2CV3ppM8">Indicazioni dal sito ufficiale ↗</a></div></div></section>',
    contact(item, 'Un concept con un piatto riconoscibile', 'Il percorso mette in evidenza un piatto concreto della carta, raccoglie gli altri richiami del menu e rende immediati i contatti pubblicati.')
  ].join(''));
}

function renderParlato(item) {
  return shell(item, [
    '<section class="parlato-hero page-width"><div><p class="overline"><span></span> AROLA · CASEIFICIO DAL 1973</p><h1>' + item.title + '</h1><p>' + item.intro + '</p><a class="action-button" href="#storia">Segui il filo della storia <b>↓</b></a><span class="source-pill">Illustrazione originale basata sulla specialità raccontata dal caseificio</span></div>' + illustration(item, 'parlato-illustrazione.svg', 'Illustrazione originale del Provolone del Monaco e delle colline di Arola', 'parlato-cheese-art') + '</section>',
    '<section class="parlato-timeline" id="storia"><div class="page-width"><div class="timeline-intro"><p class="section-kicker">UNA STORIA CASEARIA DI FAMIGLIA</p><h2>La tradizione<br>ha radici profonde.</h2><p>Il racconto sul sito lega la fondazione del caseificio alle tecniche tramandate dagli avi sulle colline vicane.</p></div><div class="timeline"><article><b>XVII</b><span>Gli avi praticano l’arte casearia sulle colline di Vico Equense.</span></article><article><b>1973</b><span>Luigi Parlato avvia il caseificio che porta il nome della famiglia.</span></article><article><b>OGGI</b><span>Latte italiano, prodotti freschi e stagionati e Provolone del Monaco.</span></article></div></div></section>',
    '<section class="parlato-product page-width"><div class="parlato-product-note"><p class="section-kicker">LA SPECIALITÀ</p><h2>Provolone<br>del Monaco.</h2><p>Il Caseificio Luigi Parlato racconta una lavorazione e una stagionatura legate alla tradizione locale. Una scheda prodotto editoriale può chiarire origine, processo e come chiedere informazioni, senza simulare una vendita online.</p><a class="text-action" href="' + esc(item.official) + '">Fonte e dettagli del caseificio ↗</a></div><div class="parlato-facts"><article><span>MATERIA PRIMA</span><b>Latte italiano</b><p>La qualità del latte italiano è indicata dal caseificio.</p></article><article><span>PRODUZIONE</span><b>Fresco e stagionato</b><p>Tecniche tradizionali tramandate di generazione in generazione.</p></article><article><span>LUOGO</span><b>Arola, Vico Equense</b><p>Il caseificio si trova sulle colline della frazione di Arola.</p></article></div></section>',
    '<section class="parlato-visit"><div class="page-width"><div><p class="section-kicker">IL BANCO, AD AROLA</p><h2>Via Aiello, 9</h2><p>Arola di Vico Equense · 80069 (NA)</p></div><div><a href="tel:+390818024063">081 802 40 63</a><a href="mailto:info@caseificioparlato.it">info@caseificioparlato.it</a><a class="action-button" href="' + esc(item.official) + '">Contatti ufficiali ↗</a></div></div></section>',
    contact(item, 'Il prodotto viene dopo la storia', 'La proposta trasforma le informazioni sparse in un racconto leggibile: origine, specialità, lavorazione e contatto diretto del caseificio.')
  ].join(''));
}

function renderCarbone(item) {
  return shell(item, [
    '<section class="carbone-hero page-width"><div class="carbone-head"><p class="overline"><span></span> MOIANO · FILIERA LOCALE</p><h1>' + item.title + '</h1><p>' + item.intro + '</p><a class="action-button" href="#prodotti">Esplora i prodotti <b>↓</b></a></div>' + photo(item, 'hero', 'carbone-hero-photo') + '<div class="carbone-origin"><span>VICO EQUENSE</span><b>TRADIZIONE<br>KM 0</b><i>PROVOLONE DEL MONACO</i></div></section>',
    '<section class="carbone-chain page-width"><div><p class="section-kicker">UNA FILIERA DA RACCONTARE</p><h2>Dalla Vacca Agerolese<br>alla tavola.</h2><p>Il caseificio descrive una filiera km 0 controllata che parte dall’allevamento della Vacca Agerolese. Un percorso illustrato può rendere visibile il lavoro che accompagna la specialità.</p></div><div class="chain-flow"><article><span>01</span><b>Vacca<br>Agerolese</b></article><i>→</i><article><span>02</span><b>Latte<br>locale</b></article><i>→</i><article><span>03</span><b>Lavorazione<br>di famiglia</b></article><i>→</i><article><span>04</span><b>Provolone<br>del Monaco</b></article></div></section>',
    '<section class="carbone-products" id="prodotti"><div class="page-width"><div class="product-heading"><div><p class="section-kicker">TRE SPECIALITÀ DEL SITO</p><h2>Formaggi con<br>storie diverse.</h2></div><p>Le immagini provengono dalla galleria del caseificio. Le descrizioni seguono la scheda prodotto pubblica.</p></div><div class="product-grid"><article>' + photo(item, 'hero', 'carbone-product-photo') + '<span>STAGIONATO</span><h3>Provolone del Monaco</h3><p>La specialità che il caseificio produce con tecniche familiari e filiera km 0.</p></article><article>' + photo(item, 'provola', 'carbone-product-photo') + '<span>FRESCO</span><h3>Provola affumicata</h3><p>Affumicata naturalmente con trucioli di legno certificati.</p></article><article>' + photo(item, 'fresh', 'carbone-product-photo') + '<span>PASTA FILATA</span><h3>Treccia</h3><p>Mozzarella fresca annodata a mano, come la descrive il sito.</p></article></div></div></section>',
    '<section class="carbone-stores page-width"><div><p class="section-kicker">DAL CASEIFICIO AI PUNTI VENDITA</p><h2>Un prodotto locale,<br>da trovare vicino.</h2><p>Il sito dedica una sezione alle sedi. Un percorso mobile può collegare ciascuna specialità alle indicazioni e ai contatti già pubblicati.</p><a class="action-button" href="' + esc(item.official) + '">Apri la pagina ufficiale dei punti vendita ↗</a></div><div class="store-stamp"><span>CASEIFICIO<br><b>CARBONE</b></span><i>MOIANO · VICO EQUENSE</i></div></section>',
    contact(item, 'Più chiarezza tra specialità e sedi', 'La proposta valorizza la filiera raccontata dal Caseificio Carbone e rende più diretto il passaggio dai prodotti ai punti vendita ufficiali.')
  ].join(''));
}

function renderCasale(item) {
  return shell(item, [
    '<section class="casale-hero"><div class="casale-hero-image">' + photo(item, 'hero', 'casale-cover-photo') + '<span>MOIANO · TRA LA COSTA SORRENTINA E LA COSTA D’AMALFI</span></div><div class="casale-title page-width"><p class="overline"><span></span> AGRITURISMO · OSPITALITÀ · CUCINA</p><h1>' + item.title + '</h1><p>' + item.intro + '</p><a class="action-button" href="' + esc(item.official) + '">Scopri la tenuta <b>↗</b></a></div></section>',
    '<section class="casale-count page-width"><div><b>11</b><span>APPARTAMENTI<br>INDIPENDENTI</span></div><div><b>01</b><span>RISTORANTE E PIZZERIA<br>CON FORNO A LEGNA</span></div><div><b>KM 0</b><span>ORTO PER LA CUCINA<br>DEL RISTORANTE</span></div><div><b>∞</b><span>SPAZI PER EVENTI<br>INTERNI ED ESTERNI</span></div></section>',
    '<section class="casale-experience page-width"><div class="casale-garden">' + photo(item, 'garden', 'casale-garden-photo') + '<span>ORTO E SPAZI VERDI · IMMAGINE DEL SITO</span></div><div class="casale-experience-copy"><p class="section-kicker">UNA TENUTA, TRE PERCORSI</p><h2>Soggiornare.<br>Mangiare. Ritrovarsi.</h2><article><span>01</span><div><b>Appartamenti</b><p>Undici unità indipendenti, presentate sul sito come base per il soggiorno.</p></div></article><article><span>02</span><div><b>Ristorante e pizzeria</b><p>Forno a legna, cucina tradizionale e prodotti coltivati nell’orto.</p></div></article><article><span>03</span><div><b>Eventi</b><p>Sale interne ed esterne e parcheggio gratuito nella tenuta, secondo il sito.</p></div></article></div></section>',
    '<section class="casale-founder"><div class="page-width"><p class="section-kicker">UNA STORIA DI FAMIGLIA</p><h2>La famiglia Cilento,<br>Moiano da oltre vent’anni.</h2><p>Il sito colloca l’agriturismo tra mare e montagna, nel paesaggio della macchia mediterranea con affaccio verso Positano. Il concept fa vedere prima il luogo e poi lascia scegliere a chi visita come viverlo.</p><div class="casale-contact-line"><a href="tel:+390818023909">081 802 3909</a><a href="' + esc(item.official) + '">Informazioni ufficiali ↗</a></div></div></section>',
    contact(item, 'Aiutare ogni ospite a scegliere', 'Dalla pagina iniziale si può entrare direttamente nel percorso corretto: appartamento, ristorante-pizzeria o spazi per eventi.')
  ].join(''));
}

function renderSantangelo(item) {
  return shell(item, [
    '<section class="santangelo-hero page-width"><div class="santangelo-title"><p class="overline"><span></span> VILLAGGIO MONTE FAITO · FAMIGLIA SOMMA</p><h1>' + item.title + '</h1><p>' + item.intro + '</p><div class="page-actions"><a class="action-button" href="#menu">Vai al menu <b>↓</b></a><a class="text-action" href="tel:+390818793042">Prenota per telefono</a></div><span class="source-pill">Illustrazione originale: il Faito, la terrazza e la cucina alla brace</span></div>' + illustration(item, 'santangelo-illustrazione.svg', 'Illustrazione originale della terrazza di Monte Faito affacciata sul Golfo e di una griglia a brace', 'santangelo-landscape') + '</section>',
    '<section class="santangelo-view"><div class="page-width"><p class="section-kicker">LA VISTA È PARTE DELLA TAVOLA</p><h2>Da Monte Faito,<br>il Golfo, Sorrento e Capri.</h2><p>Il ristorante racconta la terrazza panoramica immersa nella natura del Monte Faito. La grafica proposta lega il paesaggio alle informazioni pratiche: indirizzo, orari e chiamata.</p></div></section>',
    '<section class="santangelo-menu page-width" id="menu"><div class="santangelo-menu-title"><p class="section-kicker">DALLA CARTA PUBBLICATA ONLINE</p><h2>La brace<br>in primo piano.</h2><p>Alcuni piatti e i prezzi presenti nel menu del sito. Carta e prezzi possono cambiare: ricontrollare prima della visita.</p></div><div class="santangelo-dishes"><article><span>PRIMI</span><div><b>Gnocchi alla Sorrentina</b><small>€10</small></div><div><b>Tagliatelle ai porcini</b><small>€12</small></div><div><b>Candele alla genovese</b><small>€12</small></div></article><article class="grill-card"><span>ALLA BRACE</span><div><b>Tagliata di manzo</b><small>€18</small></div><div><b>Bistecca di manzo</b><small>€20</small></div><div><b>Filetto alla brace</b><small>€24</small></div></article><a class="text-action" href="' + esc(item.official) + '">Apri menu e contatti aggiornati ↗</a></div></section>',
    '<section class="santangelo-visit"><div class="page-width"><div><p class="section-kicker">SUL MONTE, IN PIAZZALE DEI CAPI</p><h2>Prima la strada.<br>Poi la brace.</h2><p>Piazzale dei Capi, 1<br>Villaggio Monte Faito · Vico Equense<br>Tutti i giorni · 12:00–15:00 / 19:00–23:00</p></div><div class="visit-actions"><a href="tel:+390818793042">081 879 3042</a><a href="tel:+393288763991">328 876 3991</a><a class="action-button" href="https://maps.google.com/?q=Piazzale+dei+Capi+1+Villaggio+Monte+Faito+Vico+Equense">Apri le indicazioni ↗</a></div></div></section>',
    contact(item, 'Un’esperienza che comincia dalla salita', 'Il concept unisce menu alla brace, panorama e indicazioni per raggiungere il ristorante, senza aggiungere funzioni di prenotazione non presenti.')
  ].join(''));
}

function contact(item, title, description) {
  return '<section class="concept-contact page-width"><div><p class="overline"><span></span> PROPOSTA PER ' + esc(item.name.toUpperCase()) + '</p><h2>' + title + '</h2></div><div><p>' + description + '</p><p>Questa anteprima non è commissionata dal locale. Dati e testi richiedono la conferma del titolare prima di un eventuale progetto.</p><a class="action-button" href="' + esc(mail(item.name)) + '">Parliamone con Diego ↗</a></div></section>';
}

const renderers = {
  buco: renderBuco,
  mustafa: renderMustafa,
  starace: renderStarace,
  cerase: renderCerase,
  stella: renderStella,
  frate: renderFrate,
  parlato: renderParlato,
  carbone: renderCarbone,
  casale: renderCasale,
  santangelo: renderSantangelo
};

function renderDirectory() {
  document.title = 'Concept web locali | Diego D’Esposito';
  const cards = candidates.map(function(item, index) {
    return '<article class="idea-card theme-' + esc(item.theme) + '"><a class="idea-card-image" href="/proposte/' + esc(item.slug) + '/"><img src="' + esc(asset(item.thumb)) + '" alt="' + esc(item.thumbAlt) + '" loading="lazy"><span>' + String(index + 1).padStart(2, '0') + ' / 10</span></a><div class="idea-card-copy"><p class="idea-card-type">' + esc(item.kind) + '</p><h2>' + esc(item.name) + '</h2><p>' + esc(item.hook) + '</p><a class="idea-card-link" href="/proposte/' + esc(item.slug) + '/">Apri il concept <b aria-hidden="true">↗</b></a></div></article>';
  }).join('');
  app.innerHTML = sharedHeader() +
    '<main id="contenuto" class="concept-directory"><section class="directory-hero"><div><p class="overline"><span></span> PENISOLA SORRENTINA · 10 ATTIVITÀ REALI</p><h1>Dieci siti.<br><em>Dieci storie diverse.</em></h1><p class="directory-intro">Ogni concept parte dal sito ufficiale dell’attività: prodotti, menu, luoghi e servizi guidano una proposta visiva costruita su misura.</p><p class="directory-note">Anteprime indipendenti, non commissionate. Le foto sono tratte dai siti pubblici delle attività; dove non sono disponibili abbiamo creato illustrazioni originali. Dati e prezzi vanno confermati con i titolari.</p><a class="solid-button" href="mailto:info@diegodesposito.it?subject=Confronto%20su%20un%20concept%20web">Parliamo di un progetto <span aria-hidden="true">↗</span></a></div><div class="directory-feature">' + photo(candidates[1], 'hero', 'directory-feature-photo') + '<div><span>IN EVIDENZA · RISTORANTE MUSTAFÀ</span><b>Una terrazza<br>sul mare.</b><a href="/proposte/ristorante-mustafa/">Guarda questo concept ↗</a></div></div></section><section class="idea-section" aria-labelledby="idea-title"><div class="idea-heading"><div><p class="overline"><span></span> PROPOSTE COSTRUITE SUI CONTENUTI PUBBLICI</p><h2 id="idea-title">Apri una storia,<br><em>non una demo generica.</em></h2></div><p>Ogni pagina ha un’impostazione propria, immagini del sito ufficiale oppure un’illustrazione originale, e un’idea concreta per far emergere le informazioni che contano.</p></div><div class="idea-grid">' + cards + '</div></section></main>' +
    sharedFooter(null);
}

if (pageType === 'directory') {
  renderDirectory();
} else {
  const slug = document.body.dataset.slug;
  const selected = candidates.find(function(item) { return item.slug === slug; });
  if (selected && renderers[selected.layout]) {
    app.innerHTML = renderers[selected.layout](selected);
  } else {
    document.title = 'Concept web locali | Diego D’Esposito';
    app.innerHTML = sharedHeader() + '<main class="not-found"><h1>Concept non trovato.</h1><a class="solid-button" href="/proposte/">Torna all’indice</a></main>' + sharedFooter(null);
  }
}
