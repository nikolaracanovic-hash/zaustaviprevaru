window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["card-not-present-fraud"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi CNP prevara" data-en="Introduction: how card-not-present fraud works">Uvod: kako radi CNP prevara</h2>
      <p data-sr="Zloupotreba kartice bez fizičkog prisustva (CNP) je prevara u kojoj kriminalci koriste ukradene podatke kartice — broj, rok važnosti i CVV — za online kupovine ili telefonske transakcije gde fizička kartica nije potrebna. Kartica ostaje kod žrtve, ali su njeni podaci dostupni napadaču." data-en="Card-not-present (CNP) fraud is fraud in which criminals use stolen card data — number, expiry date, and CVV — for online purchases or phone transactions where the physical card is not required. The card remains with the victim, but its data is available to the attacker.">CNP prevara koristi ukradene podatke kartice za online kupovine bez fizičke kartice. Žrtva karticu ima ali podaci su kompromitovani.</p>
      <p data-sr="CNP prevara je najčešća vrsta platne prevare jer ne zahteva fizički pristup kartici. Podaci se pribavljaju masovno kroz fišing kampanje, proboje podataka e-commerce sajtova, skimmere na bankomatima ili direktnom krađom na fizičkim terminalima. Jednom kupljeni na crnom tržištu, podaci se testiraju u malim iznosima pre veće kupovine." data-en="CNP fraud is the most common type of payment fraud because it requires no physical access to the card. Data is obtained in bulk through phishing campaigns, e-commerce site data breaches, ATM skimmers, or direct theft at physical terminals. Once purchased on the dark market, data is tested in small amounts before larger purchases.">CNP prevara ne zahteva fizički pristup kartici — podaci se kupuju na crnom tržištu i testiraju u malim iznosima.</p>
      <div class="callout" data-sr="<strong>Model:</strong> krađa podataka kartice → testna mikro-transakcija → veće online kupovine → žrtva prima reklamaciju → finansijski gubitak." data-en="<strong>Model:</strong> card data theft → test micro-transaction → larger online purchases → victim receives claims → financial loss."><strong>Model:</strong> krađa podataka kartice → testna mikro-transakcija → veće online kupovine → žrtva prima reklamaciju → finansijski gubitak.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> broj kartice, datum isteka i CVV su dovoljni za online kupovinu — niko legalan ne treba sve tri vrednosti odjednom." data-en="<strong>Threshold:</strong> card number, expiry date, and CVV are sufficient for online purchases — no legitimate party needs all three at once."><strong>Prag:</strong> broj kartice, datum isteka i CVV su dovoljni za online kupovinu — niko legalan ne treba sve tri vrednosti odjednom.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika CNP prevare" data-en="How it works: CNP fraud mechanics">Kako generalno radi: mehanika CNP prevare</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Kako se pribavljaju podaci kartice" data-en="How card data is obtained">Kako se pribavljaju podaci kartice</div>
          <ul class="bullets">
            <li data-sr="phishing stranica koja imitira banku ili e-commerce servis i prikuplja podatke kartice." data-en="phishing page imitating a bank or e-commerce service that collects card data.">phishing stranica koja imitira banku ili e-commerce servis i prikuplja podatke kartice.</li>
            <li data-sr="proboj podataka e-commerce sajta koji čuva kartice bez adekvatne zaštite." data-en="data breach of an e-commerce site that stores cards without adequate protection.">proboj podataka e-commerce sajta koji čuva kartice bez adekvatne zaštite.</li>
            <li data-sr="fizički skimmer na bankomatu ili POS terminalu koji čita podatke magnetne traže." data-en="physical skimmer on an ATM or POS terminal that reads magnetic stripe data.">fizički skimmer na bankomatu ili POS terminalu koji čita podatke magnetne traže.</li>
            <li data-sr="kupovina ukradenih podataka na dark web tržištu u serijama hiljada kartica odjednom." data-en="purchasing stolen data on dark web marketplaces in batches of thousands of cards at once.">kupovina ukradenih podataka na dark web tržištu u serijama hiljada kartica odjednom.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Kako se koriste ukradeni podaci" data-en="How stolen data is used">Kako se koriste ukradeni podaci</div>
          <ul class="bullets">
            <li data-sr="testna mikro-transakcija od 0.01–5 evra da se proveri da li je kartica aktivna." data-en="test micro-transaction of 0.01–5 euros to verify whether the card is active.">testna mikro-transakcija od 0.01–5 evra da se proveri da li je kartica aktivna.</li>
            <li data-sr="veće online kupovine na sajtovima bez 3D Secure ili jakih autentifikacionih zahteva." data-en="larger online purchases on sites without 3D Secure or strong authentication requirements.">veće online kupovine na sajtovima bez 3D Secure ili jakih autentifikacionih zahteva.</li>
            <li data-sr="kupovina digitalnih dobara (poklon bonovi, kriptovaluta) koji se ne mogu lako povratiti." data-en="purchasing digital goods (gift cards, cryptocurrency) that cannot easily be reversed.">kupovina digitalnih dobara (poklon bonovi, kriptovaluta) koji se ne mogu lako povratiti.</li>
            <li data-sr="korišćenje kartica pre nego žrtva primeti na izvodu — brzo i u kratkom periodu." data-en="using cards before the victim notices on the statement — quickly and in a short period.">korišćenje kartica pre nego žrtva primeti na izvodu — brzo i u kratkom periodu.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)." data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Krađa podataka kartice" data-en="Phase 1 — Card data theft">Faza 1 — Krađa podataka kartice</h3>
        <p data-sr="Podaci kartice se pribavljaju phishingom, curenjem podataka ili skimmerom. Žrtva ne zna da su podaci kompromitovani jer kartica i dalje fizički radi." data-en="Card data is obtained through phishing, data breach, or a skimmer. The victim does not know the data is compromised because the card still physically works.">Podaci kartice su kompromitovani ali kartica fizički funkcioniše — žrtva ne zna.</p>
        <ul class="bullets">
          <li data-sr="signal: mala neočekivana transakcija na kartici bez poznatog razloga može biti test CNP aktivnosti." data-en="signal: a small unexpected card transaction without a known reason may be a CNP activity test.">signal: mala neočekivana transakcija na kartici bez poznatog razloga može biti test CNP aktivnosti.</li>
          <li data-sr="signal: obaveštenje o odbijenom pokušaju transakcije za iznos koji vi niste initirali." data-en="signal: notification of a declined transaction attempt for an amount you did not initiate.">signal: obaveštenje o odbijenom pokušaju transakcije za iznos koji vi niste initirali.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> napadač potvrđuje da je kartica aktivna i prelazi na veće kupovine." data-en="<strong>Threshold:</strong> the attacker confirms the card is active and moves to larger purchases."><strong>Prag faze:</strong> napadač potvrđuje da je kartica aktivna i prelazi na veće kupovine.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Serija kupovina i iscrpljivanje" data-en="Phase 2 — Purchase series and card draining">Faza 2 — Serija kupovina i iscrpljivanje</h3>
        <p data-sr="Napadač vrši seriju online kupovina — digitalna dobra, pretplate, transferi — pre nego banka blokira. Brzina je ključna: napadač zna da ima manje od 24–48 sati pre nego žrtva primeti na izvodu." data-en="The attacker makes a series of online purchases — digital goods, subscriptions, transfers — before the bank blocks the card. Speed is critical: the attacker knows they have less than 24–48 hours before the victim notices on the statement.">Serija kupovina pre nego žrtva primeti na izvodu — digitalna dobra, pretplate, transferi.</p>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="email-account-compromise.html" data-sr="Kompromitovanje imejl naloga" data-en="Email account compromise">Kompromitovanje imejl naloga</a></li>
            <li><a href="chargeback-fraud.html" data-sr="Lažni chargeback (zloupotreba povrata plaćanja)" data-en="Chargeback fraud (friendly fraud)">Lažni chargeback (zloupotreba povrata plaćanja)</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> žrtva primeti transakcije na izvodu ili banka generiše automatski alarm — blokada kartice je jedina preventivna mera." data-en="<strong>Threshold:</strong> the victim notices transactions on the statement or the bank generates an automatic alert — card blocking is the only preventive measure."><strong>Prag faze:</strong> žrtva primeti transakcije na izvodu ili banka generiše automatski alarm — blokada kartice je jedina preventivna mera.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="male neočekivane transakcije (0.01–5 evra) na kartici za nepoznate servise." data-en="small unexpected transactions (0.01–5 euros) on the card for unknown services.">male neočekivane transakcije (0.01–5 evra) na kartici za nepoznate servise.</li>
        <li data-sr="transakcija na sajtu koji vi niste nikad koristili ili niste koristili u navedenom periodu." data-en="transaction on a site you have never used or not used in the stated period.">transakcija na sajtu koji vi niste nikad koristili ili niste koristili u navedenom periodu.</li>
        <li data-sr="obaveštenje o odbijenom pokušaju koji vi niste inicirali." data-en="notification of a declined attempt you did not initiate.">obaveštenje o odbijenom pokušaju koji vi niste inicirali.</li>
        <li data-sr="nestanak dijela sredstava bez obaveštenja u sattima kada niste pravili kupovine." data-en="disappearance of funds without notification during hours when you were not making purchases.">nestanak dijela sredstava bez obaveštenja u sattima kada niste pravili kupovine.</li>
        <li data-sr="phishing stranica je tražila sve podatke kartice za 'verifikaciju„ ili „nagradu„." data-en="a phishing page requested all card details for “verification“ or a “prize'.">phishing stranica je tražila sve podatke kartice za 'verifikaciju' ili 'nagradu'.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 10 pitanja za prevenciju i reakciju" data-en="Checklist: 10 questions for prevention and response">Checklista: 10 pitanja za prevenciju i reakciju</h2>
      <ul class="bullets">
        <li data-sr="Da li redovno proveravam kartičane izvode — bar jednom nedeljno?" data-en="Do I regularly check card statements — at least once a week?">Da li redovno proveravam kartičane izvode — bar jednom nedeljno?</li>
        <li data-sr="Da li sam aktivirao/la SMS ili push obaveštenja za svaku transakciju na kartici?" data-en="Have I enabled SMS or push notifications for every card transaction?">Da li sam aktivirao/la SMS ili push obaveštenja za svaku transakciju na kartici?</li>
        <li data-sr="Da li postoje male nepoznate transakcije na izvodu koje mogu biti test aktivnost?" data-en="Are there small unknown transactions on the statement that may be test activity?">Da li postoje male nepoznate transakcije na izvodu koje mogu biti test aktivnost?</li>
        <li data-sr="Da li sam koristio/la karticu na sajtu koji je možda imao proboj podataka?" data-en="Have I used the card on a site that may have had a data breach?">Da li sam koristio/la karticu na sajtu koji je možda imao proboj podataka?</li>
        <li data-sr="Da li je 3D Secure (Verified by Visa / Mastercard SecureCode) aktivan na kartici?" data-en="Is 3D Secure (Verified by Visa / Mastercard SecureCode) active on the card?">Da li je 3D Secure (Verified by Visa / Mastercard SecureCode) aktivan na kartici?</li>
        <li data-sr="Da li koristim virtuelnu karticu s ograničenjem za online kupovine?" data-en="Do I use a virtual card with a limit for online purchases?">Da li koristim virtuelnu karticu s ograničenjem za online kupovine?</li>
        <li data-sr="Da li sam kontaktovao/la banku odmah po uočavanju sumnjive transakcije?" data-en="Did I contact the bank immediately upon noticing a suspicious transaction?">Da li sam kontaktovao/la banku odmah po uočavanju sumnjive transakcije?</li>
        <li data-sr="Da li sam blokirao/la karticu i zahtevao/la novu po potvrdi neovlašćenih transakcija?" data-en="Did I block the card and request a new one upon confirming unauthorized transactions?">Da li sam blokirao/la karticu i zahtevao/la novu po potvrdi neovlašćenih transakcija?</li>
        <li data-sr="Da li sam podnio/la chargeback zahtev za sve neovlašćene transakcije u banci?" data-en="Did I submit a chargeback request for all unauthorized transactions at the bank?">Da li sam podnio/la chargeback zahtev za sve neovlašćene transakcije u banci?</li>
        <li data-sr="Da li sam promenio/la lozinku za online banking i e-commerce naloge gde je kartica sačuvana?" data-en="Did I change passwords for online banking and e-commerce accounts where the card is saved?">Da li sam promenio/la lozinku za online banking i e-commerce naloge gde je kartica sačuvana?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="blokirajte karticu odmah putem bankovne aplikacije ili poziva banci." data-en="block the card immediately via the banking app or by calling the bank.">blokirajte karticu odmah putem bankovne aplikacije ili poziva banci.</li>
        <li data-sr="prijavite sve neovlašćene transakcije banci i pokrenite chargeback proceduru." data-en="report all unauthorized transactions to the bank and initiate the chargeback procedure.">prijavite sve neovlašćene transakcije banci i pokrenite chargeback proceduru.</li>
        <li data-sr="zatražite novu karticu s novim brojem — stari podaci su kompromitovani." data-en="request a new card with a new number — the old data is compromised.">zatražite novu karticu s novim brojem — stari podaci su kompromitovani.</li>
        <li data-sr="promenite lozinke za sve sajtove gde je kartica bila sačuvana." data-en="change passwords for all sites where the card was saved.">promenite lozinke za sve sajtove gde je kartica bila sačuvana.</li>
        <li data-sr="prijavite incident policiji ako je iznos značajan ili postoji obrazac napada." data-en="report the incident to police if the amount is significant or there is a pattern of attacks.">prijavite incident policiji ako je iznos značajan ili postoji obrazac napada.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li postoje male nepoznate transakcije na izvodu u poslednje vreme?" data-en="Are there small unknown transactions on the statement recently?">Da li postoje male nepoznate transakcije na izvodu u poslednje vreme?</li>
            <li data-sr="Da li su aktivna SMS obaveštenja za svaku transakciju na kartici?" data-en="Are SMS notifications active for every card transaction?">Da li su aktivna SMS obaveštenja za svaku transakciju na kartici?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Kartica može biti kompromitovana iako je fizički pri tebi — samo podaci su dovoljni za online kupovinu." data-en="A card can be compromised even when physically with you — just the data is enough for online purchases.">Kartica može biti kompromitovana iako je fizički pri tebi — samo podaci su dovoljni za online kupovinu.</li>
            <li data-sr="Hajde da proverimo izvod zadnja 30 dana i prijavimo banci sve transakcije koje ne prepoznajemo." data-en="Let's check the statement for the last 30 days and report to the bank all transactions we don't recognize.">Hajde da proverimo izvod zadnja 30 dana i prijavimo banci sve transakcije koje ne prepoznajemo.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card sources" id="sources">
      <h2 data-sr="Povezane prevare" data-en="Related scams">Povezane prevare</h2>
      <ul class="bullets">
        <li><a href="chargeback-fraud.html" data-sr="Lažni chargeback (zloupotreba povrata plaćanja)" data-en="Chargeback fraud (friendly fraud)">Lažni chargeback (zloupotreba povrata plaćanja)</a></li>
        <li><a href="email-account-compromise.html" data-sr="Kompromitovanje imejl naloga" data-en="Email account compromise">Kompromitovanje imejl naloga</a></li>
        <li><a href="phishing.html" data-sr="Fišing" data-en="Fišing">Fišing</a></li>
        <li><a href="identity-theft.html" data-sr="Krađa identiteta" data-en="Identity theft">Krađa identiteta</a></li>
        <li><a href="courier-fraud.html" data-sr="Kurirska prevara" data-en="Courier fraud">Kurirska prevara</a></li>
        <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
      </ul>
    </section>
  `
};
