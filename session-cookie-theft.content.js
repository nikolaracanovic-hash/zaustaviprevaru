window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["session-cookie-theft"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: krađa sesijskog kolačića ili tokena" data-en="Introduction: stealing a session cookie or token">Uvod: krađa sesijskog kolačića ili tokena</h2>
      <p data-sr="Mnogi servisi vas drže ulogovane pomoću tokena u pregledaču. Ako napadač ukrade taj token, često može da koristi nalog bez lozinke dok traje sesija ili dok token važi." data-en="Many services keep you signed in with a browser token. If an attacker steals that token, they can often use the account without the password while the session or token remains valid.">Mnogi servisi vas drže ulogovane pomoću tokena u pregledaču. Ako napadač ukrade taj token, često može da koristi nalog bez lozinke dok traje sesija ili dok token važi.</p>
      <p data-sr="Ulaz može biti malver, zlonamerna ekstenzija, fišing koji preuzima sesiju, ili fizički pristup otključanom uređaju." data-en="Entry can be malware, a malicious extension, phishing that captures the session, or physical access to an unlocked device.">Ulaz može biti malver, zlonamerna ekstenzija, fišing koji preuzima sesiju, ili fizički pristup otključanom uređaju.</p>
      <div class="callout" data-sr="<strong>Model:</strong> infekcija ili prevara → krađa tokena → ponovna upotreba → rad u vaše ime." data-en="<strong>Model:</strong> infection or trickery → token theft → reuse → acting as you."><strong>Model:</strong> infekcija ili prevara → krađa tokena → ponovna upotreba → rad u vaše ime.</div>
    </section>
    <section class="card">
      <h2 data-sr="Zašto je token privlačan napadaču" data-en="Why a token is attractive to attackers">Zašto je token privlačan napadaču</h2>
      <p data-sr="Token zaobilazi ponovni unos lozinke i ponekad zaobilazi MFA za taj kanal. Zato je krađa sesije cilj sama po sebi." data-en="A token bypasses retyping the password and sometimes bypasses MFA for that channel. Session theft is a goal in itself.">Token zaobilazi ponovni unos lozinke i ponekad zaobilazi MFA za taj kanal. Zato je krađa sesije cilj sama po sebi.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Načini krađe" data-en="Theft paths">Načini krađe</div>
          <ul class="bullets">
            <li data-sr="Malver čita skladište pregledača." data-en="Malware reads browser storage.">Malver čita skladište pregledača.</li>
            <li data-sr="Ekstenzija pregledača sa previše dozvola." data-en="A browser extension with excessive permissions.">Ekstenzija pregledača sa previše dozvola.</li>
            <li data-sr="Fišing sa real-time presretanjem prijave." data-en="Phishing with real-time login interception.">Fišing sa real-time presretanjem prijave.</li>
            <li data-sr="Krađa uređaja dok je sesija otvorena." data-en="Device theft while a session is open.">Krađa uređaja dok je sesija otvorena.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Šta sledi" data-en="What follows">Šta sledi</div>
          <ul class="bullets">
            <li data-sr="Prijava na servis kao žrtva." data-en="Signing in to services as the victim.">Prijava na servis kao žrtva.</li>
            <li data-sr="Promena podešavanja naloga." data-en="Changing account settings.">Promena podešavanja naloga.</li>
            <li data-sr="Krađa podataka iz sesije." data-en="Stealing data visible in the session.">Krađa podataka iz sesije.</li>
            <li data-sr="Priprema za transakciju ili prenos sredstava." data-en="Preparing a transaction or transfer.">Priprema za transakciju ili prenos sredstava.</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching).">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Faze se često zbiju u kratko vreme; obrazac ostaje isti: kontakt → poverenje → prag → zloupotreba." data-en="Phases often compress into a short time; the pattern stays: contact → trust → threshold → abuse.">Faze se često zbiju u kratko vreme; obrazac ostaje isti: kontakt → poverenje → prag → zloupotreba.</p>
      <article class="phase ">
        <h3 class="phase-title" data-sr="Faza 1 — Ulaz: infekcija ili prevara" data-en="Phase 1 — Entry: infection or trickery">Faza 1 — Ulaz: infekcija ili prevara</h3>
        <p data-sr="Korisnik instalira ekstenziju, otvori prilog, ili koristi lažnu stranicu za prijavu koja presreće sesiju." data-en="The user installs an extension, opens an attachment, or uses a fake login page that intercepts the session.">Korisnik instalira ekstenziju, otvori prilog, ili koristi lažnu stranicu za prijavu koja presreće sesiju.</p>
        <p data-sr="Često nema očiglednog zahteva za lozinku u poruci jer token dolazi iza scene." data-en="There may be no obvious password request in the message because the token is taken behind the scenes.">Često nema očiglednog zahteva za lozinku u poruci jer token dolazi iza scene.</p>
        <ul class="bullets">
            <li data-sr="Prečica ka besplatnom alatu u pregledaču." data-en="A shortcut to a free browser tool.">Prečica ka besplatnom alatu u pregledaču.</li>
            <li data-sr="Lažna stranica za prijavu na poznat servis." data-en="A fake sign-in page for a known service.">Lažna stranica za prijavu na poznat servis.</li>
            <li data-sr="Poziv da omogućite ekstenziju radi bezbednosti." data-en="A request to enable an extension for security.">Poziv da omogućite ekstenziju radi bezbednosti.</li>
            <li data-sr="Deljenje računara bez zaključavanja sesije." data-en="Shared computer use without locking the session.">Deljenje računara bez zaključavanja sesije.</li>
          </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> na uređaju postoji mehanizam koji može čitati sesiju." data-en="<strong>Threshold:</strong> a mechanism exists on the device that can read the session."><strong>Prag faze:</strong> na uređaju postoji mehanizam koji može čitati sesiju.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Ekstrakcija tokena" data-en="Phase 2 — Token extraction">Faza 2 — Ekstrakcija tokena</h3>
        <p data-sr="Malver ili skripta izvuče kolačić ili token iz memorije ili diska i pošalje napadaču." data-en="Malware or a script pulls a cookie or token from memory or disk and sends it to the attacker.">Malver ili skripta izvuče kolačić ili token iz memorije ili diska i pošalje napadaču.</p>
        <ul class="bullets">
            <li data-sr="Radi u pozadini dok korisnik normalno surfuje." data-en="Runs in the background while the user browses normally.">Radi u pozadini dok korisnik normalno surfuje.</li>
            <li data-sr="Može ciljati određene domene." data-en="May target specific domains.">Može ciljati određene domene.</li>
            <li data-sr="Često se širi kroz isti kanal kao adware." data-en="Often spreads through the same channel as adware.">Često se širi kroz isti kanal kao adware.</li>
            <li data-sr="Korisnik ne vidi novu prijavu odmah." data-en="The user does not see a new sign-in immediately.">Korisnik ne vidi novu prijavu odmah.</li>
          </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="malicious-app-scam.html" data-sr="Zlonamerna aplikacija" data-en="Malicious app scam">Zlonamerna aplikacija</a></li>
            <li><a href="browser-extension-scam.html" data-sr="Ekstenzija" data-en="Browser extension scam">Ekstenzija</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> napadač prima validan token koji može da ponovo iskoristi." data-en="<strong>Threshold:</strong> the attacker receives a valid token they can replay."><strong>Prag faze:</strong> napadač prima validan token koji može da ponovo iskoristi.</div>
      </article>
      <article class="phase ">
        <h3 class="phase-title" data-sr="Faza 3 — Ponovna upotreba sesije" data-en="Phase 3 — Session replay">Faza 3 — Ponovna upotreba sesije</h3>
        <p data-sr="Napadač učitava token u svoj pregledač ili alat i otvara nalog kao da je korisnik tu." data-en="The attacker loads the token in their browser or tool and opens the account as if the user were there.">Napadač učitava token u svoj pregledač ili alat i otvara nalog kao da je korisnik tu.</p>
        <p data-sr="Geolokacija i uređaj mogu izgledati drugačije, ali korisnik to retko prati u realnom vremenu." data-en="Geo and device may look different, but users rarely watch this in real time.">Geolokacija i uređaj mogu izgledati drugačije, ali korisnik to retko prati u realnom vremenu.</p>
        <ul class="bullets">
            <li data-sr="Prijava bez ponovnog MFA koraka ako token to dozvoljava." data-en="Sign-in without another MFA step if the token allows.">Prijava bez ponovnog MFA koraka ako token to dozvoljava.</li>
            <li data-sr="Brz pristup pošti i dokumentima." data-en="Fast access to mail and documents.">Brz pristup pošti i dokumentima.</li>
            <li data-sr="Mogućnost dodavanja pravila za trajni pristup." data-en="Ability to add rules for persistent access.">Mogućnost dodavanja pravila za trajni pristup.</li>
            <li data-sr="Manje šuma nego kod promene lozinke na licu mesta." data-en="Less noise than an on-the-spot password change.">Manje šuma nego kod promene lozinke na licu mesta.</li>
          </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> napadač uspešno otvori sesiju servisa kao korisnik." data-en="<strong>Threshold:</strong> the attacker successfully opens a service session as the user."><strong>Prag faze:</strong> napadač uspešno otvori sesiju servisa kao korisnik.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Zloupotreba naloga" data-en="Phase 4 — Account abuse">Faza 4 — Zloupotreba naloga</h3>
        <p data-sr="Slede promene u podešavanjima, kradljive poruke, ili transakcije koje korisnik ne očekuje." data-en="Settings change, theft-related messages, or unexpected transactions follow.">Slede promene u podešavanjima, kradljive poruke, ili transakcije koje korisnik ne očekuje.</p>
        <ul class="bullets">
            <li data-sr="Dodavanje rezervnog broja ili imejla." data-en="Adding backup phone or email.">Dodavanje rezervnog broja ili imejla.</li>
            <li data-sr="Slanje zahteva za novac kontaktima." data-en="Sending money requests to contacts.">Slanje zahteva za novac kontaktima.</li>
            <li data-sr="Preuzimanje fajlova iz oblaka." data-en="Downloading files from the cloud.">Preuzimanje fajlova iz oblaka.</li>
            <li data-sr="Priprema lažnih uplatnica iz pravog naloga." data-en="Preparing fake invoices from the real account.">Priprema lažnih uplatnica iz pravog naloga.</li>
          </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> izvrši se radnja koja menja stanje naloga ili šalje podatke napolje." data-en="<strong>Threshold:</strong> an action runs that changes account state or sends data out."><strong>Prag faze:</strong> izvrši se radnja koja menja stanje naloga ili šalje podatke napolje.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Otkrivanje" data-en="Phase 5 — Discovery">Faza 5 — Otkrivanje</h3>
        <p data-sr="Korisnik vidi čudnu lokaciju u istoriji prijava, ili kontakt javlja sumnjivu poruku." data-en="The user sees a strange location in sign-in history, or a contact reports a suspicious message.">Korisnik vidi čudnu lokaciju u istoriji prijava, ili kontakt javlja sumnjivu poruku.</p>
        <ul class="bullets">
            <li data-sr="Uređaj ili grad ne odgovaraju korisniku." data-en="Device or city does not match the user.">Uređaj ili grad ne odgovaraju korisniku.</li>
            <li data-sr="Sesija ostaje aktivna i posle odjave sa telefona." data-en="The session stays active even after signing out on phone.">Sesija ostaje aktivna i posle odjave sa telefona.</li>
            <li data-sr="Lozinka je ista, ali incident se ponavlja." data-en="The password is unchanged but the incident repeats.">Lozinka je ista, ali incident se ponavlja.</li>
            <li data-sr="MFA ne pomaže ako je token i dalje validan." data-en="MFA does not help if the token is still valid.">MFA ne pomaže ako je token i dalje validan.</li>
          </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik prepozna neslaganje između aktivnosti i svojih radnji." data-en="<strong>Threshold:</strong> the user notices a mismatch between activity and their own actions."><strong>Prag faze:</strong> korisnik prepozna neslaganje između aktivnosti i svojih radnji.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Sanacija" data-en="Phase 6 — Remediation">Faza 6 — Sanacija</h3>
        <p data-sr="Potrebno je opozvati sve sesije, ukloniti malver i ekstenzije, promeniti lozinku i proveriti integracije." data-en="Revoke all sessions, remove malware and extensions, change the password, and review integrations.">Potrebno je opozvati sve sesije, ukloniti malver i ekstenzije, promeniti lozinku i proveriti integracije.</p>
        <p data-sr="Sam reset lozinke nije uvek dovoljan ako token može da se ukrade ponovo." data-en="A password reset alone is not always enough if the token can be stolen again.">Sam reset lozinke nije uvek dovoljan ako token može da se ukrade ponovo.</p>
        <ul class="bullets">
            <li data-sr="Potpuna odjava sa svih uređaja u bezbednosnim podešavanjima." data-en="Full sign-out of all devices in security settings.">Potpuna odjava sa svih uređaja u bezbednosnim podešavanjima.</li>
            <li data-sr="Skeniranje uređaja pouzdanim alatom." data-en="Scanning the device with a trusted tool.">Skeniranje uređaja pouzdanim alatom.</li>
            <li data-sr="Uklanjanje nepoznatih ekstenzija." data-en="Removing unknown extensions.">Uklanjanje nepoznatih ekstenzija.</li>
            <li data-sr="Provera odobrenih aplikacija u nalogu." data-en="Checking approved apps in the account.">Provera odobrenih aplikacija u nalogu.</li>
          </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="browser-session-hijack.html" data-sr="Preotimanje sesije" data-en="Browser session hijack">Preotimanje sesije</a></li>
            <li><a href="evil-twin-wifi-scam.html" data-sr="Evil twin Wi‑Fi" data-en="Evil twin Wi‑Fi">Evil twin Wi‑Fi</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik zatvara i token i kanal koji ga je proizveo." data-en="<strong>Threshold:</strong> the user closes both the token and the channel that produced it."><strong>Prag faze:</strong> korisnik zatvara i token i kanal koji ga je proizveo.</div>
      </article>
    </section>
    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
            <li data-sr="Aktivnost naloga sa nepoznatog grada ili uređaja." data-en="Account activity from an unknown city or device.">Aktivnost naloga sa nepoznatog grada ili uređaja.</li>
            <li data-sr="Instalirana ekstenzija koju ne pamtite." data-en="An installed extension you do not remember.">Instalirana ekstenzija koju ne pamtite.</li>
            <li data-sr="Spor rad pregledača ili čudni skočni prozori." data-en="Slow browser or strange pop-ups.">Spor rad pregledača ili čudni skočni prozori.</li>
            <li data-sr="Sesija ostaje ulogovana posle što ste mislili da ste se odjavili." data-en="The session stays signed in after you thought you signed out.">Sesija ostaje ulogovana posle što ste mislili da ste se odjavili.</li>
            <li data-sr="Ista šteta se ponavlja brzo posle promene lozinke." data-en="The same harm repeats soon after a password change.">Ista šteta se ponavlja brzo posle promene lozinke.</li>
            <li data-sr="Zahtev da omogućite developer režim ili skriptu." data-en="A request to enable developer mode or a script.">Zahtev da omogućite developer režim ili skriptu.</li>
            <li data-sr="Preuzimanje alata za optimizaciju prevara." data-en="Downloading an optimization tool from an ad.">Preuzimanje alata za optimizaciju prevara.</li>
            <li data-sr="Korišćenje javnog računara bez odjave." data-en="Using a public computer without signing out.">Korišćenje javnog računara bez odjave.</li>
            <li data-sr="Fišing koji ne traži lozinku ali traži potvrdu sesije." data-en="Phishing that does not ask for a password but asks for session confirmation.">Fišing koji ne traži lozinku ali traži potvrdu sesije.</li>
            <li data-sr="Kontakti javljaju poruke koje niste slali." data-en="Contacts report messages you did not send.">Kontakti javljaju poruke koje niste slali.</li>
          </ul>
    </section>
    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <ol class="steps">
        <li data-sr="Proverite aktivne sesije i odjavite sve sumnjive." data-en="Review active sessions and sign out suspicious ones.">Proverite aktivne sesije i odjavite sve sumnjive.</li>
        <li data-sr="Uklonite ekstenzije koje nisu neophodne." data-en="Remove extensions that are not necessary.">Uklonite ekstenzije koje nisu neophodne.</li>
        <li data-sr="Ažurirajte sistem i pregledač." data-en="Update the OS and browser.">Ažurirajte sistem i pregledač.</li>
        <li data-sr="Skenirajte uređaj ako postoji sumnja na malver." data-en="Scan the device if malware is suspected.">Skenirajte uređaj ako postoji sumnja na malver.</li>
        <li data-sr="Koristite zvaničnu prijavu preko aplikacije gde je moguće." data-en="Use official sign-in through an app where possible.">Koristite zvaničnu prijavu preko aplikacije gde je moguće.</li>
        <li data-sr="Ne instalirajte alate sa reklama u pretrazi." data-en="Do not install tools from search ads.">Ne instalirajte alate sa reklama u pretrazi.</li>
        <li data-sr="Zaključavajte uređaj kada ga napuštate." data-en="Lock the device when you step away.">Zaključavajte uređaj kada ga napuštate.</li>
        <li data-sr="Proverite odobrene aplikacije u cloud nalogu." data-en="Review approved apps in the cloud account.">Proverite odobrene aplikacije u cloud nalogu.</li>
      </ol>
    </section>
    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
      <ul class="bullets">
            <li data-sr="Da li imam ekstenzije koje mogu čitati stranice banke?" data-en="Do I have extensions that can read banking pages?">Da li imam ekstenzije koje mogu čitati stranice banke?</li>
            <li data-sr="Da li sam skoro instalirao pomoćni alat iz oglasa?" data-en="Did I recently install a helper tool from an ad?">Da li sam skoro instalirao pomoćni alat iz oglasa?</li>
            <li data-sr="Da li istorija prijava pokazuje nepoznate lokacije?" data-en="Does sign-in history show unknown locations?">Da li istorija prijava pokazuje nepoznate lokacije?</li>
            <li data-sr="Da li se sesija ponaša čudno posle kratke neaktivnosti?" data-en="Does the session behave oddly after short inactivity?">Da li se sesija ponaša čudno posle kratke neaktivnosti?</li>
            <li data-sr="Da li koristim isti nalog na deljenom računaru?" data-en="Do I use the same account on a shared computer?">Da li koristim isti nalog na deljenom računaru?</li>
            <li data-sr="Da li sam kliknuo na link za prijavu iz poruke?" data-en="Did I click a sign-in link from a message?">Da li sam kliknuo na link za prijavu iz poruke?</li>
            <li data-sr="Da li antivirus ili OS javljaju upozorenje?" data-en="Do antivirus or OS show a warning?">Da li antivirus ili OS javljaju upozorenje?</li>
            <li data-sr="Da li mogu da uklonim sve sesije odjednom u podešavanjima?" data-en="Can I remove all sessions at once in settings?">Da li mogu da uklonim sve sesije odjednom u podešavanjima?</li>
            <li data-sr="Da li znam koja ekstenzija pripada kompaniji?" data-en="Do I know which extension belongs to the vendor?">Da li znam koja ekstenzija pripada kompaniji?</li>
            <li data-sr="Da li je pregledač ažuriran?" data-en="Is the browser updated?">Da li je pregledač ažuriran?</li>
            <li data-sr="Da li čuvam rezervne kodove van naloga?" data-en="Do I store backup codes outside the account?">Da li čuvam rezervne kodove van naloga?</li>
            <li data-sr="Da li bih trebalo da tražim IT pregled posle incidenta?" data-en="Should I request an IT review after an incident?">Da li bih trebalo da tražim IT pregled posle incidenta?</li>
          </ul>
    </section>
    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Odjavite sve sesije na servisu." data-en="Sign out all sessions on the service.">Odjavite sve sesije na servisu.</li>
        <li data-sr="Uklonite sumnjive ekstenzije i programe." data-en="Remove suspicious extensions and programs.">Uklonite sumnjive ekstenzije i programe.</li>
        <li data-sr="Promenite lozinku i proverite MFA." data-en="Change the password and review MFA.">Promenite lozinku i proverite MFA.</li>
        <li data-sr="Proverite integracije i prosleđivanje u nalogu." data-en="Check integrations and forwarding in the account.">Proverite integracije i prosleđivanje u nalogu.</li>
        <li data-sr="Ako je moguće, koristite čist uređaj za oporavak." data-en="If possible, use a clean device for recovery.">Ako je moguće, koristite čist uređaj za oporavak.</li>
      </ol>
    </section>
    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si instalirao nešto novo u pregledač?" data-en="Did you install anything new in the browser?">Da li si instalirao nešto novo u pregledač?</li>
            <li data-sr="Koje sesije vidiš u podešavanjima naloga?" data-en="Which sessions do you see in account settings?">Koje sesije vidiš u podešavanjima naloga?</li>
            <li data-sr="Da li se šteta ponavlja posle odjave?" data-en="Does the harm repeat after sign-out?">Da li se šteta ponavlja posle odjave?</li>
            <li data-sr="Da li koristiš isti nalog na poslu i kući?" data-en="Do you use the same account at work and home?">Da li koristiš isti nalog na poslu i kući?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Token je kao privremena lozinka; moramo ga poništiti svuda." data-en="A token is like a temporary password; we must invalidate it everywhere.">Token je kao privremena lozinka; moramo ga poništiti svuda.</li>
            <li data-sr="Prvo skidamo ekstenzije i malver, pa menjamo lozinku." data-en="We remove extensions and malware first, then change the password.">Prvo skidamo ekstenzije i malver, pa menjamo lozinku.</li>
            <li data-sr="Hajde da odjavimo sve uređaje iz jednog ekrana bezbednosti." data-en="Let us sign out all devices from one security screen.">Hajde da odjavimo sve uređaje iz jednog ekrana bezbednosti.</li>
            <li data-sr="Ne žurimo sa klikom dok ne proverimo istoriju prijava." data-en="We do not rush clicks until we check sign-in history.">Ne žurimo sa klikom dok ne proverimo istoriju prijava.</li>
          </ul>
        </div>
      </div>
    </section>
`
};
