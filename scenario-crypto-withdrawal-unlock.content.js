window.SCENARIO_CONTENT = window.SCENARIO_CONTENT || {};

window.SCENARIO_CONTENT["scenario-crypto-withdrawal-unlock"] = {
  raw_html: `
    <section class="card scenario-intro">
      <h2 data-sr="Šta ovaj scenario pokazuje" data-en="What this scenario shows">Šta ovaj scenario pokazuje</h2>
      <p data-sr="Ovo je scenario kripto investicione prevare u trenutku kada žrtva pokuša da izađe. Dok je novac išao ka platformi, sve je izgledalo glatko; tek kod povlačenja postaje jasno da prikazani profit nije slobodno dostupan." data-en="This is a crypto investment scam scenario at the moment when the victim tries to exit. While money was going into the platform, everything looked smooth; only at withdrawal does it become clear that the displayed profit is not freely available.">Ovo je scenario kripto investicione prevare u trenutku kada žrtva pokuša da izađe. Dok je novac išao ka platformi, sve je izgledalo glatko; tek kod povlačenja postaje jasno da prikazani profit nije slobodno dostupan.</p>
    </section>
    <section class="card">
      <h2 data-sr="Hronološki tok scenarija" data-en="Scenario timeline">Hronološki tok scenarija</h2>
      <div class="scenario-timeline">
        <article class="scenario-step"><div class="scenario-step-head"><span class="scenario-step-kicker">Korak 1</span></div><p class="scenario-step-text" data-sr="Platforma prikazuje rast, dobit i uredan dashboard. Time se stvara osećaj da je profit stvaran i pod kontrolom." data-en="The platform shows growth, profits, and an orderly dashboard. That creates the feeling that the profit is real and under control.">Platforma prikazuje rast, dobit i uredan dashboard. Time se stvara osećaj da je profit stvaran i pod kontrolom.</p></article>
        <article class="scenario-step"><div class="scenario-step-head"><span class="scenario-step-kicker">Korak 2</span></div><p class="scenario-step-text" data-sr="Kada meta poželi povlačenje, sistem iznenada uvodi AML, KYC ili unlock proceduru. Problem ne postoji na ulazu, već se pojavljuje tek na izlazu." data-en="When the target wants to withdraw, the system suddenly introduces an AML, KYC, or unlock procedure. The problem does not exist at entry; it appears only at exit.">Kada meta poželi povlačenje, sistem iznenada uvodi AML, KYC ili unlock proceduru. Problem ne postoji na ulazu, već se pojavljuje tek na izlazu.</p></article>
        <article class="scenario-step"><div class="scenario-step-head"><span class="scenario-step-kicker">Korak 3</span></div><p class="scenario-step-text" data-sr="Od žrtve se traži fee koji navodno oslobađa sredstva. Jezik je regulatorni i proceduralan, kako bi zahtev zvučao legitimno." data-en="The victim is asked for a fee that supposedly releases the funds. The language is regulatory and procedural so that the demand sounds legitimate.">Od žrtve se traži fee koji navodno oslobađa sredstva. Jezik je regulatorni i proceduralan, kako bi zahtev zvučao legitimno.</p></article>
        <article class="scenario-step"><div class="scenario-step-head"><span class="scenario-step-kicker">Korak 4</span></div><p class="scenario-step-text" data-sr="Ako se uplata izvrši, pojavljuje se novi uslov. Platforma i podrška ne rešavaju izlaz, nego samo produžavaju priču o otključavanju." data-en="If the payment is made, a new condition appears. The platform and support do not solve the exit; they only extend the unlock story.">Ako se uplata izvrši, pojavljuje se novi uslov. Platforma i podrška ne rešavaju izlaz, nego samo produžavaju priču o otključavanju.</p></article>
      </div>
    </section>
    <section class="card">
      <h2 data-sr="Signali upozorenja" data-en="Warning signs">Signali upozorenja</h2>
      <ul class="bullets">
        <li data-sr="Uplata na platformu ide lako, ali povlačenje traži dodatni novac." data-en="Depositing into the platform is easy, but withdrawal requires extra money.">Uplata na platformu ide lako, ali povlačenje traži dodatni novac.</li>
        <li data-sr="Fee se pravda regulatornim ili AML jezikom, ali nema stvarnog izlaza." data-en="The fee is justified with regulatory or AML language, but there is no real exit.">Fee se pravda regulatornim ili AML jezikom, ali nema stvarnog izlaza.</li>
        <li data-sr="Svaki novi uslov dolazi tek pošto prethodni bude ispunjen." data-en="Every new condition arrives only after the previous one has been met.">Svaki novi uslov dolazi tek pošto prethodni bude ispunjen.</li>
        <li data-sr="Podrška brani uplatu kao proceduru umesto da omogući normalno povlačenje." data-en="Support defends the payment as procedure instead of enabling a normal withdrawal.">Podrška brani uplatu kao proceduru umesto da omogući normalno povlačenje.</li>
      </ul>
    </section>
    <section class="card scenario-related-box">
      <h2 data-sr="Povezana prevara" data-en="Related scam">Povezana prevara</h2>
      <p data-sr="Ovaj scenario pripada modelu <a href='crypto-scam.html'>Kripto investiciona prevara</a>. U završnici se ponaša i kao advance-fee model, jer se izlaz zaključava dok god žrtva pristaje na još jednu uplatu." data-en="This scenario belongs to the <a href='crypto-scam.html'>Crypto investment scam</a> model. In its final phase it also behaves like an advance-fee model, because the exit stays locked as long as the victim agrees to one more payment.">Ovaj scenario pripada modelu <a href='crypto-scam.html'>Kripto investiciona prevara</a>. U završnici se ponaša i kao advance-fee model, jer se izlaz zaključava dok god žrtva pristaje na još jednu uplatu.</p>
    </section>
    <section class="card">
      <h2 data-sr="Izvori i urednička napomena" data-en="Sources and editorial note">Izvori i urednička napomena</h2>
      <p data-sr="Scenario je anonimizovan i urednički složen iz javno poznatih kripto investicionih obrazaca i interne case biblioteke sajta." data-en="This scenario is anonymized and editorially assembled from publicly known crypto investment scam patterns and the site's internal case library.">Scenario je anonimizovan i urednički složen iz javno poznatih kripto investicionih obrazaca i interne case biblioteke sajta.</p>
      <ul class="scenario-source-list"><li><a href="https://consumer.ftc.gov/spotting-cryptocurrency-investment-scams" target="_blank" rel="noopener noreferrer">FTC: Spotting cryptocurrency investment scams</a></li></ul>
    </section>
  `
};
