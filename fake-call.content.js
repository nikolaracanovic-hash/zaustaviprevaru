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
        data-sr="Lažni pozivi su operacija u realnom vremenu. Glas preuzima tempo, autoritet postavlja okvir, hitnost sužava izbor. Poziv nije razgovor, već vođenje kroz korake koji imaju posledicu: čitanje OTP koda, potvrda u aplikaciji, instalacija programa za daljinski pristup, uplata, preusmeravanje novca. Prednost poziva je kontrola ritma: napadač može da prekine pitanje, preskoči objašnjenje i odmah pređe na sledeću radnju."
        data-en="Fake-call scams are real-time operations. Voice controls pace, authority sets the frame, urgency narrows choices. The call is not a discussion; it is guided execution of steps with consequences: reading an OTP, approving in an app, installing remote tools, making a payment, redirecting money. Calls win by controlling rhythm: the attacker can interrupt questions, skip explanations, and move straight to the next action."
      >Lažni pozivi su operacija u realnom vremenu. Glas preuzima tempo, autoritet postavlja okvir, hitnost sužava izbor. Poziv nije razgovor, već vođenje kroz korake koji imaju posledicu: čitanje OTP koda, potvrda u aplikaciji, instalacija programa za daljinski pristup, uplata, preusmeravanje novca. Prednost poziva je kontrola ritma: napadač može da prekine pitanje, preskoči objašnjenje i odmah pređe na sledeću radnju.</p>

      <p
        data-sr="Maska poziva se menja: banka, policija, kurirska služba, platforma, operater, „security tim“. Identitet služi kao ambalaža. Mehanika ostaje ista: zadržavanje mete na liniji, izolacija od provere, ubrzavanje radnji, izvlačenje autorizacije. Autoritet je sredstvo za prelazak praga, ne dokaz legitimnosti."
        data-en="The caller identity changes: bank, police, courier, platform, carrier, “security team”. Identity is packaging. The mechanism stays: keep the target on the line, isolate them from verification, accelerate actions, extract authorization. Authority is a tool to cross the threshold, not evidence of legitimacy."
      >Maska poziva se menja: banka, policija, kurirska služba, platforma, operater, „security tim“. Identitet služi kao ambalaža. Mehanika ostaje ista: zadržavanje mete na liniji, izolacija od provere, ubrzavanje radnji, izvlačenje autorizacije. Autoritet je sredstvo za prelazak praga, ne dokaz legitimnosti.</p>

      <div class="callout"
        data-sr="<strong>Prag:</strong> OTP ili potvrda u aplikaciji, instalacija programa za daljinski pristup, uplata na „siguran račun“, deljenje kartičnih podataka. Posle praga šteta prelazi u lanac."
        data-en="<strong>Threshold:</strong> OTP or in-app approval, installing a remote tool, paying to a “safe account”, sharing card details. After the threshold, damage becomes a chain."
      ><strong>Prag:</strong> OTP ili potvrda u aplikaciji, instalacija programa za daljinski pristup, uplata na „siguran račun“, deljenje kartičnih podataka. Posle praga šteta prelazi u lanac.</div>

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
      <h2 data-sr="Common impersonations and scripts (with function)" data-en="Common impersonations and scripts (with function)">Common impersonations and scripts (with function)</h2>

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
            <li data-sr="funkcija: prelaz u fišing/SMS prevara tok" data-en="function: transition into phishing/smishing">funkcija: prelaz u fišing/SMS prevara tok</li>
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
      <h2 data-sr="Timeline (phases + evolutions)" data-en="Timeline (phases + evolutions)">Timeline (phases + evolutions)</h2>

      <p class="muted"
        data-sr="Faze su kompresovane u minutima. Svaka faza ima operativni cilj, tipične fraze i očekivana grananja."
        data-en="Phases compress into minutes. Each phase has an operational goal, typical phrases, and expected branching."
      >Faze su kompresovane u minutima. Svaka faza ima operativni cilj, tipične fraze i očekivana grananja.</p>

      <!-- FAZA 1 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Phase 1 — Contact: the call as entry" data-en="Phase 1 — Contact: the call as entry">Phase 1 — Contact: the call as entry</h3>

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
        <h3 class="phase-title" data-sr="Phase 2 — Authority and certainty" data-en="Phase 2 — Authority and certainty">Phase 2 — Authority and certainty</h3>

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
        <h3 class="phase-title" data-sr="Phase 3 — Conversation control" data-en="Phase 3 — Conversation control">Phase 3 — Conversation control</h3>

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
              data-sr="<strong>fišing link:</strong> tokom poziva stiže link ka „verifikaciji“. Cilj: login, kartica, OTP. (Povezano: <a href='phishing.html'>fišing</a>)"
              data-en="<strong>Phishing link:</strong> a “verification” link arrives during the call. Goal: login, card, OTP. (Related: <a href='phishing.html'>Phishing</a>)"
            ><strong>Fišing link:</strong> tokom poziva stiže link ka „verifikaciji“. Cilj: login, kartica, OTP. (Povezano: <a href="phishing.html">Phishing</a>)</li>

            <li
              data-sr="<strong>SMS prevara nastavak:</strong> SMS sa linkom dok je meta na liniji. Cilj: klik bez pauze. (Povezano: <a href='smishing.html'>SMS prevara</a>)"
              data-en="<strong>Smishing continuation:</strong> an SMS link while the target is on the line. Goal: click with no pause. (Related: <a href='smishing.html'>Smishing</a>)"
            ><strong>SMS prevara nastavak:</strong> SMS sa linkom dok je meta na liniji. Cilj: klik bez pauze. (Povezano: <a href="smishing.html">Smishing</a>)</li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> meta ostaje na liniji i ulazi u „izvršavanje“, bez nezavisne provere."
          data-en="<strong>Threshold:</strong> the target stays on the line and enters execution mode without independent verification."
        ><strong>Prag faze:</strong> meta ostaje na liniji i ulazi u „izvršavanje“, bez nezavisne provere.</div>
      </article>

      <!-- FAZA 4 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Phase 4 — Incident + deadline" data-en="Phase 4 — Incident + deadline">Phase 4 — Incident + deadline</h3>

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
        <h3 class="phase-title" data-sr="Phase 5 — Threshold (authorization)" data-en="Phase 5 — Threshold (authorization)">Phase 5 — Threshold (authorization)</h3>

        <p
          data-sr="Prag nastaje kada meta da autorizaciju: OTP kod, potvrda u aplikaciji, instalacija programa za daljinski pristup, uplata na „siguran račun“, deljenje kartičnih podataka. Posle praga šteta može da se razvija kroz više paralelnih tokova: naplata, takeover, nove uplate, kontaktiranje drugih ljudi."
          data-en="The threshold is crossed when the target authorizes: OTP code, in-app approval, remote tool installation, payment to a “safe account”, sharing card details. After it, damage can evolve through multiple parallel flows: charging, takeover, new payments, contacting other people."
        >Prag nastaje kada meta da autorizaciju: OTP kod, potvrda u aplikaciji, instalacija programa za daljinski pristup, uplata na „siguran račun“, deljenje kartičnih podataka. Posle praga šteta može da se razvija kroz više paralelnih tokova: naplata, takeover, nove uplate, kontaktiranje drugih ljudi.</p>

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
              <li data-sr="program za daljinski pristup daje uvid u aplikacije i dozvole" data-en="remote tools expose apps and permissions">program za daljinski pristup daje uvid u aplikacije i dozvole</li>
              <li data-sr="transfer smanjuje prostor za povraćaj" data-en="a transfer reduces reversibility">transfer smanjuje prostor za povraćaj</li>
            </ul>
          </div>
        </div>

        <div class="branch">
          <p><strong data-sr="Evolucije posle praga" data-en="Evolutions after the threshold">Evolucije posle praga</strong></p>
          <ul class="bullets">
            <li
              data-sr="<strong>preuzimanje naloga:</strong> kontrola imejl-a i naloga, reset lozinki, poruke kontaktima. (Čvor: account-takeover)"
              data-en="<strong>Preuzimanje naloga:</strong> control of email/accounts, password resets, messaging contacts. (Node: account-takeover)"
            ><strong>Preuzimanje naloga:</strong> kontrola email-a i naloga, reset lozinki, poruke kontaktima. (Čvor: account-takeover)</li>

            <li
              data-sr="<strong>Advance-fee:</strong> „takse“ kao uslov za „rešenje“ incidenta. (Povezano: <a href='advance-fee-fraud.html'>Advance-fee</a>)"
              data-en="<strong>Advance-fee:</strong> “fees” as a condition to “resolve” the incident. (Related: <a href='advance-fee-fraud.html'>Advance-fee</a>)"
            ><strong>Advance-fee:</strong> „takse“ kao uslov za „rešenje“ incidenta. (Povezano: <a href="advance-fee-fraud.html">Advance-fee</a>)</li>
          </ul>
        </div>
      </article>

      <!-- FAZA 6 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Phase 6 — Cascading consequences" data-en="Phase 6 — Cascading consequences">Phase 6 — Cascading consequences</h3>

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
        <h3 class="phase-title" data-sr="Phase 7 — Pressure and locking the exit" data-en="Phase 7 — Pressure and locking the exit">Phase 7 — Pressure and locking the exit</h3>

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
        <h3 class="phase-title" data-sr="Phase 8 — Mutations" data-en="Phase 8 — Mutations">Phase 8 — Mutations</h3>

        <p
          data-sr="Priča se presvlači: novi link, novi broj, novi agent, nova institucija. Mehanika ostaje stabilna: autoritet + tempo + prag. Posle mutacije često se nastavlja u takse, recovery ponude ili nove autorizacije."
          data-en="The story changes costume: new link, new number, new agent, new institution. The mechanism stays: authority + pace + threshold. After mutation, it often continues into fees, recovery offers, or new authorizations."
        >Priča se presvlači: novi link, novi broj, novi agent, nova institucija. Mehanika ostaje stabilna: autoritet + tempo + prag. Posle mutacije često se nastavlja u takse, recovery ponude ili nove autorizacije.</p>

        <div class="branch">
          <p><strong data-sr="Tipična grananja" data-en="Typical branching">Tipična grananja</strong></p>
          <ul class="bullets">
            <li
              data-sr="<strong>fišing:</strong> portal i forma za podatke. (Povezano: <a href='phishing.html'>fišing</a>)"
              data-en="<strong>Phishing:</strong> portal and data form. (Related: <a href='phishing.html'>Phishing</a>)"
            ><strong>Fišing:</strong> portal i forma za podatke. (Povezano: <a href="phishing.html">Phishing</a>)</li>

            <li
              data-sr="<strong>SMS prevara:</strong> SMS link kao nastavak incidenta. (Povezano: <a href='smishing.html'>SMS prevara</a>)"
              data-en="<strong>Smishing:</strong> SMS link as incident continuation. (Related: <a href='smishing.html'>Smishing</a>)"
            ><strong>SMS prevara:</strong> SMS link kao nastavak incidenta. (Povezano: <a href="smishing.html">Smishing</a>)</li>

            <li
              data-sr="<strong>Advance-fee:</strong> „trošak obrade“ kao uslov. (Povezano: <a href='advance-fee-fraud.html'>Advance-fee</a>)"
              data-en="<strong>Advance-fee:</strong> “processing fee” as a condition. (Related: <a href='advance-fee-fraud.html'>Advance-fee</a>)"
            ><strong>Advance-fee:</strong> „trošak obrade“ kao uslov. (Povezano: <a href="advance-fee-fraud.html">Advance-fee</a>)</li>
          </ul>
        </div>
      </article>

      <!-- FAZA 9 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Phase 9 — Recovery wave" data-en="Phase 9 — Recovery wave">Phase 9 — Recovery wave</h3>

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
      <h2 data-sr="Standard warnings" data-en="Standard warnings">Standard warnings</h2>

      <ul class="bullets">
        <li data-sr="poziv koji traži da ostaneš na liniji služi za kontrolu tempa" data-en="a call that demands you stay on the line is pace control">poziv koji traži da ostaneš na liniji služi za kontrolu tempa</li>
        <li data-sr="OTP i potvrda u aplikaciji predstavljaju autorizaciju, ne informaciju" data-en="OTP and in-app approvals are authorization, not information">OTP i potvrda u aplikaciji predstavljaju autorizaciju, ne informaciju</li>
        <li data-sr="program za daljinski pristup tokom finansijskih koraka menja rizik na viši nivo" data-en="remote tools during money steps escalate risk significantly">program za daljinski pristup tokom finansijskih koraka menja rizik na viši nivo</li>
        <li data-sr="uplate na „siguran račun“ predstavljaju obrazac manipulacije" data-en="payments to a “safe account” are a manipulation pattern">uplate na „siguran račun“ predstavljaju obrazac manipulacije</li>
      </ul>

      <div class="callout"
        data-sr="<strong>Jedno pravilo:</strong> prekid poziva + poziv institucije preko zvaničnog broja. Time se prekida većina varijanti."
        data-en="<strong>One rule:</strong> hang up and call the institution via an official number. This breaks most variants."
      ><strong>Jedno pravilo:</strong> prekid poziva + poziv institucije preko zvaničnog broja. Time se prekida većina varijanti.</div>
    </section>

    <!-- 6) AKO JE ŠTETA NASTALA -->
    <section class="card">
      <h2 data-sr="If damage happened (action order)" data-en="If damage happened (action order)">If damage happened (action order)</h2>

      <div class="phase">
        <div class="label" data-sr="OTP ili potvrda u aplikaciji" data-en="OTP or in-app approval">OTP ili potvrda u aplikaciji</div>
        <ol class="steps">
          <li data-sr="kontakt banke radi zaštite naloga i provere transakcija" data-en="contact the bank to secure the account and review transactions">kontakt banke radi zaštite naloga i provere transakcija</li>
          <li data-sr="promena lozinki na ključnim nalozima, posebno imejl" data-en="change passwords on key accounts, especially email">promena lozinki na ključnim nalozima, posebno imejl</li>
          <li data-sr="uključivanje dvofaktorska potvrda i provera recovery podataka" data-en="enable 2FA and verify recovery details">uključivanje dvofaktorska potvrda i provera recovery podataka</li>
        </ol>
      </div>

      <div class="phase">
        <div class="label" data-sr="Program za daljinski pristup (AnyDesk/TeamViewer)" data-en="Remote tool (AnyDesk/TeamViewer)">Program za daljinski pristup (AnyDesk/TeamViewer)</div>
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
      <h2 data-sr="From the scammer’s side: roles, metrics, volume" data-en="From the scammer’s side: roles, metrics, volume">From the scammer’s side: roles, metrics, volume</h2>

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
            <li data-sr="spremnost na program za daljinski pristup" data-en="willingness to accept remote tools">spremnost na program za daljinski pristup</li>
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


    <!-- 8) STATISTIKE I EKONOMIJA FAKE CALL PREVARA -->
    <section class="card">
      <h2 data-sr="Fake call scam statistics and economics" data-en="Fake call scam statistics and economics">Fake call scam statistics and economics</h2>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="FTC + FBI IC3 data (USA)" data-en="FTC + FBI IC3 data (USA)">FTC + FBI IC3 data (USA)</div>
          <ul class="bullets">
            <li data-sr="IC3 2023: Gov Impersonation 14,190 prijava, $394M gubitak" data-en="IC3 2023: Gov Impersonation 14,190 reports, $394M loss">IC3 2023: Gov Impersonation 14,190 prijava, $394M gubitak</li>
            <li data-sr="prosečan gubitak po žrtvi: $27,777" data-en="average loss per victim: $27,777">prosečan gubitak po žrtvi: $27,777</li>
            <li data-sr="automatski pozivi: računar poziva milione ljudi (milijarde poziva godišnje samo u USA)" data-en="automated calls: computer calls millions of people (billions annually in USA alone)">automatski pozivi: računar poziva milione ljudi (milijarde poziva godišnje samo u USA)</li>
            <li data-sr="AI kopiranje glasa dramatično povećava kredibilitet poziva" data-en="AI kopiranje glasa dramatically increases call credibility">AI kopiranje glasa dramatično povećava kredibilitet poziva</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Demographics (ko je najranjiviji)" data-en="Demographics (most vulnerable)">Demographics (ko je najranjiviji)</div>
          <ul class="bullets">
            <li data-sr="starost 60+: 45% žrtava, 65% total gubitka" data-en="age 60+: 45% of victims, 65% of total loss">starost 60+: 45% žrtava, 65% total gubitka</li>
            <li data-sr="prosečan gubitak 60+: $4,800 (vs $1,600 za 18-59)" data-en="average loss 60+: $4,800 (vs $1,600 for 18-59)">prosečan gubitak 60+: $4,800 (vs $1,600 za 18-59)</li>
            <li data-sr="razlog: phone trust legacy + authority compliance + isolation" data-en="reason: phone trust legacy + authority compliance + isolation">razlog: phone trust legacy + authority compliance + isolation</li>
            <li data-sr="gender split: 58% ženski, 42% muški (bank/government calls)" data-en="gender split: 58% female, 42% male (bank/government calls)">gender split: 58% ženski, 42% muški (bank/government calls)</li>
            <li data-sr="peak timing: ponedeljak 10-12h, utorak 14-16h (business hours)" data-en="peak timing: Monday 10am-12pm, Tuesday 2-4pm (business hours)">peak timing: ponedeljak 10-12h, utorak 14-16h (business hours)</li>
            <li data-sr="geografija: USA (50%), Canada (12%), UK (10%), Australia (8%)" data-en="geography: USA (50%), Canada (12%), UK (10%), Australia (8%)">geografija: USA (50%), Canada (12%), UK (10%), Australia (8%)</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Call types (distribution)" data-en="Call types (distribution)">Call types (distribution)</div>
          <ul class="bullets">
            <li data-sr="bank/fraud alert: 35% svih fake calls (highest conversion)" data-en="bank/fraud alert: 35% of all fake calls (highest conversion)">bank/fraud alert: 35% svih fake calls (highest conversion)</li>
            <li data-sr="tech support: 25% (daljinski pristup focus)" data-en="tech support: 25% (remote-access focus)">tech support: 25% (kontrola računara focus)</li>
            <li data-sr="government/IRS/SSA: 20% (seasonal peaks April-May)" data-en="government/IRS/SSA: 20% (seasonal peaks April-May)">government/IRS/SSA: 20% (seasonal peaks April-May)</li>
            <li data-sr="delivery/package: 10% (links to SMS prevara)" data-en="delivery/package: 10% (links to smishing)">delivery/package: 10% (links to SMS prevara)</li>
            <li data-sr="other (utility, insurance, charity): 10%" data-en="other (utility, insurance, charity): 10%">other (utility, insurance, charity): 10%</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Outcome metrics" data-en="Outcome metrics">Outcome metrics</div>
          <ul class="bullets">
            <li data-sr="koliko ljudi se javi: 5-10% (od 100 poziva, 5-10 odgovori)" data-en="answer rate: 5-10% (of 100 calls, 5-10 answer)">koliko ljudi se javi: 5-10% (od 100 poziva, 5-10 odgovori)</li>
            <li data-sr="engagement rate: 30-40% (od odgovora, 30-40% ostane na liniji 1+ min)" data-en="engagement rate: 30-40% (of answers, 30-40% stay on the line 1+ min)">engagement rate: 30-40% (od odgovora, 30-40% ostane na liniji 1+ min)</li>
            <li data-sr="uspešnost prevare (authorization given): 5-10% od engaged calls" data-en="scam success rate (authorization given): 5-10% of engaged calls">uspešnost prevare (authorization given): 5-10% od engaged calls</li>
            <li data-sr="ROI za operatera: ~100:1 (call costs vs avg victim loss)" data-en="ROI for operator: ~100:1 (call costs vs avg victim loss)">ROI za operatera: ~100:1 (call costs vs avg victim loss)</li>
            <li data-sr="timeline: 70% štete nastane u prvom pozivu, 30% u follow-up" data-en="timeline: 70% of damage in first call, 30% in follow-up">timeline: 70% štete nastane u prvom pozivu, 30% u follow-up</li>
            <li data-sr="repeat targeting: 50% žrtava dobija follow-up poziv u roku od 72h" data-en="repeat targeting: 50% of victims get follow-up call within 72h">repeat targeting: 50% žrtava dobija follow-up poziv u roku od 72h</li>
          </ul>
        </div>
      </div>

      <div class="callout"
        data-sr="<strong>Zašto lažni pozivi ne prestaju:</strong> Pozivanje preko interneta košta skoro ništa - mogu da pozovu milione ljudi za par stotina dolara. Lako je lažirati broj koji se prikazuje na telefonu - može da piše &quot;Policija&quot; ili &quot;Banka&quot; iako nije. AI može kopirati glas bilo koje osobe. Kombinacija: jeftini pozivi + lažni broj + kopiran glas = savršena prevara. Samo u USA 2023: $394 miliona gubici."
        data-en="<strong>Why fake calls don't stop:</strong> Calling via internet costs almost nothing - can call millions for a few hundred dollars. Easy to fake the number shown on the phone - can display 'Police' or 'Bank' when it isn't. AI can copy anyone's voice. Combination: cheap calls + fake number + copied voice = perfect scam. In the USA in 2023 alone: $394M losses."
      ><strong>Zašto lažni pozivi ne prestaju:</strong> Pozivanje preko interneta košta skoro ništa - mogu da pozovu milione ljudi za par stotina dolara. Lako je lažirati broj koji se prikazuje na telefonu - može da piše „Policija" ili „Banka" iako nije. AI može kopirati glas bilo koje osobe. Kombinacija: jeftini pozivi + lažni broj + kopiran glas = savršena prevara. Samo u USA 2023: $394 miliona gubici.</div>
    </section>

    <!-- 9) AUTOMATSKI POZIVI I FILTRIRANJE -->
    <section class="card">
      <h2 data-sr="Automated calls: how they call millions of people" data-en="Automated calls: how they call millions of people">Automated calls: how they call millions of people</h2>

      <p
        data-sr="Računar poziva umesto čoveka - jedan centar može pozvati milione ljudi nedeljno. Automatski sistem prvo pita par pitanja (&quot;pritisnite 1 za srpski&quot;) da bi video ko će odgovoriti. Tek onda te prebacuje na pravog čoveka. Tako ne gube vreme na one koji ne odgovaraju ili prekidaju odmah. Ovo smanjuje troškove i povećava broj uspešnih prevara."
        data-en="Computer calls instead of human - one center can call millions each week. Automated system first asks a few questions ('press 1 for English') to see who will respond. Only then does it connect you to a real person. This way they don't waste time on those who don't answer or hang up immediately. This reduces costs and increases successful scams."
      >Računar poziva umesto čoveka - jedan centar može pozvati milione ljudi nedeljno. Automatski sistem prvo pita par pitanja („pritisnite 1 za srpski") da bi video ko će odgovoriti. Tek onda te prebacuje na pravog čoveka. Tako ne gube vreme na one koji ne odgovaraju ili prekidaju odmah. Ovo smanjuje troškove i povećava broj uspešnih prevara.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Kako automatski poziv funkcioniše" data-en="How automated call works">Kako automatski poziv funkcioniše</div>
          <ul class="bullets">
            <li data-sr="auto-dialer: software pravi 100-1,000 poziva simultano" data-en="auto-dialer: software makes 100-1,000 calls simultaneously">auto-dialer: software pravi 100-1,000 poziva simultano</li>
            <li data-sr="pre-recorded message: bank alert, IRS warning, tech support" data-en="pre-recorded message: bank alert, IRS warning, tech support">pre-recorded message: bank alert, IRS warning, tech support</li>
            <li data-sr="press 1 to continue: filtering mehanizam (ko je spreman da reaguje)" data-en="press 1 to continue: filtering mechanism (who's ready to respond)">press 1 to continue: filtering mehanizam (ko je spreman da reaguje)</li>
            <li data-sr="transfer to live operator: meta koja pritisne 1 dobija ljudskog operatera" data-en="transfer to live operator: target who presses 1 gets human operator">transfer to live operator: meta koja pritisne 1 dobija ljudskog operatera</li>
            <li data-sr="cena: 1-3 centa po pozivu (pozivanje preko interneta je jeftino)" data-en="cost: 1-3 cents per call (calling via internet is cheap)">cena: 1-3 centa po pozivu (pozivanje preko interneta je jeftino)</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="automatski sistem za pozive filtering efikasnost" data-en="automated call system filtering efficiency">automatski sistem za pozive filtering efikasnost</div>
          <ul class="bullets">
            <li data-sr="10,000 automatski pozivi → 700 odgovora (7% koliko ljudi se javi)" data-en="10,000 automatski pozivi → 700 answers (7% answer rate)">10,000 automatski pozivi → 700 odgovora (7% koliko ljudi se javi)</li>
            <li data-sr="700 odgovora → 200 pritisne button (28% engagement)" data-en="700 answers → 200 press a button (28% engagement)">700 odgovora → 200 pritisne button (28% engagement)</li>
            <li data-sr="200 transfer → 5-10 operatera potrebno (20-40 poziva po operateru/dan)" data-en="200 transferss → 5-10 operators needed (20-40 calls per operator/day)">200 transfer → 5-10 operatera potrebno (20-40 poziva po operateru/dan)</li>
            <li data-sr="rezultat: automatski sistem za pozive preskaće 95% neproduktivnih poziva" data-en="result: automated call system skips 95% of unproductive calls">rezultat: automatski sistem za pozive preskaće 95% neproduktivnih poziva</li>
            <li data-sr="operater dobija SAMO targets koji su već pokazali spremnost" data-en="operator gets ONLY targets who already showed willingness">operater dobija SAMO targets koji su već pokazali spremnost</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="AI kopiranje glasa (nova tehnika)" data-en="AI kopiranje glasa (new technique)">AI kopiranje glasa (nova tehnika)</div>
          <ul class="bullets">
            <li data-sr="ElevenLabs, Play.ht: AI tools za kopiranje glasa (3-5 sec sample)" data-en="ElevenLabs, Play.ht: AI tools for voice cloning (3-5 sec sample)">ElevenLabs, Play.ht: AI tools za kopiranje glasa (3-5 sec sample)</li>
            <li data-sr="family member scam: meta čuje glas sina/ćerke u nevolji" data-en="family member scam: target hears child's voice in distress">family member scam: meta čuje glas sina/ćerke u nevolji</li>
            <li data-sr="voice sample source: social media videos, public posts" data-en="voice sample source: social media videos, public posts">voice sample source: social media videos, public posts</li>
            <li data-sr="ekstremno efektivno: 60-70% roditelja pada na cloned voice" data-en="extremely effective: 60-70% of parents fall for cloned voice">ekstremno efektivno: 60-70% roditelja pada na cloned voice</li>
            <li data-sr="defense: family safe word/code phrase poznato samo porodici" data-en="defense: family safe word/code phrase known only to family">defense: family safe word/code phrase poznato samo porodici</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Zaštita od automatskih poziva" data-en="Protection from automated calls">Zaštita od automatskih poziva</div>
          <ul class="bullets">
            <li data-sr="NE odgovaraj na nepoznate brojeve - push to voicemail" data-en="DON'T answer unknown numbers - push to voicemail">NE odgovaraj na nepoznate brojeve - push to voicemail</li>
            <li data-sr="NE pritiskaj buttone (1, 9) - to potvrđuje active number" data-en="DON'T press a buttons (1, 9) - confirms the number is active">NE pritiskaj buttone (1, 9) - to potvrđuje active number</li>
            <li data-sr="koristi carrier call screening (T-Mobile Scam Shield, Verizon Call Filter)" data-en="use carrier call screening (T-Mobile Scam Shield, Verizon Call Filter)">koristi carrier call screening (T-Mobile Scam Shield, Verizon Call Filter)</li>
            <li data-sr="register on Do Not Call list (USA: donotcall.gov)" data-en="register on Do Not Call list (USA: donotcall.gov)">register on Do Not Call list (USA: donotcall.gov)</li>
            <li data-sr="family emergency protocol: verify through SECOND channel (SMS, callback)" data-en="family emergency protocol: verify through SECOND channel (SMS, callback)">family emergency protocol: verify through SECOND channel (SMS, callback)</li>
          </ul>
        </div>
      </div>

      <div class="callout"
        data-sr="<strong>Ključni filter:</strong> Ako čuješ snimljenu poruku umesto pravog čoveka - AUTOMATSKI je prevara. Prave institucije ne pozivaju milione ljudi sa snimljenom porukom za hitne stvari. AI može kopirati glas člana porodice - UVEK proveri pozivom na drugi broj."
        data-en="<strong>Key filter:</strong> If you hear recorded message instead of real person - it's AUTOMATICALLY a scam. Real institutions don't call millions with recorded message for urgent matters. AI can copy family member's voice - ALWAYS verify by calling different number."
      ><strong>Ključni filter:</strong> Ako čuješ snimljenu poruku umesto pravog čoveka - AUTOMATSKI je prevara. Prave institucije ne pozivaju milione ljudi sa snimljenom porukom za hitne stvari. AI može kopirati glas člana porodice - UVEK proveri pozivom na drugi broj.</div>
    </section>

    <!-- 8) IZVORI -->
    <section class="card sources" id="sources">
      <h2 data-sr="Sources" data-en="Sources">Sources</h2>
      <ul>
        <li><a href="https://www.ncsc.gov.uk/guidance/phishing" target="_blank" rel="noopener noreferrer">UK NCSC — Fišing guidance</a></li>
        <li><a href="https://www.fbi.gov/how-we-can-help-you/scams-and-safety/common-frauds-and-scams" target="_blank" rel="noopener noreferrer">FBI — Common frauds and scams</a></li>
        <li><a href="https://consumer.ftc.gov/scams" target="_blank" rel="noopener noreferrer">FTC — Scam guidance</a></li>
      </ul>
    </section>
  `
};
