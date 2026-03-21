window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["pos-skimming"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi POS skimming" data-en="Introduction: how POS skimming works">Uvod: kako radi POS skimming</h2>
      <p data-sr="POS skimming prikuplja podatke kartice na POS terminalu u prodavnici, restoranu ili hotelu — fizičkim skimerom ili saučesničkim zaposlenim." data-en="POS skimming is the installation of a card data collection device on a POS terminal in a retail establishment — a shop, restaurant, petrol station, hotel, or cafeteria. The attacker either by installing a physical skimmer on the terminal or with the help of a complicit employee who swipes the card through a separate device collects magnetic stripe data and sometimes the PIN.">POS skimming prikuplja podatke kartice na POS terminalu u prodavnici, restoranu ili hotelu — fizičkim skimerom ili saučesničkim zaposlenim.</p>
      <p data-sr="Saučesnički zaposleni prevlači karticu kroz hand skimmer pre terminala. Plaćanje prolazi normalno — podaci su ukradeni." data-en="A particularly risky variant is where an employee swipes the card through a small handheld skimmer (so-called 'hand skimmer') before inserting it into the legitimate POS terminal. The victim notices nothing because the terminal processes the payment normally — but data is simultaneously collected.">Saučesnički zaposleni prevlači karticu kroz hand skimmer pre terminala. Plaćanje prolazi normalno — podaci su ukradeni.</p>
      <div class="callout" data-sr="<strong>Model:</strong> skimer na POS terminalu ili hand skimer kod zaposlenog → kartica prevučena → podaci magnetne traže prikupljeni → CNP kupovine ili klon → gubitak." data-en="<strong>Model:</strong> skimmer on POS terminal or hand skimmer with employee → card swiped → magnetic stripe data collected → CNP purchases or clone → loss."><strong>Model:</strong> skimer na POS terminalu ili hand skimer kod zaposlenog → kartica prevučena → podaci magnetne traže prikupljeni → CNP kupovine ili klon → gubitak.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> terminal koji deluje neuobičajeno, ima labav čitač ili je zaposleni izgubio terminal iz vida su znaci POS skimminga." data-en="<strong>Threshold:</strong> a terminal that appears unusual, has a loose reader, or where the employee lost sight of the terminal are signs of POS skimming."><strong>Prag:</strong> terminal koji deluje neuobičajeno, ima labav čitač ili je zaposleni izgubio terminal iz vida su znaci POS skimminga.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika POS skimminga" data-en="How it works: POS skimming mechanics">Kako generalno radi: mehanika POS skimminga</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Fizički skimer na terminalu" data-en="Physical skimmer on terminal">Fizički skimer na terminalu</div>
          <ul class="bullets">
            <li data-sr="skimer se montira iznad originalnog čitača magnetne traže na POS terminalu — vizualno neprimetno." data-en="skimmer is mounted over the original magnetic stripe reader on a POS terminal — visually imperceptible.">skimer se montira iznad originalnog čitača magnetne traže na POS terminalu — vizualno neprimetno.</li>
            <li data-sr="napadač može biti zaposleni ili neko ko ima privremeni pristup terminalu van radnog vremena." data-en="the attacker can be an employee or someone who had temporary access to the terminal outside working hours.">napadač može biti zaposleni ili neko ko ima privremeni pristup terminalu van radnog vremena.</li>
            <li data-sr="skimovani podaci se prenose bežično ili prikupljaju fizičkim preuzimanjem uređaja." data-en="skimmed data is transmitted wirelessly or collected by physically retrieving the device.">skimovani podaci se prenose bežično ili prikupljaju fizičkim preuzimanjem uređaja.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Hand skimer kod saučesničkog zaposlenog" data-en="Hand skimmer with complicit employee">Hand skimer kod saučesničkog zaposlenog</div>
          <ul class="bullets">
            <li data-sr="zaposleni prima karticu od kupca i neopaženo prevlači kroz ručni skimer pre POS terminala." data-en="employee receives the card from the customer and unnoticed swipes it through a handheld skimmer before the POS terminal.">zaposleni prima karticu od kupca i neopaženo prevlači kroz ručni skimer pre POS terminala.</li>
            <li data-sr="rizik je veći u situacijama gde kupac predaje karticu zaposlenom — restorani, benzinske pumpe." data-en="risk is higher in situations where the customer hands the card to an employee — restaurants, petrol stations.">rizik je veći u situacijama gde kupac predaje karticu zaposlenom — restorani, benzinske pumpe.</li>
            <li data-sr="prikupljeni podaci se prodaju ili koriste za CNP kupovine — sa ili bez PIN-a." data-en="collected data is sold or used for CNP purchases — with or without a PIN.">prikupljeni podaci se prodaju ili koriste za CNP kupovine — sa ili bez PIN-a.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)" data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Instalacija ili hand skimming" data-en="Phase 1 — Installation or hand skimming">Faza 1 — Instalacija ili hand skimming</h3>
        <p data-sr="Svaka kartica prevučena na kompromitovanom terminalu ili kroz hand skimer daje podatke napadaču." data-en="The attacker installs a skimmer on the terminal or the complicit employee is ready with a hand skimmer. Every customer who pays by card gives data to the attacker without knowing.">Svaka kartica prevučena na kompromitovanom terminalu ili kroz hand skimer daje podatke napadaču.</p>
        <ul class="bullets">
          <li data-sr="signal: zaposleni uzima karticu i nosi je izvan vidokruga kupca za 'verifikaciju' ili 'greška na kasi'." data-en="signal: employee takes the card and carries it out of the customers sight for 'verification' or 'cash register issue'.">signal: zaposleni uzima karticu i nosi je izvan vidokruga kupca za 'verifikaciju' ili 'greška na kasi'.</li>
          <li data-sr="signal: POS terminal ima neobičan plastični nastavak na čitaču kartice." data-en="signal: the POS terminal has an unusual plastic extension on the card reader.">signal: POS terminal ima neobičan plastični nastavak na čitaču kartice.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> kartica je prevučena — podaci su prikupljeni bez mogućnosti sprečavanja." data-en="<strong>Threshold:</strong> the card is swiped — data is collected without possibility of prevention."><strong>Prag faze:</strong> kartica je prevučena — podaci su prikupljeni bez mogućnosti sprečavanja.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Iskorišćavanje prikupljenih podataka" data-en="Phase 2 — Exploiting collected data">Faza 2 — Iskorišćavanje prikupljenih podataka</h3>
        <p data-sr="CNP kupovine se pojavljuju na izvodu. Identifikacija kompromitirajućeg objekta je moguća analizom lokacija plaćanja." data-en="The attacker sells the data or uses it for CNP purchases. The victim discovers the fraud on the card statement, sometimes days or weeks after visiting the establishment.">CNP kupovine se pojavljuju na izvodu. Identifikacija kompromitirajućeg objekta je moguća analizom lokacija plaćanja.</p>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="atm-skimming.html" data-sr="Skimovanje na bankomatu" data-en="ATM skimming">Skimovanje na bankomatu</a></li>
            <li><a href="card-not-present-fraud.html" data-sr="Zloupotreba kartice bez fizičkog prisustva" data-en="Card-not-present fraud">Zloupotreba kartice bez fizičkog prisustva</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> identifikacija kompromitovanog objekta je ključna za razumevanje opsega i prijavu policiji." data-en="<strong>Threshold:</strong> identifying the compromised establishment is key to understanding the scope and reporting to police."><strong>Prag faze:</strong> identifikacija kompromitovanog objekta je ključna za razumevanje opsega i prijavu policiji.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="zaposleni nosi karticu izvan vidokruga kupca za 'verifikaciju' ili 'drugi terminal'." data-en="employee carries the card out of the customers sight for verification' or 'another terminal'.">zaposleni nosi karticu izvan vidokruga kupca za 'verifikaciju' ili 'drugi terminal'.</li>
        <li data-sr="POS terminal ima neuobičajeni plastični deo ili je vizualno izmenjen od standarda." data-en="the POS terminal has an unusual plastic part or is visually altered from standard.">POS terminal ima neuobičajeni plastični deo ili je vizualno izmenjen od standarda.</li>
        <li data-sr="nepoznate CNP transakcije na izvodu u danima posle plaćanja u ugostiteljskim objektima." data-en="unknown CNP transactions on the statement in the days after paying in hospitality establishments.">nepoznate CNP transakcije na izvodu u danima posle plaćanja u ugostiteljskim objektima.</li>
        <li data-sr="zaposleni koji drži karticu duže nego što je potrebno za procesiranje jedne transakcije." data-en="employee holding the card longer than necessary for processing a single transaction.">zaposleni koji drži karticu duže nego što je potrebno za procesiranje jedne transakcije.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 8 preventivnih akcija" data-en="Checklist: 8 preventive actions">Checklista: 8 preventivnih akcija</h2>
      <ul class="bullets">
        <li data-sr="Da li sam ostao/la da gledam terminal dok se plaćanje procesira?" data-en="Did I stay and watch the terminal while the payment was processed?">Da li sam ostao/la da gledam terminal dok se plaćanje procesira?</li>
        <li data-sr="Da li je zaposleni držao/la karticu izvan mog vidokruga u bilo kom trenutku?" data-en="Did the employee hold the card out of my sight at any point?">Da li je zaposleni držao/la karticu izvan mog vidokruga u bilo kom trenutku?</li>
        <li data-sr="Da li koristim beskontaktno plaćanje mobilnim telefonom koje ne izlaže fizičke podatke kartice?" data-en="Do I use contactless mobile payment that does not expose physical card data?">Da li koristim beskontaktno plaćanje mobilnim telefonom koje ne izlaže fizičke podatke kartice?</li>
        <li data-sr="Da li su aktivna push obaveštenja za svaku kartičnu transakciju?" data-en="Are push notifications active for every card transaction?">Da li su aktivna push obaveštenja za svaku kartičnu transakciju?</li>
        <li data-sr="Da li redovno proveravam kartični izvod za nepoznate CNP transakcije?" data-en="Do I regularly check the card statement for unknown CNP transactions?">Da li redovno proveravam kartični izvod za nepoznate CNP transakcije?</li>
        <li data-sr="Da li sam vizualno pregledao/la POS terminal pre prevlačenja kartice?" data-en="Did I visually inspect the POS terminal before swiping the card?">Da li sam vizualno pregledao/la POS terminal pre prevlačenja kartice?</li>
        <li data-sr="Da li sam prijavio/lažneovlašćenu transakciju banci odmah i pokrenuo/la chargeback?" data-en="Did I report the unauthorized transaction to the bank immediately and initiate chargeback?">Da li sam prijavio/lažneovlašćenu transakciju banci odmah i pokrenuo/la chargeback?</li>
        <li data-sr="Da li sam analizovao/la gde sam sve bio/la s karticom da identifikujem kompromitovani objekat?" data-en="Did I analyze all the places I used the card to identify the compromised establishment?">Da li sam analizovao/la gde sam sve bio/la s karticom da identifikujem kompromitovani objekat?</li>
      </ul>
    </section>

    
    <!-- PROVERE -->
    <section class="content-section">
      <h2 data-sr="Provere: 8 brzih provera pre koristenja POS terminala" data-en="Checks: 8 quick checks before using a POS terminal">Provere: 8 brzih provera pre koristenja POS terminala</h2>
      <ol class="steps">
        <li data-sr="Pregledi POS terminal pre koristenja — da li postoje sumnjivi dodaci ili oslabljene delove?" data-en="Inspect the POS terminal before use — are there any suspicious additions or loose parts?">Pregledi POS terminal pre koristenja — da li postoje sumnjivi dodaci ili oslabljene delove?</li>
        <li data-sr="Pokrij PIN tastaturu rukom dok unosish PIN — to sprecava skrivene kamere." data-en="Cover the PIN keypad with your hand while entering — this prevents hidden cameras.">Pokrij PIN tastaturu rukom dok unosish PIN — to sprecava skrivene kamere.</li>
        <li data-sr="Koristi Apple Pay, Google Pay ili slican NFC sistem umesto fizicke kartice gde je moguce." data-en="Use Apple Pay, Google Pay, or similar NFC system instead of a physical card where possible.">Koristi Apple Pay, Google Pay ili slican NFC sistem umesto fizicke kartice gde je moguce.</li>
        <li data-sr="Ukljuci SMS ili push notifikacije za svaku transakciju na kartici." data-en="Enable SMS or push notifications for every card transaction.">Ukljuci SMS ili push notifikacije za svaku transakciju na kartici.</li>
        <li data-sr="Redovno proveravaj izvod i prijavlji sve nepoznate transakcije banci odmah." data-en="Regularly check your statement and report all unknown transactions to your bank immediately.">Redovno proveravaj izvod i prijavlji sve nepoznate transakcije banci odmah.</li>
        <li data-sr="Izbegavaj POS terminale koji izgledaju losije od normalnih ili imaju vidljive ostecenja." data-en="Avoid POS terminals that look worse than normal or have visible damage.">Izbegavaj POS terminale koji izgledaju losije od normalnih ili imaju vidljive ostecenja.</li>
        <li data-sr="Postavi dnevni limit troskenja na karticnom racunu u aplikaciji banke." data-en="Set a daily spending limit on your card account in the bank app.">Postavi dnevni limit troskenja na karticnom racunu u aplikaciji banke.</li>
        <li data-sr="Ako sumnjash da je terminal kompromitovan, plati gotovinom ili koristish drugu kasirsku liniju." data-en="If you suspect the terminal is compromised, pay with cash or use a different checkout.">Ako sumnjash da je terminal kompromitovan, plati gotovinom ili koristish drugu kasirsku liniju.</li>
      </ol>
    </section>
