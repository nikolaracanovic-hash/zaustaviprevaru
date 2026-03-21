window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["browser-notification-phishing-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: push kao kanal za fišing, ne kao instalaciju malvera" data-en="Introduction: push as a phishing channel, not a malware install path">Uvod: push kao kanal za fišing, ne kao instalaciju malvera</h2>
      <p data-sr="Korisnik na kratkoj poseti sajtu odobri obaveštenja u pregledaču; posle toga stižu ponavljajući push-ovi koji glume banku, poštu, e-trgovinu ili bezbednosno upozorenje. Klik ne mora da vodi na preuzimanje programa: često otvara stranicu za prijavu na nalog, potvrdu identiteta ili sitnu uplatu." data-en="A user approves browser notifications during a short site visit; afterward, repeated pushes mimic a bank, postal service, e-commerce shop, or a security warning. The click does not have to lead to a program download: it often opens a login page, identity confirmation, or a small payment.">Korisnik na kratkoj poseti sajtu odobri obaveštenja u pregledaču; posle toga stižu ponavljajući push-ovi koji glume banku, poštu, e-trgovinu ili bezbednosno upozorenje. Klik ne mora da vodi na preuzimanje programa: često otvara stranicu za prijavu na nalog, potvrdu identiteta ili sitnu uplatu.</p>
      <p data-sr="Operativna razlika u odnosu na model sa malverom je u pragu: meta unosi pristupne podatke ili odobrava radnju u pregledaču, umesto da pokreće .exe ili daje daljinski pristup. Lažni push je ulaz u fišing koji se ponavlja dok traje dozvola za taj domen." data-en="The operational difference from the malware-focused model is the threshold: the target enters access data or approves an action in the browser, instead of running an .exe or granting remote access. The fake push is a recurring phishing entry while permission for that domain remains.">Operativna razlika u odnosu na model sa malverom je u pragu: meta unosi pristupne podatke ili odobrava radnju u pregledaču, umesto da pokreće .exe ili daje daljinski pristup. Lažni push je ulaz u fišing koji se ponavlja dok traje dozvola za taj domen.</p>
      <div class="callout" data-sr="<strong>Model:</strong> poseta sajtu → dozvola za obaveštenja → niz lažnih push-ova → klik → lažna prijava ili uplata → moguće preuzimanje naloga ili zloupotreba kartice → ponavljanje dok se dozvola ne opozove." data-en="<strong>Model:</strong> site visit → notification permission → series of fake pushes → click → fake login or payment → possible account takeover or card misuse → repetition until permission is revoked."><strong>Model:</strong> poseta sajtu → dozvola za obaveštenja → niz lažnih push-ova → klik → lažna prijava ili uplata → moguće preuzimanje naloga ili zloupotreba kartice → ponavljanje dok se dozvola ne opozove.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> unos korisničkog imena, lozinke, podataka kartice ili potvrda na stranici otvorenoj sa push-a koji ne potiče od pravog servisa." data-en="<strong>Threshold:</strong> entering a username, password, card details, or approving a prompt on a page opened from a push that does not come from the real service."><strong>Prag:</strong> unos korisničkog imena, lozinke, podataka kartice ili potvrda na stranici otvorenoj sa push-a koji ne potiče od pravog servisa.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: zašto push prolazi kao fišing ulaz" data-en="How it works: why push works as a phishing entry">Kako generalno radi: zašto push prolazi kao fišing ulaz</h2>
      <p data-sr="Push stiže van e-pošte i van liste poruka, pa ga mnogi ne obrađuju kao link iz nepoznatog imejla. Isti kanal koriste i legitimni servisi, što dodaje naviku klika bez provere domena." data-en="Push arrives outside email and outside the message list, so many people do not process it like a link from an unknown email. Legitimate services use the same channel, which reinforces a habit of clicking without checking the domain.">Push stiže van e-pošte i van liste poruka, pa ga mnogi ne obrađuju kao link iz nepoznatog imejla. Isti kanal koriste i legitimni servisi, što dodaje naviku klika bez provere domena.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta koristi napadač" data-en="What the attacker uses">Šta koristi napadač</div>
          <ul class="bullets">
            <li data-sr="Ponavljanje poruka koje deluju kao hitni alert ili status porudžbine." data-en="Repeated messages that feel like an urgent alert or order status.">Ponavljanje poruka koje deluju kao hitni alert ili status porudžbine.</li>
            <li data-sr="Kratki tekst u obaveštenju koji ne ostavlja prostor za detaljnu proveru pre klika." data-en="Short notification text that leaves little room for careful checks before a click.">Kratki tekst u obaveštenju koji ne ostavlja prostor za detaljnu proveru pre klika.</li>
            <li data-sr="Otvaranje novog taba sa formularom koji liči na poznat brend." data-en="Opening a new tab with a form that resembles a known brand.">Otvaranje novog taba sa formularom koji liči na poznat brend.</li>
            <li data-sr="Razdvajanje od prvog sajta: meta zaboravi koji je domen odobrila." data-en="Separation from the first site: the target forgets which domain they approved.">Razdvajanje od prvog sajta: meta zaboravi koji je domen odobrila.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Zašto nije isto što i malver push" data-en="Why this is not the same as malware push">Zašto nije isto što i malver push</div>
          <ul class="bullets">
            <li data-sr="Cilj je često prikupljanje naloga ili kartice, a ne obavezno fajl za instalaciju." data-en="The goal is often harvesting accounts or card data, not necessarily an installable file.">Cilj je često prikupljanje naloga ili kartice, a ne obavezno fajl za instalaciju.</li>
            <li data-sr="Stranica može izgledati čisto i tražiti samo prijavu ili SMS kod." data-en="The page may look clean and only ask for a login or SMS code.">Stranica može izgledati čisto i tražiti samo prijavu ili SMS kod.</li>
            <li data-sr="Lanac se može nastaviti mejlom ili SMS-om posle ukradenih podataka." data-en="The chain may continue by email or SMS after credentials are stolen.">Lanac se može nastaviti mejlom ili SMS-om posle ukradenih podataka.</li>
            <li data-sr="Opoziv dozvole gasi kanal, ali šteta već može biti urađena posle prvog uspešnog unosa." data-en="Revoking permission stops the channel, but harm may already be done after the first successful entry.">Opoziv dozvole gasi kanal, ali šteta već može biti urađena posle prvog uspešnog unosa.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching)">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Tok traje danima ako se dozvola ne opozove: push je ponavljajući poziv na akciju, ne jednokratni oglas." data-en="The flow can last for days if permission is not revoked: push is a repeated call to action, not a one-off ad.">Tok traje danima ako se dozvola ne opozove: push je ponavljajući poziv na akciju, ne jednokratni oglas.</p>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Zamka za dozvolu obaveštenja" data-en="Phase 1 — Notification permission trap">Faza 1 — Zamka za dozvolu obaveštenja</h3>
        <p data-sr="Meta otvori stranicu sa obećanjem videa, nagrade, dokumenta ili obavezne verifikacije. Preklopni sloj traži Dozvoli pre nego što se bilo šta prikaže." data-en="The target opens a page promising video, a prize, a document, or mandatory verification. An overlay demands Allow before anything is shown.">Meta otvori stranicu sa obećanjem videa, nagrade, dokumenta ili obavezne verifikacije. Preklopni sloj traži Dozvoli pre nego što se bilo šta prikaže.</p>
        <ul class="bullets">
          <li data-sr="Dijalog pregledača prikazuje nepoznat domen koji nije brend koji meta traži." data-en="The browser dialog shows an unknown domain that is not the brand the target is looking for.">Dijalog pregledača prikazuje nepoznat domen koji nije brend koji meta traži.</li>
          <li data-sr="Sajt tvrdi da je obaveštenje tehnički uslov za nastavak." data-en="The site claims notifications are a technical requirement to continue.">Sajt tvrdi da je obaveštenje tehnički uslov za nastavak.</li>
          <li data-sr="Korisnik želi brzo da zatvori iskačući prozor i potvrdi bez čitanja." data-en="The user wants to close the pop-up quickly and confirms without reading.">Korisnik želi brzo da zatvori iskačući prozor i potvrdi bez čitanja.</li>
          <li data-sr="Na telefonu je isti obrazac u mobilnom pregledaču, uz manji ekran." data-en="The same pattern appears in the mobile browser, on a smaller screen.">Na telefonu je isti obrazac u mobilnom pregledaču, uz manji ekran.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> pregledač sačuva dozvolu za obaveštenja za taj domen." data-en="<strong>Phase threshold:</strong> the browser saves notification permission for that domain."><strong>Prag faze:</strong> pregledač sačuva dozvolu za obaveštenja za taj domen.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Prvi talas lažnih push-ova sa fišing temom" data-en="Phase 2 — First wave of phishing-themed fake pushes">Faza 2 — Prvi talas lažnih push-ova sa fišing temom</h3>
        <p data-sr="U roku od minuta ili sati stižu obaveštenja o blokiranom nalogu, paketu, neuspeloj transakciji ili isteku sesije. Ton je administrativan, ne tehnički kao kod lažnog antivirusa." data-en="Within minutes or hours, notifications arrive about a blocked account, package, failed transaction, or session expiry. The tone is administrative, not technical like a fake antivirus.">U roku od minuta ili sati stižu obaveštenja o blokiranom nalogu, paketu, neuspeloj transakciji ili isteku sesije. Ton je administrativan, ne tehnički kao kod lažnog antivirusa.</p>
        <ul class="bullets">
          <li data-sr="Naslov imitira poruke koje ljudi već vide od banke ili prodavnice." data-en="The title mimics messages people already see from a bank or shop.">Naslov imitira poruke koje ljudi već vide od banke ili prodavnice.</li>
          <li data-sr="Ikona može biti generički znak upozorenja ili lažni logo." data-en="The icon may be a generic warning symbol or a fake logo.">Ikona može biti generički znak upozorenja ili lažni logo.</li>
          <li data-sr="Poruke stižu i kad pregledač nije otvoren, pa deluju kao sistemski signal." data-en="Messages arrive even when the browser is closed, so they feel like a system signal.">Poruke stižu i kad pregledač nije otvoren, pa deluju kao sistemski signal.</li>
          <li data-sr="Izvor u podešavanjima obaveštenja pokazuje domen koji meta ne povezuje sa bankom." data-en="The source in notification settings shows a domain the target does not associate with their bank.">Izvor u podešavanjima obaveštenja pokazuje domen koji meta ne povezuje sa bankom.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta bar jednom klikne na push da otvori stranicu." data-en="<strong>Phase threshold:</strong> the target clicks a push at least once to open the page."><strong>Prag faze:</strong> meta bar jednom klikne na push da otvori stranicu.</div>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="smishing.html" data-sr="Smišing ako isti scenario stigne i SMS-om." data-en="Smishing if the same scenario also arrives by SMS.">Smišing ako isti scenario stigne i SMS-om.</a></li>
            <li><a href="phishing.html" data-sr="Opšti fišing putem linka i formulara." data-en="General phishing via links and forms.">Opšti fišing putem linka i formulara.</a></li>
          </ul>
        </div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Lažna stranica za prijavu ili potvrdu" data-en="Phase 3 — Fake login or confirmation page">Faza 3 — Lažna stranica za prijavu ili potvrdu</h3>
        <p data-sr="Klik otvara tab sa formularom za e-poštu i lozinku, poljem za karticu radi verifikacije ili zahtevom za kod iz aplikacije. URL često odstupa od pravog domena institucije." data-en="The click opens a tab with an email-and-password form, a card field for verification, or a request for an app code. The URL often differs from the institution’s real domain.">Klik otvara tab sa formularom za e-poštu i lozinku, poljem za karticu radi verifikacije ili zahtevom za kod iz aplikacije. URL često odstupa od pravog domena institucije.</p>
        <ul class="bullets">
          <li data-sr="Domen koristi slično ime ili poddomen koji zvuči zvanično." data-en="The domain uses a similar name or a subdomain that sounds official.">Domen koristi slično ime ili poddomen koji zvuči zvanično.</li>
          <li data-sr="Stranica traži podatke odmah, bez koraka koji postoje na pravom sajtu." data-en="The page asks for data immediately, without steps that exist on the real site.">Stranica traži podatke odmah, bez koraka koji postoje na pravom sajtu.</li>
          <li data-sr="Može se tražiti i privremena mala uplata kao dokaz naloga." data-en="A temporary small payment may be requested as proof of the account.">Može se tražiti i privremena mala uplata kao dokaz naloga.</li>
          <li data-sr="Nakon unosa prikazuje se generička poruka o uspehu ili učitavanju." data-en="After entry, a generic success or loading message appears.">Nakon unosa prikazuje se generička poruka o uspehu ili učitavanju.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta unese bar jedan osetljiv podatak na toj stranici." data-en="<strong>Phase threshold:</strong> the target enters at least one sensitive piece of data on that page."><strong>Prag faze:</strong> meta unese bar jedan osetljiv podatak na toj stranici.</div>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="account-takeover.html" data-sr="Preuzimanje naloga posle ukradenih pristupnih podataka." data-en="Account takeover after stolen credentials.">Preuzimanje naloga posle ukradenih pristupnih podataka.</a></li>
            <li><a href="browser-push-malware-scam.html" data-sr="Ako ista poruka ipak vodi na preuzimanje fajla." data-en="If the same message instead leads to a file download.">Ako ista poruka ipak vodi na preuzimanje fajla.</a></li>
          </ul>
        </div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Korišćenje ukradenih podataka" data-en="Phase 4 — Using stolen data">Faza 4 — Korišćenje ukradenih podataka</h3>
        <p data-sr="Napadač pokušava prijavu na mejl, prodavnicu ili društvenu mrežu; kartica se može odmah zloupotrebiti ili sačuvati za kasnije." data-en="The attacker tries logging into email, a shop, or social media; the card may be misused immediately or saved for later.">Napadač pokušava prijavu na mejl, prodavnicu ili društvenu mrežu; kartica se može odmah zloupotrebiti ili sačuvati za kasnije.</p>
        <ul class="bullets">
          <li data-sr="Isti push kanal može poslati novu poruku potvrdite reset lozinke." data-en="The same push channel may send a new confirm password reset message.">Isti push kanal može poslati novu poruku potvrdite reset lozinke.</li>
          <li data-sr="Kompromitovan mejl omogućava presretanje kodova za oporavak drugih naloga." data-en="A compromised email enables intercepting recovery codes for other accounts.">Kompromitovan mejl omogućava presretanje kodova za oporavak drugih naloga.</li>
          <li data-sr="Meta često sazna za problem tek iz obaveštenja banke ili zaključenog naloga." data-en="The target often learns about the problem only from a bank alert or a locked account.">Meta često sazna za problem tek iz obaveštenja banke ili zaključenog naloga.</li>
          <li data-sr="Lažna stranica može i da snimi šta je ukucano pre slanja na server." data-en="The fake page may also record what was typed before sending it to a server.">Lažna stranica može i da snimi šta je ukucano pre slanja na server.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> pojavi se neovlašćena aktivnost na nalogu ili kartici." data-en="<strong>Phase threshold:</strong> unauthorized activity appears on the account or card."><strong>Prag faze:</strong> pojavi se neovlašćena aktivnost na nalogu ili kartici.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Ponavljanje push-om i pritisak" data-en="Phase 5 — Repetition via push and pressure">Faza 5 — Ponavljanje push-om i pritisak</h3>
        <p data-sr="Dok traje dozvola, stižu novi naslovi: nalog će biti obrisan, potrebna je hitna potvrda, rok ističe večeras." data-en="While permission remains, new titles arrive: account will be deleted, urgent confirmation needed, deadline expires tonight.">Dok traje dozvola, stižu novi naslovi: nalog će biti obrisan, potrebna je hitna potvrda, rok ističe večeras.</p>
        <ul class="bullets">
          <li data-sr="Ponavljanje gradi osećaj da je problem još uvek aktivan." data-en="Repetition builds a sense that the problem is still active.">Ponavljanje gradi osećaj da je problem još uvek aktivan.</li>
          <li data-sr="Meta može ponovo da klikne i unese podatke drugog naloga ili druge kartice." data-en="The target may click again and enter another account or another card.">Meta može ponovo da klikne i unese podatke drugog naloga ili druge kartice.</li>
          <li data-sr="Neki lanci prebacuju na lažnu podršku ili chat posle prvog neuspeha." data-en="Some chains switch to fake support or chat after the first failure.">Neki lanci prebacuju na lažnu podršku ili chat posle prvog neuspeha.</li>
          <li data-sr="Broj različitih tema (banka, paket, porez) može da dođe sa istog izvora." data-en="Several themes (bank, package, tax) may come from the same source.">Broj različitih tema (banka, paket, porez) može da dođe sa istog izvora.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta nastavi da reaguje na push umesto da opozove dozvolu." data-en="<strong>Phase threshold:</strong> the target keeps reacting to pushes instead of revoking permission."><strong>Prag faze:</strong> meta nastavi da reaguje na push umesto da opozove dozvolu.</div>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="tech-support-scam.html" data-sr="Lažna tehnička podrška posle blokade." data-en="Fake tech support after a block.">Lažna tehnička podrška posle blokade.</a></li>
            <li><a href="fake-call-scam.html" data-sr="Lažni poziv ako se na stranici pojavi broj za pomoć." data-en="Fake call if a help number appears on the page.">Lažni poziv ako se na stranici pojavi broj za pomoć.</a></li>
          </ul>
        </div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 6 — Sporedni kanali posle fišinga" data-en="Phase 6 — Side channels after phishing">Faza 6 — Sporedni kanali posle fišinga</h3>
        <p data-sr="Posle ukradenog mejla ili broja telefona mogu stići SMS-ovi i poruke na drugim aplikacijama sa istim pričama; push više nije jedini dodir." data-en="After the email or phone number is stolen, SMS and messages on other apps may arrive with the same stories; push is no longer the only touchpoint.">Posle ukradenog mejla ili broja telefona mogu stići SMS-ovi i poruke na drugim aplikacijama sa istim pričama; push više nije jedini dodir.</p>
        <ul class="bullets">
          <li data-sr="Isti vizuelni stil u push-u i u mejlu pojačava poverenje." data-en="The same visual style in push and email strengthens trust.">Isti vizuelni stil u push-u i u mejlu pojačava poverenje.</li>
          <li data-sr="Zahtev za sinhronizaciju naloga može biti sledeći korak." data-en="A request to sync accounts may be the next step.">Zahtev za sinhronizaciju naloga može biti sledeći korak.</li>
          <li data-sr="Meta povezuje nove poruke sa starim push-om tek delimično." data-en="The target only partly connects new messages to the old push.">Meta povezuje nove poruke sa starim push-om tek delimično.</li>
          <li data-sr="Provera samo jednog kanala zanemaruje isti sadržaj na drugom." data-en="Checking only one channel ignores the same content on another.">Provera samo jednog kanala zanemaruje isti sadržaj na drugom.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> šteta se širi na druge naloge ili uređaje." data-en="<strong>Phase threshold:</strong> damage spreads to other accounts or devices."><strong>Prag faze:</strong> šteta se širi na druge naloge ili uređaje.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 7 — Opoziv dozvole i sanacija naloga" data-en="Phase 7 — Revoking permission and account cleanup">Faza 7 — Opoziv dozvole i sanacija naloga</h3>
        <p data-sr="Isključivanje obaveštenja za nepoznate domene prekida ponavljanje; promena lozinki i provera aktivnih sesija smanjuju posledice." data-en="Turning off notifications for unknown domains stops the repetition; password changes and active-session review reduce the impact.">Isključivanje obaveštenja za nepoznate domene prekida ponavljanje; promena lozinki i provera aktivnih sesija smanjuju posledice.</p>
        <ul class="bullets">
          <li data-sr="U podešavanjima pregledača lista dozvoljenih sajtova treba da bude kratka i poznata." data-en="In browser settings, the allowed-sites list should be short and familiar.">U podešavanjima pregledača lista dozvoljenih sajtova treba da bude kratka i poznata.</li>
          <li data-sr="Lozinka se menja na zvaničnom sajtu, otvaranjem domena ručno, ne preko push-a." data-en="Passwords are changed on the official site by typing the domain manually, not via push.">Lozinka se menja na zvaničnom sajtu, otvaranjem domena ručno, ne preko push-a.</li>
          <li data-sr="Dvofaktorska zaštita na pravim nalozima otežava ponovnu prijavu napadača." data-en="Real two-factor protection on genuine accounts makes re-login harder for the attacker.">Dvofaktorska zaštita na pravim nalozima otežava ponovnu prijavu napadača.</li>
          <li data-sr="Banka treba obaveštena ako je kartica uneta na sumnjivoj stranici." data-en="The bank should be informed if a card was entered on a suspicious page.">Banka treba obaveštena ako je kartica uneta na sumnjivoj stranici.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> nema novih lažnih push-ova sa tog izvora i nalozi su provereni." data-en="<strong>Phase threshold:</strong> no new fake pushes arrive from that source and accounts are reviewed."><strong>Prag faze:</strong> nema novih lažnih push-ova sa tog izvora i nalozi su provereni.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Obaveštenja traže prijavu na nalog koji inače ne koristite na tom domenu." data-en="Notifications ask you to log into an account you do not normally use on that domain.">Obaveštenja traže prijavu na nalog koji inače ne koristite na tom domenu.</li>
        <li data-sr="U podešavanjima obaveštenja izvor nije adresa prave banke ili prodavnice." data-en="In notification settings, the source is not the real bank or shop address.">U podešavanjima obaveštenja izvor nije adresa prave banke ili prodavnice.</li>
        <li data-sr="Klik sa push-a otvara formular za lozinku ili karticu bez prethodnog koraka na zvaničnom sajtu." data-en="A push click opens a password or card form without a prior step on the official site.">Klik sa push-a otvara formular za lozinku ili karticu bez prethodnog koraka na zvaničnom sajtu.</li>
        <li data-sr="Isti tip upozorenja se ponavlja više puta dnevno." data-en="The same type of warning repeats several times a day.">Isti tip upozorenja se ponavlja više puta dnevno.</li>
        <li data-sr="Poruka koristi rokove u satima ili preti brisanjem naloga." data-en="The message uses deadlines in hours or threatens account deletion.">Poruka koristi rokove u satima ili preti brisanjem naloga.</li>
        <li data-sr="Stranica traži i broj kartice samo za verifikaciju." data-en="The page also asks for a card number just for verification.">Stranica traži i broj kartice samo za verifikaciju.</li>
        <li data-sr="Ne postoji način da istu radnju završite na poznatom sajtu koji ručno ukucate." data-en="There is no way to complete the same action on a known site you type manually.">Ne postoji način da istu radnju završite na poznatom sajtu koji ručno ukucate.</li>
        <li data-sr="Posle prijave stranica traži još jedan korak ili još jednu uplatu." data-en="After login, the page asks for another step or another payment.">Posle prijave stranica traži još jedan korak ili još jednu uplatu.</li>
        <li data-sr="Dozvolu ste dali sajtu zbog videa ili nagrade, a sada stižu bankarski push-ovi." data-en="You allowed a site for video or a prize, and now bank pushes arrive.">Dozvolu ste dali sajtu zbog videa ili nagrade, a sada stižu bankarski push-ovi.</li>
        <li data-sr="Mobilni pregledač prikazuje isti tekst kao poznata aplikacija, ali drugačiji izvor obaveštenja." data-en="The mobile browser shows the same text as a known app but a different notification source.">Mobilni pregledač prikazuje isti tekst kao poznata aplikacija, ali drugačiji izvor obaveštenja.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <ol class="steps">
        <li data-sr="Otvorite podešavanja obaveštenja u pregledaču i proverite koji domen šalje poruke." data-en="Open browser notification settings and see which domain is sending the messages.">Otvorite podešavanja obaveštenja u pregledaču i proverite koji domen šalje poruke.</li>
        <li data-sr="Uporedite taj domen sa zvaničnom adresom banke ili servisa koji koristite." data-en="Compare that domain to the official address of the bank or service you use.">Uporedite taj domen sa zvaničnom adresom banke ili servisa koji koristite.</li>
        <li data-sr="Zatvorite push i ručno ukucajte zvanični sajt, zatim proverite stanje naloga tamo." data-en="Dismiss the push, type the official site manually, then check your account status there.">Zatvorite push i ručno ukucajte zvanični sajt, zatim proverite stanje naloga tamo.</li>
        <li data-sr="Ako stranica traži prijavu, ne koristite istu lozinku kao za mejl dok ne proverite URL." data-en="If the page asks for a login, do not use the same password as for email until you verify the URL.">Ako stranica traži prijavu, ne koristite istu lozinku kao za mejl dok ne proverite URL.</li>
        <li data-sr="Proverite da li prava aplikacija banke prikazuje isti incident kao push." data-en="Check whether the real bank app shows the same incident as the push.">Proverite da li prava aplikacija banke prikazuje isti incident kao push.</li>
        <li data-sr="Uklonite dozvolu za sve sajtove koje ne prepoznajete ili ne koristite namerno." data-en="Remove permission for all sites you do not recognize or intentionally use.">Uklonite dozvolu za sve sajtove koje ne prepoznajete ili ne koristite namerno.</li>
        <li data-sr="Sačuvajte snimak ekrana push-a i adrese stranice pre brisanja, radi prijave." data-en="Save a screenshot of the push and page address before deletion, for reporting.">Sačuvajte snimak ekrana push-a i adrese stranice pre brisanja, radi prijave.</li>
        <li data-sr="Ako je uneta kartica, odmah proverite transakcije u aplikaciji banke." data-en="If a card was entered, check transactions in the bank app immediately.">Ako je uneta kartica, odmah proverite transakcije u aplikaciji banke.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja pre klika ili unosa" data-en="Checklist: 12 questions before a click or entry">Checklista: 12 pitanja pre klika ili unosa</h2>
      <ul class="bullets">
        <li data-sr="Da li izvor obaveštenja odgovara pravoj adresi te institucije?" data-en="Does the notification source match the real address of that institution?">Da li izvor obaveštenja odgovara pravoj adresi te institucije?</li>
        <li data-sr="Da li bih istu prijavu uradio na zvaničnoj aplikaciji ili ručno ukucanom sajtu?" data-en="Would I perform the same login on the official app or a typed website?">Da li bih istu prijavu uradio na zvaničnoj aplikaciji ili ručno ukucanom sajtu?</li>
        <li data-sr="Da li sam ikada odobrio obaveštenja ovom domenu?" data-en="Have I ever allowed notifications for this domain?">Da li sam ikada odobrio obaveštenja ovom domenu?</li>
        <li data-sr="Da li push traži hitnost koja ne postoji u aplikaciji banke?" data-en="Does the push demand urgency that does not appear in the bank app?">Da li push traži hitnost koja ne postoji u aplikaciji banke?</li>
        <li data-sr="Da li URL u adresnoj traci ima malu razliku u odnosu na poznat sajt?" data-en="Does the URL in the address bar differ slightly from the known site?">Da li URL u adresnoj traci ima malu razliku u odnosu na poznat sajt?</li>
        <li data-sr="Da li stranica traži podatke koje zvanični sajt retko traži odjednom?" data-en="Does the page ask for data the official site rarely asks for at once?">Da li stranica traži podatke koje zvanični sajt retko traži odjednom?</li>
        <li data-sr="Da li mogu prvo da pozovem banku na broj sa njihovog zvaničnog sajta?" data-en="Can I first call the bank using a number from their official site?">Da li mogu prvo da pozovem banku na broj sa njihovog zvaničnog sajta?</li>
        <li data-sr="Da li bih ovaj korak preporučio članu porodice bez objašnjenja?" data-en="Would I recommend this step to a family member without explanation?">Da li bih ovaj korak preporučio članu porodice bez objašnjenja?</li>
        <li data-sr="Da li postoji razlog da ista poruka stiže više puta ako je zaista kritična?" data-en="Is there a reason the same message would arrive many times if it were truly critical?">Da li postoji razlog da ista poruka stiže više puta ako je zaista kritična?</li>
        <li data-sr="Da li je alternativa da ignorišem push i proverim nalog kasnije sa mirnijeg uređaja?" data-en="Is the alternative to ignore the push and check the account later from a calmer device?">Da li je alternativa da ignorišem push i proverim nalog kasnije sa mirnijeg uređaja?</li>
        <li data-sr="Da li sam već uneo podatke i sada me ponovo tera na isto?" data-en="Have I already entered data and am I being pushed to do it again?">Da li sam već uneo podatke i sada me ponovo tera na isto?</li>
        <li data-sr="Da li mogu odmah da opozovem dozvolu i da li to rešava novi talas poruka?" data-en="Can I revoke permission immediately, and does that stop a new wave of messages?">Da li mogu odmah da opozovem dozvolu i da li to rešava novi talas poruka?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: order of actions">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Ne unosite nove podatke na stranici otvorenoj sa push-a." data-en="Do not enter new data on a page opened from a push.">Ne unosite nove podatke na stranici otvorenoj sa push-a.</li>
        <li data-sr="Zatvorite tab i u podešavanjima pregledača uklonite dozvolu za taj domen." data-en="Close the tab and remove permission for that domain in browser settings.">Zatvorite tab i u podešavanjima pregledača uklonite dozvolu za taj domen.</li>
        <li data-sr="Ako ste već uneli lozinku, promenite je na zvaničnom sajtu sa drugog uređaja." data-en="If you already entered a password, change it on the official site from another device.">Ako ste već uneli lozinku, promenite je na zvaničnom sajtu sa drugog uređaja.</li>
        <li data-sr="Ako ste uneli karticu, obavestite banku i pratite transakcije." data-en="If you entered card data, inform the bank and monitor transactions.">Ako ste uneli karticu, obavestite banku i pratite transakcije.</li>
        <li data-sr="Proverite aktivne sesije na mejlu i drugim nalozima koji dele istu lozinku." data-en="Check active sessions on email and other accounts that share the same password.">Proverite aktivne sesije na mejlu i drugim nalozima koji dele istu lozinku.</li>
        <li data-sr="Sačuvajte dokaz o izvoru push-a pre čišćenja liste obaveštenja." data-en="Save evidence of the push source before clearing the notification list.">Sačuvajte dokaz o izvoru push-a pre čišćenja liste obaveštenja.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Koji tačno domen stoji kao izvor obaveštenja u pregledaču?" data-en="Which exact domain appears as the notification source in the browser?">Koji tačno domen stoji kao izvor obaveštenja u pregledaču?</li>
            <li data-sr="Da li si uneo lozinku ili broj kartice posle klika na push?" data-en="Did you enter a password or card number after clicking a push?">Da li si uneo lozinku ili broj kartice posle klika na push?</li>
            <li data-sr="Da li ista stvar stoji u zvaničnoj aplikaciji banke kada se uđe normalnim putem?" data-en="Does the same thing appear in the official bank app when you enter the normal way?">Da li ista stvar stoji u zvaničnoj aplikaciji banke kada se uđe normalnim putem?</li>
            <li data-sr="Da li možeš da pokažeš snimak ekrana poslednjeg push-a?" data-en="Can you show a screenshot of the last push?">Da li možeš da pokažeš snimak ekrana poslednjeg push-a?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Hajde prvo da ugasimo dozvolu za taj sajt u podešavanjima, pa onda da proverimo nalog." data-en="Let’s first turn off permission for that site in settings, then check the account.">Hajde prvo da ugasimo dozvolu za taj sajt u podešavanjima, pa onda da proverimo nalog.</li>
            <li data-sr="Banka ne traži prijavu preko push-a sa nepoznatog domena." data-en="The bank does not ask for login via push from an unknown domain.">Banka ne traži prijavu preko push-a sa nepoznatog domena.</li>
            <li data-sr="Otvorićemo zvanični sajt ručno, bez klika na obaveštenje." data-en="We will open the official site manually, without clicking the notification.">Otvorićemo zvanični sajt ručno, bez klika na obaveštenje.</li>
            <li data-sr="Ako je bilo unosa, sledeći korak je banka i promena lozinke, ne novi link." data-en="If there was any entry, the next step is the bank and a password change, not a new link.">Ako je bilo unosa, sledeći korak je banka i promena lozinke, ne novi link.</li>
          </ul>
        </div>
      </div>
    </section>
`
};
