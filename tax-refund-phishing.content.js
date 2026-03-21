window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["tax-refund-phishing"] = {
  raw_html: `

    <section class="card">
      <h2 data-sr="Uvod: fišing povrata poreza" data-en="Introduction: tax refund phishing">Uvod: fišing povrata poreza</h2>

      <p data-sr="Poruka obećava povrat poreza ili stimulans i vodi na lažnu poresku stranicu koja krade lične podatke, karticu ili pristup nalogu." data-en="The message promises a tax refund or stimulus and leads to a fake tax page that steals personal data, card data, or account access.">Poruka obećava povrat poreza ili stimulans i vodi na lažnu poresku stranicu koja krade lične podatke, karticu ili pristup nalogu.</p>
      <p data-sr="Razlikuje se od agresivnog dugujete porez poziva jer koristi nagradni okvir, ali prag je isti: unos osetljivih podataka." data-en="It differs from aggressive you-owe-tax calls because it uses a reward frame, but the threshold is the same: entering sensitive data.">Razlikuje se od agresivnog dugujete porez poziva jer koristi nagradni okvir, ali prag je isti: unos osetljivih podataka.</p>
      <div class="callout" data-sr="<strong>Model:</strong> poruka o povratu → link → lažna forma → krađa identiteta ili novca." data-en="<strong>Model:</strong> refund message → link → fake form → identity or money theft."><strong>Model:</strong> poruka o povratu → link → lažna forma → krađa identiteta ili novca.</div>
    </section>

    <section class="card">
      <h2 data-sr="Zašto povrat privlači klik" data-en="Why a refund attracts a click">Zašto povrat privlači klik</h2>

      <p data-sr="Novac koji pripada vama smanjuje oprez. Hitnost oko roka zatvara prostor za proveru." data-en="Money that belongs to you lowers caution. Deadline urgency closes room to verify.">Novac koji pripada vama smanjuje oprez. Hitnost oko roka zatvara prostor za proveru.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Znakovi" data-en="Signs">Znakovi</div>
          <ul class="bullets">
            <li data-sr="Imejl ili SMS sa iznosom povrata." data-en="Email or SMS with a refund amount.">Imejl ili SMS sa iznosom povrata.</li>
            <li data-sr="Link koji ne vodi na poznat poreski domen." data-en="Link that does not lead to a known tax domain.">Link koji ne vodi na poznat poreski domen.</li>
            <li data-sr="Zahtev za karticu radi isplate." data-en="Card request to process payout.">Zahtev za karticu radi isplate.</li>
            <li data-sr="Traženje PIN-a naloga ili lozinke portala." data-en="Portal PIN or password request.">Traženje PIN-a naloga ili lozinke portala.</li>
      </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Cilj" data-en="Goal">Cilj</div>
          <ul class="bullets">
            <li data-sr="Krađa identiteta za druge prevare." data-en="Identity theft for other scams.">Krađa identiteta za druge prevare.</li>
            <li data-sr="Naplata takse pre povrata." data-en="Fee before refund.">Naplata takse pre povrata.</li>
            <li data-sr="Preuzimanje imejla radi reset napada." data-en="Email takeover for reset attacks.">Preuzimanje imejla radi reset napada.</li>
            <li data-sr="Prodaja ukradenih podataka." data-en="Selling stolen data.">Prodaja ukradenih podataka.</li>
      </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching).">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Tok traje kratko ako meta veruje u iznos." data-en="The flow is short if the target trusts the amount.">Tok traje kratko ako meta veruje u iznos.</p>
      <article class="phase ">
        <h3 class="phase-title" data-sr="Faza 1 — Ulaz: poruka, oglas ili poziv" data-en="Phase 1 — Entry: message, ad, or call">Faza 1 — Ulaz: poruka, oglas ili poziv</h3>
        <p data-sr="Stiže obaveštenje da imate neiskorišćen povrat i da ga preuzmete linkom." data-en="A notice arrives that you have unclaimed refund and must collect via a link.">Stiže obaveštenje da imate neiskorišćen povrat i da ga preuzmete linkom.</p>
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
        <p data-sr="Unose se lični podaci, brojevi dokumenata ili kartica na lažnoj formi." data-en="Personal data, document numbers, or cards are entered on a fake form.">Unose se lični podaci, brojevi dokumenata ili kartica na lažnoj formi.</p>
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
            <li><a href="government-impersonation.html" data-sr="Državno predstavljanje" data-en="Government impersonation">Državno predstavljanje</a></li>
            <li><a href="advance-fee-fraud.html" data-sr="Uplata unapred" data-en="Advance fee fraud">Uplata unapred</a></li>
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
            <li><a href="egovernment-login-phishing.html" data-sr="e‑uprava fišing" data-en="E‑government phishing">e‑uprava fišing</a></li>
            <li><a href="identity-theft.html" data-sr="Krađa identiteta" data-en="Identity theft">Krađa identiteta</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik prelazi na zvaničan kanal i zatvara pristup." data-en="<strong>Threshold:</strong> the user switches to an official channel and closes access."><strong>Prag faze:</strong> korisnik prelazi na zvaničan kanal i zatvara pristup.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
<ul class="bullets">
            <li data-sr="Poreska obaveštenja stižu samo preko linka, ne kroz poštu ili portal koji već koristite." data-en="Tax notices arrive only via a link, not mail or a portal you already use.">Poreska obaveštenja stižu samo preko linka, ne kroz poštu ili portal koji već koristite.</li>
            <li data-sr="Iznos povrata je zaokružen i deluje previše lak." data-en="Refund amount is round and feels too easy.">Iznos povrata je zaokružen i deluje previše lak.</li>
            <li data-sr="Traže se kartica i CVV za isplatu." data-en="Card and CVV requested for payout.">Traže se kartica i CVV za isplatu.</li>
            <li data-sr="Domen sadrži reč tax ali nije zvanični sajt." data-en="Domain contains tax but is not the official site.">Domen sadrži reč tax ali nije zvanični sajt.</li>
            <li data-sr="Rok ističe istog dana." data-en="Deadline expires the same day.">Rok ističe istog dana.</li>
            <li data-sr="Gramatičke greške u zvaničnom tekstu." data-en="Grammar errors in official-looking text.">Gramatičke greške u zvaničnom tekstu.</li>
            <li data-sr="Zahtev za verifikacionu taksu." data-en="Verification fee request.">Zahtev za verifikacionu taksu.</li>
            <li data-sr="Poziv na akciju klikni ovde odmah." data-en="Click here now call to action.">Poziv na akciju klikni ovde odmah.</li>
            <li data-sr="Lažni PDF prilog sa linkom." data-en="Fake PDF attachment with a link.">Lažni PDF prilog sa linkom.</li>
            <li data-sr="Broj telefona u mejlu koji ne odgovara javnim kontaktima." data-en="Phone number in email that does not match public contacts.">Broj telefona u mejlu koji ne odgovara javnim kontaktima.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
<ol class="steps">
        <li data-sr="Otvorite poreski portal ručno ukucanim domenom ili kroz obaveštenje iz pošte koju očekujete." data-en="Open the tax portal with a typed domain or through mail you expect.">Otvorite poreski portal ručno ukucanim domenom ili kroz obaveštenje iz pošte koju očekujete.</li>
        <li data-sr="Uporedite link sa zvaničnim adresama objavljenim na sajtu institucije." data-en="Compare the link to official addresses published on the institution site.">Uporedite link sa zvaničnim adresama objavljenim na sajtu institucije.</li>
        <li data-sr="Ne unosite karticu za povrat ako institucija to ne radi tako." data-en="Do not enter a card for a refund if the institution does not work that way.">Ne unosite karticu za povrat ako institucija to ne radi tako.</li>
        <li data-sr="Proverite da li postoji ista vest na zvaničnom sajtu bez prijave." data-en="Check whether the same news exists on the official site without login.">Proverite da li postoji ista vest na zvaničnom sajtu bez prijave.</li>
        <li data-sr="Kontaktirajte poresku pomoć preko broja sa zvaničnog sajta." data-en="Contact tax help via a number from the official site.">Kontaktirajte poresku pomoć preko broja sa zvaničnog sajta.</li>
        <li data-sr="Sumnjive mejlove prosledite na adresu za prijavu prevare ako postoji." data-en="Forward suspicious emails to a fraud reporting address if one exists.">Sumnjive mejlove prosledite na adresu za prijavu prevare ako postoji.</li>
        <li data-sr="Ne šaljite kopije ličnog dokumenta preko chata." data-en="Do not send ID copies over chat.">Ne šaljite kopije ličnog dokumenta preko chata.</li>
        <li data-sr="Objasnite starijima da država retko traži hitan link." data-en="Explain to elders that government rarely demands urgent links.">Objasnite starijima da država retko traži hitan link.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
<ul class="bullets">
            <li data-sr="Da li sam očekivao ovu poruku?" data-en="Was I expecting this message?">Da li sam očekivao ovu poruku?</li>
            <li data-sr="Da li je isti sadržaj na zvaničnom portalu?" data-en="Is the same content on the official portal?">Da li je isti sadržaj na zvaničnom portalu?</li>
            <li data-sr="Da li link vodi na tačan domen države?" data-en="Does the link lead to the exact state domain?">Da li link vodi na tačan domen države?</li>
            <li data-sr="Da li traže karticu?" data-en="Do they ask for a card?">Da li traže karticu?</li>
            <li data-sr="Da li traže taksu pre isplate?" data-en="Do they ask for a fee before payout?">Da li traže taksu pre isplate?</li>
            <li data-sr="Da li je rok nerealno kratak?" data-en="Is the deadline unrealistically short?">Da li je rok nerealno kratak?</li>
            <li data-sr="Da li bih ovo potpisao u filijali?" data-en="Would I sign this in a branch?">Da li bih ovo potpisao u filijali?</li>
            <li data-sr="Da li je jezik zvaničan kao u uobičajenim pismima?" data-en="Is the language as formal as usual letters?">Da li je jezik zvaničan kao u uobičajenim pismima?</li>
            <li data-sr="Da li mogu da odložim klik?" data-en="Can I delay the click?">Da li mogu da odložim klik?</li>
            <li data-sr="Da li je iznos previsok da bude istinit?" data-en="Is the amount too high to be true?">Da li je iznos previsok da bude istinit?</li>
            <li data-sr="Da li sam već uneo podatke?" data-en="Did I already enter data?">Da li sam već uneo podatke?</li>
            <li data-sr="Da li znam kako izgleda pravo obaveštenje?" data-en="Do I know what a real notice looks like?">Da li znam kako izgleda pravo obaveštenje?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
<ol class="steps">
        <li data-sr="Zatvorite stranicu bez unosa ako je sumnjiva." data-en="Close the page without entering data if it is suspicious.">Zatvorite stranicu bez unosa ako je sumnjiva.</li>
        <li data-sr="Ako ste uneli podatke, kontaktirajte banku i promenite lozinke." data-en="If you entered data, contact the bank and change passwords.">Ako ste uneli podatke, kontaktirajte banku i promenite lozinke.</li>
        <li data-sr="Prijavite fišing nadležnoj instituciji ako postoji kanal." data-en="Report phishing to the competent institution if a channel exists.">Prijavite fišing nadležnoj instituciji ako postoji kanal.</li>
        <li data-sr="Pratite izvode i kreditni izveštaj ako su ukradeni lični podaci." data-en="Watch statements and credit reports if personal data was stolen.">Pratite izvode i kreditni izveštaj ako su ukradeni lični podaci.</li>
        <li data-sr="Obavestite porodicu ako je imejl kompromitovan." data-en="Notify family if email is compromised.">Obavestite porodicu ako je imejl kompromitovan.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Koji je bio tačan URL?" data-en="What was the exact URL?">Koji je bio tačan URL?</li>
            <li data-sr="Šta si uneo?" data-en="What did you enter?">Šta si uneo?</li>
            <li data-sr="Da li si platio taksu?" data-en="Did you pay a fee?">Da li si platio taksu?</li>
            <li data-sr="Da li si dobio slično pismo ranije zvanično?" data-en="Have you received a similar official letter before?">Da li si dobio slično pismo ranije zvanično?</li>
      </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Država ne šalje povrat preko slučajnog linka u mejlu." data-en="The state does not send refunds via a random email link.">Država ne šalje povrat preko slučajnog linka u mejlu.</li>
            <li data-sr="Hajde da otvorimo portal ručno, ovde je domen." data-en="Let us open the portal manually; here is the domain.">Hajde da otvorimo portal ručno, ovde je domen.</li>
            <li data-sr="Kartica za povrat je retka procedura; proveravamo zvanično." data-en="Card for refund is rare; we verify officially.">Kartica za povrat je retka procedura; proveravamo zvanično.</li>
            <li data-sr="Rok od 24 sata je često znak prevare." data-en="A 24-hour deadline is often a scam sign.">Rok od 24 sata je često znak prevare.</li>
      </ul>
        </div>
      </div>
    </section>
`
};
