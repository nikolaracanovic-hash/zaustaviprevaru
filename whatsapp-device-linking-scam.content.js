window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["whatsapp-device-linking-scam"] = {
  raw_html: `

    <section class="card">
      <h2 data-sr="Uvod: lažno povezivanje uređaja na WhatsApp-u" data-en="Introduction: fake WhatsApp device linking">Uvod: lažno povezivanje uređaja na WhatsApp-u</h2>

      <p data-sr="Napadač šalje razlog da skenirate QR kod za povezani uređaj ili da potvrdite veb verziju, pa dobija istu sesiju kao vi." data-en="The attacker gives a reason to scan the linked device QR or confirm the web version, then gets the same session as you.">Napadač šalje razlog da skenirate QR kod za povezani uređaj ili da potvrdite veb verziju, pa dobija istu sesiju kao vi.</p>
      <p data-sr="Posle toga čita četove, šalje poruke kontaktima i može tražiti novac ili kodove." data-en="Then they read chats, message contacts, and may ask for money or codes.">Posle toga čita četove, šalje poruke kontaktima i može tražiti novac ili kodove.</p>
      <div class="callout" data-sr="<strong>Model:</strong> lažni razlog → QR ili potvrda veb sesije → tuđi pristup → zloupotreba poverenja kontakata." data-en="<strong>Model:</strong> fake pretext → QR or web session approval → foreign access → abuse of contact trust."><strong>Model:</strong> lažni razlog → QR ili potvrda veb sesije → tuđi pristup → zloupotreba poverenja kontakata.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako izgleda pritisak" data-en="How pressure appears">Kako izgleda pritisak</h2>

      <p data-sr="Korisnik misli da pomaže kolegi, porodici ili podršci, a zapravo daje daljinski prozor u svoj nalog." data-en="The user thinks they are helping a colleague, family, or support, but actually gives a remote window into their account.">Korisnik misli da pomaže kolegi, porodici ili podršci, a zapravo daje daljinski prozor u svoj nalog.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Tipično u poruci" data-en="Typical in the message">Tipično u poruci</div>
          <ul class="bullets">
            <li data-sr="Moraš da povežeš poslovni nalog na računar hitno." data-en="You must link the business account to the computer urgently.">Moraš da povežeš poslovni nalog na računar hitno.</li>
            <li data-sr="Slika ili video ekrana sa QR kodom koji treba skenirati." data-en="A photo or video of a screen with a QR to scan.">Slika ili video ekrana sa QR kodom koji treba skenirati.</li>
            <li data-sr="Tvrdnja da je QR od IT odeljenja ili od banke." data-en="A claim the QR is from IT or from the bank.">Tvrdnja da je QR od IT odeljenja ili od banke.</li>
            <li data-sr="Molba da ne zatvarate aplikaciju dok ne završi migracija." data-en="A request not to close the app while migration finishes.">Molba da ne zatvarate aplikaciju dok ne završi migracija.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Cilj napadača" data-en="Attacker goal">Cilj napadača</div>
          <ul class="bullets">
            <li data-sr="Stalna veb ili povezana sesija bez ponovnog traženja koda odmah." data-en="A persistent web or linked session without an immediate new code prompt.">Stalna veb ili povezana sesija bez ponovnog traženja koda odmah.</li>
            <li data-sr="Čitanje istorije i imena kontakata radi ciljanog fišinga." data-en="Reading history and contact names for targeted phishing.">Čitanje istorije i imena kontakata radi ciljanog fišinga.</li>
            <li data-sr="Slanje poruka u vaše ime da bi žrtve odgovorile poverljivo." data-en="Sending messages in your name so victims reply with trust.">Slanje poruka u vaše ime da bi žrtve odgovorile poverljivo.</li>
            <li data-sr="Prikupljanje kodova ili linkova koji stižu u četu." data-en="Collecting codes or links that arrive in the chat.">Prikupljanje kodova ili linkova koji stižu u četu.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching).">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Tok traje minutima ako meta odmah skenira QR." data-en="The flow lasts minutes if the target scans the QR immediately.">Tok traje minutima ako meta odmah skenira QR.</p>
      <article class="phase ">
        <h3 class="phase-title" data-sr="Faza 1 — Ulaz: poruka od poznatog broja ili podrške" data-en="Phase 1 — Entry: message from a known number or support">Faza 1 — Ulaz: poruka od poznatog broja ili podrške</h3>
        <p data-sr="Stiže WhatsApp poruka sa pričom o poslu, nagradi, blokadi naloga ili tehničkoj obavezi." data-en="A WhatsApp arrives with a story about work, a prize, account block, or technical duty.">Stiže WhatsApp poruka sa pričom o poslu, nagradi, blokadi naloga ili tehničkoj obavezi.</p>
        <p data-sr="Korisnik veruje jer broj liči na poznat kontakt ili jer tema zvuči zvanično." data-en="The user trusts because the number looks like a known contact or the topic sounds official.">Korisnik veruje jer broj liči na poznat kontakt ili jer tema zvuči zvanično.</p>
        <ul class="bullets">
            <li data-sr="Tema pogađa posao, novac ili hitan rok." data-en="The topic hits work, money, or an urgent deadline.">Tema pogađa posao, novac ili hitan rok.</li>
            <li data-sr="Zahtev da ostanete na vezi dok se rešava." data-en="A demand to stay online while it is being fixed.">Zahtev da ostanete na vezi dok se rešava.</li>
            <li data-sr="Slika ekrana sa QR umesto običnog linka." data-en="A screen photo with a QR instead of a plain link.">Slika ekrana sa QR umesto običnog linka.</li>
            <li data-sr="Manji žargon da zvuči kao interna procedura." data-en="Insider jargon to sound like internal procedure.">Manji žargon da zvuči kao interna procedura.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta prihvati da će raditi korak povezivanja umesto da prvo proveri drugim kanalom." data-en="<strong>Threshold:</strong> the target agrees to do a linking step instead of verifying on another channel first."><strong>Prag faze:</strong> meta prihvati da će raditi korak povezivanja umesto da prvo proveri drugim kanalom.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Vođenje kroz meni Povezani uređaji" data-en="Phase 2 — Guided Linked devices flow">Faza 2 — Vođenje kroz meni Povezani uređaji</h3>
        <p data-sr="Napadač korak po korak kaže gde da otvorite podešavanja i gde da skenirate QR sa svog telefona." data-en="The attacker step by step tells you where to open settings and where to scan the QR from your phone.">Napadač korak po korak kaže gde da otvorite podešavanja i gde da skenirate QR sa svog telefona.</p>
        <ul class="bullets">
            <li data-sr="Insistiranje da ne čitate upozorenja aplikacije naglas." data-en="Insistence not to read the app warnings aloud.">Insistiranje da ne čitate upozorenja aplikacije naglas.</li>
            <li data-sr="Brz tempo da ne stigne razmišljanje." data-en="Fast pace so reflection has no time.">Brz tempo da ne stigne razmišljanje.</li>
            <li data-sr="Lažno objašnjenje šta QR u stvari radi." data-en="A false explanation of what the QR really does.">Lažno objašnjenje šta QR u stvari radi.</li>
            <li data-sr="Ponavljanje da je ovo jedini način da sačuvate nalog." data-en="Repeating this is the only way to keep the account.">Ponavljanje da je ovo jedini način da sačuvate nalog.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="whatsapp-takeover.html" data-sr="Preuzimanje WhatsApp naloga" data-en="WhatsApp takeover">Preuzimanje WhatsApp naloga</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> kamera aplikacije usmeri se na tuđi QR." data-en="<strong>Threshold:</strong> the app camera points at someone else QR."><strong>Prag faze:</strong> kamera aplikacije usmeri se na tuđi QR.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Prag: aktivna veb ili povezana sesija" data-en="Phase 3 — Threshold: active web or linked session">Faza 3 — Prag: aktivna veb ili povezana sesija</h3>
        <p data-sr="Aplikacija potvrdi novi uređaj; napadač odmah vidi četove ili ih sinhronizuje." data-en="The app confirms a new device; the attacker immediately sees chats or syncs them.">Aplikacija potvrdi novi uređaj; napadač odmah vidi četove ili ih sinhronizuje.</p>
        <p data-sr="Korisnik i dalje koristi telefon i ne primećuje promenu prvih minuta." data-en="The user still uses the phone and may not notice for the first minutes.">Korisnik i dalje koristi telefon i ne primećuje promenu prvih minuta.</p>
        <ul class="bullets">
            <li data-sr="Lista povezanih uređaja pokazuje nepoznat unos." data-en="Linked devices list shows an unknown entry.">Lista povezanih uređaja pokazuje nepoznat unos.</li>
            <li data-sr="Napadač može eksportovati medije ako ih šaljete u četu." data-en="The attacker may exfiltrate media you send in chat.">Napadač može eksportovati medije ako ih šaljete u četu.</li>
            <li data-sr="Čitanje pin kodova ili linkova iz obaveštenja na drugom uređaju." data-en="Reading PINs or links from notifications on another device.">Čitanje pin kodova ili linkova iz obaveštenja na drugom uređaju.</li>
            <li data-sr="Priprema poruka kontaktima dok vi mislite da je sve završeno." data-en="Preparing messages to contacts while you think it is done.">Priprema poruka kontaktima dok vi mislite da je sve završeno.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> sesija postane aktivna i van vaše fizičke kontrole." data-en="<strong>Threshold:</strong> the session becomes active outside your physical control."><strong>Prag faze:</strong> sesija postane aktivna i van vaše fizičke kontrole.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Zloupotreba naloga ili novca" data-en="Phase 4 — Abuse of account or money">Faza 4 — Zloupotreba naloga ili novca</h3>
        <p data-sr="Šalju se poruke sa molbom za prenos, lažnim linkom za plaćanje ili prikupljanjem ličnih podataka." data-en="Messages go out asking for transfers, fake payment links, or personal data collection.">Šalju se poruke sa molbom za prenos, lažnim linkom za plaćanje ili prikupljanjem ličnih podataka.</p>
        <ul class="bullets">
            <li data-sr="Kontakti odgovaraju jer veruju da ste vi." data-en="Contacts reply because they believe it is you.">Kontakti odgovaraju jer veruju da ste vi.</li>
            <li data-sr="Može se tražiti pomoć oko koda iz SMS-a u četu." data-en="They may ask for help with an SMS code in chat.">Može se tražiti pomoć oko koda iz SMS-a u četu.</li>
            <li data-sr="Grupne poruke ubrzavaju širenje linka." data-en="Group messages speed link spread.">Grupne poruke ubrzavaju širenje linka.</li>
            <li data-sr="Brisanje dela istorije da žrtva kasnije teže dokazuje tok." data-en="Deleting part of history so the victim later struggles to prove the flow.">Brisanje dela istorije da žrtva kasnije teže dokazuje tok.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="impersonation-scam.html" data-sr="Lažno predstavljanje" data-en="Impersonation scam">Lažno predstavljanje</a></li>
            <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> neko drugi šalje poruke ili čita osetljive četove u vaše ime." data-en="<strong>Threshold:</strong> someone else sends messages or reads sensitive chats in your name."><strong>Prag faze:</strong> neko drugi šalje poruke ili čita osetljive četove u vaše ime.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Otkrivanje" data-en="Phase 5 — Discovery">Faza 5 — Otkrivanje</h3>
        <p data-sr="Kontakt javlja čudnu poruku ili vi vidite aktivnost koju niste uradili." data-en="A contact reports a strange message or you see activity you did not do.">Kontakt javlja čudnu poruku ili vi vidite aktivnost koju niste uradili.</p>
        <ul class="bullets">
            <li data-sr="Poruke koje se šalju same dok držite telefon." data-en="Messages that send themselves while you hold the phone.">Poruke koje se šalju same dok držite telefon.</li>
            <li data-sr="Nepoznat uređaj u listi povezanih." data-en="An unknown device in the linked list.">Nepoznat uređaj u listi povezanih.</li>
            <li data-sr="Istorija brisanja ili arhiviranja čudna." data-en="Odd deletion or archiving history.">Istorija brisanja ili arhiviranja čudna.</li>
            <li data-sr="Blokada ili upozorenje od drugog servisa posle iste šifre." data-en="A block or alert from another service after the same password.">Blokada ili upozorenje od drugog servisa posle iste šifre.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> žrtva povezuje štetu sa skeniranjem QR ili sa vođenjem kroz meni." data-en="<strong>Threshold:</strong> the victim connects harm to scanning the QR or the guided menu."><strong>Prag faze:</strong> žrtva povezuje štetu sa skeniranjem QR ili sa vođenjem kroz meni.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Sanacija" data-en="Phase 6 — Remediation">Faza 6 — Sanacija</h3>
        <p data-sr="Odjaviti sve povezane uređaje, uključiti dvostepenu proveru, obavestiti kontakte i proveriti druge naloge." data-en="Log out all linked devices, enable two-step verification, notify contacts, and check other accounts.">Odjaviti sve povezane uređaje, uključiti dvostepenu proveru, obavestiti kontakte i proveriti druge naloge.</p>
        <p data-sr="Ubuduće: nikad ne skenirati QR za tuđi ekran; provera drugim kanalom pre bilo kakve izmene naloga." data-en="Going forward: never scan a QR for someone else screen; verify on another channel before any account change.">Ubuduće: nikad ne skenirati QR za tuđi ekran; provera drugim kanalom pre bilo kakve izmene naloga.</p>
        <ul class="bullets">
            <li data-sr="U podešavanjima obrisati sve nepoznate veb sesije." data-en="In settings, remove all unknown web sessions.">U podešavanjima obrisati sve nepoznate veb sesije.</li>
            <li data-sr="Sačuvati screenshot liste uređaja pre brisanja." data-en="Save a screenshot of the device list before removal.">Sačuvati screenshot liste uređaja pre brisanja.</li>
            <li data-sr="Kratka poruka kontaktima da ignorišu novac dok ne potvrdite uživo." data-en="A short note to contacts to ignore money asks until you confirm in person.">Kratka poruka kontaktima da ignorišu novac dok ne potvrdite uživo.</li>
            <li data-sr="Provera banke ako su deljeni podaci u četu." data-en="Check with the bank if details were shared in chat.">Provera banke ako su deljeni podaci u četu.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="number-verification-scam.html" data-sr="Verifikacija broja" data-en="Number verification scam">Verifikacija broja</a></li>
            <li><a href="smishing.html" data-sr="Smišing" data-en="Smishing">Smišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik zatvori sve tuđe sesije i promeni sigurnosne korake." data-en="<strong>Threshold:</strong> the user closes all foreign sessions and changes security steps."><strong>Prag faze:</strong> korisnik zatvori sve tuđe sesije i promeni sigurnosne korake.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
<ul class="bullets">
            <li data-sr="Bilo ko traži da skenirate QR sa svog telefona za njihov računar." data-en="Anyone asks you to scan a QR from your phone for their computer.">Bilo ko traži da skenirate QR sa svog telefona za njihov računar.</li>
            <li data-sr="QR stiže kao slika ili snimak ekrana umesto zvaničnog toka koji ste vi pokrenuli." data-en="The QR arrives as a photo or screen capture instead of an official flow you started.">QR stiže kao slika ili snimak ekrana umesto zvaničnog toka koji ste vi pokrenuli.</li>
            <li data-sr="Hitna priča da će nalog biti obrisan ako ne povežete uređaj odmah." data-en="An urgent story that the account will be deleted unless you link a device now.">Hitna priča da će nalog biti obrisan ako ne povežete uređaj odmah.</li>
            <li data-sr="IT koristi WhatsApp umesto službenog imejla ili tiketa." data-en="IT uses WhatsApp instead of official email or tickets.">IT koristi WhatsApp umesto službenog imejla ili tiketa.</li>
            <li data-sr="Zabrana da pozovete kolegu na fiksni ili interni broj." data-en="Discouraging you from calling a colleague on a fixed or internal number.">Zabrana da pozovete kolegu na fiksni ili interni broj.</li>
            <li data-sr="Vođenje rečenicu po rečenicu kroz sigurnosna upozorenja aplikacije." data-en="Walking line by line through the app security warnings.">Vođenje rečenicu po rečenicu kroz sigurnosna upozorenja aplikacije.</li>
            <li data-sr="Molba da fotografirate svoj ekran sa listom uređaja." data-en="A request to photograph your screen with the device list.">Molba da fotografirate svoj ekran sa listom uređaja.</li>
            <li data-sr="Isti QR se šalje više puta jer nije prošao." data-en="The same QR is sent repeatedly because it did not work.">Isti QR se šalje više puta jer nije prošao.</li>
            <li data-sr="Noćni ili vikend poziv sa lažnom hitnošću." data-en="A night or weekend contact with fake urgency.">Noćni ili vikend poziv sa lažnom hitnošću.</li>
            <li data-sr="Grupa nepoznatih brojeva koja podržava istu priču." data-en="A group of unknown numbers backing the same story.">Grupa nepoznatih brojeva koja podržava istu priču.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
<ol class="steps">
        <li data-sr="Nikada ne skenirajte QR za povezivanje uređaja radi tuđeg zahteva." data-en="Never scan a device-linking QR for someone else request.">Nikada ne skenirajte QR za povezivanje uređaja radi tuđeg zahteva.</li>
        <li data-sr="Proverite povezane uređaje u podešavanjima i odjavite sve sumnjivo." data-en="Check linked devices in settings and log out anything suspicious.">Proverite povezane uređaje u podešavanjima i odjavite sve sumnjivo.</li>
        <li data-sr="Potvrdite priču drugim kanalom (poziv na poznat broj, uživo)." data-en="Confirm the story on another channel (call a known number, in person).">Potvrdite priču drugim kanalom (poziv na poznat broj, uživo).</li>
        <li data-sr="Uključite dvostepenu proveru ako je dostupna." data-en="Enable two-step verification if available.">Uključite dvostepenu proveru ako je dostupna.</li>
        <li data-sr="Pročitajte tekst upozorenja na ekranu pre potvrde." data-en="Read the on-screen warning text before you confirm.">Pročitajte tekst upozorenja na ekranu pre potvrde.</li>
        <li data-sr="Ne šaljite snimke menija koji otkrivaju sesije." data-en="Do not send screenshots of menus that expose sessions.">Ne šaljite snimke menija koji otkrivaju sesije.</li>
        <li data-sr="Za posao tražite zvaničan tiket ili imejl pre bilo kakvog QR." data-en="For work, demand an official ticket or email before any QR.">Za posao tražite zvaničan tiket ili imejl pre bilo kakvog QR.</li>
        <li data-sr="Obavestite kontakte ako sumnjate da je sesija bila otvorena." data-en="Notify contacts if you suspect a session was opened.">Obavestite kontakte ako sumnjate da je sesija bila otvorena.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
<ul class="bullets">
            <li data-sr="Da li sam ja tražio povezivanje novog uređaja?" data-en="Did I request linking a new device?">Da li sam ja tražio povezivanje novog uređaja?</li>
            <li data-sr="Da li QR dolazi sa tuđeg ekrana?" data-en="Does the QR come from someone else screen?">Da li QR dolazi sa tuđeg ekrana?</li>
            <li data-sr="Da li mi neko govori tačno koji meni da otvorim?" data-en="Is someone telling me exactly which menu to open?">Da li mi neko govori tačno koji meni da otvorim?</li>
            <li data-sr="Da li je hitnost razlog da preskočim proveru sa šefom?" data-en="Is urgency making me skip checking with the boss?">Da li je hitnost razlog da preskočim proveru sa šefom?</li>
            <li data-sr="Da li vidim novi uređaj u listi odmah posle koraka?" data-en="Do I see a new device in the list right after the step?">Da li vidim novi uređaj u listi odmah posle koraka?</li>
            <li data-sr="Da li bih ovo uradio u prisustvu IT-a u kancelariji?" data-en="Would I do this with IT present in the office?">Da li bih ovo uradio u prisustvu IT-a u kancelariji?</li>
            <li data-sr="Da li poruka traži tajnost koraka?" data-en="Does the message demand secrecy about the steps?">Da li poruka traži tajnost koraka?</li>
            <li data-sr="Da li je broj isti kao u imeniku posla?" data-en="Is the number the same as the work directory?">Da li je broj isti kao u imeniku posla?</li>
            <li data-sr="Da li sam ikada ranije skenirao QR za stranca?" data-en="Have I ever scanned a QR for a stranger before?">Da li sam ikada ranije skenirao QR za stranca?</li>
            <li data-sr="Da li aplikacija prikazuje upozorenje koje me zbunjuje?" data-en="Does the app show a warning that confuses me?">Da li aplikacija prikazuje upozorenje koje me zbunjuje?</li>
            <li data-sr="Da li mogu prvo da prekinem i nastavim sutra?" data-en="Can I stop first and continue tomorrow?">Da li mogu prvo da prekinem i nastavim sutra?</li>
            <li data-sr="Da li je ovo isti obrazac kao priča o kodu u SMS-u?" data-en="Is this the same pattern as the SMS code story?">Da li je ovo isti obrazac kao priča o kodu u SMS-u?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
<ol class="steps">
        <li data-sr="Prekinite vođenje i ne skenirajte ništa dok ne proverite drugim kanalom." data-en="Stop the walkthrough and scan nothing until you verify on another channel.">Prekinite vođenje i ne skenirajte ništa dok ne proverite drugim kanalom.</li>
        <li data-sr="Odjavite sve povezane uređaje u podešavanjima WhatsApp-a." data-en="Log out all linked devices in WhatsApp settings.">Odjavite sve povezane uređaje u podešavanjima WhatsApp-a.</li>
        <li data-sr="Uključite dvostepenu proveru i proverite da li je promenjen broj za oporavak." data-en="Enable two-step verification and check whether the recovery number changed.">Uključite dvostepenu proveru i proverite da li je promenjen broj za oporavak.</li>
        <li data-sr="Obavestite kontakte kratkom porukom da ne šalju novac na vaš zahtev." data-en="Tell contacts in a short note not to send money on your request.">Obavestite kontakte kratkom porukom da ne šalju novac na vaš zahtev.</li>
        <li data-sr="Ako je posao u pitanju, prijavite incident internom bezbednošću." data-en="If work is involved, report the incident to internal security.">Ako je posao u pitanju, prijavite incident internom bezbednošću.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si skenirao QR sa tuđeg ekrana?" data-en="Did you scan a QR from someone else screen?">Da li si skenirao QR sa tuđeg ekrana?</li>
            <li data-sr="Da li ti je neko rekao tačno koji meni da otvoriš?" data-en="Did someone tell you exactly which menu to open?">Da li ti je neko rekao tačno koji meni da otvoriš?</li>
            <li data-sr="Da li vidiš nove uređaje u listi?" data-en="Do you see new devices in the list?">Da li vidiš nove uređaje u listi?</li>
            <li data-sr="Da li su kontakti dobili poruke o novcu?" data-en="Did contacts get money messages?">Da li su kontakti dobili poruke o novcu?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="QR za povezivanje je kao ključ; ne skeniramo ga za strance." data-en="A linking QR is like a key; we do not scan it for strangers.">QR za povezivanje je kao ključ; ne skeniramo ga za strance.</li>
            <li data-sr="Hajde da odjavimo sve uređaje i proverimo šefa drugim brojem." data-en="Let us log out all devices and check the boss on another number.">Hajde da odjavimo sve uređaje i proverimo šefa drugim brojem.</li>
            <li data-sr="Pravo IT šalje tiket; ovaj čet nije dovoljan." data-en="Real IT sends a ticket; this chat is not enough.">Pravo IT šalje tiket; ovaj čet nije dovoljan.</li>
            <li data-sr="Ako ne razumeš upozorenje na ekranu, stani i pitaj uživo." data-en="If you do not understand the on-screen warning, stop and ask in person.">Ako ne razumeš upozorenje na ekranu, stani i pitaj uživo.</li>
          </ul>
        </div>
      </div>
    </section>
`
};
