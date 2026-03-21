window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["scareware"] = {
  raw_html: `
    <!-- 1) UVOD -->
    <section class="card">
      <h2 data-sr="Uvod: kako radi program koji plaši" data-en="Introduction: how scareware works">
        Uvod: kako radi program koji plaši
      </h2>

      <p
        data-sr="Program koji plaši koristi strah kao okidač. Lažno upozorenje na ekranu tvrdi da je uređaj zaražen, kompromitovan, ili da podaci cure. Poruka izgleda sistemski: crvene boje, službeni ton, alarmi. Cilj je da korisnik reaguje pre nego što razmisli — pozove broj, instalira softver, ili plati zaštitu."
        data-en="Scareware uses fear as a trigger. A fake on-screen warning claims the device is infected, compromised, or data is leaking. The message looks system-like: red colors, official tone, alarms. The goal is for the user to react before thinking — call a number, install software, or pay for protection."
      >Program koji plaši koristi strah kao okidač. Lažno upozorenje na ekranu tvrdi da je uređaj zaražen, kompromitovan, ili da podaci cure. Poruka izgleda sistemski: crvene boje, službeni ton, alarmi. Cilj je da korisnik reaguje pre nego što razmisli — pozove broj, instalira softver, ili plati zaštitu.</p>

      <p
        data-sr="Program koji plaši nije krajnja prevara, nego ulaz. Kada korisnik pozove broj, tok prelazi u prevaru tehničke podrške: daljinski pristup, lažna dijagnoza, naplata. Kada instalira ponuđeni softver, može dobiti zlonamerni program, reklame koje smetaju, ili lažni antivirus koji traži uplatu. Program koji plaši je filter koji selektuje ljude koji reaguju na strah." data-en="Scareware isn't the final scam but an entry point. When the user calls the number, the flow becomes a tech support scam: remote access, fake diagnosis, and charges. When they install the offered software, they may get malware, intrusive ads, or a fake antivirus that demands payment. Scareware is a filter that selects people who react to fear."
      >Program koji plaši nije krajnja prevara, nego ulaz. Kada korisnik pozove broj, tok prelazi u prevaru tehničke podrške: daljinski pristup, lažna dijagnoza, naplata. Kada instalira ponuđeni softver, može dobiti zlonamerni program, reklame koje smetaju, ili lažni antivirus koji traži uplatu. Program koji plaši je filter koji selektuje ljude koji reaguju na strah.</p>

      <div class="callout"
        data-sr="<strong>Model:</strong> lažno upozorenje → panika → radnja (poziv/instalacija/uplata) → tok prevare tehničke podrške ili zlonamerni program." data-en="<strong>Model:</strong> fake warning → panic → action (call/install/pay) → tech support flow or malware."
      ><strong>Model:</strong> lažno upozorenje → panika → radnja (poziv/instalacija/uplata) → tok prevare tehničke podrške ili zlonamerni program.</div>
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
            <li data-sr="pojavljuje se tokom surfovanja." data-en="appears while browsing.">pojavljuje se tokom surfovanja.</li>
            <li data-sr="može da blokira tab ili fullscreen." data-en="may lock tab or go fullscreen.">može da blokira tab ili fullscreen.</li>
            <li data-sr="sadrži broj telefona i hitnost." data-en="contains phone number and urgency.">sadrži broj telefona i hitnost.</li>
            <li data-sr="često pušta zvučni alarm." data-en="often plays audio alarm.">često pušta zvučni alarm.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Malvertising" data-en="Malvertising">Malvertising</div>
          <ul class="bullets">
            <li data-sr="zlonamerni oglas na legitimnom sajtu." data-en="malicious ad on legitimate site.">zlonamerni oglas na legitimnom sajtu.</li>
            <li data-sr="automatski redirect na program koji plaši stranicu." data-en="automatic redirect to a scareware page.">automatski redirect na program koji plaši stranicu.</li>
            <li data-sr="ne zahteva klik da bi se pokrenuo." data-en="doesn't require click to trigger.">ne zahteva klik da bi se pokrenuo.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Lažni antivirus softver" data-en="Fake antivirus software">Lažni antivirus softver</div>
          <ul class="bullets">
            <li data-sr="instaliran kao besplatna zaštita." data-en="installed as free protection.">instaliran kao besplatna zaštita.</li>
            <li data-sr="prikazuje lažne skenove i viruse." data-en="shows fake scans and viruses.">prikazuje lažne skenove i viruse.</li>
            <li data-sr="traži uplatu za čišćenje." data-en="demands payment for cleanup.">traži uplatu za čišćenje.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Imejl / SMS upozorenje" data-en="Imejl / SMS warning">Imejl / SMS upozorenje</div>
          <ul class="bullets">
            <li data-sr="poruka o detektovanom virusu." data-en="message about a detected virus.">poruka o detektovanom virusu.</li>
            <li data-sr="link ka skeniranju." data-en="link to scanning or protection.">link ka skeniranju.</li>
            <li data-sr="može preći u fišing tok." data-en="may shift into phishing flow.">može preći u fišing tok.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 3) HRONOLOŠKI TOK -->
    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)." data-en="Timeline (phases + branching).">
        Hronološki tok (faze + grananja)
      </h2>

      <!-- FAZA 1 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Upozorenje: šok i panika" data-en="Phase 1 — Warning: shock and panic">
          Faza 1 — Upozorenje: šok i panika
        </h3>

        <p
          data-sr="Korisnik vidi dramatično upozorenje: VAŠ RAČUNAR JE ZARAŽEN, HAKERI IMAJU PRISTUP, PODACI CURE."
          data-en="The user sees a dramatic warning: YOUR COMPUTER IS INFECTED, HACKERS HAVE ACCESS, DATA IS LEAKING."
        >Korisnik vidi dramatično upozorenje: VAŠ RAČUNAR JE ZARAŽEN, HAKERI IMAJU PRISTUP, PODACI CURE. Crvene boje, alarmi, službeni izgled. Poruka blokira normalan rad ili izgleda kao da blokira.</p>

        <ul class="bullets">
          <li data-sr="KRITIČNO UPOZORENJE: Pronađeno 47 virusa." data-en="CRITICAL WARNING: 47 viruses found.">KRITIČNO UPOZORENJE: Pronađeno 47 virusa.</li>
          <li data-sr="Vaši podaci se šalju hakerima." data-en="Your data is being sent to hackers.">Vaši podaci se šalju hakerima.</li>
          <li data-sr="Zovite odmah: 0800-XXX-XXX." data-en="Call immediately: 0800-XXX-XXX.">Zovite odmah: 0800-XXX-XXX.</li>
          <li data-sr="NE GASITE RAČUNAR." data-en="DO NOT TURN OFF YOUR COMPUTER.">NE GASITE RAČUNAR.</li>
        </ul>

        <div class="callout"
          data-sr="Threshold:" data-en="<strong>Threshold:</strong> user believes the problem is real."
        ><strong>Prag faze:</strong> korisnik veruje da je problem stvaran.</div>
      </article>

      <!-- FAZA 2 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Poziv ili instalacija" data-en="Phase 2 — Call or installation">
          Faza 2 — Poziv ili instalacija
        </h3>

        <p
          data-sr="Korisnik zove broj iz upozorenja ili klikće na Popravi odmah / Skeniraj."
          data-en="The user calls the number from the warning or clicks Fix Now / Scan."
        >Korisnik zove broj iz upozorenja ili klikće na Popravi odmah / Skeniraj.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Ako pozove" data-en="If they call">Ako pozove</div>
            <ul class="bullets">
              <li data-sr="tok prelazi u prevaru tehničke podrške." data-en="flow becomes a tech support scam.">tok prelazi u prevaru tehničke podrške.</li>
              <li data-sr="traže daljinski pristup za pomoć." data-en="they ask for remote access to help.">traže daljinski pristup za pomoć.</li>
              <li data-sr="sledi lažna dijagnoza i naplata." data-en="fake diagnosis and charges follow.">sledi lažna dijagnoza i naplata.</li>
            </ul>
          </div>
          <div class="phase">
            <div class="label" data-sr="Ako instalira" data-en="If they install">Ako instalira</div>
            <ul class="bullets">
              <li data-sr="može dobiti lažni antivirus." data-en="may get fake antivirus.">može dobiti lažni antivirus.</li>
              <li data-sr="može dobiti reklame koje smetaju ili zlonamerni program." data-en="may get intrusive ads or malware.">može dobiti reklame koje smetaju ili zlonamerni program.</li>
              <li data-sr="softver traži uplatu za zaštitu." data-en="software demands payment for protection.">softver traži uplatu za zaštitu.</li>
            </ul>
          </div>
        </div>

        <div class="branch">
          <p><strong data-sr="Grananja iz ove faze" data-en="Branching from this phase">Grananja iz ove faze</strong></p>
          <ul class="bullets">
            <li><a href="tech-support-scam.html" data-sr="Prevara lažne tehničke podrške" data-en="Tech support scam">Prevara lažne tehničke podrške</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
          </ul>
        </div>

        <div class="callout"
          data-sr="Threshold:" data-en="<strong>Threshold:</strong> call or installation. After this moment the flow continues through a tech support scam or malware."
        ><strong>Prag:</strong> poziv ili instalacija. Posle ovog trenutka tok se nastavlja kroz prevaru tehničke podrške ili zlonamerni program.</div>
      </article>

      <!-- FAZA 3 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Eksploatacija" data-en="Phase 3 — Exploitation">
          Faza 3 — Eksploatacija
        </h3>

        <p
          data-sr="Ako je put bio poziv: napadač traži daljinski pristup, prikazuje lažnu dijagnozu, naplaćuje popravku. Ako je put bio instalacija: lažni softver prikazuje stalne pretnje i traži uplatu za zaštitu ili premium verziju."
          data-en="If the path was a call: attacker requests remote access, shows fake diagnosis, charges for repair. If the path was installation: fake software displays constant threats and demands payment for protection or a premium version."
        >Ako je put bio poziv: napadač traži daljinski pristup, prikazuje lažnu dijagnozu, naplaćuje popravku. Ako je put bio instalacija: lažni softver prikazuje stalne pretnje i traži uplatu za zaštitu ili premium verziju.</p>
      </article>

      <!-- FAZA 4 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 4 — Ponavljanje i recovery" data-en="Phase 4 — Repetition and recovery">
          Faza 4 — Ponavljanje i recovery
        </h3>

        <p
          data-sr="Posle inicijalne naplate mogu slediti nove: problem se vratio, potrebna nadogradnja, godišnja pretplata."
          data-en="After initial charges, new ones may follow: problem returned, upgrade needed, annual subscription."
        >Posle inicijalne naplate mogu slediti nove: problem se vratio, potrebna nadogradnja, godišnja pretplata.</p>

        <div class="branch">
          <p><strong data-sr="Povezano" data-en="Related">Povezano</strong></p>
          <ul class="bullets">
            <li><a href="advance-fee-fraud.html" data-sr="Uplata unapred" data-en="Advance-fee fraud">Uplata unapred</a></li>
            <li><a href="recovery-scam.html" data-sr="Prevara povraćaja novca" data-en="Recovery scam">Prevara povraćaja novca</a></li>
          </ul>
        </div>
      </article>
    </section>

    <!-- 4) KAKO PREPOZNATI -->
    <section class="card">
      <h2 data-sr="Kako prepoznati program koji plaši" data-en="How to recognize scareware">
        Kako prepoznati program koji plaši
      </h2>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Znaci lažnog upozorenja" data-en="Signs of fake warning">Znaci lažnog upozorenja</div>
          <ul class="bullets">
            <li data-sr="pojavljuje se u browseru, ne iz instaliranog antivirusa." data-en="appears in browser, not from installed antivirus.">pojavljuje se u browseru, ne iz instaliranog antivirusa.</li>
            <li data-sr="sadrži broj telefona za podršku." data-en="contains a phone number for support.">sadrži broj telefona za podršku.</li>
            <li data-sr="dramatičan jezik i crvene boje." data-en="dramatic language and red colors.">dramatičan jezik i crvene boje.</li>
            <li data-sr="blokira ekran ili tab." data-en="blocks screen or tab.">blokira ekran ili tab.</li>
            <li data-sr="pušta zvučni alarm." data-en="plays audio alarm.">pušta zvučni alarm.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Šta stvarni antivirus RADI" data-en="What real antivirus DOES">Šta stvarni antivirus RADI</div>
          <ul class="bullets">
            <li data-sr="prikazuje notifikaciju iz instaliranog softvera." data-en="shows notification from installed software.">prikazuje notifikaciju iz instaliranog softvera.</li>
            <li data-sr="ne traži da pozoveš broj." data-en="doesn't ask you to call a number.">ne traži da pozoveš broj.</li>
            <li data-sr="ne blokira ceo ekran dramatičnom porukom." data-en="doesn't block entire screen with dramatic message.">ne blokira ceo ekran dramatičnom porukom.</li>
            <li data-sr="ne pušta alarmne zvukove iz browsera." data-en="doesn't play alarm sounds from browser.">ne pušta alarmne zvukove iz browsera.</li>
          </ul>
        </div>
      </div>

      <div class="callout"
        data-sr="<strong>Brzi test:</strong> da li upozorenje dolazi iz browsera? Da li sadrzi broj telefona? Ako da — program koji plasi." data-en="<strong>Quick test:</strong> Is the warning from a browser? Does it contain a phone number? If yes — scareware."
      ><strong>Brzi test:</strong> Da li upozorenje dolazi iz browsera? Da li sadrži broj telefona? Ako da — program koji plaši.</div>
    </section>

    <!-- 5) STANDARDNA UPOZORENJA -->
    <section class="card">
      <h2 data-sr="Standardna upozorenja" data-en="Standard warnings">Standardna upozorenja</h2>

      <ul class="bullets">
        <li data-sr="Microsoft, Apple i antivirus kompanije ne prikazuju upozorenja sa brojem telefona u browseru." data-en="Microsoft, Apple, and antivirus companies don't display browser warnings with phone numbers.">Microsoft, Apple i antivirus kompanije ne prikazuju upozorenja sa brojem telefona u browseru.</li>
        <li data-sr="stvarno upozorenje dolazi iz instaliranog softvera, ne iz web stranice." data-en="real warnings come from installed software, not web pages.">stvarno upozorenje dolazi iz instaliranog softvera, ne iz web stranice.</li>
        <li data-sr="ako se ekran zaključa, često je dovoljno zatvoriti browser (Ctrl+W, Alt+F4, Task Manager)." data-en="if the screen 'locks', it is often enough to close the browser (Ctrl+W, Alt+F4, Task Manager).">ako se ekran zaključa, često je dovoljno zatvoriti browser (Ctrl+W, Alt+F4, Task Manager).</li>
      </ul>
    </section>

    <!-- CRVENE ZASTAVICE -->
    <section class="content-section">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Upozorenje se pojavljuje u browser prozoru, a ne iz instaliranog antivirusa." data-en="The warning appears in a browser window, not from installed antivirus software.">Upozorenje se pojavljuje u browser prozoru, a ne iz instaliranog antivirusa.</li>
        <li data-sr="Poruka sadrzi broj telefona za hitnu podrsku ili Microsoftovu pomoc." data-en="The message contains a phone number for urgent support or Microsoft help.">Poruka sadrzi broj telefona za hitnu podrsku ili Microsoftovu pomoc.</li>
        <li data-sr="Ekran je blokiran ili izgleda kao da je blokiran i ne mozete normalno da radite." data-en="The screen is blocked or appears blocked and you cannot work normally.">Ekran je blokiran ili izgleda kao da je blokiran i ne mozete normalno da radite.</li>
        <li data-sr="Zvucni alarm ili dramatican glas govori da je uredaj zarazen." data-en="An audio alarm or dramatic voice says the device is infected.">Zvucni alarm ili dramatican glas govori da je uredaj zarazen.</li>
        <li data-sr="Poruka tvrdi da su licni podaci kompromitovani i da treba odmah da delujete." data-en="The message claims personal data is compromised and you must act immediately.">Poruka tvrdi da su licni podaci kompromitovani i da treba odmah da delujete.</li>
        <li data-sr="Skeniranje koje se nudi odvija se u prozoru browsera, sto nije moguce za pravi antivirus." data-en="The scan offered runs in a browser window, which is not possible for real antivirus software.">Skeniranje koje se nudi odvija se u prozoru browsera, sto nije moguce za pravi antivirus.</li>
        <li data-sr="Ponudjeni softver dolazi sa nepoznate domene ili se instalira automatski." data-en="The offered software comes from an unknown domain or installs automatically.">Ponudjeni softver dolazi sa nepoznate domene ili se instalira automatski.</li>
        <li data-sr="Poruka tvrdi da ce se Windows ugasiti za nekoliko minuta ako ne pozovete." data-en="The message claims Windows will shut down in a few minutes if you do not call.">Poruka tvrdi da ce se Windows ugasiti za nekoliko minuta ako ne pozovete.</li>
        <li data-sr="Poruka pominje poznate kompanije poput Microsofta ili Applea bez zvanicnog domena." data-en="The message mentions well-known companies like Microsoft or Apple without their official domain.">Poruka pominje poznate kompanije poput Microsofta ili Applea bez zvanicnog domena.</li>
        <li data-sr="Broj virusa je prikazan kao precizna cifra, sto pravi antivirus ne prikazuje na ovaj nacin." data-en="The number of viruses is shown as a precise number, which real antivirus does not display this way.">Broj virusa je prikazan kao precizna cifra, sto pravi antivirus ne prikazuje na ovaj nacin.</li>
      </ul>
    </section>

    <!-- PROVERE -->
    <section class="content-section">
      <h2 data-sr="Provere: 8 brzih provera pre reagovanja" data-en="Checks: 8 quick checks before reacting">Provere: 8 brzih provera pre reagovanja</h2>
      <ol class="steps">
        <li data-sr="Proveri odakle dolazi upozorenje — iz browser prozora ili iz sistemskog prozora instaliranog antivirusa?" data-en="Check where the warning comes from — browser window or system window of installed antivirus?">Proveri odakle dolazi upozorenje — iz browser prozora ili iz sistemskog prozora instaliranog antivirusa?</li>
        <li data-sr="Pokusaj da zatvoriš tab ili browser (Ctrl+W ili Alt+F4) — pravi problemi ne nestaju ovako." data-en="Try closing the tab or browser (Ctrl+W or Alt+F4) — real problems do not disappear this way.">Pokusaj da zatvoriš tab ili browser (Ctrl+W ili Alt+F4) — pravi problemi ne nestaju ovako.</li>
        <li data-sr="Otvori Task Manager (Ctrl+Shift+Esc) i zatvori browser proces ako ne mozesh na drugi nacin." data-en="Open Task Manager (Ctrl+Shift+Esc) and close the browser process if you cannot do so otherwise.">Otvori Task Manager (Ctrl+Shift+Esc) i zatvori browser proces ako ne mozesh na drugi nacin.</li>
        <li data-sr="Ne pozivaj broj iz upozorenja — Microsoft, Apple i Google nemaju telefonske linije koje prikazuju u browseru." data-en="Do not call the number in the warning — Microsoft, Apple, and Google do not have phone lines displayed in browsers.">Ne pozivaj broj iz upozorenja — Microsoft, Apple i Google nemaju telefonske linije koje prikazuju u browseru.</li>
        <li data-sr="Ne instaliraj softver koji upozorenje preporucuje — pokreni skeniranje s instaliranog antivirusa koji poznajes." data-en="Do not install software the warning recommends — run a scan with your known installed antivirus.">Ne instaliraj softver koji upozorenje preporucuje — pokreni skeniranje s instaliranog antivirusa koji poznajes.</li>
        <li data-sr="Pretraži tekst poruke u pretraživaču — verovatno ćeš naći da je poznata prevara." data-en="Search the message text in a search engine — you will likely find it is a known scam.">Pretraži tekst poruke u pretraživaču — verovatno ćeš naći da je poznata prevara.</li>
        <li data-sr="Proveri da li su na uredaju instalirani nepoznati programi nakon incidenta." data-en="Check whether any unknown programs were installed on the device after the incident.">Proveri da li su na uredaju instalirani nepoznati programi nakon incidenta.</li>
        <li data-sr="Ako si pozvao broj — odmah prekini vezu i uradi sken celokupnog sistema." data-en="If you called the number — immediately disconnect and run a full system scan.">Ako si pozvao broj — odmah prekini vezu i uradi sken celokupnog sistema.</li>
      </ol>
    </section>

    <!-- CHECKLISTA -->
    <section class="content-section">
      <h2 data-sr="Checklista: pitanja pre reagovanja na upozorenje" data-en="Checklist: questions before reacting to a warning">Checklista: pitanja pre reagovanja na upozorenje</h2>
      <ul class="bullets">
        <li data-sr="Da li se upozorenje pojavilo u browser prozoru, a ne iz instaliranog antivirusa?" data-en="Did the warning appear in a browser window and not from installed antivirus?">Da li se upozorenje pojavilo u browser prozoru, a ne iz instaliranog antivirusa?</li>
        <li data-sr="Da li poruka sadrzi broj telefona koji trebam da pozovem?" data-en="Does the message contain a phone number I should call?">Da li poruka sadrzi broj telefona koji trebam da pozovem?</li>
        <li data-sr="Da li se upozorenje može zatvoriti standardnim tasterima (Ctrl+W, Alt+F4)?" data-en="Can the warning be closed with standard keys (Ctrl+W, Alt+F4)?">Da li se upozorenje može zatvoriti standardnim tasterima (Ctrl+W, Alt+F4)?</li>
        <li data-sr="Da li stvarni instalirani antivirus na mom uredaju pokazuje iste probleme?" data-en="Does the actual installed antivirus on my device show the same problems?">Da li stvarni instalirani antivirus na mom uredaju pokazuje iste probleme?</li>
        <li data-sr="Da li me upozorenje podstice da instaliram novi softver ili kliknem na link?" data-en="Does the warning encourage me to install new software or click a link?">Da li me upozorenje podstice da instaliram novi softver ili kliknem na link?</li>
        <li data-sr="Da li sam pretražio tekst poruke u pretraživaču i pronašao potvrdu da je prevara?" data-en="Have I searched the message text in a search engine and found confirmation it is a scam?">Da li sam pretražio tekst poruke u pretraživaču i pronašao potvrdu da je prevara?</li>
        <li data-sr="Da li upozorenje tvrdi da dolazi od Microsofta ali URL nije njihov zvanicni domen?" data-en="Does the warning claim to come from Microsoft but the URL is not their official domain?">Da li upozorenje tvrdi da dolazi od Microsofta ali URL nije njihov zvanicni domen?</li>
        <li data-sr="Da li postoji pritisak vremena — tvoj uredaj ce biti blokiran za X minuta?" data-en="Is there time pressure — your device will be blocked in X minutes?">Da li postoji pritisak vremena — tvoj uredaj ce biti blokiran za X minuta?</li>
        <li data-sr="Da li sam pozivao broj iz upozorenja, i ako jesam — da li sam prekinuo vezu?" data-en="Did I call the number from the warning, and if so — did I disconnect?">Da li sam pozivao broj iz upozorenja, i ako jesam — da li sam prekinuo vezu?</li>
        <li data-sr="Da li sam dao daljinski pristup uredaju nekome s tog broja?" data-en="Did I give remote access to my device to someone from that number?">Da li sam dao daljinski pristup uredaju nekome s tog broja?</li>
        <li data-sr="Da li su moji finansijski podaci bili dostupni na uredaju tokom incidenta?" data-en="Were my financial details accessible on the device during the incident?">Da li su moji finansijski podaci bili dostupni na uredaju tokom incidenta?</li>
        <li data-sr="Da li sam odmah skenirao uredaj instaliranim antivirusom nakon incidenta?" data-en="Did I immediately scan the device with installed antivirus after the incident?">Da li sam odmah skenirao uredaj instaliranim antivirusom nakon incidenta?</li>
      </ul>
    </section>

    <!-- AKO SUMNJA KRENE -->
    <section class="content-section">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Zatvori browser tab ili ceo browser koristeci Ctrl+W, Alt+F4, ili Task Manager." data-en="Close the browser tab or entire browser using Ctrl+W, Alt+F4, or Task Manager.">Zatvori browser tab ili ceo browser koristeci Ctrl+W, Alt+F4, ili Task Manager.</li>
        <li data-sr="Ne pozivaj broj iz poruke — ako si vec pozvao, odmah prekini vezu." data-en="Do not call the number from the message — if you already called, disconnect immediately.">Ne pozivaj broj iz poruke — ako si vec pozvao, odmah prekini vezu.</li>
        <li data-sr="Ako si instalirao softver — odmah ga ukloni i pokreni sken instaliranim antivirusom." data-en="If you installed software — remove it immediately and run a scan with installed antivirus.">Ako si instalirao softver — odmah ga ukloni i pokreni sken instaliranim antivirusom.</li>
        <li data-sr="Ako si dao daljinski pristup uredaju — odmah promeni sve lozinke i proveri finansijske naloge." data-en="If you gave remote access to your device — immediately change all passwords and check financial accounts.">Ako si dao daljinski pristup uredaju — odmah promeni sve lozinke i proveri finansijske naloge.</li>
        <li data-sr="Kontaktiraj banku ako su finansijski podaci bili dostupni tokom incidenta." data-en="Contact your bank if financial details were accessible during the incident.">Kontaktiraj banku ako su finansijski podaci bili dostupni tokom incidenta.</li>
        <li data-sr="Prijavi incident policiji ako su finansijski gubici nastali." data-en="Report the incident to police if financial losses occurred.">Prijavi incident policiji ako su finansijski gubici nastali.</li>
      </ol>
    </section>

    <!-- AKO POMAŽEŠ NEKOME -->
    <section class="content-section">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
      <ul class="bullets">
        <li data-sr="Da li su videli upozorenje u browseru i odmah pozvali broj iz poruke?" data-en="Did they see a warning in the browser and immediately call the number from the message?">Da li su videli upozorenje u browseru i odmah pozvali broj iz poruke?</li>
        <li data-sr="Da li su nekome dali daljinski pristup racunaru da pomognu?" data-en="Did they give someone remote access to their computer to help?">Da li su nekome dali daljinski pristup racunaru da pomognu?</li>
        <li data-sr="Da li su platili za ciscenje virusa karticom ili vaucerom?" data-en="Did they pay for virus removal by card or voucher?">Da li su platili za ciscenje virusa karticom ili vaucerom?</li>
        <li data-sr="Da li su instalirali program koji im je preporucen tokom razgovora s tehnicarom?" data-en="Did they install a program recommended during the conversation with the technician?">Da li su instalirali program koji im je preporucen tokom razgovora s tehnicarom?</li>
      </ul>
      <p data-sr="Recenice koje rade:" data-en="Sentences that help:">Recenice koje rade:</p>
      <ul class="bullets">
        <li data-sr="Microsoft, Apple i Google nemaju broj telefona koji prikazuju u browser upozorenjima." data-en="Microsoft, Apple, and Google do not have phone numbers displayed in browser warnings.">Microsoft, Apple i Google nemaju broj telefona koji prikazuju u browser upozorenjima.</li>
        <li data-sr="Pravi antivirus ne radi u prozoru browsera — ako je upozorenje tamo, ono je lažno." data-en="Real antivirus does not run in a browser window — if the warning is there, it is fake.">Pravi antivirus ne radi u prozoru browsera — ako je upozorenje tamo, ono je lažno.</li>
        <li data-sr="Ako si dao pristup racunaru, treba odmah da promenimo lozinke i proverimo naloge." data-en="If you gave access to the computer, we need to change passwords and check accounts right away.">Ako si dao pristup racunaru, treba odmah da promenimo lozinke i proverimo naloge.</li>
        <li data-sr="Hajde da zajedno pretražimo tekst poruke — sigurno cemo naci da su drugi imali isti slucaj." data-en="Let us search the message text together — we will surely find others who had the same case.">Hajde da zajedno pretražimo tekst poruke — sigurno cemo naci da su drugi imali isti slucaj.</li>
      </ul>
    </section>

    <!-- POVEZANE PREVARE -->
    
  `
};
