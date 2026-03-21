if (!window.SCAM_CONTENT) window.SCAM_CONTENT = {};
window.SCAM_CONTENT["app-clone-scam"] = {
  raw_html: `
<section class="content-section">
  <h2 data-sr="Uvod: kako radi prevara sa klonom aplikacije" data-en="Introduction: how the app clone scam works">Uvod: kako radi prevara sa klonom aplikacije</h2>
  <p data-sr="Napadač preuzima zvaničnu aplikaciju, dodaje joj maliciozni kod i redistribuira je kroz lažne prodavnice, oglase ili direktne linkove. Klon izgleda identično originalu — isti logo, isti naziv, isti dizajn interfejsa. Razlika je jedino u kodu koji se izvršava u pozadini." data-en="The attacker takes an official app, adds malicious code to it and redistributes it through fake stores, ads or direct links. The clone looks identical to the original — same logo, same name, same interface design. The only difference is in the code running in the background.">Napadač preuzima zvaničnu aplikaciju, dodaje joj maliciozni kod i redistribuira je kroz lažne prodavnice, oglase ili direktne linkove. Klon izgleda identično originalu — isti logo, isti naziv, isti dizajn interfejsa. Razlika je jedino u kodu koji se izvršava u pozadini.</p>
  <p data-sr="Klon aplikacije je najopasnija varijanta jer korisnik nije svestan da koristi lažnu verziju. Sve funkcije rade normalno — žrtva se prijavljuje, obavlja transakcije, koristi servis. U međuvremenu klon šalje sve kredencijale, sesijske tokene i OTP kodove napadaču." data-en="App cloning is the most dangerous variant because the user does not realize they are using a fake version. All functions work normally — the victim logs in, makes transactions, uses the service. Meanwhile the clone sends all credentials, session tokens and OTP codes to the attacker.">Klon aplikacije je najopasnija varijanta jer korisnik nije svestan da koristi lažnu verziju. Sve funkcije rade normalno — žrtva se prijavljuje, obavlja transakcije, koristi servis. U međuvremenu klon šalje sve kredencijale, sesijske tokene i OTP kodove napadaču.</p>
</section>

<section class="content-section">
  <h2 data-sr="Model" data-en="Model">Model</h2>
  <div class="phase">
    <div class="label" data-sr="Lanac" data-en="Chain">Lanac</div>
    <p data-sr="Oglas/poruka → lažna prodavnica → preuzimanje klona → prijava → krađa kredencijala → pasivni pristup svim transakcijama → preuzimanje naloga" data-en="Ad/message → fake store → clone download → login → credential theft → passive access to all transactions → account takeover">Oglas/poruka → lažna prodavnica → preuzimanje klona → prijava → krađa kredencijala → pasivni pristup svim transakcijama → preuzimanje naloga</p>
  </div>
  <div class="callout">
    <strong data-sr="Prag:" data-en="Threshold:">Prag:</strong>
    <span data-sr="Prva prijava u klon aplikaciji. Napadač odmah dobija korisničko ime, lozinku i sesijski token." data-en="First login in the clone app. The attacker immediately receives the username, password and session token.">Prva prijava u klon aplikaciji. Napadač odmah dobija korisničko ime, lozinku i sesijski token.</span>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Kako generalno radi: mehanika" data-en="How it works: mechanics">Kako generalno radi: mehanika</h2>
  <div class="grid-2">
    <div class="phase">
      <div class="label" data-sr="Šta gradi uverljivost" data-en="What builds credibility">Šta gradi uverljivost</div>
      <ul class="bullets">
        <li data-sr="Klon je vizuelno nerazlučiv od originala — isti ikona, naziv i interfejs." data-en="The clone is visually indistinguishable from the original — same icon, name and interface.">Klon je vizuelno nerazlučiv od originala — isti ikona, naziv i interfejs.</li>
        <li data-sr="Sve funkcionalnosti rade — korisnik prima potvrde, vidi stanja naloga, obavlja transakcije." data-en="All functions work — the user receives confirmations, sees account balances, makes transactions.">Sve funkcionalnosti rade — korisnik prima potvrde, vidi stanja naloga, obavlja transakcije.</li>
        <li data-sr="Lažne recenzije u neregulisanim prodavnicama daju lažni kredibilitet aplikaciji." data-en="Fake reviews in unregulated stores give false credibility to the app.">Lažne recenzije u neregulisanim prodavnicama daju lažni kredibilitet aplikaciji.</li>
        <li data-sr="Napadač često ažurira klon u skladu sa zvaničnim ažuriranjima originala kako bi ostao neprimetiv." data-en="The attacker often updates the clone in sync with official updates of the original to stay undetected.">Napadač često ažurira klon u skladu sa zvaničnim ažuriranjima originala kako bi ostao neprimetiv.</li>
      </ul>
    </div>
    <div class="phase">
      <div class="label" data-sr="Kako se uvodi radnja" data-en="How the action is introduced">Kako se uvodi radnja</div>
      <ul class="bullets">
        <li data-sr="Klon presreće sve prijave i šalje kredencijale na server napadača pre nego što ih prosledi originalu." data-en="The clone intercepts all logins and sends credentials to the attacker's server before forwarding them to the original.">Klon presreće sve prijave i šalje kredencijale na server napadača pre nego što ih prosledi originalu.</li>
        <li data-sr="Man-in-the-middle arhitektura klona prosleđuje korisničke zahteve originalnoj aplikaciji da bi sve izgledalo normalno." data-en="The clone's man-in-the-middle architecture forwards user requests to the original app so everything looks normal.">Man-in-the-middle arhitektura klona prosleđuje korisničke zahteve originalnoj aplikaciji da bi sve izgledalo normalno.</li>
        <li data-sr="OTP kodovi koji stignu kao SMS se odmah prosleđuju napadaču zajedno sa prijavom." data-en="OTP codes that arrive as SMS are immediately forwarded to the attacker along with the login.">OTP kodovi koji stignu kao SMS se odmah prosleđuju napadaču zajedno sa prijavom.</li>
        <li data-sr="Napadač koristi ukradenu sesiju u realnom vremenu dok korisnik normalno koristi klon." data-en="The attacker uses the stolen session in real time while the user normally uses the clone.">Napadač koristi ukradenu sesiju u realnom vremenu dok korisnik normalno koristi klon.</li>
      </ul>
    </div>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Hronološki tok (faze + evolucije)" data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

  <article class="phase">
    <h3 data-sr="Faza 1 — Distribucija klona" data-en="Phase 1 — Clone distribution">Faza 1 — Distribucija klona</h3>
    <p data-sr="Napadač plasira klon kroz lažne prodavnice aplikacija, oglase na društvenim mrežama ili direktne poruke. Korisnik veruje da preuzima zvaničnu verziju." data-en="The attacker places the clone through fake app stores, social media ads or direct messages. The user believes they are downloading the official version.">Napadač plasira klon kroz lažne prodavnice aplikacija, oglase na društvenim mrežama ili direktne poruke. Korisnik veruje da preuzima zvaničnu verziju.</p>
    <ul class="bullets">
      <li data-sr="Oglas imitira zvanično obaveštenje o novoj verziji aplikacije sa linkom koji ne vodi na Google Play." data-en="The ad imitates an official notification about a new app version with a link that does not lead to Google Play.">Oglas imitira zvanično obaveštenje o novoj verziji aplikacije sa linkom koji ne vodi na Google Play.</li>
      <li data-sr="Fišing imejl od banke ili servisa traži preuzimanje bezbednosnog ažuriranja." data-en="A phishing email from the bank or service requests downloading a security update.">Fišing imejl od banke ili servisa traži preuzimanje bezbednosnog ažuriranja.</li>
      <li data-sr="Lažna prodavnica ima gotovo isti URL kao zvanična uz sitnu razliku u domenu." data-en="The fake store has almost the same URL as the official one with a minor difference in the domain.">Lažna prodavnica ima gotovo isti URL kao zvanična uz sitnu razliku u domenu.</li>
    </ul>
    <div class="callout"><strong data-sr="Korisnik preuzima APK iz trećeg izvora i odobrava instalaciju iz nepoznatih izvora.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Korisnik preuzima APK iz trećeg izvora i odobrava instalaciju iz nepoznatih izvora." data-en="The user downloads an APK from a third-party source and approves installation from unknown sources.">Korisnik preuzima APK iz trećeg izvora i odobrava instalaciju iz nepoznatih izvora.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 2 — Instalacija i zamena originala" data-en="Phase 2 — Installation and replacement of original">Faza 2 — Instalacija i zamena originala</h3>
    <p data-sr="Klon se instalira paralelno sa originalom ili ga zamenjuje. Korisnik ne primećuje razliku jer je interfejs identičan." data-en="The clone installs alongside the original or replaces it. The user does not notice the difference because the interface is identical.">Klon se instalira paralelno sa originalom ili ga zamenjuje. Korisnik ne primećuje razliku jer je interfejs identičan.</p>
    <ul class="bullets">
      <li data-sr="Klon traži dozvole identične originalnoj aplikaciji bez ikakvih dodatnih zahteva." data-en="The clone requests permissions identical to the original app without any additional requests.">Klon traži dozvole identične originalnoj aplikaciji bez ikakvih dodatnih zahteva.</li>
      <li data-sr="Instalacija je brza i bez grešaka što pojačava osećaj legitimnosti." data-en="Installation is fast and error-free which reinforces the feeling of legitimacy.">Instalacija je brza i bez grešaka što pojačava osećaj legitimnosti.</li>
      <li data-sr="Korisnik se bez oklijevanja prijavljuje kao i uvek jer sve izgleda poznato." data-en="The user logs in without hesitation as usual because everything looks familiar.">Korisnik se bez oklijevanja prijavljuje kao i uvek jer sve izgleda poznato.</li>
    </ul>
    <div class="callout"><strong data-sr="Klon je instaliran i korisnik ga smatra zvaničnom aplikacijom.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Klon je instaliran i korisnik ga smatra zvaničnom aplikacijom." data-en="The clone is installed and the user considers it the official app.">Klon je instaliran i korisnik ga smatra zvaničnom aplikacijom.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 3 — Prva prijava i krađa kredencijala" data-en="Phase 3 — First login and credential theft">Faza 3 — Prva prijava i krađa kredencijala</h3>
    <p data-sr="Korisnik se prijavljuje u klon aplikaciju unoseći pravo korisničko ime i lozinku. Klon šalje ove podatke napadaču i istovremeno ih prosleđuje originalnoj aplikaciji da bi prijava izgledala uspešno." data-en="The user logs into the clone app entering their real username and password. The clone sends this data to the attacker and simultaneously forwards it to the original app so the login looks successful.">Korisnik se prijavljuje u klon aplikaciju unoseći pravo korisničko ime i lozinku. Klon šalje ove podatke napadaču i istovremeno ih prosleđuje originalnoj aplikaciji da bi prijava izgledala uspešno.</p>
    <ul class="bullets">
      <li data-sr="Napadač u realnom vremenu vidi korisničko ime, lozinku i sesijski token." data-en="The attacker sees in real time the username, password and session token.">Napadač u realnom vremenu vidi korisničko ime, lozinku i sesijski token.</li>
      <li data-sr="Ako je uključena 2FA, klon presreće OTP kod koji stiže na SMS i prosleđuje napadaču." data-en="If 2FA is enabled the clone intercepts the OTP code that arrives via SMS and forwards it to the attacker.">Ako je uključena 2FA, klon presreće OTP kod koji stiže na SMS i prosleđuje napadaču.</li>
      <li data-sr="Korisnik vidi normalan ekran i veruje da je uspešno prijavljen." data-en="The user sees the normal screen and believes they logged in successfully.">Korisnik vidi normalan ekran i veruje da je uspešno prijavljen.</li>
    </ul>
    <div class="callout"><strong data-sr="Napadač ima potpune kredencijale i aktivnu sesiju za finansijske naloge žrtve.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Napadač ima potpune kredencijale i aktivnu sesiju za finansijske naloge žrtve." data-en="The attacker has complete credentials and an active session for the victim's financial accounts.">Napadač ima potpune kredencijale i aktivnu sesiju za finansijske naloge žrtve.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching at this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="account-takeover.html" data-sr="Preuzimanje naloga — sesijski token odmah aktivira ATO." data-en="Account takeover — session token immediately enables ATO.">Preuzimanje naloga — sesijski token odmah aktivira ATO.</a></li>
        <li><a href="malicious-app-scam.html" data-sr="Zlonamerna aplikacija — klon može imati i dodatni malver pored MITM-a." data-en="Malicious app — the clone may also have additional malware beyond MITM.">Zlonamerna aplikacija — klon može imati i dodatni malver pored MITM-a.</a></li>
      </ul>
    </div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 4 — Aktivna eksploatacija sesije" data-en="Phase 4 — Active session exploitation">Faza 4 — Aktivna eksploatacija sesije</h3>
    <p data-sr="Napadač koristi ukradenu sesiju da proveri stanje naloga, inicira transfere ili prikuplja dodatne podatke. Sve se dešava dok korisnik normalno koristi klon misleći da radi sa zvaničnom aplikacijom." data-en="The attacker uses the stolen session to check account balance, initiate transfers or collect additional data. All this happens while the user normally uses the clone believing it is the official app.">Napadač koristi ukradenu sesiju da proveri stanje naloga, inicira transfere ili prikuplja dodatne podatke. Sve se dešava dok korisnik normalno koristi klon misleći da radi sa zvaničnom aplikacijom.</p>
    <ul class="bullets">
      <li data-sr="Transferi se iniciraju na kratkoročne naloge koji odmah prosleđuju sredstva dalje." data-en="Transfers are initiated to short-term accounts that immediately forward funds further.">Transferi se iniciraju na kratkoročne naloge koji odmah prosleđuju sredstva dalje.</li>
      <li data-sr="Recovery imejl i broj telefona se menjaju da bi se sprečio povratak pristupa." data-en="Recovery email and phone number are changed to prevent access recovery.">Recovery imejl i broj telefona se menjaju da bi se sprečio povratak pristupa.</li>
      <li data-sr="Napadač može da preuzme i ostale naloge putem zaboravili ste lozinku na preuzeti imejl." data-en="The attacker can take over other accounts through forgot-password on the taken-over email.">Napadač može da preuzme i ostale naloge putem zaboravili ste lozinku na preuzeti imejl.</li>
    </ul>
    <div class="callout"><strong data-sr="Žrtva pokušava da se prijavi i ne uspeva jer su recovery podaci promenjeni.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Žrtva pokušava da se prijavi i ne uspeva jer su recovery podaci promenjeni." data-en="The victim tries to log in and fails because recovery data has been changed.">Žrtva pokušava da se prijavi i ne uspeva jer su recovery podaci promenjeni.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 5 — Otkrivanje i reakcija" data-en="Phase 5 — Discovery and reaction">Faza 5 — Otkrivanje i reakcija</h3>
    <p data-sr="Žrtva prima SMS ili imejl od banke o neovlašćenim transakcijama ili ne može da se prijavi. U ovom trenutku napadač je već završio prenos sredstava." data-en="The victim receives an SMS or email from the bank about unauthorized transactions or cannot log in. At this point the attacker has already completed the funds transfer.">Žrtva prima SMS ili imejl od banke o neovlašćenim transakcijama ili ne može da se prijavi. U ovom trenutku napadač je već završio prenos sredstava.</p>
    <ul class="bullets">
      <li data-sr="Banka blokira nalog automatski posle detektovanih anomalija u transakcijama." data-en="The bank automatically blocks the account after detecting transaction anomalies.">Banka blokira nalog automatski posle detektovanih anomalija u transakcijama.</li>
      <li data-sr="Žrtva pronalazi klon aplikaciju tek kada je banka uputi na proveru instaliranih aplikacija." data-en="The victim finds the clone app only when the bank directs them to check installed applications.">Žrtva pronalazi klon aplikaciju tek kada je banka uputi na proveru instaliranih aplikacija.</li>
      <li data-sr="Klon može i dalje da radi i da prikuplja podatke za buduće napade." data-en="The clone may still be running and collecting data for future attacks.">Klon može i dalje da radi i da prikuplja podatke za buduće napade.</li>
    </ul>
    <div class="callout"><strong data-sr="Žrtva je kontaktirala banku i pokrenula istragu.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Žrtva je kontaktirala banku i pokrenula istragu." data-en="The victim has contacted the bank and started an investigation.">Žrtva je kontaktirala banku i pokrenula istragu.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 6 — Čišćenje uređaja" data-en="Phase 6 — Device cleanup">Faza 6 — Čišćenje uređaja</h3>
    <p data-sr="Žrtva mora da ukloni klon aplikaciju i proveri ima li i drugih kompromitovanih aplikacija. Sve lozinke moraju biti promenjene sa čistog uređaja." data-en="The victim must remove the clone app and check if there are other compromised apps. All passwords must be changed from a clean device.">Žrtva mora da ukloni klon aplikaciju i proveri ima li i drugih kompromitovanih aplikacija. Sve lozinke moraju biti promenjene sa čistog uređaja.</p>
    <ul class="bullets">
      <li data-sr="Klon se u nekim slučajevima može prijaviti kao zvanična aplikacija i teže je identifikovati ga." data-en="In some cases the clone may register as the official app making it harder to identify.">Klon se u nekim slučajevima može prijaviti kao zvanična aplikacija i teže je identifikovati ga.</li>
      <li data-sr="Fabričko resetovanje je najsigurniji način eliminacije malvera koji je mogao biti pridružen klonu." data-en="Factory reset is the safest way to eliminate malware that may have been bundled with the clone.">Fabričko resetovanje je najsigurniji način eliminacije malvera koji je mogao biti pridružen klonu.</li>
      <li data-sr="Sve lozinke se menjaju sa drugog pouzdanog uređaja koji nije instalirao klon." data-en="All passwords are changed from a different trusted device that did not install the clone.">Sve lozinke se menjaju sa drugog pouzdanog uređaja koji nije instalirao klon.</li>
    </ul>
    <div class="callout"><strong data-sr="Svi nalozi su osigurani sa novim lozinkama i 2FA resetovanim sa čistog uređaja.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Svi nalozi su osigurani sa novim lozinkama i 2FA resetovanim sa čistog uređaja." data-en="All accounts are secured with new passwords and 2FA reset from a clean device.">Svi nalozi su osigurani sa novim lozinkama i 2FA resetovanim sa čistog uređaja.</span></div>
  </article>
</section>

<section class="content-section">
  <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
  <ul class="bullets">
    <li data-sr="Link za preuzimanje ne vodi direktno na Google Play ili App Store." data-en="The download link does not lead directly to Google Play or the App Store.">Link za preuzimanje ne vodi direktno na Google Play ili App Store.</li>
    <li data-sr="URL lažne prodavnice ima sitnu razliku od zvaničnog domena — jedan karakter ili tačka navise." data-en="The fake store URL has a minor difference from the official domain — one character or extra period.">URL lažne prodavnice ima sitnu razliku od zvaničnog domena — jedan karakter ili tačka navise.</li>
    <li data-sr="Aplikacija traži ručno uključivanje instalacije iz nepoznatih izvora." data-en="The app requests manually enabling installation from unknown sources.">Aplikacija traži ručno uključivanje instalacije iz nepoznatih izvora.</li>
    <li data-sr="Ime izdavača aplikacije nije tačno ono što se pojavljuje na Google Play za zvaničnu verziju." data-en="The app publisher name is not exactly what appears on Google Play for the official version.">Ime izdavača aplikacije nije tačno ono što se pojavljuje na Google Play za zvaničnu verziju.</li>
    <li data-sr="Neovlašćene transakcije pojavljuju se bez ikakve radnje sa strane korisnika." data-en="Unauthorized transactions appear without any action on the user's part.">Neovlašćene transakcije pojavljuju se bez ikakve radnje sa strane korisnika.</li>
    <li data-sr="Korisnik ne može da se prijavi na nalog jer su mu podaci za obnovu promenjeni." data-en="The user cannot log into the account because their recovery data has been changed.">Korisnik ne može da se prijavi na nalog jer su mu podaci za obnovu promenjeni.</li>
    <li data-sr="Banka šalje obaveštenje o novom uređaju koji nije korisnikov." data-en="The bank sends a notification about a new device that is not the user's.">Banka šalje obaveštenje o novom uređaju koji nije korisnikov.</li>
    <li data-sr="Poruka traži bezbednosno ažuriranje koje se ne pojavljuje u zvaničnoj prodavnici." data-en="A message requests a security update that does not appear in the official store.">Poruka traži bezbednosno ažuriranje koje se ne pojavljuje u zvaničnoj prodavnici.</li>
    <li data-sr="Aplikacija funkcioniše normalno ali se pojavljuju neočekivana kašnjenja pri transakcijama." data-en="The app functions normally but unexpected delays appear during transactions.">Aplikacija funkcioniše normalno ali se pojavljuju neočekivana kašnjenja pri transakcijama.</li>
    <li data-sr="Hashovi APK fajla se razlikuju od hashova zvanične verzije na razvojnoj stranici." data-en="The APK file hashes differ from the official version hashes on the developer page.">Hashovi APK fajla se razlikuju od hashova zvanične verzije na razvojnoj stranici.</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Provere: 8 brzih provera pre instalacije aplikacije" data-en="Checks: 8 quick checks before installing an app">Provere: 8 brzih provera pre instalacije aplikacije</h2>
  <ol class="steps">
    <li data-sr="Instaliraj aplikaciju isključivo sa Google Play ili App Store — nikad sa trećih izvora ili linkova u porukama." data-en="Install apps exclusively from Google Play or the App Store — never from third-party sources or links in messages.">Instaliraj aplikaciju isključivo sa Google Play ili App Store — nikad sa trećih izvora ili linkova u porukama.</li>
    <li data-sr="Proveri ime izdavača na Google Play i uporedi ga tačno slovo po slovo sa onim koje se nudi." data-en="Check the publisher name on Google Play and compare it exactly letter by letter with what is being offered.">Proveri ime izdavača na Google Play i uporedi ga tačno slovo po slovo sa onim koje se nudi.</li>
    <li data-sr="Poseti zvanični sajt servisa i nađi link za preuzimanje aplikacije tamo — ne u porukama." data-en="Visit the official service website and find the app download link there — not in messages.">Poseti zvanični sajt servisa i nađi link za preuzimanje aplikacije tamo — ne u porukama.</li>
    <li data-sr="Nikada ne uključuj instalaciju iz nepoznatih izvora osim ako nema legitimnog tehničkog razloga koji si proverio." data-en="Never enable installation from unknown sources unless there is a legitimate technical reason you have verified.">Nikada ne uključuj instalaciju iz nepoznatih izvora osim ako nema legitimnog tehničkog razloga koji si proverio.</li>
    <li data-sr="Pošalji APK fajl na VirusTotal ili sličan skener pre instalacije ako ga nisi preuzeo sa Google Play." data-en="Send the APK file to VirusTotal or a similar scanner before installation if you did not download it from Google Play.">Pošalji APK fajl na VirusTotal ili sličan skener pre instalacije ako ga nisi preuzeo sa Google Play.</li>
    <li data-sr="Aktiviraj obaveštenja o novim prijavama i transakcijama na svim finansijskim nalozima." data-en="Enable notifications for new logins and transactions on all financial accounts.">Aktiviraj obaveštenja o novim prijavama i transakcijama na svim finansijskim nalozima.</li>
    <li data-sr="Redovno pregledaj listu instaliranih aplikacija i ukloni one koje ne prepoznaješ." data-en="Regularly review the list of installed apps and remove those you do not recognize.">Redovno pregledaj listu instaliranih aplikacija i ukloni one koje ne prepoznaješ.</li>
    <li data-sr="Ako primetiš neuobičajene transakcije, odmah kontaktiraj banku pre nego što pokušaš da otkloniš problem sam." data-en="If you notice unusual transactions immediately contact the bank before trying to fix the problem yourself.">Ako primetiš neuobičajene transakcije, odmah kontaktiraj banku pre nego što pokušaš da otkloniš problem sam.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Checklista: pitanja pre instalacije aplikacije" data-en="Checklist: questions before installing an app">Checklista: pitanja pre instalacije aplikacije</h2>
  <ul class="bullets">
    <li data-sr="Da li link za preuzimanje vodi direktno na Google Play ili App Store?" data-en="Does the download link lead directly to Google Play or the App Store?">Da li link za preuzimanje vodi direktno na Google Play ili App Store?</li>
    <li data-sr="Da li sam ovu aplikaciju pronašao sam tražeći je na Google Play, ili me je neko uputio na poseban link?" data-en="Did I find this app by searching on Google Play myself, or was I directed to a special link?">Da li sam ovu aplikaciju pronašao sam tražeći je na Google Play, ili me je neko uputio na poseban link?</li>
    <li data-sr="Da li se ime izdavača tačno poklapa sa zvaničnom kompanijom koja je razvila aplikaciju?" data-en="Does the publisher name exactly match the official company that developed the app?">Da li se ime izdavača tačno poklapa sa zvaničnom kompanijom koja je razvila aplikaciju?</li>
    <li data-sr="Da li instalacija zahteva da ručno uključim dozvolu za instalaciju iz nepoznatih izvora?" data-en="Does installation require manually enabling permission for installation from unknown sources?">Da li instalacija zahteva da ručno uključim dozvolu za instalaciju iz nepoznatih izvora?</li>
    <li data-sr="Da li je ovo bezbednosno ažuriranje koje je stiglo kroz poruku ili imejl, a ne kroz zvaničnu prodavnicu?" data-en="Is this a security update that arrived through a message or email rather than the official store?">Da li je ovo bezbednosno ažuriranje koje je stiglo kroz poruku ili imejl, a ne kroz zvaničnu prodavnicu?</li>
    <li data-sr="Da li imam aktivna obaveštenja o transakcijama koja bi me odmah upozorila na zloupotrebe?" data-en="Do I have active transaction notifications that would immediately alert me to any abuse?">Da li imam aktivna obaveštenja o transakcijama koja bi me odmah upozorila na zloupotrebe?</li>
    <li data-sr="Da li sam proverio hashove APK fajla sa zvaničnim hashovima razvojne kompanije?" data-en="Have I checked the APK file hashes against the official developer company hashes?">Da li sam proverio hashove APK fajla sa zvaničnim hashovima razvojne kompanije?</li>
    <li data-sr="Da li se URL prodavnice tačno poklapa sa zvaničnim domenom bez ikakvih varijacija?" data-en="Does the store URL exactly match the official domain without any variations?">Da li se URL prodavnice tačno poklapa sa zvaničnim domenom bez ikakvih varijacija?</li>
    <li data-sr="Da li su se nedavno pojavile neovlašćene transakcije ili neprepoznate prijave na može naloge?" data-en="Have there been recent unauthorized transactions or unrecognized logins to my accounts?">Da li su se nedavno pojavile neovlašćene transakcije ili neprepoznate prijave na može naloge?</li>
    <li data-sr="Da li sam proverio ovu aplikaciju u nezavisnom bezbednosnom alatu pre instalacije?" data-en="Have I checked this app in an independent security tool before installation?">Da li sam proverio ovu aplikaciju u nezavisnom bezbednosnom alatu pre instalacije?</li>
    <li data-sr="Da li koristim jaku i jedinstvenu lozinku za svaki finansijski nalog posebno?" data-en="Do I use a strong and unique password for each financial account separately?">Da li koristim jaku i jedinstvenu lozinku za svaki finansijski nalog posebno?</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
  <ol class="steps">
    <li data-sr="Odmah kontaktiraj banku i zamrzni sve finansijske naloge i kartice." data-en="Immediately contact the bank and freeze all financial accounts and cards.">Odmah kontaktiraj banku i zamrzni sve finansijske naloge i kartice.</li>
    <li data-sr="Pronađi i ukloni sumnjivi klon aplikacije sa uređaja." data-en="Find and remove the suspicious clone app from the device.">Pronađi i ukloni sumnjivi klon aplikacije sa uređaja.</li>
    <li data-sr="Uradi fabričko resetovanje uređaja ako nisi siguran da si eliminisao sve zlonamerne komponente." data-en="Perform a factory reset of the device if you are not sure you have eliminated all malicious components.">Uradi fabričko resetovanje uređaja ako nisi siguran da si eliminisao sve zlonamerne komponente.</li>
    <li data-sr="Promeni sve lozinke sa čistog uređaja koji nisi koristio za instalaciju klona." data-en="Change all passwords from a clean device you did not use to install the clone.">Promeni sve lozinke sa čistog uređaja koji nisi koristio za instalaciju klona.</li>
    <li data-sr="Aktiviraj ili resetuj 2FA na svim nalozima sa čistog uređaja." data-en="Activate or reset 2FA on all accounts from a clean device.">Aktiviraj ili resetuj 2FA na svim nalozima sa čistog uređaja.</li>
    <li data-sr="Prijavi incident policiji i dostavi dokaze o neovlašćenim transakcijama." data-en="Report the incident to police and provide evidence of unauthorized transactions.">Prijavi incident policiji i dostavi dokaze o neovlašćenim transakcijama.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
  <ul class="bullets">
    <li data-sr="Da li su instalirali aplikaciju van Google Play ili App Store?" data-en="Did they install an app outside Google Play or the App Store?">Da li su instalirali aplikaciju van Google Play ili App Store?</li>
    <li data-sr="Da li su primili poruku ili imejl sa linkom za bezbednosno ažuriranje?" data-en="Did they receive a message or email with a link for a security update?">Da li su primili poruku ili imejl sa linkom za bezbednosno ažuriranje?</li>
    <li data-sr="Da li su se pojavile neovlašćene transakcije ili im je nalog zaključan?" data-en="Have unauthorized transactions appeared or has their account been locked?">Da li su se pojavile neovlašćene transakcije ili im je nalog zaključan?</li>
    <li data-sr="Da li je ime izdavača instalirane aplikacije tačno ono što je prikazano na Google Play?" data-en="Is the publisher name of the installed app exactly what is shown on Google Play?">Da li je ime izdavača instalirane aplikacije tačno ono što je prikazano na Google Play?</li>
  </ul>
  <p data-sr="Rečenice koje rade:" data-en="Sentences that help:">Rečenice koje rade:</p>
  <ul class="bullets">
    <li data-sr="Hajde da odmah pozovemo banku i zamrznemo nalog — to mora biti prvi korak pre bilo čega drugog." data-en="Let us call the bank immediately and freeze the account — that must be the first step before anything else.">Hajde da odmah pozovemo banku i zamrznemo nalog — to mora biti prvi korak pre bilo čega drugog.</li>
    <li data-sr="Pogledajmo zajedno na Google Play kako se zove izdavač zvanične aplikacije i uporedimo sa onim što je instalirano." data-en="Let us look together on Google Play for the official app publisher name and compare it with what is installed.">Pogledajmo zajedno na Google Play kako se zove izdavač zvanične aplikacije i uporedimo sa onim što je instalirano.</li>
    <li data-sr="Lozinke menjaj samo sa drugog telefona ili računara koji nije bio u kontaktu sa ovim APK fajlom." data-en="Change passwords only from a different phone or computer that has not been in contact with this APK file.">Lozinke menjaj samo sa drugog telefona ili računara koji nije bio u kontaktu sa ovim APK fajlom.</li>
    <li data-sr="Ako nisi siguran koja je prava a koja lažna, uradi fabričko resetovanje — to je jedino pouzdano rešenje." data-en="If you are not sure which is real and which is fake do a factory reset — that is the only reliable solution.">Ako nisi siguran koja je prava a koja lažna, uradi fabričko resetovanje — to je jedino pouzdano rešenje.</li>
  </ul>
</section>


`
};
