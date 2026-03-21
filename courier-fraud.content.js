window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["courier-fraud"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi kurirska prevara" data-en="Introduction: how courier fraud works">Uvod: kako radi kurirska prevara</h2>
      <p data-sr="Lažni bankovni ili policijski agent poziva da pripremi žrtvu, zatim fizički kurir dolazi po karticu, gotovinu ili nakit. Prisustvo kurira gradi lažnu legitimnost." data-en="Courier fraud is a variant of bank impersonation in which the fraudster sends a physical courier to the victim's address to collect their bank card, cash, or jewelry. A call prepares the victim — a fake bank or police agent explains an 'incident' and requests the card for 'analysis' or 'protection'. The courier arrives as confirmation of institutional legitimacy.">Lažni bankovni ili policijski agent poziva da pripremi žrtvu, zatim fizički kurir dolazi po karticu, gotovinu ili nakit. Prisustvo kurira gradi lažnu legitimnost.</p>
      <p data-sr="Fizičko prisustvo kurira je ubedljivo. Kartice se odmah troše pre nego žrtva reaguje." data-en="The physical presence of a courier is psychologically convincing — fraudsters use uniformed delivery people or taxi drivers who are unaware of the scheme. Cards are immediately used for cash withdrawals or online purchases before the victim realizes what is happening.">Fizičko prisustvo kurira je ubedljivo. Kartice se odmah troše pre nego žrtva reaguje.</p>
      <div class="callout" data-sr="<strong>Model:</strong> poziv → banka/policija → incident na računu → 'potrebna je kartica za analizu' → kurir dolazi → PIN se otkriva → neovlašćena potrošnja." data-en="<strong>Model:</strong> call → bank/police → account incident → 'card needed for analysis' → courier arrives → PIN disclosed → unauthorized spending."><strong>Model:</strong> poziv → banka/policija → incident na računu → 'potrebna je kartica za analizu' → kurir dolazi → PIN se otkriva → neovlašćena potrošnja.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> banka nikad ne šalje kurira po karticu niti traži PIN iz bezbednosnih razloga." data-en="<strong>Threshold:</strong> a bank never sends a courier to collect a card or asks for a PIN for security reasons."><strong>Prag:</strong> banka nikad ne šalje kurira po karticu niti traži PIN iz bezbednosnih razloga.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika kurirske prevare" data-en="How it works: courier fraud mechanics">Kako generalno radi: mehanika kurirske prevare</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gradi autoritet i verodostojnost" data-en="What builds authority and credibility">Šta gradi autoritet i verodostojnost</div>
          <ul class="bullets">
            <li data-sr="spoofing broja banke ili policije u inicijalnom pozivu." data-en="spoofing the bank or police number in the initial call.">spoofing broja banke ili policije u inicijalnom pozivu.</li>
            <li data-sr="navodna 'sumnjiva transakcija' opisana s preciznim brojevima i datumima." data-en="an alleged suspicious transaction' described with precise figures and dates.">navodna 'sumnjiva transakcija' opisana s preciznim brojevima i datumima.</li>
            <li data-sr="fizičko prisustvo kurira kao 'dokaz' institucionalnog angažmana." data-en="physical presence of a courier as proof of institutional engagement.">fizičko prisustvo kurira kao 'dokaz' institucionalnog angažmana.</li>
            <li data-sr="instrukcija da se kartica stavi u kovertu i preda kuriru — uz PIN pisan na kovrti." data-en="instruction to put the card in an envelope and hand it to the courier — with PIN written on the envelope.">instrukcija da se kartica stavi u kovertu i preda kuriru — uz PIN pisan na kovrti.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Kako se uvodi predaja kartice" data-en="How card handover is introduced">Kako se uvodi predaja kartice</div>
          <ul class="bullets">
            <li data-sr="kartica se traži za 'forenzičku analizu' ili 'deaktiviranje kompromitovane kartice'." data-en="the card is requested for forensic analysis or 'deactivating the compromised card'.">kartica se traži za 'forenzičku analizu' ili 'deaktiviranje kompromitovane kartice'.</li>
            <li data-sr="nova kartica je 'na putu' i banka samo treba prethodno da 'povuče staru'." data-en="a new card is on the way and the bank just needs to 'retrieve the old one' first.">nova kartica je 'na putu' i banka samo treba prethodno da 'povuče staru'.</li>
            <li data-sr="gotovina i nakit se traže za 'forenzičko označavanje' radi praćenja lopova." data-en="cash and jewelry are requested for forensic marking' to traže the thieves.">gotovina i nakit se traže za 'forenzičko označavanje' radi praćenja lopova.</li>
            <li data-sr="vremenski rok — 'kurir stiže za sat' — onemogućava nezavisnu proveru." data-en="time deadline — the courier arrives in an hour' — prevents independent verification.">vremenski rok — 'kurir stiže za sat' — onemogućava nezavisnu proveru.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)" data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Telefonska priprema i uspostavljanje scenarija" data-en="Phase 1 — Phone preparation and scenario establishment">Faza 1 — Telefonska priprema i uspostavljanje scenarija</h3>
        <p data-sr="Lažni bankar ili policajac uvodi incident s karticom i traži hitnu akciju." data-en="The victim receives a call from a fake banker or police officer. An incident is introduced — suspicious transaction, compromised card, caught thief who has a 'duplicate card'. Urgent action is requested.">Lažni bankar ili policajac uvodi incident s karticom i traži hitnu akciju.</p>
        <ul class="bullets">
          <li data-sr="signal: banka nikad ne kontaktira žrtvu zbog kompromitovane kartice telefonom i ne šalje kurira." data-en="signal: a bank never contacts the victim about a compromised card by phone and never sends a courier.">signal: banka nikad ne kontaktira žrtvu zbog kompromitovane kartice telefonom i ne šalje kurira.</li>
          <li data-sr="signal: instrukcija da se kurir sačeka pre poziva banci je definitivan signal prevare." data-en="signal: instruction to wait for the courier before calling the bank is a definitive fraud signal.">signal: instrukcija da se kurir sačeka pre poziva banci je definitivan signal prevare.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> žrtva prihvata da će sačekati kurira." data-en="<strong>Threshold:</strong> the victim agrees to wait for the courier."><strong>Prag faze:</strong> žrtva prihvata da će sačekati kurira.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Dolazak kurira i predaja kartice" data-en="Phase 2 — Courier arrival and card handover">Faza 2 — Dolazak kurira i predaja kartice</h3>
        <p data-sr="Kurir preuzima karticu i PIN. Kartica se odmah koristi. Kurir je često nesvesna treća strana." data-en="The courier arrives — often uniformed or in a vehicle with a recognizable company logo. They collect envelopes containing the card and PIN. In some cases the victim is instructed to include the PIN on a separate sheet inside the envelope 'for ownership confirmation'. The courier leaves; the attacker immediately uses the card.">Kurir preuzima karticu i PIN. Kartica se odmah koristi. Kurir je često nesvesna treća strana.</p>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="cash-to-gold-scam.html" data-sr="Prevara sa gotovinom i zlatom" data-en="Cash-to-gold scam">Prevara sa gotovinom i zlatom</a></li>
            <li><a href="bank-impersonation.html" data-sr="Lažna banka (bankovni prevarant)" data-en="Bank impersonation scam">Lažna banka (bankovni prevarant)</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> čim je kartica preuzeta, ona se odmah koristi i blokada retko može zaustaviti gubitak." data-en="<strong>Threshold:</strong> as soon as the card is collected, it is immediately used and blocking rarely stops the loss."><strong>Prag faze:</strong> čim je kartica preuzeta, ona se odmah koristi i blokada retko može zaustaviti gubitak.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="banka ili policija šalju kurira po karticu — ovo se nikada ne dešava u legitimnoj proceduri." data-en="bank or police sending a courier for a card — this never happens in legitimate procedure.">banka ili policija šalju kurira po karticu — ovo se nikada ne dešava u legitimnoj proceduri.</li>
        <li data-sr="traženje PIN-a telefonom ili pisanjem na koverti — banka nikad ne traži PIN." data-en="requesting PIN by phone or written on an envelope — a bank never asks for the PIN.">traženje PIN-a telefonom ili pisanjem na koverti — banka nikad ne traži PIN.</li>
        <li data-sr="instrukcija da ne pozivate banku pre dolaska kurira." data-en="instruction not to call the bank before the courier arrives.">instrukcija da ne pozivate banku pre dolaska kurira.</li>
        <li data-sr="gotovina, nakit ili zlatnici se traže za 'forenzičko označavanje'." data-en="cash, jewelry, or gold coins requested for forensic marking.">gotovina, nakit ili zlatnici se traže za 'forenzičko označavanje'.</li>
        <li data-sr="vremenski pritisak — 'kurir dolazi za sat' — koji sprečava proveru." data-en="time pressure — courier coming in an hour — that prevents verification.">vremenski pritisak — 'kurir dolazi za sat' — koji sprečava proveru.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 10 pitanja pre dolaska kurira ili predaje ikakve imovine" data-en="Checklist: 10 questions before any courier arrives or any property is handed over">Checklista: 10 pitanja pre dolaska kurira ili predaje ikakve imovine</h2>
      <ul class="bullets">
        <li data-sr="Da li je banka ikad pre slala kurira po karticu — po pravilu nikad ne šalje?" data-en="Has a bank ever sent a courier for a card before — as a rule, it never does?">Da li je banka ikad pre slala kurira po karticu — po pravilu nikad ne šalje?</li>
        <li data-sr="Da li bi pozivanje banke na broju s poleđine kartice potvrdilo dolazak kurira?" data-en="Would calling the bank at the number on the back of the card confirm the courier's arrival?">Da li bi pozivanje banke na broju s poleđine kartice potvrdilo dolazak kurira?</li>
        <li data-sr="Da li se PIN traži — banka nikad ne traži PIN telefonom ni na koverti?" data-en="Is a PIN being requested — a bank never asks for a PIN by phone or on an envelope?">Da li se PIN traži — banka nikad ne traži PIN telefonom ni na koverti?</li>
        <li data-sr="Da li se gotovina ili nakit traže radi 'forenzike' — to ne radi nijedna legitimna institucija?" data-en="Is cash or jewelry requested for forensics' — no legitimate institution does that?">Da li se gotovina ili nakit traže radi 'forenzike' — to ne radi nijedna legitimna institucija?</li>
        <li data-sr="Da li je agent tražio da ne kontaktiram banku dok kurir ne dođe?" data-en="Did the agent ask me not to contact the bank until the courier arrives?">Da li je agent tražio da ne kontaktiram banku dok kurir ne dođe?</li>
        <li data-sr="Da li je kurir uniformisan ili ima logotip poznate firme — to ne potvrđuje legitimnost naloga?" data-en="Is the courier uniformed or bearing a company logo — that does not confirm the instruction's legitimacy?">Da li je kurir uniformisan ili ima logotip poznate firme — to ne potvrđuje legitimnost naloga?</li>
        <li data-sr="Da li bi odlazak u filijalu banke fizički razrešio situaciju bez predaje kartice?" data-en="Would visiting a bank branch in person resolve the situation without handing over the card?">Da li bi odlazak u filijalu banke fizički razrešio situaciju bez predaje kartice?</li>
        <li data-sr="Da li sam posavetovao/la se sa nekim bliskim pre odluke?" data-en="Have I consulted someone close before deciding?">Da li sam posavetovao/la se sa nekim bliskim pre odluke?</li>
        <li data-sr="Da li se oseća pritisak koji mi smanjuje vreme za razmišljanje?" data-en="Is there pressure reducing my time to think?">Da li se oseća pritisak koji mi smanjuje vreme za razmišljanje?</li>
        <li data-sr="Da li sam siguran/na da agent nije prethodno saznao može podatke kroz fišing ili curenje podataka?" data-en="Am I certain the agent did not previously learn my data through phishing or a data breach?">Da li sam siguran/na da agent nije prethodno saznao može podatke kroz fišing ili curenje podataka?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="ne otvarajte vrata kuriru — pozovite banku na broju s poleđine kartice pre toga." data-en="do not open the door to the courier — call the bank at the number on the back of your card first.">ne otvarajte vrata kuriru — pozovite banku na broju s poleđine kartice pre toga.</li>
        <li data-sr="ako ste predali karticu, odmah je blokirajte putem aplikacije ili poziva banci." data-en="if you handed over the card, immediately block it via app or by calling the bank.">ako ste predali karticu, odmah je blokirajte putem aplikacije ili poziva banci.</li>
        <li data-sr="prijavite incident policiji s opisom kurira, vozila i broja koji je zvao." data-en="report the incident to police with a description of the courier, vehicle, and calling number.">prijavite incident policiji s opisom kurira, vozila i broja koji je zvao.</li>
        <li data-sr="obavesti banku o svim detaljima — banka može pratiti korišćenje kartice." data-en="inform the bank of all details — the bank can track card usage.">obavesti banku o svim detaljima — banka može pratiti korišćenje kartice.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li banka ikad pre tražila da predaš karticu kuriru?" data-en="Has a bank ever asked you to hand the card to a courier before?">Da li banka ikad pre tražila da predaš karticu kuriru?</li>
            <li data-sr="Da li su tražili PIN — usmeno ili pisanjem?" data-en="Did they ask for the PIN — verbally or written?">Da li su tražili PIN — usmeno ili pisanjem?</li>
            <li data-sr="Da li si pozvao/la banku na broju s poleđine kartice pre nego si se složio/la?" data-en="Did you call the bank at the number on the back of the card before agreeing?">Da li si pozvao/la banku na broju s poleđine kartice pre nego si se složio/la?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Banka nikad ne šalje kurira po karticu — to je pravilo bez izuzetka." data-en="A bank never sends a courier for a card — that is a rule without exception.">Banka nikad ne šalje kurira po karticu — to je pravilo bez izuzetka.</li>
            <li data-sr="Hajde odmah da pozovemo banku na broju s poleđine kartice — to će razrešiti sve sumnje." data-en="Let's call the bank right now at the number on the back of the card — that will clear all doubts.">Hajde odmah da pozovemo banku na broju s poleđine kartice — to će razrešiti sve sumnje.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
