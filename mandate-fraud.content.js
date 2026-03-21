window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["mandate-fraud"] = {
  raw_html: `
    <!-- 1) UVOD -->
    <section class="card">
      <h2 data-sr="Uvod: kako radi prevara sa nalozima" data-en="Introduction: how mandate fraud works">
        Uvod: kako radi prevara sa nalozima
      </h2>

      <p
        data-sr="Mandate fraud cilja trajne naloge za plaćanje — mesečne transfere koji se izvršavaju automatski ili rutinski bez pojedinih zahteva za odobravanjem. Napadač kontaktira firmu ili individuu i traži izmenu bankovnih podataka primaoca: novi IBAN za redovnu uplatu. Kada primalac ažurira nalog, sve buduće uplate automatski idu napadaču."
        data-en="Mandate fraud targets standing payment orders — monthly transfers that execute automatically or routinely without individual approval requests. The attacker contacts the company or individual and requests a change to the recipient's bank details: new IBAN for the regular payment. When the payer updates the order, all future payments automatically go to the attacker."
      >Mandate fraud cilja trajne naloge za plaćanje — mesečne transfere koji se izvršavaju automatski ili rutinski bez pojedinih zahteva za odobravanjem. Napadač kontaktira firmu ili individuu i traži izmenu bankovnih podataka primaoca: novi IBAN za redovnu uplatu. Kada primalac ažurira nalog, sve buduće uplate automatski idu napadaču.</p>

      <p
        data-sr="Napad je posebno opasan jer može ostati neotkrivena dugo — primalac (dobavljač, stanodavac, servisna firma) ne zna da se nešto dešava jer misli da postoji kašnjenje u banci, a platiša misli da plaća normalno. Otkrivanje dolazi tek kad primalac pošalje opomenu ili kad platiša uradi audit plaćanja."
        data-en="The attack is particularly dangerous because it can remain undetected for a long time — the recipient (supplier, landlord, service company) doesn't know anything is happening because they assume there's a bank delay, and the payer thinks they're paying normally. Discovery comes only when the recipient sends a notice or the payer conducts a payment audit."
      >Napad je posebno opasan jer može ostati neotkrivena dugo — primalac (dobavljač, stanodavac, servisna firma) ne zna da se nešto dešava jer misli da postoji kašnjenje u banci, a platiša misli da plaća normalno. Otkrivanje dolazi tek kad primalac pošalje opomenu ili kad platiša uradi audit plaćanja.</p>

      <div class="callout"
        data-sr="<strong>Model:</strong> identifikacija trajnog naloga → lažni identitet primaoca → zahtev za izmenom IBAN-a → ažuriranje naloga → automatske uplate idu napadaču mesecima → otkrivanje kroz opomenu primaoca."
        data-en="<strong>Model:</strong> identification of standing order → fake recipient identity → IBAN change request → order updated → automatic payments go to attacker for months → discovery through recipient's notice."
      ><strong>Model:</strong> identifikacija trajnog naloga → lažni identitet primaoca → zahtev za izmenom IBAN-a → ažuriranje naloga → automatske uplate idu napadaču mesecima → otkrivanje kroz opomenu primaoca.</div>

      <div class="callout"
        data-sr="<strong>Prag:</strong> platiša ažurira trajni nalog bez nezavisne telefonske verifikacije sa pravim primaocem na poznatom broju."
        data-en="<strong>Threshold:</strong> payer updates the standing order without independent phone verification with the real recipient on a known number."
      ><strong>Prag:</strong> platiša ažurira trajni nalog bez nezavisne telefonske verifikacije sa pravim primaocem na poznatom broju.</div>
    </section>

    <!-- 2) KAKO GENERALNO RADI -->
    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika trajnog naloga i izmene" data-en="How it works: standing order and change mechanics">
        Kako generalno radi: mehanika trajnog naloga i izmene
      </h2>

      <p
        data-sr="Mandate fraud eksploatiše automatizam i rutinu. Trajni nalozi se ažuriraju retko, pa primalac nema razlog za sumnju kada stiže normalan zahtev za ažuriranjem podataka. Napadač konstruiše zahtev koji izgleda administrativno — promene banke, reorganizacija, novi IBAN zbog spajanja. Ton je miran i birokratski."
        data-en="Mandate fraud exploits automation and routine. Standing orders are updated rarely, so the payer has no reason for suspicion when a normal update request arrives. The attacker constructs a request that looks administrative — bank change, reorganization, new IBAN due to merger. The tone is calm and bureaucratic."
      >Mandate fraud eksploatiše automatizam i rutinu. Trajni nalozi se ažuriraju retko, pa primalac nema razlog za sumnju kada stiže normalan zahtev za ažuriranjem podataka. Napadač konstruiše zahtev koji izgleda administrativno — promene banke, reorganizacija, novi IBAN zbog spajanja. Ton je miran i birokratski.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gradi kredibilitet zahteva" data-en="What builds request credibility">Šta gradi kredibilitet zahteva</div>
          <ul class="bullets">
            <li data-sr="pravo ime primaoca ili institucije u zahtevu." data-en="real recipient or institution name in the request.">pravo ime primaoca ili institucije u zahtevu.</li>
            <li data-sr="imejl adresa koja vizualno izgleda kao prava." data-en="email address that looks visually like the real one.">imejl adresa koja vizualno izgleda kao prava.</li>
            <li data-sr="administrativni ton: bankovne promene, reorganizacija, novi IBAN." data-en="administrative tone: &ldquo;banking changes&rdquo;, &ldquo;reorganization&rdquo;, &ldquo;new IBAN&rdquo;.">administrativni ton: bankovne promene, reorganizacija, novi IBAN.</li>
            <li data-sr="profesionalni prilog kao zvanična dokumentacija." data-en="professional attachment as &ldquo;official documentation&rdquo;.">profesionalni prilog kao zvanična dokumentacija.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Tipični ciljevi" data-en="Typical targets">Tipični ciljevi</div>
          <ul class="bullets">
            <li data-sr="redovne uplate dobavljačima za tekuće usluge." data-en="regular supplier payments for ongoing services.">redovne uplate dobavljačima za tekuće usluge.</li>
            <li data-sr="kirija i uplate stanodavcu." data-en="rent payments to a landlord.">kirija i uplate stanodavcu.</li>
            <li data-sr="mesečne rate kredita ili lizing." data-en="monthly loan or lease payments.">mesečne rate kredita ili lizing.</li>
            <li data-sr="uplate za komunalne usluge ili pretplate." data-en="utility payments or subscription fees.">uplate za komunalne usluge ili pretplate.</li>
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
        data-sr="Faze su prikazane kao operativni tok: šta meta vidi, šta se traži, gde se pali grananje."
        data-en="Phases are shown as an operational flow: what the target sees, what is demanded, and where branching happens."
      >Faze su prikazane kao operativni tok: šta meta vidi, šta se traži, gde se pali grananje.</p>

      <!-- FAZA 1 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Izviđanje: identifikacija trajnog naloga" data-en="Phase 1 — Reconnaissance: identifying a standing order">
          Faza 1 — Izviđanje: identifikacija trajnog naloga
        </h3>
        <p
          data-sr="Napadač identifikuje platiša i koji trajni nalog ima vrednost. Poslovni registri, web sajtovi i procurele fakture otkrivaju ko kome redovno plaća. Napadač bira cilj sa visokim mesečnim iznosom — kirija, usluge, pretplate — i identifikuje pravo ime i kontakt primaoca."
          data-en="The attacker identifies the payer and which standing order has value. Business registries, websites, and leaked invoices reveal who pays whom regularly. The attacker selects a target with a high monthly amount — rent, services, subscriptions — and identifies the real recipient's name and contact."
        >Napadač identifikuje platiša i koji trajni nalog ima vrednost. Poslovni registri, web sajtovi i procurele fakture otkrivaju ko kome redovno plaća. Napadač bira cilj sa visokim mesečnim iznosom — kirija, usluge, pretplate — i identifikuje pravo ime i kontakt primaoca.</p>
        <ul class="bullets">
          <li data-sr="signal: poslovni odnosi i mesečne uplate dostupni u javnim registrima." data-en="signal: business relationships and monthly payments available in public registries.">signal: poslovni odnosi i mesečne uplate dostupni u javnim registrima.</li>
          <li data-sr="signal: institucija ili dobavljač primaoc ne komunicira redovno sa platišem." data-en="signal: recipient institution or supplier doesn't communicate regularly with the payer.">signal: institucija ili dobavljač primaoc ne komunicira redovno sa platišem.</li>
        </ul>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> napadač identifikovao trajni nalog sa visokim iznosom i zna pravo ime primaoca."
          data-en="<strong>Phase threshold:</strong> attacker identified a standing order with a high amount and knows the real recipient's name."
        ><strong>Prag faze:</strong> napadač identifikovao trajni nalog sa visokim iznosom i zna pravo ime primaoca.</div>
      </article>

      <!-- FAZA 2 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Priprema lažnog identiteta primaoca" data-en="Phase 2 — Preparing fake recipient identity">
          Faza 2 — Priprema lažnog identiteta primaoca
        </h3>
        <p
          data-sr="Napadač registruje lookalike domen primaoca ili kompromituje pravi nalog. Priprema imejl koji imitira stil komunikacije institucije ili dobavljača. Prilaže lažni PDF kao zvanično obaveštenje o izmeni bankovnih podataka sa potpisom i pečatom."
          data-en="The attacker registers a lookalike domain of the recipient or compromises a real account. They draft an email imitating the communication style of the institution or supplier. They attach a fake PDF as an &ldquo;official bank detail change notification&rdquo; with signature and stamp."
        >Napadač registruje lookalike domen primaoca ili kompromituje pravi nalog. Priprema imejl koji imitira stil komunikacije institucije ili dobavljača. Prilaže lažni PDF kao zvanično obaveštenje o izmeni bankovnih podataka sa potpisom i pečatom.</p>
        <ul class="bullets">
          <li data-sr="signal: domen identičan ali sadrži crtu ili broj (company-finance.com umesto company.com)." data-en="signal: domain identical but with dash or number (company-finance.com instead of company.com).">signal: domen identičan ali sadrži crtu ili broj (company-finance.com umesto company.com).</li>
        </ul>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
            <li><a href="vendor-email-compromise.html" data-sr="Kompromitovanje imejla dobavljača" data-en="Vendor email compromise">Kompromitovanje imejla dobavljača</a></li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> lažni identitet primaoca spreman i vizualno uverljiv."
          data-en="<strong>Phase threshold:</strong> fake recipient identity ready and visually convincing."
        ><strong>Prag faze:</strong> lažni identitet primaoca spreman i vizualno uverljiv.</div>
      </article>

      <!-- FAZA 3 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Zahtev za izmenom trajnog naloga" data-en="Phase 3 — Request to change the standing order">
          Faza 3 — Zahtev za izmenom trajnog naloga
        </h3>
        <p
          data-sr="Napadač šalje imejl platišu. Poruka izgleda kao administrativna obaveza: obaveštavamo vas da smo promenili poslovnu banku. Ton je birokratski i ne izaziva sumnju. Priložena je lažna dokumentacija. Zahtev je rutinski — samo je potrebno ažurirati IBAN u sistemu ili banci."
          data-en="The attacker emails the payer. The message looks like an administrative obligation: &ldquo;we inform you that we have changed our business bank&rdquo;. The tone is bureaucratic and raises no suspicion. Fake documentation is attached. The request is routine — just update the IBAN in the system or bank."
        >Napadač šalje imejl platišu. Poruka izgleda kao administrativna obaveza: obaveštavamo vas da smo promenili poslovnu banku. Ton je birokratski i ne izaziva sumnju. Priložena je lažna dokumentacija. Zahtev je rutinski — samo je potrebno ažurirati IBAN u sistemu ili banci.</p>
        <ul class="bullets">
          <li data-sr="fraze: u okviru reorganizacije prešli smo na novu banku." data-en="phrases: &ldquo;as part of our reorganization we have moved to a new bank&rdquo;.">fraze: u okviru reorganizacije prešli smo na novu banku.</li>
          <li data-sr="fraze: molimo ažurirati trajni nalog najkasnije do [datum]." data-en="phrases: &ldquo;please update the standing order by [date] at the latest&rdquo;.">fraze: molimo ažurirati trajni nalog najkasnije do [datum].</li>
          <li data-sr="fraze: u prilogu je zvanična potvrda od naše banke." data-en="phrases: &ldquo;attached is the official confirmation from our bank&rdquo;.">fraze: u prilogu je zvanična potvrda od naše banke.</li>
        </ul>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="invoice-fraud.html" data-sr="Prevara sa fakturama" data-en="Invoice fraud">Prevara sa fakturama</a></li>
            <li><a href="ceo-fraud.html" data-sr="CEO prevara" data-en="CEO fraud">CEO prevara</a></li>
            <li><a href="business-email-compromise.html" data-sr="Kompromitovanje poslovnog imejla (BEC)" data-en="Business email compromise (BEC)">Kompromitovanje poslovnog imejla (BEC)</a></li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> platiša tretira zahtev kao administrativnu rutinu i kreće ka ažuriranju naloga."
          data-en="<strong>Phase threshold:</strong> payer treats the request as administrative routine and moves toward updating the order."
        ><strong>Prag faze:</strong> platiša tretira zahtev kao administrativnu rutinu i kreće ka ažuriranju naloga.</div>
      </article>

      <!-- FAZA 4 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Trajni nalog ažuriran, uplate idu napadaču" data-en="Phase 4 — Standing order updated, payments go to attacker">
          Faza 4 — Trajni nalog ažuriran, uplate idu napadaču
        </h3>
        <p
          data-sr="Platiša ažurira IBAN u sistemu ili banci. Sledeći mesec — i svaki naredni — automatska uplata odlazi na napadačev račun. Pravi primalac čeka i misli da postoji bankarski problem. Platiša misli da plaća normalno. Napadač prima uplate sve dok se neko ne upita zašto dugovi rastu."
          data-en="The payer updates the IBAN in the system or bank. Next month — and every month after — the automatic payment goes to the attacker's account. The real recipient waits and thinks there's a bank problem. The payer thinks they're paying normally. The attacker receives payments until someone asks why debts are growing."
        >Platiša ažurira IBAN u sistemu ili banci. Sledeći mesec — i svaki naredni — automatska uplata odlazi na napadačev račun. Pravi primalac čeka i misli da postoji bankarski problem. Platiša misli da plaća normalno. Napadač prima uplate sve dok se neko ne upita zašto dugovi rastu.</p>
        <ul class="bullets">
          <li data-sr="signal: primalac počinje da šalje opomene za kašnjenje uplata." data-en="signal: recipient begins sending late payment notices.">signal: primalac počinje da šalje opomene za kašnjenje uplata.</li>
        </ul>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> nalog ažuriran — napadač prima svaku buduću automatsku uplatu."
          data-en="<strong>Phase threshold:</strong> order updated — attacker receives every future automatic payment."
        ><strong>Prag faze:</strong> nalog ažuriran — napadač prima svaku buduću automatsku uplatu.</div>
      </article>

      <!-- FAZA 5 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Serija automatskih uplata, rastući gubitak" data-en="Phase 5 — Series of automatic payments, growing loss">
          Faza 5 — Serija automatskih uplata, rastući gubitak
        </h3>
        <p
          data-sr="Automatski nalozi rade za napadača mesecima. Ukupan gubitak raste linearno. Ovo je najdugotrajniji oblik BEC gubitka — bez ikakvog novog zahvata od strane napadača nakon inicijalne izmene."
          data-en="Automatic orders work for the attacker for months. Total loss grows linearly. This is the longest-lasting form of BEC loss — without any new action from the attacker after the initial change."
        >Automatski nalozi rade za napadača mesecima. Ukupan gubitak raste linearno. Ovo je najdugotrajniji oblik BEC gubitka — bez ikakvog novog zahvata od strane napadača nakon inicijalne izmene.</p>
        <div class="callout"
          data-sr="<strong>Indikator:</strong> svaki mesec bez provere = još jedan izgubljen iznos. Mandate fraud se detektuje kasno, a svaki mesec kašnjenja povećava ukupan gubitak."
          data-en="<strong>Indicator:</strong> every month without verification = another lost amount. Mandate fraud is detected late, and every month of delay increases total loss."
        ><strong>Indikator:</strong> svaki mesec bez provere = još jedan izgubljen iznos. Mandate fraud se detektuje kasno, a svaki mesec kašnjenja povećava ukupan gubitak.</div>
      </article>

      <!-- FAZA 6 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Otkrivanje" data-en="Phase 6 — Discovery">
          Faza 6 — Otkrivanje
        </h3>
        <p
          data-sr="Otkrivanje dolazi kada pravi primalac pošalje formalnu opomenu za više neplaćenih meseci, ili kada platiša uradi audit trajnih naloga i uporedi IBAN u sistemu sa IBAN-om u ugovoru. Nekad otkriva i banka kroz AML monitoring."
          data-en="Discovery comes when the real recipient sends a formal notice for several unpaid months, or when the payer conducts a standing order audit and compares the IBAN in the system with the IBAN in the contract. Sometimes the bank discovers it through AML monitoring."
        >Otkrivanje dolazi kada pravi primalac pošalje formalnu opomenu za više neplaćenih meseci, ili kada platiša uradi audit trajnih naloga i uporedi IBAN u sistemu sa IBAN-om u ugovoru. Nekad otkriva i banka kroz AML monitoring.</p>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> treća strana van lanca prevare otkriva neslaganje između IBAN-a u sistemu i ugovornog IBAN-a."
          data-en="<strong>Phase threshold:</strong> third party outside the fraud chain detects the discrepancy between the IBAN in the system and the contractual IBAN."
        ><strong>Prag faze:</strong> treća strana van lanca prevare otkriva neslaganje između IBAN-a u sistemu i ugovornog IBAN-a.</div>
      </article>

      <!-- FAZA 7 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 7 — Recovery talaš" data-en="Phase 7 — Recovery wave">
          Faza 7 — Recovery talaš
        </h3>
        <p
          data-sr="Posle otkrivanja incidenta ponekad stiže kontakt sa ponudom povraćaja uz uplatu unapred. Firme su pod pritiskom zbog akumuliranih dugova prema pravim primaocima — to povećava ranjivost na recovery prevare."
          data-en="After the incident is discovered, a contact sometimes arrives offering recovery for an upfront fee. Companies are under pressure from accumulated debts to real recipients — this increases vulnerability to recovery scams."
        >Posle otkrivanja incidenta ponekad stiže kontakt sa ponudom povraćaja uz uplatu unapred. Firme su pod pritiskom zbog akumuliranih dugova prema pravim primaocima — to povećava ranjivost na recovery prevare.</p>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="recovery-scam.html" data-sr="Prevara povraćaja novca" data-en="Recovery scam">Prevara povraćaja novca</a></li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Filter:</strong> povraćaj + uplata unapred = novi napad. Svaki agent za povraćaj koji traži uplatu je drugi napad."
          data-en="<strong>Filter:</strong> recovery + upfront fee = new attack. Every recovery agent who requires a payment is a second attack."
        ><strong>Filter:</strong> povraćaj + uplata unapred = novi napad. Svaki agent za povraćaj koji traži uplatu je drugi napad.</div>
      </article>
    </section>

    <!-- 4) CRVENE ZASTAVICE -->
    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="zahtev za izmenom IBAN-a za trajni nalog stiže samo imejlom bez prethodne usmene komunikacije." data-en="request to change IBAN for a standing order arrives by email only without prior verbal communication.">zahtev za izmenom IBAN-a za trajni nalog stiže samo imejlom bez prethodne usmene komunikacije.</li>
        <li data-sr="imejl adresa vizualno slična ali pažljivim pregledom drugačija od prave." data-en="email address visually similar but different on closer inspection.">imejl adresa vizualno slična ali pažljivim pregledom drugačija od prave.</li>
        <li data-sr="novi IBAN je u drugoj zemlji ili banci od one u ugovoru." data-en="new IBAN is in a different country or bank from the one in the contract.">novi IBAN je u drugoj zemlji ili banci od one u ugovoru.</li>
        <li data-sr="imejl dodaje rok do kog treba ažurirati nalog koji nije bio najavljen." data-en="email adds a deadline for updating the order that was not previously announced.">imejl dodaje rok do kog treba ažurirati nalog koji nije bio najavljen.</li>
        <li data-sr="kontakt broj za potvrdu u imejlu razlikuje se od broja u ugovoru." data-en="confirmation contact number in the email differs from the contract number.">kontakt broj za potvrdu u imejlu razlikuje se od broja u ugovoru.</li>
        <li data-sr="primalac se ne može telefonski potvrditi na poznati broj iz sistema." data-en="recipient cannot be confirmed by phone on a known number from the system.">primalac se ne može telefonski potvrditi na poznati broj iz sistema.</li>
        <li data-sr="priloženi PDF deluje generički ili ima sitne greške u formatiranju." data-en="attached PDF looks generic or has minor formatting errors.">priloženi PDF deluje generički ili ima sitne greške u formatiranju.</li>
        <li data-sr="isti mesec primalac šalje opomenu za kašnjenje — ali sistem platiše ne pokazuje grešku." data-en="same month recipient sends a late payment notice — but the payer's system shows no issue.">isti mesec primalac šalje opomenu za kašnjenje — ali sistem platiše ne pokazuje grešku.</li>
      </ul>
    </section>

    <!-- 5) PROVERE -->
    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera pre izmene trajnog naloga" data-en="Checks: 8 quick checks before changing a standing order">Provere: 8 brzih provera pre izmene trajnog naloga</h2>

      <p
        data-sr="Svaka promena trajnog naloga zahteva nezavisnu verifikaciju — kroz kanale koji ne dolaze od imejla koji je tražio promenu. Periodičan audit trajnih naloga (jednom godišnje) preseca mandate fraud pre nego što se akumulira gubitak."
        data-en="Every standing order change requires independent verification — through channels that do not come from the email that requested the change. A periodic standing order audit (once a year) cuts mandate fraud before losses accumulate."
      >Svaka promena trajnog naloga zahteva nezavisnu verifikaciju — kroz kanale koji ne dolaze od imejla koji je tražio promenu. Periodičan audit trajnih naloga (jednom godišnje) preseca mandate fraud pre nego što se akumulira gubitak.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Provere identiteta i IBAN-a" data-en="Identity and IBAN checks">Provere identiteta i IBAN-a</div>
          <ul class="bullets">
            <li data-sr="proveri pun email domen karakter po karakter." data-en="check full email domain character by character.">proveri pun email domen karakter po karakter.</li>
            <li data-sr="pozovi primaoca na broj iz ugovora ili internog sistema — ne iz imejla." data-en="call the recipient on the contract or internal system number — not from the email.">pozovi primaoca na broj iz ugovora ili internog sistema — ne iz imejla.</li>
            <li data-sr="uporedi novi IBAN sa IBAN-om u ugovoru — svako neslaganje = stop i verifikacija." data-en="compare new IBAN with IBAN in the contract — any mismatch = stop and verify.">uporedi novi IBAN sa IBAN-om u ugovoru — svako neslaganje = stop i verifikacija.</li>
            <li data-sr="proveri BIC/SWIFT — odgovara li zemlja i banka istoriji ovog primaoca?" data-en="check BIC/SWIFT — does the country and bank match this recipient's history?">proveri BIC/SWIFT — odgovara li zemlja i banka istoriji ovog primaoca?</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Sistemske i proceduralne provere" data-en="System and procedural checks">Sistemske i proceduralne provere</div>
          <ul class="bullets">
            <li data-sr="proveri u sistemu plaćanja kada je IBAN ovog primaoca poslednji put izmenjen." data-en="check in the payment system when this recipient's IBAN was last changed.">proveri u sistemu plaćanja kada je IBAN ovog primaoca poslednji put izmenjen.</li>
            <li data-sr="da li primalac ranije menjao bankarske podatke — koji je bio postupak tada?" data-en="did the recipient change banking details before — what was the procedure then?">da li primalac ranije menjao bankarske podatke — koji je bio postupak tada?</li>
            <li data-sr="uradi periodičan audit trajnih naloga: poredi IBAN u sistemu sa IBAN-om u ugovoru." data-en="conduct periodic standing order audit: compare IBAN in system with IBAN in contract.">uradi periodičan audit trajnih naloga: poredi IBAN u sistemu sa IBAN-om u ugovoru.</li>
            <li data-sr="da li nova dokumentacija dolazi sa nezavisno proverljivim elementima (matični broj firme, javni registar)?" data-en="does the new documentation include independently verifiable elements (company registration number, public registry)?">da li nova dokumentacija dolazi sa nezavisno proverljivim elementima (matični broj firme, javni registar)?</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 6) CHECKLISTA -->
    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja pre izmene trajnog naloga" data-en="Checklist: 12 questions before changing a standing order">Checklista: 12 pitanja pre izmene trajnog naloga</h2>

      <p class="muted"
        data-sr="Brzo čitanje. Više loših odgovora znači aktivan mandate fraud obrazac."
        data-en="Quick read. Multiple bad answers indicate an active mandate fraud pattern."
      >Brzo čitanje. Više loših odgovora znači aktivan mandate fraud obrazac.</p>

      <ul class="bullets">
        <li data-sr="Da li je zahtev za izmenom stigao samo imejlom bez prethodne usmene komunikacije?" data-en="Did the change request arrive by email only without prior verbal communication?">Da li je zahtev za izmenom stigao samo imejlom bez prethodne usmene komunikacije?</li>
        <li data-sr="Da li je domen pošiljaoca identičan domenu koji ovaj primalac inače koristi?" data-en="Is the sender's domain identical to the domain this recipient normally uses?">Da li je domen pošiljaoca identičan domenu koji ovaj primalac inače koristi?</li>
        <li data-sr="Da li novi IBAN odgovara IBAN-u navedenom u ugovoru sa ovim primaocem?" data-en="Does the new IBAN match the IBAN stated in the contract with this recipient?">Da li novi IBAN odgovara IBAN-u navedenom u ugovoru sa ovim primaocem?</li>
        <li data-sr="Da li smo primaoca pozvali na poznati broj i dobili telefonsku potvrdu izmene?" data-en="Did we call the recipient on a known number and get phone confirmation of the change?">Da li smo primaoca pozvali na poznati broj i dobili telefonsku potvrdu izmene?</li>
        <li data-sr="Da li je novi IBAN u istoj zemlji i banci kao prethodni nalog ovog primaoca?" data-en="Is the new IBAN in the same country and bank as the previous order from this recipient?">Da li je novi IBAN u istoj zemlji i banci kao prethodni nalog ovog primaoca?</li>
        <li data-sr="Da li je datum zadnje izmene ovog trajnog naloga u sistemu konzistentan sa istorijom saradnje?" data-en="Is the date of the last change to this standing order in the system consistent with the cooperation history?">Da li je datum zadnje izmene ovog trajnog naloga u sistemu konzistentan sa istorijom saradnje?</li>
        <li data-sr="Da li priložena dokumentacija sadrži matični broj ili registarski podatak koji možemo nezavisno proveriti?" data-en="Does the attached documentation contain a registration number or detail we can independently verify?">Da li priložena dokumentacija sadrži matični broj ili registarski podatak koji možemo nezavisno proveriti?</li>
        <li data-sr="Da li se kontakt broj za potvrdu iz imejla razlikuje od kontakt broja u ugovoru?" data-en="Does the confirmation number in the email differ from the contact number in the contract?">Da li se kontakt broj za potvrdu iz imejla razlikuje od kontakt broja u ugovoru?</li>
        <li data-sr="Da li ovaj primalac ranije menjao bankarske podatke — da li je tada bila slična procedura?" data-en="Did this recipient change banking details before — was there a similar procedure then?">Da li ovaj primalac ranije menjao bankarske podatke — da li je tada bila slična procedura?</li>
        <li data-sr="Da li imejl dodaje rok koji nije bio najavljen u ugovoru ili prethodnoj komunikaciji?" data-en="Does the email add a deadline not announced in the contract or prior communication?">Da li imejl dodaje rok koji nije bio najavljen u ugovoru ili prethodnoj komunikaciji?</li>
        <li data-sr="Da li je ovaj primalac počeo nedavno da šalje opomene za kašnjenje uplata?" data-en="Has this recipient recently started sending late payment notices?">Da li je ovaj primalac počeo nedavno da šalje opomene za kašnjenje uplata?</li>
        <li data-sr="Da li IBAN u sistemu plaćanja odgovara IBAN-u u poslednjem ugovoru sa ovim primaocem?" data-en="Does the IBAN in the payment system match the IBAN in the most recent contract with this recipient?">Da li IBAN u sistemu plaćanja odgovara IBAN-u u poslednjem ugovoru sa ovim primaocem?</li>
      </ul>
    </section>

    <!-- 7) AKO SUMNJA KRENE -->
    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="ne menjaj trajni nalog dok ne obavljaš telefonsku verifikaciju sa primaocem na poznati broj." data-en="do not change the standing order until you complete phone verification with the recipient on a known number.">ne menjaj trajni nalog dok ne obavljaš telefonsku verifikaciju sa primaocem na poznati broj.</li>
        <li data-sr="ako je nalog već izmenjen: odmah promeni IBAN nazad na ugovorni i obustavi uplatu." data-en="if the order has already been changed: immediately revert the IBAN to the contractual one and suspend payment.">ako je nalog već izmenjen: odmah promeni IBAN nazad na ugovorni i obustavi uplatu.</li>
        <li data-sr="ako je uplata već otišla: odmah kontaktuj banku i zatraži recall." data-en="if payment has already gone through: contact your bank immediately and request recall.">ako je uplata već otišla: odmah kontaktuj banku i zatraži recall.</li>
        <li data-sr="obavesti pravog primaoca da su mu podaci zloupotrebljeni." data-en="notify the real recipient that their details have been misused.">obavesti pravog primaoca da su mu podaci zloupotrebljeni.</li>
        <li data-sr="uradi audit svih trajnih naloga — proveri da li je još koji IBAN promenjen bez verifikacije." data-en="audit all standing orders — check whether any other IBAN was changed without verification.">uradi audit svih trajnih naloga — proveri da li je još koji IBAN promenjen bez verifikacije.</li>
        <li data-sr="sačuvaj sve imejlove i dokumentaciju kao dokaze i prijavi policiji." data-en="preserve all emails and documentation as evidence and report to police.">sačuvaj sve imejlove i dokumentaciju kao dokaze i prijavi policiji.</li>
      </ol>

      <div class="callout"
        data-sr="<strong>Zašto ovaj redosled radi:</strong> izmena nazad na ugovorni IBAN odmah sprečava sve buduće gubitke. Recall je moguć unutar 24–72 sata."
        data-en="<strong>Why this order works:</strong> reverting back to the contractual IBAN immediately stops all future losses. Recall is possible within 24–72 hours."
      ><strong>Zašto ovaj redosled radi:</strong> izmena nazad na ugovorni IBAN odmah sprečava sve buduće gubitke. Recall je moguć unutar 24–72 sata.</div>
    </section>

    <!-- 8) AKO POMAŽEŠ NEKOME -->
    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>

      <p
        data-sr="Kada osoba već ima izmenjen trajni nalog i nije svesna toga, fokus je na konkretnoj proveri: IBAN u sistemu vs. IBAN u ugovoru. Ta provera ne napada procenu osobe — identifikuje objektivno neslaganje."
        data-en="When a person already has a changed standing order and isn't aware of it, the focus is on a concrete check: IBAN in the system vs. IBAN in the contract. That check doesn't attack the person's judgment — it identifies an objective discrepancy."
      >Kada osoba već ima izmenjen trajni nalog i nije svesna toga, fokus je na konkretnoj proveri: IBAN u sistemu vs. IBAN u ugovoru. Ta provera ne napada procenu osobe — identifikuje objektivno neslaganje.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li možemo da proverimo IBAN u sistemu i IBAN u ugovoru sa ovim primaocem?" data-en="Can we check the IBAN in the system and the IBAN in the contract with this recipient?">Da li možemo da proverimo IBAN u sistemu i IBAN u ugovoru sa ovim primaocem?</li>
            <li data-sr="Kada je poslednji put promenjen IBAN za ovaj trajni nalog?" data-en="When was the IBAN for this standing order last changed?">Kada je poslednji put promenjen IBAN za ovaj trajni nalog?</li>
            <li data-sr="Da li primalac šalje opomene za kašnjenje iako mi plaćamo redovno?" data-en="Is the recipient sending late payment notices even though we pay regularly?">Da li primalac šalje opomene za kašnjenje iako mi plaćamo redovno?</li>
            <li data-sr="Da li je zahtev za izmenom bio telefonski potvrđen na broj iz ugovora?" data-en="Was the change request confirmed by phone on the contract number?">Da li je zahtev za izmenom bio telefonski potvrđen na broj iz ugovora?</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Hajde da proverimo IBAN u sistemu sa IBAN-om u ugovoru — traže minut." data-en="Let's check the IBAN in the system against the contract IBAN — takes a minute.">Hajde da proverimo IBAN u sistemu sa IBAN-om u ugovoru — traže minut.</li>
            <li data-sr="Ako primalac prima opomene a mi smo platili, problem je u IBAN-u — ne u nama." data-en="If the recipient is getting notices but we paid, the problem is in the IBAN — not us.">Ako primalac prima opomene a mi smo platili, problem je u IBAN-u — ne u nama.</li>
            <li data-sr="Godišnji audit trajnih naloga sprečava ovaj tip gubitka bez ikakvih troškova." data-en="Annual standing order audit prevents this type of loss at zero cost.">Godišnji audit trajnih naloga sprečava ovaj tip gubitka bez ikakvih troškova.</li>
            <li data-sr="Sačuvajmo imejl koji je tražio izmenu i odmah zovemo banku." data-en="Let's save the email that requested the change and call the bank now.">Sačuvajmo imejl koji je tražio izmenu i odmah zovemo banku.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 9) POVEZANE PREVARE -->
    
  `
};
