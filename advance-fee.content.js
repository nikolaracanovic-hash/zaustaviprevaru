window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["advance-fee-fraud"] = {
  raw_html: `
    <!-- 1) UVOD: ŠTA JE I KAKO RADI -->
    <section class="card">
      <h2 data-sr="Uvod: šta je advance-fee prevara" data-en="Introduction: what advance-fee fraud is">
        Uvod: šta je advance-fee prevara
      </h2>

      <p
        data-sr="Advance-fee prevara je obrazac u kome uplata unapred postaje uslov za isplatu, oslobađanje sredstava, završetak procedure ili navodno otključavanje naloga. Tema se menja (paket, nagrada, kredit, investicija, povraćaj novca), dok mehanizam ostaje stabilan: postoji prepreka, a uplata je predstavljena kao jedini ključ."
        data-en="Advance-fee fraud is a pattern where an upfront payment becomes a condition for payout, release of funds, completion of a procedure, or a claimed account unlock. The theme changes (package, prize, loan, investment, refund), while the mechanism stays stable: there is an obstacle, and payment is framed as the only key."
      >Advance-fee prevara je obrazac u kome uplata unapred postaje uslov za isplatu, oslobađanje sredstava, završetak procedure ili navodno otključavanje naloga. Tema se menja (paket, nagrada, kredit, investicija, povraćaj novca), dok mehanizam ostaje stabilan: postoji prepreka, a uplata je predstavljena kao jedini ključ.</p>

      <p
        data-sr="Ovaj obrazac često predstavlja završni sloj drugih prevara: blokada povlačenja kod lažnih investicija, kapare kod oglasa, lažni pozivi o „sigurnom računu“, SMS prevara priče o dostavi, fišing „verifikacije“, recovery ponude. U praksi, advance-fee je tačka gde šteta prelazi iz događaja u proces."
        data-en="This pattern often becomes the final layer of other scams: podizanje para locks in fake investments, deposits in marketplaces, fake calls about “safe accounts”, smishing delivery stories, phishing “verification”, and recovery offers. In practice, advance-fee is the point where damage shifts from an incident into a process."
      >Ovaj obrazac često predstavlja završni sloj drugih prevara: blokada povlačenja kod lažnih investicija, kapare kod oglasa, lažni pozivi o „sigurnom računu“, smišing priče o dostavi, fišing „verifikacije“, recovery ponude. U praksi, advance-fee je tačka gde šteta prelazi iz događaja u proces.</p>

      <div class="callout"
        data-sr="<strong>Prag:</strong> prva uplata. Posle praga meta ulazi u režim završavanja: svaki sledeći zahtev izgleda kao uslov da prethodni dobije smisao."
        data-en="<strong>Threshold:</strong> the first payment. After it, the target shifts into completion mode: each next demand feels like a condition for the previous one to make sense."
      ><strong>Prag:</strong> prva uplata. Posle praga meta ulazi u režim završavanja: svaki sledeći zahtev izgleda kao uslov da prethodni dobije smisao.</div>

      <div class="callout"
        data-sr="<strong>Model:</strong> obećanje → prepreka → „taksa“ → prag → serija taksi → pritisak i rokovi → presvlačenje identiteta → recovery talas"
        data-en="<strong>Model:</strong> promise → obstacle → “fee” → threshold → fee series → pressure and deadlines → identity switching → recovery wave"
      ><strong>Model:</strong> obećanje → prepreka → „taksa“ → prag → serija taksi → pritisak i rokovi → presvlačenje identiteta → recovery talas</div>
    </section>

    <!-- 2) OPŠTA MEHANIKA -->
    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika u glavi mete" data-en="How it works: mechanics in the target’s head">
        Kako generalno radi: mehanika u glavi mete
      </h2>

      <p
        data-sr="Advance-fee koristi racionalan okvir: taksa izgleda kao administrativan trošak koji „svaki sistem ima“. Iznos se bira tako da deluje izvodljivo u odnosu na obećani ishod. Prva uplata postavlja odnos meta–proces, posle čega fokus prelazi sa provere na izvršavanje."
        data-en="Advance-fee relies on a rational frame: the fee looks like an administrative cost that “every system has”. The amount is chosen to feel manageable relative to the promised outcome. The first payment creates a target–process relationship, shifting focus from verification to execution."
      >Advance-fee koristi racionalan okvir: taksa izgleda kao administrativan trošak koji „svaki sistem ima“. Iznos se bira tako da deluje izvodljivo u odnosu na obećani ishod. Prva uplata postavlja odnos meta–proces, posle čega fokus prelazi sa provere na izvršavanje.</p>

      <ul class="bullets">
        <li data-sr="asimetrija: mali trošak naspram velikog obećanja" data-en="asymmetry: small cost vs big promise">asimetrija: mali trošak naspram velikog obećanja</li>
        <li data-sr="procedura: uplata se opisuje kao pravilo procesa" data-en="procedure: payment described as a process rule">procedura: uplata se opisuje kao pravilo procesa</li>
        <li data-sr="rok: hitnost skraćuje prostor za konsultaciju" data-en="deadline: urgency compresses room to consult">rok: hitnost skraćuje prostor za konsultaciju</li>
        <li data-sr="serija: svaki korak se veže za prethodni" data-en="series: each step is tied to the previous one">serija: svaki korak se veže za prethodni</li>
        <li data-sr="izolacija: komunikacija se prebacuje u privatne kanale" data-en="isolation: communication moves to private channels">izolacija: komunikacija se prebacuje u privatne kanale</li>
      </ul>

      <div class="callout"
        data-sr="<strong>Praktični indikator:</strong> „poslednji korak“ koji se ponavlja pod novim nazivima označava seriju."
        data-en="<strong>Practical indicator:</strong> a “final step” that repeats under new labels signals a series."
      ><strong>Praktični indikator:</strong> „poslednji korak“ koji se ponavlja pod novim nazivima označava seriju.</div>
    </section>

    <!-- 3) HRONOLOŠKI TOK (DETALJNO) + GRANANJA -->
    <section class="card">
      <h2 data-sr="Hronološki tok (faze) + grananja" data-en="Timeline (phases) + branching">
        Hronološki tok (faze) + grananja
      </h2>

      <p class="muted"
        data-sr="Faze se pojavljuju u raznim pričama. Pojedini koraci mogu biti preskočeni, ali prag (prva uplata) i serija ostaju."
        data-en="Phases appear across many stories. Some steps may be skipped, but the threshold (first payment) and the series remain."
      >Faze se pojavljuju u raznim pričama. Pojedini koraci mogu biti preskočeni, ali prag (prva uplata) i serija ostaju.</p>

      <!-- FAZA 1 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Obećanje (ishod koji čeka)" data-en="Phase 1 — Promise (an outcome waiting)">
          Faza 1 — Obećanje (ishod koji čeka)
        </h3>

        <p
          data-sr="Obećanje postavlja okvir: novac ili ishod već postoji, samo je „zadržan“ ili „na čekanju“. Tema može biti nagrada, paket, kredit, refund, investicija ili pravni slučaj."
          data-en="The promise locks the frame: the money or outcome već exists, it’s just “held” or “pending”. The theme may be a prize, package, loan, refund, investment, or a legal case."
        >Obećanje postavlja okvir: novac ili ishod već postoji, samo je „zadržan“ ili „na čekanju“. Tema može biti nagrada, paket, kredit, refund, investicija ili pravni slučaj.</p>

        <ul class="bullets">
          <li data-sr="poruka naglašava dobitak ili povrat" data-en="message emphasizes a gain or refund">poruka naglašava dobitak ili povrat</li>
          <li data-sr="uveden je razlog „zašto baš ti“ (izbor, slučaj, kampanja)" data-en="a reason why “you” (selection, case, campaign) is introduced">uveden je razlog „zašto baš ti“ (izbor, slučaj, kampanja)</li>
          <li data-sr="postavlja se sledeći korak kao rutina (potvrdi, aktiviraj, preuzmi)" data-en="the next step is framed as routine (confirm, activate, claim)">postavlja se sledeći korak kao rutina (potvrdi, aktiviraj, preuzmi)</li>
        </ul>

        <div class="callout"
          data-sr="<strong>Prag ove faze:</strong> meta prihvata okvir da „vredi nastaviti proces“."
          data-en="<strong>Threshold of this phase:</strong> the target accepts that the “process is worth continuing”."
        ><strong>Prag ove faze:</strong> meta prihvata okvir da „vredi nastaviti proces“.</div>
      </article>

      <!-- FAZA 2 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Procedura (administrativni jezik)" data-en="Phase 2 — Procedure (administrative language)">
          Faza 2 — Procedura (administrativni jezik)
        </h3>

        <p
          data-sr="Uvedeni su termini koji zvuče standardno: obrada, verifikacija, carina, porez, provera identiteta, policy, revizija. Forma izgleda kao sistem."
          data-en="Standard-sounding terms appear: processing, verification, customs, tax, provera identiteta, policy, audit. The form looks like a system."
        >Uvedeni su termini koji zvuče standardno: obrada, verifikacija, carina, porez, provera identiteta, policy, revizija. Forma izgleda kao sistem.</p>

        <ul class="bullets">
          <li data-sr="uveden je „case number“ ili status slučaja" data-en="a “case number” or case status appears">uveden je „case number“ ili status slučaja</li>
          <li data-sr="zahtev za „potvrdom“ izgleda kao korak koji zatvara temu" data-en="a “confirmation” request looks like it will close the issue">zahtev za „potvrdom“ izgleda kao korak koji zatvara temu</li>
          <li data-sr="komunikacija prelazi u privatni kanal radi kontrole tempa" data-en="communication moves to a private channel to control pace">komunikacija prelazi u privatni kanal radi kontrole tempa</li>
        </ul>

        <div class="branch">
          <p><strong data-sr="Grananje u ovoj fazi" data-en="Branching at this phase">Grananje u ovoj fazi</strong></p>
          <ul class="bullets">
            <li
              data-sr="<strong>fišing:</strong> link ka „potvrdi nalog/uplatu“ ili „verifikaciji“. Cilj: kartica, login, OTP. (Povezano: <a href='fišing.html'>fišing</a>)"
              data-en="<strong>Fišing:</strong> link to “confirm account/payment” or “verification”. Goal: card, login, OTP. (Related: <a href='phishing.html'>Phishing</a>)"
            ><strong>Fišing:</strong> link ka „potvrdi nalog/uplatu“ ili „verifikaciji“. Cilj: kartica, login, OTP. (Povezano: <a href="phishing.html">Phishing</a>)</li>

            <li
              data-sr="<strong>Lažni poziv:</strong> „podrška“ objašnjava proceduru uživo i ubrzava sledeći korak. Cilj: uplata pod pritiskom. (Povezano: <a href='fake-call-scam.html'>Lažni pozivi</a>)"
              data-en="<strong>Fake call:</strong> “support” explains the procedure live and accelerates the next step. Goal: payment under pressure. (Related: <a href='fake-call-scam.html'>Fake calls</a>)"
            ><strong>Lažni poziv:</strong> „podrška“ objašnjava proceduru uživo i ubrzava sledeći korak. Cilj: uplata pod pritiskom. (Povezano: <a href="fake-call-scam.html">Lažni pozivi</a>)</li>
          </ul>
        </div>
      </article>

      <!-- FAZA 3 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Prepreka (uveden uslov za uplatu)" data-en="Phase 3 — Obstacle (payment condition introduced)">
          Faza 3 — Prepreka (uveden uslov za uplatu)
        </h3>

        <p
          data-sr="Prepreka se predstavlja kao tehnički detalj: zadržano, pending, limit, blokada, greška, missing step. Uplata se predstavlja kao ključ."
          data-en="The obstacle is framed as a technical detail: held, pending, limit, lock, error, missing step. Payment is framed as the key."
        >Prepreka se predstavlja kao tehnički detalj: zadržano, pending, limit, blokada, greška, missing step. Uplata se predstavlja kao ključ.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Šta traže" data-en="What they demand">Šta traže</div>
            <ul class="bullets">
              <li data-sr="„processing fee“ ili „trošak obrade“" data-en="“processing fee”">„processing fee“ ili „trošak obrade“</li>
              <li data-sr="„verification fee“ ili „potvrda identiteta“" data-en="“verification fee” / identity confirmation">„verification fee“ ili „potvrda identiteta“</li>
              <li data-sr="„tax clearance“ / „porez“" data-en="“tax clearance” / “tax”">„tax clearance“ / „porez“</li>
              <li data-sr="„deposit“ / „security bond“" data-en="“deposit” / “security bond”">„deposit“ / „security bond“</li>
            </ul>
          </div>

          <div class="phase">
            <div class="label" data-sr="Kako prodaju uplatu" data-en="How they frame payment">Kako prodaju uplatu</div>
            <ul class="bullets">
              <li data-sr="„standardno je, svi prolaze to“" data-en="“standard, everyone goes through it”">„standardno je, svi prolaze to“</li>
              <li data-sr="„bez toga sistem ne pušta“" data-en="“the system won’t release without it”">„bez toga sistem ne pušta“</li>
              <li data-sr="„rok je danas“" data-en="“deadline is today”">„rok je danas“</li>
              <li data-sr="„posle ovoga ide isplata“" data-en="“after this comes payout”">„posle ovoga ide isplata“</li>
            </ul>
          </div>
        </div>

        <div class="callout"
          data-sr="<strong>Prag ove faze:</strong> pristajanje na uplatu zato što izgleda kao rutinska administracija."
          data-en="<strong>Threshold of this phase:</strong> agreeing to pay because it feels like routine administration."
        ><strong>Prag ove faze:</strong> pristajanje na uplatu zato što izgleda kao rutinska administracija.</div>
      </article>

      <!-- FAZA 4 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Prag (prva uplata)" data-en="Phase 4 — Threshold (first payment)">
          Faza 4 — Prag (prva uplata)
        </h3>

        <p
          data-sr="Prva uplata menja stanje. Meta prelazi iz procene u režim završavanja i pokušava da zatvori proces koji je već pokrenut."
          data-en="The first payment changes state. The target moves from evaluation into completion mode and tries to close a process that has već started."
        >Prva uplata menja stanje. Meta prelazi iz procene u režim završavanja i pokušava da zatvori proces koji je već pokrenut.</p>

        <ul class="bullets">
          <li data-sr="iznos često deluje kao „sitnica“ u odnosu na obećani ishod" data-en="the amount often feels “small” compared to the promised outcome">iznos često deluje kao „sitnica“ u odnosu na obećani ishod</li>
          <li data-sr="uplate se često traže kroz kanale koji otežavaju povraćaj" data-en="payments are often pushed through rails with lower reversibility">uplate se često traže kroz kanale koji otežavaju povraćaj</li>
          <li data-sr="posle uplate stiže potvrda ili poruka „processing“" data-en="after paying, a confirmation or “processing” message arrives">posle uplate stiže potvrda ili poruka „processing“</li>
        </ul>

        <div class="branch">
          <p><strong data-sr="Grananje posle praga" data-en="Branching after the threshold">Grananje posle praga</strong></p>
          <ul class="bullets">
            <li
              data-sr="<strong>Lažni poziv:</strong> ubrzanje procesa kroz glas i instrukcije. (Povezano: <a href='fake-call-scam.html'>Lažni pozivi</a>)"
              data-en="<strong>Fake call:</strong> speeding up via voice and step-by-step guidance. (Related: <a href='fake-call-scam.html'>Fake calls</a>)"
            ><strong>Lažni poziv:</strong> ubrzanje procesa kroz glas i instrukcije. (Povezano: <a href="fake-call-scam.html">Lažni pozivi</a>)</li>

            <li
              data-sr="<strong>Recovery priprema:</strong> pominjanje „refund“ ili „release“ kao sledećeg koraka uz novu uplatu. (Povezano: <a href='recovery-scam.html'>Recovery</a>)"
              data-en="<strong>Recovery setup:</strong> mentioning “refund” or “release” as the next step with a new fee. (Related: <a href='recovery-scam.html'>Recovery</a>)"
            ><strong>Recovery priprema:</strong> pominjanje „refund“ ili „release“ kao sledećeg koraka uz novu uplatu. (Povezano: <a href="recovery-scam.html">Recovery</a>)</li>
          </ul>
        </div>
      </article>

      <!-- FAZA 5 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Serija zahteva (rotacija razloga)" data-en="Phase 5 — Demand series (reason rotation)">
          Faza 5 — Serija zahteva (rotacija razloga)
        </h3>

        <p
          data-sr="Nakon prve uplate pojavljuju se novi zahtevi pod različitim nazivima. Razlozi se rotiraju, iznosi se podešavaju, rokovi se skraćuju. Svaki zahtev izgleda kao poslednji."
          data-en="After the first payment, new demands arrive under different labels. Reasons rotate, amounts are tuned, deadlines shrink. Each demand is framed as the final one."
        >Nakon prve uplate pojavljuju se novi zahtevi pod različitim nazivima. Razlozi se rotiraju, iznosi se podešavaju, rokovi se skraćuju. Svaki zahtev izgleda kao poslednji.</p>

        <ul class="bullets">
          <li data-sr="„dopuna“ zbog greške ili pogrešnog pokušaja" data-en="a “top-up” due to an error or wrong attempt">„dopuna“ zbog greške ili pogrešnog pokušaja</li>
          <li data-sr="novi „porez“ ili „osiguranje“ kao obavezna stavka" data-en="a new “tax” or “insurance” as mandatory item">novi „porez“ ili „osiguranje“ kao obavezna stavka</li>
          <li data-sr="„policy update“ ili „audit“ kao formalna prepreka" data-en="a “policy update” or “audit” as a formal obstacle">„policy update“ ili „audit“ kao formalna prepreka</li>
          <li data-sr="rokovi postaju kraći da bi odluka došla brzo" data-en="deadlines shrink to force fast decisions">rokovi postaju kraći da bi odluka došla brzo</li>
        </ul>

        <div class="branch">
          <p><strong data-sr="Grananja koja se često pojavljuju" data-en="Common branching paths">Grananja koja se često pojavljuju</strong></p>
          <ul class="bullets">
            <li
              data-sr="<strong>Crypto povlačenje:</strong> „provera protiv pranja novca/tax fee“ kao uslov povlačenja profita. (Povezano: <a href='crypto-scam.html'>Crypto investment</a>)"
              data-en="<strong>Crypto podizanje para:</strong> “provera protiv pranja novca/tax fee” as a condition to podigneš pare profits. (Related: <a href='crypto-scam.html'>Crypto investment</a>)"
            ><strong>Crypto povlačenje:</strong> „provera protiv pranja novca/tax fee“ kao uslov povlačenja profita. (Povezano: <a href="crypto-scam.html">Crypto investment</a>)</li>

            <li
              data-sr="<strong>Marketplace kapara:</strong> prvi iznos kao rezervacija, zatim serija troškova. (Povezano: <a href='marketplace-scam.html'>Marketplace prevare</a>)"
              data-en="<strong>Marketplace deposit:</strong> first amount as reservation, then a fee series. (Related: <a href='marketplace-scam.html'>Marketplace scams</a>)"
            ><strong>Marketplace kapara:</strong> prvi iznos kao rezervacija, zatim serija troškova. (Povezano: <a href="marketplace-scam.html">Marketplace prevare</a>)</li>
          </ul>
        </div>
      </article>

      <!-- FAZA 6 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Autoritet i zaključavanje izlaza" data-en="Phase 6 — Authority and exit locking">
          Faza 6 — Autoritet i zaključavanje izlaza
        </h3>

        <p
          data-sr="Kad se pojavi usporavanje, komunikacija prelazi u formalniji ton: „podrška“, „advokat“, „regulator“, „compliance“. Uplata se predstavlja kao obavezna administrativna radnja."
          data-en="When the target slows down, communication shifts to a more formal tone: “support”, “lawyer”, “regulator”, “compliance”. Payment is framed as mandatory administration."
        >Kad se pojavi usporavanje, komunikacija prelazi u formalniji ton: „podrška“, „advokat“, „regulator“, „compliance“. Uplata se predstavlja kao obavezna administrativna radnja.</p>

        <ul class="bullets">
          <li data-sr="pominju se posledice: zamrzavanje, zatvaranje slučaja, gubitak prava" data-en="consequences are introduced: freeze, case closure, loss of rights">pominju se posledice: zamrzavanje, zatvaranje slučaja, gubitak prava</li>
          <li data-sr="traži se tajnost i izbegavanje konsultacije" data-en="secrecy and avoiding consultation are pushed">traži se tajnost i izbegavanje konsultacije</li>
          <li data-sr="predlaže se poziv radi „bržeg rešavanja“" data-en="a call is offered for “faster resolution”">predlaže se poziv radi „bržeg rešavanja“</li>
        </ul>

        <div class="callout"
          data-sr="<strong>Prag ove faze:</strong> meta prihvata autoritet i nastavlja uplatu zbog straha od posledice."
          data-en="<strong>Threshold of this phase:</strong> the target accepts authority and keeps paying due to fear of consequences."
        ><strong>Prag ove faze:</strong> meta prihvata autoritet i nastavlja uplatu zbog straha od posledice.</div>
      </article>

      <!-- FAZA 7 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 7 — Recovery talas (drugi napad)" data-en="Phase 7 — Recovery wave (second attack)">
          Faza 7 — Recovery talas (drugi napad)
        </h3>

        <p
          data-sr="Posle prekida često stiže ponuda povraćaja uz novu uplatu. Kontakt koristi detalje incidenta (iznos, platforma, datum) kao dokaz „stručnosti“. Operativno, isti obrazac se nastavlja."
          data-en="After you stop, a recovery offer often appears with a new fee. The contact uses incident details (amount, platform, date) as “expertise” proof. Operationally, the same pattern continues."
        >Posle prekida često stiže ponuda povraćaja uz novu uplatu. Kontakt koristi detalje incidenta (iznos, platforma, datum) kao dokaz „stručnosti“. Operativno, isti obrazac se nastavlja.</p>

        <div class="branch">
          <p><strong data-sr="Povezano" data-en="Related">Povezano</strong></p>
          <ul class="bullets">
            <li
              data-sr="<strong>Recovery scam:</strong> „povrat“ kao mamac za novu uplatu. (Povezano: <a href='recovery-scam.html'>Recovery</a>)"
              data-en="<strong>Recovery scam:</strong> “refund” as bait for a new fee. (Related: <a href='recovery-scam.html'>Recovery</a>)"
            ><strong>Recovery scam:</strong> „povrat“ kao mamac za novu uplatu. (Povezano: <a href="recovery-scam.html">Recovery</a>)</li>
          </ul>
        </div>
      </article>
    </section>

    <!-- 4) PODTIPOVI (DETALJNO) -->
    <section class="card">
      <h2 data-sr="Podtipovi: kako izgleda u različitim pričama" data-en="Variants: how it appears in different stories">
        Podtipovi: kako izgleda u različitim pričama
      </h2>

      <h3 data-sr="A) Dostava / carina / paket" data-en="A) Delivery / customs / package">A) Dostava / carina / paket</h3>
      <p
        data-sr="Priča glumi logistiku: paket stoji, adresa zahteva potvrdu, carina traži doplatu. Prvi iznos je „sitna taksa“, zatim dolaze osiguranje, ponovna dostava i dodatne stavke."
        data-en="The story imitates logistics: a package is held, address confirmation is required, customs asks for a fee. The first amount is a “small fee”, then insurance, re-delivery, and more items follow."
      >Priča glumi logistiku: paket stoji, adresa zahteva potvrdu, carina traži doplatu. Prvi iznos je „sitna taksa“, zatim dolaze osiguranje, ponovna dostava i dodatne stavke.</p>

      <h3 data-sr="B) Kredit / zajam" data-en="B) Loan / credit">B) Kredit / zajam</h3>
      <p
        data-sr="Poruka glumi odobrenje, zatim uvodi obradu, osiguranje ili depozit kao uslov. Posle prve uplate traži se dopuna uz rok."
        data-en="The message claims approval, then introduces processing, insurance, or a deposit as a condition. After the first payment, a top-up is demanded with a deadline."
      >Poruka glumi odobrenje, zatim uvodi obradu, osiguranje ili depozit kao uslov. Posle prve uplate traži se dopuna uz rok.</p>

      <h3 data-sr="C) Investicija / povlačenje profita" data-en="C) Investment / profit podizanje para">C) Investicija / povlačenje profita</h3>
      <p
        data-sr="Kod lažnih investicija advance-fee se pojavljuje na povlačenju: tax/provera protiv pranja novca/verification fee kao uslov. Ovaj podtip je centralan kod crypto prevara."
        data-en="In fake investments, advance-fee appears at podizanje para: tax/provera protiv pranja novca/verification fee as a condition. This subtype is central in crypto scams."
      >Kod lažnih investicija advance-fee se pojavljuje na povlačenju: tax/provera protiv pranja novca/verification fee kao uslov. Ovaj podtip je centralan kod crypto prevara.</p>

      <h3 data-sr="D) Nagrada / giveaway" data-en="D) Prize / giveaway">D) Nagrada / giveaway</h3>
      <p
        data-sr="Nagrada uvodi „porez“ ili „administraciju“. Posle uplate stižu kurir, osiguranje, obrada, zatim nova taksa."
        data-en="Prize scams introduce “tax” or “administration”. After paying, courier, insurance, processing follow, then a new fee."
      >Nagrada uvodi „porez“ ili „administraciju“. Posle uplate stižu kurir, osiguranje, obrada, zatim nova taksa.</p>

      <h3 data-sr="E) Recovery (drugi napad)" data-en="E) Recovery (second attack)">E) Recovery (drugi napad)</h3>
      <p
        data-sr="Recovery koristi gubitak kao ulaz. Ponuda obećava povrat, zatim uvodi taksu za „postupak“, „dokumentaciju“, „unlock“ ili „case fee“. Operativno isti obrazac nastavlja."
        data-en="Recovery uses the loss as entry. The offer promises return, then introduces a fee for “process”, “documentation”, “unlock”, or “case fee”. Operationally, the same pattern continues."
      >Recovery koristi gubitak kao ulaz. Ponuda obećava povrat, zatim uvodi taksu za „postupak“, „dokumentaciju“, „unlock“ ili „case fee“. Operativno isti obrazac nastavlja.</p>
    </section>


      <h3 data-sr="F) Nigerian Prince / Inheritance (klasična varijanta)" data-en="F) Nigerian Prince / Inheritance (classic variant)">F) Nigerian Prince / Inheritance (klasična varijanta)</h3>
      <p
        data-sr="Najstarija i najpoznatija varijanta. imejl obećava nasleđe, zaboravljeni fond ili transfer velikog iznosa ($10M+). Traži se processing fee, lawyer fee, bank charges. Serija se razvija kroz dokumente, nova odobrenja, novi troškovi. Prosečan gubitak: $5,000-$15,000."
        data-en="The oldest and most well-known variant. Email promises inheritance, forgotten fund, or transfer of large amount ($10M+). Requests processing fee, lawyer fee, bank charges. Series develops through documents, new approvals, new costs. Average loss: $5,000-$15,000."
      >Najstarija i najpoznatija varijanta. Imejl obećava nasleđe, zaboravljeni fond ili transfer velikog iznosa ($10M+). Traži se processing fee, lawyer fee, bank charges. Serija se razvija kroz dokumente, nova odobrenja, novi troškovi. Prosečan gubitak: $5,000-$15,000.</p>

      <h3 data-sr="G) Lottery / Sweepstakes (nagradna prevara)" data-en="G) Lottery / Sweepstakes (prize scam)">G) Lottery / Sweepstakes (nagradna prevara)</h3>
      <p
        data-sr="Obaveštenje o dobitku lutrije koju nikada nisi igrao. Traži se claim fee, tax payment, insurance. Legitimni lottery NIKADA ne traži uplatu PRE isplate. Serija: processing, lawyer, courier, final tax. Prosečan gubitak: $2,000-$8,000."
        data-en="Notification of lottery win you never entered. Requests claim fee, tax payment, insurance. Legitimate lotteries NEVER request payment BEFORE payout. Series: processing, lawyer, courier, final tax. Average loss: $2,000-$8,000."
      >Obaveštenje o dobitku lutrije koju nikada nisi igrao. Traži se claim fee, tax payment, insurance. Legitimni lottery NIKADA ne traži uplatu PRE isplate. Serija: processing, lawyer, courier, final tax. Prosečan gubitak: $2,000-$8,000.</p>

      <h3 data-sr="H) Tax / IRS refund (poreska prevara)" data-en="H) Tax / IRS refund (tax scam)">H) Tax / IRS refund (poreska prevara)</h3>
      <p
        data-sr="imejl/SMS tvrdi da postoji refund ili nagla poreska obaveza. Traži processing fee, verification deposit, ili direct payment pod pretnjom. IRS NIKADA ne šalje neočekivane refund imejl-ove i NIKADA ne traži payment preko gift cards/crypto. Prosečan gubitak: $800-$3,000."
        data-en="Email/SMS claims refund exists or sudden tax obligation. Requests processing fee, verification deposit, or direct payment under threat. IRS NEVER sends unexpected refund emails and NEVER requests payment via gift cards/crypto. Average loss: $800-$3,000."
      >Imejl/SMS tvrdi da postoji refund ili nagla poreska obaveza. Traži processing fee, verification deposit, ili direct payment pod pretnjom. IRS NIKADA ne šalje neočekivane refund imejl-ove i NIKADA ne traži payment preko gift cards/crypto. Prosečan gubitak: $800-$3,000.</p>
    </section>

    <!-- 5) STATISTIKE I EKONOMIJA ADVANCE-FEE PREVARA -->
    <section class="card">
      <h2 data-sr="Statistike i ekonomija advance-fee prevara" data-en="Advance-fee fraud statistics and economics">
        Statistike i ekonomija advance-fee prevara
      </h2>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="FBI IC3 + FTC data (USA)" data-en="FBI IC3 + FTC data (USA)">FBI IC3 + FTC data (USA)</div>
          <ul class="bullets">
            <li data-sr="Advance Fee: 8,045 prijava, $134.5M gubitak (IC3 2023)" data-en="Advance Fee: 8,045 reports, $134.5M loss (IC3 2023)">Advance Fee: 8,045 prijava, $134.5M gubitak (IC3 2023)</li>
            <li data-sr="Lottery/Sweepstakes/Inheritance: 4,168 prijava, $94.5M gubitak" data-en="Lottery/Sweepstakes/Inheritance: 4,168 reports, $94.5M loss">Lottery/Sweepstakes/Inheritance: 4,168 prijava, $94.5M gubitak</li>
            <li data-sr="prosečan gubitak po žrtvi (Advance Fee): $16,722" data-en="average loss per victim (Advance Fee): $16,722">prosečan gubitak po žrtvi (Advance Fee): $16,722</li>
            <li data-sr="prosečan gubitak (Lottery/Prize): $22,686" data-en="average loss (Lottery/Prize): $22,686">prosečan gubitak (Lottery/Prize): $22,686</li>
            <li data-sr="rast 2022-2023: Advance Fee -29%, Lottery +13%" data-en="growth 2022-2023: Advance Fee -29%, Lottery +13%">rast 2022-2023: Advance Fee -29%, Lottery +13%</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Demographics (ko je najranjiviji)" data-en="Demographics (most vulnerable)">Demographics (ko je najranjiviji)</div>
          <ul class="bullets">
            <li data-sr="starost 60+: 40% žrtava, 55% total gubitka" data-en="age 60+: 40% of victims, 55% of total loss">starost 60+: 40% žrtava, 55% total gubitka</li>
            <li data-sr="prosečan gubitak 60+: $5,200 (vs $2,400 za 18-59)" data-en="average loss 60+: $5,200 (vs $2,400 for 18-59)">prosečan gubitak 60+: $5,200 (vs $2,400 za 18-59)</li>
            <li data-sr="razlog: higher savings, lower skepticism, formalni ton ubija sumnju" data-en="reason: higher savings, lower skepticism, formal tone kills doubt">razlog: higher savings, lower skepticism, formalni ton ubija sumnju</li>
            <li data-sr="gender split: 54% ženski, 46% muški" data-en="gender split: 54% female, 46% male">gender split: 54% ženski, 46% muški</li>
            <li data-sr="education: NO correlation sa obrazovanjem (victims su svi nivoi)" data-en="education: NO correlation with education (victims at all levels)">education: NO correlation sa obrazovanjem (victims su svi nivoi)</li>
            <li data-sr="geografija: USA (30%), Nigeria (15%), UK (12%), India (8%), Canada (7%)" data-en="geography: USA (30%), Nigeria (15%), UK (12%), India (8%), Canada (7%)">geografija: USA (30%), Nigeria (15%), UK (12%), India (8%), Canada (7%)</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Operativna ekonomija" data-en="Operational economics">Operativna ekonomija</div>
          <ul class="bullets">
            <li data-sr="cost per imejl blast: $0.0001 (100,000 emails = $10)" data-en="cost per email blast: $0.0001 (100,000 emails = $10)">cost per imejl blast: $0.0001 (100,000 emails = $10)</li>
            <li data-sr="response rate: 0.01-0.05% (10-50 odgovora od 100,000 emails)" data-en="response rate: 0.01-0.05% (10-50 responses from 100,000 emails)">response rate: 0.01-0.05% (10-50 odgovora od 100,000 emails)</li>
            <li data-sr="uspešnost prevare: 5-10% (1-5 victims pay od 50 responses)" data-en="uspešnost prevare: 5-10% (1-5 victims pay from 50 responses)">uspešnost prevare: 5-10% (1-5 victims pay od 50 responses)</li>
            <li data-sr="ROI za operatera: ~300:1 ($10 cost, $3,500 avg victim loss)" data-en="ROI for operator: ~300:1 ($10 cost, $3,500 avg victim loss)">ROI za operatera: ~300:1 ($10 cost, $3,500 avg victim loss)</li>
            <li data-sr="serijski uplatioci: 20% žrtava uplati 3+ puta (total loss $10K+)" data-en="serial payers: 20% of victims pay 3+ times (total loss $10K+)">serijski uplatioci: 20% žrtava uplati 3+ puta (total loss $10K+)</li>
            <li data-sr="timeline: 2-8 nedelja od prvog kontakta do poslednje uplate" data-en="timeline: 2-8 weeks from first contact to last payment">timeline: 2-8 nedelja od prvog kontakta do poslednje uplate</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Payment rails i recovery" data-en="Payment rails and recovery">Payment rails i recovery</div>
          <ul class="bullets">
            <li data-sr="prenos para: 50% (Western Union, MoneyGram - gotovo nemoguć povrat)" data-en="prenos para: 50% (Western Union, MoneyGram - nearly impossible recovery)">prenos para: 50% (Western Union, MoneyGram - gotovo nemoguć povrat)</li>
            <li data-sr="gift cards: 25% (iTunes, Google Play, Steam - 0% recovery)" data-en="gift cards: 25% (iTunes, Google Play, Steam - 0% recovery)">gift cards: 25% (iTunes, Google Play, Steam - 0% recovery)</li>
            <li data-sr="cryptocurrency: 15% (Bitcoin, USDT - < 2% recovery)" data-en="cryptocurrency: 15% (Bitcoin, USDT - < 2% recovery)">cryptocurrency: 15% (Bitcoin, USDT - < 2% recovery)</li>
            <li data-sr="bank transfer: 10% (chargebacks possible if fast, < 24h window)" data-en="bank transfer: 10% (chargebacks possible if fast, < 24h window)">bank transfer: 10% (chargebacks possible if fast, < 24h window)</li>
            <li data-sr="overall recovery rate: 3-5% (majority never recovered)" data-en="overall recovery rate: 3-5% (majority never recovered)">overall recovery rate: 3-5% (majority never recovered)</li>
          </ul>
        </div>
      </div>

      <div class="callout"
        data-sr="<strong>Ekonomski profil:</strong> 100K emails costa $10. Ako 0.01% odgovori (10 ljudi) i 10% plati (1 žrtva), avg gubitak $3,500 = ROI 350:1. To je razlog zašto advance-fee nikada ne umire."
        data-en="<strong>Economic profile:</strong> 100K emails cost $10. If 0.01% respond (10 people) and 10% pay (1 victim), avg loss $3,500 = ROI 350:1. That's why advance-fee never dies."
      ><strong>Ekonomski profil:</strong> 100K emails costa $10. Ako 0.01% odgovori (10 ljudi) i 10% plati (1 žrtva), avg gubitak $3,500 = ROI 350:1. To je razlog zašto advance-fee nikada ne umire.</div>


    <!-- 5) IZ UGLA PREVARANTA -->
    <section class="card">
      <h2 data-sr="Iz ugla prevaranta: operativa i kvantitet" data-en="From the scammer’s side: operations and volume">
        Iz ugla prevaranta: operativa i kvantitet
      </h2>

      <p
        data-sr="Advance-fee se vodi kao pipeline. Rani deo je širok: mnogo poruka, mnogo meta, kratki tekst, test reakcije. Intenzitet raste posle praga. Meta koja uplati postaje vredna daljeg rada, pa tempo raste kroz rokove, pozive, nove identitete i seriju taksi."
        data-en="Advance-fee is run as a pipeline. The early phase is wide: many messages, many targets, short text, reaction testing. Intensity increases after the threshold. A paying target becomes worth further effort, so tempo rises through deadlines, calls, identity switching, and fee series."
      >Advance-fee se vodi kao pipeline. Rani deo je širok: mnogo poruka, mnogo meta, kratki tekst, test reakcije. Intenzitet raste posle praga. Meta koja uplati postaje vredna daljeg rada, pa tempo raste kroz rokove, pozive, nove identitete i seriju taksi.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Kada ih odbiješ" data-en="When you refuse">Kada ih odbiješ</div>
          <ul class="bullets">
            <li data-sr="prelaz na sledeću metu uz minimalan gubitak vremena" data-en="move to the next target with minimal time loss">prelaz na sledeću metu uz minimalan gubitak vremena</li>
            <li data-sr="još jedna poruka sa jačim rokom i posledicom" data-en="one more message with a stronger deadline and consequence">još jedna poruka sa jačim rokom i posledicom</li>
            <li data-sr="pokušaj presvlačenja identiteta radi autoriteta" data-en="attempt identity switching to add authority">pokušaj presvlačenja identiteta radi autoriteta</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Kada uplatiš" data-en="When you pay">Kada uplatiš</div>
          <ul class="bullets">
            <li data-sr="uvedena serija: novi razlog, novi rok, novi iznos" data-en="series starts: new reason, new deadline, new amount">uvedena serija: novi razlog, novi rok, novi iznos</li>
            <li data-sr="uvođenje poziva ili „podrške“ radi kontrole tempa" data-en="calls or “support” introduced to control pace">uvođenje poziva ili „podrške“ radi kontrole tempa</li>
            <li data-sr="formalni identitet (compliance/regulator) radi pritiska" data-en="formal identity (compliance/regulator) for pressure">formalni identitet (compliance/regulator) radi pritiska</li>
          </ul>
        </div>
      </div>

      <div class="callout"
        data-sr="<strong>Filter koji koriste:</strong> meta koja plaća ostaje u procesu. Meta koja odbija prelazi u statistiku."
        data-en="<strong>Filter they use:</strong> paying targets stay in-process. Refusing targets become statistics."
      ><strong>Filter koji koriste:</strong> meta koja plaća ostaje u procesu. Meta koja odbija prelazi u statistiku.</div>
    </section>

    <!-- 6) AKO JE ŠTETA NASTALA -->
    <section class="card">
      <h2 data-sr="Ako je šteta nastala (redosled poteza)" data-en="If damage happened (action order)">
        Ako je šteta nastala (redosled poteza)
      </h2>

      <ol class="steps">
        <li data-sr="prekid daljih uplata i prekid komunikacije" data-en="stop further payments and end communication">prekid daljih uplata i prekid komunikacije</li>
        <li data-sr="čuvanje dokaza: poruke, linkovi, uplatnice, nalozi" data-en="save evidence: messages, links, receipts, accounts">čuvanje dokaza: poruke, linkovi, uplatnice, nalozi</li>
        <li data-sr="kontakt banke ako postoji kartični ili bankovni transfer" data-en="contact your bank if card or bank transfer is involved">kontakt banke ako postoji kartični ili bankovni transfer</li>
        <li data-sr="računanje na recovery ponude uz uplatu unapred" data-en="expect paid recovery offers">računanje na recovery ponude uz uplatu unapred</li>
      </ol>

      <div class="callout"
        data-sr="<strong>Upozorenje:</strong> uplata „takse“ radi povrata ili otključavanja predstavlja nastavak istog obrasca."
        data-en="<strong>Warning:</strong> paying a “fee” to recover or unlock is continuation of the same pattern."
      ><strong>Upozorenje:</strong> uplata „takse“ radi povrata ili otključavanja predstavlja nastavak istog obrasca.</div>
    </section>

    <!-- 7) STANDARDNA UPOZORENJA -->
    <section class="card">
      <h2 data-sr="Standardna upozorenja" data-en="Standard warnings">Standardna upozorenja</h2>
      <ul class="bullets">
        <li data-sr="uplata kao uslov za isplatu nosi visoki rizik" data-en="payment as a condition for payout is high risk">uplata kao uslov za isplatu nosi visoki rizik</li>
        <li data-sr="ponavljanje „poslednjeg koraka“ pod novim nazivima znači seriju" data-en="repeating a “final step” under new labels signals a series">ponavljanje „poslednjeg koraka“ pod novim nazivima znači seriju</li>
        <li data-sr="privatni računi, posrednici i kripto adrese nose povećan rizik" data-en="private accounts, intermediaries, and crypto wallets increase risk">privatni računi, posrednici i kripto adrese nose povećan rizik</li>
      </ul>
    </section>

    <!-- 8) IZVORI -->
    <section class="card sources" id="sources">
      <h2 data-sr="Izvori" data-en="Sources">Izvori</h2>
      <ul>
        <li><a href="https://www.ic3.gov/Media/PDF/AnnualReport/2023_IC3Report.pdf" target="_blank" rel="noopener noreferrer">FBI IC3 — 2023 Internet Crime Report (Advance Fee: 8,045 complaints, $134.5M; Lottery: 4,168 complaints, $94.5M)</a></li>
        <li><a href="https://consumer.ftc.gov/scams" target="_blank" rel="noopener noreferrer">FTC — Scam guidance</a></li>
        <li><a href="https://www.fbi.gov/how-we-can-help-you/scams-and-safety/common-frauds-and-scams" target="_blank" rel="noopener noreferrer">FBI — Common frauds and scams</a></li>
      </ul>
    </section>
  `
};
