window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["directory-listing-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi prevara sa poslovnim imenicima" data-en="Introduction: how the directory listing scam works">Uvod: kako radi prevara sa poslovnim imenicima</h2>
      <p data-sr="Firma dobija fakturu za listiranje u poslovnom imeniku ili online direktorijumu. Faktura izgleda kao obnova postojeće usluge — sa imenom firme, adresom i iznosom. Imenik ili ne postoji ili ima nultu posećenost i nema nikakvu poslovnu vrednost." data-en="A company receives an invoice for listing in a business directory or online directory. The invoice looks like a renewal of an existing service — with the company name, address and amount. The directory either does not exist or has zero traffic and no business value.">Firma dobija fakturu za listiranje u poslovnom imeniku ili online direktorijumu. Faktura izgleda kao obnova postojeće usluge — sa imenom firme, adresom i iznosom. Imenik ili ne postoji ili ima nultu posećenost i nema nikakvu poslovnu vrednost.</p>
      <p data-sr="Prevara se oslanja na rutinsko procesiranje faktura u firmama. Računovodstvo plaća fakturu jer izgleda kao legitimna obnova usluge koju firma već koristi. Niko ne proverava da li je usluga zaista korišćena ili da li imenik postoji." data-en="The scam relies on routine invoice processing in companies. Accounting pays the invoice because it looks like a legitimate renewal of a service the company already uses. Nobody checks whether the service was actually used or whether the directory exists.">Prevara se oslanja na rutinsko procesiranje faktura u firmama. Računovodstvo plaća fakturu jer izgleda kao legitimna obnova usluge koju firma već koristi. Niko ne proverava da li je usluga zaista korišćena ili da li imenik postoji.</p>
      <div class="callout" data-sr="<strong>Model:</strong> lažni imenik/oglas → faktura za listiranje → uplata → bez vrednosti ili usluga nije isporučena." data-en="<strong>Model:</strong> fake directory/ad → listing invoice → payment → no value or service not delivered."><strong>Model:</strong> lažni imenik/oglas → faktura za listiranje → uplata → bez vrednosti ili usluga nije isporučena.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> uplata fakture. Napadač prima novac i firma ne dobija nikakvu korist ni posetioce." data-en="<strong>Threshold:</strong> payment of the invoice. The attacker receives money and the company gets no benefit or visitors."><strong>Prag:</strong> uplata fakture. Napadač prima novac i firma ne dobija nikakvu korist ni posetioce.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika" data-en="How it works: mechanics">Kako generalno radi: mehanika</h2>
      <div class="grid-2">
        <div>
          <h3 data-sr="Šta gradi uverljivost" data-en="What builds credibility">Šta gradi uverljivost</h3>
          <ul class="bullets">
            <li data-sr="Faktura sadrži tačne podatke o firmi — ime, adresu, PIB — prikupljene iz javnih registara." data-en="Invoice contains accurate company data — name, address, tax ID — collected from public registers.">Faktura sadrži tačne podatke o firmi — ime, adresu, PIB — prikupljene iz javnih registara.</li>
            <li data-sr="Formulacija sugeriše obnovu: godišnja pretplata, nastavak listiranja." data-en="Wording suggests renewal: &ldquo;annual subscription&rdquo;, &ldquo;listing continuation&rdquo;.">Formulacija sugeriše obnovu: godišnja pretplata, nastavak listiranja.</li>
            <li data-sr="Naziv imenika zvuči legitimno — Poslovni registar, Industrijski direktorijum." data-en="Directory name sounds legitimate — &ldquo;Business Register&rdquo;, &ldquo;Industry Directory&rdquo;.">Naziv imenika zvuči legitimno — Poslovni registar, Industrijski direktorijum.</li>
            <li data-sr="Iznos je relativno mali (50–300 evra) — ispod praga koji zahteva posebno odobrenje." data-en="Amount is relatively small (50–300 euros) — below the threshold requiring special approval.">Iznos je relativno mali (50–300 evra) — ispod praga koji zahteva posebno odobrenje.</li>
          </ul>
        </div>
        <div>
          <h3 data-sr="Kako se uvodi novac" data-en="How money is introduced">Kako se uvodi novac</h3>
          <ul class="bullets">
            <li data-sr="Faktura sa rokom plaćanja od 14–30 dana — standardan poslovni format." data-en="Invoice with payment deadline of 14–30 days — standard business format.">Faktura sa rokom plaćanja od 14–30 dana — standardan poslovni format.</li>
            <li data-sr="Platni podaci su regularni — žiro račun ili IBAN koji ne izgleda sumnjivo." data-en="Payment details are regular — giro account or IBAN that does not look suspicious.">Platni podaci su regularni — žiro račun ili IBAN koji ne izgleda sumnjivo.</li>
            <li data-sr="Neke firme dobijaju i ugovor koji izgledaju legitimno ali sadrže klauzule o automatskom obnavljanju." data-en="Some companies also receive a &ldquo;contract&rdquo; that looks legitimate but contains automatic renewal clauses.">Neke firme dobijaju i ugovor koji izgledaju legitimno ali sadrže klauzule o automatskom obnavljanju.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok" data-en="Chronological flow">Hronološki tok</h2>

      <div class="phase">
        <div class="label" data-sr="Faza 1: Prikupljanje podataka o firmama" data-en="Phase 1: Company data collection">Faza 1: Prikupljanje podataka o firmama</div>
        <p data-sr="Napadač prikuplja podatke o firmama iz javnih poslovnih registara — naziv, adresa, PIB, kontakt. Pravi masovne liste ciljeva." data-en="Attacker collects company data from public business registers — name, address, tax ID, contact. Creates mass target lists.">Napadač prikuplja podatke o firmama iz javnih poslovnih registara — naziv, adresa, PIB, kontakt. Pravi masovne liste ciljeva.</p>
        <ul class="bullets">
          <li data-sr="Podaci su besplatno dostupni u poslovnim registrima većine zemalja." data-en="Data is freely available in business registers of most countries.">Podaci su besplatno dostupni u poslovnim registrima većine zemalja.</li>
          <li data-sr="Napad je masovan — iste fakture se šalju hiljadama firmi istovremeno." data-en="Attack is mass — same invoices are sent to thousands of companies simultaneously.">Napad je masovan — iste fakture se šalju hiljadama firmi istovremeno.</li>
        </ul>
        <p class="phase-threshold" data-sr="Prag faze: faktura je poslata na adresu firme ili email." data-en="Phase threshold: invoice has been sent to the company's address or email.">Prag faze: faktura je poslata na adresu firme ili email.</p>
      </div>

      <div class="phase">
        <div class="label" data-sr="Faza 2: Slanje lažne fakture" data-en="Phase 2: Sending fake invoice">Faza 2: Slanje lažne fakture</div>
        <p data-sr="Firma prima fakturu poštom ili emailom. Izgleda kao redovna faktura za godišnju pretplatu na imenik." data-en="Company receives invoice by post or email. It looks like a regular invoice for annual directory subscription.">Firma prima fakturu poštom ili emailom. Izgleda kao redovna faktura za godišnju pretplatu na imenik.</p>
        <ul class="bullets">
          <li data-sr="Faktura je profesionalno dizajnirana sa svim elementima legitimne fakture." data-en="Invoice is professionally designed with all elements of a legitimate invoice.">Faktura je profesionalno dizajnirana sa svim elementima legitimne fakture.</li>
          <li data-sr="Sitnim slovima može pisati da se radi o ponudi — ali to lako prođe nezapaženo." data-en="Fine print may state this is an offer — but that easily goes unnoticed.">Sitnim slovima može pisati da se radi o ponudi — ali to lako prođe nezapaženo.</li>
          <li data-sr="Iznos je dovoljno mali da ne zahteva posebno odobrenje direktora." data-en="Amount is small enough not to require special director approval.">Iznos je dovoljno mali da ne zahteva posebno odobrenje direktora.</li>
        </ul>
        <p class="phase-threshold" data-sr="Prag faze: računovodstvo procesira fakturu bez provere usluge." data-en="Phase threshold: accounting processes the invoice without checking the service.">Prag faze: računovodstvo procesira fakturu bez provere usluge.</p>
      </div>

      <div class="phase">
        <div class="label" data-sr="Faza 3: Uplata i nulta isporuka" data-en="Phase 3: Payment and zero delivery">Faza 3: Uplata i nulta isporuka</div>
        <p data-sr="Firma plaća. Listiranje u imeniku ili ne postoji ili je na sajtu bez prometa koji niko ne koristi za traženje firmi." data-en="Company pays. The directory listing either does not exist or is on a site with no traffic that nobody uses to find companies.">Firma plaća. Listiranje u imeniku ili ne postoji ili je na sajtu bez prometa koji niko ne koristi za traženje firmi.</p>
        <ul class="bullets">
          <li data-sr="Imenik postoji kao sajt ali ima nultu posećenost i nema SEO vrednosti." data-en="The directory exists as a site but has zero traffic and no SEO value.">Imenik postoji kao sajt ali ima nultu posećenost i nema SEO vrednosti.</li>
          <li data-sr="Firma ne dobija nijednog posetioца niti konverziju kao rezultat listiranja." data-en="Company receives no visitors or conversions as a result of the listing.">Firma ne dobija nijednog posetioца niti konverziju kao rezultat listiranja.</li>
          <li data-sr="Sledeće godine stiže nova faktura za obnovu — ciklus se ponavlja." data-en="Next year a new invoice arrives for &ldquo;renewal&rdquo; — cycle repeats.">Sledeće godine stiže nova faktura za obnovu — ciklus se ponavlja.</li>
        </ul>
        <p class="phase-threshold" data-sr="Prag faze: firma shvata da nije dobila nikakvu vrednost za uplatu." data-en="Phase threshold: company realises it received no value for the payment.">Prag faze: firma shvata da nije dobila nikakvu vrednost za uplatu.</p>
      </div>

      <div class="phase">
        <div class="label" data-sr="Faza 4: Ponavljanje i eskalacija" data-en="Phase 4: Repetition and escalation">Faza 4: Ponavljanje i eskalacija</div>
        <p data-sr="Napadač šalje fakturu ponovo naredne godine. Ili kontaktira sa ponudom za veći paket listiranja. Podaci se prodaju drugim sličnim organizacijama." data-en="Attacker sends the invoice again the following year. Or contacts with an offer for a larger listing package. Data is sold to other similar organisations.">Napadač šalje fakturu ponovo naredne godine. Ili kontaktira sa ponudom za veći paket listiranja. Podaci se prodaju drugim sličnim organizacijama.</p>
        <ul class="bullets">
          <li data-sr="Firma koja je jednom platila postaje prioritetna meta za buduće prevare." data-en="A company that paid once becomes a priority target for future scams.">Firma koja je jednom platila postaje prioritetna meta za buduće prevare.</li>
          <li data-sr="Podaci se prodaju i drugim lažnim direktorijumima — firma dobija više sličnih faktura." data-en="Data is sold to other fake directories — company receives multiple similar invoices.">Podaci se prodaju i drugim lažnim direktorijumima — firma dobija više sličnih faktura.</li>
        </ul>
        <p class="phase-threshold" data-sr="Prag faze: firma uvodi procedure za proveru faktura pre plaćanja." data-en="Phase threshold: company introduces invoice verification procedures before payment.">Prag faze: firma uvodi procedure za proveru faktura pre plaćanja.</p>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Faktura za uslugu koju niko u firmi ne pamti da je naručio." data-en="Invoice for a service nobody in the company remembers ordering.">Faktura za uslugu koju niko u firmi ne pamti da je naručio.</li>
        <li data-sr="Naziv direktorijuma ili imenika koji firma ne koristi i nije čula za njega." data-en="Directory name the company does not use and has never heard of.">Naziv direktorijuma ili imenika koji firma ne koristi i nije čula za njega.</li>
        <li data-sr="Formulacija godišnja obnova ili nastavak pretplate bez prethodnog ugovora." data-en="Wording &ldquo;annual renewal&rdquo; or &ldquo;subscription continuation&rdquo; without a prior contract.">Formulacija godišnja obnova ili nastavak pretplate bez prethodnog ugovora.</li>
        <li data-sr="Iznos je mali i izgleda rutinski — dizajnirano da prođe kroz računovodstvo bez pitanja." data-en="Amount is small and looks routine — designed to pass through accounting without questions.">Iznos je mali i izgleda rutinski — dizajnirano da prođe kroz računovodstvo bez pitanja.</li>
        <li data-sr="Sajt imenika ima nultu posećenost i listiranja uglavnom nepostojećih firmi." data-en="Directory site has zero traffic and listings mostly of non-existent companies.">Sajt imenika ima nultu posećenost i listiranja uglavnom nepostojećih firmi.</li>
        <li data-sr="U sitnim slovima piše da je to ponuda a ne faktura — ali je dizajnirano kao faktura." data-en="Fine print states it is an &ldquo;offer&rdquo; not an invoice — but designed to look like an invoice.">U sitnim slovima piše da je to ponuda a ne faktura — ali je dizajnirano kao faktura.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere pre uplate" data-en="Checks before payment">Provere pre uplate</h2>
      <ul class="bullets">
        <li data-sr="Proverite da li neko u firmi zaista naručio listiranje u ovom imeniku." data-en="Check whether anyone in the company actually ordered a listing in this directory.">Proverite da li neko u firmi zaista naručio listiranje u ovom imeniku.</li>
        <li data-sr="Pretražite naziv imenika sa prevara ili scam pre bilo kakvog plaćanja." data-en="Search the directory name with &ldquo;fraud&rdquo; or &ldquo;scam&rdquo; before any payment.">Pretražite naziv imenika sa prevara ili scam pre bilo kakvog plaćanja.</li>
        <li data-sr="Proverite promet sajta imenika — ako ima nultu posećenost, listiranje nema vrednost." data-en="Check the directory site's traffic — if it has zero traffic the listing has no value.">Proverite promet sajta imenika — ako ima nultu posećenost, listiranje nema vrednost.</li>
        <li data-sr="Pažljivo pročitajte sitna slova — da li je ovo faktura ili ponuda?" data-en="Carefully read the fine print — is this an invoice or an offer?">Pažljivo pročitajte sitna slova — da li je ovo faktura ili ponuda?</li>
        <li data-sr="Uspostavite interni proces gde svaka nova faktura zahteva verifikaciju porudžbine." data-en="Establish an internal process where every new invoice requires order verification.">Uspostavite interni proces gde svaka nova faktura zahteva verifikaciju porudžbine.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Checklista pre uplate" data-en="Checklist before payment">Checklista pre uplate</h2>
      <ol class="bullets">
        <li data-sr="Da li neko u firmi pamti da je naručio ovu uslugu?" data-en="Does anyone in the company remember ordering this service?">Da li neko u firmi pamti da je naručio ovu uslugu?</li>
        <li data-sr="Da li postoji interni nalog za nabavku ili ugovor koji odgovara ovoj fakturi?" data-en="Is there an internal purchase order or contract matching this invoice?">Da li postoji interni nalog za nabavku ili ugovor koji odgovara ovoj fakturi?</li>
        <li data-sr="Da li sam proverio online recenzije ovog imenika?" data-en="Have I checked online reviews of this directory?">Da li sam proverio online recenzije ovog imenika?</li>
        <li data-sr="Da li sajt imenika ima stvarnu posećenost i vrednost za firmu?" data-en="Does the directory site have real traffic and value for the company?">Da li sajt imenika ima stvarnu posećenost i vrednost za firmu?</li>
        <li data-sr="Da li u sitnim slovima piše da je ovo ponuda a ne faktura?" data-en="Does the fine print say this is an offer rather than an invoice?">Da li u sitnim slovima piše da je ovo ponuda a ne faktura?</li>
        <li data-sr="Da li je iznos namerno mali da bi prošao bez provere?" data-en="Is the amount intentionally small to pass without verification?">Da li je iznos namerno mali da bi prošao bez provere?</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion arises: steps to take">Ako sumnja krene: redosled poteza</h2>
      <ol class="bullets">
        <li data-sr="Ne platiti dok se ne utvrdi da li je usluga ikad naručena interno." data-en="Do not pay until it is established whether the service was ever ordered internally.">Ne platiti dok se ne utvrdi da li je usluga ikad naručena interno.</li>
        <li data-sr="Ako je uplata već izvršena — kontaktirati banku i pokušati povrat." data-en="If payment was already made — contact bank and attempt refund.">Ako je uplata već izvršena — kontaktirati banku i pokušati povrat.</li>
        <li data-sr="Sačuvati fakturu kao dokaz i prijaviti organizaciju telu za zaštitu potrošača." data-en="Keep the invoice as evidence and report the organisation to the consumer protection body.">Sačuvati fakturu kao dokaz i prijaviti organizaciju telu za zaštitu potrošača.</li>
        <li data-sr="Upozoriti kolege u industriji i poslovne asocijacije o ovom imeniku." data-en="Warn industry colleagues and business associations about this directory.">Upozoriti kolege u industriji i poslovne asocijacije o ovom imeniku.</li>
        <li data-sr="Uvesti interni proces verifikacije za sve nove fakture pre odobravanja plaćanja." data-en="Introduce an internal verification process for all new invoices before approving payment.">Uvesti interni proces verifikacije za sve nove fakture pre odobravanja plaćanja.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
      <ul class="bullets">
        <li data-sr="Da li neko u firmi pamti da je naručio listiranje u ovom imeniku?" data-en="'Does anyone in the company remember ordering a listing in this directory?">Da li neko u firmi pamti da je naručio listiranje u ovom imeniku?</li>
        <li data-sr="Proverimo zajedno koliko posetilaca ima taj sajt — ako je nula, listiranje nema vrednost." data-en="'Let us check together how many visitors that site has — if zero the listing has no value.">Proverimo zajedno koliko posetilaca ima taj sajt — ako je nula, listiranje nema vrednost.</li>
        <li data-sr="Uvedi pravilo da svaka faktura mora imati odgovarajući interni nalog za nabavku." data-en="'Introduce a rule that every invoice must have a corresponding internal purchase order.">Uvedi pravilo da svaka faktura mora imati odgovarajući interni nalog za nabavku.</li>
      </ul>
    </section>

    
  `
};
