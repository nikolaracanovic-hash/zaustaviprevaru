window.SCENARIO_CONTENT = window.SCENARIO_CONTENT || {};

window.SCENARIO_CONTENT["scenario-marketplace-courier-link"] = {
  raw_html: `
    <section class="card scenario-intro">
      <h2 data-sr="Šta ovaj scenario pokazuje" data-en="What this scenario shows">Šta ovaj scenario pokazuje</h2>
      <p data-sr="Ovo je klasičan scenario prevare na oglasnicima u kome običan razgovor o prodaji prelazi u lažni logistički korak. Kupac ne traži robu, već pokušava da prodavca prebaci na stranicu koja izgleda kao kurirska ili payment procedura." data-en="This is a classic marketplace fraud scenario in which an ordinary sales conversation turns into a fake logistics step. The buyer is not really after the item, but tries to move the seller onto a page that looks like a courier or payment procedure.">Ovo je klasičan scenario prevare na oglasnicima u kome običan razgovor o prodaji prelazi u lažni logistički korak. Kupac ne traži robu, već pokušava da prodavca prebaci na stranicu koja izgleda kao kurirska ili payment procedura.</p>
      <p data-sr="Napad prolazi zato što ostaje u okviru normalnog dogovora o dostavi. Meta ne misli da plaća ili predaje pristup, već da navodno potvrđuje nešto što je deo rutine prodaje." data-en="The attack works because it stays inside the frame of a normal delivery arrangement. The target does not think they are paying or handing over access, but supposedly confirming something that belongs to ordinary selling routine.">Napad prolazi zato što ostaje u okviru normalnog dogovora o dostavi. Meta ne misli da plaća ili predaje pristup, već da navodno potvrđuje nešto što je deo rutine prodaje.</p>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok scenarija" data-en="Scenario timeline">Hronološki tok scenarija</h2>
      <div class="scenario-timeline">
        <article class="scenario-step"><div class="scenario-step-head"><span class="scenario-step-kicker" data-sr="Korak 1" data-en="Step 1">Korak 1</span></div><p class="scenario-step-text" data-sr="Razgovor počinje kao obična kupoprodaja. Profil kupca izgleda dovoljno normalno da se ne aktivira sumnja odmah." data-en="The conversation starts like an ordinary sale. The buyer profile looks normal enough that suspicion does not trigger immediately.">Razgovor počinje kao obična kupoprodaja. Profil kupca izgleda dovoljno normalno da se ne aktivira sumnja odmah.</p></article>
        <article class="scenario-step"><div class="scenario-step-head"><span class="scenario-step-kicker" data-sr="Korak 2" data-en="Step 2">Korak 2</span></div><p class="scenario-step-text" data-sr="Kupac predlaže kurira ili zaštitu kupca kao praktično rešenje. Time uvodi novu proceduru koja navodno olakšava dogovor." data-en="The buyer suggests a courier or buyer protection as a practical solution. That introduces a new procedure that supposedly makes the deal easier.">Kupac predlaže kurira ili zaštitu kupca kao praktično rešenje. Time uvodi novu proceduru koja navodno olakšava dogovor.</p></article>
        <article class="scenario-step"><div class="scenario-step-head"><span class="scenario-step-kicker" data-sr="Korak 3" data-en="Step 3">Korak 3</span></div><p class="scenario-step-text" data-sr="Stiže link koji izgleda kao korak za potvrdu dostave ili prijema novca. U stvarnosti, to je lažna forma čiji je cilj kartica, CVV ili autorizacija." data-en="A link arrives that looks like a step to confirm delivery or receipt of money. In reality, it is a fake form whose goal is the card, CVV, or an authorization.">Stiže link koji izgleda kao korak za potvrdu dostave ili prijema novca. U stvarnosti, to je lažna forma čiji je cilj kartica, CVV ili autorizacija.</p></article>
        <article class="scenario-step"><div class="scenario-step-head"><span class="scenario-step-kicker" data-sr="Korak 4" data-en="Step 4">Korak 4</span></div><p class="scenario-step-text" data-sr="Kupac objašnjava da prodavac mora nešto da potvrdi karticom. To je operativni apsurd, ali u brzini deluje kao deo sistema." data-en="The buyer explains that the seller has to confirm something with a card. That is operationally absurd, but in a rushed moment it feels like part of the system.">Kupac objašnjava da prodavac mora nešto da potvrdi karticom. To je operativni apsurd, ali u brzini deluje kao deo sistema.</p></article>
        <article class="scenario-step"><div class="scenario-step-head"><span class="scenario-step-kicker" data-sr="Korak 5" data-en="Step 5">Korak 5</span></div><p class="scenario-step-text" data-sr="Ako meta unese podatke, šteta ide u dve grane: direktna naplata ili sledeći korak kroz OTP, poziv ili dodatni link. Prodaja je samo mamac za payment ili takeover radnju." data-en="If the target enters the data, the damage branches in two directions: a direct charge or a next step through an OTP, a call, or another link. The sale is only the bait for a payment or takeover action.">Ako meta unese podatke, šteta ide u dve grane: direktna naplata ili sledeći korak kroz OTP, poziv ili dodatni link. Prodaja je samo mamac za payment ili takeover radnju.</p></article>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Šta drži scenario" data-en="What keeps the scenario moving">Šta drži scenario</h2>
      <ul class="bullets">
        <li data-sr="Normalan ton dopisivanja prikriva činjenicu da se uvodi potpuno nova i lažna procedura." data-en="A normal conversation tone hides the fact that a completely new and fake procedure is being introduced.">Normalan ton dopisivanja prikriva činjenicu da se uvodi potpuno nova i lažna procedura.</li>
        <li data-sr="Kurir i dostava služe kao neutralan izgovor da se otvori spoljašnji link." data-en="Courier and delivery serve as a neutral excuse to open an external link.">Kurir i dostava služe kao neutralan izgovor da se otvori spoljašnji link.</li>
        <li data-sr="Žurba pomaže da se ne primeti da prodavac nema razlog da karticom potvrđuje uplatu." data-en="Urgency helps hide the fact that a seller has no reason to confirm a payment with a card.">Žurba pomaže da se ne primeti da prodavac nema razlog da karticom potvrđuje uplatu.</li>
        <li data-sr="Off-platform logika uklanja zaštitu i pravila samog oglasnika." data-en="Off-platform logic removes the protections and rules of the marketplace itself.">Off-platform logika uklanja zaštitu i pravila samog oglasnika.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Signali upozorenja" data-en="Warning signs">Signali upozorenja</h2>
      <ul class="bullets">
        <li data-sr="Kupac insistira na posebnom linku umesto na običnom dogovoru kroz samu platformu." data-en="The buyer insists on a special link instead of a normal arrangement within the platform itself.">Kupac insistira na posebnom linku umesto na običnom dogovoru kroz samu platformu.</li>
        <li data-sr="Prodavac navodno mora karticom da potvrdi prijem novca ili kurira." data-en="The seller supposedly has to confirm receipt of money or a courier with a card.">Prodavac navodno mora karticom da potvrdi prijem novca ili kurira.</li>
        <li data-sr="Razgovor se prebacuje van platforme ili se ubrzava pod izgovorom da kurir čeka." data-en="The conversation is moved off-platform or accelerated under the excuse that the courier is waiting.">Razgovor se prebacuje van platforme ili se ubrzava pod izgovorom da kurir čeka.</li>
        <li data-sr="Forma traži više finansijskih podataka nego što bi bilo potrebno za bilo kakvu dostavu." data-en="The form asks for more financial data than any delivery process would require.">Forma traži više finansijskih podataka nego što bi bilo potrebno za bilo kakvu dostavu.</li>
        <li data-sr="Jednostavna prodaja odjednom dobija jezik verifikacije, zaštite i potvrda koji ne pripada običnom oglasu." data-en="A simple sale suddenly gets language of verification, protection, and confirmation that does not belong to an ordinary listing.">Jednostavna prodaja odjednom dobija jezik verifikacije, zaštite i potvrda koji ne pripada običnom oglasu.</li>
      </ul>
    </section>

    <section class="card scenario-related-box">
      <h2 data-sr="Povezana prevara" data-en="Related scam">Povezana prevara</h2>
      <p data-sr="Ovaj scenario pripada modelu <a href='marketplace-scam.html'>Prevare na oglasnicima</a>. Za razliku od lažne internet prodavnice, ovde je ključ direktan razgovor sa navodnim kupcem koji jednostavan dogovor pretvara u link, formu i korak potvrde." data-en="This scenario belongs to the <a href='marketplace-scam.html'>Marketplace scams</a> model. Unlike a fake webshop, the key here is a direct conversation with a supposed buyer who turns a simple deal into a link, a form, and a confirmation step.">Ovaj scenario pripada modelu <a href='marketplace-scam.html'>Prevare na oglasnicima</a>. Za razliku od lažne internet prodavnice, ovde je ključ direktan razgovor sa navodnim kupcem koji jednostavan dogovor pretvara u link, formu i korak potvrde.</p>
    </section>

    <section class="card">
      <h2 data-sr="Izvori i urednička napomena" data-en="Sources and editorial note">Izvori i urednička napomena</h2>
      <p data-sr="Scenario je anonimizovan i urednički složen iz javno poznatih obrazaca prevara na oglasnicima i interne case biblioteke sajta." data-en="This scenario is anonymized and editorially assembled from publicly known marketplace fraud patterns and the site's internal case library.">Scenario je anonimizovan i urednički složen iz javno poznatih obrazaca prevara na oglasnicima i interne case biblioteke sajta.</p>
      <ul class="scenario-source-list">
        <li><a href="https://consumer.ftc.gov/buying-online-marketplace" target="_blank" rel="noopener noreferrer">FTC: Buying From an Online Marketplace</a></li>
      </ul>
    </section>
  `
};
