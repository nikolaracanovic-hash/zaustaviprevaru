window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["contactless-card-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi prevara beskontaktnom karticom" data-en="Introduction: how contactless card scam works">Uvod: kako radi prevara beskontaktnom karticom</h2>
      <p data-sr="Beskontaktna kartica emituje NFC signal koji može biti pročitan na daljini do 10 centimetara bez fizičkog kontakta. Napadač s prenosnim NFC čitačem može u gužvi, javnom prevozu ili na prometnom mestu inicirati transakciju malog iznosa postavljanjem uređaja pored novčanika ili torbice u kojoj se nalazi kartica." data-en="A contactless card emits an NFC signal that can be read at a range of up to 10 centimeters without physical contact. An attacker with a portable NFC reader can, in a crowd, public transport, or busy location, initiate a low-value transaction by placing the device near a wallet or bag containing the card.">Beskontaktna kartica može biti pročitana do 10 cm. Napadač u gužvi inicira transakciju malih iznosa postavljanjem NFC čitača pored novčanika.</p>
      <p data-sr="Praktična izvodivost ovog napada je ograničena — moderne kartice imaju granice za beskontaktne transakcije bez PIN-a, a novčanici s više kartica mogu izazvati konflikte u komunikaciji. Ali digitalna krađa podataka za CNP upotrebu je realističnija varijanta od direktnih beskontaktnih transakcija." data-en="The practical feasibility of this attack is limited — modern cards have limits for contactless transactions without a PIN, and wallets with multiple cards can cause communication conflicts. But digital data theft for CNP use is a more realistic variant than direct contactless transactions.">Direktne NFC transakcije su ograničene iznosom i zahtevima za PIN. Krađa podataka za CNP je realističnija varijanta.</p>
      <div class="callout" data-sr="<strong>Model:</strong> NFC čitač pored novčanika → skeniranje kartice → direktna transakcija malog iznosa ili prikupljanje podataka za CNP upotrebu." data-en="<strong>Model:</strong> NFC reader near wallet → card scanned → direct low-value transaction or data collection for CNP use."><strong>Model:</strong> NFC čitač pored novčanika → skeniranje kartice → direktna transakcija malog iznosa ili prikupljanje podataka za CNP upotrebu.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> beskontaktna kartica može biti pročitana na daljinu do 10 cm bez fizičkog kontakta — zaštitna folija ili metal novčanik blokiraju signal." data-en="<strong>Threshold:</strong> a contactless card can be read at a range of up to 10 cm without physical contact — protective foil or a metal wallet blocks the signal."><strong>Prag:</strong> beskontaktna kartica može biti pročitana na daljinu do 10 cm bez fizičkog kontakta — zaštitna folija ili metal novčanik blokiraju signal.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika NFC prevare" data-en="How it works: NFC fraud mechanics">Kako generalno radi: mehanika NFC prevare</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Direktna NFC transakcija" data-en="Direct NFC transaction">Direktna NFC transakcija</div>
          <ul class="bullets">
            <li data-sr="napadač s prenosnim NFC čitačem inicira transakciju bez PIN-a do zakonskog limita." data-en="attacker with a portable NFC reader initiates a transaction without a PIN up to the legal limit.">napadač s prenosnim NFC čitačem inicira transakciju bez PIN-a do zakonskog limita.</li>
            <li data-sr="transakcija se pojavljuje na izvodu pod imenom 'nepoznat trgovac„ ili stranog subjekta." data-en="transaction appears on the statement under “unknown merchant' or a foreign entity.">transakcija se pojavljuje na izvodu pod imenom 'nepoznat trgovac' ili stranog subjekta.</li>
            <li data-sr="moderni sistemi zahtevaju PIN posle nekoliko uzastopnih beskontaktnih transakcija što ograničava napad." data-en="modern systems require a PIN after several consecutive contactless transactions which limits the attack.">moderni sistemi zahtevaju PIN posle nekoliko uzastopnih beskontaktnih transakcija što ograničava napad.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Prikupljanje podataka za CNP" data-en="Data collection for CNP">Prikupljanje podataka za CNP</div>
          <ul class="bullets">
            <li data-sr="NFC čitač prikuplja broj kartice, datum isteka i neke trackove podataka." data-en="NFC reader collects card number, expiry date, and some data tracks.">NFC čitač prikuplja broj kartice, datum isteka i neke trackove podataka.</li>
            <li data-sr="prikupljeni podaci se koriste za CNP kupovine na sajtovima koji ne zahtevaju CVV ili 3D Secure." data-en="collected data is used for CNP purchases on sites that do not require CVV or 3D Secure.">prikupljeni podaci se koriste za CNP kupovine na sajtovima koji ne zahtevaju CVV ili 3D Secure.</li>
            <li data-sr="zaštitna RFID/NFC folija ili metalni novčanik fizički blokiraju signal i sprečavaju prikupljanje." data-en="protective RFID/NFC foil or a metal wallet physically blocks the signal and prevents collection.">zaštitna RFID/NFC folija ili metalni novčanik fizički blokiraju signal i sprečavaju prikupljanje.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)." data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Fizičko pozicioniranje u blizini žrtve" data-en="Phase 1 — Physical positioning near victim">Faza 1 — Fizičko pozicioniranje u blizini žrtve</h3>
        <p data-sr="Napadač u gužvi, javnom prevozu ili na stajanju u redu pozicionira NFC čitač u blizini torbice, džepa ili novčanika žrtve. Uređaj je malih dimenzija i lako se skrije." data-en="The attacker in a crowd, public transport, or queue positions an NFC reader near the victim's bag, pocket, or wallet. The device is small and easily concealed.">Napadač pozicionira NFC čitač unutar 10 cm od novčanika žrtve u gužvi ili prevozu.</p>
        <ul class="bullets">
          <li data-sr="signal: nepoznata transakcija malog iznosa na kartičnom izvodu bez poznatog razloga." data-en="signal: unknown low-value transaction on card statement without a known reason.">signal: nepoznata transakcija malog iznosa na kartičnom izvodu bez poznatog razloga.</li>
          <li data-sr="signal: transakcija sa stranog ili nepoznatog maloprodajnog subjekta u vreme kada niste kupovali." data-en="signal: transaction from a foreign or unknown retail entity at a time when you were not shopping.">signal: transakcija sa stranog ili nepoznatog maloprodajnog subjekta u vreme kada niste kupovali.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> kartica je skenirana u roku od sekundi — žrtva ne primeti ništa u trenutku napada." data-en="<strong>Threshold:</strong> the card is scanned within seconds — the victim notices nothing at the time of the attack."><strong>Prag faze:</strong> kartica je skenirana u roku od sekundi — žrtva ne primeti ništa u trenutku napada.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Transakcija ili CNP zloupotreba" data-en="Phase 2 — Transaction or CNP misuse">Faza 2 — Transakcija ili CNP zloupotreba</h3>
        <p data-sr="Direktna transakcija se pojavljuje na izvodu. Ili napadač koristi prikupljene podatke za CNP kupovine. Žrtva otkrije problem pregledom izvoda." data-en="The direct transaction appears on the statement. Or the attacker uses collected data for CNP purchases. The victim discovers the problem by reviewing the statement.">Direktna transakcija ili CNP kupovine se pojavljuju na izvodu. Žrtva otkrije pregledom.</p>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="card-not-present-fraud.html" data-sr="Zloupotreba kartice bez fizičkog prisustva" data-en="Card-not-present fraud">Zloupotreba kartice bez fizičkog prisustva</a></li>
            <li><a href="atm-skimming.html" data-sr="Skimovanje na bankomatu" data-en="ATM skimming">Skimovanje na bankomatu</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> blokada kartice i chargeback zahtev su jedine akcije posle otkrivanja napada." data-en="<strong>Threshold:</strong> card blocking and chargeback request are the only actions after discovering the attack."><strong>Prag faze:</strong> blokada kartice i chargeback zahtev su jedine akcije posle otkrivanja napada.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="nepoznata transakcija malog iznosa na kartičnom izvodu bez razloga." data-en="unknown low-value transaction on the card statement without reason.">nepoznata transakcija malog iznosa na kartičnom izvodu bez razloga.</li>
        <li data-sr="transakcija od stranog ili nepoznatog maloprodajnog subjekta." data-en="transaction from a foreign or unknown retail entity.">transakcija od stranog ili nepoznatog maloprodajnog subjekta.</li>
        <li data-sr="transakicja u periodu kada niste bili u prodavnici ni vršili plaćanja." data-en="transaction during a period when you were not in a store or making payments.">transakicja u periodu kada niste bili u prodavnici ni vršili plaćanja.</li>
        <li data-sr="serija malih transakcija u kratkom vremenskom roku." data-en="a series of small transactions in a short time window.">serija malih transakcija u kratkom vremenskom roku.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 8 pitanja i preventivnih akcija" data-en="Checklist: 8 questions and preventive actions">Checklista: 8 pitanja i preventivnih akcija</h2>
      <ul class="bullets">
        <li data-sr="Da li redovno proveravam kartični izvod — bar dva puta nedeljno?" data-en="Do I regularly check my card statement — at least twice a week?">Da li redovno proveravam kartični izvod — bar dva puta nedeljno?</li>
        <li data-sr="Da li su aktivna push ili SMS obaveštenja za svaku beskontaktnu transakciju?" data-en="Are push or SMS notifications active for every contactless transaction?">Da li su aktivna push ili SMS obaveštenja za svaku beskontaktnu transakciju?</li>
        <li data-sr="Da li koristim RFID/NFC zaštitnu foliju ili metalni novčanik koji blokira signal?" data-en="Do I use RFID/NFC protective foil or a metal wallet that blocks the signal?">Da li koristim RFID/NFC zaštitnu foliju ili metalni novčanik koji blokira signal?</li>
        <li data-sr="Da li je beskontaktna transakcija ograničena na iznos koji je prihvatljiv rizik bez PIN-a?" data-en="Is the contactless transaction limited to an amount that is acceptable risk without a PIN?">Da li je beskontaktna transakcija ograničena na iznos koji je prihvatljiv rizik bez PIN-a?</li>
        <li data-sr="Da li postoje nepoznate transakcije na izvodu posle boravka u gužvi ili javnom prevozu?" data-en="Are there unknown transactions on the statement after being in a crowd or public transport?">Da li postoje nepoznate transakcije na izvodu posle boravka u gužvi ili javnom prevozu?</li>
        <li data-sr="Da li sam prijavio/lažneovlašćenu transakciju banci odmah po uočavanju?" data-en="Did I report the unauthorized transaction to the bank immediately upon noticing it?">Da li sam prijavio/lažneovlašćenu transakciju banci odmah po uočavanju?</li>
        <li data-sr="Da li sam blokirao/la karticu i zahtevao/la novu po potvrdi neovlašćene transakcije?" data-en="Did I block the card and request a new one upon confirming an unauthorized transaction?">Da li sam blokirao/la karticu i zahtevao/la novu po potvrdi neovlašćene transakcije?</li>
        <li data-sr="Da li mogu da isključim beskontaktnu funkciju kartice kod može banke ako je ne koristim?" data-en="Can I disable the contactless function on my card at my bank if I don't use it?">Da li mogu da isključim beskontaktnu funkciju kartice kod može banke ako je ne koristim?</li>
      </ul>
    </section>

    
    <!-- PROVERE -->
    <section class="content-section">
      <h2 data-sr="Provere: 8 brzih provera za zastitu kartice" data-en="Checks: 8 quick checks for card protection">Provere: 8 brzih provera za zastitu kartice</h2>
      <ol class="steps">
        <li data-sr="Redovno proveravaj izvod bankovnog racuna i prijavlji neovlascene transakcije odmah." data-en="Regularly check your bank statement and report unauthorized transactions immediately.">Redovno proveravaj izvod bankovnog racuna i prijavlji neovlascene transakcije odmah.</li>
        <li data-sr="Ukljuci SMS ili push notifikacije za svaku transakciju na kartici." data-en="Enable SMS or push notifications for every card transaction.">Ukljuci SMS ili push notifikacije za svaku transakciju na kartici.</li>
        <li data-sr="Koristi zastitu za kartice (RFID bloker) ako se brinew o bezkontaktnom ocitavanju." data-en="Use card protection (RFID blocker) if concerned about contactless scanning.">Koristi zastitu za kartice (RFID bloker) ako se brinew o bezkontaktnom ocitavanju.</li>
        <li data-sr="Proveri da li aplikacija tvoje banke pokazuje sve nedavne transakcije bez anomalija." data-en="Check whether your bank app shows all recent transactions without anomalies.">Proveri da li aplikacija tvoje banke pokazuje sve nedavne transakcije bez anomalija.</li>
        <li data-sr="Postavi dnevni limit za bezkontaktna placanja na karticnoj aplikaciji banke." data-en="Set a daily limit for contactless payments in your bank card app.">Postavi dnevni limit za bezkontaktna placanja na karticnoj aplikaciji banke.</li>
        <li data-sr="Nikada ne ostavljaj karticu bez nadzora u restoranima ili prodavnicama." data-en="Never leave your card unattended in restaurants or shops.">Nikada ne ostavljaj karticu bez nadzora u restoranima ili prodavnicama.</li>
        <li data-sr="Proveri da li POS terminal izgleda normalno — da li postoje sumnjivi dodaci?" data-en="Check whether the POS terminal looks normal — are there any suspicious attachments?">Proveri da li POS terminal izgleda normalno — da li postoje sumnjivi dodaci?</li>
        <li data-sr="Blokiraj bezkontaktnu funkciju kartice ako je ne koristis redovno." data-en="Block the contactless function of your card if you do not use it regularly.">Blokiraj bezkontaktnu funkciju kartice ako je ne koristis redovno.</li>
      </ol>
    </section>
