# Pubblicazione automatica su IONOS

Il repository resta la sorgente del sito. Quando il deploy è attivo, ogni push su `main` che modifica `index.html` o `styles.css` avvia GitHub Actions; l'azione copia i due file sul VPS e controlla che la homepage pubblica corrisponda alla versione pubblicata. Nginx continua a servire i file statici e non deve essere riavviato.

Il workflow è volutamente disattivato finché non viene configurato l'accesso dedicato. Non usare l'account `root` né inserire la password iniziale in GitHub.

## Configurazione richiesta

1. Sul VPS, predisporre un utente SFTP dedicato, senza shell e senza privilegi `sudo`, con permesso di scrittura soltanto sulla document root gestita da Nginx. L'accesso deve usare una chiave SSH dedicata e revocabile.
2. Verificare la chiave host SSH del VPS tramite la console o un canale IONOS attendibile; non fidarsi di una chiave ottenuta al volo da GitHub Actions.
3. In GitHub, aprire **Settings → Secrets and variables → Actions** e aggiungere questi repository secrets:
   - `IONOS_SSH_PRIVATE_KEY`: chiave privata dedicata al deploy;
   - `IONOS_KNOWN_HOSTS`: riga `known_hosts` verificata per l'host IONOS.
4. Nella stessa sezione aggiungere queste repository variables:
   - `IONOS_HOST`: `217.154.2.219`;
   - `IONOS_DEPLOY_USER`: il nome dell'utente di deploy creato sul VPS;
   - `IONOS_WEB_ROOT`: percorso assoluto della document root usata da Nginx;
   - `IONOS_DEPLOY_ENABLED`: impostare a `true` solo dopo aver verificato utente, percorso e chiave host.
5. Eseguire **Actions → Deploy website to IONOS → Run workflow** per la prima pubblicazione e verificare il risultato. Dopo il successo, ogni push dei file del sito su `main` aggiornerà automaticamente la homepage.

Il workflow invia soltanto `index.html` e `styles.css`; `README.md` e i file di configurazione Git non vengono esposti nella document root. Se in futuro il sito aggiunge immagini, script o altri asset, vanno inclusi esplicitamente nel deploy prima di usarli.
