window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["supplier-onboarding-scam"] = {
  raw_html: `
    <!-- 1) UVOD -->
    <section class="card">
      <h2 data-sr="Uvod: kako radi prevara pri registraciji dobavljača" data-en="Introduction: how supplier onboarding scam works">
        Uvod: kako radi prevara pri registraciji dobavljača
      </h2>

      <p
        data-sr="Prevara pri registraciji dobavljača je napad u kome lažna firma prođe kroz onboarding proces i dobije status odobrenog dobavljača. Jednom registrovana, fakturiše za usluge koje nisu isporučene, ili isporučuje usluge minimalne vrednosti po maksimalnim cenama. Napad može trajati mesecima ili godinama pre otkrivanja."
        data-en="Supplier onboarding scam is an attack in which a fake company passes through the onboarding process and gains approved vendor status. Once registered, it invoices for services not delivered, or delivers minimal-value services at maximum prices. The attack can last months or years before discovery."
      >Prevara pri registraciji dobavljača je napad u kome lažna firma prođe kroz onboarding proces i dobije status odobrenog dobavljača. Jednom registrovana, fakturiše za usluge koje nisu isporučene, ili isporučuje usluge minimalne vrednosti po maksimalnim cenama. Napad može trajati mesecima ili godinama pre otkrivanja.</p>

      <p
        data-sr="Napad je najefikasniji u firmama koje imaju slab ili nestrukturisan onboarding proces, gde se verifikacija oslanja uglavnom na papirnu dokumentaciju a ne na stvarnu proveru kompanije i isporučene usluge. Posebno su ranjive firme koje brzo rastu i imaju velik broj dobavljača — kontrola postaje teža sa skalom."
        data-en="The attack is most effective in companies with weak or unstructured onboarding processes, where verification relies mainly on paper documentation rather than actual company and service delivery verification. Particularly vulnerable are fast-growing companies with large numbers of vendors — control becomes harder at scale."
      >Napad je najefikasniji u firmama koje imaju slab ili nestrukturisan onboarding proces, gde se verifikacija oslanja uglavnom na papirnu dokumentaciju a ne na stvarnu proveru kompanije i isporučene usluge. Posebno su ranjive firme koje brzo rastu i imaju velik broj dobavljača — kontrola postaje teža sa skalom.</p>

      <div class="callout"
        data-sr="<strong>Model:</strong> izviđanje (nabavni proces firme) → osnivanje ili kupovina shell firme → podnošenje onboarding dokumentacije → odobrenje za uplate → fakturisanje za nepostojeće usluge → dugotrajna prevara → otkrivanje kroz audit."
        data-en="<strong>Model:</strong> reconnaissance (company procurement process) → founding or purchasing shell company → submitting onboarding documentation → payment approval → invoicing for nonexistent services → long-running fraud → discovery through audit."
      ><strong>Model:</strong> izviđanje (nabavni proces firme) → osnivanje ili kupovina shell firme → podnošenje onboarding dokumentacije → odobrenje za uplate → fakturisanje za nepostojeće usluge → dugotrajna prevara → otkrivanje kroz audit.</div>

      <div class="callout"
        data-sr="<strong>Prag:</strong> lažna firma dobija odobrenje za primanje uplata i prima prvu plaćenu fakturu bez verifikacije isporučene usluge."
        data-en="<strong>Threshold:</strong> fake company receives payment approval and receives the first paid invoice without verification of delivered service."
      ><strong>Prag:</strong> lažna firma dobija odobrenje za primanje uplata i prima prvu plaćenu fakturu bez verifikacije isporučene usluge.</div>
    </section>

    <!-- 2) KAKO GENERALNO RADI -->
    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika napada" data-en="How it works: attack mechanics">
        Kako generalno radi: mehanika napada
      </h2>

      <p
        data-sr="Napadač iskorišćava slabosti u procesu verifikacije dobavljača. U manjim firmama: onboarding je neformalan i baziran na preporuci. U većim firmama: onboarding je formalan ali rutinski — dokumentacija se proverava, ali ne i stvarna sposobnost isporuke. Napadač prolazi oba tipa dajući uverljivu papirnu dokumentaciju."
        data-en="The attacker exploits weaknesses in the vendor verification process. In smaller companies: onboarding is informal and based on referrals. In larger companies: onboarding is formal but routine — documentation is checked, but not actual delivery capability. The attacker passes both types by providing convincing paper documentation."
      >Napadač iskorišćava slabosti u procesu verifikacije dobavljača. U manjim firmama: onboarding je neformalan i baziran na preporuci. U većim firmama: onboarding je formalan ali rutinski — dokumentacija se proverava, ali ne i stvarna sposobnost isporuke. Napadač prolazi oba tipa dajući uverljivu papirnu dokumentaciju.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gradi legitimnost lažnog dobavljača" data-en="What builds fake vendor legitimacy">Šta gradi legitimnost lažnog dobavljača</div>
          <ul class="bullets">
            <li data-sr="registrovana firma sa stvarnom adresom i registarskim brojem." data-en="registered company with real address and registration number.">registrovana firma sa stvarnom adresom i registarskim brojem.</li>
            <li data-sr="lažne ili napumpane reference i preporuke." data-en="fake or inflated references and recommendations.">lažne ili napumpane reference i preporuke.</li>
            <li data-sr="profesionalni web sajt i marketing materijali." data-en="professional website and marketing materials.">profesionalni web sajt i marketing materijali.</li>
            <li data-sr="cene u tržišnom rangu (ne preniske, ne previsoke)." data-en="prices in market range (not too low, not too high).">cene u tržišnom rangu (ne preniske, ne previsoke).</li>
            <li data-sr="interni napadač u firmama sa insajderom u nabavci." data-en="internal attacker in companies with an insider in procurement.">interni napadač u firmama sa insajderom u nabavci.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Kako se uvodi fakturisanje" data-en="How invoicing is introduced">Kako se uvodi fakturisanje</div>
          <ul class="bullets">
            <li data-sr="fakture za konsultantske usluge (teško merljive i verifikovane)." data-en="invoices for consulting services (hard to measure and verify).">fakture za konsultantske usluge (teško merljive i verifikovane).</li>
            <li data-sr="fakture za usluge koje firma nominalno isporučuje (npr. IT podrška)." data-en="invoices for services the company nominally delivers (e.g. IT support).">fakture za usluge koje firma nominalno isporučuje (npr. IT podrška).</li>
            <li data-sr="male fakture u početku da ne aktiviraju kontrolu." data-en="small invoices initially to avoid triggering controls.">male fakture u početku da ne aktiviraju kontrolu.</li>
            <li data-sr="postepeno povećanje iznosa posle uspostavljanja poverenja." data-en="gradual increase in amounts after establishing trust.">postepeno povećanje iznosa posle uspostavljanja poverenja.</li>
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
        data-sr="Napad je spor i strpljiv. Razlikuje se od BEC napada koji su brzi i jednokratni — ovaj napad gradi poziciju iznutra i traže."
        data-en="The attack is slow and patient. It differs from BEC attacks which are fast and one-time — this attack builds a position from within and persists."
      >Napad je spor i strpljiv. Razlikuje se od BEC napada koji su brzi i jednokratni — ovaj napad gradi poziciju iznutra i traže.</p>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Izviđanje: nabavni proces i slabosti" data-en="Phase 1 — Reconnaissance: procurement process and weaknesses">
          Faza 1 — Izviđanje: nabavni proces i slabosti
        </h3>
        <p
          data-sr="Napadač analizira nabavni proces ciljane firme. Traži kategorije usluga koje su teške za merenje i verifikaciju: konsalting, IT, obuka, istraživanje, logistika. Identifikuje ko u firmi odobrava dobavljače i ko potpisuje fakture. U nekim slučajevima napadač je insajder — zaposleni u nabavci."
          data-en="The attacker analyzes the procurement process of the target company. They look for service categories that are difficult to measure and verify: consulting, IT, training, research, logistics. They identify who at the company approves vendors and who signs invoices. In some cases the attacker is an insider — an employee in procurement."
        >Napadač analizira nabavni proces ciljane firme. Traži kategorije usluga koje su teške za merenje i verifikaciju: konsalting, IT, obuka, istraživanje, logistika. Identifikuje ko u firmi odobrava dobavljače i ko potpisuje fakture. U nekim slučajevima napadač je insajder — zaposleni u nabavci.</p>
        <ul class="bullets">
          <li data-sr="signal: firma objavljuje kategorije dobavljača na sajtu ili u javnim pozivima." data-en="signal: company publishes vendor categories on website or in public calls.">signal: firma objavljuje kategorije dobavljača na sajtu ili u javnim pozivima.</li>
          <li data-sr="signal: onboarding dokumentacija objašnjena u javnim procurement standardima firme." data-en="signal: onboarding documentation explained in company's public procurement standards.">signal: onboarding dokumentacija objašnjena u javnim procurement standardima firme.</li>
        </ul>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> napadač razume koji tip usluge i ko odobrava — plan napada postavljen."
          data-en="<strong>Phase threshold:</strong> attacker understands which service type and who approves — attack plan set."
        ><strong>Prag faze:</strong> napadač razume koji tip usluge i ko odobrava — plan napada postavljen.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Osnivanje ili kupovina lažne firme" data-en="Phase 2 — Founding or purchasing fake company">
          Faza 2 — Osnivanje ili kupovina lažne firme
        </h3>
        <p
          data-sr="Napadač osniva novu firmu ili kupuje shell firmu sa istorijom. Registruje je u relevantnom sektoru. Kreira web sajt, priprema marketinšku dokumentaciju, priprema reference. Sve je dizajnirano da prođe standardni onboarding pregled koji ne ide dublje od papirne verifikacije."
          data-en="The attacker founds a new company or buys a shell company with history. Registers it in the relevant sector. Creates a website, prepares marketing documentation, prepares references. Everything is designed to pass standard onboarding review that does not go deeper than paper verification."
        >Napadač osniva novu firmu ili kupuje shell firmu sa istorijom. Registruje je u relevantnom sektoru. Kreira web sajt, priprema marketinšku dokumentaciju, priprema reference. Sve je dizajnirano da prođe standardni onboarding pregled koji ne ide dublje od papirne verifikacije.</p>
        <ul class="bullets">
          <li data-sr="signal: nova firma bez vidljive istorije ili klijenata." data-en="signal: new company without visible history or clients.">signal: nova firma bez vidljive istorije ili klijenata.</li>
          <li data-sr="signal: reference ne mogu biti nezavisno verifikovane." data-en="signal: references cannot be independently verified.">signal: reference ne mogu biti nezavisno verifikovane.</li>
        </ul>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> firma je registrovana i dokumentacija je gotova."
          data-en="<strong>Phase threshold:</strong> company is registered and documentation is ready."
        ><strong>Prag faze:</strong> firma je registrovana i dokumentacija je gotova.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Podnošenje onboarding dokumentacije" data-en="Phase 3 — Submitting onboarding documentation">
          Faza 3 — Podnošenje onboarding dokumentacije
        </h3>
        <p
          data-sr="Napadač se obraća nabavnom odeljenju firme. Podnosi dokumentaciju: registraciju firme, PIB, bankovni račun, reference, sertifikate. U nekim slučajevima neko unutar firme je u dosluhu i ubrzava ili olakšava onboarding. Sve deluje kao rutinski novi dobavljač."
          data-en="The attacker contacts the company's procurement department. Submits documentation: company registration, tax ID, bank account, references, certificates. In some cases someone within the company is complicit and speeds up or facilitates onboarding. Everything looks like a routine new vendor."
        >Napadač se obraća nabavnom odeljenju firme. Podnosi dokumentaciju: registraciju firme, PIB, bankovni račun, reference, sertifikate. U nekim slučajevima neko unutar firme je u dosluhu i ubrzava ili olakšava onboarding. Sve deluje kao rutinski novi dobavljač.</p>
        <ul class="bullets">
          <li data-sr="fraze: nudimo usluge u kategoriji X po konkurentnim cenama — možemo li biti dodati u vaš sistem." data-en="phrases: &ldquo;we offer services in category X at competitive prices — can we be added to your system&rdquo;.">fraze: nudimo usluge u kategoriji X po konkurentnim cenama — možemo li biti dodati u vaš sistem.</li>
          <li data-sr="pritisak na brzinu: imamo kapacitet odmah." data-en="speed pressure: &ldquo;we have capacity immediately&rdquo;.">pritisak na brzinu: imamo kapacitet odmah.</li>
        </ul>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li data-sr="Insajder u nabavci ubrzava odobrenje (interna prevara)." data-en="Insider in procurement speeds approval (internal fraud).">Insajder u nabavci ubrzava odobrenje (interna prevara).</li>
            <li><a href="impersonation-scam.html" data-sr="Lažno predstavljanje" data-en="Impersonation scam">Lažno predstavljanje</a></li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> dokumentacija podneta i u procesu pregleda."
          data-en="<strong>Phase threshold:</strong> documentation submitted and under review."
        ><strong>Prag faze:</strong> dokumentacija podneta i u procesu pregleda.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Odobrenje i prve male fakture" data-en="Phase 4 — Approval and first small invoices">
          Faza 4 — Odobrenje i prve male fakture
        </h3>
        <p
          data-sr="Firma odobrava dobavljača. Napadač počinje sa manjim fakturama koje su ispod granica za detaljnu proveru. Usluge su vague — konsultantske, savetodavne, istraživačke. Nema ili je minimalna isporuka. Firma plaća jer je dobavljač u sistemu i faktura je u normalnom opsegu."
          data-en="The company approves the vendor. The attacker starts with smaller invoices below thresholds for detailed review. Services are vague — consulting, advisory, research. Delivery is absent or minimal. The company pays because the vendor is in the system and the invoice is in the normal range."
        >Firma odobrava dobavljača. Napadač počinje sa manjim fakturama koje su ispod granica za detaljnu proveru. Usluge su vague — konsultantske, savetodavne, istraživačke. Nema ili je minimalna isporuka. Firma plaća jer je dobavljač u sistemu i faktura je u normalnom opsegu.</p>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> prva plaćena faktura bez verifikacije isporuke — prevara je aktivna."
          data-en="<strong>Phase threshold:</strong> first paid invoice without delivery verification — fraud is active."
        ><strong>Prag faze:</strong> prva plaćena faktura bez verifikacije isporuke — prevara je aktivna.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Eskalacija: veće fakture i dugotrajna saradnja" data-en="Phase 5 — Escalation: larger invoices and ongoing engagement">
          Faza 5 — Eskalacija: veće fakture i dugotrajna saradnja
        </h3>
        <p
          data-sr="Posle uspostavljanja traže napadač postepeno povećava iznose faktura i učestalost. Angažman se proširuje na nove projekte. Interno poverenje je visoko jer je dobavljač već u sistemu i nikada nije bio problem. Suma gubitaka može biti višestruko viša od prve fakture."
          data-en="After establishing the track record the attacker gradually increases invoice amounts and frequency. Engagement expands to new projects. Internal trust is high because the vendor is already in the system and was never a problem. Total loss can be many times higher than the first invoice."
        >Posle uspostavljanja traže napadač postepeno povećava iznose faktura i učestalost. Angažman se proširuje na nove projekte. Interno poverenje je visoko jer je dobavljač već u sistemu i nikada nije bio problem. Suma gubitaka može biti višestruko viša od prve fakture.</p>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li data-sr="Kompromitovanje nabavnog procesa iznutra i dodavanje novih lažnih dobavljača." data-en="Compromising procurement process from within and adding new fake vendors.">Kompromitovanje nabavnog procesa iznutra i dodavanje novih lažnih dobavljača.</li>
            <li><a href="vendor-email-compromise.html" data-sr="Kompromitovanje imejla dobavljača" data-en="Vendor email compromise">Kompromitovanje imejla dobavljača</a></li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> dobavljač je stabilan deo platnih tokova — ukupni gubitak nastavlja da raste."
          data-en="<strong>Phase threshold:</strong> vendor is a stable part of payment flows — total loss continues to grow."
        ><strong>Prag faze:</strong> dobavljač je stabilan deo platnih tokova — ukupni gubitak nastavlja da raste.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Otkrivanje kroz audit ili spolja" data-en="Phase 6 — Discovery through audit or externally">
          Faza 6 — Otkrivanje kroz audit ili spolja
        </h3>
        <p
          data-sr="Otkrivanje najčešće dolazi kroz interni ili eksterni audit, kroz whistleblower unutar firme, ili kroz regulatornu inspekciju. Firma tada pregleda istoriju transakcija i otkriva da isporuka nikad nije bila verifikovana. Povraćaj je teže iz ugovorne osnove nego iz direktnih bankovnih transakcija."
          data-en="Discovery most often comes through internal or external audit, through a whistleblower inside the company, or through regulatory inspection. The company then reviews transaction history and discovers that delivery was never verified. Recovery is harder from a contractual basis than from direct banking transactions."
        >Otkrivanje najčešće dolazi kroz interni ili eksterni audit, kroz whistleblower unutar firme, ili kroz regulatornu inspekciju. Firma tada pregleda istoriju transakcija i otkriva da isporuka nikad nije bila verifikovana. Povraćaj je teže iz ugovorne osnove nego iz direktnih bankovnih transakcija.</p>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> audit ili inspekcija identifikuje pattern nepotvrđenih faktura."
          data-en="<strong>Phase threshold:</strong> audit or inspection identifies pattern of unverified invoices."
        ><strong>Prag faze:</strong> audit ili inspekcija identifikuje pattern nepotvrđenih faktura.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 7 — Pravni i reputacioni rizici" data-en="Phase 7 — Legal and reputational risks">
          Faza 7 — Pravni i reputacioni rizici
        </h3>
        <p
          data-sr="U slučajevima sa insajderom, firma se suočava sa internim disciplinskim i krivičnim postupcima. Kupci ili partneri firme mogu biti obavešteni. Ako je firma kotirana ili regulisana, može biti potrebna javna objava. Pored finansijskog gubitka dolaze reputacioni i compliance rizici."
          data-en="In cases with an insider, the company faces internal disciplinary and criminal proceedings. Company customers or partners may be notified. If the company is listed or regulated, public disclosure may be required. Beyond financial loss come reputational and compliance risks."
        >U slučajevima sa insajderom, firma se suočava sa internim disciplinskim i krivičnim postupcima. Kupci ili partneri firme mogu biti obavešteni. Ako je firma kotirana ili regulisana, može biti potrebna javna objava. Pored finansijskog gubitka dolaze reputacioni i compliance rizici.</p>
        <div class="callout"
          data-sr="<strong>Preporuka:</strong> svaka firma treba da ima periodni re-screening aktivnih dobavljača, a ne samo onboarding screening."
          data-en="<strong>Recommendation:</strong> every company should have periodic re-screening of active vendors, not just onboarding screening."
        ><strong>Preporuka:</strong> svaka firma treba da ima periodni re-screening aktivnih dobavljača, a ne samo onboarding screening.</div>
      </article>
    </section>

    <!-- 4) CRVENE ZASTAVICE -->
    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="novi dobavljač bez proverljive istorije ili reference koji ne možemo nezavisno kontaktirati." data-en="new vendor without verifiable history or references we cannot independently contact.">novi dobavljač bez proverljive istorije ili reference koji ne možemo nezavisno kontaktirati.</li>
        <li data-sr="onboarding se odvija brže nego standardni proces uz objašnjenje da je hitno." data-en="onboarding proceeds faster than standard process with explanation that it is urgent.">onboarding se odvija brže nego standardni proces uz objašnjenje da je hitno.</li>
        <li data-sr="fakture za vague usluge (konsalting, istraživanje) bez opisa isporuke." data-en="invoices for vague services (consulting, research) without delivery description.">fakture za vague usluge (konsalting, istraživanje) bez opisa isporuke.</li>
        <li data-sr="nema dokumentovane verifikacije da je usluga zaista isporučena." data-en="no documented verification that service was actually delivered.">nema dokumentovane verifikacije da je usluga zaista isporučena.</li>
        <li data-sr="isti dobavljač fakturiše za različite usluge bez jasne ekspertize." data-en="same vendor invoices for different services without clear expertise.">isti dobavljač fakturiše za različite usluge bez jasne ekspertize.</li>
        <li data-sr="zaposleni u nabavci koji odobrava fakture ima lični odnos sa dobavljačem." data-en="procurement employee approving invoices has personal relationship with vendor.">zaposleni u nabavci koji odobrava fakture ima lični odnos sa dobavljačem.</li>
        <li data-sr="adresa dobavljača je registrovana na istom mestu kao i više drugih sumnjivih firmi." data-en="vendor address is registered at same location as several other suspicious companies.">adresa dobavljača je registrovana na istom mestu kao i više drugih sumnjivih firmi.</li>
      </ul>
    </section>

    <!-- 5) PROVERE -->
    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera za onboarding i aktivne dobavljače" data-en="Checks: 8 quick checks for onboarding and active vendors">Provere: 8 brzih provera za onboarding i aktivne dobavljače</h2>

      <p
        data-sr="Provere moraju biti strukturisane i dokumentovane. Verifikacija je deo procesa koji ostavlja trag — ne samo pregled papirne dokumentacije."
        data-en="Checks must be structured and documented. Verification is part of the process that leaves an audit tražil — not just reviewing paper documentation."
      >Provere moraju biti strukturisane i dokumentovane. Verifikacija je deo procesa koji ostavlja trag — ne samo pregled papirne dokumentacije.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Onboarding provere" data-en="Onboarding checks">Onboarding provere</div>
          <ul class="bullets">
            <li data-sr="nezavisno kontaktiraj reference dobavljača — ne preko kontakta koji je dobavljač dao." data-en="independently contact vendor references — not through contact the vendor provided.">nezavisno kontaktiraj reference dobavljača — ne preko kontakta koji je dobavljač dao.</li>
            <li data-sr="proveri PIB i registracioni broj u poreskoj upravi i poslovnom registru." data-en="verify tax ID and registration number with tax authority and business registry.">proveri PIB i registracioni broj u poreskoj upravi i poslovnom registru.</li>
            <li data-sr="proveri da li su adresa i vlasnici dobavljača vezani za poznate lažne šeme." data-en="check if vendor address and owners are linked to known fraudulent schemes.">proveri da li su adresa i vlasnici dobavljača vezani za poznate lažne šeme.</li>
            <li data-sr="zahtevaj dokaz isporuke usluga prethodnim klijentima." data-en="request proof of service delivery to prior clients.">zahtevaj dokaz isporuke usluga prethodnim klijentima.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Provere aktivnih dobavljača" data-en="Active vendor checks">Provere aktivnih dobavljača</div>
          <ul class="bullets">
            <li data-sr="svaka faktura mora imati potpisani delivery report od primaoca usluge unutar firme." data-en="every invoice must have a signed delivery report from the service recipient within the company.">svaka faktura mora imati potpisani delivery report od primaoca usluge unutar firme.</li>
            <li data-sr="periodični re-screening aktivnih dobavljača (godišnji minimum)." data-en="periodic re-screening of active vendors (annual minimum).">periodični re-screening aktivnih dobavljača (godišnji minimum).</li>
            <li data-sr="da li je isti zaposleni jedini koji odobrava fakture ovog dobavljača." data-en="is the same employee the only one approving invoices from this vendor.">da li je isti zaposleni jedini koji odobrava fakture ovog dobavljača.</li>
            <li data-sr="da li suma faktura po dobavljaču raste brzo bez promene u obimu posla." data-en="is the invoice sum per vendor growing fast without change in work scope.">da li suma faktura po dobavljaču raste brzo bez promene u obimu posla.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 6) CHECKLISTA -->
    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja pri odobravanju novog dobavljača" data-en="Checklist: 12 questions when approving a new vendor">Checklista: 12 pitanja pri odobravanju novog dobavljača</h2>

      <p class="muted"
        data-sr="Brzo čitanje. Više negativnih odgovora znači aktivan rizik."
        data-en="Quick read. Multiple negative answers indicate active risk."
      >Brzo čitanje. Više negativnih odgovora znači aktivan rizik.</p>

      <ul class="bullets">
        <li data-sr="Da li smo nezavisno kontaktirali reference dobavljača?" data-en="Did we independently contact the vendor's references?">Da li smo nezavisno kontaktirali reference dobavljača?</li>
        <li data-sr="Da li smo verifikovali PIB i registraciju kroz poresku upravu?" data-en="Did we verify the tax ID and registration through the tax authority?">Da li smo verifikovali PIB i registraciju kroz poresku upravu?</li>
        <li data-sr="Da li firma ima proverljivu istoriju poslovanja sa realnim klijentima?" data-en="Does the company have verifiable business history with real clients?">Da li firma ima proverljivu istoriju poslovanja sa realnim klijentima?</li>
        <li data-sr="Da li onboarding prati standardni proces bez ubrzavanja?" data-en="Did onboarding follow standard process without acceleration?">Da li onboarding prati standardni proces bez ubrzavanja?</li>
        <li data-sr="Da li je odobrenje dobavljača prošlo kroz više od jedne osobe?" data-en="Did vendor approval pass through more than one person?">Da li je odobrenje dobavljača prošlo kroz više od jedne osobe?</li>
        <li data-sr="Da li su usluge koje dobavljač nudi precizno definisane i merljive?" data-en="Are the services the vendor offers precisely defined and measurable?">Da li su usluge koje dobavljač nudi precizno definisane i merljive?</li>
        <li data-sr="Da li postoji jasna osoba unutar firme koja verifikuje svaku isporuku?" data-en="Is there a clear person inside the company who verifies each delivery?">Da li postoji jasna osoba unutar firme koja verifikuje svaku isporuku?</li>
        <li data-sr="Da li zaposleni koji odobrava dobavljača ima konekciju sa tim dobavljačem?" data-en="Does the employee approving the vendor have a connection to that vendor?">Da li zaposleni koji odobrava dobavljača ima konekciju sa tim dobavljačem?</li>
        <li data-sr="Da li je cena dobavljača uporediva sa tržišnom cenom za isti tip usluga?" data-en="Is the vendor price comparable to market price for the same type of services?">Da li je cena dobavljača uporediva sa tržišnom cenom za isti tip usluga?</li>
        <li data-sr="Da li IBAN dobavljača odgovara IBAN-u na zvaničnom ugovoru?" data-en="Does the vendor IBAN match the IBAN on the official contract?">Da li IBAN dobavljača odgovara IBAN-u na zvaničnom ugovoru?</li>
        <li data-sr="Da li periodično re-screenujemo aktivne dobavljače?" data-en="Do we periodically re-screen active vendors?">Da li periodično re-screenujemo aktivne dobavljače?</li>
        <li data-sr="Da li je svaka plaćena faktura praćena potpisanim dokumentom prihvatanja usluge?" data-en="Is every paid invoice accompanied by a signed service acceptance document?">Da li je svaka plaćena faktura praćena potpisanim dokumentom prihvatanja usluge?</li>
      </ul>
    </section>

    <!-- 7) AKO SUMNJA KRENE -->
    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="zaustavi sve fakture od sumnjivog dobavljača — ne odobravaj naredne uplate dok istraga nije završena." data-en="stop all invoices from the suspicious vendor — do not approve further payments until investigation is complete.">zaustavi sve fakture od sumnjivog dobavljača — ne odobravaj naredne uplate dok istraga nije završena.</li>
        <li data-sr="nezavisno kontaktiraj navedene reference dobavljača — da li su zaista poslovali zajedno." data-en="independently contact stated vendor references — did they actually work together.">nezavisno kontaktiraj navedene reference dobavljača — da li su zaista poslovali zajedno.</li>
        <li data-sr="pregleda celokupnu istoriju faktura sa tim dobavljačem i identifikuj fakture bez delivery dokumentacije." data-en="review the complete invoice history with that vendor and identify invoices without delivery documentation.">pregleda celokupnu istoriju faktura sa tim dobavljačem i identifikuj fakture bez delivery dokumentacije.</li>
        <li data-sr="identifikuj koji zaposleni je odobravao fakture i da li je u dosluhu." data-en="identify which employee approved invoices and whether they are complicit.">identifikuj koji zaposleni je odobravao fakture i da li je u dosluhu.</li>
        <li data-sr="angažuj interne ili eksterne revizore." data-en="engage internal or external auditors.">angažuj interne ili eksterne revizore.</li>
        <li data-sr="prijavi policiji i relevantnim regulatorima." data-en="report to police and relevant regulators.">prijavi policiji i relevantnim regulatorima.</li>
      </ol>

      <div class="callout"
        data-sr="<strong>Ključna razlika:</strong> za razliku od BEC napada, kod ovog tipa prevare može biti moguća delimična kompenzacija ako se utvrdi odgovornost i finansijska imovina napadača."
        data-en="<strong>Key distinction:</strong> unlike BEC attacks, in this type of fraud partial compensation may be possible if liability and financial assets of the attacker are established."
      ><strong>Ključna razlika:</strong> za razliku od BEC napada, kod ovog tipa prevare može biti moguća delimična kompenzacija ako se utvrdi odgovornost i finansijska imovina napadača.</div>
    </section>

    <!-- 8) AKO POMAŽEŠ NEKOME -->
    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>

      <p
        data-sr="Zaposleni u nabavci koji je bio uključen u odobravanje sumnjivog dobavljača može biti pod pritiskom ili biti saučesnik. U oba slučaja konfrontacija pre prikupljanja dokaza nije preporučljiva. Bolje je pokrenuti interni audit koji prati fakture, a ne lica."
        data-en="The procurement employee involved in approving the suspicious vendor may be under pressure or may be complicit. In both cases confrontation before evidence gathering is not advisable. Better to initiate an internal audit that follows invoices, not individuals."
      >Zaposleni u nabavci koji je bio uključen u odobravanje sumnjivog dobavljača može biti pod pritiskom ili biti saučesnik. U oba slučaja konfrontacija pre prikupljanja dokaza nije preporučljiva. Bolje je pokrenuti interni audit koji prati fakture, a ne lica.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li za ove fakture postoji delivery dokumentacija potpisana od primaoca usluge?" data-en="Do these invoices have delivery documentation signed by the service recipient?">Da li za ove fakture postoji delivery dokumentacija potpisana od primaoca usluge?</li>
            <li data-sr="Ko unutar firme može potvrditi da je usluga zaista isporučena i kada?" data-en="Who inside the company can confirm the service was actually delivered and when?">Ko unutar firme može potvrditi da je usluga zaista isporučena i kada?</li>
            <li data-sr="Da li smo nezavisno kontaktirali ovog dobavljača kroz kanal koji nismo dobili od njega?" data-en="Did we independently contact this vendor through a channel we did not get from them?">Da li smo nezavisno kontaktirali ovog dobavljača kroz kanal koji nismo dobili od njega?</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Hajde da pratimo fakture, ne ljude — tražimo delivery dokumentaciju za svaku." data-en="Let's follow the invoices, not the people — we need delivery documentation for each.">Hajde da pratimo fakture, ne ljude — tražimo delivery dokumentaciju za svaku.</li>
            <li data-sr="Audit je zaštita svih — on pokazuje gde je proces zakazao, ne ko je kriv." data-en="The audit protects everyone — it shows where the process failed, not who is to blame.">Audit je zaštita svih — on pokazuje gde je proces zakazao, ne ko je kriv.</li>
            <li data-sr="Promena procesa je bolja od zaustavljanja na jednom slučaju." data-en="Changing the process is better than stopping at one case.">Promena procesa je bolja od zaustavljanja na jednom slučaju.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 9) POVEZANE PREVARE -->
    
  `
};
