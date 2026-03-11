window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["card-skimming"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi skimovanje kartice" data-en="Introduction: how card skimming works">Uvod: kako radi skimovanje kartice</h2>
      <p data-sr="Skimovanje kartice je prikupljanje podataka s magnetne traže ili čipa kartice pomoću uređaja koji se postavljaju na čitače kartica — bankomatima, POS terminalima, benzinskim pumpama ili hotelskim recepcijama. Prikupljeni podaci se koriste za izrada klonova kartice ili za CNP kupovine." data-en="Card skimming is the collection of data from a card's magnetic stripe or chip using devices installed on card readers — at ATMs, POS terminals, petrol stations, or hotel receptions. Collected data is used to create cloned cards or for CNP purchases.">Skimmer prikuplja podatke magnetne traže s kartice. Klon se koristi za podizanje gotovine ili CNP kupovine.</p>
      <p data-sr="Fizički skimeri su mali uređaji koji se postavljaju iznad originalnog čitača — vizualno im nalikuju ali su nešto veći ili imaju drugačiju boju. Skimovani podaci se prenose bežično ili se fizički prikupljaju. Bez PIN-a se može izraditi klon za CNP kupovine — uz PIN se može i podizati gotovina na bankomatu." data-en="Physical skimmers are small devices placed over the original reader — they visually resemble it but are slightly larger or a different color. Skimmed data is transmitted wirelessly or physically collected. Without a PIN a clone can be made for CNP purchases — with a PIN cash can also be withdrawn at an ATM.">Skimer se vizualno uklapa na terminal ali je nešto veći ili drugačije boje. Uz PIN — podizanje gotovine. Bez PIN — CNP kupovine.</p>
      <div class="callout" data-sr="<strong>Model:</strong> skimmer na čitaču → kartica ubačena ili prevučena → podaci magnetne traže prikupljeni → klon kartice ili CNP zloupotreba → gubitak." data-en="<strong>Model:</strong> skimmer on reader → card inserted or swiped → magnetic stripe data collected → card clone or CNP misuse → loss."><strong>Model:</strong> skimmer na čitaču → kartica ubačena ili prevučena → podaci magnetne traže prikupljeni → klon kartice ili CNP zloupotreba → gubitak.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> svaki neuobičajeni dodatak na čitaču kartice — labav plastični deo, nestandardna boja, skrivena kamera — je alarm za ne korišćenje terminala." data-en="<strong>Threshold:</strong> any unusual addition on a card reader — a loose plastic part, non-standard color, hidden camera — is an alarm not to use the terminal."><strong>Prag:</strong> svaki neuobičajeni dodatak na čitaču kartice — labav plastični deo, nestandardna boja, skrivena kamera — je alarm za ne korišćenje terminala.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika skimminga" data-en="How it works: skimming mechanics">Kako generalno radi: mehanika skimminga</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Postavljanje skimera" data-en="Installing the skimmer">Postavljanje skimera</div>
          <ul class="bullets">
            <li data-sr="skimer se postavlja iznad ili u utor za karticu i prenosi podatke bežično ili kriptuje za kasniju fizičku kolekciju." data-en="the skimmer is placed over or into the card slot and transmits data wirelessly or encrypts for later physical collection.">skimer se postavlja iznad ili u utor za karticu i prenosi podatke bežično ili kriptuje za kasniju fizičku kolekciju.</li>
            <li data-sr="kamera se skriva u lažnom kućištu blizu terminala i snima unos PIN-a." data-en="a camera is hidden in a fake housing near the terminal and records PIN entry.">kamera se skriva u lažnom kućištu blizu terminala i snima unos PIN-a.</li>
            <li data-sr="skimer na benzinskoj pumpi ostaje neprimetno danima jer pumpa nije pod stalnim nadzorom." data-en="a skimmer at a petrol station goes unnoticed for days because the pump is not under constant surveillance.">skimer na benzinskoj pumpi ostaje neprimetno danima jer pumpa nije pod stalnim nadzorom.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Upotreba prikupljenih podataka" data-en="Using collected data">Upotreba prikupljenih podataka</div>
          <ul class="bullets">
            <li data-sr="klon kartice s magnetnom trakom se izrađuje i koristi na bankomatima koji još podržavaju magnetnu traku." data-en="a card clone with a magnetic stripe is made and used at ATMs that still support magnetic stripe.">klon kartice s magnetnom trakom se izrađuje i koristi na bankomatima koji još podržavaju magnetnu traku.</li>
            <li data-sr="podaci bez PIN-a se prodaju za CNP upotrebu na platformama za krađu podataka." data-en="data without PIN is sold for CNP use on data theft platforms.">podaci bez PIN-a se prodaju za CNP upotrebu na platformama za krađu podataka.</li>
            <li data-sr="podaci se tipično prodaju ili koriste odmah — u roku od dana od krađe." data-en="data is typically sold or used immediately — within days of theft.">podaci se tipično prodaju ili koriste odmah — u roku od dana od krađe.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)." data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Postavljanje skimera na uređaj" data-en="Phase 1 — Installing skimmer on device">Faza 1 — Postavljanje skimera na uređaj</h3>
        <p data-sr="Napadač montira skimer na čitač kartice terminala ili bankomata. Montaža traže sekunde. Skimer ostaje aktivan dok ga napadač ne ukloni ili dok ga ne otkrije osoblje ili žrtva." data-en="The attacker mounts the skimmer on the card reader of a terminal or ATM. Mounting takes seconds. The skimmer remains active until the attacker removes it or it is discovered by staff or a victim.">Montaža skimera traže sekunde. Ostaje aktivan satima ili danima.</p>
        <ul class="bullets">
          <li data-sr="signal: čitač kartice izgleda labavo ili je nešto širi od standarda — pokušaj da se pomeri pre upotrebe." data-en="signal: the card reader looks loose or is slightly wider than standard — try moving it before use.">signal: čitač kartice izgleda labavo ili je nešto širi od standarda — pokušaj da se pomeri pre upotrebe.</li>
          <li data-sr="signal: kućište ili holder pored uređaja koji nije uobičajeno prisutan može biti kamera." data-en="signal: a casing or holder near the device that is not usually present may be a camera.">signal: kućište ili holder pored uređaja koji nije uobičajeno prisutan može biti kamera.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> skimer je aktivan i prikuplja podatke svake kartice koja prođe kroz čitač." data-en="<strong>Threshold:</strong> the skimmer is active and collects data from every card that passes through the reader."><strong>Prag faze:</strong> skimer je aktivan i prikuplja podatke svake kartice koja prođe kroz čitač.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Prikupljanje i iskorišćavanje podataka" data-en="Phase 2 — Data collection and exploitation">Faza 2 — Prikupljanje i iskorišćavanje podataka</h3>
        <p data-sr="Napadač prikuplja skimovane podatke — bežično ili fizičkim preuzimanjem uređaja. Izrađuje klonove ili prodaje podatke. Žrtva otkriva problem na izvodu ili bankovnim obaveštenjem." data-en="The attacker collects skimmed data — wirelessly or by physically retrieving the device. Creates clones or sells the data. The victim discovers the problem on a statement or bank notification.">Podaci se prikupe, kloniraju ili prodaju. Žrtva otkrije na izvodu ili SMS obaveštenjem.</p>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="atm-skimming.html" data-sr="Skimovanje na bankomatu" data-en="ATM skimming">Skimovanje na bankomatu</a></li>
            <li><a href="pos-skimming.html" data-sr="Skimovanje na POS terminalu" data-en="POS skimming">Skimovanje na POS terminalu</a></li>
            <li><a href="card-not-present-fraud.html" data-sr="Zloupotreba kartice bez fizičkog prisustva" data-en="Card-not-present fraud">Zloupotreba kartice bez fizičkog prisustva</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> blokada kartice i zahtev za novom karticom je jedina preostala zaštita po otkrivanju." data-en="<strong>Threshold:</strong> card blocking and requesting a new card is the only remaining protection after discovery."><strong>Prag faze:</strong> blokada kartice i zahtev za novom karticom je jedina preostala zaštita po otkrivanju.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="čitač kartice je labav, nešto širi ili vizualno drugačiji od standarda terminala." data-en="the card reader is loose, slightly wider, or visually different from the terminal standard.">čitač kartice je labav, nešto širi ili vizualno drugačiji od standarda terminala.</li>
        <li data-sr="kućište ili holder pored terminala koji nije standardni deo opreme — može biti kamera." data-en="a casing or holder near the terminal that is not standard equipment — may be a camera.">kućište ili holder pored terminala koji nije standardni deo opreme — može biti kamera.</li>
        <li data-sr="nepoznate transakcije na kartičnom izvodu, posebno u stranim gradovima ili na online sajtovima." data-en="unknown transactions on the card statement, particularly in foreign cities or on online sites.">nepoznate transakcije na kartičnom izvodu, posebno u stranim gradovima ili na online sajtovima.</li>
        <li data-sr="terminal koji nije u zaštićenom prostoru ili pod stalnim video nadzorom." data-en="terminal not in a secured area or under constant video surveillance.">terminal koji nije u zaštićenom prostoru ili pod stalnim video nadzorom.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 8 preventivnih provera" data-en="Checklist: 8 preventive checks">Checklista: 8 preventivnih provera</h2>
      <ul class="bullets">
        <li data-sr="Da li sam vizualno pregledao/la čitač kartice na terminal i pomero/la ga da proverim labavost pre upotrebe?" data-en="Did I visually inspect the card reader on the terminal and wiggle it to check for looseness before use?">Da li sam vizualno pregledao/la čitač kartice na terminal i pomero/la ga da proverim labavost pre upotrebe?</li>
        <li data-sr="Da li sam pokrio/la ruku pri unosu PIN-a da blokiram eventualnu kameru?" data-en="Did I cover my hand while entering the PIN to block any potential camera?">Da li sam pokrio/la ruku pri unosu PIN-a da blokiram eventualnu kameru?</li>
        <li data-sr="Da li su aktivna push obaveštenja za svaku kartičnu transakciju?" data-en="Are push notifications active for every card transaction?">Da li su aktivna push obaveštenja za svaku kartičnu transakciju?</li>
        <li data-sr="Da li redovno proveravam kartični izvod za nepoznate transakcije?" data-en="Do I regularly check the card statement for unknown transactions?">Da li redovno proveravam kartični izvod za nepoznate transakcije?</li>
        <li data-sr="Da li preferencijalno koristim bezkontaktno plaćanje umesto prevlačenja kartice?" data-en="Do I preferentially use contactless payment instead of swiping the card?">Da li preferencijalno koristim bezkontaktno plaćanje umesto prevlačenja kartice?</li>
        <li data-sr="Da li koristim Apple Pay, Google Pay ili sličan virtualni novčanik koji ne izlaže fizičke podatke kartice?" data-en="Do I use Apple Pay, Google Pay, or similar virtual wallet that does not expose physical card data?">Da li koristim Apple Pay, Google Pay ili sličan virtualni novčanik koji ne izlaže fizičke podatke kartice?</li>
        <li data-sr="Da li sam prijavilo banci nepoznatu transakciju odmah i pokrenulo chargeback proceduru?" data-en="Did I report to the bank any unknown transaction immediately and initiate the chargeback procedure?">Da li sam prijavilo banci nepoznatu transakciju odmah i pokrenulo chargeback proceduru?</li>
        <li data-sr="Da li sam tražio/la novu karticu po sumnji na kompromitovanje podataka?" data-en="Did I request a new card upon suspicion that data was compromised?">Da li sam tražio/la novu karticu po sumnji na kompromitovanje podataka?</li>
      </ul>
    </section>

    
    <!-- PROVERE -->
    <section class="content-section">
      <h2 data-sr="Provere: 8 brzih provera za zastitu od skimminga" data-en="Checks: 8 quick checks against card skimming">Provere: 8 brzih provera za zastitu od skimminga</h2>
      <ol class="steps">
        <li data-sr="Pregledaj bankomat ili POS terminal pre koristenja — da li postoje sumnjivi dodaci?" data-en="Inspect the ATM or POS terminal before use — are there any suspicious attachments?">Pregledaj bankomat ili POS terminal pre koristenja — da li postoje sumnjivi dodaci?</li>
        <li data-sr="Uvek pokrij PIN tastaturu rukom dok unosish PIN broj." data-en="Always cover the PIN keypad with your hand while entering your PIN.">Uvek pokrij PIN tastaturu rukom dok unosish PIN broj.</li>
        <li data-sr="Koristi Apple Pay, Google Pay ili NFC placanje umesto fizicke kartice gde je moguce." data-en="Use Apple Pay, Google Pay, or NFC payment instead of a physical card where possible.">Koristi Apple Pay, Google Pay ili NFC placanje umesto fizicke kartice gde je moguce.</li>
        <li data-sr="Ukljuci SMS ili push notifikacije za svaku transakciju." data-en="Enable SMS or push notifications for every transaction.">Ukljuci SMS ili push notifikacije za svaku transakciju.</li>
        <li data-sr="Redovno proveravaj izvod bankovnog racuna za nepoznate transakcije." data-en="Regularly check your bank statement for unknown transactions.">Redovno proveravaj izvod bankovnog racuna za nepoznate transakcije.</li>
        <li data-sr="Postavi dnevni limit povlacenja na bankovnom racunu." data-en="Set a daily withdrawal limit on your bank account.">Postavi dnevni limit povlacenja na bankovnom racunu.</li>
        <li data-sr="Prijavi bankovnom automatu koji izgledaju osteceno ili imaju sumnjive delove odmah zaposlenima." data-en="Report ATMs that look damaged or have suspicious parts immediately to staff.">Prijavi bankovnom automatu koji izgledaju osteceno ili imaju sumnjive delove odmah zaposlenima.</li>
        <li data-sr="Ako primetish neovlascene transakcije, odmah blokiraj karticu kroz aplikaciju banke." data-en="If you notice unauthorized transactions, immediately block your card through the bank app.">Ako primetish neovlascene transakcije, odmah blokiraj karticu kroz aplikaciju banke.</li>
      </ol>
    </section>
