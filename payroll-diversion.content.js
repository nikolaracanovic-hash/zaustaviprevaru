window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["payroll-diversion"] = {
  raw_html: `
    <!-- 1) UVOD -->
    <section class="card">
      <h2 data-sr="Uvod: kako radi preusmeravanje plata" data-en="Introduction: how payroll diversion works">
        Uvod: kako radi preusmeravanje plata
      </h2>

      <p
        data-sr="Preusmeravanje plata je napad u kome napadač ubedi HR ili finansijsko odeljenje da promeni bankovni račun zaposlenog u platnom sistemu. Napadač se lažno predstavlja kao zaposleni koji želi da ažurira podatke. Sledeća isplata plate odlazi na napadačev račun. Zaposleni otkriva problem tek na isplatni dan."
        data-en="Payroll diversion is an attack in which the attacker convinces HR or the finance department to change an employee's bank account in the payroll system. The attacker impersonates an employee wanting to update their details. The next salary payment goes to the attacker's account. The employee discovers the problem only on payday."
      >Preusmeravanje plata je napad u kome napadač ubedi HR ili finansijsko odeljenje da promeni bankovni račun zaposlenog u platnom sistemu. Napadač se lažno predstavlja kao zaposleni koji želi da ažurira podatke. Sledeća isplata plate odlazi na napadačev račun. Zaposleni otkriva problem tek na isplatni dan.</p>

      <p
        data-sr="Napad je efikasan jer koristi normalan, legitiman proces: zaposleni menjaju bankovne račune s vremena na vreme. HR odeljenja primaju ove zahteve rutinski. Napadač generiše zahtev koji izgleda identično legitimnom — jedina razlika je u tome što niko nije fizički potvrdio identitet podnosioca."
        data-en="The attack is effective because it uses a normal, legitimate process: employees change bank accounts from time to time. HR departments receive these requests routinely. The attacker generates a request that looks identical to a legitimate one — the only difference is that no one physically verified the requester's identity."
      >Napad je efikasan jer koristi normalan, legitiman proces: zaposleni menjaju bankovne račune s vremena na vreme. HR odeljenja primaju ove zahteve rutinski. Napadač generiše zahtev koji izgleda identično legitimnom — jedina razlika je u tome što niko nije fizički potvrdio identitet podnosioca.</p>

      <div class="callout"
        data-sr="<strong>Model:</strong> izviđanje (HR kontakti + imejl format zaposlenog) → lažni imejl zaposlenog ili lažni HR → zahtev za promenom platnog računa → HR ažurira sistem → isplatni dan: gubitak → otkrivanje kasno."
        data-en="<strong>Model:</strong> reconnaissance (HR contacts + employee email format) → fake employee or HR email → payroll account change request → HR updates system → payday: loss → late discovery."
      ><strong>Model:</strong> izviđanje (HR kontakti + imejl format zaposlenog) → lažni imejl zaposlenog ili lažni HR → zahtev za promenom platnog računa → HR ažurira sistem → isplatni dan: gubitak → otkrivanje kasno.</div>

      <div class="callout"
        data-sr="<strong>Prag:</strong> HR ažurira bankovni račun u platnom sistemu bez nezavisne verifikacije identiteta zaposlenog van imejl kanala."
        data-en="<strong>Threshold:</strong> HR updates the bank account in the payroll system without independent verification of employee identity outside the email channel."
      ><strong>Prag:</strong> HR ažurira bankovni račun u platnom sistemu bez nezavisne verifikacije identiteta zaposlenog van imejl kanala.</div>
    </section>

    <!-- 2) KAKO GENERALNO RADI -->
    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika napada" data-en="How it works: attack mechanics">
        Kako generalno radi: mehanika napada
      </h2>

      <p
        data-sr="Ceo napad se bazira na sposobnosti napadača da generiše imejl koji izgleda kao da dolazi od zaposlenog. Može biti lookalike domen, kompromitovani privatni imejl zaposlenog koji je koristio za posao, ili kompromitovani korporativni nalog. Ključna tačka nije tehnička sofisticiranost — nego nedostatak procesa verifikacije u HR-u."
        data-en="The entire attack is based on the attacker's ability to generate an email that looks like it comes from an employee. It can be a lookalike domain, a compromised personal email the employee used for work, or a compromised corporate account. The key point is not technical sophistication — it is the lack of verification process in HR."
      >Ceo napad se bazira na sposobnosti napadača da generiše imejl koji izgleda kao da dolazi od zaposlenog. Može biti lookalike domen, kompromitovani privatni imejl zaposlenog koji je koristio za posao, ili kompromitovani korporativni nalog. Ključna tačka nije tehnička sofisticiranost — nego nedostatak procesa verifikacije u HR-u.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gradi poverenje HR-a u zahtev" data-en="What builds HR trust in the request">Šta gradi poverenje HR-a u zahtev</div>
          <ul class="bullets">
            <li data-sr="imejl izgleda kao da dolazi od zaposlenog." data-en="email looks like it comes from the employee.">imejl izgleda kao da dolazi od zaposlenog.</li>
            <li data-sr="zahtev je isti tip koji HR redovno prima." data-en="request is the same type HR regularly receives.">zahtev je isti tip koji HR redovno prima.</li>
            <li data-sr="ton je uljudan, birokratski, bez upadljive urgencije." data-en="tone is polite, bureaucratic, without obvious urgency.">ton je uljudan, birokratski, bez upadljive urgencije.</li>
            <li data-sr="napadač ponekad zna ime zaposlenog, poziciju i naziv menadžera." data-en="attacker sometimes knows employee name, position, and manager name.">napadač ponekad zna ime zaposlenog, poziciju i naziv menadžera.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Kako se uvodi promena platnog računa" data-en="How the payroll account change is introduced">Kako se uvodi promena platnog računa</div>
          <ul class="bullets">
            <li data-sr="imejl sa zahtevom za promenu bankovnih podataka." data-en="email requesting bank details change.">imejl sa zahtevom za promenu bankovnih podataka.</li>
            <li data-sr="priloženi lažni formular ili pismo sa potpisom." data-en="attached fake form or signed letter.">priloženi lažni formular ili pismo sa potpisom.</li>
            <li data-sr="zahtev dolazi kratko pred isplatni dan: „za sledeću uplatu."." data-en="request arrives just before payday: &ldquo;for the next payment&rdquo;.">zahtev dolazi kratko pred isplatni dan: „za sledeću uplatu"“.</li>
            <li data-sr="napadač daje izgovor: seli se, menja banku, zatvara stari račun." data-en="attacker provides excuse: moving, changing banks, closing old account.">napadač daje izgovor: seli se, menja banku, zatvara stari račun.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 3) HRONOLOŠKI TOK -->
    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)." data-en="Timeline (phases + branching).">
        Hronološki tok (faze + grananja)
      </h2>

      <p class="muted"
        data-sr="Napad se odvija u roku od 1 do 7 dana. Otkrivanje najčešće dolazi tek na isplatni dan."
        data-en="The attack plays out within 1 to 7 days. Discovery most often comes only on payday."
      >Napad se odvija u roku od 1 do 7 dana. Otkrivanje najčešće dolazi tek na isplatni dan.</p>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Izviđanje: HR kontakti i imejl format" data-en="Phase 1 — Reconnaissance: HR contacts and email format">
          Faza 1 — Izviđanje: HR kontakti i imejl format
        </h3>
        <p
          data-sr="Napadač identifikuje HR kontakt (LinkedIn, web sajt), saznaj imejl format firme, i pronalazi zaposlene koji su javno dostupni na mreži. Bira zaposlenog s relativno visokom platom, koji je javno vidljiv ali ne toliko visoko rangiran da zahtev bude posebno nadziran."
          data-en="The attacker identifies the HR contact (LinkedIn, company website), learns the email format of the company, and finds employees publicly available online. They target an employee with a relatively high salary who is publicly visible but not so senior that the request would be subject to extra scrutiny."
        >Napadač identifikuje HR kontakt (LinkedIn, web sajt), saznaj imejl format firme, i pronalazi zaposlene koji su javno dostupni na mreži. Bira zaposlenog s relativno visokom platom, koji je javno vidljiv ali ne toliko visoko rangiran da zahtev bude posebno nadziran.</p>
        <ul class="bullets">
          <li data-sr="signal: imejl adrese zaposlenih predvidive iz LinkedIn profila." data-en="signal: employee email addresses predictable from LinkedIn profiles.">signal: imejl adrese zaposlenih predvidive iz LinkedIn profila.</li>
          <li data-sr="signal: ime HR menadžera ili direktora vidljivo javno." data-en="signal: HR manager or director name publicly visible.">signal: ime HR menadžera ili direktora vidljivo javno.</li>
        </ul>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> napadač ima ime zaposlenog, imejl format firme i direktan kontakt HR-a."
          data-en="<strong>Phase threshold:</strong> attacker has employee name, company email format, and direct HR contact."
        ><strong>Prag faze:</strong> napadač ima ime zaposlenog, imejl format firme i direktan kontakt HR-a.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Priprema lažnog identiteta" data-en="Phase 2 — Fake identity preparation">
          Faza 2 — Priprema lažnog identiteta
        </h3>
        <p
          data-sr="Napadač kreira imejl koji izgleda kao da dolazi od ciljanog zaposlenog. Opcije: registracija lookalike domena, kompromitovanje privatnog imejla zaposlenog, ili lažni display name sa različitom adresom. Priprema pismo ili formular koji izgleda kao interni HR dokument firme."
          data-en="The attacker creates an email that looks like it comes from the targeted employee. Options: lookalike domain registration, compromising the employee's personal email, or fake display name with a different address. They prepare a letter or form that looks like an internal HR document."
        >Napadač kreira imejl koji izgleda kao da dolazi od ciljanog zaposlenog. Opcije: registracija lookalike domena, kompromitovanje privatnog imejla zaposlenog, ili lažni display name sa različitom adresom. Priprema pismo ili formular koji izgleda kao interni HR dokument firme.</p>
        <ul class="bullets">
          <li data-sr="signal: adresa pošiljaoca ima sitnu razliku u domenu koja nije vidljiva bez pažljivog pregleda." data-en="signal: sender address has minor domain difference not visible without careful inspection.">signal: adresa pošiljaoca ima sitnu razliku u domenu koja nije vidljiva bez pažljivog pregleda.</li>
        </ul>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
            <li><a href="business-email-compromise.html" data-sr="Kompromitovanje poslovnog imejla (BEC)" data-en="Business email compromise (BEC)">Kompromitovanje poslovnog imejla (BEC)</a></li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> lažni imejl i dokumentacija su spremni."
          data-en="<strong>Phase threshold:</strong> fake email and documentation are ready."
        ><strong>Prag faze:</strong> lažni imejl i dokumentacija su spremni.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Slanje zahteva HR-u" data-en="Phase 3 — Sending request to HR">
          Faza 3 — Slanje zahteva HR-u
        </h3>
        <p
          data-sr="Napadač šalje zahtev za promenu bankovnih podataka HR-u. Taktika: zahtev dolazi kratko pred isplatni dan. Razlog je uvek legitiman: seljenje, nova banka, zatvaranje starog računa. Prilog je formular ili potpisano pismo koje izgleda kao standardni dokument."
          data-en="The attacker sends the bank details change request to HR. Tactic: request arrives shortly before payday. The reason is always legitimate: moving, new bank, closing old account. Attachment is a form or signed letter that looks like a standard document."
        >Napadač šalje zahtev za promenu bankovnih podataka HR-u. Taktika: zahtev dolazi kratko pred isplatni dan. Razlog je uvek legitiman: seljenje, nova banka, zatvaranje starog računa. Prilog je formular ili potpisano pismo koje izgleda kao standardni dokument.</p>
        <ul class="bullets">
          <li data-sr="fraze: „promenio/la sam banku, molim vas ažurirajte za narednu uplatu."." data-en="phrases: &ldquo;I changed banks, please update for the next payment&rdquo;.">fraze: „promenio/la sam banku, molim vas ažurirajte za narednu uplatu"“.</li>
          <li data-sr="fraze: „u prilogu je potpisani formular za promenu računa."." data-en="phrases: &ldquo;attached is the signed form for account change&rdquo;.">fraze: „u prilogu je potpisani formular za promenu računa"“.</li>
          <li data-sr="fraze: „stari račun zatvaram krajem meseca, potrebno je ažurirati pre isplate."." data-en="phrases: &ldquo;I am closing the old account end of month, needs updating before payment&rdquo;.">fraze: „stari račun zatvaram krajem meseca, potrebno je ažurirati pre isplate"“.</li>
        </ul>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> HR prima i razmatra zahtev bez aktivnog sumnjičenja."
          data-en="<strong>Phase threshold:</strong> HR receives and considers the request without active suspicion."
        ><strong>Prag faze:</strong> HR prima i razmatra zahtev bez aktivnog sumnjičenja.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Prag: HR ažurira platni sistem" data-en="Phase 4 — Threshold: HR updates the payroll system">
          Faza 4 — Prag: HR ažurira platni sistem
        </h3>
        <p
          data-sr="HR ažurira bankovni račun u sistemu bez nezavisne verifikacije. Napadač čeka isplatni dan. Kod mesečnih plata — gubitak je jedna plata. Kod nedeljnih ili dvonedeljnih — napad može trajati duže pre otkrivanja. Ciljani zaposleni ništa ne zna."
          data-en="HR updates the bank account in the system without independent verification. The attacker waits for payday. With monthly salaries — loss is one salary. With weekly or biweekly payments — the attack can last longer before discovery. The targeted employee is unaware."
        >HR ažurira bankovni račun u sistemu bez nezavisne verifikacije. Napadač čeka isplatni dan. Kod mesečnih plata — gubitak je jedna plata. Kod nedeljnih ili dvonedeljnih — napad može trajati duže pre otkrivanja. Ciljani zaposleni ništa ne zna.</p>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> račun ažuriran — sledeća plata ide napadaču."
          data-en="<strong>Phase threshold:</strong> account updated — next salary goes to attacker."
        ><strong>Prag faze:</strong> račun ažuriran — sledeća plata ide napadaču.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Isplatni dan: gubitak" data-en="Phase 5 — Payday: loss">
          Faza 5 — Isplatni dan: gubitak
        </h3>
        <p
          data-sr="Plata odlazi na napadačev račun. Zaposleni ne dobija platu i javlja HR-u. Firma tada prvi put shvata šta se desilo. Prosečno kašnjenje otkrivanja: 2 do 4 nedelje kod mesečnih plata. Povraćaj je retko moguć jer napadač odmah povlači sredstva."
          data-en="Salary goes to the attacker's account. The employee does not receive their salary and contacts HR. The company first understands what happened. Average discovery delay: 2 to 4 weeks for monthly payroll. Recovery is rarely possible as the attacker immediately withdraws funds."
        >Plata odlazi na napadačev račun. Zaposleni ne dobija platu i javlja HR-u. Firma tada prvi put shvata šta se desilo. Prosečno kašnjenje otkrivanja: 2 do 4 nedelje kod mesečnih plata. Povraćaj je retko moguć jer napadač odmah povlači sredstva.</p>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> zaposleni javlja da nije primio platu — napad otkriven."
          data-en="<strong>Phase threshold:</strong> employee reports not receiving salary — attack discovered."
        ><strong>Prag faze:</strong> zaposleni javlja da nije primio platu — napad otkriven.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Eskalacija: više zaposlenih" data-en="Phase 6 — Escalation: multiple employees">
          Faza 6 — Eskalacija: više zaposlenih
        </h3>
        <p
          data-sr="U sofisticiranijim napadima napadač podnosi zahteve za promenu za više zaposlenih u kratkom periodu. Ako HR nema proces verifikacije, svaki zahtev prolazi. Firma ne vidi obrazac dok ne dođe do isplatnog dana."
          data-en="In more sophisticated attacks the attacker submits change requests for multiple employees in a short period. If HR has no verification process, each request passes. The company does not see the pattern until payday."
        >U sofisticiranijim napadima napadač podnosi zahteve za promenu za više zaposlenih u kratkom periodu. Ako HR nema proces verifikacije, svaki zahtev prolazi. Firma ne vidi obrazac dok ne dođe do isplatnog dana.</p>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
            <li><a href="ceo-fraud.html" data-sr="CEO prevara" data-en="CEO fraud">CEO prevara</a></li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> više zaposlenih prijavilo neisplaćenu platu."
          data-en="<strong>Phase threshold:</strong> multiple employees reported missing salary."
        ><strong>Prag faze:</strong> više zaposlenih prijavilo neisplaćenu platu.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 7 — Recovery talaš" data-en="Phase 7 — Recovery wave">
          Faza 7 — Recovery talaš
        </h3>
        <p
          data-sr="Posle otkrivanja prevare firma je pod pritiskom. Stiže novi kontakt — neko ko tvrdi da može pomoći oko povraćaja — uz novu uplatu unapred. Firme su ranjive u ovoj fazi jer su pod stresom i žele brzo rešenje."
          data-en="After discovering the fraud the company is under pressure. A new contact arrives — someone claiming to help with recovery — for a new upfront fee. Companies are vulnerable at this stage because they are stressed and want a quick resolution."
        >Posle otkrivanja prevare firma je pod pritiskom. Stiže novi kontakt — neko ko tvrdi da može pomoći oko povraćaja — uz novu uplatu unapred. Firme su ranjive u ovoj fazi jer su pod stresom i žele brzo rešenje.</p>
        <div class="callout"
          data-sr="<strong>Filter:</strong> legitimni povraćaj inicira firma kroz banku, ne treća strana koja kontaktuje s ponudom."
          data-en="<strong>Filter:</strong> legitimate recovery is initiated by the company through the bank, not a third party contacting with an offer."
        ><strong>Filter:</strong> legitimni povraćaj inicira firma kroz banku, ne treća strana koja kontaktuje s ponudom.</div>
      </article>
    </section>

    <!-- 4) CRVENE ZASTAVICE -->
    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="zahtev za promenom bankovnog računa stiže samo imejlom bez prethodnog HR razgovora." data-en="request for bank account change arrives only by email without prior HR conversation.">zahtev za promenom bankovnog računa stiže samo imejlom bez prethodnog HR razgovora.</li>
        <li data-sr="domen pošiljaoca vizualno identičan, ali sitna razlika pri pažljivom pregledu." data-en="sender domain visually identical but minor difference on careful inspection.">domen pošiljaoca vizualno identičan, ali sitna razlika pri pažljivom pregledu.</li>
        <li data-sr="zahtev dolazi kratko pred isplatni dan sa napomenom da je hitno." data-en="request arrives shortly before payday with note that it is urgent.">zahtev dolazi kratko pred isplatni dan sa napomenom da je hitno.</li>
        <li data-sr="novi bankovni račun je u stranoj banci ili u drugoj zemlji." data-en="new bank account is at a foreign bank or in a different country.">novi bankovni račun je u stranoj banci ili u drugoj zemlji.</li>
        <li data-sr="zaposleni je naveden da nije dostupan telefonski za verifikaciju." data-en="employee is stated to be unavailable by phone for verification.">zaposleni je naveden da nije dostupan telefonski za verifikaciju.</li>
        <li data-sr="više zaposlenih traži promene u kratkom vremenskom periodu." data-en="multiple employees request changes within a short time period.">više zaposlenih traži promene u kratkom vremenskom periodu.</li>
        <li data-sr="prilog (formular/pismo) nema osobine dokumenata koje firma obično generiše." data-en="attachment (form/letter) lacks characteristics of documents the company normally generates.">prilog (formular/pismo) nema osobine dokumenata koje firma obično generiše.</li>
      </ul>
    </section>

    <!-- 5) PROVERE -->
    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera pre promene platnog računa" data-en="Checks: 8 quick checks before changing a payroll account">Provere: 8 brzih provera pre promene platnog računa</h2>

      <p
        data-sr="Verifikacija mora biti nezavisna od kanala kroz koji je zahtev stigao. Imejl, broj ili dokument iz zahteva nisu dokaz identiteta."
        data-en="Verification must be independent of the channel through which the request arrived. The email, number, or document from the request is not proof of identity."
      >Verifikacija mora biti nezavisna od kanala kroz koji je zahtev stigao. Imejl, broj ili dokument iz zahteva nisu dokaz identiteta.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Provere identiteta zaposlenog" data-en="Employee identity checks">Provere identiteta zaposlenog</div>
          <ul class="bullets">
            <li data-sr="pozovi zaposlenog na interni broj ili lični broj iz sistema — ne iz zahteva." data-en="call the employee on internal or personal number from the system — not from the request.">pozovi zaposlenog na interni broj ili lični broj iz sistema — ne iz zahteva.</li>
            <li data-sr="potvrdi identitet face-to-face ili video pozivom ako je moguće." data-en="confirm identity face-to-face or via video call if possible.">potvrdi identitet face-to-face ili video pozivom ako je moguće.</li>
            <li data-sr="proveri pun domen imejla — nije dovoljno gledati display name." data-en="check full email domain — looking only at display name is not enough.">proveri pun domen imejla — nije dovoljno gledati display name.</li>
            <li data-sr="je li zaposleni prethodno lično ili usmeno najavio promenu?" data-en="did the employee previously announce the change in person or verbally?">je li zaposleni prethodno lično ili usmeno najavio promenu?</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Proceduralne provere" data-en="Procedural checks">Proceduralne provere</div>
          <ul class="bullets">
            <li data-sr="postoji li standardni interni formular za promenu platnog računa koji treba popuniti lično ili u sistemu." data-en="is there a standard internal form for payroll account changes to be completed in person or in the system.">postoji li standardni interni formular za promenu platnog računa koji treba popuniti lično ili u sistemu.</li>
            <li data-sr="da li promena zahteva odobrenje nadređenog zaposlenog." data-en="does the change require approval from the employee's direct manager.">da li promena zahteva odobrenje nadređenog zaposlenog.</li>
            <li data-sr="da li novi IBAN odgovara domicilnoj banci zaposlenog." data-en="does the new IBAN correspond to the employee's country of residence.">da li novi IBAN odgovara domicilnoj banci zaposlenog.</li>
            <li data-sr="da li promene u kratkom periodu pokazuju obrazac (više zaposlenih odjednom)." data-en="do changes in a short period show a pattern (multiple employees at once).">da li promene u kratkom periodu pokazuju obrazac (više zaposlenih odjednom).</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 6) CHECKLISTA -->
    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja pre promene platnog računa" data-en="Checklist: 12 questions before changing a payroll account">Checklista: 12 pitanja pre promene platnog računa</h2>

      <p class="muted"
        data-sr="Brzo čitanje. Više negativnih odgovora znači aktivan obrazac napada."
        data-en="Quick read. Multiple negative answers indicate an active attack pattern."
      >Brzo čitanje. Više negativnih odgovora znači aktivan obrazac napada.</p>

      <ul class="bullets">
        <li data-sr="Da li smo lično ili telefonski (interni broj) potvrdili identitet zaposlenog?" data-en="Did we personally or by phone (internal number) confirm the employee's identity?">Da li smo lično ili telefonski (interni broj) potvrdili identitet zaposlenog?</li>
        <li data-sr="Da li pun imejl domen odgovara domenu firme?" data-en="Does the full email domain match the company domain?">Da li pun imejl domen odgovara domenu firme?</li>
        <li data-sr="Da li je zaposleni prethodno najavio promenu van imejl zahteva?" data-en="Did the employee previously announce the change outside the email request?">Da li je zaposleni prethodno najavio promenu van imejl zahteva?</li>
        <li data-sr="Da li zahtev sadrži element hitnosti (za sledeću uplatu)?" data-en="Does the request contain urgency (for the next payment)?">Da li zahtev sadrži element hitnosti (za sledeću uplatu)?</li>
        <li data-sr="Da li je novi IBAN u istoj zemlji i banci kao do sada?" data-en="Is the new IBAN in the same country and bank as before?">Da li je novi IBAN u istoj zemlji i banci kao do sada?</li>
        <li data-sr="Da li dokument u prilogu izgleda kao standardni interni dokument firme?" data-en="Does the attached document look like a standard internal company document?">Da li dokument u prilogu izgleda kao standardni interni dokument firme?</li>
        <li data-sr="Da li zaposleni ima menadžera koji može potvrditi zahtev nezavisno?" data-en="Does the employee have a manager who can confirm the request independently?">Da li zaposleni ima menadžera koji može potvrditi zahtev nezavisno?</li>
        <li data-sr="Da li je zahtev unutar standardnog HR procesa koji postoji u firmi?" data-en="Is the request within the standard HR process that exists at the company?">Da li je zahtev unutar standardnog HR procesa koji postoji u firmi?</li>
        <li data-sr="Da li je ovaj zaposleni nedavno imao neke druge neuobičajene promene u podacima?" data-en="Has this employee recently had any other unusual changes to their data?">Da li je ovaj zaposleni nedavno imao neke druge neuobičajene promene u podacima?</li>
        <li data-sr="Da li imamo dovoljan vremenski rok za verifikaciju pre isplatnog dana?" data-en="Do we have sufficient time for verification before payday?">Da li imamo dovoljan vremenski rok za verifikaciju pre isplatnog dana?</li>
        <li data-sr="Da li u sistemu postoji duplikat zahteva ili je isti IBAN tražen za više zaposlenih?" data-en="Is there a duplicate request in the system or is the same IBAN requested for multiple employees?">Da li u sistemu postoji duplikat zahteva ili je isti IBAN tražen za više zaposlenih?</li>
        <li data-sr="Da li smo informisali finansijsku kontrolu o promeni pre ažuriranja?" data-en="Did we inform financial control of the change before updating?">Da li smo informisali finansijsku kontrolu o promeni pre ažuriranja?</li>
      </ul>
    </section>

    <!-- 7) AKO SUMNJA KRENE -->
    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="zaustavi ažuriranje — nemoj menjati račun dok verifikacija nije završena." data-en="stop the update — do not change the account until verification is complete.">zaustavi ažuriranje — nemoj menjati račun dok verifikacija nije završena.</li>
        <li data-sr="pozovi zaposlenog direktno na interni ili lični broj iz sistema — ne na broj iz zahteva." data-en="call the employee directly on internal or personal system number — not the number from the request.">pozovi zaposlenog direktno na interni ili lični broj iz sistema — ne na broj iz zahteva.</li>
        <li data-sr="ako je promena već izvršena i isplatni dan nije prošao: kontaktuj banku odmah i zatraži zadržavanje transakcije." data-en="if the change was already made and payday has not passed: contact the bank immediately and request transaction hold.">ako je promena već izvršena i isplatni dan nije prošao: kontaktuj banku odmah i zatraži zadržavanje transakcije.</li>
        <li data-sr="sačuvaj sve imejlove, zaglavlja i dokumentaciju iz zahteva." data-en="preserve all emails, headers, and documentation from the request.">sačuvaj sve imejlove, zaglavlja i dokumentaciju iz zahteva.</li>
        <li data-sr="obavesti IT (mogući kompromitovani nalog), senior menadžment i pravnu službu." data-en="notify IT (possible compromised account), senior management, and legal.">obavesti IT (mogući kompromitovani nalog), senior menadžment i pravnu službu.</li>
        <li data-sr="prijavi policiji i finansijskom regulatoru." data-en="report to police and financial regulator.">prijavi policiji i finansijskom regulatoru.</li>
      </ol>

      <div class="callout"
        data-sr="<strong>Ključna tačka:</strong> između ažuriranja sistema i isplatnog dana može biti dovoljno vremena za zaustavljanje ako se reaguje odmah."
        data-en="<strong>Key point:</strong> between the system update and payday there may be enough time to stop it if action is taken immediately."
      ><strong>Ključna tačka:</strong> između ažuriranja sistema i isplatnog dana može biti dovoljno vremena za zaustavljanje ako se reaguje odmah.</div>
    </section>

    <!-- 8) AKO POMAŽEŠ NEKOME -->
    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>

      <p
        data-sr="HR zaposleni koji je ažurirao račun je često pod stresom i strahuje od posledica. Konfrontacija ne pomaže — bolje je krenuti od procesa: da li je verifikacija bila moguća, je li zahtev bio u okviru standardne procedure."
        data-en="The HR employee who updated the account is often stressed and afraid of consequences. Confrontation does not help — better to start from the process: was verification possible, was the request within standard procedure."
      >HR zaposleni koji je ažurirao račun je često pod stresom i strahuje od posledica. Konfrontacija ne pomaže — bolje je krenuti od procesa: da li je verifikacija bila moguća, je li zahtev bio u okviru standardne procedure.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li je zaposleni ikada ranije kontaktovao HR zbog promene računa?" data-en="Did the employee ever contact HR before about an account change?">Da li je zaposleni ikada ranije kontaktovao HR zbog promene računa?</li>
            <li data-sr="Da li postoji i drugi kanal komunikacije sa ovim zaposlenim osim imejla?" data-en="Is there another communication channel with this employee besides email?">Da li postoji i drugi kanal komunikacije sa ovim zaposlenim osim imejla?</li>
            <li data-sr="Da li je zahtev prošao kroz standardnu proceduru ili je bio van nje?" data-en="Did the request go through standard procedure or was it outside it?">Da li je zahtev prošao kroz standardnu proceduru ili je bio van nje?</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Pozovimo zaposlenog direktno — to nije optužba, to je standardna verifikacija." data-en="Let's call the employee directly — this is not an accusation, this is standard verification.">Pozovimo zaposlenog direktno — to nije optužba, to je standardna verifikacija.</li>
            <li data-sr="Ako je ažuriranje već prošlo i isplatni dan nije prošao, ima još vremena za zaustavljanje." data-en="If the update already went through and payday has not passed, there is still time to stop it.">Ako je ažuriranje već prošlo i isplatni dan nije prošao, ima još vremena za zaustavljanje.</li>
            <li data-sr="Nema smisla čekati — odmah zovemo banku i tražimo hold." data-en="There is no point waiting — we call the bank now and request a hold.">Nema smisla čekati — odmah zovemo banku i tražimo hold.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 9) POVEZANE PREVARE -->
    <section class="card">
      <h2 data-sr="Povezane prevare" data-en="Related scams">Povezane prevare</h2>
      <div class="branch">
        <ul class="bullets">
          <li><a href="payment-diversion.html" data-sr="Preusmeravanje plaćanja" data-en="Payment diversion">Preusmeravanje plaćanja</a></li>
          <li><a href="business-email-compromise.html" data-sr="Kompromitovanje poslovnog imejla (BEC)" data-en="Business email compromise (BEC)">Kompromitovanje poslovnog imejla (BEC)</a></li>
          <li><a href="ceo-fraud.html" data-sr="CEO prevara" data-en="CEO fraud">CEO prevara</a></li>
          <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
          <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
          <li><a href="invoice-fraud.html" data-sr="Prevara sa fakturama" data-en="Invoice fraud">Prevara sa fakturama</a></li>
          <li><a href="impersonation-scam.html" data-sr="Lažno predstavljanje" data-en="Impersonation scam">Lažno predstavljanje</a></li>
        </ul>
      </div>
    </section>
  `
};
