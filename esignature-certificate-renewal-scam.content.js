window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["esignature-certificate-renewal-scam"] = {
  raw_html: `

    <section class="card">
      <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
      <p data-sr="Prevarant šalje upozorenje da će kvalifikovani sertifikat e-potpisa biti opozvan ako se odmah ne obnovi." data-en="The fraudster sends a warning that a qualified e-signature certificate will be revoked unless renewed immediately.">Prevarant šalje upozorenje da će kvalifikovani sertifikat e-potpisa biti opozvan ako se odmah ne obnovi.</p>
      <p data-sr="Link vodi na lažnu prijavu koja krade lozinku, OTP ili naplaćuje lažnu naknadu." data-en="The link leads to a fake login that steals password or OTP, or charges a fake fee.">Link vodi na lažnu prijavu koja krade lozinku, OTP ili naplaćuje lažnu naknadu.</p>
      <div class="callout" data-sr="<strong>Model:</strong> Lažno isteknuće → klon portal → krađa pristupa." data-en="<strong>Model:</strong> Fake expiry → portal clone → access theft."><strong>Model:</strong> Lažno isteknuće → klon portal → krađa pristupa.</div>
    </section>

    <section class="card">
      <h2 data-sr="Zašto ljudi pristaju" data-en="Why people comply">Zašto ljudi pristaju</h2>
      <p data-sr="Firme i građani zavise od e-potpisa za ugovore i državne prijave." data-en="Companies and citizens rely on e-signatures for contracts and state filings.">Firme i građani zavise od e-potpisa za ugovore i državne prijave.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Signali" data-en="Signals">Signali</div>
          <ul class="bullets">
            <li data-sr="Mejl koji kopira brend CA ili portala ali sa pogrešnim domenom." data-en="Email copying a CA or portal brand but with the wrong domain.">Mejl koji kopira brend CA ili portala ali sa pogrešnim domenom.</li>
            <li data-sr="Zahtev za OTP kod radi obnove." data-en="OTP requested for renewal.">Zahtev za OTP kod radi obnove.</li>
            <li data-sr="Rok od nekoliko sati do opoziva." data-en="A few-hour deadline until revocation.">Rok od nekoliko sati do opoziva.</li>
            <li data-sr="PDF prilog sa linkom koji maskira pravu adresu." data-en="PDF attachment with a link masking the real address.">PDF prilog sa linkom koji maskira pravu adresu.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Cilj" data-en="Goal">Cilj</div>
          <ul class="bullets">
            <li data-sr="Preuzimanje naloga za e-potpis i državne prijave." data-en="Taking over e-sign and e-government accounts.">Preuzimanje naloga za e-potpis i državne prijave.</li>
            <li data-sr="Naplata lažne obnove." data-en="Charging fake renewal.">Naplata lažne obnove.</li>
            <li data-sr="Prikupljanje MFA kodova u realnom vremenu." data-en="Harvesting MFA codes in real time.">Prikupljanje MFA kodova u realnom vremenu.</li>
            <li data-sr="Prijava lažnih dokumenata u ime žrtve." data-en="Filing fake documents in the victim name.">Prijava lažnih dokumenata u ime žrtve.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching)">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Jedan uplaćen korak često vodi ka narednom zahtevu." data-en="One paid step often leads to the next demand.">Jedan uplaćen korak često vodi ka narednom zahtevu.</p>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Ulaz: mejl ili SMS od CA" data-en="Phase 1 — Entry: email or SMS from CA">Faza 1 — Ulaz: mejl ili SMS od CA</h3>
        <p data-sr="Stiže upozorenje o isteku ili sigurnosnom incidentu na sertifikatu." data-en="A warning arrives about expiry or a security incident on the certificate.">Stiže upozorenje o isteku ili sigurnosnom incidentu na sertifikatu.</p>
        <p data-sr="Pošiljalac koristi strah od gubitka pristupa portalima." data-en="The sender uses fear of losing portal access.">Pošiljalac koristi strah od gubitka pristupa portalima.</p>
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
        <p data-sr="Navodi se tačan datum isteka koji deluje uverljivo." data-en="A precise expiry date appears convincingly.">Navodi se tačan datum isteka koji deluje uverljivo.</p>
        <p data-sr="Traži se hitna prijava radi sinhronizacije." data-en="Urgent login is requested for synchronization.">Traži se hitna prijava radi sinhronizacije.</p>
        <ul class="bullets">
            <li data-sr="Iznos takse deluje mali u odnosu na obećanu korist ili iznos koji vam pripada." data-en="The fee feels small compared to the promised benefit or amount owed.">Iznos takse deluje mali u odnosu na obećanu korist ili iznos koji vam pripada.</li>
            <li data-sr="Objašnjenje koristi generičke fraze bez broja predmeta koji proveravate vi." data-en="The explanation uses generic phrases without a case number you can verify yourself.">Objašnjenje koristi generičke fraze bez broja predmeta koji proveravate vi.</li>
            <li data-sr="Prevarant ponavlja da zakon zahteva uplatu danas." data-en="The fraudster repeats that the law requires payment today.">Prevarant ponavlja da zakon zahteva uplatu danas.</li>
            <li data-sr="Traže se podaci koji nisu potrebni za prvi korak u praksi." data-en="Data is requested that is not needed for the first step in practice.">Traže se podaci koji nisu potrebni za prvi korak u praksi.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="egovernment-login-phishing.html" data-sr="Lažna e‑uprava" data-en="E-government phishing">Lažna e‑uprava</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
            <li><a href="session-cookie-theft.html" data-sr="Krađa sesije" data-en="Session theft">Krađa sesije</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta prihvati priču o roku bez nezavisne potvrde." data-en="<strong>Threshold:</strong> the target accepts the deadline story without independent confirmation."><strong>Prag faze:</strong> meta prihvati priču o roku bez nezavisne potvrde.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Forma, link ili uplatnica" data-en="Phase 3 — Form, link, or payment slip">Faza 3 — Forma, link ili uplatnica</h3>
        <p data-sr="Klon stranice traži lozinku, OTP i ponekad broj kartice." data-en="The clone asks for password, OTP, and sometimes card number.">Klon stranice traži lozinku, OTP i ponekad broj kartice.</p>
        <p data-sr="URL sadrži sitnu razliku u slovu u odnosu na pravi domen." data-en="The URL has a subtle letter difference from the real domain.">URL sadrži sitnu razliku u slovu u odnosu na pravi domen.</p>
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
        <p data-sr="Napadač prijavljuje se na pravi portal sa ukradenim podacima." data-en="The attacker signs in to the real portal with stolen data.">Napadač prijavljuje se na pravi portal sa ukradenim podacima.</p>
        <p data-sr="Mogu se menjati kontakt brojevi ili mejl u nalogu." data-en="Contact numbers or email in the account may be changed.">Mogu se menjati kontakt brojevi ili mejl u nalogu.</p>
        <ul class="bullets">
            <li data-sr="Novac odlazi na račun koji brzo isprazne ili prebace." data-en="Money moves to an account that is emptied or forwarded quickly.">Novac odlazi na račun koji brzo isprazne ili prebace.</li>
            <li data-sr="Podaci se koriste za prijavu na druge servise." data-en="Data is used to sign up for other services.">Podaci se koriste za prijavu na druge servise.</li>
            <li data-sr="Prevarant traži još jednu sitnu uplatu radi završetka." data-en="The fraudster asks for one more small payment to finish.">Prevarant traži još jednu sitnu uplatu radi završetka.</li>
            <li data-sr="Korisnik dobija lažnu potvrdu u PDF-u bez pravnog efekta." data-en="The user receives a fake PDF confirmation with no legal effect.">Korisnik dobija lažnu potvrdu u PDF-u bez pravnog efekta.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
            <li><a href="identity-theft.html" data-sr="Krađa identiteta" data-en="Identity theft">Krađa identiteta</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> izvrši se štetna transakcija ili otključa se pristup nalozima." data-en="<strong>Threshold:</strong> a harmful transaction runs or account access is unlocked."><strong>Prag faze:</strong> izvrši se štetna transakcija ili otključa se pristup nalozima.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Otkrivanje" data-en="Phase 5 — Discovery">Faza 5 — Otkrivanje</h3>
        <p data-sr="Korisnik vidi neautorizovane prijave ili promene u nalogu." data-en="The user sees unauthorized logins or account changes.">Korisnik vidi neautorizovane prijave ili promene u nalogu.</p>
        <p data-sr="Pravi CA nema evidenciju o hitnoj obnovi ili datum isteka ne odgovara mejlu." data-en="The real CA has no record of the urgent renewal or the expiry date does not match the email.">Pravi CA nema evidenciju o hitnoj obnovi ili datum isteka ne odgovara mejlu.</p>
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
        <p data-sr="Reset lozinki, opoziv sesija, novi sertifikat kroz zvaničan sajt CA." data-en="Reset passwords, revoke sessions, new certificate through the official CA site.">Reset lozinki, opoziv sesija, novi sertifikat kroz zvaničan sajt CA.</p>
        <p data-sr="Omogućiti MFA na svim nalozima koji koriste e-potpis." data-en="Enable MFA on all accounts that use e-sign.">Omogućiti MFA na svim nalozima koji koriste e-potpis.</p>
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
            <li data-sr="Zahtev da prosledite OTP nekom službeniku." data-en="Request to forward an OTP to an official.">Zahtev da prosledite OTP nekom službeniku.</li>
            <li data-sr="Mejl sa From adresom koja se menja pri odgovoru." data-en="Email From address that changes on reply.">Mejl sa From adresom koja se menja pri odgovoru.</li>
            <li data-sr="Lažni broj telefona za podršku u mejlu." data-en="Fake support phone number in the email.">Lažni broj telefona za podršku u mejlu.</li>
            <li data-sr="Instalacija nepoznatog dodatka u pregledaču radi obnove." data-en="Install unknown browser extension for renewal.">Instalacija nepoznatog dodatka u pregledaču radi obnove.</li>
            <li data-sr="Zahtev za remote pristup računaru." data-en="Remote access to the computer requested.">Zahtev za remote pristup računaru.</li>
            <li data-sr="Cena obnove koja ne postoji na sajtu CA." data-en="Renewal price not listed on the CA site.">Cena obnove koja ne postoji na sajtu CA.</li>
            <li data-sr="Zabrana korišćenja zvanične aplikacije tokena." data-en="Forbidden to use the official token app.">Zabrana korišćenja zvanične aplikacije tokena.</li>
            <li data-sr="SMS sa linkom koji nije na domenu CA." data-en="SMS with a link not on the CA domain.">SMS sa linkom koji nije na domenu CA.</li>
            <li data-sr="Traženje master lozinke menadžera lozinki." data-en="Master password of a password manager requested.">Traženje master lozinke menadžera lozinki.</li>
            <li data-sr="Lažni QR za prijavu na portal." data-en="Fake QR for portal login.">Lažni QR za prijavu na portal.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
<ol class="steps">
        <li data-sr="Otvorite sajt CA ručno ukucan, ne iz mejla." data-en="Open the CA site by typing, not from email.">Otvorite sajt CA ručno ukucan, ne iz mejla.</li>
        <li data-sr="Uporedite datum isteka u aplikaciji tokena sa mejlom." data-en="Compare expiry in the token app with the email.">Uporedite datum isteka u aplikaciji tokena sa mejlom.</li>
        <li data-sr="Nikada ne delite OTP sa trećim licem." data-en="Never share an OTP with a third party.">Nikada ne delite OTP sa trećim licem.</li>
        <li data-sr="Proverite sertifikat HTTPS i pun domen u adresnoj traci." data-en="Check HTTPS certificate and full domain in the address bar.">Proverite sertifikat HTTPS i pun domen u adresnoj traci.</li>
        <li data-sr="Kontaktirajte CA javnim brojem sa sajta." data-en="Contact the CA using a public site number.">Kontaktirajte CA javnim brojem sa sajta.</li>
        <li data-sr="Ne instalirajte softver koji traži mejl o sertifikatu." data-en="Do not install software an email about certificates requests.">Ne instalirajte softver koji traži mejl o sertifikatu.</li>
        <li data-sr="Proverite poslednje prijave u nalogu državnog portala." data-en="Check recent logins on the government portal account.">Proverite poslednje prijave u nalogu državnog portala.</li>
        <li data-sr="Obavestite IT odeljenje u firmi." data-en="Notify the company IT department.">Obavestite IT odeljenje u firmi.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
<ul class="bullets">
            <li data-sr="Da li domen u adresnoj traci tačno odgovara CA?" data-en="Does the address bar domain exactly match the CA?">Da li domen u adresnoj traci tačno odgovara CA?</li>
            <li data-sr="Da li mejl traži OTP?" data-en="Does the email ask for an OTP?">Da li mejl traži OTP?</li>
            <li data-sr="Da li datum isteka odgovara aplikaciji?" data-en="Does the expiry date match the app?">Da li datum isteka odgovara aplikaciji?</li>
            <li data-sr="Da li postoji prilog sa makroima?" data-en="Is there an attachment with macros?">Da li postoji prilog sa makroima?</li>
            <li data-sr="Da li traže remote alat?" data-en="Do they ask for a remote tool?">Da li traže remote alat?</li>
            <li data-sr="Da li je cena ista kao na sajtu?" data-en="Is the price the same as on the site?">Da li je cena ista kao na sajtu?</li>
            <li data-sr="Da li mogu sačekati i pozvati podršku CA?" data-en="Can I wait and call CA support?">Da li mogu sačekati i pozvati podršku CA?</li>
            <li data-sr="Da li link koristi kratki URL servis?" data-en="Does the link use a URL shortener?">Da li link koristi kratki URL servis?</li>
            <li data-sr="Da li je slika u mejlu jedina potvrda?" data-en="Is an image in the email the only proof?">Da li je slika u mejlu jedina potvrda?</li>
            <li data-sr="Da li traže lozinku e‑pošte firme?" data-en="Do they ask for company email password?">Da li traže lozinku e‑pošte firme?</li>
            <li data-sr="Da li je From adresa na pravom domenu?" data-en="Is the From address on the correct domain?">Da li je From adresa na pravom domenu?</li>
            <li data-sr="Da li ista poruka stiže više zaposlenih?" data-en="Does the same message hit multiple employees?">Da li ista poruka stiže više zaposlenih?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
<ol class="steps">
        <li data-sr="Ne unositi lozinku na stranici iz mejla." data-en="Do not enter a password on a page from email.">Ne unositi lozinku na stranici iz mejla.</li>
        <li data-sr="Odjaviti sesije na državnom portalu ako ste uneli podatke." data-en="Sign out of government portal sessions if you entered data.">Odjaviti sesije na državnom portalu ako ste uneli podatke.</li>
        <li data-sr="Promeniti lozinke i ponovo izdati sertifikat zvanično ako treba." data-en="Change passwords and reissue the certificate officially if needed.">Promeniti lozinke i ponovo izdati sertifikat zvanično ako treba.</li>
        <li data-sr="Prijaviti mejl CA i CERT timu." data-en="Report the email to the CA and CERT team.">Prijaviti mejl CA i CERT timu.</li>
        <li data-sr="Proveriti pravila obnove na zvaničnoj dokumentaciji." data-en="Check renewal rules in official documentation.">Proveriti pravila obnove na zvaničnoj dokumentaciji.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si uneo lozinku ili OTP?" data-en="Did you enter a password or OTP?">Da li si uneo lozinku ili OTP?</li>
            <li data-sr="Koji je bio URL?" data-en="What was the URL?">Koji je bio URL?</li>
            <li data-sr="Da li si instalirao nešto?" data-en="Did you install anything?">Da li si instalirao nešto?</li>
            <li data-sr="Da li firma koristi zajednički nalog?" data-en="Does the company use a shared account?">Da li firma koristi zajednički nalog?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="CA nikad ne traži OTP na telefon ili čet." data-en="A CA never asks for OTP by phone or chat.">CA nikad ne traži OTP na telefon ili čet.</li>
            <li data-sr="Hajde da otvorimo sajt CA iz bookmarka." data-en="Let us open the CA site from a bookmark.">Hajde da otvorimo sajt CA iz bookmarka.</li>
            <li data-sr="Bolje istek sertifikata jedan dan nego kompromitovan nalog." data-en="Better a one-day cert expiry than a compromised account.">Bolje istek sertifikata jedan dan nego kompromitovan nalog.</li>
            <li data-sr="IT može proveriti poslednje IP adrese prijava." data-en="IT can check recent login IP addresses.">IT može proveriti poslednje IP adrese prijava.</li>
          </ul>
        </div>
      </div>
    </section>
`
};
