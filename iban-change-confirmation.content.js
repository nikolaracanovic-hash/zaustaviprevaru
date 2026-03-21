window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["iban-change-confirmation"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: lažna potvrda promene IBAN-a" data-en="Introduction: fake IBAN change confirmation">Uvod: lažna potvrda promene IBAN-a</h2>
      <p data-sr="Napadač šalje dokument ili imejl koji izgleda kao zvanična potvrda da je partner promenio bankarske podatke. Cilj je da finansije potpišu, odgovore ili plate na novi IBAN bez telefonske provere na poznatom broju." data-en="The attacker sends a document or email that looks like official confirmation that a counterparty changed bank details. The goal is for finance to sign, reply, or pay to a new IBAN without phone verification on a known number.">Napadač šalje dokument ili imejl koji izgleda kao zvanična potvrda da je partner promenio bankarske podatke. Cilj je da finansije potpišu, odgovore ili plate na novi IBAN bez telefonske provere na poznatom broju.</p>
      <p data-sr="Obrazac je blizak pravom: logo, potpis, referenca na ugovor. Jedina kritična razlika je novi račun koji pripada napadaču." data-en="The layout is close to the real thing: logo, signature, contract reference. The only critical difference is a new account that belongs to the attacker.">Obrazac je blizak pravom: logo, potpis, referenca na ugovor. Jedina kritična razlika je novi račun koji pripada napadaču.</p>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching)">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Faze su operativni tok: šta meta vidi, šta se traži, gde se pali grananje." data-en="Phases are an operational flow: what the target sees, what is demanded, where branching fires.">Faze su operativni tok: šta meta vidi, šta se traži, gde se pali grananje.</p>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Prikupljanje konteksta o isplatama" data-en="Phase 1 — Gathering payout context">Faza 1 — Prikupljanje konteksta o isplatama</h3>
        <p data-sr="Napadač identifikuje dobavljača, klijenta ili internu osobu koja odobrava uplate. Prati datum fakture, iznos i ton komunikacije da bi sledeći korak delovao uobičajeno." data-en="The attacker identifies a supplier, client, or internal person who approves payments. They track invoice timing, amount, and communication tone so the next step feels routine.">Napadač identifikuje dobavljača, klijenta ili internu osobu koja odobrava uplate. Prati datum fakture, iznos i ton komunikacije da bi sledeći korak delovao uobičajeno.</p>
        <p data-sr="Javno dostupni podaci ili curenje imejla pomažu da se približi pravom formatu potvrde." data-en="Public data or email leakage helps mimic the real confirmation format.">Javno dostupni podaci ili curenje imejla pomažu da se približi pravom formatu potvrde.</p>
        <ul class="bullets">
          <li data-sr="Meta vidi da postoji redovni obrazac isplata ka istom partneru." data-en="The target sees a regular payout pattern to the same counterparty.">Meta vidi da postoji redovni obrazac isplata ka istom partneru.</li>
          <li data-sr="U komunikaciji se pojavljuju reference na konkretan ugovor ili broj fakture." data-en="Messages reference a specific contract or invoice number.">U komunikaciji se pojavljuju reference na konkretan ugovor ili broj fakture.</li>
          <li data-sr="Napadač bira termin blizu uobičajenog datuma plaćanja." data-en="The attacker picks a date near the usual payment date.">Napadač bira termin blizu uobičajenog datuma plaćanja.</li>
          <li data-sr="Ton poruke je poslovno neutralan, bez očiglednih jezičkih grešaka." data-en="The message tone is professionally neutral, without obvious language errors.">Ton poruke je poslovno neutralan, bez očiglednih jezičkih grešaka.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> napadač zna ko plaća, kome i u kom formatu dokumenti stižu." data-en="<strong>Phase threshold:</strong> attacker knows who pays, to whom, and in what format documents arrive."><strong>Prag faze:</strong> napadač zna ko plaća, kome i u kom formatu dokumenti stižu.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Izrada lažne potvrde i kanala isporuke" data-en="Phase 2 — Crafting fake confirmation and delivery channel">Faza 2 — Izrada lažne potvrde i kanala isporuke</h3>
        <p data-sr="Pravi se PDF ili imejl sa potvrdom promene IBAN-a. Kanal može biti kompromitovan nalog partnera, lookalike domen ili odgovor u postojećem nizu koji je napadač umetnuo." data-en="A PDF or email is created confirming the IBAN change. The channel may be a compromised partner account, a lookalike domain, or a reply injected into an existing thread.">Pravi se PDF ili imejl sa potvrdom promene IBAN-a. Kanal može biti kompromitovan nalog partnera, lookalike domen ili odgovor u postojećem nizu koji je napadač umetnuo.</p>
        <p data-sr="Dokument često traži kratku e-mail potvrdu da ste primili promenu, što napadač koristi kao lažni trag saglasnosti." data-en="The document often asks for a short email acknowledgment of the change, which the attacker uses as a false consent trail.">Dokument često traži kratku e-mail potvrdu da ste primili promenu, što napadač koristi kao lažni trag saglasnosti.</p>
        <ul class="bullets">
          <li data-sr="Signal: PDF potpis izgleda kao slika ili sken, ne kao kvalifikovani elektronski potpis." data-en="signal: the PDF signature looks like an image or scan, not a qualified e-signature.">Signal: PDF potpis izgleda kao slika ili sken, ne kao kvalifikovani elektronski potpis.</li>
          <li data-sr="Signal: domen pošiljaoca je vizuelno blizak pravom ali se razlikuje jednim slovom." data-en="signal: sender domain is visually close to the real one but differs by one character.">Signal: domen pošiljaoca je vizuelno blizak pravom ali se razlikuje jednim slovom.</li>
          <li data-sr="Signal: traži se isključivo imejl potvrda bez telefonskog kontakta." data-en="signal: email-only confirmation is requested with no phone contact.">Signal: traži se isključivo imejl potvrda bez telefonskog kontakta.</li>
          <li data-sr="Signal: u prilogu je uputstvo za plaćanje sa novim IBAN-om istog dana kada stiže potvrda." data-en="signal: payment instructions with a new IBAN arrive the same day as the confirmation.">Signal: u prilogu je uputstvo za plaćanje sa novim IBAN-om istog dana kada stiže potvrda.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="vendor-email-compromise.html" data-sr="Kompromitovanje imejla dobavljača" data-en="Vendor email compromise">Kompromitovanje imejla dobavljača</a></li>
            <li><a href="invoice-fraud.html" data-sr="Prevara sa fakturama" data-en="Invoice fraud">Prevara sa fakturama</a></li>
            <li><a href="business-email-compromise.html" data-sr="Kompromitovanje poslovnog imejla (BEC)" data-en="Business email compromise (BEC)">Kompromitovanje poslovnog imejla (BEC)</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> lažna potvrda i isporuka su spremni; meta još nije platila." data-en="<strong>Phase threshold:</strong> fake confirmation and delivery are ready; the target has not yet paid."><strong>Prag faze:</strong> lažna potvrda i isporuka su spremni; meta još nije platila.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Pritisak da se potvrdi ili plati brzo" data-en="Phase 3 — Pressure to confirm or pay quickly">Faza 3 — Pritisak da se potvrdi ili plati brzo</h3>
        <p data-sr="Sledeća poruka naglašava rok, audit ili isporuku koja čeka uplatu. Cilj je sprečiti duboku proveru IBAN-a u odnosu na prethodnu fakturu." data-en="The next message stresses a deadline, audit, or delivery waiting on payment. The goal is to block deep IBAN checks against the previous invoice.">Sledeća poruka naglašava rok, audit ili isporuku koja čeka uplatu. Cilj je sprečiti duboku proveru IBAN-a u odnosu na prethodnu fakturu.</p>
        <p data-sr="Ponekad se spominje da je stari račun tehnički zatvoren kako bi se izbegao poziv na poznati broj." data-en="Sometimes the old account is claimed to be technically closed to discourage calling the known number.">Ponekad se spominje da je stari račun tehnički zatvoren kako bi se izbegao poziv na poznati broj.</p>
        <ul class="bullets">
          <li data-sr="Signal: fraza da je potvrda potrebna danas da bi se izbegle kamate." data-en="signal: wording that confirmation is needed today to avoid penalties.">Signal: fraza da je potvrda potrebna danas da bi se izbegle kamate.</li>
          <li data-sr="Signal: traži se da se novi IBAN unese u ERP pre nego što knjigovodstvo završi proveru." data-en="signal: new IBAN must be entered in ERP before accounting finishes verification.">Signal: traži se da se novi IBAN unese u ERP pre nego što knjigovodstvo završi proveru.</li>
          <li data-sr="Signal: isti kontakt odbija video ili telefon i insistira na imejlu." data-en="signal: the same contact refuses video or phone and insists on email.">Signal: isti kontakt odbija video ili telefon i insistira na imejlu.</li>
          <li data-sr="Signal: ponavlja se zahtev za kratkim odgovorom samo rečju potvrđujem." data-en="signal: repeated request for a one-word reply confirming.">Signal: ponavlja se zahtev za kratkim odgovorom samo rečju potvrđujem.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="ceo-fraud.html" data-sr="CEO prevara" data-en="CEO fraud">CEO prevara</a></li>
            <li><a href="payment-diversion.html" data-sr="Preusmeravanje plaćanja" data-en="Payment diversion">Preusmeravanje plaćanja</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta je spremna da preskoči telefonsku verifikaciju zbog roka." data-en="<strong>Phase threshold:</strong> target is ready to skip phone verification due to deadline pressure."><strong>Prag faze:</strong> meta je spremna da preskoči telefonsku verifikaciju zbog roka.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Uplata ili zvanična evidencija promene" data-en="Phase 4 — Payment or formal record of change">Faza 4 — Uplata ili zvanična evidencija promene</h3>
        <p data-sr="Firma unosi novi IBAN u sistem i izvrši uplatu, ili šalje imejl koji se kasnije tumači kao saglasnost na novi račun." data-en="The company enters the new IBAN and pays, or sends an email later interpreted as consent to the new account.">Firma unosi novi IBAN u sistem i izvrši uplatu, ili šalje imejl koji se kasnije tumači kao saglasnost na novi račun.</p>
        <p data-sr="Novac odlazi na račun napadača i brzo se povlači ili prebacuje." data-en="Funds go to the attacker's account and are quickly withdrawn or moved.">Novac odlazi na račun napadača i brzo se povlači ili prebacuje.</p>
        <ul class="bullets">
          <li data-sr="Signal: uplata je tipa hitnog naloga bez dodatnog odobrenja za novog primaoca." data-en="signal: payment is urgent transfer type without extra approval for new beneficiary.">Signal: uplata je tipa hitnog naloga bez dodatnog odobrenja za novog primaoca.</li>
          <li data-sr="Signal: u opisu uplate stoji ista referenca fakture kao ranije, ali je IBAN drugačiji." data-en="signal: payment reference matches earlier invoice text but IBAN differs.">Signal: u opisu uplate stoji ista referenca fakture kao ranije, ali je IBAN drugačiji.</li>
          <li data-sr="Signal: knjigovodstvo beleži potvrdu samo iz imejla, bez zapisa poziva." data-en="signal: accounting logs confirmation from email only, with no call record.">Signal: knjigovodstvo beleži potvrdu samo iz imejla, bez zapisa poziva.</li>
          <li data-sr="Signal: banka ne upozorava jer je uplata autorizovana od strane klijenta." data-en="signal: bank does not warn because the payment is client-authorized.">Signal: banka ne upozorava jer je uplata autorizovana od strane klijenta.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> novac je napustio račun firme i smatra se završenom transakcijom u sistemu." data-en="<strong>Phase threshold:</strong> money left the company account and is treated as completed in the system."><strong>Prag faze:</strong> novac je napustio račun firme i smatra se završenom transakcijom u sistemu.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Otkrivanje kada pravi partner reaguje" data-en="Phase 5 — Discovery when the real counterparty reacts">Faza 5 — Otkrivanje kada pravi partner reaguje</h3>
        <p data-sr="Pravi dobavljač ili klijent javlja da uplata nije stigla ili da nisu slali promenu računa. Uočava se neslaganje IBAN-a između potvrde i istorije." data-en="The real supplier or client reports non-payment or denies sending an account change. IBAN mismatch appears between confirmation and history.">Pravi dobavljač ili klijent javlja da uplata nije stigla ili da nisu slali promenu računa. Uočava se neslaganje IBAN-a između potvrde i istorije.</p>
        <p data-sr="Interni audit traži trag telefonske potvrde i često ga nema." data-en="Internal audit looks for phone confirmation evidence and often finds none.">Interni audit traži trag telefonske potvrde i često ga nema.</p>
        <ul class="bullets">
          <li data-sr="Signal: pravi partner potvrđuje da im nalog nije kompromitovan ali da lažni dokument kruži." data-en="signal: real partner confirms their account is not compromised but a fake document circulates.">Signal: pravi partner potvrđuje da im nalog nije kompromitovan ali da lažni dokument kruži.</li>
          <li data-sr="Signal: IT pronalazi pravilo preusmeravanja ili forward na imejlu." data-en="signal: IT finds a forwarding rule or redirect on email.">Signal: IT pronalazi pravilo preusmeravanja ili forward na imejlu.</li>
          <li data-sr="Signal: dva različita IBAN-a za istog korisnika u istom mesecu." data-en="signal: two different IBANs for the same counterparty in the same month.">Signal: dva različita IBAN-a za istog korisnika u istom mesecu.</li>
          <li data-sr="Signal: zaposleni se seća samo imejl potvrde, ne i razgovora." data-en="signal: employee remembers only email confirmation, not a conversation.">Signal: zaposleni se seća samo imejl potvrde, ne i razgovora.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> treća strana van lanca prevare potvrđuje da promena nije legitimna." data-en="<strong>Phase threshold:</strong> a third party outside the fraud chain confirms the change was not legitimate."><strong>Prag faze:</strong> treća strana van lanca prevare potvrđuje da promena nije legitimna.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Pokušaj povrata i sekundarni napadi" data-en="Phase 6 — Recovery attempts and secondary attacks">Faza 6 — Pokušaj povrata i sekundarni napadi</h3>
        <p data-sr="Banka pokreće postupak povraćaja ako je moguć, ali uspeh zavisi od brzine i koridora plaćanja." data-en="The bank starts a recall process if possible, but success depends on speed and payment rails.">Banka pokreće postupak povraćaja ako je moguć, ali uspeh zavisi od brzine i koridora plaćanja.</p>
        <p data-sr="Ponekad stiže ponuda lažnog agenta za povrat uz naknadu unapred, što je novi napad." data-en="Sometimes a fake recovery agent offers help for an upfront fee, which is a new attack.">Ponekad stiže ponuda lažnog agenta za povrat uz naknadu unapred, što je novi napad.</p>
        <ul class="bullets">
          <li data-sr="Signal: nepoznata firma zna tačan iznos i datum uplate bez vašeg prijavljivanja." data-en="signal: unknown firm knows exact amount and payment date without you reporting.">Signal: nepoznata firma zna tačan iznos i datum uplate bez vašeg prijavljivanja.</li>
          <li data-sr="Signal: traže procenat povrata pre bilo kakvog zvaničnog pisma banke." data-en="signal: percentage of recovery demanded before any official bank letter.">Signal: traže procenat povrata pre bilo kakvog zvaničnog pisma banke.</li>
          <li data-sr="Signal: kontakt traži poverljivost i da ne obaveštavate banku." data-en="signal: contact demands secrecy and asks you not to inform the bank.">Signal: kontakt traži poverljivost i da ne obaveštavate banku.</li>
          <li data-sr="Signal: plaćanje kriptovalutom ili darovnim karticama za forenzičku uslugu." data-en="signal: cryptocurrency or gift cards for forensic service.">Signal: plaćanje kriptovalutom ili darovnim karticama za forenzičku uslugu.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="recovery-scam.html" data-sr="Prevara povraćaja novca" data-en="Recovery scam">Prevara povraćaja novca</a></li>
            <li><a href="mandate-fraud.html" data-sr="Prevara sa nalozima za plaćanje" data-en="Mandate fraud">Prevara sa nalozima za plaćanje</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> žrtva je u modu brzog rešenja i sklona je drugom transferu." data-en="<strong>Phase threshold:</strong> victim seeks fast resolution and is prone to a second transfer."><strong>Prag faze:</strong> žrtva je u modu brzog rešenja i sklona je drugom transferu.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Potvrma promene IBAN-a stiže samo imejlom bez poziva na poznati broj iz ugovora." data-en="IBAN change confirmation arrives by email only, with no call to the contract-known number.">Potvrma promene IBAN-a stiže samo imejlom bez poziva na poznati broj iz ugovora.</li>
        <li data-sr="Domen pošiljaoca se razlikuje od domena koji partner koristi godinama." data-en="Sender domain differs from the domain the counterparty has used for years.">Domen pošiljaoca se razlikuje od domena koji partner koristi godinama.</li>
        <li data-sr="Traži se kratka imejl saglasnost jednom rečenicom bez dokumentacije." data-en="Brief one-sentence email consent is requested without documentation.">Traži se kratka imejl saglasnost jednom rečenicom bez dokumentacije.</li>
        <li data-sr="Novi IBAN je u drugoj zemlji ili banci bez poslovnog obrazloženja." data-en="New IBAN is in another country or bank with no business explanation.">Novi IBAN je u drugoj zemlji ili banci bez poslovnog obrazloženja.</li>
        <li data-sr="Rok je veštački kratak i poklapa se sa krajem meseca ili auditom." data-en="Deadline is artificially tight and aligns with month-end or audit.">Rok je veštački kratak i poklapa se sa krajem meseca ili auditom.</li>
        <li data-sr="PDF potpis izgleda kao slika ili kopirani pečat." data-en="PDF signature looks like an image or copied stamp.">PDF potpis izgleda kao slika ili kopirani pečat.</li>
        <li data-sr="Isti kontakt odbija da ponovi broj računa telefonom." data-en="The same contact refuses to repeat the account number by phone.">Isti kontakt odbija da ponovi broj računa telefonom.</li>
        <li data-sr="U nizu se pojavljuje odgovor koji ne odgovara stilu ranijih poruka partnera." data-en="A reply appears in the thread that does not match the partner's earlier style.">U nizu se pojavljuje odgovor koji ne odgovara stilu ranijih poruka partnera.</li>
        <li data-sr="U prilogu su uputstva za uplatu sa drugačijim imenom primaoca od naziva firme." data-en="Attachment payment instructions show a beneficiary name different from the company name.">U prilogu su uputstva za uplatu sa drugačijim imenom primaoca od naziva firme.</li>
        <li data-sr="Finansije su tretirale poruku kao rutinu bez drugog odobrenja." data-en="Finance treated the message as routine without secondary approval.">Finansije su tretirale poruku kao rutinu bez drugog odobrenja.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: brze provere pre promene IBAN-a" data-en="Checks: quick checks before changing an IBAN">Provere: brze provere pre promene IBAN-a</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Kanal i identitet" data-en="Channel and identity">Kanal i identitet</div>
          <ul class="bullets">
            <li data-sr="Uporedite domen sa poslednjim deset legitimnih imejlova od istog partnera." data-en="Compare the domain with the last ten legitimate emails from the same counterparty.">Uporedite domen sa poslednjim deset legitimnih imejlova od istog partnera.</li>
            <li data-sr="Pozovite partnera na broj iz ugovora, ne na broj iz potvrde." data-en="Call the counterparty on the contract number, not the number on the confirmation.">Pozovite partnera na broj iz ugovora, ne na broj iz potvrde.</li>
            <li data-sr="Zatražite da vam IBAN pročitaju naglas i uporedite sa PDF-om." data-en="Ask them to read the IBAN aloud and compare with the PDF.">Zatražite da vam IBAN pročitaju naglas i uporedite sa PDF-om.</li>
            <li data-sr="Proverite da li je potvrda potpisana istom osobom kao ranije oficijelne poruke." data-en="Check whether the confirmation is signed by the same person as earlier official messages.">Proverite da li je potvrda potpisana istom osobom kao ranije oficijelne poruke.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Dokumenti i banka" data-en="Documents and bank">Dokumenti i banka</div>
          <ul class="bullets">
            <li data-sr="Uporedite novi IBAN sa poslednjom fakturom istog partnera." data-en="Compare the new IBAN with the latest invoice from the same counterparty.">Uporedite novi IBAN sa poslednjom fakturom istog partnera.</li>
            <li data-sr="Zatražite od partnera sken potvrde iz banke o promeni, uz nezavisnu proveru u banci ako je moguće." data-en="Ask the counterparty for a bank letter on the change, with independent bank verification if possible.">Zatražite od partnera sken potvrde iz banke o promeni, uz nezavisnu proveru u banci ako je moguće.</li>
            <li data-sr="Pitajte svoju banku da li primaoc odgovara imenu iz ugovora." data-en="Ask your bank whether the beneficiary matches the contract name.">Pitajte svoju banku da li primaoc odgovara imenu iz ugovora.</li>
            <li data-sr="Uvedite pravilo da svaka promena IBAN-a ima drugo interno odobrenje." data-en="Introduce a rule that every IBAN change needs a second internal approval.">Uvedite pravilo da svaka promena IBAN-a ima drugo interno odobrenje.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Checklista" data-en="Checklist">Checklista</h2>
      <ul class="bullets">
        <li data-sr="Da li smo pozvali partnera na broj iz ugovora, a ne iz imejla?" data-en="Did we call the counterparty on the contract number, not from the email?">Da li smo pozvali partnera na broj iz ugovora, a ne iz imejla?</li>
        <li data-sr="Da li novi IBAN odgovara poslednjoj fakturi istog entiteta?" data-en="Does the new IBAN match the last invoice from the same entity?">Da li novi IBAN odgovara poslednjoj fakturi istog entiteta?</li>
        <li data-sr="Da li je domen pošiljaoca identičan prethodnim poslovnim porukama?" data-en="Is the sender domain identical to prior business messages?">Da li je domen pošiljaoca identičan prethodnim poslovnim porukama?</li>
        <li data-sr="Da li postoji drugo interno odobrenje za ovu promenu?" data-en="Is there a second internal approval for this change?">Da li postoji drugo interno odobrenje za ovu promenu?</li>
        <li data-sr="Da li je potvrda potpisana na način koji partner inače koristi?" data-en="Is the confirmation signed the way the counterparty normally signs?">Da li je potvrda potpisana na način koji partner inače koristi?</li>
        <li data-sr="Da li se ime primaoca uplate poklapa sa nazivom iz ugovora?" data-en="Does the payment beneficiary name match the contract?">Da li se ime primaoca uplate poklapa sa nazivom iz ugovora?</li>
        <li data-sr="Da li IT tim vidi sumnjive forward ili pravila na imejlu?" data-en="Does IT see suspicious forwards or rules on email?">Da li IT tim vidi sumnjive forward ili pravila na imejlu?</li>
        <li data-sr="Da li je rok za potvrdu neočekivano kratak?" data-en="Is the confirmation deadline unusually short?">Da li je rok za potvrdu neočekivano kratak?</li>
        <li data-sr="Da li banka vidi dolaznu kopiju potvrde od partnera?" data-en="Does the bank see an incoming copy of confirmation from the counterparty?">Da li banka vidi dolaznu kopiju potvrde od partnera?</li>
        <li data-sr="Da li postoji zapis razgovora u CRM-u ili tiketu?" data-en="Is there a call log in CRM or a ticket?">Da li postoji zapis razgovora u CRM-u ili tiketu?</li>
        <li data-sr="Da li je menjač IBAN-a ista uloga kao ranije u komunikaciji?" data-en="Is the IBAN changer the same role as before in communication?">Da li je menjač IBAN-a ista uloga kao ranije u komunikaciji?</li>
        <li data-sr="Da li smo sačuvali PDF i zaglavlja imejlova kao dokaz?" data-en="Did we preserve the PDF and email headers as evidence?">Da li smo sačuvali PDF i zaglavlja imejlova kao dokaz?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Zaustavite sve uplate na novi IBAN dok traje provera." data-en="Stop all payments to the new IBAN while verification runs.">Zaustavite sve uplate na novi IBAN dok traje provera.</li>
        <li data-sr="Pozovite partnera na broj iz ugovora i pitajte da li su oni poslali potvrdu." data-en="Call the counterparty on the contract number and ask whether they sent the confirmation.">Pozovite partnera na broj iz ugovora i pitajte da li su oni poslali potvrdu.</li>
        <li data-sr="Obavestite IT da pregleda forward pravila na imejl nalozima finansija." data-en="Ask IT to review forwarding rules on finance mailboxes.">Obavestite IT da pregleda forward pravila na imejl nalozima finansija.</li>
        <li data-sr="Ako je uplata već otišla, odmah kontaktirajte banku za povraćaj." data-en="If payment already left, contact the bank immediately for recall.">Ako je uplata već otišla, odmah kontaktirajte banku za povraćaj.</li>
        <li data-sr="Sačuvajte potvrdu, fakture i zaglavlja poruka kao dokaz." data-en="Preserve confirmation, invoices, and message headers as evidence.">Sačuvajte potvrdu, fakture i zaglavlja poruka kao dokaz.</li>
        <li data-sr="Prijavite incident internom bezbednošću i nadležnim telima prema proceduri." data-en="Report to internal security and authorities per procedure.">Prijavite incident internom bezbednošću i nadležnim telima prema proceduri.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Na koji ste tačno broj pozvali partnera kada ste proveravali IBAN?" data-en="Which exact number did you call when verifying the IBAN?">Na koji ste tačno broj pozvali partnera kada ste proveravali IBAN?</li>
            <li data-sr="Da li se novi IBAN razlikuje od poslednje fakture i za jednu cifru?" data-en="Does the new IBAN differ from the last invoice by even one digit?">Da li se novi IBAN razlikuje od poslednje fakture i za jednu cifru?</li>
            <li data-sr="Ko je interno odobrio promenu bez drugog para očiju?" data-en="Who internally approved the change without a second pair of eyes?">Ko je interno odobrio promenu bez drugog para očiju?</li>
            <li data-sr="Da li imamo zapis poziva u CRM-u ili tiketu?" data-en="Do we have a call record in CRM or a ticket?">Da li imamo zapis poziva u CRM-u ili tiketu?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Hajde da potvrdimo IBAN pozivom na ugovorni broj pre bilo kakve uplate." data-en="Let's confirm the IBAN by calling the contract number before any payment.">Hajde da potvrdimo IBAN pozivom na ugovorni broj pre bilo kakve uplate.</li>
            <li data-sr="Ne šaljemo novac dok druga osoba ne sagleda isti dokument." data-en="We do not send money until a second person reviews the same document.">Ne šaljemo novac dok druga osoba ne sagleda isti dokument.</li>
            <li data-sr="Sačuvaćemo zaglavlja imejlova pre nego što IT pregleda pravila." data-en="We will save email headers before IT reviews the rules.">Sačuvaćemo zaglavlja imejlova pre nego što IT pregleda pravila.</li>
            <li data-sr="Banka može pokušati povraćaj odmah, zato je vreme kritično." data-en="The bank may attempt recall immediately, so time is critical.">Banka može pokušati povraćaj odmah, zato je vreme kritično.</li>
          </ul>
        </div>
      </div>
    </section>
`
};
