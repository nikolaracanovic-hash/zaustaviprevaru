window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["bank-transfer-diversion-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi preusmeravanje bankovnog transfera" data-en="Introduction: how bank transfer diversion scam works">Uvod: kako radi preusmeravanje bankovnog transfera</h2>
      <p data-sr="Preusmeravanje bankovnog transfera nastaje kada napadač presreće ili lažno zamenjuje legitimne instrukcije za plaćanje — broj bankovnog naloga primaoca. Žrtva misli da plaća svom stvarnom dobavljaču, stanodavcu, advokatu ili klijentu, ali novac odlazi na nalog prevaranta. Originalne instrukcije su zamenjene u poslednji čas, tipično kroz kompromitovani imejl, lažnu poruku ili lažni poziv." data-en="Bank transfer diversion occurs when an attacker intercepts or falsely replaces legitimate payment instructions — the recipient's bank account number. The victim believes they are paying their real supplier, landlord, lawyer, or client, but money goes to the fraudster's account. Original instructions are replaced at the last moment, typically through a compromised email, fake message, or fake call.">Napadač zamenjuje broj bankovnog naloga primaoca u poslednji čas. Žrtva plaća, verujući da šalje stvarnom primaocu.</p>
      <p data-sr="Posebno su ugroženi: kupovine nekretnina (promena naloga advokata), plaćanje dobavljača (BEC), isplata zakupnine (lažni stanodavac) i freelance plaćanja. Iznosi su tipično veliki, a prozor za povrat je kratak." data-en="Particularly at risk are: property purchases (lawyer account change), supplier payments (BEC), rent payments (fake landlord), and freelance payments. Amounts are typically large and the recovery window is short.">Posebno su ugroženi kupci nekretnina, plaćanja dobavljača, zakupnine i freelance plaćanja. Iznosi su veliki, prozor za povrat kratak.</p>
      <div class="callout" data-sr="<strong>Model:</strong> legitimna instrukcija za plaćanje → intercept ili lažna zamena broja naloga → transfer izvršen → novac na nalog prevaranta → gubitak." data-en="<strong>Model:</strong> legitimate payment instruction → intercept or fake account number replacement → transfer executed → money in fraudster's account → loss."><strong>Model:</strong> legitimna instrukcija za plaćanje → intercept ili lažna zamena broja naloga → transfer izvršen → novac na nalog prevaranta → gubitak.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> svaka izmena bankovnog naloga primaoca u poslednji čas — e-mailom, SMS-om ili telefonom — mora biti potvrđena direktnim pozivom primaocu na poznat broj." data-en="<strong>Threshold:</strong> any last-minute change to a recipient's bank account — by email, SMS, or phone — must be confirmed by a direct call to the recipient at a known number."><strong>Prag:</strong> svaka izmena bankovnog naloga primaoca u poslednji čas — e-mailom, SMS-om ili telefonom — mora biti potvrđena direktnim pozivom primaocu na poznat broj.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika preusmeravanja transfera" data-en="How it works: transfer diversion mechanics">Kako generalno radi: mehanika preusmeravanja transfera</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Kako napadač saznaje za legitimnu transakciju" data-en="How the attacker learns about the legitimate transaction">Kako napadač saznaje za legitimnu transakciju</div>
          <ul class="bullets">
            <li data-sr="kompromitovani imejl jedne ili obe strane u transakciji — napadač čita svu komunikaciju." data-en="compromised email of one or both parties in the transaction — the attacker reads all communication.">kompromitovani imejl jedne ili obe strane u transakciji — napadač čita svu komunikaciju.</li>
            <li data-sr="phishing koji je otkrio lozinku imejl naloga jedne strane." data-en="phishing that revealed the email account password of one party.">phishing koji je otkrio lozinku imejl naloga jedne strane.</li>
            <li data-sr="socijalni inženjering — lažni poziv advokatu, stanodavcu ili dobavljaču za 'provjeru detalja„." data-en="social engineering — fake call to a lawyer, landlord, or supplier for “detail verification'.">socijalni inženjering — lažni poziv advokatu, stanodavcu ili dobavljaču za 'provjeru detalja'.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Kako se uvodi promena naloga" data-en="How the account change is introduced">Kako se uvodi promena naloga</div>
          <ul class="bullets">
            <li data-sr="imejl koji izgleda kao od primaoca, ali je s kompromitovanog ili spoofovanog naloga, sa „novim bankovnim podacima." data-en="email that appears to come from the recipient, but from a compromised or spoofed account, with 'new banking details'.">imejl koji izgleda kao od primaoca, ali je s kompromitovanog ili spoofovanog naloga, sa 'novim bankovnim podacima'.</li>
            <li data-sr="poziv koji tvrdi da je primalac i daje „korigovane“ bankovne podatke radi „greške u prethodnom imejlu„." data-en="call claiming to be the recipient and providing “corrected“ bank details due to an 'error in the previous email'.">poziv koji tvrdi da je primalac i daje 'korigovane' bankovne podatke radi 'greške u prethodnom imejlu'.</li>
            <li data-sr="izmena dolazi kratko pre roka plaćanja — nema vremena za nezavisnu proveru." data-en="the change arrives shortly before the payment deadline — no time for independent verification.">izmena dolazi kratko pre roka plaćanja — nema vremena za nezavisnu proveru.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)." data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Nadzor legitimne transakcije" data-en="Phase 1 — Surveillance of legitimate transaction">Faza 1 — Nadzor legitimne transakcije</h3>
        <p data-sr="Napadač prati imejl komunikaciju jedne ili obe strane — saznaj iznos, rok plaćanja, identitete strana i trenutne bankovne podatke primaoca. Strpljivo čeka na pravi trenutak za intervenciju." data-en="The attacker monitors email communication of one or both parties — learning the amount, payment deadline, party identities, and current banking details of the recipient. Patiently waits for the right moment to intervene.">Napadač čita imejlove i zna sve detalje legitimne transakcije. Čeka pravi trenutak — tik pred rok plaćanja.</p>
        <ul class="bullets">
          <li data-sr="signal: neočekivani imejl koji menja bankovne podatke primaoca kratko pred rok plaćanja." data-en="signal: unexpected email changing the recipient's banking details shortly before the payment deadline.">signal: neočekivani imejl koji menja bankovne podatke primaoca kratko pred rok plaćanja.</li>
          <li data-sr="signal: imejl od primaoca koji dolazi s malo drugačijeg domena — proverite slova." data-en="signal: email from the recipient coming from a slightly different domain — check the letters.">signal: imejl od primaoca koji dolazi s malo drugačijeg domena — proverite slova.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> napadač zna sve detalje transakcije i spreman je za zamenu bankovnih podataka." data-en="<strong>Threshold:</strong> the attacker knows all transaction details and is ready to replace banking data."><strong>Prag faze:</strong> napadač zna sve detalje transakcije i spreman je za zamenu bankovnih podataka.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Izmena bankovnih podataka i transfer" data-en="Phase 2 — Banking data change and transfer">Faza 2 — Izmena bankovnih podataka i transfer</h3>
        <p data-sr="Napadač šalje imejl s „novim bankovnim podacima“. Žrtva koja je u dugom procesu — kupovina nekretnine, plaćanje dobavljača — ne sumnja jer je kontekst legitiman. Transfer ide na nalog prevaranta." data-en="The attacker sends an email with 'new banking details'. The victim who is in a long process — property purchase, supplier payment — does not suspect because the context is legitimate. The transfer goes to the fraudster's account.">Lažni imejl s novim nalogom dolazi u ubedljivom kontekstu legitimne transakcije. Transfer ide napadaču.</p>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="business-email-compromise.html" data-sr="Kompromitovanje poslovnog imejla (BEC)" data-en="Business email compromise (BEC)">Kompromitovanje poslovnog imejla (BEC)</a></li>
            <li><a href="email-account-compromise.html" data-sr="Kompromitovanje imejl naloga" data-en="Email account compromise">Kompromitovanje imejl naloga</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> transfer je izvršen — odmah kontaktirajte banku jer svaki minut smanjuje šansu za blokadu." data-en="<strong>Threshold:</strong> the transfer is executed — immediately contact the bank as every minute reduces the chance of blocking."><strong>Prag faze:</strong> transfer je izvršen — odmah kontaktirajte banku jer svaki minut smanjuje šansu za blokadu.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="imejl koji menja bankovne podatke primaoca kratko pre roka plaćanja." data-en="email changing the recipient's bank details shortly before the payment deadline.">imejl koji menja bankovne podatke primaoca kratko pre roka plaćanja.</li>
        <li data-sr="imejl domen primaoca ima jednu slovnu razliku od prethodne komunikacije." data-en="the recipient's email domain has one letter difference from prior communication.">imejl domen primaoca ima jednu slovnu razliku od prethodne komunikacije.</li>
        <li data-sr="novi bankovni podaci su strani nalog ili nalog u drugoj banci od prethodne komunikacije." data-en="the new banking details are a foreign account or an account at a different bank from prior communication.">novi bankovni podaci su strani nalog ili nalog u drugoj banci od prethodne komunikacije.</li>
        <li data-sr="primalac koji se poziva na „tehničke probleme„ kao razlog promene naloga." data-en="recipient citing “technical problems“ as the reason for the account change.">primalac koji se poziva na 'tehničke probleme' kao razlog promene naloga.</li>
        <li data-sr="hitnost: 'transfer mora biti danas ili transakcija propada„ — onemogućava proveru." data-en="urgency: “transfer must be today or the transaction falls through' — prevents verification.">hitnost: 'transfer mora biti danas ili transakcija propada' — onemogućava proveru.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 10 pitanja pre svakog transfera po novim bankovnim podacima" data-en="Checklist: 10 questions before any transfer to new banking details">Checklista: 10 pitanja pre svakog transfera po novim bankovnim podacima</h2>
      <ul class="bullets">
        <li data-sr="Da li sam pozvao/la primaoca na POZNAT broj — ne na broj iz imejla koji je promenio podatke?" data-en="Did I call the recipient at a KNOWN number — not the number in the email that changed the details?">Da li sam pozvao/la primaoca na POZNAT broj — ne na broj iz imejla koji je promenio podatke?</li>
        <li data-sr="Da li imejl koji je promenio bankovne podatke dolazi s tačno istog domena kao prethodna komunikacija?" data-en="Does the email that changed banking details come from exactly the same domain as prior communication?">Da li imejl koji je promenio bankovne podatke dolazi s tačno istog domena kao prethodna komunikacija?</li>
        <li data-sr="Da li postoji razumno objašnjenje zašto se bankovi podaci menjaju tik pred rok plaćanja?" data-en="Is there a reasonable explanation for why banking details change right before the payment deadline?">Da li postoji razumno objašnjenje zašto se bankovi podaci menjaju tik pred rok plaćanja?</li>
        <li data-sr="Da li je primalac potvrdio promenu putem kanala koji je nezavisan od imejla?" data-en="Did the recipient confirm the change through a channel independent of email?">Da li je primalac potvrdio promenu putem kanala koji je nezavisan od imejla?</li>
        <li data-sr="Da li je novi nalog strani ili u banci drugačijoj od prethodnih instrukcija?" data-en="Is the new account foreign or at a different bank than prior instructions?">Da li je novi nalog strani ili u banci drugačijoj od prethodnih instrukcija?</li>
        <li data-sr="Da li mi je rečeno da odlaganjem transfera 'transakcija propada„ — što je pritisak koji sprečava proveru?" data-en="Was I told that delaying the transfer means “the deal falls through' — pressure that prevents verification?">Da li mi je rečeno da odlaganjem transfera 'transakcija propada' — što je pritisak koji sprečava proveru?</li>
        <li data-sr="Da li je moj imejl nalog siguran — mogu li napadač čitati moju komunikaciju?" data-en="Is my email account secure — could an attacker be reading my communication?">Da li je moj imejl nalog siguran — mogu li napadač čitati moju komunikaciju?</li>
        <li data-sr="Da li je imejl primaoca siguran — mogu li im napadač slati imejlove u njihovo ime?" data-en="Is the recipient's email secure — could an attacker be sending emails in their name?">Da li je imejl primaoca siguran — mogu li im napadač slati imejlove u njihovo ime?</li>
        <li data-sr="Da li postoji procedura dvostrane verifikacije promena bankovnih podataka u ovoj transakciji?" data-en="Is there a two-party verification procedure for banking detail changes in this transaction?">Da li postoji procedura dvostrane verifikacije promena bankovnih podataka u ovoj transakciji?</li>
        <li data-sr="Da li bi odlaganje transfera za 24h radi verifikacije uništilo legitimnu transakciju?" data-en="Would delaying the transfer by 24h for verification destroy a legitimate transaction?">Da li bi odlaganje transfera za 24h radi verifikacije uništilo legitimnu transakciju?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="ne izvrši transfer — pozovite primaoca na poznati broj i verbalno potvrdite bankovne podatke." data-en="do not execute the transfer — call the recipient at a known number and verbally confirm banking details.">ne izvrši transfer — pozovite primaoca na poznati broj i verbalno potvrdite bankovne podatke.</li>
        <li data-sr="ako je transfer izvršen, odmah kontaktirajte svoju banku — tražite hitnu blokadu transferisanog iznosa." data-en="if the transfer was made, immediately contact your bank — request an emergency block on the transferred amount.">ako je transfer izvršen, odmah kontaktirajte svoju banku — tražite hitnu blokadu transferisanog iznosa.</li>
        <li data-sr="proverite imejl nalog na neovlašćeni pristup — promenite lozinku i uključite 2FA." data-en="check email account for unauthorized access — change password and enable 2FA.">proverite imejl nalog na neovlašćeni pristup — promenite lozinku i uključite 2FA.</li>
        <li data-sr="prijavite incident policiji s opisom lažnog imejla, naloga i iznosa transfera." data-en="report the incident to police with description of the fake email, account, and transfer amount.">prijavite incident policiji s opisom lažnog imejla, naloga i iznosa transfera.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si pozvao/la primaoca na poznat broj da potvrdiš promenu bankovnih podataka?" data-en="Did you call the recipient at a known number to confirm the banking detail change?">Da li si pozvao/la primaoca na poznat broj da potvrdiš promenu bankovnih podataka?</li>
            <li data-sr="Da li imejl koji je doneo promenu dolazi s tačno istog domena kao prethodne poruke?" data-en="Does the email that brought the change come from exactly the same domain as prior messages?">Da li imejl koji je doneo promenu dolazi s tačno istog domena kao prethodne poruke?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Svaka promena bankovnih podataka mora biti potvrđena pozivom na prethodno poznati broj — bez izuzetka." data-en="Every banking detail change must be confirmed by a call to a previously known number — without exception.">Svaka promena bankovnih podataka mora biti potvrđena pozivom na prethodno poznati broj — bez izuzetka.</li>
            <li data-sr="Imejl koji menja bankovne podatke tik pred rok plaćanja je klasičan signal preusmeravanja transfera." data-en="An email changing bank details right before the payment deadline is a classic signal of transfer diversion.">Imejl koji menja bankovne podatke tik pred rok plaćanja je klasičan signal preusmeravanja transfera.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card sources" id="sources">
      <h2 data-sr="Povezane prevare" data-en="Related scams">Povezane prevare</h2>
      <ul class="bullets">
        <li><a href="payment-link-scam.html" data-sr="Prevara s linkom za plaćanje" data-en="Payment link scam">Prevara s linkom za plaćanje</a></li>
        <li><a href="instant-payment-scam.html" data-sr="Prevara s instant plaćanjem" data-en="Instant payment scam">Prevara s instant plaćanjem</a></li>
        <li><a href="email-account-compromise.html" data-sr="Kompromitovanje imejl naloga" data-en="Email account compromise">Kompromitovanje imejl naloga</a></li>
        <li><a href="business-email-compromise.html" data-sr="Kompromitovanje poslovnog imejla (BEC)" data-en="Business email compromise (BEC)">Kompromitovanje poslovnog imejla (BEC)</a></li>
        <li><a href="impersonation-scam.html" data-sr="Lažno predstavljanje" data-en="Impersonation scam">Lažno predstavljanje</a></li>
      </ul>
    </section>
  `
};
