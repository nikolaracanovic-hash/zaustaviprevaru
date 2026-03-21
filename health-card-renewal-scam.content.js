window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["health-card-renewal-scam"] = {
  raw_html: `

    <section class="card">
      <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
      <p data-sr="Prevarant šalje SMS ili mejl kao zdravstvena ustanova i tvrdi da kartica ističe ili da evidencija nije ažurirana." data-en="The fraudster sends SMS or email as a health body and claims the card expires or records are not updated.">Prevarant šalje SMS ili mejl kao zdravstvena ustanova i tvrdi da kartica ističe ili da evidencija nije ažurirana.</p>
      <p data-sr="Traži se hitna potvrda na lažnoj stranici ili mala naknada za obnovu." data-en="Urgent confirmation on a fake page or a small renewal fee is requested.">Traži se hitna potvrda na lažnoj stranici ili mala naknada za obnovu.</p>
      <div class="callout" data-sr="<strong>Model:</strong> Upozorenje o isteku → link → unos podataka ili uplate → krađa." data-en="<strong>Model:</strong> Expiry warning → link → data entry or payment → theft."><strong>Model:</strong> Upozorenje o isteku → link → unos podataka ili uplate → krađa.</div>
    </section>

    <section class="card">
      <h2 data-sr="Zašto ljudi pristaju" data-en="Why people comply">Zašto ljudi pristaju</h2>
      <p data-sr="Ljudi plaše se gubitka lečenja i brzo kliknu na link iz zdravstvene teme." data-en="People fear losing care and quickly click health-themed links.">Ljudi plaše se gubitka lečenja i brzo kliknu na link iz zdravstvene teme.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Signali" data-en="Signals">Signali</div>
          <ul class="bullets">
            <li data-sr="SMS sa linkom za obaveznu obnovu kartice ili podataka." data-en="SMS with a link for mandatory card or data renewal.">SMS sa linkom za obaveznu obnovu kartice ili podataka.</li>
            <li data-sr="Tvrdnja da će pokriće stati ako ne potvrdite danas." data-en="Claim coverage will stop unless you confirm today.">Tvrdnja da će pokriće stati ako ne potvrdite danas.</li>
            <li data-sr="Lažni logo zdravstvene ustanove u poruci." data-en="A fake health institution logo in the message.">Lažni logo zdravstvene ustanove u poruci.</li>
            <li data-sr="Zahtev za broj kartice van zvaničnog portala." data-en="Card number requested outside the official portal.">Zahtev za broj kartice van zvaničnog portala.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Cilj" data-en="Goal">Cilj</div>
          <ul class="bullets">
            <li data-sr="Krađa podataka za druge prijave." data-en="Stealing data for other applications.">Krađa podataka za druge prijave.</li>
            <li data-sr="Naplata lažne naknade za obnovu." data-en="Charging a fake renewal fee.">Naplata lažne naknade za obnovu.</li>
            <li data-sr="Priprema za dodatni pritisak pozivom." data-en="Preparing for follow-up pressure by call.">Priprema za dodatni pritisak pozivom.</li>
            <li data-sr="Test osetljivosti na zdravstvenu temu." data-en="Testing sensitivity to a health topic.">Test osetljivosti na zdravstvenu temu.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching)">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Jedan uplaćen korak često vodi ka narednom zahtevu." data-en="One paid step often leads to the next demand.">Jedan uplaćen korak često vodi ka narednom zahtevu.</p>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Ulaz: SMS, mejl ili poziv" data-en="Phase 1 — Entry: SMS, email, or call">Faza 1 — Ulaz: SMS, mejl ili poziv</h3>
        <p data-sr="Stiže obaveštenje o isteku kartice ili neusklađenosti podataka." data-en="A notice arrives about card expiry or mismatched data.">Stiže obaveštenje o isteku kartice ili neusklađenosti podataka.</p>
        <p data-sr="Poruka izgleda kao zdravstveno obaveštenje na prvi pogled." data-en="The message looks like a health notice at first glance.">Poruka izgleda kao zdravstveno obaveštenje na prvi pogled.</p>
        <ul class="bullets">
            <li data-sr="Poruka koristi reči kao što su hitno, zadnji dan ili suspenzija prava." data-en="The message uses words like urgent, last day, or suspension of rights.">Poruka koristi reči kao što su hitno, zadnji dan ili suspenzija prava.</li>
            <li data-sr="Pošiljalac nije adresa na koju ste ranije primali poštu od iste ustanove." data-en="The sender is not an address where you previously received mail from that body.">Pošiljalac nije adresa na koju ste ranije primali poštu od iste ustanove.</li>
            <li data-sr="Traži se klik na link umesto obaveštenja u fizičkom obliku." data-en="A link click is requested instead of a paper notice.">Traži se klik na link umesto obaveštenja u fizičkom obliku.</li>
            <li data-sr="Broj pozivaoca se ne poklapa sa javno objavljenim brojem." data-en="The caller number does not match a publicly listed number.">Broj pozivaoca se ne poklapa sa javno objavljenim brojem.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta odluči da veruje poruci pre zvanične provere." data-en="<strong>Threshold:</strong> the target decides to trust the message before official verification."><strong>Prag faze:</strong> meta odluči da veruje poruci pre zvanične provere.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Rokovi, iznosi i pritisak" data-en="Phase 2 — Deadlines, amounts, and pressure">Faza 2 — Rokovi, iznosi i pritisak</h3>
        <p data-sr="Navodi se rok do kraja dana da izbegnete suspenziju." data-en="An end-of-day deadline appears to avoid suspension.">Navodi se rok do kraja dana da izbegnete suspenziju.</p>
        <p data-sr="Traže se lični podaci radi usklađivanja evidencije." data-en="Personal data is requested to align records.">Traže se lični podaci radi usklađivanja evidencije.</p>
        <ul class="bullets">
            <li data-sr="Iznos takse deluje mali u odnosu na obećanu korist ili iznos koji vam pripada." data-en="The fee feels small compared to the promised benefit or amount owed.">Iznos takse deluje mali u odnosu na obećanu korist ili iznos koji vam pripada.</li>
            <li data-sr="Objašnjenje koristi generičke fraze bez broja predmeta koji proveravate vi." data-en="The explanation uses generic phrases without a case number you can verify yourself.">Objašnjenje koristi generičke fraze bez broja predmeta koji proveravate vi.</li>
            <li data-sr="Prevarant ponavlja da zakon zahteva uplatu danas." data-en="The fraudster repeats that the law requires payment today.">Prevarant ponavlja da zakon zahteva uplatu danas.</li>
            <li data-sr="Traže se podaci koji nisu potrebni za prvi korak u praksi." data-en="Data is requested that is not needed for the first step in practice.">Traže se podaci koji nisu potrebni za prvi korak u praksi.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="healthcare-impersonation.html" data-sr="Zdravstvena kasa" data-en="Health insurance impersonation">Zdravstvena kasa</a></li>
            <li><a href="smishing.html" data-sr="Smišing" data-en="Smishing">Smišing</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta prihvati priču o roku bez nezavisne potvrde." data-en="<strong>Threshold:</strong> the target accepts the deadline story without independent confirmation."><strong>Prag faze:</strong> meta prihvati priču o roku bez nezavisne potvrde.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Forma, link ili uplatnica" data-en="Phase 3 — Form, link, or payment slip">Faza 3 — Forma, link ili uplatnica</h3>
        <p data-sr="Link otvara formu koja traži više nego zvanična obnova." data-en="The link opens a form asking for more than official renewal.">Link otvara formu koja traži više nego zvanična obnova.</p>
        <p data-sr="Ponekad se traži i mala uplata karticom." data-en="Sometimes a small card payment is also requested.">Ponekad se traži i mala uplata karticom.</p>
        <ul class="bullets">
            <li data-sr="Forma traži broj kartice, CVV ili lozinku naloga." data-en="The form asks for card number, CVV, or account password.">Forma traži broj kartice, CVV ili lozinku naloga.</li>
            <li data-sr="Uplatnica ima primalca koji nije budžetski ili jasan organ." data-en="The payment slip beneficiary is not a treasury or clear agency.">Uplatnica ima primalca koji nije budžetski ili jasan organ.</li>
            <li data-sr="Traži se prenos na kripto ili digitalni novčanik." data-en="A transfer to crypto or a digital wallet is requested.">Traži se prenos na kripto ili digitalni novčanik.</li>
            <li data-sr="Potvrda o uplati se šalje preko četa umesto kroz portal." data-en="Payment proof is sent via chat instead of through a portal.">Potvrda o uplati se šalje preko četa umesto kroz portal.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta počne unos novca ili osetljivih podataka." data-en="<strong>Threshold:</strong> the target begins entering money or sensitive data."><strong>Prag faze:</strong> meta počne unos novca ili osetljivih podataka.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Prag: novac ili podaci napuštaju vas" data-en="Phase 4 — Threshold: money or data leaves you">Faza 4 — Prag: novac ili podaci napuštaju vas</h3>
        <p data-sr="Podaci ili novac odlaze prevarantu." data-en="Data or money goes to the fraudster.">Podaci ili novac odlaze prevarantu.</p>
        <p data-sr="Može uslediti traženje dodatne administrativne naknade." data-en="A further administrative fee may be requested.">Može uslediti traženje dodatne administrativne naknade.</p>
        <ul class="bullets">
            <li data-sr="Novac odlazi na račun koji brzo isprazne ili prebace." data-en="Money moves to an account that is emptied or forwarded quickly.">Novac odlazi na račun koji brzo isprazne ili prebace.</li>
            <li data-sr="Podaci se koriste za prijavu na druge servise." data-en="Data is used to sign up for other services.">Podaci se koriste za prijavu na druge servise.</li>
            <li data-sr="Prevarant traži još jednu sitnu uplatu radi završetka." data-en="The fraudster asks for one more small payment to finish.">Prevarant traži još jednu sitnu uplatu radi završetka.</li>
            <li data-sr="Korisnik dobija lažnu potvrdu u PDF-u bez pravnog efekta." data-en="The user receives a fake PDF confirmation with no legal effect.">Korisnik dobija lažnu potvrdu u PDF-u bez pravnog efekta.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="identity-theft.html" data-sr="Krađa identiteta" data-en="Identity theft">Krađa identiteta</a></li>
            <li><a href="advance-fee-fraud.html" data-sr="Unapred plaćena taksa" data-en="Advance fee fraud">Unapred plaćena taksa</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> izvrši se štetna transakcija ili otključa se pristup nalozima." data-en="<strong>Threshold:</strong> a harmful transaction runs or account access is unlocked."><strong>Prag faze:</strong> izvrši se štetna transakcija ili otključa se pristup nalozima.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Otkrivanje" data-en="Phase 5 — Discovery">Faza 5 — Otkrivanje</h3>
        <p data-sr="Zdravstvena ustanova nema evidenciju o takvoj obnovi na vaše ime." data-en="The health body has no such renewal on record for you.">Zdravstvena ustanova nema evidenciju o takvoj obnovi na vaše ime.</p>
        <p data-sr="Pokriće i dalje važi po uobičajenim pravilima." data-en="Coverage still applies under usual rules.">Pokriće i dalje važi po uobičajenim pravilima.</p>
        <ul class="bullets">
            <li data-sr="Zvanična služba kaže da nema predmeta na vaše ime." data-en="The real desk says there is no case in your name.">Zvanična služba kaže da nema predmeta na vaše ime.</li>
            <li data-sr="Banka označi uplate kao sumnjive." data-en="The bank flags the transfers as suspicious.">Banka označi uplate kao sumnjive.</li>
            <li data-sr="Isti šablon poruke prijavljuju i drugi korisnici." data-en="Others report the same message pattern.">Isti šablon poruke prijavljuju i drugi korisnici.</li>
            <li data-sr="Link više ne radi ili vodi na drugu temu." data-en="The link no longer works or leads to another topic.">Link više ne radi ili vodi na drugu temu.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta shvati da zvanična evidencija ne potvrđuje priču." data-en="<strong>Threshold:</strong> the target realizes official records do not confirm the story."><strong>Prag faze:</strong> meta shvati da zvanična evidencija ne potvrđuje priču.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Sanacija" data-en="Phase 6 — Remediation">Faza 6 — Sanacija</h3>
        <p data-sr="Kontaktirati ustanovu zvaničnim brojem i prijaviti pokušaj." data-en="Contact the body on an official number and report the attempt.">Kontaktirati ustanovu zvaničnim brojem i prijaviti pokušaj.</p>
        <p data-sr="Ne koristiti link iz poruke; otvoriti sajt ručno ukucan." data-en="Do not use the message link; open the site by typing it.">Ne koristiti link iz poruke; otvoriti sajt ručno ukucan.</p>
        <ul class="bullets">
            <li data-sr="Promeniti lozinke ako su unete na sumnjivoj stranici." data-en="Change passwords if they were entered on a suspicious site.">Promeniti lozinke ako su unete na sumnjivoj stranici.</li>
            <li data-sr="Ukloniti dozvole aplikacijama ako ste ih dali tokom procesa." data-en="Remove app permissions if you granted them during the process.">Ukloniti dozvole aplikacijama ako ste ih dali tokom procesa.</li>
            <li data-sr="Prijaviti prevaru nadležnom telu za potrošače ili policiji." data-en="Report the scam to consumer bodies or police.">Prijaviti prevaru nadležnom telu za potrošače ili policiji.</li>
            <li data-sr="Obavestiti porodicu da ne šalju dokumente na isti broj." data-en="Tell family not to send documents to the same number.">Obavestiti porodicu da ne šalju dokumente na isti broj.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="recovery-scam.html" data-sr="Prevara povrata" data-en="Recovery scam">Prevara povrata</a></li>
            <li><a href="government-impersonation.html" data-sr="Državni organi" data-en="Government impersonation">Državni organi</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta prelazi na zvaničan kanal i zaustavlja dalje gubitke." data-en="<strong>Threshold:</strong> the target switches to an official channel and stops further loss."><strong>Prag faze:</strong> meta prelazi na zvaničan kanal i zaustavlja dalje gubitke.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
<ul class="bullets">
            <li data-sr="Zahtev za pun broj kartice na stranici iz SMS-a." data-en="Full card number requested on a page from SMS.">Zahtev za pun broj kartice na stranici iz SMS-a.</li>
            <li data-sr="Rok od nekoliko sati za obnovu." data-en="A few-hour renewal deadline.">Rok od nekoliko sati za obnovu.</li>
            <li data-sr="Link koji nije na domenu poznate zdravstvene ustanove." data-en="A link not on a known health body domain.">Link koji nije na domenu poznate zdravstvene ustanove.</li>
            <li data-sr="Naplata na fizičko lice." data-en="Payment to a private person.">Naplata na fizičko lice.</li>
            <li data-sr="Robot koji traži JMBG." data-en="A robot asking for national ID.">Robot koji traži JMBG.</li>
            <li data-sr="Tvrdnja da ćete platiti lečenje punim cenama." data-en="Claim you will pay full price for care.">Tvrdnja da ćete platiti lečenje punim cenama.</li>
            <li data-sr="Selfie sa dokumentom preko četa." data-en="Selfie with ID over chat.">Selfie sa dokumentom preko četa.</li>
            <li data-sr="Zahtev za lozinku portala banke." data-en="Request for bank portal password.">Zahtev za lozinku portala banke.</li>
            <li data-sr="Gramatičke greške u zvaničnom tekstu." data-en="Grammar errors in the official-looking text.">Gramatičke greške u zvaničnom tekstu.</li>
            <li data-sr="Ponuda besplatne pomoći uz skrivenu naknadu." data-en="Free help offer with a hidden fee.">Ponuda besplatne pomoći uz skrivenu naknadu.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
<ol class="steps">
        <li data-sr="Proverite obaveštenja na zvaničnom sajtu ili šalteru zdravstvene ustanove." data-en="Check notices on the official site or desk of the health body.">Proverite obaveštenja na zvaničnom sajtu ili šalteru zdravstvene ustanove.</li>
        <li data-sr="Ne unosite karticu na link iz SMS-a." data-en="Do not enter a card on a link from SMS.">Ne unosite karticu na link iz SMS-a.</li>
        <li data-sr="Uporedite broj pošiljaoca sa javno objavljenim kontaktom." data-en="Compare the sender number to a publicly listed contact.">Uporedite broj pošiljaoca sa javno objavljenim kontaktom.</li>
        <li data-sr="Pitajte u ustanovi da li zaista traže online korak." data-en="Ask the institution whether an online step is really required.">Pitajte u ustanovi da li zaista traže online korak.</li>
        <li data-sr="Proverite domen na računaru." data-en="Check the domain on a computer.">Proverite domen na računaru.</li>
        <li data-sr="Ne šaljite slike dokumenta strancima." data-en="Do not send ID images to strangers.">Ne šaljite slike dokumenta strancima.</li>
        <li data-sr="Potražite istu vest na sajtu fundusa ili kase." data-en="Look for the same news on the fund or insurer site.">Potražite istu vest na sajtu fundusa ili kase.</li>
        <li data-sr="Obavestite starije ukućane." data-en="Tell older household members.">Obavestite starije ukućane.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
<ul class="bullets">
            <li data-sr="Da li sam ja tražio obnovu pre ove poruke?" data-en="Did I request renewal before this message?">Da li sam ja tražio obnovu pre ove poruke?</li>
            <li data-sr="Da li link vodi na poznat zvanični domen?" data-en="Does the link lead to a known official domain?">Da li link vodi na poznat zvanični domen?</li>
            <li data-sr="Da li traže karticu?" data-en="Do they ask for a card?">Da li traže karticu?</li>
            <li data-sr="Da li rok deluje prekratko?" data-en="Does the deadline feel too short?">Da li rok deluje prekratko?</li>
            <li data-sr="Da li je primalac uplate jasan?" data-en="Is the payee clear?">Da li je primalac uplate jasan?</li>
            <li data-sr="Da li mogu sačekati sutra?" data-en="Can I wait until tomorrow?">Da li mogu sačekati sutra?</li>
            <li data-sr="Da li postoji isto na zvaničnom portalu?" data-en="Does the official portal show the same?">Da li postoji isto na zvaničnom portalu?</li>
            <li data-sr="Da li traže PIN ili OTP?" data-en="Do they ask for PIN or OTP?">Da li traže PIN ili OTP?</li>
            <li data-sr="Da li me tera da ne zovem ustanovu?" data-en="Do they push me not to call the institution?">Da li me tera da ne zovem ustanovu?</li>
            <li data-sr="Da li je tekst identičan drugim prijavama?" data-en="Is the text identical to other reports?">Da li je tekst identičan drugim prijavama?</li>
            <li data-sr="Da li traže pristup imejlu?" data-en="Do they want email access?">Da li traže pristup imejlu?</li>
            <li data-sr="Da li ustanova ikada traži ovako podatke?" data-en="Does the institution ever ask for data this way?">Da li ustanova ikada traži ovako podatke?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
<ol class="steps">
        <li data-sr="Zatvorite stranicu bez unosa." data-en="Close the page without entering data.">Zatvorite stranicu bez unosa.</li>
        <li data-sr="Pozovite ustanovu zvaničnim brojem." data-en="Call the body on an official number.">Pozovite ustanovu zvaničnim brojem.</li>
        <li data-sr="Ako ste uneli karticu, obavestite banku." data-en="If you entered a card, notify the bank.">Ako ste uneli karticu, obavestite banku.</li>
        <li data-sr="Sačuvajte SMS i link." data-en="Save the SMS and link.">Sačuvajte SMS i link.</li>
        <li data-sr="Prijavite operateru kao sumnjivu poruku." data-en="Report as suspicious SMS to the carrier.">Prijavite operateru kao sumnjivu poruku.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si kliknuo link?" data-en="Did you click the link?">Da li si kliknuo link?</li>
            <li data-sr="Da li si uneo broj kartice?" data-en="Did you enter a card number?">Da li si uneo broj kartice?</li>
            <li data-sr="Koji je bio tekst poruke?" data-en="What was the message text?">Koji je bio tekst poruke?</li>
            <li data-sr="Da li si platio?" data-en="Did you pay?">Da li si platio?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Obnova se proverava na šalteru ili zvaničnom portalu, ne preko SMS linka." data-en="Renewal is verified at a desk or official portal, not SMS links.">Obnova se proverava na šalteru ili zvaničnom portalu, ne preko SMS linka.</li>
            <li data-sr="Hajde da ukucamo adresu ustanove zajedno." data-en="Let us type the institution address together.">Hajde da ukucamo adresu ustanove zajedno.</li>
            <li data-sr="Bolje zakasniti na administraciju nego izgubiti novac." data-en="Better be late on admin than lose money.">Bolje zakasniti na administraciju nego izgubiti novac.</li>
            <li data-sr="Zdravstvo ne gasi pokriće jednim SMS-om bez traga." data-en="Health coverage does not stop from one SMS without a trail.">Zdravstvo ne gasi pokriće jednim SMS-om bez traga.</li>
          </ul>
        </div>
      </div>
    </section>
`
};
