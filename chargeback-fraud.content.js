window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["chargeback-fraud"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi chargeback prevara" data-en="Introduction: how chargeback fraud works">Uvod: kako radi chargeback prevara</h2>
      <p data-sr="Kupac kupi legitimno, primi robu i zatim lažno ospori naplatu. Banka refundira kupca, prodavac gubi robu i novac." data-en="Chargeback fraud (also known as friendly fraud) is a scheme in which a buyer legitimately purchases goods or services, receives them, and then falsely disputes the charge with their bank or card provider — claiming the transaction was unauthorized, goods were not received, or the transaction was fraudulent. The bank refunds the buyer, and the merchant loses both goods and money.">Kupac kupi legitimno, primi robu i zatim lažno ospori naplatu. Banka refundira kupca, prodavac gubi robu i novac.</p>
      <p data-sr="Chargeback mehanizam za zaštitu potrošača se zloupotrebljava. Posebno su pogođeni prodavci digitalnih dobara." data-en="The chargeback mechanism exists to protect consumers from real fraud. Chargeback fraud abuses it systematically. Online sellers of digital goods are particularly affected because returning digital content is not possible and delivery evidence is harder to prove.">Chargeback mehanizam za zaštitu potrošača se zloupotrebljava. Posebno su pogođeni prodavci digitalnih dobara.</p>
      <div class="callout" data-sr="<strong>Model:</strong> kupovina → primanje robe ili usluge → lažna disputa kod banke ('nisam ja', 'nije primljeno', 'prevara') → banka refundira → prodavac gubi." data-en="<strong>Model:</strong> purchase → receiving goods or service → false bank dispute ('not me', 'not received', 'fraud') → bank refunds → merchant loses."><strong>Model:</strong> kupovina → primanje robe ili usluge → lažna disputa kod banke ('nisam ja', 'nije primljeno', 'prevara') → banka refundira → prodavac gubi.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> prodavac izgubi robu i novac — banka povrati sredstva kupcu koji je lagao o transakciji." data-en="<strong>Threshold:</strong> the merchant loses goods and money — the bank refunds the buyer who lied about the transaction."><strong>Prag:</strong> prodavac izgubi robu i novac — banka povrati sredstva kupcu koji je lagao o transakciji.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika chargeback prevare" data-en="How it works: chargeback fraud mechanics">Kako generalno radi: mehanika chargeback prevare</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Što kupac prikazuje banci" data-en="What the buyer presents to the bank">Što kupac prikazuje banci</div>
          <ul class="bullets">
            <li data-sr="'nisam ja odobrio/la ovu transakciju' — tvrdnja o neautorizovanoj kupovini." data-en="I did not authorize this transaction' — claim of an unauthorized purchase.">'nisam ja odobrio/la ovu transakciju' — tvrdnja o neautorizovanoj kupovini.</li>
            <li data-sr="'roba nije primljena' — tvrdi se da dostava nikad nije stigla." data-en="goods were not received — claims delivery never arrived.">'roba nije primljena' — tvrdi se da dostava nikad nije stigla.</li>
            <li data-sr="'roba nije odgovarala opisu' — čak i kad to nije slučaj." data-en="goods did not match description — even when that is not the case.">'roba nije odgovarala opisu' — čak i kad to nije slučaj.</li>
            <li data-sr="'to je prevara' — što automatski pokreće zaštitni mehanizam banke." data-en="this is fraud — which automatically triggers the bank's protection mechanism.">'to je prevara' — što automatski pokreće zaštitni mehanizam banke.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Zašto prodavci teško pobijaju disputu" data-en="Why merchants struggle to defeat the dispute">Zašto prodavci teško pobijaju disputu</div>
          <ul class="bullets">
            <li data-sr="teret dokaza je na prodavcu — mora dokazati da je transakcija bila legitimna i isporuka izvršena." data-en="burden of proof is on the merchant — must prove the transaction was legitimate and delivery executed.">teret dokaza je na prodavcu — mora dokazati da je transakcija bila legitimna i isporuka izvršena.</li>
            <li data-sr="digitalni sadržaj i usluge nemaju fizičku otpremnicu ni potvrdu prijema." data-en="digital content and services have no physical shipping record or receipt of delivery.">digitalni sadržaj i usluge nemaju fizičku otpremnicu ni potvrdu prijema.</li>
            <li data-sr="mali prodavci nemaju resurse za dispute timove i zapis o svakoj transakciji." data-en="small merchants lack resources for dispute teams and records of every transaction.">mali prodavci nemaju resurse za dispute timove i zapis o svakoj transakciji.</li>
            <li data-sr="banka po defaultu štiti vlasnika kartice — terba izuzetno jak dokaz da se disputa preokrene." data-en="the bank by default protects the cardholder — exceptionally strong evidence is needed to overturn the dispute.">banka po defaultu štiti vlasnika kartice — terba izuzetno jak dokaz da se disputa preokrene.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)" data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Kupovina i primanje robe" data-en="Phase 1 — Purchase and goods receipt">Faza 1 — Kupovina i primanje robe</h3>
        <p data-sr="Kupac kupuje i prima robu ili uslugu. Disputa je planirana od početka ali dolazi tek po primanju." data-en="The buyer makes a regular purchase — usually online — and receives the goods or service. Up to this point the transaction is legitimate from the buyer's side. The planned dispute comes only after receipt.">Kupac kupuje i prima robu ili uslugu. Disputa je planirana od početka ali dolazi tek po primanju.</p>
        <ul class="bullets">
          <li data-sr="signal za prodavca: kupac koji kupuje skuplje digitalne artikle i odmah pita za procedure povrata." data-en="signal for merchant: buyer purchasing expensive digital items who immediately asks about return procedures.">signal za prodavca: kupac koji kupuje skuplje digitalne artikle i odmah pita za procedure povrata.</li>
          <li data-sr="signal za prodavca: kupac koji pokušava da plate karticom s koje su prethodno bile dispute." data-en="signal for merchant: buyer attempting to pay with a card that has had previous disputes.">signal za prodavca: kupac koji pokušava da plate karticom s koje su prethodno bile dispute.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> roba je isporučena ili usluga izvršena — kupac sada ima robu i novac sve dok disputa ne prođe." data-en="<strong>Threshold:</strong> goods are delivered or service rendered — the buyer now has both goods and money until the dispute goes through."><strong>Prag faze:</strong> roba je isporučena ili usluga izvršena — kupac sada ima robu i novac sve dok disputa ne prođe.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Lažna disputa kod banke" data-en="Phase 2 — False dispute with the bank">Faza 2 — Lažna disputa kod banke</h3>
        <p data-sr="Kupac prijavljuje transakciju banci. Banka pokreće chargeback i refundira iznos dok traže istraga." data-en="The buyer contacts the bank and reports the transaction as unauthorized, undelivered, or fraudulent. The bank initiates the chargeback procedure and temporarily or permanently refunds the amount to the buyer during the investigation.">Kupac prijavljuje transakciju banci. Banka pokreće chargeback i refundira iznos dok traže istraga.</p>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="card-not-present-fraud.html" data-sr="Zloupotreba kartice bez fizičkog prisustva" data-en="Card-not-present fraud">Zloupotreba kartice bez fizičkog prisustva</a></li>
            <li><a href="identity-theft.html" data-sr="Krađa identiteta" data-en="Identity theft">Krađa identiteta</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> banka refundira iznos kupcu — prodavac prima chargeback obaveštenje i ima rok za pobijanje." data-en="<strong>Threshold:</strong> the bank refunds the buyer — the merchant receives a chargeback notification and has a deadline to contest."><strong>Prag faze:</strong> banka refundira iznos kupcu — prodavac prima chargeback obaveštenje i ima rok za pobijanje.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Gubitak prodavca i chargeback troškovi" data-en="Phase 3 — Merchant loss and chargeback fees">Faza 3 — Gubitak prodavca i chargeback troškovi</h3>
        <p data-sr="Prodavac gubi transakcioni iznos, robu i chargeback naknadu. Visok chargeback rate može zatvoriti poslovni karticni nalog." data-en="The merchant loses the transaction amount, goods or service, and pays a chargeback fee to the card processor (usually 15–100 euros per case). If the merchant has a high chargeback rate, the card processor may close the account or increase fees.">Prodavac gubi transakcioni iznos, robu i chargeback naknadu. Visok chargeback rate može zatvoriti poslovni karticni nalog.</p>
        <div class="callout" data-sr="<strong>Prag faze:</strong> disputa je zaključena u korist kupca — nema pravnog leka osim ako prodavac ima neoboriv dokaz isporuke." data-en="<strong>Threshold:</strong> the dispute is concluded in the buyer's favor — there is no recourse unless the merchant has irrefutable proof of delivery."><strong>Prag faze:</strong> disputa je zaključena u korist kupca — nema pravnog leka osim ako prodavac ima neoboriv dokaz isporuke.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice za prodavce" data-en="Red flags for merchants">Crvene zastavice za prodavce</h2>
      <ul class="bullets">
        <li data-sr="kupac odmah pita za procedure povrata i refunda pre nego robu i primi." data-en="buyer immediately asks about return and refund procedures before receiving the goods.">kupac odmah pita za procedure povrata i refunda pre nego robu i primi.</li>
        <li data-sr="kupac kupuje skuplje digitalne dobara ili poklon bonove koji se ne mogu fizički povratiti." data-en="buyer purchases expensive digital goods or gift cards that cannot be physically returned.">kupac kupuje skuplje digitalne dobara ili poklon bonove koji se ne mogu fizički povratiti.</li>
        <li data-sr="ista adresa ili uređaj s više kartica koje imaju disputu historiju." data-en="same address or device with multiple cards that have a dispute history.">ista adresa ili uređaj s više kartica koje imaju disputu historiju.</li>
        <li data-sr="kupovina odmah posle kreiranja novog naloga bez prethodne istorije." data-en="purchase immediately after creating a new account with no prior history.">kupovina odmah posle kreiranja novog naloga bez prethodne istorije.</li>
        <li data-sr="više kupovina u kratkom periodu s istom karticom za maksimiziranje chargeback iznosa." data-en="multiple purchases in a short period with the same card to maximize chargeback amounts.">više kupovina u kratkom periodu s istom karticom za maksimiziranje chargeback iznosa.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 10 pitanja za prodavce pre i posle transakcije" data-en="Checklist: 10 questions for merchants before and after transaction">Checklista: 10 pitanja za prodavce pre i posle transakcije</h2>
      <ul class="bullets">
        <li data-sr="Da li čuvam dokaze isporuke za svaku transakciju — otpremnicu, potvrdni imejl, zapis isporuke?" data-en="Do I keep delivery evidence for every transaction — shipping receipt, confirmation email, delivery record?">Da li čuvam dokaze isporuke za svaku transakciju — otpremnicu, potvrdni imejl, zapis isporuke?</li>
        <li data-sr="Da li koristim AVS (Address Verification Service) i CVV proveru za online kartičane transakcije?" data-en="Do I use AVS (Address Verification Service) and CVV verification for online card transactions?">Da li koristim AVS (Address Verification Service) i CVV proveru za online kartičane transakcije?</li>
        <li data-sr="Da li je 3D Secure implementiran na mom prodajnom sajtu?" data-en="Is 3D Secure implemented on my sales site?">Da li je 3D Secure implementiran na mom prodajnom sajtu?</li>
        <li data-sr="Da li čuvam IP adresu, uređaj i geolokaciju svake transakcije?" data-en="Do I save the IP address, device, and geolocation of every transaction?">Da li čuvam IP adresu, uređaj i geolokaciju svake transakcije?</li>
        <li data-sr="Da li pratim chargeback rate — idealno ispod 0.5% po kartičnom procesoru?" data-en="Do I monitor my chargeback rate — ideally below 0.5% per card processor?">Da li pratim chargeback rate — idealno ispod 0.5% po kartičnom procesoru?</li>
        <li data-sr="Da li imam jasnu politiku povrata i refunda koja smanjuje 'nezadovoljstvo' kao razlog dispute?" data-en="Do I have a clear return and refund policy that reduces dissatisfaction' as a dispute reason?">Da li imam jasnu politiku povrata i refunda koja smanjuje 'nezadovoljstvo' kao razlog dispute?</li>
        <li data-sr="Da li koristim fraud scoring alat koji detektuje visokorizične kupce pre transakcije?" data-en="Do I use a fraud scoring tool that detects high-risk buyers before the transaction?">Da li koristim fraud scoring alat koji detektuje visokorizične kupce pre transakcije?</li>
        <li data-sr="Da li čuvam komunikaciju s kupcem (imejl, dopisivanje) koja potvrđuje dogovor i isporuku?" data-en="Do I preserve customer communication (email, chat) confirming the agreement and delivery?">Da li čuvam komunikaciju s kupcem (imejl, dopisivanje) koja potvrđuje dogovor i isporuku?</li>
        <li data-sr="Da li odmah odgovaram na chargeback obaveštenja u roku koji kartični procesor daje?" data-en="Do I respond immediately to chargeback notifications within the deadline the card processor provides?">Da li odmah odgovaram na chargeback obaveštenja u roku koji kartični procesor daje?</li>
        <li data-sr="Da li imam crnu listu kupaca s prethodnom disputom istorijom koja blokira ponovne kupovine?" data-en="Do I have a blacklist of buyers with a prior dispute history that blocks repeat purchases?">Da li imam crnu listu kupaca s prethodnom disputom istorijom koja blokira ponovne kupovine?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza (za prodavce)" data-en="If suspicion starts: action order (for merchants).">Ako sumnja krene: redosled poteza (za prodavce)</h2>
      <ol class="steps">
        <li data-sr="prikupite sve dokaze odmah: zapis isporuke, potvrdni imejl, IP adresu, vremensku oznaku." data-en="gather all evidence immediately: delivery record, confirmation email, IP address, timestamp.">prikupite sve dokaze odmah: zapis isporuke, potvrdni imejl, IP adresu, vremensku oznaku.</li>
        <li data-sr="pošaljite kompletnu dokumentaciju kartičnom procesoru u propisanom roku za pobijanje dispute." data-en="send complete documentation to the card processor within the required deadline for disputing the chargeback.">pošaljite kompletnu dokumentaciju kartičnom procesoru u propisanom roku za pobijanje dispute.</li>
        <li data-sr="kontaktirajte kupca direktno s dokazom isporuke — ponekad se disputa povuče kad se prezentuju dokazi." data-en="contact the buyer directly with proof of delivery — sometimes the dispute is withdrawn when evidence is presented.">kontaktirajte kupca direktno s dokazom isporuke — ponekad se disputa povuče kad se prezentuju dokazi.</li>
        <li data-sr="ako je prevara sistemska, prijavite je banci, kartičnom procesoru i organima koji se bave platnom prevarom." data-en="if the fraud is systematic, report it to the bank, card processor, and authorities dealing with payment fraud.">ako je prevara sistemska, prijavite je banci, kartičnom procesoru i organima koji se bave platnom prevarom.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome (prodavcu)" data-en="If you are helping someone (a merchant).">Ako pokušavaš da pomogneš nekome (prodavcu)</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li čuvaš dokaze isporuke za svaku transakciju?" data-en="Do you keep delivery proof for every transaction?">Da li čuvaš dokaze isporuke za svaku transakciju?</li>
            <li data-sr="Da li imaš zapis IP adrese, uređaja i geolokacije ove kupovine?" data-en="Do you have a record of the IP address, device, and geolocation of this purchase?">Da li imaš zapis IP adrese, uređaja i geolokacije ove kupovine?</li>
            <li data-sr="Da li si odgovorio/lažna chargeback u roku koji procesor daje?" data-en="Did you respond to the chargeback within the deadline the processor provides?">Da li si odgovorio/lažna chargeback u roku koji procesor daje?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Kompletna dokumentacija — isporuka, komunikacija, IP, uređaj — je jedina odbrana od chargeback prevare." data-en="Complete documentation — delivery, communication, IP, device — is the only defense against chargeback fraud.">Kompletna dokumentacija — isporuka, komunikacija, IP, uređaj — je jedina odbrana od chargeback prevare.</li>
            <li data-sr="3D Secure smanjuje chargeback rizik jer teret dokaza neautorizovane transakcije prelazi na banku." data-en="3D Secure reduces chargeback risk because the burden of proof for an unauthorized transaction shifts to the bank.">3D Secure smanjuje chargeback rizik jer teret dokaza neautorizovane transakcije prelazi na banku.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
