window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["cloud-account-compromise"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: šta znači kompromitacija cloud naloga" data-en="Introduction: what cloud account compromise means">Uvod: šta znači kompromitacija cloud naloga</h2>
      <p data-sr="Cloud nalog obuhvata poštu, fajlove, kalendar i često pristup drugim aplikacijama preko istog identiteta. Kompromitacija nije uvek ukradena lozinka na ekranu: često je ulaz fišing link, OAuth dozvola, ponovljena lozinka sa drugog curenja ili MFA zamor. Napadaču je cilj dugotrajan pristup uz minimalan šum." data-en="A cloud account covers mail, files, calendar, and often access to other apps through the same identity. Compromise is not always a stolen password on screen: entry can be a phishing link, OAuth permission, a reused password from another leak, or MFA fatigue. The attacker wants long access with minimal noise.">Cloud nalog obuhvata poštu, fajlove, kalendar i često pristup drugim aplikacijama preko istog identiteta. Kompromitacija nije uvek ukradena lozinka na ekranu: često je ulaz fišing link, OAuth dozvola, ponovljena lozinka sa drugog curenja ili MFA zamor. Napadaču je cilj dugotrajan pristup uz minimalan šum.</p>
      <p data-sr="Posle ulaza sledi faza tihe kontrole: pravila prosleđivanja, novi uređaji, deljenje fajlova, kopiranje kontakata. Tek kasnije meta vidi finansijsku ili reputacionu štetu, jer je prvi talas bio priprema." data-en="After entry comes a quiet control phase: forwarding rules, new devices, file sharing, copying contacts. Financial or reputational harm may appear only later because the first wave was preparation.">Posle ulaza sledi faza tihe kontrole: pravila prosleđivanja, novi uređaji, deljenje fajlova, kopiranje kontakata. Tek kasnije meta vidi finansijsku ili reputacionu štetu, jer je prvi talas bio priprema.</p>
      <div class="callout" data-sr="<strong>Model:</strong> ulaz (fišing/OAuth/curenje) → prijava ili dozvola → tiha postavka → zloupotreba sadržaja i kontakata." data-en="<strong>Model:</strong> entry (phishing/OAuth/leak) → sign-in or permission → quiet setup → abuse of content and contacts."><strong>Model:</strong> ulaz (fišing/OAuth/curenje) → prijava ili dozvola → tiha postavka → zloupotreba sadržaja i kontakata.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno prolazi: rutina protiv provere" data-en="How it generally succeeds: routine versus verification">Kako generalno prolazi: rutina protiv provere</h2>
      <p data-sr="Korisnik je naviknut na cloud kao na jedan klik: otvori dokument, prihvati pozivnicu, potvrdi bezbednosno upozorenje. Napadač pakuje zahtev kao deo posla ili hitnog servisa. Provera drugim kanalom retko se dešava jer cloud deluje interno i pouzdano." data-en="Users are used to the cloud as a one-click world: open a document, accept an invite, confirm a security notice. The attacker frames the request as part of work or urgent service. A second-channel check rarely happens because the cloud feels internal and trustworthy.">Korisnik je naviknut na cloud kao na jedan klik: otvori dokument, prihvati pozivnicu, potvrdi bezbednosno upozorenje. Napadač pakuje zahtev kao deo posla ili hitnog servisa. Provera drugim kanalom retko se dešava jer cloud deluje interno i pouzdano.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Tipični ulazi" data-en="Typical entry paths">Tipični ulazi</div>
          <ul class="bullets">
            <li data-sr="Fišing na lažnoj stranici za prijavu koja prikuplja kredencijale ili sesiju." data-en="Phishing on a fake sign-in page that harvests credentials or session data.">Fišing na lažnoj stranici za prijavu koja prikuplja kredencijale ili sesiju.</li>
            <li data-sr="Odobrena aplikacija sa širokim OAuth opsegom bez nezavisne provere." data-en="An approved application with broad OAuth scope without independent verification.">Odobrena aplikacija sa širokim OAuth opsegom bez nezavisne provere.</li>
            <li data-sr="Ista lozinka kao na drugom servisu posle javnog curenja baze." data-en="The same password as on another service after a public database leak.">Ista lozinka kao na drugom servisu posle javnog curenja baze.</li>
            <li data-sr="Korisnik potvrdi MFA prompt zbog zamora ili lažnog poziva podrške." data-en="The user approves an MFA prompt due to fatigue or a fake support call.">Korisnik potvrdi MFA prompt zbog zamora ili lažnog poziva podrške.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Šta napadač traži posle ulaza" data-en="What the attacker seeks after entry">Šta napadač traži posle ulaza</div>
          <ul class="bullets">
            <li data-sr="Stabilan pristup pošti i dokumentima bez ponovnog oslanjanja na korisnika." data-en="Stable access to mail and documents without relying on the user again.">Stabilan pristup pošti i dokumentima bez ponovnog oslanjanja na korisnika.</li>
            <li data-sr="Mogućnost slanja poruka u ime žrtve radi jačeg fišinga ili prevara." data-en="Ability to send messages as the victim for stronger phishing or fraud.">Mogućnost slanja poruka u ime žrtve radi jačeg fišinga ili prevara.</li>
            <li data-sr="Podatke za oporavak ili dodatne naloge povezane istim imejlom." data-en="Recovery data or additional accounts tied to the same email.">Podatke za oporavak ili dodatne naloge povezane istim imejlom.</li>
            <li data-sr="Poslovni kontekst za BEC, fakture i promene uplatnica." data-en="Business context for BEC, invoices, and payment detail changes.">Poslovni kontekst za BEC, fakture i promene uplatnica.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching).">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Tok može trajati sate ili dane u tihom režimu pre nego što meta vidi očiglednu štetu." data-en="The flow can last hours or days in quiet mode before the target sees obvious damage.">Tok može trajati sate ili dane u tihom režimu pre nego što meta vidi očiglednu štetu.</p>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Kontakt: dokument, pozivnica ili bezbednosno upozorenje" data-en="Phase 1 — Contact: document, invite, or security alert">Faza 1 — Kontakt: dokument, pozivnica ili bezbednosno upozorenje</h3>
        <p data-sr="Poruka izgleda kao deo rada: deljeni fajl, poziv u tim, reset lozinke, ili sumnjiva prijava. Cilj je da korisnik klikne i uđe u tok koji kontroliše napadač." data-en="The message looks like part of work: a shared file, team invite, password reset, or suspicious sign-in alert. The goal is a click into an attacker-controlled flow.">Poruka izgleda kao deo rada: deljeni fajl, poziv u tim, reset lozinke, ili sumnjiva prijava. Cilj je da korisnik klikne i uđe u tok koji kontroliše napadač.</p>
        <p data-sr="U poslovnom okruženju pošiljalac može biti kompromitovan kolega, što dodatno smanjuje sumnju." data-en="In a workplace the sender may be a compromised colleague, which further lowers suspicion.">U poslovnom okruženju pošiljalac može biti kompromitovan kolega, što dodatno smanjuje sumnju.</p>
        <ul class="bullets">
          <li data-sr="Tema je rutinska: potvrdi, pregledaj, prihvati, osveži nalog." data-en="The theme is routine: confirm, review, accept, refresh the account.">Tema je rutinska: potvrdi, pregledaj, prihvati, osveži nalog.</li>
          <li data-sr="Hitnost je umerena ili sistemska, ne uvek dramatična." data-en="Urgency is moderate or system-like, not always dramatic.">Hitnost je umerena ili sistemska, ne uvek dramatična.</li>
          <li data-sr="Link vodi ka prijavi, aplikaciji ili stranici koja traži radnju." data-en="The link leads to sign-in, an app, or a page that demands action.">Link vodi ka prijavi, aplikaciji ili stranici koja traži radnju.</li>
          <li data-sr="Korisnik retko proverava domen kada je kontekst interni." data-en="The user rarely checks the domain when the context feels internal.">Korisnik retko proverava domen kada je kontekst interni.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik odluči da prati link ili prilog umesto da proveri kanal." data-en="<strong>Threshold:</strong> the user decides to follow the link or attachment instead of verifying the channel."><strong>Prag faze:</strong> korisnik odluči da prati link ili prilog umesto da proveri kanal.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Prijava, dozvola ili potvrda identiteta" data-en="Phase 2 — Sign-in, permission, or identity confirmation">Faza 2 — Prijava, dozvola ili potvrda identiteta</h3>
        <p data-sr="Korisnik unosi lozinku na lažnoj stranici, odobrava OAuth aplikaciju, ili potvrđuje MFA tok. Napadaču je dovoljan jedan uspešan korak koji daje token ili trajan pristup." data-en="The user enters a password on a fake page, approves an OAuth app, or confirms MFA. One successful step that yields a token or lasting access is enough for the attacker.">Korisnik unosi lozinku na lažnoj stranici, odobrava OAuth aplikaciju, ili potvrđuje MFA tok. Napadaču je dovoljan jedan uspešan korak koji daje token ili trajan pristup.</p>
        <ul class="bullets">
          <li data-sr="Lažna prijava izgleda kao poznat brend i forma." data-en="The fake sign-in mimics a familiar brand and form.">Lažna prijava izgleda kao poznat brend i forma.</li>
          <li data-sr="OAuth ekran traži širok opseg uz kratko objašnjenje." data-en="The OAuth screen requests broad scope with a short explanation.">OAuth ekran traži širok opseg uz kratko objašnjenje.</li>
          <li data-sr="MFA se predstavlja kao rutinska potvrda prijave." data-en="MFA is framed as a routine sign-in confirmation.">MFA se predstavlja kao rutinska potvrda prijave.</li>
          <li data-sr="Korisnik ne povezuje jedan klik sa trajnim pristupom treće strane." data-en="The user does not connect one click with persistent third-party access.">Korisnik ne povezuje jedan klik sa trajnim pristupom treće strane.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
            <li><a href="oauth-consent-phishing.html" data-sr="OAuth fišing" data-en="OAuth consent phishing">OAuth fišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> napadač dobija valjan sesijski token, kredencijal ili odobrenu integraciju." data-en="<strong>Threshold:</strong> the attacker obtains a valid session token, credential, or approved integration."><strong>Prag faze:</strong> napadač dobija valjan sesijski token, kredencijal ili odobrenu integraciju.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Tiha postavka: pravila, uređaji, deljenje" data-en="Phase 3 — Quiet setup: rules, devices, sharing">Faza 3 — Tiha postavka: pravila, uređaji, deljenje</h3>
        <p data-sr="Napadač dodaje prosleđivanje pošte, filtere, rezervni broj, deljenje foldera ili novi uređaj. Cilj je održati pristup kada korisnik promeni lozinku ili da se presretnu budući kodovi." data-en="The attacker adds mail forwarding, filters, backup phone numbers, folder sharing, or a new device. The goal is to keep access after a password change or to intercept future codes.">Napadač dodaje prosleđivanje pošte, filtere, rezervni broj, deljenje foldera ili novi uređaj. Cilj je održati pristup kada korisnik promeni lozinku ili da se presretnu budući kodovi.</p>
        <ul class="bullets">
          <li data-sr="Promene su tehničke i ne šalju upadljivo obaveštenje korisniku." data-en="Changes are technical and do not send a loud notification to the user.">Promene su tehničke i ne šalju upadljivo obaveštenje korisniku.</li>
          <li data-sr="Novi uređaj može biti prikazan kao poznat tip telefona ili pregledača." data-en="A new device may appear as a familiar phone or browser type.">Novi uređaj može biti prikazan kao poznat tip telefona ili pregledača.</li>
          <li data-sr="Deljenje fajlova otvara pristup bez potrebe za stalnom prijavom žrtve." data-en="File sharing opens access without the victim needing to stay signed in.">Deljenje fajlova otvara pristup bez potrebe za stalnom prijavom žrtve.</li>
          <li data-sr="Korisnik i dalje normalno koristi nalog." data-en="The user keeps using the account normally.">Korisnik i dalje normalno koristi nalog.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> postoji trajni mehanizam koji preživi jednostavnu promenu lozinke." data-en="<strong>Threshold:</strong> a persistent mechanism exists that survives a simple password change."><strong>Prag faze:</strong> postoji trajni mehanizam koji preživi jednostavnu promenu lozinke.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Prikupljanje sadržaja i konteksta" data-en="Phase 4 — Collecting content and context">Faza 4 — Prikupljanje sadržaja i konteksta</h3>
        <p data-sr="Napadač pretražuje poštu po ključnim rečima, preuzima fajlove, čita potpise i istoriju korespondencije. To je priprema za ciljanu prevaru ili prodaju pristupa." data-en="The attacker searches mail for keywords, downloads files, reads signatures and correspondence history. That prepares targeted fraud or selling access.">Napadač pretražuje poštu po ključnim rečima, preuzima fajlove, čita potpise i istoriju korespondencije. To je priprema za ciljanu prevaru ili prodaju pristupa.</p>
        <ul class="bullets">
          <li data-sr="Krađa ugovora, ponuda i podataka o klijentima." data-en="Theft of contracts, bids, and customer data.">Krađa ugovora, ponuda i podataka o klijentima.</li>
          <li data-sr="Identifikacija kolega i finansijskih kontakata za sledeći korak." data-en="Identification of colleagues and finance contacts for the next step.">Identifikacija kolega i finansijskih kontakata za sledeći korak.</li>
          <li data-sr="Pregled povezanih servisa radi reset napada." data-en="Review of linked services for reset attacks.">Pregled povezanih servisa radi reset napada.</li>
          <li data-sr="Arhiviranje materijala za kasniju zloupotrebu." data-en="Archiving material for later abuse.">Arhiviranje materijala za kasniju zloupotrebu.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="business-email-compromise.html" data-sr="BEC" data-en="Business email compromise">BEC</a></li>
            <li><a href="email-account-compromise.html" data-sr="Kompromitacija imejla" data-en="Email account compromise">Kompromitacija imejla</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> napadač ima dovoljno konteksta da pošalje uverljivu sledeću poruku ili zahtev." data-en="<strong>Threshold:</strong> the attacker has enough context to send a convincing next message or request."><strong>Prag faze:</strong> napadač ima dovoljno konteksta da pošalje uverljivu sledeću poruku ili zahtev.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Zloupotreba: poruke, uplate, širenje" data-en="Phase 5 — Abuse: messages, payments, spread">Faza 5 — Zloupotreba: poruke, uplate, širenje</h3>
        <p data-sr="Iz kompromitovanog naloga šalju se mejlovi sa lažnim uplatnicama, linkovima ili zahtevima za hitnu akciju. U privatnom modu šire se prevare kontaktima koji veruju identitetu." data-en="From the compromised account, emails go out with fake payment details, links, or urgent action requests. In private mode, scams spread to contacts who trust the identity.">Iz kompromitovanog naloga šalju se mejlovi sa lažnim uplatnicama, linkovima ili zahtevima za hitnu akciju. U privatnom modu šire se prevare kontaktima koji veruju identitetu.</p>
        <ul class="bullets">
          <li data-sr="Poruke koriste stvaran ton prepiske i potpis." data-en="Messages use the real thread tone and signature.">Poruke koriste stvaran ton prepiske i potpis.</li>
          <li data-sr="Finansijski zahtevi idu iznutra, pa manje prolaze kroz kontrolu." data-en="Financial requests come from inside, so they face less scrutiny.">Finansijski zahtevi idu iznutra, pa manje prolaze kroz kontrolu.</li>
          <li data-sr="Novi fišing linkovi šire napad na druge naloge." data-en="New phishing links spread the attack to other accounts.">Novi fišing linkovi šire napad na druge naloge.</li>
          <li data-sr="Žrtva saznaje tek kada kontakt odgovori ili banka upozori." data-en="The victim learns only when a contact replies or the bank warns.">Žrtva saznaje tek kada kontakt odgovori ili banka upozori.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> šteta postaje vidljiva spolja: novac, reputacija ili zaključan nalog." data-en="<strong>Threshold:</strong> damage becomes visible externally: money, reputation, or a locked account."><strong>Prag faze:</strong> šteta postaje vidljiva spolja: novac, reputacija ili zaključan nalog.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Oporavak, nepotpuno čišćenje, drugi talas" data-en="Phase 6 — Recovery, incomplete cleanup, second wave">Faza 6 — Oporavak, nepotpuno čišćenje, drugi talas</h3>
        <p data-sr="Korisnik menja lozinku ali ne proverava integracije, prosleđivanje i uređaje. Napadač zadrži pristup ili se javi pomoć uz novu uplatu. Cloud okruženje zahteva sistematsku reviziju, ne samo novu lozinku." data-en="The user changes the password but does not review integrations, forwarding, and devices. The attacker keeps access or help appears demanding a new payment. Cloud environments need a systematic review, not only a new password.">Korisnik menja lozinku ali ne proverava integracije, prosleđivanje i uređaje. Napadač zadrži pristup ili se javi pomoć uz novu uplatu. Cloud okruženje zahteva sistematsku reviziju, ne samo novu lozinku.</p>
        <ul class="bullets">
          <li data-sr="Aktivne OAuth aplikacije mogu zaobići promenu lozinke." data-en="Active OAuth apps can bypass a password change.">Aktivne OAuth aplikacije mogu zaobići promenu lozinke.</li>
          <li data-sr="Prosleđivanje pošte ostaje česta zaboravljena stavka." data-en="Mail forwarding is a commonly forgotten item.">Prosleđivanje pošte ostaje česta zaboravljena stavka.</li>
          <li data-sr="Ponude za forenziku ili povraćaj novca često su druga prevara." data-en="Offers for forensics or money recovery are often a second scam.">Ponude za forenziku ili povraćaj novca često su druga prevara.</li>
          <li data-sr="Firme treba da provere tenant logove i administrativne izmene." data-en="Organizations should review tenant logs and administrative changes.">Firme treba da provere tenant logove i administrativne izmene.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="recovery-scam.html" data-sr="Prevara povraćaja" data-en="Recovery scam">Prevara povraćaja</a></li>
            <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik smatra incident završenim pre nego što su svi kanali pristupa zatvoreni." data-en="<strong>Threshold:</strong> the user treats the incident as closed before every access path is shut."><strong>Prag faze:</strong> korisnik smatra incident završenim pre nego što su svi kanali pristupa zatvoreni.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Neočekivana prijava sa nepoznate lokacije ili uređaja u cloud konzoli." data-en="Unexpected sign-in from an unknown location or device in the cloud console.">Neočekivana prijava sa nepoznate lokacije ili uređaja u cloud konzoli.</li>
        <li data-sr="Nova pravila prosleđivanja ili filtera koja niste postavili." data-en="New forwarding rules or filters you did not set.">Nova pravila prosleđivanja ili filtera koja niste postavili.</li>
        <li data-sr="Nepoznata aplikacija na listi odobrenih integracija." data-en="An unknown app on the approved integrations list.">Nepoznata aplikacija na listi odobrenih integracija.</li>
        <li data-sr="Kontakti javljaju da od vas stižu čudni mejlovi ili zahtevi za novac." data-en="Contacts report strange emails or money requests from you.">Kontakti javljaju da od vas stižu čudni mejlovi ili zahtevi za novac.</li>
        <li data-sr="Fajlovi su deljeni sa spoljnim nalozima koje ne prepoznajete." data-en="Files are shared with external accounts you do not recognize.">Fajlovi su deljeni sa spoljnim nalozima koje ne prepoznajete.</li>
        <li data-sr="Promenjen broj za oporavak ili MFA bez vaše radnje." data-en="Recovery phone or MFA changed without your action.">Promenjen broj za oporavak ili MFA bez vaše radnje.</li>
        <li data-sr="Talas MFA obaveštenja ili poziv koji traži odobrenje u aplikaciji." data-en="A wave of MFA notifications or a call asking you to approve in the app.">Talas MFA obaveštenja ili poziv koji traži odobrenje u aplikaciji.</li>
        <li data-sr="Posle dokumenta iz firme tražena je široka dozvola aplikaciji." data-en="After a company document, an app demanded broad permissions.">Posle dokumenta iz firme tražena je široka dozvola aplikaciji.</li>
        <li data-sr="Ista lozinka korišćena je na više servisa i jedan od njih je bio u curenju." data-en="The same password was used on multiple services and one of them leaked.">Ista lozinka korišćena je na više servisa i jedan od njih je bio u curenju.</li>
        <li data-sr="Incident se nastavlja posle promene lozinke." data-en="The incident continues after a password change.">Incident se nastavlja posle promene lozinke.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <ol class="steps">
        <li data-sr="Proverite aktivne sesije i uređaje u bezbednosnim podešavanjima naloga." data-en="Review active sessions and devices in the account security settings.">Proverite aktivne sesije i uređaje u bezbednosnim podešavanjima naloga.</li>
        <li data-sr="Proverite prosleđivanje, filtere i automatske odgovore u pošti." data-en="Check forwarding, filters, and auto-replies in mail.">Proverite prosleđivanje, filtere i automatske odgovore u pošti.</li>
        <li data-sr="Pregledajte odobrene aplikacije i uklonite sve sumnjive." data-en="Review approved applications and remove anything suspicious.">Pregledajte odobrene aplikacije i uklonite sve sumnjive.</li>
        <li data-sr="Proverite deljenje fajlova i linkova sa istekom pristupa." data-en="Review file and link sharing with access expiry.">Proverite deljenje fajlova i linkova sa istekom pristupa.</li>
        <li data-sr="Potvrdite podatke za oporavak: imejl, telefon, rezervni kodovi." data-en="Confirm recovery details: email, phone, backup codes.">Potvrdite podatke za oporavak: imejl, telefon, rezervni kodovi.</li>
        <li data-sr="Uporedite poslednje izmene sa kolegama ako je poslovni tenant." data-en="Compare recent changes with colleagues if it is a business tenant.">Uporedite poslednje izmene sa kolegama ako je poslovni tenant.</li>
        <li data-sr="Ulogujte se samo kroz zvaničan URL ili aplikaciju, ne kroz link iz poruke." data-en="Sign in only via the official URL or app, not through a message link.">Ulogujte se samo kroz zvaničan URL ili aplikaciju, ne kroz link iz poruke.</li>
        <li data-sr="Nakon incidenta zatražite interni bezbednosni pregled ako postoji IT služba." data-en="After an incident, request an internal security review if IT exists.">Nakon incidenta zatražite interni bezbednosni pregled ako postoji IT služba.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
      <ul class="bullets">
        <li data-sr="Da li vidim sve uređaje koje sam ja registrovao?" data-en="Do I see only devices I registered myself?">Da li vidim sve uređaje koje sam ja registrovao?</li>
        <li data-sr="Da li postoji prosleđivanje koje ne prepoznajem?" data-en="Is there forwarding I do not recognize?">Da li postoji prosleđivanje koje ne prepoznajem?</li>
        <li data-sr="Da li neka aplikacija ima pristup pošti ili fajlovima bez poslovnog razloga?" data-en="Does any app have mail or file access without a business reason?">Da li neka aplikacija ima pristup pošti ili fajlovima bez poslovnog razloga?</li>
        <li data-sr="Da li sam poslednji dokument ili pozivnicu očekivao?" data-en="Was I expecting the last document or invite?">Da li sam poslednji dokument ili pozivnicu očekivao?</li>
        <li data-sr="Da li je domen prijave tačno onaj koji koristim uvek?" data-en="Is the sign-in domain exactly the one I always use?">Da li je domen prijave tačno onaj koji koristim uvek?</li>
        <li data-sr="Da li MFA radi kako obično ili stiže neuobičajeno mnogo zahteva?" data-en="Is MFA behaving normally or are unusually many prompts arriving?">Da li MFA radi kako obično ili stiže neuobičajeno mnogo zahteva?</li>
        <li data-sr="Da li su kontakti primali poruke koje nisam slao?" data-en="Did contacts receive messages I did not send?">Da li su kontakti primali poruke koje nisam slao?</li>
        <li data-sr="Da li su se pojavile nove deljene fascikle?" data-en="Did new shared folders appear?">Da li su se pojavile nove deljene fascikle?</li>
        <li data-sr="Da li koristim istu lozinku negde drugde?" data-en="Do I reuse the same password elsewhere?">Da li koristim istu lozinku negde drugde?</li>
        <li data-sr="Da li znam ko u firmi odobrava nove aplikacije u tenantu?" data-en="Do I know who in the company approves new apps in the tenant?">Da li znam ko u firmi odobrava nove aplikacije u tenantu?</li>
        <li data-sr="Da li imam rezervne kodove za MFA na sigurnom mestu?" data-en="Do I have MFA backup codes in a safe place?">Da li imam rezervne kodove za MFA na sigurnom mestu?</li>
        <li data-sr="Da li sam posle incidenta proverio i integracije, ne samo lozinku?" data-en="After an incident, did I review integrations, not only the password?">Da li sam posle incidenta proverio i integracije, ne samo lozinku?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Odjavite sve sesije i uklonite sumnjive uređaje u bezbednosnim podešavanjima." data-en="Sign out all sessions and remove suspicious devices in security settings.">Odjavite sve sesije i uklonite sumnjive uređaje u bezbednosnim podešavanjima.</li>
        <li data-sr="Uklonite nepoznate aplikacije i opozovite OAuth dozvole." data-en="Remove unknown apps and revoke OAuth permissions.">Uklonite nepoznate aplikacije i opozovite OAuth dozvole.</li>
        <li data-sr="Isključite prosleđivanje i sumnjive filtere u pošti." data-en="Disable forwarding and suspicious mail filters.">Isključite prosleđivanje i sumnjive filtere u pošti.</li>
        <li data-sr="Promenite lozinku i proverite MFA, zatim vratite ispravne podatke za oporavak." data-en="Change the password and review MFA, then restore correct recovery details.">Promenite lozinku i proverite MFA, zatim vratite ispravne podatke za oporavak.</li>
        <li data-sr="Obavestite kontakte i IT ako je u pitanju poslovni nalog." data-en="Notify contacts and IT if this is a business account.">Obavestite kontakte i IT ako je u pitanju poslovni nalog.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li vidiš nove uređaje ili prijave u istoriji?" data-en="Do you see new devices or sign-ins in history?">Da li vidiš nove uređaje ili prijave u istoriji?</li>
            <li data-sr="Da li je prosleđivanje pošte uključeno?" data-en="Is mail forwarding enabled?">Da li je prosleđivanje pošte uključeno?</li>
            <li data-sr="Koje aplikacije imaju pristup nalogu?" data-en="Which apps have access to the account?">Koje aplikacije imaju pristup nalogu?</li>
            <li data-sr="Da li je neko tražio novac u tvoje ime?" data-en="Did anyone ask for money in your name?">Da li je neko tražio novac u tvoje ime?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Hajde prvo da prođemo kroz uređaje i prosleđivanje, to često ostaje upaljeno." data-en="Let’s first walk through devices and forwarding; those often stay on.">Hajde prvo da prođemo kroz uređaje i prosleđivanje, to često ostaje upaljeno.</li>
            <li data-sr="Nova lozinka ne znači kraj ako je aplikacija i dalje odobrena." data-en="A new password is not the end if an app is still approved.">Nova lozinka ne znači kraj ako je aplikacija i dalje odobrena.</li>
            <li data-sr="Uloguj se samo kroz aplikaciju ili sajt koji ručno ukucaš." data-en="Sign in only through the app or a site you type manually.">Uloguj se samo kroz aplikaciju ili sajt koji ručno ukucaš.</li>
            <li data-sr="Sačuvaj screenshot sumnjivih podešavanja pre brisanja." data-en="Save screenshots of suspicious settings before deleting them.">Sačuvaj screenshot sumnjivih podešavanja pre brisanja.</li>
          </ul>
        </div>
      </div>
    </section>
`
};
