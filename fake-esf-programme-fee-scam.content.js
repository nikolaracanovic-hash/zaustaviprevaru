window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["fake-esf-programme-fee-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
      <p data-sr="Lažni ESF stil koristi poznati jezik fondova da bi se izvukla uplata pre provere kod tela za upravljanje." data-en="Organizations in training, employment, or social services often apply to programmes publicly labelled as EU social funds. The fraudster sends an invite, partnership agreement, or approval notice and requests a consortium registration, audit, or bank charge fee before an official contract with the managing authority exists.">Lažni ESF stil koristi poznati jezik fondova da bi se izvukla uplata pre provere kod tela za upravljanje.</p>
      <p data-sr="Nadležno telo se uvek može proveriti nezavisno od dokumenta u prilogu." data-en="A real ESF path goes through open calls, public lists, and a contract with a clear budget, without advances to a consultant who cold-contacted you.">Nadležno telo se uvek može proveriti nezavisno od dokumenta u prilogu.</p>
      <div class="callout" data-sr="<strong>Model:</strong> ciljanje NVO → lažni poziv → naknada pre potpisa → porez ili garancija → isplata ne dolazi." data-en="<strong>Model:</strong> NGO targeting → fake invite → fee before signature → tax or guarantee → no payout."><strong>Model:</strong> ciljanje NVO → lažni poziv → naknada pre potpisa → porez ili garancija → isplata ne dolazi.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi" data-en="How it generally works">Kako generalno radi</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Ciljanje" data-en="Targeting">Ciljanje</div>
          <ul class="bullets">
            <li data-sr="Javni podaci o projektima i donorima na sajtu organizacije." data-en="Public data on projects and donors on the organization's site.">Javni podaci o projektima i donorima na sajtu organizacije.</li>
            <li data-sr="Lista učesnika sa konferencija ili radionica objavljena onlajn." data-en="Participant lists from conferences or workshops published online.">Lista učesnika sa konferencija ili radionica objavljena onlajn.</li>
            <li data-sr="Imejl domen koji liči na EU ali je pogrešno napisan." data-en="Email domain resembling EU but misspelled.">Imejl domen koji liči na EU ali je pogrešno napisan.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Naknade" data-en="Fees">Naknade</div>
          <ul class="bullets">
            <li data-sr="Partnerska ili administrativna naknada pre potpisivanja grant ugovora." data-en="Partnership or admin fee before grant agreement signing.">Partnerska ili administrativna naknada pre potpisivanja grant ugovora.</li>
            <li data-sr="Revizijski depozit ili osiguranje isplate." data-en="Audit deposit or disbursement insurance.">Revizijski depozit ili osiguranje isplate.</li>
            <li data-sr="Taksa za prioritetnu obradu jer je kvota skoro puna." data-en="Priority processing fee because quota is almost full.">Taksa za prioritetnu obradu jer je kvota skoro puna.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching)">Hronološki tok (faze + grananja)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Lažni poziv ili odobrenje" data-en="Phase 1 — Fake call or approval">Faza 1 — Lažni poziv ili odobrenje</h3>
        <p data-sr="Početak koristi pozitivnu vest i mali iznos." data-en="A letter arrives that you are selected or waitlisted on condition you pay a small cost to open the project.">Početak koristi pozitivnu vest i mali iznos.</p>
        <ul class="bullets">
          <li data-sr="signal: nema trag ove prijave u vašem sistemu dokumentacije." data-en="signal: no trace of this application in your documentation system.">signal: nema trag ove prijave u vašem sistemu dokumentacije.</li>
          <li data-sr="signal: naziv programa ne odgovara trenutno otvorenom pozivu na sajtu tela." data-en="signal: programme name does not match the current open call on the authority site.">signal: naziv programa ne odgovara trenutno otvorenom pozivu na sajtu tela.</li>
          <li data-sr="signal: kontakt ne koristi domen europa.eu ili nacionalne agencije koju proveravate." data-en="signal: contact does not use europa.eu or the national agency domain you verify.">signal: kontakt ne koristi domen europa.eu ili nacionalne agencije koju proveravate.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> upravni odbor ili direktor razmatra učešće." data-en="<strong>Phase threshold:</strong> board or director considers participation."><strong>Prag faze:</strong> upravni odbor ili direktor razmatra učešće.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Dokumentacija" data-en="Phase 2 — Documentation">Faza 2 — Dokumentacija</h3>
        <p data-sr="Formalni izgled dokumenta povećava poverenje." data-en="NDA, partnership memorandum, and payment instructions arrive with a few days' deadline.">Formalni izgled dokumenta povećava poverenje.</p>
        <ul class="bullets">
          <li data-sr="signal: potpisi nemaju kontakt telefon koji odgovara javnom imeniku." data-en="signal: signatures have no phone matching the public directory.">signal: potpisi nemaju kontakt telefon koji odgovara javnom imeniku.</li>
          <li data-sr="signal: traže se poverljivi budžetski podaci pre verifikacije identiteta partnera." data-en="signal: confidential budget data is requested before partner identity verification.">signal: traže se poverljivi budžetski podaci pre verifikacije identiteta partnera.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="grant-fund-scam.html" data-sr="Prevara grantova" data-en="Grant scam">Prevara grantova</a></li>
            <li><a href="fake-ngo-partnership-scam.html" data-sr="Lažno NVO partnerstvo" data-en="Fake NGO partnership">Lažno NVO partnerstvo</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> potpisani su dokumenti ili poslati osetljivi podaci." data-en="<strong>Phase threshold:</strong> documents were signed or sensitive data sent."><strong>Prag faze:</strong> potpisani su dokumenti ili poslati osetljivi podaci.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Prva uplata" data-en="Phase 3 — First payment">Faza 3 — Prva uplata</h3>
        <p data-sr="Novac napušta račun pre zvaničnog ugovora." data-en="The organization pays registration or partnership fee to a third-party account.">Novac napušta račun pre zvaničnog ugovora.</p>
        <ul class="bullets">
          <li data-sr="signal: račun primaoca nije institucija koja vodi program." data-en="signal: beneficiary account is not the institution running the programme.">signal: račun primaoca nije institucija koja vodi program.</li>
          <li data-sr="signal: uplata je u devizama ili kriptu bez objašnjenja u budžetu projekta." data-en="signal: payment is in foreign currency or crypto without project budget explanation.">signal: uplata je u devizama ili kriptu bez objašnjenja u budžetu projekta.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> prva uplata je proknjižena." data-en="<strong>Phase threshold:</strong> first payment is booked."><strong>Prag faze:</strong> prva uplata je proknjižena.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Porez i garancija" data-en="Phase 4 — Tax and guarantee">Faza 4 — Porez i garancija</h3>
        <p data-sr="Obrazac advance fee se ponavlja." data-en="Tax or bank guarantee obligation is introduced before grant disbursement, with a new deadline.">Obrazac advance fee se ponavlja.</p>
        <ul class="bullets">
          <li data-sr="signal: svaka prepreka se rešava samo novom uplatom." data-en="signal: each obstacle is resolved only by a new payment.">signal: svaka prepreka se rešava samo novom uplatom.</li>
          <li data-sr="signal: knjigovođa ne nalazi osnov u ugovoru koji ste potpisali." data-en="signal: accountant finds no basis in the agreement you signed.">signal: knjigovođa ne nalazi osnov u ugovoru koji ste potpisali.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="cohesion-fund-release-scam.html" data-sr="Kohezioni fond" data-en="Cohesion fund scam">Kohezioni fond</a></li>
            <li><a href="advance-fee-fraud.html" data-sr="Uplata unapred" data-en="Advance-fee fraud">Uplata unapred</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> organizacija je u dubokom trošku i očekuje isplatu." data-en="<strong>Phase threshold:</strong> the organization is deep in cost and expects payout."><strong>Prag faze:</strong> organizacija je u dubokom trošku i očekuje isplatu.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Upit telu za upravljanje" data-en="Phase 5 — Managing authority query">Faza 5 — Upit telu za upravljanje</h3>
        <p data-sr="Zvanična provera ruši narativ." data-en="When you call the national body or check the portal, the grant or call does not exist under that reference.">Zvanična provera ruši narativ.</p>
        <ul class="bullets">
          <li data-sr="signal: telo nema zaposlenog sa imenom iz potpisa." data-en="signal: authority has no employee with the signature name.">signal: telo nema zaposlenog sa imenom iz potpisa.</li>
          <li data-sr="signal: projekat nije na listi odobrenih ili u postupku." data-en="signal: project is not on approved or pipeline lists.">signal: projekat nije na listi odobrenih ili u postupku.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> postoji pisan odgovor ili zapis razgovora koji negira priču." data-en="<strong>Phase threshold:</strong> there is written reply or call notes denying the story."><strong>Prag faze:</strong> postoji pisan odgovor ili zapis razgovora koji negira priču.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Recovery i zaštita" data-en="Phase 6 — Recovery and protection">Faza 6 — Recovery i zaštita</h3>
        <p data-sr="Treba prijaviti i zaštititi podatke partnera." data-en="A new contact may offer recovery for another payment; that continues the scam.">Treba prijaviti i zaštititi podatke partnera.</p>
        <ul class="bullets">
          <li data-sr="signal: advokat vas kontaktira bez vašeg upita." data-en="signal: a lawyer contacts you without your inquiry.">signal: advokat vas kontaktira bez vašeg upita.</li>
          <li data-sr="signal: isti dokumenti kruže drugim NVO u istoj nedelji." data-en="signal: same documents circulate to other NGOs the same week.">signal: isti dokumenti kruže drugim NVO u istoj nedelji.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="recovery-scam.html" data-sr="Prevara povraćaja" data-en="Recovery scam">Prevara povraćaja</a></li>
            <li><a href="fake-eu-program-scam.html" data-sr="Lažni EU programi" data-en="Fake EU programme scams">Lažni EU programi</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> organizacija prekida dalje uplate i obaveštava partnere." data-en="<strong>Phase threshold:</strong> the organization stops further payments and notifies partners."><strong>Prag faze:</strong> organizacija prekida dalje uplate i obaveštava partnere.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Naknada pre zvaničnog ugovora o dodeli sredstava." data-en="Fee before official award agreement.">Naknada pre zvaničnog ugovora o dodeli sredstava.</li>
        <li data-sr="Kontakt ne možete potvrditi kroz javni broj tela za upravljanje." data-en="Contact cannot be verified via the managing authority's public number.">Kontakt ne možete potvrditi kroz javni broj tela za upravljanje.</li>
        <li data-sr="Programski naziv ne postoji u trenutno otvorenim pozivima." data-en="Programme name not in currently open calls.">Programski naziv ne postoji u trenutno otvorenim pozivima.</li>
        <li data-sr="Uplata ide konsultantu koji vas je prvi kontaktirao." data-en="Payment goes to consultant who first contacted you.">Uplata ide konsultantu koji vas je prvi kontaktirao.</li>
        <li data-sr="Zahtev za kripto ili devizni račun u inostranstvu." data-en="Request for crypto or foreign currency account.">Zahtev za kripto ili devizni račun u inostranstvu.</li>
        <li data-sr="Rok kraći od vremena potrebnog za odluku upravnog odbora." data-en="Deadline shorter than board decision time.">Rok kraći od vremena potrebnog za odluku upravnog odbora.</li>
        <li data-sr="Isti PDF šalju više organizacija u regionu." data-en="Same PDF sent to multiple organizations in the region.">Isti PDF šalju više organizacija u regionu.</li>
        <li data-sr="Traže puna bankarska ovlašćenja radi verifikacije." data-en="They want full banking mandates for verification.">Traže puna bankarska ovlašćenja radi verifikacije.</li>
        <li data-sr="Nema reference na broj prijave koji imate u svom sistemu." data-en="No reference to an application number you have in your system.">Nema reference na broj prijave koji imate u svom sistemu.</li>
        <li data-sr="Pritisak da ne obavestite donore ili članove do potpisa." data-en="Pressure not to inform donors or members until signing.">Pritisak da ne obavestite donore ili članove do potpisa.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Program" data-en="Programme">Program</div>
          <ul class="bullets">
            <li data-sr="Pronađite otvoreni poziv na sajtu nacionalnog tela za upravljanje." data-en="Find the open call on the national managing authority website.">Pronađite otvoreni poziv na sajtu nacionalnog tela za upravljanje.</li>
            <li data-sr="Uporedite naziv i akronim programa sa zvaničnom listom." data-en="Compare programme name and acronym to official list.">Uporedite naziv i akronim programa sa zvaničnom listom.</li>
            <li data-sr="Pitajte drugu organizaciju iz mreže da li je dobila isti dokument." data-en="Ask another network organization if it received the same document.">Pitajte drugu organizaciju iz mreže da li je dobila isti dokument.</li>
            <li data-sr="Proverite domen imejla kroz whois ili kontakt sa telom." data-en="Verify email domain via whois or authority contact.">Proverite domen imejla kroz whois ili kontakt sa telom.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Finansije" data-en="Finance">Finansije</div>
          <ul class="bullets">
            <li data-sr="Pravilo: bez uplate pre zvaničnog ugovora o dodeli." data-en="Rule: no payment before official award agreement.">Pravilo: bez uplate pre zvaničnog ugovora o dodeli.</li>
            <li data-sr="Računovođa treba da vidi budžetsku stavku pre transfera." data-en="Accountant should see budget line before transfer.">Računovođa treba da vidi budžetsku stavku pre transfera.</li>
            <li data-sr="Banka može označiti primaoca kao visok rizik." data-en="Bank may flag payee as high risk.">Banka može označiti primaoca kao visok rizik.</li>
            <li data-sr="Sačuvajte sva pisma za prijavu nadležnim telima." data-en="Keep all letters for reporting to authorities.">Sačuvajte sva pisma za prijavu nadležnim telima.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
      <ul class="bullets">
        <li data-sr="Da li postoji naš trag prijave u internom arhivu?" data-en="Is there a trace of our application in internal archives?">Da li postoji naš trag prijave u internom arhivu?</li>
        <li data-sr="Da li je program na zvaničnoj listi otvorenih poziva?" data-en="Is the programme on the official open calls list?">Da li je program na zvaničnoj listi otvorenih poziva?</li>
        <li data-sr="Da li smo pozvali telo za upravljanje na javni broj?" data-en="Did we call the managing authority on a public number?">Da li smo pozvali telo za upravljanje na javni broj?</li>
        <li data-sr="Da li imejl dolazi sa zvaničnog domena te institucije?" data-en="Does email come from that institution's official domain?">Da li imejl dolazi sa zvaničnog domena te institucije?</li>
        <li data-sr="Da li ugovor potpisujemo pre ili posle prve uplate?" data-en="Do we sign the contract before or after the first payment?">Da li ugovor potpisujemo pre ili posle prve uplate?</li>
        <li data-sr="Da li je primalac uplate državno telo ili banka projekta?" data-en="Is payee a state body or project bank account?">Da li je primalac uplate državno telo ili banka projekta?</li>
        <li data-sr="Da li postoji stavka u budžetu za ovu naknadu?" data-en="Is there a budget line for this fee?">Da li postoji stavka u budžetu za ovu naknadu?</li>
        <li data-sr="Da li druga NVO ima isti dokument?" data-en="Does another NGO have the same document?">Da li druga NVO ima isti dokument?</li>
        <li data-sr="Da li nas pritisak tera da ne pitamo donore?" data-en="Does pressure tell us not to ask donors?">Da li nas pritisak tera da ne pitamo donore?</li>
        <li data-sr="Da li je rok kraći od 48 sati?" data-en="Is deadline under 48 hours?">Da li je rok kraći od 48 sati?</li>
        <li data-sr="Da li smo već platili i grant još uvek nije na računu?" data-en="Have we paid and grant still not on account?">Da li smo već platili i grant još uvek nije na računu?</li>
        <li data-sr="Da li bismo ovo prijavili donoru kao rizično?" data-en="Would we report this to a donor as risky?">Da li bismo ovo prijavili donoru kao rizično?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Zaustavite sve uplate i obavestite predsednika odbora." data-en="Stop all payments and notify the board chair.">Zaustavite sve uplate i obavestite predsednika odbora.</li>
        <li data-sr="Kontaktirajte nacionalno telo za upravljanje fondom." data-en="Contact the national managing authority for funds.">Kontaktirajte nacionalno telo za upravljanje fondom.</li>
        <li data-sr="Konsultujte advokata specijalizovanog za EU projekte." data-en="Consult a lawyer specialized in EU projects.">Konsultujte advokata specijalizovanog za EU projekte.</li>
        <li data-sr="Arhivirajte imejlove sa zaglavljima." data-en="Archive emails with headers.">Arhivirajte imejlove sa zaglavljima.</li>
        <li data-sr="Upozorite partnerske organizacije u istom pismu." data-en="Warn partner organizations in the same thread.">Upozorite partnerske organizacije u istom pismu.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li je ovaj poziv na zvaničnoj strani tela?" data-en="Is this call on the authority's official page?">Da li je ovaj poziv na zvaničnoj strani tela?</li>
            <li data-sr="Da li postoji broj prijave koji ste sami podneli?" data-en="Is there an application number you submitted yourself?">Da li postoji broj prijave koji ste sami podneli?</li>
            <li data-sr="Da li bi donor odobrio uplatu konsultantu pre ugovora?" data-en="Would a donor approve paying a consultant before the contract?">Da li bi donor odobrio uplatu konsultantu pre ugovora?</li>
            <li data-sr="Da li ista poruka stiže konkurentskoj NVO?" data-en="Is the same message reaching a peer NGO?">Da li ista poruka stiže konkurentskoj NVO?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Hajde da pozovemo telo za upravljanje pre bilo kakve uplate." data-en="Let's call the managing authority before any payment.">Hajde da pozovemo telo za upravljanje pre bilo kakve uplate.</li>
            <li data-sr="Pravi grant ne počinje avansom trećem licu iz hladnog imejla." data-en="A real grant does not start with a cold-email third-party advance.">Pravi grant ne počinje avansom trećem licu iz hladnog imejla.</li>
            <li data-sr="Rok od 24 sata je skoro uvek znak prevare u javnom sektoru." data-en="A 24-hour deadline is almost always a scam signal in the public sector.">Rok od 24 sata je skoro uvek znak prevare u javnom sektoru.</li>
            <li data-sr="Ako nestane kada tražite zvanični poziv, nije bilo ni granta." data-en="If it vanishes when you ask for the official call, there was no grant.">Ako nestane kada tražite zvanični poziv, nije bilo ni granta.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
