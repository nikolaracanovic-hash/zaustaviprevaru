window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["card-swap-at-pos"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
      <p data-sr="Kartica kratko van kontrole na kasi često znači zamenu, pogrešan terminal ili pogrešan iznos." data-en="At checkout or with a portable terminal the card briefly leaves your control: a different card comes back, payment posts to the wrong account, or you approve an amount that does not match the basket.">Kartica kratko van kontrole na kasi često znači zamenu, pogrešan terminal ili pogrešan iznos.</p>
      <p data-sr="Spajaju se manipulacija karticom i odvlačenje pažnje." data-en="The model mixes physical card handling and distraction; the goal is overpayment, a switched card, or data visible at the terminal.">Spajaju se manipulacija karticom i odvlačenje pažnje.</p>
      <div class="callout" data-sr="<strong>Model:</strong> kartica iz ruke → zamena ili pogrešan čitač → odobrenje na ekranu → transakcija koja ne odgovara nameri." data-en="<strong>Model:</strong> card out of hand → swap or wrong reader → on-screen approval → transaction that does not match intent."><strong>Model:</strong> kartica iz ruke → zamena ili pogrešan čitač → odobrenje na ekranu → transakcija koja ne odgovara nameri.</div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)" data-en="Timeline (phases + evolutions)">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Kartica izlazi iz vaše ruke" data-en="Phase 1 — Card leaves your hand">Faza 1 — Kartica izlazi iz vaše ruke</h3>
        <p data-sr="Kartica prelazi u tuđe ruke uz kratko odvlačenje pažnje." data-en="Staff or a helper takes the card to insert it or check the reader while you watch the register or packing.">Kartica prelazi u tuđe ruke uz kratko odvlačenje pažnje.</p>
        <ul class="bullets">
          <li data-sr="signal: traže vam karticu i okreću terminal od vas pre nego što vidite iznos." data-en="signal: they take your card and turn the terminal away before you see the amount.">signal: traže vam karticu i okreću terminal od vas pre nego što vidite iznos.</li>
          <li data-sr="signal: dva terminala ili telefon kao rezervni čitač bez objašnjenja." data-en="signal: two terminals or a phone as a backup reader without explanation.">signal: dva terminala ili telefon kao rezervni čitač bez objašnjenja.</li>
          <li data-sr="signal: žurba i govorenje preko vašeg pitanja o iznosu." data-en="signal: rushing and talking over your question about the amount.">signal: žurba i govorenje preko vašeg pitanja o iznosu.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> čim kartica nije u vašoj ruci, rizik zamene ili dvostrukog čitanja raste odmah." data-en="<strong>Threshold:</strong> as soon as the card is not in your hand, swap or double-read risk jumps immediately."><strong>Prag faze:</strong> čim kartica nije u vašoj ruci, rizik zamene ili dvostrukog čitanja raste odmah.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Odobrenje bez jasnog iznosa" data-en="Phase 2 — Approval without a clear amount">Faza 2 — Odobrenje bez jasnog iznosa</h3>
        <p data-sr="Odobrenje traže pre nego što jasno vidite prodavca i iznos." data-en="The screen is turned, unclear, or they ask for a PIN for an amount you do not recognize.">Odobrenje traže pre nego što jasno vidite prodavca i iznos.</p>
        <ul class="bullets">
          <li data-sr="signal: terminal pokazuje drugačiji jezik ili naziv prodavca od lokacije." data-en="signal: terminal shows a different language or merchant name from the location.">signal: terminal pokazuje drugačiji jezik ili naziv prodavca od lokacije.</li>
          <li data-sr="signal: iznos na displeju ne odgovara računu koji ste videli." data-en="signal: on-display amount does not match the bill you saw.">signal: iznos na displeju ne odgovara računu koji ste videli.</li>
          <li data-sr="signal: pritisak da potvrdite brzo da ne padne sesija." data-en="signal: pressure to confirm quickly so the session does not drop.">signal: pritisak da potvrdite brzo da ne padne sesija.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="pos-skimming.html" data-sr="Skimovanje na POS terminalu" data-en="POS skimming">Skimovanje na POS terminalu</a></li>
            <li><a href="distraction-theft-scam.html" data-sr="Prevara pažnjom" data-en="Distraction theft scam">Prevara pažnjom</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> svako odobrenje bez pročitanog iznosa je kritična tačka gubitka." data-en="<strong>Threshold:</strong> every approval without a read amount is a critical loss point."><strong>Prag faze:</strong> svako odobrenje bez pročitanog iznosa je kritična tačka gubitka.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Povratak kartice" data-en="Phase 3 — Card return">Faza 3 — Povratak kartice</h3>
        <p data-sr="Zamena se često otkrije tek kod sledećeg plaćanja ili u aplikaciji." data-en="A card that looks like yours is returned but is not the same, or you later notice it is physically different.">Zamena se često otkrije tek kod sledećeg plaćanja ili u aplikaciji.</p>
        <ul class="bullets">
          <li data-sr="signal: broj ili ime na kartici ne odgovara vašoj nakon kupovine." data-en="signal: number or name on the card does not match yours after purchase.">signal: broj ili ime na kartici ne odgovara vašoj nakon kupovine.</li>
          <li data-sr="signal: čip ili magnetna traka oštećeni bez vašeg sećanja na pad." data-en="signal: chip or stripe damaged with no memory of a drop.">signal: čip ili magnetna traka oštećeni bez vašeg sećanja na pad.</li>
          <li data-sr="signal: kartica ne radi na sledećem bankomatu i traži zamenu." data-en="signal: card fails at the next ATM and needs replacement.">signal: kartica ne radi na sledećem bankomatu i traži zamenu.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> provera broja kartice odmah nakon kase sprečava kasno otkrivanje zamene." data-en="<strong>Threshold:</strong> checking the card number right after checkout prevents late discovery of a swap."><strong>Prag faze:</strong> provera broja kartice odmah nakon kase sprečava kasno otkrivanje zamene.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 4 — Nepoznata transakcija na izvodu" data-en="Phase 4 — Unknown statement line">Faza 4 — Nepoznata transakcija na izvodu</h3>
        <p data-sr="Izvod otkriva odstupanje od očekivanog računa." data-en="A double charge, higher amount, or merchant that does not match the purchase location appears.">Izvod otkriva odstupanje od očekivanog računa.</p>
        <ul class="bullets">
          <li data-sr="signal: dva odobrenja u istom minutu na istom ili drugom prodavcu." data-en="signal: two approvals in the same minute at the same or another merchant.">signal: dva odobrenja u istom minutu na istom ili drugom prodavcu.</li>
          <li data-sr="signal: valuta ili zemlja trgovca ne odgovara kupovini." data-en="signal: merchant currency or country does not match the purchase.">signal: valuta ili zemlja trgovca ne odgovara kupovini.</li>
          <li data-sr="signal: iznos zaokružen na pun broj bez vašeg dogovora." data-en="signal: amount rounded to a round number without your agreement.">signal: iznos zaokružen na pun broj bez vašeg dogovora.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> prvih 24 sati nakon sumnjive kase ključni su za chargeback i blokadu." data-en="<strong>Threshold:</strong> the first 24 hours after a suspicious checkout are key for chargeback and blocking."><strong>Prag faze:</strong> prvih 24 sati nakon sumnjive kase ključni su za chargeback i blokadu.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 5 — Pokušaj opravdanja od strane prodavca" data-en="Phase 5 — Seller excuses">Faza 5 — Pokušaj opravdanja od strane prodavca</h3>
        <p data-sr="Odlaganje zvanične prijave radi u korist prevaranta." data-en="You hear a story about terminal error, the system, or fixing it later outside the bank app.">Odlaganje zvanične prijave radi u korist prevaranta.</p>
        <ul class="bullets">
          <li data-sr="signal: traže da potpišete papir ili potvrdite porukom pre nego što banka vidi incident." data-en="signal: they ask you to sign paper or confirm by message before the bank sees the incident.">signal: traže da potpišete papir ili potvrdite porukom pre nego što banka vidi incident.</li>
          <li data-sr="signal: nude gotovinski povrat umesto storniranja na kartici." data-en="signal: they offer cash refund instead of a card reversal.">signal: nude gotovinski povrat umesto storniranja na kartici.</li>
          <li data-sr="signal: odbijaju da pokažu štampani ili digitalni slip sa MID/TID podacima." data-en="signal: they refuse to show a printed or digital slip with MID/TID details.">signal: odbijaju da pokažu štampani ili digitalni slip sa MID/TID podacima.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="card-not-present-fraud.html" data-sr="Zloupotreba kartice bez fizičkog prisustva" data-en="Card-not-present fraud">Zloupotreba kartice bez fizičkog prisustva</a></li>
            <li><a href="chargeback-fraud.html" data-sr="Prevara chargeback-om" data-en="Chargeback fraud">Prevara chargeback-om</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> zvanična prijava banci ne zamenjuje razgovor sa prodavcem — radi paralelno." data-en="<strong>Threshold:</strong> official bank reporting is not replaced by talking to the seller — do both in parallel."><strong>Prag faze:</strong> zvanična prijava banci ne zamenjuje razgovor sa prodavcem — radi paralelno.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Blokada i zamena kartice" data-en="Phase 6 — Block and replace card">Faza 6 — Blokada i zamena kartice</h3>
        <p data-sr="Završni korak je smanjenje daljeg zloupotrebljavanja podataka." data-en="The bank blocks the card, issues a new one, and opens a dispute with your documentation.">Završni korak je smanjenje daljeg zloupotrebljavanja podataka.</p>
        <ul class="bullets">
          <li data-sr="signal: ponovni pokušaji naplate posle prijave." data-en="signal: repeated charge attempts after you reported.">signal: ponovni pokušaji naplate posle prijave.</li>
          <li data-sr="signal: CNP kupovine posle incidenta na kasi." data-en="signal: CNP purchases after the checkout incident.">signal: CNP kupovine posle incidenta na kasi.</li>
          <li data-sr="signal: potreba za novim CVV i 3D Secure podešavanjem na novoj kartici." data-en="signal: need to reset CVV and 3D Secure flows on the new card.">signal: potreba za novim CVV i 3D Secure podešavanjem na novoj kartici.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> zamena broja kartice seče lanac ako je kartica ili podaci kompromitovani." data-en="<strong>Threshold:</strong> replacing the card number breaks the chain if the card or data was compromised."><strong>Prag faze:</strong> zamena broja kartice seče lanac ako je kartica ili podaci kompromitovani.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Karticu uzimaju iz vaše ruke bez potrebe za tehničkim razlogom koji prihvata banka." data-en="They take the card from your hand without a technical reason your bank would accept.">Karticu uzimaju iz vaše ruke bez potrebe za tehničkim razlogom koji prihvata banka.</li>
        <li data-sr="Terminal nije vidljiv dok unosite PIN ili potvrđujete." data-en="The terminal is not visible while you enter PIN or confirm.">Terminal nije vidljiv dok unosite PIN ili potvrđujete.</li>
        <li data-sr="Iznos na ekranu ne odgovara računu ili korpi." data-en="The on-screen amount does not match the bill or basket.">Iznos na ekranu ne odgovara računu ili korpi.</li>
        <li data-sr="Dva uzastopna odobrenja bez objašnjenja." data-en="Two back-to-back approvals without explanation.">Dva uzastopna odobrenja bez objašnjenja.</li>
        <li data-sr="Telefon prodavca koristi se kao čitač kartice." data-en="The seller's phone is used as a card reader.">Telefon prodavca koristi se kao čitač kartice.</li>
        <li data-sr="Žurba i govor preko vaših pitanja o iznosu." data-en="Rushing and talking over your questions about the amount.">Žurba i govor preko vaših pitanja o iznosu.</li>
        <li data-sr="Vraćena kartica ima drugačiji broj ili oštećenje koje niste napravili." data-en="Returned card has a different number or damage you did not cause.">Vraćena kartica ima drugačiji broj ili oštećenje koje niste napravili.</li>
        <li data-sr="Nude gotovinu umesto storna na kartici." data-en="They offer cash instead of a card reversal.">Nude gotovinu umesto storna na kartici.</li>
        <li data-sr="Odbijaju štampu ili email potvrde transakcije." data-en="They refuse a printout or email proof of the transaction.">Odbijaju štampu ili email potvrde transakcije.</li>
        <li data-sr="Na izvodu se pojavljuje trgovac ili zemlja koja ne odgovara mestu kupovine." data-en="The statement shows a merchant or country that does not match the purchase location.">Na izvodu se pojavljuje trgovac ili zemlja koja ne odgovara mestu kupovine.</li>
      </ul>
    </section>

    <section class="content-section">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <ol class="steps">
        <li data-sr="Držite karticu u ruci dok sami ne ubacite ili prislonite čitač." data-en="Keep the card in your hand until you insert or tap it yourself.">Držite karticu u ruci dok sami ne ubacite ili prislonite čitač.</li>
        <li data-sr="Pročitajte iznos na terminalu pre bilo kog PIN-a ili potvrde." data-en="Read the amount on the terminal before any PIN or confirm.">Pročitajte iznos na terminalu pre bilo kog PIN-a ili potvrde.</li>
        <li data-sr="Uporedite poslednje četiri cifre kartice odmah posle kupovine." data-en="Match the last four digits of the card immediately after purchase.">Uporedite poslednje četiri cifre kartice odmah posle kupovine.</li>
        <li data-sr="Zahtevajte potvrdu transakcije na vaš email ili štampu." data-en="Ask for transaction proof to your email or a printout.">Zahtevajte potvrdu transakcije na vaš email ili štampu.</li>
        <li data-sr="Uključite obaveštenja za svaku transakciju u aplikaciji banke." data-en="Turn on alerts for every transaction in the bank app.">Uključite obaveštenja za svaku transakciju u aplikaciji banke.</li>
        <li data-sr="Ne potpisujte prazan ili nepopunjen račun." data-en="Do not sign a blank or incomplete receipt.">Ne potpisujte prazan ili nepopunjen račun.</li>
        <li data-sr="Sumnjiva kasa: platite alternativno (gde je moguće) ili odustanite." data-en="Suspicious checkout: pay another way where possible or walk away.">Sumnjiva kasa: platite alternativno (gde je moguće) ili odustanite.</li>
        <li data-sr="U roku od 24 sata proverite izvod posle veće kupovine." data-en="Within 24 hours check the statement after a larger purchase.">U roku od 24 sata proverite izvod posle veće kupovine.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
      <ul class="bullets">
        <li data-sr="Da li sam ja ubacio ili prislonio karticu na čitač?" data-en="Did I insert or tap the card on the reader myself?">Da li sam ja ubacio ili prislonio karticu na čitač?</li>
        <li data-sr="Da li sam video tačan iznos pre potvrde?" data-en="Did I see the exact amount before confirming?">Da li sam video tačan iznos pre potvrde?</li>
        <li data-sr="Da li naziv prodavca na terminalu odgovara prodavnici?" data-en="Does the merchant name on the terminal match the shop?">Da li naziv prodavca na terminalu odgovara prodavnici?</li>
        <li data-sr="Da li je broj kartice isti posle kupovine?" data-en="Is the card number the same after purchase?">Da li je broj kartice isti posle kupovine?</li>
        <li data-sr="Da li imam digitalni ili štampani slip?" data-en="Do I have a digital or printed slip?">Da li imam digitalni ili štampani slip?</li>
        <li data-sr="Da li su aktivna push obaveštenja za karticu?" data-en="Are push alerts on for the card?">Da li su aktivna push obaveštenja za karticu?</li>
        <li data-sr="Da li je bilo dva odobrenja u kratkom intervalu?" data-en="Were there two approvals in a short interval?">Da li je bilo dva odobrenja u kratkom intervalu?</li>
        <li data-sr="Da li me je neko žurio tokom plaćanja?" data-en="Was someone rushing me during payment?">Da li me je neko žurio tokom plaćanja?</li>
        <li data-sr="Da li je terminal bio okrenut od mene?" data-en="Was the terminal turned away from me?">Da li je terminal bio okrenut od mene?</li>
        <li data-sr="Da li sam odmah proverio izvod u aplikaciji?" data-en="Did I check the app statement immediately?">Da li sam odmah proverio izvod u aplikaciji?</li>
        <li data-sr="Da li treba prijava banci čak i ako prodavac obećava povrat?" data-en="Should I report to the bank even if the seller promises a refund?">Da li treba prijava banci čak i ako prodavac obećava povrat?</li>
        <li data-sr="Da li treba zamena kartice ako sumnjam na zamenu?" data-en="Should I replace the card if I suspect a swap?">Da li treba zamena kartice ako sumnjam na zamenu?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Prekinite plaćanje ako iznos nije jasan." data-en="Stop payment if the amount is not clear.">Prekinite plaćanje ako iznos nije jasan.</li>
        <li data-sr="Proverite broj kartice odmah i uporedite sa aplikacijom." data-en="Check the card number immediately against the app.">Proverite broj kartice odmah i uporedite sa aplikacijom.</li>
        <li data-sr="Blokirajte karticu ako postoji bilo kakva zamena ili dupla naplata." data-en="Block the card if there is any swap or double charge.">Blokirajte karticu ako postoji bilo kakva zamena ili dupla naplata.</li>
        <li data-sr="Prijavite incident banci i zatražite chargeback gde važi pravilo potrošača." data-en="Report to the bank and request chargeback where consumer rules apply.">Prijavite incident banci i zatražite chargeback gde važi pravilo potrošača.</li>
        <li data-sr="Sačuvajte račun, slip i vreme transakcije." data-en="Keep the bill, slip, and transaction time.">Sačuvajte račun, slip i vreme transakcije.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li je kartica bila u tvojoj ruci do čitača?" data-en="Was the card in your hand until the reader?">Da li je kartica bila u tvojoj ruci do čitača?</li>
            <li data-sr="Da li si video iznos na ekranu pre PIN-a?" data-en="Did you see the amount on screen before the PIN?">Da li si video iznos na ekranu pre PIN-a?</li>
            <li data-sr="Da li se broj kartice poklapa sada sa pre kupovine?" data-en="Does the card number match now with before the purchase?">Da li se broj kartice poklapa sada sa pre kupovine?</li>
            <li data-sr="Da li aplikacija pokazuje duplu ili čudnu transakciju?" data-en="Does the app show a double or odd transaction?">Da li aplikacija pokazuje duplu ili čudnu transakciju?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Plaćanje radim sam uz terminal okrenut ka meni — hvala." data-en="I will pay myself with the terminal facing me — thanks.">Plaćanje radim sam uz terminal okrenut ka meni — hvala.</li>
            <li data-sr="Bez mog odobrenja tačnog iznosa ne potvrđujem ništa." data-en="Without my approval of the exact amount I confirm nothing.">Bez mog odobrenja tačnog iznosa ne potvrđujem ništa.</li>
            <li data-sr="Proveravam poslednje četiri cifre kartice pre nego što odem od kase." data-en="I check the last four digits before leaving the checkout.">Proveravam poslednje četiri cifre kartice pre nego što odem od kase.</li>
            <li data-sr="Ako ne mogu da vidim iznos, prekidam kupovinu i zovem banku." data-en="If I cannot see the amount, I stop the purchase and call the bank.">Ako ne mogu da vidim iznos, prekidam kupovinu i zovem banku.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
