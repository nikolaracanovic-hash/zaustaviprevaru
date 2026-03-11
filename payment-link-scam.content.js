window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["payment-link-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi prevara s linkom za plaćanje" data-en="Introduction: how the payment link scam works">Uvod: kako radi prevara s linkom za plaćanje</h2>
      <p data-sr="Prevara s linkom za plaćanje iskorišćava poverenje koje korisnici imaju u SMS, imejl ili messenger poruke koje izgledaju kao od poznatog servisa, banke, marketplace platforme ili kupca. Napadač šalje link koji vizualno imitira legitimnu stranicu za plaćanje. Žrtva unese podatke kartice ili bankovnog naloga, a podaci odlaze napadaču — a ne servis primatelju." data-en="The payment link scam exploits the trust users have in SMS, email, or messenger messages that appear to come from a known service, bank, marketplace platform, or buyer. The attacker sends a link that visually imitates a legitimate payment page. The victim enters card or bank account data, which goes to the attacker — not the service recipient.">Lažni link imitira legitimnu stranicu za plaćanje. Žrtva unese podatke kartice ili bankovnog naloga, koji odlaze napadaču.</p>
      <p data-sr="Posebno je opasna varijanta u kojoj napadač kontaktira prodavca kao kupac i kaže „šaljem ti link za primanje uplate“. Link vodi na lažnu stranicu koja izgleda kao banka ili platforma, ali traži unos kartičnih podataka prodavca — što je kontraproduktivno za „primanje uplate“ i direktno je signal prevare." data-en="A particularly dangerous variant is where the attacker contacts a seller as a buyer and says 'I'm sending you a link to receive payment'. The link leads to a fake page that looks like a bank or platform but requests entry of the seller's card details — which is counterproductive for 'receiving payment' and is a direct fraud signal.">Varijanta gde kupac šalje prodavcu link za 'primanje uplate' je posebno podmukla — prodavac unosi vlastite kartičane podatke.</p>
      <div class="callout" data-sr="<strong>Model:</strong> kontakt → link za plaćanje u poruci → vizualno legitiman sajt → unos podataka kartice → podaci idu napadaču." data-en="<strong>Model:</strong> contact → payment link in message → visually legitimate site → card data entry → data goes to attacker."><strong>Model:</strong> kontakt → link za plaćanje u poruci → vizualno legitiman sajt → unos podataka kartice → podaci idu napadaču.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> legitimni servis uvek prima plaćanja kroz vlastitu platformu — link koji dolazi u privatnoj poruci je skoro uvek lažan." data-en="<strong>Threshold:</strong> a legitimate service always accepts payments through its own platform — a link arriving in a private message is almost always fake."><strong>Prag:</strong> legitimni servis uvek prima plaćanja kroz vlastitu platformu — link koji dolazi u privatnoj poruci je skoro uvek lažan.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika prevare s linkom" data-en="How it works: payment link scam mechanics">Kako generalno radi: mehanika prevare s linkom</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gradi legitimnost linka" data-en="What builds the link's legitimacy">Šta gradi legitimnost linka</div>
          <ul class="bullets">
            <li data-sr="URL koji liči na zvanični — slova su zamenjena (rn umesto m), dodat prefiks ili sufiks." data-en="URL that resembles the official one — letters are substituted (rn instead of m), prefix or suffix added.">URL koji liči na zvanični — slova su zamenjena (rn umesto m), dodat prefiks ili sufiks.</li>
            <li data-sr="vizualni dizajn lažne stranice koji kopira logo, boje i layout legitimnog servisa." data-en="visual design of the fake page copying the logo, colors, and layout of the legitimate service.">vizualni dizajn lažne stranice koji kopira logo, boje i layout legitimnog servisa.</li>
            <li data-sr="SSL katanac u pretraživaču — koji dokazuje samo ?enkriptovanu vezu, ne legitimnost vlasnika." data-en="SSL padlock in the browser — which proves only an encrypted connection, not the owner's legitimacy.">SSL katanac u pretraživaču — koji dokazuje samo ?enkriptovanu vezu, ne legitimnost vlasnika.</li>
            <li data-sr="poruka dolazi naizgled od poznatog pošiljaoca — spoofovani broj, klonirani nalog." data-en="the message appears to come from a known sender — spoofed number, cloned account.">poruka dolazi naizgled od poznatog pošiljaoca — spoofovani broj, klonirani nalog.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Kako se uvodi unos podataka" data-en="How data entry is introduced">Kako se uvodi unos podataka</div>
          <ul class="bullets">
            <li data-sr="lažna stranica traži broj kartice, datum isteka i CVV pod okriljem 'potvrde plaćanja„." data-en="the fake page requests card number, expiry, and CVV under the guise of “payment confirmation'.">lažna stranica traži broj kartice, datum isteka i CVV pod okriljem 'potvrde plaćanja'.</li>
            <li data-sr="lažna stranica traži bankovne podatke prodavca pod okriljem 'registracije za primanje uplate„." data-en="the fake page requests the seller“s banking data under the guise of 'registering to receive payment'.">lažna stranica traži bankovne podatke prodavca pod okriljem 'registracije za primanje uplate'.</li>
            <li data-sr="stranke za phishing u realnom vremenu prosljeđuju unete podatke napadaču dok žrtva čeka." data-en="real-time phishing proxies forward entered data to the attacker while the victim waits.">stranke za phishing u realnom vremenu prosljeđuju unete podatke napadaču dok žrtva čeka.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)." data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Slanje linka i ubedljivi kontekst" data-en="Phase 1 — Sending the link and convincing context">Faza 1 — Slanje linka i ubedljivi kontekst</h3>
        <p data-sr="Napadač šalje link u kontekstu koji izgleda prirodno — potvrda narudžbe, link za plaćanje, zahtev za refundom, verifikacija naloga. Kontekst određuje nivo sumnje: link u e-mailu koji izgleda kao od banke budi manje sumnje od random poruke." data-en="The attacker sends a link in a context that appears natural — order confirmation, payment link, refund request, account verification. The context determines the level of suspicion: a link in an email appearing to come from the bank raises less suspicion than a random message.">Link dolazi u ubedljivom kontekstu — potvrda, plaćanje, verifikacija. Kontekst smanjuje nivo sumnje.</p>
        <ul class="bullets">
          <li data-sr="signal: link koji stiže u privatnoj poruci umesto kroz zvaničnu platformu servisa." data-en="signal: a link arriving in a private message instead of through the service's official platform.">signal: link koji stiže u privatnoj poruci umesto kroz zvaničnu platformu servisa.</li>
          <li data-sr="signal: URL koji ne odgovara tačno zvaničnom domenu servisa — proverite slova i nastavke." data-en="signal: URL that does not exactly match the service's official domain — check letters and extensions.">signal: URL koji ne odgovara tačno zvaničnom domenu servisa — proverite slova i nastavke.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> žrtva klikne na link i otvori stranicu koja izgleda legitimno." data-en="<strong>Threshold:</strong> the victim clicks the link and opens a page that appears legitimate."><strong>Prag faze:</strong> žrtva klikne na link i otvori stranicu koja izgleda legitimno.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Unos podataka na lažnoj stranici" data-en="Phase 2 — Data entry on fake page">Faza 2 — Unos podataka na lažnoj stranici</h3>
        <p data-sr="Žrtva unosi podatke kartice ili bankovnog naloga na lažnoj stranici koja izgleda legitimno. Napadač prima podatke u realnom vremenu i može ih koristiti za CNP kupovine ili autorizaciju transakcija." data-en="The victim enters card or banking data on a fake page that appears legitimate. The attacker receives the data in real-time and can use it for CNP purchases or transaction authorization.">Žrtva unosi podatke kartice na lažnoj stranici. Napadač ih prima u realnom vremenu.</p>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="otp-interception.html" data-sr="Presretanje OTP koda" data-en="OTP interception">Presretanje OTP koda</a></li>
            <li><a href="qr-payment-scam.html" data-sr="QR prevara pri plaćanju" data-en="QR payment scam">QR prevara pri plaćanju</a></li>
            <li><a href="card-not-present-fraud.html" data-sr="Zloupotreba kartice bez fizičkog prisustva" data-en="Card-not-present fraud">Zloupotreba kartice bez fizičkog prisustva</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> podaci su predati — blokada kartice je jedina preostala zaštitna mera." data-en="<strong>Threshold:</strong> data is submitted — card blocking is the only remaining protective measure."><strong>Prag faze:</strong> podaci su predati — blokada kartice je jedina preostala zaštitna mera.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="link za plaćanje koji dolazi u privatnoj poruci umesto kroz zvaničnu platformu servisa." data-en="payment link arriving in a private message instead of through the service's official platform.">link za plaćanje koji dolazi u privatnoj poruci umesto kroz zvaničnu platformu servisa.</li>
        <li data-sr="URL koji vizualno liči na zvanični ali ne odgovara tačno — razlika u jednom slovu, drugačiji nastavak." data-en="URL that visually resembles the official one but does not match exactly — one-letter difference, different extension.">URL koji vizualno liči na zvanični ali ne odgovara tačno — razlika u jednom slovu, drugačiji nastavak.</li>
        <li data-sr="kupac ili 'banka„ kaže “klik na ovaj link da primiš uplatu„ — primanje uplate ne zahteva unos kartičnih podataka." data-en="buyer or “bank' says 'click this link to receive payment' — receiving payment does not require entering card data.">kupac ili 'banka' kaže 'klik na ovaj link da primiš uplatu' — primanje uplate ne zahteva unos kartičnih podataka.</li>
        <li data-sr="stranica traži CVV za 'verifikaciju identiteta„ — CVV se nikad ne traži za primanje novca." data-en="page requests CVV for “identity verification' — CVV is never required to receive money.">stranica traži CVV za 'verifikaciju identiteta' — CVV se nikad ne traži za primanje novca.</li>
        <li data-sr="stranica nudi kratku sesiju ili odbrojavanje koje pritiska na brz unos podataka." data-en="page offers a short session or countdown that pressures quick data entry.">stranica nudi kratku sesiju ili odbrojavanje koje pritiska na brz unos podataka.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 10 pitanja pre klika na link za plaćanje" data-en="Checklist: 10 questions before clicking a payment link">Checklista: 10 pitanja pre klika na link za plaćanje</h2>
      <ul class="bullets">
        <li data-sr="Da li je link stigao kroz zvaničnu platformu servisa ili u privatnoj poruci?" data-en="Did the link arrive through the service's official platform or in a private message?">Da li je link stigao kroz zvaničnu platformu servisa ili u privatnoj poruci?</li>
        <li data-sr="Da li URL tačno odgovara zvaničnom domenu — bez razlika u slovima ili nastavku?" data-en="Does the URL exactly match the official domain — no differences in letters or extension?">Da li URL tačno odgovara zvaničnom domenu — bez razlika u slovima ili nastavku?</li>
        <li data-sr="Da li stranica traži može kartičane podatke za „primanje uplate„ — što nema smisla?" data-en="Does the page request my card data to “receive payment“ — which makes no sense?">Da li stranica traži može kartičane podatke za 'primanje uplate' — što nema smisla?</li>
        <li data-sr="Da li mogu da pristupim plaćanju direktno kroz zvanični sajt servisa bez korišćenja linka?" data-en="Can I access the payment directly through the service's official site without using the link?">Da li mogu da pristupim plaćanju direktno kroz zvanični sajt servisa bez korišćenja linka?</li>
        <li data-sr="Da li je SSL katanac prisutan — znajući da to dokazuje samo ?enkriptovanu vezu, ne legitimnost?" data-en="Is the SSL padlock present — knowing that only proves an encrypted connection, not legitimacy?">Da li je SSL katanac prisutan — znajući da to dokazuje samo ?enkriptovanu vezu, ne legitimnost?</li>
        <li data-sr="Da li postoji vremenski pritisak koji me tera da unesem podatke bez provere URL-a?" data-en="Is there time pressure pushing me to enter data without checking the URL?">Da li postoji vremenski pritisak koji me tera da unesem podatke bez provere URL-a?</li>
        <li data-sr="Da li kupac koji šalje link može da me nazove video pozivom radi verifikacije?" data-en="Can the buyer who sent the link call me on video to verify?">Da li kupac koji šalje link može da me nazove video pozivom radi verifikacije?</li>
        <li data-sr="Da li je ovo ista vrsta linka koju ovaj servis uvek šalje — ili je format drugačiji?" data-en="Is this the same type of link this service always sends — or is the format different?">Da li je ovo ista vrsta linka koju ovaj servis uvek šalje — ili je format drugačiji?</li>
        <li data-sr="Da li sam posetio/la zvanični sajt direktno i proverio/la da li postoji ova transakcija?" data-en="Did I visit the official site directly and check whether this transaction exists?">Da li sam posetio/la zvanični sajt direktno i proverio/la da li postoji ova transakcija?</li>
        <li data-sr="Da li bi unošenje podataka na ovoj stranici trebalo da uspotavi transakciju ili bi je otvorilo napadaču?" data-en="Would entering data on this page complete a transaction or would it expose the data to an attacker?">Da li bi unošenje podataka na ovoj stranici trebalo da uspotavi transakciju ili bi je otvorilo napadaču?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="zatvorite stranicu odmah — ne unosite ni jedan podatak." data-en="close the page immediately — do not enter any data.">zatvorite stranicu odmah — ne unosite ni jedan podatak.</li>
        <li data-sr="ako ste uneli podatke kartice, odmah je blokirajte putem bankovne aplikacije." data-en="if you entered card data, immediately block it via the banking app.">ako ste uneli podatke kartice, odmah je blokirajte putem bankovne aplikacije.</li>
        <li data-sr="pristupite zvaničnom sajtu direktno i proverite je li transakcija legitimna." data-en="access the official site directly and verify whether the transaction is legitimate.">pristupite zvaničnom sajtu direktno i proverite je li transakcija legitimna.</li>
        <li data-sr="prijavite lažni link servisu, platformi i policiji." data-en="report the fake link to the service, platform, and police.">prijavite lažni link servisu, platformi i policiji.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li link koji si dobio/la odgovara tačno URL-u zvaničnog sajta servisa?" data-en="Does the link you received exactly match the URL of the service's official site?">Da li link koji si dobio/la odgovara tačno URL-u zvaničnog sajta servisa?</li>
            <li data-sr="Da li stranica traži tvoje kartičane podatke da bi ti „poslali novac„ — što nema logike?" data-en="Does the page request your card data to “send you money“ — which makes no logical sense?">Da li stranica traži tvoje kartičane podatke da bi ti 'poslali novac' — što nema logike?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Primanje novca ne zahteva unos tvojih kartičnih podataka — to radi samo slanje." data-en="Receiving money does not require entering your card data — only sending does.">Primanje novca ne zahteva unos tvojih kartičnih podataka — to radi samo slanje.</li>
            <li data-sr="Hajde da pristupimo sajtu direktno kucanjem URL-a, a ne klikom na link." data-en="Let's access the site directly by typing the URL, not clicking the link.">Hajde da pristupimo sajtu direktno kucanjem URL-a, a ne klikom na link.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card sources" id="sources">
      <h2 data-sr="Povezane prevare" data-en="Related scams">Povezane prevare</h2>
      <ul class="bullets">
        <li><a href="qr-payment-scam.html" data-sr="QR prevara pri plaćanju" data-en="QR payment scam">QR prevara pri plaćanju</a></li>
        <li><a href="instant-payment-scam.html" data-sr="Prevara s instant plaćanjem" data-en="Instant payment scam">Prevara s instant plaćanjem</a></li>
        <li><a href="bank-transfer-diversion-scam.html" data-sr="Preusmeravanje bankovnog transfera" data-en="Bank transfer diversion scam">Preusmeravanje bankovnog transfera</a></li>
        <li><a href="overpayment-scam.html" data-sr="Prevara s preplatom" data-en="Overpayment scam">Prevara s preplatom</a></li>
        <li><a href="otp-interception.html" data-sr="Presretanje OTP koda" data-en="OTP interception">Presretanje OTP koda</a></li>
        <li><a href="phishing.html" data-sr="Fišing" data-en="Fišing">Fišing</a></li>
        <li><a href="smishing.html" data-sr="Smišing" data-en="Smishing">Smišing</a></li>
      </ul>
    </section>
  `
};
