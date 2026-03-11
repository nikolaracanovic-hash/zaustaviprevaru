window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["port-out-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi port-out prevara" data-en="Introduction: how port-out scam works">Uvod: kako radi port-out prevara</h2>
      <p data-sr="Port-out prevara je bliski srodnik SIM swap-a: umesto zamene SIM kartice unutar istog operatera, napadač prenosi broj telefona žrtve na potpuno drugog operatera. Ovo je legitimna usluga „prenosa broja“ koja postoji da bi korisnici mogli da zadrže broj kad menjaju operatera. Napadač je zloupotrebljava predajući se kao vlasnik broja." data-en="Port-out scam is a close relative of SIM swap: instead of replacing a SIM card within the same carrier, the attacker transfers the victim's phone number to an entirely different carrier. This is a legitimate 'number portability' service that allows users to keep their number when switching carriers. The attacker abuses it by impersonating the number's owner.">Port-out je zloupotreba legitimne usluge prenosa broja — napadač prenosi vaš broj na drugog operatera lažno se predstavljajući kao vi.</p>
      <p data-sr="Efekt je isti kao kod SIM swap-a: žrtva gubi signal, napadač prima sve SMS poruke. Ključna razlika je u procesu: port-out zahteva autorizacioni PIN koji operater ima, što ga čini nešto težim za izvršiti ali ne nemoguće — napadači koriste phishing ili socijalni inženjering za prikupljanje PIN-a." data-en="The effect is the same as SIM swap: the victim loses signal, the attacker receives all SMS messages. The key difference is the process: port-out requires an authorization PIN held by the carrier, making it somewhat harder to execute but not impossible — attackers use phishing or social engineering to obtain the PIN.">Efekt identičan SIM swap-u. Port-out zahteva autorizacioni PIN — napadač ga pribavlja phishingom ili socijalnim inženjeringom.</p>
      <div class="callout" data-sr="<strong>Model:</strong> prikupljanje podataka i PIN-a → zahtev za prenosom broja kod novog operatera → odobrenje prenosa → gubitak signala → presretanje SMS/OTP → preuzimanje naloga." data-en="<strong>Model:</strong> data and PIN collection → number transfer request at new carrier → transfer approved → signal loss → SMS/OTP interception → account takeover."><strong>Model:</strong> prikupljanje podataka i PIN-a → zahtev za prenosom broja kod novog operatera → odobrenje prenosa → gubitak signala → presretanje SMS/OTP → preuzimanje naloga.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> gubitak signala bez upozorenja i nemogućnost poziva ili poruka su direktan signal za proveru kod operatera." data-en="<strong>Threshold:</strong> losing signal without warning and being unable to call or message is a direct signal to check with your carrier."><strong>Prag:</strong> gubitak signala bez upozorenja i nemogućnost poziva ili poruka su direktan signal za proveru kod operatera.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika port-out napada" data-en="How it works: port-out attack mechanics">Kako generalno radi: mehanika port-out napada</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta napadač treba za port-out" data-en="What the attacker needs for port-out">Šta napadač treba za port-out</div>
          <ul class="bullets">
            <li data-sr="broj telefona žrtve, ime, adresa i JMBG ili datum rodjenja." data-en="victim's phone number, name, address, and ID number or date of birth.">broj telefona žrtve, ime, adresa i JMBG ili datum rodjenja.</li>
            <li data-sr="PIN naloga kod operatera koji žrtva koristi za autorizaciju promena." data-en="the carrier account PIN that the victim uses to authorize changes.">PIN naloga kod operatera koji žrtva koristi za autorizaciju promena.</li>
            <li data-sr="broj naloga kod operatera — ponekad dostupan na fakturama." data-en="account number at the carrier — sometimes available on bills.">broj naloga kod operatera — ponekad dostupan na fakturama.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Kako se izvodi prenos i šta sledi" data-en="How the transfer is executed and what follows">Kako se izvodi prenos i šta sledi</div>
          <ul class="bullets">
            <li data-sr="napadač se obraća novom operateru s potrebnim podacima i traži prenos broja." data-en="the attacker contacts a new carrier with the required data and requests number porting.">napadač se obraća novom operateru s potrebnim podacima i traži prenos broja.</li>
            <li data-sr="prenos je odobren — novi operater počinje primati signal žrtvinog broja." data-en="the transfer is approved — the new carrier starts receiving the victim's number signal.">prenos je odobren — novi operater počinje primati signal žrtvinog broja.</li>
            <li data-sr="stari operater šalje obaveštenje o prenosu ali ga žrtva možda ne pročita na vreme." data-en="the old carrier sends a porting notification but the victim may not read it in time.">stari operater šalje obaveštenje o prenosu ali ga žrtva možda ne pročita na vreme.</li>
            <li data-sr="svi SMS uključujući OTP kodove stižu na uređaj napadača." data-en="all SMS messages including OTP codes arrive on the attacker's device.">svi SMS uključujući OTP kodove stižu na uređaj napadača.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)." data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Prikupljanje podataka za prenos" data-en="Phase 1 — Data collection for porting">Faza 1 — Prikupljanje podataka za prenos</h3>
        <p data-sr="Napadač prikuplja podatke potrebne za autorizovan prenos broja. Posebno traži PIN naloga koji se postavlja kod operatera. Korisnici koji nikad nisu postavili PIN su ranjiviji." data-en="The attacker collects data required for an authorized number transfer. Specifically seeks the account PIN set with the carrier. Users who have never set a PIN are more vulnerable.">Prikupljanje podataka za prenos uključuje PIN naloga, koji je ključna zaštita, ali mnogi korisnici ga nikad nisu postavili.</p>
        <ul class="bullets">
          <li data-sr="signal: neočekivani poziv od operatera koji traži potvrdu PIN-a naloga." data-en="signal: unexpected call from the carrier requesting account PIN confirmation.">signal: neočekivani poziv od operatera koji traži potvrdu PIN-a naloga.</li>
          <li data-sr="signal: e-mail koji izgleda kao od operatera i traži ažuriranje podataka računa." data-en="signal: email appearing to be from the carrier and requesting account update.">signal: e-mail koji izgleda kao od operatera i traži ažuriranje podataka računa.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> napadač ima dovoljno podataka za uspešan zahtev za prenosom broja." data-en="<strong>Threshold:</strong> the attacker has enough data for a successful number porting request."><strong>Prag faze:</strong> napadač ima dovoljno podataka za uspešan zahtev za prenosom broja.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Prenos broja i gubitak signala" data-en="Phase 2 — Number porting and signal loss">Faza 2 — Prenos broja i gubitak signala</h3>
        <p data-sr="Žrtva iznenada gubi signal. Ne može primiti pozive ni SMS. Ako stari operater pošalje SMS o prenosu, žrtva ga prima samo ako prethodni SMS pre prenosa — ili ga uopšte ne vidi jer je signal već prekinut." data-en="The victim suddenly loses signal. Cannot receive calls or SMS. If the old carrier sends an SMS about the transfer, the victim receives it only if they saw the previous SMS before the transfer — or they may not see it at all since signal is already cut.">Žrtva gubi signal. Obaveštenje o prenosu možda ne stiže na vreme.</p>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="otp-interception.html" data-sr="Presretanje OTP koda" data-en="OTP interception">Presretanje OTP koda</a></li>
            <li><a href="email-account-compromise.html" data-sr="Kompromitovanje imejl naloga" data-en="Email account compromise">Kompromitovanje imejl naloga</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> gubitak signala — odmah kontaktirajte starog operatera s drugog uređaja." data-en="<strong>Threshold:</strong> signal loss — immediately contact your old carrier from a different device."><strong>Prag faze:</strong> gubitak signala — odmah kontaktirajte starog operatera s drugog uređaja.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="iznenadni gubitak signala bez poznatog tehničkog razloga." data-en="sudden signal loss without a known technical reason.">iznenadni gubitak signala bez poznatog tehničkog razloga.</li>
        <li data-sr="SMS ili imejl od operatera o zahtevu za prenosom broja koji vi niste inicirali." data-en="SMS or email from the carrier about a number transfer request you did not initiate.">SMS ili imejl od operatera o zahtevu za prenosom broja koji vi niste inicirali.</li>
        <li data-sr="napadač je prethodno tražio vaš PIN naloga telefonom ili phishingom." data-en="the attacker previously requested your account PIN by phone or phishing.">napadač je prethodno tražio vaš PIN naloga telefonom ili phishingom.</li>
        <li data-sr="obaveštenja o resetovanju lozinki na važnim servisima koje vi niste pokrenuli." data-en="password reset notifications on important services you did not initiate.">obaveštenja o resetovanju lozinki na važnim servisima koje vi niste pokrenuli.</li>
        <li data-sr="neočekivani odlivi sa bankovnog naloga dok nemate mobilni signal." data-en="unexpected outflows from the bank account while you have no mobile signal.">neočekivani odlivi sa bankovnog naloga dok nemate mobilni signal.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 8 preventivnih i reaktivnih provera" data-en="Checklist: 8 preventive and reactive checks">Checklista: 8 preventivnih i reaktivnih provera</h2>
      <ul class="bullets">
        <li data-sr="Da li sam postavio/la PIN naloga ili zaštitu prenosa broja kod svog operatera?" data-en="Have I set an account PIN or number porting protection at my carrier?">Da li sam postavio/la PIN naloga ili zaštitu prenosa broja kod svog operatera?</li>
        <li data-sr="Da li postoji neočekivani zahtev za prenosom broja u mom nalogu kod operatera?" data-en="Is there an unexpected number porting request in my account portal?">Da li postoji neočekivani zahtev za prenosom broja u mom nalogu kod operatera?</li>
        <li data-sr="Da li sam kontaktirao/la operatera s drugog uređaja ili fiksne linije odmah posle gubitka signala?" data-en="Did I contact the carrier from a different device or landline immediately after signal loss?">Da li sam kontaktirao/la operatera s drugog uređaja ili fiksne linije odmah posle gubitka signala?</li>
        <li data-sr="Da li koristim SMS 2FA za ključne servise — banka, imejl, kripto?" data-en="Am I using SMS 2FA for key services — bank, email, crypto?">Da li koristim SMS 2FA za ključne servise — banka, imejl, kripto?</li>
        <li data-sr="Da li sam proverio/la transakcije na bankovnom računu s drugog uređaja?" data-en="Did I check transactions on my bank account from a different device?">Da li sam proverio/la transakcije na bankovnom računu s drugog uređaja?</li>
        <li data-sr="Da li sam promenio/la lozinke za ključne servise sa nezavisnog uređaja?" data-en="Did I change passwords for key services from an independent device?">Da li sam promenio/la lozinke za ključne servise sa nezavisnog uređaja?</li>
        <li data-sr="Da li sam prijavio/la incident operateru, banci i policiji s opisom napada?" data-en="Did I report the incident to the carrier, bank, and police with an attack description?">Da li sam prijavio/la incident operateru, banci i policiji s opisom napada?</li>
        <li data-sr="Da li sam migrirao/la 2FA sa SMS na autentifikator aplikaciju za kritične servise?" data-en="Did I migrate 2FA from SMS to an authenticator app for critical services?">Da li sam migrirao/la 2FA sa SMS na autentifikator aplikaciju za kritične servise?</li>
      </ul>
    </section>

    
    <!-- PROVERE -->
    <section class="content-section">
      <h2 data-sr="Provere: 8 brzih provera za zaštitu broja telefona" data-en="Checks: 8 quick checks for phone number protection">Provere: 8 brzih provera za zaštitu broja telefona</h2>
      <ol class="steps">
        <li data-sr="Postavi PIN ili šifru za portabilnost broja kod svog operatera." data-en="Set a PIN or password for number portability with your mobile operator.">Postavi PIN ili šifru za portabilnost broja kod svog operatera.</li>
        <li data-sr="Uključi SIM zaštitu ili dvofaktorsku potvrdu zasnovanu na aplikaciji, a ne na SMS-u." data-en="Enable SIM lock or app-based two-factor authentication rather than SMS-based.">Uključi SIM zaštitu ili dvofaktorsku potvrdu zasnovanu na aplikaciji, a ne na SMS-u.</li>
        <li data-sr="Proveri da li tvoj operater nudi zaštićeni nalog koji zahteva dodatnu verifikaciju." data-en="Check whether your operator offers a protected account requiring additional verification.">Proveri da li tvoj operater nudi zaštićeni nalog koji zahteva dodatnu verifikaciju.</li>
        <li data-sr="Ako iznenada izgubiš mobilni signal, odmah kontaktiraj operatera." data-en="If you suddenly lose mobile signal, contact your operator immediately.">Ako iznenada izgubiš mobilni signal, odmah kontaktiraj operatera.</li>
        <li data-sr="Redovno proveravaj finansijske naloge koji koriste SMS dvofaktorsku potvrdu." data-en="Regularly check financial accounts that use SMS two-factor authentication.">Redovno proveravaj finansijske naloge koji koriste SMS dvofaktorsku potvrdu.</li>
        <li data-sr="Nikad ne deli detalje naloga kod operatera s nekim ko te kontaktira neočekivano." data-en="Never share account details with your operator to someone who contacts you unexpectedly.">Nikad ne deli detalje naloga kod operatera s nekim ko te kontaktira neočekivano.</li>
        <li data-sr="Postavi alert za sve pokušaje prenosa broja na e-mail obaveštenje operatera." data-en="Set up an alert for any number transfer attempts through your operator email notifications.">Postavi alert za sve pokušaje prenosa broja na e-mail obaveštenje operatera.</li>
        <li data-sr="Ako si primio SMS-ove za OTP koji nisi tražio, odmah blokiraj finansijske naloge." data-en="If you received OTP messages you did not request, immediately block financial accounts.">Ako si primio SMS-ove za OTP koji nisi tražio, odmah blokiraj finansijske naloge.</li>
      </ol>
    </section>
