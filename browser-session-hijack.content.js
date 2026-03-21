window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["browser-session-hijack"] = {
  raw_html: `

    <section class="card">
      <h2 data-sr="Uvod: preotimanje aktivne browser sesije" data-en="Introduction: hijacking an active browser session">Uvod: preotimanje aktivne browser sesije</h2>

      <p data-sr="Preotimanje sesije znači da napadač koristi istu prijavu kao vi: otvoren tab, povezan uređaj, daljinski pregled, ili ukraden token bez ponovnog unošenja lozinke pred vama." data-en="Session hijacking means the attacker uses the same sign-in as you: an open tab, linked device, remote viewing, or a stolen token without typing the password in front of you.">Preotimanje sesije znači da napadač koristi istu prijavu kao vi: otvoren tab, povezan uređaj, daljinski pregled, ili ukraden token bez ponovnog unošenja lozinke pred vama.</p>
      <p data-sr="Razlika u odnosu na klasičnu krađu lozinke je što žrtva često misli da je sve normalno ulogovano, dok neko drugi gleda ili upravlja." data-en="Unlike classic password theft, the victim often thinks everything is normally signed in while someone else watches or controls the session.">Razlika u odnosu na klasičnu krađu lozinke je što žrtva često misli da je sve normalno ulogovano, dok neko drugi gleda ili upravlja.</p>
      <div class="callout" data-sr="<strong>Model:</strong> pristup uređaju ili tokenu → ista sesija → radnje u vaše ime → promene naloga." data-en="<strong>Model:</strong> device or token access → same session → actions as you → account changes."><strong>Model:</strong> pristup uređaju ili tokenu → ista sesija → radnje u vaše ime → promene naloga.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako prolazi bez novog logina" data-en="How it works without a fresh login">Kako prolazi bez novog logina</h2>

      <p data-sr="Servisi vas drže u sesiji radi praktičnosti. Napadač iskoristi taj kredit poverenja: fizički pristup, malver, deljenje ekrana, ili ukradeni token." data-en="Services keep you signed in for convenience. The attacker exploits that trust: physical access, malware, screen sharing, or a stolen token.">Servisi vas drže u sesiji radi praktičnosti. Napadač iskoristi taj kredit poverenja: fizički pristup, malver, deljenje ekrana, ili ukradeni token.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Tipični ulazi" data-en="Typical entry paths">Tipični ulazi</div>
          <ul class="bullets">
            <li data-sr="Otključan računar u javnom prostoru ili kod poznanika." data-en="Unlocked computer in a public space or at an acquaintance.">Otključan računar u javnom prostoru ili kod poznanika.</li>
            <li data-sr="Zlonamerna ekstenzija koja čita otvorene stranice." data-en="A malicious extension that reads open pages.">Zlonamerna ekstenzija koja čita otvorene stranice.</li>
            <li data-sr="Lažna podrška koja traži deljenje ekrana tokom prijave." data-en="Fake support that asks for screen sharing during sign-in.">Lažna podrška koja traži deljenje ekrana tokom prijave.</li>
            <li data-sr="Ukraden ili presretnut sesijski token." data-en="A stolen or intercepted session token.">Ukraden ili presretnut sesijski token.</li>
      </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Cilj" data-en="Goal">Cilj</div>
          <ul class="bullets">
            <li data-sr="Čitanje podataka direktno iz otvorene sesije." data-en="Reading data directly from the open session.">Čitanje podataka direktno iz otvorene sesije.</li>
            <li data-sr="Promena bezbednosnih podešavanja dok ste ulogovani." data-en="Changing security settings while you are signed in.">Promena bezbednosnih podešavanja dok ste ulogovani.</li>
            <li data-sr="Iniciranje transakcije ili slanje poruka." data-en="Starting a transaction or sending messages.">Iniciranje transakcije ili slanje poruka.</li>
            <li data-sr="Dodavanje trajnog pristupa pre nego što odjavite." data-en="Adding persistent access before you sign out.">Dodavanje trajnog pristupa pre nego što odjavite.</li>
      </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching).">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Tok može biti minutski ako je neko fizički kod uređaja, ili duži ako je token ukraden u pozadini." data-en="The flow can be minutes if someone is physically at the device, or longer if a token is stolen in the background.">Tok može biti minutski ako je neko fizički kod uređaja, ili duži ako je token ukraden u pozadini.</p>
      <article class="phase ">
        <h3 class="phase-title" data-sr="Faza 1 — Pristup uređaju ili okruženju" data-en="Phase 1 — Access to device or environment">Faza 1 — Pristup uređaju ili okruženju</h3>
        <p data-sr="Napadač dobija pristup otključanom telefonu, laptopu, ili sesiji na deljenom računaru." data-en="The attacker gains access to an unlocked phone, laptop, or session on a shared computer.">Napadač dobija pristup otključanom telefonu, laptopu, ili sesiji na deljenom računaru.</p>
        <p data-sr="Korisnik odlazi na pauzu ili prebacuje pažnju, a sesija ostaje otvorena." data-en="The user steps away or switches attention while the session stays open.">Korisnik odlazi na pauzu ili prebacuje pažnju, a sesija ostaje otvorena.</p>
        <ul class="bullets">
            <li data-sr="Nema lozinke u tom trenutku jer je sesija već aktivna." data-en="No password is needed because the session is already active.">Nema lozinke u tom trenutku jer je sesija već aktivna.</li>
            <li data-sr="Brz pregled otvorenih tabova otkriva naloge i podatke." data-en="A quick scan of open tabs reveals accounts and data.">Brz pregled otvorenih tabova otkriva naloge i podatke.</li>
            <li data-sr="Mobilni uređaji često ostaju otključani duže nego što korisnik misli." data-en="Mobile devices often stay unlocked longer than users think.">Mobilni uređaji često ostaju otključani duže nego što korisnik misli.</li>
            <li data-sr="Javni prostor povećava šansu za prebacivanje na tuđi uređaj." data-en="Public space increases the chance of switching to someone else device.">Javni prostor povećava šansu za prebacivanje na tuđi uređaj.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> napadač može da vidi ili kontroliše otvorenu sesiju." data-en="<strong>Threshold:</strong> the attacker can see or control the open session."><strong>Prag faze:</strong> napadač može da vidi ili kontroliše otvorenu sesiju.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Ekstenzija, skripta ili daljinski prikaz" data-en="Phase 2 — Extension, script, or remote view">Faza 2 — Ekstenzija, skripta ili daljinski prikaz</h3>
        <p data-sr="Korisnik instalira ekstenziju ili prihvata daljinski pristup radi pomoći." data-en="The user installs an extension or accepts remote access for help.">Korisnik instalira ekstenziju ili prihvata daljinski pristup radi pomoći.</p>
        <ul class="bullets">
            <li data-sr="Ekstenzija može čitati sadržaj stranica koje su otvorene." data-en="An extension can read content from pages that are open.">Ekstenzija može čitati sadržaj stranica koje su otvorene.</li>
            <li data-sr="Deljenje ekrana otkriva OTP i podatke u realnom vremenu." data-en="Screen sharing reveals OTPs and data in real time.">Deljenje ekrana otkriva OTP i podatke u realnom vremenu.</li>
            <li data-sr="Korisnik ne povezuje instalaciju alata sa bankovnim tabom." data-en="The user does not connect tool installation with a banking tab.">Korisnik ne povezuje instalaciju alata sa bankovnim tabom.</li>
            <li data-sr="Lažni tehničar drži tempo razgovora." data-en="A fake technician controls the pace of the call.">Lažni tehničar drži tempo razgovora.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="tech-support-scam.html" data-sr="Lažna podrška" data-en="Tech support scam">Lažna podrška</a></li>
            <li><a href="browser-extension-scam.html" data-sr="Ekstenzija" data-en="Browser extension scam">Ekstenzija</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> napadač vidi osetljive ekrane ili podatke iz sesije." data-en="<strong>Threshold:</strong> the attacker sees sensitive screens or data from the session."><strong>Prag faze:</strong> napadač vidi osetljive ekrane ili podatke iz sesije.</div>
      </article>
      <article class="phase ">
        <h3 class="phase-title" data-sr="Faza 3 — Korišćenje sesije za radnje" data-en="Phase 3 — Using the session for actions">Faza 3 — Korišćenje sesije za radnje</h3>
        <p data-sr="Iz otvorene sesije napadač menja lozinku, dodaje broj za oporavak, šalje mejlove ili potvrđuje plaćanje." data-en="From the open session the attacker changes passwords, adds recovery numbers, sends emails, or confirms a payment.">Iz otvorene sesije napadač menja lozinku, dodaje broj za oporavak, šalje mejlove ili potvrđuje plaćanje.</p>
        <p data-sr="MFA može biti zaobiđen jer je korisnik već unutra." data-en="MFA may be bypassed because the user is already inside the session.">MFA može biti zaobiđen jer je korisnik već unutra.</p>
        <ul class="bullets">
            <li data-sr="Radnje izgledaju kao normalna upotreba naloga." data-en="Actions look like normal account use.">Radnje izgledaju kao normalna upotreba naloga.</li>
            <li data-sr="Žrtva ne dobija odmah upozorenje ako je sve u istoj sesiji." data-en="The victim may not get an alert immediately if everything stays in one session.">Žrtva ne dobija odmah upozorenje ako je sve u istoj sesiji.</li>
            <li data-sr="Brze radnje zatvore prozor za oporavak." data-en="Fast actions close the recovery window.">Brze radnje zatvore prozor za oporavak.</li>
            <li data-sr="Napadač može dodati drugi kanal pristupa." data-en="The attacker can add another access path.">Napadač može dodati drugi kanal pristupa.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> izvrši se trajna promena naloga ili finansijska radnja." data-en="<strong>Threshold:</strong> a lasting account change or financial action is executed."><strong>Prag faze:</strong> izvrši se trajna promena naloga ili finansijska radnja.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Otkrivanje i zabuna" data-en="Phase 4 — Discovery and confusion">Faza 4 — Otkrivanje i zabuna</h3>
        <p data-sr="Korisnik vidi čudnu aktivnost ili poruke koje nije poslao." data-en="The user sees strange activity or messages they did not send.">Korisnik vidi čudnu aktivnost ili poruke koje nije poslao.</p>
        <ul class="bullets">
            <li data-sr="Istorija prijava pokazuje nepoznat kontekst." data-en="Sign-in history shows an unfamiliar context.">Istorija prijava pokazuje nepoznat kontekst.</li>
            <li data-sr="Lozinka je možda ista, ali ponašanje naloga nije." data-en="The password may be unchanged, but account behavior is not.">Lozinka je možda ista, ali ponašanje naloga nije.</li>
            <li data-sr="Korisnik prvo sumnja na virus, a ne na otvorenu sesiju." data-en="The user first blames a virus, not an open session.">Korisnik prvo sumnja na virus, a ne na otvorenu sesiju.</li>
            <li data-sr="Kontakti javljaju sumnjive zahteve." data-en="Contacts report suspicious requests.">Kontakti javljaju sumnjive zahteve.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="session-cookie-theft.html" data-sr="Krađa kolačića" data-en="Session cookie theft">Krađa kolačića</a></li>
            <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> nesklad između onoga što korisnik radi i onoga što nalog radi." data-en="<strong>Threshold:</strong> mismatch between what the user does and what the account does."><strong>Prag faze:</strong> nesklad između onoga što korisnik radi i onoga što nalog radi.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Sanacija" data-en="Phase 5 — Remediation">Faza 5 — Sanacija</h3>
        <p data-sr="Potrebno je odjaviti sve sesije, ukloniti ekstenzije, proveriti podešavanja i promeniti lozinku." data-en="You must sign out everywhere, remove extensions, review settings, and change passwords.">Potrebno je odjaviti sve sesije, ukloniti ekstenzije, proveriti podešavanja i promeniti lozinku.</p>
        <p data-sr="Fizička bezbednost uređaja je deo odgovora, ne samo softver." data-en="Physical device security is part of the answer, not only software.">Fizička bezbednost uređaja je deo odgovora, ne samo softver.</p>
        <ul class="bullets">
            <li data-sr="Potpuna odjava sa svih uređaja u nalogu." data-en="Full sign-out of all devices in the account.">Potpuna odjava sa svih uređaja u nalogu.</li>
            <li data-sr="Uklanjanje nepoznatih ekstenzija." data-en="Removing unknown extensions.">Uklanjanje nepoznatih ekstenzija.</li>
            <li data-sr="Provera rezervnih brojeva i imejlova." data-en="Reviewing backup phones and emails.">Provera rezervnih brojeva i imejlova.</li>
            <li data-sr="Obaveštavanje banke ako je bilo plaćanja." data-en="Notifying the bank if payments occurred.">Obaveštavanje banke ako je bilo plaćanja.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> zatvoreni su i digitalni i fizički kanali pristupa." data-en="<strong>Threshold:</strong> both digital and physical access paths are closed."><strong>Prag faze:</strong> zatvoreni su i digitalni i fizički kanali pristupa.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Prevencija u rutini" data-en="Phase 6 — Prevention in routine">Faza 6 — Prevencija u rutini</h3>
        <p data-sr="Kratke navike smanjuju rizik: zaključavanje ekrana, odjava na deljenim računarima, odbijanje nepoznatih ekstenzija." data-en="Short habits reduce risk: locking the screen, signing out on shared PCs, refusing unknown extensions.">Kratke navike smanjuju rizik: zaključavanje ekrana, odjava na deljenim računarima, odbijanje nepoznatih ekstenzija.</p>
        <ul class="bullets">
            <li data-sr="Ne delite ekran sa nepoznatim podrškom." data-en="Do not share your screen with unknown support.">Ne delite ekran sa nepoznatim podrškom.</li>
            <li data-sr="Koristite aplikacije banke umesto pregledača gde je moguće." data-en="Use banking apps instead of the browser where possible.">Koristite aplikacije banke umesto pregledača gde je moguće.</li>
            <li data-sr="Proveravajte aktivne sesije jednom mesečno." data-en="Review active sessions once a month.">Proveravajte aktivne sesije jednom mesečno.</li>
            <li data-sr="Uklonite ekstenzije koje ne koristite." data-en="Remove extensions you do not use.">Uklonite ekstenzije koje ne koristite.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="banking-app-screen-share.html" data-sr="Deljenje ekrana banke" data-en="Banking screen share">Deljenje ekrana banke</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik usvaja rutinu koja sprečava tuđu kontrolu otvorene sesije." data-en="<strong>Threshold:</strong> the user adopts habits that prevent foreign control of an open session."><strong>Prag faze:</strong> korisnik usvaja rutinu koja sprečava tuđu kontrolu otvorene sesije.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
<ul class="bullets">
            <li data-sr="Ostavljen otključan telefon ili laptop na javnom mestu." data-en="Left an unlocked phone or laptop in public.">Ostavljen otključan telefon ili laptop na javnom mestu.</li>
            <li data-sr="Nepoznata ekstenzija u pregledaču." data-en="An unknown browser extension.">Nepoznata ekstenzija u pregledaču.</li>
            <li data-sr="Zahtev za daljinski pristup od podrške." data-en="A remote access request from support.">Zahtev za daljinski pristup od podrške.</li>
            <li data-sr="Aktivnost naloga dok vi spavate ili ste offline." data-en="Account activity while you sleep or are offline.">Aktivnost naloga dok vi spavate ili ste offline.</li>
            <li data-sr="Kontakti dobijaju poruke koje niste slali." data-en="Contacts get messages you did not send.">Kontakti dobijaju poruke koje niste slali.</li>
            <li data-sr="Brze promene u bezbednosnim podešavanjima." data-en="Fast changes in security settings.">Brze promene u bezbednosnim podešavanjima.</li>
            <li data-sr="Istorija prijava sa nepoznatim uređajem." data-en="Sign-in history with an unknown device.">Istorija prijava sa nepoznatim uređajem.</li>
            <li data-sr="Deljenje računara bez odjave." data-en="Sharing a computer without signing out.">Deljenje računara bez odjave.</li>
            <li data-sr="Lažni poziv tokom koga ste ulogovani u banku." data-en="A fake call while you are signed in to the bank.">Lažni poziv tokom koga ste ulogovani u banku.</li>
            <li data-sr="OTP ili kod vidljiv na ekranu tokom deljenja." data-en="OTP or code visible on screen during sharing.">OTP ili kod vidljiv na ekranu tokom deljenja.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
<ol class="steps">
        <li data-sr="Odjavite se na deljenim računarima uvek na kraju rada." data-en="Always sign out on shared computers at the end.">Odjavite se na deljenim računarima uvek na kraju rada.</li>
        <li data-sr="Uklonite ekstenzije koje ne prepoznajete." data-en="Remove extensions you do not recognize.">Uklonite ekstenzije koje ne prepoznajete.</li>
        <li data-sr="Proverite aktivne sesije u nalogu." data-en="Check active sessions in the account.">Proverite aktivne sesije u nalogu.</li>
        <li data-sr="Zaključavajte telefon i računar kad ih napuštate." data-en="Lock phone and PC when you step away.">Zaključavajte telefon i računar kad ih napuštate.</li>
        <li data-sr="Ne prihvatajte daljinski pristup od zvanicnog broja bez provere." data-en="Do not accept remote access without verifying the official number.">Ne prihvatajte daljinski pristup od zvanicnog broja bez provere.</li>
        <li data-sr="Koristite kratko vreme isteka zaključavanja." data-en="Use a short screen-lock timeout.">Koristite kratko vreme isteka zaključavanja.</li>
        <li data-sr="Proverite da li je neko gledao ekran tokom prijave." data-en="Check whether anyone could watch the screen during sign-in.">Proverite da li je neko gledao ekran tokom prijave.</li>
        <li data-sr="Posle incidenta promenite lozinku i MFA." data-en="After an incident, change password and MFA.">Posle incidenta promenite lozinku i MFA.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
<ul class="bullets">
            <li data-sr="Da li sam ostavio uređaj otključan?" data-en="Did I leave the device unlocked?">Da li sam ostavio uređaj otključan?</li>
            <li data-sr="Da li koristim deljeni računar?" data-en="Am I using a shared computer?">Da li koristim deljeni računar?</li>
            <li data-sr="Da li imam ekstenzije koje nisam birao pažljivo?" data-en="Do I have extensions I did not choose carefully?">Da li imam ekstenzije koje nisam birao pažljivo?</li>
            <li data-sr="Da li sam ikada delio ekran sa IT iz poruke?" data-en="Have I ever shared screen with IT from a message?">Da li sam ikada delio ekran sa IT iz poruke?</li>
            <li data-sr="Da li vidim sesije koje ne prepoznajem?" data-en="Do I see sessions I do not recognize?">Da li vidim sesije koje ne prepoznajem?</li>
            <li data-sr="Da li bih trebalo da koristim aplikaciju umesto pregledača za banku?" data-en="Should I use an app instead of the browser for banking?">Da li bih trebalo da koristim aplikaciju umesto pregledača za banku?</li>
            <li data-sr="Da li OTP čuvam vidljiv na ekranu?" data-en="Do I keep OTP visible on screen?">Da li OTP čuvam vidljiv na ekranu?</li>
            <li data-sr="Da li znam kako brzo odjaviti sve uređaje?" data-en="Do I know how to sign out all devices quickly?">Da li znam kako brzo odjaviti sve uređaje?</li>
            <li data-sr="Da li mi je poznat svaki program za daljinski pristup na računaru?" data-en="Do I know every remote access program on the PC?">Da li mi je poznat svaki program za daljinski pristup na računaru?</li>
            <li data-sr="Da li bih trebalo da isključim automatsko čuvanje sesije na javnom mestu?" data-en="Should I disable session saving in public places?">Da li bih trebalo da isključim automatsko čuvanje sesije na javnom mestu?</li>
            <li data-sr="Da li proveravam istoriju prijava redovno?" data-en="Do I review sign-in history regularly?">Da li proveravam istoriju prijava redovno?</li>
            <li data-sr="Da li znam ko ima fizički pristup mom uređaju?" data-en="Do I know who has physical access to my device?">Da li znam ko ima fizički pristup mom uređaju?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
<ol class="steps">
        <li data-sr="Odmah odjavite sve sesije na osetljivim nalozima." data-en="Immediately sign out all sessions on sensitive accounts.">Odmah odjavite sve sesije na osetljivim nalozima.</li>
        <li data-sr="Uklonite sumnjive ekstenzije." data-en="Remove suspicious extensions.">Uklonite sumnjive ekstenzije.</li>
        <li data-sr="Promenite lozinku i proverite MFA." data-en="Change password and review MFA.">Promenite lozinku i proverite MFA.</li>
        <li data-sr="Proverite podatke za oporavak i uklonite tuđe." data-en="Check recovery data and remove foreign entries.">Proverite podatke za oporavak i uklonite tuđe.</li>
        <li data-sr="Ako je bilo deljenja ekrana, kontaktirajte banku zvanično." data-en="If there was screen sharing, contact the bank officially.">Ako je bilo deljenja ekrana, kontaktirajte banku zvanično.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li je neko bio fizički blizu uređaja?" data-en="Was anyone physically near the device?">Da li je neko bio fizički blizu uređaja?</li>
            <li data-sr="Da li si instalirao ekstenziju skoro?" data-en="Did you install an extension recently?">Da li si instalirao ekstenziju skoro?</li>
            <li data-sr="Da li si delio ekran tokom poziva?" data-en="Did you share screen during a call?">Da li si delio ekran tokom poziva?</li>
            <li data-sr="Koje sesije vidiš u podešavanjima?" data-en="Which sessions do you see in settings?">Koje sesije vidiš u podešavanjima?</li>
      </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Hajde prvo da odjavimo sve uređaje iz bezbednosnog menija." data-en="Let us first sign out all devices from the security menu.">Hajde prvo da odjavimo sve uređaje iz bezbednosnog menija.</li>
            <li data-sr="Ekstenzije koje ne znaš brišu se pre nove lozinke." data-en="Unknown extensions go before a new password.">Ekstenzije koje ne znaš brišu se pre nove lozinke.</li>
            <li data-sr="Deljenje ekrana sa zvanicnim brojem se i dalje proverava." data-en="Screen sharing with an official number still gets verified.">Deljenje ekrana sa zvanicnim brojem se i dalje proverava.</li>
            <li data-sr="Zaključavanje ekrana je deo zaštite naloga." data-en="Locking the screen is part of account protection.">Zaključavanje ekrana je deo zaštite naloga.</li>
      </ul>
        </div>
      </div>
    </section>
`
};
