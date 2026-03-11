window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["impersonation-scam"] = {
  raw_html: `
    <!-- 1) UVOD -->
    <section class="card">
      <h2 data-sr="Uvod: kako funkcioniše lažno predstavljanje" data-en="Introduction: how impersonation works">Uvod: kako funkcioniše lažno predstavljanje</h2>

      <p
        data-sr="Lažno predstavljanje koristi autoritet kao polugu. Napadač glumi instituciju, firmu, službu ili blisku osobu. Maska daje kredibilitet zahtevu koji bi inače delovao sumnjivo. Banka traži kod, policija traži saradnju, direktor traži hitan transfer, rođak traži pomoć. Autoritet skraćuje proveru jer meta reaguje na poziciju, ne na sadržaj." data-en="Impersonation uses authority as leverage. The attacker poses as an institution, company, service, or close contact. The mask lends credibility to a request that would otherwise seem suspicious. A bank asks for a code, police asks for cooperation, a a company director demands an urgent transfer, a relative asks for help. Authority shortens verification because the target reacts to position, not content."
      >Lažno predstavljanje koristi autoritet kao polugu. Napadač glumi instituciju, firmu, službu ili blisku osobu. Maska daje kredibilitet zahtevu koji bi inače delovao sumnjivo. Banka traži kod, policija traži saradnju, direktor traži hitan transfer, rođak traži pomoć. Autoritet skraćuje proveru jer meta reaguje na poziciju, ne na sadržaj.</p>

      <p
        data-sr="Kanal varira: poziv, imejl, poruka, čak i lični kontakt. Mehanizam ostaje isti: maska autoriteta + hitnost + zahtev za radnjom koja ima posledicu. Šteta se realizuje kroz predaju podataka, kodova ili direktnu uplatu. Često se koristi scenario koji zatvara prostor za pitanja: istraga, incident, hitan problem." data-en="The channel varies: call, email, message, even in-person contact. The mechanism stays the same: authority mask + urgency + a request for an action with consequences. Damage occurs through handing over data, codes, or direct payment. Often the scenario closes the space for questions: investigation, incident, urgent problem."
      >Kanal varira: poziv, imejl, poruka, čak i lični kontakt. Mehanizam ostaje isti: maska autoriteta + hitnost + zahtev za radnjom koja ima posledicu. Šteta se realizuje kroz predaju podataka, kodova ili direktnu uplatu. Često se koristi scenario koji zatvara prostor za pitanja: istraga, incident, hitan problem.</p>

      <div class="callout"
        data-sr="<strong>Model:</strong> kontakt (maska autoriteta) → scenario (problem + hitnost) → zahtev (kod/podaci/uplata) → prag → serijske posledice → eskalacija → prevara povraćaja." data-en="<strong>Model:</strong> contact (authority mask) → scenario (problem + urgency) → request (code/data/payment) → threshold → cascading consequences → escalation → recovery."
      ><strong>Model:</strong> kontakt (maska autoriteta) → scenario (problem + hitnost) → zahtev (kod/podaci/uplata) → prag → serijske posledice → eskalacija → prevara povraćaja.</div>
    </section>

    <!-- 2) TIPOVI MASKI -->
    <section class="card">
      <h2 data-sr="Tipovi maski: ko može biti lažno predstavljen" data-en="Mask types: who can be impersonated">Tipovi maski: ko može biti lažno predstavljen</h2>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Institucije" data-en="Institutions">Institucije</div>
          <ul class="bullets">
            <li data-sr="banka — sumnjiva transakcija, verifikacija." data-en="bank — suspicious transaction, verification.">banka — sumnjiva transakcija, verifikacija.</li>
            <li data-sr="policija — istraga, zamrznuti račun." data-en="police — investigation, frozen account.">policija — istraga, zamrznuti račun.</li>
            <li data-sr="poreska služba — dug, kazna, revizija." data-en="tax authority — debt, fine, audit.">poreska služba — dug, kazna, revizija.</li>
            <li data-sr="sud — poziv, postupak." data-en="court — summons, proceedings.">sud — poziv, postupak.</li>
            <li data-sr="teleoperater — problem sa nalogom." data-en="telecom — account issue.">teleoperater — problem sa nalogom.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Firme i usluge" data-en="Companies and services">Firme i usluge</div>
          <ul class="bullets">
            <li data-sr="IT podrška — bezbednosni incident." data-en="IT support — security incident.">IT podrška — bezbednosni incident.</li>
            <li data-sr="kurir/pošta — paket, carina." data-en="courier/post — package, customs.">kurir/pošta — paket, carina.</li>
            <li data-sr="platforma — verifikacija naloga." data-en="platform — account verification.">platforma — verifikacija naloga.</li>
            <li data-sr="dobavljač — promena računa za uplatu." data-en="supplier — changed payment account.">dobavljač — promena računa za uplatu.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Poznate osobe" data-en="Known individuals">Poznate osobe</div>
          <ul class="bullets">
            <li data-sr="direktor/šef — hitan transfer (CEO prevara)." data-en="a company director/boss — urgent transfer (CEO fraud).">direktor/šef — hitan transfer (CEO prevara).</li>
            <li data-sr="kolega — pomoć sa računom." data-en="colleague — help with an account.">kolega — pomoć sa računom.</li>
            <li data-sr="prijatelj/rođak — hitna situacija." data-en="friend/relative — emergency.">prijatelj/rođak — hitna situacija.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Funkcija maske" data-en="Mask function">Funkcija maske</div>
          <ul class="bullets">
            <li data-sr="daje kredibilitet zahtevu." data-en="lends credibility to the request.">daje kredibilitet zahtevu.</li>
            <li data-sr="skraćuje proveru identiteta." data-en="shortens identity verification.">skraćuje proveru identiteta.</li>
            <li data-sr="uvodi posledicu za odbijanje." data-en="introduces consequences for refusal.">uvodi posledicu za odbijanje.</li>
            <li data-sr="aktivira poslušnost prema autoritetu." data-en="activates compliance toward authority.">aktivira poslušnost prema autoritetu.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 3) HRONOLOŠKI TOK -->
    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)." data-en="Timeline (phases + branching).">Hronološki tok (faze + grananja)</h2>

      <!-- FAZA 1 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Kontakt: maska i kontekst" data-en="Phase 1 — Contact: mask and context">Faza 1 — Kontakt: maska i kontekst</h3>

        <p
          data-sr="Kontakt stiže kroz kanal koji odgovara maski: poziv za banku, imejl za firmu, poruka za rođaka. Maska se uspostavlja odmah: ime, pozicija i institucija. Detalji mogu da uključuju broj predmeta, interni broj i ime mete."
          data-en="Contact arrives through a channel matching the mask: call for bank, email for company, message for a relative. The mask is established immediately: name, position, and institution. Details may include a case ID, an internal number, and the target's name."
        >Kontakt stiže kroz kanal koji odgovara maski: poziv za banku, imejl za firmu, poruka za rođaka. Maska se uspostavlja odmah: ime, pozicija i institucija. Detalji mogu da uključuju broj predmeta, interni broj i ime mete.</p>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> meta prihvata identitet pozivaoca bez nezavisne provere." data-en="<strong>Threshold:</strong> target accepts the caller's identity without independent verification."
        ><strong>Prag faze:</strong> meta prihvata identitet pozivaoca bez nezavisne provere.</div>
      </article>

      <!-- FAZA 2 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Scenario: problem i hitnost" data-en="Phase 2 — Scenario: problem and urgency">Faza 2 — Scenario: problem i hitnost</h3>

        <p
          data-sr="Napadač uvodi scenario koji zahteva brzu reakciju. Problem je ozbiljan: kompromitovan nalog, sumnjiva transakcija, istraga, hitan poslovni zahtev, porodična nevolja. Hitnost zatvara prostor za proveru i konsultaciju." data-en="The attacker introduces a scenario requiring quick action. The problem is serious: compromised account, suspicious transaction, investigation, urgent business need, family trouble. Urgency closes space for verification and consultation."
        >Napadač uvodi scenario koji zahteva brzu reakciju. Problem je ozbiljan: kompromitovan nalog, sumnjiva transakcija, istraga, hitan poslovni zahtev, porodična nevolja. Hitnost zatvara prostor za proveru i konsultaciju.</p>

        <ul class="bullets">
          <li data-sr="„vidimo sumnjivu aktivnost na vašem nalogu." data-en="we see suspicious activity on your account.">„vidimo sumnjivu aktivnost na vašem nalogu“.</li>
          <li data-sr="„vaš račun je deo istrage." data-en="your account is part of an investigation.">„vaš račun je deo istrage“.</li>
          <li data-sr="„hitno mi treba transfer pre sastanka." data-en="I urgently need a transfer before the meeting.">„hitno mi treba transfer pre sastanka“.</li>
          <li data-sr="„imao sam nezgodu, treba mi pomoć odmah." data-en="I had an accident, I need help immediately.">„imao sam nezgodu, treba mi pomoć odmah“.</li>
        </ul>
      </article>

      <!-- FAZA 3 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Zahtev: kod, podaci ili uplata" data-en="Phase 3 — Request: code, data, or payment">Faza 3 — Zahtev: kod, podaci ili uplata</h3>

        <p
          data-sr="Zahtev dolazi kao logičan nastavak scenarija. Maska daje legitimitet: banka traži kod „za verifikaciju.", policija traži podatke „za istragu", direktor traži transfer „za posao", rođak traži novac „za hitnu situaciju"“. Zahtev se prodaje kao standardna procedura ili nužna pomoć."
          data-en="The request arrives as a logical continuation of the scenario. The mask provides legitimacy: a bank asks for a code "for verification," police ask for data "for an investigation," a director asks for a transfer "for business," and a relative asks for money "for an emergency." The request is framed as standard procedure or necessary help."
        >Zahtev dolazi kao logičan nastavak scenarija. Maska daje legitimitet: banka traži kod „za verifikaciju", policija traži podatke „za istragu", direktor traži transfer „za posao", rođak traži novac „za hitnu situaciju"“. Zahtev se prodaje kao standardna procedura ili nužna pomoć“.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Tipični zahtevi" data-en="Typical requests">Tipični zahtevi</div>
            <ul class="bullets">
              <li data-sr="OTP kod ili lozinka." data-en="OTP code or password.">OTP kod ili lozinka.</li>
              <li data-sr="podaci kartice." data-en="card details.">podaci kartice.</li>
              <li data-sr="transfer na „siguran račun." data-en="transfer to a &quot;safe account&quot;">transfer na „siguran račun“.</li>
              <li data-sr="promena podataka za uplatu dobavljaču." data-en="changing supplier payment details.">promena podataka za uplatu dobavljaču.</li>
              <li data-sr="kupovina vaučera/kriptovalute." data-en="buying vouchers/cryptocurrency.">kupovina vaučera/kriptovalute.</li>
            </ul>
          </div>
          <div class="phase">
            <div class="label" data-sr="Kako se prodaje" data-en="How it's sold">Kako se prodaje</div>
            <ul class="bullets">
              <li data-sr="„standardna procedura." data-en="standard procedure.">„standardna procedura“.</li>
              <li data-sr="„za vašu zaštitu." data-en="for your protection.">„za vašu zaštitu“.</li>
              <li data-sr="„obavezno po zakonu." data-en="required by law.">„obavezno po zakonu“.</li>
              <li data-sr="„samo ti možeš da pomogneš." data-en="only you can help.">„samo ti možeš da pomogneš“.</li>
            </ul>
          </div>
        </div>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="vishing.html" data-sr="Višing" data-en="Vishing">Višing</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
            <li><a href="advance-fee-fraud.html" data-sr="Uplata unapred" data-en="Advance-fee fraud">Uplata unapred</a></li>
          </ul>
        </div>
      </article>

      <!-- FAZA 4 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Prag: predaja kontrole" data-en="Phase 4 — Threshold: surrendering control">Faza 4 — Prag: predaja kontrole</h3>

        <p
          data-sr="Prag nastaje kada meta izvrši zahtev: preda kod, pošalje novac, promeni podatke za uplatu, instalira alat. Posle praga napadač ima pristup ili sredstva, a tok prelazi u serijske posledice." data-en="The threshold occurs when the target complies: hands over a code, sends money, changes payment details, installs a tool. After the threshold the attacker has access or funds, and the flow turns into cascading consequences."
        >Prag nastaje kada meta izvrši zahtev: preda kod, pošalje novac, promeni podatke za uplatu, instalira alat. Posle praga napadač ima pristup ili sredstva, a tok prelazi u serijske posledice.</p>
      </article>

      <!-- FAZA 5 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Serijske posledice" data-en="Phase 5 — Cascading consequences">Faza 5 — Serijske posledice</h3>

        <p
          data-sr="Posle praga kreće lanac: preuzimanje naloga, dodatne transakcije, promena podataka, kontaktiranje drugih meta kroz preuzete naloge. U poslovnom kontekstu šteta može da uključi preusmerene uplate dobavljačima." data-en="After the threshold, a chain starts: account takeover, additional transactions, data changes, contacting other targets through stolen accounts. In business contexts, damage may include redirected supplier payments."
        >Posle praga kreće lanac: preuzimanje naloga, dodatne transakcije, promena podataka, kontaktiranje drugih meta kroz preuzete naloge. U poslovnom kontekstu šteta može da uključi preusmerene uplate dobavljačima.</p>

        <div class="branch">
          <p><strong data-sr="Grananja posle praga" data-en="Branching after threshold">Grananja posle praga</strong></p>
          <ul class="bullets">
            <li data-sr="<strong>preuzimanje naloga:</strong> preuzimanje naloga. (Povezano: account-takeover)." data-en="<strong>Preuzimanje naloga:</strong> taking over accounts. (Related: account-takeover)."><strong>Preuzimanje naloga:</strong> preuzimanje naloga. (Povezano: account-takeover).</li>
          </ul>
        </div>
      </article>

      <!-- FAZA 6 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Eskalacija i povraćaj kao mamac" data-en="Phase 6 — Escalation and recovery">Faza 6 — Eskalacija i povraćaj kao mamac</h3>

        <p
          data-sr="Ako meta posumnja, napadač eskalira: veći autoritet, nove pretnje, novi identitet. Posle prekida često stiže ponuda za povraćaj: „pomoć“ uz uplatu."
          data-en="If the target doubts, the attacker escalates: higher authority, new threats, and a new identity. After the break, a recovery offer often arrives: "help" for a fee."
        >Ako meta posumnja, napadač eskalira: veći autoritet, nove pretnje, novi identitet. Posle prekida često stiže ponuda za povraćaj: „pomoć“ uz uplatu.</p>

        <div class="branch">
          <p><strong data-sr="Povezano" data-en="Related">Povezano</strong></p>
          <ul class="bullets">
            <li><a href="recovery-scam.html" data-sr="Prevara povraćaja novca" data-en="Recovery scam">Prevara povraćaja novca</a></li>
          </ul>
        </div>
      </article>
    </section>

    <!-- 4) SPECIFIČNE VARIJANTE -->
    <section class="card">
      <h2 data-sr="Specifične varijante lažnog predstavljanja" data-en="Specific impersonation variants">Specifične varijante lažnog predstavljanja</h2>

      <h3 data-sr="CEO prevara / prevare u firmama (kompromitovanje poslovnog imejla)." data-en="CEO fraud / business scams (Business Email Compromise).">CEO prevara / prevare u firmama (kompromitovanje poslovnog imejla)</h3>
      <ul class="bullets">
        <li data-sr="napadač glumi direktora ili višeg menadžera." data-en="attacker impersonates a company director or a senior manager.">napadač glumi direktora ili višeg menadžera.</li>
        <li data-sr="traži hitan transfer sa objašnjenjem da je „poverl." data-en="requests urgent transfer claiming it's &quot;confidential&quot;">traži hitan transfer sa objašnjenjem da je „poverljivo“.</li>
        <li data-sr="cilja zaposlene u finansijama ili računovodstvu." data-en="targets finance or accounting employees.">cilja zaposlene u finansijama ili računovodstvu.</li>
        <li data-sr="koristi sličan imejl domen ili kompromitovan nalog." data-en="uses similar email domain or compromised account.">koristi sličan imejl domen ili kompromitovan nalog.</li>
      </ul>

      <h3 data-sr="Grandparent scam / family emergency" data-en="Grandparent scam / family emergency">Grandparent scam / family emergency</h3>
      <ul class="bullets">
        <li data-sr="napadač glumi unuka, nećaka ili bliskog rođaka." data-en="attacker impersonates grandchild, nephew, or close relative.">napadač glumi unuka, nećaka ili bliskog rođaka.</li>
        <li data-sr="scenario je hitna situacija: nezgoda, hapšenje, bolnica." data-en="scenario is an emergency: accident, arrest, hospital.">scenario je hitna situacija: nezgoda, hapšenje, bolnica.</li>
        <li data-sr="traži novac odmah, često u gotovini ili vaučerima." data-en="demands money immediately, often in cash or vouchers.">traži novac odmah, često u gotovini ili vaučerima.</li>
        <li data-sr="insistira na tajnosti: „nemoj reći roditeljima." data-en="insists on secrecy: &quot;don't tell parents&quot;">insistira na tajnosti: „nemoj reći roditeljima“.</li>
      </ul>

      <h3 data-sr="Fake dobavljač / account change" data-en="Fake supplier / account change">Fake dobavljač / account change</h3>
      <ul class="bullets">
        <li data-sr="napadač glumi postojećeg dobavljača." data-en="attacker impersonates existing supplier.">napadač glumi postojećeg dobavljača.</li>
        <li data-sr="obaveštava o „promeni bankovnog računa." data-en="notifies of &quot;bank account change&quot;">obaveštava o „promeni bankovnog računa“.</li>
        <li data-sr="sledeća faktura ide na račun napadača." data-en="next invoice goes to attacker's account.">sledeća faktura ide na račun napadača.</li>
        <li data-sr="koristi sličan imejl ili kompromitovan nalog dobavljača." data-en="uses similar email or compromised supplier account.">koristi sličan imejl ili kompromitovan nalog dobavljača.</li>
      </ul>
    </section>

    <!-- 5) IZ UGLA PREVARANTA -->
    <section class="card">
      <h2 data-sr="Iz ugla prevaranta" data-en="From the scammers' side">Iz ugla prevaranta</h2>

      <p
        data-sr="Lažno predstavljanje zahteva pripremu: informacije o meti, izbor maske, konstrukcija scenarija. Organizovanije operacije koriste OSINT (open source intelligence) za prikupljanje detalja koji povećavaju kredibilitet. Cilj je da maska prođe bez pitanja." data-en="Impersonation requires preparation: information about the target, mask selection, scenario construction. More organized operations use OSINT (open source intelligence) to gather details that increase credibility. The goal is for the mask to pass without questions."
      >Lažno predstavljanje zahteva pripremu: informacije o meti, izbor maske, konstrukcija scenarija. Organizovanije operacije koriste OSINT (open source intelligence) za prikupljanje detalja koji povećavaju kredibilitet. Cilj je da maska prođe bez pitanja.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="What they look for before attack" data-en="What they look for before attack">What they look for before attack</div>
          <ul class="bullets">
            <li data-sr="javno dostupne informacije o meti." data-en="publicly available info about target.">javno dostupne informacije o meti.</li>
            <li data-sr="organizaciona struktura firme." data-en="company organizational structure.">organizaciona struktura firme.</li>
            <li data-sr="imena zaposlenih i njihove uloge." data-en="employee names and roles.">imena zaposlenih i njihove uloge.</li>
            <li data-sr="porodične veze (za grandparent scam)." data-en="family connections (for grandparent scam).">porodične veze (za grandparent scam).</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Kako reaguju na proveru" data-en="How they react to verification">Kako reaguju na proveru</div>
          <ul class="bullets">
            <li data-sr="pritisak i hitnost da se ne proverava." data-en="pressure and urgency to skip verification.">pritisak i hitnost da se ne proverava.</li>
            <li data-sr="„nema vremena za procedure." data-en="no time for procedures.">„nema vremena za procedure“.</li>
            <li data-sr="prelaz na sledeću metu ako provera počne." data-en="moving to next target if verification starts.">prelaz na sledeću metu ako provera počne.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 6) STANDARDNA UPOZORENJA -->
    <section class="card">
      <h2 data-sr="Standardna upozorenja" data-en="Standard warnings">Standardna upozorenja</h2>

      <ul class="bullets">
        <li data-sr="institucije ne traže kodove, lozinke ili transfer „na siguran račun." data-en="institutions don't ask for codes, passwords, or transfers to"safe accounts" over the phone">institucije ne traže kodove, lozinke ili transfer „na siguran račun" telefonom“.</li>
        <li data-sr="zahtev za tajnošću („nemoj nikome reći." data-en="a secrecy request ("don't tell anyone") is a manipulation signal">zahtev za tajnošću („nemoj nikome reći") je signal manipulacije“.</li>
        <li data-sr="promena bankovnog računa dobavljača zahteva nezavisnu verifikaciju." data-en="supplier bank account changes require independent verification.">promena bankovnog računa dobavljača zahteva nezavisnu verifikaciju.</li>
        <li data-sr="hitnost koja ne dozvoljava pauzu je signal kontrole." data-en="urgency that doesn't allow pause is a control signal.">hitnost koja ne dozvoljava pauzu je signal kontrole.</li>
      </ul>

      <div class="callout"
        data-sr="<strong>Praktično pravilo:</strong> prekini kontakt i proveri identitet kroz nezavisan kanal (zvaničan broj, direktan poziv osobi)." data-en="<strong>Practical rule:</strong> break contact and verify identity through an independent channel (official number, direct call to the person)."
      ><strong>Praktično pravilo:</strong> prekini kontakt i proveri identitet kroz nezavisan kanal (zvaničan broj, direktan poziv osobi).</div>
    </section>

    <!-- 7) AKO JE ŠTETA NASTALA -->
    <section class="card">
      <h2 data-sr="Ako je šteta nastala (redosled poteza)." data-en="If damage happened (action order).">Ako je ?teta nastala (redosled poteza)</h2>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Gave data / code" data-en="Gave data / code">Gave data / code</div>
          <ol class="steps">
            <li data-sr="promena lozinki na ugroženim nalozima." data-en="change passwords on affected accounts.">promena lozinki na ugroženim nalozima.</li>
            <li data-sr="uključivanje dvofaktorska potvrda." data-en="enable 2FA.">uključivanje dvofaktorska potvrda.</li>
            <li data-sr="provera aktivnih sesija." data-en="check active sessions.">provera aktivnih sesija.</li>
            <li data-sr="kontakt institucije ako su finansijski podaci ugroženi." data-en="contact institution if financial data is at risk.">kontakt institucije ako su finansijski podaci ugroženi.</li>
          </ol>
        </div>
        <div class="phase">
          <div class="label" data-sr="Made transfer / payment" data-en="Made transfer / payment">Made transfer / payment</div>
          <ol class="steps">
            <li data-sr="kontakt banke odmah — mogućnost zaustavljanja transfera." data-en="contact bank immediately — transfer may be stopped.">kontakt banke odmah — mogućnost zaustavljanja transfera.</li>
            <li data-sr="čuvanje dokaza: poruke, emailovi, detalji transakcije." data-en="save evidence: messages, emails, transaction details.">čuvanje dokaza: poruke, emailovi, detalji transakcije.</li>
            <li data-sr="obaveštenje partnera ako je reč o poslovnoj prevari." data-en="notify partners if it's a business fraud.">obaveštenje partnera ako je reč o poslovnoj prevari.</li>
          </ol>
        </div>
      </div>

      <div class="callout"
        data-sr="<strong>Upozorenje:</strong> posle incidenta očekuj recovery ponude uz uplatu. Takav kontakt tretira se kao drugi napad." data-en="<strong>Warning:</strong> after an incident, expect paid recovery offers. Treat them as a second attack."
      ><strong>Upozorenje:</strong> posle incidenta očekuj recovery ponude uz uplatu. Takav kontakt tretira se kao drugi napad.</div>
    </section>


    <!-- 8) STATISTIKE I EKONOMIJA IMPERSONATION PREVARA -->
    <section class="card">
      <h2 data-sr="Statistika i ekonomija prevare lažnog predstavljanja" data-en="Impersonation scam statistics and economics">Statistika i ekonomija prevare lažnog predstavljanja</h2>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="FBI IC3 + FTC data (2023)." data-en="FBI IC3 + FTC data (2023).">FBI IC3 + FTC data (2023)</div>
          <ul class="bullets">
            <li data-sr="IC3 2023: prevare u firmama kroz kompromitovanje poslovnog imejla (BEC) imale su 21,489 prijava i $2.9B gubitka." data-en="IC3 2023: business scams through Business Email Compromise (BEC) had 21,489 reports and $2.9B in losses.">IC3 2023: prevare u firmama kroz kompromitovanje poslovnog imejla (BEC) imale su 21,489 prijava i $2.9B gubitka.</li>
            <li data-sr="prosečan gubitak po prevara u firmama žrtvi: $137,121." data-en="average loss per business scams victim: $137,121.">prosečan gubitak po prevara u firmama žrtvi: $137,121.</li>
            <li data-sr="Gov Impersonation: 14,190 prijava, $394M gubitak." data-en="Gov Impersonation: 14,190 reports, $394M loss.">Gov Impersonation: 14,190 prijava, $394M gubitak.</li>
            <li data-sr="lažno predstavljanje državnih institucija: $2.7 milijardi (IRS, SSA, policija)." data-en="government impersonation scams: $2.7 billion (IRS, SSA, police).">lažno predstavljanje državnih institucija: $2.7 milijardi (IRS, SSA, policija).</li>
            <li data-sr="lažno predstavljanje tehničke podrške: $1.4 milijarde." data-en="tech support scam losses: $1.4 billion.">lažno predstavljanje tehničke podrške: $1.4 milijarde.</li>
            <li data-sr="lažna porodična hitnost: $1.2 milijarde (prevara „baka-deka“)." data-en="family/friend emergency: $1.2 billion (grandparent scam).">lažna porodična hitnost: $1.2 milijarde (prevara „baka-deka“).</li>
            <li data-sr="lažno predstavljanje banke/finansija: $2.1 milijarde." data-en="bank/financial impersonation: $2.1 billion.">lažno predstavljanje banke/finansija: $2.1 milijarde.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Demografija (prosečni gubici po tipu)." data-en="Demographics (average losses by type).">Demografija (prosečni gubici po tipu)</div>
          <ul class="bullets">
            <li data-sr="prevara u firmama avg loss: $125,000 (NAJVIŠI - business targets)." data-en="business scams avg loss: $125,000 (HIGHEST - business targets).">prevara u firmama avg loss: $125,000 (NAJVIŠI - business targets).</li>
            <li data-sr="lažno predstavljanje državnih organa: prosečan gubitak $7,500." data-en="government impersonation scams: average loss $7,500.">lažno predstavljanje državnih organa: prosečan gubitak $7,500.</li>
            <li data-sr="porodična hitnost: prosečan gubitak $11,000 (emocionalno ciljanje)." data-en="family emergency scams: average loss $11,000 (emotional targeting).">porodična hitnost: prosečan gubitak $11,000 (emocionalno ciljanje).</li>
            <li data-sr="prosečan gubitak kod lažne tehničke podrške: $8,000." data-en="tech support scam average loss: $8,000.">prosečan gubitak kod lažne tehničke podrške: $8,000.</li>
            <li data-sr="lažno predstavljanje banke: prosečan gubitak $6,200." data-en="bank impersonation: average loss $6,200.">lažno predstavljanje banke: prosečan gubitak $6,200.</li>
            <li data-sr="ukupni medijalni gubitak: $3,500 (širok raspon)." data-en="overall median loss: $3,500 (wide range).">ukupni medijalni gubitak: $3,500 (širok raspon).</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Starosna raspodela (najugroženije grupe)." data-en="Age distribution (most vulnerable groups).">Starosna raspodela (najugroženije grupe)</div>
          <ul class="bullets">
            <li data-sr="prevara u firmama: starost 35-55 (88% žrtava - empleado/finance roles)." data-en="business scams: age 35-55 (88% of victims - employee/finance roles).">prevara u firmama: starost 35-55 (88% žrtava - empleado/finance roles).</li>
            <li data-sr="državni organi: starost 60+ (65% žrtava - efekat autoriteta)." data-en="government impersonation scams: age 60+ (65% of victims - authority bias).">državni organi: starost 60+ (65% žrtava - efekat autoriteta).</li>
            <li data-sr="porodična hitnost: starost 60+ (75% žrtava - prevara „baka-deka“)." data-en="family emergency: age 60+ (75% of victims - grandparent scam).">porodična hitnost: starost 60+ (75% žrtava - prevara „baka-deka“).</li>
            <li data-sr="lažna tehnička podrška: starost 50+ (70% žrtava - niža tehnička pismenost)." data-en="tech support: age 50+ (70% of victims - lower tech literacy).">lažna tehnička podrška: starost 50+ (70% žrtava - niža tehnička pismenost).</li>
            <li data-sr="bankarske prevare: svi uzrasti (ravnomerna raspodela, univerzalni rizik)." data-en="bankarske prevare: svi uzrasti (ravnomerna raspodela, univerzalni rizik).">bankarske prevare: svi uzrasti (ravnomerna raspodela, univerzalni rizik).</li>
            <li data-sr="rast AI kopiranja glasa: svi uzrasti su podjednako ranjivi (nova pretnja)." data-en="AI voice cloning rise: all ages are equally vulnerable (new threat).">rast AI kopiranja glasa: svi uzrasti su podjednako ranjivi (nova pretnja).</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Operativna ekonomija" data-en="Operational economics">Operativna ekonomija</div>
          <ul class="bullets">
            <li data-sr="cena po pokušaju: $0-50 (lažiranje broja telefona, lažiranje email adrese)." data-en="cost per attempt: $0-50 (faking phone number, faking email address).">cena po pokušaju: $0-50 (lažiranje broja telefona, lažiranje email adrese).</li>
            <li data-sr="broj meta per scammer: 100-500 attempts/day (high automation)." data-en="broj meta per scammer: 100-500 attempts/day (high automation).">broj meta per scammer: 100-500 attempts/day (high automation).</li>
            <li data-sr="uspešnost prevare (general): 0.5-2% (prevara u firmama: 5-10% higher targeting)." data-en="uspešnost prevare (general): 0.5-2% (business scams: 5-10% higher targeting).">uspešnost prevare (general): 0.5-2% (prevara u firmama: 5-10% higher targeting).</li>
            <li data-sr="harvest per scammer per mesec: $8K-25K (prevara u firmama specialists: $100K+)." data-en="harvest per scammer per month: $8K-25K (business scams specialists: $100K+).">harvest per scammer per mesec: $8K-25K (prevara u firmama specialists: $100K+).</li>
            <li data-sr="ROI: 2,000-5,000% (prevara u firmama: 10,000-20,000%)." data-en="ROI: 2,000-5,000% (business scams: 10,000-20,000%).">ROI: 2,000-5,000% (prevara u firmama: 10,000-20,000%).</li>
            <li data-sr="AI kopiranje glasa cost: $10-100/voice (ElevenLabs, Play.ht)." data-en="AI kopiranje glasa cost: $10-100/voice (ElevenLabs, Play.ht).">AI kopiranje glasa cost: $10-100/voice (ElevenLabs, Play.ht).</li>
          </ul>
        </div>
      </div>

      <div class="callout"
        data-sr="<strong>Ekonomski profil:</strong> kompromitovanje poslovnog imejla (BEC) ima veoma visok prosečan gubitak po žrtvi. AI kopiranje glasa dodatno povećava uspešnost porodičnih hitnih prevara, a novi AI alati šire prostor za nove oblike lažnog predstavljanja."
        data-en="<strong>Economic profile:</strong> Business Email Compromise has the highest average loss per victim ($137K, IC3 2023). Business scams plus government impersonation reach a combined $3.3B. AI voice cloning dramatically increases the success rate of family emergency scams. New AI tools mark a new era of impersonation fraud."
      ><strong>Ekonomski profil:</strong> Lažno predstavljanje ima veoma visok ukupan gubitak među tipovima prevara. Kompromitovanje poslovnog imejla (BEC) ima veoma visok prosečan gubitak po žrtvi, a AI kopiranje glasa dodatno povećava uspešnost porodičnih hitnih prevara. Novi AI alati otvaraju novu fazu prevara lažnim predstavljanjem.</div>
    </section>

<section class="content-section">
  <h2 data-sr="Povezane prevare" data-en="Related scams">Povezane prevare</h2>
  <ul class="bullets">
    <li><a href="fake-call-scam.html" data-sr="Lažni pozivi" data-en="Fake calls">Lažni pozivi</a></li>
    <li><a href="vishing.html" data-sr="Višing" data-en="Vishing">Višing</a></li>
    <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
    <li><a href="government-impersonation.html" data-sr="Lažno predstavljanje državnih organa" data-en="Government impersonation scams">Lažno predstavljanje državnih organa</a></li>
    <li><a href="bank-impersonation.html" data-sr="Lažna banka (bankovni prevarant)" data-en="Bank impersonation scam">Lažna banka (bankovni prevarant)</a></li>
  </ul>
</section>

`
};
