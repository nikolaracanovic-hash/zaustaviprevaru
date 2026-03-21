window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["viber-courier-phishing-scam"] = {
  raw_html: `

    <section class="card">
      <h2 data-sr="Uvod: lažni kurir u Viber četu" data-en="Introduction: fake courier in Viber chat">Uvod: lažni kurir u Viber četu</h2>

      <p data-sr="Poruka tvrdi da je paket zadržan, da treba carina ili doplatna poštarina; šalje se link za plaćanje, QR ili broj računa i traži se hitna uplata." data-en="The message claims a package is held, customs or extra postage is due; it sends a payment link, QR, or account number and demands urgent payment.">Poruka tvrdi da je paket zadržan, da treba carina ili doplatna poštarina; šalje se link za plaćanje, QR ili broj računa i traži se hitna uplata.</p>
      <p data-sr="Često postoji lažan broj pošiljke ili ime koje delimično odgovara nečemu što ste naručili." data-en="There is often a fake tracking number or a name that partly matches something you ordered.">Često postoji lažan broj pošiljke ili ime koje delimično odgovara nečemu što ste naručili.</p>
      <div class="callout" data-sr="<strong>Model:</strong> lažna isporuka → strah od gubitka paketa → uplata ili podaci → šteta." data-en="<strong>Model:</strong> fake delivery → fear of losing the package → payment or data → loss."><strong>Model:</strong> lažna isporuka → strah od gubitka paketa → uplata ili podaci → šteta.</div>
    </section>

    <section class="card">
      <h2 data-sr="Zašto Viber odgovara ovoj prevari" data-en="Why Viber fits this scam">Zašto Viber odgovara ovoj prevari</h2>

      <p data-sr="Korisnici naviknu da dobijaju obaveštenja o dostavi u porukama; lažni profil može imati sliku kamiona ili kurirske firme." data-en="Users are used to delivery notices in messages; the fake profile may show a truck or courier brand image.">Korisnici naviknu da dobijaju obaveštenja o dostavi u porukama; lažni profil može imati sliku kamiona ili kurirske firme.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Tipični elementi poruke" data-en="Typical message elements">Tipični elementi poruke</div>
          <ul class="bullets">
            <li data-sr="Paket čeka skladište 24 sata, pa se vraća pošiljaocu." data-en="Package waits at the warehouse 24 hours, then returns to sender.">Paket čeka skladište 24 sata, pa se vraća pošiljaocu.</li>
            <li data-sr="Link ka carinskoj stranici ili formi za adresu." data-en="Link to a customs page or address form.">Link ka carinskoj stranici ili formi za adresu.</li>
            <li data-sr="Mala suma koja deluje prihvatljivo." data-en="A small amount that feels acceptable.">Mala suma koja deluje prihvatljivo.</li>
            <li data-sr="Zahtev za broj kartice radi rezervacije isporuke." data-en="Request for card number to reserve delivery.">Zahtev za broj kartice radi rezervacije isporuke.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Cilj" data-en="Goal">Cilj</div>
          <ul class="bullets">
            <li data-sr="Brza uplata pre nego što proverite pravu pošiljku." data-en="Fast payment before you verify the real shipment.">Brza uplata pre nego što proverite pravu pošiljku.</li>
            <li data-sr="Prikupljanje ličnih podataka za druge prevare." data-en="Collecting personal data for other scams.">Prikupljanje ličnih podataka za druge prevare.</li>
            <li data-sr="Instalacija aplikacije ili APK pod izgovorom praćenja." data-en="Installing an app or APK under a tracking pretext.">Instalacija aplikacije ili APK pod izgovorom praćenja.</li>
            <li data-sr="Daljnji poziv operatera radi dodatnog pritiska." data-en="Further operator calls for extra pressure.">Daljnji poziv operatera radi dodatnog pritiska.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching).">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Rok od 24 sata je namenjen da spreči proveru." data-en="The 24 hour deadline is meant to block verification.">Rok od 24 sata je namenjen da spreči proveru.</p>
      <article class="phase ">
        <h3 class="phase-title" data-sr="Faza 1 — Ulaz: Viber poruka o paketu" data-en="Phase 1 — Entry: Viber message about a package">Faza 1 — Ulaz: Viber poruka o paketu</h3>
        <p data-sr="Stiže obaveštenje sa linkom ili traženjem da potvrdite adresu i broj telefona." data-en="A notice arrives with a link or a request to confirm address and phone.">Stiže obaveštenje sa linkom ili traženjem da potvrdite adresu i broj telefona.</p>
        <p data-sr="Pošiljalac može biti nepoznat broj ili kompromitovan kontakt." data-en="The sender may be an unknown number or a compromised contact.">Pošiljalac može biti nepoznat broj ili kompromitovan kontakt.</p>
        <ul class="bullets">
            <li data-sr="Broj pošiljke deluje nasumično ili se ponavlja kod više ljudi." data-en="The tracking number looks random or repeats for many people.">Broj pošiljke deluje nasumično ili se ponavlja kod više ljudi.</li>
            <li data-sr="Ime pošiljaoca je generičko." data-en="The sender name is generic.">Ime pošiljaoca je generičko.</li>
            <li data-sr="Link nije na domenu prave kurirske firme." data-en="The link is not on the real courier domain.">Link nije na domenu prave kurirske firme.</li>
            <li data-sr="Pritisak da platite pre nego što otvorite sajt prodavnice gde ste naručili." data-en="Pressure to pay before you open the store site where you ordered.">Pritisak da platite pre nego što otvorite sajt prodavnice gde ste naručili.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta poveruje da je poruka povezana sa pravom porudžbinom." data-en="<strong>Threshold:</strong> the target believes the message ties to a real order."><strong>Prag faze:</strong> meta poveruje da je poruka povezana sa pravom porudžbinom.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Lažna stranica ili forma" data-en="Phase 2 — Fake page or form">Faza 2 — Lažna stranica ili forma</h3>
        <p data-sr="Forma traži punu adresu, email i često karticu za verifikaciju adrese." data-en="The form asks full address, email, and often a card to verify the address.">Forma traži punu adresu, email i često karticu za verifikaciju adrese.</p>
        <ul class="bullets">
            <li data-sr="Cena se menja ako zatvorite stranicu i ponovo otvorite." data-en="The price changes if you close and reopen the page.">Cena se menja ako zatvorite stranicu i ponovo otvorite.</li>
            <li data-sr="Traži se još jedna mala naknada posle prve." data-en="Another small fee is asked after the first.">Traži se još jedna mala naknada posle prve.</li>
            <li data-sr="Nema jasnog PIB-a ili adrese firme u podnožju." data-en="No clear tax ID or company address in the footer.">Nema jasnog PIB-a ili adrese firme u podnožju.</li>
            <li data-sr="Preusmeravanje na plaćanje preko nepoznatog procesora." data-en="Redirect to pay through an unknown processor.">Preusmeravanje na plaćanje preko nepoznatog procesora.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
            <li><a href="parcel-interception-handoff-scam.html" data-sr="Preotimanje paketa" data-en="Parcel interception handoff scam">Preotimanje paketa</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik unese podatke ili započne uplatu." data-en="<strong>Threshold:</strong> the user enters data or starts a payment."><strong>Prag faze:</strong> korisnik unese podatke ili započne uplatu.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Prag: uplata ili OTP" data-en="Phase 3 — Threshold: payment or OTP">Faza 3 — Prag: uplata ili OTP</h3>
        <p data-sr="Novac odlazi na račun fizičkog lica ili preko uplatnice sa sumnjivim pozivom na broj." data-en="Money goes to a personal account or a slip with a suspicious payment reference.">Novac odlazi na račun fizičkog lica ili preko uplatnice sa sumnjivim pozivom na broj.</p>
        <p data-sr="Kartica se može zadužiti više puta uz objašnjenje greške sistema." data-en="The card may be charged multiple times with a system error excuse.">Kartica se može zadužiti više puta uz objašnjenje greške sistema.</p>
        <ul class="bullets">
            <li data-sr="Traži se OTP iz SMS-a da bi se potvrdila isporuka." data-en="An SMS OTP is asked to confirm delivery.">Traži se OTP iz SMS-a da bi se potvrdila isporuka.</li>
            <li data-sr="Lažni operater na pozivu insistira na brzini." data-en="A fake operator on the phone insists on speed.">Lažni operater na pozivu insistira na brzini.</li>
            <li data-sr="Uplata u stranoj valuti ili na strani IBAN." data-en="Payment in foreign currency or to a foreign IBAN.">Uplata u stranoj valuti ili na strani IBAN.</li>
            <li data-sr="QR za plaćanje koji ne pokazuje primaoca pre skeniranja." data-en="A pay QR that does not show the recipient before scan.">QR za plaćanje koji ne pokazuje primaoca pre skeniranja.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> novac ili kod napuste vašu kontrolu." data-en="<strong>Threshold:</strong> money or a code leaves your control."><strong>Prag faze:</strong> novac ili kod napuste vašu kontrolu.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Zloupotreba podataka ili ponovni kontakt" data-en="Phase 4 — Data abuse or repeat contact">Faza 4 — Zloupotreba podataka ili ponovni kontakt</h3>
        <p data-sr="Podaci se koriste za druge fišinge; ista žrtva dobija novu poruku sa drugim brojem pošiljke." data-en="Data fuels other phishing; the same victim gets a new message with another tracking number.">Podaci se koriste za druge fišinge; ista žrtva dobija novu poruku sa drugim brojem pošiljke.</p>
        <ul class="bullets">
            <li data-sr="Ponovno traženje doplate jer carina nije bila dovoljna." data-en="Another fee because customs was not enough.">Ponovno traženje doplate jer carina nije bila dovoljna.</li>
            <li data-sr="Lažni status paketa u četu i dalje iako ste platili." data-en="Fake package status in chat continues even after you paid.">Lažni status paketa u četu i dalje iako ste platili.</li>
            <li data-sr="Širenje broja žrtve drugim prevarantima." data-en="Selling the victim number to other fraudsters.">Širenje broja žrtve drugim prevarantima.</li>
            <li data-sr="Pozivi nadzora sa drugim glasom." data-en="Supervisor calls with another voice.">Pozivi nadzora sa drugim glasom.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="viber-bank-impersonation-scam.html" data-sr="Viber: lažna banka" data-en="Viber: bank impersonation scam">Viber: lažna banka</a></li>
            <li><a href="fake-call-scam.html" data-sr="Lažni pozivi" data-en="Fake calls">Lažni pozivi</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> žrtva plati više puta ili prijavi još osetljivih podataka." data-en="<strong>Threshold:</strong> the victim pays multiple times or gives more sensitive data."><strong>Prag faze:</strong> žrtva plati više puta ili prijavi još osetljivih podataka.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Otkrivanje" data-en="Phase 5 — Discovery">Faza 5 — Otkrivanje</h3>
        <p data-sr="Prava kurirska služba nema evidenciju uplate ili paket stigne bez ikakve doplate." data-en="The real courier has no payment record or the package arrives with no extra fee.">Prava kurirska služba nema evidenciju uplate ili paket stigne bez ikakve doplate.</p>
        <ul class="bullets">
            <li data-sr="Prodavac potvrdi da nema carinskog problema za vašu porudžbinu." data-en="The seller confirms there is no customs issue for your order.">Prodavac potvrdi da nema carinskog problema za vašu porudžbinu.</li>
            <li data-sr="Broj pošiljke ne postoji u zvaničnom trackeru." data-en="The tracking number does not exist in the official tracker.">Broj pošiljke ne postoji u zvaničnom trackeru.</li>
            <li data-sr="Čet prestane da odgovara posle uplate." data-en="The chat stops replying after payment.">Čet prestane da odgovara posle uplate.</li>
            <li data-sr="Banka upozori na sumnjivu transakciju." data-en="The bank warns about a suspicious transaction.">Banka upozori na sumnjivu transakciju.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> žrtva poveže uplatu sa lažnom porukom." data-en="<strong>Threshold:</strong> the victim ties the payment to the fake message."><strong>Prag faze:</strong> žrtva poveže uplatu sa lažnom porukom.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Sanacija" data-en="Phase 6 — Remediation">Faza 6 — Sanacija</h3>
        <p data-sr="Kontaktirajte banku, tražite blokadu daljih naplata, prijavite prevaru, sačuvajte čet i URL, blokirajte broj." data-en="Contact the bank, ask to block further charges, report fraud, save chat and URL, block the number.">Kontaktirajte banku, tražite blokadu daljih naplata, prijavite prevaru, sačuvajte čet i URL, blokirajte broj.</p>
        <p data-sr="Ubuduće proveravajte isključivo na sajtu kurira ručno ukucanom adresom." data-en="Going forward, check only on the courier site with a typed address.">Ubuduće proveravajte isključivo na sajtu kurira ručno ukucanom adresom.</p>
        <ul class="bullets">
            <li data-sr="Prijavite lažni nalog Viberu." data-en="Report the fake account to Viber.">Prijavite lažni nalog Viberu.</li>
            <li data-sr="Obavestite prodavca ako je porudžbina u toku." data-en="Notify the seller if an order is in progress.">Obavestite prodavca ako je porudžbina u toku.</li>
            <li data-sr="Promenite lozinku prodavnice ako ste je uneli na lažnoj stranici." data-en="Change the store password if you entered it on a fake page.">Promenite lozinku prodavnice ako ste je uneli na lažnoj stranici.</li>
            <li data-sr="Pratite izvod još nekoliko nedelja." data-en="Watch the statement for several more weeks.">Pratite izvod još nekoliko nedelja.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="smishing.html" data-sr="Smišing" data-en="Smishing">Smišing</a></li>
            <li><a href="impersonation-scam.html" data-sr="Lažno predstavljanje" data-en="Impersonation scam">Lažno predstavljanje</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> korisnik zatvori finansijski kanal i dokumentuje prevaru." data-en="<strong>Threshold:</strong> the user closes the financial channel and documents the fraud."><strong>Prag faze:</strong> korisnik zatvori finansijski kanal i dokumentuje prevaru.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
<ul class="bullets">
            <li data-sr="Doplata pre isporuke preko Vibera od nepoznatog broja." data-en="Pre-delivery extra payment over Viber from an unknown number.">Doplata pre isporuke preko Vibera od nepoznatog broja.</li>
            <li data-sr="Link koji nije na domenu kurira koji poznajete." data-en="A link not on a courier domain you know.">Link koji nije na domenu kurira koji poznajete.</li>
            <li data-sr="Traženje kartice umesto uobičajenog plaćanja pouzećem ili u prodavnici." data-en="Asking for a card instead of normal cash on delivery or store pay.">Traženje kartice umesto uobičajenog plaćanja pouzećem ili u prodavnici.</li>
            <li data-sr="Rok od nekoliko sati da platite carinu." data-en="A few-hour deadline to pay customs.">Rok od nekoliko sati da platite carinu.</li>
            <li data-sr="Gramatičke greške u imenu kurirske firme." data-en="Grammar errors in the courier company name.">Gramatičke greške u imenu kurirske firme.</li>
            <li data-sr="Zahtev za instalaciju aplikacije radi praćenja." data-en="Request to install an app for tracking.">Zahtev za instalaciju aplikacije radi praćenja.</li>
            <li data-sr="Isti tekst poruke stiže od više brojeva." data-en="The same message text comes from multiple numbers.">Isti tekst poruke stiže od više brojeva.</li>
            <li data-sr="QR za uplatu primaocu koji nije kurir." data-en="A pay QR to a recipient that is not the courier.">QR za uplatu primaocu koji nije kurir.</li>
            <li data-sr="Tvrdnja da će paket biti uništen ako ne platite." data-en="A claim the package will be destroyed if you do not pay.">Tvrdnja da će paket biti uništen ako ne platite.</li>
            <li data-sr="Molba da ne kontaktirate prodavca da ne usporite proces." data-en="A request not to contact the seller to avoid delays.">Molba da ne kontaktirate prodavca da ne usporite proces.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
<ol class="steps">
        <li data-sr="Proverite status pošiljke na zvaničnom sajtu kurira ručno ukucanom linkom." data-en="Check shipment status on the courier official site with a typed link.">Proverite status pošiljke na zvaničnom sajtu kurira ručno ukucanom linkom.</li>
        <li data-sr="Pitajte prodavca ili pošiljaoca da li očekuju doplatu." data-en="Ask the seller or sender if an extra fee is expected.">Pitajte prodavca ili pošiljaoca da li očekuju doplatu.</li>
        <li data-sr="Ne platite na račun fizičkog lica bez provere." data-en="Do not pay to a personal account without verification.">Ne platite na račun fizičkog lica bez provere.</li>
        <li data-sr="Ne unosite OTP za isporuku ako niste sigurni u primaoca." data-en="Do not enter OTP for delivery if you are unsure of the recipient.">Ne unosite OTP za isporuku ako niste sigurni u primaoca.</li>
        <li data-sr="Uporedite broj pošiljke sa mejlom ili nalogom u prodavnici." data-en="Compare the tracking number with email or store order.">Uporedite broj pošiljke sa mejlom ili nalogom u prodavnici.</li>
        <li data-sr="Blokirajte broj i prijavite ga ako je očigledna prevara." data-en="Block and report the number if it is clearly fraud.">Blokirajte broj i prijavite ga ako je očigledna prevara.</li>
        <li data-sr="Ne šaljite selfie sa dokumentom radi carine." data-en="Do not send an ID selfie for customs.">Ne šaljite selfie sa dokumentom radi carine.</li>
        <li data-sr="Sačekajte jedan dan pre uplate ako nije životna stvar." data-en="Wait one day before paying if it is not a life-safety issue.">Sačekajte jedan dan pre uplate ako nije životna stvar.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
<ul class="bullets">
            <li data-sr="Da li sam uopšte naručio nešto što se može slati kao paket?" data-en="Did I order anything that could ship as a package?">Da li sam uopšte naručio nešto što se može slati kao paket?</li>
            <li data-sr="Da li broj pošiljke postoji na zvaničnom sajtu?" data-en="Does the tracking number exist on the official site?">Da li broj pošiljke postoji na zvaničnom sajtu?</li>
            <li data-sr="Da li je domen linka isti kao na računu kurira?" data-en="Is the link domain the same as on the courier invoice?">Da li je domen linka isti kao na računu kurira?</li>
            <li data-sr="Da li prodavac potvrđuje dodatnu naplatu?" data-en="Does the seller confirm an extra charge?">Da li prodavac potvrđuje dodatnu naplatu?</li>
            <li data-sr="Da li je uplata na ime fizičkog lica?" data-en="Is payment to an individual name?">Da li je uplata na ime fizičkog lica?</li>
            <li data-sr="Da li me tera da ne zovem kurira zvaničnim brojem?" data-en="Are they pushing me not to call the courier official number?">Da li me tera da ne zovem kurira zvaničnim brojem?</li>
            <li data-sr="Da li je cena sumnjivo mala za carinu?" data-en="Is the fee suspiciously small for customs?">Da li je cena sumnjivo mala za carinu?</li>
            <li data-sr="Da li je isti scenario stizao i ranije?" data-en="Did the same scenario arrive before?">Da li je isti scenario stizao i ranije?</li>
            <li data-sr="Da li bih platio ovako u službenoj pošti?" data-en="Would I pay this way at the official post office?">Da li bih platio ovako u službenoj pošti?</li>
            <li data-sr="Da li mogu da odem lično u ekspozitur ako je gradska dostava?" data-en="Can I visit a branch in person if it is local delivery?">Da li mogu da odem lično u ekspozitur ako je gradska dostava?</li>
            <li data-sr="Da li je poruka forward iz grupe?" data-en="Is the message a forward from a group?">Da li je poruka forward iz grupe?</li>
            <li data-sr="Da li bih trebalo da prijavim broj?" data-en="Should I report the number?">Da li bih trebalo da prijavim broj?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
<ol class="steps">
        <li data-sr="Ne plaćajte; proverite pravu pošiljku na zvaničnom sajtu." data-en="Do not pay; verify the real shipment on the official site.">Ne plaćajte; proverite pravu pošiljku na zvaničnom sajtu.</li>
        <li data-sr="Kontaktirajte prodavca drugim kanalom." data-en="Contact the seller on another channel.">Kontaktirajte prodavca drugim kanalom.</li>
        <li data-sr="Ako ste platili, odmah pozovite banku." data-en="If you paid, call the bank immediately.">Ako ste platili, odmah pozovite banku.</li>
        <li data-sr="Blokirajte broj i prijavite Viberu." data-en="Block the number and report to Viber.">Blokirajte broj i prijavite Viberu.</li>
        <li data-sr="Sačuvajte čet i link kao dokaz." data-en="Save the chat and link as evidence.">Sačuvajte čet i link kao dokaz.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si platio preko linka ili uplatnice?" data-en="Did you pay via link or payment slip?">Da li si platio preko linka ili uplatnice?</li>
            <li data-sr="Da li si uneo broj kartice?" data-en="Did you enter a card number?">Da li si uneo broj kartice?</li>
            <li data-sr="Šta piše na zvaničnom sajtu kurira za tvoj broj?" data-en="What does the courier official site say for your number?">Šta piše na zvaničnom sajtu kurira za tvoj broj?</li>
            <li data-sr="Da li si proverio kod prodavca?" data-en="Did you check with the seller?">Da li si proverio kod prodavca?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Prava carina ne rešava se brzim linkom iz Vibera." data-en="Real customs is not fixed with a fast Viber link.">Prava carina ne rešava se brzim linkom iz Vibera.</li>
            <li data-sr="Hajde da ukucamo sajt kurira ručno i unesemo broj pošiljke." data-en="Let us type the courier site manually and enter the tracking number.">Hajde da ukucamo sajt kurira ručno i unesemo broj pošiljke.</li>
            <li data-sr="Ako prodavac kaže da nema doplate, ne plaćamo." data-en="If the seller says there is no extra fee, we do not pay.">Ako prodavac kaže da nema doplate, ne plaćamo.</li>
            <li data-sr="Hitnost je često znak prevare kod paketa." data-en="Urgency is often a scam sign with packages.">Hitnost je često znak prevare kod paketa.</li>
          </ul>
        </div>
      </div>
    </section>
`
};
