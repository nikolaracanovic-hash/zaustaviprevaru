window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["address-verification-scam"] = {
  raw_html: `

    <section class="card">
      <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
      <p data-sr="Prevarant tvrdi da državni ili socijalni registar ne poklapa vašu adresu sa drugim podacima." data-en="The fraudster claims a state or social register does not match your address with other data.">Prevarant tvrdi da državni ili socijalni registar ne poklapa vašu adresu sa drugim podacima.</p>
      <p data-sr="Traži se verifikacija preko linka ili naknada da bi se izbegla suspenzija isplata ili usluga." data-en="Verification via a link or a fee is requested to avoid suspension of payments or services.">Traži se verifikacija preko linka ili naknada da bi se izbegla suspenzija isplata ili usluga.</p>
      <div class="callout" data-sr="<strong>Model:</strong> Lažno neslaganje → forma → krađa podataka ili novca." data-en="<strong>Model:</strong> Fake mismatch → form → data or money theft."><strong>Model:</strong> Lažno neslaganje → forma → krađa podataka ili novca.</div>
    </section>

    <section class="card">
      <h2 data-sr="Zašto ljudi pristaju" data-en="Why people comply">Zašto ljudi pristaju</h2>
      <p data-sr="Strah od gubitka beneficija ili isporuke zbog pogrešne adrese." data-en="Fear of losing benefits or delivery due to a wrong address.">Strah od gubitka beneficija ili isporuke zbog pogrešne adrese.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Signali" data-en="Signals">Signali</div>
          <ul class="bullets">
            <li data-sr="Mejl koji izgleda kao obaveštenje portala e‑uprave." data-en="Email resembling an e-government portal notice.">Mejl koji izgleda kao obaveštenje portala e‑uprave.</li>
            <li data-sr="Zahtev da potvrdite adresu klikom na link bez logovanja na pravi portal." data-en="Request to confirm address by clicking a link without logging into the real portal.">Zahtev da potvrdite adresu klikom na link bez logovanja na pravi portal.</li>
            <li data-sr="Tvrdnja da će paketi ili uplate stati zbog adrese." data-en="Claim parcels or payments will stop because of address.">Tvrdnja da će paketi ili uplate stati zbog adrese.</li>
            <li data-sr="Naknada za usklađivanje evidencije." data-en="A fee for record alignment.">Naknada za usklađivanje evidencije.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Cilj" data-en="Goal">Cilj</div>
          <ul class="bullets">
            <li data-sr="Prikupljanje adrese, JMBG i kontakata za druge prevare." data-en="Collecting address, national ID, and contacts for other scams.">Prikupljanje adrese, JMBG i kontakata za druge prevare.</li>
            <li data-sr="Naplata lažne naknade." data-en="Charging a fake fee.">Naplata lažne naknade.</li>
            <li data-sr="Priprema za lažnu isporuku ili carinu." data-en="Preparing for fake delivery or customs scams.">Priprema za lažnu isporuku ili carinu.</li>
            <li data-sr="Test da li meta reaguje na administrativnu temu." data-en="Testing whether the target reacts to an admin topic.">Test da li meta reaguje na administrativnu temu.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching)">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Jedan uplaćen korak često vodi ka narednom zahtevu." data-en="One paid step often leads to the next demand.">Jedan uplaćen korak često vodi ka narednom zahtevu.</p>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Ulaz: mejl, SMS ili poziv" data-en="Phase 1 — Entry: email, SMS, or call">Faza 1 — Ulaz: mejl, SMS ili poziv</h3>
        <p data-sr="Stiže obaveštenje o neusklađenosti adrese u evidenciji." data-en="A notice arrives about address mismatch in a register.">Stiže obaveštenje o neusklađenosti adrese u evidenciji.</p>
        <p data-sr="Pošiljalac koristi generičke fraze o sistemskoj proveri." data-en="The sender uses generic system check phrases.">Pošiljalac koristi generičke fraze o sistemskoj proveri.</p>
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
        <p data-sr="Navodi se rok i posledice po isplate ili usluge." data-en="A deadline and consequences for payments or services appear.">Navodi se rok i posledice po isplate ili usluge.</p>
        <p data-sr="Traže se podaci koje već imaju u zvaničnoj bazi ako je sve u redu." data-en="Data is requested that they should already hold if all is well.">Traže se podaci koje već imaju u zvaničnoj bazi ako je sve u redu.</p>
        <ul class="bullets">
            <li data-sr="Iznos takse deluje mali u odnosu na obećanu korist ili iznos koji vam pripada." data-en="The fee feels small compared to the promised benefit or amount owed.">Iznos takse deluje mali u odnosu na obećanu korist ili iznos koji vam pripada.</li>
            <li data-sr="Objašnjenje koristi generičke fraze bez broja predmeta koji proveravate vi." data-en="The explanation uses generic phrases without a case number you can verify yourself.">Objašnjenje koristi generičke fraze bez broja predmeta koji proveravate vi.</li>
            <li data-sr="Prevarant ponavlja da zakon zahteva uplatu danas." data-en="The fraudster repeats that the law requires payment today.">Prevarant ponavlja da zakon zahteva uplatu danas.</li>
            <li data-sr="Traže se podaci koji nisu potrebni za prvi korak u praksi." data-en="Data is requested that is not needed for the first step in practice.">Traže se podaci koji nisu potrebni za prvi korak u praksi.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="vishing.html" data-sr="Višing" data-en="Vishing">Višing</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
            <li><a href="smishing.html" data-sr="Smišing" data-en="Smishing">Smišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta prihvati priču o roku bez nezavisne potvrde." data-en="<strong>Threshold:</strong> the target accepts the deadline story without independent confirmation."><strong>Prag faze:</strong> meta prihvati priču o roku bez nezavisne potvrde.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Forma, link ili uplatnica" data-en="Phase 3 — Form, link, or payment slip">Faza 3 — Forma, link ili uplatnica</h3>
        <p data-sr="Link otvara formu koja nije na domenu državnog portala." data-en="The link opens a form not on a state portal domain.">Link otvara formu koja nije na domenu državnog portala.</p>
        <p data-sr="Ponekad se traži mala uplata za verifikacioni kod." data-en="Sometimes a small payment is requested for a verification code.">Ponekad se traži mala uplata za verifikacioni kod.</p>
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
        <p data-sr="Mogu uslediti lažne poruke o pošiljkama." data-en="Fake parcel messages may follow.">Mogu uslediti lažne poruke o pošiljkama.</p>
        <ul class="bullets">
            <li data-sr="Novac odlazi na račun koji brzo isprazne ili prebace." data-en="Money moves to an account that is emptied or forwarded quickly.">Novac odlazi na račun koji brzo isprazne ili prebace.</li>
            <li data-sr="Podaci se koriste za prijavu na druge servise." data-en="Data is used to sign up for other services.">Podaci se koriste za prijavu na druge servise.</li>
            <li data-sr="Prevarant traži još jednu sitnu uplatu radi završetka." data-en="The fraudster asks for one more small payment to finish.">Prevarant traži još jednu sitnu uplatu radi završetka.</li>
            <li data-sr="Korisnik dobija lažnu potvrdu u PDF-u bez pravnog efekta." data-en="The user receives a fake PDF confirmation with no legal effect.">Korisnik dobija lažnu potvrdu u PDF-u bez pravnog efekta.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="social-benefits-scam.html" data-sr="Socijalne beneficije" data-en="Social benefits scams">Socijalne beneficije</a></li>
            <li><a href="package-redelivery-scam.html" data-sr="Lažna dostava" data-en="Package redelivery scam">Lažna dostava</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> izvrši se štetna transakcija ili otključa se pristup nalozima." data-en="<strong>Threshold:</strong> a harmful transaction runs or account access is unlocked."><strong>Prag faze:</strong> izvrši se štetna transakcija ili otključa se pristup nalozima.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Otkrivanje" data-en="Phase 5 — Discovery">Faza 5 — Otkrivanje</h3>
        <p data-sr="Zvanična služba nema zahtev za verifikaciju na vaše ime." data-en="The official service has no verification request in your name.">Zvanična služba nema zahtev za verifikaciju na vaše ime.</p>
        <p data-sr="Adresa u evidenciji odgovara onome što znate sa šaltera." data-en="The address on record matches what you know from the desk.">Adresa u evidenciji odgovara onome što znate sa šaltera.</p>
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
        <p data-sr="Prijaviti prevare i blokirati sumnjive uplate." data-en="Report scams and block suspicious payments.">Prijaviti prevare i blokirati sumnjive uplate.</p>
        <p data-sr="Proveru adrese raditi prijavom na zvaničan nalog ili šalter, ne preko linka iz poruke." data-en="Verify address via an official account or desk, not a message link.">Proveru adrese raditi prijavom na zvaničan nalog ili šalter, ne preko linka iz poruke.</p>
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
            <li data-sr="Zahtev za potvrdu adrese van prijavljenog naloga na portalu." data-en="Address confirmation outside your logged-in portal account.">Zahtev za potvrdu adrese van prijavljenog naloga na portalu.</li>
            <li data-sr="Naknada za podatak koji država već čuva." data-en="A fee for data the state already stores.">Naknada za podatak koji država već čuva.</li>
            <li data-sr="Link sa homoglifom u domenu." data-en="Link with a homoglyph in the domain.">Link sa homoglifom u domenu.</li>
            <li data-sr="SMS sa brojem koji se ne poklapa sa službom." data-en="SMS from a number that does not match the service.">SMS sa brojem koji se ne poklapa sa službom.</li>
            <li data-sr="Tvrdnja da je kurir zadržao paket zbog adrese." data-en="Claim a courier held a parcel due to address.">Tvrdnja da je kurir zadržao paket zbog adrese.</li>
            <li data-sr="Zahtev za fotografiju kućnog broja i lične karte." data-en="Request for a house number photo and ID.">Zahtev za fotografiju kućnog broja i lične karte.</li>
            <li data-sr="Ponuda besplatne ispravke uz skrivenu uplatu." data-en="Free correction offer with hidden payment.">Ponuda besplatne ispravke uz skrivenu uplatu.</li>
            <li data-sr="Zabrana logovanja na pravi portal." data-en="Forbidden to log in to the real portal.">Zabrana logovanja na pravi portal.</li>
            <li data-sr="Mejl na engleskom za lokalnu adresu." data-en="English email for a local address.">Mejl na engleskom za lokalnu adresu.</li>
            <li data-sr="Traženje pristupa nalogu pošte." data-en="Request for mailbox account access.">Traženje pristupa nalogu pošte.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
<ol class="steps">
        <li data-sr="Ulogujte se na zvaničan portal ručno ukucan i proverite obaveštenja." data-en="Log in to the official portal by typing it and check notices.">Ulogujte se na zvaničan portal ručno ukucan i proverite obaveštenja.</li>
        <li data-sr="Pozovite službu javnim brojem i pitajte za predmet." data-en="Call the service on a public number and ask about a case.">Pozovite službu javnim brojem i pitajte za predmet.</li>
        <li data-sr="Ne potvrđujte adresu kroz link iz nepotvrđene poruke." data-en="Do not confirm address via a link from an unverified message.">Ne potvrđujte adresu kroz link iz nepotvrđene poruke.</li>
        <li data-sr="Uporedite adresu sa ugovorom o zakupu ili računom." data-en="Compare the address to a lease or bill.">Uporedite adresu sa ugovorom o zakupu ili računom.</li>
        <li data-sr="Proverite da li isti tekst stoji na zvaničnom sajtu." data-en="Check whether the same text appears on the official site.">Proverite da li isti tekst stoji na zvaničnom sajtu.</li>
        <li data-sr="Ne šaljite slike lične karte preko četa." data-en="Do not send ID photos over chat.">Ne šaljite slike lične karte preko četa.</li>
        <li data-sr="Proverite glavu mejla i domen odgovora." data-en="Check email headers and reply domain.">Proverite glavu mejla i domen odgovora.</li>
        <li data-sr="Obavestite ukućane koji dele adresu." data-en="Tell household members who share the address.">Obavestite ukućane koji dele adresu.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
<ul class="bullets">
            <li data-sr="Da li vidim isto obaveštenje u svom nalogu na portalu?" data-en="Do I see the same notice in my portal account?">Da li vidim isto obaveštenje u svom nalogu na portalu?</li>
            <li data-sr="Da li link vodi na pravi domen?" data-en="Does the link lead to the real domain?">Da li link vodi na pravi domen?</li>
            <li data-sr="Da li traže novac?" data-en="Do they ask for money?">Da li traže novac?</li>
            <li data-sr="Da li postoji broj predmeta?" data-en="Is there a case number?">Da li postoji broj predmeta?</li>
            <li data-sr="Da li me tera da ne zovem službu?" data-en="Do they push me not to call the service?">Da li me tera da ne zovem službu?</li>
            <li data-sr="Da li je primalac uplate jasan?" data-en="Is the payee clear?">Da li je primalac uplate jasan?</li>
            <li data-sr="Da li mogu sačekati sutra?" data-en="Can I wait until tomorrow?">Da li mogu sačekati sutra?</li>
            <li data-sr="Da li traže lozinku portala?" data-en="Do they ask for portal password?">Da li traže lozinku portala?</li>
            <li data-sr="Da li je poruka personalizovana ili generička?" data-en="Is the message personalized or generic?">Da li je poruka personalizovana ili generička?</li>
            <li data-sr="Da li kurirska firma potvrđuje zadržavanje paketa?" data-en="Does the courier firm confirm a held parcel?">Da li kurirska firma potvrđuje zadržavanje paketa?</li>
            <li data-sr="Da li socijalna služba šalje ovakve linkove?" data-en="Does social service send such links?">Da li socijalna služba šalje ovakve linkove?</li>
            <li data-sr="Da li postoji trag u poštanskom sandučetu?" data-en="Is there a trace in the mailbox?">Da li postoji trag u poštanskom sandučetu?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
<ol class="steps">
        <li data-sr="Ne klikati link; otvoriti portal ručno." data-en="Do not click; open the portal manually.">Ne klikati link; otvoriti portal ručno.</li>
        <li data-sr="Pozovite službu zvaničnim brojem." data-en="Call the service on an official number.">Pozovite službu zvaničnim brojem.</li>
        <li data-sr="Ako ste uneli podatke, promenite lozinke povezane sa adresom." data-en="If you entered data, change passwords tied to the address.">Ako ste uneli podatke, promenite lozinke povezane sa adresom.</li>
        <li data-sr="Prijaviti SMS operateru." data-en="Report the SMS to the carrier.">Prijaviti SMS operateru.</li>
        <li data-sr="Sačuvati poruku kao dokaz." data-en="Save the message as evidence.">Sačuvati poruku kao dokaz.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si kliknuo link?" data-en="Did you click the link?">Da li si kliknuo link?</li>
            <li data-sr="Da li si uneo lozinku portala?" data-en="Did you enter a portal password?">Da li si uneo lozinku portala?</li>
            <li data-sr="Da li si platio?" data-en="Did you pay?">Da li si platio?</li>
            <li data-sr="Koja služba je navodno tražila potvrdu?" data-en="Which service supposedly asked for confirmation?">Koja služba je navodno tražila potvrdu?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Adresa se proverava u nalogu na zvaničnom portalu ili na šalteru." data-en="Address is verified in an account on the official portal or at a desk.">Adresa se proverava u nalogu na zvaničnom portalu ili na šalteru.</li>
            <li data-sr="Hajde da otvorimo portal iz bookmarka." data-en="Let us open the portal from a bookmark.">Hajde da otvorimo portal iz bookmarka.</li>
            <li data-sr="Bolje zakasniti isplatu jedan dan nego dati podatke lažnoj formi." data-en="Better delay a payment one day than give data to a fake form.">Bolje zakasniti isplatu jedan dan nego dati podatke lažnoj formi.</li>
            <li data-sr="Dostava i socijalne službe retko traže hitan link bez traga." data-en="Delivery and social services rarely demand urgent links without a trail.">Dostava i socijalne službe retko traže hitan link bez traga.</li>
          </ul>
        </div>
      </div>
    </section>
`
};
