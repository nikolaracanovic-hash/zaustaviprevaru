window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["number-verification-scam"] = {
  raw_html: `

    <section class="card">
      <h2 data-sr="Uvod: prevara verifikacije broja" data-en="Introduction: number verification scam">Uvod: prevara verifikacije broja</h2>

      <p data-sr="Prevarant traži da mu prosledite SMS kod koji je zapravo poslat da verifikuje novi nalog ili uslugu na vašem broju." data-en="The fraudster asks you to forward an SMS code that was actually sent to verify a new account or service on your number.">Prevarant traži da mu prosledite SMS kod koji je zapravo poslat da verifikuje novi nalog ili uslugu na vašem broju.</p>
      <p data-sr="Česti primeri: lažni kupac na oglasu, kolega koji treba kod za posao, ili Google Voice varijanta." data-en="Common examples: fake buyer on a listing, a colleague who needs a code for work, or a Google Voice style variant.">Česti primeri: lažni kupac na oglasu, kolega koji treba kod za posao, ili Google Voice varijanta.</p>
      <div class="callout" data-sr="<strong>Model:</strong> lažni razlog → SMS kod na vaš broj → prosleđivanje → tuđa registracija." data-en="<strong>Model:</strong> fake reason → SMS code to your number → forwarding → foreign registration."><strong>Model:</strong> lažni razlog → SMS kod na vaš broj → prosleđivanje → tuđa registracija.</div>
    </section>

    <section class="card">
      <h2 data-sr="Zašto ljudi prosleđuju kod" data-en="Why people forward the code">Zašto ljudi prosleđuju kod</h2>

      <p data-sr="Kod deluje kao sitnica u odnosu na priču o pomoći ili prodaji. Žrtva ne povezuje SMS sa tuđom registracijom." data-en="The code feels minor compared to a help or sale story. The victim does not connect the SMS to someone else registration.">Kod deluje kao sitnica u odnosu na priču o pomoći ili prodaji. Žrtva ne povezuje SMS sa tuđom registracijom.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Priče koje se koriste" data-en="Stories used">Priče koje se koriste</div>
          <ul class="bullets">
            <li data-sr="Pošalji mi kod da potvrdim da si pravi prodavac." data-en="Send me the code to prove you are a real seller.">Pošalji mi kod da potvrdim da si pravi prodavac.</li>
            <li data-sr="Treba mi kod koji je stigao da završim posao." data-en="I need the code that arrived to finish the job.">Treba mi kod koji je stigao da završim posao.</li>
            <li data-sr="Poruka je za mene ali je pogrešno poslata na tvoj broj." data-en="The message is for me but wrongly sent to your number.">Poruka je za mene ali je pogrešno poslata na tvoj broj.</li>
            <li data-sr="Hitno, platforma blokira moj nalog." data-en="Urgent, the platform is blocking my account.">Hitno, platforma blokira moj nalog.</li>
      </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Posledica" data-en="Outcome">Posledica</div>
          <ul class="bullets">
            <li data-sr="Registracija usluge koja koristi vaš broj kao dokaz." data-en="Registering a service that uses your number as proof.">Registracija usluge koja koristi vaš broj kao dokaz.</li>
            <li data-sr="Preusmeravanje poziva ili poruka." data-en="Redirecting calls or messages.">Preusmeravanje poziva ili poruka.</li>
            <li data-sr="Otvaranje naloga za prevaru u vaše ime." data-en="Opening fraud accounts in your name.">Otvaranje naloga za prevaru u vaše ime.</li>
            <li data-sr="Korak ka SIM prevarantima u drugim varijantama." data-en="A step toward SIM fraud in other variants.">Korak ka SIM prevarantima u drugim varijantama.</li>
      </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching).">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Jedan prosleđen kod može biti dovoljan." data-en="One forwarded code can be enough.">Jedan prosleđen kod može biti dovoljan.</p>
      <article class="phase ">
        <h3 class="phase-title" data-sr="Faza 1 — Ulaz: poruka, oglas ili poziv" data-en="Phase 1 — Entry: message, ad, or call">Faza 1 — Ulaz: poruka, oglas ili poziv</h3>
        <p data-sr="Stranac uspostavi poverenje kroz oglas, posao ili društvenu mrežu i zatraži verifikacioni korak." data-en="A stranger builds trust via a listing, job, or social network and asks for a verification step.">Stranac uspostavi poverenje kroz oglas, posao ili društvenu mrežu i zatraži verifikacioni korak.</p>
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
            <li><a href="marketplace-scam.html" data-sr="Oglasnice" data-en="Marketplace scam">Oglasnice</a></li>
            <li><a href="smishing.html" data-sr="Smišing" data-en="Smishing">Smišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik počne unos u kontrolisanoj formi." data-en="<strong>Threshold:</strong> the user begins entry on a controlled form."><strong>Prag faze:</strong> korisnik počne unos u kontrolisanoj formi.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Prag: osetljivi podaci ili kod" data-en="Phase 3 — Threshold: sensitive data or code">Faza 3 — Prag: osetljivi podaci ili kod</h3>
        <p data-sr="Žrtva prosledi ceo tekst SMS-a ili brojčani kod prevarantu." data-en="The victim forwards the full SMS text or numeric code to the fraudster.">Žrtva prosledi ceo tekst SMS-a ili brojčani kod prevarantu.</p>
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
            <li><a href="whatsapp-takeover.html" data-sr="WhatsApp" data-en="WhatsApp takeover">WhatsApp</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik prelazi na zvaničan kanal i zatvara pristup." data-en="<strong>Threshold:</strong> the user switches to an official channel and closes access."><strong>Prag faze:</strong> korisnik prelazi na zvaničan kanal i zatvara pristup.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
<ul class="bullets">
            <li data-sr="Bilo ko traži kod koji je stigao na vaš telefon." data-en="Anyone asks for a code that arrived on your phone.">Bilo ko traži kod koji je stigao na vaš telefon.</li>
            <li data-sr="Objašnjenje za kod je nejasno ili konfuzno." data-en="The explanation for the code is vague or confusing.">Objašnjenje za kod je nejasno ili konfuzno.</li>
            <li data-sr="Kupac ili poslodavac žuri bez dokumentacije." data-en="Buyer or employer rushes without documentation.">Kupac ili poslodavac žuri bez dokumentacije.</li>
            <li data-sr="Traže screenshot poruke." data-en="They ask for a screenshot of the message.">Traže screenshot poruke.</li>
            <li data-sr="Kod nije za vaš nalog nego za njihov." data-en="The code is not for your account but for theirs.">Kod nije za vaš nalog nego za njihov.</li>
            <li data-sr="Ponuda novca za brzu potvrdu." data-en="Money offered for a quick confirmation.">Ponuda novca za brzu potvrdu.</li>
            <li data-sr="Isti obrazac na više platformi." data-en="The same pattern on multiple platforms.">Isti obrazac na više platformi.</li>
            <li data-sr="Zahtev da obrišete poruku posle slanja." data-en="Request to delete the message after sending.">Zahtev da obrišete poruku posle slanja.</li>
            <li data-sr="Lažni poziv operatera u istom danu." data-en="Fake carrier call the same day.">Lažni poziv operatera u istom danu.</li>
            <li data-sr="Povezivanje sa lažnim sigurnosnim mejlom." data-en="Tied to a fake security email.">Povezivanje sa lažnim sigurnosnim mejlom.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
<ol class="steps">
        <li data-sr="Kod iz SMS-a je za vaš nalog, ne za tuđi." data-en="An SMS code is for your account, not someone else.">Kod iz SMS-a je za vaš nalog, ne za tuđi.</li>
        <li data-sr="Nikada ne prosleđujte kod trećoj strani." data-en="Never forward a code to a third party.">Nikada ne prosleđujte kod trećoj strani.</li>
        <li data-sr="Ako prodajete, komunikacija ostaje u okviru platforme gde je moguće." data-en="If selling, keep communication inside the platform when possible.">Ako prodajete, komunikacija ostaje u okviru platforme gde je moguće.</li>
        <li data-sr="Proverite sa operaterom šta znači poruka." data-en="Check with the carrier what the message means.">Proverite sa operaterom šta znači poruka.</li>
        <li data-sr="Pitajte drugim kanalom da li je prijatelj stvarno tražio kod." data-en="Ask on another channel whether a friend really asked for a code.">Pitajte drugim kanalom da li je prijatelj stvarno tražio kod.</li>
        <li data-sr="Čitajte ceo tekst SMS-a, ne samo brojeve." data-en="Read the full SMS text, not only numbers.">Čitajte ceo tekst SMS-a, ne samo brojeve.</li>
        <li data-sr="Zaustavite komunikaciju ako traže kod." data-en="Stop communication if they ask for a code.">Zaustavite komunikaciju ako traže kod.</li>
        <li data-sr="Obrazujte porodicu posebno o ovom obrascu." data-en="Educate family specifically about this pattern.">Obrazujte porodicu posebno o ovom obrascu.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
<ul class="bullets">
            <li data-sr="Da li je ovaj SMS za moj nalog?" data-en="Is this SMS for my account?">Da li je ovaj SMS za moj nalog?</li>
            <li data-sr="Da li neko drugi koristi moj broj u priči?" data-en="Is someone else using my number in their story?">Da li neko drugi koristi moj broj u priči?</li>
            <li data-sr="Da li razumem šta tačno kod potvrđuje?" data-en="Do I understand what the code confirms?">Da li razumem šta tačno kod potvrđuje?</li>
            <li data-sr="Da li bih dao isto u fizičkoj prodavnici?" data-en="Would I do the same in a physical store?">Da li bih dao isto u fizičkoj prodavnici?</li>
            <li data-sr="Da li je hitnost razlog da preskočim čitanje SMS-a?" data-en="Is urgency making me skip reading the SMS?">Da li je hitnost razlog da preskočim čitanje SMS-a?</li>
            <li data-sr="Da li platforma ikada traži kod van svoje aplikacije?" data-en="Does the platform ever ask for a code outside its app?">Da li platforma ikada traži kod van svoje aplikacije?</li>
            <li data-sr="Da li mogu da pitam podršku platforme?" data-en="Can I ask the platform support?">Da li mogu da pitam podršku platforme?</li>
            <li data-sr="Da li je kupac nov i bez istorije?" data-en="Is the buyer new without history?">Da li je kupac nov i bez istorije?</li>
            <li data-sr="Da li traže brisanje dokaza?" data-en="Do they ask to delete evidence?">Da li traže brisanje dokaza?</li>
            <li data-sr="Da li je ponuda previsoka za mali korak?" data-en="Is the offer too high for a small step?">Da li je ponuda previsoka za mali korak?</li>
            <li data-sr="Da li sam već poslao nešto sumnjivo?" data-en="Did I already send something suspicious?">Da li sam već poslao nešto sumnjivo?</li>
            <li data-sr="Da li znam šta je Google Voice tip prevare?" data-en="Do I know the Google Voice style scam?">Da li znam šta je Google Voice tip prevare?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
<ol class="steps">
        <li data-sr="Prekinite kontakt odmah." data-en="End contact immediately.">Prekinite kontakt odmah.</li>
        <li data-sr="Ne šaljite dodatne kodove." data-en="Do not send further codes.">Ne šaljite dodatne kodove.</li>
        <li data-sr="Proverite naloge povezane sa brojem kod operatera." data-en="Check accounts tied to the number with the carrier.">Proverite naloge povezane sa brojem kod operatera.</li>
        <li data-sr="Promenite lozinke servisa ako ste delili kod." data-en="Change passwords of services if you shared a code.">Promenite lozinke servisa ako ste delili kod.</li>
        <li data-sr="Prijavite oglas ili nalog platformi." data-en="Report the listing or account to the platform.">Prijavite oglas ili nalog platformi.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Kom tačno kod si poslao?" data-en="Which exact code did you send?">Kom tačno kod si poslao?</li>
            <li data-sr="Šta je pisalo u SMS-u?" data-en="What did the SMS say?">Šta je pisalo u SMS-u?</li>
            <li data-sr="Da li si prodao ili kupovao?" data-en="Were you selling or buying?">Da li si prodao ili kupovao?</li>
            <li data-sr="Da li si screenshot delio?" data-en="Did you share a screenshot?">Da li si screenshot delio?</li>
      </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Kod sa tvog broja je tvoja identifikacija; ne ide drugima." data-en="A code to your number is your ID; it does not go to others.">Kod sa tvog broja je tvoja identifikacija; ne ide drugima.</li>
            <li data-sr="Hajde da pročitamo SMS zajedno reč po reč." data-en="Let us read the SMS together word for word.">Hajde da pročitamo SMS zajedno reč po reč.</li>
            <li data-sr="Ako kupac traži kod, to je gotovo uvek prevara." data-en="If a buyer asks for a code, it is almost always fraud.">Ako kupac traži kod, to je gotovo uvek prevara.</li>
            <li data-sr="Operater ili platforma objašnjavaju šta kod znači." data-en="The carrier or platform explains what the code means.">Operater ili platforma objašnjavaju šta kod znači.</li>
      </ul>
        </div>
      </div>
    </section>
`
};
