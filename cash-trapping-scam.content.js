window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["cash-trapping-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
      <p data-sr="Novac ostaje unutra ili deluje zaglavljeno." data-en="Cash trapping means an object in the cash slot stops notes from coming out fully; the user thinks the withdrawal failed.">Novac ostaje unutra ili deluje zaglavljeno.</p>
      <p data-sr="Cilj je krađa gotovine koja je već isplaćena iz mehanizma." data-en="The fraudster offers help, asks you to re-enter the PIN, or waits for you to leave and pulls the cash.">Cilj je krađa gotovine koja je već isplaćena iz mehanizma.</p>
      <div class="callout" data-sr="<strong>Model:</strong> podizanje → novac zaglavljen → lažna pomoć ili odlazak žrtve → novac uzima prevarant." data-en="<strong>Model:</strong> withdrawal → cash stuck → fake help or victim leaves → fraudster takes cash."><strong>Model:</strong> podizanje → novac zaglavljen → lažna pomoć ili odlazak žrtve → novac uzima prevarant.</div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)" data-en="Timeline (phases + evolutions)">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Ugradnja ili postavljanje zamke" data-en="Phase 1 — Installing or placing the trap">Faza 1 — Ugradnja ili postavljanje zamke</h3>
        <p data-sr="Uređaj može biti diskretan i teško uočljiv." data-en="Tape, plastic strip, or a mechanical holder is placed in the cash slot to hold notes.">Uređaj može biti diskretan i teško uočljiv.</p>
        <ul class="bullets">
          <li data-sr="signal: otvor za novac izgleda uži ili ima ivicu koja nije fabrička." data-en="signal: cash slot looks narrower or has a non-factory edge.">signal: otvor za novac izgleda uži ili ima ivicu koja nije fabrička.</li>
          <li data-sr="signal: čudan otpor kada pokušate da vidite unutrašnjost otvora." data-en="signal: odd resistance when you try to see inside the slot.">signal: čudan otpor kada pokušate da vidite unutrašnjost otvora.</li>
          <li data-sr="signal: trag lepka ili plastike na ivici otvora." data-en="signal: glue or plastic residue on the slot edge.">signal: trag lepka ili plastike na ivici otvora.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> brzi vizuelni pregled otvora pre transakcije otkriva mnoge zamke." data-en="<strong>Threshold:</strong> a quick visual check of the slot before the transaction catches many traps."><strong>Prag faze:</strong> brzi vizuelni pregled otvora pre transakcije otkriva mnoge zamke.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Neuspešno izlazak novčanica" data-en="Phase 2 — Notes fail to exit">Faza 2 — Neuspešno izlazak novčanica</h3>
        <p data-sr="Korisnik čuje brojanje ili vidi poruku o isplati bez novca." data-en="The ATM reports a completed transaction but cash is not in your hand.">Korisnik čuje brojanje ili vidi poruku o isplati bez novca.</p>
        <ul class="bullets">
          <li data-sr="signal: zvuk mehanizma bez vidljivog novca." data-en="signal: mechanism sound with no visible cash.">signal: zvuk mehanizma bez vidljivog novca.</li>
          <li data-sr="signal: poruka o završnoj transakciji na ekranu." data-en="signal: message about completed transaction on screen.">signal: poruka o završnoj transakciji na ekranu.</li>
          <li data-sr="signal: novac vidljiv delimično ali ne može da se izvuče." data-en="signal: cash partly visible but cannot be pulled.">signal: novac vidljiv delimično ali ne može da se izvuče.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="card-trapping-scam.html" data-sr="Card trapping" data-en="Card trapping scam">Card trapping</a></li>
            <li><a href="atm-skimming.html" data-sr="Skimovanje na bankomatu" data-en="ATM skimming">Skimovanje na bankomatu</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> ne ponavljajte transakciju dok ne kontaktirate banku na zvaničnom broju." data-en="<strong>Threshold:</strong> do not repeat the transaction until you contact the bank on an official number."><strong>Prag faze:</strong> ne ponavljajte transakciju dok ne kontaktirate banku na zvaničnom broju.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Lažna pomoć stranca" data-en="Phase 3 — Stranger fake help">Faza 3 — Lažna pomoć stranca</h3>
        <p data-sr="Cilj je PIN, kartica, ili da odete od novca." data-en="A stranger suggests re-entering the PIN, nudging the cash, or waiting while they call maintenance.">Cilj je PIN, kartica, ili da odete od novca.</p>
        <ul class="bullets">
          <li data-sr="signal: pojavljuje se odmah posle neuspešnog izlaska novca." data-en="signal: appears right after cash fails to exit.">signal: pojavljuje se odmah posle neuspešnog izlaska novca.</li>
          <li data-sr="signal: zna tačno šta da uradite na tastaturi bez da radi za vašu banku." data-en="signal: knows exactly what to press without working for your bank.">signal: zna tačno šta da uradite na tastaturi bez da radi za vašu banku.</li>
          <li data-sr="signal: traži da pomerite karticu ili PIN da oslobodi novac." data-en="signal: asks you to move card or PIN to release cash.">signal: traži da pomerite karticu ili PIN da oslobodi novac.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> zvanična podrška se zove brojem sa kartice, ne uputstvima stranca na licu mesta." data-en="<strong>Threshold:</strong> official support is called via the card number, not a stranger's instructions on site."><strong>Prag faze:</strong> zvanična podrška se zove brojem sa kartice, ne uputstvima stranca na licu mesta.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 4 — Odlazak žrtve ili dupla transakcija" data-en="Phase 4 — Victim leaves or double transaction">Faza 4 — Odlazak žrtve ili dupla transakcija</h3>
        <p data-sr="Prevarant izvlači novac kada ste otišli." data-en="The victim leaves frustrated or tries another withdrawal while the trap still holds the cash.">Prevarant izvlači novac kada ste otišli.</p>
        <ul class="bullets">
          <li data-sr="signal: predlog da sačekate malo dok on čuva mesto." data-en="signal: suggestion to wait a bit while they hold the spot.">signal: predlog da sačekate malo dok on čuva mesto.</li>
          <li data-sr="signal: duplo podizanje na istom bankomatu u kratkom roku." data-en="signal: double withdrawal at the same ATM in a short window.">signal: duplo podizanje na istom bankomatu u kratkom roku.</li>
          <li data-sr="signal: novac nestane sa izvoda kao isplaćen iako ga niste uzeli." data-en="signal: cash leaves the statement as paid though you did not take it.">signal: novac nestane sa izvoda kao isplaćen iako ga niste uzeli.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> ostajanje uz bankomat dok ne stigne službeno uputstvo banke je bezbednije od odlaska." data-en="<strong>Threshold:</strong> staying at the ATM until the bank gives official guidance is safer than leaving."><strong>Prag faze:</strong> ostajanje uz bankomat dok ne stigne službeno uputstvo banke je bezbednije od odlaska.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 5 — Prijava i servisno uklanjanje" data-en="Phase 5 — Report and service removal">Faza 5 — Prijava i servisno uklanjanje</h3>
        <p data-sr="Novac se ponekad vrati ako nije ukraden." data-en="The bank or maintenance documents the incident and removes the object from the slot.">Novac se ponekad vrati ako nije ukraden.</p>
        <ul class="bullets">
          <li data-sr="signal: servis potvrđuje mehaničku zamku ili strano telo." data-en="signal: service confirms a mechanical trap or foreign object.">signal: servis potvrđuje mehaničku zamku ili strano telo.</li>
          <li data-sr="signal: banka pokreće spor oko isplate koja je završena bez preuzimanja." data-en="signal: bank opens a dispute for a completed payout not collected.">signal: banka pokreće spor oko isplate koja je završena bez preuzimanja.</li>
          <li data-sr="signal: video nadzor pokazuje lično izvlačenje novca od strane trećeg lica." data-en="signal: CCTV shows a third person pulling cash.">signal: video nadzor pokazuje lično izvlačenje novca od strane trećeg lica.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="friendly-helper-atm-scam.html" data-sr="Prijateljski pomoćnik kod bankomata" data-en="Friendly helper ATM scam">Prijateljski pomoćnik kod bankomata</a></li>
            <li><a href="atm-assistance-scam.html" data-sr="Lažna pomoć kod bankomata" data-en="ATM assistance scam">Lažna pomoć kod bankomata</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> broj reference prijave čuvajte za spor i policijsku prijavu." data-en="<strong>Threshold:</strong> keep the report reference for disputes and police."><strong>Prag faze:</strong> broj reference prijave čuvajte za spor i policijsku prijavu.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Blokada kartice i nadoknada" data-en="Phase 6 — Card block and reimbursement">Faza 6 — Blokada kartice i nadoknada</h3>
        <p data-sr="Dokumentacija mesta i vremena je ključna." data-en="If the trap also led to PIN compromise, the card is replaced; reimbursement depends on bank rules and evidence.">Dokumentacija mesta i vremena je ključna.</p>
        <ul class="bullets">
          <li data-sr="signal: neovlašćena transakcija posle incidenta na istom bankomatu." data-en="signal: unauthorized transaction after the incident at the same ATM.">signal: neovlašćena transakcija posle incidenta na istom bankomatu.</li>
          <li data-sr="signal: banka izdaje izjavu o tehničkom nalazu." data-en="signal: bank issues a technical finding statement.">signal: banka izdaje izjavu o tehničkom nalazu.</li>
          <li data-sr="signal: zamena kartice i PIN-a kao preventiva." data-en="signal: card and PIN replacement as prevention.">signal: zamena kartice i PIN-a kao preventiva.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> fotografija otvora pre odlaska (ako je bezbedno) pomaže istrazi." data-en="<strong>Threshold:</strong> a photo of the slot before leaving (if safe) helps investigation."><strong>Prag faze:</strong> fotografija otvora pre odlaska (ako je bezbedno) pomaže istrazi.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Novac ne izlazi iako ekran kaže da jeste." data-en="Cash does not exit though the screen says it did.">Novac ne izlazi iako ekran kaže da jeste.</li>
        <li data-sr="Otvor za novac izgleda drugačije od drugih bankomata iste banke." data-en="The cash slot looks different from other ATMs of the same bank.">Otvor za novac izgleda drugačije od drugih bankomata iste banke.</li>
        <li data-sr="Stranac se pojavljuje odmah sa savetom." data-en="A stranger appears immediately with advice.">Stranac se pojavljuje odmah sa savetom.</li>
        <li data-sr="Traže ponovni PIN da oslobodi novac." data-en="They ask for PIN again to release cash.">Traže ponovni PIN da oslobodi novac.</li>
        <li data-sr="Predlog da odete dok on čuva bankomat." data-en="Suggestion to leave while they guard the ATM.">Predlog da odete dok on čuva bankomat.</li>
        <li data-sr="Duplo podizanje u panici bez poziva banci." data-en="Double withdrawal in panic without calling the bank.">Duplo podizanje u panici bez poziva banci.</li>
        <li data-sr="Novčanice vidljive ali zaglavljene." data-en="Notes visible but jammed.">Novčanice vidljive ali zaglavljene.</li>
        <li data-sr="Tragovi lepka na otvoru." data-en="Glue traces on the slot.">Tragovi lepka na otvoru.</li>
        <li data-sr="Isti bankomat više puta prijavljen u zajednici." data-en="Same ATM reported multiple times in the community.">Isti bankomat više puta prijavljen u zajednici.</li>
        <li data-sr="Osećaj žurbe da završite pre nego što neko drugi dođe." data-en="Feeling rushed to finish before someone else arrives.">Osećaj žurbe da završite pre nego što neko drugi dođe.</li>
      </ul>
    </section>

    <section class="content-section">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <ol class="steps">
        <li data-sr="Pregledajte otvor za novac pre unošenja kartice." data-en="Inspect the cash slot before inserting the card.">Pregledajte otvor za novac pre unošenja kartice.</li>
        <li data-sr="Koristite bankomat u filijali ili dobro osvetljenoj zoni kad možete." data-en="Use a branch or well-lit ATM when you can.">Koristite bankomat u filijali ili dobro osvetljenoj zoni kad možete.</li>
        <li data-sr="Ako novac ne izađe, ostanite na mestu i zovite banku." data-en="If cash does not come out, stay put and call the bank.">Ako novac ne izađe, ostanite na mestu i zovite banku.</li>
        <li data-sr="Ne unosite PIN ponovo po tuđem savetu." data-en="Do not re-enter PIN on someone else's advice.">Ne unosite PIN ponovo po tuđem savetu.</li>
        <li data-sr="Ne dozvolite strancu da dodiruje bankomat ili vašu karticu." data-en="Do not let a stranger touch the ATM or your card.">Ne dozvolite strancu da dodiruje bankomat ili vašu karticu.</li>
        <li data-sr="Sačuvajte vreme transakcije i lokaciju za prijavu." data-en="Save transaction time and location for the report.">Sačuvajte vreme transakcije i lokaciju za prijavu.</li>
        <li data-sr="Blokirajte karticu ako sumnjate da je PIN viđen." data-en="Block the card if you suspect the PIN was seen.">Blokirajte karticu ako sumnjate da je PIN viđen.</li>
        <li data-sr="Prijavite sumnjivi otvor održavanju banke." data-en="Report a suspicious slot to bank maintenance.">Prijavite sumnjivi otvor održavanju banke.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
      <ul class="bullets">
        <li data-sr="Da li sam pregledao otvor za novac pre transakcije?" data-en="Did I inspect the cash slot before the transaction?">Da li sam pregledao otvor za novac pre transakcije?</li>
        <li data-sr="Da li ekran i izvod pokazuju istu završenu isplatu?" data-en="Do the screen and statement show the same completed payout?">Da li ekran i izvod pokazuju istu završenu isplatu?</li>
        <li data-sr="Da li sam odmah pozvao banku na zvanični broj?" data-en="Did I call the bank immediately on an official number?">Da li sam odmah pozvao banku na zvanični broj?</li>
        <li data-sr="Da li sam odbio pomoć stranca?" data-en="Did I refuse stranger help?">Da li sam odbio pomoć stranca?</li>
        <li data-sr="Da li sam ponavljao transakciju iz panike?" data-en="Did I repeat the transaction out of panic?">Da li sam ponavljao transakciju iz panike?</li>
        <li data-sr="Da li sam ostao uz bankomat dok sam čekao uputstvo?" data-en="Did I stay at the ATM while waiting for guidance?">Da li sam ostao uz bankomat dok sam čekao uputstvo?</li>
        <li data-sr="Da li imam fotografiju otvora ako je bezbedno snimljena?" data-en="Do I have a photo of the slot if safely taken?">Da li imam fotografiju otvora ako je bezbedno snimljena?</li>
        <li data-sr="Da li treba policijska prijava?" data-en="Should there be a police report?">Da li treba policijska prijava?</li>
        <li data-sr="Da li treba blokada kartice?" data-en="Should the card be blocked?">Da li treba blokada kartice?</li>
        <li data-sr="Da li je bankomat u zoni sa video nadzorom?" data-en="Is the ATM in a CCTV-covered area?">Da li je bankomat u zoni sa video nadzorom?</li>
        <li data-sr="Da li sam sačuvao broj reference prijave banke?" data-en="Did I save the bank report reference number?">Da li sam sačuvao broj reference prijave banke?</li>
        <li data-sr="Da li sam proverio izvod narednog dana?" data-en="Did I check the statement the next day?">Da li sam proverio izvod narednog dana?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Ne dirajte otvor jakom silom; pozovite banku." data-en="Do not force the slot; call the bank.">Ne dirajte otvor jakom silom; pozovite banku.</li>
        <li data-sr="Ostanite uz bankomat dok ne dobijete jasno uputstvo." data-en="Stay at the ATM until you get clear guidance.">Ostanite uz bankomat dok ne dobijete jasno uputstvo.</li>
        <li data-sr="Odbijte svaku pomoć stranca i zadržite privatnost PIN-a." data-en="Refuse all stranger help and keep PIN private.">Odbijte svaku pomoć stranca i zadržite privatnost PIN-a.</li>
        <li data-sr="Zabeležite vreme, adresu bankomata i serijski broj ako je vidljiv." data-en="Note time, ATM address, and serial if visible.">Zabeležite vreme, adresu bankomata i serijski broj ako je vidljiv.</li>
        <li data-sr="Zatražite istragu i spor ako je novac isplaćen a nije preuzet." data-en="Request investigation and dispute if cash was paid out but not taken.">Zatražite istragu i spor ako je novac isplaćen a nije preuzet.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li je novac fizički izašao iz otvora?" data-en="Did cash physically exit the slot?">Da li je novac fizički izašao iz otvora?</li>
            <li data-sr="Da li je neko nudio pomoć odmah?" data-en="Did someone offer help immediately?">Da li je neko nudio pomoć odmah?</li>
            <li data-sr="Da li je banka zvana pre ponavljanja transakcije?" data-en="Was the bank called before repeating the transaction?">Da li je banka zvana pre ponavljanja transakcije?</li>
            <li data-sr="Da li je PIN unet drugi put po tuđem savetu?" data-en="Was the PIN entered again on someone else's advice?">Da li je PIN unet drugi put po tuđem savetu?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Ne pomeraj otvor — zovem broj sa kartice i čekam uputstvo." data-en="Do not force the slot — I am calling the card number and waiting for guidance.">Ne pomeraj otvor — zovem broj sa kartice i čekam uputstvo.</li>
            <li data-sr="Ne treba mi pomoć stranca; ostajem ovde dok banka ne odgovori." data-en="I do not need stranger help; I stay here until the bank responds.">Ne treba mi pomoć stranca; ostajem ovde dok banka ne odgovori.</li>
            <li data-sr="Neću ponavljati PIN ni transakciju bez banke." data-en="I will not repeat PIN or transaction without the bank.">Neću ponavljati PIN ni transakciju bez banke.</li>
            <li data-sr="Hajde u filijalu zajedno umesto da rizikujemo na ulici." data-en="Let's go to the branch together instead of risking on the street.">Hajde u filijalu zajedno umesto da rizikujemo na ulici.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
