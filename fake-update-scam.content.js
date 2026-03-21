if (!window.SCAM_CONTENT) window.SCAM_CONTENT = {};
window.SCAM_CONTENT["fake-update-scam"] = {
  raw_html: `
<section class="content-section">
  <h2 data-sr="Uvod: kako radi prevara sa lažnim ažuriranjem" data-en="Introduction: how the fake update scam works">Uvod: kako radi prevara sa lažnim ažuriranjem</h2>
  <p data-sr="Korisnik vidi obaveštenje da je potrebno ažuriranje — browser-a, operativnog sistema, video plejera ili popularne aplikacije. Klik na dugme vodi na preuzimanje koje nije legitimno ažuriranje već instalacioni paket sa malverom. Napadač koristi urgenciju i vizuelnu sličnost sa zvaničnim obaveštenjima da bi ubrzao instalaciju bez razmišljanja." data-en="The user sees a notification that an update is needed — for a browser, operating system, video player or popular app. Clicking the button leads to a download that is not a legitimate update but an installation package with malware. The attacker uses urgency and visual similarity to official notifications to speed up installation without thinking.">Korisnik vidi obaveštenje da je potrebno ažuriranje — browser-a, operativnog sistema, video plejera ili popularne aplikacije. Klik na dugme vodi na preuzimanje koje nije legitimno ažuriranje već instalacioni paket sa malverom. Napadač koristi urgenciju i vizuelnu sličnost sa zvaničnim obaveštenjima da bi ubrzao instalaciju bez razmišljanja.</p>
  <p data-sr="Lažna ažuriranja se distribuiraju kroz kompromitovane sajtove, malvertising mreže, phishing imejlove ili pop-up obaveštenja u browser-u. Posle instalacije malver može biti keylogger, ransomware, RAT (remote access trojan) ili spyware — zavisno od cilja napadača." data-en="Fake updates are distributed through compromised websites, malvertising networks, phishing emails or browser pop-up notifications. After installation the malware can be a keylogger, ransomware, RAT (remote access trojan) or spyware — depending on the attacker's goal.">Lažna ažuriranja se distribuiraju kroz kompromitovane sajtove, malvertising mreže, phishing imejlove ili pop-up obaveštenja u browser-u. Posle instalacije malver može biti keylogger, ransomware, RAT (remote access trojan) ili spyware — zavisno od cilja napadača.</p>
</section>

<section class="content-section">
  <h2 data-sr="Model" data-en="Model">Model</h2>
  <div class="phase">
    <div class="label" data-sr="Lanac" data-en="Chain">Lanac</div>
    <p data-sr="Obaveštenje/pop-up → ažuriranje → preuzimanje paketa → instalacija → malver aktivan → eksfiltracija ili ransomware" data-en="Notification/pop-up → update → download package → installation → malware active → exfiltration or ransomware">Obaveštenje/pop-up → ažuriranje → preuzimanje paketa → instalacija → malver aktivan → eksfiltracija ili ransomware</p>
  </div>
  <div class="callout">
    <strong data-sr="Prag:" data-en="Threshold:">Prag:</strong>
    <span data-sr="Klik na dugme za ažuriranje i preuzimanje fajla. Posle izvršavanja instalacionog paketa malver je aktivan." data-en="Clicking the update button and downloading the file. After executing the installation package the malware is active.">Klik na dugme za ažuriranje i preuzimanje fajla. Posle izvršavanja instalacionog paketa malver je aktivan.</span>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Kako generalno radi: mehanika" data-en="How it works: mechanics">Kako generalno radi: mehanika</h2>
  <div class="grid-2">
    <div class="phase">
      <div class="label" data-sr="Šta gradi uverljivost" data-en="What builds credibility">Šta gradi uverljivost</div>
      <ul class="bullets">
        <li data-sr="Pop-up ili obaveštenje vizuelno oponaša zvanična sistemska ili browser obaveštenja." data-en="The pop-up or notification visually mimics official system or browser notifications.">Pop-up ili obaveštenje vizuelno oponaša zvanična sistemska ili browser obaveštenja.</li>
        <li data-sr="Logo i boje kompanija poput Microsoft, Google, Adobe ili Oracle koriste se bez dozvole." data-en="Logos and colors of companies like Microsoft, Google, Adobe or Oracle are used without authorization.">Logo i boje kompanija poput Microsoft, Google, Adobe ili Oracle koriste se bez dozvole.</li>
        <li data-sr="Tekst sadrži tehničke detalje — verzija 118.0.2, kritična bezbednosna zakrpa, CVE-2024-xxxxx." data-en="The text contains technical details — version 118.0.2, critical security patch, CVE-2024-xxxxx.">Tekst sadrži tehničke detalje — verzija 118.0.2, kritična bezbednosna zakrpa, CVE-2024-xxxxx.</li>
        <li data-sr="Urgencija se gradi opisima kao što su vaš uređaj je u opasnosti ili ažuriraj odmah." data-en="Urgency is built with descriptions like your device is at risk or update immediately.">Urgencija se gradi opisima kao što su vaš uređaj je u opasnosti ili ažuriraj odmah.</li>
      </ul>
    </div>
    <div class="phase">
      <div class="label" data-sr="Kako se uvodi radnja" data-en="How the action is introduced">Kako se uvodi radnja</div>
      <ul class="bullets">
        <li data-sr="Klik na dugme inicira preuzimanje izvršnog fajla (.exe, .msi, .pkg) koji se lako zamenjuje za legitiman instalater." data-en="Clicking the button initiates download of an executable file (.exe, .msi, .pkg) easily mistaken for a legitimate installer.">Klik na dugme inicira preuzimanje izvršnog fajla (.exe, .msi, .pkg) koji se lako zamenjuje za legitiman instalater.</li>
        <li data-sr="Instalacioni paket može zaista da instalira legitimnu aplikaciju dok u pozadini instalira malver." data-en="The installation package may actually install a legitimate app while installing malware in the background.">Instalacioni paket može zaista da instalira legitimnu aplikaciju dok u pozadini instalira malver.</li>
        <li data-sr="Drive-by download kompromitovanog sajta može preuzeti malver bez ikakvog klika korisnika." data-en="A drive-by download from a compromised site can download malware without any user click.">Drive-by download kompromitovanog sajta može preuzeti malver bez ikakvog klika korisnika.</li>
        <li data-sr="Instalacija traži administratorske privilegije što pogrešno izgleda kao legitimna sistemska akcija." data-en="Installation requests administrator privileges which incorrectly looks like a legitimate system action.">Instalacija traži administratorske privilegije što pogrešno izgleda kao legitimna sistemska akcija.</li>
      </ul>
    </div>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Hronološki tok (faze + evolucije)" data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

  <article class="phase">
    <h3 data-sr="Faza 1 — Prikazivanje lažnog obaveštenja" data-en="Phase 1 — Displaying the fake notification">Faza 1 — Prikazivanje lažnog obaveštenja</h3>
    <p data-sr="Korisnik posećuje kompromitovani sajt ili prima phishing imejl i vidi obaveštenje koje oponaša legitimno sistemsko ažuriranje." data-en="The user visits a compromised website or receives a phishing email and sees a notification that mimics a legitimate system update.">Korisnik posećuje kompromitovani sajt ili prima phishing imejl i vidi obaveštenje koje oponaša legitimno sistemsko ažuriranje.</p>
    <ul class="bullets">
      <li data-sr="Browser prikazuje full-screen pop-up koji blokira normalan prikaz sajta dok korisnik ne reaguje." data-en="The browser shows a full-screen pop-up that blocks the normal site display until the user responds.">Browser prikazuje full-screen pop-up koji blokira normalan prikaz sajta dok korisnik ne reaguje.</li>
      <li data-sr="Obaveštenje koristi zvanični logo i boje browser-a ili operativnog sistema kojeg napadač ciljano oponaša." data-en="The notification uses the official logo and colors of the browser or operating system the attacker specifically mimics.">Obaveštenje koristi zvanični logo i boje browser-a ili operativnog sistema kojeg napadač ciljano oponaša.</li>
      <li data-sr="Napadač prati koji browser korisnik koristi i prilagođava izgled obaveštenja tom browser-u." data-en="The attacker tracks which browser the user uses and adapts the notification appearance to that browser.">Napadač prati koji browser korisnik koristi i prilagođava izgled obaveštenja tom browser-u.</li>
    </ul>
    <div class="callout"><strong data-sr="Korisnik veruje da obaveštenje dolazi od legitimnog sistema i razmatra klik.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Korisnik veruje da obaveštenje dolazi od legitimnog sistema i razmatra klik." data-en="The user believes the notification comes from a legitimate system and considers clicking.">Korisnik veruje da obaveštenje dolazi od legitimnog sistema i razmatra klik.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 2 — Preuzimanje i instalacija" data-en="Phase 2 — Download and installation">Faza 2 — Preuzimanje i instalacija</h3>
    <p data-sr="Klik na dugme inicira preuzimanje fajla koji izgleda kao legitimni instalacioni paket sa pravim imenom i ikonom." data-en="Clicking the button initiates download of a file that looks like a legitimate installation package with a proper name and icon.">Klik na dugme inicira preuzimanje fajla koji izgleda kao legitimni instalacioni paket sa pravim imenom i ikonom.</p>
    <ul class="bullets">
      <li data-sr="Fajl ima ime kao ChromeSetup.exe, FlashPlayer.msi ili WindowsUpdate.exe." data-en="The file has a name like ChromeSetup.exe, FlashPlayer.msi or WindowsUpdate.exe.">Fajl ima ime kao ChromeSetup.exe, FlashPlayer.msi ili WindowsUpdate.exe.</li>
      <li data-sr="Korisnik pokreće fajl jer veruje da instalira legitimno ažuriranje." data-en="The user runs the file believing they are installing a legitimate update.">Korisnik pokreće fajl jer veruje da instalira legitimno ažuriranje.</li>
      <li data-sr="Instalater traži administratorske privilegije — standardno za legitimna ažuriranja pa korisnik prihvata." data-en="The installer requests administrator privileges — standard for legitimate updates so the user accepts.">Instalater traži administratorske privilegije — standardno za legitimna ažuriranja pa korisnik prihvata.</li>
    </ul>
    <div class="callout"><strong data-sr="Korisnik odobrava administratorske privilegije instalateru — malver ima pun pristup sistemu.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Korisnik odobrava administratorske privilegije instalateru — malver ima pun pristup sistemu." data-en="The user approves administrator privileges to the installer — the malware has full system access.">Korisnik odobrava administratorske privilegije instalateru — malver ima pun pristup sistemu.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching at this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="malicious-app-scam.html" data-sr="Zlonamerna aplikacija — ista mehanika instalacije kroz lažne kanale." data-en="Malicious app — same installation mechanics through fake channels.">Zlonamerna aplikacija — ista mehanika instalacije kroz lažne kanale.</a></li>
        <li><a href="scareware.html" data-sr="Scareware — lažni skeneri koji ponekad distribuiraju isti instalacioni tok." data-en="Scareware — fake scanners that sometimes distribute the same installation flow.">Scareware — lažni skeneri koji ponekad distribuiraju isti instalacioni tok.</a></li>
      </ul>
    </div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 3 — Aktivacija malvera" data-en="Phase 3 — Malware activation">Faza 3 — Aktivacija malvera</h3>
    <p data-sr="Malver se instalira i aktivira u pozadini. Može biti jedan od nekoliko tipova zavisno od cilja: keylogger, RAT, ransomware ili spyware." data-en="The malware installs and activates in the background. It can be one of several types depending on the goal: keylogger, RAT, ransomware or spyware.">Malver se instalira i aktivira u pozadini. Može biti jedan od nekoliko tipova zavisno od cilja: keylogger, RAT, ransomware ili spyware.</p>
    <ul class="bullets">
      <li data-sr="Keylogger beleži sve unose tastature i šalje ih napadaču — lozinke, kreditni podaci, poruke." data-en="The keylogger records all keyboard input and sends it to the attacker — passwords, credit data, messages.">Keylogger beleži sve unose tastature i šalje ih napadaču — lozinke, kreditni podaci, poruke.</li>
      <li data-sr="RAT (Remote Access Trojan) daje napadaču potpuni udaljeni pristup ekranu, fajlovima i kameri." data-en="RAT (Remote Access Trojan) gives the attacker complete remote access to the screen, files and camera.">RAT (Remote Access Trojan) daje napadaču potpuni udaljeni pristup ekranu, fajlovima i kameri.</li>
      <li data-sr="Ransomware šifruje fajlove i prikazuje poruku sa zahtevom za otkupninom." data-en="Ransomware encrypts files and displays a message with a ransom demand.">Ransomware šifruje fajlove i prikazuje poruku sa zahtevom za otkupninom.</li>
    </ul>
    <div class="callout"><strong data-sr="Malver je perzistentan — ostaje aktivan i posle restarta sistema.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Malver je perzistentan — ostaje aktivan i posle restarta sistema." data-en="The malware is persistent — it remains active even after system restart.">Malver je perzistentan — ostaje aktivan i posle restarta sistema.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 4 — Tiha eksfiltracija ili blokada" data-en="Phase 4 — Silent exfiltration or lockdown">Faza 4 — Tiha eksfiltracija ili blokada</h3>
    <p data-sr="Keylogger i spyware rade tiho danima ili nedeljama pre nego što korisnik primeti problem. Ransomware deluje odmah — fajlovi su šifrovani i vidljiva je poruka sa zahtevima." data-en="Keyloggers and spyware operate silently for days or weeks before the user notices a problem. Ransomware acts immediately — files are encrypted and a message with demands is visible.">Keylogger i spyware rade tiho danima ili nedeljama pre nego što korisnik primeti problem. Ransomware deluje odmah — fajlovi su šifrovani i vidljiva je poruka sa zahtevima.</p>
    <ul class="bullets">
      <li data-sr="Neovlašćene prijave na naloge počinju da se pojavljuju ubrzo posle instalacije keyloggera." data-en="Unauthorized logins to accounts begin appearing soon after keylogger installation.">Neovlašćene prijave na naloge počinju da se pojavljuju ubrzo posle instalacije keyloggera.</li>
      <li data-sr="Kamera i mikrofon mogu biti aktivirani bez vidljivog indikatora ako je instaliran RAT." data-en="Camera and microphone may be activated without a visible indicator if a RAT is installed.">Kamera i mikrofon mogu biti aktivirani bez vidljivog indikatora ako je instaliran RAT.</li>
      <li data-sr="Ransomware prikazuje rok za plaćanje otkupnine i preti trajnim brisanjem ključa za dešifrovanje." data-en="Ransomware displays a ransom payment deadline and threatens permanent deletion of the decryption key.">Ransomware prikazuje rok za plaćanje otkupnine i preti trajnim brisanjem ključa za dešifrovanje.</li>
    </ul>
    <div class="callout"><strong data-sr="Korisnik primećuje anomalije — neovlašćene transakcije, zaključane fajlove ili neobjašnjene poruke.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Korisnik primećuje anomalije — neovlašćene transakcije, zaključane fajlove ili neobjašnjene poruke." data-en="The user notices anomalies — unauthorized transactions, locked files or unexplained messages.">Korisnik primećuje anomalije — neovlašćene transakcije, zaključane fajlove ili neobjašnjene poruke.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 5 — Otkrivanje i reakcija" data-en="Phase 5 — Discovery and reaction">Faza 5 — Otkrivanje i reakcija</h3>
    <p data-sr="Korisnik shvata da nešto nije u redu — antivirusni program šalje upozorenje, banka blokira transakcije ili fajlovi postaju nedostupni." data-en="The user realizes something is wrong — antivirus sends a warning, bank blocks transactions or files become unavailable.">Korisnik shvata da nešto nije u redu — antivirusni program šalje upozorenje, banka blokira transakcije ili fajlovi postaju nedostupni.</p>
    <ul class="bullets">
      <li data-sr="Pokušaj deinstalacije malicioznog paketa nailazi na otpor jer se malver brani od uklanjanja." data-en="Attempting to uninstall the malicious package meets resistance because the malware defends against removal.">Pokušaj deinstalacije malicioznog paketa nailazi na otpor jer se malver brani od uklanjanja.</li>
      <li data-sr="Korisnik traži na internetu simptome i dolazi do saznanja da je instalirao malver." data-en="The user searches online for the symptoms and discovers they installed malware.">Korisnik traži na internetu simptome i dolazi do saznanja da je instalirao malver.</li>
      <li data-sr="Ransomware poruka daje adresu kripto novčanika za plaćanje i uputstvo za oporavak." data-en="The ransomware message provides a crypto wallet address for payment and recovery instructions.">Ransomware poruka daje adresu kripto novčanika za plaćanje i uputstvo za oporavak.</li>
    </ul>
    <div class="callout"><strong data-sr="Korisnik kontaktira IT podršku ili antivirusnu kompaniju za pomoć pri uklanjanju.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Korisnik kontaktira IT podršku ili antivirusnu kompaniju za pomoć pri uklanjanju." data-en="The user contacts IT support or an antivirus company for help with removal.">Korisnik kontaktira IT podršku ili antivirusnu kompaniju za pomoć pri uklanjanju.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 6 — Uklanjanje i oporavak" data-en="Phase 6 — Removal and recovery">Faza 6 — Uklanjanje i oporavak</h3>
    <p data-sr="Uklanjanje keyloggera ili RAT-a zahteva kompletan antimalver sken ili reinstalaciju sistema. Oporavak od ransomware-a zavisi od dostupnosti backup-a." data-en="Removing a keylogger or RAT requires a complete antimalware scan or system reinstallation. Recovery from ransomware depends on the availability of backups.">Uklanjanje keyloggera ili RAT-a zahteva kompletan antimalver sken ili reinstalaciju sistema. Oporavak od ransomware-a zavisi od dostupnosti backup-a.</p>
    <ul class="bullets">
      <li data-sr="Sve lozinke moraju biti promenjene sa čistog uređaja koji nije bio zahvaćen." data-en="All passwords must be changed from a clean device that was not affected.">Sve lozinke moraju biti promenjene sa čistog uređaja koji nije bio zahvaćen.</li>
      <li data-sr="Backup fajlova koji su pravljeni pre infekcije su jedini pouzdan put povratka podataka bez plaćanja otkupnine." data-en="Backup files made before the infection are the only reliable way to recover data without paying the ransom.">Backup fajlova koji su pravljeni pre infekcije su jedini pouzdan put povratka podataka bez plaćanja otkupnine.</li>
      <li data-sr="Plaćanje ransomware otkupnine ne garantuje dešifrovanje i finansira dalje napade." data-en="Paying ransomware ransom does not guarantee decryption and funds further attacks.">Plaćanje ransomware otkupnine ne garantuje dešifrovanje i finansira dalje napade.</li>
    </ul>
    <div class="callout"><strong data-sr="Sistem je očišćen i sve lozinke su promenjene sa čistog uređaja.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Sistem je očišćen i sve lozinke su promenjene sa čistog uređaja." data-en="The system is cleaned and all passwords are changed from a clean device.">Sistem je očišćen i sve lozinke su promenjene sa čistog uređaja.</span></div>
  </article>
</section>

<section class="content-section">
  <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
  <ul class="bullets">
    <li data-sr="Pop-up za ažuriranje se pojavljuje na sajtu koji nema veze sa softverom koji se ažurira." data-en="An update pop-up appears on a website unrelated to the software being updated.">Pop-up za ažuriranje se pojavljuje na sajtu koji nema veze sa softverom koji se ažurira.</li>
    <li data-sr="Link za ažuriranje ne vodi na zvanični sajt kompanije čiji se softver tobož ažurira." data-en="The update link does not lead to the official website of the company whose software is supposedly being updated.">Link za ažuriranje ne vodi na zvanični sajt kompanije čiji se softver tobož ažurira.</li>
    <li data-sr="Ažuriranje nije dostupno kroz zvanični kanal aplikacije ili sistemska podešavanja." data-en="The update is not available through the app's official channel or system settings.">Ažuriranje nije dostupno kroz zvanični kanal aplikacije ili sistemska podešavanja.</li>
    <li data-sr="Preuzeti fajl ima neobičan naziv ili kombinuje ime legitimnog softvera sa nečim nelogičnim." data-en="The downloaded file has an unusual name or combines the name of legitimate software with something illogical.">Preuzeti fajl ima neobičan naziv ili kombinuje ime legitimnog softvera sa nečim nelogičnim.</li>
    <li data-sr="Antivirusni program upozorava na preuzeti fajl ali pop-up traži da se upozorenje ignoriše." data-en="The antivirus warns about the downloaded file but the pop-up asks to ignore the warning.">Antivirusni program upozorava na preuzeti fajl ali pop-up traži da se upozorenje ignoriše.</li>
    <li data-sr="Obaveštenje tvrdi da je ažuriranje hitno i da bez njega uređaj nije zaštićen — standardna pritisna taktika." data-en="The notification claims the update is urgent and without it the device is unprotected — standard pressure tactic.">Obaveštenje tvrdi da je ažuriranje hitno i da bez njega uređaj nije zaštićen — standardna pritisna taktika.</li>
    <li data-sr="Instalater zahteva isključivanje antivirusnog programa za instalaciju." data-en="The installer requests disabling the antivirus program for installation.">Instalater zahteva isključivanje antivirusnog programa za instalaciju.</li>
    <li data-sr="Posle instalacije pojavljuju se neovlašćene prijave ili transakcije na nalozima." data-en="After installation unauthorized logins or transactions appear on accounts.">Posle instalacije pojavljuju se neovlašćene prijave ili transakcije na nalozima.</li>
    <li data-sr="Sistem radi sporije ili se pregrejava bez vidljivog razloga posle ažuriranja." data-en="The system runs slower or overheats without visible reason after the update.">Sistem radi sporije ili se pregrejava bez vidljivog razloga posle ažuriranja.</li>
    <li data-sr="Legitimna aplikacija se ažurirala automatski ili kroz zvanični kanal pre nego što je stiglo obaveštenje." data-en="The legitimate app updated automatically or through its official channel before the notification arrived.">Legitimna aplikacija se ažurirala automatski ili kroz zvanični kanal pre nego što je stiglo obaveštenje.</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Provere: 8 brzih provera pre instalacije ažuriranja" data-en="Checks: 8 quick checks before installing an update">Provere: 8 brzih provera pre instalacije ažuriranja</h2>
  <ol class="steps">
    <li data-sr="Proveri da li je ažuriranje dostupno kroz zvanični kanal aplikacije ili sistemskih podešavanja — ne kroz pop-up." data-en="Check if the update is available through the app's official channel or system settings — not through a pop-up.">Proveri da li je ažuriranje dostupno kroz zvanični kanal aplikacije ili sistemskih podešavanja — ne kroz pop-up.</li>
    <li data-sr="Poseti zvanični sajt kompanije direktno i proveri da li su objavili novo ažuriranje." data-en="Visit the company's official website directly and check if they have published a new update.">Poseti zvanični sajt kompanije direktno i proveri da li su objavili novo ažuriranje.</li>
    <li data-sr="Nikada ne preuzimaj ažuriranje sa sajta koji prikazuje pop-up — idi direktno na zvanični izvor." data-en="Never download an update from a website displaying a pop-up — go directly to the official source.">Nikada ne preuzimaj ažuriranje sa sajta koji prikazuje pop-up — idi direktno na zvanični izvor.</li>
    <li data-sr="Proveri hash prezetog fajla sa zvaničnim hashovima objavljenim na stranici razvojne kompanije." data-en="Check the hash of the downloaded file against official hashes published on the developer's page.">Proveri hash prezetog fajla sa zvaničnim hashovima objavljenim na stranici razvojne kompanije.</li>
    <li data-sr="Pošalji fajl na VirusTotal pre pokretanja ako ima ikakve sumnje u legitimnost." data-en="Send the file to VirusTotal before running if there is any doubt about legitimacy.">Pošalji fajl na VirusTotal pre pokretanja ako ima ikakve sumnje u legitimnost.</li>
    <li data-sr="Nikad ne isključuj antivirusni program na zahtev instalacionog procesa — legitimna ažuriranja to ne traže." data-en="Never disable the antivirus program at the request of an installation process — legitimate updates do not request that.">Nikad ne isključuj antivirusni program na zahtev instalacionog procesa — legitimna ažuriranja to ne traže.</li>
    <li data-sr="Redovno pravi backup fajlova — to je jedina odbrana od ransomware-a bez plaćanja otkupnine." data-en="Regularly back up files — that is the only defense against ransomware without paying a ransom.">Redovno pravi backup fajlova — to je jedina odbrana od ransomware-a bez plaćanja otkupnine.</li>
    <li data-sr="Ako se pojave sumnjive transakcije ili neprepoznate prijave posle instalacije, odmah kontaktiraj banku." data-en="If suspicious transactions or unrecognized logins appear after installation immediately contact the bank.">Ako se pojave sumnjive transakcije ili neprepoznate prijave posle instalacije, odmah kontaktiraj banku.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Checklista: pitanja pre instalacije ažuriranja" data-en="Checklist: questions before installing an update">Checklista: pitanja pre instalacije ažuriranja</h2>
  <ul class="bullets">
    <li data-sr="Da li sam pronašao ovo ažuriranje kroz zvanični kanal aplikacije ili sam video pop-up na nekom sajtu?" data-en="Did I find this update through the app's official channel or did I see a pop-up on some website?">Da li sam pronašao ovo ažuriranje kroz zvanični kanal aplikacije ili sam video pop-up na nekom sajtu?</li>
    <li data-sr="Da li link za preuzimanje vodi na zvanični domen kompanije?" data-en="Does the download link lead to the company's official domain?">Da li link za preuzimanje vodi na zvanični domen kompanije?</li>
    <li data-sr="Da li antivirusni program upozorava na preuzeti fajl?" data-en="Does the antivirus warn about the downloaded file?">Da li antivirusni program upozorava na preuzeti fajl?</li>
    <li data-sr="Da li instalater traži da isključim antivirusni program?" data-en="Does the installer request disabling the antivirus program?">Da li instalater traži da isključim antivirusni program?</li>
    <li data-sr="Da li postoji informacija o ovom ažuriranju na zvaničnom sajtu kompanije?" data-en="Is there information about this update on the company's official website?">Da li postoji informacija o ovom ažuriranju na zvaničnom sajtu kompanije?</li>
    <li data-sr="Da li pop-up tvrdi da je ažuriranje hitno i da bez njega sam u opasnosti?" data-en="Does the pop-up claim the update is urgent and that without it I am at risk?">Da li pop-up tvrdi da je ažuriranje hitno i da bez njega sam u opasnosti?</li>
    <li data-sr="Da li je ovo ažuriranje dostupno i kroz zvanični kanal aplikacije ili samo kroz ovaj link?" data-en="Is this update available through the app's official channel or only through this link?">Da li je ovo ažuriranje dostupno i kroz zvanični kanal aplikacije ili samo kroz ovaj link?</li>
    <li data-sr="Da li sam proverio hash prezetog fajla?" data-en="Have I checked the hash of the downloaded file?">Da li sam proverio hash prezetog fajla?</li>
    <li data-sr="Da li imam aktivan backup sistema koji bi zaštitio fajlove u slučaju ransomware napada?" data-en="Do I have an active system backup that would protect files in case of a ransomware attack?">Da li imam aktivan backup sistema koji bi zaštitio fajlove u slučaju ransomware napada?</li>
    <li data-sr="Da li su se posle poslednje instalacije pojavile neovlašćene transakcije ili sumnjive prijave?" data-en="Have unauthorized transactions or suspicious logins appeared after the last installation?">Da li su se posle poslednje instalacije pojavile neovlašćene transakcije ili sumnjive prijave?</li>
    <li data-sr="Da li je moj antivirusni program ažuran i aktivan?" data-en="Is my antivirus program updated and active?">Da li je moj antivirusni program ažuran i aktivan?</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
  <ol class="steps">
    <li data-sr="Ne pokreći preuzeti fajl ako još nisi — otkaži preuzimanje i obriši fajl." data-en="Do not run the downloaded file if you have not yet — cancel the download and delete the file.">Ne pokreći preuzeti fajl ako još nisi — otkaži preuzimanje i obriši fajl.</li>
    <li data-sr="Pokreni kompletan antimalver sken sistema odmah." data-en="Run a complete antimalware scan of the system immediately.">Pokreni kompletan antimalver sken sistema odmah.</li>
    <li data-sr="Ako si već pokrenuo fajl — isključi internet konekciju da bi ograničio eksfiltraciju podataka." data-en="If you already ran the file — disconnect from the internet to limit data exfiltration.">Ako si već pokrenuo fajl — isključi internet konekciju da bi ograničio eksfiltraciju podataka.</li>
    <li data-sr="Kontaktiraj banku i zamrzni kartice ako se pojave neovlašćene transakcije." data-en="Contact the bank and freeze cards if unauthorized transactions appear.">Kontaktiraj banku i zamrzni kartice ako se pojave neovlašćene transakcije.</li>
    <li data-sr="Promeni sve lozinke sa čistog uređaja koji nije bio zahvaćen." data-en="Change all passwords from a clean device that was not affected.">Promeni sve lozinke sa čistog uređaja koji nije bio zahvaćen.</li>
    <li data-sr="Vrati sistem sa backup-a ako je instaliran ransomware i fajlovi su šifrovani." data-en="Restore the system from backup if ransomware is installed and files are encrypted.">Vrati sistem sa backup-a ako je instaliran ransomware i fajlovi su šifrovani.</li>
    <li data-sr="Prijavi incident policiji i sačuvaj dokaze — preuzeti fajl, screenshote i bankovne izvode." data-en="Report the incident to police and preserve evidence — the downloaded file, screenshots and bank statements.">Prijavi incident policiji i sačuvaj dokaze — preuzeti fajl, screenshote i bankovne izvode.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
  <ul class="bullets">
    <li data-sr="Da li su pokrenuli fajl koji je preuzet sa pop-up obaveštenja a ne iz zvanične aplikacije?" data-en="Did they run a file downloaded from a pop-up notification rather than from the official app?">Da li su pokrenuli fajl koji je preuzet sa pop-up obaveštenja a ne iz zvanične aplikacije?</li>
    <li data-sr="Da li su se pojavile neovlašćene transakcije ili neprepoznate prijave posle instalacije?" data-en="Have unauthorized transactions or unrecognized logins appeared after installation?">Da li su se pojavile neovlašćene transakcije ili neprepoznate prijave posle instalacije?</li>
    <li data-sr="Da li su fajlovi na računaru šifrovani i pojavljuje se poruka o otkupnini?" data-en="Are files on the computer encrypted and is there a ransom message?">Da li su fajlovi na računaru šifrovani i pojavljuje se poruka o otkupnini?</li>
    <li data-sr="Da li imaju aktivan backup koji je napravljen pre incidenta?" data-en="Do they have an active backup made before the incident?">Da li imaju aktivan backup koji je napravljen pre incidenta?</li>
  </ul>
  <p data-sr="Rečenice koje rade:" data-en="Sentences that help:">Rečenice koje rade:</p>
  <ul class="bullets">
    <li data-sr="Ne plaćaj otkupninu — plaćanje ne garantuje da ćeš dobiti ključ i finansira dalje napade." data-en="Do not pay the ransom — paying does not guarantee you will receive the key and funds further attacks.">Ne plaćaj otkupninu — plaćanje ne garantuje da ćeš dobiti ključ i finansira dalje napade.</li>
    <li data-sr="Isključi internet odmah — to ograničava koliko podataka napadač može da prikupi." data-en="Disconnect from the internet immediately — this limits how much data the attacker can collect.">Isključi internet odmah — to ograničava koliko podataka napadač može da prikupi.</li>
    <li data-sr="Lozinke menjaj samo sa drugog uređaja koji nije bio zahvaćen — ne sa ovog računara." data-en="Change passwords only from a different device that was not affected — not from this computer.">Lozinke menjaj samo sa drugog uređaja koji nije bio zahvaćen — ne sa ovog računara.</li>
    <li data-sr="Ako postoji backup, vrati sistem sa backup-a — to je brži i sigurniji put od plaćanja ili pregovaranja." data-en="If there is a backup restore the system from it — that is the faster and safer path than paying or negotiating.">Ako postoji backup, vrati sistem sa backup-a — to je brži i sigurniji put od plaćanja ili pregovaranja.</li>
  </ul>
</section>


`
};
