window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["business-license-renewal-scam"] = {
  raw_html: `

    <section class="card">
      <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
      <p data-sr="Prevarant šalje mejl kao registar ili agencija i tvrdi da dozvola ističe uz rok za obnovu." data-en="The fraudster emails as a registry or agency claiming a license expires with a renewal deadline.">Prevarant šalje mejl kao registar ili agencija i tvrdi da dozvola ističe uz rok za obnovu.</p>
      <p data-sr="Link vodi na klon koji krade pristupne podatke ili naplaćuje nepostojeću naknadu." data-en="The link leads to a clone that steals credentials or charges a non-existent fee.">Link vodi na klon koji krade pristupne podatke ili naplaćuje nepostojeću naknadu.</p>
      <div class="callout" data-sr="<strong>Model:</strong> Lažno upozorenje → portal → uplata ili prijava → krađa." data-en="<strong>Model:</strong> Fake alert → portal → payment or login → theft."><strong>Model:</strong> Lažno upozorenje → portal → uplata ili prijava → krađa.</div>
    </section>

    <section class="card">
      <h2 data-sr="Zašto ljudi pristaju" data-en="Why people comply">Zašto ljudi pristaju</h2>
      <p data-sr="Vlasnici firmi žele izbeći kazne i zatvaranje delatnosti." data-en="Business owners want to avoid fines and closure.">Vlasnici firmi žele izbeći kazne i zatvaranje delatnosti.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Signali" data-en="Signals">Signali</div>
          <ul class="bullets">
            <li data-sr="Mejl na generičku administraciju bez vašeg broja predmeta." data-en="Email to generic administration without your case number.">Mejl na generičku administraciju bez vašeg broja predmeta.</li>
            <li data-sr="Rok koji ne odgovara vašem iskustvu sa registracijom." data-en="A deadline that does not match your registration experience.">Rok koji ne odgovara vašem iskustvu sa registracijom.</li>
            <li data-sr="Link sa sličnim domenom koji nije pravi državni portal." data-en="A link with a similar domain that is not the real state portal.">Link sa sličnim domenom koji nije pravi državni portal.</li>
            <li data-sr="Zahtev za pun pristup e‑fakturi ili banci kroz istu formu." data-en="Request for full e-invoice or bank access through the same form.">Zahtev za pun pristup e‑fakturi ili banci kroz istu formu.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Cilj" data-en="Goal">Cilj</div>
          <ul class="bullets">
            <li data-sr="Krađa pristupa poslovnim nalozima." data-en="Theft of access to business accounts.">Krađa pristupa poslovnim nalozima.</li>
            <li data-sr="Naplata lažne obnove." data-en="Charging for fake renewal.">Naplata lažne obnove.</li>
            <li data-sr="Prikupljanje podataka za BEC napad." data-en="Collecting data for a BEC attack.">Prikupljanje podataka za BEC napad.</li>
            <li data-sr="Pritisak da zaposleni brzo kliknu bez IT provere." data-en="Pressure for staff to click fast without IT checks.">Pritisak da zaposleni brzo kliknu bez IT provere.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching)">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Jedan uplaćen korak često vodi ka narednom zahtevu." data-en="One paid step often leads to the next demand.">Jedan uplaćen korak često vodi ka narednom zahtevu.</p>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Ulaz: mejl ili poziv na firmu" data-en="Phase 1 — Entry: email or call to the company">Faza 1 — Ulaz: mejl ili poziv na firmu</h3>
        <p data-sr="Stiže upozorenje o isteku dozvole ili registracije." data-en="A license or registration expiry warning arrives.">Stiže upozorenje o isteku dozvole ili registracije.</p>
        <p data-sr="Pošiljalac koristi ime registra ali pogrešan domen." data-en="The sender uses a registry name but the wrong domain.">Pošiljalac koristi ime registra ali pogrešan domen.</p>
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
        <p data-sr="Navodi se kazna ili brisanje firme ako se ne plati danas." data-en="A fine or company deletion is cited unless you pay today.">Navodi se kazna ili brisanje firme ako se ne plati danas.</p>
        <p data-sr="Traži se direktorov potpis ili pristup nalogu radi provere." data-en="The director signature or account access is requested for checks.">Traži se direktorov potpis ili pristup nalogu radi provere.</p>
        <ul class="bullets">
            <li data-sr="Iznos takse deluje mali u odnosu na obećanu korist ili iznos koji vam pripada." data-en="The fee feels small compared to the promised benefit or amount owed.">Iznos takse deluje mali u odnosu na obećanu korist ili iznos koji vam pripada.</li>
            <li data-sr="Objašnjenje koristi generičke fraze bez broja predmeta koji proveravate vi." data-en="The explanation uses generic phrases without a case number you can verify yourself.">Objašnjenje koristi generičke fraze bez broja predmeta koji proveravate vi.</li>
            <li data-sr="Prevarant ponavlja da zakon zahteva uplatu danas." data-en="The fraudster repeats that the law requires payment today.">Prevarant ponavlja da zakon zahteva uplatu danas.</li>
            <li data-sr="Traže se podaci koji nisu potrebni za prvi korak u praksi." data-en="Data is requested that is not needed for the first step in practice.">Traže se podaci koji nisu potrebni za prvi korak u praksi.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="business-email-compromise.html" data-sr="Kompromitacija poslovnog mejla" data-en="Business email compromise">Kompromitacija poslovnog mejla</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
            <li><a href="fake-permit-license-scam.html" data-sr="Lažne dozvole" data-en="Fake permit scam">Lažne dozvole</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta prihvati priču o roku bez nezavisne potvrde." data-en="<strong>Threshold:</strong> the target accepts the deadline story without independent confirmation."><strong>Prag faze:</strong> meta prihvati priču o roku bez nezavisne potvrde.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Forma, link ili uplatnica" data-en="Phase 3 — Form, link, or payment slip">Faza 3 — Forma, link ili uplatnica</h3>
        <p data-sr="Otvara se forma za uplatu ili prijavu koja nije na pravom portalu." data-en="A payment or login form opens that is not on the real portal.">Otvara se forma za uplatu ili prijavu koja nije na pravom portalu.</p>
        <p data-sr="Traže se lozinka e‑pošte firme ili token." data-en="The company email password or token is requested.">Traže se lozinka e‑pošte firme ili token.</p>
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
        <p data-sr="Novac ili pristup odlaze prevarantu." data-en="Money or access goes to the fraudster.">Novac ili pristup odlaze prevarantu.</p>
        <p data-sr="Mogu uslediti lažni mejlovi ka klijentima firme." data-en="Fake emails to the company clients may follow.">Mogu uslediti lažni mejlovi ka klijentima firme.</p>
        <ul class="bullets">
            <li data-sr="Novac odlazi na račun koji brzo isprazne ili prebace." data-en="Money moves to an account that is emptied or forwarded quickly.">Novac odlazi na račun koji brzo isprazne ili prebace.</li>
            <li data-sr="Podaci se koriste za prijavu na druge servise." data-en="Data is used to sign up for other services.">Podaci se koriste za prijavu na druge servise.</li>
            <li data-sr="Prevarant traži još jednu sitnu uplatu radi završetka." data-en="The fraudster asks for one more small payment to finish.">Prevarant traži još jednu sitnu uplatu radi završetka.</li>
            <li data-sr="Korisnik dobija lažnu potvrdu u PDF-u bez pravnog efekta." data-en="The user receives a fake PDF confirmation with no legal effect.">Korisnik dobija lažnu potvrdu u PDF-u bez pravnog efekta.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="tax-authority-impersonation.html" data-sr="Poreska uprava" data-en="Tax authority impersonation">Poreska uprava</a></li>
            <li><a href="identity-theft.html" data-sr="Krađa identiteta" data-en="Identity theft">Krađa identiteta</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> izvrši se štetna transakcija ili otključa se pristup nalozima." data-en="<strong>Threshold:</strong> a harmful transaction runs or account access is unlocked."><strong>Prag faze:</strong> izvrši se štetna transakcija ili otključa se pristup nalozima.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Otkrivanje" data-en="Phase 5 — Discovery">Faza 5 — Otkrivanje</h3>
        <p data-sr="Pravi registar nema evidenciju o uplati ili prijavi." data-en="The real registry has no payment or filing record.">Pravi registar nema evidenciju o uplati ili prijavi.</p>
        <p data-sr="IT otkrije prijavu sa nepoznate lokacije na poslovni mejl." data-en="IT spots a login from an unknown location on business mail.">IT otkrije prijavu sa nepoznate lokacije na poslovni mejl.</p>
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
        <p data-sr="Resetovati lozinke, uključiti MFA, obavestiti banku i klijente ako treba." data-en="Reset passwords, enable MFA, notify bank and clients if needed.">Resetovati lozinke, uključiti MFA, obavestiti banku i klijente ako treba.</p>
        <p data-sr="Obnovu raditi samo kroz zvaničan portal koji ručno ukucate." data-en="Do renewal only through an official portal you type manually.">Obnovu raditi samo kroz zvaničan portal koji ručno ukucate.</p>
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
            <li data-sr="Mejl sa reply-to na drugoj adresi." data-en="Email with reply-to on another address.">Mejl sa reply-to na drugoj adresi.</li>
            <li data-sr="Zahtev za hitnu uplatu preko uplatnice na treće lice." data-en="Urgent payment via slip to a third party.">Zahtev za hitnu uplatu preko uplatnice na treće lice.</li>
            <li data-sr="PDF sa linkom koji vodi van državnog domena." data-en="PDF with a link leaving the state domain.">PDF sa linkom koji vodi van državnog domena.</li>
            <li data-sr="Tvrdnja da samo ovaj link važi danas." data-en="Claim only this link works today.">Tvrdnja da samo ovaj link važi danas.</li>
            <li data-sr="Zahtev za deljenje MFA koda sa službenikom." data-en="Request to share an MFA code with an official.">Zahtev za deljenje MFA koda sa službenikom.</li>
            <li data-sr="Lažni pečat ili logo registra na mejlu." data-en="Fake registry stamp or logo on the email.">Lažni pečat ili logo registra na mejlu.</li>
            <li data-sr="Poziv koji traži lozinku portala firme." data-en="Call asking for the company portal password.">Poziv koji traži lozinku portala firme.</li>
            <li data-sr="Cena obnove mnogo iznad tarife bez objašnjenja." data-en="Renewal price far above tariff without explanation.">Cena obnove mnogo iznad tarife bez objašnjenja.</li>
            <li data-sr="Traženje liste klijenata ili ugovora." data-en="Request for a client list or contracts.">Traženje liste klijenata ili ugovora.</li>
            <li data-sr="Zabrana konsultacije sa knjigovodstvom." data-en="Forbidden to consult accounting.">Zabrana konsultacije sa knjigovodstvom.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
<ol class="steps">
        <li data-sr="Uporedite domen sa zvaničnim portalom države." data-en="Compare the domain to the official state portal.">Uporedite domen sa zvaničnim portalom države.</li>
        <li data-sr="Pitajte knjigovodstvo da li je rok stvaran." data-en="Ask accounting whether the deadline is real.">Pitajte knjigovodstvo da li je rok stvaran.</li>
        <li data-sr="Ne unosite poslovne kredencijale na link iz mejla." data-en="Do not enter business credentials on an email link.">Ne unosite poslovne kredencijale na link iz mejla.</li>
        <li data-sr="Proverite zaglavlja mejla (SPF/DKIM) ako znate kako." data-en="Check email headers (SPF/DKIM) if you know how.">Proverite zaglavlja mejla (SPF/DKIM) ako znate kako.</li>
        <li data-sr="Pozovite registar javno objavljenim brojem." data-en="Call the registry on a public number.">Pozovite registar javno objavljenim brojem.</li>
        <li data-sr="Proverite da li ista vest stoji na portalu bez prijave." data-en="Check whether the same news appears on the portal without login.">Proverite da li ista vest stoji na portalu bez prijave.</li>
        <li data-sr="Koristite bookmark zvaničnog portala, ne link iz poruke." data-en="Use a bookmark to the official portal, not the message link.">Koristite bookmark zvaničnog portala, ne link iz poruke.</li>
        <li data-sr="Obavestite IT ako više zaposlenih dobije isti mejl." data-en="Tell IT if multiple staff get the same email.">Obavestite IT ako više zaposlenih dobije isti mejl.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
<ul class="bullets">
            <li data-sr="Da li mejl dolazi sa pravog domena?" data-en="Does the email come from the correct domain?">Da li mejl dolazi sa pravog domena?</li>
            <li data-sr="Da li postoji broj predmeta koji proveravate?" data-en="Is there a case number you can verify?">Da li postoji broj predmeta koji proveravate?</li>
            <li data-sr="Da li rok odgovara prethodnim obnovama?" data-en="Does the deadline match prior renewals?">Da li rok odgovara prethodnim obnovama?</li>
            <li data-sr="Da li traže lozinku mejla firme?" data-en="Do they ask for the company email password?">Da li traže lozinku mejla firme?</li>
            <li data-sr="Da li je primalac uplate budžet?" data-en="Is the payee the treasury?">Da li je primalac uplate budžet?</li>
            <li data-sr="Da li mogu sačekati poziv knjigovodstvu?" data-en="Can I wait for accounting to call back?">Da li mogu sačekati poziv knjigovodstvu?</li>
            <li data-sr="Da li link koristi homoglif u domenu?" data-en="Does the link use a homoglyph in the domain?">Da li link koristi homoglif u domenu?</li>
            <li data-sr="Da li traže MFA kod?" data-en="Do they ask for an MFA code?">Da li traže MFA kod?</li>
            <li data-sr="Da li je attachment omogućio makroe?" data-en="Does the attachment enable macros?">Da li je attachment omogućio makroe?</li>
            <li data-sr="Da li isti šablon koriste druge firme u regionu?" data-en="Do other local firms report the same template?">Da li isti šablon koriste druge firme u regionu?</li>
            <li data-sr="Da li traže pristup bankovnom portalu?" data-en="Do they want access to the bank portal?">Da li traže pristup bankovnom portalu?</li>
            <li data-sr="Da li zvanični portal prikazuje isti zahtev posle prijave?" data-en="Does the official portal show the same request after login?">Da li zvanični portal prikazuje isti zahtev posle prijave?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
<ol class="steps">
        <li data-sr="Ne klikati link; otvoriti portal ručno." data-en="Do not click; open the portal manually.">Ne klikati link; otvoriti portal ručno.</li>
        <li data-sr="Obavestiti IT i zaustaviti dalje unošenje podataka." data-en="Notify IT and stop further data entry.">Obavestiti IT i zaustaviti dalje unošenje podataka.</li>
        <li data-sr="Promeniti lozinke ako su unete." data-en="Change passwords if they were entered.">Promeniti lozinke ako su unete.</li>
        <li data-sr="Prijaviti mejl kao fišing." data-en="Report the email as phishing.">Prijaviti mejl kao fišing.</li>
        <li data-sr="Proveriti stanje registracije zvaničnim upitom." data-en="Check registration status with an official query.">Proveriti stanje registracije zvaničnim upitom.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li je neko uneo lozinku?" data-en="Did anyone enter a password?">Da li je neko uneo lozinku?</li>
            <li data-sr="Koji tačno link su otvorili?" data-en="Which exact link did they open?">Koji tačno link su otvorili?</li>
            <li data-sr="Da li je uplata izvršena?" data-en="Was a payment made?">Da li je uplata izvršena?</li>
            <li data-sr="Ko je primalac uplate?" data-en="Who was the payee?">Ko je primalac uplate?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Poslovna obnova ide kroz zvaničan portal ili šalter, ne kroz hitan mejl." data-en="Business renewal goes through an official portal or desk, not a rush email.">Poslovna obnova ide kroz zvaničan portal ili šalter, ne kroz hitan mejl.</li>
            <li data-sr="Hajde da uporedimo domen sa bookmarkom koji imamo." data-en="Let us compare the domain to our bookmark.">Hajde da uporedimo domen sa bookmarkom koji imamo.</li>
            <li data-sr="Bolje jedan dan kašnjenja nego kompromitovan mejl." data-en="Better one day late than a compromised mailbox.">Bolje jedan dan kašnjenja nego kompromitovan mejl.</li>
            <li data-sr="Knjigovodstvo može potvrditi rok iz evidencije." data-en="Accounting can confirm the deadline from records.">Knjigovodstvo može potvrditi rok iz evidencije.</li>
          </ul>
        </div>
      </div>
    </section>
`
};
