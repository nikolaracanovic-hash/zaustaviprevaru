window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["marketplace-scam"] = {
  raw_html: `
    <!-- 1) UVOD: ŠTA JE I KAKO GENERALNO RADI -->
    <section class="card">
      <h2 data-sr="Uvod: kako rade marketplace prevare" data-en="Introduction: how marketplace scams work">
        Uvod: kako rade marketplace prevare
      </h2>

      <p
        data-sr="Marketplace prevara koristi oglas kao izgovor i transakciju kao okvir. Meta ulazi u razgovor sa uverenjem da se radi o rutinskoj kupoprodaji, dok napadač vodi tok ka jednoj nepovratnoj radnji: klik na link, unos kartice i OTP, uplata kapare, slanje robe bez priliva, deljenje koda za nalog, prelazak na privatni kanal. Oglas nije problem, prag je problem. Posle praga razgovor prestaje da bude dogovor i postaje procedura koja se „završava“ kroz niz novih uslova."
        data-en="Marketplace scams use a listing as the excuse and the transaction as the frame. The target enters believing it’s routine buying/selling, while the attacker steers toward one irreversible action: clicking a link, entering card details and OTP, paying a deposit, shipping without funds received, sharing an account code, moving off-platform. The listing is not the problem; the threshold is. After the threshold the chat stops being a deal and becomes a “procedure” completed through repeated conditions.">
        Marketplace prevara koristi oglas kao izgovor i transakciju kao okvir. Meta ulazi u razgovor sa uverenjem da se radi o rutinskoj kupoprodaji, dok napadač vodi tok ka jednoj nepovratnoj radnji: klik na link, unos kartice i OTP, uplata kapare, slanje robe bez priliva, deljenje koda za nalog, prelazak na privatni kanal. Oglas nije problem, prag je problem. Posle praga razgovor prestaje da bude dogovor i postaje procedura koja se „završava“ kroz niz novih uslova.
      </p>

      <p
        data-sr="Ovaj tip prevare radi brzo jer koristi naviku: ljudi su već navikli na poruke, kurire, linkove, brze dogovore. Napadač skraćuje prostor za proveru kroz tempo, zatim ubacuje proceduralni jezik (kurir, osiguranje, potvrda), pa gura prag. Kad prag prođe, pojavljuje se serija zahteva, često uz „podršku“ i kratke rokove. U istoj tački prevara lako prelazi u phishing, smishing, lažne pozive, advance-fee obrazac i recovery talas."
        data-en="This scam moves fast because it exploits habit: people are used to chats, couriers, links, quick deals. The attacker compresses verification time through pace, injects procedural language (courier, insurance, confirmation), then pushes the threshold. After the threshold, a series of demands follows, often with “support” and short deadlines. From the same point it can branch into phishing, smishing, fake calls, advance-fee patterns, and recovery waves.">
        Ovaj tip prevare radi brzo jer koristi naviku: ljudi su već navikli na poruke, kurire, linkove, brze dogovore. Napadač skraćuje prostor za proveru kroz tempo, zatim ubacuje proceduralni jezik (kurir, osiguranje, potvrda), pa gura prag. Kad prag prođe, pojavljuje se serija zahteva, često uz „podršku“ i kratke rokove. U istoj tački prevara lako prelazi u phishing, smishing, lažne pozive, advance-fee obrazac i recovery talas.
      </p>

      <div class="callout"
        data-sr="<strong>Model:</strong> oglas → kontakt → tempo → procedura → prag → serija zahteva → mutacije priče → recovery talas"
        data-en="<strong>Model:</strong> listing → contact → pace → procedure → threshold → repeated demands → story mutations → recovery wave">
        <strong>Model:</strong> oglas → kontakt → tempo → procedura → prag → serija zahteva → mutacije priče → recovery talas
      </div>

      <div class="callout"
        data-sr="<strong>Pravilo koje zaustavlja veliki deo varijanti:</strong> kartica + CVV + OTP služe za naplatu. Za prijem novca koriste se račun/IBAN, proverena platforma, ili gotovina."
        data-en="<strong>Rule that stops many variants:</strong> card + CVV + OTP are for charging. To receive money use account/IBAN, a trusted platform flow, or cash.">
        <strong>Pravilo koje zaustavlja veliki deo varijanti:</strong> kartica + CVV + OTP služe za naplatu. Za prijem novca koriste se račun/IBAN, proverena platforma, ili gotovina.
      </div>

      <div class="callout"
        data-sr="<strong>Prag:</strong> klik na link i unos kartice/OTP, uplata kapare, slanje robe bez priliva, deljenje koda. Posle praga tok prelazi u proceduru."
        data-en="<strong>Threshold:</strong> clicking a link and entering card/OTP, paying a deposit, shipping without funds received, sharing a code. After the threshold, the flow turns into a procedure.">
        <strong>Prag:</strong> klik na link i unos kartice/OTP, uplata kapare, slanje robe bez priliva, deljenje koda. Posle praga tok prelazi u proceduru.
      </div>
    </section>

    <!-- 2) DVA TOKA NAPADA -->
    <section class="card">
      <h2 data-sr="Dva toka napada" data-en="Two attack flows">Dva toka napada</h2>

      <p class="muted"
        data-sr="Napad se prilagođava ulozi: prodaja (prodavac pod pritiskom) ili kupovina (kupac pod pritiskom). Struktura ostaje ista: tempo, procedura, prag, serija zahteva."
        data-en="The scam adapts to your role: selling (seller under pressure) or buying (buyer under pressure). The structure remains: pace, procedure, threshold, repeated demands.">
        Napad se prilagođava ulozi: prodaja (prodavac pod pritiskom) ili kupovina (kupac pod pritiskom). Struktura ostaje ista: tempo, procedura, prag, serija zahteva.
      </p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Tok A — Fokus na prodavca" data-en="Flow A — Targeting the seller">Tok A — Fokus na prodavca</div>
          <ul class="bullets">
            <li data-sr="„Kupac“ nastupa odlučno i brzo, često bez pregovora." data-en="The “buyer” acts decisive and fast, often without bargaining.">„Kupac“ nastupa odlučno i brzo, često bez pregovora.</li>
            <li data-sr="Ubaci kurira, osiguranje, „sigurnu uplatu“, ili „platformsku potvrdu“." data-en="They introduce courier, insurance, “secure payment,” or “platform confirmation.”">Ubaci kurira, osiguranje, „sigurnu uplatu“, ili „platformsku potvrdu“.</li>
            <li data-sr="Gura link ili formu, traži OTP, ili traži slanje robe pre priliva." data-en="They push a link/form, ask for OTP, or ask you to ship before funds arrive.">Gura link ili formu, traži OTP, ili traži slanje robe pre priliva.</li>
          </ul>
          <div class="branch"
            data-sr="<strong>Cilj:</strong> naplata sa tvoje kartice, ili roba odlazi bez priliva."
            data-en="<strong>Goal:</strong> charge your card, or get the item shipped without funds received.">
            <strong>Cilj:</strong> naplata sa tvoje kartice, ili roba odlazi bez priliva.
          </div>
        </div>

        <div class="phase">
          <div class="label" data-sr="Tok B — Fokus na kupca" data-en="Flow B — Targeting the buyer">Tok B — Fokus na kupca</div>
          <ul class="bullets">
            <li data-sr="„Prodavac“ traži kaparu, rezervaciju, ili „trošak dostave“." data-en="The “seller” asks for a deposit, reservation fee, or “delivery cost.”">„Prodavac“ traži kaparu, rezervaciju, ili „trošak dostave“.</li>
            <li data-sr="Forsira privatne kanale i brzo zatvaranje dogovora." data-en="They push private channels and quick closure.">Forsira privatne kanale i brzo zatvaranje dogovora.</li>
            <li data-sr="Posle prve uplate stižu dodatni „troškovi“ kroz advance-fee obrazac." data-en="After the first payment, extra “fees” arrive via an advance-fee pattern.">Posle prve uplate stižu dodatni „troškovi“ kroz advance-fee obrazac.</li>
          </ul>
          <div class="branch"
            data-sr="<strong>Cilj:</strong> prva uplata kao prag, zatim serija uplata."
            data-en="<strong>Goal:</strong> first payment as threshold, then a series of payments.">
            <strong>Cilj:</strong> prva uplata kao prag, zatim serija uplata.
          </div>
        </div>
      </div>
    </section>

    <!-- 3) HRONOLOŠKI TOK (DETALJNO) -->
    <section class="card">
      <h2 data-sr="Hronološki tok: faze i pragovi" data-en="Timeline: phases and thresholds">Hronološki tok: faze i pragovi</h2>

      <p class="muted"
        data-sr="U marketplace okruženju prevara radi brzo. Kanon se ponavlja: tempo → procedura → prag → serija zahteva → mutacije → recovery talas. Faze ispod su česte u Srbiji i regionu."
        data-en="In marketplaces, scams move fast. The canon repeats: pace → procedure → threshold → repeated demands → mutations → recovery wave. The phases below are common in Serbia and the region.">
        U marketplace okruženju prevara radi brzo. Kanon se ponavlja: tempo → procedura → prag → serija zahteva → mutacije → recovery talas. Faze ispod su česte u Srbiji i regionu.
      </p>

      <!-- FAZA 1 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Kontakt i test profila" data-en="Phase 1 — Contact and profile testing">
          Faza 1 — Kontakt i test profila
        </h3>

        <p
          data-sr="Poruke deluju normalno: cena, lokacija, stanje predmeta. Test je u brzini i dubini pitanja. U ovoj fazi napadač procenjuje koliko brzo prelaziš na sledeći korak i koliko kontrole ostaje kod tebe."
          data-en="Messages look normal: price, location, condition. The test is pace and the depth of questions. In this phase the attacker measures how quickly you move to the next step and how much control stays with you."
        >Poruke deluju normalno: cena, lokacija, stanje predmeta. Test je u brzini i dubini pitanja. U ovoj fazi napadač procenjuje koliko brzo prelaziš na sledeći korak i koliko kontrole ostaje kod tebe.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Signali u porukama" data-en="Signals in messages">Signali u porukama</div>
            <ul class="bullets">
              <li data-sr="minimalno pitanja o predmetu, maksimum fokusa na brz završetak" data-en="minimal questions about the item, maximum focus on fast closure">minimalno pitanja o predmetu, maksimum fokusa na brz završetak</li>
              <li data-sr="izbegavanje detalja (model, stanje, dodatne slike)" data-en="avoiding details (model, condition, extra photos)">izbegavanje detalja (model, stanje, dodatne slike)</li>
              <li data-sr="insistiranje na privatnom broju i privatnoj aplikaciji" data-en="insistence on a private number/app">insistiranje na privatnom broju i privatnoj aplikaciji</li>
              <li data-sr="neprirodna spremnost na dogovor bez pregovora" data-en="unnatural willingness to agree without bargaining">neprirodna spremnost na dogovor bez pregovora</li>
            </ul>
          </div>

          <div class="phase">
            <div class="label" data-sr="Šta napadač meri" data-en="What the attacker measures">Šta napadač meri</div>
            <ul class="bullets">
              <li data-sr="koliko brzo odgovaraš" data-en="how fast you respond">koliko brzo odgovaraš</li>
              <li data-sr="koliko pitanja postavljaš" data-en="how many questions you ask">koliko pitanja postavljaš</li>
              <li data-sr="da li prihvataš prelazak van platforme" data-en="whether you accept moving off-platform">da li prihvataš prelazak van platforme</li>
              <li data-sr="da li tražiš dokaz (video, dodatne slike, uživo)" data-en="whether you demand proof (video, more photos, in-person)">da li tražiš dokaz (video, dodatne slike, uživo)</li>
            </ul>
          </div>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> prelazak komunikacije van platforme ili prihvatanje „završimo odmah“ ritma."
          data-en="<strong>Threshold:</strong> moving communication off-platform or accepting a “finish now” rhythm."
        ><strong>Prag faze:</strong> prelazak komunikacije van platforme ili prihvatanje „završimo odmah“ ritma.</div>
      </article>

      <!-- FAZA 2 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Tempo i „rutina“" data-en="Phase 2 — Pace and routine">
          Faza 2 — Tempo i „rutina“
        </h3>

        <p
          data-sr="Cilj je automatizam: poruka → klik → potvrda. Kad meta uđe u taj ritam, provera domena, iznosa i konteksta slabi. U ovoj fazi se često koristi glasovni poziv da bi se ubrzalo donošenje odluke."
          data-en="The goal is autopilot: message → click → confirm. Once the target enters that rhythm, domain, amount, and context checks degrade. Voice calls are often used here to accelerate decisions."
        >Cilj je automatizam: poruka → klik → potvrda. Kad meta uđe u taj ritam, provera domena, iznosa i konteksta slabi. U ovoj fazi se često koristi glasovni poziv da bi se ubrzalo donošenje odluke.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Kako izgleda tempo" data-en="How pace looks">Kako izgleda tempo</div>
            <ul class="bullets">
              <li data-sr="kratke rečenice, kratki rokovi" data-en="short sentences, short deadlines">kratke rečenice, kratki rokovi</li>
              <li data-sr="„pod hitno“, „kurir čeka“, „završimo sada“" data-en="“urgent”, “courier is waiting”, “let’s finish now”">„pod hitno“, „kurir čeka“, „završimo sada“</li>
              <li data-sr="izbegavanje pauza i pitanja" data-en="avoiding pauses and questions">izbegavanje pauza i pitanja</li>
            </ul>
          </div>

          <div class="phase">
            <div class="label" data-sr="Zašto radi" data-en="Why it works">Zašto radi</div>
            <ul class="bullets">
              <li data-sr="meta razmišlja u koracima, ne u proveri" data-en="the target thinks in steps, not verification">meta razmišlja u koracima, ne u proveri</li>
              <li data-sr="žurba smanjuje proveru URL-a" data-en="rush reduces URL checking">žurba smanjuje proveru URL-a</li>
              <li data-sr="glasovni poziv dodaje autoritet" data-en="a call adds authority">glasovni poziv dodaje autoritet</li>
            </ul>
          </div>
        </div>

        <div class="branch">
          <p><strong data-sr="Evolucija u ovoj fazi" data-en="Evolution at this phase">Evolucija u ovoj fazi</strong></p>
          <ul class="bullets">
            <li
              data-sr="<strong>Lažni poziv:</strong> poziv preuzima tempo i vodi korake uživo. (Povezano: <a href='fake-call-scam.html'>Lažni pozivi</a>)"
              data-en="<strong>Fake call:</strong> a call takes pace control and guides steps live. (Related: <a href='fake-call-scam.html'>Fake calls</a>)"
            ><strong>Lažni poziv:</strong> poziv preuzima tempo i vodi korake uživo. (Povezano: <a href="fake-call-scam.html">Lažni pozivi</a>)</li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> meta prihvata da „klik rešava“ i prelazi na link/formu bez analize."
          data-en="<strong>Threshold:</strong> the target accepts that “clicking solves it” and moves to a link/form without analysis."
        ><strong>Prag faze:</strong> meta prihvata da „klik rešava“ i prelazi na link/formu bez analize.</div>
      </article>

      <!-- FAZA 3 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Procedura (kurir, osiguranje, potvrda)" data-en="Phase 3 — Procedure (courier, insurance, confirmation)">
          Faza 3 — Procedura (kurir, osiguranje, potvrda)
        </h3>

        <p
          data-sr="Ulazi formalni jezik: kurir, osiguranje pošiljke, potvrda uplate, „sigurna transakcija“. U ovoj tački se ubacuje link, QR, forma ili instrukcija za kod. Forma izgleda kao checkout ili potvrda dostave, i traži podatke koji služe za naplatu."
          data-en="Formal language appears: courier, shipment insurance, payment confirmation, “secure transaction”. At this point a link, QR, form, or code instruction shows up. The form looks like checkout or delivery confirmation and asks for data used for charging."
        >Ulazi formalni jezik: kurir, osiguranje pošiljke, potvrda uplate, „sigurna transakcija“. U ovoj tački se ubacuje link, QR, forma ili instrukcija za kod. Forma izgleda kao checkout ili potvrda dostave, i traži podatke koji služe za naplatu.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Tehnički signali" data-en="Technical signals">Tehnički signali</div>
            <ul class="bullets">
              <li data-sr="domen liči na brend uz sitnu razliku (slovo, crtica, nastavak)" data-en="domain mimics a brand with a tiny difference (letter, hyphen, TLD)">domen liči na brend uz sitnu razliku (slovo, crtica, nastavak)</li>
              <li data-sr="kratki link ili redirekcije koje sakrivaju pravu adresu" data-en="short links or redirects that hide the real address">kratki link ili redirekcije koje sakrivaju pravu adresu</li>
              <li data-sr="forma traži karticu, CVV, datum, zatim OTP" data-en="form asks for card, CVV, expiry, then OTP">forma traži karticu, CVV, datum, zatim OTP</li>
            </ul>
          </div>

          <div class="phase">
            <div class="label" data-sr="Operativni signali" data-en="Operational signals">Operativni signali</div>
            <ul class="bullets">
              <li data-sr="rok: „kurir čeka“, „danas“, „sad“" data-en="deadline: “courier is waiting”, “today”, “now”">rok: „kurir čeka“, „danas“, „sad“</li>
              <li data-sr="odgovornost se prebacuje na „sistem“" data-en="responsibility is shifted to “the system”">odgovornost se prebacuje na „sistem“</li>
              <li data-sr="izbegavanje pitanja o logici toka (zašto kartica za prijem novca)" data-en="avoiding the logic question (why a card to receive money)">izbegavanje pitanja o logici toka (zašto kartica za prijem novca)</li>
            </ul>
          </div>
        </div>

        <div class="branch">
          <p><strong data-sr="Grananje u ovoj fazi" data-en="Branching in this phase">Grananje u ovoj fazi</strong></p>
          <ul class="bullets">
            <li
              data-sr="<strong>Phishing:</strong> forma prikuplja karticu ili kredencijale. (Povezano: <a href='phishing.html'>Phishing</a>)"
              data-en="<strong>Phishing:</strong> the form captures card or credentials. (Related: <a href='phishing.html'>Phishing</a>)"
            ><strong>Phishing:</strong> forma prikuplja karticu ili kredencijale. (Povezano: <a href="phishing.html">Phishing</a>)</li>

            <li
              data-sr="<strong>Smishing:</strong> ista forma stiže kroz SMS sa kratkim linkom. (Povezano: <a href='smishing.html'>Smishing</a>)"
              data-en="<strong>Smishing:</strong> the same form arrives via SMS with a short link. (Related: <a href='smishing.html'>Smishing</a>)"
            ><strong>Smishing:</strong> ista forma stiže kroz SMS sa kratkim linkom. (Povezano: <a href="smishing.html">Smishing</a>)</li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> meta unosi karticu/OTP ili deli kod, jer forma izgleda kao procedura."
          data-en="<strong>Threshold:</strong> the target enters card/OTP or shares a code because the form feels procedural."
        ><strong>Prag faze:</strong> meta unosi karticu/OTP ili deli kod, jer forma izgleda kao procedura.</div>
      </article>

      <!-- FAZA 4 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Prag: nepovratna radnja" data-en="Phase 4 — Threshold: irreversible action">
          Faza 4 — Prag: nepovratna radnja
        </h3>

        <p
          data-sr="Prag menja tok. Tipični pragovi su: unos kartice i OTP, uplata kapare, slanje robe pre priliva, deljenje koda za nalog. Posle praga meta pokušava da „spasi stvar“, pa prihvata nove uslove."
          data-en="The threshold changes everything. Typical thresholds: entering card+OTP, paying a deposit, shipping before funds arrive, sharing an account code. After the threshold, the target tries to “fix it” and accepts new conditions."
        >Prag menja tok. Tipični pragovi su: unos kartice i OTP, uplata kapare, slanje robe pre priliva, deljenje koda za nalog. Posle praga meta pokušava da „spasi stvar“, pa prihvata nove uslove.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Zašto je prag presudan" data-en="Why the threshold is decisive">Zašto je prag presudan</div>
            <ul class="bullets">
              <li data-sr="posle unosa kartice/OTP nastaje realna naplata" data-en="after card/OTP entry, real charging happens">posle unosa kartice/OTP nastaje realna naplata</li>
              <li data-sr="posle slanja robe gubitak postaje fizički" data-en="after shipping, the loss becomes physical">posle slanja robe gubitak postaje fizički</li>
              <li data-sr="posle kapare meta brani prethodnu odluku" data-en="after a deposit, the target defends the earlier decision">posle kapare meta brani prethodnu odluku</li>
              <li data-sr="posle deljenja koda nalog može biti preuzet" data-en="after code sharing, the account can be taken over">posle deljenja koda nalog može biti preuzet</li>
            </ul>
          </div>

          <div class="phase">
            <div class="label" data-sr="Kako napadač održava tok" data-en="How the attacker maintains the flow">Kako napadač održava tok</div>
            <ul class="bullets">
              <li data-sr="uvodi „podršku“ i proceduralni ton" data-en="introduces “support” and procedural tone">uvodi „podršku“ i proceduralni ton</li>
              <li data-sr="ubacuje rok i posledicu" data-en="injects deadlines and consequences">ubacuje rok i posledicu</li>
              <li data-sr="menja priču da zadrži fokus na sledećem koraku" data-en="changes the story to keep focus on the next step">menja priču da zadrži fokus na sledećem koraku</li>
            </ul>
          </div>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> meta prihvata novu radnju da bi prethodna dobila smisao."
          data-en="<strong>Threshold:</strong> the target accepts a new action so the previous action “makes sense”."
        ><strong>Prag faze:</strong> meta prihvata novu radnju da bi prethodna dobila smisao.</div>
      </article>

      <!-- FAZA 5 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Serija zahteva (advance-fee obrazac)" data-en="Phase 5 — Repeated demands (advance-fee pattern)">
          Faza 5 — Serija zahteva (advance-fee obrazac)
        </h3>

        <p
          data-sr="Svaki sledeći zahtev dobija etiketu: greška sistema, osiguranje, taksa, „otključavanje“, refund naknada. Svaki korak se prodaje kao uslov da prethodni dobije smisao. Iznosi se podešavaju da izgledaju izvodljivo, rokovi se skraćuju da preseku proveru."
          data-en="Each next demand gets a label: system error, insurance, fee, “unlock,” refund fee. Each step is framed as required for the previous to make sense. Amounts are tuned to feel manageable, deadlines shrink to cut verification."
        >Svaki sledeći zahtev dobija etiketu: greška sistema, osiguranje, taksa, „otključavanje“, refund naknada. Svaki korak se prodaje kao uslov da prethodni dobije smisao. Iznosi se podešavaju da izgledaju izvodljivo, rokovi se skraćuju da preseku proveru.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Kako se serija gradi" data-en="How the series is built">Kako se serija gradi</div>
            <ul class="bullets">
              <li data-sr="mali iznos kao „sitna procedura“" data-en="a small amount as “minor procedure”">mali iznos kao „sitna procedura“</li>
              <li data-sr="srednji iznos kao „osiguranje“ ili „depozit“" data-en="a mid amount as “insurance” or “deposit”">srednji iznos kao „osiguranje“ ili „depozit“</li>
              <li data-sr="veći iznos kao „final step“" data-en="a larger amount as “final step”">veći iznos kao „final step“</li>
              <li data-sr="ponavljanje „poslednjeg koraka“ pod novim nazivom" data-en="repeating the “final step” under a new label">ponavljanje „poslednjeg koraka“ pod novim nazivom</li>
            </ul>
          </div>

          <div class="phase">
            <div class="label" data-sr="Kako se pritisak povećava" data-en="How pressure escalates">Kako se pritisak povećava</div>
            <ul class="bullets">
              <li data-sr="rok: „kurir čeka“, „sistem zatvara slučaj“" data-en="deadline: “courier is waiting”, “case will be closed”">rok: „kurir čeka“, „sistem zatvara slučaj“</li>
              <li data-sr="ton postaje tvrđi kada meta uspori" data-en="tone hardens when the target slows down">ton postaje tvrđi kada meta uspori</li>
              <li data-sr="uvodi se poziv radi vođenja" data-en="a call is introduced for guidance">uvodi se poziv radi vođenja</li>
            </ul>
          </div>
        </div>

        <div class="branch">
          <p><strong data-sr="Grananja iz ove faze" data-en="Branching from this phase">Grananja iz ove faze</strong></p>
          <ul class="bullets">
            <li
              data-sr="<strong>Advance-fee čvor:</strong> serijske takse postaju samostalna šema. (Povezano: <a href='advance-fee-fraud.html'>Advance-fee</a>)"
              data-en="<strong>Advance-fee node:</strong> repeated fees become a standalone scheme. (Related: <a href='advance-fee-fraud.html'>Advance-fee</a>)"
            ><strong>Advance-fee čvor:</strong> serijske takse postaju samostalna šema. (Povezano: <a href="advance-fee-fraud.html">Advance-fee</a>)</li>

            <li
              data-sr="<strong>Lažni pozivi:</strong> „podrška“ vodi korake uživo. (Povezano: <a href='fake-call-scam.html'>Lažni pozivi</a>)"
              data-en="<strong>Fake calls:</strong> “support” guides steps live. (Related: <a href='fake-call-scam.html'>Fake calls</a>)"
            ><strong>Lažni pozivi:</strong> „podrška“ vodi korake uživo. (Povezano: <a href="fake-call-scam.html">Lažni pozivi</a>)</li>

            <li
              data-sr="<strong>Recovery:</strong> posle gubitka dolazi „refund“ uz naknadu. (Povezano: <a href='recovery-scam.html'>Recovery</a>)"
              data-en="<strong>Recovery:</strong> after loss, a “refund” appears for a fee. (Related: <a href='recovery-scam.html'>Recovery</a>)"
            ><strong>Recovery:</strong> posle gubitka dolazi „refund“ uz naknadu. (Povezano: <a href="recovery-scam.html">Recovery</a>)</li>
          </ul>
        </div>
      </article>

      <!-- FAZA 6 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Autoritet (podrška, pozivi, dokumenti)" data-en="Phase 6 — Authority (support, calls, documents)">
          Faza 6 — Autoritet (podrška, pozivi, dokumenti)
        </h3>

        <p
          data-sr="Kad se pojavi sumnja, ubacuje se autoritet: „podrška“, formalni email, PDF, logotip, poziv. Cilj je da se tok predstavi kao legitiman proces, pa meta nastavlja umesto da prekine."
          data-en="When doubt appears, authority is injected: “support”, formal emails, PDFs, logos, calls. The goal is to frame the flow as a legitimate process so the target continues instead of stopping."
        >Kad se pojavi sumnja, ubacuje se autoritet: „podrška“, formalni email, PDF, logotip, poziv. Cilj je da se tok predstavi kao legitiman proces, pa meta nastavlja umesto da prekine.</p>

        <div class="branch">
          <p><strong data-sr="Tipično grananje" data-en="Typical branching">Tipično grananje</strong></p>
          <ul class="bullets">
            <li
              data-sr="<strong>Fake-call:</strong> poziv preuzima tempo i traži kodove/korake. (Povezano: <a href='fake-call-scam.html'>Lažni pozivi</a>)"
              data-en="<strong>Fake-call:</strong> a call takes over tempo and asks for codes/steps. (Related: <a href='fake-call-scam.html'>Fake calls</a>)"
            ><strong>Fake-call:</strong> poziv preuzima tempo i traži kodove/korake. (Povezano: <a href="fake-call-scam.html">Lažni pozivi</a>)</li>
          </ul>
        </div>
      </article>

      <!-- FAZA 7 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 7 — Mutacije priče" data-en="Phase 7 — Story mutations">
          Faza 7 — Mutacije priče
        </h3>

        <p
          data-sr="Kostim se menja: novi link, novi „agent“, novi broj, nova priča. Mehanizam ostaje isti: prag je urađen, sada ide serija. Mutacija služi da se sumnja resetuje, a tok nastavi."
          data-en="The costume changes: new link, new “agent,” new number, new story. The mechanism remains: the threshold already happened, now the series continues. Mutation resets doubt and keeps the flow moving."
        >Kostim se menja: novi link, novi „agent“, novi broj, nova priča. Mehanizam ostaje isti: prag je urađen, sada ide serija. Mutacija služi da se sumnja resetuje, a tok nastavi.</p>
      </article>

      <!-- FAZA 8 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 8 — Recovery talas" data-en="Phase 8 — Recovery wave">
          Faza 8 — Recovery talas
        </h3>

        <p
          data-sr="Posle gubitka stižu poruke o povraćaju: „povrat sredstava“, „chargeback pomoć“, „specijalna služba“. Uslov je uplata unapred ili dodatni podaci. Ovo je drugi napad na istu metu."
          data-en="After loss, recovery messages arrive: “refund”, “chargeback help”, “special unit”. The condition is an upfront payment or additional data. This is a second attack on the same target."
        >Posle gubitka stižu poruke o povraćaju: „povrat sredstava“, „chargeback pomoć“, „specijalna služba“. Uslov je uplata unapred ili dodatni podaci. Ovo je drugi napad na istu metu.</p>
      </article>
    </section>

    <!-- 4) PODTIPOVI (VELIKO, KONKRETNO) -->
    <section class="card">
      <h2 data-sr="Podtipovi: kako izgledaju u praksi" data-en="Variants: how they look in practice">
        Podtipovi: kako izgledaju u praksi
      </h2>

      <h3 data-sr="1) Lažni link „kurir/dostava/plaćanje“" data-en="1) Fake “courier/delivery/payment” link">
        1) Lažni link „kurir/dostava/plaćanje“
      </h3>
      <p
        data-sr="Link stiže kroz chat ili SMS. Stranica liči na checkout ili potvrdu dostave. Forma traži karticu, zatim OTP. U realnom toku prijema novca ovaj korak nema svrhu."
        data-en="The link arrives via chat or SMS. The page looks like checkout or delivery confirmation. The form asks for card details, then OTP. In real receiving-money flows, this step makes no sense."
      >Link stiže kroz chat ili SMS. Stranica liči na checkout ili potvrdu dostave. Forma traži karticu, zatim OTP. U realnom toku prijema novca ovaj korak nema svrhu.</p>

      <h3 data-sr="2) Lažni dokaz uplate" data-en="2) Fake payment proof">
        2) Lažni dokaz uplate
      </h3>
      <p
        data-sr="Kod prodaje, napadač šalje screenshot „uplate“ i gura slanje robe. Izgovori su standardni: pending, vikend, međubankarski prenos, „kasni banka“."
        data-en="When selling, the attacker sends a payment screenshot and pushes you to ship. Excuses are standard: pending, weekend, interbank transfer, “bank delay”."
      >Kod prodaje, napadač šalje screenshot „uplate“ i gura slanje robe. Izgovori su standardni: pending, vikend, međubankarski prenos, „kasni banka“.</p>

      <div class="callout"
        data-sr="<strong>Pravilo:</strong> dokaz je priliv u aplikaciji ili na računu, sa tačnim iznosom i valutom."
        data-en="<strong>Rule:</strong> proof is funds received in your bank app/account, with exact amount and currency."
      ><strong>Pravilo:</strong> dokaz je priliv u aplikaciji ili na računu, sa tačnim iznosom i valutom.</div>

      <h3 data-sr="3) Kapara / rezervacija / trošak dostave" data-en="3) Deposit / reservation / delivery cost">
        3) Kapara / rezervacija / trošak dostave
      </h3>
      <p
        data-sr="Kod kupovine napadač traži mali iznos kao rezervaciju. Posle toga dolazi dodatni zahtev: osiguranje, pakovanje, taksa, „carina“, refund naknada."
        data-en="When buying, the attacker asks for a small reservation fee. After that, extra demands appear: insurance, packaging, fees, “customs”, refund fees."
      >Kod kupovine napadač traži mali iznos kao rezervaciju. Posle toga dolazi dodatni zahtev: osiguranje, pakovanje, taksa, „carina“, refund naknada.</p>

      <h3 data-sr="4) Preuzimanje naloga kroz kod" data-en="4) Account takeover via a code">
        4) Preuzimanje naloga kroz kod
      </h3>
      <p
        data-sr="Napadač traži kod „za potvrdu profila“, „za dostavu“, „za verifikaciju oglasa“. Kod stiže SMS-om ili aplikacijom. Deljenje koda prebacuje kontrolu naloga."
        data-en="The attacker asks for a code “to confirm profile”, “for delivery”, “to verify the listing”. The code arrives via SMS/app. Sharing the code transfers account control."
      >Napadač traži kod „za potvrdu profila“, „za dostavu“, „za verifikaciju oglasa“. Kod stiže SMS-om ili aplikacijom. Deljenje koda prebacuje kontrolu naloga.</p>

      <h3 data-sr="5) Lažna logistika: kurir preuzima robu" data-en="5) Fake logistics: courier pickup">
        5) Lažna logistika: kurir preuzima robu
      </h3>
      <p
        data-sr="Napadač gradi sliku realne logistike: broj pošiljke, raspored, agent, osiguranje. Zatim ubacuje link ili traži dodatni korak u vezi sa „osiguranjem“."
        data-en="They simulate logistics: tracking number, schedule, agent, insurance. Then they inject a link or demand an extra step tied to “insurance”."
      >Napadač gradi sliku realne logistike: broj pošiljke, raspored, agent, osiguranje. Zatim ubacuje link ili traži dodatni korak u vezi sa „osiguranjem“.</p>
    </section>

    <!-- 5) GRANANJE (KLJUČNO) -->
    <section class="card">
      <h2 data-sr="Grananje: gde marketplace napad vodi dalje" data-en="Branching: where marketplace leads">
        Grananje: gde marketplace napad vodi dalje
      </h2>

      <p class="muted"
        data-sr="Marketplace prevara često služi kao ulaz u šire šeme. Nakon praga napadač bira dalji pravac prema reakciji mete: panika, brzina, želja za povraćajem, pokušaj završavanja procedure."
        data-en="Marketplace scams often act as entry into broader schemes. After the threshold, the attacker chooses the next path based on the target’s reaction: panic, speed, desire to recover, trying to finish the procedure."
      >Marketplace prevara često služi kao ulaz u šire šeme. Nakon praga napadač bira dalji pravac prema reakciji mete: panika, brzina, želja za povraćajem, pokušaj završavanja procedure.</p>

      <div class="grid-2">
        <div class="phase warn">
          <div class="label" data-sr="Prag: klik + forma (kartica/OTP)" data-en="Threshold: click + form (card/OTP)">Prag: klik + forma (kartica/OTP)</div>
          <ul class="bullets">
            <li data-sr="Prelaz u <a href='phishing.html'>Phishing</a>: krađa kartice, kredencijala, tokena." data-en="Leads to <a href='phishing.html'>Phishing</a>: theft of card data, credentials, tokens.">Prelaz u <a href='phishing.html'>Phishing</a>: krađa kartice, kredencijala, tokena.</li>
            <li data-sr="Prelaz u preuzimanje naloga: e-mail, marketplace nalog, društvene mreže." data-en="Leads to account takeover: email, marketplace account, social accounts.">Prelaz u preuzimanje naloga: e-mail, marketplace nalog, društvene mreže.</li>
            <li data-sr="Prelaz u „podrška“ pozive: autoritet + ubrzavanje serije zahteva. (Povezano: <a href='fake-call-scam.html'>Lažni pozivi</a>)" data-en="Leads to “support” calls: authority + accelerating repeated demands. (Related: <a href='fake-call-scam.html'>Fake calls</a>)">Prelaz u „podrška“ pozive: autoritet + ubrzavanje serije zahteva. (Povezano: <a href="fake-call-scam.html">Lažni pozivi</a>)</li>
          </ul>
        </div>

        <div class="phase warn">
          <div class="label" data-sr="Prag: kapara / trošak" data-en="Threshold: deposit / fee">Prag: kapara / trošak</div>
          <ul class="bullets">
            <li data-sr="Prelaz u <a href='advance-fee-fraud.html'>Advance-fee</a>: svaki sledeći iznos kao uslov." data-en="Leads to <a href='advance-fee-fraud.html'>Advance-fee</a>: each next amount becomes a condition.">Prelaz u <a href="advance-fee-fraud.html">Advance-fee</a>: svaki sledeći iznos kao uslov.</li>
            <li data-sr="Prelaz u „refund“: povraćaj uz naknadu, zatim još jedna naknada." data-en="Leads to a “refund” flow: refund for a fee, then another fee.">Prelaz u „refund“: povraćaj uz naknadu, zatim još jedna naknada.</li>
            <li data-sr="Prelaz u <a href='recovery-scam.html'>Recovery</a>: napad posle gubitka." data-en="Leads to <a href='recovery-scam.html'>Recovery</a>: targeting after loss.">Prelaz u <a href="recovery-scam.html">Recovery</a>: napad posle gubitka.</li>
          </ul>
        </div>
      </div>

      <div class="phase bad">
        <div class="label" data-sr="Prag: slanje robe pre priliva" data-en="Threshold: shipping before funds arrive">Prag: slanje robe pre priliva</div>
        <ul class="bullets">
          <li data-sr="Produženje priče: „pending“, „banka“, „kurir“, „potvrda“." data-en="Story extension: “pending”, “bank”, “courier”, “confirmation”.">Produženje priče: „pending“, „banka“, „kurir“, „potvrda“.</li>
          <li data-sr="Autoritet: „podrška“ preuzima razgovor i traži podatke." data-en="Authority: “support” takes over and asks for data.">Autoritet: „podrška“ preuzima razgovor i traži podatke.</li>
          <li data-sr="Recovery poruke: „povrat“ uz naknadu." data-en="Recovery messages: “refund” for a fee.">Recovery poruke: „povrat“ uz naknadu.</li>
        </ul>
      </div>
    </section>

    <!-- 6) TEHNIČKI SIGNALI -->
    <section class="card">
      <h2 data-sr="Tehnički signali: brza provera linka i forme" data-en="Technical signals: quick link and form checks">
        Tehnički signali: brza provera linka i forme
      </h2>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Link (URL) provera" data-en="Link (URL) checks">Link (URL) provera</div>
          <ul class="bullets">
            <li data-sr="Domen: proveri tačno ime, redosled slova, crtice, nastavak (.com, .rs, itd.)." data-en="Domain: verify exact spelling, letter order, hyphens, TLD (.com, .rs, etc.).">Domen: proveri tačno ime, redosled slova, crtice, nastavak (.com, .rs, itd.).</li>
            <li data-sr="Protokol: obrati pažnju na redirekcije i parametre." data-en="Protocol: watch redirects and parameters.">Protokol: obrati pažnju na redirekcije i parametre.</li>
            <li data-sr="Kanal: link iz chata/SMS ima viši rizik od linka koji sam otvaraš kroz zvaničan sajt." data-en="Channel: chat/SMS links are higher risk than navigating yourself via the official site.">Kanal: link iz chata/SMS ima viši rizik od linka koji sam otvaraš kroz zvaničan sajt.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Forma provera" data-en="Form checks">Forma provera</div>
          <ul class="bullets">
            <li data-sr="Kartica + CVV + OTP: to je autorizacija naplate." data-en="Card + CVV + OTP: that authorizes a charge.">Kartica + CVV + OTP: to je autorizacija naplate.</li>
            <li data-sr="„Verifikacija“ uz karticu: trik koji menja okvir." data-en="“Verification” requiring a card: a framing trick.">„Verifikacija“ uz karticu: trik koji menja okvir.</li>
            <li data-sr="Polja: ime, adresa, datum, kodovi — komplet podataka za naplatu." data-en="Fields: name, address, expiry, codes — full charging dataset.">Polja: ime, adresa, datum, kodovi — komplet podataka za naplatu.</li>
          </ul>
        </div>
      </div>

      <div class="callout"
        data-sr="<strong>Jedan indikator:</strong> forma koja traži karticu kada ti treba da primiš novac označava preokret: sa prijema na naplatu."
        data-en="<strong>One indicator:</strong> a form that asks for your card when you should be receiving money signals the flip: from receiving to charging."
      ><strong>Jedan indikator:</strong> forma koja traži karticu kada ti treba da primiš novac označava preokret: sa prijema na naplatu.</div>
    </section>

    <!-- 7) IZ UGLA PREVARANTA: OPERATIVA -->
    <section class="card">
      <h2 data-sr="Iz ugla prevaranta: organizacija i taktike" data-en="From the attacker’s side: organization and tactics">
        Iz ugla prevaranta: organizacija i taktike
      </h2>

      <p
        data-sr="Marketplace prevara se često vodi kao mini-operacija: šabloni poruka, više naloga, brze zamene brojeva, podela rada. Jedan profil otvara kontakt, drugi glumi „podršku“, treći šalje link. Meta se meri po brzini i spremnosti na prag. Odbijanje se tretira kao gubitak vremena, pa se prelazi na sledeću metu."
        data-en="Marketplace scams often run like a mini-operation: message templates, multiple accounts, rapid number swaps, division of labor. One profile opens contact, another plays “support,” a third sends the link. Targets are measured by speed and readiness to cross the threshold. Refusal is treated as time loss, so they move to the next target."
      >Marketplace prevara se često vodi kao mini-operacija: šabloni poruka, više naloga, brze zamene brojeva, podela rada. Jedan profil otvara kontakt, drugi glumi „podršku“, treći šalje link. Meta se meri po brzini i spremnosti na prag. Odbijanje se tretira kao gubitak vremena, pa se prelazi na sledeću metu.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta traže od mete" data-en="What they want from the target">Šta traže od mete</div>
          <ul class="bullets">
            <li data-sr="brz odgovor i brz klik" data-en="fast reply and fast click">brz odgovor i brz klik</li>
            <li data-sr="prihvatanje „procedure“ bez provere" data-en="accepting “procedure” without verification">prihvatanje „procedure“ bez provere</li>
            <li data-sr="prag koji menja tok: OTP, uplata, slanje, kod" data-en="threshold action: OTP, payment, shipping, code">prag koji menja tok: OTP, uplata, slanje, kod</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Kako testiraju otpornost" data-en="How they test resistance">Kako testiraju otpornost</div>
          <ul class="bullets">
            <li data-sr="reakcija na pitanja o predmetu i detaljima" data-en="reaction to item-detail questions">reakcija na pitanja o predmetu i detaljima</li>
            <li data-sr="reakcija na predlog da se sve završi kroz platformu/IBAN" data-en="reaction to finishing via platform/IBAN">reakcija na predlog da se sve završi kroz platformu/IBAN</li>
            <li data-sr="reakcija na zahtev za video i dodatne dokaze" data-en="reaction to video and extra proof requests">reakcija na zahtev za video i dodatne dokaze</li>
          </ul>
        </div>
      </div>

      <div class="callout"
        data-sr="<strong>Filter:</strong> meta koja uradi prag dobija više pažnje. Meta koja traži proveru ili uspori prelazi u niži prioritet."
        data-en="<strong>Filter:</strong> targets who cross the threshold get more attention. Targets who demand verification or slow down drop in priority."
      ><strong>Filter:</strong> meta koja uradi prag dobija više pažnje. Meta koja traži proveru ili uspori prelazi u niži prioritet.</div>
    </section>

    <!-- 8) PRAKTIČNE CHECKLISTE -->
    <section class="card">
      <h2 data-sr="Praktične checkliste" data-en="Practical checklists">Praktične checkliste</h2>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Prodavac: siguran tok" data-en="Seller: safe flow">Prodavac: siguran tok</div>
          <ol class="steps">
            <li data-sr="Dogovor drži na platformi što duže." data-en="Keep the deal on-platform as long as possible.">Dogovor drži na platformi što duže.</li>
            <li data-sr="Slanje robe tek posle vidljivog priliva." data-en="Ship only after funds are clearly received.">Slanje robe tek posle vidljivog priliva.</li>
            <li data-sr="Linkove iz chata tretiraj kao visok rizik." data-en="Treat chat links as high risk.">Linkove iz chata tretiraj kao visok rizik.</li>
            <li data-sr="Kartica/OTP podaci ostaju privatni u svakom scenariju." data-en="Keep card/OTP data private in every scenario.">Kartica/OTP podaci ostaju privatni u svakom scenariju.</li>
            <li data-sr="Kad se pojavi „podrška“ kroz chat: pauza + provera kroz zvaničan kanal." data-en="If “support” appears in chat: pause + verify via official channel.">Kad se pojavi „podrška“ kroz chat: pauza + provera kroz zvaničan kanal.</li>
          </ol>
        </div>

        <div class="phase">
          <div class="label" data-sr="Kupac: siguran tok" data-en="Buyer: safe flow">Kupac: siguran tok</div>
          <ol class="steps">
            <li data-sr="Kapara ide samo uz realan mehanizam zaštite (platforma, escrow, lično preuzimanje)." data-en="Pay deposits only with real protection (platform escrow, safe method, in-person pickup).">Kapara ide samo uz realan mehanizam zaštite (platforma, escrow, lično preuzimanje).</li>
            <li data-sr="Traži dodatne slike, video, serijski broj, dokaz posedovanja." data-en="Ask for extra photos, video, serial number, proof of possession.">Traži dodatne slike, video, serijski broj, dokaz posedovanja.</li>
            <li data-sr="Privatan chat koristi samo kad postoji jak razlog i dobar trag." data-en="Move off-platform only with strong reason and traceability.">Privatan chat koristi samo kad postoji jak razlog i dobar trag.</li>
            <li data-sr="Uplata kroz link iz poruke ima visok rizik." data-en="Paying via a link inside a message is high risk.">Uplata kroz link iz poruke ima visok rizik.</li>
            <li data-sr="Ponuda „previše povoljno“ traži dodatnu proveru identiteta i predmeta." data-en="“Too good to be true” pricing calls for extra identity/item verification.">Ponuda „previše povoljno“ traži dodatnu proveru identiteta i predmeta.</li>
          </ol>
        </div>
      </div>
    </section>

    <!-- 9) POSLE ŠTETE: REDOSLED POTEZA -->
    <section class="card">
      <h2 data-sr="Posle štete: redosled poteza" data-en="After harm: action order">
        Posle štete: redosled poteza
      </h2>

      <div class="phase bad">
        <div class="label" data-sr="Ako je urađen unos kartice/OTP" data-en="If card/OTP was entered">Ako je urađen unos kartice/OTP</div>
        <ol class="steps">
          <li data-sr="Kontaktiraj banku i traži blokadu kartice i proveru transakcija." data-en="Contact your bank to block the card and review transactions.">Kontaktiraj banku i traži blokadu kartice i proveru transakcija.</li>
          <li data-sr="Sačuvaj link, domen, screenshot, vreme, iznos, razgovor." data-en="Save the link, domain, screenshots, time, amount, conversation.">Sačuvaj link, domen, screenshot, vreme, iznos, razgovor.</li>
          <li data-sr="Promeni lozinke za e-mail i marketplace nalog, uključi 2FA." data-en="Change email/marketplace passwords and enable 2FA.">Promeni lozinke za e-mail i marketplace nalog, uključi 2FA.</li>
        </ol>
      </div>

      <div class="phase bad">
        <div class="label" data-sr="Ako je roba poslata" data-en="If the item was shipped">Ako je roba poslata</div>
        <ol class="steps">
          <li data-sr="Kontaktiraj kurira/poštu radi pokušaja zaustavljanja ili povrata." data-en="Contact the courier/post service to attempt stop/return.">Kontaktiraj kurira/poštu radi pokušaja zaustavljanja ili povrata.</li>
          <li data-sr="Prijavi nalog platformi, sa dokazima i brojem pošiljke." data-en="Report the account to the platform with evidence and tracking.">Prijavi nalog platformi, sa dokazima i brojem pošiljke.</li>
          <li data-sr="Dokumentuj sve u jednom folderu radi prijave i daljih koraka." data-en="Document everything in one folder for reports and follow-ups.">Dokumentuj sve u jednom folderu radi prijave i daljih koraka.</li>
        </ol>
      </div>

      <div class="phase warn">
        <div class="label" data-sr="Ako je kapara uplaćena" data-en="If a deposit was paid">Ako je kapara uplaćena</div>
        <ol class="steps">
          <li data-sr="Zabeleži sve podatke o uplati i identitetu." data-en="Record all payment data and identity details.">Zabeleži sve podatke o uplati i identitetu.</li>
          <li data-sr="Traži povraćaj kroz zvaničan kanal banke ili platforme." data-en="Pursue recovery via your bank or platform official channels.">Traži povraćaj kroz zvaničan kanal banke ili platforme.</li>
          <li data-sr="Očekuj poruke o „povratu“ uz naknadu: tretiraj kao recovery talas." data-en="Expect “refund for a fee” messages: treat as recovery scam wave.">Očekuj poruke o „povratu“ uz naknadu: tretiraj kao recovery talas.</li>
        </ol>
      </div>
    </section>

    <!-- 10) IZVORI -->
    <section class="card sources" id="sources">
      <h2 data-sr="Izvori i dalje čitanje" data-en="Sources and further reading">
        Izvori i dalje čitanje
      </h2>
      <ul>
        <li><a href="https://consumer.ftc.gov/scams" target="_blank" rel="noopener noreferrer">FTC — Scam guidance</a></li>
        <li><a href="https://www.ncsc.gov.uk/guidance/phishing" target="_blank" rel="noopener noreferrer">UK NCSC — Phishing guidance</a></li>
      </ul>
    </section>
  `
};
