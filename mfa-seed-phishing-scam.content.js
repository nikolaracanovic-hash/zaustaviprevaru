if (!window.SCAM_CONTENT) window.SCAM_CONTENT = {};
window.SCAM_CONTENT["mfa-seed-phishing-scam"] = {
  raw_html: `
<section class="content-section">
  <h2 data-sr="Uvod: seed nije isto što i jednokratni kod" data-en="Introduction: the seed is not the same as a one-time code">Uvod: seed nije isto što i jednokratni kod</h2>
  <p data-sr="Aplikacija za kodove (Google Authenticator, Microsoft Authenticator i sl.) čuva tajni ključ po kojem generiše šestocifrene kodove; ako neko dobije taj ključ, generiše iste kodove kao vi." data-en="An authenticator app stores a secret key used to generate six-digit codes; if someone gets that key, they generate the same codes as you.">Aplikacija za kodove (Google Authenticator, Microsoft Authenticator i sl.) čuva tajni ključ po kojem generiše šestocifrene kodove; ako neko dobije taj ključ, generiše iste kodove kao vi.</p>
  <p data-sr="Fišing stranica ili lažna podrška traži da sinhronizujete MFA tako što ćete uneti seed tekst, skenirati QR ponovo ili poslati snimak ekrana sa podešavanjima." data-en="A phishing page or fake support asks you to sync MFA by entering seed text, scanning QR again, or sending a screenshot of settings.">Fišing stranica ili lažna podrška traži da sinhronizujete MFA tako što ćete uneti seed tekst, skenirati QR ponovo ili poslati snimak ekrana sa podešavanjima.</p>
  <div class="callout">
    <strong data-sr="Prag:" data-en="Threshold:">Prag:</strong>
    <span data-sr="Seed ili kompletan QR za ponovno podešavanje aplikacije za kodove deli se sa nepouzdanim licem ili formom." data-en="The seed or full QR for re-setting up the authenticator is shared with an untrusted party or form.">Seed ili kompletan QR za ponovno podešavanje aplikacije za kodove deli se sa nepouzdanim licem ili formom.</span>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Model" data-en="Model">Model</h2>
  <div class="phase">
    <div class="label" data-sr="Lanac" data-en="Chain">Lanac</div>
    <p data-sr="Kontakt → lažna prijava ili podrška → zahtev za seed/QR → napadač registruje isti MFA → prijava u nalog." data-en="Contact → fake login or support → seed/QR request → attacker registers the same MFA → account access.">Kontakt → lažna prijava ili podrška → zahtev za seed/QR → napadač registruje isti MFA → prijava u nalog.</p>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Kako generalno radi: mehanika" data-en="How it works: mechanics">Kako generalno radi: mehanika</h2>
  <div class="grid-2">
    <div class="phase">
      <div class="label" data-sr="Zašto seed šteti" data-en="Why the seed hurts">Zašto seed šteti</div>
      <ul class="bullets">
        <li data-sr="Sa seed-om nije potrebno krasti telefon ako kodovi mogu da se generišu bilo gde." data-en="With the seed, stealing the phone is not required if codes can be generated anywhere.">Sa seed-om nije potrebno krasti telefon ako kodovi mogu da se generišu bilo gde.</li>
        <li data-sr="Korisnik je navikao da deli šestocifreni kod i ne razlikuje ga od tajnog niza." data-en="The user is used to sharing a six-digit code and does not distinguish it from a secret string.">Korisnik je navikao da deli šestocifreni kod i ne razlikuje ga od tajnog niza.</li>
        <li data-sr="Lažna stranica može imitirati korak prebacivanja na novi telefon." data-en="A fake page can mimic a move to a new phone step.">Lažna stranica može imitirati korak prebacivanja na novi telefon.</li>
        <li data-sr="Posle kompromitacije lozinke seed omogućava stabilan pristup dok ga korisnik ne rotira." data-en="After password compromise, the seed enables stable access until the user rotates it.">Posle kompromitacije lozinke seed omogućava stabilan pristup dok ga korisnik ne rotira.</li>
      </ul>
    </div>
    <div class="phase">
      <div class="label" data-sr="Kanali napada" data-en="Attack channels">Kanali napada</div>
      <ul class="bullets">
        <li data-sr="Imejl sa linkom ka lažnoj stranici za ažuriranje MFA." data-en="Email with a link to a fake MFA update page.">Imejl sa linkom ka lažnoj stranici za ažuriranje MFA.</li>
        <li data-sr="Poziv lažnog IT-a koji traži fotografiju ekrana sa aplikacijom." data-en="A call from fake IT asking for a photo of the app screen.">Poziv lažnog IT-a koji traži fotografiju ekrana sa aplikacijom.</li>
        <li data-sr="Chat u poslovnom okruženju posle kompromitovanog naloga kolege." data-en="Work chat after a colleague’s account is compromised.">Chat u poslovnom okruženju posle kompromitovanog naloga kolege.</li>
        <li data-sr="Lažni alat za migraciju koji traži izvoz seed-a." data-en="A fake migration tool that asks to export the seed.">Lažni alat za migraciju koji traži izvoz seed-a.</li>
      </ul>
    </div>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching)">Hronološki tok (faze + grananja)</h2>

  <article class="phase">
    <h3 data-sr="Faza 1 — Kontakt i priprema poverenja" data-en="Phase 1 — Contact and trust setup">Faza 1 — Kontakt i priprema poverenja</h3>
    <p data-sr="Poruka glumi bezbednosni incident, istek MFA uređaja ili korporativnu migraciju na novi sistem." data-en="The message pretends there is a security incident, MFA device expiry, or corporate migration to a new system.">Poruka glumi bezbednosni incident, istek MFA uređaja ili korporativnu migraciju na novi sistem.</p>
    <ul class="bullets">
      <li data-sr="Pošiljalac koristi logo i jezik koji liče na interni IT ili poznat servis." data-en="The sender uses logos and language resembling internal IT or a known service.">Pošiljalac koristi logo i jezik koji liče na interni IT ili poznat servis.</li>
      <li data-sr="Rok je kratak da bi se smanjila provera." data-en="The deadline is short to reduce verification.">Rok je kratak da bi se smanjila provera.</li>
      <li data-sr="Link vodi na domen sličan pravom uz sitnu razliku." data-en="The link leads to a domain similar to the real one with a small difference.">Link vodi na domen sličan pravom uz sitnu razliku.</li>
      <li data-sr="Korisnik veruje da je MFA tehnička stvar koju IT rešava redovno." data-en="The user believes MFA is a technical thing IT handles routinely.">Korisnik veruje da je MFA tehnička stvar koju IT rešava redovno.</li>
    </ul>
    <div class="callout"><strong data-sr="Korisnik klikne link ili odgovori na poruku.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Korisnik klikne link ili odgovori na poruku." data-en="The user clicks the link or replies to the message.">Korisnik klikne link ili odgovori na poruku.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 2 — Lažna prijava ili formular" data-en="Phase 2 — Fake login or form">Faza 2 — Lažna prijava ili formular</h3>
    <p data-sr="Korisnik unosi lozinku na lažnoj stranici; napadač odmah testira prijavu na pravom servisu." data-en="The user enters a password on a fake page; the attacker immediately tries sign-in on the real service.">Korisnik unosi lozinku na lažnoj stranici; napadač odmah testira prijavu na pravom servisu.</p>
    <ul class="bullets">
      <li data-sr="Stranica traži i stari i novi MFA korak u istom toku." data-en="The page asks for old and new MFA steps in the same flow.">Stranica traži i stari i novi MFA korak u istom toku.</li>
      <li data-sr="Može se tražiti privremeni kod koji korisnik čita sa telefona." data-en="A temporary code read from the phone may be requested.">Može se tražiti privremeni kod koji korisnik čita sa telefona.</li>
      <li data-sr="Cilj je doći do ekrana gde se prikazuje seed ili QR." data-en="The goal is to reach a screen that shows the seed or QR.">Cilj je doći do ekrana gde se prikazuje seed ili QR.</li>
      <li data-sr="Forma može tražiti i rezervni broj telefona." data-en="The form may also ask for a backup phone number.">Forma može tražiti i rezervni broj telefona.</li>
    </ul>
    <div class="callout"><strong data-sr="Lozinka je prosleđena napadaču.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Lozinka je prosleđena napadaču." data-en="The password has been sent to the attacker.">Lozinka je prosleđena napadaču.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching in this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="phishing.html" data-sr="Opšti fišing toka prijave." data-en="General phishing login flow.">Opšti fišing toka prijave.</a></li>
        <li><a href="oauth-consent-phishing.html" data-sr="OAuth umesto forme, ali isti cilj pristupa." data-en="OAuth instead of a form, same access goal.">OAuth umesto forme, ali isti cilj pristupa.</a></li>
      </ul>
    </div>
  </article>

  <article class="phase warn">
    <h3 data-sr="Faza 3 — Zahtev za seed ili QR" data-en="Phase 3 — Seed or QR request">Faza 3 — Zahtev za seed ili QR</h3>
    <p data-sr="Lažni tekst kaže da morate uneti tajni ključ da bi se uređaj registrovao ili da pošaljete QR za proveru." data-en="Fake text says you must enter a secret key to register the device or send a QR for verification.">Lažni tekst kaže da morate uneti tajni ključ da bi se uređaj registrovao ili da pošaljete QR za proveru.</p>
    <ul class="bullets">
      <li data-sr="Polje za unos prima dugačak niz slova i brojeva (Base32)." data-en="An input field accepts a long letter-and-number string (Base32).">Polje za unos prima dugačak niz slova i brojeva (Base32).</li>
      <li data-sr="Traži se fotografija ekrana sa otvorenim podešavanjima aplikacije." data-en="A photo of the screen with app settings open is requested.">Traži se fotografija ekrana sa otvorenim podešavanjima aplikacije.</li>
      <li data-sr="Lažni agent traži da pročitate naglas šta piše ispod QR koda." data-en="A fake agent asks you to read aloud what is under the QR code.">Lažni agent traži da pročitate naglas šta piše ispod QR koda.</li>
      <li data-sr="Korisnik ne zna da je to trajni tajni materijal, ne jednokratni kod." data-en="The user does not know it is permanent secret material, not a one-time code.">Korisnik ne zna da je to trajni tajni materijal, ne jednokratni kod.</li>
    </ul>
    <div class="callout"><strong data-sr="Seed ili čitljiv QR je prosleđen napadaču.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Seed ili čitljiv QR je prosleđen napadaču." data-en="The seed or a readable QR has been sent to the attacker.">Seed ili čitljiv QR je prosleđen napadaču.</span></div>
  </article>

  <article class="phase bad">
    <h3 data-sr="Faza 4 — Kloniranje generatora kodova" data-en="Phase 4 — Cloning the code generator">Faza 4 — Kloniranje generatora kodova</h3>
    <p data-sr="Napadač unosi isti seed u svoju aplikaciju i dobija iste kodove u istom vremenskom prozoru." data-en="The attacker enters the same seed in their app and gets the same codes in the same time window.">Napadač unosi isti seed u svoju aplikaciju i dobija iste kodove u istom vremenskom prozoru.</p>
    <ul class="bullets">
      <li data-sr="Prijava na nalog prolazi čak i kada korisnik menja lozinku ako se MFA ne rotira." data-en="Sign-in can succeed even if the user changes the password when MFA is not rotated.">Prijava na nalog prolazi čak i kada korisnik menja lozinku ako se MFA ne rotira.</li>
      <li data-sr="Napadač može dodati sopstveni rezervni telefon u podešavanjima." data-en="The attacker may add their own backup phone in settings.">Napadač može dodati sopstveni rezervni telefon u podešavanjima.</li>
      <li data-sr="Korisnik i dalje vidi normalne kodove na svom telefonu." data-en="The user still sees normal codes on their phone.">Korisnik i dalje vidi normalne kodove na svom telefonu.</li>
      <li data-sr="Detekcija kasni dok se ne vidi aktivnost sa novog uređaja ili lokacije." data-en="Detection is delayed until activity from a new device or location appears.">Detekcija kasni dok se ne vidi aktivnost sa novog uređaja ili lokacije.</li>
    </ul>
    <div class="callout"><strong data-sr="Napadač uspešno generiše važeće kodove za isti nalog.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Napadač uspešno generiše važeće kodove za isti nalog." data-en="The attacker successfully generates valid codes for the same account.">Napadač uspešno generiše važeće kodove za isti nalog.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching in this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="mfa-fatigue-scam.html" data-sr="Bombardovanje push odobrenja ako je u upotrebi push MFA." data-en="Push approval fatigue if push MFA is in use.">Bombardovanje push odobrenja ako je u upotrebi push MFA.</a></li>
        <li><a href="seed-phrase-scam.html" data-sr="Ne mešati sa seed frazom novčanika — drugi kontekst, ista opasnost delićenja tajne." data-en="Do not confuse with wallet seed phrase — different context, same secrecy risk.">Ne mešati sa seed frazom novčanika — drugi kontekst, ista opasnost delićenja tajne.</a></li>
      </ul>
    </div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 5 — Zloupotreba naloga" data-en="Phase 5 — Account abuse">Faza 5 — Zloupotreba naloga</h3>
    <p data-sr="Napadač menja podatke za isplatu, šalje imejlove kontaktima ili krade fajlove iz oblaka." data-en="The attacker changes payout details, emails contacts, or steals cloud files.">Napadač menja podatke za isplatu, šalje imejlove kontaktima ili krade fajlove iz oblaka.</p>
    <ul class="bullets">
      <li data-sr="MFA kodovi i dalje prolaze jer je seed isti." data-en="MFA codes still work because the seed is the same.">MFA kodovi i dalje prolaze jer je seed isti.</li>
      <li data-sr="Prava IT podrška vidi sumnjive prijave ali korisnik ne razume uzrok." data-en="Real IT support sees suspicious logins but the user does not understand the cause.">Prava IT podrška vidi sumnjive prijave ali korisnik ne razume uzrok.</li>
      <li data-sr="Nalog može biti prodat dalje na tržištu pristupa." data-en="The account may be resold on an access marketplace.">Nalog može biti prodat dalje na tržištu pristupa.</li>
      <li data-sr="Korisnik resetuje samo lozinku bez rotacije MFA pa problem ostaje." data-en="The user resets only the password without rotating MFA so the problem remains.">Korisnik resetuje samo lozinku bez rotacije MFA pa problem ostaje.</li>
    </ul>
    <div class="callout"><strong data-sr="Šteta je vidljiva u aktivnosti naloga ili transakcijama.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Šteta je vidljiva u aktivnosti naloga ili transakcijama." data-en="Harm is visible in account activity or transactions.">Šteta je vidljiva u aktivnosti naloga ili transakcijama.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 6 — Rotacija MFA i oporavak" data-en="Phase 6 — MFA rotation and recovery">Faza 6 — Rotacija MFA i oporavak</h3>
    <p data-sr="Jedina pouzdana sanacija je opoziv postojećeg MFA, generisanje novog seed-a na zvaničnoj stranici i provera uređaja." data-en="Reliable remediation is revoking existing MFA, generating a new seed on the official page, and reviewing devices.">Jedina pouzdana sanacija je opoziv postojećeg MFA, generisanje novog seed-a na zvaničnoj stranici i provera uređaja.</p>
    <ul class="bullets">
      <li data-sr="U podešavanjima bezbednosti ukloniti stare aplikacije za kodove i dodati novo podešavanje." data-en="In security settings remove old authenticator apps and add a fresh setup.">U podešavanjima bezbednosti ukloniti stare aplikacije za kodove i dodati novo podešavanje.</li>
      <li data-sr="Proveriti rezervne brojeve i imejl za oporavak i ukloniti tuđe." data-en="Check backup numbers and recovery email and remove foreign ones.">Proveriti rezervne brojeve i imejl za oporavak i ukloniti tuđe.</li>
      <li data-sr="Odjaviti sve sesije i pregledati integracije trećih strana." data-en="Sign out all sessions and review third-party integrations.">Odjaviti sve sesije i pregledati integracije trećih strana.</li>
      <li data-sr="Obavestiti poslodavca ako je poslovni nalog u pitanju." data-en="Notify the employer if a work account is involved.">Obavestiti poslodavca ako je poslovni nalog u pitanju.</li>
    </ul>
    <div class="callout"><strong data-sr="Stari seed više ne generiše važeće kodove za nalog.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Stari seed više ne generiše važeće kodove za nalog." data-en="The old seed no longer generates valid codes for the account.">Stari seed više ne generiše važeće kodove za nalog.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching in this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="account-takeover.html" data-sr="Opšti opis preuzimanja naloga." data-en="General account takeover overview.">Opšti opis preuzimanja naloga.</a></li>
        <li><a href="fake-call-scam.html" data-sr="Lažni poziv koji traži kod ili seed." data-en="Fake call asking for code or seed.">Lažni poziv koji traži kod ili seed.</a></li>
      </ul>
    </div>
  </article>
</section>

<section class="content-section">
  <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
  <ul class="bullets">
    <li data-sr="Bilo ko traži da unesete ili pročitate tajni ključ iz aplikacije za kodove." data-en="Anyone asks you to enter or read a secret key from your authenticator app.">Bilo ko traži da unesete ili pročitate tajni ključ iz aplikacije za kodove.</li>
    <li data-sr="Traži se fotografija QR koda ili ekrana sa podešavanjima MFA." data-en="A photo of the QR code or MFA settings screen is requested.">Traži se fotografija QR koda ili ekrana sa podešavanjima MFA.</li>
    <li data-sr="IT podrška traži seed preko četa ili mejla bez tiketa u zvaničnom sistemu." data-en="IT support asks for a seed over chat or email without a ticket in the official system.">IT podrška traži seed preko četa ili mejla bez tiketa u zvaničnom sistemu.</li>
    <li data-sr="Stranica za migraciju MFA nije na istom domenu koji koristite za prijavu svakodnevno." data-en="The MFA migration page is not on the same domain you use for daily sign-in.">Stranica za migraciju MFA nije na istom domenu koji koristite za prijavu svakodnevno.</li>
    <li data-sr="Govori se da je jednokratni kod nedovoljan i da mora seed." data-en="They say the one-time code is not enough and a seed is required.">Govori se da je jednokratni kod nedovoljan i da mora seed.</li>
    <li data-sr="Hitnost i pretnja blokadom naloga ako ne pošaljete podatke odmah." data-en="Urgency and threat of account lock unless you send data immediately.">Hitnost i pretnja blokadom naloga ako ne pošaljete podatke odmah.</li>
    <li data-sr="Link u mejlu vodi na domen koji se razlikuje od pravog jednim slovom." data-en="The email link leads to a domain one letter off from the real one.">Link u mejlu vodi na domen koji se razlikuje od pravog jednim slovom.</li>
    <li data-sr="Traži se da instalirate nepoznatu aplikacija za sinhronizaciju MFA." data-en="You are asked to install an unknown app for MFA sync.">Traži se da instalirate nepoznatu aplikacija za sinhronizaciju MFA.</li>
    <li data-sr="Kolega šalje neobičan zahtev za MFA bez ranijeg konteksta." data-en="A colleague sends an unusual MFA request without prior context.">Kolega šalje neobičan zahtev za MFA bez ranijeg konteksta.</li>
    <li data-sr="Posle podešavanja vidite novi nepoznat uređaj u listi sesija." data-en="After setup you see a new unknown device in the session list.">Posle podešavanja vidite novi nepoznat uređaj u listi sesija.</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
  <ol class="steps">
    <li data-sr="Pozovite interni IT na broj sa intraneta, ne na broj iz poruke." data-en="Call internal IT on a number from the intranet, not from the message.">Pozovite interni IT na broj sa intraneta, ne na broj iz poruke.</li>
    <li data-sr="Otvorite podešavanja MFA samo kroz zvaničnu aplikaciju ili ručno ukucan domen." data-en="Open MFA settings only through the official app or a typed domain.">Otvorite podešavanja MFA samo kroz zvaničnu aplikaciju ili ručno ukucan domen.</li>
    <li data-sr="Proverite da li ista poruka stoji u sistemu tiketa poslodavca." data-en="Check whether the same message exists in the employer’s ticket system.">Proverite da li ista poruka stoji u sistemu tiketa poslodavca.</li>
    <li data-sr="Zapamtite: niko legitiman ne treba vaš seed, samo jednokratne kodove u ograničenim slučajevima." data-en="Remember: no legitimate party needs your seed, only one-time codes in limited cases.">Zapamtite: niko legitiman ne treba vaš seed, samo jednokratne kodove u ograničenim slučajevima.</li>
    <li data-sr="Uporedite URL u mejlu sa adresom koju znate iz ranijih prijava." data-en="Compare the email URL to the address you know from past logins.">Uporedite URL u mejlu sa adresom koju znate iz ranijih prijava.</li>
    <li data-sr="Ako ste već uneli seed, odmah rotirajte MFA na pravom sajtu bez čekanja." data-en="If you already entered a seed, rotate MFA on the real site immediately without waiting.">Ako ste već uneli seed, odmah rotirajte MFA na pravom sajtu bez čekanja.</li>
    <li data-sr="Proverite da li je kolega zaista poslao poruku drugim kanalom." data-en="Verify with the colleague on another channel that they sent the message.">Proverite da li je kolega zaista poslao poruku drugim kanalom.</li>
    <li data-sr="Sačuvajte snimke poruke i URL za prijavu bezbednosnom timu." data-en="Save screenshots of the message and URL for the security team.">Sačuvajte snimke poruke i URL za prijavu bezbednosnom timu.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Checklista" data-en="Checklist">Checklista</h2>
  <ul class="bullets">
    <li data-sr="Da li sam ikada video da zvanična dokumentacija servisa traži seed u četu?" data-en="Have you ever seen official service docs ask for a seed in chat?">Da li sam ikada video da zvanična dokumentacija servisa traži seed u četu?</li>
    <li data-sr="Da li je URL identičan onom koji koristim mesecima?" data-en="Is the URL identical to what I have used for months?">Da li je URL identičan onom koji koristim mesecima?</li>
    <li data-sr="Da li postoji otvoren tiket u firmi za ovu radnju?" data-en="Is there an open company ticket for this action?">Da li postoji otvoren tiket u firmi za ovu radnju?</li>
    <li data-sr="Da li mogu da završim MFA promenu samo iz aplikacije na telefonu?" data-en="Can I complete the MFA change only from the phone app?">Da li mogu da završim MFA promenu samo iz aplikacije na telefonu?</li>
    <li data-sr="Da li osoba koja zove zna moje ime bez mog predstavljanja?" data-en="Does the caller know my name without my introducing myself?">Da li osoba koja zove zna moje ime bez mog predstavljanja?</li>
    <li data-sr="Da li me pritisak sprečava da pitam drugog člana tima?" data-en="Does pressure stop me from asking another team member?">Da li me pritisak sprečava da pitam drugog člana tima?</li>
    <li data-sr="Da li je seed ikada deljiv prema pravilima mog poslodavca?" data-en="Is a seed ever shareable under my employer’s rules?">Da li je seed ikada deljiv prema pravilima mog poslodavca?</li>
    <li data-sr="Da li bih ovo uradio na svom bankarskom nalogu?" data-en="Would I do this on my bank account?">Da li bih ovo uradio na svom bankarskom nalogu?</li>
    <li data-sr="Da li novi uređaj u sesijama odgovara mom telefonu?" data-en="Does the new session device match my phone?">Da li novi uređaj u sesijama odgovara mom telefonu?</li>
    <li data-sr="Da li je rezervni broj u podešavanjima još uvek moj?" data-en="Is the backup number in settings still mine?">Da li je rezervni broj u podešavanjima još uvek moj?</li>
    <li data-sr="Da li sam proverio pravopis domena u mejlu?" data-en="Did I check domain spelling in the email?">Da li sam proverio pravopis domena u mejlu?</li>
    <li data-sr="Da li mogu da pauziram 15 minuta i ponovo proverim pre unosa?" data-en="Can I pause 15 minutes and verify again before entering?">Da li mogu da pauziram 15 minuta i ponovo proverim pre unosa?</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: order of actions">Ako sumnja krene: redosled poteza</h2>
  <ol class="steps">
    <li data-sr="Prekinite unos i ne šaljite seed ni snimke ekrana." data-en="Stop entering and do not send a seed or screenshots.">Prekinite unos i ne šaljite seed ni snimke ekrana.</li>
    <li data-sr="Zatvorite lažnu stranicu i očistite je iz istorije ako je potrebno." data-en="Close the fake page and clear it from history if needed.">Zatvorite lažnu stranicu i očistite je iz istorije ako je potrebno.</li>
    <li data-sr="Prijavite incident pravom IT ili bezbednosnom adresom." data-en="Report the incident to real IT or the security address.">Prijavite incident pravom IT ili bezbednosnom adresom.</li>
    <li data-sr="Ako je seed već prosleđen, rotirajte MFA i lozinku sa čistog uređaja." data-en="If the seed was already sent, rotate MFA and password from a clean device.">Ako je seed već prosleđen, rotirajte MFA i lozinku sa čistog uređaja.</li>
    <li data-sr="Pregledajte uređaje, sesije i aplikacije sa pristupom nalogu." data-en="Review devices, sessions, and apps with account access.">Pregledajte uređaje, sesije i aplikacije sa pristupom nalogu.</li>
    <li data-sr="Obavestite kontakte ako je imejl kompromitovan." data-en="Notify contacts if email is compromised.">Obavestite kontakte ako je imejl kompromitovan.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
  <ul class="bullets">
    <li data-sr="Da li su nekome slali tekst ispod QR koda iz aplikacije za kodove?" data-en="Did they send anyone the text under the QR in the authenticator app?">Da li su nekome slali tekst ispod QR koda iz aplikacije za kodove?</li>
    <li data-sr="Da li su unosili dugačak niz u formu posle mejla o migraciji?" data-en="Did they enter a long string in a form after an email about migration?">Da li su unosili dugačak niz u formu posle mejla o migraciji?</li>
    <li data-sr="Da li im je IT tražio to preko WhatsApp-a ili SMS-a?" data-en="Did their IT ask via WhatsApp or SMS?">Da li im je IT tražio to preko WhatsApp-a ili SMS-a?</li>
    <li data-sr="Da li vide nove uređaje u Google/Microsoft bezbednosnim ekranima?" data-en="Do they see new devices on Google/Microsoft security screens?">Da li vide nove uređaje u Google/Microsoft bezbednosnim ekranima?</li>
  </ul>
  <p data-sr="Rečenice koje rade:" data-en="Sentences that help:">Rečenice koje rade:</p>
  <ul class="bullets">
    <li data-sr="Tajni ključ iz aplikacije za kodove nemoj da deliš — to je kao druga lozinka koja ne ističe." data-en="Never share the secret key from the authenticator app — it is like a second password that does not expire.">Tajni ključ iz aplikacije za kodove nemoj da deliš — to je kao druga lozinka koja ne ističe.</li>
    <li data-sr="Ako su tražili seed, pretpostavi da je kompromitovano i rotiraj MFA na pravom sajtu." data-en="If they asked for a seed, assume compromise and rotate MFA on the real site.">Ako su tražili seed, pretpostavi da je kompromitovano i rotiraj MFA na pravom sajtu.</li>
    <li data-sr="Pozovi IT na broj sa intraneta, ne na broj iz poruke." data-en="Call IT on the intranet number, not the number from the message.">Pozovi IT na broj sa intraneta, ne na broj iz poruke.</li>
    <li data-sr="Šestocifreni kod je jednokratan; dugački niz slova je seed — ne mešaj to." data-en="The six-digit code is one-time; the long letter string is a seed — do not mix them up.">Šestocifreni kod je jednokratan; dugački niz slova je seed — ne mešaj to.</li>
  </ul>
</section>


`
};
