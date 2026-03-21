window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["vishing"] = {
  raw_html: `
    <!-- 1) UVOD -->
    <section class="card">
      <h2
        data-sr="Uvod: kako radi vishing"
        data-en="Introduction: how vishing works"
      >Uvod: kako radi vishing</h2>

      <p
        data-sr="Višing je telefonska prevara u kojoj glas zamenjuje autoritet. Poziv stiže bez najave, okvir razgovora se postavlja u prvih 30 sekundi, a meta nema vremena za proveru. Incident je uvek hitan: sumnjiva transakcija, kompromitovan nalog, istraga, paket, prenos broja. Kada meta prihvati okvir incidenta, svaki sledeći korak deluje kao nužna procedura."
        data-en="Vishing is a phone-based scam where voice substitutes authority. The call arrives unannounced, framing is set in the first 30 seconds, and the target has no time to verify. The incident is always urgent: suspicious transaction, compromised account, investigation, package, number porting. Once the target accepts the incident frame, every next step feels like necessary procedure."
      >Višing je telefonska prevara u kojoj glas zamenjuje autoritet. Poziv stiže bez najave, okvir se postavlja u prvih 30 sekundi, a meta nema vremena za proveru. Incident je uvek hitan: sumnjiva transakcija, kompromitovan nalog, istraga, paket, prenos broja. Kada meta prihvati okvir incidenta, svaki sledeći korak deluje kao nužna procedura.</p>

      <p
        data-sr="Napadač ne prodaje ništa i ne nudi nagradu. Rešava problem koji je sam konstruisao. Tempo razgovora drži napadač: pitanja su presecana, verifikacija je odlagana, hitnost se pojačava sa svakim minutom. Poziv je operacija, ne razgovor."
        data-en="The attacker sells nothing and offers no prize. They solve a problem they constructed. The attacker controls the call's pace: questions are cut off, verification is delayed, urgency increases with every minute. The call is an operation, not a conversation."
      >Napadač ne prodaje ništa i ne nudi nagradu. Rešava problem koji je sam konstruisao. Tempo razgovora drži napadač: pitanja su presecana, verifikacija je odlagana, hitnost se pojačava sa svakim minutom. Poziv je operacija, ne razgovor.</p>

      <div class="callout"
        data-sr="<strong>Prag:</strong> čitanje OTP koda, potvrda u aplikaciji, davanje lozinke, prenos na siguran račun, instalacija aplikacije. Posle praga napadač preuzima kontrolu nad nalogom, karticom ili sredstvima."
        data-en="<strong>Threshold:</strong> reading an OTP code, app approval, giving a password, transferring to a safe account, installing an app. After the threshold, the attacker gains control over the account, card, or funds."
      ><strong>Prag:</strong> čitanje OTP koda, potvrda u aplikaciji, davanje lozinke, prenos na siguran račun, instalacija aplikacije. Posle praga napadač preuzima kontrolu nad nalogom, karticom ili sredstvima.</div>

      <div class="callout"
        data-sr="<strong>Model:</strong> poziv + autoritet → incident + rok → izolacija od provere → prag (OTP/lozinka/prenos/pristup) → serijska šteta → talas prevare povraćaja."
        data-en="<strong>Model:</strong> call + authority → incident + deadline → isolation from verification → threshold (OTP/password/transfer/access) → cascading damage → recovery wave."
      ><strong>Model:</strong> poziv + autoritet → incident + rok → izolacija od provere → prag (OTP/lozinka/prenos/pristup) → serijska šteta → talas prevare povraćaja.</div>
    </section>

    <!-- 2) KAKO GENERALNO RADI -->
    <section class="card">
      <h2
        data-sr="Kako generalno radi: mehanika vishinga"
        data-en="How it works: vishing mechanics"
      >Kako generalno radi: mehanika vishinga</h2>

      <p
        data-sr="Poziv kao kanal ima jednu prednost nad tekstom: tempo. Napadač diktira brzinu, nema pauze za razmišljanje, ne može da se snimi lako, ne može da se prosledi prijatelju na proveru. Emocionalni odgovor je brži od racionalnog kada je reč o glasu i autoritetu."
        data-en="A call as a channel has one advantage over text: tempo. The attacker dictates speed, there is no pause to think, it cannot be easily saved or forwarded to a friend for checking. Emotional response to voice and authority is faster than rational analysis."
      >Poziv kao kanal ima jednu prednost nad tekstom: tempo. Napadač diktira brzinu, nema pauze za razmišljanje, ne može da se snimi lako, ne može da se prosledi prijatelju na proveru. Emocionalni odgovor je brži od racionalnog kada je reč o glasu i autoritetu.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gradi autoritet" data-en="What builds authority">Šta gradi autoritet</div>
          <ul class="bullets">
            <li data-sr="spoofovani broj koji izgleda kao banka ili institucija." data-en="spoofed number appearing as a bank or institution.">spoofovani broj koji izgleda kao banka ili institucija.</li>
            <li data-sr="službeni ton, terminologija, broj predmeta ili slučaja." data-en="official tone, terminology, case or reference number.">službeni ton, terminologija, broj predmeta ili slučaja.</li>
            <li data-sr="prebacivanje na supervizora kao pojačanje autoriteta." data-en="transferring to a supervisor as an authority boost.">prebacivanje na supervizora kao pojačanje autoriteta.</li>
            <li data-sr="insistiranje da meta ne sme da otkriva nikome." data-en="insisting that the target must not tell anyone.">insistiranje da meta ne sme da otkriva nikome.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Kako se uvodi radnja" data-en="How action is introduced">Kako se uvodi radnja</div>
          <ul class="bullets">
            <li data-sr="incident postavlja hitnost: transakcija, istraga, paket, SIM." data-en="incident sets urgency: transaction, investigation, package, SIM.">incident postavlja hitnost: transakcija, istraga, paket, SIM.</li>
            <li data-sr="radnja se predstavlja kao jedini način da se incident zaustavi." data-en="action is presented as the only way to stop the incident.">radnja se predstavlja kao jedini način da se incident zaustavi.</li>
            <li data-sr="rok je kratak: sledećih 10 minuta, pre krađa radnog vremena." data-en="deadline is short: next 10 minutes, before end of business.">rok je kratak: sledećih 10 minuta, pre krađa radnog vremena.</li>
            <li data-sr="svaki pokušaj provere se odbija kao gubitak vremena." data-en="every verification attempt is dismissed as wasting time.">svaki pokušaj provere se odbija kao gubitak vremena.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 3) HRONOLOŠKI TOK -->
    <section class="card">
      <h2
        data-sr="Hronološki tok: faze vishinga"
        data-en="Timeline: vishing phases"
      >Hronološki tok: faze vishinga</h2>

      <p class="muted"
        data-sr="Poziv traže 5–30 minuta. Faze se kompresuju, menjaju redosled ili se preskakaju u zavisnosti od taktike."
        data-en="A call lasts 5–30 minutes. Phases compress, reorder, or skip depending on tactics."
      >Poziv traže 5–30 minuta. Faze se kompresuju, menjaju redosled ili se preskakaju u zavisnosti od taktike.</p>

      <!-- Faza 1 -->
      <article class="phase">
        <h3 class="phase-title"
          data-sr="Faza 1 — Kontakt: uspostavljanje autoritetnog okvira"
          data-en="Phase 1 — Contact: establishing an authoritative frame"
        >Faza 1 — Kontakt: uspostavljanje autoritetnog okvira</h3>

        <p
          data-sr="Poziv stiže sa spoofovanim brojem ili +0 prefiksom koji izgleda zvanično. Napadač se predstavlja kao zaposleni u banci, policiji, kurirskoj službi, operateru ili tehničkoj podršci. Incident se uvodi odmah: detektovali smo sumnjivu aktivnost."
          data-en="The call arrives with a spoofed number or a +0 prefix that looks official. The attacker introduces themselves as a bank employee, police officer, courier, carrier, or tech support. The incident is introduced immediately: we detected suspicious activity."
        >Poziv stiže sa spoofovanim brojem ili +0 prefiksom koji izgleda zvanično. Napadač se predstavlja kao zaposleni u banci, policiji, kurirskoj službi, operateru ili tehničkoj podršci. Incident se uvodi odmah: detektovali smo sumnjivu aktivnost.</p>

        <ul class="bullets">
          <li data-sr="broj koji poziva izgleda kao broj banke ili institucije." data-en="the calling number looks like a bank or institution number.">broj koji poziva izgleda kao broj banke ili institucije.</li>
          <li data-sr="napadač odmah pominje puno ime i prezime mete." data-en="the attacker immediately mentions the target's full name.">napadač odmah pominje puno ime i prezime mete.</li>
          <li data-sr="uvođenje incidenta u prvih 20 sekundi bez pauze." data-en="incident is introduced in the first 20 seconds without pause.">uvođenje incidenta u prvih 20 sekundi bez pauze.</li>
          <li data-sr="ton je ozbiljan ali profesionalan — ne preteći direktno." data-en="tone is serious but professional — not directly threatening.">ton je ozbiljan ali profesionalan — ne preteći direktno.</li>
        </ul>

        <p class="muted"
          data-sr="Prag faze 1: meta prihvata identitet pozivaoca i ulazi u razgovor o incidentu."
          data-en="Phase 1 threshold: target accepts the caller's identity and engages in the incident conversation."
        >Prag faze 1: meta prihvata identitet pozivaoca i ulazi u razgovor o incidentu.</p>
      </article>

      <!-- Faza 2 -->
      <article class="phase">
        <h3 class="phase-title"
          data-sr="Faza 2 — Incident: izgradnja hitnosti"
          data-en="Phase 2 — Incident: building urgency"
        >Faza 2 — Incident: izgradnja hitnosti</h3>

        <p
          data-sr="Napadač opisuje incident sa detaljima: iznosi, datumi, lokacije. Meta dobija osećaj da je napadač upoznat sa njenim nalogom ili situacijom. Detalji često potiču iz javno dostupnih podataka ili prethodnih curenja podataka."
          data-en="The attacker describes the incident with details: amounts, dates, locations. The target feels the attacker knows their account or situation. Details often come from publicly available data or previous data breaches."
        >Napadač opisuje incident sa detaljima: iznosi, datumi, lokacije. Meta dobija osećaj da je napadač upoznat sa njenim nalogom ili situacijom. Detalji često potiču iz javno dostupnih podataka ili prethodnih curenja podataka.</p>

        <ul class="bullets">
          <li data-sr="pominjanje tačnih iznosa, datuma ili lokacija stvara uverenje." data-en="mentioning exact amounts, dates, or locations creates credibility.">pominjanje tačnih iznosa, datuma ili lokacija stvara uverenje.</li>
          <li data-sr="incident je vremenski ograničen: sledeća 3 minuta su ključna." data-en="the incident is time-limited: the next 3 minutes are critical.">incident je vremenski ograničen: sledeća 3 minuta su ključna.</li>
          <li data-sr="metama se sugeriše da su žrtve krađe ili greške sistema." data-en="targets are suggested to be victims of theft or a system error.">metama se sugeriše da su žrtve krađe ili greške sistema.</li>
          <li data-sr="eskalacija tona ako meta pokuša da postavi pitanje." data-en="tone escalates if the target tries to ask a question.">eskalacija tona ako meta pokuša da postavi pitanje.</li>
        </ul>

        <p class="muted"
          data-sr="Prag faze 2: meta veruje da je incident realan i da treba da reaguje brzo."
          data-en="Phase 2 threshold: target believes the incident is real and that they need to act quickly."
        >Prag faze 2: meta veruje da je incident realan i da treba da reaguje brzo.</p>

        <div class="note"
          data-sr="Grananja u ovoj fazi: ako meta ne reaguje na hitnost → prebacivanje na lažnu policiju ili supervizora; ako meta traži verifikaciju → verifikacija se ne može uraditi telefonom."
          data-en="Branching in this phase: if the target does not respond to urgency → transfer to fake police or a supervisor; if the target requests verification → verification cannot be done over the phone."
        >Grananja u ovoj fazi: ako meta ne reaguje na hitnost → prebacivanje na lažnu policiju ili supervizora; ako meta traži verifikaciju → verifikacija se ne može uraditi telefonom.</div>
      </article>

      <!-- Faza 3 -->
      <article class="phase">
        <h3 class="phase-title"
          data-sr="Faza 3 — Izolacija: zabrana konsultacije"
          data-en="Phase 3 — Isolation: blocking consultation"
        >Faza 3 — Izolacija: zabrana konsultacije</h3>

        <p
          data-sr="Ključna faza vishinga: napadač eksplicitno zabranjuje meti da kontaktira bilo koga, odloži poziv ili proveri pozivaoca. Razlog je uvek zaštita istrage ili sprečavanje curenja. U stvarnosti izoluje metu od svakog ko bi mogao prepoznati prevaru."
          data-en="The critical vishing phase: the attacker explicitly forbids the target from contacting anyone, putting the call on hold, or verifying the caller. The reason is always protecting the investigation or preventing leaks. In reality it isolates the target from anyone who might recognize the scam."
        >Ključna faza vishinga: napadač eksplicitno zabranjuje meti da kontaktira bilo koga, odloži poziv ili proveri pozivaoca. Razlog je uvek zaštita istrage ili sprečavanje curenja. U stvarnosti izoluje metu od svakog ko bi mogao prepoznati prevaru.</p>

        <ul class="bullets">
          <li data-sr="ne sme da odloži slušalicu jer se gubi veza sa sistemom." data-en="cannot hang up or the system connection will be lost.">ne sme da odloži slušalicu jer se gubi veza sa sistemom.</li>
          <li data-sr="ne sme da govori nikome jer je istraga poverljiva." data-en="cannot tell anyone because the investigation is confidential.">ne sme da govori nikome jer je istraga poverljiva.</li>
          <li data-sr="ne sme da zove banku direktno jer su kompromitovani." data-en="cannot call the bank directly because they are compromised.">ne sme da zove banku direktno jer su kompromitovani.</li>
          <li data-sr="ne sme da pita porodicu jer bi to upozorilo prevarante." data-en="cannot ask family because that would alert the fraudsters.">ne sme da pita porodicu jer bi to upozorilo prevarante.</li>
        </ul>

        <p class="muted"
          data-sr="Prag faze 3: meta ostaje na liniji i prestaje da traži nezavisnu potvrdu."
          data-en="Phase 3 threshold: target stays on the line and stops seeking independent confirmation."
        >Prag faze 3: meta ostaje na liniji i prestaje da traži nezavisnu potvrdu.</p>
      </article>

      <!-- Faza 4 -->
      <article class="phase">
        <h3 class="phase-title"
          data-sr="Faza 4 — Prag: izvlačenje autorizacije"
          data-en="Phase 4 — Threshold: extracting authorization"
        >Faza 4 — Prag: izvlačenje autorizacije</h3>

        <p
          data-sr="Napadač traži jedan konkretan korak koji opisuje kao proceduru zaštite. OTP kod je potreban za blokadu transakcije. Lozinka je verifikacija identiteta. Prenos na siguran račun je privremena zaštita sredstava. Svaki od ovih koraka je u stvarnosti autorizacija koju napadač čeka."
          data-en="The attacker requests one concrete step, described as a protection procedure. The OTP is needed to block the transaction. The password is identity verification. The transfer to a safe account is temporary asset protection. Each of these steps is actually the authorization the attacker is waiting for."
        >Napadač traži jedan konkretan korak koji opisuje kao proceduru zaštite. OTP kod je potreban za blokadu transakcije. Lozinka je verifikacija identiteta. Prenos na siguran račun je privremena zaštita sredstava. Svaki od ovih koraka je u stvarnosti autorizacija koju napadač čeka.</p>

        <ul class="bullets">
          <li data-sr="OTP kod koji stiže SMS-om — napadač čeka ga u realnom vremenu." data-en="OTP code arriving via SMS — attacker waits for it in real time.">OTP kod koji stiže SMS-om — napadač čeka ga u realnom vremenu.</li>
          <li data-sr="potvrda u mobilnoj aplikaciji banke pod izgovorom blokade." data-en="mobile banking app approval under the pretense of blocking.">potvrda u mobilnoj aplikaciji banke pod izgovorom blokade.</li>
          <li data-sr="lozinka za nalog ili PIN kartice za verifikaciju identiteta." data-en="account password or card PIN for identity verification.">lozinka za nalog ili PIN kartice za verifikaciju identiteta.</li>
          <li data-sr="prenos novca na siguran ili privremeni nalog." data-en="money transfer to a safe or temporary account.">prenos novca na siguran ili privremeni nalog.</li>
          <li data-sr="instalacija aplikacije za daljinski pristup za dijagnostiku." data-en="installation of a remote access app for diagnostics.">instalacija aplikacije za daljinski pristup za dijagnostiku.</li>
        </ul>

        <p class="muted"
          data-sr="Prag faze 4: meta izvršava traženu radnju. Od ovog trenutka šteta je u toku."
          data-en="Phase 4 threshold: target executes the requested action. From this point, damage is in progress."
        >Prag faze 4: meta izvršava traženu radnju. Od ovog trenutka šteta je u toku.</p>

        <div class="note"
          data-sr="Grananja u ovoj fazi: OTP → preuzimanje naloga; prenos → siguran nalog; instalacija → daljinski pristup i dalji nadzor; lozinka → kompromitacija imejl naloga."
          data-en="Branching in this phase: OTP → account takeover; transfer → safe account; installation → remote access and further surveillance; password → email account compromise."
        >Grananja u ovoj fazi: OTP → preuzimanje naloga; prenos → siguran nalog; instalacija → daljinski pristup i dalji nadzor; lozinka → kompromitacija imejl naloga.</div>
      </article>

      <!-- Faza 5 -->
      <article class="phase">
        <h3 class="phase-title"
          data-sr="Faza 5 — Eskalacija: novi zahtevi"
          data-en="Phase 5 — Escalation: new demands"
        >Faza 5 — Eskalacija: novi zahtevi</h3>

        <p
          data-sr="Kada je prag pređen, napadač nastavlja. Novi incident nastaje: nalog je i dalje ugrožen, treba još jedna potvrda, istraga se širi. Meta se priprema na seriju novih zahteva, jer svaki prethodni korak povećava ulaganje i otežava odustajanje."
          data-en="Once the threshold is crossed, the attacker continues. A new incident emerges: the account is still at risk, one more confirmation is needed, the investigation is expanding. The target is set up for a series of new demands, because each prior step increases investment and makes stopping harder."
        >Kada je prag pređen, napadač nastavlja. Novi incident nastaje: nalog je i dalje ugrožen, treba još jedna potvrda, istraga se širi. Meta se priprema na seriju novih zahteva, jer svaki prethodni korak povećava ulaganje i otežava odustajanje.</p>

        <ul class="bullets">
          <li data-sr="prenos je delimičan — treba dopuniti da bi zaštita bila potpuna." data-en="the transfer was partial — it needs to be topped up for full protection.">prenos je delimičan — treba dopuniti da bi zaštita bila potpuna.</li>
          <li data-sr="prebacivanje na drugog agenta koji ima novi zahtev." data-en="transfer to another agent with a new demand.">prebacivanje na drugog agenta koji ima novi zahtev.</li>
          <li data-sr="sledeća 24 sata su kritična — nemojte da pravite nikakve transakcije." data-en="the next 24 hours are critical — do not make any transactions.">sledeća 24 sata su kritična — nemojte da pravite nikakve transakcije.</li>
          <li data-sr="obećanje povrata svih sredstava po završetku istrage." data-en="promise of a full refund after the investigation concludes.">obećanje povrata svih sredstava po završetku istrage.</li>
        </ul>

        <p class="muted"
          data-sr="Prag faze 5: meta nastavlja da sarađuje i ne prekida komunikaciju."
          data-en="Phase 5 threshold: target continues cooperation and does not break communication."
        >Prag faze 5: meta nastavlja da sarađuje i ne prekida komunikaciju.</p>
      </article>

      <!-- Faza 6 -->
      <article class="phase">
        <h3 class="phase-title"
          data-sr="Faza 6 — Nestanak i talas prevare povraćaja"
          data-en="Phase 6 — Disappearance and recovery wave"
        >Faza 6 — Nestanak i talas prevare povraćaja</h3>

        <p
          data-sr="Kada napadač izvuče ono što je tražio ili meta postane sumnjičava, kontakt prestaje. Posle toga sledi talas prevare povraćaja: novi poziv od istražitelja koji nudi povrat novca uz novu naknadu. Ovo je sekundarna prevara koja cilja iste žrtve."
          data-en="Once the attacker extracts what they wanted or the target becomes suspicious, contact ceases. After that comes the recovery wave: a new call from an investigator offering to return the money for a new fee. This is a secondary scam targeting the same victims."
        >Kada napadač izvuče ono što je tražio ili meta postane sumnjičava, kontakt prestaje. Posle toga sledi talas prevare povraćaja: novi poziv od istražitelja koji nudi povrat novca uz novu naknadu. Ovo je sekundarna prevara koja cilja iste žrtve.</p>

        <ul class="bullets">
          <li data-sr="kontakt iznenada prestaje bez objašnjenja." data-en="contact stops suddenly without explanation.">kontakt iznenada prestaje bez objašnjenja.</li>
          <li data-sr="meta pokušava da stupi u kontakt i dobija tišinu ili poruku broj nije u upotrebi." data-en="the target tries to reconnect and gets silence or a number not in service message.">meta pokušava da stupi u kontakt i dobija tišinu ili poruku broj nije u upotrebi.</li>
          <li data-sr="danima ili nedelju dana kasnije novi poziv nudi povrat uz uplatu naknade." data-en="days or a week later, a new call offers a refund that requires an upfront fee.">danima ili nedelju dana kasnije novi poziv nudi povrat uz uplatu naknade.</li>
          <li data-sr="meta se prepoznaje kao cilj za recovery prevare jer se zna da je platila." data-en="target is recognized as a recovery scam target because it's known they paid.">meta se prepoznaje kao cilj za recovery prevare jer se zna da je platila.</li>
        </ul>

        <p class="muted"
          data-sr="Prag faze 6: meta prihvata i recovery ponudu, čime ulazi u drugi krug gubitaka."
          data-en="Phase 6 threshold: target accepts the recovery offer, entering a second round of losses."
        >Prag faze 6: meta prihvata i recovery ponudu, čime ulazi u drugi krug gubitaka.</p>
      </article>

      <!-- Faza 7 -->
      <article class="phase">
        <h3 class="phase-title"
          data-sr="Faza 7 — Zloupotreba pribavljenih podataka"
          data-en="Phase 7 — Exploitation of obtained data"
        >Faza 7 — Zloupotreba pribavljenih podataka</h3>

        <p
          data-sr="Lozinke, OTP kodovi i podaci pribavljeni vishingom ne nestaju sa završetkom poziva. Napadač ih koristi za preuzimanje naloga, podizanje kredita, otvaranje novih naloga ili prodaju podataka na crnom tržištu."
          data-en="Passwords, OTP codes, and data obtained through vishing do not disappear when the call ends. The attacker uses them for account takeover, loan applications, opening new accounts, or selling data on dark markets."
        >Lozinke, OTP kodovi i podaci pribavljeni vishingom ne nestaju sa završetkom poziva. Napadač ih koristi za preuzimanje naloga, podizanje kredita, otvaranje novih naloga ili prodaju podataka na crnom tržištu.</p>

        <ul class="bullets">
          <li data-sr="preuzimanje email naloga → pristup svim servisima vezanim za email." data-en="email account takeover → access to all services linked to that email.">preuzimanje email naloga → pristup svim servisima vezanim za email.</li>
          <li data-sr="podizanje pozajmica ili kredita na ime žrtve." data-en="taking out loans or credits in the victim's name.">podizanje pozajmica ili kredita na ime žrtve.</li>
          <li data-sr="prodaja kompletnog paketa podataka na dark web forumima." data-en="selling the complete data package on dark web forums.">prodaja kompletnog paketa podataka na dark web forumima.</li>
          <li data-sr="ciljanje porodice i kontakata žrtve novim napadima." data-en="targeting the victim's family and contacts with new attacks.">ciljanje porodice i kontakata žrtve novim napadima.</li>
        </ul>

        <p class="muted"
          data-sr="Prag faze 7: podaci koji su pribavljeni vishingom ulaze u širi sistem zloupotrebe."
          data-en="Phase 7 threshold: data obtained through vishing enters a broader exploitation system."
        >Prag faze 7: podaci koji su pribavljeni vishingom ulaze u širi sistem zloupotrebe.</p>
      </article>
    </section>

    <!-- 4) CRVENE ZASTAVICE -->
    <section class="card">
      <h2
        data-sr="Crvene zastavice: šta prepoznati"
        data-en="Red flags: what to recognize"
      >Crvene zastavice: šta prepoznati</h2>

      <ul class="bullets">
        <li data-sr="pozivalac odmah uvodi incident bez mogućnosti potvrde." data-en="caller immediately introduces an incident without offering confirmation.">pozivalac odmah uvodi incident bez mogućnosti potvrde.</li>
        <li data-sr="zabrana da se poziv prekine ili da se sazove neko treće lice." data-en="prohibition on hanging up or involving a third party.">zabrana da se poziv prekine ili da se sazove neko treće lice.</li>
        <li data-sr="insistiranje da je razgovor poverljiv i da se ne sme deliti." data-en="insistence that the conversation is confidential and must not be shared.">insistiranje da je razgovor poverljiv i da se ne sme deliti.</li>
        <li data-sr="traženje OTP koda, lozinke ili PIN-a tokom poziva." data-en="requesting OTP code, password, or PIN during the call.">traženje OTP koda, lozinke ili PIN-a tokom poziva.</li>
        <li data-sr="prenos novca na siguran ili privremeni nalog." data-en="transfer of money to a safe or temporary account.">prenos novca na siguran ili privremeni nalog.</li>
        <li data-sr="napadač kaže da nema vremena za proveru ili da je provera nemoguća." data-en="the attacker says there is no time to verify or that verification is impossible.">napadač kaže da nema vremena za proveru ili da je provera nemoguća.</li>
        <li data-sr="poziv dolazi sa brojem koji izgleda kao institucija, ali ne radi kada ga pozoveš direktno." data-en="the call comes from a number that looks like an institution but does not work when you call it directly.">poziv dolazi sa brojem koji izgleda kao institucija, ali ne radi kada ga pozoveš direktno.</li>
        <li data-sr="povećanje pritiska kada meta pokuša da odloži odluku." data-en="pressure increases when the target tries to delay a decision.">povećanje pritiska kada meta pokuša da odloži odluku.</li>
        <li data-sr="prebacivanje na supervizora koji ponavlja isti zahtev." data-en="a supervisor takes over and repeats the same request.">prebacivanje na supervizora koji ponavlja isti zahtev.</li>
        <li data-sr="napadač zna detalje koji nisu javni (što zvuči kao dokaz legitimiteta)." data-en="attacker knows non-public details (which seems to prove legitimacy).">napadač zna detalje koji nisu javni (što zvuči kao dokaz legitimiteta).</li>
        <li data-sr="zahtev za instalacijom aplikacije radi dijagnostike ili zaštite." data-en="a request to install an app for diagnostics or protection.">zahtev za instalacijom aplikacije radi dijagnostike ili zaštite.</li>
      </ul>
    </section>

    <!-- 5) PROVERE -->
    <section class="card">
      <h2
        data-sr="Provere: 8 brzih koraka"
        data-en="Checks: 8 quick steps"
      >Provere: 8 brzih koraka</h2>

      <ul class="bullets">
        <li data-sr="odmah prekini poziv — banka ili institucija neće prigovoriti." data-en="hang up immediately — a real bank or institution will not object.">odmah prekini poziv — banka ili institucija neće prigovoriti.</li>
        <li data-sr="zovi broj sa poleđine kartice ili sa zvaničnog sajta — ne broj koji ti je dat tokom poziva." data-en="call the number on the back of your card or official website — not the number given during the call.">zovi broj sa poleđine kartice ili sa zvaničnog sajta — ne broj koji ti je dat tokom poziva.</li>
        <li data-sr="nijedna institucija ne traži OTP kod koji ti stiže SMS-om." data-en="no institution asks for an OTP code that arrives by SMS.">nijedna institucija ne traži OTP kod koji ti stiže SMS-om.</li>
        <li data-sr="nijedna institucija ne traži lozinku ili PIN tokom poziva." data-en="no institution asks for your password or PIN over the phone.">nijedna institucija ne traži lozinku ili PIN tokom poziva.</li>
        <li data-sr="prenos na siguran nalog je uvek prevara — banke to ne rade." data-en="a transfer to a safe account is always a scam — banks do not do this.">prenos na siguran nalog je uvek prevara — banke to ne rade.</li>
        <li data-sr="pitaj porodicu ili prijatelja pre nego što uradiš bilo šta — napadač želi da ostaneš sam." data-en="ask family or a friend before doing anything — the attacker wants you alone.">pitaj porodicu ili prijatelja pre nego što uradiš bilo šta — napadač želi da ostaneš sam.</li>
        <li data-sr="proveri broj koji je pozvao nezavisno — putem pretrage ili direktnog poziva instituciji." data-en="verify the calling number independently — via a search or a direct call to the institution.">proveri broj koji je pozvao nezavisno — putem pretrage ili direktnog poziva instituciji.</li>
        <li data-sr="ako si već dao podatke — odmah zovi banku i blokiraj karticu." data-en="if you already gave data — call your bank immediately and block the card.">ako si već dao podatke — odmah zovi banku i blokiraj karticu.</li>
      </ul>
    </section>

    <!-- 6) CHECKLISTA -->
    <section class="card">
      <h2
        data-sr="Checklista pre radnje tokom poziva"
        data-en="Checklist before acting during a call"
      >Checklista pre radnje tokom poziva</h2>

      <ul class="bullets">
        <li data-sr="da li sam ja inicirao ovaj poziv?" data-en="did I initiate this call myself?">da li sam ja inicirao ovaj poziv?</li>
        <li data-sr="da li me pozivalac traži da nešto uradim odmah bez pauze?" data-en="is the caller asking me to do something right now without a pause?">da li me pozivalac traži da nešto uradim odmah bez pauze?</li>
        <li data-sr="da li mi zabranjuju da proverim sa nekom drugom osobom?" data-en="are they forbidding me to check with another person?">da li mi zabranjuju da proverim sa nekom drugom osobom?</li>
        <li data-sr="da li traže OTP koji mi je upravo stigao?" data-en="are they asking for an OTP that just arrived?">da li traže OTP koji mi je upravo stigao?</li>
        <li data-sr="da li traže prenos na nalog koji nisam pre koristio?" data-en="are they asking for a transfer to an account I've never used?">da li traže prenos na nalog koji nisam pre koristio?</li>
        <li data-sr="da li mi govore da je razgovor poverljiv?" data-en="are they telling me the call is confidential?">da li mi govore da je razgovor poverljiv?</li>
        <li data-sr="da li se broj koji me zove poklapa sa brojem institucije kada ga direktno pozovem?" data-en="does the number that called me match the institution's number when I call it directly?">da li se broj koji me zove poklapa sa brojem institucije kada ga direktno pozovem?</li>
        <li data-sr="da li mi kažu da ne smem da odložim slušalicu?" data-en="are they saying I cannot hang up?">da li mi kažu da ne smem da odložim slušalicu?</li>
        <li data-sr="da li traže instalaciju aplikacije radi zaštite?" data-en="are they requesting app installation for protection?">da li traže instalaciju aplikacije radi zaštite?</li>
        <li data-sr="da li mi je dato dovoljno vremena da potvrdim identitet pozivaoca nezavisno?" data-en="have I been given enough time to independently verify the caller's identity?">da li mi je dato dovoljno vremena da potvrdim identitet pozivaoca nezavisno?</li>
        <li data-sr="da li obećavaju da će mi novac biti vraćen po završetku procedure?" data-en="are they promising my money will be returned after the procedure is done?">da li obećavaju da će mi novac biti vraćen po završetku procedure?</li>
        <li data-sr="da li pritisak raste svaki put kada pokušam da usporim tempo?" data-en="does pressure increase every time I try to slow down?">da li pritisak raste svaki put kada pokušam da usporim tempo?</li>
      </ul>
    </section>

    <!-- 7) AKO SUMNJA KRENE -->
    <section class="card">
      <h2
        data-sr="Ako sumnja krene: redosled poteza"
        data-en="If suspicion starts: order of actions"
      >Ako sumnja krene: redosled poteza</h2>

      <ul class="bullets">
        <li data-sr="odmah prekini poziv — ne objašnjavaj, samo prekini." data-en="hang up immediately — no need to explain, just hang up.">odmah prekini poziv — ne objašnjavaj, samo prekini.</li>
        <li data-sr="ne pozivaj nazad na isti broj — kontaktiraj instituciju direktno putem poznatog broja." data-en="do not call back on the same number — contact the institution directly using a known number.">ne pozivaj nazad na isti broj — kontaktiraj instituciju direktno putem poznatog broja.</li>
        <li data-sr="ako si dao OTP ili lozinku — odmah promeni lozinku i pozovi banku." data-en="if you gave an OTP or password — change password immediately and call the bank.">ako si dao OTP ili lozinku — odmah promeni lozinku i pozovi banku.</li>
        <li data-sr="ako si dao broj kartice ili PIN — odmah blokiraj karticu." data-en="if you gave a card number or PIN — block the card immediately.">ako si dao broj kartice ili PIN — odmah blokiraj karticu.</li>
        <li data-sr="ako si instalirao aplikaciju — odmah je deinstaluj i pokreni skeniranje uređaja." data-en="if you installed an app — uninstall it immediately and run a device scan.">ako si instalirao aplikaciju — odmah je deinstaluj i pokreni skeniranje uređaja.</li>
        <li data-sr="prijavi incident banci, policiji i CERT-u." data-en="report the incident to your bank, police, and CERT.">prijavi incident banci, policiji i CERT-u.</li>
      </ul>
    </section>

    <!-- 8) AKO POMAŽEŠ NEKOME -->
    <section class="card">
      <h2
        data-sr="Ako pokušavaš da pomogneš nekome"
        data-en="If you are trying to help someone"
      >Ako pokušavaš da pomogneš nekome</h2>

      <p class="muted"
        data-sr="Pitanja koja rade:"
        data-en="Questions that work:"
      >Pitanja koja rade:</p>

      <ul class="bullets">
        <li data-sr="Da li si ti pozvao banku ili je banka pozvala tebe?" data-en="Did you call the bank or did the bank call you?">Da li si ti pozvao banku ili je banka pozvala tebe?</li>
        <li data-sr="Da li su tražili OTP koji ti je stigao SMS-om?" data-en="Did they ask for an OTP that arrived by SMS?">Da li su tražili OTP koji ti je stigao SMS-om?</li>
        <li data-sr="Da li su rekli da ne smeš da govoriš nikome?" data-en="Did they say you must not tell anyone?">Da li su rekli da ne smeš da govoriš nikome?</li>
        <li data-sr="Da li su tražili da instaliraš nešto ili da preneseš novac?" data-en="Did they ask you to install something or transfer money?">Da li su tražili da instaliraš nešto ili da preneseš novac?</li>
      </ul>

      <p class="muted"
        data-sr="Rečenice koje rade:"
        data-en="Phrases that work:"
      >Rečenice koje rade:</p>

      <ul class="bullets">
        <li data-sr="Nijedna banka ne traži OTP koji ti stiže SMS-om." data-en="No bank asks for an OTP that arrives by SMS.">Nijedna banka ne traži OTP koji ti stiže SMS-om.</li>
        <li data-sr="Ako ti zabrane da proveriš ili da pričaš sa nekim, to je signal." data-en="If they forbid you from verifying or talking to someone, that is a signal.">Ako ti zabrane da proveriš ili da pričaš sa nekim, to je signal.</li>
        <li data-sr="Prekini poziv i zovi banku sa broja na poleđini kartice." data-en="Hang up and call the bank using the number on the back of the card.">Prekini poziv i zovi banku sa broja na poleđini kartice.</li>
        <li data-sr="Ne instaliraj ništa što ti pošalju dok si na liniji." data-en="Do not install anything they send while you are on the line.">Ne instaliraj ništa što ti pošalju dok si na liniji.</li>
      </ul>
    </section>

    <!-- 9) POVEZANE PREVARE -->
    
  `
};
