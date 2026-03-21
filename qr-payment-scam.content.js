window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["qr-payment-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi QR prevara pri plaćanju" data-en="Introduction: how QR payment scam works">Uvod: kako radi QR prevara pri plaćanju</h2>
      <p data-sr="Napadač zamenjuje legitimni QR kod zlonamernim koji preusmerava uplatu na vlastiti nalog. Žrtva skenira i plaća napadaču." data-en="QR payment scam occurs when an attacker replaces a legitimate QR code — on a payment terminal, restaurant table, parking ticket, notice board, or in an email — with a malicious code that redirects payment to an account under the attacker's control. The victim scans the code, believing they are paying a legitimate recipient, while money goes to the attacker.">Napadač zamenjuje legitimni QR kod zlonamernim koji preusmerava uplatu na vlastiti nalog. Žrtva skenira i plaća napadaču.</p>
      <p data-sr="QR kod se ne može vizualno proveriti pre skeniranja. Nalepnica iznad originala je najčešća fizička metoda." data-en="QR codes are particularly dangerous because users cannot visually verify where they lead before scanning — as they can with text URLs. A sticker over the original code is one of the most common methods. Digital variants include replacing QR codes in PDF documents, emails, and on websites.">QR kod se ne može vizualno proveriti pre skeniranja. Nalepnica iznad originala je najčešća fizička metoda.</p>
      <div class="callout" data-sr="<strong>Model:</strong> legitimni QR zamena zlonamernim nalepnicom ili digitalnom zamenom → skeniranje → preusmeravanje uplate → gubitak." data-en="<strong>Model:</strong> legitimate QR replaced with malicious sticker or digital replacement → scanning → payment redirection → loss."><strong>Model:</strong> legitimni QR zamena zlonamernim nalepnicom ili digitalnom zamenom → skeniranje → preusmeravanje uplate → gubitak.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> QR kod koji nije fizički deo uređaja ili je nalepnica preko originala je visok rizik." data-en="<strong>Threshold:</strong> a QR code that is not physically part of the device or is a sticker over the original is high risk."><strong>Prag:</strong> QR kod koji nije fizički deo uređaja ili je nalepnica preko originala je visok rizik.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika QR prevare" data-en="How it works: QR scam mechanics">Kako generalno radi: mehanika QR prevare</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Fizičke metode zamene QR koda" data-en="Physical QR code replacement methods">Fizičke metode zamene QR koda</div>
          <ul class="bullets">
            <li data-sr="nalepnica s lažnim QR kodom zalepljena preko originalnog na terminalu, stolu ili tabli." data-en="sticker with a fake QR code placed over the original on a terminal, table, or board.">nalepnica s lažnim QR kodom zalepljena preko originalnog na terminalu, stolu ili tabli.</li>
            <li data-sr="parkirni kazneni nalozi ili vozne karte s lažnim QR za 'plaćanje kazne online'." data-en="parking penalty notices or travel tickets with a fake QR for paying the fine online'.">parkirni kazneni nalozi ili vozne karte s lažnim QR za 'plaćanje kazne online'.</li>
            <li data-sr="lažni plakati ili brošure sa QR kodovima koji vode na phishing stranice ili lažne naloge." data-en="fake posters or brochures with QR codes leading to phishing pages or fake accounts.">lažni plakati ili brošure sa QR kodovima koji vode na phishing stranice ili lažne naloge.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Digitalne metode zamene QR koda" data-en="Digital QR code replacement methods">Digitalne metode zamene QR koda</div>
          <ul class="bullets">
            <li data-sr="zamena QR koda u PDF fakturama, imejlovima ili dokumentima pre slanja primaocu." data-en="replacing QR code in PDF invoices, emails, or documents before sending to the recipient.">zamena QR koda u PDF fakturama, imejlovima ili dokumentima pre slanja primaocu.</li>
            <li data-sr="QR kod u phishing e-mailu koji vodi na lažnu bankovnu ili platnu stranicu." data-en="QR code in a phishing email leading to a fake banking or payment page.">QR kod u phishing e-mailu koji vodi na lažnu bankovnu ili platnu stranicu.</li>
            <li data-sr="lažni QR kod u aplikaciji za dostavu ili rezervacije koji preusmerava depozit." data-en="fake QR code in a delivery or booking app that redirects a deposit.">lažni QR kod u aplikaciji za dostavu ili rezervacije koji preusmerava depozit.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)" data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Zamena legitimnog QR koda" data-en="Phase 1 — Replacing the legitimate QR code">Faza 1 — Zamena legitimnog QR koda</h3>
        <p data-sr="Napadač zamenjuje QR pažljivo — nalepnica odgovara originalu ili digitalna zamena je u istom dokumentu." data-en="The attacker physically or digitally replaces the legitimate QR code. The replacement is usually carefully executed — the sticker is the same size and color as the original, the digital replacement is in the same document.">Napadač zamenjuje QR pažljivo — nalepnica odgovara originalu ili digitalna zamena je u istom dokumentu.</p>
        <ul class="bullets">
          <li data-sr="signal: QR kod je nalepnica zalepljena iznad osnove uređaja ili dokumenta." data-en="signal: the QR code is a sticker placed over the base of the device or document.">signal: QR kod je nalepnica zalepljena iznad osnove uređaja ili dokumenta.</li>
          <li data-sr="signal: QR kod nije štampan direktno na dokumentu nego je dodat naknadno." data-en="signal: the QR code is not printed directly on the document but was added afterwards.">signal: QR kod nije štampan direktno na dokumentu nego je dodat naknadno.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> zamenjeni QR kod je u javnoj upotrebi i čeka žrtve koje ga skeniraju." data-en="<strong>Threshold:</strong> the replaced QR code is in public use waiting for victims who scan it."><strong>Prag faze:</strong> zamenjeni QR kod je u javnoj upotrebi i čeka žrtve koje ga skeniraju.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Skeniranje i preusmeravanje uplate" data-en="Phase 2 — Scanning and payment redirection">Faza 2 — Skeniranje i preusmeravanje uplate</h3>
        <p data-sr="Žrtva skenira i plaća napadaču. Greška se otkrije tek kad legitimni primalac ne prima uplatu." data-en="The victim scans the QR code and is redirected to a fake account or fake page. Payment goes to the fraudster's account, not to the legitimate recipient. The victim does not know until they notice a missing payment from the real recipient.">Žrtva skenira i plaća napadaču. Greška se otkrije tek kad legitimni primalac ne prima uplatu.</p>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="payment-link-scam.html" data-sr="Prevara s linkom za plaćanje" data-en="Payment link scam">Prevara s linkom za plaćanje</a></li>
            <li><a href="instant-payment-scam.html" data-sr="Prevara s instant plaćanjem" data-en="Instant payment scam">Prevara s instant plaćanjem</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> uplata je izvršena — povrat je moguć samo ako se nalog prevaranta brzo blokira." data-en="<strong>Threshold:</strong> payment is made — recovery is only possible if the fraudster's account is quickly blocked."><strong>Prag faze:</strong> uplata je izvršena — povrat je moguć samo ako se nalog prevaranta brzo blokira.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="QR kod je nalepnica zalepljena iznad osnove terminala, stola ili dokumenta." data-en="the QR code is a sticker over the base of the terminal, table, or document.">QR kod je nalepnica zalepljena iznad osnove terminala, stola ili dokumenta.</li>
        <li data-sr="URL koji se prikazuje nakon skeniranja ne odgovara zvaničnom domenu primaoca." data-en="the URL displayed after scanning does not match the recipient's official domain.">URL koji se prikazuje nakon skeniranja ne odgovara zvaničnom domenu primaoca.</li>
        <li data-sr="ime primaoca plaćanja u aplikaciji ne odgovara imenu kome bi trebalo platiti." data-en="the payment recipient name in the app does not match who you are supposed to pay.">ime primaoca plaćanja u aplikaciji ne odgovara imenu kome bi trebalo platiti.</li>
        <li data-sr="QR kod vodi na stranicu koja traži kartičane podatke — QR za plaćanje nikad ne treba podatke kartice za direktan transfer." data-en="the QR code leads to a page requesting card data — a QR for direct transfer never needs card details.">QR kod vodi na stranicu koja traži kartičane podatke — QR za plaćanje nikad ne treba podatke kartice za direktan transfer.</li>
        <li data-sr="parkirni ili saobraćajni kazneni nalog s QR kodom za 'plaćanje kazne online' — proverite zvaničnu stranicu institucije." data-en="a parking or traffic penalty notice with a QR code for 'paying the fine online' — verify through the institution's official website.">parkirni ili saobraćajni kazneni nalog s QR kodom za 'plaćanje kazne online' — proverite zvaničnu stranicu institucije.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 8 provera pre skeniranja QR koda za plaćanje" data-en="Checklist: 8 checks before scanning a QR code for payment">Checklista: 8 provera pre skeniranja QR koda za plaćanje</h2>
      <ul class="bullets">
        <li data-sr="Da li je QR kod štampan direktno na materijalu ili je nalepnica zalepljena naknadno?" data-en="Is the QR code printed directly on the material or is it a sticker added later?">Da li je QR kod štampan direktno na materijalu ili je nalepnica zalepljena naknadno?</li>
        <li data-sr="Da li URL koji se prikazuje nakon skeniranja (pre nego potvrdim) odgovara zvaničnom sajtu?" data-en="Does the URL displayed after scanning (before I confirm) match the official site?">Da li URL koji se prikazuje nakon skeniranja (pre nego potvrdim) odgovara zvaničnom sajtu?</li>
        <li data-sr="Da li ime primaoca u aplikaciji za plaćanje odgovara kome plaćam?" data-en="Does the recipient name in the payment app match who I am paying?">Da li ime primaoca u aplikaciji za plaćanje odgovara kome plaćam?</li>
        <li data-sr="Da li postoji alternativni način plaćanja koji ne koristi ovaj QR kod?" data-en="Is there an alternative payment method that does not use this QR code?">Da li postoji alternativni način plaćanja koji ne koristi ovaj QR kod?</li>
        <li data-sr="Da li stranica na koju vodi QR traži kartičane podatke — što za direktan QR transfer nije normalno?" data-en="Does the page the QR leads to request card data — which is not normal for a direct QR transfer?">Da li stranica na koju vodi QR traži kartičane podatke — što za direktan QR transfer nije normalno?</li>
        <li data-sr="Da li sam proverio/la zvanični sajt institucije za QR koji je na kaznenom nalogu ili fakturi?" data-en="Did I check the institution's official site for the QR on a penalty notice or invoice?">Da li sam proverio/la zvanični sajt institucije za QR koji je na kaznenom nalogu ili fakturi?</li>
        <li data-sr="Da li mi je QR kod poslat imejlom ili porukom umesto da je na fizičkom materijalu?" data-en="Was the QR code sent to me by email or message rather than being on physical material?">Da li mi je QR kod poslat imejlom ili porukom umesto da je na fizičkom materijalu?</li>
        <li data-sr="Da li postoji broj računa ili IBAN koji mogu proveriti nezavisno od QR koda?" data-en="Is there an account number or IBAN I can verify independently of the QR code?">Da li postoji broj računa ili IBAN koji mogu proveriti nezavisno od QR koda?</li>
      </ul>
    </section>

    
    <!-- PROVERE -->
    <section class="content-section">
      <h2 data-sr="Provere: 8 brzih provera pre skeniranja QR koda za plaćanje" data-en="Checks: 8 quick checks before scanning a QR payment code">Provere: 8 brzih provera pre skeniranja QR koda za plaćanje</h2>
      <ol class="steps">
        <li data-sr="Proveri da li je QR kod nalepnica zalepljena preko originalnog — podigni ivicu da proveriš." data-en="Check whether the QR code is a sticker placed over the original — lift the edge to verify.">Proveri da li je QR kod nalepnica zalepljena preko originalnog — podigni ivicu da proveriš.</li>
        <li data-sr="Skeniranjem QR koda trebao bi da vidiš URL pre otvaranja — proveri da li je legitimni domen." data-en="Scanning a QR code should show you the URL before opening — check it is a legitimate domain.">Skeniranjem QR koda trebao bi da vidiš URL pre otvaranja — proveri da li je legitimni domen.</li>
        <li data-sr="Nikada ne unosiš podatke kartice na stranici do koje si stigao skeniranjem QR koda na ulici." data-en="Never enter card details on a page you reached by scanning a QR code in a public place.">Nikada ne unosiš podatke kartice na stranici do koje si stigao skeniranjem QR koda na ulici.</li>
        <li data-sr="Plaćanje parkinga, restorana ili bilo koje usluge trebalo bi da ide na poznat domenski naziv." data-en="Payment for parking, restaurants, or any service should go to a known domain name.">Plaćanje parkinga, restorana ili bilo koje usluge trebalo bi da ide na poznat domenski naziv.</li>
        <li data-sr="Koristi zvaničnu aplikaciju umesto QR koda ako je raspoloživa." data-en="Use the official app instead of a QR code if available.">Koristi zvaničnu aplikaciju umesto QR koda ako je raspoloživa.</li>
        <li data-sr="Ne klikaj na QR kod koji je stigao u nezatraženom imejlu ili SMS-u." data-en="Do not click on a QR code that arrived in an unsolicited email or SMS.">Ne klikaj na QR kod koji je stigao u nezatraženom imejlu ili SMS-u.</li>
        <li data-sr="Proveri izvod bankovnog računa posle svakog QR plaćanja." data-en="Check your bank statement after every QR payment.">Proveri izvod bankovnog računa posle svakog QR plaćanja.</li>
        <li data-sr="Ako URL koji otvara QR kod izgleda sumnjivo, odmah zatvori stranicu bez unosa podataka." data-en="If the URL opened by the QR code looks suspicious, close the page immediately without entering any data.">Ako URL koji otvara QR kod izgleda sumnjivo, odmah zatvori stranicu bez unosa podataka.</li>
      </ol>
    </section>
