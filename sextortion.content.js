window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["sextortion-scam"] = {
  raw_html: `
    <!-- 1) UVOD -->
    <section class="card">
      <h2 data-sr="Uvod: kako radi sextortion" data-en="Introduction: how sextortion works">
        Uvod: kako radi sextortion
      </h2>

      <p
        data-sr="Sextortion koristi strah od javnog izlaganja intimnog sadržaja. Pretnja može biti zasnovana na stvarnom sadržaju (video/slike koje je žrtva podelila) ili na blef-u (masovni imejl koji tvrdi da ima snimak). Zahtev je uvek isti: uplata (obično kripto) ili će sadržaj biti poslan porodici, prijateljima, poslodavcu."
        data-en="Sextortion uses fear of public exposure of intimate content. The threat can be based on real content (video/images the victim shared) or a bluff (mass email claiming to have a recording). The demand is always the same: payment (usually crypto) or content will be sent to family, friends, employer."
      >Sextortion koristi strah od javnog izlaganja intimnog sadržaja. Pretnja može biti zasnovana na stvarnom sadržaju (video/slike koje je žrtva podelila) ili na blef-u (masovni imejl koji tvrdi da ima snimak). Zahtev je uvek isti: uplata (obično kripto) ili će sadržaj biti poslan porodici, prijateljima, poslodavcu.</p>

      <p
        data-sr="Šteta ima dve dimenzije: finansijsku (uplate koje se ponavljaju) i psihološku (strah, sram, anksioznost). Plaćanje nikada ne rešava problem — ucenjivač koji dobije novac zna da ima ranjivog davaoca i nastavlja sa zahtevima. Ovo je jedan od najopasnijih oblika prevare po psihičko zdravlje žrtava."
        data-en="Damage has two dimensions: financial (repeated payments) and psychological (fear, shame, anxiety). Paying never solves the problem — a blackmailer who gets money knows they have a vulnerable payer and continues with demands. This is one of the most dangerous scam forms for victims' mental health."
      >Šteta ima dve dimenzije: finansijsku (uplate koje se ponavljaju) i psihološku (strah, sram, anksioznost). Plaćanje nikada ne rešava problem — ucenjivač koji dobije novac zna da ima ranjivog davaoca i nastavlja sa zahtevima. Ovo je jedan od najopasnijih oblika prevare po psihičko zdravlje žrtava.</p>

      <div class="callout"
        data-sr="<strong>Model:</strong> pretnja (stvarna ili blef) → strah → zahtev za uplatom → prag (prva uplata) → serija novih zahteva → eskalacija."
        data-en="<strong>Model:</strong> threat (real or bluff) → fear → payment demand → threshold (first payment) → series of new demands → escalation.">
      <strong>Model:</strong> pretnja (stvarna ili blef) → strah → zahtev za uplatom → prag (prva uplata) → serija novih zahteva → eskalacija.
    </div>
    </section>

    <!-- 2) TIPOVI SEXTORTION-A -->
    <section class="card">
      <h2 data-sr="Tipovi sextortion pretnji" data-en="Types of sextortion threats">
        Tipovi sextortion pretnji
      </h2>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Romance-based (stvarni sadržaj)" data-en="Romance-based (real content).">Romance-based (stvarni sadržaj)</div>
          <ul class="bullets">
            <li data-sr="žrtva je podelila intimne slike/video tokom online veze." data-en="victim shared intimate images/video during online relationship.">žrtva je podelila intimne slike/video tokom online veze.</li>
            <li data-sr="napadač preti da će ih poslati kontaktima." data-en="attacker threatens to send them to contacts.">napadač preti da će ih poslati kontaktima.</li>
            <li data-sr="često počinje kao romantična prevara." data-en="often starts as romance scam.">često počinje kao romantična prevara.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Blef imejl (nema stvarnog sadržaja)" data-en="Bluff imejl (no real content).">Blef imejl (nema stvarnog sadržaja)</div>
          <ul class="bullets">
            <li data-sr="masovni imejl tvrdi da ima snimak sa web kamere." data-en="mass email claims to have webcam recording.">masovni imejl tvrdi da ima snimak sa web kamere.</li>
            <li data-sr="koristi staru lozinku iz breach-a kao dokaz." data-en="uses an old leaked password as proof">koristi staru lozinku iz breach-a kao dokaz.</li>
            <li data-sr="zahteva uplatu u Bitcoinu." data-en="demands payment in Bitcoin.">zahteva uplatu u Bitcoinu.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Catfishing / honey trap" data-en="Catfishing / honey trap">Catfishing / honey trap</div>
          <ul class="bullets">
            <li data-sr="napadač koristi lažni profil da privuče žrtvu." data-en="attacker uses fake profile to attract victim.">napadač koristi lažni profil da privuče žrtvu.</li>
            <li data-sr="razmena sadržaja tokom veze." data-en="content exchange during an online relationship">razmena sadržaja tokom veze.</li>
            <li data-sr="prelazak u ucenu posle dobijanja materijala." data-en="shift to blackmail after getting material.">prelazak u ucenu posle dobijanja materijala.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Hakovanje / krađa sadržaja" data-en="Hacking / content theft">Hakovanje / krađa sadržaja</div>
          <ul class="bullets">
            <li data-sr="sadržaj ukraden sa uređaja ili cloud-a." data-en="content stolen from device or cloud.">sadržaj ukraden sa uređaja ili cloud-a.</li>
            <li data-sr="prikazuje se screenshot kao dokaz." data-en="screenshot shown as proof.">prikazuje se screenshot kao dokaz.</li>
            <li data-sr="zahtev za uplatom da se sadržaj obriše." data-en="payment demanded for the content to be deleted">zahtev za uplatom da se sadržaj obriše.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 3) HRONOLOŠKI TOK -->
    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)." data-en="Timeline (phases + branching).">
        Hronološki tok (faze + grananja)
      </h2>

      <!-- FAZA 1 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Uspostavljanje kontakta ili blef" data-en="Phase 1 — Establishing contact or bluff">
          Faza 1 — Uspostavljanje kontakta ili blef
        </h3>

        <p
          data-sr="U romance varijanti: napadač gradi vezu, traži intimni sadržaj kao deo veze. U blef varijanti: masovni email stiže sa pretnjom i lozinkom kao dokazom. Kontakt može doći i posle hakovanja ili razmene sadržaja na platformama."
          data-en="In romance variant: attacker builds relationship, requests intimate content as part of the relationship. In bluff variant: mass email arrives with threat and password as proof. Contact may also come after hacking or content exchange on platforms."
        >U romance varijanti: napadač gradi vezu, traži intimni sadržaj kao deo veze. U blef varijanti: masovni imejl stiže sa pretnjom i lozinkom kao dokazom. Kontakt može doći i posle hakovanja ili razmene sadržaja na platformama.</p>

        <div class="branch">
          <p><strong data-sr="Povezano" data-en="Related">Povezano</strong></p>
          <ul class="bullets">
            <li><a href="romantic-scam.html" data-sr="Romantične prevare" data-en="Romance scam">Romantične prevare</a></li>
          </ul>
        </div>
      </article>

      <!-- FAZA 2 -->
      <article class=phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Pretnja: strah od izlaganja" data-en="Phase 2 — Threat: fear of exposure">
          Faza 2 — Pretnja: strah od izlaganja
        </h3>

        <p
          data-sr="Pretnja je eksplicitna: imam tvoje slike/video, poslaću porodici, prijateljima, poslodavcu. Napadač može prikazati screenshot, navesti imena kontakata iz društvenih mreža, ili opisati sadržaj. Cilj je maksimalni strah i osećaj da nema izlaza."
          data-en="The threat is explicit: I have your pictures/video, I'll send to family, friends, employer. The attacker may show a screenshot, list contact names from social media, or describe the content. The goal is maximum fear and a feeling that there's no way out."
        >Pretnja je eksplicitna: imam tvoje slike/video, poslaću porodici, prijateljima, poslodavcu. Napadač može prikazati screenshot, navesti imena kontakata iz društvenih mreža, ili opisati sadržaj. Cilj je maksimalni strah i osećaj da nema izlaza.</p>

        <ul class="bullets">
          <li data-sr="znam ko su ti prijatelji na Facebooku." data-en="I know who your Facebook friends are.">znam ko su ti prijatelji na Facebooku.</li>
          <li data-sr="poslaću video tvom šefu." data-en="I'll send the video to your boss.">poslaću video tvom šefu.</li>
          <li data-sr="imaš 24 sata da platiš." data-en="You have 24 hours to pay.">imaš 24 sata da platiš.</li>
        </ul>
      </article>

      <!-- FAZA 3 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Zahtev: kripto ili transfer" data-en="Phase 3 — Demand: crypto or transfer">
          Faza 3 — Zahtev: kripto ili transfer
        </h3>

        <p
        data-sr="Zahtev je za određeni iznos, obično u kripto valuti (teško pratljivo). Iznosi variraju: 200–5000+ EUR. Rok je kratak. Poruka sugeriše da će uplata rešiti problem i da će se sadržaj obrisati."
          data-en="The demand is for a specific amount, usually in cryptocurrency (hard to traže). Amounts vary: €200–5000+. Deadline is short. The message suggests payment will solve the problem and content will be deleted."
        >Zahtev je za određeni iznos, obično u kripto valuti (teško pratljivo). Iznosi variraju: 200–5000+ EUR. Rok je kratak. Poruka sugeriše da će uplata rešiti problem i da će se sadržaj obrisati.</p>
      </article>

      <!-- FAZA 4 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Prag: prva uplata" data-en="Phase 4 — Threshold: first payment">
          Faza 4 — Prag: prva uplata
        </h3>

        <p
          data-sr="Ako žrtva plati, napadač zna da ima nekoga ko reaguje na pritisak. Ovo je prag: posle prve uplate slede nove pretnje i novi zahtevi. Uplata ne rešava problem — pogoršava poziciju žrtve."
          data-en="If the victim pays, the attacker knows they have someone who responds to pressure. This is the threshold: after the first payment, new threats and demands follow. Payment doesn't solve the problem — it worsens the victim's position."
        >Ako žrtva plati, napadač zna da ima nekoga ko reaguje na pritisak. Ovo je prag: posle prve uplate slede nove pretnje i novi zahtevi. Uplata ne rešava problem — pogoršava poziciju žrtve.</p>

        <div class="callout"
          data-sr="<strong>Prag:</strong> prva uplata. Posle praga napadač nastavlja sa zahtevima."
          data-en="<strong>Threshold:</strong> first payment. After the threshold, attacker continues with demands."
        ><strong>Prag:</strong> prva uplata. Posle praga napadač nastavlja sa zahtevima.</div>
      </article>

      <!-- FAZA 5 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Serija novih zahteva" data-en="Phase 5 — Series of new demands">
          Faza 5 — Serija novih zahteva
        </h3>

        <p
          data-sr="Napadač se vraća: veći iznos, novi rok, nove pretnje. Uplatio si 500, ali trebaš mi 1000 za konačno brisanje. Ciklus se ponavlja dok žrtva ima resurse ili dok ne prekine kontakt."
          data-en="The attacker returns: higher amount, new deadline, new threats. You paid 500, but I need 1000 for final deletion. The cycle repeats while the victim has resources or until they break contact."
        >Napadač se vraća: veći iznos, novi rok, nove pretnje. Uplatio si 500, ali trebaš mi 1000 za konačno brisanje. Ciklus se ponavlja dok žrtva ima resurse ili dok ne prekine kontakt.</p>
      </article>
    </section>

    <!-- 4) BLEF EMAIL: KAKO PREPOZNATI -->
    <section class="card">
      <h2 data-sr="Blef imejl: kako prepoznati" data-en="Bluff email: how to recognize">
        Blef imejl: kako prepoznati
      </h2>

      <p
        data-sr="Masovni sextortion emailovi su blef — napadač nema stvarni sadržaj. Koristi lozinku iz starog breach-a da izgleda uverljivo. Isti imejl ide na hiljade adresa."
        data-en="Mass sextortion emails are bluffs — the attacker has no real content. They use a password from an old breach to look convincing. The same email goes to thousands of addresses."
      >Masovni sextortion emailovi su blef — napadač nema stvarni sadržaj. Koristi lozinku iz starog breach-a da izgleda uverljivo. Isti imejl ide na hiljade adresa.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Znaci blefa" data-en="Bluff signs">Znaci blefa</div>
          <ul class="bullets">
            <li data-sr="generička poruka bez specifičnih detalja." data-en="generic message without specific details.">generička poruka bez specifičnih detalja.</li>
            <li data-sr="lozinka je stara (iz breach-a od pre godina)." data-en="password is old (from breach years ago).">lozinka je stara (iz breach-a od pre godina).</li>
            <li data-sr="nema priloženog screenshota ili snimka." data-en="no attached screenshot or recording.">nema priloženog screenshota ili snimka.</li>
            <li data-sr="isti tekst se pojavljuje na forumima o prevarama." data-en="same text appears on scam forums.">isti tekst se pojavljuje na forumima o prevarama.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Šta uraditi" data-en="What to do">Šta uraditi</div>
          <ul class="bullets">
            <li data-sr="promeni lozinku ako je još u upotrebi." data-en="change password if still in use.">promeni lozinku ako je još u upotrebi.</li>
            <li data-sr="ignoriši imejl — nema stvarnog sadržaja." data-en="ignore email — there's no real content.">ignoriši imejl — nema stvarnog sadržaja.</li>
            <li data-sr="označi kao spam." data-en="mark as spam.">označi kao spam.</li>
          </ul>
        </div>
      </div>

      <div class="callout"
        data-sr="<strong>Test:</strong> ako imejl ne sadrži specifičan opis sadržaja ili screenshot — verovatno je blef."
        data-en="<strong>Test:</strong> if email doesn't contain specific content description or screenshot — it's likely a bluff."
      ><strong>Test:</strong> ako email ne sadrži specifičan opis sadržaja ili screenshot — verovatno je blef.</div>
    </section>

    <!-- 5) STANDARDNA UPOZORENJA -->
    <section class="card">
      <h2 data-sr="Standardna upozorenja" data-en="Standard warnings">Standardna upozorenja</h2>

      <ul class="bullets">
        <li data-sr="plaćanje ne rešava problem — ucenjivač nastavlja sa zahtevima." data-en="paying doesn't solve the problem — blackmailer continues with demands.">plaćanje ne rešava problem — ucenjivač nastavlja sa zahtevima.</li>
        <li data-sr="masovni emailovi sa lozinkom su blef — ignoriši ih." data-en="mass emails with password are bluffs — ignore them.">masovni emailovi sa lozinkom su blef — ignoriši ih.</li>
        <li data-sr="prekini svaki kontakt sa ucenjivačem." data-en="stop all contact with blackmailer.">prekini svaki kontakt sa ucenjivačem.</li>
        <li data-sr="prijavi platformi ako je kontakt bio preko društvene mreže." data-en="report to platform if contact was via social media.">prijavi platformi ako je kontakt bio preko društvene mreže.</li>
        <li data-sr="razmisli o prijavi policiji — ucena je krivično delo." data-en="consider reporting to police — blackmail is a criminal offense.">razmisli o prijavi policiji — ucena je krivično delo.</li>
      </ul>

      <div class="callout"
        data-sr="<strong>Osnovno pravilo:</strong> ne plaćaj. Plaćanje pogoršava situaciju."
        data-en="<strong>Basic rule:</strong> don't pay. Paying makes the situation worse."
      ><strong>Osnovno pravilo:</strong> ne plaćaj. Plaćanje pogoršava situaciju.</div>
    </section>

    <!-- 6) AKO JE ŠTETA NASTALA -->
    <section class="card">
      <h2 data-sr="Ako je šteta nastala (redosled poteza)." data-en="If damage happened (action order).">
        Ako je šteta nastala (redosled poteza)
      </h2>

      <ol class="steps">
        <li data-sr="prekini kontakt — ne odgovaraj na nove poruke." data-en="stop contact — don't respond to new messages.">prekini kontakt — ne odgovaraj na nove poruke.</li>
        <li data-sr="sačuvaj dokaze: poruke, pretnje, adrese za uplatu." data-en="save evidence: messages, threats, payment addresses.">sačuvaj dokaze: poruke, pretnje, adrese za uplatu.</li>
        <li data-sr="prijavi nalog na platformi (Facebook, Instagram, Telegram)." data-en="report account on platform (Facebook, Instagram, Telegram).">prijavi nalog na platformi (Facebook, Instagram, Telegram).</li>
        <li data-sr="razmisli o prijavi policiji — ucena je krivično delo." data-en="consider reporting to police — blackmail is a criminal offense.">razmisli o prijavi policiji — ucena je krivično delo.</li>
        <li data-sr="potraži podršku — ovo je psihički teška situacija." data-en="seek support — this is a psychologically difficult situation.">potraži podršku — ovo je psihički teška situacija.</li>
      </ol>

      <div class="callout"
        data-sr="<strong>Važno:</strong> u većini slučajeva sadržaj se nikada ne objavljuje — napadaču je cilj novac, ne distribucija."
        data-en="<strong>Important:</strong> in most cases, content is never published — the attacker's goal is money, not distribution."
      ><strong>Važno:</strong> u većini slučajeva sadržaj se nikada ne objavljuje — napadaču je cilj novac, ne distribucija.</div>
    </section>


    <!-- 7) STATISTIKE I EKONOMIJA SEXTORTION PREVARA -->
    <section class="card">
      <h2 data-sr="Statistike i ekonomija sextortion prevara" data-en="Sextortion scam statistics and economics">
        Statistike i ekonomija sextortion prevara
      </h2>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="FBI IC3 + Thorn data (2023)" data-en="FBI IC3 + Thorn data (2023).">FBI IC3 + Thorn data (2023)</div>
          <ul class="bullets">
            <li data-sr="IC3 2023: Extortion 48,223 prijava, $74.8M gubitak (uključuje sextortion)." data-en="IC3 2023: Extortion 48,223 reports, $74.8M loss (includes sextortion).">IC3 2023: Extortion 48,223 prijava, $74.8M gubitak (uključuje sextortion).</li>
            <li data-sr="prosečan gubitak po žrtvi: $4,800 (median: $1,200)." data-en="average loss per victim: $4,800 (median: $1,200).">prosečan gubitak po žrtvi: $4,800 (median: $1,200).</li>
            <li data-sr="broj prijavljenih slučajeva 2023: ~36,000 (actual 10-20x više - neprijavljivanje due to shame)." data-en="reported cases 2023: ~36,000 (actual 10-20x higher - neprijavljivanje due to shame).">broj prijavljenih slučajeva 2023: ~36,000 (actual 10-20x više - neprijavljivanje due to shame).</li>
            <li data-sr="neprijavljivanje rate: 90-95% (najviši od svih scam tipova)." data-en="neprijavljivanje rate: 90-95% (highest of all scam types).">neprijavljivanje rate: 90-95% (najviši od svih scam tipova).</li>
            <li data-sr="rast 2019-2023: 475% porast (eksponencijalni sa social media + dating apps)." data-en="growth 2019-2023: 475% increase (exponential with social media + dating apps).">rast 2019-2023: 475% porast (eksponencijalni sa social media + dating apps).</li>
            <li data-sr="Teške mentalne krize povezane sa sextortion (dokumentovani slučajevi, USA 2020–2023)." data-en="Severe mental health crises linked to sextortion (documented cases, USA 2020–2023).">Teške mentalne krize povezane sa sextortion (dokumentovani slučajevi, USA 2020–2023).</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Demografija (ko je najranjiviji)" data-en="Demographics (most vulnerable).">Demografija (ko je najranjiviji)</div>
          <ul class="bullets">
            <li data-sr="starost 15-25: 58% žrtava (highest social media usage)." data-en="age 15-25: 58% of victims (highest social media usage).">starost 15-25: 58% žrtava (highest social media usage).</li>
            <li data-sr="MINORS (13-17): 35% svih sextortion žrtava (EKSTREMNO ranjivi)." data-en="MINORS (13-17): 35% of all sextortion victims (EXTREMELY vulnerable).">MINORS (13-17): 35% svih sextortion žrtava (EKSTREMNO ranjivi).</li>
            <li data-sr="gender split: 68% muški, 32% ženski (romance/catfishing targeting)." data-en="gender split: 68% male, 32% female (romance/catfishing targeting).">gender split: 68% muški, 32% ženski (romance/catfishing targeting).</li>
            <li data-sr="LGBTQ+ community: 2x higher victimization rate (fear of outing)." data-en="LGBTQ+ community: 2x higher victimization rate (fear of outing).">LGBTQ+ community: 2x higher victimization rate (fear of outing).</li>
            <li data-sr="prosečan gubitak minors: $1,800 (lower, ali EXTREM psychological damage)." data-en="average loss minors: $1,800 (lower, but EXTREME psychological damage).">prosečan gubitak minors: $1,800 (lower, ali EXTREM psychological damage).</li>
            <li data-sr="geografija: USA (40%), UK (15%), Canada (10%), Australia (8%), EU (18%)." data-en="geography: USA (40%), UK (15%), Canada (10%), Australia (8%), EU (18%).">geografija: USA (40%), UK (15%), Canada (10%), Australia (8%), EU (18%).</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Sextortion type distribution" data-en="Sextortion type distribution">Sextortion type distribution</div>
          <ul class="bullets">
            <li data-sr="bluff imejl (nema stvarnog sadržaja): 52% (mass volume, low effort)." data-en="bluff email (no real content): 52% (mass volume, low effort).">bluff imejl (nema stvarnog sadržaja): 52% (mass volume, low effort).</li>
            <li data-sr="romance/catfishing (stvarni sadržaj): 28% (targeted, high damage)." data-en="romance/catfishing (real content): 28% (targeted, high damage).">romance/catfishing (stvarni sadržaj): 28% (targeted, high damage).</li>
            <li data-sr="hacking/zlonamerni program (webcam access): 12% (technical attack)." data-en="hacking/virus (webcam access): 12% (technical attack).">hacking/zlonamerni program (webcam access): 12% (technical attack).</li>
            <li data-sr="AI deepfake (fake content): 5% (RAPIDLY GROWING - emerging threat)." data-en="AI deepfake (fake content): 5% (RAPIDLY GROWING - emerging threat).">AI deepfake (fake content): 5% (RAPIDLY GROWING - emerging threat).</li>
            <li data-sr="stolen cloud/device content: 3%" data-en="stolen cloud/device content: 3%">stolen cloud/device content: 3%</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Operativna ekonomija" data-en="Operational economics">Operativna ekonomija</div>
          <ul class="bullets">
            <li data-sr="bluff imejl cost: $0.001 per imejl (mass campaign)." data-en="bluff email cost: $0.001 per email (mass campaign).">bluff imejl cost: $0.001 per imejl (mass campaign).</li>
            <li data-sr="breach password lists: $50-500 za 1M emails+passwords (adds credibility)." data-en="breach password lists: $50-500 for 1M emails+passwords (adds credibility).">breach password lists: $50-500 za 1M emails+passwords (adds credibility).</li>
            <li data-sr="uspešnost prevare (bluff): 0.1-0.5% (ali HUGE volume)." data-en="uspešnost prevare (bluff): 0.1-0.5% (but HUGE volume).">uspešnost prevare (bluff): 0.1-0.5% (ali HUGE volume).</li>
            <li data-sr="uspešnost prevare (real content): 40-60% (extreme fear)." data-en="uspešnost prevare (real content): 40-60% (extreme fear).">uspešnost prevare (real content): 40-60% (extreme fear).</li>
            <li data-sr="average payment: $500-2,000 (crypto, untraceable)." data-en="average payment: $500-2,000 (crypto, untraceable).">average payment: $500-2,000 (crypto, untraceable).</li>
            <li data-sr="repeat payments: 2-5x (ucenjivač traži još posle prve uplate)." data-en="repeat payments: 2-5x (blackmailer asks for more after first payment).">repeat payments: 2-5x (ucenjivač traži još posle prve uplate).</li>
          </ul>
        </div>
      </div>

      <div class="callout"
        data-sr="<strong>Ekonomski profil:</strong> Bluff imejl sextortion košta $1,000 za slanje 1M emailova. Sa 0.1% uspešnost prevare i $1,000 avg payment = 1,000 žrtava × $1,000 = $1M profit. ROI = 100,000%. Real content sextortion ima 40-60% conversion (ekstremni strah), ali zahteva targeting. Underreporting rate 90-95% = scammers imaju LOW risk of arrest."
        data-en="<strong>Economic profile:</strong> Bluff email sextortion costs $1,000 to send 1M emails. With 0.1% uspešnost prevare and $1,000 avg payment = 1,000 victims × $1,000 = $1M profit. ROI = 100,000%. Real content sextortion has 40-60% conversion (extreme fear), but requires targeting. Underreporting rate 90-95% = scammers have LOW risk of arrest."
      ><strong>Ekonomski profil:</strong> Bluff email sextortion košta $1,000 za slanje 1M emailova. Sa 0.1% uspešnost prevare i $1,000 avg payment = 1,000 žrtava × $1,000 = $1M profit. ROI = 100,000%. Real content sextortion ima 40-60% conversion (ekstremni strah), ali zahteva targeting. Underreporting rate 90-95% = scammers imaju LOW risk of arrest.</div>
    </section>

    <!-- 8) AI DEEPFAKE SEXTORTION: NOVA PRETNJA -->
    <section class="card">
      <h2 data-sr="AI deepfake sextortion: nova pretnja bez stvarnog sadržaja" data-en="AI deepfake sextortion: new threat without real content">
        AI deepfake sextortion: nova pretnja bez stvarnog sadržaja
      </h2>

      <p
        data-sr="AI deepfake tools (Midjourney, Stable Diffusion, DeepNude-style apps) omogućavaju kreiranje REALISTIČNIH lažnih intimnih slika/videa BEZ ikakvog stvarnog sadržaja. Scammer uzima normalne fotografije sa social media i kreira deepfake intimate content. Žrtva NE MOŽE da razlikuje fake od real. Ovo je NOVA i BRZO RASTUĆA pretnja."
        data-en="AI deepfake tools (Midjourney, Stable Diffusion, DeepNude-style apps) enable creating REALISTIC fake intimate images/videos WITHOUT any real content. Scammer takes normal photos from social media and creates deepfake intimate content. Victim CANNOT distinguish fake from real. This is NEW and RAPIDLY GROWING threat."
      >AI deepfake tools (Midjourney, Stable Diffusion, DeepNude-style apps) omogućavaju kreiranje REALISTIČNIH lažnih intimnih slika/videa BEZ ikakvog stvarnog sadržaja. Scammer uzima normalne fotografije sa social media i kreira deepfake intimate content. Žrtva NE MOŽE da razlikuje fake od real. Ovo je NOVA i BRZO RASTUĆA pretnja.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Kako AI deepfake sextortion radi" data-en="How AI deepfake sextortion works">Kako AI deepfake sextortion radi</div>
          <ul class="bullets">
            <li data-sr="scammer prikuplja JAVNE fotografije sa Instagram/Facebook/LinkedIn." data-en="scammer collects PUBLIC photos from Instagram/Facebook/LinkedIn.">scammer prikuplja JAVNE fotografije sa Instagram/Facebook/LinkedIn.</li>
            <li data-sr="AI tool (DeepNude-style app) generiše FAKE intimne slike sa žrtvinim licem." data-en="AI tool (DeepNude-style app) generates FAKE intimate images with victim's face.">AI tool (DeepNude-style app) generiše FAKE intimne slike sa žrtvinim licem.</li>
            <li data-sr="rezultat: REALISTIČNA slika koja izgleda kao da je STVARNA." data-en="result: REALISTIC image that looks like it's REAL.">rezultat: REALISTIČNA slika koja izgleda kao da je STVARNA.</li>
            <li data-sr="scammer šalje screenshot žrtvi: imam ovo, plati ili šaljem svima" data-en="scammer sends screenshot to victim: I have this, pay or I send to everyone">scammer šalje screenshot žrtvi: imam ovo, plati ili šaljem svima</li>
            <li data-sr="žrtva VERUJE da je slika stvarna (jer izgleda kao njihovo lice)." data-en="victim BELIEVES image is real (because it looks like their face).">žrtva VERUJE da je slika stvarna (jer izgleda kao njihovo lice).</li>
            <li data-sr="cost: $0-50 per deepfake (tools su FREE ili cheap)." data-en="cost: $0-50 per deepfake (tools are FREE or cheap).">cost: $0-50 per deepfake (tools su FREE ili cheap).</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Zašto je ovo EKSTREMNO OPASNO" data-en="Why this is EXTREMELY DANGEROUS">Zašto je ovo EKSTREMNO OPASNO</div>
          <ul class="bullets">
            <li data-sr="žrtva NE MORA da je podelila ikakav intiman sadržaj = BILO KO može biti meta." data-en="victim DOESN'T HAVE TO have shared any intimate content = ANYONE can be target.">žrtva NE MORA da je podelila ikakav intiman sadržaj = BILO KO može biti meta.</li>
            <li data-sr="javne fotografije SA BILO KOJE social media = dovoljan input za AI." data-en="public photos FROM ANY social media = sufficient input for AI.">javne fotografije SA BILO KOJE social media = dovoljan input za AI.</li>
            <li data-sr="deepfake je NERAZLUČIV od real content za većinu ljudi." data-en="deepfake is INDISTINGUISHABLE from real content for most people.">deepfake je NERAZLUČIV od real content za većinu ljudi.</li>
            <li data-sr="denial ne radi jer slika STVARNO izgleda kao žrtva." data-en="denial doesn't work because image REALLY looks like victim.">denial ne radi jer slika STVARNO izgleda kao žrtva.</li>
            <li data-sr="targeting je LAKO: celebs, influencers, politicians, običan ljudi = SVI ranjivi." data-en="targeting is EASY: celebs, influencers, politicians, regular people = ALL vulnerable.">targeting je LAKO: celebs, influencers, politicians, običan ljudi = SVI ranjivi.</li>
            <li data-sr="rast 2022-2024: 500% porast AI deepfake sextortion (novi AI tools)." data-en="growth 2022-2024: 500% increase in AI deepfake sextortion (new AI tools).">rast 2022-2024: 500% porast AI deepfake sextortion (novi AI tools).</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Kako se zaštititi od AI deepfake sextortion" data-en="How to protect from AI deepfake sextortion">Kako se zaštititi od AI deepfake sextortion</div>
          <ul class="bullets">
            <li data-sr="<strong>Limit public photos:</strong> postavi social media profile na PRIVATE." data-en="<strong>Limit public photos:</strong> set social media profiles to PRIVATE."><strong>Limit public photos:</strong> postavi social media profile na PRIVATE.</li>
            <li data-sr="<strong>Watermark strategy:</strong> neki ljudi dodaju watermark na face photos (preventivno)." data-en="<strong>Watermark strategy:</strong> some people add watermark on face photos (preventive)."><strong>Watermark strategy:</strong> neki ljudi dodaju watermark na face photos (preventivno).</li>
            <li data-sr="<strong>Ako dobiješ pretnju:</strong> ZNAJ da može biti FAKE (AI generated)." data-en="<strong>If you receive threat:</strong> KNOW it may be FAKE (AI generated)."><strong>Ako dobiješ pretnju:</strong> ZNAJ da može biti FAKE (AI generated).</li>
            <li data-sr="<strong>NE PLAĆAJ:</strong> čak i ako slika izgleda real, to NE ZNAČI da je stvarna." data-en="<strong>DON'T PAY:</strong> even if image looks real, that DOESN'T MEAN it's actual."><strong>NE PLAĆAJ:</strong> čak i ako slika izgleda real, to NE ZNAČI da je stvarna.</li>
            <li data-sr="<strong>Report to platform:</strong> prijavi nalog scammer-a na social media." data-en="<strong>Report to platform:</strong> report scammer's account on social media."><strong>Report to platform:</strong> prijavi nalog scammer-a na social media.</li>
            <li data-sr="<strong>Legal action:</strong> AI deepfake sextortion je KRIVIČNO DELO u većini zemalja." data-en="<strong>Legal action:</strong> AI deepfake sextortion is CRIMINAL OFFENSE in most countries."><strong>Legal action:</strong> AI deepfake sextortion je KRIVIČNO DELO u većini zemalja.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Znakovi prevare za AI deepfake sextortion" data-en="Znakovi prevare for AI deepfake sextortion">Znakovi prevare za AI deepfake sextortion</div>
          <ul class="bullets">
            <li data-sr="TI ZNAŠ da NIKADA nisi napravio takav sadržaj = verovatno AI fake." data-en="YOU KNOW you NEVER created such content = probably AI fake.">TI ZNAŠ da NIKADA nisi napravio takav sadržaj = verovatno AI fake.</li>
            <li data-sr="scammer pokazuje samo SCREENSHOT, ne ceo video = verovatno fake." data-en="scammer shows only SCREENSHOT, not full video = probably fake.">scammer pokazuje samo SCREENSHOT, ne ceo video = verovatno fake.</li>
            <li data-sr="image artifacts: čudni detalji na pozadini, weird edges oko lica." data-en="image artifacts: strange details in background, weird edges around face.">image artifacts: čudni detalji na pozadini, weird edges oko lica.</li>
            <li data-sr="scammer NE pokazuje metadata (date, location) = verovatno fake." data-en="scammer DOESN'T show metadata (date, location) = probably fake.">scammer NE pokazuje metadata (date, location) = verovatno fake.</li>
            <li data-sr="traži CRYPTO payment (untraceable) = znak prevare za sve sextortion." data-en="asks for CRYPTO payment (untraceable) = znak prevare for all sextortion.">traži CRYPTO payment (untraceable) = znak prevare za sve sextortion.</li>
            <li data-sr="timing: pretnja dolazi odmah nakon što si postavio novu sliku = targeting." data-en="timing: threat comes right after you posted new photo = targeting.">timing: pretnja dolazi odmah nakon što si postavio novu sliku = targeting.</li>
          </ul>
        </div>
      </div>

      <div class="callout"
        data-sr="<strong>AI deepfake KRITIČNO upozorenje:</strong> AI tools mogu kreirati REALISTIČNE lažne intimne slike sa BILO ČIJE javne fotografije. TI NE MORAŠ da si podelio ikakav intiman sadržaj da bi bio meta. Deepfake je NERAZLUČIV od real content. NIKADA ne plaćaj - čak i ako slika izgleda kao ti, to NE ZNAČI da je stvarna. Prijavi policiji i platformi. AI deepfake sextortion je KRIVIČNO DELO."
        data-en="<strong>AI deepfake CRITICAL warning:</strong> AI tools can create REALISTIC fake intimate images from ANYONE'S public photos. YOU DON'T HAVE TO have shared any intimate content to be target. Deepfake is INDISTINGUISHABLE from real content. NEVER pay - even if image looks like you, that DOESN'T MEAN it's real. Report to police and platform. AI deepfake sextortion is CRIMINAL OFFENSE."
      ><strong>AI deepfake KRITIČNO upozorenje:</strong> AI tools mogu kreirati REALISTIČNE lažne intimne slike sa BILO ČIJE javne fotografije. TI NE MORAŠ da si podelio ikakav intiman sadržaj da bi bio meta. Deepfake je NERAZLUČIV od real content. NIKADA ne plaćaj - čak i ako slika izgleda kao ti, to NE ZNAČI da je stvarna. Prijavi policiji i platformi. AI deepfake sextortion je KRIVIČNO DELO.</div>
    </section>

    <!-- 9) PSYCHOLOGY OF SHAME & SCARE TACTICS -->
    <section class="card">
      <h2 data-sr="Psihologija stida i taktike zastraživanja" data-en="Psychology of shame and scare tactics">
        Psihologija stida i taktike zastraživanja
      </h2>

      <p
        data-sr="Sextortion se oslanja na stid, strah od osude, socijalnu anksioznost i izolaciju. Ucenjivač pokušava da žrtva ostane sama sa panikom, jer to smanjuje proveru činjenica i povećava verovatnoću plaćanja."
        data-en="Sextortion relies on shame, fear of judgment, social anxiety, and isolation. The blackmailer tries to keep the victim alone with panic, because that reduces fact-checking and increases the chance of payment."
      >Sextortion se oslanja na stid, strah od osude, socijalnu anksioznost i izolaciju. Ucenjivač pokušava da žrtva ostane sama sa panikom, jer to smanjuje proveru činjenica i povećava verovatnoću plaćanja.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Zašto žrtve plaćaju" data-en="Why victims pay">Zašto žrtve plaćaju</div>
          <ul class="bullets">
            <li data-sr="<strong>Akutni stid:</strong> intimni sadržaj pogađa najosetljiviji deo privatnosti i pojačava strah od osude." data-en="<strong>Acute shame:</strong> intimate content hits the most sensitive part of privacy and intensifies fear of judgment."><strong>Akutni stid:</strong> intimni sadržaj pogađa najosetljiviji deo privatnosti i pojačava strah od osude.</li>
            <li data-sr="<strong>Socijalna anksioznost:</strong> strah da će porodica, prijatelji ili posao saznati gura žrtvu ka brzom rešenju." data-en="<strong>Social anxiety:</strong> fear that family, friends, or work will find out pushes the victim toward a quick fix."><strong>Socijalna anksioznost:</strong> strah da će porodica, prijatelji ili posao saznati gura žrtvu ka brzom rešenju.</li>
            <li data-sr="<strong>Izolacija:</strong> ucenjivač insistira da nikome ne kaže, pa žrtva ostaje bez provere realnosti." data-en="<strong>Isolation:</strong> the blackmailer insists the victim tell nobody, leaving them without a reality check."><strong>Izolacija:</strong> ucenjivač insistira da nikome ne kaže, pa žrtva ostaje bez provere realnosti.</li>
            <li data-sr="<strong>Panična reakcija:</strong> pretnja plus rok potiskuju logično razmišljanje i pojačavaju impuls da se odmah plati." data-en="<strong>Panic response:</strong> threat plus deadline suppress logical thinking and strengthen the impulse to pay immediately."><strong>Panična reakcija:</strong> pretnja plus rok potiskuju logično razmišljanje i pojačavaju impuls da se odmah plati.</li>
            <li data-sr="<strong>Lažna nada:</strong> žrtva veruje da će se problem završiti jednom uplatom, iako ucena obično tek tada počinje da se širi." data-en="<strong>False hope:</strong> the victim believes the problem will end with one payment, even though extortion usually expands after that point."><strong>Lažna nada:</strong> žrtva veruje da će se problem završiti jednom uplatom, iako ucena obično tek tada počinje da se širi.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Kako ucenjivač pojačava strah" data-en="How the blackmailer amplifies fear">Kako ucenjivač pojačava strah</div>
          <ul class="bullets">
            <li data-sr="<strong>Odbrojavanje:</strong> kratki rokovi stvaraju osećaj da nema vremena za proveru ili razgovor s drugima." data-en="<strong>Countdown:</strong> short deadlines create the feeling that there is no time for verification or for talking to others."><strong>Odbrojavanje:</strong> kratki rokovi stvaraju osećaj da nema vremena za proveru ili razgovor s drugima.</li>
            <li data-sr="<strong>Pretnja kontakt listom:</strong> screenshot kontakata ili društvenih mreža služi da ucena izgleda odmah izvršiva." data-en="<strong>Contact-list threat:</strong> a screenshot of contacts or social accounts makes the extortion look immediately executable."><strong>Pretnja kontakt listom:</strong> screenshot kontakata ili društvenih mreža služi da ucena izgleda odmah izvršiva.</li>
            <li data-sr="<strong>Specifično ciljanje:</strong> pominjanje škole, poslodavca ili članova porodice pojačava utisak da napadač zaista ima pristup žrtvinom krugu." data-en="<strong>Specific targeting:</strong> mentioning a school, employer, or family members intensifies the sense that the attacker truly has access to the victim's circle."><strong>Specifično ciljanje:</strong> pominjanje škole, poslodavca ili članova porodice pojačava utisak da napadač zaista ima pristup žrtvinom krugu.</li>
            <li data-sr="<strong>Eskalacija pretnje:</strong> posle prvog odbijanja poruke postaju grublje, češće i preciznije." data-en="<strong>Threat escalation:</strong> after the first refusal, messages become harsher, more frequent, and more specific."><strong>Eskalacija pretnje:</strong> posle prvog odbijanja poruke postaju grublje, češće i preciznije.</li>
            <li data-sr="<strong>Samo kripto:</strong> zahtev za Bitcoin ili slična plaćanja smanjuje šansu za povraćaj i prikriva trag novca." data-en="<strong>Crypto only:</strong> a demand for Bitcoin or similar payments reduces the chance of recovery and hides the money trail."><strong>Samo kripto:</strong> zahtev za Bitcoin ili slična plaćanja smanjuje šansu za povraćaj i prikriva trag novca.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Kako prekinuti panični ciklus" data-en="How to break the panic cycle">Kako prekinuti panični ciklus</div>
          <ul class="bullets">
            <li data-sr="<strong>24h pause:</strong> NE REAGUJ odmah. Sačekaj 24h = emotional cooldown." data-en="<strong>24h pause:</strong> DON'T REACT immediately. Wait 24h = emotional cooldown."><strong>24h pause:</strong> NE REAGUJ odmah. Sačekaj 24h = emotional cooldown.</li>
            <li data-sr="<strong>Talk to someone:</strong> RECI prijatelju/porodici = break isolation." data-en="<strong>Talk to someone:</strong> TELL friend/family = break isolation."><strong>Talk to someone:</strong> RECI prijatelju/porodici = break isolation.</li>
            <li data-sr="<strong>Reality check:</strong> u 95% slučajeva sadržaj se NIKADA ne objavi (scammer hoće novac, ne izlaganje)." data-en="<strong>Reality check:</strong> in 95% of cases content is NEVER published (scammer wants money, not exposure)."><strong>Reality check:</strong> u 95% slučajeva sadržaj se NIKADA ne objavi (scammer hoće novac, ne izlaganje).</li>
            <li data-sr="<strong>DON'T PAY:</strong> plaćanje = 100% šansa za REPEAT demands (ucenjivač zna da si vulnerable)." data-en="<strong>DON'T PAY:</strong> paying = 100% chance for REPEAT demands (blackmailer knows you're vulnerable)."><strong>DON'T PAY:</strong> plaćanje = 100% šansa za REPEAT demands (ucenjivač zna da si vulnerable).</li>
            <li data-sr="<strong>Report to police:</strong> sextortion je KRIVIČNO DELO = police ima tools za pomoć." data-en="<strong>Report to police:</strong> sextortion is CRIMINAL OFFENSE = police has tools to help."><strong>Report to police:</strong> sextortion je KRIVIČNO DELO = police ima tools za pomoć.</li>
            <li data-sr="<strong>Therapy/support:</strong> traži professional mental health pomoć = process trauma." data-en="<strong>Therapy/support:</strong> seek professional mental health help = process trauma."><strong>Therapy/support:</strong> traži professional mental health pomoć = process trauma.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="VAŽNA REALNOST (truth about exposure)" data-en="IMPORTANT REALITY (truth about exposure).">VAŽNA REALNOST (truth about exposure)</div>
          <ul class="bullets">
            <li data-sr="u 95% slučajeva sadržaj se NIKADA NE OBJAVLJUJE (FBI data)." data-en="in 95% of cases content is NEVER PUBLISHED (FBI data).">u 95% slučajeva sadržaj se NIKADA NE OBJAVLJUJE (FBI data).</li>
            <li data-sr="scammer HOĆE NOVAC, ne izlaganje (izlaganje = loss of leverage)." data-en="scammer WANTS MONEY, not exposure (exposure = loss of leverage).">scammer HOĆE NOVAC, ne izlaganje (izlaganje = loss of leverage).</li>
            <li data-sr="ako plaćaš, scammer ZNA da si vulnerable = traži još (2-5x repeat demands)." data-en="if you pay, scammer KNOWS you're vulnerable = asks for more (2-5x repeat demands).">ako plaćaš, scammer ZNA da si vulnerable = traži još (2-5x repeat demands).</li>
            <li data-sr="plaćanje = INFINITE cycle, ne-plaćanje = scammer moves on (no profit = no interest)." data-en="paying = INFINITE cycle, not-paying = scammer moves on (no profit = no interest).">plaćanje = INFINITE cycle, ne-plaćanje = scammer moves on (no profit = no interest).</li>
            <li data-sr="family/friends će te PODRŽATI, ne osuditi (važnije od stida)." data-en="family/friends will SUPPORT you, not judge (more important than shame).">family/friends će te PODRŽATI, ne osuditi (važnije od stida).</li>
            <li data-sr="teške mentalne krize povezane sa sextortion prevarom: DON'T SUFFER ALONE, traži pomoć." data-en="severe mental-health crises linked to sextortion: DON'T SUFFER ALONE, seek help.">teške mentalne krize povezane sa sextortion prevarom: DON'T SUFFER ALONE, traži pomoć.</li>
          </ul>
        </div>
      </div>

      <div class="callout"
        data-sr="<strong>KRITIČNA PORUKA:</strong> Sextortion koristi stid kao najmoćniju kontrolu. 90-95% žrtava NE PRIJAVLJUJE zbog stida. ALI: u 95% slučajeva sadržaj se NIKADA NE OBJAVLJUJE. Scammer hoće novac, ne izlaganje. Plaćanje = INFINITE cycle. NE-plaćanje = scammer moves on. TALK TO SOMEONE - izolacija je scammer's weapon. teške mentalne krize = ne pati sam/sama. POTRAŽI POMOĆ: lokalna policija, FBI IC3, NCMEC Take It Down, StopNCII.org, therapist. TI NISI SAM/SAMA."
        data-en="<strong>CRITICAL MESSAGE:</strong> Sextortion uses shame as most powerful control. 90-95% victims DON'T REPORT due to shame. BUT: in 95% of cases content is NEVER PUBLISHED. Scammer wants money, not exposure. Paying = INFINITE cycle. NOT-paying = scammer moves on. TALK TO SOMEONE - isolation is scammer's weapon. teške mentalne krize = don't suffer alone. SEEK HELP: local police, FBI IC3, NCMEC Take It Down, StopNCII.org, therapist. YOU ARE NOT ALONE."
      ><strong>KRITIČNA PORUKA:</strong> Sextortion koristi stid kao najmoćniju kontrolu. 90-95% žrtava NE PRIJAVLJUJE zbog stida. ALI: u 95% slučajeva sadržaj se NIKADA NE OBJAVLJUJE. Scammer hoće novac, ne izlaganje. Plaćanje = INFINITE cycle. NE-plaćanje = scammer moves on. TALK TO SOMEONE - izolacija je scammer's weapon. teške mentalne krize = ne pati sam/sama. POTRAŽI POMOĆ: lokalna policija, FBI IC3, NCMEC Take It Down, StopNCII.org, therapist. TI NISI SAM/SAMA.</div>
    </section>

    <!-- 7) RESURSI ZA POMOĆ -->
    <section class="card">
      <h2 data-sr="Resursi za pomoć" data-en="Support resources">
        Resursi za pomoć
      </h2>

      <ul class="bullets">
        <li><a href="https://takeitdown.ncmec.org/" target="_blank">Take It Down (NCMEC)</a> <span data-sr="— pomoć za uklanjanje intimnog sadržaja (za maloletnike)." data-en="— help removing intimate content (for minors).">— pomoć za uklanjanje intimnog sadržaja (za maloletnike).</span></li>
        <li><a href="https://www.stopncii.org/" target="_blank">StopNCII.org</a> <span data-sr="— sprečavanje nekonsenzualnog deljenja intimnih slika." data-en="— preventing non-consensual intimate image sharing.">— sprečavanje nekonsenzualnog deljenja intimnih slika.</span></li>
        <li data-sr="lokalna policija — ucena je krivično delo." data-en="local police — blackmail is a criminal offense.">lokalna policija — ucena je krivično delo.</li>
      </ul>
    </section>

    <!-- 8) IZVORI -->
`
};
