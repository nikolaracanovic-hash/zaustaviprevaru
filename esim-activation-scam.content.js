window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["esim-activation-scam"] = {
  raw_html: `

    <section class="card">
      <h2 data-sr="Uvod: lažna aktivacija eSIM" data-en="Introduction: fake eSIM activation">Uvod: lažna aktivacija eSIM</h2>

      <p data-sr="Prevarant šalje QR kod ili link za eSIM aktivaciju ili besplatnu nadogradnju koji zapravo prebacuje vašu liniju na njihov uređaj." data-en="The fraudster sends a QR or link for eSIM activation or a free upgrade that actually moves your line to their device.">Prevarant šalje QR kod ili link za eSIM aktivaciju ili besplatnu nadogradnju koji zapravo prebacuje vašu liniju na njihov uređaj.</p>
      <p data-sr="Posle prenosa mogu presretati SMS kodove i pozive dok vi gubite signal ili dobijate čudna obaveštenja." data-en="After transfer they can intercept SMS codes and calls while you lose signal or get strange notices.">Posle prenosa mogu presretati SMS kodove i pozive dok vi gubite signal ili dobijate čudna obaveštenja.</p>
      <div class="callout" data-sr="<strong>Model:</strong> lažni QR ili link → skeniranje → prenos linije → presretanje kodova." data-en="<strong>Model:</strong> fake QR or link → scan → line transfer → code interception."><strong>Model:</strong> lažni QR ili link → skeniranje → prenos linije → presretanje kodova.</div>
    </section>

    <section class="card">
      <h2 data-sr="Zašto QR prolazi" data-en="Why the QR works">Zašto QR prolazi</h2>

      <p data-sr="Korisnik je navikao na digitalnu aktivaciju. QR izgleda tehnički i čisto, pa se provera domena preskače." data-en="Users are used to digital activation. A QR looks technical and clean, so domain checks are skipped.">Korisnik je navikao na digitalnu aktivaciju. QR izgleda tehnički i čisto, pa se provera domena preskače.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Signali" data-en="Signals">Signali</div>
          <ul class="bullets">
            <li data-sr="Poruka sa QR bez prethodnog zahteva kod operatera." data-en="Message with QR without a prior carrier request.">Poruka sa QR bez prethodnog zahteva kod operatera.</li>
            <li data-sr="Aktivacija preko trećeg sajta, ne kroz aplikaciju operatera." data-en="Activation via a third site, not the carrier app.">Aktivacija preko trećeg sajta, ne kroz aplikaciju operatera.</li>
            <li data-sr="Hitnost da ne izgubite broj." data-en="Urgency so you do not lose the number.">Hitnost da ne izgubite broj.</li>
            <li data-sr="Lažni mejl koji liči na operatera." data-en="Fake email resembling the carrier.">Lažni mejl koji liči na operatera.</li>
      </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Cilj" data-en="Goal">Cilj</div>
          <ul class="bullets">
            <li data-sr="Kontrola broja za OTP i reset lozinki." data-en="Number control for OTP and password resets.">Kontrola broja za OTP i reset lozinki.</li>
            <li data-sr="Prijava na servise koji koriste SMS." data-en="Sign-in to SMS-based services.">Prijava na servise koji koriste SMS.</li>
            <li data-sr="Traženje novca za poništenje greške." data-en="Money demand to undo a mistake.">Traženje novca za poništenje greške.</li>
            <li data-sr="Dvostruka prevara kontaktima sa vašeg broja." data-en="Double scam to contacts from your number.">Dvostruka prevara kontaktima sa vašeg broja.</li>
      </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching).">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Prenos može biti brz; reagujte odmah ako izgubite mrežu." data-en="Transfer can be fast; react immediately if you lose network.">Prenos može biti brz; reagujte odmah ako izgubite mrežu.</p>
      <article class="phase ">
        <h3 class="phase-title" data-sr="Faza 1 — Ulaz: poruka, oglas ili poziv" data-en="Phase 1 — Entry: message, ad, or call">Faza 1 — Ulaz: poruka, oglas ili poziv</h3>
        <p data-sr="Meta dobija mejl, SMS ili poruku sa QR za eSIM uz uputstvo da ga odmah skenira." data-en="The target gets email, SMS, or chat with an eSIM QR and instructions to scan immediately.">Meta dobija mejl, SMS ili poruku sa QR za eSIM uz uputstvo da ga odmah skenira.</p>
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
            <li><a href="quishing.html" data-sr="QR fišing" data-en="Quishing">QR fišing</a></li>
            <li><a href="smishing.html" data-sr="Smišing" data-en="Smishing">Smišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik počne unos u kontrolisanoj formi." data-en="<strong>Threshold:</strong> the user begins entry on a controlled form."><strong>Prag faze:</strong> korisnik počne unos u kontrolisanoj formi.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Prag: osetljivi podaci ili kod" data-en="Phase 3 — Threshold: sensitive data or code">Faza 3 — Prag: osetljivi podaci ili kod</h3>
        <p data-sr="Skeniranje u podešavanjima telefona završava prenos eSIM profila pod kontrolom napadača." data-en="Scanning in phone settings completes eSIM profile transfer under attacker control.">Skeniranje u podešavanjima telefona završava prenos eSIM profila pod kontrolom napadača.</p>
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
            <li><a href="sim-swap.html" data-sr="SIM zamena" data-en="SIM swap">SIM zamena</a></li>
            <li><a href="otp-interception.html" data-sr="OTP" data-en="OTP interception">OTP</a></li>
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
            <li><a href="sim-registration-scam.html" data-sr="Registracija SIM" data-en="SIM registration scam">Registracija SIM</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik prelazi na zvaničan kanal i zatvara pristup." data-en="<strong>Threshold:</strong> the user switches to an official channel and closes access."><strong>Prag faze:</strong> korisnik prelazi na zvaničan kanal i zatvara pristup.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
<ul class="bullets">
            <li data-sr="QR za eSIM van aplikacije operatera." data-en="eSIM QR outside the carrier app.">QR za eSIM van aplikacije operatera.</li>
            <li data-sr="Zahtev da skenirate dok ste pod pritiskom u pozivu." data-en="Request to scan while pressured on a call.">Zahtev da skenirate dok ste pod pritiskom u pozivu.</li>
            <li data-sr="Izgubljen signal odmah posle skeniranja." data-en="Lost signal right after scanning.">Izgubljen signal odmah posle skeniranja.</li>
            <li data-sr="Nova aktivacija koja niste tražili." data-en="A new activation you did not request.">Nova aktivacija koja niste tražili.</li>
            <li data-sr="Link ka uputstvu na nepoznatom domenu." data-en="Link to instructions on an unknown domain.">Link ka uputstvu na nepoznatom domenu.</li>
            <li data-sr="Naplata za povrat broja." data-en="Fee to get the number back.">Naplata za povrat broja.</li>
            <li data-sr="Kombinacija sa lažnom podrškom operatera." data-en="Combined with fake carrier support.">Kombinacija sa lažnom podrškom operatera.</li>
            <li data-sr="Poruka na engleskom ako koristite lokalnog operatera." data-en="English message while you use a local carrier.">Poruka na engleskom ako koristite lokalnog operatera.</li>
            <li data-sr="Traženje da isključite stari SIM radi čistoće." data-en="Ask to turn off old SIM for cleanup.">Traženje da isključite stari SIM radi čistoće.</li>
            <li data-sr="Više QR kodova u istoj poruci." data-en="Multiple QR codes in one message.">Više QR kodova u istoj poruci.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
<ol class="steps">
        <li data-sr="eSIM uvek aktivirajte samo kroz aplikaciju ili salon svog operatera." data-en="Always activate eSIM only through your carrier app or store.">eSIM uvek aktivirajte samo kroz aplikaciju ili salon svog operatera.</li>
        <li data-sr="Ne skenirajte telekom QR iz mejla ili chata." data-en="Do not scan telecom QR from email or chat.">Ne skenirajte telekom QR iz mejla ili chata.</li>
        <li data-sr="Ako izgubite mrežu, odmah pozovite operatera sa drugog telefona." data-en="If you lose network, call the carrier immediately from another phone.">Ako izgubite mrežu, odmah pozovite operatera sa drugog telefona.</li>
        <li data-sr="Proverite da li postoji nalog za prenos broja." data-en="Check whether a number port request exists.">Proverite da li postoji nalog za prenos broja.</li>
        <li data-sr="Uporedite QR sa uzorkom iz zvaničnog uputstva na sajtu operatera." data-en="Compare the QR to samples in official carrier guidance.">Uporedite QR sa uzorkom iz zvaničnog uputstva na sajtu operatera.</li>
        <li data-sr="Ne dajte remote pristup telefonu radi eSIM pomoći." data-en="Do not give remote phone access for eSIM help.">Ne dajte remote pristup telefonu radi eSIM pomoći.</li>
        <li data-sr="Sačuvajte screenshot poruke pre brisanja." data-en="Save a screenshot of the message before deletion.">Sačuvajte screenshot poruke pre brisanja.</li>
        <li data-sr="Obavestite banku ako koristite SMS 2FA." data-en="Notify the bank if you use SMS 2FA.">Obavestite banku ako koristite SMS 2FA.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
<ul class="bullets">
            <li data-sr="Da li sam tražio eSIM od operatera?" data-en="Did I request eSIM from the carrier?">Da li sam tražio eSIM od operatera?</li>
            <li data-sr="Da li je QR stigao van moje porudžbine?" data-en="Did the QR arrive outside my order?">Da li je QR stigao van moje porudžbine?</li>
            <li data-sr="Da li skeniram kroz podešavanja koja sam sam otvorio?" data-en="Am I scanning through settings I opened myself?">Da li skeniram kroz podešavanja koja sam sam otvorio?</li>
            <li data-sr="Da li me neko žuri tokom skeniranja?" data-en="Is someone rushing me during scanning?">Da li me neko žuri tokom skeniranja?</li>
            <li data-sr="Da li je link na domenu operatera?" data-en="Is the link on the carrier domain?">Da li je link na domenu operatera?</li>
            <li data-sr="Da li bih ovo uradio u salonu pre skeniranja?" data-en="Would I do this in a store before scanning?">Da li bih ovo uradio u salonu pre skeniranja?</li>
            <li data-sr="Da li signal nestaje posle koraka?" data-en="Does signal disappear after the step?">Da li signal nestaje posle koraka?</li>
            <li data-sr="Da li postoji zahtev za novac?" data-en="Is there a money request?">Da li postoji zahtev za novac?</li>
            <li data-sr="Da li mogu da pitam operatera preko zvaničnog chata?" data-en="Can I ask the carrier via official chat?">Da li mogu da pitam operatera preko zvaničnog chata?</li>
            <li data-sr="Da li je poruka personalizovana ili generička?" data-en="Is the message personalized or generic?">Da li je poruka personalizovana ili generička?</li>
            <li data-sr="Da li sam već skenirao?" data-en="Did I already scan?">Da li sam već skenirao?</li>
            <li data-sr="Da li drugi član domaćinstva očekuje eSIM?" data-en="Does another household member expect an eSIM?">Da li drugi član domaćinstva očekuje eSIM?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
<ol class="steps">
        <li data-sr="Odmah kontaktirajte operatera i tražite zaustavljanje prenosa." data-en="Contact the carrier immediately and ask to stop the transfer.">Odmah kontaktirajte operatera i tražite zaustavljanje prenosa.</li>
        <li data-sr="Ne skenirajte dodatne QR kodove iz iste poruke." data-en="Do not scan additional QR codes from the same message.">Ne skenirajte dodatne QR kodove iz iste poruke.</li>
        <li data-sr="Promenite lozinke servisa sa SMS 2FA." data-en="Change passwords on SMS 2FA services.">Promenite lozinke servisa sa SMS 2FA.</li>
        <li data-sr="Proverite finansijske naloge." data-en="Review financial accounts.">Proverite finansijske naloge.</li>
        <li data-sr="Prijavite prevaru i sačuvajte dokaz." data-en="Report the fraud and preserve evidence.">Prijavite prevaru i sačuvajte dokaz.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si skenirao QR?" data-en="Did you scan a QR?">Da li si skenirao QR?</li>
            <li data-sr="Kada je nestao signal?" data-en="When did signal drop?">Kada je nestao signal?</li>
            <li data-sr="Od koga je poruka?" data-en="Who was the message from?">Od koga je poruka?</li>
            <li data-sr="Da li si uneo kodove posle toga?" data-en="Did you enter codes afterward?">Da li si uneo kodove posle toga?</li>
      </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="eSIM QR je kao novi SIM; ne skeniramo ga sa sumnjivih poruka." data-en="An eSIM QR is like a new SIM; we do not scan from suspicious messages.">eSIM QR je kao novi SIM; ne skeniramo ga sa sumnjivih poruka.</li>
            <li data-sr="Hajde da pozovemo operatera sa mog drugog telefona." data-en="Let us call the carrier from my other phone.">Hajde da pozovemo operatera sa mog drugog telefona.</li>
            <li data-sr="Gubitak mreže posle QR je alarm." data-en="Losing network after a QR is an alarm.">Gubitak mreže posle QR je alarm.</li>
            <li data-sr="Operater može proveriti da li je tražen prenos." data-en="The carrier can check whether a port was requested.">Operater može proveriti da li je tražen prenos.</li>
      </ul>
        </div>
      </div>
    </section>
`
};
