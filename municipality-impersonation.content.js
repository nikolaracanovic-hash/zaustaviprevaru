window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["municipality-impersonation"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi lažno predstavljanje opštinskih organa" data-en="Introduction: how municipality impersonation works">Uvod: kako radi lažno predstavljanje opštinskih organa</h2>
      <p data-sr="Lažno predstavljanje opštinskih organa cilja na vlasničke i zakupne odnose sa nekretninama, komunalne obaveze i dozvole. Prevarant šalje pismo ili dolazi na vrata kao inspektor komunalne policije, građevinskog inspektora, inspektora za adresnu prijavu ili komunalnog referenta. Problem koji se navodi je uvek konkretan: neplaćen komunalni doprinos, istekla dozvola za reklamu, neprijavljena dogradnja, neplaćena komunalna taksa." data-en="Municipality impersonation targets property ownership and rental relationships, communal obligations, and permits. The fraudster sends a letter or arrives at the door as a municipal police inspector, building inspector, address registration inspector, or communal clerk. The cited problem is always concrete: unpaid communal contribution, expired advertising permit, unreported addition to a building, unpaid communal fee.">Lažno predstavljanje opštinskih organa cilja na vlasnike nekretnina i zakupce. Inspektor ili referent tvrdi za neplaćene komunalne obaveze, istekle dozvole ili neprijavljene radove — i zahteva hitnu uplatu kazne ili takse.</p>
      <p data-sr="Šema koristi fragmentiranost komunalne administracije — mnogo različitih opštinskih službi, mnogo vrsta taksi i dozvola — što otežava brzu proveru. Žrtva ne zna tačno koje su komunalne obaveze aktivne za njenu nekretninu i ne može odmah reći da li je zahtev lažan." data-en="The scheme exploits the fragmented nature of municipal administration — many different municipal services, many types of fees and permits — which makes quick verification difficult. The victim does not know exactly which communal obligations are active for their property and cannot immediately say whether the demand is fake.">Šema eksploatiše fragmentiranost komunalne administracije. Žrtva ne zna tačno koje obaveze ima i ne može odmah reći da li je zahtev lažan.</p>
      <div class="callout" data-sr="<strong>Model:</strong> pismo ili poseta → opštinski inspektor + rešenje → neplaćena taksa ili istekla dozvola → rok → kazna ili deregistracija → uplata." data-en="<strong>Model:</strong> letter or visit → municipal inspector + decision → unpaid fee or expired permit → deadline → fine or deregistration → payment."><strong>Model:</strong> pismo ili poseta → opštinski inspektor + rešenje → neplaćena taksa ili istekla dozvola → rok → kazna ili deregistracija → uplata.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> meta prima rešenje opštine sa iznosom dugovanja i rokom za plaćanje." data-en="<strong>Threshold:</strong> the target receives a municipal decision with a debt amount and payment deadline."><strong>Prag:</strong> meta prima rešenje opštine sa iznosom dugovanja i rokom za plaćanje.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika komunalne prevare" data-en="How it works: municipal scam mechanics">Kako generalno radi: mehanika komunalne prevare</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gradi opštinski autoritet" data-en="What builds municipal authority">Šta gradi opštinski autoritet</div>
          <ul class="bullets">
            <li data-sr="naziv opštine, broj rešenja, ime inspektora i referentni period." data-en="municipality name, decision number, inspector name, and reference period.">naziv opštine, broj rešenja, ime inspektora i referentni period.</li>
            <li data-sr="poseta na terenu — inspektor koji dođe na vrata deluje legitimnije od pisma." data-en="on-site visit — an inspector who arrives at the door appears more legitimate than a letter.">poseta na terenu — inspektor koji dođe na vrata deluje legitimnije od pisma.</li>
            <li data-sr="legitimacijska kartica ili pečat na dokumentu koji se predaje." data-en="identification card or stamp on the document being handed over.">legitimacijska kartica ili pečat na dokumentu koji se predaje.</li>
            <li data-sr="referenca na stvaran komunalni problem koji žrtva možda ima." data-en="reference to a real communal issue the victim may actually have.">referenca na stvaran komunalni problem koji žrtva možda ima.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Kako se uvodi uplata" data-en="How payment is introduced">Kako se uvodi uplata</div>
          <ul class="bullets">
            <li data-sr="iznos kazne ili takse koji je u realnom opsegu za vrstu prekršaja." data-en="fine or fee amount in a realistic range for the type of violation.">iznos kazne ili takse koji je u realnom opsegu za vrstu prekršaja.</li>
            <li data-sr="rok od 24–72 sata uz prijetnju uvećanom kaznom ili deregistracijom adrese." data-en="24–72 hour deadline with a threat of an increased fine or address deregistration.">rok od 24–72 sata uz prijetnju uvećanom kaznom ili deregistracijom adrese.</li>
            <li data-sr="opcija uplate gotovinom inspektoru na licu mesta." data-en="option to pay cash to the inspector on the spot.">opcija uplate gotovinom inspektoru na licu mesta.</li>
            <li data-sr="instrukcija da se uplati na nestandardni nalog ili da se da gotovina." data-en="instruction to pay to a non-standard account or to provide cash.">instrukcija da se uplati na nestandardni nalog ili da se da gotovina.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)." data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Pismo ili dolazak inspektora" data-en="Phase 1 — Letter or inspector visit">Faza 1 — Pismo ili dolazak inspektora</h3>
        <p data-sr="Meta prima pismo s rešenjem opštine ili inspektor dolazi na vrata. U oba slučaja problem je konkretan i tiče se imovine ili adrese žrtve: neplaćen komunalni doprinos, neprijavljena adaptacija, istekla dozvola za natkrivenu terasu." data-en="The target receives a letter with a municipal decision or an inspector arrives at the door. In both cases the problem is concrete and concerns the victim's property or address: unpaid communal contribution, unreported renovation, expired covered terrace permit.">Pismo ili poseta inspektora. Problem je konkretan i tiče se imovine: neplaćena taksa, istekla dozvola ili neprijavljena adaptacija.</p>
        <ul class="bullets">
          <li data-sr="signal: kazna se mora platiti odmah ili gotovinom inspektoru na licu mesta." data-en="signal: fine must be paid immediately or in cash to the inspector on the spot.">signal: kazna se mora platiti odmah ili gotovinom inspektoru na licu mesta.</li>
          <li data-sr="signal: rešenje nema arhivski broj koji se može proveriti u opštinskoj administraciji." data-en="signal: the decision has no archive number verifiable in municipal administration.">signal: rešenje nema arhivski broj koji se može proveriti u opštinskoj administraciji.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta prihvati da problem postoji i pita kako da ga reši." data-en="<strong>Threshold:</strong> the target accepts that the problem exists and asks how to resolve it."><strong>Prag faze:</strong> meta prihvati da problem postoji i pita kako da ga reši.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Ponuda brze nagodbe" data-en="Phase 2 — Quick settlement offer">Faza 2 — Ponuda brze nagodbe</h3>
        <p data-sr="Inspektor nudi brzu nagodbu: plati odmah gotovinom i ne ide u žalbeni postupak, ceo problem rešen za 15 minuta. Alternativa je dugotrajan administrativni postupak s većim troškovima. Ova logika je dizajnirana da isključi proveru kroz zvanične kanale." data-en="The inspector offers a quick settlement: pay cash immediately and avoid the appeal process, entire problem resolved in 15 minutes. The alternative is a lengthy administrative process with higher costs. This logic is designed to prevent verification through official channels.">Inspektor nudi brzu nagodbu gotovinom: plati odmah i izbegni dugotrajan postupak. Logika eliminiše proveru.</p>
        <ul class="bullets">
          <li data-sr="signal: gotovinska uplata inspektoru nije standardna administrativna procedura." data-en="signal: cash payment to an inspector is not standard administrative procedure.">signal: gotovinska uplata inspektoru nije standardna administrativna procedura.</li>
          <li data-sr="signal: legitimni inspektor ne nudi nagodbene opcije na terenu." data-en="signal: a legitimate inspector does not offer settlement options in the field.">signal: legitimni inspektor ne nudi nagodbene opcije na terenu.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="fake-permit-license-scam.html" data-sr="Lažne agencije za dozvole i licence" data-en="Fake permit and license agencies">Lažne agencije za dozvole i licence</a></li>
            <li><a href="utility-bill-scam.html" data-sr="Lažni računi za komunalne usluge" data-en="Fake utility bill scams">Lažni računi za komunalne usluge</a></li>
          </ul>
        </div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Uplata i nestajanje" data-en="Phase 3 — Payment and disappearance">Faza 3 — Uplata i nestajanje</h3>
        <p data-sr="Meta plaća gotovinom inspektoru ili uplaćuje na nalog koji nije žiro račun opštine. Inspektor odlazi. Potvrda o uplati ili ne postoji ili je lažna. Kada meta kontaktira opštinu, saznaje da inspektor nije njihov i da problem na koji su se pozvali ne postoji u evidenciji." data-en="The target pays cash to the inspector or transfers to an account that is not the municipality's official account. The inspector leaves. The payment receipt either does not exist or is fake. When the target contacts the municipality, they learn the inspector is not theirs and the cited problem does not exist in the records.">Meta plaća gotovinom ili na lažni nalog. Inspektor odlazi. Opština ne zna za inspektora niti za problem koji je naveden.</p>
        <div class="callout" data-sr="<strong>Indikator:</strong> opštinska kazna se plaća isključivo na žiro račun opštine putem uplatnice — nikad gotovinom inspektoru na terenu." data-en="<strong>Indicator:</strong> a municipal fine is paid exclusively to the municipality's bank account via payment slip — never cash to an inspector in the field."><strong>Indikator:</strong> opštinska kazna se plaća isključivo na žiro račun opštine putem uplatnice — nikad gotovinom inspektoru na terenu.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 4 — Recovery ili novi inspektor" data-en="Phase 4 — Recovery or new inspector">Faza 4 — Recovery ili novi inspektor</h3>
        <p data-sr="Posle prve uplate može doći novi inspektor s novim problemom, ili neko zove nudeći povraćaj prethodne uplate uz avans. Oba scenarija su nastavak iste šeme." data-en="After the first payment, a new inspector may arrive with a new problem, or someone calls offering a refund of the previous payment for an advance. Both scenarios are a continuation of the same scheme.">Posle prve uplate može doći novi inspektor ili neko nudi povraćaj uz novu uplatu — varijanta lažnog povraćaja.</p>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="inspektor nudi gotovinu kao opciju plaćanja na terenu." data-en="inspector offers cash as a payment option in the field.">inspektor nudi gotovinu kao opciju plaćanja na terenu.</li>
        <li data-sr="rešenje nema arhivski broj koji se može proveriti u opštinskoj pisarnici." data-en="the decision has no archive number verifiable at the municipal registry.">rešenje nema arhivski broj koji se može proveriti u opštinskoj pisarnici.</li>
        <li data-sr="nalog za uplatu nije žiro račun opštine koji je javno dostupan." data-en="the payment account is not the municipality's publicly available bank account.">nalog za uplatu nije žiro račun opštine koji je javno dostupan.</li>
        <li data-sr="rok je 24h uz prijetnju deregistracijom adrese ili većom kaznom." data-en="deadline is 24 hours with a threat of address deregistration or larger fine.">rok je 24h uz prijetnju deregistracijom adrese ili većom kaznom.</li>
        <li data-sr="inspektor odvraća od poziva opštini za proveru." data-en="inspector discourages calling the municipality for verification.">inspektor odvraća od poziva opštini za proveru.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 6 brzih provera" data-en="Checks: 6 quick checks">Provere: 6 brzih provera</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Provere" data-en="Checks">Provere</div>
          <ul class="bullets">
            <li data-sr="pozovi opštinsku pisarnicu i pitaj za arhivski broj rešenja." data-en="call the municipal registry and ask for the decision's archive number.">pozovi opštinsku pisarnicu i pitaj za arhivski broj rešenja.</li>
            <li data-sr="proveri žiro račun opštine na sajtu i uporedi s uplatnim nalogom." data-en="check the municipality's bank account on their website and compare with the payment order.">proveri žiro račun opštine na sajtu i uporedi s uplatnim nalogom.</li>
            <li data-sr="traži legitimacijsku karticu inspektora i proveri je na sajtu opštine." data-en="request the inspector's identification card and verify it on the municipality website.">traži legitimacijsku karticu inspektora i proveri je na sajtu opštine.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Dodatne provere" data-en="Additional checks">Dodatne provere</div>
          <ul class="bullets">
            <li data-sr="komunalne kazne se uvek plaćaju putem uplatnice na žiro račun — nikad gotovinom inspektoru." data-en="communal fines are always paid via payment slip to the bank account — never cash to an inspector.">komunalne kazne se uvek plaćaju putem uplatnice na žiro račun — nikad gotovinom inspektoru.</li>
            <li data-sr="zatraži pisano rešenje s arhivskim brojem pre ikakve uplate." data-en="request a written decision with an archive number before any payment.">zatraži pisano rešenje s arhivskim brojem pre ikakve uplate.</li>
            <li data-sr="inspektor koji ne dozvoljava proveru i insistira na gotovini nije legitimni opštinski inspektor." data-en="an inspector who does not allow verification and insists on cash is not a legitimate municipal inspector.">inspektor koji ne dozvoljava proveru i insistira na gotovini nije legitimni opštinski inspektor.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 10 pitanja pre opštinske uplate" data-en="Checklist: 10 questions before municipal payment">Checklista: 10 pitanja pre opštinske uplate</h2>
      <ul class="bullets">
        <li data-sr="Da li rešenje ima arhivski broj koji se može proveriti u pisarnici?" data-en="Does the decision have an archive number verifiable at the registry?">Da li rešenje ima arhivski broj koji se može proveriti u pisarnici?</li>
        <li data-sr="Da li je žiro račun za uplatu identičan zvaničnom žiro računu opštine?" data-en="Is the payment account identical to the municipality's official bank account?">Da li je žiro račun za uplatu identičan zvaničnom žiro računu opštine?</li>
        <li data-sr="Da li inspektor ima legitimacijsku karticu s imenom i brojem?" data-en="Does the inspector have an identification card with name and number?">Da li inspektor ima legitimacijsku karticu s imenom i brojem?</li>
        <li data-sr="Da li opština potvrđuje da je inspektor zaposlen kod njih?" data-en="Does the municipality confirm the inspector is employed by them?">Da li opština potvrđuje da je inspektor zaposlen kod njih?</li>
        <li data-sr="Da li kazna ima zakonski osnov koji se može proveriti?" data-en="Does the fine have a legal basis that can be verified?">Da li kazna ima zakonski osnov koji se može proveriti?</li>
        <li data-sr="Da li inspektor zabranjuje proveru ili odvraća od poziva opštini?" data-en="Does the inspector forbid verification or discourage calling the municipality?">Da li inspektor zabranjuje proveru ili odvraća od poziva opštini?</li>
        <li data-sr="Da li se gotovinska uplata nudi kao opcija za plaćanje kazne?" data-en="Is cash payment offered as an option for paying the fine?">Da li se gotovinska uplata nudi kao opcija za plaćanje kazne?</li>
        <li data-sr="Da li je rok od 24h u skladu sa standardnim rokovima žalbenog postupka?" data-en="Is the 24-hour deadline in line with standard appeal period deadlines?">Da li je rok od 24h u skladu sa standardnim rokovima žalbenog postupka?</li>
        <li data-sr="Da li postoje prethodni razgovori s opštinom o ovom problemu?" data-en="Are there prior conversations with the municipality about this problem?">Da li postoje prethodni razgovori s opštinom o ovom problemu?</li>
        <li data-sr="Da li pauza od 24h menja situaciju ili kontakt postaje agresivniji?" data-en="Does a 24-hour pause change the situation or does the contact become more aggressive?">Da li pauza od 24h menja situaciju ili kontakt postaje agresivniji?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="ne plaćaj gotovinom na terenu — uvek zatraži pisano rešenje s arhivskim brojem." data-en="do not pay cash in the field — always request a written decision with an archive number.">ne plaćaj gotovinom na terenu — uvek zatraži pisano rešenje s arhivskim brojem.</li>
        <li data-sr="pozovi opštinu na zvanični broj iz imenika i pitaj za inspektora i predmet." data-en="call the municipality on the official number from the phone book and ask about the inspector and case.">pozovi opštinu na zvanični broj iz imenika i pitaj za inspektora i predmet.</li>
        <li data-sr="proveri žiro račun na sajtu opštine pre ikakve bankarske uplate." data-en="check the bank account on the municipality website before any bank payment.">proveri žiro račun na sajtu opštine pre ikakve bankarske uplate.</li>
        <li data-sr="dokumentuj posetu: fotografišite legitimaciju, dokument i vozilo ako je prisutno." data-en="document the visit: photograph the ID card, document, and vehicle if present.">dokumentuj posetu: fotografišite legitimaciju, dokument i vozilo ako je prisutno.</li>
        <li data-sr="prijavi lažnog inspektora policiji i opštini." data-en="report the fake inspector to police and the municipality.">prijavi lažnog inspektora policiji i opštini.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li inspektor ima legitimacijsku karticu s imenom i brojem?" data-en="Does the inspector have an identification card with name and number?">Da li inspektor ima legitimacijsku karticu s imenom i brojem?</li>
            <li data-sr="Da li rešenje ima arhivski broj koji možemo proveriti u pisarnici?" data-en="Does the decision have an archive number we can verify at the registry?">Da li rešenje ima arhivski broj koji možemo proveriti u pisarnici?</li>
            <li data-sr="Da li je nudio gotovinu kao opciju plaćanja na terenu?" data-en="Did they offer cash as a payment option in the field?">Da li je nudio gotovinu kao opciju plaćanja na terenu?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Opštinska kazna se plaća uplatnicom na žiro račun — nikad gotovinom inspektoru." data-en="A municipal fine is paid via slip to the bank account — never cash to an inspector.">Opštinska kazna se plaća uplatnicom na žiro račun — nikad gotovinom inspektoru.</li>
            <li data-sr="Hajde da pozovemo opštinu da potvrdimo identitet inspektora pre bilo čega." data-en="Let's call the municipality to confirm the inspector's identity before anything.">Hajde da pozovemo opštinu da potvrdimo identitet inspektora pre bilo čega.</li>
            <li data-sr="Legitimni inspektor dozvoljava proveru i ne insistira na gotovini." data-en="A legitimate inspector allows verification and does not insist on cash.">Legitimni inspektor dozvoljava proveru i ne insistira na gotovini.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card sources" id="sources">
      <h2 data-sr="Povezane prevare" data-en="Related scams">Povezane prevare</h2>
      <ul class="bullets">
        <li><a href="government-impersonation.html" data-sr="Lažno predstavljanje državnih organa" data-en="Government impersonation scams">Lažno predstavljanje državnih organa</a></li>
        <li><a href="fake-permit-license-scam.html" data-sr="Lažne agencije za dozvole i licence" data-en="Fake permit and license agencies">Lažne agencije za dozvole i licence</a></li>
        <li><a href="utility-bill-scam.html" data-sr="Lažni računi za komunalne usluge" data-en="Fake utility bill scams">Lažni računi za komunalne usluge</a></li>
        <li><a href="fake-fine-scam.html" data-sr="Lažne kazne i nalozi za plaćanje" data-en="Fake fines and payment orders">Lažne kazne i nalozi za plaćanje</a></li>
      </ul>
    </section>
  `
};
