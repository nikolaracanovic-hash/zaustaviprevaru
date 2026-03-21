window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["mfa-fatigue-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi MFA bombardovanje" data-en="Introduction: how MFA fatigue works">Uvod: kako radi MFA bombardovanje</h2>
      <p data-sr="MFA bombardovanje počinje tek kada napadač već ima deo puta: ukradenu lozinku, aktivnu sesiju, ili pristup nekom drugom identitetu. Umesto da lomi MFA tehnički, on je lomi psihološki. Šalje niz push zahteva dok meta ne klikne iz umora, zabune ili pod pritiskom poziva." data-en="MFA fatigue starts only after the attacker already has part of the path: a stolen password, an active session, or access to another identity component. Instead of breaking MFA technically, the attacker breaks it psychologically. They send a stream of push prompts until the target approves out of fatigue, confusion, or pressure from a call.">MFA bombardovanje počinje tek kada napadač već ima deo puta: ukradenu lozinku, aktivnu sesiju, ili pristup nekom drugom identitetu. Umesto da lomi MFA tehnički, on je lomi psihološki. Šalje niz push zahteva dok meta ne klikne iz umora, zabune ili pod pritiskom poziva.</p>
      <p data-sr="Zato je obrazac opasan i u firmama i kod privatnih naloga. Korisnik ne vidi lažnu stranicu, ne unosi nužno ništa novo i često misli da samo odbacuje glupe notifikacije. Napadač koristi baš taj umor: kada notifikacije postanu dosadne, jedan pogrešan klik može otvoriti nalog." data-en="That is why the pattern is dangerous in both companies and private accounts. The user may see no fake page, may not type anything new, and often thinks they are merely dismissing annoying notifications. The attacker uses exactly that fatigue: once the prompts become irritating, one wrong tap can open the account.">Zato je obrazac opasan i u firmama i kod privatnih naloga. Korisnik ne vidi lažnu stranicu, ne unosi nužno ništa novo i često misli da samo odbacuje glupe notifikacije. Napadač koristi baš taj umor: kada notifikacije postanu dosadne, jedan pogrešan klik može otvoriti nalog.</p>
      <div class="callout" data-sr="<strong>Model:</strong> ukradena lozinka ili sesija → niz push zahteva → poziv, poruka ili konfuzija → jedno odobrenje → pristup nalogu → dalja zloupotreba." data-en="<strong>Model:</strong> stolen password or session → repeated push prompts → call, message, or confusion → one approval → account access → further abuse."><strong>Model:</strong> ukradena lozinka ili sesija → niz push zahteva → poziv, poruka ili konfuzija → jedno odobrenje → pristup nalogu → dalja zloupotreba.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> jedno pogrešno odobrenje push prijave ili izdiktiran broj za potvrdu." data-en="<strong>Threshold:</strong> one mistaken approval of a push login or reading out the confirmation number."><strong>Prag:</strong> jedno pogrešno odobrenje push prijave ili izdiktiran broj za potvrdu.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: zašto jedno odobrenje padne" data-en="How it works: why one approval happens">Kako generalno radi: zašto jedno odobrenje padne</h2>
      <p data-sr="Push MFA je dobra zaštita dok korisnik razume šta potvrđuje. Problem nastaje kada se potvrda pretvori u rutinsko klikanje ili u prekid dosadnih notifikacija. Napadač koristi vreme, ponavljanje i trenutak nepažnje, a često doda i glasovni ili chat pritisak da samo potvrdiš da blokiraš napad." data-en="Push MFA is good protection as long as the user understands what is being approved. The problem begins when the approval turns into routine tapping or into dismissing annoying notifications. The attacker exploits timing, repetition, and a moment of inattention, and often adds voice or chat pressure telling the target to approve it so we can block the attack.">Push MFA je dobra zaštita dok korisnik razume šta potvrđuje. Problem nastaje kada se potvrda pretvori u rutinsko klikanje ili u prekid dosadnih notifikacija. Napadač koristi vreme, ponavljanje i trenutak nepažnje, a često doda i glasovni ili chat pritisak da samo potvrdiš da blokiraš napad.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gura korisnika ka grešci" data-en="What pushes the user into error">Šta gura korisnika ka grešci</div>
          <ul class="bullets">
            <li data-sr="Notifikacije dolaze u seriji i troše pažnju." data-en="The notifications arrive in a series and drain attention.">Notifikacije dolaze u seriji i troše pažnju.</li>
            <li data-sr="Korisnik ne vidi odmah ko pokušava prijavu ni odakle." data-en="The user does not immediately see who is trying to sign in or from where.">Korisnik ne vidi odmah ko pokušava prijavu ni odakle.</li>
            <li data-sr="Ako se javi podrška, korisnik dobija lažno objašnjenje za već prisutne push zahteve." data-en="If support calls, the user gets a fake explanation for the prompts already appearing.">Ako se javi podrška, korisnik dobija lažno objašnjenje za već prisutne push zahteve.</li>
            <li data-sr="Umor i dosada menjaju MFA iz zaštite u mehaničku radnju." data-en="Fatigue and annoyance turn MFA from protection into a mechanical action.">Umor i dosada menjaju MFA iz zaštite u mehaničku radnju.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Šta napadač time dobija" data-en="What the attacker gains">Šta napadač time dobija</div>
          <ul class="bullets">
            <li data-sr="Legitiman ulaz u nalog bez daljeg pogađanja koda." data-en="Legitimate entry into the account without guessing further codes.">Legitiman ulaz u nalog bez daljeg pogađanja koda.</li>
            <li data-sr="Pristup pošti, VPN-u, administrativnom panelu ili cloud servisu." data-en="Access to mail, VPN, admin panel, or cloud service.">Pristup pošti, VPN-u, administrativnom panelu ili cloud servisu.</li>
            <li data-sr="Mogućnost da odmah doda trajni pristup ili promeni recovery podatke." data-en="The ability to add persistence immediately or change recovery data.">Mogućnost da odmah doda trajni pristup ili promeni recovery podatke.</li>
            <li data-sr="Temelj za dalje krađe, interne prevare i širenje napada." data-en="A base for further theft, internal fraud, and attack expansion.">Temelj za dalje krađe, interne prevare i širenje napada.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching).">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Obrazac je kratak, ali vrlo operativan: pokušaj prijave, bombardovanje promptovima, lažno objašnjenje, jedan klik, posledica." data-en="The pattern is short but highly operational: login attempt, prompt bombing, fake explanation, one click, consequence.">Obrazac je kratak, ali vrlo operativan: pokušaj prijave, bombardovanje promptovima, lažno objašnjenje, jedan klik, posledica.</p>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Napadač već ima prvi ključ" data-en="Phase 1 — The attacker already has the first key">Faza 1 — Napadač već ima prvi ključ</h3>
        <p data-sr="Pre nego što stigne ijedna push notifikacija, napadač već ima lozinku, aktivnu sesiju ili drugi podatak dovoljan da pokrene login. Taj prvi deo najčešće dolazi iz ranijeg fišinga, credential stuffing-a, curenja podataka ili preuzetog uređaja. MFA bombardovanje je zato nastavak, ne samostalan početak." data-en="Before any push notification appears, the attacker already has a password, an active session, or another credential sufficient to start the login. That first piece usually comes from earlier phishing, credential stuffing, data leaks, or a compromised device. MFA fatigue is therefore a continuation, not a standalone beginning.">Pre nego što stigne ijedna push notifikacija, napadač već ima lozinku, aktivnu sesiju ili drugi podatak dovoljan da pokrene login. Taj prvi deo najčešće dolazi iz ranijeg fišinga, credential stuffing-a, curenja podataka ili preuzetog uređaja. MFA bombardovanje je zato nastavak, ne samostalan početak.</p>
        <ul class="bullets">
          <li data-sr="Push spam nije prvi signal kompromitacije, već znak da je prvi sloj već probijen." data-en="Push spam is not the first sign of compromise but a sign that the first layer has already been breached.">Push spam nije prvi signal kompromitacije, već znak da je prvi sloj već probijen.</li>
          <li data-sr="Napadač testira da li MFA može biti pregažena bez dodatnog truda." data-en="The attacker is testing whether MFA can be overrun without much extra effort.">Napadač testira da li MFA može biti pregažena bez dodatnog truda.</li>
          <li data-sr="Korisnik često pogrešno misli da su promptovi samo greška sistema." data-en="Users often wrongly assume the prompts are just a system error.">Korisnik često pogrešno misli da su promptovi samo greška sistema.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> prvi neplanirani MFA prompt stigne korisniku." data-en="<strong>Threshold:</strong> the first unplanned MFA prompt reaches the user."><strong>Prag faze:</strong> prvi neplanirani MFA prompt stigne korisniku.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Bombardovanje notifikacijama" data-en="Phase 2 — Notification bombing">Faza 2 — Bombardovanje notifikacijama</h3>
        <p data-sr="Napadač ponavlja pokušaje prijave više puta zaredom. Korisnik dobija niz gotovo istih obaveštenja i mora stalno da odbija ili ignoriše. Cilj nije da prva notifikacija prođe. Cilj je da se pažnja istanji i da jedna od deset prođe iz umora, zabune ili slučajnog dodira." data-en="The attacker repeats sign-in attempts again and again. The user receives a stream of nearly identical prompts and must keep rejecting or ignoring them. The goal is not for the first prompt to succeed. The goal is to thin out attention until one out of ten gets approved out of fatigue, confusion, or an accidental tap.">Napadač ponavlja pokušaje prijave više puta zaredom. Korisnik dobija niz gotovo istih obaveštenja i mora stalno da odbija ili ignoriše. Cilj nije da prva notifikacija prođe. Cilj je da se pažnja istanji i da jedna od deset prođe iz umora, zabune ili slučajnog dodira.</p>
        <ul class="bullets">
          <li data-sr="Promptovi stižu van konteksta, često u trenutku rada, vožnje ili žurbe." data-en="The prompts arrive out of context, often during work, travel, or hurry.">Promptovi stižu van konteksta, često u trenutku rada, vožnje ili žurbe.</li>
          <li data-sr="Korisnik više razmišlja kako da prekine smetnju nego šta se zapravo potvrđuje." data-en="The user starts thinking more about stopping the annoyance than about what is being approved.">Korisnik više razmišlja kako da prekine smetnju nego šta se zapravo potvrđuje.</li>
          <li data-sr="Ako sistem koristi number matching, napadač može pokušati da izvuče broj pozivom ili chatom." data-en="If the system uses number matching, the attacker may try to extract the number by call or chat.">Ako sistem koristi number matching, napadač može pokušati da izvuče broj pozivom ili chatom.</li>
          <li data-sr="Serija zahteva stvara osećaj haosa koji pogoduje grešci." data-en="The repeated prompts create a sense of chaos that favors mistakes.">Serija zahteva stvara osećaj haosa koji pogoduje grešci.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik prestane da promptove tretira kao signal napada i počne da ih tretira kao smetnju." data-en="<strong>Threshold:</strong> the user stops treating the prompts as an attack signal and starts treating them as a nuisance."><strong>Prag faze:</strong> korisnik prestane da promptove tretira kao signal napada i počne da ih tretira kao smetnju.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Lažni poziv ili poruka daju objašnjenje" data-en="Phase 3 — A fake call or message supplies the explanation">Faza 3 — Lažni poziv ili poruka daju objašnjenje</h3>
        <p data-sr="Kad se korisnik zbuni, napadač često uskače pozivom ili porukom u ime IT podrške, banke, provajdera ili bezbednosnog tima. Objašnjenje glasi da se vidi napad na tvoj nalog i da treba samo da odbriš ili izdiktiraš broj da se blokira pokušaj. Tako već prisutni promptovi dobijaju lažni smisao." data-en="When the user gets confused, the attacker often jumps in with a call or message pretending to be IT support, a bank, a provider, or a security team. The explanation says there is an attack on your account and that the user only needs to approve or read out a number to block the attempt. In that way, the prompts that are already present get a false meaning.">Kad se korisnik zbuni, napadač često uskače pozivom ili porukom u ime IT podrške, banke, provajdera ili bezbednosnog tima. Objašnjenje glasi da se vidi napad na tvoj nalog i da treba samo da odbriš ili izdiktiraš broj da se blokira pokušaj. Tako već prisutni promptovi dobijaju lažni smisao.</p>
        <ul class="bullets">
          <li data-sr="Napadač koristi već vidljive promptove kao dokaz da je legitiman." data-en="The attacker uses the visible prompts themselves as evidence that they are legitimate.">Napadač koristi već vidljive promptove kao dokaz da je legitiman.</li>
          <li data-sr="Ton je hitan i proceduralan, sa insistiranjem da se odmah reaguje." data-en="The tone is urgent and procedural, insisting on immediate action.">Ton je hitan i proceduralan, sa insistiranjem da se odmah reaguje.</li>
          <li data-sr="Korisnik dobija utisak da odobrenjem gasi napad, a zapravo ga završava u korist napadača." data-en="The user gets the impression that approving will stop the attack, while it actually completes it for the attacker.">Korisnik dobija utisak da odobrenjem gasi napad, a zapravo ga završava u korist napadača.</li>
          <li data-sr="Ako postoji number matching, traži se broj sa ekrana pod izgovorom verifikacije." data-en="If number matching is used, the caller asks for the number shown on screen under the pretext of verification.">Ako postoji number matching, traži se broj sa ekrana pod izgovorom verifikacije.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="fake-call-scam.html" data-sr="Lažni pozivi" data-en="Fake calls">Lažni pozivi</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik poveruje objašnjenju i spreman je da potvrdi jedan zahtev." data-en="<strong>Threshold:</strong> the user believes the explanation and is ready to approve one prompt."><strong>Prag faze:</strong> korisnik poveruje objašnjenju i spreman je da potvrdi jedan zahtev.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Jedno odobrenje otvara vrata" data-en="Phase 4 — One approval opens the door">Faza 4 — Jedno odobrenje otvara vrata</h3>
        <p data-sr="U ovoj tački zaštita pada. Jedan tap na Approve, jedan potvrđeni broj ili jedan prihvaćeni prompt dovoljan je da login prođe. Napadač dobija onaj pristup koji je i tražio: poštu, VPN, administrativni sistem, cloud ili drugi servis iza MFA zida." data-en="At this point the protection falls. One tap on Approve, one confirmed number, or one accepted prompt is enough for the login to succeed. The attacker gets exactly the access they were aiming for: mail, VPN, an admin system, the cloud, or another service behind MFA.">U ovoj tački zaštita pada. Jedan tap na Approve, jedan potvrđeni broj ili jedan prihvaćeni prompt dovoljan je da login prođe. Napadač dobija onaj pristup koji je i tražio: poštu, VPN, administrativni sistem, cloud ili drugi servis iza MFA zida.</p>
        <ul class="bullets">
          <li data-sr="Korisnik često tek kasnije shvati da je prompt bio pravi zahtev za prijavu." data-en="Users often realize only later that the prompt was a real sign-in request.">Korisnik često tek kasnije shvati da je prompt bio pravi zahtev za prijavu.</li>
          <li data-sr="Napadač po ulazu obično radi brzo, jer zna da je pristup možda kratak." data-en="Once inside, the attacker usually moves quickly because the access may be short-lived.">Napadač po ulazu obično radi brzo, jer zna da je pristup možda kratak.</li>
          <li data-sr="Prvi cilj je često dodavanje trajnosti ili prikupljanje ključnih podataka." data-en="The first goal is often persistence or collecting key data.">Prvi cilj je često dodavanje trajnosti ili prikupljanje ključnih podataka.</li>
          <li data-sr="Ako je nalog poslovni, posledice mogu preći na ceo tim ili organizaciju." data-en="If the account is a business account, the consequences can spread to the whole team or organization.">Ako je nalog poslovni, posledice mogu preći na ceo tim ili organizaciju.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> uspešna MFA potvrda pretvori pokušaj prijave u stvarni pristup." data-en="<strong>Threshold:</strong> a successful MFA approval turns a sign-in attempt into real access."><strong>Prag faze:</strong> uspešna MFA potvrda pretvori pokušaj prijave u stvarni pristup.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Brza zloupotreba i učvršćivanje pristupa" data-en="Phase 5 — Rapid abuse and persistence">Faza 5 — Brza zloupotreba i učvršćivanje pristupa</h3>
        <p data-sr="Posle ulaza napadač obično ne ostaje pasivan. Menja recovery podatke, dodaje novi uređaj ili token, traži osetljive poruke, izvlači fajlove, ili šalje nove poruke iz kompromitovanog naloga. Ako je cilj finansijski, prelazi u BEC, fakture, lažne naloge za uplatu ili dodatni fišing." data-en="After the entry, the attacker usually does not stay passive. They change recovery settings, add a new device or token, search sensitive messages, pull files, or send new messages from the compromised account. If the objective is financial, they move into BEC, invoice fraud, fake payment instructions, or further phishing.">Posle ulaza napadač obično ne ostaje pasivan. Menja recovery podatke, dodaje novi uređaj ili token, traži osetljive poruke, izvlači fajlove, ili šalje nove poruke iz kompromitovanog naloga. Ako je cilj finansijski, prelazi u BEC, fakture, lažne naloge za uplatu ili dodatni fišing.</p>
        <ul class="bullets">
          <li data-sr="Brzina posle ulaza je signal da napadač očekuje brzo zatvaranje pristupa." data-en="Speed after entry signals that the attacker expects the access to be closed quickly.">Brzina posle ulaza je signal da napadač očekuje brzo zatvaranje pristupa.</li>
          <li data-sr="Novi uređaj, novi token ili nova aplikacija mogu ostaviti trajni pristup i posle prve sanacije." data-en="A new device, token, or app can leave persistence even after the first remediation attempt.">Novi uređaj, novi token ili nova aplikacija mogu ostaviti trajni pristup i posle prve sanacije.</li>
          <li data-sr="Napad se često širi na druge korisnike iz iste organizacije." data-en="The attack often spreads to other users in the same organization.">Napad se često širi na druge korisnike iz iste organizacije.</li>
          <li data-sr="Ako postoji poslovna pošta, jedna potvrda može voditi do mnogo veće finansijske štete." data-en="If business mail is involved, one approval can lead to much larger financial damage.">Ako postoji poslovna pošta, jedna potvrda može voditi do mnogo veće finansijske štete.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
            <li><a href="business-email-compromise.html" data-sr="Business email compromise" data-en="Business email compromise">Business email compromise</a></li>
            <li><a href="email-account-compromise.html" data-sr="Kompromitacija imejl naloga" data-en="Email account compromise">Kompromitacija imejl naloga</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> napadač doda novi kanal pristupa ili iskoristi nalog za sledeću štetu." data-en="<strong>Threshold:</strong> the attacker adds a new access path or uses the account for the next layer of harm."><strong>Prag faze:</strong> napadač doda novi kanal pristupa ili iskoristi nalog za sledeću štetu.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Sumnja i drugi talas" data-en="Phase 6 — Suspicion and the second wave">Faza 6 — Sumnja i drugi talas</h3>
        <p data-sr="Kada korisnik shvati da promptovi nisu bili slučajni, često sledi drugi talas: novi pozivi, novi zahtevi, poruke o čišćenju naloga ili lažni saveti za oporavak. Ako organizacija reaguje sporo, napadač već koristi prikupljene informacije za dalji fišing ili finansijsku prevaru." data-en="When the user realizes the prompts were not random, a second wave often follows: new calls, new requests, messages about cleaning the account, or fake recovery advice. If the organization reacts slowly, the attacker may already be using the gathered information for more phishing or financial fraud.">Kada korisnik shvati da promptovi nisu bili slučajni, često sledi drugi talas: novi pozivi, novi zahtevi, poruke o čišćenju naloga ili lažni saveti za oporavak. Ako organizacija reaguje sporo, napadač već koristi prikupljene informacije za dalji fišing ili finansijsku prevaru.</p>
        <ul class="bullets">
          <li data-sr="Promena lozinke je važna, ali ne rešava sve ako je pristup već proširen." data-en="Changing the password matters, but it does not solve everything if access has already expanded.">Promena lozinke je važna, ali ne rešava sve ako je pristup već proširen.</li>
          <li data-sr="Treba proveriti sesije, uređaje, recovery opcije i dodatne faktore pristupa." data-en="Sessions, devices, recovery options, and added access factors must be reviewed.">Treba proveriti sesije, uređaje, recovery opcije i dodatne faktore pristupa.</li>
          <li data-sr="Novi bezbednosni poziv posle incidenta treba tretirati kao novi napad." data-en="A new security call after the incident should be treated as a new attack.">Novi bezbednosni poziv posle incidenta treba tretirati kao novi napad.</li>
          <li data-sr="Ako je firma pogođena, pregled treba raditi šire od jednog korisnika." data-en="If a company is affected, the review must go wider than one user.">Ako je firma pogođena, pregled treba raditi šire od jednog korisnika.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> incident se shvati kao lokalni problem korisnika, iako je možda već organizacioni." data-en="<strong>Threshold:</strong> the incident is treated as a local user problem even though it may already be an organizational one."><strong>Prag faze:</strong> incident se shvati kao lokalni problem korisnika, iako je možda već organizacioni.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Stižu MFA promptovi koje korisnik nije sam pokrenuo." data-en="MFA prompts arrive that the user did not trigger.">Stižu MFA promptovi koje korisnik nije sam pokrenuo.</li>
        <li data-sr="Promptovi dolaze u seriji, a ne pojedinačno." data-en="The prompts arrive in a series rather than as a single event.">Promptovi dolaze u seriji, a ne pojedinačno.</li>
        <li data-sr="U isto vreme stiže poziv ili poruka podrške sa objašnjenjem za promptove." data-en="At the same time, a support call or message arrives explaining the prompts.">U isto vreme stiže poziv ili poruka podrške sa objašnjenjem za promptove.</li>
        <li data-sr="Od korisnika se traži da potvrdi da bi odbio napad." data-en="The user is told to approve in order to block the attack.">Od korisnika se traži da potvrdi da bi odbio napad.</li>
        <li data-sr="Neko traži broj prikazan na ekranu za MFA number matching." data-en="Someone asks for the number shown on screen for MFA number matching.">Neko traži broj prikazan na ekranu za MFA number matching.</li>
        <li data-sr="Promptovi dolaze van radnog vremena ili u čudnom ritmu." data-en="The prompts arrive outside working hours or in a strange rhythm.">Promptovi dolaze van radnog vremena ili u čudnom ritmu.</li>
        <li data-sr="Posle jednog odobrenja pojavljuju se nova obaveštenja o uređajima, sesijama ili recovery promenama." data-en="After one approval, new device, session, or recovery-change alerts appear.">Posle jednog odobrenja pojavljuju se nova obaveštenja o uređajima, sesijama ili recovery promenama.</li>
        <li data-sr="Korisnik misli da nije uradio ništa rizično jer je samo kliknuo approve." data-en="The user thinks they did nothing risky because they only clicked approve.">Korisnik misli da nije uradio ništa rizično jer je samo kliknuo approve.</li>
        <li data-sr="IT ili provajder navodno traže hitnu potvrdu preko istog prompta koji se već pojavljuje." data-en="IT or the provider allegedly asks for urgent confirmation through the same prompt already appearing.">IT ili provajder navodno traže hitnu potvrdu preko istog prompta koji se već pojavljuje.</li>
        <li data-sr="Incident se nastavlja i posle promene lozinke jer je pristup već učvršćen." data-en="The incident continues even after a password change because access has already been hardened.">Incident se nastavlja i posle promene lozinke jer je pristup već učvršćen.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <ol class="steps">
        <li data-sr="Svaki neplanirani MFA prompt tretiraj kao potencijalni incident, ne kao sitnu smetnju." data-en="Treat every unplanned MFA prompt as a potential incident, not as a minor annoyance.">Svaki neplanirani MFA prompt tretiraj kao potencijalni incident, ne kao sitnu smetnju.</li>
        <li data-sr="Ako prompt ne očekuješ, odbij ga i proveri prijavu drugim kanalom." data-en="If you are not expecting the prompt, reject it and verify through another channel.">Ako prompt ne očekuješ, odbij ga i proveri prijavu drugim kanalom.</li>
        <li data-sr="Nikada ne odobravaj prompt na osnovu poziva, poruke ili chata." data-en="Never approve a prompt based on a call, message, or chat request.">Nikada ne odobravaj prompt na osnovu poziva, poruke ili chata.</li>
        <li data-sr="Ako sistem koristi broj na ekranu, taj broj se ne diktira nikome." data-en="If the system uses a number shown on screen, that number is never read to anyone.">Ako sistem koristi broj na ekranu, taj broj se ne diktira nikome.</li>
        <li data-sr="Proveri istoriju prijava i lokacije čim se pojave neočekivani promptovi." data-en="Review sign-in history and locations as soon as unexpected prompts appear.">Proveri istoriju prijava i lokacije čim se pojave neočekivani promptovi.</li>
        <li data-sr="Ako promptovi dolaze u seriji, promeni lozinku i prijavi incident bez čekanja." data-en="If prompts arrive in a wave, change the password and report the incident without waiting.">Ako promptovi dolaze u seriji, promeni lozinku i prijavi incident bez čekanja.</li>
        <li data-sr="Za poslovne naloge proveri da li je dodat novi uređaj, token ili recovery metoda." data-en="For business accounts, check whether a new device, token, or recovery method was added.">Za poslovne naloge proveri da li je dodat novi uređaj, token ili recovery metoda.</li>
        <li data-sr="Ako je moguće, koristi phishing-resistant MFA koja smanjuje ovaj obrazac." data-en="Where possible, use phishing-resistant MFA that reduces this pattern.">Ako je moguće, koristi phishing-resistant MFA koja smanjuje ovaj obrazac.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja kad stigne MFA prompt" data-en="Checklist: 12 questions when an MFA prompt arrives">Checklista: 12 pitanja kad stigne MFA prompt</h2>
      <ul class="bullets">
        <li data-sr="Da li sam ja upravo pokušao prijavu?" data-en="Did I just initiate a sign-in myself?">Da li sam ja upravo pokušao prijavu?</li>
        <li data-sr="Da li znam na koji servis se prompt odnosi?" data-en="Do I know which service the prompt refers to?">Da li znam na koji servis se prompt odnosi?</li>
        <li data-sr="Da li prompt dolazi u čudno vreme ili bez razloga?" data-en="Is the prompt arriving at a strange time or for no reason?">Da li prompt dolazi u čudno vreme ili bez razloga?</li>
        <li data-sr="Da li sam već dobio više istih promptova?" data-en="Have I already received several identical prompts?">Da li sam već dobio više istih promptova?</li>
        <li data-sr="Da li me neko zove ili piše baš dok promptovi stižu?" data-en="Is someone calling or messaging me at the same time the prompts are arriving?">Da li me neko zove ili piše baš dok promptovi stižu?</li>
        <li data-sr="Da li mi neko govori da kliknem approve da bih zaustavio napad?" data-en="Is someone telling me to click approve to stop an attack?">Da li mi neko govori da kliknem approve da bih zaustavio napad?</li>
        <li data-sr="Da li mi neko traži broj sa MFA ekrana?" data-en="Is someone asking for the number shown on the MFA screen?">Da li mi neko traži broj sa MFA ekrana?</li>
        <li data-sr="Da li prompt izgleda kao prvi signal da je lozinka već kompromitovana?" data-en="Does the prompt look like the first sign that my password is already compromised?">Da li prompt izgleda kao prvi signal da je lozinka već kompromitovana?</li>
        <li data-sr="Da li sam proverio istoriju prijava pre nego što bilo šta odobrim?" data-en="Have I checked the sign-in history before approving anything?">Da li sam proverio istoriju prijava pre nego što bilo šta odobrim?</li>
        <li data-sr="Da li bih isto kliknuo da me niko nije požurivao?" data-en="Would I approve it the same way if nobody were rushing me?">Da li bih isto kliknuo da me niko nije požurivao?</li>
        <li data-sr="Da li znam kako da prijavim incident IT timu ili provajderu?" data-en="Do I know how to report the incident to IT or the provider?">Da li znam kako da prijavim incident IT timu ili provajderu?</li>
        <li data-sr="Da li se posle promptova moraju proveriti i uređaji, tokeni i recovery opcije?" data-en="After the prompts, do devices, tokens, and recovery options also need review?">Da li se posle promptova moraju proveriti i uređaji, tokeni i recovery opcije?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Prekini svaki poziv ili chat koji komentariše promptove i ništa ne odobravaj." data-en="End any call or chat discussing the prompts and approve nothing.">Prekini svaki poziv ili chat koji komentariše promptove i ništa ne odobravaj.</li>
        <li data-sr="Promeni lozinku kroz zvaničan kanal i proveri istoriju prijava." data-en="Change the password through the official channel and review sign-in history.">Promeni lozinku kroz zvaničan kanal i proveri istoriju prijava.</li>
        <li data-sr="Odjavi sumnjive sesije i proveri dodate uređaje, recovery metode i tokene." data-en="Sign out suspicious sessions and review added devices, recovery methods, and tokens.">Odjavi sumnjive sesije i proveri dodate uređaje, recovery metode i tokene.</li>
        <li data-sr="Ako je poslovni nalog u pitanju, prijavi incident IT timu odmah, ne kasnije." data-en="If this is a business account, report the incident to IT immediately, not later.">Ako je poslovni nalog u pitanju, prijavi incident IT timu odmah, ne kasnije.</li>
        <li data-sr="Sačuvaj vreme promptova, broj poziva i relevantne poruke kao dokaz." data-en="Save the timing of the prompts, the phone number, and relevant messages as evidence.">Sačuvaj vreme promptova, broj poziva i relevantne poruke kao dokaz.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si ti pokrenuo prijavu ili prompt dolazi bez razloga?" data-en="Did you initiate the sign-in or is the prompt arriving for no reason?">Da li si ti pokrenuo prijavu ili prompt dolazi bez razloga?</li>
            <li data-sr="Da li te neko zove ili piše dok promptovi stižu?" data-en="Is someone calling or messaging you while the prompts arrive?">Da li te neko zove ili piše dok promptovi stižu?</li>
            <li data-sr="Da li si već nešto odobrio ili diktirao broj sa ekrana?" data-en="Have you already approved anything or read out a number from the screen?">Da li si već nešto odobrio ili diktirao broj sa ekrana?</li>
            <li data-sr="Da li možemo odmah proveriti istoriju prijava i prijaviti incident?" data-en="Can we immediately review the sign-in history and report the incident?">Da li možemo odmah proveriti istoriju prijava i prijaviti incident?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Ako prompt nisi ti pokrenuo, nijedno odobrenje nije bezbedno." data-en="If you did not trigger the prompt, no approval is safe.">Ako prompt nisi ti pokrenuo, nijedno odobrenje nije bezbedno.</li>
            <li data-sr="Ne treba da potvrdiš napad da bi ga zaustavio, treba da prekineš tok." data-en="You do not need to approve an attack to stop it; you need to break the flow.">Ne treba da potvrdiš napad da bi ga zaustavio, treba da prekineš tok.</li>
            <li data-sr="Prvo menjamo lozinku i gledamo istoriju prijava, pa tek onda slušamo bilo kakvo objašnjenje." data-en="First we change the password and review sign-in history, and only then consider any explanation.">Prvo menjamo lozinku i gledamo istoriju prijava, pa tek onda slušamo bilo kakvo objašnjenje.</li>
            <li data-sr="Jedan pogrešan klik je dovoljan, zato sada ništa ne odobravamo." data-en="One wrong tap is enough, so we approve nothing right now.">Jedan pogrešan klik je dovoljan, zato sada ništa ne odobravamo.</li>
          </ul>
        </div>
      </div>
    </section>
`
};
