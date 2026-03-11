window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["utility-bill-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako rade lažni računi za komunalne usluge" data-en="Introduction: how fake utility bill scams work">Uvod: kako rade lažni računi za komunalne usluge</h2>
      <p data-sr="Lažni računi za komunalne usluge imitiraju račune elektrodistribucije, vodovoda, gasovoda ili daljinskog grejanja. Prevarant šalje pismo ili zove tvrdeći da postoji zaostali dug koji nije plaćen i da će usluga biti isključena u roku od 24–48 sati ako se ne izvrši hitna uplata. Uplatne instrukcije vode ka privatnom nalogu ili lažnom portalu, a ne ka žiro računu preduzeća." data-en="Fake utility bill scams imitate bills from electricity distribution, water supply, gas, or district heating companies. The fraudster sends a letter or calls claiming there is an overdue debt that has not been paid and the service will be disconnected within 24–48 hours unless an urgent payment is made. Payment instructions lead to a private account or fake portal, not to the utility company's official account.">Lažni komunalni računi imitiraju elektrodistribuciju, vodosnabdevanje ili grejanje. Prijetnja: isključenje za 24–48h. Uplatne instrukcije vode na lažni nalog.</p>
      <p data-sr="Šema koristi ozbiljnost pretnje isključenja — bez struje, vode ili grejanja život postaje otežan odmah. Hitnost i konkretna prijetnja smanjuju vreme za proveru i navode žrtve da plate pre nego što plate da provjere." data-en="The scheme uses the seriousness of the disconnection threat — without electricity, water, or heating, life becomes immediately difficult. Urgency and the concrete threat reduce the time for verification and lead victims to pay before checking.">Prijetnja isključenjem je konkretna i hitna. Žrtve plaćaju pre provere jer su posledice vidljive odmah.</p>
      <div class="callout" data-sr="<strong>Model:</strong> pismo ili poziv → komunalno preduzeće → zaostali dug → rok → prijetnja isključenjem → hitna uplata na lažni nalog." data-en="<strong>Model:</strong> letter or call → utility company → overdue debt → deadline → disconnection threat → urgent payment to fake account."><strong>Model:</strong> pismo ili poziv → komunalno preduzeće → zaostali dug → rok → prijetnja isključenjem → hitna uplata na lažni nalog.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> meta prima poslednje upozorenje o isključenju usluge uz nalog za hitnu uplatu." data-en="<strong>Threshold:</strong> the target receives a final disconnection warning with an urgent payment order."><strong>Prag:</strong> meta prima poslednje upozorenje o isključenju usluge uz nalog za hitnu uplatu.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika komunalne prevare" data-en="How it works: utility scam mechanics">Kako generalno radi: mehanika komunalne prevare</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gradi ubedljivost računa" data-en="What builds bill credibility">Šta gradi ubedljivost računa</div>
          <ul class="bullets">
            <li data-sr="logo i boje komunalnog preduzeća kopirani na fizičkom pismu ili emailu." data-en="utility company logo and colors copied on the physical letter or email.">logo i boje komunalnog preduzeća kopirani na fizičkom pismu ili emailu.</li>
            <li data-sr="iznos duga koji izgleda realno za period od nekoliko meseci." data-en="debt amount that looks realistic for a period of several months.">iznos duga koji izgleda realno za period od nekoliko meseci.</li>
            <li data-sr="referentni broj predmeta i broj korisnika koji zvuče autentično." data-en="case reference number and customer number that sound authentic.">referentni broj predmeta i broj korisnika koji zvuče autentično.</li>
            <li data-sr="adresa korisnika koja je tačna — prevarant je pronašao kroz javne registre ili curenje podataka." data-en="customer address that is correct — fraudster found it through public registries or data leak.">adresa korisnika koja je tačna — prevarant je pronašao kroz javne registre ili curenje podataka.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Kako se uvodi hitna uplata" data-en="How urgent payment is introduced">Kako se uvodi hitna uplata</div>
          <ul class="bullets">
            <li data-sr="rok 24–48 sati do isključenja — tehnički tačan u nekim situacijama, što povećava ubedljivost." data-en="24–48 hour deadline to disconnection — technically accurate in some situations, which increases credibility.">rok 24–48 sati do isključenja — tehnički tačan u nekim situacijama, što povećava ubedljivost.</li>
            <li data-sr="uplatne instrukcije koje se razlikuju od standardnih uplatnica komunalnog preduzeća." data-en="payment instructions that differ from the utility company's standard payment slips.">uplatne instrukcije koje se razlikuju od standardnih uplatnica komunalnog preduzeća.</li>
            <li data-sr="opcija hitne uplate telefonom karticom ili putem dostavljenog linka." data-en="option for immediate card payment by phone or via the provided link.">opcija hitne uplate telefonom karticom ili putem dostavljenog linka.</li>
            <li data-sr="prijetnja penalima za troškove ponovnog priključenja posle isključenja." data-en="threat of penalties for reconnection costs after disconnection.">prijetnja penalima za troškove ponovnog priključenja posle isključenja.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)." data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Pismo o zaostalom dugu" data-en="Phase 1 — Overdue debt letter">Faza 1 — Pismo o zaostalom dugu</h3>
        <p data-sr="Meta prima pismo s logotipom komunalnog preduzeća. Pismo tvrdi da postoji zaostali dug koji nije plaćen i da je ovo poslednje obaveštenje pre isključenja. Iznos duga je konkretan i u realnom opsegu za vrstu usluge." data-en="The target receives a letter with the utility company's logo. The letter claims there is an overdue debt that has not been paid and this is the final notice before disconnection. The debt amount is specific and in a realistic range for the type of service.">Pismo s logotipom komunalnog preduzeća. Zaostali dug, poslednje obaveštenje pre isključenja. Iznos je realan.</p>
        <ul class="bullets">
          <li data-sr="signal: uplatne instrukcije u pismu se razlikuju od onih na redovnim mesečnim računima." data-en="signal: payment instructions in the letter differ from those on regular monthly bills.">signal: uplatne instrukcije u pismu se razlikuju od onih na redovnim mesečnim računima.</li>
          <li data-sr="signal: pismo ne sadrži QR kod za plaćanje koji je u skladu s uplatnicama kompanije." data-en="signal: the letter does not contain a QR code consistent with the company's payment slips.">signal: pismo ne sadrži QR kod za plaćanje koji je u skladu s uplatnicama kompanije.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta počne razmatrati uplatu bez provere da li dug zaista postoji u sistemu komunalnog preduzeća." data-en="<strong>Threshold:</strong> the target starts considering payment without verifying whether the debt actually exists in the utility company's system."><strong>Prag faze:</strong> meta počne razmatrati uplatu bez provere da li dug zaista postoji u sistemu komunalnog preduzeća.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Telefonski poziv s urgentnim zahtevom" data-en="Phase 2 — Phone call with urgent demand">Faza 2 — Telefonski poziv s urgentnim zahtevom</h3>
        <p data-sr="U telefonskoj varijanti prevarant zove u ime komunalnog preduzeća s istim zahtevom. Poziv dolazi u radno vreme radi verodostojnosti. Prevarant nudi hitno plaćanje karticom tokom poziva ili šalje link SMS-om posle razgovora." data-en="In the phone variant, the fraudster calls on behalf of the utility company with the same demand. The call comes during business hours for credibility. The fraudster offers immediate card payment during the call or sends a link by SMS after the conversation.">Telefonska varijanta: poziv u radno vreme, kartica tokom poziva ili SMS link posle razgovora.</p>
        <ul class="bullets">
          <li data-sr="signal: komunalno preduzeće ne naplaćuje račune telefonom u hitnom roku od 24h." data-en="signal: utility companies do not collect bills by phone on a 24-hour urgent basis.">signal: komunalno preduzeće ne naplaćuje račune telefonom u hitnom roku od 24h.</li>
          <li data-sr="signal: kartica se ne sme davati telefonom nikome ko nije identifikovan kroz zvanični sistem." data-en="signal: a card must not be given over the phone to anyone not identified through an official system.">signal: kartica se ne sme davati telefonom nikome ko nije identifikovan kroz zvanični sistem.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="energy-supplier-switch-scam.html" data-sr="Prevare pri prelasku na drugog dobavljača energije" data-en="Energy supplier switch scams">Prevare pri prelasku na drugog dobavljača energije</a></li>
            <li><a href="municipality-impersonation.html" data-sr="Lažno predstavljanje opštinskih organa" data-en="Municipality impersonation scams">Lažno predstavljanje opštinskih organa</a></li>
          </ul>
        </div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Lažni portal ili uplata" data-en="Phase 3 — Fake portal or payment">Faza 3 — Lažni portal ili uplata</h3>
        <p data-sr="Meta klikne link i dođe do portala koji imitira sajt komunalnog preduzeća ili unese karticne podatke tokom telefonskog poziva. Podaci idu prevarantu. Usluga se nastavlja normalno — jer dug nikad nije postojao." data-en="The target clicks the link and arrives at a portal imitating the utility company's website, or enters card details during the phone call. Data goes to the fraudster. The service continues normally — because the debt never existed.">Meta plaća ili predaje podatke kartice. Usluga se nastavlja normalno jer dug nikad nije ni postojao.</p>
        <div class="callout" data-sr="<strong>Indikator:</strong> komunalni dug se uvek može proveriti na korisničkom portalu preduzeća ili pozivom kol centra. Isključenje bez pisanog rešenja s rokom žalbe nije legalna procedura." data-en="<strong>Indicator:</strong> a utility debt can always be verified on the company's customer portal or by calling their call center. Disconnection without a written decision with appeal deadline is not legal procedure."><strong>Indikator:</strong> komunalni dug se uvek može proveriti na korisničkom portalu preduzeća. Isključenje bez pisanog rešenja s rokom žalbe nije legalna procedura.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="uplatne instrukcije u pismu se razlikuju od onih na redovnim mesečnim računima." data-en="payment instructions in the letter differ from regular monthly bill instructions.">uplatne instrukcije u pismu se razlikuju od onih na redovnim mesečnim računima.</li>
        <li data-sr="komunalno preduzeće nudi plaćanje karticom tokom telefonskog poziva." data-en="utility company offers card payment during a phone call.">komunalno preduzeće nudi plaćanje karticom tokom telefonskog poziva.</li>
        <li data-sr="dug se ne može proveriti na korisničkom portalu komunalnog preduzeća." data-en="the debt cannot be verified on the utility company's customer portal.">dug se ne može proveriti na korisničkom portalu komunalnog preduzeća.</li>
        <li data-sr="rok od 24–48 sati bez mogućnosti žalbe ili alternativnih kanala za plaćanje." data-en="24–48 hour deadline without appeal possibility or alternative payment channels.">rok od 24–48 sati bez mogućnosti žalbe ili alternativnih kanala za plaćanje.</li>
        <li data-sr="kontakt odvraća od poziva kol centru komunalnog preduzeća za verifikaciju duga." data-en="contact discourages calling the utility company's call center to verify the debt.">kontakt odvraća od poziva kol centru komunalnog preduzeća za verifikaciju duga.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 10 pitanja pre hitne komunalne uplate" data-en="Checklist: 10 questions before urgent utility payment">Checklista: 10 pitanja pre hitne komunalne uplate</h2>
      <ul class="bullets">
        <li data-sr="Da li dug postoji na korisničkom portalu komunalnog preduzeća?" data-en="Does the debt exist on the utility company's customer portal?">Da li dug postoji na korisničkom portalu komunalnog preduzeća?</li>
        <li data-sr="Da li uplatne instrukcije u obaveštenju odgovaraju onima na redovnim mesečnim računima?" data-en="Do the payment instructions in the notice match those on regular monthly bills?">Da li uplatne instrukcije u obaveštenju odgovaraju onima na redovnim mesečnim računima?</li>
        <li data-sr="Da li komunalno preduzeće koristi telefon za hitnu naplatu?" data-en="Does the utility company use phone for urgent collection?">Da li komunalno preduzeće koristi telefon za hitnu naplatu?</li>
        <li data-sr="Da li je kontakt sposoban da potvrdi detalje ugovora koji su poznati samo korisniku?" data-en="Is the contact able to confirm contract details known only to the customer?">Da li je kontakt sposoban da potvrdi detalje ugovora koji su poznati samo korisniku?</li>
        <li data-sr="Da li je isključenje najavljeno pisanim rešenjem s rokom za žalbu?" data-en="Was disconnection announced with a written decision with an appeal deadline?">Da li je isključenje najavljeno pisanim rešenjem s rokom za žalbu?</li>
        <li data-sr="Da li kol centar komunalnog preduzeća potvrđuje postojanje duga?" data-en="Does the utility company's call center confirm the existence of the debt?">Da li kol centar komunalnog preduzeća potvrđuje postojanje duga?</li>
        <li data-sr="Da li URL linka u poruci odgovara zvaničnoj domeni komunalnog preduzeća?" data-en="Does the URL of the link in the message match the utility company's official domain?">Da li URL linka u poruci odgovara zvaničnoj domeni komunalnog preduzeća?</li>
        <li data-sr="Da li je obaveštenje o dugu stiglo i kroz redovne kanale (mesečni račun)?" data-en="Did the debt notice also arrive through regular channels (monthly bill)?">Da li je obaveštenje o dugu stiglo i kroz redovne kanale (mesečni račun)?</li>
        <li data-sr="Da li su mesečni računi i dalje stizali normalno u prethodnom periodu?" data-en="Did monthly bills continue to arrive normally in the previous period?">Da li su mesečni računi i dalje stizali normalno u prethodnom periodu?</li>
        <li data-sr="Da li pauza od 24h menja situaciju ili kontakt insistira na hitnosti?" data-en="Does a 24-hour pause change the situation or does the contact insist on urgency?">Da li pauza od 24h menja situaciju ili kontakt insistira na hitnosti?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="proveri stanje računa na korisničkom portalu komunalnog preduzeća." data-en="check account status on the utility company's customer portal.">proveri stanje računa na korisničkom portalu komunalnog preduzeća.</li>
        <li data-sr="pozovi kol centar komunalnog preduzeća iz imenika i pitaj o dugu." data-en="call the utility company's call center from the phone book and ask about the debt.">pozovi kol centar komunalnog preduzeća iz imenika i pitaj o dugu.</li>
        <li data-sr="ne daj karticne podatke telefonom ni putem linka koji je stigao u poruci." data-en="do not provide card details by phone or via a link received in a message.">ne daj karticne podatke telefonom ni putem linka koji je stigao u poruci.</li>
        <li data-sr="sačuvaj pismo ili poruku kao dokaz i prijavi incident policiji i komunalnom preduzeću." data-en="save the letter or message as evidence and report the incident to police and the utility company.">sačuvaj pismo ili poruku kao dokaz i prijavi incident policiji i komunalnom preduzeću.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li dug postoji na korisničkom portalu komunalnog preduzeća?" data-en="Does the debt exist on the utility company's customer portal?">Da li dug postoji na korisničkom portalu komunalnog preduzeća?</li>
            <li data-sr="Da li uplatne instrukcije odgovaraju onima na redovnim računima?" data-en="Do the payment instructions match those on regular bills?">Da li uplatne instrukcije odgovaraju onima na redovnim računima?</li>
            <li data-sr="Da li je komunalno preduzeće kontaktirano putem zvaničnog broja?" data-en="Was the utility company contacted via their official number?">Da li je komunalno preduzeće kontaktirano putem zvaničnog broja?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Komunalni dug se uvek može proveriti na portalu preduzeća za 2 minute." data-en="A utility debt can always be verified on the company's portal in 2 minutes.">Komunalni dug se uvek može proveriti na portalu preduzeća za 2 minute.</li>
            <li data-sr="Komunalno preduzeće ne naplaćuje račune karticom tokom telefonskog poziva." data-en="Utility companies do not collect bills by card during phone calls.">Komunalno preduzeće ne naplaćuje račune karticom tokom telefonskog poziva.</li>
            <li data-sr="Isključenje bez pisanog rešenja s rokom žalbe nije legalna procedura." data-en="Disconnection without a written decision with appeal deadline is not legal procedure.">Isključenje bez pisanog rešenja s rokom žalbe nije legalna procedura.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card sources" id="sources">
      <h2 data-sr="Povezane prevare" data-en="Related scams">Povezane prevare</h2>
      <ul class="bullets">
        <li><a href="government-impersonation.html" data-sr="Lažno predstavljanje državnih organa" data-en="Government impersonation scams">Lažno predstavljanje državnih organa</a></li>
        <li><a href="energy-supplier-switch-scam.html" data-sr="Prevare pri prelasku na drugog dobavljača energije" data-en="Energy supplier switch scams">Prevare pri prelasku na drugog dobavljača energije</a></li>
        <li><a href="telecom-contract-scam.html" data-sr="Prevare pri obnovi telekomunikacionih ugovora" data-en="Telecom contract renewal scams">Prevare pri obnovi telekomunikacionih ugovora</a></li>
        <li><a href="municipality-impersonation.html" data-sr="Lažno predstavljanje opštinskih organa" data-en="Municipality impersonation scams">Lažno predstavljanje opštinskih organa</a></li>
        <li><a href="phishing.html" data-sr="Fišing" data-en="Fišing">Fišing</a></li>
      </ul>
    </section>
  `
};
