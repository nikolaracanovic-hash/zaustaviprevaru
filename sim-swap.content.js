window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["sim-swap"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi SIM swap prevara" data-en="Introduction: how SIM swap fraud works">Uvod: kako radi SIM swap prevara</h2>
      <p data-sr="Napadač ubedi operatera da prebaci broj telefona na tuđi SIM. Sve SMS poruke i OTP kodovi stižu napadaču. Bankovni i drugi nalozi su izloženi preuzimanju." data-en="SIM swap is an attack in which the fraudster convinces a mobile carrier to transfer the victim's phone number to a SIM card the fraudster controls. From that point all SMS messages, including OTP codes for online banking and two-factor authentication, reach the attacker not the victim. With that control the attacker resets passwords, accesses bank accounts, and takes over other digital services.">Napadač ubedi operatera da prebaci broj telefona na tuđi SIM. Sve SMS poruke i OTP kodovi stižu napadaču. Bankovni i drugi nalozi su izloženi preuzimanju.</p>
      <p data-sr="SIM swap zahteva prethodnu pripremu: phishing, curenje podataka ili crno tržište. Slabe procedure kod operatera ubrzavaju napad." data-en="The attack requires prior preparation: the fraudster must know enough about the victim to pass the identity check at the carrier. Data is collected through phishing, data breaches, or purchased on the dark market. Many carriers have weak security procedures for transfers, making SIM swap feasible with relatively little information.">SIM swap zahteva prethodnu pripremu: phishing, curenje podataka ili crno tržište. Slabe procedure kod operatera ubrzavaju napad.</p>
      <div class="callout" data-sr="<strong>Model:</strong> prikupljanje podataka → lažni zahtev operateru → prenos broja na napadačev SIM → presretanje OTP → resetovanje lozinki → preuzimanje naloga." data-en="<strong>Model:</strong> data collection → fake carrier request → number transfer to attacker's SIM → OTP interception → password resets → account takeover."><strong>Model:</strong> prikupljanje podataka → lažni zahtev operateru → prenos broja na napadačev SIM → presretanje OTP → resetovanje lozinki → preuzimanje naloga.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> iznenadni gubitak mobilnog signala bez razloga može značiti da je vaš broj prenet na tuđi SIM." data-en="<strong>Threshold:</strong> a sudden unexplained loss of mobile signal may mean your number has been transferred to someone else's SIM."><strong>Prag:</strong> iznenadni gubitak mobilnog signala bez razloga može značiti da je vaš broj prenet na tuđi SIM.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika SIM swap napada" data-en="How it works: SIM swap attack mechanics">Kako generalno radi: mehanika SIM swap napada</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gradi napadačevu pripremu" data-en="What builds the attacker's preparation">Šta gradi napadačevu pripremu</div>
          <ul class="bullets">
            <li data-sr="phishing imejlovi ili lažni sajtovi koji prikupljaju ime, adresu, JMBG i zadnje 4 cifre kartice." data-en="phishing emails or fake sites that collect name, address, ID number, and last 4 card digits.">phishing imejlovi ili lažni sajtovi koji prikupljaju ime, adresu, JMBG i zadnje 4 cifre kartice.</li>
            <li data-sr="curenja podataka iz kojih napadač kupuje profile na crnom tržištu." data-en="data breaches from which the attacker buys profiles on the dark market.">curenja podataka iz kojih napadač kupuje profile na crnom tržištu.</li>
            <li data-sr="javne informacije sa društvenih mreža — datum rođenja, adresa, ime majke." data-en="public information from social media — date of birth, address, mother's name.">javne informacije sa društvenih mreža — datum rođenja, adresa, ime majke.</li>
            <li data-sr="socijalni inženjering: poziv žrtvi koji prikuplja 'poslednji korak' potrebnih podataka." data-en="social engineering: a call to the victim that collects the final piece' of required data.">socijalni inženjering: poziv žrtvi koji prikuplja 'poslednji korak' potrebnih podataka.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Kako se preuzima broj i pristupa nalozima" data-en="How the number is taken over and accounts are accessed">Kako se preuzima broj i pristupa nalozima</div>
          <ul class="bullets">
            <li data-sr="napadač kontaktira operatera (telefonom, online ili u prodavnici) i prolazi kroz proveru identiteta." data-en="the attacker contacts the carrier (by phone, online, or in-store) and passes the identity check.">napadač kontaktira operatera (telefonom, online ili u prodavnici) i prolazi kroz proveru identiteta.</li>
            <li data-sr="prenos broja odobren — sva SMS komunikacija i 2FA kodovi stižu napadaču." data-en="number transfer approved — all SMS communication and 2FA codes reach the attacker.">prenos broja odobren — sva SMS komunikacija i 2FA kodovi stižu napadaču.</li>
            <li data-sr="napadač pokreće resetovanje lozinke na svim bitnim servisima — imejl, banka, kripto." data-en="the attacker initiates password reset on all important services — email, bank, crypto.">napadač pokreće resetovanje lozinke na svim bitnim servisima — imejl, banka, kripto.</li>
            <li data-sr="žrtva istovremeno gubi signal i ne može ni primiti ni poslati poziv ili SMS." data-en="the victim simultaneously loses signal and cannot receive or send calls or SMS.">žrtva istovremeno gubi signal i ne može ni primiti ni poslati poziv ili SMS.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)" data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Prikupljanje podataka" data-en="Phase 1 — Data collection">Faza 1 — Prikupljanje podataka</h3>
        <p data-sr="Prikupljanje podataka za proveru identiteta kod operatera — phishing, curenje, društvene mreže ili crno tržište." data-en="The attacker collects enough data about the victim to pass the carrier identity check. This can take days or be instant through purchasing stolen data.">Prikupljanje podataka za proveru identiteta kod operatera — phishing, curenje, društvene mreže ili crno tržište.</p>
        <ul class="bullets">
          <li data-sr="signal: phishing imejlovi koji traže potvrdu broja telefona ili JMBG-a su uvod u SIM swap." data-en="signal: phishing emails requesting phone number or ID confirmation are a precursor to SIM swap.">signal: phishing imejlovi koji traže potvrdu broja telefona ili JMBG-a su uvod u SIM swap.</li>
          <li data-sr="signal: neočekivani SMS od operatera o zahtevu za prenosom broja je direktan alarm." data-en="signal: an unexpected SMS from the carrier about a number transfer request is a direct alarm.">signal: neočekivani SMS od operatera o zahtevu za prenosom broja je direktan alarm.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> napadač ima dovoljno podataka za proveru identiteta kod operatera." data-en="<strong>Threshold:</strong> the attacker has enough data to pass the carrier identity check."><strong>Prag faze:</strong> napadač ima dovoljno podataka za proveru identiteta kod operatera.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Prenos broja i gubitak signala" data-en="Phase 2 — Number transfer and signal loss">Faza 2 — Prenos broja i gubitak signala</h3>
        <p data-sr="Žrtva gubi signal bez razloga. Napadač prima sve SMS i OTP kodove." data-en="The carrier approves the transfer. The victim suddenly loses signal — cannot receive or send SMS or calls. The attacker begins receiving all the victim's SMS messages, including 2FA codes.">Žrtva gubi signal bez razloga. Napadač prima sve SMS i OTP kodove.</p>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="otp-interception.html" data-sr="Presretanje OTP koda" data-en="OTP interception">Presretanje OTP koda</a></li>
            <li><a href="email-account-compromise.html" data-sr="Kompromitovanje imejl naloga" data-en="Email account compromise">Kompromitovanje imejl naloga</a></li>
            <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> gubitak signala je direktni alarm — odmah kontaktirajte operatera." data-en="<strong>Threshold:</strong> signal loss is a direct alarm — contact your carrier immediately."><strong>Prag faze:</strong> gubitak signala je direktni alarm — odmah kontaktirajte operatera.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Resetovanje lozinki i crpljenje naloga" data-en="Phase 3 — Password resets and account draining">Faza 3 — Resetovanje lozinki i crpljenje naloga</h3>
        <p data-sr="Napadač resetuje lozinke svega vezanog za broj telefona. Sredstva se crpe u minutima. Žrtva nema signal ni upozorenja." data-en="With SMS access, the attacker resets passwords for email, online banking, crypto exchanges, and other services. Funds are transferred or spent within minutes. The victim has no signal and cannot receive alerts.">Napadač resetuje lozinke svega vezanog za broj telefona. Sredstva se crpe u minutima. Žrtva nema signal ni upozorenja.</p>
        <div class="callout" data-sr="<strong>Prag faze:</strong> svaka minuta bez reakcije povećava gubitak — ključno je kontaktirati operatera i banku sa drugog uređaja odmah." data-en="<strong>Threshold:</strong> every minute without action increases the loss — it is critical to contact the carrier and bank from a different device immediately."><strong>Prag faze:</strong> svaka minuta bez reakcije povećava gubitak — ključno je kontaktirati operatera i banku sa drugog uređaja odmah.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="iznenadni gubitak mobilnog signala bez tehničkih razloga ili najave od operatera." data-en="sudden loss of mobile signal without technical reasons or carrier notice.">iznenadni gubitak mobilnog signala bez tehničkih razloga ili najave od operatera.</li>
        <li data-sr="neočekivani SMS od operatera o zahtevu za prenosom broja ili novoj SIM kartici." data-en="unexpected SMS from the carrier about a number transfer request or a new SIM card.">neočekivani SMS od operatera o zahtevu za prenosom broja ili novoj SIM kartici.</li>
        <li data-sr="nemogućnost pristupa imejlu ili bankovnoj aplikaciji koja koristi SMS 2FA." data-en="inability to access email or a banking app that uses SMS 2FA.">nemogućnost pristupa imejlu ili bankovnoj aplikaciji koja koristi SMS 2FA.</li>
        <li data-sr="obaveštenja o resetovanju lozinke na servisima koje vi niste pokrenuli." data-en="password reset notifications on services you did not initiate.">obaveštenja o resetovanju lozinke na servisima koje vi niste pokrenuli.</li>
        <li data-sr="neočekivani odlivi s bankovnog računa dok nemate signal na telefonu." data-en="unexpected outflows from the bank account while you have no phone signal.">neočekivani odlivi s bankovnog računa dok nemate signal na telefonu.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 10 pitanja i akcija ako izgubite signal" data-en="Checklist: 10 questions and actions if you lose signal">Checklista: 10 pitanja i akcija ako izgubite signal</h2>
      <ul class="bullets">
        <li data-sr="Da li postoji razlog za gubitak signala — servis, putovanje, poznati problem?" data-en="Is there a reason for signal loss — service outage, travel, known issue?">Da li postoji razlog za gubitak signala — servis, putovanje, poznati problem?</li>
        <li data-sr="Da li sam primio/la obaveštenje od operatera o zahtevu za SIM transferom?" data-en="Did I receive a notification from the carrier about a SIM transfer request?">Da li sam primio/la obaveštenje od operatera o zahtevu za SIM transferom?</li>
        <li data-sr="Da li sam kontaktirao/la operatera sa drugog uređaja ili fiksnog telefona odmah?" data-en="Did I contact the carrier from a different device or landline immediately?">Da li sam kontaktirao/la operatera sa drugog uređaja ili fiksnog telefona odmah?</li>
        <li data-sr="Da li sam proverio/la pristup imejlu i bankovnim nalozima sa drugog uređaja?" data-en="Did I check email and bank account access from another device?">Da li sam proverio/la pristup imejlu i bankovnim nalozima sa drugog uređaja?</li>
        <li data-sr="Da li koristim autentifikator aplikaciju (ne SMS) za 2FA na ključnim servisima?" data-en="Do I use an authenticator app (not SMS) for 2FA on key services?">Da li koristim autentifikator aplikaciju (ne SMS) za 2FA na ključnim servisima?</li>
        <li data-sr="Da li sam postavio/la PIN ili lozinku za promene na nalogu kod operatera?" data-en="Have I set a PIN or password for account changes at my carrier?">Da li sam postavio/la PIN ili lozinku za promene na nalogu kod operatera?</li>
        <li data-sr="Da li sam obavesti/la banku odmah i tražio/la privremenu blokadu naloga?" data-en="Did I notify the bank immediately and request a temporary account block?">Da li sam obavesti/la banku odmah i tražio/la privremenu blokadu naloga?</li>
        <li data-sr="Da li sam promenio/la lozinke za imejl i ključne servise sa nezavisnog uređaja?" data-en="Did I change passwords for email and key services from an independent device?">Da li sam promenio/la lozinke za imejl i ključne servise sa nezavisnog uređaja?</li>
        <li data-sr="Da li sam prijavio/la incident operateru i policiji?" data-en="Did I report the incident to the carrier and police?">Da li sam prijavio/la incident operateru i policiji?</li>
        <li data-sr="Da li sam proverio/la koje servise koristim SMS 2FA radi migracije na autentifikator aplikaciju?" data-en="Did I review which services I use SMS 2FA for, to migrate to an authenticator app?">Da li sam proverio/la koje servise koristim SMS 2FA radi migracije na autentifikator aplikaciju?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="kontaktirajte mobilnog operatera sa drugog uređaja ili fiksne linije odmah i tražite blokadu prenosa." data-en="contact your mobile carrier from a different device or landline immediately and request a transfer block.">kontaktirajte mobilnog operatera sa drugog uređaja ili fiksne linije odmah i tražite blokadu prenosa.</li>
        <li data-sr="prijavite se na bankovni nalog s drugog uređaja i proverite transakcije." data-en="log into your bank account from a different device and check transactions.">prijavite se na bankovni nalog s drugog uređaja i proverite transakcije.</li>
        <li data-sr="kontaktirajte banku i tražite privremenu blokadu dok se situacija ne razreši." data-en="contact the bank and request a temporary block until the situation is resolved.">kontaktirajte banku i tražite privremenu blokadu dok se situacija ne razreši.</li>
        <li data-sr="promenite lozinke za imejl i sve ključne servise sa uređaja koji nije kompromitovan." data-en="change passwords for email and all key services from a device that is not compromised.">promenite lozinke za imejl i sve ključne servise sa uređaja koji nije kompromitovan.</li>
        <li data-sr="migrirajte 2FA sa SMS na autentifikator aplikaciju na svim servisima koji to dozvoljavaju." data-en="migrate 2FA from SMS to an authenticator app on all services that allow it.">migrirajte 2FA sa SMS na autentifikator aplikaciju na svim servisima koji to dozvoljavaju.</li>
        <li data-sr="prijavite incident policiji i sačuvajte sve zapise komunikacije i transakcija." data-en="report the incident to police and preserve all communication and transaction records.">prijavite incident policiji i sačuvajte sve zapise komunikacije i transakcija.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si iznenada izgubio/la signal bez poznatog razloga?" data-en="Did you suddenly lose signal without a known reason?">Da li si iznenada izgubio/la signal bez poznatog razloga?</li>
            <li data-sr="Da li si primio/la poruke o resetovanju lozinki na servisima koje nisi pokrenuo/la?" data-en="Did you receive password reset messages for services you did not initiate?">Da li si primio/la poruke o resetovanju lozinki na servisima koje nisi pokrenuo/la?</li>
            <li data-sr="Da li imaš drugi uređaj s kojeg možeš kontaktirati operatera odmah?" data-en="Do you have another device from which you can contact the carrier right now?">Da li imaš drugi uređaj s kojeg možeš kontaktirati operatera odmah?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Iznenadni gubitak signala je direktan alarm za SIM swap — treba odmah kontaktirati operatera s drugog uređaja." data-en="Sudden signal loss is a direct alarm for SIM swap — contact the carrier from a different device immediately.">Iznenadni gubitak signala je direktan alarm za SIM swap — treba odmah kontaktirati operatera s drugog uređaja.</li>
            <li data-sr="Hajde odmah da se prijavimo na bankovni nalog s mog telefona i proverimo aktivnost." data-en="Let's log into the bank account from my phone right now and check the activity.">Hajde odmah da se prijavimo na bankovni nalog s mog telefona i proverimo aktivnost.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
