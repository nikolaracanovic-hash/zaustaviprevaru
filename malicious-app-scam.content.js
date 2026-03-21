if (!window.SCAM_CONTENT) window.SCAM_CONTENT = {};
window.SCAM_CONTENT["malicious-app-scam"] = {
  raw_html: `
<section class="content-section">
  <h2 data-sr="Uvod: kako radi prevara sa zlonamernom aplikacijom" data-en="Introduction: how the malicious app scam works">Uvod: kako radi prevara sa zlonamernom aplikacijom</h2>
  <p data-sr="Korisnik preuzima aplikaciju koja izgleda legitimno — banking helper, VPN, skener dokumenata, igra, produktivni alat. Posle instalacije aplikacija traži dozvole koje premašuju svoju svrhu: pristup SMS-u, kontaktima, kamerom, lokacijom, pristupačnošću. Jednom kada su dozvole odobrene, aplikacija može da čita OTP kodove, presreće lozinke, prati tastere i prenosi podatke napadaču u realnom vremenu." data-en="The user installs an app that looks legitimate — banking helper, VPN, document scanner, game, productivity tool. After installation the app requests permissions that exceed its purpose: access to SMS, contacts, camera, location, accessibility. Once permissions are granted the app can read OTP codes, intercept passwords, log keystrokes, and transmit data to the attacker in real time.">Korisnik preuzima aplikaciju koja izgleda legitimno — banking helper, VPN, skener dokumenata, igra, produktivni alat. Posle instalacije aplikacija traži dozvole koje premašuju svoju svrhu: pristup SMS-u, kontaktima, kamerom, lokacijom, pristupačnošću. Jednom kada su dozvole odobrene, aplikacija može da čita OTP kodove, presreće lozinke, prati tastere i prenosi podatke napadaču u realnom vremenu.</p>
  <p data-sr="Šteta se realizuje kroz više kanala istovremeno: preuzimanje finansijskih naloga, krađa identiteta, pristup bankarskim aplikacijama, slanje phishing poruka kontaktima. Aplikacija ostaje aktivna dok korisnik ne primeti anomalije na nalogu — što može da traže danima ili nedeljama." data-en="Damage is realized through multiple channels simultaneously: financial account takeover, identity theft, access to banking apps, sending phishing messages to contacts. The app remains active until the user notices anomalies on their account — which can take days or weeks.">Šteta se realizuje kroz više kanala istovremeno: preuzimanje finansijskih naloga, krađa identiteta, pristup bankarskim aplikacijama, slanje phishing poruka kontaktima. Aplikacija ostaje aktivna dok korisnik ne primeti anomalije na nalogu — što može da traže danima ili nedeljama.</p>
</section>

<section class="content-section">
  <h2 data-sr="Model" data-en="Model">Model</h2>
  <div class="phase">
    <div class="label" data-sr="Lanac" data-en="Chain">Lanac</div>
    <p data-sr="Oglas/link/preporuka → preuzimanje aplikacije → instalacija → dozvole → eksfiltracija podataka → preuzimanje naloga → finansijska šteta" data-en="Ad/link/recommendation → app download → installation → permissions → data exfiltration → account takeover → financial damage">Oglas/link/preporuka → preuzimanje aplikacije → instalacija → dozvole → eksfiltracija podataka → preuzimanje naloga → finansijska šteta</p>
  </div>
  <div class="callout">
    <strong data-sr="Prag:" data-en="Threshold:">Prag:</strong>
    <span data-sr="Odobravanje dozvola pristupačnosti ili SMS-a. Posle toga napadač ima pasivan pristup uređaju bez daljnje interakcije korisnika." data-en="Granting accessibility or SMS permissions. After that the attacker has passive access to the device without further user interaction.">Odobravanje dozvola pristupačnosti ili SMS-a. Posle toga napadač ima pasivan pristup uređaju bez daljnje interakcije korisnika.</span>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Kako generalno radi: mehanika" data-en="How it works: mechanics">Kako generalno radi: mehanika</h2>
  <div class="grid-2">
    <div class="phase">
      <div class="label" data-sr="Šta gradi uverljivost" data-en="What builds credibility">Šta gradi uverljivost</div>
      <ul class="bullets">
        <li data-sr="Aplikacija ima profesionalan izgled, logo i opis koji oponašaju poznate brendove." data-en="The app has a professional look, logo and description that mimic well-known brands.">Aplikacija ima profesionalan izgled, logo i opis koji oponašaju poznate brendove.</li>
        <li data-sr="Distribucija kroz lažne prodavnice, oglase ili direktne linkove koji zaobilaze zvanične kanale." data-en="Distribution through fake stores, ads or direct links that bypass official channels.">Distribucija kroz lažne prodavnice, oglase ili direktne linkove koji zaobilaze zvanične kanale.</li>
        <li data-sr="Lažne recenzije i visoke ocene u neregulisanim prodavnicama daju lažni kredibilitet." data-en="Fake reviews and high ratings in unregulated stores provide false credibility.">Lažne recenzije i visoke ocene u neregulisanim prodavnicama daju lažni kredibilitet.</li>
        <li data-sr="Aplikacija zaista funkcioniše — korisna funkcija prikriva zlonamernu komponentu." data-en="The app actually functions — a useful feature conceals the malicious component.">Aplikacija zaista funkcioniše — korisna funkcija prikriva zlonamernu komponentu.</li>
      </ul>
    </div>
    <div class="phase">
      <div class="label" data-sr="Kako se uvodi radnja" data-en="How the action is introduced">Kako se uvodi radnja</div>
      <ul class="bullets">
        <li data-sr="Dozvole se traže postepeno — neke pri instalaciji, neke pri prvoj upotrebi, neke posle ažuriranja." data-en="Permissions are requested gradually — some at installation, some on first use, some after an update.">Dozvole se traže postepeno — neke pri instalaciji, neke pri prvoj upotrebi, neke posle ažuriranja.</li>
        <li data-sr="Pristupačnost se traži uz objašnjenje da je potrebna za prikaz overlay-a ili prevod." data-en="Accessibility is requested with an explanation that it is needed for overlay display or translation.">Pristupačnost se traži uz objašnjenje da je potrebna za prikaz overlay-a ili prevod.</li>
        <li data-sr="Malver čita OTP kodove iz SMS-a i prosleđuje ih napadaču za bypass 2FA." data-en="The malware reads OTP codes from SMS and forwards them to the attacker to bypass 2FA.">Malver čita OTP kodove iz SMS-a i prosleđuje ih napadaču za bypass 2FA.</li>
        <li data-sr="Keylogger beleži unos lozinki u bankarskim aplikacijama i prosleđuje ih u realnom vremenu." data-en="The keylogger records password input in banking apps and forwards it in real time.">Keylogger beleži unos lozinki u bankarskim aplikacijama i prosleđuje ih u realnom vremenu.</li>
      </ul>
    </div>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Hronološki tok (faze + evolucije)" data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

  <article class="phase">
    <h3 data-sr="Faza 1 — Kontakt i preusmeravanje" data-en="Phase 1 — Contact and redirection">Faza 1 — Kontakt i preusmeravanje</h3>
    <p data-sr="Korisnik vidi oglas, dobija poruku ili nailazi na preporuku za aplikaciju. Link ne vodi na Google Play ili App Store već na treći izvor ili lažnu stranicu prodavnice." data-en="The user sees an ad, receives a message or encounters a recommendation for an app. The link does not lead to Google Play or the App Store but to a third-party source or a fake store page.">Korisnik vidi oglas, dobija poruku ili nailazi na preporuku za aplikaciju. Link ne vodi na Google Play ili App Store već na treći izvor ili lažnu stranicu prodavnice.</p>
    <ul class="bullets">
      <li data-sr="Poruka tvrdi da je aplikacija dostupna samo van zvaničnih prodavnica iz tehničkih razloga." data-en="The message claims the app is only available outside official stores for technical reasons.">Poruka tvrdi da je aplikacija dostupna samo van zvaničnih prodavnica iz tehničkih razloga.</li>
      <li data-sr="Oglas obećava besplatnu premijum verziju poznate aplikacije ili ekskluzivnu funkciju." data-en="The ad promises a free premium version of a known app or an exclusive feature.">Oglas obećava besplatnu premijum verziju poznate aplikacije ili ekskluzivnu funkciju.</li>
      <li data-sr="Fišing imejl ili SMS sadrži link koji simulira zvanično obaveštenje o ažuriranju." data-en="A phishing email or SMS contains a link simulating an official update notification.">Fišing imejl ili SMS sadrži link koji simulira zvanično obaveštenje o ažuriranju.</li>
    </ul>
    <div class="callout"><strong data-sr="Prag faze:" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Korisnik klikće na link i inicira preuzimanje APK ili profila izvan zvanične prodavnice." data-en="The user clicks the link and initiates download of an APK or profile outside the official store.">Korisnik klikće na link i inicira preuzimanje APK ili profila izvan zvanične prodavnice.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 2 — Instalacija i prve dozvole" data-en="Phase 2 — Installation and first permissions">Faza 2 — Instalacija i prve dozvole</h3>
    <p data-sr="Aplikacija se instalira i traži standardne dozvole za svoju navodnu funkciju. Korisnik ih odobrava bez pažljivog čitanja jer su formulisane generično." data-en="The app installs and requests standard permissions for its stated function. The user approves them without careful reading because they are worded generically.">Aplikacija se instalira i traži standardne dozvole za svoju navodnu funkciju. Korisnik ih odobrava bez pažljivog čitanja jer su formulisane generično.</p>
    <ul class="bullets">
      <li data-sr="Dozvola za pristup skladištu, kameri ili lokaciji izgleda normalno za navodnu funkciju." data-en="Permission for storage, camera or location access looks normal for the stated function.">Dozvola za pristup skladištu, kameri ili lokaciji izgleda normalno za navodnu funkciju.</li>
      <li data-sr="Aplikacija odmah pokazuje korisnu funkcionalnost kako bi smanjila sumnju." data-en="The app immediately shows useful functionality to reduce suspicion.">Aplikacija odmah pokazuje korisnu funkcionalnost kako bi smanjila sumnju.</li>
      <li data-sr="Android zahteva ručno uključivanje nepoznatih izvora što napadač unapred objašnjava kao normalan korak." data-en="Android requires manually enabling unknown sources which the attacker explains in advance as a normal step.">Android zahteva ručno uključivanje nepoznatih izvora što napadač unapred objašnjava kao normalan korak.</li>
    </ul>
    <div class="callout"><strong data-sr="Aplikacija je instalirana i bazične dozvole su odobrene — osnova za dalji zahtev za kritičnim dozvolama.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Aplikacija je instalirana i bazične dozvole su odobrene — osnova za dalji zahtev za kritičnim dozvolama." data-en="The app is installed and basic permissions are granted — the base for requesting critical permissions.">Aplikacija je instalirana i bazične dozvole su odobrene — osnova za dalji zahtev za kritičnim dozvolama.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 3 — Zahtev za kritičnim dozvolama" data-en="Phase 3 — Request for critical permissions">Faza 3 — Zahtev za kritičnim dozvolama</h3>
    <p data-sr="Aplikacija traži dozvolu za pristupačnost, pristup SMS-u ili administrator uređaja. Ove dozvole se prikazuju kao neophodne za punu funkcionalnost ili bezbednosni modul." data-en="The app requests accessibility permission, SMS access or device administrator rights. These permissions are presented as necessary for full functionality or a security module.">Aplikacija traži dozvolu za pristupačnost, pristup SMS-u ili administrator uređaja. Ove dozvole se prikazuju kao neophodne za punu funkcionalnost ili bezbednosni modul.</p>
    <ul class="bullets">
      <li data-sr="Pristupačnost se traži za auto-popunjavanje ili prevodilački overlay ali zapravo čita sav ekranski sadržaj." data-en="Accessibility is requested for auto-fill or translation overlay but actually reads all screen content.">Pristupačnost se traži za auto-popunjavanje ili prevodilački overlay ali zapravo čita sav ekranski sadržaj.</li>
      <li data-sr="Pristup SMS-u se traži za verifikaciju naloga ali prosleđuje sve OTP kodove napadaču." data-en="SMS access is requested for account verification but forwards all OTP codes to the attacker.">Pristup SMS-u se traži za verifikaciju naloga ali prosleđuje sve OTP kodove napadaču.</li>
      <li data-sr="Administrator uređaja sprečava deinstalaciju i daje dubinski pristup sistemu." data-en="Device administrator access prevents uninstallation and provides deep system access.">Administrator uređaja sprečava deinstalaciju i daje dubinski pristup sistemu.</li>
    </ul>
    <div class="callout"><strong data-sr="Odobravanje pristupačnosti ili SMS dozvole. Ovo je tačka bez povratka — napadač sada ima pasivan pristup.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Odobravanje pristupačnosti ili SMS dozvole. Ovo je tačka bez povratka — napadač sada ima pasivan pristup." data-en="Granting accessibility or SMS permission. This is the point of no return — the attacker now has passive access.">Odobravanje pristupačnosti ili SMS dozvole. Ovo je tačka bez povratka — napadač sada ima pasivan pristup.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching at this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="account-takeover.html" data-sr="Preuzimanje naloga — OTP pristupi odmah aktiviraju ATO." data-en="Account takeover — OTP access immediately enables ATO.">Preuzimanje naloga — OTP pristupi odmah aktiviraju ATO.</a></li>
        <li><a href="otp-interception.html" data-sr="OTP interception — pasivno presretanje svih kodova za 2FA." data-en="OTP interception — passive capture of all 2FA codes.">OTP interception — pasivno presretanje svih kodova za 2FA.</a></li>
      </ul>
    </div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 4 — Tiha eksfiltracija podataka" data-en="Phase 4 — Silent data exfiltration">Faza 4 — Tiha eksfiltracija podataka</h3>
    <p data-sr="Aplikacija radi u pozadini i šalje podatke napadaču. Korisnik ništa ne primećuje jer aplikacija nastavlja da obavlja svoju korisnu funkciju u prednjem planu." data-en="The app runs in the background and sends data to the attacker. The user notices nothing because the app continues performing its useful function in the foreground.">Aplikacija radi u pozadini i šalje podatke napadaču. Korisnik ništa ne primećuje jer aplikacija nastavlja da obavlja svoju korisnu funkciju u prednjem planu.</p>
    <ul class="bullets">
      <li data-sr="Keylogger beleži svaki unos u bankarskim aplikacijama, imejlu i lozinkama." data-en="The keylogger records every input in banking apps, email and passwords.">Keylogger beleži svaki unos u bankarskim aplikacijama, imejlu i lozinkama.</li>
      <li data-sr="SMS modul čita i prosleđuje sve dolažne kodove pre nego što korisnik stigne da ih vidi." data-en="The SMS module reads and forwards all incoming codes before the user can see them.">SMS modul čita i prosleđuje sve dolažne kodove pre nego što korisnik stigne da ih vidi.</li>
      <li data-sr="Slike i dokumenti iz skladišta se tiho skeniraju i šalju na server napadača." data-en="Images and documents from storage are silently scanned and sent to the attacker's server.">Slike i dokumenti iz skladišta se tiho skeniraju i šalju na server napadača.</li>
      <li data-sr="Kamera i mikrofon mogu da se aktiviraju u pozadini bez ikakve vidljive indikcije." data-en="Camera and microphone can be activated in the background without any visible indication.">Kamera i mikrofon mogu da se aktiviraju u pozadini bez ikakve vidljive indikcije.</li>
    </ul>
    <div class="callout"><strong data-sr="Napadač ima dovoljno kredencijala da pristupi finansijskim nalozima ili pokrene prenos.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Napadač ima dovoljno kredencijala da pristupi finansijskim nalozima ili pokrene prenos." data-en="The attacker has enough credentials to access financial accounts or initiate transfers.">Napadač ima dovoljno kredencijala da pristupi finansijskim nalozima ili pokrene prenos.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 5 — Preuzimanje naloga" data-en="Phase 5 — Account takeover">Faza 5 — Preuzimanje naloga</h3>
    <p data-sr="Napadač koristi prikupljene kredencijale i OTP kodove da se prijavi na bankarski ili imejl nalog. Recovery podaci se menjaju kako bi vlasnik izgubio pristup." data-en="The attacker uses collected credentials and OTP codes to log into a banking or email account. Recovery data is changed so the owner loses access.">Napadač koristi prikupljene kredencijale i OTP kodove da se prijavi na bankarski ili imejl nalog. Recovery podaci se menjaju kako bi vlasnik izgubio pristup.</p>
    <ul class="bullets">
      <li data-sr="Prenos sredstava se inicira odmah posle preuzimanja naloga dok žrtva još nije svesna." data-en="Fund transfers are initiated immediately after account takeover while the victim is still unaware.">Prenos sredstava se inicira odmah posle preuzimanja naloga dok žrtva još nije svesna.</li>
      <li data-sr="Imejl nalog se preuzima prvo jer kontroliše reset lozinki na svim ostalim servisima." data-en="Email account is taken over first because it controls password resets on all other services.">Imejl nalog se preuzima prvo jer kontroliše reset lozinki na svim ostalim servisima.</li>
      <li data-sr="Novi uređaji se dodaju kao pouzdani na finansijskim platformama za buduće transakcije." data-en="New devices are added as trusted on financial platforms for future transactions.">Novi uređaji se dodaju kao pouzdani na finansijskim platformama za buduće transakcije.</li>
    </ul>
    <div class="callout"><strong data-sr="Promena recovery podataka — žrtva je zaključana iz sopstvenog naloga.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Promena recovery podataka — žrtva je zaključana iz sopstvenog naloga." data-en="Recovery data is changed — the victim is locked out of their own account.">Promena recovery podataka — žrtva je zaključana iz sopstvenog naloga.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching at this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="identity-theft.html" data-sr="Krađa identiteta — prikupljeni dokumenti omogućavaju otvaranje naloga u tuđe ime." data-en="Identity theft — collected documents enable opening accounts in another person's name.">Krađa identiteta — prikupljeni dokumenti omogućavaju otvaranje naloga u tuđe ime.</a></li>
        <li><a href="phishing.html" data-sr="Fišing — aplikacija šalje phishing poruke kontaktima koristeći preuzeti nalog." data-en="Phishing — the app sends phishing messages to contacts using the taken-over account.">Fišing — aplikacija šalje phishing poruke kontaktima koristeći preuzeti nalog.</a></li>
      </ul>
    </div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 6 — Širenje i perzistencija" data-en="Phase 6 — Spreading and persistence">Faza 6 — Širenje i perzistencija</h3>
    <p data-sr="Aplikacija šalje iste phishing linkove kontaktima žrtve koristeći preuzetu imejl ili SMS listu. Malver se može i ažurirati sa servera napadača dobijajući nove funkcionalnosti." data-en="The app sends the same phishing links to the victim's contacts using the taken-over email or SMS list. The malware can also update from the attacker's server acquiring new capabilities.">Aplikacija šalje iste phishing linkove kontaktima žrtve koristeći preuzetu imejl ili SMS listu. Malver se može i ažurirati sa servera napadača dobijajući nove funkcionalnosti.</p>
    <ul class="bullets">
      <li data-sr="Kontakti primaju poruke od poznatog broja što povećava verovatnoću instalacije." data-en="Contacts receive messages from a known number which increases the likelihood of installation.">Kontakti primaju poruke od poznatog broja što povećava verovatnoću instalacije.</li>
      <li data-sr="Administrator dozvola sprečava standardnu deinstalaciju aplikacije." data-en="Administrator permission prevents standard app uninstallation.">Administrator dozvola sprečava standardnu deinstalaciju aplikacije.</li>
      <li data-sr="Napadač može da instalira dodatni malver kroz C2 vezu sa serverom." data-en="The attacker can install additional malware through a C2 connection to the server.">Napadač može da instalira dodatni malver kroz C2 vezu sa serverom.</li>
    </ul>
    <div class="callout"><strong data-sr="Žrtva pokušava da deinstalira aplikaciju ali nema efekta zbog administrator dozvole.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Žrtva pokušava da deinstalira aplikaciju ali nema efekta zbog administrator dozvole." data-en="The victim tries to uninstall the app but it has no effect due to administrator permission.">Žrtva pokušava da deinstalira aplikaciju ali nema efekta zbog administrator dozvole.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 7 — Recovery" data-en="Phase 7 — Recovery">Faza 7 — Recovery</h3>
    <p data-sr="Žrtva konačno primećuje neovlašćene transakcije ili dobija obaveštenje od banke. Uklanjanje aplikacije zahteva poseban postupak zbog administrator dozvole." data-en="The victim finally notices unauthorized transactions or receives a notification from the bank. Removing the app requires a specific procedure due to administrator permission.">Žrtva konačno primećuje neovlašćene transakcije ili dobija obaveštenje od banke. Uklanjanje aplikacije zahteva poseban postupak zbog administrator dozvole.</p>
    <ul class="bullets">
      <li data-sr="Banka blokira karticu posle serije neuobičajenih transakcija." data-en="The bank blocks the card after a series of unusual transactions.">Banka blokira karticu posle serije neuobičajenih transakcija.</li>
      <li data-sr="Žrtva ne može da se prijavi na nalog jer su recovery podaci promenjeni." data-en="The victim cannot log in to the account because recovery data has been changed.">Žrtva ne može da se prijavi na nalog jer su recovery podaci promenjeni.</li>
      <li data-sr="Fabričko resetovanje uređaja je jedini siguran način uklanjanja dubokog malvera." data-en="Factory reset of the device is the only reliable way to remove deep malware.">Fabričko resetovanje uređaja je jedini siguran način uklanjanja dubokog malvera.</li>
    </ul>
    <div class="callout"><strong data-sr="Žrtva je kontaktirala banku i pokrenula proceduru vraćanja pristupa nalozima.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Žrtva je kontaktirala banku i pokrenula proceduru vraćanja pristupa nalozima." data-en="The victim has contacted the bank and started the account access recovery procedure.">Žrtva je kontaktirala banku i pokrenula proceduru vraćanja pristupa nalozima.</span></div>
  </article>
</section>

<section class="content-section">
  <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
  <ul class="bullets">
    <li data-sr="Link za preuzimanje ne vodi na Google Play ili App Store već na nepoznatu adresu." data-en="The download link does not lead to Google Play or the App Store but to an unknown address.">Link za preuzimanje ne vodi na Google Play ili App Store već na nepoznatu adresu.</li>
    <li data-sr="Aplikacija traži dozvole koje nisu relevantne za njenu navodnu funkciju." data-en="The app requests permissions irrelevant to its stated function.">Aplikacija traži dozvole koje nisu relevantne za njenu navodnu funkciju.</li>
    <li data-sr="Instalacija zahteva ručno uključivanje instalacije iz nepoznatih izvora." data-en="Installation requires manually enabling installation from unknown sources.">Instalacija zahteva ručno uključivanje instalacije iz nepoznatih izvora.</li>
    <li data-sr="Aplikacija traži pristupačnost uz objašnjenje koje ne odgovara njenoj funkciji." data-en="The app requests accessibility with an explanation that does not match its function.">Aplikacija traži pristupačnost uz objašnjenje koje ne odgovara njenoj funkciji.</li>
    <li data-sr="Baterija se brže prazni i uređaj se zagreva bez vidljivog razloga." data-en="The battery drains faster and the device heats up without visible reason.">Baterija se brže prazni i uređaj se zagreva bez vidljivog razloga.</li>
    <li data-sr="SMS poruke stižu ali se odmah brišu bez prikazivanja notifikacije." data-en="SMS messages arrive but are immediately deleted without showing a notification.">SMS poruke stižu ali se odmah brišu bez prikazivanja notifikacije.</li>
    <li data-sr="Aplikacija se ne može pronaći ni na Google Play ni na App Store pod tim imenom." data-en="The app cannot be found on Google Play or the App Store under that name.">Aplikacija se ne može pronaći ni na Google Play ni na App Store pod tim imenom.</li>
    <li data-sr="Neovlašćene transakcije pojavljuju se na bankovnom izvodu bez vidljivog razloga." data-en="Unauthorized transactions appear on the bank statement without a visible reason.">Neovlašćene transakcije pojavljuju se na bankovnom izvodu bez vidljivog razloga.</li>
    <li data-sr="Prijatelji i porodica prijavljuju da su dobili čudne poruke od tvog broja ili imejla." data-en="Friends and family report receiving strange messages from your number or email.">Prijatelji i porodica prijavljuju da su dobili čudne poruke od tvog broja ili imejla.</li>
    <li data-sr="Ime izdavača aplikacije je nepoznato ili se neznatno razlikuje od zvaničnog naziva." data-en="The app publisher name is unknown or slightly different from the official name.">Ime izdavača aplikacije je nepoznato ili se neznatno razlikuje od zvaničnog naziva.</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Provere: 8 brzih provera pre instalacije aplikacije" data-en="Checks: 8 quick checks before installing an app">Provere: 8 brzih provera pre instalacije aplikacije</h2>
  <ol class="steps">
    <li data-sr="Pretraži ime aplikacije na Google Play ili App Store i instaliraj samo odande." data-en="Search the app name on Google Play or the App Store and install only from there.">Pretraži ime aplikacije na Google Play ili App Store i instaliraj samo odande.</li>
    <li data-sr="Proveri ime izdavača — da li se tačno poklapa sa zvaničnom kompanijom?" data-en="Check the publisher name — does it exactly match the official company?">Proveri ime izdavača — da li se tačno poklapa sa zvaničnom kompanijom?</li>
    <li data-sr="Pregledaj tražene dozvole pre instalacije i proceni da li su relevantne za svrhu aplikacije." data-en="Review requested permissions before installation and assess whether they are relevant to the app's purpose.">Pregledaj tražene dozvole pre instalacije i proceni da li su relevantne za svrhu aplikacije.</li>
    <li data-sr="Nikada ne odobravaj dozvolu za pristupačnost aplikaciji koja nije specijalizovana za pristupačnost." data-en="Never grant accessibility permission to an app that is not specialized for accessibility.">Nikada ne odobravaj dozvolu za pristupačnost aplikaciji koja nije specijalizovana za pristupačnost.</li>
    <li data-sr="Instaliraj aplikaciju za bezbednost koji redovno skenira uređaj i detektuje malver." data-en="Install a security app that regularly scans the device and detects malware.">Instaliraj aplikaciju za bezbednost koji redovno skenira uređaj i detektuje malver.</li>
    <li data-sr="Proveri u podešavanjima uređaja listu aplikacija sa dozvolom administratora i ukloni nepoznate." data-en="Check in device settings the list of apps with administrator permission and remove unknown ones.">Proveri u podešavanjima uređaja listu aplikacija sa dozvolom administratora i ukloni nepoznate.</li>
    <li data-sr="Redovno pregledaj aktivne sesije na finansijskim i imejl nalozima." data-en="Regularly review active sessions on financial and email accounts.">Redovno pregledaj aktivne sesije na finansijskim i imejl nalozima.</li>
    <li data-sr="Ako primetiš neovlašćene transakcije, kontaktiraj banku odmah i zamrzni karticu." data-en="If you notice unauthorized transactions, contact your bank immediately and freeze the card.">Ako primetiš neovlašćene transakcije, kontaktiraj banku odmah i zamrzni karticu.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Checklista: pitanja pre instalacije aplikacije" data-en="Checklist: questions before installing an app">Checklista: pitanja pre instalacije aplikacije</h2>
  <ul class="bullets">
    <li data-sr="Da li link za preuzimanje vodi na Google Play ili App Store, a ne na treći izvor?" data-en="Does the download link lead to Google Play or the App Store, not a third-party source?">Da li link za preuzimanje vodi na Google Play ili App Store, a ne na treći izvor?</li>
    <li data-sr="Da li se ime izdavača tačno poklapa sa zvaničnom kompanijom?" data-en="Does the publisher name exactly match the official company?">Da li se ime izdavača tačno poklapa sa zvaničnom kompanijom?</li>
    <li data-sr="Da li aplikacija traži dozvole koje su logične za njenu svrhu?" data-en="Does the app request permissions that are logical for its purpose?">Da li aplikacija traži dozvole koje su logične za njenu svrhu?</li>
    <li data-sr="Da li instalacija zahteva da ručno uključim nepoznate izvore?" data-en="Does installation require me to manually enable unknown sources?">Da li instalacija zahteva da ručno uključim nepoznate izvore?</li>
    <li data-sr="Da li mi je aplikacija preporučena kroz neočekivanu poruku ili oglas?" data-en="Was the app recommended through an unexpected message or ad?">Da li mi je aplikacija preporučena kroz neočekivanu poruku ili oglas?</li>
    <li data-sr="Da li aplikacija traži pristupačnost, administrator dozvolu ili pristup SMS-u?" data-en="Does the app request accessibility, administrator permission or SMS access?">Da li aplikacija traži pristupačnost, administrator dozvolu ili pristup SMS-u?</li>
    <li data-sr="Da li je ovo besplatna premijum verzija poznate aplikacije koja se normalno plaća?" data-en="Is this a free premium version of a known app that normally costs money?">Da li je ovo besplatna premijum verzija poznate aplikacije koja se normalno plaća?</li>
    <li data-sr="Da li mi je rečeno da aplikacija nije dostupna u zvaničnim prodavnicama?" data-en="Was I told the app is not available in official stores?">Da li mi je rečeno da aplikacija nije dostupna u zvaničnim prodavnicama?</li>
    <li data-sr="Da li je uređaj imao neobičan rast temperature ili potrošnje baterije?" data-en="Has the device had unusual temperature increases or battery consumption?">Da li je uređaj imao neobičan rast temperature ili potrošnje baterije?</li>
    <li data-sr="Da li sam proverio ovu aplikaciju u nezavisnom pregledu ili bezbednosnom alatu?" data-en="Have I checked this app in an independent review or security tool?">Da li sam proverio ovu aplikaciju u nezavisnom pregledu ili bezbednosnom alatu?</li>
    <li data-sr="Da li su se pojavile neovlašćene transakcije posle poslednje instalacije aplikacije?" data-en="Have unauthorized transactions appeared after the last app installation?">Da li su se pojavile neovlašćene transakcije posle poslednje instalacije aplikacije?</li>
    <li data-sr="Da li kontakti prijavljuju da su primili čudne poruke od mog broja?" data-en="Are contacts reporting that they received strange messages from my number?">Da li kontakti prijavljuju da su primili čudne poruke od mog broja?</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
  <ol class="steps">
    <li data-sr="Odmah kontaktiraj banku i zamrzni sve kartice i finansijske naloge." data-en="Immediately contact your bank and freeze all cards and financial accounts.">Odmah kontaktiraj banku i zamrzni sve kartice i finansijske naloge.</li>
    <li data-sr="Idi u podešavanja uređaja i opozovi administrator dozvolu sumnjivoj aplikaciji pre deinstalacije." data-en="Go to device settings and revoke administrator permission from the suspicious app before uninstalling.">Idi u podešavanja uređaja i opozovi administrator dozvolu sumnjivoj aplikaciji pre deinstalacije.</li>
    <li data-sr="Deinstaliraj sumnjive aplikacije ili uradi fabričko resetovanje uređaja za potpuno čišćenje." data-en="Uninstall suspicious apps or perform a factory reset of the device for complete cleaning.">Deinstaliraj sumnjive aplikacije ili uradi fabričko resetovanje uređaja za potpuno čišćenje.</li>
    <li data-sr="Promeni sve lozinke sa čistog uređaja koji nije kompromitovan." data-en="Change all passwords from a clean device that is not compromised.">Promeni sve lozinke sa čistog uređaja koji nije kompromitovan.</li>
    <li data-sr="Odjavi sve aktivne sesije na svim nalozima i dodaj 2FA gde nije aktivno." data-en="Sign out all active sessions on all accounts and add 2FA where not active.">Odjavi sve aktivne sesije na svim nalozima i dodaj 2FA gde nije aktivno.</li>
    <li data-sr="Obavesti kontakte koji su mogli da prime phishing poruke od tvojeg broja." data-en="Notify contacts who may have received phishing messages from your number.">Obavesti kontakte koji su mogli da prime phishing poruke od tvojeg broja.</li>
    <li data-sr="Prijavi incident policiji i dostavi bankovne izvode kao dokaz." data-en="Report the incident to police and provide bank statements as evidence.">Prijavi incident policiji i dostavi bankovne izvode kao dokaz.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
  <ul class="bullets">
    <li data-sr="Da li su instalirali aplikaciju van Google Play ili App Store?" data-en="Did they install an app outside Google Play or the App Store?">Da li su instalirali aplikaciju van Google Play ili App Store?</li>
    <li data-sr="Da li su odobrili dozvolu za pristupačnost ili SMS nekoj aplikaciji?" data-en="Did they grant accessibility or SMS permission to any app?">Da li su odobrili dozvolu za pristupačnost ili SMS nekoj aplikaciji?</li>
    <li data-sr="Da li su se pojavile neovlašćene transakcije ili su kontakti prijavili čudne poruke?" data-en="Have unauthorized transactions appeared or have contacts reported strange messages?">Da li su se pojavile neovlašćene transakcije ili su kontakti prijavili čudne poruke?</li>
    <li data-sr="Da li su pokušali da deinstaliraju aplikaciju ali bez uspeha?" data-en="Did they try to uninstall the app but without success?">Da li su pokušali da deinstaliraju aplikaciju ali bez uspeha?</li>
  </ul>
  <p data-sr="Rečenice koje rade:" data-en="Sentences that help:">Rečenice koje rade:</p>
  <ul class="bullets">
    <li data-sr="Hajde da odmah pozovemo banku i zamrznemo kartice — to je prioritet pre nego što se dogodi veća šteta." data-en="Let us call the bank immediately and freeze the cards — that is the priority before more damage occurs.">Hajde da odmah pozovemo banku i zamrznemo kartice — to je prioritet pre nego što se dogodi veća šteta.</li>
    <li data-sr="Pre deinstalacije moramo da opozovemo administrator dozvolu u podešavanjima uređaja." data-en="Before uninstalling we need to revoke the administrator permission in device settings.">Pre deinstalacije moramo da opozovemo administrator dozvolu u podešavanjima uređaja.</li>
    <li data-sr="Lozinke menjaj samo sa drugog uređaja koji nije kompromitovan — ne sa ovog telefona." data-en="Change passwords only from a different device that is not compromised — not from this phone.">Lozinke menjaj samo sa drugog uređaja koji nije kompromitovan — ne sa ovog telefona.</li>
    <li data-sr="Kontakti koji su primili poruke od tvojeg broja treba da znaju da ih ignorišu i ne klikću na linkove." data-en="Contacts who received messages from your number need to know to ignore them and not click links.">Kontakti koji su primili poruke od tvojeg broja treba da znaju da ih ignorišu i ne klikću na linkove.</li>
  </ul>
</section>


`
};
