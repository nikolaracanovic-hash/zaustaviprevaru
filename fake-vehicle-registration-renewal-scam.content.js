window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["fake-vehicle-registration-renewal-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
      <p data-sr="Lažni SMS ili imejl imitira saobraćajnu službu ili portal države." data-en="The message claims vehicle registration, plates, or driving licence expiry and you must pay or confirm details immediately via a link. The goal is card data theft, identity data, or payment to a wrong account.">Lažni SMS ili imejl imitira saobraćajnu službu ili portal države.</p>
      <p data-sr="Uvek proverite domen ručno, bez klika na link iz poruke." data-en="Real renewal goes through a portal or counter whose domain you know or that is linked from the ministry site, not a shortened link in a message.">Uvek proverite domen ručno, bez klika na link iz poruke.</p>
      <div class="callout" data-sr="<strong>Model:</strong> SMS → istek → link → forma → kartica ili uplata → nema obnove u sistemu." data-en="<strong>Model:</strong> SMS → expiry → link → form → card or payment → no renewal in system."><strong>Model:</strong> SMS → istek → link → forma → kartica ili uplata → nema obnove u sistemu.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi" data-en="How it generally works">Kako generalno radi</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Ulaz" data-en="Entry">Ulaz</div>
          <ul class="bullets">
            <li data-sr="SMS sa skraćenim linkom ili lažnim brojem pošiljaoca." data-en="SMS with shortened link or spoofed sender number.">SMS sa skraćenim linkom ili lažnim brojem pošiljaoca.</li>
            <li data-sr="Imejl koji kopira grafiku portala ali sa pogrešnim domenom." data-en="Email copying portal graphics but wrong domain.">Imejl koji kopira grafiku portala ali sa pogrešnim domenom.</li>
            <li data-sr="Poziv robota koji traži potvrdu registracije tasterima." data-en="Robot call asking to confirm registration via keypad.">Poziv robota koji traži potvrdu registracije tasterima.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Šteta" data-en="Harm">Šteta</div>
          <ul class="bullets">
            <li data-sr="Krađa podataka kartice i pokušaj daljih transakcija." data-en="Card data theft and further transaction attempts.">Krađa podataka kartice i pokušaj daljih transakcija.</li>
            <li data-sr="Prikupljanje brojeva tablica i JMBG za druge prevare." data-en="Collection of plate numbers and national ID for other scams.">Prikupljanje brojeva tablica i JMBG za druge prevare.</li>
            <li data-sr="Naplata administrativne takse bez ikakve evidencije u registru." data-en="Administrative fee charge with no registry record.">Naplata administrativne takse bez ikakve evidencije u registru.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching)">Hronološki tok (faze + grananja)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Upozorenje o isteku" data-en="Phase 1 — Expiry warning">Faza 1 — Upozorenje o isteku</h3>
        <p data-sr="Hitnost je prvi alat prevare." data-en="The message cites a near or past expiry date and threatens a fine or driving ban.">Hitnost je prvi alat prevare.</p>
        <ul class="bullets">
          <li data-sr="signal: datum ne odgovara vašoj saobraćajnoj dozvoli ili registraciji." data-en="signal: date does not match your licence or registration.">signal: datum ne odgovara vašoj saobraćajnoj dozvoli ili registraciji.</li>
          <li data-sr="signal: poruka nije u istom jeziku koji koristi zvanični portal." data-en="signal: message language does not match the official portal.">signal: poruka nije u istom jeziku koji koristi zvanični portal.</li>
          <li data-sr="signal: link je skraćenica ili nepoznat poddomen." data-en="signal: link is a shortener or unknown subdomain.">signal: link je skraćenica ili nepoznat poddomen.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta klikne link iz znatiželje ili straha." data-en="<strong>Phase threshold:</strong> the target clicks the link from curiosity or fear."><strong>Prag faze:</strong> meta klikne link iz znatiželje ili straha.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Lažna forma" data-en="Phase 2 — Fake form">Faza 2 — Lažna forma</h3>
        <p data-sr="Forma prikuplja sve što treba za zloupotrebu." data-en="The page asks national ID, plate number, card number, and CVV under a fee pretext.">Forma prikuplja sve što treba za zloupotrebu.</p>
        <ul class="bullets">
          <li data-sr="signal: traži se CVV za verifikaciju vlasništva." data-en="signal: CVV is requested for ownership verification.">signal: traži se CVV za verifikaciju vlasništva.</li>
          <li data-sr="signal: nema HTTPS ili sertifikat je sumnjiv." data-en="signal: no HTTPS or certificate is suspicious.">signal: nema HTTPS ili sertifikat je sumnjiv.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="smishing.html" data-sr="Smišing" data-en="Smishing">Smišing</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> uneti su lični i platni podaci." data-en="<strong>Phase threshold:</strong> personal and payment data were entered."><strong>Prag faze:</strong> uneti su lični i platni podaci.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Lažna uplata" data-en="Phase 3 — Fake payment">Faza 3 — Lažna uplata</h3>
        <p data-sr="Prva transakcija ili pokušaj ide odmah." data-en="A fee is charged to the card or an error is shown and a second card is requested.">Prva transakcija ili pokušaj ide odmah.</p>
        <ul class="bullets">
          <li data-sr="signal: banka šalje upozorenje o sumnjivoj transakciji." data-en="signal: bank sends a suspicious transaction alert.">signal: banka šalje upozorenje o sumnjivoj transakciji.</li>
          <li data-sr="signal: iznos ne odgovara objavljenoj tarifi na zvaničnom sajtu." data-en="signal: amount does not match the tariff on the official site.">signal: iznos ne odgovara objavljenoj tarifi na zvaničnom sajtu.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> novac je napustio račun ili je odobren 3DS korak." data-en="<strong>Phase threshold:</strong> money left the account or a 3DS step was approved."><strong>Prag faze:</strong> novac je napustio račun ili je odobren 3DS korak.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Ponovni zahtev" data-en="Phase 4 — Repeat request">Faza 4 — Ponovni zahtev</h3>
        <p data-sr="Obrazac višestrukih pokušaja prati prvu uplatu." data-en="They say payment failed and ask again with a higher amount or other cards.">Obrazac višestrukih pokušaja prati prvu uplatu.</p>
        <ul class="bullets">
          <li data-sr="signal: ista stranica traži treći pokušaj." data-en="signal: the same page asks for a third attempt.">signal: ista stranica traži treći pokušaj.</li>
          <li data-sr="signal: podrška u četu traži kod iz aplikacije banke." data-en="signal: chat support asks for the banking app code.">signal: podrška u četu traži kod iz aplikacije banke.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="card-not-present-fraud.html" data-sr="Plaćanje bez kartice" data-en="Card-not-present fraud">Plaćanje bez kartice</a></li>
            <li><a href="payment-link-scam.html" data-sr="Lažni link za plaćanje" data-en="Payment link scam">Lažni link za plaćanje</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta je potvrdila više od jedne transakcije." data-en="<strong>Phase threshold:</strong> the target confirmed more than one transaction."><strong>Prag faze:</strong> meta je potvrdila više od jedne transakcije.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Provera u sistemu" data-en="Phase 5 — System check">Faza 5 — Provera u sistemu</h3>
        <p data-sr="Prava evidencija ne potvrđuje lažni portal." data-en="The official portal or counter shows no renewal or payment trace from the message.">Prava evidencija ne potvrđuje lažni portal.</p>
        <ul class="bullets">
          <li data-sr="signal: datum isteka u sistemu je drugačiji od poruke." data-en="signal: system expiry date differs from the message.">signal: datum isteka u sistemu je drugačiji od poruke.</li>
          <li data-sr="signal: službenik nema evidenciju uplate sa tog naloga." data-en="signal: clerk has no record of payment from that account.">signal: službenik nema evidenciju uplate sa tog naloga.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta vidi neslaganje zvaničnog i lažnog kanala." data-en="<strong>Phase threshold:</strong> the target sees mismatch between official and fake channel."><strong>Prag faze:</strong> meta vidi neslaganje zvaničnog i lažnog kanala.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Blokada kartice i prijava" data-en="Phase 6 — Card block and report">Faza 6 — Blokada kartice i prijava</h3>
        <p data-sr="Brza reakcija smanjuje dalju štetu." data-en="The bank blocks the card and the victim reports data theft and saves page screenshots.">Brza reakcija smanjuje dalju štetu.</p>
        <ul class="bullets">
          <li data-sr="signal: pojavljuju se nove transakcije u inostranstvu." data-en="signal: new foreign transactions appear.">signal: pojavljuju se nove transakcije u inostranstvu.</li>
          <li data-sr="signal: link prestaje da radi posle nekoliko dana." data-en="signal: link stops working after a few days.">signal: link prestaje da radi posle nekoliko dana.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="fake-permit-license-scam.html" data-sr="Lažne dozvole" data-en="Fake permit scams">Lažne dozvole</a></li>
            <li><a href="toll-road-scam.html" data-sr="Lažne putarine" data-en="Toll scams">Lažne putarine</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> prekinut je dalji gubitak novca." data-en="<strong>Phase threshold:</strong> further money loss is stopped."><strong>Prag faze:</strong> prekinut je dalji gubitak novca.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Registracija ili dozvola ističu sutra bez prethodnog pisma države." data-en="Registration or licence expires tomorrow without prior state mail.">Registracija ili dozvola ističu sutra bez prethodnog pisma države.</li>
        <li data-sr="Link je skraćenica ili domen koji ne liči na ministarstvo." data-en="Link is a shortener or domain unlike the ministry.">Link je skraćenica ili domen koji ne liči na ministarstvo.</li>
        <li data-sr="Traže CVV ili PIN za bilo koji korak obnove." data-en="They ask for CVV or PIN for any renewal step.">Traže CVV ili PIN za bilo koji korak obnove.</li>
        <li data-sr="Plaćanje ide na ime fizičkog lica ili nepoznate firme." data-en="Payment goes to an individual or unknown company.">Plaćanje ide na ime fizičkog lica ili nepoznate firme.</li>
        <li data-sr="Robotski glas traži brojeve sa tastature." data-en="Robot voice asks for keypad numbers.">Robotski glas traži brojeve sa tastature.</li>
        <li data-sr="Poruka na engleskom ako obično koristite srpski portal." data-en="Message in English if you usually use a Serbian portal.">Poruka na engleskom ako obično koristite srpski portal.</li>
        <li data-sr="Isti tekst poruke prijavljen je na forumu kao prevara." data-en="Same message text reported on forums as fraud.">Isti tekst poruke prijavljen je na forumu kao prevara.</li>
        <li data-sr="Nema mogućnosti da sačuvate potvrdu u PDF sa zvaničnim pečatom." data-en="No way to save a PDF confirmation with official stamp.">Nema mogućnosti da sačuvate potvrdu u PDF sa zvaničnim pečatom.</li>
        <li data-sr="Stranica traži pristup kameri ili SMS dozvolu van uobičajenog 3DS." data-en="Page asks for camera or SMS permission beyond usual 3DS.">Stranica traži pristup kameri ili SMS dozvolu van uobičajenog 3DS.</li>
        <li data-sr="Pritisak da završite za 10 minuta." data-en="Pressure to finish within 10 minutes.">Pritisak da završite za 10 minuta.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Rokovi" data-en="Deadlines">Rokovi</div>
          <ul class="bullets">
            <li data-sr="Uporedite datum isteka sa saobraćajnom dozvolom ili saobraćajnom knjižicom." data-en="Compare expiry to your licence or vehicle documents.">Uporedite datum isteka sa saobraćajnom dozvolom ili saobraćajnom knjižicom.</li>
            <li data-sr="Uđite na portal ručnim kucanjem adrese iz zvaničnog sajta." data-en="Open the portal by typing the address from the official site.">Uđite na portal ručnim kucanjem adrese iz zvaničnog sajta.</li>
            <li data-sr="Pitajte šalter šta važi za vaš konkretan slučaj." data-en="Ask the counter what applies in your specific case.">Pitajte šalter šta važi za vaš konkretan slučaj.</li>
            <li data-sr="Proverite da li država šalje obaveštenje u e-sanduče ako ga koristite." data-en="Check whether the state sent notice to your e-inbox if you use one.">Proverite da li država šalje obaveštenje u e-sanduče ako ga koristite.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Plaćanje" data-en="Payment">Plaćanje</div>
          <ul class="bullets">
            <li data-sr="Ne unosite karticu na stranicu otvorenu iz SMS linka." data-en="Do not enter card data on a page opened from an SMS link.">Ne unosite karticu na stranicu otvorenu iz SMS linka.</li>
            <li data-sr="Uporedite iznos sa tarifnikom na zvaničnom sajtu." data-en="Compare amount to the tariff on the official website.">Uporedite iznos sa tarifnikom na zvaničnom sajtu.</li>
            <li data-sr="Pozovite banku ako je transakcija već prošla." data-en="Call the bank if a transaction already went through.">Pozovite banku ako je transakcija već prošla.</li>
            <li data-sr="Obavestite policiju sa brojem pošiljaoca i linkom." data-en="Notify police with sender number and link.">Obavestite policiju sa brojem pošiljaoca i linkom.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
      <ul class="bullets">
        <li data-sr="Da li datum u poruci odgovara mom dokumentu?" data-en="Does the message date match my document?">Da li datum u poruci odgovara mom dokumentu?</li>
        <li data-sr="Da li sam otvorio sajt bez klika na link?" data-en="Did I open the site without clicking the link?">Da li sam otvorio sajt bez klika na link?</li>
        <li data-sr="Da li domen odgovara ministarstvu koje ručno ukucam?" data-en="Does the domain match the ministry I type manually?">Da li domen odgovara ministarstvu koje ručno ukucam?</li>
        <li data-sr="Da li bih ikada uneo CVV na ovakvoj stranici?" data-en="Would I ever enter CVV on a page like this?">Da li bih ikada uneo CVV na ovakvoj stranici?</li>
        <li data-sr="Da li primalac uplate postoji u zvaničnom uputstvu?" data-en="Does the payee exist in official instructions?">Da li primalac uplate postoji u zvaničnom uputstvu?</li>
        <li data-sr="Da li je cena ista kao na tarifniku?" data-en="Is the price the same as the tariff?">Da li je cena ista kao na tarifniku?</li>
        <li data-sr="Da li mi banka preporučuje da nastavim uplatu?" data-en="Does my bank recommend continuing the payment?">Da li mi banka preporučuje da nastavim uplatu?</li>
        <li data-sr="Da li je poruka ista kao kod drugih vozača danas?" data-en="Is the message the same as other drivers got today?">Da li je poruka ista kao kod drugih vozača danas?</li>
        <li data-sr="Da li postoji pečat ili potpis države na potvrdi?" data-en="Is there a state stamp or signature on confirmation?">Da li postoji pečat ili potpis države na potvrdi?</li>
        <li data-sr="Da li mogu da sačekam sutra pre plaćanja?" data-en="Can I wait until tomorrow before paying?">Da li mogu da sačekam sutra pre plaćanja?</li>
        <li data-sr="Da li sam već jednom platio i ništa se nije promenilo?" data-en="Did I pay once already and nothing changed?">Da li sam već jednom platio i ništa se nije promenilo?</li>
        <li data-sr="Da li bih ovu stranicu poslao IT odeljenju na proveru?" data-en="Would I send this page to IT for review?">Da li bih ovu stranicu poslao IT odeljenju na proveru?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Zatvorite stranicu i ne unosite više podataka." data-en="Close the page and do not enter more data.">Zatvorite stranicu i ne unosite više podataka.</li>
        <li data-sr="Kontaktirajte banku ako je kartica uneta." data-en="Contact the bank if the card was entered.">Kontaktirajte banku ako je kartica uneta.</li>
        <li data-sr="Proverite rok na fizičkom dokumentu i zvaničnom portalu." data-en="Check expiry on physical document and official portal.">Proverite rok na fizičkom dokumentu i zvaničnom portalu.</li>
        <li data-sr="Sačuvajte SMS, link i snimak ekrana." data-en="Save SMS, link, and screenshot.">Sačuvajte SMS, link i snimak ekrana.</li>
        <li data-sr="Prijavite kao smishing policiji ili operateru." data-en="Report as smishing to police or carrier.">Prijavite kao smishing policiji ili operateru.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si uporedio datum sa dokumentom u novčaniku?" data-en="Did you compare the date to the document in your wallet?">Da li si uporedio datum sa dokumentom u novčaniku?</li>
            <li data-sr="Da li možeš da uđeš na portal bez tog linka?" data-en="Can you open the portal without that link?">Da li možeš da uđeš na portal bez tog linka?</li>
            <li data-sr="Da li bi država tražila CVV na ovakvoj stranici?" data-en="Would the state ask for CVV on a page like this?">Da li bi država tražila CVV na ovakvoj stranici?</li>
            <li data-sr="Da li banka vidi sumnjivu lokaciju transakcije?" data-en="Does the bank show a suspicious transaction location?">Da li banka vidi sumnjivu lokaciju transakcije?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Hajde da otvorimo sajt ministarstva iz pretraživača, ne iz SMS-a." data-en="Let's open the ministry site from the browser, not SMS.">Hajde da otvorimo sajt ministarstva iz pretraživača, ne iz SMS-a.</li>
            <li data-sr="Državni portal ne traži PIN kartice za registraciju vozila." data-en="The state portal does not ask for card PIN for vehicle registration.">Državni portal ne traži PIN kartice za registraciju vozila.</li>
            <li data-sr="Blokiraj karticu odmah ako si uneo podatke." data-en="Block the card immediately if you entered details.">Blokiraj karticu odmah ako si uneo podatke.</li>
            <li data-sr="Jedan dan čekanja neće poništiti pravu obnovu." data-en="One day wait will not cancel a real renewal.">Jedan dan čekanja neće poništiti pravu obnovu.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
