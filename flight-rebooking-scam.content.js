if (!window.SCAM_CONTENT) window.SCAM_CONTENT = {};
window.SCAM_CONTENT["flight-rebooking-scam"] = {
  raw_html: `
<section class="content-section"><h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
<p data-sr="SMS, WhatsApp ili imejl tvrdi da je let otkazan ili promenjen i nudi link ili broj za prebukiranje. Cilj je krađa naloga, kartice ili naplata lažne takse." data-en="SMS, WhatsApp, or email claims a flight is cancelled or changed and offers a link or number to rebook. The goal is account theft, card theft, or a fake fee.">SMS, WhatsApp ili imejl tvrdi da je let otkazan ili promenjen i nudi link ili broj za prebukiranje. Cilj je krađa naloga, kartice ili naplata lažne takse.</p></section>
<section class="content-section"><h2 data-sr="Hronološki tok" data-en="Chronological flow">Hronološki tok</h2>
<div class="phase"><div class="label" data-sr="Faza 1: Poruka" data-en="Phase 1: Message">Faza 1: Poruka</div>
<p data-sr="Poruka koristi vaše ime ili broj leta iz javno dostupnih ili ukradenih podataka." data-en="The message uses your name or flight number from public or stolen data.">Poruka koristi vaše ime ili broj leta iz javno dostupnih ili ukradenih podataka.</p>
<ul class="bullets"><li data-sr="Otvorite aplikaciju aviokompanije ili sajt ukucan ručno." data-en="Open the airline app or manually typed site.">Otvorite aplikaciju aviokompanije ili sajt ukucan ručno.</li><li data-sr="Ne koristite link iz SMS-a." data-en="Do not use the SMS link.">Ne koristite link iz SMS-a.</li><li data-sr="Uporedite status leta sa zvaničnim kanalom." data-en="Compare flight status with official channel.">Uporedite status leta sa zvaničnim kanalom.</li></ul>
<div class="callout" data-sr="<strong>Prag faze:</strong> Hitnost i pretnja otkazivanja karte ako ne kliknete odmah." data-en="Phase threshold: Urgency and threat that the ticket is cancelled if you do not click now."><strong>Prag faze:</strong> Hitnost i pretnja otkazivanja karte ako ne kliknete odmah.</div>
<div class="phase"><div class="label" data-sr="Faza 2: Lažni link" data-en="Phase 2: Fake link">Faza 2: Lažni link</div>
<p data-sr="Link vodi na stranicu koja liči na prijavu na nalog aviokompanije." data-en="The link leads to a page that looks like airline login.">Link vodi na stranicu koja liči na prijavu na nalog aviokompanije.</p>
<ul class="bullets"><li data-sr="Proverite domen u adresnoj traci." data-en="Check the domain in the address bar.">Proverite domen u adresnoj traci.</li><li data-sr="Koristite menadžer lozinki koji puni kredencijale samo na pravom domenu." data-en="Use a password manager that fills credentials only on the real domain.">Koristite menadžer lozinki koji puni kredencijale samo na pravom domenu.</li><li data-sr="Uključite dvofaktorsku autentifikaciju na nalogu avio." data-en="Turn on 2FA on airline account.">Uključite dvofaktorsku autentifikaciju na nalogu avio.</li></ul>
<div class="branch"><p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p><ul class="bullets"><li><a href="smishing.html" data-sr="Smishing" data-en="Smishing">Smishing</a></li><li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li></ul></div>
<div class="callout" data-sr="<strong>Prag faze:</strong> Domen koji nije identičan zvaničnom domenu aviokompanije." data-en="Phase threshold: Domain not identical to airline official domain."><strong>Prag faze:</strong> Domen koji nije identičan zvaničnom domenu aviokompanije.</div>
<div class="phase"><div class="label" data-sr="Faza 3: Krađa naloga ili kartice" data-en="Phase 3: Account or card theft">Faza 3: Krađa naloga ili kartice</div>
<p data-sr="Uneti podaci odu prevarantu; mogu se promeniti rezervacije ili naplatiti kartica." data-en="Entered data goes to fraudsters; bookings may change or the card is charged.">Uneti podaci odu prevarantu; mogu se promeniti rezervacije ili naplatiti kartica.</p>
<ul class="bullets"><li data-sr="Odmah promenite lozinku na pravom sajtu." data-en="Change password on real site immediately.">Odmah promenite lozinku na pravom sajtu.</li><li data-sr="Odjava svih sesija na nalogu avio." data-en="Sign out all sessions on airline account.">Odjava svih sesija na nalogu avio.</li><li data-sr="Kontaktirajte banku ako je uneta kartica." data-en="Contact bank if card was entered.">Kontaktirajte banku ako je uneta kartica.</li></ul>
<div class="callout" data-sr="<strong>Prag faze:</strong> Neočekivana promena rezervacije ili transakcija posle klika." data-en="Phase threshold: Unexpected booking change or transaction after click."><strong>Prag faze:</strong> Neočekivana promena rezervacije ili transakcija posle klika.</div>
<div class="phase"><div class="label" data-sr="Faza 4: Lažni poziv" data-en="Phase 4: Fake call">Faza 4: Lažni poziv</div>
<p data-sr="Broj iz poruke vodi na podršku koja traži kod ili uplatu." data-en="The number in the message leads to support asking for a code or payment.">Broj iz poruke vodi na podršku koja traži kod ili uplatu.</p>
<ul class="bullets"><li data-sr="Ne diktirajte kodove sa SMS-a nikome." data-en="Do not read SMS codes to anyone.">Ne diktirajte kodove sa SMS-a nikome.</li><li data-sr="Pozovite avio na broj sa karte ili zvaničnog sajta." data-en="Call airline on number from card back or official site.">Pozovite avio na broj sa karte ili zvaničnog sajta.</li><li data-sr="Lažni pozivi koriste ID pozivaoca; ne verujte samo broju." data-en="Fake calls use spoofed ID; do not trust the number alone.">Lažni pozivi koriste ID pozivaoca; ne verujte samo broju.</li></ul>
<div class="callout" data-sr="<strong>Prag faze:</strong> Traženje OTP koda ili lozinke telefonom." data-en="Phase threshold: OTP or password requested by phone."><strong>Prag faze:</strong> Traženje OTP koda ili lozinke telefonom.</div>
<div class="phase"><div class="label" data-sr="Faza 5: Potvrda kod avio" data-en="Phase 5: Airline confirmation">Faza 5: Potvrda kod avio</div>
<p data-sr="Zvanična podrška potvrđuje da let nije promenjen ili pomaže oko pravog problema." data-en="Official support confirms the flight was not changed or helps with the real issue.">Zvanična podrška potvrđuje da let nije promenjen ili pomaže oko pravog problema.</p>
<ul class="bullets"><li data-sr="Zatražite referentni broj poziva." data-en="Ask for a call reference number.">Zatražite referentni broj poziva.</li><li data-sr="Proverite da li je neko dodao putnika ili promenio sedište." data-en="Check if someone added a passenger or changed seat.">Proverite da li je neko dodao putnika ili promenio sedište.</li><li data-sr="Ažurirajte kontakt e-mail i broj u nalogu." data-en="Update contact email and number in account.">Ažurirajte kontakt e-mail i broj u nalogu.</li></ul>
<div class="branch"><p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p><ul class="bullets"><li><a href="vishing.html" data-sr="Vishing" data-en="Vishing">Vishing</a></li><li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li></ul></div>
<div class="callout" data-sr="<strong>Prag faze:</strong> Zvanična potvrda da poruka nije od aviokompanije." data-en="Phase threshold: Official confirmation the message was not from the airline."><strong>Prag faze:</strong> Zvanična potvrda da poruka nije od aviokompanije.</div>
<div class="phase"><div class="label" data-sr="Faza 6: Prijava i edukacija" data-en="Phase 6: Reporting and education">Faza 6: Prijava i edukacija</div>
<p data-sr="Broj i link se prijavljuju operatoru i aviokompaniji; poruka se deli kao upozorenje." data-en="The number and link are reported to the carrier and airline; the message is shared as a warning.">Broj i link se prijavljuju operatoru i aviokompaniji; poruka se deli kao upozorenje.</p>
<ul class="bullets"><li data-sr="Prosledite SMS operateru kao prijavu smishinga." data-en="Forward SMS to carrier as smishing report.">Prosledite SMS operateru kao prijavu smishinga.</li><li data-sr="Prijavite domen hosting provajderu." data-en="Report domain to host.">Prijavite domen hosting provajderu.</li><li data-sr="Objasnite porodici da avio ne traži kod telefonom." data-en="Explain to family that airline will not ask for codes by phone.">Objasnite porodici da avio ne traži kod telefonom.</li></ul>
<div class="callout" data-sr="<strong>Prag faze:</strong> Prijava završena sa kopijom poruke i vremenom." data-en="Phase threshold: Report filed with message copy and time."><strong>Prag faze:</strong> Prijava završena sa kopijom poruke i vremenom.</div>
</section>
<section class="content-section"><h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2><ul class="bullets">
<li data-sr="Link u SMS-u o letu." data-en="Link in SMS about flight.">Link u SMS-u o letu.</li>
<li data-sr="Hitnost i pretnja otkazivanja." data-en="Urgency and cancellation threat.">Hitnost i pretnja otkazivanja.</li>
<li data-sr="Domen koji odstaje od avio domena." data-en="Domain differs from airline.">Domen koji odstaje od avio domena.</li>
<li data-sr="Zahtev za OTP telefonom." data-en="OTP requested by phone.">Zahtev za OTP telefonom.</li>
<li data-sr="Naknada za prebukiranje van aplikacije." data-en="Rebooking fee outside app.">Naknada za prebukiranje van aplikacije.</li>
<li data-sr="WhatsApp od avio podrške." data-en="WhatsApp from airline support.">WhatsApp od avio podrške.</li>
<li data-sr="Gramatičke greške u zvaničnom tonu." data-en="Grammar errors in official tone.">Gramatičke greške u zvaničnom tonu.</li>
<li data-sr="Broj pozivaoca koji ne odgovara zvaničnom." data-en="Caller ID not matching official.">Broj pozivaoca koji ne odgovara zvaničnom.</li>
<li data-sr="Zahtev za skrinšot kartice." data-en="Request for card screenshot.">Zahtev za skrinšot kartice.</li>
<li data-sr="Poruka stiže kad ste javno objavili putovanje." data-en="Message arrives after you posted travel publicly.">Poruka stiže kad ste javno objavili putovanje.</li>
</ul></section>
<section class="content-section"><h2 data-sr="Provere" data-en="Checks">Provere</h2><ul class="bullets">
<li data-sr="Aplikacija aviokompanije za status." data-en="Airline app for status.">Aplikacija aviokompanije za status.</li>
<li data-sr="Ručno ukucan sajt." data-en="Manually typed site.">Ručno ukucan sajt.</li>
<li data-sr="Poziv na broj sa karte ili sajta." data-en="Call number on card or site.">Poziv na broj sa karte ili sajta.</li>
<li data-sr="2FA uključena." data-en="2FA on.">2FA uključena.</li>
<li data-sr="Bez diktiranja kodova." data-en="No reading codes aloud.">Bez diktiranja kodova.</li>
<li data-sr="Pregled rezervacije na nalogu." data-en="Review booking in account.">Pregled rezervacije na nalogu.</li>
<li data-sr="Provera domena linka." data-en="Check link domain.">Provera domena linka.</li>
<li data-sr="Prosleđivanje SMS operateru." data-en="Forward SMS to carrier.">Prosleđivanje SMS operateru.</li>
</ul></section>
<section class="content-section"><h2 data-sr="Checklista" data-en="Checklist">Checklista</h2><ul class="bullets">
<li data-sr="Da li sam proverio let u aplikaciji?" data-en="Checked flight in app?">Da li sam proverio let u aplikaciji?</li>
<li data-sr="Da li sam kliknuo link iz SMS-a?" data-en="Did I click SMS link?">Da li sam kliknuo link iz SMS-a?</li>
<li data-sr="Da li domen odgovara avio?" data-en="Does domain match airline?">Da li domen odgovara avio?</li>
<li data-sr="Da li je 2FA uključena?" data-en="Is 2FA on?">Da li je 2FA uključena?</li>
<li data-sr="Da li su tražili kod telefonom?" data-en="Codes asked by phone?">Da li su tražili kod telefonom?</li>
<li data-sr="Da li postoji nova transakcija?" data-en="New transaction?">Da li postoji nova transakcija?</li>
<li data-sr="Da li je rezervacija izmenjena?" data-en="Booking altered?">Da li je rezervacija izmenjena?</li>
<li data-sr="Da li sam pozvao zvanični broj?" data-en="Called official number?">Da li sam pozvao zvanični broj?</li>
<li data-sr="Da li poruka sadrži gramatičke greške?" data-en="Grammar errors in message?">Da li poruka sadrži gramatičke greške?</li>
<li data-sr="Da li sam sačuvao SMS?" data-en="Saved SMS?">Da li sam sačuvao SMS?</li>
<li data-sr="Da li sam odjavio sesije?" data-en="Signed out sessions?">Da li sam odjavio sesije?</li>
<li data-sr="Da li porodica zna pravilo o kodovima?" data-en="Family knows code rule?">Da li porodica zna pravilo o kodovima?</li>
</ul></section>
<section class="content-section"><h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: order of actions">Ako sumnja krene: redosled poteza</h2><ul class="bullets">
<li data-sr="Ne klikajte link." data-en="Do not click link.">Ne klikajte link.</li>
<li data-sr="Proverite aplikaciju avio." data-en="Check airline app.">Proverite aplikaciju avio.</li>
<li data-sr="Ako ste uneli podatke, promena lozinke i banka." data-en="If you entered data, password change and bank.">Ako ste uneli podatke, promena lozinke i banka.</li>
<li data-sr="Pozovite zvanični broj." data-en="Call official number.">Pozovite zvanični broj.</li>
<li data-sr="Prijavite SMS i domen." data-en="Report SMS and domain.">Prijavite SMS i domen.</li>
</ul></section>
<section class="content-section"><h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2><ul class="bullets">
<li data-sr="Pitaj: Da li si kliknuo link u SMS-u?" data-en="Ask: Did you click the SMS link?">Pitaj: Da li si kliknuo link u SMS-u?</li>
<li data-sr="Pitaj: Šta piše u aplikaciji avio?" data-en="Ask: What does the airline app show?">Pitaj: Šta piše u aplikaciji avio?</li>
<li data-sr="Pitaj: Da li si nekom diktirao kod?" data-en="Ask: Did you read a code to anyone?">Pitaj: Da li si nekom diktirao kod?</li>
<li data-sr="Pitaj: Koji je domen u adresnoj traci?" data-en="Ask: What domain is in the address bar?">Pitaj: Koji je domen u adresnoj traci?</li>
<li data-sr="Rečenice koje pomažu: Otvori samo aplikaciju avio. Ne diktiraj kod. Pozovi broj sa karte. Promeni lozinku odmah." data-en="Sentences that help: Open only the airline app.' 'Do not read codes out.' 'Call number on card.' 'Change password now.">Rečenice koje pomažu: Otvori samo aplikaciju avio. Ne diktiraj kod. Pozovi broj sa karte. Promeni lozinku odmah.</li>
</ul></section>

`
};
