window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["vendor-email-compromise"] = {
  raw_html: `
    <!-- 1) UVOD -->
    <section class="card">
      <h2 data-sr="Uvod: kako radi kompromitovanje imejla dobavljača" data-en="Introduction: how vendor email compromise works">
        Uvod: kako radi kompromitovanje imejla dobavljača
      </h2>

      <p
        data-sr="U ovom napadu napadač kompromituje imejl nalog dobavljača ili registruje lažni domen koji izgleda identično. Zatim kontaktira firmu-klijenta i obaveštava je da je dobavljač promenio bankovni račun. Sledeća faktura — ili sledeći mesečni transfer — odlazi na napadačev račun. Firma misli da plaća svom dobavljaču."
        data-en="In this attack, the attacker compromises a supplier's email account or registers a fake domain that looks identical. They then contact the client company and notify them that the supplier has changed their bank account. The next invoice — or the next monthly transfer — goes to the attacker's account. The company thinks it's paying its supplier."
      >U ovom napadu napadač kompromituje imejl nalog dobavljača ili registruje lažni domen koji izgleda identično. Zatim kontaktira firmu-klijenta i obaveštava je da je dobavljač promenio bankovni račun. Sledeća faktura — ili sledeći mesečni transfer — odlazi na napadačev račun. Firma misli da plaća svom dobavljaču.</p>

      <p
        data-sr="Ovaj tip napada je posebno podmukao jer prevara može proći neotkrivena kroz više ciklusa plaćanja. Pravi dobavljač ne zna da se nešto dešava, firma nastavlja sa poslom, a napadač prima uplate. Otkrivanje dolazi tek kad pravi dobavljač javi da su mu zaostala dugovanja."
        data-en="This attack is particularly insidious because the fraud can go undetected through multiple payment cycles. The real supplier is unaware, the company continues operating normally, and the attacker receives payments. Discovery only comes when the real supplier reports outstanding unpaid invoices."
      >Ovaj tip napada je posebno podmukao jer prevara može proći neotkrivena kroz više ciklusa plaćanja. Pravi dobavljač ne zna da se nešto dešava, firma nastavlja sa poslom, a napadač prima uplate. Otkrivanje dolazi tek kad pravi dobavljač javi da su mu zaostala dugovanja.</p>

      <div class="callout"
        data-sr="<strong>Model:</strong> izviđanje (dobavljač sa redovnim uplatama) → pristup imejlu dobavljača ili lookalike domen → praćenje prepiske → obaveštenje o promeni IBAN-a → firma ažurira sistem → redovne uplate idu napadaču → otkrivanje kroz neplaćeni dug."
        data-en="<strong>Model:</strong> reconnaissance (supplier with regular payments) → access to supplier email or lookalike domain → monitoring correspondence → IBAN change notification → company updates system → regular payments go to attacker → discovery through unpaid invoices."
      ><strong>Model:</strong> izviđanje (dobavljač sa redovnim uplatama) → pristup imejlu dobavljača ili lookalike domen → praćenje prepiske → obaveštenje o promeni IBAN-a → firma ažurira sistem → redovne uplate idu napadaču → otkrivanje kroz neplaćeni dug.</div>

      <div class="callout"
        data-sr="<strong>Prag:</strong> firma unese novi IBAN dobavljača u sistem bez nezavisne telefonske verifikacije na poznati broj."
        data-en="<strong>Threshold:</strong> company enters the supplier's new IBAN into their system without independent phone verification on a known number."
      ><strong>Prag:</strong> firma unese novi IBAN dobavljača u sistem bez nezavisne telefonske verifikacije na poznati broj.</div>
    </section>

    <!-- 2) KAKO GENERALNO RADI -->
    <section class="card">
      <h2 data-sr="Kako generalno radi: dva ulazna puta" data-en="How it works: two entry paths">
        Kako generalno radi: dva ulazna puta
      </h2>

      <p
        data-sr="Napad može doći kroz kompromitovani pravi nalog dobavljača ili kroz lookalike domen. U prvom slučaju napadač čita prepisku nedeljama pre akcije i bira pravi momenat. U drugom slučaju registruje vizualno identičan domen i šalje profesionalnu poruku sa priloženom „zvaničnom dokumentacijom"."
        data-en="The attack can come through a compromised real supplier account or through a lookalike domain. In the first case, the attacker reads correspondence for weeks before acting and picks the right moment. In the second case, they register a visually identical domain and send a professional message with an attached &ldquo;official document&rdquo;."
      >Napad može doći kroz kompromitovani pravi nalog dobavljača ili kroz lookalike domen. U prvom slučaju napadač čita prepisku nedeljama pre akcije i bira pravi momenat. U drugom slučaju registruje vizualno identičan domen i šalje profesionalnu poruku sa priloženom „zvaničnom dokumentacijom"“.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Kompromitovani pravi nalog" data-en="Compromised real account">Kompromitovani pravi nalog</div>
          <ul class="bullets">
            <li data-sr="napadač pristupa pravom imejl nalogu dobavljača kroz fišing ili slabe lozinke." data-en="attacker accesses real supplier email account through phishing or weak passwords.">napadač pristupa pravom imejl nalogu dobavljača kroz fišing ili slabe lozinke.</li>
            <li data-sr="pre akcije prati komunikaciju između dobavljača i klijenta — uči o obrascu uplata." data-en="before acting, monitors communication between supplier and client — learns payment patterns.">pre akcije prati komunikaciju između dobavljača i klijenta — uči o obrascu uplata.</li>
            <li data-sr="šalje obaveštenje o promeni računa iz pravog imejla — nema sumnje kod primaoca." data-en="sends account change notification from the real email — no suspicion at recipient.">šalje obaveštenje o promeni računa iz pravog imejla — nema sumnje kod primaoca.</li>
            <li data-sr="ostaje u nalogu i presreće sve buduće poruke." data-en="stays in the account and can intercept all future messages.">ostaje u nalogu i presreće sve buduće poruke.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Lookalike domen" data-en="Lookalike domain">Lookalike domen</div>
          <ul class="bullets">
            <li data-sr="napadač registruje vizualno identičan domen: supplier-invoices.com umesto supplier.com." data-en="attacker registers visually identical domain: supplier-invoices.com instead of supplier.com.">napadač registruje vizualno identičan domen: supplier-invoices.com umesto supplier.com.</li>
            <li data-sr="šalje profesionalan imejl sa zahtevom za ažuriranjem bankovnih podataka." data-en="sends professional email requesting banking detail update.">šalje profesionalan imejl sa zahtevom za ažuriranjem bankovnih podataka.</li>
            <li data-sr="prilaže lažni PDF sa potpisom i pečatom kao „zvanična dokumentacija."." data-en="attaches fake PDF with signature and stamp as &ldquo;official documentation&rdquo;.">prilaže lažni PDF sa potpisom i pečatom kao „zvanična dokumentacija"“.</li>
            <li data-sr="otkrivanje moguće samo pažljivim pregledom domene imejla." data-en="detection only possible by carefully checking the email domain.">otkrivanje moguće samo pažljivim pregledom domene imejla.</li>
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
        data-sr="Faze su prikazane kao operativni tok: šta meta vidi, šta se traži, gde se pali grananje u šire BEC varijante."
        data-en="Phases are shown as an operational flow: what the target sees, what is demanded, and where branching into broader BEC variants happens."
      >Faze su prikazane kao operativni tok: šta meta vidi, šta se traži, gde se pali grananje u šire BEC varijante.</p>

      <!-- FAZA 1 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Izviđanje: identifikacija dobavljača" data-en="Phase 1 — Reconnaissance: supplier identification">
          Faza 1 — Izviđanje: identifikacija dobavljača
        </h3>
        <p
          data-sr="Napadač identifikuje firmu i njene ključne dobavljače. Web sajt, LinkedIn i poslovni registri otkrivaju poslovne odnose. Napadač bira dobavljača koji fakturiše redovno i za veće iznose — komunalni dobavljači, IT kompanije, serviseri opreme."
          data-en="The attacker identifies the company and its key suppliers. Website, LinkedIn, and business registries reveal business relationships. The attacker selects a supplier that invoices regularly and for larger amounts — utility providers, IT companies, equipment service providers."
        >Napadač identifikuje firmu i njene ključne dobavljače. Web sajt, LinkedIn i poslovni registri otkrivaju poslovne odnose. Napadač bira dobavljača koji fakturiše redovno i za veće iznose — komunalni dobavljači, IT kompanije, serviseri opreme.</p>
        <ul class="bullets">
          <li data-sr="signal: firma javno navodi dobavljače ili poslovne partnere." data-en="signal: company publicly lists suppliers or business partners.">signal: firma javno navodi dobavljače ili poslovne partnere.</li>
          <li data-sr="signal: ciljani dobavljač nema jaku IT bezbednost (mala firma, zastareli sistemi)." data-en="signal: targeted supplier lacks strong IT security (small firm, outdated systems).">signal: ciljani dobavljač nema jaku IT bezbednost (mala firma, zastareli sistemi).</li>
        </ul>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> napadač identifikovao dobavljača sa redovnim uplatama i ima email format klijentske firme."
          data-en="<strong>Phase threshold:</strong> attacker identified a supplier with regular payments and has the client company's email format."
        ><strong>Prag faze:</strong> napadač identifikovao dobavljača sa redovnim uplatama i ima email format klijentske firme.</div>
      </article>

      <!-- FAZA 2 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Kompromitovanje ili lažiranje identiteta dobavljača" data-en="Phase 2 — Compromising or spoofing supplier identity">
          Faza 2 — Kompromitovanje ili lažiranje identiteta dobavljača
        </h3>
        <p
          data-sr="Napadač ili kompromituje pravi imejl nalog dobavljača kroz fišing, ili registruje lookalike domen. Kod kompromitovanog naloga sledi period praćenja prepiske — napadač uči o stilu komunikacije, aktuelnim porudžbinama i rokovima plaćanja. Bira pravi momenat za akciju."
          data-en="The attacker either compromises the real supplier email account through phishing, or registers a lookalike domain. With a compromised account, a period of correspondence monitoring follows — the attacker learns communication style, current orders, and payment schedules. They pick the right moment for action."
        >Napadač ili kompromituje pravi imejl nalog dobavljača kroz fišing, ili registruje lookalike domen. Kod kompromitovanog naloga sledi period praćenja prepiske — napadač uči o stilu komunikacije, aktuelnim porudžbinama i rokovima plaćanja. Bira pravi momenat za akciju.</p>
        <ul class="bullets">
          <li data-sr="signal: dobavljač prijavljuje probleme sa imejlom ili neočekivane prijave." data-en="signal: supplier reports email issues or unexpected logins.">signal: dobavljač prijavljuje probleme sa imejlom ili neočekivane prijave.</li>
        </ul>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
            <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> napadač spreman za akciju — ima pristup nalogu ili lookalike domenu i zna obrazac komunikacije."
          data-en="<strong>Phase threshold:</strong> attacker ready to act — has account access or lookalike domain and knows the communication pattern."
        ><strong>Prag faze:</strong> napadač spreman za akciju — ima pristup nalogu ili lookalike domenu i zna obrazac komunikacije.</div>
      </article>

      <!-- FAZA 3 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Obaveštenje o promeni bankovnog računa" data-en="Phase 3 — Bank account change notification">
          Faza 3 — Obaveštenje o promeni bankovnog računa
        </h3>
        <p
          data-sr="Napadač šalje imejl osobi koja plaća račune u firmi. Poruka je profesionalna, koristi pravo ime dobavljača i uobičajeni format komunikacije. Obaveštava da je dobavljač promenio poslovnu banku i traži ažuriranje podataka za buduće uplate. Tonalitet je rutinski — bez hitnosti koja bi privukla pažnju."
          data-en="The attacker emails the person in the company who handles payments. The message is professional, uses the real supplier's name and usual communication format. It notifies that the supplier has changed their business bank and requests an update to payment details. The tone is routine — without urgency that would attract attention."
        >Napadač šalje imejl osobi koja plaća račune u firmi. Poruka je profesionalna, koristi pravo ime dobavljača i uobičajeni format komunikacije. Obaveštava da je dobavljač promenio poslovnu banku i traži ažuriranje podataka za buduće uplate. Tonalitet je rutinski — bez hitnosti koja bi privukla pažnju.</p>
        <ul class="bullets">
          <li data-sr="fraze: „u okviru reorganizacije prešli smo na novu banku."." data-en="phrases: &ldquo;as part of our restructuring we have moved to a new bank&rdquo;.">fraze: „u okviru reorganizacije prešli smo na novu banku"“.</li>
          <li data-sr="fraze: „stari račun ostaje aktivan samo do krađa meseca."." data-en="phrases: &ldquo;the old account remains active only until end of month&rdquo;.">fraze: „stari račun ostaje aktivan samo do krađa meseca"“.</li>
          <li data-sr="fraze: „u prilogu je zvanično obaveštenje sa potpisom direktora."." data-en="phrases: &ldquo;attached is the official notification with the director's signature&rdquo;.">fraze: „u prilogu je zvanično obaveštenje sa potpisom direktora"“.</li>
        </ul>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="invoice-fraud.html" data-sr="Prevara sa fakturama" data-en="Invoice fraud">Prevara sa fakturama</a></li>
            <li><a href="business-email-compromise.html" data-sr="Kompromitovanje poslovnog imejla (BEC)" data-en="Business email compromise (BEC)">Kompromitovanje poslovnog imejla (BEC)</a></li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> meta razmatra zahtev kao rutinsku promenu i kreće ka ažuriranju sistema."
          data-en="<strong>Phase threshold:</strong> target considers the request a routine change and moves toward updating the system."
        ><strong>Prag faze:</strong> meta razmatra zahtev kao rutinsku promenu i kreće ka ažuriranju sistema.</div>
      </article>

      <!-- FAZA 4 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Firma ažurira IBAN i izvršava prvu uplatu" data-en="Phase 4 — Company updates IBAN and makes first payment">
          Faza 4 — Firma ažurira IBAN i izvršava prvu uplatu
        </h3>
        <p
          data-sr="Zaposleni ažurira IBAN dobavljača u sistemu. Sledeća redovna uplata — ili sledeća faktura — ide na napadačev račun. Ni firma ni pravi dobavljač nemaju inicijalni razlog za sumnju. Firma je platila, pravi dobavljač čeka. Napadač prima uplate sve dok se krug ne prekine."
          data-en="The employee updates the supplier's IBAN in the system. The next regular payment — or the next invoice — goes to the attacker's account. Neither the company nor the real supplier has any immediate reason for suspicion. The company paid, the real supplier is waiting. The attacker receives payments until the cycle is broken."
        >Zaposleni ažurira IBAN dobavljača u sistemu. Sledeća redovna uplata — ili sledeća faktura — ide na napadačev račun. Ni firma ni pravi dobavljač nemaju inicijalni razlog za sumnju. Firma je platila, pravi dobavljač čeka. Napadač prima uplate sve dok se krug ne prekine.</p>
        <ul class="bullets">
          <li data-sr="signal: uplata ide na novi IBAN koji ne postoji u istoriji transakcija sa ovim dobavljačem." data-en="signal: payment goes to a new IBAN not in the transaction history with this supplier.">signal: uplata ide na novi IBAN koji ne postoji u istoriji transakcija sa ovim dobavljačem.</li>
        </ul>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> IBAN ažuriran i prva uplata izvršena — napadač prima sredstva, prevara aktivna."
          data-en="<strong>Phase threshold:</strong> IBAN updated and first payment made — attacker receives funds, fraud is active."
        ><strong>Prag faze:</strong> IBAN ažuriran i prva uplata izvršena — napadač prima sredstva, prevara aktivna.</div>
      </article>

      <!-- FAZA 5 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Serija uplata dok prevara ostaje neotkrivena" data-en="Phase 5 — Series of payments while fraud remains undetected">
          Faza 5 — Serija uplata dok prevara ostaje neotkrivena
        </h3>
        <p
          data-sr="Svaki naredni mesec firma plaća regularno — na napadačev IBAN. Pravi dobavljač šalje podsetnike i misli da postoji bankarski problem ili administrativno kašnjenje. Napadač u međuvremenu prima svaki transfer. Ukupan gubitak raste s vremenom."
          data-en="Every subsequent month the company pays regularly — to the attacker's IBAN. The real supplier sends reminders and thinks there's a banking issue or administrative delay. The attacker meanwhile receives every transfer. Total loss grows over time."
        >Svaki naredni mesec firma plaća regularno — na napadačev IBAN. Pravi dobavljač šalje podsetnike i misli da postoji bankarski problem ili administrativno kašnjenje. Napadač u međuvremenu prima svaki transfer. Ukupan gubitak raste s vremenom.</p>
        <div class="callout"
          data-sr="<strong>Indikator:</strong> što duže traže, veći je ukupan gubitak. Kompromitovanje imejla dobavljača može ostati neotkriveno mesecima."
          data-en="<strong>Indicator:</strong> the longer it lasts, the greater the total loss. Vendor email compromise can remain undetected for months."
        ><strong>Indikator:</strong> što duže traže, veći je ukupan gubitak. Kompromitovanje imejla dobavljača može ostati neotkriveno mesecima.</div>
      </article>

      <!-- FAZA 6 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Otkrivanje" data-en="Phase 6 — Discovery">
          Faza 6 — Otkrivanje
        </h3>
        <p
          data-sr="Prevara se otkriva kada pravi dobavljač pošalje opomenu za više meseci neplaćenih dugova, ili kada firma sprovede interni audit plaćanja i otkrije da IBAN u sistemu nije isti kao IBAN u originalnom ugovoru. Ponekad otkriva i banka kroz AML monitoring."
          data-en="The fraud is discovered when the real supplier sends a notice for several months of unpaid debt, or when the company conducts an internal payment audit and finds the IBAN in the system doesn't match the IBAN in the original contract. Sometimes the bank discovers it through AML monitoring."
        >Prevara se otkriva kada pravi dobavljač pošalje opomenu za više meseci neplaćenih dugova, ili kada firma sprovede interni audit plaćanja i otkrije da IBAN u sistemu nije isti kao IBAN u originalnom ugovoru. Ponekad otkriva i banka kroz AML monitoring.</p>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> treća strana van lanca prevare (pravi dobavljač, banka, interni audit) otkriva neslaganje."
          data-en="<strong>Phase threshold:</strong> third party outside the fraud chain (real supplier, bank, internal audit) detects the discrepancy."
        ><strong>Prag faze:</strong> treća strana van lanca prevare (pravi dobavljač, banka, interni audit) otkriva neslaganje.</div>
      </article>

      <!-- FAZA 7 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 7 — Recovery talaš" data-en="Phase 7 — Recovery wave">
          Faza 7 — Recovery talaš
        </h3>
        <p
          data-sr="Posle otkrivanja stiže novi kontakt sa ponudom povraćaja izgubljenih sredstava uz uplatu unapred. Firme su posebno ranjive jer su pod pritiskom da reše situaciju sa pravim dobavljačem."
          data-en="After discovery, a new contact arrives offering to recover lost funds for an upfront fee. Companies are particularly vulnerable because they are under pressure to resolve the situation with the real supplier."
        >Posle otkrivanja stiže novi kontakt sa ponudom povraćaja izgubljenih sredstava uz uplatu unapred. Firme su posebno ranjive jer su pod pritiskom da reše situaciju sa pravim dobavljačem.</p>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="recovery-scam.html" data-sr="Prevara povraćaja novca" data-en="Recovery scam">Prevara povraćaja novca</a></li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Filter:</strong> povraćaj + uplata unapred = novi napad. Tretirati kao drugi nezavisni incident."
          data-en="<strong>Filter:</strong> recovery + upfront fee = new attack. Treat as a second independent incident."
        ><strong>Filter:</strong> povraćaj + uplata unapred = novi napad. Tretirati kao drugi nezavisni incident.</div>
      </article>
    </section>

    <!-- 4) CRVENE ZASTAVICE -->
    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="obaveštenje o promeni bankovnog računa stiže samo imejlom bez prethodne najave." data-en="bank account change notification arrives by email only without prior notice.">obaveštenje o promeni bankovnog računa stiže samo imejlom bez prethodne najave.</li>
        <li data-sr="domen pošiljaoca vizualno identičan ali sadrži crtu, broj ili drugu TLD." data-en="sender domain visually identical but contains dash, number, or different TLD.">domen pošiljaoca vizualno identičan ali sadrži crtu, broj ili drugu TLD.</li>
        <li data-sr="novi IBAN je u drugoj zemlji ili banci od one koju je ovaj dobavljač koristio ranije." data-en="new IBAN is in a different country or bank from the one this supplier used before.">novi IBAN je u drugoj zemlji ili banci od one koju je ovaj dobavljač koristio ranije.</li>
        <li data-sr="imejl dodaje rok do kog treba ažurirati podatke — rok koji ne postoji u ugovoru." data-en="email adds a deadline by which to update the details — a deadline that doesn't exist in the contract.">imejl dodaje rok do kog treba ažurirati podatke — rok koji ne postoji u ugovoru.</li>
        <li data-sr="dobavljač se ne može potvrditi telefonski na poznati broj iz sistema." data-en="supplier cannot be confirmed by phone on the known number from the system.">dobavljač se ne može potvrditi telefonski na poznati broj iz sistema.</li>
        <li data-sr="priloženi dokument izgleda generički ili ima sitne greške u formatu." data-en="attached document looks generic or has minor formatting errors.">priloženi dokument izgleda generički ili ima sitne greške u formatu.</li>
        <li data-sr="kontakt broj za potvrdu u imejlu razlikuje se od broja u internom sistemu." data-en="confirmation contact number in the email differs from the number in the internal system.">kontakt broj za potvrdu u imejlu razlikuje se od broja u internom sistemu.</li>
      </ul>
    </section>

    <!-- 5) PROVERE -->
    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera pre ažuriranja IBAN-a dobavljača" data-en="Checks: 8 quick checks before updating a supplier's IBAN">Provere: 8 brzih provera pre ažuriranja IBAN-a dobavljača</h2>

      <p
        data-sr="Cilj je nezavisna verifikacija — kroz kanale koji ne dolaze od imejla koji je tražio promenu. Broj u imejlu i prilog iz imejla nisu dokazi."
        data-en="The goal is independent verification — through channels that do not come from the email that requested the change. The number in the email and the attachment from the email are not evidence."
      >Cilj je nezavisna verifikacija — kroz kanale koji ne dolaze od imejla koji je tražio promenu. Broj u imejlu i prilog iz imejla nisu dokazi.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Provere identiteta pošiljaoca" data-en="Sender identity checks">Provere identiteta pošiljaoca</div>
          <ul class="bullets">
            <li data-sr="proveri pun email domen karakter po karakter — supplier-invoices.com ≠ supplier.com." data-en="check full email domain character by character — supplier-invoices.com ≠ supplier.com.">proveri pun email domen karakter po karakter — supplier-invoices.com ≠ supplier.com.</li>
            <li data-sr="pozovi dobavljača na broj iz internog sistema — ne iz imejla koji je tražio promenu." data-en="call supplier on the number from the internal system — not the email that requested the change.">pozovi dobavljača na broj iz internog sistema — ne iz imejla koji je tražio promenu.</li>
            <li data-sr="proveri email zaglavlja (From header) u raw view." data-en="check email headers (From header) in raw view.">proveri email zaglavlja (From header) u raw view.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="IBAN i dokumentacijske provere" data-en="IBAN and documentation checks">IBAN i dokumentacijske provere</div>
          <ul class="bullets">
            <li data-sr="uporedi novi IBAN sa IBAN-om u ugovoru — svako neslaganje zahteva verifikaciju." data-en="compare new IBAN with IBAN in the contract — any mismatch requires verification.">uporedi novi IBAN sa IBAN-om u ugovoru — svako neslaganje zahteva verifikaciju.</li>
            <li data-sr="proveri BIC/SWIFT — da li banka odgovara zemlji i istoriji ovog dobavljača?" data-en="check BIC/SWIFT — does the bank match the country and history of this supplier?">proveri BIC/SWIFT — da li banka odgovara zemlji i istoriji ovog dobavljača?</li>
            <li data-sr="proveri priloženi PDF kroz nezavisni kanal — jesi li ikad primio sličan dokument od ovog dobavljača?" data-en="verify attached PDF through an independent channel — have you ever received a similar document from this supplier?">proveri priloženi PDF kroz nezavisni kanal — jesi li ikad primio sličan dokument od ovog dobavljača?</li>
            <li data-sr="da li je ova promena najavljena u ugovoru ili prethodnoj komunikaciji?" data-en="was this change announced in the contract or prior communication?">da li je ova promena najavljena u ugovoru ili prethodnoj komunikaciji?</li>
            <li data-sr="da li novi podaci dolaze sa dokumentacijom koja je nezavisno proverljiva?" data-en="do the new details come with independently verifiable documentation?">da li novi podaci dolaze sa dokumentacijom koja je nezavisno proverljiva?</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 6) CHECKLISTA -->
    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja pre ažuriranja bankovnih podataka dobavljača" data-en="Checklist: 12 questions before updating supplier banking details">Checklista: 12 pitanja pre ažuriranja bankovnih podataka dobavljača</h2>

      <p class="muted"
        data-sr="Brzo čitanje. Više loših odgovora znači aktivan obrazac kompromitacije imejla dobavljača."
        data-en="Quick read. Multiple bad answers indicate an active vendor email compromise pattern."
      >Brzo čitanje. Više loših odgovora znači aktivan obrazac kompromitacije imejla dobavljača.</p>

      <ul class="bullets">
        <li data-sr="Da li je zahtev za promenom IBAN-a stigao samo imejlom bez prethodne komunikacije o tome?" data-en="Did the IBAN change request arrive by email only without prior communication about it?">Da li je zahtev za promenom IBAN-a stigao samo imejlom bez prethodne komunikacije o tome?</li>
        <li data-sr="Da li je domen pošiljaoca identičan domenu koji ovaj dobavljač inače koristi?" data-en="Is the sender's domain identical to the domain this supplier normally uses?">Da li je domen pošiljaoca identičan domenu koji ovaj dobavljač inače koristi?</li>
        <li data-sr="Da li novi IBAN odgovara zemlji i banci koju je ovaj dobavljač koristio ranije?" data-en="Does the new IBAN match the country and bank this supplier used before?">Da li novi IBAN odgovara zemlji i banci koju je ovaj dobavljač koristio ranije?</li>
        <li data-sr="Da li smo dobavljača pozvali na poznati broj iz sistema i dobili potvrdu promene?" data-en="Did we call the supplier on a known system number and get confirmation of the change?">Da li smo dobavljača pozvali na poznati broj iz sistema i dobili potvrdu promene?</li>
        <li data-sr="Da li je priloženi PDF potpisan od strane kontakta čiji potpis poznajemo?" data-en="Is the attached PDF signed by a contact whose signature we know?">Da li je priloženi PDF potpisan od strane kontakta čiji potpis poznajemo?</li>
        <li data-sr="Da li se kontakt broj za potvrdu u imejlu razlikuje od broja u internom sistemu?" data-en="Does the confirmation number in the email differ from the number in our internal system?">Da li se kontakt broj za potvrdu u imejlu razlikuje od broja u internom sistemu?</li>
        <li data-sr="Da li ova promena ima rok koji nije u skladu sa ugovorom ili prethodnom komunikacijom?" data-en="Does this change have a deadline inconsistent with the contract or prior communication?">Da li ova promena ima rok koji nije u skladu sa ugovorom ili prethodnom komunikacijom?</li>
        <li data-sr="Da li se promena odnosi na ugovorne uplate za koje bi promena morala biti najavljena pisano?" data-en="Does the change involve contractual payments that would require written prior notice?">Da li se promena odnosi na ugovorne uplate za koje bi promena morala biti najavljena pisano?</li>
        <li data-sr="Da li je ovo prvi put da ovaj dobavljač menja bankarske podatke u trajanju saradnje?" data-en="Is this the first time this supplier has changed banking details during our cooperation?">Da li je ovo prvi put da ovaj dobavljač menja bankarske podatke u trajanju saradnje?</li>
        <li data-sr="Da li postoji prethodna nezavisna dokumentacija o promeni banke od ovog dobavljača?" data-en="Is there prior independent documentation of this bank change from this supplier?">Da li postoji prethodna nezavisna dokumentacija o promeni banke od ovog dobavljača?</li>
        <li data-sr="Da li je zahtev prošao kroz osobu koja inače upravlja ugovornim promenama kod ovog dobavljača?" data-en="Did the request go through the person who normally manages contractual changes with this supplier?">Da li je zahtev prošao kroz osobu koja inače upravlja ugovornim promenama kod ovog dobavljača?</li>
        <li data-sr="Da li novi IBAN u sistemu odgovara IBAN-u navedenom u poslednjem ugovoru sa ovim dobavljačem?" data-en="Does the new IBAN in the system match the IBAN in the most recent contract with this supplier?">Da li novi IBAN u sistemu odgovara IBAN-u navedenom u poslednjem ugovoru sa ovim dobavljačem?</li>
      </ul>
    </section>

    <!-- 7) AKO SUMNJA KRENE -->
    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="ne ažuriraj IBAN u sistemu dok ne dobiješ telefonsku potvrdu na poznati broj." data-en="do not update the IBAN in the system until you have phone confirmation on a known number.">ne ažuriraj IBAN u sistemu dok ne dobiješ telefonsku potvrdu na poznati broj.</li>
        <li data-sr="proveri domen imejla pošiljaoca karakter po karakter." data-en="check the sender's email domain character by character.">proveri domen imejla pošiljaoca karakter po karakter.</li>
        <li data-sr="ako je uplata već izvršena na novi IBAN: odmah kontaktuj banku i zatraži recall." data-en="if payment was already made to the new IBAN: contact your bank immediately and request recall.">ako je uplata već izvršena na novi IBAN: odmah kontaktuj banku i zatraži recall.</li>
        <li data-sr="obavesti pravog dobavljača da je možda kompromitovan njegov imejl nalog." data-en="notify the real supplier that their email account may be compromised.">obavesti pravog dobavljača da je možda kompromitovan njegov imejl nalog.</li>
        <li data-sr="sačuvaj sve imejlove kao dokaze i prijavi policiji." data-en="preserve all emails as evidence and report to police.">sačuvaj sve imejlove kao dokaze i prijavi policiji.</li>
        <li data-sr="proveri da li su isti napadači kontaktirali i druge vaše dobavljače." data-en="check whether the same attackers contacted your other suppliers.">proveri da li su isti napadači kontaktirali i druge vaše dobavljače.</li>
      </ol>

      <div class="callout"
        data-sr="<strong>Zašto ovaj redosled radi:</strong> recall je moguć unutar 24–72 sata. Obaveštavanje pravog dobavljača sprečava dalji gubitak reputacije i pomaže istraži."
        data-en="<strong>Why this order works:</strong> recall is possible within 24–72 hours. Notifying the real supplier prevents further reputational damage and supports investigation."
      ><strong>Zašto ovaj redosled radi:</strong> recall je moguć unutar 24–72 sata. Obaveštavanje pravog dobavljača sprečava dalji gubitak reputacije i pomaže istraži.</div>
    </section>

    <!-- 8) AKO POMAŽEŠ NEKOME -->
    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>

      <p
        data-sr="Kada je zaposleni već ažurirao IBAN i platio, fokus je na brzini: recall prozor je kratak. Direktna konfrontacija nije prioritet — prioritet je banka i dokumentovanje."
        data-en="When an employee has already updated the IBAN and made a payment, speed is the focus: the recall window is short. Direct confrontation is not the priority — the bank and documentation are."
      >Kada je zaposleni već ažurirao IBAN i platio, fokus je na brzini: recall prozor je kratak. Direktna konfrontacija nije prioritet — prioritet je banka i dokumentovanje.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li smo dobavljača zvali na interni broj pre ažuriranja IBAN-a?" data-en="Did we call the supplier on an internal number before updating the IBAN?">Da li smo dobavljača zvali na interni broj pre ažuriranja IBAN-a?</li>
            <li data-sr="Možemo li zajedno proveriti domen imejla koji je tražio promenu?" data-en="Can we check the domain of the email that requested the change together?">Možemo li zajedno proveriti domen imejla koji je tražio promenu?</li>
            <li data-sr="Da li novi IBAN odgovara IBAN-u u ugovoru koji imamo?" data-en="Does the new IBAN match the IBAN in the contract we have?">Da li novi IBAN odgovara IBAN-u u ugovoru koji imamo?</li>
            <li data-sr="Kada je poslednji put ovaj dobavljač promenio bankarske podatke?" data-en="When did this supplier last change their banking details?">Kada je poslednji put ovaj dobavljač promenio bankarske podatke?</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Provera IBAN-a sa ugovorom traže minut i isključuje grešku." data-en="Checking the IBAN against the contract takes a minute and rules out errors.">Provera IBAN-a sa ugovorom traže minut i isključuje grešku.</li>
            <li data-sr="Pozovimo dobavljača na interni broj — brže od čekanja na imejl odgovor." data-en="Let's call the supplier on the internal number — faster than waiting for email reply.">Pozovimo dobavljača na interni broj — brže od čekanja na imejl odgovor.</li>
            <li data-sr="Sačuvajmo sve imejlove pre nego što kontaktiramo banku." data-en="Let's save all emails before contacting the bank.">Sačuvajmo sve imejlove pre nego što kontaktiramo banku.</li>
            <li data-sr="Ako je uplata otišlažna pogrešan IBAN, banka ima 24–72 sata za recall." data-en="If payment went to the wrong IBAN, the bank has 24–72 hours for recall.">Ako je uplata otišlažna pogrešan IBAN, banka ima 24–72 sata za recall.</li>
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
          <li><a href="invoice-fraud.html" data-sr="Prevara sa fakturama" data-en="Invoice fraud">Prevara sa fakturama</a></li>
          <li><a href="mandate-fraud.html" data-sr="Prevara sa nalozima za plaćanje" data-en="Mandate fraud">Prevara sa nalozima za plaćanje</a></li>
          <li><a href="ceo-fraud.html" data-sr="CEO prevara" data-en="CEO fraud">CEO prevara</a></li>
          <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
          <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
        </ul>
      </div>
    </section>
  `
};
