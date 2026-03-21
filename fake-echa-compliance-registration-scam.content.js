window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["fake-echa-compliance-registration-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
      <p data-sr="Prava komunikacija ide kroz echa.europa.eu i vaš registrovani kontakt, ne kroz neočekivane uplate agentu." data-en="Companies handling chemicals, mixtures, or REACH-regulated articles may get a message imitating the European Chemicals Agency (ECHA) demanding urgent registration, SDS update, or payment to unlock a portal account. The goal is money or credential theft.">Prava komunikacija ide kroz echa.europa.eu i vaš registrovani kontakt, ne kroz neočekivane uplate agentu.</p>
      <p data-sr="Naknade koje nisu u skladu sa objavljenim vodičem agencije treba tretirati kao sumnjive." data-en="Fake portals copy look but not domain; always type the agency address manually.">Naknade koje nisu u skladu sa objavljenim vodičem agencije treba tretirati kao sumnjive.</p>
      <div class="callout" data-sr="<strong>Model:</strong> upozorenje → REACH/ECHA → rok → link → uplata agentu → nova greška u dokumentu → ponavljanje." data-en="<strong>Model:</strong> warning → REACH/ECHA → deadline → link → pay agent → new document error → repeat."><strong>Model:</strong> upozorenje → REACH/ECHA → rok → link → uplata agentu → nova greška u dokumentu → ponavljanje.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi" data-en="How it generally works">Kako generalno radi</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Priprema" data-en="Setup">Priprema</div>
          <ul class="bullets">
            <li data-sr="Lista firmi iz javnih registara ili sajta dobavljača." data-en="Company list from public registries or supplier sites.">Lista firmi iz javnih registara ili sajta dobavljača.</li>
            <li data-sr="Imena supstanci koje delimično odgovaraju vašem portfoliju." data-en="Substance names partially matching your portfolio.">Imena supstanci koje delimično odgovaraju vašem portfoliju.</li>
            <li data-sr="PDF sa tabelom rokova i žutim oznakama hitnosti." data-en="PDF with deadline table and yellow urgency marks.">PDF sa tabelom rokova i žutim oznakama hitnosti.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Naplata" data-en="Billing">Naplata</div>
          <ul class="bullets">
            <li data-sr="Naknada za brzu registraciju ili ispravku dosijea." data-en="Fee for fast registration or dossier correction.">Naknada za brzu registraciju ili ispravku dosijea.</li>
            <li data-sr="Uplata konsultantu koji nije vaš ugovorni partner." data-en="Payment to consultant who is not your contracted partner.">Uplata konsultantu koji nije vaš ugovorni partner.</li>
            <li data-sr="Zahtev za korisničkim imenom i lozinkom REACH portala." data-en="Request for REACH portal username and password.">Zahtev za korisničkim imenom i lozinkom REACH portala.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching)">Hronološki tok (faze + grananja)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Obaveštenje o obavezi" data-en="Phase 1 — Duty notice">Faza 1 — Obaveštenje o obavezi</h3>
        <p data-sr="Pretnja tržišnom pristupu pokreće paniku." data-en="Email claims registration is incomplete or market placement will be banned.">Pretnja tržišnom pristupu pokreće paniku.</p>
        <ul class="bullets">
          <li data-sr="signal: domen linka nije echa.europa.eu." data-en="signal: link domain is not echa.europa.eu.">signal: domen linka nije echa.europa.eu.</li>
          <li data-sr="signal: broj registracije ne odgovara vašem IUCLID zapisu." data-en="signal: registration number does not match your IUCLID record.">signal: broj registracije ne odgovara vašem IUCLID zapisu.</li>
          <li data-sr="signal: rok je prekratak za bilo kakvu stvarnu proceduru." data-en="signal: deadline too short for any real procedure.">signal: rok je prekratak za bilo kakvu stvarnu proceduru.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> EHS menadžer otvara link." data-en="<strong>Phase threshold:</strong> EHS manager opens link."><strong>Prag faze:</strong> EHS menadžer otvara link.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Lažni portal" data-en="Phase 2 — Fake portal">Faza 2 — Lažni portal</h3>
        <p data-sr="Klon je vizuelno sličan ali tehnički drugačiji." data-en="Page asks login or substance data entry.">Klon je vizuelno sličan ali tehnički drugačiji.</p>
        <ul class="bullets">
          <li data-sr="signal: forma traži lozinku i OTP istovremeno." data-en="signal: form asks password and OTP together.">signal: forma traži lozinku i OTP istovremeno.</li>
          <li data-sr="signal: sertifikat sajta ne odgovara ECHA." data-en="signal: site certificate does not match ECHA.">signal: sertifikat sajta ne odgovara ECHA.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
            <li><a href="compliance-fee-scam.html" data-sr="Compliance" data-en="Compliance fee scam">Compliance</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> uneti su pristupni podaci ili formulacioni podaci." data-en="<strong>Phase threshold:</strong> access or formulation data entered."><strong>Prag faze:</strong> uneti su pristupni podaci ili formulacioni podaci.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Uplata" data-en="Phase 3 — Payment">Faza 3 — Uplata</h3>
        <p data-sr="Novac ide van objavljenih kanala ECHA." data-en="Processing or urgent dossier review fee requested.">Novac ide van objavljenih kanala ECHA.</p>
        <ul class="bullets">
          <li data-sr="signal: primalac nije ECHA niti vaš registrovani konsultant." data-en="signal: payee is not ECHA or your registered consultant.">signal: primalac nije ECHA niti vaš registrovani konsultant.</li>
          <li data-sr="signal: traže devize ili kripto." data-en="signal: foreign currency or crypto requested.">signal: traže devize ili kripto.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> uplata je poslata." data-en="<strong>Phase threshold:</strong> payment sent."><strong>Prag faze:</strong> uplata je poslata.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Ispravka dokumenta" data-en="Phase 4 — Document correction">Faza 4 — Ispravka dokumenta</h3>
        <p data-sr="Obrazac advance fee se ponavlja." data-en="They say dossier has error and another payment is needed.">Obrazac advance fee se ponavlja.</p>
        <ul class="bullets">
          <li data-sr="signal: greška nije vidljiva vašem konsultantu." data-en="signal: error not visible to your consultant.">signal: greška nije vidljiva vašem konsultantu.</li>
          <li data-sr="signal: svaka ispravka ima isti iznos." data-en="signal: each correction has same amount.">signal: svaka ispravka ima isti iznos.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="export-compliance-scam.html" data-sr="Izvozna usklađenost" data-en="Export compliance scam">Izvozna usklađenost</a></li>
            <li><a href="advance-fee-fraud.html" data-sr="Uplata unapred" data-en="Advance fee">Uplata unapred</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> više uplata bez promene statusa u pravom portalu." data-en="<strong>Phase threshold:</strong> multiple payments without change in real portal status."><strong>Prag faze:</strong> više uplata bez promene statusa u pravom portalu.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Provera sa ECHA" data-en="Phase 5 — ECHA check">Faza 5 — Provera sa ECHA</h3>
        <p data-sr="Zvanični kanal ne potvrđuje hitnu obavezu iz poruke." data-en="When you log into the real REACH portal, dossier status does not match the story.">Zvanični kanal ne potvrđuje hitnu obavezu iz poruke.</p>
        <ul class="bullets">
          <li data-sr="signal: ECHA potvrđuje da ne šalje ovakve uplate preko trećih lica." data-en="signal: ECHA confirms it does not route such fees via third parties.">signal: ECHA potvrđuje da ne šalje ovakve uplate preko trećih lica.</li>
          <li data-sr="signal: vaš REACH konsultant nema istu poruku." data-en="signal: your REACH consultant does not have the same notice.">signal: vaš REACH konsultant nema istu poruku.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> postoji zapis da je priča lažna." data-en="<strong>Phase threshold:</strong> there is a record the story is false."><strong>Prag faze:</strong> postoji zapis da je priča lažna.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Incident bezbednosti" data-en="Phase 6 — Security incident">Faza 6 — Incident bezbednosti</h3>
        <p data-sr="Poverljivi hemijski podaci mogu biti zloupotrebljeni." data-en="If credentials were stolen, passwords must be reset and ECHA notified if needed.">Poverljivi hemijski podaci mogu biti zloupotrebljeni.</p>
        <ul class="bullets">
          <li data-sr="signal: neobične prijave sa nepoznatih IP adresa." data-en="signal: unusual logins from unknown IPs.">signal: neobične prijave sa nepoznatih IP adresa.</li>
          <li data-sr="signal: izmene u nacrtu dosijea koje niste napravili." data-en="signal: dossier draft changes you did not make.">signal: izmene u nacrtu dosijea koje niste napravili.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="ce-marking-scam.html" data-sr="CE označavanje" data-en="CE marking scam">CE označavanje</a></li>
            <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> IT je resetovao pristup i arhivirao forenziku." data-en="<strong>Phase threshold:</strong> IT reset access and archived forensics."><strong>Prag faze:</strong> IT je resetovao pristup i arhivirao forenziku.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Link nije na echa.europa.eu." data-en="Link not on echa.europa.eu.">Link nije na echa.europa.eu.</li>
        <li data-sr="Hitna zabrana tržišta bez pisma u pravom portalu." data-en="Urgent market ban with no message in real portal.">Hitna zabrana tržišta bez pisma u pravom portalu.</li>
        <li data-sr="Uplata agentu iz hladnog imejla." data-en="Payment to agent from cold email.">Uplata agentu iz hladnog imejla.</li>
        <li data-sr="Zahtev za lozinkom REACH naloga preko forme u poruci." data-en="REACH password requested via form in message.">Zahtev za lozinkom REACH naloga preko forme u poruci.</li>
        <li data-sr="Kripto ili devize kao jedini način." data-en="Crypto or foreign currency only.">Kripto ili devize kao jedini način.</li>
        <li data-sr="Imena supstanci pogrešno napisana u zvaničnom pismu." data-en="Substance names misspelled in official letter.">Imena supstanci pogrešno napisana u zvaničnom pismu.</li>
        <li data-sr="Rok kraći od jednog radnog dana." data-en="Deadline under one business day.">Rok kraći od jednog radnog dana.</li>
        <li data-sr="Isti PDF stiže drugoj hemijskoj firmi." data-en="Same PDF hits another chemical firm.">Isti PDF stiže drugoj hemijskoj firmi.</li>
        <li data-sr="Zabrana kontaktiranja vašeg REACH konsultanta." data-en="Forbidden to contact your REACH consultant.">Zabrana kontaktiranja vašeg REACH konsultanta.</li>
        <li data-sr="Višestruke male uplate umesto jedne zvanične takse." data-en="Multiple small payments instead of one official fee.">Višestruke male uplate umesto jedne zvanične takse.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Tehničko" data-en="Technical">Tehničko</div>
          <ul class="bullets">
            <li data-sr="Otvorite echa.europa.eu ručno i uporedite sa linkom." data-en="Open echa.europa.eu manually and compare to link.">Otvorite echa.europa.eu ručno i uporedite sa linkom.</li>
            <li data-sr="Ulogujte se u pravi REACH portal i proverite notifikacije." data-en="Log into real REACH portal and check notifications.">Ulogujte se u pravi REACH portal i proverite notifikacije.</li>
            <li data-sr="Proverite TLS sertifikat sajta." data-en="Verify site TLS certificate.">Proverite TLS sertifikat sajta.</li>
            <li data-sr="Pitajte konsultanta da potvrdi status dosijea." data-en="Ask consultant to confirm dossier status.">Pitajte konsultanta da potvrdi status dosijea.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Finansije" data-en="Finance">Finansije</div>
          <ul class="bullets">
            <li data-sr="Uporedite traženi iznos sa javnim vodičem troškova." data-en="Compare requested amount to public cost guidance.">Uporedite traženi iznos sa javnim vodičem troškova.</li>
            <li data-sr="Ne odobravajte uplatu bez internog broja hemijskog predmeta." data-en="Do not approve payment without internal chemical file ID.">Ne odobravajte uplatu bez internog broja hemijskog predmeta.</li>
            <li data-sr="Odbijte kripto kanale." data-en="Refuse crypto channels.">Odbijte kripto kanale.</li>
            <li data-sr="Arhivirajte imejl sa zaglavljima." data-en="Archive email with headers.">Arhivirajte imejl sa zaglavljima.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
      <ul class="bullets">
        <li data-sr="Da li je domen tačno echa.europa.eu?" data-en="Is domain exactly echa.europa.eu?">Da li je domen tačno echa.europa.eu?</li>
        <li data-sr="Da li broj registracije postoji u našem IUCLID zapisu?" data-en="Does registration number exist in our IUCLID record?">Da li broj registracije postoji u našem IUCLID zapisu?</li>
        <li data-sr="Da li pravni portal prikazuje istu obavezu?" data-en="Does legal portal show same obligation?">Da li pravni portal prikazuje istu obavezu?</li>
        <li data-sr="Da li je konsultant potvrdio hitnost?" data-en="Did consultant confirm urgency?">Da li je konsultant potvrdio hitnost?</li>
        <li data-sr="Da li postoji budžetska stavka?" data-en="Is there a budget line?">Da li postoji budžetska stavka?</li>
        <li data-sr="Da li primalac odgovara ECHA ili našem partneru?" data-en="Does payee match ECHA or our partner?">Da li primalac odgovara ECHA ili našem partneru?</li>
        <li data-sr="Da li je rok realan?" data-en="Is deadline realistic?">Da li je rok realan?</li>
        <li data-sr="Da li traže lozinku portala?" data-en="Do they ask for portal password?">Da li traže lozinku portala?</li>
        <li data-sr="Da li je ista poruka stigla dobavljaču?" data-en="Did supplier get same message?">Da li je ista poruka stigla dobavljaču?</li>
        <li data-sr="Da li smo već platili i status isti?" data-en="Paid already and status unchanged?">Da li smo već platili i status isti?</li>
        <li data-sr="Da li IT vidi sumnjive prijave?" data-en="Does IT see suspicious logins?">Da li IT vidi sumnjive prijave?</li>
        <li data-sr="Da li bismo ovo prijavili nadzornom odboru?" data-en="Would we report this to supervisory board?">Da li bismo ovo prijavili nadzornom odboru?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Zaustavite uplate i resetujte lozinke ako su uneti podaci." data-en="Stop payments and reset passwords if data was entered.">Zaustavite uplate i resetujte lozinke ako su uneti podaci.</li>
        <li data-sr="Ulogujte se na pravi REACH portal i proverite stanje." data-en="Log into real REACH portal and check status.">Ulogujte se na pravi REACH portal i proverite stanje.</li>
        <li data-sr="Kontaktirajte ECHA zvaničnim kanalom." data-en="Contact ECHA via official channel.">Kontaktirajte ECHA zvaničnim kanalom.</li>
        <li data-sr="Obavestite REACH konsultanta i IT." data-en="Notify REACH consultant and IT.">Obavestite REACH konsultanta i IT.</li>
        <li data-sr="Arhivirajte dokaze i prijavite policiji ako je došlo do uplate." data-en="Archive evidence and report to police if payment occurred.">Arhivirajte dokaze i prijavite policiji ako je došlo do uplate.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si video istu obavezu u pravom portalu?" data-en="Did you see same duty in real portal?">Da li si video istu obavezu u pravom portalu?</li>
            <li data-sr="Da li konsultant potvrđuje rok?" data-en="Does consultant confirm deadline?">Da li konsultant potvrđuje rok?</li>
            <li data-sr="Da li je domen tačan karakter po karakter?" data-en="Is domain exact character by character?">Da li je domen tačan karakter po karakter?</li>
            <li data-sr="Da li bi ECHA tražila lozinku ovim putem?" data-en="Would ECHA ask password this way?">Da li bi ECHA tražila lozinku ovim putem?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Hajde da otvorimo ECHA sajt iz obeleživača, ne iz mejla." data-en="Let's open ECHA site from bookmarks, not email.">Hajde da otvorimo ECHA sajt iz obeleživača, ne iz mejla.</li>
            <li data-sr="REACH nalog se ne potvrđuje ovakvom formom u poruci." data-en="REACH account is not confirmed by a form like this in email.">REACH nalog se ne potvrđuje ovakvom formom u poruci.</li>
            <li data-sr="Jedan dan čekanja neće zatvoriti legitiman dosije." data-en="One day wait will not close a legitimate dossier.">Jedan dan čekanja neće zatvoriti legitiman dosije.</li>
            <li data-sr="Ako traže kripto, prekinite komunikaciju." data-en="If they ask crypto, end communication.">Ako traže kripto, prekinite komunikaciju.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
