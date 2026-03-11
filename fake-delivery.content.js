window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["fake-delivery"] = {
  raw_html: `
    <!-- 1) UVOD -->
    <section class="card">
      <h2 data-sr="Kako radi prevara sa lažnom dostavom" data-en="How fake delivery scams work">
        Kako radi prevara sa lažnom dostavom
      </h2>

      <p
        data-sr="Poruka stiže u trenutku kada očekujete paket. SMS, Viber, ili imejl tvrdi da pošiljka čeka, da postoji problem sa adresom, ili da treba platiti carinu. Link vodi na stranicu koja imitira kurirsku službu. Forma traži podatke kartice za malu doplatu — 200 dinara, 2 evra."
        data-en="The message arrives when you're expecting a package. An SMS, Viber message, or email claims the shipment is waiting, there's an address problem, or customs must be paid. The link leads to a page imitating a courier service. The form asks for card details for a small fee — 200 RSD, €2."
      >Poruka stiže u trenutku kada očekujete paket. SMS, Viber, ili imejl tvrdi da pošiljka čeka, da postoji problem sa adresom, ili da treba platiti carinu. Link vodi na stranicu koja imitira kurirsku službu. Forma traži podatke kartice za malu doplatu — 200 dinara, 2 evra.</p>

      <p
        data-sr="Šteta se realizuje kroz tri kanala: direktna naplata sa kartice, krađa podataka za kasniju upotrebu, ili OTP fišing gde se kod koristi za veću transakciju. Iznos iz poruke je uvek mali da bi delovao bezazleno. Stvarna šteta može biti višestruko veća."
        data-en="Damage occurs through three channels: direct card charges, data theft for later use, or OTP phishing where the code authorizes a larger transaction. The amount in the message is always small to seem harmless. The actual damage can be much higher."
      >Šteta se realizuje kroz tri kanala: direktna naplata sa kartice, krađa podataka za kasniju upotrebu, ili OTP fišing gde se kod koristi za veću transakciju. Iznos iz poruke je uvek mali da bi delovao bezazleno. Stvarna šteta može biti višestruko veća.</p>

      <div class="callout"
        data-sr="<strong>Zašto radi:</strong> Mnogi kupuju online i očekuju pakete. Poruka pogađa realan kontekst — „imam paket koji čekam, možda je ovo o njemu“. Ta verovatnost čini prevaru efikasnom."
        data-en="<strong>Why it works:</strong> Many shop online and expect packages. Message hits real context — 'I have a package I'm waiting for, maybe this is about it'. That plausibility makes the scam effective."
      ><strong>Zašto radi:</strong> Mnogi kupuju online i očekuju pakete. Poruka pogađa realan kontekst — „imam paket koji čekam, možda je ovo o njemu“. Ta verovatnost čini prevaru efikasnom.</div>
    </section>

    <!-- 2) TIPOVI LAŽNIH DOSTAVA -->
    <section class="card">
      <h2 data-sr="Tipovi lažnih dostava" data-en="Types of fake delivery scams">
        Tipovi lažnih dostava
      </h2>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Lažna carina / taksa" data-en="Fake customs / fee">Lažna carina / taksa</div>
          <ul class="bullets">
            <li data-sr="poruka tvrdi da paket čeka na carini." data-en="message claims package waiting at customs.">poruka tvrdi da paket čeka na carini.</li>
            <li data-sr="traži se mala uplata za oslobađanje." data-en="small payment requested for release.">traži se mala uplata za oslobađanje.</li>
            <li data-sr="link vodi na lažnu stranicu pošte ili kurira." data-en="link leads to fake postal or courier page.">link vodi na lažnu stranicu pošte ili kurira.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Problem sa adresom" data-en="Address problem">Problem sa adresom</div>
          <ul class="bullets">
            <li data-sr="poruka tvrdi da adresa nije kompletna." data-en="message claims address incomplete.">poruka tvrdi da adresa nije kompletna.</li>
            <li data-sr="traži se „potvrda“ sa podacima kartice." data-en="confirmation with card details requested.">traži se „potvrda“ sa podacima kartice.</li>
            <li data-sr="forma izgleda kao zvanična kurirska." data-en="form looks like official courier form.">forma izgleda kao zvanična kurirska.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Propuštena dostava" data-en="Missed delivery">Propuštena dostava</div>
          <ul class="bullets">
            <li data-sr="poruka tvrdi da kurir nije mogao da isporuči." data-en="message claims courier couldn't deliver.">poruka tvrdi da kurir nije mogao da isporuči.</li>
            <li data-sr="traži se zakazivanje nove dostave uz „verifikaciju." data-en="rescheduling requested with verification.">traži se zakazivanje nove dostave uz „verifikaciju“.</li>
            <li data-sr="verifikacija = unos podataka kartice." data-en="verification = entering card details.">verifikacija = unos podataka kartice.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Lažno praćenje pošiljke" data-en="Fake tracking">Lažno praćenje pošiljke</div>
          <ul class="bullets">
            <li data-sr="link navodno vodi do praćenja paketa." data-en="link supposedly leads to package tracking.">link navodno vodi do praćenja paketa.</li>
            <li data-sr="stranica traži login ili podatke kartice." data-en="page asks for login or card details.">stranica traži login ili podatke kartice.</li>
            <li data-sr="može instalirati zlonamerni program." data-en="may install malware.">može instalirati zlonamerni program.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 3) ANATOMIJA NAPADA -->
    <section class="card">
      <h2 data-sr="Anatomija napada" data-en="Attack anatomy">
        Anatomija napada
      </h2>

      <ol class="steps">
        <li data-sr="prevarant šalje masovne poruke (SMS, Viber, imejl)." data-en="scammer sends mass messages (SMS, Viber, email).">prevarant šalje masovne poruke (SMS, Viber, imejl).</li>
        <li data-sr="poruka tvrdi problem sa dostavom i sadrži link." data-en="message claims delivery problem and contains link.">poruka tvrdi problem sa dostavom i sadrži link.</li>
        <li data-sr="link vodi na lažnu stranicu koja imitira kurira." data-en="link leads to fake page imitating courier.">link vodi na lažnu stranicu koja imitira kurira.</li>
        <li data-sr="žrtva unosi podatke kartice za „malu doplatu." data-en="victim enters card details for small fee.">žrtva unosi podatke kartice za „malu doplatu“.</li>
        <li data-sr="prevarant ili naplaćuje direktno, ili čuva podatke za kasnije." data-en="scammer either charges directly or saves data for later.">prevarant ili naplaćuje direktno, ili čuva podatke za kasnije.</li>
        <li data-sr="ako traži OTP kod — koristi ga za veću transakciju." data-en="if asks for OTP code — uses it for larger transaction.">ako traži OTP kod — koristi ga za veću transakciju.</li>
      </ol>
    </section>

    <!-- 4) CRVENE ZASTAVICE -->
    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">
        Crvene zastavice
      </h2>

      <ul class="bullets">
        <li data-sr="poruka dolazi sa nepoznatog broja ili sumnjive adrese." data-en="message comes from unknown number or suspicious address.">poruka dolazi sa nepoznatog broja ili sumnjive adrese.</li>
        <li data-sr="link ne vodi na zvaničan domen kurirske službe." data-en="link doesn't lead to official courier domain.">link ne vodi na zvaničan domen kurirske službe.</li>
        <li data-sr="traži se uplata za nešto što bi trebalo da bude besplatno." data-en="payment requested for something that should be free.">traži se uplata za nešto što bi trebalo da bude besplatno.</li>
        <li data-sr="forma traži CVV i PIN — legitimni kuriri to nikad ne traže." data-en="form asks for CVV and PIN — legitimate couriers never ask for this.">forma traži CVV i PIN — legitimni kuriri to nikad ne traže.</li>
        <li data-sr="hitnost: „paket će biti vraćen za 24h." data-en="urgency: package will be returned in 24h.">hitnost: „paket će biti vraćen za 24h“.</li>
        <li data-sr="poruka nema detalje o pošiljci (broj, pošiljalac)." data-en="message has no shipment details (number, sender).">poruka nema detalje o pošiljci (broj, pošiljalac).</li>
      </ul>

      <div class="callout"
        data-sr="<strong>Zlatno pravilo:</strong> Legitimni kuriri nikad ne traže podatke kartice preko SMS-a ili Vibera. Carina se plaća pri preuzimanju, pouzećem."
        data-en="<strong>Golden rule:</strong> Legitimate couriers never ask for card details via SMS or Viber. Customs are paid upon pickup, cash on delivery."
      ><strong>Zlatno pravilo:</strong> Legitimni kuriri nikad ne traže podatke kartice preko SMS-a ili Vibera. Carina se plaća pri preuzimanju, pouzećem.</div>
    </section>

    <!-- 5) PROVERA -->
    <section class="card">
      <h2 data-sr="Kako proveriti da li je poruka legitimna" data-en="How to verify if message is legitimate">
        Kako proveriti da li je poruka legitimna
      </h2>

      <ol class="steps">
        <li data-sr="proveri broj pošiljke direktno na zvaničnom sajtu kurira." data-en="check shipment number directly on official courier site.">proveri broj pošiljke direktno na zvaničnom sajtu kurira.</li>
        <li data-sr="pozovi kurirsku službu na zvaničan broj (ne na broj iz poruke)." data-en="call courier service at official number (not number from message).">pozovi kurirsku službu na zvaničan broj (ne na broj iz poruke).</li>
        <li data-sr="proveri domen linka pre klika — da li je zvaničan." data-en="check link domain before clicking — is it official.">proveri domen linka pre klika — da li je zvaničan.</li>
        <li data-sr="ako si nešto naručio — proveri sa prodavcem da li je poslato." data-en="if you ordered something — check with seller if shipped.">ako si nešto naručio — proveri sa prodavcem da li je poslato.</li>
      </ol>
    </section>

    <!-- 6) AKO SI UNEO PODATKE -->
    <section class="card">
      <h2 data-sr="Ako si uneo podatke kartice" data-en="If you entered card details">
        Ako si uneo podatke kartice
      </h2>

      <ol class="steps">
        <li data-sr="odmah blokiraj karticu — pozovi banku ili koristi aplikaciju." data-en="immediately block card — call bank or use app.">odmah blokiraj karticu — pozovi banku ili koristi aplikaciju.</li>
        <li data-sr="proveri sve transakcije — prijavi neovlašćene." data-en="check all transactions — report unauthorized ones.">proveri sve transakcije — prijavi neovlašćene.</li>
        <li data-sr="zatraži novu karticu sa novim brojem." data-en="request new card with new number.">zatraži novu karticu sa novim brojem.</li>
        <li data-sr="sačuvaj screenshot poruke i lažne stranice kao dokaz." data-en="save screenshot of message and fake page as evidence.">sačuvaj screenshot poruke i lažne stranice kao dokaz.</li>
        <li data-sr="prijavi prevaru policiji i banci." data-en="report scam to police and bank.">prijavi prevaru policiji i banci.</li>
      </ol>

      <div class="callout"
        data-sr="<strong>Vreme je ključno:</strong> Što brže blokiraš karticu, manja je šansa da prevarant uspe da je iskoristi."
        data-en="<strong>Time is critical:</strong> The faster you block the card, the less chance the scammer has to use it."
      ><strong>Vreme je ključno:</strong> Što brže blokiraš karticu, manja je šansa da prevarant uspe da je iskoristi.</div>
    </section>

    <!-- 7) ZAŠTO OVIH PREVARA IMA TOLIKO -->
    <section class="card">
      <h2 data-sr="Zašto ovih prevara ima toliko" data-en="Why these scams are so common">
        Zašto ovih prevara ima toliko
      </h2>

      <p
        data-sr="Online kupovina je postala standard. Većina ljudi u bilo kom trenutku očekuje bar jedan paket. Prevarant ne mora da zna šta si naručio — dovoljno je da pošalje poruku i statistički će pogoditi nekoga ko zaista čeka dostavu."
        data-en="Online shopping has become standard. Most people, at any given time, are expecting at least one package. A scammer doesn't need to know what you ordered — just sending a message will statistically hit someone who is actually waiting for delivery."
      >Online kupovina je postala standard. Većina ljudi u bilo kom trenutku očekuje bar jedan paket. Prevarant ne mora da zna šta si naručio — dovoljno je da pošalje poruku i statistički će pogoditi nekoga ko zaista čeka dostavu.</p>

      <p
        data-sr="Cena napada je minimalna. Slanje hiljada SMS poruka košta malo. Lažna stranica se pravi za sat vremena. Ako 1% žrtava upadne — prevara je isplativa. Zato ove poruke stižu stalno."
        data-en="The attack cost is minimal. Sending thousands of SMS messages costs little. A fake page can be made in an hour. If 1% of victims fall for it, the scam is profitable. That's why these messages keep coming."
      >Cena napada je minimalna. Slanje hiljada SMS poruka košta malo. Lažna stranica se pravi za sat vremena. Ako 1% žrtava upadne — prevara je isplativa. Zato ove poruke stižu stalno.</p>
    </section>

    <!-- CHECKLISTA -->
    
    <!-- PROVERE -->
    <section class="content-section">
      <h2 data-sr="Provere: 8 brzih provera pre reagovanja na poruku o dostavi" data-en="Checks: 8 quick checks before reacting to a delivery message">Provere: 8 brzih provera pre reagovanja na poruku o dostavi</h2>
      <ol class="steps">
        <li data-sr="Proveri broj posiljke na zvanicnom sajtu kurirske sluzbe — direktno, bez klika na link iz poruke." data-en="Check the tracking number on the courier official website — directly, without clicking the link from the message.">Proveri broj posiljke na zvanicnom sajtu kurirske sluzbe — direktno, bez klika na link iz poruke.</li>
        <li data-sr="Pozovi kurirsku sluzbu na zvanicni broj sa sajta i pitaj o posiljci." data-en="Call the courier service at the official number from their website and ask about the shipment.">Pozovi kurirsku sluzbu na zvanicni broj sa sajta i pitaj o posiljci.</li>
        <li data-sr="Proveri domen linka iz poruke pre klika — da li je to zvanicni domen kurira?" data-en="Check the link domain from the message before clicking — is it the official courier domain?">Proveri domen linka iz poruke pre klika — da li je to zvanicni domen kurira?</li>
        <li data-sr="Ako si nesto narucio, proveri sa prodavcem da li je posiljka zaista poslata." data-en="If you ordered something, check with the seller whether the shipment was actually sent.">Ako si nesto narucio, proveri sa prodavcem da li je posiljka zaista poslata.</li>
        <li data-sr="Legitimni kuriri nikad ne traže podatke kartice putem SMS-a ili Vibera." data-en="Legitimate couriers never request card details via SMS or Viber.">Legitimni kuriri nikad ne traže podatke kartice putem SMS-a ili Vibera.</li>
        <li data-sr="Carina se placa na safteru pri preuzimanju, nikad unapred putem linka." data-en="Customs are paid at the counter upon pickup, never in advance via a link.">Carina se placa na safteru pri preuzimanju, nikad unapred putem linka.</li>
        <li data-sr="Ako je iznos koji traže veoma mali, to je namerno — prevara je isplativa cak i na malim iznosima." data-en="If the amount they request is very small, that is intentional — the scam is profitable even on small amounts.">Ako je iznos koji traže veoma mali, to je namerno — prevara je isplativa cak i na malim iznosima.</li>
        <li data-sr="Proveri da li poruka dolazi sa poznatog broja ili adrese kurirske sluzbe." data-en="Check whether the message comes from a known number or address of the courier service.">Proveri da li poruka dolazi sa poznatog broja ili adrese kurirske sluzbe.</li>
      </ol>
    </section>

<section class="content-section">
      <h2 data-sr="Checklista: pitanja pre klika na link o dostavi" data-en="Checklist: questions before clicking a delivery link">Checklista: pitanja pre klika na link o dostavi</h2>
      <ul class="bullets">
        <li data-sr="Da li sam zaista naručio nešto što čekam?" data-en="Did I actually order something I am waiting for?">Da li sam zaista naručio nešto što čekam?</li>
        <li data-sr="Da li sam dobio potvrdu narudžbine od prodavca?" data-en="Did I receive an order confirmation from the seller?">Da li sam dobio potvrdu narudžbine od prodavca?</li>
        <li data-sr="Da li link vodi na zvaničan domen kurirske službe?" data-en="Does the link lead to the official courier domain?">Da li link vodi na zvaničan domen kurirske službe?</li>
        <li data-sr="Da li poruka sadrži broj pošiljke koji mogu da proverim?" data-en="Does the message include a tracking number I can verify?">Da li poruka sadrži broj pošiljke koji mogu da proverim?</li>
        <li data-sr="Da li zvanična kurirska služba traži podatke kartice putem SMS-a?" data-en="Does an official courier ask for card details via SMS?">Da li zvanična kurirska služba traži podatke kartice putem SMS-a?</li>
        <li data-sr="Da li je iznos koji traže veoma mali kako bi izgledao bezazleno?" data-en="Is the amount requested very small to appear harmless?">Da li je iznos koji traže veoma mali kako bi izgledao bezazleno?</li>
        <li data-sr="Da li poruka stvara pritisak vremena — „paket se vraća za 24h."?" data-en="Does the message create time pressure — package returned in 24h?">Da li poruka stvara pritisak vremena — „paket se vraća za 24h"?</li>
        <li data-sr="Da li sam pre klika proverio broj pošiljke direktno na sajtu kurira?" data-en="Did I verify the tracking number directly on the courier site before clicking?">Da li sam pre klika proverio broj pošiljke direktno na sajtu kurira?</li>
        <li data-sr="Da li stranica na koju link vodi izgleda drugačije od zvanične?" data-en="Does the page the link leads to look different from the official site?">Da li stranica na koju link vodi izgleda drugačije od zvanične?</li>
        <li data-sr="Da li forma traži CVV, PIN, ili OTP kod — koje kuriri nikada ne traže?" data-en="Does the form ask for CVV, PIN, or OTP — which couriers never request?">Da li forma traži CVV, PIN, ili OTP kod — koje kuriri nikada ne traže?</li>
        <li data-sr="Da li sam pozvao kurirsku službu na njen zvanični broj da proverim situaciju?" data-en="Did I call the courier service at their official number to verify the situation?">Da li sam pozvao kurirsku službu na njen zvanični broj da proverim situaciju?</li>
        <li data-sr="Da li SMS ili imejl dolazi sa nepoznatog ili sumnjivog pošiljaoca?" data-en="Does the SMS or email come from an unknown or suspicious sender?">Da li SMS ili imejl dolazi sa nepoznatog ili sumnjivog pošiljaoca?</li>
      </ul>
    </section>

    <!-- AKO SUMNJA KRENE -->
    <section class="content-section">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Ne klikaj ni na jedan link iz poruke — čak ni da pogledaš." data-en="Do not click any link from the message — not even to look.">Ne klikaj ni na jedan link iz poruke — čak ni da pogledaš.</li>
        <li data-sr="Uzmi broj pošiljke iz poruke i proveri ga na zvaničnom sajtu kurirske službe." data-en="Take the tracking number from the message and verify it on the official courier website.">Uzmi broj pošiljke iz poruke i proveri ga na zvaničnom sajtu kurirske službe.</li>
        <li data-sr="Pozovi kurirsku službu na zvanični broj (sa sajta, ne iz poruke) i pitaj o pošiljci." data-en="Call the courier service at their official number (from their website, not the message) and ask about the shipment.">Pozovi kurirsku službu na zvanični broj (sa sajta, ne iz poruke) i pitaj o pošiljci.</li>
        <li data-sr="Ako si uneo podatke kartice: odmah blokiraj karticu kroz aplikaciju banke ili pozivom banci." data-en="If you entered card details: immediately block the card via the bank app or by calling your bank.">Ako si uneo podatke kartice: odmah blokiraj karticu kroz aplikaciju banke ili pozivom banci.</li>
        <li data-sr="Sačuvaj screenshot poruke i lažne stranice kao dokaz za prijavu." data-en="Save a screenshot of the message and fake page as evidence for a report.">Sačuvaj screenshot poruke i lažne stranice kao dokaz za prijavu.</li>
        <li data-sr="Prijavi prevaru policiji i banci, naročito ako je novac skinut." data-en="Report the scam to police and your bank, especially if money was taken.">Prijavi prevaru policiji i banci, naročito ako je novac skinut.</li>
      </ol>
    </section>

    <!-- AKO POMAŽEŠ NEKOME -->
    <section class="content-section">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
      <ul class="bullets">
        <li data-sr="Da li su primili poruku o dostavi i odmah kliknuli na link?" data-en="Did they receive a delivery message and immediately click the link?">Da li su primili poruku o dostavi i odmah kliknuli na link?</li>
        <li data-sr="Da li su uneli podatke kartice na stranici na koju su bili preusmereni?" data-en="Did they enter card details on the page they were redirected to?">Da li su uneli podatke kartice na stranici na koju su bili preusmereni?</li>
        <li data-sr="Da li su dobili SMS sa OTP kodom koji su uneli na stranici?" data-en="Did they receive an OTP SMS that they entered on the page?">Da li su dobili SMS sa OTP kodom koji su uneli na stranici?</li>
        <li data-sr="Da li su proverili narudžbinu kod prodavca pre nego što su reagovali na poruku?" data-en="Did they check the order with the seller before responding to the message?">Da li su proverili narudžbinu kod prodavca pre nego što su reagovali na poruku?</li>
      </ul>
      <p data-sr="Rečenice koje rade:" data-en="Sentences that help:">Rečenice koje rade:</p>
      <ul class="bullets">
        <li data-sr="„Kuriri ne traže podatke kartice putem SMS-a — to je uvek lažno." data-en="Couriers never ask for card details via SMS — that is always fake.">"Kuriri ne traže podatke kartice putem SMS-a — to je uvek lažno.".</li>
        <li data-sr="„Carina se plaća na šalteru pri preuzimanju, nikad unapred putem linka." data-en="Customs are paid at the counter upon pickup, never in advance via a link.">"Carina se plaća na šalteru pri preuzimanju, nikad unapred putem linka.".</li>
        <li data-sr="„Ako si uneo podatke kartice, blokiraj je odmah — ne čekaj da vidiš da li će biti naplate." data-en="If you entered card details, block it immediately — don't wait to see if charges appear.">"Ako si uneo podatke kartice, blokiraj je odmah — ne čekaj da vidiš da li će biti naplate.".</li>
        <li data-sr="„Broj pošiljke iz poruke možeš proveriti direktno na sajtu kurira bez klika na link." data-en="The tracking number from the message can be checked directly on the courier website without clicking the link.">"Broj pošiljke iz poruke možeš proveriti direktno na sajtu kurira bez klika na link.".</li>
      </ul>
    </section>

    <!-- POVEZANE PREVARE -->
    <section class="content-section">
      <h2 data-sr="Povezane prevare" data-en="Related scams">Povezane prevare</h2>
      <ul class="bullets">
        <li><a href="parcel-scam.html" data-sr="Prevara s paketom — lažne obaveštenja o pošiljkama sa zahtevom za uplatu." data-en="Parcel scam — fake shipment notifications requesting payment.">Prevara s paketom — lažne obaveštenja o pošiljkama sa zahtevom za uplatu</a></li>
        <li><a href="package-redelivery-scam.html" data-sr="Prevara s ponovnom dostavom — lažni zahtevi za zakazivanje dostave." data-en="Package redelivery scam — fake requests to reschedule delivery.">Prevara s ponovnom dostavom — lažni zahtevi za zakazivanje dostave</a></li>
        <li><a href="smishing.html" data-sr="Smishing — SMS prevare sa lažnim linkovima." data-en="Smishing — SMS scams with fake links.">Smishing — SMS prevare sa lažnim linkovima</a></li>
        <li><a href="phishing.html" data-sr="Fišing — lažne stranice koje kradu podatke." data-en="Phishing — fake pages that steal data.">Fišing — lažne stranice koje kradu podatke</a></li>
        <li><a href="card-not-present-fraud.html" data-sr="Card-not-present prevara — zloupotreba ukradenih podataka kartice." data-en="Card-not-present fraud — misuse of stolen card data.">Card-not-present prevara — zloupotreba ukradenih podataka kartice</a></li>
      </ul>
    </section>

    <!-- 8) IZVORI -->
    <section class="card sources" id="sources">
      <h2 data-sr="Izvori" data-en="Sources">Izvori</h2>
      <ul>
        <li><a href="https://www.dhl.com/global-en/home/footer/fraud-awareness.html" target="_blank" rel="noopener noreferrer">DHL — Fraud awareness</a></li>
        <li><a href="https://www.ups.com/us/en/support/fraud-protection.page" target="_blank" rel="noopener noreferrer">UPS — Fraud protection</a></li>
        <li><a href="https://consumer.ftc.gov/articles/delivery-scams-and-what-do-about-them" target="_blank" rel="noopener noreferrer">FTC — Delivery scams</a></li>
      </ul>
    </section>
  `
};
