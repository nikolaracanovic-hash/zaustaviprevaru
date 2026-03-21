window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["toll-road-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako rade prevare s lažnim putarinama" data-en="Introduction: how fake toll road scams work">Uvod: kako rade prevare s lažnim putarinama</h2>
      <p data-sr="Masovni SMS napad: neplaćena putarina, link ka lažnom portalu. Kartica se podnosi za simboličan iznos ali se krade za kasniju zloupotrebu." data-en="Fake toll road scams are a mass smishing attack: victims receive an SMS or email claiming their vehicle has an unpaid toll. The message includes a link to a fake portal imitating the official toll payment system. The portal requests card details for a symbolic amount — but steals all card data for later misuse.">Masovni SMS napad: neplaćena putarina, link ka lažnom portalu. Kartica se podnosi za simboličan iznos ali se krade za kasniju zloupotrebu.</p>
      <p data-sr="Napad koristi stvarnu sumnju vozača da možda nisi platio putarinu. Procenat kliktanja je visok upravo zbog te nesigurnosti." data-en="The attack exploits widespread electronic toll practice and knowledge that many drivers have passed through a toll without paying (from habit on a formerly free highway, forgetting, or not knowing payment is required). That element of doubt increases the percentage of link clicks.">Napad koristi stvarnu sumnju vozača da možda nisi platio putarinu. Procenat kliktanja je visok upravo zbog te nesigurnosti.</p>
      <div class="callout" data-sr="<strong>Model:</strong> SMS ili email → putarinska agencija → neplaćena putarina + mali iznos → link → lažni portal → karticni podaci → krađa." data-en="<strong>Model:</strong> SMS or email → toll authority → unpaid toll + small amount → link → fake portal → card data → theft."><strong>Model:</strong> SMS ili email → putarinska agencija → neplaćena putarina + mali iznos → link → lažni portal → karticni podaci → krađa.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> meta klikne link iz SMS-a ili emaila i dođe do lažnog portala za plaćanje putarine." data-en="<strong>Threshold:</strong> the target clicks the link in an SMS or email and reaches a fake toll payment portal."><strong>Prag:</strong> meta klikne link iz SMS-a ili emaila i dođe do lažnog portala za plaćanje putarine.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika putarinske prevare" data-en="How it works: toll scam mechanics">Kako generalno radi: mehanika putarinske prevare</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta čini SMS ubedljivim" data-en="What makes the SMS convincing">Šta čini SMS ubedljivim</div>
          <ul class="bullets">
            <li data-sr="naziv putarinske agencije koji zvuči zvanično." data-en="toll agency name (ENC, HAC, ASFINAG) that sounds official.">naziv putarinske agencije koji zvuči zvanično.</li>
            <li data-sr="mali iznos putarine (2–5 evra) koji je lako platiti bez razmišljanja." data-en="small toll amount (2–5 euros) easy to pay without thinking.">mali iznos putarine (2–5 evra) koji je lako platiti bez razmišljanja.</li>
            <li data-sr="pretnja penalima ili blokadom registracije vozila ako se ne plati." data-en="threat of penalties or vehicle registration block if not paid.">pretnja penalima ili blokadom registracije vozila ako se ne plati.</li>
            <li data-sr="rok od 24–48 sati koji stvara pritisak za hitnim plaćanjem." data-en="24–48 hour deadline creating pressure for immediate payment.">rok od 24–48 sati koji stvara pritisak za hitnim plaćanjem.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Mehanika lažnog portala" data-en="Fake portal mechanics">Mehanika lažnog portala</div>
          <ul class="bullets">
            <li data-sr="portal imitira zvanični portal putarinske agencije vizualno i jezički." data-en="portal imitates the official toll agency portal visually and linguistically.">portal imitira zvanični portal putarinske agencije vizualno i jezički.</li>
            <li data-sr="URL se razlikuje od zvaničnog — dodat suffix, promenjeno slovo ili drugačiji TLD." data-en="URL differs from official — added suffix, changed letter, or different TLD.">URL se razlikuje od zvaničnog — dodat suffix, promenjeno slovo ili drugačiji TLD.</li>
            <li data-sr="portal prikuplja kompletne karticne podatke za simboličan iznos." data-en="portal collects complete card data for a symbolic amount.">portal prikuplja kompletne karticne podatke za simboličan iznos.</li>
            <li data-sr="posle unosa prikazuje se potvrda plaćanja — ali podaci su kompromitovani." data-en="after entry a payment confirmation is shown — but data is compromised.">posle unosa prikazuje se potvrda plaćanja — ali podaci su kompromitovani.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)" data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — SMS s neplaćenom putarinom" data-en="Phase 1 — SMS with unpaid toll">Faza 1 — SMS s neplaćenom putarinom</h3>
        <p data-sr="SMS s malim iznosom (2–5 evra), kratkim rokom i pretnjom. Dobro je formulisan i lako se zameni za legitiman." data-en="The target receives an SMS that looks like an unpaid toll notification. The amount is small (2–5 euros), the deadline is short, and the threat is a concrete legal problem. The message is well-written and hard to distinguish from legitimate toll notifications.">SMS s malim iznosom (2–5 evra), kratkim rokom i pretnjom. Dobro je formulisan i lako se zameni za legitiman.</p>
        <ul class="bullets">
          <li data-sr="signal: zvanična putarinska agencija ne šalje SMS-ove s direktnim linkovima za plaćanje." data-en="signal: official toll agencies do not send SMS with direct payment links.">signal: zvanična putarinska agencija ne šalje SMS-ove s direktnim linkovima za plaćanje.</li>
          <li data-sr="signal: SMS dolazi od privatnog broja ili kratkog koda koji nije registrovan za tu agenciju." data-en="signal: SMS comes from a private number or short code not registered for that agency.">signal: SMS dolazi od privatnog broja ili kratkog koda koji nije registrovan za tu agenciju.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta klikne link i otvori portal u pretraživaču." data-en="<strong>Threshold:</strong> the target clicks the link and opens the portal in the browser."><strong>Prag faze:</strong> meta klikne link i otvori portal u pretraživaču.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Lažni portal s karticnim podacima" data-en="Phase 2 — Fake portal with card data">Faza 2 — Lažni portal s karticnim podacima</h3>
        <p data-sr="Portal traži karticu za simboličan iznos. Logika: mali iznos ne izgleda opasno. Ali podaci se koriste za znatno veće transakcije." data-en="The portal requests card number, CVV, and expiry date for paying a symbolic amount. The logic is: if the amount is small (2–5 euros), perhaps there is no problem giving card details. But the data is used for transactions of much larger amounts.">Portal traži karticu za simboličan iznos. Logika: mali iznos ne izgleda opasno. Ali podaci se koriste za znatno veće transakcije.</p>
        <ul class="bullets">
          <li data-sr="signal: URL portala se razlikuje od zvaničnog — proveriti pažljivo adresnu traku." data-en="signal: the portal URL differs from the official one — check the address bar carefully.">signal: URL portala se razlikuje od zvaničnog — proveriti pažljivo adresnu traku.</li>
          <li data-sr="signal: plaćanje putarine od 2 evra zahteva iste karticne podatke kao i kupovina od 2000 evra." data-en="signal: paying a 2-euro toll requires the same card details as a 2000-euro purchase.">signal: plaćanje putarine od 2 evra zahteva iste karticne podatke kao i kupovina od 2000 evra.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="customs-fee-scam.html" data-sr="Lažne carine i taksene prevare" data-en="Fake customs fee scams">Lažne carine i taksene prevare</a></li>
            <li><a href="parking-qr-scam.html" data-sr="Lažni QR kodovi na parkiralištima" data-en="Fake parking QR code scams">Lažni QR kodovi na parkiralištima</a></li>
          </ul>
        </div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Krađa i neovlašćene transakcije" data-en="Phase 3 — Theft and unauthorized transactions">Faza 3 — Krađa i neovlašćene transakcije</h3>
        <p data-sr="Karticni podaci se koriste za veće transakcije. Putarina se ne može naći u agencijinom sistemu ili je odavno plaćena." data-en="Card data is used for transactions with amounts much larger than the toll paid. The bank sends notifications of unknown transactions. The target checks in the toll agency system and learns the toll actually does not exist or was long ago paid.">Karticni podaci se koriste za veće transakcije. Putarina se ne može naći u agencijinom sistemu ili je odavno plaćena.</p>
        <div class="callout" data-sr="<strong>Akcija:</strong> odmah blokirati karticu u aplikaciji banke i prijaviti incident putarinskoj agenciji i policiji." data-en="<strong>Action:</strong> immediately block the card in the bank app and report the incident to the toll agency and police."><strong>Akcija:</strong> odmah blokirati karticu u aplikaciji banke i prijaviti incident putarinskoj agenciji i policiji.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="SMS o neplaćenoj putarini s direktnim linkom za plaćanje." data-en="SMS about unpaid toll with a direct payment link.">SMS o neplaćenoj putarini s direktnim linkom za plaćanje.</li>
        <li data-sr="URL portala koji se otvara nije zvanična domena putarinske agencije." data-en="URL of the portal that opens is not the toll agency's official domain.">URL portala koji se otvara nije zvanična domena putarinske agencije.</li>
        <li data-sr="portal traži kompletne karticne podatke za simboličan iznos putarine." data-en="portal requests complete card details for a symbolic toll amount.">portal traži kompletne karticne podatke za simboličan iznos putarine.</li>
        <li data-sr="rok od 24h uz pretnju blokadom registracije vozila." data-en="24-hour deadline with threat of vehicle registration block.">rok od 24h uz pretnju blokadom registracije vozila.</li>
        <li data-sr="putarina se ne može naći u zvaničnom sistemu putarinske agencije." data-en="the toll cannot be found in the official toll agency system.">putarina se ne može naći u zvaničnom sistemu putarinske agencije.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 10 pitanja pre plaćanja putarine putem SMS linka" data-en="Checklist: 10 questions before paying a toll via SMS link">Checklista: 10 pitanja pre plaćanja putarine putem SMS linka</h2>
      <ul class="bullets">
        <li data-sr="Da li putarina postoji u zvaničnom sistemu putarinske agencije pod registarskim brojem vozila?" data-en="Does the toll exist in the official toll agency system under the vehicle's registration number?">Da li putarina postoji u zvaničnom sistemu putarinske agencije pod registarskim brojem vozila?</li>
        <li data-sr="Da li URL portala u linku identičan zvaničnoj domeni putarinske agencije?" data-en="Is the portal URL in the link identical to the official toll agency domain?">Da li URL portala u linku identičan zvaničnoj domeni putarinske agencije?</li>
        <li data-sr="Da li putarinska agencija zaista šalje SMS obaveštenja o neplaćenim putarinama?" data-en="Does the toll agency actually send SMS notifications about unpaid tolls?">Da li putarinska agencija zaista šalje SMS obaveštenja o neplaćenim putarinama?</li>
        <li data-sr="Da li SMS dolazi od zvaničnog broja ili kratkog koda koji je registrovan za agenciju?" data-en="Does the SMS come from an official number or short code registered for the agency?">Da li SMS dolazi od zvaničnog broja ili kratkog koda koji je registrovan za agenciju?</li>
        <li data-sr="Da li je vozilo prošlo putarinom u periodu koji se navodi u SMS-u?" data-en="Did the vehicle pass through a toll in the period mentioned in the SMS?">Da li je vozilo prošlo putarinom u periodu koji se navodi u SMS-u?</li>
        <li data-sr="Da li je plaćanje putarine moguće na zvaničnom portalu agencije bez SMS linka?" data-en="Is toll payment possible on the agency's official portal without the SMS link?">Da li je plaćanje putarine moguće na zvaničnom portalu agencije bez SMS linka?</li>
        <li data-sr="Da li portal traži CVV karticnih podataka za plaćanje simboličnog iznosa?" data-en="Does the portal request CVV card data for payment of a symbolic amount?">Da li portal traži CVV karticnih podataka za plaćanje simboličnog iznosa?</li>
        <li data-sr="Da li su slični SMS-ovi ranije stizali na ovaj broj?" data-en="Have similar SMS messages previously arrived at this number?">Da li su slični SMS-ovi ranije stizali na ovaj broj?</li>
        <li data-sr="Da li je banka obaveštena ako su karticni podaci uneti?" data-en="Was the bank notified if card details were entered?">Da li je banka obaveštena ako su karticni podaci uneti?</li>
        <li data-sr="Da li je incident prijavljen putarinskoj agenciji i policiji?" data-en="Was the incident reported to the toll agency and police?">Da li je incident prijavljen putarinskoj agenciji i policiji?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="ne klikaj link — proveri putarinu direktno na zvaničnom portalu agencije." data-en="do not click the link — verify the toll directly on the agency's official portal.">ne klikaj link — proveri putarinu direktno na zvaničnom portalu agencije.</li>
        <li data-sr="ako su karticni podaci uneti, odmah blokiraj karticu u aplikaciji banke." data-en="if card details were entered, immediately block the card in the bank app.">ako su karticni podaci uneti, odmah blokiraj karticu u aplikaciji banke.</li>
        <li data-sr="sačuvaj SMS kao dokaz i prijavi incident agenciji i policiji." data-en="save the SMS as evidence and report the incident to the agency and police.">sačuvaj SMS kao dokaz i prijavi incident agenciji i policiji.</li>
        <li data-sr="proveri da li je registracija vozila u sistemu agencije neaktivna ili blokirana." data-en="check whether the vehicle registration is inactive or blocked in the agency's system.">proveri da li je registracija vozila u sistemu agencije neaktivna ili blokirana.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li je putarina proverena na zvaničnom portalu agencije?" data-en="Was the toll verified on the agency's official portal?">Da li je putarina proverena na zvaničnom portalu agencije?</li>
            <li data-sr="Da li je URL portala u linku bio zvanični domen agencije?" data-en="Was the portal URL in the link the agency's official domain?">Da li je URL portala u linku bio zvanični domen agencije?</li>
            <li data-sr="Da li su karticni podaci već uneti?" data-en="Have card details already been entered?">Da li su karticni podaci već uneti?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Putarinska agencija ne šalje SMS s direktnim linkom za plaćanje — to je standardni napad." data-en="The toll agency does not send SMS with direct payment links — that is a standard attack.">Putarinska agencija ne šalje SMS s direktnim linkom za plaćanje — to je standardni napad.</li>
            <li data-sr="Hajde da proverimo putarinu na zvaničnom portalu pre nego što se uradi išta." data-en="Let's check the toll on the official portal before doing anything.">Hajde da proverimo putarinu na zvaničnom portalu pre nego što se uradi išta.</li>
            <li data-sr="Ako su karticni podaci uneti, banka mora biti obaveštena odmah." data-en="If card details were entered, the bank must be notified immediately.">Ako su karticni podaci uneti, banka mora biti obaveštena odmah.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
