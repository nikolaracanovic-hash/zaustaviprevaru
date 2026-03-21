window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["fake-smart-meter-installation-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
      <p data-sr="SMS, poziv ili oglas tvrdi da distributer struje menja brojilo na pametno i da moraš odmah platiti naknadu za termin, opremu ili aktivaciju pre dolaska majstora." data-en="SMS, a call, or an ad claims the electricity distributor is replacing the meter with a smart one and you must immediately pay a fee for the slot, equipment, or activation before the technician arrives.">SMS, poziv ili oglas tvrdi da distributer struje menja brojilo na pametno i da moraš odmah platiti naknadu za termin, opremu ili aktivaciju pre dolaska majstora.</p>
      <p data-sr="Prave zamene i obaveštenja idu preko zvaničnih kanala distributera i objavljenih brojeva; ne plaća se trećem licu preko linka iz nepoznate poruke." data-en="Real replacements and notices come through the distributor’s official channels and published numbers; you do not pay a third party via a link from an unknown message.">Prave zamene i obaveštenja idu preko zvaničnih kanala distributera i objavljenih brojeva; ne plaća se trećem licu preko linka iz nepoznate poruke.</p>
      <div class="callout" data-sr="<strong>Model:</strong> lažno obaveštenje → link ili poziv → prag (naknada za ugradnju) → eskalacija → nema zvaničnog termina." data-en="<strong>Model:</strong> fake notice → link or call → threshold (installation fee) → escalation → no official appointment."><strong>Model:</strong> lažno obaveštenje → link ili poziv → prag (naknada za ugradnju) → eskalacija → nema zvaničnog termina.</div>
    </section>
    <section class="card">
      <h2 data-sr="Kako generalno radi" data-en="How it generally works">Kako generalno radi</h2>
      <p data-sr="Koristi se strah od isključenja struje, kažnjavanja ili gubitka subvencije ako ne završiš zamenu." data-en="Fear of power cut-off, fines, or losing a subsidy if you do not complete the replacement is exploited.">Koristi se strah od isključenja struje, kažnjavanja ili gubitka subvencije ako ne završiš zamenu.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta privlači žrtvu" data-en="What pulls the victim in">Šta privlači žrtvu</div>
          <ul class="bullets">
            <li data-sr="Hitni rok koji se poklapa sa vestima o modernizaciji mreže ili novim tarifama." data-en="An urgent deadline aligned with news about grid upgrades or new tariffs.">Hitni rok koji se poklapa sa vestima o modernizaciji mreže ili novim tarifama.</li>
            <li data-sr="Obećanje besplatnog ili jeftinog brojila ako odmah platiš obradu." data-en="A promise of a free or cheap meter if you immediately pay processing.">Obećanje besplatnog ili jeftinog brojila ako odmah platiš obradu.</li>
            <li data-sr="Lažni sajt ili poruka kopira logo i boje distributera." data-en="The fake site or message copies the distributor logo and colours.">Lažni sajt ili poruka kopira logo i boje distributera.</li>
            <li data-sr="Komunikacija ide preko ličnog broja ili generičkog imejla." data-en="Communication uses a personal number or generic email.">Komunikacija ide preko ličnog broja ili generičkog imejla.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Gde je prevara" data-en="Where the fraud is">Gde je prevara</div>
          <ul class="bullets">
            <li data-sr="Domen linka nije isti kao zvanični sajt distributera sa računa." data-en="The link domain is not the same as the distributor’s official site on your bill.">Domen linka nije isti kao zvanični sajt distributera sa računa.</li>
            <li data-sr="Informativna linija distributera ne zna za termin ili naknadu iz poruke." data-en="The distributor information line knows nothing about the slot or fee from the message.">Informativna linija distributera ne zna za termin ili naknadu iz poruke.</li>
            <li data-sr="Uplata ide na fizičko lice, kripto ili darovne kartice." data-en="Payment goes to a private person, crypto, or gift cards.">Uplata ide na fizičko lice, kripto ili darovne kartice.</li>
            <li data-sr="Traže se podaci sa kartice ili kod iz SMS-a radi potvrde termina." data-en="Card details or an SMS code are requested to confirm the appointment.">Traže se podaci sa kartice ili kod iz SMS-a radi potvrde termina.</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching)">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Šest faza tipičnog toka; grananja ka srodnim prevarama." data-en="Six phases of a typical flow; branching to related scams.">Šest faza tipičnog toka; grananja ka srodnim prevarama.</p>
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Poruka koja liči na distributera" data-en="Phase 1 — Message that looks like the distributor">Faza 1 — Poruka koja liči na distributera</h3>
        <p data-sr="Stiže SMS sa linkom za zakazivanje ili poziv sa sintetičkim glasom koji navodi rok za zamenu brojila." data-en="An SMS arrives with a booking link or a synthetic-voice call cites a meter replacement deadline.">Stiže SMS sa linkom za zakazivanje ili poziv sa sintetičkim glasom koji navodi rok za zamenu brojila.</p>
        <ul class="bullets">
          <li data-sr="Signal: pošiljalac nije isti kao kanal koji distributer navodi na sajtu." data-en="Signal: the sender is not the same channel the distributor lists on the site.">Signal: pošiljalac nije isti kao kanal koji distributer navodi na sajtu.</li>
          <li data-sr="Signal: pritisak da otvoriš link odmah zbog navodnog isključenja." data-en="Signal: pressure to open the link immediately due to a claimed cut-off.">Signal: pritisak da otvoriš link odmah zbog navodnog isključenja.</li>
          <li data-sr="Signal: poruka ne sadrži tvoje tačno ime i adresu kao zvanično pismo." data-en="Signal: the message lacks your exact name and address like an official letter.">Signal: poruka ne sadrži tvoje tačno ime i adresu kao zvanično pismo.</li>
          <li data-sr="Signal: isti tekst prijavljen kao prevara na forumima." data-en="Signal: the same text is reported as fraud on forums.">Signal: isti tekst prijavljen kao prevara na forumima.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> klikneš na link ili ostaviš podatak u razgovoru." data-en="<strong>Phase threshold:</strong> you click the link or give data in the call."><strong>Prag faze:</strong> klikneš na link ili ostaviš podatak u razgovoru.</div>
      </article>
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Prikupljanje podataka o brojilu i nalogu" data-en="Phase 2 — Meter and account data collection">Faza 2 — Prikupljanje podataka o brojilu i nalogu</h3>
        <p data-sr="Forma traži broj ugovora sa računa, JMBG, fotografiju lične karte ili pristup korisničkom portalu." data-en="The form asks for contract number from the bill, national ID, ID photo, or access to the customer portal.">Forma traži broj ugovora sa računa, JMBG, fotografiju lične karte ili pristup korisničkom portalu.</p>
        <ul class="bullets">
          <li data-sr="Signal: traže se lozinka portala ili kod iz aplikacije banke." data-en="Signal: portal password or bank app code is requested.">Signal: traže se lozinka portala ili kod iz aplikacije banke.</li>
          <li data-sr="Signal: duplirani koraci koji ponovo traže iste podatke." data-en="Signal: duplicate steps asking for the same data again.">Signal: duplirani koraci koji ponovo traže iste podatke.</li>
          <li data-sr="Signal: odbijanje da sačekaju dok ne proveriš termin na infoliniji distributera." data-en="Signal: refusal to wait while you verify the slot on the distributor info line.">Signal: odbijanje da sačekaju dok ne proveriš termin na infoliniji distributera.</li>
          <li data-sr="Signal: forma nema isti TLS sertifikat i domen kao zvanični sajt." data-en="Signal: the form does not share TLS cert and domain with the official site.">Signal: forma nema isti TLS sertifikat i domen kao zvanični sajt.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> uneseš osetljive podatke u formu." data-en="<strong>Phase threshold:</strong> you enter sensitive data in the form."><strong>Prag faze:</strong> uneseš osetljive podatke u formu.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Prag: naknada za ugradnju ili opremu" data-en="Phase 3 — Threshold: installation or equipment fee">Faza 3 — Prag: naknada za ugradnju ili opremu</h3>
        <p data-sr="Pojavljuje se uplata za montažu, adapter, sigurnosnu proveru ili prioritetni termin na treći račun." data-en="Payment appears for installation, adapter, safety check, or priority slot to a third-party account.">Pojavljuje se uplata za montažu, adapter, sigurnosnu proveru ili prioritetni termin na treći račun.</p>
        <ul class="bullets">
          <li data-sr="Signal: uplata na fizičko lice ili nepoznatu firmu bez veze sa distributerom." data-en="Signal: payment to a private person or unknown company unrelated to the distributor.">Signal: uplata na fizičko lice ili nepoznatu firmu bez veze sa distributerom.</li>
          <li data-sr="Signal: traže se darovne kartice ili instant plaćanje." data-en="Signal: gift cards or instant payment are requested.">Signal: traže se darovne kartice ili instant plaćanje.</li>
          <li data-sr="Signal: priča da će struja biti isključena istog dana ako ne platiš." data-en="Signal: a story that power will be cut the same day unless you pay.">Signal: priča da će struja biti isključena istog dana ako ne platiš.</li>
          <li data-sr="Signal: nema uputstva na zvaničnom sajtu o ovoj naknadi." data-en="Signal: no guidance on the official site about this fee.">Signal: nema uputstva na zvaničnom sajtu o ovoj naknadi.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="fake-utility-meter-reader-scam.html" data-sr="Lažni čitač brojila na vratima" data-en="Fake utility meter reader scam">Lažni čitač brojila na vratima</a></li>
            <li><a href="utility-bill-scam.html" data-sr="Lažni računi za komunalije" data-en="Fake utility bill scams">Lažni računi za komunalije</a></li>
            <li><a href="smishing.html" data-sr="Smišing" data-en="Smishing">Smišing</a></li>
            <li><a href="advance-fee-fraud.html" data-sr="Uplata unapred" data-en="Advance-fee fraud">Uplata unapred</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> uplatiš ili pošalješ kod sa kartice." data-en="<strong>Phase threshold:</strong> you pay or send a card code."><strong>Prag faze:</strong> uplatiš ili pošalješ kod sa kartice.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Eskalacija naknada" data-en="Phase 4 — Fee escalation">Faza 4 — Eskalacija naknada</h3>
        <p data-sr="Posle prve uplate sledi taksa za povezivanje, test mreže ili dodatak za trofazno brojilo." data-en="After the first payment comes a connection fee, grid test, or three-phase meter surcharge.">Posle prve uplate sledi taksa za povezivanje, test mreže ili dodatak za trofazno brojilo.</p>
        <ul class="bullets">
          <li data-sr="Signal: svaka uplata je predstavljena kao poslednja pre dolaska ekipe." data-en="Signal: each payment is framed as the last before the crew arrives.">Signal: svaka uplata je predstavljena kao poslednja pre dolaska ekipe.</li>
          <li data-sr="Signal: pretnja gubitkom subvencije ili starog tarifnog paketa." data-en="Signal: threat of losing a subsidy or old tariff package.">Signal: pretnja gubitkom subvencije ili starog tarifnog paketa.</li>
          <li data-sr="Signal: uvodi se nadređeni dispečer koji ponavlja zahtev." data-en="Signal: a senior dispatcher is introduced who repeats the demand.">Signal: uvodi se nadređeni dispečer koji ponavlja zahtev.</li>
          <li data-sr="Signal: odbijanje pisanog potvrđenja termina sa zvaničnim brojem predmeta." data-en="Signal: refusal of written appointment confirmation with an official reference.">Signal: odbijanje pisanog potvrđenja termina sa zvaničnim brojem predmeta.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> pristaneš na drugu uplatu." data-en="<strong>Phase threshold:</strong> you agree to another payment."><strong>Prag faze:</strong> pristaneš na drugu uplatu.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Krađa naloga ili zloupotreba kartice" data-en="Phase 5 — Account theft or card abuse">Faza 5 — Krađa naloga ili zloupotreba kartice</h3>
        <p data-sr="Prikupljeni podaci služe za preuzimanje korisničkog portala ili kupovinu uz krađu sa kartice." data-en="Collected data is used to take over the customer portal or make purchases with a stolen card.">Prikupljeni podaci služe za preuzimanje korisničkog portala ili kupovinu uz krađu sa kartice.</p>
        <ul class="bullets">
          <li data-sr="Signal: neočekivane transakcije odmah posle unosa podataka." data-en="Signal: unexpected transactions right after entering data.">Signal: neočekivane transakcije odmah posle unosa podataka.</li>
          <li data-sr="Signal: obaveštenje o promeni lozinke na portalu distributera." data-en="Signal: notice of password change on the distributor portal.">Signal: obaveštenje o promeni lozinke na portalu distributera.</li>
          <li data-sr="Signal: lažni poziv iz banke posle uplate." data-en="Signal: a fake bank call after payment.">Signal: lažni poziv iz banke posle uplate.</li>
          <li data-sr="Signal: zahtev za instalaciju aplikacije spolja App Store-a ili Play prodavnice." data-en="Signal: request to install an app from outside the official store.">Signal: zahtev za instalaciju aplikacije spolja App Store-a ili Play prodavnice.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> odobriš daljinsku sesiju ili instaliraš nepoznatu aplikaciju." data-en="<strong>Phase threshold:</strong> you approve remote access or install an unknown app."><strong>Prag faze:</strong> odobriš daljinsku sesiju ili instaliraš nepoznatu aplikaciju.</div>
      </article>
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 6 — Nestanak ili prelazak u drugu šemu" data-en="Phase 6 — Disappearance or pivot to another scheme">Faza 6 — Nestanak ili prelazak u drugu šemu</h3>
        <p data-sr="Kontakt se gasi kada nema više novca ili kada insistiraš na potvrdi na infoliniji distributera." data-en="Contact stops when money runs out or when you insist on confirmation on the distributor info line.">Kontakt se gasi kada nema više novca ili kada insistiraš na potvrdi na infoliniji distributera.</p>
        <ul class="bullets">
          <li data-sr="Signal: broj više ne odgovara a sajt nestane." data-en="Signal: the number no longer answers and the site vanishes.">Signal: broj više ne odgovara a sajt nestane.</li>
          <li data-sr="Signal: lažni termin nema trag u sistemu distributera." data-en="Signal: the fake slot has no trace in the distributor system.">Signal: lažni termin nema trag u sistemu distributera.</li>
          <li data-sr="Signal: novi kontakt nudi povraćaj uz novu uplatu." data-en="Signal: a new contact offers recovery for another fee.">Signal: novi kontakt nudi povraćaj uz novu uplatu.</li>
          <li data-sr="Signal: isti obrazac poruke kruži pod drugim imenom distributera." data-en="Signal: the same message pattern circulates under another distributor name.">Signal: isti obrazac poruke kruži pod drugim imenom distributera.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="recovery-scam.html" data-sr="Prevara povraćaja" data-en="Recovery scam">Prevara povraćaja</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> prekineš komunikaciju i prijaviš incident." data-en="<strong>Phase threshold:</strong> you stop communication and report the incident."><strong>Prag faze:</strong> prekineš komunikaciju i prijaviš incident.</div>
      </article>
    </section>
    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Naknada pre nego što infolinija distributera potvrdi program zamene." data-en="A fee before the distributor info line confirms the replacement programme.">Naknada pre nego što infolinija distributera potvrdi program zamene.</li>
        <li data-sr="Link koji ne vodi na isti domen kao zvanični sajt sa računa." data-en="A link that does not lead to the same domain as the official site on the bill.">Link koji ne vodi na isti domen kao zvanični sajt sa računa.</li>
        <li data-sr="Traže se kodovi sa kartice ili lozinka portala." data-en="Card codes or portal passwords are requested.">Traže se kodovi sa kartice ili lozinka portala.</li>
        <li data-sr="Uplata na fizičko lice, kripto ili darovne kartice." data-en="Payment to a private person, crypto, or gift cards.">Uplata na fizičko lice, kripto ili darovne kartice.</li>
        <li data-sr="Pritisak da platiš istog dana zbog navodnog isključenja." data-en="Pressure to pay the same day due to a claimed cut-off.">Pritisak da platiš istog dana zbog navodnog isključenja.</li>
        <li data-sr="Poziv sa sintetičkim glasom i hitnim rokom." data-en="A call with a synthetic voice and urgent deadline.">Poziv sa sintetičkim glasom i hitnim rokom.</li>
        <li data-sr="Nema pisanog obaveštenja u poštanskom sandučetu ili na portalu." data-en="No written notice in the mailbox or on the portal.">Nema pisanog obaveštenja u poštanskom sandučetu ili na portalu.</li>
        <li data-sr="Odbijaju da sačekaju dok ne pozoveš broj sa zadnje strane računa." data-en="They refuse to wait while you call the number on the back of the bill.">Odbijaju da sačekaju dok ne pozoveš broj sa zadnje strane računa.</li>
        <li data-sr="Isti šablon SMS-a prijavljen kao prevara." data-en="The same SMS template is reported as fraud.">Isti šablon SMS-a prijavljen kao prevara.</li>
        <li data-sr="Nakon uplate traže još jednu taksu za isti termin." data-en="After payment they ask another fee for the same slot.">Nakon uplate traže još jednu taksu za isti termin.</li>
      </ul>
    </section>
    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Kanal i identitet" data-en="Channel and identity">Kanal i identitet</div>
          <ul class="bullets">
            <li data-sr="Da li link vodi na isti domen koji piše na zvaničnom sajtu distributera." data-en="Whether the link leads to the same domain shown on the distributor’s official site.">Da li link vodi na isti domen koji piše na zvaničnom sajtu distributera.</li>
            <li data-sr="Da li infolinija potvrđuje SMS ili poziv kada je zoveš sa broja sa računa." data-en="Whether the info line confirms the SMS or call when you dial from the bill context.">Da li infolinija potvrđuje SMS ili poziv kada je zoveš sa broja sa računa.</li>
            <li data-sr="Da li postoji obaveštenje o zameni u korisničkom portalu." data-en="Whether replacement notice exists in the customer portal.">Da li postoji obaveštenje o zameni u korisničkom portalu.</li>
            <li data-sr="Da li se broj pozivaoca poklapa sa javno objavljenim brojevima." data-en="Whether the caller ID matches publicly listed numbers.">Da li se broj pozivaoca poklapa sa javno objavljenim brojevima.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Novac i postupak" data-en="Money and process">Novac i postupak</div>
          <ul class="bullets">
            <li data-sr="Da li zvanični sajt opisuje ovu naknadu i način plaćanja." data-en="Whether the official site describes this fee and how to pay.">Da li zvanični sajt opisuje ovu naknadu i način plaćanja.</li>
            <li data-sr="Da li bi distributer tražio darovne kartice za zakazivanje." data-en="Whether a distributor would ask for gift cards to book.">Da li bi distributer tražio darovne kartice za zakazivanje.</li>
            <li data-sr="Da li banka upozorava na sumnjivu uplatu kada opišeš svrhu." data-en="Whether the bank warns about a suspicious payment when you state the purpose.">Da li banka upozorava na sumnjivu uplatu kada opišeš svrhu.</li>
            <li data-sr="Da li pauza od 24 sata menja ton u pretnju." data-en="Whether a 24-hour pause changes the tone to threats.">Da li pauza od 24 sata menja ton u pretnju.</li>
          </ul>
        </div>
      </div>
    </section>
    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
      <p class="muted" data-sr="Više negativnih odgovora ukazuje na prevaru." data-en="Multiple negative answers point to a scam.">Više negativnih odgovora ukazuje na prevaru.</p>
      <ul class="bullets">
        <li data-sr="Da li sam platio montažu pre nego što sam zvao distributera na javni broj." data-en="Did I pay for installation before calling the distributor public number.">Da li sam platio montažu pre nego što sam zvao distributera na javni broj.</li>
        <li data-sr="Da li domen linka odgovara sajtu sa računa." data-en="Does the link domain match the site on the bill.">Da li domen linka odgovara sajtu sa računa.</li>
        <li data-sr="Da li traže lozinku portala ili kod sa kartice." data-en="Are they asking for portal password or card code.">Da li traže lozinku portala ili kod sa kartice.</li>
        <li data-sr="Da li je uplata tražena na darovne kartice." data-en="Was payment requested via gift cards.">Da li je uplata tražena na darovne kartice.</li>
        <li data-sr="Da li postoji isti zahtev u zvaničnom portalu ili pismu." data-en="Does the same request appear in the official portal or letter.">Da li postoji isti zahtev u zvaničnom portalu ili pismu.</li>
        <li data-sr="Da li bih ovaj korak poslao električaru od poverenja pre uplate." data-en="Would I send this step to a trusted electrician before paying.">Da li bih ovaj korak poslao električaru od poverenja pre uplate.</li>
        <li data-sr="Da li me tera da ne zovem distributera direktno." data-en="Do they push me not to call the distributor directly.">Da li me tera da ne zovem distributera direktno.</li>
        <li data-sr="Da li je jezik poruke generički za sve zemlje." data-en="Is the message wording generic for all countries.">Da li je jezik poruke generički za sve zemlje.</li>
        <li data-sr="Da li termin ima broj zahteva koji infolinija potvrđuje." data-en="Does the slot have a request number the info line confirms.">Da li termin ima broj zahteva koji infolinija potvrđuje.</li>
        <li data-sr="Da li novi kontakt nudi refundaciju uz novu uplatu." data-en="Does a new contact offer a refund for another fee.">Da li novi kontakt nudi refundaciju uz novu uplatu.</li>
        <li data-sr="Da li je broj iz SMS-a isti kao na zvaničnom sajtu." data-en="Is the SMS number the same as on the official site.">Da li je broj iz SMS-a isti kao na zvaničnom sajtu.</li>
        <li data-sr="Da li bih prijavio ovaj SMS operateru i distributeru." data-en="Would I report this SMS to the operator and distributor.">Da li bih prijavio ovaj SMS operateru i distributeru.</li>
      </ul>
    </section>
    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Prekini uplate i ne šalji kodove ili lozinke." data-en="Stop payments and do not send codes or passwords.">Prekini uplate i ne šalji kodove ili lozinke.</li>
        <li data-sr="Sačuvaj SMS, brojeve pozivaoca i URL adrese." data-en="Save SMS, caller IDs, and URLs.">Sačuvaj SMS, brojeve pozivaoca i URL adrese.</li>
        <li data-sr="Pozovi banku ako je deljen podatak sa kartice ili izvršena uplata." data-en="Call the bank if card data was shared or a payment was made.">Pozovi banku ako je deljen podatak sa kartice ili izvršena uplata.</li>
        <li data-sr="Proveri termin na infoliniji distributera sa računa, ne iz poruke." data-en="Verify the slot on the distributor info line from the bill, not the message.">Proveri termin na infoliniji distributera sa računa, ne iz poruke.</li>
        <li data-sr="Prijavi incident operateru, distributeru i policiji." data-en="Report to the operator, distributor, and police.">Prijavi incident operateru, distributeru i policiji.</li>
      </ol>
    </section>
    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
      <p data-sr="Osoba se plaši isključenja. Predložite zajednički poziv na javni broj distributera i ne plaćanje preko linka iz SMS-a." data-en="Someone fears disconnection. Suggest calling the distributor public number together and not paying via an SMS link.">Osoba se plaši isključenja. Predložite zajednički poziv na javni broj distributera i ne plaćanje preko linka iz SMS-a.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li je već plaćeno ili uneta kartica." data-en="Whether payment was made or a card was entered.">Da li je već plaćeno ili uneta kartica.</li>
            <li data-sr="Da li postoji pismo ili obaveštenje u portalu o zameni." data-en="Whether there is a letter or portal notice about replacement.">Da li postoji pismo ili obaveštenje u portalu o zameni.</li>
            <li data-sr="Da li infolinija potvrđuje isti rok kao u SMS-u." data-en="Whether the info line confirms the same deadline as the SMS.">Da li infolinija potvrđuje isti rok kao u SMS-u.</li>
            <li data-sr="Da li hitnost nestaje ako zatražiš pisan odgovor." data-en="Does urgency vanish if you ask for a written reply.">Da li hitnost nestaje ako zatražiš pisan odgovor.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Distributer ne zakazuje zamenu uz darovne kartice." data-en="The distributor does not book replacement via gift cards.">Distributer ne zakazuje zamenu uz darovne kartice.</li>
            <li data-sr="Prvo proveravamo sajt i broj sa računa, ne link iz poruke." data-en="We first check the site and bill number, not the link from the message.">Prvo proveravamo sajt i broj sa računa, ne link iz poruke.</li>
            <li data-sr="Možemo sutra da potvrdimo termin bez gubitka usluge ako je sve legitimno." data-en="We can confirm the slot tomorrow without losing service if it is legitimate.">Možemo sutra da potvrdimo termin bez gubitka usluge ako je sve legitimno.</li>
            <li data-sr="Ako ne mogu da sačekaju proveru, prekidamo razgovor." data-en="If they cannot wait for verification, we end the conversation.">Ako ne mogu da sačekaju proveru, prekidamo razgovor.</li>
          </ul>
        </div>
      </div>
    </section>
    
  `
};
