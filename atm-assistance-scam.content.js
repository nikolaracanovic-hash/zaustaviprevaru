window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["atm-assistance-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
      <p data-sr="Razlika od zvanične podrške je što se sve dešava na licu mesta bez proverljivog identiteta." data-en="Fake ATM assistance includes convincing guidance not from the bank: it steers you to transfer, changes menu language to confuse, or asks for codes for security.">Razlika od zvanične podrške je što se sve dešava na licu mesta bez proverljivog identiteta.</p>
      <p data-sr="Cilj je praznjenje računa ili prenos na tuđi nalog." data-en="It often overlaps with fake bank or technical service impersonation.">Cilj je praznjenje računa ili prenos na tuđi nalog.</p>
      <div class="callout" data-sr="<strong>Model:</strong> kontakt → lažno uputstvo uz bankomat → pogrešan meni ili iznos → transfer ili podizanje u korist prevaranta." data-en="<strong>Model:</strong> contact → fake guidance at ATM → wrong menu or amount → transfer or withdrawal for the fraudster."><strong>Model:</strong> kontakt → lažno uputstvo uz bankomat → pogrešan meni ili iznos → transfer ili podizanje u korist prevaranta.</div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)" data-en="Timeline (phases + evolutions)">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Otvaranje razgovora uz bankomat" data-en="Phase 1 — Opening conversation at the ATM">Faza 1 — Otvaranje razgovora uz bankomat</h3>
        <p data-sr="Cilj je da prihvatite uputstvo koje nije na ekranu banke." data-en="A stranger uses a friendly tone, an unchecked uniform, or a system block story.">Cilj je da prihvatite uputstvo koje nije na ekranu banke.</p>
        <ul class="bullets">
          <li data-sr="signal: tvrdnja da su poslati od banke bez imena i ID broja koji možete potvrditi." data-en="signal: claim to be sent by the bank without a name and ID you can verify.">signal: tvrdnja da su poslati od banke bez imena i ID broja koji možete potvrditi.</li>
          <li data-sr="signal: poziv na brzinu pre nego što završite svoju nameru." data-en="signal: push for speed before you finish your intent.">signal: poziv na brzinu pre nego što završite svoju nameru.</li>
          <li data-sr="signal: traže da pređete na engleski ili drugi jezik jer meni kvari." data-en="signal: ask you to switch language because the menu is wrong.">signal: traže da pređete na engleski ili drugi jezik jer meni kvari.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> zvanična podrška ne dolazi kao slučajni prolaznik uz bankomat." data-en="<strong>Threshold:</strong> official support does not arrive as a random passer-by at the ATM."><strong>Prag faze:</strong> zvanična podrška ne dolazi kao slučajni prolaznik uz bankomat.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Vođenje kroz meni" data-en="Phase 2 — Menu steering">Faza 2 — Vođenje kroz meni</h3>
        <p data-sr="Ekran može izgledati legitimno ali putanja nije ona koju želite." data-en="Step by step they steer options that lead to transfer, limit change, or unblock that needs money.">Ekran može izgledati legitimno ali putanja nije ona koju želite.</p>
        <ul class="bullets">
          <li data-sr="signal: instrukcije se ne poklapaju sa uputstvima u aplikaciji banke." data-en="signal: instructions do not match the bank app guidance.">signal: instrukcije se ne poklapaju sa uputstvima u aplikaciji banke.</li>
          <li data-sr="signal: traže da unesete broj računa koji vam oni diktiraju." data-en="signal: they ask you to enter an account number they dictate.">signal: traže da unesete broj računa koji vam oni diktiraju.</li>
          <li data-sr="signal: iznos na ekranu raste između koraka." data-en="signal: on-screen amount grows between steps.">signal: iznos na ekranu raste između koraka.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="bank-impersonation.html" data-sr="Lažna banka" data-en="Bank impersonation scam">Lažna banka</a></li>
            <li><a href="friendly-helper-atm-scam.html" data-sr="Prijateljski pomoćnik kod bankomata" data-en="Friendly helper ATM scam">Prijateljski pomoćnik kod bankomata</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> svaki korak koji uključuje tuđi broj računa ili primaoca je stop signal." data-en="<strong>Threshold:</strong> any step involving someone else's account number or recipient is a stop signal."><strong>Prag faze:</strong> svaki korak koji uključuje tuđi broj računa ili primaoca je stop signal.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Izvlačenje kodova i PIN-a" data-en="Phase 3 — Drawing out codes and PIN">Faza 3 — Izvlačenje kodova i PIN-a</h3>
        <p data-sr="Kombinacija pristupa meniju i kodova omogućava daljinsko praznjenje." data-en="They ask for SMS code, app code, or PIN repeat to verify identity.">Kombinacija pristupa meniju i kodova omogućava daljinsko praznjenje.</p>
        <ul class="bullets">
          <li data-sr="signal: molba da pročitate naglas kod koji stiže na telefon." data-en="signal: request to read aloud a code arriving on the phone.">signal: molba da pročitate naglas kod koji stiže na telefon.</li>
          <li data-sr="signal: test transakcija sa malim iznosom koji zapravo ide trećem licu." data-en="signal: test transaction with a small amount that actually goes to a third party.">signal: test transakcija sa malim iznosom koji zapravo ide trećem licu.</li>
          <li data-sr="signal: pritisak da ne prekidate sesiju jer će račun biti blokiran." data-en="signal: pressure not to end the session or the account will be blocked.">signal: pritisak da ne prekidate sesiju jer će račun biti blokiran.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> banka ne traži da neko drugi čuje vaš SMS kod ili PIN uz bankomat." data-en="<strong>Threshold:</strong> the bank does not ask for someone else to hear your SMS code or PIN at the ATM."><strong>Prag faze:</strong> banka ne traži da neko drugi čuje vaš SMS kod ili PIN uz bankomat.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 4 — Završni transfer ili podizanje" data-en="Phase 4 — Final transfer or withdrawal">Faza 4 — Završni transfer ili podizanje</h3>
        <p data-sr="Potvrda na ekranu odgovara njihovoj priči, ne vašoj nameri." data-en="Money moves to a controlled account or cash is handed to a third party under a deposit excuse.">Potvrda na ekranu odgovara njihovoj priči, ne vašoj nameri.</p>
        <ul class="bullets">
          <li data-sr="signal: primaoc na ekranu nije vam poznat." data-en="signal: recipient on screen is unknown to you.">signal: primaoc na ekranu nije vam poznat.</li>
          <li data-sr="signal: gotovina se predaje kuriru ili službeniku koji čeka pored." data-en="signal: cash is handed to a courier or officer waiting nearby.">signal: gotovina se predaje kuriru ili službeniku koji čeka pored.</li>
          <li data-sr="signal: više uzastopnih manjih transakcija umesto jedne." data-en="signal: several consecutive small transactions instead of one.">signal: više uzastopnih manjih transakcija umesto jedne.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> čim vidite nepoznatog primaoca, prekinite i blokirajte sesiju." data-en="<strong>Threshold:</strong> as soon as you see an unknown recipient, end and block the session."><strong>Prag faze:</strong> čim vidite nepoznatog primaoca, prekinite i blokirajte sesiju.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 5 — Otkrivanje i prijava" data-en="Phase 5 — Discovery and reporting">Faza 5 — Otkrivanje i prijava</h3>
        <p data-sr="Brza prijava smanjuje dalju štetu." data-en="The victim realizes from the statement, SMS alert, or when the bank calls about an unusual pattern.">Brza prijava smanjuje dalju štetu.</p>
        <ul class="bullets">
          <li data-sr="signal: transakcije koje ne prepoznajete odmah posle posete bankomatu." data-en="signal: transactions you do not recognize right after an ATM visit.">signal: transakcije koje ne prepoznajete odmah posle posete bankomatu.</li>
          <li data-sr="signal: promena limita ili uključenje opcija koje niste tražili." data-en="signal: limit change or options enabled you did not request.">signal: promena limita ili uključenje opcija koje niste tražili.</li>
          <li data-sr="signal: lažni poziv posle incidenta koji traži još jedan korak verifikacije." data-en="signal: fake call after the incident asking for another verification step.">signal: lažni poziv posle incidenta koji traži još jedan korak verifikacije.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="otp-interception.html" data-sr="Presretanje OTP koda" data-en="OTP interception">Presretanje OTP koda</a></li>
            <li><a href="fake-call-scam.html" data-sr="Lažni poziv" data-en="Fake call scam">Lažni poziv</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> prijava u prvom satu povećava šansu za zamrzavanje sredstava." data-en="<strong>Threshold:</strong> reporting in the first hour increases the chance funds can be frozen."><strong>Prag faze:</strong> prijava u prvom satu povećava šansu za zamrzavanje sredstava.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Istraga i zaštita naloga" data-en="Phase 6 — Investigation and account protection">Faza 6 — Istraga i zaštita naloga</h3>
        <p data-sr="Policija može tražiti video sa bankomata." data-en="The bank replaces the card, resets app access, and runs a dispute on unauthorized transfers.">Policija može tražiti video sa bankomata.</p>
        <ul class="bullets">
          <li data-sr="signal: zamena kartice i obavezna promena PIN-a." data-en="signal: card replacement and mandatory PIN change.">signal: zamena kartice i obavezna promena PIN-a.</li>
          <li data-sr="signal: zamrzavanje daljih transfera dok traje istraga." data-en="signal: freezing further transfers while investigating.">signal: zamrzavanje daljih transfera dok traje istraga.</li>
          <li data-sr="signal: edukacija da se ubuduće koristi samo call centar na zvaničnom broju." data-en="signal: training to use only the official call center number next time.">signal: edukacija da se ubuduće koristi samo call centar na zvaničnom broju.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> čuvajte broj reference slučaja za sve naknadne pozive banke i policije." data-en="<strong>Threshold:</strong> keep the case reference for all later bank and police calls."><strong>Prag faze:</strong> čuvajte broj reference slučaja za sve naknadne pozive banke i policije.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Nepoznata osoba daje uputstva uz bankomat." data-en="A stranger gives instructions at the ATM.">Nepoznata osoba daje uputstva uz bankomat.</li>
        <li data-sr="Tvrdnja da je poslata banka bez provere." data-en="Claim to be from the bank without verification.">Tvrdnja da je poslata banka bez provere.</li>
        <li data-sr="Traže broj računa primaoca koji vam diktiraju." data-en="They ask for a recipient account number they dictate.">Traže broj računa primaoca koji vam diktiraju.</li>
        <li data-sr="Traže da glasno pročitate SMS kod." data-en="They ask you to read an SMS code aloud.">Traže da glasno pročitate SMS kod.</li>
        <li data-sr="Pritisak da ne prekidate sesiju." data-en="Pressure not to end the session.">Pritisak da ne prekidate sesiju.</li>
        <li data-sr="Iznos na ekranu raste između koraka." data-en="On-screen amount grows between steps.">Iznos na ekranu raste između koraka.</li>
        <li data-sr="Jezik menija se menja bez vašeg zahteva." data-en="Menu language changes without your request.">Jezik menija se menja bez vašeg zahteva.</li>
        <li data-sr="Traže gotovinu da predaju kuriru." data-en="They ask for cash to hand to a courier.">Traže gotovinu da predaju kuriru.</li>
        <li data-sr="Višestruke male transakcije zaredom." data-en="Multiple small transactions in a row.">Višestruke male transakcije zaredom.</li>
        <li data-sr="Poziv posle incidenta koji traži još podataka." data-en="A call after the incident asking for more data.">Poziv posle incidenta koji traži još podataka.</li>
      </ul>
    </section>

    <section class="content-section">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <ol class="steps">
        <li data-sr="Uporedite korake sa zvaničnim uputstvom u aplikaciji banke." data-en="Compare steps with official guidance in the bank app.">Uporedite korake sa zvaničnim uputstvom u aplikaciji banke.</li>
        <li data-sr="Zovite broj sa poleđine kartice, ne broj koji vam da stranac." data-en="Call the number on the card back, not a number a stranger gives.">Zovite broj sa poleđine kartice, ne broj koji vam da stranac.</li>
        <li data-sr="Ne unosite tuđe brojeve računa na bankomatu." data-en="Do not enter others' account numbers at the ATM.">Ne unosite tuđe brojeve računa na bankomatu.</li>
        <li data-sr="Ne čitajte naglas nijedan kod koji stiže na telefon." data-en="Do not read aloud any code that arrives on the phone.">Ne čitajte naglas nijedan kod koji stiže na telefon.</li>
        <li data-sr="Prekinite sesiju ako bilo koji korak nije u skladu sa vašom namerom." data-en="End the session if any step does not match your intent.">Prekinite sesiju ako bilo koji korak nije u skladu sa vašom namerom.</li>
        <li data-sr="Blokirajte karticu ako ste uneli podatke pod pritiskom." data-en="Block the card if you entered data under pressure.">Blokirajte karticu ako ste uneli podatke pod pritiskom.</li>
        <li data-sr="Sačuvajte vreme, lokaciju i opis osobe za prijavu." data-en="Save time, location, and person description for reporting.">Sačuvajte vreme, lokaciju i opis osobe za prijavu.</li>
        <li data-sr="Proverite izvod u roku od jednog sata posle sumnjivog susreta." data-en="Check the statement within an hour after a suspicious encounter.">Proverite izvod u roku od jednog sata posle sumnjivog susreta.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
      <ul class="bullets">
        <li data-sr="Da li sam zatražio pomoć od banke pre nego što me je neko uputio?" data-en="Did I request bank help before someone guided me?">Da li sam zatražio pomoć od banke pre nego što me je neko uputio?</li>
        <li data-sr="Da li broj koji sam zvao postoji na zvaničnom sajtu banke?" data-en="Does the number I called exist on the bank official site?">Da li broj koji sam zvao postoji na zvaničnom sajtu banke?</li>
        <li data-sr="Da li je primaoc na ekranu meni poznat?" data-en="Is the on-screen recipient known to me?">Da li je primaoc na ekranu meni poznat?</li>
        <li data-sr="Da li sam uneo bilo koji broj koji mi je diktirao stranac?" data-en="Did I enter any number a stranger dictated?">Da li sam uneo bilo koji broj koji mi je diktirao stranac?</li>
        <li data-sr="Da li sam delio SMS ili aplikacioni kod naglas?" data-en="Did I share SMS or app code aloud?">Da li sam delio SMS ili aplikacioni kod naglas?</li>
        <li data-sr="Da li je iznos odgovarao mom planu?" data-en="Did the amount match my plan?">Da li je iznos odgovarao mom planu?</li>
        <li data-sr="Da li sam odmah blokirao karticu posle sumnje?" data-en="Did I block the card immediately after suspicion?">Da li sam odmah blokirao karticu posle sumnje?</li>
        <li data-sr="Da li sam prijavio incident banci?" data-en="Did I report the incident to the bank?">Da li sam prijavio incident banci?</li>
        <li data-sr="Da li treba policijska prijava?" data-en="Should there be a police report?">Da li treba policijska prijava?</li>
        <li data-sr="Da li imam broj reference slučaja?" data-en="Do I have a case reference number?">Da li imam broj reference slučaja?</li>
        <li data-sr="Da li treba promeniti lozinku aplikacije i PIN?" data-en="Should I change app password and PIN?">Da li treba promeniti lozinku aplikacije i PIN?</li>
        <li data-sr="Da li sam proverio izvod narednih 48 sati?" data-en="Did I check the statement for the next 48 hours?">Da li sam proverio izvod narednih 48 sati?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Prekinite sesiju na bankomatu odmah." data-en="End the ATM session immediately.">Prekinite sesiju na bankomatu odmah.</li>
        <li data-sr="Ne sledite uputstva stranca; udaljite se od uređaja." data-en="Do not follow stranger instructions; step away from the machine.">Ne sledite uputstva stranca; udaljite se od uređaja.</li>
        <li data-sr="Pozovite banku na broj sa kartice ili iz aplikacije." data-en="Call the bank from the card number or app.">Pozovite banku na broj sa kartice ili iz aplikacije.</li>
        <li data-sr="Zatražite blokadu kartice i pregled naloga." data-en="Request card block and account review.">Zatražite blokadu kartice i pregled naloga.</li>
        <li data-sr="Ako je došlo do gubitka, prijavite policiji sa opisom i vremenom." data-en="If there was loss, report to police with description and time.">Ako je došlo do gubitka, prijavite policiji sa opisom i vremenom.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li je neko diktirao brojeve tokom transakcije?" data-en="Did someone dictate numbers during the transaction?">Da li je neko diktirao brojeve tokom transakcije?</li>
            <li data-sr="Da li si čuo kod sa svog telefona naglas?" data-en="Did you read a code from your phone aloud?">Da li si čuo kod sa svog telefona naglas?</li>
            <li data-sr="Da li je primaoc na ekranu bio poznat?" data-en="Was the on-screen recipient known?">Da li je primaoc na ekranu bio poznat?</li>
            <li data-sr="Da li si odmah zvao broj sa kartice?" data-en="Did you immediately call the card number?">Da li si odmah zvao broj sa kartice?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Prekidam sesiju i zovem banku na zvanični broj iz aplikacije." data-en="I end the session and call the bank on the official app number.">Prekidam sesiju i zovem banku na zvanični broj iz aplikacije.</li>
            <li data-sr="Neću unositi broj koji mi diktira osoba koja nije službenik u filijali." data-en="I will not enter a number dictated by someone who is not branch staff.">Neću unositi broj koji mi diktira osoba koja nije službenik u filijali.</li>
            <li data-sr="Moj kod iz SMS-a ne čitam naglas nikome na ulici." data-en="I do not read my SMS code aloud to anyone on the street.">Moj kod iz SMS-a ne čitam naglas nikome na ulici.</li>
            <li data-sr="Idemo u filijalu umesto da rešavamo uz stranca na bankomatu." data-en="We go to the branch instead of fixing it with a stranger at the ATM.">Idemo u filijalu umesto da rešavamo uz stranca na bankomatu.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
