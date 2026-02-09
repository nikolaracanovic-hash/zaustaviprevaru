window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["scareware"] = {
  raw_html: `
    <!-- 1) UVOD -->
    <section class="card">
      <h2 data-sr="Uvod: kako radi program koji plaši" data-en="Introduction: how program koji plaši works">
        Uvod: kako radi program koji plaši
      </h2>

      <p
        data-sr="Program koji plaši koristi strah kao okidač. Lažno upozorenje na ekranu tvrdi da je uređaj zaražen, kompromitovan, ili da podaci cure. Poruka izgleda sistemski: crvene boje, službeni ton, alarmi. Cilj je da korisnik reaguje pre nego što razmisli — pozove broj, instalira softver, ili plati „zaštitu“."
        data-en="Program koji plaši uses fear as a trigger. A fake on-screen warning claims the device is infected, compromised, or data is leaking. The message looks system-like: red colors, official tone, alarms. The goal is for the user to react before thinking — call a number, install software, or pay for protection."
      >Program koji plaši koristi strah kao okidač. Lažno upozorenje na ekranu tvrdi da je uređaj zaražen, kompromitovan, ili da podaci cure. Poruka izgleda sistemski: crvene boje, službeni ton, alarmi. Cilj je da korisnik reaguje pre nego što razmisli — pozove broj, instalira softver, ili plati „zaštitu".</p>

      <p
        data-sr="Program koji plaši nije krajnja prevara, nego ulaz. Kada korisnik pozove broj, tok prelazi u tech support prevaru: daljinski pristup, lažna dijagnoza, naplata. Kada instalira ponuđeni softver, može dobiti zlonamerni program, reklame koje smetaju, ili lažni antivirus koji traži uplatu. Program koji plaši je filter koji selektuje ljude koji reaguju na strah." data-en="Program koji plaši isn't the final scam but an entry point. When the user calls the number, the flow becomes a tech support scam: kontrola računara, fake diagnosis, charges. When they install the offered software, they may get virus, reklame koje smetaju, or fake antivirus demanding payment. Program koji plaši is a filter selecting people who react to fear."
      >Program koji plaši nije krajnja prevara, nego ulaz. Kada korisnik pozove broj, tok prelazi u tech support prevaru: daljinski pristup, lažna dijagnoza, naplata. Kada instalira ponuđeni softver, može dobiti zlonamerni program, reklame koje smetaju, ili lažni antivirus koji traži uplatu. Program koji plaši je filter koji selektuje ljude koji reaguju na strah.</p>

      <div class="callout"
        data-sr="<strong>Model:</strong> lažno upozorenje → panika → radnja (poziv/instalacija/uplata) → tech support tok ili zlonamerni program" data-en="<strong>Model:</strong> fake warning → panic → action (call/install/pay) → tech support flow or virus"
      ><strong>Model:</strong> lažno upozorenje → panika → radnja (poziv/instalacija/uplata) → tech support tok ili virus</div>
    </section>

    <!-- 2) TIPOVI UPOZORENJA -->
    <section class="card">
      <h2 data-sr="Tipovi lažnih upozorenja" data-en="Types of fake warnings">
        Tipovi lažnih upozorenja
      </h2>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Browser pop-up" data-en="Browser pop-up">Browser pop-up</div>
          <ul class="bullets">
            <li data-sr="pojavljuje se tokom surfovanja" data-en="appears while browsing">pojavljuje se tokom surfovanja</li>
            <li data-sr="može da blokira tab ili fullscreen" data-en="may lock tab or go fullscreen">može da blokira tab ili fullscreen</li>
            <li data-sr="sadrži broj telefona i hitnost" data-en="contains phone number and urgency">sadrži broj telefona i hitnost</li>
            <li data-sr="često pušta zvučni alarm" data-en="often plays audio alarm">često pušta zvučni alarm</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Malvertising" data-en="Malvertising">Malvertising</div>
          <ul class="bullets">
            <li data-sr="zlonamerni oglas na legitimnom sajtu" data-en="malicious ad on legitimate site">zlonamerni oglas na legitimnom sajtu</li>
            <li data-sr="automatski redirect na program koji plaši stranicu" data-en="automatic redirect to program koji plaši page">automatski redirect na program koji plaši stranicu</li>
            <li data-sr="ne zahteva klik da bi se pokrenuo" data-en="doesn't require click to trigger">ne zahteva klik da bi se pokrenuo</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Lažni antivirus softver" data-en="Fake antivirus software">Lažni antivirus softver</div>
          <ul class="bullets">
            <li data-sr="instaliran kao „besplatna zaštita“" data-en="installed as free protection">instaliran kao „besplatna zaštita“</li>
            <li data-sr="prikazuje lažne skenove i „viruse“" data-en="shows fake scans and viruses">prikazuje lažne skenove i „viruse“</li>
            <li data-sr="traži uplatu za „čišćenje“" data-en="demands payment for cleanup">traži uplatu za „čišćenje“</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="imejl / SMS upozorenje" data-en="Imejl / SMS warning">Imejl / SMS upozorenje</div>
          <ul class="bullets">
            <li data-sr="poruka o „detektovanom virusu“" data-en="message about a detected virus">poruka o „detektovanom virusu“</li>
            <li data-sr="link ka „skeniranju“" data-en="link to scanning or protection">link ka „skeniranju“</li>
            <li data-sr="može preći u fišing tok" data-en="may shift into phishing flow">može preći u fišing tok</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 3) HRONOLOŠKI TOK -->
    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching)">
        Hronološki tok (faze + grananja)
      </h2>

      <!-- FAZA 1 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Upozorenje: šok i panika" data-en="Phase 1 — Warning: shock and panic">
          Faza 1 — Upozorenje: šok i panika
        </h3>

        <p
          data-sr="Korisnik vidi dramatično upozorenje: „VAŠ RAČUNAR JE ZARAŽEN“, „HAKERI IMAJU PRISTUP“, „PODACI CURE“."
          data-en="The user sees a dramatic warning: YOUR COMPUTER IS INFECTED, HACKERS HAVE ACCESS, DATA IS LEAKING."
        >Korisnik vidi dramatično upozorenje: „VAŠ RAČUNAR JE ZARAŽEN", „HAKERI IMAJU PRISTUP", „PODACI CURE". Crvene boje, alarmi, službeni izgled. Poruka blokira normalan rad ili izgleda kao da blokira.</p>

        <ul class="bullets">
          <li data-sr="„KRITIČNO UPOZORENJE: Pronađeno 47 virusa“" data-en="CRITICAL WARNING: 47 viruses found">„KRITIČNO UPOZORENJE: Pronađeno 47 virusa“</li>
          <li data-sr="„Vaši podaci se šalju hakerima“" data-en="Your data is being sent to hackers">„Vaši podaci se šalju hakerima“</li>
          <li data-sr="„Zovite odmah: 0800-XXX-XXX“" data-en="Call immediately: 0800-XXX-XXX">„Zovite odmah: 0800-XXX-XXX“</li>
          <li data-sr="„NE GASITE RAČUNAR“" data-en="DO NOT TURN OFF YOUR COMPUTER">„NE GASITE RAČUNAR“</li>
        </ul>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> korisnik veruje da je problem stvaran." data-en="<strong>Threshold:</strong> user believes the problem is real."
        ><strong>Prag faze:</strong> korisnik veruje da je problem stvaran.</div>
      </article>

      <!-- FAZA 2 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Poziv ili instalacija" data-en="Phase 2 — Call or installation">
          Faza 2 — Poziv ili instalacija
        </h3>

        <p
          data-sr="Korisnik zove broj iz upozorenja ili klikće na „Popravi odmah“ / „Skeniraj“."
          data-en="The user calls the number from the warning or clicks Fix Now / Scan."
        >Korisnik zove broj iz upozorenja ili klikće na „Popravi odmah“ / „Skeniraj“.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Ako pozove" data-en="If they call">Ako pozove</div>
            <ul class="bullets">
              <li data-sr="tok prelazi u tech support prevaru" data-en="flow becomes tech support scam">tok prelazi u tech support prevaru</li>
              <li data-sr="traže daljinski pristup „za pomoć“" data-en="they ask for remote access to help">traže daljinski pristup „za pomoć“</li>
              <li data-sr="sledi lažna dijagnoza i naplata" data-en="fake diagnosis and charges follow">sledi lažna dijagnoza i naplata</li>
            </ul>
          </div>
          <div class="phase">
            <div class="label" data-sr="Ako instalira" data-en="If they install">Ako instalira</div>
            <ul class="bullets">
              <li data-sr="može dobiti lažni antivirus" data-en="may get fake antivirus">može dobiti lažni antivirus</li>
              <li data-sr="može dobiti reklame koje smetaju ili zlonamerni program" data-en="may get reklame koje smetaju or virus">može dobiti reklame koje smetaju ili zlonamerni program</li>
              <li data-sr="softver traži uplatu za „zaštitu“" data-en="software demands payment for protection">softver traži uplatu za „zaštitu“</li>
            </ul>
          </div>
        </div>

        <div class="branch">
          <p><strong data-sr="Grananja iz ove faze" data-en="Branching from this phase">Grananja iz ove faze</strong></p>
          <ul class="bullets">
            <li data-sr="<strong>Tech support:</strong> daljinski pristup i naplata. (Povezano: <a href='tech-support-scam.html'>Tech support</a>)" data-en="<strong>Tech support:</strong> kontrola računara and charges. (Related: <a href='tech-support-scam.html'>Tech support</a>)"><strong>Tech support:</strong> daljinski pristup i naplata. (Povezano: <a href="tech-support-scam.html">Tech support</a>)</li>
            <li data-sr="<strong>fišing:</strong> ako link vodi na formu. (Povezano: <a href='fišing.html'>fišing</a>)" data-en="<strong>Fišing:</strong> if link leads to form. (Related: <a href='phishing.html'>Phishing</a>)"><strong>Fišing:</strong> ako link vodi na formu. (Povezano: <a href="phishing.html">Phishing</a>)</li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Prag:</strong> poziv ili instalacija. Posle ovog trenutka tok se nastavlja kroz tech support ili zlonamerni program." data-en="<strong>Threshold:</strong> call or installation. After this moment the flow continues through tech support or virus."
        ><strong>Prag:</strong> poziv ili instalacija. Posle ovog trenutka tok se nastavlja kroz tech support ili virus.</div>
      </article>

      <!-- FAZA 3 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Eksploatacija" data-en="Phase 3 — Exploitation">
          Faza 3 — Eksploatacija
        </h3>

        <p
          data-sr="Ako je put bio poziv: napadač traži daljinski pristup, prikazuje lažnu dijagnozu, naplaćuje „popravku“. Ako je put bio instalacija: lažni softver prikazuje stalne „pretnje“ i traži uplatu za „zaštitu“ ili „premium verziju“."
          data-en="If the path was a call: attacker requests remote access, shows fake diagnosis, charges for repair. If the path was installation: fake software displays constant threats and demands payment for protection or a premium version."
        >Ako je put bio poziv: napadač traži daljinski pristup, prikazuje lažnu dijagnozu, naplaćuje „popravku“. Ako je put bio instalacija: lažni softver prikazuje stalne „pretnje“ i traži uplatu za „zaštitu“ ili „premium verziju“.</p>
      </article>

      <!-- FAZA 4 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 4 — Ponavljanje i recovery" data-en="Phase 4 — Repetition and recovery">
          Faza 4 — Ponavljanje i recovery
        </h3>

        <p
          data-sr="Posle inicijalne naplate mogu slediti nove: „problem se vratio“, „potrebna nadogradnja“, „godišnja pretplata“."
          data-en="After initial charges, new ones may follow: problem returned, upgrade needed, annual subscription."
        >Posle inicijalne naplate mogu slediti nove: „problem se vratio“, „potrebna nadogradnja“, „godišnja pretplata“.</p>

        <div class="branch">
          <p><strong data-sr="Povezano" data-en="Related">Povezano</strong></p>
          <ul class="bullets">
            <li data-sr="<strong>Advance-fee:</strong> dodatne naplate. (Povezano: <a href='advance-fee-fraud.html'>Advance-fee</a>)" data-en="<strong>Advance-fee:</strong> additional charges. (Related: <a href='advance-fee-fraud.html'>Advance-fee</a>)"><strong>Advance-fee:</strong> dodatne naplate. (Povezano: <a href="advance-fee-fraud.html">Advance-fee</a>)</li>
            <li data-sr="<strong>Recovery:</strong> lažni povrat. (Povezano: <a href='recovery-scam.html'>Recovery</a>)" data-en="<strong>Recovery:</strong> fake refund. (Related: <a href='recovery-scam.html'>Recovery</a>)"><strong>Recovery:</strong> lažni povrat. (Povezano: <a href="recovery-scam.html">Recovery</a>)</li>
          </ul>
        </div>
      </article>
    </section>

    <!-- 4) KAKO PREPOZNATI -->
    <section class="card">
      <h2 data-sr="Kako prepoznati program koji plaši" data-en="How to recognize program koji plaši">
        Kako prepoznati program koji plaši
      </h2>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Znaci lažnog upozorenja" data-en="Signs of fake warning">Znaci lažnog upozorenja</div>
          <ul class="bullets">
            <li data-sr="pojavljuje se u browseru, ne iz instaliranog antivirusa" data-en="appears in browser, not from installed antivirus">pojavljuje se u browseru, ne iz instaliranog antivirusa</li>
            <li data-sr="sadrži broj telefona za „podršku“" data-en="contains a phone number for support">sadrži broj telefona za „podršku“</li>
            <li data-sr="dramatičan jezik i crvene boje" data-en="dramatic language and red colors">dramatičan jezik i crvene boje</li>
            <li data-sr="blokira ekran ili tab" data-en="blocks screen or tab">blokira ekran ili tab</li>
            <li data-sr="pušta zvučni alarm" data-en="plays audio alarm">pušta zvučni alarm</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Šta stvarni antivirus RADI" data-en="What real antivirus DOES">Šta stvarni antivirus RADI</div>
          <ul class="bullets">
            <li data-sr="prikazuje notifikaciju iz instaliranog softvera" data-en="shows notification from installed software">prikazuje notifikaciju iz instaliranog softvera</li>
            <li data-sr="ne traži da pozoveš broj" data-en="doesn't ask you to call a number">ne traži da pozoveš broj</li>
            <li data-sr="ne blokira ceo ekran dramatičnom porukom" data-en="doesn't block entire screen with dramatic message">ne blokira ceo ekran dramatičnom porukom</li>
            <li data-sr="ne pušta alarmne zvukove iz browsera" data-en="doesn't play alarm sounds from browser">ne pušta alarmne zvukove iz browsera</li>
          </ul>
        </div>
      </div>

      <div class="callout"
        data-sr="<strong>Brzi test:</strong> Da li upozorenje dolazi iz browsera? Da li sadrži broj telefona? Ako da — program koji plaši." data-en="<strong>Quick test:</strong> Is the warning from a browser? Does it contain a phone number? If yes — program koji plaši."
      ><strong>Brzi test:</strong> Da li upozorenje dolazi iz browsera? Da li sadrži broj telefona? Ako da — program koji plaši.</div>
    </section>

    <!-- 5) STANDARDNA UPOZORENJA -->
    <section class="card">
      <h2 data-sr="Standardna upozorenja" data-en="Standard warnings">Standardna upozorenja</h2>

      <ul class="bullets">
        <li data-sr="Microsoft, Apple i antivirus kompanije ne prikazuju upozorenja sa brojem telefona u browseru" data-en="Microsoft, Apple, and antivirus companies don't display browser warnings with phone numbers">Microsoft, Apple i antivirus kompanije ne prikazuju upozorenja sa brojem telefona u browseru</li>
        <li data-sr="stvarno upozorenje dolazi iz instaliranog softvera, ne iz web stranice" data-en="real warnings come from installed software, not web pages">stvarno upozorenje dolazi iz instaliranog softvera, ne iz web stranice</li>
        <li data-sr="ako se ekran „zaključa“, često je dovoljno zatvoriti browser (Ctrl+W, Alt+F4, Task Manager)" data-en="if the screen 'locks', it is often enough to close the browser (Ctrl+W, Alt+F4, Task Manager)">ako se ekran „zaključa“, često je dovoljno zatvoriti browser (Ctrl+W, Alt+F4, Task Manager)</li>
      </ul>
    </section>
  `
};
