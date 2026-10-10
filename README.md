# Diego D'Esposito — sito vetrina

Sito statico in italiano realizzato con HTML, CSS e JavaScript, senza build o dipendenze. Apri `index.html` per vedere la pagina.

La bozza usa i servizi, le tecnologie e i progetti già pubblicati su [diegodesposito.it](https://diegodesposito.it/), il recapito professionale `info@diegodesposito.it` e il ruolo di responsabile R&D descritto dal titolare in chat. La proposta mette ora al centro i siti vetrina e presenta piattaforme, app e integrazioni come estensioni possibili.

## Concept locali

`proposte/` contiene dieci anteprime indipendenti per attività locali. Ogni percorso ha un piano iniziale, contenuti originali e un avviso visibile che chiarisce che non è il sito ufficiale né un lavoro commissionato. Le pagine dichiarano `noindex` e non sono incluse nella sitemap. Prima di pubblicarle sul VPS, eseguire una volta come root lo script [enable-ionos-proposals.sh](enable-ionos-proposals.sh); il deploy SFTP include poi i file pubblici di questa cartella.

## Personalizzazione prima della pubblicazione

- Aggiungi l'area geografica e gli eventuali recapiti o canali commerciali che vuoi rendere pubblici.
- Se hai screenshot o link pubblici ai progetti, possono sostituire le illustrazioni create con CSS.

## Pubblicazione

GitHub conserva e versiona il codice; il sito pubblico resta servito dal VPS IONOS tramite Nginx. Il repository include un workflow GitHub Actions per copiare automaticamente i file pubblici del sito e la cartella delle anteprime sul VPS a ogni push su `main`. Vedi [DEPLOY.md](DEPLOY.md) per i passaggi di deploy e per l'abilitazione dell'accesso SFTP ristretto.
