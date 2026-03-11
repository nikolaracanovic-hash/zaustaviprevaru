if (!window.SCAM_CONTENT) window.SCAM_CONTENT = {};
window.SCAM_CONTENT["account-recovery-scam"] = {
  raw_html: `
<section class="content-section">
  <h2 data-sr="Uvod: kako radi prevara sa oporavkom naloga" data-en="Introduction: how the account recovery scam works">Uvod: kako radi prevara sa oporavkom naloga</h2>
  <p data-sr="Žrtva izgubi pristup nalogu — hakovan, zaboravljena lozinka ili suspendovan. U panici traži pomoć. Pojavljuje se lažna podrška — oglasi na pretraživačima, komentari, DM poruke — i nudi oporavak za naknadu ili tražeći pristupne podatke. Nakon uplate ili predaje podataka, žrtva gubi i nalog i novac." data-en="The victim loses access to an account — hacked, forgotten password or suspended. In a panic they search for help. Fake support appears — search engine ads, comments, DM messages — and offers recovery for a fee or by requesting credentials. After payment or handing over data, the victim loses both the account and money.">Žrtva izgubi pristup nalogu — hakovan, zaboravljena lozinka ili suspendovan. U panici traži pomoć. Pojavljuje se lažna podrška — oglasi na pretraživačima, komentari, DM poruke — i nudi oporavak za naknadu ili tražeći pristupne podatke. Nakon uplate ili predaje podataka, žrtva gubi i nalog i novac.</p>
  <p data-sr="Efikasnost prevare leži u tome što cilja moment najveće ranjivosti: žrtva je već uznemirena gubitkom naloga i sklona je brzim odlukama. Lažna podrška deluje profesionalno — koristi logo platforme, stručnu terminologiju i obećava brzo rešenje." data-en="The scam's effectiveness lies in targeting the moment of greatest vulnerability: the victim is already distressed by losing the account and prone to quick decisions. Fake support appears professional — using the platform's logo, technical terminology and promising a quick solution.">Efikasnost prevare leži u tome što cilja moment najveće ranjivosti: žrtva je već uznemirena gubitkom naloga i sklona je brzim odlukama. Lažna podrška deluje profesionalno — koristi logo platforme, stručnu terminologiju i obećava brzo rešenje.</p>
</section>

<section class="content-section">
  <h2 data-sr="Model" data-en="Model">Model</h2>
  <div class="phase">
    <div class="label" data-sr="Lanac" data-en="Chain">Lanac</div>
    <p data-sr="Gubitak pristupa nalogu → panika i pretraga pomoći → lažna podrška (oglas/komentar/DM) → zahtev za naknadu ili podatke → uplata/predaja podataka → nestanak ili novi zahtevi" data-en="Account access loss → panic and help search → fake support (ad/comment/DM) → fee or credential request → payment/data handover → disappearance or new demands">Gubitak pristupa nalogu → panika i pretraga pomoći → lažna podrška (oglas/komentar/DM) → zahtev za naknadu ili podatke → uplata/predaja podataka → nestanak ili novi zahtevi</p>
  </div>
  <div class="callout">
    <strong data-sr="Prag:" data-en="Threshold:">Prag:</strong>
    <span data-sr="Uplata naknade ili predaja pristupnih podataka lažnoj podršci. Napadač ima pristup ili je primio novac." data-en="Payment of fee or handing over credentials to fake support. The attacker has access or has received money.">Uplata naknade ili predaja pristupnih podataka lažnoj podršci. Napadač ima pristup ili je primio novac.</span>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Kako generalno radi: mehanika" data-en="How it works: mechanics">Kako generalno radi: mehanika</h2>
  <div class="grid-2">
    <div class="phase">
      <div class="label" data-sr="Šta gradi autoritet" data-en="What builds authority">Šta gradi autoritet</div>
      <ul>
        <li data-sr="Logo i brending ciljane platforme (Gmail, Instagram, Facebook, Steam)." data-en="Logo and branding of the target platform (Gmail, Instagram, Facebook, Steam).">Logo i brending ciljane platforme (Gmail, Instagram, Facebook, Steam).</li>
        <li data-sr="Stručna terminologija: 'verifikacija identiteta', 'bezbednosni protokol', 'dvostepena autentifikacija'." data-en="Technical terminology: 'identity verification', 'security protocol', 'two-step authentication'.">Stručna terminologija: „verifikacija identiteta", „bezbednosni protokol", „dvostepena autentifikacija".</li>
        <li data-sr="Oglasi u pretraživačima koji se pojavljuju iznad zvaničnih rezultata." data-en="Search engine ads appearing above official results.">Oglasi u pretraživačima koji se pojavljuju iznad zvaničnih rezultata.</li>
        <li data-sr="Komentari ispod postova platforme koji imitiraju zvaničnu podršku." data-en="Comments under platform posts imitating official support.">Komentari ispod postova platforme koji imitiraju zvaničnu podršku.</li>
        <li data-sr="Hitnost: 'nalog će biti trajno obrisan za 48 sati bez oporavka'." data-en="Urgency: 'account will be permanently deleted in 48 hours without recovery'." >Hitnost: „nalog će biti trajno obrisan za 48 sati bez oporavka".</li>
      </ul>
    </div>
    <div class="phase">
      <div class="label" data-sr="Kako se uvodi novac/radnja" data-en="How money/action is introduced">Kako se uvodi novac/radnja</div>
      <ul>
        <li data-sr="Naknada za 'oporavak': od 20 do 500 evra, zavisno od ciljane platforme." data-en="Recovery fee: from 20 to 500 euros depending on the targeted platform.">Naknada za „oporavak": od 20 do 500 evra, zavisno od ciljane platforme.</li>
        <li data-sr="Traženje korisničkog imena, lozinke ili backup kodova direktno." data-en="Requesting username, password or backup codes directly.">Traženje korisničkog imena, lozinke ili backup kodova direktno.</li>
        <li data-sr="Remote pristup računaru kroz TeamViewer ili AnyDesk 'radi provere'." data-en="Remote computer access via TeamViewer or AnyDesk 'for verification'.">Remote pristup računaru kroz TeamViewer ili AnyDesk „radi provere".</li>
        <li data-sr="Zahtev za OTP kod koji stiže na telefon 'kao potvrda oporavka'." data-en="Request for OTP code arriving on phone 'as recovery confirmation'.">Zahtev za OTP kod koji stiže na telefon „kao potvrda oporavka".</li>
        <li data-sr="Nakon plaćanja: 'oporavak nije uspeo, potrebna dodatna naknada za premium servis'." data-en="After payment: 'recovery failed, additional fee needed for premium service'.">Nakon plaćanja: „oporavak nije uspeo, potrebna dodatna naknada za premium servis".</li>
      </ul>
    </div>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Hronološki tok" data-en="Chronological flow">Hronološki tok</h2>

  <div class="phase">
    <div class="label" data-sr="Faza 1: Gubitak pristupa" data-en="Phase 1: Access loss">Faza 1: Gubitak pristupa</div>
    <p data-sr="Žrtva ne može da se prijavi na nalog. Razlozi: hakovani nalog, zaboravljena lozinka, suspenzija platforme." data-en="Victim cannot log in to account. Reasons: hacked account, forgotten password, platform suspension.">Žrtva ne može da se prijavi na nalog. Razlozi: hakovani nalog, zaboravljena lozinka, suspenzija platforme.</p>
    <ul>
      <li data-sr="Poruka o grešci pri prijavi ili poruka o sumnjivoj aktivnosti." data-en="Login error message or suspicious activity notification.">Poruka o grešci pri prijavi ili poruka o sumnjivoj aktivnosti.</li>
      <li data-sr="Email o promeni lozinke bez žrtvinog znanja." data-en="Email about password change without victim's knowledge.">Email o promeni lozinke bez žrtvinog znanja.</li>
      <li data-sr="Nalog prikazuje sadržaj koji žrtva nije objavila." data-en="Account shows content the victim did not post.">Nalog prikazuje sadržaj koji žrtva nije objavila.</li>
    </ul>
    <p class="phase-threshold" data-sr="Prag faze: žrtva je izgubila pristup i aktivno traži rešenje." data-en="Phase threshold: victim has lost access and is actively searching for a solution.">Prag faze: žrtva je izgubila pristup i aktivno traži rešenje.</p>
  </div>

  <div class="phase">
    <div class="label" data-sr="Faza 2: Pretraga pomoći" data-en="Phase 2: Help search">Faza 2: Pretraga pomoći</div>
    <p data-sr="Žrtva pretražuje internet za podršku. Lažni rezultati se pojavljuju visoko u pretraživaču ili u komentarima." data-en="Victim searches the internet for support. Fake results appear high in search or in comments.">Žrtva pretražuje internet za podršku. Lažni rezultati se pojavljuju visoko u pretraživaču ili u komentarima.</p>
    <ul>
      <li data-sr="Plaćeni oglasi koji imitiraju zvaničnu podršku platforme." data-en="Paid ads imitating official platform support.">Plaćeni oglasi koji imitiraju zvaničnu podršku platforme.</li>
      <li data-sr="Komentari ispod zvaničnih postova sa brojem za podršku koji vodi napadaču." data-en="Comments under official posts with support number leading to attacker.">Komentari ispod zvaničnih postova sa brojem za podršku koji vodi napadaču.</li>
      <li data-sr="DM od naloga koji tvrde da su podrška sa ponudom oporavka." data-en="DMs from accounts claiming to be support offering recovery.">DM od naloga koji tvrde da su podrška sa ponudom oporavka.</li>
    </ul>
    <p class="phase-threshold" data-sr="Prag faze: žrtva kontaktira lažnu podršku verujući da je legitimna." data-en="Phase threshold: victim contacts fake support believing it is legitimate.">Prag faze: žrtva kontaktira lažnu podršku verujući da je legitimna.</p>
  </div>

  <div class="phase">
    <div class="label" data-sr="Faza 3: Uspostavljanje poverenja" data-en="Phase 3: Trust building">Faza 3: Uspostavljanje poverenja</div>
    <p data-sr="Napadač deluje profesionalno i tražeći informacije koje deluju rutinski. Žrtva veruje da je u kontaktu sa pravom podrškom." data-en="Attacker acts professionally requesting information that seems routine. Victim believes they are in contact with real support.">Napadač deluje profesionalno i tražeći informacije koje deluju rutinski. Žrtva veruje da je u kontaktu sa pravom podrškom.</p>
    <ul>
      <li data-sr="Napadač traži opis problema i detalje naloga (korisničko ime, datum registracije)." data-en="Attacker requests problem description and account details (username, registration date).">Napadač traži opis problema i detalje naloga (korisničko ime, datum registracije).</li>
      <li data-sr="Šalje 'lažni formular' ili 'verifikacioni link' koji izgleda legitimno." data-en="Sends a 'fake form' or 'verification link' that looks legitimate.">Šalje „lažni formular" ili „verifikacioni link" koji izgleda legitimno.</li>
      <li data-sr="Govori o 'procesu verifikacije' koji zahteva više koraka." data-en="Talks about a 'verification process' requiring multiple steps.">Govori o „procesu verifikacije" koji zahteva više koraka.</li>
    </ul>
    <p class="phase-threshold" data-sr="Prag faze: žrtva je dostavila inicijalne informacije i nastavlja komunikaciju." data-en="Phase threshold: victim has provided initial information and continues communication.">Prag faze: žrtva je dostavila inicijalne informacije i nastavlja komunikaciju.</p>
  </div>

  <div class="phase">
    <div class="label" data-sr="Faza 4: Zahtev za podatke ili naknadu" data-en="Phase 4: Credential or fee request">Faza 4: Zahtev za podatke ili naknadu</div>
    <p data-sr="Napadač traži ili lozinku/OTP/backup kod ili naknadu za oporavak. Oba pristupa vode istom rezultatu — gubitku." data-en="Attacker requests either password/OTP/backup code or a recovery fee. Both approaches lead to the same result — loss.">Napadač traži ili lozinku/OTP/backup kod ili naknadu za oporavak. Oba pristupa vode istom rezultatu — gubitku.</p>
    <ul>
      <li data-sr="'Za verifikaciju vam treba poslati OTP koji stiže na vaš telefon.'." data-en="'For verification you need to send us the OTP arriving on your phone.'.">'Za verifikaciju nam je potreban OTP koji stiže na vaš telefon.'</li>
      <li data-sr="'Naknada za oporavak iznosi 50 evra — plaća se unapred.'." data-en="'Recovery fee is 50 euros — paid in advance'.">'Naknada za oporavak iznosi 50 evra — plaća se unapred.'</li>
      <li data-sr="'Potreban nam je privremeni pristup nalogu da resetujemo sigurnost'." data-en="'We need temporary account access to reset security'.">'Potreban nam je privremeni pristup nalogu da resetujemo sigurnost.'</li>
    </ul>
    <div class="branches">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching in this phase:">Grananja u ovoj fazi:</strong>
      <ul>
        <li data-sr="Žrtva preda podatke → napadač preuzima nalog i koristi ga za prevare prema pratiocima." data-en="Victim hands over credentials → attacker takes over account and uses it to scam followers.">Žrtva preda podatke → napadač preuzima nalog i koristi ga za prevare prema pratiocima.</li>
        <li data-sr="Žrtva plati naknadu → napadač nestaje ili traži novu naknadu za 'komplikacije'." data-en="Victim pays fee → attacker disappears or requests new fee for 'complications'.">Žrtva plati naknadu → napadač nestaje ili traži novu naknadu za „komplikacije".</li>
      </ul>
    </div>
    <p class="phase-threshold" data-sr="Prag faze: žrtva preda podatke ili izvrši uplatu." data-en="Phase threshold: victim hands over data or makes payment.">Prag faze: žrtva preda podatke ili izvrši uplatu.</p>
  </div>

  <div class="phase">
    <div class="label" data-sr="Faza 5: Eskalacija ili nestanak" data-en="Phase 5: Escalation or disappearance">Faza 5: Eskalacija ili nestanak</div>
    <p data-sr="Nakon inicijalnog plaćanja napadač ili nestaje ili eskalira zahteve. Nalog žrtve sada može biti iskorišćen za dalje prevare." data-en="After initial payment the attacker either disappears or escalates demands. The victim's account may now be used for further scams.">Nakon inicijalnog plaćanja napadač ili nestaje ili eskalira zahteve. Nalog žrtve sada može biti iskorišćen za dalje prevare.</p>
    <ul>
      <li data-sr="'Oporavak nije uspeo zbog komplikacija, potrebna nova naknada'." data-en="'Recovery failed due to complications, new fee required'.">'Oporavak nije uspeo zbog komplikacija, potrebna nova naknada.'</li>
      <li data-sr="Napadač koristi preuzeti nalog za slanje prevara pratiocima žrtve." data-en="Attacker uses the taken-over account to send scams to victim's followers.">Napadač koristi preuzeti nalog za slanje prevara pratiocima žrtve.</li>
      <li data-sr="Napadač prodaje nalog ili koristi ga za spam/phishing kampanje." data-en="Attacker sells account or uses it for spam/phishing campaigns.">Napadač prodaje nalog ili koristi ga za spam/phishing kampanje.</li>
    </ul>
    <p class="phase-threshold" data-sr="Prag faze: žrtva shvata da je prevarena i pokušava da zaustavi štetu." data-en="Phase threshold: victim realizes they have been scammed and tries to stop the damage.">Prag faze: žrtva shvata da je prevarena i pokušava da zaustavi štetu.</p>
  </div>

  <div class="phase">
    <div class="label" data-sr="Faza 6: Posledice i recovery" data-en="Phase 6: Consequences and recovery">Faza 6: Posledice i recovery</div>
    <p data-sr="Žrtva nema nalog, izgubila je novac i potencijalno je kompromitovala i druge naloge koji dele istu lozinku." data-en="Victim has no account, has lost money and potentially compromised other accounts sharing the same password.">Žrtva nema nalog, izgubila je novac i potencijalno je kompromitovala i druge naloge koji dele istu lozinku.</p>
    <ul>
      <li data-sr="Gubitak pristupa nalogu sa godinama sadržaja i kontakata." data-en="Loss of account access with years of content and contacts.">Gubitak pristupa nalogu sa godinama sadržaja i kontakata.</li>
      <li data-sr="Finansijski gubitak od naknade za 'oporavak'." data-en="Financial loss from the 'recovery' fee.">Finansijski gubitak od naknade za „oporavak".</li>
      <li data-sr="Kompromitovani ostali nalozi ako je ista lozinka korišćena na više mesta." data-en="Compromised other accounts if the same password was used in multiple places.">Kompromitovani ostali nalozi ako je ista lozinka korišćena na više mesta.</li>
    </ul>
    <p class="phase-threshold" data-sr="Prag faze: žrtva kontaktira zvaničnu podršku platforme i menja lozinke na svim nalozima." data-en="Phase threshold: victim contacts official platform support and changes passwords on all accounts.">Prag faze: žrtva kontaktira zvaničnu podršku platforme i menja lozinke na svim nalozima.</p>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
  <ul>
    <li data-sr="Podrška se javlja bez poziva ili se pojavljuje u komentarima, ne kroz zvaničan kanal." data-en="Support contacts without being called or appears in comments, not through official channel.">Podrška se javlja bez poziva ili se pojavljuje u komentarima, ne kroz zvaničan kanal.</li>
    <li data-sr="Traže lozinku, OTP kod ili backup kodove — prava podrška to nikad ne traži." data-en="They request password, OTP code or backup codes — real support never asks for these.">Traže lozinku, OTP kod ili backup kodove — prava podrška to nikad ne traži.</li>
    <li data-sr="Naknada za oporavak — zvanična podrška platformi je uvek besplatna." data-en="Recovery fee — official platform support is always free.">Naknada za oporavak — zvanična podrška platformi je uvek besplatna.</li>
    <li data-sr="Zahtev za remote pristup računaru ili telefonu." data-en="Request for remote access to computer or phone.">Zahtev za remote pristup računaru ili telefonu.</li>
    <li data-sr="Komunikacija se odvija isključivo kroz neformalne kanale (WhatsApp, Telegram, DM)." data-en="Communication happens exclusively through informal channels (WhatsApp, Telegram, DM).">Komunikacija se odvija isključivo kroz neformalne kanale (WhatsApp, Telegram, DM).</li>
    <li data-sr="Email adresa ili broj telefona ne odgovara zvaničnom domenu platforme." data-en="Email address or phone number does not match the platform's official domain.">Email adresa ili broj telefona ne odgovara zvaničnom domenu platforme.</li>
    <li data-sr="Pritisak da se deluje brzo jer 'nalog će biti trajno obrisan'." data-en="Pressure to act quickly because 'account will be permanently deleted'.">Pritisak da se deluje brzo jer „nalog će biti trajno obrisan".</li>
    <li data-sr="Nakon plaćanja javljaju se novi problemi koji zahtevaju dodatnu naknadu." data-en="After payment new problems appear requiring additional fees.">Nakon plaćanja javljaju se novi problemi koji zahtevaju dodatnu naknadu.</li>
    <li data-sr="Nalog 'podrške' nema istoriju aktivnosti ili ima sumnjive objave." data-en="'Support' account has no activity history or has suspicious posts.">Nalog „podrške" nema istoriju aktivnosti ili ima sumnjive objave.</li>
    <li data-sr="Obećavaju oporavak za 'hakovan nalog' bez formalnog procesa verifikacije." data-en="Promise to recover a 'hacked account' without a formal verification process.">Obećavaju oporavak za „hakovan nalog" bez formalnog procesa verifikacije.</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Provere" data-en="Verification checks">Provere</h2>
  <ul>
    <li data-sr="Posetite zvaničnu stranicu platforme direktno (ukucajte URL ručno) i potražite link za podršku tamo." data-en="Visit the platform's official page directly (type URL manually) and find the support link there.">Posetite zvaničnu stranicu platforme direktno (ukucajte URL ručno) i potražite link za podršku tamo.</li>
    <li data-sr="Proverite email adresu pošiljaoca — treba da se završava na zvaničnom domenu platforme." data-en="Check sender's email address — it should end with the platform's official domain.">Proverite email adresu pošiljaoca — treba da se završava na zvaničnom domenu platforme.</li>
    <li data-sr="Nikad ne delite OTP kod ni sa kim — ni sa podrškom." data-en="Never share OTP code with anyone — not even support.">Nikad ne delite OTP kod ni sa kim — ni sa podrškom.</li>
    <li data-sr="Proverite da li platforma ima zvaničan sistem za podršku (ticket sistem, zvaničan email) pre nego što koristite bilo koji broj ili link." data-en="Check whether the platform has an official support system (ticket system, official email) before using any number or link.">Proverite da li platforma ima zvaničan sistem za podršku (ticket sistem, zvaničan email) pre nego što koristite bilo koji broj ili link.</li>
    <li data-sr="Pretražite naziv 'podrške' + 'prevara' i proverite ima li pritužbi od drugih." data-en="Search for the 'support' name + 'scam' and check for complaints from others.">Pretražite naziv „podrške" + „prevara" i proverite ima li pritužbi od drugih.</li>
    <li data-sr="Ne instalirajte softver za remote pristup na zahtev nekog ko tvrdi da je podrška." data-en="Do not install remote access software at the request of someone claiming to be support.">Ne instalirajte softver za remote pristup na zahtev nekog ko tvrdi da je podrška.</li>
    <li data-sr="Koristite zvaničan postupak oporavka naloga koji svaka legitimna platforma nudi — bez naknade." data-en="Use the official account recovery procedure every legitimate platform offers — without fees.">Koristite zvaničan postupak oporavka naloga koji svaka legitimna platforma nudi — bez naknade.</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Checklista pre predaje podataka ili uplate" data-en="Checklist before handing over data or paying">Checklista pre predaje podataka ili uplate</h2>
  <ol>
    <li data-sr="Da li sam pronašao ovu podršku kroz zvaničnu stranicu platforme?" data-en="Did I find this support through the platform's official page?">Da li sam pronašao ovu podršku kroz zvaničnu stranicu platforme?</li>
    <li data-sr="Da li email adresa ili domen odgovara zvaničnoj platformi?" data-en="Does the email address or domain match the official platform?">Da li email adresa ili domen odgovara zvaničnoj platformi?</li>
    <li data-sr="Zašto traže lozinku ili OTP — je li to uobičajeni zahtev podrške?" data-en="Why are they asking for password or OTP — is this a normal support request?">Zašto traže lozinku ili OTP — je li to uobičajeni zahtev podrške?</li>
    <li data-sr="Postoji li naknada za oporavak naloga — zna li platforma za ovu naknadu?" data-en="Is there an account recovery fee — does the platform know about this fee?">Postoji li naknada za oporavak naloga — zna li platforma za ovu naknadu?</li>
    <li data-sr="Da li je 'podrška' tražila da instaliran remote pristup softver?" data-en="Did the 'support' ask me to install remote access software?">Da li je „podrška" tražila da instaliram remote pristup softver?</li>
    <li data-sr="Postoje li online pritužbe na isti broj ili email adresu?" data-en="Are there online complaints about the same number or email address?">Postoje li online pritužbe na isti broj ili email adresu?</li>
    <li data-sr="Koliko je hitno — stvarna podrška ne pravi veštački pritisak?" data-en="How urgent is it — real support does not create artificial pressure?">Koliko je hitno — stvarna podrška ne pravi veštački pritisak?</li>
    <li data-sr="Da li koristim istu lozinku na više naloga koje treba promeniti?" data-en="Am I using the same password on multiple accounts that need changing?">Da li koristim istu lozinku na više naloga koje treba promeniti?</li>
    <li data-sr="Da li sam pokušao zvaničan self-service oporavak koji platforma nudi?" data-en="Have I tried the official self-service recovery the platform offers?">Da li sam pokušao zvaničan self-service oporavak koji platforma nudi?</li>
    <li data-sr="Da li sam razgovarao s nekim od poverenja pre nego što preduzimam korake?" data-en="Have I talked to someone I trust before taking any steps?">Da li sam razgovarao s nekim od poverenja pre nego što preduzimam korake?</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion arises: steps to take">Ako sumnja krene: redosled poteza</h2>
  <ol>
    <li data-sr="Odmah prekinuti komunikaciju sa navodnom podrškom." data-en="Immediately stop communication with the supposed support.">Odmah prekinuti komunikaciju sa navodnom podrškom.</li>
    <li data-sr="Pokušati zvaničan oporavak direktno kroz platformu (email verifikacija, broj telefona, backup kodovi)." data-en="Try official recovery directly through the platform (email verification, phone number, backup codes).">Pokušati zvaničan oporavak direktno kroz platformu (email verifikacija, broj telefona, backup kodovi).</li>
    <li data-sr="Promeniti lozinke na svim nalozima koji dele istu ili sličnu lozinku." data-en="Change passwords on all accounts sharing the same or similar password.">Promeniti lozinke na svim nalozima koji dele istu ili sličnu lozinku.</li>
    <li data-sr="Ako je OTP prenet, odmah proveriti da li je nalog kompromitovan i aktivirati dvofaktorsku autentifikaciju." data-en="If OTP was passed on, immediately check if account is compromised and activate two-factor authentication.">Ako je OTP prenet, odmah proveriti da li je nalog kompromitovan i aktivirati dvofaktorsku autentifikaciju.</li>
    <li data-sr="Ako je plaćena naknada, kontaktirati banku za potencijalni povrat i prijaviti prevaru." data-en="If a fee was paid, contact bank for potential refund and report the scam.">Ako je plaćena naknada, kontaktirati banku za potencijalni povrat i prijaviti prevaru.</li>
    <li data-sr="Sačuvati snimke ekrana razgovora pre brisanja komunikacije." data-en="Save screenshots of conversations before deleting communication.">Sačuvati snimke ekrana razgovora pre brisanja komunikacije.</li>
    <li data-sr="Prijaviti lažnu podršku platformi radi blokiranja naloga." data-en="Report fake support to the platform for account blocking.">Prijaviti lažnu podršku platformi radi blokiranja naloga.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
  <ul>
    <li data-sr="'Je li ova podrška kontaktirala tebe ili si ti tražio pomoć — kako si ih pronašao?'" data-en="'Did this support contact you or did you seek help — how did you find them?'">'Je li ova podrška kontaktirala tebe ili si ti tražio pomoć — kako si ih pronašao?'</li>
    <li data-sr="'Jesu li tražili OTP kod, lozinku ili remote pristup — znači li ti to nešto?'" data-en="'Did they ask for OTP code, password or remote access — does that mean anything to you?'">'Jesu li tražili OTP kod, lozinku ili remote pristup — znači li ti to nešto?'</li>
    <li data-sr="'Da li zvanična platforma naplaćuje oporavak naloga?'" data-en="'Does the official platform charge for account recovery?'">'Da li zvanična platforma naplaćuje oporavak naloga?'</li>
    <li data-sr="'Prava podrška ne traži OTP kodove ni lozinke — to je standardno pravilo svih platformi.'" data-en="'Real support never asks for OTP codes or passwords — that is the standard rule of all platforms.'">'Prava podrška ne traži OTP kodove ni lozinke — to je standardno pravilo svih platformi.'</li>
    <li data-sr="'Idemo zajedno na zvaničnu stranicu platforme i potražimo pravi link za podršku — odmah.'" data-en="'Let us go together to the platform's official page and find the real support link — right now.'">'Idemo zajedno na zvaničnu stranicu platforme i potražimo pravi link za podršku — odmah.'</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Povezane prevare" data-en="Related scams">Povezane prevare</h2>
  <ul>
    <li><a href="social-media-hijack-scam.html" data-sr="Preuzimanje naloga na društvenim mrežama" data-en="Social media hijack scam">Preuzimanje naloga na društvenim mrežama</a></li>
    <li><a href="account-takeover.html" data-sr="Preuzimanje naloga (Account takeover)" data-en="Account takeover">Preuzimanje naloga (Account takeover)</a></li>
    <li><a href="phishing.html" data-sr="Fišing (Phishing)" data-en="Phishing">Fišing (Phishing)</a></li>
    <li><a href="impersonation-scam.html" data-sr="Prevara lažnim predstavljanjem" data-en="Impersonation scam">Prevara lažnim predstavljanjem</a></li>
    <li><a href="recovery-scam.html" data-sr="Prevara oporavka (Recovery scam)" data-en="Recovery scam">Prevara oporavka (Recovery scam)</a></li>
  </ul>
</section>
`
};
