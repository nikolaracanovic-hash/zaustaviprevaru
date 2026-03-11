window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["otp-interception"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi presretanje OTP koda" data-en="Introduction: how OTP interception works">Uvod: kako radi presretanje OTP koda</h2>
      <p data-sr="OTP (jednokratna lozinka) presretanje je tehnika kojom napadač dobija pristup bezbednosnom kodu koji banka ili drugi servis šalje žrtvi kao autentifikacioni faktor. Jednom kada napadač ima OTP kod, može autorizovati transakciju, resetovati lozinku ili preuzeti nalog — sve za vreme važenja koda koji je obično 30–60 sekundi ili 5 minuta." data-en="OTP (one-time password) interception is a technique by which the attacker obtains access to the security code a bank or other service sends the victim as an authentication factor. Once the attacker has the OTP code, they can authorize a transaction, reset a password, or take over an account — all within the code's validity window, usually 30–60 seconds or 5 minutes.">OTP presretanje daje napadaču vremenski ograničen pristup jednokratnom kodu za autorizaciju transakcija, resetovanje lozinki ili preuzimanje naloga.</p>
      <p data-sr="Metode su raznovrsne: socijalni inženjering (lažni bankarski poziv koji traži kod), phishing proxy koji prosljeđuje kod u realnom vremenu, SS7 ranjivost koja presreće SMS mrežno, ili SIM swap koji preusmerava sve SMS poruke. Zajedničko svima je cilj: dobiti kod brže nego žrtva može reagovati." data-en="Methods are varied: social engineering (fake bank call requesting the code), real-time phishing proxy that forwards the code, SS7 vulnerability that intercepts SMS at the network level, or SIM swap redirecting all SMS. What all share is the goal: obtain the code faster than the victim can react.">Metode: SE poziv, phishing proxy, SS7 ili SIM swap. Cilj je uvek isti — kod pre nego žrtva reaguje.</p>
      <div class="callout" data-sr="<strong>Model:</strong> napadač prikuplja podatke kartice/naloga → inicira transakciju → traži OTP od žrtve ili ga presreće → kod se koristi za autorizaciju → finansijski gubitak." data-en="<strong>Model:</strong> attacker collects card/account data → initiates transaction → requests OTP from victim or intercepts it → code used for authorization → financial loss."><strong>Model:</strong> napadač prikuplja podatke kartice/naloga → inicira transakciju → traži OTP od žrtve ili ga presreće → kod se koristi za autorizaciju → finansijski gubitak.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> OTP kod koji niste sami inicirali ne smete nikome otkriti — ni banci ni policiji telefonom." data-en="<strong>Threshold:</strong> an OTP code you did not initiate must never be shared with anyone — not even your bank or police over the phone."><strong>Prag:</strong> OTP kod koji niste sami inicirali ne smete nikome otkriti — ni banci ni policiji telefonom.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika OTP presretanja" data-en="How it works: OTP interception mechanics">Kako generalno radi: mehanika OTP presretanja</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gradi pritisak za otkrivanje koda" data-en="What creates pressure to reveal the code">Šta gradi pritisak za otkrivanje koda</div>
          <ul class="bullets">
            <li data-sr="lažni bankovni agent zove i kaže 'šalje vam kod za poništavanje sumnjive transakcije — recite mi ga„." data-en="fake bank agent calls and says “sending you a code to cancel a suspicious transaction — tell me it'">lažni bankovni agent zove i kaže 'šalje vam kod za poništavanje sumnjive transakcije — recite mi ga'.</li>
            <li data-sr="hitnost: 'imate 30 sekundi dok kod važi — recite ga odmah„." data-en="urgency: “you have 30 seconds while the code is valid — say it immediately'">hitnost: 'imate 30 sekundi dok kod važi — recite ga odmah'.</li>
            <li data-sr="phishing stranica koja oponaša bankovni login prikuplja podatke i prosljeđuje OTP u realnom vremenu napadaču." data-en="phishing page imitating bank login collects data and forwards OTP in real-time to the attacker.">phishing stranica koja oponaša bankovni login prikuplja podatke i prosljeđuje OTP u realnom vremenu napadaču.</li>
            <li data-sr="SMS koji kaže 'verificirajte vaš identitet klikom ovde„ vodi na OTP harvesting stranicu." data-en="SMS saying “verify your identity by clicking here' leads to an OTP harvesting page.">SMS koji kaže 'verificirajte vaš identitet klikom ovde' vodi na OTP harvesting stranicu.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Šta napadač radi s OTP-om" data-en="What the attacker does with the OTP">Šta napadač radi s OTP-om</div>
          <ul class="bullets">
            <li data-sr="autorizuje transakciju koju je prethodno uneo u bankovni sistem žrtve." data-en="authorizes a transaction previously entered into the victim's banking system.">autorizuje transakciju koju je prethodno uneo u bankovni sistem žrtve.</li>
            <li data-sr="resetuje lozinku za bankovni ili imejl nalog i preuzima kontrolu." data-en="resets the password for the bank or email account and takes control.">resetuje lozinku za bankovni ili imejl nalog i preuzima kontrolu.</li>
            <li data-sr="dodaje novi uređaj ili novi primalac plaćanja koji se ne može uočiti dok istraga ne počne." data-en="adds a new device or new payment recipient that won't be noticed until an investigation begins.">dodaje novi uređaj ili novi primalac plaćanja koji se ne može uočiti dok istraga ne počne.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)." data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Prikupljanje podataka kartice ili naloga" data-en="Phase 1 — Collecting card or account data">Faza 1 — Prikupljanje podataka kartice ili naloga</h3>
        <p data-sr="Napadač prethodno pribavlja podatke kartice ili bankovnog naloga — phishingom, curenjima ili direktnom kupovinom. OTP je poslednja linija odbrane; napadač je ima i unapred planira kako da dobije kod." data-en="The attacker previously obtains card or bank account data — through phishing, breaches, or direct purchase. OTP is the last line of defense; the attacker has everything else and plans in advance how to get the code.">Napadač ima sve osim OTP-a — phishing ili curenje su dali ostale podatke. OTP je poslednja prepreka.</p>
        <ul class="bullets">
          <li data-sr="signal: neočekivani SMS s OTP kodom koji vi niste inicirali znači da neko već ima vaše podatke." data-en="signal: an unexpected SMS with an OTP code you did not initiate means someone already has your data.">signal: neočekivani SMS s OTP kodom koji vi niste inicirali znači da neko već ima vaše podatke.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> napadač pokušava transakciju i čeka OTP kod koji mora biti otkriven u sekundi." data-en="<strong>Threshold:</strong> the attacker attempts a transaction and waits for an OTP code that must be revealed within seconds."><strong>Prag faze:</strong> napadač pokušava transakciju i čeka OTP kod koji mora biti otkriven u sekundi.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Socijalni inženjering ili phishing proxy za OTP" data-en="Phase 2 — Social engineering or phishing proxy for OTP">Faza 2 — Socijalni inženjering ili phishing proxy za OTP</h3>
        <p data-sr="Napadač zove žrtvu (ili vodi je kroz fišing stranicu) i traži kod koji je upravo stigao. Tempo je kritičan — napadač drži transakciju otvorenom i pritiska žrtvu da odmah kaže kod pre nego istekne." data-en="The attacker calls the victim (or leads them through a phishing page) and requests the code that just arrived. Timing is critical — the attacker keeps the transaction open and pressures the victim to immediately provide the code before it expires.">Napadač traži kod koji je upravo stigao. Tempo je ključan — kod ističe za sekunde ili minute.</p>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="sim-swap.html" data-sr="SIM swap (zamena SIM kartice)" data-en="SIM swap fraud">SIM swap (zamena SIM kartice)</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
            <li><a href="bank-impersonation.html" data-sr="Lažna banka (bankovni prevarant)" data-en="Bank impersonation scam">Lažna banka (bankovni prevarant)</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> žrtva kaže OTP kod — transakcija je autorizovana i gotovo nemoguće je zaustaviti." data-en="<strong>Threshold:</strong> the victim says the OTP code — the transaction is authorized and nearly impossible to stop."><strong>Prag faze:</strong> žrtva kaže OTP kod — transakcija je autorizovana i gotovo nemoguće je zaustaviti.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="imate OTP kod koji niste sami tražili i neko vam telefonom traži da ga kažete." data-en="you have an OTP code you did not request and someone on the phone asks you to say it.">imate OTP kod koji niste sami tražili i neko vam telefonom traži da ga kažete.</li>
        <li data-sr="SMS kaže 'kod za poništavanje sumnjive transakcije„ — OTP uvek autorizuje, nikad ne poništava." data-en="SMS says “code to cancel a suspicious transaction' — OTP always authorizes, never cancels.">SMS kaže 'kod za poništavanje sumnjive transakcije' — OTP uvek autorizuje, nikad ne poništava.</li>
        <li data-sr="hitnost 'recite odmah, kod ističe za 30 sekundi„ koja onemogućava razmišljanje." data-en="urgency “say it immediately, code expires in 30 seconds' that prevents thinking.">hitnost 'recite odmah, kod ističe za 30 sekundi' koja onemogućava razmišljanje.</li>
        <li data-sr="phishing stranica traži unos OTP koda koji ste upravo primili." data-en="phishing page requests entry of an OTP code you just received.">phishing stranica traži unos OTP koda koji ste upravo primili.</li>
        <li data-sr="neočekivani OTP kod stigao bez vaše akcije — neko drugi je pokrenuo transakciju na vašim podacima." data-en="unexpected OTP code arrived without your action — someone else initiated a transaction using your data.">neočekivani OTP kod stigao bez vaše akcije — neko drugi je pokrenuo transakciju na vašim podacima.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 10 pitanja pre davanja ikakvih kodova" data-en="Checklist: 10 questions before giving any codes">Checklista: 10 pitanja pre davanja ikakvih kodova</h2>
      <ul class="bullets">
        <li data-sr="Da li sam ja inicirao akciju za koju je ovaj kod?" data-en="Did I initiate the action this code is for?">Da li sam ja inicirao akciju za koju je ovaj kod?</li>
        <li data-sr="Da li banka ili ijedan legitiman servis ikad traži kod koji sam primio — telefonom?" data-en="Does a bank or any legitimate service ever ask for a code I received — by phone?">Da li banka ili ijedan legitiman servis ikad traži kod koji sam primio — telefonom?</li>
        <li data-sr="Da li SMS kod ima tekst koji opisuje transakciju — i da li se taj iznos ili primalac razlikuje od mog?" data-en="Does the SMS code have text describing a transaction — and does that amount or recipient differ from mine?">Da li SMS kod ima tekst koji opisuje transakciju — i da li se taj iznos ili primalac razlikuje od mog?</li>
        <li data-sr="Da li postoji hitnost koja mi smanjuje vreme za razmišljanje o tome ko traži kod?" data-en="Is there urgency reducing my time to think about who is requesting the code?">Da li postoji hitnost koja mi smanjuje vreme za razmišljanje o tome ko traži kod?</li>
        <li data-sr="Da li sam kliknuo/lažna link pre nego što je kod stigao?" data-en="Did I click a link before the code arrived?">Da li sam kliknuo/lažna link pre nego što je kod stigao?</li>
        <li data-sr="Da li kod koji sam dobio opisuje transakciju u bankovnoj aplikaciji koja se slaže s onim što radim?" data-en="Does the code I received describe a transaction in my banking app matching what I am doing?">Da li kod koji sam dobio opisuje transakciju u bankovnoj aplikaciji koja se slaže s onim što radim?</li>
        <li data-sr="Da li bih rekao/la ovaj kod porodičnom članu da proveri je li to legitimno?" data-en="Would I tell a family member this code to verify if it is legitimate?">Da li bih rekao/la ovaj kod porodičnom članu da proveri je li to legitimno?</li>
        <li data-sr="Da li je moguće spustiti slušalicu, pričekati minut i nazvati banku direktno?" data-en="Is it possible to hang up, wait a minute, and call the bank directly?">Da li je moguće spustiti slušalicu, pričekati minut i nazvati banku direktno?</li>
        <li data-sr="Da li koristim autentifikator aplikaciju za ovaj servis umesto SMS 2FA?" data-en="Am I using an authenticator app for this service instead of SMS 2FA?">Da li koristim autentifikator aplikaciju za ovaj servis umesto SMS 2FA?</li>
        <li data-sr="Da li je sledeća akcija u bankovnoj aplikaciji ona koju ja pokrećem ili ona koja se dešava bez mene?" data-en="Is the next action in the banking app one I am initiating or one happening without me?">Da li je sledeća akcija u bankovnoj aplikaciji ona koju ja pokrećem ili ona koja se dešava bez mene?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="ne otkrivajte kod — spustite slušalicu ili zatvorite phishing stranicu odmah." data-en="do not reveal the code — hang up or close the phishing page immediately.">ne otkrivajte kod — spustite slušalicu ili zatvorite phishing stranicu odmah.</li>
        <li data-sr="proverite bankovnu aplikaciju direktno — da li postoji transakcija u toku koju vi niste inicirali?" data-en="check the banking app directly — is there an in-progress transaction you did not initiate?">proverite bankovnu aplikaciju direktno — da li postoji transakcija u toku koju vi niste inicirali?</li>
        <li data-sr="ako ste otkrili OTP kod, odmah nazovite banku i tražite blokadu transakcije." data-en="if you revealed the OTP code, immediately call the bank and request transaction blocking.">ako ste otkrili OTP kod, odmah nazovite banku i tražite blokadu transakcije.</li>
        <li data-sr="promenite lozinku za bankovni nalog sa uređaja koji nije kompromitovan." data-en="change your banking password from a device that is not compromised.">promenite lozinku za bankovni nalog sa uređaja koji nije kompromitovan.</li>
        <li data-sr="prijavite incident banci i policiji s opisom broja koji je zvao ili linka phishing stranice." data-en="report the incident to the bank and police with the calling number or phishing page link.">prijavite incident banci i policiji s opisom broja koji je zvao ili linka phishing stranice.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si ti inicirao/la akciju za koju je kod stigao?" data-en="Did you initiate the action the code arrived for?">Da li si ti inicirao/la akciju za koju je kod stigao?</li>
            <li data-sr="Da li je neko telefonom tražio da mu kažeš taj kod?" data-en="Did someone ask by phone for you to tell them the code?">Da li je neko telefonom tražio da mu kažeš taj kod?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="OTP kod koji nisi sam/a tražio/lažne govoriš nikome — ni banci ni policiji telefonom." data-en="An OTP code you did not request yourself is never shared with anyone — not even the bank or police by phone.">OTP kod koji nisi sam/a tražio/lažne govoriš nikome — ni banci ni policiji telefonom.</li>
            <li data-sr="Hajde zajedno da proverimo bankovnu aplikaciju direktno i vidimo da li postoji sumnjiva transakcija." data-en="Let's check the banking app directly together and see if there is a suspicious transaction.">Hajde zajedno da proverimo bankovnu aplikaciju direktno i vidimo da li postoji sumnjiva transakcija.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card sources" id="sources">
      <h2 data-sr="Povezane prevare" data-en="Related scams">Povezane prevare</h2>
      <ul class="bullets">
        <li><a href="bank-impersonation.html" data-sr="Lažna banka (bankovni prevarant)" data-en="Bank impersonation scam">Lažna banka (bankovni prevarant)</a></li>
        <li><a href="safe-account-scam.html" data-sr="Prevara sa „bezbednim nalogom„" data-en="Safe account scam">Prevara sa „bezbednim nalogom„</a></li>
        <li><a href="sim-swap.html" data-sr="SIM swap (zamena SIM kartice)" data-en="SIM swap fraud">SIM swap (zamena SIM kartice)</a></li>
        <li><a href="port-out-scam.html" data-sr="Port-out prevara (prenos broja)" data-en="Port-out scam">Port-out prevara (prenos broja)</a></li>


        <li><a href="vishing.html" data-sr="Višing" data-en="Višing">Višing</a></li>
        <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
      </ul>
    </section>
  `
};
