window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["fake-eurojust-legal-recovery-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
      <p data-sr="Eurojust se ne koristi za naplatu naknada građanima putem privatnih računa iz hladnog kontakta." data-en="The contact claims Eurojust is handling a cross-border case in which money or assets are due to you, but a legal, escrow, or administrative fee is needed to release funds. Fake documents use EU terminology and logos.">Eurojust se ne koristi za naplatu naknada građanima putem privatnih računa iz hladnog kontakta.</p>
      <p data-sr="Zvanična komunikacija ne sledi obrazac hitne uplate na treći račun." data-en="Verification goes through the contact published on eurojust.europa.eu, not a number or email from the letter.">Zvanična komunikacija ne sledi obrazac hitne uplate na treći račun.</p>
      <div class="callout" data-sr="<strong>Model:</strong> hladni kontakt → Eurojust → predmet → naknada za oslobađanje → pritisak → nova naknada → nestanak." data-en="<strong>Model:</strong> cold contact → Eurojust → case → release fee → pressure → new fee → disappearance."><strong>Model:</strong> hladni kontakt → Eurojust → predmet → naknada za oslobađanje → pritisak → nova naknada → nestanak.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi" data-en="How it generally works">Kako generalno radi</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Priprema" data-en="Setup">Priprema</div>
          <ul class="bullets">
            <li data-sr="Ime predmeta i broj koji zvuče kao pravni predmet." data-en="Case name and number sounding like a legal file.">Ime predmeta i broj koji zvuče kao pravni predmet.</li>
            <li data-sr="Lažni pečat ili potpis koji imitira EU stil." data-en="Fake stamp or signature imitating EU style.">Lažni pečat ili potpis koji imitira EU stil.</li>
            <li data-sr="Referenca na hapšenje ili zamrzavanje računa u drugoj zemlji." data-en="Reference to arrest or account freeze in another country.">Referenca na hapšenje ili zamrzavanje računa u drugoj zemlji.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Naplata" data-en="Billing">Naplata</div>
          <ul class="bullets">
            <li data-sr="Naknada za pravno oslobađanje ili depozit kod agenta." data-en="Fee for legal release or agent deposit.">Naknada za pravno oslobađanje ili depozit kod agenta.</li>
            <li data-sr="Devizni račun ili kripto zbog brzine prekograničnog transfera." data-en="Foreign account or crypto for fast cross-border transfer.">Devizni račun ili kripto zbog brzine prekograničnog transfera.</li>
            <li data-sr="Zabrana konsultacije sa vašim advokatom do uplate." data-en="Ban on consulting your lawyer until payment.">Zabrana konsultacije sa vašim advokatom do uplate.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching)">Hronološki tok (faze + grananja)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Hladni kontakt" data-en="Phase 1 — Cold contact">Faza 1 — Hladni kontakt</h3>
        <p data-sr="Prvi korak je neočekivana dobra vest pod pritiskom." data-en="Email, call, or message with news of funds waiting for release.">Prvi korak je neočekivana dobra vest pod pritiskom.</p>
        <ul class="bullets">
          <li data-sr="signal: niste podneli zahtev Eurojustu ni preko advokata." data-en="signal: you did not file a request to Eurojust or through a lawyer.">signal: niste podneli zahtev Eurojustu ni preko advokata.</li>
          <li data-sr="signal: imejl nije sa eurojust.europa.eu." data-en="signal: email is not from eurojust.europa.eu.">signal: imejl nije sa eurojust.europa.eu.</li>
          <li data-sr="signal: odmah se traži poverljivost i brzina." data-en="signal: confidentiality and speed are demanded immediately.">signal: odmah se traži poverljivost i brzina.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta otvara prilog ili ostaje na liniji." data-en="<strong>Phase threshold:</strong> the target opens the attachment or stays on the line."><strong>Prag faze:</strong> meta otvara prilog ili ostaje na liniji.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Dokumentacija" data-en="Phase 2 — Documentation">Faza 2 — Dokumentacija</h3>
        <p data-sr="Dokument izgleda formalno ali nije proverljiv." data-en="PDF with payment instructions and 24–48 hour deadline.">Dokument izgleda formalno ali nije proverljiv.</p>
        <ul class="bullets">
          <li data-sr="signal: broj predmeta ne postoji u javnom registru koji pratite sa advokatom." data-en="signal: case number not in a public register you track with a lawyer.">signal: broj predmeta ne postoji u javnom registru koji pratite sa advokatom.</li>
          <li data-sr="signal: traže lične podatke i brojeve računa za verifikaciju." data-en="signal: they ask personal data and account numbers for verification.">signal: traže lične podatke i brojeve računa za verifikaciju.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="eppo-impersonation.html" data-sr="EPPO" data-en="EPPO impersonation">EPPO</a></li>
            <li><a href="olaf-impersonation.html" data-sr="OLAF" data-en="OLAF impersonation">OLAF</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta razmatra uplatu da bi dobila nasledstvo ili povraćaj." data-en="<strong>Phase threshold:</strong> the target considers payment to get inheritance or recovery."><strong>Prag faze:</strong> meta razmatra uplatu da bi dobila nasledstvo ili povraćaj.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Prva uplata" data-en="Phase 3 — First payment">Faza 3 — Prva uplata</h3>
        <p data-sr="Novac ide van EU budžetskih kanala." data-en="Payment to an agent, a law firm that is not yours, or a foreign account.">Novac ide van EU budžetskih kanala.</p>
        <ul class="bullets">
          <li data-sr="signal: primalac nije državni organ ili vaš advokat." data-en="signal: payee is not a state body or your lawyer.">signal: primalac nije državni organ ili vaš advokat.</li>
          <li data-sr="signal: potvrda o uplati stiže samo kao PDF iz četa." data-en="signal: payment confirmation arrives only as chat PDF.">signal: potvrda o uplati stiže samo kao PDF iz četa.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> novac je poslat." data-en="<strong>Phase threshold:</strong> money was sent."><strong>Prag faze:</strong> novac je poslat.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Druga prepreka" data-en="Phase 4 — Second obstacle">Faza 4 — Druga prepreka</h3>
        <p data-sr="Serija prepreka prati prvu uplatu." data-en="Customs, tax, or extra fee appears before transfer.">Serija prepreka prati prvu uplatu.</p>
        <ul class="bullets">
          <li data-sr="signal: svaka faza ima isti obrazac pritiska." data-en="signal: each stage uses the same pressure pattern.">signal: svaka faza ima isti obrazac pritiska.</li>
          <li data-sr="signal: iznos raste uprkos obećanju da je poslednji korak." data-en="signal: amount grows despite promise it is the final step.">signal: iznos raste uprkos obećanju da je poslednji korak.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="advance-fee-fraud.html" data-sr="Uplata unapred" data-en="Advance-fee fraud">Uplata unapred</a></li>
            <li><a href="government-impersonation.html" data-sr="Država" data-en="Government impersonation">Država</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta je platila više od jednom." data-en="<strong>Phase threshold:</strong> the target paid more than once."><strong>Prag faze:</strong> meta je platila više od jednom.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Provera kod Eurojusta" data-en="Phase 5 — Eurojust check">Faza 5 — Provera kod Eurojusta</h3>
        <p data-sr="Zvanična linija ne potvrđuje imejl ili broj prevaranta." data-en="You use the published number or form on the official site and learn the case does not exist.">Zvanična linija ne potvrđuje imejl ili broj prevaranta.</p>
        <ul class="bullets">
          <li data-sr="signal: služba kaže da ne naplaćuje ovakve naknade putem agenta." data-en="signal: service says it does not charge such fees via agents.">signal: služba kaže da ne naplaćuje ovakve naknade putem agenta.</li>
          <li data-sr="signal: vaš advokat nema paralelni predmet sa tim brojem." data-en="signal: your lawyer has no parallel file with that number.">signal: vaš advokat nema paralelni predmet sa tim brojem.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> zvanična negacija je dokumentovana." data-en="<strong>Phase threshold:</strong> official denial is documented."><strong>Prag faze:</strong> zvanična negacija je dokumentovana.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Recovery talas" data-en="Phase 6 — Recovery wave">Faza 6 — Recovery talas</h3>
        <p data-sr="Tipičan nastavak advance fee obrasca." data-en="New contact offers recovery for another payment.">Tipičan nastavak advance fee obrasca.</p>
        <ul class="bullets">
          <li data-sr="signal: advokat tvrdi da može vratiti novac uz proviziju unapred." data-en="signal: lawyer claims refund possible with upfront commission.">signal: advokat tvrdi da može vratiti novac uz proviziju unapred.</li>
          <li data-sr="signal: isti jezik i format PDF-a kao u prvom kontaktu." data-en="signal: same language and PDF format as first contact.">signal: isti jezik i format PDF-a kao u prvom kontaktu.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="recovery-scam.html" data-sr="Recovery" data-en="Recovery scam">Recovery</a></li>
            <li><a href="grant-fund-scam.html" data-sr="Grant" data-en="Grant scam">Grant</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta odbija dalje uplate ili prijavljuje policiju." data-en="<strong>Phase threshold:</strong> the target refuses further payments or reports to police."><strong>Prag faze:</strong> meta odbija dalje uplate ili prijavljuje policiju.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Prvi kontakt od Eurojusta sa zahtevom za uplatu." data-en="First contact from Eurojust with a payment demand.">Prvi kontakt od Eurojusta sa zahtevom za uplatu.</li>
        <li data-sr="Imejl nije sa eurojust.europa.eu." data-en="Email is not from eurojust.europa.eu.">Imejl nije sa eurojust.europa.eu.</li>
        <li data-sr="Uplata na privatni račun ili kripto." data-en="Payment to private account or crypto.">Uplata na privatni račun ili kripto.</li>
        <li data-sr="Rok kraći od 48 sati uz pretnju hapšenjem." data-en="Under 48h deadline with arrest threat.">Rok kraći od 48 sati uz pretnju hapšenjem.</li>
        <li data-sr="Zabrana poziva vašem advokatu." data-en="Ban on calling your lawyer.">Zabrana poziva vašem advokatu.</li>
        <li data-sr="Nagrada ili nasledstvo koje niste očekivali." data-en="Unexpected reward or inheritance.">Nagrada ili nasledstvo koje niste očekivali.</li>
        <li data-sr="Lažni pečat ili niska kvalitet PDF-a." data-en="Fake stamp or low-quality PDF.">Lažni pečat ili niska kvalitet PDF-a.</li>
        <li data-sr="Isti broj koriste prijave za EPPO ili OLAF prevaru." data-en="Same number reported in EPPO or OLAF scams.">Isti broj koriste prijave za EPPO ili OLAF prevaru.</li>
        <li data-sr="Traže punu kopiju pasoša ili oba broja kartice." data-en="They want full passport copy or both card numbers.">Traže punu kopiju pasoša ili oba broja kartice.</li>
        <li data-sr="Nude tajni postupak van sudskog sistema." data-en="They offer a secret procedure outside the court system.">Nude tajni postupak van sudskog sistema.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Institucija" data-en="Institution">Institucija</div>
          <ul class="bullets">
            <li data-sr="Otvorite eurojust.europa.eu i nađite kontakt za građane." data-en="Open eurojust.europa.eu and find citizen contact.">Otvorite eurojust.europa.eu i nađite kontakt za građane.</li>
            <li data-sr="Pošaljite upit kroz zvanični obrazac, ne odgovarajte na sumnjivi imejl." data-en="Send inquiry via official form; do not reply to suspicious email.">Pošaljite upit kroz zvanični obrazac, ne odgovarajte na sumnjivi imejl.</li>
            <li data-sr="Pitajte svog advokata da proveri broj predmeta." data-en="Ask your lawyer to verify the case number.">Pitajte svog advokata da proveri broj predmeta.</li>
            <li data-sr="Uporedite jezik pisma sa zvaničnim publikacijama na sajtu." data-en="Compare letter language to official site publications.">Uporedite jezik pisma sa zvaničnim publikacijama na sajtu.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Novac" data-en="Money">Novac</div>
          <ul class="bullets">
            <li data-sr="Ne šaljite depozit agentu koga ne birate sami." data-en="Do not send deposit to an agent you did not choose.">Ne šaljite depozit agentu koga ne birate sami.</li>
            <li data-sr="Odbijte kripto i gotovinu kao jedini način." data-en="Refuse crypto and cash as the only way.">Odbijte kripto i gotovinu kao jedini način.</li>
            <li data-sr="Banka može pomoći oko blokade naloga primaoca." data-en="Bank may help block payee account routing.">Banka može pomoći oko blokade naloga primaoca.</li>
            <li data-sr="Sačuvajte zaglavlja imejlova za prijavu." data-en="Save email headers for reporting.">Sačuvajte zaglavlja imejlova za prijavu.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
      <ul class="bullets">
        <li data-sr="Da li sam ikada podneo predmet Eurojustu?" data-en="Have I ever filed a case with Eurojust?">Da li sam ikada podneo predmet Eurojustu?</li>
        <li data-sr="Da li moj advokat zna za ovaj broj predmeta?" data-en="Does my lawyer know this case number?">Da li moj advokat zna za ovaj broj predmeta?</li>
        <li data-sr="Da li je imejl sa zvaničnog domena?" data-en="Is the email from the official domain?">Da li je imejl sa zvaničnog domena?</li>
        <li data-sr="Da li postoji javna objava o istom predmetu?" data-en="Is there a public notice on the same case?">Da li postoji javna objava o istom predmetu?</li>
        <li data-sr="Da li primalac uplate ima vezu sa Eurojustom?" data-en="Does the payee have a link to Eurojust?">Da li primalac uplate ima vezu sa Eurojustom?</li>
        <li data-sr="Da li je rok manji od dva dana?" data-en="Is the deadline under two days?">Da li je rok manji od dva dana?</li>
        <li data-sr="Da li me tera da ne zovem advokata?" data-en="Does it pressure me not to call a lawyer?">Da li me tera da ne zovem advokata?</li>
        <li data-sr="Da li traže kripto?" data-en="Do they ask for crypto?">Da li traže kripto?</li>
        <li data-sr="Da li sam već platio i traže još?" data-en="Have I paid and they ask again?">Da li sam već platio i traže još?</li>
        <li data-sr="Da li zvanični kontakt negira pismo?" data-en="Does official contact deny the letter?">Da li zvanični kontakt negira pismo?</li>
        <li data-sr="Da li je isti scenario opisan u upozorenjima za EPPO?" data-en="Is the same scenario described in EPPO warnings?">Da li je isti scenario opisan u upozorenjima za EPPO?</li>
        <li data-sr="Da li bih ovo prijavio policiji ako vidim kod drugog?" data-en="Would I report this to police if I saw it happen to someone else?">Da li bih ovo prijavio policiji ako vidim kod drugog?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Ne šaljite novac i ne dajte kodove." data-en="Do not send money or give codes.">Ne šaljite novac i ne dajte kodove.</li>
        <li data-sr="Kontaktirajte Eurojust zvaničnim kanalom sa sajta." data-en="Contact Eurojust via official site channel.">Kontaktirajte Eurojust zvaničnim kanalom sa sajta.</li>
        <li data-sr="Zovite advokata ako imate otvoren prekogranični spor." data-en="Call your lawyer if you have an open cross-border dispute.">Zovite advokata ako imate otvoren prekogranični spor.</li>
        <li data-sr="Sačuvajte PDF i zaglavlja." data-en="Save PDF and headers.">Sačuvajte PDF i zaglavlja.</li>
        <li data-sr="Prijavite policiji i obavestite banku ako je uplata izvršena." data-en="Report to police and notify bank if payment was made.">Prijavite policiji i obavestite banku ako je uplata izvršena.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si zvaničnim putem pitao Eurojust za ovo pismo?" data-en="Did you ask Eurojust officially about this letter?">Da li si zvaničnim putem pitao Eurojust za ovo pismo?</li>
            <li data-sr="Da li tvoj advokat potvrđuje predmet?" data-en="Does your lawyer confirm the case?">Da li tvoj advokat potvrđuje predmet?</li>
            <li data-sr="Da li bi međunarodni organ tražio kripto?" data-en="Would an international body ask for crypto?">Da li bi međunarodni organ tražio kripto?</li>
            <li data-sr="Da li je primalac državni račun?" data-en="Is the payee a government account?">Da li je primalac državni račun?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Hajde da pošaljemo upit kroz sajt Eurojusta, ne odgovor na imejl." data-en="Let's send inquiry through Eurojust site, not reply to email.">Hajde da pošaljemo upit kroz sajt Eurojusta, ne odgovor na imejl.</li>
            <li data-sr="Pravi pravni postupak ne zavisi od depozita na lični račun." data-en="A real legal procedure does not depend on deposit to a personal account.">Pravi pravni postupak ne zavisi od depozita na lični račun.</li>
            <li data-sr="Ako zabranjuju advokata, to je ozbiljan signal." data-en="If they forbid a lawyer, that is a serious signal.">Ako zabranjuju advokata, to je ozbiljan signal.</li>
            <li data-sr="Novi advokat koji nudi povraćaj je često nastavak prevare." data-en="A new lawyer offering recovery is often scam continuation.">Novi advokat koji nudi povraćaj je često nastavak prevare.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
