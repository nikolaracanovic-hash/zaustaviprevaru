window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["job-scam"] = {
  raw_html: `
    <!-- 1) UVOD -->
    <section class="card">
      <h2 data-sr="Uvod: kako rade lažne ponude posla" data-en="Introduction: how job scams work">
        Uvod: kako rade lažne ponude posla
      </h2>

      <p
        data-sr="Job scam koristi potrebu za poslom kao okidač. Ponuda izgleda primamljivo: visoka plata, rad od kuće, fleksibilno radno vreme, bez iskustva. Proces selekcije je brz i površan. Cilj je ili uplata naknade (obuka, oprema, administrativni troškovi) ili prikupljanje ličnih podataka za krađu identiteta. Često nema javnog oglasa na domenu firme koji možeš sam da otvoriš."
        data-en="Job scams use the need for work as a trigger. The offer looks attractive: high pay, work from home, flexible hours, no experience needed. The selection process is fast and superficial. The goal is either fee payment ("training", "equipment", "admin costs") or collecting personal data for identity theft. There is often no public vacancy on the company domain you can open yourself."
      >Job scam koristi potrebu za poslom kao okidač. Ponuda izgleda primamljivo: visoka plata, rad od kuće, fleksibilno radno vreme, bez iskustva. Proces selekcije je brz i površan. Cilj je ili uplata naknade (obuka, oprema, administrativni troškovi) ili prikupljanje ličnih podataka za krađu identiteta. Često nema javnog oglasa na domenu firme koji možeš sam da otvoriš.</p>

      <p
        data-sr="Šteta se realizuje kroz tri pravca: (1) advance-fee — naknade za nepostojeću obuku, opremu ili sertifikate, (2) krađa identiteta — lični podaci i dokumenti se koriste za otvaranje računa ili kredita, (3) money mule — žrtva nesvesno učestvuje u pranju novca prebacujući sredstva. Treći pravac ima i pravne posledice za žrtvu."
        data-en="Damage occurs through three paths: (1) advance-fee — charges for non-existent training, equipment, or certificates, (2) identity theft — personal data and documents used to open accounts or loans, (3) money mule — victim unknowingly participates in money laundering by moving funds. The third path has legal consequences for the victim."
      >Šteta se realizuje kroz tri pravca: (1) advance-fee — naknade za nepostojeću obuku, opremu ili sertifikate, (2) krađa identiteta — lični podaci i dokumenti se koriste za otvaranje računa ili kredita, (3) money mule — žrtva nesvesno učestvuje u pranju novca prebacujući sredstva. Treći pravac ima i pravne posledice za žrtvu.</p>

      <div class="callout"
        data-sr="<strong>Model:</strong> primamljiva ponuda → brza selekcija → prag (uplata ili podaci) → serija zahteva ili zloupotreba."
        data-en="<strong>Model:</strong> attractive offer → fast selection → threshold (payment or data) → series of demands or abuse."
      ><strong>Model:</strong> primamljiva ponuda → brza selekcija → prag (uplata ili podaci) → serija zahteva ili zloupotreba.</div>
    </section>

    <!-- 2) TIPOVI LAŽNIH PONUDA (PROŠIRENO) -->
    <section class="card">
      <h2 data-sr="Tipovi lažnih ponuda posla" data-en="Types of fake job offers">
        Tipovi lažnih ponuda posla
      </h2>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Rad od kuće / online posao" data-en="Work from home / online job">Rad od kuće / online posao</div>
          <ul class="bullets">
            <li data-sr="unos podataka, testiranje aplikacija, recenzije." data-en="&ldquo;data entry&rdquo;, &ldquo;app testing&rdquo;, &ldquo;reviews&rdquo;.">unos podataka, testiranje aplikacija, recenzije.</li>
            <li data-sr="obećana plata: 500–2000 EUR mesečno za par sati dnevno." data-en="promised pay: €500–2000/month for few hours daily.">obećana plata: 500–2000 EUR mesečno za par sati dnevno.</li>
            <li data-sr="Uplata se traži za pristup platformi ili startni paket." data-en="Payment is requested for &ldquo;platform access&rdquo; or a &ldquo;starter kit&rdquo;.">Uplata se traži za pristup platformi ili startni paket.</li>
            <li data-sr="Ponuđač obećava garantovanu zaradu i beskonačan broj pozicija." data-en="The offerer promises &ldquo;guaranteed income&rdquo; and &ldquo;unlimited positions&rdquo;.">Ponuđač obećava garantovanu zaradu i beskonačan broj pozicija.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Pozicija u inostranstvu" data-en="Position abroad">Pozicija u inostranstvu</div>
          <ul class="bullets">
            <li data-sr="rad u UAE, Nemačkoj, Kanadi, Kataru, Saudijskoj Arabiji." data-en="work in UAE, Germany, Canada, Qatar, Saudi Arabia.">rad u UAE, Nemačkoj, Kanadi, Kataru, Saudijskoj Arabiji.</li>
            <li data-sr="uplata za vizu, agencijske troškove, zdravstveni pregled, prevod dokumenata." data-en="payment for visa, agency fees, medical exam, document translation.">uplata za vizu, agencijske troškove, zdravstveni pregled, prevod dokumenata.</li>
            <li data-sr="kopije pasoša, ličnih dokumenata, diploma, CV sa detaljima." data-en="copies of passport, personal documents, diplomas, CV with details.">kopije pasoša, ličnih dokumenata, diploma, CV sa detaljima.</li>
            <li data-sr="kontakt: direktne poruke na LinkedIn, WhatsApp, lažni sajt agencije." data-en="contact: direct messages on LinkedIn, WhatsApp, fake agency site.">kontakt: direktne poruke na LinkedIn, WhatsApp, lažni sajt agencije.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Posao sa zadacima (click farming)" data-en="Task-based job (click farming)">Posao sa zadacima (click farming)</div>
          <ul class="bullets">
            <li data-sr="lajkovanje, praćenje, ostavljanje recenzija, gledanje videa." data-en="liking, following, leaving reviews, watching videos.">lajkovanje, praćenje, ostavljanje recenzija, gledanje videa.</li>
            <li data-sr="mali zadaci, mali iznosi (0.5–5 EUR) na početku." data-en="small tasks, small amounts (€0.5–5) initially.">mali zadaci, mali iznosi (0.5–5 EUR) na početku.</li>
            <li data-sr="Zatim traže depozit za veće zadatke ili nadogradnju na premium." data-en="Then they ask for a &ldquo;deposit for bigger tasks&rdquo; or an &ldquo;upgrade to premium&rdquo;.">Zatim traže depozit za veće zadatke ili nadogradnju na premium.</li>
            <li data-sr="platforma izgleda profesionalno, prikazuje lažne zarade drugih." data-en="platform looks professional, displays fake earnings of others.">platforma izgleda profesionalno, prikazuje lažne zarade drugih.</li>
            <li data-sr="cilj: izvući depozit, zadaci prestaju posle uplate." data-en="goal: extract deposit, tasks stop after payment.">cilj: izvući depozit, zadaci prestaju posle uplate.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Novčana mazga / finansijski agent" data-en="Money mule / financial agent">Novčana mazga / finansijski agent</div>
          <ul class="bullets">
            <li data-sr="posao: primanje i prosleđivanje novca kroz lični račun." data-en="job: receiving and forwarding money through personal account.">posao: primanje i prosleđivanje novca kroz lični račun.</li>
            <li data-sr="provizija od 5–15% za svaku transakciju." data-en="&ldquo;commission&rdquo; of 5–15% per transaction.">provizija od 5–15% za svaku transakciju.</li>
            <li data-sr="pranje novca sa pravnim posledicama: krivično gonjenje, zatvorska kazna." data-en="money laundering with legal consequences: prosecution, prison sentence.">pranje novca sa pravnim posledicama: krivično gonjenje, zatvorska kazna.</li>
            <li data-sr="Izgovor je transferi za međunarodne klijente ili privremeni problem sa bankom." data-en="The excuse is &ldquo;transfers for international clients&rdquo; or a &ldquo;temporary bank issue&rdquo;.">Izgovor je transferi za međunarodne klijente ili privremeni problem sa bankom.</li>
            <li data-sr="žrtva postaje prvi trag u istraži, novac ukraden iz fišing/ransomware napada." data-en="victim becomes first lead in investigation, money stolen from phishing/ransomware attacks.">žrtva postaje prvi trag u istraži, novac ukraden iz fišing/ransomware napada.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Lažne agencije za zapošljavanje" data-en="Fake recruitment agencies">Lažne agencije za zapošljavanje</div>
          <ul class="bullets">
            <li data-sr="ponuda: ekskluzivan pristup tržištu rada, partneri: poznate firme." data-en="offer: &ldquo;exclusive job market access&rdquo;, &ldquo;partners: known companies&rdquo;.">ponuda: ekskluzivan pristup tržištu rada, partneri: poznate firme.</li>
            <li data-sr="uplata: registracioni troškovi (50–500 EUR), background check, CV optimizacija." data-en="payment: registration fees (€50–500), background check, CV optimization.">uplata: registracioni troškovi (50–500 EUR), background check, CV optimizacija.</li>
            <li data-sr="agencija ima lažni sajt, telefon, adresu." data-en="agency has fake website, phone, address.">agencija ima lažni sajt, telefon, adresu.</li>
            <li data-sr="posle uplate: nema ponuda ili ponude za druge prevare (money mule, task scam)." data-en="after payment: no offers or offers for other scams (money mule, task scam).">posle uplate: nema ponuda ili ponude za druge prevare (money mule, task scam).</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Kripto / NFT / Web3 prevare sa poslom" data-en="Crypto / NFT / Web3 job scams">Kripto / NFT / Web3 prevare sa poslom</div>
          <ul class="bullets">
            <li data-sr="pozicije: menadžer zajednice, moderator na Discord-u/Telegram-u, tester NFT igre." data-en="positions: community manager, Discord/Telegram moderator, NFT game tester.">pozicije: menadžer zajednice, moderator na Discord-u/Telegram-u, tester NFT igre.</li>
            <li data-sr="plata u crypto (USDT, BTC, ETH), obećanje: 500–2000 USD mesečno." data-en="pay in crypto (USDT, BTC, ETH), promise: $500–2000/month.">plata u crypto (USDT, BTC, ETH), obećanje: 500–2000 USD mesečno.</li>
            <li data-sr="zahtev: kripto novčanik, verifikacioni dokumenti, lični podaci za plaćanje." data-en="requirement: wallet, verification documents, personal data for &ldquo;payment&rdquo;.">zahtev: kripto novčanik, verifikacioni dokumenti, lični podaci za plaćanje.</li>
            <li data-sr="Zatim slede fišing link, pražnjenje novčanika i krađa identiteta." data-en="Then follow a phishing link, a drained wallet, and identity theft.">Zatim slede fišing link, pražnjenje novčanika i krađa identiteta.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Pyramid/MLM prerušen u ponudu posla" data-en="Pyramid/MLM disguised as job offer">Pyramid/MLM prerušen u ponudu posla</div>
          <ul class="bullets">
            <li data-sr="ponuda: poslovni partner, samostalni saradnik, menadžer tima." data-en="offer: &ldquo;business partner&rdquo;, &ldquo;independent associate&rdquo;, &ldquo;team manager&rdquo;.">ponuda: poslovni partner, samostalni saradnik, menadžer tima.</li>
            <li data-sr="zarada: zavisna od regrutovanja drugih ili kupovine proizvoda." data-en="earnings: dependent on recruiting others or buying products.">zarada: zavisna od regrutovanja drugih ili kupovine proizvoda.</li>
            <li data-sr="početni paket: 100–500 EUR za startni inventar, obuku, licence." data-en="starter pack: €100–500 for &ldquo;starter inventory&rdquo;, &ldquo;training&rdquo;, &ldquo;licenses&rdquo;.">početni paket: 100–500 EUR za startni inventar, obuku, licence.</li>
            <li data-sr="model neodrživ: većina učesnika ne zaradi ništa ili manje od $1,000 godišnje (FTC 2024)." data-en="unsustainable model: most participants make nothing or less than $1,000/year (FTC 2024).">model neodrživ: većina učesnika ne zaradi ništa ili manje od $1,000 godišnje (FTC 2024).</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Prosleđivanje paketa / reshipping prevara" data-en="Package forwarding / reshipping scam">Prosleđivanje paketa / reshipping prevara</div>
          <ul class="bullets">
            <li data-sr="posao: primanje paketa i slanje na drugu adresu." data-en="job: receiving packages and sending to another address.">posao: primanje paketa i slanje na drugu adresu.</li>
            <li data-sr="Izgovor je da kompanija koristi individualce za logistiku i da je bez troškova za tebe." data-en="The excuse is that the &ldquo;company uses individuals for logistics&rdquo; and there are &ldquo;no costs for you&rdquo;.">Izgovor je da kompanija koristi individualce za logistiku i da je bez troškova za tebe.</li>
            <li data-sr="paketi: ukradena roba (kupljena sa ukradenim karticama)." data-en="packages: stolen goods (bought with stolen cards).">paketi: ukradena roba (kupljena sa ukradenim karticama).</li>
            <li data-sr="žrtva postaje saučesnik u prijemu ukradene robe, može biti krivično gonjena." data-en="victim becomes accomplice in receiving stolen goods, may be prosecuted.">žrtva postaje saučesnik u prijemu ukradene robe, može biti krivično gonjena.</li>
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
        <h3 class="phase-title" data-sr="Faza 1 — Ponuda: previše dobro da bi bilo istina" data-en="Phase 1 — Offer: too good to be true">
          Faza 1 — Ponuda: previše dobro da bi bilo istina
        </h3>

        <p
          data-sr="Ponuda stiže preko oglasa, društvenih mreža, direktne poruke, ili imejl-a. Uslovi su primamljivi: visoka plata, bez iskustva, fleksibilno vreme, rad od kuće. Legitimne firme retko nude sve ovo istovremeno."
          data-en="The offer arrives via ads, social media, direct message, or email. Terms are attractive: high pay, no experience, flexible hours, work from home. Legitimate companies rarely offer all this together."
        >Ponuda stiže preko oglasa, društvenih mreža, direktne poruke, ili imejl-a. Uslovi su primamljivi: visoka plata, bez iskustva, fleksibilno vreme, rad od kuće. Legitimne firme retko nude sve ovo istovremeno.</p>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> kandidat se prijavi ili odgovori na ponudu."
          data-en="<strong>Threshold:</strong> candidate applies or responds to offer."
        ><strong>Prag faze:</strong> kandidat se prijavi ili odgovori na ponudu.</div>
      </article>

      <!-- FAZA 2 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Selekcija: brza i površna" data-en="Phase 2 — Selection: fast and superficial">
          Faza 2 — Selekcija: brza i površna
        </h3>

        <p
          data-sr="Intervju se odvija preko chat-a ili kratkog poziva. Pitanja su generička. Odluka je brza: čestitamo, primljeni ste. Nema stvarne provere kvalifikacija jer cilj nije zapošljavanje."
         " data-en="The "interview" happens via chat or a short call. Questions are generic. Decision is fast: "congratulations, you're hired". There's no real qualification check because employment isn't the goal."
        >Intervju se odvija preko chat-a ili kratkog poziva. Pitanja su generička. Odluka je brza: čestitamo, primljeni ste. Nema stvarne provere kvalifikacija jer cilj nije zapošljavanje.</p>

        <ul class="bullets">
          <li data-sr="intervju preko WhatsApp/Telegram/Viber." data-en="interview via WhatsApp/Telegram/Viber.">intervju preko WhatsApp/Telegram/Viber.</li>
          <li data-sr="nema pitanja o iskustvu ili veštinama." data-en="no questions about experience or skills.">nema pitanja o iskustvu ili veštinama.</li>
          <li data-sr="primljeni ste bez provere referenci." data-en="&ldquo;you're hired&rdquo; without reference check.">primljeni ste bez provere referenci.</li>
        </ul>
      </article>

      <!-- FAZA 3 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Zahtev: uplata ili lični podaci" data-en="Phase 3 — Request: payment or personal data">
          Faza 3 — Zahtev: uplata ili lični podaci
        </h3>

        <p
          data-sr="Posle prijema stiže zahtev: uplata za obuku, opremu, sertifikat, administrativne troškove, ili detaljni lični podaci (kopija lične karte, pasoša, JMBG, bankovni podaci). Ovo je prag."
          data-en="After "acceptance" comes a request: payment for training, equipment, certificate, admin fees, or detailed personal data (ID copy, passport, personal ID number, bank details). This is the threshold."
        >Posle prijema stiže zahtev: uplata za obuku, opremu, sertifikat, administrativne troškove, ili detaljni lični podaci (kopija lične karte, pasoša, JMBG, bankovni podaci). Ovo je prag.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Tipični izgovori za uplatu" data-en="Typical payment excuses">Tipični izgovori za uplatu</div>
            <ul class="bullets">
              <li data-sr="obuka — 100–500 EUR." data-en="&ldquo;training&rdquo; — €100–500.">obuka — 100–500 EUR.</li>
              <li data-sr="oprema/softver — 50–200 EUR." data-en="&ldquo;equipment/software&rdquo; — €50–200.">oprema/softver — 50–200 EUR.</li>
              <li data-sr="sertifikat — 100–300 EUR." data-en="&ldquo;certificate&rdquo; — €100–300.">sertifikat — 100–300 EUR.</li>
              <li data-sr="administrativni troškovi." data-en="&ldquo;administrative costs&rdquo;.">administrativni troškovi.</li>
            </ul>
          </div>
          <div class="phase">
            <div class="label" data-sr="Traženi podaci" data-en="Requested data">Traženi podaci</div>
            <ul class="bullets">
              <li data-sr="kopija lične karte/pasoša." data-en="ID/passport copy.">kopija lične karte/pasoša.</li>
              <li data-sr="JMBG." data-en="personal ID number.">JMBG.</li>
              <li data-sr="bankovni podaci." data-en="bank details.">bankovni podaci.</li>
              <li data-sr="adresa, broj telefona." data-en="address, phone number.">adresa, broj telefona.</li>
            </ul>
          </div>
        </div>

        <div class="callout"
          data-sr="<strong>Prag:</strong> uplata naknade ili predaja ličnih dokumenata."
          data-en="<strong>Threshold:</strong> fee payment or handing over personal documents."
        ><strong>Prag:</strong> uplata naknade ili predaja ličnih dokumenata.</div>

        <div class="branch">
          <p><strong data-sr="Grananja" data-en="Branching">Grananja</strong></p>
          <ul class="bullets">
            <li><a href="advance-fee-fraud.html" data-sr="Uplata unapred" data-en="Advance-fee fraud">Uplata unapred</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
          </ul>
        </div>
      </article>

      <!-- FAZA 4 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Serija zahteva ili zloupotreba" data-en="Phase 4 — Series of demands or abuse">
          Faza 4 — Serija zahteva ili zloupotreba
        </h3>

        <p
          data-sr="Posle prve uplate slede nove: dodatna obuka, viši nivo sertifikata, oprema za napredne zadatke. Ako su predati podaci, mogu se koristiti za otvaranje računa, podizanje kredita, ili prodaju."
          data-en="After first payment, new ones follow: additional training, higher certificate level, equipment for "advanced tasks". If data was handed over, it may be used to open accounts, take loans, or be sold."
        >Posle prve uplate slede nove: dodatna obuka, viši nivo sertifikata, oprema za napredne zadatke. Ako su predati podaci, mogu se koristiti za otvaranje računa, podizanje kredita, ili prodaju.</p>
      </article>

      <!-- FAZA 5 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Money mule scenario" data-en="Phase 5 — Money mule scenario">
          Faza 5 — Money mule scenario
        </h3>

        <p
          data-sr="U nekim slučajevima posao stvarno počinje: primanje i prosleđivanje novca. Žrtva postaje nesvesni učesnik u pranju novca. Kada se istraga pokrene, žrtva je prva na udaru — novac je prošao kroz njen račun."
          data-en="In some cases, the "job" actually starts: receiving and forwarding money. The victim becomes an unwitting participant in money laundering. When investigation starts, the victim is first in line — money passed through their account."
        >U nekim slučajevima posao stvarno počinje: primanje i prosleđivanje novca. Žrtva postaje nesvesni učesnik u pranju novca. Kada se istraga pokrene, žrtva je prva na udaru — novac je prošao kroz njen račun.</p>

        <div class="callout"
          data-sr="<strong>Upozorenje:</strong> biti money mule ima pravne posledice čak i ako nisi znao pravu prirodu posla."
          data-en="<strong>Warning:</strong> being a money mule has legal consequences even if you didn't know the job's true nature."
        ><strong>Upozorenje:</strong> biti money mule ima pravne posledice čak i ako nisi znao pravu prirodu posla.</div>
      </article>
    </section>

    <!-- 4) CRVENE ZASTAVICE (50+ SIGNALA) -->
    <section class="card">
      <h2 data-sr="Crvene zastavice (50+ signala prepoznavanja)." data-en="Red flags (50+ recognition signals).">
        Crvene zastavice (50+ signala prepoznavanja)
      </h2>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="U ponudi posla" data-en="In job offer">U ponudi posla</div>
          <ul class="bullets">
            <li data-sr="plata 2-3x iznad trzisnog proeka za poziciju." data-en="salary 2-3x above market average for position.">plata 2-3x iznad trzisnog proeka za poziciju.</li>
            <li data-sr="bez iskustva, svi kvalifikovani, brz početak." data-en="no experience, everyone qualified, quick start">bez iskustva, svi kvalifikovani, brz početak.</li>
            <li data-sr="rad-zarada omjer ne funkcionise: 2h dnevno za 1500 EUR." data-en="work-pay ratio does not work: 2h daily for 1500 EUR.">rad-zarada omjer ne funkcionise: 2h dnevno za 1500 EUR.</li>
            <li data-sr="firma nema LinkedIn, sajt nov (< 3 meseca), adresa vodi u parkiraliste." data-en="company has no LinkedIn, site new (< 3 months), address leads to parking lot.">firma nema LinkedIn, sajt nov (< 3 meseca), adresa vodi u parkiraliste.</li>
            <li data-sr="ponuda stigla neočekivano, nisi se prijavljivao, profil našli smo te." data-en="offer arrived unexpectedly, you didn't apply, profile .we found you">ponuda stigla neočekivano, nisi se prijavljivao, profil našli smo te.</li>
            <li data-sr="imejl domen: gmail/yahoo umesto company.com." data-en="email domain: gmail/yahoo instead of company.com.">imejl domen: gmail/yahoo umesto company.com.</li>
            <li data-sr="gramaticke greske, los prevod, copy-paste tekst." data-en="grammatical errors, poor translation, copy-paste text.">gramaticke greske, los prevod, copy-paste tekst.</li>
            <li data-sr="hitnost: pozicija puni se brzo, samo prvih 50 kandidata." data-en="urgency: position filling fast, only first 50 candidates">hitnost: pozicija puni se brzo, samo prvih 50 kandidata.</li>
            <li data-sr="ponuđač koristi lažni logo poznate firme (Google, Amazon, Microsoft)." data-en="offerer uses fake logo of known company (Google, Amazon, Microsoft).">ponuđač koristi lažni logo poznate firme (Google, Amazon, Microsoft).</li>
            <li data-sr=",rad sa kriptovalutama, ,NFT projekat, ,DeFi platforma — bez proverljivog projekta." data-en="work with crypto, NFT project, DeFi platform — without verifiable project.">,rad sa kriptovalutama, ,NFT projekat, ,DeFi platforma — bez proverljivog projekta.</li>
            <li data-sr="ponuda na jeziku koji ne odgovara firmi (engleski za nemačku firmu)." data-en="offer in language that doesn't match company (English for .German company)">ponuda na jeziku koji ne odgovara firmi (engleski za nemačku firmu).</li>
            <li data-sr="ekskluzivna prilika, povlašćen pristup, zatvorena grupa." data-en="exclusive opportunity, privileged access, closed group">ekskluzivna prilika, povlašćen pristup, zatvorena grupa.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="U procesu selekcije" data-en="In selection process">U procesu selekcije</div>
          <ul class="bullets">
            <li data-sr="intervju samo preko WhatsApp/Telegram/Viber, odbijaju video poziv." data-en="interview only via WhatsApp/Telegram/Viber, refuse video call.">intervju samo preko WhatsApp/Telegram/Viber, odbijaju video poziv.</li>
            <li data-sr="pitanja generička: zašto želiš posao, koliko sati možeš raditi." data-en="questions generic: why do you want the job, how many hours can you work">pitanja generička: zašto želiš posao, koliko sati možeš raditi.</li>
            <li data-sr="odluka brza: 5–30 minuta posle prijave." data-en="decision fast: 5–30 minutes after application.">odluka brza: 5–30 minuta posle prijave.</li>
            <li data-sr="primljen si bez provere CV, referenci, diploma." data-en="you're hired without CV check, references, diplomas">primljen si bez provere CV, referenci, diploma.</li>
            <li data-sr="uplata tražena odmah: obuka sutra, startuj danas." data-en="payment requested immediately: training tomorrow, start today">uplata tražena odmah: obuka sutra, startuj danas.</li>
            <li data-sr="suma varira: 50–500 EUR, prilagođavaju iznos ako odbiješ." data-en="amount varies: €50–500, they adjust amount if you refuse.">suma varira: 50–500 EUR, prilagođavaju iznos ako odbiješ.</li>
            <li data-sr="izgovor za uplatu: obuka, oprema, softver, provera, registracija, dokumentacija." data-en="excuse for payment: training, equipment, software, verification, registration, documentation.">izgovor za uplatu: obuka, oprema, softver, provera, registracija, dokumentacija.</li>
            <li data-sr="platni metod: Western Union, MoneyGram, crypto, gift kartice — nepovrativ." data-en="payment method: Western Union, MoneyGram, crypto, gift cards — non-refundable.">platni metod: Western Union, MoneyGram, crypto, gift kartice — nepovrativ.</li>
            <li data-sr="dokaz poslat u screenshot ili pdf koji izgleda falsifikovan." data-en="proof sent as screenshot or pdf that looks falsified.">dokaz poslat u screenshot ili pdf koji izgleda falsifikovan.</li>
            <li data-sr="traženi dokumenti: pasoš, lična karta, JMBG, bankovni podaci PRE ugovora." data-en="requested documents: passport, ID card, personal number, bank details BEFORE contract.">traženi dokumenti: pasoš, lična karta, JMBG, bankovni podaci PRE ugovora.</li>
            <li data-sr="forma za provera identiteta koja traži više informacija nego legitimne platforme." data-en="provera identiteta form asking for more info than legitimate platforms.">forma za provera identiteta koja traži više informacija nego legitimne platforme.</li>
            <li data-sr="kontakt osoba menja priču: prvo obuka besplatna, zatim mala naknada." data-en="contact person changes story: first training free, then .small fee">kontakt osoba menja priču: prvo obuka besplatna, zatim mala naknada.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="U komunikaciji" data-en="In communication">U komunikaciji</div>
          <ul class="bullets">
            <li data-sr="Pritisak: ograničeno vreme, gubi se prilika, drugi kandidati čekaju." data-en="'Pressure: limited time, opportunity lost, other candidates waiting.">Pritisak: ograničeno vreme, gubi se prilika, drugi kandidati čekaju.</li>
            <li data-sr="izbegavaju direktne odgovore: detalji posle uplate, sve piše u ugovoru." data-en="avoid direct answers: details after payment, everything in contract">izbegavaju direktne odgovore: detalji posle uplate, sve piše u ugovoru.</li>
            <li data-sr="odbijaju da daju broj telefona firme, kancelariju, fizičku adresu." data-en="refuse to give company phone, office, physical address.">odbijaju da daju broj telefona firme, kancelariju, fizičku adresu.</li>
            <li data-sr="odgovaraju van radnog vremena (3–4 ujutru) ili prečesto (odmah, uvek dostupni)." data-en="respond outside work hours (3–4 AM) or too frequently (immediately, always available).">odgovaraju van radnog vremena (3–4 ujutru) ili prečesto (odmah, uvek dostupni).</li>
            <li data-sr="koriste script: jednake fraze za sve kandidate (provera na forumima)." data-en="use script: identical phrases for all candidates (check forums).">koriste script: jednake fraze za sve kandidate (provera na forumima).</li>
            <li data-sr="profil kontakt osobe: novi (< 1 mesec), malo veza, generička slika." data-en="contact person profile: new (< 1 month), few connections, generic photo.">profil kontakt osobe: novi (< 1 mesec), malo veza, generička slika.</li>
            <li data-sr="ne pominju detalje posla: tehnologije, tim, projekat, konkretne zadatke." data-en="don't mention job details: technologies, team, project, concrete tasks.">ne pominju detalje posla: tehnologije, tim, projekat, konkretne zadatke.</li>
            <li data-sr="ugovor ili ponuda: loše formatiran, greške, copy-paste sa drugih ponuda." data-en="contract or offer: poorly formatted, errors, copy-paste from other offers.">ugovor ili ponuda: loše formatiran, greške, copy-paste sa drugih ponuda.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Tehnički detalji" data-en="Technical details">Tehnički detalji</div>
          <ul class="bullets">
            <li data-sr="domen sajta: registrovan pre < 3 meseca (provera: WHOIS lookup)." data-en="site domain: registered < 3 months ago (check: WHOIS lookup).">domen sajta: registrovan pre < 3 meseca (provera: WHOIS lookup).</li>
            <li data-sr="sajt kopija poznatog sajta: logo, boje, layout isti (fišing)." data-en="site copy of known site: logo, colors, layout identical (phishing).">sajt kopija poznatog sajta: logo, boje, layout isti (fišing).</li>
            <li data-sr="SSL sertifikat postoji ALI to samo znači HTTPS, sign za sigurnost." data-en="SSL certificate exists BUT that only means HTTPS, not a security sign.">SSL sertifikat postoji ALI to samo znači HTTPS, sign za sigurnost.</li>
            <li data-sr="imejl header: sender IP iz druge zemlje, SPF/DKIM fail (spam check)." data-en="email header: sender IP from different country, SPF/DKIM fail (spam check).">imejl header: sender IP iz druge zemlje, SPF/DKIM fail (spam check).</li>
            <li data-sr="platna forma: nema HTTPS, traži card details direktno u chat." data-en="payment form: no HTTPS, asks for card details directly in chat.">platna forma: nema HTTPS, traži card details direktno u chat.</li>
            <li data-sr="LinkedIn profil firme: < 100 followera, nema postova, zaposleni nepostojeći." data-en="LinkedIn company profile: < 100 followers, no posts, employees non-existent.">LinkedIn profil firme: < 100 followera, nema postova, zaposleni nepostojeći.</li>
            <li data-sr="Google Maps: adresa firme je prazna kancelarija, parking, rezidencijalna zona." data-en="Google Maps: company address is empty office, parking, residential area.">Google Maps: adresa firme je prazna kancelarija, parking, rezidencijalna zona.</li>
            <li data-sr="app ili platforma: nije na Google Play/App Store, sideload APK tražen." data-en="app or platform: not on Google Play/App Store, sideload APK requested.">app ili platforma: nije na Google Play/App Store, sideload APK tražen.</li>
          </ul>
        </div>

        <div class="phase warn">
          <div class="label" data-sr="Kritični signali (STOP ODMAH)" data-en="Critical signals (STOP IMMEDIATELY).">Kritični signali (STOP ODMAH)</div>
          <ul class="bullets">
            <li data-sr="posao uključuje primanje i slanje novca kroz tvoj račun." data-en="job involves receiving and sending money through your account.">posao uključuje primanje i slanje novca kroz tvoj račun.</li>
            <li data-sr="posao uključuje primanje i slanje paketa na adrese koje ne poznaješ." data-en="job involves receiving and sending packages to addresses you don't know.">posao uključuje primanje i slanje paketa na adrese koje ne poznaješ.</li>
            <li data-sr="traže pristup tvom bankovnom računu, wallet-u, crypto exchange-u." data-en="they ask for access to your bank account, wallet, crypto exchange.">traže pristup tvom bankovnom računu, wallet-u, crypto exchange-u.</li>
            <li data-sr="traže da otvoriš račun na tvoje ime za potrebe firme." data-en="they ask you to open account in your name for .company needs">traže da otvoriš račun na tvoje ime za potrebe firme.</li>
            <li data-sr="traže da kupiš gift kartice i pošalješ im kodove." data-en="they ask you to buy gift cards and send them codes.">traže da kupiš gift kartice i pošalješ im kodove.</li>
            <li data-sr="traže da instalirate kontrola računara softver (TeamViewer, AnyDesk)." data-en="they ask you to install kontrola računara software (TeamViewer, AnyDesk).">traže da instalirate kontrola računara softver (TeamViewer, AnyDesk).</li>
          </ul>
        </div>
      </div>

      <div class="callout"
        data-sr="<strong>Osnovno pravilo:</strong> legitimni poslodavac ne traži uplatu, lične dokumente pre ugovora, ili bilo kakve transakcije kroz tvoj račun."
        data-en="<strong>Basic rule:</strong> legitimate employer doesn't ask for payment, personal documents before contract, or any transactions through your account."
      ><strong>Osnovno pravilo:</strong> legitimni poslodavac ne traži uplatu, lične dokumente pre ugovora, ili bilo kakve transakcije kroz tvoj račun.</div>
    </section>

    <!-- 5) IDENTITY THEFT: ŠTA DEŠAVA SA PODACIMA -->
    <section class="card">
      <h2 data-sr="Krađa identiteta: šta se dešava sa tvojim podacima" data-en="Identity theft: what happens to your data">
        Krađa identiteta: šta se dešava sa tvojim podacima
      </h2>

      <p
        data-sr="Lažne ponude posla prikupljaju lične podatke kroz forme za prijavu ili provera identiteta verifikaciju. Kopije pasoša, lične karte, JMBG, bankovni podaci, adresa, broj telefona — kompletna infrastruktura za krađu identiteta.">Europol — Money mules</a></li>
      </ul>
    </section>



`
};