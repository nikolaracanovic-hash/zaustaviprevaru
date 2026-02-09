window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["recovery-scam"] = {
  raw_html: `
    <!-- 1) UVOD: ŠTA JE I KAKO GENERALNO RADI -->
    <section class="card">
      <h2 data-sr="Introduction: recovery scams as the second attack" data-en="Introduction: recovery scams as the second attack">
        Introduction: recovery scams as the second attack
      </h2>

      <p
        data-sr="Recovery scam cilja ljude posle gubitka. Ulaz je potreba za poništenjem štete: povrat novca, povrat naloga, „zamrznuta sredstva“, „refund“, „chargeback pomoć“, „tracing“. Ponuda deluje kao izlaz, ali mehanika ostaje ista: uplata unapred kao uslov za „postupak“. U praksi, recovery prevara nastavlja tamo gde je prethodna stala: meta je već u režimu rešavanja problema, samo se promeni kostim."
        data-en="Recovery scams target people after a loss. The entry point is the need to undo damage: getting money back, restoring accounts, “frozen funds”, “refund”, “chargeback help”, “tracing”. The offer feels like an exit, but the mechanism stays the same: upfront payment as a condition for the “process”. In practice, recovery scams continue where the previous scam stopped: the target is already in problem-solving mode, only the costume changes."
      >Recovery scam cilja ljude posle gubitka. Ulaz je potreba za poništenjem štete: povrat novca, povrat naloga, „zamrznuta sredstva“, „refund“, „chargeback pomoć“, „tracing“. Ponuda deluje kao izlaz, ali mehanika ostaje ista: uplata unapred kao uslov za „postupak“. U praksi, recovery prevara nastavlja tamo gde je prethodna stala: meta je već u režimu rešavanja problema, samo se promeni kostim.</p>

      <p
        data-sr="Recovery se pojavljuje posle skoro svih većih prevara: crypto investicionih prevara, advance-fee serija, lažnih poziva, marketplace napada i fišing preuzimanja naloga. Recovery kontakt često koristi delove prethodnog incidenta: iznos, naziv platforme, datum, kanal komunikacije, broj poruke, TXID ili screenshot. Taj detalj stvara utisak da je kontakt „stručan“ i da „radi na slučaju“."
        data-en="Recovery appears after most major scams: crypto investment fraud, advance-fee series, fake calls, marketplace attacks, and phishing takeovers. A recovery contact often uses fragments of the earlier incident: amount, platform name, date, communication channel, message reference, TXID, or screenshots. That detail creates the impression that the contact is “expert” and “working your case”."
      >Recovery se pojavljuje posle skoro svih većih prevara: crypto investicionih prevara, advance-fee serija, lažnih poziva, marketplace napada i fišing preuzimanja naloga. Recovery kontakt često koristi delove prethodnog incidenta: iznos, naziv platforme, datum, kanal komunikacije, broj poruke, TXID ili screenshot. Taj detalj stvara utisak da je kontakt „stručan“ i da „radi na slučaju“.</p>

      <p
        data-sr="Najopasniji deo recovery prevare je promena okvira: gubitak prestaje da bude incident i postaje procedura. Meta dobija osećaj da postoji put nazad kroz „par formalnosti“. Svaka formalnost ima cenu, a cena se pojavi pre rezultata."
        data-en="The most dangerous part is the frame shift: a loss stops being an incident and becomes a procedure. The target feels there is a path back through “a few formalities”. Each formality has a price, and the price appears before results."
      >Najopasniji deo recovery prevare je promena okvira: gubitak prestaje da bude incident i postaje procedura. Meta dobija osećaj da postoji put nazad kroz „par formalnosti“. Svaka formalnost ima cenu, a cena se pojavi pre rezultata.</p>

      <div class="callout"
        data-sr="<strong>Prag:</strong> prva uplata „za postupak“. Posle praga kreće serija novih taksi i „još jedan korak“."
        data-en="<strong>Threshold:</strong> the first “process fee”. After the threshold, a series of new fees and “one more step” begins."
      ><strong>Prag:</strong> prva uplata „za postupak“. Posle praga kreće serija novih taksi i „još jedan korak“.</div>

      <div class="callout"
        data-sr="<strong>Filter:</strong> povrat + uplata unapred = obrazac."
        data-en="<strong>Filter:</strong> recovery + upfront payment = pattern."
      ><strong>Filter:</strong> povrat + uplata unapred = obrazac.</div>
    </section>

    <!-- 2) KAKO GENERALNO RADI: ZAŠTO PROLAZI POSLE GUBITKA -->
    <section class="card">
      <h2 data-sr="How it works after a loss" data-en="How it works after a loss">
        How it works after a loss
      </h2>

      <p
        data-sr="Posle prevare meta često ulazi u tunelski fokus: povrat deluje kao jedina stvar koja ispravlja situaciju. U tom stanju proceduralni jezik deluje kao put ka izlazu, a autoritet deluje kao rešenje. Recovery koristi i sram: meta želi da reši problem bez širenja priče, pa traži brzi, tihi izlaz. Recovery to pretvara u preduslov: „ne pričajte nikome dok traje postupak“."
        data-en="After a scam, targets often enter tunnel focus: recovery feels like the only thing that fixes the situation. In that state, procedural language feels like a path out and authority feels like a solution. Recovery also exploits shame: the target wants a fast, quiet exit without telling others. Recovery turns that into a condition: “don’t tell anyone while the process runs”."
      >Posle prevare meta često ulazi u tunelski fokus: povrat deluje kao jedina stvar koja ispravlja situaciju. U tom stanju proceduralni jezik deluje kao put ka izlazu, a autoritet deluje kao rešenje. Recovery koristi i sram: meta želi da reši problem bez širenja priče, pa traži brzi, tihi izlaz. Recovery to pretvara u preduslov: „ne pričajte nikome dok traje postupak“.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="What the target often thinks" data-en="What the target often thinks">What the target often thinks</div>
          <ul class="bullets">
            <li data-sr="„bar da vratim deo“" data-en="“at least recover a part”">„bar da vratim deo“</li>
            <li data-sr="„ovo je administracija, mora“" data-en="“this is admin, it must be done”">„ovo je administracija, mora“</li>
            <li data-sr="„oni već znaju detalje“" data-en="“they already know the details”">„oni već znaju detalje“</li>
            <li data-sr="„ovaj put je stvarno službeno“" data-en="“this time it’s truly official”">„ovaj put je stvarno službeno“</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="What the system does" data-en="What the system does">What the system does</div>
          <ul class="bullets">
            <li data-sr="pretvara povrat u proceduralni tok sa koracima" data-en="turns recovery into a step-by-step procedural flow">pretvara povrat u proceduralni tok sa koracima</li>
            <li data-sr="uvodi rokove da preseče proveru" data-en="adds deadlines to cut verification">uvodi rokove da preseče proveru</li>
            <li data-sr="uvodi uplatu kao preduslov za sledeći korak" data-en="introduces payment as a prerequisite for the next step">uvodi uplatu kao preduslov za sledeći korak</li>
            <li data-sr="rotira razloge da zahtev deluje kao nova prepreka" data-en="rotates reasons so each demand feels like a new obstacle">rotira razloge da zahtev deluje kao nova prepreka</li>
          </ul>
        </div>
      </div>

      <div class="callout"
        data-sr="<strong>Ključna razlika:</strong> meta više ne procenjuje da li je ponuda realna, već pokušava da završi tok."
        data-en="<strong>Key difference:</strong> the target stops evaluating whether the offer is real and starts trying to complete the flow."
      ><strong>Ključna razlika:</strong> meta više ne procenjuje da li je ponuda realna, već pokušava da završi tok.</div>
    </section>

    <!-- 3) HRONOLOŠKI TOK (DETALJNO) + GRANANJA -->
    <section class="card">
      <h2 data-sr="Timeline (phases + branching)" data-en="Timeline (phases + branching)">
        Timeline (phases + branching)
      </h2>

      <p class="muted"
        data-sr="Faze su prikazane kao operativni tok: ulaz, screening, prag, serija taksi, eskalacija, mutacije, recovery talas posle drugog gubitka."
        data-en="Phases are shown as an operational flow: entry, screening, threshold, fee series, escalation, mutations, and a recovery wave after a second loss."
      >Faze su prikazane kao operativni tok: ulaz, screening, prag, serija taksi, eskalacija, mutacije, recovery talas posle drugog gubitka.</p>

      <!-- FAZA 1 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Phase 1 — Entry: contact after a loss" data-en="Phase 1 — Entry: contact after a loss">
          Phase 1 — Entry: contact after a loss
        </h3>

        <p
          data-sr="Kontakt stiže kao poruka, imejl, poziv ili novi profil. Tema je povrat: „refund“, „recovery“, „case“, „tracing“, „chargeback“. Ulaz često izgleda kao pomoć, ne kao prodaja, jer meta već želi izlaz."
          data-en="The contact arrives as a message, email, call, or a new profile. The theme is recovery: “refund”, “recovery”, “case”, “tracing”, “chargeback”. Entry often looks like help, not selling, because the target already wants an exit."
        >Kontakt stiže kao poruka, imejl, poziv ili novi profil. Tema je povrat: „refund“, „recovery“, „case“, „tracing“, „chargeback“. Ulaz često izgleda kao pomoć, ne kao prodaja, jer meta već želi izlaz.</p>

        <ul class="bullets">
          <li data-sr="signal: kontakt zna detalje incidenta bez jasnog izvora" data-en="signal: contact knows incident details without a clear source">signal: kontakt zna detalje incidenta bez jasnog izvora</li>
          <li data-sr="signal: ponuda brzog povrata uz kratke rokove" data-en="signal: fast recovery promise with short deadlines">signal: ponuda brzog povrata uz kratke rokove</li>
          <li data-sr="signal: predlog tajnosti kao „uslov postupka“" data-en="signal: secrecy framed as a “process requirement”">signal: predlog tajnosti kao „uslov postupka“</li>
        </ul>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> meta pristaje da uđe u „postupak“ pre nego što proveri identitet."
          data-en="<strong>Threshold:</strong> the target agrees to enter a “procedure” before verifying identity."
        ><strong>Prag faze:</strong> meta pristaje da uđe u „postupak“ pre nego što proveri identitet.</div>
      </article>

      <!-- FAZA 2 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Phase 2 — Screening questions" data-en="Phase 2 — Screening questions">
          Phase 2 — Screening questions
        </h3>

        <p
          data-sr="Slede pitanja koja izgledaju kao priprema slučaja: iznos, datum, platforma, kanal (kripto/kartica/banka), TXID, screenshot. Funkcija pitanja je procena profila mete i priprema priče o „taksi“."
          data-en="Next come questions that look like case preparation: amount, date, platform, rail (crypto/card/bank), TXID, screenshots. The function is to profile the target and prepare the fee narrative."
        >Slede pitanja koja izgledaju kao priprema slučaja: iznos, datum, platforma, kanal (kripto/kartica/banka), TXID, screenshot. Funkcija pitanja je procena profila mete i priprema priče o „taksi“.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="What they ask for" data-en="What they ask for">What they ask for</div>
            <ul class="bullets">
              <li data-sr="iznos i datum gubitka" data-en="loss amount and date">iznos i datum gubitka</li>
              <li data-sr="naziv platforme i način uplate" data-en="platform name and payment rail">naziv platforme i način uplate</li>
              <li data-sr="dokaze: chat, screenshot, TXID" data-en="evidence: chat, screenshots, TXID">dokaze: chat, screenshot, TXID</li>
              <li data-sr="status: da li je prijavljeno banci/policiji" data-en="status: reported to bank/police">status: da li je prijavljeno banci/policiji</li>
            </ul>
          </div>

          <div class="phase">
            <div class="label" data-sr="What they gain" data-en="What they gain">What they gain</div>
            <ul class="bullets">
              <li data-sr="procenu koliko meta može još da uplati" data-en="estimate how much more the target can pay">procenu koliko meta može još da uplati</li>
              <li data-sr="izbor maske: advokat, regulator, forenzika" data-en="choose a costume: lawyer, regulator, forensics">izbor maske: advokat, regulator, forenzika</li>
              <li data-sr="materijal za autoritet: „case number“, „report“" data-en="authority props: “case number”, “report”">materijal za autoritet: „case number“, „report“</li>
              <li data-sr="polugu tajnosti: „ne delite detalje“" data-en="secrecy leverage: “do not share details”">polugu tajnosti: „ne delite detalje“</li>
            </ul>
          </div>
        </div>
      </article>

      <!-- FAZA 3 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Phase 3 — Threshold: first fee" data-en="Phase 3 — Threshold: first fee">
          Phase 3 — Threshold: first fee
        </h3>

        <p
          data-sr="Prva taksa se uvodi kao proceduralna stavka: processing fee, report fee, case fee, verification fee. Iznos često deluje izvodljivo u odnosu na gubitak, jer cilj nije jednokratna uplata, već otvaranje serije."
          data-en="The first fee is introduced as procedure: processing fee, report fee, case fee, verification fee. The amount often feels manageable relative to the loss because the goal is not a one-off payment but opening a series."
        >Prva taksa se uvodi kao proceduralna stavka: processing fee, report fee, case fee, verification fee. Iznos često deluje izvodljivo u odnosu na gubitak, jer cilj nije jednokratna uplata, već otvaranje serije.</p>

        <ul class="bullets">
          <li data-sr="forma: „bez ove takse postupak ne može da krene“" data-en="frame: “without this fee the process cannot start”">forma: „bez ove takse postupak ne može da krene“</li>
          <li data-sr="rok: „danas“, „pre zatvaranja slučaja“" data-en="deadline: “today”, “before the case closes”">rok: „danas“, „pre zatvaranja slučaja“</li>
          <li data-sr="obećanje: „posle takse ide release“" data-en="promise: “after the fee comes release”">obećanje: „posle takse ide release“</li>
        </ul>

        <div class="branch">
          <p><strong data-sr="Grananje: tipovi prvih taksi" data-en="Branching: first-fee types">Grananje: tipovi prvih taksi</strong></p>
          <ul class="bullets">
            <li data-sr="„report fee“: prodaja izveštaja kao usluge" data-en="“report fee”: selling a report as a service">„report fee“: prodaja izveštaja kao usluge</li>
            <li data-sr="„case fee“: izmišljeni slučaj i broj predmeta" data-en="“case fee”: fake case and case number">„case fee“: izmišljeni slučaj i broj predmeta</li>
            <li data-sr="„verification fee“: validacija identiteta kao prepreka" data-en="“verification fee”: identity validation as obstacle">„verification fee“: validacija identiteta kao prepreka</li>
            <li data-sr="„tax clearance“: porez kao formalni uslov" data-en="“tax clearance”: tax as formal condition">„tax clearance“: porez kao formalni uslov</li>
          </ul>
        </div>
      </article>

      <!-- FAZA 4 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Phase 4 — Fee series: one more obstacle" data-en="Phase 4 — Fee series: one more obstacle">
          Phase 4 — Fee series: one more obstacle
        </h3>

        <p
          data-sr="Posle prve takse dolazi nova prepreka: release fee, naknada za otključavanje, bond deposit, provera protiv pranja novca fee, notary fee, court filing. Razlog se menja, funkcija ostaje ista: uplata kao uslov. Svaki zahtev se prodaje kao poslednji korak."
          data-en="After the first fee comes a new obstacle: release fee, naknada za otključavanje, bond deposit, provera protiv pranja novca fee, notary fee, court filing. The reason changes; the function stays: payment as a condition. Each demand is sold as the final step."
        >Posle prve takse dolazi nova prepreka: release fee, naknada za otključavanje, bond deposit, provera protiv pranja novca fee, notary fee, court filing. Razlog se menja, funkcija ostaje ista: uplata kao uslov. Svaki zahtev se prodaje kao poslednji korak.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Rotating labels" data-en="Rotating labels">Rotating labels</div>
            <ul class="bullets">
              <li data-sr="processing / administration" data-en="processing / administration">processing / administration</li>
              <li data-sr="verification / compliance / provera identiteta" data-en="verification / compliance / provera identiteta">verification / compliance / provera identiteta</li>
              <li data-sr="tax / clearance / duty" data-en="tax / clearance / duty">tax / clearance / duty</li>
              <li data-sr="deposit / bond / insurance" data-en="deposit / bond / insurance">deposit / bond / insurance</li>
              <li data-sr="release / unlock" data-en="release / unlock">release / unlock</li>
            </ul>
          </div>

          <div class="phase">
            <div class="label" data-sr="How pace is maintained" data-en="How pace is maintained">How pace is maintained</div>
            <ul class="bullets">
              <li data-sr="rokovi se skraćuju" data-en="deadlines shrink">rokovi se skraćuju</li>
              <li data-sr="ton postaje formalniji i stroži" data-en="tone becomes more formal and strict">ton postaje formalniji i stroži</li>
              <li data-sr="uvodi se nova osoba: „senior agent“" data-en="a new person enters: “senior agent”">uvodi se nova osoba: „senior agent“</li>
              <li data-sr="prelazak na poziv radi kontrole tempa" data-en="switch to calls for pace control">prelazak na poziv radi kontrole tempa</li>
            </ul>
          </div>
        </div>

        <div class="branch">
          <p><strong data-sr="Povezani čvorovi" data-en="Related nodes">Povezani čvorovi</strong></p>
          <ul class="bullets">
            <li data-sr="Advance-fee obrazac (Povezano: <a href='advance-fee-fraud.html'>Advance-fee</a>)" data-en="Obrazac gde tražiš novu uplatu (Related: <a href='advance-fee-fraud.html'>Advance-fee</a>)">Advance-fee obrazac (Povezano: <a href="advance-fee-fraud.html">Advance-fee</a>)</li>
            <li data-sr="Lažni pozivi za pritisak (Povezano: <a href='fake-call-scam.html'>Lažni pozivi</a>)" data-en="Fake calls for pressure (Related: <a href='fake-call-scam.html'>Fake calls</a>)">Lažni pozivi za pritisak (Povezano: <a href="fake-call-scam.html">Lažni pozivi</a>)</li>
          </ul>
        </div>
      </article>

      <!-- FAZA 5 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Phase 5 — Authority, documents, clone firms" data-en="Phase 5 — Authority, documents, clone firms">
          Phase 5 — Authority, documents, clone firms
        </h3>

        <p
          data-sr="Kada se pojavi sumnja, uvodi se autoritet: „advokat“, „regulator“, „forenzika“, „bank compliance“. Često stiže PDF, logo, case number, portal, imejl sa sličnim domenom. Forma izgleda kao legitimna administracija, ali funkcija ostaje finansijska: nova uplata."
          data-en="When doubt appears, authority is introduced: “lawyer”, “regulator”, “forensics”, “bank compliance”. PDFs, logos, case numbers, portals, look-alike domains often appear. The form looks like legitimate administration, but the function remains financial: another payment."
        >Kada se pojavi sumnja, uvodi se autoritet: „advokat“, „regulator“, „forenzika“, „bank compliance“. Često stiže PDF, logo, case number, portal, imejl sa sličnim domenom. Forma izgleda kao legitimna administracija, ali funkcija ostaje finansijska: nova uplata.</p>

        <div class="callout"
          data-sr="<strong>Tehnički filter:</strong> logo nije dokaz. Domen i nezavisna provera su dokaz."
          data-en="<strong>Technical filter:</strong> a logo is not proof. Domain and independent verification are proof."
        ><strong>Tehnički filter:</strong> logo nije dokaz. Domen i nezavisna provera su dokaz.</div>
      </article>

      <!-- FAZA 6 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Phase 6 — Second loss and a new recovery wave" data-en="Phase 6 — Second loss and a new recovery wave">
          Phase 6 — Second loss and a new recovery wave
        </h3>

        <p
          data-sr="Ako meta uplati, a rezultat izostane, pojavljuje se novi identitet sa novim objašnjenjem: „prethodni agent je pogrešio“, „potreban je viši nivo“, „sad ide stvarni postupak“. Time se recovery pretvara u recovery-na-recovery tok."
          data-en="If the target pays and results don’t appear, a new identity arrives with a new explanation: “the previous agent made a mistake”, “a higher tier is required”, “now the real process starts”. Recovery turns into a recovery-of-recovery loop."
        >Ako meta uplati, a rezultat izostane, pojavljuje se novi identitet sa novim objašnjenjem: „prethodni agent je pogrešio“, „potreban je viši nivo“, „sad ide stvarni postupak“. Time se recovery pretvara u recovery-na-recovery tok.</p>
      </article>
    </section>

    <!-- 4) MINI-SCENARIJI (MAPA PREPOZNAVANJA) -->
    <section class="card">
      <h2 data-sr="Mini-scenarios: what recovery looks like in practice" data-en="Mini-scenarios: what recovery looks like in practice">
        Mini-scenarios: what recovery looks like in practice
      </h2>

      <p class="muted"
        data-sr="Svaki scenario ima ulaz, taksu, sledeći zahtev. Ovo služi kao mapa prepoznavanja."
        data-en="Each scenario has an entry, a fee, and a next demand. Use this as a recognition map."
      >Svaki scenario ima ulaz, taksu, sledeći zahtev. Ovo služi kao mapa prepoznavanja.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Refund agent" data-en="Refund agent">Refund agent</div>
          <ul class="bullets">
            <li data-sr="ulaz: pominje platformu i iznos" data-en="entry: mentions platform and amount">ulaz: pominje platformu i iznos</li>
            <li data-sr="takse: processing fee / case fee" data-en="fees: processing fee / case fee">takse: processing fee / case fee</li>
            <li data-sr="nastavak: release / naknada za otključavanje" data-en="next: release / naknada za otključavanje">nastavak: release / naknada za otključavanje</li>
            <li data-sr="eskalacija: poziv za vođenje uplate" data-en="escalation: call to guide payment">eskalacija: poziv za vođenje uplate</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Lawyer / regulator" data-en="Lawyer / regulator">Lawyer / regulator</div>
          <ul class="bullets">
            <li data-sr="ulaz: case number + „postupak“" data-en="entry: case number + “procedure”">ulaz: case number + „postupak“</li>
            <li data-sr="takse: court filing / notary / tax clearance" data-en="fees: court filing / notary / tax clearance">takse: court filing / notary / tax clearance</li>
            <li data-sr="nastavak: bond deposit kao „osiguranje“" data-en="next: bond deposit as “insurance”">nastavak: bond deposit kao „osiguranje“</li>
            <li data-sr="eskalacija: rok „danas“" data-en="escalation: “today” deadline">eskalacija: rok „danas“</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Tracing / forensics" data-en="Tracing / forensics">Tracing / forensics</div>
          <ul class="bullets">
            <li data-sr="ulaz: „imamo alat“ + TXID priča" data-en="entry: “we have a tool” + TXID narrative">ulaz: „imamo alat“ + TXID priča</li>
            <li data-sr="takse: report fee" data-en="fees: report fee">takse: report fee</li>
            <li data-sr="nastavak: release fee posle „izveštaja“" data-en="next: release fee after the “report”">nastavak: release fee posle „izveštaja“</li>
            <li data-sr="eskalacija: nadogradnju paketa" data-en="escalation: package nadogradnju">eskalacija: nadogradnju paketa</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Remote “help”" data-en="Remote “help”">Remote “help”</div>
          <ul class="bullets">
            <li data-sr="ulaz: „pokazaćemo kako da vratite“" data-en="entry: “we’ll show you how to recover”">ulaz: „pokazaćemo kako da vratite“</li>
            <li data-sr="prag: AnyDesk/TeamViewer" data-en="threshold: AnyDesk/TeamViewer">prag: AnyDesk/TeamViewer</li>
            <li data-sr="nastavak: vođenje do bank aplikacije" data-en="next: guidance into bank app">nastavak: vođenje do bank aplikacije</li>
            <li data-sr="eskalacija: uplata kao „siguran račun“" data-en="escalation: payment as “safe account”">eskalacija: uplata kao „siguran račun“</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 5) PRIMERI (CASE LIBRARY) -->
    <section class="card">
      <h2 data-sr="Examples (case library)" data-en="Examples (case library)">Examples (case library)</h2>
      <div data-cases></div>
    </section>

    <!-- 6) STANDARDNA UPOZORENJA -->
    <section class="card">
      <h2 data-sr="Standard warnings" data-en="Standard warnings">Standard warnings</h2>
      <ul class="bullets">
        <li data-sr="povrat koji traži uplatu unapred predstavlja obrazac" data-en="recovery that demands upfront payment is a pattern">povrat koji traži uplatu unapred predstavlja obrazac</li>
        <li data-sr="rokovi i tajnost služe za kontrolu tempa" data-en="deadlines and secrecy are pace control">rokovi i tajnost služe za kontrolu tempa</li>
        <li data-sr="PDF, logo i case number nisu dokaz identiteta" data-en="PDFs, logos, and case numbers are not identity proof">PDF, logo i case number nisu dokaz identiteta</li>
        <li data-sr="poziv koji vodi uplatu uživo služi za zatvaranje pauze" data-en="calls that guide payment live are used to close pauses">poziv koji vodi uplatu uživo služi za zatvaranje pauze</li>
      </ul>
    </section>

    <!-- 7) AKO JE ŠTETA NASTALA -->
    <section class="card">
      <h2 data-sr="If damage happened (action order)" data-en="If damage happened (action order)">
        If damage happened (action order)
      </h2>

      <ol class="steps">
        <li data-sr="prekid daljih uplata i prekid komunikacije" data-en="stop further payments and stop communication">prekid daljih uplata i prekid komunikacije</li>
        <li data-sr="čuvanje dokaza: poruke, mejlovi, brojevi, linkovi, transakcije" data-en="save evidence: messages, emails, numbers, links, transactions">čuvanje dokaza: poruke, mejlovi, brojevi, linkovi, transakcije</li>
        <li data-sr="kontakt banke za kartične uplate i dispute gde je moguće" data-en="contact your bank for card payments and dispute where possible">kontakt banke za kartične uplate i dispute gde je moguće</li>
        <li data-sr="nezavisna provera identiteta kroz zvaničan sajt i zvaničan broj" data-en="independent verification via official website and official phone number">nezavisna provera identiteta kroz zvaničan sajt i zvaničan broj</li>
      </ol>

      <div class="callout"
        data-sr="<strong>Brzi filter:</strong> recovery ponuda + uplata unapred = obrazac."
        data-en="<strong>Fast filter:</strong> recovery offer + upfront payment = pattern."
      ><strong>Brzi filter:</strong> recovery ponuda + uplata unapred = obrazac.</div>
    </section>


    <!-- 8) STATISTIKE I EKONOMIJA RECOVERY PREVARA -->
    <section class="card">
      <h2 data-sr="Recovery scam statistics and economics" data-en="Recovery scam statistics and economics">
        Recovery scam statistics and economics
      </h2>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="FTC + FBI IC3 data (2023)" data-en="FTC + FBI IC3 data (2023)">FTC + FBI IC3 data (2023)</div>
          <ul class="bullets">
            <li data-sr="recovery scams su sekundarna viktimizacija posle crypto/romance scams" data-en="recovery scams are secondary victimization after crypto/romance scams">recovery scams su sekundarna viktimizacija posle crypto/romance scams</li>
            <li data-sr="FBI upozorava: NO legitimate service naplaćuje unapred za povraćaj" data-en="FBI warns: NO legitimate service charges upfront for recovery">FBI upozorava: NO legitimate service naplaćuje unapred za povraćaj</li>
            <li data-sr="prosečan gubitak po žrtvi: $4,200 (median: $1,500)" data-en="average loss per victim: $4,200 (median: $1,500)">prosečan gubitak po žrtvi: $4,200 (median: $1,500)</li>
            <li data-sr="SECONDARY VICTIMIZATION: 15-25% žrtava originalnog scam-a padne na recovery scam" data-en="SECONDARY VICTIMIZATION: 15-25% of original scam victims fall for recovery scam">SECONDARY VICTIMIZATION: 15-25% žrtava originalnog scam-a padne na recovery scam</li>
            <li data-sr="combined loss (original + recovery): avg $18,000-$25,000" data-en="combined loss (original + recovery): avg $18,000-$25,000">combined loss (original + recovery): avg $18,000-$25,000</li>
            <li data-sr="broj prijavljenih slučajeva 2023: ~95,000 (actual 5-8x više)" data-en="reported cases 2023: ~95,000 (actual 5-8x higher)">broj prijavljenih slučajeva 2023: ~95,000 (actual 5-8x više)</li>
            <li data-sr="rast 2019-2023: 340% porast (eksponencijalni rast sa pig butchering)" data-en="growth 2019-2023: 340% increase (exponential with pig butchering)">rast 2019-2023: 340% porast (eksponencijalni rast sa pig butchering)</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Demographics (who falls for recovery scam)" data-en="Demographics (who falls for recovery scam)">Demographics (who falls for recovery scam)</div>
          <ul class="bullets">
            <li data-sr="starost 45-65: 55% žrtava (higher loss, desperation peak)" data-en="age 45-65: 55% of victims (higher loss, desperation peak)">starost 45-65: 55% žrtava (higher loss, desperation peak)</li>
            <li data-sr="original scam type distribution: crypto/investment (40%), romance (25%), advance-fee (20%), marketplace (10%), other (5%)" data-en="original scam type distribution: crypto/investment (40%), romance (25%), advance-fee (20%), marketplace (10%), other (5%)">original scam type distribution: crypto/investment (40%), romance (25%), advance-fee (20%), marketplace (10%), other (5%)</li>
            <li data-sr="time from original scam to recovery contact: 1-4 nedelje (median: 2 nedelje)" data-en="time from original scam to recovery contact: 1-4 weeks (median: 2 weeks)">time from original scam to recovery contact: 1-4 nedelje (median: 2 nedelje)</li>
            <li data-sr="gender split: 60% ženski, 40% muški (više emocionalna ranjivost)" data-en="gender split: 60% female, 40% male (higher emotional vulnerability)">gender split: 60% ženski, 40% muški (više emocionalna ranjivost)</li>
            <li data-sr="education: 45% college degree (inteligencija NIJE zaštita, desperation > logic)" data-en="education: 45% college degree (intelligence is NOT protection, desperation > logic)">education: 45% college degree (inteligencija NIJE zaštita, desperation > logic)</li>
            <li data-sr="geografija: USA (50%), UK (15%), Canada (10%), Australia (8%), EU (12%)" data-en="geography: USA (50%), UK (15%), Canada (10%), Australia (8%), EU (12%)">geografija: USA (50%), UK (15%), Canada (10%), Australia (8%), EU (12%)</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Timeline and engagement" data-en="Timeline and engagement">Timeline and engagement</div>
          <ul class="bullets">
            <li data-sr="prosečno trajanje od prvog kontakta do prve uplate: 3-7 dana (BRZO)" data-en="average time from first contact to first payment: 3-7 days (FAST)">prosečno trajanje od prvog kontakta do prve uplate: 3-7 dana (BRZO)</li>
            <li data-sr="broj uplata po žrtvi: 2-5 (median: 3)" data-en="number of payments per victim: 2-5 (median: 3)">broj uplata po žrtvi: 2-5 (median: 3)</li>
            <li data-sr="UKUPNO trajanje prevare: 2-6 nedelja (median: 3 nedelje)" data-en="TOTAL scam duration: 2-6 weeks (median: 3 weeks)">UKUPNO trajanje prevare: 2-6 nedelja (median: 3 nedelje)</li>
            <li data-sr="escalation pattern: prva taksa $500-1,500 → sledeće takse $1,000-3,000+" data-en="escalation pattern: first fee $500-1,500 → next fees $1,000-3,000+">escalation pattern: prva taksa $500-1,500 → sledeće takse $1,000-3,000+</li>
            <li data-sr="communication frequency: 2-5 poziva/poruka dnevno (high pressure)" data-en="communication frequency: 2-5 calls/messages daily (high pressure)">communication frequency: 2-5 poziva/poruka dnevno (high pressure)</li>
            <li data-sr="success rate (scammer perspective): 15-25% conversion" data-en="success rate (scammer perspective): 15-25% conversion">success rate (scammer perspective): 15-25% conversion</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Operational economics" data-en="Operational economics">Operational economics</div>
          <ul class="bullets">
            <li data-sr="cost per scammer: $0-200/mesec (lower than original scam, data stealing)" data-en="cost per scammer: $0-200/month (lower than original scam, data stealing)">cost per scammer: $0-200/mesec (lower than original scam, data stealing)</li>
            <li data-sr="lead source: BUY victim lists ($50-200 per 1,000 victims) ili steal from original scam" data-en="lead source: BUY victim lists ($50-200 per 1,000 victims) or steal from original scam">lead source: BUY victim lists ($50-200 per 1,000 victims) ili steal from original scam</li>
            <li data-sr="target portfolio per scammer: 50-200 simultanih victims (high volume)" data-en="target portfolio per scammer: 50-200 simultaneous victims (high volume)">target portfolio per scammer: 50-200 simultanih victims (high volume)</li>
            <li data-sr="uspešnost prevare: 15-25% (VISOKA zato što su žrtve desperate)" data-en="uspešnost prevare: 15-25% (HIGH because victims are desperate)">uspešnost prevare: 15-25% (VISOKA zato što su žrtve desperate)</li>
            <li data-sr="harvest per scammer per mesec: $15K-40K (top performers: $80K+)" data-en="harvest per scammer per month: $15K-40K (top performers: $80K+)">harvest per scammer per mesec: $15K-40K (top performers: $80K+)</li>
            <li data-sr="ROI: 5,000-10,000% (astronomical, higher than original scam)" data-en="ROI: 5,000-10,000% (astronomical, higher than original scam)">ROI: 5,000-10,000% (astronomical, higher than original scam)</li>
          </ul>
        </div>
      </div>

      <div class="callout"
        data-sr="<strong>Ekonomski profil:</strong> Recovery scam ima VIŠI ROI od većine originalnih scams (5,000-10,000%) jer su troškovi niski (lead lists, no relationship building), a conversion je visoka (15-25% desperate žrtava). Zato isti scammer često prvo izvede original scam, pa nakon 2 nedelje kontaktira istu žrtvu kao &quot;recovery agent&quot;. Dvostruka žetva."
        data-en="<strong>Economic profile:</strong> Recovery scams have a HIGHER ROI than most original scams (5,000-10,000%) because costs are low (lead lists, no relationship building) and conversion is high (15-25% of desperate victims). That's why the same scammer often runs the original scam first, then contacts the same victim 2 weeks later as a &quot;recovery agent&quot;. A double harvest.">
        <strong>Ekonomski profil:</strong> Recovery scam ima VIŠI ROI od većine originalnih scams (5,000-10,000%) jer su troškovi niski (lead lists, no relationship building), a conversion je visoka (15-25% desperate žrtava). Zato isti scammer često prvo izvede original scam, pa nakon 2 nedelje kontaktira istu žrtvu kao „recovery agent“. Dvostruka žetva.
      </div>

      <ul class="sources">
        <li><a href="https://consumer.ftc.gov/articles/refund-and-recovery-scams" target="_blank" rel="noopener">FTC — Refund and Recovery Scams</a></li>
        <li><a href="https://forms.fbi.gov/victims/cryptorecoveryfraudvictims" target="_blank" rel="noopener">FBI — Cryptocurrency recovery fraud (victim information)</a></li>
        <li><a href="https://www.citizensadvice.org.uk/consumer/scams/check-if-you-can-get-your-money-back-after-a-scam/" target="_blank" rel="noopener">Citizens Advice — Check if you can get your money back after a scam</a></li>
      </ul>
    </section>
  `
};
