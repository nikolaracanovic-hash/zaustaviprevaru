window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["card-trapping-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
      <p data-sr="Kartica ostaje u utoru dok neko ne iskoristi vaš PIN ili ne dođe pomoćnik." data-en="Card trapping keeps the card in the ATM using a mechanical device, tape, or a software trick that does not end the session as you expect.">Kartica ostaje u utoru dok neko ne iskoristi vaš PIN ili ne dođe pomoćnik.</p>
      <p data-sr="Često ide u paru s lažnom pomoći." data-en="The goal is to make you leave the ATM, re-enter PIN on a fake device, or let the fraudster take the card later.">Često ide u paru s lažnom pomoći.</p>
      <div class="callout" data-sr="<strong>Model:</strong> kartica zaglavljena → panika → stranac pomaže ili vi odlazite → krađa kartice ili podataka." data-en="<strong>Model:</strong> card stuck → panic → stranger helps or you leave → card or data theft."><strong>Model:</strong> kartica zaglavljena → panika → stranac pomaže ili vi odlazite → krađa kartice ili podataka.</div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)" data-en="Timeline (phases + evolutions)">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Postavljanje zamke u čitaču" data-en="Phase 1 — Trap in the reader">Faza 1 — Postavljanje zamke u čitaču</h3>
        <p data-sr="Korisnik ne vidi razliku dok ne završi transakciju." data-en="An object is inserted in the card slot that blocks ejection or slows chip reads.">Korisnik ne vidi razliku dok ne završi transakciju.</p>
        <ul class="bullets">
          <li data-sr="signal: utor deluje už ili čvršći pri ubacivanju." data-en="signal: slot feels tighter or stiffer on insert.">signal: utor deluje už ili čvršći pri ubacivanju.</li>
          <li data-sr="signal: kartica ulazi teže nego na drugim bankomatima iste banke." data-en="signal: card inserts harder than at other ATMs of the same bank.">signal: kartica ulazi teže nego na drugim bankomatima iste banke.</li>
          <li data-sr="signal: vidljiv plastični rub koji nije deo kućišta." data-en="signal: visible plastic lip not part of the housing.">signal: vidljiv plastični rub koji nije deo kućišta.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> ako ubacivanje nije glatko, prekinite i koristite drugi bankomat." data-en="<strong>Threshold:</strong> if insertion is not smooth, stop and use another ATM."><strong>Prag faze:</strong> ako ubacivanje nije glatko, prekinite i koristite drugi bankomat.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Transakcija koja ne završava očekivano" data-en="Phase 2 — Transaction does not end as expected">Faza 2 — Transakcija koja ne završava očekivano</h3>
        <p data-sr="Korisnik ne može da je izvadi normalno." data-en="The screen stays on an error or wait message while the card remains inside.">Korisnik ne može da je izvadi normalno.</p>
        <ul class="bullets">
          <li data-sr="signal: poruka o grešci čitača ili čipa bez objašnjenja u uputstvu banke." data-en="signal: reader or chip error without explanation in bank guidance.">signal: poruka o grešci čitača ili čipa bez objašnjenja u uputstvu banke.</li>
          <li data-sr="signal: taster za otkaz ne vraća karticu." data-en="signal: cancel does not return the card.">signal: taster za otkaz ne vraća karticu.</li>
          <li data-sr="signal: bankomat traži ponovni unos PIN-a više puta." data-en="signal: ATM asks for PIN re-entry multiple times.">signal: bankomat traži ponovni unos PIN-a više puta.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="atm-skimming.html" data-sr="Skimovanje na bankomatu" data-en="ATM skimming">Skimovanje na bankomatu</a></li>
            <li><a href="cash-trapping-scam.html" data-sr="Cash trapping" data-en="Cash trapping scam">Cash trapping</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> višestruki zahtev za PIN-om uz zaglavljenu karticu je ozbiljan signal prekida." data-en="<strong>Threshold:</strong> repeated PIN prompts with a stuck card is a serious stop signal."><strong>Prag faze:</strong> višestruki zahtev za PIN-om uz zaglavljenu karticu je ozbiljan signal prekida.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Lažna pomoć i prikupljanje PIN-a" data-en="Phase 3 — Fake help and PIN capture">Faza 3 — Lažna pomoć i prikupljanje PIN-a</h3>
        <p data-sr="Kombinacija zaglavljene kartice i viđenog PIN-a zatvara napad." data-en="A stranger offers a fix, asks you to re-enter the PIN elsewhere, or watches your presses.">Kombinacija zaglavljene kartice i viđenog PIN-a zatvara napad.</p>
        <ul class="bullets">
          <li data-sr="signal: savet da odete na drugi bankomat bez kartice dok on čuva uređaj." data-en="signal: advice to go to another ATM without the card while they watch the machine.">signal: savet da odete na drugi bankomat bez kartice dok on čuva uređaj.</li>
          <li data-sr="signal: ponuda da lagano izvuče karticu dok vi unosite kod." data-en="signal: offer to gently pull the card while you enter a code.">signal: ponuda da lagano izvuče karticu dok vi unosite kod.</li>
          <li data-sr="signal: mobilni telefon usmeren na tastaturu." data-en="signal: mobile phone aimed at the keypad.">signal: mobilni telefon usmeren na tastaturu.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> blokirajte karticu odmah ako je zaglavljena i ako je bilo ko video ili tražio PIN." data-en="<strong>Threshold:</strong> block the card immediately if it is stuck and anyone saw or asked for the PIN."><strong>Prag faze:</strong> blokirajte karticu odmah ako je zaglavljena i ako je bilo ko video ili tražio PIN.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 4 — Fizičko preuzimanje kartice" data-en="Phase 4 — Physical card capture">Faza 4 — Fizičko preuzimanje kartice</h3>
        <p data-sr="Kartica se koristi odmah na drugom mestu." data-en="The attacker pulls the card after you leave or with fake staff guidance.">Kartica se koristi odmah na drugom mestu.</p>
        <ul class="bullets">
          <li data-sr="signal: transakcije odmah posle napuštanja bankomata." data-en="signal: transactions right after you leave the ATM.">signal: transakcije odmah posle napuštanja bankomata.</li>
          <li data-sr="signal: podizanje na drugom bankomatu u istom satu." data-en="signal: withdrawal at another ATM in the same hour.">signal: podizanje na drugom bankomatu u istom satu.</li>
          <li data-sr="signal: online kupovina ako je PIN uhvaćen." data-en="signal: online purchase if PIN was captured.">signal: online kupovina ako je PIN uhvaćen.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> brza blokada smanjuje štetu pre nego što se iscrpi limit." data-en="<strong>Threshold:</strong> fast blocking limits damage before the limit is drained."><strong>Prag faze:</strong> brza blokada smanjuje štetu pre nego što se iscrpi limit.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 5 — Prijava i servisno uklanjanje zamke" data-en="Phase 5 — Report and trap removal">Faza 5 — Prijava i servisno uklanjanje zamke</h3>
        <p data-sr="To podržava spor i istragu." data-en="The bank or service confirms a foreign object in the reader and documents the incident.">To podržava spor i istragu.</p>
        <ul class="bullets">
          <li data-sr="signal: tehnički izveštaj o mehaničkoj zamki." data-en="signal: technical report on a mechanical trap.">signal: tehnički izveštaj o mehaničkoj zamki.</li>
          <li data-sr="signal: video zapis osobe koja dodiruje čitač pre vašeg dolaska." data-en="signal: video of someone touching the reader before you arrived.">signal: video zapis osobe koja dodiruje čitač pre vašeg dolaska.</li>
          <li data-sr="signal: serija prijava za isti bankomat." data-en="signal: series of reports for the same ATM.">signal: serija prijava za isti bankomat.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="friendly-helper-atm-scam.html" data-sr="Prijateljski pomoćnik kod bankomata" data-en="Friendly helper ATM scam">Prijateljski pomoćnik kod bankomata</a></li>
            <li><a href="atm-shoulder-surfing.html" data-sr="Shoulder surfing na bankomatu" data-en="ATM shoulder surfing">Shoulder surfing na bankomatu</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> broj reference servisa čuvajte zajedno sa prijavom policiji." data-en="<strong>Threshold:</strong> keep the service reference with the police report."><strong>Prag faze:</strong> broj reference servisa čuvajte zajedno sa prijavom policiji.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Nova kartica i novi PIN" data-en="Phase 6 — New card and PIN">Faza 6 — Nova kartica i novi PIN</h3>
        <p data-sr="Stari instrumenti se zatvaraju." data-en="After the incident the bank issues a new card; the PIN changes because it may be compromised.">Stari instrumenti se zatvaraju.</p>
        <ul class="bullets">
          <li data-sr="signal: potvrda o blokadi starog broja kartice." data-en="signal: confirmation of old card number block.">signal: potvrda o blokadi starog broja kartice.</li>
          <li data-sr="signal: uputstvo da proverite izvod narednih 14 dana." data-en="signal: guidance to check statements for the next 14 days.">signal: uputstvo da proverite izvod narednih 14 dana.</li>
          <li data-sr="signal: savet da koristite isključivo filijalne bankomate neko vreme." data-en="signal: advice to use only branch ATMs for a while.">signal: savet da koristite isključivo filijalne bankomate neko vreme.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> isti PIN na novoj kartici nakon incidenta je visok rizik." data-en="<strong>Threshold:</strong> reusing the same PIN on a new card after the incident is high risk."><strong>Prag faze:</strong> isti PIN na novoj kartici nakon incidenta je visok rizik.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Kartica ne izlazi nakon transakcije." data-en="Card does not eject after the transaction.">Kartica ne izlazi nakon transakcije.</li>
        <li data-sr="Utor deluje drugačije nego inače." data-en="The slot feels different than usual.">Utor deluje drugačije nego inače.</li>
        <li data-sr="Višestruki zahtev za PIN-om." data-en="Multiple PIN prompts.">Višestruki zahtev za PIN-om.</li>
        <li data-sr="Stranac nudi pomoć odmah." data-en="A stranger offers help immediately.">Stranac nudi pomoć odmah.</li>
        <li data-sr="Savet da odete od bankomata dok je kartica unutra." data-en="Advice to leave while the card is inside.">Savet da odete od bankomata dok je kartica unutra.</li>
        <li data-sr="Telefon usmeren na tastaturu." data-en="Phone aimed at keypad.">Telefon usmeren na tastaturu.</li>
        <li data-sr="Lažno oslobađanje kartice uz pritisak ili alat." data-en="Fake release of the card with force or tools.">Lažno oslobađanje kartice uz pritisak ili alat.</li>
        <li data-sr="Transakcije minutima posle problema na bankomatu." data-en="Transactions minutes after the ATM problem.">Transakcije minutima posle problema na bankomatu.</li>
        <li data-sr="Isti bankomat više puta u lokalnim upozorenjima." data-en="Same ATM repeatedly in local warnings.">Isti bankomat više puta u lokalnim upozorenjima.</li>
        <li data-sr="Osećaj da morate da se poslužite tuđim uputstvom da biste završili." data-en="Feeling you must follow someone else's instructions to finish.">Osećaj da morate da se poslužite tuđim uputstvom da biste završili.</li>
      </ul>
    </section>

    <section class="content-section">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <ol class="steps">
        <li data-sr="Proverite utor pre ubacivanja kartice." data-en="Check the slot before inserting the card.">Proverite utor pre ubacivanja kartice.</li>
        <li data-sr="Ako ubacivanje nije glatko, koristite drugi bankomat." data-en="If insertion is not smooth, use another ATM.">Ako ubacivanje nije glatko, koristite drugi bankomat.</li>
        <li data-sr="Ne unosite PIN više puta bez jasnog razloga na ekranu banke." data-en="Do not enter PIN repeatedly without a clear on-screen bank reason.">Ne unosite PIN više puta bez jasnog razloga na ekranu banke.</li>
        <li data-sr="Pozovite banku na broj sa kartice ako kartica ostane unutra." data-en="Call the bank on the card number if the card stays inside.">Pozovite banku na broj sa kartice ako kartica ostane unutra.</li>
        <li data-sr="Blokirajte karticu ako sumnjate na kompromitovanje." data-en="Block the card if you suspect compromise.">Blokirajte karticu ako sumnjate na kompromitovanje.</li>
        <li data-sr="Odbijte pomoć stranca i čekajte službeno uputstvo." data-en="Refuse stranger help and wait for official guidance.">Odbijte pomoć stranca i čekajte službeno uputstvo.</li>
        <li data-sr="Sačuvajte vreme, adresu i ID bankomata." data-en="Save time, address, and ATM ID.">Sačuvajte vreme, adresu i ID bankomata.</li>
        <li data-sr="Prijavite sumnjiv utor održavanju." data-en="Report a suspicious slot to maintenance.">Prijavite sumnjiv utor održavanju.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
      <ul class="bullets">
        <li data-sr="Da li je utor izgledao normalno pre ubacivanja?" data-en="Did the slot look normal before insert?">Da li je utor izgledao normalno pre ubacivanja?</li>
        <li data-sr="Da li kartica izlazi posle otkaza ili kraja transakcije?" data-en="Does the card eject after cancel or end?">Da li kartica izlazi posle otkaza ili kraja transakcije?</li>
        <li data-sr="Da li sam odmah zvao banku?" data-en="Did I call the bank immediately?">Da li sam odmah zvao banku?</li>
        <li data-sr="Da li je neko video moj PIN?" data-en="Did anyone see my PIN?">Da li je neko video moj PIN?</li>
        <li data-sr="Da li sam blokirao karticu?" data-en="Did I block the card?">Da li sam blokirao karticu?</li>
        <li data-sr="Da li sam odbio pomoć stranca?" data-en="Did I refuse stranger help?">Da li sam odbio pomoć stranca?</li>
        <li data-sr="Da li izvod pokazuje aktivnost posle incidenta?" data-en="Does the statement show activity after the incident?">Da li izvod pokazuje aktivnost posle incidenta?</li>
        <li data-sr="Da li treba policijska prijava?" data-en="Should there be a police report?">Da li treba policijska prijava?</li>
        <li data-sr="Da li imam broj reference prijave banke?" data-en="Do I have the bank report reference?">Da li imam broj reference prijave banke?</li>
        <li data-sr="Da li treba nova kartica i novi PIN?" data-en="Do I need a new card and PIN?">Da li treba nova kartica i novi PIN?</li>
        <li data-sr="Da li mogu da koristim filijalni bankomat ubuduće?" data-en="Can I use a branch ATM going forward?">Da li mogu da koristim filijalni bankomat ubuduće?</li>
        <li data-sr="Da li sam proverio izvod naredne dve nedelje?" data-en="Did I check the statement for the next two weeks?">Da li sam proverio izvod naredne dve nedelje?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Ne forsirajte izvlačenje kartice — može oštetiti čip." data-en="Do not force card pull — it may damage the chip.">Ne forsirajte izvlačenje kartice — može oštetiti čip.</li>
        <li data-sr="Pozovite broj na poleđini kartice i zatražite blokadu." data-en="Call the number on the card back and request a block.">Pozovite broj na poleđini kartice i zatražite blokadu.</li>
        <li data-sr="Ostanite uz bankomat dok ne dobijete uputstvo ako je bezbedno." data-en="Stay at the ATM until guided if it is safe.">Ostanite uz bankomat dok ne dobijete uputstvo ako je bezbedno.</li>
        <li data-sr="Ne unosite PIN na drugom uređaju po tuđem savetu." data-en="Do not enter PIN on another device on advice from others.">Ne unosite PIN na drugom uređaju po tuđem savetu.</li>
        <li data-sr="Prijavite lokaciju i vreme policiji ako je došlo do krađe." data-en="Report location and time to police if theft occurred.">Prijavite lokaciju i vreme policiji ako je došlo do krađe.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li je kartica još u bankomatu?" data-en="Is the card still in the ATM?">Da li je kartica još u bankomatu?</li>
            <li data-sr="Da li je neko nudio da izvuče karticu?" data-en="Did someone offer to pull the card?">Da li je neko nudio da izvuče karticu?</li>
            <li data-sr="Da li je kartica već blokirana?" data-en="Is the card already blocked?">Da li je kartica već blokirana?</li>
            <li data-sr="Da li su transakcije krenule posle toga?" data-en="Did transactions start after that?">Da li su transakcije krenule posle toga?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Zovemo broj sa kartice odmah i blokiramo instrument." data-en="We call the card number now and block the instrument.">Zovemo broj sa kartice odmah i blokiramo instrument.</li>
            <li data-sr="Ne izvlačimo karticu silom i ne slušamo stranca." data-en="We do not force the card out and we do not listen to a stranger.">Ne izvlačimo karticu silom i ne slušamo stranca.</li>
            <li data-sr="Čekamo uputstvo banke ili obezbeđenje filijale." data-en="We wait for bank guidance or branch security.">Čekamo uputstvo banke ili obezbeđenje filijale.</li>
            <li data-sr="Ako postoji sumnja na PIN, tražimo novi PIN uz novu karticu." data-en="If the PIN may be compromised, we request a new PIN with a new card.">Ako postoji sumnja na PIN, tražimo novi PIN uz novu karticu.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
