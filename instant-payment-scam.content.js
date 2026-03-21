window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["instant-payment-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi prevara s instant plaćanjem" data-en="Introduction: how the instant payment scam works">Uvod: kako radi prevara s instant plaćanjem</h2>
      <p data-sr="Instant plaćanje je nepovratno. Napadač koristi urgentnost da spreči razmišljanje — čim je plaćeno, nema povrata bez saradnje primaoca." data-en="Instant payment is a payment system that transfers money between bank accounts within seconds — without the reversal option that exists with credit cards or classic transfers. The instant payment scam uses that irreversibility as its central feature: the attacker builds an urgent scenario preventing the victim from thinking, and once the payment is made, the money is permanently lost without the recipient's cooperation.">Instant plaćanje je nepovratno. Napadač koristi urgentnost da spreči razmišljanje — čim je plaćeno, nema povrata bez saradnje primaoca.</p>
      <p data-sr="Varijante: lažna potvrda uplate pre isporuke, lažni depozit za verifikaciju, lažna banka s hitnim transferom, marketplace pritisak na instant." data-en="Methods include a fake buyer who sends a fake payment confirmation before money actually arrives (to obtain delivery before receipt), a fake service requesting an instant deposit for 'verification', a fake bank instructing an 'urgent transfer', or a marketplace scam where a buyer pressures a seller into instant transfer instead of the platform.">Varijante: lažna potvrda uplate pre isporuke, lažni depozit za verifikaciju, lažna banka s hitnim transferom, marketplace pritisak na instant.</p>
      <div class="callout" data-sr="<strong>Model:</strong> urgentni scenario → instant transfer zahtev → plaćanje izvršeno → novac nepovratno otišao → gubitak." data-en="<strong>Model:</strong> urgent scenario → instant transfer request → payment executed → money irreversibly gone → loss."><strong>Model:</strong> urgentni scenario → instant transfer zahtev → plaćanje izvršeno → novac nepovratno otišao → gubitak.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> instant transfer je nepovratna operacija — jednom poslato, banka ne može povući sredstva bez saradnje primaoca." data-en="<strong>Threshold:</strong> an instant transfer is an irreversible operation — once sent, the bank cannot recall funds without the recipient's cooperation."><strong>Prag:</strong> instant transfer je nepovratna operacija — jednom poslato, banka ne može povući sredstva bez saradnje primaoca.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika instant prevare" data-en="How it works: instant payment scam mechanics">Kako generalno radi: mehanika instant prevare</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gradi urgentnost i pritisak" data-en="What builds urgency and pressure">Šta gradi urgentnost i pritisak</div>
          <ul class="bullets">
            <li data-sr="vremenski rok — 'isporuka mora biti danas', 'rok ističe za sat' — koji onemogućava proveru." data-en="time deadline — delivery must be today, 'deadline in an hour' — that prevents verification.">vremenski rok — 'isporuka mora biti danas', 'rok ističe za sat' — koji onemogućava proveru.</li>
            <li data-sr="lažna potvrda uplate koja izgleda kao bankovni screenshot ili imejl od banke." data-en="fake payment confirmation that looks like a bank screenshot or bank email.">lažna potvrda uplate koja izgleda kao bankovni screenshot ili imejl od banke.</li>
            <li data-sr="scenario koji zahteva 'instant' jer 'banka ne radi sutra' ili 'ponuda ističe'." data-en="scenario requiring instant because the bank is closed tomorrow' or 'the offer expires'.">scenario koji zahteva 'instant' jer 'banka ne radi sutra' ili 'ponuda ističe'.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Kako se uvodi instant transfer" data-en="How the instant transfer is introduced">Kako se uvodi instant transfer</div>
          <ul class="bullets">
            <li data-sr="kupac traži isporuku robe pre nego banka potvrdi uplatu — 'vidite potvrdu, šaljem instant'." data-en="buyer requests delivery before the bank confirms payment — you see the confirmation, I sent it instantly'.">kupac traži isporuku robe pre nego banka potvrdi uplatu — 'vidite potvrdu, šaljem instant'.</li>
            <li data-sr="lažni servis traži 'verifikacioni depozit' koji će biti 'vraćen odmah po verifikaciji'." data-en="fake service requests a verification deposit to be 'immediately returned after verification'.">lažni servis traži 'verifikacioni depozit' koji će biti 'vraćen odmah po verifikaciji'.</li>
            <li data-sr="napadač koji se predstavlja kao banka traži 'hitni transfer na bezbedni nalog'." data-en="attacker posing as a bank requests an urgent transfer to a safe account'.">napadač koji se predstavlja kao banka traži 'hitni transfer na bezbedni nalog'.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)" data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Izgradnja scenarija urgentnosti" data-en="Phase 1 — Building the urgency scenario">Faza 1 — Izgradnja scenarija urgentnosti</h3>
        <p data-sr="Napadač gradi urgentni scenario koji onemogućava proveru. Hitnost je centralna karakteristika, ne nusprodukt." data-en="The attacker contacts the victim and builds a scenario requiring urgent instant payment. The urgency is designed to prevent verification by a third party — family, bank, platform.">Napadač gradi urgentni scenario koji onemogućava proveru. Hitnost je centralna karakteristika, ne nusprodukt.</p>
        <ul class="bullets">
          <li data-sr="signal: svaki zahtev koji isključuje mogućnost odlaganja za 30 minuta je alarm." data-en="signal: any request that rules out the possibility of a 30-minute delay is an alarm.">signal: svaki zahtev koji isključuje mogućnost odlaganja za 30 minuta je alarm.</li>
          <li data-sr="signal: 'ne možete koristiti platformu, samo instant direktno' — izbegavanje platformske zaštite." data-en="signal: you cannot use the platform, only instant directly' — avoiding platform protection.">signal: 'ne možete koristiti platformu, samo instant direktno' — izbegavanje platformske zaštite.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> žrtva prihvata urgentnost kao realnu i pristaje na instant transfer." data-en="<strong>Threshold:</strong> the victim accepts the urgency as real and agrees to an instant transfer."><strong>Prag faze:</strong> žrtva prihvata urgentnost kao realnu i pristaje na instant transfer.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Izvršenje instant transfera" data-en="Phase 2 — Executing the instant transfer">Faza 2 — Izvršenje instant transfera</h3>
        <p data-sr="Instant transfer je izvršen. Napadač odmah prazni nalog. Povrat nemoguć bez saradnje." data-en="The victim executes the instant transfer. Money arrives within seconds in the attacker's account. The attacker immediately moves funds further or withdraws cash. Reversal is impossible without the recipient's cooperation.">Instant transfer je izvršen. Napadač odmah prazni nalog. Povrat nemoguć bez saradnje.</p>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="safe-account-scam.html" data-sr="Prevara sa 'bezbednim nalogom'" data-en="Safe account scam">Prevara sa 'bezbednim nalogom'</a></li>
            <li><a href="bank-transfer-diversion-scam.html" data-sr="Preusmeravanje bankovnog transfera" data-en="Bank transfer diversion scam">Preusmeravanje bankovnog transfera</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> instant transfer je potvrđen — svaki sekund sada smanjuje šansu za povrat." data-en="<strong>Threshold:</strong> the instant transfer is confirmed — every second now reduces the chance of recovery."><strong>Prag faze:</strong> instant transfer je potvrđen — svaki sekund sada smanjuje šansu za povrat.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="zahtev za instant transferom koji isključuje platformsku zaštitu ili klasični transfer." data-en="request for an instant transfer that excludes platform protection or a classic transfer.">zahtev za instant transferom koji isključuje platformsku zaštitu ili klasični transfer.</li>
        <li data-sr="lažna potvrda uplate koja traži isporuku robe pre nego uplata zaista stigne." data-en="fake payment confirmation requesting delivery before the payment actually arrives.">lažna potvrda uplate koja traži isporuku robe pre nego uplata zaista stigne.</li>
        <li data-sr="'verifikacioni depozit' koji se 'vraća odmah' — nema legitimnog servisa koji traži takav depozit." data-en="a verification deposit that is 'immediately returned' — no legitimate service requests such a deposit.">'verifikacioni depozit' koji se 'vraća odmah' — nema legitimnog servisa koji traži takav depozit.</li>
        <li data-sr="urgentnost koja onemogućava odlaganje za 30 minuta i konsultaciju s nekim." data-en="urgency that prevents a 30-minute delay and consultation with someone.">urgentnost koja onemogućava odlaganje za 30 minuta i konsultaciju s nekim.</li>
        <li data-sr="nalog primaoca je nepoznat i prethodno nikad korišćen za plaćanje ovom primaocu." data-en="the recipient account is unknown and never previously used to pay this recipient.">nalog primaoca je nepoznat i prethodno nikad korišćen za plaćanje ovom primaocu.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 10 pitanja pre instant transfera" data-en="Checklist: 10 questions before an instant transfer">Checklista: 10 pitanja pre instant transfera</h2>
      <ul class="bullets">
        <li data-sr="Da li postoji razlog zašto instant prenos nije moguće odložiti za 30 minuta?" data-en="Is there a reason why the instant transfer cannot be delayed by 30 minutes?">Da li postoji razlog zašto instant prenos nije moguće odložiti za 30 minuta?</li>
        <li data-sr="Da li sam proverio/la uplatu u bankovnoj aplikaciji — a ne samo na slici ili SMS-u?" data-en="Did I verify the payment in the banking app — not just on a screenshot or SMS?">Da li sam proverio/la uplatu u bankovnoj aplikaciji — a ne samo na slici ili SMS-u?</li>
        <li data-sr="Da li kupac prihvata klasični bankarski transfer umesto instant-a?" data-en="Does the buyer accept a classic bank transfer instead of instant?">Da li kupac prihvata klasični bankarski transfer umesto instant-a?</li>
        <li data-sr="Da li je primalac poznat i prethodno korišćen nalog za ovu osobu ili servis?" data-en="Is the recipient a known and previously used account for this person or service?">Da li je primalac poznat i prethodno korišćen nalog za ovu osobu ili servis?</li>
        <li data-sr="Da li postoji 'verifikacioni depozit' koji se 'vraća odmah' — što nema smisla kod legitimnog servisa?" data-en="Is there a verification deposit that is 'immediately returned' — which makes no sense for a legitimate service?">Da li postoji 'verifikacioni depozit' koji se 'vraća odmah' — što nema smisla kod legitimnog servisa?</li>
        <li data-sr="Da li kupac izbegava platformu i insistira na direktnom instant transferu?" data-en="Does the buyer avoid the platform and insist on a direct instant transfer?">Da li kupac izbegava platformu i insistira na direktnom instant transferu?</li>
        <li data-sr="Da li sam mogao/la da potvrdim identitet primaoca putem video poziva?" data-en="Could I confirm the recipient's identity via a video call?">Da li sam mogao/la da potvrdim identitet primaoca putem video poziva?</li>
        <li data-sr="Da li bi odlaganje transfera za jedan dan kompromitovalo legitimnu transakciju?" data-en="Would delaying the transfer by one day compromise a legitimate transaction?">Da li bi odlaganje transfera za jedan dan kompromitovalo legitimnu transakciju?</li>
        <li data-sr="Da li je iznos veći nego što bih normalno slao/la bez provere primatelja?" data-en="Is the amount larger than what I would normally send without verifying the recipient?">Da li je iznos veći nego što bih normalno slao/la bez provere primatelja?</li>
        <li data-sr="Da li sam proverio/la nalog primaoca s bankovnom podrškom pre slanja?" data-en="Did I verify the recipient account with bank support before sending?">Da li sam proverio/la nalog primaoca s bankovnom podrškom pre slanja?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="ne izvrši transfer — odloži za 30 minuta i proverite identitet primaoca nezavisno." data-en="do not execute the transfer — delay by 30 minutes and independently verify the recipient's identity.">ne izvrši transfer — odloži za 30 minuta i proverite identitet primaoca nezavisno.</li>
        <li data-sr="ako je transfer izvršen, odmah kontaktirajte banku — što brže, veće su šanse za blokadu." data-en="if the transfer was made, contact the bank immediately — the faster, the greater the chance of blocking.">ako je transfer izvršen, odmah kontaktirajte banku — što brže, veće su šanse za blokadu.</li>
        <li data-sr="prijavite incident banci s opisom naloga primaoca — banka može blokirati nalog ako je sumnjiv." data-en="report the incident to the bank with the recipient account details — the bank can block a suspicious account.">prijavite incident banci s opisom naloga primaoca — banka može blokirati nalog ako je sumnjiv.</li>
        <li data-sr="prijavite prevaru policiji i sačuvajte sve zapise komunikacije i transakcija." data-en="report the fraud to police and preserve all communication and transaction records.">prijavite prevaru policiji i sačuvajte sve zapise komunikacije i transakcija.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li postoji razlog zašto nije moguće odložiti plaćanje za 30 minuta?" data-en="Is there a reason why payment cannot be delayed by 30 minutes?">Da li postoji razlog zašto nije moguće odložiti plaćanje za 30 minuta?</li>
            <li data-sr="Da li si proverio/la uplatu direktno u bankovnoj aplikaciji pre isporuke robe?" data-en="Did you verify the payment directly in the banking app before delivering the goods?">Da li si proverio/la uplatu direktno u bankovnoj aplikaciji pre isporuke robe?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Instant transfer se ne može povratiti — legitimna transakcija može sačekati 30 minuta za verifikaciju." data-en="An instant transfer cannot be reversed — a legitimate transaction can wait 30 minutes for verification.">Instant transfer se ne može povratiti — legitimna transakcija može sačekati 30 minuta za verifikaciju.</li>
            <li data-sr="Slika potvrde uplate nije dokaz — jedini dokaz je uplata vidljiva u tvojoj bankovnoj aplikaciji." data-en="A screenshot of a payment confirmation is not proof — the only proof is the payment visible in your banking app.">Slika potvrde uplate nije dokaz — jedini dokaz je uplata vidljiva u tvojoj bankovnoj aplikaciji.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
