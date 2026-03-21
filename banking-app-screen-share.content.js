window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["banking-app-screen-share"] = {
  raw_html: `

    <section class="card">
      <h2 data-sr="Uvod: deljenje ekrana sa lažnom podrškom" data-en="Introduction: screen sharing with fake support">Uvod: deljenje ekrana sa lažnom podrškom</h2>

      <p data-sr="Prevarant se predstavlja kao banka ili tehnička podrška i traži da podelite ekran dok je bankovna aplikacija otvorena. Tako vidi saldo, kartice, kodove i istoriju." data-en="The fraudster poses as the bank or tech support and asks you to share the screen while the banking app is open. That exposes balances, cards, codes, and history.">Prevarant se predstavlja kao banka ili tehnička podrška i traži da podelite ekran dok je bankovna aplikacija otvorena. Tako vidi saldo, kartice, kodove i istoriju.</p>
      <p data-sr="Prava podrška ponekad koristi deljenje ekrana, ali nikada ne traži OTP i ne gura na brzinu van zakazanog službenog toka." data-en="Real support may use screen sharing, but it never asks for OTP and does not push rushed steps outside a scheduled official flow.">Prava podrška ponekad koristi deljenje ekrana, ali nikada ne traži OTP i ne gura na brzinu van zakazanog službenog toka.</p>
      <div class="callout" data-sr="<strong>Model:</strong> poziv ili poruka → deljenje ekrana → čitanje podataka → prag (kod ili potvrda) → šteta." data-en="<strong>Model:</strong> call or message → screen share → reading data → threshold (code or approval) → loss."><strong>Model:</strong> poziv ili poruka → deljenje ekrana → čitanje podataka → prag (kod ili potvrda) → šteta.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako prolazi pritisak" data-en="How pressure works">Kako prolazi pritisak</h2>

      <p data-sr="Korisnik je već uznemiren zbog lažnog upozorenja o transakciji. Deljenje ekrana deluje kao najbrži način da dokaže identitet." data-en="The user is already upset about a fake transaction alert. Screen sharing feels like the fastest way to prove identity.">Korisnik je već uznemiren zbog lažnog upozorenja o transakciji. Deljenje ekrana deluje kao najbrži način da dokaže identitet.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Znakovi lažnog toka" data-en="Signs of a fake flow">Znakovi lažnog toka</div>
          <ul class="bullets">
            <li data-sr="Nepozvani poziv o sumnjivoj transakciji." data-en="Unsolicited call about a suspicious transaction.">Nepozvani poziv o sumnjivoj transakciji.</li>
            <li data-sr="Zahtev za TeamViewer, AnyDesk ili ugrađeno deljenje." data-en="Request for TeamViewer, AnyDesk, or built-in sharing.">Zahtev za TeamViewer, AnyDesk ili ugrađeno deljenje.</li>
            <li data-sr="Insistiranje da ostanete u aplikaciji tokom razgovora." data-en="Insistence that you stay in the app during the call.">Insistiranje da ostanete u aplikaciji tokom razgovora.</li>
            <li data-sr="Zabrana da prvo proverite broj na kartici." data-en="Discouraging you from verifying the number on the card first.">Zabrana da prvo proverite broj na kartici.</li>
      </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Šta gledaju" data-en="What they look at">Šta gledaju</div>
          <ul class="bullets">
            <li data-sr="Čitanje OTP sa ekrana notifikacije." data-en="Reading OTP from the notification screen.">Čitanje OTP sa ekrana notifikacije.</li>
            <li data-sr="Snimanje broja kartice ako je vidljiv." data-en="Capturing the card number if visible.">Snimanje broja kartice ako je vidljiv.</li>
            <li data-sr="Vođenje kroz menije za promenu broja telefona." data-en="Walking through menus to change the phone number.">Vođenje kroz menije za promenu broja telefona.</li>
            <li data-sr="Pokretanje transfere ako je moguće u sesiji." data-en="Starting transfers if possible in the session.">Pokretanje transfere ako je moguće u sesiji.</li>
      </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching).">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Šteta može nastati za nekoliko minuta ako je aplikacija otvorena tokom celog poziva." data-en="Damage can occur within minutes if the app stays open for the whole call.">Šteta može nastati za nekoliko minuta ako je aplikacija otvorena tokom celog poziva.</p>
      <article class="phase ">
        <h3 class="phase-title" data-sr="Faza 1 — Ulaz: poruka, oglas ili poziv" data-en="Phase 1 — Entry: message, ad, or call">Faza 1 — Ulaz: poruka, oglas ili poziv</h3>
        <p data-sr="Stiže poziv ili poruka da postoji sumnjiva isplata ili prijava i da je potrebna pomoć operatera odmah." data-en="A call or message claims there is a suspicious payout or login and operator help is needed immediately.">Stiže poziv ili poruka da postoji sumnjiva isplata ili prijava i da je potrebna pomoć operatera odmah.</p>
        <p data-sr="Korisnik veruje da je u zvaničnom toku jer tema odgovara trenutnoj brigi." data-en="The user believes they are in an official flow because the topic matches a current worry.">Korisnik veruje da je u zvaničnom toku jer tema odgovara trenutnoj brigi.</p>
        <ul class="bullets">
            <li data-sr="Tema pogađa novac, nalog, porez ili dostavu." data-en="The topic hits money, account, tax, or delivery.">Tema pogađa novac, nalog, porez ili dostavu.</li>
            <li data-sr="Link ili oglas izgleda hitno ili koristan." data-en="The link or ad looks urgent or useful.">Link ili oglas izgleda hitno ili koristan.</li>
            <li data-sr="Domen na prvi pogled liči na pravi servis." data-en="The domain at first glance resembles a real service.">Domen na prvi pogled liči na pravi servis.</li>
            <li data-sr="Mobilni prikaz skriva deo adrese." data-en="Mobile view hides part of the address.">Mobilni prikaz skriva deo adrese.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta odluči da klikne umesto da prvo otvori zvaničnu aplikaciju." data-en="<strong>Threshold:</strong> the target decides to click instead of opening the official app first."><strong>Prag faze:</strong> meta odluči da klikne umesto da prvo otvori zvaničnu aplikaciju.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Lažna stranica ili forma" data-en="Phase 2 — Fake page or form">Faza 2 — Lažna stranica ili forma</h3>
        <p data-sr="Otvara se stranica koja imitira prijavu, potvrdu ili uplatu." data-en="A page opens that mimics sign-in, confirmation, or payment.">Otvara se stranica koja imitira prijavu, potvrdu ili uplatu.</p>
        <ul class="bullets">
            <li data-sr="Logo i boje kopiraju brend." data-en="Logos and colors copy the brand.">Logo i boje kopiraju brend.</li>
            <li data-sr="Forma traži više polja nego što rutina traži." data-en="The form asks for more fields than routine needs.">Forma traži više polja nego što rutina traži.</li>
            <li data-sr="URL odstaje u detalju od pravog domena." data-en="The URL differs in detail from the real domain.">URL odstaje u detalju od pravog domena.</li>
            <li data-sr="Traži se brz završetak bez pauze." data-en="A fast finish is demanded without a pause.">Traži se brz završetak bez pauze.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="tech-support-scam.html" data-sr="Lažna podrška" data-en="Tech support scam">Lažna podrška</a></li>
            <li><a href="fake-call-scam.html" data-sr="Lažni pozivi" data-en="Fake calls">Lažni pozivi</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik počne unos u kontrolisanoj formi." data-en="<strong>Threshold:</strong> the user begins entry on a controlled form."><strong>Prag faze:</strong> korisnik počne unos u kontrolisanoj formi.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Prag: osetljivi podaci ili kod" data-en="Phase 3 — Threshold: sensitive data or code">Faza 3 — Prag: osetljivi podaci ili kod</h3>
        <p data-sr="Na ekranu se pojavi OTP ili forma za potvrdu koju napadač pročita uživo." data-en="An OTP or confirmation form appears on screen that the attacker reads live.">Na ekranu se pojavi OTP ili forma za potvrdu koju napadač pročita uživo.</p>
        <p data-sr="Jedan unos može biti dovoljan za pristup ili potvrdu transakcije." data-en="One entry can be enough for access or transaction approval.">Jedan unos može biti dovoljan za pristup ili potvrdu transakcije.</p>
        <ul class="bullets">
            <li data-sr="Lozinka, kartica ili OTP odlaze napadaču." data-en="Password, card, or OTP goes to the attacker.">Lozinka, kartica ili OTP odlaze napadaču.</li>
            <li data-sr="Korisnik misli da zatvara incident." data-en="The user thinks they are closing an incident.">Korisnik misli da zatvara incident.</li>
            <li data-sr="MFA se tretira kao rutinska potvrma." data-en="MFA is treated as a routine confirmation.">MFA se tretira kao rutinska potvrma.</li>
            <li data-sr="Nema drugog kanala provere u tom trenutku." data-en="No second verification channel is used at that moment.">Nema drugog kanala provere u tom trenutku.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> osetljivi podaci ili kod napuste kontrolu korisnika." data-en="<strong>Threshold:</strong> sensitive data or a code leaves the user control."><strong>Prag faze:</strong> osetljivi podaci ili kod napuste kontrolu korisnika.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Zloupotreba naloga ili novca" data-en="Phase 4 — Abuse of account or money">Faza 4 — Zloupotreba naloga ili novca</h3>
        <p data-sr="Napadač prijavljuje se, šalje poruke kontaktima, menja podatke ili potvrđuje uplatu." data-en="The attacker signs in, messages contacts, changes data, or confirms a payment.">Napadač prijavljuje se, šalje poruke kontaktima, menja podatke ili potvrđuje uplatu.</p>
        <ul class="bullets">
            <li data-sr="Šteta može ostati tiha prvih sati." data-en="Harm may stay quiet for the first hours.">Šteta može ostati tiha prvih sati.</li>
            <li data-sr="Koristi se poverenje kontakata prema žrtvi." data-en="Contacts trust toward the victim is abused.">Koristi se poverenje kontakata prema žrtvi.</li>
            <li data-sr="Lanac se širi na druge servise resetom." data-en="The chain spreads to other services via resets.">Lanac se širi na druge servise resetom.</li>
            <li data-sr="Napadač dodaje rezervni broj ili imejl." data-en="The attacker adds a backup number or email.">Napadač dodaje rezervni broj ili imejl.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="otp-interception.html" data-sr="Presretanje OTP" data-en="OTP interception">Presretanje OTP</a></li>
            <li><a href="bank-impersonation.html" data-sr="Lažna banka" data-en="Bank impersonation">Lažna banka</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> izvrši se radnja sa finansijskom ili pristupnom posledicom." data-en="<strong>Threshold:</strong> an action runs with financial or access consequences."><strong>Prag faze:</strong> izvrši se radnja sa finansijskom ili pristupnom posledicom.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Otkrivanje" data-en="Phase 5 — Discovery">Faza 5 — Otkrivanje</h3>
        <p data-sr="Žrtva vidi upozorenje banke, čudnu poruku ili blokadu naloga." data-en="The victim sees a bank alert, strange message, or account lock.">Žrtva vidi upozorenje banke, čudnu poruku ili blokadu naloga.</p>
        <ul class="bullets">
            <li data-sr="Vreme se poklapa sa klikom ili pozivom." data-en="Timing matches a click or call.">Vreme se poklapa sa klikom ili pozivom.</li>
            <li data-sr="Korisnik se priseća sumnjivog oglasa ili linka." data-en="The user remembers a suspicious ad or link.">Korisnik se priseća sumnjivog oglasa ili linka.</li>
            <li data-sr="Kontakti javljaju lažne poruke." data-en="Contacts report fake messages.">Kontakti javljaju lažne poruke.</li>
            <li data-sr="Transakcija se ne poklapa sa sećanjem." data-en="A transaction does not match memory.">Transakcija se ne poklapa sa sećanjem.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> žrtva povezuje štetu sa prethodnim korakom." data-en="<strong>Threshold:</strong> the victim connects harm to a prior step."><strong>Prag faze:</strong> žrtva povezuje štetu sa prethodnim korakom.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Sanacija" data-en="Phase 6 — Remediation">Faza 6 — Sanacija</h3>
        <p data-sr="Odjaviti sesije, kontaktirati banku ili servis zvaničnim kanalom, menjati lozinku i MFA, prijaviti incident." data-en="Sign out sessions, contact the bank or service through official channels, change password and MFA, report the incident.">Odjaviti sesije, kontaktirati banku ili servis zvaničnim kanalom, menjati lozinku i MFA, prijaviti incident.</p>
        <p data-sr="Ubuduće: zvanična aplikacija ili ručno ukucan domen, ne oglas u pretrazi." data-en="Going forward: official app or typed domain, not a search ad.">Ubuduće: zvanična aplikacija ili ručno ukucan domen, ne oglas u pretrazi.</p>
        <ul class="bullets">
            <li data-sr="Sačuvati URL i screenshot kao dokaz." data-en="Save URL and screenshots as evidence.">Sačuvati URL i screenshot kao dokaz.</li>
            <li data-sr="Proveriti odobrene aplikacije u nalogu." data-en="Review approved apps in the account.">Proveriti odobrene aplikacije u nalogu.</li>
            <li data-sr="Obavestiti kontakte ako je nalog slao poruke." data-en="Notify contacts if the account sent messages.">Obavestiti kontakte ako je nalog slao poruke.</li>
            <li data-sr="Blokirati karticu ako je uneta." data-en="Block the card if it was entered.">Blokirati karticu ako je uneta.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="browser-session-hijack.html" data-sr="Preotimanje sesije" data-en="Browser session hijack">Preotimanje sesije</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik prelazi na zvaničan kanal i zatvara pristup." data-en="<strong>Threshold:</strong> the user switches to an official channel and closes access."><strong>Prag faze:</strong> korisnik prelazi na zvaničan kanal i zatvara pristup.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
<ul class="bullets">
            <li data-sr="Bilo ko traži deljenje ekrana pre nego što ste vi pozvali banku." data-en="Anyone asks for screen share before you called the bank.">Bilo ko traži deljenje ekrana pre nego što ste vi pozvali banku.</li>
            <li data-sr="Operater traži da pročitate kod naglas." data-en="The operator asks you to read a code aloud.">Operater traži da pročitate kod naglas.</li>
            <li data-sr="Poziv dolazi sa nepoznatog broja koji nije na kartici." data-en="The call comes from a number not on the card.">Poziv dolazi sa nepoznatog broja koji nije na kartici.</li>
            <li data-sr="Pritisak da ne prekidate vezu." data-en="Pressure not to hang up.">Pritisak da ne prekidate vezu.</li>
            <li data-sr="Zahtev da instalirate program za daljinski pristup." data-en="Request to install remote access software.">Zahtev da instalirate program za daljinski pristup.</li>
            <li data-sr="Bankovna aplikacija ostaje otvorena ceo razgovor." data-en="The banking app stays open the whole call.">Bankovna aplikacija ostaje otvorena ceo razgovor.</li>
            <li data-sr="Tvrdnja da ćete biti krivično odgovorni ako ne sarađujete." data-en="A claim you will face criminal liability if you do not cooperate.">Tvrdnja da ćete biti krivično odgovorni ako ne sarađujete.</li>
            <li data-sr="Lažna potvrda identiteta pre nego što ste vi dali podatke." data-en="Fake identity confirmation before you gave details.">Lažna potvrda identiteta pre nego što ste vi dali podatke.</li>
            <li data-sr="Link ka sigurnosnoj stranici tokom poziva." data-en="A link to a security page during the call.">Link ka sigurnosnoj stranici tokom poziva.</li>
            <li data-sr="Više osoba na liniji kao supervizor." data-en="Multiple people on the line as supervisors.">Više osoba na liniji kao supervizor.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
<ol class="steps">
        <li data-sr="Prekinite i pozovite broj sa poleđine kartice." data-en="Hang up and call the number on the card back.">Prekinite i pozovite broj sa poleđine kartice.</li>
        <li data-sr="Nikada ne delite ekran sa nepozvanom podrškom." data-en="Never share screen with unsolicited support.">Nikada ne delite ekran sa nepozvanom podrškom.</li>
        <li data-sr="Proverite transakcije u aplikaciji pre bilo kakve pomoći." data-en="Check transactions in the app before any help.">Proverite transakcije u aplikaciji pre bilo kakve pomoći.</li>
        <li data-sr="Ne čitajte OTP nikome." data-en="Do not read OTP to anyone.">Ne čitajte OTP nikome.</li>
        <li data-sr="Zatvorite bankovnu aplikaciju pre nego što prihvatite bilo kakav daljinski alat." data-en="Close the banking app before accepting any remote tool.">Zatvorite bankovnu aplikaciju pre nego što prihvatite bilo kakav daljinski alat.</li>
        <li data-sr="Zatražite referentni broj incidenta kroz zvaničnu aplikaciju." data-en="Ask for an incident reference through the official app.">Zatražite referentni broj incidenta kroz zvaničnu aplikaciju.</li>
        <li data-sr="Uporedite glas i proceduru sa prošlim legitimnim pozivom." data-en="Compare voice and procedure with a past legitimate call.">Uporedite glas i proceduru sa prošlim legitimnim pozivom.</li>
        <li data-sr="Obavestite banku ako ste ikada podelili ekran sumnjivo." data-en="Notify the bank if you ever shared screen suspiciously.">Obavestite banku ako ste ikada podelili ekran sumnjivo.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
<ul class="bullets">
            <li data-sr="Da li sam ja pozvao banku prvo?" data-en="Did I call the bank first?">Da li sam ja pozvao banku prvo?</li>
            <li data-sr="Da li je broj isti kao na sajtu banke?" data-en="Is the number the same as on the bank website?">Da li je broj isti kao na sajtu banke?</li>
            <li data-sr="Da li mi je neko tražio da instaliram program?" data-en="Did someone ask me to install software?">Da li mi je neko tražio da instaliram program?</li>
            <li data-sr="Da li je bankovna aplikacija vidljiva tokom poziva?" data-en="Is the banking app visible during the call?">Da li je bankovna aplikacija vidljiva tokom poziva?</li>
            <li data-sr="Da li bih ovo uradio u poseti filijali?" data-en="Would I do this in a branch visit?">Da li bih ovo uradio u poseti filijali?</li>
            <li data-sr="Da li mogu da zatvorim sve i pozovem ponovo sam?" data-en="Can I close everything and call back myself?">Da li mogu da zatvorim sve i pozovem ponovo sam?</li>
            <li data-sr="Da li OTP stoji na ekranu?" data-en="Is an OTP visible on screen?">Da li OTP stoji na ekranu?</li>
            <li data-sr="Da li poziv traži hitnost bez pauze?" data-en="Does the call demand urgency without pause?">Da li poziv traži hitnost bez pauze?</li>
            <li data-sr="Da li je tema strašna ili ponižavajuća?" data-en="Is the topic frightening or shaming?">Da li je tema strašna ili ponižavajuća?</li>
            <li data-sr="Da li znam ko je vlasnik programa za deljenje?" data-en="Do I know who owns the sharing software?">Da li znam ko je vlasnik programa za deljenje?</li>
            <li data-sr="Da li bih trebalo prvo proveriti transakciju u aplikaciji?" data-en="Should I verify the transaction in the app first?">Da li bih trebalo prvo proveriti transakciju u aplikaciji?</li>
            <li data-sr="Da li porodica zna da se ovo ne radi?" data-en="Does family know not to do this?">Da li porodica zna da se ovo ne radi?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
<ol class="steps">
        <li data-sr="Prekinite deljenje ekrana i poziv." data-en="End screen sharing and the call.">Prekinite deljenje ekrana i poziv.</li>
        <li data-sr="Pozovite banku zvaničnim brojem." data-en="Call the bank on an official number.">Pozovite banku zvaničnim brojem.</li>
        <li data-sr="Odjavite sesije i promenite lozinku ako ste uneli podatke." data-en="Sign out sessions and change the password if you entered data.">Odjavite sesije i promenite lozinku ako ste uneli podatke.</li>
        <li data-sr="Proverite uplate i blokirajte karticu po potrebi." data-en="Review payments and block the card if needed.">Proverite uplate i blokirajte karticu po potrebi.</li>
        <li data-sr="Uklonite instalirane programe za daljinski pristup koje niste tražili." data-en="Remove remote access programs you did not request.">Uklonite instalirane programe za daljinski pristup koje niste tražili.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si delio ekran?" data-en="Did you share your screen?">Da li si delio ekran?</li>
            <li data-sr="Šta je bilo vidljivo u aplikaciji?" data-en="What was visible in the app?">Šta je bilo vidljivo u aplikaciji?</li>
            <li data-sr="Da li si uneo ili pročitao kod?" data-en="Did you enter or read out a code?">Da li si uneo ili pročitao kod?</li>
            <li data-sr="Koji program za deljenje je korišćen?" data-en="Which sharing software was used?">Koji program za deljenje je korišćen?</li>
      </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Prava banka ne traži OTP i ne žuri ovako." data-en="A real bank does not ask for OTP or rush like this.">Prava banka ne traži OTP i ne žuri ovako.</li>
            <li data-sr="Hajde da zatvorimo aplikaciju i pozovemo broj sa kartice." data-en="Let us close the app and call the number on the card.">Hajde da zatvorimo aplikaciju i pozovemo broj sa kartice.</li>
            <li data-sr="Deljenje ekrana sa zvanicnim brojem i dalje ne sme pokazivati OTP." data-en="Screen sharing with an official number still must not show OTP.">Deljenje ekrana sa zvanicnim brojem i dalje ne sme pokazivati OTP.</li>
            <li data-sr="Prvo blokada, pa priča." data-en="Block first, talk later.">Prvo blokada, pa priča.</li>
      </ul>
        </div>
      </div>
    </section>
`
};
