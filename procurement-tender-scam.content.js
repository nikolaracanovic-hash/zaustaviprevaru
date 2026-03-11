window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["procurement-tender-scam"] = {
  raw_html: `
    <!-- 1) UVOD -->
    <section class="card">
      <h2 data-sr="Uvod: kako radi prevara na tenderu" data-en="Introduction: how procurement tender scam works">
        Uvod: kako radi prevara na tenderu
      </h2>

      <p
        data-sr="Prevara na tenderu je napad u kome napadač šalje lažno obaveštenje o tenderu ili nabavci i privlači firme da podnesu prijave uz naknade unapred. Napadač se lažno predstavlja kao državna agencija, velika korporacija, međunarodna organizacija ili nabavna platforma. Tender ili ne postoji ili je ishod unapred određen u korist napadačeve firme."
        data-en="Procurement tender scam is an attack in which the attacker sends a fake tender or procurement notice and attracts companies to submit bids with upfront fees. The attacker impersonates a government agency, large corporation, international organization, or procurement platform. The tender either does not exist or its outcome is predetermined in favor of the attacker's company."
      >Prevara na tenderu je napad u kome napadač šalje lažno obaveštenje o tenderu ili nabavci i privlači firme da podnesu prijave uz naknade unapred. Napadač se lažno predstavlja kao državna agencija, velika korporacija, međunarodna organizacija ili nabavna platforma. Tender ili ne postoji ili je ishod unapred određen u korist napadačeve firme.</p>

      <p
        data-sr="Firme su posebno ranjive jer tenderi nose potencijalno visoke vrednosti ugovora. Naknada od nekoliko hiljada evra izgleda zanemarivo u poređenju s ugovorom vrednim stotine hiljada. Ova psihološka dinamika — mali trošak, potencijalno velika nagrada — čini napad posebno efikasnim za kompanije svih veličina."
        data-en="Companies are particularly vulnerable because tenders carry potentially high contract values. A fee of a few thousand euros looks insignificant compared to a contract worth hundreds of thousands. This psychological dynamic — small cost, potentially large reward — makes the attack particularly effective for companies of all sizes."
      >Firme su posebno ranjive jer tenderi nose potencijalno visoke vrednosti ugovora. Naknada od nekoliko hiljada evra izgleda zanemarivo u poređenju s ugovorom vrednim stotine hiljada. Ova psihološka dinamika — mali trošak, potencijalno velika nagrada — čini napad posebno efikasnim za kompanije svih veličina.</p>

      <div class="callout"
        data-sr="<strong>Model:</strong> izviđanje (sektor firme + tenderi koje prati) → lažna tender pozivnica → registracija uz naknadu → eskalacija (garancija, depozit, inspekcija) → tender nestaje ili ishod unapred određen → gubitak."
        data-en="<strong>Model:</strong> reconnaissance (company sector + tenders it follows) → fake tender invitation → registration with fee → escalation (guarantee, deposit, inspection) → tender disappears or outcome predetermined → loss."
      ><strong>Model:</strong> izviđanje (sektor firme + tenderi koje prati) → lažna tender pozivnica → registracija uz naknadu → eskalacija (garancija, depozit, inspekcija) → tender nestaje ili ishod unapred određen → gubitak.</div>

      <div class="callout"
        data-sr="<strong>Prag:</strong> firma izvrši uplatu naknade (registracija, garancija, depozit) na osnovu lažne tender dokumentacije bez verifikacije kroz zvaničan javni registar."
        data-en="<strong>Threshold:</strong> company pays a fee (registration, guarantee, deposit) based on fake tender documentation without verification through official public registry."
      ><strong>Prag:</strong> firma izvrši uplatu naknade (registracija, garancija, depozit) na osnovu lažne tender dokumentacije bez verifikacije kroz zvaničan javni registar.</div>
    </section>

    <!-- 2) KAKO GENERALNO RADI -->
    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika prevare" data-en="How it works: scam mechanics">
        Kako generalno radi: mehanika prevare
      </h2>

      <p
        data-sr="Napadač se oslanja na dve stvari: (1) izgled legitimiteta lažne dokumentacije i (2) privlažnost potencijalno vrednog ugovora koji opravdava male naknade. Naknada nikada nije toliko visoka da bude odmah sumnjiva — ona je uvek sitna proceduralna stavka u poređenju s ugovorom."
        data-en="The attacker relies on two things: (1) appearance of legitimacy of fake documentation and (2) the attraction of a potentially valuable contract that justifies small fees. The fee is never so high that it is immediately suspicious — it is always a minor procedural item compared to the contract."
      >Napadač se oslanja na dve stvari: (1) izgled legitimiteta lažne dokumentacije i (2) privlažnost potencijalno vrednog ugovora koji opravdava male naknade. Naknada nikada nije toliko visoka da bude odmah sumnjiva — ona je uvek sitna proceduralna stavka u poređenju s ugovorom.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gradi autoritet lažnog tendera" data-en="What builds authority of the fake tender">Šta gradi autoritet lažnog tendera</div>
          <ul class="bullets">
            <li data-sr="logotipi državnih agencija, EU institucija ili poznatih korporacija." data-en="logos of government agencies, EU institutions, or well-known corporations.">logotipi državnih agencija, EU institucija ili poznatih korporacija.</li>
            <li data-sr="referentni brojevi tendera koji zvuče legitimno." data-en="tender reference numbers that sound legitimate.">referentni brojevi tendera koji zvuče legitimno.</li>
            <li data-sr="rokovi za podnošenje prijava koji stvaraju hitnost." data-en="submission deadlines that create urgency.">rokovi za podnošenje prijava koji stvaraju hitnost.</li>
            <li data-sr="obimna dokumentacija koja izgleda kao pravi tender paket." data-en="extensive documentation that looks like a real tender package.">obimna dokumentacija koja izgleda kao pravi tender paket.</li>
            <li data-sr="pomenuti visok iznos ugovora koji opravdava registracionu naknadu." data-en="mentioned high contract amount that justifies registration fee.">pomenuti visok iznos ugovora koji opravdava registracionu naknadu.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Kako se uvode naknade" data-en="How fees are introduced">Kako se uvode naknade</div>
          <ul class="bullets">
            <li data-sr="registraciona naknada za pristup tender dokumentima." data-en="registration fee for access to tender documents.">registraciona naknada za pristup tender dokumentima.</li>
            <li data-sr="naknada za administrativnu obradu prijave." data-en="fee for administrative processing of the bid.">naknada za administrativnu obradu prijave.</li>
            <li data-sr="bankarska garancija kao uslov za učešće." data-en="bank guarantee as participation requirement.">bankarska garancija kao uslov za učešće.</li>
            <li data-sr="depozit kao dokaz ozbiljnosti ponuđača." data-en="deposit as proof of bidder seriousness.">depozit kao dokaz ozbiljnosti ponuđača.</li>
            <li data-sr="naknada za inspekciju, proveru podobnosti ili sertifikaciju." data-en="fee for inspection, suitability check, or certification.">naknada za inspekciju, proveru podobnosti ili sertifikaciju.</li>
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
        data-sr="Faze od pozivnice do serije uplata. Svaka faza se oslanja na prethodnu da gradi poverenje i opravdava sledeću naknadu."
        data-en="Phases from invitation to payment series. Each phase builds on the previous to establish trust and justify the next fee."
      >Faze od pozivnice do serije uplata. Svaka faza se oslanja na prethodnu da gradi poverenje i opravdava sledeću naknadu.</p>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Izviđanje: ciljane firme i sektori" data-en="Phase 1 — Reconnaissance: targeted companies and sectors">
          Faza 1 — Izviđanje: ciljane firme i sektori
        </h3>
        <p
          data-sr="Napadač identifikuje firme koje regularno učestvuju u nabavkama i tenderima. Baze podataka firmi, poslovni registri i platforme za javne nabavke daju popis aktivnih učesnika. Napadač selektuje firme iz sektora koji odgovaraju tipu tendera koji priprema: IT, građevinarstvo, logistika, konsalting."
          data-en="The attacker identifies companies that regularly participate in procurement and tenders. Company databases, business registries, and public procurement platforms provide a list of active participants. The attacker selects companies from sectors that match the type of tender they are preparing: IT, construction, logistics, consulting."
        >Napadač identifikuje firme koje regularno učestvuju u nabavkama i tenderima. Baze podataka firmi, poslovni registri i platforme za javne nabavke daju popis aktivnih učesnika. Napadač selektuje firme iz sektora koji odgovaraju tipu tendera koji priprema: IT, građevinarstvo, logistika, konsalting.</p>
        <ul class="bullets">
          <li data-sr="signal: firma ima javne reference iz tendera ili javnih nabavki." data-en="signal: company has public references from tenders or public procurement.">signal: firma ima javne reference iz tendera ili javnih nabavki.</li>
          <li data-sr="signal: firma aktivna u sektoru koji tender pokriva." data-en="signal: company active in sector the tender covers.">signal: firma aktivna u sektoru koji tender pokriva.</li>
        </ul>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> napadač ima listu ciljanih firmi i tip tendera koji je dovoljno uverljiv za taj sektor."
          data-en="<strong>Phase threshold:</strong> attacker has list of targeted companies and tender type convincing enough for that sector."
        ><strong>Prag faze:</strong> napadač ima listu ciljanih firmi i tip tendera koji je dovoljno uverljiv za taj sektor.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Priprema lažne tender dokumentacije" data-en="Phase 2 — Fake tender documentation preparation">
          Faza 2 — Priprema lažne tender dokumentacije
        </h3>
        <p
          data-sr="Napadač priprema dokumentaciju: pozivno pismo, tender specifikacije, uslove učešća, formular za prijavu. Koristi ukradene logotipe i vizualne elemente legitimnih institucija. Tender referentni broj izgleda kao pravi. Kontakt imejl je na lookalike domenu ili besplatnom servisu sa prilagođenim imenom."
          data-en="The attacker prepares documentation: invitation letter, tender specifications, participation conditions, application form. Uses stolen logos and visual elements of legitimate institutions. Tender reference number looks real. Contact email is on a lookalike domain or free service with a customized name."
        >Napadač priprema dokumentaciju: pozivno pismo, tender specifikacije, uslove učešća, formular za prijavu. Koristi ukradene logotipe i vizualne elemente legitimnih institucija. Tender referentni broj izgleda kao pravi. Kontakt imejl je na lookalike domenu ili besplatnom servisu sa prilagođenim imenom.</p>
        <ul class="bullets">
          <li data-sr="signal: kontakt imejl nije na zvaničnom domenu institucije." data-en="signal: contact email not on institution's official domain.">signal: kontakt imejl nije na zvaničnom domenu institucije.</li>
          <li data-sr="signal: tender nije objavljen na zvaničnoj platformi javnih nabavki." data-en="signal: tender not published on official public procurement platform.">signal: tender nije objavljen na zvaničnoj platformi javnih nabavki.</li>
        </ul>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> dokumentacija pripremljena i ready za distribuciju."
          data-en="<strong>Phase threshold:</strong> documentation prepared and ready for distribution."
        ><strong>Prag faze:</strong> dokumentacija pripremljena i ready za distribuciju.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Pozivnica i registraciona naknada" data-en="Phase 3 — Invitation and registration fee">
          Faza 3 — Pozivnica i registraciona naknada
        </h3>
        <p
          data-sr="Firma prima tender pozivnicu. Rok za prijavu je kratak — 5 do 14 dana. Da bi podnela prijavu, firma mora platiti registracionu naknadu ili naknadu za pristup tender dokumentima. Iznosi su manji: 500 do 3.000 evra. Napadač tvrdi da je ovo standardna procedura."
          data-en="The company receives the tender invitation. The submission deadline is short — 5 to 14 days. To submit a bid, the company must pay a registration fee or fee for access to tender documents. Amounts are smaller: 500 to 3,000 euros. The attacker claims this is standard procedure."
        >Firma prima tender pozivnicu. Rok za prijavu je kratak — 5 do 14 dana. Da bi podnela prijavu, firma mora platiti registracionu naknadu ili naknadu za pristup tender dokumentima. Iznosi su manji: 500 do 3.000 evra. Napadač tvrdi da je ovo standardna procedura.</p>
        <ul class="bullets">
          <li data-sr="fraze: „registraciona naknada je standardni uslov za pristup tender dokumentima."." data-en="phrases: &ldquo;registration fee is standard requirement for access to tender documents&rdquo;.">fraze: „registraciona naknada je standardni uslov za pristup tender dokumentima"“.</li>
          <li data-sr="fraze: „rok za podnošenje prijave ističe za X dana — hitno se registrujte."." data-en="phrases: &ldquo;submission deadline expires in X days — register urgently&rdquo;.">fraze: „rok za podnošenje prijave ističe za X dana — hitno se registrujte"“.</li>
        </ul>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="impersonation-scam.html" data-sr="Lažno predstavljanje" data-en="Impersonation scam">Lažno predstavljanje</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> firma izvrši prvu uplatu (registracija ili pristup dokumentima)."
          data-en="<strong>Phase threshold:</strong> company makes the first payment (registration or document access)."
        ><strong>Prag faze:</strong> firma izvrši prvu uplatu (registracija ili pristup dokumentima).</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Eskalacija: garancija i depozit" data-en="Phase 4 — Escalation: guarantee and deposit">
          Faza 4 — Eskalacija: garancija i depozit
        </h3>
        <p
          data-sr="Posle registracije napadač eskalira zahteve. Firma mora dokazati finansijsku sposobnost kroz bankarski depozit ili garanciju. Iznosi su viši: 5.000 do 50.000 evra. Napadač kaže da se depozit vraća ako firma ne pobedi ili po završetku tendera. Firma je već platila registraciju i ne želi izgubiti šansu za ugovor."
          data-en="After registration the attacker escalates demands. The company must demonstrate financial capacity through a bank deposit or guarantee. Amounts are higher: 5,000 to 50,000 euros. The attacker says the deposit is returned if the company does not win or upon tender completion. The company has already paid registration and does not want to lose the contract opportunity."
        >Posle registracije napadač eskalira zahteve. Firma mora dokazati finansijsku sposobnost kroz bankarski depozit ili garanciju. Iznosi su viši: 5.000 do 50.000 evra. Napadač kaže da se depozit vraća ako firma ne pobedi ili po završetku tendera. Firma je već platila registraciju i ne želi izgubiti šansu za ugovor.</p>
        <ul class="bullets">
          <li data-sr="fraze: „sve firme su dužne da dostave finansijsku garanciju kao uslov učešća."." data-en="phrases: &ldquo;all companies are required to provide financial guarantee as participation requirement&rdquo;.">fraze: „sve firme su dužne da dostave finansijsku garanciju kao uslov učešća"“.</li>
          <li data-sr="fraze: „depozit se vraća u roku od 30 dana po okončanju tendera."." data-en="phrases: &ldquo;deposit is returned within 30 days of tender completion&rdquo;.">fraze: „depozit se vraća u roku od 30 dana po okončanju tendera"“.</li>
        </ul>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> firma izvrši drugu ili treću uplatu (garancija/depozit)."
          data-en="<strong>Phase threshold:</strong> company makes second or third payment (guarantee/deposit)."
        ><strong>Prag faze:</strong> firma izvrši drugu ili treću uplatu (garancija/depozit).</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Novi zahtevi: inspekcija i sertifikacija" data-en="Phase 5 — New demands: inspection and certification">
          Faza 5 — Novi zahtevi: inspekcija i sertifikacija
        </h3>
        <p
          data-sr="Napadač uvodi novi zahtev: firma mora proći inspekciju, dobiti sertifikat podobnosti ili platiti naknadu za tehničku procenu. Svaki novi zahtev je praćen rokom. Firma je duboko u procesu i tvrdi da ne može izgubiti ono što je već uložila."
          data-en="The attacker introduces a new requirement: the company must undergo inspection, obtain a suitability certificate, or pay a technical assessment fee. Each new requirement comes with a deadline. The company is deep in the process and feels it cannot lose what it has already invested."
        >Napadač uvodi novi zahtev: firma mora proći inspekciju, dobiti sertifikat podobnosti ili platiti naknadu za tehničku procenu. Svaki novi zahtev je praćen rokom. Firma je duboko u procesu i tvrdi da ne može izgubiti ono što je već uložila.</p>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> firma nastavlja da plaća uprkos rastućim sumnjama — sunk cost efekat drži je u procesu."
          data-en="<strong>Phase threshold:</strong> company continues paying despite growing suspicions — sunk cost effect keeps it in the process."
        ><strong>Prag faze:</strong> firma nastavlja da plaća uprkos rastućim sumnjama — sunk cost efekat drži je u procesu.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Tender nestaje ili ishod unapred određen" data-en="Phase 6 — Tender disappears or outcome predetermined">
          Faza 6 — Tender nestaje ili ishod unapred određen
        </h3>
        <p
          data-sr="Postoje dva ishoda. U prvom: tender jednostavno prestaje da postoji, kontakti ne odgovaraju, web sajt nestaje. U drugom: firma dobija obaveštenje da nije pobedila na tenderu i da depozit nije refundabilan jer je narušila uslove učešća. Povraćaj nije moguć."
          data-en="There are two outcomes. In the first: the tender simply ceases to exist, contacts stop responding, website disappears. In the second: the company is notified it did not win the tender and that the deposit is non-refundable because it violated participation conditions. Recovery is not possible."
        >Postoje dva ishoda. U prvom: tender jednostavno prestaje da postoji, kontakti ne odgovaraju, web sajt nestaje. U drugom: firma dobija obaveštenje da nije pobedila na tenderu i da depozit nije refundabilan jer je narušila uslove učešća. Povraćaj nije moguć.</p>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> firma shvata da tender nije bio realan — gubitak svih uplata."
          data-en="<strong>Phase threshold:</strong> company realizes the tender was not real — loss of all payments."
        ><strong>Prag faze:</strong> firma shvata da tender nije bio realan — gubitak svih uplata.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 7 — Recovery talaš" data-en="Phase 7 — Recovery wave">
          Faza 7 — Recovery talaš
        </h3>
        <p
          data-sr="Posle gubitka stiže novi kontakt: agent za žalbe, pravnik specijalizovan za ovaj tip prevare, ili inspektor koji može pomoći. Svaka od ovih uloga zahteva novu uplatu unapred. Firme su posebno ranjive jer su već emotivno i finansijski investirane."
          data-en="After the loss a new contact arrives: a complaints agent, a lawyer specialized in this type of fraud, or an inspector who can help. Each of these roles requires a new upfront payment. Companies are particularly vulnerable as they are already emotionally and financially invested."
        >Posle gubitka stiže novi kontakt: agent za žalbe, pravnik specijalizovan za ovaj tip prevare, ili inspektor koji može pomoći. Svaka od ovih uloga zahteva novu uplatu unapred. Firme su posebno ranjive jer su već emotivno i finansijski investirane.</p>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="recovery-scam.html" data-sr="Prevara povraćaja novca" data-en="Recovery scam">Prevara povraćaja novca</a></li>
            <li><a href="grant-fund-scam.html" data-sr="Prevara sa grantovima i fondovima" data-en="Grant and fund scam">Prevara sa grantovima i fondovima</a></li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Filter:</strong> legitimni pravni povraćaj uvek inicira oštećena firma sama, ne treća strana koja nudi usluge."
          data-en="<strong>Filter:</strong> legitimate legal recovery is always initiated by the injured company itself, not a third party offering services."
        ><strong>Filter:</strong> legitimni pravni povraćaj uvek inicira oštećena firma sama, ne treća strana koja nudi usluge.</div>
      </article>
    </section>

    <!-- 4) CRVENE ZASTAVICE -->
    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="tender stiže nesolicitovano, firma nije tražila učešće." data-en="tender arrives unsolicited, company did not request participation.">tender stiže nesolicitovano, firma nije tražila učešće.</li>
        <li data-sr="tender nije objavljen na zvaničnoj platformi javnih nabavki." data-en="tender not published on official public procurement platform.">tender nije objavljen na zvaničnoj platformi javnih nabavki.</li>
        <li data-sr="kontakt imejl nije na zvaničnom domenu navedene institucije." data-en="contact email not on the official domain of the stated institution.">kontakt imejl nije na zvaničnom domenu navedene institucije.</li>
        <li data-sr="postoji naknada za pristup dokumentima, registraciju ili učešće." data-en="there is a fee for document access, registration, or participation.">postoji naknada za pristup dokumentima, registraciju ili učešće.</li>
        <li data-sr="rok za prijavu je kratak i pod pritiskom (manje od 2 nedelje)." data-en="submission deadline is short and pressured (less than 2 weeks).">rok za prijavu je kratak i pod pritiskom (manje od 2 nedelje).</li>
        <li data-sr="serija novih zahteva i naknada posle svake uplate." data-en="series of new requirements and fees after each payment.">serija novih zahteva i naknada posle svake uplate.</li>
        <li data-sr="nema proverljivog javnog registra tender procesa." data-en="no verifiable public registry of the tender process.">nema proverljivog javnog registra tender procesa.</li>
        <li data-sr="navodna institucija negira tender kada se direktno kontaktira kroz zvaničan kanal." data-en="stated institution denies the tender when contacted directly through official channel.">navodna institucija negira tender kada se direktno kontaktira kroz zvaničan kanal.</li>
      </ul>
    </section>

    <!-- 5) PROVERE -->
    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera pre uplata na tenderu" data-en="Checks: 8 quick checks before tender payments">Provere: 8 brzih provera pre uplata na tenderu</h2>

      <p
        data-sr="Svaka provera mora ići kroz kanal koji je nezavisan od tender dokumenta koji je stigao. Broj u pozivu i imejl u tenderu nisu nezavisni dokazi."
        data-en="Every check must go through a channel independent of the tender document that arrived. The number in the invitation and the email in the tender are not independent evidence."
      >Svaka provera mora ići kroz kanal koji je nezavisan od tender dokumenta koji je stigao. Broj u pozivu i imejl u tenderu nisu nezavisni dokazi.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Provere institucije" data-en="Institution checks">Provere institucije</div>
          <ul class="bullets">
            <li data-sr="proveri tender na zvaničnoj platformi javnih nabavki te zemlje ili institucije." data-en="check the tender on the official public procurement platform of that country or institution.">proveri tender na zvaničnoj platformi javnih nabavki te zemlje ili institucije.</li>
            <li data-sr="kontaktiraj instituciju direktno kroz kontakt sa zvaničnog sajta — ne iz tender pozivnice." data-en="contact the institution directly through contact from official website — not from the tender invitation.">kontaktiraj instituciju direktno kroz kontakt sa zvaničnog sajta — ne iz tender pozivnice.</li>
            <li data-sr="proveri da li institucija uopšte sprovodi javne nabavke ovog tipa." data-en="verify whether the institution even conducts public procurement of this type.">proveri da li institucija uopšte sprovodi javne nabavke ovog tipa.</li>
            <li data-sr="proveri zvanični domen institucije i uporedi sa domenom tender kontakta." data-en="check official institutional domain and compare with tender contact domain.">proveri zvanični domen institucije i uporedi sa domenom tender kontakta.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Proceduralne provere" data-en="Procedural checks">Proceduralne provere</div>
          <ul class="bullets">
            <li data-sr="legitimni tenderi u EU i regionu ne naplaćuju registracionu naknadu za učešće." data-en="legitimate tenders in EU and region do not charge registration fees for participation.">legitimni tenderi u EU i regionu ne naplaćuju registracionu naknadu za učešće.</li>
            <li data-sr="da li isti tender postoji u više varijanti (isti tekst, različite institucije)." data-en="does the same tender exist in multiple variants (same text, different institutions).">da li isti tender postoji u više varijanti (isti tekst, različite institucije).</li>
            <li data-sr="traži reference: da li bilo koja druga firma učestvuje ili može potvrditi tender." data-en="ask for references: does any other company participate or can confirm the tender.">traži reference: da li bilo koja druga firma učestvuje ili može potvrditi tender.</li>
            <li data-sr="da li su uslovi tendera neobično povoljni ili vrednost ugovora nerealno visoka." data-en="are tender conditions unusually favorable or contract value unrealistically high.">da li su uslovi tendera neobično povoljni ili vrednost ugovora nerealno visoka.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 6) CHECKLISTA -->
    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja pre svake uplate na tenderu" data-en="Checklist: 12 questions before any tender payment">Checklista: 12 pitanja pre svake uplate na tenderu</h2>

      <p class="muted"
        data-sr="Brzo čitanje. Više loših odgovora znači aktivan obrazac prevare."
        data-en="Quick read. Multiple bad answers indicate an active fraud pattern."
      >Brzo čitanje. Više loših odgovora znači aktivan obrazac prevare.</p>

      <ul class="bullets">
        <li data-sr="Da li je ovaj tender objavljen na zvaničnoj platformi javnih nabavki?" data-en="Is this tender published on the official public procurement platform?">Da li je ovaj tender objavljen na zvaničnoj platformi javnih nabavki?</li>
        <li data-sr="Da li kontakt imejl odgovara zvaničnom domenu navedene institucije?" data-en="Does the contact email match the official domain of the stated institution?">Da li kontakt imejl odgovara zvaničnom domenu navedene institucije?</li>
        <li data-sr="Da li smo kontaktirali instituciju kroz zvaničan kanal i potvrdili tender?" data-en="Did we contact the institution through an official channel and confirm the tender?">Da li smo kontaktirali instituciju kroz zvaničan kanal i potvrdili tender?</li>
        <li data-sr="Da li tender traži novčanu uplatu za registraciju ili pristup dokumentima?" data-en="Does the tender require a monetary payment for registration or document access?">Da li tender traži novčanu uplatu za registraciju ili pristup dokumentima?</li>
        <li data-sr="Da li je rok za prijavu manji od 14 dana?" data-en="Is the submission deadline less than 14 days?">Da li je rok za prijavu manji od 14 dana?</li>
        <li data-sr="Da li je vrednost ugovora navedena u pozivu neobično visoka?" data-en="Is the contract value stated in the invitation unusually high?">Da li je vrednost ugovora navedena u pozivu neobično visoka?</li>
        <li data-sr="Da li smo ranije poslovali sa ovom institucijom ili firmom?" data-en="Have we worked with this institution or company before?">Da li smo ranije poslovali sa ovom institucijom ili firmom?</li>
        <li data-sr="Da li postoji proverljiva fizička adresa naručioca tendera?" data-en="Is there a verifiable physical address of the tender requester?">Da li postoji proverljiva fizička adresa naručioca tendera?</li>
        <li data-sr="Da li nam je isti tender stigao od više izvora ili je potvrđen od poslovnih partnera?" data-en="Did we receive the same tender from multiple sources or confirmed by business partners?">Da li nam je isti tender stigao od više izvora ili je potvrđen od poslovnih partnera?</li>
        <li data-sr="Da li tender zahteva garanciju ili depozit koji se vraća tek po okončanju?" data-en="Does the tender require a guarantee or deposit returned only at completion?">Da li tender zahteva garanciju ili depozit koji se vraća tek po okončanju?</li>
        <li data-sr="Da li postoji naknada za svaki naredni korak u procesu?" data-en="Is there a fee for each subsequent step in the process?">Da li postoji naknada za svaki naredni korak u procesu?</li>
        <li data-sr="Da li smo konsultovali pravnu službu pre svake uplate?" data-en="Did we consult legal counsel before each payment?">Da li smo konsultovali pravnu službu pre svake uplate?</li>
      </ul>
    </section>

    <!-- 7) AKO SUMNJA KRENE -->
    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="zaustavi sve uplate — ne plaćaj sledeću naknadu dok verifikacija nije završena." data-en="stop all payments — do not pay the next fee until verification is complete.">zaustavi sve uplate — ne plaćaj sledeću naknadu dok verifikacija nije završena.</li>
        <li data-sr="kontaktiraj navedenu instituciju direktno kroz zvaničan kanal i proveri tender." data-en="contact the stated institution directly through official channel and verify the tender.">kontaktiraj navedenu instituciju direktno kroz zvaničan kanal i proveri tender.</li>
        <li data-sr="ako je uplata već izvršena: kontaktuj banku odmah i zatraži recall." data-en="if payment was already made: contact your bank immediately and request recall.">ako je uplata već izvršena: kontaktuj banku odmah i zatraži recall.</li>
        <li data-sr="sačuvaj svu dokumentaciju: imejlove, tender pakete, uplatnice." data-en="preserve all documentation: emails, tender packages, payment receipts.">sačuvaj svu dokumentaciju: imejlove, tender pakete, uplatnice.</li>
        <li data-sr="prijavi slučaj policiji, poreskoj upravi i antikorupcijskim organima." data-en="report the case to police, tax authority, and anti-corruption bodies.">prijavi slučaj policiji, poreskoj upravi i antikorupcijskim organima.</li>
        <li data-sr="obavesti sektor i poslovne partnere — isti napadač možda cilja više firmi." data-en="notify your sector and business partners — the same attacker may be targeting multiple companies.">obavesti sektor i poslovne partnere — isti napadač možda cilja više firmi.</li>
      </ol>

      <div class="callout"
        data-sr="<strong>Ključna tačka:</strong> nijedan legitiman tender ne naplaćuje naknade za registraciju ili pristup dokumentima. Svaka uplata pre dodele ugovora je signal za pravljenje pauze i verifikaciju."
        data-en="<strong>Key point:</strong> no legitimate tender charges fees for registration or document access. Any payment before contract award is a signal to pause and verify."
      ><strong>Ključna tačka:</strong> nijedan legitiman tender ne naplaćuje naknade za registraciju ili pristup dokumentima. Svaka uplata pre dodele ugovora je signal za pravljenje pauze i verifikaciju.</div>
    </section>

    <!-- 8) AKO POMAŽEŠ NEKOME -->
    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>

      <p
        data-sr="Firme koje su duboko u procesu braniće investiciju. Direktna konfrontacija ne funkcioniše. Efikasnije je ići kroz konkretnu proceduralnu proveru: da li tender postoji u javnom registru, da li institucija potvrđuje tender kroz zvaničan kanal."
        data-en="Companies deep in the process will defend their investment. Direct confrontation does not work. More effective is going through concrete procedural verification: does the tender exist in the public registry, does the institution confirm the tender through official channel."
      >Firme koje su duboko u procesu braniće investiciju. Direktna konfrontacija ne funkcioniše. Efikasnije je ići kroz konkretnu proceduralnu proveru: da li tender postoji u javnom registru, da li institucija potvrđuje tender kroz zvaničan kanal.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Možemo li zajedno pronaći ovaj tender na zvaničnoj nabavnoj platformi?" data-en="Can we find this tender together on the official procurement platform?">Možemo li zajedno pronaći ovaj tender na zvaničnoj nabavnoj platformi?</li>
            <li data-sr="Da li smo pozvali instituciju na broj sa njenog zvaničnog sajta i pitali za ovaj tender?" data-en="Did we call the institution on the number from its official website and ask about this tender?">Da li smo pozvali instituciju na broj sa njenog zvaničnog sajta i pitali za ovaj tender?</li>
            <li data-sr="Da li legitimni tenderi naplaćuju naknade pre dodele ugovora?" data-en="Do legitimate tenders charge fees before contract award?">Da li legitimni tenderi naplaćuju naknade pre dodele ugovora?</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Hajde da proverimo ovaj tender na zvaničnoj platformi — ako postoji, biće tu." data-en="Let's check this tender on the official platform — if it exists, it will be there.">Hajde da proverimo ovaj tender na zvaničnoj platformi — ako postoji, biće tu.</li>
            <li data-sr="Pozovimo instituciju direktno i pitajmo za tender referentni broj." data-en="Let's call the institution directly and ask about the tender reference number.">Pozovimo instituciju direktno i pitajmo za tender referentni broj.</li>
            <li data-sr="Nijedan pravi tender ne traži naknadu za prijavu — ovo je signal koji mora stati." data-en="No real tender charges a registration fee — this is a signal that must stop us.">Nijedan pravi tender ne traži naknadu za prijavu — ovo je signal koji mora stati.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 9) POVEZANE PREVARE -->
    <section class="card">
      <h2 data-sr="Povezane prevare" data-en="Related scams">Povezane prevare</h2>
      <div class="branch">
        <ul class="bullets">
          <li><a href="supplier-onboarding-scam.html" data-sr="Prevara pri registraciji dobavljača" data-en="Supplier onboarding scam">Prevara pri registraciji dobavljača</a></li>
          <li><a href="grant-fund-scam.html" data-sr="Prevara sa grantovima i fondovima" data-en="Grant and fund scam">Prevara sa grantovima i fondovima</a></li>
          <li><a href="payment-diversion.html" data-sr="Preusmeravanje plaćanja" data-en="Payment diversion">Preusmeravanje plaćanja</a></li>
          <li><a href="business-email-compromise.html" data-sr="Kompromitovanje poslovnog imejla (BEC)" data-en="Business email compromise (BEC)">Kompromitovanje poslovnog imejla (BEC)</a></li>
          <li><a href="impersonation-scam.html" data-sr="Lažno predstavljanje" data-en="Impersonation scam">Lažno predstavljanje</a></li>
        </ul>
      </div>
    </section>
  `
};
