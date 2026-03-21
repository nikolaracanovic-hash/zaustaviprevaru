window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["qr-code-sticker-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi QR nalepnica prevara" data-en="Introduction: how the QR code sticker scam works">Uvod: kako radi QR nalepnica prevara</h2>
      <p data-sr="Napadač lepi lažnu QR nalepnicu direktno preko pravog QR koda — na parkomatima, restoranskim menijima, plakatima, kioscima ili reklamama. Korisnik skenira ono što izgleda kao zvaničan kod i biva preusmeren na lažnu stranicu za plaćanje ili prijavu. Na stranici unosi kartičне podatke ili kredencijale koji odmah odlaze napadaču." data-en="The attacker places a fake QR sticker directly over the real QR code — on parking meters, restaurant menus, posters, kiosks or advertisements. The user scans what looks like an official code and is redirected to a fake payment or login page. On the page they enter card details or credentials which go directly to the attacker.">Napadač lepi lažnu QR nalepnicu direktno preko pravog QR koda — na parkomatima, restoranskim menijima, plakatima, kioscima ili reklamama. Korisnik skenira ono što izgleda kao zvaničan kod i biva preusmeren na lažnu stranicu za plaćanje ili prijavu. Na stranici unosi kartičне podatke ili kredencijale koji odmah odlaze napadaču.</p>
      <p data-sr="Napad je fizički ali rezultat je digitalni. Korisnik nema razloga da posumnja — QR nalepnica izgleda identično pravoj i nalazi se tačno tamo gde se očekuje. URL lažne stranice najčešće imitira zvanični naziv uz malu izmenu koju je teško primetiti na mobilnom ekranu." data-en="The attack is physical but the result is digital. The user has no reason to suspect — the QR sticker looks identical to the real one and is exactly where expected. The fake page URL usually imitates the official name with a small change that is hard to notice on a mobile screen.">Napad je fizički ali rezultat je digitalni. Korisnik nema razloga da posumnja — QR nalepnica izgleda identično pravoj i nalazi se tačno tamo gde se očekuje. URL lažne stranice najčešće imitira zvanični naziv uz malu izmenu koju je teško primetiti na mobilnom ekranu.</p>
      <div class="callout" data-sr="<strong>Model:</strong> lažna QR nalepnica → skeniranje → lažna stranica za plaćanje/prijavu → unos kartičnih podataka ili kredencijala → krađa podataka." data-en="<strong>Model:</strong> fake QR sticker → scan → fake payment/login page → card details or credential entry → data theft."><strong>Model:</strong> lažna QR nalepnica → skeniranje → lažna stranica za plaćanje/prijavu → unos kartičnih podataka ili kredencijala → krađa podataka.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> unos kartičnih podataka ili kredencijala na lažnoj stranici. Korisnik ne može znati da je pravi QR kod zamenjen jer nalepnica izgleda identično." data-en="<strong>Threshold:</strong> entering card details or credentials on the fake page. The user cannot know the real QR code was replaced because the sticker looks identical."><strong>Prag:</strong> unos kartičnih podataka ili kredencijala na lažnoj stranici. Korisnik ne može znati da je pravi QR kod zamenjen jer nalepnica izgleda identično.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika" data-en="How it works: mechanics">Kako generalno radi: mehanika</h2>
      <div class="grid-2">
        <div>
          <h3 data-sr="Šta gradi uverljivost" data-en="What builds credibility">Šta gradi uverljivost</h3>
          <ul class="bullets">
            <li data-sr="Fizička lokacija — nalepnica je tačno tamo gde korisnik očekuje QR kod." data-en="Physical location — the sticker is exactly where the user expects a QR code.">Fizička lokacija — nalepnica je tačno tamo gde korisnik očekuje QR kod.</li>
            <li data-sr="Vizualni identitet — nalepnica može kopirati izgled zvaničnog brenda lokacije." data-en="Visual identity — the sticker can copy the visual branding of the official location.">Vizualni identitet — nalepnica može kopirati izgled zvaničnog brenda lokacije.</li>
            <li data-sr="Lažna stranica imitira zvaničan sajt uz minimalne razlike u URL-u." data-en="Fake page imitates the official site with minimal differences in the URL.">Lažna stranica imitira zvaničan sajt uz minimalne razlike u URL-u.</li>
            <li data-sr="Korisnik je u pokretu i nema vremena da proverava URL na malom ekranu." data-en="User is on the go and has no time to check the URL on a small screen.">Korisnik je u pokretu i nema vremena da proverava URL na malom ekranu.</li>
          </ul>
        </div>
        <div>
          <h3 data-sr="Kako se vrši krađa" data-en="How the theft happens">Kako se vrši krađa</h3>
          <ul class="bullets">
            <li data-sr="Lažna stranica traži broj kartice, datum isteka i CVV za plaćanje." data-en="Fake page requests card number, expiry date and CVV for &ldquo;payment&rdquo;.">Lažna stranica traži broj kartice, datum isteka i CVV za plaćanje.</li>
            <li data-sr="Podaci se šalju napadaču u realnom vremenu i odmah se koriste za CNP prevare." data-en="Data is sent to the attacker in real time and immediately used for CNP fraud.">Podaci se šalju napadaču u realnom vremenu i odmah se koriste za CNP prevare.</li>
            <li data-sr="Lažna stranica može tražiti i prijavu na nalog — korisnički podaci za servis." data-en="Fake page may also request login — user credentials for the service.">Lažna stranica može tražiti i prijavu na nalog — korisnički podaci za servis.</li>
            <li data-sr="Korisnik ne dobija potvrdu plaćanja ili usluga nije isporučena — ali to shvata kasno." data-en="User does not receive payment confirmation or service is not delivered — but realises this late.">Korisnik ne dobija potvrdu plaćanja ili usluga nije isporučena — ali to shvata kasno.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok" data-en="Chronological flow">Hronološki tok</h2>

      <div class="phase">
        <div class="label" data-sr="Faza 1: Postavljanje nalepnice" data-en="Phase 1: Sticker placement">Faza 1: Postavljanje nalepnice</div>
        <p data-sr="Napadač fizički posećuje lokaciju i lepi lažnu QR nalepnicu preko pravog koda. Bira mesta sa velikim prometom i kratkim vremenom zadržavanja." data-en="The attacker physically visits the location and places a fake QR sticker over the real code. They choose locations with high traffic and short dwell time.">Napadač fizički posećuje lokaciju i lepi lažnu QR nalepnicu preko pravog koda. Bira mesta sa velikim prometom i kratkim vremenom zadržavanja.</p>
        <ul class="bullets">
          <li data-sr="Parkomati, restorani, kafići, kulturne institucije, javni prevoz." data-en="Parking meters, restaurants, cafes, cultural institutions, public transport.">Parkomati, restorani, kafići, kulturne institucije, javni prevoz.</li>
          <li data-sr="Mesta gde korisnici habitualnost skeniraju QR bez razmišljanja." data-en="Places where users habitually scan QR codes without thinking.">Mesta gde korisnici habitualnost skeniraju QR bez razmišljanja.</li>
          <li data-sr="Nalepnica je profesionalno odštampana i teško je videti da je zalepljena odozgo." data-en="Sticker is professionally printed and hard to see that it is placed on top.">Nalepnica je profesionalno odštampana i teško je videti da je zalepljena odozgo.</li>
        </ul>
        <p class="phase-threshold" data-sr="Prag faze: nalepnica je postavljena i korisnici počinju da skeniraju." data-en="Phase threshold: sticker is placed and users begin scanning.">Prag faze: nalepnica je postavljena i korisnici počinju da skeniraju.</p>
      </div>

      <div class="phase">
        <div class="label" data-sr="Faza 2: Skeniranje" data-en="Phase 2: Scanning">Faza 2: Skeniranje</div>
        <p data-sr="Korisnik skenira QR kod kamerom telefona. URL koji se otvara izgleda slično zvaničnom — razlika je obično jedno slovo ili domen." data-en="User scans the QR code with their phone camera. The URL that opens looks similar to the official one — the difference is usually one letter or domain.">Korisnik skenira QR kod kamerom telefona. URL koji se otvara izgleda slično zvaničnom — razlika je obično jedno slovo ili domen.</p>
        <ul class="bullets">
          <li data-sr="Telefon prikazuje URL preview — korisnik ga retko čita pažljivo." data-en="Phone shows URL preview — user rarely reads it carefully.">Telefon prikazuje URL preview — korisnik ga retko čita pažljivo.</li>
          <li data-sr="Stranica se otvara odmah i izgleda legitimno — logo, boje, forma." data-en="Page opens immediately and looks legitimate — logo, colours, form.">Stranica se otvara odmah i izgleda legitimno — logo, boje, forma.</li>
          <li data-sr="Nema upozorenja od browsera jer domen može biti relativno nov ali ne i eksplicitno maliciozan." data-en="No browser warning because the domain may be relatively new but not explicitly malicious.">Nema upozorenja od browsera jer domen može biti relativno nov ali ne i eksplicitno maliciozan.</li>
        </ul>
        <p class="phase-threshold" data-sr="Prag faze: korisnik je na lažnoj stranici i počinje da unosi podatke." data-en="Phase threshold: user is on the fake page and begins entering data.">Prag faze: korisnik je na lažnoj stranici i počinje da unosi podatke.</p>
      </div>

      <div class="phase">
        <div class="label" data-sr="Faza 3: Unos podataka" data-en="Phase 3: Data entry">Faza 3: Unos podataka</div>
        <p data-sr="Korisnik unosi kartičне podatke ili kredencijale. Stranica može prikazati potvrdu da bi odložila sumnju." data-en="User enters card details or credentials. The page may show a &ldquo;confirmation&rdquo; to delay suspicion.">Korisnik unosi kartičне podatke ili kredencijale. Stranica može prikazati potvrdu da bi odložila sumnju.</p>
        <ul class="bullets">
          <li data-sr="Forma izgleda identično zvaničnoj — polja za broj kartice, datum, CVV." data-en="Form looks identical to the official one — fields for card number, date, CVV.">Forma izgleda identično zvaničnoj — polja za broj kartice, datum, CVV.</li>
          <li data-sr="Podaci idu direktno napadaču — nema stvarne transakcije." data-en="Data goes directly to the attacker — there is no real transaction.">Podaci idu direktno napadaču — nema stvarne transakcije.</li>
          <li data-sr="Stranica može pokazati lažnu potvrdu plaćanja da korisnik ne posumnja odmah." data-en="Page may show a fake &ldquo;payment confirmation&rdquo; so the user does not suspect immediately.">Stranica može pokazati lažnu potvrdu plaćanja da korisnik ne posumnja odmah.</li>
        </ul>
        <p class="phase-threshold" data-sr="Prag faze: podaci kartice su u rukama napadača." data-en="Phase threshold: card data is in the attacker's hands.">Prag faze: podaci kartice su u rukama napadača.</p>
      </div>

      <div class="phase">
        <div class="label" data-sr="Faza 4: Zloupotreba podataka" data-en="Phase 4: Data misuse">Faza 4: Zloupotreba podataka</div>
        <p data-sr="Napadač odmah koristi ukradene kartičне podatke za online kupovinu ili ih prodaje dalje. Korisnik otkriva problem tek kada vidi neovlašćene transakcije." data-en="The attacker immediately uses stolen card data for online purchases or sells it on. The user only discovers the problem when they see unauthorised transactions.">Napadač odmah koristi ukradene kartičне podatke za online kupovinu ili ih prodaje dalje. Korisnik otkriva problem tek kada vidi neovlašćene transakcije.</p>
        <ul class="bullets">
          <li data-sr="CNP (card-not-present) prevare na online prodavnicama sa ukradenim podacima." data-en="CNP (card-not-present) fraud at online stores with the stolen data.">CNP (card-not-present) prevare na online prodavnicama sa ukradenim podacima.</li>
          <li data-sr="Podaci se prodaju na dark web tržištima za dalju eksploataciju." data-en="Data is sold on dark web marketplaces for further exploitation.">Podaci se prodaju na dark web tržištima za dalju eksploataciju.</li>
          <li data-sr="Korisnik dobija SMS o transakciji — tada shvata šta se desilo." data-en="User receives SMS about a transaction — that is when they realise what happened.">Korisnik dobija SMS o transakciji — tada shvata šta se desilo.</li>
        </ul>
        <p class="phase-threshold" data-sr="Prag faze: korisnik blokira karticu i kontaktira banku." data-en="Phase threshold: user blocks card and contacts bank.">Prag faze: korisnik blokira karticu i kontaktira banku.</p>
      </div>

      <div class="phase">
        <div class="label" data-sr="Faza 5: Discovery and reporting" data-en="Phase 5: Discovery and reporting">Faza 5: Discovery and reporting</div>
        <p data-sr="Korisnik ili primeти neovlašćenu transakciju ili ne dobije očekivanu uslugu. Prijava banci i lokaciji." data-en="User either notices an unauthorised transaction or does not receive the expected service (parking not registered, menu does not work). Report to bank and location.">Korisnik ili primeти neovlašćenu transakciju ili ne dobije očekivanu uslugu. Prijava banci i lokaciji.</p>
        <ul class="bullets">
          <li data-sr="Banka može poništiti transakciju ako se odmah prijavi." data-en="Bank may reverse the transaction if reported immediately.">Banka može poništiti transakciju ako se odmah prijavi.</li>
          <li data-sr="Lokacija mora biti obaveštena da ukloni lažnu nalepnicu." data-en="Location must be notified to remove the fake sticker.">Lokacija mora biti obaveštena da ukloni lažnu nalepnicu.</li>
          <li data-sr="Napadač nastavlja dok nalepnica ostaje neprimetna — može biti tu danima." data-en="Attacker continues while the sticker remains unnoticed — it may be there for days.">Napadač nastavlja dok nalepnica ostaje neprimetna — može biti tu danima.</li>
        </ul>
        <p class="phase-threshold" data-sr="Prag faze: nalepnica je otkrivena i uklonjena, korisnik blokira karticu." data-en="Phase threshold: sticker is discovered and removed, user blocks card.">Prag faze: nalepnica je otkrivena i uklonjena, korisnik blokira karticu.</p>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="URL koji se otvara nakon skeniranja ne odgovara zvaničnom domenu servisa." data-en="URL that opens after scanning does not match the official service domain.">URL koji se otvara nakon skeniranja ne odgovara zvaničnom domenu servisa.</li>
        <li data-sr="QR nalepnica izgleda kao da je zalepljena odozgo — vidljivi rubovi ili neravnine." data-en="QR sticker looks like it is placed on top — visible edges or bumps.">QR nalepnica izgleda kao da je zalepljena odozgo — vidljivi rubovi ili neravnine.</li>
        <li data-sr="Stranica traži CVV kod i pun broj kartice za plaćanje servisa koji obično ne zahteva unos kartice." data-en="Page requests CVV and full card number for &ldquo;payment&rdquo; for a service that does not normally require card entry.">Stranica traži CVV kod i pun broj kartice za plaćanje servisa koji obično ne zahteva unos kartice.</li>
        <li data-sr="Nema SSL sertifikata (https) ili je domen nedavno registrovan." data-en="No SSL certificate (https) or domain was recently registered.">Nema SSL sertifikata (https) ili je domen nedavno registrovan.</li>
        <li data-sr="Potvrda plaćanja ne stiže ili parking nije registrovan u sistemu." data-en="Payment confirmation does not arrive or parking is not registered in the system.">Potvrda plaćanja ne stiže ili parking nije registrovan u sistemu.</li>
        <li data-sr="Stranica izgleda malo drugačije od uobičajene — drugi font, boje, raspored." data-en="Page looks slightly different from usual — different font, colours, layout.">Stranica izgleda malo drugačije od uobičajene — drugi font, boje, raspored.</li>
        <li data-sr="Nalepnica je na neobičnom mestu — nije ravna, nije pravilno centrirana." data-en="Sticker is in an unusual position — not straight, not properly centred.">Nalepnica je na neobičnom mestu — nije ravna, nije pravilno centrirana.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere pre unosa podataka" data-en="Checks before entering data">Provere pre unosa podataka</h2>
      <ul class="bullets">
        <li data-sr="Pre skeniranja fizički proverite QR kod — da li nalepnica izgleda zalepljeno odozgo." data-en="Before scanning physically check the QR code — does the sticker look like it was placed on top.">Pre skeniranja fizički proverite QR kod — da li nalepnica izgleda zalepljeno odozgo.</li>
        <li data-sr="Nakon skeniranja pročitajte ceo URL pre nego što otvorite stranicu." data-en="After scanning read the full URL before opening the page.">Nakon skeniranja pročitajte ceo URL pre nego što otvorite stranicu.</li>
        <li data-sr="Proverite da li URL odgovara zvaničnom domenu — npr. gradska parking aplikacija ima poznat URL." data-en="Check whether the URL matches the official domain — e.g. city parking app has a known URL.">Proverite da li URL odgovara zvaničnom domenu — npr. gradska parking aplikacija ima poznat URL.</li>
        <li data-sr="Koristite zvaničnu aplikaciju direktno umesto QR koda kada je moguće." data-en="Use the official app directly instead of a QR code when possible.">Koristite zvaničnu aplikaciju direktno umesto QR koda kada je moguće.</li>
        <li data-sr="Ako stranica traži CVV — zastanite i proverite da li je to normalno za taj servis." data-en="If the page requests CVV — pause and check whether that is normal for this service.">Ako stranica traži CVV — zastanite i proverite da li je to normalno za taj servis.</li>
        <li data-sr="Proverite SMS od banke — da li je uplata registrovana kod pravog primaoca." data-en="Check SMS from bank — is the payment registered to the correct recipient.">Proverite SMS od banke — da li je uplata registrovana kod pravog primaoca.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Checklista pre uplate putem QR koda" data-en="Checklist before paying via QR code">Checklista pre uplate putem QR koda</h2>
      <ol class="bullets">
        <li data-sr="Da li QR nalepnica izgleda originalno ili kao da je zalepljena odozgo?" data-en="Does the QR sticker look original or like it was placed on top?">Da li QR nalepnica izgleda originalno ili kao da je zalepljena odozgo?</li>
        <li data-sr="Da li sam pročitao URL koji se otvorio pre unosa podataka?" data-en="Did I read the URL that opened before entering data?">Da li sam pročitao URL koji se otvorio pre unosa podataka?</li>
        <li data-sr="Da li URL odgovara zvaničnom sajtu servisa koji plaćam?" data-en="Does the URL match the official website of the service I am paying?">Da li URL odgovara zvaničnom sajtu servisa koji plaćam?</li>
        <li data-sr="Da li stranica ima https i validan SSL sertifikat?" data-en="Does the page have https and a valid SSL certificate?">Da li stranica ima https i validan SSL sertifikat?</li>
        <li data-sr="Da li ovaj servis uobičajeno traži CVV i pun broj kartice?" data-en="Does this service normally request CVV and full card number?">Da li ovaj servis uobičajeno traži CVV i pun broj kartice?</li>
        <li data-sr="Da li mogu da platim kroz zvaničnu aplikaciju umesto QR koda?" data-en="Can I pay through the official app instead of the QR code?">Da li mogu da platim kroz zvaničnu aplikaciju umesto QR koda?</li>
        <li data-sr="Da li je stigla potvrda plaćanja od servisa nakon uplate?" data-en="Did a payment confirmation arrive from the service after payment?">Da li je stigla potvrda plaćanja od servisa nakon uplate?</li>
        <li data-sr="Da li bankovni SMS prikazuje tačan naziv primaoca?" data-en="Does the bank SMS show the correct payee name?">Da li bankovni SMS prikazuje tačan naziv primaoca?</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion arises: steps to take">Ako sumnja krene: redosled poteza</h2>
      <ol class="bullets">
        <li data-sr="Odmah kontaktirati banku i blokirati karticu." data-en="Immediately contact the bank and block the card.">Odmah kontaktirati banku i blokirati karticu.</li>
        <li data-sr="Sačuvati snimak ekrana lažne stranice i URL-a." data-en="Save a screenshot of the fake page and URL.">Sačuvati snimak ekrana lažne stranice i URL-a.</li>
        <li data-sr="Obavestiti upravljača lokacije (restoran, parking servis, institucija) da proveri QR kodove." data-en="Notify the location manager (restaurant, parking service, institution) to check QR codes.">Obavestiti upravljača lokacije (restoran, parking servis, institucija) da proveri QR kodove.</li>
        <li data-sr="Prijaviti incident policiji i nadležnom regulatoru za platne usluge." data-en="Report the incident to police and the relevant payment services regulator.">Prijaviti incident policiji i nadležnom regulatoru za platne usluge.</li>
        <li data-sr="Promeniti lozinke naloga ako je stranica tražila prijavu." data-en="Change account passwords if the page requested login.">Promeniti lozinke naloga ako je stranica tražila prijavu.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
      <ul class="bullets">
        <li data-sr="Da li si pročitao URL koji se otvorio pre nego što si uneo podatke kartice?" data-en="'Did you read the URL that opened before entering card details?">Da li si pročitao URL koji se otvorio pre nego što si uneo podatke kartice?</li>
        <li data-sr="Da li je potvrda plaćanja stigla od servisa ili ne?" data-en="'Did a payment confirmation arrive from the service or not?">Da li je potvrda plaćanja stigla od servisa ili ne?</li>
        <li data-sr="Kontaktiraj banku odmah i reci im da si možda uneo podatke kartice na lažnoj stranici." data-en="'Contact the bank immediately and tell them you may have entered card details on a fake page.">Kontaktiraj banku odmah i reci im da si možda uneo podatke kartice na lažnoj stranici.</li>
        <li data-sr="Uvek proveri URL koji se otvori kada skenirate QR kod — posebno ako traži podatke kartice." data-en="'Always check the URL that opens when scanning a QR code — especially if it asks for card details.">Uvek proveri URL koji se otvori kada skenirate QR kod — posebno ako traži podatke kartice.</li>
      </ul>
    </section>

    
  `
};
