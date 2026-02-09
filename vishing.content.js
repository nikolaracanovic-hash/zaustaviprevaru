window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["vishing"] = {
  raw_html: `
    <!-- 1) UVOD: ŠTA JE VISHING I KAKO RADI -->
    <section class="card">
      <h2 data-sr="Uvod: kako radi pozivna prevara" data-en="Introduction: how vishing works">
        Uvod: kako radi pozivna prevara
      </h2>

      <p
        data-sr="Pozivna prevara koristi glas kao primarni vektor napada. Telefon daje napadaču kontrolu tempa koju poruka ili link ne mogu da ostvare. Razgovor teče u realnom vremenu, meta reaguje na ton, hitnost i autoritet bez prostora za pauzu i proveru. Glas simulira instituciju, a tempo zatvara prozor za sumnju." data-en="Vishing uses voice as the primary attack vector. The phone gives attackers pace control that messages or links cannot achieve. The conversation flows in real time; the target reacts to tone, urgency, and authority without room to pause and verify. Voice simulates an institution while tempo closes the window for doubt."
      >Pozivna prevara koristi glas kao primarni vektor napada. Telefon daje napadaču kontrolu tempa koju poruka ili link ne mogu da ostvare. Razgovor teče u realnom vremenu, meta reaguje na ton, hitnost i autoritet bez prostora za pauzu i proveru. Glas simulira instituciju, a tempo zatvara prozor za sumnju.</p>

      <p
        data-sr="Mehanizam se oslanja na dva elementa: autoritet i hitnost. Poziv dolazi „iz banke”, „od policije”, „iz IT službe”, „od kurira”. Tema je uvek problem koji traži brzu reakciju: sumnjiva transakcija, blokada, bezbednosni incident, paket koji čeka. Meta dobija ulogu izvršioca koraka, dok napadač drži scenario i tempo."
        data-en="The mechanism relies on two elements: authority and urgency. The call comes 'from the bank', 'from the police', 'from IT', 'from a courier'. The topic is always a problem requiring quick action: suspicious transaction, lock, security incident, package on hold. The target becomes a step executor while the attacker holds the script and pace."
      >Mehanizam se oslanja na dva elementa: autoritet i hitnost. Poziv dolazi „iz banke”, „od policije”, „iz IT službe”, „od kurira”. Tema je uvek problem koji traži brzu reakciju: sumnjiva transakcija, blokada, bezbednosni incident, paket koji čeka. Meta dobija ulogu izvršioca koraka, dok napadač drži scenario i tempo.</p>

      <p
        data-sr="Šteta se realizuje kroz tri ishoda: (1) predaja kredencijala ili OTP koda, (2) instalacija programa za daljinski pristup i prepuštanje kontrole, (3) direktna uplata pod pritiskom. Često se kombinuju: poziv traži kod, zatim daljinski pristup „za pomoć”, zatim potvrdu transakcije koja izgleda kao zaštita."
        data-en="Damage occurs through three outcomes: (1) handing over credentials or OTP codes, (2) installing remote tools and surrendering control, (3) direct payment under pressure. These often combine: a call asks for a code, then remote access to help, then confirmation of a transaction framed as protection."
      >Šteta se realizuje kroz tri ishoda: (1) predaja kredencijala ili OTP koda, (2) instalacija programa za daljinski pristup i prepuštanje kontrole, (3) direktna uplata pod pritiskom. Često se kombinuju: poziv traži kod, zatim daljinski pristup „za pomoć”, zatim potvrdu transakcije koja izgleda kao zaštita.</p>

      <div class="callout"
          data-sr="<strong>Model:</strong> poziv (autoritet + hitnost) → scenario problema → kontrola tempa → prag (kod/pristup/uplata) → serijske posledice → eskalacija → talas povraćaja" data-en="<strong>Model:</strong> call (authority + urgency) → problem scenario → pace control → threshold (code/access/payment) → cascading consequences → escalation → recovery wave"
        ><strong>Model:</strong> poziv (autoritet + hitnost) → scenario problema → kontrola tempa → prag (kod/pristup/uplata) → serijske posledice → eskalacija → talas povraćaja</div>

      <div class="callout"
        data-sr="<strong>Prag:</strong> predaja koda, kredencijala, instalacija programa za daljinski pristup ili potvrda transakcije. Posle praga šteta prelazi u operativu." data-en="<strong>Threshold:</strong> handing over a code, credentials, installing remote tools, or confirming a transaction. After the threshold, damage becomes operational."
      ><strong>Prag:</strong> predaja koda, kredencijala, instalacija programa za daljinski pristup ili potvrda transakcije. Posle praga šteta prelazi u operativu.</div>
    </section>

    <!-- 2) ZAŠTO GLAS PROLAZI -->
    <section class="card">
      <h2 data-sr="Zašto glas prolazi: prednosti poziva za napadača" data-en="Why voice works: call advantages for attackers">
        Zašto glas prolazi: prednosti poziva za napadača
      </h2>

      <p
        data-sr="Poziv ima karakteristike koje poruka nema. Glas prenosi ton, tempo i emociju. Meta čuje autoritet pre nego što razmisli o sadržaju. Razgovor teče bez pauze za proveru domena ili konsultaciju. Napadač vodi tempo i može da eskalira pritisak u realnom vremenu." data-en="Calls have characteristics messages lack. Voice conveys tone, tempo, and emotion. The target hears authority before thinking about content. The conversation flows without pause for domain checking or consultation. The attacker controls tempo and can escalate pressure in real time."
      >Poziv ima karakteristike koje poruka nema. Glas prenosi ton, tempo i emociju. Meta čuje autoritet pre nego što razmisli o sadržaju. Razgovor teče bez pauze za proveru domena ili konsultaciju. Napadač vodi tempo i može da eskalira pritisak u realnom vremenu.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Prednosti poziva" data-en="Call advantages">Prednosti poziva</div>
          <ul class="bullets">
            <li data-sr="kontrola tempa: napadač vodi razgovor" data-en="pace control: attacker leads the conversation">kontrola tempa: napadač vodi razgovor</li>
            <li data-sr="autoritet kroz ton i rečnik" data-en="authority via tone and vocabulary">autoritet kroz ton i rečnik</li>
            <li data-sr="emocija u realnom vremenu: strah, hitnost, krivica" data-en="real-time emotion: fear, urgency, guilt">emocija u realnom vremenu: strah, hitnost, krivica</li>
            <li data-sr="nema prostora za proveru tokom razgovora" data-en="no room for verification during the call">nema prostora za proveru tokom razgovora</li>
            <li data-sr="eskalacija pritiska bez prekida" data-en="pressure escalation without interruption">eskalacija pritiska bez prekida</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Gde meta gubi" data-en="Where targets fail">Gde meta gubi</div>
          <ul class="bullets">
            <li data-sr="prihvatanje autoriteta bez provere broja" data-en="accepting authority without verifying the number">prihvatanje autoriteta bez provere broja</li>
            <li data-sr="izvršavanje koraka dok je poziv aktivan" data-en="executing steps while the call is active">izvršavanje koraka dok je poziv aktivan</li>
              <li data-sr="davanje kodova kao „potvrde”" data-en="giving codes as confirmations">davanje kodova kao „potvrde”</li>
              <li data-sr="instalacija programa za daljinski pristup „za pomoć”" data-en="installing remote tools to help">instalacija programa za daljinski pristup „za pomoć”</li>
            <li data-sr="potvrda transakcije bez pauze" data-en="confirming transactions without pause">potvrda transakcije bez pauze</li>
          </ul>
        </div>
      </div>

      <div class="callout"
        data-sr="<strong>Ključna razlika:</strong> kod fišinga meta ima vremena da proveri domen. Kod pozivnih prevara napadač drži tempo i ne pušta pauzu." data-en="<strong>Key difference:</strong> in phishing, the target has time to check the domain. In vishing, the attacker holds tempo and doesn't allow pauses."
      ><strong>Ključna razlika:</strong> kod fišinga meta ima vremena da proveri domen. Kod pozivnih prevara napadač drži tempo i ne pušta pauzu.</div>
    </section>

    <!-- 3) HRONOLOŠKI TOK -->
    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching)">
        Hronološki tok (faze + grananja)
      </h2>

      <p class="muted"
        data-sr="pozivna prevara tok je kompresovan: poziv, scenario, pritisak i prag dolaze u minutima. Faze ispod pokazuju tipičan obrazac." data-en="Vishing flow is compressed: call, scenario, pressure, and threshold arrive in minutes. Phases below show the typical pattern."
      >Pozivna prevara tok je kompresovan: poziv, scenario, pritisak i prag dolaze u minutima. Faze ispod pokazuju tipičan obrazac.</p>

      <!-- FAZA 1 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Poziv: autoritet i kontekst" data-en="Phase 1 — Call: authority and context">
          Faza 1 — Poziv: autoritet i kontekst
        </h3>

        <p
          data-sr="Poziv stiže sa brojem koji može da liči na zvaničan (spoofing) ili sa nepoznatog broja uz objašnjenje. Ton je profesionalan, rečnik institucijski. Meta prima informaciju o „problemu” koji zahteva reakciju."
          data-en="The call arrives from a number that may look official (spoofing) or from an unknown number with an explanation. Tone is professional, vocabulary institutional. The target receives information about a 'problem' requiring action."
        >Poziv stiže sa brojem koji može da liči na zvaničan (spoofing) ili sa nepoznatog broja uz objašnjenje. Ton je profesionalan, rečnik institucijski. Meta prima informaciju o „problemu” koji zahteva reakciju.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Tipični scenariji" data-en="Typical scenarios">Tipični scenariji</div>
            <ul class="bullets">
              <li data-sr="„banka” — sumnjiva transakcija" data-en="'bank' — suspicious transaction">„banka” — sumnjiva transakcija</li>
              <li data-sr="„policija” — istraga, blokada" data-en="'police' — investigation, freeze">„policija” — istraga, blokada</li>
              <li data-sr="„IT podrška” — bezbednosni incident" data-en="'IT support' — security incident">„IT podrška” — bezbednosni incident</li>
              <li data-sr="„kurir/carina” — paket, taksa" data-en="'courier/customs' — package, fee">„kurir/carina” — paket, taksa</li>
              <li data-sr="„teleoperater” — problem sa nalogom" data-en="'telecom' — account issue">„teleoperater” — problem sa nalogom</li>
            </ul>
          </div>
          <div class="phase">
            <div class="label" data-sr="Šta napadač postiže" data-en="What the attacker achieves">Šta napadač postiže</div>
            <ul class="bullets">
              <li data-sr="uspostavlja autoritet pre pitanja" data-en="establishes authority before questions">uspostavlja autoritet pre pitanja</li>
              <li data-sr="uvodi hitnost kao okvir" data-en="introduces urgency as the frame">uvodi hitnost kao okvir</li>
              <li data-sr="preuzima tok razgovora" data-en="takes control of the conversation flow">preuzima tok razgovora</li>
            </ul>
          </div>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> meta prihvata scenario i ostaje na liniji." data-en="<strong>Threshold:</strong> target accepts the scenario and stays on the line."
        ><strong>Prag faze:</strong> meta prihvata scenario i ostaje na liniji.</div>
      </article>

      <!-- FAZA 2 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Scenario: problem i posledica" data-en="Phase 2 — Scenario: problem and consequence">
          Faza 2 — Scenario: problem i posledica
        </h3>

        <p
          data-sr="Napadač opisuje „problem” sa konkretnim detaljima koji deluju interno: iznos transakcije, datum, lokacija, „case ID”. Detalji stvaraju utisak da pozivalac ima pristup sistemu. Posledica se predstavlja kao ozbiljna: gubitak novca, pravne posledice, blokada."
          data-en="The attacker describes a 'problem' with concrete details that seem internal: transaction amount, date, location, 'case ID'. Details create the impression the caller has system access. Consequences are framed as serious: money loss, legal issues, account lock."
        >Napadač opisuje „problem” sa konkretnim detaljima koji deluju interno: iznos transakcije, datum, lokacija, „case ID”. Detalji stvaraju utisak da pozivalac ima pristup sistemu. Posledica se predstavlja kao ozbiljna: gubitak novca, pravne posledice, blokada.</p>

        <ul class="bullets">
          <li data-sr="„vidimo transakciju od 847 EUR u 14:32”" data-en="we see a transaction of €847 at 14:32">„vidimo transakciju od 847 EUR u 14:32”</li>
          <li data-sr="„vaš nalog je kompromitovan”" data-en="your account has been compromised">„vaš nalog je kompromitovan”</li>
          <li data-sr="„ako ne reagujemo, novac odlazi”" data-en="if we don't act, the money is gone">„ako ne reagujemo, novac odlazi”</li>
          <li data-sr="„imate pravo na zaštitu, ali morate da sarađujete”" data-en="you're entitled to protection, but you must cooperate">„imate pravo na zaštitu, ali morate da sarađujete”</li>
        </ul>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> meta prihvata hitnost i traži rešenje umesto provere." data-en="<strong>Threshold:</strong> target accepts urgency and seeks a solution instead of verification."
        ><strong>Prag faze:</strong> meta prihvata hitnost i traži rešenje umesto provere.</div>
      </article>

      <!-- FAZA 3 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Kontrola tempa: vođenje koraka" data-en="Phase 3 — Pace control: guiding steps">
          Faza 3 — Kontrola tempa: vođenje koraka
        </h3>

        <p
          data-sr="Napadač vodi metu kroz korake dok drži liniju otvorenom. Svaki korak deluje kao deo rešenja: „otvorite aplikaciju”, „recite mi kod”, „instalirajte alat za podršku”, „potvrdite transfer”. Meta izvršava jer prekid poziva izgleda kao odustajanje od zaštite."
          data-en="The attacker guides the target through steps while keeping the line open. Each step appears part of the solution: 'open the app', 'tell me the code', 'install the support tool', 'confirm the transfer'. The target complies because hanging up feels like abandoning protection."
        >Napadač vodi metu kroz korake dok drži liniju otvorenom. Svaki korak deluje kao deo rešenja: „otvorite aplikaciju”, „recite mi kod”, „instalirajte alat za podršku”, „potvrdite transfer”. Meta izvršava jer prekid poziva izgleda kao odustajanje od zaštite.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Tipični zahtevi" data-en="Typical requests">Tipični zahtevi</div>
            <ul class="bullets">
              <li data-sr="„recite mi kod koji ste dobili”" data-en="tell me the code you received">„recite mi kod koji ste dobili”</li>
              <li data-sr="„instalirajte AnyDesk/TeamViewer”" data-en="install AnyDesk/TeamViewer">„instalirajte AnyDesk/TeamViewer”</li>
              <li data-sr="„potvrdite u aplikaciji”" data-en="confirm in the app">„potvrdite u aplikaciji”</li>
              <li data-sr="„prebacite na siguran račun”" data-en="transfer to a safe account">„prebacite na siguran račun”</li>
            </ul>
          </div>
          <div class="phase">
            <div class="label" data-sr="Kako drže tempo" data-en="How they maintain pace">Kako drže tempo</div>
            <ul class="bullets">
              <li data-sr="ne puštaju pauzu za razmišljanje" data-en="don't allow pause for thinking">ne puštaju pauzu za razmišljanje</li>
              <li data-sr="svaki korak vodi u sledeći" data-en="each step leads to the next">svaki korak vodi u sledeći</li>
              <li data-sr="prekid se opisuje kao rizik" data-en="hanging up is framed as risk">prekid se opisuje kao rizik</li>
              <li data-sr="pitanja se tretiraju kao gubljenje vremena" data-en="questions are treated as wasting time">pitanja se tretiraju kao gubljenje vremena</li>
            </ul>
          </div>
        </div>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li
              data-sr="<strong>Tehnička podrška:</strong> program za daljinski pristup kao „pomoć”. (Povezano: tech-support-scam)"
              data-en="<strong>Tech support:</strong> remote tool as help. (Related: tech-support-scam)"
            ><strong>Tehnička podrška:</strong> program za daljinski pristup kao „pomoć”. (Povezano: tech-support-scam)</li>
            <li
              data-sr="<strong>Fišing eskalacija:</strong> link tokom poziva. (Povezano: <a href='phishing.html'>fišing</a>)" data-en="<strong>Phishing escalation:</strong> link during the call. (Related: <a href='phishing.html'>Phishing</a>)"
            ><strong>Fišing eskalacija:</strong> link tokom poziva. (Povezano: <a href="phishing.html">fišing</a>)</li>
          </ul>
        </div>
      </article>

      <!-- FAZA 4 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Prag: kod, pristup ili uplata" data-en="Phase 4 — Threshold: code, access, or payment">
          Faza 4 — Prag: kod, pristup ili uplata
        </h3>

        <p
          data-sr="Prag nastaje kada meta preda kontrolu: OTP kod, lozinka, daljinski pristup ili potvrda transakcije. U tom trenutku napadač dobija mogućnost da izvrši radnju koja ima finansijsku posledicu. Meta često ne shvata prag jer radnja izgleda kao zaštita." data-en="The threshold occurs when the target surrenders control: OTP code, password, remote access, or transaction confirmation. At that moment the attacker gains the ability to execute an action with financial consequences. Targets often don't recognize the threshold because the action looks like protection."
        >Prag nastaje kada meta preda kontrolu: OTP kod, lozinka, daljinski pristup ili potvrda transakcije. U tom trenutku napadač dobija mogućnost da izvrši radnju koja ima finansijsku posledicu. Meta često ne shvata prag jer radnja izgleda kao zaštita.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Šta se predaje" data-en="What gets surrendered">Šta se predaje</div>
            <ul class="bullets">
              <li data-sr="OTP/SMS kod kao autorizacija" data-en="OTP/SMS code as authorization">OTP/SMS kod kao autorizacija</li>
              <li data-sr="lozinka ili PIN" data-en="password or PIN">lozinka ili PIN</li>
              <li data-sr="daljinski pristup (AnyDesk/TeamViewer)" data-en="remote access (AnyDesk/TeamViewer)">daljinski pristup (AnyDesk/TeamViewer)</li>
              <li data-sr="potvrda transakcije u aplikaciji" data-en="in-app transaction confirmation">potvrda transakcije u aplikaciji</li>
              <li data-sr="podaci kartice" data-en="card details">podaci kartice</li>
            </ul>
          </div>
          <div class="phase">
            <div class="label" data-sr="Kako se prodaje" data-en="How it's sold">Kako se prodaje</div>
            <ul class="bullets">
              <li data-sr="„kod je za verifikaciju”" data-en="the code is for verification">„kod je za verifikaciju”</li>
              <li data-sr="„prebacujemo na siguran račun”" data-en="we're transferring to a safe account">„prebacujemo na siguran račun”</li>
              <li data-sr="„daljinski pristup je za zaštitu”" data-en="remote access is for protection">„daljinski pristup je za zaštitu”</li>
              <li data-sr="„potvrdite da blokirate sumnjivu transakciju”" data-en="confirm to block the suspicious transaction">„potvrdite da blokirate sumnjivu transakciju”</li>
            </ul>
          </div>
        </div>

        <div class="callout"
          data-sr="<strong>Crvena zastavica:</strong> banka nikada ne traži kod, lozinku ili daljinski pristup telefonom." data-en="<strong>Red flag:</strong> banks never ask for codes, passwords, or kontrola računara over the phone."
        ><strong>Crvena zastavica:</strong> banka nikada ne traži kod, lozinku ili daljinski pristup telefonom.</div>
      </article>

      <!-- FAZA 5 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Serijske posledice" data-en="Phase 5 — Cascading consequences">
          Faza 5 — Serijske posledice
        </h3>

        <p
          data-sr="Posle praga kreće lanac: naplate, promene lozinki, prijave sa novih uređaja, poruke kontaktima. Ako je daljinski pristup aktivan, napadač može da izvršava radnje direktno. Meta često ostaje na liniji misleći da „rešava problem” dok šteta raste."
          data-en="After the threshold, a chain starts: charges, password changes, logins from new devices, messages to contacts. If remote access is active, the attacker can execute actions directly. The target often stays on the line thinking they're 'solving the problem' while damage grows."
        >Posle praga kreće lanac: naplate, promene lozinki, prijave sa novih uređaja, poruke kontaktima. Ako je daljinski pristup aktivan, napadač može da izvršava radnje direktno. Meta često ostaje na liniji misleći da „rešava problem” dok šteta raste.</p>

        <div class="branch">
          <p><strong data-sr="Grananja posle praga" data-en="Branching after threshold">Grananja posle praga</strong></p>
          <ul class="bullets">
            <li
              data-sr="<strong>preuzimanje naloga:</strong> preuzimanje naloga sa ukradenim kredencijalima. (Povezano: account-takeover)" data-en="<strong>Preuzimanje naloga:</strong> taking over accounts with stolen credentials. (Related: account-takeover)"
            ><strong>Preuzimanje naloga:</strong> preuzimanje naloga sa ukradenim kredencijalima. (Povezano: account-takeover)</li>
            <li
              data-sr="<strong>Avansna uplata:</strong> „takse” kao uslov za povrat. (Povezano: <a href='advance-fee-fraud.html'>avansna uplata</a>)"
              data-en="<strong>Advance-fee:</strong> fees as a condition for reversal. (Related: <a href='advance-fee-fraud.html'>Advance-fee</a>)"
            ><strong>Avansna uplata:</strong> „takse” kao uslov za povrat. (Povezano: <a href="advance-fee-fraud.html">avansna uplata</a>)</li>
          </ul>
        </div>
      </article>

      <!-- FAZA 6 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Pritisak i produživanje" data-en="Phase 6 — Pressure and extension">
          Faza 6 — Pritisak i produživanje
        </h3>

        <p
          data-sr="Kada meta posumnja ili pokuša da prekine, napadač pojačava pritisak: posledice, rokovi, krivica, novi identitet („supervizor”, „pravna služba”). Cilj je vratiti metu u tok i izvući još jednu radnju."
          data-en="When the target doubts or tries to stop, the attacker intensifies pressure: consequences, deadlines, guilt, new identity ('supervisor', 'legal department'). The goal is to pull the target back into the flow and extract another action."
        >Kada meta posumnja ili pokuša da prekine, napadač pojačava pritisak: posledice, rokovi, krivica, novi identitet („supervizor”, „pravna služba”). Cilj je vratiti metu u tok i izvući još jednu radnju.</p>

        <ul class="bullets">
          <li data-sr="„ako prekinete, gubite zaštitu”" data-en="if you hang up, you lose protection">„ako prekinete, gubite zaštitu”</li>
          <li data-sr="„prebacujem vas na supervizora”" data-en="I'm transferring you to a supervisor">„prebacujem vas na supervizora”</li>
          <li data-sr="„imate još 10 minuta pre nego što se slučaj zatvori”" data-en="you have 10 minutes before the case closes">„imate još 10 minuta pre nego što se slučaj zatvori”</li>
        </ul>
      </article>

      <!-- FAZA 7 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 7 — Talas povraćaja" data-en="Phase 7 — Recovery wave">
          Faza 7 — Talas povraćaja
        </h3>

        <p
          data-sr="Posle incidenta stiže novi kontakt koji nudi povrat uz uplatu. Kontakt koristi detalje prethodnog napada kao „dokaz”. Ovo je tipičan drugi talas koji cilja istu metu."
          data-en="After the incident, a new contact offers recovery for a payment. They use details from the previous attack as 'proof'. This is a typical second wave targeting the same victim."
        >Posle incidenta stiže novi kontakt koji nudi povrat uz uplatu. Kontakt koristi detalje prethodnog napada kao „dokaz”. Ovo je tipičan drugi talas koji cilja istu metu.</p>

        <div class="branch">
          <p><strong data-sr="Povezano" data-en="Related">Povezano</strong></p>
          <ul class="bullets">
            <li
              data-sr="<strong>Prevara povraćaja:</strong> povrat kao mamac. (Povezano: <a href='recovery-scam.html'>prevara povraćaja</a>)" data-en="<strong>Recovery scam:</strong> recovery as bait. (Related: <a href='recovery-scam.html'>Recovery</a>)"
            ><strong>Prevara povraćaja:</strong> povrat kao mamac. (Povezano: <a href="recovery-scam.html">prevara povraćaja</a>)</li>
          </ul>
        </div>
      </article>
    </section>

    <!-- 4) TIPIČNE VARIJANTE -->
    <section class="card">
      <h2 data-sr="Tipične varijante pozivnih prevara" data-en="Common vishing call variants">
        Tipične varijante pozivnih prevara
      </h2>

      <h3 data-sr="1) Banka / sumnjiva transakcija" data-en="1) Bank / suspicious transaction">
        1) Banka / sumnjiva transakcija
      </h3>
      <ul class="bullets">
        <li data-sr="poziv najavljuje sumnjivu transakciju ili kompromitovan nalog" data-en="call announces suspicious transaction or compromised account">poziv najavljuje sumnjivu transakciju ili kompromitovan nalog</li>
        <li data-sr="traži OTP kod „za verifikaciju” ili „za blokadu”" data-en="asks for an OTP code 'for verification' or 'to block'">traži OTP kod „za verifikaciju” ili „za blokadu”</li>
        <li data-sr="Izvor: FTC — vodič za fišing i višing." data-en="Source: FTC — phishing and vishing guidance.">Izvor: FTC — vodič za fišing i višing.</li>
      </ul>
    </section>
  `
};