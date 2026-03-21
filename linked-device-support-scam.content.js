if (!window.SCAM_CONTENT) window.SCAM_CONTENT = {};
window.SCAM_CONTENT["linked-device-support-scam"] = {
  raw_html: `
<section class="content-section">
  <h2 data-sr="Uvod: lažna podrška i povezivanje uređaja" data-en="Introduction: fake support and linking devices">Uvod: lažna podrška i povezivanje uređaja</h2>
  <p data-sr="Zvoni telefon ili iskače prozor: navodni Microsoft, banka, kurir ili antivirus kaže da je nalog ili uređaj u riziku i da morate da povežete telefon i računar, dodate pouzdan uređaj ili skenirate QR kod da bi se verifikovala bezbednost." data-en="The phone rings or a pop-up appears: a supposed Microsoft, bank, courier, or antivirus says your account or device is at risk and you must link phone and computer, add a trusted device, or scan a QR code to verify security.">Zvoni telefon ili iskače prozor: navodni Microsoft, banka, kurir ili antivirus kaže da je nalog ili uređaj u riziku i da morate da povežete telefon i računar, dodate pouzdan uređaj ili skenirate QR kod da bi se verifikovala bezbednost.</p>
  <p data-sr="Cilj nije tehnička provera, nego da vi odobrite nešto što napadaču otvara sesiju, plaćanje ili daljinski pristup; jezik zvuči profesionalno, a koraci liče na ono što ste već videli u pravim aplikacijama." data-en="The goal is not a technical check but to make you approve something that opens a session, a payment, or remote access for the attacker; the wording sounds professional and the steps resemble what you have seen in real apps.">Cilj nije tehnička provera, nego da vi odobrite nešto što napadaču otvara sesiju, plaćanje ili daljinski pristup; jezik zvuči profesionalno, a koraci liče na ono što ste već videli u pravim aplikacijama.</p>
  <div class="callout">
    <strong data-sr="Prag:" data-en="Threshold:">Prag:</strong>
    <span data-sr="Potvrda novog uređaja na nalogu, skeniranje QR koda za prijavu ili deljenje koda iz aplikacije autentifikatora sa osobom koja vas je kontaktirala." data-en="Confirming a new device on the account, scanning a QR code to sign in, or sharing an authenticator-app code with whoever contacted you.">Potvrda novog uređaja na nalogu, skeniranje QR koda za prijavu ili deljenje koda iz aplikacije autentifikatora sa osobom koja vas je kontaktirala.</span>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Model" data-en="Model">Model</h2>
  <div class="phase">
    <div class="label" data-sr="Lanac" data-en="Chain">Lanac</div>
    <p data-sr="Kontakt (poziv, oglas, skočni prozor) → priča o riziku → zahtev da povežete uređaje ili dodate pouzdan uređaj → vaše odobrenje ili kod → napadač koristi sesiju ili pristup → novac ili krađa naloga." data-en="Contact (call, ad, pop-up) → risk story → request to link devices or add a trusted device → your approval or code → attacker uses session or access → money or account theft.">Kontakt (poziv, oglas, skočni prozor) → priča o riziku → zahtev da povežete uređaje ili dodate pouzdan uređaj → vaše odobrenje ili kod → napadač koristi sesiju ili pristup → novac ili krađa naloga.</p>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Kako generalno radi: mehanika" data-en="How it works: mechanics">Kako generalno radi: mehanika</h2>
  <div class="grid-2">
    <div class="phase">
      <div class="label" data-sr="Zašto ljudi pristanu" data-en="Why people comply">Zašto ljudi pristanu</div>
      <ul class="bullets">
        <li data-sr="Strana zvuči kao zvanična podrška i koristi termine koje ste čuli u banci ili pri instalaciji programa." data-en="The party sounds like official support and uses terms you have heard at the bank or during software setup.">Strana zvuči kao zvanična podrška i koristi termine koje ste čuli u banci ili pri instalaciji programa.</li>
        <li data-sr="Povezivanje uređaja u pravim servisima postoji, pa korak ne deluje suludo na prvi pogled." data-en="Linking devices exists in real services, so the step does not look absurd at first glance.">Povezivanje uređaja u pravim servisima postoji, pa korak ne deluje suludo na prvi pogled.</li>
        <li data-sr="Pritisak zbog isteka roka ili blokade naloga skraćuje vreme za proveru." data-en="Pressure about a deadline or account block shortens the time you take to verify.">Pritisak zbog isteka roka ili blokade naloga skraćuje vreme za proveru.</li>
        <li data-sr="QR kod ili dugme u aplikaciji deluje brže nego ručno čitanje uputstva na zvaničnom sajtu." data-en="A QR code or in-app button feels faster than reading instructions on the official site.">QR kod ili dugme u aplikaciji deluje brže nego ručno čitanje uputstva na zvaničnom sajtu.</li>
      </ul>
    </div>
    <div class="phase">
      <div class="label" data-sr="Šta napadač dobija" data-en="What the attacker gains">Šta napadač dobija</div>
      <ul class="bullets">
        <li data-sr="Aktivnu sesiju na nalogu kada odobrite novi uređaj ili skenirate kod za prijavu." data-en="An active account session when you approve a new device or scan a sign-in code.">Aktivnu sesiju na nalogu kada odobrite novi uređaj ili skenirate kod za prijavu.</li>
        <li data-sr="Mogućnost promene lozinke i podataka za oporavak dok vi mislite da podešavate bezbednost." data-en="A chance to change the password and recovery data while you think you are adjusting security.">Mogućnost promene lozinke i podataka za oporavak dok vi mislite da podešavate bezbednost.</li>
        <li data-sr="Daljinski pristup ako pređete na TeamViewer, AnyDesk ili slično da tehničar vidi problem." data-en="Remote access if you switch to TeamViewer, AnyDesk, or similar so the technician can see the issue.">Daljinski pristup ako pređete na TeamViewer, AnyDesk ili slično da tehničar vidi problem.</li>
        <li data-sr="Potvrdu plaćanja ili prenos ako vas u istom toku uvuku u aktivaciju zaštite uz karticu." data-en="Payment confirmation or a transfer if they pull you into protection activation with a card in the same flow.">Potvrdu plaćanja ili prenos ako vas u istom toku uvuku u aktivaciju zaštite uz karticu.</li>
      </ul>
    </div>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching)">Hronološki tok (faze + grananja)</h2>

  <article class="phase">
    <h3 data-sr="Faza 1 — Kontakt i lažna dijagnoza" data-en="Phase 1 — Contact and fake diagnosis">Faza 1 — Kontakt i lažna dijagnoza</h3>
    <p data-sr="Meta dobija poziv, poruku ili skočni prozor sa tvrdnjom o virusu, neuspeloj transakciji, blokiranom nalogu ili sumnjivoj aktivnosti; sledeći korak unapred se najavljuje kao tehnička rutina." data-en="The target gets a call, message, or pop-up claiming a virus, failed transaction, blocked account, or suspicious activity; the next step is framed in advance as a technical routine.">Meta dobija poziv, poruku ili skočni prozor sa tvrdnjom o virusu, neuspeloj transakciji, blokiranom nalogu ili sumnjivoj aktivnosti; sledeći korak unapred se najavljuje kao tehnička rutina.</p>
    <ul class="bullets">
      <li data-sr="Broj pozivaoca ili domen poruke ne mora da odgovara brendu koji se pominje u razgovoru." data-en="The caller ID or message domain may not match the brand named in the conversation.">Broj pozivaoca ili domen poruke ne mora da odgovara brendu koji se pominje u razgovoru.</li>
      <li data-sr="Traži se da ostanete na liniji i ne zatvarate nalog da sistem ne bi zaključao pristup." data-en="You are asked to stay on the line and not close the account so the system does not lock access.">Traži se da ostanete na liniji i ne zatvarate nalog da sistem ne bi zaključao pristup.</li>
      <li data-sr="Jezik je formalan, sa šiframa predmeta ili referentnim brojem koji zvuče uverljivo." data-en="The language is formal, with case IDs or reference numbers that sound convincing.">Jezik je formalan, sa šiframa predmeta ili referentnim brojem koji zvuče uverljivo.</li>
      <li data-sr="Često se spominje da je drugi uređaj ili nova prijava uzrok problema." data-en="They often mention that a second device or new sign-in is the cause of the problem.">Često se spominje da je drugi uređaj ili nova prijava uzrok problema.</li>
    </ul>
    <div class="callout"><strong data-sr="Meta prihvata da problem rešava uz pomoć strane koja se predstavlja kao podrška.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Meta prihvata da problem rešava uz pomoć strane koja se predstavlja kao podrška." data-en="The target accepts help from a party claiming to be support.">Meta prihvata da problem rešava uz pomoć strane koja se predstavlja kao podrška.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 2 — Uvod u povezivanje ili pouzdan uređaj" data-en="Phase 2 — Introducing linking or a trusted device">Faza 2 — Uvod u povezivanje ili pouzdan uređaj</h3>
    <p data-sr="Objašnjava se da bez povezivanja telefona i računara sistem ne može da potvrdi vlasnika ili da treba da dodate uređaj koji će biti označen kao pouzdan u bezbednosnim podešavanjima." data-en="They explain that without linking phone and computer the system cannot verify the owner, or that you must add a device marked as trusted in security settings.">Objašnjava se da bez povezivanja telefona i računara sistem ne može da potvrdi vlasnika ili da treba da dodate uređaj koji će biti označen kao pouzdan u bezbednosnim podešavanjima.</p>
    <ul class="bullets">
      <li data-sr="Šalje se link ka stranici koja liči na prijavu na nalog ili na stranicu bezbednosnog centra." data-en="A link is sent to a page that looks like account sign-in or a security center page.">Šalje se link ka stranici koja liči na prijavu na nalog ili na stranicu bezbednosnog centra.</li>
      <li data-sr="Traži se da otvorite podešavanja naloga na telefonu dok ste na vezi sa tehničarem." data-en="You are asked to open account settings on the phone while connected to the technician.">Traži se da otvorite podešavanja naloga na telefonu dok ste na vezi sa tehničarem.</li>
      <li data-sr="Može se tražiti instalacija aplikacije za autentifikaciju kako bi se uređaji uskladili." data-en="They may ask you to install an authentication app so the devices align.">Može se tražiti instalacija aplikacije za autentifikaciju kako bi se uređaji uskladili.</li>
      <li data-sr="Koraci se daju jedan po jedan, bez mogućnosti da ih uporedite sa zvaničnim vodičem." data-en="Steps are given one by one, without a chance to compare them to the official guide.">Koraci se daju jedan po jedan, bez mogućnosti da ih uporedite sa zvaničnim vodičem.</li>
    </ul>
    <div class="callout"><strong data-sr="Meta je na stranici za prijavu ili u meniju uređaja/naloga pod tuđim vođstvom.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Meta je na stranici za prijavu ili u meniju uređaja/naloga pod tuđim vođstvom." data-en="The target is on a sign-in page or in device/account menus under someone else’s guidance.">Meta je na stranici za prijavu ili u meniju uređaja/naloga pod tuđim vođstvom.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching in this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="phishing.html" data-sr="Fišing ako link vodi na lažnu prijavu." data-en="Phishing if the link leads to a fake login.">Fišing ako link vodi na lažnu prijavu.</a></li>
        <li><a href="quishing.html" data-sr="QR fišing ako je ulaz skeniranje koda." data-en="Quishing if entry is scanning a code.">QR fišing ako je ulaz skeniranje koda.</a></li>
        <li><a href="browser-push-malware-scam.html" data-sr="Lažni push ako je prvi kontakt kroz obaveštenje pregledača." data-en="Fake push if first contact is a browser notification.">Lažni push ako je prvi kontakt kroz obaveštenje pregledača.</a></li>
      </ul>
    </div>
  </article>

  <article class="phase warn">
    <h3 data-sr="Faza 3 — QR kod, odobrenje uređaja ili kod sa telefona" data-en="Phase 3 — QR code, device approval, or phone code">Faza 3 — QR kod, odobrenje uređaja ili kod sa telefona</h3>
    <p data-sr="Meta skenira QR koji zapravo potvrđuje prijavu napadača, bira Da na upit za novi uređaj ili čita naglas kod koji je stigao u SMS ili aplikaciju autentifikatora." data-en="The target scans a QR code that actually confirms the attacker’s sign-in, taps Yes on a new-device prompt, or reads aloud a code from SMS or an authenticator app.">Meta skenira QR koji zapravo potvrđuje prijavu napadača, bira Da na upit za novi uređaj ili čita naglas kod koji je stigao u SMS ili aplikaciju autentifikatora.</p>
    <ul class="bullets">
      <li data-sr="QR kod može biti prikazan na računaru dok vi skenirate telefonom, što je isti obrazac kao kod legitimnog prijavljivanja." data-en="The QR may be shown on the computer while you scan with the phone, matching the pattern of legitimate sign-in.">QR kod može biti prikazan na računaru dok vi skenirate telefonom, što je isti obrazac kao kod legitimnog prijavljivanja.</li>
      <li data-sr="Poruka Dozvoliti ovom uređaju pristup deluje kao zaštita, a zapravo dodaje njihov pregledač ili telefon." data-en="A prompt like Allow this device access feels protective but actually adds their browser or phone.">Poruka Dozvoliti ovom uređaju pristup deluje kao zaštita, a zapravo dodaje njihov pregledač ili telefon.</li>
      <li data-sr="Trajanje koda u autentifikatoru je kratak, što dodatno žuri odluku." data-en="Authenticator codes are short-lived, which further rushes the decision.">Trajanje koda u autentifikatoru je kratak, što dodatno žuri odluku.</li>
      <li data-sr="Ako odbijete jednom, scenarij se ponavlja sa novim greškom sistema." data-en="If you refuse once, the script repeats with a new system error.">Ako odbijete jednom, scenarij se ponavlja sa novim greškom sistema.</li>
    </ul>
    <div class="callout"><strong data-sr="Jednokratni kod, QR potvrda ili dugme za odobrenje novog uređaja je predato ili potvrđeno.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Jednokratni kod, QR potvrda ili dugme za odobrenje novog uređaja je predato ili potvrđeno." data-en="A one-time code, QR confirmation, or new-device approval button is shared or confirmed.">Jednokratni kod, QR potvrda ili dugme za odobrenje novog uređaja je predato ili potvrđeno.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching in this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="account-takeover.html" data-sr="Preuzimanje naloga posle uspešne sesije." data-en="Account takeover after a successful session.">Preuzimanje naloga posle uspešne sesije.</a></li>
        <li><a href="browser-session-hijack.html" data-sr="Krađa sesije u pregledaču." data-en="Browser session hijack.">Krađa sesije u pregledaču.</a></li>
      </ul>
    </div>
  </article>

  <article class="phase bad">
    <h3 data-sr="Faza 4 — Daljinski alat ili promena bezbednosnih podataka" data-en="Phase 4 — Remote tool or security settings change">Faza 4 — Daljinski alat ili promena bezbednosnih podataka</h3>
    <p data-sr="U istom ili sledećem koraku traži se daljinski pristup da se proveri povezivanje ili se u ulogovanoj sesiji menjaju email za oporavak, broj telefona ili isključuje dvofaktorska zaštita." data-en="In the same or next step, remote access is requested to verify the linking, or while logged in they change recovery email, phone number, or turn off two-factor protection.">U istom ili sledećem koraku traži se daljinski pristup da se proveri povezivanje ili se u ulogovanoj sesiji menjaju email za oporavak, broj telefona ili isključuje dvofaktorska zaštita.</p>
    <ul class="bullets">
      <li data-sr="TeamViewer ili AnyDesk se predstavlja kao standardni korak, a ne kao izuzetan rizik." data-en="TeamViewer or AnyDesk is presented as a standard step, not an exceptional risk.">TeamViewer ili AnyDesk se predstavlja kao standardni korak, a ne kao izuzetan rizik.</li>
      <li data-sr="Na ekranu se brzo otvaraju prozori dok vi ne stižete da pročitate šta se menja." data-en="Windows open quickly while you cannot read what is changing.">Na ekranu se brzo otvaraju prozori dok vi ne stižete da pročitate šta se menja.</li>
      <li data-sr="Može se tražiti da ponovo unesete karticu kao depozit za aktivaciju zaštite." data-en="You may be asked to enter the card again as a deposit to activate protection.">Može se tražiti da ponovo unesete karticu kao depozit za aktivaciju zaštite.</li>
      <li data-sr="Kada završe, kažu da će sistem biti sinhronizovan za sat vremena da bi izbegli trenutnu proveru." data-en="When they finish, they say the system will sync in an hour to avoid immediate checking.">Kada završe, kažu da će sistem biti sinhronizovan za sat vremena da bi izbegli trenutnu proveru.</li>
    </ul>
    <div class="callout"><strong data-sr="Instaliran je daljinski alat ili promenjeni su ključni podaci naloga dok je sesija aktivna.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Instaliran je daljinski alat ili promenjeni su ključni podaci naloga dok je sesija aktivna." data-en="Remote software is installed or key account details are changed while the session is active.">Instaliran je daljinski alat ili promenjeni su ključni podaci naloga dok je sesija aktivna.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching in this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="tech-support-scam.html" data-sr="Klasična lažna tehnička podrška." data-en="Classic fake tech support.">Klasična lažna tehnička podrška.</a></li>
        <li><a href="tech-support-remote-access-scam.html" data-sr="Podrška sa daljinskim pristupom." data-en="Support scam with remote access.">Podrška sa daljinskim pristupom.</a></li>
      </ul>
    </div>
  </article>

  <article class="phase bad">
    <h3 data-sr="Faza 5 — Novac, prenos ili zaključavanje naloga" data-en="Phase 5 — Money, transfer, or account lockout">Faza 5 — Novac, prenos ili zaključavanje naloga</h3>
    <p data-sr="Napadač koristi otvorenu sesiju za kupovinu, slanje novca, zahteve zajma od kontakata ili prodaju pristupa; vi možete ostati isključeni tek kada pokušate ponovnu prijavu." data-en="The attacker uses the open session for purchases, money transfers, loan requests to contacts, or selling access; you may be locked out only when you try to sign in again.">Napadač koristi otvorenu sesiju za kupovinu, slanje novca, zahteve zajma od kontakata ili prodaju pristupa; vi možete ostati isključeni tek kada pokušate ponovnu prijavu.</p>
    <ul class="bullets">
      <li data-sr="Transakcije idu u kratkom roku pre nego što banka ili platforma pošalju upozorenje." data-en="Transactions go through quickly before the bank or platform sends a warning.">Transakcije idu u kratkom roku pre nego što banka ili platforma pošalju upozorenje.</li>
      <li data-sr="Poruke prijateljima mogu tražiti hitan prenos jer je telefon pokvaren." data-en="Messages to friends may ask for an urgent transfer because the phone is broken.">Poruke prijateljima mogu tražiti hitan prenos jer je telefon pokvaren.</li>
      <li data-sr="Isti napadač može pozvati ponovo kao bezbednosni tim i tražiti dodatnu naknadu." data-en="The same attacker may call again as the security team and request another fee.">Isti napadač može pozvati ponovo kao bezbednosni tim i tražiti dodatnu naknadu.</li>
      <li data-sr="Bez ispravnog emaila ili telefona za oporavak, vraćanje naloga postaje teže." data-en="Without the correct recovery email or phone, getting the account back becomes harder.">Bez ispravnog emaila ili telefona za oporavak, vraćanje naloga postaje teže.</li>
    </ul>
    <div class="callout"><strong data-sr="Vidljiva je finansijska šteta ili gubitak kontrole nad nalogom.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Vidljiva je finansijska šteta ili gubitak kontrole nad nalogom." data-en="Financial harm is visible or control of the account is lost.">Vidljiva je finansijska šteta ili gubitak kontrole nad nalogom.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 6 — Sanacija i sprečavanje ponavljanja" data-en="Phase 6 — Cleanup and prevention">Faza 6 — Sanacija i sprečavanje ponavljanja</h3>
    <p data-sr="Potrebno je prekinuti daljinske sesije, opozvati uređaje na nalogu, promeniti lozinke sa čistog uređaja i kontaktirati banku ili platformu kroz zvaničan kanal; dokumentacija razgovora pomaže pri prijavi." data-en="You need to end remote sessions, revoke devices on the account, change passwords from a clean device, and contact the bank or platform through an official channel; documenting the conversation helps reporting.">Potrebno je prekinuti daljinske sesije, opozvati uređaje na nalogu, promeniti lozinke sa čistog uređaja i kontaktirati banku ili platformu kroz zvaničan kanal; dokumentacija razgovora pomaže pri prijavi.</p>
    <ul class="bullets">
      <li data-sr="U podešavanjima naloga proverite listu aktivnih sesija i uklonite nepoznate uređaje." data-en="In account settings, review active sessions and remove unknown devices.">U podešavanjima naloga proverite listu aktivnih sesija i uklonite nepoznate uređaje.</li>
      <li data-sr="Deinstalirajte daljinski alat ako ste ga instalirali pod pritiskom." data-en="Uninstall remote software if you installed it under pressure.">Deinstalirajte daljinski alat ako ste ga instalirali pod pritiskom.</li>
      <li data-sr="Aktivirajte ili ponovo uključite dvofaktorsku zaštitu na novim brojevima koje sami kontrolišete." data-en="Turn on or re-enable two-factor authentication with phone numbers you control.">Aktivirajte ili ponovo uključite dvofaktorsku zaštitu na novim brojevima koje sami kontrolišete.</li>
      <li data-sr="Ne koristite isti postupak povezivanja koji vam je dao pozivalac; koristite samo zvaničnu stranicu ukucanu ručno." data-en="Do not repeat the linking steps the caller gave you; use only the official site typed manually.">Ne koristite isti postupak povezivanja koji vam je dao pozivalac; koristite samo zvaničnu stranicu ukucanu ručno.</li>
    </ul>
    <div class="callout"><strong data-sr="Nepoznati uređaji su uklonjeni, lozinke su promenjene i institucija je obaveštena.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Nepoznati uređaji su uklonjeni, lozinke su promenjene i institucija je obaveštena." data-en="Unknown devices are removed, passwords are changed, and the institution is notified.">Nepoznati uređaji su uklonjeni, lozinke su promenjene i institucija je obaveštena.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching in this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="recovery-scam.html" data-sr="Recovery scam ako stigne lažna pomoć posle štete." data-en="Recovery scam if fake help arrives after the loss.">Recovery scam ako stigne lažna pomoć posle štete.</a></li>
        <li><a href="account-recovery-scam.html" data-sr="Lažna usluga oporavka naloga." data-en="Fake account recovery service.">Lažna usluga oporavka naloga.</a></li>
      </ul>
    </div>
  </article>
</section>

<section class="content-section">
  <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
  <ul class="bullets">
    <li data-sr="Pozivalac traži da skenirate QR kod dok ste u razgovoru sa njim." data-en="The caller asks you to scan a QR code while you are on the phone with them.">Pozivalac traži da skenirate QR kod dok ste u razgovoru sa njim.</li>
    <li data-sr="Traži se da pročitate naglas kod iz SMS-a ili aplikacije autentifikatora." data-en="You are asked to read aloud a code from SMS or an authenticator app.">Traži se da pročitate naglas kod iz SMS-a ili aplikacije autentifikatora.</li>
    <li data-sr="Objašnjenje koristi fraze tipa mora da povežemo uređaje bez zvaničnog dokumenta koji to potvrđuje." data-en="The explanation uses phrases like we must link the devices without official documentation backing it.">Objašnjenje koristi fraze tipa mora da povežemo uređaje bez zvaničnog dokumenta koji to potvrđuje.</li>
    <li data-sr="Link u poruci ne vodi na poznat domen banke ili servisa koji je naveden u razgovoru." data-en="The message link does not lead to the known domain of the bank or service named in the call.">Link u poruci ne vodi na poznat domen banke ili servisa koji je naveden u razgovoru.</li>
    <li data-sr="Pritisak da ne prekidate poziv i ne konsultujete nikoga drugog." data-en="Pressure not to hang up or consult anyone else.">Pritisak da ne prekidate poziv i ne konsultujete nikoga drugog.</li>
    <li data-sr="Traži se instalacija TeamViewer-a, AnyDesk-a ili sličnog alata radi povezivanja." data-en="Installation of TeamViewer, AnyDesk, or similar is requested for linking.">Traži se instalacija TeamViewer-a, AnyDesk-a ili sličnog alata radi povezivanja.</li>
    <li data-sr="U aplikaciji se pojavljuje upit za novi uređaj u trenutku kada vi to niste pokrenuli sami." data-en="A new-device prompt appears in the app when you did not start that action yourself.">U aplikaciji se pojavljuje upit za novi uređaj u trenutku kada vi to niste pokrenuli sami.</li>
    <li data-sr="Nakon odobrenja stižu obaveštenja o promeni lozinke ili emaila koje vi niste tražili." data-en="After approval, you get notices about password or email changes you did not request.">Nakon odobrenja stižu obaveštenja o promeni lozinke ili emaila koje vi niste tražili.</li>
    <li data-sr="Podrška kaže da je normalno da kartica bude privremeno zadužena radi verifikacije." data-en="Support says it is normal for the card to be temporarily charged for verification.">Podrška kaže da je normalno da kartica bude privremeno zadužena radi verifikacije.</li>
    <li data-sr="Isti scenario se ponavlja drugog dana sa drugim agentom i novim koracima." data-en="The same scenario repeats the next day with another agent and new steps.">Isti scenario se ponavlja drugog dana sa drugim agentom i novim koracima.</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
  <ol class="steps">
    <li data-sr="Prekinite poziv i nađite broj podrške isključivo na zvaničnom sajtu servisa, ukucan ručno." data-en="Hang up and find the support number only on the service’s official website, typed manually.">Prekinite poziv i nađite broj podrške isključivo na zvaničnom sajtu servisa, ukucan ručno.</li>
    <li data-sr="Uporedite domen u adresnoj traci sa domenom koji piše na vašoj kartici ili računu." data-en="Compare the address bar domain to the domain printed on your card or statement.">Uporedite domen u adresnoj traci sa domenom koji piše na vašoj kartici ili računu.</li>
    <li data-sr="Proverite da li postoji aktivna sesija ili novi uređaj u podešavanjima bezbednosti naloga." data-en="Check for an active session or a new device in the account security settings.">Proverite da li postoji aktivna sesija ili novi uređaj u podešavanjima bezbednosti naloga.</li>
    <li data-sr="Nikada ne skenirajte QR kod za prijavu na zahtev osobe koja vas je pozvala." data-en="Never scan a sign-in QR code at the request of someone who called you.">Nikada ne skenirajte QR kod za prijavu na zahtev osobe koja vas je pozvala.</li>
    <li data-sr="Ako ste već odobrili uređaj, odmah opozovite sesije i promenite lozinku sa drugog uređaja." data-en="If you already approved a device, immediately revoke sessions and change the password from another device.">Ako ste već odobrili uređaj, odmah opozovite sesije i promenite lozinku sa drugog uređaja.</li>
    <li data-sr="Proverite da li je instaliran daljinski softver i uklonite ga ako ga niste sami namestili." data-en="Check whether remote software is installed and remove it if you did not set it up yourself.">Proverite da li je instaliran daljinski softver i uklonite ga ako ga niste sami namestili.</li>
    <li data-sr="Kontaktirajte banku ako je uneta kartica ili odobrena transakija tokom poziva." data-en="Contact the bank if a card was entered or a transaction was approved during the call.">Kontaktirajte banku ako je uneta kartica ili odobrena transakija tokom poziva.</li>
    <li data-sr="Sačuvajte broj pozivaoca, snimak ekrana i vremena koraka pre brisanja dokaza." data-en="Save the caller ID, screenshots, and timing of steps before deleting evidence.">Sačuvajte broj pozivaoca, snimak ekrana i vremena koraka pre brisanja dokaza.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Checklista: pitanja pre odobrenja uređaja ili koda" data-en="Checklist: questions before approving a device or a code">Checklista: pitanja pre odobrenja uređaja ili koda</h2>
  <ul class="bullets">
    <li data-sr="Da li sam ja pokrenuo prijavu ili zahtev za novi uređaj na ovom nalogu?" data-en="Did I myself start the sign-in or new-device request on this account?">Da li sam ja pokrenuo prijavu ili zahtev za novi uređaj na ovom nalogu?</li>
    <li data-sr="Da li broj podrške koji zove odgovara broju sa zvaničnog sajta?" data-en="Does the calling support number match the number from the official site?">Da li broj podrške koji zove odgovara broju sa zvaničnog sajta?</li>
    <li data-sr="Da li bih ovaj QR kod skenirao da niko ne čeka na drugoj strani linije?" data-en="Would I scan this QR code if no one were waiting on the line?">Da li bih ovaj QR kod skenirao da niko ne čeka na drugoj strani linije?</li>
    <li data-sr="Da li mi je poznato šta tačno znači poruka koju treba da potvrdim na telefonu?" data-en="Do I know exactly what the phone prompt I am supposed to confirm means?">Da li mi je poznato šta tačno znači poruka koju treba da potvrdim na telefonu?</li>
    <li data-sr="Da li prava podrška ikada traži kod iz autentifikatora ili SMS naglas telefonom?" data-en="Would real support ever ask for an authenticator or SMS code aloud on the phone?">Da li prava podrška ikada traži kod iz autentifikatora ili SMS naglas telefonom?</li>
    <li data-sr="Da li mogu da prekinem i da ponovo uđem na nalog kroz aplikaciju bez pomoći pozivaoca?" data-en="Can I hang up and sign in again through the app without the caller’s help?">Da li mogu da prekinem i da ponovo uđem na nalog kroz aplikaciju bez pomoći pozivaoca?</li>
    <li data-sr="Da li postoji drugi član domaćinstva kome mogu da pokažem ekran pre potvrde?" data-en="Is there another household member I can show the screen to before confirming?">Da li postoji drugi član domaćinstva kome mogu da pokažem ekran pre potvrde?</li>
    <li data-sr="Da li me pozivalac tera da brzo pritisnem Da pre nego što pročitam tekst?" data-en="Is the caller pushing me to tap Yes quickly before I read the text?">Da li me pozivalac tera da brzo pritisnem Da pre nego što pročitam tekst?</li>
    <li data-sr="Da li je link u poruci skraćen ili vodi na nepoznat domen?" data-en="Is the message link shortened or leading to an unknown domain?">Da li je link u poruci skraćen ili vodi na nepoznat domen?</li>
    <li data-sr="Da li je instalacija daljinskog programa predstavljena kao obavezan korak?" data-en="Is remote software installation presented as a mandatory step?">Da li je instalacija daljinskog programa predstavljena kao obavezan korak?</li>
    <li data-sr="Da li bih isto uradio na poslovnom računaru koji pripada firmi?" data-en="Would I do the same on a work computer owned by a company?">Da li bih isto uradio na poslovnom računaru koji pripada firmi?</li>
    <li data-sr="Da li mogu da sačekam pet minuta i ponovo proverim priču kroz zvaničnu aplikaciju?" data-en="Can I wait five minutes and re-check the story through the official app?">Da li mogu da sačekam pet minuta i ponovo proverim priču kroz zvaničnu aplikaciju?</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: order of actions">Ako sumnja krene: redosled poteza</h2>
  <ol class="steps">
    <li data-sr="Prekinite poziv ili zatvorite čet bez objašnjenja zašto." data-en="End the call or chat without explaining why.">Prekinite poziv ili zatvorite čet bez objašnjenja zašto.</li>
    <li data-sr="Ne skenirajte QR kodove i ne potvrđujte nove uređaje dok ne proverite zvaničan kanal." data-en="Do not scan QR codes or confirm new devices until you verify through an official channel.">Ne skenirajte QR kodove i ne potvrđujte nove uređaje dok ne proverite zvaničan kanal.</li>
    <li data-sr="Uđite u bezbednosna podešavanja naloga i odjavite sve sesije ili uklonite nepoznate uređaje." data-en="Open account security settings and sign out all sessions or remove unknown devices.">Uđite u bezbednosna podešavanja naloga i odjavite sve sesije ili uklonite nepoznate uređaje.</li>
    <li data-sr="Promenite lozinku sa uređaja koji nije bio u toku poziva." data-en="Change the password from a device that was not part of the call.">Promenite lozinku sa uređaja koji nije bio u toku poziva.</li>
    <li data-sr="Uklonite daljinski softver ako je instaliran i pokrenite antimalver proveru." data-en="Remove remote software if installed and run an antimalware check.">Uklonite daljinski softver ako je instaliran i pokrenite antimalver proveru.</li>
    <li data-sr="Prijavite incident banci ili platformi kroz formular ili telefon sa zvaničnog sajta." data-en="Report the incident to the bank or platform via a form or phone from the official site.">Prijavite incident banci ili platformi kroz formular ili telefon sa zvaničnog sajta.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
  <ul class="bullets">
    <li data-sr="Da li su skenirali QR ili potvrdili novi uređaj dok su razgovarali sa podrškom?" data-en="Did they scan a QR or confirm a new device while talking to support?">Da li su skenirali QR ili potvrdili novi uređaj dok su razgovarali sa podrškom?</li>
    <li data-sr="Da li su čitali naglas kod iz SMS-a ili aplikacije?" data-en="Did they read a code aloud from SMS or an app?">Da li su čitali naglas kod iz SMS-a ili aplikacije?</li>
    <li data-sr="Da li je instaliran TeamViewer, AnyDesk ili sličan program?" data-en="Is TeamViewer, AnyDesk, or similar installed?">Da li je instaliran TeamViewer, AnyDesk ili sličan program?</li>
    <li data-sr="Da li vide nove uređaje ili sesije u podešavanjima naloga?" data-en="Do they see new devices or sessions in account settings?">Da li vide nove uređaje ili sesije u podešavanjima naloga?</li>
  </ul>
  <p data-sr="Rečenice koje rade:" data-en="Sentences that help:">Rečenice koje rade:</p>
  <ul class="bullets">
    <li data-sr="Prava podrška ne traži da povežete telefon po njihovom uputstvu tokom poziva." data-en="Real support does not ask you to link the phone following their instructions during a call.">Prava podrška ne traži da povežete telefon po njihovom uputstvu tokom poziva.</li>
    <li data-sr="Hajde da prekinemo poziv i da istu stvar uradimo kroz zvaničnu aplikaciju, polako." data-en="Let’s end the call and do the same thing through the official app, slowly.">Hajde da prekinemo poziv i da istu stvar uradimo kroz zvaničnu aplikaciju, polako.</li>
    <li data-sr="Kod iz aplikacije autentifikatora je kao ključ — ne sme ići u uši drugoj strani." data-en="An authenticator code is like a key — it must not go into someone else’s ears.">Kod iz aplikacije autentifikatora je kao ključ — ne sme ići u uši drugoj strani.</li>
    <li data-sr="Ako je već potvrđen uređaj, odmah ćemo odjaviti sesije i promeniti lozinku sa mog telefona." data-en="If a device was already approved, we will sign out sessions and change the password from my phone right away.">Ako je već potvrđen uređaj, odmah ćemo odjaviti sesije i promeniti lozinku sa mog telefona.</li>
  </ul>
</section>


`
};
