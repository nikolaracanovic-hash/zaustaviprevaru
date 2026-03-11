window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["data-breach-extortion"] = {
  raw_html: `
    <!-- 1) UVOD -->
    <section class="card">
      <h2 data-sr="Uvod: kako radi ucena nakon krađe podataka" data-en="Introduction: how data breach extortion works">
        Uvod: kako radi ucena nakon krađe podataka
      </h2>

      <p
        data-sr="Ucena nakon krađe podataka nastaje kada napadač, nakon što je eksfiltrirao osetljive podatke, kontaktira organizaciju ili osobu sa zahtevom za uplatu pod prijetnjom objavljivanja. Za razliku od ransomware-a, u ovoj varijanti sistemi ne moraju biti enkriptovani — napad je čisto ucenički. Napadač poseduje kopiju podataka i to koristi kao jedino oružje."
        data-en="Data breach extortion occurs when an attacker, after exfiltrating sensitive data, contacts an organization or individual with a payment demand under threat of publication. Unlike ransomware, systems do not need to be encrypted — the attack is purely extortive. The attacker holds a copy of the data and uses that as the only leverage."
      >Ucena nakon krađe podataka nastaje kada napadač, nakon što je eksfiltrirao osetljive podatke, kontaktira organizaciju ili osobu sa zahtevom za uplatu pod prijetnjom objavljivanja. Za razliku od ransomware-a, u ovoj varijanti sistemi ne moraju biti enkriptovani — napad je čisto ucenički. Napadač poseduje kopiju podataka i to koristi kao jedino oružje.</p>

      <p
        data-sr="Ucena se javlja u dva oblika: organizaciona ucena (kompanija prima zahtev za uplatu pod prijetnjom obelodanjivanja poslovnih tajni, podataka klijenata ili dokumenata koji kompromituju upravu) i individualna ucena (osoba prima zahtev pod prijetnjom objavljivanja privatnih fotografija, poruka ili finansijskih podataka). Oba oblika koriste isti mehanizam: dokaz posedovanja + rok + prijetnja."
        data-en="Extortion appears in two forms: organizational extortion (company receives a payment demand under threat of disclosing traže secrets, client data, or documents that compromise management) and individual extortion (person receives a demand under threat of publishing private photos, messages, or financial data). Both forms use the same mechanism: proof of possession + deadline + threat."
      >Ucena se javlja u dva oblika: organizaciona ucena (kompanija prima zahtev za uplatu pod prijetnjom obelodanjivanja poslovnih tajni, podataka klijenata ili dokumenata koji kompromituju upravu) i individualna ucena (osoba prima zahtev pod prijetnjom objavljivanja privatnih fotografija, poruka ili finansijskih podataka). Oba oblika koriste isti mehanizam: dokaz posedovanja + rok + prijetnja.</p>

      <div class="callout"
        data-sr="<strong>Model:</strong> proboj ili curenje → eksfiltracija podataka → ucenička poruka sa dokazom → rok → prijetnja objavom → uplata → ponavljanje ucene ili objava."
        data-en="<strong>Model:</strong> breach or leak → data exfiltration → extortion message with proof → deadline → disclosure threat → payment → repeated extortion or disclosure."
      ><strong>Model:</strong> proboj ili curenje → eksfiltracija podataka → ucenička poruka sa dokazom → rok → prijetnja objavom → uplata → ponavljanje ucene ili objava.</div>

      <div class="callout"
        data-sr="<strong>Prag:</strong> ucenička poruka stiže sa konkretnim dokazom (uzorak ukradenih fajlova, screenshot interne komunikacije). Taj dokaz je ono što daje uceni kredibilitet."
        data-en="<strong>Threshold:</strong> the extortion message arrives with concrete proof (a sample of stolen files, a screenshot of internal communication). That proof is what gives the extortion credibility."
      ><strong>Prag:</strong> ucenička poruka stiže sa konkretnim dokazom (uzorak ukradenih fajlova, screenshot interne komunikacije). Taj dokaz je ono što daje uceni kredibilitet.</div>
    </section>

    <!-- 2) KAKO GENERALNO RADI -->
    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika ucene i pritiska" data-en="How it works: extortion and pressure mechanics">
        Kako generalno radi: mehanika ucene i pritiska
      </h2>

      <p
        data-sr="Ucena funkcioniše na principu asimetričnog pritiska: napadač ima kontrolu nad tim kada, šta i kome objavljuje. Meta nema kontrolu nad tim. Napadač uvek drži inicijativu. Uplata ne uklanja napadača iz pozicije moći, jer kopija podataka ostaje kod napadača bez obzira na isplatu. Ovo je ključna razlika od ransomware-a, gde barem postoji tehnički razlog za isplatu (ključ za dekripciju)."
        data-en="Extortion works on the principle of asymmetric pressure: the attacker controls when, what, and to whom they publish. The target has no control over that. The attacker always holds the initiative. Payment does not remove the attacker from a position of power, because a copy of the data stays with the attacker regardless of payment. This is the key difference from ransomware, where there is at least a technical reason to pay (decryption key)."
      >Ucena funkcioniše na principu asimetričnog pritiska: napadač ima kontrolu nad tim kada, šta i kome objavljuje. Meta nema kontrolu nad tim. Napadač uvek drži inicijativu. Uplata ne uklanja napadača iz pozicije moći, jer kopija podataka ostaje kod napadača bez obzira na isplatu. Ovo je ključna razlika od ransomware-a, gde barem postoji tehnički razlog za isplatu (ključ za dekripciju).</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gradi pritisak na metu" data-en="What builds pressure on the target">Šta gradi pritisak na metu</div>
          <ul class="bullets">
            <li data-sr="dokaz posedovanja podataka kao potvrda da prijetnja nije prazna." data-en="proof of data possession as confirmation the threat is not empty.">dokaz posedovanja podataka kao potvrda da prijetnja nije prazna.</li>
            <li data-sr="kratki rokovi koji sprečavaju mirnu procenu i konsultacije." data-en="short deadlines that prevent calm assessment and consultation.">kratki rokovi koji sprečavaju mirnu procenu i konsultacije.</li>
            <li data-sr="specifičnost podataka: napadač navodi konkretne fajlove ili sadržaj." data-en="specificity of data: attacker names specific files or content.">specifičnost podataka: napadač navodi konkretne fajlove ili sadržaj.</li>
            <li data-sr="prijetnja regulatornom prijavom (GDPR, NIS2) ako se ne isplati." data-en="threat of regulatory reporting (GDPR, NIS2) if not paid.">prijetnja regulatornom prijavom (GDPR, NIS2) ako se ne isplati.</li>
            <li data-sr="prijetnja slanjem podataka konkurentima, medijima ili partnerima." data-en="threat of sending data to competitors, media, or partners.">prijetnja slanjem podataka konkurentima, medijima ili partnerima.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Kako se uvodi finansijski zahtev" data-en="How the financial demand is introduced">Kako se uvodi finansijski zahtev</div>
          <ul class="bullets">
            <li data-sr="specifičan iznos u kriptovaluti sa adresom i rokom." data-en="specific amount in cryptocurrency with address and deadline.">specifičan iznos u kriptovaluti sa adresom i rokom.</li>
            <li data-sr="obećanje brisanja podataka posle isplate (koje se ne može verifikovati)." data-en="promise to delete data after payment (which cannot be verified).">obećanje brisanja podataka posle isplate (koje se ne može verifikovati).</li>
            <li data-sr="„popust." za brzu uplatu kao mehanizam za ubrzavanje odluke." data-en="a discount for quick payment as a mechanism to accelerate the decision.">„popust" za brzu uplatu kao mehanizam za ubrzavanje odluke“.</li>
            <li data-sr="eskalacija iznosa ako se rok propusti: dvostruka cena ili objava." data-en="amount escalation if the deadline is missed: double price or disclosure.">eskalacija iznosa ako se rok propusti: dvostruka cena ili objava.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 3) HRONOLOŠKI TOK -->
    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)." data-en="Timeline (phases + evolutions).">
        Hronološki tok (faze + evolucije)
      </h2>

      <p class="muted"
        data-sr="Faze su prikazane kao operativni tok: šta meta vidi, šta se traži, koji momenti guraju sledeći korak, gde se tok grana u druge napade ili prevare."
        data-en="Phases are shown as an operational flow: what the target sees, what is demanded, which moments push the next step, and where the flow branches into other attacks or scams."
      >Faze su prikazane kao operativni tok: šta meta vidi, šta se traži, koji momenti guraju sledeći korak, gde se tok grana u druge napade ili prevare.</p>

      <!-- FAZA 1 -->
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Proboj ili curenje podataka" data-en="Phase 1 — Breach or data leak">
          Faza 1 — Proboj ili curenje podataka
        </h3>

        <p
          data-sr="Napadač dobija pristup podacima kroz direktan napad (hacking, phishing, kompromitovane kredencijale) ili korišćenjem prethodno procurelih podataka (curenje sa trećih strana, dark web baze). Eksfiltracija se odvija tiho, bez vidljivog efekta na sisteme, što znači da organizacija često ne zna za proboj dok ne stigne ucenička poruka."
          data-en="The attacker gains access to data through a direct attack (hacking, phishing, compromised credentials) or by using previously leaked data (third-party leaks, dark web databases). Exfiltration happens quietly, without visible effect on systems, which means the organization often does not know about the breach until the extortion message arrives."
        >Napadač dobija pristup podacima kroz direktan napad (hacking, phishing, kompromitovane kredencijale) ili korišćenjem prethodno procurelih podataka (curenje sa trećih strana, dark web baze). Eksfiltracija se odvija tiho, bez vidljivog efekta na sisteme, što znači da organizacija često ne zna za proboj dok ne stigne ucenička poruka.</p>

        <ul class="bullets">
          <li data-sr="signal: neobičan odlazni saobraćaj prema nepoznatim destinacijama." data-en="signal: unusual outbound traffic toward unknown destinations.">signal: neobičan odlazni saobraćaj prema nepoznatim destinacijama.</li>
          <li data-sr="signal: pristup osetljivim fajlovima van radnog vremena ili od neobičnih naloga." data-en="signal: access to sensitive files outside working hours or from unusual accounts.">signal: pristup osetljivim fajlovima van radnog vremena ili od neobičnih naloga.</li>
          <li data-sr="signal: masovni download fajlova koji se inače ne kopiraju zajedno." data-en="signal: mass file download of files that are not normally copied together.">signal: masovni download fajlova koji se inače ne kopiraju zajedno.</li>
        </ul>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
            <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> napadač poseduje dovoljno vrednih podataka da prijetnja bude kredibilna."
          data-en="<strong>Threshold:</strong> attacker holds enough valuable data for the threat to be credible."
        ><strong>Prag faze:</strong> napadač poseduje dovoljno vrednih podataka da prijetnja bude kredibilna.</div>
      </article>

      <!-- FAZA 2 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Ucenička poruka" data-en="Phase 2 — Extortion message">
          Faza 2 — Ucenička poruka
        </h3>

        <p
          data-sr="Napadač šalje prvu ucenjivačku poruku sa jasnom strukturom: dokaz posedovanja (uzorak fajlova ili sadržaja), konkretan iznos u kriptovaluti, rok za uplatu i opis posledica ako se ne isplati. Poruka je profesionalna i precizna — napadač je pisao ovakve poruke mnogo puta."
          data-en="The attacker sends the first extortion message with a clear structure: proof of possession (a sample of files or content), a specific amount in cryptocurrency, a payment deadline, and a description of consequences if payment is not made. The message is professional and precise — the attacker has written such messages many times."
        >Napadač šalje prvu ucenjivačku poruku sa jasnom strukturom: dokaz posedovanja (uzorak fajlova ili sadržaja), konkretan iznos u kriptovaluti, rok za uplatu i opis posledica ako se ne isplati. Poruka je profesionalna i precizna — napadač je pisao ovakve poruke mnogo puta.</p>

        <ul class="bullets">
          <li data-sr="poruka sadrži uzorak stvarnih podataka kao dokaz." data-en="message contains a sample of real data as proof.">poruka sadrži uzorak stvarnih podataka kao dokaz.</li>
          <li data-sr="iznos je formulisan u kriptovaluti sa tačnom adresom za uplatu." data-en="amount is stated in cryptocurrency with an exact payment address.">iznos je formulisan u kriptovaluti sa tačnom adresom za uplatu.</li>
          <li data-sr="rok je kratak (24–72 sata) da spreči konsultacije i mirnu procenu." data-en="the deadline is short (24–72 hours) to prevent consultations and calm assessment.">rok je kratak (24–72 sata) da spreči konsultacije i mirnu procenu.</li>
          <li data-sr="prijetnja je specifična: kome se šalju podaci, koji mediji, koji regulatori." data-en="the threat is specific: who receives data, which media, which regulators.">prijetnja je specifična: kome se šalju podaci, koji mediji, koji regulatori.</li>
        </ul>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> meta otvori poruku i proceni da je prijetnja stvarna. Panika počinje da ubrzava donošenje odluke."
          data-en="<strong>Threshold:</strong> the target opens the message and assesses the threat as real. Panic begins to accelerate decision-making."
        ><strong>Prag faze:</strong> meta otvori poruku i proceni da je prijetnja stvarna. Panika počinje da ubrzava donošenje odluke.</div>
      </article>

      <!-- FAZA 3 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Pritisak i eskalacija" data-en="Phase 3 — Pressure and escalation">
          Faza 3 — Pritisak i eskalacija
        </h3>

        <p
          data-sr="Ako meta ne reaguje brzo, napadač eskalira pritisak: šalje podsetnik, objavljuje deo podataka javno kao „demonstraciju ozbiljnosti", ili kontaktira medije, regulatora ili konkurenciju da najavi predstojeće obelodanjivanje. Svaka escalacija povećava pritisak i smanjuje vreme za smirenu procenu."
          data-en="If the target does not respond quickly, the attacker escalates pressure: sends a reminder, publishes part of the data publicly as a demonstration of seriousness, or contacts media, regulators, or competitors to announce the upcoming disclosure. Each escalation increases pressure and reduces time for calm assessment."
        >Ako meta ne reaguje brzo, napadač eskalira pritisak: šalje podsetnik, objavljuje deo podataka javno kao „demonstraciju ozbiljnosti", ili kontaktira medije, regulatora ili konkurenciju da najavi predstojeće obelodanjivanje. Svaka escalacija povećava pritisak i smanjuje vreme za smirenu procenu.</p>

        <div class="grid-2">
          <div class="phase">
            <div class="label" data-sr="Taktike napadača" data-en="Attacker tactics">Taktike napadača</div>
            <ul class="bullets">
              <li data-sr="javno objavljivanje malog dela podataka kao demonstracija." data-en="publicly publishing a small portion of data as a demonstration.">javno objavljivanje malog dela podataka kao demonstracija.</li>
              <li data-sr="slanje uzoraka direktno odgovornim osobama unutar organizacije." data-en="sending samples directly to responsible individuals within the organization.">slanje uzoraka direktno odgovornim osobama unutar organizacije.</li>
              <li data-sr="prijavljivanje curenja regulatoru pre isteka roka (kao pritisak, ne kao pomoć)." data-en="reporting the leak to regulators before the deadline (as pressure, not as help).">prijavljivanje curenja regulatoru pre isteka roka (kao pritisak, ne kao pomoć).</li>
              <li data-sr="kontakt sa medijima da se najavi predstojeća priča." data-en="contact with media to announce an upcoming story.">kontakt sa medijima da se najavi predstojeća priča.</li>
            </ul>
          </div>

          <div class="phase">
            <div class="label" data-sr="Šta meta oseća pod pritiskom" data-en="What the target feels under pressure">Šta meta oseća pod pritiskom</div>
            <ul class="bullets">
              <li data-sr="hitnost da se zaustavi objavljivanje pre nego što postane javno." data-en="urgency to stop disclosure before it becomes public.">hitnost da se zaustavi objavljivanje pre nego što postane javno.</li>
              <li data-sr="strah od regulatorne kazne, reputacione štete i gubitka klijenata." data-en="fear of regulatory fines, reputational damage, and losing clients.">strah od regulatorne kazne, reputacione štete i gubitka klijenata.</li>
              <li data-sr="lažna nada da će uplata zaista eliminisati problem." data-en="false hope that payment will actually eliminate the problem.">lažna nada da će uplata zaista eliminisati problem.</li>
              <li data-sr="pritisak da se deluje brzo bez dovoljno informacija ili pravnih saveta." data-en="pressure to act quickly without enough information or legal advice.">pritisak da se deluje brzo bez dovoljno informacija ili pravnih saveta.</li>
            </ul>
          </div>
        </div>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="ransomware-orgs.html" data-sr="Ransomware napadi na organizacije" data-en="Ransomware attacks on organizations">Ransomware napadi na organizacije</a></li>
            <li><a href="identity-theft.html" data-sr="Krađa identiteta" data-en="Identity theft">Krađa identiteta</a></li>
          </ul>
        </div>
      </article>

      <!-- FAZA 4 -->
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Uplata ili odbijanje i posledice" data-en="Phase 4 — Payment or refusal and consequences">
          Faza 4 — Uplata ili odbijanje i posledice
        </h3>

        <p
          data-sr="Ako organizacija plati, napadač može (ali ne mora) da prestane sa pritisnjanjem. Kopija podataka i dalje postoji. Napadač može da se vrati sa novim zahtevom mesecima kasnije. Postoji i varijanta gde napadač prodaje podatke trećim stranama bez obzira na isplatu."
          data-en="If the organization pays, the attacker may (but does not have to) stop applying pressure. The copy of data still exists. The attacker can return with new demands months later. There is also a variant where the attacker sells data to third parties regardless of payment."
        >Ako organizacija plati, napadač može (ali ne mora) da prestane sa pritisnjanjem. Kopija podataka i dalje postoji. Napadač može da se vrati sa novim zahtevom mesecima kasnije. Postoji i varijanta gde napadač prodaje podatke trećim stranama bez obzira na isplatu.</p>

        <ul class="bullets">
          <li data-sr="posle isplate ne postoji verifikacija da su podaci obrisani." data-en="after payment there is no verification that data has been deleted.">posle isplate ne postoji verifikacija da su podaci obrisani.</li>
          <li data-sr="napadač zadržava pristup sistemu ako proboj nije otkriven i zatvoren." data-en="attacker retains access to the system if the breach has not been discovered and closed.">napadač zadržava pristup sistemu ako proboj nije otkriven i zatvoren.</li>
          <li data-sr="podaci mogu biti prodati trećim stranama pre isplate ili bez obzira na nju." data-en="data may be sold to third parties before payment or regardless of it.">podaci mogu biti prodati trećim stranama pre isplate ili bez obzira na nju.</li>
          <li data-sr="novi zahtev stiže mesecima kasnije sa istim ili novim podacima." data-en="a new demand arrives months later with the same or new data.">novi zahtev stiže mesecima kasnije sa istim ili novim podacima.</li>
        </ul>

        <div class="callout"
          data-sr="<strong>Filter:</strong> uplata ucenjivačkog zahteva ne eliminiše rizik — samo potvrđuje da je meta platila, što povećava verovatnoću novog zahteva."
          data-en="<strong>Filter:</strong> paying an extortion demand does not eliminate the risk — it only confirms the target paid, which increases the probability of a new demand."
        ><strong>Filter:</strong> uplata ucenjivačkog zahteva ne eliminiše rizik — samo potvrđuje da je meta platila, što povećava verovatnoću novog zahteva.</div>
      </article>

      <!-- FAZA 5 -->
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Ponavljanje ucene ili objava podataka" data-en="Phase 5 — Repeated extortion or data disclosure">
          Faza 5 — Ponavljanje ucene ili objava podataka
        </h3>

        <p
          data-sr="Napadač se vraća sa novim zahtevima koristeći iste ili dodatne podatke. Alternativno, ako organizacija odbije ili nema sredstava, podaci se objavljuju na dark web forumima, data leak sajtovima napadačke grupe, ili se prodaju zainteresovanim stranama. U oba slučaja, organizacija snosi reputacione, regulatorne i komercijalne posledice."
          data-en="The attacker returns with new demands using the same or additional data. Alternatively, if the organization refuses or has no funds, data is published on dark web forums, the attacker group's data leak sites, or sold to interested parties. In both cases, the organization bears reputational, regulatory, and commercial consequences."
        >Napadač se vraća sa novim zahtevima koristeći iste ili dodatne podatke. Alternativno, ako organizacija odbije ili nema sredstava, podaci se objavljuju na dark web forumima, data leak sajtovima napadačke grupe, ili se prodaju zainteresovanim stranama. U oba slučaju, organizacija snosi reputacione, regulatorne i komercijalne posledice.</p>

        <div class="branch">
          <p><strong data-sr="Tipične evolucije" data-en="Typical evolutions">Tipične evolucije</strong></p>
          <ul class="bullets">
            <li><a href="ransomware-orgs.html" data-sr="Ransomware napadi na organizacije" data-en="Ransomware attacks on organizations">Ransomware napadi na organizacije</a></li>
            <li><a href="identity-theft.html" data-sr="Krađa identiteta" data-en="Identity theft">Krađa identiteta</a></li>
          </ul>
        </div>
      </article>
    </section>

    <!-- 4) CRVENE ZASTAVICE -->
    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="poruka tvrdi da napadač poseduje interne fajlove i navodi konkretne nazive ili sadržaj." data-en="message claims attacker holds internal files and names specific filenames or content.">poruka tvrdi da napadač poseduje interne fajlove i navodi konkretne nazive ili sadržaj.</li>
        <li data-sr="priložen je uzorak stvarnih podataka organizacije ili osobe." data-en="a sample of real organizational or personal data is attached.">priložen je uzorak stvarnih podataka organizacije ili osobe.</li>
        <li data-sr="zahtev je isključivo u kriptovaluti sa kratkim rokom." data-en="demand is exclusively in cryptocurrency with a short deadline.">zahtev je isključivo u kriptovaluti sa kratkim rokom.</li>
        <li data-sr="pošiljalac navodi konkretne primaoci prijetnje: mediji, regulatori, konkurencija." data-en="sender names specific threat recipients: media, regulators, competitors.">pošiljalac navodi konkretne primaoci prijetnje: mediji, regulatori, konkurencija.</li>
        <li data-sr="prijetnja se ponavlja posle isplate ili se iznos povećava." data-en="threat repeats after payment or the amount increases.">prijetnja se ponavlja posle isplate ili se iznos povećava.</li>
        <li data-sr="neobičan odlazni saobraćaj prethodnih dana koji nije bio prijavljen." data-en="unusual outbound traffic in preceding days that was not reported.">neobičan odlazni saobraćaj prethodnih dana koji nije bio prijavljen.</li>
        <li data-sr="pristup osetljivim bazama podataka sa nepoznatih lokacija ili naloga." data-en="access to sensitive databases from unknown locations or accounts.">pristup osetljivim bazama podataka sa nepoznatih lokacija ili naloga.</li>
      </ul>
    </section>

    <!-- 5) PROVERE -->
    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>

      <p
        data-sr="Cilj provera je utvrditi da li je prijetnja stvarna, koji podaci su kompromitovani i da li je napadač i dalje u sistemu. Ovo menja strategiju odgovora."
        data-en="The goal of checks is to determine whether the threat is real, which data are compromised, and whether the attacker is still in the system. This changes the response strategy."
      >Cilj provera je utvrditi da li je prijetnja stvarna, koji podaci su kompromitovani i da li je napadač i dalje u sistemu. Ovo menja strategiju odgovora.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Tehničke provere" data-en="Technical checks">Tehničke provere</div>
          <ul class="bullets">
            <li data-sr="proveri odlazni saobraćaj logova za period koji napadač navodi." data-en="check outbound traffic logs for the period the attacker references.">proveri odlazni saobraćaj logova za period koji napadač navodi.</li>
            <li data-sr="proveri pristupne logove osetljivih repozitorijuma i baza podataka." data-en="check access logs of sensitive repositories and databases.">proveri pristupne logove osetljivih repozitorijuma i baza podataka.</li>
            <li data-sr="verifikuj da li napadač i dalje ima pristup sistemu." data-en="verify whether the attacker still has system access.">verifikuj da li napadač i dalje ima pristup sistemu.</li>
            <li data-sr="proverite dali su priloženi podaci zaista iz vašeg sistema (a ne konstruisani)." data-en="verify whether the attached data truly comes from your system (not fabricated).">proverite dali su priloženi podaci zaista iz vašeg sistema (a ne konstruisani).</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Pravne i operativne provere" data-en="Legal and operational checks">Pravne i operativne provere</div>
          <ul class="bullets">
            <li data-sr="da li kompromitovani podaci podležu GDPR ili lokalnim propisima?" data-en="are the compromised data subject to GDPR or local regulations?">da li kompromitovani podaci podležu GDPR ili lokalnim propisima?</li>
            <li data-sr="da li postoji obaveza prijavljivanja regulatoru u roku od 72 sata (GDPR)?" data-en="is there an obligation to notify the regulator within 72 hours (GDPR)?">da li postoji obaveza prijavljivanja regulatoru u roku od 72 sata (GDPR)?</li>
            <li data-sr="da li uplata može narušiti sankcione propise ili regulatorne obaveze?" data-en="could payment violate sanctions regulations or regulatory obligations?">da li uplata može narušiti sankcione propise ili regulatorne obaveze?</li>
            <li data-sr="da li je cyber osiguranje aktivno i da li pokriva ovaj scenario?" data-en="is cyber insurance active and does it cover this scenario?">da li je cyber osiguranje aktivno i da li pokriva ovaj scenario?</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 6) CHECKLISTA -->
    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja pre donošenja odluke o uceni" data-en="Checklist: 12 questions before deciding on extortion response">Checklista: 12 pitanja pre donošenja odluke o uceni</h2>

      <p class="muted"
        data-sr="Svaki odgovor menja procenu rizika. Donošenje odluke o isplati isključivo pod pritiskom roka, bez ovog procesa, gotovo uvek vodi ka lošem ishodu."
        data-en="Each answer changes the risk assessment. Deciding to pay solely under deadline pressure, without this process, almost always leads to a bad outcome."
      >Svaki odgovor menja procenu rizika. Donošenje odluke o isplati isključivo pod pritiskom roka, bez ovog procesa, gotovo uvek vodi ka lošem ishodu.</p>

      <ul class="bullets">
        <li data-sr="Da li je priloženi uzorak podataka zaista iz vašeg sistema?" data-en="Is the attached data sample genuinely from your system?">Da li je priloženi uzorak podataka zaista iz vašeg sistema?</li>
        <li data-sr="Da li znate kako je napadač dobio pristup podacima?" data-en="Do you know how the attacker gained access to the data?">Da li znate kako je napadač dobio pristup podacima?</li>
        <li data-sr="Da li je napadač i dalje u sistemu ili je proboj zatvoren?" data-en="Is the attacker still in the system or has the breach been closed?">Da li je napadač i dalje u sistemu ili je proboj zatvoren?</li>
        <li data-sr="Koji podaci su tačno kompromitovani i koliko je lica pogođeno?" data-en="What data exactly are compromised and how many individuals are affected?">Koji podaci su tačno kompromitovani i koliko je lica pogođeno?</li>
        <li data-sr="Da li postoji regulatorna obaveza prijavljivanja bez obzira na isplatu?" data-en="Is there a regulatory reporting obligation regardless of payment?">Da li postoji regulatorna obaveza prijavljivanja bez obzira na isplatu?</li>
        <li data-sr="Da li uplata može narušiti sankcione propise?" data-en="Could payment violate sanctions regulations?">Da li uplata može narušiti sankcione propise?</li>
        <li data-sr="Da li je angažovan forenzički tim za utvrđivanje obima proboja?" data-en="Has a forensic team been engaged to determine the scope of the breach?">Da li je angažovan forenzički tim za utvrđivanje obima proboja?</li>
        <li data-sr="Da li je prijavljen incident policiji pre nego što se razmatra isplata " data-en="Has the incident been reported to police before payment is considered?">Da li je prijavljen incident policiji pre nego što se razmatra isplata </li>
        <li data-sr="Da li postoji garancija da će podaci biti obrisani posle isplate?" data-en="Is there any guarantee data will be deleted after payment?">Da li postoji garancija da će podaci biti obrisani posle isplate?</li>
        <li data-sr="Da li je napadač ranije ispoštovao obećanje brisanja podataka (proverljiva reputacija)?" data-en="Has the attacker previously honored data deletion promises (verifiable reputation)?">Da li je napadač ranije ispoštovao obećanje brisanja podataka (proverljiva reputacija)?</li>
        <li data-sr="Da li se prijetnja može koristiti kao osnov za krivičnu prijavu?" data-en="Can the threat be used as the basis for a criminal complaint?">Da li se prijetnja može koristiti kao osnov za krivičnu prijavu?</li>
        <li data-sr="Da li postoji plan za komunikaciju prema klijentima čiji su podaci kompromitovani?" data-en="Is there a plan to communicate with clients whose data are compromised?">Da li postoji plan za komunikaciju prema klijentima čiji su podaci kompromitovani?</li>
      </ul>
    </section>

    <!-- 7) AKO SUMNJA KRENE -->
    <section class="card">
      <h2 data-sr="Ako ucenička poruka stigne: redosled poteza" data-en="If an extortion message arrives: action order">Ako ucenička poruka stigne: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="sačuvati poruku i sve priložene dokaze bez otvaranja linkova ili aplikacija." data-en="save the message and all attached evidence without opening links or applications.">sačuvati poruku i sve priložene dokaze bez otvaranja linkova ili aplikacija.</li>
        <li data-sr="angažovati forenzički tim za identifikaciju proboja i procene obima." data-en="engage a forensic team to identify the breach and assess its scope.">angažovati forenzički tim za identifikaciju proboja i procene obima.</li>
        <li data-sr="konsultovati pravnika pre svake komunikacije sa napadačem ili isplate." data-en="consult a lawyer before any communication with the attacker or any payment.">konsultovati pravnika pre svake komunikacije sa napadačem ili isplate.</li>
        <li data-sr="prijaviti incident policiji i, ako je primenljivo, regulatoru (GDPR rok 72h)." data-en="report the incident to police and, if applicable, the regulator (GDPR 72h deadline).">prijaviti incident policiji i, ako je primenljivo, regulatoru (GDPR rok 72h).</li>
        <li data-sr="identifikovati i zatvoriti vektor pristupa koji je napadač koristio." data-en="identify and close the access vector the attacker used.">identifikovati i zatvoriti vektor pristupa koji je napadač koristio.</li>
        <li data-sr="odgovoriti pogođenim licima prema regulatornim obavezama, neovisno o uceni." data-en="notify affected individuals according to regulatory obligations, independent of extortion.">odgovoriti pogođenim licima prema regulatornim obavezama, neovisno o uceni.</li>
      </ol>

      <div class="callout"
        data-sr="<strong>Zašto ovaj redosled radi:</strong> forenzika pre odgovora daje podatke za procenu, pravnik štiti od grešaka u komunikaciji, prijava otvara opcije koje se gube posle isplate."
        data-en="<strong>Why this order works:</strong> forensics before response provides data for assessment, a lawyer protects against communication errors, reporting opens options that disappear after payment."
      ><strong>Zašto ovaj redosled radi:</strong> forenzika pre odgovora daje podatke za procenu, pravnik štiti od grešaka u komunikaciji, prijava otvara opcije koje se gube posle isplate.</div>
    </section>

    <!-- 8) AKO POMAŽEŠ NEKOME -->
    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš organizaciji ili osobi koja je pod uceničkim pritiskom" data-en="If you are helping an organization or person under extortion pressure">Ako pokušavaš da pomogneš organizaciji ili osobi koja je pod uceničkim pritiskom</h2>

      <p
        data-sr="Kada je osoba ili tim u panici zbog ucene i kratkog roka, direktno insistiranje da ne plate često izaziva otpor. Efikasnije je ući kroz konkretna pitanja koja usporavaju odluke i otvaraju prostor za forenziku i pravnu procenu."
        data-en="When a person or team is panicking because of extortion and a short deadline, directly insisting they not pay often triggers resistance. It works better to enter through concrete questions that slow decisions and open space for forensic and legal assessment."
      >Kada je osoba ili tim u panici zbog ucene i kratkog roka, direktno insistiranje da ne plate često izaziva otpor. Efikasnije je ući kroz konkretna pitanja koja usporavaju odluke i otvaraju prostor za forenziku i pravnu procenu.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li smo potvrdili da su priloženi podaci zaista iz našeg sistema?" data-en="Have we confirmed the attached data is genuinely from our system?">Da li smo potvrdili da su priloženi podaci zaista iz našeg sistema?</li>
            <li data-sr="Da li je napadač i dalje u sistemu ili je proboj zatvoren?" data-en="Is the attacker still in the system or has the breach been closed?">Da li je napadač i dalje u sistemu ili je proboj zatvoren?</li>
            <li data-sr="Da li uplata garantuje brisanje podataka ili samo tišinu napadača?" data-en="Does payment guarantee data deletion or only attacker silence?">Da li uplata garantuje brisanje podataka ili samo tišinu napadača?</li>
            <li data-sr="Da li smo konsultovali pravnika o sankcionim propisima pre isplate?" data-en="Have we consulted a lawyer about sanctions regulations before payment?">Da li smo konsultovali pravnika o sankcionim propisima pre isplate?</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Forenzika kao prvi korak ne košta vreme — daje nam informacije za bolju odluku." data-en="Forensics as a first step doesn't cost time — it gives us information for a better decision.">Forenzika kao prvi korak ne košta vreme — daje nam informacije za bolju odluku.</li>
            <li data-sr="Uplata bez zatvorenog proboja samo finansira sledeći zahtev." data-en="Payment without closing the breach only finances the next demand.">Uplata bez zatvorenog proboja samo finansira sledeći zahtev.</li>
            <li data-sr="Rok koji napadač postavlja je taktički, a ne tehnički uslov." data-en="The deadline the attacker sets is tactical, not a technical requirement.">Rok koji napadač postavlja je taktički, a ne tehnički uslov.</li>
            <li data-sr="Brisanje podataka posle isplate ne može biti verifikovano i nije garantovano." data-en="Data deletion after payment cannot be verified and is not guaranteed.">Brisanje podataka posle isplate ne može biti verifikovano i nije garantovano.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 9) IZVORI -->

<section class="content-section">
  <h2 data-sr="Povezane prevare" data-en="Related scams">Povezane prevare</h2>
  <ul class="bullets">
    <li><a href="ransomware-orgs.html" data-sr="Ransomware napad." data-en="Ransomware attack.">Ransomware napad</a></li>
    <li><a href="ddos-extortion.html" data-sr="DDoS iznuda." data-en="DDoS extortion.">DDoS iznuda</a></li>
    <li><a href="sextortion-scam.html" data-sr="Sextortion." data-en="Sextortion.">Sextortion</a></li>
    <li><a href="phishing.html" data-sr="Fišing." data-en="Phishing.">Fišing</a></li>
    <li><a href="identity-theft.html" data-sr="Kradja identiteta." data-en="Identity theft.">Kradja identiteta</a></li>
  </ul>
</section>

<section class="card sources" id="sources">
      <h2 data-sr="Izvori" data-en="Sources">Izvori</h2>
      <ul>
        <li><a href="https://www.cisa.gov/resources-tools/resources/data-breach-response-guide" target="_blank" rel="noopener noreferrer">CISA — Data Breach Response Guide</a></li>
        <li><a href="https://www.ftc.gov/business-guidance/resources/data-breach-response-guide-business" target="_blank" rel="noopener noreferrer">FTC — Data Breach Response Guide for Business</a></li>
        <li><a href="https://www.ic3.gov" target="_blank" rel="noopener noreferrer">FBI IC3 — Internet Crime Complaint Center</a></li>
      </ul>
    </section>
  `
};
