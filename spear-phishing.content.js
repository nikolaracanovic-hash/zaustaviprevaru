if (!window.SCAM_CONTENT) window.SCAM_CONTENT = {};
window.SCAM_CONTENT["spear-phishing"] = {
  raw_html: `
<section class="content-section">
  <h2 data-sr="Uvod: kako radi spear phishing" data-en="Introduction: how spear phishing works">Uvod: kako radi spear phishing</h2>
  <p data-sr="Spear phishing je ciljani phishing napad usmeren na konkretnu osobu ili organizaciju. Za razliku od masovnog phishinga, napadač prethodno istražuje žrtvu — sakuplja informacije sa LinkedIn-a, društvenih mreža, javnih sajt i curenja podataka. Poruka izgleda kao da dolazi od poznate osobe ili institucije i sadrži detalje koji je čine verodostojnom." data-en="Spear phishing is a targeted phishing attack directed at a specific person or organization. Unlike mass phishing, the attacker first researches the victim — gathering information from LinkedIn, social media, public sites and data breaches. The message appears to come from a known person or institution and contains details that make it credible.">Spear phishing je ciljani phishing napad usmeren na konkretnu osobu ili organizaciju. Za razliku od masovnog phishinga, napadač prethodno istražuje žrtvu — sakuplja informacije sa LinkedIn-a, društvenih mreža, javnih sajt i curenja podataka. Poruka izgleda kao da dolazi od poznate osobe ili institucije i sadrži detalje koji je čine verodostojnom.</p>
  <p data-sr="Efikasnost spear phishinga leži u personalizaciji. Korisnik dobija mejl koji pominje njegovu ulogu, projekat, kolegu ili nedavni događaj. Standardne anti-phishing navike — traženje gramatičkih grešaka ili nepoznatog pošiljaoca — ne funkcionišu jer je poruka pažljivo konstruisana." data-en="The effectiveness of spear phishing lies in personalization. The user receives an email mentioning their role, project, colleague or recent event. Standard anti-phishing habits — looking for grammar errors or unknown senders — do not work because the message is carefully constructed.">Efikasnost spear phishinga leži u personalizaciji. Korisnik dobija mejl koji pominje njegovu ulogu, projekat, kolegu ili nedavni događaj. Standardne anti-phishing navike — traženje gramatičkih grešaka ili nepoznatog pošiljaoca — ne funkcionišu jer je poruka pažljivo konstruisana.</p>
</section>

<section class="content-section">
  <h2 data-sr="Model" data-en="Model">Model</h2>
  <div class="phase">
    <div class="label" data-sr="Lanac" data-en="Chain">Lanac</div>
    <p data-sr="Istraživanje žrtve → personalizovana poruka → lažni link/prilog → kompromitovani kredencijali ili malver → lateralno kretanje ili finansijska krađa" data-en="Victim research → personalized message → fake link/attachment → compromised credentials or malware → lateral movement or financial theft">Istraživanje žrtve → personalizovana poruka → lažni link/prilog → kompromitovani kredencijali ili malver → lateralno kretanje ili finansijska krađa</p>
  </div>
  <div class="callout">
    <strong data-sr="Prag:" data-en="Threshold:">Prag:</strong>
    <span data-sr="Klik na link ili otvaranje priloga. U tom trenutku napadač dobija pristup — kredencijale, sesiju ili malver instalaciju." data-en="Clicking the link or opening the attachment. At that point the attacker gains access — credentials, session or malware installation.">Klik na link ili otvaranje priloga. U tom trenutku napadač dobija pristup — kredencijale, sesiju ili malver instalaciju.</span>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Kako generalno radi: mehanika" data-en="How it works: mechanics">Kako generalno radi: mehanika</h2>
  <div class="grid-2">
    <div class="phase">
      <div class="label" data-sr="Šta gradi autoritet" data-en="What builds authority">Šta gradi autoritet</div>
      <ul class="bullets">
        <li data-sr="Napadač koristi ime i titulu kolege, menadžera ili partnera koje žrtva poznaje." data-en="The attacker uses the name and title of a colleague, manager or partner the victim knows.">Napadač koristi ime i titulu kolege, menadžera ili partnera koje žrtva poznaje.</li>
        <li data-sr="Poruka pominje konkretne projekte, datume ili interne detalje sakupljene iz javnih izvora." data-en="The message mentions specific projects, dates or internal details gathered from public sources.">Poruka pominje konkretne projekte, datume ili interne detalje sakupljene iz javnih izvora.</li>
        <li data-sr="Email domen je gotovo identičan legitimnom uz jednu tihu razliku — homoglyph ili subdomain." data-en="The email domain is almost identical to the legitimate one with one subtle difference — a homoglyph or subdomain.">Email domen je gotovo identičan legitimnom uz jednu tihu razliku — homoglyph ili subdomain.</li>
      </ul>
    </div>
    <div class="phase">
      <div class="label" data-sr="Kako se uvodi radnja" data-en="How the action is introduced">Kako se uvodi radnja</div>
      <ul class="bullets">
        <li data-sr="Link vodi na lažnu login stranicu koja vizuelno oponaša internu platformu ili servis." data-en="The link leads to a fake login page that visually mimics an internal platform or service.">Link vodi na lažnu login stranicu koja vizuelno oponaša internu platformu ili servis.</li>
        <li data-sr="Prilog sadrži makro ili exploit koji instalira keylogger ili backdoor pri otvaranju." data-en="The attachment contains a macro or exploit that installs a keylogger or backdoor upon opening.">Prilog sadrži makro ili exploit koji instalira keylogger ili backdoor pri otvaranju.</li>
        <li data-sr="Urgentnost je prisutna — rok za potpisivanje, hitna verifikacija, 'pre isteka dana'." data-en="Urgency is present — signing deadline, urgent verification, before end of day.">Urgentnost je prisutna — rok za potpisivanje, hitna verifikacija, 'pre isteka dana'.</li>
      </ul>
    </div>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Hronološki tok" data-en="Timeline">Hronološki tok</h2>

  <article class="phase">
    <h3 data-sr="Faza 1 — Istraživanje žrtve" data-en="Phase 1 — Victim research">Faza 1 — Istraživanje žrtve</h3>
    <p data-sr="Napadač sakuplja informacije o žrtvi sa LinkedIn-a, sajta kompanije, GitHub-a i curenja podataka. Identifikuje ulogu, nadređene, projekte i partnere." data-en="The attacker gathers information about the victim from LinkedIn, the company site, GitHub and data breaches. They identify the role, superiors, projects and partners.">Napadač sakuplja informacije o žrtvi sa LinkedIn-a, sajta kompanije, GitHub-a i curenja podataka. Identifikuje ulogu, nadređene, projekte i partnere.</p>
    <ul class="bullets">
      <li data-sr="Napadač pronalazi organizacionu strukturu firme iz javnih izvora." data-en="The attacker finds the company's organizational structure from public sources.">Napadač pronalazi organizacionu strukturu firme iz javnih izvora.</li>
      <li data-sr="Interesi, nedavni intervjui i objave na društvenim mrežama daju materijal za personalizaciju." data-en="Interests, recent interviews and social media posts provide material for personalization.">Interesi, nedavni intervjui i objave na društvenim mrežama daju materijal za personalizaciju.</li>
      <li data-sr="Curenja podataka otkrivaju lozinke, navike i interne detalje koji povećavaju uverljivost." data-en="Data breaches reveal passwords, habits and internal details that increase credibility.">Curenja podataka otkrivaju lozinke, navike i interne detalje koji povećavaju uverljivost.</li>
    </ul>
    <div class="callout"><strong data-sr="Napadač ima dovoljno informacija za konstruisanje uverljive personalizovane poruke.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Napadač ima dovoljno informacija za konstruisanje uverljive personalizovane poruke." data-en="The attacker has enough information to construct a convincing personalized message.">Napadač ima dovoljno informacija za konstruisanje uverljive personalizovane poruke.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 2 — Message construction" data-en="Phase 2 — Message construction">Faza 2 — Message construction</h3>
    <p data-sr="Napadač registruje lažni domen i konstruiše mejl koji izgleda kao da ga šalje kolega, HR, IT ili partner. Poruka sadrži konkretne detalje koji povećavaju poverenje." data-en="The attacker registers a fake domain and constructs an email that appears to come from a colleague, HR, IT or partner. The message contains specific details that increase trust.">Napadač registruje lažni domen i konstruiše mejl koji izgleda kao da ga šalje kolega, HR, IT ili partner. Poruka sadrži konkretne detalje koji povećavaju poverenje.</p>
    <ul class="bullets">
      <li data-sr="Lažni domen se razlikuje od pravog za jedan karakter koji je lako previdjeti." data-en="The fake domain differs from the real one by one character that is easy to overlook.">Lažni domen se razlikuje od pravog za jedan karakter koji je lako previdjeti.</li>
      <li data-sr="Potpis mejla sadrži tačne kontakt detalje i titulu preuzetih sa javnih izvora." data-en="The email signature contains accurate contact details and title taken from public sources.">Potpis mejla sadrži tačne kontakt detalje i titulu preuzetih sa javnih izvora.</li>
      <li data-sr="Poruka sadrži detalje aktuelnog projekta ili nedavnog događaja koji napadač zna iz istraživanja." data-en="The message contains details of a current project or recent event the attacker knows from research.">Poruka sadrži detalje aktuelnog projekta ili nedavnog događaja koji napadač zna iz istraživanja.</li>
    </ul>
    <div class="callout"><strong data-sr="Poruka je poslata i čeka na reakciju žrtve.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Poruka je poslata i čeka na reakciju žrtve." data-en="The message is sent and awaits the victim's reaction.">Poruka je poslata i čeka na reakciju žrtve.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 3 — Klik i kompromitacija" data-en="Phase 3 — Click and compromise">Faza 3 — Klik i kompromitacija</h3>
    <p data-sr="Žrtva klikće na link jer izgleda kao interni resurs. Link vodi na lažnu login stranicu ili direktno preuzima malver." data-en="The victim clicks the link because it looks like an internal resource. The link leads to a fake login page or directly downloads malware.">Žrtva klikće na link jer izgleda kao interni resurs. Link vodi na lažnu login stranicu ili direktno preuzima malver.</p>
    <ul class="bullets">
      <li data-sr="Lažna login stranica snima unete kredencijale i preusmerjava žrtvu na pravi sajt bez vidljive greške." data-en="The fake login page captures entered credentials and redirects the victim to the real site without a visible error.">Lažna login stranica snima unete kredencijale i preusmerjava žrtvu na pravi sajt bez vidljive greške.</li>
      <li data-sr="Malver u prilogu instalira se tiho i otvara backdoor za napadačevu dalju kontrolu." data-en="Malware in the attachment installs silently and opens a backdoor for the attacker's further control.">Malver u prilogu instalira se tiho i otvara backdoor za napadačevu dalju kontrolu.</li>
      <li data-sr="Napadač odmah koristi dobijene kredencijale pre nego što žrtva promeni lozinku." data-en="The attacker immediately uses the obtained credentials before the victim changes the password.">Napadač odmah koristi dobijene kredencijale pre nego što žrtva promeni lozinku.</li>
    </ul>
    <div class="callout"><strong data-sr="Napadač ima pristup sistemu ili nalozima žrtve.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Napadač ima pristup sistemu ili nalozima žrtve." data-en="The attacker has access to the victim's systems or accounts.">Napadač ima pristup sistemu ili nalozima žrtve.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching at this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="business-email-compromise.html" data-sr="BEC — kompromitovani nalog se koristi za preusmeravanje plaćanja." data-en="BEC — the compromised account is used to redirect payments.">BEC — kompromitovani nalog se koristi za preusmeravanje plaćanja.</a></li>
        <li><a href="account-takeover.html" data-sr="Preuzimanje naloga — ukrađeni kredencijali daju pristup svim vezanim servisima." data-en="Account takeover — stolen credentials give access to all linked services.">Preuzimanje naloga — ukrađeni kredencijali daju pristup svim vezanim servisima.</a></li>
      </ul>
    </div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 4 — Lateralno kretanje" data-en="Phase 4 — Lateral movement">Faza 4 — Lateralno kretanje</h3>
    <p data-sr="Napadač koristi kompromitovani nalog za slanje internih spear phishing poruka kolegama, eskalaciju privilegija ili pristup finansijskim sistemima." data-en="The attacker uses the compromised account to send internal spear phishing messages to colleagues, escalate privileges or access financial systems.">Napadač koristi kompromitovani nalog za slanje internih spear phishing poruka kolegama, eskalaciju privilegija ili pristup finansijskim sistemima.</p>
    <ul class="bullets">
      <li data-sr="Interni mejl sa kompromitovanog naloga ima još veći kredibilitet od spoljnog." data-en="An internal email from a compromised account has even more credibility than an external one.">Interni mejl sa kompromitovanog naloga ima još veći kredibilitet od spoljnog.</li>
      <li data-sr="Napadač istražuje interne dokumente da pronađe finansijske tokove i kontakte za BEC." data-en="The attacker researches internal documents to find financial flows and contacts for BEC.">Napadač istražuje interne dokumente da pronađe finansijske tokove i kontakte za BEC.</li>
      <li data-sr="Malver snima sve tastere i pristup širi se postepeno kroz mrežu organizacije." data-en="Malware records all keystrokes and access spreads gradually through the organization's network.">Malver snima sve tastere i pristup širi se postepeno kroz mrežu organizacije.</li>
    </ul>
    <div class="callout"><strong data-sr="Napadač ima pristup finansijskim ili kritičnim sistemima i može izvesti primarni napad.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Napadač ima pristup finansijskim ili kritičnim sistemima i može izvesti primarni napad." data-en="The attacker has access to financial or critical systems and can execute the primary attack.">Napadač ima pristup finansijskim ili kritičnim sistemima i može izvesti primarni napad.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 5 — Primarna krađa" data-en="Phase 5 — Primary theft">Faza 5 — Primarna krađa</h3>
    <p data-sr="Napadač izvršava preusmeravanje plaćanja, krađu podataka ili ransomware napad. Sve je pripremljeno unapred i dešava se brzo pre detekcije." data-en="The attacker executes payment redirection, data theft or a ransomware attack. Everything is prepared in advance and happens quickly before detection.">Napadač izvršava preusmeravanje plaćanja, krađu podataka ili ransomware napad. Sve je pripremljeno unapred i dešava se brzo pre detekcije.</p>
    <ul class="bullets">
      <li data-sr="BEC varijanta: napadač menja detalje plaćanja u sistemu i čeka redovni transfer." data-en="BEC variant: the attacker changes payment details in the system and waits for a regular transfer.">BEC varijanta: napadač menja detalje plaćanja u sistemu i čeka redovni transfer.</li>
      <li data-sr="Podaci se eksfiltriraju i prodaju ili koriste za ucenu putem ransomwarea." data-en="Data is exfiltrated and sold or used for extortion via ransomware.">Podaci se eksfiltriraju i prodaju ili koriste za ucenu putem ransomwarea.</li>
      <li data-sr="Napadač briše logove pristupa da produži vreme pre detekcije." data-en="The attacker deletes access logs to extend the time before detection.">Napadač briše logove pristupa da produži vreme pre detekcije.</li>
    </ul>
    <div class="callout"><strong data-sr="Napad je izvršen i napadač napušta sistem ili ostaje skriven za buduće operacije.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Napad je izvršen i napadač napušta sistem ili ostaje skriven za buduće operacije." data-en="The attack is executed and the attacker leaves the system or remains hidden for future operations.">Napad je izvršen i napadač napušta sistem ili ostaje skriven za buduće operacije.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 6 — Otkrivanje i sanacija" data-en="Phase 6 — Discovery and remediation">Faza 6 — Otkrivanje i sanacija</h3>
    <p data-sr="Organizacija otkriva napad kroz anomalije u platnom sistemu, upozorenja IT sistema ili prijave zaposlenih. Forenzička analiza otkriva inicijalni vektor pristupa." data-en="The organization discovers the attack through anomalies in the payment system, IT system alerts or employee reports. Forensic analysis reveals the initial access vector.">Organizacija otkriva napad kroz anomalije u platnom sistemu, upozorenja IT sistema ili prijave zaposlenih. Forenzička analiza otkriva inicijalni vektor pristupa.</p>
    <ul class="bullets">
      <li data-sr="Sve kompromitovane lozinke se menjaju i MFA se aktivira na svim nalozima." data-en="All compromised passwords are changed and MFA is activated on all accounts.">Sve kompromitovane lozinke se menjaju i MFA se aktivira na svim nalozima.</li>
      <li data-sr="Incident se prijavljuje nadležnim organima i CERT timovima za koordinaciju." data-en="The incident is reported to competent authorities and CERT teams for coordination.">Incident se prijavljuje nadležnim organima i CERT timovima za koordinaciju.</li>
      <li data-sr="Zaposleni prolaze kroz obuku za prepoznavanje spear phishinga posle incidenta." data-en="Employees go through training for recognizing spear phishing after the incident.">Zaposleni prolaze kroz obuku za prepoznavanje spear phishinga posle incidenta.</li>
    </ul>
    <div class="callout"><strong data-sr="Organizacija je sanirala pristup i uvela mere za sprečavanje ponavljanja.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Organizacija je sanirala pristup i uvela mere za sprečavanje ponavljanja." data-en="The organization has remediated access and implemented measures to prevent recurrence.">Organizacija je sanirala pristup i uvela mere za sprečavanje ponavljanja.</span></div>
  </article>
</section>

<section class="content-section">
  <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
  <ul class="bullets">
    <li data-sr="Mejl domen se razlikuje od zvaničnog za jedan karakter ili sadrži subdomain koji nikad nije korišćen." data-en="The email domain differs from the official one by one character or contains a subdomain never used before.">Mejl domen se razlikuje od zvaničnog za jedan karakter ili sadrži subdomain koji nikad nije korišćen.</li>
    <li data-sr="Poruka traži hitnu akciju bez prethodne najave — promenu lozinke, potvrdu uplate, otvaranje dokumenta." data-en="The message requests urgent action without prior notice — password change, payment confirmation, opening a document.">Poruka traži hitnu akciju bez prethodne najave — promenu lozinke, potvrdu uplate, otvaranje dokumenta.</li>
    <li data-sr="Pošiljalac koji je naveden kao kolega ili nadređeni ne bi normalno slao ovakav zahtev." data-en="The sender listed as a colleague or superior would not normally send such a request.">Pošiljalac koji je naveden kao kolega ili nadređeni ne bi normalno slao ovakav zahtev.</li>
    <li data-sr="Link vodi na domen koji nije deo poznatih internih ili partnerskih sistema." data-en="The link leads to a domain that is not part of known internal or partner systems.">Link vodi na domen koji nije deo poznatih internih ili partnerskih sistema.</li>
    <li data-sr=".Prilog ima neobičan naziv ili format — .exe masiran kao .pdf, .docm sa makroima." data-en="The attachment has an unusual name or format — .exe disguised as .pdf, .docm with macros.">.Prilog ima neobičan naziv ili format — .exe masiran kao .pdf, .docm sa makroima.</li>
    <li data-sr="Poruka sadrži tačne detalje koji nisu javni što znači da je istraživanje prethodilo napadu." data-en="The message contains accurate non-public details which means research preceded the attack.">Poruka sadrži tačne detalje koji nisu javni što znači da je istraživanje prethodilo napadu.</li>
    <li data-sr="Zahtev se tiče finansija, lozinki ili poverljivih podataka sa urgentnim obrazloženjem." data-en="The request concerns finances, passwords or confidential data with an urgent rationale.">Zahtev se tiče finansija, lozinki ili poverljivih podataka sa urgentnim obrazloženjem.</li>
    <li data-sr="Kolega čiji nalog šalje poruku nije dostupan za direktnu verifikaciju telefonom ili lično." data-en="The colleague whose account is sending the message is not available for direct verification by phone or in person.">Kolega čiji nalog šalje poruku nije dostupan za direktnu verifikaciju telefonom ili lično.</li>
    <li data-sr="Poruka stiže van radnog vremena ili iz neobičnog vremenskog pojasa za pošiljaoca." data-en="The message arrives outside business hours or from an unusual time zone for the sender.">Poruka stiže van radnog vremena ili iz neobičnog vremenskog pojasa za pošiljaoca.</li>
    <li data-sr="Reply-to adresa se razlikuje od From adrese i vodi na drugi domen." data-en="The Reply-to address differs from the From address and leads to a different domain.">Reply-to adresa se razlikuje od From adrese i vodi na drugi domen.</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Provere: 8 brzih provera pre klika ili akcije" data-en="Checks: 8 quick checks before clicking or acting">Provere: 8 brzih provera pre klika ili akcije</h2>
  <ol class="steps">
    <li data-sr="Proveri tačan email domen pošiljaoca — da li je identičan zvaničnom domenu tvoje organizacije ili partnera?" data-en="Check the sender's exact email domain — is it identical to your organization's or partner's official domain?">Proveri tačan email domen pošiljaoca — da li je identičan zvaničnom domenu tvoje organizacije ili partnera?</li>
    <li data-sr="Kontaktiraj navodnog pošiljaoca direktno telefonom ili lično da potvrdis zahtev — ne putem mejla." data-en="Contact the alleged sender directly by phone or in person to confirm the request — not via email.">Kontaktiraj navodnog pošiljaoca direktno telefonom ili lično da potvrdis zahtev — ne putem mejla.</li>
    <li data-sr="Prebaci mišem preko linka pre klika i proveri da li prikazana URL odgovara očekivanom domenu." data-en="Hover over the link before clicking and check whether the displayed URL matches the expected domain.">Prebaci mišem preko linka pre klika i proveri da li prikazana URL odgovara očekivanom domenu.</li>
    <li data-sr="Proveri Reply-to polje u mejlu — da li je identično From polju?" data-en="Check the Reply-to field in the email — is it identical to the From field?">Proveri Reply-to polje u mejlu — da li je identično From polju?</li>
    <li data-sr="Da li je zahtev u mejlu deo normalnog procesa koji bi tekao ovako — ili je procedura zaobiđena?" data-en="Is the request in the email part of a normal process that would work this way — or is the procedure bypassed?">Da li je zahtev u mejlu deo normalnog procesa koji bi tekao ovako — ili je procedura zaobiđena?</li>
    <li data-sr="Proveri email zaglavlje (header) za izvorne IP adrese i SPF/DKIM/DMARC rezultate." data-en="Check the email header for source IP addresses and SPF/DKIM/DMARC results.">Proveri email zaglavlje (header) za izvorne IP adrese i SPF/DKIM/DMARC rezultate.</li>
    <li data-sr="Ako mejl sadrži prilog koji nisi očekivao, ne otvaraj ga bez verifikacije sa pošiljaocem." data-en="If the email contains an attachment you did not expect, do not open it without verifying with the sender.">Ako mejl sadrži prilog koji nisi očekivao, ne otvaraj ga bez verifikacije sa pošiljaocem.</li>
    <li data-sr="Prijavi sumnjivu poruku IT bezbednosnom timu pre nego što preduzmeš bilo kakvu akciju." data-en="Report the suspicious message to the IT security team before taking any action.">Prijavi sumnjivu poruku IT bezbednosnom timu pre nego što preduzmeš bilo kakvu akciju.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Checklista: pitanja pre reakcije na neočekivani zahtev" data-en="Checklist: questions before responding to an unexpected request">Checklista: pitanja pre reakcije na neočekivani zahtev</h2>
  <ul class="bullets">
    <li data-sr="Da li je mejl domen pošiljaoca tačno identičan zvaničnom domenu?" data-en="Is the sender's email domain exactly identical to the official domain?">Da li je mejl domen pošiljaoca tačno identičan zvaničnom domenu?</li>
    <li data-sr="Da li sam kontaktirao navodnog pošiljaoca telefonom da potvrdim zahtev?" data-en="Have I contacted the alleged sender by phone to confirm the request?">Da li sam kontaktirao navodnog pošiljaoca telefonom da potvrdim zahtev?</li>
    <li data-sr="Da li bi ovaj zahtev normalno prošao kroz formalni odobreni proces?" data-en="Would this request normally go through a formal approved process?">Da li bi ovaj zahtev normalno prošao kroz formalni odobreni proces?</li>
    <li data-sr="Da li me urgentnost sprečava da sledim uobičajene procedure?" data-en="Is the urgency preventing me from following usual procedures?">Da li me urgentnost sprečava da sledim uobičajene procedure?</li>
    <li data-sr="Da li prilog ili link dolaze od pošiljaoca koji bi normalno slao ovaj tip fajla?" data-en="Do the attachment or link come from a sender who would normally send this type of file?">Da li prilog ili link dolaze od pošiljaoca koji bi normalno slao ovaj tip fajla?</li>
    <li data-sr="Da li poruka sadrži detalje koji izgledaju tačno ali nikad nisu bili deljeni mejlom?" data-en="Does the message contain details that look accurate but were never shared by email?">Da li poruka sadrži detalje koji izgledaju tačno ali nikad nisu bili deljeni mejlom?</li>
    <li data-sr="Da li je Reply-to adresa identična From adresi?" data-en="Is the Reply-to address identical to the From address?">Da li je Reply-to adresa identična From adresi?</li>
    <li data-sr="Da li sam prijavio sumnjivu poruku IT timu?" data-en="Have I reported the suspicious message to the IT team?">Da li sam prijavio sumnjivu poruku IT timu?</li>
    <li data-sr="Da li je zahtev za promenom lozinke ili finansijskom transakcijom iniciran bez prethodne najave?" data-en="Was the request for a password change or financial transaction initiated without prior notice?">Da li je zahtev za promenom lozinke ili finansijskom transakcijom iniciran bez prethodne najave?</li>
    <li data-sr="Da li se tačno sećam da sam imao razgovor koji opravdava ovaj zahtev?" data-en="Do I clearly remember having a conversation that justifies this request?">Da li se tačno sećam da sam imao razgovor koji opravdava ovaj zahtev?</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
  <ol class="steps">
    <li data-sr="Odmah obavesti IT bezbednosni tim — ne čekaj da budeš siguran, prijaviti suspiciozno je uvek ispravno." data-en="Immediately notify the IT security team — do not wait until you are sure, reporting suspicious is always correct.">Odmah obavesti IT bezbednosni tim — ne čekaj da budeš siguran, prijaviti suspiciozno je uvek ispravno.</li>
    <li data-sr="Ako si kliknuo link ili otvorio prilog, isključi računar iz mreže i obavesti IT odmah." data-en="If you clicked a link or opened an attachment, disconnect the computer from the network and notify IT immediately.">Ako si kliknuo link ili otvorio prilog, isključi računar iz mreže i obavesti IT odmah.</li>
    <li data-sr="Promeni sve lozinke sa čistog uređaja koji nije bio u kontaktu sa sumnjivim sadržajem." data-en="Change all passwords from a clean device that was not in contact with the suspicious content.">Promeni sve lozinke sa čistog uređaja koji nije bio u kontaktu sa sumnjivim sadržajem.</li>
    <li data-sr="Aktiviraj MFA na svim nalozima ako već nije aktiviran." data-en="Activate MFA on all accounts if it is not already active.">Aktiviraj MFA na svim nalozima ako već nije aktiviran.</li>
    <li data-sr="Sačuvaj originalni mejl kao dokaz za forenzičku analizu — ne briši ga." data-en="Save the original email as evidence for forensic analysis — do not delete it.">Sačuvaj originalni mejl kao dokaz za forenzičku analizu — ne briši ga.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
  <ul class="bullets">
    <li data-sr="Da li su kliknuli link ili otvorili prilog iz mejla koji je izgledao kao interni zahtev?" data-en="Did they click a link or open an attachment from an email that looked like an internal request?">Da li su kliknuli link ili otvorili prilog iz mejla koji je izgledao kao interni zahtev?</li>
    <li data-sr="Da li su uneli lozinku na stranici koja je možda bila lažna?" data-en="Did they enter a password on a page that may have been fake?">Da li su uneli lozinku na stranici koja je možda bila lažna?</li>
    <li data-sr="Da li su primetili anomalije na računaru posle toga — spore performanse, neočekivane procese?" data-en="Did they notice anomalies on the computer afterward — slow performance, unexpected processes?">Da li su primetili anomalije na računaru posle toga — spore performanse, neočekivane procese?</li>
    <li data-sr="Da li je IT tim bio obavešten i da li je urađena forenzička analiza?" data-en="Was the IT team notified and was forensic analysis performed?">Da li je IT tim bio obavešten i da li je urađena forenzička analiza?</li>
  </ul>
  <p data-sr="Rečenice koje rade:" data-en="Sentences that help:">Rečenice koje rade:</p>
  <ul class="bullets">
    <li data-sr="Isključi računar iz mreže odmah — svaka minuta produžuje mogući pristup napadača." data-en="Disconnect the computer from the network immediately — every minute extends the attacker's possible access.">Isključi računar iz mreže odmah — svaka minuta produžuje mogući pristup napadača.</li>
    <li data-sr="Prijavi incident IT timu pre nego što radiš bilo šta drugo — ne resetuj, ne briši." data-en="Report the incident to the IT team before doing anything else — do not reset, do not delete.">Prijavi incident IT timu pre nego što radiš bilo šta drugo — ne resetuj, ne briši.</li>
    <li data-sr="Promeni lozinke sa čistog telefona ili drugog uređaja koji sigurno nije bio zaražen." data-en="Change passwords from a clean phone or another device that is definitely not infected.">Promeni lozinke sa čistog telefona ili drugog uređaja koji sigurno nije bio zaražen.</li>
    <li data-sr="Sačuvaj originalni mejl — to je ključni dokaz za istragu." data-en="Save the original email — that is key evidence for the investigation.">Sačuvaj originalni mejl — to je ključni dokaz za istragu.</li>
  </ul>
</section>


`
};
