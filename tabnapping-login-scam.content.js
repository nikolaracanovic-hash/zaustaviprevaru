if (!window.SCAM_CONTENT) window.SCAM_CONTENT = {};
window.SCAM_CONTENT["tabnapping-login-scam"] = {
  raw_html: `
<section class="content-section">
  <h2 data-sr="Uvod: kako radi tabnapping prijava" data-en="Introduction: how tabnapping login works">Uvod: kako radi tabnapping prijava</h2>
  <p data-sr="Otvorite legitimnu stranicu u jednom tabu i pređete na drugi posao; u međuvremenu skripta ili kompromitovan sadržaj u tom tabu zamenjuje sadržaj lažnom stranicom za prijavu koja liči na banku, mejl ili društvenu mrežu. Kad se vratite, vidite poznat izgled i unosite podatke, ali domen u adresnoj traci nije onaj koji ste očekivali." data-en="You open a legitimate page in one tab and switch to another task; meanwhile a script or compromised content in that tab replaces the view with a fake login that resembles a bank, email, or social site. When you return you see a familiar layout and enter data, but the address bar domain is not what you expected.">Otvorite legitimnu stranicu u jednom tabu i pređete na drugi posao; u međuvremenu skripta ili kompromitovan sadržaj u tom tabu zamenjuje sadržaj lažnom stranicom za prijavu koja liči na banku, mejl ili društvenu mrežu. Kad se vratite, vidite poznat izgled i unosite podatke, ali domen u adresnoj traci nije onaj koji ste očekivali.</p>
  <p data-sr="Napadač koristi rutinu i žurbu: korisnik ne čita URL ponovo jer veruje da je isti tab koji je ostao otvoren." data-en="The attacker relies on routine and hurry: the user does not re-read the URL because they believe it is the same tab they left open.">Napadač koristi rutinu i žurbu: korisnik ne čita URL ponovo jer veruje da je isti tab koji je ostao otvoren.</p>
  <div class="callout">
    <strong data-sr="Prag:" data-en="Threshold:">Prag:</strong>
    <span data-sr="Unos lozinke ili 2FA koda na stranici bez sveže provere celog domena u adresnoj traci." data-en="Entering a password or 2FA code on a page without a fresh check of the full domain in the address bar.">Unos lozinke ili 2FA koda na stranici bez sveže provere celog domena u adresnoj traci.</span>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Model" data-en="Model">Model</h2>
  <div class="phase">
    <div class="label" data-sr="Lanac" data-en="Chain">Lanac</div>
    <p data-sr="Otvoren tab na sajt → tab u pozadini → zamena HTML-a ili redirekcija → lažna prijava → unos kredencijala → napadač preuzima nalog." data-en="Open site tab → background tab → HTML swap or redirect → fake login → credential entry → attacker takes the account.">Otvoren tab na sajt → tab u pozadini → zamena HTML-a ili redirekcija → lažna prijava → unos kredencijala → napadač preuzima nalog.</p>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Kako generalno radi: mehanika" data-en="How it works: mechanics">Kako generalno radi: mehanika</h2>
  <div class="grid-2">
    <div class="phase">
      <div class="label" data-sr="Šta pomaže napadaču" data-en="What helps the attacker">Šta pomaže napadaču</div>
      <ul class="bullets">
        <li data-sr="Korisnik često drži više tabova i brzo prebacuje pažnju bez ponovnog čitanja URL-a." data-en="Users often keep many tabs and switch attention without re-reading the URL.">Korisnik često drži više tabova i brzo prebacuje pažnju bez ponovnog čitanja URL-a.</li>
        <li data-sr="Favicon i boje stranice mogu ostati slični dok se domen promeni u pozadini." data-en="Favicon and page colors can stay similar while the domain changes in the background.">Favicon i boje stranice mogu ostati slični dok se domen promeni u pozadini.</li>
        <li data-sr="Mobilni pregledač često skraćuje prikaz adrese pa je provera teža." data-en="Mobile browsers often shorten the address display so verification is harder.">Mobilni pregledač često skraćuje prikaz adrese pa je provera teža.</li>
        <li data-sr="Lažna forma kopira poznate tekstove tipa Sesija je istekla, prijavite se ponovo." data-en="The fake form copies familiar text like Session expired, sign in again.">Lažna forma kopira poznate tekstove tipa Sesija je istekla, prijavite se ponovo.</li>
      </ul>
    </div>
    <div class="phase">
      <div class="label" data-sr="Gde se tab uvodi" data-en="Where the tab is introduced">Gde se tab uvodi</div>
      <ul class="bullets">
        <li data-sr="Klik na oglas ili link sa kompromitovanog ili lažnog sajta otvara tab koji kasnije menja sadržaj." data-en="Clicking an ad or link from a compromised or fake site opens a tab that later changes content.">Klik na oglas ili link sa kompromitovanog ili lažnog sajta otvara tab koji kasnije menja sadržaj.</li>
        <li data-sr="Zlonamerna ekstenzija može menjati sadržaj tabova koje kontroliše." data-en="A malicious extension can alter the content of tabs it controls.">Zlonamerna ekstenzija može menjati sadržaj tabova koje kontroliše.</li>
        <li data-sr="JavaScript na stranici može odlagati zamenu dok korisnik ne ode na drugi tab." data-en="JavaScript on the page can delay the swap until the user switches to another tab.">JavaScript na stranici može odlagati zamenu dok korisnik ne ode na drugi tab.</li>
        <li data-sr="Kombinacija sa lažnim obaveštenjem u naslovu taba ((1) hitno!) vuče pažnju nazad na lažnu stranu." data-en="Combined with a fake tab title notification ((1) urgent!) it pulls attention back to the fake page.">Kombinacija sa lažnim obaveštenjem u naslovu taba ((1) hitno!) vuče pažnju nazad na lažnu stranu.</li>
      </ul>
    </div>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching)">Hronološki tok (faze + grananja)</h2>

  <article class="phase">
    <h3 data-sr="Faza 1 — Otvaranje taba sa rizičnog izvora" data-en="Phase 1 — Opening a tab from a risky source">Faza 1 — Otvaranje taba sa rizičnog izvora</h3>
    <p data-sr="Korisnik otvara novi tab preko pretrage, oglasa ili poruke; stranica izgleda uredno ili pola-učitano, pa ostaje otvorena dok korisnik radi drugo." data-en="The user opens a new tab from search, an ad, or a message; the page looks tidy or half-loaded and stays open while the user does something else.">Korisnik otvara novi tab preko pretrage, oglasa ili poruke; stranica izgleda uredno ili pola-učitano, pa ostaje otvorena dok korisnik radi drugo.</p>
    <ul class="bullets">
      <li data-sr="Link dolazi iz rezultata pretrage koji nije prvi zvanični rezultat." data-en="The link comes from a search result that is not the top official result.">Link dolazi iz rezultata pretrage koji nije prvi zvanični rezultat.</li>
      <li data-sr="Poruka ili post sadrži prečicu ka članku ili dokumentu koji otvara sajt pun reklama." data-en="A message or post contains a shortcut to an article or document that opens an ad-heavy site.">Poruka ili post sadrži prečicu ka članku ili dokumentu koji otvara sajt pun reklama.</li>
      <li data-sr="Tab se otvara u pozadini dok korisnik ostaje na mejlu ili radnom dokumentu." data-en="The tab opens in the background while the user stays on email or a work document.">Tab se otvara u pozadini dok korisnik ostaje na mejlu ili radnom dokumentu.</li>
      <li data-sr="Korisnik ne beleži tačan domen jer mu je cilj samo kasnije pročitati." data-en="The user does not note the exact domain because they plan to read later.">Korisnik ne beleži tačan domen jer mu je cilj samo kasnije pročitati.</li>
    </ul>
    <div class="callout"><strong data-sr="Tab ostaje otvoren dok korisnik koristi druge tabove najmanje nekoliko minuta.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Tab ostaje otvoren dok korisnik koristi druge tabove najmanje nekoliko minuta." data-en="The tab stays open while the user works in other tabs for at least a few minutes.">Tab ostaje otvoren dok korisnik koristi druge tabove najmanje nekoliko minuta.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 2 — Čekanje u pozadini i priprema zamene" data-en="Phase 2 — Background wait and swap setup">Faza 2 — Čekanje u pozadini i priprema zamene</h3>
    <p data-sr="Skripta prati da li je tab aktivan; kad nije, učitava lažnu stranicu za prijavu ili radi redirekciju ka fišing domenu." data-en="A script tracks whether the tab is active; when it is not, it loads a fake login or redirects to a phishing domain.">Skripta prati da li je tab aktivan; kad nije, učitava lažnu stranicu za prijavu ili radi redirekciju ka fišing domenu.</p>
    <ul class="bullets">
      <li data-sr="Naslov taba se menja da podstakne klik ili pažnju." data-en="The tab title changes to prompt a click or attention.">Naslov taba se menja da podstakne klik ili pažnju.</li>
      <li data-sr="Zamena može biti potpuna navigacija ka drugom domenu ili samo vizuelna kopija u istom okviru." data-en="The swap can be full navigation to another domain or only a visual copy in the same frame.">Zamena može biti potpuna navigacija ka drugom domenu ili samo vizuelna kopija u istom okviru.</li>
      <li data-sr="Korisnik ne vidi prelaz jer se dešava dok je fokus na drugom tabu." data-en="The user does not see the transition because it happens while focus is on another tab.">Korisnik ne vidi prelaz jer se dešava dok je fokus na drugom tabu.</li>
      <li data-sr="HTTPS katanac u adresnoj traci može i dalje postojati i na lažnom domenu." data-en="The HTTPS lock can still appear on the fake domain as well.">HTTPS katanac u adresnoj traci može i dalje postojati i na lažnom domenu.</li>
    </ul>
    <div class="callout"><strong data-sr="Korisnik vidi stranicu za prijavu kada se vrati, bez sećanja da je ručno otvorio taj domen.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Korisnik vidi stranicu za prijavu kada se vrati, bez sećanja da je ručno otvorio taj domen." data-en="The user sees a login page when they return, without remembering they opened that domain manually.">Korisnik vidi stranicu za prijavu kada se vrati, bez sećanja da je ručno otvorio taj domen.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching in this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="browser-extension-scam.html" data-sr="Zlonamerna ekstenzija može ubrzati ili proširiti zamenu sadržaja." data-en="A malicious extension can speed up or broaden content swapping.">Zlonamerna ekstenzija može ubrzati ili proširiti zamenu sadržaja.</a></li>
        <li><a href="phishing.html" data-sr="Klasičan fišing istog izgleda, ali dolazi direktno iz poruke." data-en="Classic phishing of the same look, but arriving directly from a message.">Klasičan fišing istog izgleda, ali dolazi direktno iz poruke.</a></li>
      </ul>
    </div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 3 — Povratak pažnje i lažna rutina" data-en="Phase 3 — Attention returns and fake routine">Faza 3 — Povratak pažnje i lažna rutina</h3>
    <p data-sr="Korisnik klikne na tab i ponaša se kao da nastavlja legitimnu sesiju: unosi mejl ili korisničko ime jer veruje da je isti servis." data-en="The user clicks the tab and behaves as if continuing a legitimate session: they enter email or username believing it is the same service.">Korisnik klikne na tab i ponaša se kao da nastavlja legitimnu sesiju: unosi mejl ili korisničko ime jer veruje da je isti servis.</p>
    <ul class="bullets">
      <li data-sr="Poruka na stranici tvrdi da je sesija istekla ili da je potrebna hitna potvrda." data-en="On-page text claims the session expired or urgent confirmation is needed.">Poruka na stranici tvrdi da je sesija istekla ili da je potrebna hitna potvrda.</li>
      <li data-sr="Dizajn kopira logo i raspored polja poznatog servisa." data-en="The design copies the logo and field layout of a known service.">Dizajn kopira logo i raspored polja poznatog servisa.</li>
      <li data-sr="Korisnik preskače proveru domena jer je mentalni model nastavak rada." data-en="The user skips domain checks because their mental model is continue working.">Korisnik preskače proveru domena jer je mentalni model nastavak rada.</li>
      <li data-sr="Mobilni prikaz sakriva ceo host name u adresnoj traci." data-en="Mobile view hides the full host name in the address bar.">Mobilni prikaz sakriva ceo host name u adresnoj traci.</li>
    </ul>
    <div class="callout"><strong data-sr="Korisnik počinje unos identifikatora naloga na stranici.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Korisnik počinje unos identifikatora naloga na stranici." data-en="The user begins entering the account identifier on the page.">Korisnik počinje unos identifikatora naloga na stranici.</span></div>
  </article>

  <article class="phase warn">
    <h3 data-sr="Faza 4 — Unos lozinke i eventualno 2FA" data-en="Phase 4 — Password entry and possibly 2FA">Faza 4 — Unos lozinke i eventualno 2FA</h3>
    <p data-sr="Kredencijali se šalju napadaču; ako postoji 2FA, lažna stranica može tražiti i kod ili preusmeriti na lažni app approval." data-en="Credentials go to the attacker; if 2FA exists, the fake page may also request a code or push a fake app approval.">Kredencijali se šalju napadaču; ako postoji 2FA, lažna stranica može tražiti i kod ili preusmeriti na lažni app approval.</p>
    <ul class="bullets">
      <li data-sr="Napadač odmah testira prijavu na pravom servisu dok je kod još aktivan." data-en="The attacker immediately tries sign-in on the real service while the code is still valid.">Napadač odmah testira prijavu na pravom servisu dok je kod još aktivan.</li>
      <li data-sr="Može se tražiti i rezervni broj telefona ili odgovor na bezbednosno pitanje." data-en="A backup phone number or security question answer may also be requested.">Može se tražiti i rezervni broj telefona ili odgovor na bezbednosno pitanje.</li>
      <li data-sr="Stranica može prikazati lažnu grešku da bi korisnik ponovio unos i ispravio lozinku." data-en="The page may show a fake error so the user re-enters and corrects the password.">Stranica može prikazati lažnu grešku da bi korisnik ponovio unos i ispravio lozinku.</li>
      <li data-sr="Posle uspeha korisnik često biva prebačen na pravi sajt da ne primeti anomaliju." data-en="After success the user is often sent to the real site so they do not notice the anomaly.">Posle uspeha korisnik često biva prebačen na pravi sajt da ne primeti anomaliju.</li>
    </ul>
    <div class="callout"><strong data-sr="Lozinka ili 2FA kod je poslat na server koji kontroliše napadač.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Lozinka ili 2FA kod je poslat na server koji kontroliše napadač." data-en="The password or 2FA code is sent to a server the attacker controls.">Lozinka ili 2FA kod je poslat na server koji kontroliše napadač.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching in this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="account-takeover.html" data-sr="Preuzimanje naloga posle ukradenih kredencijala." data-en="Account takeover after stolen credentials.">Preuzimanje naloga posle ukradenih kredencijala.</a></li>
        <li><a href="mfa-fatigue-scam.html" data-sr="Pritisak na odobrenje u aplikaciji ako napadač već ima lozinku." data-en="Push approval pressure if the attacker already has the password.">Pritisak na odobrenje u aplikaciji ako napadač već ima lozinku.</a></li>
      </ul>
    </div>
  </article>

  <article class="phase bad">
    <h3 data-sr="Faza 5 — Zloupotreba naloga" data-en="Phase 5 — Account abuse">Faza 5 — Zloupotreba naloga</h3>
    <p data-sr="Napadač menja lozinku, dodaje uređaje za oporavak, šalje poruke kontaktima ili pravi uplate ako je nalog vezan za novac." data-en="The attacker changes the password, adds recovery devices, messages contacts, or makes payments if the account ties to money.">Napadač menja lozinku, dodaje uređaje za oporavak, šalje poruke kontaktima ili pravi uplate ako je nalog vezan za novac.</p>
    <ul class="bullets">
      <li data-sr="Mejl se koristi za reset lozinki drugih servisa." data-en="Email is used to reset passwords on other services.">Mejl se koristi za reset lozinki drugih servisa.</li>
      <li data-sr="Poslovni nalozi vode ka lažnim uplatama ili krađi fajlova." data-en="Work accounts lead to fake payments or file theft.">Poslovni nalozi vode ka lažnim uplatama ili krađi fajlova.</li>
      <li data-sr="Korisnik prima upozorenja sa pravog servisa tek kada je promena već urađena." data-en="The user receives warnings from the real service only after changes are already done.">Korisnik prima upozorenja sa pravog servisa tek kada je promena već urađena.</li>
      <li data-sr="Sesije u pregledaču mogu ostati aktivne na strani napadača ako su ukradeni tokeni." data-en="Browser sessions can stay active on the attacker’s side if tokens were stolen.">Sesije u pregledaču mogu ostati aktivne na strani napadača ako su ukradeni tokeni.</li>
    </ul>
    <div class="callout"><strong data-sr="Pojavljuje se aktivnost koju korisnik nije pokrenuo ili gubi pristup prijavi.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Pojavljuje se aktivnost koju korisnik nije pokrenuo ili gubi pristup prijavi." data-en="Activity appears that the user did not start, or they lose login access.">Pojavljuje se aktivnost koju korisnik nije pokrenuo ili gubi pristup prijavi.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 6 — Otkrivanje i sanacija" data-en="Phase 6 — Discovery and recovery">Faza 6 — Otkrivanje i sanacija</h3>
    <p data-sr="Korisnik shvata problem preko obaveštenja servisa, kontakata ili transakcija; oporavak zahteva reset pristupa i proveru uređaja." data-en="The user realizes through service alerts, contacts, or transactions; recovery requires resetting access and checking devices.">Korisnik shvata problem preko obaveštenja servisa, kontakata ili transakcija; oporavak zahteva reset pristupa i proveru uređaja.</p>
    <ul class="bullets">
      <li data-sr="Oporavak kroz zvaničan kanal servisa sa novim lozinkama i pregledom sesija." data-en="Recovery through the official service channel with new passwords and session review.">Oporavak kroz zvaničan kanal servisa sa novim lozinkama i pregledom sesija.</li>
      <li data-sr="Uklanjanje sumnjivih ekstenzija i skeniranje sistema." data-en="Removing suspicious extensions and scanning the system.">Uklanjanje sumnjivih ekstenzija i skeniranje sistema.</li>
      <li data-sr="Obaveštavanje banke i zamrzavanje plaćanja ako je nalog vezan za karticu." data-en="Notifying the bank and freezing payments if the account ties to a card.">Obaveštavanje banke i zamrzavanje plaćanja ako je nalog vezan za karticu.</li>
      <li data-sr="Čuvanje dokaza o domenima i vremenu incidenta za prijavu." data-en="Preserving evidence of domains and timing for reporting.">Čuvanje dokaza o domenima i vremenu incidenta za prijavu.</li>
    </ul>
    <div class="callout"><strong data-sr="Korisnik je izbacio napadača iz naloga i proverio sve aktivne sesije.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Korisnik je izbacio napadača iz naloga i proverio sve aktivne sesije." data-en="The user has locked the attacker out and reviewed all active sessions.">Korisnik je izbacio napadača iz naloga i proverio sve aktivne sesije.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching in this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="browser-session-hijack.html" data-sr="Ako su ukradeni tokeni sesije, pogledajte i preotimanje sesije." data-en="If session tokens were stolen, see also session hijack.">Ako su ukradeni tokeni sesije, pogledajte i preotimanje sesije.</a></li>
        <li><a href="fake-call-scam.html" data-sr="Eskalacija kroz lažni poziv podrške posle kompromitacije." data-en="Escalation via fake support call after compromise.">Eskalacija kroz lažni poziv podrške posle kompromitacije.</a></li>
      </ul>
    </div>
  </article>
</section>

<section class="content-section">
  <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
  <ul class="bullets">
    <li data-sr="Stranica za prijavu se pojavila u tabu koji ste ranije ostavili na potpuno drugačijem sadržaju." data-en="A login page appears in a tab you earlier left on very different content.">Stranica za prijavu se pojavila u tabu koji ste ranije ostavili na potpuno drugačijem sadržaju.</li>
    <li data-sr="Domen u adresnoj traci nije identičan zvaničnom domenu servisa koje koristite." data-en="The domain in the address bar is not identical to the official domain of the service you use.">Domen u adresnoj traci nije identičan zvaničnom domenu servisa koje koristite.</li>
    <li data-sr="Naslov taba menja se na tekst koji liči na hitno obaveštenje ili broj nepročitanih poruka." data-en="The tab title changes to text resembling an urgent alert or unread count.">Naslov taba menja se na tekst koji liči na hitno obaveštenje ili broj nepročitanih poruka.</li>
    <li data-sr="Traži se ponovna prijava odmah posle kratkog odlaska sa taba bez pravog isteka sesije na pravom sajtu." data-en="Re-login is demanded right after a short time away from the tab without a real session expiry on the real site.">Traži se ponovna prijava odmah posle kratkog odlaska sa taba bez pravog isteka sesije na pravom sajtu.</li>
    <li data-sr="Forma traži više podataka nego obična prijava tog servisa." data-en="The form asks for more data than that service’s normal sign-in.">Forma traži više podataka nego obična prijava tog servisa.</li>
    <li data-sr="Nakon unosa vas prebacuje na pravi sajt bez jasnog objašnjenja." data-en="After entry you are redirected to the real site without a clear explanation.">Nakon unosa vas prebacuje na pravi sajt bez jasnog objašnjenja.</li>
    <li data-sr="Nedavno ste instalirali novu ekstenziju pregledača koja ima široke dozvole." data-en="You recently installed a new browser extension with broad permissions.">Nedavno ste instalirali novu ekstenziju pregledača koja ima široke dozvole.</li>
    <li data-sr="Otvarali ste stranicu sa agresivnim oglasima ili preuzmi sada porukama." data-en="You opened a page with aggressive ads or download now messaging.">Otvarali ste stranicu sa agresivnim oglasima ili preuzmi sada porukama.</li>
    <li data-sr="Mobilni pregledač prikazuje samo kratku verziju URL-a bez punog hosta." data-en="The mobile browser shows only a shortened URL without the full host.">Mobilni pregledač prikazuje samo kratku verziju URL-a bez punog hosta.</li>
    <li data-sr="Isti scenario se ponavlja posle što zatvorite tab i ponovo kliknete stari link iz istorije." data-en="The same scenario repeats after you close the tab and click an old link from history again.">Isti scenario se ponavlja posle što zatvorite tab i ponovo kliknete stari link iz istorije.</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Provere: 8 brzih provera pre unosa lozinke" data-en="Checks: 8 quick checks before entering a password">Provere: 8 brzih provera pre unosa lozinke</h2>
  <ol class="steps">
    <li data-sr="Pročitajte ceo domen u adresnoj traci, znak po znak, i uporedite ga sa zvaničnim sajtom." data-en="Read the full domain in the address bar character by character and compare it to the official site.">Pročitajte ceo domen u adresnoj traci, znak po znak, i uporedite ga sa zvaničnim sajtom.</li>
    <li data-sr="Otvorite stranicu za prijavu ponovo ručnim unosom zvaničnog URL-a u novom tabu." data-en="Open the sign-in page again by typing the official URL manually in a new tab.">Otvorite stranicu za prijavu ponovo ručnim unosom zvaničnog URL-a u novom tabu.</li>
    <li data-sr="Proverite da li pravim servisom upravljate iz aplikacije na telefonu umesto iz sumnjivog taba." data-en="Check whether you can use the phone app for the real service instead of the suspicious tab.">Proverite da li pravim servisom upravljate iz aplikacije na telefonu umesto iz sumnjivog taba.</li>
    <li data-sr="Zatvorite sumnjivi tab i ne vraćajte se na njega iz istorije." data-en="Close the suspicious tab and do not return to it from history.">Zatvorite sumnjivi tab i ne vraćajte se na njega iz istorije.</li>
    <li data-sr="Pregledajte instalirane ekstenzije i uklonite one koje ne prepoznajete ili ne trebaju." data-en="Review installed extensions and remove ones you do not recognize or need.">Pregledajte instalirane ekstenzije i uklonite one koje ne prepoznajete ili ne trebaju.</li>
    <li data-sr="Uključite ili proverite da li pregledač ažurira sigurnosne liste poznatih fišing domena." data-en="Enable or verify the browser’s updates to security lists for known phishing domains.">Uključite ili proverite da li pregledač ažurira sigurnosne liste poznatih fišing domena.</li>
    <li data-sr="Ako ste već uneli podatke, odmah promenite lozinku sa drugog uređaja i odjavite sve sesije." data-en="If you already entered data, change the password immediately from another device and sign out all sessions.">Ako ste već uneli podatke, odmah promenite lozinku sa drugog uređaja i odjavite sve sesije.</li>
    <li data-sr="Sačuvajte URL i snimak ekrana pre brisanja taba ako planirate prijavu incidenta." data-en="Save the URL and a screenshot before closing the tab if you plan to report the incident.">Sačuvajte URL i snimak ekrana pre brisanja taba ako planirate prijavu incidenta.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Checklista: pitanja pre prijave u tabu" data-en="Checklist: questions before signing in from a tab">Checklista: pitanja pre prijave u tabu</h2>
  <ul class="bullets">
    <li data-sr="Da li sam ovaj tačan URL ručno uneo ili sam siguran da ga je otvorio samo zvanični link?" data-en="Did I type this exact URL myself or am I sure only an official link opened it?">Da li sam ovaj tačan URL ručno uneo ili sam siguran da ga je otvorio samo zvanični link?</li>
    <li data-sr="Da li se domen tačno poklapa sa onim na zvaničnoj aplikaciji ili dokumentaciji?" data-en="Does the domain match exactly what appears on the official app or documentation?">Da li se domen tačno poklapa sa onim na zvaničnoj aplikaciji ili dokumentaciji?</li>
    <li data-sr="Da li sam ostavio ovaj tab otvoren dok sam radio na drugim stvarima?" data-en="Did I leave this tab open while working on other things?">Da li sam ostavio ovaj tab otvoren dok sam radio na drugim stvarima?</li>
    <li data-sr="Da li se sadržaj taba promenio u odnosu na ono što sam prvobitno video?" data-en="Did the tab’s content change compared to what I first saw?">Da li se sadržaj taba promenio u odnosu na ono što sam prvobitno video?</li>
    <li data-sr="Da li me stranica tera na žurbu formulacijama tipa odmah ili u roku od nekoliko minuta?" data-en="Does the page pressure you with wording like immediately or within minutes?">Da li me stranica tera na žurbu formulacijama tipa odmah ili u roku od nekoliko minuta?</li>
    <li data-sr="Da li forma traži podatke koje obična prijava ne traži?" data-en="Does the form ask for data a normal sign-in does not ask for?">Da li forma traži podatke koje obična prijava ne traži?</li>
    <li data-sr="Da li mogu da potvrdim prijavu kroz drugi kanal pre nego što unesem lozinku?" data-en="Can I confirm sign-in through another channel before I enter the password?">Da li mogu da potvrdim prijavu kroz drugi kanal pre nego što unesem lozinku?</li>
    <li data-sr="Da li je ikonica katanca prisutna ali domen i dalje sumnjiv?" data-en="Is the lock icon present but the domain still suspicious?">Da li je ikonica katanca prisutna ali domen i dalje sumnjiv?</li>
    <li data-sr="Da li sam nedavno dodavao ekstenzije koje čitaju sve stranice?" data-en="Have I recently added extensions that read all pages?">Da li sam nedavno dodavao ekstenzije koje čitaju sve stranice?</li>
    <li data-sr="Da li je uređaj deljen sa drugim osobama koje mogu menjati pregledač?" data-en="Is the device shared with others who can change the browser?">Da li je uređaj deljen sa drugim osobama koje mogu menjati pregledač?</li>
    <li data-sr="Da li bih istu lozinku uneo na ovoj stranici da znam da je tab možda zamenjen?" data-en="Would I enter the same password on this page if I knew the tab might have been swapped?">Da li bih istu lozinku uneo na ovoj stranici da znam da je tab možda zamenjen?</li>
    <li data-sr="Da li mogu sada da zatvorim tab i da ništa ne izgubim osim vremena za ponovnu navigaciju?" data-en="Can I close the tab now and lose nothing but time to navigate again?">Da li mogu sada da zatvorim tab i da ništa ne izgubim osim vremena za ponovnu navigaciju?</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: order of actions">Ako sumnja krene: redosled poteza</h2>
  <ol class="steps">
    <li data-sr="Prekinite unos i ne šaljite formu ako je polje za lozinku već popunjeno." data-en="Stop entering and do not submit if the password field is already filled.">Prekinite unos i ne šaljite formu ako je polje za lozinku već popunjeno.</li>
    <li data-sr="Zatvorite sumnjivi tab bez klika na bilo koje dugme na stranici." data-en="Close the suspicious tab without clicking any button on the page.">Zatvorite sumnjivi tab bez klika na bilo koje dugme na stranici.</li>
    <li data-sr="Otvorite novi tab i ručno ukucajte zvanični URL servisa." data-en="Open a new tab and type the service’s official URL manually.">Otvorite novi tab i ručno ukucajte zvanični URL servisa.</li>
    <li data-sr="Ako ste već slali lozinku, promenite je odmah i odjavite sve sesije u podešavanjima naloga." data-en="If you already sent a password, change it immediately and sign out all sessions in account settings.">Ako ste već slali lozinku, promenite je odmah i odjavite sve sesije u podešavanjima naloga.</li>
    <li data-sr="Uklonite nedavne ekstenzije pregledača i pokrenite antimalver proveru." data-en="Remove recent browser extensions and run an antimalware check.">Uklonite nedavne ekstenzije pregledača i pokrenite antimalver proveru.</li>
    <li data-sr="Obavestite kontakte ako je nalog mogao poslati poruke u vaše ime." data-en="Warn contacts if the account could have sent messages in your name.">Obavestite kontakte ako je nalog mogao poslati poruke u vaše ime.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
  <ul class="bullets">
    <li data-sr="Da li su uneli lozinku u tab koji su ostavili otvoren dok su radili nešto drugo?" data-en="Did they enter a password in a tab they left open while doing something else?">Da li su uneli lozinku u tab koji su ostavili otvoren dok su radili nešto drugo?</li>
    <li data-sr="Da li su uporedili ceo URL sa zvaničnim sajtom znak po znak?" data-en="Did they compare the full URL to the official site character by character?">Da li su uporedili ceo URL sa zvaničnim sajtom znak po znak?</li>
    <li data-sr="Da li su nedavno instalirali ekstenziju koja menja stranice ili čita podatke?" data-en="Did they recently install an extension that alters pages or reads data?">Da li su nedavno instalirali ekstenziju koja menja stranice ili čita podatke?</li>
    <li data-sr="Da li vide neovlašćenu aktivnost na nalogu posle prijave?" data-en="Do they see unauthorized activity on the account after signing in?">Da li vide neovlašćenu aktivnost na nalogu posle prijave?</li>
  </ul>
  <p data-sr="Rečenice koje rade:" data-en="Sentences that help:">Rečenice koje rade:</p>
  <ul class="bullets">
    <li data-sr="Zatvori taj tab i ukucaj adresu banke ili servisa sam — ne koristi link sa te stranice." data-en="Close that tab and type the bank or service address yourself — do not use a link from that page.">Zatvori taj tab i ukucaj adresu banke ili servisa sam — ne koristi link sa te stranice.</li>
    <li data-sr="Ako si uneo lozinku, smatraj je kompromitovanom i odmah je promeni sa drugog uređaja." data-en="If you entered the password, treat it as compromised and change it immediately from another device.">Ako si uneo lozinku, smatraj je kompromitovanom i odmah je promeni sa drugog uređaja.</li>
    <li data-sr="Isti izgled stranice ne znači isti domen; proveri adresnu traku pre svakog unosa." data-en="The same page look does not mean the same domain; check the address bar before every entry.">Isti izgled stranice ne znači isti domen; proveri adresnu traku pre svakog unosa.</li>
    <li data-sr="Bolje izgubiti minut na ponovnu navigaciju nego sat vremena na oporavak naloga." data-en="Better to lose a minute re-navigating than hours recovering the account.">Bolje izgubiti minut na ponovnu navigaciju nego sat vremena na oporavak naloga.</li>
  </ul>
</section>


`
};
