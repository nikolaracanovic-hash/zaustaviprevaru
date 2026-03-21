window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["usb-baiting-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: šta je USB mamac" data-en="Introduction: what USB baiting is">Uvod: šta je USB mamac</h2>
      <p data-sr="USB mamac je socijalni inženjering gde napadač ostavi ili pošalje USB uređaj koji meta ubaci u svoj računar. Uređaj izgleda kao običan fleš, poklon sa brendom ili izgubljena memorija. Cilj je pokretanje fajlova koji instaliraju malver, otvaraju pozadinu za kontrolu ili pokreću lažnu priču o sadržaju diska." data-en="USB baiting is social engineering where an attacker leaves or mails a USB device the target plugs into their computer. The device looks like a normal flash drive, branded gift, or lost memory stick. The goal is to run files that install malware, open remote control, or start a story about what’s on the disk.">USB mamac je socijalni inženjering gde napadač ostavi ili pošalje USB uređaj koji meta ubaci u svoj računar. Uređaj izgleda kao običan fleš, poklon sa brendom ili izgubljena memorija. Cilj je pokretanje fajlova koji instaliraju malver, otvaraju pozadinu za kontrolu ili pokreću lažnu priču o sadržaju diska.</p>
      <p data-sr="Napad ne zavisi od tehničke greške korisnika u smislu komplikovanog eksploita: često je dovoljna radoznalost, želja da se pomogne kolegi ili strahu od gubitka važnih podataka na pronađenom uređaju. Posle ubacivanja sledi lanac koji firme vide kao unutrašnji proboj, a pojedinci kao krađu naloga ili zaključavanje fajlova." data-en="The attack does not always need a complex exploit: curiosity, wanting to help a colleague, or fear of losing important data on a found device is often enough. After insertion, organizations see an internal breach and individuals see account theft or locked files.">Napad ne zavisi od tehničke greške korisnika u smislu komplikovanog eksploita: često je dovoljna radoznalost, želja da se pomogne kolegi ili strahu od gubitka važnih podataka na pronađenom uređaju. Posle ubacivanja sledi lanac koji firme vide kao unutrašnji proboj, a pojedinci kao krađu naloga ili zaključavanje fajlova.</p>
      <div class="callout" data-sr="<strong>Model:</strong> fizički mamac → ubacivanje → prompt ili Autoplay → otvaranje fajla → prag (izvršavanje/dozvole) → malver ili pristup → širenje ili otkup." data-en="<strong>Model:</strong> physical bait → insertion → prompt or Autoplay → file open → threshold (execution/approvals) → malware or access → spread or ransom."><strong>Model:</strong> fizički mamac → ubacivanje → prompt ili Autoplay → otvaranje fajla → prag (izvršavanje/dozvole) → malver ili pristup → širenje ili otkup.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> klik koji pokreće fajl ili odobrenje administrativnog tipa za nepoznat uređaj." data-en="<strong>Threshold:</strong> a click that runs a file or an administrative-style approval for an unknown device."><strong>Prag:</strong> klik koji pokreće fajl ili odobrenje administrativnog tipa za nepoznat uređaj.</div>
    </section>

    <section class="card">
      <h2 data-sr="Zašto prolazi: fizički predmet u ruci" data-en="Why it works: a physical object in hand">Zašto prolazi: fizički predmet u ruci</h2>
      <p data-sr="USB deluje kao stvaran, jeftin i poznat predmet. U kancelariji ili kod kuće ljudi su navikli da fleš koriste za prenos fajlova. Kada uređaj nekako dospeti do stola, refleks je ubaciti ga i videti šta je unutra, posebno ako piše plaće, ugovori ili privatno." data-en="A USB stick feels real, cheap, and familiar. At home or in offices people routinely use flash drives to move files. When a device somehow lands on a desk, the reflex is to plug it in and see what’s inside, especially if it is labeled payroll, contracts, or private.">USB deluje kao stvaran, jeftin i poznat predmet. U kancelariji ili kod kuće ljudi su navikli da fleš koriste za prenos fajlova. Kada uređaj nekako dospeti do stola, refleks je ubaciti ga i videti šta je unutra, posebno ako piše plaće, ugovori ili privatno.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta pojačava rizik" data-en="What increases risk">Šta pojačava rizik</div>
          <ul class="bullets">
            <li data-sr="Etikete i ambalaža kopiraju poznate brendove ili interne oznake firme." data-en="Labels and packaging mimic known brands or internal company marks.">Etikete i ambalaža kopiraju poznate brendove ili interne oznake firme.</li>
            <li data-sr="Više fajlova na disku izgleda kao arhiva posla, ne kao sumnjiv jedan .exe." data-en="Multiple files on the disk look like a work archive, not a single suspicious .exe.">Više fajlova na disku izgleda kao arhiva posla, ne kao sumnjiv jedan .exe.</li>
            <li data-sr="Korporativna kultura naglašava brzinu i pomoć kolegama bez IT provere." data-en="Workplace culture stresses speed and helping colleagues without IT checks.">Korporativna kultura naglašava brzinu i pomoć kolegama bez IT provere.</li>
            <li data-sr="Korisnik veruje da antivirus uvek zaustavlja sve pre nego što šteta nastane." data-en="The user believes antivirus always stops everything before harm occurs.">Korisnik veruje da antivirus uvek zaustavlja sve pre nego što šteta nastane.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Operativni cilj" data-en="Operational goal">Operativni cilj</div>
          <ul class="bullets">
            <li data-sr="Dobiti izvršavanje koda na unutrašnjem računaru bez spoljnog fišing linka." data-en="Achieve code execution on an internal machine without an external phishing link.">Dobiti izvršavanje koda na unutrašnjem računaru bez spoljnog fišing linka.</li>
            <li data-sr="Koristiti legitimne alate ili skripte koje izgledaju kao dokumentacija." data-en="Use legitimate tools or scripts that look like documentation.">Koristiti legitimne alate ili skripte koje izgledaju kao dokumentacija.</li>
            <li data-sr="Proširiti pristup sa jedne radne stanice na mrežu ili oblak." data-en="Expand access from one workstation to the network or cloud.">Proširiti pristup sa jedne radne stanice na mrežu ili oblak.</li>
            <li data-sr="Kombinovati sa mejlom ili pozivom koji objašnjava zašto je disk stigao." data-en="Combine with email or a call explaining why the disk arrived.">Kombinovati sa mejlom ili pozivom koji objašnjava zašto je disk stigao.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching).">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Tok može stati u jedan minut ako meta odmah odbije, ili se proteže ako se malver širi ili traži otkup. Grananje vodi u ransomware, preuzimanje naloga ili lažnu podršku." data-en="The flow can stop in one minute if the target refuses, or extend if malware spreads or ransom is demanded. Branching leads to ransomware, account takeover, or fake support.">Tok može stati u jedan minut ako meta odmah odbije, ili se proteže ako se malver širi ili traži otkup. Grananje vodi u ransomware, preuzimanje naloga ili lažnu podršku.</p>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Postavljanje mamca" data-en="Phase 1 — Placing the bait">Faza 1 — Postavljanje mamca</h3>
        <p data-sr="Napadač bira mesto gde USB deluje uobičajeno: parking ispred zgrade, lift, toalet, štampač, poštansko sanduče ili direktna pošiljka uzorka. Cilj je da uređaj dospeti do osobe sa pristupom unutrašnjoj mreži." data-en="The attacker picks a place where a USB looks normal: parking outside the building, elevator, restroom, printer area, mailbox, or a direct sample shipment. The goal is for the device to reach someone with access to the internal network.">Napadač bira mesto gde USB deluje uobičajeno: parking ispred zgrade, lift, toalet, štampač, poštansko sanduče ili direktna pošiljka uzorka. Cilj je da uređaj dospeti do osobe sa pristupom unutrašnjoj mreži.</p>
        <ul class="bullets">
          <li data-sr="Više kopija mamca povećava šansu da jedan stigne do pravog čitača." data-en="Multiple bait copies raise the chance one reaches the right reader.">Više kopija mamca povećava šansu da jedan stigne do pravog čitača.</li>
          <li data-sr="Ambalaža i tekst na kutiji naglašavaju hitnost ili ekskluzivnost." data-en="Packaging and box text stress urgency or exclusivity.">Ambalaža i tekst na kutiji naglašavaju hitnost ili ekskluzivnost.</li>
          <li data-sr="Lažna pošiljka može imati ime poznatog dobavljača ili kurira." data-en="A fake shipment may use a known supplier or courier name.">Lažna pošiljka može imati ime poznatog dobavljača ili kurira.</li>
          <li data-sr="U kancelariji izgubljeni fleš izgleda kao nečiji lični predmet koji treba vratiti." data-en="In an office a lost flash drive looks like a personal item to return.">U kancelariji izgubljeni fleš izgleda kao nečiji lični predmet koji treba vratiti.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> neko uzima uređaj i donosi ga na mesto gde postoji USB port." data-en="<strong>Phase threshold:</strong> someone picks up the device and brings it where a USB port exists."><strong>Prag faze:</strong> neko uzima uređaj i donosi ga na mesto gde postoji USB port.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Odluka da se ubaci" data-en="Phase 2 — Decision to plug in">Faza 2 — Odluka da se ubaci</h3>
        <p data-sr="Meta balansira između pravila ne ubacuj nepoznato i želje da proveri sadržaj ili pomogne. Često pobedi kratki impuls: samo da vidim ime fajlova. U firmama slabo praćena pravila ili nedostatak jasnog kanala za predaju nepoznatog uređaja pojačavaju rizik." data-en="The target balances do not plug unknown devices against wanting to check contents or help. A short impulse often wins: just see the file names. Weakly enforced policies or no clear channel to hand in unknown devices increase risk at work.">Meta balansira između pravila ne ubacuj nepoznato i želje da proveri sadržaj ili pomogne. Često pobedi kratki impuls: samo da vidim ime fajlova. U firmama slabo praćena pravila ili nedostatak jasnog kanala za predaju nepoznatog uređaja pojačavaju rizik.</p>
        <ul class="bullets">
          <li data-sr="Radoznalost se racionališe kao briga za bezbednost podataka na disku." data-en="Curiosity is rationalized as caring about data safety on the stick.">Radoznalost se racionališe kao briga za bezbednost podataka na disku.</li>
          <li data-sr="Kolege ohrabruju samo ubaci pa skeniraj bez IT uključenja." data-en="Colleagues encourage just plug and scan without involving IT.">Kolege ohrabruju samo ubaci pa skeniraj bez IT uključenja.</li>
          <li data-sr="Lični računar se tretira manje strogo od službenog, iako nosi iste naloge." data-en="A personal PC is treated less strictly than a work one, though it holds the same accounts.">Lični računar se tretira manje strogo od službenog, iako nosi iste naloge.</li>
          <li data-sr="Uređaj izgleda nov ili skup, što smanjuje sumnju." data-en="The device looks new or expensive, which lowers suspicion.">Uređaj izgleda nov ili skup, što smanjuje sumnju.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
            <li><a href="fake-delivery.html" data-sr="Lažna dostava / kurir" data-en="Fake delivery / courier">Lažna dostava / kurir</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> USB uđe u port pre nego što je poreklo provereno kroz zvaničan kanal." data-en="<strong>Phase threshold:</strong> the USB enters a port before origin is verified through an official channel."><strong>Prag faze:</strong> USB uđe u port pre nego što je poreklo provereno kroz zvaničan kanal.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Sistemski prompt i sadržaj diska" data-en="Phase 3 — System prompt and disk contents">Faza 3 — Sistemski prompt i sadržaj diska</h3>
        <p data-sr="Operativni sistem može ponuditi otvaranje foldera, pregled medija ili akciju koja vodi ka fajlovima. Na disku su često imena koja navode na dokumentaciju, slike ili jedan README fajl koji dalje usmerava ka pokretanju." data-en="The OS may offer to open a folder, browse media, or an action that leads to files. The disk often holds names suggesting documents, images, or a README that steers toward running something.">Operativni sistem može ponuditi otvaranje foldera, pregled medija ili akciju koja vodi ka fajlovima. Na disku su često imena koja navode na dokumentaciju, slike ili jedan README fajl koji dalje usmerava ka pokretanju.</p>
        <ul class="bullets">
          <li data-sr="Dvoklik na dokument može zapravo biti skrivena ekstenzija ili prečica." data-en="Double-clicking a document may hide the real extension or be a shortcut.">Dvoklik na dokument može zapravo biti skrivena ekstenzija ili prečica.</li>
          <li data-sr="Office fajlovi mogu tražiti omogućene makroe koji pokreću kod." data-en="Office files may ask for enabled macros that run code.">Office fajlovi mogu tražiti omogućene makroe koji pokreću kod.</li>
          <li data-sr="Lažni PDF ili instalacioni paket kopira ikone poznatih programa." data-en="A fake PDF or installer mimics familiar program icons.">Lažni PDF ili instalacioni paket kopira ikone poznatih programa.</li>
          <li data-sr="Korisnik u ovoj fazi još uvek misli da je u bezbednom pregledu." data-en="The user still believes they are in a safe preview step.">Korisnik u ovoj fazi još uvek misli da je u bezbednom pregledu.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta otvori sadržaj diska i krene da interaguje sa fajlovima, ne samo da ih lista bez klika." data-en="<strong>Phase threshold:</strong> the target opens disk content and starts interacting with files, not only listing without clicks."><strong>Prag faze:</strong> meta otvori sadržaj diska i krene da interaguje sa fajlovima, ne samo da ih lista bez klika.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Prag: izvršavanje i dozvole" data-en="Phase 4 — Threshold: execution and approvals">Faza 4 — Prag: izvršavanje i dozvole</h3>
        <p data-sr="Jedan klik pokreće lanac: instalacija, skripta ili korišćenje ranjivosti. Sistem može tražiti administratorsku potvrdu. U tom trenutku korisnik potvrđuje ono što antivirus ili politika inače blokiraju." data-en="One click starts a chain: install, script, or exploit use. The system may ask for administrator approval. At that moment the user confirms what antivirus or policy would normally block.">Jedan klik pokreće lanac: instalacija, skripta ili korišćenje ranjivosti. Sistem može tražiti administratorsku potvrdu. U tom trenutku korisnik potvrđuje ono što antivirus ili politika inače blokiraju.</p>
        <ul class="bullets">
          <li data-sr="Malver se instalira u pozadini dok meta vidi običan dokument ili prazan ekran." data-en="Malware installs in the background while the target sees a normal document or blank screen.">Malver se instalira u pozadini dok meta vidi običan dokument ili prazan ekran.</li>
          <li data-sr="Keylogger ili RAT omogućavaju daljinski pristup i kasnije fišing korake." data-en="A keylogger or RAT enables remote access and later phishing steps.">Keylogger ili RAT omogućavaju daljinski pristup i kasnije fišing korake.</li>
          <li data-sr="Kripto‑malver šifruje fajlove i ostavlja poruku o otkupu." data-en="Crypto-malware encrypts files and leaves a ransom note.">Kripto‑malver šifruje fajlove i ostavlja poruku o otkupu.</li>
          <li data-sr="Uređaj može emulirati tastaturu i uneti komande brže nego što korisnik reaguje." data-en="The device may emulate a keyboard and type commands faster than the user reacts.">Uređaj može emulirati tastaturu i uneti komande brže nego što korisnik reaguje.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="fake-update-scam.html" data-sr="Lažni update" data-en="Fake update scam">Lažni update</a></li>
            <li><a href="malicious-app-scam.html" data-sr="Zlonamerna aplikacija" data-en="Malicious app scam">Zlonamerna aplikacija</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> kod se izvršava ili dobija trajnu dozvolu na sistemu." data-en="<strong>Phase threshold:</strong> code runs or gains lasting permission on the system."><strong>Prag faze:</strong> kod se izvršava ili dobija trajnu dozvolu na sistemu.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Širenje i krađa u pozadini" data-en="Phase 5 — Spread and background theft">Faza 5 — Širenje i krađa u pozadini</h3>
        <p data-sr="Posle uspešnog ulaza malver koristi nalog i mrežu: kopiranje fajlova, kredencijala iz pregledača, pristup deljenim diskovima ili slanje mejlova unutar organizacije. Korisnik možda ne vidi simptome danima." data-en="After successful entry, malware uses the account and network: copying files, browser credentials, shared drives, or sending internal mail. The user may see no symptoms for days.">Posle uspešnog ulaza malver koristi nalog i mrežu: kopiranje fajlova, kredencijala iz pregledača, pristup deljenim diskovima ili slanje mejlova unutar organizacije. Korisnik možda ne vidi simptome danima.</p>
        <ul class="bullets">
          <li data-sr="Horizontalno kretanje koristi iste lozinke i otvorene sesije." data-en="Lateral movement reuses passwords and open sessions.">Horizontalno kretanje koristi iste lozinke i otvorene sesije.</li>
          <li data-sr="Fišing mejlovi sa unutrašnjeg naloga prolaze bolje nego spoljni." data-en="Phishing emails from an internal account succeed better than external ones.">Fišing mejlovi sa unutrašnjeg naloga prolaze bolje nego spoljni.</li>
          <li data-sr="Osetljivi podaci odlaze u oblak ili na komandni server napadača." data-en="Sensitive data moves to the cloud or an attacker command server.">Osetljivi podaci odlaze u oblak ili na komandni server napadača.</li>
          <li data-sr="Backup se infiltrira ako je dostupan sa iste stanice." data-en="Backups are hit if reachable from the same machine.">Backup se infiltrira ako je dostupan sa iste stanice.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> organizacija tek tada detektuje anomaliju, a izvor ostaje nepoznat USB." data-en="<strong>Phase threshold:</strong> the organization detects an anomaly while the source remains an unknown USB."><strong>Prag faze:</strong> organizacija tek tada detektuje anomaliju, a izvor ostaje nepoznat USB.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Otkup, lažna podrška ili drugi talas" data-en="Phase 6 — Ransom, fake support, or a second wave">Faza 6 — Otkup, lažna podrška ili drugi talas</h3>
        <p data-sr="Kada šteta postane vidljiva, meta može dobiti uputstvo za plaćanje kriptovalutom, poziv IT podrške koji traži daljinski pristup ili mejl sa novim alatom za čišćenje. To su česti nastavci istog incidenta, ne nezavisna pomoć." data-en="When damage becomes visible, the target may get crypto payment instructions, an IT support call requesting remote access, or an email with a new cleanup tool. These are common continuations of the same incident, not independent help.">Kada šteta postane vidljiva, meta može dobiti uputstvo za plaćanje kriptovalutom, poziv IT podrške koji traži daljinski pristup ili mejl sa novim alatom za čišćenje. To su česti nastavci istog incidenta, ne nezavisna pomoć.</p>
        <ul class="bullets">
          <li data-sr="Otkupni zahtev koristi rokove i pritisak da se plati pre provere backupa." data-en="Ransom demands use deadlines and pressure to pay before backups are checked.">Otkupni zahtev koristi rokove i pritisak da se plati pre provere backupa.</li>
          <li data-sr="Lažna podrška traži instalaciju daljinskog alata i produbljuje pristup." data-en="Fake support asks for remote-tool installation and deepens access.">Lažna podrška traži instalaciju daljinskog alata i produbljuje pristup.</li>
          <li data-sr="Drugi USB ili link u mejlu nastavlja istu šemu pod novim izgovorom." data-en="A second USB or link in email continues the scheme under a new excuse.">Drugi USB ili link u mejlu nastavlja istu šemu pod novim izgovorom.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="ransomware-orgs.html" data-sr="Ransomware napadi na organizacije" data-en="Ransomware attacks on organizations">Ransomware napadi na organizacije</a></li>
            <li><a href="tech-support-scam.html" data-sr="Lažna tehnička podrška" data-en="Tech support scam">Lažna tehnička podrška</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta prihvata novu uplatu ili novi alat umesto zvaničnog incident odgovora." data-en="<strong>Phase threshold:</strong> the target accepts a new payment or tool instead of official incident response."><strong>Prag faze:</strong> meta prihvata novu uplatu ili novi alat umesto zvaničnog incident odgovora.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="USB pronađen na parkingu, u liftu ili kupatilu bez lanca za vlasnika." data-en="A USB found in a parking lot, elevator, or restroom with no owner trail.">USB pronađen na parkingu, u liftu ili kupatilu bez lanca za vlasnika.</li>
        <li data-sr="Pošiljka sa flešom bez porudžbine ili očekivanog pošiljoca." data-en="A shipment with a flash drive you did not order or from an unexpected sender.">Pošiljka sa flešom bez porudžbine ili očekivanog pošiljoca.</li>
        <li data-sr="Etiketa sa rečima poverljivo, hitno ili samo za direktora." data-en="A label with words like confidential, urgent, or directors only.">Etiketa sa rečima poverljivo, hitno ili samo za direktora.</li>
        <li data-sr="Na disku postoji jedan fajl koji objašnjava kako da se otvori ostalo." data-en="The disk has one file that explains how to open the rest.">Na disku postoji jedan fajl koji objašnjava kako da se otvori ostalo.</li>
        <li data-sr="Office dokument traži omogućavanje makroa." data-en="An Office document asks to enable macros.">Office dokument traži omogućavanje makroa.</li>
        <li data-sr="Windows ili drugi OS traži administratorsku potvrdu za nepoznat program sa USB-a." data-en="Windows or another OS asks for admin approval for an unknown program from USB.">Windows ili drugi OS traži administratorsku potvrdu za nepoznat program sa USB-a.</li>
        <li data-sr="Ime fajla završava dvostrukom ekstenzijom ili izgleda kao slika a pokreće se kao program." data-en="The file name ends with a double extension or looks like an image but runs as a program.">Ime fajla završava dvostrukom ekstenzijom ili izgleda kao slika a pokreće se kao program.</li>
        <li data-sr="Kolege ili nepoznati kontakt naglašavaju da se USB mora odmah pogledati." data-en="Colleagues or unknown contacts stress the USB must be checked immediately.">Kolege ili nepoznati kontakt naglašavaju da se USB mora odmah pogledati.</li>
        <li data-sr="Nakon ubacivanja računar uspori, disk počne intenzivno da radi ili antivirus upozori." data-en="After insertion the PC slows, the disk works hard, or antivirus warns.">Nakon ubacivanja računar uspori, disk počne intenzivno da radi ili antivirus upozori.</li>
        <li data-sr="Pojavi se poruka o otkupu ili zaključanim fajlovima bez drugog objašnjenja." data-en="A ransom or locked-files message appears with no other explanation.">Pojavi se poruka o otkupu ili zaključanim fajlovima bez drugog objašnjenja.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <ol class="steps">
        <li data-sr="Da li znaš tačno ko je poslao ili ostavio uređaj i možeš li to potvrditi drugim kanalom?" data-en="Do you know exactly who sent or left the device and can you confirm via another channel?">Da li znaš tačno ko je poslao ili ostavio uređaj i možeš li to potvrditi drugim kanalom?</li>
        <li data-sr="Da li firma ima proceduru za predaju pronađenog USB-a IT ili bezbednosti?" data-en="Does the company have a procedure to hand found USBs to IT or security?">Da li firma ima proceduru za predaju pronađenog USB-a IT ili bezbednosti?</li>
        <li data-sr="Da li antivirus i politika uređaja blokiraju Autoplay i nepoznate izvore?" data-en="Do antivirus and device policy block Autoplay and unknown sources?">Da li antivirus i politika uređaja blokiraju Autoplay i nepoznate izvore?</li>
        <li data-sr="Da li možeš sadržaj proveriti na izolovanoj mašini koja nije na produkcijskoj mreži?" data-en="Can content be checked on an isolated machine not on production networks?">Da li možeš sadržaj proveriti na izolovanoj mašini koja nije na produkcijskoj mreži?</li>
        <li data-sr="Da li su ekstenzije fajlova vidljive u podešavanjima pregledača fajlova?" data-en="Are file extensions visible in file explorer settings?">Da li su ekstenzije fajlova vidljive u podešavanjima pregledača fajlova?</li>
        <li data-sr="Da li makroi u Office-u ostaju isključeni kao podrazumevano?" data-en="Are Office macros disabled by default?">Da li makroi u Office-u ostaju isključeni kao podrazumevano?</li>
        <li data-sr="Da li posle ubacivanja pratiš neobične mrežne konekcije ili nove programe u autostartu?" data-en="After insertion, do you watch for odd network connections or new autostart programs?">Da li posle ubacivanja pratiš neobične mrežne konekcije ili nove programe u autostartu?</li>
        <li data-sr="Da li znaš kome prijaviti incident pre nego što pokušaš sam da popraviš?" data-en="Do you know whom to report to before trying to fix it yourself?">Da li znaš kome prijaviti incident pre nego što pokušaš sam da popraviš?</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja pre ubacivanja" data-en="Checklist: 12 questions before inserting">Checklista: 12 pitanja pre ubacivanja</h2>
      <ul class="bullets">
        <li data-sr="Da li sam naručio ovaj uređaj ili paket?" data-en="Did I order this device or package?">Da li sam naručio ovaj uređaj ili paket?</li>
        <li data-sr="Da li pošiljalac postoji u našem registru dobavljača?" data-en="Does the sender exist in our supplier register?">Da li pošiljalac postoji u našem registru dobavljača?</li>
        <li data-sr="Da li bih ovaj USB poklonio nekome bez razmišljanja, pa zašto bih ga ja ubacio?" data-en="Would I give this USB gift to someone blindly—why would I plug it in myself?">Da li bih ovaj USB poklonio nekome bez razmišljanja, pa zašto bih ga ja ubacio?</li>
        <li data-sr="Da li je pronađeni fleš vredan predati IT umesto otvoriti?" data-en="Should a found stick go to IT instead of being opened?">Da li je pronađeni fleš vredan predati IT umesto otvoriti?</li>
        <li data-sr="Da li me neko tera da reagujem odmah bez konsultacije?" data-en="Is someone pushing me to act immediately without consultation?">Da li me neko tera da reagujem odmah bez konsultacije?</li>
        <li data-sr="Da li na disku postoji bilo šta što zahteva administrativnu potvrdu?" data-en="Does anything on the disk demand administrative approval?">Da li na disku postoji bilo šta što zahteva administrativnu potvrdu?</li>
        <li data-sr="Da li fajl traži makroe ili sadržaj iz spoljnog izvora?" data-en="Does a file ask for macros or content from an external source?">Da li fajl traži makroe ili sadržaj iz spoljnog izvora?</li>
        <li data-sr="Da li je ovo lični ili službeni računar sa pristupom osetljivim podacima?" data-en="Is this a personal or work PC with access to sensitive data?">Da li je ovo lični ili službeni računar sa pristupom osetljivim podacima?</li>
        <li data-sr="Da li postoji backup koji nije stalno priključen na isti računar?" data-en="Is there a backup not always attached to the same PC?">Da li postoji backup koji nije stalno priključen na isti računar?</li>
        <li data-sr="Da li bih isti korak uradio da je IT gledao preko ramena?" data-en="Would I take the same step if IT were watching?">Da li bih isti korak uradio da je IT gledao preko ramena?</li>
        <li data-sr="Da li je USB povezan sa nedavnim događajem (nagrada, anketa, besplatan uzorak)?" data-en="Is the USB tied to a recent event (prize, survey, free sample)?">Da li je USB povezan sa nedavnim događajem (nagrada, anketa, besplatan uzorak)?</li>
        <li data-sr="Da li mogu prvo pozvati pošiljaoca na broj sa zvaničnog sajta, ne sa naljepnice?" data-en="Can I call the sender on a number from the official site, not the label?">Da li mogu prvo pozvati pošiljaoca na broj sa zvaničnog sajta, ne sa naljepnice?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Isključi USB odmah bez otvaranja dodatnih fajlova." data-en="Eject the USB immediately without opening more files.">Isključi USB odmah bez otvaranja dodatnih fajlova.</li>
        <li data-sr="Ne restartuj sistem da prođe ako antivirus ili OS upozoravaju." data-en="Do not reboot to make it pass if antivirus or the OS warns.">Ne restartuj sistem da prođe ako antivirus ili OS upozoravaju.</li>
        <li data-sr="Javi IT ili bezbednosnom timu i ostavi uređaj njima, ne baci ga pre istrage." data-en="Notify IT or security and leave the device with them; do not discard it pre-investigation.">Javi IT ili bezbednosnom timu i ostavi uređaj njima, ne baci ga pre istrage.</li>
        <li data-sr="Promeni lozinke sa drugog, čistog uređaja za naloge koje si koristio na tom računaru." data-en="Change passwords from another clean device for accounts used on that PC.">Promeni lozinke sa drugog, čistog uređaja za naloge koje si koristio na tom računaru.</li>
        <li data-sr="Proveri aktivne sesije i obavesti kontakte ako je mejl mogao biti kompromitovan." data-en="Review active sessions and notify contacts if email may be compromised.">Proveri aktivne sesije i obavesti kontakte ako je mejl mogao biti kompromitovan.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Odakle tačno USB dolazi i da li postoji potvrda pošiljaoca?" data-en="Where exactly does the USB come from and is there sender confirmation?">Odakle tačno USB dolazi i da li postoji potvrda pošiljaoca?</li>
            <li data-sr="Da li je neko već kliknuo na fajl ili dao administratorsku potvrdu?" data-en="Has anyone already clicked a file or given admin approval?">Da li je neko već kliknuo na fajl ili dao administratorsku potvrdu?</li>
            <li data-sr="Da li je računar na poslovnoj mreži sa pristupom zajedničkim diskovima?" data-en="Is the PC on a business network with shared drive access?">Da li je računar na poslovnoj mreži sa pristupom zajedničkim diskovima?</li>
            <li data-sr="Da li postoje backupi i da li su odvojeni od tog uređaja?" data-en="Do backups exist and are they separate from that machine?">Da li postoje backupi i da li su odvojeni od tog uređaja?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Ne otvaramo nepoznat USB na produkciji; predajemo ga IT po proceduri." data-en="We do not open unknown USBs on production; we hand them to IT per procedure.">Ne otvaramo nepoznat USB na produkciji; predajemo ga IT po proceduri.</li>
            <li data-sr="Jedan klik na pogrešnom mestu može inficirati celu firmu." data-en="One wrong click can infect the whole company.">Jedan klik na pogrešnom mestu može inficirati celu firmu.</li>
            <li data-sr="Prvo izolujemo uređaj i nalog, pa tek onda čitamo sadržaj ako IT odobri." data-en="First we isolate device and account, then we read content only if IT approves.">Prvo izolujemo uređaj i nalog, pa tek onda čitamo sadržaj ako IT odobri.</li>
            <li data-sr="Ako postoji sumnja, backup i prijava imaju prednost pred radoznalošću." data-en="If there is doubt, backup and reporting beat curiosity.">Ako postoji sumnja, backup i prijava imaju prednost pred radoznalošću.</li>
          </ul>
        </div>
      </div>
    </section>
`
};
