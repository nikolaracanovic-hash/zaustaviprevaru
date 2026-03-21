if (!window.SCAM_CONTENT) window.SCAM_CONTENT = {};
window.SCAM_CONTENT["fake-app-sideload-verification-scam"] = {
  raw_html: `
<section class="content-section">
  <h2 data-sr="Uvod: sideload i lažna verifikacija" data-en="Introduction: sideload and fake verification">Uvod: sideload i lažna verifikacija</h2>
  <p data-sr="Kada instalirate APK van Google Play ili App Store-a, zlonamerni paket ili prateći sajt može tražiti dodatni korak: mala naknada za verifikaciju licence, sinhronizaciju sa prodavnicom ili instalaciju patch paketa." data-en="When you install an APK outside Google Play or the App Store, a malicious package or follow-on site may demand an extra step: a small fee for license verification, store sync, or installing a patch package.">Kada instalirate APK van Google Play ili App Store-a, zlonamerni paket ili prateći sajt može tražiti dodatni korak: mala naknada za verifikaciju licence, sinhronizaciju sa prodavnicom ili instalaciju patch paketa.</p>
  <p data-sr="Cilj je novac, daljinski pristup preko podrške ili još jedan maliciozni sloj koji krade podatke." data-en="The goal is money, remote access via support, or another malicious layer that steals data.">Cilj je novac, daljinski pristup preko podrške ili još jedan maliciozni sloj koji krade podatke.</p>
  <div class="callout">
    <strong data-sr="Prag:" data-en="Threshold:">Prag:</strong>
    <span data-sr="Plaćanje ili daljinska sesija radi otključavanja aplikacije instalirane van zvanične prodavnice." data-en="Payment or a remote session to unlock an app installed outside the official store.">Plaćanje ili daljinska sesija radi otključavanja aplikacije instalirane van zvanične prodavnice.</span>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Model" data-en="Model">Model</h2>
  <div class="phase">
    <div class="label" data-sr="Lanac" data-en="Chain">Lanac</div>
    <p data-sr="Oglas/link → APK → instalacija → poruka u aplikaciji ili preusmerenje na sajt → lažna verifikacija → uplata ili malver → šteta." data-en="Ad/link → APK → install → in-app message or redirect → fake verification → payment or malware → loss.">Oglas/link → APK → instalacija → poruka u aplikaciji ili preusmerenje na sajt → lažna verifikacija → uplata ili malver → šteta.</p>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Kako generalno radi: mehanika" data-en="How it works: mechanics">Kako generalno radi: mehanika</h2>
  <div class="grid-2">
    <div class="phase">
      <div class="label" data-sr="Zašto sideload povećava rizik" data-en="Why sideload raises risk">Zašto sideload povećava rizik</div>
      <ul class="bullets">
        <li data-sr="Nema iste automatske provere kao u zvaničnoj prodavnici." data-en="There are not the same automatic checks as in the official store.">Nema iste automatske provere kao u zvaničnoj prodavnici.</li>
        <li data-sr="Korisnik je već prihvatio nepoznate izvore pa je manje odbojan prema sledećem koraku." data-en="The user already allowed unknown sources and is less resistant to the next step.">Korisnik je već prihvatio nepoznate izvore pa je manje odbojan prema sledećem koraku.</li>
        <li data-sr="Lažna aplikacija može izgledati kao mod ili crack omiljene igre." data-en="The fake app may look like a mod or crack of a favorite game.">Lažna aplikacija može izgledati kao mod ili crack omiljene igre.</li>
        <li data-sr="Verifikacija zvuči kao normalan korak posle nezvanične instalacije." data-en="Verification sounds like a normal step after an unofficial install.">Verifikacija zvuči kao normalan korak posle nezvanične instalacije.</li>
      </ul>
    </div>
    <div class="phase">
      <div class="label" data-sr="Šta prevarant dobija" data-en="What the fraudster gains">Šta prevarant dobija</div>
      <ul class="bullets">
        <li data-sr="Direktnu uplatu karticom ili kriptom." data-en="Direct card or crypto payment.">Direktnu uplatu karticom ili kriptom.</li>
        <li data-sr="Pristup ekranu preko AnyDesk, TeamViewer ili sličnog alata." data-en="Screen access via AnyDesk, TeamViewer, or similar.">Pristup ekranu preko AnyDesk, TeamViewer ili sličnog alata.</li>
        <li data-sr="Drugi APK koji instalira keylogger ili RAT." data-en="A second APK that installs a keylogger or RAT.">Drugi APK koji instalira keylogger ili RAT.</li>
        <li data-sr="Kredencijale unete u lažnu prijavu unutar aplikacije." data-en="Credentials typed into a fake login inside the app.">Kredencijale unete u lažnu prijavu unutar aplikacije.</li>
      </ul>
    </div>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching)">Hronološki tok (faze + grananja)</h2>

  <article class="phase">
    <h3 data-sr="Faza 1 — Preuzimanje APK-a ili profila" data-en="Phase 1 — APK or profile download">Faza 1 — Preuzimanje APK-a ili profila</h3>
    <p data-sr="Korisnik pronalazi besplatnu verziju, mod ili regionalno zaključanu aplikaciju na forumu, Telegram kanalu ili sajtu." data-en="The user finds a free version, mod, or region-locked app on a forum, Telegram channel, or site.">Korisnik pronalazi besplatnu verziju, mod ili regionalno zaključanu aplikaciju na forumu, Telegram kanalu ili sajtu.</p>
    <ul class="bullets">
      <li data-sr="Link često ide preko skraćivača ili više redirekcija." data-en="The link often goes through a shortener or multiple redirects.">Link često ide preko skraćivača ili više redirekcija.</li>
      <li data-sr="Opis tvrdi da je verifikacija u Play prodavnici formalnost koja se rešava posebnim alatom." data-en="The description claims Play verification is a formality fixed by a special tool.">Opis tvrdi da je verifikacija u Play prodavnici formalnost koja se rešava posebnim alatom.</li>
      <li data-sr="Korisnik uključuje instalaciju iz nepoznatih izvora." data-en="The user enables install from unknown sources.">Korisnik uključuje instalaciju iz nepoznatih izvora.</li>
      <li data-sr="Prvi APK može delimično raditi da bi se izgradilo poverenje." data-en="The first APK may partly work to build trust.">Prvi APK može delimično raditi da bi se izgradilo poverenje.</li>
    </ul>
    <div class="callout"><strong data-sr="Aplikacija je instalirana sa izvorom koji nije zvanična prodavnica.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Aplikacija je instalirana sa izvorom koji nije zvanična prodavnica." data-en="The app is installed from a source that is not the official store.">Aplikacija je instalirana sa izvorom koji nije zvanična prodavnica.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 2 — Poruka o obaveznom koraku" data-en="Phase 2 — Message about a mandatory step">Faza 2 — Poruka o obaveznom koraku</h3>
    <p data-sr="Unutar aplikacije ili pri prvom otvaranju browsera iz aplikacije pojavljuje se ekran koji blokira rad." data-en="Inside the app or on first browser open from the app, a screen appears that blocks use.">Unutar aplikacije ili pri prvom otvaranju browsera iz aplikacije pojavljuje se ekran koji blokira rad.</p>
    <ul class="bullets">
      <li data-sr="Tekst tvrdi da Google ili Apple zahtevaju dodatnu proveru zbog sideload-a." data-en="Text claims Google or Apple require extra checks because of sideloading.">Tekst tvrdi da Google ili Apple zahtevaju dodatnu proveru zbog sideload-a.</li>
      <li data-sr="Prikazuje se QR ili dugme koje vodi na spoljni sajt." data-en="A QR or button appears that leads to an external site.">Prikazuje se QR ili dugme koje vodi na spoljni sajt.</li>
      <li data-sr="Broj telefona aktivaciona linija može biti istaknut." data-en="An activation line phone number may be highlighted.">Broj telefona aktivaciona linija može biti istaknut.</li>
      <li data-sr="Tajmer stvara utisak da će instalacija biti poništena." data-en="A timer creates the impression the install will be revoked.">Tajmer stvara utisak da će instalacija biti poništena.</li>
    </ul>
    <div class="callout"><strong data-sr="Korisnik je otvorio spoljni sajt ili pozvao broj iz aplikacije.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Korisnik je otvorio spoljni sajt ili pozvao broj iz aplikacije." data-en="The user opened the external site or called the number from the app.">Korisnik je otvorio spoljni sajt ili pozvao broj iz aplikacije.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching in this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="malicious-app-scam.html" data-sr="Opšti zlonamerni APK bez posebne verifikacije." data-en="General malicious APK without a special verification step.">Opšti zlonamerni APK bez posebne verifikacije.</a></li>
        <li><a href="app-clone-scam.html" data-sr="Klon aplikacije iz prodavnice ili sideload." data-en="App clone from store or sideload.">Klon aplikacije iz prodavnice ili sideload.</a></li>
      </ul>
    </div>
  </article>

  <article class="phase warn">
    <h3 data-sr="Faza 3 — Plaćanje ili drugi APK" data-en="Phase 3 — Payment or second APK">Faza 3 — Plaćanje ili drugi APK</h3>
    <p data-sr="Sajt traži malu naknadu u evrima ili dolarima ili preuzimanje verifikacionog paketa." data-en="The site asks for a small fee in euros or dollars or downloading a verification package.">Sajt traži malu naknadu u evrima ili dolarima ili preuzimanje verifikacionog paketa.</p>
    <ul class="bullets">
      <li data-sr="Plaćanje ide na nepoznat platni procesor ili kripto adresu." data-en="Payment goes to an unknown processor or crypto address.">Plaćanje ide na nepoznat platni procesor ili kripto adresu.</li>
      <li data-sr="Nakon uplate traži se još jedna taksa za isti razlog." data-en="After payment another fee is requested for the same reason.">Nakon uplate traži se još jedna taksa za isti razlog.</li>
      <li data-sr="Drugi APK traži još šire dozvole od prvog." data-en="The second APK asks for even broader permissions than the first.">Drugi APK traži još šire dozvole od prvog.</li>
      <li data-sr="Kartični obrazac kopira poznate brendove." data-en="The card form copies known brands.">Kartični obrazac kopira poznate brendove.</li>
    </ul>
    <div class="callout"><strong data-sr="Novac je uplaćen ili je drugi APK instaliran.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Novac je uplaćen ili je drugi APK instaliran." data-en="Money was sent or the second APK was installed.">Novac je uplaćen ili je drugi APK instaliran.</span></div>
  </article>

  <article class="phase bad">
    <h3 data-sr="Faza 4 — Daljinska podrška ili malver" data-en="Phase 4 — Remote support or malware">Faza 4 — Daljinska podrška ili malver</h3>
    <p data-sr="Agent vodi korisnika kroz instalaciju alata za daljinski pristup ili drugi maliciozni sloj se aktivira." data-en="An agent walks the user through installing remote-access tools or another malicious layer activates.">Agent vodi korisnika kroz instalaciju alata za daljinski pristup ili drugi maliciozni sloj se aktivira.</p>
    <ul class="bullets">
      <li data-sr="Traže se dozvole pristupačnosti na Androidu kao pomoć." data-en="Android accessibility permissions are requested as help.">Traže se dozvole pristupačnosti na Androidu kao pomoć.</li>
      <li data-sr="Na računaru se instalira drajver koji je zapravo RAT." data-en="On PC a driver installs that is actually a RAT.">Na računaru se instalira drajver koji je zapravo RAT.</li>
      <li data-sr="Keylogger hvata lozinke za mejl i banku." data-en="A keylogger catches email and bank passwords.">Keylogger hvata lozinke za mejl i banku.</li>
      <li data-sr="SMS čitač na telefonu presreće kodove." data-en="An SMS reader on the phone intercepts codes.">SMS čitač na telefonu presreće kodove.</li>
    </ul>
    <div class="callout"><strong data-sr="Napadač ima daljinski pristup ili aktivan špijunski sloj.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Napadač ima daljinski pristup ili aktivan špijunski sloj." data-en="The attacker has remote access or an active spyware layer.">Napadač ima daljinski pristup ili aktivan špijunski sloj.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching in this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="tech-support-scam.html" data-sr="Lažna tehnička podrška sa daljinskim pristupom." data-en="Fake tech support with remote access.">Lažna tehnička podrška sa daljinskim pristupom.</a></li>
        <li><a href="fake-update-scam.html" data-sr="Lažni update nakon prvog malvera." data-en="Fake update after initial malware.">Lažni update nakon prvog malvera.</a></li>
      </ul>
    </div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 5 — Krađa i zloupotreba" data-en="Phase 5 — Theft and abuse">Faza 5 — Krađa i zloupotreba</h3>
    <p data-sr="Napadač prazni naloge, pravi uplate ili prodaje pristup uređaju." data-en="The attacker empties accounts, makes payments, or sells device access.">Napadač prazni naloge, pravi uplate ili prodaje pristup uređaju.</p>
    <ul class="bullets">
      <li data-sr="Kripto aplikacije na telefonu mogu biti cilj ako su instalirane." data-en="Crypto apps on the phone may be targeted if installed.">Kripto aplikacije na telefonu mogu biti cilj ako su instalirane.</li>
      <li data-sr="2FA kodovi se čitaju iz obaveštenja." data-en="2FA codes are read from notifications.">2FA kodovi se čitaju iz obaveštenja.</li>
      <li data-sr="Mejl se koristi za reset drugih servisa." data-en="Email is used to reset other services.">Mejl se koristi za reset drugih servisa.</li>
      <li data-sr="Korisnik i dalje vidi poluradnu aplikaciju pa ne sumnja odmah." data-en="The user still sees a half-working app so suspicion is delayed.">Korisnik i dalje vidi poluradnu aplikaciju pa ne sumnja odmah.</li>
    </ul>
    <div class="callout"><strong data-sr="Finansijski ili identifikacioni gubitak postaje vidljiv.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Finansijski ili identifikacioni gubitak postaje vidljiv." data-en="Financial or identity loss becomes visible.">Finansijski ili identifikacioni gubitak postaje vidljiv.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 6 — Uklanjanje i prevencija" data-en="Phase 6 — Removal and prevention">Faza 6 — Uklanjanje i prevencija</h3>
    <p data-sr="Deinstalacija svih sumnjivih paketa, skeniranje, promena lozinki sa drugog uređaja i vraćanje na zvanične izvore aplikacija." data-en="Uninstall all suspicious packages, scan, change passwords from another device, and return to official app sources.">Deinstalacija svih sumnjivih paketa, skeniranje, promena lozinki sa drugog uređaja i vraćanje na zvanične izvore aplikacija.</p>
    <ul class="bullets">
      <li data-sr="Isključiti nepoznate izvore dok nije neophodno i samo za poverljive APK-e." data-en="Turn off unknown sources unless necessary and only for trusted APKs.">Isključiti nepoznate izvore dok nije neophodno i samo za poverljive APK-e.</li>
      <li data-sr="Proveriti listu administratora uređaja i ukloniti nepoznate." data-en="Check device admin list and remove unknown entries.">Proveriti listu administratora uređaja i ukloniti nepoznate.</li>
      <li data-sr="Kontaktirati banku i kripto berzu ako su aplikacije bile otvorene." data-en="Contact bank and crypto exchange if related apps were open.">Kontaktirati banku i kripto berzu ako su aplikacije bile otvorene.</li>
      <li data-sr="Ne plaćati dodatne takse prevarantu — to produžava lanac." data-en="Do not pay further fees to the fraudster — it extends the chain.">Ne plaćati dodatne takse prevarantu — to produžava lanac.</li>
    </ul>
    <div class="callout"><strong data-sr="Uređaj je očišćen i nema aktivnih daljinskih sesija.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Uređaj je očišćen i nema aktivnih daljinskih sesija." data-en="The device is clean with no active remote sessions.">Uređaj je očišćen i nema aktivnih daljinskih sesija.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching in this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="account-takeover.html" data-sr="Preuzimanje naloga posle krađe kredencijala." data-en="Account takeover after credential theft.">Preuzimanje naloga posle krađe kredencijala.</a></li>
        <li><a href="phishing.html" data-sr="Fišing ako je unet mejl u lažnoj formi." data-en="Phishing if email was entered in a fake form.">Fišing ako je unet mejl u lažnoj formi.</a></li>
      </ul>
    </div>
  </article>
</section>

<section class="content-section">
  <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
  <ul class="bullets">
    <li data-sr="Aplikacija traži novac da bi se verifikovala u prodavnici." data-en="The app asks for money to be verified in the store.">Aplikacija traži novac da bi se verifikovala u prodavnici.</li>
    <li data-sr="Google ili Apple nikada ne naplaćuju pojedinačnu sideload licencu preko nasumičnog sajta." data-en="Google or Apple never charge a per-device sideload license via a random site.">Google ili Apple nikada ne naplaćuju pojedinačnu sideload licencu preko nasumičnog sajta.</li>
    <li data-sr="Traži se instalacija drugog APK-a sa istog sajta." data-en="A second APK from the same site is requested.">Traži se instalacija drugog APK-a sa istog sajta.</li>
    <li data-sr="Broj telefona za aktivaciju nije na zvaničnom support sajtu proizvođača." data-en="The activation phone is not on the manufacturer’s official support site.">Broj telefona za aktivaciju nije na zvaničnom support sajtu proizvođača.</li>
    <li data-sr="Hitnost i tajmer na ekranu aplikacije." data-en="Urgency and a timer on the app screen.">Hitnost i tajmer na ekranu aplikacije.</li>
    <li data-sr="Zahtev za AnyDesk, TeamViewer ili brzu dijagnostiku." data-en="Request for AnyDesk, TeamViewer, or quick diagnostics.">Zahtev za AnyDesk, TeamViewer ili brzu dijagnostiku.</li>
    <li data-sr="Domen sajta nema veze sa brendom aplikacije." data-en="The site domain has no relation to the app brand.">Domen sajta nema veze sa brendom aplikacije.</li>
    <li data-sr="Nakon uplate aplikacija i dalje ne radi u punom obimu." data-en="After payment the app still does not fully work.">Nakon uplate aplikacija i dalje ne radi u punom obimu.</li>
    <li data-sr="Antivirus upozorava na drugi paket koji morate instalirati." data-en="Antivirus warns on a second package you must install.">Antivirus upozorava na drugi paket koji morate instalirati.</li>
    <li data-sr="Aplikacija traži dozvole za SMS, pozive i pristupačnost istovremeno." data-en="The app asks for SMS, calls, and accessibility at once.">Aplikacija traži dozvole za SMS, pozive i pristupačnost istovremeno.</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
  <ol class="steps">
    <li data-sr="Potražite istu aplikaciju u zvaničnoj prodavnici i uporedite izdavaoca." data-en="Search the same app in the official store and compare the publisher.">Potražite istu aplikaciju u zvaničnoj prodavnici i uporedite izdavaoca.</li>
    <li data-sr="Pročitajte zvaničnu dokumentaciju o sideload-u — ne plaća se preko trećeg sajta." data-en="Read official sideload documentation — you do not pay via a third-party site.">Pročitajte zvaničnu dokumentaciju o sideload-u — ne plaća se preko trećeg sajta.</li>
    <li data-sr="Prekinite plaćanje ako traže drugu taksu odmah posle prve." data-en="Stop paying if a second fee is demanded right after the first.">Prekinite plaćanje ako traže drugu taksu odmah posle prve.</li>
    <li data-sr="Ne instalirajte drugi APK sa istog lanca." data-en="Do not install a second APK from the same chain.">Ne instalirajte drugi APK sa istog lanca.</li>
    <li data-sr="Ne dajte daljinski pristup podršci koja vas je kontaktirala iz aplikacije." data-en="Do not grant remote access to support that contacted you from the app.">Ne dajte daljinski pristup podršci koja vas je kontaktirala iz aplikacije.</li>
    <li data-sr="Proverite hash APK-a na VirusTotal pre instalacije." data-en="Check the APK hash on VirusTotal before install.">Proverite hash APK-a na VirusTotal pre instalacije.</li>
    <li data-sr="Uklonite aplikaciju i promenite lozinke ako ste uneli bilo šta osetljivo." data-en="Remove the app and change passwords if you entered anything sensitive.">Uklonite aplikaciju i promenite lozinke ako ste uneli bilo šta osetljivo.</li>
    <li data-sr="Sačuvajte URL i APK ime za prijavu." data-en="Save the URL and APK name for reporting.">Sačuvajte URL i APK ime za prijavu.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Checklista" data-en="Checklist">Checklista</h2>
  <ul class="bullets">
    <li data-sr="Da li je izdavač APK-a isti kao u prodavnici?" data-en="Is the APK publisher the same as in the store?">Da li je izdavač APK-a isti kao u prodavnici?</li>
    <li data-sr="Da li sam ikada video da zvanična dokumentacija traži ovu naknadu?" data-en="Have you ever seen official docs request this fee?">Da li sam ikada video da zvanična dokumentacija traži ovu naknadu?</li>
    <li data-sr="Da li bih platio istu stvar karticom firme?" data-en="Would I pay the same with a company card?">Da li bih platio istu stvar karticom firme?</li>
    <li data-sr="Da li drugi korisnici na forumu prijavljuju isti korak verifikacije?" data-en="Do other forum users report the same verification step?">Da li drugi korisnici na forumu prijavljuju isti korak verifikacije?</li>
    <li data-sr="Da li mogu da koristim aplikaciju bez ovog spoljnog sajta?" data-en="Can I use the app without this external site?">Da li mogu da koristim aplikaciju bez ovog spoljnog sajta?</li>
    <li data-sr="Da li je broj za podršku identičan zvaničnom?" data-en="Is the support number identical to the official one?">Da li je broj za podršku identičan zvaničnom?</li>
    <li data-sr="Da li aplikacija traži dozvole koje ne koristi u opisu?" data-en="Does the app request permissions it does not use per its description?">Da li aplikacija traži dozvole koje ne koristi u opisu?</li>
    <li data-sr="Da li je cena verifikacije srazmerna ceni same aplikacije u prodavnici?" data-en="Is the verification fee proportional to the app’s store price?">Da li je cena verifikacije srazmerna ceni same aplikacije u prodavnici?</li>
    <li data-sr="Da li antivirus upozorava?" data-en="Does antivirus warn?">Da li antivirus upozorava?</li>
    <li data-sr="Da li sam već platio i problem ostaje?" data-en="Did I already pay and the problem remains?">Da li sam već platio i problem ostaje?</li>
    <li data-sr="Da li je sideload zaista neophodan za moj slučaj?" data-en="Is sideload truly necessary in my case?">Da li je sideload zaista neophodan za moj slučaj?</li>
    <li data-sr="Da li postoji legalan način da dobijem istu funkciju?" data-en="Is there a legal way to get the same function?">Da li postoji legalan način da dobijem istu funkciju?</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: order of actions">Ako sumnja krene: redosled poteza</h2>
  <ol class="steps">
    <li data-sr="Zaustavite dalje uplate." data-en="Stop further payments.">Zaustavite dalje uplate.</li>
    <li data-sr="Isključite internet na uređaju ako je instaliran sumnjiv paket." data-en="Disconnect the device if a suspicious package is installed.">Isključite internet na uređaju ako je instaliran sumnjiv paket.</li>
    <li data-sr="Uklonite aplikacije iz istog izvora." data-en="Remove apps from the same source.">Uklonite aplikacije iz istog izvora.</li>
    <li data-sr="Prekinite daljinsku sesiju ako je otvorena." data-en="End any remote session if open.">Prekinite daljinsku sesiju ako je otvorena.</li>
    <li data-sr="Promenite lozinke sa drugog uređaja." data-en="Change passwords from another device.">Promenite lozinke sa drugog uređaja.</li>
    <li data-sr="Pokrenite antimalver sken i obavestite banku po potrebi." data-en="Run antimalware scan and notify the bank as needed.">Pokrenite antimalver sken i obavestite banku po potrebi.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
  <ul class="bullets">
    <li data-sr="Da li su instalirali APK van prodavnice?" data-en="Did they install an APK outside the store?">Da li su instalirali APK van prodavnice?</li>
    <li data-sr="Da li su plaćali verifikaciju?" data-en="Did they pay for verification?">Da li su plaćali verifikaciju?</li>
    <li data-sr="Da li su nekome davali daljinski pristup ekranu?" data-en="Did they give anyone remote screen access?">Da li su nekome davali daljinski pristup ekranu?</li>
    <li data-sr="Da li su instalirali više od jednog APK-a sa istog linka?" data-en="Did they install more than one APK from the same link?">Da li su instalirali više od jednog APK-a sa istog linka?</li>
  </ul>
  <p data-sr="Rečenice koje rade:" data-en="Sentences that help:">Rečenice koje rade:</p>
  <ul class="bullets">
    <li data-sr="Zvanična prodavnica ne naplaćuje posebnu verifikaciju preko Telegram linka." data-en="The official store does not charge separate verification via a Telegram link.">Zvanična prodavnica ne naplaćuje posebnu verifikaciju preko Telegram linka.</li>
    <li data-sr="Obriši aplikaciju i ne plaćaj drugu taksu — to je obrazac prevare." data-en="Delete the app and do not pay another fee — that is a scam pattern.">Obriši aplikaciju i ne plaćaj drugu taksu — to je obrazac prevare.</li>
    <li data-sr="Nikome ne daj AnyDesk zbog aplikacije sa interneta." data-en="Do not give AnyDesk access to anyone because of an app from the internet.">Nikome ne daj AnyDesk zbog aplikacije sa interneta.</li>
    <li data-sr="Ako si uneo karticu, pozovi banku i zamrzni je preventivno." data-en="If you entered a card, call the bank and freeze it preemptively.">Ako si uneo karticu, pozovi banku i zamrzni je preventivno.</li>
  </ul>
</section>


`
};
