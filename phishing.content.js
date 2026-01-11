window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["phishing"] = {
  raw_html: `
    <!-- 1) UVOD: ŠTA JE I KAKO GENERALNO RADI -->
    <section class="card">
      <h2 data-sr="Uvod: kako radi phishing" data-en="Introduction: how phishing works">
        Uvod: kako radi phishing
      </h2>

      <p
        data-sr="Phishing radi kao ulazni sistem: poruka glumi autoritet, link glumi zvaničan kanal, a forma glumi standardnu proceduru. Jednim klikom meta prelazi u okruženje koje kontroliše napadač. U tom okruženju meta sama predaje podatke ili potvrđuje radnju koja ima finansijsku posledicu. Šteta se obično završi u dve kategorije: (1) preuzimanje pristupa (email, lozinka, OTP, 2FA), (2) naplata ili preusmeravanje novca (kartica, „mala taksa“, promena podataka za uplatu, potvrda transfera)."
        data-en="Phishing is an entry system: the message impersonates authority, the link impersonates an official channel, and the form impersonates a standard procedure. One click moves the target into an attacker-controlled environment. Inside it, the target hands over data or confirms an action with financial consequences. Damage typically falls into two categories: (1) access takeover (email, password, OTP, 2FA), (2) charging or redirecting money (card, “small fee”, changing payout details, confirming a transfer)."
      >Phishing radi kao ulazni sistem: poruka glumi autoritet, link glumi zvaničan kanal, a forma glumi standardnu proceduru. Jednim klikom meta prelazi u okruženje koje kontroliše napadač. U tom okruženju meta sama predaje podatke ili potvrđuje radnju koja ima finansijsku posledicu. Šteta se obično završi u dve kategorije: (1) preuzimanje pristupa (email, lozinka, OTP, 2FA), (2) naplata ili preusmeravanje novca (kartica, „mala taksa“, promena podataka za uplatu, potvrda transfera).</p>

      <p
        data-sr="Mehanika se oslanja na refleks i naviku. Poruka izgleda kao deo rutine: „potvrdi nalog“, „resetuj lozinku“, „pogledaj dokument“, „prati pošiljku“, „plati carinu“, „proveri transakciju“. Cilj je brzina i automatizam, uz minimalan prostor za proveru domena i logike radnje. Najveća prednost phishinga nije dizajn stranice, već činjenica da meta u trenutku klika veruje da rešava rutinski problem."
        data-en="The mechanism relies on reflex and habit. The message looks routine: “confirm account”, “reset password”, “view document”, “track shipment”, “pay customs”, “verify transaction”. The goal is speed and autopilot with minimal time to verify the domain and the logic of the action. Phishing’s biggest advantage is not page design; it’s that at the click moment the target believes they are resolving a routine issue."
      >Mehanika se oslanja na refleks i naviku. Poruka izgleda kao deo rutine: „potvrdi nalog“, „resetuj lozinku“, „pogledaj dokument“, „prati pošiljku“, „plati carinu“, „proveri transakciju“. Cilj je brzina i automatizam, uz minimalan prostor za proveru domena i logike radnje. Najveća prednost phishinga nije dizajn stranice, već činjenica da meta u trenutku klika veruje da rešava rutinski problem.</p>

      <div class="callout"
        data-sr="<strong>Prag:</strong> unos kredencijala, kartice ili potvrda OTP koda. Pre praga postoji prostor za proveru domena i logike radnje. Posle praga napadač dobija pristup ili autorizaciju, pa tok prelazi u serijske posledice."
        data-en="<strong>Threshold:</strong> entering credentials, card details, or confirming an OTP. Before the threshold there is room to verify domain and logic. After it, the attacker gains access or authorization and the flow turns into cascading consequences."
      ><strong>Prag:</strong> unos kredencijala, kartice ili potvrda OTP koda. Pre praga postoji prostor za proveru domena i logike radnje. Posle praga napadač dobija pristup ili autorizaciju, pa tok prelazi u serijske posledice.</div>

      <div class="callout"
        data-sr="<strong>Model:</strong> poruka (autoritet + hitnost) → link/prilog → lažna stranica/forma → prag (unos/OTP/kartica) → takeover ili naplata → serijske posledice → eskalacija kroz poziv/takse → recovery talas"
        data-en="<strong>Model:</strong> message (authority + urgency) → link/attachment → fake page/form → threshold (entry/OTP/card) → takeover or charge → cascading consequences → escalation via calls/fees → recovery wave"
      ><strong>Model:</strong> poruka (autoritet + hitnost) → link/prilog → lažna stranica/forma → prag (unos/OTP/kartica) → takeover ili naplata → serijske posledice → eskalacija kroz poziv/takse → recovery talas</div>
    </section>

    <!-- 2) KAKO GENERALNO RADI: ULAZNI MEHANIZAM -->
    <section class="card">
      <h2 data-sr="Ulazni mehanizam: zašto prolazi" data-en="Entry mechanism: why it works">
        Ulazni mehanizam: zašto prolazi
      </h2>

      <p
        data-sr="Phishing kopira normalne navike: potvrde naloga, plaćanje sitnih troškova dostave, otvaranje dokumenata, reset lozinki, brza „bezbednosna“ potvrda. Poruka se postavlja kao rutinski sistemski korak, uz hitnost koja skraćuje proveru. Napadač ne mora da ubedi argumentima, dovoljno je da ubaci metu u tok gde klik deluje kao najkraći put ka rešenju."
        data-en="Phishing copies normal habits: account confirmations, paying small delivery fees, opening documents, password resets, quick “security” confirmations. The message frames itself as a routine system step with urgency that compresses verification. The attacker doesn’t need to persuade with arguments; it’s enough to push the target into a flow where clicking feels like the shortest path to resolution."
      >Phishing kopira normalne navike: potvrde naloga, plaćanje sitnih troškova dostave, otvaranje dokumenata, reset lozinki, brza „bezbednosna“ potvrda. Poruka se postavlja kao rutinski sistemski korak, uz hitnost koja skraćuje proveru. Napadač ne mora da ubedi argumentima, dovoljno je da ubaci metu u tok gde klik deluje kao najkraći put ka rešenju.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Elementi koji drže tok" data-en="Elements that hold the flow">
            Elementi koji drže tok
          </div>
          <ul class="bullets">
            <li data-sr="autoritet: banka, pošta, kurir, platforma, IT, institucija" data-en="authority: bank, post, courier, platform, IT, institution">autoritet: banka, pošta, kurir, platforma, IT, institucija</li>
            <li data-sr="hitnost: rok, blokada, „poslednja opomena“, „sumnjiva aktivnost“" data-en="urgency: deadline, lock, “final notice”, “suspicious activity”">hitnost: rok, blokada, „poslednja opomena“, „sumnjiva aktivnost“</li>
            <li data-sr="jedan korak: klik i forma sa malim naporom" data-en="one step: click + low-effort form">jedan korak: klik i forma sa malim naporom</li>
            <li data-sr="maskiranje rutine: poruka liči na svakodnevne obaveze" data-en="routine mask: the message resembles daily tasks">maskiranje rutine: poruka liči na svakodnevne obaveze</li>
            <li data-sr="prebacivanje odgovornosti: „sistem traži“, „pravila“, „procedura“" data-en="responsibility shifting: “system requires”, “rules”, “procedure”">prebacivanje odgovornosti: „sistem traži“, „pravila“, „procedura“</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Gde meta pravi grešku" data-en="Where targets fail">
            Gde meta pravi grešku
          </div>
          <ul class="bullets">
            <li data-sr="fokus na logo i dizajn umesto na domen" data-en="focus on logo/design instead of the domain">fokus na logo i dizajn umesto na domen</li>
            <li data-sr="prihvatanje hitnosti kao realne, bez potvrde kroz zvaničan kanal" data-en="accepting urgency as real without confirming via an official channel">prihvatanje hitnosti kao realne, bez potvrde kroz zvaničan kanal</li>
            <li data-sr="unos više podataka nego što radnja traži" data-en="entering more data than the action requires">unos više podataka nego što radnja traži</li>
            <li data-sr="OTP tretman kao „informacija“, a OTP je autorizacija" data-en="treating OTP as “information”, while OTP is authorization">OTP tretman kao „informacija“, a OTP je autorizacija</li>
          </ul>
        </div>
      </div>

      <div class="callout"
        data-sr="<strong>Tipičan promašaj:</strong> dizajn nosi masku, URL nosi istinu. Provera domena i logike radnje ima veću vrednost od „urednog izgleda“."
        data-en="<strong>Typical failure mode:</strong> design carries the mask; the URL carries truth. Checking the domain and action logic matters more than a “clean look”."
      ><strong>Tipičan promašaj:</strong> dizajn nosi masku, URL nosi istinu. Provera domena i logike radnje ima veću vrednost od „urednog izgleda“.</div>
    </section>

    <!-- 3) HRONOLOŠKI TOK (DETALJNO) + GRANANJA PO FAZAMA -->
    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching)">
        Hronološki tok (faze + grananja)
      </h2>

      <p class="muted"
        data-sr="Faze su kompresovane u minuti ili sate, ali obrazac ostaje stabilan: kontakt → automatizam → prelazak na lažnu stranicu → rok → prag → serijske posledice → pritisak → mutacije → recovery."
        data-en="Phases compress into minutes or hours, but the pattern stays stable: contact → autopilot → move to a fake page → deadline → threshold → cascading consequences → pressure → mutations → recovery."
      >Faze su kompresovane u minuti ili sate, ali obrazac ostaje stabilan: kontakt → automatizam → prelazak na lažnu stranicu → rok → prag → serijske posledice → pritisak → mutacije → recovery.</p>

      <!-- FAZA 1 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Kontakt (poruka)" data-en="Phase 1 — Contact (message)">
          Faza 1 — Kontakt (poruka)
        </h3>

        <p
          data-sr="Kontakt stiže kao email, SMS, poruka na mreži ili poruka u poslovnom kanalu. Uvek postoji „situacija“ i sledeći korak: potvrda, pregled, uplata, reset. U ovoj fazi napadač bira temu koja liči na realan problem, jer realan problem skraćuje sumnju."
          data-en="Contact arrives via email, SMS, social message, or a business channel. There is always a “situation” and a next step: confirm, view, pay, reset. Here the attacker chooses a theme that resembles a real problem because real problems compress skepticism."
        >Kontakt stiže kao email, SMS, poruka na mreži ili poruka u poslovnom kanalu. Uvek postoji „situacija“ i sledeći korak: potvrda, pregled, uplata, reset. U ovoj fazi napadač bira temu koja liči na realan problem, jer realan problem skraćuje sumnju.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Primeri tema" data-en="Theme examples">Primeri tema</div>
            <ul class="bullets">
              <li data-sr="„nalog je pod rizikom — potvrdi identitet“" data-en="“account at risk — confirm identity”">„nalog je pod rizikom — potvrdi identitet“</li>
              <li data-sr="„pošiljka stoji — potvrdi adresu“" data-en="“shipment on hold — confirm address”">„pošiljka stoji — potvrdi adresu“</li>
              <li data-sr="„sumnjiva aktivnost — proveri nalog“" data-en="“suspicious activity — verify account”">„sumnjiva aktivnost — proveri nalog“</li>
              <li data-sr="„stigao dokument — otvori“" data-en="“document received — open”">„stigao dokument — otvori“</li>
              <li data-sr="„kazna/dug — plati do roka“" data-en="“fine/debt — pay by deadline”">„kazna/dug — plati do roka“</li>
            </ul>
          </div>

          <div class="phase">
            <div class="label" data-sr="Šta se testira" data-en="What gets tested">Šta se testira</div>
            <ul class="bullets">
              <li data-sr="da li meta reaguje odmah" data-en="whether the target reacts immediately">da li meta reaguje odmah</li>
              <li data-sr="da li meta proverava domen pre klika" data-en="whether the target checks the domain before clicking">da li meta proverava domen pre klika</li>
              <li data-sr="da li meta traži drugi kanal (aplikacija, zvaničan sajt)" data-en="whether the target switches to an official channel (app, official site)">da li meta traži drugi kanal (aplikacija, zvaničan sajt)</li>
            </ul>
          </div>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> meta klikne, jer klik deluje kao rutinski nastavak."
          data-en="<strong>Threshold:</strong> the target clicks because clicking feels like routine continuation."
        ><strong>Prag faze:</strong> meta klikne, jer klik deluje kao rutinski nastavak.</div>
      </article>

      <!-- FAZA 2 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Automatizam" data-en="Phase 2 — Autopilot">
          Faza 2 — Automatizam
        </h3>

        <p
          data-sr="Poruka imitira radnje koje ljudi već rade: login, reset, tracking, potvrda, „security check“. Meta želi brzo zatvaranje problema. U ovoj fazi se gubi navika da se čita domen, a dobijaju se mikro-odluke koje izgledaju bezopasno."
          data-en="The message imitates actions people already do: login, reset, tracking, confirmation, “security check”. The target wants quick closure. Here the habit of reading the domain fades and micro-decisions that seem harmless take over."
        >Poruka imitira radnje koje ljudi već rade: login, reset, tracking, potvrda, „security check“. Meta želi brzo zatvaranje problema. U ovoj fazi se gubi navika da se čita domen, a dobijaju se mikro-odluke koje izgledaju bezopasno.</p>

        <ul class="bullets">
          <li data-sr="rečnik zvuči „sistemski“: verifikacija, potvrda, update" data-en="system-like language: verification, confirmation, update">rečnik zvuči „sistemski“: verifikacija, potvrda, update</li>
          <li data-sr="radnja traje kratko i izgleda kao kraj incidenta" data-en="the action is short and feels like closure">radnja traje kratko i izgleda kao kraj incidenta</li>
          <li data-sr="poruka pogađa trenutak zauzetosti ili žurbe" data-en="the message hits a moment of distraction or hurry">poruka pogađa trenutak zauzetosti ili žurbe</li>
          <li data-sr="klik se tretira kao „bezbedan“ jer je tema poznata" data-en="click feels “safe” because the theme is familiar">klik se tretira kao „bezbedan“ jer je tema poznata</li>
        </ul>

        <div class="branch">
          <p><strong data-sr="Grananje u ovoj fazi" data-en="Branching in this phase">Grananje u ovoj fazi</strong></p>
          <ul class="bullets">
            <li
              data-sr="<strong>Smishing:</strong> ista šema kroz SMS, kraća i direktnija. (Povezano: <a href='smishing.html'>Smishing</a>)"
              data-en="<strong>Smishing:</strong> the same scheme via SMS, shorter and more direct. (Related: <a href='smishing.html'>Smishing</a>)"
            ><strong>Smishing:</strong> ista šema kroz SMS, kraća i direktnija. (Povezano: <a href="smishing.html">Smishing</a>)</li>

            <li
              data-sr="<strong>Marketplace vezivanje:</strong> poruka o dostavi/plaćanju uvodi formu i karticu. (Povezano: <a href='marketplace-scam.html'>Marketplace prevare</a>)"
              data-en="<strong>Marketplace tie-in:</strong> delivery/payment messages push a form and card entry. (Related: <a href='marketplace-scam.html'>Marketplace scams</a>)"
            ><strong>Marketplace vezivanje:</strong> poruka o dostavi/plaćanju uvodi formu i karticu. (Povezano: <a href="marketplace-scam.html">Marketplace prevare</a>)</li>
          </ul>
        </div>
      </article>

      <!-- FAZA 3 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 3 — Prelazak na lažnu stranicu ili formu" data-en="Phase 3 — Move to a fake page or form">
          Faza 3 — Prelazak na lažnu stranicu ili formu
        </h3>

        <p
          data-sr="U ovoj fazi meta prelazi na lažnu infrastrukturu: domen i forma pripadaju napadaču. Logo i dizajn glume poznati servis, a odlučujuća informacija je u adresnoj traci. Lažna stranica je optimizovana da traži minimum koraka koji prave maksimum štete: login, kartica, OTP."
          data-en="Here the target moves into fake infrastructure: domain and form belong to the attacker. Logos and design mimic a real service; the decisive information is the address bar. The fake page is optimized to request minimal steps that create maximal damage: login, card, OTP."
        >U ovoj fazi meta prelazi na lažnu infrastrukturu: domen i forma pripadaju napadaču. Logo i dizajn glume poznati servis, a odlučujuća informacija je u adresnoj traci. Lažna stranica je optimizovana da traži minimum koraka koji prave maksimum štete: login, kartica, OTP.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Tehnički signali" data-en="Technical signals">Tehnički signali</div>
            <ul class="bullets">
              <li data-sr="domen liči na pravi uz sitnu razliku" data-en="domain resembles the real one with a small difference">domen liči na pravi uz sitnu razliku</li>
              <li data-sr="redirekcije i parametri sakrivaju pravo odredište" data-en="redirects and parameters hide the real destination">redirekcije i parametri sakrivaju pravo odredište</li>
              <li data-sr="forma traži više polja nego što radnja traži" data-en="form asks for more fields than the action requires">forma traži više polja nego što radnja traži</li>
              <li data-sr="mobilna verzija sakriva deo URL-a i smanjuje proveru" data-en="mobile view hides parts of the URL and reduces checking">mobilna verzija sakriva deo URL-a i smanjuje proveru</li>
            </ul>
          </div>

          <div class="phase">
            <div class="label" data-sr="Operativni cilj" data-en="Operational goal">Operativni cilj</div>
            <ul class="bullets">
              <li data-sr="meta sama unosi podatke" data-en="the target enters data themselves">meta sama unosi podatke</li>
              <li data-sr="OTP se traži kao „potvrda“, OTP radi kao autorizacija" data-en="OTP is requested as “confirmation”, OTP works as authorization">OTP se traži kao „potvrda“, OTP radi kao autorizacija</li>
              <li data-sr="ulaz se završava za 20–60 sekundi" data-en="entry completes in 20–60 seconds">ulaz se završava za 20–60 sekundi</li>
            </ul>
          </div>
        </div>
      </article>

      <!-- FAZA 4 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 4 — Rok / hitnost" data-en="Phase 4 — Deadline / urgency">
          Faza 4 — Rok / hitnost
        </h3>

        <p
          data-sr="Hitnost skraćuje proveru. Poruka uvodi posledicu: blokada, kazna, gubitak pristupa, bezbednosni incident, obustava usluge. Rok cilja impuls i zatvara prostor za konsultaciju."
          data-en="Urgency compresses verification. The message introduces consequences: lock, penalty, access loss, security incident, service interruption. The deadline targets impulse and closes time for consultation."
        >Hitnost skraćuje proveru. Poruka uvodi posledicu: blokada, kazna, gubitak pristupa, bezbednosni incident, obustava usluge. Rok cilja impuls i zatvara prostor za konsultaciju.</p>

        <ul class="bullets">
          <li data-sr="„u narednih 30 minuta“" data-en="“within 30 minutes”">„u narednih 30 minuta“</li>
          <li data-sr="„danas do 20h“" data-en="“today by 8pm”">„danas do 20h“</li>
          <li data-sr="„poslednja opomena“" data-en="“final notice”">„poslednja opomena“</li>
          <li data-sr="„odmah potvrdi“" data-en="“confirm now”">„odmah potvrdi“</li>
          <li data-sr="„ako prekineš, nalog se zaključava“" data-en="“if you stop, the account locks”">„ako prekineš, nalog se zaključava“</li>
        </ul>

        <div class="branch">
          <p><strong data-sr="Grananje u fazi roka" data-en="Branching in the deadline phase">Grananje u fazi roka</strong></p>
          <ul class="bullets">
            <li
              data-sr="<strong>Smishing:</strong> SMS varijanta sa kratkim linkom. (Povezano: <a href='smishing.html'>Smishing</a>)"
              data-en="<strong>Smishing:</strong> SMS variant with a short link. (Related: <a href='smishing.html'>Smishing</a>)"
            ><strong>Smishing:</strong> SMS varijanta sa kratkim linkom. (Povezano: <a href="smishing.html">Smishing</a>)</li>

            <li
              data-sr="<strong>Poziv kao eskalacija:</strong> „podrška“ zove i vodi korake uživo. (Povezano: <a href='fake-call-scam.html'>Lažni pozivi</a>)"
              data-en="<strong>Call escalation:</strong> “support” calls and guides steps live. (Related: <a href='fake-call-scam.html'>Fake calls</a>)"
            ><strong>Poziv kao eskalacija:</strong> „podrška“ zove i vodi korake uživo. (Povezano: <a href="fake-call-scam.html">Lažni pozivi</a>)</li>
          </ul>
        </div>
      </article>

      <!-- FAZA 5 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Prag: unos podataka / OTP / kartice" data-en="Phase 5 — Threshold: data / OTP / card entry">
          Faza 5 — Prag: unos podataka / OTP / kartice
        </h3>

        <p
          data-sr="Prag je trenutak realne štete: unos email/lozinke, unos kartice, potvrda OTP koda, odobrenje u aplikaciji. Posle praga napadač dobija pristup ili mogućnost naplate, a tok prelazi u seriju."
          data-en="The threshold is the moment of real harm: entering email/password, card details, confirming an OTP, approving in an app. After it, the attacker gains access or charging capability and the flow turns into a series."
        >Prag je trenutak realne štete: unos email/lozinke, unos kartice, potvrda OTP koda, odobrenje u aplikaciji. Posle praga napadač dobija pristup ili mogućnost naplate, a tok prelazi u seriju.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Šta se dobija" data-en="What the attacker gets">Šta se dobija</div>
            <ul class="bullets">
              <li data-sr="kredencijali: login podaci za servis" data-en="credentials: login data for a service">kredencijali: login podaci za servis</li>
              <li data-sr="OTP: autorizacija prijave ili transakcije" data-en="OTP: authorization of a login or transaction">OTP: autorizacija prijave ili transakcije</li>
              <li data-sr="kartica: mogućnost naplate pod maskom „sitnog troška“" data-en="card: ability to charge under a “small fee” mask">kartica: mogućnost naplate pod maskom „sitnog troška“</li>
              <li data-sr="session/token: trajanje pristupa bez lozinke" data-en="session/token: access without password for a period">session/token: trajanje pristupa bez lozinke</li>
            </ul>
          </div>

          <div class="phase">
            <div class="label" data-sr="Zašto meta pristaje" data-en="Why the target complies">Zašto meta pristaje</div>
            <ul class="bullets">
              <li data-sr="forma izgleda kao standardna procedura" data-en="the form looks like standard procedure">forma izgleda kao standardna procedura</li>
              <li data-sr="rok izgleda kao realna posledica" data-en="the deadline feels like a real consequence">rok izgleda kao realna posledica</li>
              <li data-sr="napor izgleda mali u odnosu na problem" data-en="the effort feels small compared to the problem">napor izgleda mali u odnosu na problem</li>
            </ul>
          </div>
        </div>
      </article>

      <!-- FAZA 6 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 6 — Serijske posledice" data-en="Phase 6 — Cascading consequences">
          Faza 6 — Serijske posledice
        </h3>

        <p
          data-sr="Posle praga često kreće lanac: promena lozinki, promena recovery podataka, prijave sa novih uređaja, poruke kontaktima, reset lozinki na drugim servisima, preusmeravanje uplata. Meta tek tada vidi da jedan klik otvara više frontova."
          data-en="After the threshold, a chain often follows: password changes, recovery detail changes, logins from new devices, messages to contacts, password resets on other services, payment redirections. Only then does the target see how one click opens multiple fronts."
        >Posle praga često kreće lanac: promena lozinki, promena recovery podataka, prijave sa novih uređaja, poruke kontaktima, reset lozinki na drugim servisima, preusmeravanje uplata. Meta tek tada vidi da jedan klik otvara više frontova.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Najčešći lanac" data-en="Most common chain">Najčešći lanac</div>
            <ul class="bullets">
              <li data-sr="preuzet email → reset lozinki na drugim servisima" data-en="email taken over → password resets across other services">preuzet email → reset lozinki na drugim servisima</li>
              <li data-sr="preuzet nalog na mreži → poruke kontaktima i nove mete" data-en="social account takeover → messages to contacts and new targets">preuzet nalog na mreži → poruke kontaktima i nove mete</li>
              <li data-sr="poslovni kontekst → promene u uplatama i dokumentima" data-en="business context → changes in payments and documents">poslovni kontekst → promene u uplatama i dokumentima</li>
            </ul>
          </div>

          <div class="phase">
            <div class="label" data-sr="Kako se održava tok" data-en="How the flow is maintained">Kako se održava tok</div>
            <ul class="bullets">
              <li data-sr="svaka posledica se opisuje kao „još jedan korak“" data-en="each consequence is framed as “one more step”">svaka posledica se opisuje kao „još jedan korak“</li>
              <li data-sr="rokovi i upozorenja drže fokus u uskom tunelu" data-en="deadlines and warnings keep attention in a narrow tunnel">rokovi i upozorenja drže fokus u uskom tunelu</li>
              <li data-sr="meta pokušava da završi proceduru umesto da prekine tok" data-en="the target tries to finish the procedure instead of cutting the flow">meta pokušava da završi proceduru umesto da prekine tok</li>
            </ul>
          </div>
        </div>

        <div class="branch">
          <p><strong data-sr="Grananja posle praga" data-en="Branching after the threshold">Grananja posle praga</strong></p>
          <ul class="bullets">
            <li
              data-sr="<strong>Advance-fee obrazac:</strong> „takse“ kao nastavak procesa. (Povezano: <a href='advance-fee-fraud.html'>Advance-fee</a>)"
              data-en="<strong>Advance-fee pattern:</strong> “fees” as continuation of the process. (Related: <a href='advance-fee-fraud.html'>Advance-fee</a>)"
            ><strong>Advance-fee obrazac:</strong> „takse“ kao nastavak procesa. (Povezano: <a href="advance-fee-fraud.html">Advance-fee</a>)</li>

            <li
              data-sr="<strong>Marketplace nastavak:</strong> ukradeni nalozi služe za oglase i nove kontakte. (Povezano: <a href='marketplace-scam.html'>Marketplace prevare</a>)"
              data-en="<strong>Marketplace continuation:</strong> stolen accounts are used for listings and new contacts. (Related: <a href='marketplace-scam.html'>Marketplace scams</a>)"
            ><strong>Marketplace nastavak:</strong> ukradeni nalozi služe za oglase i nove kontakte. (Povezano: <a href="marketplace-scam.html">Marketplace prevare</a>)</li>
          </ul>
        </div>
      </article>

      <!-- FAZA 7 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 7 — Pritisak i ‘podrška’" data-en="Phase 7 — Pressure and ‘support’">
          Faza 7 — Pritisak i ‘podrška’
        </h3>

        <p
          data-sr="Kad se pojavi sumnja, stiže dodatna poruka, formalniji ton, chat „podrška“ ili poziv. Funkcija je zatvaranje pauze i povratak na korake. U varijanti sa „pomoći“, traži se nova potvrda ili instalacija alata."
          data-en="When doubt appears, an extra message, a more formal tone, “support” chat, or a call follows. The function is to close the pause and return to steps. In the “help” variant, another confirmation or tool installation is requested."
        >Kad se pojavi sumnja, stiže dodatna poruka, formalniji ton, chat „podrška“ ili poziv. Funkcija je zatvaranje pauze i povratak na korake. U varijanti sa „pomoći“, traži se nova potvrda ili instalacija alata.</p>

        <div class="branch">
          <p><strong data-sr="Grananje: kontrola tempa" data-en="Branching: pace control">Grananje: kontrola tempa</strong></p>
          <ul class="bullets">
            <li
              data-sr="<strong>Lažni pozivi:</strong> vođenje uživo, korak-po-korak. (Povezano: <a href='fake-call-scam.html'>Lažni pozivi</a>)"
              data-en="<strong>Fake calls:</strong> live guidance, step by step. (Related: <a href='fake-call-scam.html'>Fake calls</a>)"
            ><strong>Lažni pozivi:</strong> vođenje uživo, korak-po-korak. (Povezano: <a href="fake-call-scam.html">Lažni pozivi</a>)</li>
          </ul>
        </div>
      </article>

      <!-- FAZA 8 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 8 — Mutacije: prelaz u druge šeme" data-en="Phase 8 — Mutations: branching into other schemes">
          Faza 8 — Mutacije: prelaz u druge šeme
        </h3>

        <p
          data-sr="Phishing služi kao ulaz u širi ekosistem. Posle inicijalnog praga tok prelazi u druge šeme: lažni poziv kao autoritet, „takse“ kao uslov, širenje kroz kontakte, ciljanje većeg iznosa kroz novu priču."
          data-en="Phishing is an entry into a broader ecosystem. After the initial threshold, the flow branches into other schemes: fake calls as authority, “fees” as conditions, spreading through contacts, targeting larger amounts with a new narrative."
        >Phishing služi kao ulaz u širi ekosistem. Posle inicijalnog praga tok prelazi u druge šeme: lažni poziv kao autoritet, „takse“ kao uslov, širenje kroz kontakte, ciljanje većeg iznosa kroz novu priču.</p>

        <div class="branch">
          <p><strong data-sr="Praktična grananja" data-en="Practical branching">Praktična grananja</strong></p>
          <ul class="bullets">
            <li
              data-sr="<strong>Advance-fee:</strong> „takse“ kao uslov za „odblokiranje“. (Povezano: <a href='advance-fee-fraud.html'>Advance-fee</a>)"
              data-en="<strong>Advance-fee:</strong> “fees” as a condition to “unlock”. (Related: <a href='advance-fee-fraud.html'>Advance-fee</a>)"
            ><strong>Advance-fee:</strong> „takse“ kao uslov za „odblokiranje“. (Povezano: <a href="advance-fee-fraud.html">Advance-fee</a>)</li>

            <li
              data-sr="<strong>Crypto prelaz:</strong> kontakt i autoritet prelaze u investicioni okvir. (Povezano: <a href='crypto-scam.html'>Crypto investment</a>)"
              data-en="<strong>Crypto transition:</strong> contact and authority shift into an investment frame. (Related: <a href='crypto-scam.html'>Crypto investment</a>)"
            ><strong>Crypto prelaz:</strong> kontakt i autoritet prelaze u investicioni okvir. (Povezano: <a href="crypto-scam.html">Crypto investment</a>)</li>
          </ul>
        </div>
      </article>

      <!-- FAZA 9 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 9 — Recovery (drugi napad)" data-en="Phase 9 — Recovery (second attack)">
          Faza 9 — Recovery (drugi napad)
        </h3>

        <p
          data-sr="Posle incidenta stižu ponude za „pomoć“: povrat naloga, povrat novca, „forenzika“. Uslov je uplata unapred. Ovaj kontakt koristi želju mete da poništi gubitak i zatvori priču."
          data-en="After an incident, “help” offers appear: account recovery, money recovery, “forensics”. The condition is an upfront payment. This contact exploits the target’s desire to undo the loss and close the story."
        >Posle incidenta stižu ponude za „pomoć“: povrat naloga, povrat novca, „forenzika“. Uslov je uplata unapred. Ovaj kontakt koristi želju mete da poništi gubitak i zatvori priču.</p>

        <div class="branch">
          <p><strong data-sr="Povezano" data-en="Related">Povezano</strong></p>
          <ul class="bullets">
            <li
              data-sr="<strong>Recovery scam:</strong> povrat kao mamac za novu uplatu. (Povezano: <a href='recovery-scam.html'>Recovery</a>)"
              data-en="<strong>Recovery scam:</strong> recovery as bait for a new fee. (Related: <a href='recovery-scam.html'>Recovery</a>)"
            ><strong>Recovery scam:</strong> povrat kao mamac za novu uplatu. (Povezano: <a href="recovery-scam.html">Recovery</a>)</li>
          </ul>
        </div>
      </article>
    </section>

    <!-- 4) NAJČEŠĆI OBLICI (KONKRETNO) -->
    <section class="card">
      <h2 data-sr="Najčešći oblici phishinga (konkretno)" data-en="Most common phishing variants (concrete)">
        Najčešći oblici phishinga (konkretno)
      </h2>

      <h3 data-sr="1) Lažni login (email/lozinka)" data-en="1) Fake login (email/password)">
        1) Lažni login (email/lozinka)
      </h3>
      <ul class="bullets">
        <li data-sr="poruka najavljuje blokadu ili bezbednosni incident" data-en="message claims a lock or security incident">poruka najavljuje blokadu ili bezbednosni incident</li>
        <li data-sr="link vodi na stranicu koja imitira servis" data-en="link leads to a page that imitates the service">link vodi na stranicu koja imitira servis</li>
        <li data-sr="posle unosa kreće talas reset pokušaja na povezane naloge" data-en="after entry, a reset wave hits linked accounts">posle unosa kreće talas reset pokušaja na povezane naloge</li>
      </ul>

      <h3 data-sr="2) Dostava/kurir (sitni trošak → kartica)" data-en="2) Delivery/courier (small fee → card)">
        2) Dostava/kurir (sitni trošak → kartica)
      </h3>
      <ul class="bullets">
        <li data-sr="forma traži karticu i CVV, često i OTP" data-en="form asks for card and CVV, often OTP too">forma traži karticu i CVV, često i OTP</li>
        <li data-sr="posle prve naplate stižu novi koraci: osiguranje, ponovna dostava" data-en="after the first charge, new steps appear: insurance, re-delivery">posle prve naplate stižu novi koraci: osiguranje, ponovna dostava</li>
        <li data-sr="varijanta često stiže i kroz SMS" data-en="variant often arrives via SMS too">varijanta često stiže i kroz SMS</li>
      </ul>

      <h3 data-sr="3) Banka/transakcija (OTP kao potvrda)" data-en="3) Bank/transaction (OTP as confirmation)">
        3) Banka/transakcija (OTP kao potvrda)
      </h3>
      <ul class="bullets">
        <li data-sr="poruka navodi sumnjivu transakciju ili verifikaciju" data-en="message claims suspicious transaction or verification">poruka navodi sumnjivu transakciju ili verifikaciju</li>
        <li data-sr="lažna stranica traži login i zatim OTP" data-en="fake page asks for login then OTP">lažna stranica traži login i zatim OTP</li>
        <li data-sr="OTP potvrđuje realnu radnju u pozadini" data-en="OTP confirms a real action in the background">OTP potvrđuje realnu radnju u pozadini</li>
      </ul>

      <h3 data-sr="4) Poslovni phishing (fakture, dokumenti)" data-en="4) Business phishing (invoices, documents)">
        4) Poslovni phishing (fakture, dokumenti)
      </h3>
      <ul class="bullets">
        <li data-sr="email imitira dobavljača ili kolegu" data-en="email imitates a vendor or colleague">email imitira dobavljača ili kolegu</li>
        <li data-sr="link/prilog vodi na login formu ili download" data-en="link/attachment leads to a login form or download">link/prilog vodi na login formu ili download</li>
        <li data-sr="posle pristupa mailu dolaze promene na uplatama i dokumentima" data-en="after mailbox access come changes to payments and documents">posle pristupa mailu dolaze promene na uplatama i dokumentima</li>
      </ul>

      <h3 data-sr="5) „Support“ tok (poziv + remote pristup)" data-en="5) “Support” flow (call + remote access)">
        5) „Support“ tok (poziv + remote pristup)
      </h3>
      <ul class="bullets">
        <li data-sr="poruka uvodi pomoć kroz chat ili poziv" data-en="message introduces help via chat or call">poruka uvodi pomoć kroz chat ili poziv</li>
        <li data-sr="predlog ide ka instalaciji remote alata ili deljenju ekrana" data-en="proposal moves toward remote tool installation or screen sharing">predlog ide ka instalaciji remote alata ili deljenju ekrana</li>
        <li data-sr="tok prelazi u kontrolu tempa kroz glas" data-en="the flow shifts into pace control via voice">tok prelazi u kontrolu tempa kroz glas</li>
      </ul>
    </section>

    <!-- 5) BRZE PROVERE (PRAKTIČNO) -->
    <section class="card">
      <h2 data-sr="Brze provere (praktično)" data-en="Quick checks (practical)">
        Brze provere (praktično)
      </h2>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pre klika" data-en="Before clicking">Pre klika</div>
          <ul class="bullets">
            <li data-sr="poruka uvodi hitnost i posledicu" data-en="the message introduces urgency and consequence">poruka uvodi hitnost i posledicu</li>
            <li data-sr="poruka traži jedan brz korak koji „zatvara problem“" data-en="it demands one fast step that “closes the issue”">poruka traži jedan brz korak koji „zatvara problem“</li>
            <li data-sr="tema pogađa rutinu: banka, dostava, nalog, dokument" data-en="topic hits routine: bank, delivery, account, document">tema pogađa rutinu: banka, dostava, nalog, dokument</li>
            <li data-sr="poruka nema dovoljno detalja, ali traži radnju" data-en="the message lacks details but demands action">poruka nema dovoljno detalja, ali traži radnju</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Posle klika" data-en="After clicking">Posle klika</div>
          <ul class="bullets">
            <li data-sr="provera domena: adresa mora biti tačna, bez varijacija" data-en="check the domain: it must be exact, no variants">provera domena: adresa mora biti tačna, bez varijacija</li>
            <li data-sr="forma koja traži više polja od očekivanog traži stop-pauzu" data-en="a form asking for more than expected deserves a full stop">forma koja traži više polja od očekivanog traži stop-pauzu</li>
            <li data-sr="OTP tretman: autorizacija, svaka autorizacija nosi rizik" data-en="OTP rule: authorization; every authorization carries risk">OTP tretman: autorizacija, svaka autorizacija nosi rizik</li>
            <li data-sr="link iz poruke je rizičan ulaz; zvaničan ulaz je aplikacija ili ručno ukucan domen" data-en="message links are risky entry; official entry is app or typed domain">link iz poruke je rizičan ulaz; zvaničan ulaz je aplikacija ili ručno ukucan domen</li>
          </ul>
        </div>
      </div>

      <div class="callout"
        data-sr="<strong>Minimalno pravilo:</strong> do servisa se dolazi kroz zvaničan kanal (aplikacija, bookmark, ručno ukucan domen). Link iz poruke tretira se kao rizičan ulaz."
        data-en="<strong>Minimum rule:</strong> reach services via official channels (app, bookmark, typed domain). Treat message links as risky entry points."
      ><strong>Minimalno pravilo:</strong> do servisa se dolazi kroz zvaničan kanal (aplikacija, bookmark, ručno ukucan domen). Link iz poruke tretira se kao rizičan ulaz.</div>
    </section>

    <!-- 6) AKO JE ŠTETA NASTALA -->
    <section class="card">
      <h2 data-sr="Ako je šteta nastala (redosled poteza)" data-en="If damage happened (action order)">
        Ako je šteta nastala (redosled poteza)
      </h2>

      <div class="phase">
        <div class="label" data-sr="Unos email/lozinke" data-en="Entered email/password">Unos email/lozinke</div>
        <ol class="steps">
          <li data-sr="promena lozinke na tom nalogu" data-en="change the password on that account">promena lozinke na tom nalogu</li>
          <li data-sr="promena lozinke na email nalogu (email otvara reset na drugim servisima)" data-en="change your email password (email enables resets on other services)">promena lozinke na email nalogu (email otvara reset na drugim servisima)</li>
          <li data-sr="uključivanje 2FA i provera recovery podataka" data-en="enable 2FA and verify recovery details">uključivanje 2FA i provera recovery podataka</li>
          <li data-sr="provera aktivnih uređaja/sesija i odjava nepoznatih" data-en="review active sessions/devices and sign out unknown ones">provera aktivnih uređaja/sesija i odjava nepoznatih</li>
        </ol>
      </div>

      <div class="phase">
        <div class="label" data-sr="Unos kartice / potvrda OTP" data-en="Entered card / confirmed OTP">Unos kartice / potvrda OTP</div>
        <ol class="steps">
          <li data-sr="kontakt banke radi zaštite kartice i provere transakcija" data-en="contact your bank to secure the card and review transactions">kontakt banke radi zaštite kartice i provere transakcija</li>
          <li data-sr="prijava spornih transakcija kroz zvaničan proces banke" data-en="dispute suspicious transactions via the bank’s official process">prijava spornih transakcija kroz zvaničan proces banke</li>
          <li data-sr="čuvanje poruke, linka i detalja kao dokaza" data-en="save the message, link, and details as evidence">čuvanje poruke, linka i detalja kao dokaza</li>
        </ol>
      </div>

      <div class="phase">
        <div class="label" data-sr="Gubitak pristupa nalogu" data-en="Lost access to an account">Gubitak pristupa nalogu</div>
        <ol class="steps">
          <li data-sr="recovery kroz zvaničan kanal servisa" data-en="use the service’s official recovery flow">recovery kroz zvaničan kanal servisa</li>
          <li data-sr="provera promenjenih podataka (email, telefon, 2FA) i vraćanje kontrole" data-en="check changed details (email, phone, 2FA) and regain control">provera promenjenih podataka (email, telefon, 2FA) i vraćanje kontrole</li>
          <li data-sr="obaveštenje kontakata ako je nalog korišćen za poruke" data-en="notify contacts if the account was used to message them">obaveštenje kontakata ako je nalog korišćen za poruke</li>
        </ol>
      </div>

      <div class="callout"
        data-sr="<strong>Upozorenje:</strong> posle incidenta često stiže recovery ponuda uz uplatu. Takav kontakt tretira se kao drugi napad."
        data-en="<strong>Warning:</strong> after an incident, recovery offers often demand payment. Treat them as a second attack."
      ><strong>Upozorenje:</strong> posle incidenta često stiže recovery ponuda uz uplatu. Takav kontakt tretira se kao drugi napad.</div>
    </section>

    <!-- 7) IZ UGLA PREVARANTA -->
    <section class="card">
      <h2 data-sr="Iz ugla prevaranata: kako se tok vodi" data-en="From the scammers’ side: how the flow is run">
        Iz ugla prevaranata: kako se tok vodi
      </h2>

      <p
        data-sr="Phishing kampanje rade kao industrija: šabloni se rotiraju, domeni se menjaju, a meta se meri po reakciji. Brz klik daje signal da se napad isplati. Sporost i pitanja traže skuplji kanal: poziv, „podrška“, nova poruka, nova forma. Nakon praga tok prelazi u operativu: reset lozinki, promene recovery podataka, nove potvrde, transferi, širenje napada kroz kontakte."
        data-en="Phishing campaigns operate like an industry: templates rotate, domains change, and targets are measured by response. A fast click signals value. Hesitation and questions require a more expensive channel: calls, “support”, a new message, a new form. After the threshold the operation begins: password resets, recovery changes, new approvals, transfers, spreading through contacts."
      >Phishing kampanje rade kao industrija: šabloni se rotiraju, domeni se menjaju, a meta se meri po reakciji. Brz klik daje signal da se napad isplati. Sporost i pitanja traže skuplji kanal: poziv, „podrška“, nova poruka, nova forma. Nakon praga tok prelazi u operativu: reset lozinki, promene recovery podataka, nove potvrde, transferi, širenje napada kroz kontakte.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta žele pre praga" data-en="What they want before the threshold">Šta žele pre praga</div>
          <ul class="bullets">
            <li data-sr="klik: prelazak na kontrolisanu stranicu" data-en="click: move you onto a controlled page">klik: prelazak na kontrolisanu stranicu</li>
            <li data-sr="unos: kredencijali, kartica, kod" data-en="entry: credentials, card, code">unos: kredencijali, kartica, kod</li>
            <li data-sr="brzina: odluka bez provere domena" data-en="speed: decision without domain verification">brzina: odluka bez provere domena</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Šta žele posle praga" data-en="What they want after the threshold">Šta žele posle praga</div>
          <ul class="bullets">
            <li data-sr="kontrola: promene lozinki i recovery podataka" data-en="control: password and recovery changes">kontrola: promene lozinki i recovery podataka</li>
            <li data-sr="širenje: poruke kontaktima i nove mete" data-en="spread: messages to contacts and new targets">širenje: poruke kontaktima i nove mete</li>
            <li data-sr="eskalacija: autoritet, takse, recovery" data-en="escalation: authority, fees, recovery">eskalacija: autoritet, takse, recovery</li>
          </ul>
        </div>
      </div>

      <div class="callout"
        data-sr="<strong>Operativni cilj:</strong> meta izvršava korake umesto analize. Sledeći korak izgleda kao nastavak rutine."
        data-en="<strong>Operational goal:</strong> the target executes steps instead of analyzing. The next step feels like routine continuation."
      ><strong>Operativni cilj:</strong> meta izvršava korake umesto analize. Sledeći korak izgleda kao nastavak rutine.</div>
    </section>

    <!-- 8) STANDARDNA UPOZORENJA -->
    <section class="card">
      <h2 data-sr="Standardna upozorenja" data-en="Standard warnings">Standardna upozorenja</h2>
      <ul class="bullets">
        <li data-sr="poruka sa linkom i rokom traži pauzu i proveru domena" data-en="a message with a link and a deadline deserves a pause and domain check">poruka sa linkom i rokom traži pauzu i proveru domena</li>
        <li data-sr="OTP i potvrda u aplikaciji predstavljaju autorizaciju" data-en="OTP and in-app approvals are authorization">OTP i potvrda u aplikaciji predstavljaju autorizaciju</li>
        <li data-sr="forma koja traži karticu pod maskom „sitnog troška“ je visok rizik" data-en="a card form masked as a “small fee” is high risk">forma koja traži karticu pod maskom „sitnog troška“ je visok rizik</li>
        <li data-sr="posle incidenta očekuj recovery poruke uz uplatu" data-en="after an incident, expect paid recovery messages">posle incidenta očekuj recovery poruke uz uplatu</li>
      </ul>
    </section>

    <!-- 9) IZVORI -->
    <section class="card sources" id="sources">
      <h2 data-sr="Izvori" data-en="Sources">Izvori</h2>
      <ul>
        <li><a href="https://www.ncsc.gov.uk/guidance/phishing" target="_blank" rel="noopener noreferrer">UK NCSC — Phishing guidance</a></li>
        <li><a href="https://consumer.ftc.gov/scams" target="_blank" rel="noopener noreferrer">FTC — Scam guidance</a></li>
        <li><a href="https://www.fbi.gov/how-we-can-help-you/scams-and-safety/common-frauds-and-scams" target="_blank" rel="noopener noreferrer">FBI — Common frauds and scams</a></li>
      </ul>
    </section>
  `
};
