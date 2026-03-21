window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["sim-registration-scam"] = {
  raw_html: `

    <section class="card">
      <h2 data-sr="Uvod: lažna registracija SIM kartice" data-en="Introduction: fake SIM registration">Uvod: lažna registracija SIM kartice</h2>

      <p data-sr="Prevarant se predstavlja kao operater ili državni organ i traži fotografije ličnog dokumenta, PUK ili naknadu za registraciju radi lažne procedure." data-en="The fraudster poses as a carrier or government body and asks for ID photos, PUK, or a registration fee for a fake procedure.">Prevarant se predstavlja kao operater ili državni organ i traži fotografije ličnog dokumenta, PUK ili naknadu za registraciju radi lažne procedure.</p>
      <p data-sr="Cilj je ukrasti identitet, preuzeti kontrolu linije, ili naplatiti uslugu koja ne postoji." data-en="The goal is identity theft, line control, or charging for a non-existent service.">Cilj je ukrasti identitet, preuzeti kontrolu linije, ili naplatiti uslugu koja ne postoji.</p>
      <div class="callout" data-sr="<strong>Model:</strong> lažni poziv ili SMS → prikupljanje podataka ili novca → zloupotreba broja ili identiteta." data-en="<strong>Model:</strong> fake call or SMS → collecting data or money → abuse of number or identity."><strong>Model:</strong> lažni poziv ili SMS → prikupljanje podataka ili novca → zloupotreba broja ili identiteta.</div>
    </section>

    <section class="card">
      <h2 data-sr="Zašto ljudi pristaju" data-en="Why people comply">Zašto ljudi pristaju</h2>

      <p data-sr="Registracija SIM-a i KYC teme zvuče zvanično. Strah od isključenja linije skraćuje proveru." data-en="SIM registration and KYC themes sound official. Fear of line disconnection shortens verification.">Registracija SIM-a i KYC teme zvuče zvanično. Strah od isključenja linije skraćuje proveru.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Signali" data-en="Signals">Signali</div>
          <ul class="bullets">
            <li data-sr="Nepozvani SMS sa linkom za obaveznu registraciju." data-en="Unsolicited SMS with a mandatory registration link.">Nepozvani SMS sa linkom za obaveznu registraciju.</li>
            <li data-sr="Poziv koji traži PUK ili serijski broj kartice." data-en="Call asking for PUK or SIM serial.">Poziv koji traži PUK ili serijski broj kartice.</li>
            <li data-sr="Zahtev za selfie sa dokumentom preko chata." data-en="Request for a selfie with ID over chat.">Zahtev za selfie sa dokumentom preko chata.</li>
            <li data-sr="Mala naknada radi ubrzavanja procesa." data-en="A small fee to speed up the process.">Mala naknada radi ubrzavanja procesa.</li>
      </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Cilj" data-en="Goal">Cilj</div>
          <ul class="bullets">
            <li data-sr="Otvaranje pristupa nalogu kod operatera." data-en="Opening access to the carrier account.">Otvaranje pristupa nalogu kod operatera.</li>
            <li data-sr="Krađa identiteta za druge prevare." data-en="Identity theft for other scams.">Krađa identiteta za druge prevare.</li>
            <li data-sr="Prikupljanje podataka za SIM zamenu." data-en="Collecting data for SIM swap.">Prikupljanje podataka za SIM zamenu.</li>
            <li data-sr="Čista naplata bez usluge." data-en="Pure fee collection without service.">Čista naplata bez usluge.</li>
      </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching).">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Jedan otkriveni dokument može otvoriti više kanala prevare." data-en="One exposed document can open multiple fraud channels.">Jedan otkriveni dokument može otvoriti više kanala prevare.</p>
      <article class="phase ">
        <h3 class="phase-title" data-sr="Faza 1 — Ulaz: poruka, oglas ili poziv" data-en="Phase 1 — Entry: message, ad, or call">Faza 1 — Ulaz: poruka, oglas ili poziv</h3>
        <p data-sr="Stiže obaveštenje da morate ažurirati ili registrovati SIM hitno." data-en="A notice arrives that you must urgently update or register the SIM.">Stiže obaveštenje da morate ažurirati ili registrovati SIM hitno.</p>
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
            <li><a href="vishing.html" data-sr="Višing" data-en="Vishing">Višing</a></li>
            <li><a href="smishing.html" data-sr="Smišing" data-en="Smishing">Smišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik počne unos u kontrolisanoj formi." data-en="<strong>Threshold:</strong> the user begins entry on a controlled form."><strong>Prag faze:</strong> korisnik počne unos u kontrolisanoj formi.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Prag: osetljivi podaci ili kod" data-en="Phase 3 — Threshold: sensitive data or code">Faza 3 — Prag: osetljivi podaci ili kod</h3>
        <p data-sr="Šalju se slike dokumenta, PUK ili uplata na tuđi račun." data-en="ID photos, PUK, or payment to a foreign account are sent.">Šalju se slike dokumenta, PUK ili uplata na tuđi račun.</p>
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
            <li><a href="port-out-scam.html" data-sr="Port out" data-en="Port-out scam">Port out</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik prelazi na zvaničan kanal i zatvara pristup." data-en="<strong>Threshold:</strong> the user switches to an official channel and closes access."><strong>Prag faze:</strong> korisnik prelazi na zvaničan kanal i zatvara pristup.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
<ul class="bullets">
            <li data-sr="Zahtev za PUK ili serijski broj van zvaničnog salona ili aplikacije." data-en="PUK or serial request outside an official store or app.">Zahtev za PUK ili serijski broj van zvaničnog salona ili aplikacije.</li>
            <li data-sr="Slanje ličnog dokumenta preko WhatsApp ili SMS." data-en="Sending ID via WhatsApp or SMS.">Slanje ličnog dokumenta preko WhatsApp ili SMS.</li>
            <li data-sr="Naplata preko uplatnice na fizičko lice." data-en="Payment via slip to a private person.">Naplata preko uplatnice na fizičko lice.</li>
            <li data-sr="Rok od nekoliko sati za registraciju." data-en="A few-hour deadline for registration.">Rok od nekoliko sati za registraciju.</li>
            <li data-sr="Poziv sa robotom koji traži podatke." data-en="A robot call asking for data.">Poziv sa robotom koji traži podatke.</li>
            <li data-sr="Tvrdnja da će linija biti trajno ugasena." data-en="Claim the line will be permanently shut off.">Tvrdnja da će linija biti trajno ugasena.</li>
            <li data-sr="Lažni brending operatera u poruci." data-en="Fake operator branding in the message.">Lažni brending operatera u poruci.</li>
            <li data-sr="Link ka formi koja nije na domenu operatera." data-en="Link to a form not on the carrier domain.">Link ka formi koja nije na domenu operatera.</li>
            <li data-sr="Traženje PIN koda kartice uz SIM priču." data-en="Card PIN requested alongside a SIM story.">Traženje PIN koda kartice uz SIM priču.</li>
            <li data-sr="Ponuda besplatne zamene SIM uz naknadu." data-en="Free SIM replacement offer with a fee.">Ponuda besplatne zamene SIM uz naknadu.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
<ol class="steps">
        <li data-sr="Proverite obaveštenja samo u aplikaciji operatera ili zvaničnom sajtu." data-en="Check notices only in the carrier app or official site.">Proverite obaveštenja samo u aplikaciji operatera ili zvaničnom sajtu.</li>
        <li data-sr="Ne šaljite PUK niti slike dokumenta strancima." data-en="Do not send PUK or ID photos to strangers.">Ne šaljite PUK niti slike dokumenta strancima.</li>
        <li data-sr="Pozovite operatera brojem sa računa ili SIM pakovanja." data-en="Call the carrier using the number on your bill or SIM pack.">Pozovite operatera brojem sa računa ili SIM pakovanja.</li>
        <li data-sr="Proverite da li država zaista traži taj korak na svom sajtu." data-en="Verify on a government site whether the step is really required.">Proverite da li država zaista traži taj korak na svom sajtu.</li>
        <li data-sr="Ne plaćajte registraciju na uplatnicu fizičkog lica." data-en="Do not pay registration to a private person slip.">Ne plaćajte registraciju na uplatnicu fizičkog lica.</li>
        <li data-sr="Uporedite jezik poruke sa zvaničnim obaveštenjima." data-en="Compare message wording to official notices.">Uporedite jezik poruke sa zvaničnim obaveštenjima.</li>
        <li data-sr="Pitajte u salonu pre slanja bilo čega." data-en="Ask in a store before sending anything.">Pitajte u salonu pre slanja bilo čega.</li>
        <li data-sr="Obavestite starije u porodici ovom pravilu." data-en="Tell older family members this rule.">Obavestite starije u porodici ovom pravilu.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
<ul class="bullets">
            <li data-sr="Da li sam ja tražio promenu SIM-a ili paketa?" data-en="Did I request a SIM or plan change?">Da li sam ja tražio promenu SIM-a ili paketa?</li>
            <li data-sr="Da li je link na domenu mog operatera?" data-en="Is the link on my carrier domain?">Da li je link na domenu mog operatera?</li>
            <li data-sr="Da li bih slao dokument ovako u filijali?" data-en="Would I send a document this way in a branch?">Da li bih slao dokument ovako u filijali?</li>
            <li data-sr="Da li postoji isto obaveštenje u aplikaciji?" data-en="Does the same notice exist in the app?">Da li postoji isto obaveštenje u aplikaciji?</li>
            <li data-sr="Da li rok deluje prekratko?" data-en="Does the deadline feel too short?">Da li rok deluje prekratko?</li>
            <li data-sr="Da li traže PUK?" data-en="Do they ask for PUK?">Da li traže PUK?</li>
            <li data-sr="Da li je uplata na fizičko lice?" data-en="Is payment to a private person?">Da li je uplata na fizičko lice?</li>
            <li data-sr="Da li poziv dolazi sa generičkog broja?" data-en="Does the call come from a generic number?">Da li poziv dolazi sa generičkog broja?</li>
            <li data-sr="Da li mogu sačekati i proveriti sutra?" data-en="Can I wait and verify tomorrow?">Da li mogu sačekati i proveriti sutra?</li>
            <li data-sr="Da li je tekst pun pravopisnih grešaka?" data-en="Is the text full of spelling errors?">Da li je tekst pun pravopisnih grešaka?</li>
            <li data-sr="Da li operater ikada traži selfie preko SMS-a?" data-en="Does the carrier ever ask for a selfie via SMS?">Da li operater ikada traži selfie preko SMS-a?</li>
            <li data-sr="Da li je cena usluge objavljena zvanično?" data-en="Is the service price published officially?">Da li je cena usluge objavljena zvanično?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
<ol class="steps">
        <li data-sr="Prekinite komunikaciju i ne šaljite dokumente." data-en="Stop communication and do not send documents.">Prekinite komunikaciju i ne šaljite dokumente.</li>
        <li data-sr="Pozovite operatera zvaničnim kanalom." data-en="Call the carrier on an official channel.">Pozovite operatera zvaničnim kanalom.</li>
        <li data-sr="Ako ste slali dokumente, razmotrite prijavu za krađu identiteta." data-en="If you sent documents, consider an identity theft report.">Ako ste slali dokumente, razmotrite prijavu za krađu identiteta.</li>
        <li data-sr="Promenite lozinke naloga kod operatera." data-en="Change passwords on carrier accounts.">Promenite lozinke naloga kod operatera.</li>
        <li data-sr="Pratite račune za neobične promene paketa." data-en="Watch bills for unusual plan changes.">Pratite račune za neobične promene paketa.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Šta tačno traže?" data-en="What exactly do they ask for?">Šta tačno traže?</li>
            <li data-sr="Da li si slao slike dokumenta?" data-en="Did you send ID images?">Da li si slao slike dokumenta?</li>
            <li data-sr="Da li si uneo PUK?" data-en="Did you enter PUK?">Da li si uneo PUK?</li>
            <li data-sr="Da li si plaćao?" data-en="Did you pay?">Da li si plaćao?</li>
      </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="PUK i dokument su granica; to ide samo kroz operatera ili salon." data-en="PUK and ID are a boundary; they go only through carrier or store.">PUK i dokument su granica; to ide samo kroz operatera ili salon.</li>
            <li data-sr="Hajde da otvorimo aplikaciju operatera zajedno." data-en="Let us open the carrier app together.">Hajde da otvorimo aplikaciju operatera zajedno.</li>
            <li data-sr="Državna registracija ima javno objavljene korake." data-en="Government registration has publicly posted steps.">Državna registracija ima javno objavljene korake.</li>
            <li data-sr="Bolje kasnije nego izgubiti identitet." data-en="Better late than losing identity.">Bolje kasnije nego izgubiti identitet.</li>
      </ul>
        </div>
      </div>
    </section>
`
};
