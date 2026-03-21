window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["ransomware-orgs"] = {
  raw_html: `
    <!-- 1) UVOD -->
    <section class="card">
      <h2 data-sr="Uvod: kako radi ransomware napad na organizacije" data-en="Introduction: how ransomware attacks organizations">
        Uvod: kako radi ransomware napad na organizacije
      </h2>

      <p
        data-sr="Ransomware napadi na organizacije kombinuju tehničku kompromitaciju, krađu podataka i finansijsku ucenu. Napadač ne enkriptuje sisteme odmah — prvo se širi mrežom, mapira vredne resurse i eksfiltrira podatke. Tek kada je pozicija učvršćena, pokreće se enkripcija. Otkup se traži za dva cilja: ključ za dekripciju i ćutanje o ukradenim podacima."
        data-en="Ransomware attacks on organizations combine technical compromise, data theft, and financial extortion. The attacker does not encrypt systems immediately — they first spread through the network, map valuable resources, and exfiltrate data. Encryption only starts once the position is consolidated. Ransom is demanded for two goals: the decryption key and silence about stolen data."
      >Ransomware napadi na organizacije kombinuju tehničku kompromitaciju, krađu podataka i finansijsku ucenu. Napadač ne enkriptuje sisteme odmah — prvo se širi mrežom, mapira vredne resurse i eksfiltrira podatke. Tek kada je pozicija učvršćena, pokreće se enkripcija. Otkup se traži za dva cilja: ključ za dekripciju i ćutanje o ukradenim podacima.</p>

      <p
        data-sr="Moderna ransomware šema ima dve ključne tačke preloma: (1) inicijalni pristup, koji počinje phishingom, kompromitovanim kredencijalima ili exploit-om nezakrpljenog sistema, i (2) napomena o otkupu, koja aktivira krizu i pritisak na upravu. Između ove dve tačke napadač može provesti dane, nedelje ili mesece neprimećen u sistemu."
        data-en="Modern ransomware has two key breakpoints: (1) initial access, which starts with phishing, compromised credentials, or an exploit on an unpatched system, and (2) the ransom note, which triggers crisis and pressure on management. Between these two points, the attacker can spend days, weeks, or months undetected in the system."
      >Moderna ransomware šema ima dve ključne tačke preloma: (1) inicijalni pristup, koji počinje phishingom, kompromitovanim kredencijalima ili exploit-om nezakrpljenog sistema, i (2) napomena o otkupu, koja aktivira krizu i pritisak na upravu. Između ove dve tačke napadač može provesti dane, nedelje ili mesece neprimećen u sistemu.</p>

      <div class="callout"
        data-sr="<strong>Model:</strong> inicijalni pristup → lateralno kretanje → recon mreže → eksfiltracija podataka → enkripcija sistema → napomena o otkupu → rok i pritisak → pregovori → isplata ili objava podataka → talas prevare povraćaja."
        data-en="<strong>Model:</strong> initial access → lateral movement → network recon → data exfiltration → system encryption → ransom note → deadline and pressure → negotiations → payment or data disclosure → recovery wave."
      ><strong>Model:</strong> inicijalni pristup → lateralno kretanje → recon mreže → eksfiltracija podataka → enkripcija sistema → napomena o otkupu → rok i pritisak → pregovori → isplata ili objava podataka → talas prevare povraćaja.</div>

      <div class="callout"
        data-sr="<strong>Prag:</strong> napomena o otkupu na sistemima ili otkrivanje eksfiltracije podataka. Organizacija ulazi u operativnu krizu bez jasnog izlaza dok se ne utvrdi obim zaraze."
        data-en="<strong>Threshold:</strong> ransom note on systems or discovery of data exfiltration. The organization enters operational crisis without a clear exit until the infection scope is determined."
      ><strong>Prag:</strong> napomena o otkupu na sistemima ili otkrivanje eksfiltracije podataka. Organizacija ulazi u operativnu krizu bez jasnog izlaza dok se ne utvrdi obim zaraze.</div>
    </section>

    <!-- 2) KAKO GENERALNO RADI -->
    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika pristupa i pritiska" data-en="How it works: access and pressure mechanics">
        Kako generalno radi: mehanika pristupa i pritiska
      </h2>

      <p
        data-sr="Ransomware grupe funkcionišu kao poslovne operacije. Postoje specijalizovani timovi: Initial Access Brokers (IAB) koji prodaju pristup mrežama, ransomware-as-a-service (RaaS) operatori koji iznajmljuju malver, i affiliates koji izvršavaju napade. Otkupnine se kreću od desetina hiljada do desetina miliona dolara, zavisno od veličine organizacije i kriticnosti podataka."
        data-en="Ransomware groups operate as business operations. There are specialized teams: Initial Access Brokers (IAB) who sell network access, ransomware-as-a-service (RaaS) operators who rent malware, and affiliates who execute attacks. Ransoms range from tens of thousands to tens of millions of dollars depending on organization size and data criticality."
      >Ransomware grupe funkcionišu kao poslovne operacije. Postoje specijalizovani timovi: Initial Access Brokers (IAB) koji prodaju pristup mrežama, ransomware-as-a-service (RaaS) operatori koji iznajmljuju malver, i affiliates koji izvršavaju napade. Otkupnine se kreću od desetina hiljada do desetina miliona dolara, zavisno od veličine organizacije i kriticnosti podataka.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gradi pritisak na organizaciju" data-en="What builds pressure on the organization">Šta gradi pritisak na organizaciju</div>
          <ul class="bullets">
            <li data-sr="enkripcija kritičnih sistema i gubitak operativnog pristupa." data-en="encryption of critical systems and loss of operational access.">enkripcija kritičnih sistema i gubitak operativnog pristupa.</li>
            <li data-sr="kratki rokovi sa pretnjom objavom podataka na leak site-u." data-en="short deadlines with threats of publishing data on a leak site.">kratki rokovi sa pretnjom objavom podataka na leak site-u.</li>
            <li data-sr="dokazi eksfiltracije kao potvrda da napadač poseduje podatke." data-en="exfiltration evidence as proof that the attacker holds the data.">dokazi eksfiltracije kao potvrda da napadač poseduje podatke.</li>
            <li data-sr="kompromitovani backupi koji eliminišu jednostavnu obnovu." data-en="compromised backups that eliminate simple recovery.">kompromitovani backupi koji eliminišu jednostavnu obnovu.</li>
            <li data-sr="eskalacija: kontakt sa medijima, regulatorima, partnerima." data-en="escalation: contact with media, regulators, business partners.">eskalacija: kontakt sa medijima, regulatorima, partnerima.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Kako se uvodi finansijski zahtev" data-en="How the financial demand is introduced">Kako se uvodi finansijski zahtev</div>
          <ul class="bullets">
            <li data-sr="napomena o otkupu sadrži kripto adresu i rok za uplatu." data-en="the ransom note contains a crypto address and payment deadline.">napomena o otkupu sadrži kripto adresu i rok za uplatu.</li>
            <li data-sr="portal za pregovore dostupan samo kroz Tor mrežu." data-en="negotiation portal accessible only through the Tor network.">portal za pregovore dostupan samo kroz Tor mrežu.</li>
            <li data-sr="pregovarač sa popustom ako se isplati brzo." data-en="a negotiator offering a discount for quick payment.">pregovarač sa popustom ako se isplati brzo.</li>
            <li data-sr="demo dekripcija jednog fajla kao dokaz da ključ postoji." data-en="demo decryption of one file as proof the key exists.">demo dekripcija jednog fajla kao dokaz da ključ postoji.</li>
            <li data-sr="pretnja objavom pre isteka roka radi pojačavanja pritiska." data-en="disclosure threat before deadline to heighten pressure.">pretnja objavom pre isteka roka radi pojačavanja pritiska.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 3) HRONOLOŠKI TOK -->
    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)." data-en="Timeline (phases + evolutions).">
        Hronološki tok (faze + evolucije)
      </h2>

      <p class="muted"
        data-sr="Faze su prikazane kao operativni tok: šta meta vidi, šta se traži, koje fraze/zahtevi guraju sledeći korak, gde se pali grananje u druge napade ili prevare."
        data-en="Phases are shown as an operational flow: what the target sees, what is demanded, which requests push the next step, and where branching into other attacks or scams occurs."
      >Faze su prikazane kao operativni tok: šta meta vidi, šta se traži, koje fraze/zahtevi guraju sledeći korak, gde se pali grananje u druge napade ili prevare.</p>

      <!-- FAZA 1 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Inicijalni pristup" data-en="Phase 1 — Initial access">
          Faza 1 — Inicijalni pristup
        </h3>

        <p
          data-sr="Napadač ulazi u mrežu organizacije kroz jedan od tri glavna vektora: phishing imejl sa malverom ili link ka lažnoj stranici, kompromitovani kredencijali kupljeni na dark webu ili ukradeni kroz raniji napad, ili exploit ranjivosti na javno dostupnim sistemima (VPN, RDP, email server)."
          data-en="The attacker enters the organization's network through one of three main vectors: a phishing email with malware or a link to a fake page, compromised credentials purchased on the dark web or stolen through an earlier attack, or an exploit targeting vulnerabilities on public-facing systems (VPN, RDP, email server)."
        >Napadač ulazi u mrežu organizacije kroz jedan od tri glavna vektora: phishing imejl sa malverom ili link ka lažnoj stranici, kompromitovani kredencijali kupljeni na dark webu ili ukradeni kroz raniji napad, ili exploit ranjivosti na javno dostupnim sistemima (VPN, RDP, email server).</p>

        <ul class="bullets">
          <li data-sr="signal: zaposleni prijavljuje čudno ponašanje računara ili neočekivane greške." data-en="signal: employee reports strange computer behavior or unexpected errors.">signal: zaposleni prijavljuje čudno ponašanje računara ili neočekivane greške.</li>
          <li data-sr="signal: neovlašćeni login pokušaji ili uspešne prijave van radnog vremena." data-en="signal: unauthorized login attempts or successful logins outside working hours.">signal: neovlašćeni login pokušaji ili uspešne prijave van radnog vremena.</li>
          <li data-sr="signal: skeniranje mreže ili neobičan saobraćaj iz interne mreže." data-en="signal: network scanning or unusual traffic originating from within the internal network.">signal: skeniranje mreže ili neobičan saobraćaj iz interne mreže.</li>
        </ul>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
            <li><a href="business-email-compromise.html" data-sr="Kompromitovanje poslovnog imejla (BEC)" data-en="Business email compromise (BEC)">Kompromitovanje poslovnog imejla (BEC)</a></li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> napadač ima stabilan, neotkriven pristup barem jednom sistemu unutar mreže."
          data-en="<strong>Threshold:</strong> attacker has stable, undetected access to at least one system inside the network."
        ><strong>Prag faze:</strong> napadač ima stabilan, neotkriven pristup barem jednom sistemu unutar mreže.</div>
      </article>

      <!-- FAZA 2 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Lateralno kretanje i recon" data-en="Phase 2 — Lateral movement and recon">
          Faza 2 — Lateralno kretanje i recon
        </h3>

        <p
          data-sr="Nakon inicijalnog pristupa, napadač se širi mrežom u potraži za domenskim kontrolerima, serverima sa podacima i backup sistemima. Koristi legitimne administrativne alate da bi izbegao detekciju. Cilj je mapirati celu mrežu pre nego što se pokrene enkripcija."
          data-en="After initial access, the attacker spreads through the network in search of domain controllers, data servers, and backup systems. Legitimate administrative tools are used to avoid detection. The goal is to map the entire network before launching encryption."
        >Nakon inicijalnog pristupa, napadač se širi mrežom u potraži za domenskim kontrolerima, serverima sa podacima i backup sistemima. Koristi legitimne administrativne alate da bi izbegao detekciju. Cilj je mapirati celu mrežu pre nego što se pokrene enkripcija.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Šta napadač radi" data-en="What the attacker does">Šta napadač radi</div>
            <ul class="bullets">
              <li data-sr="eskalacija privilegija ka domenskom adminu." data-en="privilege escalation toward domain admin.">eskalacija privilegija ka domenskom adminu.</li>
              <li data-sr="deaktivacija antivirusnih alata i security agenta." data-en="disabling antivirus tools and security agents.">deaktivacija antivirusnih alata i security agenta.</li>
              <li data-sr="kompromitovanje backup sistema da eliminiše plan B." data-en="compromising backup systems to eliminate the recovery fallback.">kompromitovanje backup sistema da eliminiše plan B.</li>
              <li data-sr="instalacija persistentnih backdoor-a na ključnim sistemima." data-en="installing persistent backdoors on key systems.">instalacija persistentnih backdoor-a na ključnim sistemima.</li>
            </ul>
          </div>

          <div class="phase">
            <div class="label" data-sr="Šta organizacija obično propušta" data-en="What the organization typically misses">Šta organizacija obično propušta</div>
            <ul class="bullets">
              <li data-sr="tiho skeniranje mreže koje izgleda kao normalni saobraćaj." data-en="quiet network scanning that resembles normal traffic.">tiho skeniranje mreže koje izgleda kao normalni saobraćaj.</li>
              <li data-sr="korišćenje legitimnih alata poput PsExec, WMI, PowerShell." data-en="use of legitimate tools like PsExec, WMI, PowerShell.">korišćenje legitimnih alata poput PsExec, WMI, PowerShell.</li>
              <li data-sr="pristup backup sistemu izvan normalnog radnog toka." data-en="access to backup systems outside normal workflows.">pristup backup sistemu izvan normalnog radnog toka.</li>
              <li data-sr="neobična lateralna konekcija između sistema koji inače ne komuniciraju." data-en="unusual lateral connections between systems that normally do not communicate.">neobična lateralna konekcija između sistema koji inače ne komuniciraju.</li>
            </ul>
          </div>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> napadač ima admin pristup domenskom kontroleru i zna gde su backupi."
          data-en="<strong>Threshold:</strong> attacker has admin access to the domain controller and knows where backups are."
        ><strong>Prag faze:</strong> napadač ima admin pristup domenskom kontroleru i zna gde su backupi.</div>
      </article>

      <!-- FAZA 3 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Eksfiltracija podataka" data-en="Phase 3 — Data exfiltration">
          Faza 3 — Eksfiltracija podataka
        </h3>

        <p
          data-sr="Pre nego što se enkriptuju fajlovi, napadač izvlači kopiju vrednih podataka na spoljne servere. Ovo je osnova dvostruke ucene: čak i ako organizacija obnovi sisteme iz backupa, napadač i dalje poseduje podatke i može ih objaviti. Eksfiltracija se odvija polako da ne aktivira anomaly detection."
          data-en="Before files are encrypted, the attacker copies valuable data to external servers. This is the basis of double extortion: even if the organization restores systems from backup, the attacker still holds the data and can publish it. Exfiltration happens slowly to avoid triggering anomaly detection."
        >Pre nego što se enkriptuju fajlovi, napadač izvlači kopiju vrednih podataka na spoljne servere. Ovo je osnova dvostruke ucene: čak i ako organizacija obnovi sisteme iz backupa, napadač i dalje poseduje podatke i može ih objaviti. Eksfiltracija se odvija polako da ne aktivira anomaly detection.</p>

        <ul class="bullets">
          <li data-sr="finansijski izveštaji, ugovori, podaci o zaposlenima, klijentima." data-en="financial reports, contracts, employee and client data.">finansijski izveštaji, ugovori, podaci o zaposlenima, klijentima.</li>
          <li data-sr="intelektualna svojina, planovi razvoja, tehničke specifikacije." data-en="intellectual property, development plans, technical specifications.">intelektualna svojina, planovi razvoja, tehničke specifikacije.</li>
          <li data-sr="lični podaci koji podležu GDPR ili lokalnim propisima o zaštiti podataka." data-en="personal data subject to GDPR or local data protection regulations.">lični podaci koji podležu GDPR ili lokalnim propisima o zaštiti podataka.</li>
          <li data-sr="korisničke baze podataka sa lozinkama, karticama, nalozima." data-en="user databases containing passwords, card details, accounts.">korisničke baze podataka sa lozinkama, karticama, nalozima.</li>
        </ul>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="data-breach-extortion.html" data-sr="Ucena nakon krađe podataka" data-en="Data breach extortion">Ucena nakon krađe podataka</a></li>
            <li><a href="identity-theft.html" data-sr="Krađa identiteta" data-en="Identity theft">Krađa identiteta</a></li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> napadač poseduje dovoljno podataka da objavi javno obelodanjivanje koje bi prouzrokovalo regulatornu, reputacionu ili komercijalnu štetu."
          data-en="<strong>Threshold:</strong> attacker holds enough data to publish a disclosure that would cause regulatory, reputational, or commercial damage."
        ><strong>Prag faze:</strong> napadač poseduje dovoljno podataka da objavi javno obelodanjivanje koje bi prouzrokovalo regulatornu, reputacionu ili komercijalnu štetu.</div>
      </article>

      <!-- FAZA 4 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Enkripcija sistema" data-en="Phase 4 — System encryption">
          Faza 4 — Enkripcija sistema
        </h3>

        <p
          data-sr="Napadač istovremeno enkriptuje fajlove na svim pristupačnim sistemima. Napad se odvija brzo, često noću ili za vreme praznika kada je nadzor najmanji. Backup sistemi su već kompromitovani ili uklonjeni. Napomena o otkupu se pojavljuje na svakom kompromitovanom uređaju."
          data-en="The attacker simultaneously encrypts files across all accessible systems. The attack happens quickly, often at night or during holidays when monitoring is minimal. Backup systems are already compromised or deleted. The ransom note appears on every compromised device."
        >Napadač istovremeno enkriptuje fajlove na svim pristupačnim sistemima. Napad se odvija brzo, često noću ili za vreme praznika kada je nadzor najmanji. Backup sistemi su već kompromitovani ili uklonjeni. Napomena o otkupu se pojavljuje na svakom kompromitovanom uređaju.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Šta organizacija vidi" data-en="What the organization sees">Šta organizacija vidi</div>
            <ul class="bullets">
              <li data-sr="sistemi su nedostupni, fajlovi imaju nepoznate ekstenzije." data-en="systems are inaccessible, files have unknown extensions.">sistemi su nedostupni, fajlovi imaju nepoznate ekstenzije.</li>
              <li data-sr="napomena o otkupu na desktopovima i u folderima." data-en="ransom notes on desktops and inside folders.">napomena o otkupu na desktopovima i u folderima.</li>
              <li data-sr="backupi su oštećeni, prazni ili enkriptovani." data-en="backups are corrupted, empty, or encrypted.">backupi su oštećeni, prazni ili enkriptovani.</li>
              <li data-sr="operacije stoje: email, ERP, baze podataka, produkcija." data-en="operations halt: email, ERP, databases, production.">operacije stoje: email, ERP, baze podataka, produkcija.</li>
            </ul>
          </div>

          <div class="phase">
            <div class="label" data-sr="Šta napomena o otkupu sadrži" data-en="What the ransom note contains">Šta napomena o otkupu sadrži</div>
            <ul class="bullets">
              <li data-sr="kripto adresu za uplatu i iznos otkupa." data-en="a crypto address for payment and the ransom amount.">kripto adresu za uplatu i iznos otkupa.</li>
              <li data-sr="rok za uplatu (najčešće 48–72 sata uz pretnju povećanja iznosa)." data-en="a payment deadline (typically 48–72 hours with a threat of increasing the amount).">rok za uplatu (najčešće 48–72 sata uz pretnju povećanja iznosa).</li>
              <li data-sr="link ka Tor portalu za pregovore i komunikaciju." data-en="a link to a Tor portal for negotiations and communication.">link ka Tor portalu za pregovore i komunikaciju.</li>
              <li data-sr="upozorenje da će podaci biti objavljeni ako se ne plati." data-en="a warning that data will be published if payment is not made.">upozorenje da će podaci biti objavljeni ako se ne plati.</li>
            </ul>
          </div>
        </div>
      </article>

      <!-- FAZA 5 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Napomena o otkupu i prva kriza" data-en="Phase 5 — Ransom note and initial crisis">
          Faza 5 — Napomena o otkupu i prva kriza
        </h3>

        <p
          data-sr="Organizacija ulazi u akutnu krizu. Upravljački tim, IT, pravnici i odeljenje za komunikaciju moraju brzo doneti odluke pod pritiskom i nepotpunim informacijama. Napadač to zna i koristi kratke rokove da spreči smirenu procenu situacije i konzultacije sa stručnjacima."
          data-en="The organization enters acute crisis. The management team, IT, lawyers, and communications must make rapid decisions under pressure with incomplete information. The attacker knows this and uses short deadlines to prevent calm assessment and expert consultation."
        >Organizacija ulazi u akutnu krizu. Upravljački tim, IT, pravnici i odeljenje za komunikaciju moraju brzo doneti odluke pod pritiskom i nepotpunim informacijama. Napadač to zna i koristi kratke rokove da spreči smirenu procenu situacije i konzultacije sa stručnjacima.</p>

        <ul class="bullets">
          <li data-sr="napadač šalje dokaz eksfiltracije kao pritisak: uzorak ukradenih fajlova." data-en="attacker sends an exfiltration proof as pressure: a sample of stolen files.">napadač šalje dokaz eksfiltracije kao pritisak: uzorak ukradenih fajlova.</li>
          <li data-sr="napadač nudi demo dekripciju jednog ili dva fajla kao dokaz da ključ postoji." data-en="attacker offers demo decryption of one or two files as proof the key exists.">napadač nudi demo dekripciju jednog ili dva fajla kao dokaz da ključ postoji.</li>
          <li data-sr="rok se prikazuje kao tvrd: posle roka cena dupla ili podaci idu javno." data-en="the deadline is presented as firm: after the deadline the price doubles or data goes public.">rok se prikazuje kao tvrd: posle roka cena dupla ili podaci idu javno.</li>
        </ul>

        <div class="callout"
          data-sr="<strong>Indikator:</strong> svaki sat zastoja košta organizaciju više nego prethodni. Napadač to kalkuliše u zahtev za otkupom."
          data-en="<strong>Indicator:</strong> every hour of downtime costs the organization more than the last. The attacker calculates this into the ransom demand."
        ><strong>Indikator:</strong> svaki sat zastoja košta organizaciju više nego prethodni. Napadač to kalkuliše u zahtev za otkupom.</div>
      </article>

      <!-- FAZA 6 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Pregovori i pritisak" data-en="Phase 6 — Negotiations and pressure">
          Faza 6 — Pregovori i pritisak
        </h3>

        <p
data-sr="Pregovori se odvijaju kroz Tor portal ili šifrovani čet. Napadač ima iskustvo i skriptu; organizacija najčešće nema. Napadač koristi taktike: smanjivanje iznosa kao dobra volja, rok koji se privremeno produžava za popust, javno obelodanjivanje dela podataka kao demonstracija ozbiljnosti."
        data-en="Negotiations happen through a Tor portal or encrypted chat. The attacker has experience and a script; the organization typically does not. The attacker uses tactics: reducing the amount as a goodwill gesture, temporarily extending the deadline for a discount, publicly disclosing part of the data as a seriousness demonstration."
        >Pregovori se odvijaju kroz Tor portal ili šifrovani čet. Napadač ima iskustvo i skriptu; organizacija najčešće nema. Napadač koristi taktike: smanjivanje iznosa kao dobra volja, rok koji se privremeno produžava za popust, javno obelodanjivanje dela podataka kao demonstracija ozbiljnosti.</p>

        <div class="branch">
          <p><strong data-sr="Tipične evolucije" data-en="Typical evolutions">Tipične evolucije</strong></p>
          <ul class="bullets">
            <li><a href="recovery-scam.html" data-sr="Prevara povraćaja novca" data-en="Recovery scam">Prevara povraćaja novca</a></li>
            <li><a href="data-breach-extortion.html" data-sr="Ucena nakon krađe podataka" data-en="Data breach extortion">Ucena nakon krađe podataka</a></li>
          </ul>
        </div>
      </article>

      <!-- FAZA 7 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 7 — Isplata ili objava i talas prevare povraćaja" data-en="Phase 7 — Payment or disclosure and recovery wave">
          Faza 7 — Isplata ili objava i talas prevare povraćaja
        </h3>

        <p
data-sr="Ako organizacija plati, ključ za dekripciju obično stiže — jer napadač želi reputaciju za ispunjavanje obećanja radi budućih žrtava. Međutim, isplata ne garantuje brisanje ukradenih podataka. Napadač može tražiti dodatni otkup mesecima kasnije. Ako organizacija ne plati, podaci se objavljuju na leak site-u napadačke grupe."
        data-en="If the organization pays, the decryption key usually arrives — because the attacker wants a reputation for keeping promises to motivate future victims. However, payment does not guarantee deletion of stolen data. The attacker may demand additional ransom months later. If the organization does not pay, data is published on the attack group's leak site."
        >Ako organizacija plati, ključ za dekripciju obično stiže — jer napadač želi reputaciju za ispunjavanje obećanja radi budućih žrtava. Međutim, isplata ne garantuje brisanje ukradenih podataka. Napadač može tražiti dodatni otkup mesecima kasnije. Ako organizacija ne plati, podaci se objavljuju na leak site-u napadačke grupe.</p>

        <div class="callout"
          data-sr="<strong>Filter:</strong> isplata ransomware-a ne uklanja napadača iz mreže. Bez kompletnog forenzičkog čišćenja, napadač zadržava backdoor pristup za sledeći napad."
          data-en="<strong>Filter:</strong> paying ransomware does not remove the attacker from the network. Without complete forensic cleaning, the attacker retains backdoor access for the next attack."
        ><strong>Filter:</strong> isplata ransomware-a ne uklanja napadača iz mreže. Bez kompletnog forenzičkog čišćenja, napadač zadržava backdoor pristup za sledeći napad.</div>
      </article>
    </section>

    <!-- 4) CRVENE ZASTAVICE -->
    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="neobična aktivnost na mreži noću ili vikendom bez poznatog razloga." data-en="unusual network activity at night or on weekends without a known reason.">neobična aktivnost na mreži noću ili vikendom bez poznatog razloga.</li>
        <li data-sr="antivirus ili security agent iznenada deaktiviran ili ne odgovara." data-en="antivirus or security agent suddenly disabled or unresponsive.">antivirus ili security agent iznenada deaktiviran ili ne odgovara.</li>
        <li data-sr="backup sistemi pokazuju promene koje tim nije napravio." data-en="backup systems show changes the team did not make.">backup sistemi pokazuju promene koje tim nije napravio.</li>
        <li data-sr="neobičan odlazni saobraćaj ka spoljnim IP adresama ili cloud servisima." data-en="unusual outbound traffic to external IP addresses or cloud services.">neobičan odlazni saobraćaj ka spoljnim IP adresama ili cloud servisima.</li>
        <li data-sr="fajlovi dobijaju nepoznate ekstenzije bez poznatog uzroka." data-en="files receiving unknown extensions without a known cause.">fajlovi dobijaju nepoznate ekstenzije bez poznatog uzroka.</li>
        <li data-sr="zaposleni ne mogu da se prijave na sistemima koji su jutros radili." data-en="employees unable to log in to systems that were working this morning.">zaposleni ne mogu da se prijave na sistemima koji su jutros radili.</li>
        <li data-sr="neočekivana napomena o otkupu na ekranima ili u folderima." data-en="unexpected ransom notes on screens or inside folders.">neočekivana napomena o otkupu na ekranima ili u folderima.</li>
        <li data-sr="prijem ucenjivačke poruke koja tvrdi da napadač poseduje podatke organizacije." data-en="receipt of an extortion message claiming the attacker holds organizational data.">prijem ucenjivačke poruke koja tvrdi da napadač poseduje podatke organizacije.</li>
      </ul>
    </section>

    <!-- 5) PROVERE -->
    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera za organizacije" data-en="Checks: 8 quick checks for organizations">Provere: 8 brzih provera za organizacije</h2>

      <p
        data-sr="Ove provere treba da su deo redovnog bezbednosnog programa, ne samo reakcija na incident. Cilj je otkriti kompromitaciju što pre, jer svaki dan u mreži znači više štete."
        data-en="These checks should be part of a regular security program, not just an incident response. The goal is to detect compromise as early as possible because every day in the network means more damage."
      >Ove provere treba da su deo redovnog bezbednosnog programa, ne samo reakcija na incident. Cilj je otkriti kompromitaciju što pre, jer svaki dan u mreži znači više štete.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Preventivne provere" data-en="Preventive checks">Preventivne provere</div>
          <ul class="bullets">
            <li data-sr="backup sistemi: izolovani (air-gapped), testirani i funkcionalni?" data-en="backup systems: isolated (air-gapped), tested, and functional?">backup sistemi: izolovani (air-gapped), testirani i funkcionalni?</li>
            <li data-sr="patch management: da li su VPN, RDP i mail serveri zakrpljeni?" data-en="patch management: are VPN, RDP, and mail servers patched?">patch management: da li su VPN, RDP i mail serveri zakrpljeni?</li>
            <li data-sr="MFA aktivan na svim privilegovanim nalozima i pristupima?" data-en="MFA active on all privileged accounts and access points?">MFA aktivan na svim privilegovanim nalozima i pristupima?</li>
            <li data-sr="endpoint detection and response (EDR) aktivan na svim uređajima?" data-en="endpoint detection and response (EDR) active on all devices?">endpoint detection and response (EDR) aktivan na svim uređajima?</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Detekcione provere" data-en="Detection checks">Detekcione provere</div>
          <ul class="bullets">
            <li data-sr="network monitoring: da li se prati neobičan odlazni saobraćaj?" data-en="network monitoring: is unusual outbound traffic being tracked?">network monitoring: da li se prati neobičan odlazni saobraćaj?</li>
            <li data-sr="privileged account activity: ko se prijavljuje van radnog vremena?" data-en="privileged account activity: who is logging in outside working hours?">privileged account activity: ko se prijavljuje van radnog vremena?</li>
            <li data-sr="log retention: postoje li logovi dovoljno dugo za forenzičku analizu?" data-en="log retention: do logs exist long enough for forensic analysis?">log retention: postoje li logovi dovoljno dugo za forenzičku analizu?</li>
            <li data-sr="incident response plan: ko poziva koga i kojim redosledom u slučaju napada?" data-en="incident response plan: who calls whom and in what order during an attack?">incident response plan: ko poziva koga i kojim redosledom u slučaju napada?</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 6) CHECKLISTA -->
    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja pre donošenja odluke o otkupu" data-en="Checklist: 12 questions before deciding on ransom">Checklista: 12 pitanja pre donošenja odluke o otkupu</h2>

      <p class="muted"
        data-sr="Ovaj blok je za brzo čitanje u krizi. Svaki odgovor utiče na sledeći korak. Odluku o isplati uvek treba doneti uz pravnika i forenzički tim, a ne samo pod pritiskom roka."
        data-en="This block is for fast reading during a crisis. Each answer affects the next step. The decision to pay must always be made with a lawyer and forensic team, not solely under deadline pressure."
      >Ovaj blok je za brzo čitanje u krizi. Svaki odgovor utiče na sledeći korak. Odluku o isplati uvek treba doneti uz pravnika i forenzički tim, a ne samo pod pritiskom roka.</p>

      <ul class="bullets">
        <li data-sr="Da li su svi backupi kompromitovani ili postoji čist, izolovani backup?" data-en="Are all backups compromised, or does a clean, isolated backup exist?">Da li su svi backupi kompromitovani ili postoji čist, izolovani backup?</li>
        <li data-sr="Da li je obim zaraze poznat ili i dalje nepoznat?" data-en="Is the infection scope known or still unknown?">Da li je obim zaraze poznat ili i dalje nepoznat?</li>
        <li data-sr="Da li su eksfiltrirani podaci? Koji i koliko?" data-en="Was data exfiltrated? What data and how much?">Da li su eksfiltrirani podaci? Koji i koliko?</li>
        <li data-sr="Da li podaci podležu regulatornim obavezama (GDPR, NIS2, lokalni zakoni)?" data-en="Are the data subject to regulatory obligations (GDPR, NIS2, local laws)?">Da li podaci podležu regulatornim obavezama (GDPR, NIS2, lokalni zakoni)?</li>
        <li data-sr="Da li je forenzički tim angažovan i da li je napadač i dalje u mreži?" data-en="Has a forensic team been engaged and is the attacker still in the network?">Da li je forenzički tim angažovan i da li je napadač i dalje u mreži?</li>
        <li data-sr="Da li je cyber osiguranje aktivno i da li pokriva ovaj tip napada?" data-en="Is cyber insurance active and does it cover this type of attack?">Da li je cyber osiguranje aktivno i da li pokriva ovaj tip napada?</li>
        <li data-sr="Da li je napadačeva grupa poznata i da li postoje decryptori dostupni javno?" data-en="Is the attacker group known and are public decryptors available?">Da li je napadačeva grupa poznata i da li postoje decryptori dostupni javno?</li>
        <li data-sr="Da li isplata krši sankcione propise (OFAC lista u SAD, EU sankcije)?" data-en="Does payment violate sanctions regulations (OFAC list in US, EU sanctions)?">Da li isplata krši sankcione propise (OFAC lista u SAD, EU sankcije)?</li>
        <li data-sr="Da li je prijavljen napad nadležnim organima (policija, CERT)?" data-en="Has the attack been reported to relevant authorities (police, CERT)?">Da li je prijavljen napad nadležnim organima (policija, CERT)?</li>
        <li data-sr="Da li postoji plan za čišćenje mreže posle eventualne isplate?" data-en="Is there a plan for network cleanup after a potential payment?">Da li postoji plan za čišćenje mreže posle eventualne isplate?</li>
        <li data-sr="Da li je komunikacijski tim spreman za odgovor prema klijentima i partnerima?" data-en="Is the communications team ready to respond to clients and partners?">Da li je komunikacijski tim spreman za odgovor prema klijentima i partnerima?</li>
        <li data-sr="Da li isplata garantuje dekripciju i brisanje podataka ili samo ključ?" data-en="Does payment guarantee decryption and data deletion, or only the key?">Da li isplata garantuje dekripciju i brisanje podataka ili samo ključ?</li>
      </ul>
    </section>

    <!-- 7) AKO SUMNJA KRENE -->
    <section class="card">
      <h2 data-sr="Ako napad krene: redosled poteza" data-en="If an attack starts: action order">Ako napad krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="izolacija kompromitovanih sistema od mreže bez gašenja (da se sačuvaju forenzički artefakti)." data-en="isolate compromised systems from the network without shutting down (to preserve forensic artifacts).">izolacija kompromitovanih sistema od mreže bez gašenja (da se sačuvaju forenzički artefakti).</li>
        <li data-sr="aktivacija incident response plana i kontakt sa forenzičkim timom." data-en="activate the incident response plan and contact the forensic team.">aktivacija incident response plana i kontakt sa forenzičkim timom.</li>
        <li data-sr="procena obima zaraze: koji sistemi su pogođeni, da li su backupi čisti." data-en="assess infection scope: which systems are affected, whether backups are clean.">procena obima zaraze: koji sistemi su pogođeni, da li su backupi čisti.</li>
        <li data-sr="prijaviti napad policiji i CERT-u pre donošenja odluke o isplati." data-en="report the attack to police and CERT before deciding on payment.">prijaviti napad policiji i CERT-u pre donošenja odluke o isplati.</li>
        <li data-sr="proveriti dostupnost javnog decryptora na nomoreransom.org pre pregovora." data-en="check for public decryptor availability at nomoreransom.org before negotiations.">proveriti dostupnost javnog decryptora na nomoreransom.org pre pregovora.</li>
        <li data-sr="konsultovati pravnika pre svake komunikacije sa napadačem ili isplate." data-en="consult a lawyer before any communication with the attacker or any payment.">konsultovati pravnika pre svake komunikacije sa napadačem ili isplate.</li>
      </ol>

      <div class="callout"
        data-sr="<strong>Zašto ovaj redosled radi:</strong> izolacija ograničava štetu, forenzika daje činjenice umesto pretpostavki, prijava otvara opcije koje se zatvaraju posle isplate."
        data-en="<strong>Why this order works:</strong> isolation limits damage, forensics provides facts instead of assumptions, reporting opens options that close after payment."
      ><strong>Zašto ovaj redosled radi:</strong> izolacija ograničava štetu, forenzika daje činjenice umesto pretpostavki, prijava otvara opcije koje se zatvaraju posle isplate.</div>
    </section>

    <!-- 8) AKO POMAŽEŠ NEKOME -->
    <section class="card">
      <h2 data-sr="Ako pomažeš organizaciji u krizi" data-en="If you are helping an organization in crisis">Ako pomažeš organizaciji u krizi</h2>

      <p
        data-sr="Kada je upravljački tim pod pritiskom i rokovima, direktno insistiranje na neisplati često ne pomaže. Efikasnije je ući kroz konkretne pitanja koja usporavaju donesene odluke i otvaraju prostor za forenziku i pravnu procenu."
        data-en="When a management team is under pressure and deadlines, directly insisting on non-payment often does not help. It works better to enter through concrete questions that slow rushed decisions and open space for forensic and legal assessment."
      >Kada je upravljački tim pod pritiskom i rokovima, direktno insistiranje na neisplati često ne pomaže. Efikasnije je ući kroz konkretna pitanja koja usporavaju donošenje odluka i otvaraju prostor za forenziku i pravnu procenu.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li je forenzički tim potvrdio da su svi backdoori uklonjeni?" data-en="Has the forensic team confirmed all backdoors are removed?">Da li je forenzički tim potvrdio da su svi backdoori uklonjeni?</li>
            <li data-sr="Da li isplata garantuje brisanje podataka ili samo ključ za dekripciju?" data-en="Does payment guarantee data deletion or only the decryption key?">Da li isplata garantuje brisanje podataka ili samo ključ za dekripciju?</li>
            <li data-sr="Da li postoji javni decryptor za ovu grupu na nomoreransom.org?" data-en="Is there a public decryptor for this group at nomoreransom.org?">Da li postoji javni decryptor za ovu grupu na nomoreransom.org?</li>
            <li data-sr="Da li je prijavljen napad nadležnima pre isplate?" data-en="Was the attack reported to authorities before payment?">Da li je prijavljen napad nadležnima pre isplate?</li>
            <li data-sr="Da li je napadač i dalje u mreži dok se pregovara?" data-en="Is the attacker still inside the network while negotiating?">Da li je napadač i dalje u mreži dok se pregovara?</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Hajde da proverimo nomoreransom.org pre nego što odlučimo o isplati." data-en="Let's check nomoreransom.org before we decide on payment.">Hajde da proverimo nomoreransom.org pre nego što odlučimo o isplati.</li>
            <li data-sr="Isplata ne garantuje da napadač nije i dalje u mreži." data-en="Payment does not guarantee the attacker is no longer in the network.">Isplata ne garantuje da napadač nije i dalje u mreži.</li>
            <li data-sr="Forenzika kao prvi korak štiti nas pravno i operativno." data-en="Forensics as the first step protects us legally and operationally.">Forenzika kao prvi korak štiti nas pravno i operativno.</li>
            <li data-sr="Rok koji napadač postavlja je pregovarački alat, a ne apsolutna granica." data-en="The deadline the attacker sets is a negotiating tool, not an absolute limit.">Rok koji napadač postavlja je pregovarački alat, a ne apsolutna granica.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 9) IZVORI -->
`
};
