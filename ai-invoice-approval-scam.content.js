window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["ai-invoice-approval-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
      <p data-sr="Napadač šalje fakturu ili zahtev za plaćanje, zatim prati glasovnim ili tekstualnim kontaktom koji zvuči kao direktor, CFO ili menadžer odeljenja. Cilj je da zaposleni u finansijama preskoči čekanje na drugi potpis jer šef je odobrio telefonom." data-en="The attacker sends an invoice or payment request, then follows with a voice or text contact sounding like a director, CFO, or department manager. The goal is finance staff skipping wait for a second signature because the boss approved by phone.">Napadač šalje fakturu ili zahtev za plaćanje, zatim prati glasovnim ili tekstualnim kontaktom koji zvuči kao direktor, CFO ili menadžer odeljenja. Cilj je da zaposleni u finansijama preskoči čekanje na drugi potpis jer šef je odobrio telefonom.</p>
      <p data-sr="Ova varijanta je drugačija od klasične promene IBAN-a na mejlu: fokus je na lažnom internom odobrenju koje zvuči kao poznata osoba, ponekad uz AI klon glasa." data-en="This variant differs from classic IBAN change on email: the focus is fake internal approval that sounds like a known person, sometimes with an AI voice clone.">Ova varijanta je drugačija od klasične promene IBAN-a na mejlu: fokus je na lažnom internom odobrenju koje zvuči kao poznata osoba, ponekad uz AI klon glasa.</p>
      <div class="callout" data-sr="<strong>Model:</strong> dokument ili zahtev → lažno odobrenje (glas/poruka) → zaobilazak kontrole → uplata → otkrivanje." data-en="<strong>Model:</strong> document or request → fake approval (voice/message) → control bypass → payment → discovery."><strong>Model:</strong> dokument ili zahtev → lažno odobrenje (glas/poruka) → zaobilazak kontrole → uplata → otkrivanje.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi" data-en="How it generally works">Kako generalno radi</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta ubedi finansije" data-en="What convinces finance">Šta ubedi finansije</div>
          <ul class="bullets">
            <li data-sr="Glas ili stil pisanja liči na rukovodioca zbog javnih snimaka ili ukradenih mejlova." data-en="Voice or writing style resembles a manager due to public clips or stolen email.">Glas ili stil pisanja liči na rukovodioca zbog javnih snimaka ili ukradenih mejlova.</li>
            <li data-sr="Poznati su broj fakture, iznos i ime dobavljača iz pravog dokumenta." data-en="Invoice number, amount, and supplier name match a real document.">Poznati su broj fakture, iznos i ime dobavljača iz pravog dokumenta.</li>
            <li data-sr="Hitnost zbog rokova dobavljača ili kazni za kašnjenje." data-en="Urgency due to supplier deadlines or late penalties.">Hitnost zbog rokova dobavljača ili kazni za kašnjenje.</li>
            <li data-sr="Poruka stiže sa broja ili naloga koji deluje interno." data-en="Message arrives from a number or account that looks internal.">Poruka stiže sa broja ili naloga koji deluje interno.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Gde je prevara" data-en="Where the fraud is">Gde je prevara</div>
          <ul class="bullets">
            <li data-sr="Nema drugog potpisa, tiketa ili ERP zapisa koji se poklapa." data-en="No second signature, ticket, or matching ERP record.">Nema drugog potpisa, tiketa ili ERP zapisa koji se poklapa.</li>
            <li data-sr="Odobrenje ne možete ponoviti kroz službeni kanal (Teams sa domena, intranet)." data-en="You cannot repeat approval through official channel (domain Teams, intranet).">Odobrenje ne možete ponoviti kroz službeni kanal (Teams sa domena, intranet).</li>
            <li data-sr="IBAN ili primalac se razlikuje od arhive čak i kad je faktura slična." data-en="IBAN or payee differs from archive even when invoice looks similar.">IBAN ili primalac se razlikuje od arhive čak i kad je faktura slična.</li>
            <li data-sr="Odobravalac je u avionu i ne može pisati mejl sa domena." data-en="Approver is on a plane and cannot email from the domain.">Odobravalac je u avionu i ne može pisati mejl sa domena.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching)">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Šest faza tipičnog toka; grananja ka CEO prevari i fakturi sa lažnim glasom." data-en="Six phases of a typical flow; branching to CEO fraud and invoice voice fraud.">Šest faza tipičnog toka; grananja ka CEO prevari i fakturi sa lažnim glasom.</p>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Priprema dokumenta" data-en="Phase 1 — Document prep">Faza 1 — Priprema dokumenta</h3>
        <p data-sr="Napadač kompromituje mejl, krade šablon fakture ili šalje lookalike domen. Dokument izgleda kao prethodne isprave." data-en="Attacker compromises email, steals an invoice template, or uses a lookalike domain. The document looks like prior ones.">Napadač kompromituje mejl, krade šablon fakture ili šalje lookalike domen. Dokument izgleda kao prethodne isprave.</p>
        <ul class="bullets">
          <li data-sr="Signal: jedina razlika je primalac ili IBAN u odnosu na arhivu." data-en="Signal: only difference is payee or IBAN versus archive.">Signal: jedina razlika je primalac ili IBAN u odnosu na arhivu.</li>
          <li data-sr="Signal: faktura stiže van uobičajenog ciklusa ali sa poznatim iznosom." data-en="Signal: invoice arrives off-cycle but with a familiar amount.">Signal: faktura stiže van uobičajenog ciklusa ali sa poznatim iznosom.</li>
          <li data-sr="Signal: Reply-To polje se razlikuje od From adrese." data-en="Signal: Reply-To differs from From address.">Signal: Reply-To polje se razlikuje od From adrese.</li>
          <li data-sr="Signal: PDF je nov ali metadata pokazuje nedavno kreiranje." data-en="Signal: PDF is new but metadata shows recent creation.">Signal: PDF je nov ali metadata pokazuje nedavno kreiranje.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> finansije imaju dokument spreman za obradu." data-en="<strong>Phase threshold:</strong> finance has a document ready to process."><strong>Prag faze:</strong> finansije imaju dokument spreman za obradu.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Lažno odobrenje glasom ili četom" data-en="Phase 2 — Fake approval by voice or chat">Faza 2 — Lažno odobrenje glasom ili četom</h3>
        <p data-sr="Zaposleni dobija poziv, glasovnu poruku ili SMS/WhatsApp sa naloga koji liči na šefa. Sadržaj potvrđuje uplatu." data-en="Staff get a call, voice note, or SMS/WhatsApp from an account resembling the boss. Content confirms payment.">Zaposleni dobija poziv, glasovnu poruku ili SMS/WhatsApp sa naloga koji liči na šefa. Sadržaj potvrđuje uplatu.</p>
        <ul class="bullets">
          <li data-sr="Signal: broj nije u korporativnom imeniku." data-en="Signal: number is not in the corporate directory.">Signal: broj nije u korporativnom imeniku.</li>
          <li data-sr="Signal: glas je kratak i ne odgovara na pitanje koje samo šef zna." data-en="Signal: voice is short and dodges a question only the boss would know.">Signal: glas je kratak i ne odgovara na pitanje koje samo šef zna.</li>
          <li data-sr="Signal: poruka kaže potvrdi ovaj IBAN, hitno je bez tiketa." data-en="Signal: message says confirm this IBAN, urgent with no ticket.">Signal: poruka kaže potvrdi ovaj IBAN, hitno je bez tiketa.</li>
          <li data-sr="Signal: traži se da se preskoči drugi potpis jer je direktor već rekao." data-en="Signal: skip second signature because director already said so.">Signal: traži se da se preskoči drugi potpis jer je direktor već rekao.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> zaposleni veruje da postoji verbalno odobrenje." data-en="<strong>Phase threshold:</strong> staff believe verbal approval exists."><strong>Prag faze:</strong> zaposleni veruje da postoji verbalno odobrenje.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Prag: knjiženje uplate" data-en="Phase 3 — Threshold: booking payment">Faza 3 — Prag: knjiženje uplate</h3>
        <p data-sr="Uplata se procesuira u ERP-u ili banci. Sistem ne blokira jer iznos i dobavljač deluju poznato." data-en="Payment is processed in ERP or banking. The system does not block because amount and supplier feel familiar.">Uplata se procesuira u ERP-u ili banci. Sistem ne blokira jer iznos i dobavljač deluju poznato.</p>
        <ul class="bullets">
          <li data-sr="Signal: prvi put se plaća na novi IBAN bez aneksa." data-en="Signal: first payment to new IBAN without an amendment.">Signal: prvi put se plaća na novi IBAN bez aneksa.</li>
          <li data-sr="Signal: odobrenje u sistemu ima samo tekstualnu napomenu telefon." data-en="Signal: system approval has only a phone note.">Signal: odobrenje u sistemu ima samo tekstualnu napomenu telefon.</li>
          <li data-sr="Signal: niko iz nabavke nije u CC na mejlu." data-en="Signal: nobody from procurement is CC’d on email.">Signal: niko iz nabavke nije u CC na mejlu.</li>
          <li data-sr="Signal: iznos je blizu pragova koji obično traže dva potpisa." data-en="Signal: amount is near thresholds that normally need two signatures.">Signal: iznos je blizu pragova koji obično traže dva potpisa.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="ceo-fraud.html" data-sr="CEO prevara" data-en="CEO fraud">CEO prevara</a></li>
            <li><a href="ai-invoice-voice-confirmation-scam.html" data-sr="AI glas koji potvrđuje fakturu" data-en="AI invoice voice confirmation scam">AI glas koji potvrđuje fakturu</a></li>
            <li><a href="vendor-email-compromise.html" data-sr="Kompromitacija imejla dobavljača" data-en="Vendor email compromise">Kompromitacija imejla dobavljača</a></li>
            <li><a href="business-email-compromise.html" data-sr="Kompromitacija poslovnog imejla" data-en="Business email compromise">Kompromitacija poslovnog imejla</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> novac napušta račun firme." data-en="<strong>Phase threshold:</strong> money leaves the company account."><strong>Prag faze:</strong> novac napušta račun firme.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Eskalacija internog pritiska" data-en="Phase 4 — Internal pressure escalation">Faza 4 — Eskalacija internog pritiska</h3>
        <p data-sr="Ako zaposleni koleba, stiže druga poruka sa višeg nivoa koja potvrđuje isto odobrenje." data-en="If staff hesitate, another message from a higher level confirms the same approval.">Ako zaposleni koleba, stiže druga poruka sa višeg nivoa koja potvrđuje isto odobrenje.</p>
        <ul class="bullets">
          <li data-sr="Signal: dva kontakta u kratkom roku koriste istu frazu." data-en="Signal: two contacts in short time use the same phrase.">Signal: dva kontakta u kratkom roku koriste istu frazu.</li>
          <li data-sr="Signal: pretnja da ćete odgovarati za kašnjenje." data-en="Signal: threat you will answer for the delay.">Signal: pretnja da ćete odgovarati za kašnjenje.</li>
          <li data-sr="Signal: zabrana konsultacije sa kolegom iz nabavke." data-en="Signal: ban on consulting a procurement colleague.">Signal: zabrana konsultacije sa kolegom iz nabavke.</li>
          <li data-sr="Signal: lažni CFO i lažni CEO šalju kontradiktorne detalje o istom plaćanju." data-en="Signal: fake CFO and CEO send contradictory details on the same payment.">Signal: lažni CFO i lažni CEO šalju kontradiktorne detalje o istom plaćanju.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> proces se zatvara uprkos sumnji." data-en="<strong>Phase threshold:</strong> process closes despite doubt."><strong>Prag faze:</strong> proces se zatvara uprkos sumnji.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Širenje na druge uplate" data-en="Phase 5 — Spread to other payments">Faza 5 — Širenje na druge uplate</h3>
        <p data-sr="Posle prvog uspeha napadač šalje sledeće fakture sa istim obrascom ili traži pristup mejlu odobravaoca." data-en="After first success the attacker sends more invoices with the same pattern or requests approver email access.">Posle prvog uspeha napadač šalje sledeće fakture sa istim obrascom ili traži pristup mejlu odobravaoca.</p>
        <ul class="bullets">
          <li data-sr="Signal: više dobavljača menja račun iste nedelje." data-en="Signal: multiple suppliers change account the same week.">Signal: više dobavljača menja račun iste nedelje.</li>
          <li data-sr="Signal: pravilo o dvostrukoj proveri je privremeno zaobiđeno za krizu." data-en="Signal: dual-control rule is bypassed for a crisis.">Signal: pravilo o dvostrukoj proveri je privremeno zaobiđeno za krizu.</li>
          <li data-sr="Signal: traži se prosleđivanje mejla finansijama sa lažnog naloga." data-en="Signal: forwarding finance email from a fake account is requested.">Signal: traži se prosleđivanje mejla finansijama sa lažnog naloga.</li>
          <li data-sr="Signal: lažni glas traži povećanje limita na platnom nalogu." data-en="Signal: fake voice asks to raise payment limits.">Signal: lažni glas traži povećanje limita na platnom nalogu.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> više transakcija prolazi na isti obrazac." data-en="<strong>Phase threshold:</strong> more transactions pass on the same pattern."><strong>Prag faze:</strong> više transakcija prolazi na isti obrazac.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 6 — Otkrivanje i ispravka procedure" data-en="Phase 6 — Discovery and procedure fix">Faza 6 — Otkrivanje i ispravka procedure</h3>
        <p data-sr="Pravi dobavljač ili rukovalac javlja da uplata nije stigla. Upoređivanje IBAN-a i poziv pravom rukovodiocu raspleću slučaj." data-en="Real supplier or handler reports non-payment. IBAN comparison and calling the real manager unravel the case.">Pravi dobavljač ili rukovalac javlja da uplata nije stigla. Upoređivanje IBAN-a i poziv pravom rukovodiocu raspleću slučaj.</p>
        <ul class="bullets">
          <li data-sr="Signal: rukovodilac kaže da nije davao telefonsko odobrenje." data-en="Signal: manager says no phone approval was given.">Signal: rukovodilac kaže da nije davao telefonsko odobrenje.</li>
          <li data-sr="Signal: IT nalazi kompromitovane mejl naloge ili pravila prosleđivanja." data-en="Signal: IT finds compromised mailboxes or forwarding rules.">Signal: IT nalazi kompromitovane mejl naloge ili pravila prosleđivanja.</li>
          <li data-sr="Signal: ista šema se ponavlja kod drugih firmi u industriji (upozorenja udruženja)." data-en="Signal: same pattern hits other firms in the industry (association alerts).">Signal: ista šema se ponavlja kod drugih firmi u industriji (upozorenja udruženja).</li>
          <li data-sr="Signal: ponuda istrage od treće strane uz novu uplatu." data-en="Signal: third-party investigation offer for another fee.">Signal: ponuda istrage od treće strane uz novu uplatu.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="payment-diversion.html" data-sr="Preusmerenje plaćanja" data-en="Payment diversion">Preusmerenje plaćanja</a></li>
            <li><a href="invoice-fraud.html" data-sr="Prevara fakture" data-en="Invoice fraud">Prevara fakture</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> politika plaćanja je ažurirana i incident prijavljen." data-en="<strong>Phase threshold:</strong> payment policy is updated and incident reported."><strong>Prag faze:</strong> politika plaćanja je ažurirana i incident prijavljen.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Telefonsko ili WhatsApp odobrenje bez tiketa u ERP-u." data-en="Phone or WhatsApp approval without an ERP ticket.">Telefonsko ili WhatsApp odobrenje bez tiketa u ERP-u.</li>
        <li data-sr="Zahtev da se preskoči drugi potpis zbog hitnosti." data-en="Request to skip second signature due to urgency.">Zahtev da se preskoči drugi potpis zbog hitnosti.</li>
        <li data-sr="Glas direktora koji ne zna interni kod projekta ili ime klijenta." data-en="Director voice that does not know internal project code or client name.">Glas direktora koji ne zna interni kod projekta ili ime klijenta.</li>
        <li data-sr="Broj sa kojeg zove nije u korporativnom imeniku." data-en="Calling number not in corporate directory.">Broj sa kojeg zove nije u korporativnom imeniku.</li>
        <li data-sr="Novi IBAN na poznatom šablonu fakture." data-en="New IBAN on a familiar invoice template.">Novi IBAN na poznatom šablonu fakture.</li>
        <li data-sr="Odobrenje samo u SMS-u ili glasovnoj belešci." data-en="Approval only in SMS or voice note.">Odobrenje samo u SMS-u ili glasovnoj belešci.</li>
        <li data-sr="Zabrana konsultacije sa nabavkom ili pravnim timom." data-en="Ban on consulting procurement or legal.">Zabrana konsultacije sa nabavkom ili pravnim timom.</li>
        <li data-sr="Isti dan kao rok za veliki iznos." data-en="Same-day deadline for a large amount.">Isti dan kao rok za veliki iznos.</li>
        <li data-sr="Dva rukovodioca potvrđuju istu stvar u razmaku od minuta." data-en="Two managers confirm the same thing minutes apart.">Dva rukovodioca potvrđuju istu stvar u razmaku od minuta.</li>
        <li data-sr="Glas zvuči sintetički kad tražite spontano pitanje." data-en="Voice sounds synthetic when you ask a spontaneous question.">Glas zvuči sintetički kad tražite spontano pitanje.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Odobrenje" data-en="Approval">Odobrenje</div>
          <ul class="bullets">
            <li data-sr="Da li postoji tiket u ERP-u koji pokriva isti broj fakture." data-en="Is there an ERP ticket covering the same invoice number.">Da li postoji tiket u ERP-u koji pokriva isti broj fakture.</li>
            <li data-sr="Da li možete pozvati rukovodioca na poznati ekstenziju ili Teams sa domena." data-en="Can you call the manager on a known extension or domain Teams.">Da li možete pozvati rukovodioca na poznati ekstenziju ili Teams sa domena.</li>
            <li data-sr="Da li drugi odobravalac nezavisno potvrđuje bez čitanja poruke prvom." data-en="Does a second approver confirm independently without reading the first message.">Da li drugi odobravalac nezavisno potvrđuje bez čitanja poruke prvom.</li>
            <li data-sr="Da li je odobrenje zabeleženo u pisanom obliku na domena firme." data-en="Is approval logged in writing on the company domain.">Da li je odobrenje zabeleženo u pisanom obliku na domena firme.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Primalac" data-en="Payee">Primalac</div>
          <ul class="bullets">
            <li data-sr="Da li se IBAN poklapa sa poslednjom isplatom istom dobavljaču." data-en="Does IBAN match the last payment to the same supplier.">Da li se IBAN poklapa sa poslednjom isplatom istom dobavljaču.</li>
            <li data-sr="Da li postoji potpisan aneks o promeni računa." data-en="Is there a signed amendment for account change.">Da li postoji potpisan aneks o promeni računa.</li>
            <li data-sr="Da li nabavka potvrđuje promenu primaoca." data-en="Does procurement confirm payee change.">Da li nabavka potvrđuje promenu primaoca.</li>
            <li data-sr="Da li bi banka prihvatila opis svrhe koji ste uneli." data-en="Would the bank accept the purpose description you entered.">Da li bi banka prihvatila opis svrhe koji ste uneli.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
      <p class="muted" data-sr="Više negativnih odgovora ukazuje na prevaru." data-en="Multiple negative answers point to a scam.">Više negativnih odgovora ukazuje na prevaru.</p>
      <ul class="bullets">
        <li data-sr="Da li je odobrenje ušlo kroz službeni mejl sa domena firme." data-en="Did approval arrive via official company-domain email.">Da li je odobrenje ušlo kroz službeni mejl sa domena firme.</li>
        <li data-sr="Da li sam video potpisan aneks za novi IBAN." data-en="Did I see a signed amendment for the new IBAN.">Da li sam video potpisan aneks za novi IBAN.</li>
        <li data-sr="Da li sam pitao rukovodioca pitanje koje samo on zna." data-en="Did I ask the manager a question only they would know.">Da li sam pitao rukovodioca pitanje koje samo on zna.</li>
        <li data-sr="Da li je broj pozivaoca u imeniku firme." data-en="Is the caller number in the company directory.">Da li je broj pozivaoca u imeniku firme.</li>
        <li data-sr="Da li je iznos iznad internog praga za dva potpisa." data-en="Is the amount above the internal two-signature threshold.">Da li je iznos iznad internog praga za dva potpisa.</li>
        <li data-sr="Da li je nabavka uključena u komunikaciju." data-en="Is procurement included in the thread.">Da li je nabavka uključena u komunikaciju.</li>
        <li data-sr="Da li ERP upozorava na novog primaoca." data-en="Does ERP warn about a new payee.">Da li ERP upozorava na novog primaoca.</li>
        <li data-sr="Da li je odobrenje samo glasovna beleška." data-en="Is approval only a voice note.">Da li je odobrenje samo glasovna beleška.</li>
        <li data-sr="Da li me neko tera da ne pitam pravni tim." data-en="Is someone pushing me not to ask legal.">Da li me neko tera da ne pitam pravni tim.</li>
        <li data-sr="Da li je ista šema opisana u bezbednosnom biltenu." data-en="Is the same pattern described in a security bulletin.">Da li je ista šema opisana u bezbednosnom biltenu.</li>
        <li data-sr="Da li sam sačuvao snimak ekrana i zaglavlje mejla." data-en="Did I save screenshots and email headers.">Da li sam sačuvao snimak ekrana i zaglavlje mejla.</li>
        <li data-sr="Da li bih pauzirao uplatu da šef nije na putu." data-en="Would I pause payment if the boss were not traveling.">Da li bih pauzirao uplatu da šef nije na putu.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Zaustavite uplatu do završetka druge provere." data-en="Stop payment until a second check completes.">Zaustavite uplatu do završetka druge provere.</li>
        <li data-sr="Pozovite rukovodioca na poznat interni broj ili zakazite video na domena nalogu." data-en="Call the manager on a known internal line or schedule video on a domain account.">Pozovite rukovodioca na poznat interni broj ili zakazite video na domena nalogu.</li>
        <li data-sr="Uključite nabavku i IT radi zaglavlja mejla i pravila prosleđivanja." data-en="Loop in procurement and IT for email headers and forwarding rules.">Uključite nabavku i IT radi zaglavlja mejla i pravila prosleđivanja.</li>
        <li data-sr="Uporedite IBAN sa poslednjom isplatom i ugovorom." data-en="Compare IBAN to last payment and contract.">Uporedite IBAN sa poslednjom isplatom i ugovorom.</li>
        <li data-sr="Ako je uplata otišla, banka odmah i dokumentujte incident." data-en="If money left, bank immediately and document the incident.">Ako je uplata otišla, banka odmah i dokumentujte incident.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li postoji tiket koji se poklapa sa brojem fakture." data-en="Is there a ticket matching the invoice number.">Da li postoji tiket koji se poklapa sa brojem fakture.</li>
            <li data-sr="Da li si čuo glas uživo na službenom kanalu, ne samo belešku." data-en="Did you hear the voice live on an official channel, not only a note.">Da li si čuo glas uživo na službenom kanalu, ne samo belešku.</li>
            <li data-sr="Da li bi pravni tim prihvatio ovo odobrenje kao dokaz." data-en="Would legal accept this as proof of approval.">Da li bi pravni tim prihvatio ovo odobrenje kao dokaz.</li>
            <li data-sr="Da li drugi odobravalac može da potvrdi bez čitanja tvoje poruke." data-en="Can a second approver confirm without reading your message.">Da li drugi odobravalac može da potvrdi bez čitanja tvoje poruke.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Politika firme je da telefon nije kanal odobrenja za ovaj iznos." data-en="Company policy is phone is not an approval channel for this amount.">Politika firme je da telefon nije kanal odobrenja za ovaj iznos.</li>
            <li data-sr="AI može oponašati glas šefa; zato koristimo tiket i drugi potpis." data-en="AI can mimic the boss’s voice; we use a ticket and second signature.">AI može oponašati glas šefa; zato koristimo tiket i drugi potpis.</li>
            <li data-sr="Ako IBAN nije u ugovoru, uplata staje do pisanog aneksa." data-en="If IBAN is not in the contract, payment stops until a written amendment.">Ako IBAN nije u ugovoru, uplata staje do pisanog aneksa.</li>
            <li data-sr="Pauza od jednog dana ne bi smela da pokvari odnos sa pravim dobavljačem." data-en="A one-day pause should not ruin the relationship with a real supplier.">Pauza od jednog dana ne bi smela da pokvari odnos sa pravim dobavljačem.</li>
          </ul>
        </div>
      </div>
    </section>
`
};
