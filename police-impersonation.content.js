window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["police-impersonation"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi lažno predstavljanje policije" data-en="Introduction: how police impersonation works">Uvod: kako radi lažno predstavljanje policije</h2>
      <p data-sr="Lažno predstavljanje policije je jedna od najtežih varijanti institucionalnih prevara jer koristi strah od krivičnog gonjenja. Prevarant zove i tvrdi da je policajac, istražni sudija, tužilac ili agent finansijske policije. Optužba je uvek ozbiljna: žrtvin bankovni nalog je korišćen u pranju novca, droge ili terorističkom finansiranju. Jedini izlaz je prenos novca na „bezbedni nalog“ dok se istraga ne završi." data-en="Police impersonation is one of the most serious institutional scam variants because it exploits the fear of criminal prosecution. The fraudster calls claiming to be a police officer, examining magistrate, prosecutor, or financial crimes agent. The accusation is always serious: the victim's bank account was used for money laundering, drug trafficking, or terrorist financing. The only way out is transferring money to a safe account while the investigation concludes.">Lažno predstavljanje policije koristi strah od krivičnog gonjenja. Prevarant tvrdi da je policajac ili istražni sudija, optužuje žrtvu za teška krivična dela i nudi jedini izlaz: prenos novca na bezbedni nalog.</p>
      <p data-sr="Posebnost ove šeme je da se ne oseća kao prevara u toku — jer meta nije pozvana da investira ili kupi nešto. Meta je pozvana da se odbrani od optužbe i zaštiti sopstveni novac. Ta logika čini šemu izuzetno uverljivom, posebno za osobe bez prethodnog iskustva s krivičnim postupcima." data-en="What makes this scheme unusual is that it does not feel like a scam during execution — because the target is not asked to invest or buy something. The target is asked to defend against a charge and protect their own money. This logic makes the scheme extremely convincing, especially for people without prior experience with criminal proceedings.">Šema ne izgleda kao prevara jer meta 'štiti sopstveni novac'. Ta logika je centralni mehanizam koji čini ovu varijantu posebno uverljivom.</p>
      <div class="callout" data-sr="<strong>Model:</strong> poziv → policajac/istražni sudija → optužba (pranje novca, droge) → „bezbedni nalog“ → prenos → nova optužba → serija prenosa." data-en="<strong>Model:</strong> call → police/examining magistrate → accusation (money laundering, drugs) → safe account → transfer → new charge → series of transfers."><strong>Model:</strong> poziv → policajac/istražni sudija → optužba (pranje novca, droge) → 'bezbedni nalog' → prenos → nova optužba → serija prenosa.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> meta je uverena da je optužena za krivično delo i da mora odmah preneti novac na bezbedni nalog da izbegne hapšenje." data-en="<strong>Threshold:</strong> the target is convinced they are accused of a crime and must immediately transfer money to a safe account to avoid arrest."><strong>Prag:</strong> meta je uverena da je optužena za krivično delo i da mora odmah preneti novac na bezbedni nalog da izbegne hapšenje.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika straha i prenosa" data-en="How it works: fear and transfer mechanics">Kako generalno radi: mehanika straha i prenosa</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gradi strah i urgentnost" data-en="What builds fear and urgency">Šta gradi strah i urgentnost</div>
          <ul class="bullets">
            <li data-sr="ozbiljna optužba povezana sa žrtvinim stvarnim bankovnim nalogom." data-en="a serious accusation linked to the victim's actual bank account.">ozbiljna optužba povezana sa žrtvinim stvarnim bankovnim nalogom.</li>
            <li data-sr="reference na broj naloga, datum transakcije ili ime banke koje zvuče konkretno." data-en="references to account numbers, transaction dates, or bank name that sound specific.">reference na broj naloga, datum transakcije ili ime banke koje zvuče konkretno.</li>
            <li data-sr="nalog za hapšenje koji će biti izdat ako se ne deluje odmah." data-en="an arrest warrant that will be issued if immediate action is not taken.">nalog za hapšenje koji će biti izdat ako se ne deluje odmah.</li>
            <li data-sr="tajnost: 'ne smeš reći nikome jer kvarite istragu„." data-en="secrecy: “you must not tell anyone because it compromises the investigation'.">tajnost: 'ne smeš reći nikome jer kvarite istragu'.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Kako se uvodi prenos novca" data-en="How the money transfer is introduced">Kako se uvodi prenos novca</div>
          <ul class="bullets">
            <li data-sr="novac mora biti privremeno premešten na „bezbedni nalog“ dok se istraga ne završi." data-en="money must be temporarily moved to a safe account while the investigation concludes.">novac mora biti privremeno premešten na 'bezbedni nalog' dok se istraga ne završi.</li>
            <li data-sr="prenos se prikazuje kao zaštita žrtvinog novca, a ne kao plaćanje." data-en="the transfer is presented as protecting the victim's money, not as a payment.">prenos se prikazuje kao zaštita žrtvinog novca, a ne kao plaćanje.</li>
            <li data-sr="policija daje detaljne instrukcije za prenos 'da bi sve izgledalo legalno„." data-en="police provide detailed transfer instructions “so everything looks legitimate'.">policija daje detaljne instrukcije za prenos 'da bi sve izgledalo legalno'.</li>
            <li data-sr="prenos se vrši u gotovini, kriptu ili bankovnim transferom na strani račun." data-en="transfer is made in cash, crypto, or bank transfer to a foreign account.">prenos se vrši u gotovini, kriptu ili bankovnim transferom na strani račun.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)." data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Poziv i optužba" data-en="Phase 1 — Call and accusation">Faza 1 — Poziv i optužba</h3>
        <p data-sr="Prevarant zove s broja koji izgleda kao broj policijske stanice ili pravosudnog organa. Odmah iznosi optužbu: žrtvin nalog je identifikovan u istraži pranja novca. Ton je hladan i profesionalan. Žrtva nema prilike da replicira jer inspektor odmah prelazi na „proceduru." data-en="The fraudster calls from a number that looks like a police station or judicial authority. An accusation is immediately stated: the victim's account was identified in a money laundering investigation. The tone is cold and professional. The victim has no chance to respond because the inspector immediately moves to procedure.">Prevarant zove s broja koji izgleda kao policijska stanica. Optužba je direktna i ozbiljna: žrtvin nalog je u istraži pranja novca. Ton je hladan, proceduralan.</p>
        <ul class="bullets">
          <li data-sr="signal: policija ne kontaktira sumnjičene telefonom pre hapšenja u standardnoj proceduri." data-en="signal: police do not contact suspects by phone before arrest in standard procedure.">signal: policija ne kontaktira sumnjičene telefonom pre hapšenja u standardnoj proceduri.</li>
          <li data-sr="signal: optužba se iznosi odmah bez upozorenja i bez prava na advokata u pozivu." data-en="signal: accusation is stated immediately without warning and without right to a lawyer during the call.">signal: optužba se iznosi odmah bez upozorenja i bez prava na advokata u pozivu.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta ne spusti slušalicu i ostane na liniji da čuje „proceduru." data-en="<strong>Threshold:</strong> the target does not hang up and stays on the line to hear the procedure."><strong>Prag faze:</strong> meta ne spusti slušalicu i ostane na liniji da čuje 'proceduru'.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Detalji koji ubede" data-en="Phase 2 — Convincing details">Faza 2 — Detalji koji ubede</h3>
        <p data-sr="Inspektor iznosi detalje koji zvuče specifično: datum sumnjive transakcije, ime banke, iznos. Ovi detalji su ili pogođeni nasumično ili su dobijeni iz prethodno ukradenih podataka. Deo detalja je netačan, ali meta nije u poziciji da to odmah uoči jer je pod stresom." data-en="The inspector presents details that sound specific: date of the suspicious transaction, bank name, amount. These details are either randomly guessed or obtained from previously stolen data. Some details may be inaccurate, but the target is not in a position to notice immediately because they are under stress.">Inspektor iznosi specifične detalje. Deo je tačan (ime banke, datum), deo nije — ali meta je pod stresom i ne proverava.</p>
        <ul class="bullets">
          <li data-sr="signal: detalji su delimično tačni ali ne mogu se proveriti bez prekida poziva." data-en="signal: details are partially accurate but cannot be verified without ending the call.">signal: detalji su delimično tačni ali ne mogu se proveriti bez prekida poziva.</li>
          <li data-sr="signal: inspektor zabranjuje pravljenje pauze ili konsultacije." data-en="signal: inspector forbids taking a pause or consulting anyone.">signal: inspektor zabranjuje pravljenje pauze ili konsultacije.</li>
        </ul>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Bezbedni nalog i prenos" data-en="Phase 3 — Safe account and transfer">Faza 3 — Bezbedni nalog i prenos</h3>
        <p data-sr="Inspektor objašnjava da je jedini način da se zaštiti žrtvin novac i dokaže nevinost prenos sredstava na „bezbedni nalog policije“. Nalog je u stvari nalog prevaranta. Prenos se mora izvršiti hitno, gotovinom, kriptom ili bankovnim transferom. Žrtva koja postavi pitanje dobija odgovor da se time samo pogoršava situacija." data-en="The inspector explains that the only way to protect the victim's money and prove innocence is transferring funds to a police safe account. The account is actually the fraudster's. Transfer must be made urgently, in cash, crypto, or bank transfer. A victim who asks questions is told this only worsens their situation.">Inspektor objašnjava proceduru: jedini izlaz je prenos na bezbedni nalog policije. Nalog je prevarantov. Prenos mora biti hitan.</p>
        <ul class="bullets">
          <li data-sr="signal: policija nikad ne traži prenos novca na sopstveni nalog kao deo istrage." data-en="signal: police never request transfer of money to their own account as part of an investigation.">signal: policija nikad ne traži prenos novca na sopstveni nalog kao deo istrage.</li>
          <li data-sr="signal: prenos u gotovini ili kriptu nije standardna policijska procedura." data-en="signal: transfer in cash or crypto is not standard police procedure.">signal: prenos u gotovini ili kriptu nije standardna policijska procedura.</li>
          <li data-sr="signal: nalog primatelja je privatan, stran ili kripto adresa." data-en="signal: the recipient account is private, foreign, or a crypto address.">signal: nalog primatelja je privatan, stran ili kripto adresa.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="tax-authority-impersonation.html" data-sr="Lažno predstavljanje poreske uprave" data-en="Tax authority impersonation">Lažno predstavljanje poreske uprave</a></li>
            <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Indikator:</strong> policija nikad ne traži prenos novca telefonom. Ovo je definitivni signal prevare." data-en="<strong>Indicator:</strong> police never request money transfers over the phone. This is the definitive scam signal."><strong>Indikator:</strong> policija nikad ne traži prenos novca telefonom. Ovo je definitivni signal prevare.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Tajnost i izolacija" data-en="Phase 4 — Secrecy and isolation">Faza 4 — Tajnost i izolacija</h3>
        <p data-sr="Inspektor naglašava da meta ne sme nikome reći za istragu — ni porodici ni banci. Razlog koji se navodi je zaštita istrage. Stvarni razlog je eliminisanje svakog kontakta koji bi mogao da uoči prevaru i zaustavi prenos." data-en="The inspector emphasizes the target must not tell anyone about the investigation — not family, not the bank. The stated reason is protecting the investigation. The real reason is eliminating any contact that could identify the scam and stop the transfer.">Inspektor insistira na apsolutnoj tajnosti. Razlog je 'zaštita istrage'. Stvarni razlog je eliminisanje kontakta koji bi mogao zaustaviti prenos.</p>
        <ul class="bullets">
          <li data-sr="signal: zabrana razgovora s bankom je najjači indikator prevare." data-en="signal: forbidding conversation with the bank is the strongest scam indicator.">signal: zabrana razgovora s bankom je najjači indikator prevare.</li>
          <li data-sr="signal: meta treba da laže bankarskom blagajniku o razlogu podizanja gotovine." data-en="signal: target should lie to the bank teller about the reason for withdrawing cash.">signal: meta treba da laže bankarskom blagajniku o razlogu podizanja gotovine.</li>
        </ul>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Serija transfera" data-en="Phase 5 — Transfer series">Faza 5 — Serija transfera</h3>
        <p data-sr="Posle prvog prenosa inspektor se vraća: istraga je pokazala dodatne sumnjive transakcije, potreban je još jedan prenos. Svaki novi prenos ima novu pravnu osnovu. Ovo traže dok se žrtva iscrpi ili dok ne prepozna šemu." data-en="After the first transfer, the inspector returns: the investigation revealed additional suspicious transactions, another transfer is needed. Each new transfer has a new legal basis. This continues until the victim is exhausted or recognizes the scheme.">Posle prvog prenosa sledi novi zahtev pod novim pravnim osnovom. Ovo je avansna šema u policijskom pakovanju.</p>
        <div class="callout" data-sr="<strong>Filter:</strong> legitimna policija ne vraća se s novim finansijskim zahtevima tokom iste istrage. Ponavljanje je definitivni signal serijske prevare." data-en="<strong>Filter:</strong> legitimate police do not return with new financial demands during the same investigation. Repetition is the definitive signal of a serial scam."><strong>Filter:</strong> legitimna policija ne vraća se s novim finansijskim zahtevima tokom iste istrage. Ponavljanje je definitivni signal serijske prevare.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="policija kontaktira telefonom s optužbom za krivično delo bez prethodne najave." data-en="police contact by phone with a criminal accusation without prior notice.">policija kontaktira telefonom s optužbom za krivično delo bez prethodne najave.</li>
        <li data-sr="jedini izlaz je prenos novca na „bezbedni nalog policije." data-en="the only way out is a money transfer to a police safe account.">jedini izlaz je prenos novca na 'bezbedni nalog policije'.</li>
        <li data-sr="zabrana razgovora s bankom, advokatom ili porodicom tokom poziva." data-en="ban on speaking to the bank, lawyer, or family during the call.">zabrana razgovora s bankom, advokatom ili porodicom tokom poziva.</li>
        <li data-sr="meta treba da sakrije razlog podizanja gotovine od bankara." data-en="target should hide the reason for cash withdrawal from the banker.">meta treba da sakrije razlog podizanja gotovine od bankara.</li>
        <li data-sr="prenos u gotovini, kriptu ili na strani račun kao deo „istrage." data-en="transfer in cash, crypto, or to a foreign account as part of the investigation.">prenos u gotovini, kriptu ili na strani račun kao deo 'istrage'.</li>
        <li data-sr="posle prvog prenosa stiže zahtev za još jednim pod novom pravnom osnovom." data-en="after the first transfer, a new demand arrives under a new legal basis.">posle prvog prenosa stiže zahtev za još jednim pod novom pravnom osnovom.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 6 brzih provera" data-en="Checks: 6 quick checks">Provere: 6 brzih provera</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Ključne provere" data-en="Key checks">Ključne provere</div>
          <ul class="bullets">
            <li data-sr="policija nikad ne kontaktira sumnjičene telefonom pre hapšenja — to nije procedura." data-en="police never contact suspects by phone before arrest — this is not procedure.">policija nikad ne kontaktira sumnjičene telefonom pre hapšenja — to nije procedura.</li>
            <li data-sr="pozovi broj policije iz imenika — ne iz poziva koji si dobio." data-en="call the police number from the phone book — not from the call you received.">pozovi broj policije iz imenika — ne iz poziva koji si dobio.</li>
            <li data-sr="pitaj advokata da li postoji istraga na tvoje ime u javnom registru." data-en="ask a lawyer whether there is an investigation in your name in the public registry.">pitaj advokata da li postoji istraga na tvoje ime u javnom registru.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Provere zahteva" data-en="Demand checks">Provere zahteva</div>
          <ul class="bullets">
            <li data-sr="policija nikad ne traži prenos novca kao deo standardne istražne procedure." data-en="police never request money transfers as part of standard investigative procedure.">policija nikad ne traži prenos novca kao deo standardne istražne procedure.</li>
            <li data-sr="zabrana razgovora s advokatom tokom krivičnog postupka nije legalna." data-en="prohibiting conversation with a lawyer during criminal proceedings is not legal.">zabrana razgovora s advokatom tokom krivičnog postupka nije legalna.</li>
            <li data-sr="zatraži pisani nalog ili pozivnicu pre bilo kakve saradnje." data-en="request a written warrant or summons before any cooperation.">zatraži pisani nalog ili pozivnicu pre bilo kakve saradnje.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 10 pitanja ako te 'policija„ zove" data-en="Checklist: 10 questions if police are calling you">Checklista: 10 pitanja ako te “policija' zove</h2>
      <ul class="bullets">
        <li data-sr="Da li si dobio pisani nalog ili zvanični poziv pre ovog poziva?" data-en="Did you receive a written warrant or official summons before this call?">Da li si dobio pisani nalog ili zvanični poziv pre ovog poziva?</li>
        <li data-sr="Da li kontakt dozvoljava razgovor s advokatom pre davanja izjave?" data-en="Does the contact allow speaking to a lawyer before making a statement?">Da li kontakt dozvoljava razgovor s advokatom pre davanja izjave?</li>
        <li data-sr="Da li policija traži prenos novca kao deo procedure?" data-en="Is police requesting a money transfer as part of the procedure?">Da li policija traži prenos novca kao deo procedure?</li>
        <li data-sr="Da li prenos ide na privatni nalog, kripto adresu ili nepoznatu firmu?" data-en="Does the transfer go to a private account, crypto address, or unknown company?">Da li prenos ide na privatni nalog, kripto adresu ili nepoznatu firmu?</li>
        <li data-sr="Da li kontakt zabranjuje razgovor s bankom ili porodicom?" data-en="Does the contact forbid speaking to the bank or family?">Da li kontakt zabranjuje razgovor s bankom ili porodicom?</li>
        <li data-sr="Da li posle prvog prenosa stiže novi zahtev pod novim osnovom?" data-en="After the first transfer, does a new demand arrive under a new basis?">Da li posle prvog prenosa stiže novi zahtev pod novim osnovom?</li>
        <li data-sr="Da li se broj može pozvati nazad i dostiže li isti istražni tim?" data-en="Can the number be called back and does it reach the same investigative team?">Da li se broj može pozvati nazad i dostiže li isti istražni tim?</li>
        <li data-sr="Da li se istraga može verifikovati u javnom registru predmeta ili u sudu?" data-en="Can the investigation be verified in the public case registry or at the court?">Da li se istraga može verifikovati u javnom registru predmeta ili u sudu?</li>
        <li data-sr="Da li inspektor insistira da meta ostane na liniji bez prekida?" data-en="Does the inspector insist the target stay on the line without interruption?">Da li inspektor insistira da meta ostane na liniji bez prekida?</li>
        <li data-sr="Da li pauza od 24h menja situaciju ili kontakt postaje agresivniji?" data-en="Does a 24-hour pause change the situation or does the contact become more aggressive?">Da li pauza od 24h menja situaciju ili kontakt postaje agresivniji?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="spusti slušalicu i pozovi advokata ili pravnu pomoć odmah." data-en="hang up and call a lawyer or legal aid immediately.">spusti slušalicu i pozovi advokata ili pravnu pomoć odmah.</li>
        <li data-sr="pozovi zvanični broj policije iz imenika i pitaj o eventualnoj istraži." data-en="call the official police number from the phone book and ask about any investigation.">pozovi zvanični broj policije iz imenika i pitaj o eventualnoj istraži.</li>
        <li data-sr="ne prenosi novac ni u jednoj formi dok advokat ne potvrdi legitimnost." data-en="do not transfer money in any form until a lawyer confirms legitimacy.">ne prenosi novac ni u jednoj formi dok advokat ne potvrdi legitimnost.</li>
        <li data-sr="sačuvaj broj i poruku kao dokaz i prijavi incident policiji." data-en="save the number and message as evidence and report the incident to police.">sačuvaj broj i poruku kao dokaz i prijavi incident policiji.</li>
        <li data-sr="obavesti banku ako si dao podatke kartice ili OTP kod." data-en="notify the bank if you provided card details or an OTP code.">obavesti banku ako si dao podatke kartice ili OTP kod.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si dobio pisani nalog ili pozivnicu pre poziva?" data-en="Did you receive a written warrant or summons before the call?">Da li si dobio pisani nalog ili pozivnicu pre poziva?</li>
            <li data-sr="Da li su te tražili da ne govoriš advokatu ili banci?" data-en="Were you asked not to speak to a lawyer or bank?">Da li su te tražili da ne govoriš advokatu ili banci?</li>
            <li data-sr="Zašto bi policija tražila prenos gotovine telefonom?" data-en="Why would police request a cash transfer over the phone?">Zašto bi policija tražila prenos gotovine telefonom?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Policija ne traži prenos novca kao deo istrage — to nije procedura." data-en="Police do not request money transfers as part of an investigation — that is not procedure.">Policija ne traži prenos novca kao deo istrage — to nije procedura.</li>
            <li data-sr="Ako postoji prava istraga, advokat to može potvrditi za 30 minuta." data-en="If there is a real investigation, a lawyer can confirm it in 30 minutes.">Ako postoji prava istraga, advokat to može potvrditi za 30 minuta.</li>
            <li data-sr="Zabrana razgovora s advokatom je sama po sebi signal da nešto nije u redu." data-en="Forbidding consultation with a lawyer is itself a signal something is wrong.">Zabrana razgovora s advokatom je sama po sebi signal da nešto nije u redu.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card sources" id="sources">
      <h2 data-sr="Povezane prevare" data-en="Related scams">Povezane prevare</h2>
      <ul class="bullets">
        <li><a href="government-impersonation.html" data-sr="Lažno predstavljanje državnih organa" data-en="Government impersonation scams">Lažno predstavljanje državnih organa</a></li>
        <li><a href="court-impersonation.html" data-sr="Lažni sudski pozivi i taksene prevare" data-en="Fake court summons and fee scams">Lažni sudski pozivi i taksene prevare</a></li>
        <li><a href="tax-authority-impersonation.html" data-sr="Lažno predstavljanje poreske uprave" data-en="Tax authority impersonation">Lažno predstavljanje poreske uprave</a></li>
        <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
        <li><a href="vishing.html" data-sr="Višing" data-en="Višing">Višing</a></li>
      </ul>
    </section>
  `
};
