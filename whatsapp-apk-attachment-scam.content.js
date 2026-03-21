window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["whatsapp-apk-attachment-scam"] = {
  raw_html: `

    <section class="card">
      <h2 data-sr="Uvod: APK prilog u WhatsApp poruci" data-en="Introduction: APK attachment in a WhatsApp message">Uvod: APK prilog u WhatsApp poruci</h2>

      <p data-sr="Stiže fajl .apk kao ažuriranje, tajna verzija, faktura ili katalog; instalacija van prodavnice može dati malveru pristup porukama, kontaktima i obaveštenjima." data-en="An .apk arrives as an update, secret version, invoice, or catalog; installing outside the store can give malware access to messages, contacts, and notifications.">Stiže fajl .apk kao ažuriranje, tajna verzija, faktura ili katalog; instalacija van prodavnice može dati malveru pristup porukama, kontaktima i obaveštenjima.</p>
      <p data-sr="Zvanični WhatsApp se ažurira kroz prodavnicu aplikacija, ne kroz prilog u četu." data-en="Official WhatsApp updates through the app store, not via chat attachments.">Zvanični WhatsApp se ažurira kroz prodavnicu aplikacija, ne kroz prilog u četu.</p>
      <div class="callout" data-sr="<strong>Model:</strong> uverljiv razlog → APK → dozvola nepoznatog izvora → malver → krađa pristupa." data-en="<strong>Model:</strong> believable pretext → APK → unknown-sources permission → malware → access theft."><strong>Model:</strong> uverljiv razlog → APK → dozvola nepoznatog izvora → malver → krađa pristupa.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako ime fajla prodaje laž" data-en="How the filename sells the lie">Kako ime fajla prodaje laž</h2>

      <p data-sr="Korisnik veruje jer pošiljalac liči na firmu ili prijatelja, a ikona aplikacije može biti ukradena." data-en="The user trusts because the sender looks like a company or friend, and the app icon may be stolen.">Korisnik veruje jer pošiljalac liči na firmu ili prijatelja, a ikona aplikacije može biti ukradena.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Tipična imena priloga" data-en="Typical attachment names">Tipična imena priloga</div>
          <ul class="bullets">
            <li data-sr="WhatsApp_Gold.apk ili WhatsApp_Plus_2025.apk." data-en="WhatsApp_Gold.apk or WhatsApp_Plus_2025.apk.">WhatsApp_Gold.apk ili WhatsApp_Plus_2025.apk.</li>
            <li data-sr="Faktura_broj123.apk umesto PDF-a." data-en="Invoice_number123.apk instead of a PDF.">Faktura_broj123.apk umesto PDF-a.</li>
            <li data-sr="VideoPlayer_update.apk uz lažnu poruku o kodeku." data-en="VideoPlayer_update.apk with a fake codec message.">VideoPlayer_update.apk uz lažnu poruku o kodeku.</li>
            <li data-sr="Katalog_ponuda.apk za mali biznis." data-en="Offers_catalog.apk for a small business.">Katalog_ponuda.apk za mali biznis.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Šta malver često radi" data-en="What malware often does">Šta malver često radi</div>
          <ul class="bullets">
            <li data-sr="Prekriva pravu ikonu WhatsApp-a i čita obaveštenja." data-en="Overlays the real WhatsApp icon and reads notifications.">Prekriva pravu ikonu WhatsApp-a i čita obaveštenja.</li>
            <li data-sr="Šalje isti APK kontaktima iz imenika." data-en="Sends the same APK to contacts from the address book.">Šalje isti APK kontaktima iz imenika.</li>
            <li data-sr="Traži pristup SMS-u radi presretanja kodova." data-en="Requests SMS access to intercept codes.">Traži pristup SMS-u radi presretanja kodova.</li>
            <li data-sr="Otključava reklame ili daljinski pristup." data-en="Unlocks ads or remote access.">Otključava reklame ili daljinski pristup.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching).">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Instalacija traje minut; šteta može ostati skrivena danima." data-en="Install takes a minute; harm may stay hidden for days.">Instalacija traje minut; šteta može ostati skrivena danima.</p>
      <article class="phase ">
        <h3 class="phase-title" data-sr="Faza 1 — Ulaz: poruka sa APK prilogom" data-en="Phase 1 — Entry: message with APK attachment">Faza 1 — Ulaz: poruka sa APK prilogom</h3>
        <p data-sr="Poznati kontakt ili kupac šalje fajl uz kratku poruku da hitno otvorite." data-en="A known contact or customer sends a file with a short note to open urgently.">Poznati kontakt ili kupac šalje fajl uz kratku poruku da hitno otvorite.</p>
        <p data-sr="Kontakt je možda već kompromitovan pa poruka deluje autentično." data-en="The contact may already be compromised so the message feels authentic.">Kontakt je možda već kompromitovan pa poruka deluje autentično.</p>
        <ul class="bullets">
            <li data-sr="Tekst je kraći od uobičajenog stila prijatelja." data-en="The text is shorter than the friend usual style.">Tekst je kraći od uobičajenog stila prijatelja.</li>
            <li data-sr="Fajl je jedini prilog bez PDF varijante." data-en="The file is the only attachment without a PDF option.">Fajl je jedini prilog bez PDF varijante.</li>
            <li data-sr="Traži se instalacija da biste videli sadržaj." data-en="Install is required to see the content.">Traži se instalacija da biste videli sadržaj.</li>
            <li data-sr="Poslovni razlog: ponuda, ugovor, plaćanje." data-en="Business pretext: offer, contract, payment.">Poslovni razlog: ponuda, ugovor, plaćanje.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta preuzme fajl umesto da traži PDF ili link iz prodavnice." data-en="<strong>Threshold:</strong> the target downloads the file instead of asking for a PDF or store link."><strong>Prag faze:</strong> meta preuzme fajl umesto da traži PDF ili link iz prodavnice.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Zaobilazak prodavnice i dozvole" data-en="Phase 2 — Bypassing the store and permissions">Faza 2 — Zaobilazak prodavnice i dozvole</h3>
        <p data-sr="Android traži uključivanje nepoznatih izvora; korisnik potvrdi korake jer veruje pošiljaocu." data-en="Android asks to enable unknown sources; the user confirms because they trust the sender.">Android traži uključivanje nepoznatih izvora; korisnik potvrdi korake jer veruje pošiljaocu.</p>
        <ul class="bullets">
            <li data-sr="Lista traženih dozvola je dugačka i brzo se potvrđuje." data-en="The permission list is long and gets confirmed quickly.">Lista traženih dozvola je dugačka i brzo se potvrđuje.</li>
            <li data-sr="Aplikacija traži pristup SMS-u, kontaktima i preklapanju ekrana." data-en="The app asks for SMS, contacts, and screen overlay.">Aplikacija traži pristup SMS-u, kontaktima i preklapanju ekrana.</li>
            <li data-sr="Instalacija se predstavlja kao zakrpa ili dodatak." data-en="The install is framed as a patch or add-on.">Instalacija se predstavlja kao zakrpa ili dodatak.</li>
            <li data-sr="Ikona liči na WhatsApp ali naziv paketa je drugačiji." data-en="The icon looks like WhatsApp but the package name differs.">Ikona liči na WhatsApp ali naziv paketa je drugačiji.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="fake-app-sideload-verification-scam.html" data-sr="Lažna sideload verifikacija aplikacije" data-en="Fake app sideload verification scam">Lažna sideload verifikacija aplikacije</a></li>
            <li><a href="whatsapp-group-join-qr-scam.html" data-sr="WhatsApp: QR za ulazak u grupu" data-en="WhatsApp: group join QR scam">WhatsApp: QR za ulazak u grupu</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik omogući instalaciju van prodavnice." data-en="<strong>Threshold:</strong> the user enables install outside the store."><strong>Prag faze:</strong> korisnik omogući instalaciju van prodavnice.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Prag: pokrenuta aplikacija sa širokim pristupom" data-en="Phase 3 — Threshold: launched app with broad access">Faza 3 — Prag: pokrenuta aplikacija sa širokim pristupom</h3>
        <p data-sr="Malver počne da čita obaveštenja i šalje poruke u pozadini dok korisnik vidi lažni ekran učitavanja." data-en="Malware starts reading notifications and sending messages in the background while the user sees a fake loading screen.">Malver počne da čita obaveštenja i šalje poruke u pozadini dok korisnik vidi lažni ekran učitavanja.</p>
        <p data-sr="Ponekad se traži da uneste broj telefona u lažni WhatsApp." data-en="Sometimes you are asked to enter the phone number in a fake WhatsApp.">Ponekad se traži da uneste broj telefona u lažni WhatsApp.</p>
        <ul class="bullets">
            <li data-sr="Baterija brzo opada." data-en="Battery drains fast.">Baterija brzo opada.</li>
            <li data-sr="Pojavljuju se novi APK u folderu preuzimanja." data-en="New APKs appear in the downloads folder.">Pojavljuju se novi APK u folderu preuzimanja.</li>
            <li data-sr="Čudne poruke odlaze kontaktima noću." data-en="Odd messages go to contacts at night.">Čudne poruke odlaze kontaktima noću.</li>
            <li data-sr="Ne možete da deinstalirate aplikaciju bez dodatnih koraka." data-en="You cannot uninstall without extra steps.">Ne možete da deinstalirate aplikaciju bez dodatnih koraka.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> aplikacija sa sumnjivim paketom dobije trajne dozvole." data-en="<strong>Threshold:</strong> the suspicious-package app gets lasting permissions."><strong>Prag faze:</strong> aplikacija sa sumnjivim paketom dobije trajne dozvole.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Zloupotreba naloga, novca ili identiteta" data-en="Phase 4 — Abuse of account, money, or identity">Faza 4 — Zloupotreba naloga, novca ili identiteta</h3>
        <p data-sr="Kodovi iz SMS-a se prosleđuju napadaču; kontakti dobijaju isti APK ili molbu za novac." data-en="SMS codes go to the attacker; contacts get the same APK or money asks.">Kodovi iz SMS-a se prosleđuju napadaču; kontakti dobijaju isti APK ili molbu za novac.</p>
        <ul class="bullets">
            <li data-sr="Praćenje unosa sa ekrana radi krađe lozinki." data-en="Keylogging or screen capture for password theft.">Praćenje unosa sa ekrana radi krađe lozinki.</li>
            <li data-sr="Lažni preklopni ekran traži podatke kartice." data-en="A fake overlay asks for card data.">Lažni preklopni ekran traži podatke kartice.</li>
            <li data-sr="Daljinski pristup ako je ubačen dodatni modul." data-en="Remote access if an extra module was bundled.">Daljinski pristup ako je ubačen dodatni modul.</li>
            <li data-sr="Širenje na druge aplikacije kroz ista odobrenja." data-en="Spread to other apps through the same approvals.">Širenje na druge aplikacije kroz ista odobrenja.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="whatsapp-takeover.html" data-sr="Preuzimanje WhatsApp naloga" data-en="WhatsApp takeover">Preuzimanje WhatsApp naloga</a></li>
            <li><a href="browser-push-malware-scam.html" data-sr="Malver kroz push obaveštenja" data-en="Browser push malware scam">Malver kroz push obaveštenja</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> podaci ili novac odu napadaču pre nego što korisnik reaguje." data-en="<strong>Threshold:</strong> data or money goes to the attacker before the user reacts."><strong>Prag faze:</strong> podaci ili novac odu napadaču pre nego što korisnik reaguje.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Otkrivanje" data-en="Phase 5 — Discovery">Faza 5 — Otkrivanje</h3>
        <p data-sr="Antivirus upozori, prijatelji se žale ili banka pošalje SMS o transakciji." data-en="Antivirus warns, friends complain, or the bank SMS about a transaction.">Antivirus upozori, prijatelji se žale ili banka pošalje SMS o transakciji.</p>
        <ul class="bullets">
            <li data-sr="U listi aplikacija postoje dva WhatsApp." data-en="Two WhatsApp entries appear in the app list.">U listi aplikacija postoje dva WhatsApp.</li>
            <li data-sr="Dozvole u podešavanjima pokazuju nepoznat pristup SMS-u." data-en="Settings permissions show unknown SMS access.">Dozvole u podešavanjima pokazuju nepoznat pristup SMS-u.</li>
            <li data-sr="Istorija poziva ili poruka sadrži šablone koje niste slali." data-en="Call or message history has templates you did not send.">Istorija poziva ili poruka sadrži šablone koje niste slali.</li>
            <li data-sr="Uređaj se greje u džepu bez korišćenja." data-en="The phone heats in a pocket without use.">Uređaj se greje u džepu bez korišćenja.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> žrtva poveže simptome sa nedavnom instalacijom APK." data-en="<strong>Threshold:</strong> the victim ties symptoms to a recent APK install."><strong>Prag faze:</strong> žrtva poveže simptome sa nedavnom instalacijom APK.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Sanacija" data-en="Phase 6 — Remediation">Faza 6 — Sanacija</h3>
        <p data-sr="Isključiti uređaj sa mreže, ukloniti aplikaciju, pokrenuti proveru bezbednosti, promeniti lozinke sa drugog uređaja, obavestiti banku." data-en="Take the device offline, remove the app, run a security check, change passwords from another device, notify the bank.">Isključiti uređaj sa mreže, ukloniti aplikaciju, pokrenuti proveru bezbednosti, promeniti lozinke sa drugog uređaja, obavestiti banku.</p>
        <p data-sr="U najgorim slučajevima potrebno je fabričko resetovanje uz backup koji ne sadrži malver." data-en="Worst cases need factory reset with a backup that does not include malware.">U najgorim slučajevima potrebno je fabričko resetovanje uz backup koji ne sadrži malver.</p>
        <ul class="bullets">
            <li data-sr="Isključiti nepoznate izvore posle čišćenja." data-en="Turn off unknown sources after cleanup.">Isključiti nepoznate izvore posle čišćenja.</li>
            <li data-sr="Proveriti povezane uređaje u WhatsApp podešavanjima." data-en="Check linked devices in WhatsApp settings.">Proveriti povezane uređaje u WhatsApp podešavanjima.</li>
            <li data-sr="Obavestiti kontakte da ignorišu APK koji je možda poslat sa vašeg broja." data-en="Tell contacts to ignore an APK possibly sent from your number.">Obavestiti kontakte da ignorišu APK koji je možda poslat sa vašeg broja.</li>
            <li data-sr="Razmotriti pomoć servisa ako se malver opire brisanju." data-en="Consider a repair shop if malware resists removal.">Razmotriti pomoć servisa ako se malver opire brisanju.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="tech-support-scam.html" data-sr="Lažna podrška" data-en="Tech support scam">Lažna podrška</a></li>
            <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> uređaj je očišćen od sumnjivog APK i ključnih dozvola su povučene." data-en="<strong>Threshold:</strong> the device is cleaned of the suspicious APK and risky permissions are revoked."><strong>Prag faze:</strong> uređaj je očišćen od sumnjivog APK i ključnih dozvola su povučene.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
<ul class="bullets">
            <li data-sr="Bilo koji APK preko WhatsApp-a za ažuriranje aplikacije." data-en="Any WhatsApp APK for an app update.">Bilo koji APK preko WhatsApp-a za ažuriranje aplikacije.</li>
            <li data-sr="Faktura ili ugovor u obliku .apk umesto PDF-a." data-en="Invoice or contract as .apk instead of PDF.">Faktura ili ugovor u obliku .apk umesto PDF-a.</li>
            <li data-sr="Hitna poruka da instalirate pre nego što istekne rok." data-en="Urgent message to install before a deadline.">Hitna poruka da instalirate pre nego što istekne rok.</li>
            <li data-sr="Zahtev za uključivanje nepoznatih izvora." data-en="Request to enable unknown sources.">Zahtev za uključivanje nepoznatih izvora.</li>
            <li data-sr="Aplikacija traži pristup SMS-u i kontaktima." data-en="The app asks for SMS and contacts access.">Aplikacija traži pristup SMS-u i kontaktima.</li>
            <li data-sr="Dva WhatsApp-a u listi aplikacija." data-en="Two WhatsApp apps in the list.">Dva WhatsApp-a u listi aplikacija.</li>
            <li data-sr="Pošiljalac ne može da objasni šta je u fajlu drugim rečima." data-en="The sender cannot explain the file in other words.">Pošiljalac ne može da objasni šta je u fajlu drugim rečima.</li>
            <li data-sr="Lažna obećanja o skrivenim funkcijama ili bojama interfejsa." data-en="Fake promises of hidden features or UI colors.">Lažna obećanja o skrivenim funkcijama ili bojama interfejsa.</li>
            <li data-sr="Video koji ne može da se pusti bez novog plejera iz priloga." data-en="A video that cannot play without a new player from the attachment.">Video koji ne može da se pusti bez novog plejera iz priloga.</li>
            <li data-sr="Isti APK stiže od više kontakata u istom danu." data-en="The same APK arrives from multiple contacts the same day.">Isti APK stiže od više kontakata u istom danu.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
<ol class="steps">
        <li data-sr="Nikada ne instalirajte APK iz WhatsApp priloga bez IT provere." data-en="Never install APKs from WhatsApp attachments without IT review.">Nikada ne instalirajte APK iz WhatsApp priloga bez IT provere.</li>
        <li data-sr="Tražite PDF ili link ka zvaničnoj prodavnici." data-en="Ask for a PDF or an official store link.">Tražite PDF ili link ka zvaničnoj prodavnici.</li>
        <li data-sr="Proverite pošiljaoca drugim kanalom pre otvaranja fajla." data-en="Verify the sender on another channel before opening the file.">Proverite pošiljaoca drugim kanalom pre otvaranja fajla.</li>
        <li data-sr="Proverite hash ili potpis samo ako znate pouzdan izvor." data-en="Check hash or signature only if you have a trusted source.">Proverite hash ili potpis samo ako znate pouzdan izvor.</li>
        <li data-sr="Držite isključene nepoznate izvore kao podrazumevano." data-en="Keep unknown sources disabled by default.">Držite isključene nepoznate izvore kao podrazumevano.</li>
        <li data-sr="Čitajte listu dozvola pre potvrde." data-en="Read the permission list before confirming.">Čitajte listu dozvola pre potvrde.</li>
        <li data-sr="Ažurirajte WhatsApp samo kroz Google Play ili ekvivalent." data-en="Update WhatsApp only via Google Play or equivalent.">Ažurirajte WhatsApp samo kroz Google Play ili ekvivalent.</li>
        <li data-sr="Prijavite prilog u aplikaciji kao sumnjiv." data-en="Report the attachment in the app as suspicious.">Prijavite prilog u aplikaciji kao sumnjiv.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
<ul class="bullets">
            <li data-sr="Da li je ekstenzija .apk?" data-en="Is the extension .apk?">Da li je ekstenzija .apk?</li>
            <li data-sr="Da li sam tražio ovaj fajl?" data-en="Did I request this file?">Da li sam tražio ovaj fajl?</li>
            <li data-sr="Da li firma inače šalje PDF?" data-en="Does the company normally send PDFs?">Da li firma inače šalje PDF?</li>
            <li data-sr="Da li bih instalirao ovo na poslovni telefon šefa?" data-en="Would I install this on the boss work phone?">Da li bih instalirao ovo na poslovni telefon šefa?</li>
            <li data-sr="Da li aplikacija traži preklapanje preko drugih aplikacija?" data-en="Does the app ask to draw over other apps?">Da li aplikacija traži preklapanje preko drugih aplikacija?</li>
            <li data-sr="Da li postoji isto ime aplikacije u prodavnici?" data-en="Does the same app name exist in the store?">Da li postoji isto ime aplikacije u prodavnici?</li>
            <li data-sr="Da li je pošiljalac možda hakovan?" data-en="Might the sender be hacked?">Da li je pošiljalac možda hakovan?</li>
            <li data-sr="Da li osećam pritisak da kliknem odmah?" data-en="Do I feel pressure to tap immediately?">Da li osećam pritisak da kliknem odmah?</li>
            <li data-sr="Da li mogu da sačekam savet IT-a sutra?" data-en="Can I wait for IT advice tomorrow?">Da li mogu da sačekam savet IT-a sutra?</li>
            <li data-sr="Da li je fajl mali ali traži ogromne dozvole?" data-en="Is the file small but asking huge permissions?">Da li je fajl mali ali traži ogromne dozvole?</li>
            <li data-sr="Da li bih trebalo da obavestim ostale u grupi?" data-en="Should I warn others in the group?">Da li bih trebalo da obavestim ostale u grupi?</li>
            <li data-sr="Da li je ovo prvi put da dobijam APK u četu?" data-en="Is this the first time I got an APK in chat?">Da li je ovo prvi put da dobijam APK u četu?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
<ol class="steps">
        <li data-sr="Ne otvarajte fajl; pitajte pošiljaoca drugim kanalom." data-en="Do not open the file; ask the sender on another channel.">Ne otvarajte fajl; pitajte pošiljaoca drugim kanalom.</li>
        <li data-sr="Ako je instalirano, isključite internet i uklonite aplikaciju." data-en="If installed, take offline and remove the app.">Ako je instalirano, isključite internet i uklonite aplikaciju.</li>
        <li data-sr="Pokrenite proveru bezbednosti i uklonite preklapanje ekrana u podešavanjima." data-en="Run a security scan and remove screen overlays in settings.">Pokrenite proveru bezbednosti i uklonite preklapanje ekrana u podešavanjima.</li>
        <li data-sr="Promenite lozinke bitnih naloga sa drugog uređaja." data-en="Change key account passwords from another device.">Promenite lozinke bitnih naloga sa drugog uređaja.</li>
        <li data-sr="Obavestite kontakte da ne otvaraju isti prilog." data-en="Tell contacts not to open the same attachment.">Obavestite kontakte da ne otvaraju isti prilog.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si instalirao APK iz četa?" data-en="Did you install an APK from chat?">Da li si instalirao APK iz četa?</li>
            <li data-sr="Da li si uključio nepoznate izvore?" data-en="Did you enable unknown sources?">Da li si uključio nepoznate izvore?</li>
            <li data-sr="Da li vidiš dva WhatsApp-a?" data-en="Do you see two WhatsApp apps?">Da li vidiš dva WhatsApp-a?</li>
            <li data-sr="Da li telefon šalje poruke sam?" data-en="Is the phone sending messages by itself?">Da li telefon šalje poruke sam?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Pravi WhatsApp ne stiže kao APK u poruci." data-en="Real WhatsApp does not arrive as an APK in a message.">Pravi WhatsApp ne stiže kao APK u poruci.</li>
            <li data-sr="Hajde da obrišemo aplikaciju i proverimo dozvole." data-en="Let us delete the app and check permissions.">Hajde da obrišemo aplikaciju i proverimo dozvole.</li>
            <li data-sr="Faktura mora biti PDF ili papir, ne instalacija." data-en="An invoice must be PDF or paper, not an install.">Faktura mora biti PDF ili papir, ne instalacija.</li>
            <li data-sr="Ako je sumnjivo, pitamo firmu na zvaničnom broju." data-en="If it is suspicious, we ask the company on an official number.">Ako je sumnjivo, pitamo firmu na zvaničnom broju.</li>
          </ul>
        </div>
      </div>
    </section>
`
};
