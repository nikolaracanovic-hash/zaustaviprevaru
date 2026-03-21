if (!window.SCAM_CONTENT) window.SCAM_CONTENT = {};
window.SCAM_CONTENT["parcel-scam"] = {
  raw_html: `
<section class="content-section">
  <h2 data-sr="Uvod: kako radi prevara s lažnom paketnom notifikacijom" data-en="Intro: how the parcel scam works">Uvod: kako radi prevara s lažnom paketnom notifikacijom</h2>
  <p data-sr="Žrtva prima SMS ili e-poštu od naizgled legitimne kurirske službe (DHL, FedEx, UPS, Post) s obaveštenjem da pošiljka nije mogla biti isporučena i da treba platiti malu naknadu za ponovnu isporuku ili carinjenje. Link vodi na lažni sajt koji prikuplja podatke o kartici ili preuzima malver." data-en="The victim receives an SMS or email from an apparently legitimate courier service (DHL, FedEx, UPS, Post) notifying them that a shipment could not be delivered and that a small fee must be paid for re-delivery or customs clearance. The link leads to a fake site that collects card data or downloads malware.">Žrtva prima SMS ili e-poštu od naizgled legitimne kurirske službe (DHL, FedEx, UPS, Post) s obaveštenjem da pošiljka nije mogla biti isporučena i da treba platiti malu naknadu za ponovnu isporuku ili carinjenje. Link vodi na lažni sajt koji prikuplja podatke o kartici ili preuzima malver.</p>
</section>

<section class="content-section">
  <h2 data-sr="Model" data-en="Model">Model</h2>
  <div class="phase">
    <div class="label" data-sr="Lanac" data-en="Chain">Lanac</div>
    <p data-sr="Lažni SMS/e-pošta o pošiljci → link na lažni sajt → unos podataka o kartici → krađa podataka ili direktna naplata → gubitak" data-en="Fake SMS/email about shipment → link to fake site → card data entry → data theft or direct charge → loss">Lažni SMS/e-pošta o pošiljci → link na lažni sajt → unos podataka o kartici → krađa podataka ili direktna naplata → gubitak</p>
  </div>
  <div class="callout">
    <strong data-sr="Prag:" data-en="Threshold:">Prag:</strong>
    <span data-sr="Legitimne kurirske službe ne traže plaćanje putem linka u SMS-u — nikad ne klikajte na link, idite direktno na sajt kurira." data-en="Legitimate courier services do not request payment via an SMS link — never click the link, go directly to the courier's website.">Legitimne kurirske službe ne traže plaćanje putem linka u SMS-u — nikad ne klikajte na link, idite direktno na sajt kurira.</span>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Kako generalno radi" data-en="How it generally works">Kako generalno radi</h2>
  <div class="grid-2">
    <article>
      <h3 data-sr="Šta gradi poverenje" data-en="What builds trust">Šta gradi poverenje</h3>
      <ul class="bullets">
        <li data-sr="SMS ili e-pošta koriste logotip, boje i stilizaciju originalnih kurirskih servisa bez razlike." data-en="The SMS or email uses the logo, colors, and styling of original courier services without distinction.">SMS ili e-pošta koriste logotip, boje i stilizaciju originalnih kurirskih servisa bez razlike.</li>
        <li data-sr="Iznos naknade je namerno mali — 1–5 EUR — što smanjuje sumnju i povećava verovatnoću plaćanja." data-en="The fee amount is deliberately small — 1–5 EUR — which reduces suspicion and increases the likelihood of payment.">Iznos naknade je namerno mali — 1–5 EUR — što smanjuje sumnju i povećava verovatnoću plaćanja.</li>
        <li data-sr="Lažni broj za praćenje pošiljke daje legitimnost obaveštenja — izgleda kao realna pošiljka." data-en="A fake shipment tracking number gives the notification legitimacy — it looks like a real shipment.">Lažni broj za praćenje pošiljke daje legitimnost obaveštenja — izgleda kao realna pošiljka.</li>
        <li data-sr="Prevaranti šalju poruke masovno — bez specifičnog ciljanja žrtve — jer je mnogo ljudi primilo pošiljku ili čeka paket." data-en="Fraudsters send messages in bulk — without specifically targeting the victim — because many people have received or are awaiting a package.">Prevaranti šalju poruke masovno — bez specifičnog ciljanja žrtve — jer je mnogo ljudi primilo pošiljku ili čeka paket.</li>
      </ul>
    </article>
    <article>
      <h3 data-sr="Šta se dešava na lažnom sajtu" data-en="What happens on the fake site">Šta se dešava na lažnom sajtu</h3>
      <ul class="bullets">
        <li data-sr="Lažni sajt izgleda identično legitimnom sajtu kurirske službe, ali domen je drugačiji." data-en="The fake site looks identical to the courier service's legitimate site, but the domain is different.">Lažni sajt izgleda identično legitimnom sajtu kurirske službe, ali domen je drugačiji.</li>
        <li data-sr="Žrtva unosi broj kartice i CVV za malu naknadu — podaci se prikupljaju i koriste za veće transakcije." data-en="The victim enters the card number and CVV for the 'small fee' — the data is collected and used for larger transactions.">Žrtva unosi broj kartice i CVV za malu naknadu — podaci se prikupljaju i koriste za veće transakcije.</li>
        <li data-sr="Sajt može inicirati automatsku pretplatu ili probno plaćanje koje postaje mesečno." data-en="The site may initiate an automatic subscription or trial payment that becomes monthly.">Sajt može inicirati automatsku pretplatu ili probno plaćanje koje postaje mesečno.</li>
      </ul>
    </article>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Hronološki tok" data-en="Chronological flow">Hronološki tok</h2>

  <div class="phase">
    <div class="label" data-sr="Faza 1: Prijem lažnog obaveštenja" data-en="Phase 1: Receipt of fake notification">Faza 1: Prijem lažnog obaveštenja</div>
    <p data-sr="Žrtva prima SMS, e-poštu ili pop-up notifikaciju od kurirske službe s porukom da pošiljka čeka ili da je plaćanje potrebno." data-en="The victim receives an SMS, email, or pop-up notification from a courier service with a message that a shipment is waiting or that payment is needed.">Žrtva prima SMS, e-poštu ili pop-up notifikaciju od kurirske službe s porukom da pošiljka čeka ili da je plaćanje potrebno.</p>
    <ul class="bullets">
      <li data-sr="Proverite da li zaista čekate pošiljku pre nego bilo šta preduzmete — ako ne čekate paket, poruka je lažna." data-en="Verify whether you are actually awaiting a shipment before doing anything — if you are not expecting a package, the message is fake.">Proverite da li zaista čekate pošiljku pre nego bilo šta preduzmete — ako ne čekate paket, poruka je lažna.</li>
      <li data-sr="Idite direktno na sajt kurirske službe upisom adrese u pretragivač, ne klikom na link iz poruke." data-en="Go directly to the courier's website by typing the address in the browser, not by clicking the link in the message.">Idite direktno na sajt kurirske službe upisom adrese u pretragivač, ne klikom na link iz poruke.</li>
      <li data-sr="Unesite broj za praćenje koji je dat u poruci direktno na zvaničnom sajtu kurira da proverite da li je validan." data-en="Enter the tracking number given in the message directly on the courier's official site to check whether it is valid.">Unesite broj za praćenje koji je dat u poruci direktno na zvaničnom sajtu kurira da proverite da li je validan.</li>
    </ul>
    <div class="callout" data-sr="<strong>Prag faze:</strong> Nikad ne klikajte na link u SMS-u ili e-pošti od kurirske službe — idite direktno na sajt." data-en="Phase threshold: Never click a link in an SMS or email from a courier service — go directly to the site."><strong>Prag faze:</strong> Nikad ne klikajte na link u SMS-u ili e-pošti od kurirske službe — idite direktno na sajt.</div>
  </div>

  <div class="phase">
    <div class="label" data-sr="Faza 2: Lažni sajt i zahtev za plaćanjem" data-en="Phase 2: Fake site and payment request">Faza 2: Lažni sajt i zahtev za plaćanjem</div>
    <p data-sr="Link vodi na sajt koji izgleda identično DHL, FedEx, Post ili UPS sajtu. Sajt traži broj kartice za plaćanje male naknade za ponovnu isporuku." data-en="The link leads to a site that looks identical to DHL, FedEx, Post, or UPS. The site requests a card number for payment of a 'small re-delivery fee.">Link vodi na sajt koji izgleda identično DHL, FedEx, Post ili UPS sajtu. Sajt traži broj kartice za plaćanje male naknade za ponovnu isporuku.</p>
    <ul class="bullets">
      <li data-sr="Proverite URL adresu pažljivo — lažni domeni menjaju jedan karakter ili dodaju sufiks (dhl-delivery.com vs dhl.com)." data-en="Check the URL carefully — fake domains change one character or add a suffix (dhl-delivery.com vs dhl.com).">Proverite URL adresu pažljivo — lažni domeni menjaju jedan karakter ili dodaju sufiks (dhl-delivery.com vs dhl.com).</li>
      <li data-sr="Nikad ne unosite podatke o kartici na sajtu kom ste stigli putem linka iz SMS-a." data-en="Never enter card details on a site you reached via an SMS link.">Nikad ne unosite podatke o kartici na sajtu kom ste stigli putem linka iz SMS-a.</li>
      <li data-sr="Legitimne kurirske naknade se plaćaju pri isporuci gotovinom ili na zvaničnom sajtu — ne putem SMS linka." data-en="Legitimate courier fees are paid upon delivery in cash or on the official website — not via SMS link.">Legitimne kurirske naknade se plaćaju pri isporuci gotovinom ili na zvaničnom sajtu — ne putem SMS linka.</li>
    </ul>
    <div class="callout" data-sr="<strong>Prag faze:</strong> Svaki sajt koji ste dostigli klikom na SMS link koji traži podatke kartice je lažan — zatvorite odmah." data-en="Phase threshold: Any site reached by clicking an SMS link that requests card details is fake — close immediately."><strong>Prag faze:</strong> Svaki sajt koji ste dostigli klikom na SMS link koji traži podatke kartice je lažan — zatvorite odmah.</div>
  </div>

  <div class="phase">
    <div class="label" data-sr="Faza 3: Prikupljanje podataka o kartici" data-en="Phase 3: Card data collection">Faza 3: Prikupljanje podataka o kartici</div>
    <p data-sr="Žrtva unosi broj kartice i CVV za naknadu od 2 EUR. Podaci se prikupljaju i koriste za veće kupovine ili prodaju na crnom tržištu." data-en="The victim enters the card number and CVV for a '2 EUR fee'. Data is collected and used for larger purchases or sold on the black market.">Žrtva unosi broj kartice i CVV za naknadu od 2 EUR. Podaci se prikupljaju i koriste za veće kupovine ili prodaju na crnom tržištu.</p>
    <ul class="bullets">
      <li data-sr="Blokirajte karticu odmah ako ste uneli podatke na sumnjivom sajtu — pozovite banku hitno." data-en="Block the card immediately if you entered details on a suspicious site — call the bank urgently.">Blokirajte karticu odmah ako ste uneli podatke na sumnjivom sajtu — pozovite banku hitno.</li>
      <li data-sr="Prevarant ne naplaćuje odmah malu naknadu — naplaćuje veće iznose satima ili danima posle." data-en="The fraudster does not immediately charge the small fee — they charge larger amounts hours or days later.">Prevarant ne naplaćuje odmah malu naknadu — naplaćuje veće iznose satima ili danima posle.</li>
      <li data-sr="Pratite sve transakcije na kartici odmah posle sumnjivog unosa podataka." data-en="Monitor all card transactions immediately after a suspicious data entry.">Pratite sve transakcije na kartici odmah posle sumnjivog unosa podataka.</li>
    </ul>
    <div class="callout" data-sr="<strong>Prag faze:</strong> Unos podataka kartice na lažnom sajtu — blokirajte karticu odmah, ne čekajte prvu lažnu transakciju." data-en="Phase threshold: Card data entry on a fake site — block the card immediately, do not wait for the first fraudulent transaction."><strong>Prag faze:</strong> Unos podataka kartice na lažnom sajtu — blokirajte karticu odmah, ne čekajte prvu lažnu transakciju.</div>
  </div>

  <div class="phase">
    <div class="label" data-sr="Faza 4: Malver varijanta" data-en="Phase 4: Malware variant">Faza 4: Malver varijanta</div>
    <p data-sr="Umesto sajta za plaćanje, link preuzima aplikaciju ili konfiguracioni profil koji instalira malver na uređaj žrtve. Malver prikuplja sve podatke za prijavu, bankovne podatke i lozinke." data-en="Instead of a payment site, the link downloads an application or configuration profile that installs malware on the victim's device. Malware collects all login data, bank data, and passwords.">Umesto sajta za plaćanje, link preuzima aplikaciju ili konfiguracioni profil koji instalira malver na uređaj žrtve. Malver prikuplja sve podatke za prijavu, bankovne podatke i lozinke.</p>
    <ul class="bullets">
      <li data-sr="Nikad ne instalirajte aplikacije koje nisu u App Store ili Google Play na zahtev SMS-a." data-en="Never install applications not in the App Store or Google Play at the request of an SMS.">Nikad ne instalirajte aplikacije koje nisu u App Store ili Google Play na zahtev SMS-a.</li>
      <li data-sr="Konfiguracioni profili na iOS-u koji se instaliraju van App Store-a mogu dati neautorizovan pristup uređaju." data-en="Configuration profiles on iOS installed outside the App Store can give unauthorized access to the device.">Konfiguracioni profili na iOS-u koji se instaliraju van App Store-a mogu dati neautorizovan pristup uređaju.</li>
      <li data-sr="Skenirajte uređaj mobilnim antivirusnim softverom ako ste kliknuli na sumnjivi link." data-en="Scan the device with mobile antivirus software if you clicked a suspicious link.">Skenirajte uređaj mobilnim antivirusnim softverom ako ste kliknuli na sumnjivi link.</li>
    </ul>
    <div class="callout" data-sr="<strong>Prag faze:</strong> Nikad ne instalirajte softver putem linka iz SMS-a ili e-pošte o kurirskim uslugama." data-en="Phase threshold: Never install software via a link from an SMS or email about courier services."><strong>Prag faze:</strong> Nikad ne instalirajte softver putem linka iz SMS-a ili e-pošte o kurirskim uslugama.</div>
  </div>

  <div class="phase">
    <div class="label" data-sr="Faza 5: Sekundarne transakcije" data-en="Phase 5: Secondary transactions">Faza 5: Sekundarne transakcije</div>
    <p data-sr="Prikupljeni podaci kartice se koriste za veće kupovine ili prodaju. Žrtva prima obaveštenja o transakcijama koje nije napravila." data-en="Collected card data is used for larger purchases or sold. The victim receives notifications about transactions they did not make.">Prikupljeni podaci kartice se koriste za veće kupovine ili prodaju. Žrtva prima obaveštenja o transakcijama koje nije napravila.</p>
    <ul class="bullets">
      <li data-sr="Kontaktirajte banku radi blokiranja kartice i chargeback-a za sve neautorizovane transakcije." data-en="Contact the bank to block the card and request chargebacks for all unauthorized transactions.">Kontaktirajte banku radi blokiranja kartice i chargeback-a za sve neautorizovane transakcije.</li>
      <li data-sr="Promenite lozinke za sve onlajn servise koji su koristili isti e-mail ili telefon." data-en="Change passwords for all online services that used the same email or phone.">Promenite lozinke za sve onlajn servise koji su koristili isti e-mail ili telefon.</li>
      <li data-sr="Prijavite incident policiji s opisom lažnog SMS-a i dokumentacijom transakcija." data-en="Report the incident to the police with a description of the fake SMS and transaction documentation.">Prijavite incident policiji s opisom lažnog SMS-a i dokumentacijom transakcija.</li>
    </ul>
    <div class="callout" data-sr="<strong>Prag faze:</strong> Kontaktirajte banku odmah radi blokiranja kartice i chargeback-a za neautorizovane transakcije." data-en="Phase threshold: Contact the bank immediately to block the card and chargeback unauthorized transactions."><strong>Prag faze:</strong> Kontaktirajte banku odmah radi blokiranja kartice i chargeback-a za neautorizovane transakcije.</div>
  </div>

  <div class="phase">
    <div class="label" data-sr="Faza 6: Phishing — drugi krug" data-en="Phase 6: Phishing second round">Faza 6: Phishing — drugi krug</div>
    <p data-sr="E-mail adresa ili broj telefona žrtve je potvrđen kao aktivan. Žrtva može primiti novi val phishing poruka o vraćanju naplaćenog iznosa ili verifikaciji naloga." data-en="The victims email address or phone number is confirmed as active. The victim may receive a new wave of phishing messages about 'refunding the charged amount' or 'account verification.">E-mail adresa ili broj telefona žrtve je potvrđen kao aktivan. Žrtva može primiti novi val phishing poruka o vraćanju naplaćenog iznosa ili verifikaciji naloga.</p>
    <ul class="bullets">
      <li data-sr="Svaka ponuda kompenzacije od naizgled iste kurirske službe je sekundarna prevara — ne odgovarajte." data-en="Any compensation offer from apparently the same courier service is a secondary fraud — do not respond.">Svaka ponuda kompenzacije od naizgled iste kurirske službe je sekundarna prevara — ne odgovarajte.</li>
      <li data-sr="Prijavite broj telefona ili e-mail adresu pošiljaoca operatoru ili platformi za SMS prevare." data-en="Report the sender's phone number or email address to the operator or SMS fraud platform.">Prijavite broj telefona ili e-mail adresu pošiljaoca operatoru ili platformi za SMS prevare.</li>
    </ul>
    <div class="callout" data-sr="<strong>Prag faze:</strong> Nova kompenzacijska ponuda od iste kurirske prevare je sekundarna prevara — blokirajte i prijavite broj." data-en="Phase threshold: A new compensation offer from the same courier fraud is a secondary fraud — block and report the number."><strong>Prag faze:</strong> Nova kompenzacijska ponuda od iste kurirske prevare je sekundarna prevara — blokirajte i prijavite broj.</div>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
  <ul class="bullets">
    <li data-sr="SMS ili e-pošta od kurirske službe sadrži link za plaćanje naknade." data-en="SMS or email from a courier service contains a payment link for a fee.">SMS ili e-pošta od kurirske službe sadrži link za plaćanje naknade.</li>
    <li data-sr="Broj za praćenje u poruci ne postoji na zvaničnom sajtu kurirske službe." data-en="The tracking number in the message does not exist on the courier service's official site.">Broj za praćenje u poruci ne postoji na zvaničnom sajtu kurirske službe.</li>
    <li data-sr="URL linka se razlikuje od zvaničnog domena kurirske službe za jedan ili više karaktera." data-en="The link URL differs from the courier service's official domain by one or more characters.">URL linka se razlikuje od zvaničnog domena kurirske službe za jedan ili više karaktera.</li>
    <li data-sr="Poruka dolazi od nepoznatog broja, a ne od zvaničnih kratkih numeričkih kodova koje koriste kurirske službe." data-en="The message comes from an unknown number, not from the official short numeric codes used by courier services.">Poruka dolazi od nepoznatog broja, a ne od zvaničnih kratkih numeričkih kodova koje koriste kurirske službe.</li>
    <li data-sr="Niste naručili ništa niti čekate pošiljku, ali poruka insistira da je paket u čekanju." data-en="You have not ordered anything or are awaiting a shipment, but the message insists a package is waiting.">Niste naručili ništa niti čekate pošiljku, ali poruka insistira da je paket u čekanju.</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Provere" data-en="Checks">Provere</h2>
  <ul class="bullets">
    <li data-sr="Idite direktno na sajt kurirske službe upisom adrese u pretragivač — nikad klikom na link u poruci." data-en="Go directly to the courier's website by typing the address in the browser — never by clicking a link in the message.">Idite direktno na sajt kurirske službe upisom adrese u pretragivač — nikad klikom na link u poruci.</li>
    <li data-sr="Unesite broj za praćenje direktno na zvaničnom sajtu kurira da proverite da li pošiljka zaista postoji." data-en="Enter the tracking number directly on the courier's official site to verify whether the shipment actually exists.">Unesite broj za praćenje direktno na zvaničnom sajtu kurira da proverite da li pošiljka zaista postoji.</li>
    <li data-sr="Proverite URL linka pre klika — lažni domeni su skoro identični ali imaju mali karakter koji se razlikuje." data-en="Check the link URL before clicking — fake domains are almost identical but have a small character that differs.">Proverite URL linka pre klika — lažni domeni su skoro identični ali imaju mali karakter koji se razlikuje.</li>
    <li data-sr="Proverite da li zaista čekate pošiljku — ako ne čekate paket, poruka je lažna bez obzira na sadržaj." data-en="Check whether you are actually awaiting a shipment — if you are not expecting a package, the message is fake regardless of content.">Proverite da li zaista čekate pošiljku — ako ne čekate paket, poruka je lažna bez obzira na sadržaj.</li>
    <li data-sr="Nikad ne instalirajte aplikacije putem linka iz SMS-a — prave kurirske aplikacije su u App Store i Google Play." data-en="Never install applications via an SMS link — real courier apps are in the App Store and Google Play.">Nikad ne instalirajte aplikacije putem linka iz SMS-a — prave kurirske aplikacije su u App Store i Google Play.</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Checklista pri prijemu kurirskog SMS-a ili e-pošte" data-en="Checklist upon receiving a courier SMS or email">Checklista pri prijemu kurirskog SMS-a ili e-pošte</h2>
  <ul class="bullets">
    <li data-sr="Da li zaista čekam pošiljku od ove kurirske službe?" data-en="Am I actually awaiting a shipment from this courier service?">Da li zaista čekam pošiljku od ove kurirske službe?</li>
    <li data-sr="Da li sam proverio broj za praćenje direktno na zvaničnom sajtu kurira?" data-en="Have I checked the tracking number directly on the courier's official site?">Da li sam proverio broj za praćenje direktno na zvaničnom sajtu kurira?</li>
    <li data-sr="Da li sam otišao direktno na sajt kurira upisom adrese — a ne klikom na link iz poruke?" data-en="Have I gone directly to the courier's site by typing the address — not by clicking the link in the message?">Da li sam otišao direktno na sajt kurira upisom adrese — a ne klikom na link iz poruke?</li>
    <li data-sr="Da li URL linka u poruci tačno odgovara zvaničnom domenu kurirske službe?" data-en="Does the link URL in the message exactly match the courier service's official domain?">Da li URL linka u poruci tačno odgovara zvaničnom domenu kurirske službe?</li>
    <li data-sr="Da li je poruka stigla od zvaničnog kratkog koda kurirske službe ili od nepoznatog broja?" data-en="Did the message arrive from the courier service's official short code or from an unknown number?">Da li je poruka stigla od zvaničnog kratkog koda kurirske službe ili od nepoznatog broja?</li>
    <li data-sr="Da li je tražena naknada na sajtu koji je identičan ali s drugačijim domenom?" data-en="Is the requested fee on a site that is identical but with a different domain?">Da li je tražena naknada na sajtu koji je identičan ali s drugačijim domenom?</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion arises: order of actions">Ako sumnja krene: redosled poteza</h2>
  <ul class="bullets">
    <li data-sr="Blokirajte karticu odmah ako ste uneli podatke na sumnjivom sajtu — pozovite banku hitno." data-en="Block the card immediately if you entered details on a suspicious site — call the bank urgently.">Blokirajte karticu odmah ako ste uneli podatke na sumnjivom sajtu — pozovite banku hitno.</li>
    <li data-sr="Skenirajte uređaj antivirusnim softverom ako ste instalirali nešto putem linka iz poruke." data-en="Scan the device with antivirus software if you installed something via the link in the message.">Skenirajte uređaj antivirusnim softverom ako ste instalirali nešto putem linka iz poruke.</li>
    <li data-sr="Promenite lozinke za online bankarstvo i e-poštu ako ste dali podatke." data-en="Change online banking and email passwords if you provided details.">Promenite lozinke za online bankarstvo i e-poštu ako ste dali podatke.</li>
    <li data-sr="Prijavite lažni broj telefona ili domen operatoru i antivirusnim platformama." data-en="Report the fake phone number or domain to the operator and antivirus platforms.">Prijavite lažni broj telefona ili domen operatoru i antivirusnim platformama.</li>
    <li data-sr="Prijavite slučaj policiji s dokumentacijom SMS-a ili e-pošte i transakcija." data-en="Report the case to the police with documentation of the SMS or email and transactions.">Prijavite slučaj policiji s dokumentacijom SMS-a ili e-pošte i transakcija.</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
  <ul class="bullets">
    <li data-sr="Pitaj: Da li si kliknuo na link u SMS-u ili otišao direktno na sajt kurira?" data-en="Ask: Did you click the link in the SMS or go directly to the courier's website?">Pitaj: Da li si kliknuo na link u SMS-u ili otišao direktno na sajt kurira?</li>
    <li data-sr="Pitaj: Da li si uneo podatke kartice na sajtu koji si dostigao putem linka?" data-en="Ask: Did you enter card details on the site you reached via the link?">Pitaj: Da li si uneo podatke kartice na sajtu koji si dostigao putem linka?</li>
    <li data-sr="Rečenice koje pomažu: Legitimne kurirske službe nikad ne traže plaćanje putem SMS linka. Ako si uneo podatke kartice, pozovimo banku odmah i blokirajmo karticu." data-en="Sentences that help: Legitimate courier services never request payment via SMS link.' 'If you entered card details, let's call the bank right now and block the card.">Rečenice koje pomažu: Legitimne kurirske službe nikad ne traže plaćanje putem SMS linka. Ako si uneo podatke kartice, pozovimo banku odmah i blokirajmo karticu.</li>
    <li data-sr="Pomozi osobi da skenira uređaj i promeni lozinke odmah ako je kliknula na link." data-en="Help the person scan the device and change passwords immediately if they clicked the link.">Pomozi osobi da skenira uređaj i promeni lozinke odmah ako je kliknula na link.</li>
  </ul>
</section>


`
};
