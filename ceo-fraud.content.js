window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["ceo-fraud"] = {
  raw_html: `
    <!-- 1) UVOD -->
    <section class="card">
      <h2 data-sr="Uvod: kako radi CEO prevara" data-en="Introduction: how CEO fraud works">
        Uvod: kako radi CEO prevara
      </h2>

      <p
        data-sr="CEO prevara je varijanta kompromitovanja poslovnog imejla (BEC) u kojoj napadač glumi direktora ili finansijskog direktora firme. Cilj je ubediti nekoga u finansijskoj službi da izvrši transfer novca na napadačev račun. Napad se oslanja na hijerarhijski autoritet — zaposleni su navikli da odgovaraju na zahteve direktora bez dužeg preispitivanja."
        data-en="CEO fraud is a variant of Business Email Compromise where the attacker impersonates a company CEO or CFO. The goal is to convince someone in finance to transfer money to the attacker's account. The attack relies on hierarchical authority — employees are conditioned to respond to executive requests without extended scrutiny."
      >CEO prevara je varijanta kompromitovanja poslovnog imejla (BEC) u kojoj napadač glumi direktora ili finansijskog direktora firme. Cilj je ubediti nekoga u finansijskoj službi da izvrši transfer novca na napadačev račun. Napad se oslanja na hijerarhijski autoritet — zaposleni su navikli da odgovaraju na zahteve direktora bez dužeg preispitivanja.</p>

      <p
        data-sr="Napad ne zahteva nikakav hakerski poduhvat. Napadač registruje sličan domen ili koristi spoofing da prikaže pravo ime direktora, zatim šalje jedan ili dva imejla sa tačno odmerenim pritiskom. Prosečan gubitak po incidentu premašuje 100.000 dolara (FBI IC3, 2023). Mala i srednja preduzeća su posebno izložena jer retko imaju formalizovane procedure odobrenja za hitne transfere."
        data-en="The attack requires no hacking. The attacker registers a lookalike domain or uses spoofing to display the real CEO's name, then sends one or two emails with precisely calibrated pressure. Average loss per incident exceeds $100,000 (FBI IC3, 2023). Small and medium businesses are particularly exposed because they rarely have formalized approval procedures for emergency transfers."
      >Napad ne zahteva nikakav hakerski poduhvat. Napadač registruje sličan domen ili koristi spoofing da prikaže pravo ime direktora, zatim šalje jedan ili dva imejla sa tačno odmerenim pritiskom. Prosečan gubitak po incidentu premašuje 100.000 dolara (FBI IC3, 2023). Mala i srednja preduzeća su posebno izložena jer retko imaju formalizovane procedure odobrenja za hitne transfere.</p>

      <div class="callout"
        data-sr="<strong>Model:</strong> izviđanje (ko je u finansijama, kad je direktor na putu) → lažni identitet direktora → scenario (hitan poverljiv posao) → zahtev za transferom → izolacija mete od provere (tajnost + nedostupnost) → prag (uplata) → gubitak."
        data-en="<strong>Model:</strong> reconnaissance (who is in finance, when CEO is traveling) → fake executive identity → scenario (urgent confidential deal) → transfer request → isolating target from verification (secrecy + unavailability) → threshold (payment) → loss."
      ><strong>Model:</strong> izviđanje (ko je u finansijama, kad je direktor na putu) → lažni identitet direktora → scenario (hitan poverljiv posao) → zahtev za transferom → izolacija mete od provere (tajnost + nedostupnost) → prag (uplata) → gubitak.</div>

      <div class="callout"
        data-sr="<strong>Prag:</strong> zaposleni izvrši transfer jer smatra da je nalog stigao od direktora — a telefonska verifikacija na poznati broj nije izvršena."
        data-en="<strong>Threshold:</strong> employee processes the transfer believing the instruction came from the CEO — without phone verification on a known number."
      ><strong>Prag:</strong> zaposleni izvrši transfer jer smatra da je nalog stigao od direktora — a telefonska verifikacija na poznati broj nije izvršena.</div>
    </section>

    <!-- 2) KAKO GENERALNO RADI -->
    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika autoriteta i izolacije" data-en="How it works: authority and isolation mechanics">
        Kako generalno radi: mehanika autoriteta i izolacije
      </h2>

      <p
        data-sr="CEO fraud koristi hijerarhiju kao infrastrukturu kontrole. Kada zahtev dolazi od „direktora", zaposleni reaguje na poziciju, ne na sadržaj“. Napadač to zna i konstruiše zahtev koji maksimizira hijerarhijski pritisak i minimizira prostor za verifikaciju."
        data-en="CEO fraud uses hierarchy as a control infrastructure. When a request comes from &ldquo;the CEO&rdquo;, the employee reacts to position, not content. The attacker knows this and constructs a request that maximizes hierarchical pressure and minimizes room for verification."
      >CEO fraud koristi hijerarhiju kao infrastrukturu kontrole. Kada zahtev dolazi od „direktora", zaposleni reaguje na poziciju, ne na sadržaj“. Napadač to zna i konstruiše zahtev koji maksimizira hijerarhijski pritisak i minimizira prostor za verifikaciju.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gradi lažni autoritet direktora" data-en="What builds fake executive authority">Šta gradi lažni autoritet direktora</div>
          <ul class="bullets">
            <li data-sr="pravo ime direktora u display name polju imejla." data-en="real CEO's name in the email display name field.">pravo ime direktora u display name polju imejla.</li>
            <li data-sr="lookalike domen: companyname-secure.net umesto companyname.com." data-en="lookalike domain: companyname-secure.net instead of companyname.com.">lookalike domen: companyname-secure.net umesto companyname.com.</li>
            <li data-sr="imitacija tona: direktan, kratak, bez objašnjenja — kako direktori obično pišu." data-en="tone imitation: direct, brief, no explanation — how CEOs typically write.">imitacija tona: direktan, kratak, bez objašnjenja — kako direktori obično pišu.</li>
            <li data-sr="poslovni kontekst koji odgovara stvarnom stanju firme (akvizicija, regulatorno)." data-en="business context that matches the company's real state (acquisition, regulatory).">poslovni kontekst koji odgovara stvarnom stanju firme (akvizicija, regulatorno).</li>
            <li data-sr="timing: napad dolazi dok je pravi direktor na putu ili nedostupan." data-en="timing: attack arrives while real CEO is traveling or unavailable.">timing: napad dolazi dok je pravi direktor na putu ili nedostupan.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Kako se uvodi izolacija od provere" data-en="How isolation from verification is introduced">Kako se uvodi izolacija od provere</div>
          <ul class="bullets">
            <li data-sr="„na putu sam i ne primam pozive do sutra."." data-en="&ldquo;I'm traveling and won't take calls until tomorrow&rdquo;.">"na putu sam i ne primam pozive do sutra".</li>
            <li data-sr="„nemoj kontaktirati CFO-a niti pravnika — ovo je poverljivo."." data-en="&ldquo;do not contact the CFO or lawyer — this is confidential&rdquo;.">"nemoj kontaktirati CFO-a niti pravnika — ovo je poverljivo".</li>
            <li data-sr="„ovo je vremenski osetljivo — rok je kraj radnog dana."." data-en="&ldquo;this is time-sensitive — deadline is end of business today&rdquo;.">"ovo je vremenski osetljivo — rok je kraj radnog dana".</li>
            <li data-sr="AI glasovna imitacija u telefonskim napadima — rastuća pretnja." data-en="AI voice cloning in phone attacks — growing threat.">AI glasovna imitacija u telefonskim napadima — rastuća pretnja.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 3) HRONOLOŠKI TOK -->
    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)." data-en="Timeline (phases + branching).">
        Hronološki tok (faze + grananja)
      </h2>

      <p class="muted"
        data-sr="Faze su prikazane kao operativni tok: šta meta vidi, šta se traži, gde se pali grananje u šire BEC varijante."
        data-en="Phases are shown as an operational flow: what the target sees, what is demanded, and where branching into broader BEC variants happens."
      >Faze su prikazane kao operativni tok: šta meta vidi, šta se traži, gde se pali grananje u šire BEC varijante.</p>

      <!-- FAZA 1 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Izviđanje" data-en="Phase 1 — Reconnaissance">
          Faza 1 — Izviđanje
        </h3>
        <p
          data-sr="Napadač identifikuje ko je direktor firme, ko upravlja finansijama i koji je email format. LinkedIn, web sajt firme i poslovni registar daju dovoljno informacija. Praćenje LinkedIn statusa direktora otkriva kad je na putovanju — to je optimalni timing za napad."
          data-en="The attacker identifies the company CEO, who manages finances, and what the email format is. LinkedIn, the company website, and business registries provide enough information. Monitoring the CEO's LinkedIn status reveals when they are traveling — that is the optimal attack timing."
        >Napadač identifikuje ko je direktor firme, ko upravlja finansijama i koji je email format. LinkedIn, web sajt firme i poslovni registar daju dovoljno informacija. Praćenje LinkedIn statusa direktora otkriva kad je na putovanju — to je optimalni timing za napad.</p>
        <ul class="bullets">
          <li data-sr="signal: direktori objavljuju poslovne putovanja i konferencije javno." data-en="signal: executives publicly announce business trips and conferences.">signal: direktori objavljuju poslovne putovanja i konferencije javno.</li>
          <li data-sr="signal: email format predvidiv, finansijska služba navedena na sajtu." data-en="signal: email format predictable, finance staff listed on website.">signal: email format predvidiv, finansijska služba navedena na sajtu.</li>
        </ul>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> napadač ima ime direktora, email format, ime finansijskog direktora i potvrdu da je direktor nedostupan."
          data-en="<strong>Phase threshold:</strong> attacker has CEO's name, email format, CFO's name, and confirmation that the CEO is unavailable."
        ><strong>Prag faze:</strong> napadač ima ime direktora, email format, ime finansijskog direktora i potvrdu da je direktor nedostupan.</div>
      </article>

      <!-- FAZA 2 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Priprema lažnog identiteta" data-en="Phase 2 — Preparing fake identity">
          Faza 2 — Priprema lažnog identiteta
        </h3>
        <p
          data-sr="Napadač registruje lookalike domen ili konfiguriše display name spoofing. Priprema imejl koji imitira stil komunikacije direktora — ton, pozdrav, potpis. Bira scenario koji odgovara poslovnom kontekstu firme: akvizicija koja nije javna, regulatorni rok, hitna isplata dobavljaču."
          data-en="The attacker registers a lookalike domain or configures display name spoofing. They draft an email imitating the CEO's communication style — tone, greeting, signature. They select a scenario that fits the company's business context: an undisclosed acquisition, a regulatory deadline, an urgent supplier payment."
        >Napadač registruje lookalike domen ili konfiguriše display name spoofing. Priprema imejl koji imitira stil komunikacije direktora — ton, pozdrav, potpis. Bira scenario koji odgovara poslovnom kontekstu firme: akvizicija koja nije javna, regulatorni rok, hitna isplata dobavljaču.</p>
        <ul class="bullets">
          <li data-sr="signal: domen identičan ali sadrži crtu ili broj (company-name.net)." data-en="signal: domain identical but with dash or number (company-name.net).">signal: domen identičan ali sadrži crtu ili broj (company-name.net).</li>
        </ul>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="ai-deepfake.html" data-sr="Prevare sa AI lažnim snimcima" data-en="AI Deepfake scams">Prevare sa AI lažnim snimcima</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> lažni identitet direktora spreman i vizualno uverljiv."
          data-en="<strong>Phase threshold:</strong> fake CEO identity ready and visually convincing."
        ><strong>Prag faze:</strong> lažni identitet direktora spreman i vizualno uverljiv.</div>
      </article>

      <!-- FAZA 3 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Imejl sa zahtevom za transferom" data-en="Phase 3 — Transfer request email">
          Faza 3 — Imejl sa zahtevom za transferom
        </h3>
        <p
          data-sr="Imejl stiže finansijskom direktoru ili osobi koja autorizuje uplate. Poruka je kratka, direktna i izgleda autentično. Scenario je hitan i poverljiv. Rok je danas ili sutra ujutru. Zahtev za tajnošću i blokada telefonske provere su eksplicitni."
          data-en="The email arrives to the CFO or the person who authorizes payments. The message is short, direct, and looks authentic. The scenario is urgent and confidential. The deadline is today or tomorrow morning. Secrecy demand and block on phone verification are explicit."
        >Imejl stiže finansijskom direktoru ili osobi koja autorizuje uplate. Poruka je kratka, direktna i izgleda autentično. Scenario je hitan i poverljiv. Rok je danas ili sutra ujutru. Zahtev za tajnošću i blokada telefonske provere su eksplicitni.</p>
        <ul class="bullets">
          <li data-sr="fraze: „hitan transfer za akviziciju — poverljivo."." data-en="phrases: &ldquo;urgent transfer for acquisition — confidential&rdquo;.">fraze: „hitan transfer za akviziciju — poverljivo"“.</li>
          <li data-sr="fraze: „nemoj kontaktirati CFO-a dok se ne čujemo sutra."." data-en="phrases: &ldquo;don't contact the CFO until we speak tomorrow&rdquo;.">fraze: „nemoj kontaktirati CFO-a dok se ne čujemo sutra"“.</li>
          <li data-sr="fraze: „potvrdi mi kada je uplata izvršena — na putu sam."." data-en="phrases: &ldquo;confirm when payment is done — I'm traveling&rdquo;.">fraze: „potvrdi mi kada je uplata izvršena — na putu sam"“.</li>
        </ul>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="vendor-email-compromise.html" data-sr="Kompromitovanje imejla dobavljača" data-en="Vendor email compromise">Kompromitovanje imejla dobavljača</a></li>
            <li><a href="business-email-compromise.html" data-sr="Kompromitovanje poslovnog imejla (BEC)" data-en="Business email compromise (BEC)">Kompromitovanje poslovnog imejla (BEC)</a></li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> meta razmatra zahtev kao legitiman i nema jasnu proceduru za verifikaciju CEO instrukcija."
          data-en="<strong>Phase threshold:</strong> target considers the request legitimate and has no clear procedure for verifying CEO instructions."
        ><strong>Prag faze:</strong> meta razmatra zahtev kao legitiman i nema jasnu proceduru za verifikaciju CEO instrukcija.</div>
      </article>

      <!-- FAZA 4 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Eskalacija ako meta okleava" data-en="Phase 4 — Escalation if target hesitates">
          Faza 4 — Eskalacija ako meta okleava
        </h3>
        <p
          data-sr="Ako meta okleava, napadač eskalira pritisak: jači autoritet, tvrđi rok, nova pretnja posledicama za kašnjenje. Ponekad se pojavi „treća strana" — pravnik ili konsultant — koji „potvrđuje" zahtev“. U slučaju kompromitovanog pravog naloga, napadač presreće odgovore i meta dobija potvrde iz pravog imejla direktora."
          data-en="If the target hesitates, the attacker escalates pressure: stronger authority, harder deadline, new threat of consequences for delay. Sometimes a &ldquo;third party&rdquo; appears — a lawyer or consultant — who &ldquo;confirms&rdquo; the request. With a compromised real account, the attacker intercepts replies and the target receives confirmations from the real CEO email."
        >Ako meta okleava, napadač eskalira pritisak: jači autoritet, tvrđi rok, nova pretnja posledicama za kašnjenje. Ponekad se pojavi „treća strana" — pravnik ili konsultant — koji „potvrđuje" zahtev“. U slučaju kompromitovanog pravog naloga, napadač presreće odgovore i meta dobija potvrde iz pravog imejla direktora.</p>
        <ul class="bullets">
          <li data-sr="signal: priča postaje kompleksnija ako meta postavlja pitanja." data-en="signal: story becomes more complex if target asks questions.">signal: priča postaje kompleksnija ako meta postavlja pitanja.</li>
          <li data-sr="signal: pojavljuje se nova „potvrda." iz drugog izvora." data-en="signal: new &ldquo;confirmation&rdquo; appears from another source.">signal: pojavljuje se nova „potvrda" iz drugog izvora“.</li>
        </ul>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> meta prihvata eskaliranu potvrdu kao validan dokaz i pristupa izvršavanju."
          data-en="<strong>Phase threshold:</strong> target accepts the escalated confirmation as valid proof and proceeds with execution."
        ><strong>Prag faze:</strong> meta prihvata eskaliranu potvrdu kao validan dokaz i pristupa izvršavanju.</div>
      </article>

      <!-- FAZA 5 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Prag: uplata izvršena" data-en="Phase 5 — Threshold: payment made">
          Faza 5 — Prag: uplata izvršena
        </h3>
        <p
          data-sr="Zaposleni izvrši transfer. Napadač odmah prebacuje sredstva dalje. Napadač potvrdi da je „primio" uplatu i zatvori komunikaciju“. Otkrivanje dolazi kada se pravi direktor vrati i ne zna ništa o transferu, ili kada banka registruje sumnjivu transakciju."
          data-en="The employee processes the transfer. The attacker immediately moves funds onward. The attacker confirms they &ldquo;received&rdquo; the payment and closes communication. Discovery comes when the real CEO returns and knows nothing about the transfer, or when the bank flags a suspicious transaction."
        >Zaposleni izvrši transfer. Napadač odmah prebacuje sredstva dalje. Napadač potvrdi da je „primio" uplatu i zatvori komunikaciju“. Otkrivanje dolazi kada se pravi direktor vrati i ne zna ništa o transferu, ili kada banka registruje sumnjivu transakciju.</p>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> uplata izvršena — novac uglavnom izgubljen u prvih 24–72 sata."
          data-en="<strong>Phase threshold:</strong> payment made — money is usually gone within 24–72 hours."
        ><strong>Prag faze:</strong> uplata izvršena — novac uglavnom izgubljen u prvih 24–72 sata.</div>
      </article>

      <!-- FAZA 6 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Otkrivanje i recovery talaš" data-en="Phase 6 — Discovery and recovery wave">
          Faza 6 — Otkrivanje i recovery talaš
        </h3>
        <p
          data-sr="Posle otkrivanja incidenta često stiže novi kontakt sa ponudom „povraćaja" izgubljenih sredstava uz uplatu unapred“. Posle CEO fraud incidenta firme su posebno ranjive na recovery prevare jer su pod pritiskom da povrate novac."
          data-en="After the incident is discovered, a new contact often arrives offering to &ldquo;recover&rdquo; lost funds for an upfront fee. After a CEO fraud incident, companies are particularly vulnerable to recovery scams because they are under pressure to retrieve the money."
        >Posle otkrivanja incidenta često stiže novi kontakt sa ponudom „povraćaja" izgubljenih sredstava uz uplatu unapred“. Posle CEO fraud incidenta firme su posebno ranjive na recovery prevare jer su pod pritiskom da povrate novac.</p>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="recovery-scam.html" data-sr="Prevara povraćaja novca" data-en="Recovery scam">Prevara povraćaja novca</a></li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Filter:</strong> svaka ponuda „povraćaja" uz uplatu unapred = novi napad, ne rešenje."
          data-en="<strong>Filter:</strong> every &ldquo;recovery&rdquo; offer with an upfront payment = new attack, not a solution."
        ><strong>Filter:</strong> svaka ponuda „povraćaja" uz uplatu unapred = novi napad, ne rešenje“.</div>
      </article>
    </section>

    <!-- 4) CRVENE ZASTAVICE -->
    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="imejl od direktora traži transfer bez standardnog procesa odobrenja." data-en="email from executive requests transfer without standard approval process.">imejl od direktora traži transfer bez standardnog procesa odobrenja.</li>
        <li data-sr="zahtev dolazi dok je direktor navodno na putu i nedostupan telefonom." data-en="request arrives while executive is allegedly traveling and unreachable by phone.">zahtev dolazi dok je direktor navodno na putu i nedostupan telefonom.</li>
        <li data-sr="insistiranje na tajnosti ili eksplicitna zabrana konsultacije sa kolegama." data-en="insistence on secrecy or explicit ban on consulting colleagues.">insistiranje na tajnosti ili eksplicitna zabrana konsultacije sa kolegama.</li>
        <li data-sr="imejl adresa vizualno slična ali pažljivim pregledom različita od prave." data-en="email address visually similar but different from the real one on closer inspection.">imejl adresa vizualno slična ali pažljivim pregledom različita od prave.</li>
        <li data-sr="uplata ide na račun koji nije u internom sistemu kao poznati nalog." data-en="payment goes to account not in the internal system as a known account.">uplata ide na račun koji nije u internom sistemu kao poznati nalog.</li>
        <li data-sr="ton ili stil imejla atipičan za tu osobu — direktniji ili neformalniji nego obično." data-en="email tone or style atypical for that person — more direct or informal than usual.">ton ili stil imejla atipičan za tu osobu — direktniji ili neformalniji nego obično.</li>
        <li data-sr="imejl stiže kasno popodne ili u petak — smanjuje vreme za proveru." data-en="email arrives late afternoon or Friday — reduces verification time.">imejl stiže kasno popodne ili u petak — smanjuje vreme za proveru.</li>
      </ul>
    </section>

    <!-- 5) PROVERE -->
    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera pre izvršavanja CEO zahteva" data-en="Checks: 8 quick checks before executing a CEO request">Provere: 8 brzih provera pre izvršavanja CEO zahteva</h2>

      <p
        data-sr="Cilj je nezavisna verifikacija. Ako je pravi direktor poslao zahtev, telefonska potvrda na poznati broj neće biti problem. Ako je napadač, upravo to pokušava da spreči."
        data-en="The goal is independent verification. If the real CEO sent the request, phone confirmation on a known number will not be a problem. If it's an attacker, that's exactly what they are trying to prevent."
      >Cilj je nezavisna verifikacija. Ako je pravi direktor poslao zahtev, telefonska potvrda na poznati broj neće biti problem. Ako je napadač, upravo to pokušava da spreči.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Provere identiteta" data-en="Identity checks">Provere identiteta</div>
          <ul class="bullets">
            <li data-sr="proveri pun email domen karakter po karakter — ne samo display name." data-en="check full email domain character by character — not just the display name.">proveri pun email domen karakter po karakter — ne samo display name.</li>
            <li data-sr="pozovi direktora na interni broj iz imenika — ne na broj iz imejla." data-en="call the director on the internal directory number — not the number from the email.">pozovi direktora na interni broj iz imenika — ne na broj iz imejla.</li>
            <li data-sr="proveri email zaglavlja (From header) u raw view." data-en="check email headers (From header) in raw view.">proveri email zaglavlja (From header) u raw view.</li>
            <li data-sr="kod sumnjivih imejlova: proveri da li direktor ima Out of Office aktiviran." data-en="for suspicious emails: check whether CEO has Out of Office active.">kod sumnjivih imejlova: proveri da li direktor ima Out of Office aktiviran.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Proceduralne provere" data-en="Procedural checks">Proceduralne provere</div>
          <ul class="bullets">
            <li data-sr="da li ovaj transfer prolazi kroz standardnu proceduru odobrenja?" data-en="does this transfer go through standard approval procedures?">da li ovaj transfer prolazi kroz standardnu proceduru odobrenja?</li>
            <li data-sr="da li iznos premašuje limit jednog potpisnika?" data-en="does the amount exceed single-signatory limits?">da li iznos premašuje limit jednog potpisnika?</li>
            <li data-sr="da li postoji prethodna dokumentacija o ovoj transakciji van ovog imejla?" data-en="is there prior documentation of this transaction outside this email?">da li postoji prethodna dokumentacija o ovoj transakciji van ovog imejla?</li>
            <li data-sr="da li primalac uplate nije u sistemu kao poznati poslovni nalog?" data-en="is the payment recipient not in the system as a known business account?">da li primalac uplate nije u sistemu kao poznati poslovni nalog?</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 6) CHECKLISTA -->
    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja pre izvršavanja CEO naloga" data-en="Checklist: 12 questions before executing a CEO order">Checklista: 12 pitanja pre izvršavanja CEO naloga</h2>

      <p class="muted"
        data-sr="Brzo čitanje. Više loših odgovora znači aktivan CEO fraud obrazac."
        data-en="Quick read. Multiple bad answers indicate an active CEO fraud pattern."
      >Brzo čitanje. Više loših odgovora znači aktivan CEO fraud obrazac.</p>

      <ul class="bullets">
        <li data-sr="Da li je zahtev stigao samo imejlom bez prethodne usmene komunikacije?" data-en="Did the request arrive by email only without prior verbal communication?">Da li je zahtev stigao samo imejlom bez prethodne usmene komunikacije?</li>
        <li data-sr="Da li domen imejla odgovara domenu koji direktor inače koristi?" data-en="Does the email domain match the domain the CEO normally uses?">Da li domen imejla odgovara domenu koji direktor inače koristi?</li>
        <li data-sr="Da li je direktor eksplicitno naveo da nije dostupan telefonom?" data-en="Did the CEO explicitly state they are unavailable by phone?">Da li je direktor eksplicitno naveo da nije dostupan telefonom?</li>
        <li data-sr="Da li zahtev uključuje element tajnosti ili zabranu konsultacije?" data-en="Does the request include a secrecy element or consultation ban?">Da li zahtev uključuje element tajnosti ili zabranu konsultacije?</li>
        <li data-sr="Da li rok u zahtevu ne dozvoljava standardnu proceduru verifikacije?" data-en="Does the deadline in the request not allow standard verification procedures?">Da li rok u zahtevu ne dozvoljava standardnu proceduru verifikacije?</li>
        <li data-sr="Da li uplata ide na račun koji ranije nismo koristili za ovog primaoca?" data-en="Does the payment go to an account we haven't used before for this recipient?">Da li uplata ide na račun koji ranije nismo koristili za ovog primaoca?</li>
        <li data-sr="Da li zahtev zaobilazi dual authorization ili standardni limit potpisnika?" data-en="Does the request bypass dual authorization or standard signatory limits?">Da li zahtev zaobilazi dual authorization ili standardni limit potpisnika?</li>
        <li data-sr="Da li je ton ili formulacija imejla atipičan za ovog direktora?" data-en="Is the tone or phrasing atypical for this director?">Da li je ton ili formulacija imejla atipičan za ovog direktora?</li>
        <li data-sr="Da li se scenario ne može lako proveriti kroz druge interne kanale?" data-en="Can the scenario not easily be verified through other internal channels?">Da li se scenario ne može lako proveriti kroz druge interne kanale?</li>
        <li data-sr="Da li imejl stiže u petak popodne, kasno uveče ili pred praznike?" data-en="Does the email arrive Friday afternoon, late evening, or before holidays?">Da li imejl stiže u petak popodne, kasno uveče ili pred praznike?</li>
        <li data-sr="Da li je ovo tip transakcije koji direktor inače ne bi komunicirao imejlom?" data-en="Is this the type of transaction the CEO would not normally communicate by email?">Da li je ovo tip transakcije koji direktor inače ne bi komunicirao imejlom?</li>
        <li data-sr="Da li nova treća strana (pravnik, konsultant) potvrđuje zahtev bez prethodnog uvođenja?" data-en="Does a new third party (lawyer, consultant) confirm the request without prior introduction?">Da li nova treća strana (pravnik, konsultant) potvrđuje zahtev bez prethodnog uvođenja?</li>
      </ul>
    </section>

    <!-- 7) AKO SUMNJA KRENE -->
    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="ne izvršavaj uplatu — pauziraj sve dok ne dobiješ telefonsku potvrdu." data-en="do not make the payment — pause everything until you have phone confirmation.">ne izvršavaj uplatu — pauziraj sve dok ne dobiješ telefonsku potvrdu.</li>
        <li data-sr="pozovi direktora na interni broj iz imenika — ne na broj iz imejla." data-en="call the director on the internal directory number — not the email number.">pozovi direktora na interni broj iz imenika — ne na broj iz imejla.</li>
        <li data-sr="ako je uplata već inicirana: odmah kontaktuj banku i zatraži zaustavljanje." data-en="if payment was already initiated: contact your bank immediately and request a stop.">ako je uplata već inicirana: odmah kontaktuj banku i zatraži zaustavljanje.</li>
        <li data-sr="sačuvaj sve imejlove i zaglavlja kao dokaze." data-en="preserve all emails and headers as evidence.">sačuvaj sve imejlove i zaglavlja kao dokaze.</li>
        <li data-sr="obavesti IT odeljenje i senior menadžment." data-en="notify IT department and senior management.">obavesti IT odeljenje i senior menadžment.</li>
        <li data-sr="prijavi policiji i finansijskim regulatorima." data-en="report to police and financial regulators.">prijavi policiji i finansijskim regulatorima.</li>
      </ol>

      <div class="callout"
        data-sr="<strong>Zašto ovaj redosled radi:</strong> svaka sekunda pre praga (uplate) povećava šansu za zaustavljanje. Posle praga jedina šansa je recall u prvih 24–72 sata."
        data-en="<strong>Why this order works:</strong> every second before the threshold (payment) increases the chance of stopping it. After the threshold, the only chance is recall within 24–72 hours."
      ><strong>Zašto ovaj redosled radi:</strong> svaka sekunda pre praga (uplate) povećava šansu za zaustavljanje. Posle praga jedina šansa je recall u prvih 24–72 sata.</div>
    </section>

    <!-- 8) AKO POMAŽEŠ NEKOME -->
    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>

      <p
        data-sr="Kada je zaposleni već izvršio uplatu, direktna konfrontacija aktivira defanzivnost. Efikasnije je ići kroz proveru: poziv direktoru na interni broj, pregled email zaglavlja, provera IBAN-a u sistemu. Te radnje ne napadaju procenu zaposlenog — demonstriraju verifikaciju."
        data-en="When an employee has already made a payment, direct confrontation activates defensiveness. More effective is going through verification: call to the CEO on an internal number, email header review, IBAN check in the system. These actions do not challenge the employee's judgment — they demonstrate verification."
      >Kada je zaposleni već izvršio uplatu, direktna konfrontacija aktivira defanzivnost. Efikasnije je ići kroz proveru: poziv direktoru na interni broj, pregled email zaglavlja, provera IBAN-a u sistemu. Te radnje ne napadaju procenu zaposlenog — demonstriraju verifikaciju.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li smo direktora zvali na interni broj — ne broj iz imejla?" data-en="Did we call the director on the internal number — not the email number?">Da li smo direktora zvali na interni broj — ne broj iz imejla?</li>
            <li data-sr="Možemo li zajedno da proverimo pun domen adrese pošiljaoca?" data-en="Can we check the full sender domain together?">Možemo li zajedno da proverimo pun domen adrese pošiljaoca?</li>
            <li data-sr="Da li je primalac uplate u našem sistemu kao poznati poslovni nalog?" data-en="Is the payment recipient in our system as a known business account?">Da li je primalac uplate u našem sistemu kao poznati poslovni nalog?</li>
            <li data-sr="Da li je ovaj tip transakcije inače prošao kroz drugu proceduru?" data-en="Would this type of transaction normally go through a different procedure?">Da li je ovaj tip transakcije inače prošao kroz drugu proceduru?</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Hajde da proverimo domen imejla pre nego što nastavimo." data-en="Let's check the email domain before we continue.">Hajde da proverimo domen imejla pre nego što nastavimo.</li>
            <li data-sr="Pozovimo direktora na interni broj — ako je zahtev legitiman, potvrda neće biti problem." data-en="Let's call the director on the internal number — if the request is legitimate, confirmation will not be a problem.">Pozovimo direktora na interni broj — ako je zahtev legitiman, potvrda neće biti problem.</li>
            <li data-sr="Sačuvajmo sve poruke i zaglavlja pre bilo koje dalje radnje." data-en="Let's save all messages and headers before any further action.">Sačuvajmo sve poruke i zaglavlja pre bilo koje dalje radnje.</li>
            <li data-sr="Pauza od 10 minuta za proveru smanjuje rizik bez gubitka ičega realnog." data-en="A 10-minute pause for verification reduces risk without losing anything real.">Pauza od 10 minuta za proveru smanjuje rizik bez gubitka ičega realnog.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 9) POVEZANE PREVARE -->
    <section class="card">
      <h2 data-sr="Povezane prevare" data-en="Related scams">Povezane prevare</h2>
      <div class="branch">
        <ul class="bullets">
          <li><a href="business-email-compromise.html" data-sr="Kompromitovanje poslovnog imejla (BEC)" data-en="Business email compromise (BEC)">Kompromitovanje poslovnog imejla (BEC)</a></li>
          <li><a href="vendor-email-compromise.html" data-sr="Kompromitovanje imejla dobavljača" data-en="Vendor email compromise">Kompromitovanje imejla dobavljača</a></li>
          <li><a href="invoice-fraud.html" data-sr="Prevara sa fakturama" data-en="Invoice fraud">Prevara sa fakturama</a></li>
          <li><a href="mandate-fraud.html" data-sr="Prevara sa nalozima za plaćanje" data-en="Mandate fraud">Prevara sa nalozima za plaćanje</a></li>
          <li><a href="ai-deepfake.html" data-sr="Prevare sa AI lažnim snimcima" data-en="AI Deepfake scams">Prevare sa AI lažnim snimcima</a></li>
          <li><a href="impersonation-scam.html" data-sr="Lažno predstavljanje" data-en="Impersonation scam">Lažno predstavljanje</a></li>
        </ul>
      </div>
    </section>
  `
};
