if (!window.SCAM_CONTENT) window.SCAM_CONTENT = {};
window.SCAM_CONTENT["fake-cold-wallet-replacement-scam"] = {
  raw_html: `
<section class="content-section">
  <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
  <p data-sr="Hardverski (cold) novčanik čuva ključeve van mreže. Ako dobijete neočekivani paket zamene ili poziv podrške da zamenite uređaj, možete dobiti kompromitovan primerak koji je već podešen da pokupi seed ili transakcije." data-en="A hardware (cold) wallet stores keys offline. If you get an unexpected replacement package or a support call to swap devices, you may receive a compromised unit preset to capture a seed or transactions.">Hardverski (cold) novčanik čuva ključeve van mreže. Ako dobijete neočekivani paket zamene ili poziv podrške da zamenite uređaj, možete dobiti kompromitovan primerak koji je već podešen da pokupi seed ili transakcije.</p>
  <p data-sr="Zvanični proizvođači ne šalju zamenske uređaje bez vašeg tiketa i ne traže seed telefonom." data-en="Official vendors do not ship replacement devices without your ticket and do not ask for a seed by phone.">Zvanični proizvođači ne šalju zamenske uređaje bez vašeg tiketa i ne traže seed telefonom.</p>
</section>

<section class="content-section">
  <h2 data-sr="Hronološki tok (faze)" data-en="Timeline (phases)">Hronološki tok (faze)</h2>

  <article class="phase">
    <h3 data-sr="Faza 1 — Poruka o riziku" data-en="Phase 1 — Risk message">Faza 1 — Poruka o riziku</h3>
    <p data-sr="Imejl, SMS ili poziv tvrde da je otkriven bezbednosni problem sa vašim modelom novčanika i da morate zameniti uređaj." data-en="Email, SMS, or a call claims a security issue was found with your wallet model and you must replace the device.">Imejl, SMS ili poziv tvrde da je otkriven bezbednosni problem sa vašim modelom novčanika i da morate zameniti uređaj.</p>
    <ul class="bullets">
      <li data-sr="Jezik je zvaničan i koristi logo proizvođača." data-en="The wording is official-looking and uses the vendor logo.">Jezik je zvaničan i koristi logo proizvođača.</li>
      <li data-sr="Link vodi na formu za porudžbinu besplatne zamene." data-en="A link leads to a form to order a free replacement.">Link vodi na formu za porudžbinu besplatne zamene.</li>
      <li data-sr="Traže serijski broj i adresu za slanje." data-en="They ask for a serial number and shipping address.">Traže serijski broj i adresu za slanje.</li>
      <li data-sr="Pritisak da brzo odgovorite zbog isteka kampanje." data-en="Pressure to respond quickly because a campaign expires.">Pritisak da brzo odgovorite zbog isteka kampanje.</li>
    </ul>
    <div class="callout"><strong data-sr="Korisnik je podelio adresu i podatke o uređaju.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Korisnik je podelio adresu i podatke o uređaju." data-en="The user shared address and device details.">Korisnik je podelio adresu i podatke o uređaju.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 2 — Isporuka paketa" data-en="Phase 2 — Package delivery">Faza 2 — Isporuka paketa</h3>
    <p data-sr="Kurir donosi kutiju koja liči na originalno pakovanje. Uređaj izgleda kao pravi model." data-en="A courier delivers a box that looks like original packaging. The device looks like the real model.">Kurir donosi kutiju koja liči na originalno pakovanje. Uređaj izgleda kao pravi model.</p>
    <ul class="bullets">
      <li data-sr="U kutiji je štampano uputstvo sa QR kodom ka aktivacionom sajtu." data-en="The box includes a printed guide with a QR to an activation site.">U kutiji je štampano uputstvo sa QR kodom ka aktivacionom sajtu.</li>
      <li data-sr="Uputstvo traži da unesete postojeću seed frazu radi migracije." data-en="The guide asks you to enter an existing seed for migration.">Uputstvo traži da unesete postojeću seed frazu radi migracije.</li>
      <li data-sr="Firmware verzija na ekranu može biti neobična ili tražiti USB ažuriranje sa fleške." data-en="The on-screen firmware version may be odd or ask for USB update from a thumb drive.">Firmware verzija na ekranu može biti neobična ili tražiti USB ažuriranje sa fleške.</li>
      <li data-sr="Uređaj može tražiti da instalirate drajver sa priloženog linka." data-en="The device may ask you to install a driver from an enclosed link.">Uređaj može tražiti da instalirate drajver sa priloženog linka.</li>
    </ul>
    <div class="callout"><strong data-sr="Korisnik je otvorio paket i uključio uređaj.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Korisnik je otvorio paket i uključio uređaj." data-en="The user opened the package and powered the device on.">Korisnik je otvorio paket i uključio uređaj.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching at this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="tech-support-scam.html" data-sr="Lažna tehnička podrška — sličan ton hitnosti." data-en="Tech support scam — similar urgency tone.">Lažna tehnička podrška — sličan ton hitnosti.</a></li>
        <li><a href="seed-phrase-scam.html" data-sr="Seed fraza — ako uputstvo traži reči." data-en="Seed phrase scam — if the guide asks for words.">Seed fraza — ako uputstvo traži reči.</a></li>
      </ul>
    </div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 3 — Kompromitacija" data-en="Phase 3 — Compromise">Faza 3 — Kompromitacija</h3>
    <p data-sr="Seed ili PIN se otkriva kroz lažni softver, snimljen ekran, ili zlonamerni firmware." data-en="The seed or PIN is exposed through fake software, recorded screen, or malicious firmware.">Seed ili PIN se otkriva kroz lažni softver, snimljen ekran, ili zlonamerni firmware.</p>
    <ul class="bullets">
      <li data-sr="Lažni desktop aplikacija traži frazu umesto da je unosite samo na uređaju." data-en="A fake desktop app asks for the phrase instead of entry only on the device.">Lažni desktop aplikacija traži frazu umesto da je unosite samo na uređaju.</li>
      <li data-sr="Ažuriranje šalje kopiju seeda na udaljeni server." data-en="An update sends a copy of the seed to a remote server.">Ažuriranje šalje kopiju seeda na udaljeni server.</li>
      <li data-sr="Uređaj generiše adrese koje kontroliše napadač." data-en="The device generates addresses the attacker controls.">Uređaj generiše adrese koje kontroliše napadač.</li>
      <li data-sr="Korisnik ne primećuje razliku dok ne pokuša transfer na staru adresu." data-en="The user does not notice until trying a transfer to an old address.">Korisnik ne primećuje razliku dok ne pokuša transfer na staru adresu.</li>
    </ul>
    <div class="callout"><strong data-sr="Tajni podaci su uneti u sistem koji nije zvanična fabrička aplikacija.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Tajni podaci su uneti u sistem koji nije zvanična fabrička aplikacija." data-en="Secrets were entered into a system that is not the official factory app.">Tajni podaci su uneti u sistem koji nije zvanična fabrička aplikacija.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 4 — Krađa sredstava" data-en="Phase 4 — Theft of funds">Faza 4 — Krađa sredstava</h3>
    <p data-sr="Sa seedom napadač prebacuje kripto sa svih adresa koje su bile vezane za staru rezervu." data-en="With the seed the attacker moves crypto from all addresses tied to the old backup.">Sa seedom napadač prebacuje kripto sa svih adresa koje su bile vezane za staru rezervu.</p>
    <ul class="bullets">
      <li data-sr="Transferi mogu biti brzi i u više valuta." data-en="Transfers may be fast and across multiple assets.">Transferi mogu biti brzi i u više valuta.</li>
      <li data-sr="Žrtva pokušava da koristi novi uređaj koji zapravo nije bezbedan." data-en="The victim tries to use the new device that is not actually safe.">Žrtva pokušava da koristi novi uređaj koji zapravo nije bezbedan.</li>
      <li data-sr="Stari uređaj može biti još uvek bezbedan, ali su reči već otkrivene." data-en="The old device may still be safe, but the words are already exposed.">Stari uređaj može biti još uvek bezbedan, ali su reči već otkrivene.</li>
    </ul>
    <div class="callout"><strong data-sr="Izlazne transakcije su vidljive na lancu.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Izlazne transakcije su vidljive na lancu." data-en="Outgoing transactions are visible on-chain.">Izlazne transakcije su vidljive na lancu.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 5 — Otkrivanje" data-en="Phase 5 — Discovery">Faza 5 — Otkrivanje</h3>
    <p data-sr="Korisnik kontaktira pravog prodavca i saznaje da nisu slali zamenu ili da serijski broj ne odgovara." data-en="The user contacts the real vendor and learns they did not ship a replacement or the serial does not match.">Korisnik kontaktira pravog prodavca i saznaje da nisu slali zamenu ili da serijski broj ne odgovara.</p>
    <ul class="bullets">
      <li data-sr="Zvanična podrška potvrđuje da kampanja iz poruke ne postoji." data-en="Official support confirms the campaign in the message does not exist.">Zvanična podrška potvrđuje da kampanja iz poruke ne postoji.</li>
      <li data-sr="Paket nema trag u sistemu garancije." data-en="The package has no trace in the warranty system.">Paket nema trag u sistemu garancije.</li>
      <li data-sr="Korisnik shvata da je QR vodio na lažni domen." data-en="The user realizes the QR led to a fake domain.">Korisnik shvata da je QR vodio na lažni domen.</li>
    </ul>
    <div class="callout"><strong data-sr="Potvrđeno je da isporuka nije od ovlašćenog kanala.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Potvrđeno je da isporuka nije od ovlašćenog kanala." data-en="It is confirmed the shipment was not from an authorized channel.">Potvrđeno je da isporuka nije od ovlašćenog kanala.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching at this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="wallet-drainer.html" data-sr="Wallet drainer — druga ruta istog gubitka." data-en="Wallet drainer — another route to the same loss.">Wallet drainer — druga ruta istog gubitka.</a></li>
        <li><a href="impersonation-scam.html" data-sr="Lažno predstavljanje brenda." data-en="Impersonation scam — brand impersonation.">Lažno predstavljanje brenda.</a></li>
      </ul>
    </div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 6 — Šta uraditi posle" data-en="Phase 6 — What to do after">Faza 6 — Šta uraditi posle</h3>
    <p data-sr="Tretirajte seed kao kompromitovan: novi novčanik, nova fraza, prenos preostalog samo ako ga još ima. Prijavite prevaru proizvođaču i pošti." data-en="Treat the seed as compromised: new wallet, new phrase, move any remainder only if it still exists. Report the fraud to the vendor and postal service.">Tretirajte seed kao kompromitovan: novi novčanik, nova fraza, prenos preostalog samo ako ga još ima. Prijavite prevaru proizvođaču i pošti.</p>
    <ul class="bullets">
      <li data-sr="Ne koristite lažni uređaj dalje; izolujte ga od mreže." data-en="Do not keep using the fake device; air-gap it.">Ne koristite lažni uređaj dalje; izolujte ga od mreže.</li>
      <li data-sr="Kupujte samo od ovlašćenih prodavaca navedenih na sajtu proizvođača." data-en="Buy only from authorized resellers listed on the vendor site.">Kupujte samo od ovlašćenih prodavaca navedenih na sajtu proizvođača.</li>
      <li data-sr="Proveravajte celokupan URL pre instalacije softvera." data-en="Verify the full URL before installing software.">Proveravajte celokupan URL pre instalacije softvera.</li>
      <li data-sr="Čuvajte ambalažu i dokumentaciju za policijsku prijavu." data-en="Keep packaging and paperwork for police reporting.">Čuvajte ambalažu i dokumentaciju za policijsku prijavu.</li>
    </ul>
    <div class="callout"><strong data-sr="Novi bezbedan lanac rezerve je uspostavljen van kompromitovanog uređaja.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Novi bezbedan lanac rezerve je uspostavljen van kompromitovanog uređaja." data-en="A new safe backup chain is established away from the compromised device.">Novi bezbedan lanac rezerve je uspostavljen van kompromitovanog uređaja.</span></div>
  </article>
</section>

<section class="content-section">
  <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
  <ul class="bullets">
    <li data-sr="Paket koji niste naručili nakon vašeg tiketa kod prodavca." data-en="A package you did not order after your reseller ticket.">Paket koji niste naručili nakon vašeg tiketa kod prodavca.</li>
    <li data-sr="Uputstvo traži seed na papiru ili u aplikaciji na računaru." data-en="Instructions ask for the seed on paper or in a desktop app.">Uputstvo traži seed na papiru ili u aplikaciji na računaru.</li>
    <li data-sr="QR kod na letku koji nije na zvaničnom sajtu proizvođača." data-en="A QR on a flyer not on the vendor's official site.">QR kod na letku koji nije na zvaničnom sajtu proizvođača.</li>
    <li data-sr="Poziv koji traži serijski broj i PIN." data-en="A call asking for serial number and PIN.">Poziv koji traži serijski broj i PIN.</li>
    <li data-sr="Firmware ažuriranje sa nepoznatog USB-a u paketu." data-en="Firmware update from an unknown USB in the package.">Firmware ažuriranje sa nepoznatog USB-a u paketu.</li>
    <li data-sr="Cena uređaja u paketu je poklon bez vaše garancijske prijave." data-en="The device in the package is a gift without your warranty claim.">Cena uređaja u paketu je poklon bez vaše garancijske prijave.</li>
    <li data-sr="Domen u uputstvu je homoglif zvaničnog domena." data-en="The domain in the guide is a homoglyph of the official domain.">Domen u uputstvu je homoglif zvaničnog domena.</li>
    <li data-sr="Kurir ne može da potvrdi pošiljaoca koga poznajete." data-en="The courier cannot confirm a sender you know.">Kurir ne može da potvrdi pošiljaoca koga poznajete.</li>
    <li data-sr="Lažni mejl sa adrese koja liči na zvaničnu." data-en="Fake email from an address that looks official.">Lažni mejl sa adrese koja liči na zvaničnu.</li>
    <li data-sr="Zahtev da vratite stari uređaj nepoznatoj adresi." data-en="A request to return the old device to an unknown address.">Zahtev da vratite stari uređaj nepoznatoj adresi.</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
  <ol class="steps">
    <li data-sr="Da li imate otvoren tiket kod ovlašćenog prodavca za ovu isporuku?" data-en="Do you have an open ticket with an authorized reseller for this shipment?">Da li imate otvoren tiket kod ovlašćenog prodavca za ovu isporuku?</li>
    <li data-sr="Da li možete pozvati broj sa zadnje strane kutije proizvođača, ne iz letka?" data-en="Can you call the number on the device box, not the flyer?">Da li možete pozvati broj sa zadnje strane kutije proizvođača, ne iz letka?</li>
    <li data-sr="Da li URL sa uputstva odgovara HTTPS sajtu na kom ste bili ranije?" data-en="Does the guide URL match the HTTPS site you used before?">Da li URL sa uputstva odgovara HTTPS sajtu na kom ste bili ranije?</li>
    <li data-sr="Da li proizvođač javno najavljuje recall na svom blogu?" data-en="Does the vendor publicly announce a recall on their blog?">Da li proizvođač javno najavljuje recall na svom blogu?</li>
    <li data-sr="Da li biste uneli seed u bilo koji softver koji nije od proizvođača?" data-en="Would you enter a seed into any non-vendor software?">Da li biste uneli seed u bilo koji softver koji nije od proizvođača?</li>
    <li data-sr="Da li se serijski broj poklapa sa vašom originalnom kupovinom?" data-en="Does the serial match your original purchase?">Da li se serijski broj poklapa sa vašom originalnom kupovinom?</li>
    <li data-sr="Da li paket ima carinsku deklaraciju sa sumnjivim pošiljaocem?" data-en="Does the package have customs paperwork with a suspicious sender?">Da li paket ima carinsku deklaraciju sa sumnjivim pošiljaocem?</li>
    <li data-sr="Da li biste instalirali firmware sa USB-a iz nepoznatog paketa?" data-en="Would you install firmware from a USB from an unknown package?">Da li biste instalirali firmware sa USB-a iz nepoznatog paketa?</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Checklista" data-en="Checklist">Checklista</h2>
  <ul class="bullets">
    <li data-sr="Da li sam naručio zamenu preko zvaničnog naloga?" data-en="Did I order replacement through an official account?">Da li sam naručio zamenu preko zvaničnog naloga?</li>
    <li data-sr="Da li sam uporedio domen sa bookmarkom?" data-en="Did I compare the domain to my bookmark?">Da li sam uporedio domen sa bookmarkom?</li>
    <li data-sr="Da li sam ikada uneo seed u računar?" data-en="Have I ever typed a seed into a computer?">Da li sam ikada uneo seed u računar?</li>
    <li data-sr="Da li znam da seed ide samo na ekran samog uređaja?" data-en="Do I know the seed goes only on the device screen itself?">Da li znam da seed ide samo na ekran samog uređaja?</li>
    <li data-sr="Da li čuvam staru kutiju sa kontaktima proizvođača?" data-en="Do I keep the old box with vendor contacts?">Da li čuvam staru kutiju sa kontaktima proizvođača?</li>
    <li data-sr="Da li bih pitao drugog kripto korisnika pre migracije?" data-en="Would I ask another crypto user before migrating?">Da li bih pitao drugog kripto korisnika pre migracije?</li>
    <li data-sr="Da li je poklon prevelik da bude besplatan?" data-en="Is the gift too large to be free?">Da li je poklon prevelik da bude besplatan?</li>
    <li data-sr="Da li sam proverio hash firmwarea na sajtu proizvođača?" data-en="Did I verify firmware hash on the vendor site?">Da li sam proverio hash firmwarea na sajtu proizvođača?</li>
    <li data-sr="Da li kurir traži da platite carinu gotovinom njemu?" data-en="Does the courier ask you to pay customs cash to them?">Da li kurir traži da platite carinu gotovinom njemu?</li>
    <li data-sr="Da li postoji pritisak da odmah migrirate sredstva?" data-en="Is there pressure to migrate funds immediately?">Da li postoji pritisak da odmah migrirate sredstva?</li>
    <li data-sr="Da li je neko tražio fotografiju seed kartice?" data-en="Did anyone ask for a photo of the seed card?">Da li je neko tražio fotografiju seed kartice?</li>
    <li data-sr="Da li imam listu ovlašćenih prodavaca za moj region?" data-en="Do I have a list of authorized resellers for my region?">Da li imam listu ovlašćenih prodavaca za moj region?</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Ako sumnja krene" data-en="If suspicion starts">Ako sumnja krene</h2>
  <ol class="steps">
    <li data-sr="Ne unosite seed ni na jedan novi uređaj iz paketa." data-en="Do not enter a seed on any new device from the package.">Ne unosite seed ni na jedan novi uređaj iz paketa.</li>
    <li data-sr="Pozovite proizvođača preko broja sa zvaničnog sajta." data-en="Call the vendor using the number from the official site.">Pozovite proizvođača preko broja sa zvaničnog sajta.</li>
    <li data-sr="Ako ste već uneli seed, smatrajte ga kompromitovanim i prebacite ostatak na novu frazu." data-en="If you already entered a seed, treat it as compromised and move any remainder to a new phrase.">Ako ste već uneli seed, smatrajte ga kompromitovanim i prebacite ostatak na novu frazu.</li>
    <li data-sr="Sačuvajte paket i dokumenta za prijavu." data-en="Keep the package and documents for reporting.">Sačuvajte paket i dokumenta za prijavu.</li>
    <li data-sr="Ne vraćajte uređaj na adresu iz uputstva bez provere kod prodavca." data-en="Do not return the device to an address from the guide without reseller verification.">Ne vraćajte uređaj na adresu iz uputstva bez provere kod prodavca.</li>
    <li data-sr="Obavestite kurirsku službu ako sumnjate na lažnu pošiljku." data-en="Notify the courier service if you suspect a fake shipment.">Obavestite kurirsku službu ako sumnjate na lažnu pošiljku.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
  <ul class="bullets">
    <li data-sr="Da li su već uneli seed u uređaj iz neočekivanog paketa?" data-en="Did they already enter a seed on a device from an unexpected package?">Da li su već uneli seed u uređaj iz neočekivanog paketa?</li>
    <li data-sr="Da li im je stigao kurir bez prethodnog tiketa?" data-en="Did a courier arrive without a prior ticket?">Da li im je stigao kurir bez prethodnog tiketa?</li>
    <li data-sr="Da li su instalirali softver sa QR koda iz kutije?" data-en="Did they install software from a QR in the box?">Da li su instalirali softver sa QR koda iz kutije?</li>
    <li data-sr="Da li još drže sredstva na starim adresama?" data-en="Do they still hold funds on old addresses?">Da li još drže sredstva na starim adresama?</li>
  </ul>
  <p data-sr="Rečenice koje rade:" data-en="Sentences that help:">Rečenice koje rade:</p>
  <ul class="bullets">
    <li data-sr="Zvanična zamena ide samo kroz tvoj nalog kod prodavca kog si već koristio." data-en="Official replacement only goes through your account at a reseller you already used.">Zvanična zamena ide samo kroz tvoj nalog kod prodavca kog si već koristio.</li>
    <li data-sr="Hajde da pozovemo broj sa sajta proizvođača zajedno, ne broj iz poruke." data-en="Let's call the vendor site number together, not the number from the message.">Hajde da pozovemo broj sa sajta proizvođača zajedno, ne broj iz poruke.</li>
    <li data-sr="Ni jedan pravi proizvođač ne traži seed u imejlu ili četu." data-en="No real vendor asks for a seed in email or chat.">Ni jedan pravi proizvođač ne traži seed u imejlu ili četu.</li>
    <li data-sr="Ako je seed bio u lažnom uređaju, treba novi novčanik i hitan prenos ostatka." data-en="If the seed went into a fake device, they need a new wallet and urgent move of any remainder.">Ako je seed bio u lažnom uređaju, treba novi novčanik i hitan prenos ostatka.</li>
  </ul>
</section>
`
};
