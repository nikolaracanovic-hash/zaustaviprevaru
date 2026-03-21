window.SCENARIO_CONTENT = window.SCENARIO_CONTENT || {};

window.SCENARIO_CONTENT["scenario-phishing-account-suspension"] = {
  raw_html: `
    <section class="card scenario-intro">
      <h2 data-sr="Šta ovaj scenario pokazuje" data-en="What this scenario shows">Šta ovaj scenario pokazuje</h2>
      <p data-sr="Ovo je osnovni fišing scenario: poruka ne krade sama po sebi, već pokušava da vas ubaci na lažnu infrastrukturu. Kada klik deluje kao redovna bezbednosna procedura, žrtva sama predaje pristup." data-en="This is the basic phishing scenario: the message does not steal by itself, but tries to move you onto fake infrastructure. When the click feels like a routine security procedure, the victim personally hands over access.">Ovo je osnovni fišing scenario: poruka ne krade sama po sebi, već pokušava da vas ubaci na lažnu infrastrukturu. Kada klik deluje kao redovna bezbednosna procedura, žrtva sama predaje pristup.</p>
      <p data-sr="Najvažniji momenat nije kvalitet dizajna poruke, već činjenica da hitnost skraćuje proveru domena i logike radnje. Napadač računa na to da će strah od suspenzije biti jači od opreza." data-en="The most important moment is not the quality of the message design, but the fact that urgency shortens domain checking and action logic. The attacker relies on fear of suspension being stronger than caution.">Najvažniji momenat nije kvalitet dizajna poruke, već činjenica da hitnost skraćuje proveru domena i logike radnje. Napadač računa na to da će strah od suspenzije biti jači od opreza.</p>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok scenarija" data-en="Scenario timeline">Hronološki tok scenarija</h2>
      <div class="scenario-timeline">
        <article class="scenario-step"><div class="scenario-step-head"><span class="scenario-step-kicker" data-sr="Korak 1" data-en="Step 1">Korak 1</span></div><p class="scenario-step-text" data-sr="Stiže poruka o suspenziji, bezbednosnom incidentu ili sumnjivoj aktivnosti. Tema je poznata i dovoljno ozbiljna da klik izgleda kao najkraći put do rešenja." data-en="A message arrives about suspension, a security incident, or suspicious activity. The theme is familiar and serious enough that clicking feels like the shortest route to a solution.">Stiže poruka o suspenziji, bezbednosnom incidentu ili sumnjivoj aktivnosti. Tema je poznata i dovoljno ozbiljna da klik izgleda kao najkraći put do rešenja.</p></article>
        <article class="scenario-step"><div class="scenario-step-head"><span class="scenario-step-kicker" data-sr="Korak 2" data-en="Step 2">Korak 2</span></div><p class="scenario-step-text" data-sr="Link vodi na stranicu koja glumi zvaničan login ili verifikaciju. Dizajn je sporedan; najvažnije je da žrtva ne ode sama na pravi sajt, već ostane u ponuđenom toku." data-en="The link leads to a page that imitates an official login or verification screen. The design is secondary; what matters most is that the victim does not go to the real site on their own, but stays inside the attacker-provided flow.">Link vodi na stranicu koja glumi zvaničan login ili verifikaciju. Dizajn je sporedan; najvažnije je da žrtva ne ode sama na pravi sajt, već ostane u ponuđenom toku.</p></article>
        <article class="scenario-step"><div class="scenario-step-head"><span class="scenario-step-kicker" data-sr="Korak 3" data-en="Step 3">Korak 3</span></div><p class="scenario-step-text" data-sr="Od žrtve se traži login, a često i dodatni korak kao što je kod ili potvrda. Ti podaci ne služe informaciji, već direktno pristupu ili autorizaciji." data-en="The victim is asked to log in, and often to complete an extra step such as a code or confirmation. Those details do not serve information; they directly serve access or authorization.">Od žrtve se traži login, a često i dodatni korak kao što je kod ili potvrda. Ti podaci ne služe informaciji, već direktno pristupu ili autorizaciji.</p></article>
        <article class="scenario-step"><div class="scenario-step-head"><span class="scenario-step-kicker" data-sr="Korak 4" data-en="Step 4">Korak 4</span></div><p class="scenario-step-text" data-sr="Kada se prag pređe, posledice mogu da krenu odmah: reset lozinke, promene recovery podataka, pristup porukama ili novi zahtev za dodatnim kodom." data-en="Once the threshold is crossed, consequences can start immediately: password resets, changes to recovery details, access to messages, or a new request for an additional code.">Kada se prag pređe, posledice mogu da krenu odmah: reset lozinke, promene recovery podataka, pristup porukama ili novi zahtev za dodatnim kodom.</p></article>
        <article class="scenario-step"><div class="scenario-step-head"><span class="scenario-step-kicker" data-sr="Korak 5" data-en="Step 5">Korak 5</span></div><p class="scenario-step-text" data-sr="Posle prve greške scenario često mutira. Može da pređe u preuzimanje naloga, poziv podrške, smišing nastavak ili finansijski zahtev koji koristi već ukradeni pristup." data-en="After the first mistake, the scenario often mutates. It can turn into account takeover, a support call, a smishing continuation, or a financial demand that uses the already stolen access.">Posle prve greške scenario često mutira. Može da pređe u preuzimanje naloga, poziv podrške, smišing nastavak ili finansijski zahtev koji koristi već ukradeni pristup.</p></article>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Šta drži scenario" data-en="What keeps the scenario moving">Šta drži scenario</h2>
      <ul class="bullets">
        <li data-sr="Autoritet i hitnost zajedno skraćuju proveru domena i svrhe radnje." data-en="Authority and urgency together shorten domain checking and action verification.">Autoritet i hitnost zajedno skraćuju proveru domena i svrhe radnje.</li>
        <li data-sr="Lažna stranica imitira rutinu, pa žrtva misli da rešava problem umesto da ulazi u prevaru." data-en="The fake page imitates routine, so the victim thinks they are solving a problem rather than entering a scam.">Lažna stranica imitira rutinu, pa žrtva misli da rešava problem umesto da ulazi u prevaru.</li>
        <li data-sr="Kratka poruka i jedan klik smanjuju verovatnoću da će meta proveriti pravi sajt drugim putem." data-en="A short message and one click reduce the chance that the target will verify the real site through another route.">Kratka poruka i jedan klik smanjuju verovatnoću da će meta proveriti pravi sajt drugim putem.</li>
        <li data-sr="Dodatni kod ili potvrda deluju kao tehnički detalj, iako su često sama autorizacija štetne radnje." data-en="An extra code or confirmation looks like a technical detail, even though it is often the authorization of the harmful action itself.">Dodatni kod ili potvrda deluju kao tehnički detalj, iako su često sama autorizacija štetne radnje.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Signali upozorenja" data-en="Warning signs">Signali upozorenja</h2>
      <ul class="bullets">
        <li data-sr="Poruka traži hitnu reakciju, ali vas vodi na link umesto da odete sami na zvaničan sajt ili aplikaciju." data-en="The message demands urgent action, but sends you to a link instead of letting you go to the official site or app yourself.">Poruka traži hitnu reakciju, ali vas vodi na link umesto da odete sami na zvaničan sajt ili aplikaciju.</li>
        <li data-sr="Tema je bezbednost naloga, a rešenje se svodi na unos podataka u formu iz poruke." data-en="The theme is account security, but the solution is reduced to entering data into a form opened from the message.">Tema je bezbednost naloga, a rešenje se svodi na unos podataka u formu iz poruke.</li>
        <li data-sr="Domen i logika radnje ne odgovaraju normalnom ponašanju pravog servisa." data-en="The domain and action logic do not match the normal behavior of the real service.">Domen i logika radnje ne odgovaraju normalnom ponašanju pravog servisa.</li>
        <li data-sr="Posle lozinke stiže i zahtev za kodom ili potvrdom koja deluje kao dodatni formalni korak." data-en="After the password, there is a request for a code or confirmation that looks like just another formal step.">Posle lozinke stiže i zahtev za kodom ili potvrdom koja deluje kao dodatni formalni korak.</li>
        <li data-sr="Strah od blokade ili gubitka naloga pokušava da zameni običnu proveru činjenica." data-en="Fear of lockout or account loss tries to replace ordinary fact-checking.">Strah od blokade ili gubitka naloga pokušava da zameni običnu proveru činjenica.</li>
      </ul>
    </section>

    <section class="card scenario-related-box">
      <h2 data-sr="Povezana prevara" data-en="Related scam">Povezana prevara</h2>
      <p data-sr="Ovaj scenario pripada modelu <a href='phishing.html'>Fišing</a>. Specifičnost je u tome što je ulaz imejl sa navodnim bezbednosnim problemom, dok se prava šteta dešava tek na lažnoj stranici i posle unosa podataka." data-en="This scenario belongs to the <a href='phishing.html'>Phishing</a> model. Its specific feature is that the entry point is an email about a supposed security problem, while the real damage happens only on the fake page and after data entry.">Ovaj scenario pripada modelu <a href='phishing.html'>Fišing</a>. Specifičnost je u tome što je ulaz imejl sa navodnim bezbednosnim problemom, dok se prava šteta dešava tek na lažnoj stranici i posle unosa podataka.</p>
    </section>

    <section class="card">
      <h2 data-sr="Izvori i urednička napomena" data-en="Sources and editorial note">Izvori i urednička napomena</h2>
      <p data-sr="Scenario je anonimizovan i urednički složen iz javno poznatih fišing obrazaca i interne case biblioteke sajta." data-en="This scenario is anonymized and editorially assembled from publicly known phishing patterns and the site's internal case library.">Scenario je anonimizovan i urednički složen iz javno poznatih fišing obrazaca i interne case biblioteke sajta.</p>
      <ul class="scenario-source-list">
        <li><a href="https://www.cisa.gov/avoid-phishing-attempts" target="_blank" rel="noopener noreferrer">CISA: Recognize and Report Phishing</a></li>
      </ul>
    </section>
  `
};
