window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["discord-moderator-scam"] = {
  raw_html: `

    <section class="card">
      <h2 data-sr="Uvod: lažni Discord moderator" data-en="Introduction: fake Discord moderator">Uvod: lažni Discord moderator</h2>

      <p data-sr="Nepoznata osoba šalje DM da ste kršili pravila i traži verifikaciju preko linka, Nitro poklona ili skeniranja QR." data-en="A stranger DM claims you broke rules and asks for verification via a link, Nitro gift, or QR scan.">Nepoznata osoba šalje DM da ste kršili pravila i traži verifikaciju preko linka, Nitro poklona ili skeniranja QR.</p>
      <p data-sr="Cilj je ukrasti nalog, novčanik ili da prevarant šalje zlonamerni link vašim prijateljima." data-en="The goal is to steal the account, wallet, or have the fraudster send malicious links to your friends.">Cilj je ukrasti nalog, novčanik ili da prevarant šalje zlonamerni link vašim prijateljima.</p>
      <div class="callout" data-sr="<strong>Model:</strong> DM staff → strah → link/QR → krađa naloga ili tokena." data-en="<strong>Model:</strong> DM staff → fear → link/QR → account or token theft."><strong>Model:</strong> DM staff → strah → link/QR → krađa naloga ili tokena.</div>
    </section>

    <section class="card">
      <h2 data-sr="Zašto DM prevare prolaze" data-en="Why DM scams work">Zašto DM prevare prolaze</h2>

      <p data-sr="Discord koristi nadimke i avatare koje je lako kopirati; žrtva ne proverava diskriminator ili pun identitet." data-en="Discord uses nicknames and avatars that are easy to copy; the victim does not check the discriminator or full identity.">Discord koristi nadimke i avatare koje je lako kopirati; žrtva ne proverava diskriminator ili pun identitet.</p>
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
        <p data-sr="Poruka tvrdi da je vaš nalog prijavljen i da morate potvrditi identitet na stranici koja liči na Discord." data-en="The message claims your account was reported and you must confirm identity on a Discord-like page.">Poruka tvrdi da je vaš nalog prijavljen i da morate potvrditi identitet na stranici koja liči na Discord.</p>
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
        <p data-sr="Unos lozinke ili skeniranje QR daje napadaču sesiju ili token." data-en="Password entry or QR scan gives the attacker a session or token.">Unos lozinke ili skeniranje QR daje napadaču sesiju ili token.</p>
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
            <li><a href="telegram-admin-impersonation.html" data-sr="Telegram admin" data-en="Telegram admin impersonation">Telegram admin</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik prelazi na zvaničan kanal i zatvara pristup." data-en="<strong>Threshold:</strong> the user switches to an official channel and closes access."><strong>Prag faze:</strong> korisnik prelazi na zvaničan kanal i zatvara pristup.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
<ul class="bullets">
            <li data-sr="DM od moderatora bez prethodnog konteksta na serveru." data-en="DM from a moderator without prior server context.">DM od moderatora bez prethodnog konteksta na serveru.</li>
            <li data-sr="Zahtev za verifikaciju starosti preko spoljnog linka." data-en="Age verification request via an external link.">Zahtev za verifikaciju starosti preko spoljnog linka.</li>
            <li data-sr="Naglašena pretnja banom u roku od minuta." data-en="Ban threat within minutes.">Naglašena pretnja banom u roku od minuta.</li>
            <li data-sr="Poklon Nitro koji traži da kliknete prvo na sumnjiv link." data-en="Nitro gift that asks you to click a suspicious link first.">Poklon Nitro koji traži da kliknete prvo na sumnjiv link.</li>
            <li data-sr="QR kod za ulazak na turnir." data-en="QR code to join a tournament.">QR kod za ulazak na turnir.</li>
            <li data-sr="Traženje backup kodova." data-en="Request for backup codes.">Traženje backup kodova.</li>
            <li data-sr="Lažni Discord sajt sa pogrešnim domenom." data-en="Fake Discord site with wrong domain.">Lažni Discord sajt sa pogrešnim domenom.</li>
            <li data-sr="Poziv da dodate bota sa admin pravima." data-en="Invitation to add a bot with admin rights.">Poziv da dodate bota sa admin pravima.</li>
            <li data-sr="Hitan intervju za moderatora." data-en="Urgent moderator interview.">Hitan intervju za moderatora.</li>
            <li data-sr="Link ka anti-cheat instalaciji." data-en="Link to anti-cheat install.">Link ka anti-cheat instalaciji.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
<ol class="steps">
        <li data-sr="Proverite ulogu osobe na serveru pre DM-a." data-en="Verify the person role on the server before DM.">Proverite ulogu osobe na serveru pre DM-a.</li>
        <li data-sr="Ne klikajte linkove od nepoznatih moderatora." data-en="Do not click links from unknown moderators.">Ne klikajte linkove od nepoznatih moderatora.</li>
        <li data-sr="Discord zvanična podrška ne šalje DM prvo." data-en="Discord official support does not DM first.">Discord zvanična podrška ne šalje DM prvo.</li>
        <li data-sr="Proverite domen: discord.com ili discordapp.com u adresnoj traci." data-en="Check the domain: discord.com or discordapp.com in the address bar.">Proverite domen: discord.com ili discordapp.com u adresnoj traci.</li>
        <li data-sr="Ne skenirajte QR za nagrade." data-en="Do not scan QR for rewards.">Ne skenirajte QR za nagrade.</li>
        <li data-sr="Uključite 2FA na Discord nalogu." data-en="Enable 2FA on the Discord account.">Uključite 2FA na Discord nalogu.</li>
        <li data-sr="Blokirajte i prijavite sumnjive naloge." data-en="Block and report suspicious accounts.">Blokirajte i prijavite sumnjive naloge.</li>
        <li data-sr="Upozorite mlađe igrače na ovaj obrazac." data-en="Warn younger players about this pattern.">Upozorite mlađe igrače na ovaj obrazac.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
<ul class="bullets">
            <li data-sr="Da li sam ikada video ovu osobu na serveru?" data-en="Have I ever seen this person on the server?">Da li sam ikada video ovu osobu na serveru?</li>
            <li data-sr="Da li se uloga moderator poklapa sa listom na serveru?" data-en="Does the moderator role match the server list?">Da li se uloga moderator poklapa sa listom na serveru?</li>
            <li data-sr="Da li link vodi na pravi Discord domen?" data-en="Does the link lead to the real Discord domain?">Da li link vodi na pravi Discord domen?</li>
            <li data-sr="Da li me strah od bana tera da žurim?" data-en="Is fear of a ban making me rush?">Da li me strah od bana tera da žurim?</li>
            <li data-sr="Da li traže lozinku ili kod?" data-en="Do they ask for password or code?">Da li traže lozinku ili kod?</li>
            <li data-sr="Da li je ponuda previše dobra?" data-en="Is the offer too good?">Da li je ponuda previše dobra?</li>
            <li data-sr="Da li mogu pitati drugog moda javno na serveru?" data-en="Can I ask another mod publicly on the server?">Da li mogu pitati drugog moda javno na serveru?</li>
            <li data-sr="Da li je QR potreban za bilo šta zvanično?" data-en="Is QR needed for anything official?">Da li je QR potreban za bilo šta zvanično?</li>
            <li data-sr="Da li bih trebalo uključiti 2FA?" data-en="Should I enable 2FA?">Da li bih trebalo uključiti 2FA?</li>
            <li data-sr="Da li poruka ima tipografske greške?" data-en="Does the message have typos?">Da li poruka ima tipografske greške?</li>
            <li data-sr="Da li je nalog novopravljen?" data-en="Is the account newly created?">Da li je nalog novopravljen?</li>
            <li data-sr="Da li Discord ikada traži hitnu verifikaciju linkom?" data-en="Does Discord ever ask urgent verification by link?">Da li Discord ikada traži hitnu verifikaciju linkom?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
<ol class="steps">
        <li data-sr="Zatvorite link i proverite server podešavanja." data-en="Close the link and check server settings.">Zatvorite link i proverite server podešavanja.</li>
        <li data-sr="Obavestite administratore servera." data-en="Notify server administrators.">Obavestite administratore servera.</li>
        <li data-sr="Promenite lozinku i 2FA ako ste uneli podatke." data-en="Change password and 2FA if you entered data.">Promenite lozinku i 2FA ako ste uneli podatke.</li>
        <li data-sr="Odjavite sesije u Discord podešavanjima." data-en="Sign out sessions in Discord settings.">Odjavite sesije u Discord podešavanjima.</li>
        <li data-sr="Prijavite nalog Discordu." data-en="Report the account to Discord.">Prijavite nalog Discordu.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si kliknuo link?" data-en="Did you click a link?">Da li si kliknuo link?</li>
            <li data-sr="Da li si uneo lozinku?" data-en="Did you enter a password?">Da li si uneo lozinku?</li>
            <li data-sr="Da li si skenirao QR?" data-en="Did you scan a QR?">Da li si skenirao QR?</li>
            <li data-sr="Na kom serveru si mislio da si?" data-en="Which server did you think you were on?">Na kom serveru si mislio da si?</li>
      </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Moderacija se rešava na serveru, ne preko tajnog linka." data-en="Moderation is handled on the server, not via a secret link.">Moderacija se rešava na serveru, ne preko tajnog linka.</li>
            <li data-sr="Hajde da pitamo admina javno u kanalu." data-en="Let us ask an admin publicly in a channel.">Hajde da pitamo admina javno u kanalu.</li>
            <li data-sr="QR za Discord login nikome ne pokazujemo." data-en="We do not show Discord login QR to anyone.">QR za Discord login nikome ne pokazujemo.</li>
            <li data-sr="2FA čini krađu naloga težom." data-en="2FA makes account theft harder.">2FA čini krađu naloga težom.</li>
      </ul>
        </div>
      </div>
    </section>
`
};
