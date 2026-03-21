window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["fake-public-notary-fee-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
      <p data-sr="Prevarant nudi hitnu overu ili posrednika i traži avans pre potvrđenog termina kod pravog javnog beležnika." data-en="The fraudster exploits the need to notarize a contract, power of attorney, or statement and offers fast notarization or an intermediary who allegedly works with a notary. An advance, courier fee, or special charge is requested before a real appointment with an authorized notary is scheduled.">Prevarant nudi hitnu overu ili posrednika i traži avans pre potvrđenog termina kod pravog javnog beležnika.</p>
      <p data-sr="Pravi postupak ide kroz beležnički zapisnik i objavljene takse, ne kroz avans na tuđi račun iz poziva." data-en="A real procedure always includes party identification and a notary record at published fees, not payment to a private individual's account from a cold call.">Pravi postupak ide kroz beležnički zapisnik i objavljene takse, ne kroz avans na tuđi račun iz poziva.</p>
      <div class="callout" data-sr="<strong>Model:</strong> hitnost → posrednik ili imenovani beležnik → avans ili kurir → odlaganje termina → nova taksa → nestanak." data-en="<strong>Model:</strong> urgency → intermediary or named notary → advance or courier → appointment delay → new fee → disappearance."><strong>Model:</strong> hitnost → posrednik ili imenovani beležnik → avans ili kurir → odlaganje termina → nova taksa → nestanak.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi" data-en="How it generally works">Kako generalno radi</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Uvodi se poverenje" data-en="Trust building">Uvodi se poverenje</div>
          <ul class="bullets">
            <li data-sr="Ime javnog beležnika ili komore koje zvuče poznato." data-en="Notary or chamber names that sound familiar.">Ime javnog beležnika ili komore koje zvuče poznato.</li>
            <li data-sr="Lažna potvrda da je dokument već na čekanju ili odobren." data-en="Fake confirmation that the document is already queued or approved.">Lažna potvrda da je dokument već na čekanju ili odobren.</li>
            <li data-sr="Rok koji se poklapa sa vašim stvarnim rokom u poslu ili kupoprodaji." data-en="A deadline aligned with your real business or sale deadline.">Rok koji se poklapa sa vašim stvarnim rokom u poslu ili kupoprodaji.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Novac i podaci" data-en="Money and data">Novac i podaci</div>
          <ul class="bullets">
            <li data-sr="Avans na račun fizičkog lica ili firme bez jasnog ugovora o usluzi." data-en="Advance to a person or firm without a clear service contract.">Avans na račun fizičkog lica ili firme bez jasnog ugovora o usluzi.</li>
            <li data-sr="Zahtev za sken lične karte i ugovora pre uplate kurira." data-en="Request for ID and contract scans before paying the courier.">Zahtev za sken lične karte i ugovora pre uplate kurira.</li>
            <li data-sr="Naknada za hitnu overu mnogo iznad uobičajene tarife." data-en="Expedited notarization fee far above usual tariffs.">Naknada za hitnu overu mnogo iznad uobičajene tarife.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching)">Hronološki tok (faze + grananja)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Poruka o obavezi overe" data-en="Phase 1 — Message about notarization duty">Faza 1 — Poruka o obavezi overe</h3>
        <p data-sr="Stiže hitna poruka o obaveznoj overi sa kratkim rokom." data-en="A call, SMS, or email arrives saying you must notarize a document today or tomorrow for a bank, buyer, or authority.">Stiže hitna poruka o obaveznoj overi sa kratkim rokom.</p>
        <ul class="bullets">
          <li data-sr="signal: prvi kontakt ne dolazi od beležnika koga ste sami izabrali." data-en="signal: first contact is not from a notary you chose yourself.">signal: prvi kontakt ne dolazi od beležnika koga ste sami izabrali.</li>
          <li data-sr="signal: ne pominje se tačna adresa kancelarije i radno vreme za dolazak." data-en="signal: exact office address and hours for walk-in are not given.">signal: ne pominje se tačna adresa kancelarije i radno vreme za dolazak.</li>
          <li data-sr="signal: ton naglašava da ćete izgubiti posao ili avans ako ne platite odmah." data-en="signal: tone stresses you will lose the deal or deposit if you do not pay now.">signal: ton naglašava da ćete izgubiti posao ili avans ako ne platite odmah.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta poveruje da overa mora proći preko tog kanala." data-en="<strong>Phase threshold:</strong> the target believes notarization must go through that channel."><strong>Prag faze:</strong> meta poveruje da overa mora proći preko tog kanala.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Posrednik i avans" data-en="Phase 2 — Intermediary and advance">Faza 2 — Posrednik i avans</h3>
        <p data-sr="Posrednik traži avans za rezervaciju ili taksu pre susreta." data-en="A person is introduced who schedules the appointment and requests an advance to reserve a slot or pay the fee upfront.">Posrednik traži avans za rezervaciju ili taksu pre susreta.</p>
        <ul class="bullets">
          <li data-sr="signal: uplata ide na račun koji nije kancelarija javnog beležnika." data-en="signal: payment goes to an account that is not the notary's office.">signal: uplata ide na račun koji nije kancelarija javnog beležnika.</li>
          <li data-sr="signal: ne žele da potpišete predoveru u prisustvu beležnika pre plaćanja." data-en="signal: they refuse pre-check in the notary's presence before payment.">signal: ne žele da potpišete predoveru u prisustvu beležnika pre plaćanja.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="apostille-legalization-scam.html" data-sr="Prevara apostila i legalizacije" data-en="Apostille and legalization scam">Prevara apostila i legalizacije</a></li>
            <li><a href="government-impersonation.html" data-sr="Lažno predstavljanje države" data-en="Government impersonation">Lažno predstavljanje države</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta šalje prvu uplatu ili skenove dokumenata." data-en="<strong>Phase threshold:</strong> the target sends the first payment or document scans."><strong>Prag faze:</strong> meta šalje prvu uplatu ili skenove dokumenata.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Kurir i dodatni troškovi" data-en="Phase 3 — Courier and extra costs">Faza 3 — Kurir i dodatni troškovi</h3>
        <p data-sr="Nova sredstva se traže pod izgovorom kurira ili međunarodne overe." data-en="After the advance, a courier payment, shipment insurance, or international notarization fee is requested.">Nova sredstva se traže pod izgovorom kurira ili međunarodne overe.</p>
        <ul class="bullets">
          <li data-sr="signal: kurir nema ime firme i broj za proveru." data-en="signal: courier has no company name and number to verify.">signal: kurir nema ime firme i broj za proveru.</li>
          <li data-sr="signal: traže se gotovina na ruke umesto uplate na račun beležnika." data-en="signal: cash handoff is requested instead of paying the notary's account.">signal: traže se gotovina na ruke umesto uplate na račun beležnika.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta je uključena u lanac dodatnih naknada." data-en="<strong>Phase threshold:</strong> the target is caught in a chain of extra fees."><strong>Prag faze:</strong> meta je uključena u lanac dodatnih naknada.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Odlaganje termina" data-en="Phase 4 — Appointment delays">Faza 4 — Odlaganje termina</h3>
        <p data-sr="Datum overe se pomera uz nove iznose." data-en="The appointment shifts due to notary busy schedule, holidays, or extra paperwork, with another small payment.">Datum overe se pomera uz nove iznose.</p>
        <ul class="bullets">
          <li data-sr="signal: svako odlaganje traži još jednu uplatu." data-en="signal: each delay comes with another payment request.">signal: svako odlaganje traži još jednu uplatu.</li>
          <li data-sr="signal: ne dobijate pisani potvrđen termin sa pečatom kancelarije." data-en="signal: you receive no written confirmed appointment with office stamp.">signal: ne dobijate pisani potvrđen termin sa pečatom kancelarije.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="advance-fee-fraud.html" data-sr="Uplata unapred" data-en="Advance-fee fraud">Uplata unapred</a></li>
            <li><a href="real-estate-purchase-scam.html" data-sr="Kupovina nekretnine" data-en="Real estate purchase scam">Kupovina nekretnine</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta i dalje čeka overu dok je već platila više puta." data-en="<strong>Phase threshold:</strong> the target still waits for notarization after paying multiple times."><strong>Prag faze:</strong> meta i dalje čeka overu dok je već platila više puta.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Pokušaj kontakta pravog beležnika" data-en="Phase 5 — Contacting the real notary">Faza 5 — Pokušaj kontakta pravog beležnika</h3>
        <p data-sr="Zvanična kancelarija ne potvrđuje dogovor." data-en="When the target calls an office from the chamber's public list, they often learn no appointment exists or the notary name does not match.">Zvanična kancelarija ne potvrđuje dogovor.</p>
        <ul class="bullets">
          <li data-sr="signal: komora nema zabeležen posrednika koji vas je kontaktirao." data-en="signal: the chamber has no record of the intermediary who contacted you.">signal: komora nema zabeležen posrednika koji vas je kontaktirao.</li>
          <li data-sr="signal: broj sa koga ste zvani ne odgovara kancelarijskom broju." data-en="signal: the incoming number does not match the office line.">signal: broj sa koga ste zvani ne odgovara kancelarijskom broju.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta shvata da dogovor postoji samo u četu sa prevarantom." data-en="<strong>Phase threshold:</strong> the target realizes the agreement exists only in chat with the fraudster."><strong>Prag faze:</strong> meta shvata da dogovor postoji samo u četu sa prevarantom.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Prekid i prijava" data-en="Phase 6 — Stop and report">Faza 6 — Prekid i prijava</h3>
        <p data-sr="Prekid nastaje kad se zatraži lična provera ili banka reaguje." data-en="Contact stops when the target demands an in-person office visit with ID or when the bank blocks transfers.">Prekid nastaje kad se zatraži lična provera ili banka reaguje.</p>
        <ul class="bullets">
          <li data-sr="signal: prevarant prestaje da odgovara kada pitate za adresu kancelarije." data-en="signal: the fraudster stops replying when you ask for the office address.">signal: prevarant prestaje da odgovara kada pitate za adresu kancelarije.</li>
          <li data-sr="signal: isti broj koriste drugi korisnici za prijavu prevare." data-en="signal: others report the same number for fraud.">signal: isti broj koriste drugi korisnici za prijavu prevare.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="court-impersonation.html" data-sr="Lažni sudski pozivi" data-en="Fake court summons">Lažni sudski pozivi</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta prekida komunikaciju i čuva dokaz o uplatama." data-en="<strong>Phase threshold:</strong> the target ends communication and keeps payment evidence."><strong>Prag faze:</strong> meta prekida komunikaciju i čuva dokaz o uplatama.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Traže avans pre nego što ste ušli u kancelariju javnog beležnika." data-en="They ask for an advance before you enter the notary's office.">Traže avans pre nego što ste ušli u kancelariju javnog beležnika.</li>
        <li data-sr="Uplata ide na fizičko lice koje nije beležnik sa spiska komore." data-en="Payment goes to an individual who is not a listed notary.">Uplata ide na fizičko lice koje nije beležnik sa spiska komore.</li>
        <li data-sr="Ne mogu da date adresu i radno vreme kancelarije za sutra." data-en="They cannot give an address and office hours for tomorrow.">Ne mogu da date adresu i radno vreme kancelarije za sutra.</li>
        <li data-sr="Cena je fiksna pre uvida u broj stranica i vrstu isprave." data-en="The price is fixed before seeing page count and document type.">Cena je fiksna pre uvida u broj stranica i vrstu isprave.</li>
        <li data-sr="Kurir preuzima novac ili dokument van kancelarije bez overe." data-en="A courier collects money or documents outside the office without notarization.">Kurir preuzima novac ili dokument van kancelarije bez overe.</li>
        <li data-sr="Zabranjuju vam da pozovete beležnika direktno." data-en="They forbid you to call the notary directly.">Zabranjuju vam da pozovete beležnika direktno.</li>
        <li data-sr="Šalju link za uplatu koji nije sa sajta komore ili državnog portala." data-en="They send a payment link not from the chamber or state portal.">Šalju link za uplatu koji nije sa sajta komore ili državnog portala.</li>
        <li data-sr="Traže punu kopiju ugovora i ličnu kartu pre uplate kurira." data-en="They want a full contract copy and ID before courier payment.">Traže punu kopiju ugovora i ličnu kartu pre uplate kurira.</li>
        <li data-sr="Koriste generičke fraze evropska overa ili međunarodni pečat bez broja predmeta." data-en="They use vague phrases like European notarization or international stamp without a file number.">Koriste generičke fraze evropska overa ili međunarodni pečat bez broja predmeta.</li>
        <li data-sr="Pritisak da potpišete i platite istovremeno bez čitanja." data-en="Pressure to sign and pay simultaneously without reading.">Pritisak da potpišete i platite istovremeno bez čitanja.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Beležnik" data-en="Notary">Beležnik</div>
          <ul class="bullets">
            <li data-sr="Proverite ime na javnom spisku komore javnih beležnika." data-en="Verify the name on the chamber of notaries public list.">Proverite ime na javnom spisku komore javnih beležnika.</li>
            <li data-sr="Pozovite kancelariju na broj sa zvaničnog izvora, ne iz SMS-a." data-en="Call the office on an official source number, not from SMS.">Pozovite kancelariju na broj sa zvaničnog izvora, ne iz SMS-a.</li>
            <li data-sr="Zakažite lično termin i pitajte za tarifu pre uplate trećoj strani." data-en="Book in person and ask for the tariff before paying a third party.">Zakažite lično termin i pitajte za tarifu pre uplate trećoj strani.</li>
            <li data-sr="Uporedite visinu takse sa objavljenom skalom za tu vrstu isprave." data-en="Compare the fee to the published scale for that document type.">Uporedite visinu takse sa objavljenom skalom za tu vrstu isprave.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Novac" data-en="Money">Novac</div>
          <ul class="bullets">
            <li data-sr="Ne plaćajte avans na račun koji nije kancelarija ili beležnik sa ugovorom." data-en="Do not pay advance to an account that is not the office or contracted notary.">Ne plaćajte avans na račun koji nije kancelarija ili beležnik sa ugovorom.</li>
            <li data-sr="Odbijte gotovinu kuriru kao jedinu opciju." data-en="Refuse cash to a courier as the only option.">Odbijte gotovinu kuriru kao jedinu opciju.</li>
            <li data-sr="Banka može označiti primaoca kao rizičnog ako podelite uplatnicu." data-en="The bank may flag the beneficiary if you share the slip.">Banka može označiti primaoca kao rizičnog ako podelite uplatnicu.</li>
            <li data-sr="Sačekajte 24 sata i ponovo pozovite kancelariju pre druge uplate." data-en="Wait 24 hours and call the office again before a second payment.">Sačekajte 24 sata i ponovo pozovite kancelariju pre druge uplate.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
      <ul class="bullets">
        <li data-sr="Da li sam zvaničnim kanalom potvrdio da beležnik postoji na toj adresi?" data-en="Did I officially confirm the notary exists at that address?">Da li sam zvaničnim kanalom potvrdio da beležnik postoji na toj adresi?</li>
        <li data-sr="Da li sam video tarifnik u kancelariji ili na sajtu komore?" data-en="Did I see the fee schedule at the office or on the chamber site?">Da li sam video tarifnik u kancelariji ili na sajtu komore?</li>
        <li data-sr="Da li primalac uplate odgovara nazivu kancelarije?" data-en="Does the payee match the office name?">Da li primalac uplate odgovara nazivu kancelarije?</li>
        <li data-sr="Da li mi je posrednik dao pisan ugovor sa potpisom beležnika?" data-en="Did the intermediary give a written contract with the notary's signature?">Da li mi je posrednik dao pisan ugovor sa potpisom beležnika?</li>
        <li data-sr="Da li mogu da odložim overu jedan dan bez gubitka prava?" data-en="Can I delay notarization one day without losing rights?">Da li mogu da odložim overu jedan dan bez gubitka prava?</li>
        <li data-sr="Da li banka ili kupac zaista traže overu preko tog broja telefona?" data-en="Does the bank or buyer really require notarization through that phone number?">Da li banka ili kupac zaista traže overu preko tog broja telefona?</li>
        <li data-sr="Da li je cena mnogo veća od uobičajene za istu vrstu dokumenta?" data-en="Is the price much higher than usual for the same document type?">Da li je cena mnogo veća od uobičajene za istu vrstu dokumenta?</li>
        <li data-sr="Da li traže sken potpisanog ugovora pre nego što sam video beležnika?" data-en="Do they want a signed contract scan before you met the notary?">Da li traže sken potpisanog ugovora pre nego što sam video beležnika?</li>
        <li data-sr="Da li kurirska firma ima sajt i broj za povratni poziv?" data-en="Does the courier company have a website and callback number?">Da li kurirska firma ima sajt i broj za povratni poziv?</li>
        <li data-sr="Da li sam već platio i overa i dalje nije urađena?" data-en="Have I already paid and notarization is still not done?">Da li sam već platio i overa i dalje nije urađena?</li>
        <li data-sr="Da li bih ovu ponudu preporučio članu porodice bez provere?" data-en="Would I recommend this offer to a family member without checks?">Da li bih ovu ponudu preporučio članu porodice bez provere?</li>
        <li data-sr="Da li advokat kaže da je uplata posredniku neophodna?" data-en="Does a lawyer say paying the intermediary is necessary?">Da li advokat kaže da je uplata posredniku neophodna?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Prekinite dalju uplatu i sačuvajte poruke." data-en="Stop further payments and save messages.">Prekinite dalju uplatu i sačuvajte poruke.</li>
        <li data-sr="Pozovite komoru ili kancelariju sa zvaničnog sajta." data-en="Call the chamber or office from the official website.">Pozovite komoru ili kancelariju sa zvaničnog sajta.</li>
        <li data-sr="Zakažite overu direktno bez posrednika ako je moguće." data-en="Schedule notarization directly without an intermediary if possible.">Zakažite overu direktno bez posrednika ako je moguće.</li>
        <li data-sr="Obavestite banku ako je uplata već otišla." data-en="Notify your bank if a payment already went out.">Obavestite banku ako je uplata već otišla.</li>
        <li data-sr="Prijavite prevaru policiji sa brojevima i uplatnicama." data-en="Report fraud to police with numbers and slips.">Prijavite prevaru policiji sa brojevima i uplatnicama.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si pozvao beležnika na broj sa sajta komore?" data-en="Did you call the notary on the chamber website number?">Da li si pozvao beležnika na broj sa sajta komore?</li>
            <li data-sr="Da li si ikada video kancelariju na mapi i proverio radno vreme?" data-en="Have you seen the office on a map and checked opening hours?">Da li si ikada video kancelariju na mapi i proverio radno vreme?</li>
            <li data-sr="Da li primalac uplate ima vezu sa imenom sa spiska?" data-en="Does the payee relate to a name on the official list?">Da li primalac uplate ima vezu sa imenom sa spiska?</li>
            <li data-sr="Da li bi pravi beležnik tražio gotovinu kuriru?" data-en="Would a real notary ask for cash to a courier?">Da li bi pravi beležnik tražio gotovinu kuriru?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Hajde da zajedno zakažemo termin direktno u kancelariji." data-en="Let's book an appointment directly at the office together.">Hajde da zajedno zakažemo termin direktno u kancelariji.</li>
            <li data-sr="Avans na lični račun nije standardna praksa javnog beležnika." data-en="Advance to a personal account is not standard notary practice.">Avans na lični račun nije standardna praksa javnog beležnika.</li>
            <li data-sr="Jedan dan kašnjenja ne ukida pravo na overu kod pravog beležnika." data-en="One day of delay does not cancel your right to notarize with a real notary.">Jedan dan kašnjenja ne ukida pravo na overu kod pravog beležnika.</li>
            <li data-sr="Ne šalji sken ugovora lincu koji te zove neočekivano." data-en="Do not send a contract scan to someone who cold-called you.">Ne šalji sken ugovora lincu koji te zove neočekivano.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
