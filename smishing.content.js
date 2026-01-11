window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["smishing"] = {
  raw_html: `
    <!-- 1) UVOD: ŠTA JE I KAKO GENERALNO RADI -->
    <section class="card">
      <h2 data-sr="Uvod: kako radi smishing" data-en="Introduction: how smishing works">
        Uvod: kako radi smishing
      </h2>

      <p
        data-sr="Smishing je phishing kroz SMS: kratka poruka sa hitnošću i linkom, optimizovana za klik sa telefona. Kanal cilja refleks, jer se SMS čita u hodu, uz malo konteksta i uz mali ekran. Zbog toga smishing često služi kao najbrži ulaz u tri ishoda: (1) krađa podataka za prijavu, (2) naplata kartice kroz lažnu formu, (3) preuzimanje naloga kroz OTP potvrdu."
        data-en="Smishing is phishing via SMS: a short urgent message with a link, optimized for mobile clicks. The channel targets reflex because SMS is often read on the move, with little context and a small screen. That’s why smishing is one of the fastest entries into three outcomes: (1) stolen login data, (2) card charges via fake forms, (3) account takeover via OTP confirmation."
      >Smishing je phishing kroz SMS: kratka poruka sa hitnošću i linkom, optimizovana za klik sa telefona. Kanal cilja refleks, jer se SMS čita u hodu, uz malo konteksta i uz mali ekran. Zbog toga smishing često služi kao najbrži ulaz u tri ishoda: (1) krađa podataka za prijavu, (2) naplata kartice kroz lažnu formu, (3) preuzimanje naloga kroz OTP potvrdu.</p>

      <p
        data-sr="U smishing toku poruka, link i prag dolaze praktično zajedno. Tempo je kompresovan: korisnik dobija “problem” i “rešenje” u istom trenutku. Na telefonu se domen retko pregleda do kraja, pa dizajn stranice i logo lako preuzmu pažnju. Smishing zbog toga često radi kao ulazni filter: ko klikne i unese podatke ulazi u sledeći sloj prevare."
        data-en="In smishing, the message, link, and threshold arrive almost at once. The tempo is compressed: users get the “problem” and the “solution” in the same moment. On mobile, people rarely inspect the full domain, so page design and logos easily take over attention. Smishing often acts as an entry filter: whoever clicks and enters data moves into the next scam layer."
      >U smishing toku poruka, link i prag dolaze praktično zajedno. Tempo je kompresovan: korisnik dobija “problem” i “rešenje” u istom trenutku. Na telefonu se domen retko pregleda do kraja, pa dizajn stranice i logo lako preuzmu pažnju. Smishing zbog toga često radi kao ulazni filter: ko klikne i unese podatke ulazi u sledeći sloj prevare.</p>

      <div class="callout"
        data-sr="<strong>Model:</strong> SMS + hitnost → link → prag (forma/kartica/OTP) → serijske posledice → prelaz u druge šeme → recovery talas"
        data-en="<strong>Model:</strong> SMS + urgency → link → threshold (form/card/OTP) → cascading consequences → branching into other schemes → recovery wave"
      ><strong>Model:</strong> SMS + hitnost → link → prag (forma/kartica/OTP) → serijske posledice → prelaz u druge šeme → recovery talas</div>

      <div class="callout"
        data-sr="<strong>Prag:</strong> klik + unos (login/kartica) ili OTP potvrda. Posle praga tok prelazi u proces sa više koraka."
        data-en="<strong>Threshold:</strong> click + entry (login/card) or OTP confirmation. After the threshold, the flow becomes a multi-step process."
      ><strong>Prag:</strong> klik + unos (login/kartica) ili OTP potvrda. Posle praga tok prelazi u proces sa više koraka.</div>
    </section>

    <!-- 2) ZAŠTO PROLAZI -->
    <section class="card">
      <h2 data-sr="Zašto smishing prolazi" data-en="Why smishing works">
        Zašto smishing prolazi
      </h2>

      <p
        data-sr="Smishing koristi specifičnosti telefona: mali ekran, brza notifikacija, čitanje između obaveza, malo konteksta i kratka forma poruke. SMS format favorizuje jedan link i jednu radnju. Napadač dobija brzinu, a meta gubi prostor za proveru."
        data-en="Smishing exploits phone-specific conditions: small screens, fast notifications, reading between tasks, low context, and short message format. SMS favors one link and one action. Attackers gain speed; targets lose verification time."
      >Smishing koristi specifičnosti telefona: mali ekran, brza notifikacija, čitanje između obaveza, malo konteksta i kratka forma poruke. SMS format favorizuje jedan link i jednu radnju. Napadač dobija brzinu, a meta gubi prostor za proveru.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Okidači" data-en="Triggers">Okidači</div>
          <ul class="bullets">
            <li data-sr="automatizam: obaveštenje → klik → potvrda" data-en="autopilot: notification → click → confirm">automatizam: obaveštenje → klik → potvrda</li>
            <li data-sr="hitnost: “zadržano”, “blokirano”, “kazna”, “poslednji rok”" data-en="urgency: “held”, “blocked”, “fine”, “final deadline”">hitnost: “zadržano”, “blokirano”, “kazna”, “poslednji rok”</li>
            <li data-sr="rutina: dostava, račun, pretplata, kazne" data-en="routine themes: delivery, account, subscriptions, fines">rutina: dostava, račun, pretplata, kazne</li>
            <li data-sr="autoritet: banka, pošta, kurir, institucija" data-en="authority: bank, post, courier, institution">autoritet: banka, pošta, kurir, institucija</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Šta se gubi" data-en="What gets lost">Šta se gubi</div>
          <ul class="bullets">
            <li data-sr="provera domena na telefonu" data-en="domain inspection on mobile">provera domena na telefonu</li>
            <li data-sr="logika radnje (zašto kartica za “dostavu”)" data-en="action logic (why a card for “delivery”)">logika radnje (zašto kartica za “dostavu”)</li>
            <li data-sr="pauza i konsultacija sa drugima" data-en="pause and consultation">pauza i konsultacija sa drugima</li>
            <li data-sr="provera kroz zvaničan kanal (aplikacija / ručno ukucan domen)" data-en="verification via official channel (app / typed domain)">provera kroz zvaničan kanal (aplikacija / ručno ukucan domen)</li>
          </ul>
        </div>
      </div>

      <div class="callout"
        data-sr="<strong>Najvažniji okidač:</strong> poruka deluje kao rutinski problem koji traži jednu radnju."
        data-en="<strong>Main trigger:</strong> the message feels like a routine issue requiring one action."
      ><strong>Najvažniji okidač:</strong> poruka deluje kao rutinski problem koji traži jednu radnju.</div>
    </section>

    <!-- 3) TIPIČNE TEME PORUKA -->
    <section class="card">
      <h2 data-sr="Tipične teme smishing poruka" data-en="Common smishing message themes">
        Tipične teme smishing poruka
      </h2>

      <p
        data-sr="Smishing poruke imaju ograničen prostor, pa se teme ponavljaju. Svaka tema koristi isti okvir: problem + posledica + link + rok. Tema je samo ambalaža; mehanika je u pragu."
        data-en="Smishing messages have limited space, so themes repeat. Each theme uses the same frame: issue + consequence + link + deadline. The theme is packaging; the mechanism is the threshold."
      >Smishing poruke imaju ograničen prostor, pa se teme ponavljaju. Svaka tema koristi isti okvir: problem + posledica + link + rok. Tema je samo ambalaža; mehanika je u pragu.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Dostava / paket" data-en="Delivery / package">Dostava / paket</div>
          <ul class="bullets">
            <li data-sr="“Paket zadržan zbog adrese”" data-en="“Package held due to address”">“Paket zadržan zbog adrese”</li>
            <li data-sr="“Carina / doplata”" data-en="“Customs / additional fee”">“Carina / doplata”</li>
            <li data-sr="“Ponovna dostava”" data-en="“Re-delivery”">“Ponovna dostava”</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Banka / transakcija" data-en="Bank / transaction">Banka / transakcija</div>
          <ul class="bullets">
            <li data-sr="“Sumnjiva transakcija”" data-en="“Suspicious transaction”">“Sumnjiva transakcija”</li>
            <li data-sr="“Verifikacija naloga”" data-en="“Account verification”">“Verifikacija naloga”</li>
            <li data-sr="“Blokada kartice”" data-en="“Card lock”">“Blokada kartice”</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Kazne / obaveštenja" data-en="Fines / notices">Kazne / obaveštenja</div>
          <ul class="bullets">
            <li data-sr="“Prekršaj / kazna”" data-en="“Violation / fine”">“Prekršaj / kazna”</li>
            <li data-sr="“Rok ističe danas”" data-en="“Deadline is today”">“Rok ističe danas”</li>
            <li data-sr="“Potvrda podataka”" data-en="“Confirm details”">“Potvrda podataka”</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Nalog / pretplata" data-en="Account / subscription">Nalog / pretplata</div>
          <ul class="bullets">
            <li data-sr="“Nalog suspendovan”" data-en="“Account suspended”">“Nalog suspendovan”</li>
            <li data-sr="“Reset lozinke”" data-en="“Password reset”">“Reset lozinke”</li>
            <li data-sr="“Ažuriranje podataka”" data-en="“Update details”">“Ažuriranje podataka”</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 4) TEHNIČKE I UI ZAMKE NA TELEFONU -->
    <section class="card">
      <h2 data-sr="Mobilne zamke: zašto je teže proveriti na telefonu" data-en="Mobile traps: why verification is harder on phones">
        Mobilne zamke: zašto je teže proveriti na telefonu
      </h2>

      <p
        data-sr="Smishing koristi način na koji telefon prikazuje linkove i stranice. Adresna traka često prikazuje skraćenu adresu. Pregled punog domena traži dodatni dodir i nameru. U toj zoni napadač dobija prednost: korisnik vidi logo i dizajn, a domen ostaje u pozadini."
        data-en="Smishing exploits how phones display links and pages. The address bar often shows a shortened address. Seeing the full domain requires extra taps and intention. In that zone the attacker has an advantage: users see logo and design while the domain fades into the background."
      >Smishing koristi način na koji telefon prikazuje linkove i stranice. Adresna traka često prikazuje skraćenu adresu. Pregled punog domena traži dodatni dodir i nameru. U toj zoni napadač dobija prednost: korisnik vidi logo i dizajn, a domen ostaje u pozadini.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Trikovi linka" data-en="Link tricks">Trikovi linka</div>
          <ul class="bullets">
            <li data-sr="kratki link sakriva pravi domen" data-en="short links hide the real domain">kratki link sakriva pravi domen</li>
            <li data-sr="domen sličnog izgleda (slovo, crtica, dodatna reč)" data-en="look-alike domain (letter, hyphen, extra word)">domen sličnog izgleda (slovo, crtica, dodatna reč)</li>
            <li data-sr="više redirekcija pre finalne stranice" data-en="multiple redirects before the final page">više redirekcija pre finalne stranice</li>
            <li data-sr="parametri koji “zamaskiraju” odredište" data-en="heavy parameters that mask destination">parametri koji “zamaskiraju” odredište</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Trikovi forme" data-en="Form tricks">Trikovi forme</div>
          <ul class="bullets">
            <li data-sr="2–3 polja: brzo, bez razmišljanja" data-en="2–3 fields: fast, no thinking">2–3 polja: brzo, bez razmišljanja</li>
            <li data-sr="“verifikacija” koja traži karticu" data-en="“verification” that demands a card">“verifikacija” koja traži karticu</li>
            <li data-sr="OTP predstavljen kao “blokada / potvrda”" data-en="OTP framed as “blocking / confirming”">OTP predstavljen kao “blokada / potvrda”</li>
            <li data-sr="dugme koje izgleda kao “nastavi”, zapravo potvrđuje naplatu" data-en="a button that looks like “continue” but approves a charge">dugme koje izgleda kao “nastavi”, zapravo potvrđuje naplatu</li>
          </ul>
        </div>
      </div>

      <div class="callout"
        data-sr="<strong>Pravilo:</strong> do servisa se dolazi kroz aplikaciju ili ručno ukucan domen. Link iz SMS-a tretira se kao rizičan ulaz."
        data-en="<strong>Rule:</strong> reach services via the app or a typed domain. Treat SMS links as risky entry points."
      ><strong>Pravilo:</strong> do servisa se dolazi kroz aplikaciju ili ručno ukucan domen. Link iz SMS-a tretira se kao rizičan ulaz.</div>
    </section>

    <!-- 5) HRONOLOŠKI TOK (FAZE + EVOLUCIJE) — PROŠIRENO -->
    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)" data-en="Timeline (phases + evolutions)">
        Hronološki tok (faze + evolucije)
      </h2>

      <p class="muted"
        data-sr="Smishing je kompresovan tok: poruka, link i prag dolaze brzo. Ispod su faze koje se najčešće vide. Svaka faza ima: šta meta vidi, šta napadač radi, prag faze, tipična grananja."
        data-en="Smishing is a compressed flow: message, link, and threshold arrive fast. Below are the most common phases. Each phase includes: what the target sees, what the attacker does, the phase threshold, and typical branching."
      >Smishing je kompresovan tok: poruka, link i prag dolaze brzo. Ispod su faze koje se najčešće vide. Svaka faza ima: šta meta vidi, šta napadač radi, prag faze, tipična grananja.</p>

      <!-- FAZA 1 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — SMS poruka: problem + posledica" data-en="Phase 1 — SMS: issue + consequence">
          Faza 1 — SMS poruka: problem + posledica
        </h3>

        <p
          data-sr="Poruka stiže kao obaveštenje sa jednom radnjom. Tekst je kratak i cilja refleks. Detalji su minimalni, ali posledica je velika. To stvara prazninu koju meta želi da zatvori klikom."
          data-en="The message arrives as a notification with one action. The text is short and targets reflex. Details are minimal, but the consequence is large. This creates a gap the target wants to close by clicking."
        >Poruka stiže kao obaveštenje sa jednom radnjom. Tekst je kratak i cilja refleks. Detalji su minimalni, ali posledica je velika. To stvara prazninu koju meta želi da zatvori klikom.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Šta meta vidi" data-en="What the target sees">Šta meta vidi</div>
            <ul class="bullets">
              <li data-sr="rutinski problem: paket, račun, kazna" data-en="routine issue: package, account, fine">rutinski problem: paket, račun, kazna</li>
              <li data-sr="veliku posledicu: blokada, povrat, kazna" data-en="big consequence: lock, return, fine">veliku posledicu: blokada, povrat, kazna</li>
              <li data-sr="jedan link kao “rešenje”" data-en="one link as the “fix”">jedan link kao “rešenje”</li>
            </ul>
          </div>
          <div class="phase">
            <div class="label" data-sr="Šta napadač radi" data-en="What the attacker does">Šta napadač radi</div>
            <ul class="bullets">
              <li data-sr="šalje veliki broj poruka" data-en="sends high volume messages">šalje veliki broj poruka</li>
              <li data-sr="testira ko klikće bez provere" data-en="tests who clicks without verification">testira ko klikće bez provere</li>
              <li data-sr="bira temu koja deluje verovatno" data-en="chooses plausible themes">bira temu koja deluje verovatno</li>
            </ul>
          </div>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> klik na link."
          data-en="<strong>Threshold:</strong> clicking the link."
        ><strong>Prag faze:</strong> klik na link.</div>
      </article>

      <!-- FAZA 2 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Link: skrivanje domena" data-en="Phase 2 — Link: hiding the domain">
          Faza 2 — Link: skrivanje domena
        </h3>

        <p
          data-sr="Link često krije domen iza skraćivača ili koristi domen sličnog izgleda. Na telefonu se vidi samo deo adrese, pa razlika prođe neprimećeno. U ovoj tački napadač dobija vreme, meta gubi kontekst."
          data-en="The link often hides the domain behind a shortener or uses a look-alike domain. On mobile only part of the address is visible, so the difference slips by. Here the attacker gains time and the target loses context."
        >Link često krije domen iza skraćivača ili koristi domen sličnog izgleda. Na telefonu se vidi samo deo adrese, pa razlika prođe neprimećeno. U ovoj tački napadač dobija vreme, meta gubi kontekst.</p>

        <ul class="bullets">
          <li data-sr="kratak link izgleda “čisto”" data-en="short links look “clean”">kratak link izgleda “čisto”</li>
          <li data-sr="sitna razlika u domenu se ne primeti" data-en="tiny domain changes go unnoticed">sitna razlika u domenu se ne primeti</li>
          <li data-sr="redirekcije maskiraju odredište" data-en="redirects mask destination">redirekcije maskiraju odredište</li>
        </ul>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> učitavanje lažne stranice."
          data-en="<strong>Threshold:</strong> landing on the fake page."
        ><strong>Prag faze:</strong> učitavanje lažne stranice.</div>
      </article>

      <!-- FAZA 3 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 3 — Lažna mobilna stranica: normalizacija" data-en="Phase 3 — Fake mobile page: normalization">
          Faza 3 — Lažna mobilna stranica: normalizacija
        </h3>

        <p
          data-sr="Stranica je mobilno prilagođena i traži minimum polja: login, kartica, ili OTP. Dizajn imitira poznat servis. Meta često gleda logo i naslov, dok domen ostaje u pozadini."
          data-en="The page is mobile-optimized and asks for minimal fields: login, card, or OTP. Design mimics a known service. Targets often look at logo and headline while the domain fades into the background."
        >Stranica je mobilno prilagođena i traži minimum polja: login, kartica, ili OTP. Dizajn imitira poznat servis. Meta često gleda logo i naslov, dok domen ostaje u pozadini.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Šta meta vidi" data-en="What the target sees">Šta meta vidi</div>
            <ul class="bullets">
              <li data-sr="poznat UI obrazac" data-en="familiar UI pattern">poznat UI obrazac</li>
              <li data-sr="kratku formu" data-en="a short form">kratku formu</li>
              <li data-sr="dugme “nastavi / potvrdi”" data-en="a “continue / confirm” button">dugme “nastavi / potvrdi”</li>
            </ul>
          </div>

          <div class="phase">
            <div class="label" data-sr="Šta napadač radi" data-en="What the attacker does">Šta napadač radi</div>
            <ul class="bullets">
              <li data-sr="traži minimum podataka za maksimum štete" data-en="asks minimum data for maximum damage">traži minimum podataka za maksimum štete</li>
              <li data-sr="maskira unos kao “verifikaciju”" data-en="frames entry as “verification”">maskira unos kao “verifikaciju”</li>
              <li data-sr="priprema nastavak: poziv, nova poruka, nova naplata" data-en="prepares continuation: call, new message, new charge">priprema nastavak: poziv, nova poruka, nova naplata</li>
            </ul>
          </div>
        </div>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj tački" data-en="Branching at this point">Grananja u ovoj tački</strong></p>
          <ul class="bullets">
            <li
              data-sr="<strong>Phishing:</strong> login ili kartica. (Povezano: <a href='phishing.html'>Phishing</a>)"
              data-en="<strong>Phishing:</strong> login or card. (Related: <a href='phishing.html'>Phishing</a>)"
            ><strong>Phishing:</strong> login ili kartica. (Povezano: <a href="phishing.html">Phishing</a>)</li>
            <li
              data-sr="<strong>Marketplace nastavak:</strong> “dostava/plaćanje” priča. (Povezano: <a href='marketplace-scam.html'>Marketplace prevare</a>)"
              data-en="<strong>Marketplace continuation:</strong> “delivery/payment” story. (Related: <a href='marketplace-scam.html'>Marketplace scams</a>)"
            ><strong>Marketplace nastavak:</strong> “dostava/plaćanje” priča. (Povezano: <a href="marketplace-scam.html">Marketplace prevare</a>)</li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> unos podataka ili prelazak na ekran koji traži OTP."
          data-en="<strong>Threshold:</strong> entering data or moving to an OTP step."
        ><strong>Prag faze:</strong> unos podataka ili prelazak na ekran koji traži OTP.</div>
      </article>

      <!-- FAZA 4 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 4 — Hitnost: rok i posledica" data-en="Phase 4 — Urgency: deadline and consequence">
          Faza 4 — Hitnost: rok i posledica
        </h3>

        <p
          data-sr="Rok i posledica služe da preseku proveru. Meta prelazi iz razmišljanja u izvršavanje. Često se pojavljuju fraze tipa “danas”, “poslednji rok”, “u suprotnom se vraća/zaključava”."
          data-en="Deadlines and consequences cut verification. The target shifts from thinking to executing. Phrases like “today”, “final deadline”, “otherwise it returns/locks” often appear."
        >Rok i posledica služe da preseku proveru. Meta prelazi iz razmišljanja u izvršavanje. Često se pojavljuju fraze tipa “danas”, “poslednji rok”, “u suprotnom se vraća/zaključava”.</p>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> meta potvrdi radnju jer želi brzo zatvaranje problema."
          data-en="<strong>Threshold:</strong> the target confirms the action to get quick closure."
        ><strong>Prag faze:</strong> meta potvrdi radnju jer želi brzo zatvaranje problema.</div>
      </article>

      <!-- FAZA 5 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Prag: login / kartica / OTP" data-en="Phase 5 — Threshold: login / card / OTP">
          Faza 5 — Prag: login / kartica / OTP
        </h3>

        <p
          data-sr="Prag nastaje kad podaci odu: login, kartica, OTP potvrda ili odobrenje u aplikaciji. Posle praga šteta prelazi u operativu: naplata, preuzimanje naloga, širenje napada kroz kontakte, prelaz na poziv."
          data-en="The threshold is crossed when data is submitted: login, card, OTP confirmation, or in-app approval. After the threshold, damage becomes operational: charges, account takeover, spreading via contacts, escalation into calls."
        >Prag nastaje kad podaci odu: login, kartica, OTP potvrda ili odobrenje u aplikaciji. Posle praga šteta prelazi u operativu: naplata, preuzimanje naloga, širenje napada kroz kontakte, prelaz na poziv.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Šta se dobija" data-en="What they gain">Šta se dobija</div>
            <ul class="bullets">
              <li data-sr="kredencijali za prijavu" data-en="login credentials">kredencijali za prijavu</li>
              <li data-sr="OTP kao autorizacija prijave ili naplate" data-en="OTP as authorization for login or charge">OTP kao autorizacija prijave ili naplate</li>
              <li data-sr="kartica za naplatu pod maskom “male doplate”" data-en="card data to charge under a “small fee” mask">kartica za naplatu pod maskom “male doplate”</li>
              <li data-sr="signal da meta reaguje brzo" data-en="signal the target reacts quickly">signal da meta reaguje brzo</li>
            </ul>
          </div>

          <div class="phase">
            <div class="label" data-sr="Šta sledi" data-en="What follows">Šta sledi</div>
            <ul class="bullets">
              <li data-sr="dodatne naplate ili pokušaji naplate" data-en="additional charges or attempts">dodatne naplate ili pokušaji naplate</li>
              <li data-sr="reset lozinki i promene naloga" data-en="password resets and account changes">reset lozinki i promene naloga</li>
              <li data-sr="poziv “podrške” radi vođenja" data-en="a “support” call for guidance">poziv “podrške” radi vođenja</li>
              <li data-sr="poruke kontaktima kroz preuzete naloge" data-en="messages to contacts from stolen accounts">poruke kontaktima kroz preuzete naloge</li>
            </ul>
          </div>
        </div>

        <div class="branch">
          <p><strong data-sr="Evolucije posle praga" data-en="Evolutions after the threshold">Evolucije posle praga</strong></p>
          <ul class="bullets">
            <li
              data-sr="<strong>Lažni poziv:</strong> vođenje uživo do “rešenja”. (Povezano: <a href='fake-call-scam.html'>Lažni pozivi</a>)"
              data-en="<strong>Fake call:</strong> live guidance toward a “solution”. (Related: <a href='fake-call-scam.html'>Fake calls</a>)"
            ><strong>Lažni poziv:</strong> vođenje uživo do “rešenja”. (Povezano: <a href="fake-call-scam.html">Lažni pozivi</a>)</li>
            <li
              data-sr="<strong>Advance-fee:</strong> naknade kao nastavak procesa. (Povezano: <a href='advance-fee-fraud.html'>Advance-fee</a>)"
              data-en="<strong>Advance-fee:</strong> fees as continuation. (Related: <a href='advance-fee-fraud.html'>Advance-fee</a>)"
            ><strong>Advance-fee:</strong> naknade kao nastavak procesa. (Povezano: <a href="advance-fee-fraud.html">Advance-fee</a>)</li>
            <li
              data-sr="<strong>Recovery:</strong> drugi talas posle gubitka. (Povezano: <a href='recovery-scam.html'>Recovery</a>)"
              data-en="<strong>Recovery:</strong> second wave after the loss. (Related: <a href='recovery-scam.html'>Recovery</a>)"
            ><strong>Recovery:</strong> drugi talas posle gubitka. (Povezano: <a href="recovery-scam.html">Recovery</a>)</li>
          </ul>
        </div>
      </article>

      <!-- FAZA 6 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 6 — Serijske posledice" data-en="Phase 6 — Cascading consequences">
          Faza 6 — Serijske posledice
        </h3>

        <p
          data-sr="Posle praga dolaze serije: dodatne naplate, promene lozinki, promene recovery podataka, prijave sa novih uređaja, poruke kontaktima. Meta često pokušava da “završi” jer veruje da je incident proceduralan."
          data-en="After the threshold come cascades: additional charges, password changes, recovery changes, logins from new devices, messages to contacts. Targets often try to “finish” because they believe it’s a procedural incident."
        >Posle praga dolaze serije: dodatne naplate, promene lozinki, promene recovery podataka, prijave sa novih uređaja, poruke kontaktima. Meta često pokušava da “završi” jer veruje da je incident proceduralan.</p>

        <div class="callout"
          data-sr="<strong>Pravilo:</strong> posle praga fokus ide na prekid toka i zaštitu naloga, ne na “završavanje”."
          data-en="<strong>Rule:</strong> after the threshold, focus on cutting the flow and securing accounts, not “finishing” steps."
        ><strong>Pravilo:</strong> posle praga fokus ide na prekid toka i zaštitu naloga, ne na “završavanje”.</div>
      </article>

      <!-- FAZA 7 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 7 — Pritisak i vođenje (poziv/podrška)" data-en="Phase 7 — Pressure and guidance (calls/support)">
          Faza 7 — Pritisak i vođenje (poziv/podrška)
        </h3>

        <p
          data-sr="Kad meta zastane, stiže poziv ili dodatna poruka. Glas preuzima tempo i zatvara pauzu. Napadač vodi korake uživo da bi smanjio prostor za sumnju."
          data-en="When the target hesitates, a call or extra message arrives. Voice takes pace control and closes pauses. The attacker guides steps live to reduce doubt."
        >Kad meta zastane, stiže poziv ili dodatna poruka. Glas preuzima tempo i zatvara pauzu. Napadač vodi korake uživo da bi smanjio prostor za sumnju.</p>

        <div class="branch">
          <p><strong data-sr="Povezano" data-en="Related">Povezano</strong></p>
          <ul class="bullets">
            <li data-sr="Lažni pozivi (Povezano: <a href='fake-call-scam.html'>Lažni pozivi</a>)" data-en="Fake calls (Related: <a href='fake-call-scam.html'>Fake calls</a>)">Lažni pozivi (Povezano: <a href="fake-call-scam.html">Lažni pozivi</a>)</li>
          </ul>
        </div>
      </article>

      <!-- FAZA 8 -->
      <article class="phase">
        <h3 class="phase-title bad" data-sr="Faza 8 — Mutacije" data-en="Phase 8 — Mutations">
          Faza 8 — Mutacije
        </h3>

        <p
          data-sr="Priča menja kostim: novi link, nova forma, novi agent, novi broj. Mehanika ostaje ista: brzina i prag. Meta dobija osećaj da je “drugi problem”, a zapravo je isti tok."
          data-en="The costume changes: new link, new form, new agent, new number. The mechanism stays the same: speed and threshold. The target feels it’s a “new problem,” but it’s the same flow."
        >Priča menja kostim: novi link, nova forma, novi agent, novi broj. Mehanika ostaje ista: brzina i prag. Meta dobija osećaj da je “drugi problem”, a zapravo je isti tok.</p>
      </article>

      <!-- FAZA 9 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 9 — Recovery talas" data-en="Phase 9 — Recovery wave">
          Faza 9 — Recovery talas
        </h3>

        <p
          data-sr="Posle incidenta stiže ponuda za povrat uz uplatu unapred. To je tipičan drugi napad na istu metu, često sa više autoriteta i formalnijim tonom."
          data-en="After the incident, a recovery offer appears demanding upfront payment. This is the typical second attack on the same victim, often with stronger authority and more formal tone."
        >Posle incidenta stiže ponuda za povrat uz uplatu unapred. To je tipičan drugi napad na istu metu, često sa više autoriteta i formalnijim tonom.</p>
      </article>
    </section>

    <!-- 6) BRZE PROVERE (PRAKTIČNO) -->
    <section class="card">
      <h2 data-sr="Brze provere (praktično)" data-en="Quick checks (practical)">
        Brze provere (praktično)
      </h2>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pre klika" data-en="Before clicking">Pre klika</div>
          <ul class="bullets">
            <li data-sr="SMS sa hitnošću zaslužuje pauzu" data-en="urgent SMS deserves a pause">SMS sa hitnošću zaslužuje pauzu</li>
            <li data-sr="tema “dostava/banka/kazna” je klasičan okvir" data-en="“delivery/bank/fine” is a classic frame">tema “dostava/banka/kazna” je klasičan okvir</li>
            <li data-sr="poruka bez detalja uz link ima visok rizik" data-en="a message with no details and a link is high risk">poruka bez detalja uz link ima visok rizik</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Posle klika" data-en="After clicking">Posle klika</div>
          <ul class="bullets">
            <li data-sr="provera domena je osnovna" data-en="domain checking is basic">provera domena je osnovna</li>
            <li data-sr="kartica + CVV na “dostavi” je crvena zastavica" data-en="card + CVV on “delivery” is a red flag">kartica + CVV na “dostavi” je crvena zastavica</li>
            <li data-sr="OTP tretman: autorizacija, svaki put" data-en="OTP rule: authorization every time">OTP tretman: autorizacija, svaki put</li>
          </ul>
        </div>
      </div>

      <div class="callout"
        data-sr="<strong>Minimalno pravilo:</strong> do servisa se dolazi kroz aplikaciju ili ručno ukucan domen. Link iz SMS-a tretira se kao rizičan ulaz."
        data-en="<strong>Minimum rule:</strong> reach the service via the app or typed domain. Treat SMS links as risky entry points."
      ><strong>Minimalno pravilo:</strong> do servisa se dolazi kroz aplikaciju ili ručno ukucan domen. Link iz SMS-a tretira se kao rizičan ulaz.</div>
    </section>

    <!-- 7) AKO JE ŠTETA NASTALA -->
    <section class="card">
      <h2 data-sr="Ako je šteta nastala (redosled poteza)" data-en="If damage happened (action order)">
        Ako je šteta nastala (redosled poteza)
      </h2>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Kartica / naplata" data-en="Card / charges">Kartica / naplata</div>
          <ol class="steps">
            <li data-sr="kontakt banke radi zaštite kartice i provere transakcija" data-en="contact the bank to secure the card and review transactions">kontakt banke radi zaštite kartice i provere transakcija</li>
            <li data-sr="prijava spornih transakcija kroz zvaničan proces" data-en="dispute suspicious transactions via official process">prijava spornih transakcija kroz zvaničan proces</li>
            <li data-sr="čuvanje poruke i linka kao dokaza" data-en="save message and link as evidence">čuvanje poruke i linka kao dokaza</li>
          </ol>
        </div>

        <div class="phase">
          <div class="label" data-sr="Login / nalog" data-en="Login / account">Login / nalog</div>
          <ol class="steps">
            <li data-sr="promena lozinki na ključnim nalozima, posebno email" data-en="change passwords on key accounts, especially email">promena lozinki na ključnim nalozima, posebno email</li>
            <li data-sr="uključivanje 2FA i provera recovery podataka" data-en="enable 2FA and verify recovery details">uključivanje 2FA i provera recovery podataka</li>
            <li data-sr="provera aktivnih uređaja/sesija i odjava nepoznatih" data-en="review active sessions/devices and sign out unknown ones">provera aktivnih uređaja/sesija i odjava nepoznatih</li>
          </ol>
        </div>
      </div>

      <div class="callout"
        data-sr="<strong>Upozorenje:</strong> posle incidenta često stiže recovery ponuda uz uplatu. Takav kontakt tretira se kao drugi napad."
        data-en="<strong>Warning:</strong> after an incident, paid recovery offers often arrive. Treat them as a second attack."
      ><strong>Upozorenje:</strong> posle incidenta često stiže recovery ponuda uz uplatu. Takav kontakt tretira se kao drugi napad.</div>
    </section>

    <!-- 8) IZ UGLA PREVARANTA -->
    <section class="card">
      <h2 data-sr="Iz ugla prevaranata: kako se smishing vodi" data-en="From the scammers’ side: how smishing is run">
        Iz ugla prevaranata: kako se smishing vodi
      </h2>

      <p
        data-sr="Smishing kampanje rade kao filter. Meta koja klikne pokazuje spremnost na brzu radnju. Posle toga tok prelazi u dublje šeme: phishing forma, poziv, serija troškova, recovery talas."
        data-en="Smishing campaigns operate as a filter. A target who clicks signals readiness for quick action. After that the flow moves into deeper schemes: phishing forms, calls, fee series, recovery wave."
      >Smishing kampanje rade kao filter. Meta koja klikne pokazuje spremnost na brzu radnju. Posle toga tok prelazi u dublje šeme: phishing forma, poziv, serija troškova, recovery talas.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta žele pre praga" data-en="What they want before the threshold">Šta žele pre praga</div>
          <ul class="bullets">
            <li data-sr="klik bez pauze" data-en="click with no pause">klik bez pauze</li>
            <li data-sr="unos podataka na mobilnoj formi" data-en="data entry on a mobile form">unos podataka na mobilnoj formi</li>
            <li data-sr="OTP potvrda pod maskom verifikacije" data-en="OTP confirmation disguised as verification">OTP potvrda pod maskom verifikacije</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Šta žele posle praga" data-en="What they want after the threshold">Šta žele posle praga</div>
          <ul class="bullets">
            <li data-sr="seriju naplata ili reset tokova" data-en="series of charges or reset flows">seriju naplata ili reset tokova</li>
            <li data-sr="poziv radi kontrole tempa" data-en="calls for pace control">poziv radi kontrole tempa</li>
            <li data-sr="recovery ponude posle gubitka" data-en="paid recovery offers after loss">recovery ponude posle gubitka</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 9) IZVORI -->
    <section class="card sources" id="sources">
      <h2 data-sr="Izvori" data-en="Sources">Izvori</h2>
      <ul>
        <li><a href="https://www.ncsc.gov.uk/guidance/phishing" target="_blank" rel="noopener noreferrer">UK NCSC — Phishing guidance</a></li>
        <li><a href="https://consumer.ftc.gov/scams" target="_blank" rel="noopener noreferrer">FTC — Scam guidance</a></li>
      </ul>
    </section>
  `
};
