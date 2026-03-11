window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["identity-theft"] = {
  raw_html: `
    <!-- 1) UVOD -->
    <section class="card">
      <h2 data-sr="Uvod: kako radi krađa identiteta" data-en="Introduction: how identity theft works">
        Uvod: kako radi krađa identiteta
      </h2>

      <p
        data-sr="Krađa identiteta nastaje kada neko koristi tuđe lične podatke — ime, JMBG, broj lične karte, datum rođenja, adresu — za otvaranje naloga, uzimanje kredita, kupovinu ili druge finansijske transakcije bez znanja i saglasnosti vlasnika. Žrtva najčešće ne zna da joj je identitet ukraden sve dok ne primi račun, ne bude odbijena za kredit, ili ne otkrije nepoznate aktivnosti u kreditnom dosijeu."
        data-en="Identity theft occurs when someone uses another person's personal data — name, social security number, ID number, date of birth, address — to open accounts, take out credit, make purchases, or conduct other financial transactions without the owner's knowledge or consent. The victim typically does not know their identity has been stolen until they receive a bill, are denied credit, or discover unknown activity in their credit file."
      >Krađa identiteta nastaje kada neko koristi tuđe lične podatke — ime, JMBG, broj lične karte, datum rođenja, adresu — za otvaranje naloga, uzimanje kredita, kupovinu ili druge finansijske transakcije bez znanja i saglasnosti vlasnika. Žrtva najčešće ne zna da joj je identitet ukraden sve dok ne primi račun, ne bude odbijena za kredit, ili ne otkrije nepoznate aktivnosti u kreditnom dosijeu.</p>

      <p
        data-sr="Krađa identiteta ima više oblika: finansijska krađa identiteta (otvaranje kreditnih kartica, uzimanje kredita, kupovine), medicinska krađa identiteta (korišćenje tuđeg zdravstvenog osiguranja za medicinske usluge), kriminalna krađa identiteta (davanje tuđih podataka policiji tokom hapšenja), i poreska krađa identiteta (podnošenje lažnih poreskih prijava radi povraćaja poreza). Svi oblici ostavljaju trag koji žrtva mora da čisti godinama."
        data-en="Identity theft has multiple forms: financial identity theft (opening credit cards, taking loans, making purchases), medical identity theft (using someone else's health insurance for medical services), criminal identity theft (giving someone else's data to police during an arrest), and tax identity theft (fišing false tax returns to claim refunds). All forms leave a tražil that the victim must clean up for years."
      >Krađa identiteta ima više oblika: finansijska krađa identiteta (otvaranje kreditnih kartica, uzimanje kredita, kupovine), medicinska krađa identiteta (korišćenje tuđeg zdravstvenog osiguranja za medicinske usluge), kriminalna krađa identiteta (davanje tuđih podataka policiji tokom hapšenja), i poreska krađa identiteta (podnošenje lažnih poreskih prijava radi povraćaja poreza). Svi oblici ostavljaju trag koji žrtva mora da čisti godinama.</p>

      <div class="callout"
        data-sr="<strong>Model:</strong> prikupljanje podataka (phishing, curenje, krađa fizičkih dokumenata) → provjera upotrebljivosti → otvaranje naloga ili kredita → finansijsko iskorišćavanje → pokrivanje tragova → žrtva otkriva problem."
        data-en="<strong>Model:</strong> data collection (phishing, breach, physical document theft) → usability check → account or credit opening → financial exploitation → covering tracks → victim discovers the problem."
      ><strong>Model:</strong> prikupljanje podataka (phishing, curenje, krađa fizičkih dokumenata) → provjera upotrebljivosti → otvaranje naloga ili kredita → finansijsko iskorišćavanje → pokrivanje tragova → žrtva otkriva problem.</div>

      <div class="callout"
        data-sr="<strong>Prag:</strong> prevarant ima dovoljno podataka da prođe verifikacione provere institucije — tipično ime, JMBG i adresu, ponekad i datum rođenja ili broj telefona."
        data-en="<strong>Threshold:</strong> the fraudster has enough data to pass the institution's verification checks — typically name, SSN/ID, and address, sometimes also date of birth or phone number."
      ><strong>Prag:</strong> prevarant ima dovoljno podataka da prođe verifikacione provere institucije — tipično ime, JMBG i adresu, ponekad i datum rođenja ili broj telefona.</div>
    </section>

    <!-- 2) KAKO GENERALNO RADI -->
    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika prikupljanja i zloupotrebe" data-en="How it works: collection and exploitation mechanics">
        Kako generalno radi: mehanika prikupljanja i zloupotrebe
      </h2>

      <p
        data-sr="Krađa identiteta nije jedan napad — to je lanac koji kreće od prikupljanja podataka i završava se finansijskim iskorišćavanjem. Svaka karika u lancu može biti odvojena u vremenu i lokaciji: podaci se kradu na jednom mestu, provere se vrše na drugom, a korišćenje se odvija na trećem. Ovo otežava detekciju i atribuciju."
        data-en="Identity theft is not a single attack — it is a chain that starts with data collection and ends with financial exploitation. Each link in the chain can be separated in time and location: data is stolen in one place, verification is done in another, and exploitation happens in a third. This makes detection and attribution difficult."
      >Krađa identiteta nije jedan napad — to je lanac koji kreće od prikupljanja podataka i završava se finansijskim iskorišćavanjem. Svaka karika u lancu može biti odvojena u vremenu i lokaciji: podaci se kradu na jednom mestu, provere se vrše na drugom, a korišćenje se odvija na trećem. Ovo otežava detekciju i atribuciju.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Kako se prikupljaju podaci" data-en="How data is collected">Kako se prikupljaju podaci</div>
          <ul class="bullets">
            <li data-sr="phishing imejlovi i lažne stranice za prikupljanje kredencijala." data-en="phishing emails and fake pages for credential collection.">phishing imejlovi i lažne stranice za prikupljanje kredencijala.</li>
            <li data-sr="curenje podataka iz organizacija koje čuvaju lične podatke." data-en="data leaks from organizations that store personal data.">curenje podataka iz organizacija koje čuvaju lične podatke.</li>
            <li data-sr="socijalni inženjering: telefonski pozivi, SMS, lažni formulari." data-en="social engineering: phone calls, SMS, fake forms.">socijalni inženjering: telefonski pozivi, SMS, lažni formulari.</li>
            <li data-sr="fizička krađa: dokumenti, pošta, novčanici, tašne." data-en="physical theft: documents, mail, wallets, bags.">fizička krađa: dokumenti, pošta, novčanici, tašne.</li>
            <li data-sr="kupovina podataka na dark web tržištu." data-en="purchasing data on dark web marketplaces.">kupovina podataka na dark web tržištu.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Kako se vrši zloupotreba" data-en="How exploitation happens">Kako se vrši zloupotreba</div>
          <ul class="bullets">
            <li data-sr="otvaranje kreditnih kartica ili kredita u ime žrtve." data-en="opening credit cards or loans in the victim's name.">otvaranje kreditnih kartica ili kredita u ime žrtve.</li>
            <li data-sr="online kupovina sa isporukom na drugu adresu." data-en="online purchases with delivery to a different address.">online kupovina sa isporukom na drugu adresu.</li>
            <li data-sr="preuzimanje postojećih bankarskih ili investicionih naloga." data-en="taking over existing banking or investment accounts.">preuzimanje postojećih bankarskih ili investicionih naloga.</li>
            <li data-sr="podnošenje poreske prijave pre žrtve radi povraćaja poreza." data-en="fišing a tax return before the victim to claim the refund.">podnošenje poreske prijave pre žrtve radi povraćaja poreza.</li>
            <li data-sr="medicinske usluge na tuđe zdravstveno osiguranje." data-en="medical services billed to someone else's health insurance.">medicinske usluge na tuđe zdravstveno osiguranje.</li>
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
        data-sr="Faze su prikazane kao operativni tok: šta prevarant radi, šta žrtva vidi, koji su signali detekcije i kada počinje grananje u šire posledice."
        data-en="Phases are shown as an operational flow: what the fraudster does, what the victim sees, what detection signals exist, and when branching into wider consequences begins."
      >Faze su prikazane kao operativni tok: šta prevarant radi, šta žrtva vidi, koji su signali detekcije i kada počinje grananje u šire posledice.</p>

      <!-- FAZA 1 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Prikupljanje podataka" data-en="Phase 1 — Data collection">
          Faza 1 — Prikupljanje podataka
        </h3>

        <p
          data-sr="Prevarant prikuplja lične podatke kroz direktne napade (phishing, vishing, smishing), kupovinom na dark webu, ili fizički (krađa dokumenata, pošte). U ovoj fazi žrtva nema vidljivih znakova da je nešto pošlo po zlu. Prikupljanje može da prethodi zloupotrebi za nedelje ili mesece."
          data-en="The fraudster collects personal data through direct attacks (phishing, vishing, smishing), dark web purchases, or physically (document theft, mail theft). At this stage, the victim has no visible signs that something has gone wrong. Collection can precede exploitation by weeks or months."
        >Prevarant prikuplja lične podatke kroz direktne napade (phishing, vishing, smishing), kupovinom na dark webu, ili fizički (krađa dokumenata, pošte). U ovoj fazi žrtva nema vidljivih znakova da je nešto pošlo po zlu. Prikupljanje može da prethodi zloupotrebi za nedelje ili mesece.</p>

        <ul class="bullets">
          <li data-sr="signal: imejl koji traži hitnu potvrdu ličnih podataka ili lozinke." data-en="signal: an email requesting urgent personal data confirmation or password.">signal: imejl koji traži hitnu potvrdu ličnih podataka ili lozinke.</li>
          <li data-sr="signal: telefonski poziv koji tvrdi da je institucija i traži JMBG ili datum rođenja." data-en="signal: a phone call claiming to be an institution and requesting an SSN or date of birth.">signal: telefonski poziv koji tvrdi da je institucija i traži JMBG ili datum rođenja.</li>
          <li data-sr="signal: nedostaje pošta koja se redovno prima (računi, izvodi)." data-en="signal: mail that is regularly received is missing (bills, statements).">signal: nedostaje pošta koja se redovno prima (računi, izvodi).</li>
        </ul>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
            <li><a href="vishing.html" data-sr="Višing" data-en="Vishing">Višing</a></li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> prevarant poseduje kombinaciju podataka dovoljnu za provjeru identiteta kod finansijskih institucija."
          data-en="<strong>Threshold:</strong> fraudster holds a data combination sufficient to pass identity verification at financial institutions."
        ><strong>Prag faze:</strong> prevarant poseduje kombinaciju podataka dovoljnu za provjeru identiteta kod finansijskih institucija.</div>
      </article>

      <!-- FAZA 2 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Provera upotrebljivosti podataka" data-en="Phase 2 — Data usability verification">
          Faza 2 — Provera upotrebljivosti podataka
        </h3>

        <p
          data-sr="Prevarant proverava da li prikupljeni podaci prolaze verifikacione procese: probni login na bankarski portal, provera kreditnog dosijea, provera podataka na manje zaštićenim servisima. Ova faza može biti automatizovana kroz skripte koje testiraju podatke u bulk-u."
          data-en="The fraudster verifies whether the collected data passes verification processes: trial login on a banking portal, credit file check, data verification on less-protected services. This phase can be automated through scripts that test data in bulk."
        >Prevarant proverava da li prikupljeni podaci prolaze verifikacione procese: probni login na bankarski portal, provera kreditnog dosijea, provera podataka na manje zaštićenim servisima. Ova faza može biti automatizovana kroz skripte koje testiraju podatke u bulk-u.</p>

        <ul class="bullets">
          <li data-sr="signal: neuspeli login pokušaji koji generišu obaveštenja o sumnjivim prijavama." data-en="signal: failed login attempts generating suspicious sign-in notifications.">signal: neuspeli login pokušaji koji generišu obaveštenja o sumnjivim prijavama.</li>
          <li data-sr="signal: kreditna provera od nepoznate institucije koja se pojavljuje u dosijeu." data-en="signal: a credit inquiry from an unknown institution appearing in the credit file.">signal: kreditna provera od nepoznate institucije koja se pojavljuje u dosijeu.</li>
          <li data-sr="signal: obaveštenje o novom nalogu kod servisa koji niste otvorili." data-en="signal: a new account notification from a service you did not open.">signal: obaveštenje o novom nalogu kod servisa koji niste otvorili.</li>
        </ul>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> prevarant potvrdi da podaci prolaze verifikacione provere i da je otvaranje naloga ili kredita izvodljivo."
          data-en="<strong>Threshold:</strong> fraudster confirms the data passes verification checks and that opening an account or credit is feasible."
        ><strong>Prag faze:</strong> prevarant potvrdi da podaci prolaze verifikacione provere i da je otvaranje naloga ili kredita izvodljivo.</div>
      </article>

      <!-- FAZA 3 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Otvaranje naloga ili uzimanje kredita" data-en="Phase 3 — Account opening or credit acquisition">
          Faza 3 — Otvaranje naloga ili uzimanje kredita
        </h3>

        <p
          data-sr="Prevarant otvara kreditne kartice, uzima pozajmice, otvara naloge za online kupovinu, ili podiže kredite koristeći tuđe podatke. Dokumenti koji stižu žrtvi (izjave, potvrde) se preusmere na drugu adresu, ili se digitalne obavijesti blokiraju promenom kontakt podataka na nalogu."
          data-en="The fraudster opens credit cards, takes out loans, opens online shopping accounts, or applies for mortgages using someone else's data. Documents sent to the victim (statements, confirmations) are redirected to another address, or digital notifications are blocked by changing contact information on the account."
        >Prevarant otvara kreditne kartice, uzima pozajmice, otvara naloge za online kupovinu, ili podiže kredite koristeći tuđe podatke. Dokumenti koji stižu žrtvi (izjave, potvrde) se preusmere na drugu adresu, ili se digitalne obavijesti blokiraju promenom kontakt podataka na nalogu.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Tipovi finansijske zloupotrebe" data-en="Types of financial exploitation">Tipovi finansijske zloupotrebe</div>
            <ul class="bullets">
              <li data-sr="kreditne kartice sa maksimalnim limitom i bez vraćanja dugova." data-en="credit cards with maximum limit and no debt repayment.">kreditne kartice sa maksimalnim limitom i bez vraćanja dugova.</li>
              <li data-sr="lični krediti ili pozajmice sa pravilima otplate koje pada na žrtvu." data-en="personal loans with repayment obligations that fall on the victim.">lični krediti ili pozajmice sa pravilima otplate koje pada na žrtvu.</li>
              <li data-sr="online kupovine sa isporukom na adresu prevaranta." data-en="online purchases with delivery to the fraudster's address.">online kupovine sa isporukom na adresu prevaranta.</li>
              <li data-sr="prevara pri iznajmljivanju stanova koristeći tuđi identitet." data-en="rental fraud using someone else's identity.">prevara pri iznajmljivanju stanova koristeći tuđi identitet.</li>
            </ul>
          </div>

          <div class="phase">
            <div class="label" data-sr="Kako prevarant skriva tragove" data-en="How the fraudster hides tracks">Kako prevarant skriva tragove</div>
            <ul class="bullets">
              <li data-sr="promena kontakt podataka (email, telefon, adresa) posle otvaranja naloga." data-en="changing contact information (email, phone, address) after opening the account.">promena kontakt podataka (email, telefon, adresa) posle otvaranja naloga.</li>
              <li data-sr="korišćenje VPN-a ili anonimnih uređaja za pristup nalozima." data-en="using VPN or anonymous devices to access accounts.">korišćenje VPN-a ili anonimnih uređaja za pristup nalozima.</li>
              <li data-sr="preusmeravanje pošte sa adrese žrtve." data-en="redirecting mail from the victim's address.">preusmeravanje pošte sa adrese žrtve.</li>
              <li data-sr="korišćenje prepaid kartica ili kripto za primanje novca." data-en="using prepaid cards or cryptocurrency to receive money.">korišćenje prepaid kartica ili kripto za primanje novca.</li>
            </ul>
          </div>
        </div>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
            <li><a href="impersonation-scam.html" data-sr="Lažno predstavljanje" data-en="Impersonation scam">Lažno predstavljanje</a></li>
          </ul>
        </div>
      </article>

      <!-- FAZA 4 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Finansijsko iskorišćavanje" data-en="Phase 4 — Financial exploitation">
          Faza 4 — Finansijsko iskorišćavanje
        </h3>

        <p
          data-sr="Prevarant maksimizira iskorišćavanje u kratkom vremenskom periodu pre nego što žrtva ili institucija otkrije prevaru. Kreditne linije se iscrpljuju, novac se prebacuje, kupovine se vrše sa isporukom ili preprodajom. Prevarant napušta identitet kada je vrednost iscrpljena ili kada preti detekcija."
          data-en="The fraudster maximizes exploitation in a short time window before the victim or institution discovers the fraud. Credit lines are exhausted, money is transferred, purchases are made for delivery or resale. The fraudster abandons the identity when its value is exhausted or when detection threatens."
        >Prevarant maksimizira iskorišćavanje u kratkom vremenskom periodu pre nego što žrtva ili institucija otkrije prevaru. Kreditne linije se iscrpljuju, novac se prebacuje, kupovine se vrše sa isporukom ili preprodajom. Prevarant napušta identitet kada je vrednost iscrpljena ili kada preti detekcija.</p>

        <ul class="bullets">
          <li data-sr="brza eskalacija duga koji žrtva ne zna da postoji." data-en="rapid escalation of debt the victim does not know exists.">brza eskalacija duga koji žrtva ne zna da postoji.</li>
          <li data-sr="kreditni dosije žrtve se pogoršava bez njenog znanja." data-en="victim's credit file deteriorates without their knowledge.">kreditni dosije žrtve se pogoršava bez njenog znanja.</li>
          <li data-sr="institucije šalju opomene na adresu žrtve — prvi vidljivi signal." data-en="institutions send warnings to the victim's address — the first visible signal.">institucije šalju opomene na adresu žrtve — prvi vidljivi signal.</li>
          <li data-sr="žrtva biva odbijena za kredit ili servis zbog nepoznatih negativnih unosa." data-en="victim is denied credit or service due to unknown negative entries.">žrtva biva odbijena za kredit ili servis zbog nepoznatih negativnih unosa.</li>
        </ul>
      </article>

      <!-- FAZA 5 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Žrtva otkriva problem i početak ispravljanja" data-en="Phase 5 — Victim discovers the problem and remediation begins">
          Faza 5 — Žrtva otkriva problem i početak ispravljanja
        </h3>

        <p
          data-sr="Otkrivanje često dolazi kasno — mesecima ili godinama posle početka zloupotrebe. Žrtva prima opomene za dugove koje nije napravila, biva odbijena za kredit, ili slučajno proverava kreditni dosije i vidi nepoznate unose. Ispravljanje štete je dugotrajan proces koji zahteva komunikaciju sa institucijama, pravnim sistemom i kreditnim biroima."
          data-en="Discovery often comes late — months or years after exploitation began. The victim receives warnings for debts they did not create, is denied credit, or accidentally checks their credit file and sees unknown entries. Remediation is a lengthy process requiring communication with institutions, the legal system, and credit bureaus."
        >Otkrivanje često dolazi kasno — mesecima ili godinama posle početka zloupotrebe. Žrtva prima opomene za dugove koje nije napravila, biva odbijena za kredit, ili slučajno proverava kreditni dosije i vidi nepoznate unose. Ispravljanje štete je dugotrajan proces koji zahteva komunikaciju sa institucijama, pravnim sistemom i kreditnim biroima.</p>

        <div class="branch">
          <p><strong data-sr="Tipične evolucije" data-en="Typical evolutions">Tipične evolucije</strong></p>
          <ul class="bullets">
            <li><a href="synthetic-identity-fraud.html" data-sr="Sintetička krađa identiteta" data-en="Synthetic identity fraud">Sintetička krađa identiteta</a></li>
            <li><a href="data-breach-extortion.html" data-sr="Ucena nakon krađe podataka" data-en="Data breach extortion">Ucena nakon krađe podataka</a></li>
          </ul>
        </div>
      </article>
    </section>

    <!-- 4) CRVENE ZASTAVICE -->
    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="obaveštenje o novom nalogu kod finansijske institucije koji niste otvorili." data-en="notification of a new account at a financial institution you did not open.">obaveštenje o novom nalogu kod finansijske institucije koji niste otvorili.</li>
        <li data-sr="kreditna provera od institucije sa kojom niste imali kontakt." data-en="a credit inquiry from an institution you have not contacted.">kreditna provera od institucije sa kojom niste imali kontakt.</li>
        <li data-sr="opomena ili fakturu za dug koji niste napravili." data-en="a warning or bill for a debt you did not create.">opomena ili faktura za dug koji niste napravili.</li>
        <li data-sr="odbijanje za kredit ili servis zbog „negativnog kreditnog dosijea." koji ne poznajete." data-en="denial of credit or service due to a negative credit record you do not recognize.">odbijanje za kredit ili servis zbog „negativnog kreditnog dosijea" koji ne poznajete“.</li>
        <li data-sr="nestanak redovne pošte koja je ranije stizala (računi, izvodi, potvrde)." data-en="disappearance of regular mail that previously arrived (bills, statements, confirmations).">nestanak redovne pošte koja je ranije stizala (računi, izvodi, potvrde).</li>
        <li data-sr="nepoznati unosi u kreditnom dosijeu: nalozi, kreditne linije, dugovi." data-en="unknown entries in the credit file: accounts, credit lines, debts.">nepoznati unosi u kreditnom dosijeu: nalozi, kreditne linije, dugovi.</li>
        <li data-sr="poziv naplate zbog duga koji ne prepoznajete kao svog." data-en="a collection call about a debt you do not recognize as yours.">poziv naplate zbog duga koji ne prepoznajete kao svog.</li>
        <li data-sr="neočekivano prijavljivanje poreza pod vašim JMBG-om pre nego što ste vi podneli prijavu." data-en="unexpected tax fišing under your social security number before you filed.">neočekivano prijavljivanje poreza pod vašim JMBG-om pre nego što ste vi podneli prijavu.</li>
      </ul>
    </section>

    <!-- 5) PROVERE -->
    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera za ranu detekciju" data-en="Checks: 8 quick checks for early detection">Provere: 8 brzih provera za ranu detekciju</h2>

      <p
        data-sr="Rane provere smanjuju štetu. Krađa identiteta koja se otkrije u prvim nedeljama može se zaustaviti pre nego što dugovi eskaliraju na nivo koji je teško ispraviti."
        data-en="Early checks reduce damage. Identity theft discovered in the first weeks can be stopped before debts escalate to a level that is difficult to correct."
      >Rane provere smanjuju štetu. Krađa identiteta koja se otkrije u prvim nedeljama može se zaustaviti pre nego što dugovi eskaliraju na nivo koji je teško ispraviti.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Redovne preventivne provere" data-en="Regular preventive checks">Redovne preventivne provere</div>
          <ul class="bullets">
            <li data-sr="godišnja provera kreditnog dosijea kod kreditnih biroa." data-en="annual credit file check at credit bureaus.">godišnja provera kreditnog dosijea kod kreditnih biroa.</li>
            <li data-sr="monitoring kreditnih provera (upozorenje kada neko proverava vaš kredit)." data-en="credit inquiry monitoring (alert when someone checks your credit).">monitoring kreditnih provera (upozorenje kada neko proverava vaš kredit).</li>
            <li data-sr="pregled bankarskih i kreditnih izoda svake nedelje." data-en="weekly review of bank and credit card statements.">pregled bankarskih i kreditnih izoda svake nedelje.</li>
            <li data-sr="provera da li su lični podaci procureli (haveibeenpwned.com za email)." data-en="checking whether personal data has been leaked (haveibeenpwned.com for email).">provera da li su lični podaci procureli (haveibeenpwned.com za email).</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Signali koji zahtevaju hitnu akciju" data-en="Signals requiring immediate action">Signali koji zahtevaju hitnu akciju</div>
          <ul class="bullets">
            <li data-sr="nepoznata kreditna provera ili nalog u kreditnom dosijeu." data-en="unknown credit inquiry or account in the credit file.">nepoznata kreditna provera ili nalog u kreditnom dosijeu.</li>
            <li data-sr="obaveštenje o novom nalogu koji niste otvorili." data-en="notification of a new account you did not open.">obaveštenje o novom nalogu koji niste otvorili.</li>
            <li data-sr="nestanak pošte ili promena adrese bez vašeg znanja." data-en="disappearance of mail or address change without your knowledge.">nestanak pošte ili promena adrese bez vašeg znanja.</li>
            <li data-sr="odbijanje za kredit ili servis bez jasnog razloga." data-en="denial of credit or service without a clear reason.">odbijanje za kredit ili servis bez jasnog razloga.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 6) CHECKLISTA -->
    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja ako sumnjate na krađu identiteta" data-en="Checklist: 12 questions if you suspect identity theft">Checklista: 12 pitanja ako sumnjate na krađu identiteta</h2>

      <p class="muted"
        data-sr="Ovaj blok je za brzu trijaž: koliko je ozbiljna situacija i šta treba odmah preduzeti."
        data-en="This block is for quick triage: how serious is the situation and what needs to be done immediately."
      >Ovaj blok je za brzu trijaž: koliko je ozbiljna situacija i šta treba odmah preduzeti.</p>

      <ul class="bullets">
        <li data-sr="Da li postoje nepoznati nalozi u kreditnom dosijeu?" data-en="Are there unknown accounts in the credit file?">Da li postoje nepoznati nalozi u kreditnom dosijeu?</li>
        <li data-sr="Da li su nedavno stigle opomene za dugove koje niste napravili?" data-en="Have warnings recently arrived for debts you did not create?">Da li su nedavno stigle opomene za dugove koje niste napravili?</li>
        <li data-sr="Da li ste bili odbijeni za kredit ili servis bez jasnog razloga?" data-en="Have you been denied credit or service without a clear reason?">Da li ste bili odbijeni za kredit ili servis bez jasnog razloga?</li>
        <li data-sr="Da li nedostaje redovna pošta (računi, izvodi, potvrde)?" data-en="Is regular mail missing (bills, statements, confirmations)?">Da li nedostaje redovna pošta (računi, izvodi, potvrde)?</li>
        <li data-sr="Da li je vaš JMBG ili lična karta ikada bila ukradena ili izgubljena?" data-en="Has your social security number or ID ever been stolen or lost?">Da li je vaš JMBG ili lična karta ikada bila ukradena ili izgubljena?</li>
        <li data-sr="Da li ste nedavno prošli kroz curenje podataka neke organizacije?" data-en="Have you recently been affected by an organizational data breach?">Da li ste nedavno prošli kroz curenje podataka neke organizacije?</li>
        <li data-sr="Da li znate ko ima pristup vašim ličnim podacima u fizičkom obliku?" data-en="Do you know who has access to your personal data in physical form?">Da li znate ko ima pristup vašim ličnim podacima u fizičkom obliku?</li>
        <li data-sr="Da li su sve vaše online lozinke jedinstvene i zaštićene dvofaktorskom autentifikacijom?" data-en="Are all your online passwords unique and protected by two-factor authentication?">Da li su sve vaše online lozinke jedinstvene i zaštićene dvofaktorskom autentifikacijom?</li>
        <li data-sr="Da li ste prijavili incident kod finansijskih institucija i kreditnih biroa?" data-en="Have you reported the incident to financial institutions and credit bureaus?">Da li ste prijavili incident kod finansijskih institucija i kreditnih biroa?</li>
        <li data-sr="Da li ste postavili credit freeze (zamrzavanje kreditnog profila) kod svih biroa?" data-en="Have you placed a credit freeze at all bureaus?">Da li ste postavili credit freeze (zamrzavanje kreditnog profila) kod svih biroa?</li>
        <li data-sr="Da li je prijavljen incident policiji za eventualnu krivičnu prijavu?" data-en="Has the incident been reported to police for a potential criminal complaint?">Da li je prijavljen incident policiji za eventualnu krivičnu prijavu?</li>
        <li data-sr="Da li pratite sve nove aktivnosti u kreditnom dosijeu posle otkrivanja?" data-en="Are you monitoring all new activity in the credit file after discovery?">Da li pratite sve nove aktivnosti u kreditnom dosijeu posle otkrivanja?</li>
      </ul>
    </section>

    <!-- 7) AKO SUMNJA KRENE -->
    <section class="card">
      <h2 data-sr="Ako otkrijete krađu identiteta: redosled poteza" data-en="If you discover identity theft: action order">Ako otkrijete krađu identiteta: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="postaviti credit freeze (zamrzavanje kredita) kod svih kreditnih biroa odmah." data-en="place a credit freeze at all credit bureaus immediately.">postaviti credit freeze (zamrzavanje kredita) kod svih kreditnih biroa odmah.</li>
        <li data-sr="prijaviti incident policiji i dobiti potvrdu prijave za komunikaciju sa institucijama." data-en="report the incident to police and obtain a confirmation for communicating with institutions.">prijaviti incident policiji i dobiti potvrdu prijave za komunikaciju sa institucijama.</li>
        <li data-sr="kontaktirati sve finansijske institucije gde su otvoreni nepoznati nalozi." data-en="contact all financial institutions where unknown accounts were opened.">kontaktirati sve finansijske institucije gde su otvoreni nepoznati nalozi.</li>
        <li data-sr="zatražiti zvaničnu kopiju kreditnog dosijea i osporiti nepoznate unose." data-en="request an official copy of the credit file and dispute unknown entries.">zatražiti zvaničnu kopiju kreditnog dosijea i osporiti nepoznate unose.</li>
        <li data-sr="promeniti sve lozinke i aktivirati dvofaktorsku autentifikaciju na svim nalozima." data-en="change all passwords and activate two-factor authentication on all accounts.">promeniti sve lozinke i aktivirati dvofaktorsku autentifikaciju na svim nalozima.</li>
        <li data-sr="pratiti kreditni dosije svake nedelje tokom prvih meseci posle otkrivanja." data-en="monitor the credit file weekly during the first months after discovery.">pratiti kreditni dosije svake nedelje tokom prvih meseci posle otkrivanja.</li>
      </ol>

      <div class="callout"
        data-sr="<strong>Zašto ovaj redosled radi:</strong> credit freeze odmah sprečava otvaranje novih naloga, prijava policiji legitimizuje sporove, a osporavanje unosa u dosijeu poništava finansijsku štetu."
        data-en="<strong>Why this order works:</strong> a credit freeze immediately prevents new account openings, police reporting legitimizes disputes, and disputing credit file entries reverses financial damage."
      ><strong>Zašto ovaj redosled radi:</strong> credit freeze odmah sprečava otvaranje novih naloga, prijava policiji legitimizuje sporove, a osporavanje unosa u dosijeu poništava finansijsku štetu.</div>
    </section>

    <!-- 8) AKO POMAŽEŠ NEKOME -->
    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome ko je žrtva krađe identiteta" data-en="If you are helping someone who is a victim of identity theft">Ako pokušavaš da pomogneš nekome ko je žrtva krađe identiteta</h2>

      <p
        data-sr="Kada neko otkrije krađu identiteta, može biti preplavljen obimom problema: više institucija, dugovi, kreditni dosije. Najkorisnije je pomoći im da prioritizuju korake i prvu akciju — credit freeze — izvedu odmah, a ostatak sistematično."
        data-en="When someone discovers identity theft, they can be overwhelmed by the scale of the problem: multiple institutions, debts, credit file. The most useful approach is helping them prioritize steps and execute the first action — a credit freeze — immediately, with the rest done systematically."
      >Kada neko otkrije krađu identiteta, može biti preplavljen obimom problema: više institucija, dugovi, kreditni dosije. Najkorisnije je pomoći im da prioritizuju korake i prvu akciju — credit freeze — izvedu odmah, a ostatak sistematično.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li ste već postavili credit freeze kod svih kreditnih biroa?" data-en="Have you already placed a credit freeze at all credit bureaus?">Da li ste već postavili credit freeze kod svih kreditnih biroa?</li>
            <li data-sr="Da li imate potvrdu policijske prijave za komunikaciju sa institucijama?" data-en="Do you have a police report confirmation for communicating with institutions?">Da li imate potvrdu policijske prijave za komunikaciju sa institucijama?</li>
            <li data-sr="Da li znate koje su institucije pogođene i kakav je obim duga?" data-en="Do you know which institutions are affected and what the debt scope is?">Da li znate koje su institucije pogođene i kakav je obim duga?</li>
            <li data-sr="Da li ste zatražili zvaničnu kopiju kreditnog dosijea sa svim unosima?" data-en="Have you requested an official copy of the credit file with all entries?">Da li ste zatražili zvaničnu kopiju kreditnog dosijea sa svim unosima?</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Credit freeze je besplatan u većini zemalja i odmah sprečava nova otvaranja." data-en="A credit freeze is free in most countries and immediately prevents new openings.">Credit freeze je besplatan u većini zemalja i odmah sprečava nova otvaranja.</li>
            <li data-sr="Policijska prijava je dokument koji institucijama dokazuje da si žrtva, a ne dužnik." data-en="A police report is a document that proves to institutions you are a victim, not a debtor.">Policijska prijava je dokument koji institucijama dokazuje da si žrtva, a ne dužnik.</li>
            <li data-sr="Ispravljanje kreditnog dosijea je sporo, ali svaki osporeni unos smanjuje štetu." data-en="Correcting the credit file is slow, but every disputed entry reduces damage.">Ispravljanje kreditnog dosijea je sporo, ali svaki osporeni unos smanjuje štetu.</li>
            <li data-sr="Hajde da napravimo listu svih institucija i redom ih kontaktiramo." data-en="Let's make a list of all institutions and contact them one by one.">Hajde da napravimo listu svih institucija i redom ih kontaktiramo.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 9) IZVORI -->

<section class="content-section">
  <h2 data-sr="Povezane prevare" data-en="Related scams">Povezane prevare</h2>
  <ul class="bullets">
    <li><a href="synthetic-identity-fraud.html" data-sr="Sinteticki identitet." data-en="Synthetic identity fraud.">Sinteticki identitet</a></li>
    <li><a href="account-takeover.html" data-sr="Preuzimanje naloga." data-en="Account takeover.">Preuzimanje naloga</a></li>
    <li><a href="phishing.html" data-sr="Fišing." data-en="Phishing.">Fišing</a></li>
    <li><a href="sim-swap.html" data-sr="SIM swap prevara." data-en="SIM swap scam.">SIM swap prevara</a></li>
    <li><a href="data-breach-extortion.html" data-sr="Iznuda podacima." data-en="Data breach extortion.">Iznuda podacima</a></li>
  </ul>
</section>

<section class="card sources" id="sources">
      <h2 data-sr="Izvori" data-en="Sources">Izvori</h2>
      <ul>
        <li><a href="https://consumer.ftc.gov/features/identity-theft" target="_blank" rel="noopener noreferrer">FTC — IdentityTheft.gov</a></li>
        <li><a href="https://www.ic3.gov" target="_blank" rel="noopener noreferrer">FBI IC3 — Internet Crime Complaint Center</a></li>
        <li><a href="https://www.annualcreditreport.com" target="_blank" rel="noopener noreferrer">Annual Credit Report — Free Credit File Access</a></li>
      </ul>
    </section>
  `
};
