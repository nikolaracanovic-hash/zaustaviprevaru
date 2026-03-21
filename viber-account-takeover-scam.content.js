window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["viber-account-takeover-scam"] = {
  raw_html: `

    <section class="card">
      <h2 data-sr="Uvod: preuzimanje Viber naloga" data-en="Introduction: Viber account takeover">Uvod: preuzimanje Viber naloga</h2>

      <p data-sr="Napadač dobija vaš kod za prijavu, lažnu veb sesiju ili lozinku, pa koristi nalog kao da ste vi: šalje poruke kontaktima i širi linkove." data-en="The attacker gets your sign-in code, a fake web session, or your password, then uses the account as if it were you: messaging contacts and spreading links.">Napadač dobija vaš kod za prijavu, lažnu veb sesiju ili lozinku, pa koristi nalog kao da ste vi: šalje poruke kontaktima i širi linkove.</p>
      <p data-sr="Isti broj telefona ostaje vaš, ali sesija na drugom uređaju može raditi paralelno dok ne odjavite pristup." data-en="The same phone number stays yours, but a session on another device can run in parallel until you revoke access.">Isti broj telefona ostaje vaš, ali sesija na drugom uređaju može raditi paralelno dok ne odjavite pristup.</p>
      <div class="callout" data-sr="<strong>Model:</strong> kod ili lozinka ili fišing → tuđa prijava → zloupotreba kontakata → širenje prevare." data-en="<strong>Model:</strong> code or password or phishing → foreign sign-in → contact abuse → scam spread."><strong>Model:</strong> kod ili lozinka ili fišing → tuđa prijava → zloupotreba kontakata → širenje prevare.</div>
    </section>

    <section class="card">
      <h2 data-sr="Glavni ulazi u nalog" data-en="Main ways into the account">Glavni ulazi u nalog</h2>

      <p data-sr="Prevarant kombinuje društveni inženjering i tehničke korake; često počinje od poruke pomoći od poznatog kontakta." data-en="The fraudster combines social engineering and technical steps; it often starts with a help message from a known contact.">Prevarant kombinuje društveni inženjering i tehničke korake; često počinje od poruke pomoći od poznatog kontakta.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Tipični scenariji" data-en="Typical scenarios">Tipični scenariji</div>
          <ul class="bullets">
            <li data-sr="Pošalji mi kod koji ti je stigao da potvrdim svoj telefon." data-en="Send me the code you got so I can confirm my phone.">Pošalji mi kod koji ti je stigao da potvrdim svoj telefon.</li>
            <li data-sr="Lažna veb stranica za prijavu koja krade broj i kod." data-en="A fake web login page that steals number and code.">Lažna veb stranica za prijavu koja krade broj i kod.</li>
            <li data-sr="Malver na telefonu koji čita SMS obaveštenja." data-en="Phone malware that reads SMS notifications.">Malver na telefonu koji čita SMS obaveštenja.</li>
            <li data-sr="Slaba ili ponovljena lozinka nakon curenja sa drugog servisa." data-en="Weak or reused password after another service leak.">Slaba ili ponovljena lozinka nakon curenja sa drugog servisa.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Posledice" data-en="Consequences">Posledice</div>
          <ul class="bullets">
            <li data-sr="Poruke o novcu ili lažnim nagradama ka prijateljima." data-en="Money or fake prize messages to friends.">Poruke o novcu ili lažnim nagradama ka prijateljima.</li>
            <li data-sr="Širenje linkova ka fišingu ili APK fajlovima." data-en="Spreading links to phishing or APK files.">Širenje linkova ka fišingu ili APK fajlovima.</li>
            <li data-sr="Čitanje poslovnih četova ako su bili u istom nalogu." data-en="Reading business chats if they were in the same account.">Čitanje poslovnih četova ako su bili u istom nalogu.</li>
            <li data-sr="Kupovina kredita ili usluga na vaš račun." data-en="Buying credit or services on your bill.">Kupovina kredita ili usluga na vaš račun.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching).">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Od koda do prve lažne poruke često prođe malo vremena." data-en="Little time passes from the code to the first fake message.">Od koda do prve lažne poruke često prođe malo vremena.</p>
      <article class="phase ">
        <h3 class="phase-title" data-sr="Faza 1 — Ulaz: molba za pomoć ili lažno upozorenje" data-en="Phase 1 — Entry: help request or fake alert">Faza 1 — Ulaz: molba za pomoć ili lažno upozorenje</h3>
        <p data-sr="Stiže Viber ili SMS kontekst koji opravdava slanje koda ili klika." data-en="Viber or SMS context arrives that justifies sending a code or clicking.">Stiže Viber ili SMS kontekst koji opravdava slanje koda ili klika.</p>
        <p data-sr="Pošiljalac može biti kompromitovan prijatelj ili lažni bezbednosni nalog." data-en="The sender may be a compromised friend or a fake security account.">Pošiljalac može biti kompromitovan prijatelj ili lažni bezbednosni nalog.</p>
        <ul class="bullets">
            <li data-sr="Hitnost i kratka poruka bez uobičajenog pozdrava." data-en="Urgency and a short message without the usual greeting.">Hitnost i kratka poruka bez uobičajenog pozdrava.</li>
            <li data-sr="Tvrdnja da je hitno jer ističe sesija." data-en="A claim it is urgent because the session is expiring.">Tvrdnja da je hitno jer ističe sesija.</li>
            <li data-sr="Link ka prijavi koji nije na zvaničnom domenu." data-en="A login link not on the official domain.">Link ka prijavi koji nije na zvaničnom domenu.</li>
            <li data-sr="Ponavljanje molbe ako ne odgovorite odmah." data-en="Repeating the ask if you do not reply immediately.">Ponavljanje molbe ako ne odgovorite odmah.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta odluči da podeli kod ili klikne link." data-en="<strong>Threshold:</strong> the target decides to share a code or click a link."><strong>Prag faze:</strong> meta odluči da podeli kod ili klikne link.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Prijava na tuđem uređaju ili u lažnoj formi" data-en="Phase 2 — Sign-in on another device or fake form">Faza 2 — Prijava na tuđem uređaju ili u lažnoj formi</h3>
        <p data-sr="Napadač unosi broj i kod ili koristi ukradenu lozinku na veb ili desktop klijentu." data-en="The attacker enters number and code or uses a stolen password on web or desktop client.">Napadač unosi broj i kod ili koristi ukradenu lozinku na veb ili desktop klijentu.</p>
        <ul class="bullets">
            <li data-sr="Korisnik vidi neočekivani SMS sa kodom dok ne radi ništa." data-en="The user sees an unexpected SMS code while doing nothing.">Korisnik vidi neočekivani SMS sa kodom dok ne radi ništa.</li>
            <li data-sr="Aplikacija pokaže novu prijavu ili lokaciju." data-en="The app shows a new login or location.">Aplikacija pokaže novu prijavu ili lokaciju.</li>
            <li data-sr="Lažna stranica traži i lozinku i kod u istom koraku." data-en="The fake page asks for password and code in one step.">Lažna stranica traži i lozinku i kod u istom koraku.</li>
            <li data-sr="Malver čita kod sa ekrana obaveštenja." data-en="Malware reads the code from the notification screen.">Malver čita kod sa ekrana obaveštenja.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="viber-official-impersonation-scam.html" data-sr="Viber: lažni zvanični nalog" data-en="Viber: fake official account scam">Viber: lažni zvanični nalog</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> aktivna je sesija van vašeg uređaja." data-en="<strong>Threshold:</strong> a session is active outside your device."><strong>Prag faze:</strong> aktivna je sesija van vašeg uređaja.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Prag: kontrola naloga" data-en="Phase 3 — Threshold: account control">Faza 3 — Prag: kontrola naloga</h3>
        <p data-sr="Napadač šalje poruke, menja podešavanja ili dodaje uređaje dok vi i dalje koristite telefon." data-en="The attacker sends messages, changes settings, or adds devices while you still use the phone.">Napadač šalje poruke, menja podešavanja ili dodaje uređaje dok vi i dalje koristite telefon.</p>
        <p data-sr="Dvostruka aktivnost može ostati neprimećena prvih sati." data-en="Dual activity may stay unnoticed for the first hours.">Dvostruka aktivnost može ostati neprimećena prvih sati.</p>
        <ul class="bullets">
            <li data-sr="Brisanje ili arhiviranje četova da sakriju trag." data-en="Deleting or archiving chats to hide traces.">Brisanje ili arhiviranje četova da sakriju trag.</li>
            <li data-sr="Slanje istog linka mnogim kontaktima odjednom." data-en="Sending the same link to many contacts at once.">Slanje istog linka mnogim kontaktima odjednom.</li>
            <li data-sr="Traženje novca od prijatelja sa vašeg imena." data-en="Asking friends for money under your name.">Traženje novca od prijatelja sa vašeg imena.</li>
            <li data-sr="Pozivi ka drugim prevarantskim brojevima iz vašeg naloga." data-en="Calls toward other scam numbers from your account.">Pozivi ka drugim prevarantskim brojevima iz vašeg naloga.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> neko drugi obavlja radnje u vašem imenu." data-en="<strong>Threshold:</strong> someone else acts in your name."><strong>Prag faze:</strong> neko drugi obavlja radnje u vašem imenu.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Zloupotreba poverenja i širenje" data-en="Phase 4 — Abuse of trust and spread">Faza 4 — Zloupotreba poverenja i širenje</h3>
        <p data-sr="Kontakti odgovaraju i šire dalje jer veruju vašem profilu i slici." data-en="Contacts reply and forward further because they trust your profile and photo.">Kontakti odgovaraju i šire dalje jer veruju vašem profilu i slici.</p>
        <ul class="bullets">
            <li data-sr="Lanac se širi na porodične grupe i posao." data-en="The chain spreads to family groups and work.">Lanac se širi na porodične grupe i posao.</li>
            <li data-sr="Kombinacija sa lažnim kurirskim ili bankarskim četom." data-en="Combined with fake courier or bank chat.">Kombinacija sa lažnim kurirskim ili bankarskim četom.</li>
            <li data-sr="Prikupljanje brojeva iz imenika za robocall kampanje." data-en="Harvesting address book numbers for robocall campaigns.">Prikupljanje brojeva iz imenika za robocall kampanje.</li>
            <li data-sr="Traženje kodova za druge aplikacije u istom četu." data-en="Asking for codes for other apps in the same chat.">Traženje kodova za druge aplikacije u istom četu.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="whatsapp-takeover.html" data-sr="Preuzimanje WhatsApp naloga" data-en="WhatsApp takeover">Preuzimanje WhatsApp naloga</a></li>
            <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> šteta pređe vaš lični nalog i uđe u mrežu kontakata." data-en="<strong>Threshold:</strong> harm moves past your personal account into the contact network."><strong>Prag faze:</strong> šteta pređe vaš lični nalog i uđe u mrežu kontakata.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Otkrivanje" data-en="Phase 5 — Discovery">Faza 5 — Otkrivanje</h3>
        <p data-sr="Prijatelj javlja čudnu poruku, vi vidite aktivnost koju niste uradili ili primite upozorenje aplikacije." data-en="A friend reports a strange message, you see activity you did not do, or you get an app alert.">Prijatelj javlja čudnu poruku, vi vidite aktivnost koju niste uradili ili primite upozorenje aplikacije.</p>
        <ul class="bullets">
            <li data-sr="Poruke koje ne pamtite da ste poslali." data-en="Messages you do not remember sending.">Poruke koje ne pamtite da ste poslali.</li>
            <li data-sr="Nova desktop ili veb sesija u listi uređaja." data-en="A new desktop or web session in the device list.">Nova desktop ili veb sesija u listi uređaja.</li>
            <li data-sr="Izgubljen pristup posle odjavljivanja napadača." data-en="Lost access after the attacker signs out.">Izgubljen pristup posle odjavljivanja napadača.</li>
            <li data-sr="Neočekivani troškovi na nalogu ako postoje plaćene usluge." data-en="Unexpected charges if there are paid services.">Neočekivani troškovi na nalogu ako postoje plaćene usluge.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> žrtva povezuje štetu sa curenjem koda ili lozinke." data-en="<strong>Threshold:</strong> the victim ties harm to a leaked code or password."><strong>Prag faze:</strong> žrtva povezuje štetu sa curenjem koda ili lozinke.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Sanacija" data-en="Phase 6 — Remediation">Faza 6 — Sanacija</h3>
        <p data-sr="Odjavite sve sesije, promenite lozinku, uključite dodatni PIN ako postoji, obavestite kontakte, prijavite zloupotrebu, proverite telefon na malver." data-en="Sign out all sessions, change password, enable extra PIN if available, notify contacts, report abuse, check the phone for malware.">Odjavite sve sesije, promenite lozinku, uključite dodatni PIN ako postoji, obavestite kontakte, prijavite zloupotrebu, proverite telefon na malver.</p>
        <p data-sr="Razmotrite obaveštenje operatera ako se kodovi i dalje šalju bez vaše akcije." data-en="Consider notifying the carrier if codes still send without your action.">Razmotrite obaveštenje operatera ako se kodovi i dalje šalju bez vaše akcije.</p>
        <ul class="bullets">
            <li data-sr="Proverite aktivne uređaje i zatvorite sve sumnjivo." data-en="Check active devices and close anything suspicious.">Proverite aktivne uređaje i zatvorite sve sumnjivo.</li>
            <li data-sr="Kratka poruka kontaktima da ignorišu novčane zahteve dok ne potvrdite uživo." data-en="A short note to contacts to ignore money asks until you confirm in person.">Kratka poruka kontaktima da ignorišu novčane zahteve dok ne potvrdite uživo.</li>
            <li data-sr="Promenite lozinke drugih naloga ako su iste kao na Viberu." data-en="Change other account passwords if they match Viber.">Promenite lozinke drugih naloga ako su iste kao na Viberu.</li>
            <li data-sr="Sačuvajte dokaz o porukama i vremenu prijave." data-en="Save evidence of messages and login times.">Sačuvajte dokaz o porukama i vremenu prijave.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="number-verification-scam.html" data-sr="Verifikacija broja" data-en="Number verification scam">Verifikacija broja</a></li>
            <li><a href="smishing.html" data-sr="Smišing" data-en="Smishing">Smišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik ponovo preuzima kontrolu i zatvara tuđe sesije." data-en="<strong>Threshold:</strong> the user regains control and closes foreign sessions."><strong>Prag faze:</strong> korisnik ponovo preuzima kontrolu i zatvara tuđe sesije.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
<ul class="bullets">
            <li data-sr="Bilo ko traži kod iz SMS-a za Viber ili druge aplikacije." data-en="Anyone asks for an SMS code for Viber or other apps.">Bilo ko traži kod iz SMS-a za Viber ili druge aplikacije.</li>
            <li data-sr="Neočekivani SMS kod dok ne menjate telefon." data-en="Unexpected SMS code while you are not changing phones.">Neočekivani SMS kod dok ne menjate telefon.</li>
            <li data-sr="Prijatelj traži hitnu pomoć bez uobičajenog stila pisanja." data-en="A friend asks urgent help without their usual writing style.">Prijatelj traži hitnu pomoć bez uobičajenog stila pisanja.</li>
            <li data-sr="Link za prijavu koji nije na zvaničnom Viber domenu." data-en="A login link not on the official Viber domain.">Link za prijavu koji nije na zvaničnom Viber domenu.</li>
            <li data-sr="Poruke o novcu koje ne biste ikada poslali vi." data-en="Money messages you would never send yourself.">Poruke o novcu koje ne biste ikada poslali vi.</li>
            <li data-sr="Nova sesija iz nepoznate zemlje ili uređaja." data-en="A new session from an unknown country or device.">Nova sesija iz nepoznate zemlje ili uređaja.</li>
            <li data-sr="Traženje lozinke u četu od podrške." data-en="Password requests in chat from support.">Traženje lozinke u četu od podrške.</li>
            <li data-sr="Brisanje starih četova bez vašeg sećanja." data-en="Old chats deleted without your memory of doing it.">Brisanje starih četova bez vašeg sećanja.</li>
            <li data-sr="Isti napad se ponavlja posle oporavka jer je malver ostao." data-en="The same attack repeats after recovery because malware remained.">Isti napad se ponavlja posle oporavka jer je malver ostao.</li>
            <li data-sr="Pozivi na uključivanje prosleđivanja poziva ili SMS-a." data-en="Calls to enable call or SMS forwarding.">Pozivi na uključivanje prosleđivanja poziva ili SMS-a.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
<ol class="steps">
        <li data-sr="Nikada ne šaljite Viber kod nikome." data-en="Never send the Viber code to anyone.">Nikada ne šaljite Viber kod nikome.</li>
        <li data-sr="Proverite aktivne uređaje i sesije u podešavanjima." data-en="Check active devices and sessions in settings.">Proverite aktivne uređaje i sesije u podešavanjima.</li>
        <li data-sr="Potvrdite prijatelja drugim kanalom ako traži kod." data-en="Verify a friend on another channel if they ask for a code.">Potvrdite prijatelja drugim kanalom ako traži kod.</li>
        <li data-sr="Koristite jaku, jedinstvenu lozinku za Viber nalog." data-en="Use a strong unique password for the Viber account.">Koristite jaku, jedinstvenu lozinku za Viber nalog.</li>
        <li data-sr="Uključite dodatni PIN ili zaštitu naloga ako je dostupna." data-en="Enable extra PIN or account protection if available.">Uključite dodatni PIN ili zaštitu naloga ako je dostupna.</li>
        <li data-sr="Ne klikajte na prijavu sa linkova iz četa." data-en="Do not log in from links in chat.">Ne klikajte na prijavu sa linkova iz četa.</li>
        <li data-sr="Proverite telefon na malver ako se kodovi ponavljaju." data-en="Check the phone for malware if codes repeat.">Proverite telefon na malver ako se kodovi ponavljaju.</li>
        <li data-sr="Obavestite kontakte ako je nalog bio kompromitovan." data-en="Notify contacts if the account was compromised.">Obavestite kontakte ako je nalog bio kompromitovan.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
<ul class="bullets">
            <li data-sr="Da li sam ja tražio kod u tom trenutku?" data-en="Did I request a code at that moment?">Da li sam ja tražio kod u tom trenutku?</li>
            <li data-sr="Da li neko traži moj kod u pomoć?" data-en="Is someone asking for my code as help?">Da li neko traži moj kod u pomoć?</li>
            <li data-sr="Da li vidim nepoznatu sesiju?" data-en="Do I see an unknown session?">Da li vidim nepoznatu sesiju?</li>
            <li data-sr="Da li je ton poruke drugačiji od uobičajenog?" data-en="Is the message tone different from usual?">Da li je ton poruke drugačiji od uobičajenog?</li>
            <li data-sr="Da li mogu da pitam prijatelja uživo?" data-en="Can I ask the friend in person?">Da li mogu da pitam prijatelja uživo?</li>
            <li data-sr="Da li je hitnost razlog da preskočim proveru?" data-en="Is urgency making me skip verification?">Da li je hitnost razlog da preskočim proveru?</li>
            <li data-sr="Da li sam kliknuo link za prijavu iz sumnjive poruke?" data-en="Did I click a login link from a suspicious message?">Da li sam kliknuo link za prijavu iz sumnjive poruke?</li>
            <li data-sr="Da li koristim istu lozinku na više servisa?" data-en="Do I reuse the same password on many services?">Da li koristim istu lozinku na više servisa?</li>
            <li data-sr="Da li bih trebalo da promenim lozinku odmah?" data-en="Should I change the password immediately?">Da li bih trebalo da promenim lozinku odmah?</li>
            <li data-sr="Da li telefon ima sumnjive aplikacije?" data-en="Does the phone have suspicious apps?">Da li telefon ima sumnjive aplikacije?</li>
            <li data-sr="Da li su kontakti primali poruke o novcu?" data-en="Did contacts receive money messages?">Da li su kontakti primali poruke o novcu?</li>
            <li data-sr="Da li sam već podelio kod?" data-en="Did I already share a code?">Da li sam već podelio kod?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
<ol class="steps">
        <li data-sr="Odmah odjavite druge uređaje i sesije u podešavanjima." data-en="Immediately log out other devices and sessions in settings.">Odmah odjavite druge uređaje i sesije u podešavanjima.</li>
        <li data-sr="Promenite lozinku i uključite dodatni PIN ako postoji." data-en="Change the password and enable extra PIN if it exists.">Promenite lozinku i uključite dodatni PIN ako postoji.</li>
        <li data-sr="Obavestite kontakte kratkom porukom o kompromitovanom nalogu." data-en="Tell contacts in a short note the account was compromised.">Obavestite kontakte kratkom porukom o kompromitovanom nalogu.</li>
        <li data-sr="Prijavite incident Viberu i operateru ako se kodovi ponavljaju." data-en="Report the incident to Viber and the carrier if codes repeat.">Prijavite incident Viberu i operateru ako se kodovi ponavljaju.</li>
        <li data-sr="Skenirajte uređaj i uklonite nepoznate aplikacije." data-en="Scan the device and remove unknown apps.">Skenirajte uređaj i uklonite nepoznate aplikacije.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si poslao kod ikome?" data-en="Did you send the code to anyone?">Da li si poslao kod ikome?</li>
            <li data-sr="Da li si kliknuo link za prijavu?" data-en="Did you click a login link?">Da li si kliknuo link za prijavu?</li>
            <li data-sr="Da li vidiš druge uređaje u podešavanjima?" data-en="Do you see other devices in settings?">Da li vidiš druge uređaje u podešavanjima?</li>
            <li data-sr="Da li su prijatelji primali poruke o novcu?" data-en="Did friends get money messages?">Da li su prijatelji primali poruke o novcu?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Kod je kao ključ; ne šaljemo ga ni prijateljima." data-en="The code is like a key; we do not send it even to friends.">Kod je kao ključ; ne šaljemo ga ni prijateljima.</li>
            <li data-sr="Hajde da odjavimo sve sesije i promenimo lozinku odmah." data-en="Let us log out all sessions and change the password now.">Hajde da odjavimo sve sesije i promenimo lozinku odmah.</li>
            <li data-sr="Proveri prijatelja drugim kanalom pre bilo kog koda." data-en="Verify the friend on another channel before any code.">Proveri prijatelja drugim kanalom pre bilo kog koda.</li>
            <li data-sr="Neočekivani kod znači da neko pokušava prijavu." data-en="An unexpected code means someone is trying to sign in.">Neočekivani kod znači da neko pokušava prijavu.</li>
          </ul>
        </div>
      </div>
    </section>
`
};
