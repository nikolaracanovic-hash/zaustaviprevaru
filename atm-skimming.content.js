window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["atm-skimming"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi ATM skimming" data-en="Introduction: how ATM skimming works">Uvod: kako radi ATM skimming</h2>
      <p data-sr="ATM skimming je specijalizovana forma skimminga gde napadač instalira uređaje direktno na bankomat: skimer na utor za karticu koji prikuplja podatke magnetne traže i kameru ili PIN overlay koji snima ili prikuplja PIN. Sa oba podatka napadač izrađuje klon kartice koji se koristi za podizanje gotovine na bankomatima koji podržavaju magnetnu traku." data-en="ATM skimming is a specialized form of skimming where an attacker installs devices directly on an ATM: a skimmer on the card slot that collects magnetic stripe data and a camera or PIN overlay that records or captures the PIN. With both pieces of data the attacker creates a card clone used for cash withdrawal at ATMs supporting magnetic stripe.">ATM skimming prikuplja podatke kartice i PIN — dovoljno za kloniranje i podizanje gotovine.</p>
      <p data-sr="Moderni bankomati s EMV čipom su otporniji na kloniranje — ali u zemljama gde još postoje bankomati koji prihvataju samo magnetnu traku, klon može biti uspešno korišćen. U nekim slučajevima napadači koriste skimovane podatke za CNP kupovine bez potrebe za kloniranjem fizičke kartice." data-en="Modern ATMs with EMV chip are more resistant to cloning — but in countries where ATMs still accepting only magnetic stripe exist, the clone can be successfully used. In some cases attackers use skimmed data for CNP purchases without needing to clone a physical card.">EMV čip otežava kloniranje ali magnetna traka i CNP upotreba ostaju ranjivosti.</p>
      <div class="callout" data-sr="<strong>Model:</strong> skimer na uroru za karticu + kamera ili PIN overlay → kartica ubačena + PIN pritisnut → podaci i PIN prikupljeni → klon kartice → podizanje gotovine." data-en="<strong>Model:</strong> skimmer on card slot + camera or PIN overlay → card inserted + PIN entered → card data and PIN collected → cloned card → cash withdrawal."><strong>Model:</strong> skimer na uroru za karticu + kamera ili PIN overlay → kartica ubačena + PIN pritisnut → podaci i PIN prikupljeni → klon kartice → podizanje gotovine.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> kamera ili overlay koji pokriva PIN tasteru bankomata su najlakše uočljivi — uvek pokrivajte ruku pri unosu PIN-a." data-en="<strong>Threshold:</strong> a camera or overlay covering the ATM PIN pad are the easiest to spot — always cover your hand when entering the PIN."><strong>Prag:</strong> kamera ili overlay koji pokriva PIN tasteru bankomata su najlakše uočljivi — uvek pokrivajte ruku pri unosu PIN-a.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika ATM skimminga" data-en="How it works: ATM skimming mechanics">Kako generalno radi: mehanika ATM skimminga</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Komponente ATM skimming napada" data-en="ATM skimming attack components">Komponente ATM skimming napada</div>
          <ul class="bullets">
            <li data-sr="čitač kartice (skimer) koji se montira iznad originalnog utora i prikuplja podatke magnetne traže." data-en="card reader (skimmer) mounted over the original slot that collects magnetic stripe data.">čitač kartice (skimer) koji se montira iznad originalnog utora i prikuplja podatke magnetne traže.</li>
            <li data-sr="kamera montirana diskretno u kućištu iznad tastature koja snima unos PIN-a." data-en="camera discretely mounted in a housing above the keypad that records PIN entry.">kamera montirana diskretno u kućištu iznad tastature koja snima unos PIN-a.</li>
            <li data-sr="PIN overlay — lažna tastatura postavljena iznad originalne koja bilježi pritiske tipki." data-en="PIN overlay — a fake keypad placed over the original that records key presses.">PIN overlay — lažna tastatura postavljena iznad originalne koja bilježi pritiske tipki.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Lokacije i rizici" data-en="Locations and risks">Lokacije i rizici</div>
          <ul class="bullets">
            <li data-sr="bankomati na izolovanim lokacijama bez video nadzora — parkirišta, manje pošte, benzinske pumpe — su visokorizični." data-en="ATMs at isolated locations without video surveillance — car parks, small post offices, petrol stations — are high risk.">bankomati na izolovanim lokacijama bez video nadzora — parkirišta, manje pošte, benzinske pumpe — su visokorizični.</li>
            <li data-sr="skimeri tipično ostaju na bankomatima nekoliko sati do jedan dan pre nego su prikupljeni ili otkriveni." data-en="skimmers typically remain on ATMs for a few hours to one day before being collected or discovered.">skimeri tipično ostaju na bankomatima nekoliko sati do jedan dan pre nego su prikupljeni ili otkriveni.</li>
            <li data-sr="bankomati unutar bankovnih filijala su manje rizični jer su pod nadzorom i češće se proveravaju." data-en="ATMs inside bank branches are less risky because they are monitored and more frequently checked.">bankomati unutar bankovnih filijala su manje rizični jer su pod nadzorom i češće se proveravaju.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)." data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Montaža skimera na bankomat" data-en="Phase 1 — Mounting skimmer on ATM">Faza 1 — Montaža skimera na bankomat</h3>
        <p data-sr="Napadač montira skimer na utor za karticu i kameru ili PIN overlay na kućište bankomata. Montaža traže sekunde. Napadač odlazi i čeka dok korisnici koriste bankomat." data-en="The attacker mounts the skimmer on the card slot and camera or PIN overlay on the ATM housing. Mounting takes seconds. The attacker leaves and waits while users use the ATM.">Montaža traže sekunde. Napadač odlazi i prikuplja podatke bežično ili fizičkim preuzimanjem uređaja.</p>
        <ul class="bullets">
          <li data-sr="signal: utor za karticu je širi ili labaviji od standarda — pokušaj da se pomeri pre upotrebe." data-en="signal: the card slot is wider or looser than standard — try moving it before use.">signal: utor za karticu je širi ili labaviji od standarda — pokušaj da se pomeri pre upotrebe.</li>
          <li data-sr="signal: kućište iznad tastature ima strani plastični deo koji nije standardan za ovaj model bankomata." data-en="signal: the housing above the keypad has a foreign plastic part that is not standard for this ATM model.">signal: kućište iznad tastature ima strani plastični deo koji nije standardan za ovaj model bankomata.</li>
          <li data-sr="signal: tastatura deluje nešto viša od normalne ili ima drugačiji otpor pri pritisku." data-en="signal: the keypad feels slightly higher than normal or has different resistance when pressed.">signal: tastatura deluje nešto viša od normalne ili ima drugačiji otpor pri pritisku.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> svaki korisnik koji ubaci karticu i unese PIN daje napadaču sve potrebne podatke za klon." data-en="<strong>Threshold:</strong> every user who inserts a card and enters a PIN gives the attacker all the necessary data for a clone."><strong>Prag faze:</strong> svaki korisnik koji ubaci karticu i unese PIN daje napadaču sve potrebne podatke za klon.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Izrada klona i podizanje gotovine" data-en="Phase 2 — Creating clone and withdrawing cash">Faza 2 — Izrada klona i podizanje gotovine</h3>
        <p data-sr="Napadač prikuplja podatke, izrađuje klon kartice i podiže gotovinu na bankomatima koji podržavaju magnetnu traku — tipično u drugom gradu ili drugoj zemlji da bi odložio otkrivanje." data-en="The attacker collects data, creates a card clone, and withdraws cash at ATMs supporting magnetic stripe — typically in another city or country to delay discovery.">Klon koristi magnetnu traku i PIN za podizanje gotovine. Napadi se izvode u drugom gradu radi kašnjenja otkrivanja.</p>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="card-not-present-fraud.html" data-sr="Zloupotreba kartice bez fizičkog prisustva" data-en="Card-not-present fraud">Zloupotreba kartice bez fizičkog prisustva</a></li>
            <li><a href="pos-skimming.html" data-sr="Skimovanje na POS terminalu" data-en="POS skimming">Skimovanje na POS terminalu</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> po otkrivanju neovlašćene transakcije, blokada kartice i prijava banci moraju biti prve akcije." data-en="<strong>Threshold:</strong> upon discovering an unauthorized transaction, card blocking and reporting to the bank must be the first actions."><strong>Prag faze:</strong> po otkrivanju neovlašćene transakcije, blokada kartice i prijava banci moraju biti prve akcije.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="utor za karticu je labav, širi od standarda ili vizualno drugačiji od modela bankomata." data-en="the card slot is loose, wider than standard, or visually different from the ATM model.">utor za karticu je labav, širi od standarda ili vizualno drugačiji od modela bankomata.</li>
        <li data-sr="kućište iznad PIN tastature ima strani plastični deo koji nije uobičajen za ovaj bankomat." data-en="the housing above the PIN pad has a foreign plastic part not usual for this ATM.">kućište iznad PIN tastature ima strani plastični deo koji nije uobičajen za ovaj bankomat.</li>
        <li data-sr="PIN tastatura je nešto viša od normalne ili reaguje drugačije na pritisak." data-en="the PIN pad is slightly higher than normal or responds differently to pressure.">PIN tastatura je nešto viša od normalne ili reaguje drugačije na pritisak.</li>
        <li data-sr="bankomat je na izolovanoj lokaciji bez vidljivog video nadzora." data-en="the ATM is at an isolated location without visible video surveillance.">bankomat je na izolovanoj lokaciji bez vidljivog video nadzora.</li>
        <li data-sr="nepoznate transakcije s gotovinom na kartičnom izvodu — posebno u drugom gradu ili zemlji." data-en="unknown cash transactions on the card statement — particularly in another city or country.">nepoznate transakcije s gotovinom na kartičnom izvodu — posebno u drugom gradu ili zemlji.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 10 preventivnih provera pre i posle korišćenja bankomata" data-en="Checklist: 10 preventive checks before and after using an ATM">Checklista: 10 preventivnih provera pre i posle korišćenja bankomata</h2>
      <ul class="bullets">
        <li data-sr="Da li sam vizualno pregledao/la utor za karticu i pokušao/la da ga pokrenem pre ubacivanja kartice?" data-en="Did I visually inspect the card slot and tried to more it before inserting the card?">Da li sam vizualno pregledao/la utor za karticu i pokušao/la da ga pokrenem pre ubacivanja kartice?</li>
        <li data-sr="Da li sam pregledao/la kućište oko PIN tastature za strani plastični deo ili kameru?" data-en="Did I inspect the housing around the PIN pad for a foreign plastic part or camera?">Da li sam pregledao/la kućište oko PIN tastature za strani plastični deo ili kameru?</li>
        <li data-sr="Da li sam pokrio/la ruku celom šakom pri unosu PIN-a da blokiram eventualnu kameru?" data-en="Did I cover my hand completely when entering the PIN to block any potential camera?">Da li sam pokrio/la ruku celom šakom pri unosu PIN-a da blokiram eventualnu kameru?</li>
        <li data-sr="Da li je bankomat unutar bankarske filijale ili na izolovanoj lokaciji bez nadzora?" data-en="Is the ATM inside a bank branch or at an isolated location without surveillance?">Da li je bankomat unutar bankarske filijale ili na izolovanoj lokaciji bez nadzora?</li>
        <li data-sr="Da li su aktivna push ili SMS obaveštenja za svaku kartičnu transakciju?" data-en="Are push or SMS notifications active for every card transaction?">Da li su aktivna push ili SMS obaveštenja za svaku kartičnu transakciju?</li>
        <li data-sr="Da li koristim mobilno bankarstvo za transakcije umesto kartice kad god je moguće?" data-en="Do I use mobile banking for transactions instead of a card whenever possible?">Da li koristim mobilno bankarstvo za transakcije umesto kartice kad god je moguće?</li>
        <li data-sr="Da li sam proverio/la kartični izvod u roku od 24h od korišćenja bankomata na nepoznatoj lokaciji?" data-en="Did I check the card statement within 24h of using an ATM at an unknown location?">Da li sam proverio/la kartični izvod u roku od 24h od korišćenja bankomata na nepoznatoj lokaciji?</li>
        <li data-sr="Da li sam prijavio/la sumnjivi bankomat banci ili instituciji koja ga održava?" data-en="Did I report the suspicious ATM to the bank or the institution that maintains it?">Da li sam prijavio/la sumnjivi bankomat banci ili instituciji koja ga održava?</li>
        <li data-sr="Da li sam odmah blokirao/la karticu po pojavi neovlašćene transakcije?" data-en="Did I immediately block the card upon the appearance of an unauthorized transaction?">Da li sam odmah blokirao/la karticu po pojavi neovlašćene transakcije?</li>
        <li data-sr="Da li sam zatražio/la novu karticu s novim brojem po potvrdi kompromitovanja?" data-en="Did I request a new card with a new number upon confirmed compromise?">Da li sam zatražio/la novu karticu s novim brojem po potvrdi kompromitovanja?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="ako uočite sumnjivi bankomat, ne koristite ga i prijavite banci ili osoblju." data-en="if you notice a suspicious ATM, do not use it and report it to the bank or staff.">ako uočite sumnjivi bankomat, ne koristite ga i prijavite banci ili osoblju.</li>
        <li data-sr="po pojavi neovlašćene transakcije, odmah blokirajte karticu putem aplikacije." data-en="upon an unauthorized transaction appearing, immediately block the card via the app.">po pojavi neovlašćene transakcije, odmah blokirajte karticu putem aplikacije.</li>
        <li data-sr="prijavite incident banci s opisom bankomata i datuma korišćenja." data-en="report the incident to the bank with a description of the ATM and date of use.">prijavite incident banci s opisom bankomata i datuma korišćenja.</li>
        <li data-sr="zatražite novu karticu s novim brojem i pokrenite chargeback za neovlašćene transakcije." data-en="request a new card with a new number and initiate chargeback for unauthorized transactions.">zatražite novu karticu s novim brojem i pokrenite chargeback za neovlašćene transakcije.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si proverio/la da li je čitač kartice labav pre ubacivanja?" data-en="Did you check whether the card reader was loose before inserting?">Da li si proverio/la da li je čitač kartice labav pre ubacivanja?</li>
            <li data-sr="Da li si pokrio/la ruku pri unosu PIN-a na bankomatu?" data-en="Did you cover your hand when entering the PIN at the ATM?">Da li si pokrio/la ruku pri unosu PIN-a na bankomatu?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Uvek pokreni čitač kartice bankomata i pokrij ruku pri unosu PIN-a — to je 10 sekundi koje sprečavaju klon." data-en="Always wiggle the ATM card reader and cover your hand when entering the PIN — that is 10 seconds that prevents cloning.">Uvek pokreni čitač kartice bankomata i pokrij ruku pri unosu PIN-a — to je 10 sekundi koje sprečavaju klon.</li>
            <li data-sr="Bankomati unutar bankarske filijale su značajno bezbedniji od onih u prolazima, kafićima ili benzinskim pumpama." data-en="ATMs inside bank branches are significantly safer than those in passages, cafes, or petrol stations.">Bankomati unutar bankarske filijale su značajno bezbedniji od onih u prolazima, kafićima ili benzinskim pumpama.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card sources" id="sources">
      <h2 data-sr="Povezane prevare" data-en="Related scams">Povezane prevare</h2>
      <ul class="bullets">
        <li><a href="card-skimming.html" data-sr="Skimovanje kartice (opšte)" data-en="Card skimming">Skimovanje kartice (opšte)</a></li>
        <li><a href="pos-skimming.html" data-sr="Skimovanje na POS terminalu" data-en="POS skimming">Skimovanje na POS terminalu</a></li>
        <li><a href="contactless-card-scam.html" data-sr="Prevara beskontaktnom karticom" data-en="Contactless card scam">Prevara beskontaktnom karticom</a></li>
        <li><a href="card-not-present-fraud.html" data-sr="Zloupotreba kartice bez fizičkog prisustva" data-en="Card-not-present fraud">Zloupotreba kartice bez fizičkog prisustva</a></li>
      </ul>
    </section>
  `
};
