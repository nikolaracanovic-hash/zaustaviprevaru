window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["account-takeover"] = {
  raw_html: `
    <!-- 1) UVOD -->
    <section class="card">
      <h2 data-sr="Introduction: how account takeover works" data-en="Introduction: how account takeover works">Introduction: how account takeover works</h2>

      <p
        data-sr="Preuzimanje naloga (ATO) je stanje u kome napadač kontroliše tuđi nalog: imejl, banku, društvenu mrežu, onlajn prodavnicu. Ovo nije početna prevara, nego posledica prethodnog napada — fišinga, pozivnih prevara, malvera, ili curenja podataka. Jednom kada napadač ima pristup, nalog postaje alat za dalje napade."
        data-en="Account takeover (ATO) is a state where an attacker controls someone else's account: email, bank, social network, e-commerce platform. This isn't the initial scam but a consequence of a prior attack — phishing, vishing, virus, or curenje podataka. Once the attacker has access, the account becomes a tool for further attacks."
      >Preuzimanje naloga (ATO) je stanje u kome napadač kontroliše tuđi nalog: imejl, banku, društvenu mrežu, onlajn prodavnicu. Ovo nije početna prevara, nego posledica prethodnog napada — fišinga, pozivnih prevara, malvera, ili curenja podataka. Jednom kada napadač ima pristup, nalog postaje alat za dalje napade.</p>

      <p
        data-sr="Šteta se realizuje kroz četiri pravca: (1) direktna finansijska šteta (transakcije, kupovine), (2) krađa identiteta i podataka, (3) širenje napada na kontakte, (4) reset lozinki na drugim servisima (imejl je ključ za sve ostale naloge). imejl nalog je najvrednije preuzimanje jer otvara pristup svemu što koristi „zaboravljena lozinka“."
        data-en="Damage occurs through four paths: (1) direct financial loss (transactions, purchases), (2) identity and data theft, (3) spreading attacks to contacts, (4) password resets on other services (email is the key to all other accounts). Email accounts are the most valuable takeover because they unlock access to everything using “forgot password”."
      >Šteta se realizuje kroz četiri pravca: (1) direktna finansijska šteta (transakcije, kupovine), (2) krađa identiteta i podataka, (3) širenje napada na kontakte, (4) reset lozinki na drugim servisima (imejl je ključ za sve ostale naloge). Imejl nalog je najvrednije preuzimanje jer otvara pristup svemu što koristi „zaboravljena lozinka“.</p>

      <div class="callout"
        data-sr="<strong>Model:</strong> inicijalni napad (fišing/pozivna prevara/curenje) → ukradeni kredencijali → pristup → promena recovery podataka → serijske posledice → širenje"
        data-en="<strong>Model:</strong> initial attack (phishing/vishing/breach) → stolen credentials → access → recovery data changes → cascading consequences → spreading"
      ><strong>Model:</strong> inicijalni napad (fišing/pozivna prevara/curenje) → ukradeni kredencijali → pristup → promena recovery podataka → serijske posledice → širenje</div>
    </section>

    <!-- 2) KAKO SE DOBIJAJU KREDENCIJALI -->
    <section class="card">
      <h2 data-sr="How credentials are obtained" data-en="How credentials are obtained">How credentials are obtained</h2>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Aktivni napadi" data-en="Active attacks">Aktivni napadi</div>
          <ul class="bullets">
            <li data-sr="fišing: lažna forma traži login" data-en="phishing: fake form asks for login">fišing: lažna forma traži login</li>
            <li data-sr="pozivna prevara: poziv traži kod ili lozinku" data-en="vishing: call asks for code or password">pozivna prevara: poziv traži kod ili lozinku</li>
            <li data-sr="SMS prevara: SMS sa linkom ka lažnoj stranici" data-en="smishing: SMS with link to fake page">SMS prevara: SMS sa linkom ka lažnoj stranici</li>
            <li data-sr="zlonamerni program: virus koji snima šta kucaš ili stealer na uređaju" data-en="virus: virus koji snima šta kucaš or stealer on device">zlonamerni program: virus koji snima šta kucaš ili stealer na uređaju</li>
            <li data-sr="daljinski pristup: napadač vidi ili kontroliše ekran" data-en="kontrola računara: attacker sees or controls screen">daljinski pristup: napadač vidi ili kontroliše ekran</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Pasivni izvori" data-en="Passive sources">Pasivni izvori</div>
          <ul class="bullets">
            <li data-sr="curenje podataka: curenje sa drugih servisa" data-en="curenje podataka: leak from other services">curenje podataka: curenje sa drugih servisa</li>
            <li data-sr="probijanje lozinki: testiranje kombinacija" data-en="credential stuffing: testing combinations">probijanje lozinki: testiranje kombinacija</li>
            <li data-sr="ponovna upotreba lozinki: ista lozinka na više servisa" data-en="password reuse: same password on multiple services">ponovna upotreba lozinki: ista lozinka na više servisa</li>
            <li data-sr="slabe lozinke: lako pogodljive kombinacije" data-en="weak passwords: easily guessed combinations">slabe lozinke: lako pogodljive kombinacije</li>
          </ul>
        </div>
      </div>

      <div class="branch">
        <p><strong data-sr="Povezani napadi koji vode do ATO" data-en="Related attacks leading to ATO">Povezani napadi koji vode do ATO</strong></p>
          <ul class="bullets">
            <li data-sr="<strong>fišing:</strong> najčešći ulaz. (Povezano: <a href='fišing.html'>fišing</a>)" data-en="<strong>Fišing:</strong> most common entry. (Related: <a href='phishing.html'>Phishing</a>)"><strong>Fišing:</strong> najčešći ulaz. (Povezano: <a href="phishing.html">Phishing</a>)</li>
            <li data-sr="<strong>pozivna prevara:</strong> poziv kao vektor. (Povezano: <a href='pozivna prevara.html'>pozivna prevara</a>)" data-en="<strong>Višing:</strong> call as vector. (Related: <a href='vishing.html'>Vishing</a>)"><strong>Pozivna prevara:</strong> poziv kao vektor. (Povezano: <a href="vishing.html">Vishing</a>)</li>
            <li data-sr="<strong>Tech support:</strong> daljinski pristup. (Povezano: <a href='tech-support-scam.html'>Tech support</a>)" data-en="<strong>Tech support:</strong> kontrola računara. (Related: <a href='tech-support-scam.html'>Tech support</a>)"><strong>Tech support:</strong> daljinski pristup. (Povezano: <a href="tech-support-scam.html">Tech support</a>)</li>
          </ul>
      </div>
    </section>

    <!-- 3) HRONOLOŠKI TOK -->
    <section class="card">
      <h2 data-sr="Takeover timeline" data-en="Takeover timeline">Takeover timeline</h2>

      <!-- FAZA 1 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Phase 1 — Obtaining credentials" data-en="Phase 1 — Obtaining credentials">Phase 1 — Obtaining credentials</h3>

        <p
          data-sr="Napadač dobija lozinku, OTP kod, ili session token. Izvor može biti fišing, pozivna prevara, curenje, ili zlonamerni program. U ovom trenutku meta često nije svesna da je kompromitovana."
          data-en="The attacker obtains a password, OTP code, or session token. The source can be phishing, vishing, breach, or virus. At this point the target is often unaware of compromise."
        >Napadač dobija lozinku, OTP kod, ili session token. Izvor može biti fišing, pozivna prevara, curenje, ili zlonamerni program. U ovom trenutku meta često nije svesna da je kompromitovana.</p>
      </article>

      <!-- FAZA 2 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Phase 2 — Account access" data-en="Phase 2 — Account access">Phase 2 — Account access</h3>

        <p
          data-sr="Napadač se prijavljuje sa ukradenim kredencijalima. Ako je dvofaktorska potvrda aktivan, može koristiti ukradeni OTP, SIM swap, ili manipulacija ljudima. Pristup može doći sa nepoznate lokacije ili uređaja."
          data-en="The attacker logs in with stolen credentials. If 2FA is active, they may use a stolen OTP, SIM swap, or manipulacija ljudima. Access may come from an unknown location or device."
        >Napadač se prijavljuje sa ukradenim kredencijalima. Ako je dvofaktorska potvrda aktivan, može koristiti ukradeni OTP, SIM swap, ili manipulacija ljudima. Pristup može doći sa nepoznate lokacije ili uređaja.</p>

        <div class="callout"
          data-sr="<strong>Prag:</strong> uspešna prijava. Posle ovog trenutka napadač ima kontrolu."
          data-en="<strong>Threshold:</strong> successful login. After this moment the attacker has control."
        ><strong>Prag:</strong> uspešna prijava. Posle ovog trenutka napadač ima kontrolu.</div>
      </article>

      <!-- FAZA 3 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Phase 3 — Securing access" data-en="Phase 3 — Securing access">Phase 3 — Securing access</h3>

        <p
          data-sr="Napadač menja recovery podatke da zaključa vlasnika: novi imejl za oporavak, novi broj telefona, novi dvofaktorska potvrda uređaj. Menja lozinku. Cilj je da vlasnik izgubi mogućnost povratka kontrole."
          data-en="The attacker changes recovery data to lock out the owner: new recovery email, new phone number, new 2FA device. Changes the password. The goal is for the owner to lose the ability to regain control."
        >Napadač menja recovery podatke da zaključa vlasnika: novi imejl za oporavak, novi broj telefona, novi dvofaktorska potvrda uređaj. Menja lozinku. Cilj je da vlasnik izgubi mogućnost povratka kontrole.</p>

        <ul class="bullets">
          <li data-sr="promena lozinke" data-en="password change">promena lozinke</li>
          <li data-sr="promena recovery emaila" data-en="recovery email change">promena recovery emaila</li>
          <li data-sr="promena broja telefona za dvofaktorska potvrda" data-en="2FA phone number change">promena broja telefona za dvofaktorska potvrda</li>
          <li data-sr="dodavanje novog uređaja" data-en="adding new device">dodavanje novog uređaja</li>
          <li data-sr="brisanje sigurnosnih pitanja" data-en="deleting security questions">brisanje sigurnosnih pitanja</li>
        </ul>
      </article>

      <!-- FAZA 4 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Phase 4 — Exploitation" data-en="Phase 4 — Exploitation">Phase 4 — Exploitation</h3>

        <p
          data-sr="Napadač koristi nalog za različite ciljeve, zavisno od tipa naloga. imejl služi kao ključ za ostale servise. Banking nalog omogućava direktnu štetu. Društvena mreža služi za širenje napada."
          data-en="The attacker uses the account for various purposes depending on account type. Email serves as a key to other services. Banking accounts enable direct financial damage. Social networks serve to spread attacks."
        >Napadač koristi nalog za različite ciljeve, zavisno od tipa naloga. Imejl služi kao ključ za ostale servise. Banking nalog omogućava direktnu štetu. Društvena mreža služi za širenje napada.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="imejl nalog" data-en="Imejl account">Imejl nalog</div>
            <ul class="bullets">
              <li data-sr="reset lozinki na drugim servisima" data-en="password resets on other services">reset lozinki na drugim servisima</li>
              <li data-sr="pristup poslovnoj prepisci" data-en="access to business correspondence">pristup poslovnoj prepisci</li>
              <li data-sr="fišing poruke kontaktima" data-en="phishing messages to contacts">fišing poruke kontaktima</li>
              <li data-sr="preusmeravanje faktura i uplata" data-en="redirecting invoices and payments">preusmeravanje faktura i uplata</li>
            </ul>
          </div>
          <div class="phase">
            <div class="label" data-sr="Banking / finansijski nalog" data-en="Banking / financial account">Banking / finansijski nalog</div>
            <ul class="bullets">
              <li data-sr="direktni transferi" data-en="direct transfers">direktni transferi</li>
              <li data-sr="promena podataka za primanje uplata" data-en="changing payment receiving details">promena podataka za primanje uplata</li>
              <li data-sr="podizanje kredita na ime žrtve" data-en="taking loans in victim's name">podizanje kredita na ime žrtve</li>
            </ul>
          </div>
          <div class="phase">
            <div class="label" data-sr="Društvena mreža" data-en="Social network">Društvena mreža</div>
            <ul class="bullets">
              <li data-sr="poruke prijateljima sa linkovima" data-en="messages to friends with links">poruke prijateljima sa linkovima</li>
              <li data-sr="„pomoć“ zahtevi (grandparent scam)" data-en="“help” requests (grandparent scam)">„pomoć“ zahtevi (grandparent scam)</li>
              <li data-sr="lažni oglasi i investicione ponude" data-en="fake ads and investment offers">lažni oglasi i investicione ponude</li>
            </ul>
          </div>
          <div class="phase">
            <div class="label" data-sr="onlajn prodavnica / marketplace" data-en="E-commerce / marketplace">E-commerce / marketplace</div>
            <ul class="bullets">
              <li data-sr="kupovine na sačuvane kartice" data-en="purchases on saved cards">kupovine na sačuvane kartice</li>
              <li data-sr="promena adrese dostave" data-en="changing delivery address">promena adrese dostave</li>
              <li data-sr="lažni oglasi sa kredibilitetom naloga" data-en="fake listings with account credibility">lažni oglasi sa kredibilitetom naloga</li>
            </ul>
          </div>
        </div>
      </article>

      <!-- FAZA 5 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Phase 5 — Attack spreading" data-en="Phase 5 — Attack spreading">Phase 5 — Attack spreading</h3>

        <p
          data-sr="Preuzet nalog postaje vektor za nove napade. Kontakti primaju fišing poruke sa poznatog naloga, što povećava verovatnoću klika. Poslovni kontekst omogućava prevara u firmama prevare."
          data-en="The taken-over account becomes a vector for new attacks. Contacts receive phishing messages from a known account, increasing click likelihood. Business context enables prevara u firmama fraud."
        >Preuzet nalog postaje vektor za nove napade. Kontakti primaju fišing poruke sa poznatog naloga, što povećava verovatnoću klika. Poslovni kontekst omogućava prevara u firmama prevare.</p>

        <div class="branch">
          <p><strong data-sr="Tipična grananja" data-en="Typical branching">Tipična grananja</strong></p>
          <ul class="bullets">
            <li data-sr="<strong>fišing:</strong> poruke kontaktima. (Povezano: <a href='fišing.html'>fišing</a>)" data-en="<strong>Fišing:</strong> messages to contacts. (Related: <a href='phishing.html'>Phishing</a>)"><strong>Fišing:</strong> poruke kontaktima. (Povezano: <a href="phishing.html">Phishing</a>)</li>
            <li data-sr="<strong>Impersonation:</strong> korišćenje identiteta. (Povezano: <a href='impersonation-scam.html'>Impersonation</a>)" data-en="<strong>Impersonation:</strong> using identity. (Related: <a href='impersonation-scam.html'>Impersonation</a>)"><strong>Impersonation:</strong> korišćenje identiteta. (Povezano: <a href="impersonation-scam.html">Impersonation</a>)</li>
            <li data-sr="<strong>Marketplace prevare:</strong> lažni oglasi sa kredibilitetom. (Povezano: <a href='marketplace-scam.html'>Marketplace</a>)" data-en="<strong>Marketplace scams:</strong> fake listings with credibility. (Related: <a href='marketplace-scam.html'>Marketplace</a>)"><strong>Marketplace prevare:</strong> lažni oglasi sa kredibilitetom. (Povezano: <a href="marketplace-scam.html">Marketplace</a>)</li>
          </ul>
        </div>
      </article>
    </section>

    <!-- 4) ZNACI KOMPROMITACIJE -->
    <section class="card">
      <h2 data-sr="Signs of account compromise" data-en="Signs of account compromise">Signs of account compromise</h2>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Direktni znaci" data-en="Direct signs">Direktni znaci</div>
          <ul class="bullets">
            <li data-sr="prijave sa nepoznatih lokacija/uređaja" data-en="logins from unknown locations/devices">prijave sa nepoznatih lokacija/uređaja</li>
            <li data-sr="promena lozinke koju niste vi napravili" data-en="password change you didn't make">promena lozinke koju niste vi napravili</li>
            <li data-sr="notifikacije o promeni recovery podataka" data-en="notifications about recovery data changes">notifikacije o promeni recovery podataka</li>
            <li data-sr="poruke koje niste vi slali" data-en="messages you didn't send">poruke koje niste vi slali</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Indirektni znaci" data-en="Indirect signs">Indirektni znaci</div>
          <ul class="bullets">
            <li data-sr="kontakti prijavljuju čudne poruke od vas" data-en="contacts report strange messages from you">kontakti prijavljuju čudne poruke od vas</li>
            <li data-sr="transakcije koje niste vi napravili" data-en="transactions you didn't make">transakcije koje niste vi napravili</li>
            <li data-sr="nemogućnost prijave sa ispravnom lozinkom" data-en="unable to log in with correct password">nemogućnost prijave sa ispravnom lozinkom</li>
            <li data-sr="imejl o resetu lozinke koji niste tražili" data-en="password reset email you didn't request">imejl o resetu lozinke koji niste tražili</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 5) IZ UGLA PREVARANTA -->
    <section class="card">
      <h2 data-sr="From the scammers' side" data-en="From the scammers' side">From the scammers' side</h2>

      <p
        data-sr="Preuzeti nalozi imaju vrednost koja zavisi od tipa. imejl nalozi su najvredniji jer omogućavaju reset na svim servisima. Banking nalozi omogućavaju direktnu štetu. Društvene mreže i marketplace nalozi imaju vrednost za širenje napada i prevare sa kredibilitetom."
        data-en="Taken-over accounts have value depending on type. Email accounts are most valuable because they enable resets on all services. Banking accounts allow direct financial damage. Social networks and marketplace accounts have value for spreading attacks and credibility-based fraud."
      >Preuzeti nalozi imaju vrednost koja zavisi od tipa. Imejl nalozi su najvredniji jer omogućavaju reset na svim servisima. Banking nalozi omogućavaju direktnu štetu. Društvene mreže i marketplace nalozi imaju vrednost za širenje napada i prevare sa kredibilitetom.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Prioriteti posle pristupa" data-en="Priorities after access">Prioriteti posle pristupa</div>
          <ul class="bullets">
            <li data-sr="zaključati vlasnika (promena recovery)" data-en="lock out owner (change recovery)">zaključati vlasnika (promena recovery)</li>
            <li data-sr="izvući maksimalnu vrednost pre detekcije" data-en="extract maximum value before detection">izvući maksimalnu vrednost pre detekcije</li>
            <li data-sr="proširiti pristup na povezane naloge" data-en="expand access to connected accounts">proširiti pristup na povezane naloge</li>
            <li data-sr="iskoristiti za nove napade" data-en="use for new attacks">iskoristiti za nove napade</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Vrednost naloga" data-en="Account value">Vrednost naloga</div>
          <ul class="bullets">
            <li data-sr="imejl: pristup svemu ostalom" data-en="email: access to everything else">imejl: pristup svemu ostalom</li>
            <li data-sr="banka: direktna finansijska šteta" data-en="bank: direct financial damage">banka: direktna finansijska šteta</li>
            <li data-sr="marketplace: prevare sa kredibilitetom" data-en="marketplace: fraud with credibility">marketplace: prevare sa kredibilitetom</li>
            <li data-sr="mreže: širenje fišinga" data-en="networks: spreading phishing">mreže: širenje fišinga</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 6) STANDARDNA UPOZORENJA -->
    <section class="card">
      <h2 data-sr="Standard warnings" data-en="Standard warnings">Standard warnings</h2>

      <ul class="bullets">
        <li data-sr="imejl nalog je ključ za sve ostale — zaštiti ga najviše" data-en="email account is the key to everything else — protect it most">imejl nalog je ključ za sve ostale — zaštiti ga najviše</li>
        <li data-sr="ponovna upotreba lozinki omogućava domino efekat" data-en="password reuse enables domino effect">ponovna upotreba lozinki omogućava domino efekat</li>
        <li data-sr="dvofaktorska potvrda značajno smanjuje rizik, ali nije neprobojno" data-en="2FA significantly reduces risk but isn't bulletproof">dvofaktorska potvrda značajno smanjuje rizik, ali nije neprobojno</li>
        <li data-sr="prijave sa nepoznatih lokacija zahtevaju proveru" data-en="logins from unknown locations require investigation">prijave sa nepoznatih lokacija zahtevaju proveru</li>
      </ul>

      <div class="callout"
        data-sr="<strong>Praktično pravilo:</strong> različita lozinka za svaki važan servis + dvofaktorska potvrda gde je moguće + provera aktivnih sesija."
        data-en="<strong>Practical rule:</strong> different password for each important service + 2FA where possible + check active sessions."
      ><strong>Praktično pravilo:</strong> različita lozinka za svaki važan servis + 2FA gde je moguće + provera aktivnih sesija.</div>
    </section>

    <!-- 7) AKO JE ŠTETA NASTALA -->
    <section class="card">
      <h2 data-sr="If account is compromised (action order)" data-en="If account is compromised (action order)">If account is compromised (action order)</h2>

      <ol class="steps">
        <li data-sr="pokušaj povratka pristupa kroz recovery (zvaničan kanal servisa)" data-en="try to regain access through recovery (official service channel)">pokušaj povratka pristupa kroz recovery (zvaničan kanal servisa)</li>
        <li data-sr="ako imaš pristup: promeni lozinku i sve recovery podatke" data-en="if you have access: change password and all recovery data">ako imaš pristup: promeni lozinku i sve recovery podatke</li>
        <li data-sr="uključi dvofaktorska potvrda ako nije bilo aktivno" data-en="enable 2FA if not active">uključi dvofaktorska potvrda ako nije bilo aktivno</li>
        <li data-sr="proveri i odjavi sve aktivne sesije" data-en="check and sign out all active sessions">proveri i odjavi sve aktivne sesije</li>
        <li data-sr="proveri povezane servise (posebno ako je imejl kompromitovan)" data-en="check connected services (especially if email is compromised)">proveri povezane servise (posebno ako je imejl kompromitovan)</li>
        <li data-sr="obavesti kontakte ako su primili sumnjive poruke" data-en="notify contacts if they received suspicious messages">obavesti kontakte ako su primili sumnjive poruke</li>
        <li data-sr="kontaktiraj banku ako su finansijski podaci ugroženi" data-en="contact bank if financial data is at risk">kontaktiraj banku ako su finansijski podaci ugroženi</li>
      </ol>

      <div class="callout"
        data-sr="<strong>Prioritet:</strong> imejl nalog ide prvi. Ako je imejl kompromitovan, sve ostale lozinke menjaj sa čistog uređaja."
        data-en="<strong>Priority:</strong> email account goes first. If email is compromised, change all other passwords from a clean device."
      ><strong>Prioritet:</strong> email nalog ide prvi. Ako je email kompromitovan, sve ostale lozinke menjaj sa čistog uređaja.</div>
    </section>


    <!-- 8) STATISTIKE I EKONOMIJA ACCOUNT TAKEOVER PREVARA -->
    <section class="card">
      <h2 data-sr="Account takeover statistics and economics" data-en="Account takeover statistics and economics">Account takeover statistics and economics</h2>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="FBI IC3 + Javelin Strategy data (2023)" data-en="FBI IC3 + Javelin Strategy data (2023)">FBI IC3 + Javelin Strategy data (2023)</div>
          <ul class="bullets">
            <li data-sr="IC3 2023: Identity Theft 19,778 prijava, $126.2M gubitak" data-en="IC3 2023: Identity Theft 19,778 reports, $126.2M loss">IC3 2023: Identity Theft 19,778 prijava, $126.2M gubitak</li>
            <li data-sr="preuzimanje naloga se javlja kroz više kategorija (fišing, personal curenje podataka)" data-en="account takeover appears across multiple categories (phishing, personal curenje podataka)">preuzimanje naloga se javlja kroz više kategorija (fišing, personal curenje podataka)</li>
            <li data-sr="broj kompromitovanih naloga: 24 miliona (USA alone, 2023)" data-en="number of compromised accounts: 24 million (USA alone, 2023)">broj kompromitovanih naloga: 24 miliona (USA alone, 2023)</li>
            <li data-sr="prosečan gubitak po žrtvi: $12,000 (median: $4,500)" data-en="average loss per victim: $12,000 (median: $4,500)">prosečan gubitak po žrtvi: $12,000 (median: $4,500)</li>
            <li data-sr="financial preuzimanje naloga avg loss: $18,500 (banking, investment)" data-en="financial account takeover avg loss: $18,500 (banking, investment)">financial preuzimanje naloga avg loss: $18,500 (banking, investment)</li>
            <li data-sr="onlajn prodavnica preuzimanje naloga avg loss: $2,800 (Amazon, eBay, etc)" data-en="e-commerce account takeover avg loss: $2,800 (Amazon, eBay, etc)">e-commerce preuzimanje naloga avg loss: $2,800 (Amazon, eBay, etc)</li>
            <li data-sr="rast 2019-2023: 354% porast (eksponencijalni boost sa data breaches)" data-en="growth 2019-2023: 354% increase (exponential boost with data breaches)">rast 2019-2023: 354% porast (eksponencijalni boost sa data breaches)</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Account type distribution (% of takeovers)" data-en="Account type distribution (% of takeovers)">Account type distribution (% of takeovers)</div>
          <ul class="bullets">
            <li data-sr="imejl accounts: 35% (KLJUČNI - otvara sve ostalo)" data-en="email accounts: 35% (KEY - unlocks everything else)">imejl accounts: 35% (KLJUČNI - otvara sve ostalo)</li>
            <li data-sr="onlajn prodavnica (Amazon, eBay, online stores): 28%" data-en="e-commerce (Amazon, eBay, online stores): 28%">e-commerce (Amazon, eBay, online stores): 28%</li>
            <li data-sr="banking/financial: 18% (highest avg loss)" data-en="banking/financial: 18% (highest avg loss)">banking/financial: 18% (highest avg loss)</li>
            <li data-sr="social media (Facebook, Instagram, Twitter): 12%" data-en="social media (Facebook, Instagram, Twitter): 12%">social media (Facebook, Instagram, Twitter): 12%</li>
            <li data-sr="crypto exchanges (Coinbase, Binance): 4% (highest value per account)" data-en="crypto exchanges (Coinbase, Binance): 4% (highest value per account)">crypto exchanges (Coinbase, Binance): 4% (highest value per account)</li>
            <li data-sr="other (gaming, streaming, etc): 3%" data-en="other (gaming, streaming, etc): 3%">other (gaming, streaming, etc): 3%</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Attack vector distribution (kako se dobijaju kredencijali)" data-en="Attack vector distribution (how credentials are obtained)">Attack vector distribution (kako se dobijaju kredencijali)</div>
          <ul class="bullets">
            <li data-sr="probijanje lozinki (data breaches): 42% (NAJVIŠE)" data-en="credential stuffing (data breaches): 42% (HIGHEST)">probijanje lozinki (data breaches): 42% (NAJVIŠE)</li>
            <li data-sr="fišing: 31% (imejl/SMS lažne forme)" data-en="phishing: 31% (email/SMS fake forms)">fišing: 31% (imejl/SMS lažne forme)</li>
            <li data-sr="zlonamerni program (virus koji snima šta kucaš, stealer): 14%" data-en="virus (virus koji snima šta kucaš, stealer): 14%">zlonamerni program (virus koji snima šta kucaš, stealer): 14%</li>
            <li data-sr="manipulacija ljudima (pozivna prevara, pretexting): 8%" data-en="manipulacija ljudima (vishing, pretexting): 8%">manipulacija ljudima (pozivna prevara, pretexting): 8%</li>
            <li data-sr="SIM swap (dvofaktorska potvrda bypass): 3%" data-en="SIM swap (2FA bypass): 3%">SIM swap (dvofaktorska potvrda bypass): 3%</li>
            <li data-sr="brute force/weak passwords: 2%" data-en="brute force/weak passwords: 2%">brute force/weak passwords: 2%</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Operativna ekonomija (underground market)" data-en="Operational economics (underground market)">Operativna ekonomija (underground market)</div>
          <ul class="bullets">
            <li data-sr="stolen credentials price (dark web): imejl $2-15, bank $40-200, crypto $100-1,000" data-en="stolen credentials price (dark web): email $2-15, bank $40-200, crypto $100-1,000">stolen credentials price (dark web): imejl $2-15, bank $40-200, crypto $100-1,000</li>
            <li data-sr="curenje podataka list price: 1M credentials = $500-5,000" data-en="curenje podataka list price: 1M credentials = $500-5,000">curenje podataka list price: 1M credentials = $500-5,000</li>
            <li data-sr="probijanje lozinki cost: $0.0005-0.001 per attempt (proxies + automation)" data-en="credential stuffing cost: $0.0005-0.001 per attempt (proxies + automation)">probijanje lozinki cost: $0.0005-0.001 per attempt (proxies + automation)</li>
            <li data-sr="success rate: 0.1-2% (zbog password reuse)" data-en="success rate: 0.1-2% (due to password reuse)">success rate: 0.1-2% (zbog password reuse)</li>
            <li data-sr="ROI za probijanje lozinki: 500-2,000% (low cost, high volume)" data-en="ROI for credential stuffing: 500-2,000% (low cost, high volume)">ROI za probijanje lozinki: 500-2,000% (low cost, high volume)</li>
            <li data-sr="time to monetize: <24h (fraudulent purchases, transfers)" data-en="time to monetize: <24h (fraudulent purchases, transfers)">time to monetize: <24h (fraudulent purchases, transfers)</li>
          </ul>
        </div>
      </div>

      <div class="callout"
        data-sr="<strong>Ekonomski profil:</strong> preuzimanje naloga ima NAJBRŽI ROI od svih prevara (<24h monetization). probijanje lozinki košta $500-1,000 za testiranje 1M kombinacija, sa 0.1-2% success rate = 1,000-20,000 uspešnih login-a = $50K-200K profit.  
Password reuse = domino efekat."
        data-en="<strong>Economic profile:</strong> account takeover has FASTEST ROI of all scams (<24h monetization). Credential stuffing costs $500-1,000 to test 1M combos, with 0.1-2% success rate = 1,000-20,000 successful logins = $50K-200K profit. Email account is KEY because it unlocks “forgot password” for ALL other accounts. Password reuse = domino effect."
      ><strong>Ekonomski profil:</strong> preuzimanje naloga ima NAJBRŽI ROI od svih prevara (<24h monetization). probijanje lozinki košta $500-1,000 za testiranje 1M kombinacija, sa 0.1-2% success rate = 1,000-20,000 uspešnih login-a = $50K-200K profit.
 Password reuse = domino efekat.</div>
    </section>

    <!-- 9) IZVORI -->
    <section class="card sources" id="sources">
      <h2 data-sr="Sources" data-en="Sources">Sources</h2>
      <ul>
        <li><a href="https://www.ncsc.gov.uk/guidance/phishing" target="_blank" rel="noopener noreferrer">UK NCSC — Fišing guidance</a></li>
        <li><a href="https://www.fbi.gov/how-we-can-help-you/scams-and-safety/common-frauds-and-scams" target="_blank" rel="noopener noreferrer">FBI — Common frauds and scams</a></li>
        <li><a href="https://consumer.ftc.gov/identity-theft-and-online-security" target="_blank" rel="noopener noreferrer">FTC — Account security guidance</a></li>
      </ul>
    </section>
  `
};