<section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="blokirajte karticu odmah putem bankovne aplikacije ili pozivom banci." data-en="block the card immediately via the banking app or by calling the bank.">blokirajte karticu odmah putem bankovne aplikacije ili pozivom banci.</li>
        <li data-sr="prijavite neovlašćene transakcije banci i pokrenite chargeback proceduru." data-en="report unauthorized transactions to the bank and initiate the chargeback procedure.">prijavite neovlašćene transakcije banci i pokrenite chargeback proceduru.</li>
        <li data-sr="prijavite lokaciju terminala sa sumnjivim čitačem banci i policiji." data-en="report the terminal location with the suspicious reader to the bank and police.">prijavite lokaciju terminala sa sumnjivim čitačem banci i policiji.</li>
        <li data-sr="zatražite novu karticu s novim brojem — kompromitovani podaci ostaju aktivni dok je kartica aktivna." data-en="request a new card with a new number — compromised data remains active while the card is active.">zatražite novu karticu s novim brojem — kompromitovani podaci ostaju aktivni dok je kartica aktivna.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li postoje nepoznate transakcije na izvodu posle korišćenja terminala na benzinskoj pumpi ili bankomatu?" data-en="Are there unknown transactions on the statement after using a terminal at a petrol station or ATM?">Da li postoje nepoznate transakcije na izvodu posle korišćenja terminala na benzinskoj pumpi ili bankomatu?</li>
            <li data-sr="Da li si proverio/la da li je čitač kartice labav pre nego si karticu ubacio/la?" data-en="Did you check whether the card reader was loose before inserting the card?">Da li si proverio/la da li je čitač kartice labav pre nego si karticu ubacio/la?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Uvek proveri labavost čitača kartice i pokrij ruku pri unosu PIN-a — to su dve sekunde koje sprečavaju skimming." data-en="Always check the card reader for looseness and cover your hand when entering the PIN — those two seconds prevent skimming.">Uvek proveri labavost čitača kartice i pokrij ruku pri unosu PIN-a — to su dve sekunde koje sprečavaju skimming.</li>
            <li data-sr="Apple Pay ili Google Pay ne izlažu fizičke podatke kartice terminalu — to je bolja alternativa prevlačenju." data-en="Apple Pay or Google Pay do not expose physical card data to the terminal — that is a better alternative to swiping.">Apple Pay ili Google Pay ne izlažu fizičke podatke kartice terminalu — to je bolja alternativa prevlačenju.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card sources" id="sources">
      <h2 data-sr="Povezane prevare" data-en="Related scams">Povezane prevare</h2>
      <ul class="bullets">
        <li><a href="atm-skimming.html" data-sr="Skimovanje na bankomatu" data-en="ATM skimming">Skimovanje na bankomatu</a></li>
        <li><a href="pos-skimming.html" data-sr="Skimovanje na POS terminalu" data-en="POS skimming">Skimovanje na POS terminalu</a></li>
        <li><a href="contactless-card-scam.html" data-sr="Prevara beskontaktnom karticom" data-en="Contactless card scam">Prevara beskontaktnom karticom</a></li>
        <li><a href="card-not-present-fraud.html" data-sr="Zloupotreba kartice bez fizičkog prisustva" data-en="Card-not-present fraud">Zloupotreba kartice bez fizičkog prisustva</a></li>
      </ul>
    </section>
  `
};
