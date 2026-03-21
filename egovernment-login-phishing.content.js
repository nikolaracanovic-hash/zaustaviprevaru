window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["egovernment-login-phishing"] = {
  raw_html: `

    <section class="card">
      <h2 data-sr="Uvod: lažna prijava na e‑upravu" data-en="Introduction: fake e‑government login">Uvod: lažna prijava na e‑upravu</h2>

      <p data-sr="Poruka glumi obaveštenje sa portala za zdravstvo, porez, penziju ili lokalnu upravu i vodi na lažnu prijavu radi krađe naloga i ličnih podataka." data-en="The message pretends to be from a health, tax, pension, or local government portal and leads to a fake login to steal account and personal data.">Poruka glumi obaveštenje sa portala za zdravstvo, porez, penziju ili lokalnu upravu i vodi na lažnu prijavu radi krađe naloga i ličnih podataka.</p>
      <p data-sr="Žrtva veruje da je u zvaničnom toku jer tema odgovara birokratiji koju već očekuje." data-en="The victim believes they are in an official flow because the topic matches bureaucracy they already expect.">Žrtva veruje da je u zvaničnom toku jer tema odgovara birokratiji koju već očekuje.</p>
      <div class="callout" data-sr="<strong>Model:</strong> lažno obaveštenje → link → lažna prijava → krađa naloga i podataka." data-en="<strong>Model:</strong> fake notice → link → fake login → account and data theft."><strong>Model:</strong> lažno obaveštenje → link → lažna prijava → krađa naloga i podataka.</div>
    </section>

    <section class="card">
      <h2 data-sr="Zašto prolazi" data-en="Why it works">Zašto prolazi</h2>

      <p data-sr="Državni brendovi nose autoritet. Hitnost oko rokova i kazni skraćuje proveru domena." data-en="Government brands carry authority. Deadlines and penalty urgency shorten domain checks.">Državni brendovi nose autoritet. Hitnost oko rokova i kazni skraćuje proveru domena.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Signali" data-en="Signals">Signali</div>
          <ul class="bullets">
            <li data-sr="Generičko obaveštenje sa portala bez broja predmeta." data-en="Generic portal notice without a case number.">Generičko obaveštenje sa portala bez broja predmeta.</li>
            <li data-sr="Link sa skraćivačem ili tudjim domenom." data-en="Link with a shortener or foreign domain.">Link sa skraćivačem ili tudjim domenom.</li>
            <li data-sr="Zahtev za odmah prijavu." data-en="Immediate sign-in demand.">Zahtev za odmah prijavu.</li>
            <li data-sr="Prilog HTML ili PDF sa ugrađenim linkom." data-en="HTML or PDF attachment with embedded link.">Prilog HTML ili PDF sa ugrađenim linkom.</li>
      </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Cilj" data-en="Goal">Cilj</div>
          <ul class="bullets">
            <li data-sr="Krađa kredencijala portala." data-en="Portal credential theft.">Krađa kredencijala portala.</li>
            <li data-sr="Prikupljanje ličnog broja, adrese, podataka o primanjima." data-en="Collecting ID numbers, address, income data.">Prikupljanje ličnog broja, adrese, podataka o primanjima.</li>
            <li data-sr="Korišćenje naloga za nove fišing poruke." data-en="Using the account for new phishing messages.">Korišćenje naloga za nove fišing poruke.</li>
            <li data-sr="Priprema za prevaru povratom ili taksa šemu." data-en="Preparing refund or fee scams.">Priprema za prevaru povratom ili taksa šemu.</li>
      </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching).">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Jedna ukradena prijava često vodi u druge servise resetom." data-en="One stolen login often leads to other services via resets.">Jedna ukradena prijava često vodi u druge servise resetom.</p>
      <article class="phase ">
        <h3 class="phase-title" data-sr="Faza 1 — Ulaz: poruka, oglas ili poziv" data-en="Phase 1 — Entry: message, ad, or call">Faza 1 — Ulaz: poruka, oglas ili poziv</h3>
        <p data-sr="Stiže SMS ili imejl da morate potvrditi podatke na portalu zbog ažuriranja zakona ili roka." data-en="SMS or email arrives saying you must confirm data on the portal due to a law update or deadline.">Stiže SMS ili imejl da morate potvrditi podatke na portalu zbog ažuriranja zakona ili roka.</p>
        <p data-sr="Korisnik veruje da je u zvaničnom toku jer tema odgovara trenutnoj brigi." data-en="The user believes they are in an official flow because the topic matches a current worry.">Korisnik veruje da je u zvaničnom toku jer tema odgovara trenutnoj brigi.</p>
        <ul class="bullets">
            <li data-sr="Tema pogađa novac, nalog, porez ili dostavu." data-en="The topic hits money, account, tax, or delivery.">Tema pogađa novac, nalog, porez ili dostavu.</li>
            <li data-sr="Link ili oglas izgleda hitno ili koristan." data-en="The link or ad looks urgent or useful.">Link ili oglas izgleda hitno ili koristan.</li>
            <li data-sr="Domen na prvi pogled liči na pravi servis." data-en="The domain at first glance resembles a real service.">Domen na prvi pogled liči na pravi servis.</li>
            <li data-sr="Mobilni prikaz skriva deo adrese." data-en="Mobile view hides part of the address.">Mobilni prikaz skriva deo adrese.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta odluči da klikne umesto da prvo otvori zvaničnu aplikaciju." data-en="<strong>Threshold:</strong> the target decides to click instead of opening the official app first."><strong>Prag faze:</strong> meta odluči da klikne umesto da prvo otvori zvaničnu aplikaciju.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Lažna stranica ili forma" data-en="Phase 2 — Fake page or form">Faza 2 — Lažna stranica ili forma</h3>
        <p data-sr="Otvara se stranica koja imitira prijavu, potvrdu ili uplatu." data-en="A page opens that mimics sign-in, confirmation, or payment.">Otvara se stranica koja imitira prijavu, potvrdu ili uplatu.</p>
        <ul class="bullets">
            <li data-sr="Logo i boje kopiraju brend." data-en="Logos and colors copy the brand.">Logo i boje kopiraju brend.</li>
            <li data-sr="Forma traži više polja nego što rutina traži." data-en="The form asks for more fields than routine needs.">Forma traži više polja nego što rutina traži.</li>
            <li data-sr="URL odstaje u detalju od pravog domena." data-en="The URL differs in detail from the real domain.">URL odstaje u detalju od pravog domena.</li>
            <li data-sr="Traži se brz završetak bez pauze." data-en="A fast finish is demanded without a pause.">Traži se brz završetak bez pauze.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
            <li><a href="smishing.html" data-sr="Smišing" data-en="Smishing">Smišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik počne unos u kontrolisanoj formi." data-en="<strong>Threshold:</strong> the user begins entry on a controlled form."><strong>Prag faze:</strong> korisnik počne unos u kontrolisanoj formi.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Prag: osetljivi podaci ili kod" data-en="Phase 3 — Threshold: sensitive data or code">Faza 3 — Prag: osetljivi podaci ili kod</h3>
        <p data-sr="Korisnik unosi korisničko ime, lozinku i ponekad dodatne lične podatke." data-en="The user enters username, password, and sometimes extra personal data.">Korisnik unosi korisničko ime, lozinku i ponekad dodatne lične podatke.</p>
        <p data-sr="Jedan unos može biti dovoljan za pristup ili potvrdu transakcije." data-en="One entry can be enough for access or transaction approval.">Jedan unos može biti dovoljan za pristup ili potvrdu transakcije.</p>
        <ul class="bullets">
            <li data-sr="Lozinka, kartica ili OTP odlaze napadaču." data-en="Password, card, or OTP goes to the attacker.">Lozinka, kartica ili OTP odlaze napadaču.</li>
            <li data-sr="Korisnik misli da zatvara incident." data-en="The user thinks they are closing an incident.">Korisnik misli da zatvara incident.</li>
            <li data-sr="MFA se tretira kao rutinska potvrma." data-en="MFA is treated as a routine confirmation.">MFA se tretira kao rutinska potvrma.</li>
            <li data-sr="Nema drugog kanala provere u tom trenutku." data-en="No second verification channel is used at that moment.">Nema drugog kanala provere u tom trenutku.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> osetljivi podaci ili kod napuste kontrolu korisnika." data-en="<strong>Threshold:</strong> sensitive data or a code leaves the user control."><strong>Prag faze:</strong> osetljivi podaci ili kod napuste kontrolu korisnika.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Zloupotreba naloga ili novca" data-en="Phase 4 — Abuse of account or money">Faza 4 — Zloupotreba naloga ili novca</h3>
        <p data-sr="Napadač prijavljuje se, šalje poruke kontaktima, menja podatke ili potvrđuje uplatu." data-en="The attacker signs in, messages contacts, changes data, or confirms a payment.">Napadač prijavljuje se, šalje poruke kontaktima, menja podatke ili potvrđuje uplatu.</p>
        <ul class="bullets">
            <li data-sr="Šteta može ostati tiha prvih sati." data-en="Harm may stay quiet for the first hours.">Šteta može ostati tiha prvih sati.</li>
            <li data-sr="Koristi se poverenje kontakata prema žrtvi." data-en="Contacts trust toward the victim is abused.">Koristi se poverenje kontakata prema žrtvi.</li>
            <li data-sr="Lanac se širi na druge servise resetom." data-en="The chain spreads to other services via resets.">Lanac se širi na druge servise resetom.</li>
            <li data-sr="Napadač dodaje rezervni broj ili imejl." data-en="The attacker adds a backup number or email.">Napadač dodaje rezervni broj ili imejl.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="tax-refund-phishing.html" data-sr="Poreski povrat" data-en="Tax refund phishing">Poreski povrat</a></li>
            <li><a href="identity-theft.html" data-sr="Krađa identiteta" data-en="Identity theft">Krađa identiteta</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> izvrši se radnja sa finansijskom ili pristupnom posledicom." data-en="<strong>Threshold:</strong> an action runs with financial or access consequences."><strong>Prag faze:</strong> izvrši se radnja sa finansijskom ili pristupnom posledicom.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Otkrivanje" data-en="Phase 5 — Discovery">Faza 5 — Otkrivanje</h3>
        <p data-sr="Žrtva vidi upozorenje banke, čudnu poruku ili blokadu naloga." data-en="The victim sees a bank alert, strange message, or account lock.">Žrtva vidi upozorenje banke, čudnu poruku ili blokadu naloga.</p>
        <ul class="bullets">
            <li data-sr="Vreme se poklapa sa klikom ili pozivom." data-en="Timing matches a click or call.">Vreme se poklapa sa klikom ili pozivom.</li>
            <li data-sr="Korisnik se priseća sumnjivog oglasa ili linka." data-en="The user remembers a suspicious ad or link.">Korisnik se priseća sumnjivog oglasa ili linka.</li>
            <li data-sr="Kontakti javljaju lažne poruke." data-en="Contacts report fake messages.">Kontakti javljaju lažne poruke.</li>
            <li data-sr="Transakcija se ne poklapa sa sećanjem." data-en="A transaction does not match memory.">Transakcija se ne poklapa sa sećanjem.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> žrtva povezuje štetu sa prethodnim korakom." data-en="<strong>Threshold:</strong> the victim connects harm to a prior step."><strong>Prag faze:</strong> žrtva povezuje štetu sa prethodnim korakom.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Sanacija" data-en="Phase 6 — Remediation">Faza 6 — Sanacija</h3>
        <p data-sr="Odjaviti sesije, kontaktirati banku ili servis zvaničnim kanalom, menjati lozinku i MFA, prijaviti incident." data-en="Sign out sessions, contact the bank or service through official channels, change password and MFA, report the incident.">Odjaviti sesije, kontaktirati banku ili servis zvaničnim kanalom, menjati lozinku i MFA, prijaviti incident.</p>
        <p data-sr="Ubuduće: zvanična aplikacija ili ručno ukucan domen, ne oglas u pretrazi." data-en="Going forward: official app or typed domain, not a search ad.">Ubuduće: zvanična aplikacija ili ručno ukucan domen, ne oglas u pretrazi.</p>
        <ul class="bullets">
            <li data-sr="Sačuvati URL i screenshot kao dokaz." data-en="Save URL and screenshots as evidence.">Sačuvati URL i screenshot kao dokaz.</li>
            <li data-sr="Proveriti odobrene aplikacije u nalogu." data-en="Review approved apps in the account.">Proveriti odobrene aplikacije u nalogu.</li>
            <li data-sr="Obavestiti kontakte ako je nalog slao poruke." data-en="Notify contacts if the account sent messages.">Obavestiti kontakte ako je nalog slao poruke.</li>
            <li data-sr="Blokirati karticu ako je uneta." data-en="Block the card if it was entered.">Blokirati karticu ako je uneta.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="government-impersonation.html" data-sr="Državno predstavljanje" data-en="Government impersonation">Državno predstavljanje</a></li>
            <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik prelazi na zvaničan kanal i zatvara pristup." data-en="<strong>Threshold:</strong> the user switches to an official channel and closes access."><strong>Prag faze:</strong> korisnik prelazi na zvaničan kanal i zatvara pristup.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
<ul class="bullets">
            <li data-sr="Link ne poklapa se sa domenom koji koristite u aplikaciji države." data-en="The link does not match the domain you use in the state app.">Link ne poklapa se sa domenom koji koristite u aplikaciji države.</li>
            <li data-sr="Nema broja predmeta koji možete proveriti." data-en="No case number you can verify.">Nema broja predmeta koji možete proveriti.</li>
            <li data-sr="Traži se lozinka na stranici dostigutoj iz poruke." data-en="Password requested on a page reached from a message.">Traži se lozinka na stranici dostigutoj iz poruke.</li>
            <li data-sr="Rok ističe prekonoć." data-en="Deadline expires overnight.">Rok ističe prekonoć.</li>
            <li data-sr="Tekst je preveden loše ili mešovitim jezikom." data-en="Text is poorly translated or mixed language.">Tekst je preveden loše ili mešovitim jezikom.</li>
            <li data-sr="Zahtev za plaćanje administrativne takse u istom mejlu." data-en="Administrative fee requested in the same email.">Zahtev za plaćanje administrativne takse u istom mejlu.</li>
            <li data-sr="Lažni logo sa niskom rezolucijom." data-en="Low-resolution fake logo.">Lažni logo sa niskom rezolucijom.</li>
            <li data-sr="Adresa pošiljaoca je besplatna pošta." data-en="Sender address is free webmail.">Adresa pošiljaoca je besplatna pošta.</li>
            <li data-sr="Isti šablon stiže više ljudi u kući." data-en="The same template arrives to multiple people in a home.">Isti šablon stiže više ljudi u kući.</li>
            <li data-sr="Link vodi na IP adresu umesto imena domena." data-en="Link leads to an IP instead of a domain name.">Link vodi na IP adresu umesto imena domena.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
<ol class="steps">
        <li data-sr="Ulogujte se na portal isključivo preko adrese iz zvaničnog dokumenta ili aplikacije." data-en="Sign in to the portal only via an address from an official document or app.">Ulogujte se na portal isključivo preko adrese iz zvaničnog dokumenta ili aplikacije.</li>
        <li data-sr="Ne koristite link iz SMS-a za prvu prijavu." data-en="Do not use SMS links for first-time login.">Ne koristite link iz SMS-a za prvu prijavu.</li>
        <li data-sr="Uporedite URL sa onim u obrazovnom materijalu institucije." data-en="Compare the URL to material from the institution.">Uporedite URL sa onim u obrazovnom materijalu institucije.</li>
        <li data-sr="Zatražite pomoć u službenom info pultu pre unosa." data-en="Ask for help at an official desk before entering data.">Zatražite pomoć u službenom info pultu pre unosa.</li>
        <li data-sr="Proverite HTTPS i ime sertifikata." data-en="Check HTTPS and certificate name.">Proverite HTTPS i ime sertifikata.</li>
        <li data-sr="Ako sumnjate, pozovite javni kontakt sa .gov ili zvaničnog sajta." data-en="If unsure, call a public contact from .gov or the official site.">Ako sumnjate, pozovite javni kontakt sa .gov ili zvaničnog sajta.</li>
        <li data-sr="Koristite hardverski ključ ili aplikacionu autentifikaciju ako je dostupna." data-en="Use hardware key or app authentication if available.">Koristite hardverski ključ ili aplikacionu autentifikaciju ako je dostupna.</li>
        <li data-sr="Obavestite manje digitalno iskusne članove domaćinstva." data-en="Notify less digitally experienced household members.">Obavestite manje digitalno iskusne članove domaćinstva.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
<ul class="bullets">
            <li data-sr="Da li sam očekivao ovaj rok?" data-en="Was I expecting this deadline?">Da li sam očekivao ovaj rok?</li>
            <li data-sr="Da li postoji isto obaveštenje u mom nalogu na portalu?" data-en="Does the same notice exist in my portal account?">Da li postoji isto obaveštenje u mom nalogu na portalu?</li>
            <li data-sr="Da li je domen identičan onom u uputstvu?" data-en="Is the domain identical to the guide?">Da li je domen identičan onom u uputstvu?</li>
            <li data-sr="Da li traže lozinku preko linka?" data-en="Do they ask for a password via a link?">Da li traže lozinku preko linka?</li>
            <li data-sr="Da li mogu da odložim prijavu?" data-en="Can I delay sign-in?">Da li mogu da odložim prijavu?</li>
            <li data-sr="Da li je pošiljalac adresa institucije?" data-en="Is the sender an institution address?">Da li je pošiljalac adresa institucije?</li>
            <li data-sr="Da li postoji broj za proveru predmeta?" data-en="Is there a case reference to verify?">Da li postoji broj za proveru predmeta?</li>
            <li data-sr="Da li je prilog neočekivan?" data-en="Is the attachment unexpected?">Da li je prilog neočekivan?</li>
            <li data-sr="Da li je tekst previše strašan da bi bio realan?" data-en="Is the text too scary to be real?">Da li je tekst previše strašan da bi bio realan?</li>
            <li data-sr="Da li bih ovo radio na šalteru umesto linka?" data-en="Would I do this at a counter instead of a link?">Da li bih ovo radio na šalteru umesto linka?</li>
            <li data-sr="Da li sam već uneo lozinku?" data-en="Did I already enter a password?">Da li sam već uneo lozinku?</li>
            <li data-sr="Da li znam zvaničan kanal institucije?" data-en="Do I know the official channel of the institution?">Da li znam zvaničan kanal institucije?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
<ol class="steps">
        <li data-sr="Zatvorite stranicu i ne unosite više podataka." data-en="Close the page and do not enter more data.">Zatvorite stranicu i ne unosite više podataka.</li>
        <li data-sr="Promenite lozinku pravog portala ako je ista kao uneta." data-en="Change the real portal password if it matches what you typed.">Promenite lozinku pravog portala ako je ista kao uneta.</li>
        <li data-sr="Kontaktirajte instituciju zvaničnim brojem." data-en="Contact the institution on an official number.">Kontaktirajte instituciju zvaničnim brojem.</li>
        <li data-sr="Prijavite fišing ako postoji kanal." data-en="Report phishing if a channel exists.">Prijavite fišing ako postoji kanal.</li>
        <li data-sr="Pratite nalog na pravom portalu za čudne izmene." data-en="Watch the real portal account for strange changes.">Pratite nalog na pravom portalu za čudne izmene.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Koji portal su pominjali?" data-en="Which portal did they mention?">Koji portal su pominjali?</li>
            <li data-sr="Da li si uneo lozinku?" data-en="Did you enter a password?">Da li si uneo lozinku?</li>
            <li data-sr="Koji je bio URL?" data-en="What was the URL?">Koji je bio URL?</li>
            <li data-sr="Da li si platio taksu?" data-en="Did you pay a fee?">Da li si platio taksu?</li>
      </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Državni portal se otvara iz aplikacije ili ručno, ne iz hitnog SMS-a." data-en="The government portal opens from the app or manually, not from an urgent SMS.">Državni portal se otvara iz aplikacije ili ručno, ne iz hitnog SMS-a.</li>
            <li data-sr="Hajde da pronađemo zvaničan domen na štampanom uputstvu." data-en="Let us find the official domain on printed guidance.">Hajde da pronađemo zvaničan domen na štampanom uputstvu.</li>
            <li data-sr="Ako postoji sumnja, šalter ili poziv pre unosa." data-en="If there is doubt, a counter or call before entry.">Ako postoji sumnja, šalter ili poziv pre unosa.</li>
            <li data-sr="Ista lozinka na portalu i mejlu je rizik; menjamo oba posle incidenta." data-en="Same password on portal and email is a risk; we change both after an incident.">Ista lozinka na portalu i mejlu je rizik; menjamo oba posle incidenta.</li>
      </ul>
        </div>
      </div>
    </section>
`
};
