window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["friendly-helper-atm-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
      <p data-sr="Pomoć je pokrivač za preuzimanje toka transakcije." data-en="A stranger offers ATM help: translating the menu, holding the card, or fixing an error while you lose control of amount and PIN.">Pomoć je pokrivač za preuzimanje toka transakcije.</p>
      <p data-sr="Cilj je podizanje, transfer, ili snimanje podataka." data-en="It often works in a pair with someone who watches the PIN or waits to take the card.">Cilj je podizanje, transfer, ili snimanje podataka.</p>
      <div class="callout" data-sr="<strong>Model:</strong> kontakt → lažna pomoć → kartica/PIN pod tuđom kontrolom → praznjenje ili krađa kartice." data-en="<strong>Model:</strong> contact → fake help → card/PIN under someone else's control → drain or card theft."><strong>Model:</strong> kontakt → lažna pomoć → kartica/PIN pod tuđom kontrolom → praznjenje ili krađa kartice.</div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)" data-en="Timeline (phases + evolutions)">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Pristup i izgradnja poverenja" data-en="Phase 1 — Approach and trust building">Faza 1 — Pristup i izgradnja poverenja</h3>
        <p data-sr="Uvod je neposredan i društven." data-en="A comment on a complicated menu, rush, or fake solidarity with an older person.">Uvod je neposredan i društven.</p>
        <ul class="bullets">
          <li data-sr="signal: naglašavanje da su iz banke bez identifikacije koju možete proveriti." data-en="signal: insisting they are from the bank without ID you can verify.">signal: naglašavanje da su iz banke bez identifikacije koju možete proveriti.</li>
          <li data-sr="signal: ponuda pomoći pre nego što zatražite bilo šta." data-en="signal: help offered before you ask for anything.">signal: ponuda pomoći pre nego što zatražite bilo šta.</li>
          <li data-sr="signal: druga osoba stoji sa strane i čeka red bez razloga." data-en="signal: another person stands aside and waits in line without reason.">signal: druga osoba stoji sa strane i čeka red bez razloga.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> svaka nezatražena pomoć uz bankomat zaslužuje podrazumevano odbijanje." data-en="<strong>Threshold:</strong> every unsolicited help at an ATM deserves a default refusal."><strong>Prag faze:</strong> svaka nezatražena pomoć uz bankomat zaslužuje podrazumevano odbijanje.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Preuzimanje kartice ili menija" data-en="Phase 2 — Taking the card or menu">Faza 2 — Preuzimanje kartice ili menija</h3>
        <p data-sr="Kontrola menija znači kontrolu iznosa i odredišta." data-en="The helper inserts the card, picks options, or holds the device so you cannot see the screen.">Kontrola menija znači kontrolu iznosa i odredišta.</p>
        <ul class="bullets">
          <li data-sr="signal: traže karticu da brže prođe." data-en="signal: they ask for the card so it goes faster.">signal: traže karticu da brže prođe.</li>
          <li data-sr="signal: okreću ekran od vas tokom unosa PIN-a." data-en="signal: they turn the screen away during PIN entry.">signal: okreću ekran od vas tokom unosa PIN-a.</li>
          <li data-sr="signal: govore vam koji broj da pritisnete bez objašnjenja šta meni znači." data-en="signal: they tell you which keys to press without explaining the menu.">signal: govore vam koji broj da pritisnete bez objašnjenja šta meni znači.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="atm-assistance-scam.html" data-sr="Lažna pomoć kod bankomata" data-en="ATM assistance scam">Lažna pomoć kod bankomata</a></li>
            <li><a href="atm-shoulder-surfing.html" data-sr="Shoulder surfing na bankomatu" data-en="ATM shoulder surfing">Shoulder surfing na bankomatu</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> čim kartica nije u vašoj ruci, prekidajte sesiju." data-en="<strong>Threshold:</strong> as soon as the card is not in your hand, end the session."><strong>Prag faze:</strong> čim kartica nije u vašoj ruci, prekidajte sesiju.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Izvlačenje PIN-a ili autorizacija" data-en="Phase 3 — Drawing out PIN or authorization">Faza 3 — Izvlačenje PIN-a ili autorizacija</h3>
        <p data-sr="Pogrešan tip transakcije je čest trik." data-en="They ask you to enter the PIN while they watch, or steer you to confirm a transfer instead of a withdrawal.">Pogrešan tip transakcije je čest trik.</p>
        <ul class="bullets">
          <li data-sr="signal: ekran pokazuje transfer ili uplata umesto gotovine." data-en="signal: screen shows transfer or payment instead of cash.">signal: ekran pokazuje transfer ili uplata umesto gotovine.</li>
          <li data-sr="signal: iznos je veći nego što ste rekli." data-en="signal: amount is higher than you said.">signal: iznos je veći nego što ste rekli.</li>
          <li data-sr="signal: traže da ponovite PIN jer nije prošlo." data-en="signal: they ask you to repeat the PIN because it failed.">signal: traže da ponovite PIN jer nije prošlo.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> nikada ne unosite PIN dok neko gleda ekran ili tastaturu izbliza." data-en="<strong>Threshold:</strong> never enter a PIN while someone watches the screen or keypad up close."><strong>Prag faze:</strong> nikada ne unosite PIN dok neko gleda ekran ili tastaturu izbliza.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 4 — Završetak uz oduzimanje kartice ili gotovine" data-en="Phase 4 — Finish with card or cash taken">Faza 4 — Završetak uz oduzimanje kartice ili gotovine</h3>
        <p data-sr="Žrtva ostaje sa praznim očekivanjem ili pogrešnom karticom." data-en="Cash or the card passes through other hands under an error story or faster counting.">Žrtva ostaje sa praznim očekivanjem ili pogrešnom karticom.</p>
        <ul class="bullets">
          <li data-sr="signal: moram da ponovo ubacim karticu u drugi bankomat." data-en="signal: I have to insert the card in another ATM again.">signal: moram da ponovo ubacim karticu u drugi bankomat.</li>
          <li data-sr="signal: gotovina se privremeno drži da se proveri autentičnost." data-en="signal: cash is temporarily held to check authenticity.">signal: gotovina se privremeno drži da se proveri autentičnost.</li>
          <li data-sr="signal: kartica se vraća kasnije uz priču o blokadi." data-en="signal: card is returned later with a block story.">signal: kartica se vraća kasnije uz priču o blokadi.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> ne predajte gotovinu ni karticu nepoznatoj osobi nakon bankomata." data-en="<strong>Threshold:</strong> do not hand cash or card to a stranger after the ATM."><strong>Prag faze:</strong> ne predajte gotovinu ni karticu nepoznatoj osobi nakon bankomata.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 5 — Otkrivanje na izvodu" data-en="Phase 5 — Discovery on statement">Faza 5 — Otkrivanje na izvodu</h3>
        <p data-sr="Žrtva shvata tek u aplikaciji ili na izvodu." data-en="Transfers, withdrawals, or payments appear that do not match your intent.">Žrtva shvata tek u aplikaciji ili na izvodu.</p>
        <ul class="bullets">
          <li data-sr="signal: nekoliko transakcija u nizu u kratkom roku." data-en="signal: several transactions in a row in a short window.">signal: nekoliko transakcija u nizu u kratkom roku.</li>
          <li data-sr="signal: primaoci koje ne prepoznajete." data-en="signal: recipients you do not recognize.">signal: primaoci koje ne prepoznajete.</li>
          <li data-sr="signal: podizanja na drugom bankomatu odmah posle susreta." data-en="signal: withdrawals at another ATM right after the encounter.">signal: podizanja na drugom bankomatu odmah posle susreta.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="distraction-theft-scam.html" data-sr="Prevara pažnjom" data-en="Distraction theft scam">Prevara pažnjom</a></li>
            <li><a href="bank-impersonation.html" data-sr="Lažna banka" data-en="Bank impersonation scam">Lažna banka</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> prijava u prvih sat vremena pomaže banki da zaustavi lanac." data-en="<strong>Threshold:</strong> reporting in the first hour helps the bank stop the chain."><strong>Prag faze:</strong> prijava u prvih sat vremena pomaže banki da zaustavi lanac.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Blokada, istraga i edukacija" data-en="Phase 6 — Block, investigation, education">Faza 6 — Blokada, istraga i edukacija</h3>
        <p data-sr="Ponavljanje istog obrasca sprečava se jasnim pravilom porodice." data-en="The bank blocks instruments, investigates, and often advises using only self-service flow without strangers later.">Ponavljanje istog obrasca sprečava se jasnim pravilom porodice.</p>
        <ul class="bullets">
          <li data-sr="signal: potreba za novom karticom i novim PIN-om." data-en="signal: need for a new card and new PIN.">signal: potreba za novom karticom i novim PIN-om.</li>
          <li data-sr="signal: dokumentacija za policiju ili banku sa snimcima nadzora." data-en="signal: documentation for police or bank with CCTV.">signal: dokumentacija za policiju ili banku sa snimcima nadzora.</li>
          <li data-sr="signal: savet da se koriste filijalni bankomati sa osobljem u vidnom polju." data-en="signal: advice to use branch ATMs with staff in sight.">signal: savet da se koriste filijalni bankomati sa osobljem u vidnom polju.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> porodično pravilo nikakva pomoć stranca uz bankomat smanjuje rizik za starije članove." data-en="<strong>Threshold:</strong> a family rule no stranger help at the ATM reduces risk for older members."><strong>Prag faze:</strong> porodično pravilo nikakva pomoć stranca uz bankomat smanjuje rizik za starije članove.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Nepoznata osoba nudi pomoć bez da ste je zatražili." data-en="A stranger offers help you did not request.">Nepoznata osoba nudi pomoć bez da ste je zatražili.</li>
        <li data-sr="Traže da uzmu karticu u svoje ruke." data-en="They ask to take the card in their hands.">Traže da uzmu karticu u svoje ruke.</li>
        <li data-sr="Okreću ekran od vas tokom unosa ili potvrde." data-en="They turn the screen away during entry or confirmation.">Okreću ekran od vas tokom unosa ili potvrde.</li>
        <li data-sr="Govore vam da brzo pritisnete opcije koje ne razumete." data-en="They tell you to quickly press options you do not understand.">Govore vam da brzo pritisnete opcije koje ne razumete.</li>
        <li data-sr="Ekran pokazuje transfer ili uplatu umesto gotovine." data-en="The screen shows transfer or payment instead of cash.">Ekran pokazuje transfer ili uplatu umesto gotovine.</li>
        <li data-sr="Dve osobe koordinisano stoje oko vas na bankomatu." data-en="Two people stand around you in a coordinated way.">Dve osobe koordinisano stoje oko vas na bankomatu.</li>
        <li data-sr="Tvrdnja da su iz banke bez proverljivog identiteta." data-en="Claim to be from the bank without verifiable ID.">Tvrdnja da su iz banke bez proverljivog identiteta.</li>
        <li data-sr="Traže da im date gotovinu posle podizanja." data-en="They ask you to hand them cash after withdrawal.">Traže da im date gotovinu posle podizanja.</li>
        <li data-sr="Ponavljanje unosa PIN-a uz obrazloženje greške." data-en="Repeated PIN entry with an error excuse.">Ponavljanje unosa PIN-a uz obrazloženje greške.</li>
        <li data-sr="Osećaj žurbe i krivice ako odbijete pomoć." data-en="Feeling rushed or guilty if you refuse help.">Osećaj žurbe i krivice ako odbijete pomoć.</li>
      </ul>
    </section>

    <section class="content-section">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <ol class="steps">
        <li data-sr="Odbijte svaku nezatraženu pomoć uz bankomat." data-en="Refuse every unsolicited ATM help.">Odbijte svaku nezatraženu pomoć uz bankomat.</li>
        <li data-sr="Karticu drži samo osoba koja je vlasnik računa." data-en="Only the account holder holds the card.">Karticu drži samo osoba koja je vlasnik računa.</li>
        <li data-sr="Čitajte svaku stavku menija pre pritiska." data-en="Read every menu line before pressing.">Čitajte svaku stavku menija pre pritiska.</li>
        <li data-sr="PIN unosite sami sa pokrivenom tastaturom." data-en="Enter PIN yourself with the keypad covered.">PIN unosite sami sa pokrivenom tastaturom.</li>
        <li data-sr="Ako ne razumete meni, prekinite i zovite broj sa poleđine kartice." data-en="If you do not understand the menu, stop and call the number on the card back.">Ako ne razumete meni, prekinite i zovite broj sa poleđine kartice.</li>
        <li data-sr="Ne potpisujte niti potvrđujte iznos koji ne znate." data-en="Do not sign or confirm an amount you do not know.">Ne potpisujte niti potvrđujte iznos koji ne znate.</li>
        <li data-sr="Posle transakcije proverite izvod u roku od sat vremena." data-en="Check the statement within an hour after the transaction.">Posle transakcije proverite izvod u roku od sat vremena.</li>
        <li data-sr="U filijali zatražite pomoć službenika, ne slučajnog posetioča." data-en="In a branch ask staff, not a random visitor.">U filijali zatražite pomoć službenika, ne slučajnog posetioča.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
      <ul class="bullets">
        <li data-sr="Da li sam zatražio pomoć pre nego što mi je ponuđena?" data-en="Did I ask for help before it was offered?">Da li sam zatražio pomoć pre nego što mi je ponuđena?</li>
        <li data-sr="Da li je kartica bila isključivo u mojoj ruci?" data-en="Was the card only in my hand?">Da li je kartica bila isključivo u mojoj ruci?</li>
        <li data-sr="Da li sam video ceo ekran tokom svakog koraka?" data-en="Did I see the full screen at every step?">Da li sam video ceo ekran tokom svakog koraka?</li>
        <li data-sr="Da li je tip transakcije bio podizanje, a ne transfer?" data-en="Was the transaction type withdrawal, not transfer?">Da li je tip transakcije bio podizanje, a ne transfer?</li>
        <li data-sr="Da li sam uneo PIN bez posmatrača izbliza?" data-en="Did I enter the PIN without onlookers close by?">Da li sam uneo PIN bez posmatrača izbliza?</li>
        <li data-sr="Da li sam proverio iznos pre potvrde?" data-en="Did I verify the amount before confirming?">Da li sam proverio iznos pre potvrde?</li>
        <li data-sr="Da li sam odmah uzeo novac i karticu lično iz otvora?" data-en="Did I personally take cash and card from the slots immediately?">Da li sam odmah uzeo novac i karticu lično iz otvora?</li>
        <li data-sr="Da li sam video sumnjivu aktivnost na izvodu?" data-en="Did I see suspicious activity on the statement?">Da li sam video sumnjivu aktivnost na izvodu?</li>
        <li data-sr="Da li znam broj za hitnu blokadu kartice?" data-en="Do I know the emergency card block number?">Da li znam broj za hitnu blokadu kartice?</li>
        <li data-sr="Da li stariji član porodice ima pravilo bez stranaca uz bankomat?" data-en="Does the older family member have a no-strangers-at-ATM rule?">Da li stariji član porodice ima pravilo bez stranaca uz bankomat?</li>
        <li data-sr="Da li mogu da odložim transakciju dok ne budem sam u kabini?" data-en="Can I delay the transaction until I am alone in the booth?">Da li mogu da odložim transakciju dok ne budem sam u kabini?</li>
        <li data-sr="Da li sam prijavio banku čim sam osetio pritisak?" data-en="Did I report to the bank as soon as I felt pressure?">Da li sam prijavio banku čim sam osetio pritisak?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Prekinite sesiju tasterom za otkaz ili karticu izvadite ako je bezbedno." data-en="Cancel the session or eject the card if safe.">Prekinite sesiju tasterom za otkaz ili karticu izvadite ako je bezbedno.</li>
        <li data-sr="Ne dajte novac ni karticu strancu koji pomaže." data-en="Do not give cash or card to a stranger who helps.">Ne dajte novac ni karticu strancu koji pomaže.</li>
        <li data-sr="Udaljite se od bankomata i pozovite banku sa zvaničnog broja." data-en="Move away from the ATM and call the bank on an official number.">Udaljite se od bankomata i pozovite banku sa zvaničnog broja.</li>
        <li data-sr="Blokirajte karticu ako je bilo kontakte sa tuđim rukama." data-en="Block the card if there was contact with others' hands.">Blokirajte karticu ako je bilo kontakte sa tuđim rukama.</li>
        <li data-sr="Ako je došlo do gubitka, prijavite policiji sa vremenom i mestom." data-en="If there was loss, report to police with time and place.">Ako je došlo do gubitka, prijavite policiji sa vremenom i mestom.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li je neko drugi dirao karticu?" data-en="Did anyone else touch the card?">Da li je neko drugi dirao karticu?</li>
            <li data-sr="Da li si uneo PIN dok je neko gledao?" data-en="Did you enter the PIN while someone watched?">Da li si uneo PIN dok je neko gledao?</li>
            <li data-sr="Da li je ekran pokazivao transfer umesto gotovine?" data-en="Did the screen show transfer instead of cash?">Da li je ekran pokazivao transfer umesto gotovine?</li>
            <li data-sr="Da li si odmah proverio izvod?" data-en="Did you check the statement immediately?">Da li si odmah proverio izvod?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Hvala, ne treba mi pomoć — zovem banku na broj sa kartice." data-en="Thanks, I do not need help — I am calling the bank on the card number.">Hvala, ne treba mi pomoć — zovem banku na broj sa kartice.</li>
            <li data-sr="Koristiću filijalu ili video uputstvo banke, ne uputstva stranca." data-en="I will use the branch or the bank video guide, not a stranger's instructions.">Koristiću filijalu ili video uputstvo banke, ne uputstva stranca.</li>
            <li data-sr="Ako ne razumem meni, prekidam i odlazim." data-en="If I do not understand the menu, I stop and leave.">Ako ne razumem meni, prekidam i odlazim.</li>
            <li data-sr="Moja kartica ostaje u mojoj ruci do čitača." data-en="My card stays in my hand until the reader.">Moja kartica ostaje u mojoj ruci do čitača.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
