window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["subscription-trap"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi zamka pretplate" data-en="Introduction: how the subscription trap works">Uvod: kako radi zamka pretplate</h2>
      <p data-sr="Žrtva pristaje na pretplatu bez jasnog razumevanja uslovâ. Naplata počinje automatski po isteku probe." data-en="The subscription trap occurs when a victim, usually attracted by a free trial, special offer, or online order, unknowingly agrees to recurring monthly or annual billing. The registration is designed to hide the subscription condition — in small print, pre-checked checkboxes, or misleading offer descriptions.">Žrtva pristaje na pretplatu bez jasnog razumevanja uslovâ. Naplata počinje automatski po isteku probe.</p>
      <p data-sr="Otkaz je namerno komplikovan. Svaki minut odugovlačenja generiše novu naplatu." data-en="Particularly effective is the variant combining a free trial with complicated cancellation procedures. A victim who wants to cancel discovers they must: call during limited business hours, send a registered letter, or go through a multi-step online process that does not complete successfully.">Otkaz je namerno komplikovan. Svaki minut odugovlačenja generiše novu naplatu.</p>
      <div class="callout" data-sr="<strong>Model:</strong> besplatna proba ili ponuda → automatska pretplata → naplata bez jasnog pristanka → kompleksni otkaz → serija naplata → gubitak." data-en="<strong>Model:</strong> free trial or offer → automatic subscription → charge without clear consent → complex cancellation → payment series → loss."><strong>Model:</strong> besplatna proba ili ponuda → automatska pretplata → naplata bez jasnog pristanka → kompleksni otkaz → serija naplata → gubitak.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> unos kartičnih podataka za besplatnu probu je pristanak na automatsku pretplatu osim ako je otkaz potvrđen pre isteka probnog perioda." data-en="<strong>Threshold:</strong> entering card details for a free trial is consent to automatic subscription unless cancellation is confirmed before the trial ends."><strong>Prag:</strong> unos kartičnih podataka za besplatnu probu je pristanak na automatsku pretplatu osim ako je otkaz potvrđen pre isteka probnog perioda.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika zamke pretplate" data-en="How it works: subscription trap mechanics">Kako generalno radi: mehanika zamke pretplate</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Dizajn koji skriva pretplatu" data-en="Design that hides the subscription">Dizajn koji skriva pretplatu</div>
          <ul class="bullets">
            <li data-sr="uslov pretplate je u sitnim slovima ispod dugmeta za Besplatnu probu." data-en="the subscription condition is in small print below the Free Trial button.">uslov pretplate je u sitnim slovima ispod dugmeta za Besplatnu probu.</li>
            <li data-sr="polje Pristajem na mesečnu naplatu je unapred označeno — žrtva ga ne vidi ili ga ne otklanja." data-en="the I agree to monthly billing' checkbox is pre-checked — the victim does not notice or uncheck it.">polje Pristajem na mesečnu naplatu je unapred označeno — žrtva ga ne vidi ili ga ne otklanja.</li>
            <li data-sr="cena pretplate je prikazana godišnje ali se naplaćuje mesečno, što izgleda povoljnije nego što jest." data-en="the subscription price is shown annually but charged monthly, appearing cheaper than it actually is.">cena pretplate je prikazana godišnje ali se naplaćuje mesečno, što izgleda povoljnije nego što jest.</li>
            <li data-sr="e-mail potvrda registracije ne pominje pretplatu ili je pominje minimalnim tekstom." data-en="registration confirmation email does not mention the subscription or mentions it minimally.">e-mail potvrda registracije ne pominje pretplatu ili je pominje minimalnim tekstom.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Komplikacije pri otkazivanju" data-en="Cancellation complications">Komplikacije pri otkazivanju</div>
          <ul class="bullets">
            <li data-sr="otkazni obrazac je skriven u podmenijima koji nisu intuitivni za navigaciju." data-en="the cancellation form is hidden in submenus that are not intuitive to navigate.">otkazni obrazac je skriven u podmenijima koji nisu intuitivni za navigaciju.</li>
            <li data-sr="telefonska podrška za otkaz radi samo u ograničenom radnom vremenu ili ima duge redove čekanja." data-en="phone support for cancellation operates only during limited business hours or has long waiting queues.">telefonska podrška za otkaz radi samo u ograničenom radnom vremenu ili ima duge redove čekanja.</li>
            <li data-sr="svaka naplata se mora posebno osporiti jer kompanija tvrdi da je otkaz nepotpun." data-en="every charge must be disputed separately because the company claims the cancellation is incomplete'.">svaka naplata se mora posebno osporiti jer kompanija tvrdi da je otkaz nepotpun.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)" data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Registracija i skriveni pristanak" data-en="Phase 1 — Registration and hidden consent">Faza 1 — Registracija i skriveni pristanak</h3>
        <p data-sr="Kartičani podaci su uneseni. Uslov pretplate je skriven. Žrtva nije svesna obaveze naplata." data-en="The victim registers for a free trial or special offer. Enters card details. The subscription condition is hidden in the design. The victim has no clear understanding of the obligations.">Kartičani podaci su uneseni. Uslov pretplate je skriven. Žrtva nije svesna obaveze naplata.</p>
        <ul class="bullets">
          <li data-sr="signal: svaka registracija koja zahteva kartičane podatke za 'besplatnu probu' može inicirati automatsku pretplatu." data-en="signal: any registration requiring card details for a 'free trial' may initiate automatic subscription.">signal: svaka registracija koja zahteva kartičane podatke za 'besplatnu probu' može inicirati automatsku pretplatu.</li>
          <li data-sr="signal: nejasni uslovi korišćenja koji nisu direktno prikazani pre unosa kartičnih podataka." data-en="signal: unclear terms of use not directly displayed before entering card details.">signal: nejasni uslovi korišćenja koji nisu direktno prikazani pre unosa kartičnih podataka.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> po isteku probnog perioda počinje automatska naplata — žrtva to ne primeće dok ne proveri kartični izvod." data-en="<strong>Threshold:</strong> after the trial period ends, automatic billing begins — the victim does not notice until checking the card statement."><strong>Prag faze:</strong> po isteku probnog perioda počinje automatska naplata — žrtva to ne primeće dok ne proveri kartični izvod.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Serija naplata i komplikovani otkaz" data-en="Phase 2 — Billing series and complicated cancellation">Faza 2 — Serija naplata i komplikovani otkaz</h3>
        <p data-sr="Naplata nastavlja tokom komplikovanog otkazivanja. Svaka odgoda generiše novu naplatu." data-en="Billing starts. The victim notices on the card statement. Tries to cancel — but finds complicated procedures. Charges continue throughout the cancellation process.">Naplata nastavlja tokom komplikovanog otkazivanja. Svaka odgoda generiše novu naplatu.</p>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="fake-medical-scam.html" data-sr="Lažna medicinska usluga ili dijagnoza" data-en="Fake medical scam">Lažna medicinska usluga ili dijagnoza</a></li>
            <li><a href="advance-fee-fraud.html" data-sr="Uplata unapred" data-en="Advance-fee fraud">Uplata unapred</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> blokada kartice za ovog primaoca i chargeback su najbrži načini zaustavljanja serije naplata." data-en="<strong>Threshold:</strong> blocking the card for this payee and chargeback are the fastest ways to stop the billing series."><strong>Prag faze:</strong> blokada kartice za ovog primaoca i chargeback su najbrži načini zaustavljanja serije naplata.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="besplatna proba ili posebna ponuda koja zahteva kartičane podatke bez jasnog prikaza uslova pretplate." data-en="free trial or special offer requiring card details without a clear display of subscription conditions.">besplatna proba ili posebna ponuda koja zahteva kartičane podatke bez jasnog prikaza uslova pretplate.</li>
        <li data-sr="polje za saglasnost s pretplatom je unapred označeno ili nije jasno vidljivo." data-en="subscription consent checkbox is pre-checked or not clearly visible.">polje za saglasnost s pretplatom je unapred označeno ili nije jasno vidljivo.</li>
        <li data-sr="komplikovani proces otkazivanja koji zahteva poziv, pismo ili višestepeni online postupak." data-en="complicated cancellation process requiring a call, letter, or multi-step online procedure.">komplikovani proces otkazivanja koji zahteva poziv, pismo ili višestepeni online postupak.</li>
        <li data-sr="naplate se nastavljaju tokom procesa otkazivanja i svaka se mora posebno osporiti." data-en="charges continue during the cancellation process and each must be disputed separately.">naplate se nastavljaju tokom procesa otkazivanja i svaka se mora posebno osporiti.</li>
        <li data-sr="nema e-mail potvrde otkazivanja s jasnim datumom kada prestaju naplate." data-en="no email confirmation of cancellation with a clear date when charges stop.">nema e-mail potvrde otkazivanja s jasnim datumom kada prestaju naplate.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja pre unosa kartičnih podataka za 'besplatnu' ponudu" data-en="Checklist: 12 questions before entering card details for a free offer">Checklista: 12 pitanja pre unosa kartičnih podataka za 'besplatnu' ponudu</h2>
      <ul class="bullets">
        <li data-sr="Da li postoji jasno vidljiv uslov automatske pretplate posle probnog perioda?" data-en="Is there a clearly visible automatic subscription condition after the trial period?">Da li postoji jasno vidljiv uslov automatske pretplate posle probnog perioda?</li>
        <li data-sr="Da li sam pročitao/la uslove korišćenja pre unosa kartičnih podataka?" data-en="Did I read the terms of use before entering card details?">Da li sam pročitao/la uslove korišćenja pre unosa kartičnih podataka?</li>
        <li data-sr="Da li postoji polje 'Pristajem na mesečnu naplatu' koje je unapred označeno?" data-en="Is there an I agree to monthly billing' checkbox that is pre-checked?">Da li postoji polje 'Pristajem na mesečnu naplatu' koje je unapred označeno?</li>
        <li data-sr="Da li je jasno kako i kada mogu otkazati pretplatu — u manje od 3 klika?" data-en="Is it clear how and when I can cancel the subscription — in fewer than 3 clicks?">Da li je jasno kako i kada mogu otkazati pretplatu — u manje od 3 klika?</li>
        <li data-sr="Da li postoji e-mail potvrda koja jasno navodi datum krađa probe i početka naplata?" data-en="Is there an email confirmation clearly stating the trial end date and billing start date?">Da li postoji e-mail potvrda koja jasno navodi datum krađa probe i početka naplata?</li>
        <li data-sr="Da li sam stavio/la podsetnik za otkaz pre isteka probnog perioda?" data-en="Did I set a reminder to cancel before the trial period ends?">Da li sam stavio/la podsetnik za otkaz pre isteka probnog perioda?</li>
        <li data-sr="Da li se iznos mesečne naplate jasno navodi ili je sakriven u sitnim slovima?" data-en="Is the monthly billing amount clearly stated or hidden in small print?">Da li se iznos mesečne naplate jasno navodi ili je sakriven u sitnim slovima?</li>
        <li data-sr="Da li postoji jasna politika povrata za naplaćene periode u kojima nisam koristio/la uslugu?" data-en="Is there a clear refund policy for billed periods during which I did not use the service?">Da li postoji jasna politika povrata za naplaćene periode u kojima nisam koristio/la uslugu?</li>
        <li data-sr="Da li je virtuelna kartica ili jednokratna kartica bolji izbor za besplatne probe?" data-en="Is a virtual card or one-time card a better choice for free trials?">Da li je virtuelna kartica ili jednokratna kartica bolji izbor za besplatne probe?</li>
        <li data-sr="Da li kompanija ima verificiranu fizičku adresu i legitimne kontakt podatke?" data-en="Does the company have a verified physical address and legitimate contact details?">Da li kompanija ima verificiranu fizičku adresu i legitimne kontakt podatke?</li>
        <li data-sr="Da li redovno proveravam kartični izvod za nepoznate ponavljajuće naplate?" data-en="Do I regularly check the card statement for unknown recurring charges?">Da li redovno proveravam kartični izvod za nepoznate ponavljajuće naplate?</li>
        <li data-sr="Da li postoji chargeback opcija kod može banke za neovlašćene ili nepoštene ponavljajuće naplate?" data-en="Is there a chargeback option at my bank for unauthorized or unfair recurring charges?">Da li postoji chargeback opcija kod može banke za neovlašćene ili nepoštene ponavljajuće naplate?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="proverite kartični izvod i identifikujte sve nepoznate ponavljajuće naplate." data-en="check the card statement and identify all unknown recurring charges.">proverite kartični izvod i identifikujte sve nepoznate ponavljajuće naplate.</li>
        <li data-sr="pokušajte otkazati pretplatu direktno na sajtu — dokumentujte svaki korak procedurom." data-en="attempt to cancel the subscription directly on the site — document every step of the procedure.">pokušajte otkazati pretplatu direktno na sajtu — dokumentujte svaki korak procedurom.</li>
        <li data-sr="kontaktirajte banku i tražite blokadu plaćanja ovom primaocu i pokrenite chargeback za prethodne naplate." data-en="contact the bank and request blocking payments to this payee and initiate chargeback for previous charges.">kontaktirajte banku i tražite blokadu plaćanja ovom primaocu i pokrenite chargeback za prethodne naplate.</li>
        <li data-sr="prijavite kompaniju potrošačkoj zaštiti s dokazima nepoštene poslovne prakse." data-en="report the company to consumer protection with evidence of unfair business practices.">prijavite kompaniju potrošačkoj zaštiti s dokazima nepoštene poslovne prakse.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li se ova naplata pojavljuje mesečno na kartičnom izvodu?" data-en="Does this charge appear monthly on the card statement?">Da li se ova naplata pojavljuje mesečno na kartičnom izvodu?</li>
            <li data-sr="Da li postoji e-mail potvrda otkazivanja s jasnim datumom kad naplate prestaju?" data-en="Is there an email cancellation confirmation with a clear date when charges stop?">Da li postoji e-mail potvrda otkazivanja s jasnim datumom kad naplate prestaju?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Hajde da pregledamo zajedno kartični izvod i identifikujemo sve ponavljajuće naplate koje ne prepoznaješ." data-en="Let's review the card statement together and identify all recurring charges you do not recognize.">Hajde da pregledamo zajedno kartični izvod i identifikujemo sve ponavljajuće naplate koje ne prepoznaješ.</li>
            <li data-sr="Ako otkaz nije moguć online, kontaktirajmo banku direktno — blokada plaćanja ovom primaocu je najbrži put." data-en="If cancellation is not possible online, let's contact the bank directly — blocking payments to this payee is the fastest route.">Ako otkaz nije moguć online, kontaktirajmo banku direktno — blokada plaćanja ovom primaocu je najbrži put.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
