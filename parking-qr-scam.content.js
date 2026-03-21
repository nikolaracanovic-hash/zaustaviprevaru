window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["parking-qr-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako rade prevare s lažnim QR kodovima na parkiralištima" data-en="Introduction: how fake parking QR code scams work">Uvod: kako rade prevare s lažnim QR kodovima na parkiralištima</h2>
      <p data-sr="Prevarant lepi nalepnicu s lažnim QR kodom na parkomat. Skeniranje preusmerava na lažni parking portal koji krade karticne podatke." data-en="Fake QR codes on parking meters are a physical attack: the fraudster sticks a sticker with a fake QR code directly onto the parking meter or signs near the parking area. When a driver scans the code, they are redirected to a portal that imitates the official parking app. The portal requests card data for parking payment that is never registered in the system.">Prevarant lepi nalepnicu s lažnim QR kodom na parkomat. Skeniranje preusmerava na lažni parking portal koji krade karticne podatke.</p>
      <p data-sr="Vozači su navikli na QR plaćanje i ne proveravaju URL. Vremenski pritisak parkiranja smanjuje pažnju." data-en="The attack is effective because drivers are accustomed to QR codes for parking payment and do not check the URL of the portal that opens. The time pressure of parking — needing to park quickly — contributes to hurrying and reduces attention when entering data.">Vozači su navikli na QR plaćanje i ne proveravaju URL. Vremenski pritisak parkiranja smanjuje pažnju.</p>
      <div class="callout" data-sr="<strong>Model:</strong> nalepnica na parkometru → QR kod → lažni portal → unos podataka kartice → krađa karticnih podataka → neregistrovano parkiranje." data-en="<strong>Model:</strong> sticker on parking meter → QR code → fake portal → card data entry → card data theft → unregistered parking."><strong>Model:</strong> nalepnica na parkometru → QR kod → lažni portal → unos podataka kartice → krađa karticnih podataka → neregistrovano parkiranje.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> meta unese podatke platne kartice na lažnom portalu koji izgleda kao zvanična parking aplikacija." data-en="<strong>Threshold:</strong> the target enters payment card details on a fake portal that looks like the official parking app."><strong>Prag:</strong> meta unese podatke platne kartice na lažnom portalu koji izgleda kao zvanična parking aplikacija.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika QR prevare na parkingu" data-en="How it works: QR parking scam mechanics">Kako generalno radi: mehanika QR prevare na parkingu</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta čini lažni QR ubedljivim" data-en="What makes the fake QR convincing">Šta čini lažni QR ubedljivim</div>
          <ul class="bullets">
            <li data-sr="nalepnica izgleda kao zvanična i lepi se na vidljivo mesto na parkometru." data-en="the sticker looks official and is placed in a visible spot on the parking meter.">nalepnica izgleda kao zvanična i lepi se na vidljivo mesto na parkometru.</li>
            <li data-sr="lažni portal vizualno kopira zvaničnu parking aplikaciju ili web portal." data-en="the fake portal visually copies the official parking app or web portal.">lažni portal vizualno kopira zvaničnu parking aplikaciju ili web portal.</li>
            <li data-sr="portal može biti u srpskom jeziku s pravilnom terminologijom." data-en="the portal can be in Serbian with correct terminology.">portal može biti u srpskom jeziku s pravilnom terminologijom.</li>
            <li data-sr="kontekst parkinga stvara pritisak i smanjuje pažnju pri pregledu URL-a." data-en="the parking context creates pressure and reduces attention when reviewing the URL.">kontekst parkinga stvara pritisak i smanjuje pažnju pri pregledu URL-a.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Šta se dešava s karticnim podacima" data-en="What happens to card data">Šta se dešava s karticnim podacima</div>
          <ul class="bullets">
            <li data-sr="portal prikuplja broj kartice, CVV, datum isteka i ime vlasnika." data-en="the portal collects card number, CVV, expiry date, and cardholder name.">portal prikuplja broj kartice, CVV, datum isteka i ime vlasnika.</li>
            <li data-sr="parkiranje u stvarnosti nije plaćeno ni registrovano u zvaničnom sistemu." data-en="parking is not actually paid or registered in the official system.">parkiranje u stvarnosti nije plaćeno ni registrovano u zvaničnom sistemu.</li>
            <li data-sr="karticni podaci se odmah koriste za neovlašćene transakcije ili prodaju." data-en="card data is immediately used for unauthorized transactions or sale.">karticni podaci se odmah koriste za neovlašćene transakcije ili prodaju.</li>
            <li data-sr="vozač može dobiti i parking kaznu jer parkiranje nije registrovano." data-en="the driver may also receive a parking fine because parking was not registered.">vozač može dobiti i parking kaznu jer parkiranje nije registrovano.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)" data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Nalepnica na parkometru" data-en="Phase 1 — Sticker on parking meter">Faza 1 — Nalepnica na parkometru</h3>
        <p data-sr="Nalepnica s lažnim QR kodom se lepi na parkomat. Vozač koji žuri ne proverava autentičnost nalepnice." data-en="The fraudster places a sticker with a fake QR code on the parking meter or signs near the parking area. The sticker may be placed above the original QR code or where there is no QR code. The driver who scans it does not verify whether the sticker is original.">Nalepnica s lažnim QR kodom se lepi na parkomat. Vozač koji žuri ne proverava autentičnost nalepnice.</p>
        <ul class="bullets">
          <li data-sr="signal: nalepnica ima drugačiju teksturu ili je lepljiva na mestima gde originalni parkomat nema nalepnicu." data-en="signal: the sticker has a different texture or is sticky in places where the original meter has no sticker.">signal: nalepnica ima drugačiju teksturu ili je lepljiva na mestima gde originalni parkomat nema nalepnicu.</li>
          <li data-sr="signal: nalepnica pokriva deo originalnih instrukcija parkometra." data-en="signal: the sticker covers part of the parking meter's original instructions.">signal: nalepnica pokriva deo originalnih instrukcija parkometra.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> vozač skenira QR kod i otvori portal u pretraživaču." data-en="<strong>Threshold:</strong> the driver scans the QR code and opens the portal in the browser."><strong>Prag faze:</strong> vozač skenira QR kod i otvori portal u pretraživaču.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Lažni portal za plaćanje parkinga" data-en="Phase 2 — Fake parking payment portal">Faza 2 — Lažni portal za plaćanje parkinga</h3>
        <p data-sr="Portal kopira zvaničnu parking aplikaciju. Traži karticne podatke, prikazuje lažnu potvrdu. Parkiranje nije registrovano." data-en="The portal visually imitates the official parking app or city parking service. It requests card number, CVV, and expiry date. After entry, it shows a confirmation that parking has been paid. Parking is not actually registered.">Portal kopira zvaničnu parking aplikaciju. Traži karticne podatke, prikazuje lažnu potvrdu. Parkiranje nije registrovano.</p>
        <ul class="bullets">
          <li data-sr="signal: URL portala nije zvanična domena parking servisa." data-en="signal: the portal URL is not the parking service's official domain.">signal: URL portala nije zvanična domena parking servisa.</li>
          <li data-sr="signal: portal traži CVV koji je normalno nepotreban za plaćanje parkinga." data-en="signal: the portal requests CVV which is normally unnecessary for parking payment.">signal: portal traži CVV koji je normalno nepotreban za plaćanje parkinga.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="toll-road-scam.html" data-sr="Prevare s lažnim putarinama" data-en="Fake toll road scams">Prevare s lažnim putarinama</a></li>
            <li><a href="fake-fine-scam.html" data-sr="Lažne kazne i nalozi za plaćanje" data-en="Fake fines and payment orders">Lažne kazne i nalozi za plaćanje</a></li>
          </ul>
        </div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Neregistrovano parkiranje i kazna" data-en="Phase 3 — Unregistered parking and fine">Faza 3 — Neregistrovano parkiranje i kazna</h3>
        <p data-sr="Vozač dobija parking kaznu jer parkiranje nije registrovano. Banka šalje obaveštenje o nepoznatim transakcijama. Dvostruka šteta." data-en="The driver returns to the car and finds a fine because parking was not registered in the official system. The bank sends notifications of unknown transactions. The driver learns they were both scammed and received a fine.">Vozač dobija parking kaznu jer parkiranje nije registrovano. Banka šalje obaveštenje o nepoznatim transakcijama. Dvostruka šteta.</p>
        <div class="callout" data-sr="<strong>Akcija:</strong> odmah blokirati karticu u mobilnoj aplikaciji banke i prijaviti incident parking servisu i policiji." data-en="<strong>Action:</strong> immediately block the card in the bank's mobile app and report the incident to the parking service and police."><strong>Akcija:</strong> odmah blokirati karticu u mobilnoj aplikaciji banke i prijaviti incident parking servisu i policiji.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="nalepnica na parkometru izgleda kao da je lepljenja naknadno ili pokriva originalni sadržaj." data-en="sticker on the parking meter appears to have been stuck on later or covers original content.">nalepnica na parkometru izgleda kao da je lepljenja naknadno ili pokriva originalni sadržaj.</li>
        <li data-sr="URL portala koji se otvara nije zvanična domena parking servisa." data-en="URL of the portal that opens is not the parking service's official domain.">URL portala koji se otvara nije zvanična domena parking servisa.</li>
        <li data-sr="portal traži CVV karticne podatke za plaćanje parkinga." data-en="portal requests CVV card data for parking payment.">portal traži CVV karticne podatke za plaćanje parkinga.</li>
        <li data-sr="posle 'plaćanja' parkiranje nije vidljivo u aplikaciji parking servisa." data-en="after payment, parking is not visible in the parking service app.">posle 'plaćanja' parkiranje nije vidljivo u aplikaciji parking servisa.</li>
        <li data-sr="vozač dobija parking kaznu ubrzo posle QR plaćanja." data-en="driver receives a parking fine shortly after QR payment.">vozač dobija parking kaznu ubrzo posle QR plaćanja.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 10 pitanja pre skeniranja QR koda na parkingu" data-en="Checklist: 10 questions before scanning a parking QR code">Checklista: 10 pitanja pre skeniranja QR koda na parkingu</h2>
      <ul class="bullets">
        <li data-sr="Da li nalepnica s QR kodom izgleda originalno ili naknadno zalepljeno?" data-en="Does the QR sticker look original or subsequently applied?">Da li nalepnica s QR kodom izgleda originalno ili naknadno zalepljeno?</li>
        <li data-sr="Da li URL portala koji se otvara odgovara zvaničnoj domeni parking servisa?" data-en="Does the URL of the opened portal match the parking service's official domain?">Da li URL portala koji se otvara odgovara zvaničnoj domeni parking servisa?</li>
        <li data-sr="Da li portal traži CVV karticnih podataka za plaćanje parkinga?" data-en="Does the portal request CVV card data for parking payment?">Da li portal traži CVV karticnih podataka za plaćanje parkinga?</li>
        <li data-sr="Da li je moguće platiti parking gotovinom na parkometru umesto QR-om?" data-en="Is it possible to pay parking in cash at the meter instead of by QR?">Da li je moguće platiti parking gotovinom na parkometru umesto QR-om?</li>
        <li data-sr="Da li je moguće koristiti zvaničnu parking aplikaciju umesto skeniranja QR koda?" data-en="Is it possible to use the official parking app instead of scanning the QR code?">Da li je moguće koristiti zvaničnu parking aplikaciju umesto skeniranja QR koda?</li>
        <li data-sr="Da li posle plaćanja parkiranje bude vidljivo u zvaničnoj aplikaciji parking servisa?" data-en="After payment, is parking visible in the official parking service app?">Da li posle plaćanja parkiranje bude vidljivo u zvaničnoj aplikaciji parking servisa?</li>
        <li data-sr="Da li su na parkometru vidljivi tragovi da je nalepnica lepljena iznad originalnog sadržaja?" data-en="Are there visible signs on the meter that a sticker was applied over original content?">Da li su na parkometru vidljivi tragovi da je nalepnica lepljena iznad originalnog sadržaja?</li>
        <li data-sr="Da li parking lokacija koristi QR plaćanje ili ima drugačiji sistem (SMS, aplikacija)?" data-en="Does the parking location use QR payment or have a different system (SMS, app)?">Da li parking lokacija koristi QR plaćanje ili ima drugačiji sistem (SMS, aplikacija)?</li>
        <li data-sr="Da li je banka odmah obaveštena ako su karticni podaci uneti?" data-en="Was the bank immediately notified if card details were entered?">Da li je banka odmah obaveštena ako su karticni podaci uneti?</li>
        <li data-sr="Da li je incident prijavljen parking servisu i policiji?" data-en="Was the incident reported to the parking service and police?">Da li je incident prijavljen parking servisu i policiji?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="ne unosi karticne podatke dok ne proveris URL portala — mora biti zvanična domena parking servisa." data-en="do not enter card details until you verify the portal URL — it must be the parking service's official domain.">ne unosi karticne podatke dok ne proveris URL portala — mora biti zvanična domena parking servisa.</li>
        <li data-sr="plati parking gotovinom na parkometru ili kroz zvaničnu aplikaciju parking servisa." data-en="pay parking in cash at the meter or through the official parking service app.">plati parking gotovinom na parkometru ili kroz zvaničnu aplikaciju parking servisa.</li>
        <li data-sr="ako su karticni podaci uneti, odmah blokiraj karticu u mobilnoj aplikaciji banke." data-en="if card details were entered, immediately block the card in the bank's mobile app.">ako su karticni podaci uneti, odmah blokiraj karticu u mobilnoj aplikaciji banke.</li>
        <li data-sr="fotografiši lažnu nalepnicu i prijavi incident parking servisu i policiji." data-en="photograph the fake sticker and report the incident to the parking service and police.">fotografiši lažnu nalepnicu i prijavi incident parking servisu i policiji.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li je URL portala koji je otvoren bio zvanični domen parking servisa?" data-en="Was the URL of the opened portal the parking service's official domain?">Da li je URL portala koji je otvoren bio zvanični domen parking servisa?</li>
            <li data-sr="Da li je parkiranje registrovano u aplikaciji parking servisa posle plaćanja?" data-en="Was parking registered in the parking service app after payment?">Da li je parkiranje registrovano u aplikaciji parking servisa posle plaćanja?</li>
            <li data-sr="Da li je banka već obaveštena?" data-en="Has the bank already been notified?">Da li je banka već obaveštena?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Ako URL portala nije zvanični domen parking servisa, karticni podaci su kompromitovani." data-en="If the portal URL is not the parking service's official domain, card details are compromised.">Ako URL portala nije zvanični domen parking servisa, karticni podaci su kompromitovani.</li>
            <li data-sr="Banka mora biti obaveštena odmah — blokada kartice je brža od povraćaja ukradenih sredstava." data-en="The bank must be notified immediately — card blocking is faster than recovering stolen funds.">Banka mora biti obaveštena odmah — blokada kartice je brža od povraćaja ukradenih sredstava.</li>
            <li data-sr="Uvek proveri URL adresu portala pre unosa karticnih podataka na bilo kom mestu." data-en="Always verify the portal URL before entering card details anywhere.">Uvek proveri URL adresu portala pre unosa karticnih podataka na bilo kom mestu.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
