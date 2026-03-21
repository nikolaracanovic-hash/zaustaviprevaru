if (!window.SCAM_CONTENT) window.SCAM_CONTENT = {};
window.SCAM_CONTENT["event-pass-qr-scam"] = {
  raw_html: `
<section class="content-section"><h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
<p data-sr="Lažni QR kodovi na ulazu, parkingu ili u poruci vode na sajt koji krade karticu, instalira aplikaciju ili prodaje lažnu ulaznicu. Zvaničan događaj retko traži plaćanje preko nasumičnog QR-a na zidu." data-en="Fake QR codes at gates, parking, or in messages lead to a site that steals cards, installs apps, or sells a fake ticket. A real event rarely asks for payment via a random wall QR.">Lažni QR kodovi na ulazu, parkingu ili u poruci vode na sajt koji krade karticu, instalira aplikaciju ili prodaje lažnu ulaznicu. Zvaničan događaj retko traži plaćanje preko nasumičnog QR-a na zidu.</p></section>
<section class="content-section"><h2 data-sr="Hronološki tok" data-en="Chronological flow">Hronološki tok</h2>
<div class="phase"><div class="label" data-sr="Faza 1: Kontakt tačka" data-en="Phase 1: Touchpoint">Faza 1: Kontakt tačka</div>
<p data-sr="Meta vidi nalepnicu, letak ili poruku sa QR-om za brzu kupovinu karte, VIP ulaz ili parking." data-en="The target sees a sticker, flyer, or message with a QR for quick ticket buy, VIP entry, or parking.">Meta vidi nalepnicu, letak ili poruku sa QR-om za brzu kupovinu karte, VIP ulaz ili parking.</p>
<ul class="bullets"><li data-sr="Kupujte ulaznice samo na zvaničnom sajtu organizatora ili ovlašćenom partneru." data-en="Buy tickets only on the organizer’s official site or authorized partner.">Kupujte ulaznice samo na zvaničnom sajtu organizatora ili ovlašćenom partneru.</li><li data-sr="Upitajte osoblje na ulazu da li je QR od organizacije." data-en="Ask gate staff if the QR is from the organizer.">Upitajte osoblje na ulazu da li je QR od organizacije.</li><li data-sr="Ne skenirajte QR koji nije na zvaničnom štampanom materijalu." data-en="Do not scan a QR not on official printed material.">Ne skenirajte QR koji nije na zvaničnom štampanom materijalu.</li></ul>
<div class="callout" data-sr="<strong>Prag faze:</strong> QR na javnom mestu bez zvaničnog logotipa i broja podrške događaja." data-en="Phase threshold: QR in public without official logo and event support number."><strong>Prag faze:</strong> QR na javnom mestu bez zvaničnog logotipa i broja podrške događaja.</div>
<div class="phase"><div class="label" data-sr="Faza 2: Skeniranje" data-en="Phase 2: Scanning">Faza 2: Skeniranje</div>
<p data-sr="Telefon otvara stranicu koja liči na poznatu platformu za karte ili traži instalaciju aplikacije." data-en="The phone opens a page that looks like a known ticket platform or asks to install an app.">Telefon otvara stranicu koja liči na poznatu platformu za karte ili traži instalaciju aplikacije.</p>
<ul class="bullets"><li data-sr="Proverite pun URL pre unosa kartice." data-en="Check the full URL before entering a card.">Proverite pun URL pre unosa kartice.</li><li data-sr="Ne instalirajte APK ili profil sa nepoznatih linkova." data-en="Do not install APK or profiles from unknown links.">Ne instalirajte APK ili profil sa nepoznatih linkova.</li><li data-sr="Koristite mobilne podatke umesto javnog Wi-Fi za osetljive uplate." data-en="Use mobile data instead of public Wi‑Fi for sensitive payments.">Koristite mobilne podatke umesto javnog Wi-Fi za osetljive uplate.</li></ul>
<div class="branch"><p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p><ul class="bullets"><li><a href="quishing.html" data-sr="Quishing" data-en="Quishing">Quishing</a></li><li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li></ul></div>
<div class="callout" data-sr="<strong>Prag faze:</strong> Zahtev za instalaciju aplikacije van App Store ili Google Play." data-en="Phase threshold: App install request outside App Store or Google Play."><strong>Prag faze:</strong> Zahtev za instalaciju aplikacije van App Store ili Google Play.</div>
<div class="phase"><div class="label" data-sr="Faza 3: Plaćanje ili prijava" data-en="Phase 3: Payment or login">Faza 3: Plaćanje ili prijava</div>
<p data-sr="Stranica traži karticu, 3-D Secure kod ili lozinku naloga za verifikaciju ulaznice." data-en="The page asks for card, 3‑D Secure code, or account password for ticket verification.">Stranica traži karticu, 3-D Secure kod ili lozinku naloga za verifikaciju ulaznice.</p>
<ul class="bullets"><li data-sr="Ne unosite lozinku postojećeg naloga za karte na linku iz QR-a." data-en="Do not enter your existing ticket account password on a QR link.">Ne unosite lozinku postojećeg naloga za karte na linku iz QR-a.</li><li data-sr="Jednokratna virtuelna kartica smanjuje štetu." data-en="A one-time virtual card limits damage.">Jednokratna virtuelna kartica smanjuje štetu.</li><li data-sr="Ako je uplata prošla, odmah proverite izvode i obavestite banku." data-en="If payment went through, check statements and alert the bank immediately.">Ako je uplata prošla, odmah proverite izvode i obavestite banku.</li></ul>
<div class="callout" data-sr="<strong>Prag faze:</strong> Kombinacija prijave i plaćanja na istoj stranici sa sumnjivim domenom." data-en="Phase threshold: Login plus payment on the same page with a suspicious domain."><strong>Prag faze:</strong> Kombinacija prijave i plaćanja na istoj stranici sa sumnjivim domenom.</div>
<div class="phase"><div class="label" data-sr="Faza 4: Lažna potvrda" data-en="Phase 4: Fake confirmation">Faza 4: Lažna potvrda</div>
<p data-sr="Stiže imejl ili PDF koji izgleda kao karta, ali barkod ne odgovara sistemu organizatora." data-en="An email or PDF arrives that looks like a ticket, but the barcode does not match the organizer’s system.">Stiže imejl ili PDF koji izgleda kao karta, ali barkod ne odgovara sistemu organizatora.</p>
<ul class="bullets"><li data-sr="Proverite kod direktno kod organizatora pre ulaska." data-en="Verify the code directly with the organizer before entry.">Proverite kod direktno kod organizatora pre ulaska.</li><li data-sr="Ne verujete samo vizuelnom izgledu PDF-a." data-en="Do not trust PDF appearance alone.">Ne verujete samo vizuelnom izgledu PDF-a.</li><li data-sr="Sačuvajte URL i vreme uplate za chargeback." data-en="Save URL and payment time for chargeback.">Sačuvajte URL i vreme uplate za chargeback.</li></ul>
<div class="callout" data-sr="<strong>Prag faze:</strong> Organizator ne pronalazi rezervaciju pod datim brojem." data-en="Phase threshold: Organizer cannot find a booking under the given number."><strong>Prag faze:</strong> Organizator ne pronalazi rezervaciju pod datim brojem.</div>
<div class="phase"><div class="label" data-sr="Faza 5: Odbijanje na ulazu" data-en="Phase 5: Rejection at gate">Faza 5: Odbijanje na ulazu</div>
<p data-sr="Obezbeđenje skenira lažnu ili duplu kartu; kupac ostaje bez ulaska i novca." data-en="Security scans a fake or duplicate ticket; the buyer loses entry and money.">Obezbeđenje skenira lažnu ili duplu kartu; kupac ostaje bez ulaska i novca.</p>
<ul class="bullets"><li data-sr="Zatražite pisanu potvrdu organizatora za chargeback." data-en="Ask the organizer for written confirmation for chargeback.">Zatražite pisanu potvrdu organizatora za chargeback.</li><li data-sr="Prijavite QR lokaciju osoblju da ukloni nalepnicu." data-en="Report the QR location to staff to remove the sticker.">Prijavite QR lokaciju osoblju da ukloni nalepnicu.</li><li data-sr="Fotografisajte nalepnicu pre uklanjanja kao dokaz." data-en="Photo the sticker before removal as evidence.">Fotografisajte nalepnicu pre uklanjanja kao dokaz.</li></ul>
<div class="branch"><p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p><ul class="bullets"><li><a href="ticket-scam.html" data-sr="Lažne ulaznice" data-en="Fake tickets">Lažne ulaznice</a></li><li><a href="ticket-resale-clone-page-scam.html" data-sr="Klon sajt" data-en="Clone site">Klon sajt</a></li></ul></div>
<div class="callout" data-sr="<strong>Prag faze:</strong> Ulaznica ne prolazi skener na licu mesta." data-en="Phase threshold: Ticket fails the on-site scanner."><strong>Prag faze:</strong> Ulaznica ne prolazi skener na licu mesta.</div>
<div class="phase"><div class="label" data-sr="Faza 6: Prijava i edukacija" data-en="Phase 6: Reporting and education">Faza 6: Prijava i edukacija</div>
<p data-sr="Žrtva prijavljuje domen, nalepnicu i transakciju; organizacija upozorava publiku." data-en="The victim reports domain, sticker, and transaction; the organizer warns the public.">Žrtva prijavljuje domen, nalepnicu i transakciju; organizacija upozorava publiku.</p>
<ul class="bullets"><li data-sr="Prijavite CERT-u i hosting provajderu." data-en="Report to CERT and hosting provider.">Prijavite CERT-u i hosting provajderu.</li><li data-sr="Delite fotografiju lažnog QR-a na društvenim mrežama događaja uz zvanični kanal." data-en="Share fake QR photo on event socials via official channel.">Delite fotografiju lažnog QR-a na društvenim mrežama događaja uz zvanični kanal.</li><li data-sr="Za sledeći događaj kupujte samo od organizatora." data-en="For the next event buy only from the organizer.">Za sledeći događaj kupujte samo od organizatora.</li></ul>
<div class="callout" data-sr="<strong>Prag faze:</strong> Javno upozorenje organizatora potvrđuje lažni QR." data-en="Phase threshold: Organizer’s public warning confirms the fake QR."><strong>Prag faze:</strong> Javno upozorenje organizatora potvrđuje lažni QR.</div>
</section>
<section class="content-section"><h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2><ul class="bullets">
<li data-sr="QR na javnom mestu bez zvaničnog brenda." data-en="QR in public without official branding.">QR na javnom mestu bez zvaničnog brenda.</li>
<li data-sr="Cena mnogo ispod zvanične." data-en="Price far below official.">Cena mnogo ispod zvanične.</li>
<li data-sr="Zahtev za instalaciju aplikacije." data-en="App install request.">Zahtev za instalaciju aplikacije.</li>
<li data-sr="Domen koji ne pripada organizatoru." data-en="Domain not owned by organizer.">Domen koji ne pripada organizatoru.</li>
<li data-sr="Kombinacija logina i kartice na istoj stranici." data-en="Login and card on same page.">Kombinacija logina i kartice na istoj stranici.</li>
<li data-sr="Pritisak da skenirate odmah na mestu." data-en="Pressure to scan immediately on site.">Pritisak da skenirate odmah na mestu.</li>
<li data-sr="Poruka na WhatsApp-u od nepoznatog broja sa QR-om." data-en="WhatsApp from unknown number with QR.">Poruka na WhatsApp-u od nepoznatog broja sa QR-om.</li>
<li data-sr="Lažni parking QR pored prave table." data-en="Fake parking QR next to real sign.">Lažni parking QR pored prave table.</li>
<li data-sr="PDF bez proverljivog broja u sistemu organizatora." data-en="PDF without verifiable number in organizer system.">PDF bez proverljivog broja u sistemu organizatora.</li>
<li data-sr="Više različitih QR-ova za isti ulaz." data-en="Several different QRs for same gate.">Više različitih QR-ova za isti ulaz.</li>
</ul></section>
<section class="content-section"><h2 data-sr="Provere" data-en="Checks">Provere</h2><ul class="bullets">
<li data-sr="Upit osoblju pre skeniranja." data-en="Ask staff before scanning.">Upit osoblju pre skeniranja.</li>
<li data-sr="Kupovina samo na zvaničnom sajtu." data-en="Purchase only on official site.">Kupovina samo na zvaničnom sajtu.</li>
<li data-sr="Pregled punog URL-a." data-en="Review full URL.">Pregled punog URL-a.</li>
<li data-sr="Bez instalacije spoljnih aplikacija." data-en="No sideloaded apps.">Bez instalacije spoljnih aplikacija.</li>
<li data-sr="Provera karte kod organizatora pre događaja." data-en="Verify ticket with organizer before event.">Provera karte kod organizatora pre događaja.</li>
<li data-sr="Korišćenje virtuelne kartice." data-en="Use virtual card.">Korišćenje virtuelne kartice.</li>
<li data-sr="Praćenje izvoda posle skeniranja." data-en="Monitor statements after scan.">Praćenje izvoda posle skeniranja.</li>
<li data-sr="Provera zvaničnih obaveštenja o lažnim QR-ovima." data-en="Check official alerts about fake QRs.">Provera zvaničnih obaveštenja o lažnim QR-ovima.</li>
</ul></section>
<section class="content-section"><h2 data-sr="Checklista" data-en="Checklist">Checklista</h2><ul class="bullets">
<li data-sr="Da li je QR na zvaničnom materijalu?" data-en="Is the QR on official material?">Da li je QR na zvaničnom materijalu?</li>
<li data-sr="Da li je osoblje potvrdilo?" data-en="Did staff confirm?">Da li je osoblje potvrdilo?</li>
<li data-sr="Da li URL pripada organizatoru?" data-en="Does URL belong to organizer?">Da li URL pripada organizatoru?</li>
<li data-sr="Da li traže aplikaciju van prodavnica?" data-en="Do they want an app outside stores?">Da li traže aplikaciju van prodavnica?</li>
<li data-sr="Da li traže lozinku naloga?" data-en="Do they want account password?">Da li traže lozinku naloga?</li>
<li data-sr="Da li je cena realna?" data-en="Is price realistic?">Da li je cena realna?</li>
<li data-sr="Da li sam kupio na zvaničnom sajtu?" data-en="Did I buy on official site?">Da li sam kupio na zvaničnom sajtu?</li>
<li data-sr="Da li barkod prolazi kod organizatora?" data-en="Does barcode pass with organizer?">Da li barkod prolazi kod organizatora?</li>
<li data-sr="Da li koristim mobilne podatke?" data-en="Am I on mobile data?">Da li koristim mobilne podatke?</li>
<li data-sr="Da li sam sačuvao URL?" data-en="Have I saved the URL?">Da li sam sačuvao URL?</li>
<li data-sr="Da li postoji hitno upozorenje od organizatora?" data-en="Is there urgent organizer warning?">Da li postoji hitno upozorenje od organizatora?</li>
<li data-sr="Da li znam kako prijaviti lažnu nalepnicu?" data-en="Do I know how to report a fake sticker?">Da li znam kako prijaviti lažnu nalepnicu?</li>
</ul></section>
<section class="content-section"><h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: order of actions">Ako sumnja krene: redosled poteza</h2><ul class="bullets">
<li data-sr="Ne unosite karticu; zatvorite stranicu." data-en="Do not enter card; close the page.">Ne unosite karticu; zatvorite stranicu.</li>
<li data-sr="Ako ste uneli podatke, blokirajte karticu i promenite lozinke." data-en="If you entered data, block card and change passwords.">Ako ste uneli podatke, blokirajte karticu i promenite lozinke.</li>
<li data-sr="Obavestite osoblje o lažnoj nalepnici." data-en="Tell staff about fake sticker.">Obavestite osoblje o lažnoj nalepnici.</li>
<li data-sr="Kupite ulaznicu na zvaničnom sajtu, ne preko QR-a." data-en="Buy ticket on official site, not via QR.">Kupite ulaznicu na zvaničnom sajtu, ne preko QR-a.</li>
<li data-sr="Prijavite domen CERT-u." data-en="Report domain to CERT.">Prijavite domen CERT-u.</li>
</ul></section>
<section class="content-section"><h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2><ul class="bullets">
<li data-sr="Pitaj: Da li je osoblje potvrdilo QR?" data-en="Ask: Did staff confirm the QR?">Pitaj: Da li je osoblje potvrdilo QR?</li>
<li data-sr="Pitaj: Koji je tačan URL posle skeniranja?" data-en="Ask: What exact URL opened after scan?">Pitaj: Koji je tačan URL posle skeniranja?</li>
<li data-sr="Pitaj: Da li si instalirao aplikaciju?" data-en="Ask: Did you install an app?">Pitaj: Da li si instalirao aplikaciju?</li>
<li data-sr="Pitaj: Da li organizator vidi tvoju kartu u sistemu?" data-en="Ask: Does the organizer see your ticket in the system?">Pitaj: Da li organizator vidi tvoju kartu u sistemu?</li>
<li data-sr="Rečenice koje pomažu: Kupi na zvaničnom sajtu sada. Ne skeniraj taj QR. Pozovi banku ako si uneo karticu. Fotografiši nalepnicu i prijavi." data-en="Sentences that help: Buy on the official site now.' 'Do not scan that QR.' 'Call the bank if you entered a card.' 'Photo the sticker and report.">Rečenice koje pomažu: Kupi na zvaničnom sajtu sada. Ne skeniraj taj QR. Pozovi banku ako si uneo karticu. Fotografiši nalepnicu i prijavi.</li>
</ul></section>

`
};
