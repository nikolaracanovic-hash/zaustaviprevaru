window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["search-engine-ad-impersonation"] = {
  raw_html: `

    <section class="card">
      <h2 data-sr="Uvod: lažni oglas u pretrazi" data-en="Introduction: fake search ad">Uvod: lažni oglas u pretrazi</h2>

      <p data-sr="Plaćeni oglas može stajati iznad organskih rezultata i voditi na kopiju zvaničnog sajta. Korisnik poveruje poziciji u pretrazi više nego adresnoj traci." data-en="A paid ad can sit above organic results and lead to a copy of an official site. Users trust search placement more than the address bar.">Plaćeni oglas može stajati iznad organskih rezultata i voditi na kopiju zvaničnog sajta. Korisnik poveruje poziciji u pretrazi više nego adresnoj traci.</p>
      <p data-sr="Posebno je rizično kada ljudi traže banka prijava, novčanik, podrška ili povrat novca: napadač kupi ključne reči." data-en="It is especially risky when people search for bank login, wallet, support, or refund: attackers buy keywords.">Posebno je rizično kada ljudi traže banka prijava, novčanik, podrška ili povrat novca: napadač kupi ključne reči.</p>
      <div class="callout" data-sr="<strong>Model:</strong> pretraga → oglas → lažna stranica → unos podataka → zloupotreba." data-en="<strong>Model:</strong> search → ad → fake page → data entry → abuse."><strong>Model:</strong> pretraga → oglas → lažna stranica → unos podataka → zloupotreba.</div>
    </section>

    <section class="card">
      <h2 data-sr="Zašto oglas prolazi" data-en="Why the ad works">Zašto oglas prolazi</h2>

      <p data-sr="Oglas izgleda kao preporuka pretraživača. Korisnik preskače proveru domena jer veruje da platforma filtrira prevaru." data-en="The ad looks like a search engine endorsement. The user skips domain checks because they believe the platform filters fraud.">Oglas izgleda kao preporuka pretraživača. Korisnik preskače proveru domena jer veruje da platforma filtrira prevaru.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Signali" data-en="Signals">Signali</div>
          <ul class="bullets">
            <li data-sr="Oglas sa sitnim oznakama koje ljudi ne čitaju." data-en="An ad with small labels people do not read.">Oglas sa sitnim oznakama koje ljudi ne čitaju.</li>
            <li data-sr="Hitna poruka o blokadi naloga ili povratu." data-en="Urgent message about account lock or refund.">Hitna poruka o blokadi naloga ili povratu.</li>
            <li data-sr="Domen sa crticom, dodatkom ili TLD varijantom." data-en="A domain with a hyphen, extra word, or TLD variant.">Domen sa crticom, dodatkom ili TLD varijantom.</li>
            <li data-sr="Lažni broj telefona odmah pored oglasa." data-en="A fake phone number right next to the ad.">Lažni broj telefona odmah pored oglasa.</li>
      </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Cilj" data-en="Goal">Cilj</div>
          <ul class="bullets">
            <li data-sr="Krađa kredencijala." data-en="Credential theft.">Krađa kredencijala.</li>
            <li data-sr="Instalacija lažnog softvera sa preuzmi dugmetom." data-en="Fake software install from a download button.">Instalacija lažnog softvera sa preuzmi dugmetom.</li>
            <li data-sr="Prikupljanje kartice pod maskom takse." data-en="Card collection masked as a fee.">Prikupljanje kartice pod maskom takse.</li>
            <li data-sr="Preusmeravanje na lažnu podršku." data-en="Redirect to fake support.">Preusmeravanje na lažnu podršku.</li>
      </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching).">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Tok traje minutima ako korisnik žuri." data-en="The flow lasts minutes if the user is in a hurry.">Tok traje minutima ako korisnik žuri.</p>
      <article class="phase ">
        <h3 class="phase-title" data-sr="Faza 1 — Ulaz: poruka, oglas ili poziv" data-en="Phase 1 — Entry: message, ad, or call">Faza 1 — Ulaz: poruka, oglas ili poziv</h3>
        <p data-sr="Korisnik ukuca ime banke, platnog servisa ili državnog portala i klikne prvi rezultat koji izgleda ozvaničen." data-en="The user types a bank, payment service, or government portal name and clicks the first result that looks official.">Korisnik ukuca ime banke, platnog servisa ili državnog portala i klikne prvi rezultat koji izgleda ozvaničen.</p>
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
            <li><a href="fake-webshop.html" data-sr="Lažna prodavnica" data-en="Fake webshop">Lažna prodavnica</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik počne unos u kontrolisanoj formi." data-en="<strong>Threshold:</strong> the user begins entry on a controlled form."><strong>Prag faze:</strong> korisnik počne unos u kontrolisanoj formi.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Prag: osetljivi podaci ili kod" data-en="Phase 3 — Threshold: sensitive data or code">Faza 3 — Prag: osetljivi podaci ili kod</h3>
        <p data-sr="Unose se lozinka, kartica ili OTP na stranici dostigutoj preko oglasa." data-en="Password, card, or OTP is entered on a page reached through an ad.">Unose se lozinka, kartica ili OTP na stranici dostigutoj preko oglasa.</p>
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
            <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
            <li><a href="card-not-present-fraud.html" data-sr="CNP prevara" data-en="Card-not-present fraud">CNP prevara</a></li>
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
            <li><a href="malicious-app-scam.html" data-sr="Maliciozna aplikacija" data-en="Malicious app">Maliciozna aplikacija</a></li>
            <li><a href="tech-support-scam.html" data-sr="Lažna podrška" data-en="Tech support scam">Lažna podrška</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik prelazi na zvaničan kanal i zatvara pristup." data-en="<strong>Threshold:</strong> the user switches to an official channel and closes access."><strong>Prag faze:</strong> korisnik prelazi na zvaničan kanal i zatvara pristup.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
<ul class="bullets">
            <li data-sr="Domen na stranici za prijavu ne odgovara domenu koji ručno znate." data-en="The sign-in page domain does not match the domain you know by heart.">Domen na stranici za prijavu ne odgovara domenu koji ručno znate.</li>
            <li data-sr="Oglas je označen kao Sponzorisano ili Ad." data-en="The ad is labeled sponsored or ad.">Oglas je označen kao Sponzorisano ili Ad.</li>
            <li data-sr="Stranica traži previše podataka za običnu prijavu." data-en="The page asks for too much data for normal login.">Stranica traži previše podataka za običnu prijavu.</li>
            <li data-sr="Pojavljuje se hitnost odmah posle klika." data-en="Urgency appears right after the click.">Pojavljuje se hitnost odmah posle klika.</li>
            <li data-sr="Prečica za chat podršku sa nepoznatim brojem." data-en="A shortcut to chat support with an unknown number.">Prečica za chat podršku sa nepoznatim brojem.</li>
            <li data-sr="Preuzimanje ekstenzije ili aplikacije sa oglasne stranice." data-en="Downloading an extension or app from the ad page.">Preuzimanje ekstenzije ili aplikacije sa oglasne stranice.</li>
            <li data-sr="Cena ili povrat deluje previše povoljno." data-en="A price or refund looks too good.">Cena ili povrat deluje previše povoljno.</li>
            <li data-sr="Rezultat pretrage meša oglase i organike bez jasne granice." data-en="Search mixes ads and organic results without a clear boundary.">Rezultat pretrage meša oglase i organike bez jasne granice.</li>
            <li data-sr="Mobilni pregledač skriva pun URL." data-en="The mobile browser hides the full URL.">Mobilni pregledač skriva pun URL.</li>
            <li data-sr="Isti oglas se ponavlja sa različitim domenima." data-en="The same ad repeats with different domains.">Isti oglas se ponavlja sa različitim domenima.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
<ol class="steps">
        <li data-sr="Za prijavu koristite bookmark ili aplikaciju, ne prvi klik u pretrazi." data-en="For sign-in use a bookmark or app, not the first search click.">Za prijavu koristite bookmark ili aplikaciju, ne prvi klik u pretrazi.</li>
        <li data-sr="Pročitajte pun URL pre unosa lozinke." data-en="Read the full URL before entering a password.">Pročitajte pun URL pre unosa lozinke.</li>
        <li data-sr="Uporedite domen sa dokumentacijom na poleđini kartice." data-en="Compare the domain to documentation on the card back.">Uporedite domen sa dokumentacijom na poleđini kartice.</li>
        <li data-sr="Ignorišite telefon sa oglasa; nađite broj na zvaničnom sajtu." data-en="Ignore phone numbers from ads; find the number on the official site.">Ignorišite telefon sa oglasa; nađite broj na zvaničnom sajtu.</li>
        <li data-sr="Koristite blokatore oglasa samo kao pomoć, ne kao garanciju." data-en="Use ad blockers only as help, not as a guarantee.">Koristite blokatore oglasa samo kao pomoć, ne kao garanciju.</li>
        <li data-sr="Ako sumnjate, zatvorite tab i ukucajte domen ručno." data-en="If in doubt, close the tab and type the domain manually.">Ako sumnjate, zatvorite tab i ukucajte domen ručno.</li>
        <li data-sr="Proverite da li stranica ima isti sertifikat i ime kao uvek." data-en="Check whether the page has the same certificate and name as usual.">Proverite da li stranica ima isti sertifikat i ime kao uvek.</li>
        <li data-sr="Obavestite porodicu da oglasi nisu preporuka bezbednosti." data-en="Tell family that ads are not a safety endorsement.">Obavestite porodicu da oglasi nisu preporuka bezbednosti.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
<ul class="bullets">
            <li data-sr="Da li sam došao ovde kroz oglas?" data-en="Did I arrive here through an ad?">Da li sam došao ovde kroz oglas?</li>
            <li data-sr="Da li je domen identičan onom koji koristim mesecima?" data-en="Is the domain identical to what I have used for months?">Da li je domen identičan onom koji koristim mesecima?</li>
            <li data-sr="Da li bih ovu stranicu posetio da nije bila prva u listi?" data-en="Would I visit this page if it were not first in the list?">Da li bih ovu stranicu posetio da nije bila prva u listi?</li>
            <li data-sr="Da li traži karticu za verifikaciju?" data-en="Does it ask for a card for verification?">Da li traži karticu za verifikaciju?</li>
            <li data-sr="Da li postoji isti sadržaj u zvaničnoj aplikaciji?" data-en="Does the same content exist in the official app?">Da li postoji isti sadržaj u zvaničnoj aplikaciji?</li>
            <li data-sr="Da li je jezik i pravopis u skladu sa zvaničnim sajtom?" data-en="Do language and spelling match the official site?">Da li je jezik i pravopis u skladu sa zvaničnim sajtom?</li>
            <li data-sr="Da li mogu da odložim prijavu dok ne proverim?" data-en="Can I delay sign-in until I verify?">Da li mogu da odložim prijavu dok ne proverim?</li>
            <li data-sr="Da li pretraživač garantuje bezbednost oglasa?" data-en="Does the search engine guarantee ad safety?">Da li pretraživač garantuje bezbednost oglasa?</li>
            <li data-sr="Da li je HTTPS ikona ista kao uvek?" data-en="Is the HTTPS indicator the same as usual?">Da li je HTTPS ikona ista kao uvek?</li>
            <li data-sr="Da li me neko žurio da kliknem?" data-en="Did someone rush me to click?">Da li me neko žurio da kliknem?</li>
            <li data-sr="Da li sam tražio podršku jer je već nešto sumnjivo?" data-en="Did I search for support because something was already suspicious?">Da li sam tražio podršku jer je već nešto sumnjivo?</li>
            <li data-sr="Da li bih mogao da pitam banku pre unosa?" data-en="Could I ask the bank before entering data?">Da li bih mogao da pitam banku pre unosa?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
<ol class="steps">
        <li data-sr="Zatvorite sumnjivu stranicu bez unosa." data-en="Close the suspicious page without entering data.">Zatvorite sumnjivu stranicu bez unosa.</li>
        <li data-sr="Ako ste uneli podatke, odmah promenite lozinku i odjavite sesije." data-en="If you entered data, change the password and sign out sessions immediately.">Ako ste uneli podatke, odmah promenite lozinku i odjavite sesije.</li>
        <li data-sr="Kontaktirajte banku zvaničnim brojem." data-en="Contact the bank on an official number.">Kontaktirajte banku zvaničnim brojem.</li>
        <li data-sr="Sačuvajte URL oglasa i stranice." data-en="Save the ad URL and page.">Sačuvajte URL oglasa i stranice.</li>
        <li data-sr="Proverite kartične transakcije i blokirajte karticu po potrebi." data-en="Review card charges and block the card if needed.">Proverite kartične transakcije i blokirajte karticu po potrebi.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Kako si tačno otvorio sajt?" data-en="How exactly did you open the site?">Kako si tačno otvorio sajt?</li>
            <li data-sr="Da li je prvi rezultat bio oglas?" data-en="Was the first result an ad?">Da li je prvi rezultat bio oglas?</li>
            <li data-sr="Koji je bio pun URL?" data-en="What was the full URL?">Koji je bio pun URL?</li>
            <li data-sr="Da li si uneo lozinku?" data-en="Did you enter a password?">Da li si uneo lozinku?</li>
      </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Prvi rezultat u pretrazi nije uvek pravi sajt." data-en="The first search result is not always the real site.">Prvi rezultat u pretrazi nije uvek pravi sajt.</li>
            <li data-sr="Hajde da otvorimo aplikaciju banke umesto ovog taba." data-en="Let us open the bank app instead of this tab.">Hajde da otvorimo aplikaciju banke umesto ovog taba.</li>
            <li data-sr="Oglas može izgledati zvanično i ipak biti prevara." data-en="An ad can look official and still be fraud.">Oglas može izgledati zvanično i ipak biti prevara.</li>
            <li data-sr="Ručno ukucan domen je jeftinija provera od gubitka naloga." data-en="A typed domain is cheaper verification than losing an account.">Ručno ukucan domen je jeftinija provera od gubitka naloga.</li>
      </ul>
        </div>
      </div>
    </section>
`
};
