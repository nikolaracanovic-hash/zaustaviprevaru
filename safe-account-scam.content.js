window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["safe-account-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi prevara sa bezbednim nalogom" data-en="Introduction: how the safe account scam works">Uvod: kako radi prevara sa bezbednim nalogom</h2>
      <p data-sr="Lažni bankovni službenik ili policajac poziva žrtvu i objašnjava da je njen račun kompromitovan — hakeri su ušli, insajder u banci krade, uhvaćen je mulo-račun u njenoj filijali. Jedino rešenje je hitno prebacivanje celokupnih sredstava na „bezbedni nalog“ koji banka ili policija „drže pod zaštitom“. Taj nalog kontrolišu prevaranti." data-en="A fake bank official or police officer calls the victim and explains that their account has been compromised — hackers have breached it, an insider at the bank is stealing, a money mule account in their branch has been caught. The only solution is to urgently transfer all funds to a 'safe account' the bank or police 'hold for protection'. That account belongs to the fraudsters.">Lažni bankovni ili policijski službenik kaže da je račun kompromitovan i da sredstva treba hitno prebaciti na 'bezbedni nalog'. Taj nalog je pod kontrolom prevaranata.</p>
      <p data-sr="Kombinacija bančinog i policijskog autoriteta je posebno ubedljiva. Jedan „agent“ prebaci na drugog, banka na policiju, čime se gradi lažni okvir institucionalnog konsenzusa. Žrtva ne sumnja jer 'dve institucije ne mogu obe lagati u isto vreme„." data-en="The combination of bank and police authority is especially convincing“. One “agent' hands off to another, bank to police, building a false framework of institutional consensus. The victim does not suspect because 'two institutions cannot both be lying at the same time'.">Kombinacija bančinog i policijskog autoriteta gradi lažni institucionalni konsenzus koji je posebno teško probiti.</p>
      <div class="callout" data-sr="<strong>Model:</strong> poziv → banka/policija → kompromitovani račun → instrukcija za transfer → „bezbedni nalog“ → novac nestaje." data-en="<strong>Model:</strong> call → bank/police → compromised account → transfer instruction → 'safe account' → money gone."><strong>Model:</strong> poziv → banka/policija → kompromitovani račun → instrukcija za transfer → 'bezbedni nalog' → novac nestaje.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> nijedan pravi „bezbedni nalog“ ne postoji — svaki nalog kojim vi ne upravljate direktno je nalog prevaranta." data-en="<strong>Threshold:</strong> no legitimate 'safe account' exists — any account you do not directly control belongs to the fraudster."><strong>Prag:</strong> nijedan pravi 'bezbedni nalog' ne postoji — svaki nalog kojim vi ne upravljate direktno je nalog prevaranta.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika bezbednog naloga" data-en="How it works: safe account mechanics">Kako generalno radi: mehanika bezbednog naloga</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gradi autoritet institucije" data-en="What builds institutional authority">Šta gradi autoritet institucije</div>
          <ul class="bullets">
            <li data-sr="spoofing broja banke ili policije — ID pozivaoca prikazuje zvanično ime." data-en="spoofing the bank or police number — caller ID shows the official name.">spoofing broja banke ili policije — ID pozivaoca prikazuje zvanično ime.</li>
            <li data-sr="prebacivanje između „bankara“ i „policajca„ radi izgradnje lažnog institucionalnog okvira." data-en="handing off between a “banker“ and a 'police officer' to build a false institutional framework.">prebacivanje između 'bankara' i 'policajca' radi izgradnje lažnog institucionalnog okvira.</li>
            <li data-sr="referentni broj slučaja, ime navodnog 'istražitelja„ i broj istražne jedinice." data-en="case reference number, name of the alleged “investigator', and investigation unit number.">referentni broj slučaja, ime navodnog 'istražitelja' i broj istražne jedinice.</li>
            <li data-sr="lažni „nalaz." koji opisuje transakcije koje nisu izvršene ali su 'u toku'." data-en="a fake 'finding' describing transactions not yet made but 'in progress'.">lažni „nalaz" koji opisuje transakcije koje nisu izvršene ali su 'u toku'“.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Kako se uvodi transfer" data-en="How the transfer is introduced">Kako se uvodi transfer</div>
          <ul class="bullets">
            <li data-sr="„bezbedni nalog„ se opisuje kao privremeno rešenje dok traže istraga." data-en="the “safe account“ is described as a temporary measure while the investigation continues.">„bezbedni nalog“ se opisuje kao privremeno rešenje dok traže istraga.</li>
            <li data-sr="obećava se pun povrat sredstava 'po završetku istrage„ za 24–48 sati." data-en="full return of funds is promised “upon conclusion of the investigation' within 24–48 hours.">obećava se pun povrat sredstava 'po završetku istrage' za 24–48 sati.</li>
            <li data-sr="žrtva se instruira da ne pominje nikome jer bi to 'kompromitovalo tajnu istragu„." data-en="the victim is instructed not to mention it to anyone as it would “compromise the secret investigation'.">žrtva se instruira da ne pominje nikome jer bi to 'kompromitovalo tajnu istragu'.</li>
            <li data-sr="iznos transfera se povećava postepeno kroz seriju prebacivanja tokom više dana." data-en="the transfer amount increases gradually through a series of transactions over several days.">iznos transfera se povećava postepeno kroz seriju prebacivanja tokom više dana.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)." data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Poziv i uspostavljanje incident-premise" data-en="Phase 1 — Call and establishing the incident premise">Faza 1 — Poziv i uspostavljanje incident-premise</h3>
        <p data-sr="Agent zove i odmah uspostavlja premisu: „vaš račun je kompromitovan“. Daje delimične podatke o žrtvi radi verodostojnosti. Uvodi hitnost i tajnost istovremeno." data-en="The agent calls and immediately establishes the premise: 'your account has been compromised'. They provide partial data about the victim for credibility. Urgency and secrecy are introduced simultaneously.">Agent zove s premisom kompromitovanog računa. Delimični podaci žrtve grade verodostojnost. Hitnost i tajnost se uvode simultano.</p>
        <ul class="bullets">
          <li data-sr="signal: banka i policija ne iniciraju hitne zahteve za transferom telefonom." data-en="signal: banks and police do not initiate urgent transfer requests by phone.">signal: banka i policija ne iniciraju hitne zahteve za transferom telefonom.</li>
          <li data-sr="signal: bilo koji agent koji traži tajnost od porodice odmah je sumnjiv." data-en="signal: any agent requesting secrecy from family is immediately suspicious.">signal: bilo koji agent koji traži tajnost od porodice odmah je sumnjiv.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> žrtva prihvata premisu kompromitovanog računa." data-en="<strong>Threshold:</strong> the victim accepts the compromised account premise."><strong>Prag faze:</strong> žrtva prihvata premisu kompromitovanog računa.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Uvod u „bezbedni nalog„ i instrukcija za transfer" data-en="Phase 2 — Introduction of the “safe account“ and transfer instruction">Faza 2 — Uvod u 'bezbedni nalog' i instrukcija za transfer</h3>
        <p data-sr="Agent objašnjava da banka ili policija imaju „bezbedni nalog“ na koji žrtva treba da prebaci sredstva radi zaštite dok istraga traže. Nalog se opisuje kao privremeni i sigurni. Povrat se obećava za 24–48 sati." data-en="The agent explains that the bank or police hold a 'safe account' to which the victim must transfer funds for protection while the investigation continues. The account is described as temporary and secure. Return is promised within 24–48 hours.">Agent uvodi 'bezbedni nalog' i obećava povrat za 24–48 sati. Nalog pripada prevarantu.</p>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="bank-impersonation.html" data-sr="Lažna banka (bankovni prevarant)" data-en="Bank impersonation scam">Lažna banka (bankovni prevarant)</a></li>
            <li><a href="cash-to-gold-scam.html" data-sr="Prevara sa gotovinom i zlatom" data-en="Cash-to-gold scam">Prevara sa gotovinom i zlatom</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> žrtva prvog transfera na „bezbedni nalog„." data-en="<strong>Threshold:</strong> the victim“s first transfer to the “safe account'."><strong>Prag faze:</strong> žrtva prvog transfera na 'bezbedni nalog'.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Serija transfera i nestanak" data-en="Phase 3 — Series of transfers and disappearance">Faza 3 — Serija transfera i nestanak</h3>
        <p data-sr="Posle prvog transfera slede novi — nalog se „puni“ postepeno. Napadač objašnjava da se „istraga produžava“ ili da postoje novi „nalazi“. Na kraju napadač nestaje i nalog je prazan." data-en="After the first transfer, more follow — the account is filled gradually. The attacker explains that the 'investigation is being extended' or there are new 'findings'. Eventually the attacker disappears and the account is empty.">Serija transfera uz produžavanje 'istrage'. Napadač na kraju nestaje.</p>
        <div class="callout" data-sr="<strong>Prag faze:</strong> posle nestanka napadača ne postoji institucija koja može povratiti sredstva — novac je izgubljen." data-en="<strong>Threshold:</strong> after the attacker disappears, no institution can recover the funds — money is lost."><strong>Prag faze:</strong> posle nestanka napadača ne postoji institucija koja može povratiti sredstva — novac je izgubljen.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="bilo koji poziv koji traži transfer novca na novi nalog radi „zaštite„ je prevara." data-en="any call requesting a transfer to a new account for “protection“ is a scam.">bilo koji poziv koji traži transfer novca na novi nalog radi 'zaštite' je prevara.</li>
        <li data-sr="prebacivanje između „bankara“ i „policajca„ u istom pozivu radi izgradnje lažnog autoriteta." data-en="handing off between a “banker“ and a 'police officer' in the same call to build false authority.">prebacivanje između 'bankara' i 'policajca' u istom pozivu radi izgradnje lažnog autoriteta.</li>
        <li data-sr="instrukcija o tajnosti — 'ne govorite porodici„ — definitivan signal prevare." data-en="secrecy instruction — “do not tell your family' — a definitive fraud signal.">instrukcija o tajnosti — 'ne govorite porodici' — definitivan signal prevare.</li>
        <li data-sr="obećan povrat sredstava za 24–48 sati po završetku 'istrage„." data-en="promised return of funds within 24–48 hours upon completion of the “investigation'.">obećan povrat sredstava za 24–48 sati po završetku 'istrage'.</li>
        <li data-sr="nalog na koji se traži transfer prethodno nikad nije korišćen od strane žrtve." data-en="the account to which transfer is requested has never been used by the victim.">nalog na koji se traži transfer prethodno nikad nije korišćen od strane žrtve.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 10 pitanja pre ikakvog transfera" data-en="Checklist: 10 questions before any transfer">Checklista: 10 pitanja pre ikakvog transfera</h2>
      <ul class="bullets">
        <li data-sr="Da li je agent tražio da ne govorim porodici o ovome?" data-en="Has the agent asked me not to tell my family about this?">Da li je agent tražio da ne govorim porodici o ovome?</li>
        <li data-sr="Da li bi pozivanje banke na broju s poleđine kartice potvrdilo ovaj zahtev?" data-en="Would calling the bank at the number on the back of my card confirm this request?">Da li bi pozivanje banke na broju s poleđine kartice potvrdilo ovaj zahtev?</li>
        <li data-sr="Da li postoji „bezbedni nalog„ koji nije moj sopstveni nalog u mojoj banci?" data-en="Is there a “safe account“ that is not my own account at my own bank?">Da li postoji 'bezbedni nalog' koji nije moj sopstveni nalog u mojoj banci?</li>
        <li data-sr="Da li mi je obećan povrat novca za 24–48 sati?" data-en="Have I been promised return of money within 24–48 hours?">Da li mi je obećan povrat novca za 24–48 sati?</li>
        <li data-sr="Da li se agent prebacivao između 'banke„ i „policije„ u istom pozivu?" data-en="Did the agent hand off between “the bank“ and “the police' in the same call?">Da li se agent prebacivao između 'banke' i 'policije' u istom pozivu?</li>
        <li data-sr="Da li postoji vremenski pritisak koji sprečava da se posavetuje sa nekim?" data-en="Is there time pressure that prevents consulting with someone?">Da li postoji vremenski pritisak koji sprečava da se posavetuje sa nekim?</li>
        <li data-sr="Da li je nalog na koji se traži transfer nov, nepoznat ili strani?" data-en="Is the account to which transfer is requested new, unknown, or foreign?">Da li je nalog na koji se traži transfer nov, nepoznat ili strani?</li>
        <li data-sr="Da li bi odlazak u filijalu banke fizički razrešio situaciju za 30 minuta?" data-en="Would visiting a bank branch physically resolve the situation within 30 minutes?">Da li bi odlazak u filijalu banke fizički razrešio situaciju za 30 minuta?</li>
        <li data-sr="Da li agent ostaje na liniji dok obavljam transakciju?" data-en="Does the agent stay on the line while I make the transaction?">Da li agent ostaje na liniji dok obavljam transakciju?</li>
        <li data-sr="Da li se moja porodica ili prijatelji slažu da je ovo legitimno kad im kažem?" data-en="Do my family or friends agree it is legitimate when I tell them?">Da li se moja porodica ili prijatelji slažu da je ovo legitimno kad im kažem?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="prekinite poziv odmah i ne odgovarajte na povratne pozive s istog broja." data-en="end the call immediately and do not answer return calls from the same number.">prekinite poziv odmah i ne odgovarajte na povratne pozive s istog broja.</li>
        <li data-sr="posetite filijalu banke fizički ili pozovite banku na broju s poleđine kartice." data-en="visit a bank branch in person or call the bank at the number on the back of your card.">posetite filijalu banke fizički ili pozovite banku na broju s poleđine kartice.</li>
        <li data-sr="ako ste izvršili transfer, odmah zatražite opoziv transakcije — vreme je ključno." data-en="if you made a transfer, immediately request a transaction recall — time is critical.">ako ste izvršili transfer, odmah zatražite opoziv transakcije — vreme je ključno.</li>
        <li data-sr="prijavite incident policiji s opisom broja, agenta i iznosa transfera." data-en="report the incident to police with the number, agent description, and transfer amount.">prijavite incident policiji s opisom broja, agenta i iznosa transfera.</li>
        <li data-sr="sačuvajte sve zapise poziva i bankovnih transakcija kao dokaze." data-en="preserve all call records and bank transactions as evidence.">sačuvajte sve zapise poziva i bankovnih transakcija kao dokaze.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li ti je rečeno da ne govoriš nikome o ovome?" data-en="Were you told not to tell anyone about this?">Da li ti je rečeno da ne govoriš nikome o ovome?</li>
            <li data-sr="Da li ti je obećan povrat novca za dva dana?" data-en="Were you promised the money would be returned in two days?">Da li ti je obećan povrat novca za dva dana?</li>
            <li data-sr="Da li je ijedna banka ikad tražila da sami pošaljete novac na „bezbedni nalog„?" data-en="Has any bank ever asked you to send money yourself to a “safe account“?">Da li je ijedna banka ikad tražila da sami pošaljete novac na 'bezbedni nalog'?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="'Bezbedni nalog„ je termin koji koriste isključivo prevaranti — banka ne koristi taj termin." data-en="“Safe account' is a term used exclusively by fraudsters — banks do not use that term.">'Bezbedni nalog' je termin koji koriste isključivo prevaranti — banka ne koristi taj termin.</li>
            <li data-sr="Hajde da zajedno odemo do banke i proverimo — ako je legitimno, trajaće 20 minuta." data-en="Let's go to the bank together and check — if it's legitimate, it will take 20 minutes.">Hajde da zajedno odemo do banke i proverimo — ako je legitimno, trajaće 20 minuta.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card sources" id="sources">
      <h2 data-sr="Povezane prevare" data-en="Related scams">Povezane prevare</h2>
      <ul class="bullets">
        <li><a href="bank-impersonation.html" data-sr="Lažna banka (bankovni prevarant)" data-en="Bank impersonation scam">Lažna banka (bankovni prevarant)</a></li>
        <li><a href="courier-fraud.html" data-sr="Kurirska prevara" data-en="Courier fraud">Kurirska prevara</a></li>
        <li><a href="cash-to-gold-scam.html" data-sr="Prevara sa gotovinom i zlatom" data-en="Cash-to-gold scam">Prevara sa gotovinom i zlatom</a></li>
        <li><a href="otp-interception.html" data-sr="Presretanje OTP koda" data-en="OTP interception">Presretanje OTP koda</a></li>
        <li><a href="vishing.html" data-sr="Višing" data-en="Višing">Višing</a></li>
        <li><a href="impersonation-scam.html" data-sr="Lažno predstavljanje" data-en="Impersonation scam">Lažno predstavljanje</a></li>
      </ul>
    </section>
  `
};
