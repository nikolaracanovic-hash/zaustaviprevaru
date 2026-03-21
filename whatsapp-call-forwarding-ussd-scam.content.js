window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["whatsapp-call-forwarding-ussd-scam"] = {
  raw_html: `

    <section class="card">
      <h2 data-sr="Uvod: USSD kodovi za prosleđivanje poziva i poruka" data-en="Introduction: USSD codes for call and message forwarding">Uvod: USSD kodovi za prosleđivanje poziva i poruka</h2>

      <p data-sr="Prevarant šalje uputstvo da ukucate niz znakova na telefonu koji aktivira prosleđivanje poziva ili SMS-a na njihov broj; tako mogu da primaju vaše kodove i pozive banke." data-en="The fraudster sends instructions to dial a character sequence that activates call or SMS forwarding to their number; then they can receive your codes and bank calls.">Prevarant šalje uputstvo da ukucate niz znakova na telefonu koji aktivira prosleđivanje poziva ili SMS-a na njihov broj; tako mogu da primaju vaše kodove i pozive banke.</p>
      <p data-sr="Često se pakuje kao aktivacija WhatsApp-a, test linije ili pomoć operatera." data-en="It is often packaged as WhatsApp activation, line test, or carrier help.">Često se pakuje kao aktivacija WhatsApp-a, test linije ili pomoć operatera.</p>
      <div class="callout" data-sr="<strong>Model:</strong> lažno uputstvo → USSD → prosleđivanje → presretanje kodova i poziva." data-en="<strong>Model:</strong> fake instructions → USSD → forwarding → intercepting codes and calls."><strong>Model:</strong> lažno uputstvo → USSD → prosleđivanje → presretanje kodova i poziva.</div>
    </section>

    <section class="card">
      <h2 data-sr="Zašto žrtva posluša" data-en="Why the victim complies">Zašto žrtva posluša</h2>

      <p data-sr="Korisnik ne zna šta USSD radi; instrukcija izgleda tehnički i kratka; pritisak je na brzinu." data-en="The user does not know what USSD does; the steps look technical and brief; pressure is on speed.">Korisnik ne zna šta USSD radi; instrukcija izgleda tehnički i kratka; pritisak je na brzinu.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Lažni okviri priče" data-en="Fake story frames">Lažni okviri priče</div>
          <ul class="bullets">
            <li data-sr="Morate uključiti prosleđivanje da bi WhatsApp radio na dva uređaja." data-en="You must enable forwarding so WhatsApp works on two devices.">Morate uključiti prosleđivanje da bi WhatsApp radio na dva uređaja.</li>
            <li data-sr="Operater traži ovaj kod da ukloni spam." data-en="The carrier needs this code to remove spam.">Operater traži ovaj kod da ukloni spam.</li>
            <li data-sr="Policija traži trag poziva; unesite kod da sačuvate broj." data-en="Police need a call trace; enter the code to preserve the number.">Policija traži trag poziva; unesite kod da sačuvate broj.</li>
            <li data-sr="Posao od kuće zahteva ovu tehničku proveru." data-en="Remote work requires this technical check.">Posao od kuće zahteva ovu tehničku proveru.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Posledice prosleđivanja" data-en="Forwarding consequences">Posledice prosleđivanja</div>
          <ul class="bullets">
            <li data-sr="Pozivi banke odlaze na tuđi broj." data-en="Bank calls go to another number.">Pozivi banke odlaze na tuđi broj.</li>
            <li data-sr="SMS sa OTP stiže napadaču ako je podešeno prosleđivanje poruka." data-en="SMS with OTP reaches the attacker if message forwarding is set.">SMS sa OTP stiže napadaču ako je podešeno prosleđivanje poruka.</li>
            <li data-sr="Ne čujete zvono jer se poziv preusmeri odmah." data-en="You may not hear ringing because the call redirects immediately.">Ne čujete zvono jer se poziv preusmeri odmah.</li>
            <li data-sr="Teško uočljivo dok ne proverite podešavanja ili operatera." data-en="Hard to notice until you check settings or with the carrier.">Teško uočljivo dok ne proverite podešavanja ili operatera.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching).">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Jedan USSD poziv može trajati sekunde; šteta traje dok se prosleđivanje ne isključi." data-en="One USSD dial can take seconds; harm lasts until forwarding is disabled.">Jedan USSD poziv može trajati sekunde; šteta traje dok se prosleđivanje ne isključi.</p>
      <article class="phase ">
        <h3 class="phase-title" data-sr="Faza 1 — Ulaz: poruka ili glasovna uputstva" data-en="Phase 1 — Entry: message or voice instructions">Faza 1 — Ulaz: poruka ili glasovna uputstva</h3>
        <p data-sr="Stiže slika sa tačnim nizom znakova koji treba ukucati i pozvati." data-en="An image arrives with the exact character sequence to dial.">Stiže slika sa tačnim nizom znakova koji treba ukucati i pozvati.</p>
        <p data-sr="Izvor je čet, naglašena je hitnost i zabranjeno je pitati drugoga." data-en="The source is chat, urgency is stressed, and you are told not to ask someone else.">Izvor je čet, naglašena je hitnost i zabranjeno je pitati drugoga.</p>
        <ul class="bullets">
            <li data-sr="Koraci su predstavljeni kao zvanična procedura." data-en="Steps are framed as official procedure.">Koraci su predstavljeni kao zvanična procedura.</li>
            <li data-sr="Koristi se žargon * i # bez objašnjenja." data-en="Jargon with * and # without explanation.">Koristi se žargon * i # bez objašnjenja.</li>
            <li data-sr="Tvrdi se da će se nalog obrisati ako ne uradite odmah." data-en="They claim the account will be deleted if you do not act now.">Tvrdi se da će se nalog obrisati ako ne uradite odmah.</li>
            <li data-sr="Isti šablon se šalje kao forward u grupi." data-en="The same template is forwarded in a group.">Isti šablon se šalje kao forward u grupi.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta poveruje da je USSD bezopasan rutinski korak." data-en="<strong>Threshold:</strong> the target believes USSD is a harmless routine step."><strong>Prag faze:</strong> meta poveruje da je USSD bezopasan rutinski korak.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Unos USSD i potvrda sistema" data-en="Phase 2 — USSD entry and system confirmation">Faza 2 — Unos USSD i potvrda sistema</h3>
        <p data-sr="Telefon prikaže kratku poruku ili ikonu da je usluga aktivirana; korisnik ne razume tekst." data-en="The phone shows a brief message or icon that a service activated; the user does not understand the text.">Telefon prikaže kratku poruku ili ikonu da je usluga aktivirana; korisnik ne razume tekst.</p>
        <ul class="bullets">
            <li data-sr="Nema velikog upozorenja na ekranu." data-en="No big warning on screen.">Nema velikog upozorenja na ekranu.</li>
            <li data-sr="Može se tražiti da ponovite isti niz ako nije prošlo." data-en="You may be asked to repeat the same sequence if it did not work.">Može se tražiti da ponovite isti niz ako nije prošlo.</li>
            <li data-sr="Napadač kaže da je to normalno." data-en="The attacker says that is normal.">Napadač kaže da je to normalno.</li>
            <li data-sr="Zatim sledi molba da im pošaljete kod koji stigne u SMS-u." data-en="Then they ask you to send the code that arrives by SMS.">Zatim sledi molba da im pošaljete kod koji stigne u SMS-u.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="whatsapp-verification-code-call-scam.html" data-sr="WhatsApp: poziv i kod" data-en="WhatsApp: verification code call scam">WhatsApp: poziv i kod</a></li>
            <li><a href="number-verification-scam.html" data-sr="Verifikacija broja" data-en="Number verification scam">Verifikacija broja</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> prosleđivanje postane aktivno na mreži operatera." data-en="<strong>Threshold:</strong> forwarding becomes active on the carrier network."><strong>Prag faze:</strong> prosleđivanje postane aktivno na mreži operatera.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Prag: presretanje kodova i poziva" data-en="Phase 3 — Threshold: intercepting codes and calls">Faza 3 — Prag: presretanje kodova i poziva</h3>
        <p data-sr="Napadač prima OTP i može odgovoriti na poziv banke umesto vas ako je scenarij podešen tako." data-en="The attacker receives OTPs and may answer bank calls instead of you if the scenario is set that way.">Napadač prima OTP i može odgovoriti na poziv banke umesto vas ako je scenarij podešen tako.</p>
        <p data-sr="Paralelno može raditi i prijava WhatsApp-a na drugom uređaju." data-en="Parallel WhatsApp sign-in on another device may also run.">Paralelno može raditi i prijava WhatsApp-a na drugom uređaju.</p>
        <ul class="bullets">
            <li data-sr="Vi ne vidite SMS jer je prosleđen." data-en="You do not see the SMS because it was forwarded.">Vi ne vidite SMS jer je prosleđen.</li>
            <li data-sr="Banka misli da ste vi na vezi." data-en="The bank thinks you are on the line.">Banka misli da ste vi na vezi.</li>
            <li data-sr="Lažni operater traži dodatne korake dok traje preusmerenje." data-en="A fake operator asks for more steps while forwarding lasts.">Lažni operater traži dodatne korake dok traje preusmerenje.</li>
            <li data-sr="Šteta raste ako se ne proveri kod operatera brzo." data-en="Damage grows if the carrier is not checked quickly.">Šteta raste ako se ne proveri kod operatera brzo.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> osetljivi pozivi ili poruke završe na tuđem broju." data-en="<strong>Threshold:</strong> sensitive calls or messages end on another number."><strong>Prag faze:</strong> osetljivi pozivi ili poruke završe na tuđem broju.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Zloupotreba naloga ili novca" data-en="Phase 4 — Abuse of account or money">Faza 4 — Zloupotreba naloga ili novca</h3>
        <p data-sr="Kombinacija prosleđivanja i kodova omogućava transfere ili preuzimanje četa." data-en="Forwarding plus codes enables transfers or chat takeover.">Kombinacija prosleđivanja i kodova omogućava transfere ili preuzimanje četa.</p>
        <ul class="bullets">
            <li data-sr="Odobrenje transakcije glasom ili tasterima na pozivu." data-en="Transaction approval by voice or keypad on a call.">Odobrenje transakcije glasom ili tasterima na pozivu.</li>
            <li data-sr="Reset lozinke ako je kod iz SMS-a prosleđen." data-en="Password reset if the SMS code was forwarded.">Reset lozinke ako je kod iz SMS-a prosleđen.</li>
            <li data-sr="Širenje istog USSD uputstva u vašim grupama." data-en="Spreading the same USSD script in your groups.">Širenje istog USSD uputstva u vašim grupama.</li>
            <li data-sr="Zadržavanje prosleđivanja danima dok ne proverite." data-en="Forwarding stays on for days until you check.">Zadržavanje prosleđivanja danima dok ne proverite.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="fake-call-scam.html" data-sr="Lažni pozivi" data-en="Fake calls">Lažni pozivi</a></li>
            <li><a href="otp-interception.html" data-sr="Presretanje OTP" data-en="OTP interception">Presretanje OTP</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> izvrši se finansijska radnja ili gubitak pristupa servisu." data-en="<strong>Threshold:</strong> a financial action runs or service access is lost."><strong>Prag faze:</strong> izvrši se finansijska radnja ili gubitak pristupa servisu.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Otkrivanje" data-en="Phase 5 — Discovery">Faza 5 — Otkrivanje</h3>
        <p data-sr="Primetite da ne stižu SMS-ovi, pozivi ispadaju, ili banka javlja aktivnost koju ne prepoznajete." data-en="You notice missing SMS, dropped calls, or the bank reports activity you do not recognize.">Primetite da ne stižu SMS-ovi, pozivi ispadaju, ili banka javlja aktivnost koju ne prepoznajete.</p>
        <ul class="bullets">
            <li data-sr="Operater na uvidu kaže da je prosleđivanje uključeno." data-en="Carrier support says forwarding is on.">Operater na uvidu kaže da je prosleđivanje uključeno.</li>
            <li data-sr="U podešavanjima telefona vide se sumnjive rute." data-en="Phone settings show suspicious routes.">U podešavanjima telefona vide se sumnjive rute.</li>
            <li data-sr="Prijatelj kaže da vas zove ali vi niste čuli." data-en="A friend says they called but you did not hear.">Prijatelj kaže da vas zove ali vi niste čuli.</li>
            <li data-sr="Shvatite da ste ukucali niz iz WhatsApp poruke." data-en="You realize you dialed a sequence from a WhatsApp message.">Shvatite da ste ukucali niz iz WhatsApp poruke.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> žrtva poveže simptome sa USSD korakom." data-en="<strong>Threshold:</strong> the victim ties symptoms to the USSD step."><strong>Prag faze:</strong> žrtva poveže simptome sa USSD korakom.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Sanacija" data-en="Phase 6 — Remediation">Faza 6 — Sanacija</h3>
        <p data-sr="Pozovite operatera zvaničnim brojem, isključite sva prosleđivanja, promenite lozinke servisa, obavestite banku, proverite WhatsApp sesije." data-en="Call the carrier on an official number, disable all forwarding, change service passwords, notify the bank, check WhatsApp sessions.">Pozovite operatera zvaničnim brojem, isključite sva prosleđivanja, promenite lozinke servisa, obavestite banku, proverite WhatsApp sesije.</p>
        <p data-sr="Ne ukucavajte USSD nizove iz četa ni pod kojim razlogom." data-en="Do not dial USSD sequences from chat under any pretext.">Ne ukucavajte USSD nizove iz četa ni pod kojim razlogom.</p>
        <ul class="bullets">
            <li data-sr="Zatražite od operatera potvrdu da nema aktivnog preusmerenja." data-en="Ask the carrier to confirm no active redirects.">Zatražite od operatera potvrdu da nema aktivnog preusmerenja.</li>
            <li data-sr="Uključite dvostepenu proveru na WhatsApp-u posle čišćenja." data-en="Enable WhatsApp two-step verification after cleanup.">Uključite dvostepenu proveru na WhatsApp-u posle čišćenja.</li>
            <li data-sr="Proverite istoriju poziva na računu ako je dostupna." data-en="Review call history on the bill if available.">Proverite istoriju poziva na računu ako je dostupna.</li>
            <li data-sr="Objasnite ukućanima da USSD nije igrčka." data-en="Explain at home that USSD is not a toy.">Objasnite ukućanima da USSD nije igrčka.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="whatsapp-takeover.html" data-sr="Preuzimanje WhatsApp naloga" data-en="WhatsApp takeover">Preuzimanje WhatsApp naloga</a></li>
            <li><a href="bank-impersonation.html" data-sr="Lažna banka" data-en="Bank impersonation">Lažna banka</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> prosleđivanje je isključeno i bezbednost naloga je ojačana." data-en="<strong>Threshold:</strong> forwarding is off and account security is hardened."><strong>Prag faze:</strong> prosleđivanje je isključeno i bezbednost naloga je ojačana.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
<ul class="bullets">
            <li data-sr="Bilo ko traži da ukucate *#...# ili sličan niz iz četa." data-en="Anyone asks you to dial *#...# or similar from chat.">Bilo ko traži da ukucate *#...# ili sličan niz iz četa.</li>
            <li data-sr="Objašnjenje da je korak obavezan za WhatsApp." data-en="Explanation that the step is required for WhatsApp.">Objašnjenje da je korak obavezan za WhatsApp.</li>
            <li data-sr="Slika sa brojem na koji se prosleđuje." data-en="An image showing the number forwarded to.">Slika sa brojem na koji se prosleđuje.</li>
            <li data-sr="Zabrana da pitate operatera pre nego što ukucate." data-en="Discouraging you from asking the carrier before dialing.">Zabrana da pitate operatera pre nego što ukucate.</li>
            <li data-sr="Nakon USSD traže se kodovi iz SMS-a." data-en="After USSD they ask for SMS codes.">Nakon USSD traže se kodovi iz SMS-a.</li>
            <li data-sr="Isti uputni list širi se u više grupa." data-en="The same instruction sheet spreads across groups.">Isti uputni list širi se u više grupa.</li>
            <li data-sr="Tvrdnja da će broj biti trajno ukraden ako ne uradite korak." data-en="A claim the number will be stolen forever unless you act.">Tvrdnja da će broj biti trajno ukraden ako ne uradite korak.</li>
            <li data-sr="Mešanje teme policije i tehničkih kodova." data-en="Mixing police topics with technical codes.">Mešanje teme policije i tehničkih kodova.</li>
            <li data-sr="Neobično ponašanje poziva: odmah prebacivanje na govornu poštu drugog broja." data-en="Odd call behavior: immediate switch to another number voicemail.">Neobično ponašanje poziva: odmah prebacivanje na govornu poštu drugog broja.</li>
            <li data-sr="Lažni test koji traje više od jednog kratkog poziva." data-en="A fake test lasting more than one short dial.">Lažni test koji traje više od jednog kratkog poziva.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
<ol class="steps">
        <li data-sr="Ne birajte USSD kodove iz WhatsApp poruka." data-en="Do not dial USSD codes from WhatsApp messages.">Ne birajte USSD kodove iz WhatsApp poruka.</li>
        <li data-sr="Pozovite operatera zvaničnim brojem i pitajte da li je prosleđivanje aktivno." data-en="Call the carrier official number and ask if forwarding is active.">Pozovite operatera zvaničnim brojem i pitajte da li je prosleđivanje aktivno.</li>
        <li data-sr="Proverite u podešavanjima telefona stavke za pozive i poruke." data-en="Check phone settings for call and message options.">Proverite u podešavanjima telefona stavke za pozive i poruke.</li>
        <li data-sr="Ako ste već ukucali, odmah tražite isključivanje prosleđivanja." data-en="If you already dialed, immediately ask to disable forwarding.">Ako ste već ukucali, odmah tražite isključivanje prosleđivanja.</li>
        <li data-sr="Ne šaljite kodove iz SMS-a nikome posle sumnjivog koraka." data-en="Do not send SMS codes to anyone after a suspicious step.">Ne šaljite kodove iz SMS-a nikome posle sumnjivog koraka.</li>
        <li data-sr="Objasnite starijima da * i # kodovi nisu igra." data-en="Explain to elders that * and # codes are not a game.">Objasnite starijima da * i # kodovi nisu igra.</li>
        <li data-sr="Proverite račun ili aplikaciju operatera za aktivne usluge." data-en="Check the carrier app or bill for active services.">Proverite račun ili aplikaciju operatera za aktivne usluge.</li>
        <li data-sr="Prijavite broj koji širi uputstvo." data-en="Report the number spreading the instructions.">Prijavite broj koji širi uputstvo.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
<ul class="bullets">
            <li data-sr="Da li razumem šta ovaj niz radi na mom telefonu?" data-en="Do I understand what this sequence does on my phone?">Da li razumem šta ovaj niz radi na mom telefonu?</li>
            <li data-sr="Da li je operater ikada ranije tražio ovakav korak?" data-en="Has the carrier ever asked for this step before?">Da li je operater ikada ranije tražio ovakav korak?</li>
            <li data-sr="Da li postoji isto uputstvo na zvaničnom sajtu operatera?" data-en="Is the same guide on the carrier official site?">Da li postoji isto uputstvo na zvaničnom sajtu operatera?</li>
            <li data-sr="Da li me neko tera da ne pitam drugog?" data-en="Is someone pushing me not to ask anyone else?">Da li me neko tera da ne pitam drugog?</li>
            <li data-sr="Da li je u poruci naveden broj za prosleđivanje?" data-en="Does the message name a forwarding number?">Da li je u poruci naveden broj za prosleđivanje?</li>
            <li data-sr="Da li sam posle toga prestao da dobijam SMS?" data-en="Did I stop receiving SMS after that?">Da li sam posle toga prestao da dobijam SMS?</li>
            <li data-sr="Da li mogu da sačekam i da odem u salon operatera?" data-en="Can I wait and go to a carrier store?">Da li mogu da sačekam i da odem u salon operatera?</li>
            <li data-sr="Da li bih ovo uradio na telefonu šefa bez pitanja?" data-en="Would I do this on the boss phone without asking?">Da li bih ovo uradio na telefonu šefa bez pitanja?</li>
            <li data-sr="Da li je ovo povezano sa pomoći oko WhatsApp naloga?" data-en="Is this tied to help with a WhatsApp account?">Da li je ovo povezano sa pomoći oko WhatsApp naloga?</li>
            <li data-sr="Da li je ista slika uputstva viralna na mreži?" data-en="Is the same instruction image viral online?">Da li je ista slika uputstva viralna na mreži?</li>
            <li data-sr="Da li znam kako da isključim prosleđivanje kod svog operatera?" data-en="Do I know how to disable forwarding with my carrier?">Da li znam kako da isključim prosleđivanje kod svog operatera?</li>
            <li data-sr="Da li bih trebalo da obavestim porodicu da ne širi listu?" data-en="Should I tell family not to forward the sheet?">Da li bih trebalo da obavestim porodicu da ne širi listu?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
<ol class="steps">
        <li data-sr="Prestanite da birate bilo kakve kodove iz četa." data-en="Stop dialing any codes from chat.">Prestanite da birate bilo kakve kodove iz četa.</li>
        <li data-sr="Pozovite operatera i zatražite potpunu proveru prosleđivanja." data-en="Call the carrier and request a full forwarding check.">Pozovite operatera i zatražite potpunu proveru prosleđivanja.</li>
        <li data-sr="Obavestite banku ako ste delili kodove ili imate sumnjive transakcije." data-en="Notify the bank if you shared codes or see suspicious transactions.">Obavestite banku ako ste delili kodove ili imate sumnjive transakcije.</li>
        <li data-sr="Odjavite WhatsApp veb sesije i uključite dvostepenu proveru." data-en="Log out WhatsApp web sessions and enable two-step verification.">Odjavite WhatsApp veb sesije i uključite dvostepenu proveru.</li>
        <li data-sr="Obrišite poruku sa uputstvom iz grupa da drugi ne bi birali." data-en="Delete the instruction message from groups so others do not dial.">Obrišite poruku sa uputstvom iz grupa da drugi ne bi birali.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si ukucao niz sa zvezdicom i tarabom?" data-en="Did you dial a sequence with star and hash?">Da li si ukucao niz sa zvezdicom i tarabom?</li>
            <li data-sr="Da li si posle toga prestao da dobijaš SMS?" data-en="Did you stop getting SMS after that?">Da li si posle toga prestao da dobijaš SMS?</li>
            <li data-sr="Da li si nekome slao kod posle toga?" data-en="Did you send someone a code after that?">Da li si nekome slao kod posle toga?</li>
            <li data-sr="Da li si video broj na slici uputstva?" data-en="Did you see a number on the instruction image?">Da li si video broj na slici uputstva?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="USSD iz četa je kao ključ; ne biramo ga bez operatera." data-en="USSD from chat is like a key; we do not dial it without the carrier.">USSD iz četa je kao ključ; ne biramo ga bez operatera.</li>
            <li data-sr="Hajde da pozovemo 300 ili broj sa računa operatera odmah." data-en="Let us call 300 or the number on the carrier bill now.">Hajde da pozovemo 300 ili broj sa računa operatera odmah.</li>
            <li data-sr="WhatsApp ne traži tajne telefonske kodove za aktivaciju." data-en="WhatsApp does not ask for secret phone codes to activate.">WhatsApp ne traži tajne telefonske kodove za aktivaciju.</li>
            <li data-sr="Ako ne razumeš poruku sistema posle biranja, javi operateru." data-en="If you do not understand the system message after dialing, tell the carrier.">Ako ne razumeš poruku sistema posle biranja, javi operateru.</li>
          </ul>
        </div>
      </div>
    </section>
`
};
