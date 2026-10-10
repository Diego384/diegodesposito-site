# Pubblicazione automatica su IONOS

Il repository resta la sorgente del sito. Quando il deploy è attivo, ogni push su `main` che modifica `index.html`, `styles.css`, `robots.txt`, `sitemap.xml` o `proposte/**` avvia GitHub Actions; l'azione copia il sito e le anteprime sul VPS e controlla che le copie pubbliche corrispondano a quelle nel repository. Nginx continua a servire i file statici e non deve essere riavviato.

Il workflow è volutamente disattivato finché non viene configurato l'accesso dedicato. Non usare l'account `root` né inserire la password iniziale in GitHub.

## Configurazione richiesta

1. Da PuTTY, rivedere ed eseguire una volta come `root` lo script [setup-ionos-deploy.sh](setup-ionos-deploy.sh). Verifica la document root `/var/www/portfolio`, crea l'utente SFTP confinato e concede scrittura solo a `index.html` e `styles.css`. Non riavvia Nginx; valida la configurazione SSH prima di ricaricarla.
2. Dopo il setup iniziale, per aggiungere o aggiornare `robots.txt` e `sitemap.xml`, rivedere ed eseguire come `root` lo script [enable-ionos-seo-files.sh](enable-ionos-seo-files.sh). Verifica il jail SFTP esistente e concede scrittura soltanto a questi due ulteriori file pubblici; non modifica la configurazione SSH e non riavvia Nginx.
3. Per pubblicare le anteprime in `proposte/`, rivedere ed eseguire una volta come `root` lo script [enable-ionos-proposals.sh](enable-ionos-proposals.sh). Crea o abilita in scrittura solo `/var/www/portfolio/proposte` per l'utente SFTP dedicato; non modifica SSH o Nginx.
4. Verificare la chiave host SSH del VPS tramite la console o un canale IONOS attendibile; non fidarsi di una chiave ottenuta al volo da GitHub Actions.
5. In GitHub, aprire **Settings → Secrets and variables → Actions** e aggiungere questi repository secrets:
   - `IONOS_SSH_PRIVATE_KEY`: chiave privata dedicata al deploy;
   - `IONOS_KNOWN_HOSTS`: riga `known_hosts` verificata per l'host IONOS.
6. Nella stessa sezione aggiungere queste repository variables:
   - `IONOS_HOST`: `217.154.2.219`;
   - `IONOS_DEPLOY_USER`: il nome dell'utente di deploy creato sul VPS;
   - `IONOS_DEPLOY_ENABLED`: impostare a `true` solo dopo aver verificato utente, percorso e chiave host.
7. Eseguire **Actions → Deploy website to IONOS → Run workflow** per la prima pubblicazione e verificare il risultato. Dopo il successo, ogni push dei file del sito o di `proposte/**` su `main` aggiornerà automaticamente homepage e anteprime.

Il workflow invia i quattro file pubblici elencati nella radice del chroot, che corrisponde a `/var/www/portfolio`, più i soli file pubblici presenti in `proposte/`. `README.md`, gli script di setup e i file di configurazione Git non vengono esposti nella document root. La directory remota delle proposte deve essere abilitata dallo script dedicato prima del deploy delle anteprime.
