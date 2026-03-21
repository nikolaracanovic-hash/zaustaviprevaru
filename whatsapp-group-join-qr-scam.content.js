window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["whatsapp-group-join-qr-scam"] = {
  raw_html: `

    <section class="card">
      <h2 data-sr="Uvod: QR kod za ulazak u WhatsApp grupu" data-en="Introduction: WhatsApp group join QR">Uvod: QR kod za ulazak u WhatsApp grupu</h2>

      <p data-sr="Napadač širi QR koji obećava ekskluzivnu grupu, popust ili posao, a vodi na lažnu stranicu, APK ili fišing." data-en="The attacker spreads a QR promising an exclusive group, discount, or job, but it leads to a fake page, APK, or phishing.">Napadač širi QR koji obećava ekskluzivnu grupu, popust ili posao, a vodi na lažnu stranicu, APK ili fišing.</p>
      <p data-sr="Korisnik misli da skenira ulaz u grupu, a zapravo instalira aplikaciju ili daje podatke." data-en="The user thinks they are scanning a group entry, but actually installs an app or gives data.">Korisnik misli da skenira ulaz u grupu, a zapravo instalira aplikaciju ili daje podatke.</p>
      <div class="callout" data-sr="<strong>Model:</strong> plakat ili poruka sa QR → lažna destinacija → krađa pristupa ili novca." data-en="<strong>Model:</strong> poster or message with QR → fake destination → access or money theft."><strong>Model:</strong> plakat ili poruka sa QR → lažna destinacija → krađa pristupa ili novca.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako izgleda mamac" data-en="How the lure looks">Kako izgleda mamac</h2>

      <p data-sr="QR je lako štampati na ulici, podeliti u četu ili staviti u oglas; izgleda nevino jer nema dugog linka." data-en="A QR is easy to print on the street, share in chat, or put in an ad; it looks innocent because there is no long link.">QR je lako štampati na ulici, podeliti u četu ili staviti u oglas; izgleda nevino jer nema dugog linka.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Tipični tekst pored QR" data-en="Typical text next to the QR">Tipični tekst pored QR</div>
          <ul class="bullets">
            <li data-sr="Skeniraj i uđi u VIP grupu sa ponudama." data-en="Scan and enter the VIP offers group.">Skeniraj i uđi u VIP grupu sa ponudama.</li>
            <li data-sr="Besplatna obuka; samo QR." data-en="Free training; QR only.">Besplatna obuka; samo QR.</li>
            <li data-sr="Zaposlenje preko zajednice na WhatsApp-u." data-en="Jobs via the WhatsApp community.">Zaposlenje preko zajednice na WhatsApp-u.</li>
            <li data-sr="Zvanična podrška brenda — samo ovde." data-en="Official brand support — only here.">Zvanična podrška brenda — samo ovde.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Šta sledi posle skeniranja" data-en="What follows the scan">Šta sledi posle skeniranja</div>
          <ul class="bullets">
            <li data-sr="Preuzimanje APK van prodavnice aplikacija." data-en="Downloading an APK outside the app store.">Preuzimanje APK van prodavnice aplikacija.</li>
            <li data-sr="Stranica koja traži broj telefona i kod iz SMS-a." data-en="A page asking for phone number and SMS code.">Stranica koja traži broj telefona i kod iz SMS-a.</li>
            <li data-sr="Lažna prijava na WhatsApp Web sa pogrešnim domenom." data-en="Fake WhatsApp Web login on the wrong domain.">Lažna prijava na WhatsApp Web sa pogrešnim domenom.</li>
            <li data-sr="Plaćanje članarine pre ulaska u grupu." data-en="Paying a membership before entering the group.">Plaćanje članarine pre ulaska u grupu.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching).">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Šteta može biti brza ako se odmah preuzme APK ili unese kod." data-en="Damage can be fast if an APK is downloaded or a code is entered immediately.">Šteta može biti brza ako se odmah preuzme APK ili unese kod.</p>
      <article class="phase ">
        <h3 class="phase-title" data-sr="Faza 1 — Ulaz: flajer, oglas ili poruka sa slikom QR" data-en="Phase 1 — Entry: flyer, ad, or message with QR image">Faza 1 — Ulaz: flajer, oglas ili poruka sa slikom QR</h3>
        <p data-sr="Meta vidi vizuelno privlačan QR i kratko obećanje koje deluje kao zajednica ili nagrada." data-en="The target sees a visually attractive QR and a short promise that looks like a community or prize.">Meta vidi vizuelno privlačan QR i kratko obećanje koje deluje kao zajednica ili nagrada.</p>
        <p data-sr="Često postoji osećaj retkosti: samo prvih 50." data-en="Scarcity is common: only the first 50.">Često postoji osećaj retkosti: samo prvih 50.</p>
        <ul class="bullets">
            <li data-sr="QR je centralni element slike." data-en="The QR is the central element of the image.">QR je centralni element slike.</li>
            <li data-sr="Nema adrese sajta koju možete proveriti ručno." data-en="There is no site address you can type and verify.">Nema adrese sajta koju možete proveriti ručno.</li>
            <li data-sr="Poziv dolazi od kontakta koji je možda već kompromitovan." data-en="The invite comes from a contact who may already be compromised.">Poziv dolazi od kontakta koji je možda već kompromitovan.</li>
            <li data-sr="Grupa ili kanal se pominje kao zatvoreni." data-en="A group or channel is described as closed.">Grupa ili kanal se pominje kao zatvoreni.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta odluči da skenira bez provere izvora." data-en="<strong>Threshold:</strong> the target decides to scan without verifying the source."><strong>Prag faze:</strong> meta odluči da skenira bez provere izvora.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Otvaranje linka ili preuzimanje fajla" data-en="Phase 2 — Opening a link or downloading a file">Faza 2 — Otvaranje linka ili preuzimanje fajla</h3>
        <p data-sr="Kamera telefona otvori URL ili pokrene preuzimanje; korisnik vidi formu ili instalacioni ekran." data-en="The phone camera opens a URL or starts a download; the user sees a form or install screen.">Kamera telefona otvori URL ili pokrene preuzimanje; korisnik vidi formu ili instalacioni ekran.</p>
        <ul class="bullets">
            <li data-sr="Domen je sličan poznatom brendu uz malu razliku." data-en="The domain resembles a known brand with a small difference.">Domen je sličan poznatom brendu uz malu razliku.</li>
            <li data-sr="Traži se dozvola za nepoznate izvore na Androidu." data-en="Android asks permission for unknown sources.">Traži se dozvola za nepoznate izvore na Androidu.</li>
            <li data-sr="iOS traži profil ili prečicu ka spoljnoj stranici." data-en="iOS asks for a profile or shortcut to an external page.">iOS traži profil ili prečicu ka spoljnoj stranici.</li>
            <li data-sr="Forma traži više podataka nego što ulazak u grupu traži." data-en="The form asks for more data than joining a group should need.">Forma traži više podataka nego što ulazak u grupu traži.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="whatsapp-apk-attachment-scam.html" data-sr="WhatsApp: APK prilog" data-en="WhatsApp: APK attachment scam">WhatsApp: APK prilog</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik pokrene instalaciju ili unos u lažnoj formi." data-en="<strong>Threshold:</strong> the user starts install or enters data on a fake form."><strong>Prag faze:</strong> korisnik pokrene instalaciju ili unos u lažnoj formi.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Prag: kod, lozinka ili plaćanje" data-en="Phase 3 — Threshold: code, password, or payment">Faza 3 — Prag: kod, lozinka ili plaćanje</h3>
        <p data-sr="Unos koda iz SMS-a ili lozinke omogućava prijavu napadača ili povezivanje naloga." data-en="Entering an SMS code or password lets the attacker sign in or link the account.">Unos koda iz SMS-a ili lozinke omogućava prijavu napadača ili povezivanje naloga.</p>
        <p data-sr="Mala uplata deluje bezopasno, ali potvrđuje karticu i otvara vrata za veće transakcije." data-en="A small payment feels harmless but validates the card and opens the door to larger charges.">Mala uplata deluje bezopasno, ali potvrđuje karticu i otvara vrata za veće transakcije.</p>
        <ul class="bullets">
            <li data-sr="Kod se traži odmah posle skeniranja." data-en="The code is requested right after scanning.">Kod se traži odmah posle skeniranja.</li>
            <li data-sr="Lažni ekran traži i PIN kartice." data-en="The fake screen also asks for the card PIN.">Lažni ekran traži i PIN kartice.</li>
            <li data-sr="Potvrda u banci može stići kao pretplata." data-en="Bank approval may arrive labeled as a subscription.">Potvrda u banci može stići kao pretplata.</li>
            <li data-sr="Nema jasnog pravnog dokumenta o usluzi." data-en="There is no clear legal document for the service.">Nema jasnog pravnog dokumenta o usluzi.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> osetljivi podaci ili novac napuste vašu kontrolu." data-en="<strong>Threshold:</strong> sensitive data or money leaves your control."><strong>Prag faze:</strong> osetljivi podaci ili novac napuste vašu kontrolu.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Zloupotreba naloga, kontakata ili uređaja" data-en="Phase 4 — Abuse of account, contacts, or device">Faza 4 — Zloupotreba naloga, kontakata ili uređaja</h3>
        <p data-sr="Malver šalje nove QR kodove kontaktima ili čita obaveštenja; fišing preuzima sesiju." data-en="Malware sends new QR codes to contacts or reads notifications; phishing takes the session.">Malver šalje nove QR kodove kontaktima ili čita obaveštenja; fišing preuzima sesiju.</p>
        <ul class="bullets">
            <li data-sr="Poruke sa vašeg broja šire isti QR." data-en="Messages from your number spread the same QR.">Poruke sa vašeg broja šire isti QR.</li>
            <li data-sr="Kontakti ulaze u istu zamku zbog poverenja." data-en="Contacts fall into the same trap because of trust.">Kontakti ulaze u istu zamku zbog poverenja.</li>
            <li data-sr="Uređaj postaje spor ili topli od pozadinskih aplikacija." data-en="The device becomes slow or warm from background apps.">Uređaj postaje spor ili topli od pozadinskih aplikacija.</li>
            <li data-sr="Pojavljuju se nove aplikacije koje ne pamtite." data-en="New apps appear that you do not remember installing.">Pojavljuju se nove aplikacije koje ne pamtite.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="whatsapp-takeover.html" data-sr="Preuzimanje WhatsApp naloga" data-en="WhatsApp takeover">Preuzimanje WhatsApp naloga</a></li>
            <li><a href="whatsapp-unknown-group-invite-scam.html" data-sr="WhatsApp: nepoznata grupa" data-en="WhatsApp: unknown group invite">WhatsApp: nepoznata grupa</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> šteta se širi na mrežu kontakata ili na finansije." data-en="<strong>Threshold:</strong> harm spreads across the contact network or finances."><strong>Prag faze:</strong> šteta se širi na mrežu kontakata ili na finansije.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Otkrivanje" data-en="Phase 5 — Discovery">Faza 5 — Otkrivanje</h3>
        <p data-sr="Korisnik vidi čudne poruke, nepoznate transakcije ili upozorenje antivirusa." data-en="The user sees strange messages, unknown transactions, or antivirus alerts.">Korisnik vidi čudne poruke, nepoznate transakcije ili upozorenje antivirusa.</p>
        <ul class="bullets">
            <li data-sr="Prijatelji javljaju da su dobili isti QR od vas." data-en="Friends report they got the same QR from you.">Prijatelji javljaju da su dobili isti QR od vas.</li>
            <li data-sr="Banka šalje upozorenje o maloj probnoj uplati." data-en="The bank sends an alert about a small test charge.">Banka šalje upozorenje o maloj probnoj uplati.</li>
            <li data-sr="Aplikacija traži dodatne dozvole koje niste dali svesno." data-en="An app requests extra permissions you did not knowingly grant.">Aplikacija traži dodatne dozvole koje niste dali svesno.</li>
            <li data-sr="QR na ulici je uklonjen, ali šteta je već nastala." data-en="The street QR is removed, but harm already happened.">QR na ulici je uklonjen, ali šteta je već nastala.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> žrtva povezuje problem sa skeniranjem QR." data-en="<strong>Threshold:</strong> the victim connects the problem to scanning the QR."><strong>Prag faze:</strong> žrtva povezuje problem sa skeniranjem QR.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Sanacija" data-en="Phase 6 — Remediation">Faza 6 — Sanacija</h3>
        <p data-sr="Ukloniti sumnjive aplikacije, promeniti lozinke, obavestiti banku i kontakte, proveriti uređaje u WhatsApp podešavanjima." data-en="Remove suspicious apps, change passwords, notify the bank and contacts, check devices in WhatsApp settings.">Ukloniti sumnjive aplikacije, promeniti lozinke, obavestiti banku i kontakte, proveriti uređaje u WhatsApp podešavanjima.</p>
        <p data-sr="Ubuduće: ulazak u grupu samo preko pozivnice koju ste sami tražili na zvaničnom sajtu ili od poznatog admina." data-en="Going forward: join groups only via invites you requested on an official site or from a known admin.">Ubuduće: ulazak u grupu samo preko pozivnice koju ste sami tražili na zvaničnom sajtu ili od poznatog admina.</p>
        <ul class="bullets">
            <li data-sr="Sačuvati screenshot QR i URL radi prijave." data-en="Save QR screenshot and URL for reporting.">Sačuvati screenshot QR i URL radi prijave.</li>
            <li data-sr="Pokrenuti skeniranje uređaja pouzdanim alatom." data-en="Run a device scan with a trusted tool.">Pokrenuti skeniranje uređaja pouzdanim alatom.</li>
            <li data-sr="Isključiti instalaciju nepoznatih izvora ako je uključena." data-en="Turn off install from unknown sources if it was enabled.">Isključiti instalaciju nepoznatih izvora ako je uključena.</li>
            <li data-sr="Obavestiti lokalnu zajednicu ako je QR bio na javnom mestu." data-en="Warn the local community if the QR was in a public place.">Obavestiti lokalnu zajednicu ako je QR bio na javnom mestu.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="whatsapp-device-linking-scam.html" data-sr="WhatsApp: lažno povezivanje uređaja" data-en="WhatsApp: fake device linking">WhatsApp: lažno povezivanje uređaja</a></li>
            <li><a href="smishing.html" data-sr="Smišing" data-en="Smishing">Smišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik zatvori vektor napada i obnovi sigurnosne korake." data-en="<strong>Threshold:</strong> the user closes the attack vector and restores security steps."><strong>Prag faze:</strong> korisnik zatvori vektor napada i obnovi sigurnosne korake.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
<ul class="bullets">
            <li data-sr="QR na ulici ili liftu bez zvaničnog potpisa ustanove." data-en="A QR on the street or in an elevator without an official institution signature.">QR na ulici ili liftu bez zvaničnog potpisa ustanove.</li>
            <li data-sr="Obećanje zarade samo od skeniranja." data-en="A promise of earnings just from scanning.">Obećanje zarade samo od skeniranja.</li>
            <li data-sr="Tekst na drugom jeziku koji ne odgovara lokaciji." data-en="Text in another language that does not match the location.">Tekst na drugom jeziku koji ne odgovara lokaciji.</li>
            <li data-sr="Zahtev za APK umesto običnog poziva u aplikaciju prodavnice." data-en="A request for an APK instead of a normal app store link.">Zahtev za APK umesto običnog poziva u aplikaciju prodavnice.</li>
            <li data-sr="Grupa sa hiljadama članova i istim automatskim porukama." data-en="A group with thousands of members and the same automated messages.">Grupa sa hiljadama članova i istim automatskim porukama.</li>
            <li data-sr="Administrator ne odgovara na pitanje koje samo čovek zna." data-en="The admin does not answer a question only a human would know.">Administrator ne odgovara na pitanje koje samo čovek zna.</li>
            <li data-sr="Link u pregledaču nije whatsapp.com ili vaša banka." data-en="The browser link is not whatsapp.com or your bank.">Link u pregledaču nije whatsapp.com ili vaša banka.</li>
            <li data-sr="Pritisak da skenirate odmah jer mesta nestaju." data-en="Pressure to scan now because spots are running out.">Pritisak da skenirate odmah jer mesta nestaju.</li>
            <li data-sr="Isti vizuelni šablon QR-a širi se u više gradova." data-en="The same QR visual template spreads across multiple cities.">Isti vizuelni šablon QR-a širi se u više gradova.</li>
            <li data-sr="Poruka od prijatelja bez pozdrava u vašem stilu." data-en="A message from a friend without a greeting in your usual style.">Poruka od prijatelja bez pozdrava u vašem stilu.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
<ol class="steps">
        <li data-sr="Proverite kod organizacije direktno preko njihovog zvaničnog broja ili sajta." data-en="Verify with the organization directly via their official number or site.">Proverite kod organizacije direktno preko njihovog zvaničnog broja ili sajta.</li>
        <li data-sr="Ne instalirajte APK zbog QR koda sa ulice." data-en="Do not install an APK because of a street QR code.">Ne instalirajte APK zbog QR koda sa ulice.</li>
        <li data-sr="Uporedite ponudu sa zvaničnim kanalom brenda." data-en="Compare the offer with the brand official channel.">Uporedite ponudu sa zvaničnim kanalom brenda.</li>
        <li data-sr="Zatražite ručno ukucan link od administratora pre skeniranja." data-en="Ask the admin for a typed link before scanning.">Zatražite ručno ukucan link od administratora pre skeniranja.</li>
        <li data-sr="Proverite ko je kreirao grupu i kada." data-en="Check who created the group and when.">Proverite ko je kreirao grupu i kada.</li>
        <li data-sr="Ignorišite nagrade koje traže uplatu unapred." data-en="Ignore prizes that require upfront payment.">Ignorišite nagrade koje traže uplatu unapred.</li>
        <li data-sr="Uključite dvostepenu proveru na WhatsApp-u." data-en="Enable two-step verification on WhatsApp.">Uključite dvostepenu proveru na WhatsApp-u.</li>
        <li data-sr="Obavestite prijatelja drugim kanalom ako širi sumnjiv QR." data-en="Warn a friend on another channel if they spread a suspicious QR.">Obavestite prijatelja drugim kanalom ako širi sumnjiv QR.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
<ul class="bullets">
            <li data-sr="Da li sam ikada čuo za ovu organizaciju van ovog QR-a?" data-en="Have I heard of this organization outside this QR?">Da li sam ikada čuo za ovu organizaciju van ovog QR-a?</li>
            <li data-sr="Da li mogu da uđem u grupu bez skeniranja?" data-en="Can I join the group without scanning?">Da li mogu da uđem u grupu bez skeniranja?</li>
            <li data-sr="Da li URL koji se otvori odgovara očekivanom servisu?" data-en="Does the URL that opens match the expected service?">Da li URL koji se otvori odgovara očekivanom servisu?</li>
            <li data-sr="Da li aplikacija traži previše dozvola?" data-en="Is the app asking for too many permissions?">Da li aplikacija traži previše dozvola?</li>
            <li data-sr="Da li postoji politika privatnosti na stranici?" data-en="Is there a privacy policy on the page?">Da li postoji politika privatnosti na stranici?</li>
            <li data-sr="Da li je cena ili naknada neočekivana?" data-en="Is the price or fee unexpected?">Da li je cena ili naknada neočekivana?</li>
            <li data-sr="Da li bih ovo preporučio članu porodice?" data-en="Would I recommend this to a family member?">Da li bih ovo preporučio članu porodice?</li>
            <li data-sr="Da li mogu da sačekam jedan dan pre odluke?" data-en="Can I wait one day before deciding?">Da li mogu da sačekam jedan dan pre odluke?</li>
            <li data-sr="Da li je administrator spreman na video poziv?" data-en="Is the admin willing to do a video call?">Da li je administrator spreman na video poziv?</li>
            <li data-sr="Da li je ista slika QR-a postala virala na mreži?" data-en="Has the same QR image gone viral online?">Da li je ista slika QR-a postala virala na mreži?</li>
            <li data-sr="Da li je ovo povezano sa poslom koji nisam tražio?" data-en="Is this tied to a job I did not apply for?">Da li je ovo povezano sa poslom koji nisam tražio?</li>
            <li data-sr="Da li znam kome prijaviti sumnjiv QR u svom gradu?" data-en="Do I know whom to report a suspicious QR to in my city?">Da li znam kome prijaviti sumnjiv QR u svom gradu?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
<ol class="steps">
        <li data-sr="Prekinite instalaciju ili zatvorite stranicu bez unosa podataka." data-en="Stop the install or close the page without entering data.">Prekinite instalaciju ili zatvorite stranicu bez unosa podataka.</li>
        <li data-sr="Ako ste uneli kod, odmah odjavite veb uređaje i uključite dvostepenu proveru." data-en="If you entered a code, immediately log out web devices and enable two-step verification.">Ako ste uneli kod, odmah odjavite veb uređaje i uključite dvostepenu proveru.</li>
        <li data-sr="Obavestite banku ako je uneta kartica." data-en="Notify the bank if a card was entered.">Obavestite banku ako je uneta kartica.</li>
        <li data-sr="Deinstalirajte APK i pokrenite proveru uređaja." data-en="Uninstall the APK and run a device check.">Deinstalirajte APK i pokrenite proveru uređaja.</li>
        <li data-sr="Upozorite kontakte da ignorišu poruke sa istim QR-om." data-en="Warn contacts to ignore messages with the same QR.">Upozorite kontakte da ignorišu poruke sa istim QR-om.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Gde si video QR — na ulici ili u poruci?" data-en="Where did you see the QR — on the street or in a message?">Gde si video QR — na ulici ili u poruci?</li>
            <li data-sr="Da li si instalirao nešto posle skeniranja?" data-en="Did you install something after scanning?">Da li si instalirao nešto posle skeniranja?</li>
            <li data-sr="Da li si uneo kod ili broj kartice?" data-en="Did you enter a code or card number?">Da li si uneo kod ili broj kartice?</li>
            <li data-sr="Da li si poslao isti QR drugima?" data-en="Did you forward the same QR to others?">Da li si poslao isti QR drugima?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="QR sa ulice tretiramo kao nepoznat USB; ne skeniramo." data-en="We treat a street QR like an unknown USB; we do not scan.">QR sa ulice tretiramo kao nepoznat USB; ne skeniramo.</li>
            <li data-sr="Prava organizacija ima sajt ili broj koji možemo ručno da proverimo." data-en="A real organization has a site or number we can type and verify.">Prava organizacija ima sajt ili broj koji možemo ručno da proverimo.</li>
            <li data-sr="Hajde da obrišemo APK i pozovemo banku ako je bilo unosa." data-en="Let us delete the APK and call the bank if anything was entered.">Hajde da obrišemo APK i pozovemo banku ako je bilo unosa.</li>
            <li data-sr="Ako ne znaš tačno gde vodi QR, ne skeniraš." data-en="If you do not know exactly where the QR leads, you do not scan.">Ako ne znaš tačno gde vodi QR, ne skeniraš.</li>
          </ul>
        </div>
      </div>
    </section>
`
};