<section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="kontaktirajte starog operatera s drugog uređaja odmah i zatražite blokadu prenosa." data-en="contact your old carrier from a different device immediately and request a transfer block.">kontaktirajte starog operatera s drugog uređaja odmah i zatražite blokadu prenosa.</li>
        <li data-sr="prijavite se na bankovni nalog s drugog uređaja i proverite aktivnosti." data-en="log into your bank account from a different device and check activity.">prijavite se na bankovni nalog s drugog uređaja i proverite aktivnosti.</li>
        <li data-sr="tražite od banke privremenu blokadu dok se prenos ne poništi." data-en="request a temporary block from the bank until the porting is reversed.">tražite od banke privremenu blokadu dok se prenos ne poništi.</li>
        <li data-sr="promenite lozinke za imejl i sve ključne servise odmah s nezavisnog uređaja." data-en="change passwords for email and all key services immediately from an independent device.">promenite lozinke za imejl i sve ključne servise odmah s nezavisnog uređaja.</li>
        <li data-sr="prijavite napad policiji s opisom broja od koga ste primili sumnjive poruke." data-en="report the attack to police with a description of the number from which you received suspicious messages.">prijavite napad policiji s opisom broja od koga ste primili sumnjive poruke.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si iznenada izgubio/la signal bez poznatog razloga?" data-en="Did you suddenly lose signal without a known reason?">Da li si iznenada izgubio/la signal bez poznatog razloga?</li>
            <li data-sr="Da li imaš PIN naloga kod operatera koji štiti prenos broja?" data-en="Do you have an account PIN at the carrier that protects number porting?">Da li imaš PIN naloga kod operatera koji štiti prenos broja?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Iznenadni gubitak signala zahteva odmah poziv operateru s drugog uređaja — svaka minuta je bitna." data-en="Sudden signal loss requires an immediate call to the carrier from a different device — every minute matters.">Iznenadni gubitak signala zahteva odmah poziv operateru s drugog uređaja — svaka minuta je bitna.</li>
            <li data-sr="Postavljanje PIN-a naloga kod operatera je najlakša zaštita od port-out napada." data-en="Setting an account PIN at the carrier is the easiest protection against port-out attacks.">Postavljanje PIN-a naloga kod operatera je najlakša zaštita od port-out napada.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card sources" id="sources">
      <h2 data-sr="Povezane prevare" data-en="Related scams">Povezane prevare</h2>
      <ul class="bullets">
        <li><a href="sim-swap.html" data-sr="SIM swap (zamena SIM kartice)" data-en="SIM swap fraud">SIM swap (zamena SIM kartice)</a></li>
        <li><a href="otp-interception.html" data-sr="Presretanje OTP koda" data-en="OTP interception">Presretanje OTP koda</a></li>
        <li><a href="email-account-compromise.html" data-sr="Kompromitovanje imejl naloga" data-en="Email account compromise">Kompromitovanje imejl naloga</a></li>
        <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
        <li><a href="identity-theft.html" data-sr="Krađa identiteta" data-en="Identity theft">Krađa identiteta</a></li>
      </ul>
    </section>
  `
};
