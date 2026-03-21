window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["qr-fine-payment-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: QR kod kao lažna brza uplata kazne ili javnog računa" data-en="Introduction: a QR code as a fake quick payment for a fine or public bill">Uvod: QR kod kao lažna brza uplata kazne ili javnog računa</h2>
      <p data-sr="Prevarant postavlja QR kod koji izgleda kao način plaćanja saobraćajne ili druge administrativne kazne, komunalnog računa, takse ili državnog naloga. Skeniranje otvara stranicu koja imitira zvanični portal i traži karticu ili prijavu, iako zvanična uplata često ide drugim kanalom ili drugačijim QR standardom." data-en="The fraudster places a QR code that looks like a way to pay a traffic or other administrative fine, a utility bill, a fee, or a government invoice. Scanning opens a page that mimics an official portal and asks for a card or login, even though official payment often uses another channel or a different QR standard.">Prevarant postavlja QR kod koji izgleda kao način plaćanja saobraćajne ili druge administrativne kazne, komunalnog računa, takse ili državnog naloga. Skeniranje otvara stranicu koja imitira zvanični portal i traži karticu ili prijavu, iako zvanična uplata često ide drugim kanalom ili drugačijim QR standardom.</p>
      <p data-sr="Razlika u odnosu na opšti QR fišing je kontekst: meta veruje da plaća obavezu prema državi ili gradu, pa manje proverava domen. Kod može biti na letku, nalepnici preko pravog koda, u mejlu uz obaveštenje o kazni ili na lažnoj uplatnici." data-en="The difference from generic QR phishing is context: the target believes they are paying an obligation to the state or city, so they check the domain less. The code may be on a flyer, a sticker over a real code, in an email with a fine notice, or on a fake payment slip.">Razlika u odnosu na opšti QR fišing je kontekst: meta veruje da plaća obavezu prema državi ili gradu, pa manje proverava domen. Kod može biti na letku, nalepnici preko pravog koda, u mejlu uz obaveštenje o kazni ili na lažnoj uplatnici.</p>
      <div class="callout" data-sr="<strong>Model:</strong> lažni ili zamenjeni QR u kontekstu kazne ili računa → skeniranje → lažni portal → unos kartice ili prijava → krađa novca ili naloga → mogući drugi zahtev za uplatom." data-en="<strong>Model:</strong> fake or swapped QR in a fine-or-bill context → scan → fake portal → card entry or login → theft of funds or account → possible second payment request."><strong>Model:</strong> lažni ili zamenjeni QR u kontekstu kazne ili računa → skeniranje → lažni portal → unos kartice ili prijava → krađa novca ili naloga → mogući drugi zahtev za uplatom.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> uplata ili osetljiv unos na stranici otvorenoj samo zato što je QR izgledao kao deo zvaničnog plaćanja." data-en="<strong>Threshold:</strong> paying or entering sensitive data on a page opened only because the QR looked like part of official payment."><strong>Prag:</strong> uplata ili osetljiv unos na stranici otvorenoj samo zato što je QR izgledao kao deo zvaničnog plaćanja.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: zašto državni QR prolazi" data-en="How it works: why a government QR gets trusted">Kako generalno radi: zašto državni QR prolazi</h2>
      <p data-sr="Ljudi su navikli da kazne i računi postoje i da se plaćaju, pa QR na papiru ili plakatu deluje kao skraćenica, a ne kao nepoznat link. Napadač koristi tu rutinu i skriva pogrešan domen iza skeniranja." data-en="People are used to fines and bills that must be paid, so a QR on paper or a poster feels like a shortcut, not an unknown link. The attacker uses that routine and hides the wrong domain behind the scan.">Ljudi su navikli da kazne i računi postoje i da se plaćaju, pa QR na papiru ili plakatu deluje kao skraćenica, a ne kao nepoznat link. Napadač koristi tu rutinu i skriva pogrešan domen iza skeniranja.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Gde se kod pojavljuje" data-en="Where the code appears">Gde se kod pojavljuje</div>
          <ul class="bullets">
            <li data-sr="Nalepnica na automatu, tabli ili ulazu gde očekujete uputstvo za plaćanje." data-en="A sticker on a machine, board, or entrance where you expect payment instructions.">Nalepnica na automatu, tabli ili ulazu gde očekujete uputstvo za plaćanje.</li>
            <li data-sr="Letak u poštanskom sandučetu ili uz vozilo sa tekstom o neplaćenoj obavezi." data-en="A flyer in a mailbox or on a vehicle with text about an unpaid obligation.">Letak u poštanskom sandučetu ili uz vozilo sa tekstom o neplaćenoj obavezi.</li>
            <li data-sr="PDF ili mejl sa naslovom o kazni i velikim QR kodom za brzu uplatu." data-en="A PDF or email with a fine-related headline and a large QR code for quick payment.">PDF ili mejl sa naslovom o kazni i velikim QR kodom za brzu uplatu.</li>
            <li data-sr="Lažna uplatnica koja vizuelno liči na obrazac sa javnog sajta." data-en="A fake payment slip that visually resembles a form from a public website.">Lažna uplatnica koja vizuelno liči na obrazac sa javnog sajta.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Šta portal obično traži" data-en="What the portal usually asks for">Šta portal obično traži</div>
          <ul class="bullets">
            <li data-sr="Kompletan broj kartice, datum isteka i CVV pod izgovorom da je to obavezna uplata." data-en="Full card number, expiry, and CVV under the claim that it is a mandatory payment.">Kompletan broj kartice, datum isteka i CVV pod izgovorom da je to obavezna uplata.</li>
            <li data-sr="Prijava mejlom i lozinkom da se učita predmet." data-en="Email and password login to load the case file.">Prijava mejlom i lozinkom da se učita predmet.</li>
            <li data-sr="Mali iznos koji deluje pristupačno uz rok za popust." data-en="A small amount that looks affordable with a deadline for a discount.">Mali iznos koji deluje pristupačno uz rok za popust.</li>
            <li data-sr="Generička poruka o uspešnoj uplati bez pravog broja predmeta u zvaničnom sistemu." data-en="A generic success message without a real case number in the official system.">Generička poruka o uspešnoj uplati bez pravog broja predmeta u zvaničnom sistemu.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching)">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Ceo niz može stati u nekoliko minuta; šteta nastaje na koraku plaćanja ili prijave, ne na samom skeniranju." data-en="The whole sequence can fit into minutes; damage happens at the payment or login step, not at the scan itself.">Ceo niz može stati u nekoliko minuta; šteta nastaje na koraku plaćanja ili prijave, ne na samom skeniranju.</p>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Postavljanje QR u okviru kazne ili računa" data-en="Phase 1 — Placing the QR in a fine or bill frame">Faza 1 — Postavljanje QR u okviru kazne ili računa</h3>
        <p data-sr="Meta vidi QR uz tekst o kazni, dospelom računu, taksi ili blokadi naloga. Dizajn kopira jezik uprave: logo, serijski broj, rok." data-en="The target sees a QR next to text about a fine, overdue bill, fee, or account block. The design copies administrative language: logos, serial numbers, deadlines.">Meta vidi QR uz tekst o kazni, dospelom računu, taksi ili blokadi naloga. Dizajn kopira jezik uprave: logo, serijski broj, rok.</p>
        <ul class="bullets">
          <li data-sr="Broj predmeta zvuči konkretno i navodi na brzu proveru kasnije, koja ne uspeva." data-en="A case number sounds concrete and suggests a quick later check that fails.">Broj predmeta zvuči konkretno i navodi na brzu proveru kasnije, koja ne uspeva.</li>
          <li data-sr="Iznos je u opsegu koji deluje verodostojno za prekršaj ili taksu." data-en="The amount sits in a range that feels plausible for a violation or fee.">Iznos je u opsegu koji deluje verodostojno za prekršaj ili taksu.</li>
          <li data-sr="QR je jedina jasna akcija na papiru: skeniraj i plati." data-en="The QR is the only clear action on the paper: scan and pay.">QR je jedina jasna akcija na papiru: skeniraj i plati.</li>
          <li data-sr="Na fizičkom mestu lokacija pojačava utisak zvaničnosti." data-en="On a physical surface, the location strengthens the sense of legitimacy.">Na fizičkom mestu lokacija pojačava utisak zvaničnosti.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta odluči da skenira jer veruje da je u pitanju stvarna obaveza." data-en="<strong>Phase threshold:</strong> the target decides to scan because they believe a real obligation is involved."><strong>Prag faze:</strong> meta odluči da skenira jer veruje da je u pitanju stvarna obaveza.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Telefon otvara pogrešan domen" data-en="Phase 2 — The phone opens the wrong domain">Faza 2 — Telefon otvara pogrešan domen</h3>
        <p data-sr="Posle skeniranja, pregledač na telefonu otvara adresu koja nije ista kao na poznatom javnom portalu. Preview je kratak ili se preskače." data-en="After scanning, the phone browser opens an address that is not the same as on the known public portal. The preview is short or skipped.">Posle skeniranja, pregledač na telefonu otvara adresu koja nije ista kao na poznatom javnom portalu. Preview je kratak ili se preskače.</p>
        <ul class="bullets">
          <li data-sr="Domen može imati dodato slovo, drugačiji sufiks ili potpuno drugo ime." data-en="The domain may add a letter, use a different suffix, or be a completely different name.">Domen može imati dodato slovo, drugačiji sufiks ili potpuno drugo ime.</li>
          <li data-sr="Stranica učitava grb ili zastavu da zameni proveru adrese." data-en="The page loads a coat of arms or flag to substitute for checking the address.">Stranica učitava grb ili zastavu da zameni proveru adrese.</li>
          <li data-sr="Korisnik je već u modu završi plaćanje i ne prekida tok." data-en="The user is already in finish the payment mode and does not interrupt the flow.">Korisnik je već u modu završi plaćanje i ne prekida tok.</li>
          <li data-sr="Ako je kod u mejlu, ista greška kao kod klika na sumnjiv link." data-en="If the code is in email, the mistake is the same as clicking a suspicious link.">Ako je kod u mejlu, ista greška kao kod klika na sumnjiv link.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> stranica se otvori bez ručne provere zvaničnog domena." data-en="<strong>Phase threshold:</strong> the page opens without manually verifying the official domain."><strong>Prag faze:</strong> stranica se otvori bez ručne provere zvaničnog domena.</div>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="quishing.html" data-sr="Opšti QR fišing (drugi konteksti)" data-en="General quishing (other contexts)">Opšti QR fišing (drugi konteksti)</a></li>
            <li><a href="parking-qr-scam.html" data-sr="Lažni QR na parkiranju" data-en="Fake parking QR scams">Lažni QR na parkiranju</a></li>
          </ul>
        </div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Lažni portal za uplatu kazne ili računa" data-en="Phase 3 — Fake fine or bill payment portal">Faza 3 — Lažni portal za uplatu kazne ili računa</h3>
        <p data-sr="Formular traži podatke kartice ili prijavu uz obećanje da će predmet biti zatvoren. Ponekad postoji odbrojavanje popusta za hitnu uplatu." data-en="The form asks for card data or login with a promise the case will be closed. Sometimes a discount countdown appears for immediate payment.">Formular traži podatke kartice ili prijavu uz obećanje da će predmet biti zatvoren. Ponekad postoji odbrojavanje popusta za hitnu uplatu.</p>
        <ul class="bullets">
          <li data-sr="Traže se podaci koji omogućavaju daljnju zloupotrebu, ne samo jednokratnu uplatu." data-en="Data is requested that enables further misuse, not only a one-time payment.">Traže se podaci koji omogućavaju daljnju zloupotrebu, ne samo jednokratnu uplatu.</li>
          <li data-sr="Tekst naglašava posledice odlaganja: blokada, dodatna kazna, sud." data-en="The text stresses consequences of delay: blocking, extra fine, court.">Tekst naglašava posledice odlaganja: blokada, dodatna kazna, sud.</li>
          <li data-sr="Ne postoji link ka istom predmetu na poznatom zvaničnom sajtu." data-en="There is no link to the same case on a known official site.">Ne postoji link ka istom predmetu na poznatom zvaničnom sajtu.</li>
          <li data-sr="Stranica može tražiti i potvrdu identiteta pre kartice." data-en="The page may also ask for identity confirmation before the card.">Stranica može tražiti i potvrdu identiteta pre kartice.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta unese karticu ili pristupne podatke na lažnom portalu." data-en="<strong>Phase threshold:</strong> the target enters a card or credentials on the fake portal."><strong>Prag faze:</strong> meta unese karticu ili pristupne podatke na lažnom portalu.</div>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="fake-fine-scam.html" data-sr="Lažne kazne putem SMS-a ili mejla bez QR-a" data-en="Fake fines by SMS or email without QR">Lažne kazne putem SMS-a ili mejla bez QR-a</a></li>
            <li><a href="phishing.html" data-sr="Fišing ako je fokus na prijavi" data-en="Phishing if the focus is login">Fišing ako je fokus na prijavi</a></li>
          </ul>
        </div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Krađa novca ili naloga" data-en="Phase 4 — Theft of money or accounts">Faza 4 — Krađa novca ili naloga</h3>
        <p data-sr="Novac odlazi na račun napadača ili se kartica koristi za niz sitnih transakcija; ukradena prijava otvara pristup mejlu i drugim servisima." data-en="Money goes to the attacker’s account or the card is used for a series of small transactions; stolen login opens access to email and other services.">Novac odlazi na račun napadača ili se kartica koristi za niz sitnih transakcija; ukradena prijava otvara pristup mejlu i drugim servisima.</p>
        <ul class="bullets">
          <li data-sr="Prva transakcija može biti mala da prođe bez odmah podignutog alarma." data-en="The first transaction may be small enough to pass without an immediate alert.">Prva transakcija može biti mala da prođe bez odmah podignutog alarma.</li>
          <li data-sr="Meta i dalje misli da je platila kaznu, pa ne traži odmah izvod." data-en="The target still thinks they paid a fine, so they do not immediately seek a statement.">Meta i dalje misli da je platila kaznu, pa ne traži odmah izvod.</li>
          <li data-sr="Kompromitovan mejl omogućava reset lozinki na drugim sajtovima." data-en="A compromised email enables password resets on other sites.">Kompromitovan mejl omogućava reset lozinki na drugim sajtovima.</li>
          <li data-sr="Šteta se vidi tek iz obaveštenja banke ili zaključanih naloga." data-en="Damage appears only from bank alerts or locked accounts.">Šteta se vidi tek iz obaveštenja banke ili zaključanih naloga.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> pojave se neovlašćene transakcije ili gubitak pristupa nalogu." data-en="<strong>Phase threshold:</strong> unauthorized transactions appear or account access is lost."><strong>Prag faze:</strong> pojave se neovlašćene transakcije ili gubitak pristupa nalogu.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Lažna potvrda i tiha pauza" data-en="Phase 5 — Fake confirmation and a quiet pause">Faza 5 — Lažna potvrda i tiha pauza</h3>
        <p data-sr="Portal prikaže uplata primljena ili PDF koji izgleda kao potvrda, iako zvanični sistem nema evidenciju." data-en="The portal shows payment received or a PDF that looks like a confirmation, even though the official system has no record.">Portal prikaže uplata primljena ili PDF koji izgleda kao potvrda, iako zvanični sistem nema evidenciju.</p>
        <ul class="bullets">
          <li data-sr="Meta odlaže proveru u e-upravi jer veruje da je sve rešeno." data-en="The target delays checking e-government because they believe everything is resolved.">Meta odlaže proveru u e-upravi jer veruje da je sve rešeno.</li>
          <li data-sr="Lažni dokument nema isti format ili broj kao pravi obrazac." data-en="The fake document does not match the format or number of a real form.">Lažni dokument nema isti format ili broj kao pravi obrazac.</li>
          <li data-sr="U međuvremenu napadač koristi ukradene podatke u pozadini." data-en="Meanwhile the attacker uses the stolen data in the background.">U međuvremenu napadač koristi ukradene podatke u pozadini.</li>
          <li data-sr="Korisnik briše poruku ili letak i gubi fizički trag." data-en="The user deletes the message or flyer and loses the physical trace.">Korisnik briše poruku ili letak i gubi fizički trag.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta prestane da prati predmet jer veruje u lažnu potvrdu." data-en="<strong>Phase threshold:</strong> the target stops tracking the case because they trust the fake confirmation."><strong>Prag faze:</strong> meta prestane da prati predmet jer veruje u lažnu potvrdu.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 6 — Drugi krug: greška, taksa ili novi QR" data-en="Phase 6 — Second round: error, fee, or new QR">Faza 6 — Drugi krug: greška, taksa ili novi QR</h3>
        <p data-sr="Pojavi se poruka da uplata nije prošla, da treba dodatna taksa ili da treba ponovo skenirati drugi kod; cilj je još jedan prag." data-en="A message appears that payment failed, an extra fee is due, or another code must be scanned; the goal is another threshold.">Pojavi se poruka da uplata nije prošla, da treba dodatna taksa ili da treba ponovo skenirati drugi kod; cilj je još jedan prag.</p>
        <ul class="bullets">
          <li data-sr="Tekst koristi strah od veće kazne ako se ne doplati odmah." data-en="The text uses fear of a larger penalty if the top-up is not immediate.">Tekst koristi strah od veće kazne ako se ne doplati odmah.</li>
          <li data-sr="Novi QR vodi na drugu adresu domena u istoj mreži." data-en="A new QR leads to another domain in the same network.">Novi QR vodi na drugu adresu domena u istoj mreži.</li>
          <li data-sr="Ponekad sledi poziv službe koji nastavlja pritisak." data-en="Sometimes a service call follows and continues the pressure.">Ponekad sledi poziv službe koji nastavlja pritisak.</li>
          <li data-sr="Meta pokušava da ispravi prvi korak i ulazi dublje u štetu." data-en="The target tries to fix the first step and goes deeper into harm.">Meta pokušava da ispravi prvi korak i ulazi dublje u štetu.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta izvrši drugu uplatu ili oda još podataka." data-en="<strong>Phase threshold:</strong> the target makes a second payment or gives more data."><strong>Prag faze:</strong> meta izvrši drugu uplatu ili oda još podataka.</div>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="advance-fee-fraud.html" data-sr="Niz dodatnih naknada unapred" data-en="Series of advance fees">Niz dodatnih naknada unapred</a></li>
            <li><a href="fake-call-scam.html" data-sr="Lažni poziv iz službe" data-en="Fake call from the office">Lažni poziv iz službe</a></li>
          </ul>
        </div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 7 — Provera kroz zvaničan kanal i prijava" data-en="Phase 7 — Verification through official channels and reporting">Faza 7 — Provera kroz zvaničan kanal i prijava</h3>
        <p data-sr="Kada meta otvori pravi portal ili kontaktira instituciju na zvaničan način, često se ispostavi da predmet ne postoji ili da uplata nije stigla." data-en="When the target opens the real portal or contacts the institution through an official channel, they often learn the case does not exist or the payment never arrived.">Kada meta otvori pravi portal ili kontaktira instituciju na zvaničan način, često se ispostavi da predmet ne postoji ili da uplata nije stigla.</p>
        <ul class="bullets">
          <li data-sr="Zvanična provera ne koristi isti QR koji je bio na letku." data-en="Official verification does not use the same QR that was on the flyer.">Zvanična provera ne koristi isti QR koji je bio na letku.</li>
          <li data-sr="Banka može blokirati karticu i pratiti tok novca ako se reaguje brzo." data-en="The bank may block the card and trace funds if the response is fast.">Banka može blokirati karticu i pratiti tok novca ako se reaguje brzo.</li>
          <li data-sr="Fotografija koda i papira pomaže pri prijavi prevara." data-en="Photos of the code and paper help when reporting fraud.">Fotografija koda i papira pomaže pri prijavi prevara.</li>
          <li data-sr="Zaštita drugih korisnika zahteva uklanjanje lažnih nalepnica ako su na javnom mestu." data-en="Protecting others requires removing fake stickers if they are in a public place.">Zaštita drugih korisnika zahteva uklanjanje lažnih nalepnica ako su na javnom mestu.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> predmet je proveren van QR toka i preduzeti su koraci kod banke ili policije." data-en="<strong>Phase threshold:</strong> the case is verified outside the QR flow and steps are taken with the bank or police."><strong>Prag faze:</strong> predmet je proveren van QR toka i preduzeti su koraci kod banke ili policije.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="QR kod je zalepljen preko starijeg koda na tabli ili automatu." data-en="The QR code is stuck over an older code on a board or machine.">QR kod je zalepljen preko starijeg koda na tabli ili automatu.</li>
        <li data-sr="Jedini način plaćanja koji se pominje je skeniranje tog koda." data-en="The only payment method mentioned is scanning that code.">Jedini način plaćanja koji se pominje je skeniranje tog koda.</li>
        <li data-sr="Domen posle skeniranja nije isti kao na zvaničnom sajtu institucije." data-en="The domain after scanning is not the same as on the institution’s official site.">Domen posle skeniranja nije isti kao na zvaničnom sajtu institucije.</li>
        <li data-sr="Portal traži CVV i sve podatke kartice za kaznu." data-en="The portal asks for CVV and full card data for a fine.">Portal traži CVV i sve podatke kartice za kaznu.</li>
        <li data-sr="Postoji odbrojavanje popusta koji tera na trenutnu odluku." data-en="A discount countdown forces an instant decision.">Postoji odbrojavanje popusta koji tera na trenutnu odluku.</li>
        <li data-sr="Broj predmeta iz papira ne postoji u zvaničnoj proveri." data-en="The case number from the paper does not exist in official checks.">Broj predmeta iz papira ne postoji u zvaničnoj proveri.</li>
        <li data-sr="Mejl ili SMS traže uplatu kazne isključivo preko priloženog QR koda." data-en="Email or SMS demands fine payment only via an attached QR code.">Mejl ili SMS traže uplatu kazne isključivo preko priloženog QR koda.</li>
        <li data-sr="Nema uputstva kako istu stvar uraditi bez skeniranja." data-en="There is no guidance on how to do the same thing without scanning.">Nema uputstva kako istu stvar uraditi bez skeniranja.</li>
        <li data-sr="Potvrda o uplati nema iste elemente kao primer sa zvaničnog portala." data-en="The payment confirmation lacks the same elements as an example from the official portal.">Potvrda o uplati nema iste elemente kao primer sa zvaničnog portala.</li>
        <li data-sr="Nakon uplate stiže zahtev za još jednu taksu ili novi QR." data-en="After payment, a request arrives for another fee or a new QR.">Nakon uplate stiže zahtev za još jednu taksu ili novi QR.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <ol class="steps">
        <li data-sr="Pre skeniranja proverite da li je kod fizički dodat preko postojećeg." data-en="Before scanning, check whether the code was physically added over an existing one.">Pre skeniranja proverite da li je kod fizički dodat preko postojećeg.</li>
        <li data-sr="Uporedite domen koji telefon prikaže sa domenom sa zvaničnog sajta koji ručno ukucate." data-en="Compare the domain the phone shows with the domain from an official site you type manually.">Uporedite domen koji telefon prikaže sa domenom sa zvaničnog sajta koji ručno ukucate.</li>
        <li data-sr="Pronađite na zvaničnom portalu istu vrstu uplate bez korišćenja QR sa papira." data-en="Find the same type of payment on the official portal without using the paper QR.">Pronađite na zvaničnom portalu istu vrstu uplate bez korišćenja QR sa papira.</li>
        <li data-sr="Proverite broj predmeta kroz zvaničnu aplikaciju ili infoliniju ako postoji." data-en="Verify the case number through an official app or hotline if one exists.">Proverite broj predmeta kroz zvaničnu aplikaciju ili infoliniju ako postoji.</li>
        <li data-sr="Ne unosite karticu na stranici otvorenoj isključivo skeniranjem nepoznatog koda." data-en="Do not enter a card on a page opened only by scanning an unknown code.">Ne unosite karticu na stranici otvorenoj isključivo skeniranjem nepoznatog koda.</li>
        <li data-sr="Ako je QR u mejlu, tretirajte ga kao link iz fišing poruke." data-en="If the QR is in email, treat it like a link from a phishing message.">Ako je QR u mejlu, tretirajte ga kao link iz fišing poruke.</li>
        <li data-sr="Posle uplate proverite stanje predmeta na zvaničnom kanalu istog dana." data-en="After payment, check the case status on the official channel the same day.">Posle uplate proverite stanje predmeta na zvaničnom kanalu istog dana.</li>
        <li data-sr="Sačuvajte fotografiju QR koda i papira pre odlaganja." data-en="Save a photo of the QR code and paper before discarding it.">Sačuvajte fotografiju QR koda i papira pre odlaganja.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja pre plaćanja preko QR koda" data-en="Checklist: 12 questions before paying via QR code">Checklista: 12 pitanja pre plaćanja preko QR koda</h2>
      <ul class="bullets">
        <li data-sr="Da li ovaj organ zaista koristi QR na ovaj način na svom zvaničnom sajtu?" data-en="Does this authority actually use a QR in this way on its official site?">Da li ovaj organ zaista koristi QR na ovaj način na svom zvaničnom sajtu?</li>
        <li data-sr="Da li postoji ista uplata bez skeniranja ovog konkretnog koda?" data-en="Is there the same payment without scanning this specific code?">Da li postoji ista uplata bez skeniranja ovog konkretnog koda?</li>
        <li data-sr="Da li domen posle skeniranja tačno odgovara zvaničnom?" data-en="Does the domain after scanning exactly match the official one?">Da li domen posle skeniranja tačno odgovara zvaničnom?</li>
        <li data-sr="Da li broj predmeta postoji kada ga ukucate u zvaničnoj proveri?" data-en="Does the case number exist when you enter it in an official check?">Da li broj predmeta postoji kada ga ukucate u zvaničnoj proveri?</li>
        <li data-sr="Da li iznos i datum imaju smisla u odnosu na vaše stvarno ponašanje?" data-en="Do the amount and date make sense relative to your actual behavior?">Da li iznos i datum imaju smisla u odnosu na vaše stvarno ponašanje?</li>
        <li data-sr="Da li vas neko tera da platite odmah, bez pauze za proveru?" data-en="Is someone pushing you to pay immediately, with no pause to verify?">Da li vas neko tera da platite odmah, bez pauze za proveru?</li>
        <li data-sr="Da li portal traži podatke koje zvanična uplata obično ne traži odjednom?" data-en="Does the portal ask for data that official payment usually does not ask for at once?">Da li portal traži podatke koje zvanična uplata obično ne traži odjednom?</li>
        <li data-sr="Da li je QR jedini kontakt koji ste dobili o ovoj obavezi?" data-en="Is the QR the only contact you received about this obligation?">Da li je QR jedini kontakt koji ste dobili o ovoj obavezi?</li>
        <li data-sr="Da li biste isto uradili da prvo morate da pročitate punu adresu u pregledaču?" data-en="Would you do the same if you had to read the full browser address first?">Da li biste isto uradili da prvo morate da pročitate punu adresu u pregledaču?</li>
        <li data-sr="Da li je papir ili mejl stigao iz neočekivanog kanala?" data-en="Did the paper or email arrive through an unexpected channel?">Da li je papir ili mejl stigao iz neočekivanog kanala?</li>
        <li data-sr="Da li neko drugi u kući može da potvrdi istu proceduru na zvaničnom sajtu?" data-en="Can someone else at home confirm the same procedure on the official site?">Da li neko drugi u kući može da potvrdi istu proceduru na zvaničnom sajtu?</li>
        <li data-sr="Da li znate kome biste prijavili sumnju ako uplata bude lažna?" data-en="Do you know whom you would report to if the payment were fake?">Da li znate kome biste prijavili sumnju ako uplata bude lažna?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: order of actions">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Prekinite unos podataka i ne skenirajte ponovo isti kod." data-en="Stop entering data and do not scan the same code again.">Prekinite unos podataka i ne skenirajte ponovo isti kod.</li>
        <li data-sr="Zatvorite stranicu i ručno otvorite zvanični sajt institucije." data-en="Close the page and manually open the institution’s official site.">Zatvorite stranicu i ručno otvorite zvanični sajt institucije.</li>
        <li data-sr="Proverite predmet ili račun kroz zvaničnu aplikaciju ili infoliniju." data-en="Check the case or bill through the official app or hotline.">Proverite predmet ili račun kroz zvaničnu aplikaciju ili infoliniju.</li>
        <li data-sr="Ako je kartica uneta, odmah obavestite banku i pratite nalog." data-en="If a card was entered, notify the bank immediately and monitor the account.">Ako je kartica uneta, odmah obavestite banku i pratite nalog.</li>
        <li data-sr="Sačuvajte fotografiju materijala sa QR kodom i adresu lažnog sajta." data-en="Save a photo of the material with the QR code and the fake site address.">Sačuvajte fotografiju materijala sa QR kodom i adresu lažnog sajta.</li>
        <li data-sr="Prijavite prevaru nadležnom telu i, ako je moguće, uklonite lažnu nalepnicu sa javnog mesta." data-en="Report the fraud to the competent body and, if possible, remove a fake sticker from a public place.">Prijavite prevaru nadležnom telu i, ako je moguće, uklonite lažnu nalepnicu sa javnog mesta.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Koji je tačno domen otvoren posle skeniranja?" data-en="What exact domain opened after the scan?">Koji je tačno domen otvoren posle skeniranja?</li>
            <li data-sr="Da li si uneo broj kartice ili lozinku na toj stranici?" data-en="Did you enter a card number or password on that page?">Da li si uneo broj kartice ili lozinku na toj stranici?</li>
            <li data-sr="Da li broj predmeta postoji kada ga tražiš na zvaničnom portalu?" data-en="Does the case number exist when you search for it on the official portal?">Da li broj predmeta postoji kada ga tražiš na zvaničnom portalu?</li>
            <li data-sr="Odakle je QR došao: papir, mejl, poruka ili tabla?" data-en="Where did the QR come from: paper, email, message, or a board?">Odakle je QR došao: papir, mejl, poruka ili tabla?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Plaćanje kazne proveravamo na zvaničnom sajtu, ne preko QR koda sa letka." data-en="We check fine payment on the official site, not via a QR code from a flyer.">Plaćanje kazne proveravamo na zvaničnom sajtu, ne preko QR koda sa letka.</li>
            <li data-sr="QR na papiru nije dokaz da je uplata državna ili prava." data-en="A QR on paper is not proof the payment is state-run or real.">QR na papiru nije dokaz da je uplata državna ili prava.</li>
            <li data-sr="Hajde da zatvorimo stranicu i da istu stvar potražimo ručno na .gov ili poznatom portalu." data-en="Let’s close the page and look up the same thing manually on .gov or a known portal.">Hajde da zatvorimo stranicu i da istu stvar potražimo ručno na .gov ili poznatom portalu.</li>
            <li data-sr="Ako je bilo unosa kartice, prvi poziv je banka, ne broj sa lažnog papira." data-en="If the card was entered, the first call is the bank, not a number from fake paper.">Ako je bilo unosa kartice, prvi poziv je banka, ne broj sa lažnog papira.</li>
          </ul>
        </div>
      </div>
    </section>
`
};