<section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="proverite kartični izvod odmah za nepoznate transakcije posle boravka u gužvi." data-en="check the card statement immediately for unknown transactions after being in a crowd.">proverite kartični izvod odmah za nepoznate transakcije posle boravka u gužvi.</li>
        <li data-sr="prijavite neovlašćenu transakciju banci i pokrenite chargeback proceduru." data-en="report the unauthorized transaction to the bank and initiate the chargeback procedure.">prijavite neovlašćenu transakciju banci i pokrenite chargeback proceduru.</li>
        <li data-sr="zatražite novu karticu s novim brojem — stari podaci mogu biti kompromitovani." data-en="request a new card with a new number — old data may be compromised.">zatražite novu karticu s novim brojem — stari podaci mogu biti kompromitovani.</li>
        <li data-sr="razmotrite kupovinu RFID/NFC zaštitne torbice ili folije za buduće situacije." data-en="consider purchasing an RFID/NFC protective case or foil for future situations.">razmotrite kupovinu RFID/NFC zaštitne torbice ili folije za buduće situacije.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li postoje nepoznate male transakcije na izvodu posle gužve ili prevoza?" data-en="Are there unknown small transactions on the statement after a crowd or transit?">Da li postoje nepoznate male transakcije na izvodu posle gužve ili prevoza?</li>
            <li data-sr="Da li koristiš RFID zaštitnu foliju ili metalni novčanik za beskontaktne kartice?" data-en="Do you use RFID protective foil or a metal wallet for contactless cards?">Da li koristiš RFID zaštitnu foliju ili metalni novčanik za beskontaktne kartice?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Aktiviranje push obaveštenja za svaku transakciju je najlakši način da se NFC napad otkrije u realnom vremenu." data-en="Activating push notifications for every transaction is the easiest way to detect an NFC attack in real time.">Aktiviranje push obaveštenja za svaku transakciju je najlakši način da se NFC napad otkrije u realnom vremenu.</li>
            <li data-sr="RFID zaštitna folija košta nekoliko evra i fizički blokira svaki pokušaj beskontaktnog skeniranja." data-en="RFID protective foil costs a few euros and physically blocks every contactless scanning attempt.">RFID zaštitna folija košta nekoliko evra i fizički blokira svaki pokušaj beskontaktnog skeniranja.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card sources" id="sources">
      <h2 data-sr="Povezane prevare" data-en="Related scams">Povezane prevare</h2>
      <ul class="bullets">
        <li><a href="card-skimming.html" data-sr="Skimovanje kartice (opšte)" data-en="Card skimming">Skimovanje kartice (opšte)</a></li>
        <li><a href="atm-skimming.html" data-sr="Skimovanje na bankomatu" data-en="ATM skimming">Skimovanje na bankomatu</a></li>
        <li><a href="pos-skimming.html" data-sr="Skimovanje na POS terminalu" data-en="POS skimming">Skimovanje na POS terminalu</a></li>
        <li><a href="card-not-present-fraud.html" data-sr="Zloupotreba kartice bez fizičkog prisustva" data-en="Card-not-present fraud">Zloupotreba kartice bez fizičkog prisustva</a></li>
      </ul>
    </section>
  `
};
