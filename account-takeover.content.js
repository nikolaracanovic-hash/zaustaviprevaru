window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["account-takeover"] = {
  raw_html: `
    <!-- 1) UVOD -->
    <section class="card">
      <h2 data-sr="Uvod: kako funkcioniše preuzimanje naloga" data-en="Introduction: how account takeover works">Uvod: kako funkcioniše preuzimanje naloga</h2>

      <p
        data-sr="Preuzimanje naloga (ATO) je stanje u kome napadač kontroliše tuđi nalog: imejl, banku, društvenu mrežu, onlajn prodavnicu. Ovo nije početna prevara, nego posledica prethodnog napada — fišinga, pozivnih prevara, malvera, ili curenja podataka. Jednom kada napadač ima pristup, nalog postaje alat za dalje napade."
        data-en="Account takeover (ATO) is a state where an attacker controls someone else's account: email, bank, social network, e-commerce platform. This isn't the initial scam but a consequence of a prior attack — phishing, vishing, malware, or a data breach. Once the attacker has access, the account becomes a tool for further attacks."
      >Preuzimanje naloga (ATO) je stanje u kome napadač kontroliše tuđi nalog: imejl, banku, društvenu mrežu, onlajn prodavnicu. Ovo nije početna prevara, nego posledica prethodnog napada — fišinga, pozivnih prevara, malvera, ili curenja podataka. Jednom kada napadač ima pristup, nalog postaje alat za dalje napade.</p>

      <p
        data-sr="Šteta se realizuje kroz četiri pravca: (1) direktna finansijska šteta (transakcije, kupovine), (2) krađa identiteta i podataka, (3) širenje napada na kontakte, (4) reset lozinki na drugim servisima (imejl je ključ za sve ostale naloge). imejl nalog je najvrednije preuzimanje jer otvara pristup svemu što koristi zaboravljena lozinka."
        data-en="Damage occurs through four paths: (1) direct financial loss (transactions, purchases), (2) identity and data theft, (3) spreading attacks to contacts, (4) password resets on other services (email is the key to all other accounts). Email accounts are the most valuable takeover because they unlock access to everything using forgot password."
      >Šteta se realizuje kroz četiri pravca: (1) direktna finansijska šteta (transakcije, kupovine), (2) krađa identiteta i podataka, (3) širenje napada na kontakte, (4) reset lozinki na drugim servisima (imejl je ključ za sve ostale naloge). Imejl nalog je najvrednije preuzimanje jer otvara pristup svemu što koristi zaboravljena lozinka.</p>

      <div class="callout"
        data-sr="<strong>Model:</strong> inicijalni napad (fišing/pozivna prevara/curenje) → ukradeni kredencijali → pristup → promena podataka za oporavak → serijske posledice → širenje."
        data-en="<strong>Model:</strong> initial attack (phishing/vishing/breach) → stolen credentials → access → recovery data changes → cascading consequences → spreading."
      ><strong>Model:</strong> inicijalni napad (fišing/pozivna prevara/curenje) → ukradeni kredencijali → pristup → promena podataka za oporavak → serijske posledice → širenje.</div>
    </section>

    <!-- 2) KAKO SE DOBIJAJU KREDENCIJALI -->
    <section class="card">
      <h2 data-sr="Kako se dolazi do kredencijala" data-en="How credentials are obtained">Kako se dolazi do kredencijala</h2>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Aktivni napadi" data-en="Active attacks">Aktivni napadi</div>
          <ul class="bullets">
            <li data-sr="fišing: lažna forma traži login." data-en="phishing: fake form asks for login.">fišing: lažna forma traži login.</li>
            <li data-sr="pozivna prevara: poziv traži kod ili lozinku." data-en="vishing: call asks for code or password.">pozivna prevara: poziv traži kod ili lozinku.</li>
            <li data-sr="SMS prevara: SMS sa linkom ka lažnoj stranici." data-en="smishing: SMS with link to fake page.">SMS prevara: SMS sa linkom ka lažnoj stranici.</li>
            <li data-sr="zlonamerni program: virus koji snima šta kucaš ili kradljivac podataka na uređaju." data-en="virus: virus koji snima šta kucaš or kradljivac podataka on device.">zlonamerni program: virus koji snima šta kucaš ili kradljivac podataka na uređaju.</li>
            <li data-sr="daljinski pristup: napadač vidi ili kontroliše ekran." data-en="kontrola računara: attacker sees or controls screen.">daljinski pristup: napadač vidi ili kontroliše ekran.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Pasivni izvori" data-en="Passive sources">Pasivni izvori</div>
          <ul class="bullets">
            <li data-sr="curenje podataka: curenje sa drugih servisa." data-en="data breach: leak from other services.">curenje podataka: curenje sa drugih servisa.</li>
            <li data-sr="probijanje lozinki: testiranje kombinacija." data-en="credential stuffing: testing combinations.">probijanje lozinki: testiranje kombinacija.</li>
            <li data-sr="ponovna upotreba lozinki: ista lozinka na više servisa." data-en="password reuse: same password on multiple services.">ponovna upotreba lozinki: ista lozinka na više servisa.</li>
            <li data-sr="slabe lozinke: lako pogodljive kombinacije." data-en="weak passwords: easily guessed combinations.">slabe lozinke: lako pogodljive kombinacije.</li>
          </ul>
        </div>
      </div>

      <div class="branch">
        <p><strong data-sr="Povezani napadi koji vode do ATO" data-en="Related attacks leading to ATO">Povezani napadi koji vode do ATO</strong></p>
          <ul class="bullets">
            <li><strong data-sr="Povezano: Fišing</a>)" data-en="Phishing:">Fišing:</strong> <span data-sr="najčešći ulaz." data-en="most common entry.">najčešći ulaz.</span> (<a href="phishing.html" data-sr="Povezano: Fišing" data-en="Related: Phishing">Povezano: Fišing</a>)</li>
            <li><strong data-sr="Povezano: Višing</a>)" data-en="Vishing:">Pozivna prevara:</strong> <span data-sr="poziv kao vektor." data-en="call as vector.">poziv kao vektor.</span> (<a href="vishing.html" data-sr="Povezano: Višing" data-en="Related: Vishing">Povezano: Višing</a>)</li>
            <li><strong data-sr="Povezano: Prevara lažne tehničke podrške</a>)" data-en="Tech support:">Tehnička podrška:</strong> <span data-sr="daljinski pristup." data-en="remote access.">daljinski pristup.</span> (<a href="tech-support-scam.html" data-sr="Povezano: Prevara lažne tehničke podrške" data-en="Related: Tech support scam">Povezano: Prevara lažne tehničke podrške</a>)</li>
          </ul>
      </div>
    </section>

    <!-- 3) HRONOLOŠKI TOK -->
    <section class="card">
      <h2 data-sr="Hronološki tok preuzimanja naloga" data-en="Takeover timeline">Hronološki tok preuzimanja naloga</h2>

      <!-- FAZA 1 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Dolazak do kredencijala" data-en="Phase 1 — Obtaining credentials">Faza 1 — Dolazak do kredencijala</h3>

        <p
          data-sr="Napadač dobija lozinku, OTP kod, ili sesijski token. Izvor može biti fišing, pozivna prevara, curenje, ili zlonamerni program. U ovom trenutku meta često nije svesna da je kompromitovana."
          data-en="The attacker obtains a password, OTP code, or a session token. The source can be phishing, vishing, a breach, or malware. At this point the target is often unaware of the compromise."
        >Napadač dobija lozinku, OTP kod, ili sesijski token. Izvor može biti fišing, pozivna prevara, curenje, ili zlonamerni program. U ovom trenutku meta često nije svesna da je kompromitovana.</p>
      </article>

      <!-- FAZA 2 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Pristup nalogu" data-en="Phase 2 — Account access">Faza 2 — Pristup nalogu</h3>

        <p
          data-sr="Napadač se prijavljuje sa ukradenim kredencijalima. Ako je dvofaktorska potvrda aktivan, može koristiti ukradeni OTP, SIM swap, ili socijalni inženjering. Pristup može doći sa nepoznate lokacije ili uređaja."
          data-en="The attacker logs in with stolen credentials. If 2FA is active, they may use a stolen OTP, a SIM swap, or social engineering. Access may come from an unknown location or device."
        >Napadač se prijavljuje sa ukradenim kredencijalima. Ako je dvofaktorska potvrda aktivan, može koristiti ukradeni OTP, SIM swap, ili socijalni inženjering. Pristup može doći sa nepoznate lokacije ili uređaja.</p>

        <div class="callout"
          data-sr="<strong>Prag:</strong> uspešna prijava. Posle ovog trenutka napadač ima kontrolu."
          data-en="<strong>Threshold:</strong> successful login. After this moment the attacker has control."
        ><strong>Prag:</strong> uspešna prijava. Posle ovog trenutka napadač ima kontrolu.</div>
      </article>

      <!-- FAZA 3 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Učvršćivanje pristupa" data-en="Phase 3 — Securing access">Faza 3 — Učvršćivanje pristupa</h3>

        <p
          data-sr="Napadač menja podatke za oporavak da zaključa vlasnika: novi imejl za oporavak, novi broj telefona, novi uređaj za dvofaktorsku potvrdu. Menja lozinku. Cilj je da vlasnik izgubi mogućnost povratka kontrole."
          data-en="The attacker changes recovery data to lock out the owner: a new recovery email, a new phone number, a new 2FA device. They change the password. The goal is for the owner to lose the ability to regain control."
        >Napadač menja podatke za oporavak da zaključa vlasnika: novi imejl za oporavak, novi broj telefona, novi uređaj za dvofaktorsku potvrdu. Menja lozinku. Cilj je da vlasnik izgubi mogućnost povratka kontrole.</p>

        <ul class="bullets">
          <li data-sr="promena lozinke." data-en="password change.">promena lozinke.</li>
          <li data-sr="promena imejla za oporavak." data-en="recovery email change.">promena imejla za oporavak.</li>
          <li data-sr="promena broja telefona za dvofaktorska potvrda." data-en="2FA phone number change.">promena broja telefona za dvofaktorska potvrda.</li>
          <li data-sr="dodavanje novog uređaja." data-en="adding new device.">dodavanje novog uređaja.</li>
          <li data-sr="brisanje sigurnosnih pitanja." data-en="deleting security questions.">brisanje sigurnosnih pitanja.</li>
        </ul>
      </article>

      <!-- FAZA 4 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Zloupotreba" data-en="Phase 4 — Exploitation">Faza 4 — Zloupotreba</h3>

        <p
          data-sr="Napadač koristi nalog za različite ciljeve, zavisno od tipa naloga. imejl služi kao ključ za ostale servise. bankarski nalog omogućava direktnu štetu. Društvena mreža služi za širenje napada."
          data-en="The attacker uses the account for various purposes depending on account type. Email serves as a key to other services. Banking accounts enable direct financial damage. Social networks serve to spread attacks."
        >Napadač koristi nalog za različite ciljeve, zavisno od tipa naloga. Imejl služi kao ključ za ostale servise. bankarski nalog omogućava direktnu štetu. Društvena mreža služi za širenje napada.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Imejl nalog" data-en="Imejl account">Imejl nalog</div>
            <ul class="bullets">
              <li data-sr="reset lozinki na drugim servisima." data-en="password resets on other services.">reset lozinki na drugim servisima.</li>
              <li data-sr="pristup poslovnoj prepisci." data-en="access to business correspondence.">pristup poslovnoj prepisci.</li>
              <li data-sr="fišing poruke kontaktima." data-en="phishing messages to contacts.">fišing poruke kontaktima.</li>
              <li data-sr="preusmeravanje faktura i uplata." data-en="redirecting invoices and payments.">preusmeravanje faktura i uplata.</li>
            </ul>
          </div>
          <div class="phase">
            <div class="label" data-sr="Bankarski / finansijski nalog" data-en="Banking / financial account">Bankarski / finansijski nalog</div>
            <ul class="bullets">
              <li data-sr="direktni transferi." data-en="direct transfers.">direktni transferi.</li>
              <li data-sr="promena podataka za primanje uplata." data-en="changing payment receiving details.">promena podataka za primanje uplata.</li>
              <li data-sr="podizanje kredita na ime žrtve." data-en="taking loans in victim's name.">podizanje kredita na ime žrtve.</li>
            </ul>
          </div>
          <div class="phase">
            <div class="label" data-sr="Društvena mreža" data-en="Social network">Društvena mreža</div>
            <ul class="bullets">
              <li data-sr="poruke prijateljima sa linkovima." data-en="messages to friends with links.">poruke prijateljima sa linkovima.</li>
              <li data-sr="pomoć zahtevi (grandparent scam)." data-en="help requests (grandparent scam).">pomoć zahtevi (grandparent scam).</li>
              <li data-sr="lažni oglasi i investicione ponude." data-en="fake ads and investment offers.">lažni oglasi i investicione ponude.</li>
            </ul>
          </div>
          <div class="phase">
            <div class="label" data-sr="E-commerce / marketplace" data-en="E-commerce / marketplace">E-commerce / marketplace</div>
            <ul class="bullets">
              <li data-sr="kupovine na sačuvane kartice." data-en="purchases on saved cards.">kupovine na sačuvane kartice.</li>
              <li data-sr="promena adrese dostave." data-en="changing delivery address.">promena adrese dostave.</li>
              <li data-sr="lažni oglasi sa kredibilitetom naloga." data-en="fake listings with account credibility.">lažni oglasi sa kredibilitetom naloga.</li>
            </ul>
          </div>
        </div>
      </article>

      <!-- FAZA 5 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Širenje napada" data-en="Phase 5 — Attack spreading">Faza 5 — Širenje napada</h3>

        <p
          data-sr="Preuzet nalog postaje vektor za nove napade. Kontakti primaju fišing poruke sa poznatog naloga, što povećava verovatnoću klika. Poslovni kontekst omogućava prevara u firmama prevare."
          data-en="The taken-over account becomes a vector for new attacks. Contacts receive phishing messages from a known account, increasing click likelihood. In business settings, it enables business fraud."
        >Preuzet nalog postaje vektor za nove napade. Kontakti primaju fišing poruke sa poznatog naloga, što povećava verovatnoću klika. Poslovni kontekst omogućava prevara u firmama prevare.</p>

        <div class="branch">
          <p><strong data-sr="Tipična grananja" data-en="Typical branching">Tipična grananja</strong></p>
          <ul class="bullets">
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
            <li><a href="impersonation-scam.html" data-sr="Lažno predstavljanje" data-en="Impersonation scam">Lažno predstavljanje</a></li>
            <li><a href="marketplace-scam.html" data-sr="Prevare na oglasnicima" data-en="Marketplace scams">Prevare na oglasnicima</a></li>
          </ul>
        </div>
      </article>
    </section>

    <!-- 4) ZNACI KOMPROMITACIJE -->
    <section class="card">
      <h2 data-sr="Znaci kompromitacije naloga" data-en="Signs of account compromise">Znaci kompromitacije naloga</h2>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Direktni znaci" data-en="Direct signs">Direktni znaci</div>
          <ul class="bullets">
            <li data-sr="prijave sa nepoznatih lokacija/uređaja." data-en="logins from unknown locations/devices.">prijave sa nepoznatih lokacija/uređaja.</li>
            <li data-sr="promena lozinke koju niste vi napravili." data-en="password change you didn't make.">promena lozinke koju niste vi napravili.</li>
            <li data-sr="notifikacije o promeni podataka za oporavak." data-en="notifications about recovery data changes.">notifikacije o promeni podataka za oporavak.</li>
            <li data-sr="poruke koje niste vi slali." data-en="messages you didn't send.">poruke koje niste vi slali.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Indirektni znaci" data-en="Indirect signs">Indirektni znaci</div>
          <ul class="bullets">
            <li data-sr="kontakti prijavljuju čudne poruke od vas." data-en="contacts report strange messages from you.">kontakti prijavljuju čudne poruke od vas.</li>
            <li data-sr="transakcije koje niste vi napravili." data-en="transactions you didn't make.">transakcije koje niste vi napravili.</li>
            <li data-sr="nemogućnost prijave sa ispravnom lozinkom." data-en="unable to log in with correct password.">nemogućnost prijave sa ispravnom lozinkom.</li>
            <li data-sr="imejl o resetu lozinke koji niste tražili." data-en="password reset email you didn't request.">imejl o resetu lozinke koji niste tražili.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 5) IZ UGLA PREVARANTA -->
    <section class="card">
      <h2 data-sr="Iz ugla prevaranta" data-en="From the scammers' side">Iz ugla prevaranta</h2>

      <p
        data-sr="Preuzeti nalozi imaju vrednost koja zavisi od tipa. imejl nalozi su najvredniji jer omogućavaju reset na svim servisima. Banking nalozi omogućavaju direktnu štetu. Društvene mreže i marketplace nalozi imaju vrednost za širenje napada i prevare sa kredibilitetom."
        data-en="Taken-over accounts have value depending on type. Email accounts are most valuable because they enable resets on all services. Banking accounts allow direct financial damage. Social networks and marketplace accounts have value for spreading attacks and credibility-based fraud."
      >Preuzeti nalozi imaju vrednost koja zavisi od tipa. Imejl nalozi su najvredniji jer omogućavaju reset na svim servisima. Banking nalozi omogućavaju direktnu štetu. Društvene mreže i marketplace nalozi imaju vrednost za širenje napada i prevare sa kredibilitetom.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Prioriteti posle pristupa" data-en="Priorities after access">Prioriteti posle pristupa</div>
          <ul class="bullets">
            <li data-sr="zaključati vlasnika (promena podataka za oporavak)." data-en="lock out owner (change recovery).">zaključati vlasnika (promena podataka za oporavak).</li>
            <li data-sr="izvući maksimalnu vrednost pre detekcije." data-en="extract maximum value before detection.">izvući maksimalnu vrednost pre detekcije.</li>
            <li data-sr="proširiti pristup na povezane naloge." data-en="expand access to connected accounts.">proširiti pristup na povezane naloge.</li>
            <li data-sr="iskoristiti za nove napade." data-en="use for new attacks.">iskoristiti za nove napade.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Vrednost naloga" data-en="Account value">Vrednost naloga</div>
          <ul class="bullets">
            <li data-sr="imejl: pristup svemu ostalom." data-en="email: access to everything else.">imejl: pristup svemu ostalom.</li>
            <li data-sr="banka: direktna finansijska šteta." data-en="bank: direct financial damage.">banka: direktna finansijska šteta.</li>
            <li data-sr="marketplace: prevare sa kredibilitetom." data-en="marketplace: fraud with credibility.">marketplace: prevare sa kredibilitetom.</li>
            <li data-sr="mreže: širenje fišinga." data-en="networks: spreading phishing.">mreže: širenje fišinga.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 6) STANDARDNA UPOZORENJA -->
    <section class="card">
      <h2 data-sr="Standardna upozorenja" data-en="Standard warnings">Standardna upozorenja</h2>

      <ul class="bullets">
        <li data-sr="imejl nalog je ključ za sve ostale — zaštiti ga najviše." data-en="email account is the key to everything else — protect it most.">imejl nalog je ključ za sve ostale — zaštiti ga najviše.</li>
        <li data-sr="ponovna upotreba lozinki omogućava domino efekat." data-en="password reuse enables domino effect.">ponovna upotreba lozinki omogućava domino efekat.</li>
        <li data-sr="dvofaktorska potvrda značajno smanjuje rizik, ali nije neprobojno." data-en="2FA significantly reduces risk but isn't bulletproof.">dvofaktorska potvrda značajno smanjuje rizik, ali nije neprobojno.</li>
        <li data-sr="prijave sa nepoznatih lokacija zahtevaju proveru." data-en="logins from unknown locations require investigation.">prijave sa nepoznatih lokacija zahtevaju proveru.</li>
      </ul>

      <div class="callout"
        data-sr="<strong>Praktično pravilo:</strong> različita lozinka za svaki važan servis + dvofaktorska potvrda gde je moguće + provera aktivnih sesija."
        data-en="<strong>Practical rule:</strong> different password for each important service + 2FA where possible + check active sessions."
      ><strong>Praktično pravilo:</strong> različita lozinka za svaki važan servis + 2FA gde je moguće + provera aktivnih sesija.</div>
    </section>

    <!-- 7) AKO JE ŠTETA NASTALA -->
    <section class="card">
      <h2 data-sr="Ako je nalog kompromitovan (redosled poteza)" data-en="If account is compromised (action order).">Ako je nalog kompromitovan (redosled poteza)</h2>

      <ol class="steps">
        <li data-sr="pokušaj povratka pristupa kroz zvaničan postupak oporavka naloga." data-en="try to regain access through recovery (official service channel).">pokušaj povratka pristupa kroz zvaničan postupak oporavka naloga.</li>
        <li data-sr="ako imaš pristup: promeni lozinku i sve podatke za oporavak." data-en="if you have access: change password and all recovery data.">ako imaš pristup: promeni lozinku i sve podatke za oporavak.</li>
        <li data-sr="uključi dvofaktorska potvrda ako nije bilo aktivno." data-en="enable 2FA if not active.">uključi dvofaktorska potvrda ako nije bilo aktivno.</li>
        <li data-sr="proveri i odjavi sve aktivne sesije." data-en="check and sign out all active sessions.">proveri i odjavi sve aktivne sesije.</li>
        <li data-sr="proveri povezane servise (posebno ako je imejl kompromitovan)." data-en="check connected services (especially if email is compromised).">proveri povezane servise (posebno ako je imejl kompromitovan).</li>
        <li data-sr="obavesti kontakte ako su primili sumnjive poruke." data-en="notify contacts if they received suspicious messages.">obavesti kontakte ako su primili sumnjive poruke.</li>
        <li data-sr="kontaktiraj banku ako su finansijski podaci ugroženi." data-en="contact bank if financial data is at risk.">kontaktiraj banku ako su finansijski podaci ugroženi.</li>
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
          <div class="label" data-sr="FBI IC3 + Javelin Strategy data (2023)" data-en="FBI IC3 + Javelin Strategy data (2023).">FBI IC3 + Javelin Strategy data (2023)</div>
          <ul class="bullets">
            <li data-sr="IC3 2023: Identity Theft 19,778 prijava, $126.2M gubitak." data-en="IC3 2023: Identity Theft 19,778 reports, $126.2M loss.">IC3 2023: Identity Theft 19,778 prijava, $126.2M gubitak.</li>
            <li data-sr="preuzimanje naloga se javlja kroz više kategorija (fišing, lična curenja podataka)." data-en="account takeover appears across multiple categories (phishing, personal data breaches).">preuzimanje naloga se javlja kroz više kategorija (fišing, lična curenja podataka).</li>
            <li data-sr="broj kompromitovanih naloga: 24 miliona (USA alone, 2023)." data-en="number of compromised accounts: 24 million (USA alone, 2023).">broj kompromitovanih naloga: 24 miliona (USA alone, 2023).</li>
            <li data-sr="prosečan gubitak po žrtvi: $12,000 (median: $4,500)." data-en="average loss per victim: $12,000 (median: $4,500).">prosečan gubitak po žrtvi: $12,000 (median: $4,500).</li>
            <li data-sr="finansijsko preuzimanje naloga: prosečan gubitak $18,500 (bankarstvo, investicije)." data-en="financial account takeover avg loss: $18,500 (banking, investment).">finansijsko preuzimanje naloga: prosečan gubitak $18,500 (bankarstvo, investicije).</li>
            <li data-sr="preuzimanje naloga na online prodavnicama — prosecni gubitak: ~$2,800." data-en="e-commerce account takeover — average loss: ~$2,800.">preuzimanje naloga na online prodavnicama — prosecni gubitak: ~$2,800.</li>
            <li data-sr="rast 2019-2023: 354% porast (eksponencijalni boost sa data breaches)." data-en="growth 2019-2023: 354% increase (exponential boost with data breaches).">rast 2019-2023: 354% porast (eksponencijalni boost sa data breaches).</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Raspodela tipova naloga (% preuzimanja)" data-en="Account type distribution (% of takeovers).">Raspodela tipova naloga (% preuzimanja)</div>
          <ul class="bullets">
            <li data-sr="imejl nalozi: 35% (KLJUČNI - otvaraju sve ostalo)." data-en="email accounts: 35% (KEY - unlocks everything else).">imejl nalozi: 35% (KLJUČNI - otvaraju sve ostalo).</li>
            <li data-sr="online prodavnice: 28%." data-en="e-commerce platforms: 28%.">online prodavnice: 28%.</li>
            <li data-sr="bankarski/finansijski: 18% (najveći prosečan gubitak)." data-en="banking/financial: 18% (highest avg loss).">bankarski/finansijski: 18% (najveći prosečan gubitak).</li>
            <li data-sr="drustvene mreze: 12%." data-en="social media platforms: 12%.">drustvene mreze: 12%.</li>
            <li data-sr="kripto menjačnice (Coinbase, Binance): 4% (najveća vrednost po nalogu)." data-en="crypto exchanges (Coinbase, Binance): 4% (highest value per account).">kripto menjačnice (Coinbase, Binance): 4% (najveća vrednost po nalogu).</li>
            <li data-sr="ostalo (gejming, striming i slično): 3%." data-en="other (gaming, streaming, etc): 3%.">ostalo (gejming, striming i slično): 3%.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Raspodela vektora napada (kako se dolazi do kredencijala)" data-en="Attack vector distribution (how credentials are obtained).">Raspodela vektora napada (kako se dolazi do kredencijala)</div>
          <ul class="bullets">
            <li data-sr="probijanje lozinki (data breaches): 42% (NAJVIŠE)." data-en="credential stuffing (data breaches): 42% (HIGHEST).">probijanje lozinki (data breaches): 42% (NAJVIŠE).</li>
            <li data-sr="fišing: 31% (imejl/SMS lažne forme)." data-en="phishing: 31% (email/SMS fake forms).">fišing: 31% (imejl/SMS lažne forme).</li>
            <li data-sr="zlonamerni program (virus koji snima sta kucas, kradljivac podataka): 14%." data-en="virus/malware (keylogger, kradljivac podataka): 14%.">zlonamerni program (virus koji snima sta kucas, kradljivac podataka): 14%.</li>
            <li data-sr="socijalni inženjering (pozivna prevara, pretexting): 8%." data-en="socijalni inženjering (vishing, pretexting): 8%.">socijalni inženjering (pozivna prevara, pretexting): 8%.</li>
            <li data-sr="SIM swap (dvofaktorska potvrda bypass): 3%." data-en="SIM swap (2FA bypass): 3%.">SIM swap (dvofaktorska potvrda bypass): 3%.</li>
            <li data-sr="gruba sila / slabe lozinke: 2%." data-en="brute force/weak passwords: 2%.">gruba sila / slabe lozinke: 2%.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Operativna ekonomija (underground market)" data-en="Operational economics (underground market).">Operativna ekonomija (underground market)</div>
          <ul class="bullets">
            <li data-sr="cena ukradenih kredencijala (dark web): imejl $2-15, banka $40-200, kripto $100-1,000." data-en="stolen credentials price (dark web): email $2-15, bank $40-200, crypto $100-1,000.">cena ukradenih kredencijala (dark web): imejl $2-15, banka $40-200, kripto $100-1,000.</li>
            <li data-sr="cena liste iz curenja podataka: 1M kredencijala = $500-5,000." data-en="curenje podataka list price: 1M credentials = $500-5,000.">cena liste iz curenja podataka: 1M kredencijala = $500-5,000.</li>
            <li data-sr="trošak probijanja lozinki: $0.0005-0.001 po pokušaju (proksi + automatizacija)." data-en="credential stuffing cost: $0.0005-0.001 per attempt (proxies + automation).">trošak probijanja lozinki: $0.0005-0.001 po pokušaju (proksi + automatizacija).</li>
            <li data-sr="stopa uspeha: 0.1-2% (zbog ponovne upotrebe lozinki)." data-en="success rate: 0.1-2% (due to password reuse).">stopa uspeha: 0.1-2% (zbog ponovne upotrebe lozinki).</li>
            <li data-sr="ROI za probijanje lozinki: 500-2,000% (niski troškovi, veliki obim)." data-en="ROI for credential stuffing: 500-2,000% (low cost, high volume).">ROI za probijanje lozinki: 500-2,000% (niski troškovi, veliki obim).</li>
            <li data-sr="vreme do unovčavanja: <24h (lažne kupovine, transferi)." data-en="time to monetize: <24h (fraudulent purchases, transfers).">vreme do unovčavanja: <24h (lažne kupovine, transferi).</li>
          </ul>
        </div>
      </div>

      <div class="callout"
        data-sr="<strong>Ekonomski profil:</strong> preuzimanje naloga ima najbrži povraćaj ulaganja među prevarama (unovčavanje za manje od 24 sata). Probijanje lozinki košta $500-1,000 za testiranje 1M kombinacija, a stopa uspeha od 0.1-2% znači 1,000-20,000 uspešnih prijava i profit od $50K-200K. Ponovna upotreba lozinki pravi domino efekat."
        data-en="<strong>Economic profile:</strong> account takeover has FASTEST ROI of all scams (<24h monetization). Credential stuffing costs $500-1,000 to test 1M combos, with 0.1-2% success rate = 1,000-20,000 successful logins = $50K-200K profit. Email account is KEY because it unlocks forgot password for ALL other accounts. Password reuse = domino effect."
      ><strong>Ekonomski profil:</strong> preuzimanje naloga ima najbrži povraćaj ulaganja među prevarama (unovčavanje za manje od 24 sata). Probijanje lozinki košta $500-1,000 za testiranje 1M kombinacija, a stopa uspeha od 0.1-2% znači 1,000-20,000 uspešnih prijava i profit od $50K-200K. Ponovna upotreba lozinki pravi domino efekat.</div>
    </section>

    
    <!-- CRVENE ZASTAVICE -->
    <section class="content-section">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Dobijate notifikaciju o prijavi s nepoznate lokacije ili uredaja." data-en="You receive a notification about a login from an unknown location or device.">Dobijate notifikaciju o prijavi s nepoznate lokacije ili uredaja.</li>
        <li data-sr="Lozinka je promenjena bez vaseg znanja." data-en="The password was changed without your knowledge.">Lozinka je promenjena bez vaseg znanja.</li>
        <li data-sr="Recovery imejl ili broj telefona je promenjen na nepoznat." data-en="The recovery email or phone number was changed to an unknown one.">Recovery imejl ili broj telefona je promenjen na nepoznat.</li>
        <li data-sr="Kontakti prijavljuju da su dobili cudne poruke od vas koje niste slali." data-en="Contacts report receiving strange messages from you that you did not send.">Kontakti prijavljuju da su dobili cudne poruke od vas koje niste slali.</li>
        <li data-sr="Ne mozete se prijaviti sa ispravnom lozinkom." data-en="You cannot log in with the correct password.">Ne mozete se prijaviti sa ispravnom lozinkom.</li>
        <li data-sr="Transakcije na finansijskim nalozima koje niste vi napravili." data-en="Transactions on financial accounts that you did not make.">Transakcije na finansijskim nalozima koje niste vi napravili.</li>
        <li data-sr="Imejl o resetu lozinke koji niste tražili." data-en="A password reset email you did not request.">Imejl o resetu lozinke koji niste tražili.</li>
        <li data-sr="Aktivne sesije na uredajima koje ne poznajete." data-en="Active sessions on devices you do not recognize.">Aktivne sesije na uredajima koje ne poznajete.</li>
        <li data-sr="Kupovine ili pretplate koje niste odobrili." data-en="Purchases or subscriptions you did not authorize.">Kupovine ili pretplate koje niste odobrili.</li>
        <li data-sr="Podaci o profilu su promenjeni bez vaseg znanja." data-en="Profile details were changed without your knowledge.">Podaci o profilu su promenjeni bez vaseg znanja.</li>
      </ul>
    </section>

    <!-- PROVERE -->
    <section class="content-section">
      <h2 data-sr="Provere: 8 brzih provera naloga" data-en="Checks: 8 quick account checks">Provere: 8 brzih provera naloga</h2>
      <ol class="steps">
        <li data-sr="Proveri aktivne sesije na svim nalozima i odjavi nepoznate." data-en="Check active sessions on all accounts and sign out unknown ones.">Proveri aktivne sesije na svim nalozima i odjavi nepoznate.</li>
        <li data-sr="Proveri podatke za oporavak i promeni ih ako su izmenjeni." data-en="Check recovery data and change if altered.">Proveri podatke za oporavak i promeni ih ako su izmenjeni.</li>
        <li data-sr="Proveri sve autorizovane aplikacije i ukloni nepoznate." data-en="Check all authorized apps and remove unknown ones.">Proveri sve autorizovane aplikacije i ukloni nepoznate.</li>
        <li data-sr="Pretraži imejl za poruke o resetovanju lozinki ili promeni podataka." data-en="Search your email for messages about password resets or data changes.">Pretraži imejl za poruke o resetovanju lozinki ili promeni podataka.</li>
        <li data-sr="Proveri da li koristis istu lozinku na vise servisa." data-en="Check whether you use the same password on multiple services.">Proveri da li koristis istu lozinku na vise servisa.</li>
        <li data-sr="Proveri status dvofaktorske potvrde na svim važnim nalozima." data-en="Check the 2FA status on all important accounts.">Proveri status dvofaktorske potvrde na svim važnim nalozima.</li>
        <li data-sr="Proveri da li je imejl nalog kompromitovan — on je prioritet jer omogucava reset svega." data-en="Check whether the email account is compromised — it is the priority as it enables resetting everything.">Proveri da li je imejl nalog kompromitovan — on je prioritet jer omogucava reset svega.</li>
        <li data-sr="Kontaktiraj banku ako su finansijski nalozi u riziku i zamrzni kartice." data-en="Contact your bank if financial accounts are at risk and freeze cards.">Kontaktiraj banku ako su finansijski nalozi u riziku i zamrzni kartice.</li>
      </ol>
    </section>

    <!-- CHECKLISTA -->
    <section class="content-section">
      <h2 data-sr="Checklista: pitanja posle kompromitacije naloga" data-en="Checklist: questions after account compromise">Checklista: pitanja posle kompromitacije naloga</h2>
      <ul class="bullets">
        <li data-sr="Da li mogu da se prijavim na nalog s lozinkom koju pamtim?" data-en="Can I log in to the account with the password I remember?">Da li mogu da se prijavim na nalog s lozinkom koju pamtim?</li>
        <li data-sr="Da li su imejl za oporavak i broj telefona i dalje moji?" data-en="Are the recovery email and phone number still mine?">Da li su imejl za oporavak i broj telefona i dalje moji?</li>
        <li data-sr="Da li postoje aktivne sesije na nepoznatim uredajima?" data-en="Are there active sessions on unknown devices?">Da li postoje aktivne sesije na nepoznatim uredajima?</li>
        <li data-sr="Da li su moji kontakti primili sumnjive poruke od mog naloga?" data-en="Did my contacts receive suspicious messages from my account?">Da li su moji kontakti primili sumnjive poruke od mog naloga?</li>
        <li data-sr="Da li postoje transakcije koje nisam ja napravio?" data-en="Are there transactions I did not make?">Da li postoje transakcije koje nisam ja napravio?</li>
        <li data-sr="Da li sam odjavio sve nepoznate sesije odmah?" data-en="Did I sign out all unknown sessions immediately?">Da li sam odjavio sve nepoznate sesije odmah?</li>
        <li data-sr="Da li sam promenio lozinku s cistog uredaja koji nije kompromitovan?" data-en="Did I change the password from a clean device that is not compromised?">Da li sam promenio lozinku s cistog uredaja koji nije kompromitovan?</li>
        <li data-sr="Da li koristim istu lozinku na drugim servisima koje treba promeniti?" data-en="Do I use the same password on other services that need to be changed?">Da li koristim istu lozinku na drugim servisima koje treba promeniti?</li>
        <li data-sr="Da li sam ukljucio dvofaktorsku potvrdu posle oporavka naloga?" data-en="Did I enable 2FA after recovering the account?">Da li sam ukljucio dvofaktorsku potvrdu posle oporavka naloga?</li>
        <li data-sr="Da li sam proverio sve naloge koji koriste isti imejl za reset lozinke?" data-en="Did I check all accounts that use the same email for password reset?">Da li sam proverio sve naloge koji koriste isti imejl za reset lozinke?</li>
        <li data-sr="Da li sam obavestio kontakte o incidentu?" data-en="Did I notify contacts about the incident?">Da li sam obavestio kontakte o incidentu?</li>
        <li data-sr="Da li sam prijavio incident policiji ako je nastala finansijska steta?" data-en="Did I report the incident to police if financial damage occurred?">Da li sam prijavio incident policiji ako je nastala finansijska steta?</li>
      </ul>
    </section>

    <!-- AKO SUMNJA KRENE -->
    <section class="content-section">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Imejl nalog ide prvi ako je kompromitovan — on kontrolise sve ostale." data-en="Email account goes first if compromised — it controls all others.">Imejl nalog ide prvi ako je kompromitovan — on kontrolise sve ostale.</li>
        <li data-sr="Pokušaj povratka pristupa kroz opciju za oporavak na zvaničnoj stranici servisa." data-en="Attempt to regain access through the recovery option on the service official page.">Pokušaj povratka pristupa kroz opciju za oporavak na zvaničnoj stranici servisa.</li>
        <li data-sr="Odmah promeni lozinku i sve podatke za oporavak sa čistog uređaja." data-en="Immediately change the password and all recovery data from a clean device.">Odmah promeni lozinku i sve podatke za oporavak sa čistog uređaja.</li>
        <li data-sr="Odjavi sve aktivne sesije i dodaj dvofaktorsku potvrdu." data-en="Sign out all active sessions and add 2FA.">Odjavi sve aktivne sesije i dodaj dvofaktorsku potvrdu.</li>
        <li data-sr="Proveri sve povezane servise koji koriste isti imejl za reset lozinke." data-en="Check all connected services that use the same email for password reset.">Proveri sve povezane servise koji koriste isti imejl za reset lozinke.</li>
        <li data-sr="Obavesti kontakte da su mogli da prime lažne poruke od tvog naloga." data-en="Notify contacts that they may have received fake messages from your account.">Obavesti kontakte da su mogli da prime lažne poruke od tvog naloga.</li>
        <li data-sr="Kontaktiraj banku ako su finansijski podaci bili dostupni i zamrzni kartice ako je potrebno." data-en="Contact your bank if financial data was accessible and freeze cards if necessary.">Kontaktiraj banku ako su finansijski podaci bili dostupni i zamrzni kartice ako je potrebno.</li>
      </ol>
    </section>

    <!-- AKO POMAŽES NEKOME -->
    <section class="content-section">
      <h2 data-sr="Ako pokusavas da pomognes nekome" data-en="If you are trying to help someone">Ako pokusavas da pomognes nekome</h2>
      <ul class="bullets">
        <li data-sr="Da li im se prikazuje poruka da je lozinka netacna iako je sigurno ispravna?" data-en="Are they getting a message that the password is incorrect even though they are sure it is correct?">Da li im se prikazuje poruka da je lozinka netacna iako je sigurno ispravna?</li>
        <li data-sr="Da li su kontakti prijavili da dobijaju cudne poruke od njihovog naloga?" data-en="Have contacts reported receiving strange messages from their account?">Da li su kontakti prijavili da dobijaju cudne poruke od njihovog naloga?</li>
        <li data-sr="Da li su nedavno kliknuli na link koji je tražio login?" data-en="Did they recently click a link that requested a login?">Da li su nedavno kliknuli na link koji je tražio login?</li>
        <li data-sr="Da li postoje transakcije na bankovnom nalogu koje nisu prepoznatljive?" data-en="Are there transactions on the bank account that are not recognizable?">Da li postoje transakcije na bankovnom nalogu koje nisu prepoznatljive?</li>
      </ul>
      <p data-sr="Recenice koje rade:" data-en="Sentences that help:">Recenice koje rade:</p>
      <ul class="bullets">
        <li data-sr="Imejl nalog je kljuc za sve ostale — ako je on kompromitovan, trebamo odmah da ga povratimo." data-en="The email account is the key to all others — if it is compromised, we need to recover it immediately.">Imejl nalog je kljuc za sve ostale — ako je on kompromitovan, trebamo odmah da ga povratimo.</li>
        <li data-sr="Hajde da proverimo aktivne sesije na nalogu — moci cemo da vidimo s kojih uredaja je neko prijavljen." data-en="Let us check the active sessions on the account — we will be able to see which devices are logged in.">Hajde da proverimo aktivne sesije na nalogu — moci cemo da vidimo s kojih uredaja je neko prijavljen.</li>
        <li data-sr="Promenu lozinke treba uraditi s cistog telefona ili racunara koji nisi koristio nedavno." data-en="The password change should be done from a clean phone or computer you have not used recently.">Promenu lozinke treba uraditi s cistog telefona ili racunara koji nisi koristio nedavno.</li>
        <li data-sr="Dvofaktorska potvrda sprecava napadaca da se ponovo prijavi cak i ako ima lozinku." data-en="Two-factor authentication prevents the attacker from logging in again even if they have the password.">Dvofaktorska potvrda sprecava napadaca da se ponovo prijavi cak i ako ima lozinku.</li>
      </ul>
    </section>

    <!-- POVEZANE PREVARE -->
    
<!-- 9) IZVORI -->
`
};
