window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["fake-insurance-excess-refund-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
      <p data-sr="SMS, imejl ili poziv tvrdi da ti osiguravajuća kuća duguje povraćaj participacije ili franšize i da moraš potvrditi podatke ili platiti malu naknadu da bi sredstva bila otpustena." data-en="SMS, email, or a call claims your insurer owes a co-payment or deductible refund and you must confirm details or pay a small fee so funds can be released.">SMS, imejl ili poziv tvrdi da ti osiguravajuća kuća duguje povraćaj participacije ili franšize i da moraš potvrditi podatke ili platiti malu naknadu da bi sredstva bila otpustena.</p>
      <p data-sr="Povraćaji idu kroz zvanični kontakt osiguranja ili broj sa police; ne unosi se kartica na link iz neočekivane poruke i ne plaća se taksa za prenos unapred." data-en="Refunds go through the insurer’s official contact or policy number; you do not enter card data on a link from an unexpected message or pay a transfer fee upfront.">Povraćaji idu kroz zvanični kontakt osiguranja ili broj sa police; ne unosi se kartica na link iz neočekivane poruke i ne plaća se taksa za prenos unapred.</p>
      <div class="callout" data-sr="<strong>Model:</strong> lažno obaveštenje o povraćaju → link → prag (podaci kartice ili naknada) → krađa ili eskalacija." data-en="<strong>Model:</strong> fake refund notice → link → threshold (card data or fee) → theft or escalation."><strong>Model:</strong> lažno obaveštenje o povraćaju → link → prag (podaci kartice ili naknada) → krađa ili eskalacija.</div>
    </section>
    <section class="card">
      <h2 data-sr="Kako generalno radi" data-en="How it generally works">Kako generalno radi</h2>
      <p data-sr="Koristi se sećanje na štetu ili lečenje i očekivanje povraćaja sa polise." data-en="Memory of a claim or treatment and expectation of a policy refund are exploited.">Koristi se sećanje na štetu ili lečenje i očekivanje povraćaja sa polise.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta privlači žrtvu" data-en="What pulls the victim in">Šta privlači žrtvu</div>
          <ul class="bullets">
            <li data-sr="Hitni rok koji se poklapa sa završetkom lečenja ili obrade štete na polisi." data-en="An urgent deadline aligned with finishing treatment or processing a claim on the policy.">Hitni rok koji se poklapa sa završetkom lečenja ili obrade štete na polisi.</li>
            <li data-sr="Obećanje da će povraćaj stići brzo ako odmah platiš malu naknadu ili potvrdiš karticu." data-en="A promise the refund will arrive quickly if you immediately pay a small fee or confirm the card.">Obećanje da će povraćaj stići brzo ako odmah platiš malu naknadu ili potvrdiš karticu.</li>
            <li data-sr="Lažni portal izgleda čisto i kopira boje i logo." data-en="The fake portal looks clean and copies colours and a logo.">Lažni portal izgleda čisto i kopira boje i logo.</li>
            <li data-sr="Komunikacija ide preko ličnog broja ili besplatnog imejla." data-en="Communication uses a personal number or free email.">Komunikacija ide preko ličnog broja ili besplatnog imejla.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Gde je prevara" data-en="Where the fraud is">Gde je prevara</div>
          <ul class="bullets">
            <li data-sr="Domen se razlikuje u jednom slovu od pravog sajta osiguranja sa police." data-en="The domain differs by one letter from the real insurer site on the policy.">Domen se razlikuje u jednom slovu od pravog sajta osiguranja sa police.</li>
            <li data-sr="Osiguranje na broju sa police ne zna za ovaj povraćaj ili traženu naknadu." data-en="The insurer on the policy number knows nothing about this refund or requested fee.">Osiguranje na broju sa police ne zna za ovaj povraćaj ili traženu naknadu.</li>
            <li data-sr="Uplata ne ide na račun koji je naveden u zvaničnom uputstvu osiguranja." data-en="Payment does not go to an account named in official insurer guidance.">Uplata ne ide na račun koji je naveden u zvaničnom uputstvu osiguranja.</li>
            <li data-sr="Ne postoji potpis i pečat na PDF-u koji možeš proveriti." data-en="There is no signature and stamp on the PDF you can verify.">Ne postoji potpis i pečat na PDF-u koji možeš proveriti.</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching)">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Šest faza tipičnog toka; grananja ka srodnim prevarama." data-en="Six phases of a typical flow; branching to related scams.">Šest faza tipičnog toka; grananja ka srodnim prevarama.</p>
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Poruka koja liči na zvaničnu" data-en="Phase 1 — Message that looks official">Faza 1 — Poruka koja liči na zvaničnu</h3>
        <p data-sr="Poruka navodi skoro tačan iznos povraćaja i broj police sa jednom greškom da deluje uverljivo, uz link za potvrdu naloga." data-en="The message cites an almost correct refund amount and policy number with one error to look convincing, with a link to confirm the account.">Poruka navodi skoro tačan iznos povraćaja i broj police sa jednom greškom da deluje uverljivo, uz link za potvrdu naloga.</p>
        <ul class="bullets">
          <li data-sr="Signal: pritisak oko roka koji se poklapa sa isplatom štete ili završetkom terapije." data-en="Signal: pressure around a deadline that matches claim payout or end of treatment.">Signal: pritisak oko roka koji se poklapa sa isplatom štete ili završetkom terapije.</li>
          <li data-sr="Signal: link vodi na domen koji nije identičan zvaničnom sajtu osiguranja sa police." data-en="Signal: the link leads to a domain that is not identical to the insurer’s official site on the policy.">Signal: link vodi na domen koji nije identičan zvaničnom sajtu osiguranja sa police.</li>
          <li data-sr="Signal: traže se lični podaci pre nego što proveriš broj sa police ili zadnje strane kartice." data-en="Signal: personal data is requested before you verify the policy number or card-back number.">Signal: traže se lični podaci pre nego što proveriš broj sa police ili zadnje strane kartice.</li>
          <li data-sr="Signal: ton je previše savršen za masovnu poruku." data-en="Signal: the tone is too polished for a bulk message.">Signal: ton je previše savršen za masovnu poruku.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> otvoriš link ili odgovoriš na poruku." data-en="<strong>Phase threshold:</strong> you open the link or reply to the message."><strong>Prag faze:</strong> otvoriš link ili odgovoriš na poruku.</div>
      </article>
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Potvrda identiteta ili naloga" data-en="Phase 2 — Verification of identity or account">Faza 2 — Potvrda identiteta ili naloga</h3>
        <p data-sr="Forma traži pun broj kartice, CVV ili kod iz SMS-a radi verifikacije primaoca, ili malu uplatu pre slanja kredita." data-en="The form asks for full card number, CVV, or an SMS code to verify the recipient, or a small payment before sending the credit.">Forma traži pun broj kartice, CVV ili kod iz SMS-a radi verifikacije primaoca, ili malu uplatu pre slanja kredita.</p>
        <ul class="bullets">
          <li data-sr="Signal: polje za lozinku naloga na lažnoj stranici." data-en="Signal: a password field for your account on a fake page.">Signal: polje za lozinku naloga na lažnoj stranici.</li>
          <li data-sr="Signal: zahtev za snimak ekrana e-bankarstva radi provere." data-en="Signal: a request for a screenshot of e-banking for verification.">Signal: zahtev za snimak ekrana e-bankarstva radi provere.</li>
          <li data-sr="Signal: dupliranje istih podataka u više koraka." data-en="Signal: the same data is collected again across multiple steps.">Signal: dupliranje istih podataka u više koraka.</li>
          <li data-sr="Signal: odbijanje da sačekaju dok ne pozoveš osiguranje na broju sa police." data-en="Signal: refusal to wait while you call the insurer on the policy number.">Signal: odbijanje da sačekaju dok ne pozoveš osiguranje na broju sa police.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> uneseš osetljive podatke u formu." data-en="<strong>Phase threshold:</strong> you enter sensitive data in the form."><strong>Prag faze:</strong> uneseš osetljive podatke u formu.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Prag: naknada ili brza uplata" data-en="Phase 3 — Threshold: fee or fast payment">Faza 3 — Prag: naknada ili brza uplata</h3>
        <p data-sr="Pojavljuje se taksa za obradu, otključavanje, hitnu dostavu ili rezervaciju. Plaćanje ide na treći račun, kripto ili darovne kartice, uz kratki rok." data-en="A fee appears for processing, unlock, urgent delivery, or reservation. Payment goes to a third-party account, crypto, or gift cards with a short deadline.">Pojavljuje se taksa za obradu, otključavanje, hitnu dostavu ili rezervaciju. Plaćanje ide na treći račun, kripto ili darovne kartice, uz kratki rok.</p>
        <ul class="bullets">
          <li data-sr="Signal: uplata na fizičko lice ili nepoznatu firmu." data-en="Signal: payment to a private person or unknown company.">Signal: uplata na fizičko lice ili nepoznatu firmu.</li>
          <li data-sr="Signal: zahtev za kod darovne kartice ili instant plaćanje." data-en="Signal: a request for gift card codes or instant payment.">Signal: zahtev za kod darovne kartice ili instant plaćanje.</li>
          <li data-sr="Signal: priča da će se mesto, ispit ili dokument poništiti istog dana." data-en="Signal: a story that the seat, exam, or document will be cancelled the same day.">Signal: priča da će se mesto, ispit ili dokument poništiti istog dana.</li>
          <li data-sr="Signal: nema uplatnice na zvaničan račun ustanove koji možeš proveriti." data-en="Signal: no payment slip to a verifiable official institution account.">Signal: nema uplatnice na zvaničan račun ustanove koji možeš proveriti.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="fake-insurance-adjuster-doorstep-scam.html" data-sr="Lažni likvidator na vratima" data-en="Fake insurance adjuster doorstep scam">Lažni likvidator na vratima</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
            <li><a href="advance-fee-fraud.html" data-sr="Uplata unapred" data-en="Advance-fee fraud">Uplata unapred</a></li>
            <li><a href="refund-scam.html" data-sr="Prevara povraćaja" data-en="Refund scam">Prevara povraćaja</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> uplatiš ili pošalješ kod sa kartice." data-en="<strong>Phase threshold:</strong> you pay or send a card code."><strong>Prag faze:</strong> uplatiš ili pošalješ kod sa kartice.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Eskalacija naknada" data-en="Phase 4 — Fee escalation">Faza 4 — Eskalacija naknada</h3>
        <p data-sr="Posle prve uplate sledi korekcija, dodatna taksa sistema ili provera antifroda. Svaka stavka zvuči kao poslednji korak pre nego što dokument ili termin stigne." data-en="After the first payment comes a correction, extra system fee, or fraud check. Each item sounds like the last step before the document or appointment arrives.">Posle prve uplate sledi korekcija, dodatna taksa sistema ili provera antifroda. Svaka stavka zvuči kao poslednji korak pre nego što dokument ili termin stigne.</p>
        <ul class="bullets">
          <li data-sr="Signal: nova naknada svaki put kada približiš se gotovom koraku." data-en="Signal: a new fee each time you get close to a finished step.">Signal: nova naknada svaki put kada približiš se gotovom koraku.</li>
          <li data-sr="Signal: pretnja blokadom police ili odbijanjem budućih šteta." data-en="Signal: threat to block the policy or reject future claims.">Signal: pretnja blokadom police ili odbijanjem budućih šteta.</li>
          <li data-sr="Signal: uvodi se viši službenik koji potvrđuje isti zahtev." data-en="Signal: a senior officer is introduced who confirms the same demand.">Signal: uvodi se viši službenik koji potvrđuje isti zahtev.</li>
          <li data-sr="Signal: odbijanje pisanog potvrđenja brojem predmeta koji šalter osiguranja može proveriti." data-en="Signal: refusal of written confirmation with a reference the insurer counter can verify.">Signal: odbijanje pisanog potvrđenja brojem predmeta koji šalter osiguranja može proveriti.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> pristaneš na drugu uplatu." data-en="<strong>Phase threshold:</strong> you agree to another payment."><strong>Prag faze:</strong> pristaneš na drugu uplatu.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Krađa naloga ili zloupotreba podataka" data-en="Phase 5 — Account theft or data abuse">Faza 5 — Krađa naloga ili zloupotreba podataka</h3>
        <p data-sr="Prikupljeni podaci služe za reset lozinke, lažnu prijavu na servise ili preprodaju paketa identiteta. Ponekad sledi i lažni povraćaj novca koji traži još pristupa." data-en="Collected data feeds password resets, fake sign-ins, or identity packs. Sometimes a fake refund follows that asks for more access.">Prikupljeni podaci služe za reset lozinke, lažnu prijavu na servise ili preprodaju paketa identiteta. Ponekad sledi i lažni povraćaj novca koji traži još pristupa.</p>
        <ul class="bullets">
          <li data-sr="Signal: neočekivana obaveštenja o promeni lozinke na portalu osiguranja ili mejlu." data-en="Signal: unexpected notices about password changes on insurer portal or email.">Signal: neočekivana obaveštenja o promeni lozinke na portalu osiguranja ili mejlu.</li>
          <li data-sr="Signal: pokušaji prijave na druge servise sa tvojim brojem telefona." data-en="Signal: sign-in attempts on other services using your phone number.">Signal: pokušaji prijave na druge servise sa tvojim brojem telefona.</li>
          <li data-sr="Signal: lažni poziv iz banke odmah posle uplate." data-en="Signal: a fake bank call right after payment.">Signal: lažni poziv iz banke odmah posle uplate.</li>
          <li data-sr="Signal: zahtev za uklanjanje antivirusnog softvera ili daljinski pristup." data-en="Signal: a request to remove antivirus or allow remote access.">Signal: zahtev za uklanjanje antivirusnog softvera ili daljinski pristup.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> odobriš daljinsku sesiju ili pošalješ kod sa SMS-a." data-en="<strong>Phase threshold:</strong> you approve remote session or send an SMS code."><strong>Prag faze:</strong> odobriš daljinsku sesiju ili pošalješ kod sa SMS-a.</div>
      </article>
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 6 — Nestanak ili prelazak u drugu šemu" data-en="Phase 6 — Disappearance or pivot to another scheme">Faza 6 — Nestanak ili prelazak u drugu šemu</h3>
        <p data-sr="Kontakt se gasi kada nema više novca ili kada insistiraš na potvrdi u šalteru ili aplikaciji osiguranja. Ponekad isti podaci koriste za recovery prevaru." data-en="Contact stops when money runs out or when you insist on confirmation at the insurer counter or app. Sometimes the same data feeds a recovery scam.">Kontakt se gasi kada nema više novca ili kada insistiraš na potvrdi u šalteru ili aplikaciji osiguranja. Ponekad isti podaci koriste za recovery prevaru.</p>
        <ul class="bullets">
          <li data-sr="Signal: broj više ne odgovara a imejl se odbija." data-en="Signal: the number no longer answers and email bounces.">Signal: broj više ne odgovara a imejl se odbija.</li>
          <li data-sr="Signal: isti tekst priče se pojavljuje na forumima kao upozorenje." data-en="Signal: the same story appears on forums as a warning.">Signal: isti tekst priče se pojavljuje na forumima kao upozorenje.</li>
          <li data-sr="Signal: novi kontakt nudi povraćaj uz novu uplatu." data-en="Signal: a new contact offers recovery for another fee.">Signal: novi kontakt nudi povraćaj uz novu uplatu.</li>
          <li data-sr="Signal: lažni sajt prestaje da radi za nekoliko dana." data-en="Signal: the fake site stops working within days.">Signal: lažni sajt prestaje da radi za nekoliko dana.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="recovery-scam.html" data-sr="Prevara povraćaja" data-en="Recovery scam">Prevara povraćaja</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> prekineš komunikaciju i prijaviš incident." data-en="<strong>Phase threshold:</strong> you stop communication and report the incident."><strong>Prag faze:</strong> prekineš komunikaciju i prijaviš incident.</div>
      </article>
    </section>
    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Osiguranje na javnom broju sa police nema evidenciju ovog povraćaja ili traži podatke samo kroz zvanični portal." data-en="The insurer on the public policy number has no record of this refund or asks for data only through the official portal.">Osiguranje na javnom broju sa police nema evidenciju ovog povraćaja ili traži podatke samo kroz zvanični portal.</li>
        <li data-sr="Domen linka nije isti kao domen osiguravajuće kuće sa police." data-en="The link domain is not the same as the insurer’s domain on the policy.">Domen linka nije isti kao domen osiguravajuće kuće sa police.</li>
        <li data-sr="Traže se kod iz SMS-a ili puni podaci kartice na stranici koja nije 3-D Secure poznata banci." data-en="An SMS code or full card details are requested on a page your bank does not recognise as 3-D Secure.">Traže se kod iz SMS-a ili puni podaci kartice na stranici koja nije 3-D Secure poznata banci.</li>
        <li data-sr="Naknada za porez na povraćaj ili otključavanje sredstava pre stvarnog priliva." data-en="A fee for tax on the refund or unlocking funds before any real credit.">Naknada za porez na povraćaj ili otključavanje sredstava pre stvarnog priliva.</li>
        <li data-sr="Pozivalac odbija da sačeka dok ne pozoveš broj sa zadnje strane kartice ili police." data-en="The caller refuses to wait while you call the number on the back of your card or policy.">Pozivalac odbija da sačeka dok ne pozoveš broj sa zadnje strane kartice ili police.</li>
        <li data-sr="Isti šablon poruke prijavljen kao prevara uz različite nazive osiguranja." data-en="The same message template is reported as fraud under different insurer names.">Isti šablon poruke prijavljen kao prevara uz različite nazive osiguranja.</li>
        <li data-sr="Traže kripto ili darovne kartice da bi ubrzali isplatu." data-en="They ask for crypto or gift cards to speed up payout.">Traže kripto ili darovne kartice da bi ubrzali isplatu.</li>
        <li data-sr="Nepoznat povraćaj koji nisi prijavio ili očekivao istog dana." data-en="An unknown refund you did not file or expect the same day.">Nepoznat povraćaj koji nisi prijavio ili očekivao istog dana.</li>
        <li data-sr="Gramatičke greške u imenu osiguranja ili polisi." data-en="Grammar errors in the insurer or policy name.">Gramatičke greške u imenu osiguranja ili polisi.</li>
        <li data-sr="Pritisak da završiš u roku od jednog sata pre isteka rezervacije iznosa." data-en="Pressure to finish within one hour before the amount reservation expires.">Pritisak da završiš u roku od jednog sata pre isteka rezervacije iznosa.</li>
      </ul>
    </section>
    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Kanal i identitet" data-en="Channel and identity">Kanal i identitet</div>
          <ul class="bullets">
            <li data-sr="Da li link vodi na isti domen koji piše na zvaničnom sajtu osiguranja sa police." data-en="Whether the link leads to the same domain shown on the insurer’s official site on the policy.">Da li link vodi na isti domen koji piše na zvaničnom sajtu osiguranja sa police.</li>
            <li data-sr="Da li osiguranje na broju sa police potvrđuje poruku kada ga zoveš." data-en="Whether the insurer on the policy number confirms the message when you call.">Da li osiguranje na broju sa police potvrđuje poruku kada ga zoveš.</li>
            <li data-sr="Da li postoji ista obaveštenje u zvaničnom portalu osiguranja ako ga koristiš." data-en="Whether the same notice appears in the official insurer portal if you use one.">Da li postoji ista obaveštenje u zvaničnom portalu osiguranja ako ga koristiš.</li>
            <li data-sr="Da li imejl Reply-To odgovara zvaničnoj adresi." data-en="Whether the Reply-To address matches an official address.">Da li imejl Reply-To odgovara zvaničnoj adresi.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Novac i dokumenta" data-en="Money and documents">Novac i dokumenta</div>
          <ul class="bullets">
            <li data-sr="Da li bi osiguranje tražilo uplatu na privatni račun da otpusti povraćaj." data-en="Whether an insurer would ask for payment to a private account to release a refund.">Da li bi osiguranje tražilo uplatu na privatni račun da otpusti povraćaj.</li>
            <li data-sr="Da li banka vidi tipičnu prevaru kada opišeš primaoca i svrhu." data-en="Whether your bank flags a typical scam when you describe payee and purpose.">Da li banka vidi tipičnu prevaru kada opišeš primaoca i svrhu.</li>
            <li data-sr="Da li postoji pisan nalog sa brojem predmeta koji možeš proveriti." data-en="Whether there is a written reference number you can verify.">Da li postoji pisan nalog sa brojem predmeta koji možeš proveriti.</li>
            <li data-sr="Da li pauza od 24 sata menja ton u pretnju." data-en="Whether a 24-hour pause changes the tone to threats.">Da li pauza od 24 sata menja ton u pretnju.</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
      <p class="muted" data-sr="Više negativnih odgovora ukazuje na prevaru." data-en="Multiple negative answers point to a scam.">Više negativnih odgovora ukazuje na prevaru.</p>
      <ul class="bullets">
        <li data-sr="Da li sam uneo podatke kartice na link iz neočekivane poruke." data-en="Did I enter card data on a link from an unexpected message.">Da li sam uneo podatke kartice na link iz neočekivane poruke.</li>
        <li data-sr="Da li osiguranje na broju sa police potvrđuje ovaj povraćaj." data-en="Does the insurer on the policy number confirm this refund.">Da li osiguranje na broju sa police potvrđuje ovaj povraćaj.</li>
        <li data-sr="Da li traže lozinku naloga ili pristup mejlu." data-en="Are they asking for account passwords or email access.">Da li traže lozinku naloga ili pristup mejlu.</li>
        <li data-sr="Da li je uplata tražena na darovne kartice." data-en="Was payment requested via gift cards.">Da li je uplata tražena na darovne kartice.</li>
        <li data-sr="Da li postoji isti zahtev u zvaničnom portalu ili aplikaciji osiguranja." data-en="Does the same request appear in the official insurer portal or app.">Da li postoji isti zahtev u zvaničnom portalu ili aplikaciji osiguranja.</li>
        <li data-sr="Da li bih ovaj korak poslao advokatu pre uplate." data-en="Would I send this step to a lawyer before paying.">Da li bih ovaj korak poslao advokatu pre uplate.</li>
        <li data-sr="Da li me tera da ne zovem osiguranje direktno na broj sa police." data-en="Do they push me not to call the insurer directly on the policy number.">Da li me tera da ne zovem osiguranje direktno na broj sa police.</li>
        <li data-sr="Da li je jezik poruke generički za sve države." data-en="Is the message wording generic for all countries.">Da li je jezik poruke generički za sve države.</li>
        <li data-sr="Da li je PDF potpis i pečat zamagljen dok ne platiš." data-en="Is the PDF signature and stamp blurred until you pay.">Da li je PDF potpis i pečat zamagljen dok ne platiš.</li>
        <li data-sr="Da li novi kontakt nudi refundaciju uz novu uplatu." data-en="Does a new contact offer a refund for another fee.">Da li novi kontakt nudi refundaciju uz novu uplatu.</li>
        <li data-sr="Da li je broj telefona iz poruke isti kao na sajtu osiguranja sa police." data-en="Is the phone number from the message the same as on the insurer site on the policy.">Da li je broj telefona iz poruke isti kao na sajtu osiguranja sa police.</li>
        <li data-sr="Da li bih prijavio ovaj link osiguranju, banci i policiji." data-en="Would I report this link to the insurer, bank, and police.">Da li bih prijavio ovaj link osiguranju, banci i policiji.</li>
      </ul>
    </section>
    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Prekini uplate i ne šalji nove dokumente ili kodove." data-en="Stop payments and do not send new documents or codes.">Prekini uplate i ne šalji nove dokumente ili kodove.</li>
        <li data-sr="Sačuvaj poruke, URL adrese i uplatnice." data-en="Save messages, URLs, and payment slips.">Sačuvaj poruke, URL adrese i uplatnice.</li>
        <li data-sr="Pozovi banku ako je deljen podatak sa kartice ili izvršena uplata." data-en="Call the bank if card data was shared or a payment was made.">Pozovi banku ako je deljen podatak sa kartice ili izvršena uplata.</li>
        <li data-sr="Proveri osiguranje na broju sa police, ne broj iz poruke." data-en="Verify with the insurer on the policy number, not the number from the message.">Proveri osiguranje na broju sa police, ne broj iz poruke.</li>
        <li data-sr="Prijavi incident banci, operateru i policiji." data-en="Report to the bank, operator, and police.">Prijavi incident banci, operateru i policiji.</li>
      </ol>
    </section>
    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
      <p data-sr="Osoba veruje u povraćaj. Predložite poziv broju sa police ili kartice, zatvaranje linka i proveru kretanja na računu u banci." data-en="Someone believes in a refund. Suggest calling the policy or card number, closing the link, and checking movement with the bank.">Osoba veruje u povraćaj. Predložite poziv broju sa police ili kartice, zatvaranje linka i proveru kretanja na računu u banci.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li ista poruka postoji kao upozorenje na mreži." data-en="Whether the same message appears online as a warning.">Da li ista poruka postoji kao upozorenje na mreži.</li>
            <li data-sr="Da li bi agent osiguranja na zvaničnom broju tražio pun CVV preko linka iz SMS-a." data-en="Would an agent on the official number ask for full CVV via an SMS link.">Da li bi agent osiguranja na zvaničnom broju tražio pun CVV preko linka iz SMS-a.</li>
            <li data-sr="Možemo li potvrditi povraćaj direktno u šalteru ili aplikaciji osiguranja." data-en="Can we confirm the refund directly at the insurer counter or app.">Možemo li potvrditi povraćaj direktno u šalteru ili aplikaciji osiguranja.</li>
            <li data-sr="Da li postoji hitnost koja nestaje ako zatražiš pisan odgovor." data-en="Does the urgency vanish if you ask for a written reply.">Da li postoji hitnost koja nestaje ako zatražiš pisan odgovor.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Pravo osiguranje ne traži predplatu da otpusti povraćaj na karticu." data-en="A real insurer does not ask for an upfront fee to release a refund to a card.">Pravo osiguranje ne traži predplatu da otpusti povraćaj na karticu.</li>
            <li data-sr="Uvek proveri javni broj sa sajta, ne onaj iz SMS-a." data-en="Always verify the public number from the website, not from SMS.">Uvek proveri javni broj sa sajta, ne onaj iz SMS-a.</li>
            <li data-sr="Pauza od jednog dana bez gubitka statusa je razuman test." data-en="A one-day pause without losing status is a fair test.">Pauza od jednog dana bez gubitka statusa je razuman test.</li>
            <li data-sr="Ako nestanu kada tražiš broj sa police, to je odgovor." data-en="If they vanish when you ask for the policy number route, that is the answer.">Ako nestanu kada tražiš broj sa police, to je odgovor.</li>
          </ul>
        </div>
      </div>
    </section>
    
  `
};