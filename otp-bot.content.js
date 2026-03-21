window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["otp-bot"] = {
  raw_html: `

    <section class="card">
      <h2 data-sr="Uvod: OTP bot i automatizovani poziv" data-en="Introduction: OTP bots and automated calls">Uvod: OTP bot i automatizovani poziv</h2>

      <p data-sr="OTP bot je skriptovani ili polu-automatski tok koji vas zove ili piše i traži jednokratni kod iz SMS-a ili aplikacije. Napadač u isto vreme pokušava prijavu ili plaćanje na vaš nalog." data-en="An OTP bot is a scripted or semi-automated flow that calls or messages you and asks for a one-time code from SMS or an app. At the same time, the attacker tries sign-in or payment on your account.">OTP bot je skriptovani ili polu-automatski tok koji vas zove ili piše i traži jednokratni kod iz SMS-a ili aplikacije. Napadač u isto vreme pokušava prijavu ili plaćanje na vaš nalog.</p>
      <p data-sr="Zvuči kao banka, kurir ili bezbednosni centar, ali pravo pravilo je da niko legitiman nikada ne traži ceo kod telefonom." data-en="It may sound like a bank, courier, or security center, but the real rule is that no legitimate party ever asks for the full code by phone.">Zvuči kao banka, kurir ili bezbednosni centar, ali pravo pravilo je da niko legitiman nikada ne traži ceo kod telefonom.</p>
      <div class="callout" data-sr="<strong>Model:</strong> poziv ili chat → meni → prag (OTP) → paralelna prijava ili uplata → šteta." data-en="<strong>Model:</strong> call or chat → menu → threshold (OTP) → parallel sign-in or payment → loss."><strong>Model:</strong> poziv ili chat → meni → prag (OTP) → paralelna prijava ili uplata → šteta.</div>
    </section>

    <section class="card">
      <h2 data-sr="Zašto bot prolazi" data-en="Why the bot works">Zašto bot prolazi</h2>

      <p data-sr="Ljudi su navikli na automate za kartice i podršku. Bot kopira taj osećaj i skraćuje vreme za razmišljanje." data-en="People are used to card and support IVR systems. The bot copies that feeling and shortens thinking time.">Ljudi su navikli na automate za kartice i podršku. Bot kopira taj osećaj i skraćuje vreme za razmišljanje.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Signali" data-en="Signals">Signali</div>
          <ul class="bullets">
            <li data-sr="Robotski glas ili previše savršen tekst." data-en="Robotic voice or overly perfect text.">Robotski glas ili previše savršen tekst.</li>
            <li data-sr="Zahtev za tačan redosled cifara." data-en="Demand for the exact digit order.">Zahtev za tačan redosled cifara.</li>
            <li data-sr="Kratki rok i pretnja blokadom." data-en="Short deadline and lock threat.">Kratki rok i pretnja blokadom.</li>
            <li data-sr="Poziv dolazi baš kada ste očekivali paket ili uplatu." data-en="The call arrives when you expected a parcel or payment.">Poziv dolazi baš kada ste očekivali paket ili uplatu.</li>
      </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Cilj" data-en="Aim">Cilj</div>
          <ul class="bullets">
            <li data-sr="Završiti MFA korak na lažnoj prijavi." data-en="Complete an MFA step on a fake sign-in.">Završiti MFA korak na lažnoj prijavi.</li>
            <li data-sr="Potvrditi plaćanje koje korisnik ne vidi u celosti." data-en="Confirm a payment the user does not fully see.">Potvrditi plaćanje koje korisnik ne vidi u celosti.</li>
            <li data-sr="Dodati uređaj ili broj za oporavak." data-en="Add a device or recovery number.">Dodati uređaj ili broj za oporavak.</li>
            <li data-sr="Zatvoriti žrtvu u krug novih potvrda." data-en="Trap the victim in a loop of new confirmations.">Zatvoriti žrtvu u krug novih potvrda.</li>
      </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching).">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Ceo tok može stati u nekoliko minuta ako žrtva veruje u hitnost." data-en="The whole flow can fit into minutes if the target trusts the urgency.">Ceo tok može stati u nekoliko minuta ako žrtva veruje u hitnost.</p>
      <article class="phase ">
        <h3 class="phase-title" data-sr="Faza 1 — Kontakt i scenarij" data-en="Phase 1 — Contact and scenario">Faza 1 — Kontakt i scenarij</h3>
        <p data-sr="Stiže poziv, SMS ili chat koji glumi banka, kurir ili bezbednost i najavljuje problem koji zahteva brzu potvrdu." data-en="A call, SMS, or chat pretends to be a bank, courier, or security desk and announces a problem that needs quick confirmation.">Stiže poziv, SMS ili chat koji glumi banka, kurir ili bezbednost i najavljuje problem koji zahteva brzu potvrdu.</p>
        <p data-sr="Ton može biti robotski ili ljudski, ali cilj je isti: izvući kod koji stiže na vaš telefon." data-en="The tone may be robotic or human, but the goal is the same: extract the code that arrives on your phone.">Ton može biti robotski ili ljudski, ali cilj je isti: izvući kod koji stiže na vaš telefon.</p>
        <ul class="bullets">
            <li data-sr="Hitnost i kratko vreme za odgovor." data-en="Urgency and a short time to respond.">Hitnost i kratko vreme za odgovor.</li>
            <li data-sr="Tvrdnja da je nalog, paket ili uplata zapela." data-en="A claim that an account, parcel, or payment is stuck.">Tvrdnja da je nalog, paket ili uplata zapela.</li>
            <li data-sr="Zahtev da ponovite kod glasno ili da ga ukucate na tastaturi." data-en="A request to repeat the code aloud or type it on the keypad.">Zahtev da ponovite kod glasno ili da ga ukucate na tastaturi.</li>
            <li data-sr="Lažni broj poziva koji deluje lokalno ili zvanično." data-en="A fake calling number that looks local or official.">Lažni broj poziva koji deluje lokalno ili zvanično.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta počne da veruje da je kontakt legitimna procedura." data-en="<strong>Threshold:</strong> the target believes the contact is a legitimate procedure."><strong>Prag faze:</strong> meta počne da veruje da je kontakt legitimna procedura.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Automat ili skriptovani tok" data-en="Phase 2 — Bot or scripted flow">Faza 2 — Automat ili skriptovani tok</h3>
        <p data-sr="Sistem vodi kroz menije: pritisnite 1, unesite kod, potvrdite. To smanjuje sumnju jer deluje kao bankomat ili IVR." data-en="The system walks through menus: press 1, enter the code, confirm. That lowers suspicion because it feels like an ATM or IVR.">Sistem vodi kroz menije: pritisnite 1, unesite kod, potvrdite. To smanjuje sumnju jer deluje kao bankomat ili IVR.</p>
        <ul class="bullets">
            <li data-sr="Manje prostora za pitanja nego sa živim čovekom." data-en="Less room for questions than with a live person.">Manje prostora za pitanja nego sa živim čovekom.</li>
            <li data-sr="Ponavljanje iste fraze u petlji." data-en="The same phrase repeats in a loop.">Ponavljanje iste fraze u petlji.</li>
            <li data-sr="Kod se traži odmah posle kratkog uvoda." data-en="The code is requested right after a short intro.">Kod se traži odmah posle kratkog uvoda.</li>
            <li data-sr="Poziv se prekida ako odete sa skripte." data-en="The call drops if you leave the script.">Poziv se prekida ako odete sa skripte.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="vishing.html" data-sr="Višing" data-en="Vishing">Višing</a></li>
            <li><a href="mfa-fatigue-scam.html" data-sr="MFA zamor" data-en="MFA fatigue">MFA zamor</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta je u toku koji traži tačan niz cifara." data-en="<strong>Threshold:</strong> the target is in a flow that demands an exact digit sequence."><strong>Prag faze:</strong> meta je u toku koji traži tačan niz cifara.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Prag: otkrivanje OTP koda" data-en="Phase 3 — Threshold: revealing the OTP">Faza 3 — Prag: otkrivanje OTP koda</h3>
        <p data-sr="Korisnik pročita SMS ili notifikaciju i unese ili izgovori kod tokom poziva ili chata." data-en="The user reads the SMS or notification and enters or speaks the code during the call or chat.">Korisnik pročita SMS ili notifikaciju i unese ili izgovori kod tokom poziva ili chata.</p>
        <p data-sr="Kod je jednokratan i često autorizuje prijavu ili plaćanje u istom trenutku." data-en="The code is one-time and often authorizes a sign-in or payment at the same moment.">Kod je jednokratan i često autorizuje prijavu ili plaćanje u istom trenutku.</p>
        <ul class="bullets">
            <li data-sr="Napadač koristi kod odmah u paralelnom prozoru ili uređaju." data-en="The attacker uses the code immediately in a parallel window or device.">Napadač koristi kod odmah u paralelnom prozoru ili uređaju.</li>
            <li data-sr="Korisnik misli da potvrđuje identitet, a zapravo odobrava radnju." data-en="The user thinks they verify identity while actually approving an action.">Korisnik misli da potvrđuje identitet, a zapravo odobrava radnju.</li>
            <li data-sr="Nema vremena da se pročita pravilo banke o kodovima." data-en="There is no time to read the bank rule about codes.">Nema vremena da se pročita pravilo banke o kodovima.</li>
            <li data-sr="Poziv ili chat drži pažnju zauzetom." data-en="The call or chat keeps attention busy.">Poziv ili chat drži pažnju zauzetom.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> ceo kod je izgovoren ili unet u sistem prevaranta." data-en="<strong>Threshold:</strong> the full code is spoken or entered into the fraudster system."><strong>Prag faze:</strong> ceo kod je izgovoren ili unet u sistem prevaranta.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Zloupotreba pristupa ili novca" data-en="Phase 4 — Abuse of access or money">Faza 4 — Zloupotreba pristupa ili novca</h3>
        <p data-sr="Posle koda sledi prijava na nalog, potvrda transakcije, ili promena bezbednosnog broja." data-en="After the code, sign-in, transaction confirmation, or a security number change may follow.">Posle koda sledi prijava na nalog, potvrda transakcije, ili promena bezbednosnog broja.</p>
        <ul class="bullets">
            <li data-sr="Žrtva tek kasnije vidi transakciju ili novu sesiju." data-en="The victim only later sees a transaction or new session.">Žrtva tek kasnije vidi transakciju ili novu sesiju.</li>
            <li data-sr="Prevarant može dodati svoj broj kao rezervni." data-en="The fraudster may add their number as backup.">Prevarant može dodati svoj broj kao rezervni.</li>
            <li data-sr="Brzina je ključ: sve se završi pre nego što banka pošalje upozorenje." data-en="Speed is key: everything finishes before the bank sends a warning.">Brzina je ključ: sve se završi pre nego što banka pošalje upozorenje.</li>
            <li data-sr="Lanac može nastaviti novim pozivom iz bezbednosti." data-en="A chain may continue with a new security call.">Lanac može nastaviti novim pozivom iz bezbednosti.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="otp-interception.html" data-sr="Presretanje OTP" data-en="OTP interception">Presretanje OTP</a></li>
            <li><a href="fake-call-scam.html" data-sr="Lažni pozivi" data-en="Fake calls">Lažni pozivi</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> izvrši se neovlašćena radnja uz pomoć ukradenog koda." data-en="<strong>Threshold:</strong> an unauthorized action runs using the stolen code."><strong>Prag faze:</strong> izvrši se neovlašćena radnja uz pomoć ukradenog koda.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Otkrivanje" data-en="Phase 5 — Discovery">Faza 5 — Otkrivanje</h3>
        <p data-sr="Banka šalje obaveštenje, korisnik vidi praznjenje računa, ili aplikacija traži novu prijavu." data-en="The bank sends a notice, the user sees an empty account, or the app demands a new sign-in.">Banka šalje obaveštenje, korisnik vidi praznjenje računa, ili aplikacija traži novu prijavu.</p>
        <ul class="bullets">
            <li data-sr="Korisnik se priseća čudnog poziva ili robota." data-en="The user remembers a strange call or robot.">Korisnik se priseća čudnog poziva ili robota.</li>
            <li data-sr="Vreme incidenta se poklapa sa pozivom." data-en="Incident time matches the call.">Vreme incidenta se poklapa sa pozivom.</li>
            <li data-sr="Često postoji sumnja da je sistem grešio." data-en="There is often a belief the system errored.">Često postoji sumnja da je sistem grešio.</li>
            <li data-sr="Kontakt sa pravom podrškom otkriva da poziv nije evidentiran." data-en="Contact with real support shows the call was not logged.">Kontakt sa pravom podrškom otkriva da poziv nije evidentiran.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> žrtva povezuje štetu sa otkrivanjem koda." data-en="<strong>Threshold:</strong> the victim connects the loss to revealing the code."><strong>Prag faze:</strong> žrtva povezuje štetu sa otkrivanjem koda.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Sanacija i zaštita" data-en="Phase 6 — Remediation and protection">Faza 6 — Sanacija i zaštita</h3>
        <p data-sr="Kontaktirati banku zvaničnim brojem, blokirati karticu, promeniti pristup i prijaviti incident." data-en="Call the bank on an official number, block the card, change access, and report the incident.">Kontaktirati banku zvaničnim brojem, blokirati karticu, promeniti pristup i prijaviti incident.</p>
        <p data-sr="Pravilo: nikada ne čitati OTP naglas niti ga unositi na zahtev poziva ili chata." data-en="Rule: never read an OTP aloud or enter it on demand from a call or chat.">Pravilo: nikada ne čitati OTP naglas niti ga unositi na zahtev poziva ili chata.</p>
        <ul class="bullets">
            <li data-sr="Sačuvati vreme poziva i broj kao dokaz." data-en="Save call time and number as evidence.">Sačuvati vreme poziva i broj kao dokaz.</li>
            <li data-sr="Proveriti sve aktivne sesije u aplikaciji." data-en="Review all active sessions in the app.">Proveriti sve aktivne sesije u aplikaciji.</li>
            <li data-sr="Upozoriti porodicu na isti obrazac." data-en="Warn family about the same pattern.">Upozoriti porodicu na isti obrazac.</li>
            <li data-sr="Koristiti aplikacijske obaveštenja umesto telefonskog potvrđivanja." data-en="Use app notifications instead of phone verification.">Koristiti aplikacijske obaveštenja umesto telefonskog potvrđivanja.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="bank-impersonation.html" data-sr="Lažna banka" data-en="Bank impersonation">Lažna banka</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik prekida komunikaciju i prelazi na zvaničan kanal banke." data-en="<strong>Threshold:</strong> the user stops the conversation and switches to the bank official channel."><strong>Prag faze:</strong> korisnik prekida komunikaciju i prelazi na zvaničan kanal banke.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
<ul class="bullets">
            <li data-sr="Poziv traži ceo OTP ili poslednje četiri cifre uz pritisak." data-en="The call asks for the full OTP or the last four digits under pressure.">Poziv traži ceo OTP ili poslednje četiri cifre uz pritisak.</li>
            <li data-sr="Robotski glas koji ne odgovara na pitanja van menija." data-en="A robotic voice that does not answer off-menu questions.">Robotski glas koji ne odgovara na pitanja van menija.</li>
            <li data-sr="SMS i poziv stižu u istom minutu." data-en="SMS and call arrive in the same minute.">SMS i poziv stižu u istom minutu.</li>
            <li data-sr="Traže da potvrdite transakciju koju ne vidite jasno." data-en="They ask you to confirm a transaction you cannot see clearly.">Traže da potvrdite transakciju koju ne vidite jasno.</li>
            <li data-sr="Lažni broj koji se vraća kao zvaničan." data-en="A fake number that displays as official.">Lažni broj koji se vraća kao zvaničan.</li>
            <li data-sr="Chat bot koji traži kod u istom tonu kao podrška." data-en="A chat bot that asks for a code in a support tone.">Chat bot koji traži kod u istom tonu kao podrška.</li>
            <li data-sr="Ponavljanje poziva u kratkom intervalu." data-en="Repeated calls in a short interval.">Ponavljanje poziva u kratkom intervalu.</li>
            <li data-sr="Zahtev da isključite smetnju i ostanete na liniji." data-en="A request to remove distraction and stay on the line.">Zahtev da isključite smetnju i ostanete na liniji.</li>
            <li data-sr="Nema mogućnosti da završite razgovor i proverite aplikaciju." data-en="No chance to end the call and check the app.">Nema mogućnosti da završite razgovor i proverite aplikaciju.</li>
            <li data-sr="Kombinacija sa lažnim mejlom o istoj temi." data-en="Combination with a fake email on the same topic.">Kombinacija sa lažnim mejlom o istoj temi.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
<ol class="steps">
        <li data-sr="Prekinite poziv i ulogujte se u aplikaciju banke direktno." data-en="Hang up and sign in to the bank app directly.">Prekinite poziv i ulogujte se u aplikaciju banke direktno.</li>
        <li data-sr="Uporedite broj poziva sa brojem na poleđini kartice." data-en="Compare the call number to the number on the card back.">Uporedite broj poziva sa brojem na poleđini kartice.</li>
        <li data-sr="Nikada ne unosite OTP u IVR koji niste sami pokrenuli." data-en="Never enter an OTP into an IVR you did not start yourself.">Nikada ne unosite OTP u IVR koji niste sami pokrenuli.</li>
        <li data-sr="Proverite transakcije u aplikaciji pre bilo kakve potvrde." data-en="Check transactions in the app before any confirmation.">Proverite transakcije u aplikaciji pre bilo kakve potvrde.</li>
        <li data-sr="Ako je robot, tražite ljudsku podršku kroz zvaničan kanal." data-en="If it is a robot, ask for human support through an official channel.">Ako je robot, tražite ljudsku podršku kroz zvaničan kanal.</li>
        <li data-sr="Obavestite banku ako ste ikada podelili deo koda." data-en="Notify the bank if you ever shared part of a code.">Obavestite banku ako ste ikada podelili deo koda.</li>
        <li data-sr="Uključite obaveštenja o transakcijama u aplikaciji." data-en="Enable transaction alerts in the app.">Uključite obaveštenja o transakcijama u aplikaciji.</li>
        <li data-sr="Objasnite starijima da kod nije identifikacija već odobrenje." data-en="Explain to elders that a code is not identification but approval.">Objasnite starijima da kod nije identifikacija već odobrenje.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
<ul class="bullets">
            <li data-sr="Da li poziv traži kod koji je upravo stigao SMS-om?" data-en="Does the call ask for a code that just arrived by SMS?">Da li poziv traži kod koji je upravo stigao SMS-om?</li>
            <li data-sr="Da li mogu prvo da otvorim aplikaciju banke i proverim stvarno stanje?" data-en="Can I first open the bank app and check the real state?">Da li mogu prvo da otvorim aplikaciju banke i proverim stvarno stanje?</li>
            <li data-sr="Da li je broj poziva isti kao na zvaničnom sajtu banke?" data-en="Is the calling number the same as on the bank official site?">Da li je broj poziva isti kao na zvaničnom sajtu banke?</li>
            <li data-sr="Da li robot dozvoljava pauzu bez prekida veze?" data-en="Does the robot allow a pause without dropping the call?">Da li robot dozvoljava pauzu bez prekida veze?</li>
            <li data-sr="Da li je tema poziva ista kao sumnjiva poruka?" data-en="Is the call topic the same as a suspicious message?">Da li je tema poziva ista kao sumnjiva poruka?</li>
            <li data-sr="Da li bih dao isti kod nepoznatoj osobi na ulici?" data-en="Would I give the same code to a stranger on the street?">Da li bih dao isti kod nepoznatoj osobi na ulici?</li>
            <li data-sr="Da li banka ikada traži kod da proveri da ste vi?" data-en="Does the bank ever ask for a code to verify it is you?">Da li banka ikada traži kod da proveri da ste vi?</li>
            <li data-sr="Da li mogu da završim sve kroz aplikaciju bez poziva?" data-en="Can I finish everything through the app without a call?">Da li mogu da završim sve kroz aplikaciju bez poziva?</li>
            <li data-sr="Da li je hitnost razumna ako ništa ne gubim od kašnjenja?" data-en="Is the urgency sensible if I lose nothing by waiting?">Da li je hitnost razumna ako ništa ne gubim od kašnjenja?</li>
            <li data-sr="Da li neko drugi u kući dobija isti poziv?" data-en="Is anyone else at home getting the same call?">Da li neko drugi u kući dobija isti poziv?</li>
            <li data-sr="Da li sam već uneo lozinku na sumnjivom sajtu pre poziva?" data-en="Did I already enter a password on a suspicious site before the call?">Da li sam već uneo lozinku na sumnjivom sajtu pre poziva?</li>
            <li data-sr="Da li znam da OTP može odobriti uplatu?" data-en="Do I know an OTP can approve a payment?">Da li znam da OTP može odobriti uplatu?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
<ol class="steps">
        <li data-sr="Prekinite komunikaciju odmah." data-en="End communication immediately.">Prekinite komunikaciju odmah.</li>
        <li data-sr="Pozovite banku zvaničnim brojem sa zadnje strane kartice." data-en="Call the bank on the official number from the card back.">Pozovite banku zvaničnim brojem sa zadnje strane kartice.</li>
        <li data-sr="Proverite transakcije i blokirajte karticu ako treba." data-en="Review transactions and block the card if needed.">Proverite transakcije i blokirajte karticu ako treba.</li>
        <li data-sr="Promenite lozinku i proverite MFA podešavanja." data-en="Change the password and review MFA settings.">Promenite lozinku i proverite MFA podešavanja.</li>
        <li data-sr="Prijavite incident i sačuvajte vreme poziva." data-en="Report the incident and save the call time.">Prijavite incident i sačuvajte vreme poziva.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si uneo ili izgovorio cifre koda?" data-en="Did you type or speak the code digits?">Da li si uneo ili izgovorio cifre koda?</li>
            <li data-sr="Da li je poziv bio robot?" data-en="Was the call a robot?">Da li je poziv bio robot?</li>
            <li data-sr="Šta tačno piše u aplikaciji banke sada?" data-en="What does the bank app show now?">Šta tačno piše u aplikaciji banke sada?</li>
            <li data-sr="Da li si pre toga kliknuo link iz poruke?" data-en="Did you click a message link before that?">Da li si pre toga kliknuo link iz poruke?</li>
      </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Legitimna banka ne traži ceo kod telefonom; to je crvena linija." data-en="A real bank does not ask for the full code by phone; that is a red line.">Legitimna banka ne traži ceo kod telefonom; to je crvena linija.</li>
            <li data-sr="Hajde da prekinemo i otvorimo aplikaciju mirno." data-en="Let us hang up and open the app calmly.">Hajde da prekinemo i otvorimo aplikaciju mirno.</li>
            <li data-sr="Kod je kao potpis; ne dajemo ga preko poziva." data-en="A code is like a signature; we do not give it over a call.">Kod je kao potpis; ne dajemo ga preko poziva.</li>
            <li data-sr="Prvo blokada kartice, pa detalji." data-en="Card block first, then details.">Prvo blokada kartice, pa detalji.</li>
      </ul>
        </div>
      </div>
    </section>
`
};
