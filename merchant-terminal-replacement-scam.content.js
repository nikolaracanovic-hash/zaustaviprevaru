if (!window.SCAM_CONTENT) window.SCAM_CONTENT = {};
window.SCAM_CONTENT["merchant-terminal-replacement-scam"] = {
  raw_html: `
<section class="content-section">
  <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
  <p data-sr="Trgovac očekuje da će platni terminal obračunavati kartice na njegov račun. Lažni servis šalje novi uređaj ili ažuriranje koje preusmerava transakcije, snima PIN ili kartične podatke." data-en="A merchant expects the payment terminal to settle card sales to their account. A fake service ships a new device or update that redirects transactions, captures PINs, or card data.">Trgovac očekuje da će platni terminal obračunavati kartice na njegov račun. Lažni servis šalje novi uređaj ili ažuriranje koje preusmerava transakcije, snima PIN ili kartične podatke.</p>
  <p data-sr="Zvanična zamena ide kroz poznati kontakt kod banke ili procesora kartica, uz evidenciju serijskog broja." data-en="Official replacement goes through a known bank or card processor contact, with serial number records.">Zvanična zamena ide kroz poznati kontakt kod banke ili procesora kartica, uz evidenciju serijskog broja.</p>
</section>

<section class="content-section">
  <h2 data-sr="Hronološki tok (faze)" data-en="Timeline (phases)">Hronološki tok (faze)</h2>

  <article class="phase">
    <h3 data-sr="Faza 1 — Lažni poziv ili imejl" data-en="Phase 1 — Fake call or email">Faza 1 — Lažni poziv ili imejl</h3>
    <p data-sr="Neko se predstavlja kao banka, akviziter ili PCI tim i najavljuje obaveznu zamenu terminala zbog sigurnosti." data-en="Someone poses as the bank, acquirer, or PCI team and announces a mandatory terminal swap for security.">Neko se predstavlja kao banka, akviziter ili PCI tim i najavljuje obaveznu zamenu terminala zbog sigurnosti.</p>
    <ul class="bullets">
      <li data-sr="Jezik zvuči tehnički i spominje novi standard ili zakonski rok." data-en="The wording sounds technical and mentions a new standard or legal deadline.">Jezik zvuči tehnički i spominje novi standard ili zakonski rok.</li>
      <li data-sr="Traže ime firme, adresu i broj postojećeg terminala." data-en="They ask for business name, address, and existing terminal number.">Traže ime firme, adresu i broj postojećeg terminala.</li>
      <li data-sr="Nude besplatnu isporuku ako odmah potvrdite adresu." data-en="They offer free shipping if you confirm the address immediately.">Nude besplatnu isporuku ako odmah potvrdite adresu.</li>
      <li data-sr="Broj pozivaoca nije isti kao broj na ugovoru o merchant uslugama." data-en="The caller ID number is not the same as on your merchant services contract.">Broj pozivaoca nije isti kao broj na ugovoru o merchant uslugama.</li>
    </ul>
    <div class="callout"><strong data-sr="Trgovac je potvrdio isporuku adrese ili podataka o terminalu.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Trgovac je potvrdio isporuku adrese ili podataka o terminalu." data-en="The merchant confirmed shipping address or terminal details.">Trgovac je potvrdio isporuku adrese ili podataka o terminalu.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 2 — Isporuka uređaja ili USB" data-en="Phase 2 — Device or USB delivery">Faza 2 — Isporuka uređaja ili USB</h3>
    <p data-sr="Stiže kurir sa kutijom koja liči na poznate brendove terminala ili USB za ažuriranje." data-en="A courier arrives with a box resembling known terminal brands or a USB for an update.">Stiže kurir sa kutijom koja liči na poznate brendove terminala ili USB za ažuriranje.</p>
    <ul class="bullets">
      <li data-sr="Uputstvo traži da zamenite postojeći uređaj odmah i pošaljete stari na nepoznatu adresu." data-en="Instructions ask you to replace the existing device immediately and send the old one to an unknown address.">Uputstvo traži da zamenite postojeći uređaj odmah i pošaljete stari na nepoznatu adresu.</li>
      <li data-sr="USB sadrži brzo ažuriranje koje traži administratorsku lozinku." data-en="The USB contains a quick update that asks for an admin password.">USB sadrži brzo ažuriranje koje traži administratorsku lozinku.</li>
      <li data-sr="Novi terminal izgleda jeftinije ili drugačije od starog modela." data-en="The new terminal looks cheaper or different from the old model.">Novi terminal izgleda jeftinije ili drugačije od starog modela.</li>
      <li data-sr="Serijski broj ne odgovara porudžbini koju imate u dokumentaciji." data-en="The serial number does not match an order in your paperwork.">Serijski broj ne odgovara porudžbini koju imate u dokumentaciji.</li>
    </ul>
    <div class="callout"><strong data-sr="Lažni hardver ili softver je priključen na mrežu prodavnice.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Lažni hardver ili softver je priključen na mrežu prodavnice." data-en="Fake hardware or software is connected to the store network.">Lažni hardver ili softver je priključen na mrežu prodavnice.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching at this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="fake-call-scam.html" data-sr="Lažni poziv — ulazni kanal." data-en="Fake call — entry channel.">Lažni poziv — ulazni kanal.</a></li>
        <li><a href="pos-skimming.html" data-sr="POS skiming — srodna krađa na terminalu." data-en="POS skimming — related theft at the terminal.">POS skiming — srodna krađa na terminalu.</a></li>
      </ul>
    </div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 3 — Kompromitacija" data-en="Phase 3 — Compromise">Faza 3 — Kompromitacija</h3>
    <p data-sr="Zlonamerni firmware ili aplikacija kopira kartične tragove, PIN unose ili menja TID/MID podešavanja." data-en="Malicious firmware or software copies card traces, PIN entry, or changes TID/MID settings.">Zlonamerni firmware ili aplikacija kopira kartične tragove, PIN unose ili menja TID/MID podešavanja.</p>
    <ul class="bullets">
      <li data-sr="Transakcije se i dalje završavaju ali obračun ide na tuđi merchant ID." data-en="Transactions still complete but settlement goes to another merchant ID.">Transakcije se i dalje završavaju ali obračun ide na tuđi merchant ID.</li>
      <li data-sr="Izvodi pokazuju uplate koje ne odgovaraju dnevnom izveštaju terminala." data-en="Statements show deposits that do not match the terminal daily report.">Izvodi pokazuju uplate koje ne odgovaraju dnevnom izveštaju terminala.</li>
      <li data-sr="Kupci prijavljuju dupla naplaćivanja ili čudne SMS poruke." data-en="Customers report double charges or odd SMS messages.">Kupci prijavljuju dupla naplaćivanja ili čudne SMS poruke.</li>
      <li data-sr="Mrežni saobraćaj terminala ide ka nepoznatim domenima." data-en="Terminal network traffic goes to unknown domains.">Mrežni saobraćaj terminala ide ka nepoznatim domenima.</li>
    </ul>
    <div class="callout"><strong data-sr="Prvi sumnjivi diskrepancija između prodaje i uplate.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Prvi sumnjivi diskrepancija između prodaje i uplate." data-en="First suspicious mismatch between sales and deposit.">Prvi sumnjivi diskrepancija između prodaje i uplate.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 4 — Finansijski gubitak" data-en="Phase 4 — Financial loss">Faza 4 — Finansijski gubitak</h3>
    <p data-sr="Novac od kartica ne stiže na račun trgovca ili stiže u smanjenom obimu dok se ne otkrije uzrok." data-en="Card money does not reach the merchant account or arrives reduced until the cause is found.">Novac od kartica ne stiže na račun trgovca ili stiže u smanjenom obimu dok se ne otkrije uzrok.</p>
    <ul class="bullets">
      <li data-sr="Chargeback talas može uslediti ako su kartice kompromitovane." data-en="A chargeback wave may follow if cards were compromised.">Chargeback talas može uslediti ako su kartice kompromitovane.</li>
      <li data-sr="Blokada terminala od strane procesora zbog sumnjive aktivnosti." data-en="Processor blocks the terminal due to suspicious activity.">Blokada terminala od strane procesora zbog sumnjive aktivnosti.</li>
      <li data-sr="Reputacioni gubitak sa kupcima." data-en="Reputational loss with customers.">Reputacioni gubitak sa kupcima.</li>
    </ul>
    <div class="callout"><strong data-sr="Potvrđen je manjak u odnosu na očekivani obračun.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Potvrđen je manjak u odnosu na očekivani obračun." data-en="A shortfall versus expected settlement is confirmed.">Potvrđen je manjak u odnosu na očekivani obračun.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 5 — Istraga" data-en="Phase 5 — Investigation">Faza 5 — Istraga</h3>
    <p data-sr="Banka, procesor ili PCI konsultant pregleda serijske brojeve, firmware i mrežne logove." data-en="The bank, processor, or PCI consultant reviews serials, firmware, and network logs.">Banka, procesor ili PCI konsultant pregleda serijske brojeve, firmware i mrežne logove.</p>
    <ul class="bullets">
      <li data-sr="Otkriva se da zamena nije bila naručena kroz zvanični kanal." data-en="The swap is found not to have been ordered through an official channel.">Otkriva se da zamena nije bila naručena kroz zvanični kanal.</li>
      <li data-sr="Stari uređaj je poslat prevarantu sa još uvek aktivnim ključevima." data-en="The old device was mailed to the scammer with keys still active.">Stari uređaj je poslat prevarantu sa još uvek aktivnim ključevima.</li>
      <li data-sr="Mreža prodavnice može zahtevati reproviziju zbog zlonamernog softvera." data-en="The store network may need reimaging due to malware.">Mreža prodavnice može zahtevati reproviziju zbog zlonamernog softvera.</li>
    </ul>
    <div class="callout"><strong data-sr="Zvanična potvrda kompromitacije terminala ili mreže.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Zvanična potvrda kompromitacije terminala ili mreže." data-en="Official confirmation of terminal or network compromise.">Zvanična potvrda kompromitacije terminala ili mreže.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching at this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="payment-diversion.html" data-sr="Preusmerenje plaćanja — ako su promenjeni podaci obračuna." data-en="Payment diversion — if settlement details were altered.">Preusmerenje plaćanja — ako su promenjeni podaci obračuna.</a></li>
        <li><a href="card-skimming.html" data-sr="Skiming kartica — srodna krađa podataka." data-en="Card skimming — related data theft.">Skiming kartica — srodna krađa podataka.</a></li>
      </ul>
    </div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 6 — Oporavak i politika" data-en="Phase 6 — Recovery and policy">Faza 6 — Oporavak i politika</h3>
    <p data-sr="Isključite sumnjive uređaje, vratite zvanične terminale kroz banku, rotirajte lozinke, obučite osoblje, i uvedite pravilo da samo IT ili ovlašćeni servis smeju menjati terminal." data-en="Disconnect suspicious devices, restore official terminals through the bank, rotate passwords, train staff, and set a rule that only IT or authorized service may swap terminals.">Isključite sumnjive uređaje, vratite zvanične terminale kroz banku, rotirajte lozinke, obučite osoblje, i uvedite pravilo da samo IT ili ovlašćeni servis smeju menjati terminal.</p>
    <ul class="bullets">
      <li data-sr="Vodite belu listu serijskih brojeva i fotografija uređaja." data-en="Keep a whitelist of serial numbers and device photos.">Vodite belu listu serijskih brojeva i fotografija uređaja.</li>
      <li data-sr="Zahtevajte pisan nalog za svaku zamenu od menadžera naloga kod banke." data-en="Require a written work order for every swap from your bank account manager.">Zahtevajte pisan nalog za svaku zamenu od menadžera naloga kod banke.</li>
      <li data-sr="Segmentujte POS mrežu od ostalih sistema." data-en="Segment the POS network from other systems.">Segmentujte POS mrežu od ostalih sistema.</li>
      <li data-sr="Prijavite incident policiji i procesoru radi istrage." data-en="Report the incident to police and the processor for investigation.">Prijavite incident policiji i procesoru radi istrage.</li>
    </ul>
    <div class="callout"><strong data-sr="Samo ovlašćeni terminali su na mreži i osoblje zna proceduru provere.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Samo ovlašćeni terminali su na mreži i osoblje zna proceduru provere." data-en="Only authorized terminals are on the network and staff know the verification procedure.">Samo ovlašćeni terminali su na mreži i osoblje zna proceduru provere.</span></div>
  </article>
</section>

<section class="content-section">
  <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
  <ul class="bullets">
    <li data-sr="Hitna zamena bez pisanog naloga od poznatog menadžera." data-en="Urgent replacement without a written order from a known manager.">Hitna zamena bez pisanog naloga od poznatog menadžera.</li>
    <li data-sr="Zahtev da pošaljete stari terminal na adresu koja nije na ugovoru." data-en="A request to mail the old terminal to an address not on the contract.">Zahtev da pošaljete stari terminal na adresu koja nije na ugovoru.</li>
    <li data-sr="USB ili link za ažuriranje van portala procesora." data-en="A USB or update link outside the processor portal.">USB ili link za ažuriranje van portala procesora.</li>
    <li data-sr="Osoba koja ne može da navede broj vašeg merchant ugovora." data-en="Someone who cannot cite your merchant agreement number.">Osoba koja ne može da navede broj vašeg merchant ugovora.</li>
    <li data-sr="Cena besplatne zamene uz uslov da odmah deaktivirate stari uređaj." data-en="A free swap conditioned on immediately deactivating the old device.">Cena besplatne zamene uz uslov da odmah deaktivirate stari uređaj.</li>
    <li data-sr="Kurir koji ne zna ime vašeg procesora." data-en="A courier who does not know your processor's name.">Kurir koji ne zna ime vašeg procesora.</li>
    <li data-sr="Lažni mejl sa domenom sličnim banki." data-en="Fake email from a bank-like domain.">Lažni mejl sa domenom sličnim banki.</li>
    <li data-sr="Terminal traži dupli prolaz kartice bez razloga." data-en="The terminal asks for a double card swipe without reason.">Terminal traži dupli prolaz kartice bez razloga.</li>
    <li data-sr="Novi terminal nema naljepnicu ovlašćenog servisa." data-en="The new terminal lacks an authorized service sticker.">Novi terminal nema naljepnicu ovlašćenog servisa.</li>
    <li data-sr="Zahtev za administratorsku lozinku preko telefona." data-en="A request for an admin password over the phone.">Zahtev za administratorsku lozinku preko telefona.</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
  <ol class="steps">
    <li data-sr="Da li menadžer naloga u banci potvrđuje zamenu kada ga nazovete na njihov poznati broj?" data-en="Does your bank relationship manager confirm the swap when you call their known number?">Da li menadžer naloga u banci potvrđuje zamenu kada ga nazovete na njihov poznati broj?</li>
    <li data-sr="Da li serijski broj postoji u portalu procesora?" data-en="Does the serial exist in the processor portal?">Da li serijski broj postoji u portalu procesora?</li>
    <li data-sr="Da li je kurirska pošiljka vezana za porudžbinu koju vidite u sistemu?" data-en="Is the courier shipment tied to an order you see in the system?">Da li je kurirska pošiljka vezana za porudžbinu koju vidite u sistemu?</li>
    <li data-sr="Da li IT tim pregleda firmware pre instalacije?" data-en="Does IT review firmware before install?">Da li IT tim pregleda firmware pre instalacije?</li>
    <li data-sr="Da li POS mreža ima zaseban VLAN?" data-en="Does the POS network have a separate VLAN?">Da li POS mreža ima zaseban VLAN?</li>
    <li data-sr="Da li osoblje zna da ne prihvata USB od kurira?" data-en="Does staff know not to accept USBs from couriers?">Da li osoblje zna da ne prihvata USB od kurira?</li>
    <li data-sr="Da li dnevni izveštaj terminala odgovara izvodu?" data-en="Does the terminal daily report match the statement?">Da li dnevni izveštaj terminala odgovara izvodu?</li>
    <li data-sr="Da li imate fotografiju svakog instaliranog uređaja?" data-en="Do you have a photo of each installed device?">Da li imate fotografiju svakog instaliranog uređaja?</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Checklista" data-en="Checklist">Checklista</h2>
  <ul class="bullets">
    <li data-sr="Da li postoji lista ovlašćenih servisera?" data-en="Is there a list of authorized servicers?">Da li postoji lista ovlašćenih servisera?</li>
    <li data-sr="Da li menja terminal samo određena uloga u firmi?" data-en="Does only a defined role swap terminals?">Da li menja terminal samo određena uloga u firmi?</li>
    <li data-sr="Da li čuvamo sve serijske brojeve?" data-en="Do we keep all serial numbers?">Da li čuvamo sve serijske brojeve?</li>
    <li data-sr="Da li proveravamo imejl domen pošiljaoca?" data-en="Do we verify sender email domains?">Da li proveravamo imejl domen pošiljaoca?</li>
    <li data-sr="Da li znamo tačan izgled naloga našeg procesora?" data-en="Do we know exactly what our processor invoices look like?">Da li znamo tačan izgled naloga našeg procesora?</li>
    <li data-sr="Da li imamo incident plan za sumnjiv terminal?" data-en="Do we have an incident plan for a suspicious terminal?">Da li imamo incident plan za sumnjiv terminal?</li>
    <li data-sr="Da li obučavamo zaposlene svake godine?" data-en="Do we train employees annually?">Da li obučavamo zaposlene svake godine?</li>
    <li data-sr="Da li je Wi-Fi za goste odvojen od POS?" data-en="Is guest Wi-Fi separate from POS?">Da li je Wi-Fi za goste odvojen od POS?</li>
    <li data-sr="Da li logujemo ko je instalirao koji softver?" data-en="Do we log who installed which software?">Da li logujemo ko je instalirao koji softver?</li>
    <li data-sr="Da li imamo kontakt za fraud tim procesora?" data-en="Do we have a contact for the processor fraud team?">Da li imamo kontakt za fraud tim procesora?</li>
    <li data-sr="Da li proveravamo obračun posle svake zamene uređaja?" data-en="Do we verify settlement after each device swap?">Da li proveravamo obračun posle svake zamene uređaja?</li>
    <li data-sr="Da li zaposleni znaju ko je menadžer naloga u banci?" data-en="Do employees know who the bank relationship manager is?">Da li zaposleni znaju ko je menadžer naloga u banci?</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Ako sumnja krene" data-en="If suspicion starts">Ako sumnja krene</h2>
  <ol class="steps">
    <li data-sr="Isključite sumnjivi terminal iz mreže odmah." data-en="Disconnect the suspicious terminal from the network immediately.">Isključite sumnjivi terminal iz mreže odmah.</li>
    <li data-sr="Nazovite procesor na broj sa ugovora, ne iz poruke." data-en="Call the processor using the contract number, not from the message.">Nazovite procesor na broj sa ugovora, ne iz poruke.</li>
    <li data-sr="Ne vraćajte stari uređaj dok ne dobijete uputstvo sa zvaničnog portala." data-en="Do not return the old device until you get instructions from the official portal.">Ne vraćajte stari uređaj dok ne dobijete uputstvo sa zvaničnog portala.</li>
    <li data-sr="Sačuvajte ambalažu i serijske brojeve za prijavu." data-en="Keep packaging and serials for reporting.">Sačuvajte ambalažu i serijske brojeve za prijavu.</li>
    <li data-sr="Obavestite banku o mogućem preusmerenju obračuna." data-en="Notify the bank of possible settlement diversion.">Obavestite banku o mogućem preusmerenju obračuna.</li>
    <li data-sr="Pregledajte poslednje transakcije na starom terminalu u izveštajima." data-en="Review recent transactions on the old terminal in reports.">Pregledajte poslednje transakcije na starom terminalu u izveštajima.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
  <ul class="bullets">
    <li data-sr="Da li su zamenili terminal bez poziva menadžeru u banci?" data-en="Did they swap a terminal without calling the bank manager?">Da li su zamenili terminal bez poziva menadžeru u banci?</li>
    <li data-sr="Da li je stari uređaj poslat kurirskom službom na nepoznatu adresu?" data-en="Was the old device mailed by courier to an unknown address?">Da li je stari uređaj poslat kurirskom službom na nepoznatu adresu?</li>
    <li data-sr="Da li se iznos uplate na račun ne poklapa sa prodajom?" data-en="Does the deposit amount not match sales?">Da li se iznos uplate na račun ne poklapa sa prodajom?</li>
    <li data-sr="Da li su instalirali USB ili exe sa poruke?" data-en="Did they install a USB or exe from a message?">Da li su instalirali USB ili exe sa poruke?</li>
  </ul>
  <p data-sr="Rečenice koje rade:" data-en="Sentences that help:">Rečenice koje rade:</p>
  <ul class="bullets">
    <li data-sr="Zamena terminala ide samo kroz broj koji imate na ugovoru sa bankom." data-en="Terminal swaps only go through the number on your bank contract.">Zamena terminala ide samo kroz broj koji imate na ugovoru sa bankom.</li>
    <li data-sr="Hajde odmah da isključimo uređaj iz interneta dok ne potvrdi procesor." data-en="Let's disconnect the device from the internet now until the processor confirms.">Hajde odmah da isključimo uređaj iz interneta dok ne potvrdi procesor.</li>
    <li data-sr="Ne šalji stari terminal nikome dok ne dobiješ pisan nalog sa portala." data-en="Do not ship the old terminal to anyone until you get a written portal order.">Ne šalji stari terminal nikome dok ne dobiješ pisan nalog sa portala.</li>
    <li data-sr="Svaka neobjašnjiva razlika u dnevnom izveštaju zaslužuje hitan poziv banci." data-en="Every unexplained daily report gap deserves an urgent bank call.">Svaka neobjašnjiva razlika u dnevnom izveštaju zaslužuje hitan poziv banci.</li>
  </ul>
</section>
`
};
