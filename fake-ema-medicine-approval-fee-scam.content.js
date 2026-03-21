window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["fake-ema-medicine-approval-fee-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
      <p data-sr="EMA ne naplaćuje ovakve naknade putem hladnog imejla i privatnog računa konsultanta." data-en="Manufacturers, marketing authorisation holders, or active substance suppliers may receive email imitating the European Medicines Agency (EMA) demanding urgent fees for priority review, dossier processing, or decision publication. The goal is payment to an agent or fake access to confidential data.">EMA ne naplaćuje ovakve naknade putem hladnog imejla i privatnog računa konsultanta.</p>
      <p data-sr="Uvek uporedite referencu prijave sa vašim internim predmetom." data-en="All payments and communication in a real procedure follow channels and references you already have in the regulatory system, not unexpected messages.">Uvek uporedite referencu prijave sa vašim internim predmetom.</p>
      <div class="callout" data-sr="<strong>Model:</strong> hladni imejl → EMA → hitna taksa → agent → dodatni korak → nema odobrenja." data-en="<strong>Model:</strong> cold email → EMA → urgent fee → agent → extra step → no approval."><strong>Model:</strong> hladni imejl → EMA → hitna taksa → agent → dodatni korak → nema odobrenja.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi" data-en="How it generally works">Kako generalno radi</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Priprema" data-en="Setup">Priprema</div>
          <ul class="bullets">
            <li data-sr="Logo EMA i formalni jezik o proceduri centralizovanog odobrenja." data-en="EMA logo and formal language on centralised approval procedure.">Logo EMA i formalni jezik o proceduri centralizovanog odobrenja.</li>
            <li data-sr="Ime proizvoda ili molekula koje delimično odgovara vašem portfoliju." data-en="Product or molecule name partially matching your portfolio.">Ime proizvoda ili molekula koje delimično odgovara vašem portfoliju.</li>
            <li data-sr="Rok koji se poklapa sa stvarnim datumima u industriji." data-en="Deadline aligned with real industry dates.">Rok koji se poklapa sa stvarnim datumima u industriji.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Naplata" data-en="Billing">Naplata</div>
          <ul class="bullets">
            <li data-sr="Naknada za administrativnu obradu ili prioritet." data-en="Fee for administrative processing or priority.">Naknada za administrativnu obradu ili prioritet.</li>
            <li data-sr="Uplata konsultantu koji navodno ima ugovor sa agencijom." data-en="Payment to consultant allegedly contracted to the agency.">Uplata konsultantu koji navodno ima ugovor sa agencijom.</li>
            <li data-sr="Zahtev za punim pristupom dosijeu preko linka." data-en="Request for full dossier access via link.">Zahtev za punim pristupom dosijeu preko linka.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching)">Hronološki tok (faze + grananja)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Hladni imejl" data-en="Phase 1 — Cold email">Faza 1 — Hladni imejl</h3>
        <p data-sr="Hitnost je usmerena na regulatorni tim." data-en="The message warns the file will close without an extra fee.">Hitnost je usmerena na regulatorni tim.</p>
        <ul class="bullets">
          <li data-sr="signal: domen nije ema.europa.eu." data-en="signal: domain is not ema.europa.eu.">signal: domen nije ema.europa.eu.</li>
          <li data-sr="signal: referenca prijave ne postoji u vašem internom sistemu." data-en="signal: application reference not in your internal system.">signal: referenca prijave ne postoji u vašem internom sistemu.</li>
          <li data-sr="signal: CC lista ima adrese van vaše firme koje ne poznajete." data-en="signal: CC has unknown external addresses.">signal: CC lista ima adrese van vaše firme koje ne poznajete.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> regulatorni menadžer otvara prilog." data-en="<strong>Phase threshold:</strong> regulatory manager opens attachment."><strong>Prag faze:</strong> regulatorni menadžer otvara prilog.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Lažni dokumenti" data-en="Phase 2 — Fake documents">Faza 2 — Lažni dokumenti</h3>
        <p data-sr="Dokument izgleda uverljivo ali nije na portalu EMA." data-en="PDF with payment instructions and deadline table.">Dokument izgleda uverljivo ali nije na portalu EMA.</p>
        <ul class="bullets">
          <li data-sr="signal: nema istog broja u vašem EU portalu za prijave." data-en="signal: number not in your EU applications portal.">signal: nema istog broja u vašem EU portalu za prijave.</li>
          <li data-sr="signal: traže se poverljivi formulacioni podaci pre uplate." data-en="signal: confidential formulation data requested before payment.">signal: traže se poverljivi formulacioni podaci pre uplate.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="business-email-compromise.html" data-sr="BEC" data-en="BEC">BEC</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> razmatra se uplata iz operativnog budžeta." data-en="<strong>Phase threshold:</strong> payment from operational budget is considered."><strong>Prag faze:</strong> razmatra se uplata iz operativnog budžeta.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Uplata agentu" data-en="Phase 3 — Pay agent">Faza 3 — Uplata agentu</h3>
        <p data-sr="Novac napušta firmu bez ugovora sa EMA." data-en="Finance approves a small amount to consultant from message.">Novac napušta firmu bez ugovora sa EMA.</p>
        <ul class="bullets">
          <li data-sr="signal: konsultant nije na listi odobrenih dobavljača." data-en="signal: consultant not on approved vendor list.">signal: konsultant nije na listi odobrenih dobavljača.</li>
          <li data-sr="signal: račun je u zemlji koja nije sedište vašeg glavnog regulatornog kontakta." data-en="signal: account in country not matching main regulatory contact seat.">signal: račun je u zemlji koja nije sedište vašeg glavnog regulatornog kontakta.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> uplata je izvršena." data-en="<strong>Phase threshold:</strong> payment executed."><strong>Prag faze:</strong> uplata je izvršena.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Dodatni koraci" data-en="Phase 4 — Extra steps">Faza 4 — Dodatni koraci</h3>
        <p data-sr="Lanac naknada nastavlja se." data-en="New request for publication or translation fee.">Lanac naknada nastavlja se.</p>
        <ul class="bullets">
          <li data-sr="signal: svaki korak obećava odobrenje za 48 sati." data-en="signal: each step promises approval in 48 hours.">signal: svaki korak obećava odobrenje za 48 sati.</li>
          <li data-sr="signal: ista osoba traži drugačiji naziv firme primaoca." data-en="signal: same person asks for different payee company name.">signal: ista osoba traži drugačiji naziv firme primaoca.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="compliance-fee-scam.html" data-sr="Compliance" data-en="Compliance fee scam">Compliance</a></li>
            <li><a href="advance-fee-fraud.html" data-sr="Uplata unapred" data-en="Advance fee">Uplata unapred</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> višestruke uplate bez promene statusa prijave." data-en="<strong>Phase threshold:</strong> multiple payments without application status change."><strong>Prag faze:</strong> višestruke uplate bez promene statusa prijave.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Provera sa EMA" data-en="Phase 5 — EMA check">Faza 5 — Provera sa EMA</h3>
        <p data-sr="Pravi status prijave ne uključuje ovu uplatu." data-en="Official EMA channel or EU portal shows no such fee requested.">Pravi status prijave ne uključuje ovu uplatu.</p>
        <ul class="bullets">
          <li data-sr="signal: regulator kaže da ne prepoznaje broj iz pisma." data-en="signal: regulator does not recognise number from letter.">signal: regulator kaže da ne prepoznaje broj iz pisma.</li>
          <li data-sr="signal: u sistemu nema zahteva za hitnu uplatu trećoj strani." data-en="signal: system shows no urgent third-party payment request.">signal: u sistemu nema zahteva za hitnu uplatu trećoj strani.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> interna potvrda da je došlo do prevare." data-en="<strong>Phase threshold:</strong> internal confirmation fraud occurred."><strong>Prag faze:</strong> interna potvrda da je došlo do prevare.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Incident i prijava" data-en="Phase 6 — Incident and report">Faza 6 — Incident i prijava</h3>
        <p data-sr="IT i pravni tim dokumentuju incident." data-en="If sensitive data left via attachment or link, a leak assessment follows.">IT i pravni tim dokumentuju incident.</p>
        <ul class="bullets">
          <li data-sr="signal: korisnici prijavljuju isti imejl šablon." data-en="signal: users report same email template.">signal: korisnici prijavljuju isti imejl šablon.</li>
          <li data-sr="signal: domen šaljilaca se menja ali tekst ostaje isti." data-en="signal: sender domains change but text stays same.">signal: domen šaljilaca se menja ali tekst ostaje isti.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="fake-medicine-scam.html" data-sr="Lažni lekovi" data-en="Fake medicine scam">Lažni lekovi</a></li>
            <li><a href="fake-eu-program-scam.html" data-sr="Lažni EU programi" data-en="Fake EU programmes">Lažni EU programi</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> uplate su zaustavljene i obavešteni su regulatori ako je potrebno." data-en="<strong>Phase threshold:</strong> payments stopped and regulators notified if needed."><strong>Prag faze:</strong> uplate su zaustavljene i obavešteni su regulatori ako je potrebno.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="EMA traži uplatu preko konsultanta iz hladnog imejla." data-en="EMA asks payment via consultant from cold email.">EMA traži uplatu preko konsultanta iz hladnog imejla.</li>
        <li data-sr="Domen nije ema.europa.eu." data-en="Domain is not ema.europa.eu.">Domen nije ema.europa.eu.</li>
        <li data-sr="Hitna taksa da bi se sačuvalo odobrenje." data-en="Urgent fee to save approval.">Hitna taksa da bi se sačuvalo odobrenje.</li>
        <li data-sr="Zahtev za kripto ili devizni račun van EU." data-en="Crypto or non-EU currency account request.">Zahtev za kripto ili devizni račun van EU.</li>
        <li data-sr="Referenca prijave ne postoji u vašem sistemu." data-en="Application reference missing from your system.">Referenca prijave ne postoji u vašem sistemu.</li>
        <li data-sr="Traže puna dokumenta bez šifrovanja." data-en="Full documents requested without encryption.">Traže puna dokumenta bez šifrovanja.</li>
        <li data-sr="Pritisak da ne obavestite kvalitet ili regulatornog vodju." data-en="Pressure not to inform quality or regulatory lead.">Pritisak da ne obavestite kvalitet ili regulatornog vodju.</li>
        <li data-sr="PDF niske rezolucije ili pogrešan naziv agencije." data-en="Low-res PDF or wrong agency name.">PDF niske rezolucije ili pogrešan naziv agencije.</li>
        <li data-sr="Isti šablon stiže konkurentu u istoj nedelji." data-en="Same template hits competitor same week.">Isti šablon stiže konkurentu u istoj nedelji.</li>
        <li data-sr="Nema potpisa osobe iz javnog imenika EMA." data-en="No signature from EMA public directory person.">Nema potpisa osobe iz javnog imenika EMA.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Regulativa" data-en="Regulatory">Regulativa</div>
          <ul class="bullets">
            <li data-sr="Uporedite broj prijave sa EU portalom za lekove." data-en="Match application number to EU medicines portal.">Uporedite broj prijave sa EU portalom za lekove.</li>
            <li data-sr="Kontaktirajte EMA kroz zvanični kontakt sa sajta." data-en="Contact EMA through official site contact.">Kontaktirajte EMA kroz zvanični kontakt sa sajta.</li>
            <li data-sr="Pitajte lokalni regulator da li je video sličan zahtev." data-en="Ask national regulator if they saw similar request.">Pitajte lokalni regulator da li je video sličan zahtev.</li>
            <li data-sr="Proverite SPF/DKIM ili bar ručno domen pošiljaoca." data-en="Check SPF/DKIM or manually verify sender domain.">Proverite SPF/DKIM ili bar ručno domen pošiljaoca.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Finansije" data-en="Finance">Finansije</div>
          <ul class="bullets">
            <li data-sr="Ne odobravajte uplatu bez internog RA broja predmeta." data-en="Do not approve payment without internal RA file ID.">Ne odobravajte uplatu bez internog RA broja predmeta.</li>
            <li data-sr="Zahtevajte ugovor sa konsultantom koji navodi EMA." data-en="Require consultant contract referencing EMA.">Zahtevajte ugovor sa konsultantom koji navodi EMA.</li>
            <li data-sr="Odbijte kripto i gotovinske kanale." data-en="Refuse crypto and cash channels.">Odbijte kripto i gotovinske kanale.</li>
            <li data-sr="Arhivirajte imejl za pravnu prijavu." data-en="Archive email for legal report.">Arhivirajte imejl za pravnu prijavu.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
      <ul class="bullets">
        <li data-sr="Da li broj prijave postoji u našem RA sistemu?" data-en="Does application number exist in our RA system?">Da li broj prijave postoji u našem RA sistemu?</li>
        <li data-sr="Da li je domen ema.europa.eu?" data-en="Is domain ema.europa.eu?">Da li je domen ema.europa.eu?</li>
        <li data-sr="Da li je ovo pismo replikirano u zvaničnom portalu?" data-en="Is this letter reflected in official portal?">Da li je ovo pismo replikirano u zvaničnom portalu?</li>
        <li data-sr="Da li je konsultant na našoj odobrenoj listi?" data-en="Is consultant on our approved list?">Da li je konsultant na našoj odobrenoj listi?</li>
        <li data-sr="Da li postoji budžetska stavka za ovu naknadu?" data-en="Is there a budget line for this fee?">Da li postoji budžetska stavka za ovu naknadu?</li>
        <li data-sr="Da li bi EMA tražila kripto?" data-en="Would EMA ask for crypto?">Da li bi EMA tražila kripto?</li>
        <li data-sr="Da li je rok manji od 24 sata?" data-en="Is deadline under 24 hours?">Da li je rok manji od 24 sata?</li>
        <li data-sr="Da li nas tera da ne pitamo lokalni regulator?" data-en="Does it pressure us not to ask national regulator?">Da li nas tera da ne pitamo lokalni regulator?</li>
        <li data-sr="Da li su traženi poverljivi podaci van uobičajenog CESP kanala?" data-en="Confidential data asked outside usual CESP channel?">Da li su traženi poverljivi podaci van uobičajenog CESP kanala?</li>
        <li data-sr="Da li je konkurent dobio isti imejl?" data-en="Did a competitor get the same email?">Da li je konkurent dobio isti imejl?</li>
        <li data-sr="Da li smo već platili i status prijave isti?" data-en="Did we pay and application status unchanged?">Da li smo već platili i status prijave isti?</li>
        <li data-sr="Da li pravni odobrava uplatu trećoj strani?" data-en="Does legal approve third-party payment?">Da li pravni odobrava uplatu trećoj strani?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Zaustavite sve uplate i obavestite RA vodju." data-en="Stop payments and notify RA lead.">Zaustavite sve uplate i obavestite RA vodju.</li>
        <li data-sr="Proverite referencu u zvaničnom EU sistemu." data-en="Verify reference in official EU system.">Proverite referencu u zvaničnom EU sistemu.</li>
        <li data-sr="Kontaktirajte EMA zvaničnim putem." data-en="Contact EMA officially.">Kontaktirajte EMA zvaničnim putem.</li>
        <li data-sr="Arhivirajte imejl i obavestite IT o prilogu." data-en="Archive email and notify IT about attachment.">Arhivirajte imejl i obavestite IT o prilogu.</li>
        <li data-sr="Prijavite prevaru policiji ako je došlo do uplate ili curenja." data-en="Report fraud to police if payment or leak occurred.">Prijavite prevaru policiji ako je došlo do uplate ili curenja.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li broj prijave postoji kod vas u bazi?" data-en="Does application number exist in your database?">Da li broj prijave postoji kod vas u bazi?</li>
            <li data-sr="Da li ste zvanično pitali EMA bez forwardovanja imejla?" data-en="Did you ask EMA officially without forwarding the email?">Da li ste zvanično pitali EMA bez forwardovanja imejla?</li>
            <li data-sr="Da li bi ovu uplatu odobrio interni pravnik?" data-en="Would internal counsel approve this payment?">Da li bi ovu uplatu odobrio interni pravnik?</li>
            <li data-sr="Da li je primalac povezan sa bilo kojim javnim ugovorom?" data-en="Is payee linked to any public contract?">Da li je primalac povezan sa bilo kojim javnim ugovorom?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Hajde da prvo uporedimo broj sa portalom, pa tek onda platimo." data-en="Let's match the number to the portal first, then pay.">Hajde da prvo uporedimo broj sa portalom, pa tek onda platimo.</li>
            <li data-sr="Regulatorne takse ne idu na lični račun konsultanta iz imejla." data-en="Regulatory fees do not go to consultant personal account from email.">Regulatorne takse ne idu na lični račun konsultanta iz imejla.</li>
            <li data-sr="Hitni rok od jednog dana je retko legitimno u ovom kontekstu." data-en="One-day urgent deadline is rarely legitimate here.">Hitni rok od jednog dana je retko legitimno u ovom kontekstu.</li>
            <li data-sr="Ako prilog traži lozinku, ne otvaraj ga na radnom računaru." data-en="If attachment asks for password, do not open on work PC.">Ako prilog traži lozinku, ne otvaraj ga na radnom računaru.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
