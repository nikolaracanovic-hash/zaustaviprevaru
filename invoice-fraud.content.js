window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["invoice-fraud"] = {
  raw_html: `
    <!-- 1) UVOD -->
    <section class="card">
      <h2 data-sr="Uvod: kako radi prevara sa fakturama" data-en="Introduction: how invoice fraud works">
        Uvod: kako radi prevara sa fakturama
      </h2>

      <p
        data-sr="Prevara sa fakturama funkcioniše na jednostavan princip: napadač zamenjuje legitimne podatke za plaćanje na fakturi sa sopstvenim. Firma prima dokument koji izgleda kao prava faktura od poznatog dobavljača, plaća je, i novac odlazi napadaču. Otkrivanje dolazi tek kad pravi dobavljač javi da plaćanje nije stiglo."
        data-en="Invoice fraud works on a simple principle: the attacker replaces legitimate payment details on an invoice with their own. The company receives a document that looks like a real invoice from a known supplier, pays it, and the money goes to the attacker. Discovery comes only when the real supplier reports non-payment."
      >Prevara sa fakturama funkcioniše na jednostavan princip: napadač zamenjuje legitimne podatke za plaćanje na fakturi sa sopstvenim. Firma prima dokument koji izgleda kao prava faktura od poznatog dobavljača, plaća je, i novac odlazi napadaču. Otkrivanje dolazi tek kad pravi dobavljač javi da plaćanje nije stiglo.</p>

      <p
        data-sr="Napad može doći kroz kompromitovani imejl dobavljača, lookalike domen, ili presretanje komunikacije. U nekim slučajevima napadač ne menja postojeću fakturu nego šalje potpuno novu lažnu fakturu za usluge koje firma zaista koristi — ali sa izmenjenim podacima za uplatu."
        data-en="The attack can come through a compromised supplier email, lookalike domain, or intercepted communications. In some cases the attacker doesn't modify an existing invoice but sends a completely new fake invoice for services the company genuinely uses — with altered payment details."
      >Napad može doći kroz kompromitovani imejl dobavljača, lookalike domen, ili presretanje komunikacije. U nekim slučajevima napadač ne menja postojeću fakturu nego šalje potpuno novu lažnu fakturu za usluge koje firma zaista koristi — ali sa izmenjenim podacima za uplatu.</p>

      <div class="callout"
        data-sr="<strong>Model:</strong> izviđanje (dobavljači sa redovnim fakturama) → kompromitovani nalog / lookalike domen → izrada lažne fakture sa stvarnim podacima ali pogrešnim IBAN-om → isporuka u pravi momenat → firma plaća → gubitak → otkrivanje kroz neplaćeni dug."
        data-en="<strong>Model:</strong> reconnaissance (suppliers with regular invoices) → compromised account / lookalike domain → creating fake invoice with real data but wrong IBAN → delivery at the right moment → company pays → loss → discovery through unpaid invoice."
      ><strong>Model:</strong> izviđanje (dobavljači sa redovnim fakturama) → kompromitovani nalog / lookalike domen → izrada lažne fakture sa stvarnim podacima ali pogrešnim IBAN-om → isporuka u pravi momenat → firma plaća → gubitak → otkrivanje kroz neplaćeni dug.</div>

      <div class="callout"
        data-sr="<strong>Prag:</strong> firma izvrši uplatu na osnovu fakture čiji IBAN pripada napadaču — a IBAN nije proveren sa prethodnom fakturom ili ugovorom."
        data-en="<strong>Threshold:</strong> company processes payment based on an invoice whose IBAN belongs to the attacker — and the IBAN was not verified against a previous invoice or contract."
      ><strong>Prag:</strong> firma izvrši uplatu na osnovu fakture čiji IBAN pripada napadaču — a IBAN nije proveren sa prethodnom fakturom ili ugovorom.</div>
    </section>

    <!-- 2) KAKO GENERALNO RADI -->
    <section class="card">
      <h2 data-sr="Kako generalno radi: tri načina isporuke lažne fakture" data-en="How it works: three ways to deliver a fake invoice">
        Kako generalno radi: tri načina isporuke lažne fakture
      </h2>

      <p
        data-sr="Napadač konstruiše fakturu koja izgleda kao prava. Pravo ime dobavljača, pravi logo, prava adresa, pravi poreski broj — jedino što je izmenjeno su podaci za uplatu. Faktura se isporučuje u pravo vreme: oko datuma kada je redovna faktura inače očekivana."
        data-en="The attacker constructs an invoice that looks real. The real supplier's name, real logo, real address, real tax number — the only thing changed is the payment details. The invoice is delivered at the right time: around when a regular invoice is normally expected."
      >Napadač konstruiše fakturu koja izgleda kao prava. Pravo ime dobavljača, pravi logo, prava adresa, pravi poreski broj — jedino što je izmenjeno su podaci za uplatu. Faktura se isporučuje u pravo vreme: oko datuma kada je redovna faktura inače očekivana.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gradi kredibilitet lažne fakture" data-en="What builds fake invoice credibility">Šta gradi kredibilitet lažne fakture</div>
          <ul class="bullets">
            <li data-sr="pravi naziv i logo dobavljača." data-en="real supplier name and logo.">pravi naziv i logo dobavljača.</li>
            <li data-sr="tačna adresa, PIB i matični broj." data-en="correct address, tax ID, and registration number.">tačna adresa, PIB i matični broj.</li>
            <li data-sr="pravi opis usluge ili isporuke." data-en="real description of service or delivery.">pravi opis usluge ili isporuke.</li>
            <li data-sr="uverljiv iznos — blizak ranijim fakturama ili sa kratkim objašnjenjem razlike." data-en="plausible amount — close to earlier invoices or with brief explanation of difference.">uverljiv iznos — blizak ranijim fakturama ili sa kratkim objašnjenjem razlike.</li>
            <li data-sr="profesionalan format i layout — identičan pravim fakturama." data-en="professional format and layout — identical to real invoices.">profesionalan format i layout — identičan pravim fakturama.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Jedino što je izmenjeno" data-en="The only thing changed">Jedino što je izmenjeno</div>
          <ul class="bullets">
            <li data-sr="IBAN / broj računa za uplatu." data-en="IBAN / bank account number for payment.">IBAN / broj računa za uplatu.</li>
            <li data-sr="BIC / SWIFT kod banke." data-en="BIC / SWIFT bank code.">BIC / SWIFT kod banke.</li>
            <li data-sr="ponekad: kontakt imejl za potvrdu — koji takođe ide napadaču." data-en="sometimes: contact email for confirmation — which also goes to the attacker.">ponekad: kontakt imejl za potvrdu — koji takođe ide napadaču.</li>
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
        <h3 class="phase-title" data-sr="Faza 1 — Izviđanje: identifikacija dobavljača sa redovnim fakturama" data-en="Phase 1 — Reconnaissance: identifying suppliers with regular invoices">
          Faza 1 — Izviđanje: identifikacija dobavljača sa redovnim fakturama
        </h3>
        <p
          data-sr="Napadač identifikuje firmu i njene ključne dobavljače. Bira onog ko fakturiše redovno i za veće iznose: komunalne usluge, IT kompanije, serviseri opreme. Pronalazi ili rekonstruiše format fakture dobavljača — često dostupno na web sajtu dobavljača ili kroz procurele dokumente."
          data-en="The attacker identifies the company and its key suppliers. They select the one that invoices regularly and for larger amounts: utilities, IT companies, equipment service providers. They find or reconstruct the supplier's invoice format — often available on the supplier's website or through leaked documents."
        >Napadač identifikuje firmu i njene ključne dobavljače. Bira onog ko fakturiše redovno i za veće iznose: komunalne usluge, IT kompanije, serviseri opreme. Pronalazi ili rekonstruiše format fakture dobavljača — često dostupno na web sajtu dobavljača ili kroz procurele dokumente.</p>
        <ul class="bullets">
          <li data-sr="signal: format fakture dobavljača javno dostupan ili procurio." data-en="signal: supplier invoice format publicly available or leaked.">signal: format fakture dobavljača javno dostupan ili procurio.</li>
          <li data-sr="signal: firma ima malo dobavljača sa visokim redovnim fakturama — predvidiv cilj." data-en="signal: company has few suppliers with high regular invoices — predictable target.">signal: firma ima malo dobavljača sa visokim redovnim fakturama — predvidiv cilj.</li>
        </ul>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> napadač ima format fakture, identitet dobavljača i kontakt osobu u firmi koja plaća račune."
          data-en="<strong>Phase threshold:</strong> attacker has invoice format, supplier identity, and contact person in the company who processes payments."
        ><strong>Prag faze:</strong> napadač ima format fakture, identitet dobavljača i kontakt osobu u firmi koja plaća račune.</div>
      </article>

      <!-- FAZA 2 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Priprema lažne fakture i ulaznog kanala" data-en="Phase 2 — Preparing the fake invoice and entry channel">
          Faza 2 — Priprema lažne fakture i ulaznog kanala
        </h3>
        <p
          data-sr="Napadač kreira fakturu identičnu pravoj — jedino IBAN je napadačev. Priprema kanal isporuke: kompromituje dobavljačev imejl nalog ili registruje lookalike domen. Kod MITM napada pristupa komunikacionom kanalu između firme i dobavljača."
          data-en="The attacker creates an invoice identical to the real one — only the IBAN is the attacker's. They prepare the delivery channel: compromise the supplier's email account or register a lookalike domain. In MITM attacks, they access the communication channel between the company and supplier."
        >Napadač kreira fakturu identičnu pravoj — jedino IBAN je napadačev. Priprema kanal isporuke: kompromituje dobavljačev imejl nalog ili registruje lookalike domen. Kod MITM napada pristupa komunikacionom kanalu između firme i dobavljača.</p>
        <ul class="bullets">
          <li data-sr="signal: dobavljačev imejl nalog kompromitovan (phishing)." data-en="signal: supplier email account compromised (phishing).">signal: dobavljačev imejl nalog kompromitovan (phishing).</li>
        </ul>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
            <li><a href="vendor-email-compromise.html" data-sr="Kompromitovanje imejla dobavljača" data-en="Vendor email compromise">Kompromitovanje imejla dobavljača</a></li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> lažna faktura gotova i kanal isporuke spreman."
          data-en="<strong>Phase threshold:</strong> fake invoice ready and delivery channel prepared."
        ><strong>Prag faze:</strong> lažna faktura gotova i kanal isporuke spreman.</div>
      </article>

      <!-- FAZA 3 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Isporuka fakture u pravi momenat" data-en="Phase 3 — Invoice delivery at the right moment">
          Faza 3 — Isporuka fakture u pravi momenat
        </h3>
        <p
          data-sr="Faktura stiže oko datuma kada je redovna faktura inače očekivana. Imejl je profesionalan i ne izaziva sumnju. Iznos je uverljiv — odgovara ranijim fakturama ili je blago viši sa napomenom o usklađivanju cena ili novim uslugama."
          data-en="The invoice arrives around the date when the regular invoice is typically expected. The email is professional and raises no suspicion. The amount is plausible — matches earlier invoices or is slightly higher with a note about price adjustment or new services."
        >Faktura stiže oko datuma kada je redovna faktura inače očekivana. Imejl je profesionalan i ne izaziva sumnju. Iznos je uverljiv — odgovara ranijim fakturama ili je blago viši sa napomenom o usklađivanju cena ili novim uslugama.</p>
        <ul class="bullets">
          <li data-sr="fraze: mesečna faktura za [usluga]." data-en="phrases: &ldquo;monthly invoice for [service]&rdquo;.">fraze: mesečna faktura za [usluga].</li>
          <li data-sr="fraze: u prilogu faktura broj [broj] za period [mesec]." data-en="phrases: &ldquo;attached invoice number [number] for period [month]&rdquo;.">fraze: u prilogu faktura broj [broj] za period [mesec].</li>
          <li data-sr="fraze: napomena — promenili smo banku, molimo koristiti novi IBAN." data-en="phrases: &ldquo;note — we changed banks, please use the new IBAN&rdquo;.">fraze: napomena — promenili smo banku, molimo koristiti novi IBAN.</li>
        </ul>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="vendor-email-compromise.html" data-sr="Kompromitovanje imejla dobavljača" data-en="Vendor email compromise">Kompromitovanje imejla dobavljača</a></li>
            <li><a href="business-email-compromise.html" data-sr="Kompromitovanje poslovnog imejla (BEC)" data-en="Business email compromise (BEC)">Kompromitovanje poslovnog imejla (BEC)</a></li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> meta tretira fakturu kao rutinsku i kreće ka obradi plaćanja bez IBAN verifikacije."
          data-en="<strong>Phase threshold:</strong> target treats the invoice as routine and moves toward payment processing without IBAN verification."
        ><strong>Prag faze:</strong> meta tretira fakturu kao rutinsku i kreće ka obradi plaćanja bez IBAN verifikacije.</div>
      </article>

      <!-- FAZA 4 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Firma plaća, novac odlazi" data-en="Phase 4 — Company pays, money is gone">
          Faza 4 — Firma plaća, novac odlazi
        </h3>
        <p
          data-sr="Zaposleni obradi fakturu kao uobičajenu i izvrši uplatu. Napadač odmah povlači ili prebacuje sredstva. Firma nema razloga za sumnju jer je plaćanje prošlo normalno. Prevara se otkriva kada pravi dobavljač pošalje podsetnik za neplaćeni račun, ili kada firma primeti da IBAN na novoj fakturi nije isti kao na prethodnoj."
          data-en="The employee processes the invoice as routine and makes the payment. The attacker immediately withdraws or moves the funds. The company has no reason for suspicion as the payment went through normally. The fraud is discovered when the real supplier sends a reminder for unpaid invoice, or when the company notices that the IBAN on the new invoice differs from the previous one."
        >Zaposleni obradi fakturu kao uobičajenu i izvrši uplatu. Napadač odmah povlači ili prebacuje sredstva. Firma nema razloga za sumnju jer je plaćanje prošlo normalno. Prevara se otkriva kada pravi dobavljač pošalje podsetnik za neplaćeni račun, ili kada firma primeti da IBAN na novoj fakturi nije isti kao na prethodnoj.</p>
        <ul class="bullets">
          <li data-sr="signal: uplata odlazi na IBAN koji se razlikuje od IBAN-a u prethodnoj fakturi." data-en="signal: payment goes to an IBAN that differs from the IBAN in the previous invoice.">signal: uplata odlazi na IBAN koji se razlikuje od IBAN-a u prethodnoj fakturi.</li>
        </ul>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> uplata izvršena — novac uglavnom izgubljen u prvih 24–72 sata."
          data-en="<strong>Phase threshold:</strong> payment made — money is usually gone within 24–72 hours."
        ><strong>Prag faze:</strong> uplata izvršena — novac uglavnom izgubljen u prvih 24–72 sata.</div>
      </article>

      <!-- FAZA 5 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Otkrivanje" data-en="Phase 5 — Discovery">
          Faza 5 — Otkrivanje
        </h3>
        <p
          data-sr="Otkrivanje dolazi kada pravi dobavljač javi da faktura nije plaćena, ili kada neko u firmi uporedi IBAN na poslednjoj fakturi sa IBAN-om na prethodnoj i vidi razliku. Kod serijskih napada (više lažnih faktura) ukupan gubitak može biti značajan."
          data-en="Discovery comes when the real supplier reports the invoice unpaid, or when someone in the company cross-checks the IBAN on the last invoice against the previous one and spots the difference. In serial attacks (multiple fake invoices), the total loss can be significant."
        >Otkrivanje dolazi kada pravi dobavljač javi da faktura nije plaćena, ili kada neko u firmi uporedi IBAN na poslednjoj fakturi sa IBAN-om na prethodnoj i vidi razliku. Kod serijskih napada (više lažnih faktura) ukupan gubitak može biti značajan.</p>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> treća strana van lanca prevare (pravi dobavljač, interni audit) otkriva neslaganje IBAN-a."
          data-en="<strong>Phase threshold:</strong> third party outside the fraud chain (real supplier, internal audit) detects the IBAN discrepancy."
        ><strong>Prag faze:</strong> treća strana van lanca prevare (pravi dobavljač, interni audit) otkriva neslaganje IBAN-a.</div>
      </article>

      <!-- FAZA 6 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Recovery talaš" data-en="Phase 6 — Recovery wave">
          Faza 6 — Recovery talaš
        </h3>
        <p
          data-sr="Posle otkrivanja incidenta ponekad stiže kontakt sa ponudom povraćaja sredstava uz uplatu unapred — forenzička firma, tracing agent, chargeback specialist. Tretirati kao drugi nezavisni napad."
          data-en="After the incident is discovered, a contact sometimes arrives offering to recover funds for an upfront fee — &ldquo;forensic firm&rdquo;, &ldquo;tracing agent&rdquo;, &ldquo;chargeback specialist&rdquo;. Treat as a second independent attack."
        >Posle otkrivanja incidenta ponekad stiže kontakt sa ponudom povraćaja sredstava uz uplatu unapred — forenzička firma, tracing agent, chargeback specialist. Tretirati kao drugi nezavisni napad.</p>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="recovery-scam.html" data-sr="Prevara povraćaja novca" data-en="Recovery scam">Prevara povraćaja novca</a></li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Filter:</strong> povraćaj + uplata unapred = novi napad, ne rešenje."
          data-en="<strong>Filter:</strong> recovery + upfront fee = new attack, not a solution."
        ><strong>Filter:</strong> povraćaj + uplata unapred = novi napad, ne rešenje.</div>
      </article>
    </section>

    <!-- 4) CRVENE ZASTAVICE -->
    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="IBAN na fakturi razlikuje se od IBAN-a koji je ovaj dobavljač koristio u prethodnoj fakturi." data-en="IBAN on the invoice differs from the IBAN this supplier used in the previous invoice.">IBAN na fakturi razlikuje se od IBAN-a koji je ovaj dobavljač koristio u prethodnoj fakturi.</li>
        <li data-sr="imejl adresa pošiljaoca vizualno slična ali pažljivim pregledom drugačija." data-en="sender's email address visually similar but different on closer inspection.">imejl adresa pošiljaoca vizualno slična ali pažljivim pregledom drugačija.</li>
        <li data-sr="faktura stiže iznenada bez prethodne porudžbe ili prethodne komunikacije." data-en="invoice arrives suddenly without a prior order or communication.">faktura stiže iznenada bez prethodne porudžbe ili prethodne komunikacije.</li>
        <li data-sr="neobičan rok plaćanja — kraći od uobičajenog." data-en="unusual payment deadline — shorter than usual.">neobičan rok plaćanja — kraći od uobičajenog.</li>
        <li data-sr="iznos je viši od uobičajenog uz kratku napomenu o korekciji cene." data-en="amount is higher than usual with a brief note about price correction.">iznos je viši od uobičajenog uz kratku napomenu o korekciji cene.</li>
        <li data-sr="faktura dolazi sa domena koji nije uobičajen za ovog dobavljača." data-en="invoice comes from a domain that isn't usual for this supplier.">faktura dolazi sa domena koji nije uobičajen za ovog dobavljača.</li>
        <li data-sr="faktura sadrži napomenu o promeni banke — bez prethodnog obaveštenja." data-en="invoice contains a note about bank change — without prior notification.">faktura sadrži napomenu o promeni banke — bez prethodnog obaveštenja.</li>
        <li data-sr="kontakt imejl za reklamacije ili potvrde u fakturi je drugačiji od uobičajenog." data-en="complaints or confirmation contact email in the invoice differs from the usual one.">kontakt imejl za reklamacije ili potvrde u fakturi je drugačiji od uobičajenog.</li>
      </ul>
    </section>

    <!-- 5) PROVERE -->
    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera pre plaćanja fakture" data-en="Checks: 8 quick checks before paying an invoice">Provere: 8 brzih provera pre plaćanja fakture</h2>

      <p
        data-sr="Osnovna provera je prosta: IBAN na tekućoj fakturi mora odgovarati IBAN-u na prethodnoj fakturi istog dobavljača. Razlika = stop. Svaka promena zahteva telefonsku potvrdu na poznati broj."
        data-en="The basic check is simple: the IBAN on the current invoice must match the IBAN on the previous invoice from the same supplier. Any difference = stop. Any change requires phone confirmation on a known number."
      >Osnovna provera je prosta: IBAN na tekućoj fakturi mora odgovarati IBAN-u na prethodnoj fakturi istog dobavljača. Razlika = stop. Svaka promena zahteva telefonsku potvrdu na poznati broj.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="IBAN i finansijske provere" data-en="IBAN and financial checks">IBAN i finansijske provere</div>
          <ul class="bullets">
            <li data-sr="uporedi IBAN na tekućoj fakturi sa IBAN-om na prethodnoj fakturi istog dobavljača." data-en="compare IBAN on current invoice with IBAN on previous invoice from the same supplier.">uporedi IBAN na tekućoj fakturi sa IBAN-om na prethodnoj fakturi istog dobavljača.</li>
            <li data-sr="proveri IBAN sa ugovorom — IBAN u sistemu mora odgovarati ugovornom." data-en="check IBAN against the contract — IBAN in system must match contractual.">proveri IBAN sa ugovorom — IBAN u sistemu mora odgovarati ugovornom.</li>
            <li data-sr="proveri BIC/SWIFT — da li zemlja i banka odgovaraju istoriji ovog dobavljača?" data-en="check BIC/SWIFT — does the country and bank match this supplier's history?">proveri BIC/SWIFT — da li zemlja i banka odgovaraju istoriji ovog dobavljača?</li>
            <li data-sr="pozovi dobavljača na broj iz internog sistema za potvrdu kod svakog novog IBAN-a." data-en="call supplier on the internal system number for confirmation with every new IBAN.">pozovi dobavljača na broj iz internog sistema za potvrdu kod svakog novog IBAN-a.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Kontekstualne i dokumentacijske provere" data-en="Contextual and documentation checks">Kontekstualne i dokumentacijske provere</div>
          <ul class="bullets">
            <li data-sr="proveri domen pošiljaoca imejla karakter po karakter." data-en="check sender's email domain character by character.">proveri domen pošiljaoca imejla karakter po karakter.</li>
            <li data-sr="da li postoji porudžbenica ili ugovor koji prati ovu fakturu?" data-en="is there a purchase order or contract that accompanies this invoice?">da li postoji porudžbenica ili ugovor koji prati ovu fakturu?</li>
            <li data-sr="da li iznos odgovara porudžbenici ili ugovorenom iznosu?" data-en="does the amount match the purchase order or contracted amount?">da li iznos odgovara porudžbenici ili ugovorenom iznosu?</li>
            <li data-sr="da li je ovaj dobavljač ranije menjao bankarske podatke — kada i kako?" data-en="has this supplier changed banking details before — when and how?">da li je ovaj dobavljač ranije menjao bankarske podatke — kada i kako?</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 6) CHECKLISTA -->
    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja pre plaćanja fakture" data-en="Checklist: 12 questions before paying an invoice">Checklista: 12 pitanja pre plaćanja fakture</h2>

      <p class="muted"
        data-sr="Brzo čitanje. Više loših odgovora znači aktivan invoice fraud obrazac."
        data-en="Quick read. Multiple bad answers indicate an active invoice fraud pattern."
      >Brzo čitanje. Više loših odgovora znači aktivan invoice fraud obrazac.</p>

      <ul class="bullets">
        <li data-sr="Da li IBAN na ovoj fakturi odgovara IBAN-u na prethodnoj fakturi istog dobavljača?" data-en="Does the IBAN on this invoice match the IBAN on the previous invoice from the same supplier?">Da li IBAN na ovoj fakturi odgovara IBAN-u na prethodnoj fakturi istog dobavljača?</li>
        <li data-sr="Da li domen imejla pošiljaoca odgovara domenu koji ovaj dobavljač inače koristi?" data-en="Does the sender's email domain match the domain this supplier normally uses?">Da li domen imejla pošiljaoca odgovara domenu koji ovaj dobavljač inače koristi?</li>
        <li data-sr="Da li faktura dolazi u skladu sa očekivanim datumom — ili neočekivano?" data-en="Does the invoice arrive in line with the expected date — or unexpectedly?">Da li faktura dolazi u skladu sa očekivanim datumom — ili neočekivano?</li>
        <li data-sr="Da li iznos odgovara prethodnim fakturama ili porudžbenici?" data-en="Does the amount match previous invoices or the purchase order?">Da li iznos odgovara prethodnim fakturama ili porudžbenici?</li>
        <li data-sr="Da li faktura sadrži napomenu o promeni banke bez prethodnog obaveštenja?" data-en="Does the invoice contain a bank change note without prior notification?">Da li faktura sadrži napomenu o promeni banke bez prethodnog obaveštenja?</li>
        <li data-sr="Da li postoji porudžbenica ili ugovor koji potvrđuje ovu nabavku?" data-en="Is there a purchase order or contract confirming this purchase?">Da li postoji porudžbenica ili ugovor koji potvrđuje ovu nabavku?</li>
        <li data-sr="Da li je rok plaćanja kraći od uobičajenog za ovog dobavljača?" data-en="Is the payment deadline shorter than usual for this supplier?">Da li je rok plaćanja kraći od uobičajenog za ovog dobavljača?</li>
        <li data-sr="Da li je kontakt imejl u fakturi isti kao u prethodnim fakturama?" data-en="Is the contact email in the invoice the same as in previous invoices?">Da li je kontakt imejl u fakturi isti kao u prethodnim fakturama?</li>
        <li data-sr="Da li BIC/SWIFT kod odgovara zemlji i banci u kojoj ovaj dobavljač inače ima račun?" data-en="Does the BIC/SWIFT code match the country and bank where this supplier normally holds accounts?">Da li BIC/SWIFT kod odgovara zemlji i banci u kojoj ovaj dobavljač inače ima račun?</li>
        <li data-sr="Da li smo dobavljača pozvali na poznati broj i potvrdili fakturu pre plaćanja?" data-en="Did we call the supplier on a known number and confirm the invoice before paying?">Da li smo dobavljača pozvali na poznati broj i potvrdili fakturu pre plaćanja?</li>
        <li data-sr="Da li su logo, adresa i poreski broj na fakturi identični onima u ugovoru?" data-en="Are the logo, address, and tax number on the invoice identical to those in the contract?">Da li su logo, adresa i poreski broj na fakturi identični onima u ugovoru?</li>
        <li data-sr="Da li primalac uplate u sistemu odgovara ugovornom poslovnom partneru za ovu uslugu?" data-en="Does the payment recipient in the system match the contracted business partner for this service?">Da li primalac uplate u sistemu odgovara ugovornom poslovnom partneru za ovu uslugu?</li>
      </ul>
    </section>

    <!-- 7) AKO SUMNJA KRENE -->
    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="ne plaćaj dok ne proveriš IBAN sa prethodnom fakturom i ugovorom." data-en="do not pay until you verify the IBAN against the previous invoice and contract.">ne plaćaj dok ne proveriš IBAN sa prethodnom fakturom i ugovorom.</li>
        <li data-sr="pozovi dobavljača na broj iz internog sistema — ne broj iz fakture." data-en="call the supplier on the number from the internal system — not the number from the invoice.">pozovi dobavljača na broj iz internog sistema — ne broj iz fakture.</li>
        <li data-sr="ako je uplata već izvršena: odmah kontaktuj banku i zatraži recall." data-en="if payment was already made: contact your bank immediately and request recall.">ako je uplata već izvršena: odmah kontaktuj banku i zatraži recall.</li>
        <li data-sr="obavesti pravog dobavljača da je faktura bila lažna i da su podaci zloupotrebljeni." data-en="notify the real supplier that the invoice was fake and their details were misused.">obavesti pravog dobavljača da je faktura bila lažna i da su podaci zloupotrebljeni.</li>
        <li data-sr="sačuvaj sve imejlove i fakturu kao dokaze." data-en="preserve all emails and the invoice as evidence.">sačuvaj sve imejlove i fakturu kao dokaze.</li>
        <li data-sr="prijavi policiji i finansijskim regulatorima." data-en="report to police and financial regulators.">prijavi policiji i finansijskim regulatorima.</li>
      </ol>

      <div class="callout"
        data-sr="<strong>Zašto ovaj redosled radi:</strong> IBAN provera pre uplate isključuje grešku u sekundi. Recall je moguć unutar 24–72 sata od uplate."
        data-en="<strong>Why this order works:</strong> IBAN check before payment rules out the error in seconds. Recall is possible within 24–72 hours of payment."
      ><strong>Zašto ovaj redosled radi:</strong> IBAN provera pre uplate isključuje grešku u sekundi. Recall je moguć unutar 24–72 sata od uplate.</div>
    </section>

    <!-- 8) AKO POMAŽEŠ NEKOME -->
    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>

      <p
        data-sr="Kada je zaposleni već platio lažnu fakturu, prioritet je banka i dokumentovanje. Fokus na proveri IBAN-a sa starim fakturama demonstrira konkretnu grešku bez napada na procenu zaposlenog."
        data-en="When an employee has already paid a fake invoice, the priority is the bank and documentation. Focusing on IBAN comparison with old invoices demonstrates a concrete error without attacking the employee's judgment."
      >Kada je zaposleni već platio lažnu fakturu, prioritet je banka i dokumentovanje. Fokus na proveri IBAN-a sa starim fakturama demonstrira konkretnu grešku bez napada na procenu zaposlenog.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Možemo li uporediti IBAN na ovoj fakturi sa IBAN-om na prethodnoj?" data-en="Can we compare the IBAN on this invoice with the IBAN on the previous one?">Možemo li uporediti IBAN na ovoj fakturi sa IBAN-om na prethodnoj?</li>
            <li data-sr="Da li smo dobavljača zvali na broj iz sistema — ne broj iz fakture?" data-en="Did we call the supplier on the system number — not the invoice number?">Da li smo dobavljača zvali na broj iz sistema — ne broj iz fakture?</li>
            <li data-sr="Kada je pravi dobavljač poslednji put promenio bankarske podatke?" data-en="When did the real supplier last change their banking details?">Kada je pravi dobavljač poslednji put promenio bankarske podatke?</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Hajde da proverimo IBAN sa prošlomesečnom fakturom pre nego što nastavimo." data-en="Let's check the IBAN against last month's invoice before continuing.">Hajde da proverimo IBAN sa prošlomesečnom fakturom pre nego što nastavimo.</li>
            <li data-sr="Pozovimo dobavljača na interni broj — ako je faktura legitimna, potvrda neće biti problem." data-en="Let's call the supplier on the internal number — if the invoice is legitimate, confirmation will not be a problem.">Pozovimo dobavljača na interni broj — ako je faktura legitimna, potvrda neće biti problem.</li>
            <li data-sr="Sačuvajmo fakturu i imejlove pre kontaktiranja banke." data-en="Let's save the invoice and emails before contacting the bank.">Sačuvajmo fakturu i imejlove pre kontaktiranja banke.</li>
            <li data-sr="Recall je moguć unutar 72 sata — odmah zovemo banku." data-en="Recall is possible within 72 hours — we call the bank now.">Recall je moguć unutar 72 sata — odmah zovemo banku.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 9) POVEZANE PREVARE -->
    
  `
};
