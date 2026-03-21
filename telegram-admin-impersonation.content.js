window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["telegram-admin-impersonation"] = {
  raw_html: `

    <section class="card">
      <h2 data-sr="Uvod: lažni Telegram administrator" data-en="Introduction: fake Telegram administrator">Uvod: lažni Telegram administrator</h2>

      <p data-sr="Prevarant koristi slično korisničko ime, lažni verified utisak ili bot koji tvrdi da će kanal biti obrisan." data-en="The fraudster uses a similar username, a fake verified look, or a bot claiming the channel will be deleted.">Prevarant koristi slično korisničko ime, lažni verified utisak ili bot koji tvrdi da će kanal biti obrisan.</p>
      <p data-sr="Traži se klik na link, prijava, ili bot token pod izgovorom moderacije." data-en="A click, sign-in, or bot token is requested under a moderation excuse.">Traži se klik na link, prijava, ili bot token pod izgovorom moderacije.</p>
      <div class="callout" data-sr="<strong>Model:</strong> DM admin → strah od gubitka naloga → link ili token → preuzimanje." data-en="<strong>Model:</strong> DM admin → fear of loss → link or token → takeover."><strong>Model:</strong> DM admin → strah od gubitka naloga → link ili token → preuzimanje.</div>
    </section>

    <section class="card">
      <h2 data-sr="Zašto DM prevare prolaze" data-en="Why DM scams work">Zašto DM prevare prolaze</h2>

      <p data-sr="Na Telegramu je lako otvoriti novi nalog koji liči na zvaničnog; žrtva veruje da je kontakt autentičan." data-en="On Telegram it is easy to open a new account that looks official; the victim trusts the contact.">Na Telegramu je lako otvoriti novi nalog koji liči na zvaničnog; žrtva veruje da je kontakt autentičan.</p>
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
        <p data-sr="Stiže poruka da kršite pravila i da morate verifikovati nalog linkom u roku od sat vremena." data-en="A message claims you violate rules and must verify the account via a link within an hour.">Stiže poruka da kršite pravila i da morate verifikovati nalog linkom u roku od sat vremena.</p>
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
        <p data-sr="Klik vodi na lažnu prijavu ili formu koja krade sesiju ili token bota." data-en="The click leads to fake sign-in or a form that steals session or bot token.">Klik vodi na lažnu prijavu ili formu koja krade sesiju ili token bota.</p>
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
            <li><a href="discord-moderator-scam.html" data-sr="Discord moderator" data-en="Discord moderator scam">Discord moderator</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik prelazi na zvaničan kanal i zatvara pristup." data-en="<strong>Threshold:</strong> the user switches to an official channel and closes access."><strong>Prag faze:</strong> korisnik prelazi na zvaničan kanal i zatvara pristup.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
<ul class="bullets">
            <li data-sr="Admin vas kontaktira prvi bez tiketa." data-en="An admin contacts you first without a ticket.">Admin vas kontaktira prvi bez tiketa.</li>
            <li data-sr="Traženje lozinke, seed fraze ili API ključa." data-en="Request for password, seed phrase, or API key.">Traženje lozinke, seed fraze ili API ključa.</li>
            <li data-sr="Link ka telegram domen koji nije telegram.org." data-en="A link to a telegram domain that is not telegram.org.">Link ka telegram domen koji nije telegram.org.</li>
            <li data-sr="Pretnja trajnim banom za mali prekršaj." data-en="Threat of permanent ban for a small violation.">Pretnja trajnim banom za mali prekršaj.</li>
            <li data-sr="Bot koji traži da potvrdite vlasništvo kanala." data-en="A bot asks you to confirm channel ownership.">Bot koji traži da potvrdite vlasništvo kanala.</li>
            <li data-sr="Poruka na lošem engleskom ili previše generična." data-en="Message with poor English or overly generic wording.">Poruka na lošem engleskom ili previše generična.</li>
            <li data-sr="Zahtev da instalirate nepoznatu aplikaciju." data-en="Request to install an unknown app.">Zahtev da instalirate nepoznatu aplikaciju.</li>
            <li data-sr="Lažna nagrada ili airdrop uz verifikaciju." data-en="Fake prize or airdrop with verification.">Lažna nagrada ili airdrop uz verifikaciju.</li>
            <li data-sr="Duplikat admina sa jednom izmenjenom slovkom." data-en="Duplicate admin with one letter changed.">Duplikat admina sa jednom izmenjenom slovkom.</li>
            <li data-sr="Hitno prebacivanje na drugi chat radi bezbednosti." data-en="Urgent move to another chat for security.">Hitno prebacivanje na drugi chat radi bezbednosti.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
<ol class="steps">
        <li data-sr="Zvanične Telegram obaveštenja čitajte samo u aplikaciji pod podešavanjima." data-en="Read official Telegram notices only in the app settings.">Zvanične Telegram obaveštenja čitajte samo u aplikaciji pod podešavanjima.</li>
        <li data-sr="Ne klikajte na linkove od nepoznatih admina." data-en="Do not click links from unknown admins.">Ne klikajte na linkove od nepoznatih admina.</li>
        <li data-sr="Proverite korisničko ime karakter po karakter." data-en="Verify the username character by character.">Proverite korisničko ime karakter po karakter.</li>
        <li data-sr="Koristite zvanične FAQ iz telegram.org." data-en="Use official FAQ from telegram.org.">Koristite zvanične FAQ iz telegram.org.</li>
        <li data-sr="Nikada ne šaljite bot token trećoj strani." data-en="Never send a bot token to a third party.">Nikada ne šaljite bot token trećoj strani.</li>
        <li data-sr="Za kanale koristite listu pouzdanih admina." data-en="For channels, keep a list of trusted admins.">Za kanale koristite listu pouzdanih admina.</li>
        <li data-sr="Sumnjive poruke prijavite kroz aplikaciju." data-en="Report suspicious messages through the app.">Sumnjive poruke prijavite kroz aplikaciju.</li>
        <li data-sr="Ne preuzimajte fajlove od lažnih admina." data-en="Do not download files from fake admins.">Ne preuzimajte fajlove od lažnih admina.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
<ul class="bullets">
            <li data-sr="Da li sam ja otvarao tiket kod podrške?" data-en="Did I open a ticket with support?">Da li sam ja otvarao tiket kod podrške?</li>
            <li data-sr="Da li se korisničko ime tačno poklapa?" data-en="Does the username match exactly?">Da li se korisničko ime tačno poklapa?</li>
            <li data-sr="Da li link vodi na telegram.org ili poznat poddomen?" data-en="Does the link go to telegram.org or a known subdomain?">Da li link vodi na telegram.org ili poznat poddomen?</li>
            <li data-sr="Da li traže seed ili token?" data-en="Do they ask for a seed or token?">Da li traže seed ili token?</li>
            <li data-sr="Da li je pretnja previsoka za sitan problem?" data-en="Is the threat too high for a small issue?">Da li je pretnja previsoka za sitan problem?</li>
            <li data-sr="Da li drugi admini znaju za ovu poruku?" data-en="Do other admins know about this message?">Da li drugi admini znaju za ovu poruku?</li>
            <li data-sr="Da li bih ovo radio bez konsultacije sa timom?" data-en="Would I do this without consulting the team?">Da li bih ovo radio bez konsultacije sa timom?</li>
            <li data-sr="Da li je poruka šablonska?" data-en="Is the message templated?">Da li je poruka šablonska?</li>
            <li data-sr="Da li mogu da odložim klik?" data-en="Can I delay the click?">Da li mogu da odložim klik?</li>
            <li data-sr="Da li postoji zvanično obaveštenje u aplikaciji?" data-en="Is there an official notice in the app?">Da li postoji zvanično obaveštenje u aplikaciji?</li>
            <li data-sr="Da li je nalog nov ili bez istorije?" data-en="Is the account new or without history?">Da li je nalog nov ili bez istorije?</li>
            <li data-sr="Da li traže instalaciju programa?" data-en="Do they ask to install software?">Da li traže instalaciju programa?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
<ol class="steps">
        <li data-sr="Ne klikati; proveriti admin listu kanala." data-en="Do not click; verify the channel admin list.">Ne klikati; proveriti admin listu kanala.</li>
        <li data-sr="Obavestiti ostale admine." data-en="Notify other admins.">Obavestiti ostale admine.</li>
        <li data-sr="Ukloniti bota ako je token kompromitovan." data-en="Remove the bot if the token is compromised.">Ukloniti bota ako je token kompromitovan.</li>
        <li data-sr="Promeniti pristup i 2FA na nalogu." data-en="Change access and 2FA on the account.">Promeniti pristup i 2FA na nalogu.</li>
        <li data-sr="Prijaviti nalog prevarantu platformi." data-en="Report the fraudster account to the platform.">Prijaviti nalog prevarantu platformi.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Ko je poslao poruku tačno po @?" data-en="Who sent the message exactly by @?">Ko je poslao poruku tačno po @?</li>
            <li data-sr="Da li postoji tiket?" data-en="Is there a ticket?">Da li postoji tiket?</li>
            <li data-sr="Da li si uneo token?" data-en="Did you enter a token?">Da li si uneo token?</li>
            <li data-sr="Da li su drugi admini videli isto?" data-en="Did other admins see the same?">Da li su drugi admini videli isto?</li>
      </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Pravi admin retko šalje DM prvi sa linkom." data-en="A real admin rarely DMs first with a link.">Pravi admin retko šalje DM prvi sa linkom.</li>
            <li data-sr="Hajde da uporedimo @ sa listom u podešavanjima kanala." data-en="Let us compare @ to the list in channel settings.">Hajde da uporedimo @ sa listom u podešavanjima kanala.</li>
            <li data-sr="Token bota je tajna kao lozinka." data-en="A bot token is a secret like a password.">Token bota je tajna kao lozinka.</li>
            <li data-sr="Ako sumnjaš, pitaj drugog admina pre klika." data-en="If unsure, ask another admin before clicking.">Ako sumnjaš, pitaj drugog admina pre klika.</li>
      </ul>
        </div>
      </div>
    </section>
`
};
