window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["bank-impersonation"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi lažna banka" data-en="Introduction: how bank impersonation works">Uvod: kako radi lažna banka</h2>
      <p data-sr="Bankovni prevarant zove ili piše žrtvi lažno se predstavljajući kao odeljenje za bezbednost banke. Navodi incident koji zahteva hitnu reakciju. Hitnost i autoritet institucije isključuju kritičko razmišljanje." data-en="A bank impersonator calls or messages the victim pretending to be from the bank's security or fraud detection department. An incident is cited — a suspicious transaction, attempted breach, compromised card — requiring immediate action. Urgency and institutional authority together disable critical thinking.">Bankovni prevarant zove ili piše žrtvi lažno se predstavljajući kao odeljenje za bezbednost banke. Navodi incident koji zahteva hitnu reakciju. Hitnost i autoritet institucije isključuju kritičko razmišljanje.</p>
      <p data-sr="Čim žrtva prihvati da je račun ugrožen, sve instrukcije deluju logično. Svaki korak koji deluje kao rešenje je zapravo faza prevare." data-en="Once the victim accepts the premise — that their account is compromised — all subsequent instructions seem logical: change the password, confirm a transaction, transfer to a safe account, hand the card to a courier. Each step feels like a solution; each step is a phase of the fraud.">Čim žrtva prihvati da je račun ugrožen, sve instrukcije deluju logično. Svaki korak koji deluje kao rešenje je zapravo faza prevare.</p>
      <div class="callout" data-sr="<strong>Model:</strong> poziv → lažni bankarski agent → incident na računu → hitna akcija → transfer novca / OTP kod / kartica → grananje u drugu prevaru." data-en="<strong>Model:</strong> call → fake bank agent → account incident → urgent action → money transfer / OTP code / card → branching into another scam."><strong>Model:</strong> poziv → lažni bankarski agent → incident na računu → hitna akcija → transfer novca / OTP kod / kartica → grananje u drugu prevaru.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> banka nikad ne traži da sami prebacite novac ili otkrijete OTP kod telefonom." data-en="<strong>Threshold:</strong> a bank will never ask you to transfer money yourself or reveal an OTP code over the phone."><strong>Prag:</strong> banka nikad ne traži da sami prebacite novac ili otkrijete OTP kod telefonom.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika bankovne prevare" data-en="How it works: bank fraud mechanics">Kako generalno radi: mehanika bankovne prevare</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gradi autoritet i hitnost" data-en="What builds authority and urgency">Šta gradi autoritet i hitnost</div>
          <ul class="bullets">
            <li data-sr="broj telefona koji prikazuje ime banke (spoofing) ili broj koji zvuči zvanično." data-en="phone number displaying the bank's name (spoofing) or a number that sounds official.">broj telefona koji prikazuje ime banke (spoofing) ili broj koji zvuči zvanično.</li>
            <li data-sr="agent navodi parcijalne podatke o žrtvi (ime, adresa, poslednje 4 cifre kartice) radi verodostojnosti." data-en="agent cites partial victim data (name, address, last 4 card digits) for credibility.">agent navodi parcijalne podatke o žrtvi (ime, adresa, poslednje 4 cifre kartice) radi verodostojnosti.</li>
            <li data-sr="broj slučaja ili referentni kod koji zvuči formalno ali ne može se proveriti." data-en="case number or reference code that sounds formal but cannot be verified.">broj slučaja ili referentni kod koji zvuči formalno ali ne može se proveriti.</li>
            <li data-sr="vremenski rok — imate 30 minuta da zaštitite sredstva — koji onemogućava proveru." data-en="time deadline — you have 30 minutes to protect your funds — that prevents verification.">vremenski rok — imate 30 minuta da zaštitite sredstva — koji onemogućava proveru.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Kako se uvodi novac ili radnja" data-en="How money or action is introduced">Kako se uvodi novac ili radnja</div>
          <ul class="bullets">
            <li data-sr="transfer na 'bezbedni nalog' koji kontrolišu prevaranti, uz garantovani povrat." data-en="transfer to a safe account' the fraudsters control, with a promised return.">transfer na 'bezbedni nalog' koji kontrolišu prevaranti, uz garantovani povrat.</li>
            <li data-sr="otkrivanje OTP koda koji napadač odmah koristi za autorizaciju transakcije." data-en="revealing an OTP code the attacker immediately uses to authorize a transaction.">otkrivanje OTP koda koji napadač odmah koristi za autorizaciju transakcije.</li>
            <li data-sr="predaja kartice kuriru uz traženje PIN-a radi 'deaktiviranja kompromitovane kartice'." data-en="handing the card to a courier while PIN is requested to deactivate the compromised card'.">predaja kartice kuriru uz traženje PIN-a radi 'deaktiviranja kompromitovane kartice'.</li>
            <li data-sr="klik na link radi 'potvrde identiteta' koji instalira malver ili krade podatke." data-en="clicking a link to confirm identity' that installs malware or steals credentials.">klik na link radi 'potvrde identiteta' koji instalira malver ili krade podatke.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)" data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>
      <p class="muted" data-sr="Šta meta vidi, šta se traži, koji signali upozoravaju i gde se grananje u druge prevare aktivira." data-en="What the target sees, what is demanded, which signals warn, and where branching into other scams activates.">Šta meta vidi, šta se traži, koji signali upozoravaju i gde se grananje u druge prevare aktivira.</p>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Inicijalni kontakt i uspostavljanje autoriteta" data-en="Phase 1 — Initial contact and authority establishment">Faza 1 — Inicijalni kontakt i uspostavljanje autoriteta</h3>
        <p data-sr="Žrtva prima poziv koji izgleda kao da dolazi od banke. Napadač se identifikuje i navodi sumnjiva aktivnost kao razlog." data-en="The victim receives a call, message, or email appearing to come from the bank. The attacker identifies by name and department, cites the reason for contact (suspicious activity), and requests identity confirmation before they can 'help'.">Žrtva prima poziv koji izgleda kao da dolazi od banke. Napadač se identifikuje i navodi sumnjiva aktivnost kao razlog.</p>
        <ul class="bullets">
          <li data-sr="signal: ID pozivaoca prikazuje ime banke — telefonski spoofing je trivijalan i ne potvrđuje identitet." data-en="signal: caller ID shows the bank's name — phone spoofing is trivial and does not confirm identity.">signal: ID pozivaoca prikazuje ime banke — telefonski spoofing je trivijalan i ne potvrđuje identitet.</li>
          <li data-sr="signal: agent traži da se potvrdi identitet davanjem ličnih podataka pre nego objasni problem." data-en="signal: agent asks to 'confirm identity' by providing personal data before explaining the problem.">signal: agent traži da se potvrdi identitet davanjem ličnih podataka pre nego objasni problem.</li>
          <li data-sr="signal: poziv dolazi neočekivano i odmah uvodi osećaj ugroženosti." data-en="signal: call arrives unexpectedly and immediately introduces a sense of threat.">signal: poziv dolazi neočekivano i odmah uvodi osećaj ugroženosti.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> žrtva veruje da razgovara s bankom i prihvata premisu da je račun ugrožen." data-en="<strong>Threshold:</strong> the victim believes they are speaking to the bank and accepts the premise that the account is compromised."><strong>Prag faze:</strong> žrtva veruje da razgovara s bankom i prihvata premisu da je račun ugrožen.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Eskalacija pretnje i izgradnja urgentnosti" data-en="Phase 2 — Threat escalation and urgency building">Faza 2 — Eskalacija pretnje i izgradnja urgentnosti</h3>
        <p data-sr="Agent opisuje konkretnu pretnju i uvodi vremenski rok. Žrtva se instruira da ne prekida vezu." data-en="The agent describes a specific threat — a transaction of X amount, access attempt from abroad, a compromised card. A time deadline is introduced. The victim is instructed not to hang up or contact anyone as that would 'compromise the investigation'.">Agent opisuje konkretnu pretnju i uvodi vremenski rok. Žrtva se instruira da ne prekida vezu.</p>
        <ul class="bullets">
          <li data-sr="signal: ne spuštajte slušalicu i ne kontaktirajte nikoga su klasične taktike izolacije." data-en="signal: 'don't hang up' and 'don't contact anyone' are classic isolation tactics.">signal: ne spuštajte slušalicu i ne kontaktirajte nikoga su klasične taktike izolacije.</li>
          <li data-sr="signal: iznos navodne sumnjive transakcije precizno odgovara stvarnom stanju na računu žrtve." data-en="signal: the alleged suspicious transaction amount precisely matches the victim's actual account balance.">signal: iznos navodne sumnjive transakcije precizno odgovara stvarnom stanju na računu žrtve.</li>
          <li data-sr="signal: agent nudi da ostane na liniji dok žrtva izvršava akciju." data-en="signal: agent offers to 'stay on the line' while the victim takes action.">signal: agent nudi da ostane na liniji dok žrtva izvršava akciju.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> žrtva pristaje na izolaciju od porodice i provere, a sledeće akcije vrši pod nadzorom agenta." data-en="<strong>Threshold:</strong> the victim agrees to isolation from family and verification, and takes subsequent actions under the agent's supervision."><strong>Prag faze:</strong> žrtva pristaje na izolaciju od porodice i provere, a sledeće akcije vrši pod nadzorom agenta.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Zahtev za transferom, OTP-om ili karticom" data-en="Phase 3 — Transfer, OTP, or card demand">Faza 3 — Zahtev za transferom, OTP-om ili karticom</h3>
        <p data-sr="Konkretan zahtev: transfer, OTP ili kartica. Svaki je predstavljen kao jedina zaštitna mera." data-en="A concrete demand arrives: transfer money to a 'safe account', reveal an OTP code to 'cancel' a transaction, or allow a courier to collect the card. Each demand is framed as the only protective option.">Konkretan zahtev: transfer, OTP ili kartica. Svaki je predstavljen kao jedina zaštitna mera.</p>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="safe-account-scam.html" data-sr="Prevara sa 'bezbednim nalogom'" data-en="Safe account scam">Prevara sa 'bezbednim nalogom'</a></li>
            <li><a href="courier-fraud.html" data-sr="Kurirska prevara" data-en="Courier fraud">Kurirska prevara</a></li>
            <li><a href="otp-interception.html" data-sr="Presretanje OTP koda" data-en="OTP interception">Presretanje OTP koda</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> svaki od ovih zahteva je direktan pokazatelj prevare — banka nikad ne traži nijednu od ovih radnji telefonom." data-en="<strong>Threshold:</strong> each of these demands is a direct indicator of fraud — a bank never requests any of these actions over the phone."><strong>Prag faze:</strong> svaki od ovih zahteva je direktan pokazatelj prevare — banka nikad ne traži nijednu od ovih radnji telefonom.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Žrtva izvršava instrukcije" data-en="Phase 4 — Victim executes instructions">Faza 4 — Žrtva izvršava instrukcije</h3>
        <p data-sr="Žrtva pod pritiskom izvršava instrukcije. Napadač ostaje na liniji i vodi svaki korak." data-en="The victim, under the influence of urgency and false authority, transfers money, reveals the code, or hands over the card. The attacker remains on the line throughout, guiding each step and preventing the victim from pausing to think.">Žrtva pod pritiskom izvršava instrukcije. Napadač ostaje na liniji i vodi svaki korak.</p>
        <ul class="bullets">
          <li data-sr="signal: upozorenja bankovne aplikacije o neuobičajenoj transakciji su realna upozorenja koja treba čitati." data-en="signal: banking app warnings about 'unusual transactions' are real warnings that should be read.">signal: upozorenja bankovne aplikacije o neuobičajenoj transakciji su realna upozorenja koja treba čitati.</li>
          <li data-sr="signal: agent kaže da ignorišete upozorenja jer je to 'deo procedure zaštite'." data-en="signal: agent says to ignore warnings because they are part of the protection procedure'.">signal: agent kaže da ignorišete upozorenja jer je to 'deo procedure zaštite'.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> čim su sredstva prebačena, kartica preuzeta ili OTP otkriven, gubitak je gotovo nemoguće zaustaviti." data-en="<strong>Threshold:</strong> once funds are transferred, the card collected, or OTP revealed, the loss is nearly impossible to stop."><strong>Prag faze:</strong> čim su sredstva prebačena, kartica preuzeta ili OTP otkriven, gubitak je gotovo nemoguće zaustaviti.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 5 — Nestanak i talas prevare povraćaja" data-en="Phase 5 — Disappearance and recovery wave">Faza 5 — Nestanak i talas prevare povraćaja</h3>
        <p data-sr="Napadač nestaje. Može slediti talas prevare povraćaja koji cilja iste žrtve uz obećanje povraćaja novca." data-en="The attacker cuts contact. In some cases a recovery scheme follows: a new contact claims they can recover the lost money for a fee. This phase comes from a different source but targets the same victims.">Napadač nestaje. Može slediti talas prevare povraćaja koji cilja iste žrtve uz obećanje povraćaja novca.</p>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li>Recovery šema — žrtve bankovnih prevara su česta meta novih prevaranata koji nude povraćaj novca.</li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> žrtva koja pristane na recovery šemu gubi dodatna sredstva." data-en="<strong>Threshold:</strong> a victim who accepts a recovery scheme loses additional funds."><strong>Prag faze:</strong> žrtva koja pristane na recovery šemu gubi dodatna sredstva.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="poziv dolazi od broja koji prikazuje ime vaše banke — spoofing je jednostavan i ne dokazuje identitet." data-en="call comes from a number displaying your bank's name — spoofing is easy and proves nothing.">poziv dolazi od broja koji prikazuje ime vaše banke — spoofing je jednostavan i ne dokazuje identitet.</li>
        <li data-sr="agent traži potvrdu ličnih podataka pre nego objasni razlog poziva." data-en="agent requests personal data confirmation before explaining the reason for the call.">agent traži potvrdu ličnih podataka pre nego objasni razlog poziva.</li>
        <li data-sr="ne spuštajte slušalicu i ne kontaktirajte nikoga — klasična izolaciona taktika." data-en="'do not hang up' and 'do not contact anyone' — classic isolation tactic.">ne spuštajte slušalicu i ne kontaktirajte nikoga — klasična izolaciona taktika.</li>
        <li data-sr="traži se transfer novca, otkrivanje OTP-a ili predaja kartice telefonom." data-en="transfer of money, revealing an OTP, or card handover is requested over the phone.">traži se transfer novca, otkrivanje OTP-a ili predaja kartice telefonom.</li>
        <li data-sr="agent ostaje na liniji dok vi obavljate bankarsku transakciju." data-en="agent stays on the line while you perform a banking transaction.">agent ostaje na liniji dok vi obavljate bankarsku transakciju.</li>
        <li data-sr="upozorenja bankovne aplikacije se objašnjavaju kao 'normalan deo procedure'." data-en="banking app warnings are explained as a normal part of the procedure'.">upozorenja bankovne aplikacije se objašnjavaju kao 'normalan deo procedure'.</li>
        <li data-sr="vremenski pritisak — 'imate X minuta' — sprečava samostalnu proveru." data-en="time pressure — you have X minutes — prevents independent verification.">vremenski pritisak — 'imate X minuta' — sprečava samostalnu proveru.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera pre bilo kakve akcije" data-en="Checks: 8 quick checks before any action">Provere: 8 brzih provera pre bilo kakve akcije</h2>
      <ul class="bullets">
        <li data-sr="spustite slušalicu i pozovite banku na broju s poleđine kartice ili sa zvaničnog sajta." data-en="hang up and call the bank at the number on the back of your card or from the official website.">spustite slušalicu i pozovite banku na broju s poleđine kartice ili sa zvaničnog sajta.</li>
        <li data-sr="proverite da li postoji sumnjiva transakcija u bankovnoj aplikaciji bez da ikoga pitate." data-en="check whether a suspicious transaction exists in your banking app without asking anyone.">proverite da li postoji sumnjiva transakcija u bankovnoj aplikaciji bez da ikoga pitate.</li>
        <li data-sr="pitajte porodicu ili prijatelja — prevarant tvrdi da ne smete, zato to trebate uraditi." data-en="ask a family member or friend — the fraudster says you must not, which is exactly why you should.">pitajte porodicu ili prijatelja — prevarant tvrdi da ne smete, zato to trebate uraditi.</li>
        <li data-sr="nikad ne otkrivajte OTP kod koji niste sami tražili, ni banci ni policiji telefonom." data-en="never reveal an OTP code you did not request yourself, not even to a bank or police over the phone.">nikad ne otkrivajte OTP kod koji niste sami tražili, ni banci ni policiji telefonom.</li>
        <li data-sr="banka nikad ne šalje kurira po karticu — odgovorite odmah da to nije moguće." data-en="a bank never sends a courier for a card — respond immediately that this is not possible.">banka nikad ne šalje kurira po karticu — odgovorite odmah da to nije moguće.</li>
        <li data-sr="proverite broj poziva na zvaničnom sajtu banke — ne na Googleu, jer spoofing i rezultati pretrage mogu zbuniti." data-en="verify the calling number on the bank's official website — not Google, as spoofing and search results can mislead.">proverite broj poziva na zvaničnom sajtu banke — ne na Googleu, jer spoofing i rezultati pretrage mogu zbuniti.</li>
        <li data-sr="legitimna banka ne zahteva hitnost koja isključuje mogućnost provere." data-en="a legitimate bank does not require urgency that rules out the possibility of verification.">legitimna banka ne zahteva hitnost koja isključuje mogućnost provere.</li>
        <li data-sr="ako agent kaže 'ne smete govoriti o ovome' — to je definitivan pokazatelj prevare." data-en="if the agent says you must not talk about this' — that is a definitive sign of fraud.">ako agent kaže 'ne smete govoriti o ovome' — to je definitivan pokazatelj prevare.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja pre transakcije ili predaje informacija" data-en="Checklist: 12 questions before any transaction or information handover">Checklista: 12 pitanja pre transakcije ili predaje informacija</h2>
      <ul class="bullets">
        <li data-sr="Da li sam ja inicirao ovaj kontakt ili je poziv/poruka stigla neočekivano?" data-en="Did I initiate this contact or did the call/message arrive unexpectedly?">Da li sam ja inicirao ovaj kontakt ili je poziv/poruka stigla neočekivano?</li>
        <li data-sr="Da li agent traži da ne spuštam slušalicu i ne kontaktiram nikoga?" data-en="Is the agent asking me not to hang up and not to contact anyone?">Da li agent traži da ne spuštam slušalicu i ne kontaktiram nikoga?</li>
        <li data-sr="Da li postoji vremenski pritisak koji sprečava samostalnu proveru?" data-en="Is there a time pressure that prevents independent verification?">Da li postoji vremenski pritisak koji sprečava samostalnu proveru?</li>
        <li data-sr="Da li bi pozivanje banke na broju s poleđine kartice razrešilo situaciju?" data-en="Would calling the bank at the number on the back of my card resolve the situation?">Da li bi pozivanje banke na broju s poleđine kartice razrešilo situaciju?</li>
        <li data-sr="Da li se od mene traži OTP kod koji nisam sam inicirao?" data-en="Am I being asked for an OTP code that I did not initiate?">Da li se od mene traži OTP kod koji nisam sam inicirao?</li>
        <li data-sr="Da li se traži transfer na novi nalog koji niko prethodno nije pomenuo?" data-en="Is a transfer to a new account being requested, one nobody mentioned previously?">Da li se traži transfer na novi nalog koji niko prethodno nije pomenuo?</li>
        <li data-sr="Da li dolazi kurir po karticu — nešto što legitimna banka nikad ne radi?" data-en="Is a courier coming for the card — something a legitimate bank never does?">Da li dolazi kurir po karticu — nešto što legitimna banka nikad ne radi?</li>
        <li data-sr="Da li agent traži da ignorišem upozorenja u bankovnoj aplikaciji?" data-en="Is the agent asking me to ignore warnings in my banking app?">Da li agent traži da ignorišem upozorenja u bankovnoj aplikaciji?</li>
        <li data-sr="Da li postoji sumnjiva transakcija u mojoj bankovnoj aplikaciji — nezavisno od poziva?" data-en="Is there a suspicious transaction in my banking app — independent of this call?">Da li postoji sumnjiva transakcija u mojoj bankovnoj aplikaciji — nezavisno od poziva?</li>
        <li data-sr="Da li bi pauziranje od 30 minuta i poziv bliskoj osobi razrešili sumnju?" data-en="Would pausing for 30 minutes and calling someone close resolve the doubt?">Da li bi pauziranje od 30 minuta i poziv bliskoj osobi razrešili sumnju?</li>
        <li data-sr="Da li se od mene traži gotovina, kupovina vaučera ili kriptovaluta za 'zaštitu' računa?" data-en="Am I being asked for cash, vouchers, or cryptocurrency to protect my account?">Da li se od mene traži gotovina, kupovina vaučera ili kriptovaluta za 'zaštitu' računa?</li>
        <li data-sr="Da li agent kaže da je ovo 'tajna istraga' u kojoj ne smem govoriti porodici?" data-en="Is the agent saying this is a secret investigation' that I must not discuss with family?">Da li agent kaže da je ovo 'tajna istraga' u kojoj ne smem govoriti porodici?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="prekinite poziv odmah — spustite slušalicu i ostavite telefon na stolu na minut." data-en="end the call immediately — hang up and put the phone on the table for a minute.">prekinite poziv odmah — spustite slušalicu i ostavite telefon na stolu na minut.</li>
        <li data-sr="pozovite banku na broju s poleđine kartice ili s njenog zvaničnog sajta i pitajte direktno." data-en="call the bank at the number on the back of your card or from its official website and ask directly.">pozovite banku na broju s poleđine kartice ili s njenog zvaničnog sajta i pitajte direktno.</li>
        <li data-sr="ako ste otkrili OTP, odmah kontaktirajte banku radi blokade i prijave." data-en="if you revealed an OTP, contact the bank immediately for blocking and reporting.">ako ste otkrili OTP, odmah kontaktirajte banku radi blokade i prijave.</li>
        <li data-sr="ako ste izvršili transfer, odmah kontaktirajte banku radi zahteva za povratom sredstava." data-en="if you made a transfer, contact the bank immediately to request a recall of funds.">ako ste izvršili transfer, odmah kontaktirajte banku radi zahteva za povratom sredstava.</li>
        <li data-sr="ako ste predali karticu kuriru, odmah blokirajte karticu putem aplikacije ili poziva banci." data-en="if you handed the card to a courier, immediately block the card via app or by calling the bank.">ako ste predali karticu kuriru, odmah blokirajte karticu putem aplikacije ili poziva banci.</li>
        <li data-sr="prijavite incident policiji i sačuvajte sve zapise poziva, poruka i transakcija." data-en="report the incident to police and preserve all records of calls, messages, and transactions.">prijavite incident policiji i sačuvajte sve zapise poziva, poruka i transakcija.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li te je banka tražila da ne razgovaraš ni s kim o ovome?" data-en="Did the bank ask you not to talk to anyone about this?">Da li te je banka tražila da ne razgovaraš ni s kim o ovome?</li>
            <li data-sr="Da li agent ostaje na liniji dok obavljaš transakciju?" data-en="Does the agent stay on the line while you complete the transaction?">Da li agent ostaje na liniji dok obavljaš transakciju?</li>
            <li data-sr="Da li si sam/a pozvao/la banku ili je banka pozvala tebe?" data-en="Did you call the bank or did the bank call you?">Da li si sam/a pozvao/la banku ili je banka pozvala tebe?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Banka nikad ne traži da sami prebacite novac ili otkrijete OTP — to rade samo prevaranti." data-en="A bank never asks you to transfer money yourself or reveal an OTP — only fraudsters do that.">Banka nikad ne traži da sami prebacite novac ili otkrijete OTP — to rade samo prevaranti.</li>
            <li data-sr="Hajde da zajedno pozovemo banku na broju s poleđine kartice i proverimo." data-en="Let's call the bank together using the number on the back of the card and check.">Hajde da zajedno pozovemo banku na broju s poleđine kartice i proverimo.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
