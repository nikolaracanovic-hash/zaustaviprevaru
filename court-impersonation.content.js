window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["court-impersonation"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako rade lažni sudski pozivi i taksene prevare" data-en="Introduction: how fake court summons and fee scams work">Uvod: kako rade lažni sudski pozivi i taksene prevare</h2>
      <p data-sr="Lažni sudski pozivi kombinuju autoritet pravosuđa s nepoznavanjem sudskih procedura. Prevarant šalje pismo ili zove tvrdeći da je sudski službenik, da postoji predmet na sudu na ime žrtve i da je potrebno platiti sudske takse ili troškove postupka pre prvog ročišta. Ako se takse ne plate do roka, sud donosi presudu u odsustvu." data-en="Fake court summons combine the authority of the judiciary with the victim's unfamiliarity with legal procedures. The fraudster sends a letter or calls claiming to be a court official, that there is a case at court in the victim's name, and that court fees or procedural costs must be paid before the first hearing. If fees are not paid by the deadline, the court issues a default judgment.">Lažni sudski pozivi kombinuju autoritet pravosuđa s nepoznavanjem sudskih procedura. Prevarant tvrdi da postoji sudski predmet i da se moraju platiti takse pre ročišta da bi se izbegla presuda u odsustvu.</p>
      <p data-sr="Šema je efikasna jer se oslanja na dve realne anksioznosti: strah od sudskog postupka i neznanje o tome kako sudski postupci zaista funkcionišu. Većina žrtava nikad nije imala iskustvo s pravosudnim sistemom i ne zna da sudovi ne naplaćuju takse telefonom niti šalju ultimatume s rokom od 48 sati." data-en="The scheme works because it exploits two real anxieties: the fear of legal proceedings and ignorance about how legal proceedings actually work. Most victims have never experienced the judicial system and do not know that courts do not charge fees by phone or send ultimatums with 48-hour deadlines.">Šema funkcioniše jer se oslanja na strah od suda i neznanje o sudskim procedurama. Većina žrtava ne zna da sudovi ne naplaćuju takse telefonom.</p>
      <div class="callout" data-sr="<strong>Model:</strong> pismo ili poziv → sud + broj predmeta → zahtev za plaćanjem taksi → rok → prijetnja presudom u odsustvu ili nalogom za hapšenje." data-en="<strong>Model:</strong> letter or call → court + case number → fee payment demand → deadline → default judgment or arrest warrant threat."><strong>Model:</strong> pismo ili poziv → sud + broj predmeta → zahtev za plaćanjem taksi → rok → prijetnja presudom u odsustvu ili nalogom za hapšenje.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> meta prima sudski poziv sa datumom ročišta i zahtevom za plaćanje taksi pre dolaska." data-en="<strong>Threshold:</strong> the target receives a court summons with a hearing date and a demand to pay fees before appearing."><strong>Prag:</strong> meta prima sudski poziv sa datumom ročišta i zahtevom za plaćanje taksi pre dolaska.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika sudskog autoriteta" data-en="How it works: judicial authority mechanics">Kako generalno radi: mehanika sudskog autoriteta</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gradi autoritet suda" data-en="What builds court authority">Šta gradi autoritet suda</div>
          <ul class="bullets">
            <li data-sr="naziv suda, broj predmeta, ime sudije i datum ročišta koji zvuče konkretno." data-en="court name, case number, judge name, and hearing date that sound concrete.">naziv suda, broj predmeta, ime sudije i datum ročišta koji zvuče konkretno.</li>
            <li data-sr="zvanični izgled pismena: zaglavlje, pečat, potpis, referentni broj." data-en="official appearance of the document: header, stamp, signature, reference number.">zvanični izgled pismena: zaglavlje, pečat, potpis, referentni broj.</li>
            <li data-sr="pravna terminologija: tužba, tužilac, tuženi, ročište, presuda u odsustvu." data-en="legal terminology: claim, claimant, defendant, hearing, default judgment.">pravna terminologija: tužba, tužilac, tuženi, ročište, presuda u odsustvu.</li>
            <li data-sr="prijetnja nalogom za hapšenje ili izvršenjem sudske odluke." data-en="threat of an arrest warrant or enforcement of a court decision.">prijetnja nalogom za hapšenje ili izvršenjem sudske odluke.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Kako se uvodi zahtev za taksama" data-en="How the fee demand is introduced">Kako se uvodi zahtev za taksama</div>
          <ul class="bullets">
            <li data-sr="takse se moraju platiti pre ročišta da bi se meta mogla braniti." data-en="fees must be paid before the hearing to allow the target to defend themselves.">takse se moraju platiti pre ročišta da bi se meta mogla braniti.</li>
            <li data-sr="rok za uplatu je 24–72 sata od prijema poziva ili pisma." data-en="payment deadline is 24–72 hours from receipt of the summons or letter.">rok za uplatu je 24–72 sata od prijema poziva ili pisma.</li>
            <li data-sr="uplata se vrši na nestandardni nalog koji nije žiro račun suda." data-en="payment is made to a non-standard account that is not the court's official account.">uplata se vrši na nestandardni nalog koji nije žiro račun suda.</li>
            <li data-sr="bez uplate sud automatski donosi presudu na štetu žrtve." data-en="without payment, the court automatically issues a judgment against the target.">bez uplate sud automatski donosi presudu na štetu žrtve.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)." data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Pismo ili poziv sa sudskim pozivom" data-en="Phase 1 — Letter or call with court summons">Faza 1 — Pismo ili poziv sa sudskim pozivom</h3>
        <p data-sr="Meta prima pismo koje izgleda kao zvanično sudsko pismeno, ili zove je neko ko se predstavlja kao sudski referent. Pismeno sadrži naziv suda, broj predmeta, ime sudije, datum ročišta i iznos taksi koji se moraju platiti pre dolaska." data-en="The target receives a letter that looks like official court correspondence, or is called by someone presenting as a court clerk. The document contains the court name, case number, judge name, hearing date, and fee amount to be paid before appearing.">Meta prima sudski poziv koji izgleda zvanično: naziv suda, broj predmeta, datum ročišta, iznos taksi. Pismo je optički uverljivo.</p>
        <ul class="bullets">
          <li data-sr="signal: sudski pozivi u standardnoj proceduri ne zahtevaju unaprednu uplatu taksi." data-en="signal: court summons in standard procedure do not require upfront fee payment.">signal: sudski pozivi u standardnoj proceduri ne zahtevaju unaprednu uplatu taksi.</li>
          <li data-sr="signal: rok za uplatu od 24–72 sata nije standardna sudska praksa." data-en="signal: 24–72 hour payment deadline is not standard court practice.">signal: rok za uplatu od 24–72 sata nije standardna sudska praksa.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta prihvati da postoji sudski predmet i pitanje „da li da platim takse“ postaje centralno." data-en="<strong>Threshold:</strong> target accepts that a court case exists and the question becomes whether to pay the fees."><strong>Prag faze:</strong> meta prihvati da postoji sudski predmet i pitanje 'da li da platim takse' postaje centralno.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Pritisak roka i eskalacija" data-en="Phase 2 — Deadline pressure and escalation">Faza 2 — Pritisak roka i eskalacija</h3>
        <p data-sr="Ako meta pita kako da proveri predmet ili kaže da želi da konsultuje advokata, kontakt postaje hitan: ročište je za 48 sati, advokat će koštati više od taksi, svaki sat bez uplate povećava troškove. Cilj je sprečiti nezavisnu verifikaciju." data-en="If the target asks how to verify the case or says they want to consult a lawyer, the contact becomes urgent: the hearing is in 48 hours, a lawyer will cost more than the fees, every hour without payment increases costs. The goal is preventing independent verification.">Kada meta traži proveru ili konsultaciju, kontakt eskalira: ročište je za 48h, advokat košta više od taksi. Cilj je sprečiti nezavisnu verifikaciju.</p>
        <ul class="bullets">
          <li data-sr="signal: legitimni sud dozvoljava više vremena i konsultacije sa advokatom." data-en="signal: a legitimate court allows more time and legal consultations.">signal: legitimni sud dozvoljava više vremena i konsultacije sa advokatom.</li>
          <li data-sr="signal: eskalacija pritiska pri prvom pitanju je karakteristika prevare." data-en="signal: pressure escalation at the first question is a scam characteristic.">signal: eskalacija pritiska pri prvom pitanju je karakteristika prevare.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="police-impersonation.html" data-sr="Lažno predstavljanje policije" data-en="Police impersonation scams">Lažno predstavljanje policije</a></li>
            <li><a href="advance-fee-fraud.html" data-sr="Uplata unapred" data-en="Advance-fee fraud">Uplata unapred</a></li>
          </ul>
        </div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Uplata taksi" data-en="Phase 3 — Fee payment">Faza 3 — Uplata taksi</h3>
        <p data-sr="Meta plaća iznos taksi na nalog koji nije žiro račun suda. Nalog je privatni, na nepoznatu firmu ili na adresu u inostranstvu. Sudska taksa u standardnoj proceduri plaća se na žiro račun suda koji je javno objavljen." data-en="The target pays the fee amount to an account that is not the court's official bank account. The account is private, in an unknown company's name, or at an address abroad. Actual court fees are paid to the court's publicly listed bank account.">Meta plaća na privatni nalog. Standardna sudska taksa plaća se na zvanični žiro račun suda — javno objavljen.</p>
        <ul class="bullets">
          <li data-sr="signal: uplatni nalog nije javno objavljen žiro račun suda koji se može proveriti na sajtu pravosuđa." data-en="signal: the payment account is not the court's publicly listed account verifiable on the justice website.">signal: uplatni nalog nije javno objavljen žiro račun suda koji se može proveriti na sajtu pravosuđa.</li>
          <li data-sr="signal: iznos taksi nije u skladu s tabelom taksi objavljenoj na sajtu suda." data-en="signal: the fee amount does not match the fee schedule published on the court website.">signal: iznos taksi nije u skladu s tabelom taksi objavljenoj na sajtu suda.</li>
        </ul>
        <div class="callout" data-sr="<strong>Indikator:</strong> sudska taksa nikad ne ide na privatni nalog. Proveriti žiro račun suda na sajtu pravosuđa pre ikakve uplate." data-en="<strong>Indicator:</strong> court fees never go to a private account. Check the court's bank account on the justice website before any payment."><strong>Indikator:</strong> sudska taksa nikad ne ide na privatni nalog. Proveriti žiro račun suda na sajtu pravosuđa pre ikakve uplate.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Nove takse i troškovi" data-en="Phase 4 — New fees and costs">Faza 4 — Nove takse i troškovi</h3>
        <p data-sr="Posle prve uplate dolaze nove: troškovi prevoda, pristojba za anonimnost, depozit za veštaka. Svaki novi zahtev ima novu pravnu osnovu i kraći rok. Ovo je avansna šema primenjena na sudski kontekst." data-en="After the first payment, new ones arrive: translation costs, anonymity fee, expert deposit. Each new demand has a new legal basis and a shorter deadline. This is the advance-fee scheme applied to a court context.">Posle prve uplate dolaze nove takse pod različitim osnovama. Avansna šema u sudskom pakovanju.</p>
        <div class="callout" data-sr="<strong>Filter:</strong> legitimni sud ne zahteva višestruke avansne uplate pre ročišta. Svaka nova taksa je signal da je prethodni zahtev bio lažan." data-en="<strong>Filter:</strong> a legitimate court does not request multiple advance payments before a hearing. Each new fee is a signal that the previous demand was fraudulent."><strong>Filter:</strong> legitimni sud ne zahteva višestruke avansne uplate pre ročišta. Svaka nova taksa je signal da je prethodni zahtev bio lažan.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Provera predmeta i otkrivanje prevare" data-en="Phase 5 — Case verification and scam discovery">Faza 5 — Provera predmeta i otkrivanje prevare</h3>
        <p data-sr="Kada meta pozove zvanični telefon suda ili poseti sud, saznaje da predmet ne postoji. Broj predmeta je izmišljen ili je broj realnog predmeta koji ne tiče žrtve. Kontakt prestaje odmah čim meta nagovesti da je proverila." data-en="When the target calls the court's official phone or visits the court, they learn the case does not exist. The case number is fabricated or belongs to a real case that has nothing to do with the victim. Contact ends immediately once the target hints they have checked.">Meta proverava u sudu i saznaje da predmet ne postoji. Kontakt odmah prestaje kada se nagovesti provera.</p>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="sud zahteva uplatu taksi telefonom ili SMS-om pre ročišta." data-en="court demands fee payment by phone or SMS before the hearing.">sud zahteva uplatu taksi telefonom ili SMS-om pre ročišta.</li>
        <li data-sr="rok za uplatu je 24–72 sata od prijema sudskog poziva." data-en="payment deadline is 24–72 hours from receipt of the court summons.">rok za uplatu je 24–72 sata od prijema sudskog poziva.</li>
        <li data-sr="uplatni nalog nije javno objavljen žiro račun suda." data-en="payment account is not the court's publicly listed bank account.">uplatni nalog nije javno objavljen žiro račun suda.</li>
        <li data-sr="posle prve uplate stiže zahtev za novom taksom pod drugim osnovom." data-en="after the first payment, a new fee demand arrives under a different basis.">posle prve uplate stiže zahtev za novom taksom pod drugim osnovom.</li>
        <li data-sr="kontakt zabranjuje konsultaciju sa advokatom pre uplate." data-en="contact forbids consultation with a lawyer before payment.">kontakt zabranjuje konsultaciju sa advokatom pre uplate.</li>
        <li data-sr="predmet se ne može naći u javnom registru predmeta suda." data-en="the case cannot be found in the court's public case registry.">predmet se ne može naći u javnom registru predmeta suda.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 6 brzih provera" data-en="Checks: 6 quick checks">Provere: 6 brzih provera</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Provere predmeta" data-en="Case checks">Provere predmeta</div>
          <ul class="bullets">
            <li data-sr="proveri broj predmeta u javnom e-registru predmeta suda." data-en="check the case number in the court's public e-case registry.">proveri broj predmeta u javnom e-registru predmeta suda.</li>
            <li data-sr="pozovi zvanični broj suda iz imenika i pitaj o predmetu." data-en="call the court's official number from the phone book and ask about the case.">pozovi zvanični broj suda iz imenika i pitaj o predmetu.</li>
            <li data-sr="poseti sud lično i zatraži uvid u spis." data-en="visit the court in person and request access to the file.">poseti sud lično i zatraži uvid u spis.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Provere zahteva" data-en="Demand checks">Provere zahteva</div>
          <ul class="bullets">
            <li data-sr="proveri žiro račun suda na sajtu pravosuđa i uporedi s nalogom iz pisma." data-en="check the court's bank account on the justice website and compare to the letter's account.">proveri žiro račun suda na sajtu pravosuđa i uporedi s nalogom iz pisma.</li>
            <li data-sr="konsultuj advokata pre ikakve uplate — konzultacija je u interesu žrtve." data-en="consult a lawyer before any payment — the consultation is in the victim's interest.">konsultuj advokata pre ikakve uplate — konzultacija je u interesu žrtve.</li>
            <li data-sr="iznos taksi treba da odgovara zvaničnoj tabeli taksi suda." data-en="the fee amount should correspond to the court's official fee schedule.">iznos taksi treba da odgovara zvaničnoj tabeli taksi suda.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 10 pitanja pre uplate sudskih taksi" data-en="Checklist: 10 questions before paying court fees">Checklista: 10 pitanja pre uplate sudskih taksi</h2>
      <ul class="bullets">
        <li data-sr="Da li se predmet može naći u javnom registru predmeta pod navedenim brojem?" data-en="Can the case be found in the public registry under the cited number?">Da li se predmet može naći u javnom registru predmeta pod navedenim brojem?</li>
        <li data-sr="Da li je žiro račun za uplatu identičan zvaničnom žiro računu suda?" data-en="Is the payment account identical to the court's official bank account?">Da li je žiro račun za uplatu identičan zvaničnom žiro računu suda?</li>
        <li data-sr="Da li iznos taksi odgovara zvaničnoj tabeli taksi objavljenoj na sajtu suda?" data-en="Does the fee amount match the official fee schedule published on the court website?">Da li iznos taksi odgovara zvaničnoj tabeli taksi objavljenoj na sajtu suda?</li>
        <li data-sr="Da li kontakt dozvoljava konsultaciju sa advokatom pre uplate?" data-en="Does the contact allow consultation with a lawyer before payment?">Da li kontakt dozvoljava konsultaciju sa advokatom pre uplate?</li>
        <li data-sr="Da li sud zaista koristi telefon ili SMS za zahteve ove vrste?" data-en="Does the court actually use phone or SMS for demands of this type?">Da li sud zaista koristi telefon ili SMS za zahteve ove vrste?</li>
        <li data-sr="Da li je rok od 24–72 sata u skladu sa standardnim sudskim rokovima?" data-en="Is the 24–72 hour deadline in line with standard court deadlines?">Da li je rok od 24–72 sata u skladu sa standardnim sudskim rokovima?</li>
        <li data-sr="Da li postoji prethodni kontakt s tom strankom ili situacijom koja bi dovela do tužbe?" data-en="Is there prior contact with that party or situation that would lead to a claim?">Da li postoji prethodni kontakt s tom strankom ili situacijom koja bi dovela do tužbe?</li>
        <li data-sr="Da li su se posle prve uplate pojavili novi zahtevi za taksama?" data-en="Did new fee demands appear after the first payment?">Da li su se posle prve uplate pojavili novi zahtevi za taksama?</li>
        <li data-sr="Da li se kontakt može pozvati nazad na javno objavljeni broj suda?" data-en="Can the contact be called back on the court's publicly listed number?">Da li se kontakt može pozvati nazad na javno objavljeni broj suda?</li>
        <li data-sr="Da li pauza od 24h menja situaciju ili kontakt insistira na hitnosti?" data-en="Does a 24-hour pause change the situation or does the contact insist on urgency?">Da li pauza od 24h menja situaciju ili kontakt insistira na hitnosti?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="proveri broj predmeta u javnom e-registru suda pre ikakve uplate." data-en="check the case number in the court's public e-registry before any payment.">proveri broj predmeta u javnom e-registru suda pre ikakve uplate.</li>
        <li data-sr="pozovi zvanični broj suda iz imenika i pitaj o predmetu i o uplatnom nalogu." data-en="call the court's official number from the phone book and ask about the case and payment account.">pozovi zvanični broj suda iz imenika i pitaj o predmetu i o uplatnom nalogu.</li>
        <li data-sr="konsultuj advokata pre ikakve uplate." data-en="consult a lawyer before any payment.">konsultuj advokata pre ikakve uplate.</li>
        <li data-sr="sačuvaj pismo ili snimak poziva kao dokaz." data-en="save the letter or call recording as evidence.">sačuvaj pismo ili snimak poziva kao dokaz.</li>
        <li data-sr="prijavi incident policiji i obavesti sud o lažnom pozivnom pismu." data-en="report the incident to police and notify the court about the fake summons letter.">prijavi incident policiji i obavesti sud o lažnom pozivnom pismu.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li smo proverili predmet u javnom registru pod brojem iz pisma?" data-en="Have we checked the case in the public registry under the number from the letter?">Da li smo proverili predmet u javnom registru pod brojem iz pisma?</li>
            <li data-sr="Da li je žiro račun identičan zvaničnom žiro računu suda?" data-en="Is the bank account identical to the court's official account?">Da li je žiro račun identičan zvaničnom žiro računu suda?</li>
            <li data-sr="Da li je advokat bio konzultovan pre uplate?" data-en="Was a lawyer consulted before payment?">Da li je advokat bio konzultovan pre uplate?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Sudske takse se plaćaju isključivo na žiro račun suda — ne na privatni nalog." data-en="Court fees are paid exclusively to the court's bank account — not to a private account.">Sudske takse se plaćaju isključivo na žiro račun suda — ne na privatni nalog.</li>
            <li data-sr="Broj predmeta može se proveriti u javnom registru za manje od 5 minuta." data-en="A case number can be verified in the public registry in less than 5 minutes.">Broj predmeta može se proveriti u javnom registru za manje od 5 minuta.</li>
            <li data-sr="Legitiman sud dozvoljava konsultacije i ne daje rok od 48 sati za sudske takse." data-en="A legitimate court allows consultations and does not give a 48-hour deadline for court fees.">Legitiman sud dozvoljava konsultacije i ne daje rok od 48 sati za sudske takse.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card sources" id="sources">
      <h2 data-sr="Povezane prevare" data-en="Related scams">Povezane prevare</h2>
      <ul class="bullets">
        <li><a href="government-impersonation.html" data-sr="Lažno predstavljanje državnih organa" data-en="Government impersonation scams">Lažno predstavljanje državnih organa</a></li>
        <li><a href="police-impersonation.html" data-sr="Lažno predstavljanje policije" data-en="Police impersonation scams">Lažno predstavljanje policije</a></li>
        <li><a href="fake-fine-scam.html" data-sr="Lažne kazne i nalozi za plaćanje" data-en="Fake fines and payment orders">Lažne kazne i nalozi za plaćanje</a></li>
        <li><a href="advance-fee-fraud.html" data-sr="Uplata unapred" data-en="Advance-fee fraud">Uplata unapred</a></li>
        <li><a href="impersonation-scam.html" data-sr="Lažno predstavljanje" data-en="Impersonation scam">Lažno predstavljanje</a></li>
      </ul>
    </section>
  `
};
