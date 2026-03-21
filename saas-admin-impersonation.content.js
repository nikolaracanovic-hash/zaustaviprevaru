window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["saas-admin-impersonation"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: lažni SaaS administrator" data-en="Introduction: fake SaaS administrator">Uvod: lažni SaaS administrator</h2>
      <p data-sr="U firmama se često javlja poruka koja glumi IT, workspace admin ili podršku alata za poštu, chat ili HR. Napadač ne mora hakirati ceo sistem: dovoljno je da ubedi jednog korisnika da odobri aplikaciju, potvrdi prijavu ili otvori link koji izgleda kao administrativno upozorenje." data-en="In companies, a message often pretends to be IT, workspace admin, or support for mail, chat, or HR tools. The attacker does not have to hack the whole system: convincing one user to approve an app, confirm sign-in, or open an admin-looking alert link is enough.">U firmama se često javlja poruka koja glumi IT, workspace admin ili podršku alata za poštu, chat ili HR. Napadač ne mora hakirati ceo sistem: dovoljno je da ubedi jednog korisnika da odobri aplikaciju, potvrdi prijavu ili otvori link koji izgleda kao administrativno upozorenje.</p>
      <p data-sr="Zato je šteta često brza i široka: jedan klik u tenant okruženju može otvoriti pristup pošti, fajlovima ili kontaktima više ljudi." data-en="Damage can be fast and broad: one click in a tenant environment can open access to mail, files, or contacts for multiple people.">Zato je šteta često brza i široka: jedan klik u tenant okruženju može otvoriti pristup pošti, fajlovima ili kontaktima više ljudi.</p>
      <div class="callout" data-sr="<strong>Model:</strong> poruka admin → link ili aplikacija → prag (odobrenje/prijava) → pristup tenantu → zloupotreba." data-en="<strong>Model:</strong> admin message → link or app → threshold (approval/sign-in) → tenant access → abuse."><strong>Model:</strong> poruka admin → link ili aplikacija → prag (odobrenje/prijava) → pristup tenantu → zloupotreba.</div>
    </section>
    <section class="card">
      <h2 data-sr="Zašto prolazi u organizacijama" data-en="Why it works in organizations">Zašto prolazi u organizacijama</h2>
      <p data-sr="Korisnici su navikli da poslovni alati šalju upozorenja i da IT traži brzu reakciju. Napadač kopira taj ton i dodaje rok." data-en="Users are used to business tools sending alerts and IT asking for quick action. The attacker copies that tone and adds a deadline.">Korisnici su navikli da poslovni alati šalju upozorenja i da IT traži brzu reakciju. Napadač kopira taj ton i dodaje rok.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Signali u poruci" data-en="Signals in the message">Signali u poruci</div>
          <ul class="bullets">
            <li data-sr="Hitnost i formalan jezik koji deluje kao sistemska obaveza." data-en="Formal urgent language that feels like a system duty.">Hitnost i formalan jezik koji deluje kao sistemska obaveza.</li>
            <li data-sr="Link ka aplikaciji ili prijavi koja traži odobrenje." data-en="A link to an app or sign-in that demands approval.">Link ka aplikaciji ili prijavi koja traži odobrenje.</li>
            <li data-sr="Tvrdnja da će se nalog zaključati ili pristup ukinuti." data-en="A claim that the account will be locked or access removed.">Tvrdnja da će se nalog zaključati ili pristup ukinuti.</li>
            <li data-sr="Zahtev koji izgleda kao rutina, ne kao prevara." data-en="A request that looks routine, not like fraud.">Zahtev koji izgleda kao rutina, ne kao prevara.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Operativni cilj" data-en="Operational goal">Operativni cilj</div>
          <ul class="bullets">
            <li data-sr="Odobrenje OAuth aplikacije sa širokim opsegom." data-en="Approval of an OAuth app with broad scope.">Odobrenje OAuth aplikacije sa širokim opsegom.</li>
            <li data-sr="Prikupljanje kredencijala kroz lažnu prijavu." data-en="Credential harvesting through a fake sign-in.">Prikupljanje kredencijala kroz lažnu prijavu.</li>
            <li data-sr="Pristup pošti radi BEC i širenja napada." data-en="Mail access for BEC and spreading the attack.">Pristup pošti radi BEC i širenja napada.</li>
            <li data-sr="Promena podešavanja ili dodavanje pravila u tenantu." data-en="Changing settings or adding rules in the tenant.">Promena podešavanja ili dodavanje pravila u tenantu.</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching).">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Faze se često zbiju u kratko vreme; obrazac ostaje isti: kontakt → poverenje → prag → zloupotreba." data-en="Phases often compress into a short time; the pattern stays: contact → trust → threshold → abuse.">Faze se često zbiju u kratko vreme; obrazac ostaje isti: kontakt → poverenje → prag → zloupotreba.</p>
      <article class="phase ">
        <h3 class="phase-title" data-sr="Faza 1 — Kontakt: admin alert ili lažni IT" data-en="Phase 1 — Contact: admin alert or fake IT">Faza 1 — Kontakt: admin alert ili lažni IT</h3>
        <p data-sr="Stiže imejl, chat ili SMS sa temom bezbednosti, isteka licence ili verifikacije naloga. Pošiljalac može imati slično ime kao pravi tim." data-en="Email, chat, or SMS arrives about security, license expiry, or account verification. The sender name may resemble a real team.">Stiže imejl, chat ili SMS sa temom bezbednosti, isteka licence ili verifikacije naloga. Pošiljalac može imati slično ime kao pravi tim.</p>
        <p data-sr="Korisnik ne proverava interni kanal jer poruka deluje sistemski." data-en="The user skips the internal channel because the message feels system-driven.">Korisnik ne proverava interni kanal jer poruka deluje sistemski.</p>
        <ul class="bullets">
            <li data-sr="Poruka traži jedan brz korak da bi se nastavilo radno mesto." data-en="The message asks for one fast step so work can continue.">Poruka traži jedan brz korak da bi se nastavilo radno mesto.</li>
            <li data-sr="Link vodi ka stranici koja liči na poznat cloud brend." data-en="The link leads to a page resembling a known cloud brand.">Link vodi ka stranici koja liči na poznat cloud brend.</li>
            <li data-sr="Ton je blag, ali rok je kratak." data-en="The tone is mild but the deadline is short.">Ton je blag, ali rok je kratak.</li>
            <li data-sr="Nema detalja koji bi mogli da se provere u tiket sistemu." data-en="There are no details you could verify in a ticket system.">Nema detalja koji bi mogli da se provere u tiket sistemu.</li>
          </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik klikne na link umesto da proveri IT službu." data-en="<strong>Threshold:</strong> the user clicks the link instead of checking with IT."><strong>Prag faze:</strong> korisnik klikne na link umesto da proveri IT službu.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Prijava ili ekran dozvola" data-en="Phase 2 — Sign-in or consent screen">Faza 2 — Prijava ili ekran dozvola</h3>
        <p data-sr="Korisnik unosi lozinku ili klikne Allow za aplikaciju koja traži širok pristup. U tenant scenariju jedan odobreni pristup može biti dovoljan." data-en="The user enters a password or clicks Allow for an app requesting broad access. In a tenant scenario, one approved access can be enough.">Korisnik unosi lozinku ili klikne Allow za aplikaciju koja traži širok pristup. U tenant scenariju jedan odobreni pristup može biti dovoljan.</p>
        <ul class="bullets">
            <li data-sr="Ekran izgleda poznato jer koristi isti brend login." data-en="The screen looks familiar because it uses the same brand login.">Ekran izgleda poznato jer koristi isti brend login.</li>
            <li data-sr="Lista dozvola je duga i retko se čita do kraja." data-en="The permission list is long and rarely read fully.">Lista dozvola je duga i retko se čita do kraja.</li>
            <li data-sr="Korisnik želi brzo da zatvori zadatak." data-en="The user wants to close the task quickly.">Korisnik želi brzo da zatvori zadatak.</li>
            <li data-sr="MFA se potvrdi ako je napadač već pokrenuo prijavu." data-en="MFA is confirmed if the attacker already started sign-in.">MFA se potvrdi ako je napadač već pokrenuo prijavu.</li>
          </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
            <li><a href="oauth-consent-phishing.html" data-sr="OAuth fišing" data-en="OAuth consent phishing">OAuth fišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> uspešna autentifikacija ili odobrena aplikacija za pristup sadržaju." data-en="<strong>Threshold:</strong> successful authentication or an approved app for content access."><strong>Prag faze:</strong> uspešna autentifikacija ili odobrena aplikacija za pristup sadržaju.</div>
      </article>
      <article class="phase ">
        <h3 class="phase-title" data-sr="Faza 3 — Tiha faza: pravila i integracije" data-en="Phase 3 — Quiet phase: rules and integrations">Faza 3 — Tiha faza: pravila i integracije</h3>
        <p data-sr="Napadač dodaje prosleđivanje, čita poštu, povezuje dodatne aplikacije ili priprema lažne fakture iz pravog konteksta." data-en="The attacker adds forwarding, reads mail, connects more apps, or prepares fake invoices from real context.">Napadač dodaje prosleđivanje, čita poštu, povezuje dodatne aplikacije ili priprema lažne fakture iz pravog konteksta.</p>
        <p data-sr="Korisnik ne vidi očiglednu štetu prvih sati." data-en="The user sees no obvious harm for the first hours.">Korisnik ne vidi očiglednu štetu prvih sati.</p>
        <ul class="bullets">
            <li data-sr="Manje upadljive izmene u podešavanjima naloga." data-en="Less visible changes in account settings.">Manje upadljive izmene u podešavanjima naloga.</li>
            <li data-sr="Pretraga po ključnim rečima u pošti." data-en="Keyword search in mail.">Pretraga po ključnim rečima u pošti.</li>
            <li data-sr="Prikupljanje kontakata za finansije." data-en="Collecting finance contacts.">Prikupljanje kontakata za finansije.</li>
            <li data-sr="Čekanje trenutka za uverljivu poruku o uplati." data-en="Waiting for a moment to send a convincing payment message.">Čekanje trenutka za uverljivu poruku o uplati.</li>
          </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> postoji stabilan pristup bez novog učešća žrtve." data-en="<strong>Threshold:</strong> stable access exists without further victim interaction."><strong>Prag faze:</strong> postoji stabilan pristup bez novog učešća žrtve.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Zloupotreba: BEC ili širenje" data-en="Phase 4 — Abuse: BEC or spread">Faza 4 — Zloupotreba: BEC ili širenje</h3>
        <p data-sr="Iz naloga odlaze zahtevi za promenu uplatnice, hitne transfere ili novi fišing linkovi ka kolegama." data-en="The account sends payment change requests, urgent transfers, or new phishing links to colleagues.">Iz naloga odlaze zahtevi za promenu uplatnice, hitne transfere ili novi fišing linkovi ka kolegama.</p>
        <ul class="bullets">
            <li data-sr="Poruke koriste stvarnu prepisku." data-en="Messages use real thread context.">Poruke koriste stvarnu prepisku.</li>
            <li data-sr="Primaoci veruju pošiljaocu jer je adresa ista." data-en="Recipients trust the sender because the address is the same.">Primaoci veruju pošiljaocu jer je adresa ista.</li>
            <li data-sr="Finansijski tim je pod pritiskom roka." data-en="The finance team faces deadline pressure.">Finansijski tim je pod pritiskom roka.</li>
            <li data-sr="Napad se širi na druge naloge istom šemom." data-en="The attack spreads to other accounts with the same pattern.">Napad se širi na druge naloge istom šemom.</li>
          </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="business-email-compromise.html" data-sr="BEC" data-en="Business email compromise">BEC</a></li>
            <li><a href="invoice-fraud.html" data-sr="Prevara faktura" data-en="Invoice fraud">Prevara faktura</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> spolja se traži novac ili osetljivi podatak uz lažnu potvrdu iz kompromitovanog naloga." data-en="<strong>Threshold:</strong> money or sensitive data is requested externally with fake confirmation from the compromised account."><strong>Prag faze:</strong> spolja se traži novac ili osetljivi podatak uz lažnu potvrdu iz kompromitovanog naloga.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Otkrivanje i haotičan odgovor" data-en="Phase 5 — Discovery and chaotic response">Faza 5 — Otkrivanje i haotičan odgovor</h3>
        <p data-sr="Prvi signal je čudan mejl, blokirana transakcija ili upozorenje od kolega. Često sledi hitno menjanje lozinke bez brisanja aplikacija." data-en="The first signal is a strange email, blocked transaction, or colleague alert. A rushed password change without removing apps often follows.">Prvi signal je čudan mejl, blokirana transakcija ili upozorenje od kolega. Često sledi hitno menjanje lozinke bez brisanja aplikacija.</p>
        <ul class="bullets">
            <li data-sr="Korisnik ne zna gde se vide odobrene aplikacije." data-en="The user does not know where approved apps are listed.">Korisnik ne zna gde se vide odobrene aplikacije.</li>
            <li data-sr="Tenant logovi deluju nepristupačno laiku." data-en="Tenant logs feel inaccessible to non-experts.">Tenant logovi deluju nepristupačno laiku.</li>
            <li data-sr="Strah od kazne usporava prijavu incidenta." data-en="Fear of blame slows incident reporting.">Strah od kazne usporava prijavu incidenta.</li>
            <li data-sr="Napadač može i dalje imati pristup preko integracije." data-en="The attacker may still have access via an integration.">Napadač može i dalje imati pristup preko integracije.</li>
          </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> incident postane javan, ali sanacija ostane nepotpuna." data-en="<strong>Threshold:</strong> the incident becomes public but remediation stays incomplete."><strong>Prag faze:</strong> incident postane javan, ali sanacija ostane nepotpuna.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Sanacija i drugi talas" data-en="Phase 6 — Cleanup and second wave">Faza 6 — Sanacija i drugi talas</h3>
        <p data-sr="Potrebno je ukloniti aplikacije, opozvati sesije, proveriti administrativne izmene i obavestiti korisnike. Posle toga često stiže lažna pomoć." data-en="Apps must be removed, sessions revoked, admin changes reviewed, and users notified. Fake help often arrives afterward.">Potrebno je ukloniti aplikacije, opozvati sesije, proveriti administrativne izmene i obavestiti korisnike. Posle toga često stiže lažna pomoć.</p>
        <ul class="bullets">
            <li data-sr="IT treba da prođe kroz odobrene aplikacije i pravila." data-en="IT should review approved apps and rules.">IT treba da prođe kroz odobrene aplikacije i pravila.</li>
            <li data-sr="Korisnici treba da znaju da IT ne traži kodove u chatu." data-en="Users should know IT does not ask for codes in chat.">Korisnici treba da znaju da IT ne traži kodove u chatu.</li>
            <li data-sr="Dokumentacija incidenta smanjuje ponovni ulaz." data-en="Incident documentation reduces repeat entry.">Dokumentacija incidenta smanjuje ponovni ulaz.</li>
            <li data-sr="Nova obuka je jeftinija od nove štete." data-en="Training is cheaper than new damage.">Nova obuka je jeftinija od nove štete.</li>
          </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="recovery-scam.html" data-sr="Prevara povraćaja" data-en="Recovery scam">Prevara povraćaja</a></li>
            <li><a href="tech-support-scam.html" data-sr="Lažna tehnička podrška" data-en="Tech support scam">Lažna tehnička podrška</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> organizacija zatvara incident pre nego što su svi kanali uklonjeni ili prihvati lažnu pomoć." data-en="<strong>Threshold:</strong> the organization closes the incident before all channels are removed or accepts fake help."><strong>Prag faze:</strong> organizacija zatvara incident pre nego što su svi kanali uklonjeni ili prihvati lažnu pomoć.</div>
      </article>
    </section>
    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
            <li data-sr="Poruka traži odobrenje aplikacije van standardnog IT procesa." data-en="The message asks for app approval outside the standard IT process.">Poruka traži odobrenje aplikacije van standardnog IT procesa.</li>
            <li data-sr="Link ne vodi na isti domen koji firma koristi u dokumentaciji." data-en="The link does not lead to the same domain the company documents.">Link ne vodi na isti domen koji firma koristi u dokumentaciji.</li>
            <li data-sr="Rok je postavljen tako da nema vremena za tiket." data-en="The deadline is set so there is no time for a ticket.">Rok je postavljen tako da nema vremena za tiket.</li>
            <li data-sr="Traže se MFA kodovi ili potvrda u realnom vremenu uz pritisak." data-en="MFA codes or real-time confirmation are demanded under pressure.">Traže se MFA kodovi ili potvrda u realnom vremenu uz pritisak.</li>
            <li data-sr="Pošiljalac ne može da se potvrdi kroz interni broj ili chat." data-en="The sender cannot be verified through an internal number or chat.">Pošiljalac ne može da se potvrdi kroz interni broj ili chat.</li>
            <li data-sr="Pojavljuje se nepoznata aplikacija u listi integracija." data-en="An unknown app appears in the integrations list.">Pojavljuje se nepoznata aplikacija u listi integracija.</li>
            <li data-sr="Kolege prime poruke o uplati koje niko nije najavio." data-en="Colleagues receive payment messages nobody announced.">Kolege prime poruke o uplati koje niko nije najavio.</li>
            <li data-sr="Isti obrazac se ponavlja posle čišćenja naloga." data-en="The same pattern repeats after account cleanup.">Isti obrazac se ponavlja posle čišćenja naloga.</li>
            <li data-sr="Zahtev dolazi u privatnom kanalu umesto službenom." data-en="The request arrives on a private channel instead of an official one.">Zahtev dolazi u privatnom kanalu umesto službenom.</li>
            <li data-sr="Tekst kopira žargon alata, ali detalji ne odgovaraju vašoj firmi." data-en="The text copies tool jargon, but details do not match your company.">Tekst kopira žargon alata, ali detalji ne odgovaraju vašoj firmi.</li>
          </ul>
    </section>
    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <ol class="steps">
        <li data-sr="Proverite sa IT službom pre bilo kog admin linka iz poruke." data-en="Check with IT before any admin link from a message.">Proverite sa IT službom pre bilo kog admin linka iz poruke.</li>
        <li data-sr="Uporedite domen sa internim uputstvom za prijavu." data-en="Compare the domain to internal sign-in guidance.">Uporedite domen sa internim uputstvom za prijavu.</li>
        <li data-sr="Pregledajte odobrene aplikacije u admin ili korisničkim podešavanjima." data-en="Review approved apps in admin or user settings.">Pregledajte odobrene aplikacije u admin ili korisničkim podešavanjima.</li>
        <li data-sr="Tražite broj incidenta ili tiket pre radnje." data-en="Ask for a ticket or incident ID before acting.">Tražite broj incidenta ili tiket pre radnje.</li>
        <li data-sr="Ne šaljite MFA kod nikome ko vas zove ili piše nezvanično." data-en="Do not send MFA codes to anyone who calls or messages unofficially.">Ne šaljite MFA kod nikome ko vas zove ili piše nezvanično.</li>
        <li data-sr="Proverite poslednje administrativne izmene ako imate pristup logovima." data-en="Review recent admin changes if you have log access.">Proverite poslednje administrativne izmene ako imate pristup logovima.</li>
        <li data-sr="Obavestite kolege ako sumnjate na kompromitovani nalog." data-en="Notify colleagues if you suspect a compromised account.">Obavestite kolege ako sumnjate na kompromitovani nalog.</li>
        <li data-sr="Koristite bookmark ili aplikaciju za prijavu, ne link iz upozorenja." data-en="Use a bookmark or app to sign in, not a link from the alert.">Koristite bookmark ili aplikaciju za prijavu, ne link iz upozorenja.</li>
      </ol>
    </section>
    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
      <ul class="bullets">
            <li data-sr="Da li je IT najavio ovu promenu unapred?" data-en="Did IT announce this change in advance?">Da li je IT najavio ovu promenu unapred?</li>
            <li data-sr="Da li postoji otvoren tiket koji se poklapa sa porukom?" data-en="Is there an open ticket that matches the message?">Da li postoji otvoren tiket koji se poklapa sa porukom?</li>
            <li data-sr="Da li link vodi na tačan domen koji firma koristi?" data-en="Does the link lead to the exact domain the company uses?">Da li link vodi na tačan domen koji firma koristi?</li>
            <li data-sr="Da li aplikacija zahteva pristup pošti ili fajlovima?" data-en="Does the app request mail or file access?">Da li aplikacija zahteva pristup pošti ili fajlovima?</li>
            <li data-sr="Da li je rok realan za internu proceduru?" data-en="Is the deadline realistic for internal procedure?">Da li je rok realan za internu proceduru?</li>
            <li data-sr="Da li je pošiljalac adresa koju uvek koristite za IT?" data-en="Is the sender address the one you always use for IT?">Da li je pošiljalac adresa koju uvek koristite za IT?</li>
            <li data-sr="Da li neko drugi iz tima dobija istu poruku?" data-en="Is anyone else on the team getting the same message?">Da li neko drugi iz tima dobija istu poruku?</li>
            <li data-sr="Da li biste isto uradili da vas je neko pitao uživo bez ID kartice?" data-en="Would you do the same if someone asked in person without an ID badge?">Da li biste isto uradili da vas je neko pitao uživo bez ID kartice?</li>
            <li data-sr="Da li znate ko u firmi odobrava nove aplikacije?" data-en="Do you know who approves new apps in the company?">Da li znate ko u firmi odobrava nove aplikacije?</li>
            <li data-sr="Da li možete da odložite klik dok proverite drugi kanal?" data-en="Can you delay the click while you verify on another channel?">Da li možete da odložite klik dok proverite drugi kanal?</li>
            <li data-sr="Da li je poruka na jeziku koji vaša IT služba stvarno koristi?" data-en="Is the message in the language your IT team actually uses?">Da li je poruka na jeziku koji vaša IT služba stvarno koristi?</li>
            <li data-sr="Da li je sumnjivo što se traži hitnost upravo sada?" data-en="Is it suspicious that urgency is demanded right now?">Da li je sumnjivo što se traži hitnost upravo sada?</li>
          </ul>
    </section>
    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Obavestite IT i prekinite radnje na linku." data-en="Notify IT and stop actions on the link.">Obavestite IT i prekinite radnje na linku.</li>
        <li data-sr="Uklonite sumnjive aplikacije i opozovite sesije." data-en="Remove suspicious apps and revoke sessions.">Uklonite sumnjive aplikacije i opozovite sesije.</li>
        <li data-sr="Proverite prosleđivanje, filtere i deljenje." data-en="Check forwarding, filters, and sharing.">Proverite prosleđivanje, filtere i deljenje.</li>
        <li data-sr="Promenite lozinku i MFA tek posle uklanjanja integracija gde je moguće." data-en="Change password and MFA after removing integrations where possible.">Promenite lozinku i MFA tek posle uklanjanja integracija gde je moguće.</li>
        <li data-sr="Dokumentujte poruke i vremena za interni izveštaj." data-en="Document messages and times for an internal report.">Dokumentujte poruke i vremena za interni izveštaj.</li>
      </ol>
    </section>
    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li je firma poslala to upozorenje kroz službeni kanal?" data-en="Did the company send that alert through an official channel?">Da li je firma poslala to upozorenje kroz službeni kanal?</li>
            <li data-sr="Koja aplikacija je poslednja odobrena na nalogu?" data-en="Which app was last approved on the account?">Koja aplikacija je poslednja odobrena na nalogu?</li>
            <li data-sr="Da li neko traži novac od kolega u ime žrtve?" data-en="Is anyone asking colleagues for money in the victim name?">Da li neko traži novac od kolega u ime žrtve?</li>
            <li data-sr="Da li postoji tiket broj koji se može proveriti?" data-en="Is there a ticket number that can be verified?">Da li postoji tiket broj koji se može proveriti?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Ne klikćemo dok IT ne potvrdi; to je normalna procedura." data-en="We do not click until IT confirms; that is normal procedure.">Ne klikćemo dok IT ne potvrdi; to je normalna procedura.</li>
            <li data-sr="Jedna odobrena aplikacija može biti vrata celom timu." data-en="One approved app can be a door to the whole team.">Jedna odobrena aplikacija može biti vrata celom timu.</li>
            <li data-sr="Prvo uklanjamo pristup trećim stranama, pa menjamo lozinku." data-en="We remove third-party access first, then change the password.">Prvo uklanjamo pristup trećim stranama, pa menjamo lozinku.</li>
            <li data-sr="Sačuvaj screenshot pre brisanja kao dokaz." data-en="Save a screenshot before deletion as evidence.">Sačuvaj screenshot pre brisanja kao dokaz.</li>
          </ul>
        </div>
      </div>
    </section>
`
};
