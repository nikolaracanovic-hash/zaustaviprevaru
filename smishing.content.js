window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["smishing"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi smišing" data-en="Introduction: how smishing works">Uvod: kako radi smišing</h2>
      <p data-sr="Smišing je SMS varijanta fišinga. Napadač koristi kratku poruku, temu koja deluje hitno i link koji vodi na lažan sajt za dostavu, kaznu, banku ili verifikaciju. Meta obično reaguje brzo jer SMS izgleda kao rutinska obaveza koja ima rok." data-en="Smishing is the SMS variant of phishing. The attacker uses a short message, an urgent-looking topic, and a link leading to a fake delivery, fine, bank, or verification site. The target usually reacts quickly because the SMS looks like a routine task with a deadline.">Smišing je SMS varijanta fišinga. Napadač koristi kratku poruku, temu koja deluje hitno i link koji vodi na lažan sajt za dostavu, kaznu, banku ili verifikaciju. Meta obično reaguje brzo jer SMS izgleda kao rutinska obaveza koja ima rok.</p>
      <div class="callout" data-sr="<strong>Model:</strong> SMS poruka → hitnost ili dug → link → lažni sajt → prag → krađa podataka ili naplata." data-en="<strong>Model:</strong> SMS message → urgency or debt → link → fake site → threshold → data theft or charging."><strong>Model:</strong> SMS poruka → hitnost ili dug → link → lažni sajt → prag → krađa podataka ili naplata.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> klik na link i unos podataka, kartice ili OTP koda." data-en="<strong>Threshold:</strong> clicking the link and entering data, card details, or an OTP code."><strong>Prag:</strong> klik na link i unos podataka, kartice ili OTP koda.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi" data-en="How it works">Kako generalno radi</h2>
      <p data-sr="Smišing koristi dve prednosti SMS kanala: kratkoću i naviku. Poruka ne daje mnogo detalja, ali daje dovoljno razloga da klik deluje kao najbrži izlaz: pošiljka stoji, kazna mora odmah da se plati, nalog mora da se potvrdi, banka traži proveru. Posle klika tok prelazi na lažan sajt ili u drugu prevaru, najčešće fišing, lažnu dostavu ili zloupotrebu kartice." data-en="Smishing relies on two advantages of the SMS channel: brevity and habit. The message gives few details, but enough to make the click feel like the fastest way out: a package is on hold, a fine must be paid immediately, an account must be confirmed, or the bank needs verification. After the click, the flow moves to a fake site or into another scam, most often phishing, fake delivery, or card abuse.">Smišing koristi dve prednosti SMS kanala: kratkoću i naviku. Poruka ne daje mnogo detalja, ali daje dovoljno razloga da klik deluje kao najbrži izlaz: pošiljka stoji, kazna mora odmah da se plati, nalog mora da se potvrdi, banka traži proveru. Posle klika tok prelazi na lažan sajt ili u drugu prevaru, najčešće fišing, lažnu dostavu ili zloupotrebu kartice.</p>
      <ul class="bullets">
        <li data-sr="Autoritet dolazi kroz ime pošiljaoca, temu poruke i kratki rok." data-en="Authority comes from the sender name, the message topic, and the short deadline.">Autoritet dolazi kroz ime pošiljaoca, temu poruke i kratki rok.</li>
        <li data-sr="Napadač uvodi novac ili podatke kroz lažan portal za dostavu, kaznu, banku ili verifikaciju." data-en="The attacker introduces money or data through a fake delivery, fine, bank, or verification portal.">Napadač uvodi novac ili podatke kroz lažan portal za dostavu, kaznu, banku ili verifikaciju.</li>
        <li data-sr="Signal: SMS traži hitan klik na skraćen ili neobičan domen." data-en="Signal: the SMS demands an urgent click on a shortened or unusual domain.">Signal: SMS traži hitan klik na skraćen ili neobičan domen.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok" data-en="Timeline">Hronološki tok</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Poruka stiže" data-en="Phase 1 — The message arrives">Faza 1 — Poruka stiže</h3>
        <p data-sr="SMS stiže kao obaveštenje o dostavi, kazni, verifikaciji naloga ili banci. Poruka je kratka i namerno ostavlja prostor da meta sama dopuni priču." data-en="The SMS arrives as a delivery, fine, account verification, or bank notice. The message is short and intentionally leaves room for the target to complete the story on their own.">SMS stiže kao obaveštenje o dostavi, kazni, verifikaciji naloga ili banci. Poruka je kratka i namerno ostavlja prostor da meta sama dopuni priču.</p>
        <ul class="bullets">
          <li data-sr="Poruka izgleda generički, ali deluje dovoljno realno da izazove klik." data-en="The message looks generic, but realistic enough to trigger a click.">Poruka izgleda generički, ali deluje dovoljno realno da izazove klik.</li>
          <li data-sr="Često koristi temu koja odgovara svakodnevnim obavezama." data-en="It often uses a topic that matches daily routines.">Često koristi temu koja odgovara svakodnevnim obavezama.</li>
          <li data-sr="Signal: pošiljalac je generičan ili neobičan, a poruka nema precizan kontekst." data-en="Signal: the sender is generic or unusual, and the message lacks precise context.">Signal: pošiljalac je generičan ili neobičan, a poruka nema precizan kontekst.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta prihvati da poruka zahteva brzu reakciju." data-en="<strong>Phase threshold:</strong> the target accepts that the message requires a quick reaction."><strong>Prag faze:</strong> meta prihvati da poruka zahteva brzu reakciju.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Klik na link" data-en="Phase 2 — Click on the link">Faza 2 — Klik na link</h3>
        <p data-sr="Link vodi na lažan sajt koji imitira kurira, državni organ, banku ili servis. Dizajn je često dovoljno dobar da meta ne proveri domen." data-en="The link leads to a fake site imitating a courier, government body, bank, or service. The design is often good enough that the target does not check the domain.">Link vodi na lažan sajt koji imitira kurira, državni organ, banku ili servis. Dizajn je često dovoljno dobar da meta ne proveri domen.</p>
        <ul class="bullets">
          <li data-sr="Sajt traži samo jedan sledeći korak: adresu, karticu, prijavu ili mali iznos." data-en="The site asks for just one next step: address, card details, login, or a small amount.">Sajt traži samo jedan sledeći korak: adresu, karticu, prijavu ili mali iznos.</li>
          <li data-sr="Domen liči na pravi, ali nije isti kao zvanični domen servisa." data-en="The domain resembles the real one, but is not the same as the official service domain.">Domen liči na pravi, ali nije isti kao zvanični domen servisa.</li>
          <li data-sr="Signal: link vodi na skraćen, čudan ili nov domen." data-en="Signal: the link leads to a shortened, strange, or new domain.">Signal: link vodi na skraćen, čudan ili nov domen.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta ostane na lažnom sajtu umesto da ode na zvanični kanal." data-en="<strong>Phase threshold:</strong> the target stays on the fake site instead of switching to the official channel."><strong>Prag faze:</strong> meta ostane na lažnom sajtu umesto da ode na zvanični kanal.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 3 — Unos podataka" data-en="Phase 3 — Data entry">Faza 3 — Unos podataka</h3>
        <p data-sr="Lažni sajt traži prijavu, podatke kartice, lične podatke ili OTP kod. U ovoj tački prevara prelazi iz poruke u stvarnu krađu podataka ili autorizaciju naplate." data-en="The fake site asks for login credentials, card details, personal data, or an OTP code. At this point the scam moves from a message into actual data theft or payment authorization.">Lažni sajt traži prijavu, podatke kartice, lične podatke ili OTP kod. U ovoj tački prevara prelazi iz poruke u stvarnu krađu podataka ili autorizaciju naplate.</p>
        <ul class="bullets">
          <li data-sr="Čak i mali iznos služi da proveri karticu i otvori put ka većoj šteti." data-en="Even a small amount can be used to validate the card and open the way to greater damage.">Čak i mali iznos služi da proveri karticu i otvori put ka većoj šteti.</li>
          <li data-sr="OTP kod nije informacija, već potvrda radnje." data-en="An OTP code is not information, but confirmation of an action.">OTP kod nije informacija, već potvrda radnje.</li>
          <li data-sr="Signal: poruka o dostavi ili kazni odjednom traži osetljive bankovne podatke." data-en="Signal: a delivery or fine message suddenly requests sensitive banking data.">Signal: poruka o dostavi ili kazni odjednom traži osetljive bankovne podatke.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta unese podatke ili potvrdi kod." data-en="<strong>Phase threshold:</strong> the target enters the data or confirms the code."><strong>Prag faze:</strong> meta unese podatke ili potvrdi kod.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 4 — Serijska šteta" data-en="Phase 4 — Cascading damage">Faza 4 — Serijska šteta</h3>
        <p data-sr="Posle uspešnog unosa slede naplate, pokušaji prijave na nalog, nove SMS poruke ili pozivi. Napadač koristi isti trenutak zbunjenosti da izvuče još podataka ili novca." data-en="After a successful entry come charges, account login attempts, new SMS messages, or calls. The attacker uses the same moment of confusion to extract more data or money.">Posle uspešnog unosa slede naplate, pokušaji prijave na nalog, nove SMS poruke ili pozivi. Napadač koristi isti trenutak zbunjenosti da izvuče još podataka ili novca.</p>
        <ul class="bullets">
          <li data-sr="Mogu se pojaviti dodatne poruke za novu potvrdu ili novu uplatu." data-en="Additional messages may appear asking for a new confirmation or payment.">Mogu se pojaviti dodatne poruke za novu potvrdu ili novu uplatu.</li>
          <li data-sr="Smišing često prelazi u fišing, lažnu dostavu ili zloupotrebu kartice bez fizičkog prisustva." data-en="Smishing often branches into phishing, fake delivery, or card-not-present abuse.">Smišing često prelazi u fišing, lažnu dostavu ili zloupotrebu kartice bez fizičkog prisustva.</li>
          <li data-sr="Signal: posle jednog klika dolazi više novih zahteva." data-en="Signal: one click is followed by several new requests.">Signal: posle jednog klika dolazi više novih zahteva.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> prevara se širi na novi zahtev ili novu naplatu." data-en="<strong>Phase threshold:</strong> the scam expands into a new request or a new charge."><strong>Prag faze:</strong> prevara se širi na novi zahtev ili novu naplatu.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Nestanak i prevara povraćaja novca" data-en="Phase 5 — Disappearance and recovery scam">Faza 5 — Nestanak i prevara povraćaja novca</h3>
        <p data-sr="Kada napadač uzme šta mu treba, kanal se gasi. U nekim slučajevima stiže novi kontakt koji nudi povraćaj novca uz novu uplatu ili novu proveru." data-en="Once the attacker gets what they need, the channel goes silent. In some cases a new contact appears offering to recover the money for a new fee or a new verification.">Kada napadač uzme šta mu treba, kanal se gasi. U nekim slučajevima stiže novi kontakt koji nudi povraćaj novca uz novu uplatu ili novu proveru.</p>
        <ul class="bullets">
          <li data-sr="Napadač nestaje čim prestane da dobija novu korist." data-en="The attacker disappears as soon as they stop getting new value.">Napadač nestaje čim prestane da dobija novu korist.</li>
          <li data-sr="Nova poruka o povraćaju je nastavak prevare, a ne pomoć." data-en="A new message about recovery is a continuation of the scam, not help.">Nova poruka o povraćaju je nastavak prevare, a ne pomoć.</li>
          <li data-sr="Signal: isti događaj sada dobija „spasilačku„ ponudu uz novu naknadu." data-en="Signal: the same event now receives a “rescue“ offer with a new fee.">Signal: isti događaj sada dobija 'spasilačku' ponudu uz novu naknadu.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta poveruje da povraćaj traži novu uplatu." data-en="<strong>Phase threshold:</strong> the target believes recovery requires a new payment."><strong>Prag faze:</strong> meta poveruje da povraćaj traži novu uplatu.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="SMS dolazi od generičnog pošiljaoca ili sa čudnog broja." data-en="The SMS comes from a generic sender or an unusual number.">SMS dolazi od generičnog pošiljaoca ili sa čudnog broja.</li>
        <li data-sr="Poruka traži hitan klik bez dovoljno konteksta." data-en="The message demands an urgent click without enough context.">Poruka traži hitan klik bez dovoljno konteksta.</li>
        <li data-sr="Link vodi na skraćen, nov ili neuobičajen domen." data-en="The link leads to a shortened, new, or unusual domain.">Link vodi na skraćen, nov ili neuobičajen domen.</li>
        <li data-sr="Tema poruke je dostava, kazna ili banka, ali tekst ostaje neodređen." data-en="The message theme is delivery, a fine, or a bank, but the text stays vague.">Tema poruke je dostava, kazna ili banka, ali tekst ostaje neodređen.</li>
        <li data-sr="Lažni sajt traži karticu, prijavu ili OTP kod za radnju koja to inače ne traži." data-en="The fake site asks for a card, login, or OTP code for an action that normally would not require it.">Lažni sajt traži karticu, prijavu ili OTP kod za radnju koja to inače ne traži.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere" data-en="Checks">Provere</h2>
      <ul class="bullets">
        <li data-sr="Ne otvaraj link iz SMS poruke ako istu stvar možeš da proveriš kroz zvaničnu aplikaciju ili sajt." data-en="Do not open an SMS link if you can verify the same thing through the official app or website.">Ne otvaraj link iz SMS poruke ako istu stvar možeš da proveriš kroz zvaničnu aplikaciju ili sajt.</li>
        <li data-sr="Proveri domen ručno, bez klika na poslati link." data-en="Check the domain manually without clicking the provided link.">Proveri domen ručno, bez klika na poslati link.</li>
        <li data-sr="Ako poruka pominje dostavu, idi direktno na sajt ili aplikaciju kurira." data-en="If the message mentions a delivery, go directly to the courier website or app.">Ako poruka pominje dostavu, idi direktno na sajt ili aplikaciju kurira.</li>
        <li data-sr="Ako poruka pominje banku, kontaktiraj banku kroz zvaničan kanal." data-en="If the message mentions a bank, contact the bank through the official channel.">Ako poruka pominje banku, kontaktiraj banku kroz zvaničan kanal.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Checklista" data-en="Checklist">Checklista</h2>
      <ul class="bullets">
        <li data-sr="Da li poruka daje tačan kontekst ili samo stvara hitnost." data-en="Does the message provide exact context or only create urgency.">Da li poruka daje tačan kontekst ili samo stvara hitnost.</li>
        <li data-sr="Da li je domen isti kao zvanični domen servisa." data-en="Is the domain identical to the official service domain.">Da li je domen isti kao zvanični domen servisa.</li>
        <li data-sr="Da li ova radnja stvarno traži karticu, prijavu ili OTP kod." data-en="Does this action really require card details, login credentials, or an OTP code.">Da li ova radnja stvarno traži karticu, prijavu ili OTP kod.</li>
        <li data-sr="Da li mogu isto da proverim bez tog linka." data-en="Can I verify the same thing without that link.">Da li mogu isto da proverim bez tog linka.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene" data-en="If suspicion starts">Ako sumnja krene</h2>
      <ol class="steps">
        <li data-sr="Zatvori poruku i ne unosi ništa dalje." data-en="Close the message and do not enter anything else.">Zatvori poruku i ne unosi ništa dalje.</li>
        <li data-sr="Ako si uneo karticu, odmah kontaktiraj banku." data-en="If you entered card details, contact the bank immediately.">Ako si uneo karticu, odmah kontaktiraj banku.</li>
        <li data-sr="Ako si uneo lozinku, promeni je kroz zvanični sajt ili aplikaciju." data-en="If you entered a password, change it through the official website or app.">Ako si uneo lozinku, promeni je kroz zvanični sajt ili aplikaciju.</li>
        <li data-sr="Sačuvaj poruku i domen kao dokaz." data-en="Save the message and the domain as evidence.">Sačuvaj poruku i domen kao dokaz.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
      <ul class="bullets">
        <li data-sr="Pitaj da li su kliknuli na link ili samo pročitali poruku." data-en="Ask whether they clicked the link or only read the message.">Pitaj da li su kliknuli na link ili samo pročitali poruku.</li>
        <li data-sr="Pitaj da li su uneli karticu, lozinku ili OTP kod." data-en="Ask whether they entered card details, a password, or an OTP code.">Pitaj da li su uneli karticu, lozinku ili OTP kod.</li>
        <li data-sr="Reci: „Nemoj dalje ništa da potvrđuješ, prvo proverimo zvaničan kanal“.“" data-en='Say: "Do not confirm anything else, let us verify the official channel first."'>Reci: „Nemoj dalje ništa da potvrđuješ, prvo proverimo zvaničan kanal“.“</li>
        <li data-sr="Reci: „SMS može da izgleda uverljivo, ali link odlučuje da li je prevara“.“" data-en='Say: "An SMS can look convincing, but the link decides whether it is a scam."'>Reci: „SMS može da izgleda uverljivo, ali link odlučuje da li je prevara“.“</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Povezane prevare" data-en="Related scams">Povezane prevare</h2>
      <ul class="bullets">
        <li><a href="phishing.html" data-sr="Fišing" data-en="Fišing">Fišing</a></li>
        <li><a href="vishing.html" data-sr="Višing" data-en="Višing">Višing</a></li>
        <li><a href="fake-delivery.html" data-sr="Lažna dostava / kurir" data-en="Fake delivery / courier">Lažna dostava / kurir</a></li>
        <li><a href="marketplace-scam.html" data-sr="Prevare na oglasnicima" data-en="Marketplace scams">Prevare na oglasnicima</a></li>
      </ul>
    </section>
  `
};
