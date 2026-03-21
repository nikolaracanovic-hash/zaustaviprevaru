window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["business-email-compromise"] = {
  raw_html: `
    <!-- 1) UVOD -->
    <section class="card">
      <h2 data-sr="Uvod: kako radi kompromitovanje poslovnog imejla (BEC)" data-en="Introduction: how Business Email Compromise works">
        Uvod: kako radi kompromitovanje poslovnog imejla (BEC)
      </h2>

      <p
        data-sr="Kompromitovanje poslovnog imejla (BEC) je napad u kome napadač šalje imejl koji izgleda kao da dolazi od osobe ili firme kojoj meta veruje: direktora, dobavljača, advokata ili finansijskog direktora. Cilj je jedan — navesti nekoga da izvrši uplatu ili promeni podatke za plaćanje pre nego što proveri identitet pošiljaoca."
        data-en="Business Email Compromise (BEC) is an attack where the attacker sends an email that appears to come from someone the target trusts: a company director, supplier, lawyer, or CFO. The goal is to get someone to authorize a payment or change payment details before verifying the sender's identity."
      >Kompromitovanje poslovnog imejla (BEC) je napad u kome napadač šalje imejl koji izgleda kao da dolazi od osobe ili firme kojoj meta veruje: direktora, dobavljača, advokata ili finansijskog direktora. Cilj je jedan — navesti nekoga da izvrši uplatu ili promeni podatke za plaćanje pre nego što proveri identitet pošiljaoca.</p>

      <p
        data-sr="BEC nije hakerski napad u tehničkom smislu — radi se o socijalnom inženjering napadu koji koristi autoritet, hitnost i poverenje unutar poslovnih procesa. Prosečan gubitak po incidentu premašuje 100.000 dolara (FBI IC3, 2023). Tehničke odbrane same po sebi ne zaustavljaju BEC."
        data-en="BEC is not a technical hack — it is a social engineering attack that exploits authority, urgency, and trust within business processes. Average loss per incident exceeds $100,000 (FBI IC3, 2023). Technical defenses alone do not stop BEC."
      >BEC nije hakerski napad u tehničkom smislu — radi se o socijalnom inženjering napadu koji koristi autoritet, hitnost i poverenje unutar poslovnih procesa. Prosečan gubitak po incidentu premašuje 100.000 dolara (FBI IC3, 2023). Tehničke odbrane same po sebi ne zaustavljaju BEC.</p>

      <div class="callout"
        data-sr="<strong>Model:</strong> izviđanje (OSINT o firmi) → lažni identitet (direktor/dobavljač/advokat) → scenario (hitan posao / nova instrukcija) → zahtev (transfer / promena IBAN) → prag (uplata izvršena ili IBAN promenjen) → gubitak → moguć talas recovery prevara."
        data-en="<strong>Model:</strong> reconnaissance (company OSINT) → fake identity (executive/supplier/lawyer) → scenario (urgent deal / new instruction) → request (transfer / IBAN change) → threshold (payment made or IBAN updated) → loss → possible recovery wave."
      ><strong>Model:</strong> izviđanje (OSINT o firmi) → lažni identitet (direktor/dobavljač/advokat) → scenario (hitan posao / nova instrukcija) → zahtev (transfer / promena IBAN) → prag (uplata izvršena ili IBAN promenjen) → gubitak → moguć talas recovery prevara.</div>

      <div class="callout"
        data-sr="<strong>Prag:</strong> zaposleni izvrši uplatu ili unese novi IBAN u sistem bez nezavisne telefonske verifikacije na poznati broj."
        data-en="<strong>Threshold:</strong> employee authorizes a payment or enters a new IBAN into the system without independent phone verification on a known number."
      ><strong>Prag:</strong> zaposleni izvrši uplatu ili unese novi IBAN u sistem bez nezavisne telefonske verifikacije na poznati broj.</div>
    </section>

    <!-- 2) KAKO GENERALNO RADI -->
    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika identiteta i zahteva" data-en="How it works: identity and request mechanics">
        Kako generalno radi: mehanika identiteta i zahteva
      </h2>

      <p
        data-sr="BEC koristi autoritet kao infrastrukturu. Zaposleni su navikli da odgovaraju na zahteve direktora i dobavljača bez dužeg preispitivanja — to je osnova svakodnevnog poslovanja. Napadač ubacuje lažni autoritet u taj tok i dodaje dva elementa koji sprečavaju proveru: hitnost i tajnost."
        data-en="BEC uses authority as infrastructure. Employees are conditioned to respond to executive and supplier requests without extended scrutiny — that is the basis of everyday business. The attacker inserts fake authority into that flow and adds two elements that prevent verification: urgency and secrecy."
      >BEC koristi autoritet kao infrastrukturu. Zaposleni su navikli da odgovaraju na zahteve direktora i dobavljača bez dužeg preispitivanja — to je osnova svakodnevnog poslovanja. Napadač ubacuje lažni autoritet u taj tok i dodaje dva elementa koji sprečavaju proveru: hitnost i tajnost.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gradi lažni autoritet" data-en="What builds fake authority">Šta gradi lažni autoritet</div>
          <ul class="bullets">
            <li data-sr="pravo ime direktora ili dobavljača u pošiljaocu." data-en="real CEO or supplier name in the sender field.">pravo ime direktora ili dobavljača u pošiljaocu.</li>
            <li data-sr="lookalike domen koji je vizualno identičan pravom." data-en="lookalike domain that is visually identical to the real one.">lookalike domen koji je vizualno identičan pravom.</li>
            <li data-sr="imitacija stila komunikacije: ton, pozdrav, potpis." data-en="imitation of communication style: tone, greeting, signature.">imitacija stila komunikacije: ton, pozdrav, potpis.</li>
            <li data-sr="pravi poslovni kontekst: akvizicija, dobavljač, regulatorni zahtev." data-en="real business context: acquisition, supplier, regulatory requirement.">pravi poslovni kontekst: akvizicija, dobavljač, regulatorni zahtev.</li>
            <li data-sr="timing: napad stiže kad je direktor na putu ili nedostupan." data-en="timing: attack arrives when CEO is traveling or unavailable.">timing: napad stiže kad je direktor na putu ili nedostupan.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Kako se uvodi uplata / promena" data-en="How payment / change is introduced">Kako se uvodi uplata / promena</div>
          <ul class="bullets">
            <li data-sr="scenario koji logično zahteva akciju: akvizicija, promena banke, regulatorni rok." data-en="scenario that logically demands action: &ldquo;acquisition&rdquo;, &ldquo;bank change&rdquo;, &ldquo;regulatory deadline&rdquo;.">scenario koji logično zahteva akciju: akvizicija, promena banke, regulatorni rok.</li>
            <li data-sr="rok koji isključuje pauzu: danas do 15h, pre sastanka." data-en="deadline that excludes pause: &ldquo;today by 3pm&rdquo;, &ldquo;before the meeting&rdquo;.">rok koji isključuje pauzu: danas do 15h, pre sastanka.</li>
            <li data-sr="tajnost koja isključuje konsultaciju: nemoj reći CFO-u, poverljivo." data-en="secrecy that excludes consultation: &ldquo;don't tell CFO&rdquo;, &ldquo;confidential&rdquo;.">tajnost koja isključuje konsultaciju: nemoj reći CFO-u, poverljivo.</li>
            <li data-sr="eksplicitna blokada telefonske provere: na putu sam, ne primam pozive." data-en="explicit block on phone verification: &ldquo;I'm traveling, not taking calls&rdquo;.">eksplicitna blokada telefonske provere: na putu sam, ne primam pozive.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 3) HRONOLOŠKI TOK -->
    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)." data-en="Timeline (phases + branching).">
        Hronološki tok (faze + grananja)
      </h2>

      <p class="muted"
        data-sr="Faze su prikazane kao operativni tok: šta meta vidi, šta se traži, gde se pali grananje u specifičnije varijante."
        data-en="Phases are shown as an operational flow: what the target sees, what is demanded, and where branching into specific variants happens."
      >Faze su prikazane kao operativni tok: šta meta vidi, šta se traži, gde se pali grananje u specifičnije varijante.</p>

      <!-- FAZA 1 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Izviđanje: OSINT o firmi" data-en="Phase 1 — Reconnaissance: company OSINT">
          Faza 1 — Izviđanje: OSINT o firmi
        </h3>
        <p
          data-sr="Napadač prikuplja informacije pre napada. LinkedIn pokazuje ko je finansijski direktor i ko odobrava uplate. Web sajt otkriva email formate i ime direktora. Poslovni partneri i dobavljači su javno navedeni. Praćenje LinkedIn statusa direktora otkriva kada je na putu."
          data-en="The attacker researches the company before striking. LinkedIn reveals who the finance director is and who approves payments. The website exposes email formats and the CEO's name. Business partners and suppliers are publicly listed. Monitoring the CEO's LinkedIn reveals when they are traveling."
        >Napadač prikuplja informacije pre napada. LinkedIn pokazuje ko je finansijski direktor i ko odobrava uplate. Web sajt otkriva email formate i ime direktora. Poslovni partneri i dobavljači su javno navedeni. Praćenje LinkedIn statusa direktora otkriva kada je na putu.</p>
        <ul class="bullets">
          <li data-sr="signal: firma objavljuje poslovne partnere i dobavljače javno." data-en="signal: company publicly lists business partners and suppliers.">signal: firma objavljuje poslovne partnere i dobavljače javno.</li>
          <li data-sr="signal: direktor objavljuje putovanje na LinkedIn-u." data-en="signal: CEO announces travel on LinkedIn.">signal: direktor objavljuje putovanje na LinkedIn-u.</li>
          <li data-sr="signal: email format je predvidiv (ime.prezime@firma.com)." data-en="signal: email format is predictable (firstname.lastname@company.com).">signal: email format je predvidiv (ime.prezime@firma.com).</li>
        </ul>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> napadač ima ime, email format, ime dobavljača i informaciju da je ključna osoba nedostupna."
          data-en="<strong>Phase threshold:</strong> attacker has name, email format, supplier name, and confirmation that the key person is unavailable."
        ><strong>Prag faze:</strong> napadač ima ime, email format, ime dobavljača i informaciju da je ključna osoba nedostupna.</div>
      </article>

      <!-- FAZA 2 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Priprema: lažni identitet" data-en="Phase 2 — Setup: fake identity">
          Faza 2 — Priprema: lažni identitet
        </h3>
        <p
          data-sr="Napadač registruje lookalike domen (companyname-invoice.com umesto companyname.com) ili konfiguriše display name spoofing koji prikazuje pravo ime direktora iz lažne adrese. Naprednije operacije kompromituju pravi email nalog kroz fišing pre BEC napada — to daje pristup pravoj istoriji prepiske."
          data-en="The attacker registers a lookalike domain (companyname-invoice.com instead of companyname.com) or configures display name spoofing that shows the real CEO's name from a fake address. More advanced operations compromise the real email account through phishing before the BEC attack — this provides access to real correspondence history."
        >Napadač registruje lookalike domen (companyname-invoice.com umesto companyname.com) ili konfiguriše display name spoofing koji prikazuje pravo ime direktora iz lažne adrese. Naprednije operacije kompromituju pravi email nalog kroz fišing pre BEC napada — to daje pristup pravoj istoriji prepiske.</p>
        <ul class="bullets">
          <li data-sr="signal: domen vizualno identičan ali sadrži crtu, broj ili drugu TLD." data-en="signal: domain looks identical but contains a dash, number, or different TLD.">signal: domen vizualno identičan ali sadrži crtu, broj ili drugu TLD.</li>
          <li data-sr="signal: display name tačan, ali email adresa ne odgovara." data-en="signal: display name correct, but email address does not match.">signal: display name tačan, ali email adresa ne odgovara.</li>
        </ul>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
            <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> lažni identitet je spreman i izgleda legitimno u inboxu."
          data-en="<strong>Phase threshold:</strong> fake identity is ready and looks legitimate in the inbox."
        ><strong>Prag faze:</strong> lažni identitet je spreman i izgleda legitimno u inboxu.</div>
      </article>

      <!-- FAZA 3 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Imejl sa zahtevom: hitnost + tajnost" data-en="Phase 3 — The request email: urgency + secrecy">
          Faza 3 — Imejl sa zahtevom: hitnost + tajnost
        </h3>
        <p
          data-sr="Imejl stiže u pravom trenutku: kada je direktor na putu, pred kraj radnog dana, na kraju fiskalnog kvartala. Scenario je uvek hitan i poverljiv. Zahtev je konkretan: transfer na novi račun, promena IBAN-a dobavljača, uplata za akviziciju. Tajnost i blokada telefonske provere su eksplicitni deo poruke."
          data-en="The email arrives at the right moment: when the CEO is traveling, near end of day, at the close of a fiscal quarter. The scenario is always urgent and confidential. The request is specific: transfer to a new account, supplier IBAN change, payment for an &ldquo;acquisition&rdquo;. Secrecy and blocking phone verification are explicit parts of the message."
        >Imejl stiže u pravom trenutku: kada je direktor na putu, pred kraj radnog dana, na kraju fiskalnog kvartala. Scenario je uvek hitan i poverljiv. Zahtev je konkretan: transfer na novi račun, promena IBAN-a dobavljača, uplata za akviziciju. Tajnost i blokada telefonske provere su eksplicitni deo poruke.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Tipični zahtevi" data-en="Typical requests">Tipični zahtevi</div>
            <ul class="bullets">
              <li data-sr="hitan transfer na novi račun za akviziciju." data-en="urgent transfer to a new account for an &ldquo;acquisition&rdquo;.">hitan transfer na novi račun za akviziciju.</li>
              <li data-sr="promena IBAN-a dobavljača za sledeću redovnu uplatu." data-en="supplier IBAN change for next regular payment.">promena IBAN-a dobavljača za sledeću redovnu uplatu.</li>
              <li data-sr="uplata zaostale obaveze pre regulatornog roka." data-en="payment of an &ldquo;outstanding liability&rdquo; before regulatory deadline.">uplata zaostale obaveze pre regulatornog roka.</li>
            </ul>
          </div>
          <div class="phase">
            <div class="label" data-sr="Taktike zaobilaženja provere" data-en="Verification bypass tactics">Taktike zaobilaženja provere</div>
            <ul class="bullets">
              <li data-sr="poverljivo — ne kontaktirati CFO niti pravnika." data-en="&ldquo;confidential — do not contact CFO or lawyer&rdquo;.">poverljivo — ne kontaktirati CFO niti pravnika.</li>
              <li data-sr="hitno — rok za sat vremena." data-en="&ldquo;urgent — deadline in one hour&rdquo;.">hitno — rok za sat vremena.</li>
              <li data-sr="na putu sam, ne primam pozive." data-en="&ldquo;I'm traveling, not taking calls&rdquo;.">na putu sam, ne primam pozive.</li>
            </ul>
          </div>
        </div>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="ceo-fraud.html" data-sr="CEO prevara" data-en="CEO fraud">CEO prevara</a></li>
            <li><a href="vendor-email-compromise.html" data-sr="Kompromitovanje imejla dobavljača" data-en="Vendor email compromise">Kompromitovanje imejla dobavljača</a></li>
            <li><a href="invoice-fraud.html" data-sr="Prevara sa fakturama" data-en="Invoice fraud">Prevara sa fakturama</a></li>
            <li><a href="mandate-fraud.html" data-sr="Prevara sa nalozima za plaćanje" data-en="Mandate fraud">Prevara sa nalozima za plaćanje</a></li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> meta razmatra zahtev kao legitiman i kreće ka izvršavanju bez nezavisne provere."
          data-en="<strong>Phase threshold:</strong> target considers the request legitimate and moves toward execution without independent verification."
        ><strong>Prag faze:</strong> meta razmatra zahtev kao legitiman i kreće ka izvršavanju bez nezavisne provere.</div>
      </article>

      <!-- FAZA 4 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Prag: uplata izvršena ili IBAN promenjen" data-en="Phase 4 — Threshold: payment made or IBAN updated">
          Faza 4 — Prag: uplata izvršena ili IBAN promenjen
        </h3>
        <p
          data-sr="Zaposleni izvrši transfer ili unese novu bankovnu instrukciju u sistem. Od ovog momenta novac je uglavnom izgubljen — napadači odmah prebacuju sredstva dalje kroz više naloga. Prosečno vreme otkrivanja je 2–5 dana, dovoljno da trag iščezne."
          data-en="The employee authorizes the transfer or enters the new banking instruction. From this point, the money is usually gone — attackers immediately more funds through multiple accounts. Average discovery time is 2–5 days, enough for the tražil to go cold."
        >Zaposleni izvrši transfer ili unese novu bankovnu instrukciju u sistem. Od ovog momenta novac je uglavnom izgubljen — napadači odmah prebacuju sredstva dalje kroz više naloga. Prosečno vreme otkrivanja je 2–5 dana, dovoljno da trag iščezne.</p>
        <ul class="bullets">
          <li data-sr="signal: uplata odlazi van uobičajenih kanala ili na novi IBAN." data-en="signal: payment goes outside usual channels or to a new IBAN.">signal: uplata odlazi van uobičajenih kanala ili na novi IBAN.</li>
          <li data-sr="signal: zaposleni dobija potvrdu od napadača i zatvara komunikaciju." data-en="signal: employee receives confirmation from attacker and closes communication.">signal: zaposleni dobija potvrdu od napadača i zatvara komunikaciju.</li>
        </ul>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> uplata izvršena ili IBAN u sistemu promenjen — napadač dobija novac pri sledećoj redovnoj uplati."
          data-en="<strong>Phase threshold:</strong> payment made or IBAN changed in the system — attacker receives funds at the next regular payment."
        ><strong>Prag faze:</strong> uplata izvršena ili IBAN u sistemu promenjen — napadač dobija novac pri sledećoj redovnoj uplati.</div>
      </article>

      <!-- FAZA 5 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Eskalacija: pritisak za potvrdu ili nova uplata" data-en="Phase 5 — Escalation: confirmation pressure or new payment">
          Faza 5 — Eskalacija: pritisak za potvrdu ili nova uplata
        </h3>
        <p
          data-sr="Ako meta okleava ili traži verifikaciju, napadač eskalira pritisak: jači autoritet, tvrđi rok, nova pretnja posledicama. U nekim napadima napadač ostaje u kompromitovanom nalogu i presreće odgovore — meta misli da komunicira sa pravom osobom i dobija potvrde iz pravog naloga."
          data-en="If the target hesitates or asks for verification, the attacker escalates pressure: stronger authority, harder deadline, new threat of consequences. In some attacks the attacker stays in the compromised account and intercepts replies — the target thinks they are communicating with the real person and receives confirmations from the real account."
        >Ako meta okleava ili traži verifikaciju, napadač eskalira pritisak: jači autoritet, tvrđi rok, nova pretnja posledicama. U nekim napadima napadač ostaje u kompromitovanom nalogu i presreće odgovore — meta misli da komunicira sa pravom osobom i dobija potvrde iz pravog naloga.</p>
        <ul class="bullets">
          <li data-sr="signal: priča se komplikuje ako meta pokušava da proverava." data-en="signal: story becomes more elaborate if target tries to verify.">signal: priča se komplikuje ako meta pokušava da proverava.</li>
          <li data-sr="signal: pojavljuje se treća strana (pravnik, konsultant) koja potvrđuje zahtev." data-en="signal: a &ldquo;third party&rdquo; (lawyer, consultant) appears to confirm the request.">signal: pojavljuje se treća strana (pravnik, konsultant) koja potvrđuje zahtev.</li>
        </ul>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> meta prihvata eskaliranu potvrdu kao validan dokaz i izvršava zahtev."
          data-en="<strong>Phase threshold:</strong> target accepts the escalated confirmation as valid proof and executes the request."
        ><strong>Prag faze:</strong> meta prihvata eskaliranu potvrdu kao validan dokaz i izvršava zahtev.</div>
      </article>

      <!-- FAZA 6 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Otkrivanje" data-en="Phase 6 — Discovery">
          Faza 6 — Otkrivanje
        </h3>
        <p
          data-sr="Prevara se otkriva kada pravi dobavljač javi da nije primio uplatu, kada se pravi direktor vrati i demantuje sve, ili kada banka registruje sumnjivu transakciju. U slučaju kompromitovanog trajnog naloga, otkrivanje može doći tek posle više meseci i nagomilanih dugova."
          data-en="The fraud is discovered when the real supplier reports non-payment, when the real CEO returns and denies everything, or when the bank flags a suspicious transaction. With a compromised standing order, discovery may come only after several months and accumulated unpaid debts."
        >Prevara se otkriva kada pravi dobavljač javi da nije primio uplatu, kada se pravi direktor vrati i demantuje sve, ili kada banka registruje sumnjivu transakciju. U slučaju kompromitovanog trajnog naloga, otkrivanje može doći tek posle više meseci i nagomilanih dugova.</p>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> stakeholder van lanca prevare (pravi dobavljač, pravi direktor, banka) preseče tok."
          data-en="<strong>Phase threshold:</strong> a stakeholder outside the fraud chain (real supplier, real CEO, bank) breaks the flow."
        ><strong>Prag faze:</strong> stakeholder van lanca prevare (pravi dobavljač, pravi direktor, banka) preseče tok.</div>
      </article>

      <!-- FAZA 7 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 7 — Recovery talaš" data-en="Phase 7 — Recovery wave">
          Faza 7 — Recovery talaš
        </h3>
        <p
          data-sr="Posle otkrivenog incidenta stiže novi kontakt sa ponudom povraćaja izgubljenih sredstava: agent, forenzička firma, pravni konsultant za međunarodni transfer. Uslov je uplata unapred."
          data-en="After the discovered incident, a new contact arrives offering to &ldquo;recover&rdquo; the lost funds: &ldquo;agent&rdquo;, &ldquo;forensic firm&rdquo;, &ldquo;international transfer legal consultant&rdquo;. The condition is an upfront payment."
        >Posle otkrivenog incidenta stiže novi kontakt sa ponudom povraćaja izgubljenih sredstava: agent, forenzička firma, pravni konsultant za međunarodni transfer. Uslov je uplata unapred.</p>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="recovery-scam.html" data-sr="Prevara povraćaja novca" data-en="Recovery scam">Prevara povraćaja novca</a></li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Filter:</strong> povraćaj + uplata unapred = novi napad. Tretirati kao drugi nezavisni incident."
          data-en="<strong>Filter:</strong> recovery + upfront fee = new attack. Treat as a second independent incident."
        ><strong>Filter:</strong> povraćaj + uplata unapred = novi napad. Tretirati kao drugi nezavisni incident.</div>
      </article>
    </section>

    <!-- 4) CRVENE ZASTAVICE -->
    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="imejl traži uplatu ili promenu IBAN-a sa elementom hitnosti i tajnosti." data-en="email requests payment or IBAN change with urgency and secrecy.">imejl traži uplatu ili promenu IBAN-a sa elementom hitnosti i tajnosti.</li>
        <li data-sr="domen imejla je vizualno identičan ali sadrži crtu, broj ili drugu TLD." data-en="email domain looks identical but contains a dash, number, or different TLD.">domen imejla je vizualno identičan ali sadrži crtu, broj ili drugu TLD.</li>
        <li data-sr="pošiljalac insistira da se ne kontaktira niko drugi (CFO, pravnik, IT)." data-en="sender insists no one else be contacted (CFO, lawyer, IT).">pošiljalac insistira da se ne kontaktira niko drugi (CFO, pravnik, IT).</li>
        <li data-sr="imejl stiže dok je direktor ili ključna osoba navodno nedostupna." data-en="email arrives while CEO or key person is allegedly unavailable.">imejl stiže dok je direktor ili ključna osoba navodno nedostupna.</li>
        <li data-sr="novi IBAN stiže samo imejlom bez prethodne najave ili dokumentacije." data-en="new IBAN arrives by email only without prior notice or documentation.">novi IBAN stiže samo imejlom bez prethodne najave ili dokumentacije.</li>
        <li data-sr="zahtev izlazi van normalnih procedura odobrenja ili premašuje limit jednog potpisnika." data-en="request falls outside normal approval procedures or exceeds single-signatory limit.">zahtev izlazi van normalnih procedura odobrenja ili premašuje limit jednog potpisnika.</li>
        <li data-sr="ton ili stil imejla odstupa od uobičajenog za tu osobu." data-en="email tone or style deviates from what is normal for that person.">ton ili stil imejla odstupa od uobičajenog za tu osobu.</li>
        <li data-sr="uplata ide na račun koji nije u sistemu kao poznati nalog firme ili dobavljača." data-en="payment goes to an account not in the system as a known company or supplier account.">uplata ide na račun koji nije u sistemu kao poznati nalog firme ili dobavljača.</li>
      </ul>
    </section>

    <!-- 5) PROVERE -->
    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera pre uplate" data-en="Checks: 8 quick checks before payment">Provere: 8 brzih provera pre uplate</h2>

      <p
        data-sr="Cilj je nezavisna verifikacija — kroz kanale koji ne dolaze od pošiljaoca imejla. Broj u imejlu, link u imejlu i prilog iz imejlažne smeju biti jedini dokaz."
        data-en="The goal is independent verification — through channels that do not come from the email sender. The number in the email, the link in the email, and the attachment from the email must not be the only evidence."
      >Cilj je nezavisna verifikacija — kroz kanale koji ne dolaze od pošiljaoca imejla. Broj u imejlu, link u imejlu i prilog iz imejlažne smeju biti jedini dokaz.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Provere identiteta pošiljaoca" data-en="Sender identity checks">Provere identiteta pošiljaoca</div>
          <ul class="bullets">
            <li data-sr="proveri pun email domen karakter po karakter — ne samo display name." data-en="check the full email domain character by character — not just display name.">proveri pun email domen karakter po karakter — ne samo display name.</li>
            <li data-sr="pozovi direktora ili dobavljača na broj iz internog imenika — ne iz imejla." data-en="call the director or supplier on the number from the internal directory — not from the email.">pozovi direktora ili dobavljača na broj iz internog imenika — ne iz imejla.</li>
            <li data-sr="proveri email zaglavlja (From header) u raw view imejl klijenta." data-en="check email headers (From header) in the email client's raw view.">proveri email zaglavlja (From header) u raw view imejl klijenta.</li>
            <li data-sr="kod promene IBAN-a: proveri novi IBAN kroz BIC lookup i uporedi sa ugovorom." data-en="for IBAN changes: check new IBAN through BIC lookup and compare with contract.">kod promene IBAN-a: proveri novi IBAN kroz BIC lookup i uporedi sa ugovorom.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Kontekstualne provere" data-en="Contextual checks">Kontekstualne provere</div>
          <ul class="bullets">
            <li data-sr="da li je ovaj tip zahteva uobičajen za ovu osobu u ovom kontekstu?" data-en="is this type of request normal for this person in this context?">da li je ovaj tip zahteva uobičajen za ovu osobu u ovom kontekstu?</li>
            <li data-sr="da li bi standardna procedura odobrenja ovaj zahtev poslala drugačijim kanalom?" data-en="would standard approval procedure route this request differently?">da li bi standardna procedura odobrenja ovaj zahtev poslala drugačijim kanalom?</li>
            <li data-sr="da li postoji prethodna pisana komunikacija o ovoj transakciji van ovog imejla?" data-en="is there prior written communication about this transaction outside this email?">da li postoji prethodna pisana komunikacija o ovoj transakciji van ovog imejla?</li>
            <li data-sr="da li nova bankovna instrukcija dolazi sa dokumentacijom koja je nezavisno proverljiva?" data-en="does the new banking instruction come with independently verifiable documentation?">da li nova bankovna instrukcija dolazi sa dokumentacijom koja je nezavisno proverljiva?</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 6) CHECKLISTA -->
    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja pre svake uplate ili promene podataka" data-en="Checklist: 12 questions before any payment or data change">Checklista: 12 pitanja pre svake uplate ili promene podataka</h2>

      <p class="muted"
        data-sr="Brzo čitanje. Više loših odgovora znači aktivan BEC obrazac."
        data-en="Quick read. Multiple bad answers indicate an active BEC pattern."
      >Brzo čitanje. Više loših odgovora znači aktivan BEC obrazac.</p>

      <ul class="bullets">
        <li data-sr="Da li je zahtev stigao samo imejlom bez prethodne usmene komunikacije?" data-en="Did the request arrive by email only, without prior verbal communication?">Da li je zahtev stigao samo imejlom bez prethodne usmene komunikacije?</li>
        <li data-sr="Da li imejl adresa pošiljaoca odgovara domenu koji inače koristimo u komunikaciji?" data-en="Does the sender's email domain match the domain we normally use in communication?">Da li imejl adresa pošiljaoca odgovara domenu koji inače koristimo u komunikaciji?</li>
        <li data-sr="Da li je zahtev praćen elementom hitnosti koji ne dozvoljava standardnu proveru?" data-en="Is the request accompanied by urgency that does not allow standard verification?">Da li je zahtev praćen elementom hitnosti koji ne dozvoljava standardnu proveru?</li>
        <li data-sr="Da li postoji zahtev za tajnošću ili zabrana konsultacije sa kolegama?" data-en="Is there a secrecy demand or prohibition on consulting colleagues?">Da li postoji zahtev za tajnošću ili zabrana konsultacije sa kolegama?</li>
        <li data-sr="Da li je pošiljalac eksplicitno naveo da nije dostupan telefonom?" data-en="Did the sender explicitly state they are unavailable by phone?">Da li je pošiljalac eksplicitno naveo da nije dostupan telefonom?</li>
        <li data-sr="Da li se novi IBAN razlikuje od IBAN-a koji smo koristili za istog primaoca ranije?" data-en="Does the new IBAN differ from the IBAN we used for the same recipient before?">Da li se novi IBAN razlikuje od IBAN-a koji smo koristili za istog primaoca ranije?</li>
        <li data-sr="Da li zahtev zaobilazi standardnu proceduru odobrenja ili premašuje limit jednog potpisnika?" data-en="Does the request bypass standard approval procedures or exceed single-signatory limits?">Da li zahtev zaobilazi standardnu proceduru odobrenja ili premašuje limit jednog potpisnika?</li>
        <li data-sr="Da li je kontakt broj za potvrdu naveden u istom imejlu koji traži promenu?" data-en="Is the verification contact number provided in the same email that requests the change?">Da li je kontakt broj za potvrdu naveden u istom imejlu koji traži promenu?</li>
        <li data-sr="Da li prilog (PDF faktura, nalog) dolazi bez prethodno najavljivane dokumentacije?" data-en="Does the attachment (PDF invoice, order) arrive without previously announced documentation?">Da li prilog (PDF faktura, nalog) dolazi bez prethodno najavljivane dokumentacije?</li>
        <li data-sr="Da li je ton ili formulacija imejla atipična za tu osobu ili firmu?" data-en="Is the tone or phrasing of the email atypical for that person or company?">Da li je ton ili formulacija imejla atipična za tu osobu ili firmu?</li>
        <li data-sr="Da li imejl stiže u atipično vreme: kasno uveče, u petak, na praznike?" data-en="Does the email arrive at an atypical time: late evening, Friday, public holidays?">Da li imejl stiže u atipično vreme: kasno uveče, u petak, na praznike?</li>
        <li data-sr="Da li primalac uplate nije u sistemu kao poznati poslovni partner ili dobavljač?" data-en="Is the payment recipient not in the system as a known business partner or supplier?">Da li primalac uplate nije u sistemu kao poznati poslovni partner ili dobavljač?</li>
      </ul>
    </section>

    <!-- 7) AKO SUMNJA KRENE -->
    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="zaustavi sve radnje vezane za zahtev — ne odgovaraj na imejl i ne kontaktuj broj iz imejla." data-en="stop all actions related to the request — do not reply to the email and do not call the number from the email.">zaustavi sve radnje vezane za zahtev — ne odgovaraj na imejl i ne kontaktuj broj iz imejla.</li>
        <li data-sr="pozovi direktora ili dobavljača direktno na broj iz internog sistema." data-en="call the director or supplier directly on the number from the internal system.">pozovi direktora ili dobavljača direktno na broj iz internog sistema.</li>
        <li data-sr="ako je uplata već inicirana: odmah kontaktuj banku i zatraži zaustavljanje transakcije." data-en="if payment was already initiated: contact your bank immediately and request transaction stop.">ako je uplata već inicirana: odmah kontaktuj banku i zatraži zaustavljanje transakcije.</li>
        <li data-sr="sačuvaj sve dokaze: imejlove, zaglavlja imejlova, podatke o transakciji." data-en="preserve all evidence: emails, email headers, transaction details.">sačuvaj sve dokaze: imejlove, zaglavlja imejlova, podatke o transakciji.</li>
        <li data-sr="obavesti IT odeljenje i senior menadžment." data-en="notify IT department and senior management.">obavesti IT odeljenje i senior menadžment.</li>
        <li data-sr="prijavi policiji i finansijskim regulatorima." data-en="report to police and financial regulators.">prijavi policiji i finansijskim regulatorima.</li>
      </ol>

      <div class="callout"
        data-sr="<strong>Zašto ovaj redosled radi:</strong> zaustavljanje transakcije u prvih 24–72 sata daje šansu za recall. Čuvanje dokaza pomaže istraži. Nezavisna provera preseče lažni autoritet."
        data-en="<strong>Why this order works:</strong> stopping the transaction within 24–72 hours gives a chance for recall. Preserving evidence supports investigation. Independent verification breaks fake authority."
      ><strong>Zašto ovaj redosled radi:</strong> zaustavljanje transakcije u prvih 24–72 sata daje šansu za recall. Čuvanje dokaza pomaže istraži. Nezavisna provera preseče lažni autoritet.</div>
    </section>

    <!-- 8) AKO POMAŽEŠ NEKOME -->
    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>

      <p
        data-sr="Kada je zaposleni već izvršio uplatu, direktna konfrontacija često izazove odbrambenu reakciju. Efikasnije je ići kroz konkretnu proveru: domen pošiljaoca, pravi telefon direktora, historija IBAN-a u sistemu. Fokus na proveri prekida tok."
        data-en="When an employee has already made a payment, direct confrontation often triggers a defensive reaction. More effective is going through concrete verification: sender's domain, real CEO's phone, IBAN history in the system. Verification focus breaks the flow."
      >Kada je zaposleni već izvršio uplatu, direktna konfrontacija često izazove odbrambenu reakciju. Efikasnije je ići kroz konkretnu proveru: domen pošiljaoca, pravi telefon direktora, historija IBAN-a u sistemu. Fokus na proveri prekida tok.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Možemo li zajedno da proverimo pun domen imejl adrese?" data-en="Can we check the full email domain together?">Možemo li zajedno da proverimo pun domen imejl adrese?</li>
            <li data-sr="Da li smo direktora pozvali na broj koji imamo u sistemu — ne broj iz imejla?" data-en="Did we call the director on the number in our system — not the number from the email?">Da li smo direktora pozvali na broj koji imamo u sistemu — ne broj iz imejla?</li>
            <li data-sr="Da li je ovaj IBAN isti kao IBAN koji smo koristili za ovog primaoca pre mesec dana?" data-en="Is this IBAN the same as the one we used for this recipient a month ago?">Da li je ovaj IBAN isti kao IBAN koji smo koristili za ovog primaoca pre mesec dana?</li>
            <li data-sr="Da li postoji procedura odobrenja koja ovaj zahtev uobičajeno prati?" data-en="Is there an approval procedure that normally accompanies this type of request?">Da li postoji procedura odobrenja koja ovaj zahtev uobičajeno prati?</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Hajde da zajedno proverimo domen pre nego što odlučimo." data-en="Let's verify the domain together before we decide.">Hajde da zajedno proverimo domen pre nego što odlučimo.</li>
            <li data-sr="Pauziramo 10 minuta i zovemo direktora na interni broj." data-en="We pause 10 minutes and call the director on the internal number.">Pauziramo 10 minuta i zovemo direktora na interni broj.</li>
            <li data-sr="Ako je zahtev legitiman, potvrda telefonom neće biti problem." data-en="If the request is legitimate, phone confirmation will not be a problem.">Ako je zahtev legitiman, potvrda telefonom neće biti problem.</li>
            <li data-sr="Sačuvajmo sve poruke pre bilo kakve dalje radnje." data-en="Let's save all messages before any further action.">Sačuvajmo sve poruke pre bilo kakve dalje radnje.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 9) POVEZANE PREVARE -->
    
  `
};
