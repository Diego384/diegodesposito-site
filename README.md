# Diego D'Esposito — sito vetrina

Sito statico in italiano realizzato con HTML e CSS, senza build o dipendenze. Apri `index.html` per vedere la pagina.

La bozza usa i servizi, le tecnologie e i progetti già pubblicati su [diegodesposito.it](https://diegodesposito.it/), il recapito professionale `info@diegodesposito.it` e il ruolo di responsabile R&D descritto dal titolare in chat. La proposta mette ora al centro i siti vetrina e presenta piattaforme, app e integrazioni come estensioni possibili.

## Personalizzazione prima della pubblicazione

- Aggiungi l'area geografica e gli eventuali recapiti o canali commerciali che vuoi rendere pubblici.
- Se hai screenshot o link pubblici ai progetti, possono sostituire le illustrazioni create con CSS.

## Pubblicazione

GitHub conserva e versiona il codice; il sito pubblico resta servito dal VPS IONOS tramite Nginx. Il repository include un workflow GitHub Actions per copiare automaticamente `index.html` e `styles.css` sul VPS a ogni push su `main`. Il workflow rimane disattivato fino alla configurazione di un account SSH di deploy senza privilegi root e dei relativi segreti e variabili in GitHub. Vedi [DEPLOY.md](DEPLOY.md) per i passaggi richiesti.
