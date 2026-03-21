window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["tap-to-pay-relay-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
      <p data-sr="Žrtva misli da plaća jedno mesto dok se naplata odvija drugde." data-en="Tap-to-pay relay means the authorization that should happen with your card or phone at a known terminal actually completes on another reader linked over a channel.">Žrtva misli da plaća jedno mesto dok se naplata odvija drugde.</p>
      <p data-sr="Bez vašeg tap-a ili potvrde lanac se često prekida." data-en="The attack needs your cooperation: holding the device to an unknown reader, installing an app, or confirming without reading the amount.">Bez vašeg tap-a ili potvrde lanac se često prekida.</p>
      <div class="callout" data-sr="<strong>Model:</strong> uveravanje → kontakt sa sumnjivim NFC uređajem → prenos sesije → transakcija na pogrešnom terminalu." data-en="<strong>Model:</strong> persuasion → contact with suspicious NFC device → session relay → transaction on wrong terminal."><strong>Model:</strong> uveravanje → kontakt sa sumnjivim NFC uređajem → prenos sesije → transakcija na pogrešnom terminalu.</div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)" data-en="Timeline (phases + evolutions)">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Priprema scenarija" data-en="Phase 1 — Setting the scene">Faza 1 — Priprema scenarija</h3>
        <p data-sr="Kontekst je često gužva, štand, ili lažna anketa." data-en="The fraudster offers a test payment, prize, or technical check of the card or phone.">Kontekst je često gužva, štand, ili lažna anketa.</p>
        <ul class="bullets">
          <li data-sr="signal: traže da prislonite telefon ili karticu na njihov uređaj jedan sekund." data-en="signal: ask you to tap phone or card on their device for one second.">signal: traže da prislonite telefon ili karticu na njihov uređaj jedan sekund.</li>
          <li data-sr="signal: nagrada ili popust zavisi od verifikacije na licu mesta." data-en="signal: prize or discount depends on on-site verification.">signal: nagrada ili popust zavisi od verifikacije na licu mesta.</li>
          <li data-sr="signal: pritisak da uradite odmah dok važi ponuda." data-en="signal: pressure to do it now while the offer is valid.">signal: pritisak da uradite odmah dok važi ponuda.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> svaki test plaćanja koji nije u zvaničnoj prodavnici je sumnjiv." data-en="<strong>Threshold:</strong> any test payment not inside an official shop is suspicious."><strong>Prag faze:</strong> svaki test plaćanja koji nije u zvaničnoj prodavnici je sumnjiv.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Fizički tap ili potvrda u novčaniku" data-en="Phase 2 — Physical tap or wallet confirm">Faza 2 — Fizički tap ili potvrda u novčaniku</h3>
        <p data-sr="Iznos koji vidite lokalno može ne odgovarati onome na pravom terminalu." data-en="You tap the device or confirm in the app while the session is tied to a remote POS.">Iznos koji vidite lokalno može ne odgovarati onome na pravom terminalu.</p>
        <ul class="bullets">
          <li data-sr="signal: iznos u aplikaciji ne odgovara ceni koju ste čuli usmeno." data-en="signal: app amount does not match the price you were told.">signal: iznos u aplikaciji ne odgovara ceni koju ste čuli usmeno.</li>
          <li data-sr="signal: naziv trgovca u aplikaciji nije poznat." data-en="signal: merchant name in the app is unknown.">signal: naziv trgovca u aplikaciji nije poznat.</li>
          <li data-sr="signal: traže dvostruki tap jer nije prošlo." data-en="signal: they ask for a double tap because it failed.">signal: traže dvostruki tap jer nije prošlo.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="nfc-relay-scam.html" data-sr="NFC relay napad" data-en="NFC relay scam">NFC relay napad</a></li>
            <li><a href="contactless-card-scam.html" data-sr="Prevara beskontaktnom karticom" data-en="Contactless card scam">Prevara beskontaktnom karticom</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> ne potvrđujte plaćanje dok ne vidite poznatog trgovca i tačan iznos." data-en="<strong>Threshold:</strong> do not confirm payment until you see a known merchant and exact amount."><strong>Prag faze:</strong> ne potvrđujte plaćanje dok ne vidite poznatog trgovca i tačan iznos.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Završetak na udaljenom terminalu" data-en="Phase 3 — Completion at remote terminal">Faza 3 — Završetak na udaljenom terminalu</h3>
        <p data-sr="To može biti skuplja kupovina ili druga usluga." data-en="The transaction posts to a merchant who is not the one in front of you.">To može biti skuplja kupovina ili druga usluga.</p>
        <ul class="bullets">
          <li data-sr="signal: lokacija u aplikaciji banke ne odgovara mestu gde stojite." data-en="signal: bank app location does not match where you stand.">signal: lokacija u aplikaciji banke ne odgovara mestu gde stojite.</li>
          <li data-sr="signal: vreme transakcije poklapa se sa trenutkom tap-a kod sumnjivog uređaja." data-en="signal: transaction time matches the tap moment at a suspicious device.">signal: vreme transakcije poklapa se sa trenutkom tap-a kod sumnjivog uređaja.</li>
          <li data-sr="signal: više od jednog odobrenja u minuti." data-en="signal: more than one approval in a minute.">signal: više od jednog odobrenja u minuti.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> prva sumnjiva transakcija zahteva blokadu kartice ili isključenje novčanika u aplikaciji." data-en="<strong>Threshold:</strong> the first suspicious transaction needs a card block or wallet disable in the app."><strong>Prag faze:</strong> prva sumnjiva transakcija zahteva blokadu kartice ili isključenje novčanika u aplikaciji.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 4 — Otkrivanje na izvodu" data-en="Phase 4 — Discovery on statement">Faza 4 — Otkrivanje na izvodu</h3>
        <p data-sr="Ponekad je iznos mali pa ostane neprimećen." data-en="The user sees a line that does not match the purchase they remember.">Ponekad je iznos mali pa ostane neprimećen.</p>
        <ul class="bullets">
          <li data-sr="signal: stavka sa generičkim nazivom trgovca." data-en="signal: line with a generic merchant name.">signal: stavka sa generičkim nazivom trgovca.</li>
          <li data-sr="signal: valuta različita od lokalne bez putovanja." data-en="signal: currency different from local without travel.">signal: valuta različita od lokalne bez putovanja.</li>
          <li data-sr="signal: dupla stavka u istom danu." data-en="signal: duplicate line on the same day.">signal: dupla stavka u istom danu.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> prijava u roku od 24 sata pomaže sporu kod banke." data-en="<strong>Threshold:</strong> reporting within 24 hours helps the bank dispute."><strong>Prag faze:</strong> prijava u roku od 24 sata pomaže sporu kod banke.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 5 — Spor i zamena tokena u novčaniku" data-en="Phase 5 — Dispute and wallet token change">Faza 5 — Spor i zamena tokena u novčaniku</h3>
        <p data-sr="Token u digitalnom novčaniku se ponekad rotira posle incidenta." data-en="The bank or wallet issuer reviews device and merchant logs.">Token u digitalnom novčaniku se ponekad rotira posle incidenta.</p>
        <ul class="bullets">
          <li data-sr="signal: banka traži vreme i model telefona." data-en="signal: bank asks for time and phone model.">signal: banka traži vreme i model telefona.</li>
          <li data-sr="signal: zamena fizičke kartice ako je bila uključena." data-en="signal: physical card replacement if it was involved.">signal: zamena fizičke kartice ako je bila uključena.</li>
          <li data-sr="signal: onemogućavanje beskontakta privremeno." data-en="signal: temporarily disabling contactless.">signal: onemogućavanje beskontakta privremeno.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="card-not-present-fraud.html" data-sr="Zloupotreba kartice bez fizičkog prisustva" data-en="Card-not-present fraud">Zloupotreba kartice bez fizičkog prisustva</a></li>
            <li><a href="malicious-app-scam.html" data-sr="Zlonamerna aplikacija" data-en="Malicious app scam">Zlonamerna aplikacija</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> čuvajte snimak ekrana odobrenja iz aplikacije ako postoji." data-en="<strong>Threshold:</strong> keep a screenshot of the in-app approval if it exists."><strong>Prag faze:</strong> čuvajte snimak ekrana odobrenja iz aplikacije ako postoji.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Prevencija ubuduće" data-en="Phase 6 — Prevention going forward">Faza 6 — Prevencija ubuduće</h3>
        <p data-sr="Digitalni novčanik može se zaključavati biometrijom pre plaćanja." data-en="Limit contactless caps, use app alerts, and do not tap unknown readers.">Digitalni novčanik može se zaključavati biometrijom pre plaćanja.</p>
        <ul class="bullets">
          <li data-sr="signal: podešavanje da se plaćanje traži biometrija svaki put." data-en="signal: setting to require biometrics each payment.">signal: podešavanje da se plaćanje traži biometrija svaki put.</li>
          <li data-sr="signal: isključivanje brzog tap režima u gužvi." data-en="signal: turning off fast tap mode in crowds.">signal: isključivanje brzog tap režima u gužvi.</li>
          <li data-sr="signal: korišćenje RFID novčanika za fizičke kartice." data-en="signal: using RFID wallet for physical cards.">signal: korišćenje RFID novčanika za fizičke kartice.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> pravilo samo zvanični terminal prodavca rezuje većinu relay scenarija." data-en="<strong>Threshold:</strong> the rule only the shop's official terminal cuts most relay scenarios."><strong>Prag faze:</strong> pravilo samo zvanični terminal prodavca rezuje većinu relay scenarija.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Zahtev za tap na nepoznat prenosni čitač." data-en="Request to tap on an unknown portable reader.">Zahtev za tap na nepoznat prenosni čitač.</li>
        <li data-sr="Test plaćanje bez fakture i bez poznatog prodavca." data-en="Test payment without receipt and without a known merchant.">Test plaćanje bez fakture i bez poznatog prodavca.</li>
        <li data-sr="Nagrada zavisi od tap-a na licu mesta." data-en="Prize depends on an on-site tap.">Nagrada zavisi od tap-a na licu mesta.</li>
        <li data-sr="Iznos u aplikaciji ne odgovara usmenoj ceni." data-en="App amount does not match the spoken price.">Iznos u aplikaciji ne odgovara usmenoj ceni.</li>
        <li data-sr="Naziv trgovca u aplikaciji je nepoznat." data-en="Merchant name in the app is unknown.">Naziv trgovca u aplikaciji je nepoznat.</li>
        <li data-sr="Traže više tap-ova uz žurbu." data-en="They ask for multiple taps with rushing.">Traže više tap-ova uz žurbu.</li>
        <li data-sr="Lokacija transakcije ne odgovara mestu gde stojite." data-en="Transaction location does not match where you stand.">Lokacija transakcije ne odgovara mestu gde stojite.</li>
        <li data-sr="Instalacija aplikacije radi boljeg tap-a." data-en="Installing an app for a better tap.">Instalacija aplikacije radi boljeg tap-a.</li>
        <li data-sr="Čitanje kartice kroz torbu bez vašeg eksplicitnog odobrenja." data-en="Reading the card through a bag without your explicit approval.">Čitanje kartice kroz torbu bez vašeg eksplicitnog odobrenja.</li>
        <li data-sr="Ponavljanje istog testa na više ljudi u istoj zoni." data-en="Repeating the same test on several people in the same area.">Ponavljanje istog testa na više ljudi u istoj zoni.</li>
      </ul>
    </section>

    <section class="content-section">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <ol class="steps">
        <li data-sr="Tap-ujte samo na terminal koji pripada prodavcu koji vidite." data-en="Tap only on the terminal belonging to the shop you see.">Tap-ujte samo na terminal koji pripada prodavcu koji vidite.</li>
        <li data-sr="Pročitajte iznos u aplikaciji pre biometrije ili potvrde." data-en="Read the amount in the app before biometrics or confirm.">Pročitajte iznos u aplikaciji pre biometrije ili potvrde.</li>
        <li data-sr="Uključite obaveštenje za svaku beskontaktnu transakciju." data-en="Enable alert for every contactless transaction.">Uključite obaveštenje za svaku beskontaktnu transakciju.</li>
        <li data-sr="Postavite niski dnevni limit za beskontaktna plaćanja." data-en="Set a low daily limit for contactless payments.">Postavite niski dnevni limit za beskontaktna plaćanja.</li>
        <li data-sr="Ne instalirajte aplikacije koje traže NFC dozvolu bez razloga." data-en="Do not install apps asking for NFC permission without reason.">Ne instalirajte aplikacije koje traže NFC dozvolu bez razloga.</li>
        <li data-sr="Koristite zaštitni novčanik za fizičke kartice u gužvi." data-en="Use a protective wallet for physical cards in crowds.">Koristite zaštitni novčanik za fizičke kartice u gužvi.</li>
        <li data-sr="Posle sumnjivog tap-a proverite izvod u roku od sat vremena." data-en="After a suspicious tap check the statement within an hour.">Posle sumnjivog tap-a proverite izvod u roku od sat vremena.</li>
        <li data-sr="Blokirajte karticu ili token ako sumnjate na relay." data-en="Block the card or token if you suspect relay.">Blokirajte karticu ili token ako sumnjate na relay.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
      <ul class="bullets">
        <li data-sr="Da li je terminal fizički povezan sa prodavcem koji vidim?" data-en="Is the terminal physically tied to the merchant I see?">Da li je terminal fizički povezan sa prodavcem koji vidim?</li>
        <li data-sr="Da li iznos u aplikaciji odgovara ceni?" data-en="Does the app amount match the price?">Da li iznos u aplikaciji odgovara ceni?</li>
        <li data-sr="Da li sam ikada tap-ovao na nepoznat prenosni uređaj?" data-en="Did I ever tap an unknown portable device?">Da li sam ikada tap-ovao na nepoznat prenosni uređaj?</li>
        <li data-sr="Da li su obaveštenja uključena za tap plaćanja?" data-en="Are alerts on for tap payments?">Da li su obaveštenja uključena za tap plaćanja?</li>
        <li data-sr="Da li je limit za beskontaktno dovoljno nizak?" data-en="Is the contactless limit low enough?">Da li je limit za beskontaktno dovoljno nizak?</li>
        <li data-sr="Da li digitalni novčanik traži biometriju pre plaćanja?" data-en="Does the digital wallet require biometrics before paying?">Da li digitalni novčanik traži biometriju pre plaćanja?</li>
        <li data-sr="Da li postoji nepoznata stavka na izvodu posle gužve?" data-en="Is there an unknown line on the statement after a crowd event?">Da li postoji nepoznata stavka na izvodu posle gužve?</li>
        <li data-sr="Da li treba prijava banci odmah?" data-en="Should I report to the bank immediately?">Da li treba prijava banci odmah?</li>
        <li data-sr="Da li treba rotirati karticu ili token?" data-en="Should I rotate card or token?">Da li treba rotirati karticu ili token?</li>
        <li data-sr="Da li sam odbio instalaciju sumnjive aplikacije?" data-en="Did I refuse installing a suspicious app?">Da li sam odbio instalaciju sumnjive aplikacije?</li>
        <li data-sr="Da li mogu da isključim beskontaktno kod banke privremeno?" data-en="Can I disable contactless at the bank temporarily?">Da li mogu da isključim beskontaktno kod banke privremeno?</li>
        <li data-sr="Da li znam kako da zamrzim novčanik u aplikaciji?" data-en="Do I know how to freeze the wallet in the app?">Da li znam kako da zamrzim novčanik u aplikaciji?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Povucite telefon ili karticu od čitača odmah." data-en="Pull phone or card from the reader immediately.">Povucite telefon ili karticu od čitača odmah.</li>
        <li data-sr="Ne potvrđujte dodatne zahteve u aplikaciji." data-en="Do not confirm extra prompts in the app.">Ne potvrđujte dodatne zahteve u aplikaciji.</li>
        <li data-sr="Proverite poslednje transakcije u aplikaciji banke." data-en="Check latest transactions in the bank app.">Proverite poslednje transakcije u aplikaciji banke.</li>
        <li data-sr="Blokirajte karticu ili zamrzite novčanik ako vidite sumnjivu stavku." data-en="Block the card or freeze the wallet if you see a suspicious line.">Blokirajte karticu ili zamrzite novčanik ako vidite sumnjivu stavku.</li>
        <li data-sr="Prijavite incident banci sa vremenom i mestom tap-a." data-en="Report the incident to the bank with tap time and place.">Prijavite incident banci sa vremenom i mestom tap-a.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si tap-ovao na uređaj koji nije kasa?" data-en="Did you tap a device that was not the checkout?">Da li si tap-ovao na uređaj koji nije kasa?</li>
            <li data-sr="Da li se iznos poklapao sa cenovnikom?" data-en="Did the amount match the price list?">Da li se iznos poklapao sa cenovnikom?</li>
            <li data-sr="Da li aplikacija pokazuje nepoznatog trgovca?" data-en="Does the app show an unknown merchant?">Da li aplikacija pokazuje nepoznatog trgovca?</li>
            <li data-sr="Da li si odmah proverio transakcije?" data-en="Did you check transactions immediately?">Da li si odmah proverio transakcije?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Plaćam samo na terminalu koji pripada ovoj kasi." data-en="I pay only on the terminal that belongs to this register.">Plaćam samo na terminalu koji pripada ovoj kasi.</li>
            <li data-sr="Ne tap-ujem na tvoj telefon ni na prenosni čitač." data-en="I will not tap your phone or portable reader.">Ne tap-ujem na tvoj telefon ni na prenosni čitač.</li>
            <li data-sr="Ako treba verifikacija, radi je menadžer preko zvaničnog POS-a." data-en="If verification is needed, the manager does it through the official POS.">Ako treba verifikacija, radi je menadžer preko zvaničnog POS-a.</li>
            <li data-sr="Prvo čitam iznos u aplikaciji, tek onda potvrđujem biometrijom." data-en="First I read the amount in the app, then I confirm with biometrics.">Prvo čitam iznos u aplikaciji, tek onda potvrđujem biometrijom.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
