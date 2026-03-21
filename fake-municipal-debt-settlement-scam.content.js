window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["fake-municipal-debt-settlement-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
      <p data-sr="Lažno predstavljanje opštine koristi strah od izvršenja ili isključenja da bi se izvukla brza uplata." data-en="The fraudster poses as municipal finance, utilities, or legal department and claims you owe fees, utilities, or fines. They offer a one-time discount or quiet resolution if you pay immediately to a given account or link.">Lažno predstavljanje opštine koristi strah od izvršenja ili isključenja da bi se izvukla brza uplata.</p>
      <p data-sr="Zvanična naplata je proverljiva kroz isti broj predmeta koji imate na računu." data-en="A real municipality uses published payment references, counters, or portals; it does not ask for cash to a courier or a one-off discount that does not exist in your file.">Zvanična naplata je proverljiva kroz isti broj predmeta koji imate na računu.</p>
      <div class="callout" data-sr="<strong>Model:</strong> poziv → dug → popust uz danas-uplatu → lažni poziv na broj → pritisak → još jedna uplata → nestanak." data-en="<strong>Model:</strong> call → debt → discount if you pay today → fake payment reference → pressure → another payment → gone."><strong>Model:</strong> poziv → dug → popust uz danas-uplatu → lažni poziv na broj → pritisak → još jedna uplata → nestanak.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi" data-en="How it generally works">Kako generalno radi</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Kuka" data-en="Hook">Kuka</div>
          <ul class="bullets">
            <li data-sr="Tačan iznos duga koji deluje moguć u odnosu na vaše stanje." data-en="Exact debt amount that seems plausible for your situation.">Tačan iznos duga koji deluje moguć u odnosu na vaše stanje.</li>
            <li data-sr="Ime opštine i ulica koje javno znate." data-en="Municipality name and street you know publicly.">Ime opštine i ulica koje javno znate.</li>
            <li data-sr="Pretnja blokadom ili prekidom usluge do kraja dana." data-en="Threat of block or service cut by end of day.">Pretnja blokadom ili prekidom usluge do kraja dana.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Plaćanje" data-en="Payment">Plaćanje</div>
          <ul class="bullets">
            <li data-sr="Poziv na broj koji ne odgovara računu koji ste ranije primali." data-en="Payment reference that does not match bills you received before.">Poziv na broj koji ne odgovara računu koji ste ranije primali.</li>
            <li data-sr="Uplata na fizičko lice ili firmu bez veze sa opštinom." data-en="Payment to a person or firm unrelated to the municipality.">Uplata na fizičko lice ili firmu bez veze sa opštinom.</li>
            <li data-sr="Zahtev za karticom preko linka umesto uobičajenog portala." data-en="Card payment via link instead of the usual portal.">Zahtev za karticom preko linka umesto uobičajenog portala.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching)">Hronološki tok (faze + grananja)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Hladni poziv ili SMS" data-en="Phase 1 — Cold call or SMS">Faza 1 — Hladni poziv ili SMS</h3>
        <p data-sr="Prvi kontakt naglašava posledice i hitnost." data-en="A bot or person says you are late on municipal obligations and enforcement will follow.">Prvi kontakt naglašava posledice i hitnost.</p>
        <ul class="bullets">
          <li data-sr="signal: ne možete odmah dobiti broj predmeta koji odgovara vašem računu." data-en="signal: you cannot immediately get a file number matching your bill.">signal: ne možete odmah dobiti broj predmeta koji odgovara vašem računu.</li>
          <li data-sr="signal: traže da ostanete na liniji i platite dok traje poziv." data-en="signal: they ask you to stay on the line and pay during the call.">signal: traže da ostanete na liniji i platite dok traje poziv.</li>
          <li data-sr="signal: ne znaju tačan naziv usluge koju navodno dugujete." data-en="signal: they do not know the exact service name you allegedly owe.">signal: ne znaju tačan naziv usluge koju navodno dugujete.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta poveruje da postoji dug bez provere računa." data-en="<strong>Phase threshold:</strong> the target believes there is a debt without checking the bill."><strong>Prag faze:</strong> meta poveruje da postoji dug bez provere računa.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Ponuda popusta" data-en="Phase 2 — Discount offer">Faza 2 — Ponuda popusta</h3>
        <p data-sr="Popust je mamac da se zaobiđe provera." data-en="They offer a reduced principal if you pay within hours, which sounds attractive.">Popust je mamac da se zaobiđe provera.</p>
        <ul class="bullets">
          <li data-sr="signal: popust nije moguć proveriti u objavljenom cenovniku." data-en="signal: the discount cannot be verified in a published price list.">signal: popust nije moguć proveriti u objavljenom cenovniku.</li>
          <li data-sr="signal: uslov je da ne kontaktirate šalter ili komunalno pre uplate." data-en="signal: the condition is not to contact the desk or utility before paying.">signal: uslov je da ne kontaktirate šalter ili komunalno pre uplate.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="utility-bill-scam.html" data-sr="Lažni računi" data-en="Utility bill scam">Lažni računi</a></li>
            <li><a href="vishing.html" data-sr="Višing" data-en="Vishing">Višing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta razmatra brzu uplatu zbog popusta." data-en="<strong>Phase threshold:</strong> the target considers quick payment because of the discount."><strong>Prag faze:</strong> meta razmatra brzu uplatu zbog popusta.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Uputstvo za uplatu" data-en="Phase 3 — Payment instructions">Faza 3 — Uputstvo za uplatu</h3>
        <p data-sr="Kanal plaćanja odstupa od uobičajenog." data-en="Transfer details, QR, or card link are sent that do not lead to the municipality portal.">Kanal plaćanja odstupa od uobičajenog.</p>
        <ul class="bullets">
          <li data-sr="signal: model uplate nije isti kao na prethodnim računima." data-en="signal: payment model differs from previous bills.">signal: model uplate nije isti kao na prethodnim računima.</li>
          <li data-sr="signal: primalac je treća strana bez javnog ugovora sa opštinom." data-en="signal: payee is a third party with no public contract with the municipality.">signal: primalac je treća strana bez javnog ugovora sa opštinom.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta ima nalog za uplatu u rukama." data-en="<strong>Phase threshold:</strong> the target has a payment order ready."><strong>Prag faze:</strong> meta ima nalog za uplatu u rukama.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Administrativna taksa" data-en="Phase 4 — Administrative fee">Faza 4 — Administrativna taksa</h3>
        <p data-sr="Drugi talas naplate prati prvi." data-en="After payment, an extra fee is requested to close the file or issue confirmation.">Drugi talas naplate prati prvi.</p>
        <ul class="bullets">
          <li data-sr="signal: potvrda o dugu ne stiže posle uplate." data-en="signal: debt clearance confirmation does not arrive after payment.">signal: potvrda o dugu ne stiže posle uplate.</li>
          <li data-sr="signal: svaka potvrda traži novu manju uplatu." data-en="signal: each confirmation step asks for another small payment.">signal: svaka potvrda traži novu manju uplatu.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="advance-fee-fraud.html" data-sr="Uplata unapred" data-en="Advance-fee fraud">Uplata unapred</a></li>
            <li><a href="fake-fine-scam.html" data-sr="Lažne kazne" data-en="Fake fine scam">Lažne kazne</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta je već jednom platila i lakše pristaje na drugi put." data-en="<strong>Phase threshold:</strong> the target paid once and more easily agrees a second time."><strong>Prag faze:</strong> meta je već jednom platila i lakše pristaje na drugi put.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Šalter ili komunalno potvrđuje" data-en="Phase 5 — Counter or utility confirms">Faza 5 — Šalter ili komunalno potvrđuje</h3>
        <p data-sr="Nezavisna provera obično ruši priču." data-en="Official service says there is no case under that number or the amount does not match records.">Nezavisna provera obično ruši priču.</p>
        <ul class="bullets">
          <li data-sr="signal: na šalteru nemaju zapis o pozivu koji ste dobili." data-en="signal: the counter has no record of the call you received.">signal: na šalteru nemaju zapis o pozivu koji ste dobili.</li>
          <li data-sr="signal: vaš uobičajeni račun pokazuje drugačije stanje." data-en="signal: your usual bill shows a different balance.">signal: vaš uobičajeni račun pokazuje drugačije stanje.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta ima suprotno mišljenje zvanične službe." data-en="<strong>Phase threshold:</strong> the target has contrary information from official service."><strong>Prag faze:</strong> meta ima suprotno mišljenje zvanične službe.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Prekid i prijava" data-en="Phase 6 — Stop and report">Faza 6 — Prekid i prijava</h3>
        <p data-sr="Prevarant izbegava trag koji ostaje u instituciji." data-en="Contact ends when you request stamped written confirmation or report the number to police.">Prevarant izbegava trag koji ostaje u instituciji.</p>
        <ul class="bullets">
          <li data-sr="signal: broj više ne prima pozive ili menja se svakodnevno." data-en="signal: number no longer answers or changes daily.">signal: broj više ne prima pozive ili menja se svakodnevno.</li>
          <li data-sr="signal: isti skript koriste drugi stanovnici u prijavama." data-en="signal: others report the same script.">signal: isti skript koriste drugi stanovnici u prijavama.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="municipality-impersonation.html" data-sr="Lažna opština" data-en="Municipality impersonation">Lažna opština</a></li>
            <li><a href="government-impersonation.html" data-sr="Država" data-en="Government impersonation">Država</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta prekida komunikaciju i čuva dokaze." data-en="<strong>Phase threshold:</strong> the target ends communication and keeps evidence."><strong>Prag faze:</strong> meta prekida komunikaciju i čuva dokaze.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Opština navodno zove, ali broj nije na listi kontakata na sajtu opštine." data-en="The municipality supposedly calls, but the number is not on the municipal website contact list.">Opština navodno zove, ali broj nije na listi kontakata na sajtu opštine.</li>
        <li data-sr="Nude popust koji ne postoji na računu koji ste već dobili." data-en="They offer a discount that does not appear on a bill you already have.">Nude popust koji ne postoji na računu koji ste već dobili.</li>
        <li data-sr="Traže uplatu pre nego što proverite stanje na šalteru ili portalu." data-en="They want payment before you check balance at counter or portal.">Traže uplatu pre nego što proverite stanje na šalteru ili portalu.</li>
        <li data-sr="Poziv na broj za uplatu se ne poklapa sa prethodnim računima." data-en="Payment reference does not match previous bills.">Poziv na broj za uplatu se ne poklapa sa prethodnim računima.</li>
        <li data-sr="Gotovina kuriru ili kartica preko nepoznatog linka." data-en="Cash to courier or card via unknown link.">Gotovina kuriru ili kartica preko nepoznatog linka.</li>
        <li data-sr="Pritisak da ne obaveštavate članove domaćinstva." data-en="Pressure not to inform household members.">Pritisak da ne obaveštavate članove domaćinstva.</li>
        <li data-sr="Ne mogu da ponove tačan naziv stavke duga." data-en="They cannot repeat the exact debt line item name.">Ne mogu da ponove tačan naziv stavke duga.</li>
        <li data-sr="Isti poziv dolazi i susidima istog dana." data-en="The same call hits neighbors the same day.">Isti poziv dolazi i susidima istog dana.</li>
        <li data-sr="Zabranjuju povratni poziv na centralu opštine." data-en="They forbid calling back the municipal switchboard.">Zabranjuju povratni poziv na centralu opštine.</li>
        <li data-sr="Posle uplate traže još jednu administrativnu naknadu." data-en="After payment they ask for another administrative fee.">Posle uplate traže još jednu administrativnu naknadu.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Dug" data-en="Debt">Dug</div>
          <ul class="bullets">
            <li data-sr="Uporedite iznos sa poslednjim zvaničnim računom ili portalom." data-en="Compare the amount to the latest official bill or portal.">Uporedite iznos sa poslednjim zvaničnim računom ili portalom.</li>
            <li data-sr="Pozovite komunalno preduzeće ili opštinu na broj sa računa." data-en="Call the utility or municipality on the number from your bill.">Pozovite komunalno preduzeće ili opštinu na broj sa računa.</li>
            <li data-sr="Proverite da li postoji predmet izvršenja u vašem imenu kod javnog izvršitelja ako je relevantno." data-en="Check whether an enforcement case exists in your name with a public bailiff if relevant.">Proverite da li postoji predmet izvršenja u vašem imenu kod javnog izvršitelja ako je relevantno.</li>
            <li data-sr="Pitajte za broj predmeta koji možete zapisati i ponovo potvrditi." data-en="Ask for a case number you can write down and verify again.">Pitajte za broj predmeta koji možete zapisati i ponovo potvrditi.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Uplata" data-en="Payment">Uplata</div>
          <ul class="bullets">
            <li data-sr="Ne plaćajte model koji se ne poklapa sa uobičajenim." data-en="Do not pay a payment model that does not match the usual one.">Ne plaćajte model koji se ne poklapa sa uobičajenim.</li>
            <li data-sr="Odbijte kurira sa gotovinom kao jedinu opciju." data-en="Refuse a courier with cash as the only option.">Odbijte kurira sa gotovinom kao jedinu opciju.</li>
            <li data-sr="Koristite samo link sa zvaničnog sajta, ne iz SMS-a." data-en="Use only links from the official site, not from SMS.">Koristite samo link sa zvaničnog sajta, ne iz SMS-a.</li>
            <li data-sr="Sačekajte jedan dan i ponovo proverite stanje pre uplate." data-en="Wait one day and recheck balance before paying.">Sačekajte jedan dan i ponovo proverite stanje pre uplate.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
      <ul class="bullets">
        <li data-sr="Da li se iznos poklapa sa mojim poslednjim zvaničnim računom?" data-en="Does the amount match my latest official bill?">Da li se iznos poklapa sa mojim poslednjim zvaničnim računom?</li>
        <li data-sr="Da li sam pozvao opštinu na broj sa sajta, a ne iz SMS-a?" data-en="Did I call the municipality on the website number, not from SMS?">Da li sam pozvao opštinu na broj sa sajta, a ne iz SMS-a?</li>
        <li data-sr="Da li šalter potvrđuje isti broj predmeta?" data-en="Does the counter confirm the same case number?">Da li šalter potvrđuje isti broj predmeta?</li>
        <li data-sr="Da li postoji pisan dokument sa pečatom koji potvrđuje dug?" data-en="Is there a stamped written document confirming the debt?">Da li postoji pisan dokument sa pečatom koji potvrđuje dug?</li>
        <li data-sr="Da li popust postoji u objavljenom pravilniku?" data-en="Does the discount exist in published rules?">Da li popust postoji u objavljenom pravilniku?</li>
        <li data-sr="Da li primalac uplate ima ugovor sa opštinom koji mogu proveriti?" data-en="Does the payee have a contract with the municipality I can verify?">Da li primalac uplate ima ugovor sa opštinom koji mogu proveriti?</li>
        <li data-sr="Da li bih ovu uplatu uradio i bez poziva koji me je uplašio?" data-en="Would I make this payment even without the scary call?">Da li bih ovu uplatu uradio i bez poziva koji me je uplašio?</li>
        <li data-sr="Da li me kontakt tera da ne pitam ukućane?" data-en="Does the contact pressure me not to ask family?">Da li me kontakt tera da ne pitam ukućane?</li>
        <li data-sr="Da li je link za karticu na istom domenu kao zvanični portal?" data-en="Is the card link on the same domain as the official portal?">Da li je link za karticu na istom domenu kao zvanični portal?</li>
        <li data-sr="Da li sam već platio i traže još?" data-en="Did I already pay and they ask for more?">Da li sam već platio i traže još?</li>
        <li data-sr="Da li isti scenario prijavljuju drugi u zajednici?" data-en="Are others in the community reporting the same scenario?">Da li isti scenario prijavljuju drugi u zajednici?</li>
        <li data-sr="Da li bih ovu odluku doneo posle noći sna?" data-en="Would I make this decision after a night's sleep?">Da li bih ovu odluku doneo posle noći sna?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Spustite slušalicu i ne platite istog časa." data-en="Hang up and do not pay immediately.">Spustite slušalicu i ne platite istog časa.</li>
        <li data-sr="Pozovite zvanični broj sa računa ili sajta opštine." data-en="Call the official number from your bill or municipal site.">Pozovite zvanični broj sa računa ili sajta opštine.</li>
        <li data-sr="Proverite portal komunalnog preduzeća ako je reč o uslugama." data-en="Check the utility portal if services are involved.">Proverite portal komunalnog preduzeća ako je reč o uslugama.</li>
        <li data-sr="Sačuvajte broj pozivaoca i snimak poruke." data-en="Save the caller ID and message recording.">Sačuvajte broj pozivaoca i snimak poruke.</li>
        <li data-sr="Prijavite policiji ako je došlo do uplate ili pokušaja pritiska." data-en="Report to police if payment occurred or pressure was applied.">Prijavite policiji ako je došlo do uplate ili pokušaja pritiska.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si uporedio iznos sa poslednjim računom?" data-en="Did you compare the amount to the last bill?">Da li si uporedio iznos sa poslednjim računom?</li>
            <li data-sr="Da li si nazvao opštinu na broj koji nije iz poziva?" data-en="Did you call the municipality on a number not from the call?">Da li si nazvao opštinu na broj koji nije iz poziva?</li>
            <li data-sr="Da li bi prava opština tražila gotovinu kuriru?" data-en="Would a real municipality ask for cash to a courier?">Da li bi prava opština tražila gotovinu kuriru?</li>
            <li data-sr="Da li postoji hitnost koja nestaje ako sačekaš sutra?" data-en="Is there urgency that vanishes if you wait until tomorrow?">Da li postoji hitnost koja nestaje ako sačekaš sutra?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Hajde da zajedno proverimo stanje na portalu pre uplate." data-en="Let's check the portal balance together before paying.">Hajde da zajedno proverimo stanje na portalu pre uplate.</li>
            <li data-sr="Pravi dug se uvek može proveriti na šalteru ili sajtu." data-en="Real debt can always be checked at the counter or website.">Pravi dug se uvek može proveriti na šalteru ili sajtu.</li>
            <li data-sr="Jedan dan čekanja neće promeniti zakonite postupke." data-en="One day of waiting will not change lawful procedures.">Jedan dan čekanja neće promeniti zakonite postupke.</li>
            <li data-sr="Ne šalji novac na račun koji ne stoji na zvaničnom računu." data-en="Do not send money to an account not on the official bill.">Ne šalji novac na račun koji ne stoji na zvaničnom računu.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
