if (!window.SCAM_CONTENT) window.SCAM_CONTENT = {};
window.SCAM_CONTENT["browser-extension-scam"] = {
  raw_html: `
<section class="content-section">
  <h2 data-sr="Uvod: kako radi prevara sa zlonamernim browser dodatkom" data-en="Introduction: how the browser extension scam works">Uvod: kako radi prevara sa zlonamernim browser dodatkom</h2>
  <p data-sr="Napadač distribuira browser proširenje koje izgleda kao legitiman alat — blokator reklama, password manager, prevodilac, produktivni widget. Posle instalacije proširenje dobija pristup svim otvorenim stranicama i može da čita, menja ili krade sadržaj koji korisnik vidi i unosi, uključujući lozinke, brojeve kartica i sesijske kolačiće." data-en="The attacker distributes a browser extension that looks like a legitimate tool — ad blocker, password manager, translator, productivity widget. After installation the extension gains access to all open pages and can read, modify or steal content the user sees and enters, including passwords, card numbers and session cookies.">Napadač distribuira browser proširenje koje izgleda kao legitiman alat — blokator reklama, password manager, prevodilac, produktivni widget. Posle instalacije proširenje dobija pristup svim otvorenim stranicama i može da čita, menja ili krade sadržaj koji korisnik vidi i unosi, uključujući lozinke, brojeve kartica i sesijske kolačiće.</p>
  <p data-sr="Browser proširenja su posebno opasna jer im pregledač po defaultu daje širi pristup nego mobilnim aplikacijama. Dozvola može čitati i menjati sve podatke na svim veb sajtovima je standardan zahtev koji mnogi korisnici ignorišu kao tehnički neophodan. Napadač upravo to iskorišćava." data-en="Browser extensions are particularly dangerous because the browser by default gives them wider access than mobile apps. The permission can read and change all data on all websites is a standard request that many users ignore as technically necessary. The attacker exploits exactly that.">Browser proširenja su posebno opasna jer im pregledač po defaultu daje širi pristup nego mobilnim aplikacijama. Dozvola može čitati i menjati sve podatke na svim veb sajtovima je standardan zahtev koji mnogi korisnici ignorišu kao tehnički neophodan. Napadač upravo to iskorišćava.</p>
</section>

<section class="content-section">
  <h2 data-sr="Model" data-en="Model">Model</h2>
  <div class="phase">
    <div class="label" data-sr="Lanac" data-en="Chain">Lanac</div>
    <p data-sr="Oglas/preporuka/lažna prodavnica → instalacija proširenja → dozvola pristupa stranicama → krađa sesija/lozinki/podataka → preuzimanje naloga ili finansijska šteta" data-en="Ad/recommendation/fake store → extension installation → page access permission → session/password/data theft → account takeover or financial damage">Oglas/preporuka/lažna prodavnica → instalacija proširenja → dozvola pristupa stranicama → krađa sesija/lozinki/podataka → preuzimanje naloga ili finansijska šteta</p>
  </div>
  <div class="callout">
    <strong data-sr="Prag:" data-en="Threshold:">Prag:</strong>
    <span data-sr="Odobravanje dozvole može čitati i menjati sve podatke na svim veb sajtovima. Posle toga proširenje ima pristup svemu što korisnik otvori u browser-u." data-en="Approving the permission can read and change all data on all websites. After that the extension has access to everything the user opens in the browser.">Odobravanje dozvole može čitati i menjati sve podatke na svim veb sajtovima. Posle toga proširenje ima pristup svemu što korisnik otvori u browser-u.</span>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Kako generalno radi: mehanika" data-en="How it works: mechanics">Kako generalno radi: mehanika</h2>
  <div class="grid-2">
    <div class="phase">
      <div class="label" data-sr="Šta gradi uverljivost" data-en="What builds credibility">Šta gradi uverljivost</div>
      <ul class="bullets">
        <li data-sr="Proširenje nudi korisnu i besplatnu funkciju kao što je blokiranje reklama ili upravljanje lozinkama." data-en="The extension offers a useful and free feature such as ad blocking or password management.">Proširenje nudi korisnu i besplatnu funkciju kao što je blokiranje reklama ili upravljanje lozinkama.</li>
        <li data-sr="Naziv i ikona imitiraju popularna proširenja kao uBlock, LastPass ili Google Translate." data-en="The name and icon mimic popular extensions like uBlock, LastPass or Google Translate.">Naziv i ikona imitiraju popularna proširenja kao uBlock, LastPass ili Google Translate.</li>
        <li data-sr="Lažne recenzije i visok broj instalacija u neregulisanim ili kompromitovanim prodavnicama daju kredibilitet." data-en="Fake reviews and high installation count in unregulated or compromised stores provide credibility.">Lažne recenzije i visok broj instalacija u neregulisanim ili kompromitovanim prodavnicama daju kredibilitet.</li>
        <li data-sr="Proširenje zaista obavlja obećanu korisnu funkciju da bi smanjilo sumnju korisnika." data-en="The extension actually performs the promised useful function to reduce user suspicion.">Proširenje zaista obavlja obećanu korisnu funkciju da bi smanjilo sumnju korisnika.</li>
      </ul>
    </div>
    <div class="phase">
      <div class="label" data-sr="Kako se uvodi radnja" data-en="How the action is introduced">Kako se uvodi radnja</div>
      <ul class="bullets">
        <li data-sr="Proširenje traži dozvolu pristupa svim stranicama što korisnik prihvata kao standardni zahtev." data-en="The extension requests permission to access all pages which the user accepts as a standard requirement.">Proširenje traži dozvolu pristupa svim stranicama što korisnik prihvata kao standardni zahtev.</li>
        <li data-sr="Session hijacking: proširenje krade sesijske kolačiće koji daju napadaču pristup bez lozinke." data-en="Session hijacking: the extension steals session cookies that give the attacker access without a password.">Session hijacking: proširenje krade sesijske kolačiće koji daju napadaču pristup bez lozinke.</li>
        <li data-sr="Form capturing: proširenje beleži sve unose u forme na stranicama uključujući lozinke i kartične podatke." data-en="Form capturing: the extension records all form inputs on pages including passwords and card data.">Form capturing: proširenje beleži sve unose u forme na stranicama uključujući lozinke i kartične podatke.</li>
        <li data-sr="Modifikacija sadržaja: proširenje može da promeni prikazani IBAN pre slanja transakcije." data-en="Content modification: the extension can change the displayed IBAN before submitting a transaction.">Modifikacija sadržaja: proširenje može da promeni prikazani IBAN pre slanja transakcije.</li>
      </ul>
    </div>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Hronološki tok (faze + evolucije)" data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

  <article class="phase">
    <h3 data-sr="Faza 1 — Distribucija i otkrivanje proširenja" data-en="Phase 1 — Distribution and discovery of extension">Faza 1 — Distribucija i otkrivanje proširenja</h3>
    <p data-sr="Korisnik nailazi na proširenje kroz oglas, preporuku na forumu, imejl ili direktan link. Ponekad je proširenje u zvaničnoj prodavnici ali je naknadnom ažuriranjem dobilo malicioznu komponentu." data-en="The user encounters the extension through an ad, forum recommendation, email or direct link. Sometimes the extension is in the official store but gained a malicious component through a subsequent update.">Korisnik nailazi na proširenje kroz oglas, preporuku na forumu, imejl ili direktan link. Ponekad je proširenje u zvaničnoj prodavnici ali je naknadnom ažuriranjem dobilo malicioznu komponentu.</p>
    <ul class="bullets">
      <li data-sr="Oglas nudi besplatnu premijum funkciju koja normalno košta ili traži pretplatu." data-en="The ad offers a free premium feature that normally costs money or requires a subscription.">Oglas nudi besplatnu premijum funkciju koja normalno košta ili traži pretplatu.</li>
      <li data-sr="Preporuka na forumu ili društvenoj mreži dolazi od lažnog naloga koji propagira proširenje." data-en="A recommendation on a forum or social network comes from a fake account that promotes the extension.">Preporuka na forumu ili društvenoj mreži dolazi od lažnog naloga koji propagira proširenje.</li>
      <li data-sr="Legitimno proširenje koje je korisnik koristio prodaje se novom vlasniku koji dodaje maliciozni kod u update." data-en="A legitimate extension the user was using is sold to a new owner who adds malicious code in an update.">Legitimno proširenje koje je korisnik koristio prodaje se novom vlasniku koji dodaje maliciozni kod u update.</li>
    </ul>
    <div class="callout"><strong data-sr="Korisnik klikće na dugme za instalaciju proširenja.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Korisnik klikće na dugme za instalaciju proširenja." data-en="The user clicks the extension install button.">Korisnik klikće na dugme za instalaciju proširenja.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 2 — Instalacija i odobravanje dozvola" data-en="Phase 2 — Installation and permission approval">Faza 2 — Instalacija i odobravanje dozvola</h3>
    <p data-sr="Browser prikazuje listu dozvola koje proširenje traži. Najopasnija je dozvola pristupa svim stranicama ali korisnici je rutinski prihvataju jer je standardna za mnoga proširenja." data-en="The browser displays the list of permissions the extension requests. The most dangerous is access to all pages permission but users routinely accept it because it is standard for many extensions.">Browser prikazuje listu dozvola koje proširenje traži. Najopasnija je dozvola pristupa svim stranicama ali korisnici je rutinski prihvataju jer je standardna za mnoga proširenja.</p>
    <ul class="bullets">
      <li data-sr="Proširenje odmah počinje da funkcioniše i pokazuje korisnu funkciju koja smanjuje sumnju." data-en="The extension immediately starts functioning and shows the useful feature that reduces suspicion.">Proširenje odmah počinje da funkcioniše i pokazuje korisnu funkciju koja smanjuje sumnju.</li>
      <li data-sr="Maliciozni kod se aktivira tiho u pozadini paralelno sa korisnom funkcijom." data-en="Malicious code activates silently in the background in parallel with the useful function.">Maliciozni kod se aktivira tiho u pozadini paralelno sa korisnom funkcijom.</li>
      <li data-sr="Korisnik ne vidi nikakav indikator da se nešto sumnjivo dešava u pozadini." data-en="The user sees no indicator that anything suspicious is happening in the background.">Korisnik ne vidi nikakav indikator da se nešto sumnjivo dešava u pozadini.</li>
    </ul>
    <div class="callout"><strong data-sr="Dozvola je odobrena — proširenje ima pristup svim otvorenim stranicama u realnom vremenu.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Dozvola je odobrena — proširenje ima pristup svim otvorenim stranicama u realnom vremenu." data-en="Permission is granted — the extension has access to all open pages in real time.">Dozvola je odobrena — proširenje ima pristup svim otvorenim stranicama u realnom vremenu.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching at this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="account-takeover.html" data-sr="Preuzimanje naloga — ukradeni sesijski kolačići daju direktan pristup." data-en="Account takeover — stolen session cookies provide direct access.">Preuzimanje naloga — ukradeni sesijski kolačići daju direktan pristup.</a></li>
        <li><a href="payment-link-scam.html" data-sr="Payment link scam — proširenje može da menja prikazane platne podatke." data-en="Payment link scam — the extension can modify displayed payment data.">Payment link scam — proširenje može da menja prikazane platne podatke.</a></li>
      </ul>
    </div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 3 — Aktivna eksfiltracija podataka" data-en="Phase 3 — Active data exfiltration">Faza 3 — Aktivna eksfiltracija podataka</h3>
    <p data-sr="Proširenje čita sadržaj svih otvorenih stranica i šalje prikupljene podatke napadaču. Posebno ciljane stranice su bankarski portali, imejl klijenti i platni sistemi." data-en="The extension reads the content of all open pages and sends collected data to the attacker. Specifically targeted pages are banking portals, email clients and payment systems.">Proširenje čita sadržaj svih otvorenih stranica i šalje prikupljene podatke napadaču. Posebno ciljane stranice su bankarski portali, imejl klijenti i platni sistemi.</p>
    <ul class="bullets">
      <li data-sr="Sesijski kolačići bankarskog portala se šalju napadaču koji ih koristi za pristup bez lozinke." data-en="Banking portal session cookies are sent to the attacker who uses them for access without a password.">Sesijski kolačići bankarskog portala se šalju napadaču koji ih koristi za pristup bez lozinke.</li>
      <li data-sr="Svaki unos u forme na bankarskim ili platnim stranicama se snima i prosleđuje u realnom vremenu." data-en="Every input into forms on banking or payment pages is recorded and forwarded in real time.">Svaki unos u forme na bankarskim ili platnim stranicama se snima i prosleđuje u realnom vremenu.</li>
      <li data-sr="Proširenje može da menja IBAN ili platne podatke na stranici pre nego što korisnik potvrdi transakciju." data-en="The extension can modify IBAN or payment data on the page before the user confirms the transaction.">Proširenje može da menja IBAN ili platne podatke na stranici pre nego što korisnik potvrdi transakciju.</li>
    </ul>
    <div class="callout"><strong data-sr="Napadač ima sesijski token bankarskog naloga ili kompletne kredencijale za prijavu.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Napadač ima sesijski token bankarskog naloga ili kompletne kredencijale za prijavu." data-en="The attacker has the banking account session token or complete login credentials.">Napadač ima sesijski token bankarskog naloga ili kompletne kredencijale za prijavu.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 4 — Preuzimanje naloga ili finansijska šteta" data-en="Phase 4 — Account takeover or financial damage">Faza 4 — Preuzimanje naloga ili finansijska šteta</h3>
    <p data-sr="Napadač koristi ukradene podatke da preuzme naloge ili inicira transfere. U slučaju modifikacije platnih podataka, korisnik sam potvrđuje transfer na napadačev nalog misleći da plaća legitimnom primaocu." data-en="The attacker uses stolen data to take over accounts or initiate transfers. In case of payment data modification the user themselves confirms the transfer to the attacker's account thinking they are paying a legitimate recipient.">Napadač koristi ukradene podatke da preuzme naloge ili inicira transfere. U slučaju modifikacije platnih podataka, korisnik sam potvrđuje transfer na napadačev nalog misleći da plaća legitimnom primaocu.</p>
    <ul class="bullets">
      <li data-sr="Korisnik vidi tačan IBAN na ekranu ali proširenje ga je zamenilo napadačevim IBAN-om u formi." data-en="The user sees the correct IBAN on screen but the extension has replaced it with the attacker's IBAN in the form.">Korisnik vidi tačan IBAN na ekranu ali proširenje ga je zamenilo napadačevim IBAN-om u formi.</li>
      <li data-sr="Transferi su inicirani brzo na kratkoročne naloge koji odmah prosleđuju sredstva dalje." data-en="Transfers are initiated quickly to short-term accounts that immediately forward funds further.">Transferi su inicirani brzo na kratkoročne naloge koji odmah prosleđuju sredstva dalje.</li>
      <li data-sr="Recovery podaci na finansijskim nalozima se menjaju da bi se sprečio povratak pristupa." data-en="Recovery data on financial accounts is changed to prevent access recovery.">Recovery podaci na finansijskim nalozima se menjaju da bi se sprečio povratak pristupa.</li>
    </ul>
    <div class="callout"><strong data-sr="Korisnik prima SMS od banke o neuobičajenim transakcijama ili ne može da se prijavi na nalog.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Korisnik prima SMS od banke o neuobičajenim transakcijama ili ne može da se prijavi na nalog." data-en="The user receives an SMS from the bank about unusual transactions or cannot log into the account.">Korisnik prima SMS od banke o neuobičajenim transakcijama ili ne može da se prijavi na nalog.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 5 — Otkrivanje i reakcija" data-en="Phase 5 — Discovery and reaction">Faza 5 — Otkrivanje i reakcija</h3>
    <p data-sr="Korisnik shvata da se nešto desilo — ili direktno kroz obaveštenje o transakciji, ili jer ne može da se prijavi, ili jer kontakt prijavljuje sumnjive poruke." data-en="The user realizes something happened — either directly through a transaction notification, or because they cannot log in, or because a contact reports suspicious messages.">Korisnik shvata da se nešto desilo — ili direktno kroz obaveštenje o transakciji, ili jer ne može da se prijavi, ili jer kontakt prijavljuje sumnjive poruke.</p>
    <ul class="bullets">
      <li data-sr="Korisnik ne zna koji je uzrok problema jer proširenje nastavlja da izgleda legitimno." data-en="The user does not know what caused the problem because the extension continues to look legitimate.">Korisnik ne zna koji je uzrok problema jer proširenje nastavlja da izgleda legitimno.</li>
      <li data-sr="Banka identifikuje neuobičajene transakcije i blokira nalog ili karticu." data-en="The bank identifies unusual transactions and blocks the account or card.">Banka identifikuje neuobičajene transakcije i blokira nalog ili karticu.</li>
      <li data-sr="Veza između instaliranog proširenja i incidenta se utvrđuje tek posle detaljnije istrage." data-en="The connection between the installed extension and the incident is established only after a more detailed investigation.">Veza između instaliranog proširenja i incidenta se utvrđuje tek posle detaljnije istrage.</li>
    </ul>
    <div class="callout"><strong data-sr="Korisnik identifikuje sumnjivo proširenje i uklanja ga iz browser-a.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Korisnik identifikuje sumnjivo proširenje i uklanja ga iz browser-a." data-en="The user identifies the suspicious extension and removes it from the browser.">Korisnik identifikuje sumnjivo proširenje i uklanja ga iz browser-a.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 6 — Uklanjanje i oporavak" data-en="Phase 6 — Removal and recovery">Faza 6 — Uklanjanje i oporavak</h3>
    <p data-sr="Korisnik uklanja proširenje i menja sve lozinke. Browser sesije se odjavljuju sa svih uređaja i aktivira se 2FA gde nije bila." data-en="The user removes the extension and changes all passwords. Browser sessions are logged out on all devices and 2FA is activated where it was not.">Korisnik uklanja proširenje i menja sve lozinke. Browser sesije se odjavljuju sa svih uređaja i aktivira se 2FA gde nije bila.</p>
    <ul class="bullets">
      <li data-sr="Sesijski kolačići prestaju da važe posle odjave sa svih uređaja što nevalidira ukradene kolačiće." data-en="Session cookies become invalid after signing out from all devices which invalidates stolen cookies.">Sesijski kolačići prestaju da važe posle odjave sa svih uređaja što nevalidira ukradene kolačiće.</li>
      <li data-sr="Pregled svih instaliranih proširenja i uklanjanje onih sa prekomjernim dozvolama ili nepoznatim izdavačem." data-en="Review of all installed extensions and removal of those with excessive permissions or unknown publishers.">Pregled svih instaliranih proširenja i uklanjanje onih sa prekomjernim dozvolama ili nepoznatim izdavačem.</li>
      <li data-sr="Aktivno praćenje bankovnih izvoda narednih mesec dana za eventualne zakašnjele transakcije." data-en="Active monitoring of bank statements for the next month for any delayed transactions.">Aktivno praćenje bankovnih izvoda narednih mesec dana za eventualne zakašnjele transakcije.</li>
    </ul>
    <div class="callout"><strong data-sr="Proširenje je uklonjeno, sve lozinke su promenjene i 2FA je aktivno na svim nalozima.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Proširenje je uklonjeno, sve lozinke su promenjene i 2FA je aktivno na svim nalozima." data-en="The extension is removed, all passwords are changed and 2FA is active on all accounts.">Proširenje je uklonjeno, sve lozinke su promenjene i 2FA je aktivno na svim nalozima.</span></div>
  </article>
</section>

<section class="content-section">
  <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
  <ul class="bullets">
    <li data-sr="Proširenje traži dozvolu za čitanje i izmenu podataka na svim veb sajtovima bez jasnog razloga za svoju funkciju." data-en="The extension requests permission to read and modify data on all websites without a clear reason for its function.">Proširenje traži dozvolu za čitanje i izmenu podataka na svim veb sajtovima bez jasnog razloga za svoju funkciju.</li>
    <li data-sr="Link za instalaciju ne vodi na zvaničnu Chrome Web Store ili Firefox Add-ons stranicu." data-en="The installation link does not lead to the official Chrome Web Store or Firefox Add-ons page.">Link za instalaciju ne vodi na zvaničnu Chrome Web Store ili Firefox Add-ons stranicu.</li>
    <li data-sr="Ime proširenja je gotovo identično popularnom proširenju uz sitnu razliku u pisanju." data-en="The extension name is almost identical to a popular extension with a minor spelling difference.">Ime proširenja je gotovo identično popularnom proširenju uz sitnu razliku u pisanju.</li>
    <li data-sr="Neovlašćene transakcije pojavljuju se kratko posle instalacije novog proširenja." data-en="Unauthorized transactions appear shortly after installing a new extension.">Neovlašćene transakcije pojavljuju se kratko posle instalacije novog proširenja.</li>
    <li data-sr="Korisnik ne može da se prijavi na nalog jer su recovery podaci promenjeni." data-en="The user cannot log into the account because recovery data has been changed.">Korisnik ne može da se prijavi na nalog jer su recovery podaci promenjeni.</li>
    <li data-sr="Browser postaje sporiji ili troši više memorije posle instalacije proširenja." data-en="The browser becomes slower or uses more memory after installing the extension.">Browser postaje sporiji ili troši više memorije posle instalacije proširenja.</li>
    <li data-sr="Transakcija je otišlažna drugi IBAN od onog koji je bio prikazan na ekranu." data-en="A transaction went to a different IBAN from the one displayed on screen.">Transakcija je otišlažna drugi IBAN od onog koji je bio prikazan na ekranu.</li>
    <li data-sr="Proširenje je dobilo update koji je promenio listu traženih dozvola." data-en="The extension received an update that changed the list of requested permissions.">Proširenje je dobilo update koji je promenio listu traženih dozvola.</li>
    <li data-sr="Proširenje ima malo recenzija ali sve su petice pisane istim stilom." data-en="The extension has few reviews but all are five stars written in the same style.">Proširenje ima malo recenzija ali sve su petice pisane istim stilom.</li>
    <li data-sr="Izdavač proširenja je nepoznata kompanija ili privatna osoba bez vidljive istorije." data-en="The extension publisher is an unknown company or private individual without a visible history.">Izdavač proširenja je nepoznata kompanija ili privatna osoba bez vidljive istorije.</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Provere: 8 brzih provera pre instalacije browser proširenja" data-en="Checks: 8 quick checks before installing a browser extension">Provere: 8 brzih provera pre instalacije browser proširenja</h2>
  <ol class="steps">
    <li data-sr="Instaliraj proširenja isključivo sa zvanične Chrome Web Store ili Firefox Add-ons stranice — nikad sa direktnih linkova." data-en="Install extensions exclusively from the official Chrome Web Store or Firefox Add-ons page — never from direct links.">Instaliraj proširenja isključivo sa zvanične Chrome Web Store ili Firefox Add-ons stranice — nikad sa direktnih linkova.</li>
    <li data-sr="Proveri listu traženih dozvola pre instalacije i odbaci proširenje koje traži pristup svim stranicama bez jasnog razloga." data-en="Check the list of requested permissions before installation and reject an extension that requests access to all pages without a clear reason.">Proveri listu traženih dozvola pre instalacije i odbaci proširenje koje traži pristup svim stranicama bez jasnog razloga.</li>
    <li data-sr="Proveri ime izdavača i proveri da li postoji zvanični sajt kompanije koja ga je razvila." data-en="Check the publisher name and verify that the official website of the company that developed it exists.">Proveri ime izdavača i proveri da li postoji zvanični sajt kompanije koja ga je razvila.</li>
    <li data-sr="Pročitaj recenzije pažljivo — ako su sve identičnog stila i bez kritike, to je signal za oprez." data-en="Read reviews carefully — if all are the same style and without criticism that is a signal for caution.">Pročitaj recenzije pažljivo — ako su sve identičnog stila i bez kritike, to je signal za oprez.</li>
    <li data-sr="Redovno pregledaj listu instaliranih proširenja i ukloni ona sa prekomjernim dozvolama ili koja ne koristiš." data-en="Regularly review the list of installed extensions and remove those with excessive permissions or that you do not use.">Redovno pregledaj listu instaliranih proširenja i ukloni ona sa prekomjernim dozvolama ili koja ne koristiš.</li>
    <li data-sr="Aktiviraj 2FA na svim finansijskim i imejl nalozima — ukradeni kolačić ne prolazi 2FA na novom uređaju." data-en="Activate 2FA on all financial and email accounts — a stolen cookie does not pass 2FA on a new device.">Aktiviraj 2FA na svim finansijskim i imejl nalozima — ukradeni kolačić ne prolazi 2FA na novom uređaju.</li>
    <li data-sr="Redovno se odjavljivaj sa finansijskih portala posle upotrebe — to skraćuje vreme tokom kojeg su kolačići aktivni." data-en="Regularly log out from financial portals after use — this shortens the time during which cookies are active.">Redovno se odjavljivaj sa finansijskih portala posle upotrebe — to skraćuje vreme tokom kojeg su kolačići aktivni.</li>
    <li data-sr="Pre svake veće finansijske transakcije proveri IBAN na više mesta i pošalji mali test iznos." data-en="Before any major financial transaction check the IBAN in multiple places and send a small test amount.">Pre svake veće finansijske transakcije proveri IBAN na više mesta i pošalji mali test iznos.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Checklista: pitanja pre instalacije browser proširenja" data-en="Checklist: questions before installing a browser extension">Checklista: pitanja pre instalacije browser proširenja</h2>
  <ul class="bullets">
    <li data-sr="Da li link za instalaciju vodi na zvaničnu Chrome Web Store ili Firefox Add-ons stranicu?" data-en="Does the installation link lead to the official Chrome Web Store or Firefox Add-ons page?">Da li link za instalaciju vodi na zvaničnu Chrome Web Store ili Firefox Add-ons stranicu?</li>
    <li data-sr="Da li proširenje traži dozvolu za čitanje i izmenu podataka na svim veb sajtovima?" data-en="Does the extension request permission to read and modify data on all websites?">Da li proširenje traži dozvolu za čitanje i izmenu podataka na svim veb sajtovima?</li>
    <li data-sr="Da li je tražena dozvola logična za svrhu proširenja?" data-en="Is the requested permission logical for the extension's purpose?">Da li je tražena dozvola logična za svrhu proširenja?</li>
    <li data-sr="Da li je izdavač poznata kompanija sa zvaničnim sajtom i istorijom razvoja proširenja?" data-en="Is the publisher a known company with an official website and extension development history?">Da li je izdavač poznata kompanija sa zvaničnim sajtom i istorijom razvoja proširenja?</li>
    <li data-sr="Da li su recenzije raznolike i prirodne, ili sve izgledaju identično i neprirodno hvale proširenje?" data-en="Are the reviews diverse and natural or do they all look identical and unnaturally praise the extension?">Da li su recenzije raznolike i prirodne, ili sve izgledaju identično i neprirodno hvale proširenje?</li>
    <li data-sr="Da li je ovo proširenje preporučeno kroz neočekivanu poruku, oglas ili direktan link?" data-en="Was this extension recommended through an unexpected message, ad or direct link?">Da li je ovo proširenje preporučeno kroz neočekivanu poruku, oglas ili direktan link?</li>
    <li data-sr="Da li imam aktivan 2FA na svim finansijskim i imejl nalozima?" data-en="Do I have active 2FA on all financial and email accounts?">Da li imam aktivan 2FA na svim finansijskim i imejl nalozima?</li>
    <li data-sr="Da li redovno proverim listu instaliranih proširenja i uklonim ona koja ne koristim?" data-en="Do I regularly review the list of installed extensions and remove those I do not use?">Da li redovno proverim listu instaliranih proširenja i uklonim ona koja ne koristim?</li>
    <li data-sr="Da li se posle poslednje instalacije proširenja pojavile neovlašćene transakcije?" data-en="Have unauthorized transactions appeared after the last extension installation?">Da li se posle poslednje instalacije proširenja pojavile neovlašćene transakcije?</li>
    <li data-sr="Da li je proširenje nedavno dobilo update koji je promenio listu dozvola?" data-en="Has the extension recently received an update that changed the permissions list?">Da li je proširenje nedavno dobilo update koji je promenio listu dozvola?</li>
    <li data-sr="Da li koristim zasebne browser profile za finansijske aktivnosti i svakodnevno pretraživanje?" data-en="Do I use separate browser profiles for financial activities and everyday browsing?">Da li koristim zasebne browser profile za finansijske aktivnosti i svakodnevno pretraživanje?</li>
    <li data-sr="Da li se odjavim sa finansijskih portala posle svake upotrebe, a ne samo zatvaram tab?" data-en="Do I log out from financial portals after each use, not just close the tab?">Da li se odjavim sa finansijskih portala posle svake upotrebe, a ne samo zatvaram tab?</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
  <ol class="steps">
    <li data-sr="Odmah kontaktiraj banku i zamrzni sve finansijske naloge i kartice." data-en="Immediately contact the bank and freeze all financial accounts and cards.">Odmah kontaktiraj banku i zamrzni sve finansijske naloge i kartice.</li>
    <li data-sr="Odjavi se sa svih naloga u browser-u i obriši sve kolačiće i podatke sesije." data-en="Log out from all accounts in the browser and clear all cookies and session data.">Odjavi se sa svih naloga u browser-u i obriši sve kolačiće i podatke sesije.</li>
    <li data-sr="Pregledaj listu instaliranih proširenja i ukloni sve sumnjive ili neprepoznate." data-en="Review the list of installed extensions and remove all suspicious or unrecognized ones.">Pregledaj listu instaliranih proširenja i ukloni sve sumnjive ili neprepoznate.</li>
    <li data-sr="Promeni sve lozinke sa čistog uređaja ili browser profila bez sumnjivih proširenja." data-en="Change all passwords from a clean device or browser profile without suspicious extensions.">Promeni sve lozinke sa čistog uređaja ili browser profila bez sumnjivih proširenja.</li>
    <li data-sr="Aktiviraj ili resetuj 2FA na svim nalozima." data-en="Activate or reset 2FA on all accounts.">Aktiviraj ili resetuj 2FA na svim nalozima.</li>
    <li data-sr="Prijavi incident policiji sa dokumentacijom neovlašćenih transakcija." data-en="Report the incident to police with documentation of unauthorized transactions.">Prijavi incident policiji sa dokumentacijom neovlašćenih transakcija.</li>
    <li data-sr="Aktivno prati bankovne izvode narednih mesec dana za eventualne zakašnjele transakcije." data-en="Actively monitor bank statements for the next month for any delayed transactions.">Aktivno prati bankovne izvode narednih mesec dana za eventualne zakašnjele transakcije.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
  <ul class="bullets">
    <li data-sr="Da li su instalirali novo browser proširenje pre nego što su se pojavile neovlašćene transakcije?" data-en="Did they install a new browser extension before unauthorized transactions appeared?">Da li su instalirali novo browser proširenje pre nego što su se pojavile neovlašćene transakcije?</li>
    <li data-sr="Da li je proširenje tražilo dozvolu za čitanje i izmenu podataka na svim stranicama?" data-en="Did the extension request permission to read and modify data on all pages?">Da li je proširenje tražilo dozvolu za čitanje i izmenu podataka na svim stranicama?</li>
    <li data-sr="Da li je transakcija otišlažna IBAN koji je bio drugačiji od onog koji je video na ekranu?" data-en="Did a transaction go to an IBAN that was different from the one they saw on screen?">Da li je transakcija otišlažna IBAN koji je bio drugačiji od onog koji je video na ekranu?</li>
    <li data-sr="Da li se mogu setiti kada su poslednji put instalirali ili ažurirali neko proširenje?" data-en="Can they remember when they last installed or updated an extension?">Da li se mogu setiti kada su poslednji put instalirali ili ažurirali neko proširenje?</li>
  </ul>
  <p data-sr="Rečenice koje rade:" data-en="Sentences that help:">Rečenice koje rade:</p>
  <ul class="bullets">
    <li data-sr="Hajde da odmah pozovemo banku i zamrznemo nalog — to je prioritet pre svega drugog." data-en="Let us call the bank immediately and freeze the account — that is the priority before everything else.">Hajde da odmah pozovemo banku i zamrznemo nalog — to je prioritet pre svega drugog.</li>
    <li data-sr="Treba da se odjaviš sa svih naloga u browser-u i obrišeš kolačiće — to poništava ukradene sesije." data-en="You need to log out from all accounts in the browser and clear cookies — that invalidates stolen sessions.">Treba da se odjaviš sa svih naloga u browser-u i obrišeš kolačiće — to poništava ukradene sesije.</li>
    <li data-sr="Lozinke menjaj samo u čistom browser profilu bez proširenja, ili sa drugog uređaja." data-en="Change passwords only in a clean browser profile without extensions, or from a different device.">Lozinke menjaj samo u čistom browser profilu bez proširenja, ili sa drugog uređaja.</li>
    <li data-sr="Pregledaj sva instalirana proširenja i ukloni sve čiji izdavač ne prepoznaješ ili koja ne koristiš." data-en="Review all installed extensions and remove all whose publisher you do not recognize or that you do not use.">Pregledaj sva instalirana proširenja i ukloni sve čiji izdavač ne prepoznaješ ili koja ne koristiš.</li>
  </ul>
</section>


`
};
