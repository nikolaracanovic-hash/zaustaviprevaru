window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["viber-bank-impersonation-scam"] = {
  raw_html: `

    <section class="card">
      <h2 data-sr="Uvod: lažna banka u Viber četu" data-en="Introduction: fake bank in Viber chat">Uvod: lažna banka u Viber četu</h2>

      <p data-sr="Nalog sa logotipom banke šalje poruke o sumnjivoj transakciji, blokadi kartice ili nagradi; zatim traži podatke, OTP ili uplatu na siguran račun." data-en="An account with a bank logo sends messages about a suspicious transaction, card block, or prize; then it asks for details, OTP, or payment to a safe account.">Nalog sa logotipom banke šalje poruke o sumnjivoj transakciji, blokadi kartice ili nagradi; zatim traži podatke, OTP ili uplatu na siguran račun.</p>
      <p data-sr="Viber nije kanal u kojem prava banka traži osetljive podatke ili kodove." data-en="Viber is not a channel where a real bank asks for sensitive data or codes.">Viber nije kanal u kojem prava banka traži osetljive podatke ili kodove.</p>
      <div class="callout" data-sr="<strong>Model:</strong> lažni bankarski profil → strah ili nagrada → podaci/OTP/uplata → šteta." data-en="<strong>Model:</strong> fake bank profile → fear or prize → data/OTP/payment → loss."><strong>Model:</strong> lažni bankarski profil → strah ili nagrada → podaci/OTP/uplata → šteta.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako profil deluje poverljivo" data-en="How the profile feels trustworthy">Kako profil deluje poverljivo</h2>

      <p data-sr="Fotografija, ime i opis kopiraju brend; broj nije isti kao na poleđini kartice ili sajtu banke." data-en="Photo, name, and description copy the brand; the number is not the same as on the card back or bank site.">Fotografija, ime i opis kopiraju brend; broj nije isti kao na poleđini kartice ili sajtu banke.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Znakovi lažnog naloga" data-en="Signs of a fake account">Znakovi lažnog naloga</div>
          <ul class="bullets">
            <li data-sr="Inicijativa je njihova; vi niste tražili čet." data-en="They started; you did not request the chat.">Inicijativa je njihova; vi niste tražili čet.</li>
            <li data-sr="Traže fotografiju kartice radi provere." data-en="They ask for a card photo for verification.">Traže fotografiju kartice radi provere.</li>
            <li data-sr="Šalju PDF ili link van bankovnog domena." data-en="They send a PDF or link outside the bank domain.">Šalju PDF ili link van bankovnog domena.</li>
            <li data-sr="Odbijaju referentni broj koji proveravate u filijali." data-en="They refuse a reference number you can verify at a branch.">Odbijaju referentni broj koji proveravate u filijali.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Cilj" data-en="Goal">Cilj</div>
          <ul class="bullets">
            <li data-sr="Prikupljanje OTP za transakciju ili promenu podataka." data-en="Collecting OTP for a transaction or data change.">Prikupljanje OTP za transakciju ili promenu podataka.</li>
            <li data-sr="Uplata na račun koji kontrolišu prevaranti." data-en="Payment to an account the fraudsters control.">Uplata na račun koji kontrolišu prevaranti.</li>
            <li data-sr="Preusmeravanje na lažnu veb prijavu." data-en="Redirecting to a fake web login.">Preusmeravanje na lažnu veb prijavu.</li>
            <li data-sr="Vođenje ka deljenju ekrana u sledećem koraku." data-en="Leading to screen sharing in the next step.">Vođenje ka deljenju ekrana u sledećem koraku.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching).">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Od prve poruke do traženja koda često prođe malo vremena ako ste online." data-en="From first message to code request little time passes if you are online.">Od prve poruke do traženja koda često prođe malo vremena ako ste online.</p>
      <article class="phase ">
        <h3 class="phase-title" data-sr="Faza 1 — Ulaz: poruka sa bankovnim nalozima" data-en="Phase 1 — Entry: message from a bank account">Faza 1 — Ulaz: poruka sa bankovnim nalozima</h3>
        <p data-sr="Stiže upozorenje o transakciji ili poziv da potvrdite identitet u četu." data-en="A transaction warning arrives or you are asked to confirm identity in chat.">Stiže upozorenje o transakciji ili poziv da potvrdite identitet u četu.</p>
        <p data-sr="Ton je služben; koriste se emoji da deluje pristupačno." data-en="The tone is official; emojis are used to feel approachable.">Ton je služben; koriste se emoji da deluje pristupačno.</p>
        <ul class="bullets">
            <li data-sr="Broj nije na listi kontakata banke na sajtu." data-en="The number is not on the bank website contact list.">Broj nije na listi kontakata banke na sajtu.</li>
            <li data-sr="Traži se trenutni odgovor." data-en="An immediate reply is requested.">Traži se trenutni odgovor.</li>
            <li data-sr="Link vodi na domen koji liči na banku uz sitnu grešku." data-en="The link goes to a near-miss bank domain.">Link vodi na domen koji liči na banku uz sitnu grešku.</li>
            <li data-sr="Isti tekst se šalje kao forward u grupama." data-en="The same text is forwarded in groups.">Isti tekst se šalje kao forward u grupama.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta odgovori u četu umesto da pozove broj sa kartice." data-en="<strong>Threshold:</strong> the target replies in chat instead of calling the card number."><strong>Prag faze:</strong> meta odgovori u četu umesto da pozove broj sa kartice.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Prikupljanje podataka i pritisak" data-en="Phase 2 — Data collection and pressure">Faza 2 — Prikupljanje podataka i pritisak</h3>
        <p data-sr="Traže se zadnje cifre kartice, datum isteka, adresa, JMBG ili sigurnosno pitanje." data-en="They ask for last card digits, expiry, address, national ID, or a security question.">Traže se zadnje cifre kartice, datum isteka, adresa, JMBG ili sigurnosno pitanje.</p>
        <ul class="bullets">
            <li data-sr="Tvrdnja da je hitno jer ističe sesija." data-en="A claim it is urgent because the session is expiring.">Tvrdnja da je hitno jer ističe sesija.</li>
            <li data-sr="Prebacivanje na drugog službenika u novom četu." data-en="Handoff to another officer in a new chat.">Prebacivanje na drugog službenika u novom četu.</li>
            <li data-sr="Lažna potvrda identiteta pre nego što ste vi nešto dali." data-en="Fake ID confirmation before you gave anything.">Lažna potvrda identiteta pre nego što ste vi nešto dali.</li>
            <li data-sr="Poziv na glas nakon što ste već poslali deo podataka." data-en="A voice call after you already sent some data.">Poziv na glas nakon što ste već poslali deo podataka.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="bank-impersonation.html" data-sr="Lažna banka" data-en="Bank impersonation">Lažna banka</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik pošalje bar jedan osetljiv podatak ili otvori lažni link." data-en="<strong>Threshold:</strong> the user sends at least one sensitive detail or opens a fake link."><strong>Prag faze:</strong> korisnik pošalje bar jedan osetljiv podatak ili otvori lažni link.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Prag: OTP ili uplata" data-en="Phase 3 — Threshold: OTP or payment">Faza 3 — Prag: OTP ili uplata</h3>
        <p data-sr="Traži se kod iz SMS-a ili potvrda u aplikaciji dok lažni operater čeka u četu." data-en="They ask for the SMS code or in-app approval while the fake operator waits in chat.">Traži se kod iz SMS-a ili potvrda u aplikaciji dok lažni operater čeka u četu.</p>
        <p data-sr="Alternativa je mala uplata radi otključavanja naloga." data-en="An alternative is a small payment to unlock the account.">Alternativa je mala uplata radi otključavanja naloga.</p>
        <ul class="bullets">
            <li data-sr="Molba da pročitate kod naglas na pozivu." data-en="A request to read the code aloud on a call.">Molba da pročitate kod naglas na pozivu.</li>
            <li data-sr="Lažni račun primaoca sa imenom sličnim banci." data-en="A payee name resembling the bank.">Lažni račun primaoca sa imenom sličnim banci.</li>
            <li data-sr="Ponavljanje traženja ako prvi OTP ne prođe." data-en="Repeating the ask if the first OTP fails.">Ponavljanje traženja ako prvi OTP ne prođe.</li>
            <li data-sr="Kombinacija sa linkom za sigurnosnu proveru." data-en="Combined with a security check link.">Kombinacija sa linkom za sigurnosnu proveru.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> novac krene ili transakcija se potvrdi van vaše namere." data-en="<strong>Threshold:</strong> money moves or a transaction is approved outside your intent."><strong>Prag faze:</strong> novac krene ili transakcija se potvrdi van vaše namere.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Zloupotreba naloga ili kartice" data-en="Phase 4 — Abuse of account or card">Faza 4 — Zloupotreba naloga ili kartice</h3>
        <p data-sr="Napadač koristi prikupljene podatke za online kupovine, dodavanje primaoca ili promenu broja u aplikaciji." data-en="The attacker uses collected data for online purchases, adding payees, or changing the app phone number.">Napadač koristi prikupljene podatke za online kupovine, dodavanje primaoca ili promenu broja u aplikaciji.</p>
        <ul class="bullets">
            <li data-sr="Serija malih uplata ispod tipičnog praga pažnje." data-en="A series of small transfers below a typical attention threshold.">Serija malih uplata ispod tipičnog praga pažnje.</li>
            <li data-sr="Pokušaj pozajmice ili kreditne kartice na vaše podatke." data-en="Loan or credit card attempts on your data.">Pokušaj pozajmice ili kreditne kartice na vaše podatke.</li>
            <li data-sr="Blokada naloga od strane banke zbog sumnjivih obrazaca." data-en="Bank account lock due to suspicious patterns.">Blokada naloga od strane banke zbog sumnjivih obrazaca.</li>
            <li data-sr="Širenje istog Viber naloga na druge žrtve." data-en="Spreading the same Viber account to other victims.">Širenje istog Viber naloga na druge žrtve.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="otp-interception.html" data-sr="Presretanje OTP" data-en="OTP interception">Presretanje OTP</a></li>
            <li><a href="whatsapp-screen-sharing-bank-scam.html" data-sr="WhatsApp: deljenje ekrana sa bankom" data-en="WhatsApp: screen sharing with fake bank">WhatsApp: deljenje ekrana sa bankom</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> finansijska šteta postane vidljiva na izvodu ili u aplikaciji." data-en="<strong>Threshold:</strong> financial harm shows on a statement or in the app."><strong>Prag faze:</strong> finansijska šteta postane vidljiva na izvodu ili u aplikaciji.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Otkrivanje" data-en="Phase 5 — Discovery">Faza 5 — Otkrivanje</h3>
        <p data-sr="Banka šalje SMS, čet prestane da odgovara ili prijatelj upozori na lažan profil." data-en="The bank sends SMS, the chat stops replying, or a friend warns about a fake profile.">Banka šalje SMS, čet prestane da odgovara ili prijatelj upozori na lažan profil.</p>
        <ul class="bullets">
            <li data-sr="Transakcije ne odgovaraju sećanju." data-en="Transactions do not match memory.">Transakcije ne odgovaraju sećanju.</li>
            <li data-sr="Broj za povratni poziv ne postoji." data-en="The callback number does not exist.">Broj za povratni poziv ne postoji.</li>
            <li data-sr="Zvanična banka demantuje Viber kanal na svom sajtu." data-en="The official bank debunks a Viber channel on its site.">Zvanična banka demantuje Viber kanal na svom sajtu.</li>
            <li data-sr="Profilna slika je ukradena sa interneta niske rezolucije." data-en="The profile photo is a low-res web steal.">Profilna slika je ukradena sa interneta niske rezolucije.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> žrtva poveže štetu sa Viber razgovorom." data-en="<strong>Threshold:</strong> the victim ties harm to the Viber conversation."><strong>Prag faze:</strong> žrtva poveže štetu sa Viber razgovorom.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Sanacija" data-en="Phase 6 — Remediation">Faza 6 — Sanacija</h3>
        <p data-sr="Prekinite čet, pozovite banku sa poleđine kartice, blokirajte broj, blokirajte karticu po potrebi, prijavite prevaru." data-en="End the chat, call the bank from the card back, block the number, block the card if needed, report fraud.">Prekinite čet, pozovite banku sa poleđine kartice, blokirajte broj, blokirajte karticu po potrebi, prijavite prevaru.</p>
        <p data-sr="Sačuvajte istoriju četa i slike profila pre brisanja." data-en="Save chat history and profile images before deletion.">Sačuvajte istoriju četa i slike profila pre brisanja.</p>
        <ul class="bullets">
            <li data-sr="Promenite lozinke aplikacije i uključite dodatnu zaštitu ako postoji." data-en="Change app passwords and enable extra protection if available.">Promenite lozinke aplikacije i uključite dodatnu zaštitu ako postoji.</li>
            <li data-sr="Prijavite nalog Viberu kao lažan." data-en="Report the account to Viber as fake.">Prijavite nalog Viberu kao lažan.</li>
            <li data-sr="Proverite da li je u aplikaciji banke promenjen broj telefona." data-en="Check whether the bank app phone number was changed.">Proverite da li je u aplikaciji banke promenjen broj telefona.</li>
            <li data-sr="Obavestite porodicu da banka ne traži OTP u četu." data-en="Tell family the bank does not ask for OTP in chat.">Obavestite porodicu da banka ne traži OTP u četu.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="fake-call-scam.html" data-sr="Lažni pozivi" data-en="Fake calls">Lažni pozivi</a></li>
            <li><a href="viber-official-impersonation-scam.html" data-sr="Viber: lažni zvanični nalog" data-en="Viber: fake official account scam">Viber: lažni zvanični nalog</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik kontaktira banku isključivo zvaničnim brojem." data-en="<strong>Threshold:</strong> the user contacts the bank only on an official number."><strong>Prag faze:</strong> korisnik kontaktira banku isključivo zvaničnim brojem.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
<ul class="bullets">
            <li data-sr="Banka prva otvara Viber čet bez vašeg zahteva." data-en="The bank opens Viber chat first without your request.">Banka prva otvara Viber čet bez vašeg zahteva.</li>
            <li data-sr="Traženje fotografije prednje ili zadnje strane kartice." data-en="Request for a front or back card photo.">Traženje fotografije prednje ili zadnje strane kartice.</li>
            <li data-sr="Traženje OTP ili PIN-a u poruci." data-en="Asking for OTP or PIN in a message.">Traženje OTP ili PIN-a u poruci.</li>
            <li data-sr="Link ka prijavi koji nije na bankovnom domenu." data-en="A login link not on the bank domain.">Link ka prijavi koji nije na bankovnom domenu.</li>
            <li data-sr="Pritisak zbog krivične odgovornosti ako ne sarađujete." data-en="Pressure about criminal liability if you do not cooperate.">Pritisak zbog krivične odgovornosti ako ne sarađujete.</li>
            <li data-sr="Više brojeva koji se smenjuju tokom istog slučaja." data-en="Multiple numbers rotating in the same case.">Više brojeva koji se smenjuju tokom istog slučaja.</li>
            <li data-sr="Ponuda nagrade ili povrata novca preko četa." data-en="A prize or refund offer over chat.">Ponuda nagrade ili povrata novca preko četa.</li>
            <li data-sr="Zahtev da instalirate drugu aplikaciju radi sigurnosti." data-en="Request to install another app for security.">Zahtev da instalirate drugu aplikaciju radi sigurnosti.</li>
            <li data-sr="Loš prevod ili mešavina jezika u službenim porukama." data-en="Poor translation or mixed language in official messages.">Loš prevod ili mešavina jezika u službenim porukama.</li>
            <li data-sr="Traženje deljenja ekrana nakon što ste već otkrili sumnju." data-en="Screen share requested after you already showed suspicion.">Traženje deljenja ekrana nakon što ste već otkrili sumnju.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
<ol class="steps">
        <li data-sr="Prekinite čet i pozovite broj sa poleđine kartice." data-en="End the chat and call the number on the card back.">Prekinite čet i pozovite broj sa poleđine kartice.</li>
        <li data-sr="Uporedite Viber broj sa zvaničnim kontaktima na sajtu banke." data-en="Compare the Viber number with official contacts on the bank website.">Uporedite Viber broj sa zvaničnim kontaktima na sajtu banke.</li>
        <li data-sr="Ne šaljite OTP, PIN ni fotografiju kartice u četu." data-en="Do not send OTP, PIN, or card photos in chat.">Ne šaljite OTP, PIN ni fotografiju kartice u četu.</li>
        <li data-sr="Ne klikajte linkove iz sumnjivog četa." data-en="Do not click links from suspicious chat.">Ne klikajte linkove iz sumnjivog četa.</li>
        <li data-sr="Zatražite incident broj kroz aplikaciju koju ste sami instalirali." data-en="Ask for an incident ID through an app you installed yourself.">Zatražite incident broj kroz aplikaciju koju ste sami instalirali.</li>
        <li data-sr="Proverite transakcije direktno u aplikaciji pre bilo kakve pomoći." data-en="Check transactions in the app before any help.">Proverite transakcije direktno u aplikaciji pre bilo kakve pomoći.</li>
        <li data-sr="Prijavite lažni nalog u Viberu." data-en="Report the fake account in Viber.">Prijavite lažni nalog u Viberu.</li>
        <li data-sr="Obavestite starije u kući da ovo nije normalna procedura." data-en="Tell older household members this is not normal procedure.">Obavestite starije u kući da ovo nije normalna procedura.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
<ul class="bullets">
            <li data-sr="Da li sam ja tražio kontakt sa bankom?" data-en="Did I request bank contact?">Da li sam ja tražio kontakt sa bankom?</li>
            <li data-sr="Da li broj postoji na sajtu banke?" data-en="Does the number exist on the bank website?">Da li broj postoji na sajtu banke?</li>
            <li data-sr="Da li traže kod iz SMS-a?" data-en="Are they asking for an SMS code?">Da li traže kod iz SMS-a?</li>
            <li data-sr="Da li traže uplatu na privatni račun?" data-en="Are they asking payment to a private account?">Da li traže uplatu na privatni račun?</li>
            <li data-sr="Da li bih ovo uradio u filijali?" data-en="Would I do this in a branch?">Da li bih ovo uradio u filijali?</li>
            <li data-sr="Da li mogu da zatvorim čet i da se javim sutra?" data-en="Can I close the chat and follow up tomorrow?">Da li mogu da zatvorim čet i da se javim sutra?</li>
            <li data-sr="Da li je ton previše prijateljski za banku?" data-en="Is the tone too friendly for a bank?">Da li je ton previše prijateljski za banku?</li>
            <li data-sr="Da li link ima čudan domen?" data-en="Does the link have an odd domain?">Da li link ima čudan domen?</li>
            <li data-sr="Da li me tera da ne pitam nikog drugog?" data-en="Are they pushing me not to ask anyone else?">Da li me tera da ne pitam nikog drugog?</li>
            <li data-sr="Da li je ista poruka stigla i drugima?" data-en="Did the same message reach others too?">Da li je ista poruka stigla i drugima?</li>
            <li data-sr="Da li bih trebalo da blokiram broj?" data-en="Should I block the number?">Da li bih trebalo da blokiram broj?</li>
            <li data-sr="Da li sam već poslao neki podatak?" data-en="Did I already send any detail?">Da li sam već poslao neki podatak?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
<ol class="steps">
        <li data-sr="Prestanite da odgovarate u četu." data-en="Stop replying in chat.">Prestanite da odgovarate u četu.</li>
        <li data-sr="Pozovite banku zvaničnim brojem." data-en="Call the bank on an official number.">Pozovite banku zvaničnim brojem.</li>
        <li data-sr="Blokirajte lažni Viber nalog i prijavite ga." data-en="Block and report the fake Viber account.">Blokirajte lažni Viber nalog i prijavite ga.</li>
        <li data-sr="Blokirajte karticu ako ste delili podatke." data-en="Block the card if you shared details.">Blokirajte karticu ako ste delili podatke.</li>
        <li data-sr="Pratite izvod narednih dana." data-en="Watch the statement for the next days.">Pratite izvod narednih dana.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si slao kod ili sliku kartice?" data-en="Did you send a code or card image?">Da li si slao kod ili sliku kartice?</li>
            <li data-sr="Da li si kliknuo link iz četa?" data-en="Did you click a link from chat?">Da li si kliknuo link iz četa?</li>
            <li data-sr="Da li je broj isti kao na sajtu banke?" data-en="Is the number the same as on the bank website?">Da li je broj isti kao na sajtu banke?</li>
            <li data-sr="Da li vidiš sumnjive transakcije?" data-en="Do you see suspicious transactions?">Da li vidiš sumnjive transakcije?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Banka ne traži OTP u Viber četu." data-en="The bank does not ask for OTP in Viber chat.">Banka ne traži OTP u Viber četu.</li>
            <li data-sr="Hajde da pozovemo broj sa kartice, ne da odgovaramo ovde." data-en="Let us call the card number, not reply here.">Hajde da pozovemo broj sa kartice, ne da odgovaramo ovde.</li>
            <li data-sr="Slika kartice je kao original; ne šaljemo je u čet." data-en="A card image is like the original; we do not send it in chat.">Slika kartice je kao original; ne šaljemo je u čet.</li>
            <li data-sr="Ako je hitno, banka ima službeni broj koji proveravamo na sajtu." data-en="If it is urgent, the bank has an official number we verify on the site.">Ako je hitno, banka ima službeni broj koji proveravamo na sajtu.</li>
          </ul>
        </div>
      </div>
    </section>
`
};
