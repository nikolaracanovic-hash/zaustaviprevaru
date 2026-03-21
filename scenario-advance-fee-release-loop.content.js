window.SCENARIO_CONTENT = window.SCENARIO_CONTENT || {};

window.SCENARIO_CONTENT["scenario-advance-fee-release-loop"] = {
  raw_html: `
    <section class="card scenario-intro">
      <h2 data-sr="Šta ovaj scenario pokazuje" data-en="What this scenario shows">Šta ovaj scenario pokazuje</h2>
      <p data-sr="Ovo je scenario advance-fee prevare u kome novac navodno već postoji, ali ostaje zaključan iza male takse. Prva uplata ne otključava isplatu, već samo potvrđuje napadaču da meta prihvata logiku uplata unapred." data-en="This is an advance-fee fraud scenario in which the money supposedly already exists, but remains locked behind a small fee. The first payment does not unlock the payout; it only confirms to the attacker that the target accepts the logic of upfront payments.">Ovo je scenario advance-fee prevare u kome novac navodno već postoji, ali ostaje zaključan iza male takse. Prva uplata ne otključava isplatu, već samo potvrđuje napadaču da meta prihvata logiku uplata unapred.</p>
    </section>
    <section class="card">
      <h2 data-sr="Hronološki tok scenarija" data-en="Scenario timeline">Hronološki tok scenarija</h2>
      <div class="scenario-timeline">
        <article class="scenario-step"><div class="scenario-step-head"><span class="scenario-step-kicker">Korak 1</span></div><p class="scenario-step-text" data-sr="Meta dobija priču da je isplata, nagrada, kredit ili oslobađanje sredstava već spremno." data-en="The target gets a story that a payout, prize, loan, or funds release is already ready.">Meta dobija priču da je isplata, nagrada, kredit ili oslobađanje sredstava već spremno.</p></article>
        <article class="scenario-step"><div class="scenario-step-head"><span class="scenario-step-kicker">Korak 2</span></div><p class="scenario-step-text" data-sr="Pojavljuje se prvi fee koji deluje mali u odnosu na obećani dobitak. Time se logika prevare uvodi kao navodna formalnost." data-en="The first fee appears and looks small compared with the promised gain. This introduces the fraud logic as a supposed formality.">Pojavljuje se prvi fee koji deluje mali u odnosu na obećani dobitak. Time se logika prevare uvodi kao navodna formalnost.</p></article>
        <article class="scenario-step"><div class="scenario-step-head"><span class="scenario-step-kicker">Korak 3</span></div><p class="scenario-step-text" data-sr="Posle prve uplate dolazi novi uslov: depozit, verifikacija, obrada, porez ili osiguranje. Menja se ime, ali ne i funkcija." data-en="After the first payment, a new condition arrives: deposit, verification, processing, tax, or insurance. The name changes, but the function does not.">Posle prve uplate dolazi novi uslov: depozit, verifikacija, obrada, porez ili osiguranje. Menja se ime, ali ne i funkcija.</p></article>
        <article class="scenario-step"><div class="scenario-step-head"><span class="scenario-step-kicker">Korak 4</span></div><p class="scenario-step-text" data-sr="Svaki sledeći korak glumi finalni izlaz. Meta ne želi da odustane jer bi to značilo da su prethodne uplate bile uzaludne." data-en="Every next step pretends to be the final exit. The target does not want to stop because that would mean previous payments were pointless.">Svaki sledeći korak glumi finalni izlaz. Meta ne želi da odustane jer bi to značilo da su prethodne uplate bile uzaludne.</p></article>
      </div>
    </section>
    <section class="card">
      <h2 data-sr="Signali upozorenja" data-en="Warning signs">Signali upozorenja</h2>
      <ul class="bullets">
        <li data-sr="Sredstva su navodno spremna, ali nikada ne izlaze bez nove uplate." data-en="The funds are supposedly ready, but they never come out without a new payment.">Sredstva su navodno spremna, ali nikada ne izlaze bez nove uplate.</li>
        <li data-sr="Razlog za uplatu menja naziv, ali ne menja funkciju." data-en="The reason for payment changes its name, but not its function.">Razlog za uplatu menja naziv, ali ne menja funkciju.</li>
        <li data-sr="Svaka sledeća uplata predstavlja se kao poslednji korak." data-en="Every next payment is presented as the final step.">Svaka sledeća uplata predstavlja se kao poslednji korak.</li>
        <li data-sr="Prva uplata služi da stvori obavezu da se ceo tok ipak dovrši." data-en="The first payment creates the feeling that the whole flow now has to be completed.">Prva uplata služi da stvori obavezu da se ceo tok ipak dovrši.</li>
      </ul>
    </section>
    <section class="card scenario-related-box">
      <h2 data-sr="Povezana prevara" data-en="Related scam">Povezana prevara</h2>
      <p data-sr="Ovaj scenario pripada modelu <a href='advance-fee-fraud.html'>Advance-fee fraud</a>. Suština nije vrsta obećanog dobitka, već obrazac u kome se svaka nova uplata predstavlja kao uslov za oslobađanje nečega što navodno već postoji." data-en="This scenario belongs to the <a href='advance-fee-fraud.html'>Advance-fee fraud</a> model. The essence is not the kind of promised gain, but the pattern in which every new payment is presented as a condition for releasing something that supposedly already exists.">Ovaj scenario pripada modelu <a href='advance-fee-fraud.html'>Advance-fee fraud</a>. Suština nije vrsta obećanog dobitka, već obrazac u kome se svaka nova uplata predstavlja kao uslov za oslobađanje nečega što navodno već postoji.</p>
    </section>
    <section class="card">
      <h2 data-sr="Izvori i urednička napomena" data-en="Sources and editorial note">Izvori i urednička napomena</h2>
      <p data-sr="Scenario je anonimizovan i urednički složen iz javno poznatih advance-fee obrazaca i interne case biblioteke sajta." data-en="This scenario is anonymized and editorially assembled from publicly known advance-fee patterns and the site's internal case library.">Scenario je anonimizovan i urednički složen iz javno poznatih advance-fee obrazaca i interne case biblioteke sajta.</p>
      <ul class="scenario-source-list"><li><a href="https://www.investor.gov/protect-your-investments/fraud/types-fraud/advance-fee-fraud" target="_blank" rel="noopener noreferrer">Investor.gov: Advance Fee Fraud</a></li></ul>
    </section>
  `
};
