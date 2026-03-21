window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["email-account-compromise"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi kompromitovanje imejl naloga" data-en="Introduction: how email account compromise works">Uvod: kako radi kompromitovanje imejl naloga</h2>
      <p data-sr="Napadač pristupa imejl nalogu žrtve i koristi ga za nadzor, resetovanje naloga ili lažno predstavljanje radi preusmeravanja plaćanja." data-en="Email account compromise (EAC) is an attack in which the attacker gains access to the victim's email account and uses it — for surveillance, resetting passwords for other services, or impersonating the victim to redirect payments. Unlike BEC which targets companies, EAC targets private individuals and is an entry point into a broader fraud system.">Napadač pristupa imejl nalogu žrtve i koristi ga za nadzor, resetovanje naloga ili lažno predstavljanje radi preusmeravanja plaćanja.</p>
      <p data-sr="Imejl nalog je ključ digitalnog identiteta — pristup imejlu daje pristup svemu vezanom za tu adresu." data-en="An email account is the key to digital identity: whoever has email access can initiate 'forgot password' for banking, e-commerce, crypto, and all other services. One compromised email is entry to everything else.">Imejl nalog je ključ digitalnog identiteta — pristup imejlu daje pristup svemu vezanom za tu adresu.</p>
      <div class="callout" data-sr="<strong>Model:</strong> phishing/lozinka → pristup imejlu → nadzor komunikacije → resetovanje naloga ili lažno predstavljanje → finansijski gubitak." data-en="<strong>Model:</strong> phishing/password → email access → communication surveillance → account reset or impersonation → financial loss."><strong>Model:</strong> phishing/lozinka → pristup imejlu → nadzor komunikacije → resetovanje naloga ili lažno predstavljanje → finansijski gubitak.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> pristup imejl nalogu daje napadaču kontrolu nad svim servisima koji koriste taj imejl za resetovanje lozinke." data-en="<strong>Threshold:</strong> access to an email account gives the attacker control over all services that use that email for password resets."><strong>Prag:</strong> pristup imejl nalogu daje napadaču kontrolu nad svim servisima koji koriste taj imejl za resetovanje lozinke.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika EAC napada" data-en="How it works: EAC attack mechanics">Kako generalno radi: mehanika EAC napada</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Kako napadač ulazi u imejl nalog" data-en="How the attacker enters the email account">Kako napadač ulazi u imejl nalog</div>
          <ul class="bullets">
            <li data-sr="phishing poruka koja vodi na lažnu stranicu imejl provajdera i prikuplja kredencijale." data-en="phishing message leading to a fake email provider page that collects credentials.">phishing poruka koja vodi na lažnu stranicu imejl provajdera i prikuplja kredencijale.</li>
            <li data-sr="credential stuffing: lozinka ukradena s drugog servisa se testira na imejlu." data-en="credential stuffing: password stolen from another service is tested on the email.">credential stuffing: lozinka ukradena s drugog servisa se testira na imejlu.</li>
            <li data-sr="malver ili keylogger instaliran na uređaju žrtve koji beleži kucanje lozinke." data-en="malware or keylogger installed on the victim's device recording password keystrokes.">malver ili keylogger instaliran na uređaju žrtve koji beleži kucanje lozinke.</li>
            <li data-sr="SIM swap za presretanje SMS 2FA koda koji štiti imejl nalog." data-en="SIM swap to intercept the SMS 2FA code protecting the email account.">SIM swap za presretanje SMS 2FA koda koji štiti imejl nalog.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Šta napadač radi s pristupom imejlu" data-en="What the attacker does with email access">Šta napadač radi s pristupom imejlu</div>
          <ul class="bullets">
            <li data-sr="prati finansijsku komunikaciju — bankovni izvodi, kupovine, investicije." data-en="monitors financial communication — bank statements, purchases, investments.">prati finansijsku komunikaciju — bankovni izvodi, kupovine, investicije.</li>
            <li data-sr="pokreće 'zaboravili ste lozinku' za banku, kripto, e-commerce i preuzima te naloge." data-en="initiates forgot password' for bank, crypto, e-commerce and takes over those accounts.">pokreće 'zaboravili ste lozinku' za banku, kripto, e-commerce i preuzima te naloge.</li>
            <li data-sr="šalje imejlove u ime žrtve — kontaktima, banci, servisu — radi preusmeravanja plaćanja." data-en="sends emails in the victim's name — to contacts, bank, service — to redirect payments.">šalje imejlove u ime žrtve — kontaktima, banci, servisu — radi preusmeravanja plaćanja.</li>
            <li data-sr="čita primljene OTP kodove koji stižu imejlom za autentifikaciju." data-en="reads received OTP codes that arrive by email for authentication.">čita primljene OTP kodove koji stižu imejlom za autentifikaciju.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)" data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Pristup imejl nalogu" data-en="Phase 1 — Email account access">Faza 1 — Pristup imejl nalogu</h3>
        <p data-sr="Napadač pristupa imejlu i podešava skriveni nadzor: filteri, prosljeđivanje, brisanje upozorenja." data-en="The attacker obtains the email password and accesses the account. They change settings to conceal access: deleting notifications, creating filters that archive bank messages, forwarding copies of messages to an external account.">Napadač pristupa imejlu i podešava skriveni nadzor: filteri, prosljeđivanje, brisanje upozorenja.</p>
        <ul class="bullets">
          <li data-sr="signal: imejlovi od banke ili servisa nestaju ili se arhiviraju automatski bez vaše akcije." data-en="signal: emails from the bank or service disappear or are automatically archived without your action.">signal: imejlovi od banke ili servisa nestaju ili se arhiviraju automatski bez vaše akcije.</li>
          <li data-sr="signal: obaveštenje o prijavi s nepoznate lokacije ili uređaja." data-en="signal: login notification from an unknown location or device.">signal: obaveštenje o prijavi s nepoznate lokacije ili uređaja.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> napadač ima stabilan pristup imejlu i spreman je za sledeće faze bez otkrivanja." data-en="<strong>Threshold:</strong> the attacker has stable email access and is ready for subsequent phases without detection."><strong>Prag faze:</strong> napadač ima stabilan pristup imejlu i spreman je za sledeće faze bez otkrivanja.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Izviđanje i identifikacija mete" data-en="Phase 2 — Reconnaissance and target mapping">Faza 2 — Izviđanje i identifikacija mete</h3>
        <p data-sr="Napadač čita imejlove i mapira finansijsku situaciju, kontakte i planirane transakcije." data-en="The attacker reads emails to map: which services are used, how much is in the bank account, who are the contacts, whether there are ongoing transactions, plans for purchases or money transfers.">Napadač čita imejlove i mapira finansijsku situaciju, kontakte i planirane transakcije.</p>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li>Resetovanje bankovne lozinke (Povezano: <a href="account-takeover.html" data-sr="Preuzimanje naloga</a>)." data-en="Account takeover">Preuzimanje naloga</a>).</li>
            <li>Lažno preusmeravanje plaćanja kontaktima (Povezano: <a href="bank-impersonation.html" data-sr="Lažna banka (bankovni prevarant)</a>)." data-en="Bank impersonation">Lažna banka (bankovni prevarant)</a>).</li>
            <li>CNP prevara koristeći prikupljene podatke kartice (Povezano: <a href="card-not-present-fraud.html" data-sr="Zloupotreba kartice bez fizičkog prisustva</a>)." data-en="Card-not-present fraud">Zloupotreba kartice bez fizičkog prisustva</a>).</li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> napadač identifikuje najvredniju metu i pokreće akciju — resetovanje bankovnog naloga ili preusmeravanje plaćanja." data-en="<strong>Threshold:</strong> the attacker identifies the most valuable target and initiates action — banking account reset or payment redirection."><strong>Prag faze:</strong> napadač identifikuje najvredniju metu i pokreće akciju — resetovanje bankovnog naloga ili preusmeravanje plaćanja.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Finansijsko iskorišćavanje" data-en="Phase 3 — Financial exploitation">Faza 3 — Finansijsko iskorišćavanje</h3>
        <p data-sr="Napadač resetuje lozinku bankovnog naloga ili lažno se predstavlja žrtvi kontaktima radi preusmeravanja plaćanja." data-en="The attacker initiates 'forgot password', receives the reset link by email, changes the password, and drains the account. Or contacts a third party (partner, client) from the victim's email account and redirects a payment to the attacker's account.">Napadač resetuje lozinku bankovnog naloga ili lažno se predstavlja žrtvi kontaktima radi preusmeravanja plaćanja.</p>
        <div class="callout" data-sr="<strong>Prag faze:</strong> finansijski gubitak je teško zaustaviti jer napadač kontroliše imejl koji služi za verifikaciju svih resetovnih akcija." data-en="<strong>Threshold:</strong> financial loss is hard to stop because the attacker controls the email used to verify all reset actions."><strong>Prag faze:</strong> finansijski gubitak je teško zaustaviti jer napadač kontroliše imejl koji služi za verifikaciju svih resetovnih akcija.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="prijava u imejl nalog s nepoznate lokacije ili uređaja — proverite u podešavanjima imejla." data-en="email account login from an unknown location or device — check in email settings.">prijava u imejl nalog s nepoznate lokacije ili uređaja — proverite u podešavanjima imejla.</li>
        <li data-sr="imejlovi od banke ili važnih servisa nestaju ili idu direktno u arhivu bez vaše akcije." data-en="emails from the bank or important services disappear or go directly to archive without your action.">imejlovi od banke ili važnih servisa nestaju ili idu direktno u arhivu bez vaše akcije.</li>
        <li data-sr="obaveštenja o resetovanju lozinke na servisima koje vi niste pokrenuli." data-en="password reset notifications on services you did not initiate.">obaveštenja o resetovanju lozinke na servisima koje vi niste pokrenuli.</li>
        <li data-sr="kontakti javljaju da su primili čudne imejlove od vas s molbom za plaćanje ili uputom za transfer." data-en="contacts report receiving unusual emails from you requesting payment or transfer instructions.">kontakti javljaju da su primili čudne imejlove od vas s molbom za plaćanje ili uputom za transfer.</li>
        <li data-sr="pronalazak nepoznatih filtera ili pravila u imejl podešavanjima koja prosljeđuju ili arhiviraju poruke." data-en="finding unknown filters or rules in email settings forwarding or archiving messages.">pronalazak nepoznatih filtera ili pravila u imejl podešavanjima koja prosljeđuju ili arhiviraju poruke.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 10 pitanja za imejl bezbednost i reakciju" data-en="Checklist: 10 questions for email security and response">Checklista: 10 pitanja za imejl bezbednost i reakciju</h2>
      <ul class="bullets">
        <li data-sr="Da li koristim jedinstvenu, jaku lozinku za imejl koja se ne koristi ni na jednom drugom servisu?" data-en="Am I using a unique, strong password for email that is not used on any other service?">Da li koristim jedinstvenu, jaku lozinku za imejl koja se ne koristi ni na jednom drugom servisu?</li>
        <li data-sr="Da li je 2FA uključen za imejl nalog — po mogućnosti autentifikator aplikacija, ne SMS?" data-en="Is 2FA enabled for the email account — preferably an authenticator app, not SMS?">Da li je 2FA uključen za imejl nalog — po mogućnosti autentifikator aplikacija, ne SMS?</li>
        <li data-sr="Da li sam proverio/la aktivne sesije i uređaje u imejl podešavanjima?" data-en="Did I check active sessions and devices in email settings?">Da li sam proverio/la aktivne sesije i uređaje u imejl podešavanjima?</li>
        <li data-sr="Da li postoje nepoznata pravila ili filteri u imejl podešavanjima?" data-en="Are there unknown rules or filters in email settings?">Da li postoje nepoznata pravila ili filteri u imejl podešavanjima?</li>
        <li data-sr="Da li se imejlovi od banke redovno primaju ili su počeli nestajati?" data-en="Are emails from the bank being received regularly or have they started disappearing?">Da li se imejlovi od banke redovno primaju ili su počeli nestajati?</li>
        <li data-sr="Da li sam kontaktovao/la poznanike koji su primili čudne imejlove od može adrese?" data-en="Did I contact acquaintances who received unusual emails from my address?">Da li sam kontaktovao/la poznanike koji su primili čudne imejlove od može adrese?</li>
        <li data-sr="Da li sam promenio/la imejl lozinku s uređaja koji nije kompromitovan?" data-en="Did I change the email password from a device that is not compromised?">Da li sam promenio/la imejl lozinku s uređaja koji nije kompromitovan?</li>
        <li data-sr="Da li sam proverio/la bankovni nalog i sve servise koji koriste taj imejl za 2FA?" data-en="Did I check the bank account and all services that use that email for 2FA?">Da li sam proverio/la bankovni nalog i sve servise koji koriste taj imejl za 2FA?</li>
        <li data-sr="Da li sam prijavio/la incident servisu koji pruža imejl i tražio/la reviziju aktivnosti?" data-en="Did I report the incident to the email service provider and request an activity review?">Da li sam prijavio/la incident servisu koji pruža imejl i tražio/la reviziju aktivnosti?</li>
        <li data-sr="Da li sam uklonio/la sve nepoznate filtera i promenio/la recovery imejl i broj telefona?" data-en="Did I remove all unknown filters and change the recovery email and phone number?">Da li sam uklonio/la sve nepoznate filtera i promenio/la recovery imejl i broj telefona?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="promenite imejl lozinku odmah s uređaja koji nije kompromitovan." data-en="change the email password immediately from a device that is not compromised.">promenite imejl lozinku odmah s uređaja koji nije kompromitovan.</li>
        <li data-sr="proverite aktivne sesije i odjavljujte nepoznate uređaje u imejl podešavanjima." data-en="check active sessions and sign out unknown devices in email settings.">proverite aktivne sesije i odjavljujte nepoznate uređaje u imejl podešavanjima.</li>
        <li data-sr="proverite filtera i pravila u imejlu — obrišite sve nepoznato što prosljeđuje ili arhivira poruke." data-en="check email filters and rules — delete anything unknown that forwards or archives messages.">proverite filtera i pravila u imejlu — obrišite sve nepoznato što prosljeđuje ili arhivira poruke.</li>
        <li data-sr="kontaktirajte banku i sve servise koji koriste taj imejl i prijavite kompromitovanje." data-en="contact the bank and all services using that email and report the compromise.">kontaktirajte banku i sve servise koji koriste taj imejl i prijavite kompromitovanje.</li>
        <li data-sr="prijavite incident imejl provajderu i policiji s opisom neovlašćenih aktivnosti." data-en="report the incident to the email provider and police with a description of unauthorized activities.">prijavite incident imejl provajderu i policiji s opisom neovlašćenih aktivnosti.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si primio/la obaveštenje o prijavi s nepoznatog uređaja?" data-en="Did you receive a notification about a login from an unknown device?">Da li si primio/la obaveštenje o prijavi s nepoznatog uređaja?</li>
            <li data-sr="Da li su kontakti javljali da primaju čudne imejlove od tebe?" data-en="Have contacts reported receiving unusual emails from you?">Da li su kontakti javljali da primaju čudne imejlove od tebe?</li>
            <li data-sr="Da li imaš 2FA na imejl nalogu i da li koristiš autentifikator aplikaciju?" data-en="Do you have 2FA on the email account and do you use an authenticator app?">Da li imaš 2FA na imejl nalogu i da li koristiš autentifikator aplikaciju?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Imejl nalog je ključ svih servisa koji koriste tu adresu — kompromitovani imejl znači sve moguće biti napadnuto." data-en="An email account is the key to all services that use that address — a compromised email means everything can be attacked.">Imejl nalog je ključ svih servisa koji koriste tu adresu — kompromitovani imejl znači sve moguće biti napadnuto.</li>
            <li data-sr="Hajde odmah da proverimo aktivne sesije u imejl podešavanjima i odjavljujemo nepoznate uređaje." data-en="Let's check active sessions in email settings right now and sign out unknown devices.">Hajde odmah da proverimo aktivne sesije u imejl podešavanjima i odjavljujemo nepoznate uređaje.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