<section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="blokirajte karticu odmah putem bankovne aplikacije." data-en="block the card immediately via the banking app.">blokirajte karticu odmah putem bankovne aplikacije.</li>
        <li data-sr="prijavite neovlašćene transakcije banci i pokrenite chargeback proceduru." data-en="report unauthorized transactions to the bank and initiate the chargeback procedure.">prijavite neovlašćene transakcije banci i pokrenite chargeback proceduru.</li>
        <li data-sr="identifikujte objekat gde je kartica mogla biti kompromitovana i prijavite policiji." data-en="identify the establishment where the card may have been compromised and report to police.">identifikujte objekat gde je kartica mogla biti kompromitovana i prijavite policiji.</li>
        <li data-sr="zatražite novu karticu s novim brojem." data-en="request a new card with a new number.">zatražite novu karticu s novim brojem.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li je zaposleni u restoranu ili na benzinskoj pumpi uzimao/la tvoju karticu izvan tvog vidokruga?" data-en="Did the employee at a restaurant or petrol station take your card out of your sight?">Da li je zaposleni u restoranu ili na benzinskoj pumpi uzimao/la tvoju karticu izvan tvog vidokruga?</li>
            <li data-sr="Koje su lokacije bile zajedničke pre nego su se pojavile nepoznate transakcije?" data-en="What locations were common before unknown transactions appeared?">Koje su lokacije bile zajedničke pre nego su se pojavile nepoznate transakcije?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Nikad ne puštaj karticu da ode izvan vidokruga — insistiraj da dođeš do terminala u restoranu ili na pumpi." data-en="Never let the card go out of your sight — insist on going to the terminal at the restaurant or petrol station.">Nikad ne puštaj karticu da ode izvan vidokruga — insistiraj da dođeš do terminala u restoranu ili na pumpi.</li>
            <li data-sr="Mobilno plaćanje (Apple Pay, Google Pay) ne izlaže fizičke podatke kartice POS terminalu — koristi ga kad god je moguće." data-en="Mobile payment (Apple Pay, Google Pay) does not expose physical card data to the POS terminal — use it whenever possible.">Mobilno plaćanje (Apple Pay, Google Pay) ne izlaže fizičke podatke kartice POS terminalu — koristi ga kad god je moguće.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
