window.SCENARIO_CONTENT = window.SCENARIO_CONTENT || {};

window.SCENARIO_CONTENT["scenario-smishing-parcel-hold"] = {
  raw_html: `
    <section class="card scenario-intro">
      <h2 data-sr="Šta ovaj scenario pokazuje" data-en="What this scenario shows">Šta ovaj scenario pokazuje</h2>
      <p data-sr="Ovo je smišing scenario u kome SMS koristi temu pošiljke i kratkog roka da bi meta kliknula sa telefona. Mobilni ekran skraćuje proveru, a sitna doplata ili potvrda glume rutinski trošak dostave." data-en="This is a smishing scenario in which an SMS uses the theme of a parcel and a short deadline to make the target click on a phone. The mobile screen shortens verification, while a small surcharge or confirmation imitates a routine delivery cost.">Ovo je smišing scenario u kome SMS koristi temu pošiljke i kratkog roka da bi meta kliknula sa telefona. Mobilni ekran skraćuje proveru, a sitna doplata ili potvrda glume rutinski trošak dostave.</p>
    </section>
    <section class="card">
      <h2 data-sr="Hronološki tok scenarija" data-en="Scenario timeline">Hronološki tok scenarija</h2>
      <div class="scenario-timeline">
        <article class="scenario-step"><div class="scenario-step-head"><span class="scenario-step-kicker">Korak 1</span></div><p class="scenario-step-text" data-sr="Stiže kratka SMS poruka sa problemom i linkom. Nema objašnjenja, jer cilj nije ubeđivanje već trenutni klik." data-en="A short SMS arrives with a problem and a link. There is no explanation because the goal is not persuasion, but an immediate click.">Stiže kratka SMS poruka sa problemom i linkom. Nema objašnjenja, jer cilj nije ubeđivanje već trenutni klik.</p></article>
        <article class="scenario-step"><div class="scenario-step-head"><span class="scenario-step-kicker">Korak 2</span></div><p class="scenario-step-text" data-sr="Tema pošiljke deluje sitno i poznato. Meta misli da rešava mali logistički problem, ne bezbednosni incident." data-en="The parcel theme feels small and familiar. The target thinks they are solving a minor logistics issue, not a security incident.">Tema pošiljke deluje sitno i poznato. Meta misli da rešava mali logistički problem, ne bezbednosni incident.</p></article>
        <article class="scenario-step"><div class="scenario-step-head"><span class="scenario-step-kicker">Korak 3</span></div><p class="scenario-step-text" data-sr="Link otvara mobilnu stranicu koja glumi dostavu ili doplatu. Na telefonu je manje prostora za proveru domena i više prostora za automatizam." data-en="The link opens a mobile page that imitates delivery or a surcharge. On the phone there is less room to verify the domain and more room for autopilot behavior.">Link otvara mobilnu stranicu koja glumi dostavu ili doplatu. Na telefonu je manje prostora za proveru domena i više prostora za automatizam.</p></article>
        <article class="scenario-step"><div class="scenario-step-head"><span class="scenario-step-kicker">Korak 4</span></div><p class="scenario-step-text" data-sr="Forma traži karticu, CVV ili potvrdu koja nema logike za običnu pošiljku. U tom trenutku logistička priča već služi samo kao maska za payment štetu." data-en="The form asks for a card, CVV, or a confirmation that makes no sense for an ordinary parcel. At that point the logistics story is only a mask for payment damage.">Forma traži karticu, CVV ili potvrdu koja nema logike za običnu pošiljku. U tom trenutku logistička priča već služi samo kao maska za payment štetu.</p></article>
      </div>
    </section>
    <section class="card">
      <h2 data-sr="Signali upozorenja" data-en="Warning signs">Signali upozorenja</h2>
      <ul class="bullets">
        <li data-sr="SMS je kratak, ali odmah vodi ka linku i hitnosti." data-en="The SMS is short, but immediately pushes toward a link and urgency.">SMS je kratak, ali odmah vodi ka linku i hitnosti.</li>
        <li data-sr="Tema pošiljke pokušava da opravda unos kartice ili doplate." data-en="The parcel theme tries to justify entering a card or paying a surcharge.">Tema pošiljke pokušava da opravda unos kartice ili doplate.</li>
        <li data-sr="Mobilni klik skraćuje proveru domena i smisla radnje." data-en="The mobile click shortens domain verification and action logic checking.">Mobilni klik skraćuje proveru domena i smisla radnje.</li>
        <li data-sr="Pošiljka i doplata služe kao sitan izgovor za ozbiljnije finansijske podatke." data-en="The parcel and surcharge act as a small excuse for more serious financial data.">Pošiljka i doplata služe kao sitan izgovor za ozbiljnije finansijske podatke.</li>
      </ul>
    </section>
    <section class="card scenario-related-box">
      <h2 data-sr="Povezana prevara" data-en="Related scam">Povezana prevara</h2>
      <p data-sr="Ovaj scenario pripada modelu <a href='smishing.html'>Smišing</a>. Razlika u odnosu na klasičan fišing je kanal: SMS i mobilni ekran ubrzavaju reakciju i smanjuju proveru." data-en="This scenario belongs to the <a href='smishing.html'>Smishing</a> model. Unlike classic phishing, the difference is the channel: SMS and the mobile screen speed up reaction and reduce verification.">Ovaj scenario pripada modelu <a href='smishing.html'>Smišing</a>. Razlika u odnosu na klasičan fišing je kanal: SMS i mobilni ekran ubrzavaju reakciju i smanjuju proveru.</p>
    </section>
    <section class="card">
      <h2 data-sr="Izvori i urednička napomena" data-en="Sources and editorial note">Izvori i urednička napomena</h2>
      <p data-sr="Scenario je anonimizovan i urednički složen iz javno poznatih SMS prevara i interne case biblioteke sajta." data-en="This scenario is anonymized and editorially assembled from publicly known SMS fraud patterns and the site's internal case library.">Scenario je anonimizovan i urednički složen iz javno poznatih SMS prevara i interne case biblioteke sajta.</p>
      <ul class="scenario-source-list"><li><a href="https://www.cisa.gov/avoid-phishing-attempts" target="_blank" rel="noopener noreferrer">CISA: Recognize and Report Phishing</a></li></ul>
    </section>
  `
};
