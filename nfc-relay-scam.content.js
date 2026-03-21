window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["nfc-relay-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
      <p data-sr="Jedan deo lanca je kod vas, drugi kod napadačevog čitača." data-en="NFC relay extends communication between a card or phone and a POS reader across two linked devices, so the physical tap is not where payment completes.">Jedan deo lanca je kod vas, drugi kod napadačevog čitača.</p>
      <p data-sr="Bez vašeg tap-a ili potvrde većina lanaca pada." data-en="Technical requirements and success depend on the card, limits, and app protections, but social engineering patterns are constant: rush, test, or fake tech support.">Bez vašeg tap-a ili potvrde većina lanaca pada.</p>
      <div class="callout" data-sr="<strong>Model:</strong> uveravanje → tap ili potvrda kod vas → prenos preko linka → odobrenje na udaljenom čitaču." data-en="<strong>Model:</strong> persuasion → tap or confirm on your side → relay over a link → approval at a remote reader."><strong>Model:</strong> uveravanje → tap ili potvrda kod vas → prenos preko linka → odobrenje na udaljenom čitaču.</div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)" data-en="Timeline (phases + evolutions)">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Postavljanje dva kraja lanca" data-en="Phase 1 — Setting two ends of the chain">Faza 1 — Postavljanje dva kraja lanca</h3>
        <p data-sr="Link može biti mobilni internet između uređaja." data-en="One device sits near your card or phone; the other is at a real or fake terminal.">Link može biti mobilni internet između uređaja.</p>
        <ul class="bullets">
          <li data-sr="signal: prenosni čitač ili telefon koji samo meri signal." data-en="signal: portable reader or phone that just measures signal.">signal: prenosni čitač ili telefon koji samo meri signal.</li>
          <li data-sr="signal: dve osobe koje komunicišu gestovima ili porukama tokom vašeg tap-a." data-en="signal: two people coordinating by gestures or messages during your tap.">signal: dve osobe koje komunicišu gestovima ili porukama tokom vašeg tap-a.</li>
          <li data-sr="signal: tehnički žargon bez dokumentacije banke." data-en="signal: technical jargon without bank documentation.">signal: tehnički žargon bez dokumentacije banke.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> dva odvojena uređaja koja koordinisano prate vaš NFC korak su visok rizik." data-en="<strong>Threshold:</strong> two separate devices coordinating around your NFC step are high risk."><strong>Prag faze:</strong> dva odvojena uređaja koja koordinisano prate vaš NFC korak su visok rizik.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Iniciranje sesije kod žrtve" data-en="Phase 2 — Starting the session at the victim">Faza 2 — Iniciranje sesije kod žrtve</h3>
        <p data-sr="Tap pokreće zahtev koji se prenosi na drugi kraj." data-en="They ask you to tap the card or phone to sync or update something.">Tap pokreće zahtev koji se prenosi na drugi kraj.</p>
        <ul class="bullets">
          <li data-sr="signal: aplikacija traži NFC dozvolu odmah posle instalacije." data-en="signal: app asks for NFC permission right after install.">signal: aplikacija traži NFC dozvolu odmah posle instalacije.</li>
          <li data-sr="signal: ekran aplikacije ne prikazuje jasan iznos pre potvrde." data-en="signal: app screen does not show a clear amount before confirm.">signal: ekran aplikacije ne prikazuje jasan iznos pre potvrde.</li>
          <li data-sr="signal: traže više tap-ova zbog konekcije." data-en="signal: they ask for more taps for connectivity.">signal: traže više tap-ova zbog konekcije.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="tap-to-pay-relay-scam.html" data-sr="Tap-to-pay relay prevara" data-en="Tap-to-pay relay scam">Tap-to-pay relay prevara</a></li>
            <li><a href="malicious-app-scam.html" data-sr="Zlonamerna aplikacija" data-en="Malicious app scam">Zlonamerna aplikacija</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> ne dajte NFC dozvolu aplikacijama koje nisu od izdavača banke ili novčanika." data-en="<strong>Threshold:</strong> do not grant NFC permission to apps not from your bank or wallet issuer."><strong>Prag faze:</strong> ne dajte NFC dozvolu aplikacijama koje nisu od izdavača banke ili novčanika.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Završetak na udaljenom čitaču" data-en="Phase 3 — Completion at remote reader">Faza 3 — Završetak na udaljenom čitaču</h3>
        <p data-sr="Na izvodu se pojavljuje trgovac ili iznos koji ne odgovara vašoj situaciji." data-en="A reader at another location receives a response matching your tap or confirm.">Na izvodu se pojavljuje trgovac ili iznos koji ne odgovara vašoj situaciji.</p>
        <ul class="bullets">
          <li data-sr="signal: transakcija u inostranstvu ili gradu gde niste bili." data-en="signal: transaction abroad or in a city where you were not.">signal: transakcija u inostranstvu ili gradu gde niste bili.</li>
          <li data-sr="signal: iznos veći od očekivanog limita za jedan tap." data-en="signal: amount higher than expected single-tap limit.">signal: iznos veći od očekivanog limita za jedan tap.</li>
          <li data-sr="signal: više odobrenja u sekundi na različitim MCC kodovima." data-en="signal: multiple approvals in a second on different MCC codes.">signal: više odobrenja u sekundi na različitim MCC kodovima.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> prva nelogična stavka na izvodu nakon NFC susreta zahteva blokadu." data-en="<strong>Threshold:</strong> the first illogical statement line after an NFC encounter needs a block."><strong>Prag faze:</strong> prva nelogična stavka na izvodu nakon NFC susreta zahteva blokadu.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 4 — Pokušaj sakrivanja uz mali iznos" data-en="Phase 4 — Hiding with a small amount">Faza 4 — Pokušaj sakrivanja uz mali iznos</h3>
        <p data-sr="Žrtva ne proverava izvod odmah." data-en="The attacker first pulls a small amount that does not alarm, then escalates if limits allow.">Žrtva ne proverava izvod odmah.</p>
        <ul class="bullets">
          <li data-sr="signal: serija malih iznosa u kratkom roku." data-en="signal: series of small amounts in a short window.">signal: serija malih iznosa u kratkom roku.</li>
          <li data-sr="signal: prva stavka ispod tipičnog praga pažnje." data-en="signal: first line below a typical attention threshold.">signal: prva stavka ispod tipičnog praga pažnje.</li>
          <li data-sr="signal: transakcije u noćnim satima." data-en="signal: transactions at night hours.">signal: transakcije u noćnim satima.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> dnevni limit i obaveštenja za svaku transakciju otkrivaju seriju." data-en="<strong>Threshold:</strong> daily caps and per-transaction alerts expose a series."><strong>Prag faze:</strong> dnevni limit i obaveštenja za svaku transakciju otkrivaju seriju.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 5 — Prijava i forenzička evidencija" data-en="Phase 5 — Report and forensic evidence">Faza 5 — Prijava i forenzička evidencija</h3>
        <p data-sr="Vaša prijava sa mestom tap-a pomaže." data-en="The bank uses timestamps, TID/MID, and channel data to tie relay to a device.">Vaša prijava sa mestom tap-a pomaže.</p>
        <ul class="bullets">
          <li data-sr="signal: banka traži tačno vreme notifikacije u novčaniku." data-en="signal: bank asks for exact wallet notification time.">signal: banka traži tačno vreme notifikacije u novčaniku.</li>
          <li data-sr="signal: zahtev za log iz aplikacije novčanika." data-en="signal: request for wallet app logs.">signal: zahtev za log iz aplikacije novčanika.</li>
          <li data-sr="signal: zamena tokena u digitalnom novčaniku." data-en="signal: token replacement in the digital wallet.">signal: zamena tokena u digitalnom novčaniku.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="contactless-card-scam.html" data-sr="Prevara beskontaktnom karticom" data-en="Contactless card scam">Prevara beskontaktnom karticom</a></li>
            <li><a href="card-not-present-fraud.html" data-sr="Zloupotreba kartice bez fizičkog prisustva" data-en="Card-not-present fraud">Zloupotreba kartice bez fizičkog prisustva</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> sačuvajte snimke ekrana obaveštenja o plaćanju odmah." data-en="<strong>Threshold:</strong> save screenshots of payment alerts immediately."><strong>Prag faze:</strong> sačuvajte snimke ekrana obaveštenja o plaćanju odmah.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Hardening: limiti, tokeni, obuke" data-en="Phase 6 — Hardening: limits, tokens, training">Faza 6 — Hardening: limiti, tokeni, obuke</h3>
        <p data-sr="Fizičke kartice drži u RFID zaštiti." data-en="Lower contactless limits, require biometrics before paying, and train family not to tap at booths.">Fizičke kartice drži u RFID zaštiti.</p>
        <ul class="bullets">
          <li data-sr="signal: banka nudi privremeno isključenje beskontakta." data-en="signal: bank offers temporary contactless off.">signal: banka nudi privremeno isključenje beskontakta.</li>
          <li data-sr="signal: novčanik nudi freeze kartice jednim dodirom." data-en="signal: wallet offers one-tap card freeze.">signal: novčanik nudi freeze kartice jednim dodirom.</li>
          <li data-sr="signal: roditelji podešavaju deci obaveštenja za svaku transakciju." data-en="signal: parents set per-transaction alerts for children.">signal: roditelji podešavaju deci obaveštenja za svaku transakciju.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> pravilo tap samo na poznatom POS-u je jednostavnije od procene kompleksnog relaya uživo." data-en="<strong>Threshold:</strong> the rule tap only at a known POS is simpler than judging complex relay live."><strong>Prag faze:</strong> pravilo tap samo na poznatom POS-u je jednostavnije od procene kompleksnog relaya uživo.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Dva uređaja koordinisano oko vašeg tap-a." data-en="Two devices coordinated around your tap.">Dva uređaja koordinisano oko vašeg tap-a.</li>
        <li data-sr="Zahtev za NFC dozvolu u nepoznatoj aplikaciji." data-en="NFC permission request in an unknown app.">Zahtev za NFC dozvolu u nepoznatoj aplikaciji.</li>
        <li data-sr="Sinhronizacija kartice na ulici ili štandu." data-en="Syncing a card on the street or at a booth.">Sinhronizacija kartice na ulici ili štandu.</li>
        <li data-sr="Tap bez prikazanog iznosa u zvaničnoj aplikaciji." data-en="Tap without amount shown in the official app.">Tap bez prikazanog iznosa u zvaničnoj aplikaciji.</li>
        <li data-sr="Transakcija u mestu gde niste bili." data-en="Transaction in a place where you were not.">Transakcija u mestu gde niste bili.</li>
        <li data-sr="Više odobrenja u veoma kratkom intervalu." data-en="Multiple approvals in a very short interval.">Više odobrenja u veoma kratkom intervalu.</li>
        <li data-sr="Tehnička priča bez broja službe banke koji proveravate." data-en="Tech story without a bank service number you verify.">Tehnička priča bez broja službe banke koji proveravate.</li>
        <li data-sr="Prenosni čitač koji nije deo zatvorene kase." data-en="Portable reader not part of a closed checkout.">Prenosni čitač koji nije deo zatvorene kase.</li>
        <li data-sr="Pritisak da ne gledate ekran tokom tap-a." data-en="Pressure not to look at the screen during tap.">Pritisak da ne gledate ekran tokom tap-a.</li>
        <li data-sr="Serija malih iznosa posle jednog susreta." data-en="Series of small amounts after one encounter.">Serija malih iznosa posle jednog susreta.</li>
      </ul>
    </section>

    <section class="content-section">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <ol class="steps">
        <li data-sr="Dozvolite NFC samo aplikacijama banke ili zvaničnog novčanika." data-en="Allow NFC only for bank or official wallet apps.">Dozvolite NFC samo aplikacijama banke ili zvaničnog novčanika.</li>
        <li data-sr="Uvek pročitajte iznos pre biometrije ili potvrde." data-en="Always read the amount before biometrics or confirm.">Uvek pročitajte iznos pre biometrije ili potvrde.</li>
        <li data-sr="Postavite niske limite za beskontakt i tap." data-en="Set low limits for contactless and tap.">Postavite niske limite za beskontakt i tap.</li>
        <li data-sr="Uključite push za svaku transakciju." data-en="Enable push for every transaction.">Uključite push za svaku transakciju.</li>
        <li data-sr="Ne tap-ujte na štandovima za nagradu ili anketu." data-en="Do not tap booths for a prize or survey.">Ne tap-ujte na štandovima za nagradu ili anketu.</li>
        <li data-sr="Koristite RFID zaštitu za fizičke kartice." data-en="Use RFID protection for physical cards.">Koristite RFID zaštitu za fizičke kartice.</li>
        <li data-sr="Proverite izvod istog dana posle gužvi." data-en="Check the statement the same day after crowds.">Proverite izvod istog dana posle gužvi.</li>
        <li data-sr="Zamrzite karticu ili novčanik na prvu sumnju." data-en="Freeze card or wallet on first suspicion.">Zamrzite karticu ili novčanik na prvu sumnju.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
      <ul class="bullets">
        <li data-sr="Da li je tap bio na zvaničnom POS-u prodavca?" data-en="Was the tap on the merchant official POS?">Da li je tap bio na zvaničnom POS-u prodavca?</li>
        <li data-sr="Da li sam video iznos pre potvrde?" data-en="Did I see the amount before confirming?">Da li sam video iznos pre potvrde?</li>
        <li data-sr="Da li sam instalirao aplikaciju koja traži NFC?" data-en="Did I install an app requesting NFC?">Da li sam instalirao aplikaciju koja traži NFC?</li>
        <li data-sr="Da li su limite podešeni konzervativno?" data-en="Are limits set conservatively?">Da li su limite podešeni konzervativno?</li>
        <li data-sr="Da li su obaveštenja uključena?" data-en="Are notifications on?">Da li su obaveštenja uključena?</li>
        <li data-sr="Da li izvod pokazuje lokacije koje ne prepoznajem?" data-en="Does the statement show locations I do not recognize?">Da li izvod pokazuje lokacije koje ne prepoznajem?</li>
        <li data-sr="Da li sam odmah prijavio sumnjive stavke?" data-en="Did I immediately report suspicious lines?">Da li sam odmah prijavio sumnjive stavke?</li>
        <li data-sr="Da li treba rotacija kartice ili tokena?" data-en="Should the card or token be rotated?">Da li treba rotacija kartice ili tokena?</li>
        <li data-sr="Da li deca u porodici znaju pravilo bez tap-a na štandu?" data-en="Do children in the family know the no-tap-at-booth rule?">Da li deca u porodici znaju pravilo bez tap-a na štandu?</li>
        <li data-sr="Da li je digitalni novčanik zaključan biometrijom?" data-en="Is the digital wallet locked with biometrics?">Da li je digitalni novčanik zaključan biometrijom?</li>
        <li data-sr="Da li mogu privremeno da ugasim beskontakt kod banke?" data-en="Can I temporarily disable contactless at the bank?">Da li mogu privremeno da ugasim beskontakt kod banke?</li>
        <li data-sr="Da li čuvam snimke obaveštenja o plaćanjima?" data-en="Do I keep screenshots of payment alerts?">Da li čuvam snimke obaveštenja o plaćanjima?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Udaljite karticu ili telefon od bilo kog čitača odmah." data-en="Move card or phone away from any reader immediately.">Udaljite karticu ili telefon od bilo kog čitača odmah.</li>
        <li data-sr="Zatvorite aplikacije koje traže NFC." data-en="Close apps that request NFC.">Zatvorite aplikacije koje traže NFC.</li>
        <li data-sr="Proverite poslednje transakcije u aplikaciji banke." data-en="Check latest transactions in the bank app.">Proverite poslednje transakcije u aplikaciji banke.</li>
        <li data-sr="Blokirajte ili zamrzite instrument ako postoji sumnja." data-en="Block or freeze the instrument if there is doubt.">Blokirajte ili zamrzite instrument ako postoji sumnja.</li>
        <li data-sr="Prijavite incident sa vremenom i opisom uređaja." data-en="Report the incident with time and device description.">Prijavite incident sa vremenom i opisom uređaja.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si tap-ovao na uređaj koji nije kasa?" data-en="Did you tap a device that was not a checkout?">Da li si tap-ovao na uređaj koji nije kasa?</li>
            <li data-sr="Da li si instalirao aplikaciju sa NFC dozvolom?" data-en="Did you install an app with NFC permission?">Da li si instalirao aplikaciju sa NFC dozvolom?</li>
            <li data-sr="Da li transakcije pokazuju čudne lokacije?" data-en="Do transactions show odd locations?">Da li transakcije pokazuju čudne lokacije?</li>
            <li data-sr="Da li si odmah zamrznuo karticu ili novčanik?" data-en="Did you freeze the card or wallet immediately?">Da li si odmah zamrznuo karticu ili novčanik?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="NFC koristim samo u zvaničnoj aplikaciji banke ili novčanika." data-en="I use NFC only in the official bank or wallet app.">NFC koristim samo u zvaničnoj aplikaciji banke ili novčanika.</li>
            <li data-sr="Ne tap-ujem na uređaje koji nisu deo ove kase." data-en="I do not tap devices that are not part of this checkout.">Ne tap-ujem na uređaje koji nisu deo ove kase.</li>
            <li data-sr="Bez prikazanog iznosa ne potvrđujem biometrijom." data-en="Without a shown amount I do not confirm with biometrics.">Bez prikazanog iznosa ne potvrđujem biometrijom.</li>
            <li data-sr="Ako me žurite, prekidam — bezbednost je važnija." data-en="If you rush me, I stop — safety comes first.">Ako me žurite, prekidam — bezbednost je važnija.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
