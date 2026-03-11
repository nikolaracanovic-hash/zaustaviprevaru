window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["bid-bond-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi prevara licitacijskom garancijom" data-en="Introduction: how bid bond scams work">Uvod: kako radi prevara licitacijskom garancijom</h2>
      <p data-sr="Licitacijska garancija (bid bond) je instrument koji se koristi u javnim nabavkama: ponuđač je obavezan da obezbedi garanciju da će, ako pobedi na tenderu, ući u ugovor. Prevara licitacijskom garancijom kopira ovaj legitiman zahtev: lažni organizator tendera kontaktira preduzeće i traži uplatu premije garancije pre nego što ponuda bude razmatrana. Garancija nikad ne stiže, a ponuda se ne razmatra." data-en="A bid bond is an instrument used in public procurement: the bidder is required to provide a guarantee that if they win the tender they will enter the contract. Bid bond fraud copies this legitimate requirement: a fake tender organiser contacts the company and demands payment of the bond premium before the bid is considered. The bond never arrives and the bid is never considered.">Licitacijska garancija (bid bond) je instrument koji se koristi u javnim nabavkama: ponuđač je obavezan da obezbedi garanciju da će, ako pobedi na tenderu, ući u ugovor. Prevara licitacijskom garancijom kopira ovaj legitiman zahtev: lažni organizator tendera kontaktira preduzeće i traži uplatu premije garancije pre nego što ponuda bude razmatrana. Garancija nikad ne stiže, a ponuda se ne razmatra.</p>
      <p data-sr="Napadač koristi dokumentaciju koja izgleda kao zvanični tender: referentni broj, rok za dostavljanje ponude, specifikacije projekta i lista zahteva. Kada meta počne da prikuplja dokumentaciju, uvodi se zahtev za garancijom — prezentovan kao standardni uslov tendera." data-en="The attacker uses documentation that looks like an official tender: reference number, bid submission deadline, project specifications, and a list of requirements. When the target begins gathering documentation, the bond demand is introduced — presented as a standard tender condition.">Napadač koristi dokumentaciju koja izgleda kao zvanični tender: referentni broj, rok za dostavljanje ponude, specifikacije projekta i lista zahteva. Kada meta počne da prikuplja dokumentaciju, uvodi se zahtev za garancijom — prezentovan kao standardni uslov tendera.</p>
      <div class="callout" data-sr="<strong>Model:</strong> lažni tender → poziv za ponudu → bid bond kao uslov → uplata premije → garancija ne stiže → nova naknada → nestanak." data-en="<strong>Model:</strong> fake tender → bid invitation → bid bond as condition → premium payment → bond never arrives → new fee → disappearance."><strong>Model:</strong> lažni tender → poziv za ponudu → bid bond kao uslov → uplata premije → garancija ne stiže → nova naknada → nestanak.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> uplata „premije licitacijske garancije“ ili „depozita za obradu ponude“. Posle praga svaka sledeća naknada koristi prethodnu uplatu kao polugu." data-en="<strong>Threshold:</strong> payment of the 'bid bond premium' or 'bid processing deposit'. After the threshold every subsequent fee uses the previous payment as leverage."><strong>Prag:</strong> uplata 'premije licitacijske garancije' ili 'depozita za obradu ponude'. Posle praga svaka sledeća naknada koristi prethodnu uplatu kao polugu.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika prevare licitacijske garancije" data-en="How it works: bid bond scam mechanics">Kako generalno radi: mehanika prevare licitacijske garancije</h2>
      <p data-sr="Prevara se oslanja na činjenicu da licitacijska garancija zaista postoji u javnim nabavkama. Meta koja je upoznata s procesima tenderisanja automatski prepoznaje zahtev kao legitiman. Napadač samo kopira formu i terminologiju, ali menja destinaciju novčanih tokova." data-en="The fraud relies on the fact that bid bonds genuinely exist in public procurement. A target familiar with tendering processes automatically recognises the demand as legitimate. The attacker simply copies the form and terminology but changes the destination of money flows.">Prevara se oslanja na činjenicu da licitacijska garancija zaista postoji u javnim nabavkama. Meta koja je upoznata s procesima tenderisanja automatski prepoznaje zahtev kao legitiman. Napadač samo kopira formu i terminologiju, ali menja destinaciju novčanih tokova.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gradi autoritet" data-en="What builds authority">Šta gradi autoritet</div>
          <ul class="bullets">
            <li data-sr="tender dokumentacija sa svim standardnim elementima." data-en="tender documentation with all standard elements.">tender dokumentacija sa svim standardnim elementima.</li>
            <li data-sr="navođenje imena poznate institucije ili preduzeća kao nalogodavca." data-en="naming a well-known institution or company as the contracting authority.">navođenje imena poznate institucije ili preduzeća kao nalogodavca.</li>
            <li data-sr="rokovi i procedure koje odgovaraju javnim nabavkama." data-en="deadlines and procedures that match public procurement norms.">rokovi i procedure koje odgovaraju javnim nabavkama.</li>
            <li data-sr="email adrese koje imitiraju službu za javne nabavke." data-en="email addresses mimicking a procurement office.">email adrese koje imitiraju službu za javne nabavke.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Kako se uvodi uplata" data-en="How payment is introduced">Kako se uvodi uplata</div>
          <ul class="bullets">
            <li data-sr="bid bond je naveden kao uslov koji stoji u tenderskoj dokumentaciji." data-en="bid bond is listed as a condition in the tender documentation.">bid bond je naveden kao uslov koji stoji u tenderskoj dokumentaciji.</li>
            <li data-sr="iznos premije je manji od vrednosti ugovora — deluje razumno platiti." data-en="the bond premium is smaller than the contract value — paying seems reasonable.">iznos premije je manji od vrednosti ugovora — deluje razumno platiti.</li>
            <li data-sr="uplata ide na privatni račun, a ne na escrow bankarsku garanciju." data-en="payment goes to a private account, not to an escrow bank guarantee.">uplata ide na privatni račun, a ne na escrow bankarsku garanciju.</li>
            <li data-sr="posle uplate dolazi „potvrda„ ali bid bond dokument ne stiže." data-en="a “confirmation“ arrives after payment but the bid bond document does not.">posle uplate dolazi 'potvrda' ali bid bond dokument ne stiže.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok: faze prevare licitacijske garancije" data-en="Timeline: bid bond scam phases">Hronološki tok: faze prevare licitacijske garancije</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Poziv: tender dokumentacija" data-en="Phase 1 — Invitation: tender documentation">Faza 1 — Poziv: tender dokumentacija</h3>
        <p data-sr="Meta dobija poziv za dostavljanje ponude za javnu nabavku. Dokumentacija izgleda profesionalno i sadrži sve standardne elemente: opis projekta, rokove, tehničke specifikacije i uslove." data-en="The target receives an invitation to submit a bid for a public procurement. The documentation looks professional and contains all standard elements: project description, deadlines, technical specifications, and conditions.">Meta dobija poziv za dostavljanje ponude za javnu nabavku. Dokumentacija izgleda profesionalno i sadrži sve standardne elemente: opis projekta, rokove, tehničke specifikacije i uslove.</p>
        <ul class="bullets">
          <li data-sr="tender dokumentacija je detaljna i izgleda legitimno." data-en="tender documentation is detailed and looks legitimate.">tender dokumentacija je detaljna i izgleda legitimno.</li>
          <li data-sr="vrednost ugovora je atraktivna za metu." data-en="contract value is attractive for the target.">vrednost ugovora je atraktivna za metu.</li>
          <li data-sr="nalogodavac je institucija koja se može naći na internetu." data-en="the contracting authority is an institution findable online.">nalogodavac je institucija koja se može naći na internetu.</li>
          <li data-sr="rok za dostavljanje je 5–10 dana." data-en="submission deadline is 5–10 days.">rok za dostavljanje je 5–10 dana.</li>
        </ul>
        <p class="muted" data-sr="Prag faze 1: meta počinje da priprema ponudu i ulazi u tok dokumentacije." data-en="Phase 1 threshold: target begins preparing the bid and enters the documentation flow.">Prag faze 1: meta počinje da priprema ponudu i ulazi u tok dokumentacije.</p>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Uslov: bid bond kao obaveza" data-en="Phase 2 — Condition: bid bond as obligation">Faza 2 — Uslov: bid bond kao obaveza</h3>
        <p data-sr="Tokom pripreme ponude napadač šalje dopunu tenderske dokumentacije: bid bond je obavezan uslov. Iznos premije garancije je specificiran, a rok za dostavljanje kraći od prvobitnog roka ponude." data-en="During bid preparation the attacker sends a tender documentation supplement: a bid bond is a mandatory condition. The bond premium amount is specified with a deadline shorter than the original bid deadline.">Tokom pripreme ponude napadač šalje dopunu tenderske dokumentacije: bid bond je obavezan uslov. Iznos premije garancije je specificiran, a rok za dostavljanje kraći od prvobitnog roka ponude.</p>
        <ul class="bullets">
          <li data-sr="bid bond je opisan kao 'standardni uslov svih javnih nabavki„." data-en="bid bond is described as a “standard condition of all public procurements'.">bid bond je opisan kao 'standardni uslov svih javnih nabavki'.</li>
          <li data-sr="iznos je 1–5% vrednosti ugovora — deluje uobičajeno." data-en="amount is 1–5% of contract value — it seems standard.">iznos je 1–5% vrednosti ugovora — deluje uobičajeno.</li>
          <li data-sr="nalog za uplatu ide na „escrow račun„ koji je zapravo privatan." data-en="payment instruction goes to an “escrow account“ which is actually private.">nalog za uplatu ide na 'escrow račun' koji je zapravo privatan.</li>
          <li data-sr="uputa da se garancija ne može pribaviti od banke mete — mora biti kroz nalogodavca." data-en="instruction that the bond cannot be obtained from the target's bank — must be through the contracting authority.">uputa da se garancija ne može pribaviti od banke mete — mora biti kroz nalogodavca.</li>
        </ul>
        <p class="muted" data-sr="Prag faze 2: meta plaća premiju bid bonda." data-en="Phase 2 threshold: target pays the bid bond premium.">Prag faze 2: meta plaća premiju bid bonda.</p>
        <div class="note" data-sr="Grananja u ovoj fazi: ako meta traži bankarsku garanciju umesto uplate → 'tehnička procedura ne dozvoljava„; ako meta traži proveru nalogodavca → dolazi lažan telefon “službe za nabavke„." data-en="Branching in this phase: if target requests a bank guarantee instead of payment → “technical procedure does not allow it'; if target requests contracting authority verification → a fake 'procurement office' number is provided.">Grananja u ovoj fazi: ako meta traži bankarsku garanciju umesto uplate → 'tehnička procedura ne dozvoljava'; ako meta traži proveru nalogodavca → dolazi lažan telefon 'službe za nabavke'.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 3 — Blokada: garancija ne stiže" data-en="Phase 3 — Block: bond does not arrive">Faza 3 — Blokada: garancija ne stiže</h3>
        <p data-sr="Posle uplate premije napadač šalje „potvrdu“, ali sam dokument bid bonda ne stiže. Objašnjenje je uvek proceduralno: „banka kasni“, „verifikacija traže“, „potreban je dodatni dokument„." data-en="After premium payment the attacker sends a “confirmation“, but the actual bid bond document does not arrive. The explanation is always procedural: 'bank delay', 'verification takes time', 'an additional document is required'.">Posle uplate premije napadač šalje 'potvrdu', ali sam dokument bid bonda ne stiže. Objašnjenje je uvek proceduralno: 'banka kasni', 'verifikacija traže', 'potreban je dodatni dokument'.</p>
        <ul class="bullets">
          <li data-sr="dokument garancije kasni zbog „bankarske procedure„." data-en="guarantee document delayed due to “bank procedure.">dokument garancije kasni zbog 'bankarske procedure'.</li>
          <li data-sr="traži se „porez na finansijsku transakciju„ kao nova naknada." data-en="a “financial transaction tax“ is requested as a new fee.">traži se 'porez na finansijsku transakciju' kao nova naknada.</li>
          <li data-sr="prethodni iznos se pominje kao razlog zašto ne treba odustati." data-en="the previous amount is referenced as a reason not to give up.">prethodni iznos se pominje kao razlog zašto ne treba odustati.</li>
          <li data-sr="rok za dostavljanje ponude se produžava — „kao usluga„." data-en="bid submission deadline is extended — “as a courtesy.">rok za dostavljanje ponude se produžava — 'kao usluga'.</li>
        </ul>
        <p class="muted" data-sr="Prag faze 3: meta plaća drugu naknadu verujući da će garancija stići." data-en="Phase 3 threshold: target pays the second fee believing the guarantee will arrive.">Prag faze 3: meta plaća drugu naknadu verujući da će garancija stići.</p>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 4 — Serija naknada: lanac procedura" data-en="Phase 4 — Fee series: chain of procedures">Faza 4 — Serija naknada: lanac procedura</h3>
        <p data-sr="Svaka nova naknada nosi novo proceduralno ime. Napadač koristi rokove i pretnje gubitka već uplaćenih sredstava da drži metu u toku." data-en="Each new fee carries a new procedural name. The attacker uses deadlines and threats of losing already paid funds to keep the target engaged.">Svaka nova naknada nosi novo proceduralno ime. Napadač koristi rokove i pretnje gubitka već uplaćenih sredstava da drži metu u toku.</p>
        <ul class="bullets">
          <li data-sr="'naknada za aktivaciju garancije„, “PDV na finansijsku uslugu„, „osiguranje dokumenta„." data-en="“guarantee activation fee“, “VAT on financial service', 'document insurance'.">'naknada za aktivaciju garancije', 'PDV na finansijsku uslugu', 'osiguranje dokumenta'.</li>
          <li data-sr="svaka naknada dolazi s novim rokom: 24–48 sati." data-en="each fee comes with a new deadline: 24–48 hours.">svaka naknada dolazi s novim rokom: 24–48 sati.</li>
          <li data-sr="neplaćanje znači „gubitak prethodne uplate i ponude„." data-en="non-payment means “loss of previous payment and bid.">neplaćanje znači 'gubitak prethodne uplate i ponude'.</li>
          <li data-sr="napadač postaje sve teže dostupan između zahteva." data-en="attacker becomes increasingly difficult to reach between demands.">napadač postaje sve teže dostupan između zahteva.</li>
        </ul>
        <p class="muted" data-sr="Prag faze 4: meta je u ciklusu u kome svaka nova uplata čuva prethodnu." data-en="Phase 4 threshold: target is in a cycle where each new payment protects the previous one.">Prag faze 4: meta je u ciklusu u kome svaka nova uplata čuva prethodnu.</p>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 5 — Eskalacija: supervizor" data-en="Phase 5 — Escalation: supervisor">Faza 5 — Eskalacija: supervizor</h3>
        <p data-sr="Napadač uvodi „supervizora“ koji dodaje novu naknadu ili jednostavno prestaje da odgovara. U oba slučaja meta ostaje bez garancije i bez novca." data-en="The attacker introduces a 'supervisor' who adds a new fee, or simply stops responding. In both cases the target is left without a guarantee and without money.">Napadač uvodi 'supervizora' koji dodaje novu naknadu ili jednostavno prestaje da odgovara. U oba slučaja meta ostaje bez garancije i bez novca.</p>
        <ul class="bullets">
          <li data-sr="„supervizor“ potvrđuje prethodne zahteve i dodaje „naknadu za hitnu obradu„." data-en="“supervisor“ confirms previous demands and adds an 'urgent processing fee'.">'supervizor' potvrđuje prethodne zahteve i dodaje 'naknadu za hitnu obradu'.</li>
          <li data-sr="email adresa nalogodavca prestaje da funkcioniše." data-en="the contracting authority's email address stops functioning.">email adresa nalogodavca prestaje da funkcioniše.</li>
          <li data-sr="sajt tendera nestaje ili gasi podatke o projektu." data-en="the tender website disappears or removes project data.">sajt tendera nestaje ili gasi podatke o projektu.</li>
          <li data-sr="recovery prevara može kontaktirati metu nudeći „povraćaj premije„." data-en="a recovery scam may contact the target offering a “premium refund.">recovery prevara može kontaktirati metu nudeći 'povraćaj premije'.</li>
        </ul>
        <p class="muted" data-sr="Prag faze 5: meta prihvata gubitak ili postaje žrtva recovery prevare." data-en="Phase 5 threshold: target accepts the loss or becomes a victim of a recovery scam.">Prag faze 5: meta prihvata gubitak ili postaje žrtva recovery prevare.</p>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 6 — Nestanak: kontakt prestaje" data-en="Phase 6 — Disappearance: contact ceases">Faza 6 — Nestanak: kontakt prestaje</h3>
        <p data-sr="Napadač prestaje da odgovara, domeni prestaju da rade. Meta shvata da je tender bio lažan." data-en="The attacker stops responding, domains stop working. The target realises the tender was fake.">Napadač prestaje da odgovara, domeni prestaju da rade. Meta shvata da je tender bio lažan.</p>
        <ul class="bullets">
          <li data-sr="sve email adrese vezane za tender prestaju da rade." data-en="all email addresses associated with the tender stop working.">sve email adrese vezane za tender prestaju da rade.</li>
          <li data-sr="nalogodavac koji je imenovan ne zna ništa o tenderu." data-en="the named contracting authority has no knowledge of the tender.">nalogodavac koji je imenovan ne zna ništa o tenderu.</li>
          <li data-sr="meta može prijaviti slučaj policiji i platformi za nabavke." data-en="the target can report the case to police and the procurement platform.">meta može prijaviti slučaj policiji i platformi za nabavke.</li>
          <li data-sr="finansijska šteta može biti višestruka zbog uzastopnih naknada." data-en="financial damage can be multiple due to successive fees.">finansijska šteta može biti višestruka zbog uzastopnih naknada.</li>
        </ul>
        <p class="muted" data-sr="Prag faze 6: meta prihvata gubitak i pokreće prijave." data-en="Phase 6 threshold: target accepts the loss and initiates reports.">Prag faze 6: meta prihvata gubitak i pokreće prijave.</p>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="tender pristiže bez prethodnog učestvovanja u procesu javnih nabavki." data-en="tender arrives without prior participation in any procurement process.">tender pristiže bez prethodnog učestvovanja u procesu javnih nabavki.</li>
        <li data-sr="bid bond se ne može pribaviti od sopstvene banke — mora ići kroz nalogodavca." data-en="bid bond cannot be obtained from your own bank — must go through the contracting authority.">bid bond se ne može pribaviti od sopstvene banke — mora ići kroz nalogodavca.</li>
        <li data-sr="uplata ide na privatni račun umesto na escrow račun banke." data-en="payment goes to a private account instead of a bank escrow account.">uplata ide na privatni račun umesto na escrow račun banke.</li>
        <li data-sr="nalogodavac koji je imenovan ne može se pronaći u registru javnih nabavki." data-en="the named contracting authority cannot be found in the public procurement registry.">nalogodavac koji je imenovan ne može se pronaći u registru javnih nabavki.</li>
        <li data-sr="bid bond dokument ne stiže ni u rokovima navedenim u dokumentaciji." data-en="the bid bond document does not arrive even within the stated deadlines.">bid bond dokument ne stiže ni u rokovima navedenim u dokumentaciji.</li>
        <li data-sr="posle svake uplate dolazi nova proceduralna naknada s novim imenom." data-en="after each payment a new procedural fee arrives with a new name.">posle svake uplate dolazi nova proceduralna naknada s novim imenom.</li>
        <li data-sr="email domena imitira nalogodavca ali ima grešku ili drugačiji nastavak." data-en="email domain imitates the contracting authority but has a typo or different suffix.">email domena imitira nalogodavca ali ima grešku ili drugačiji nastavak.</li>
        <li data-sr="vrednost ugovora je nesrazmerno visoka u odnosu na opis posla." data-en="contract value is disproportionately high relative to the job description.">vrednost ugovora je nesrazmerno visoka u odnosu na opis posla.</li>
        <li data-sr="nikad se ne nudi direktan poziv s licem odgovornim za nabavku." data-en="a direct call with the procurement officer is never offered.">nikad se ne nudi direktan poziv s licem odgovornim za nabavku.</li>
        <li data-sr="dokumentacija sadrži greške u prevodu ili standardne klauzule koje nisu specifične za sektor." data-en="documentation contains translation errors or generic clauses not specific to the sector.">dokumentacija sadrži greške u prevodu ili standardne klauzule koje nisu specifične za sektor.</li>
        <li data-sr="rok za uplatu bid bonda je 24–48 sati — hitnost sprečava proveru." data-en="bid bond payment deadline is 24–48 hours — urgency prevents verification.">rok za uplatu bid bonda je 24–48 sati — hitnost sprečava proveru.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih koraka" data-en="Checks: 8 quick steps">Provere: 8 brzih koraka</h2>
      <ul class="bullets">
        <li data-sr="proveri nalogodavca u zvaničnom registru javnih nabavki." data-en="verify the contracting authority in the official public procurement registry.">proveri nalogodavca u zvaničnom registru javnih nabavki.</li>
        <li data-sr="pozovi nalogodavca direktno na broj s njihovog zvaničnog sajta i pitaj za tender." data-en="call the contracting authority directly on the number from their official website and ask about the tender.">pozovi nalogodavca direktno na broj s njihovog zvaničnog sajta i pitaj za tender.</li>
        <li data-sr="bid bond uvek pribavljaj od sopstvene banke ili osiguravajućeg društva — nikad od nalogodavca." data-en="always obtain bid bonds from your own bank or insurance company — never from the contracting authority.">bid bond uvek pribavljaj od sopstvene banke ili osiguravajućeg društva — nikad od nalogodavca.</li>
        <li data-sr="proveri email domenu nalogodavca na zvaničnom sajtu — ne koristeći link iz poruke." data-en="verify the contracting authority's email domain on their official website — not using the link in the message.">proveri email domenu nalogodavca na zvaničnom sajtu — ne koristeći link iz poruke.</li>
        <li data-sr="konsultuj pravnog ili finansijskog savetnika pre svake uplate vezane za tender." data-en="consult a legal or financial advisor before any tender-related payment.">konsultuj pravnog ili finansijskog savetnika pre svake uplate vezane za tender.</li>
        <li data-sr="proveri da li je tender objavljen na zvaničnom portalu nabavki pre bilo kakve akcije." data-en="check whether the tender was published on an official procurement portal before taking any action.">proveri da li je tender objavljen na zvaničnom portalu nabavki pre bilo kakve akcije.</li>
        <li data-sr="ne plaćaj nikakve naknade pre potpisivanja ugovora s nalogodavcem." data-en="do not pay any fees before signing a contract with the contracting authority.">ne plaćaj nikakve naknade pre potpisivanja ugovora s nalogodavcem.</li>
        <li data-sr="prijavi sumnjiv tender organizatoru tenderskih portala i policiji." data-en="report a suspicious tender to the tender portal operator and police.">prijavi sumnjiv tender organizatoru tenderskih portala i policiji.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Checklista pre uplate" data-en="Checklist before payment">Checklista pre uplate</h2>
      <ul class="bullets">
        <li data-sr="da li je tender objavljen na zvaničnom portalu javnih nabavki?" data-en="is the tender published on an official public procurement portal?">da li je tender objavljen na zvaničnom portalu javnih nabavki?</li>
        <li data-sr="da li sam proverio nalogodavca direktnim pozivom na zvanični broj?" data-en="have I verified the contracting authority by direct call to their official number?">da li sam proverio nalogodavca direktnim pozivom na zvanični broj?</li>
        <li data-sr="da li uplata premije bid bonda ide na račun banke, a ne na privatni račun?" data-en="does the bid bond premium go to a bank account, not a private account?">da li uplata premije bid bonda ide na račun banke, a ne na privatni račun?</li>
        <li data-sr="da li bid bond mogu pribaviti od sopstvene banke umesto od nalogodavca?" data-en="can I obtain the bid bond from my own bank instead of from the contracting authority?">da li bid bond mogu pribaviti od sopstvene banke umesto od nalogodavca?</li>
        <li data-sr="da li je rok za dostavljanje bid bonda kraći od 48 sati?" data-en="is the bid bond submission deadline shorter than 48 hours?">da li je rok za dostavljanje bid bonda kraći od 48 sati?</li>
        <li data-sr="da li je email nalogodavca identičan onom na njegovom zvaničnom sajtu?" data-en="is the contracting authority's email identical to the one on their official website?">da li je email nalogodavca identičan onom na njegovom zvaničnom sajtu?</li>
        <li data-sr="da li je ovo prva ili ponavljajuća naknada u tender procesu?" data-en="is this the first or a repeated fee in the tender process?">da li je ovo prva ili ponavljajuća naknada u tender procesu?</li>
        <li data-sr="da li mi je ponuđeno da dobijem bid bond od sopstvene finansijske institucije?" data-en="was I offered the option to obtain the bid bond from my own financial institution?">da li mi je ponuđeno da dobijem bid bond od sopstvene finansijske institucije?</li>
        <li data-sr="da li sam konsultovao pravnog savetnika pre potpisivanja tender dokumentacije?" data-en="have I consulted a legal advisor before signing the tender documentation?">da li sam konsultovao pravnog savetnika pre potpisivanja tender dokumentacije?</li>
        <li data-sr="da li vrednost ugovora odgovara obimu posla koji je opisan?" data-en="does the contract value correspond to the scope of work described?">da li vrednost ugovora odgovara obimu posla koji je opisan?</li>
        <li data-sr="da li postoji javni trag prethodnih tendera istog nalogodavca?" data-en="is there a public record of previous tenders from the same contracting authority?">da li postoji javni trag prethodnih tendera istog nalogodavca?</li>
        <li data-sr="da li je tender dokumentacija specifična za sektor ili generički šablonska?" data-en="is the tender documentation sector-specific or generically templated?">da li je tender dokumentacija specifična za sektor ili generički šablonska?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: order of actions">Ako sumnja krene: redosled poteza</h2>
      <ul class="bullets">
        <li data-sr="odmah zaustavi sve uplate i ne odgovaraj na pritisak rokova." data-en="immediately stop all payments and do not respond to deadline pressure.">odmah zaustavi sve uplate i ne odgovaraj na pritisak rokova.</li>
        <li data-sr="pozovi nalogodavca direktno na broj s njihovog zvaničnog sajta i pitaj za tender." data-en="call the contracting authority directly on the number from their official website and ask about the tender.">pozovi nalogodavca direktno na broj s njihovog zvaničnog sajta i pitaj za tender.</li>
        <li data-sr="sačuvaj svu dokumentaciju: tender, emailove, potvrde o uplati." data-en="save all documentation: tender, emails, payment confirmations.">sačuvaj svu dokumentaciju: tender, emailove, potvrde o uplati.</li>
        <li data-sr="prijavi incident banci i zatraži blokadu transakcija ka sumnjivom računu." data-en="report the incident to your bank and request blocking of transactions to the suspicious account.">prijavi incident banci i zatraži blokadu transakcija ka sumnjivom računu.</li>
        <li data-sr="prijavi slučaj policiji i portalu javnih nabavki." data-en="report the case to police and the public procurement portal.">prijavi slučaj policiji i portalu javnih nabavki.</li>
        <li data-sr="ne prihvataj ponude za „povrat premije„ od nepoznatih osoba." data-en="do not accept “premium refund“ offers from unknown people.">ne prihvataj ponude za 'povrat premije' od nepoznatih osoba.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
      <p class="muted" data-sr="Pitanja koja rade:" data-en="Questions that work:">Pitanja koja rade:</p>
      <ul class="bullets">
        <li data-sr="„Da li je tender objavljen na zvaničnom portalu javnih nabavki?“" data-en="Is the tender published on an official public procurement portal?">„Da li je tender objavljen na zvaničnom portalu javnih nabavki?“</li>
        <li data-sr="„Da li si pokušao da pribaviš bid bond od sopstvene banke?“" data-en="Did you try to obtain the bid bond from your own bank?">„Da li si pokušao da pribaviš bid bond od sopstvene banke?“</li>
        <li data-sr="„Da li si pozvao nalogodavca direktno na zvanični broj?“" data-en="Did you call the contracting authority directly on their official number?">„Da li si pozvao nalogodavca direktno na zvanični broj?“</li>
        <li data-sr="„Da li je ovo prva naknada u tender procesu ili je već bilo prethodnih?“" data-en="Is this the first fee in the tender process or were there previous ones?">„Da li je ovo prva naknada u tender procesu ili je već bilo prethodnih?“</li>
      </ul>
      <p class="muted" data-sr="Rečenice koje rade:" data-en="Phrases that work:">Rečenice koje rade:</p>
      <ul class="bullets">
        <li data-sr="„Bid bond se uvek pribavlja od sopstvene banke ili osiguravajućeg društva — ne od nalogodavca“.“" data-en="Bid bonds are always obtained from your own bank or insurance company — not from the contracting authority.">„Bid bond se uvek pribavlja od sopstvene banke ili osiguravajućeg društva — ne od nalogodavca“.“</li>
        <li data-sr="„Ako tender nije na zvaničnom portalu, ne postoji“.“" data-en="If the tender is not on an official portal, it does not exist.">„Ako tender nije na zvaničnom portalu, ne postoji“.“</li>
        <li data-sr="„Rok od 48 sati za uplatu garancije je taktika prevare, ne legitimna procedura“.“" data-en="A 48-hour deadline for bond payment is a scam tactic, not a legitimate procedure.">„Rok od 48 sati za uplatu garancije je taktika prevare, ne legitimna procedura“.“</li>
        <li data-sr="„Svaka naknada posle prve uplate brani prethodnu, ali ne dovodi do garancije“.“" data-en="Every fee after the first payment protects the previous one, but does not lead to a guarantee.">„Svaka naknada posle prve uplate brani prethodnu, ali ne dovodi do garancije“.“</li>
      </ul>
    </section>

    <section class="content-section">
      <h2 data-sr="Povezane prevare" data-en="Related scams">Povezane prevare</h2>
      <ul class="bullets">
        <li><a href="performance-bond-scam.html" data-sr="Prevara garancijom izvršenja" data-en="Performance bond scam">Prevara garancijom izvršenja</a></li>
        <li><a href="advance-payment-guarantee-scam.html" data-sr="Prevara garancijom avansnog plaćanja" data-en="Advance payment guarantee scam">Prevara garancijom avansnog plaćanja</a></li>
        <li><a href="procurement-tender-scam.html" data-sr="Prevara tenderom" data-en="Procurement tender scam">Prevara tenderom</a></li>
        <li><a href="procurement-award-scam.html" data-sr="Prevara dodelom ugovora" data-en="Procurement award scam">Prevara dodelom ugovora</a></li>
        <li><a href="advance-fee-fraud.html" data-sr="Uplata unapred" data-en="Advance-fee fraud">Uplata unapred</a></li>
        <li><a href="impersonation-scam.html" data-sr="Lažno predstavljanje" data-en="Impersonation scam">Lažno predstavljanje</a></li>
      </ul>
    </section>
  `
};
