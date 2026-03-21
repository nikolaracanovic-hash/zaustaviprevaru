window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["customs-fee-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako rade lažne carine i taksene prevare" data-en="Introduction: how fake customs fee scams work">Uvod: kako rade lažne carine i taksene prevare</h2>
      <p data-sr="SMS ili email: pošiljka zadržana na carini, potrebna naknada za oslobađanje. Link ka lažnom portalu koji krade kartične podatke za simboličan iznos." data-en="Fake customs fee scams target people who order goods online. The attack arrives as an SMS or email claiming a shipment is held at customs and a customs release fee must be paid. The link leads to a fake portal visually imitating customs or a logistics service. The portal steals card details for an amount that looks legitimate (3–30 euros).">SMS ili email: pošiljka zadržana na carini, potrebna naknada za oslobađanje. Link ka lažnom portalu koji krade kartične podatke za simboličan iznos.</p>
      <p data-sr="Efikasna jer korisnici online kupovine uvek imaju neku aktivnu pošiljku. Verovatnoća podudaranja s realnom porudžbinom povećava kliktanje." data-en="The scheme is particularly effective because users who regularly order online always have some active shipment or have recently ordered. The chance that a shipment actually exists increases the link click rate far above average.">Efikasna jer korisnici online kupovine uvek imaju neku aktivnu pošiljku. Verovatnoća podudaranja s realnom porudžbinom povećava kliktanje.</p>
      <div class="callout" data-sr="<strong>Model:</strong> SMS ili email → carina ili dostavna služba → zadržana pošiljka + naknada → link → lažni portal → kartični podaci → krađa." data-en="<strong>Model:</strong> SMS or email → customs or delivery service → held shipment + fee → link → fake portal → card data → theft."><strong>Model:</strong> SMS ili email → carina ili dostavna služba → zadržana pošiljka + naknada → link → lažni portal → kartični podaci → krađa.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> meta prima SMS ili email o zadržanom paketu i klika link za plaćanje carinske naknade." data-en="<strong>Threshold:</strong> the target receives an SMS or email about a held parcel and clicks the link to pay the customs fee."><strong>Prag:</strong> meta prima SMS ili email o zadržanom paketu i klika link za plaćanje carinske naknade.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika carinske prevare" data-en="How it works: customs scam mechanics">Kako generalno radi: mehanika carinske prevare</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta čini SMS ubedljivim" data-en="What makes the SMS convincing">Šta čini SMS ubedljivim</div>
          <ul class="bullets">
            <li data-sr="naziv carinske agencije ili poznate dostavne kompanije (DHL, FedEx, DPD)." data-en="customs agency name or known delivery company (DHL, FedEx, DPD).">naziv carinske agencije ili poznate dostavne kompanije (DHL, FedEx, DPD).</li>
            <li data-sr="lažni broj pošiljke koji izgleda kao pravi praćeni kod." data-en="fake shipment number that looks like a real tracking code.">lažni broj pošiljke koji izgleda kao pravi praćeni kod.</li>
            <li data-sr="mali iznos naknade (3–30 evra) koji se ne čini vrednim razmišljanja." data-en="small fee amount (3–30 euros) that does not seem worth thinking about.">mali iznos naknade (3–30 evra) koji se ne čini vrednim razmišljanja.</li>
            <li data-sr="referenca na poreklo pošiljke (Kina, SAD) koja odgovara tipičnom profilu online kupca." data-en="reference to shipment origin (China, USA) matching the typical online shopper profile.">referenca na poreklo pošiljke (Kina, SAD) koja odgovara tipičnom profilu online kupca.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Mehanika lažnog portala" data-en="Fake portal mechanics">Mehanika lažnog portala</div>
          <ul class="bullets">
            <li data-sr="portal imitira zvanični carinski portal ili sajt dostavne kompanije." data-en="portal imitates the official customs portal or delivery company website.">portal imitira zvanični carinski portal ili sajt dostavne kompanije.</li>
            <li data-sr="URL se razlikuje od zvaničnog — prefiksi, sufiksi ili zamenjeni znakovi." data-en="URL differs from official — prefixes, suffixes, or substituted characters.">URL se razlikuje od zvaničnog — prefiksi, sufiksi ili zamenjeni znakovi.</li>
            <li data-sr="portal prikuplja kompletne kartične podatke za plaćanje malene carinske naknade." data-en="portal collects complete card data for payment of a small customs fee.">portal prikuplja kompletne kartične podatke za plaćanje malene carinske naknade.</li>
            <li data-sr="posle unosa kartičnih podataka pošiljka ostaje zadržana — jer nikad nije ni postojala." data-en="after entering card data the shipment remains held — because it never existed.">posle unosa kartičnih podataka pošiljka ostaje zadržana — jer nikad nije ni postojala.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)" data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — SMS ili email o zadržanoj pošiljci" data-en="Phase 1 — SMS or email about held shipment">Faza 1 — SMS ili email o zadržanoj pošiljci</h3>
        <p data-sr="Poruka izgleda kao legitimno carinsko zadržavanje. Broj pošiljke izgleda autentično, naknada je mala, rok 24–48h." data-en="The target receives a message that looks like a customs hold notification. The shipment number sounds authentic. The fee amount is small and affordable. The deadline is 24–48 hours before returning the shipment to the sender.">Poruka izgleda kao legitimno carinsko zadržavanje. Broj pošiljke izgleda autentično, naknada je mala, rok 24–48h.</p>
        <ul class="bullets">
          <li data-sr="signal: zvanična carina ne kontaktira SMS-om s direktnim linkom za plaćanje." data-en="signal: official customs does not contact by SMS with a direct payment link.">signal: zvanična carina ne kontaktira SMS-om s direktnim linkom za plaćanje.</li>
          <li data-sr="signal: broj pošiljke se ne može naći u sistemu praćenja dostavne kompanije." data-en="signal: the shipment number cannot be found in the delivery company's tracking system.">signal: broj pošiljke se ne može naći u sistemu praćenja dostavne kompanije.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta klikne link jer misli da je pošiljka neka od aktivnih porudžbina." data-en="<strong>Threshold:</strong> the target clicks the link thinking the shipment is one of their active orders."><strong>Prag faze:</strong> meta klikne link jer misli da je pošiljka neka od aktivnih porudžbina.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Lažni portal i kartični podaci" data-en="Phase 2 — Fake portal and card data">Faza 2 — Lažni portal i kartični podaci</h3>
        <p data-sr="Portal traži karticu za malu naknadu. Logika: mali iznos za stvarnu pošiljku. Podaci se koriste za znatno veće transakcije." data-en="The portal requests card data for payment of a small fee. The victim's logic: it's just 5 euros for a package worth 50 euros. But the portal steals all card data for transactions of much larger amounts.">Portal traži karticu za malu naknadu. Logika: mali iznos za stvarnu pošiljku. Podaci se koriste za znatno veće transakcije.</p>
        <ul class="bullets">
          <li data-sr="signal: URL portala nije domena zvanične carinske agencije." data-en="signal: the portal URL is not the official customs agency's domain.">signal: URL portala nije domena zvanične carinske agencije.</li>
          <li data-sr="signal: zvanična carina ne naplaćuje malene iznose karticom online — postoji procedura uplatnicom." data-en="signal: official customs does not collect small amounts by card online — there is a payment slip procedure.">signal: zvanična carina ne naplaćuje malene iznose karticom online — postoji procedura uplatnicom.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="toll-road-scam.html" data-sr="Prevare s lažnim putarinama" data-en="Fake toll road scams">Prevare s lažnim putarinama</a></li>
            <li><a href="advance-fee-fraud.html" data-sr="Uplata unapred" data-en="Advance-fee fraud">Uplata unapred</a></li>
          </ul>
        </div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Krađa podataka i avansna šema" data-en="Phase 3 — Data theft and advance-fee scheme">Faza 3 — Krađa podataka i avansna šema</h3>
        <p data-sr="Jednostavna varijanta: kartica kompromitovana odmah. Složena varijanta: pošiljka ostaje 'zadržana', stižu novi zahtevi za naknadama." data-en="In the simple variant, card data is used immediately. In the more complex variant, after the first payment a new message arrives: the shipment is still held due to new procedures, another fee is required. This is the advance-fee scheme applied to a customs context.">Jednostavna varijanta: kartica kompromitovana odmah. Složena varijanta: pošiljka ostaje 'zadržana', stižu novi zahtevi za naknadama.</p>
        <div class="callout" data-sr="<strong>Akcija:</strong> odmah blokiraj karticu ako su podaci uneti. Zvanična carina daje pisano rešenje s uplatnicom — ne SMS s linkom." data-en="<strong>Action:</strong> immediately block the card if data was entered. Official customs for a customs fee provides a written decision with a deadline and payment slip — not SMS."><strong>Akcija:</strong> odmah blokiraj karticu ako su podaci uneti. Zvanična carina daje pisano rešenje s uplatnicom — ne SMS s linkom.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="obaveštenje o carinskom zadržavanju pošiljke stiže SMS-om s direktnim linkom." data-en="customs hold notification arrives by SMS with a direct payment link.">obaveštenje o carinskom zadržavanju pošiljke stiže SMS-om s direktnim linkom.</li>
        <li data-sr="URL portala nije zvanična domena carinske agencije ili dostavne kompanije." data-en="portal URL is not the official customs agency or delivery company domain.">URL portala nije zvanična domena carinske agencije ili dostavne kompanije.</li>
        <li data-sr="broj pošiljke se ne može pratiti u sistemu dostavne kompanije." data-en="shipment number cannot be tracked in the delivery company's system.">broj pošiljke se ne može pratiti u sistemu dostavne kompanije.</li>
        <li data-sr="portal traži kompletne kartične podatke za plaćanje male naknade." data-en="portal requests complete card details for payment of a small fee.">portal traži kompletne kartične podatke za plaćanje male naknade.</li>
        <li data-sr="posle prve uplate stiže nova poruka o novoj carinskoj naknadi." data-en="after the first payment, a new message arrives about another customs fee.">posle prve uplate stiže nova poruka o novoj carinskoj naknadi.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 10 pitanja pre plaćanja carinske naknade putem SMS linka" data-en="Checklist: 10 questions before paying a customs fee via SMS link">Checklista: 10 pitanja pre plaćanja carinske naknade putem SMS linka</h2>
      <ul class="bullets">
        <li data-sr="Da li je broj pošiljke proverljiv u sistemu praćenja dostavne kompanije?" data-en="Is the shipment number verifiable in the delivery company's tracking system?">Da li je broj pošiljke proverljiv u sistemu praćenja dostavne kompanije?</li>
        <li data-sr="Da li je URL portala identičan zvaničnoj domeni carinske agencije?" data-en="Is the portal URL identical to the official customs agency domain?">Da li je URL portala identičan zvaničnoj domeni carinske agencije?</li>
        <li data-sr="Da li carina zaista šalje SMS s direktnim linkom za plaćanje naknade?" data-en="Does customs actually send SMS with a direct payment link?">Da li carina zaista šalje SMS s direktnim linkom za plaćanje naknade?</li>
        <li data-sr="Da li postoji aktivan zahtev ili porudžbina koja bi odgovarala toj pošiljci?" data-en="Is there an active order that would correspond to this shipment?">Da li postoji aktivan zahtev ili porudžbina koja bi odgovarala toj pošiljci?</li>
        <li data-sr="Da li je dostavna kompanija direktno kontaktirana putem zvaničnog broja?" data-en="Was the delivery company contacted directly via their official number?">Da li je dostavna kompanija direktno kontaktirana putem zvaničnog broja?</li>
        <li data-sr="Da li zvanična carina naplaćuje carinu karticom online za male iznose?" data-en="Does official customs collect customs fees by card online for small amounts?">Da li zvanična carina naplaćuje carinu karticom online za male iznose?</li>
        <li data-sr="Da li portal traži CVV kartične podatke za plaćanje?" data-en="Does the portal request CVV card data for payment?">Da li portal traži CVV kartične podatke za plaćanje?</li>
        <li data-sr="Da li posle prve uplate stiže nova poruka o novoj carinskoj naknadi?" data-en="After the first payment, does a new message arrive about another customs fee?">Da li posle prve uplate stiže nova poruka o novoj carinskoj naknadi?</li>
        <li data-sr="Da li je banka obaveštena ako su kartični podaci uneti?" data-en="Was the bank notified if card details were entered?">Da li je banka obaveštena ako su kartični podaci uneti?</li>
        <li data-sr="Da li je incident prijavljen carinskoj agenciji i policiji?" data-en="Was the incident reported to the customs agency and police?">Da li je incident prijavljen carinskoj agenciji i policiji?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="ne klikaj link — proveri broj pošiljke direktno na sajtu dostavne kompanije." data-en="do not click the link — verify the shipment number directly on the delivery company's website.">ne klikaj link — proveri broj pošiljke direktno na sajtu dostavne kompanije.</li>
        <li data-sr="kontaktiraj dostavnu kompaniju na zvanični broj i pitaj o carinskim naknadama." data-en="contact the delivery company on their official number and ask about customs fees.">kontaktiraj dostavnu kompaniju na zvanični broj i pitaj o carinskim naknadama.</li>
        <li data-sr="ako su kartični podaci uneti, odmah blokiraj karticu u aplikaciji banke." data-en="if card details were entered, immediately block the card in the bank app.">ako su kartični podaci uneti, odmah blokiraj karticu u aplikaciji banke.</li>
        <li data-sr="sačuvaj SMS kao dokaz i prijavi incident carinskoj agenciji i policiji." data-en="save the SMS as evidence and report the incident to the customs agency and police.">sačuvaj SMS kao dokaz i prijavi incident carinskoj agenciji i policiji.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li je broj pošiljke moguće pratiti na sajtu dostavne kompanije?" data-en="Can the shipment number be tracked on the delivery company's website?">Da li je broj pošiljke moguće pratiti na sajtu dostavne kompanije?</li>
            <li data-sr="Da li je URL portala bio zvanični domen carine ili dostavne kompanije?" data-en="Was the portal URL the official customs or delivery company domain?">Da li je URL portala bio zvanični domen carine ili dostavne kompanije?</li>
            <li data-sr="Da li su kartični podaci već uneti?" data-en="Have card details already been entered?">Da li su kartični podaci već uneti?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Carina ne šalje SMS s linkom za plaćanje — koristi pisano rešenje s uplatnicom." data-en="Customs does not send SMS with payment links — it uses written decisions with payment slips.">Carina ne šalje SMS s linkom za plaćanje — koristi pisano rešenje s uplatnicom.</li>
            <li data-sr="Hajde da proverimo broj pošiljke na sajtu dostavne kompanije pre klika." data-en="Let's check the shipment number on the delivery company's website before clicking.">Hajde da proverimo broj pošiljke na sajtu dostavne kompanije pre klika.</li>
            <li data-sr="Ako su podaci kartice uneti, banka mora biti obaveštena odmah — blokada je hitan korak." data-en="If card data was entered, the bank must be notified immediately — blocking is an urgent step.">Ako su podaci kartice uneti, banka mora biti obaveštena odmah — blokada je hitan korak.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
