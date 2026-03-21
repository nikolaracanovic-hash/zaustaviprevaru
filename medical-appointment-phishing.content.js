window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["medical-appointment-phishing"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi ova prevara" data-en="Introduction: how this scam works">Uvod: kako radi ova prevara</h2>
      <p data-sr="Poruka ili mejl glumi kliniku, ordinaciju, laboratoriju ili portal pacijenta i tvrdi da termin mora da se potvrdi, pomeri ili doplati preko linka. Link vodi na lažnu stranicu koja prikuplja prijavu, karticu, zdravstvene podatke ili MFA potvrdu." data-en="A message or email pretends to be a clinic, office, laboratory, or patient portal and claims the appointment must be confirmed, rescheduled, or topped up through a link. The link leads to a fake page that collects login data, card details, health data, or an MFA approval.">Poruka ili mejl glumi kliniku, ordinaciju, laboratoriju ili portal pacijenta i tvrdi da termin mora da se potvrdi, pomeri ili doplati preko linka. Link vodi na lažnu stranicu koja prikuplja prijavu, karticu, zdravstvene podatke ili MFA potvrdu.</p>
      <p data-sr="Ova varijanta se razlikuje od šireg lažnog predstavljanja zdravstvene ustanove po tome što napad počinje baš oko termina: potvrda dolaska, nova satnica, participacija, lista čekanja ili navodna dopuna dokumentacije. Meta ne traži opštu pomoć, već reaguje na poruku koja deluje kao nastavak već postojećeg medicinskog procesa." data-en="This variant differs from broader healthcare impersonation because the attack starts specifically around an appointment: confirming attendance, a new time slot, a copay, a waitlist place, or supposed document completion. The target is not seeking general help but reacting to a message that looks like a continuation of an existing medical process.">Ova varijanta se razlikuje od šireg lažnog predstavljanja zdravstvene ustanove po tome što napad počinje baš oko termina: potvrda dolaska, nova satnica, participacija, lista čekanja ili navodna dopuna dokumentacije. Meta ne traži opštu pomoć, već reaguje na poruku koja deluje kao nastavak već postojećeg medicinskog procesa.</p>
      <div class="callout" data-sr="<strong>Model:</strong> poruka o terminu → link za potvrdu ili doplatu → lažni portal → prijava, kartica ili podaci → zloupotreba." data-en="<strong>Model:</strong> appointment message → confirmation or copay link → fake portal → login, card, or data capture → abuse."><strong>Model:</strong> poruka o terminu → link za potvrdu ili doplatu → lažni portal → prijava, kartica ili podaci → zloupotreba.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> Unos prijave na portal pacijenta, kartice, zdravstvenih podataka ili potvrda MFA na stranici koja nije zvaničan kanal ustanove." data-en="<strong>Threshold:</strong> Entering patient-portal login data, card details, health data, or approving MFA on a page that is not the institution’s official channel."><strong>Prag:</strong> Unos prijave na portal pacijenta, kartice, zdravstvenih podataka ili potvrda MFA na stranici koja nije zvaničan kanal ustanove.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika pritiska i plaćanja" data-en="How it works: pressure and payment mechanics">Kako generalno radi: mehanika pritiska i plaćanja</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gradi poverenje ili strah" data-en="What builds trust or fear">Šta gradi poverenje ili strah</div>
          <ul class="bullets">
          <li data-sr="Poruka liči na rutinsko obaveštenje koje može da stigne pre pregleda ili analize." data-en="The message looks like a routine notice that could arrive before an exam or test.">Poruka liči na rutinsko obaveštenje koje može da stigne pre pregleda ili analize.</li>
          <li data-sr="Pominju se termin, doktor, laboratorija, participacija ili pacijentski portal kao da je proces već poznat." data-en="Appointment, doctor, laboratory, copay, or patient portal are mentioned as if the process were already familiar.">Pominju se termin, doktor, laboratorija, participacija ili pacijentski portal kao da je proces već poznat.</li>
          <li data-sr="Mali korak deluje bezazleno: samo potvrda dolaska, dopuna kartona ili unos male participacije." data-en="The first step looks harmless: only confirming attendance, updating a file, or paying a small copay.">Mali korak deluje bezazleno: samo potvrda dolaska, dopuna kartona ili unos male participacije.</li>
          <li data-sr="Pritisak dolazi iz straha da će termin propasti ili biti pomeren daleko u budućnost." data-en="Pressure comes from fear that the appointment will be lost or moved far into the future.">Pritisak dolazi iz straha da će termin propasti ili biti pomeren daleko u budućnost.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Kako se uvodi novac ili podaci" data-en="How money or data is extracted">Kako se uvodi novac ili podaci</div>
          <ul class="bullets">
          <li data-sr="Link otvara kopiju portala pacijenta, stranice za plaćanje ili forme za potvrdu termina." data-en="The link opens a copy of a patient portal, payment page, or appointment confirmation form.">Link otvara kopiju portala pacijenta, stranice za plaćanje ili forme za potvrdu termina.</li>
          <li data-sr="Traže se broj kartice, podaci zdravstvene kartice, prijava na portal ili kod iz SMS-a." data-en="They ask for card details, health-card data, patient-portal login, or an SMS code.">Traže se broj kartice, podaci zdravstvene kartice, prijava na portal ili kod iz SMS-a.</li>
          <li data-sr="Mala participacija ili verifikaciona uplata služi kao prag za karticu i dodatne naplate." data-en="A small copay or verification payment acts as the threshold for card capture and extra charges.">Mala participacija ili verifikaciona uplata služi kao prag za karticu i dodatne naplate.</li>
          <li data-sr="Kad meta zastane, priča prelazi sa termina na blokadu kartona, čekanje nalaza ili gubitak mesta." data-en="When the target hesitates, the story shifts from the appointment to blocked records, delayed results, or loss of the slot.">Kad meta zastane, priča prelazi sa termina na blokadu kartona, čekanje nalaza ili gubitak mesta.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)" data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>
      <p class="muted" data-sr="Faze su operativni tok: šta meta vidi, šta se traži, gde se pali grananje u druge prevare." data-en="Phases show the operational flow: what the target sees, what is demanded, and where branching to other scams happens.">Faze su operativni tok: šta meta vidi, šta se traži, gde se pali grananje u druge prevare.</p>
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Prvi kontakt koji deluje legitimno" data-en="Phase 1 — First contact that looks legitimate">Faza 1 — Prvi kontakt koji deluje legitimno</h3>
        <p data-sr="Stiže poruka da termin treba hitno potvrditi, pomeriti ili doplatiti. Može da deluje kao nastavak već zakazanog pregleda, laboratorije ili kontrole, pa meta lako poveruje da samo završava rutinsku administraciju." data-en="A message arrives saying the appointment must be urgently confirmed, rescheduled, or topped up. It may look like a continuation of an already booked exam, lab, or follow-up, so the target easily believes they are only finishing routine administration.">Stiže poruka da termin treba hitno potvrditi, pomeriti ili doplatiti. Može da deluje kao nastavak već zakazanog pregleda, laboratorije ili kontrole, pa meta lako poveruje da samo završava rutinsku administraciju.</p>
        <ul class="bullets">
          <li data-sr="Hitnost je naglašena već u prvoj poruci ili u naslovu oglasa." data-en="Urgency is emphasized in the first message or ad headline.">Hitnost je naglašena već u prvoj poruci ili u naslovu oglasa.</li>
          <li data-sr="Traži se brz odgovor ili potvrda da ćete doći, često uz link Potvrdi termin." data-en="A quick reply or confirmation of attendance is requested, often through a Confirm appointment link.">Traži se brz odgovor ili potvrda da ćete doći, često uz link Potvrdi termin.</li>
          <li data-sr="Komunikacija brzo prelazi na privatni kanal ili telefon." data-en="Communication quickly moves to a private channel or phone.">Komunikacija brzo prelazi na privatni kanal ili telefon.</li>
          <li data-sr="Pominju se doktor, odeljenje ili satnica, ali ne tačno onako kako ih vidite u svom kartonu ili prethodnoj potvrdi." data-en="Doctor name, department, or time are mentioned, but not exactly as they appear in your record or earlier confirmation.">Pominju se doktor, odeljenje ili satnica, ali ne tačno onako kako ih vidite u svom kartonu ili prethodnoj potvrdi.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta prihvata priču kao verovatnu i odgovori ili klikne link." data-en="<strong>Threshold:</strong> the target accepts the story as plausible and replies or clicks a link."><strong>Prag faze:</strong> meta prihvata priču kao verovatnu i odgovori ili klikne link.</div>
      </article>
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Prikupljanje poverenja i podataka" data-en="Phase 2 — Trust and data collection">Faza 2 — Prikupljanje poverenja i podataka</h3>
        <p data-sr="Link otvara formu koja glumi portal pacijenta ili administratorski ekran klinike. Tu se traže prijava, broj zdravstvene kartice, datum rođenja, JMBG, kartica ili potvrda iz SMS-a pod pričom da bez toga termin ne može da ostane aktivan." data-en="The link opens a form pretending to be a patient portal or clinic admin screen. It asks for login data, health-card number, date of birth, ID number, card details, or an SMS confirmation under the story that the slot cannot stay active without it.">Link otvara formu koja glumi portal pacijenta ili administratorski ekran klinike. Tu se traže prijava, broj zdravstvene kartice, datum rođenja, JMBG, kartica ili potvrda iz SMS-a pod pričom da bez toga termin ne može da ostane aktivan.</p>
        <ul class="bullets">
          <li data-sr="Formular traži više podataka nego što je uobičajeno za istu uslugu." data-en="The form asks for more data than is normal for the same service.">Formular traži više podataka nego što je uobičajeno za istu uslugu.</li>
          <li data-sr="Kopija ličnog dokumenta se traži pre nego što je jasan primalac i svrha." data-en="A copy of ID is requested before the recipient and purpose are clear.">Kopija ličnog dokumenta se traži pre nego što je jasan primalac i svrha.</li>
          <li data-sr="Kontakt odbija da potvrdi isti zahtev preko zvaničnog broja ustanove." data-en="The contact refuses to confirm the same request through the institution’s official phone number.">Kontakt odbija da potvrdi isti zahtev preko zvaničnog broja ustanove.</li>
          <li data-sr="Forma traži više nego što je potrebno za običnu potvrdu termina." data-en="The form asks for far more than a routine appointment confirmation should need.">Forma traži više nego što je potrebno za običnu potvrdu termina.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta šalje osetljive podatke ili potvrđuje lične detalje." data-en="<strong>Threshold:</strong> the target sends sensitive data or confirms personal details."><strong>Prag faze:</strong> meta šalje osetljive podatke ili potvrđuje lične detalje.</div>
      </article>
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 3 — Prvi novčani zahtev ili obaveza" data-en="Phase 3 — First money demand or obligation">Faza 3 — Prvi novčani zahtev ili obaveza</h3>
        <p data-sr="Posle prijave ili potvrde termina pojavljuje se doplata: participacija, rezervacija slot-a, nova taksa zbog promene termina ili navodna potvrda zdravstvene kartice. Iznos je često dovoljno mali da izgleda kao rutinska medicinska stavka." data-en="After login or appointment confirmation, a charge appears: copay, slot reservation, rescheduling fee, or supposed health-card validation. The amount is often small enough to look like a routine medical line item.">Posle prijave ili potvrde termina pojavljuje se doplata: participacija, rezervacija slot-a, nova taksa zbog promene termina ili navodna potvrda zdravstvene kartice. Iznos je često dovoljno mali da izgleda kao rutinska medicinska stavka.</p>
        <ul class="bullets">
          <li data-sr="Plaćanje ide na privatni račun, novčanik ili prenos bez fakture." data-en="Payment goes to a personal account, wallet, or transfer without an invoice.">Plaćanje ide na privatni račun, novčanik ili prenos bez fakture.</li>
          <li data-sr="Ne postoji jasan broj ustanove koji možeš sam da pozoveš iz telefonskog imenika." data-en="There is no clear institution number you can dial from the phone book.">Ne postoji jasan broj ustanove koji možeš sam da pozoveš iz telefonskog imenika.</li>
          <li data-sr="Uplatnica ili IBAN ne odgovara poznatoj ustanovi sa sajta." data-en="The payment slip or IBAN does not match the known institution website.">Uplatnica ili IBAN ne odgovara poznatoj ustanovi sa sajta.</li>
          <li data-sr="Pritisak da se plati pre isteka kratkog roka ili će termin navodno otići sledećem pacijentu." data-en="Pressure to pay before a short deadline or the slot will supposedly go to the next patient.">Pritisak da se plati pre isteka kratkog roka ili će termin navodno otići sledećem pacijentu.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="healthcare-impersonation.html" data-sr="Lažno predstavljanje zdravstvene kase" data-en="Health insurance impersonation">Lažno predstavljanje zdravstvene kase</a></li>
            <li><a href="fake-medical-scam.html" data-sr="Lažna medicinska prevara" data-en="Fake medical scam">Lažna medicinska prevara</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> izvršena je prva uplata ili unos kartice na sumnjivoj stranici." data-en="<strong>Threshold:</strong> the first payment is made or card data is entered on a suspicious page."><strong>Prag faze:</strong> izvršena je prva uplata ili unos kartice na sumnjivoj stranici.</div>
      </article>
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 4 — Eskalacija i novi razlozi" data-en="Phase 4 — Escalation and new reasons">Faza 4 — Eskalacija i novi razlozi</h3>
        <p data-sr="Posle prve uplate dolazi nova prepreka: termin nije zaključan, portal nije povukao uplatu, potrebna je dopunska potvrda ili osiguranje ne prepoznaje podatke. Napadač koristi već uloženi trud i strah da se pregled ne izgubi." data-en="After the first payment, a new obstacle appears: the appointment is not locked, the portal did not register the payment, extra confirmation is needed, or insurance supposedly failed to recognize the data. The attacker uses the effort already invested and the fear of losing the exam.">Posle prve uplate dolazi nova prepreka: termin nije zaključan, portal nije povukao uplatu, potrebna je dopunska potvrda ili osiguranje ne prepoznaje podatke. Napadač koristi već uloženi trud i strah da se pregled ne izgubi.</p>
        <ul class="bullets">
          <li data-sr="Svaki novi korak deluje kao poslednji, a odmah stiže sledeći." data-en="Each new step looks final, and the next one arrives immediately.">Svaki novi korak deluje kao poslednji, a odmah stiže sledeći.</li>
          <li data-sr="Iznosi rastu i logika postaje teža za objasniti porodici." data-en="Amounts grow and the logic becomes harder to explain to family.">Iznosi rastu i logika postaje teža za objasniti porodici.</li>
          <li data-sr="Kontakt prebacuje krivicu na žrtvu zbog kašnjenja ili pogrešnog unosa." data-en="The contact blames the target for delay or wrong input.">Kontakt prebacuje krivicu na žrtvu zbog kašnjenja ili pogrešnog unosa.</li>
          <li data-sr="Pojavljuju se novi operateri portala ili novi brojevi koji potvrđuju istu priču." data-en="New portal operators or new numbers appear to reinforce the same story.">Pojavljuju se novi operateri portala ili novi brojevi koji potvrđuju istu priču.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta plaća drugi ili treći put ili i dalje šalje podatke." data-en="<strong>Threshold:</strong> the target pays a second or third time or keeps sending data."><strong>Prag faze:</strong> meta plaća drugi ili treći put ili i dalje šalje podatke.</div>
      </article>
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 5 — Izolacija od provere" data-en="Phase 5 — Isolation from verification">Faza 5 — Izolacija od provere</h3>
        <p data-sr="Kad meta pokuša da proveri poruku kod stvarne klinike ili lekara, napadač insistira da će se time poništiti termin, usporiti procedura ili izgubiti pravo prvenstva. Cilj je da provera stane makar nekoliko minuta dok se završi unos ili uplata." data-en="When the target tries to verify the message with the real clinic or doctor, the attacker insists that doing so will cancel the appointment, delay the process, or forfeit priority. The goal is to stop verification for just long enough to finish the entry or payment.">Kad meta pokuša da proveri poruku kod stvarne klinike ili lekara, napadač insistira da će se time poništiti termin, usporiti procedura ili izgubiti pravo prvenstva. Cilj je da provera stane makar nekoliko minuta dok se završi unos ili uplata.</p>
        <ul class="bullets">
          <li data-sr="Savet je da se ne zove prava ustanova jer će se termin navodno vratiti na početak." data-en="They tell you not to call the real institution because the appointment will supposedly reset to the beginning.">Savet je da se ne zove prava ustanova jer će se termin navodno vratiti na početak.</li>
          <li data-sr="Traži se da sve završite preko mobilnog telefona bez otvaranja sajta ustanove ručno." data-en="They insist everything be completed on the phone without manually opening the institution’s website.">Traži se da sve završite preko mobilnog telefona bez otvaranja sajta ustanove ručno.</li>
          <li data-sr="Emocionalni pritisak koristi strah da ćete ostati bez pregleda, nalaza ili kontrole." data-en="Emotional pressure uses fear of losing the exam, lab result, or follow-up care.">Emocionalni pritisak koristi strah da ćete ostati bez pregleda, nalaza ili kontrole.</li>
          <li data-sr="Nudi se jedino trenutno rešenje kroz baš taj link ili broj." data-en="The only current solution is framed as going through that specific link or number.">Nudi se jedino trenutno rešenje kroz baš taj link ili broj.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="recovery-scam.html" data-sr="Prevara povraćaja novca" data-en="Recovery scam">Prevara povraćaja novca</a></li>
            <li><a href="advance-fee-fraud.html" data-sr="Uplata unapred" data-en="Advance-fee fraud">Uplata unapred</a></li>
            <li><a href="identity-theft.html" data-sr="Krađa identiteta" data-en="Identity theft">Krađa identiteta</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta smanjuje kontakt sa porodicom ili bankom." data-en="<strong>Threshold:</strong> the target reduces contact with family or the bank."><strong>Prag faze:</strong> meta smanjuje kontakt sa porodicom ili bankom.</div>
      </article>
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 6 — Prekid, tišina ili novi talas" data-en="Phase 6 — Cutoff, silence, or a new wave">Faza 6 — Prekid, tišina ili novi talas</h3>
        <p data-sr="Kanal se gasi, odgovori prestaju ili stiže novi kontakt koji nudi povrat uz novu uplatu." data-en="The channel goes quiet, replies stop, or a new contact offers recovery for another fee.">Kanal se gasi, odgovori prestaju ili stiže novi kontakt koji nudi povrat uz novu uplatu.</p>
        <ul class="bullets">
          <li data-sr="Profil, broj ili sajt nestaju ili se menjaju bez obaveštenja." data-en="The profile, number, or site disappears or changes without notice.">Profil, broj ili sajt nestaju ili se menjaju bez obaveštenja.</li>
          <li data-sr="Pojavljuje se priča o zamrznutim sredstvima i potrebi za dodatnom uplatom." data-en="A story appears about frozen funds and a need for another payment.">Pojavljuje se priča o zamrznutim sredstvima i potrebi za dodatnom uplatom.</li>
          <li data-sr="Isti obrazac se može ponoviti pod drugim imenom." data-en="The same pattern may repeat under another name.">Isti obrazac se može ponoviti pod drugim imenom.</li>
          <li data-sr="Žrtva ostaje sa gubitkom novca i rizikom od zloupotrebe podataka." data-en="The victim is left with money loss and risk of data misuse.">Žrtva ostaje sa gubitkom novca i rizikom od zloupotrebe podataka.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> prestaje komunikacija ili počinje nova šema povraćaja." data-en="<strong>Threshold:</strong> communication stops or a new recovery-style scheme begins."><strong>Prag faze:</strong> prestaje komunikacija ili počinje nova šema povraćaja.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
          <li data-sr="Poruka o terminu dolazi sa domena ili broja koji ne pripada ustanovi kod koje se lečite." data-en="The appointment message comes from a domain or number that does not belong to the institution treating you.">Poruka o terminu dolazi sa domena ili broja koji ne pripada ustanovi kod koje se lečite.</li>
          <li data-sr="Traži se potvrda termina kroz link umesto kroz kanal koji već koristite sa klinikom." data-en="Appointment confirmation is demanded through a link instead of the channel you normally use with the clinic.">Traži se potvrda termina kroz link umesto kroz kanal koji već koristite sa klinikom.</li>
          <li data-sr="Zahtev za uplatom ide na lični račun ili checkout koji nema pravno ime ustanove." data-en="Payment is directed to a personal account or checkout with no legal institution name.">Zahtev za uplatom ide na lični račun ili checkout koji nema pravno ime ustanove.</li>
          <li data-sr="Forma traži više podataka nego što je potrebno za potvrdu dolaska." data-en="The form asks for more data than a simple attendance confirmation should require.">Forma traži više podataka nego što je potrebno za potvrdu dolaska.</li>
          <li data-sr="Traže se PIN, ceo broj kartice, kod iz SMS-a ili prijava na portal preko poslatog linka." data-en="They ask for PIN, full card number, an SMS code, or patient-portal login through the link they sent.">Traže se PIN, ceo broj kartice, kod iz SMS-a ili prijava na portal preko poslatog linka.</li>
          <li data-sr="Pritisak je vezan za gubitak termina, mesta na listi ili nalaza ako ne reagujete odmah." data-en="Pressure is tied to losing the slot, waitlist place, or test result if you do not act immediately.">Pritisak je vezan za gubitak termina, mesta na listi ili nalaza ako ne reagujete odmah.</li>
          <li data-sr="Isti kontakt menja razlog naplate kada postavite dva ili tri precizna pitanja." data-en="The same contact changes the reason for payment when you ask two or three precise questions.">Isti kontakt menja razlog naplate kada postavite dva ili tri precizna pitanja.</li>
          <li data-sr="Ne dozvoljavaju da sami otvorite zvanični sajt ustanove i proverite termin bez njihovog linka." data-en="They do not let you open the institution’s official website yourself and verify the appointment without their link.">Ne dozvoljavaju da sami otvorite zvanični sajt ustanove i proverite termin bez njihovog linka.</li>
          <li data-sr="Komunikacija je ograničena na jedan broj, jedan čet ili jedan link bez javne alternative." data-en="Communication is confined to one number, one chat, or one link with no public alternative.">Komunikacija je ograničena na jedan broj, jedan čet ili jedan link bez javne alternative.</li>
          <li data-sr="Posle prve uplate odmah se pojavljuje nova administrativna prepreka." data-en="A new administrative obstacle appears immediately after the first payment.">Posle prve uplate odmah se pojavljuje nova administrativna prepreka.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih koraka" data-en="Checks: 8 quick steps">Provere: 8 brzih koraka</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Provere koje može svako" data-en="Checks anyone can do">Provere koje može svako</div>
          <ul class="bullets">
          <li data-sr="Pozovi broj ustanove sa zvaničnog sajta, ne iz poruke, i pitaj da li termin uopšte postoji pod tim brojem ili satnicom." data-en="Call the institution using the official website number, not the message, and ask whether the appointment exists under that number or time.">Pozovi broj ustanove sa zvaničnog sajta, ne iz poruke, i pitaj da li termin uopšte postoji pod tim brojem ili satnicom.</li>
          <li data-sr="Uporedi ime primaoca uplate sa pravnim imenom ustanove." data-en="Compare the payee name with the institution&#x27;s legal name.">Uporedi ime primaoca uplate sa pravnim imenom ustanove.</li>
          <li data-sr="Proveri domen mejla i linka: mala slova, crtice, lažni TLD." data-en="Check email domain and link for subtle misspellings or fake TLDs.">Proveri domen mejla i linka: mala slova, crtice, lažni TLD.</li>
          <li data-sr="Traži pisanu potvrdu termina ili račun sa punim nazivom ustanove pre bilo kakve uplate." data-en="Ask for written appointment confirmation or an invoice with the institution’s full legal name before any payment.">Traži pisanu potvrdu termina ili račun sa punim nazivom ustanove pre bilo kakve uplate.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Dodatni signali" data-en="Additional signals">Dodatni signali</div>
          <ul class="bullets">
          <li data-sr="Razgovaraj sa članom porodice pre odluke pod pritiskom." data-en="Talk to a family member before deciding under pressure.">Razgovaraj sa članom porodice pre odluke pod pritiskom.</li>
          <li data-sr="Banka može objasniti da li je primalac sumnjiv za zdravstvenu participaciju ili medicinsku uslugu." data-en="Your bank can explain whether the recipient looks unusual for a healthcare copay or medical service.">Banka može objasniti da li je primalac sumnjiv za zdravstvenu participaciju ili medicinsku uslugu.</li>
          <li data-sr="Pretraži tekst poruke ili oglasa online uz reč prevara ili scam." data-en="Search the message or ad text online with scam-related keywords.">Pretraži tekst poruke ili oglasa online uz reč prevara ili scam.</li>
          <li data-sr="Za zdravstvo, potvrdi termin direktno u klinici ili kod lekara." data-en="For healthcare, confirm appointments directly at the clinic or with your doctor.">Za zdravstvo, potvrdi termin direktno u klinici ili kod lekara.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja pre odluke" data-en="Checklist: 12 questions before you decide">Checklista: 12 pitanja pre odluke</h2>
      <ul class="bullets">
          <li data-sr="Da li sam broj ili link dobio/la samo iz nepoznate poruke?" data-en="Did I receive the number or link only from an unknown message?">Da li sam broj ili link dobio/la samo iz nepoznate poruke?</li>
          <li data-sr="Da li postoji pritisak da platim pre nego što proverim ustanovu?" data-en="Is there pressure to pay before I verify the institution?">Da li postoji pritisak da platim pre nego što proverim ustanovu?</li>
          <li data-sr="Da li primalac uplate odgovara pravnom licu sa zvaničnog sajta?" data-en="Does the payee match the legal entity on the official site?">Da li primalac uplate odgovara pravnom licu sa zvaničnog sajta?</li>
          <li data-sr="Da li traže kod iz SMS-a ili pristup internet bankarstvu?" data-en="Are they asking for SMS codes or access to online banking?">Da li traže kod iz SMS-a ili pristup internet bankarstvu?</li>
          <li data-sr="Da li odbijaju da pošalju pisanu potvrdu na zvaničnu adresu?" data-en="Do they refuse to send written confirmation to an official address?">Da li odbijaju da pošalju pisanu potvrdu na zvaničnu adresu?</li>
          <li data-sr="Da li je ponuda previše dobra da bi bila istinita?" data-en="Is the offer too good to be true?">Da li je ponuda previše dobra da bi bila istinita?</li>
          <li data-sr="Da li sam proverio/la istu uslugu kod drugog pružaoca?" data-en="Did I check the same service with another provider?">Da li sam proverio/la istu uslugu kod drugog pružaoca?</li>
          <li data-sr="Da li me neko traži da lažem banci svrhu uplate?" data-en="Is someone asking me to lie to the bank about the payment purpose?">Da li me neko traži da lažem banci svrhu uplate?</li>
          <li data-sr="Da li se traži tajnost prema porodici ili prijateljima?" data-en="Is secrecy toward family or friends requested?">Da li se traži tajnost prema porodici ili prijateljima?</li>
          <li data-sr="Da li postoji samo jedan kanal komunikacije bez alternative?" data-en="Is there only one communication channel with no alternative?">Da li postoji samo jedan kanal komunikacije bez alternative?</li>
          <li data-sr="Da li dokument ili sajt ima jezičke greške ili kopirane blokove teksta?" data-en="Does the document or site have language errors or copied text blocks?">Da li dokument ili sajt ima jezičke greške ili kopirane blokove teksta?</li>
          <li data-sr="Da li bih ovu odluku doneo/la i bez žurbe i bez emocionalnog pritiska?" data-en="Would I make this decision without rush and without emotional pressure?">Da li bih ovu odluku doneo/la i bez žurbe i bez emocionalnog pritiska?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Prekini uplatu i ne šalji nove kodove ili slike kartice." data-en="Stop payments and do not send new codes or card photos.">Prekini uplatu i ne šalji nove kodove ili slike kartice.</li>
        <li data-sr="Sačuvaj sve poruke, brojeve, uplatnice i linkove na jednom mestu." data-en="Save all messages, numbers, slips, and links in one place.">Sačuvaj sve poruke, brojeve, uplatnice i linkove na jednom mestu.</li>
        <li data-sr="Kontaktiraj banku i objasni situaciju; pitaj za chargeback ili blokadu." data-en="Contact your bank, explain the situation, and ask about chargeback or blocking.">Kontaktiraj banku i objasni situaciju; pitaj za chargeback ili blokadu.</li>
          <li data-sr="Pozovi pravu ustanovu ili kliniku preko zvaničnog broja i potvrdi da li termin, doplata ili zahtev uopšte postoje." data-en="Call the real institution or clinic via the official number and confirm whether the appointment, copay, or request exists at all.">Pozovi pravu ustanovu ili kliniku preko zvaničnog broja i potvrdi da li termin, doplata ili zahtev uopšte postoje.</li>
        <li data-sr="Prijavi incident policiji ili nacionalnom CERT-u prema lokalnoj praksi." data-en="Report the incident to police or the national CERT according to local practice.">Prijavi incident policiji ili nacionalnom CERT-u prema lokalnoj praksi.</li>
        <li data-sr="Promeni lozinke ako si uneo podatke na sumnjivoj stranici." data-en="Change passwords if you entered data on a suspicious site.">Promeni lozinke ako si uneo podatke na sumnjivoj stranici.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
          <li data-sr="Koji zvanični broj klinike si koristio/la, a koji broj ili link je stigao u poruci?" data-en="Which official clinic number did you use, and which number or link arrived in the message?">Koji zvanični broj klinike si koristio/la, a koji broj ili link je stigao u poruci?</li>
          <li data-sr="Da li si već poslao/la novac ili samo podatke?" data-en="Have you already sent money or only data?">Da li si već poslao/la novac ili samo podatke?</li>
          <li data-sr="Ko još zna za termin ili pregled i može proveriti da li ista poruka ima smisla?" data-en="Who else knows about the appointment and can help verify whether the same message makes sense?">Ko još zna za termin ili pregled i može proveriti da li ista poruka ima smisla?</li>
          <li data-sr="Koji je sledeći korak koji možeš uraditi bez pritiska danas?" data-en="What is the next step you can take without pressure today?">Koji je sledeći korak koji možeš uraditi bez pritiska danas?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
          <li data-sr="Hajde da zajedno pozovemo kliniku sa zvaničnog sajta pre bilo kakve uplate ili potvrde." data-en="Let’s call the clinic from the official website together before any payment or confirmation.">Hajde da zajedno pozovemo kliniku sa zvaničnog sajta pre bilo kakve uplate ili potvrde.</li>
          <li data-sr="Pauza od nekoliko minuta radi provere ne ruši legitiman termin niti briše pregled." data-en="A short pause to verify does not destroy a legitimate appointment or erase a real exam slot.">Pauza od nekoliko minuta radi provere ne ruši legitiman termin niti briše pregled.</li>
          <li data-sr="Prava ustanova ne traži kod iz SMS-a, punu karticu ni daljinski pristup da bi potvrdila termin." data-en="A real institution does not need SMS codes, full card data, or remote access to confirm an appointment.">Prava ustanova ne traži kod iz SMS-a, punu karticu ni daljinski pristup da bi potvrdila termin.</li>
          <li data-sr="Sačuvaćemo dokaze i prijavićemo; prvo zaustavljamo novi novac." data-en="We will save evidence and report; first we stop new money from leaving.">Sačuvaćemo dokaze i prijavićemo; prvo zaustavljamo novi novac.</li>
          </ul>
        </div>
      </div>
    </section>
`
};
