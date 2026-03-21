window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["whatsapp-verification-code-call-scam"] = {
  raw_html: `

    <section class="card">
      <h2 data-sr="Uvod: poziv koji traži da pročitate kod" data-en="Introduction: a call asking you to read a code">Uvod: poziv koji traži da pročitate kod</h2>

      <p data-sr="Napadač pokrene prijavu WhatsApp-a na svom uređaju; vama stigne SMS sa kodom; zatim vas zovu da kod pročitate naglas ili unesete u lažnu stranicu." data-en="The attacker starts WhatsApp sign-in on their device; you get an SMS code; then they call asking you to read it aloud or type it on a fake page.">Napadač pokrene prijavu WhatsApp-a na svom uređaju; vama stigne SMS sa kodom; zatim vas zovu da kod pročitate naglas ili unesete u lažnu stranicu.</p>
      <p data-sr="Isti obrazac koriste i lažni servisi za druge aplikacije koje šalju kod u SMS." data-en="The same pattern is used by fake services for other apps that send SMS codes.">Isti obrazac koriste i lažni servisi za druge aplikacije koje šalju kod u SMS.</p>
      <div class="callout" data-sr="<strong>Model:</strong> lažni razlog za poziv → SMS kod → čitanje ili unos → tuđa prijava." data-en="<strong>Model:</strong> fake call pretext → SMS code → reading or entry → foreign sign-in."><strong>Model:</strong> lažni razlog za poziv → SMS kod → čitanje ili unos → tuđa prijava.</div>
    </section>

    <section class="card">
      <h2 data-sr="Zašto poziv deluje ubedljivo" data-en="Why the call feels convincing">Zašto poziv deluje ubedljivo</h2>

      <p data-sr="Broj može biti skriven ili lažiran; glas zvuči službeno; koriste se fraze sigurnosna provera." data-en="The number may be hidden or spoofed; the voice sounds official; phrases like security check appear.">Broj može biti skriven ili lažiran; glas zvuči službeno; koriste se fraze sigurnosna provera.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Lažni razlozi za kod" data-en="Fake reasons for the code">Lažni razlozi za kod</div>
          <ul class="bullets">
            <li data-sr="Potvrdite da ste vlasnik broja radi blokade prevare." data-en="Confirm you own the number to block fraud.">Potvrdite da ste vlasnik broja radi blokade prevare.</li>
            <li data-sr="Unesite kod da vratimo pristup poslovnom četu." data-en="Enter the code to restore business chat access.">Unesite kod da vratimo pristup poslovnom četu.</li>
            <li data-sr="Operater šalje testni kod; pročitajte ga da ne blokiramo liniju." data-en="The carrier sends a test code; read it so we do not block the line.">Operater šalje testni kod; pročitajte ga da ne blokiramo liniju.</li>
            <li data-sr="Prijatelj je ostao bez telefona; kod mu treba da potvrdi broj." data-en="Your friend lost their phone; they need the code to confirm the number.">Prijatelj je ostao bez telefona; kod mu treba da potvrdi broj.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Šta napadač radi u pozadini" data-en="What the attacker does in the background">Šta napadač radi u pozadini</div>
          <ul class="bullets">
            <li data-sr="Drži otvoren ekran prijave WhatsApp-a i čeka vaš kod." data-en="They keep the WhatsApp login screen open waiting for your code.">Drži otvoren ekran prijave WhatsApp-a i čeka vaš kod.</li>
            <li data-sr="Može istovremeno tražiti i kod za banku ako ste pomešali teme." data-en="They may also ask for a bank code if you mixed topics.">Može istovremeno tražiti i kod za banku ako ste pomešali teme.</li>
            <li data-sr="Snima poziv radi ponovne upotrebe vašeg glasa kasnije." data-en="They record the call to reuse your voice later.">Snima poziv radi ponovne upotrebe vašeg glasa kasnije.</li>
            <li data-sr="Koristi isti kod odmah jer važi kratko." data-en="They use the same code immediately because it expires fast.">Koristi isti kod odmah jer važi kratko.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching).">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Ceo tok može trajati manje od dva minuta ako meta odgovori odmah." data-en="The whole flow can last under two minutes if the target answers immediately.">Ceo tok može trajati manje od dva minuta ako meta odgovori odmah.</p>
      <article class="phase ">
        <h3 class="phase-title" data-sr="Faza 1 — Ulaz: neočekivani SMS sa kodom" data-en="Phase 1 — Entry: unexpected SMS code">Faza 1 — Ulaz: neočekivani SMS sa kodom</h3>
        <p data-sr="Stiže poruka sa šestocifrenim kodom i tekstom da je to za WhatsApp ili drugi servis." data-en="A message arrives with a six-digit code and text saying it is for WhatsApp or another service.">Stiže poruka sa šestocifrenim kodom i tekstom da je to za WhatsApp ili drugi servis.</p>
        <p data-sr="Korisnik nije pokretao instalaciju, ali kod deluje zbog autentičnog izgleda poruke." data-en="The user did not start an install, but the code looks real due to message formatting.">Korisnik nije pokretao instalaciju, ali kod deluje zbog autentičnog izgleda poruke.</p>
        <ul class="bullets">
            <li data-sr="SMS stiže bez prethodne akcije korisnika." data-en="The SMS arrives without a prior user action.">SMS stiže bez prethodne akcije korisnika.</li>
            <li data-sr="Odmah zvoni telefon sa nepoznatim ili skrivenim brojem." data-en="The phone rings immediately from an unknown or hidden number.">Odmah zvoni telefon sa nepoznatim ili skrivenim brojem.</li>
            <li data-sr="Govornik zna vaše ime iz javnog imenika ili curenja podataka." data-en="The caller knows your name from a public directory or data leak.">Govornik zna vaše ime iz javnog imenika ili curenja podataka.</li>
            <li data-sr="Ton je miran i tehnički, bez vikanja." data-en="The tone is calm and technical, without shouting.">Ton je miran i tehnički, bez vikanja.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta uzme poziv umesto da prvo blokira kod i proveri aplikaciju." data-en="<strong>Threshold:</strong> the target answers the call instead of locking the code and checking the app first."><strong>Prag faze:</strong> meta uzme poziv umesto da prvo blokira kod i proveri aplikaciju.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Lažna uputstva tokom poziva" data-en="Phase 2 — Fake instructions during the call">Faza 2 — Lažna uputstva tokom poziva</h3>
        <p data-sr="Operater traži da otvorite SMS i pročitate brojeve redom ili da ih ukucate na lažnoj stranici." data-en="The operator asks you to open the SMS and read numbers in order or type them on a fake page.">Operater traži da otvorite SMS i pročitate brojeve redom ili da ih ukucate na lažnoj stranici.</p>
        <ul class="bullets">
            <li data-sr="Kaže da ne smete prekidati vezu dok traje sinhronizacija." data-en="They say you must not hang up while sync runs.">Kaže da ne smete prekidati vezu dok traje sinhronizacija.</li>
            <li data-sr="Traži da ponovite kod ako sistem nije primio." data-en="They ask you to repeat the code if the system did not receive it.">Traži da ponovite kod ako sistem nije primio.</li>
            <li data-sr="Šalje link u SMS-u paralelno sa pozivom." data-en="They send a link by SMS parallel to the call.">Šalje link u SMS-u paralelno sa pozivom.</li>
            <li data-sr="Tvrdi da će broj biti trajno blokiran." data-en="They claim the number will be permanently blocked.">Tvrdi da će broj biti trajno blokiran.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="fake-call-scam.html" data-sr="Lažni pozivi" data-en="Fake calls">Lažni pozivi</a></li>
            <li><a href="number-verification-scam.html" data-sr="Verifikacija broja" data-en="Number verification scam">Verifikacija broja</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik izgovori ili ukuca kod dok je povezan sa strancem." data-en="<strong>Threshold:</strong> the user speaks or types the code while connected to a stranger."><strong>Prag faze:</strong> korisnik izgovori ili ukuca kod dok je povezan sa strancem.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Prag: prijava završena na tuđem uređaju" data-en="Phase 3 — Threshold: sign-in completes on another device">Faza 3 — Prag: prijava završena na tuđem uređaju</h3>
        <p data-sr="Napadač unosi kod i preuzima sesiju; vaš telefon može dobiti upozorenje ili biti odjavljen." data-en="The attacker enters the code and takes the session; your phone may warn you or be signed out.">Napadač unosi kod i preuzima sesiju; vaš telefon može dobiti upozorenje ili biti odjavljen.</p>
        <p data-sr="Ako ste dali i drugi kod iz banke, šteta se širi van četa." data-en="If you also gave a bank code, harm spreads beyond chat.">Ako ste dali i drugi kod iz banke, šteta se širi van četa.</p>
        <ul class="bullets">
            <li data-sr="Pojavi se nepoznata veb sesija u podešavanjima." data-en="An unknown web session appears in settings.">Pojavi se nepoznata veb sesija u podešavanjima.</li>
            <li data-sr="Izgubite pristup porukama dok napadač drži sesiju." data-en="You lose access to messages while the attacker holds the session.">Izgubite pristup porukama dok napadač drži sesiju.</li>
            <li data-sr="Drugi servisi padaju ako je ista lozinka." data-en="Other services fall if the password is reused.">Drugi servisi padaju ako je ista lozinka.</li>
            <li data-sr="Kontakti počnu dobijati poruke o novcu." data-en="Contacts start getting money messages.">Kontakti počnu dobijati poruke o novcu.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> kod iskoristi nepoznati uređaj van vaše kontrole." data-en="<strong>Threshold:</strong> a code is used on an unknown device outside your control."><strong>Prag faze:</strong> kod iskoristi nepoznati uređaj van vaše kontrole.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Zloupotreba naloga ili novca" data-en="Phase 4 — Abuse of account or money">Faza 4 — Zloupotreba naloga ili novca</h3>
        <p data-sr="Šalju se poruke kontaktima, traže se dodatni kodovi ili se širi isti poziv na druge brojeve." data-en="Messages go to contacts, more codes are requested, or the same call pattern spreads to other numbers.">Šalju se poruke kontaktima, traže se dodatni kodovi ili se širi isti poziv na druge brojeve.</p>
        <ul class="bullets">
            <li data-sr="Koristi se poverenje prijatelja prema vašem imenu." data-en="Friends trust toward your name is abused.">Koristi se poverenje prijatelja prema vašem imenu.</li>
            <li data-sr="Napadač može uključiti dvostepenu lozinku ako znaju stari obrazac." data-en="The attacker may handle two-step PIN if they know old patterns.">Napadač može uključiti dvostepenu lozinku ako znaju stari obrazac.</li>
            <li data-sr="Snimak glasa koristi se za druge lažne pozive." data-en="Voice recording is reused for other fake calls.">Snimak glasa koristi se za druge lažne pozive.</li>
            <li data-sr="Lažni link iz četa širi malver." data-en="A fake link from chat spreads malware.">Lažni link iz četa širi malver.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="whatsapp-takeover.html" data-sr="Preuzimanje WhatsApp naloga" data-en="WhatsApp takeover">Preuzimanje WhatsApp naloga</a></li>
            <li><a href="otp-interception.html" data-sr="Presretanje OTP" data-en="OTP interception">Presretanje OTP</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> izvrši se radnja koja šteti kontaktima ili finansijama." data-en="<strong>Threshold:</strong> an action harms contacts or finances."><strong>Prag faze:</strong> izvrši se radnja koja šteti kontaktima ili finansijama.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Otkrivanje" data-en="Phase 5 — Discovery">Faza 5 — Otkrivanje</h3>
        <p data-sr="Korisnik vidi da je odjavljen, prima pozive od prijatelja ili SMS od banke." data-en="The user sees they are signed out, gets calls from friends, or SMS from the bank.">Korisnik vidi da je odjavljen, prima pozive od prijatelja ili SMS od banke.</p>
        <ul class="bullets">
            <li data-sr="Vreme poziva poklapa se sa SMS kodom." data-en="Call timing matches the SMS code.">Vreme poziva poklapa se sa SMS kodom.</li>
            <li data-sr="U aplikaciji stoji drugačiji uređaj kao aktivan." data-en="The app shows a different device as active.">U aplikaciji stoji drugačiji uređaj kao aktivan.</li>
            <li data-sr="Prijatelj kaže da je čuo vaš glas, ali vi se ne sećate razgovora." data-en="A friend says they heard your voice but you do not recall the talk.">Prijatelj kaže da je čuo vaš glas, ali vi se ne sećate razgovora.</li>
            <li data-sr="Ponavlja se isti obrazac kod drugih u porodici." data-en="The same pattern repeats for others in the family.">Ponavlja se isti obrazac kod drugih u porodici.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> žrtva povezuje štetu sa čitanjem koda na pozivu." data-en="<strong>Threshold:</strong> the victim ties harm to reading the code on a call."><strong>Prag faze:</strong> žrtva povezuje štetu sa čitanjem koda na pozivu.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Sanacija" data-en="Phase 6 — Remediation">Faza 6 — Sanacija</h3>
        <p data-sr="Ponovo prijavite nalog na svom uređaju, odjavite sve sesije, uključite dvostepenu proveru, obavestite kontakte." data-en="Sign in again on your device, log out all sessions, enable two-step verification, notify contacts.">Ponovo prijavite nalog na svom uređaju, odjavite sve sesije, uključite dvostepenu proveru, obavestite kontakte.</p>
        <p data-sr="Prijavite broj operateru; ne odgovarajte na ponovne pozive sa istim scenarijem." data-en="Report the number to the carrier; do not answer repeat calls with the same script.">Prijavite broj operateru; ne odgovarajte na ponovne pozive sa istim scenarijem.</p>
        <ul class="bullets">
            <li data-sr="Promenite PIN za dvostepenu proveru na novu, jedinstvenu vrednost." data-en="Change the two-step PIN to a new unique value.">Promenite PIN za dvostepenu proveru na novu, jedinstvenu vrednost.</li>
            <li data-sr="Proverite da li je dodat rezervni broj ili imejl." data-en="Check whether a backup number or email was added.">Proverite da li je dodat rezervni broj ili imejl.</li>
            <li data-sr="Ako je tražen bankovni kod, odmah pozovite banku." data-en="If a bank code was asked, call the bank immediately.">Ako je tražen bankovni kod, odmah pozovite banku.</li>
            <li data-sr="Upozorite starije u kući da ne čitaju kodove naglas." data-en="Warn older household members not to read codes aloud.">Upozorite starije u kući da ne čitaju kodove naglas.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="whatsapp-call-forwarding-ussd-scam.html" data-sr="WhatsApp: prosleđivanje poziva (USSD)" data-en="WhatsApp: call forwarding USSD scam">WhatsApp: prosleđivanje poziva (USSD)</a></li>
            <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik ponovo preuzme kontrolu i zatvori sve tuđe sesije." data-en="<strong>Threshold:</strong> the user regains control and closes all foreign sessions."><strong>Prag faze:</strong> korisnik ponovo preuzme kontrolu i zatvori sve tuđe sesije.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
<ul class="bullets">
            <li data-sr="Bilo ko traži da pročitate kod iz SMS-a naglas." data-en="Anyone asks you to read an SMS code aloud.">Bilo ko traži da pročitate kod iz SMS-a naglas.</li>
            <li data-sr="SMS stiže dok niste instalirali ni menjali aplikaciju." data-en="SMS arrives while you did not install or change the app.">SMS stiže dok niste instalirali ni menjali aplikaciju.</li>
            <li data-sr="Poziv odmah posle koda bez vašeg zahteva za podršku." data-en="A call right after the code without your support request.">Poziv odmah posle koda bez vašeg zahteva za podršku.</li>
            <li data-sr="Skriven broj ili broj koji ne možete da pozovete nazad." data-en="Hidden number or a number you cannot call back.">Skriven broj ili broj koji ne možete da pozovete nazad.</li>
            <li data-sr="Tvrdnja da morate biti na vezi dok server radi." data-en="A claim you must stay on the line while the server works.">Tvrdnja da morate biti na vezi dok server radi.</li>
            <li data-sr="Molba da ponovite isti kod dva puta." data-en="A request to repeat the same code twice.">Molba da ponovite isti kod dva puta.</li>
            <li data-sr="Mešanje dve teme: WhatsApp i banka u istom pozivu." data-en="Mixing two topics: WhatsApp and bank in one call.">Mešanje dve teme: WhatsApp i banka u istom pozivu.</li>
            <li data-sr="Link u SMS-u koji nije na domenu servisa koji navode." data-en="An SMS link not on the domain of the service they name.">Link u SMS-u koji nije na domenu servisa koji navode.</li>
            <li data-sr="Poziv iz policije koji traži kod aplikacije." data-en="A police call asking for an app code.">Poziv iz policije koji traži kod aplikacije.</li>
            <li data-sr="Dete ili roditelj kaže da im je trebalo samo da potvrde broj." data-en="A child or parent says they just had to confirm the number.">Dete ili roditelj kaže da im je trebalo samo da potvrde broj.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
<ol class="steps">
        <li data-sr="Nikada ne čitajte verifikacioni kod naglas nikome." data-en="Never read a verification code aloud to anyone.">Nikada ne čitajte verifikacioni kod naglas nikome.</li>
        <li data-sr="Ako stigne kod, prvo proverite da li neko pokušava prijavu u podešavanjima." data-en="If a code arrives, first check settings for a sign-in attempt.">Ako stigne kod, prvo proverite da li neko pokušava prijavu u podešavanjima.</li>
        <li data-sr="Prekinite poziv i kontaktirajte prijatelja drugim kanalom ako on traži kod." data-en="Hang up and contact the friend on another channel if they ask for a code.">Prekinite poziv i kontaktirajte prijatelja drugim kanalom ako on traži kod.</li>
        <li data-sr="Ne unosite kod na stranici otvorenoj iz SMS-a ili četa." data-en="Do not enter a code on a page opened from SMS or chat.">Ne unosite kod na stranici otvorenoj iz SMS-a ili četa.</li>
        <li data-sr="Uključite dvostepenu proveru na WhatsApp-u." data-en="Enable two-step verification on WhatsApp.">Uključite dvostepenu proveru na WhatsApp-u.</li>
        <li data-sr="Blokirajte broj koji insistira na kodu." data-en="Block the number that insists on the code.">Blokirajte broj koji insistira na kodu.</li>
        <li data-sr="Objasnite deci da je kod kao lozinka." data-en="Explain to children a code is like a password.">Objasnite deci da je kod kao lozinka.</li>
        <li data-sr="Proverite da li je poziv snimljen u istoriji sa sumnjivim trajanjem." data-en="Check whether the call was recorded in history with suspicious duration.">Proverite da li je poziv snimljen u istoriji sa sumnjivim trajanjem.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
<ul class="bullets">
            <li data-sr="Da li sam ja tražio kod u tom trenutku?" data-en="Did I request a code at that moment?">Da li sam ja tražio kod u tom trenutku?</li>
            <li data-sr="Da li poziv dolazi od broja koji poznajem?" data-en="Does the call come from a number I know?">Da li poziv dolazi od broja koji poznajem?</li>
            <li data-sr="Da li bih ovaj kod dao službeniku u sali banke?" data-en="Would I give this code to a clerk in a bank hall?">Da li bih ovaj kod dao službeniku u sali banke?</li>
            <li data-sr="Da li osoba na vezi pritisče na strah?" data-en="Does the caller push fear?">Da li osoba na vezi pritisče na strah?</li>
            <li data-sr="Da li mogu da prekinem i da pozovem operatera svog broja?" data-en="Can I hang up and call my carrier operator?">Da li mogu da prekinem i da pozovem operatera svog broja?</li>
            <li data-sr="Da li je isti scenario već viđen u vestima?" data-en="Have I seen the same scenario in the news?">Da li je isti scenario već viđen u vestima?</li>
            <li data-sr="Da li je drugi član domaćinstva dobio sličan SMS?" data-en="Did another household member get a similar SMS?">Da li je drugi član domaćinstva dobio sličan SMS?</li>
            <li data-sr="Da li aplikacija pokazuje novo mesto prijave?" data-en="Does the app show a new login location?">Da li aplikacija pokazuje novo mesto prijave?</li>
            <li data-sr="Da li bih trebalo da promenim PIN dvostepene provere?" data-en="Should I change the two-step PIN?">Da li bih trebalo da promenim PIN dvostepene provere?</li>
            <li data-sr="Da li je tražen i bankovni kod u istom razgovoru?" data-en="Was a bank code also asked in the same conversation?">Da li je tražen i bankovni kod u istom razgovoru?</li>
            <li data-sr="Da li mogu da sačekam pet minuta pre bilo kakvog odgovora?" data-en="Can I wait five minutes before any response?">Da li mogu da sačekam pet minuta pre bilo kakvog odgovora?</li>
            <li data-sr="Da li je ovo isti obrazac kao lažni operater?" data-en="Is this the same pattern as a fake operator?">Da li je ovo isti obrazac kao lažni operater?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
<ol class="steps">
        <li data-sr="Prekinite poziv odmah." data-en="Hang up immediately.">Prekinite poziv odmah.</li>
        <li data-sr="Ne izgovarajte kod; obrišite SMS tek ako niste tražili prijavu." data-en="Do not say the code; delete the SMS if you did not request sign-in.">Ne izgovarajte kod; obrišite SMS tek ako niste tražili prijavu.</li>
        <li data-sr="Odjavite veb uređaje i proverite aktivne sesije." data-en="Log out web devices and check active sessions.">Odjavite veb uređaje i proverite aktivne sesije.</li>
        <li data-sr="Uključite ili promenite dvostepenu proveru." data-en="Enable or change two-step verification.">Uključite ili promenite dvostepenu proveru.</li>
        <li data-sr="Obavestite kontakte kratkom porukom da ignorišu novčane zahteve." data-en="Tell contacts in a short note to ignore money requests.">Obavestite kontakte kratkom porukom da ignorišu novčane zahteve.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si pročitao brojeve sa SMS-a naglas?" data-en="Did you read the SMS numbers aloud?">Da li si pročitao brojeve sa SMS-a naglas?</li>
            <li data-sr="Da li si uneo kod na nekoj stranici?" data-en="Did you enter a code on a website?">Da li si uneo kod na nekoj stranici?</li>
            <li data-sr="Da li si ostao na vezi dok si otvarao SMS?" data-en="Did you stay on the line while opening the SMS?">Da li si ostao na vezi dok si otvarao SMS?</li>
            <li data-sr="Da li sada vidiš tuđi uređaj u podešavanjima?" data-en="Do you now see a foreign device in settings?">Da li sada vidiš tuđi uređaj u podešavanjima?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Kod iz SMS-a nikada se ne čita naglas, ni policiji ni prijatelju." data-en="An SMS code is never read aloud, not to police or a friend.">Kod iz SMS-a nikada se ne čita naglas, ni policiji ni prijatelju.</li>
            <li data-sr="Hajde da prekinemo i proverimo aplikaciju mirno." data-en="Let us hang up and calmly check the app.">Hajde da prekinemo i proverimo aplikaciju mirno.</li>
            <li data-sr="Pravi operater ne traži kod za WhatsApp ovako." data-en="A real operator does not ask for a WhatsApp code this way.">Pravi operater ne traži kod za WhatsApp ovako.</li>
            <li data-sr="Ako je stigao kod, neko pokušava da uđe; odjavljujemo sesije." data-en="If a code arrived, someone is trying to enter; we log out sessions.">Ako je stigao kod, neko pokušava da uđe; odjavljujemo sesije.</li>
          </ul>
        </div>
      </div>
    </section>
`
};
