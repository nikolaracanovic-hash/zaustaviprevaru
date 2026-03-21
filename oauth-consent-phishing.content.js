window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["oauth-consent-phishing"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi fišing kroz OAuth dozvole" data-en="Introduction: how OAuth consent phishing works">Uvod: kako radi fišing kroz OAuth dozvole</h2>
      <p data-sr="Kod ove prevare napadač ne traži lozinku direktno. Umesto toga, traži da žrtva odobri aplikaciji pristup pošti, kalendaru, fajlovima, kontaktima ili profilu kroz legitiman ekran dozvola koji liči na Microsoft, Google ili drugi cloud servis. Ekran može biti pravi, ali je aplikacija zlonamerna." data-en="In this scam, the attacker does not ask for the password directly. Instead, they ask the victim to approve an app's access to mail, calendar, files, contacts, or profile data through a legitimate-looking consent screen such as Microsoft, Google, or another cloud service. The screen can be real while the app is malicious.">Kod ove prevare napadač ne traži lozinku direktno. Umesto toga, traži da žrtva odobri aplikaciji pristup pošti, kalendaru, fajlovima, kontaktima ili profilu kroz legitiman ekran dozvola koji liči na Microsoft, Google ili drugi cloud servis. Ekran može biti pravi, ali je aplikacija zlonamerna.</p>
      <p data-sr="Zato je obrazac opasan u firmama i administraciji: korisnik vidi poznati brend, poznat login okvir i listu dozvola koju često ne čita do kraja. Posle jednog klika napadač može dobiti dugotrajan pristup bez promene lozinke, pa klasična reakcija promeni password nekad ne rešava sve." data-en="That is why the pattern is dangerous in companies and administration: the user sees a known brand, a familiar login frame, and a list of permissions they often do not read fully. After one click, the attacker can get long-term access without any password change, so the classic reaction of changing the password does not always solve everything.">Zato je obrazac opasan u firmama i administraciji: korisnik vidi poznati brend, poznat login okvir i listu dozvola koju često ne čita do kraja. Posle jednog klika napadač može dobiti dugotrajan pristup bez promene lozinke, pa klasična reakcija promeni password nekad ne rešava sve.</p>
      <div class="callout" data-sr="<strong>Model:</strong> poruka ili dokument → link ka aplikaciji → ekran dozvola → klik na Accept → pristup nalogu, pošti ili fajlovima → tiha zloupotreba." data-en="<strong>Model:</strong> message or document → app link → consent screen → click on Accept → access to account, mail, or files → silent abuse."><strong>Model:</strong> poruka ili dokument → link ka aplikaciji → ekran dozvola → klik na Accept → pristup nalogu, pošti ili fajlovima → tiha zloupotreba.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> odobravanje dozvola aplikaciji koju korisnik nije proverio nezavisno." data-en="<strong>Threshold:</strong> granting permissions to an application the user did not verify independently."><strong>Prag:</strong> odobravanje dozvola aplikaciji koju korisnik nije proverio nezavisno.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: zašto ljudi pristanu" data-en="How it works: why people approve it">Kako generalno radi: zašto ljudi pristanu</h2>
      <p data-sr="OAuth ekran izgleda legitimnije od obične fišing forme jer korisnik vidi poznati sistem za prijavu i često misli da time izbegava unošenje lozinke na sumnjivom sajtu. Napadač upravo to koristi: umesto krađe tajne, traži dozvolu. Dozvola deluje tehnički i bezbedno, a zapravo otvara pristup sadržaju naloga." data-en="An OAuth screen looks more legitimate than a standard phishing form because the user sees a familiar sign-in system and often thinks that they are avoiding typing a password on a suspicious site. The attacker uses exactly that perception: instead of stealing a secret, they ask for permission. The permission looks technical and safe while actually opening access to the account content.">OAuth ekran izgleda legitimnije od obične fišing forme jer korisnik vidi poznati sistem za prijavu i često misli da time izbegava unošenje lozinke na sumnjivom sajtu. Napadač upravo to koristi: umesto krađe tajne, traži dozvolu. Dozvola deluje tehnički i bezbedno, a zapravo otvara pristup sadržaju naloga.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gradi legitimitet" data-en="What creates legitimacy">Šta gradi legitimitet</div>
          <ul class="bullets">
            <li data-sr="Korisnik vidi poznat Microsoft, Google ili drugi cloud ekran." data-en="The user sees a familiar Microsoft, Google, or other cloud screen.">Korisnik vidi poznat Microsoft, Google ili drugi cloud ekran.</li>
            <li data-sr="Aplikacija je predstavljena kao dokument, HR alat, sigurnosna provera ili workflow dodatak." data-en="The application is presented as a document tool, HR tool, security check, or workflow add-on.">Aplikacija je predstavljena kao dokument, HR alat, sigurnosna provera ili workflow dodatak.</li>
            <li data-sr="Dozvole su opisane birokratskim ili tehničkim jezikom koji ljudi ne čitaju pažljivo." data-en="Permissions are described in bureaucratic or technical language that people do not read carefully.">Dozvole su opisane birokratskim ili tehničkim jezikom koji ljudi ne čitaju pažljivo.</li>
            <li data-sr="Nema direktnog traženja lozinke na stranom formularu, pa oprez pada." data-en="There is no direct password request on a foreign form, so caution drops.">Nema direktnog traženja lozinke na stranom formularu, pa oprez pada.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Šta napadač dobija" data-en="What the attacker gets">Šta napadač dobija</div>
          <ul class="bullets">
            <li data-sr="Pristup pošti i pretrazi poruka bez klasičnog login scenarija." data-en="Access to mail and message search without a classic login scenario.">Pristup pošti i pretrazi poruka bez klasičnog login scenarija.</li>
            <li data-sr="Pristup fajlovima, kontaktima, kalendaru ili profilu zavisno od scope dozvola." data-en="Access to files, contacts, calendar, or profile data depending on permission scopes.">Pristup fajlovima, kontaktima, kalendaru ili profilu zavisno od scope dozvola.</li>
            <li data-sr="Tihi ulaz koji dugo ostaje neprimećen jer lozinka nije menjana." data-en="A quiet entry that can remain unnoticed because the password was never changed.">Tihi ulaz koji dugo ostaje neprimećen jer lozinka nije menjana.</li>
            <li data-sr="Osnovu za BEC, dalji fišing, interne prevare i krađu dokumenata." data-en="A base for BEC, further phishing, internal fraud, and document theft.">Osnovu za BEC, dalji fišing, interne prevare i krađu dokumenata.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching).">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Tok je tih i zato opasan: nema drame, nema sigurnog računa, nema nužno ni sumnjivog formulara. Dovoljan je jedan klik na dozvole." data-en="The flow is quiet and that makes it dangerous: no drama, no safe account, and often no suspicious form. One click on permissions is enough.">Tok je tih i zato opasan: nema drame, nema sigurnog računa, nema nužno ni sumnjivog formulara. Dovoljan je jedan klik na dozvole.</p>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Mamac: dokument, poziv ili zadatak" data-en="Phase 1 — Bait: document, invitation, or task">Faza 1 — Mamac: dokument, poziv ili zadatak</h3>
        <p data-sr="Ulaz dolazi kao poslovni dokument, HR onboarding, deljeni fajl, zahtev za pregled fakture, bezbednosno upozorenje ili aplikacija za saradnju. Poruka je uverljiva jer se oslanja na radnu rutinu: otvori, pregledaj, potvrdi, poveži nalog." data-en="The entry arrives as a business document, HR onboarding flow, shared file, request to review an invoice, security notice, or collaboration app. The message is convincing because it relies on work routine: open, review, confirm, connect your account.">Ulaz dolazi kao poslovni dokument, HR onboarding, deljeni fajl, zahtev za pregled fakture, bezbednosno upozorenje ili aplikacija za saradnju. Poruka je uverljiva jer se oslanja na radnu rutinu: otvori, pregledaj, potvrdi, poveži nalog.</p>
        <ul class="bullets">
          <li data-sr="Link je upakovan kao deo normalnog posla, ne kao alarm." data-en="The link is packaged as part of normal work, not as an alarm.">Link je upakovan kao deo normalnog posla, ne kao alarm.</li>
          <li data-sr="Naziv aplikacije deluje funkcionalno i dosadno, što smanjuje sumnju." data-en="The app name sounds functional and boring, which lowers suspicion.">Naziv aplikacije deluje funkcionalno i dosadno, što smanjuje sumnju.</li>
          <li data-sr="Poruka često koristi kolegu, partnera ili HR kao legitiman izvor." data-en="The message often uses a colleague, partner, or HR as the legitimate-looking source.">Poruka često koristi kolegu, partnera ili HR kao legitiman izvor.</li>
          <li data-sr="Korisnik očekuje brz klik i nastavak rada, ne proveru aplikacije." data-en="The user expects a quick click and a return to work, not an app investigation.">Korisnik očekuje brz klik i nastavak rada, ne proveru aplikacije.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik klikne na link ka aplikaciji ili dokumentu." data-en="<strong>Threshold:</strong> the user clicks the app or document link."><strong>Prag faze:</strong> korisnik klikne na link ka aplikaciji ili dokumentu.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Poznat ekran za prijavu i dozvole" data-en="Phase 2 — Familiar sign-in and consent screen">Faza 2 — Poznat ekran za prijavu i dozvole</h3>
        <p data-sr="Korisnik vidi poznat identitet provajdera. Nekad je već prijavljen, pa preskače login i dolazi direktno do ekrana dozvola. To dodatno pojačava osećaj da je sve regularno, jer sam ekran ne mora biti falsifikovan." data-en="The user sees a familiar identity-provider flow. Sometimes they are already signed in, so the login is skipped and the consent screen appears directly. That further reinforces the feeling that everything is legitimate because the screen itself does not have to be fake.">Korisnik vidi poznat identitet provajdera. Nekad je već prijavljen, pa preskače login i dolazi direktno do ekrana dozvola. To dodatno pojačava osećaj da je sve regularno, jer sam ekran ne mora biti falsifikovan.</p>
        <ul class="bullets">
          <li data-sr="Brend i URL izgledaju legitimno ili dovoljno legitimno." data-en="The brand and URL look legitimate or legitimate enough.">Brend i URL izgledaju legitimno ili dovoljno legitimno.</li>
          <li data-sr="Fokus prelazi sa pitanja ko šalje na pitanje koje dugme treba kliknuti." data-en="The focus shifts from who sent this to which button should I click.">Fokus prelazi sa pitanja ko šalje na pitanje koje dugme treba kliknuti.</li>
          <li data-sr="Dozvole deluju kao tehnički detalj, ne kao odluka o pristupu." data-en="Permissions look like a technical detail, not a decision about access.">Dozvole deluju kao tehnički detalj, ne kao odluka o pristupu.</li>
          <li data-sr="Korisnik ima osećaj da i dalje ostaje u okviru zvanične platforme." data-en="The user feels they are still inside the official platform.">Korisnik ima osećaj da i dalje ostaje u okviru zvanične platforme.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik više ne razmatra aplikaciju kao nepoznat entitet, već kao tehnički korak." data-en="<strong>Threshold:</strong> the user no longer treats the app as an unknown entity but as a technical step."><strong>Prag faze:</strong> korisnik više ne razmatra aplikaciju kao nepoznat entitet, već kao tehnički korak.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Dozvole su predstavljene kao sitnica" data-en="Phase 3 — Permissions are framed as a small detail">Faza 3 — Dozvole su predstavljene kao sitnica</h3>
        <p data-sr="Najopasniji trenutak je kada se ozbiljne dozvole predstave kao obična potvrda. Aplikacija može tražiti čitanje pošte, pristup fajlovima, slanje poruka, održavanje pristupa kada nisi prisutan, ili pregled osnovnog profila. Korisnik vidi dugačak tekst i kratko dugme Accept." data-en="The most dangerous moment is when serious permissions are presented as a routine confirmation. The app may ask to read mail, access files, send messages, keep access when you are offline, or view the basic profile. The user sees a long text block and a short Accept button.">Najopasniji trenutak je kada se ozbiljne dozvole predstave kao obična potvrda. Aplikacija može tražiti čitanje pošte, pristup fajlovima, slanje poruka, održavanje pristupa kada nisi prisutan, ili pregled osnovnog profila. Korisnik vidi dugačak tekst i kratko dugme Accept.</p>
        <ul class="bullets">
          <li data-sr="Opis aplikacije glumi da su dozvole potrebne za pregled dokumenta ili workflow." data-en="The app description pretends the permissions are needed for a document view or workflow.">Opis aplikacije glumi da su dozvole potrebne za pregled dokumenta ili workflow.</li>
          <li data-sr="Korisnik retko čita scope dozvole do kraja i retko zna šta znače." data-en="Users rarely read the permission scopes to the end and rarely know what they mean.">Korisnik retko čita scope dozvole do kraja i retko zna šta znače.</li>
          <li data-sr="Prava koja traju i van sesije deluju neprimetno, a veoma su opasna." data-en="Permissions that persist beyond the session look subtle while being highly dangerous.">Prava koja traju i van sesije deluju neprimetno, a veoma su opasna.</li>
          <li data-sr="Jedno Allow može otvoriti pristup bez potrebe za novim kodovima i lozinkama." data-en="One Allow can open access without any new codes or passwords.">Jedno Allow može otvoriti pristup bez potrebe za novim kodovima i lozinkama.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
            <li><a href="fake-hr-scam.html" data-sr="Lažni HR" data-en="Fake HR scam">Lažni HR</a></li>
            <li><a href="email-account-compromise.html" data-sr="Kompromitacija imejl naloga" data-en="Email account compromise">Kompromitacija imejl naloga</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik klikne na Accept ili Allow bez nezavisne provere aplikacije i dozvola." data-en="<strong>Threshold:</strong> the user clicks Accept or Allow without independently verifying the application and its permissions."><strong>Prag faze:</strong> korisnik klikne na Accept ili Allow bez nezavisne provere aplikacije i dozvola.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Tihi pristup nalogu i sadržaju" data-en="Phase 4 — Quiet access to the account and content">Faza 4 — Tihi pristup nalogu i sadržaju</h3>
        <p data-sr="Posle odobrenja napadač može čitati poštu, tražiti fakture, reset linkove, kontakte, interne poruke i deljene fajlove. Ovo nije klasično preuzimanje naloga koje odmah menja lozinku. Napad često ostaje tih, jer korisnik nastavlja normalno da koristi nalog i ne vidi očigledan incident." data-en="After approval, the attacker can read mail, search invoices, reset links, contacts, internal messages, and shared files. This is not the classic form of account takeover that immediately changes the password. The attack often stays quiet because the user keeps using the account normally and does not see an obvious incident.">Posle odobrenja napadač može čitati poštu, tražiti fakture, reset linkove, kontakte, interne poruke i deljene fajlove. Ovo nije klasično preuzimanje naloga koje odmah menja lozinku. Napad često ostaje tih, jer korisnik nastavlja normalno da koristi nalog i ne vidi očigledan incident.</p>
        <ul class="bullets">
          <li data-sr="Napadač može pratiti komunikaciju i čekati pravi trenutak za zloupotrebu." data-en="The attacker can monitor communications and wait for the right moment to abuse them.">Napadač može pratiti komunikaciju i čekati pravi trenutak za zloupotrebu.</li>
          <li data-sr="Pristup pošti otvara prostor za BEC, promenu instrukcija za uplatu i krađu dokumenata." data-en="Mail access opens space for BEC, payment instruction changes, and document theft.">Pristup pošti otvara prostor za BEC, promenu instrukcija za uplatu i krađu dokumenata.</li>
          <li data-sr="Ako postoji pristup cloud fajlovima, napadač može čitati, kopirati i deliti interne dokumente." data-en="If cloud file access exists, the attacker can read, copy, and share internal documents.">Ako postoji pristup cloud fajlovima, napadač može čitati, kopirati i deliti interne dokumente.</li>
          <li data-sr="Korisnik često ne menja ništa jer veruje da nije dao lozinku i da zato nije ugrožen." data-en="Users often change nothing because they believe they did not give away a password and therefore are not compromised.">Korisnik često ne menja ništa jer veruje da nije dao lozinku i da zato nije ugrožen.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> aplikacija ostane aktivna dovoljno dugo da napadač prikupi poruke, fajlove ili poslovni kontekst." data-en="<strong>Threshold:</strong> the application stays active long enough for the attacker to collect mail, files, or business context."><strong>Prag faze:</strong> aplikacija ostane aktivna dovoljno dugo da napadač prikupi poruke, fajlove ili poslovni kontekst.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Zloupotreba kroz poslovni ili privatni kontekst" data-en="Phase 5 — Abuse through business or personal context">Faza 5 — Zloupotreba kroz poslovni ili privatni kontekst</h3>
        <p data-sr="Kad prikupi dovoljno konteksta, napadač prelazi sa pristupa na operaciju. U firmi to može biti lažna faktura, promena IBAN-a, zahtev za hitnu uplatu ili krađa dokumenata. U privatnom kontekstu to mogu biti novi fišing mejlovi, reset lozinki, preuzimanje drugih naloga ili širenje napada na kontakte." data-en="Once enough context is collected, the attacker moves from access to operation. In a company that can mean a fake invoice, IBAN change, urgent payment request, or document theft. In a private context it can mean new phishing emails, password resets, takeover of other accounts, or spreading the attack to contacts.">Kad prikupi dovoljno konteksta, napadač prelazi sa pristupa na operaciju. U firmi to može biti lažna faktura, promena IBAN-a, zahtev za hitnu uplatu ili krađa dokumenata. U privatnom kontekstu to mogu biti novi fišing mejlovi, reset lozinki, preuzimanje drugih naloga ili širenje napada na kontakte.</p>
        <ul class="bullets">
          <li data-sr="Napad je jači jer koristi stvaran sadržaj iz stvarnog naloga." data-en="The attack is stronger because it uses real content from a real account.">Napad je jači jer koristi stvaran sadržaj iz stvarnog naloga.</li>
          <li data-sr="Poruke koje napadač pošalje deluju uverljivo jer prate postojeći kontekst razgovora." data-en="Messages sent by the attacker look convincing because they follow the existing conversation context.">Poruke koje napadač pošalje deluju uverljivo jer prate postojeći kontekst razgovora.</li>
          <li data-sr="Ako je meta firma, posledica može biti finansijska šteta bez ijedne ukradene lozinke." data-en="If the target is a company, the consequence can be financial loss without any stolen password.">Ako je meta firma, posledica može biti finansijska šteta bez ijedne ukradene lozinke.</li>
          <li data-sr="Ako je meta pojedinac, ista dozvola može otvoriti pristup drugim servisima kroz reset i povezane naloge." data-en="If the target is an individual, the same permission can open other services through resets and linked accounts.">Ako je meta pojedinac, ista dozvola može otvoriti pristup drugim servisima kroz reset i povezane naloge.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="business-email-compromise.html" data-sr="Business email compromise" data-en="Business email compromise">Business email compromise</a></li>
            <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
            <li><a href="invoice-fraud.html" data-sr="Prevara sa fakturama" data-en="Invoice fraud">Prevara sa fakturama</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> napadač iskoristi pristup za slanje, izmenu ili krađu sadržaja iz stvarnog naloga." data-en="<strong>Threshold:</strong> the attacker uses the access to send, alter, or steal content from a real account."><strong>Prag faze:</strong> napadač iskoristi pristup za slanje, izmenu ili krađu sadržaja iz stvarnog naloga.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Sumnja, skrivanje tragova i drugi napad" data-en="Phase 6 — Suspicion, cleanup, and second attack">Faza 6 — Sumnja, skrivanje tragova i drugi napad</h3>
        <p data-sr="Kad se posumnja na incident, problem je što promena lozinke nije dovoljna ako je zlonamerna aplikacija i dalje autorizovana. Zato se desi da se korisnik oporavi, a napadač i dalje ima pristup. Posle toga mogu stići nove poruke o bezbednosti, povraćaju ili čišćenju aplikacije, što je samo drugi napad." data-en="When suspicion appears, the problem is that changing the password is not enough if the malicious application is still authorized. That is why a user may think they recovered while the attacker still has access. After that, new security, recovery, or cleanup messages may appear, and that is simply a second attack.">Kad se posumnja na incident, problem je što promena lozinke nije dovoljna ako je zlonamerna aplikacija i dalje autorizovana. Zato se desi da se korisnik oporavi, a napadač i dalje ima pristup. Posle toga mogu stići nove poruke o bezbednosti, povraćaju ili čišćenju aplikacije, što je samo drugi napad.</p>
        <ul class="bullets">
          <li data-sr="Treba proveriti listu odobrenih aplikacija, ne samo login istoriju." data-en="The list of approved apps must be checked, not just the login history.">Treba proveriti listu odobrenih aplikacija, ne samo login istoriju.</li>
          <li data-sr="Korisnik često ne zna gde se takve aplikacije uopšte uklanjaju." data-en="Users often do not know where such applications are removed.">Korisnik često ne zna gde se takve aplikacije uopšte uklanjaju.</li>
          <li data-sr="Ako je firmi ukraden kontekst, posledice se mogu pojavljivati i danima kasnije." data-en="If company context was stolen, consequences may surface days later.">Ako je firmi ukraden kontekst, posledice se mogu pojavljivati i danima kasnije.</li>
          <li data-sr="Novi mejl sa bezbednosnom pomoći treba tretirati kao novi rizik, ne kao spas." data-en="A new email offering security help should be treated as a new risk, not as a rescue.">Novi mejl sa bezbednosnom pomoći treba tretirati kao novi rizik, ne kao spas.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> incident ostane nepotpuno saniran jer aplikacija i dalje ima dozvole." data-en="<strong>Threshold:</strong> the incident remains only partially remediated because the application still holds permissions."><strong>Prag faze:</strong> incident ostane nepotpuno saniran jer aplikacija i dalje ima dozvole.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Aplikacija traži pristup pošti ili fajlovima samo da bi otvorila jedan dokument." data-en="The app requests mail or file access just to open one document.">Aplikacija traži pristup pošti ili fajlovima samo da bi otvorila jedan dokument.</li>
        <li data-sr="Naziv aplikacije zvuči generički i ne odgovara firmi koja šalje link." data-en="The app name sounds generic and does not match the company that sent the link.">Naziv aplikacije zvuči generički i ne odgovara firmi koja šalje link.</li>
        <li data-sr="Dozvole uključuju čitanje poruka, trajni pristup ili slanje u tvoje ime." data-en="The permissions include reading messages, persistent access, or sending on your behalf.">Dozvole uključuju čitanje poruka, trajni pristup ili slanje u tvoje ime.</li>
        <li data-sr="Link stiže kroz HR, shared doc ili fakturu, ali vodi ka nepoznatoj aplikaciji." data-en="The link arrives through HR, a shared doc, or an invoice, but leads to an unknown app.">Link stiže kroz HR, shared doc ili fakturu, ali vodi ka nepoznatoj aplikaciji.</li>
        <li data-sr="Korisnik nije očekivao povezivanje novog alata sa nalogom baš tog dana." data-en="The user was not expecting to connect a new tool to the account that day.">Korisnik nije očekivao povezivanje novog alata sa nalogom baš tog dana.</li>
        <li data-sr="Posle klika nema jasnog razloga zašto aplikaciji treba toliki opseg pristupa." data-en="After the click, there is no clear reason why the app needs such broad access.">Posle klika nema jasnog razloga zašto aplikaciji treba toliki opseg pristupa.</li>
        <li data-sr="U nalogu se pojavi odobrena aplikacija koju niko iz tima ne prepoznaje." data-en="An approved application appears in the account that nobody on the team recognizes.">U nalogu se pojavi odobrena aplikacija koju niko iz tima ne prepoznaje.</li>
        <li data-sr="Sumnjive poruke nastaju iako lozinka nije menjana i MFA nije pala." data-en="Suspicious activity appears even though the password was not changed and MFA did not fail.">Sumnjive poruke nastaju iako lozinka nije menjana i MFA nije pala.</li>
        <li data-sr="Posle promene lozinke incident se nastavlja, što znači da pristup verovatno dolazi drugim putem." data-en="The incident continues after a password change, which means access likely comes through another path.">Posle promene lozinke incident se nastavlja, što znači da pristup verovatno dolazi drugim putem.</li>
        <li data-sr="Mejl ili chat guraju na brzu potvrdu aplikacije bez internog dogovora i provere." data-en="The email or chat pushes for quick app approval without internal agreement and verification.">Mejl ili chat guraju na brzu potvrdu aplikacije bez internog dogovora i provere.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <ol class="steps">
        <li data-sr="Pre klika proveri da li zaista očekuješ taj dokument, aplikaciju ili onboarding." data-en="Before clicking, verify that you were actually expecting that document, app, or onboarding flow.">Pre klika proveri da li zaista očekuješ taj dokument, aplikaciju ili onboarding.</li>
        <li data-sr="Proveri naziv aplikacije i vlasnika pre nego što odobriš dozvole." data-en="Check the app name and owner before approving permissions.">Proveri naziv aplikacije i vlasnika pre nego što odobriš dozvole.</li>
        <li data-sr="Čitaj scope dozvole kao zahtev za pristup, ne kao tehnički detalj." data-en="Read permission scopes as access requests, not as a technical detail.">Čitaj scope dozvole kao zahtev za pristup, ne kao tehnički detalj.</li>
        <li data-sr="Ako aplikacija traži poštu, fajlove ili trajni pristup, proveri sa IT ili pošiljaocem drugim kanalom." data-en="If the app asks for mail, files, or persistent access, verify with IT or the sender through another channel.">Ako aplikacija traži poštu, fajlove ili trajni pristup, proveri sa IT ili pošiljaocem drugim kanalom.</li>
        <li data-sr="Redovno proveravaj listu odobrenih aplikacija u nalogu." data-en="Regularly review the list of approved applications in the account.">Redovno proveravaj listu odobrenih aplikacija u nalogu.</li>
        <li data-sr="Ako sumnja postoji, ukloni aplikaciju i opozovi sesije pre nego što nastaviš rad." data-en="If there is suspicion, remove the app and revoke sessions before continuing work.">Ako sumnja postoji, ukloni aplikaciju i opozovi sesije pre nego što nastaviš rad.</li>
        <li data-sr="Promena lozinke je korisna, ali nije dovoljna ako su dozvole ostale aktivne." data-en="Changing the password helps, but it is not enough if permissions remain active.">Promena lozinke je korisna, ali nije dovoljna ako su dozvole ostale aktivne.</li>
        <li data-sr="Za poslovne naloge proveri i pravila prosleđivanja, deljene foldere i sumnjive integracije." data-en="For business accounts, also review forwarding rules, shared folders, and suspicious integrations.">Za poslovne naloge proveri i pravila prosleđivanja, deljene foldere i sumnjive integracije.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja pre odobravanja aplikacije" data-en="Checklist: 12 questions before approving an app">Checklista: 12 pitanja pre odobravanja aplikacije</h2>
      <ul class="bullets">
        <li data-sr="Da li očekujem baš ovu aplikaciju?" data-en="Am I expecting this exact application?">Da li očekujem baš ovu aplikaciju?</li>
        <li data-sr="Da li znam ko je vlasnik ili izdavač aplikacije?" data-en="Do I know who owns or publishes the application?">Da li znam ko je vlasnik ili izdavač aplikacije?</li>
        <li data-sr="Da li aplikacija traži više pristupa nego što je potrebno za zadatak?" data-en="Is the application asking for more access than the task requires?">Da li aplikacija traži više pristupa nego što je potrebno za zadatak?</li>
        <li data-sr="Da li se dozvole odnose na poštu, fajlove, kontakte ili slanje u moje ime?" data-en="Do the permissions involve mail, files, contacts, or sending on my behalf?">Da li se dozvole odnose na poštu, fajlove, kontakte ili slanje u moje ime?</li>
        <li data-sr="Da li je pošiljalac tražio ovo drugim, proverljivim kanalom?" data-en="Did the sender request this through another verifiable channel?">Da li je pošiljalac tražio ovo drugim, proverljivim kanalom?</li>
        <li data-sr="Da li bih istu dozvolu dao nepoznatoj osobi da me pita usmeno?" data-en="Would I give the same permission if an unknown person asked me verbally?">Da li bih istu dozvolu dao nepoznatoj osobi da me pita usmeno?</li>
        <li data-sr="Da li mogu prvo otvoriti dokument bez povezivanja cele pošte ili celog diska?" data-en="Can I first open the document without connecting my whole mail or drive?">Da li mogu prvo otvoriti dokument bez povezivanja cele pošte ili celog diska?</li>
        <li data-sr="Da li naziv aplikacije odgovara kompaniji ili timu koji je pominje?" data-en="Does the application name match the company or team that mentions it?">Da li naziv aplikacije odgovara kompaniji ili timu koji je pominje?</li>
        <li data-sr="Da li dozvola uključuje trajni pristup i kada nisam aktivan?" data-en="Does the permission include persistent access when I am offline?">Da li dozvola uključuje trajni pristup i kada nisam aktivan?</li>
        <li data-sr="Da li je link stigao u trenutku hitnosti, bez vremena za proveru?" data-en="Did the link arrive in a moment of urgency with no time to verify?">Da li je link stigao u trenutku hitnosti, bez vremena za proveru?</li>
        <li data-sr="Da li znam gde kasnije mogu da uklonim tu aplikaciju ako se predomislim?" data-en="Do I know where I can later remove that application if I change my mind?">Da li znam gde kasnije mogu da uklonim tu aplikaciju ako se predomislim?</li>
        <li data-sr="Da li sam proverio da u nalogu već ne postoji slična sumnjiva aplikacija?" data-en="Have I checked whether a similar suspicious application already exists in the account?">Da li sam proverio da u nalogu već ne postoji slična sumnjiva aplikacija?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Odmah ukloni sumnjivu aplikaciju iz liste odobrenih aplikacija." data-en="Immediately remove the suspicious application from the list of approved apps.">Odmah ukloni sumnjivu aplikaciju iz liste odobrenih aplikacija.</li>
        <li data-sr="Opozovi aktivne sesije i proveri pravila prosleđivanja, deljenja i automatizacije." data-en="Revoke active sessions and review forwarding, sharing, and automation rules.">Opozovi aktivne sesije i proveri pravila prosleđivanja, deljenja i automatizacije.</li>
        <li data-sr="Promeni lozinku i proveri MFA podešavanja, ali ne staj tu." data-en="Change the password and review MFA settings, but do not stop there.">Promeni lozinku i proveri MFA podešavanja, ali ne staj tu.</li>
        <li data-sr="Pregledaj poštu, fajlove i istoriju pristupa radi sumnjivih radnji i preuzetih dokumenata." data-en="Review mail, files, and access history for suspicious actions and accessed documents.">Pregledaj poštu, fajlove i istoriju pristupa radi sumnjivih radnji i preuzetih dokumenata.</li>
        <li data-sr="Ako je u pitanju poslovni nalog, obavesti IT i tim pre nego što napadač iskoristi kontekst za novu prevaru." data-en="If this is a business account, notify IT and the team before the attacker uses the context for another scam.">Ako je u pitanju poslovni nalog, obavesti IT i tim pre nego što napadač iskoristi kontekst za novu prevaru.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Koja je tačno aplikacija odobrena i koje dozvole ima?" data-en="Which exact application was approved and which permissions does it have?">Koja je tačno aplikacija odobrena i koje dozvole ima?</li>
            <li data-sr="Da li je iko drugi u timu očekivao tu aplikaciju ili taj dokument?" data-en="Was anyone else in the team expecting that application or document?">Da li je iko drugi u timu očekivao tu aplikaciju ili taj dokument?</li>
            <li data-sr="Da li je posle odobrenja bilo čudnih mejlova, pravila prosleđivanja ili zahteva za uplatu?" data-en="After the approval, were there strange emails, forwarding rules, or payment requests?">Da li je posle odobrenja bilo čudnih mejlova, pravila prosleđivanja ili zahteva za uplatu?</li>
            <li data-sr="Da li je sumnjiva aplikacija i dalje aktivna u nalogu?" data-en="Is the suspicious application still active in the account?">Da li je sumnjiva aplikacija i dalje aktivna u nalogu?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Nije problem samo lozinka, hajde da proverimo i koje aplikacije imaju pristup." data-en="The problem is not only the password; let’s also review which apps have access.">Nije problem samo lozinka, hajde da proverimo i koje aplikacije imaju pristup.</li>
            <li data-sr="Ako aplikacija nije proverena, jedno Accept vredi kao otvaranje vrata." data-en="If the app was never verified, one Accept is like opening the door.">Ako aplikacija nije proverena, jedno Accept vredi kao otvaranje vrata.</li>
            <li data-sr="Prvo uklanjamo aplikaciju i čuvamo tragove, pa tek onda čistimo ostalo." data-en="First we remove the app and preserve the evidence, then we clean up the rest.">Prvo uklanjamo aplikaciju i čuvamo tragove, pa tek onda čistimo ostalo.</li>
            <li data-sr="Promena lozinke je dobar početak, ali nije kraj ako su dozvole ostale aktivne." data-en="Changing the password is a good start, but not the end if permissions remain active.">Promena lozinke je dobar početak, ali nije kraj ako su dozvole ostale aktivne.</li>
          </ul>
        </div>
      </div>
    </section>
`
};
