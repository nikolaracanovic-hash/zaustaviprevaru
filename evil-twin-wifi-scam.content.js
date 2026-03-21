window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["evil-twin-wifi-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: šta je evil twin Wi‑Fi" data-en="Introduction: what evil twin Wi‑Fi is">Uvod: šta je evil twin Wi‑Fi</h2>
      <p data-sr="Evil twin je lažna bežična pristupna tačka koja glumi isti ili sličan naziv mreže koju meta već očekuje u tom prostoru. Uređaj se povezuje kao na običan javni Wi‑Fi, ali saobraćaj prolazi kroz opremu napadača. Posle konekcije često sledi captive portal ili druga stranica koja traži prijavu, lozinku e‑pošte ili instalaciju profila." data-en="An evil twin is a fake wireless access point that mimics the same or a similar network name the target already expects in that space. The device joins like ordinary public Wi‑Fi, but traffic passes through the attacker’s gear. After connection, a captive portal or another page often asks for login, email password, or profile installation.">Evil twin je lažna bežična pristupna tačka koja glumi isti ili sličan naziv mreže koju meta već očekuje u tom prostoru. Uređaj se povezuje kao na običan javni Wi‑Fi, ali saobraćaj prolazi kroz opremu napadača. Posle konekcije često sledi captive portal ili druga stranica koja traži prijavu, lozinku e‑pošte ili instalaciju profila.</p>
      <p data-sr="Cilj nije samo besplatan internet, već pozicija u lancu: presretanje, usmeravanje na lažne stranice ili prikupljanje kredencijala dok meta misli da rešava rutinski pristup. Isti obrazac važi u hotelu, kafiću, na aerodromu ili ispred poslovne zgrade kada više SSID-ova liči na zvaničnu mrežu." data-en="The goal is not just free internet, but position in the chain: interception, redirection to fake pages, or credential collection while the target thinks they are completing routine access. The same pattern appears in hotels, cafes, airports, or outside offices when several SSIDs resemble the official network.">Cilj nije samo besplatan internet, već pozicija u lancu: presretanje, usmeravanje na lažne stranice ili prikupljanje kredencijala dok meta misli da rešava rutinski pristup. Isti obrazac važi u hotelu, kafiću, na aerodromu ili ispred poslovne zgrade kada više SSID-ova liči na zvaničnu mrežu.</p>
      <div class="callout" data-sr="<strong>Model:</strong> očekivani javni kontekst → sličan SSID → konekcija → portal ili lažna stranica → prag (unos/instalacija) → krađa sesije ili naloga → moguće grananje u druge šeme." data-en="<strong>Model:</strong> expected public context → similar SSID → connection → portal or fake page → threshold (entry/install) → session or account theft → possible branching into other schemes."><strong>Model:</strong> očekivani javni kontekst → sličan SSID → konekcija → portal ili lažna stranica → prag (unos/instalacija) → krađa sesije ili naloga → moguće grananje u druge šeme.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> unos kredencijala na portalu, prihvatanje lošeg sertifikata ili instalacija konfiguracionog profila radi pristupa." data-en="<strong>Threshold:</strong> entering credentials on a portal, accepting a bad certificate, or installing a configuration profile for access."><strong>Prag:</strong> unos kredencijala na portalu, prihvatanje lošeg sertifikata ili instalacija konfiguracionog profila radi pristupa.</div>
    </section>

    <section class="card">
      <h2 data-sr="Zašto prolazi: navika i žurba" data-en="Why it works: habit and hurry">Zašto prolazi: navika i žurba</h2>
      <p data-sr="Ljudi su navikli da u javnom prostoru biraju najjači ili najpoznatiji SSID i brzo prihvate uslove konekcije. Mali ekran i žurba smanjuju proveru naziva mreže i upozorenja sistema. Napadač koristi istu rutinu: ponuda besplatnog ili gost Wi‑Fi-ja na mestu gde to meta očekuje." data-en="People are used to picking the strongest or best-known SSID in public and quickly accepting connection terms. Small screens and hurry reduce checking of the network name and system warnings. The attacker uses the same routine: offering free or guest Wi‑Fi where the target expects it.">Ljudi su navikli da u javnom prostoru biraju najjači ili najpoznatiji SSID i brzo prihvate uslove konekcije. Mali ekran i žurba smanjuju proveru naziva mreže i upozorenja sistema. Napadač koristi istu rutinu: ponuda besplatnog ili gost Wi‑Fi-ja na mestu gde to meta očekuje.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta pojačava rizik" data-en="What increases risk">Šta pojačava rizik</div>
          <ul class="bullets">
            <li data-sr="Dva ili više slična imena mreže u istom dometu zbunjuju izbor." data-en="Two or more similar network names in range confuse the choice.">Dva ili više slična imena mreže u istom dometu zbunjuju izbor.</li>
            <li data-sr="Portal traži prijavu istom rutinom kao pravi hotel ili aerodrom." data-en="The portal asks for login using the same rhythm as a real hotel or airport.">Portal traži prijavu istom rutinom kao pravi hotel ili aerodrom.</li>
            <li data-sr="Korisnik želi odmah e‑poštu ili aplikaciju i preskače čitanje upozorenja." data-en="The user wants email or apps immediately and skips reading warnings.">Korisnik želi odmah e‑poštu ili aplikaciju i preskače čitanje upozorenja.</li>
            <li data-sr="VPN ili zvanična aplikacija nije uključena pre osetljivih radnji." data-en="VPN or the official app is not engaged before sensitive actions.">VPN ili zvanična aplikacija nije uključena pre osetljivih radnji.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Operativni cilj" data-en="Operational goal">Operativni cilj</div>
          <ul class="bullets">
            <li data-sr="Dobiti kredencijale koje meta već koristi na drugim servisima." data-en="Obtain credentials the target already reuses on other services.">Dobiti kredencijale koje meta već koristi na drugim servisima.</li>
            <li data-sr="Uhvatiti sesije ili podatke koji se prenose nešifrovano gde je to moguće." data-en="Capture sessions or data sent without encryption where possible.">Uhvatiti sesije ili podatke koji se prenose nešifrovano gde je to moguće.</li>
            <li data-sr="Preusmeriti na klasični fišing gde domen i dalje kontroliše napadač." data-en="Redirect into classic phishing where the attacker still controls the domain.">Preusmeriti na klasični fišing gde domen i dalje kontroliše napadač.</li>
            <li data-sr="Instalacijom profila ili sertifikata produžiti kontrolu nad uređajem." data-en="Extend control over the device via profile or certificate installation.">Instalacijom profila ili sertifikata produžiti kontrolu nad uređajem.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching).">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Tok traje od minuta do sat vremena: izbor mreže, konekcija, portal, unos, zatim kasnije posledice po nalozima. Grananje često vodi u fišing ili preuzimanje naloga." data-en="The flow lasts from minutes to about an hour: network choice, connection, portal, entry, then later consequences for accounts. Branching often leads into phishing or account takeover.">Tok traje od minuta do sat vremena: izbor mreže, konekcija, portal, unos, zatim kasnije posledice po nalozima. Grananje često vodi u fišing ili preuzimanje naloga.</p>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Kontekst: gde meta traži Wi‑Fi" data-en="Phase 1 — Context: where the target seeks Wi‑Fi">Faza 1 — Kontekst: gde meta traži Wi‑Fi</h3>
        <p data-sr="Meta otvara listu mreža na mestu gde je javni pristup normalan: poslovni prostor, smeštaj, prevoz, događaj. Očekivanje je brza konekcija uz minimalan napor. Napadač bira ime koje zvuči kao zvanični gost ili besplatni kanal." data-en="The target opens the network list where public access is normal: offices, lodging, transit, or events. The expectation is quick connection with minimal effort. The attacker picks a name that sounds like official guest or free access.">Meta otvara listu mreža na mestu gde je javni pristup normalan: poslovni prostor, smeštaj, prevoz, događaj. Očekivanje je brza konekcija uz minimalan napor. Napadač bira ime koje zvuči kao zvanični gost ili besplatni kanal.</p>
        <ul class="bullets">
          <li data-sr="Više SSID-ova sa rečima free, guest, public ili imenom lokacije." data-en="Several SSIDs use words like free, guest, public, or the venue name.">Više SSID-ova sa rečima free, guest, public ili imenom lokacije.</li>
          <li data-sr="Jači signal lažne tačke privlači izbor pre nego što se pročita pun naziv." data-en="A stronger signal from the fake AP attracts choice before the full name is read.">Jači signal lažne tačke privlači izbor pre nego što se pročita pun naziv.</li>
          <li data-sr="Meta poredi samo prvi utisak, ne i ko stvarno upravlja pristupnom tačkom." data-en="The target compares first impression, not who actually runs the access point.">Meta poredi samo prvi utisak, ne i ko stvarno upravlja pristupnom tačkom.</li>
          <li data-sr="U grupi ili na putu žurba dodatno smanjuje proveru." data-en="Being in a group or traveling reduces verification further.">U grupi ili na putu žurba dodatno smanjuje proveru.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta odlučuje da se poveže na mrežu koja samo deluje poznato." data-en="<strong>Phase threshold:</strong> the target decides to join a network that merely feels familiar."><strong>Prag faze:</strong> meta odlučuje da se poveže na mrežu koja samo deluje poznato.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Konekcija na napadačev kanal" data-en="Phase 2 — Connecting to the attacker’s channel">Faza 2 — Konekcija na napadačev kanal</h3>
        <p data-sr="Uređaj se asocira sa lažnom pristupnom tačkom i dobija mrežni put preko napadača. Za korisnika izgleda kao uspešno povezivanje. U ovoj fazi već postoji mogućnost posmatranja nezaštićenog saobraćaja ili kasnijeg usmeravanja." data-en="The device associates with the fake access point and routes through the attacker. To the user it looks like a successful join. At this stage, observation of unprotected traffic or later redirection already becomes possible.">Uređaj se asocira sa lažnom pristupnom tačkom i dobija mrežni put preko napadača. Za korisnika izgleda kao uspešno povezivanje. U ovoj fazi već postoji mogućnost posmatranja nezaštićenog saobraćaja ili kasnijeg usmeravanja.</p>
        <ul class="bullets">
          <li data-sr="Status povezano daje lažan osećaj da je mreža bezbedna." data-en="A connected status gives a false sense that the network is safe.">Status povezano daje lažan osećaj da je mreža bezbedna.</li>
          <li data-sr="Sistem može prikazati upozorenje koje meta odmah odbije." data-en="The system may show a warning the target dismisses immediately.">Sistem može prikazati upozorenje koje meta odmah odbije.</li>
          <li data-sr="Automatsko povezivanje na sačuvane slične nazive povećava rizik ponavljanja." data-en="Auto-join to saved similar names increases repeat risk.">Automatsko povezivanje na sačuvane slične nazive povećava rizik ponavljanja.</li>
          <li data-sr="Napadač može usporiti ili blokirati internet dok meta ne otvori portal." data-en="The attacker may slow or block internet until the target opens the portal.">Napadač može usporiti ili blokirati internet dok meta ne otvori portal.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="quishing.html" data-sr="QR fišing" data-en="Quishing">QR fišing</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> uspostavljen je mrežni put kroz opremu koju meta nije identifikovala kao svoju." data-en="<strong>Phase threshold:</strong> traffic path is established through equipment the target did not verify as legitimate."><strong>Prag faze:</strong> uspostavljen je mrežni put kroz opremu koju meta nije identifikovala kao svoju.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Captive portal ili lažna stranica" data-en="Phase 3 — Captive portal or fake page">Faza 3 — Captive portal ili lažna stranica</h3>
        <p data-sr="Browser otvara stranicu koja traži prijavu, broj sobe, e‑poštu, socijalni nalog ili aktivaciju pristupa. Dizajn kopira očekivani brend prostora. Cilj je prebaciti rutinu prijavi se za Wi‑Fi u unos osetljivih podataka." data-en="The browser opens a page asking for room number, email, social login, or activation of access. Design copies the expected venue brand. The goal is to turn the sign in for Wi‑Fi routine into entering sensitive data.">Browser otvara stranicu koja traži prijavu, broj sobe, e‑poštu, socijalni nalog ili aktivaciju pristupa. Dizajn kopira očekivani brend prostora. Cilj je prebaciti rutinu prijavi se za Wi‑Fi u unos osetljivih podataka.</p>
        <ul class="bullets">
          <li data-sr="Polja za lozinku e‑pošte ili nalog izgledaju kao standardna forma." data-en="Fields for email password or account look like a standard form.">Polja za lozinku e‑pošte ili nalog izgledaju kao standardna forma.</li>
          <li data-sr="Domen u adresnoj traci odstupa od zvaničnog servisa, ali je sitno ili skriveno." data-en="The domain in the address bar diverges from the official service, subtly or hidden.">Domen u adresnoj traci odstupa od zvaničnog servisa, ali je sitno ili skriveno.</li>
          <li data-sr="Stranica traži instalaciju profila, sertifikata ili bezbednosnog koraka." data-en="The page requests profile installation, certificates, or a security step.">Stranica traži instalaciju profila, sertifikata ili bezbednosnog koraka.</li>
          <li data-sr="Hitnost se uvodi kao istek sesije ili ponovna autentikacija." data-en="Urgency appears as session expired or re-authentication.">Hitnost se uvodi kao istek sesije ili ponovna autentikacija.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta počinje da unosi podatke u formu koju nije uporedila sa zvaničnim kanalom lokacije." data-en="<strong>Phase threshold:</strong> the target starts entering data in a form not compared with the venue’s official channel."><strong>Prag faze:</strong> meta počinje da unosi podatke u formu koju nije uporedila sa zvaničnim kanalom lokacije.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Prag: unos, potvrda, profil" data-en="Phase 4 — Threshold: entry, approval, profile">Faza 4 — Prag: unos, potvrda, profil</h3>
        <p data-sr="Prag je trenutak kada meta predaje lozinku, odobri loš sertifikat ili instalira konfiguraciju sa mreže koju ne poznaje. Posle toga napadač može ponoviti prijavu na druge servise ili zadržati kontrolu nad uređajem kroz profil." data-en="The threshold is when the target hands over a password, approves a bad certificate, or installs configuration from an unknown network. After that, the attacker can replay logins to other services or keep device control via a profile.">Prag je trenutak kada meta predaje lozinku, odobri loš sertifikat ili instalira konfiguraciju sa mreže koju ne poznaje. Posle toga napadač može ponoviti prijavu na druge servise ili zadržati kontrolu nad uređajem kroz profil.</p>
        <ul class="bullets">
          <li data-sr="Ista lozinka na portalu i na mejlu otvara lanac preuzimanja naloga." data-en="The same password on the portal and on mail opens an account-takeover chain.">Ista lozinka na portalu i na mejlu otvara lanac preuzimanja naloga.</li>
          <li data-sr="Dvofaktorski kod unet na lažnoj stranici služi napadaču kao autorizacija." data-en="A 2FA code entered on a fake page authorizes the attacker.">Dvofaktorski kod unet na lažnoj stranici služi napadaču kao autorizacija.</li>
          <li data-sr="Profil na telefonu može trajno menjati DNS ili proxy podešavanja." data-en="A phone profile can permanently alter DNS or proxy settings.">Profil na telefonu može trajno menjati DNS ili proxy podešavanja.</li>
          <li data-sr="Kartica tražena kao depozit za pristup završava kao naplata." data-en="A card requested as an access deposit ends as a charge.">Kartica tražena kao depozit za pristup završava kao naplata.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
            <li><a href="otp-interception.html" data-sr="Presretanje OTP" data-en="OTP interception">Presretanje OTP</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> osetljivi podatak ili dozvola izađe iz uređaja preko mreže koju meta nije verifikovala." data-en="<strong>Phase threshold:</strong> sensitive data or permission leaves the device over a network the target did not verify."><strong>Prag faze:</strong> osetljivi podatak ili dozvola izađe iz uređaja preko mreže koju meta nije verifikovala.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Posledice po nalozima i uređaju" data-en="Phase 5 — Consequences for accounts and device">Faza 5 — Posledice po nalozima i uređaju</h3>
        <p data-sr="Posle praga sledi tiha faza: promene u nalozima, nepoznate sesije, poruke kontaktima ili nove transakcije. Meta često ne veže incident sa Wi‑Fi konekcijom jer je prošlo vreme i mesto." data-en="After the threshold comes a quiet phase: account changes, unknown sessions, messages to contacts, or new transactions. The target often does not tie the incident to the Wi‑Fi join because time and place have passed.">Posle praga sledi tiha faza: promene u nalozima, nepoznate sesije, poruke kontaktima ili nove transakcije. Meta često ne veže incident sa Wi‑Fi konekcijom jer je prošlo vreme i mesto.</p>
        <ul class="bullets">
          <li data-sr="Izmene podataka za oporavak naloga blokiraju legitiman povratak." data-en="Recovery details are changed, blocking legitimate return.">Izmene podataka za oporavak naloga blokiraju legitiman povratak.</li>
          <li data-sr="Lažne poruke sa ukradenog naloga šire napad na kontakte." data-en="Fake messages from a stolen account spread the attack to contacts.">Lažne poruke sa ukradenog naloga šire napad na kontakte.</li>
          <li data-sr="Uređaj i dalje koristi podešavanja uvedena kroz lažni profil." data-en="The device still uses settings introduced via the fake profile.">Uređaj i dalje koristi podešavanja uvedena kroz lažni profil.</li>
          <li data-sr="Finansijske aplikacije mogu biti ciljane posle što su kredencijali potvrđeni." data-en="Financial apps may be targeted after credentials are confirmed.">Finansijske aplikacije mogu biti ciljane posle što su kredencijali potvrđeni.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> šteta postaje vidljiva kroz aktivnost na nalozima, a ne kroz sam Wi‑Fi ekran." data-en="<strong>Phase threshold:</strong> harm becomes visible through account activity, not the Wi‑Fi screen itself."><strong>Prag faze:</strong> šteta postaje vidljiva kroz aktivnost na nalozima, a ne kroz sam Wi‑Fi ekran.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Eskalacija: poziv, podrška, novi link" data-en="Phase 6 — Escalation: call, support, new link">Faza 6 — Eskalacija: poziv, podrška, novi link</h3>
        <p data-sr="Kad meta primeti problem, može stići drugi kanal: poziv koji glumi IT ili banku, poruka sa novim linkom, ili provera koja traži još jedan unos. Funkcija je zadržati kontrolu dok se incident ne prijavi pravim kanalom." data-en="When the target notices an issue, a second channel may appear: a call posing as IT or bank, a message with a new link, or a check demanding another entry. The function is to keep control until the incident is reported through proper channels.">Kad meta primeti problem, može stići drugi kanal: poziv koji glumi IT ili banku, poruka sa novim linkom, ili provera koja traži još jedan unos. Funkcija je zadržati kontrolu dok se incident ne prijavi pravim kanalom.</p>
        <ul class="bullets">
          <li data-sr="Lažni IT koristi već postojeću paniku oko hakovanog naloga." data-en="Fake IT exploits existing panic about a hacked account.">Lažni IT koristi već postojeću paniku oko hakovanog naloga.</li>
          <li data-sr="Novi link vodi na istu ili srodnu fišing infrastrukturu." data-en="A new link leads to the same or related phishing infrastructure.">Novi link vodi na istu ili srodnu fišing infrastrukturu.</li>
          <li data-sr="Meta pokušava brzo da reši umesto da prvo prekine pristup i promeni lozinke." data-en="The target tries to fix quickly instead of first cutting access and changing passwords.">Meta pokušava brzo da reši umesto da prvo prekine pristup i promeni lozinke.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="fake-call-scam.html" data-sr="Lažni pozivi" data-en="Fake calls">Lažni pozivi</a></li>
            <li><a href="tech-support-scam.html" data-sr="Lažna tehnička podrška" data-en="Tech support scam">Lažna tehnička podrška</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta prihvata novi kanal umesto zvaničnog kontakta banke ili poslodavca." data-en="<strong>Phase threshold:</strong> the target accepts a new channel instead of official bank or employer contact."><strong>Prag faze:</strong> meta prihvata novi kanal umesto zvaničnog kontakta banke ili poslodavca.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Dva ili više gotovo identična imena Wi‑Fi mreže u istom prostoru." data-en="Two or more almost identical Wi‑Fi network names in the same space.">Dva ili više gotovo identična imena Wi‑Fi mreže u istom prostoru.</li>
        <li data-sr="Portal traži lozinku e‑pošte ili pun nalog banke za besplatan internet." data-en="The portal asks for your email password or full bank login for free internet.">Portal traži lozinku e‑pošte ili pun nalog banke za besplatan internet.</li>
        <li data-sr="Browser upozorava na sertifikat ili nepouzdanu vezu, a meta je ignoriše." data-en="The browser warns about a certificate or untrusted connection and the target ignores it.">Browser upozorava na sertifikat ili nepouzdanu vezu, a meta je ignoriše.</li>
        <li data-sr="Za pristup se traži instalacija profila ili root sertifikata." data-en="Profile installation or a root certificate is required for access.">Za pristup se traži instalacija profila ili root sertifikata.</li>
        <li data-sr="Domen na portalu ne odgovara zvaničnom sajtu lokacije koju osoblje potvrđuje." data-en="The portal domain does not match the venue’s official site that staff can confirm.">Domen na portalu ne odgovara zvaničnom sajtu lokacije koju osoblje potvrđuje.</li>
        <li data-sr="Hitni rokovi za registraciju pre nego što internet uopšte radi." data-en="Urgent deadlines to register before internet works at all.">Hitni rokovi za registraciju pre nego što internet uopšte radi.</li>
        <li data-sr="Mreža nudi brži pristup od poznate zvanične mreže uz nepoznat SSID." data-en="A network offers faster access than the known official one under an unfamiliar SSID.">Mreža nudi brži pristup od poznate zvanične mreže uz nepoznat SSID.</li>
        <li data-sr="Posle prijave stiže SMS ili mejl sa novim linkom za potvrdu." data-en="After sign-in, an SMS or email arrives with a new confirmation link.">Posle prijave stiže SMS ili mejl sa novim linkom za potvrdu.</li>
        <li data-sr="Ista forma traži više podataka nego što običan gost Wi‑Fi traži." data-en="The same form asks for more data than typical guest Wi‑Fi needs.">Ista forma traži više podataka nego što običan gost Wi‑Fi traži.</li>
        <li data-sr="Uređaj se ponaša drugačije samo kada je na toj mreži (preusmeravanja, iskačući prozori)." data-en="The device behaves differently only on that network (redirects, pop-ups).">Uređaj se ponaša drugačije samo kada je na toj mreži (preusmeravanja, iskačući prozori).</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <ol class="steps">
        <li data-sr="Pitaj osoblje ili IT za tačan naziv zvanične gost mreže pre povezivanja." data-en="Ask staff or IT for the exact official guest network name before connecting.">Pitaj osoblje ili IT za tačan naziv zvanične gost mreže pre povezivanja.</li>
        <li data-sr="Uporedi SSID sa informacijom na recepciji, ugovoru ili internom uputstvu, ne samo sa listom na telefonu." data-en="Compare the SSID with reception info, contract, or internal instructions, not only the phone list.">Uporedi SSID sa informacijom na recepciji, ugovoru ili internom uputstvu, ne samo sa listom na telefonu.</li>
        <li data-sr="Pročitaj pun URL portala i uporedi domen sa zvaničnim sajtom servisa." data-en="Read the full portal URL and compare the domain with the service’s official site.">Pročitaj pun URL portala i uporedi domen sa zvaničnim sajtom servisa.</li>
        <li data-sr="Ne unositi lozinku e‑pošte ili banke na portalu za javni Wi‑Fi." data-en="Do not enter email or bank passwords on a public Wi‑Fi portal.">Ne unositi lozinku e‑pošte ili banke na portalu za javni Wi‑Fi.</li>
        <li data-sr="Koristiti mobilne podatke ili pouzdan VPN za osetljive prijave kada je to moguće." data-en="Use mobile data or a trusted VPN for sensitive logins when possible.">Koristiti mobilne podatke ili pouzdan VPN za osetljive prijave kada je to moguće.</li>
        <li data-sr="Isključiti automatsko povezivanje na nepoznate mreže u podešavanjima uređaja." data-en="Turn off auto-join for unknown networks in device settings.">Isključiti automatsko povezivanje na nepoznate mreže u podešavanjima uređaja.</li>
        <li data-sr="Posle javnog Wi‑Fi-ja proveri aktivne sesije na bitnim nalozima." data-en="After public Wi‑Fi, review active sessions on important accounts.">Posle javnog Wi‑Fi-ja proveri aktivne sesije na bitnim nalozima.</li>
        <li data-sr="Odbiti instalaciju profila ili sertifikata koji dolazi sa nepoznate mreže." data-en="Refuse profile or certificate installation offered from an unknown network.">Odbiti instalaciju profila ili sertifikata koji dolazi sa nepoznate mreže.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja pre nego što se povežeš" data-en="Checklist: 12 questions before you connect">Checklista: 12 pitanja pre nego što se povežeš</h2>
      <ul class="bullets">
        <li data-sr="Da li mi je osoblje ili IT potvrdilo tačan naziv mreže?" data-en="Did staff or IT confirm the exact network name?">Da li mi je osoblje ili IT potvrdilo tačan naziv mreže?</li>
        <li data-sr="Da li postoji samo jedna logična zvanična opcija ili više sličnih?" data-en="Is there only one logical official option or several similar ones?">Da li postoji samo jedna logična zvanična opcija ili više sličnih?</li>
        <li data-sr="Da li portal traži podatke koje običan gost Wi‑Fi ne bi tražio?" data-en="Is the portal asking for data normal guest Wi‑Fi would not need?">Da li portal traži podatke koje običan gost Wi‑Fi ne bi tražio?</li>
        <li data-sr="Da li URL portala odgovara brendu koji očekujem?" data-en="Does the portal URL match the brand I expect?">Da li URL portala odgovara brendu koji očekujem?</li>
        <li data-sr="Da li browser prikazuje upozorenje o sertifikatu?" data-en="Does the browser show a certificate warning?">Da li browser prikazuje upozorenje o sertifikatu?</li>
        <li data-sr="Da li mogu osetljivu prijavu odložiti dok ne koristim mobilne podatke?" data-en="Can I postpone sensitive login until I use mobile data?">Da li mogu osetljivu prijavu odložiti dok ne koristim mobilne podatke?</li>
        <li data-sr="Da li mi hitnost na portalu deluje veštački?" data-en="Does the portal urgency feel artificial?">Da li mi hitnost na portalu deluje veštački?</li>
        <li data-sr="Da li me sistem pita da instaliram profil ili sertifikat?" data-en="Is the system asking me to install a profile or certificate?">Da li me sistem pita da instaliram profil ili sertifikat?</li>
        <li data-sr="Da li je ovo ista mreža koju sam koristio prošli put na ovoj adresi?" data-en="Is this the same network I used last time at this address?">Da li je ovo ista mreža koju sam koristio prošli put na ovoj adresi?</li>
        <li data-sr="Da li bih uneo iste podatke da sam kod kuće na svojoj mreži?" data-en="Would I enter the same data at home on my own network?">Da li bih uneo iste podatke da sam kod kuće na svojoj mreži?</li>
        <li data-sr="Da li posle prijave očekujem SMS ili mejl sa linkom i da li je to uobičajeno ovde?" data-en="After sign-in, should I expect an SMS or email with a link, and is that normal here?">Da li posle prijave očekujem SMS ili mejl sa linkom i da li je to uobičajeno ovde?</li>
        <li data-sr="Da li mogu prvo pozvati banku ili poslodavca pre nego što potvrdim bilo šta na portalu?" data-en="Can I call the bank or employer first before confirming anything on the portal?">Da li mogu prvo pozvati banku ili poslodavca pre nego što potvrdim bilo šta na portalu?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Odmah prekini Wi‑Fi konekciju na tu mrežu." data-en="Immediately disconnect Wi‑Fi from that network.">Odmah prekini Wi‑Fi konekciju na tu mrežu.</li>
        <li data-sr="Ne unosuj dodatne podatke i zatvori portal." data-en="Do not enter more data and close the portal.">Ne unosuj dodatne podatke i zatvori portal.</li>
        <li data-sr="Ako si uneo lozinku, promeni je kroz zvaničan kanal sa čistog mrežnog puta." data-en="If you entered a password, change it through an official channel on a clean network path.">Ako si uneo lozinku, promeni je kroz zvaničan kanal sa čistog mrežnog puta.</li>
        <li data-sr="Proveri i ukloni instalirane profile ili sertifikate ako si ih dodao." data-en="Review and remove installed profiles or certificates if you added them.">Proveri i ukloni instalirane profile ili sertifikate ako si ih dodao.</li>
        <li data-sr="Prijavi incident internom bezbednosnoj službi ili lokaciji i sačuvaj snimak ekrana portala." data-en="Report to internal security or the venue and save a screenshot of the portal.">Prijavi incident internom bezbednosnoj službi ili lokaciji i sačuvaj snimak ekrana portala.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Koji tačno SSID si izabrao i da li si ga proverio sa osobljem?" data-en="Which SSID did you pick and did you verify it with staff?">Koji tačno SSID si izabrao i da li si ga proverio sa osobljem?</li>
            <li data-sr="Da li si na portalu uneo lozinku mejla, banke ili druge prijave?" data-en="Did you enter email, bank, or other login passwords on the portal?">Da li si na portalu uneo lozinku mejla, banke ili druge prijave?</li>
            <li data-sr="Da li si prihvatio sertifikat ili instalirao profil sa mreže?" data-en="Did you accept a certificate or install a profile from the network?">Da li si prihvatio sertifikat ili instalirao profil sa mreže?</li>
            <li data-sr="Kada su počele čudne poruke ili transakcije u odnosu na konekciju?" data-en="When did strange messages or transactions start relative to the connection?">Kada su počele čudne poruke ili transakcije u odnosu na konekciju?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Prvo ćemo isključiti tu mrežu i ne unositi ništa dok ne proverimo zvaničan SSID." data-en="First we disconnect from that network and enter nothing until we verify the official SSID.">Prvo ćemo isključiti tu mrežu i ne unositi ništa dok ne proverimo zvaničan SSID.</li>
            <li data-sr="Portal za Wi‑Fi ne sme tražiti istu lozinku kao mejl ili banka." data-en="A Wi‑Fi portal must not ask for the same password as email or banking.">Portal za Wi‑Fi ne sme tražiti istu lozinku kao mejl ili banka.</li>
            <li data-sr="Menjamo lozinke sa mobilnih podataka ili sa pouzdane mreže, ne sa sumnjivog Wi‑Fi-ja." data-en="We change passwords over mobile data or a trusted network, not suspicious Wi‑Fi.">Menjamo lozinke sa mobilnih podataka ili sa pouzdane mreže, ne sa sumnjivog Wi‑Fi-ja.</li>
            <li data-sr="Sačuvaćemo dokaz ekrana i javit ćemo odgovornom licu pre nego što nastavimo rad." data-en="We will save screen evidence and notify the responsible party before continuing work.">Sačuvaćemo dokaz ekrana i javit ćemo odgovornom licu pre nego što nastavimo rad.</li>
          </ul>
        </div>
      </div>
    </section>
`
};
