window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["quishing"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi QR fišing" data-en="Introduction: how quishing works">Uvod: kako radi QR fišing</h2>
      <p data-sr="QR fišing koristi naviku da se kod telefonom skenira bez čitanja adrese koja se otvara. Kod može stajati na plakatu, parking automatu, stolu u kafiću, imejlu, PDF-u ili nalepnici preko legitimnog koda. Kada se stranica otvori na telefonu, provera domena je još slabija nego na desktopu." data-en="Quishing relies on the habit of scanning a QR code without reading the address that opens. The code can appear on a poster, parking meter, cafe table, email, PDF, or sticker placed over a legitimate code. Once the page opens on a phone, domain checking is weaker than on desktop.">QR fišing koristi naviku da se kod telefonom skenira bez čitanja adrese koja se otvara. Kod može stajati na plakatu, parking automatu, stolu u kafiću, imejlu, PDF-u ili nalepnici preko legitimnog koda. Kada se stranica otvori na telefonu, provera domena je još slabija nego na desktopu.</p>
      <p data-sr="Ista infrastruktura služi za više ciljeva: krađu naloga, krađu kartičnih podataka, lažne potvrde uplata i preusmeravanje ka drugim prevarama. QR kod je samo ulaz. Šteta nastaje kada meta na telefonu uradi nešto što je trebalo proveriti kroz zvaničnu aplikaciju, ručno ukucan domen ili drugi kanal." data-en="The same infrastructure supports multiple goals: stealing accounts, stealing card data, triggering fake payment confirmations, and redirecting to other scams. The QR code is only the entry point. The damage happens when the target performs on the phone something that should have been verified through an official app, a typed domain, or another channel.">Ista infrastruktura služi za više ciljeva: krađu naloga, krađu kartičnih podataka, lažne potvrde uplata i preusmeravanje ka drugim prevarama. QR kod je samo ulaz. Šteta nastaje kada meta na telefonu uradi nešto što je trebalo proveriti kroz zvaničnu aplikaciju, ručno ukucan domen ili drugi kanal.</p>
      <div class="callout" data-sr="<strong>Model:</strong> QR kod u fizičkom ili digitalnom prostoru → skeniranje telefonom → lažna stranica → prag (prijava/uplata/potvrda) → takeover, naplata ili novo grananje." data-en="<strong>Model:</strong> QR code in a physical or digital space → phone scan → fake page → threshold (login/payment/approval) → takeover, charge, or further branching."><strong>Model:</strong> QR kod u fizičkom ili digitalnom prostoru → skeniranje telefonom → lažna stranica → prag (prijava/uplata/potvrda) → takeover, naplata ili novo grananje.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> meta otvori QR link i na telefonu unese podatke, plati, ili potvrdi radnju koja izgleda rutinski." data-en="<strong>Threshold:</strong> the target opens the QR-linked page and on the phone enters data, pays, or approves an action that looks routine."><strong>Prag:</strong> meta otvori QR link i na telefonu unese podatke, plati, ili potvrdi radnju koja izgleda rutinski.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: zašto QR kod prolazi" data-en="How it works: why QR codes get trusted">Kako generalno radi: zašto QR kod prolazi</h2>
      <p data-sr="QR kod izgleda kao neutralan tehnički alat. Ljudi ga povezuju sa menijima, parkingom, prijavom na događaj, Wi‑Fi mrežom, plaćanjem i preuzimanjem aplikacija. Zbog toga se proverava manje nego običan link u poruci. Napadač koristi taj kredit poverenja i prebaci metu direktno na ekran koji traži radnju." data-en="A QR code looks like a neutral technical tool. People associate it with menus, parking, event check-in, Wi-Fi access, payments, and app downloads. That is why it gets checked less than a regular link in a message. The attacker uses that trust credit and moves the target straight to a screen that requests action.">QR kod izgleda kao neutralan tehnički alat. Ljudi ga povezuju sa menijima, parkingom, prijavom na događaj, Wi‑Fi mrežom, plaćanjem i preuzimanjem aplikacija. Zbog toga se proverava manje nego običan link u poruci. Napadač koristi taj kredit poverenja i prebaci metu direktno na ekran koji traži radnju.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gradi poverenje" data-en="What builds trust">Šta gradi poverenje</div>
          <ul class="bullets">
            <li data-sr="Kod stoji na mestu koje izgleda legitimno: sto, vrata, kasa, plakat ili PDF dokument." data-en="The code sits in a place that looks legitimate: table, door, checkout area, poster, or PDF document.">Kod stoji na mestu koje izgleda legitimno: sto, vrata, kasa, plakat ili PDF dokument.</li>
            <li data-sr="Meta vidi logo, kratko objašnjenje i očekuje da kod samo ubrza rutinsku radnju." data-en="The target sees a logo, a short explanation, and expects the code to simply speed up a routine action.">Meta vidi logo, kratko objašnjenje i očekuje da kod samo ubrza rutinsku radnju.</li>
            <li data-sr="Telefon sakrije punu adresu i prikaže samo dugme za otvaranje." data-en="The phone hides the full address and shows only a button to open it.">Telefon sakrije punu adresu i prikaže samo dugme za otvaranje.</li>
            <li data-sr="Na telefonu se lakše prihvati kratak formular nego da se ručno proveri domen." data-en="On a phone it is easier to accept a short form than to manually verify the domain.">Na telefonu se lakše prihvati kratak formular nego da se ručno proveri domen.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Operativni cilj" data-en="Operational goal">Operativni cilj</div>
          <ul class="bullets">
            <li data-sr="Prebacivanje mete sa fizičkog ili vizuelnog poverenja na napadačev domen." data-en="Move the target from physical or visual trust to an attacker-controlled domain.">Prebacivanje mete sa fizičkog ili vizuelnog poverenja na napadačev domen.</li>
            <li data-sr="Traženje jedne kratke radnje koja deluje kao završetak procesa." data-en="Request one short action that feels like the end of the process.">Traženje jedne kratke radnje koja deluje kao završetak procesa.</li>
            <li data-sr="Korišćenje telefona kao okruženja gde je provera slabija, a brzina veća." data-en="Use the phone as an environment where verification is weaker and speed is higher.">Korišćenje telefona kao okruženja gde je provera slabija, a brzina veća.</li>
            <li data-sr="Uvođenje u fišing, lažno plaćanje ili preuzimanje naloga bez dodatnog ubeđivanja." data-en="Lead into phishing, fake payment, or account takeover without much persuasion.">Uvođenje u fišing, lažno plaćanje ili preuzimanje naloga bez dodatnog ubeđivanja.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching).">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Tok je često kratak i stane u nekoliko minuta: kod, skeniranje, lažna stranica, kratka radnja, posledica. Razlika je u mestu gde je kod postavljen i u tome šta stranica traži." data-en="The flow is often short and fits into minutes: code, scan, fake page, short action, consequence. The difference lies in where the code is placed and what the page requests.">Tok je često kratak i stane u nekoliko minuta: kod, skeniranje, lažna stranica, kratka radnja, posledica. Razlika je u mestu gde je kod postavljen i u tome šta stranica traži.</p>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Postavljanje koda u pravi kontekst" data-en="Phase 1 — Placing the code in the right context">Faza 1 — Postavljanje koda u pravi kontekst</h3>
        <p data-sr="Napadač bira mesto gde je QR kod već normalan deo ponašanja. To može biti nalepnica preko parking automata, sto u kafiću, letak za nagradnu igru, imejl sa QR kodom za verifikaciju, ili PDF dokument koji traži brzu potvrdu na telefonu." data-en="The attacker picks a place where a QR code is already normal behavior. It can be a sticker over a parking meter, a table in a cafe, a giveaway flyer, an email with a QR code for verification, or a PDF that asks for a quick confirmation on the phone.">Napadač bira mesto gde je QR kod već normalan deo ponašanja. To može biti nalepnica preko parking automata, sto u kafiću, letak za nagradnu igru, imejl sa QR kodom za verifikaciju, ili PDF dokument koji traži brzu potvrdu na telefonu.</p>
        <ul class="bullets">
          <li data-sr="Kod je postavljen tamo gde meta očekuje brzinu, ne proveru." data-en="The code is placed where the target expects speed, not verification.">Kod je postavljen tamo gde meta očekuje brzinu, ne proveru.</li>
          <li data-sr="Opis pored koda obično glumi rutinsku radnju: meni, parking, prijavu, uplatu ili potvrdu." data-en="The text next to the code usually mimics a routine action: menu, parking, check-in, payment, or confirmation.">Opis pored koda obično glumi rutinsku radnju: meni, parking, prijavu, uplatu ili potvrdu.</li>
          <li data-sr="Vizuelni identitet može da kopira lokal, događaj, kurira ili platni servis." data-en="The visual identity may copy a venue, event, courier, or payment service.">Vizuelni identitet može da kopira lokal, događaj, kurira ili platni servis.</li>
          <li data-sr="Meta nema osećaj da ulazi na nepoznat sajt, već da koristi prečicu." data-en="The target does not feel they are entering an unknown site, but simply using a shortcut.">Meta nema osećaj da ulazi na nepoznat sajt, već da koristi prečicu.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta skenira kod jer deluje kao deo normalne procedure." data-en="<strong>Threshold:</strong> the target scans the code because it looks like part of a normal procedure."><strong>Prag faze:</strong> meta skenira kod jer deluje kao deo normalne procedure.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Telefon otvara napadačev link" data-en="Phase 2 — The phone opens the attacker link">Faza 2 — Telefon otvara napadačev link</h3>
        <p data-sr="Posle skeniranja, meta najčešće vidi samo kratki preview ili odmah otvara browser. Na malom ekranu domen je manje upadljiv. Ako je kod u imejlu ili PDF-u, dodatni problem je što meta nema naviku da QR kod tretira kao link koji traži isti nivo opreza kao i poruka." data-en="After the scan, the target usually sees only a short preview or opens the browser immediately. On a small screen, the domain is less visible. If the code is in an email or PDF, another problem appears: people do not naturally treat a QR code as a link requiring the same caution as a message link.">Posle skeniranja, meta najčešće vidi samo kratki preview ili odmah otvara browser. Na malom ekranu domen je manje upadljiv. Ako je kod u imejlu ili PDF-u, dodatni problem je što meta nema naviku da QR kod tretira kao link koji traži isti nivo opreza kao i poruka.</p>
        <ul class="bullets">
          <li data-sr="Adresa je skraćena, sakrivena ili izgleda slično legitimnom domenu." data-en="The address is shortened, hidden, or looks similar to a legitimate domain.">Adresa je skraćena, sakrivena ili izgleda slično legitimnom domenu.</li>
          <li data-sr="Stranica se otvara na telefonu, pa je manje verovatno da će meta ručno preći na zvanični sajt." data-en="The page opens on the phone, so the target is less likely to switch manually to the official site.">Stranica se otvara na telefonu, pa je manje verovatno da će meta ručno preći na zvanični sajt.</li>
          <li data-sr="Ako je kod fizički postavljen, sama lokacija pojačava lažni osećaj legitimnosti." data-en="If the code is physically placed, the location itself strengthens the false sense of legitimacy.">Ako je kod fizički postavljen, sama lokacija pojačava lažni osećaj legitimnosti.</li>
          <li data-sr="Ako je kod u dokumentu, meta misli da izbegava ručno kucanje, a zapravo ulazi na napadačevu infrastrukturu." data-en="If the code is in a document, the target thinks they are avoiding manual typing while actually entering attacker infrastructure.">Ako je kod u dokumentu, meta misli da izbegava ručno kucanje, a zapravo ulazi na napadačevu infrastrukturu.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
            <li><a href="parking-qr-scam.html" data-sr="Lažni parking QR kod" data-en="Fake parking QR code scams">Lažni parking QR kod</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta nastavlja dalje bez ručne provere domena ili zvanične aplikacije." data-en="<strong>Threshold:</strong> the target continues without manually checking the domain or using the official app."><strong>Prag faze:</strong> meta nastavlja dalje bez ručne provere domena ili zvanične aplikacije.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Lažna stranica traži kratku radnju" data-en="Phase 3 — The fake page asks for one short action">Faza 3 — Lažna stranica traži kratku radnju</h3>
        <p data-sr="Stranica traži ono što odgovara kontekstu koda: prijavu na nalog, kartične podatke za sitnu uplatu, potvrdu identiteta, telefonski broj, ili odobrenje u aplikaciji. Ključ je da zahtev deluje mali u odnosu na situaciju. Meta misli da završava postupak, a zapravo prelazi prag." data-en="The page asks for what fits the code context: account login, card details for a small payment, identity confirmation, phone number, or approval in an app. The key is that the request feels small compared to the situation. The target thinks they are finishing the process while actually crossing the threshold.">Stranica traži ono što odgovara kontekstu koda: prijavu na nalog, kartične podatke za sitnu uplatu, potvrdu identiteta, telefonski broj, ili odobrenje u aplikaciji. Ključ je da zahtev deluje mali u odnosu na situaciju. Meta misli da završava postupak, a zapravo prelazi prag.</p>
        <ul class="bullets">
          <li data-sr="Traži se samo jedan kratak korak koji izgleda rutinski i bezopasno." data-en="Only one short step is requested, and it looks routine and harmless.">Traži se samo jedan kratak korak koji izgleda rutinski i bezopasno.</li>
          <li data-sr="Iznos uplate je mali ili je maskiran kao taksa, verifikacija ili doplata." data-en="The payment amount is small or masked as a fee, verification, or top-up.">Iznos uplate je mali ili je maskiran kao taksa, verifikacija ili doplata.</li>
          <li data-sr="Prijava izgleda isto kao legitimni portal, ali domen odstupa." data-en="The login looks the same as the legitimate portal, but the domain differs.">Prijava izgleda isto kao legitimni portal, ali domen odstupa.</li>
          <li data-sr="Telefon prikazuje sve u jednom uskom toku, pa nema mnogo prostora za zadršku." data-en="The phone shows everything in one narrow flow, leaving little room to pause.">Telefon prikazuje sve u jednom uskom toku, pa nema mnogo prostora za zadršku.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="fake-delivery.html" data-sr="Lažna dostava / kurir" data-en="Fake delivery / courier">Lažna dostava / kurir</a></li>
            <li><a href="qr-payment-scam.html" data-sr="QR payment prevara" data-en="QR payment scam">QR payment prevara</a></li>
            <li><a href="marketplace-scam.html" data-sr="Prevare na oglasnicima" data-en="Marketplace scams">Prevare na oglasnicima</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta unese podatke, plati ili potvrdi radnju koju nije proverila van QR toka." data-en="<strong>Threshold:</strong> the target enters data, pays, or approves an action that was never verified outside the QR flow."><strong>Prag faze:</strong> meta unese podatke, plati ili potvrdi radnju koju nije proverila van QR toka.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Prava posledica stiže u pozadini" data-en="Phase 4 — The real consequence happens in the background">Faza 4 — Prava posledica stiže u pozadini</h3>
        <p data-sr="Posle praga, šteta se vidi sa zakašnjenjem. Ako je unos bio login, kreće preuzimanje naloga. Ako je plaćanje, novac ide pogrešnom primaocu ili stižu nove naplate. Ako je potvrda u aplikaciji, ta potvrda je možda autorizovala sasvim drugu radnju nego što je meta mislila." data-en="After the threshold, the damage appears with delay. If the action was a login, account takeover begins. If it was a payment, money goes to the wrong recipient or further charges follow. If it was an in-app approval, that approval may have authorized a completely different action from what the target believed.">Posle praga, šteta se vidi sa zakašnjenjem. Ako je unos bio login, kreće preuzimanje naloga. Ako je plaćanje, novac ide pogrešnom primaocu ili stižu nove naplate. Ako je potvrda u aplikaciji, ta potvrda je možda autorizovala sasvim drugu radnju nego što je meta mislila.</p>
        <ul class="bullets">
          <li data-sr="Jedan QR kod može biti ulaz u više štetnih tokova, ne samo u jednu naplatu." data-en="One QR code can open several harmful flows, not just one charge.">Jedan QR kod može biti ulaz u više štetnih tokova, ne samo u jednu naplatu.</li>
          <li data-sr="Meta često poveže incident sa kasnijom posledicom tek kada bude kasno." data-en="The target often connects the incident with the later consequence only when it is too late.">Meta često poveže incident sa kasnijom posledicom tek kada bude kasno.</li>
          <li data-sr="Ako je u pitanju nalog, napadač može menjati podatke za oporavak i širiti napad dalje." data-en="If an account is involved, the attacker can change recovery data and spread the attack further.">Ako je u pitanju nalog, napadač može menjati podatke za oporavak i širiti napad dalje.</li>
          <li data-sr="Ako je u pitanju kartica, slede nove sitne ili veće naplate bez veze sa prvobitnim kontekstom." data-en="If a card is involved, new small or larger charges follow with no link to the original context.">Ako je u pitanju kartica, slede nove sitne ili veće naplate bez veze sa prvobitnim kontekstom.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> posledica postaje realna tek kada napadač iskoristi unos, uplatu ili potvrdu." data-en="<strong>Threshold:</strong> the consequence becomes real when the attacker uses the entered data, payment, or approval."><strong>Prag faze:</strong> posledica postaje realna tek kada napadač iskoristi unos, uplatu ili potvrdu.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Serija novih zahteva" data-en="Phase 5 — A series of new demands">Faza 5 — Serija novih zahteva</h3>
        <p data-sr="Ako meta ne prepozna prvi signal, tok se produžava. Pojavljuju se nove takse, poruke o neuspeloj verifikaciji, nova stranica za potvrdu, ili poziv podrške koji objašnjava kako da se problem završi. QR ulaz se tada pretvara u klasičnu fišing ili advance-fee seriju." data-en="If the target misses the first signal, the flow gets extended. New fees appear, messages about failed verification arrive, another confirmation page is shown, or a support call explains how to complete the issue. At that point the QR entry turns into a classic phishing or advance-fee series.">Ako meta ne prepozna prvi signal, tok se produžava. Pojavljuju se nove takse, poruke o neuspeloj verifikaciji, nova stranica za potvrdu, ili poziv podrške koji objašnjava kako da se problem završi. QR ulaz se tada pretvara u klasičnu fišing ili advance-fee seriju.</p>
        <ul class="bullets">
          <li data-sr="Nova poruka glumi da prethodni korak nije uspeo i traži još jednu radnju." data-en="A new message pretends the previous step failed and asks for one more action.">Nova poruka glumi da prethodni korak nije uspeo i traži još jednu radnju.</li>
          <li data-sr="Uvedu se dodatne takse, rokovi ili tehnička potvrda." data-en="Additional fees, deadlines, or technical confirmation get introduced.">Uvedu se dodatne takse, rokovi ili tehnička potvrda.</li>
          <li data-sr="Poziv ili chat služi da zadrži metu u istom tunelu brzine." data-en="A call or chat is used to keep the target in the same speed tunnel.">Poziv ili chat služi da zadrži metu u istom tunelu brzine.</li>
          <li data-sr="Meta pokušava da popravi prvi korak, a time otvara još veću štetu." data-en="The target tries to fix the first step and opens even more damage.">Meta pokušava da popravi prvi korak, a time otvara još veću štetu.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="fake-call-scam.html" data-sr="Lažni pozivi" data-en="Fake calls">Lažni pozivi</a></li>
            <li><a href="advance-fee-fraud.html" data-sr="Uplata unapred" data-en="Advance-fee fraud">Uplata unapred</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta ostane u procesu i pokuša da završi problem umesto da preseče tok." data-en="<strong>Threshold:</strong> the target stays inside the process and tries to finish the issue instead of cutting the flow."><strong>Prag faze:</strong> meta ostane u procesu i pokuša da završi problem umesto da preseče tok.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Drugi napad posle prvog incidenta" data-en="Phase 6 — A second attack after the first incident">Faza 6 — Drugi napad posle prvog incidenta</h3>
        <p data-sr="Posle gubitka mogu stići ponude za povraćaj, ponovnu verifikaciju ili ispravku pogrešne uplate. To nije popravka prvog incidenta, već novi napad na istu metu. Napadač računa na to da osoba želi brzo rešenje i da još nije potpuno shvatila gde je problem nastao." data-en="After the loss, offers may appear for recovery, re-verification, or correcting the wrong payment. That is not repair of the first incident but a second attack on the same target. The attacker counts on the person wanting a quick fix and still not fully understanding where the problem started.">Posle gubitka mogu stići ponude za povraćaj, ponovnu verifikaciju ili ispravku pogrešne uplate. To nije popravka prvog incidenta, već novi napad na istu metu. Napadač računa na to da osoba želi brzo rešenje i da još nije potpuno shvatila gde je problem nastao.</p>
        <ul class="bullets">
          <li data-sr="Poruke o povraćaju obično opet traže link, uplatu ili podatke." data-en="Recovery messages usually ask again for a link click, payment, or data.">Poruke o povraćaju obično opet traže link, uplatu ili podatke.</li>
          <li data-sr="Pravi fokus više nije QR kod, već iskorišćavanje stresa posle greške." data-en="The real focus is no longer the QR code but the stress after the mistake.">Pravi fokus više nije QR kod, već iskorišćavanje stresa posle greške.</li>
          <li data-sr="Meta misli da ispravlja incident, a zapravo pravi novu autorizaciju ili novu uplatu." data-en="The target thinks they are correcting the incident while actually making a new approval or a new payment.">Meta misli da ispravlja incident, a zapravo pravi novu autorizaciju ili novu uplatu.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> svaka ponuda za brz povraćaj kroz novi link ili novu uplatu tretira se kao novi rizik." data-en="<strong>Threshold:</strong> every offer of quick recovery through a new link or payment should be treated as a new risk."><strong>Prag faze:</strong> svaka ponuda za brz povraćaj kroz novi link ili novu uplatu tretira se kao novi rizik.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="QR kod je zalepljen preko postojećeg koda ili deluje naknadno dodato." data-en="The QR code is placed over an existing code or looks added later.">QR kod je zalepljen preko postojećeg koda ili deluje naknadno dodato.</li>
        <li data-sr="Kod vodi na domen koji nema vezu sa lokalom, institucijom ili servisom." data-en="The code leads to a domain unrelated to the venue, institution, or service.">Kod vodi na domen koji nema vezu sa lokalom, institucijom ili servisom.</li>
        <li data-sr="Na telefonu se odmah traže login podaci, kartica ili broj telefona." data-en="The phone page immediately asks for login details, card data, or a phone number.">Na telefonu se odmah traže login podaci, kartica ili broj telefona.</li>
        <li data-sr="Mala uplata je maskirana kao obavezna doplata, taksa ili potvrda." data-en="A small payment is masked as a required top-up, fee, or confirmation.">Mala uplata je maskirana kao obavezna doplata, taksa ili potvrda.</li>
        <li data-sr="QR kod iz imejla ili PDF-a traži da na telefonu potvrdiš nalog." data-en="A QR code in an email or PDF asks you to confirm the account on your phone.">QR kod iz imejla ili PDF-a traži da na telefonu potvrdiš nalog.</li>
        <li data-sr="Stranica ne otvara zvaničnu aplikaciju već browser sa čudnim domenom." data-en="The page does not open the official app but a browser page with a strange domain.">Stranica ne otvara zvaničnu aplikaciju već browser sa čudnim domenom.</li>
        <li data-sr="Fizički kontekst deluje uverljivo, ali uputstvo nema drugi trag legitimnosti." data-en="The physical context looks convincing, but the instruction has no other trace of legitimacy.">Fizički kontekst deluje uverljivo, ali uputstvo nema drugi trag legitimnosti.</li>
        <li data-sr="Posle prve radnje stiže još jedna verifikacija, još jedna taksa ili još jedan link." data-en="After the first action, another verification, fee, or link arrives.">Posle prve radnje stiže još jedna verifikacija, još jedna taksa ili još jedan link.</li>
        <li data-sr="Ne postoji jasan način da istu radnju uradiš kroz zvaničnu aplikaciju ili ručno ukucan sajt." data-en="There is no clear way to perform the same action through the official app or a typed website.">Ne postoji jasan način da istu radnju uradiš kroz zvaničnu aplikaciju ili ručno ukucan sajt.</li>
        <li data-sr="QR kod koristi hitnost: odmah skeniraj, rok ističe, potvrdi sada." data-en="The QR code flow uses urgency: scan now, deadline expires, confirm now.">QR kod koristi hitnost: odmah skeniraj, rok ističe, potvrdi sada.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <ol class="steps">
        <li data-sr="Pre skeniranja pogledaj da li kod deluje nalepljeno preko drugog koda." data-en="Before scanning, check whether the code looks pasted over another code.">Pre skeniranja pogledaj da li kod deluje nalepljeno preko drugog koda.</li>
        <li data-sr="Ako telefon pokaže preview adrese, pročitaj domen pre otvaranja." data-en="If the phone shows an address preview, read the domain before opening it.">Ako telefon pokaže preview adrese, pročitaj domen pre otvaranja.</li>
        <li data-sr="Za plaćanje ili prijavu koristi zvaničnu aplikaciju kad god postoji." data-en="Use the official app for payments or logins whenever it exists.">Za plaćanje ili prijavu koristi zvaničnu aplikaciju kad god postoji.</li>
        <li data-sr="Ako je kod u imejlu ili PDF-u, tretiraj ga kao običan link iz poruke." data-en="If the code is in an email or PDF, treat it like a regular message link.">Ako je kod u imejlu ili PDF-u, tretiraj ga kao običan link iz poruke.</li>
        <li data-sr="Nemoj unositi karticu ili lozinku na stranici koju si otvorio isključivo skeniranjem." data-en="Do not enter a card or password on a page opened only by scanning.">Nemoj unositi karticu ili lozinku na stranici koju si otvorio isključivo skeniranjem.</li>
        <li data-sr="Ako je QR kod na parkingu, meniju ili plakatu, proveri da li postoji i drugi zvanični kanal za istu radnju." data-en="If the QR code is on parking, a menu, or a poster, check whether another official channel exists for the same action.">Ako je QR kod na parkingu, meniju ili plakatu, proveri da li postoji i drugi zvanični kanal za istu radnju.</li>
        <li data-sr="Ako stranica traži dodatnu potvrdu u aplikaciji, zaustavi se i proveri šta se tačno odobrava." data-en="If the page leads to an in-app approval, stop and verify exactly what is being approved.">Ako stranica traži dodatnu potvrdu u aplikaciji, zaustavi se i proveri šta se tačno odobrava.</li>
        <li data-sr="Kad god sumnjaš, zatvori browser i ručno ukucaj zvanični domen." data-en="Whenever in doubt, close the browser and type the official domain manually.">Kad god sumnjaš, zatvori browser i ručno ukucaj zvanični domen.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja pre skeniranja ili potvrde" data-en="Checklist: 12 questions before scanning or confirming">Checklista: 12 pitanja pre skeniranja ili potvrde</h2>
      <ul class="bullets">
        <li data-sr="Da li znam ko je postavio ovaj QR kod?" data-en="Do I know who placed this QR code?">Da li znam ko je postavio ovaj QR kod?</li>
        <li data-sr="Da li kod deluje zalepljeno ili naknadno dodato?" data-en="Does the code look pasted on or added later?">Da li kod deluje zalepljeno ili naknadno dodato?</li>
        <li data-sr="Da li ista radnja postoji kroz zvaničnu aplikaciju ili ručno ukucan sajt?" data-en="Can I do the same action through the official app or a typed website?">Da li ista radnja postoji kroz zvaničnu aplikaciju ili ručno ukucan sajt?</li>
        <li data-sr="Da li preview adrese odgovara brendu ili instituciji koju očekujem?" data-en="Does the address preview match the brand or institution I expect?">Da li preview adrese odgovara brendu ili instituciji koju očekujem?</li>
        <li data-sr="Da li se od mene traži login koji inače ne ide kroz QR kod?" data-en="Am I being asked for a login that normally would not happen through a QR code?">Da li se od mene traži login koji inače ne ide kroz QR kod?</li>
        <li data-sr="Da li se traži kartica za sitan iznos koji nema smisla?" data-en="Is a card being requested for a small amount that does not make sense?">Da li se traži kartica za sitan iznos koji nema smisla?</li>
        <li data-sr="Da li QR kod dolazi iz imejla ili PDF-a koji već koristi hitnost?" data-en="Does the QR code come from an email or PDF that already uses urgency?">Da li QR kod dolazi iz imejla ili PDF-a koji već koristi hitnost?</li>
        <li data-sr="Da li mogu da završim postupak bez skeniranja, kroz drugi kanal?" data-en="Can I complete the process without scanning, through another channel?">Da li mogu da završim postupak bez skeniranja, kroz drugi kanal?</li>
        <li data-sr="Da li stranica traži više podataka nego što je logično za taj kontekst?" data-en="Does the page ask for more data than makes sense in that context?">Da li stranica traži više podataka nego što je logično za taj kontekst?</li>
        <li data-sr="Da li se traži potvrda u bankarskoj ili drugoj aplikaciji bez jasnog objašnjenja?" data-en="Is an approval requested in a banking or other app without a clear explanation?">Da li se traži potvrda u bankarskoj ili drugoj aplikaciji bez jasnog objašnjenja?</li>
        <li data-sr="Da li posle prvog koraka stiže drugi link ili nova taksa?" data-en="After the first step, does another link or fee appear?">Da li posle prvog koraka stiže drugi link ili nova taksa?</li>
        <li data-sr="Da li bih isto uradio da sam ručno video punu adresu pre otvaranja?" data-en="Would I do the same thing if I had seen the full address before opening it?">Da li bih isto uradio da sam ručno video punu adresu pre otvaranja?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Zatvori stranicu i nemoj ponavljati skeniranje ili unos." data-en="Close the page and do not repeat the scan or the entry.">Zatvori stranicu i nemoj ponavljati skeniranje ili unos.</li>
        <li data-sr="Ako si uneo lozinku, promeni je kroz zvanični kanal i proveri aktivne sesije." data-en="If you entered a password, change it through the official channel and review active sessions.">Ako si uneo lozinku, promeni je kroz zvanični kanal i proveri aktivne sesije.</li>
        <li data-sr="Ako si uneo karticu ili platio, kontaktiraj banku i proveri transakcije." data-en="If you entered card data or paid, contact the bank and review transactions.">Ako si uneo karticu ili platio, kontaktiraj banku i proveri transakcije.</li>
        <li data-sr="Sačuvaj fotografiju koda, lokaciju, poruku ili dokument iz kog je kod došao." data-en="Save a photo of the code, the location, or the message or document that contained it.">Sačuvaj fotografiju koda, lokaciju, poruku ili dokument iz kog je kod došao.</li>
        <li data-sr="Dalju komunikaciju vodi samo kroz zvaničan kanal, ne kroz novi QR ili novi link." data-en="Continue only through the official channel, not through another QR code or another link.">Dalju komunikaciju vodi samo kroz zvaničan kanal, ne kroz novi QR ili novi link.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li možeš da pokažeš gde je QR kod stajao i koji domen je otvorio?" data-en="Can you show where the QR code was placed and which domain it opened?">Da li možeš da pokažeš gde je QR kod stajao i koji domen je otvorio?</li>
            <li data-sr="Da li ista radnja postoji kroz zvaničnu aplikaciju ili sajt?" data-en="Does the same action exist through the official app or website?">Da li ista radnja postoji kroz zvaničnu aplikaciju ili sajt?</li>
            <li data-sr="Da li si posle skeniranja unosio lozinku, karticu ili potvrdio nešto u aplikaciji?" data-en="After scanning, did you enter a password, card data, or approve something in an app?">Da li si posle skeniranja unosio lozinku, karticu ili potvrdio nešto u aplikaciji?</li>
            <li data-sr="Da li se posle prvog koraka pojavio još jedan link, poziv ili nova taksa?" data-en="After the first step, did another link, call, or fee appear?">Da li se posle prvog koraka pojavio još jedan link, poziv ili nova taksa?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Hajde da isti postupak proverimo kroz zvaničnu aplikaciju, bez QR koda." data-en="Let’s verify the same process through the official app, without the QR code.">Hajde da isti postupak proverimo kroz zvaničnu aplikaciju, bez QR koda.</li>
            <li data-sr="QR kod je samo prečica, nije dokaz da je strana legitimna." data-en="A QR code is only a shortcut, not proof that the page is legitimate.">QR kod je samo prečica, nije dokaz da je strana legitimna.</li>
            <li data-sr="Ako postoji sumnja, ručno kucan domen je bezbedniji od ponovnog skeniranja." data-en="If there is doubt, a typed domain is safer than scanning again.">Ako postoji sumnja, ručno kucan domen je bezbedniji od ponovnog skeniranja.</li>
            <li data-sr="Prvo čuvamo dokaz i proveravamo naloge, pa tek onda rešavamo ostatak." data-en="First we save the evidence and check the accounts, then we handle the rest.">Prvo čuvamo dokaz i proveravamo naloge, pa tek onda rešavamo ostatak.</li>
          </ul>
        </div>
      </div>
    </section>
`
};
