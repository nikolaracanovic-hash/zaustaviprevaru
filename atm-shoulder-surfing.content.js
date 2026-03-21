window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["atm-shoulder-surfing"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
      <p data-sr="Bliska osoba vidi PIN ili osetljive korake na ekranu." data-en="ATM shoulder surfing means someone nearby sees the sequence of keypad or phone screen presses while you enter a PIN or choose an amount.">Bliska osoba vidi PIN ili osetljive korake na ekranu.</p>
      <p data-sr="Cilj je snimiti ili zapamtiti PIN za kasniju upotrebu." data-en="The observation is later combined with a stolen or switched card, or with footage that violates privacy before theft.">Cilj je snimiti ili zapamtiti PIN za kasniju upotrebu.</p>
      <div class="callout" data-sr="<strong>Model:</strong> gužva ili red → preblizu pozicioniranje → posmatranje unosa → PIN poznat prevarantu." data-en="<strong>Model:</strong> crowd or queue → standing too close → watching entry → PIN known to fraudster."><strong>Model:</strong> gužva ili red → preblizu pozicioniranje → posmatranje unosa → PIN poznat prevarantu.</div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)" data-en="Timeline (phases + evolutions)">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Biranje mesta u redu" data-en="Phase 1 — Choosing position in line">Faza 1 — Biranje mesta u redu</h3>
        <p data-sr="Pozicija u odnosu na ekran i tastaturu nije slučajna." data-en="The fraudster stands right behind you or at a side angle that allows a view of the keypad.">Pozicija u odnosu na ekran i tastaturu nije slučajna.</p>
        <ul class="bullets">
          <li data-sr="signal: osoba u redu stoji bliže od uobičajenog ličnog prostora." data-en="signal: someone in line stands closer than normal personal space.">signal: osoba u redu stoji bliže od uobičajenog ličnog prostora.</li>
          <li data-sr="signal: mobilni telefon držan u visini vaših ruku ili ekrana." data-en="signal: mobile phone held at the height of your hands or screen.">signal: mobilni telefon držan u visini vaših ruku ili ekrana.</li>
          <li data-sr="signal: lažna žurba da završite brzo dok neko sačeka odmah iza." data-en="signal: fake rush to finish while someone waits right behind.">signal: lažna žurba da završite brzo dok neko sačeka odmah iza.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> pre nego što unesete PIN, korak nazad ili promena ugla tela je dovoljan da pokvarite ugao gledanja." data-en="<strong>Threshold:</strong> before entering the PIN, a step back or body angle change is enough to spoil the viewing angle."><strong>Prag faze:</strong> pre nego što unesete PIN, korak nazad ili promena ugla tela je dovoljan da pokvarite ugao gledanja.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Posmatranje unosa" data-en="Phase 2 — Watching entry">Faza 2 — Posmatranje unosa</h3>
        <p data-sr="Unos PIN-a je najvredniji signal u ovoj fazi." data-en="The attacker watches presses or records discreetly while you use the ATM.">Unos PIN-a je najvredniji signal u ovoj fazi.</p>
        <ul class="bullets">
          <li data-sr="signal: odsecanje pogleda prema tastaturi u istim trenucima kada vi pritiskate." data-en="signal: glances toward the keypad at the same moments you press.">signal: odsecanje pogleda prema tastaturi u istim trenucima kada vi pritiskate.</li>
          <li data-sr="signal: ogledalo, prozor iza vas, ili ekran telefona koji odražava scenu." data-en="signal: mirror, window behind you, or phone screen reflecting the scene.">signal: ogledalo, prozor iza vas, ili ekran telefona koji odražava scenu.</li>
          <li data-sr="signal: pomoć koja vas nagoni da unosite PIN dok oni gledaju." data-en="signal: help that pushes you to enter the PIN while they watch.">signal: pomoć koja vas nagoni da unosite PIN dok oni gledaju.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="friendly-helper-atm-scam.html" data-sr="Prijateljski pomoćnik kod bankomata" data-en="Friendly helper ATM scam">Prijateljski pomoćnik kod bankomata</a></li>
            <li><a href="atm-skimming.html" data-sr="Skimovanje na bankomatu" data-en="ATM skimming">Skimovanje na bankomatu</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> pokrivanje šake tastaturom prekida većinu vizuelnog shoulder surfinga." data-en="<strong>Threshold:</strong> hand-covering the keypad blocks most visual shoulder surfing."><strong>Prag faze:</strong> pokrivanje šake tastaturom prekida većinu vizuelnog shoulder surfinga.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Krađa ili zamena kartice" data-en="Phase 3 — Card theft or swap">Faza 3 — Krađa ili zamena kartice</h3>
        <p data-sr="Kombinacija PIN + kartica zatvara krug napada." data-en="A PIN without a card is less useful; pickpocketing, distraction, or a swap after help often follows.">Kombinacija PIN + kartica zatvara krug napada.</p>
        <ul class="bullets">
          <li data-sr="signal: kontakt u gužvi odmah posle korišćenja bankomata." data-en="signal: contact in a crowd right after using the ATM.">signal: kontakt u gužvi odmah posle korišćenja bankomata.</li>
          <li data-sr="signal: izgubljena kartica na zemlji koju vam neko pronađe." data-en="signal: a lost card on the ground someone finds for you.">signal: izgubljena kartica na zemlji koju vam neko pronađe.</li>
          <li data-sr="signal: lažna hitna poruka da ponovo unesete PIN radi provere." data-en="signal: fake urgent message to re-enter the PIN for verification.">signal: lažna hitna poruka da ponovo unesete PIN radi provere.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> čuvanje kartice u torbici pre nego što napustite ograda bankomata smanjuje priliku za džeparenje." data-en="<strong>Threshold:</strong> stowing the card in a bag before leaving the ATM area reduces pickpocket opportunity."><strong>Prag faze:</strong> čuvanje kartice u torbici pre nego što napustite ograda bankomata smanjuje priliku za džeparenje.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 4 — Podizanje ili plaćanje" data-en="Phase 4 — Withdrawal or payment">Faza 4 — Podizanje ili plaćanje</h3>
        <p data-sr="Izvod pokazuje gotovinsko podizanje ili seriju plaćanja." data-en="With the PIN the attacker uses the physical card or a copy on a device that still accepts magnetic stripe where possible.">Izvod pokazuje gotovinsko podizanje ili seriju plaćanja.</p>
        <ul class="bullets">
          <li data-sr="signal: transakcije u minutima posle vašeg korišćenja bankomata." data-en="signal: transactions within minutes after your ATM use.">signal: transakcije u minutima posle vašeg korišćenja bankomata.</li>
          <li data-sr="signal: lokacija podizanja različita od mesta gde živite ili radite." data-en="signal: withdrawal location different from where you live or work.">signal: lokacija podizanja različita od mesta gde živite ili radite.</li>
          <li data-sr="signal: iznosi blizu dnevnog limita kartice." data-en="signal: amounts near the card daily limit.">signal: iznosi blizu dnevnog limita kartice.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> brza blokada kartice nakon prvog sumnjivog podizanja štedi ostatak limita." data-en="<strong>Threshold:</strong> fast card block after the first suspicious withdrawal saves the rest of the limit."><strong>Prag faze:</strong> brza blokada kartice nakon prvog sumnjivog podizanja štedi ostatak limita.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 5 — Otkrivanje od strane banke ili korisnika" data-en="Phase 5 — Discovery by bank or user">Faza 5 — Otkrivanje od strane banke ili korisnika</h3>
        <p data-sr="Vreme otkrivanja zavisi od obaveštenja." data-en="Antifraud tools or your statement review show an unusual pattern.">Vreme otkrivanja zavisi od obaveštenja.</p>
        <ul class="bullets">
          <li data-sr="signal: SMS upozorenje za transakciju koju niste vi uradili." data-en="signal: SMS alert for a transaction you did not make.">signal: SMS upozorenje za transakciju koju niste vi uradili.</li>
          <li data-sr="signal: poziv banke zbog serije malih podizanja." data-en="signal: bank call about a series of small withdrawals.">signal: poziv banke zbog serije malih podizanja.</li>
          <li data-sr="signal: odbijena transakcija jer je limit već iscrpljen." data-en="signal: declined transaction because the limit is already used.">signal: odbijena transakcija jer je limit već iscrpljen.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="distraction-theft-scam.html" data-sr="Prevara pažnjom" data-en="Distraction theft scam">Prevara pažnjom</a></li>
            <li><a href="card-not-present-fraud.html" data-sr="Zloupotreba kartice bez fizičkog prisustva" data-en="Card-not-present fraud">Zloupotreba kartice bez fizičkog prisustva</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> prijava u roku od nekoliko sati povećava šansu za povrat sredstava." data-en="<strong>Threshold:</strong> reporting within hours increases the chance of recovering funds."><strong>Prag faze:</strong> prijava u roku od nekoliko sati povećava šansu za povrat sredstava.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Blokada, istraga i zamena PIN-a" data-en="Phase 6 — Block, investigation, PIN change">Faza 6 — Blokada, istraga i zamena PIN-a</h3>
        <p data-sr="Stari PIN više nije bezbedan ako je posmatran." data-en="The bank blocks the card, runs an investigation, and advises a PIN change on the new card.">Stari PIN više nije bezbedan ako je posmatran.</p>
        <ul class="bullets">
          <li data-sr="signal: banka traži izjavu o mestu i vremenu korišćenja bankomata." data-en="signal: bank asks for a statement on ATM place and time.">signal: banka traži izjavu o mestu i vremenu korišćenja bankomata.</li>
          <li data-sr="signal: izdavanje nove kartice sa novim brojem." data-en="signal: issuing a new card with a new number.">signal: izdavanje nove kartice sa novim brojem.</li>
          <li data-sr="signal: preporuka da se ubuduće koriste filijalni bankomati sa manje gužve." data-en="signal: recommendation to use branch ATMs with less crowding later.">signal: preporuka da se ubuduće koriste filijalni bankomati sa manje gužve.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> isti PIN na novoj kartici nakon shoulder surfinga je visok rizik." data-en="<strong>Threshold:</strong> reusing the same PIN on a new card after shoulder surfing is high risk."><strong>Prag faze:</strong> isti PIN na novoj kartici nakon shoulder surfinga je visok rizik.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Neko stoji iza vas bliže nego što je prijatno tokom unosa PIN-a." data-en="Someone stands behind you closer than comfortable while you enter a PIN.">Neko stoji iza vas bliže nego što je prijatno tokom unosa PIN-a.</li>
        <li data-sr="Telefon je usmeren ka tastaturi ili vašim rukama." data-en="A phone is aimed at the keypad or your hands.">Telefon je usmeren ka tastaturi ili vašim rukama.</li>
        <li data-sr="Osoba nudi pomoć pri unosu PIN-a ili iznosu." data-en="Someone offers help entering PIN or amount.">Osoba nudi pomoć pri unosu PIN-a ili iznosu.</li>
        <li data-sr="Čujete kliktanje kamere ili vidite odraz ekrana u staklu." data-en="You hear shutter clicks or see screen reflection in glass.">Čujete kliktanje kamere ili vidite odraz ekrana u staklu.</li>
        <li data-sr="Gužva je veštački stvorena oko bankomata u trenutku vašeg korišćenja." data-en="Crowding around the ATM is artificially timed with your use.">Gužva je veštački stvorena oko bankomata u trenutku vašeg korišćenja.</li>
        <li data-sr="Osoba gleda u pod dok vi pritiskate tastere." data-en="Someone looks downward while you press keys.">Osoba gleda u pod dok vi pritiskate tastere.</li>
        <li data-sr="Odmah posle transakcije neko vas dodiruje ili odvlači pažnju." data-en="Right after the transaction someone touches you or distracts you.">Odmah posle transakcije neko vas dodiruje ili odvlači pažnju.</li>
        <li data-sr="Na izvodu se pojavljuju podizanja kratko posle vašeg vremena na bankomatu." data-en="Statement shows withdrawals soon after your ATM time.">Na izvodu se pojavljuju podizanja kratko posle vašeg vremena na bankomatu.</li>
        <li data-sr="Kartica je bila vidljiva u ruci van ograda bankomata." data-en="The card was visible in hand outside the ATM enclosure.">Kartica je bila vidljiva u ruci van ograda bankomata.</li>
        <li data-sr="Ponavlja se ista osoba na više bankomata koje posećujete." data-en="The same person repeats at multiple ATMs you use.">Ponavlja se ista osoba na više bankomata koje posećujete.</li>
      </ul>
    </section>

    <section class="content-section">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <ol class="steps">
        <li data-sr="Pre unosa PIN-a pogledajte ko stoji iza vas u redu." data-en="Before PIN entry look who stands behind you in line.">Pre unosa PIN-a pogledajte ko stoji iza vas u redu.</li>
        <li data-sr="Pokrijte tastaturu celom šakom, ne samo prstima." data-en="Cover the keypad with the whole palm, not fingers only.">Pokrijte tastaturu celom šakom, ne samo prstima.</li>
        <li data-sr="Korak nazad ili ugao tela da ekran i tastatura nisu u istom kadru za drugoga." data-en="Step back or angle so screen and keypad are not in one frame for others.">Korak nazad ili ugao tela da ekran i tastatura nisu u istom kadru za drugoga.</li>
        <li data-sr="Ne unosite PIN dok neko drži telefon u visini vaših ruku." data-en="Do not enter PIN while someone holds a phone at your hand height.">Ne unosite PIN dok neko drži telefon u visini vaših ruku.</li>
        <li data-sr="Sklonite karticu u novčanik pre izlaska iz kabine." data-en="Put the card in the wallet before leaving the booth.">Sklonite karticu u novčanik pre izlaska iz kabine.</li>
        <li data-sr="Koristite bankomat u filijali kad je moguće." data-en="Use a branch ATM when possible.">Koristite bankomat u filijali kad je moguće.</li>
        <li data-sr="Uključite obaveštenja za svaku transakciju." data-en="Enable alerts for every transaction.">Uključite obaveštenja za svaku transakciju.</li>
        <li data-sr="Posle korišćenja proverite izvod istog dana." data-en="After use check the statement the same day.">Posle korišćenja proverite izvod istog dana.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
      <ul class="bullets">
        <li data-sr="Da li je neko bio neprirodno blizu dok sam uneo PIN?" data-en="Was someone unnaturally close while I entered the PIN?">Da li je neko bio neprirodno blizu dok sam uneo PIN?</li>
        <li data-sr="Da li sam pokrio šaku preko tastature?" data-en="Did I cover the keypad with my hand?">Da li sam pokrio šaku preko tastature?</li>
        <li data-sr="Da li sam video telefon usmeren ka meni?" data-en="Did I see a phone aimed at me?">Da li sam video telefon usmeren ka meni?</li>
        <li data-sr="Da li sam koristio bankomat u gužvi bez alternative?" data-en="Did I use a crowded ATM without an alternative?">Da li sam koristio bankomat u gužvi bez alternative?</li>
        <li data-sr="Da li sam odmah sakrio karticu posle transakcije?" data-en="Did I hide the card immediately after the transaction?">Da li sam odmah sakrio karticu posle transakcije?</li>
        <li data-sr="Da li su obaveštenja aktivna?" data-en="Are alerts active?">Da li su obaveštenja aktivna?</li>
        <li data-sr="Da li izvod pokazuje aktivnost posle mog vremena na bankomatu?" data-en="Does the statement show activity after my ATM time?">Da li izvod pokazuje aktivnost posle mog vremena na bankomatu?</li>
        <li data-sr="Da li treba promeniti PIN ako sumnjam na posmatranje?" data-en="Should I change the PIN if I suspect observation?">Da li treba promeniti PIN ako sumnjam na posmatranje?</li>
        <li data-sr="Da li treba prijaviti banku čak bez finansijske štete?" data-en="Should I report to the bank even without financial loss?">Da li treba prijaviti banku čak bez finansijske štete?</li>
        <li data-sr="Da li mogu da odložim transakciju do manje gužve?" data-en="Can I delay the transaction until less crowding?">Da li mogu da odložim transakciju do manje gužve?</li>
        <li data-sr="Da li dete ili pratilac mogu stati između mene i osobe iza?" data-en="Can a child or companion stand between me and the person behind?">Da li dete ili pratilac mogu stati između mene i osobe iza?</li>
        <li data-sr="Da li znam broj za blokadu kartice napamet?" data-en="Do I know the card block number by heart?">Da li znam broj za blokadu kartice napamet?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Prekinite unos PIN-a i promenite ugao tela da blokirate pogled." data-en="Stop PIN entry and change body angle to block the view.">Prekinite unos PIN-a i promenite ugao tela da blokirate pogled.</li>
        <li data-sr="Završite ili otkažite transakciju i udaljite se od gužve." data-en="Finish or cancel the transaction and leave the crowd.">Završite ili otkažite transakciju i udaljite se od gužve.</li>
        <li data-sr="Proverite da li je kartica još u vašem vlasništvu." data-en="Check that the card is still in your possession.">Proverite da li je kartica još u vašem vlasništvu.</li>
        <li data-sr="Ako postoji bilo kakva sumnja, blokirajte karticu i zatražite novu." data-en="If there is any doubt, block the card and request a new one.">Ako postoji bilo kakva sumnja, blokirajte karticu i zatražite novu.</li>
        <li data-sr="Prijavite incident banci sa vremenom i lokacijom bankomata." data-en="Report the incident to the bank with ATM time and location.">Prijavite incident banci sa vremenom i lokacijom bankomata.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si video nekoga iza sebe pre PIN-a?" data-en="Did you see anyone behind you before the PIN?">Da li si video nekoga iza sebe pre PIN-a?</li>
            <li data-sr="Da li si pokrio tastaturu šakom?" data-en="Did you cover the keypad with your palm?">Da li si pokrio tastaturu šakom?</li>
            <li data-sr="Da li je neko držao telefon blizu tvojih ruku?" data-en="Did someone hold a phone near your hands?">Da li je neko držao telefon blizu tvojih ruku?</li>
            <li data-sr="Da li aplikacija pokazuje podizanje koje nisi uradio?" data-en="Does the app show a withdrawal you did not do?">Da li aplikacija pokazuje podizanje koje nisi uradio?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Molim vas korak nazad — unosim PIN." data-en="Please step back — I am entering my PIN.">Molim vas korak nazad — unosim PIN.</li>
            <li data-sr="Ne treba mi pomoć, znam proceduru banke." data-en="I do not need help; I know my bank's procedure.">Ne treba mi pomoć, znam proceduru banke.</li>
            <li data-sr="Sačekaću prazan bankomat ili odlazim u filijalu." data-en="I will wait for a free ATM or go to a branch.">Sačekaću prazan bankomat ili odlazim u filijalu.</li>
            <li data-sr="Ako nastavite da stojite ovako blizu, prekidam transakciju." data-en="If you keep standing this close, I cancel the transaction.">Ako nastavite da stojite ovako blizu, prekidam transakciju.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
