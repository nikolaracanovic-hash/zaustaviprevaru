window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["whatsapp-takeover"] = {
  raw_html: `

    <section class="card">
      <h2 data-sr="Uvod: preuzimanje WhatsApp naloga" data-en="Introduction: WhatsApp takeover">Uvod: preuzimanje WhatsApp naloga</h2>

      <p data-sr="Napadač dobija vaš šestocifreni kod za registraciju ili pristup povezanom veb/WhatsApp sesijom i preuzima nalog." data-en="The attacker obtains your six-digit registration code or linked web session access and takes over the account.">Napadač dobija vaš šestocifreni kod za registraciju ili pristup povezanom veb/WhatsApp sesijom i preuzima nalog.</p>
      <p data-sr="Posle toga šalje poruke kontaktima i traži novac ili dodatne kodove." data-en="Then they message contacts asking for money or more codes.">Posle toga šalje poruke kontaktima i traži novac ili dodatne kodove.</p>
      <div class="callout" data-sr="<strong>Model:</strong> kod ili veb sesija → tuđa registracija → poruke kontaktima → širenje prevare." data-en="<strong>Model:</strong> code or web session → foreign registration → messages to contacts → scam spread."><strong>Model:</strong> kod ili veb sesija → tuđa registracija → poruke kontaktima → širenje prevare.</div>
    </section>

    <section class="card">
      <h2 data-sr="Zašto DM prevare prolaze" data-en="Why DM scams work">Zašto DM prevare prolaze</h2>

      <p data-sr="WhatsApp koristi broj telefona kao identitet; ko ima kod ili aktivnu sesiju, deluje kao vi." data-en="WhatsApp uses the phone number as identity; whoever has the code or active session acts as you.">WhatsApp koristi broj telefona kao identitet; ko ima kod ili aktivnu sesiju, deluje kao vi.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Tipično u poruci" data-en="Typical in the message">Tipično u poruci</div>
          <ul class="bullets">
            <li data-sr="Nepoznati nalog koji tvrdi da je podrška ili admin." data-en="Unknown account claiming to be support or admin.">Nepoznati nalog koji tvrdi da je podrška ili admin.</li>
            <li data-sr="Hitnost: zatvaranje naloga, ban, ili verifikacija." data-en="Urgency: account closure, ban, or verification.">Hitnost: zatvaranje naloga, ban, ili verifikacija.</li>
            <li data-sr="Link ka botu ili lažnoj stranici." data-en="Link to a bot or fake page.">Link ka botu ili lažnoj stranici.</li>
            <li data-sr="Traženje koda, seed fraze ili test transakcije." data-en="Request for code, seed phrase, or test transaction.">Traženje koda, seed fraze ili test transakcije.</li>
      </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Cilj" data-en="Goal">Cilj</div>
          <ul class="bullets">
            <li data-sr="Preuzimanje naloga ili kanala." data-en="Account or channel takeover.">Preuzimanje naloga ili kanala.</li>
            <li data-sr="Krađa kripto ili novca od kontakata." data-en="Stealing crypto or money from contacts.">Krađa kripto ili novca od kontakata.</li>
            <li data-sr="Širenje malvera ili lažnih konkursa." data-en="Spreading malware or fake giveaways.">Širenje malvera ili lažnih konkursa.</li>
            <li data-sr="Prikupljanje ličnih podataka." data-en="Collecting personal data.">Prikupljanje ličnih podataka.</li>
      </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching).">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Tok je kratak ako meta klikne odmah." data-en="The flow is short if the target clicks immediately.">Tok je kratak ako meta klikne odmah.</p>
      <article class="phase ">
        <h3 class="phase-title" data-sr="Faza 1 — Ulaz: poruka, oglas ili poziv" data-en="Phase 1 — Entry: message, ad, or call">Faza 1 — Ulaz: poruka, oglas ili poziv</h3>
        <p data-sr="Stiže lažna poruka od prijatelja ili poziv da podelite kod radi verifikacije zajedničke grupe." data-en="A fake message from a friend arrives or a call asks you to share a code to verify a shared group.">Stiže lažna poruka od prijatelja ili poziv da podelite kod radi verifikacije zajedničke grupe.</p>
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
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
            <li><a href="impersonation-scam.html" data-sr="Lažno predstavljanje" data-en="Impersonation scam">Lažno predstavljanje</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik počne unos u kontrolisanoj formi." data-en="<strong>Threshold:</strong> the user begins entry on a controlled form."><strong>Prag faze:</strong> korisnik počne unos u kontrolisanoj formi.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Prag: osetljivi podaci ili kod" data-en="Phase 3 — Threshold: sensitive data or code">Faza 3 — Prag: osetljivi podaci ili kod</h3>
        <p data-sr="Kod iz SMS-a prosleđuje se prevarantu koji ga odmah unosi u svoj telefon." data-en="The SMS code is forwarded to a fraudster who enters it on their phone immediately.">Kod iz SMS-a prosleđuje se prevarantu koji ga odmah unosi u svoj telefon.</p>
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
            <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
            <li><a href="crypto-scam.html" data-sr="Kripto prevara" data-en="Crypto scam">Kripto prevara</a></li>
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
            <li><a href="number-verification-scam.html" data-sr="Verifikacija broja" data-en="Number verification scam">Verifikacija broja</a></li>
            <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik prelazi na zvaničan kanal i zatvara pristup." data-en="<strong>Threshold:</strong> the user switches to an official channel and closes access."><strong>Prag faze:</strong> korisnik prelazi na zvaničan kanal i zatvara pristup.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
<ul class="bullets">
            <li data-sr="Neočekivani SMS kod za WhatsApp kada niste reinstalirali aplikaciju." data-en="Unexpected WhatsApp SMS code when you did not reinstall the app.">Neočekivani SMS kod za WhatsApp kada niste reinstalirali aplikaciju.</li>
            <li data-sr="Prijatelj traži kod da mu pomognete da se vrati na nalog." data-en="A friend asks for a code to help them get back on their account.">Prijatelj traži kod da mu pomognete da se vrati na nalog.</li>
            <li data-sr="Poruka da je vaš nalog prelazi na poslovni uz hitnu potvrdu." data-en="A message says your account is moving to business with urgent confirmation.">Poruka da je vaš nalog prelazi na poslovni uz hitnu potvrdu.</li>
            <li data-sr="QR kod za povezivanje na desktop od stranaca." data-en="A QR for desktop linking from strangers.">QR kod za povezivanje na desktop od stranaca.</li>
            <li data-sr="Lažni tehničar koji traži kod tokom poziva." data-en="A fake technician asks for a code during a call.">Lažni tehničar koji traži kod tokom poziva.</li>
            <li data-sr="Ponuda novca za test preko vašeg broja." data-en="An offer of money for a test using your number.">Ponuda novca za test preko vašeg broja.</li>
            <li data-sr="Grupna poruka sa linkom ka lažnom WhatsApp webu." data-en="A group message with a link to a fake WhatsApp web.">Grupna poruka sa linkom ka lažnom WhatsApp webu.</li>
            <li data-sr="Dvostruka prijava: neko drugi već gleda vaše četove." data-en="Double login: someone else is already viewing your chats.">Dvostruka prijava: neko drugi već gleda vaše četove.</li>
            <li data-sr="Traženje snimka ekrana sa kodom." data-en="Request for a screenshot with the code.">Traženje snimka ekrana sa kodom.</li>
            <li data-sr="Hitno prebacivanje broja na novi telefon uz vašu pomoć." data-en="Urgent number move to a new phone with your help.">Hitno prebacivanje broja na novi telefon uz vašu pomoć.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
<ol class="steps">
        <li data-sr="Nikada ne šaljite WhatsApp kod nikome." data-en="Never send the WhatsApp code to anyone.">Nikada ne šaljite WhatsApp kod nikome.</li>
        <li data-sr="Ako stigne kod neočekivano, proverite aktivne uređaje u aplikaciji." data-en="If a code arrives unexpectedly, check active devices in the app.">Ako stigne kod neočekivano, proverite aktivne uređaje u aplikaciji.</li>
        <li data-sr="Uključite dvostepenu proveru u podešavanjima ako je dostupna." data-en="Enable two-step verification in settings if available.">Uključite dvostepenu proveru u podešavanjima ako je dostupna.</li>
        <li data-sr="Ne skenirajte QR za veb verziju za strance." data-en="Do not scan web QR codes for strangers.">Ne skenirajte QR za veb verziju za strance.</li>
        <li data-sr="Proverite sa prijateljem drugim kanalom ako traži kod." data-en="Verify with a friend on another channel if they ask for a code.">Proverite sa prijateljem drugim kanalom ako traži kod.</li>
        <li data-sr="Odjavite veb sesije koje ne prepoznajete." data-en="Log out web sessions you do not recognize.">Odjavite veb sesije koje ne prepoznajete.</li>
        <li data-sr="Ne objavljujte broj telefona javno bez potrebe." data-en="Do not publish your phone number publicly without need.">Ne objavljujte broj telefona javno bez potrebe.</li>
        <li data-sr="Obavestite kontakte ako je nalog kompromitovan." data-en="Notify contacts if the account is compromised.">Obavestite kontakte ako je nalog kompromitovan.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
<ul class="bullets">
            <li data-sr="Da li sam tražio kod od WhatsApp-a u tom trenutku?" data-en="Did I request a code from WhatsApp at that moment?">Da li sam tražio kod od WhatsApp-a u tom trenutku?</li>
            <li data-sr="Da li neko traži moj kod u pomoć?" data-en="Is someone asking for my code as help?">Da li neko traži moj kod u pomoć?</li>
            <li data-sr="Da li vidim nepoznatu veb sesiju?" data-en="Do I see an unknown web session?">Da li vidim nepoznatu veb sesiju?</li>
            <li data-sr="Da li je prijatelj tražio novac neočekivano?" data-en="Did a friend ask for money unexpectedly?">Da li je prijatelj tražio novac neočekivano?</li>
            <li data-sr="Da li je ton poruke drugačiji od uobičajenog?" data-en="Is the message tone different from usual?">Da li je ton poruke drugačiji od uobičajenog?</li>
            <li data-sr="Da li mogu da pitam prijatelja uživo?" data-en="Can I ask the friend in person?">Da li mogu da pitam prijatelja uživo?</li>
            <li data-sr="Da li je hitnost razlog da preskočim proveru?" data-en="Is urgency making me skip verification?">Da li je hitnost razlog da preskočim proveru?</li>
            <li data-sr="Da li sam skenirao QR od nekoga?" data-en="Did I scan someone QR?">Da li sam skenirao QR od nekoga?</li>
            <li data-sr="Da li je neko tražio snimak ekrana?" data-en="Did anyone ask for a screenshot?">Da li je neko tražio snimak ekrana?</li>
            <li data-sr="Da li znam šta znači kod u SMS-u?" data-en="Do I know what the SMS code means?">Da li znam šta znači kod u SMS-u?</li>
            <li data-sr="Da li bih trebalo da uključim dvostepenu proveru?" data-en="Should I enable two-step verification?">Da li bih trebalo da uključim dvostepenu proveru?</li>
            <li data-sr="Da li sam već podelio kod?" data-en="Did I already share a code?">Da li sam već podelio kod?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
<ol class="steps">
        <li data-sr="Odmah aktivirajte dvostepenu proveru ako još nije." data-en="Enable two-step verification immediately if not already.">Odmah aktivirajte dvostepenu proveru ako još nije.</li>
        <li data-sr="Odjavite sve veb uređaje u WhatsApp podešavanjima." data-en="Log out all web devices in WhatsApp settings.">Odjavite sve veb uređaje u WhatsApp podešavanjima.</li>
        <li data-sr="Obavestite kontakte da ignorišu poruke sa vašeg naloga." data-en="Tell contacts to ignore messages from your account.">Obavestite kontakte da ignorišu poruke sa vašeg naloga.</li>
        <li data-sr="Kontaktirajte operatera ako sumnjate na prenos broja." data-en="Contact the carrier if you suspect number porting.">Kontaktirajte operatera ako sumnjate na prenos broja.</li>
        <li data-sr="Posle oporavka promenite pristup telefonu i PIN." data-en="After recovery, change phone access and PIN.">Posle oporavka promenite pristup telefonu i PIN.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si poslao kod ikome?" data-en="Did you send the code to anyone?">Da li si poslao kod ikome?</li>
            <li data-sr="Da li si skenirao QR?" data-en="Did you scan a QR?">Da li si skenirao QR?</li>
            <li data-sr="Da li vidiš nove uređaje u listi?" data-en="Do you see new devices in the list?">Da li vidiš nove uređaje u listi?</li>
            <li data-sr="Da li su kontakti primali poruke o novcu?" data-en="Did contacts receive money messages?">Da li su kontakti primali poruke o novcu?</li>
      </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Kod je kao ključ stana; ne šaljemo ga prijateljima." data-en="The code is like an apartment key; we do not send it to friends.">Kod je kao ključ stana; ne šaljemo ga prijateljima.</li>
            <li data-sr="Hajde da odjavimo veb i uključimo dvostepenu proveru." data-en="Let us log out the web and enable two-step verification.">Hajde da odjavimo veb i uključimo dvostepenu proveru.</li>
            <li data-sr="Proveri prijatelja drugim kanalom pre bilo kog koda." data-en="Verify a friend on another channel before any code.">Proveri prijatelja drugim kanalom pre bilo kog koda.</li>
            <li data-sr="Neočekivani kod znači da neko pokušava prijavu." data-en="An unexpected code means someone is trying to sign in.">Neočekivani kod znači da neko pokušava prijavu.</li>
      </ul>
        </div>
      </div>
    </section>
`
};
