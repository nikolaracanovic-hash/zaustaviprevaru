window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["fake-company-beneficial-owner-filing-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
      <p data-sr="Lažni kontakt koristi jezik registra i RBO da izvuče uplatu ili poverljive podatke pre zvanične provere." data-en="The fraudster sends a message in the name of the business registry or a regulatory portal claiming you must urgently update beneficial ownership (UBO) data, fix a registration error, or pay an administrative fee so the company is not blocked.">Lažni kontakt koristi jezik registra i RBO da izvuče uplatu ili poverljive podatke pre zvanične provere.</p>
      <p data-sr="Krajnji cilj je novac ili kredencijali, ne zakonita prijava." data-en="The goal is payment to a third account, sign-in on a fake portal, or handing over eTax or banking credentials under a compliance pretext.">Krajnji cilj je novac ili kredencijali, ne zakonita prijava.</p>
      <div class="callout" data-sr="<strong>Model:</strong> upozorenje → RBO/registar → rok → link ili račun → serija naknada → nema traga u pravom registru." data-en="<strong>Model:</strong> warning → UBO/registry → deadline → link or account → fee series → no trace in the real registry."><strong>Model:</strong> upozorenje → RBO/registar → rok → link ili račun → serija naknada → nema traga u pravom registru.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi" data-en="How it generally works">Kako generalno radi</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Priprema" data-en="Setup">Priprema</div>
          <ul class="bullets">
            <li data-sr="Javni podaci o firmi koriste se da poruka deluje lično." data-en="Public company data is used so the message feels personal.">Javni podaci o firmi koriste se da poruka deluje lično.</li>
            <li data-sr="Domen imejla ili linka liči na državni, ali je pogrešno slovo ili sufiks." data-en="Email domain or link resembles the state but has a wrong letter or suffix.">Domen imejla ili linka liči na državni, ali je pogrešno slovo ili sufiks.</li>
            <li data-sr="PDF sa logotipom i tabelom rokova izgleda uverljivo." data-en="A PDF with logo and deadline table looks credible.">PDF sa logotipom i tabelom rokova izgleda uverljivo.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Naplata" data-en="Billing">Naplata</div>
          <ul class="bullets">
            <li data-sr="Naknada za otključavanje evidencije ili brzu obradu." data-en="Fee to unlock the record or expedite processing.">Naknada za otključavanje evidencije ili brzu obradu.</li>
            <li data-sr="Druga naknada za reviziju podataka ili potpis digitalnog sertifikata." data-en="Second fee for data review or digital certificate signing.">Druga naknada za reviziju podataka ili potpis digitalnog sertifikata.</li>
            <li data-sr="Zahtev za punim pristupom banci ili eUpravi radi verifikacije vlasnika." data-en="Request for full e-government or bank access to verify owners.">Zahtev za punim pristupom banci ili eUpravi radi verifikacije vlasnika.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching)">Hronološki tok (faze + grananja)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Obaveštenje o obavezi" data-en="Phase 1 — Duty notification">Faza 1 — Obaveštenje o obavezi</h3>
        <p data-sr="Hitno obaveštenje o obavezi u registru sa kratkim rokom." data-en="Email or call cites an end-of-day or end-of-week deadline for UBO update or a fine.">Hitno obaveštenje o obavezi u registru sa kratkim rokom.</p>
        <ul class="bullets">
          <li data-sr="signal: niste sami pokrenuli postupak na zvaničnom portalu." data-en="signal: you did not start the procedure on the official portal yourself.">signal: niste sami pokrenuli postupak na zvaničnom portalu.</li>
          <li data-sr="signal: link vodi na domen koji nije identičan zvaničnom sajtu registra." data-en="signal: link leads to a domain not identical to the registry's official site.">signal: link vodi na domen koji nije identičan zvaničnom sajtu registra.</li>
          <li data-sr="signal: traže se lozinke ili kodovi za prijavu umesto uputstva na postojeći nalog." data-en="signal: passwords or login codes are requested instead of directing you to your existing account.">signal: traže se lozinke ili kodovi za prijavu umesto uputstva na postojeći nalog.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> odgovorni u firmi otvara poruku i razmatra klik." data-en="<strong>Phase threshold:</strong> a company officer opens the message and considers clicking."><strong>Prag faze:</strong> odgovorni u firmi otvara poruku i razmatra klik.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Lažni portal ili forma" data-en="Phase 2 — Fake portal or form">Faza 2 — Lažni portal ili forma</h3>
        <p data-sr="Prikupljanje poslovnih i ličnih podataka kroz kloniranu stranu." data-en="The form asks registration number, tax ID, owner names, account numbers, and a username for e-registry.">Prikupljanje poslovnih i ličnih podataka kroz kloniranu stranu.</p>
        <ul class="bullets">
          <li data-sr="signal: forma traži i lozinku eBanke ili SMS kod." data-en="signal: form asks for e-banking password or SMS code.">signal: forma traži i lozinku eBanke ili SMS kod.</li>
          <li data-sr="signal: nema dvofaktorske zaštite kao na pravom portalu." data-en="signal: no two-factor flow like the real portal.">signal: nema dvofaktorske zaštite kao na pravom portalu.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
            <li><a href="egovernment-login-phishing.html" data-sr="Lažna prijava eUprave" data-en="E-government phishing">Lažna prijava eUprave</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> uneti su osetljivi podaci ili kredencijali." data-en="<strong>Phase threshold:</strong> sensitive data or credentials were entered."><strong>Prag faze:</strong> uneti su osetljivi podaci ili kredencijali.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Prva uplata" data-en="Phase 3 — First payment">Faza 3 — Prva uplata</h3>
        <p data-sr="Prvi novčani zahtev sledi posle prikupljenih podataka." data-en="An administrative or processing fee is requested to a consultant or registry account.">Prvi novčani zahtev sledi posle prikupljenih podataka.</p>
        <ul class="bullets">
          <li data-sr="signal: primalac nije budžetski račun države za tu vrstu takse." data-en="signal: payee is not the state's treasury account for that fee type.">signal: primalac nije budžetski račun države za tu vrstu takse.</li>
          <li data-sr="signal: iznos ne postoji u javnoj tarifi na sajtu registra." data-en="signal: amount is not in the public tariff on the registry site.">signal: iznos ne postoji u javnoj tarifi na sajtu registra.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> izvršena je uplata ili nalog za plaćanje." data-en="<strong>Phase threshold:</strong> a payment or payment order was executed."><strong>Prag faze:</strong> izvršena je uplata ili nalog za plaćanje.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Ispravka greške" data-en="Phase 4 — Error correction">Faza 4 — Ispravka greške</h3>
        <p data-sr="Lažna greška pokreće drugu uplatu." data-en="They say the filing has an error and another payment is needed for reprocessing.">Lažna greška pokreće drugu uplatu.</p>
        <ul class="bullets">
          <li data-sr="signal: ista greška se ponavlja posle svake uplate." data-en="signal: the same error repeats after every payment.">signal: ista greška se ponavlja posle svake uplate.</li>
          <li data-sr="signal: ne daju se brojevi predmeta koje službenik registra može proveriti." data-en="signal: no reference numbers a registry clerk can verify are given.">signal: ne daju se brojevi predmeta koje službenik registra može proveriti.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="compliance-fee-scam.html" data-sr="Naknade usklađenosti" data-en="Compliance fee scam">Naknade usklađenosti</a></li>
            <li><a href="advance-fee-fraud.html" data-sr="Uplata unapred" data-en="Advance-fee fraud">Uplata unapred</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> firma je platila više od jedne naknade." data-en="<strong>Phase threshold:</strong> the company paid more than one fee."><strong>Prag faze:</strong> firma je platila više od jedne naknade.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Provera kod registra" data-en="Phase 5 — Registry check">Faza 5 — Provera kod registra</h3>
        <p data-sr="Zvanična služba ne potvrđuje hitnu obavezu iz poruke." data-en="When you contact the real registry, there is often no request in your name or payment on record.">Zvanična služba ne potvrđuje hitnu obavezu iz poruke.</p>
        <ul class="bullets">
          <li data-sr="signal: u sistemu nema podneska koji odgovara datim brojevima." data-en="signal: no filing in the system matches the given numbers.">signal: u sistemu nema podneska koji odgovara datim brojevima.</li>
          <li data-sr="signal: službenik kaže da se RBO rešava kroz uobičajeni portal bez trećeg lica." data-en="signal: staff say UBO is handled through the usual portal without a third party.">signal: službenik kaže da se RBO rešava kroz uobičajeni portal bez trećeg lica.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> zvanična potvrda ne postoji." data-en="<strong>Phase threshold:</strong> there is no official confirmation."><strong>Prag faze:</strong> zvanična potvrda ne postoji.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Posledice i prijava" data-en="Phase 6 — Consequences and report">Faza 6 — Posledice i prijava</h3>
        <p data-sr="Krađa identiteta firme može trajati posle prevare naknade." data-en="If credentials were stolen, account misuse or fake payment orders may follow.">Krađa identiteta firme može trajati posle prevare naknade.</p>
        <ul class="bullets">
          <li data-sr="signal: u eBanking se javljaju nalozi koje niste kreirali." data-en="signal: e-banking shows orders you did not create.">signal: u eBanking se javljaju nalozi koje niste kreirali.</li>
          <li data-sr="signal: imejl adrese u firmi šalju nove lažne zahteve dobavljačima." data-en="signal: company addresses send new fake requests to suppliers.">signal: imejl adrese u firmi šalju nove lažne zahteve dobavljačima.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="business-email-compromise.html" data-sr="BEC" data-en="BEC">BEC</a></li>
            <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> potrebna je obnova lozinki i obaveštavanje banke." data-en="<strong>Phase threshold:</strong> password reset and bank notification are needed."><strong>Prag faze:</strong> potrebna je obnova lozinki i obaveštavanje banke.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Hitna obaveza za RBO koja stiže samo imejlom bez pisma u elektronskoj sandučetu državnog portala." data-en="Urgent UBO duty arrives only by email without mail in the state portal inbox.">Hitna obaveza za RBO koja stiže samo imejlom bez pisma u elektronskoj sandučetu državnog portala.</li>
        <li data-sr="Link ka prijavi nije na istom domenu koji ručno ukucate u pregledaču." data-en="The application link is not on the domain you manually type in the browser.">Link ka prijavi nije na istom domenu koji ručno ukucate u pregledaču.</li>
        <li data-sr="Traže se lozinka eBanke ili kod iz aplikacije." data-en="E-banking password or app code is requested.">Traže se lozinka eBanke ili kod iz aplikacije.</li>
        <li data-sr="Uplata ide konsultantu umesto na objavljeni poziv na broj države." data-en="Payment goes to a consultant instead of the published state payment reference.">Uplata ide konsultantu umesto na objavljeni poziv na broj države.</li>
        <li data-sr="Rok kraći od uobičajenog roka za zakonske izmene bez obrazloženja." data-en="Deadline shorter than usual legal amendment periods without explanation.">Rok kraći od uobičajenog roka za zakonske izmene bez obrazloženja.</li>
        <li data-sr="Ista poruka stigla više firmi iz istog sektora (šablon)." data-en="The same message reached multiple firms in the same sector (template).">Ista poruka stigla više firmi iz istog sektora (šablon).</li>
        <li data-sr="Nema potpisa odgovornog lica koga možete proveriti u registru." data-en="No signature from a verifiable responsible person.">Nema potpisa odgovornog lica koga možete proveriti u registru.</li>
        <li data-sr="PDF ima nisku rezoluciju ili pogrešan naziv institucije." data-en="PDF is low resolution or has wrong institution name.">PDF ima nisku rezoluciju ili pogrešan naziv institucije.</li>
        <li data-sr="Telefonski broj iz poruke ne postoji na zvaničnom sajtu." data-en="Phone number from message is not on the official website.">Telefonski broj iz poruke ne postoji na zvaničnom sajtu.</li>
        <li data-sr="Zabranjuju konsultaciju sa vašim knjigovođom ili advokatom." data-en="Consultation with your accountant or lawyer is forbidden.">Zabranjuju konsultaciju sa vašim knjigovođom ili advokatom.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Kanal" data-en="Channel">Kanal</div>
          <ul class="bullets">
            <li data-sr="Otvorite sajt registra ručnim kucanjem domena, bez klika na link." data-en="Open the registry site by typing the domain, not clicking the link.">Otvorite sajt registra ručnim kucanjem domena, bez klika na link.</li>
            <li data-sr="Uporedite tekst obaveštenja sa vestima na zvaničnom sajtu." data-en="Compare the notice text with news on the official site.">Uporedite tekst obaveštenja sa vestima na zvaničnom sajtu.</li>
            <li data-sr="Pozovite infoliniju registra sa objavljenog broja." data-en="Call the registry infoline from the published number.">Pozovite infoliniju registra sa objavljenog broja.</li>
            <li data-sr="Proverite da li postoji podnesak u vašem nalogu na pravom portalu." data-en="Check whether a filing exists in your account on the real portal.">Proverite da li postoji podnesak u vašem nalogu na pravom portalu.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Novac" data-en="Money">Novac</div>
          <ul class="bullets">
            <li data-sr="Uporedite traženi iznos sa javnom tarifom." data-en="Compare requested amount to the public tariff.">Uporedite traženi iznos sa javnom tarifom.</li>
            <li data-sr="Ne plaćajte dok advokat ili računovođa ne potvrdi osnov." data-en="Do not pay until lawyer or accountant confirms the basis.">Ne plaćajte dok advokat ili računovođa ne potvrdi osnov.</li>
            <li data-sr="Obavestite IT ako su uneti kredencijali na sumnjivoj stranici." data-en="Notify IT if credentials were entered on a suspicious page.">Obavestite IT ako su uneti kredencijali na sumnjivoj stranici.</li>
            <li data-sr="Resetujte lozinke za portale ako postoji mogućnost curenja." data-en="Reset portal passwords if leakage is possible.">Resetujte lozinke za portale ako postoji mogućnost curenja.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
      <ul class="bullets">
        <li data-sr="Da li smo sami pokrenuli isti postupak na zvaničnom portalu?" data-en="Did we start the same procedure on the official portal ourselves?">Da li smo sami pokrenuli isti postupak na zvaničnom portalu?</li>
        <li data-sr="Da li domen linka tačno odgovara zvaničnom domenu?" data-en="Does the link domain exactly match the official domain?">Da li domen linka tačno odgovara zvaničnom domenu?</li>
        <li data-sr="Da li registar potvrđuje postojanje ovog zahteva telefonom?" data-en="Does the registry confirm this request by phone?">Da li registar potvrđuje postojanje ovog zahteva telefonom?</li>
        <li data-sr="Da li postoji podnesak u našem e-sandučetu državnog sistema?" data-en="Is there a filing in our state e-inbox?">Da li postoji podnesak u našem e-sandučetu državnog sistema?</li>
        <li data-sr="Da li primalac uplate odgovara budžetskom računu?" data-en="Does the payee match a treasury account?">Da li primalac uplate odgovara budžetskom računu?</li>
        <li data-sr="Da li je iznos u skladu sa objavljenom tarifom?" data-en="Is the amount in line with the published tariff?">Da li je iznos u skladu sa objavljenom tarifom?</li>
        <li data-sr="Da li su traženi kredencijali širi nego što forma treba?" data-en="Are requested credentials broader than the form should need?">Da li su traženi kredencijali širi nego što forma treba?</li>
        <li data-sr="Da li je rok realan u odnosu na ranije rokove iz zakona?" data-en="Is the deadline realistic compared to previous legal deadlines?">Da li je rok realan u odnosu na ranije rokove iz zakona?</li>
        <li data-sr="Da li ista poruka postoji kao upozorenje na forumu ili kod drugih firmi?" data-en="Does the same message appear as a warning online or at other firms?">Da li ista poruka postoji kao upozorenje na forumu ili kod drugih firmi?</li>
        <li data-sr="Da li smo već platili i i dalje traže novu naknadu?" data-en="Have we already paid and they still ask for a new fee?">Da li smo već platili i i dalje traže novu naknadu?</li>
        <li data-sr="Da li IT tim vidi sumnjivu prijavu sa našeg domena?" data-en="Does IT see suspicious logins from our domain?">Da li IT tim vidi sumnjivu prijavu sa našeg domena?</li>
        <li data-sr="Da li bismo ovu uplatu odobrili na upravnom bez dokumentacije?" data-en="Would we approve this payment in management without paperwork?">Da li bismo ovu uplatu odobrili na upravnom bez dokumentacije?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Zaustavite uplate i obavestite finansije i IT." data-en="Stop payments and notify finance and IT.">Zaustavite uplate i obavestite finansije i IT.</li>
        <li data-sr="Pozovite registar na zvanični broj i pitajte za predmet." data-en="Call the registry on the official number and ask about the case.">Pozovite registar na zvanični broj i pitajte za predmet.</li>
        <li data-sr="Promenite lozinke ako je bilo prijave na lažnoj stranici." data-en="Change passwords if there was login on a fake page.">Promenite lozinke ako je bilo prijave na lažnoj stranici.</li>
        <li data-sr="Sačuvajte imejlove, zaglavlja i uplatnice." data-en="Save emails, headers, and payment slips.">Sačuvajte imejlove, zaglavlja i uplatnice.</li>
        <li data-sr="Prijavite incident policiji i CERT-u ako su ukradeni podaci." data-en="Report to police and CERT if data was stolen.">Prijavite incident policiji i CERT-u ako su ukradeni podaci.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Možemo li otvoriti sajt registra bez klika na link iz mejla?" data-en="Can we open the registry site without clicking the email link?">Možemo li otvoriti sajt registra bez klika na link iz mejla?</li>
            <li data-sr="Da li vaš knjigovođa ima isto obaveštenje u sistemu?" data-en="Does your accountant see the same notice in the system?">Da li vaš knjigovođa ima isto obaveštenje u sistemu?</li>
            <li data-sr="Da li je uplata na račun koji se pojavljuje u zvaničnom uputstvu?" data-en="Is payment to an account that appears in official instructions?">Da li je uplata na račun koji se pojavljuje u zvaničnom uputstvu?</li>
            <li data-sr="Da li forma traži više od podataka o vlasnicima?" data-en="Does the form ask for more than ownership data?">Da li forma traži više od podataka o vlasnicima?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Hajde da prvo pozovemo registar, pa tek onda platimo." data-en="Let's call the registry first, then pay.">Hajde da prvo pozovemo registar, pa tek onda platimo.</li>
            <li data-sr="Državni portal ne traži šifru eBanke na ovakvoj formi." data-en="The state portal does not ask for e-banking password on a form like this.">Državni portal ne traži šifru eBanke na ovakvoj formi.</li>
            <li data-sr="Ako je stvarno obavezno, biće i u vašem nalogu na pravom sajtu." data-en="If it is really mandatory, it will also be in your account on the real site.">Ako je stvarno obavezno, biće i u vašem nalogu na pravom sajtu.</li>
            <li data-sr="Jedan dan pauze neće zatvoriti firmu ako je rok lažan." data-en="One day pause will not close the company if the deadline is fake.">Jedan dan pauze neće zatvoriti firmu ako je rok lažan.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
