window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["fake-call-scam"] = {
  raw_html: `
    <!-- 1) UVOD: ŠTA JE I KAKO GENERALNO RADI -->
    <section class="card">
      <h2
        data-sr="Uvod: kako radi prevara lažnih poziva"
        data-en="Introduction: how fake-call scams work"
      >Uvod: kako radi prevara lažnih poziva</h2>

      <p
        data-sr="Lažni pozivi su operacija u realnom vremenu. Glas preuzima tempo, autoritet postavlja okvir, hitnost sužava izbor. Poziv nije razgovor, već vođenje kroz korake koji imaju posledicu: čitanje OTP koda, potvrda u aplikaciji, instalacija remote alata, uplata, preusmeravanje novca. Prednost poziva je kontrola ritma: napadač može da prekine pitanje, preskoči objašnjenje i odmah pređe na sledeću radnju."
        data-en="Fake-call scams are real-time operations. Voice controls pace, authority sets the frame, urgency narrows choices. The call is not a discussion; it is guided execution of steps with consequences: reading an OTP, approving in an app, installing remote tools, making a payment, redirecting money. Calls win by controlling rhythm: the attacker can interrupt questions, skip explanations, and move straight to the next action."
      >Lažni pozivi su operacija u realnom vremenu. Glas preuzima tempo, autoritet postavlja okvir, hitnost sužava izbor. Poziv nije razgovor, već vođenje kroz korake koji imaju posledicu: čitanje OTP koda, potvrda u aplikaciji, instalacija remote alata, uplata, preusmeravanje novca. Prednost poziva je kontrola ritma: napadač može da prekine pitanje, preskoči objašnjenje i odmah pređe na sledeću radnju.</p>

      <p
        data-sr="Maska poziva se menja: banka, policija, kurirska služba, platforma, operater, „security tim“. Identitet služi kao ambalaža. Mehanika ostaje ista: zadržavanje mete na liniji, izolacija od provere, ubrzavanje radnji, izvlačenje autorizacije. Autoritet je sredstvo za prelazak praga, ne dokaz legitimnosti."
        data-en="The caller identity changes: bank, police, courier, platform, carrier, “security team”. Identity is packaging. The mechanism stays: keep the target on the line, isolate them from verification, accelerate actions, extract authorization. Authority is a tool to cross the threshold, not evidence of legitimacy."
      >Maska poziva se menja: banka, policija, kurirska služba, platforma, operater, „security tim“. Identitet služi kao ambalaža. Mehanika ostaje ista: zadržavanje mete na liniji, izolacija od provere, ubrzavanje radnji, izvlačenje autorizacije. Autoritet je sredstvo za prelazak praga, ne dokaz legitimnosti.</p>

      <div class="callout"
        data-sr="<strong>Prag:</strong> OTP ili potvrda u aplikaciji, instalacija remote alata, uplata na „siguran račun“, deljenje kartičnih podataka. Posle praga šteta prelazi u lanac."
        data-en="<strong>Threshold:</strong> OTP or in-app approval, installing a remote tool, paying to a “safe account”, sharing card details. After the threshold, damage becomes a chain."
      ><strong>Prag:</strong> OTP ili potvrda u aplikaciji, instalacija remote alata, uplata na „siguran račun“, deljenje kartičnih podataka. Posle praga šteta prelazi u lanac.</div>

      <div class="callout"
        data-sr="<strong>Model:</strong> poziv + autoritet → incident + rok → kontrola razgovora → prag (OTP/confirm/remote/uplata) → serijske posledice → presvlačenje identiteta → recovery talas"
        data-en="<strong>Model:</strong> call + authority → incident + deadline → conversation control → threshold (OTP/confirm/remote/payment) → cascading consequences → identity switching → recovery wave"
      ><strong>Model:</strong> poziv + autoritet → incident + rok → kontrola razgovora → prag (OTP/confirm/remote/uplata) → serijske posledice → presvlačenje identiteta → recovery talas</div>
    </section>

    <!-- 2) KAKO GENERALNO RADI: ZAŠTO PROLAZI -->
    <section class="card">
      <h2
        data-sr="Kako generalno radi: zašto lažni pozivi prolaze"
        data-en="How it works: why fake calls succeed"
      >Kako generalno radi: zašto lažni pozivi prolaze</h2>

      <p
        data-sr="Poziv ima prednost nad porukom jer tempo dolazi iz glasa. Meta dobija osećaj da razgovara sa institucijom, a institucija ima pravo da daje instrukcije. Napadač koristi incident kao okidač: sumnjiva transakcija, kompromitovan nalog, paket, kazna, istraga, prenos broja. Incident daje opravdanje za hitnost i smanjuje prostor za proveru."
        data-en="Calls beat messages because tempo comes from voice. The target feels they’re dealing with an institution that has the right to instruct. Attackers use an incident trigger: suspicious transaction, compromised account, package issue, fine, investigation, number porting. The incident justifies urgency and reduces room to verify."
      >Poziv ima prednost nad porukom jer tempo dolazi iz glasa. Meta dobija osećaj da razgovara sa institucijom, a institucija ima pravo da daje instrukcije. Napadač koristi incident kao okidač: sumnjiva transakcija, kompromitovan nalog, paket, kazna, istraga, prenos broja. Incident daje opravdanje za hitnost i smanjuje prostor za proveru.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta poziv radi bolje od poruke" data-en="What calls do better than messages">Šta poziv radi bolje od poruke</div>
          <ul class="bullets">
            <li data-sr="prekida pitanje i vraća fokus na radnju" data-en="interrupts questions and redirects to action">prekida pitanje i vraća fokus na radnju</li>
            <li data-sr="održava hitnost kroz ritam govora" data-en="maintains urgency through speaking pace">održava hitnost kroz ritam govora</li>
            <li data-sr="izoluje metu: „ostanite na liniji“" data-en="isolates the target: “stay on the line”">izoluje metu: „ostanite na liniji“</li>
            <li data-sr="pretvara sledeći korak u „proceduru“" data-en="turns the next step into “procedure”">pretvara sledeći korak u „proceduru“</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Na šta se oslanja psihologija" data-en="What the psychology relies on">Na šta se oslanja psihologija</div>
          <ul class="bullets">
            <li data-sr="autoritet: službeni ton, terminologija, broj predmeta" data-en="authority: official tone, jargon, case number">autoritet: službeni ton, terminologija, broj predmeta</li>
            <li data-sr="hitnost: kratki rokovi i posledice" data-en="urgency: short deadlines and consequences">hitnost: kratki rokovi i posledice</li>
            <li data-sr="tunelski fokus: „rešavam incident“" data-en="tunnel focus: “I’m resolving an incident”">tunelski fokus: „rešavam incident“</li>
            <li data-sr="izbegavanje provere: zabrana prekida i konsultacije" data-en="verification avoidance: discouraging hang-up and consultation">izbegavanje provere: zabrana prekida i konsultacije</li>
          </ul>
        </div>
      </div>

      <div class="callout"
        data-sr="<strong>Ključni efekat:</strong> meta ulazi u režim rešavanja incidenta. Provera identiteta postaje sporedna, jer se problem predstavlja kao vremenski ograničen."
        data-en="<strong>Key effect:</strong> the target enters incident-resolution mode. Identity verification becomes secondary because the problem is framed as time-limited."
      ><strong>Ključni efekat:</strong> meta ulazi u režim rešavanja incidenta. Provera identiteta postaje sporedna, jer se problem predstavlja kao vremenski ograničen.</div>
    </section>

    <!-- 3) TIPIČNE MASKE I SCRIPT-OVI (SA FUNKCIJOM) -->
    <section class="card">
      <h2 data-sr="Tipične maske i priče (sa funkcijom)" data-en="Common impersonations and scripts (with function)">
        Tipične maske i priče (sa funkcijom)
      </h2>

      <p class="muted"
        data-sr="Maske se razlikuju po priči, ali cilj ostaje isti: zadržati metu na liniji i izvući autorizaciju kroz jedan korak."
        data-en="Impersonations vary by storyline, but the goal stays the same: keep the target on the line and extract authorization through a single step."
      >Maske se razlikuju po priči, ali cilj ostaje isti: zadržati metu na liniji i izvući autorizaciju kroz jedan korak.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Banka / kartice" data-en="Bank / cards">Banka / kartice</div>
          <ul class="bullets">
            <li data-sr="incident: sumnjiva transakcija ili pokušaj naplate" data-en="incident: suspicious transaction or attempted charge">incident: sumnjiva transakcija ili pokušaj naplate</li>
            <li data-sr="korak: OTP ili potvrda u aplikaciji „da se blokira“" data-en="step: OTP or app approval “to block it”">korak: OTP ili potvrda u aplikaciji „da se blokira“</li>
            <li data-sr="funkcija: autorizacija naplate ili prijave pod maskom zaštite" data-en="function: authorize a charge/login under a protection mask">funkcija: autorizacija naplate ili prijave pod maskom zaštite</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Policija / istraga" data-en="Police / investigation">Policija / istraga</div>
          <ul class="bullets">
            <li data-sr="incident: „u toku je istraga“ i „učestvujete“" data-en="incident: “investigation in progress” and “you’re involved”">incident: „u toku je istraga“ i „učestvujete“</li>
            <li data-sr="korak: prenos na „siguran račun“" data-en="step: transfer to a “safe account”">korak: prenos na „siguran račun“</li>
            <li data-sr="funkcija: normalizacija transfera kao dužnosti i tajnosti" data-en="function: normalize transfer as duty + secrecy">funkcija: normalizacija transfera kao dužnosti i tajnosti</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Kurir / dostava" data-en="Courier / delivery">Kurir / dostava</div>
          <ul class="bullets">
            <li data-sr="incident: paket stoji, doplata ili potvrda" data-en="incident: package held, fee or confirmation">incident: paket stoji, doplata ili potvrda</li>
            <li data-sr="korak: link ka formi ili uplata" data-en="step: link to a form or a payment">korak: link ka formi ili uplata</li>
            <li data-sr="funkcija: prelaz u phishing/smishing tok" data-en="function: transition into phishing/smishing">funkcija: prelaz u phishing/smishing tok</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Operater / SIM swap" data-en="Carrier / SIM swap">Operater / SIM swap</div>
          <ul class="bullets">
            <li data-sr="incident: prenos broja ili promena SIM-a" data-en="incident: number porting or SIM change">incident: prenos broja ili promena SIM-a</li>
            <li data-sr="korak: kodovi za naloge i „verifikacija“" data-en="step: account codes and “verification”">korak: kodovi za naloge i „verifikacija“</li>
            <li data-sr="funkcija: otvaranje puta ka resetovima i takeover-u" data-en="function: open the path to resets and takeover">funkcija: otvaranje puta ka resetovima i takeover-u</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 4) HRONOLOŠKI TOK (DETALJNO) + EVOLUCIJE PO FAZAMA -->
    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)" data-en="Timeline (phases + evolutions)">
        Hronološki tok (faze + evolucije)
      </h2>

      <p class="muted"
        data-sr="Faze su kompresovane u minutima. Svaka faza ima operativni cilj, tipične fraze i očekivana grananja."
        data-en="Phases compress into minutes. Each phase has an operational goal, typical phrases, and expected branching."
      >Faze su kompresovane u minutima. Svaka faza ima operativni cilj, tipične fraze i očekivana grananja.</p>

      <!-- FAZA 1 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Kontakt: poziv kao ulaz" data-en="Phase 1 — Contact: the call as entry">
          Faza 1 — Kontakt: poziv kao ulaz
        </h3>

        <p
          data-sr="Poziv stiže iznenada. U prvih 20–40 sekundi postavlja se okvir: identitet pozivaoca, incident, rok. Fokus je na tome da meta ne dobije pauzu."
          data-en="The call arrives unexpectedly. In the first 20–40 seconds the frame is set: caller identity, incident, deadline. The focus is to prevent a pause."
        >Poziv stiže iznenada. U prvih 20–40 sekundi postavlja se okvir: identitet pozivaoca, incident, rok. Fokus je na tome da meta ne dobije pauzu.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Tipične fraze" data-en="Typical phrases">Tipične fraze</div>
            <ul class="bullets">
              <li data-sr="„zovem iz bezbednosti“ / „zovem iz službe“" data-en="“security department” / “official unit”">„zovem iz bezbednosti“ / „zovem iz službe“</li>
              <li data-sr="„detektovana je sumnjiva aktivnost“" data-en="“suspicious activity detected”">„detektovana je sumnjiva aktivnost“</li>
              <li data-sr="„moramo odmah da reagujemo“" data-en="“we must act immediately”">„moramo odmah da reagujemo“</li>
            </ul>
          </div>

          <div class="phase">
            <div class="label" data-sr="Operativni cilj" data-en="Operational goal">Operativni cilj</div>
            <ul class="bullets">
              <li data-sr="zadržavanje mete na liniji" data-en="keep the target on the line">zadržavanje mete na liniji</li>
              <li data-sr="postavljanje incidenta kao realnog i hitnog" data-en="make the incident feel real and urgent">postavljanje incidenta kao realnog i hitnog</li>
              <li data-sr="prelaz na „korak 1“ bez provere identiteta" data-en="move to “step 1” without identity verification">prelaz na „korak 1“ bez provere identiteta</li>
            </ul>
          </div>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> meta prihvata poziv kao zvaničan kanal umesto da prekine i pozove instituciju preko zvaničnog broja."
          data-en="<strong>Threshold:</strong> the target treats the call as official instead of hanging up and calling the institution via an official number."
        ><strong>Prag faze:</strong> meta prihvata poziv kao zvaničan kanal umesto da prekine i pozove instituciju preko zvaničnog broja.</div>
      </article>

      <!-- FAZA 2 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Autoritet i uverenost" data-en="Phase 2 — Authority and certainty">
          Faza 2 — Autoritet i uverenost
        </h3>

        <p
          data-sr="Informacije su selektivne: dovoljno detalja da zvuči uverljivo, nedovoljno za proveru. Često se koristi „broj predmeta“, „procedura“, „interni protokol“. Meta dobija osećaj da pitanja usporavaju zaštitu."
          data-en="Information is selective: enough detail to sound credible, not enough to verify. “Case number”, “procedure”, “internal protocol” appear often. The target is made to feel that questions slow down protection."
        >Informacije su selektivne: dovoljno detalja da zvuči uverljivo, nedovoljno za proveru. Često se koristi „broj predmeta“, „procedura“, „interni protokol“. Meta dobija osećaj da pitanja usporavaju zaštitu.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Kako zatvaraju pitanja" data-en="How they shut down questions">Kako zatvaraju pitanja</div>
            <ul class="bullets">
              <li data-sr="„nemamo vremena za to sada“" data-en="“no time for that now”">„nemamo vremena za to sada“</li>
              <li data-sr="„to ćete videti posle u izveštaju“" data-en="“you’ll see that later in the report”">„to ćete videti posle u izveštaju“</li>
              <li data-sr="„sistem je automatizovan“" data-en="“the system is automated”">„sistem je automatizovan“</li>
              <li data-sr="„samo pratite korake“" data-en="“just follow the steps”">„samo pratite korake“</li>
            </ul>
          </div>

          <div class="phase">
            <div class="label" data-sr="Šta meta obično uradi" data-en="What the target usually does">Šta meta obično uradi</div>
            <ul class="bullets">
              <li data-sr="odloži proveru identiteta" data-en="delays identity verification">odloži proveru identiteta</li>
              <li data-sr="otvori aplikaciju i prati instrukcije" data-en="opens an app and follows instructions">otvori aplikaciju i prati instrukcije</li>
              <li data-sr="prihvati rok kao realan" data-en="accepts the deadline as real">prihvati rok kao realan</li>
            </ul>
          </div>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> meta počinje da izvršava instrukcije pre nego što potvrdi identitet pozivaoca."
          data-en="<strong>Threshold:</strong> the target begins executing instructions before confirming the caller’s identity."
        ><strong>Prag faze:</strong> meta počinje da izvršava instrukcije pre nego što potvrdi identitet pozivaoca.</div>
      </article>

      <!-- FAZA 3 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 3 — Kontrola razgovora" data-en="Phase 3 — Conversation control">
          Faza 3 — Kontrola razgovora
        </h3>

        <p
          data-sr="Poziv se vodi kao skripta: pitanje → odgovor → sledeći korak. Svaka sumnja se prevede u proceduralni odgovor i odmah se traži nova radnja. Meti se sugeriše da prekid komplikuje incident."
          data-en="The call is run as a script: question → answer → next step. Doubt is translated into a procedural answer and immediately followed by a new action request. The target is told that hanging up complicates the incident."
        >Poziv se vodi kao skripta: pitanje → odgovor → sledeći korak. Svaka sumnja se prevede u proceduralni odgovor i odmah se traži nova radnja. Meti se sugeriše da prekid komplikuje incident.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Tehnike kontrole" data-en="Control techniques">Tehnike kontrole</div>
            <ul class="bullets">
              <li data-sr="prekidanje pitanja pre završetka" data-en="interrupting questions before they finish">prekidanje pitanja pre završetka</li>
              <li data-sr="uputstva korak-po-korak bez objašnjenja" data-en="step-by-step instructions without explanation">uputstva korak-po-korak bez objašnjenja</li>
              <li data-sr="ponavljanje roka i posledice" data-en="repeating the deadline and consequence">ponavljanje roka i posledice</li>
              <li data-sr="pomeranje razgovora u „samo još ovo“ režim" data-en="pushing into a “just one more step” mode">pomeranje razgovora u „samo još ovo“ režim</li>
            </ul>
          </div>

          <div class="phase">
            <div class="label" data-sr="Šta se traži u ovoj tački" data-en="What they ask here">Šta se traži u ovoj tački</div>
            <ul class="bullets">
              <li data-sr="kod iz SMS-a ili token aplikacije" data-en="a code from SMS or token app">kod iz SMS-a ili token aplikacije</li>
              <li data-sr="potvrda u bank aplikaciji" data-en="approval inside a banking app">potvrda u bank aplikaciji</li>
              <li data-sr="otvaranje linka „za verifikaciju“" data-en="opening a “verification” link">otvaranje linka „za verifikaciju“</li>
            </ul>
          </div>
        </div>

        <div class="branch">
          <p><strong data-sr="Evolucija u ovoj tački" data-en="Evolution at this point">Evolucija u ovoj tački</strong></p>
          <ul class="bullets">
            <li
              data-sr="<strong>Phishing link:</strong> tokom poziva stiže link ka „verifikaciji“. Cilj: login, kartica, OTP. (Povezano: <a href='phishing.html'>Phishing</a>)"
              data-en="<strong>Phishing link:</strong> a “verification” link arrives during the call. Goal: login, card, OTP. (Related: <a href='phishing.html'>Phishing</a>)"
            ><strong>Phishing link:</strong> tokom poziva stiže link ka „verifikaciji“. Cilj: login, kartica, OTP. (Povezano: <a href="phishing.html">Phishing</a>)</li>

            <li
              data-sr="<strong>Smishing nastavak:</strong> SMS sa linkom dok je meta na liniji. Cilj: klik bez pauze. (Povezano: <a href='smishing.html'>Smishing</a>)"
              data-en="<strong>Smishing continuation:</strong> an SMS link while the target is on the line. Goal: click with no pause. (Related: <a href='smishing.html'>Smishing</a>)"
            ><strong>Smishing nastavak:</strong> SMS sa linkom dok je meta na liniji. Cilj: klik bez pauze. (Povezano: <a href="smishing.html">Smishing</a>)</li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> meta ostaje na liniji i ulazi u „izvršavanje“, bez nezavisne provere."
          data-en="<strong>Threshold:</strong> the target stays on the line and enters execution mode without independent verification."
        ><strong>Prag faze:</strong> meta ostaje na liniji i ulazi u „izvršavanje“, bez nezavisne provere.</div>
      </article>

      <!-- FAZA 4 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 4 — Incident + rok" data-en="Phase 4 — Incident + deadline">
          Faza 4 — Incident + rok
        </h3>

        <p
          data-sr="Uvedena je posledica i kratko vreme: „transakcija ide“, „nalog se gasi“, „paket se vraća“, „broj se prenosi“. Rok služi kao prekidač provere. U isto vreme, meta dobija utisak da je već u procesu zaštite."
          data-en="A consequence and a short time window are introduced: “transaction is going through”, “account will be disabled”, “package will be returned”, “number is being ported”. The deadline is a verification breaker. The target also feels they’re already inside a protection process."
        >Uvedena je posledica i kratko vreme: „transakcija ide“, „nalog se gasi“, „paket se vraća“, „broj se prenosi“. Rok služi kao prekidač provere. U isto vreme, meta dobija utisak da je već u procesu zaštite.</p>

        <ul class="bullets">
          <li data-sr="rokovi u minutima, ne u danima" data-en="deadlines measured in minutes, not days">rokovi u minutima, ne u danima</li>
          <li data-sr="prekid poziva se predstavlja kao greška mete" data-en="hanging up is framed as the target’s mistake">prekid poziva se predstavlja kao greška mete</li>
          <li data-sr="konsultacija sa bankom/policijom se obeshrabruje" data-en="consulting bank/police is discouraged">konsultacija sa bankom/policijom se obeshrabruje</li>
        </ul>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> meta prihvata hitnost kao realnu i prelazi na autorizaciju."
          data-en="<strong>Threshold:</strong> the target accepts urgency as real and moves into authorization."
        ><strong>Prag faze:</strong> meta prihvata hitnost kao realnu i prelazi na autorizaciju.</div>
      </article>

      <!-- FAZA 5 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Prag (autorizacija)" data-en="Phase 5 — Threshold (authorization)">
          Faza 5 — Prag (autorizacija)
        </h3>

        <p
          data-sr="Prag nastaje kada meta da autorizaciju: OTP kod, potvrda u aplikaciji, instalacija remote alata, uplata na „siguran račun“, deljenje kartičnih podataka. Posle praga šteta može da se razvija kroz više paralelnih tokova: naplata, takeover, nove uplate, kontaktiranje drugih ljudi."
          data-en="The threshold is crossed when the target authorizes: OTP code, in-app approval, remote tool installation, payment to a “safe account”, sharing card details. After it, damage can evolve through multiple parallel flows: charging, takeover, new payments, contacting other people."
        >Prag nastaje kada meta da autorizaciju: OTP kod, potvrda u aplikaciji, instalacija remote alata, uplata na „siguran račun“, deljenje kartičnih podataka. Posle praga šteta može da se razvija kroz više paralelnih tokova: naplata, takeover, nove uplate, kontaktiranje drugih ljudi.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Najčešći pragovi" data-en="Most common thresholds">Najčešći pragovi</div>
            <ul class="bullets">
              <li data-sr="OTP: „pročitajte kod da blokiramo“" data-en="OTP: “read the code to block it”">OTP: „pročitajte kod da blokiramo“</li>
              <li data-sr="potvrda u aplikaciji: „odobrite zaštitu“" data-en="in-app approval: “approve protection”">potvrda u aplikaciji: „odobrite zaštitu“</li>
              <li data-sr="remote: „instalirajte AnyDesk“" data-en="remote: “install AnyDesk”">remote: „instalirajte AnyDesk“</li>
              <li data-sr="transfer: „prebacite na siguran račun“" data-en="transfer: “move to a safe account”">transfer: „prebacite na siguran račun“</li>
            </ul>
          </div>

          <div class="phase">
            <div class="label" data-sr="Šta se dešava u pozadini" data-en="What happens in the background">Šta se dešava u pozadini</div>
            <ul class="bullets">
              <li data-sr="OTP/potvrda odobrava prijavu ili transakciju" data-en="OTP/approval authorizes a login or transaction">OTP/potvrda odobrava prijavu ili transakciju</li>
              <li data-sr="remote alat daje uvid u aplikacije i dozvole" data-en="remote tools expose apps and permissions">remote alat daje uvid u aplikacije i dozvole</li>
              <li data-sr="transfer smanjuje prostor za povraćaj" data-en="a transfer reduces reversibility">transfer smanjuje prostor za povraćaj</li>
            </ul>
          </div>
        </div>

        <div class="branch">
          <p><strong data-sr="Evolucije posle praga" data-en="Evolutions after the threshold">Evolucije posle praga</strong></p>
          <ul class="bullets">
            <li
              data-sr="<strong>Account takeover:</strong> kontrola email-a i naloga, reset lozinki, poruke kontaktima. (Čvor: account-takeover)"
              data-en="<strong>Account takeover:</strong> control of email/accounts, password resets, messaging contacts. (Node: account-takeover)"
            ><strong>Account takeover:</strong> kontrola email-a i naloga, reset lozinki, poruke kontaktima. (Čvor: account-takeover)</li>

            <li
              data-sr="<strong>Advance-fee:</strong> „takse“ kao uslov za „rešenje“ incidenta. (Povezano: <a href='advance-fee-fraud.html'>Advance-fee</a>)"
              data-en="<strong>Advance-fee:</strong> “fees” as a condition to “resolve” the incident. (Related: <a href='advance-fee-fraud.html'>Advance-fee</a>)"
            ><strong>Advance-fee:</strong> „takse“ kao uslov za „rešenje“ incidenta. (Povezano: <a href="advance-fee-fraud.html">Advance-fee</a>)</li>
          </ul>
        </div>
      </article>

      <!-- FAZA 6 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 6 — Serijske posledice" data-en="Phase 6 — Cascading consequences">
          Faza 6 — Serijske posledice
        </h3>

        <p
          data-sr="Posle praga slede dodatne radnje: promene lozinki, nove potvrde, preusmeravanje uplata, dodatne uplate, kontaktiranje drugih ljudi. Svaka radnja se prodaje kao uslov da prethodna „uspe“."
          data-en="After the threshold, additional actions follow: password changes, new approvals, payment redirections, extra payments, contacting other people. Each action is sold as required for the previous one to “work”."
        >Posle praga slede dodatne radnje: promene lozinki, nove potvrde, preusmeravanje uplata, dodatne uplate, kontaktiranje drugih ljudi. Svaka radnja se prodaje kao uslov da prethodna „uspe“.</p>

        <ul class="bullets">
          <li data-sr="„još jedna potvrda“ kao nastavak procedure" data-en="“one more approval” as procedure continuation">„još jedna potvrda“ kao nastavak procedure</li>
          <li data-sr="„još jedna uplata“ kao „zaštita sredstava“" data-en="“one more payment” as “fund protection”">„još jedna uplata“ kao „zaštita sredstava“</li>
          <li data-sr="prebacivanje na drugi kanal uplate" data-en="switching to a different payment rail">prebacivanje na drugi kanal uplate</li>
          <li data-sr="uvođenje nove osobe (senior agent)" data-en="introducing a new person (senior agent)">uvođenje nove osobe (senior agent)</li>
        </ul>
      </article>

      <!-- FAZA 7 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 7 — Pritisak i zaključavanje izlaza" data-en="Phase 7 — Pressure and locking the exit">
          Faza 7 — Pritisak i zaključavanje izlaza
        </h3>

        <p
          data-sr="Kada meta pokuša prekid, ton postaje tvrđi: posledice, odgovornost, tajnost, zabrana prekida. Cilj je povratak mete u izvršavanje koraka bez pauze."
        data-en="When the target tries to stop, the tone hardens: consequences, responsibility, secrecy, no hanging up. The goal is to push the target back into executing steps with no pause."
        >Kada meta pokuša prekid, ton postaje tvrđi: posledice, odgovornost, tajnost, zabrana prekida. Cilj je povratak mete u izvršavanje koraka bez pauze.</p>

        <div class="callout"
          data-sr="<strong>Signal kontrole:</strong> insistiranje da se ne prekida poziv dok se otvara bank aplikacija ili dok stiže SMS."
          data-en="<strong>Control signal:</strong> insisting you do not hang up while opening banking apps or while an SMS arrives."
        ><strong>Signal kontrole:</strong> insistiranje da se ne prekida poziv dok se otvara bank aplikacija ili dok stiže SMS.</div>
      </article>

      <!-- FAZA 8 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 8 — Mutacije" data-en="Phase 8 — Mutations">
          Faza 8 — Mutacije
        </h3>

        <p
          data-sr="Priča se presvlači: novi link, novi broj, novi agent, nova institucija. Mehanika ostaje stabilna: autoritet + tempo + prag. Posle mutacije često se nastavlja u takse, recovery ponude ili nove autorizacije."
          data-en="The story changes costume: new link, new number, new agent, new institution. The mechanism stays: authority + pace + threshold. After mutation, it often continues into fees, recovery offers, or new authorizations."
        >Priča se presvlači: novi link, novi broj, novi agent, nova institucija. Mehanika ostaje stabilna: autoritet + tempo + prag. Posle mutacije često se nastavlja u takse, recovery ponude ili nove autorizacije.</p>

        <div class="branch">
          <p><strong data-sr="Tipična grananja" data-en="Typical branching">Tipična grananja</strong></p>
          <ul class="bullets">
            <li
              data-sr="<strong>Phishing:</strong> portal i forma za podatke. (Povezano: <a href='phishing.html'>Phishing</a>)"
              data-en="<strong>Phishing:</strong> portal and data form. (Related: <a href='phishing.html'>Phishing</a>)"
            ><strong>Phishing:</strong> portal i forma za podatke. (Povezano: <a href="phishing.html">Phishing</a>)</li>

            <li
              data-sr="<strong>Smishing:</strong> SMS link kao nastavak incidenta. (Povezano: <a href='smishing.html'>Smishing</a>)"
              data-en="<strong>Smishing:</strong> SMS link as incident continuation. (Related: <a href='smishing.html'>Smishing</a>)"
            ><strong>Smishing:</strong> SMS link kao nastavak incidenta. (Povezano: <a href="smishing.html">Smishing</a>)</li>

            <li
              data-sr="<strong>Advance-fee:</strong> „trošak obrade“ kao uslov. (Povezano: <a href='advance-fee-fraud.html'>Advance-fee</a>)"
              data-en="<strong>Advance-fee:</strong> “processing fee” as a condition. (Related: <a href='advance-fee-fraud.html'>Advance-fee</a>)"
            ><strong>Advance-fee:</strong> „trošak obrade“ kao uslov. (Povezano: <a href="advance-fee-fraud.html">Advance-fee</a>)</li>
          </ul>
        </div>
      </article>

      <!-- FAZA 9 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 9 — Recovery talas" data-en="Phase 9 — Recovery wave">
          Faza 9 — Recovery talas
        </h3>

        <p
          data-sr="Posle incidenta dolaze poruke o povratu: „refund“, „agent“, „specijalista“. Uslov je uplata unapred ili novi „koraci“. To predstavlja drugi napad na istu metu."
          data-en="After an incident, recovery messages appear: “refund”, “agent”, “specialist”. The condition is an upfront payment or new “steps”. This is a second attack on the same target."
        >Posle incidenta dolaze poruke o povratu: „refund“, „agent“, „specijalista“. Uslov je uplata unapred ili novi „koraci“. To predstavlja drugi napad na istu metu.</p>

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

    <!-- 5) STANDARDNA UPOZORENJA -->
    <section class="card">
      <h2 data-sr="Standardna upozorenja" data-en="Standard warnings">Standardna upozorenja</h2>

      <ul class="bullets">
        <li data-sr="poziv koji traži da ostaneš na liniji služi za kontrolu tempa" data-en="a call that demands you stay on the line is pace control">poziv koji traži da ostaneš na liniji služi za kontrolu tempa</li>
        <li data-sr="OTP i potvrda u aplikaciji predstavljaju autorizaciju, ne informaciju" data-en="OTP and in-app approvals are authorization, not information">OTP i potvrda u aplikaciji predstavljaju autorizaciju, ne informaciju</li>
        <li data-sr="remote alat tokom finansijskih koraka menja rizik na viši nivo" data-en="remote tools during money steps escalate risk significantly">remote alat tokom finansijskih koraka menja rizik na viši nivo</li>
        <li data-sr="uplate na „siguran račun“ predstavljaju obrazac manipulacije" data-en="payments to a “safe account” are a manipulation pattern">uplate na „siguran račun“ predstavljaju obrazac manipulacije</li>
      </ul>

      <div class="callout"
        data-sr="<strong>Jedno pravilo:</strong> prekid poziva + poziv institucije preko zvaničnog broja. Time se prekida većina varijanti."
        data-en="<strong>One rule:</strong> hang up and call the institution via an official number. This breaks most variants."
      ><strong>Jedno pravilo:</strong> prekid poziva + poziv institucije preko zvaničnog broja. Time se prekida većina varijanti.</div>
    </section>

    <!-- 6) AKO JE ŠTETA NASTALA -->
    <section class="card">
      <h2 data-sr="Ako je šteta nastala (redosled poteza)" data-en="If damage happened (action order)">
        Ako je šteta nastala (redosled poteza)
      </h2>

      <div class="phase">
        <div class="label" data-sr="OTP ili potvrda u aplikaciji" data-en="OTP or in-app approval">OTP ili potvrda u aplikaciji</div>
        <ol class="steps">
          <li data-sr="kontakt banke radi zaštite naloga i provere transakcija" data-en="contact the bank to secure the account and review transactions">kontakt banke radi zaštite naloga i provere transakcija</li>
          <li data-sr="promena lozinki na ključnim nalozima, posebno email" data-en="change passwords on key accounts, especially email">promena lozinki na ključnim nalozima, posebno email</li>
          <li data-sr="uključivanje 2FA i provera recovery podataka" data-en="enable 2FA and verify recovery details">uključivanje 2FA i provera recovery podataka</li>
        </ol>
      </div>

      <div class="phase">
        <div class="label" data-sr="Remote alat (AnyDesk/TeamViewer)" data-en="Remote tool (AnyDesk/TeamViewer)">Remote alat (AnyDesk/TeamViewer)</div>
        <ol class="steps">
          <li data-sr="prekid sesije i uklanjanje alata" data-en="end the session and remove the tool">prekid sesije i uklanjanje alata</li>
          <li data-sr="provera finansijskih aplikacija i promena lozinki" data-en="check financial apps and change passwords">provera finansijskih aplikacija i promena lozinki</li>
          <li data-sr="kontakt banke radi zaštite transakcija" data-en="contact the bank to secure transactions">kontakt banke radi zaštite transakcija</li>
        </ol>
      </div>

      <div class="phase">
        <div class="label" data-sr="Transfer na „siguran račun“" data-en="Transfer to a “safe account”">Transfer na „siguran račun“</div>
        <ol class="steps">
          <li data-sr="hitna komunikacija sa bankom i pokušaj zaustavljanja transfera" data-en="urgent contact with the bank and attempt to stop the transfer">hitna komunikacija sa bankom i pokušaj zaustavljanja transfera</li>
          <li data-sr="čuvanje dokaza: broj, vreme, poruke, uputstva" data-en="save evidence: number, time, messages, instructions">čuvanje dokaza: broj, vreme, poruke, uputstva</li>
          <li data-sr="prijava incidenta instituciji i platformi gde je relevantno" data-en="report the incident to relevant institutions/platforms">prijava incidenta instituciji i platformi gde je relevantno</li>
        </ol>
      </div>

      <div class="callout"
        data-sr="<strong>Upozorenje:</strong> posle incidenta često stiže recovery ponuda uz uplatu. Takav kontakt tretira se kao drugi napad."
        data-en="<strong>Warning:</strong> after an incident, recovery offers often demand payment. Treat them as a second attack."
      ><strong>Upozorenje:</strong> posle incidenta često stiže recovery ponuda uz uplatu. Takav kontakt tretira se kao drugi napad.</div>
    </section>

    <!-- 7) IZ UGLA PREVARANTA: ULOGE, METRIKA, KVANTITET -->
    <section class="card">
      <h2 data-sr="Iz ugla prevaranta: uloge, metrika, kvantitet" data-en="From the scammer’s side: roles, metrics, volume">
        Iz ugla prevaranta: uloge, metrika, kvantitet
      </h2>

      <p
        data-sr="Lažni pozivi se vode kao kvantitativna operacija. Veliki broj poziva služi kao filter. Meta koja prati korake ulazi u viši prioritet jer pokazuje toleranciju na hitnost i autoritet. Posle praga tok prelazi u seriju: dodatne potvrde, nove uplate, promene identiteta, nove maske."
        data-en="Fake calls are run as a volume operation. High call volume acts as a filter. Targets who follow steps become higher priority because they tolerate urgency and authority. After the threshold, the flow becomes a series: additional approvals, new payments, identity switching, new masks."
      >Lažni pozivi se vode kao kvantitativna operacija. Veliki broj poziva služi kao filter. Meta koja prati korake ulazi u viši prioritet jer pokazuje toleranciju na hitnost i autoritet. Posle praga tok prelazi u seriju: dodatne potvrde, nove uplate, promene identiteta, nove maske.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta prate kod mete" data-en="What they measure">Šta prate kod mete</div>
          <ul class="bullets">
            <li data-sr="brzina odgovora i spremnost da ostane na liniji" data-en="response speed and willingness to stay on the line">brzina odgovora i spremnost da ostane na liniji</li>
            <li data-sr="spremnost na autorizaciju (OTP/potvrda)" data-en="willingness to authorize (OTP/approval)">spremnost na autorizaciju (OTP/potvrda)</li>
            <li data-sr="otpor na proveru identiteta i konsultacije" data-en="resistance to verification and consultation">otpor na proveru identiteta i konsultacije</li>
            <li data-sr="spremnost na remote alat" data-en="willingness to accept remote tools">spremnost na remote alat</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Kako reaguju na odbijanje" data-en="How they react to refusal">Kako reaguju na odbijanje</div>
          <ul class="bullets">
            <li data-sr="još jedan pokušaj kroz jači rok i posledicu" data-en="one more push with a stronger deadline and consequence">još jedan pokušaj kroz jači rok i posledicu</li>
            <li data-sr="presvlačenje identiteta radi autoriteta" data-en="identity switching to add authority">presvlačenje identiteta radi autoriteta</li>
            <li data-sr="prelaz na sledeću metu bez zastoja" data-en="moving to the next target without delay">prelaz na sledeću metu bez zastoja</li>
          </ul>
        </div>
      </div>

      <div class="callout"
        data-sr="<strong>Filter:</strong> meta koja da autorizaciju dobija više pažnje. Meta koja prekine i pozove zvaničan broj izlazi iz toka."
        data-en="<strong>Filter:</strong> a target who authorizes gets more attention. A target who hangs up and calls an official number exits the flow."
      ><strong>Filter:</strong> meta koja da autorizaciju dobija više pažnje. Meta koja prekine i pozove zvaničan broj izlazi iz toka.</div>
    </section>

    <!-- 8) IZVORI -->
    <section class="card sources" id="sources">
      <h2 data-sr="Izvori" data-en="Sources">Izvori</h2>
      <ul>
        <li><a href="https://www.ncsc.gov.uk/guidance/phishing" target="_blank" rel="noopener noreferrer">UK NCSC — Phishing guidance</a></li>
        <li><a href="https://www.fbi.gov/how-we-can-help-you/scams-and-safety/common-frauds-and-scams" target="_blank" rel="noopener noreferrer">FBI — Common frauds and scams</a></li>
        <li><a href="https://consumer.ftc.gov/scams" target="_blank" rel="noopener noreferrer">FTC — Scam guidance</a></li>
      </ul>
    </section>
  `
};
