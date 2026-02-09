window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["impersonation-scam"] = {
  raw_html: `
    <!-- 1) UVOD -->
    <section class="card">
      <h2 data-sr="Introduction: how impersonation works" data-en="Introduction: how impersonation works">Introduction: how impersonation works</h2>

      <p
        data-sr="Lažno predstavljanje koristi autoritet kao polugu. Napadač glumi instituciju, firmu, službu ili blisku osobu. Maska daje kredibilitet zahtevu koji bi inače delovao sumnjivo. Banka traži kod, policija traži saradnju, direktor traži hitan transfer, rođak traži pomoć. Autoritet skraćuje proveru jer meta reaguje na poziciju, ne na sadržaj." data-en="Impersonation uses authority as leverage. The attacker poses as an institution, company, service, or close contact. The mask lends credibility to a request that would otherwise seem suspicious. A bank asks for a code, police asks for cooperation, a a company director demands an urgent transfer, a relative asks for help. Authority shortens verification because the target reacts to position, not content."
      >Lažno predstavljanje koristi autoritet kao polugu. Napadač glumi instituciju, firmu, službu ili blisku osobu. Maska daje kredibilitet zahtevu koji bi inače delovao sumnjivo. Banka traži kod, policija traži saradnju, direktor traži hitan transfer, rođak traži pomoć. Autoritet skraćuje proveru jer meta reaguje na poziciju, ne na sadržaj.</p>

      <p
        data-sr="Kanal varira: poziv, imejl, poruka, čak i lični kontakt. Mehanizam ostaje isti: maska autoriteta + hitnost + zahtev za radnjom koja ima posledicu. Šteta se realizuje kroz predaju podataka, kodova ili direktnu uplatu. Često se koristi scenario koji zatvara prostor za pitanja: istraga, incident, hitan problem." data-en="The channel varies: call, email, message, even in-person contact. The mechanism stays the same: authority mask + urgency + a request for an action with consequences. Damage occurs through handing over data, codes, or direct payment. Often the scenario closes the space for questions: investigation, incident, urgent problem."
      >Kanal varira: poziv, imejl, poruka, čak i lični kontakt. Mehanizam ostaje isti: maska autoriteta + hitnost + zahtev za radnjom koja ima posledicu. Šteta se realizuje kroz predaju podataka, kodova ili direktnu uplata. Često se koristi scenario koji zatvara prostor za pitanja: istraga, incident, hitan problem.</p>

      <div class="callout"
        data-sr="<strong>Model:</strong> kontakt (maska autoriteta) → scenario (problem + hitnost) → zahtev (kod/podaci/uplata) → prag → serijske posledice → eskalacija → recovery" data-en="<strong>Model:</strong> contact (authority mask) → scenario (problem + urgency) → request (code/data/payment) → threshold → cascading consequences → escalation → recovery"
      ><strong>Model:</strong> kontakt (maska autoriteta) → scenario (problem + hitnost) → zahtev (kod/podaci/uplata) → prag → serijske posledice → eskalacija → recovery</div>
    </section>

    <!-- 2) TIPOVI MASKI -->
    <section class="card">
      <h2 data-sr="Mask types: who can be impersonated" data-en="Mask types: who can be impersonated">Mask types: who can be impersonated</h2>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Institutions" data-en="Institutions">Institutions</div>
          <ul class="bullets">
            <li data-sr="banka — sumnjiva transakcija, verifikacija" data-en="bank — suspicious transaction, verification">banka — sumnjiva transakcija, verifikacija</li>
            <li data-sr="policija — istraga, zamrznuti račun" data-en="police — investigation, frozen account">policija — istraga, zamrznuti račun</li>
            <li data-sr="poreska služba — dug, kazna, revizija" data-en="tax authority — debt, fine, audit">poreska služba — dug, kazna, revizija</li>
            <li data-sr="sud — poziv, postupak" data-en="court — summons, proceedings">sud — poziv, postupak</li>
            <li data-sr="teleoperater — problem sa nalogom" data-en="telecom — account issue">teleoperater — problem sa nalogom</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Companies and services" data-en="Companies and services">Companies and services</div>
          <ul class="bullets">
            <li data-sr="IT podrška — bezbednosni incident" data-en="IT support — security incident">IT podrška — bezbednosni incident</li>
            <li data-sr="kurir/pošta — paket, carina" data-en="courier/post — package, customs">kurir/pošta — paket, carina</li>
            <li data-sr="platforma — verifikacija naloga" data-en="platform — account verification">platforma — verifikacija naloga</li>
            <li data-sr="dobavljač — promena računa za uplatu" data-en="supplier — changed payment account">dobavljač — promena računa za uplatu</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Known individuals" data-en="Known individuals">Known individuals</div>
          <ul class="bullets">
            <li data-sr="direktor/šef — hitan transfer (direktor kompanije fraud)" data-en="a company director/boss — urgent transfer (a company director fraud)">direktor/šef — hitan transfer (direktor kompanije fraud)</li>
            <li data-sr="kolega — pomoć sa računom" data-en="colleague — help with an account">kolega — pomoć sa računom</li>
            <li data-sr="prijatelj/rođak — hitna situacija" data-en="friend/relative — emergency">prijatelj/rođak — hitna situacija</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Mask function" data-en="Mask function">Mask function</div>
          <ul class="bullets">
            <li data-sr="daje kredibilitet zahtevu" data-en="lends credibility to the request">daje kredibilitet zahtevu</li>
            <li data-sr="skraćuje proveru identiteta" data-en="shortens identity verification">skraćuje proveru identiteta</li>
            <li data-sr="uvodi posledicu za odbijanje" data-en="introduces consequences for refusal">uvodi posledicu za odbijanje</li>
            <li data-sr="aktivira poslušnost prema autoritetu" data-en="activates compliance toward authority">aktivira poslušnost prema autoritetu</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 3) HRONOLOŠKI TOK -->
    <section class="card">
      <h2 data-sr="Timeline (phases + branching)" data-en="Timeline (phases + branching)">Timeline (phases + branching)</h2>

      <!-- FAZA 1 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Phase 1 — Contact: mask and context" data-en="Phase 1 — Contact: mask and context">Phase 1 — Contact: mask and context</h3>

        <p
          data-sr="Kontakt stiže kroz kanal koji odgovara maski: poziv za banku, imejl za firmu, poruka za rođaka. Maska se uspostavlja odmah: ime, pozicija, institucija. Detalji mogu da uključuju „case ID“", „interni broj", ime mete."
          data-en="Contact arrives through a channel matching the mask: call for bank, email for company, message for relative. The mask is established immediately: name, position, institution. Details may include"case ID", "internal number", target's name."
        >Kontakt stiže kroz kanal koji odgovara maski: poziv za banku, imejl za firmu, poruka za rođaka. Maska se uspostavlja odmah: ime, pozicija, institucija. Detalji mogu da uključuju „case ID", „interni broj", ime mete.</p>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> meta prihvata identitet pozivaoca bez nezavisne provere." data-en="<strong>Threshold:</strong> target accepts the caller's identity without independent verification."
        ><strong>Prag faze:</strong> meta prihvata identitet pozivaoca bez nezavisne provere.</div>
      </article>

      <!-- FAZA 2 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Phase 2 — Scenario: problem and urgency" data-en="Phase 2 — Scenario: problem and urgency">Phase 2 — Scenario: problem and urgency</h3>

        <p
          data-sr="Napadač uvodi scenario koji zahteva brzu reakciju. Problem je ozbiljan: kompromitovan nalog, sumnjiva transakcija, istraga, hitan poslovni zahtev, porodična nevolja. Hitnost zatvara prostor za proveru i konsultaciju." data-en="The attacker introduces a scenario requiring quick action. The problem is serious: compromised account, suspicious transaction, investigation, urgent business need, family trouble. Urgency closes space for verification and consultation."
        >Napadač uvodi scenario koji zahteva brzu reakciju. Problem je ozbiljan: kompromitovan nalog, sumnjiva transakcija, istraga, hitan poslovni zahtev, porodična nevolja. Hitnost zatvara prostor za proveru i konsultaciju.</p>

        <ul class="bullets">
          <li data-sr="„vidimo sumnjivu aktivnost na vašem nalogu“" data-en="we see suspicious activity on your account">„vidimo sumnjivu aktivnost na vašem nalogu“</li>
          <li data-sr="„vaš račun je deo istrage“" data-en="your account is part of an investigation">„vaš račun je deo istrage“</li>
          <li data-sr="„hitno mi treba transfer pre sastanka“" data-en="I urgently need a transfer before the meeting">„hitno mi treba transfer pre sastanka“</li>
          <li data-sr="„imao sam nezgodu, treba mi pomoć odmah“" data-en="I had an accident, I need help immediately">„imao sam nezgodu, treba mi pomoć odmah“</li>
        </ul>
      </article>

      <!-- FAZA 3 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Phase 3 — Request: code, data, or payment" data-en="Phase 3 — Request: code, data, or payment">Phase 3 — Request: code, data, or payment</h3>

        <p
          data-sr="Zahtev dolazi kao logičan nastavak scenarija. Maska daje legitimitet: banka traži kod „za verifikaciju“", policija traži podatke „za istragu", direktor traži transfer „za posao", rođak traži novac „za hitnu situaciju". Zahtev se prodaje kao standardna procedura ili nužna pomoć."
          data-en="The request arrives as a logical continuation of the scenario. The mask provides legitimacy: bank asks for code"for verification", police asks for data "for investigation", direktor kompanije requests transfer "for business", relative asks for money "for emergency". The request is framed as standard procedure or necessary help."
        >Zahtev dolazi kao logičan nastavak scenarija. Maska daje legitimitet: banka traži kod „za verifikaciju", policija traži podatke „za istragu", direktor traži transfer „za posao", rođak traži novac „za hitnu situaciju". Zahtev se prodaje kao standardna procedura ili nužna pomoć.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Typical requests" data-en="Typical requests">Typical requests</div>
            <ul class="bullets">
              <li data-sr="OTP kod ili lozinka" data-en="OTP code or password">OTP kod ili lozinka</li>
              <li data-sr="podaci kartice" data-en="card details">podaci kartice</li>
              <li data-sr="transfer na „siguran račun“" data-en="transfer to a &quot;safe account&quot;">transfer na „siguran račun“</li>
              <li data-sr="promena podataka za uplatu dobavljaču" data-en="changing supplier payment details">promena podataka za uplatu dobavljaču</li>
              <li data-sr="kupovina vaučera/kriptovalute" data-en="buying vouchers/cryptocurrency">kupovina vaučera/kriptovalute</li>
            </ul>
          </div>
          <div class="phase">
            <div class="label" data-sr="How it's sold" data-en="How it's sold">How it's sold</div>
            <ul class="bullets">
              <li data-sr="„standardna procedura“" data-en="standard procedure">„standardna procedura“</li>
              <li data-sr="„za vašu zaštitu“" data-en="for your protection">„za vašu zaštitu“</li>
              <li data-sr="„obavezno po zakonu“" data-en="required by law">„obavezno po zakonu“</li>
              <li data-sr="„samo ti možeš da pomogneš“" data-en="only you can help">„samo ti možeš da pomogneš“</li>
            </ul>
          </div>
        </div>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li data-sr="<strong>pozivna prevara:</strong> poziv kao primarni kanal. (Povezano: <a href='pozivna prevara.html'>pozivna prevara</a>)" data-en="<strong>Višing:</strong> call as primary channel. (Related: <a href='vishing.html'>Vishing</a>)"><strong>Pozivna prevara:</strong> poziv kao primarni kanal. (Povezano: <a href="vishing.html">Vishing</a>)</li>
            <li data-sr="<strong>fišing:</strong> link u poruci. (Povezano: <a href='fišing.html'>fišing</a>)" data-en="<strong>Fišing:</strong> link in message. (Related: <a href='phishing.html'>Phishing</a>)"><strong>Fišing:</strong> link u poruci. (Povezano: <a href="phishing.html">Phishing</a>)</li>
            <li data-sr="<strong>Advance-fee:</strong> uplata kao uslov. (Povezano: <a href='advance-fee-fraud.html'>Advance-fee</a>)" data-en="<strong>Advance-fee:</strong> payment as condition. (Related: <a href='advance-fee-fraud.html'>Advance-fee</a>)"><strong>Advance-fee:</strong> uplata kao uslov. (Povezano: <a href="advance-fee-fraud.html">Advance-fee</a>)</li>
          </ul>
        </div>
      </article>

      <!-- FAZA 4 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Phase 4 — Threshold: surrendering control" data-en="Phase 4 — Threshold: surrendering control">Phase 4 — Threshold: surrendering control</h3>

        <p
          data-sr="Prag nastaje kada meta izvrši zahtev: preda kod, pošalje novac, promeni podatke za uplatu, instalira alat. Posle praga napadač ima pristup ili sredstva, a tok prelazi u serijske posledice." data-en="The threshold occurs when the target complies: hands over a code, sends money, changes payment details, installs a tool. After the threshold the attacker has access or funds, and the flow turns into cascading consequences."
        >Prag nastaje kada meta izvrši zahtev: preda kod, pošalje novac, promeni podatke za uplatu, instalira alat. Posle praga napadač ima pristup ili sredstva, a tok prelazi u serijske posledice.</p>
      </article>

      <!-- FAZA 5 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Phase 5 — Cascading consequences" data-en="Phase 5 — Cascading consequences">Phase 5 — Cascading consequences</h3>

        <p
          data-sr="Posle praga kreće lanac: preuzimanje naloga, dodatne transakcije, promena podataka, kontaktiranje drugih meta kroz preuzete naloge. U poslovnom kontekstu šteta može da uključi preusmerene uplate dobavljačima." data-en="After the threshold, a chain starts: account takeover, additional transactions, data changes, contacting other targets through stolen accounts. In business contexts, damage may include redirected supplier payments."
        >Posle praga kreće lanac: preuzimanje naloga, dodatne transakcije, promena podataka, kontaktiranje drugih meta kroz preuzete naloge. U poslovnom kontekstu šteta može da uključi preusmerene uplate dobavljačima.</p>

        <div class="branch">
          <p><strong data-sr="Grananja posle praga" data-en="Branching after threshold">Grananja posle praga</strong></p>
          <ul class="bullets">
            <li data-sr="<strong>preuzimanje naloga:</strong> preuzimanje naloga. (Povezano: account-takeover)" data-en="<strong>Preuzimanje naloga:</strong> taking over accounts. (Related: account-takeover)"><strong>Preuzimanje naloga:</strong> preuzimanje naloga. (Povezano: account-takeover)</li>
          </ul>
        </div>
      </article>

      <!-- FAZA 6 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Phase 6 — Escalation and recovery" data-en="Phase 6 — Escalation and recovery">Phase 6 — Escalation and recovery</h3>

        <p
          data-sr="Ako meta posumnja, napadač eskalira: veći autoritet, nove pretnje, novi identitet. Posle prekida često stiže recovery ponuda: „pomoć“" uz uplatu."
          data-en="If the target doubts, the attacker escalates: higher authority, new threats, new identity. After the break, a recovery offer often arrives:"help" for a fee."
        >Ako meta posumnja, napadač eskalira: veći autoritet, nove pretnje, novi identitet. Posle prekida često stiže recovery ponuda: „pomoć" uz uplatu.</p>

        <div class="branch">
          <p><strong data-sr="Povezano" data-en="Related">Povezano</strong></p>
          <ul class="bullets">
            <li data-sr="<strong>Recovery scam:</strong> povrat kao mamac. (Povezano: <a href='recovery-scam.html'>Recovery</a>)" data-en="<strong>Recovery scam:</strong> recovery as bait. (Related: <a href='recovery-scam.html'>Recovery</a>)"><strong>Recovery scam:</strong> povrat kao mamac. (Povezano: <a href="recovery-scam.html">Recovery</a>)</li>
          </ul>
        </div>
      </article>
    </section>

    <!-- 4) SPECIFIČNE VARIJANTE -->
    <section class="card">
      <h2 data-sr="Specific impersonation variants" data-en="Specific impersonation variants">Specific impersonation variants</h2>

      <h3 data-sr="direktor kompanije fraud / prevara u firmama (Business Email Compromise)" data-en="a company director fraud / business scams (Business Email Compromise)">direktor kompanije fraud / prevara u firmama (Business Email Compromise)</h3>
      <ul class="bullets">
        <li data-sr="napadač glumi direktora ili višeg menadžera" data-en="attacker impersonates a company director or a senior manager">napadač glumi direktora ili višeg menadžera</li>
        <li data-sr="traži hitan transfer sa objašnjenjem da je „poverl“" data-en="requests urgent transfer claiming it's &quot;confidential&quot;">traži hitan transfer sa objašnjenjem da je „poverljivo“</li>
        <li data-sr="cilja zaposlene u finansijama ili računovodstvu" data-en="targets finance or accounting employees">cilja zaposlene u finansijama ili računovodstvu</li>
        <li data-sr="koristi sličan imejl domen ili kompromitovan nalog" data-en="uses similar email domain or compromised account">koristi sličan imejl domen ili kompromitovan nalog</li>
      </ul>

      <h3 data-sr="Grandparent scam / family emergency" data-en="Grandparent scam / family emergency">Grandparent scam / family emergency</h3>
      <ul class="bullets">
        <li data-sr="napadač glumi unuka, nećaka ili bliskog rođaka" data-en="attacker impersonates grandchild, nephew, or close relative">napadač glumi unuka, nećaka ili bliskog rođaka</li>
        <li data-sr="scenario je hitna situacija: nezgoda, hapšenje, bolnica" data-en="scenario is an emergency: accident, arrest, hospital">scenario je hitna situacija: nezgoda, hapšenje, bolnica</li>
        <li data-sr="traži novac odmah, često u gotovini ili vaučerima" data-en="demands money immediately, often in cash or vouchers">traži novac odmah, često u gotovini ili vaučerima</li>
        <li data-sr="insistira na tajnosti: „nemoj reći roditeljima“" data-en="insists on secrecy: &quot;don't tell parents&quot;">insistira na tajnosti: „nemoj reći roditeljima“</li>
      </ul>

      <h3 data-sr="Fake dobavljač / account change" data-en="Fake supplier / account change">Fake dobavljač / account change</h3>
      <ul class="bullets">
        <li data-sr="napadač glumi postojećeg dobavljača" data-en="attacker impersonates existing supplier">napadač glumi postojećeg dobavljača</li>
        <li data-sr="obaveštava o „promeni bankovnog računa“" data-en="notifies of &quot;bank account change&quot;">obaveštava o „promeni bankovnog računa“</li>
        <li data-sr="sledeća faktura ide na račun napadača" data-en="next invoice goes to attacker's account">sledeća faktura ide na račun napadača</li>
        <li data-sr="koristi sličan imejl ili kompromitovan nalog dobavljača" data-en="uses similar email or compromised supplier account">koristi sličan imejl ili kompromitovan nalog dobavljača</li>
      </ul>
    </section>

    <!-- 5) IZ UGLA PREVARANTA -->
    <section class="card">
      <h2 data-sr="From the scammers' side" data-en="From the scammers' side">From the scammers' side</h2>

      <p
        data-sr="Lažno predstavljanje zahteva pripremu: informacije o meti, izbor maske, konstrukcija scenarija. Organizovanije operacije koriste OSINT (open source intelligence) za prikupljanje detalja koji povećavaju kredibilitet. Cilj je da maska prođe bez pitanja." data-en="Impersonation requires preparation: information about the target, mask selection, scenario construction. More organized operations use OSINT (open source intelligence) to gather details that increase credibility. The goal is for the mask to pass without questions."
      >Lažno predstavljanje zahteva pripremu: informacije o meti, izbor maske, konstrukcija scenarija. Organizovanije operacije koriste OSINT (open source intelligence) za prikupljanje detalja koji povećavaju kredibilitet. Cilj je da maska prođe bez pitanja.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="What they look for before attack" data-en="What they look for before attack">What they look for before attack</div>
          <ul class="bullets">
            <li data-sr="javno dostupne informacije o meti" data-en="publicly available info about target">javno dostupne informacije o meti</li>
            <li data-sr="organizaciona struktura firme" data-en="company organizational structure">organizaciona struktura firme</li>
            <li data-sr="imena zaposlenih i njihove uloge" data-en="employee names and roles">imena zaposlenih i njihove uloge</li>
            <li data-sr="porodične veze (za grandparent scam)" data-en="family connections (for grandparent scam)">porodične veze (za grandparent scam)</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="How they react to verification" data-en="How they react to verification">How they react to verification</div>
          <ul class="bullets">
            <li data-sr="pritisak i hitnost da se ne proverava" data-en="pressure and urgency to skip verification">pritisak i hitnost da se ne proverava</li>
            <li data-sr="„nema vremena za procedure“" data-en="no time for procedures">„nema vremena za procedure“</li>
            <li data-sr="prelaz na sledeću metu ako provera počne" data-en="moving to next target if verification starts">prelaz na sledeću metu ako provera počne</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 6) STANDARDNA UPOZORENJA -->
    <section class="card">
      <h2 data-sr="Standard warnings" data-en="Standard warnings">Standard warnings</h2>

      <ul class="bullets">
        <li data-sr="institucije ne traže kodove, lozinke ili transfer „na siguran račun“" data-en="institutions don't ask for codes, passwords, or transfers to"safe accounts" over the phone">institucije ne traže kodove, lozinke ili transfer „na siguran račun" telefonom</li>
        <li data-sr="zahtev za tajnošću („nemoj nikome reći“" data-en="a secrecy request ("don't tell anyone") is a manipulation signal">zahtev za tajnošću („nemoj nikome reći") je signal manipulacije</li>
        <li data-sr="promena bankovnog računa dobavljača zahteva nezavisnu verifikaciju" data-en="supplier bank account changes require independent verification">promena bankovnog računa dobavljača zahteva nezavisnu verifikaciju</li>
        <li data-sr="hitnost koja ne dozvoljava pauzu je signal kontrole" data-en="urgency that doesn't allow pause is a control signal">hitnost koja ne dozvoljava pauzu je signal kontrole</li>
      </ul>

      <div class="callout"
        data-sr="<strong>Praktično pravilo:</strong> prekini kontakt i proveri identitet kroz nezavisan kanal (zvaničan broj, direktan poziv osobi)." data-en="<strong>Practical rule:</strong> break contact and verify identity through an independent channel (official number, direct call to the person)."
      ><strong>Praktično pravilo:</strong> prekini kontakt i proveri identitet kroz nezavisan kanal (zvaničan broj, direktan poziv osobi).</div>
    </section>

    <!-- 7) AKO JE ŠTETA NASTALA -->
    <section class="card">
      <h2 data-sr="If damage happened (action order)" data-en="If damage happened (action order)">If damage happened (action order)</h2>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Gave data / code" data-en="Gave data / code">Gave data / code</div>
          <ol class="steps">
            <li data-sr="promena lozinki na ugroženim nalozima" data-en="change passwords on affected accounts">promena lozinki na ugroženim nalozima</li>
            <li data-sr="uključivanje dvofaktorska potvrda" data-en="enable 2FA">uključivanje dvofaktorska potvrda</li>
            <li data-sr="provera aktivnih sesija" data-en="check active sessions">provera aktivnih sesija</li>
            <li data-sr="kontakt institucije ako su finansijski podaci ugroženi" data-en="contact institution if financial data is at risk">kontakt institucije ako su finansijski podaci ugroženi</li>
          </ol>
        </div>
        <div class="phase">
          <div class="label" data-sr="Made transfer / payment" data-en="Made transfer / payment">Made transfer / payment</div>
          <ol class="steps">
            <li data-sr="kontakt banke odmah — mogućnost zaustavljanja transfera" data-en="contact bank immediately — transfer may be stopped">kontakt banke odmah — mogućnost zaustavljanja transfera</li>
            <li data-sr="čuvanje dokaza: poruke, emailovi, detalji transakcije" data-en="save evidence: messages, emails, transaction details">čuvanje dokaza: poruke, emailovi, detalji transakcije</li>
            <li data-sr="obaveštenje partnera ako je reč o poslovnoj prevari" data-en="notify partners if it's a business fraud">obaveštenje partnera ako je reč o poslovnoj prevari</li>
          </ol>
        </div>
      </div>

      <div class="callout"
        data-sr="<strong>Upozorenje:</strong> posle incidenta očekuj recovery ponude uz uplatu. Takav kontakt tretira se kao drugi napad." data-en="<strong>Warning:</strong> after an incident, expect paid recovery offers. Treat them as a second attack."
      ><strong>Upozorenje:</strong> posle incidenta očekuj recovery ponude uz uplatu. Takav kontakt tretira se kao drugi napad.</div>
    </section>


    <!-- 8) STATISTIKE I EKONOMIJA IMPERSONATION PREVARA -->
    <section class="card">
      <h2 data-sr="Impersonation scam statistics and economics" data-en="Impersonation scam statistics and economics">Impersonation scam statistics and economics</h2>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="FBI IC3 + FTC data (2023)" data-en="FBI IC3 + FTC data (2023)">FBI IC3 + FTC data (2023)</div>
          <ul class="bullets">
            <li data-sr="IC3 2023: prevara u firmama (Business imejl Compromise) 21,489 prijava, $2.9B gubitak" data-en="IC3 2023: business scams (Business Email Compromise) 21,489 reports, $2.9B loss">IC3 2023: prevara u firmama (Business Imejl Compromise) 21,489 prijava, $2.9B gubitak</li>
            <li data-sr="prosečan gubitak po prevara u firmama žrtvi: $137,121" data-en="average loss per business scams victim: $137,121">prosečan gubitak po prevara u firmama žrtvi: $137,121</li>
            <li data-sr="Gov Impersonation: 14,190 prijava, $394M gubitak" data-en="Gov Impersonation: 14,190 reports, $394M loss">Gov Impersonation: 14,190 prijava, $394M gubitak</li>
            <li data-sr="government impersonation: $2.7 milijardi (IRS, SSA, police)" data-en="government impersonation: $2.7 billion (IRS, SSA, police)">government impersonation: $2.7 milijardi (IRS, SSA, police)</li>
            <li data-sr="tech support impersonation: $1.4 milijarde" data-en="tech support impersonation: $1.4 billion">tech support impersonation: $1.4 milijarde</li>
            <li data-sr="family/friend emergency: $1.2 milijarde (grandparent scam)" data-en="family/friend emergency: $1.2 billion (grandparent scam)">family/friend emergency: $1.2 milijarde (grandparent scam)</li>
            <li data-sr="bank/financial impersonation: $2.1 milijarde" data-en="bank/financial impersonation: $2.1 billion">bank/financial impersonation: $2.1 milijarde</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Demographics (average losses by type)" data-en="Demographics (average losses by type)">Demographics (average losses by type)</div>
          <ul class="bullets">
            <li data-sr="prevara u firmama avg loss: $125,000 (NAJVIŠI - business targets)" data-en="business scams avg loss: $125,000 (HIGHEST - business targets)">prevara u firmama avg loss: $125,000 (NAJVIŠI - business targets)</li>
            <li data-sr="government impersonation avg loss: $7,500" data-en="government impersonation avg loss: $7,500">government impersonation avg loss: $7,500</li>
            <li data-sr="family emergency avg loss: $11,000 (emotional targeting)" data-en="family emergency avg loss: $11,000 (emotional targeting)">family emergency avg loss: $11,000 (emotional targeting)</li>
            <li data-sr="tech support avg loss: $8,000" data-en="tech support avg loss: $8,000">tech support avg loss: $8,000</li>
            <li data-sr="bank impersonation avg loss: $6,200" data-en="bank impersonation avg loss: $6,200">bank impersonation avg loss: $6,200</li>
            <li data-sr="overall median loss: $3,500 (wide variance)" data-en="overall median loss: $3,500 (wide variance)">overall median loss: $3,500 (wide variance)</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Age distribution (most vulnerable)" data-en="Age distribution (most vulnerable)">Age distribution (most vulnerable)</div>
          <ul class="bullets">
            <li data-sr="prevara u firmama: starost 35-55 (88% žrtava - empleado/finance roles)" data-en="business scams: age 35-55 (88% of victims - employee/finance roles)">prevara u firmama: starost 35-55 (88% žrtava - empleado/finance roles)</li>
            <li data-sr="government: starost 60+ (65% žrtava - authority bias)" data-en="government: age 60+ (65% of victims - authority bias)">government: starost 60+ (65% žrtava - authority bias)</li>
            <li data-sr="family emergency: starost 60+ (75% žrtava - " data-en="family emergency: age 60+ (75% of victims -"grandparent scam")">family emergency: starost 60+ (75% žrtava - "grandparent scam")</li>
            <li data-sr="tech support: starost 50+ (70% žrtava - lower tech literacy)" data-en="tech support: age 50+ (70% of victims - lower tech literacy)">tech support: starost 50+ (70% žrtava - lower tech literacy)</li>
            <li data-sr="bank: all ages (balanced distribution, universal risk)" data-en="bank: all ages (balanced distribution, universal risk)">bank: all ages (balanced distribution, universal risk)</li>
            <li data-sr="rast AI kopiranje glasa: svi uzrasti PODJEDNAKO ranjivi (new threat)" data-en="AI kopiranje glasa rise: all ages EQUALLY vulnerable (new threat)">rast AI kopiranje glasa: svi uzrasti PODJEDNAKO ranjivi (new threat)</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Operational economics" data-en="Operational economics">Operational economics</div>
          <ul class="bullets">
            <li data-sr="cena po pokušaju: $0-50 (lažiranje broja telefona, lažiranje email adrese)" data-en="cost per attempt: $0-50 (faking phone number, faking email address)">cena po pokušaju: $0-50 (lažiranje broja telefona, lažiranje email adrese)</li>
            <li data-sr="broj meta per scammer: 100-500 attempts/day (high automation)" data-en="broj meta per scammer: 100-500 attempts/day (high automation)">broj meta per scammer: 100-500 attempts/day (high automation)</li>
            <li data-sr="uspešnost prevare (general): 0.5-2% (prevara u firmama: 5-10% higher targeting)" data-en="uspešnost prevare (general): 0.5-2% (business scams: 5-10% higher targeting)">uspešnost prevare (general): 0.5-2% (prevara u firmama: 5-10% higher targeting)</li>
            <li data-sr="harvest per scammer per mesec: $8K-25K (prevara u firmama specialists: $100K+)" data-en="harvest per scammer per month: $8K-25K (business scams specialists: $100K+)">harvest per scammer per mesec: $8K-25K (prevara u firmama specialists: $100K+)</li>
            <li data-sr="ROI: 2,000-5,000% (prevara u firmama: 10,000-20,000%)" data-en="ROI: 2,000-5,000% (business scams: 10,000-20,000%)">ROI: 2,000-5,000% (prevara u firmama: 10,000-20,000%)</li>
            <li data-sr="AI kopiranje glasa cost: $10-100/voice (ElevenLabs, Play.ht)" data-en="AI kopiranje glasa cost: $10-100/voice (ElevenLabs, Play.ht)">AI kopiranje glasa cost: $10-100/voice (ElevenLabs, Play.ht)</li>
          </ul>
        </div>
      </div>

      <div class="callout"
        data-sr="<strong>Ekonomski profil:</strong> prevara u firmama (Business imejl Compromise) ima NAJVIŠI prosečan gubitak $137K po žrtvi (IC3 2023). prevara u firmama + Gov Impersonation = $3.3B kombinovano. AI kopiranje glasa dramatično povećava success rate kod family emergency scams. Novi AI tools = nova era impersonation prevara."
        data-en="<strong>Economic profile:</strong> business scams (Business Email Compromise) has HIGHEST average loss $137K per victim (IC3 2023). business scams + Gov Impersonation = $3.3B combined. AI kopiranje glasa dramatically increases success rate for family emergency scams. New AI tools = new era of prevara lažnim predstavljanjem."
      ><strong>Ekonomski profil:</strong> Impersonation ima NAJVIŠI total gubitak od svih scam tipova ($10.3B u 2023). prevara u firmama (Business Email Compromise) ima NAJVIŠI prosečan gubitak ($125K) i ROI (10,000-20,000%). AI kopiranje glasa ($10-100/voice) DRAMATIČNO povećava success rate kod family emergency scams. Novi AI tools = nova era impersonation prevara.</div>
    </section>

    <!-- 9) prevara u firmama (BUSINESS EMAIL COMPROMISE) - DETALJNO -->
    <section class="card">
      <h2 data-sr="prevara u firmama (Business Email Compromise): most expensive variant" data-en="business scams (Business Email Compromise): most expensive variant">prevara u firmama (Business Email Compromise): most expensive variant</h2>

      <p
        data-sr="Prevara u firmama: neko se pretvara da je direktor, finansijski šef, dobavljač ili advokat i traži hitno slanje novca. Prosečan gubitak je $125,000 (NAJVIŠI od svih prevara). Rade tako što lažiraju email adresu + izaberu pravi momenat (npr. direktor na putovanju) + prave pritisak da se preskoče uobičajene provere."
        data-en="Company fraud: someone pretends to be director, finansijski direktor, supplier or lawyer and requests urgent money transfer. Average loss is $125,000 (HIGHEST of all scams). They fake email address + choose right moment (e.g. director traveling) + create pressure to skip usual checks."
      >Prevara u firmama: neko se pretvara da je direktor, finansijski šef, dobavljač ili advokat i traži hitno slanje novca. Prosečan gubitak je $125,000 (NAJVIŠI od svih prevara). Rade tako što lažiraju email adresu + izaberu pravi momenat (npr. direktor na putovanju) + prave pritisak da se preskoče uobičajene provere.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="prevara u firmama variants (5 types)" data-en="business scams variants (5 types)">prevara u firmama variants (5 types)</div>
          <ul class="bullets">
            <li data-sr="<strong><strong>direktor kompanije fraud:</strong> glumi direktor kompanije-a, traži </li>
            <li data-sr="<strong><strong>Dobavljač imejl compromise:</strong> glumi dobavljača, šalje </li>
            <li data-sr="<strong><strong>Account compromise:</strong> REAL employee imejl hacked, traži </li>
            <li data-sr="<strong><strong>Attorney impersonation:</strong> glumi pravnika, traži </li>
            <li data-sr="<strong><strong>Data theft:</strong> glumi HR/IT, traži </li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="prevara u firmama tactics (how they bypass procedures)" data-en="business scams tactics (how they bypass procedures)">prevara u firmama tactics (how they bypass procedures)</div>
          <ul class="bullets">
            <li data-sr="<strong><strong>lažiranje email adrese:</strong> domain slično real (</li>
            <li data-sr="<strong><strong>Display name spoofing:</strong> display </li>
            <li data-sr="<strong><strong>Timing:</strong> traži transfer kad direktor kompanije je na putu (</li>
            <li data-sr="<strong><strong>Confidentiality:</strong> </li>
            <li data-sr="<strong><strong>Urgency:</strong> </li>
            <li data-sr="<strong><strong>Authority:</strong> </li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="prevara u firmama prevention (company defenses)" data-en="business scams prevention (company defenses)">prevara u firmama prevention (company defenses)</div>
          <ul class="bullets">
            <li data-sr="<strong>Verification protocol:</strong> UVEK pozovi direktor kompanije/dobavljača na KNOWN number za prenos para > $10K" data-en="<strong>Verification protocol:</strong> ALWAYS call a company director/supplier on known number for transfers > $10K"><strong>Verification protocol:</strong> UVEK pozovi direktor kompanije/dobavljača na KNOWN number za prenos para > $10K</li>
            <li data-sr="<strong>Odobrenje dve osobe:</strong> prenos para > threshold = 2 people approval" data-en="<strong>Odobrenje dve osobe:</strong> money transfer > threshold = 2 people approval"><strong>Odobrenje dve osobe:</strong> prenos para > threshold = 2 people approval</li>
            <li data-sr="<strong><strong>imejl banner:</strong> </li>
            <li data-sr="<strong>email protokoli protiv lažnih pošiljalaca:</strong> imejl authentication protocols = block spoofing" data-en="<strong>email protokoli protiv lažnih pošiljalaca:</strong> email authentication protocols = block spoofing"><strong>email protokoli protiv lažnih pošiljalaca:</strong> email authentication protocols = block spoofing</li>
            <li data-sr="<strong>Training:</strong> svi zaposleni = prevara u firmama awareness training (fišing simulations)" data-en="<strong>Training:</strong> all employees = business scams awareness training (phishing simulations)"><strong>Training:</strong> svi zaposleni = prevara u firmama awareness training (vežbe prepoznavanja lažnih email-ova)</li>
            <li data-sr="<strong>Provera preko drugog kanala:</strong> novi dobavljač account = call on KNOWN number za potvrdu" data-en="<strong>Provera preko drugog kanala:</strong> new supplier account = call on known number for confirmation"><strong>Provera preko drugog kanala:</strong> novi dobavljač account = call on KNOWN number za potvrdu</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Znakovi prevare for prevara u firmama" data-en="Znakovi prevare for business scams">Znakovi prevare for prevara u firmama</div>
          <ul class="bullets">
            <li data-sr="imejl traži prenos para sa " data-en="email asks for money transfer with"urgency" and "confidentiality"">imejl traži prenos para sa "urgency" i "confidentiality"</li>
            <li data-sr="imejl domain je SLIČNO ali ne IDENTIČNO (check carefully)" data-en="email domain is SIMILAR but not IDENTICAL (check carefully)">imejl domain je SLIČNO ali ne IDENTIČNO (check carefully)</li>
            <li data-sr="imejl stiže van radnog vremena ili za vreme direktor kompanije travel" data-en="email arrives outside work hours or during a company director travel">imejl stiže van radnog vremena ili za vreme direktor kompanije travel</li>
            <li data-sr="novi dobavljač account bez prior notice ili dokumentacije" data-en="new supplier account without prior notice or documentation">novi dobavljač account bez prior notice ili dokumentacije</li>
            <li data-sr="imejl traži da " data-en="email asks to"not contact direktor kompanije directly" = isolation tactic">imejl traži da "ne kontaktiraš direktor kompanije directly" = isolation tactic</li>
            <li data-sr="imejl style/grammar razlikuje se od normalnog direktor kompanije/dobavljač style" data-en="email style/grammar differs from normal a company director/supplier style">imejl style/grammar razlikuje se od normalnog direktor kompanije/dobavljač style</li>
          </ul>
        </div>
      </div>

      <div class="callout"
        data-sr="<strong>prevara u firmama ključna lekcija:</strong> UVEK verifikuj prenos para request pozivom na KNOWN number (ne na broj iz imejl-a). Urgency + confidentiality + "don't call me" = prevara u firmama znakovi prevare. Prosečan gubitak $125K = jedna greška može bankrotirati malu firmu. Prevention = procedure + training + provera preko drugog kanala.">FTC — Impersonation scams</a></li>
      </ul>
    </section>
  `
};
