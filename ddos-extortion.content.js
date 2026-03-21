window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["ddos-extortion"] = {
  raw_html: `
    <!-- 1) UVOD -->
    <section class="card">
      <h2 data-sr="Uvod: kako radi DDoS ucena" data-en="Introduction: how DDoS extortion works">
        Uvod: kako radi DDoS ucena
      </h2>

      <p
        data-sr="DDoS ucena je šema u kojoj napadač lansira ili preti distribuiranim napadom uskraćivanja usluge (DDoS) i zahteva uplatu da bi napad zaustavio ili sprečio. Napadač ne mora da probije sisteme organizacije — dovoljno je da može da ih učini nedostupnima za korisnike. Trošak zastoja (izgubljeni prihodi, reputaciona šteta, regulatorne kazne) napadač koristi kao osnov za cenu otkupa."
        data-en="DDoS extortion is a scheme in which an attacker launches or threatens a distributed denial-of-service (DDoS) attack and demands payment to stop or prevent it. The attacker does not need to breach the organization's systems — it is enough to make them unavailable to users. The cost of downtime (lost revenue, reputational damage, regulatory penalties) is what the attacker uses as the basis for the ransom price."
      >DDoS ucena je šema u kojoj napadač lansira ili preti distribuiranim napadom uskraćivanja usluge (DDoS) i zahteva uplatu da bi napad zaustavio ili sprečio. Napadač ne mora da probije sisteme organizacije — dovoljno je da može da ih učini nedostupnima za korisnike. Trošak zastoja (izgubljeni prihodi, reputaciona šteta, regulatorne kazne) napadač koristi kao osnov za cenu otkupa.</p>

      <p
        data-sr="Postoje dva oblika DDoS ucene: ucena bez prethodnog napada (napadač šalje pretnju sa dokazom kapaciteta — npr. referencom na prethodni napad neke organizacije — i traži uplatu pre napada) i ucena uz probni napad (napadač prvo lansira kratki napad da bi demonstrirao kapacitet, zatim šalje zahtev za uplatu uz rok). Drugi oblik je ubedljiviji i češći jer pretnja nije samo reč."
        data-en="DDoS extortion appears in two forms: extortion without a prior attack (the attacker sends a threat with proof of capacity — e.g., referencing a previous attack on another organization — and demands payment before launching) and extortion with a warning attack (the attacker first launches a brief attack to demonstrate capability, then sends a payment demand with a deadline). The second form is more convincing and more common because the threat is not just words."
      >Postoje dva oblika DDoS ucene: ucena bez prethodnog napada (napadač šalje pretnju sa dokazom kapaciteta — npr. referencom na prethodni napad neke organizacije — i traži uplatu pre napada) i ucena uz probni napad (napadač prvo lansira kratki napad da bi demonstrirao kapacitet, zatim šalje zahtev za uplatu uz rok). Drugi oblik je ubedljiviji i češći jer pretnja nije samo reč.</p>

      <div class="callout"
        data-sr="<strong>Model:</strong> identifikacija mete → probni napad ili pretnja → ucenjivačka poruka sa rokom → eskalacija napada ako se ne isplati → pregovori → uplata ili kontinuirani napad."
        data-en="<strong>Model:</strong> target identification → warning attack or threat → extortion message with deadline → attack escalation if unpaid → negotiations → payment or continued attack."
      ><strong>Model:</strong> identifikacija mete → probni napad ili pretnja → ucenjivačka poruka sa rokom → eskalacija napada ako se ne isplati → pregovori → uplata ili kontinuirani napad.</div>

      <div class="callout"
        data-sr="<strong>Prag:</strong> servisna disrupcija ili ucenjivačka poruka sa konkretnim zahtevom. Organizacija mora brzo da odluči: platiti, mitigovati napad ili ignorisati pretnju."
        data-en="<strong>Threshold:</strong> service disruption or extortion message with a concrete demand. The organization must quickly decide: pay, mitigate the attack, or ignore the threat."
      ><strong>Prag:</strong> servisna disrupcija ili ucenjivačka poruka sa konkretnim zahtevom. Organizacija mora brzo da odluči: platiti, mitigovati napad ili ignorisati pretnju.</div>
    </section>

    <!-- 2) KAKO GENERALNO RADI -->
    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika napada i ucene" data-en="How it works: attack and extortion mechanics">
        Kako generalno radi: mehanika napada i ucene
      </h2>

      <p
        data-sr="DDoS napad funkcioniše tako što veliki broj kompromitovanih uređaja (botnet) šalje saobraćaj ka sistemu mete, preopterećujući mrežu ili servere do tačke kada legitimni korisnici ne mogu da pristupe servisu. Napadači iznajmljuju botnet kapacitet (DDoS-as-a-service, cena od $50–$500 na dan), što znači da praktično svako sa dovoljno novca može da lansira napad. Cena mitigacije za žrtvu je obično višestruko veća od troška napada."
        data-en="A DDoS attack works by directing a large number of compromised devices (botnet) to send traffic toward the target's system, overwhelming the network or servers until legitimate users cannot access the service. Attackers rent botnet capacity (DDoS-as-a-service, costing $50–$500 per day), meaning practically anyone with enough money can launch an attack. The mitigation cost for the victim is usually several times higher than the attack cost."
      >DDoS napad funkcioniše tako što veliki broj kompromitovanih uređaja (botnet) šalje saobraćaj ka sistemu mete, preopterećujući mrežu ili servere do tačke kada legitimni korisnici ne mogu da pristupe servisu. Napadači iznajmljuju botnet kapacitet (DDoS-as-a-service, cena od $50–$500 na dan), što znači da praktično svako sa dovoljno novca može da lansira napad. Cena mitigacije za žrtvu je obično višestruko veća od troška napada.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gradi pritisak na organizaciju" data-en="What builds pressure on the organization">Šta gradi pritisak na organizaciju</div>
          <ul class="bullets">
            <li data-sr="servisna disrupcija čiji svaki sat direktno košta organizaciju." data-en="service disruption where every hour directly costs the organization.">servisna disrupcija čiji svaki sat direktno košta organizaciju.</li>
            <li data-sr="kratki rokovi koji prisiljavaju na brzu odluku bez prave procene." data-en="short deadlines that force a quick decision without proper assessment.">kratki rokovi koji prisiljavaju na brzu odluku bez prave procene.</li>
            <li data-sr="eskalacija napada ako se ne isplati ili ako se mitigacija prepozna." data-en="attack escalation if not paid or if mitigation is detected.">eskalacija napada ako se ne isplati ili ako se mitigacija prepozna.</li>
            <li data-sr="pretnja napadima na više vektora istovremeno (volumetrički + aplikativni)." data-en="threat of multi-vector attacks simultaneously (volumetric + application layer).">pretnja napadima na više vektora istovremeno (volumetrički + aplikativni).</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Ko su tipični napadači" data-en="Who are typical attackers">Ko su tipični napadači</div>
          <ul class="bullets">
            <li data-sr="RDDoS grupe sa ustaljenim imenima i dokazanom istorijom napada." data-en="RDDoS groups with established names and a proven attack history.">RDDoS grupe sa ustaljenim imenima i dokazanom istorijom napada.</li>
            <li data-sr="imitatori koji kopiraju ime poznate grupe bez stvarnog kapaciteta." data-en="imitators who copy the name of a known group without real capacity.">imitatori koji kopiraju ime poznate grupe bez stvarnog kapaciteta.</li>
            <li data-sr="napadači koji kombinuju DDoS sa ransomwareom ili iznudom podataka." data-en="attackers who combine DDoS with ransomware or data extortion.">napadači koji kombinuju DDoS sa ransomwareom ili iznudom podataka.</li>
            <li data-sr="konkurenti koji iznajmljuju DDoS servis kao poslovni alat." data-en="competitors who rent DDoS services as a business tool.">konkurenti koji iznajmljuju DDoS servis kao poslovni alat.</li>
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
        data-sr="Faze su prikazane kao operativni tok: šta meta vidi, šta se traži, koji momenti guraju sledeći korak, gde se tok grana."
        data-en="Phases are shown as an operational flow: what the target sees, what is demanded, which moments push the next step, and where the flow branches."
      >Faze su prikazane kao operativni tok: šta meta vidi, šta se traži, koji momenti guraju sledeći korak, gde se tok grana.</p>

      <!-- FAZA 1 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Identifikacija mete i priprema" data-en="Phase 1 — Target identification and preparation">
          Faza 1 — Identifikacija mete i priprema
        </h3>

        <p
          data-sr="Napadač bira metu na osnovu zavisnosti od online dostupnosti (e-commerce, fintech, igraonice, finansijske institucije, media streaming) i procenjene sposobnosti plaćanja. Organizacije sa visokim prihodom po satu i bez DDoS zaštite su primarne mete. Napadač proverava IP infrastrukturu, brzinu veze i eventualnu zaštitu."
          data-en="The attacker selects targets based on dependence on online availability (e-commerce, fintech, gaming, financial institutions, media streaming) and estimated payment capacity. Organizations with high hourly revenue and without DDoS protection are primary targets. The attacker checks IP infrastructure, connection speeds, and any existing protection."
        >Napadač bira metu na osnovu zavisnosti od online dostupnosti (e-commerce, fintech, igraonice, finansijske institucije, media streaming) i procenjene sposobnosti plaćanja. Organizacije sa visokim prihodom po satu i bez DDoS zaštite su primarne mete. Napadač proverava IP infrastrukturu, brzinu veze i eventualnu zaštitu.</p>

        <ul class="bullets">
          <li data-sr="signal: skeniranje mreže iz anonimnih izvora pre napada." data-en="signal: network scanning from anonymous sources before the attack.">signal: skeniranje mreže iz anonimnih izvora pre napada.</li>
          <li data-sr="signal: kratki probni pulsevi saobraćaja koji izgledaju kao anomalije." data-en="signal: brief test traffic pulses that appear as anomalies.">signal: kratki probni pulsevi saobraćaja koji izgledaju kao anomalije.</li>
        </ul>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> napadač ima potvrdu da je meta ranjiva i da bi zastoj prouzrokovao merljivu finansijsku štetu."
          data-en="<strong>Threshold:</strong> attacker confirms the target is vulnerable and that downtime would cause measurable financial damage."
        ><strong>Prag faze:</strong> napadač ima potvrdu da je meta ranjiva i da bi zastoj prouzrokovao merljivu finansijsku štetu.</div>
      </article>

      <!-- FAZA 2 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Probni napad i ucenjivačka poruka" data-en="Phase 2 — Warning attack and extortion message">
          Faza 2 — Probni napad i ucenjivačka poruka
        </h3>

        <p
          data-sr="Napadač lansira kratak DDoS napad (najčešće 15–30 minuta) koji uzrokuje primetnu servisnu degradaciju ili potpuni zastoj. Odmah zatim, ili pre napada u nekim varijantama, šalje ucenjivačku poruku sa iznosom i rokom. Kratki napad služi kao demonstracija i dokaz da pretnja nije prazna."
          data-en="The attacker launches a brief DDoS attack (typically 15–30 minutes) that causes noticeable service degradation or complete outage. Immediately after, or before the attack in some variants, an extortion message is sent with an amount and deadline. The brief attack serves as a demonstration and proof that the threat is not empty."
        >Napadač lansira kratak DDoS napad (najčešće 15–30 minuta) koji uzrokuje primetnu servisnu degradaciju ili potpuni zastoj. Odmah zatim, ili pre napada u nekim varijantama, šalje ucenjivačku poruku sa iznosom i rokom. Kratki napad služi kao demonstracija i dokaz da pretnja nije prazna.</p>

        <ul class="bullets">
          <li data-sr="poruka naznačava konkretnu grupu ili pseudonim koji meta može proveriti online." data-en="message identifies a specific group or pseudonym the target can verify online.">poruka naznačava konkretnu grupu ili pseudonim koji meta može proveriti online.</li>
          <li data-sr="iznos je izračunat u odnosu na procenjeni trošak zastoja za metu." data-en="amount is calculated relative to the estimated downtime cost for the target.">iznos je izračunat u odnosu na procenjeni trošak zastoja za metu.</li>
          <li data-sr="rok je kratak: 24–72 sata, uz pretnju trajnog ili ponavljanog napada." data-en="deadline is short: 24–72 hours, with a threat of a permanent or repeated attack.">rok je kratak: 24–72 sata, uz pretnju trajnog ili ponavljanog napada.</li>
        </ul>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> organizacija prima ucenjivačku poruku i saobraćajni log potvrđuje probni napad."
          data-en="<strong>Threshold:</strong> the organization receives the extortion message and traffic logs confirm the warning attack."
        ><strong>Prag faze:</strong> organizacija prima ucenjivačku poruku i saobraćajni log potvrđuje probni napad.</div>
      </article>

      <!-- FAZA 3 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Eskalacija napada ili pritisak rokom" data-en="Phase 3 — Attack escalation or deadline pressure">
          Faza 3 — Eskalacija napada ili pritisak rokom
        </h3>

        <p
          data-sr="Ako rok prođe bez isplate, napadač ima dve opcije: lansira puni napad ili prolongira pretnju uz povećanje iznosa. Potpuni napad može biti volumetrički (preplavljuje mrežnu propusnost), protokolarni (iscrpljuje resurse mrežne opreme) ili aplikativni (ciljane HTTP zahteve ka određenim funkcijama). Svaka vrsta zahteva različitu mitigaciju."
          data-en="If the deadline passes without payment, the attacker has two options: launch the full attack or extend the threat while increasing the amount. A full attack can be volumetric (floods network bandwidth), protocol-based (exhausts network equipment resources), or application-layer (targeted HTTP requests against specific functions). Each type requires different mitigation."
        >Ako rok prođe bez isplate, napadač ima dve opcije: lansira puni napad ili prolongira pretnju uz povećanje iznosa. Potpuni napad može biti volumetrički (preplavljuje mrežnu propusnost), protokolarni (iscrpljuje resurse mrežne opreme) ili aplikativni (ciljane HTTP zahteve ka određenim funkcijama). Svaka vrsta zahteva različitu mitigaciju.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Tipovi DDoS napada" data-en="DDoS attack types">Tipovi DDoS napada</div>
            <ul class="bullets">
              <li data-sr="volumetrički napad: preplavljuje propusnost, meri se u Gbps." data-en="volumetric attack: floods bandwidth, measured in Gbps.">volumetrički napad: preplavljuje propusnost, meri se u Gbps.</li>
              <li data-sr="protokolarni napad: SYN flood, iscrpljuje resurse firewalla i load balancera." data-en="protocol attack: SYN flood, exhausts firewall and load balancer resources.">protokolarni napad: SYN flood, iscrpljuje resurse firewalla i load balancera.</li>
              <li data-sr="aplikativni napad: HTTP/HTTPS zahtevi koji opterećuju specifične funkcije." data-en="application attack: HTTP/HTTPS requests targeting specific functions.">aplikativni napad: HTTP/HTTPS zahtevi koji opterećuju specifične funkcije.</li>
              <li data-sr="amplifikacioni napad: koristi treće strane (DNS, NTP) za multiplikaciju saobraćaja." data-en="amplification attack: uses third parties (DNS, NTP) to multiply traffic.">amplifikacioni napad: koristi treće strane (DNS, NTP) za multiplikaciju saobraćaja.</li>
            </ul>
          </div>

          <div class="phase">
            <div class="label" data-sr="Šta organizacija vidi tokom napada" data-en="What the organization sees during the attack">Šta organizacija vidi tokom napada</div>
            <ul class="bullets">
              <li data-sr="servis postaje spor ili potpuno nedostupan za korisnike." data-en="service becomes slow or completely unavailable to users.">servis postaje spor ili potpuno nedostupan za korisnike.</li>
              <li data-sr="mrežna oprema ili serveri pokazuju ekstremno opterećenje." data-en="network equipment or servers show extreme load.">mrežna oprema ili serveri pokazuju ekstremno opterećenje.</li>
              <li data-sr="enormna količina zahteva iz geografski raštrkanih IP adresa." data-en="enormous volume of requests from geographically scattered IP addresses.">enormna količina zahteva iz geografski raštrkanih IP adresa.</li>
              <li data-sr="legalni korisnici ne mogu da se povežu ili dobijaju timeout greške." data-en="legitimate users cannot connect or receive timeout errors.">legalni korisnici ne mogu da se povežu ili dobijaju timeout greške.</li>
            </ul>
          </div>
        </div>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="ransomware-orgs.html" data-sr="Ransomware napadi na organizacije" data-en="Ransomware attacks on organizations">Ransomware napadi na organizacije</a></li>
            <li><a href="data-breach-extortion.html" data-sr="Ucena nakon krađe podataka" data-en="Data breach extortion">Ucena nakon krađe podataka</a></li>
          </ul>
        </div>
      </article>

      <!-- FAZA 4 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Pregovori i odluka" data-en="Phase 4 — Negotiations and decision">
          Faza 4 — Pregovori i odluka
        </h3>

        <p
          data-sr="Ako organizacija reaguje i kontaktira napadača, napadač može ponuditi smanjenje iznosa ili produženje roka kao dobru volju. Cilj je uplata pre nego što mitigacija stupi na snagu. Ako organizacija angažuje DDoS mitigacijski servis, napadač može povećati intenzitet ili promeniti vektore napada da zaobiđe mitigaciju."
          data-en="If the organization responds and contacts the attacker, the attacker may offer a reduced amount or deadline extension as a goodwill gesture. The goal is payment before mitigation takes effect. If the organization engages a DDoS mitigation service, the attacker may increase attack intensity or change attack vectors to bypass mitigation."
        >Ako organizacija reaguje i kontaktira napadača, napadač može ponuditi smanjenje iznosa ili produženje roka kao dobru volju. Cilj je uplata pre nego što mitigacija stupi na snagu. Ako organizacija angažuje DDoS mitigacijski servis, napadač može povećati intenzitet ili promeniti vektore napada da zaobiđe mitigaciju.</p>

        <ul class="bullets">
          <li data-sr="uplata ne garantuje permanentni prestanak napada od iste grupe." data-en="payment does not guarantee a permanent end to attacks from the same group.">uplata ne garantuje permanentni prestanak napada od iste grupe.</li>
          <li data-sr="uplata može signalizirati drugima da je organizacija platila i da će platiti ponovo." data-en="payment can signal to others that the organization paid and will pay again.">uplata može signalizirati drugima da je organizacija platila i da će platiti ponovo.</li>
          <li data-sr="imitatori koji čuju za napad mogu poslati sopstvene ucenjivačke poruke." data-en="imitators who hear about the attack may send their own extortion messages.">imitatori koji čuju za napad mogu poslati sopstvene ucenjivačke poruke.</li>
        </ul>

        <div class="callout"
          data-sr="<strong>Indikator:</strong> organizacija koja plaća DDoS ucenu postaje vidljiva meta za ponovljene zahteve od iste ili različitih grupa."
          data-en="<strong>Indicator:</strong> an organization that pays DDoS extortion becomes a visible target for repeated demands from the same or different groups."
        ><strong>Indikator:</strong> organizacija koja plaća DDoS ucenu postaje vidljiva meta za ponovljene zahteve od iste ili različitih grupa.</div>
      </article>

      <!-- FAZA 5 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Ponavljanje ili mirovanje" data-en="Phase 5 — Repetition or dormancy">
          Faza 5 — Ponavljanje ili mirovanje
        </h3>

        <p
          data-sr="Posle isplate napadač može prestati sa napadima ili se vratiti sa novim zahtevima. Ako organizacija aktivira mitigaciju, napadač najčešće prelazi na sledeću metu — trošak napada je nizak, pa nema smisla trošiti botnet kapacitet na metu koja se uspešno brani. U slučaju mirovanja, napadač se vraća periodično, posebno u vrhunskim sezoni poslovanja."
          data-en="After payment, the attacker may stop attacks or return with new demands. If the organization activates mitigation, the attacker typically moves to the next target — attack costs are low so there is no point spending botnet capacity on a target that defends successfully. During dormancy, the attacker returns periodically, especially during peak business seasons."
        >Posle isplate napadač može prestati sa napadima ili se vratiti sa novim zahtevima. Ako organizacija aktivira mitigaciju, napadač najčešće prelazi na sledeću metu — trošak napada je nizak, pa nema smisla trošiti botnet kapacitet na metu koja se uspešno brani. U slučaju mirovanja, napadač se vraća periodično, posebno u vrhunskim sezoni poslovanja.</p>

        <div class="callout"
          data-sr="<strong>Filter:</strong> mitigacija napada je efektivniji odgovor od isplate, jer smanjuje atraktivnost mete. Isplata povećava atraktivnost."
          data-en="<strong>Filter:</strong> attack mitigation is a more effective response than payment, as it reduces target attractiveness. Payment increases attractiveness."
        ><strong>Filter:</strong> mitigacija napada je efektivniji odgovor od isplate, jer smanjuje atraktivnost mete. Isplata povećava atraktivnost.</div>
      </article>
    </section>

    <!-- 4) CRVENE ZASTAVICE -->
    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="servis postaje spor ili nedostupan bez poznate tehničke greške." data-en="service becomes slow or unavailable without a known technical error.">servis postaje spor ili nedostupan bez poznate tehničke greške.</li>
        <li data-sr="enormna količina saobraćaja iz geografski raštrkanih IP adresa u kratkom periodu." data-en="enormous traffic volume from geographically scattered IP addresses in a short period.">enormna količina saobraćaja iz geografski raštrkanih IP adresa u kratkom periodu.</li>
        <li data-sr="ucenjivačka poruka stiže uz tvrdnju da su napadači odgovorni za disrupciju." data-en="extortion message arrives claiming the attackers are responsible for the disruption.">ucenjivačka poruka stiže uz tvrdnju da su napadači odgovorni za disrupciju.</li>
        <li data-sr="poruka sadrži kriptovalutnu adresu i kratak rok za uplatu." data-en="message contains a cryptocurrency address and a short payment deadline.">poruka sadrži kriptovalutnu adresu i kratak rok za uplatu.</li>
        <li data-sr="napadač se identifikuje kao poznata RDDoS grupa sa verifikabilnom historijom." data-en="attacker identifies as a known RDDoS group with a verifiable history.">napadač se identifikuje kao poznata RDDoS grupa sa verifikabilnom historijom.</li>
        <li data-sr="kratki probni napad prethodi ucenjivačkoj poruci." data-en="a brief warning attack precedes the extortion message.">kratki probni napad prethodi ucenjivačkoj poruci.</li>
        <li data-sr="napadač preti napadima u vrhunskim sezoni ako se ne isplati sada." data-en="attacker threatens attacks during peak season if not paid now.">napadač preti napadima u vrhunskim sezoni ako se ne isplati sada.</li>
      </ul>
    </section>

    <!-- 5) PROVERE -->
    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>

      <p
        data-sr="Cilj provera je utvrditi da li je napadač zaista sposoban za napad koji preti, ili je pretnja prazna imitacija. Ovo menja ekonomičnost odgovora."
        data-en="The goal of checks is to determine whether the attacker is genuinely capable of the threatened attack, or whether the threat is an empty imitation. This changes the economics of the response."
      >Cilj provera je utvrditi da li je napadač zaista sposoban za napad koji preti, ili je pretnja prazna imitacija. Ovo menja ekonomičnost odgovora.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Procena pretnje" data-en="Threat assessment">Procena pretnje</div>
          <ul class="bullets">
            <li data-sr="da li je probni napad dokumentovan u saobraćajnim logovima?" data-en="is the warning attack documented in traffic logs?">da li je probni napad dokumentovan u saobraćajnim logovima?</li>
            <li data-sr="da li je napadačeva grupa poznata i da li ima verifikabilnu istoriju?" data-en="is the attacker group known and does it have a verifiable history?">da li je napadačeva grupa poznata i da li ima verifikabilnu istoriju?</li>
            <li data-sr="da li su volumeni napada u skladu sa najavom ili su manji?" data-en="are attack volumes consistent with the announcement or smaller?">da li su volumeni napada u skladu sa najavom ili su manji?</li>
            <li data-sr="da li je pretnja poslata masovno ili specifično za ovu organizaciju?" data-en="was the threat sent massively or specifically targeting this organization?">da li je pretnja poslata masovno ili specifično za ovu organizaciju?</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Opcije odgovora" data-en="Response options">Opcije odgovora</div>
          <ul class="bullets">
            <li data-sr="da li organizacija ima CDN ili DDoS mitigacijski servis aktiviran?" data-en="does the organization have an active CDN or DDoS mitigation service?">da li organizacija ima CDN ili DDoS mitigacijski servis aktiviran?</li>
            <li data-sr="da li ISP može da filtrira saobraćaj tokom napada?" data-en="can the ISP filter traffic during an attack?">da li ISP može da filtrira saobraćaj tokom napada?</li>
            <li data-sr="da li postoji plan kapaciteta za apsorbovanje attack saobraćaja?" data-en="is there a capacity plan for absorbing attack traffic?">da li postoji plan kapaciteta za apsorbovanje attack saobraćaja?</li>
            <li data-sr="da li cyber osiguranje pokriva troškove DDoS mitigacije i zastoja?" data-en="does cyber insurance cover DDoS mitigation and downtime costs?">da li cyber osiguranje pokriva troškove DDoS mitigacije i zastoja?</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 6) CHECKLISTA -->
    <section class="card">
      <h2 data-sr="Checklista: 10 pitanja pre odluke o odgovoru na DDoS ucenu" data-en="Checklist: 10 questions before deciding on DDoS extortion response">Checklista: 10 pitanja pre odluke o odgovoru na DDoS ucenu</h2>

      <p class="muted"
        data-sr="Odgovor na DDoS ucenu mora biti brz ali ne i paničan. Ovaj blok daje okvir za smirenu procenu."
        data-en="The response to DDoS extortion must be fast but not panicked. This block provides a framework for calm assessment."
      >Odgovor na DDoS ucenu mora biti brz ali ne i paničan. Ovaj blok daje okvir za smirenu procenu.</p>

      <ul class="bullets">
        <li data-sr="Da li saobraćajni logovi potvrđuju probni napad ili je to samo pretnja bez dokaza?" data-en="Do traffic logs confirm a warning attack, or is it only a threat without evidence?">Da li saobraćajni logovi potvrđuju probni napad ili je to samo pretnja bez dokaza?</li>
        <li data-sr="Da li je napadačeva grupa poznata i da li ima istoriju ispoštovanih obećanja posle isplate?" data-en="Is the attacker group known and does it have a history of honoring promises after payment?">Da li je napadačeva grupa poznata i da li ima istoriju ispoštovanih obećanja posle isplate?</li>
        <li data-sr="Da li je mitigacijski servis (CDN, scrubbing centar) dostupan i koliko brzo se aktivira?" data-en="Is a mitigation service (CDN, scrubbing center) available and how quickly can it be activated?">Da li je mitigacijski servis (CDN, scrubbing centar) dostupan i koliko brzo se aktivira?</li>
        <li data-sr="Koji je trošak zastoja po satu u poređenju sa zahtevom za otkupom?" data-en="What is the downtime cost per hour compared to the ransom demand?">Koji je trošak zastoja po satu u poređenju sa zahtevom za otkupom?</li>
        <li data-sr="Da li uplata garantuje prestanak napada ili samo privremeno mirovanje?" data-en="Does payment guarantee an end to attacks or only temporary dormancy?">Da li uplata garantuje prestanak napada ili samo privremeno mirovanje?</li>
        <li data-sr="Da li će isplata signalizirati ostalim napadačima da je organizacija platila?" data-en="Will payment signal to other attackers that the organization paid?">Da li će isplata signalizirati ostalim napadačima da je organizacija platila?</li>
        <li data-sr="Da li je incident prijavljen policiji i CERT-u?" data-en="Has the incident been reported to police and CERT?">Da li je incident prijavljen policiji i CERT-u?</li>
        <li data-sr="Da li postoji plan komunikacije prema klijentima o eventualnom zastoju?" data-en="Is there a communication plan for clients about a potential outage?">Da li postoji plan komunikacije prema klijentima o eventualnom zastoju?</li>
        <li data-sr="Da li ISP može privremeno da filtrira saobraćaj pre aktivacije mitigacije?" data-en="Can the ISP temporarily filter traffic before mitigation is activated?">Da li ISP može privremeno da filtrira saobraćaj pre aktivacije mitigacije?</li>
        <li data-sr="Da li je ovo masovna pretnja poslata hiljadama organizacija ili ciljana?" data-en="Is this a mass threat sent to thousands of organizations or a targeted one?">Da li je ovo masovna pretnja poslata hiljadama organizacija ili ciljana?</li>
      </ul>
    </section>

    <!-- 7) AKO SUMNJA KRENE -->
    <section class="card">
      <h2 data-sr="Ako DDoS ucena stigne: redosled poteza" data-en="If a DDoS extortion arrives: action order">Ako DDoS ucena stigne: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="sačuvati poruku i pregledati saobraćajne logove za potvrdu probnog napada." data-en="save the message and review traffic logs to confirm the warning attack.">sačuvati poruku i pregledati saobraćajne logove za potvrdu probnog napada.</li>
        <li data-sr="angažovati DDoS mitigacijski servis ili kontaktirati ISP za filtriranje saobraćaja." data-en="engage a DDoS mitigation service or contact the ISP for traffic filtering.">angažovati DDoS mitigacijski servis ili kontaktirati ISP za filtriranje saobraćaja.</li>
        <li data-sr="prijaviti incident policiji i CERT-u — ne čekati kraj napada." data-en="report the incident to police and CERT — do not wait for the attack to end.">prijaviti incident policiji i CERT-u — ne čekati kraj napada.</li>
        <li data-sr="proceniti trošak mitigacije nasuprot zahteva za otkupom uz konsultaciju pravnika." data-en="assess mitigation cost versus ransom demand with legal consultation.">proceniti trošak mitigacije nasuprot zahteva za otkupom uz konsultaciju pravnika.</li>
        <li data-sr="aktivirati plan komunikacije prema klijentima i partnerima." data-en="activate the communications plan for clients and partners.">aktivirati plan komunikacije prema klijentima i partnerima.</li>
        <li data-sr="dokumentovati sve napadačke aktivnosti za eventualnu krivičnu prijavu." data-en="document all attacker activity for a potential criminal complaint.">dokumentovati sve napadačke aktivnosti za eventualnu krivičnu prijavu.</li>
      </ol>

      <div class="callout"
        data-sr="<strong>Zašto ovaj redosled radi:</strong> mitigacija smanjuje finansijsku računicu napada za napadača, prijava daje šansu za detekciju i buduću zaštitu, a dokumentacija gradi osnov za krivičnu prijavu."
        data-en="<strong>Why this order works:</strong> mitigation reduces the financial calculus of the attack for the attacker, reporting gives a chance for detection and future protection, and documentation builds the basis for a criminal complaint."
      ><strong>Zašto ovaj redosled radi:</strong> mitigacija smanjuje finansijsku računicu napada za napadača, prijava daje šansu za detekciju i buduću zaštitu, a dokumentacija gradi osnov za krivičnu prijavu.</div>
    </section>

    <!-- 8) AKO POMAŽEŠ NEKOME -->
    <section class="card">
      <h2 data-sr="Ako pomažeš organizaciji koja prima DDoS ucenu" data-en="If you are helping an organization receiving DDoS extortion">Ako pomažeš organizaciji koja prima DDoS ucenu</h2>

      <p
        data-sr="Kod DDoS ucene pritisak je drugačiji nego kod ransomware-a: napad je aktivan i vidljiv, a svaki minut zastoja košta. Najkorisnije je odmah usmeriti tim na procenu sposobnosti napadača i dostupnost mitigacije, a ne na pitanje isplata ili ne."
        data-en="In DDoS extortion, the pressure is different from ransomware: the attack is active and visible, and every minute of downtime costs money. The most useful approach is to immediately direct the team toward assessing attacker capability and mitigation availability, rather than the payment question."
      >Kod DDoS ucene pritisak je drugačiji nego kod ransomware-a: napad je aktivan i vidljiv, a svaki minut zastoja košta. Najkorisnije je odmah usmeriti tim na procenu sposobnosti napadača i dostupnost mitigacije, a ne na pitanje isplata ili ne.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li saobraćajni logovi potvrđuju probni napad pre poruke?" data-en="Do traffic logs confirm a warning attack before the message?">Da li saobraćajni logovi potvrđuju probni napad pre poruke?</li>
            <li data-sr="Da li je mitigacijski servis dostupan i za koliko vremena može biti aktivan?" data-en="Is a mitigation service available and how quickly can it be active?">Da li je mitigacijski servis dostupan i za koliko vremena može biti aktivan?</li>
            <li data-sr="Da li je ovo masovna pretnja ili ciljani napad na ovu organizaciju?" data-en="Is this a mass threat or a targeted attack on this organization?">Da li je ovo masovna pretnja ili ciljani napad na ovu organizaciju?</li>
            <li data-sr="Koji je trošak mitigacije u poređenju sa zahtevom za otkupom?" data-en="What is the mitigation cost compared to the ransom demand?">Koji je trošak mitigacije u poređenju sa zahtevom za otkupom?</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Najpre proverimo logove — ako nema potvrde probnog napada, pretnja je možda prazna." data-en="First let's check the logs — if there is no confirmation of a warning attack, the threat may be empty.">Najpre proverimo logove — ako nema potvrde probnog napada, pretnja je možda prazna.</li>
            <li data-sr="Mitigacijski servis aktiviran sada smanjuje atraktivnost mete za napadača." data-en="A mitigation service activated now reduces target attractiveness for the attacker.">Mitigacijski servis aktiviran sada smanjuje atraktivnost mete za napadača.</li>
            <li data-sr="Isplata signalizira da organizacija plaća, što privlači nove zahteve." data-en="Payment signals that the organization pays, which attracts new demands.">Isplata signalizira da organizacija plaća, što privlači nove zahteve.</li>
            <li data-sr="Prijava policiji ne košta vreme — vođenje tog procesa može ići paralelno." data-en="Reporting to police doesn't cost time — that process can run in parallel.">Prijava policiji ne košta vreme — vođenje tog procesa može ići paralelno.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 9) IZVORI -->
`
};
