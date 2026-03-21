window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["ai-family-emergency-voice-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
      <p data-sr="Napadač prikuplja kratke audio snimke člana porodice sa mreže i pravi sintetički glas. Zatim zove žrtvu sa nepoznatog broja; glas zvuči kao dete, roditelj ili partner i traži hitnu pomoć uz tajnost." data-en="The attacker collects short audio clips of a family member online and builds a synthetic voice. Then they call from an unknown number; the voice sounds like a child, parent, or partner and asks for urgent help with secrecy.">Napadač prikuplja kratke audio snimke člana porodice sa mreže i pravi sintetički glas. Zatim zove žrtvu sa nepoznatog broja; glas zvuči kao dete, roditelj ili partner i traži hitnu pomoć uz tajnost.</p>
      <p data-sr="Ova varijanta je uži sloj prevare sa hitnom porodičnom situacijom: razlika je u tome što zvučni trag deluje gotovo savršeno, pa standardno nepoznat broj ne pomaže ako ne proverite identitet drugim kanalom." data-en="This variant is a narrower layer of the family emergency scam: the audio trace feels almost perfect, so unknown number advice fails unless you verify identity another way.">Ova varijanta je uži sloj prevare sa hitnom porodičnom situacijom: razlika je u tome što zvučni trag deluje gotovo savršeno, pa standardno nepoznat broj ne pomaže ako ne proverite identitet drugim kanalom.</p>
      <div class="callout" data-sr="<strong>Model:</strong> javni audio uzorak → AI glas → lažni hitni poziv → tajnost → uplata ili kod kartice." data-en="<strong>Model:</strong> public audio sample → AI voice → fake urgent call → secrecy → payment or card codes."><strong>Model:</strong> javni audio uzorak → AI glas → lažni hitni poziv → tajnost → uplata ili kod kartice.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi" data-en="How it generally works">Kako generalno radi</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gradi poverenje" data-en="What builds trust">Šta gradi poverenje</div>
          <ul class="bullets">
            <li data-sr="Glas kopira intonaciju i brzinu govora poznate osobe." data-en="The voice copies intonation and pace of the known person.">Glas kopira intonaciju i brzinu govora poznate osobe.</li>
            <li data-sr="Scenario koristi detalje sa objava o putovanju, poslu ili školi." data-en="The scenario uses details from posts about travel, work, or school.">Scenario koristi detalje sa objava o putovanju, poslu ili školi.</li>
            <li data-sr="Hitnost i plačni ton smanjuju vreme za razmišljanje." data-en="Urgency and tearful tone reduce thinking time.">Hitnost i plačni ton smanjuju vreme za razmišljanje.</li>
            <li data-sr="Zahtev za tajnošću sprečava brzu proveru sa drugim članom domaćinstva." data-en="A secrecy demand blocks quick check with another household member.">Zahtev za tajnošću sprečava brzu proveru sa drugim članom domaćinstva.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Gde puca logika" data-en="Where logic breaks">Gde puca logika</div>
          <ul class="bullets">
            <li data-sr="Prava osoba je dostupna na poznatom broju ili aplikaciji koju koristite svakodnevno." data-en="The real person is reachable on a known number or app you use daily.">Prava osoba je dostupna na poznatom broju ili aplikaciji koju koristite svakodnevno.</li>
            <li data-sr="Pozivalac ne zna odgovor na pitanje koje ste dogovorili unapred kao porodičnu šifru." data-en="The caller cannot answer a question you agreed as a family code in advance.">Pozivalac ne zna odgovor na pitanje koje ste dogovorili unapred kao porodičnu šifru.</li>
            <li data-sr="Metoda uplate je poklon kartica, kripto ili gotovina kuriru, ne zdravstvena ustanova." data-en="Payment method is gift cards, crypto, or cash to a courier, not a hospital.">Metoda uplate je poklon kartica, kripto ili gotovina kuriru, ne zdravstvena ustanova.</li>
            <li data-sr="Broj pozivaoca ne postoji u vašem imeniku nakon što sačuvate kontakt." data-en="The caller’s number is not in your contacts after you save it.">Broj pozivaoca ne postoji u vašem imeniku nakon što sačuvate kontakt.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching)">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Šest faza tipičnog toka; grananja ka glasu i klasičnoj porodičnoj prevari." data-en="Six phases of a typical flow; branching to voice and classic family scams.">Šest faza tipičnog toka; grananja ka glasu i klasičnoj porodičnoj prevari.</p>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Prikupljanje uzoraka" data-en="Phase 1 — Sample gathering">Faza 1 — Prikupljanje uzoraka</h3>
        <p data-sr="Napadač skida kratke snimke sa društvenih mreža, poziva na javnim događajima ili poruka glasovnih beleški." data-en="The attacker pulls short clips from social media, public event footage, or voice notes.">Napadač skida kratke snimke sa društvenih mreža, poziva na javnim događajima ili poruka glasovnih beleški.</p>
        <ul class="bullets">
          <li data-sr="Signal: porodični profili su javni i često objavljuju lokacije." data-en="Signal: family profiles are public and often post locations.">Signal: porodični profili su javni i često objavljuju lokacije.</li>
          <li data-sr="Signal: deca ili tinejdžeri imaju duže snimke na TikTok-u ili YouTube-u." data-en="Signal: children or teens have longer clips on TikTok or YouTube.">Signal: deca ili tinejdžeri imaju duže snimke na TikTok-u ili YouTube-u.</li>
          <li data-sr="Signal: roditelji dele ponosne objave sa imenom škole ili grada." data-en="Signal: parents share proud posts with school or city names.">Signal: roditelji dele ponosne objave sa imenom škole ili grada.</li>
          <li data-sr="Signal: poslovni podkasti ili intervjui daju čist zapis glasa odraslog člana." data-en="Signal: work podcasts or interviews give a clean adult voice recording.">Signal: poslovni podkasti ili intervjui daju čist zapis glasa odraslog člana.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> postoji dovoljno čistog audio materijala za kloniranje." data-en="<strong>Phase threshold:</strong> enough clean audio exists for cloning."><strong>Prag faze:</strong> postoji dovoljno čistog audio materijala za kloniranje.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Prvi poziv" data-en="Phase 2 — First call">Faza 2 — Prvi poziv</h3>
        <p data-sr="Žrtva prima poziv; glas tvrdi da je u nevolji, u bolnici, hapšenju ili da treba hitno da se plati usluga." data-en="The victim gets a call; the voice claims trouble, hospital, arrest, or an urgent service fee.">Žrtva prima poziv; glas tvrdi da je u nevolji, u bolnici, hapšenju ili da treba hitno da se plati usluga.</p>
        <ul class="bullets">
          <li data-sr="Signal: broj nije sačuvan u telefonu i ne poklapa se sa brojem člana porodice." data-en="Signal: number is not saved and does not match the family member’s.">Signal: broj nije sačuvan u telefonu i ne poklapa se sa brojem člana porodice.</li>
          <li data-sr="Signal: traži se da ne zovete drugog roditelja ili partnera." data-en="Signal: you are asked not to call the other parent or partner.">Signal: traži se da ne zovete drugog roditelja ili partnera.</li>
          <li data-sr="Signal: razgovor je kratak i vraća vas na isti zahtev kad pitate detalje." data-en="Signal: the call is short and loops to the same ask when you ask details.">Signal: razgovor je kratak i vraća vas na isti zahtev kad pitate detalje.</li>
          <li data-sr="Signal: kvalitet linije je loš da sakrije mane u sintetičkom glasu." data-en="Signal: line quality is poor to hide flaws in synthetic speech.">Signal: kvalitet linije je loš da sakrije mane u sintetičkom glasu.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> emotivno prihvatate da je reč o članu porodice." data-en="<strong>Phase threshold:</strong> you emotionally accept it is a family member."><strong>Prag faze:</strong> emotivno prihvatate da je reč o članu porodice.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Prag: uplata ili kod" data-en="Phase 3 — Threshold: payment or code">Faza 3 — Prag: uplata ili kod</h3>
        <p data-sr="Uvodi se konkretan iznos, IBAN, uputstvo za poklon karticu ili čitanje kodova sa SMS-a." data-en="A concrete amount, IBAN, gift card steps, or reading SMS codes is introduced.">Uvodi se konkretan iznos, IBAN, uputstvo za poklon karticu ili čitanje kodova sa SMS-a.</p>
        <ul class="bullets">
          <li data-sr="Signal: uplata mora biti u roku od minuta." data-en="Signal: payment must happen within minutes.">Signal: uplata mora biti u roku od minuta.</li>
          <li data-sr="Signal: traže se kodovi sa više kartica zaredom." data-en="Signal: codes from multiple cards in a row are requested.">Signal: traže se kodovi sa više kartica zaredom.</li>
          <li data-sr="Signal: objašnjenje zašto baš poklon kartica brže rešava." data-en="Signal: explanation why gift cards solve faster.">Signal: objašnjenje zašto baš poklon kartica brže rešava.</li>
          <li data-sr="Signal: pretnja da će biti gore ako pitate bilo koga drugog." data-en="Signal: threat it will be worse if you ask anyone else.">Signal: pretnja da će biti gore ako pitate bilo koga drugog.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="family-emergency-scam.html" data-sr="Prevara sa hitnom porodičnom situacijom" data-en="Family emergency scam">Prevara sa hitnom porodičnom situacijom</a></li>
            <li><a href="ai-voice-clone-scam.html" data-sr="AI klon glasa (šira kategorija)" data-en="AI voice clone scam (broader)">AI klon glasa (šira kategorija)</a></li>
            <li><a href="grandparent-scam.html" data-sr="Prevara s unukom" data-en="Grandparent scam">Prevara s unukom</a></li>
            <li><a href="gift-card-scam.html" data-sr="Prevara s poklon karticama" data-en="Gift card scam">Prevara s poklon karticama</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> šaljete novac ili očitavate kodove." data-en="<strong>Phase threshold:</strong> you send money or read out codes."><strong>Prag faze:</strong> šaljete novac ili očitavate kodove.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Drugi talas zahteva" data-en="Phase 4 — Second wave of demands">Faza 4 — Drugi talas zahteva</h3>
        <p data-sr="Posle prve uplate sledi poruka da fali još malo za kompletiranje ili da je transfer odbijen." data-en="After the first payment comes a message that a bit more is needed or the transfer was rejected.">Posle prve uplate sledi poruka da fali još malo za kompletiranje ili da je transfer odbijen.</p>
        <ul class="bullets">
          <li data-sr="Signal: isti glas ili nova poruka traži veći iznos." data-en="Signal: same voice or new message asks for a larger amount.">Signal: isti glas ili nova poruka traži veći iznos.</li>
          <li data-sr="Signal: prebacivanje na supervizora koji potvrđuje isti scenario." data-en="Signal: handoff to a supervisor who confirms the same story.">Signal: prebacivanje na supervizora koji potvrđuje isti scenario.</li>
          <li data-sr="Signal: traži se da obrišete istoriju četa ili poruka." data-en="Signal: you are asked to delete chat or SMS history.">Signal: traži se da obrišete istoriju četa ili poruka.</li>
          <li data-sr="Signal: novi poziv sa drugog broja nastavlja pritisak." data-en="Signal: new call from another number continues pressure.">Signal: novi poziv sa drugog broja nastavlja pritisak.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> uplaćujete drugi put da završite." data-en="<strong>Phase threshold:</strong> you pay a second time to finish."><strong>Prag faze:</strong> uplaćujete drugi put da završite.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Održavanje tajnosti" data-en="Phase 5 — Keeping secrecy">Faza 5 — Održavanje tajnosti</h3>
        <p data-sr="Žrtva je uverena da će porodičnom članu biti gore ako priča sa nekima iz kuće ili sa bankom." data-en="The victim is convinced the family member will fare worse if they talk to someone at home or the bank.">Žrtva je uverena da će porodičnom članu biti gore ako priča sa nekima iz kuće ili sa bankom.</p>
        <ul class="bullets">
          <li data-sr="Signal: zabrana odlaska u banku uz objašnjenje da će zamrznuti nalog." data-en="Signal: ban on going to the bank with a story they will freeze the account.">Signal: zabrana odlaska u banku uz objašnjenje da će zamrznuti nalog.</li>
          <li data-sr="Signal: lažna uverenja da policija zabranjuje obaveštavanje." data-en="Signal: false claim that police forbid informing others.">Signal: lažna uverenja da policija zabranjuje obaveštavanje.</li>
          <li data-sr="Signal: traži se da ostaneš na liniji dok podižeš gotovinu." data-en="Signal: you must stay on the line while withdrawing cash.">Signal: traži se da ostaneš na liniji dok podižeš gotovinu.</li>
          <li data-sr="Signal: pretnja da će snimak ili poruka biti objavljeni." data-en="Signal: threat that a recording or message will be published.">Signal: pretnja da će snimak ili poruka biti objavljeni.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> izbegavate normalnu proveru sa porodicom." data-en="<strong>Phase threshold:</strong> you avoid normal verification with family."><strong>Prag faze:</strong> izbegavate normalnu proveru sa porodicom.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 6 — Otkrivanje" data-en="Phase 6 — Discovery">Faza 6 — Otkrivanje</h3>
        <p data-sr="Kontakt sa pravom osobom pokazuje da nikad nije zvala. Novac je teško vratiti; porodica menja šifre i podešava privatnost profila." data-en="Contact with the real person shows they never called. Money is hard to recover; the family changes codes and tightens profile privacy.">Kontakt sa pravom osobom pokazuje da nikad nije zvala. Novac je teško vratiti; porodica menja šifre i podešava privatnost profila.</p>
        <ul class="bullets">
          <li data-sr="Signal: prava osoba je na drugoj lokaciji bez ikakve krize." data-en="Signal: the real person is elsewhere with no crisis.">Signal: prava osoba je na drugoj lokaciji bez ikakve krize.</li>
          <li data-sr="Signal: broj prevaranta više ne odgovara." data-en="Signal: fraudster’s number no longer answers.">Signal: broj prevaranta više ne odgovara.</li>
          <li data-sr="Signal: banka beleži tipičan obrazac poklon kartica." data-en="Signal: bank notes a typical gift-card pattern.">Signal: banka beleži tipičan obrazac poklon kartica.</li>
          <li data-sr="Signal: ista šema se ponavlja u komšiluku ili školi." data-en="Signal: the same pattern repeats in the neighbourhood or school.">Signal: ista šema se ponavlja u komšiluku ili školi.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="vishing.html" data-sr="Višing" data-en="Vishing">Višing</a></li>
            <li><a href="recovery-scam.html" data-sr="Prevara povraćaja" data-en="Recovery scam">Prevara povraćaja</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> prijavljujete incident i štitite buduće pozive šifrom." data-en="<strong>Phase threshold:</strong> you report the incident and protect future calls with a code word."><strong>Prag faze:</strong> prijavljujete incident i štitite buduće pozive šifrom.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Član porodice zove sa broja koji nikad nije koristio." data-en="A family member calls from a number they never used.">Član porodice zove sa broja koji nikad nije koristio.</li>
        <li data-sr="Glas traži tajnost prema ostatku porodice." data-en="The voice asks for secrecy from the rest of the family.">Glas traži tajnost prema ostatku porodice.</li>
        <li data-sr="Plaćanje poklon karticama za hitan medicinski ili pravni slučaj." data-en="Gift card payment for an urgent medical or legal case.">Plaćanje poklon karticama za hitan medicinski ili pravni slučaj.</li>
        <li data-sr="Osoba ne zna dogovorenu porodičnu šifru ili je izbegava." data-en="The person does not know the family code word or avoids it.">Osoba ne zna dogovorenu porodičnu šifru ili je izbegava.</li>
        <li data-sr="Odgovori na lična pitanja su opšti ili pogrešni." data-en="Answers to personal questions are generic or wrong.">Odgovori na lična pitanja su opšti ili pogrešni.</li>
        <li data-sr="Glas zvuči blago ravno ili se ponavlja ista fraza." data-en="The voice sounds slightly flat or repeats the same phrase.">Glas zvuči blago ravno ili se ponavlja ista fraza.</li>
        <li data-sr="Traži se da ostanete na vezi tokom odlaska u prodavnicu kartica." data-en="You must stay on the line while going to buy cards.">Traži se da ostanete na vezi tokom odlaska u prodavnicu kartica.</li>
        <li data-sr="Hitnost koja ne dozvoljava poziv nazad na poznat broj." data-en="Urgency that blocks calling back on a known number.">Hitnost koja ne dozvoljava poziv nazad na poznat broj.</li>
        <li data-sr="Scenario tačno prati nedavnu objavu sa putovanja ili događaja." data-en="The scenario exactly follows a recent travel or event post.">Scenario tačno prati nedavnu objavu sa putovanja ili događaja.</li>
        <li data-sr="Novi poziv odmah ako kažete da ćete proveriti." data-en="A new call immediately if you say you will verify.">Novi poziv odmah ako kažete da ćete proveriti.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Identitet" data-en="Identity">Identitet</div>
          <ul class="bullets">
            <li data-sr="Da li možete prekinuti i nazvati člana porodice na aplikaciji ili broju koji ste sami sačuvali." data-en="Can you hang up and call the family member on an app or number you saved yourself.">Da li možete prekinuti i nazvati člana porodice na aplikaciji ili broju koji ste sami sačuvali.</li>
            <li data-sr="Da li postoji dogovorena šifra koju lažni glas ne zna." data-en="Is there an agreed code word the fake voice would not know.">Da li postoji dogovorena šifra koju lažni glas ne zna.</li>
            <li data-sr="Da li drugi odrasli u kući mogu potvrditi gde je dete ili partner." data-en="Can another adult at home confirm where the child or partner is.">Da li drugi odrasli u kući mogu potvrditi gde je dete ili partner.</li>
            <li data-sr="Da li škola, posao ili trener mogu brzo potvrditi prisutnost." data-en="Can school, work, or a coach quickly confirm presence.">Da li škola, posao ili trener mogu brzo potvrditi prisutnost.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Novac" data-en="Money">Novac</div>
          <ul class="bullets">
            <li data-sr="Da li bi prava ustanova tražila poklon karticu." data-en="Would a real institution ask for a gift card.">Da li bi prava ustanova tražila poklon karticu.</li>
            <li data-sr="Da li banka vidi tipičnu prevaru kad opišete svrhu." data-en="Does the bank flag a typical scam when you describe the purpose.">Da li banka vidi tipičnu prevaru kad opišete svrhu.</li>
            <li data-sr="Da li možete sačekati petnaest minuta pre bilo kakve uplate." data-en="Can you wait fifteen minutes before any payment.">Da li možete sačekati petnaest minuta pre bilo kakve uplate.</li>
            <li data-sr="Da li bi isti zahtev bio smislen sutra u podne." data-en="Would the same request make sense tomorrow at noon.">Da li bi isti zahtev bio smislen sutra u podne.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
      <p class="muted" data-sr="Više negativnih odgovora ukazuje na prevaru." data-en="Multiple negative answers point to a scam.">Više negativnih odgovora ukazuje na prevaru.</p>
      <ul class="bullets">
        <li data-sr="Da li sam zvao člana porodice na poznat broj pre uplate." data-en="Did I call the family member on a known number before paying.">Da li sam zvao člana porodice na poznat broj pre uplate.</li>
        <li data-sr="Da li je broj pozivaoca isti kao u mom imeniku." data-en="Is the caller’s number the same as in my contacts.">Da li je broj pozivaoca isti kao u mom imeniku.</li>
        <li data-sr="Da li znam porodičnu šifru i da li je osoba na liniji znala." data-en="Do I know the family code and did the person on the line know it.">Da li znam porodičnu šifru i da li je osoba na liniji znala.</li>
        <li data-sr="Da li traže tajnost prema nekome ko bi mogao da pomogne." data-en="Do they want secrecy from someone who could help.">Da li traže tajnost prema nekome ko bi mogao da pomogne.</li>
        <li data-sr="Da li je metoda plaćanja poklon kartica ili kripto." data-en="Is the payment method gift cards or crypto.">Da li je metoda plaćanja poklon kartica ili kripto.</li>
        <li data-sr="Da li me tera da ostanem na vezi dok podižem novac." data-en="Are they forcing me to stay on the line while I withdraw cash.">Da li me tera da ostanem na vezi dok podižem novac.</li>
        <li data-sr="Da li scenario koristi detalje sa javnog profila." data-en="Does the scenario use details from a public profile.">Da li scenario koristi detalje sa javnog profila.</li>
        <li data-sr="Da li bih ovaj poziv prijavio drugom članu porodice." data-en="Would I report this call to another family member.">Da li bih ovaj poziv prijavio drugom članu porodice.</li>
        <li data-sr="Da li glas zvuči prirodno kad postavim neočekivano pitanje." data-en="Does the voice sound natural when I ask an unexpected question.">Da li glas zvuči prirodno kad postavim neočekivano pitanje.</li>
        <li data-sr="Da li postoji drugi dokaz osim glasa (sms sa poznatog broja)." data-en="Is there evidence beyond voice (SMS from a known number).">Da li postoji drugi dokaz osim glasa (sms sa poznatog broja).</li>
        <li data-sr="Da li sam sačuvao broj i vreme poziva za prijavu." data-en="Did I save the number and call time for reporting.">Da li sam sačuvao broj i vreme poziva za prijavu.</li>
        <li data-sr="Da li su profili dece i odraslih dovoljno zatvoreni za javnost." data-en="Are children’s and adults’ profiles closed enough to the public.">Da li su profili dece i odraslih dovoljno zatvoreni za javnost.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Spustite slušalicu odmah; ne diskutujte duže sa glasom." data-en="Hang up immediately; do not argue longer with the voice.">Spustite slušalicu odmah; ne diskutujte duže sa glasom.</li>
        <li data-sr="Pozovite pravog člana porodice na broj iz imenika ili aplikacije." data-en="Call the real family member from contacts or the app.">Pozovite pravog člana porodice na broj iz imenika ili aplikacije.</li>
        <li data-sr="Obavestite drugog odraslog u kući pre bilo kakvog novca." data-en="Inform another adult at home before any money moves.">Obavestite drugog odraslog u kući pre bilo kakvog novca.</li>
        <li data-sr="Ako je uplata izvršena, banka i policija sa dokazima odmah." data-en="If payment was made, bank and police with evidence immediately.">Ako je uplata izvršena, banka i policija sa dokazima odmah.</li>
        <li data-sr="Dogovorite porodičnu šifru za buduće hitne slučajeve." data-en="Agree a family code word for future emergencies.">Dogovorite porodičnu šifru za buduće hitne slučajeve.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si pozvao istu osobu na njen broj odmah posle prekida poziva." data-en="Did you call the same person on their number right after hanging up.">Da li si pozvao istu osobu na njen broj odmah posle prekida poziva.</li>
            <li data-sr="Da li postoji šifra koju samo porodica zna i da li je glas znao." data-en="Is there a code only the family knows and did the voice know it.">Da li postoji šifra koju samo porodica zna i da li je glas znao.</li>
            <li data-sr="Da li bi bolnica ili advokat tražio poklon karticu." data-en="Would a hospital or lawyer ask for a gift card.">Da li bi bolnica ili advokat tražio poklon karticu.</li>
            <li data-sr="Da li možemo zajedno da pozovemo školu ili posao za proveru prisutnosti." data-en="Can we call school or work together to check presence.">Da li možemo zajedno da pozovemo školu ili posao za proveru prisutnosti.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="AI može oponašati glas iz snimaka; zato proveravamo drugim kanalom." data-en="AI can mimic voice from recordings; that is why we verify another way.">AI može oponašati glas iz snimaka; zato proveravamo drugim kanalom.</li>
            <li data-sr="Prava hitna situacija dozvoljava da pozoveš me ili drugog odraslog." data-en="A real emergency allows you to call me or another adult.">Prava hitna situacija dozvoljava da pozoveš me ili drugog odraslog.</li>
            <li data-sr="Pauza od petnaest minuta neće povrediti nikoga, a može zaustaviti prevaru." data-en="A fifteen-minute pause will not hurt anyone but can stop fraud.">Pauza od petnaest minuta neće povrediti nikoga, a može zaustaviti prevaru.</li>
            <li data-sr="Ako nestanu kad tražimo video poziv sa poznatog naloga, to je odgovor." data-en="If they vanish when we ask for video from a known account, that is the answer.">Ako nestanu kad tražimo video poziv sa poznatog naloga, to je odgovor.</li>
          </ul>
        </div>
      </div>
    </section>
`
};