<section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="ne dovršite plaćanje — zatvorite aplikaciju pre potvrde transakcije." data-en="do not complete the payment — close the app before confirming the transaction.">ne dovršite plaćanje — zatvorite aplikaciju pre potvrde transakcije.</li>
        <li data-sr="ako je uplata izvršena, odmah kontaktirajte banku i tražite blokadu transakcije." data-en="if payment was made, immediately contact the bank and request transaction blocking.">ako je uplata izvršena, odmah kontaktirajte banku i tražite blokadu transakcije.</li>
        <li data-sr="prijavite lažni QR kod mestu gde ste ga pronašli i lokalnoj policiji." data-en="report the fake QR code to the location where you found it and local police.">prijavite lažni QR kod mestu gde ste ga pronašli i lokalnoj policiji.</li>
        <li data-sr="uklonite nalepnicu ako ste na fizičkom mestu — radi zaštite sledećih žrtava." data-en="remove the sticker if at a physical location — to protect subsequent victims.">uklonite nalepnicu ako ste na fizičkom mestu — radi zaštite sledećih žrtava.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li je QR kod nalepnica ili je direktno odštampan na terminalu?" data-en="Is the QR code a sticker or directly printed on the terminal?">Da li je QR kod nalepnica ili je direktno odštampan na terminalu?</li>
            <li data-sr="Da li je URL koji se prikazuje po skeniranju odgovarao zvaničnom sajtu primaoca?" data-en="Did the URL displayed after scanning match the recipient's official site?">Da li je URL koji se prikazuje po skeniranju odgovarao zvaničnom sajtu primaoca?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Pre skeniranja uvek proveri URL koji se prikazuje — ime primaoca mora da odgovara kome plaćaš." data-en="Before scanning always check the URL that displays — the recipient name must match who you are paying.">Pre skeniranja uvek proveri URL koji se prikazuje — ime primaoca mora da odgovara kome plaćaš.</li>
            <li data-sr="Nalepnica zalepljena iznad QR koda na terminalu je najčešći znak QR prevare." data-en="A sticker placed over a QR code on a terminal is the most common sign of QR fraud.">Nalepnica zalepljena iznad QR koda na terminalu je najčešći znak QR prevare.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
