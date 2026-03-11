window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["synthetic-identity-fraud"] = {
  raw_html: `
    <!-- 1) UVOD -->
    <section class="card">
      <h2 data-sr="Uvod: kako radi sintetička krađa identiteta" data-en="Introduction: how synthetic identity fraud works">
        Uvod: kako radi sintetička krađa identiteta
      </h2>

      <p
        data-sr="Sintetička krađa identiteta razlikuje se od klasične krađe identiteta po tome što prevarant ne krade identitet postojeće osobe u celini — već ga konstruiše od delimično stvarnih i delimično izmišljenih podataka. Tipična kombinacija: stvarni JMBG ili OIB (često od dece ili osoba bez kreditne istorije) uz izmišljeno ime, adresu i datum rođenja. Rezultat je nova, legitimno izgledajuća osoba koja ne postoji u stvarnosti."
        data-en="Synthetic identity fraud differs from classic identity theft in that the fraudster does not steal an existing person's identity in full — instead, they construct one from partially real and partially fabricated data. A typical combination: a real social security or tax identification number (often from children or people with no credit history) paired with a fabricated name, address, and date of birth. The result is a new, legitimately appearing person who does not exist in reality."
      >Sintetička krađa identiteta razlikuje se od klasične krađe identiteta po tome što prevarant ne krade identitet postojeće osobe u celini — već ga konstruiše od delimično stvarnih i delimično izmišljenih podataka. Tipična kombinacija: stvarni JMBG ili OIB (često od dece ili osoba bez kreditne istorije) uz izmišljeno ime, adresu i datum rođenja. Rezultat je nova, legitimno izgledajuća osoba koja ne postoji u stvarnosti.</p>

      <p
        data-sr="Šema se odvija u dugom vremenskom horizontu: prevarant najpre gradi kreditnu istoriju za sintetički identitet kroz male transakcije i uredna plaćanja, a tek kada kreditni limit postane dovoljno visok, izvodi „bust-out" — maksimizuje sve kreditne linije i nestaje“. Finansijska institucija ostaje sa neplaćenim dugom, a prava osoba čiji je JMBG korišćen može godinama da ne sazna da njen identifikacijski broj postoji u nečijem tuđem kreditnom dosijeu."
        data-en="The scheme plays out over a long time horizon: the fraudster first builds a credit history for the synthetic identity through small transactions and regular payments, then when the credit limit becomes high enough, executes a bust-out — maximizing all credit lines and disappearing. The financial institution is left with unpaid debt, and the real person whose SSN was used may not know for years that their identification number exists in someone else's credit file."
      >Šema se odvija u dugom vremenskom horizontu: prevarant najpre gradi kreditnu istoriju za sintetički identitet kroz male transakcije i uredna plaćanja, a tek kada kreditni limit postane dovoljno visok, izvodi „bust-out" — maksimizuje sve kreditne linije i nestaje“. Finansijska institucija ostaje sa neplaćenim dugom, a prava osoba čiji je JMBG korišćen može godinama da ne sazna da njen identifikacijski broj postoji u nečijem tuđem kreditnom dosijeu.</p>

      <div class="callout"
        data-sr="<strong>Model:</strong> prikupljanje stvarnih identifikacijskih fragmenata → kreiranje sintetičke persone → postavljanje inicijalnih kreditnih upita → sporija izgradnja kreditnog profila → eskalacija kreditnih limita → bust-out → nestajanje."
        data-en="<strong>Model:</strong> collecting real identity fragments → creating a synthetic persona → placing initial credit applications → slow credit profile building → escalating credit limits → bust-out → disappearance."
      ><strong>Model:</strong> prikupljanje stvarnih identifikacijskih fragmenata → kreiranje sintetičke persone → postavljanje inicijalnih kreditnih upita → sporija izgradnja kreditnog profila → eskalacija kreditnih limita → bust-out → nestajanje.</div>

      <div class="callout"
        data-sr="<strong>Prag:</strong> sintetički identitet postigne dovoljno visok kreditni limit da bust-out bude profitabilan — tipično $20,000–$200,000+ u ukupnim kreditnim linijama."
        data-en="<strong>Threshold:</strong> the synthetic identity achieves a high enough credit limit for the bust-out to be profitable — typically $20,000–$200,000+ in total credit lines."
      ><strong>Prag:</strong> sintetički identitet postigne dovoljno visok kreditni limit da bust-out bude profitabilan — tipično $20,000–$200,000+ u ukupnim kreditnim linijama.</div>
    </section>

    <!-- 2) KAKO GENERALNO RADI -->
    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika konstruisanja i iskorišćavanja" data-en="How it works: construction and exploitation mechanics">
        Kako generalno radi: mehanika konstruisanja i iskorišćavanja
      </h2>

      <p
        data-sr="Sintetički identitet funkcioniše zato što kreditni sistemi proveravaju konzistentnost podataka, a ne pravo postojanje osobe. Ako JMBG, ime i adresa prolaze tehničke provere, sistem prihvata aplikanta. Prevarant eksploatiše ovu ranjivost tako što gradi konzistentnu, ali izmišljenu istoriju. Banke i kreditne institucije su primarne žrtve — oni isplaćuju kredite osobi koja ne postoji."
        data-en="A synthetic identity works because credit systems check data consistency, not the actual existence of a person. If the SSN, name, and address pass technical checks, the system accepts the applicant. The fraudster exploits this vulnerability by building a consistent but fabricated history. Banks and credit institutions are the primary victims — they pay out loans to a person who does not exist."
      >Sintetički identitet funkcioniše zato što kreditni sistemi proveravaju konzistentnost podataka, a ne pravo postojanje osobe. Ako JMBG, ime i adresa prolaze tehničke provere, sistem prihvata aplikanta. Prevarant eksploatiše ovu ranjivost tako što gradi konzistentnu, ali izmišljenu istoriju. Banke i kreditne institucije su primarne žrtve — oni isplaćuju kredite osobi koja ne postoji.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Koji identifikacijski fragmenti se koriste" data-en="Which identity fragments are used">Koji identifikacijski fragmenti se koriste</div>
          <ul class="bullets">
            <li data-sr="JMBG dece (koja nemaju kreditnu istoriju i roditelji retko proveravaju)." data-en="children's SSNs (which have no credit history and parents rarely check).">JMBG dece (koja nemaju kreditnu istoriju i roditelji retko proveravaju).</li>
            <li data-sr="JMBG starijih osoba koje ne prate kreditni dosije aktivno." data-en="SSNs of elderly persons who do not actively monitor their credit file.">JMBG starijih osoba koje ne prate kreditni dosije aktivno.</li>
            <li data-sr="JMBG imigranata ili osoba bez kreditne istorije u sistemu." data-en="SSNs of immigrants or persons without credit history in the system.">JMBG imigranata ili osoba bez kreditne istorije u sistemu.</li>
            <li data-sr="izmišljeni JMBG koji slučajno prolaze algoritamske provere sume." data-en="fabricated SSNs that happen to pass algorithmic checksum verification.">izmišljeni JMBG koji slučajno prolaze algoritamske provere sume.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Kako se gradi kreditni profil" data-en="How the credit profile is built">Kako se gradi kreditni profil</div>
          <ul class="bullets">
            <li data-sr="otvaranje secured credit kartice sa malim depozitom kao temeljem." data-en="opening a secured credit card with a small deposit as a foundation.">otvaranje secured credit kartice sa malim depozitom kao temeljem.</li>
            <li data-sr="redovna, uredna plaćanja tokom 6–18 meseci radi izgradnje skora." data-en="regular, on-time payments over 6–18 months to build the credit score.">redovna, uredna plaćanja tokom 6–18 meseci radi izgradnje skora.</li>
            <li data-sr="postavljanje kao authorized user na tuđim kreditnim karticama (piggybacking)." data-en="being added as an authorized user on others' credit cards (piggybacking).">postavljanje kao authorized user na tuđim kreditnim karticama (piggybacking).</li>
            <li data-sr="postupno povećanje kreditnih limita kroz demonstriranu istoriju plaćanja." data-en="gradual credit limit increases through demonstrated payment history.">postupno povećanje kreditnih limita kroz demonstriranu istoriju plaćanja.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 3) HRONOLOŠKI TOK -->
    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)." data-en="Timeline (phases + evolutions).">
        Hronološki tok (faze + evolucije)
      </h2>

      <p class="muted"
        data-sr="Faze su prikazane kao operativni tok: šta prevarant radi u svakoj fazi, šta institucije vide, koji su signali detekcije i gde se tok grana."
        data-en="Phases are shown as an operational flow: what the fraudster does in each phase, what institutions see, what detection signals exist, and where the flow branches."
      >Faze su prikazane kao operativni tok: šta prevarant radi u svakoj fazi, šta institucije vide, koji su signali detekcije i gde se tok grana.</p>

      <!-- FAZA 1 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Kreiranje sintetičke persone" data-en="Phase 1 — Creating the synthetic persona">
          Faza 1 — Kreiranje sintetičke persone
        </h3>

        <p
          data-sr="Prevarant kombinuje stvarni JMBG sa izmišljenim imenom, adresom i kontakt podacima. Ova kombinacija prolazi inicijalne provere jer JMBG postoji u sistemu, ali nema pridruženu kreditnu istoriju — što sistem tumači kao osobu bez iskustva, a ne kao prevaru."
          data-en="The fraudster combines a real SSN with a fabricated name, address, and contact information. This combination passes initial checks because the SSN exists in the system but has no associated credit history — which the system interprets as a person without experience, not as fraud."
        >Prevarant kombinuje stvarni JMBG sa izmišljenim imenom, adresom i kontakt podacima. Ova kombinacija prolazi inicijalne provere jer JMBG postoji u sistemu, ali nema pridruženu kreditnu istoriju — što sistem tumači kao osobu bez iskustva, a ne kao prevaru.</p>

        <ul class="bullets">
          <li data-sr="sintetički identitet ima konzistentne podatke koji prolaze algoritamske provere." data-en="synthetic identity has consistent data that passes algorithmic checks.">sintetički identitet ima konzistentne podatke koji prolaze algoritamske provere.</li>
          <li data-sr="početni kreditni upiti se odbijaju jer nema kreditne istorije — to je normalan ishod." data-en="initial credit applications are rejected because there is no credit history — this is a normal outcome.">početni kreditni upiti se odbijaju jer nema kreditne istorije — to je normalan ishod.</li>
          <li data-sr="samo odbijanje kreditne aplikacije ne aktivira alarm — dešava se milionima legitimnih aplikanata." data-en="a simple credit application rejection does not trigger an alarm — it happens to millions of legitimate applicants.">samo odbijanje kreditne aplikacije ne aktivira alarm — dešava se milionima legitimnih aplikanata.</li>
        </ul>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> sintetički identitet je registrovan u kreditnom sistemu, bez obzira na odbijanja — sama registracija gradi temelj za naredne faze."
          data-en="<strong>Threshold:</strong> the synthetic identity is registered in the credit system, regardless of rejections — the registration itself builds the foundation for subsequent phases."
        ><strong>Prag faze:</strong> sintetički identitet je registrovan u kreditnom sistemu, bez obzira na odbijanja — sama registracija gradi temelj za naredne faze.</div>
      </article>

      <!-- FAZA 2 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Izgradnja kreditnog profila" data-en="Phase 2 — Credit profile building">
          Faza 2 — Izgradnja kreditnog profila
        </h3>

        <p
          data-sr="Prevarant otvara secured kreditnu karticu ili sličan proizvod sa malim depozitom, a zatim godinama gradi uredan platni record. Ova faza može trajati 12–24 meseca. Cilj je podizanje kreditnog skora do nivoa koji omogućava pristup nezaštićenim kreditnim linijama sa visokim limitima."
          data-en="The fraudster opens a secured credit card or similar product with a small deposit, then builds a clean payment record over months or years. This phase can last 12–24 months. The goal is raising the credit score to a level that allows access to unsecured credit lines with high limits."
        >Prevarant otvara secured kreditnu karticu ili sličan proizvod sa malim depozitom, a zatim godinama gradi uredan platni record. Ova faza može trajati 12–24 meseca. Cilj je podizanje kreditnog skora do nivoa koji omogućava pristup nezaštićenim kreditnim linijama sa visokim limitima.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Šta prevarant radi" data-en="What the fraudster does">Šta prevarant radi</div>
            <ul class="bullets">
              <li data-sr="redovna, uredna plaćanja bez kašnjenja tokom dugog perioda." data-en="regular, on-time payments without delays over an extended period.">redovna, uredna plaćanja bez kašnjenja tokom dugog perioda.</li>
              <li data-sr="postavljanje kao authorized user kod „kreditnih farmera." (piggybacking)." data-en="being added as authorized user by credit farmers (piggybacking).">postavljanje kao authorized user kod „kreditnih farmera" (piggybacking)“.</li>
              <li data-sr="otvaranje novih kreditnih linija kako skor raste." data-en="opening new credit lines as the score grows.">otvaranje novih kreditnih linija kako skor raste.</li>
              <li data-sr="korišćenje adrese sa prihvativim kreditnim profilom za verifikaciju." data-en="using an address with an acceptable credit profile for verification.">korišćenje adrese sa prihvativim kreditnim profilom za verifikaciju.</li>
            </ul>
          </div>

          <div class="phase">
            <div class="label" data-sr="Šta institucije vide" data-en="What institutions see">Šta institucije vide</div>
            <ul class="bullets">
              <li data-sr="novi klijent bez kreditne istorije koji postepeno gradi pouzdanost." data-en="a new client without credit history who gradually builds reliability.">novi klijent bez kreditne istorije koji postepeno gradi pouzdanost.</li>
              <li data-sr="uredna plaćanja bez ikakvog negativa u dosijeu." data-en="on-time payments without any negative marks in the file.">uredna plaćanja bez ikakvog negativa u dosijeu.</li>
              <li data-sr="postepeno povećanje kreditnih limitiranja u skladu sa istorijom." data-en="gradual credit limit increases in line with the history.">postepeno povećanje kreditnih limitiranja u skladu sa istorijom.</li>
              <li data-sr="sve izgleda kao standardni profil za finansijsko uključivanje." data-en="everything looks like a standard financial inclusion profile.">sve izgleda kao standardni profil za finansijsko uključivanje.</li>
            </ul>
          </div>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> kreditni skor dostigne nivo koji kvalifikuje za nezaštićene kreditne linije — tipično 680–720 poena u sistemima koji koriste FICO ili slično."
          data-en="<strong>Threshold:</strong> credit score reaches a level qualifying for unsecured credit lines — typically 680–720 points in systems using FICO or similar."
        ><strong>Prag faze:</strong> kreditni skor dostigne nivo koji kvalifikuje za nezaštićene kreditne linije — tipično 680–720 poena u sistemima koji koriste FICO ili slično.</div>
      </article>

      <!-- FAZA 3 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Eskalacija kreditnih limita" data-en="Phase 3 — Credit limit escalation">
          Faza 3 — Credit limit escalation
        </h3>

        <p
          data-sr="Kada je kreditni profil dovoljno jak, prevarant agresivno povećava kreditne limite i otvara nove linije kod više institucija istovremeno. Kreditne kartice sa visokim limitima, lični krediti i kreditne linije se akumuliraju u pripremi za bust-out. Sve se plaća uredno do poslednjeg momenta."
          data-en="Once the credit profile is strong enough, the fraudster aggressively increases credit limits and opens new lines at multiple institutions simultaneously. High-limit credit cards, personal loans, and credit lines accumulate in preparation for the bust-out. Everything is paid on time until the final moment."
        >Kada je kreditni profil dovoljno jak, prevarant agresivno povećava kreditne limite i otvara nove linije kod više institucija istovremeno. Kreditne kartice sa visokim limitima, lični krediti i kreditne linije se akumuliraju u pripremi za bust-out. Sve se plaća uredno do poslednjeg momenta.</p>

        <ul class="bullets">
          <li data-sr="više kreditnih aplikacija u kratkom periodu je slabi signal — može izgledati kao normalno finansijsko planiranje." data-en="multiple credit applications in a short period is a weak signal — can look like normal financial planning.">više kreditnih aplikacija u kratkom periodu je slabi signal — može izgledati kao normalno finansijsko planiranje.</li>
          <li data-sr="ukupna kreditna izloženost raste, ali sve institucije vide samo svoju liniju." data-en="total credit exposure grows, but all institutions see only their own line.">ukupna kreditna izloženost raste, ali sve institucije vide samo svoju liniju.</li>
          <li data-sr="prevarant ostaje uredan platnik do samog bust-outa — nema upozorenja za institucije." data-en="the fraudster remains an on-time payer until the bust-out — no warning signals for institutions.">prevarant ostaje uredan platnik do samog bust-outa — nema upozorenja za institucije.</li>
        </ul>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="impersonation-scam.html" data-sr="Lažno predstavljanje" data-en="Impersonation scam">Lažno predstavljanje</a></li>
            <li><a href="data-breach-extortion.html" data-sr="Ucena nakon krađe podataka" data-en="Data breach extortion">Ucena nakon krađe podataka</a></li>
          </ul>
        </div>
      </article>

      <!-- FAZA 4 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Bust-out" data-en="Phase 4 — Bust-out">
          Faza 4 — Bust-out
        </h3>

        <p
          data-sr="U kratkom vremenskom prozoru (tipično 1–4 nedelje), prevarant iscrpljuje sve dostupne kreditne linije do maksimuma: gotovinski avansi, online kupovine, transferi, kupovina prepaid kartica. Novac se odmah prebacuje kroz više posrednih naloga ili konvertuje u kriptovalute ili fizičku vrednost. Nakon bust-outa, prevarant napušta sintetički identitet."
          data-en="Within a short time window (typically 1–4 weeks), the fraudster exhausts all available credit lines to the maximum: cash advances, online purchases, transfers, prepaid card purchases. Money is immediately moved through multiple intermediary accounts or converted to cryptocurrency or physical value. After the bust-out, the fraudster abandons the synthetic identity."
        >U kratkom vremenskom prozoru (tipično 1–4 nedelje), prevarant iscrpljuje sve dostupne kreditne linije do maksimuma: gotovinski avansi, online kupovine, transferi, kupovina prepaid kartica. Novac se odmah prebacuje kroz više posrednih naloga ili konvertuje u kriptovalute ili fizičku vrednost. Nakon bust-outa, prevarant napušta sintetički identitet.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Šta institucije vide tokom bust-outa" data-en="What institutions see during the bust-out">Šta institucije vide tokom bust-outa</div>
            <ul class="bullets">
              <li data-sr="neobično visoka aktivnost na nalozima koji su ranije bili miran." data-en="unusually high activity on accounts that were previously quiet.">neobično visoka aktivnost na nalozima koji su ranije bili miran.</li>
              <li data-sr="gotovinski avansi i online transferi koji se ne poklapaju sa ranijim profilom." data-en="cash advances and online transfers that do not match the previous profile.">gotovinski avansi i online transferi koji se ne poklapaju sa ranijim profilom.</li>
              <li data-sr="uplata do limita na više kartica u kratkom periodu." data-en="charges up to the limit on multiple cards within a short period.">uplata do limita na više kartica u kratkom periodu.</li>
              <li data-sr="izostanak plaćanja koji počinje mesec-dva posle burst-outa." data-en="payment default that begins one to two months after the bust-out.">izostanak plaćanja koji počinje mesec-dva posle burst-outa.</li>
            </ul>
          </div>

          <div class="phase">
            <div class="label" data-sr="Zašto je detekcija kasna" data-en="Why detection is late">Zašto je detekcija kasna</div>
            <ul class="bullets">
              <li data-sr="svaka institucija vidi samo sopstvenu kreditnu liniju, ne ukupnu izloženost." data-en="each institution sees only its own credit line, not total exposure.">svaka institucija vidi samo sopstvenu kreditnu liniju, ne ukupnu izloženost.</li>
              <li data-sr="bust-out saobraćaj može izgledati kao normalna aktivnost za high-spender profil." data-en="bust-out activity may look like normal activity for a high-spender profile.">bust-out saobraćaj može izgledati kao normalna aktivnost za high-spender profil.</li>
              <li data-sr="nema žrtve koja bi prijavila problem — sintetički identitet ne postoji." data-en="there is no victim to report the problem — the synthetic identity does not exist.">nema žrtve koja bi prijavila problem — sintetički identitet ne postoji.</li>
              <li data-sr="pravi vlasnik JMBG-a može ne otkriti problem godinama." data-en="the real SSN owner may not discover the problem for years.">pravi vlasnik JMBG-a može ne otkriti problem godinama.</li>
            </ul>
          </div>
        </div>
      </article>

      <!-- FAZA 5 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Nestajanje i posledice" data-en="Phase 5 — Disappearance and consequences">
          Faza 5 — Nestajanje i posledice
        </h3>

        <p
          data-sr="Sintetički identitet nestaje. Institucije pokušavaju da naplate dug od osobe koja ne postoji. Pravi vlasnik JMBG-a otkriva problem kada institucija pokuša da ga kontaktira ili kada proverava sopstveni kreditni dosije. Ispravljanje posledica po pravu osobu je složeno jer mora dokazati da nikada nije imala te naloge ili uzimala te kredite."
          data-en="The synthetic identity disappears. Institutions try to collect debt from a person who does not exist. The real SSN owner discovers the problem when the institution tries to contact them or when they check their own credit file. Correcting the consequences for the real person is complex because they must prove they never held those accounts or took those loans."
        >Sintetički identitet nestaje. Institucije pokušavaju da naplate dug od osobe koja ne postoji. Pravi vlasnik JMBG-a otkriva problem kada institucija pokuša da ga kontaktira ili kada proverava sopstveni kreditni dosije. Ispravljanje posledica po pravu osobu je složeno jer mora dokazati da nikada nije imala te naloge ili uzimala te kredite.</p>

        <div class="callout"
          data-sr="<strong>Filter:</strong> sintetička krađa identiteta je prevara čija primarna žrtva su finansijske institucije, ali sekundarna žrtva — pravi vlasnik JMBG-a — nosi dugoročne posledice po kreditni dosije."
          data-en="<strong>Filter:</strong> synthetic identity fraud primarily victimizes financial institutions, but the secondary victim — the real SSN owner — bears long-term credit file consequences."
        ><strong>Filter:</strong> sintetička krađa identiteta je prevara čija primarna žrtva su finansijske institucije, ali sekundarna žrtva — pravi vlasnik JMBG-a — nosi dugoročne posledice po kreditni dosije.</div>
      </article>
    </section>

    <!-- 4) CRVENE ZASTAVICE -->
    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="kreditni dosije vaše dece sadrži unose za naloge ili kredite." data-en="your children's credit files contain entries for accounts or loans.">kreditni dosije vaše dece sadrži unose za naloge ili kredite.</li>
        <li data-sr="kreditni dosije pokazuje dugove ili naloge koje niste otvorili ali JMBG je vaš." data-en="the credit file shows debts or accounts you did not open but the SSN is yours.">kreditni dosije pokazuje dugove ili naloge koje niste otvorili ali JMBG je vaš.</li>
        <li data-sr="institucija vas kontaktira u ime osobe čijim JMBG-om ste identifikovani." data-en="an institution contacts you on behalf of a person identified by your SSN.">institucija vas kontaktira u ime osobe čijim JMBG-om ste identifikovani.</li>
        <li data-sr="porezna uprava javi da je Vaš JMBG već korišćen za poresku prijavu." data-en="the tax authority notifies you that your SSN has already been used for a tax fišing.">porezna uprava javi da je Vaš JMBG već korišćen za poresku prijavu.</li>
        <li data-sr="naplate iz kolekcijskih agencija za dugove koji ne prepoznajete." data-en="collection agency calls about debts you do not recognize.">naplate iz kolekcijskih agencija za dugove koji ne prepoznajete.</li>
        <li data-sr="neočekivano lošiji kreditni skor bez poznate promene u ličnim finansijama." data-en="unexpectedly lower credit score without a known change in personal finances.">neočekivano lošiji kreditni skor bez poznate promene u ličnim finansijama.</li>
        <li data-sr="odmrzavanje kreditnog dosijea otkriva nepoznate naloge vezane za vaš JMBG." data-en="unfreezing the credit file reveals unknown accounts linked to your SSN.">odmrzavanje kreditnog dosijea otkriva nepoznate naloge vezane za vaš JMBG.</li>
      </ul>
    </section>

    <!-- 5) PROVERE -->
    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>

      <p
        data-sr="Sintetička krađa identiteta je teška za otkrivanje jer direktna žrtva (prava osoba čiji je JMBG korišćen) ne vidi problem u svakodnevnom životu sve dok problem ne dospe do kolekcijskog stadijuma. Redovne provere su jedini preventivni alat."
        data-en="Synthetic identity fraud is difficult to detect because the indirect victim (the real person whose SSN was used) does not see the problem in daily life until it reaches the collection stage. Regular checks are the only preventive tool."
      >Sintetička krađa identiteta je teška za otkrivanje jer direktna žrtva (prava osoba čiji je JMBG korišćen) ne vidi problem u svakodnevnom životu sve dok problem ne dospe do kolekcijskog stadijuma. Redovne provere su jedini preventivni alat.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Individualne preventivne provere" data-en="Individual preventive checks">Individualne preventivne provere</div>
          <ul class="bullets">
            <li data-sr="godišnja provera kreditnog dosijea za sve člažne porodice, uključujući decu." data-en="annual credit file check for all family members, including children.">godišnja provera kreditnog dosijea za sve člažne porodice, uključujući decu.</li>
            <li data-sr="credit freeze kod kreditnih biroa za decu koja nemaju kreditnu aktivnost." data-en="credit freeze at credit bureaus for children who have no credit activity.">credit freeze kod kreditnih biroa za decu koja nemaju kreditnu aktivnost.</li>
            <li data-sr="alert koji obaveštava o novim kreditnim upitima pod vašim JMBG-om." data-en="an alert that notifies you about new credit inquiries under your SSN.">alert koji obaveštava o novim kreditnim upitima pod vašim JMBG-om.</li>
            <li data-sr="godišnja provera poreskog statusa: da li je neko podneo prijavu pod vašim JMBG-om." data-en="annual tax status check: whether someone has filed a return under your SSN.">godišnja provera poreskog statusa: da li je neko podneo prijavu pod vašim JMBG-om.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Institucionalni signali za banke" data-en="Institutional signals for banks">Institucionalni signali za banke</div>
          <ul class="bullets">
            <li data-sr="JMBG bez kreditne istorije koji odmah aplicira za visoke kreditne limite." data-en="SSN without credit history immediately applying for high credit limits.">JMBG bez kreditne istorije koji odmah aplicira za visoke kreditne limite.</li>
            <li data-sr="adresa bez verifikabilne istorije ili koja je nedavno promenjena." data-en="an address without a verifiable history or recently changed.">adresa bez verifikabilne istorije ili koja je nedavno promenjena.</li>
            <li data-sr="aplikant ne može da odgovori na verifikaciona pitanja van datuma i adrese." data-en="applicant cannot answer verification questions beyond date and address.">aplikant ne može da odgovori na verifikaciona pitanja van datuma i adrese.</li>
            <li data-sr="brzo eskaliranje kreditnih upita kod više institucija u kratkom periodu." data-en="rapid escalation of credit inquiries at multiple institutions in a short period.">brzo eskaliranje kreditnih upita kod više institucija u kratkom periodu.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 6) CHECKLISTA -->
    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja ako sumnjate da je vaš JMBG deo sintetičkog identiteta" data-en="Checklist: 12 questions if you suspect your SSN is part of a synthetic identity">Checklista: 12 pitanja ako sumnjate da je vaš JMBG deo sintetičkog identiteta</h2>

      <p class="muted"
        data-sr="Sintetička krađa identiteta se može pojaviti godinama nakon krađe JMBG-a. Ovaj blok pomaže u trijaži situacije."
        data-en="Synthetic identity fraud can surface years after an SSN is stolen. This block helps triage the situation."
      >Sintetička krađa identiteta se može pojaviti godinama nakon krađe JMBG-a. Ovaj blok pomaže u trijaži situacije.</p>

      <ul class="bullets">
        <li data-sr="Da li kreditni dosije sadrži naloge ili dugove koje ne prepoznajete?" data-en="Does the credit file contain accounts or debts you do not recognize?">Da li kreditni dosije sadrži naloge ili dugove koje ne prepoznajete?</li>
        <li data-sr="Da li kreditni dosije vaše dece ili starijih člažna porodice sadrži nepoznate unose?" data-en="Do the credit files of your children or elderly family members contain unknown entries?">Da li kreditni dosije vaše dece ili starijih člažna porodice sadrži nepoznate unose?</li>
        <li data-sr="Da li ste ikada bili žrtva curenja podataka ili gubitka ličnih dokumenata?" data-en="Have you ever been affected by a data breach or loss of personal documents?">Da li ste ikada bili žrtva curenja podataka ili gubitka ličnih dokumenata?</li>
        <li data-sr="Da li su kolekcijske agencije kontaktirale vas ili nekog u porodici za nepoznate dugove?" data-en="Have collection agencies contacted you or a family member about unknown debts?">Da li su kolekcijske agencije kontaktirale vas ili nekog u porodici za nepoznate dugove?</li>
        <li data-sr="Da li ste postavili credit freeze za sebe i svoju decu?" data-en="Have you placed a credit freeze for yourself and your children?">Da li ste postavili credit freeze za sebe i svoju decu?</li>
        <li data-sr="Da li je poreska uprava prijavila dupliranje JMBG-a u poreskim prijavama?" data-en="Has the tax authority reported duplication of your SSN in tax filings?">Da li je poreska uprava prijavila dupliranje JMBG-a u poreskim prijavama?</li>
        <li data-sr="Da li znate koje institucije čuvaju vaš JMBG i kako ga štite?" data-en="Do you know which institutions hold your SSN and how they protect it?">Da li znate koje institucije čuvaju vaš JMBG i kako ga štite?</li>
        <li data-sr="Da li pratite kreditni dosije barem jednom godišnje?" data-en="Do you monitor the credit file at least once a year?">Da li pratite kreditni dosije barem jednom godišnje?</li>
        <li data-sr="Da li ste prijavili sumnjivo korišćenje JMBG-a kreditnim biroima i institucijama?" data-en="Have you reported suspected SSN misuse to credit bureaus and institutions?">Da li ste prijavili sumnjivo korišćenje JMBG-a kreditnim biroima i institucijama?</li>
        <li data-sr="Da li je prijavljen incident policiji?" data-en="Has the incident been reported to the police?">Da li je prijavljen incident policiji?</li>
        <li data-sr="Da li ste osporili nepoznate unose u kreditnom dosijeu kod svih kreditnih biroa?" data-en="Have you disputed unknown entries in the credit file at all credit bureaus?">Da li ste osporili nepoznate unose u kreditnom dosijeu kod svih kreditnih biroa?</li>
        <li data-sr="Da li institucija kojoj je dug nastao prihvata dokumentaciju da ste žrtva prevare, a ne dužnik?" data-en="Does the institution where the debt was created accept documentation that you are a fraud victim, not a debtor?">Da li institucija kojoj je dug nastao prihvata dokumentaciju da ste žrtva prevare, a ne dužnik?</li>
      </ul>
    </section>

    <!-- 7) AKO SUMNJA KRENE -->
    <section class="card">
      <h2 data-sr="Ako otkrijete sintetički identitet: redosled poteza" data-en="If you discover synthetic identity use: action order">Ako otkrijete sintetički identitet: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="zatražiti kompletnu kopiju kreditnog dosijea i identifikovati sve nepoznate unose." data-en="request a complete copy of the credit file and identify all unknown entries.">zatražiti kompletnu kopiju kreditnog dosijea i identifikovati sve nepoznate unose.</li>
        <li data-sr="postaviti credit freeze kod svih kreditnih biroa odmah — sprečava nova otvaranja." data-en="place a credit freeze at all credit bureaus immediately — prevents new openings.">postaviti credit freeze kod svih kreditnih biroa odmah — sprečava nova otvaranja.</li>
        <li data-sr="prijaviti incident policiji i FTC-u (ili lokalnom regulatoru) za dokumentaciju." data-en="report the incident to police and the FTC (or local regulator) for documentation.">prijaviti incident policiji i FTC-u (ili lokalnom regulatoru) za dokumentaciju.</li>
        <li data-sr="kontaktirati sve finansijske institucije koje se pojavljuju sa nepoznatim nalozima." data-en="contact all financial institutions that appear with unknown accounts.">kontaktirati sve finansijske institucije koje se pojavljuju sa nepoznatim nalozima.</li>
        <li data-sr="osporiti nepoznate unose kod kreditnih biroa sa priloženom potvrdom policijske prijave." data-en="dispute unknown entries at credit bureaus with the police report confirmation attached.">osporiti nepoznate unose kod kreditnih biroa sa priloženom potvrdom policijske prijave.</li>
        <li data-sr="pratiti dosije mesečno tokom ispravljanja da nove prevare ne nastaju dok je proces aktivan." data-en="monitor the file monthly during remediation so new fraud does not occur while the process is active.">pratiti dosije mesečno tokom ispravljanja da nove prevare ne nastaju dok je proces aktivan.</li>
      </ol>

      <div class="callout"
        data-sr="<strong>Zašto ovaj redosled radi:</strong> credit freeze sprečava novu štetu, policijska prijava daje osnov za sporove, a sistematično osporavanje unosa poništava kreditnu štetu."
        data-en="<strong>Why this order works:</strong> a credit freeze prevents new damage, the police report provides a basis for disputes, and systematic entry disputes reverse credit damage."
      ><strong>Zašto ovaj redosled radi:</strong> credit freeze sprečava novu štetu, policijska prijava daje osnov za sporove, a sistematično osporavanje unosa poništava kreditnu štetu.</div>
    </section>

    <!-- 8) AKO POMAŽEŠ NEKOME -->
    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome ko je otkrio sintetički identitet" data-en="If you are helping someone who has discovered synthetic identity use">Ako pokušavaš da pomogneš nekome ko je otkrio sintetički identitet</h2>

      <p
        data-sr="Sintetička krađa identiteta je zbunjujuća za žrtve jer dug postoji, ali pravi krivac je nepostojeća osoba. Žrtva mora dokazati negativno — da nije imala te naloge, nikada nije uzimala te kredite. Najkorisnije je pomoći im da dokumentuju dokazni materijal i sistematično kontaktiraju institucije."
        data-en="Synthetic identity fraud is confusing for victims because the debt exists, but the real culprit is a nonexistent person. The victim must prove a negative — that they did not hold those accounts, never took those loans. The most useful help is assisting them to document evidence and systematically contact institutions."
      >Sintetička krađa identiteta je zbunjujuća za žrtve jer dug postoji, ali pravi krivac je nepostojeća osoba. Žrtva mora dokazati negativno — da nije imala te naloge, nikada nije uzimala te kredite. Najkorisnije je pomoći im da dokumentuju dokazni materijal i sistematično kontaktiraju institucije.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li imate kopiju kreditnog dosijea sa svim nepoznatim unosima?" data-en="Do you have a copy of the credit file with all unknown entries?">Da li imate kopiju kreditnog dosijea sa svim nepoznatim unosima?</li>
            <li data-sr="Da li ste postavili credit freeze da sprečite dalje otvaranje naloga?" data-en="Have you placed a credit freeze to prevent further account openings?">Da li ste postavili credit freeze da sprečite dalje otvaranje naloga?</li>
            <li data-sr="Da li institucija prihvata da je identitet lažan ili insistira da ste vi dužnik?" data-en="Does the institution accept that the identity is fraudulent or insist you are the debtor?">Da li institucija prihvata da je identitet lažan ili insistira da ste vi dužnik?</li>
            <li data-sr="Da li imate dokumentaciju koja dokazuje da niste bili na adresi koja je korišćena?" data-en="Do you have documentation proving you were not at the address that was used?">Da li imate dokumentaciju koja dokazuje da niste bili na adresi koja je korišćena?</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Policijska prijava je dokumentacija koja instituciji dokazuje da si žrtva, a ne dužnik." data-en="A police report is documentation that proves to the institution you are a victim, not a debtor.">Policijska prijava je dokumentacija koja instituciji dokazuje da si žrtva, a ne dužnik.</li>
            <li data-sr="Credit freeze odmah zatvara kanal za novu štetu dok rešavamo staru." data-en="A credit freeze immediately closes the channel for new damage while we resolve the old.">Credit freeze odmah zatvara kanal za novu štetu dok rešavamo staru.</li>
            <li data-sr="Hajde da napravimo listu svake institucije koja se pojavljuje i sistematično ih kontaktiramo." data-en="Let's make a list of every institution that appears and contact them systematically.">Hajde da napravimo listu svake institucije koja se pojavljuje i sistematično ih kontaktiramo.</li>
            <li data-sr="Svako osporeno i uklonjen unos je korak ka normalizaciji kreditnog dosijea." data-en="Every disputed and removed entry is a step toward normalizing the credit file.">Svako osporeno i uklonjeno unos je korak ka normalizaciji kreditnog dosijea.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 9) IZVORI -->

<section class="content-section">
  <h2 data-sr="Povezane prevare" data-en="Related scams">Povezane prevare</h2>
  <ul class="bullets">
    <li><a href="identity-theft.html" data-sr="Kradja identiteta." data-en="Identity theft.">Kradja identiteta</a></li>
    <li><a href="account-takeover.html" data-sr="Preuzimanje naloga." data-en="Account takeover.">Preuzimanje naloga</a></li>
    <li><a href="phishing.html" data-sr="Fišing." data-en="Phishing.">Fišing</a></li>
    <li><a href="sim-swap.html" data-sr="SIM swap prevara." data-en="SIM swap scam.">SIM swap prevara</a></li>
    <li><a href="loan-scam.html" data-sr="Lažni zajam." data-en="Loan scam.">Lažni zajam</a></li>
  </ul>
</section>

<section class="card sources" id="sources">
      <h2 data-sr="Izvori" data-en="Sources">Izvori</h2>
      <ul>
        <li><a href="https://consumer.ftc.gov/articles/synthetic-identity-fraud" target="_blank" rel="noopener noreferrer">FTC — Synthetic Identity Fraud</a></li>
        <li><a href="https://www.federalreserve.gov/publications/2019-synthetic-identity-fraud-0514.htm" target="_blank" rel="noopener noreferrer">Federal Reserve — Synthetic Identity Fraud in the U.S. Payment System</a></li>
        <li><a href="https://consumer.ftc.gov/features/identity-theft" target="_blank" rel="noopener noreferrer">FTC — IdentityTheft.gov</a></li>
      </ul>
    </section>
  `
};
