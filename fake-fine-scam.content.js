window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["fake-fine-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako rade lažne kazne i nalozi za plaćanje" data-en="Introduction: how fake fines and payment orders work">Uvod: kako rade lažne kazne i nalozi za plaćanje</h2>
      <p data-sr="Lažne kazne su masovni napad: prevarant šalje SMS ili email velikom broju primalaca tvrdeći da je registrovano kršenje saobraćajnih ili administrativnih propisa na vozilu ili adresi primaoca. Poruka sadrži broj prekršaja, datum i iznos kazne. Kazna je „snižena“ ako se plati odmah putem linka u poruci — čime se žrtva odvodi na lažni portal za uplatu." data-en="Fake fines are a mass attack: the fraudster sends SMS or email to a large number of recipients claiming that a traffic or administrative violation was recorded on the recipient's vehicle or address. The message includes a violation number, date, and fine amount. The fine is discounted if paid immediately via the link in the message — leading the victim to a fake payment portal.">Lažne kazne su masovni napad. SMS ili email tvrdi za prekršaj na vozilu ili adresi. Kazna je 'snižena' uz link koji vodi na lažni portal za uplatu kartice.</p>
      <p data-sr="Šema funkcioniše jer statistički mali procenat primalaca zaista jeste počinio saobraćajni prekršaj nedavno — ili bar nije siguran da nije. Nesigurnost i kombinacija niskog iznosa s popustom za hitnu uplatu čine ovu prevaru ekonomičnom za prevaranta i psihološki efikasnom prema meti." data-en="The scheme works because statistically a small percentage of recipients actually did commit a traffic violation recently — or at least are not certain they did not. Uncertainty combined with a low amount and discount for immediate payment makes this scam economically efficient for the fraudster and psychologically effective against the target.">Šema funkcioniše jer mali procenat primalaca zaista nije siguran da nije počinio prekršaj. Nesigurnost + popust za hitnu uplatu = efikasna kombinacija.</p>
      <div class="callout" data-sr="<strong>Model:</strong> SMS ili email → saobraćajna ili komunalna kontrola → broj prekršaja + iznos → popust za hitnu uplatu → link → lažni portal → krađa kartice." data-en="<strong>Model:</strong> SMS or email → traffic or municipal authority → violation number + amount → discount for immediate payment → link → fake portal → card theft."><strong>Model:</strong> SMS ili email → saobraćajna ili komunalna kontrola → broj prekršaja + iznos → popust za hitnu uplatu → link → lažni portal → krađa kartice.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> meta klikne link iz poruke i dođe do lažnog portala za uplatu kazne." data-en="<strong>Threshold:</strong> the target clicks the link in the message and reaches a fake penalty payment portal."><strong>Prag:</strong> meta klikne link iz poruke i dođe do lažnog portala za uplatu kazne.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika lažne kazne" data-en="How it works: fake fine mechanics">Kako generalno radi: mehanika lažne kazne</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gradi ubedljivost poruke" data-en="What builds message credibility">Šta gradi ubedljivost poruke</div>
          <ul class="bullets">
            <li data-sr="naziv organa (saobraćajna policija, komunalna inspekcija) koji zvuči zvanično." data-en="authority name (traffic police, municipal inspection) that sounds official.">naziv organa (saobraćajna policija, komunalna inspekcija) koji zvuči zvanično.</li>
            <li data-sr="broj prekršaja i datum koji zvuče konkretno i proverljivo." data-en="violation number and date that sound concrete and verifiable.">broj prekršaja i datum koji zvuče konkretno i proverljivo.</li>
            <li data-sr="iznos kazne koji je u realnom opsegu za saobraćajni prekršaj." data-en="fine amount in a realistic range for a traffic violation.">iznos kazne koji je u realnom opsegu za saobraćajni prekršaj.</li>
            <li data-sr="popust za hitnu uplatu koji je vremenski ograničen." data-en="time-limited discount for immediate payment.">popust za hitnu uplatu koji je vremenski ograničen.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Mehanika lažnog portala" data-en="Fake portal mechanics">Mehanika lažnog portala</div>
          <ul class="bullets">
            <li data-sr="portal vizualno imitira zvanični portal za plaćanje kazni." data-en="portal visually imitates the official fine payment portal.">portal vizualno imitira zvanični portal za plaćanje kazni.</li>
            <li data-sr="URL se razlikuje od zvaničnog — dodat suffix, promenjeno slovo ili drugačiji TLD." data-en="URL differs from official — added suffix, changed letter, or different TLD.">URL se razlikuje od zvaničnog — dodat suffix, promenjeno slovo ili drugačiji TLD.</li>
            <li data-sr="portal prikuplja broj kartice, CVV, datum isteka i ime vlasnika." data-en="portal collects card number, CVV, expiry date, and cardholder name.">portal prikuplja broj kartice, CVV, datum isteka i ime vlasnika.</li>
            <li data-sr="posle unosa karticnih podataka prikazuje se „potvrda“ da je kazna plaćena." data-en="after entering card data, a confirmation is shown that the fine has been paid.">posle unosa karticnih podataka prikazuje se 'potvrda' da je kazna plaćena.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)." data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — SMS ili email s kaznom" data-en="Phase 1 — SMS or email with fine">Faza 1 — SMS ili email s kaznom</h3>
        <p data-sr="Meta prima SMS ili email. Poruka je kratka i direktna: prekršaj je evidentiran, broj predmeta je X, iznos kazne je Y, plaćanjem do roka Z ostvaruje se popust. Poruka sadrži link za plaćanje koji izgleda legitimno ali ne vodi na zvanični portal." data-en="The target receives an SMS or email. The message is short and direct: a violation was recorded, case number is X, fine amount is Y, paying by deadline Z earns a discount. The message includes a payment link that appears legitimate but does not lead to the official portal.">Kratka poruka: prekršaj, broj predmeta, iznos, popust do roka. Link za plaćanje koji izgleda legitimno.</p>
        <ul class="bullets">
          <li data-sr="signal: zvanične kazne se dostavljaju poštom na registrovanu adresu, ne SMS-om." data-en="signal: official fines are delivered by post to the registered address, not by SMS.">signal: zvanične kazne se dostavljaju poštom na registrovanu adresu, ne SMS-om.</li>
          <li data-sr="signal: URL linka u poruci je drugačiji od zvaničnog portala za kazne." data-en="signal: URL of the link in the message differs from the official fines portal.">signal: URL linka u poruci je drugačiji od zvaničnog portala za kazne.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta klikne link i otvori portal za plaćanje." data-en="<strong>Threshold:</strong> the target clicks the link and opens the payment portal."><strong>Prag faze:</strong> meta klikne link i otvori portal za plaćanje.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Lažni portal za uplatu" data-en="Phase 2 — Fake payment portal">Faza 2 — Lažni portal za uplatu</h3>
        <p data-sr="Portal izgleda kao zvanični portal za kazne. Traži podatke kartice za plaćanje. Popust se prikazuje uz odbrojavanje koje stvara pritisak za hitnim unosom. Posle unosa podaci idu direktno prevarantu, a portal prikazuje „Plaćanje uspešno." data-en="The portal looks like the official fines portal. It requests card data for payment. The discount is displayed with a countdown creating pressure for immediate entry. After entry, data goes directly to the fraudster and the portal displays Payment successful.">Portal imitira zvanični. Traži karticu. Odbrojavanje stvara pritisak. Posle unosa podaci idu prevarantu — prikazuje se 'Plaćanje uspešno'.</p>
        <ul class="bullets">
          <li data-sr="signal: URL portala se razlikuje od zvaničnog — proveriti pažljivo adresnu traku." data-en="signal: the portal URL differs from the official one — check the address bar carefully.">signal: URL portala se razlikuje od zvaničnog — proveriti pažljivo adresnu traku.</li>
          <li data-sr="signal: zvanični portal za kazne nema odbrojavajući popust za hitnu uplatu." data-en="signal: the official fines portal does not have a countdown discount for immediate payment.">signal: zvanični portal za kazne nema odbrojavajući popust za hitnu uplatu.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="toll-road-scam.html" data-sr="Prevare s lažnim putarinama" data-en="Fake toll road scams">Prevare s lažnim putarinama</a></li>
            <li><a href="parking-qr-scam.html" data-sr="Lažni QR kodovi na parkiralištima" data-en="Fake parking QR code scams">Lažni QR kodovi na parkiralištima</a></li>
          </ul>
        </div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Krađa karticnih podataka" data-en="Phase 3 — Card data theft">Faza 3 — Krađa karticnih podataka</h3>
        <p data-sr="Karticni podaci se koriste za neovlašćene transakcije, prodaju na crnom tržištu ili kreiranje virtuelnih kopija kartice. Meta saznaje o krađi tek iz bankovnih obaveštenja o nepoznatim transakcijama." data-en="Card data is used for unauthorized transactions, sale on the black market, or creation of virtual card copies. The target discovers the theft only from bank notifications about unknown transactions.">Karticni podaci se koriste za neovlašćene transakcije. Meta saznaje o krađi iz bankovnih obaveštenja.</p>
        <div class="callout" data-sr="<strong>Akcija:</strong> ako su karticni podaci uneti na sumnjivom portalu, odmah blokiraj karticu u mobilnoj aplikaciji banke ili pozvi kol centar banke." data-en="<strong>Action:</strong> if card data was entered on a suspicious portal, immediately block the card in the bank's mobile app or call the bank's call center."><strong>Akcija:</strong> ako su karticni podaci uneti na sumnjivom portalu, odmah blokiraj karticu u mobilnoj aplikaciji banke ili pozvi kol centar banke.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 4 — Provera kazne i nestajanje" data-en="Phase 4 — Fine verification and disappearance">Faza 4 — Provera kazne i nestajanje</h3>
        <p data-sr="Kada meta proveri kaznu u zvaničnom portalu za e-kazne ili kontaktira saobraćajnu policiju, saznaje da prekršaj ne postoji. Broj predmeta nije pravi, datum ne odgovara nijednom evidentiranom prekršaju u sistemu." data-en="When the target checks the fine on the official e-fines portal or contacts traffic police, they learn the violation does not exist. The case number is not real, the date does not correspond to any recorded violation in the system.">Kazna se ne može naći u e-kaznama ili policijskom sistemu. Broj predmeta je izmišljen.</p>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="kazna stiže SMS-om ili emailom, a ne preporučenom poštom na adresu registracije." data-en="fine arrives by SMS or email, not registered post to the registration address.">kazna stiže SMS-om ili emailom, a ne preporučenom poštom na adresu registracije.</li>
        <li data-sr="URL portala za uplatu se razlikuje od zvaničnog portala za kazne." data-en="payment portal URL differs from the official fines portal.">URL portala za uplatu se razlikuje od zvaničnog portala za kazne.</li>
        <li data-sr="portal traži sve karticne podatke (broj, CVV, datum) za plaćanje kazne." data-en="portal requests all card details (number, CVV, date) for fine payment.">portal traži sve karticne podatke (broj, CVV, datum) za plaćanje kazne.</li>
        <li data-sr="popust koji ističe — odbrojavanje za hitnu uplatu." data-en="expiring discount — countdown for immediate payment.">popust koji ističe — odbrojavanje za hitnu uplatu.</li>
        <li data-sr="kazna se ne može naći u zvaničnom e-portalu za pregled kazni." data-en="fine cannot be found in the official e-portal for checking fines.">kazna se ne može naći u zvaničnom e-portalu za pregled kazni.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 10 pitanja pre plaćanja kazne putem linka" data-en="Checklist: 10 questions before paying a fine via link">Checklista: 10 pitanja pre plaćanja kazne putem linka</h2>
      <ul class="bullets">
        <li data-sr="Da li se kazna može naći u zvaničnom e-portalu pod navedenim brojem prekršaja?" data-en="Can the fine be found in the official e-portal under the cited violation number?">Da li se kazna može naći u zvaničnom e-portalu pod navedenim brojem prekršaja?</li>
        <li data-sr="Da li URL portala u linku identičan zvaničnoj domeni portala za kazne?" data-en="Is the portal URL in the link identical to the official fines portal domain?">Da li URL portala u linku identičan zvaničnoj domeni portala za kazne?</li>
        <li data-sr="Da li je kazna stigla poštom na registrovanu adresu, a ne samo SMS-om?" data-en="Did the fine arrive by post to the registered address, not only by SMS?">Da li je kazna stigla poštom na registrovanu adresu, a ne samo SMS-om?</li>
        <li data-sr="Da li kazna ima odgovarajući pečat i zvanični potpis na fizičkom dokumentu?" data-en="Does the fine have an appropriate stamp and official signature on the physical document?">Da li kazna ima odgovarajući pečat i zvanični potpis na fizičkom dokumentu?</li>
        <li data-sr="Da li portal za kazne zaista traži sve karticne podatke uključujući CVV?" data-en="Does the fines portal actually request all card details including CVV?">Da li portal za kazne zaista traži sve karticne podatke uključujući CVV?</li>
        <li data-sr="Da li datum prekršaja odgovara nekom konkretnom saobraćajnom ili komunalnom incidentu?" data-en="Does the violation date correspond to a specific traffic or communal incident?">Da li datum prekršaja odgovara nekom konkretnom saobraćajnom ili komunalnom incidentu?</li>
        <li data-sr="Da li SMS dolazi od zvaničnog broja organa ili od privatnog broja?" data-en="Does the SMS come from the authority's official number or a private number?">Da li SMS dolazi od zvaničnog broja organa ili od privatnog broja?</li>
        <li data-sr="Da li je moguće pozvati saobraćajnu policiju i proveriti broj prekršaja?" data-en="Is it possible to call the traffic police and verify the violation number?">Da li je moguće pozvati saobraćajnu policiju i proveriti broj prekršaja?</li>
        <li data-sr="Da li postoji „popust“ koji ističe u roku od nekoliko sati za hitnu uplatu?" data-en="Is there a discount expiring within a few hours for immediate payment?">Da li postoji 'popust' koji ističe u roku od nekoliko sati za hitnu uplatu?</li>
        <li data-sr="Da li je ista vrsta kazne stigla ranije na isti broj telefona ili adresu?" data-en="Has the same type of fine previously arrived to the same phone number or address?">Da li je ista vrsta kazne stigla ranije na isti broj telefona ili adresu?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="ne klikaj link — proveri kaznu direktno u zvaničnom e-portalu za kazne." data-en="do not click the link — verify the fine directly in the official e-fines portal.">ne klikaj link — proveri kaznu direktno u zvaničnom e-portalu za kazne.</li>
        <li data-sr="pozovi saobraćajnu policiju ili komunalnu inspekciju i pitaj za broj prekršaja." data-en="call the traffic police or municipal inspection and ask about the violation number.">pozovi saobraćajnu policiju ili komunalnu inspekciju i pitaj za broj prekršaja.</li>
        <li data-sr="ako si uneo karticne podatke, odmah blokiraj karticu u aplikaciji banke." data-en="if you entered card data, immediately block the card in the bank's app.">ako si uneo karticne podatke, odmah blokiraj karticu u aplikaciji banke.</li>
        <li data-sr="sačuvaj SMS ili email poruku kao dokaz i prijavi incident policiji." data-en="save the SMS or email as evidence and report the incident to police.">sačuvaj SMS ili email poruku kao dokaz i prijavi incident policiji.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li smo proverili kaznu u zvaničnom e-portalu?" data-en="Have we checked the fine in the official e-portal?">Da li smo proverili kaznu u zvaničnom e-portalu?</li>
            <li data-sr="Da li URL portala identičan zvaničnom?" data-en="Is the portal URL identical to the official one?">Da li URL portala identičan zvaničnom?</li>
            <li data-sr="Da li su karticni podaci već uneti?" data-en="Have card details already been entered?">Da li su karticni podaci već uneti?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Zvanična kazna stiže poštom na registrovanu adresu — ne SMS-om s linkom." data-en="An official fine arrives by post to the registered address — not by SMS with a link.">Zvanična kazna stiže poštom na registrovanu adresu — ne SMS-om s linkom.</li>
            <li data-sr="Hajde da proverimo broj kazne u e-portalu pre nego što kliknemo išta." data-en="Let's check the fine number in the e-portal before clicking anything.">Hajde da proverimo broj kazne u e-portalu pre nego što kliknemo išta.</li>
            <li data-sr="Ako su podaci kartice uneseni, banka mora biti obaveštena odmah." data-en="If card data was entered, the bank must be notified immediately.">Ako su podaci kartice uneseni, banka mora biti obaveštena odmah.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card sources" id="sources">
      <h2 data-sr="Povezane prevare" data-en="Related scams">Povezane prevare</h2>
      <ul class="bullets">
        <li><a href="government-impersonation.html" data-sr="Lažno predstavljanje državnih organa" data-en="Government impersonation scams">Lažno predstavljanje državnih organa</a></li>
        <li><a href="police-impersonation.html" data-sr="Lažno predstavljanje policije" data-en="Police impersonation scams">Lažno predstavljanje policije</a></li>
        <li><a href="toll-road-scam.html" data-sr="Prevare s lažnim putarinama" data-en="Fake toll road scams">Prevare s lažnim putarinama</a></li>
        <li><a href="parking-qr-scam.html" data-sr="Lažni QR kodovi na parkiralištima" data-en="Fake parking QR code scams">Lažni QR kodovi na parkiralištima</a></li>
        <li><a href="smishing.html" data-sr="Smišing" data-en="Smishing">Smišing</a></li>
      </ul>
    </section>
  `
};
