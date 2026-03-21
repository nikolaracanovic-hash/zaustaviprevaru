window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["fake-procurement-blacklist-removal-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
      <p data-sr="Pravi postupci isključenja i žalbi idu kroz objavljene odluke i rokove, ne kroz privatnu uplatu iz neočekivanog kontakta." data-en="A company receives a call, email, or message claiming it is on a public procurement blacklist, debarment register, or tender access is blocked until it pays a removal, appeal, or database correction fee. A known buyer or portal name is often used.">Pravi postupci isključenja i žalbi idu kroz objavljene odluke i rokove, ne kroz privatnu uplatu iz neočekivanog kontakta.</p>
      <p data-sr="Naknada trećem licu pre potvrde naručioca je visok rizik prevare." data-en="Always verify status on the real public procurement portal and call the contracting authority on the official site number, not the number from the message.">Naknada trećem licu pre potvrde naručioca je visok rizik prevare.</p>
      <div class="callout" data-sr="<strong>Model:</strong> upozorenje → crna lista → naknada za uklanjanje → verifikacija → nova naknada → nestanak." data-en="<strong>Model:</strong> warning → blacklist → removal fee → verification → new fee → disappearance."><strong>Model:</strong> upozorenje → crna lista → naknada za uklanjanje → verifikacija → nova naknada → nestanak.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi" data-en="How it generally works">Kako generalno radi</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Priprema" data-en="Setup">Priprema</div>
          <ul class="bullets">
            <li data-sr="Javni podaci o tome da firma učestvuje u tenderima." data-en="Public data that the firm bids on tenders.">Javni podaci o tome da firma učestvuje u tenderima.</li>
            <li data-sr="Ime naručioca koji deluje poznato u sektoru." data-en="Buyer name that sounds familiar in the sector.">Ime naručioca koji deluje poznato u sektoru.</li>
            <li data-sr="PDF sa tabelom rokova i pretnjom trajne zabrane." data-en="PDF with deadline table and permanent ban threat.">PDF sa tabelom rokova i pretnjom trajne zabrane.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Naplata" data-en="Billing">Naplata</div>
          <ul class="bullets">
            <li data-sr="Naknada za administrativno uklanjanje sa liste." data-en="Fee for administrative removal from list.">Naknada za administrativno uklanjanje sa liste.</li>
            <li data-sr="Uplata konsultantu ili registratoru koji nije državni organ." data-en="Payment to consultant or registrar who is not a state body.">Uplata konsultantu ili registratoru koji nije državni organ.</li>
            <li data-sr="Zahtev za punim pristupom portalu nabavki radi verifikacije." data-en="Request for full procurement portal access for verification.">Zahtev za punim pristupom portalu nabavki radi verifikacije.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching)">Hronološki tok (faze + grananja)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Obaveštenje o blokadi" data-en="Phase 1 — Block notice">Faza 1 — Obaveštenje o blokadi</h3>
        <p data-sr="Strah od gubitka posla je centralni motiv." data-en="The message claims you cannot submit bids until you fix list status.">Strah od gubitka posla je centralni motiv.</p>
        <ul class="bullets">
          <li data-sr="signal: nema broja odluke koji možete naći na portalu nabavki." data-en="signal: no decision number findable on procurement portal.">signal: nema broja odluke koji možete naći na portalu nabavki.</li>
          <li data-sr="signal: kontakt ne želi da sačeka vaš poziv naručiocu." data-en="signal: contact will not wait for your call to buyer.">signal: kontakt ne želi da sačeka vaš poziv naručiocu.</li>
          <li data-sr="signal: rok je istekao juče ili ističe danas." data-en="signal: deadline expired yesterday or ends today.">signal: rok je istekao juče ili ističe danas.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> direktor ili nabavka veruje da je blokada moguća." data-en="<strong>Phase threshold:</strong> director or procurement believes block may be real."><strong>Prag faze:</strong> direktor ili nabavka veruje da je blokada moguća.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Lažni dokumenti" data-en="Phase 2 — Fake documents">Faza 2 — Lažni dokumenti</h3>
        <p data-sr="Logo i format kopiraju javne strane." data-en="PDF looks like a portal or buyer notice.">Logo i format kopiraju javne strane.</p>
        <ul class="bullets">
          <li data-sr="signal: link u PDF-u vodi na domen koji nije zvanični portal." data-en="signal: PDF link leads to domain not the official portal.">signal: link u PDF-u vodi na domen koji nije zvanični portal.</li>
          <li data-sr="signal: potpis nije isti kao u ranijim pismima naručioca." data-en="signal: signature not same as prior buyer letters.">signal: potpis nije isti kao u ranijim pismima naručioca.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="procurement-tender-scam.html" data-sr="Lažni tenderi" data-en="Procurement tender scam">Lažni tenderi</a></li>
            <li><a href="vendor-registration-fee.html" data-sr="Registracija dobavljača" data-en="Vendor registration fee">Registracija dobavljača</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> dokument se prosleđuje finansijama za uplatu." data-en="<strong>Phase threshold:</strong> document forwarded to finance for payment."><strong>Prag faze:</strong> dokument se prosleđuje finansijama za uplatu.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Prva uplata" data-en="Phase 3 — First payment">Faza 3 — Prva uplata</h3>
        <p data-sr="Primalac nije budžetski račun naručioca." data-en="Company sends money to consultant or agency from letter.">Primalac nije budžetski račun naručioca.</p>
        <ul class="bullets">
          <li data-sr="signal: model uplate nije isti kao u uputstvima sa portala." data-en="signal: payment model differs from portal instructions.">signal: model uplate nije isti kao u uputstvima sa portala.</li>
          <li data-sr="signal: traže se devize ili kripto." data-en="signal: foreign currency or crypto requested.">signal: traže se devize ili kripto.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> uplata je izvršena." data-en="<strong>Phase threshold:</strong> payment executed."><strong>Prag faze:</strong> uplata je izvršena.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Verifikacija i dodatak" data-en="Phase 4 — Verification add-on">Faza 4 — Verifikacija i dodatak</h3>
        <p data-sr="Obrazac serijskih naknada." data-en="After payment, extra KYC, AML, or notary fee is requested.">Obrazac serijskih naknada.</p>
        <ul class="bullets">
          <li data-sr="signal: svaka faza ima novi iznos i isti rok od 24 sata." data-en="signal: each stage has new amount and same 24h deadline.">signal: svaka faza ima novi iznos i isti rok od 24 sata.</li>
          <li data-sr="signal: ne daju pisanu potvrdu naručioca o uklanjanju." data-en="signal: no written buyer confirmation of removal.">signal: ne daju pisanu potvrdu naručioca o uklanjanju.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="aml-clearance-certificate.html" data-sr="AML sertifikat" data-en="AML clearance scam">AML sertifikat</a></li>
            <li><a href="advance-fee-fraud.html" data-sr="Uplata unapred" data-en="Advance fee">Uplata unapred</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> više uplata bez promene statusa na portalu." data-en="<strong>Phase threshold:</strong> multiple payments without portal status change."><strong>Prag faze:</strong> više uplata bez promene statusa na portalu.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Provera kod naručioca" data-en="Phase 5 — Buyer check">Faza 5 — Provera kod naručioca</h3>
        <p data-sr="Zvanična nabavka negira priču." data-en="When you call the buyer on a public number, there is often no block or case under that reference.">Zvanična nabavka negira priču.</p>
        <ul class="bullets">
          <li data-sr="signal: portal ne prikazuje isključenje vaše firme." data-en="signal: portal shows no debarment of your company.">signal: portal ne prikazuje isključenje vaše firme.</li>
          <li data-sr="signal: pravna služba naručioca nema zapis o tom zahtevu." data-en="signal: buyer legal has no record of that request.">signal: pravna služba naručioca nema zapis o tom zahtevu.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> postoji zapis od naručioca koji opovrgava blokadu." data-en="<strong>Phase threshold:</strong> buyer record exists denying the block."><strong>Prag faze:</strong> postoji zapis od naručioca koji opovrgava blokadu.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Prijava i obnova pristupa" data-en="Phase 6 — Report and access recovery">Faza 6 — Prijava i obnova pristupa</h3>
        <p data-sr="Smanjite štetu od daljih lažnih ponuda." data-en="If portal credentials were stolen, password reset and incident reporting follow.">Smanjite štetu od daljih lažnih ponuda.</p>
        <ul class="bullets">
          <li data-sr="signal: u sistemu se pojavljuju lažne ponude poslate u vaše ime." data-en="signal: fake bids appear sent in your name.">signal: u sistemu se pojavljuju lažne ponude poslate u vaše ime.</li>
          <li data-sr="signal: isti scenario prijavljuju druge firme u sektoru." data-en="signal: other firms in sector report same scenario.">signal: isti scenario prijavljuju druge firme u sektoru.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="business-email-compromise.html" data-sr="BEC" data-en="BEC">BEC</a></li>
            <li><a href="procurement-award-scam.html" data-sr="Lažna dodela" data-en="Procurement award scam">Lažna dodela</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> pristup portalu je obnovljen i uplate zaustavljene." data-en="<strong>Phase threshold:</strong> portal access restored and payments stopped."><strong>Prag faze:</strong> pristup portalu je obnovljen i uplate zaustavljene.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Blokada tendera bez objave na zvaničnom portalu." data-en="Tender block with no notice on official portal.">Blokada tendera bez objave na zvaničnom portalu.</li>
        <li data-sr="Uplata trećem licu pre razgovora sa naručiocem." data-en="Payment to third party before talking to buyer.">Uplata trećem licu pre razgovora sa naručiocem.</li>
        <li data-sr="Rok kraći od vremena da se pročita odluka." data-en="Deadline shorter than time to read a decision.">Rok kraći od vremena da se pročita odluka.</li>
        <li data-sr="Zabrana kontaktiranja pravnog tima firme." data-en="Forbidden to contact company legal team.">Zabrana kontaktiranja pravnog tima firme.</li>
        <li data-sr="Zahtev za kripto ili gotovinu kuriru." data-en="Crypto or cash to courier request.">Zahtev za kripto ili gotovinu kuriru.</li>
        <li data-sr="Isti PDF šalju više firmi u istom danu." data-en="Same PDF sent to multiple firms same day.">Isti PDF šalju više firmi u istom danu.</li>
        <li data-sr="Broj pozivaoca nije na sajtu naručioca." data-en="Caller number not on buyer website.">Broj pozivaoca nije na sajtu naručioca.</li>
        <li data-sr="Nema broja rešenja koje možete citirati šalteru." data-en="No decision number you can cite at counter.">Nema broja rešenja koje možete citirati šalteru.</li>
        <li data-sr="Traže lozinku portala javnih nabavki." data-en="They ask for public procurement portal password.">Traže lozinku portala javnih nabavki.</li>
        <li data-sr="Naknada za uklanjanje sa liste bez sudskog ili administrativnog traga." data-en="List removal fee with no court or admin trail.">Naknada za uklanjanje sa liste bez sudskog ili administrativnog traga.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Portal" data-en="Portal">Portal</div>
          <ul class="bullets">
            <li data-sr="Ulogujte se na zvanični portal nabavki i proverite status firme." data-en="Log into official procurement portal and check company status.">Ulogujte se na zvanični portal nabavki i proverite status firme.</li>
            <li data-sr="Pretražite broj odluke ako je naveden." data-en="Search decision number if cited.">Pretražite broj odluke ako je naveden.</li>
            <li data-sr="Pozovite naručioca na broj sa njegovog sajta." data-en="Call buyer on number from their site.">Pozovite naručioca na broj sa njegovog sajta.</li>
            <li data-sr="Pitajte pravnog zastupnika da proveri registre isključenja." data-en="Ask counsel to check debarment registers.">Pitajte pravnog zastupnika da proveri registre isključenja.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Novac" data-en="Money">Novac</div>
          <ul class="bullets">
            <li data-sr="Ne plaćajte dok naručilac ne potvrdi pismeno ili zvaničnim mejlom sa domena." data-en="Do not pay until buyer confirms in writing or official domain email.">Ne plaćajte dok naručilac ne potvrdi pismeno ili zvaničnim mejlom sa domena.</li>
            <li data-sr="Odbijte konsultantsku uplatu bez ugovora." data-en="Refuse consultant payment without contract.">Odbijte konsultantsku uplatu bez ugovora.</li>
            <li data-sr="Banka može označiti primaoca kao rizičnog." data-en="Bank may flag payee as risky.">Banka može označiti primaoca kao rizičnog.</li>
            <li data-sr="Arhivirajte sve poruke za OLAF ili policiju." data-en="Archive all messages for OLAF or police.">Arhivirajte sve poruke za OLAF ili policiju.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
      <ul class="bullets">
        <li data-sr="Da li portal prikazuje isključenje?" data-en="Does portal show debarment?">Da li portal prikazuje isključenje?</li>
        <li data-sr="Da li postoji broj odluke?" data-en="Is there a decision number?">Da li postoji broj odluke?</li>
        <li data-sr="Da li je naručilac potvrdio telefonom sa javnog broja?" data-en="Did buyer confirm on public number?">Da li je naručilac potvrdio telefonom sa javnog broja?</li>
        <li data-sr="Da li imejl naručioca dolazi sa pravog domena?" data-en="Buyer email from correct domain?">Da li imejl naručioca dolazi sa pravog domena?</li>
        <li data-sr="Da li je primalac državni račun ili naš ugovorni partner?" data-en="Is payee treasury or our contracted partner?">Da li je primalac državni račun ili naš ugovorni partner?</li>
        <li data-sr="Da li pravni tim vidi istu obavezu?" data-en="Does legal see same obligation?">Da li pravni tim vidi istu obavezu?</li>
        <li data-sr="Da li je rok realan za žalbu?" data-en="Is deadline realistic for appeal?">Da li je rok realan za žalbu?</li>
        <li data-sr="Da li traže lozinku portala?" data-en="Do they ask portal password?">Da li traže lozinku portala?</li>
        <li data-sr="Da li ista poruka stiže konkurentu?" data-en="Same message to competitor?">Da li ista poruka stiže konkurentu?</li>
        <li data-sr="Da li smo već platili i status isti?" data-en="Paid and status unchanged?">Da li smo već platili i status isti?</li>
        <li data-sr="Da li bi interni audit odobrio ovu uplatu?" data-en="Would internal audit approve this payment?">Da li bi interni audit odobrio ovu uplatu?</li>
        <li data-sr="Da li postoji trag u sudskom registru ako pominju sankciju?" data-en="Court register trail if sanction cited?">Da li postoji trag u sudskom registru ako pominju sankciju?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Zaustavite uplate i obavestite pravni tim." data-en="Stop payments and notify legal.">Zaustavite uplate i obavestite pravni tim.</li>
        <li data-sr="Proverite status na portalu javnih nabavki." data-en="Check status on public procurement portal.">Proverite status na portalu javnih nabavki.</li>
        <li data-sr="Pozovite naručioca na zvanični broj." data-en="Call buyer on official number.">Pozovite naručioca na zvanični broj.</li>
        <li data-sr="Resetujte lozinke portala ako su podeljeni podaci." data-en="Reset portal passwords if data was shared.">Resetujte lozinke portala ako su podeljeni podaci.</li>
        <li data-sr="Prijavite policiji i koristite interne procedure za nabavčku prevaru." data-en="Report to police and use internal procurement fraud procedures.">Prijavite policiji i koristite interne procedure za nabavčku prevaru.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li vidiš isključenje na portalu kada se uloguješ?" data-en="Do you see debarment when logged into portal?">Da li vidiš isključenje na portalu kada se uloguješ?</li>
            <li data-sr="Da li je naručilac potvrdio sa zvaničnog mejla?" data-en="Did buyer confirm from official email?">Da li je naručilac potvrdio sa zvaničnog mejla?</li>
            <li data-sr="Da li postoji broj odluke koji čitaš naglas šalteru?" data-en="Is there a decision number you read to clerk?">Da li postoji broj odluke koji čitaš naglas šalteru?</li>
            <li data-sr="Da li bi država tražila kripto za uklanjanje sa liste?" data-en="Would state ask crypto for list removal?">Da li bi država tražila kripto za uklanjanje sa liste?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Hajde da pozovemo naručioca pre bilo kakve uplate trećoj strani." data-en="Let's call the buyer before any third-party payment.">Hajde da pozovemo naručioca pre bilo kakve uplate trećoj strani.</li>
            <li data-sr="Crna lista se proverava na portalu, ne preko PDF-a iz mejla." data-en="Blacklist is checked on portal, not PDF from email.">Crna lista se proverava na portalu, ne preko PDF-a iz mejla.</li>
            <li data-sr="Pravi postupak žalbe ima rok koji možeš pročitati u zakonu." data-en="Real appeal has a deadline you can read in law.">Pravi postupak žalbe ima rok koji možeš pročitati u zakonu.</li>
            <li data-sr="Ako traže lozinku portala, to je kompromitovanje naloga." data-en="If they want portal password, that is account compromise.">Ako traže lozinku portala, to je kompromitovanje naloga.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
