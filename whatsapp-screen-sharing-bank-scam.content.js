window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["whatsapp-screen-sharing-bank-scam"] = {
  raw_html: `

    <section class="card">
      <h2 data-sr="Uvod: banka na WhatsApp-u traži deljenje ekrana" data-en="Introduction: a bank on WhatsApp asks for screen share">Uvod: banka na WhatsApp-u traži deljenje ekrana</h2>

      <p data-sr="Prevarant koristi WhatsApp profil sa logotipom i piše kao operater; zatim prelazi na poziv ili video i traži deljenje ekrana dok je bankovna aplikacija otvorena." data-en="The fraudster uses a WhatsApp profile with a logo and writes like an operator; then moves to a call or video and asks for screen share while the banking app is open.">Prevarant koristi WhatsApp profil sa logotipom i piše kao operater; zatim prelazi na poziv ili video i traži deljenje ekrana dok je bankovna aplikacija otvorena.</p>
      <p data-sr="Isti obrazac postoji i van WhatsApp-a, ali ovde poverenje u čet ubrzava odluku." data-en="The same pattern exists outside WhatsApp, but trust in chat speeds the decision here.">Isti obrazac postoji i van WhatsApp-a, ali ovde poverenje u čet ubrzava odluku.</p>
      <div class="callout" data-sr="<strong>Model:</strong> lažni operater u četu → poziv → deljenje ekrana → čitanje OTP/salda → šteta." data-en="<strong>Model:</strong> fake operator in chat → call → screen share → reading OTP/balance → loss."><strong>Model:</strong> lažni operater u četu → poziv → deljenje ekrana → čitanje OTP/salda → šteta.</div>
    </section>

    <section class="card">
      <h2 data-sr="Zašto WhatsApp pomaže prevarantu" data-en="Why WhatsApp helps the fraudster">Zašto WhatsApp pomaže prevarantu</h2>

      <p data-sr="Korisnik je navikao na brze odgovore u četu i na slike dokaza kao što su lažne legitimacije." data-en="The user is used to fast chat replies and proof images like fake credentials.">Korisnik je navikao na brze odgovore u četu i na slike dokaza kao što su lažne legitimacije.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Znakovi lažnog operatera" data-en="Signs of a fake operator">Znakovi lažnog operatera</div>
          <ul class="bullets">
            <li data-sr="Inicijativa dolazi od njih; vi niste zatražili čet." data-en="They initiated; you did not request the chat.">Inicijativa dolazi od njih; vi niste zatražili čet.</li>
            <li data-sr="Traže video poziv radi sigurnosti." data-en="They ask for a video call for security.">Traže video poziv radi sigurnosti.</li>
            <li data-sr="Šalju slike sa lažnim ID brojevima zaposlenog." data-en="They send images with fake employee ID numbers.">Šalju slike sa lažnim ID brojevima zaposlenog.</li>
            <li data-sr="Odbijaju da date referentni broj koji proveravate u filijali." data-en="They refuse a reference number you can verify at a branch.">Odbijaju da date referentni broj koji proveravate u filijali.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Šta gledaju na ekranu" data-en="What they view on screen">Šta gledaju na ekranu</div>
          <ul class="bullets">
            <li data-sr="OTP koji stigne kao notifikacija." data-en="An OTP arriving as a notification.">OTP koji stigne kao notifikacija.</li>
            <li data-sr="Lista kartica i maskirani brojevi dovoljni za druge korake." data-en="Card list and masked numbers enough for further steps.">Lista kartica i maskirani brojevi dovoljni za druge korake.</li>
            <li data-sr="Meniji za promenu broja telefona u aplikaciji." data-en="Menus to change the phone number in the app.">Meniji za promenu broja telefona u aplikaciji.</li>
            <li data-sr="Istorija transakcija za prilagođenu priču o napadu." data-en="Transaction history for a tailored attack story.">Istorija transakcija za prilagođenu priču o napadu.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching).">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Prelazak sa četa na glas često traje manje od jednog sata." data-en="Moving from chat to voice often takes under an hour.">Prelazak sa četa na glas često traje manje od jednog sata.</p>
      <article class="phase ">
        <h3 class="phase-title" data-sr="Faza 1 — Ulaz: poruka banka vas kontaktira" data-en="Phase 1 — Entry: the bank contacts you message">Faza 1 — Ulaz: poruka banka vas kontaktira</h3>
        <p data-sr="Stiže tekst o sumnjivoj transakciji, blokadi naloga ili nagradi uz zahtev da odgovorite u četu." data-en="Text arrives about a suspicious transaction, account block, or prize with a request to reply in chat.">Stiže tekst o sumnjivoj transakciji, blokadi naloga ili nagradi uz zahtev da odgovorite u četu.</p>
        <p data-sr="Profilna slika i ime liče na banku, ali broj nije onaj sa kartice." data-en="The profile photo and name resemble the bank, but the number is not the one on the card.">Profilna slika i ime liče na banku, ali broj nije onaj sa kartice.</p>
        <ul class="bullets">
            <li data-sr="Ton je služben i kratak." data-en="The tone is official and brief.">Ton je služben i kratak.</li>
            <li data-sr="Traži se trenutna dostupnost." data-en="Immediate availability is requested.">Traži se trenutna dostupnost.</li>
            <li data-sr="Šalju se emotikoni da deluje pristupačno." data-en="Emojis are sent to feel approachable.">Šalju se emotikoni da deluje pristupačno.</li>
            <li data-sr="Link ka PDF-u saopštenja van bankovnog domena." data-en="A link to a PDF statement outside the bank domain.">Link ka PDF-u saopštenja van bankovnog domena.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta odgovori u četu umesto da pozove broj sa poleđine kartice." data-en="<strong>Threshold:</strong> the target replies in chat instead of calling the card-back number."><strong>Prag faze:</strong> meta odgovori u četu umesto da pozove broj sa poleđine kartice.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Prelazak na poziv i uveravanje" data-en="Phase 2 — Switch to call and reassurance">Faza 2 — Prelazak na poziv i uveravanje</h3>
        <p data-sr="Operater traži da instalirate aplikaciju za deljenje ekrana ili ugrađenu funkciju telefona." data-en="The operator asks you to install a screen-sharing app or a built-in phone feature.">Operater traži da instalirate aplikaciju za deljenje ekrana ili ugrađenu funkciju telefona.</p>
        <ul class="bullets">
            <li data-sr="Tvrdnja da je čet nezaključan pa mora glas." data-en="A claim chat is unencrypted so voice is required.">Tvrdnja da je čet nezaključan pa mora glas.</li>
            <li data-sr="Molba da ne stavljate poziv na čekanje." data-en="A request not to put the call on hold.">Molba da ne stavljate poziv na čekanje.</li>
            <li data-sr="Lažna potvrda identiteta pre nego što ste vi nešto rekli." data-en="Fake identity confirmation before you said anything.">Lažna potvrda identiteta pre nego što ste vi nešto rekli.</li>
            <li data-sr="Druga osoba na liniji kao nadzornik." data-en="A second person on the line as a supervisor.">Druga osoba na liniji kao nadzornik.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="banking-app-screen-share.html" data-sr="Deljenje ekrana bankovne aplikacije" data-en="Banking app screen sharing scam">Deljenje ekrana bankovne aplikacije</a></li>
            <li><a href="fake-call-scam.html" data-sr="Lažni pozivi" data-en="Fake calls">Lažni pozivi</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik prihvati glasovni poziv sa nepoznatog broja povezanog sa četom." data-en="<strong>Threshold:</strong> the user accepts a voice call from an unknown number tied to the chat."><strong>Prag faze:</strong> korisnik prihvati glasovni poziv sa nepoznatog broja povezanog sa četom.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Prag: ekran sa bankovnom aplikacijom" data-en="Phase 3 — Threshold: screen with the banking app">Faza 3 — Prag: ekran sa bankovnom aplikacijom</h3>
        <p data-sr="Otvara se aplikacija banke dok je deljenje uključeno; napadač vidi šta kliknete i šta stigne kao kod." data-en="The bank app opens while sharing is on; the attacker sees what you click and what arrives as a code.">Otvara se aplikacija banke dok je deljenje uključeno; napadač vidi šta kliknete i šta stigne kao kod.</p>
        <p data-sr="Korisnik misli da samo pokazuje da nije prevarant." data-en="The user thinks they are just showing they are not a fraudster.">Korisnik misli da samo pokazuje da nije prevarant.</p>
        <ul class="bullets">
            <li data-sr="Traži se da pročitate broj kartice naglas." data-en="You are asked to read the card number aloud.">Traži se da pročitate broj kartice naglas.</li>
            <li data-sr="Traži se da potvrdite transakciju koju ste tek videli u lažnom mejlu." data-en="You are asked to approve a transaction you saw in a fake email.">Traži se da potvrdite transakciju koju ste tek videli u lažnom mejlu.</li>
            <li data-sr="Kamera gleda i obaveštenja van aplikacije." data-en="The view includes notifications outside the app.">Kamera gleda i obaveštenja van aplikacije.</li>
            <li data-sr="Pritisak da ne gasite deljenje dok sistem ne završi." data-en="Pressure not to stop sharing until the system finishes.">Pritisak da ne gasite deljenje dok sistem ne završi.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> osetljivi podaci postanu vidljivi uživo strancu." data-en="<strong>Threshold:</strong> sensitive data becomes visible live to a stranger."><strong>Prag faze:</strong> osetljivi podaci postanu vidljivi uživo strancu.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Zloupotreba naloga ili novca" data-en="Phase 4 — Abuse of account or money">Faza 4 — Zloupotreba naloga ili novca</h3>
        <p data-sr="Napadač koristi OTP, menja podatke u aplikaciji ili šalje uplate dok vi još razgovarate." data-en="The attacker uses an OTP, changes app settings, or sends transfers while you still talk.">Napadač koristi OTP, menja podatke u aplikaciji ili šalje uplate dok vi još razgovarate.</p>
        <ul class="bullets">
            <li data-sr="Brze serije malih uplata ispod vašeg praga pažnje." data-en="Fast series of small transfers below your attention threshold.">Brze serije malih uplata ispod vašeg praga pažnje.</li>
            <li data-sr="Dodavanje novog primaoca sa lažnim imenom." data-en="Adding a new payee with a fake label.">Dodavanje novog primaoca sa lažnim imenom.</li>
            <li data-sr="Zahtev za test povrat koji zapravo odobrava pravu uplatu." data-en="A test refund request that actually approves a real payment.">Zahtev za test povrat koji zapravo odobrava pravu uplatu.</li>
            <li data-sr="Kopiranje sigurnosnih pitanja iz četa ako ste ih ranije pomenuli." data-en="Copying security questions from chat if you mentioned them earlier.">Kopiranje sigurnosnih pitanja iz četa ako ste ih ranije pomenuli.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="bank-impersonation.html" data-sr="Lažna banka" data-en="Bank impersonation">Lažna banka</a></li>
            <li><a href="otp-interception.html" data-sr="Presretanje OTP" data-en="OTP interception">Presretanje OTP</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> izvrši se transakcija ili promena naloga koju niste sami smislili." data-en="<strong>Threshold:</strong> a transaction or account change runs that you did not intend."><strong>Prag faze:</strong> izvrši se transakcija ili promena naloga koju niste sami smislili.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Otkrivanje" data-en="Phase 5 — Discovery">Faza 5 — Otkrivanje</h3>
        <p data-sr="Banka šalje SMS o uplatama ili vi vidite prazan račun tek posle poziva." data-en="The bank sends SMS about payments or you see an empty balance only after the call.">Banka šalje SMS o uplatama ili vi vidite prazan račun tek posle poziva.</p>
        <ul class="bullets">
            <li data-sr="Istorija aplikacije ne odgovara vašem sećanju." data-en="App history does not match your memory.">Istorija aplikacije ne odgovara vašem sećanju.</li>
            <li data-sr="Čet sa bankom prestane da odgovara." data-en="The bank chat stops replying.">Čet sa bankom prestane da odgovara.</li>
            <li data-sr="Broj za povratni poziv ne postoji." data-en="The callback number does not exist.">Broj za povratni poziv ne postoji.</li>
            <li data-sr="Korisnik se seti da je delio ekran." data-en="The user remembers screen sharing.">Korisnik se seti da je delio ekran.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> žrtva povezuje štetu sa četom i pozivom." data-en="<strong>Threshold:</strong> the victim ties harm to the chat and call."><strong>Prag faze:</strong> žrtva povezuje štetu sa četom i pozivom.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Sanacija" data-en="Phase 6 — Remediation">Faza 6 — Sanacija</h3>
        <p data-sr="Odmah prekinuti deljenje, pozvati banku sa poleđine kartice, blokirati karticu po potrebi, prijaviti prevaru." data-en="Stop sharing immediately, call the bank from the card back, block the card if needed, report fraud.">Odmah prekinuti deljenje, pozvati banku sa poleđine kartice, blokirati karticu po potrebi, prijaviti prevaru.</p>
        <p data-sr="Sačuvati čet kao dokaz; ne brisati pre nego što banka da uputstvo." data-en="Save the chat as evidence; do not delete before the bank instructs.">Sačuvati čet kao dokaz; ne brisati pre nego što banka da uputstvo.</p>
        <ul class="bullets">
            <li data-sr="Promeniti lozinku aplikacije sa čistog uređaja." data-en="Change the app password from a clean device.">Promeniti lozinku aplikacije sa čistog uređaja.</li>
            <li data-sr="Ukloniti programe za daljinski pristup koje niste tražili." data-en="Remove remote access software you did not request.">Ukloniti programe za daljinski pristup koje niste tražili.</li>
            <li data-sr="Proveriti da li je promenjen broj telefona u nalogu." data-en="Check whether the phone number in the account changed.">Proveriti da li je promenjen broj telefona u nalogu.</li>
            <li data-sr="Prijaviti broj prevaranta operateru i u aplikaciji." data-en="Report the fraudster number to the carrier and in the app.">Prijaviti broj prevaranta operateru i u aplikaciji.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="tech-support-scam.html" data-sr="Lažna podrška" data-en="Tech support scam">Lažna podrška</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik kontaktira banku isključivo zvaničnim kanalom." data-en="<strong>Threshold:</strong> the user contacts the bank only through official channels."><strong>Prag faze:</strong> korisnik kontaktira banku isključivo zvaničnim kanalom.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
<ul class="bullets">
            <li data-sr="Banka inicira kontakt preko WhatsApp-a bez vašeg zahteva." data-en="The bank initiates on WhatsApp without your request.">Banka inicira kontakt preko WhatsApp-a bez vašeg zahteva.</li>
            <li data-sr="Traženje deljenja ekrana u prvom razgovoru." data-en="Screen sharing requested in the first conversation.">Traženje deljenja ekrana u prvom razgovoru.</li>
            <li data-sr="Profil koristi logo banke ali broj nije objavljen na sajtu banke." data-en="The profile uses the bank logo but the number is not on the bank website.">Profil koristi logo banke ali broj nije objavljen na sajtu banke.</li>
            <li data-sr="Govor o krivičnoj odgovornosti ako ne sarađujete." data-en="Talk of criminal liability if you do not cooperate.">Govor o krivičnoj odgovornosti ako ne sarađujete.</li>
            <li data-sr="Zahtev da pročitate OTP naglas." data-en="A request to read OTP aloud.">Zahtev da pročitate OTP naglas.</li>
            <li data-sr="Linkovi ka PDF-u na Google drajvu bez potpisa banke." data-en="Links to PDFs on generic drives without bank signing.">Linkovi ka PDF-u na Google drajvu bez potpisa banke.</li>
            <li data-sr="Više brojeva koji se smenjuju tokom istog dana." data-en="Multiple numbers rotating the same day.">Više brojeva koji se smenjuju tokom istog dana.</li>
            <li data-sr="Odbijanje da sačekaju dok vi sami pozovete filijalu." data-en="Refusal to wait while you call the branch yourself.">Odbijanje da sačekaju dok vi sami pozovete filijalu.</li>
            <li data-sr="Čudan jezik ili prevod u porukama operatera." data-en="Odd language or translation in operator messages.">Čudan jezik ili prevod u porukama operatera.</li>
            <li data-sr="Traženje fotografije prednje i zadnje strane kartice." data-en="A request for photos of the front and back of the card.">Traženje fotografije prednje i zadnje strane kartice.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
<ol class="steps">
        <li data-sr="Prekinite čet i pozovite broj sa poleđine kartice." data-en="End the chat and call the number on the card back.">Prekinite čet i pozovite broj sa poleđine kartice.</li>
        <li data-sr="Ne delite ekran sa kontaktom koji vam je pisao prvi." data-en="Do not share screen with a contact who messaged you first.">Ne delite ekran sa kontaktom koji vam je pisao prvi.</li>
        <li data-sr="Uporedite WhatsApp broj sa listom zvaničnih kanala na sajtu banke." data-en="Compare the WhatsApp number with official channels listed on the bank site.">Uporedite WhatsApp broj sa listom zvaničnih kanala na sajtu banke.</li>
        <li data-sr="Zatvorite bankovnu aplikaciju pre bilo kakvog daljinskog alata." data-en="Close the banking app before any remote tool.">Zatvorite bankovnu aplikaciju pre bilo kakvog daljinskog alata.</li>
        <li data-sr="Ne čitajte kodove naglas ni u četu ni na pozivu." data-en="Do not read codes aloud in chat or on a call.">Ne čitajte kodove naglas ni u četu ni na pozivu.</li>
        <li data-sr="Zatražite pisanu potvrdu incidenta kroz aplikaciju koju ste sami instalirali." data-en="Ask for written incident confirmation through an app you installed yourself.">Zatražite pisanu potvrdu incidenta kroz aplikaciju koju ste sami instalirali.</li>
        <li data-sr="Proverite transakcije direktno u aplikaciji pre bilo kakve pomoći." data-en="Check transactions directly in the app before any help.">Proverite transakcije direktno u aplikaciji pre bilo kakve pomoći.</li>
        <li data-sr="Obavestite porodicu da banka ne rešava ovakve stvari preko četa." data-en="Tell family the bank does not resolve such matters over chat.">Obavestite porodicu da banka ne rešava ovakve stvari preko četa.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
<ul class="bullets">
            <li data-sr="Da li sam ja tražio kontakt sa bankom pre ovog četa?" data-en="Did I request bank contact before this chat?">Da li sam ja tražio kontakt sa bankom pre ovog četa?</li>
            <li data-sr="Da li broj odgovara zvaničnom izvoru?" data-en="Does the number match an official source?">Da li broj odgovara zvaničnom izvoru?</li>
            <li data-sr="Da li traže ekran dok je banka otvorena?" data-en="Do they want the screen while banking is open?">Da li traže ekran dok je banka otvorena?</li>
            <li data-sr="Da li bih ovo uradio u filijali pred službenikom?" data-en="Would I do this in a branch in front of staff?">Da li bih ovo uradio u filijali pred službenikom?</li>
            <li data-sr="Da li poziv dolazi sa istog broja kao čet?" data-en="Does the call come from the same number as the chat?">Da li poziv dolazi sa istog broja kao čet?</li>
            <li data-sr="Da li osećam pritisak da ne prekidam vezu?" data-en="Do I feel pressure not to hang up?">Da li osećam pritisak da ne prekidam vezu?</li>
            <li data-sr="Da li je tema strašna ili ponižavajuća?" data-en="Is the topic frightening or shaming?">Da li je tema strašna ili ponižavajuća?</li>
            <li data-sr="Da li mogu da zatvorim sve i da se javim sutra?" data-en="Can I close everything and follow up tomorrow?">Da li mogu da zatvorim sve i da se javim sutra?</li>
            <li data-sr="Da li traže instalaciju programa koji ne poznajem?" data-en="Are they asking me to install unfamiliar software?">Da li traže instalaciju programa koji ne poznajem?</li>
            <li data-sr="Da li sam već uneo podatak koji taj čovek ne bi smeo da zna?" data-en="Have I already entered data this person should not know?">Da li sam već uneo podatak koji taj čovek ne bi smeo da zna?</li>
            <li data-sr="Da li postoji drugi način provere transakcije?" data-en="Is there another way to verify the transaction?">Da li postoji drugi način provere transakcije?</li>
            <li data-sr="Da li bih trebalo da prijavim broj kao sumnjiv?" data-en="Should I report the number as suspicious?">Da li bih trebalo da prijavim broj kao sumnjiv?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
<ol class="steps">
        <li data-sr="Isključite deljenje ekrana i prekinite poziv." data-en="Turn off screen sharing and end the call.">Isključite deljenje ekrana i prekinite poziv.</li>
        <li data-sr="Ne odgovarajte više u istom četu." data-en="Do not reply further in the same chat.">Ne odgovarajte više u istom četu.</li>
        <li data-sr="Pozovite banku zvaničnim brojem i opišite šta se desilo." data-en="Call the bank on an official number and describe what happened.">Pozovite banku zvaničnim brojem i opišite šta se desilo.</li>
        <li data-sr="Blokirajte broj i prijavite ga u aplikaciji." data-en="Block the number and report it in the app.">Blokirajte broj i prijavite ga u aplikaciji.</li>
        <li data-sr="Pratite stanje računa narednih 48 sati." data-en="Monitor the account for the next 48 hours.">Pratite stanje računa narednih 48 sati.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si delio ekran sa bankom na WhatsApp-u?" data-en="Did you screen-share with a bank on WhatsApp?">Da li si delio ekran sa bankom na WhatsApp-u?</li>
            <li data-sr="Da li si čitao kod naglas?" data-en="Did you read a code aloud?">Da li si čitao kod naglas?</li>
            <li data-sr="Da li si instalirao TeamViewer ili slično?" data-en="Did you install TeamViewer or similar?">Da li si instalirao TeamViewer ili slično?</li>
            <li data-sr="Da li vidiš uplate koje ne pamtiš?" data-en="Do you see payments you do not remember?">Da li vidiš uplate koje ne pamtiš?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Banka ne traži deljenje ekrana preko četa sa nepoznatog broja." data-en="The bank does not ask for screen share over chat from an unknown number.">Banka ne traži deljenje ekrana preko četa sa nepoznatog broja.</li>
            <li data-sr="Hajde da pozovemo broj sa kartice, ne da odgovaramo u četu." data-en="Let us call the card number, not reply in chat.">Hajde da pozovemo broj sa kartice, ne da odgovaramo u četu.</li>
            <li data-sr="OTP je tajna reč; ne čitamo je naglas." data-en="An OTP is a secret word; we do not read it aloud.">OTP je tajna reč; ne čitamo je naglas.</li>
            <li data-sr="Ako je sumnjivo, prvo gasimo deljenje, pa razmišljamo." data-en="If it is suspicious, we turn off sharing first, then think.">Ako je sumnjivo, prvo gasimo deljenje, pa razmišljamo.</li>
          </ul>
        </div>
      </div>
    </section>
`
};
