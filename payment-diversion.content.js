window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["payment-diversion"] = {
  raw_html: `
    <!-- 1) UVOD -->
    <section class="card">
      <h2 data-sr="Uvod: kako radi preusmeravanje plaćanja" data-en="Introduction: how payment diversion works">
        Uvod: kako radi preusmeravanje plaćanja
      </h2>

      <p
        data-sr="Preusmeravanje plaćanja je napad u kome napadač menja destinaciju novca koji firma ili osoba namerava da uplati legitimnom primaocu. Napad može doći kroz lažni imejl, telefon, kompromitovani nalog ili izmenjeni dokument. Rezultat je uvek isti: uplata odlazi na napadačev račun umesto na pravi."
        data-en="Payment diversion is an attack in which the attacker changes the destination of money a company or individual intends to pay to a legitimate recipient. The attack can arrive through fake email, phone, a compromised account, or a modified document. The result is always the same: the payment goes to the attacker's account instead of the real one."
      >Preusmeravanje plaćanja je napad u kome napadač menja destinaciju novca koji firma ili osoba namerava da uplati legitimnom primaocu. Napad može doći kroz lažni imejl, telefon, kompromitovani nalog ili izmenjeni dokument. Rezultat je uvek isti: uplata odlazi na napadačev račun umesto na pravi.</p>

      <p
        data-sr="Ovo je šira kategorija koja obuhvata CEO prevaru, prevaru sa fakturama, kompromitovanje imejla dobavljača i mandate fraud. Zajednički imenilac svih varijanti je jedan: napadač se ubacuje u komunikacioni tok koji sadrži instrukciju za plaćanje i menja je pre nego što meta izvrši akciju. Brzina i autoritativni ton zahteva sprečavaju verifikaciju."
        data-en="This is the broader category that includes CEO fraud, invoice fraud, vendor email compromise, and mandate fraud. The common denominator of all variants is one: the attacker inserts themselves into the communication flow that contains a payment instruction and changes it before the target executes. Speed and authoritative tone of the request prevent verification."
      >Ovo je šira kategorija koja obuhvata CEO prevaru, prevaru sa fakturama, kompromitovanje imejla dobavljača i mandate fraud. Zajednički imenilac svih varijanti je jedan: napadač se ubacuje u komunikacioni tok koji sadrži instrukciju za plaćanje i menja je pre nego što meta izvrši akciju. Brzina i autoritativni ton zahteva sprečavaju verifikaciju.</p>

      <div class="callout"
        data-sr="<strong>Model:</strong> izviđanje (platnički tok) → pristup kanalu (imejl/poziv/dokument) → izmena IBAN-a ili instrukcije → meta izvršava uplatu → gubitak → mogući recovery talaš."
        data-en="<strong>Model:</strong> reconnaissance (payment flow) → channel access (email/call/document) → IBAN or instruction change → target executes payment → loss → possible recovery wave."
      ><strong>Model:</strong> izviđanje (platnički tok) → pristup kanalu (imejl/poziv/dokument) → izmena IBAN-a ili instrukcije → meta izvršava uplatu → gubitak → mogući recovery talaš.</div>

      <div class="callout"
        data-sr="<strong>Prag:</strong> meta izvrši uplatu ili ažurira IBAN u sistemu bez nezavisne telefonske verifikacije na poznatom broju."
        data-en="<strong>Threshold:</strong> target executes payment or updates IBAN in the system without independent phone verification on a known number."
      ><strong>Prag:</strong> meta izvrši uplatu ili ažurira IBAN u sistemu bez nezavisne telefonske verifikacije na poznatom broju.</div>
    </section>

    <!-- 2) KAKO GENERALNO RADI -->
    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika preusmeravanja" data-en="How it works: diversion mechanics">
        Kako generalno radi: mehanika preusmeravanja
      </h2>

      <p
        data-sr="Napadač ne krade direktno — ubeđuje metu da sama prenese novac. Ova razlika je bitna: nema upada u bankovni sistem, nema krađe kartice. Finansijski tok je autorizovan od strane same mete. Zbog toga je povraćaj retko moguć — transakcija je bila odobrena."
        data-en="The attacker does not steal directly — they convince the target to transfer the money themselves. This distinction matters: there is no breach of the banking system, no card theft. The financial flow is authorized by the target themselves. That is why recovery is rarely possible — the transaction was approved."
      >Napadač ne krade direktno — ubeđuje metu da sama prenese novac. Ova razlika je bitna: nema upada u bankovni sistem, nema krađe kartice. Finansijski tok je autorizovan od strane same mete. Zbog toga je povraćaj retko moguć — transakcija je bila odobrena.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gradi autoritet zahteva" data-en="What builds request authority">Šta gradi autoritet zahteva</div>
          <ul class="bullets">
            <li data-sr="pravo ime dobavljača, direktora ili banke u komunikaciji." data-en="real supplier, CEO, or bank name in communication.">pravo ime dobavljača, direktora ili banke u komunikaciji.</li>
            <li data-sr="lookalike domen ili kompromitovani pravi nalog." data-en="lookalike domain or compromised real account.">lookalike domen ili kompromitovani pravi nalog.</li>
            <li data-sr="ton koji odgovara uobičajenoj poslovnoj komunikaciji." data-en="tone matching usual business communication.">ton koji odgovara uobičajenoj poslovnoj komunikaciji.</li>
            <li data-sr="tajnost i hitnost koji isključuju konsultaciju i verifikaciju." data-en="secrecy and urgency that exclude consultation and verification.">tajnost i hitnost koji isključuju konsultaciju i verifikaciju.</li>
            <li data-sr="timing: napad dolazi u pravo vreme (pred isplatu, pred kraj kvartala)." data-en="timing: attack arrives at the right moment (before payment, before end of quarter).">timing: napad dolazi u pravo vreme (pred isplatu, pred kraj kvartala).</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Kako se uvodi promena instrukcije" data-en="How instruction change is introduced">Kako se uvodi promena instrukcije</div>
          <ul class="bullets">
            <li data-sr="imejl sa obaveštenjem o promeni bankovnog računa." data-en="email notifying of a bank account change.">imejl sa obaveštenjem o promeni bankovnog računa.</li>
            <li data-sr="telefonski poziv sa „potvrdom." lažnih podataka." data-en="phone call with &ldquo;confirmation&rdquo; of fake details.">telefonski poziv sa „potvrdom" lažnih podataka“.</li>
            <li data-sr="izmenjeni PDF ili Word dokument sa pogrešnim IBAN-om." data-en="modified PDF or Word document with wrong IBAN.">izmenjeni PDF ili Word dokument sa pogrešnim IBAN-om.</li>
            <li data-sr="direktna instrukcija od lažnog direktora: „hitan transfer na novi račun."." data-en="direct instruction from fake CEO: &ldquo;urgent transfer to new account&rdquo;.">direktna instrukcija od lažnog direktora: „hitan transfer na novi račun"“.</li>
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
        data-sr="Faze su prikazane kao operativni tok: šta meta vidi, šta se traži, gde se pali grananje u specifičnije varijante."
        data-en="Phases shown as operational flow: what the target sees, what is demanded, where branching into specific variants happens."
      >Faze su prikazane kao operativni tok: šta meta vidi, šta se traži, gde se pali grananje u specifičnije varijante.</p>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Izviđanje: mapiranje platničkog toka" data-en="Phase 1 — Reconnaissance: mapping the payment flow">
          Faza 1 — Izviđanje: mapiranje platničkog toka
        </h3>
        <p
          data-sr="Napadač identifikuje ko kome plaća, u kojim intervalima i koji su ključni kontakti koji odobravaju uplate. LinkedIn, web sajt firme, godišnji izveštaji i poslovni registri daju dovoljan uvid. Napadač bira platnički tok sa visokim redovnim iznosima."
          data-en="The attacker identifies who pays whom, at what intervals, and who the key contacts are that approve payments. LinkedIn, company website, annual reports, and business registries provide sufficient insight. The attacker selects a payment flow with high regular amounts."
        >Napadač identifikuje ko kome plaća, u kojim intervalima i koji su ključni kontakti koji odobravaju uplate. LinkedIn, web sajt firme, godišnji izveštaji i poslovni registri daju dovoljan uvid. Napadač bira platnički tok sa visokim redovnim iznosima.</p>
        <ul class="bullets">
          <li data-sr="signal: poslovni odnosi i platnici javno dostupni." data-en="signal: business relationships and payers publicly available.">signal: poslovni odnosi i platnici javno dostupni.</li>
          <li data-sr="signal: direktor ili CFO objavljuje aktivnosti i putovanja javno." data-en="signal: CEO or CFO publicly announces activities and travel.">signal: direktor ili CFO objavljuje aktivnosti i putovanja javno.</li>
          <li data-sr="signal: email format firme predvidiv." data-en="signal: company email format predictable.">signal: email format firme predvidiv.</li>
        </ul>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> napadač ima pun platnički profil: ko plaća, kome, koji iznos, koji je email format i kad je pravi kontakt nedostupan."
          data-en="<strong>Phase threshold:</strong> attacker has full payment profile: who pays, to whom, how much, email format, and when the real contact is unavailable."
        ><strong>Prag faze:</strong> napadač ima pun platnički profil: ko plaća, kome, koji iznos, koji je email format i kad je pravi kontakt nedostupan.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Priprema: kanal i lažni identitet" data-en="Phase 2 — Setup: channel and fake identity">
          Faza 2 — Priprema: kanal i lažni identitet
        </h3>
        <p
          data-sr="Napadač priprema kanal napada. U imejl varijanti: registruje lookalike domen ili kompromituje pravi nalog. U telefonskoj varijanti: priprema skriptu i spoofuje broj. U dokumentnoj varijanti: modifikuje PDF ili Word sa promenjenim IBAN-om. Prilaže lažnu dokumentaciju kao „potvrdu"."
          data-en="The attacker prepares the attack channel. In the email variant: registers a lookalike domain or compromises a real account. In the phone variant: prepares a script and spoofs the number. In the document variant: modifies PDF or Word with a changed IBAN. Attaches fake documentation as &ldquo;confirmation&rdquo;."
        >Napadač priprema kanal napada. U imejl varijanti: registruje lookalike domen ili kompromituje pravi nalog. U telefonskoj varijanti: priprema skriptu i spoofuje broj. U dokumentnoj varijanti: modifikuje PDF ili Word sa promenjenim IBAN-om. Prilaže lažnu dokumentaciju kao „potvrdu"“.</p>
        <ul class="bullets">
          <li data-sr="signal: domen identičan ali sa crticom, brojem ili drugom TLD." data-en="signal: domain identical but with dash, number, or different TLD.">signal: domen identičan ali sa crticom, brojem ili drugom TLD.</li>
        </ul>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="ceo-fraud.html" data-sr="CEO prevara" data-en="CEO fraud">CEO prevara</a></li>
            <li><a href="vendor-email-compromise.html" data-sr="Kompromitovanje imejla dobavljača" data-en="Vendor email compromise">Kompromitovanje imejla dobavljača</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
            <li><a href="vishing.html" data-sr="Višing" data-en="Vishing">Višing</a></li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> kanal je spreman i lažni identitet uverljiv."
          data-en="<strong>Phase threshold:</strong> channel is ready and fake identity convincing."
        ><strong>Prag faze:</strong> kanal je spreman i lažni identitet uverljiv.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Zahtev: promena instrukcije" data-en="Phase 3 — Request: instruction change">
          Faza 3 — Zahtev: promena instrukcije
        </h3>
        <p
          data-sr="Napadač šalje instrukciju za promenu. Ton je birokratski, hitan ili autoritativan zavisno od varijante. Zahtev uvek sadrži element koji sprečava verifikaciju: tajnost, nedostupnost prave osobe, ili rok koji ne dozvoljava proveru. Nova bankovna instrukcija stiže bez prethodne najave."
          data-en="The attacker sends the instruction to change. Tone is bureaucratic, urgent, or authoritative depending on the variant. The request always contains an element that prevents verification: secrecy, unavailability of the real person, or a deadline that does not allow checking. New banking instruction arrives without prior notice."
        >Napadač šalje instrukciju za promenu. Ton je birokratski, hitan ili autoritativan zavisno od varijante. Zahtev uvek sadrži element koji sprečava verifikaciju: tajnost, nedostupnost prave osobe, ili rok koji ne dozvoljava proveru. Nova bankovna instrukcija stiže bez prethodne najave.</p>
        <ul class="bullets">
          <li data-sr="fraze: „promenili smo banku — ažurirajte IBAN za narednu uplatu."." data-en="phrases: &ldquo;we changed banks — please update the IBAN for the next payment&rdquo;.">fraze: „promenili smo banku — ažurirajte IBAN za narednu uplatu"“.</li>
          <li data-sr="fraze: „hitan transfer — direktor na putu, ne prima pozive."." data-en="phrases: &ldquo;urgent transfer — director traveling, not taking calls&rdquo;.">fraze: „hitan transfer — direktor na putu, ne prima pozive"“.</li>
          <li data-sr="fraze: „poverljivo — ne obaveštavati CFO-a."." data-en="phrases: &ldquo;confidential — do not notify CFO&rdquo;.">fraze: „poverljivo — ne obaveštavati CFO-a"“.</li>
        </ul>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="invoice-fraud.html" data-sr="Prevara sa fakturama" data-en="Invoice fraud">Prevara sa fakturama</a></li>
            <li><a href="mandate-fraud.html" data-sr="Prevara sa nalozima za plaćanje" data-en="Mandate fraud">Prevara sa nalozima za plaćanje</a></li>
            <li><a href="payroll-diversion.html" data-sr="Preusmeravanje plata" data-en="Payroll diversion">Preusmeravanje plata</a></li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> meta razmatra instrukciju kao legitimnu i kreće ka izvršavanju bez nezavisne provere."
          data-en="<strong>Phase threshold:</strong> target considers the instruction legitimate and moves toward execution without independent verification."
        ><strong>Prag faze:</strong> meta razmatra instrukciju kao legitimnu i kreće ka izvršavanju bez nezavisne provere.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Prag: uplata izvršena ili IBAN promenjen" data-en="Phase 4 — Threshold: payment made or IBAN changed">
          Faza 4 — Prag: uplata izvršena ili IBAN promenjen
        </h3>
        <p
          data-sr="Meta izvrši uplatu ili ažurira IBAN u sistemu. Napadač odmah prebacuje sredstva dalje. U slučaju ažuriranja trajnog naloga, gubitak je serijski — svaki naredni automatski transfer ide napadaču. Prosečno vreme otkrivanja je 2 do 5 dana, a povraćaj je moguć samo unutar 24 do 72 sata."
          data-en="The target makes the payment or updates the IBAN in the system. The attacker immediately moves funds onward. If a standing order was updated, the loss is serial — every subsequent automatic transfer goes to the attacker. Average discovery time is 2 to 5 days; recovery is possible only within 24 to 72 hours."
        >Meta izvrši uplatu ili ažurira IBAN u sistemu. Napadač odmah prebacuje sredstva dalje. U slučaju ažuriranja trajnog naloga, gubitak je serijski — svaki naredni automatski transfer ide napadaču. Prosečno vreme otkrivanja je 2 do 5 dana, a povraćaj je moguć samo unutar 24 do 72 sata.</p>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> uplata izvršena ili IBAN promenjen — od ovog momenta novac je uglavnom izgubljen."
          data-en="<strong>Phase threshold:</strong> payment made or IBAN changed — from this point money is usually gone."
        ><strong>Prag faze:</strong> uplata izvršena ili IBAN promenjen — od ovog momenta novac je uglavnom izgubljen.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Eskalacija: pritisak za potvrdu ili novi zahtev" data-en="Phase 5 — Escalation: confirmation pressure or new demand">
          Faza 5 — Eskalacija: pritisak za potvrdu ili novi zahtev
        </h3>
        <p
          data-sr="Ako meta okleava, napadač eskalira. Jači autoritet, tvrdi rok, nova „treća strana" koja potvrđuje zahtev“. U naprednim napadima napadač ostaje u kompromitovanom nalogu i presreće odgovore — meta dobija potvrde iz pravog naloga."
          data-en="If the target hesitates, the attacker escalates. Stronger authority, hard deadline, a new third party confirming the request. In advanced attacks the attacker stays in the compromised account and intercepts replies — the target receives confirmations from the real account."
        >Ako meta okleava, napadač eskalira. Jači autoritet, tvrdi rok, nova treća strana koja potvrđuje zahtev. U naprednim napadima napadač ostaje u kompromitovanom nalogu i presreće odgovore — meta dobija potvrde iz pravog naloga.</p>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> meta prihvata eskaliranu potvrdu kao dokaz i izvršava zahtev."
          data-en="<strong>Phase threshold:</strong> target accepts escalated confirmation as proof and executes request."
        ><strong>Prag faze:</strong> meta prihvata eskaliranu potvrdu kao dokaz i izvršava zahtev.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Otkrivanje" data-en="Phase 6 — Discovery">
          Faza 6 — Otkrivanje
        </h3>
        <p
          data-sr="Otkrivanje dolazi kada pravi primalac javi da nije primio uplatu, kada zaposleni ili dobavljač prijavi problem, ili kada interna kontrola registruje anomaliju. Kod trajnih naloga otkrivanje može doći posle više meseci."
          data-en="Discovery comes when the real recipient reports non-payment, when an employee or supplier reports an issue, or when internal controls detect an anomaly. With standing orders, discovery may come after several months."
        >Otkrivanje dolazi kada pravi primalac javi da nije primio uplatu, kada zaposleni ili dobavljač prijavi problem, ili kada interna kontrola registruje anomaliju. Kod trajnih naloga otkrivanje može doći posle više meseci.</p>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> treća strana van lanca prevare prekida tok."
          data-en="<strong>Phase threshold:</strong> third party outside the fraud chain breaks the flow."
        ><strong>Prag faze:</strong> treća strana van lanca prevare prekida tok.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 7 — Recovery talaš" data-en="Phase 7 — Recovery wave">
          Faza 7 — Recovery talaš
        </h3>
        <p
          data-sr="Posle otkrivenog incidenta stiže novi kontakt sa ponudom povraćaja izgubljenih sredstava uz uplatu unapred. Firme su ranjive jer su pod pritiskom da reše situaciju brzo."
          data-en="After the discovered incident, a new contact arrives offering to recover lost funds for an upfront fee. Companies are vulnerable because they are under pressure to resolve the situation quickly."
        >Posle otkrivenog incidenta stiže novi kontakt sa ponudom povraćaja izgubljenih sredstava uz uplatu unapred. Firme su ranjive jer su pod pritiskom da reše situaciju brzo.</p>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="recovery-scam.html" data-sr="Prevara povraćaja novca" data-en="Recovery scam">Prevara povraćaja novca</a></li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Filter:</strong> svaka ponuda povraćaja uz uplatu unapred je novi napad."
          data-en="<strong>Filter:</strong> every recovery offer with an upfront fee is a new attack."
        ><strong>Filter:</strong> svaka ponuda povraćaja uz uplatu unapred je novi napad.</div>
      </article>
    </section>

    <!-- 4) CRVENE ZASTAVICE -->
    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="promena IBAN-a ili instrukcije za uplatu stiže samo imejlom ili pozivom bez prethodne najave." data-en="IBAN or payment instruction change arrives only by email or call without prior notice.">promena IBAN-a ili instrukcije za uplatu stiže samo imejlom ili pozivom bez prethodne najave.</li>
        <li data-sr="zahtev sadrži element hitnosti koji ne dozvoljava standardnu verifikaciju." data-en="request contains urgency that does not allow standard verification.">zahtev sadrži element hitnosti koji ne dozvoljava standardnu verifikaciju.</li>
        <li data-sr="zahtev sadrži element tajnosti ili zabranu konsultacije." data-en="request contains secrecy or consultation ban.">zahtev sadrži element tajnosti ili zabranu konsultacije.</li>
        <li data-sr="novi IBAN je u drugoj zemlji ili banci od one u ugovoru ili istoriji transakcija." data-en="new IBAN is in a different country or bank from contract or transaction history.">novi IBAN je u drugoj zemlji ili banci od one u ugovoru ili istoriji transakcija.</li>
        <li data-sr="domen pošiljaoca vizualno sličan ali pažljivim pregledom drugačiji." data-en="sender domain visually similar but different on closer inspection.">domen pošiljaoca vizualno sličan ali pažljivim pregledom drugačiji.</li>
        <li data-sr="kontakt broj za potvrdu u zahtevu razlikuje se od broja u internom sistemu." data-en="confirmation number in request differs from number in internal system.">kontakt broj za potvrdu u zahtevu razlikuje se od broja u internom sistemu.</li>
        <li data-sr="zahtev stiže van radnog vremena, u petak ili pred praznike." data-en="request arrives outside business hours, on Friday, or before holidays.">zahtev stiže van radnog vremena, u petak ili pred praznike.</li>
      </ul>
    </section>

    <!-- 5) PROVERE -->
    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera pre svake promene ili uplate" data-en="Checks: 8 quick checks before any change or payment">Provere: 8 brzih provera pre svake promene ili uplate</h2>

      <p
        data-sr="Cilj je nezavisna verifikacija kroz kanale koji ne dolaze od zahteva koji je stigao. Broj u imejlu ili pozivu i prilog iz imejla nisu nezavisni dokazi."
        data-en="The goal is independent verification through channels that do not come from the request that arrived. The number in the email or call and the attachment from the email are not independent evidence."
      >Cilj je nezavisna verifikacija kroz kanale koji ne dolaze od zahteva koji je stigao. Broj u imejlu ili pozivu i prilog iz imejla nisu nezavisni dokazi.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Provere identiteta i kanala" data-en="Identity and channel checks">Provere identiteta i kanala</div>
          <ul class="bullets">
            <li data-sr="proveri pun domen imejla karakter po karakter — ne samo display name." data-en="check full email domain character by character — not just display name.">proveri pun domen imejla karakter po karakter — ne samo display name.</li>
            <li data-sr="pozovi pošiljaoca na broj iz internog sistema — ne iz zahteva." data-en="call the sender on the internal system number — not from the request.">pozovi pošiljaoca na broj iz internog sistema — ne iz zahteva.</li>
            <li data-sr="kod telefonskog zahteva: prekini poziv i zovi nazad na poznati broj." data-en="for phone requests: end the call and call back on a known number.">kod telefonskog zahteva: prekini poziv i zovi nazad na poznati broj.</li>
            <li data-sr="proveri email zaglavlja (From header) u raw view." data-en="check email headers (From header) in raw view.">proveri email zaglavlja (From header) u raw view.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="IBAN i proceduralne provere" data-en="IBAN and procedural checks">IBAN i proceduralne provere</div>
          <ul class="bullets">
            <li data-sr="uporedi novi IBAN sa IBAN-om u ugovoru — svako neslaganje zahteva verifikaciju." data-en="compare new IBAN with IBAN in contract — any mismatch requires verification.">uporedi novi IBAN sa IBAN-om u ugovoru — svako neslaganje zahteva verifikaciju.</li>
            <li data-sr="proveri BIC/SWIFT — odgovara li zemlja i banka istoriji ovog primaoca." data-en="check BIC/SWIFT — does country and bank match this recipient's history.">proveri BIC/SWIFT — odgovara li zemlja i banka istoriji ovog primaoca.</li>
            <li data-sr="da li zahtev zaobilazi standardnu proceduru odobrenja." data-en="does request bypass standard approval procedure.">da li zahtev zaobilazi standardnu proceduru odobrenja.</li>
            <li data-sr="proveri da li postoji prethodna pisana komunikacija o ovoj transakciji van zahteva koji je stigao." data-en="check whether there is prior written communication about this transaction outside the request that arrived.">proveri da li postoji prethodna pisana komunikacija o ovoj transakciji van zahteva koji je stigao.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 6) CHECKLISTA -->
    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja pre svake uplate ili promene podataka" data-en="Checklist: 12 questions before any payment or data change">Checklista: 12 pitanja pre svake uplate ili promene podataka</h2>

      <p class="muted"
        data-sr="Brzo čitanje. Više loših odgovora znači aktivan obrazac preusmeravanja."
        data-en="Quick read. Multiple bad answers indicate an active diversion pattern."
      >Brzo čitanje. Više loših odgovora znači aktivan obrazac preusmeravanja.</p>

      <ul class="bullets">
        <li data-sr="Da li zahtev stiže samo jednim kanalom bez prethodne komunikacije?" data-en="Does the request arrive through only one channel without prior communication?">Da li zahtev stiže samo jednim kanalom bez prethodne komunikacije?</li>
        <li data-sr="Da li domen pošiljaoca odgovara domenu koji uobičajeno koristimo?" data-en="Does the sender domain match the domain we normally use?">Da li domen pošiljaoca odgovara domenu koji uobičajeno koristimo?</li>
        <li data-sr="Da li novi IBAN odgovara IBAN-u u ugovoru ili istoriji transakcija?" data-en="Does the new IBAN match the IBAN in the contract or transaction history?">Da li novi IBAN odgovara IBAN-u u ugovoru ili istoriji transakcija?</li>
        <li data-sr="Da li zahtev sadrži element hitnosti koji ne dozvoljava standardnu verifikaciju?" data-en="Does the request contain urgency that does not allow standard verification?">Da li zahtev sadrži element hitnosti koji ne dozvoljava standardnu verifikaciju?</li>
        <li data-sr="Da li zahtev sadrži element tajnosti ili zabranu konsultacije?" data-en="Does the request contain secrecy or consultation ban?">Da li zahtev sadrži element tajnosti ili zabranu konsultacije?</li>
        <li data-sr="Da li je pošiljalac naveo da nije dostupan telefonski?" data-en="Did the sender state they are unavailable by phone?">Da li je pošiljalac naveo da nije dostupan telefonski?</li>
        <li data-sr="Da li kontakt broj za potvrdu dolazi iz istog zahteva koji traži promenu?" data-en="Does the confirmation number come from the same request asking for the change?">Da li kontakt broj za potvrdu dolazi iz istog zahteva koji traži promenu?</li>
        <li data-sr="Da li je primalac uplate u sistemu kao poznati poslovni partner?" data-en="Is the payment recipient in the system as a known business partner?">Da li je primalac uplate u sistemu kao poznati poslovni partner?</li>
        <li data-sr="Da li zahtev zaobilazi standardnu proceduru odobrenja?" data-en="Does the request bypass standard approval procedures?">Da li zahtev zaobilazi standardnu proceduru odobrenja?</li>
        <li data-sr="Da li smo pozvali pošiljaoca na broj iz internog imenika i dobili potvrdu?" data-en="Did we call the sender on the internal directory number and get confirmation?">Da li smo pozvali pošiljaoca na broj iz internog imenika i dobili potvrdu?</li>
        <li data-sr="Da li zahtev stiže pred kraj radnog dana, u petak ili pred praznike?" data-en="Does the request arrive before end of day, on Friday, or before holidays?">Da li zahtev stiže pred kraj radnog dana, u petak ili pred praznike?</li>
        <li data-sr="Da li je promena bila najavljena u prethodnoj komunikaciji van ovog zahteva?" data-en="Was the change announced in prior communication outside this request?">Da li je promena bila najavljena u prethodnoj komunikaciji van ovog zahteva?</li>
      </ul>
    </section>

    <!-- 7) AKO SUMNJA KRENE -->
    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="zaustavi sve radnje — ne izvršavaj uplatu i ne ažuriraj IBAN." data-en="stop all actions — do not make the payment and do not update the IBAN.">zaustavi sve radnje — ne izvršavaj uplatu i ne ažuriraj IBAN.</li>
        <li data-sr="pozovi pošiljaoca na broj iz internog sistema — ne iz zahteva koji je stigao." data-en="call the sender on the internal system number — not from the request that arrived.">pozovi pošiljaoca na broj iz internog sistema — ne iz zahteva koji je stigao.</li>
        <li data-sr="ako je uplata već inicirana: odmah kontaktuj banku i zatraži recall." data-en="if payment was already initiated: contact your bank immediately and request recall.">ako je uplata već inicirana: odmah kontaktuj banku i zatraži recall.</li>
        <li data-sr="sačuvaj sve dokaze: imejlove, zaglavlja, podatke o transakciji." data-en="preserve all evidence: emails, headers, transaction details.">sačuvaj sve dokaze: imejlove, zaglavlja, podatke o transakciji.</li>
        <li data-sr="obavesti IT odeljenje i senior menadžment." data-en="notify IT department and senior management.">obavesti IT odeljenje i senior menadžment.</li>
        <li data-sr="prijavi policiji i finansijskim regulatorima." data-en="report to police and financial regulators.">prijavi policiji i finansijskim regulatorima.</li>
      </ol>

      <div class="callout"
        data-sr="<strong>Zašto ovaj redosled radi:</strong> recall je moguć unutar 24 do 72 sata. Svaka sekunda pre praga povećava šansu za zaustavljanje."
        data-en="<strong>Why this order works:</strong> recall is possible within 24 to 72 hours. Every second before the threshold increases the chance of stopping it."
      ><strong>Zašto ovaj redosled radi:</strong> recall je moguć unutar 24 do 72 sata. Svaka sekunda pre praga povećava šansu za zaustavljanje.</div>
    </section>

    <!-- 8) AKO POMAŽEŠ NEKOME -->
    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>

      <p
        data-sr="Kada je uplata već izvršena, direktna konfrontacija aktivira defanzivnost. Efikasnije je ići kroz konkretnu proveru: IBAN u sistemu vs. IBAN u ugovoru, domen pošiljaoca, poziv na interni broj. Te radnje ne napadaju procenu zaposlenog — demonstriraju verifikaciju."
        data-en="When a payment has already been made, direct confrontation activates defensiveness. More effective is going through concrete verification: IBAN in system vs. contract IBAN, sender domain, call on internal number. These actions do not challenge the employee's judgment — they demonstrate verification."
      >Kada je uplata već izvršena, direktna konfrontacija aktivira defanzivnost. Efikasnije je ići kroz konkretnu proveru: IBAN u sistemu vs. IBAN u ugovoru, domen pošiljaoca, poziv na interni broj. Te radnje ne napadaju procenu zaposlenog — demonstriraju verifikaciju.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Možemo li zajedno proveriti IBAN u sistemu sa IBAN-om u ugovoru?" data-en="Can we check the IBAN in the system against the contract IBAN together?">Možemo li zajedno proveriti IBAN u sistemu sa IBAN-om u ugovoru?</li>
            <li data-sr="Da li smo pozvali pošiljaoca na broj koji imamo u internom sistemu?" data-en="Did we call the sender on the number we have in our internal system?">Da li smo pozvali pošiljaoca na broj koji imamo u internom sistemu?</li>
            <li data-sr="Da li zahtev za promenom bio najavljen u prethodnoj pisanoj komunikaciji?" data-en="Was the change request announced in prior written communication?">Da li zahtev za promenom bio najavljen u prethodnoj pisanoj komunikaciji?</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Provera IBAN-a sa ugovorom traže minut i isključuje grešku." data-en="Checking the IBAN against the contract takes a minute and rules out errors.">Provera IBAN-a sa ugovorom traže minut i isključuje grešku.</li>
            <li data-sr="Pozovimo pošiljaoca na interni broj — ako je zahtev legitiman, potvrda neće biti problem." data-en="Let's call the sender on the internal number — if the request is legitimate, confirmation will not be a problem.">Pozovimo pošiljaoca na interni broj — ako je zahtev legitiman, potvrda neće biti problem.</li>
            <li data-sr="Recall je moguć unutar 72 sata — odmah zovemo banku." data-en="Recall is possible within 72 hours — we call the bank now.">Recall je moguć unutar 72 sata — odmah zovemo banku.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 9) POVEZANE PREVARE -->
    <section class="card">
      <h2 data-sr="Povezane prevare" data-en="Related scams">Povezane prevare</h2>
      <div class="branch">
        <ul class="bullets">
          <li><a href="business-email-compromise.html" data-sr="Kompromitovanje poslovnog imejla (BEC)" data-en="Business email compromise (BEC)">Kompromitovanje poslovnog imejla (BEC)</a></li>
          <li><a href="ceo-fraud.html" data-sr="CEO prevara" data-en="CEO fraud">CEO prevara</a></li>
          <li><a href="invoice-fraud.html" data-sr="Prevara sa fakturama" data-en="Invoice fraud">Prevara sa fakturama</a></li>
          <li><a href="mandate-fraud.html" data-sr="Prevara sa nalozima za plaćanje" data-en="Mandate fraud">Prevara sa nalozima za plaćanje</a></li>
          <li><a href="vendor-email-compromise.html" data-sr="Kompromitovanje imejla dobavljača" data-en="Vendor email compromise">Kompromitovanje imejla dobavljača</a></li>
          <li><a href="payroll-diversion.html" data-sr="Preusmeravanje plata" data-en="Payroll diversion">Preusmeravanje plata</a></li>
          <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
        </ul>
      </div>
    </section>
  `
};
