window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["eppo-impersonation"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
      <p data-sr="Prevarant se predstavlja kao Evropska kancelarija javnog tužioca (EPPO) ili kao osoba koja u njenom imenu postupa. Često se spominje prekogranični kriminal, EU sredstva ili lažni broj predmeta. Cilj je uplata depozita, kazne, takse ili predaja podataka pod pritiskom zvaničnog autoriteta. U prevarama se EPPO obično dovodi u vezu sa krivičnim predmetom, prekograničnom istragom ili zloupotrebom EU sredstava, a ne sa komunalijama, školarinom ili lokalnim prekršajima." data-en="The fraudster poses as the European Public Prosecutor's Office (EPPO) or as someone acting on its behalf. Cross-border crime, EU funds, or a fake case number are often cited. The goal is payment of a deposit, fine, fee, or data handover under official-looking pressure. In scams EPPO is usually linked to a criminal case, cross-border investigation, or misuse of EU funds, not to utility bills, tuition, or local misdemeanours.">Prevarant se predstavlja kao Evropska kancelarija javnog tužioca (EPPO) ili kao osoba koja u njenom imenu postupa. Često se spominje prekogranični kriminal, EU sredstva ili lažni broj predmeta. Cilj je uplata depozita, kazne, takse ili predaja podataka pod pritiskom zvaničnog autoriteta. U prevarama se EPPO obično dovodi u vezu sa krivičnim predmetom, prekograničnom istragom ili zloupotrebom EU sredstava, a ne sa komunalijama, školarinom ili lokalnim prekršajima.</p>
      <p data-sr="Pravi EPPO ne traži od građana hitne uplate preko četa, privatnih naloga ili kriptovaluta. Svaka takva poruka treba da se tretira kao visok rizik prevare dok se identitet ne proveri kroz zvanični sajt i objavljene kontakte." data-en="The real EPPO does not ask citizens for urgent payments via chat, private accounts, or cryptocurrency. Any such message should be treated as high fraud risk until identity is verified through the official website and published contacts.">Pravi EPPO ne traži od građana hitne uplate preko četa, privatnih naloga ili kriptovaluta. Svaka takva poruka treba da se tretira kao visok rizik prevare dok se identitet ne proveri kroz zvanični sajt i objavljene kontakte.</p>
      <div class="callout" data-sr="<strong>Model:</strong> neočekivani kontakt → lažni predmet → zahtev za uplatom → rok → eskalacija → nestanak kontakta." data-en="<strong>Model:</strong> unexpected contact → fake case → payment demand → deadline → escalation → contact disappears."><strong>Model:</strong> neočekivani kontakt → lažni predmet → zahtev za uplatom → rok → eskalacija → nestanak kontakta.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi" data-en="How it generally works">Kako generalno radi</h2>
      <p data-sr="Kombinuje se lažni autoritet krivičnog gonjenja sa rokovima i pretnjama. Dokumenti mogu imati zaglavlja i pečate koji liče na zvanične, ali domen imejla i način uplate odaju prevaru." data-en="It combines fake criminal-prosecution authority with deadlines and threats. Documents may have headers and stamps that look official, but the email domain and payment method reveal the fraud.">Kombinuje se lažni autoritet krivičnog gonjenja sa rokovima i pretnjama. Dokumenti mogu imati zaglavlja i pečate koji liče na zvanične, ali domen imejla i način uplate odaju prevaru.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta ubeduje žrtvu" data-en="What convinces the victim">Šta ubeduje žrtvu</div>
          <ul class="bullets">
            <li data-sr="Naziv EPPO-a i stručni pravni žargon zvuče ozbiljno i zastrašujuće." data-en="The EPPO name and legal jargon sound serious and intimidating.">Naziv EPPO-a i stručni pravni žargon zvuče ozbiljno i zastrašujuće.</li>
            <li data-sr="Broj predmeta i datum daju lažnu preciznost koja smanjuje sumnju." data-en="A case number and date give false precision that reduces doubt.">Broj predmeta i datum daju lažnu preciznost koja smanjuje sumnju.</li>
            <li data-sr="Pritiska se rok od nekoliko sati ili dana da bi se sprečila provera." data-en="A deadline of hours or days is used to prevent verification.">Pritiska se rok od nekoliko sati ili dana da bi se sprečila provera.</li>
            <li data-sr="Lažni savetnik ili advokat može se uključiti radi pojačanja autoriteta." data-en="A fake advisor or lawyer may join to reinforce authority.">Lažni savetnik ili advokat može se uključiti radi pojačanja autoriteta.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Gde je novac ili podaci" data-en="Where money or data goes">Gde je novac ili podaci</div>
          <ul class="bullets">
            <li data-sr="Uplata ide na privatni račun, platne servise ili kripto novčanik." data-en="Payment goes to a private account, payment apps, or a crypto wallet.">Uplata ide na privatni račun, platne servise ili kripto novčanik.</li>
            <li data-sr="Traže se kopije lične karte, pasoša ili bankarskih podataka za navodnu verifikaciju." data-en="Copies of ID, passport, or banking details are requested for alleged verification.">Traže se kopije lične karte, pasoša ili bankarskih podataka za navodnu verifikaciju.</li>
            <li data-sr="Kontakt odbija ili odlaže proveru kroz zvanični javni broj ili portal." data-en="The contact refuses or delays verification through the official public number or portal.">Kontakt odbija ili odlaže proveru kroz zvanični javni broj ili portal.</li>
            <li data-sr="Posle uplate sledi novi razlog za dodatnu uplatu ili tihu." data-en="After payment, a new reason appears for another payment or silence.">Posle uplate sledi novi razlog za dodatnu uplatu ili tihu.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching)">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Šest faza prikazuje tipičan tok; grananja vode ka srodnim šemama prevare." data-en="Six phases show the typical flow; branching leads to related scam patterns.">Šest faza prikazuje tipičan tok; grananja vode ka srodnim šemama prevare.</p>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Neočekivani kontakt" data-en="Phase 1 — Unexpected contact">Faza 1 — Neočekivani kontakt</h3>
        <p data-sr="Žrtva dobija imejl, poziv, SMS ili poruku na mrežama u kojoj se tvrdi da EPPO vodi predmet koji se tiče nje ili njene firme. Ton je zvaničan i naglašava ozbiljnost situacije." data-en="The victim receives email, call, SMS, or a social message claiming EPPO has a case concerning them or their company. The tone is official and stresses seriousness.">Žrtva dobija imejl, poziv, SMS ili poruku na mrežama u kojoj se tvrdi da EPPO vodi predmet koji se tiče nje ili njene firme. Ton je zvaničan i naglašava ozbiljnost situacije.</p>
        <ul class="bullets">
          <li data-sr="Signal: prvi kontakt dolazi bez prethodnog pisanog poziva sa adrese sa zvaničnog domena koji ste sami pronašli." data-en="Signal: first contact arrives without prior written summons from an official domain you found yourself.">Signal: prvi kontakt dolazi bez prethodnog pisanog poziva sa adrese sa zvaničnog domena koji ste sami pronašli.</li>
          <li data-sr="Signal: adresa pošiljaoca je slična zvaničnoj ali nije identična pravom domen." data-en="Signal: sender address is similar to the official one but not identical to the real domain.">Signal: adresa pošiljaoca je slična zvaničnoj ali nije identična pravom domen.</li>
          <li data-sr="Signal: traži se odmah telefonski ili čet nastavak bez pisanog traga." data-en="Signal: immediate phone or chat continuation is requested without a paper trail.">Signal: traži se odmah telefonski ili čet nastavak bez pisanog traga.</li>
          <li data-sr="Signal: poruka sadrži pretnju hapšenjem ili blokadom imovine već u prvom koraku." data-en="Signal: the message contains arrest or asset-freeze threat in the first step.">Signal: poruka sadrži pretnju hapšenjem ili blokadom imovine već u prvom koraku.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> žrtva odgovori ili pozove broj iz poruke." data-en="<strong>Phase threshold:</strong> the victim replies or calls the number from the message."><strong>Prag faze:</strong> žrtva odgovori ili pozove broj iz poruke.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Priča o predmetu" data-en="Phase 2 — Case narrative">Faza 2 — Priča o predmetu</h3>
        <p data-sr="Prevarant dodaje detalje o navodnom krivičnom delu, prevari EU sredstvima ili pranju novca. Cilj je da priča zvuči neosporno i da žrtva ne traži pauzu za proveru." data-en="The fraudster adds details about an alleged crime, EU funds fraud, or money laundering. The goal is for the story to sound unquestionable so the victim does not pause to verify.">Prevarant dodaje detalje o navodnom krivičnom delu, prevari EU sredstvima ili pranju novca. Cilj je da priča zvuči neosporno i da žrtva ne traži pauzu za proveru.</p>
        <ul class="bullets">
          <li data-sr="Signal: detalji se ne mogu potvrditi kod lokalnog tužioca ili advokata bez kontakta prevaranta." data-en="Signal: details cannot be confirmed with a local prosecutor or lawyer without the fraudster's channel.">Signal: detalji se ne mogu potvrditi kod lokalnog tužioca ili advokata bez kontakta prevaranta.</li>
          <li data-sr="Signal: isti šablon priče može naći se na forumima kao opis prevare." data-en="Signal: the same story template may appear on forums as a scam description.">Signal: isti šablon priče može naći se na forumima kao opis prevare.</li>
          <li data-sr="Signal: insistira se da predmet mora ostati tajna od porodice i banke." data-en="Signal: you are told the case must stay secret from family and the bank.">Signal: insistira se da predmet mora ostati tajna od porodice i banke.</li>
          <li data-sr="Signal: dokumenti nemaju putanju koja vodi do objavljenog zvaničnog registra odluka." data-en="Signal: documents lack a path to a published official decision register.">Signal: dokumenti nemaju putanju koja vodi do objavljenog zvaničnog registra odluka.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> žrtva prihvata da predmet može biti stvaran." data-en="<strong>Phase threshold:</strong> the victim accepts the case might be real."><strong>Prag faze:</strong> žrtva prihvata da predmet može biti stvaran.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Zahtev za uplatom ili podacima" data-en="Phase 3 — Payment or data demand">Faza 3 — Zahtev za uplatom ili podacima</h3>
        <p data-sr="Uvodi se depozit, kaucija, sudska taksa ili naknada za zatvaranje istrage. Alternativno traže se slike dokumenata i pristupni kodovi. Sve je predstavljeno kao uslov da se izbegne hapšenje." data-en="A deposit, bail, court fee, or investigation closure fee is introduced. Alternatively, document photos and access codes are requested. Everything is framed as a condition to avoid arrest.">Uvodi se depozit, kaucija, sudska taksa ili naknada za zatvaranje istrage. Alternativno traže se slike dokumenata i pristupni kodovi. Sve je predstavljeno kao uslov da se izbegne hapšenje.</p>
        <ul class="bullets">
          <li data-sr="Signal: uplata nije moguća na žiro račun javnog tužilaštva koji ste sami pronašli." data-en="Signal: payment cannot be made to a prosecution office giro account you found yourself.">Signal: uplata nije moguća na žiro račun javnog tužilaštva koji ste sami pronašli.</li>
          <li data-sr="Signal: traže se prepaid kartice, kripto ili instant transfer trećoj osobi." data-en="Signal: prepaid cards, crypto, or instant transfer to a third party are requested.">Signal: traže se prepaid kartice, kripto ili instant transfer trećoj osobi.</li>
          <li data-sr="Signal: traže se OTP kodovi ili pristup e-bankarstvu radi navodne provere." data-en="Signal: OTP codes or e-banking access are requested for alleged verification.">Signal: traže se OTP kodovi ili pristup e-bankarstvu radi navodne provere.</li>
          <li data-sr="Signal: rok za uplatu je istekao sutra ili iste večeri." data-en="Signal: payment deadline is tomorrow or the same evening.">Signal: rok za uplatu je istekao sutra ili iste večeri.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="government-impersonation.html" data-sr="Lažno predstavljanje državnih organa" data-en="Government impersonation scams">Lažno predstavljanje državnih organa</a></li>
            <li><a href="court-impersonation.html" data-sr="Lažni sudski pozivi" data-en="Fake court summons and fee scams">Lažni sudski pozivi</a></li>
            <li><a href="advance-fee-fraud.html" data-sr="Uplata unapred" data-en="Advance-fee fraud">Uplata unapred</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> žrtva pristaje da pošalje novac ili osetljive podatke." data-en="<strong>Phase threshold:</strong> the victim agrees to send money or sensitive data."><strong>Prag faze:</strong> žrtva pristaje da pošalje novac ili osetljive podatke.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Eskalacija" data-en="Phase 4 — Escalation">Faza 4 — Eskalacija</h3>
        <p data-sr="Ako žrtva okleva, pretnje postaju jače: nalog za hapšenje, crvena poternica, blokada računa. Uvod se druga osoba koja potvrđuje priču." data-en="If the victim hesitates, threats intensify: arrest warrant, lookout notice, account freeze. A second person is introduced who confirms the story.">Ako žrtva okleva, pretnje postaju jače: nalog za hapšenje, crvena poternica, blokada računa. Uvod se druga osoba koja potvrđuje priču.</p>
        <ul class="bullets">
          <li data-sr="Signal: zabrana da se prekine poziv ili da se konsultuje advokat." data-en="Signal: you are forbidden to end the call or consult a lawyer.">Signal: zabrana da se prekine poziv ili da se konsultuje advokat.</li>
          <li data-sr="Signal: lažni dokumenti sa fotografijama pečata bez mogućnosti provere u registru." data-en="Signal: fake documents with stamp photos that cannot be verified in a registry.">Signal: lažni dokumenti sa fotografijama pečata bez mogućnosti provere u registru.</li>
          <li data-sr="Signal: traži se da se ostane na vezi dok se ne završi uplata." data-en="Signal: you must stay on the line until payment is completed.">Signal: traži se da se ostane na vezi dok se ne završi uplata.</li>
          <li data-sr="Signal: pretnje se ponavljaju u krug bez novih konkretnih podataka." data-en="Signal: threats repeat in a loop without new concrete details.">Signal: pretnje se ponavljaju u krug bez novih konkretnih podataka.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> žrtva deluje pod jakim stresom i želi da završi situaciju bilo kakvom uplatom." data-en="<strong>Phase threshold:</strong> the victim acts under heavy stress and wants to end the situation with any payment."><strong>Prag faze:</strong> žrtva deluje pod jakim stresom i želi da završi situaciju bilo kakvom uplatom.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Uplate i dodatni zahtevi" data-en="Phase 5 — Payments and further demands">Faza 5 — Uplate i dodatni zahtevi</h3>
        <p data-sr="Posle prve uplate sledi administrativna greška, dodatna taksa ili potreba za međunarodnim transferom. Novac odlazi, a predmet ostaje otvoren." data-en="After the first payment comes an administrative error, extra fee, or need for an international transfer. Money leaves while the case stays open.">Posle prve uplate sledi administrativna greška, dodatna taksa ili potreba za međunarodnim transferom. Novac odlazi, a predmet ostaje otvoren.</p>
        <ul class="bullets">
          <li data-sr="Signal: svaka nova uplata je poslednja pre zatvaranja predmeta." data-en="Signal: each new payment is the last before the case closes.">Signal: svaka nova uplata je poslednja pre zatvaranja predmeta.</li>
          <li data-sr="Signal: iznosi rastu ili se menjaju valuta i kanal uplate." data-en="Signal: amounts grow or currency and payment channel change.">Signal: iznosi rastu ili se menjaju valuta i kanal uplate.</li>
          <li data-sr="Signal: potvrde o uplati su samo snimci ekrana ili poruke bez pravnog potpisa." data-en="Signal: payment confirmations are only screenshots or messages without legal signature.">Signal: potvrde o uplati su samo snimci ekrana ili poruke bez pravnog potpisa.</li>
          <li data-sr="Signal: traži se ćutanje o uplatama prema banci." data-en="Signal: silence about the payments to the bank is requested.">Signal: traži se ćutanje o uplatama prema banci.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> izvršena je jedna ili više uplata i žrtva je u dubokom gubitku." data-en="<strong>Phase threshold:</strong> one or more payments are made and the victim is deep in loss."><strong>Prag faze:</strong> izvršena je jedna ili više uplata i žrtva je u dubokom gubitku.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Nestanak i recovery" data-en="Phase 6 — Disappearance and recovery">Faza 6 — Nestanak i recovery</h3>
        <p data-sr="Kontakt se gasi ili postaje neaktivan. Žrtva tek tada proverava zvanične izvore i shvata da predmet ne postoji. Ponekad sledi novi talas lažnog advokata koji nudi povraćaj uz novu uplatu." data-en="The contact goes dead or inactive. The victim then checks official sources and realizes the case does not exist. Sometimes a new wave follows with a fake lawyer offering recovery for another payment.">Kontakt se gasi ili postaje neaktivan. Žrtva tek tada proverava zvanične izvore i shvata da predmet ne postoji. Ponekad sledi novi talas lažnog advokata koji nudi povraćaj uz novu uplatu.</p>
        <ul class="bullets">
          <li data-sr="Signal: brojevi i nalozi više ne odgovaraju ili su blokirani." data-en="Signal: numbers and accounts no longer respond or are blocked.">Signal: brojevi i nalozi više ne odgovaraju ili su blokirani.</li>
          <li data-sr="Signal: zvanična institucija nema zapis o predmetu pod datim brojem." data-en="Signal: the official institution has no record under the given number.">Signal: zvanična institucija nema zapis o predmetu pod datim brojem.</li>
          <li data-sr="Signal: novi kontakt nudi brz povraćaj uz taksu ili depozit." data-en="Signal: a new contact offers fast recovery for a fee or deposit.">Signal: novi kontakt nudi brz povraćaj uz taksu ili depozit.</li>
          <li data-sr="Signal: ista šema se ponavlja sa drugim imenom institucije." data-en="Signal: the same pattern repeats under another institution name.">Signal: ista šema se ponavlja sa drugim imenom institucije.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="recovery-scam.html" data-sr="Prevara povraćaja novca" data-en="Recovery scam">Prevara povraćaja novca</a></li>
            <li><a href="olaf-impersonation.html" data-sr="Lažno predstavljanje OLAF-a" data-en="OLAF impersonation scam">Lažno predstavljanje OLAF-a</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> žrtva prekida komunikaciju ili prijavljuje incident." data-en="<strong>Phase threshold:</strong> the victim stops communication or reports the incident."><strong>Prag faze:</strong> žrtva prekida komunikaciju ili prijavljuje incident.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Hitna uplata u ime EPPO-a bez pisanog traga sa zvaničnog kanala." data-en="Urgent payment in EPPO's name without a paper trail from an official channel.">Hitna uplata u ime EPPO-a bez pisanog traga sa zvaničnog kanala.</li>
        <li data-sr="Pretnja hapšenjem ili blokadom u prvom kontaktu." data-en="Arrest or freeze threat in the first contact.">Pretnja hapšenjem ili blokadom u prvom kontaktu.</li>
        <li data-sr="Uplata na privatni nalog, kripto ili prepaid umesto na javni račun institucije." data-en="Payment to private account, crypto, or prepaid instead of a public institution account.">Uplata na privatni nalog, kripto ili prepaid umesto na javni račun institucije.</li>
        <li data-sr="Zabrana konsultacije sa advokatom, porodicom ili bankom." data-en="Ban on consulting a lawyer, family, or bank.">Zabrana konsultacije sa advokatom, porodicom ili bankom.</li>
        <li data-sr="Imejl domen koji liči na zvanični ali nije identičan objavljenom." data-en="Email domain similar to official but not identical to the published one.">Imejl domen koji liči na zvanični ali nije identičan objavljenom.</li>
        <li data-sr="Zahtev za OTP, lozinkom ili daljinskim pristupom računaru." data-en="Request for OTP, password, or remote computer access.">Zahtev za OTP, lozinkom ili daljinskim pristupom računaru.</li>
        <li data-sr="Serija uplata gde svaka treba da bude poslednja." data-en="A series of payments where each is claimed to be the last.">Serija uplata gde svaka treba da bude poslednja.</li>
        <li data-sr="Lažni savetnik koji potvrđuje istu priču bez nezavisnog identiteta." data-en="Fake advisor who confirms the same story without independent identity.">Lažni savetnik koji potvrđuje istu priču bez nezavisnog identiteta.</li>
        <li data-sr="Kontakt koji ne može da se verifikuje kroz javni imenik EPPO-a." data-en="Contact that cannot be verified through EPPO's public directory.">Kontakt koji ne može da se verifikuje kroz javni imenik EPPO-a.</li>
        <li data-sr="Ponuda povraćaja novca od trećeg lica uz novu uplatu." data-en="Refund offer from a third party requiring a new payment.">Ponuda povraćaja novca od trećeg lica uz novu uplatu.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Identitet" data-en="Identity">Identitet</div>
          <ul class="bullets">
            <li data-sr="Pronađi zvanični sajt EPPO-a samostalno i uporedi kontakt sa objavljenim kanalima." data-en="Find EPPO's official site yourself and compare the contact with published channels.">Pronađi zvanični sajt EPPO-a samostalno i uporedi kontakt sa objavljenim kanalima.</li>
            <li data-sr="Pozovi ili piši samo adresama koje su na tom sajtu, ne one iz sumnjive poruke." data-en="Call or write only to addresses on that site, not those from a suspicious message.">Pozovi ili piši samo adresama koje su na tom sajtu, ne one iz sumnjive poruke.</li>
            <li data-sr="Pitaj lokalnog advokata da li EPPO uopšte kontaktira građane na taj način za tu vrstu zahteva." data-en="Ask a local lawyer whether EPPO contacts citizens that way for that type of demand.">Pitaj lokalnog advokata da li EPPO uopšte kontaktira građane na taj način za tu vrstu zahteva.</li>
            <li data-sr="Proveri da li broj predmeta ima smisla u odnosu na javno dostupne procedure." data-en="Check whether the case number makes sense relative to publicly available procedures.">Proveri da li broj predmeta ima smisla u odnosu na javno dostupne procedure.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Zahtev" data-en="Demand">Zahtev</div>
          <ul class="bullets">
            <li data-sr="Da li se uplata može izvršiti isključivo nestandardnim sredstvima." data-en="Whether payment can only be made by non-standard means.">Da li se uplata može izvršiti isključivo nestandardnim sredstvima.</li>
            <li data-sr="Da li postoji rok koji onemogućava konsultaciju sa advokatom." data-en="Whether a deadline prevents consulting a lawyer.">Da li postoji rok koji onemogućava konsultaciju sa advokatom.</li>
            <li data-sr="Da li banka vidi obrazac prevare kada opišeš kanal uplate." data-en="Whether the bank sees a fraud pattern when you describe the payment channel.">Da li banka vidi obrazac prevare kada opišeš kanal uplate.</li>
            <li data-sr="Da li je tražena suma u skladu sa javnim taknama koje institucije objavljuju." data-en="Whether the requested amount matches public fees institutions publish.">Da li je tražena suma u skladu sa javnim taknama koje institucije objavljuju.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
      <p class="muted" data-sr="Više negativnih odgovora ukazuje na prevaru." data-en="Multiple negative answers point to a scam.">Više negativnih odgovora ukazuje na prevaru.</p>
      <ul class="bullets">
        <li data-sr="Da li sam ikada ranije komunicirao sa EPPO-om preko zvaničnog portala?" data-en="Have I ever communicated with EPPO through the official portal before?">Da li sam ikada ranije komunicirao sa EPPO-om preko zvaničnog portala?</li>
        <li data-sr="Da li adresa pošiljaoca tačno odgovara objavljenom domen?" data-en="Does the sender address exactly match the published domain?">Da li adresa pošiljaoca tačno odgovara objavljenom domen?</li>
        <li data-sr="Da li mogu da pauziram 24 sata bez pretnji odmah u odgovoru?" data-en="Can I pause 24 hours without immediate threats in reply?">Da li mogu da pauziram 24 sata bez pretnji odmah u odgovoru?</li>
        <li data-sr="Da li je uplata moguća na račun koji pripada javnom telu koje sam sam proverio?" data-en="Is payment possible to an account belonging to a public body I verified myself?">Da li je uplata moguća na račun koji pripada javnom telu koje sam sam proverio?</li>
        <li data-sr="Da li kontakt traži tajnost prema banci?" data-en="Does the contact demand secrecy from the bank?">Da li kontakt traži tajnost prema banci?</li>
        <li data-sr="Da li postoji pisani dokument sa putanjom provere kod trećeg lica?" data-en="Is there a written document with a verification path through a third party?">Da li postoji pisani dokument sa putanjom provere kod trećeg lica?</li>
        <li data-sr="Da li advokat koga ja biram potvrđuje isti zahtev?" data-en="Does a lawyer I choose confirm the same demand?">Da li advokat koga ja biram potvrđuje isti zahtev?</li>
        <li data-sr="Da li je traženo slanje fotografija kartica ili kodova?" data-en="Were photos of cards or codes requested?">Da li je traženo slanje fotografija kartica ili kodova?</li>
        <li data-sr="Da li je reč o kripto ili prepaid umesto bankarskog toka?" data-en="Is crypto or prepaid involved instead of a banking flow?">Da li je reč o kripto ili prepaid umesto bankarskog toka?</li>
        <li data-sr="Da li se isti broj predmeta pojavljuje u lažnim šablonima na internetu?" data-en="Does the same case number appear in fake templates online?">Da li se isti broj predmeta pojavljuje u lažnim šablonima na internetu?</li>
        <li data-sr="Da li je neko drugi u porodici dobio sličnu poruku iste nedelje?" data-en="Did someone else in the family get a similar message the same week?">Da li je neko drugi u porodici dobio sličnu poruku iste nedelje?</li>
        <li data-sr="Da li bih ovaj zahtev prijavio policiji ako bih ga video na listi upozorenja?" data-en="Would I report this demand to police if I saw it on a warning list?">Da li bih ovaj zahtev prijavio policiji ako bih ga video na listi upozorenja?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Prekini komunikaciju i ne šalji novac istog dana." data-en="Stop communication and do not send money the same day.">Prekini komunikaciju i ne šalji novac istog dana.</li>
        <li data-sr="Sačuvaj poruke, brojeve i dokumenta kao dokaz." data-en="Save messages, numbers, and documents as evidence.">Sačuvaj poruke, brojeve i dokumenta kao dokaz.</li>
        <li data-sr="Kontaktiraj EPPO ili nadležno telo samo preko zvaničnog sajta." data-en="Contact EPPO or the competent body only via the official website.">Kontaktiraj EPPO ili nadležno telo samo preko zvaničnog sajta.</li>
        <li data-sr="Obavesti banku ako je došlo do uplate ili pokušaja." data-en="Inform the bank if payment or an attempt occurred.">Obavesti banku ako je došlo do uplate ili pokušaja.</li>
        <li data-sr="Prijavi incident policiji i nadležnoj službi za cyber prevare." data-en="Report the incident to police and the competent cyber fraud service.">Prijavi incident policiji i nadležnoj službi za cyber prevare.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
      <p data-sr="Osoba pod pretnjom često odbija direktno osporavanje. Bolje je zajednički otvoriti zvanični sajt i uporediti kontakt." data-en="Someone under threat often refuses direct pushback. It works better to open the official site together and compare the contact.">Osoba pod pretnjom često odbija direktno osporavanje. Bolje je zajednički otvoriti zvanični sajt i uporediti kontakt.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Možemo li zajedno naći kontakt na zvaničnom sajtu EPPO-a?" data-en="Can we find the contact together on EPPO's official site?">Možemo li zajedno naći kontakt na zvaničnom sajtu EPPO-a?</li>
            <li data-sr="Da li bi tvoj advokat potvrdio ovaj način uplate?" data-en="Would your lawyer confirm this payment method?">Da li bi tvoj advokat potvrdio ovaj način uplate?</li>
            <li data-sr="Šta se dešava ako odložimo uplatu 48 sati?" data-en="What happens if we delay payment 48 hours?">Šta se dešava ako odložimo uplatu 48 sati?</li>
            <li data-sr="Da li banka smatra ovaj zahtev tipičnim za državno telo?" data-en="Does the bank consider this demand typical for a government body?">Da li banka smatra ovaj zahtev tipičnim za državno telo?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Hajde da proverimo broj samo na sajtu institucije, ne u poruci." data-en="Let's verify the number only on the institution's site, not in the message.">Hajde da proverimo broj samo na sajtu institucije, ne u poruci.</li>
            <li data-sr="Pravi organ dozvoljava da advokat pozove umesto tebe." data-en="A real authority allows a lawyer to call instead of you.">Pravi organ dozvoljava da advokat pozove umesto tebe.</li>
            <li data-sr="Niko legitimno ne traži kripto ili prepaid za sudsku taksu." data-en="No legitimate party requests crypto or prepaid for a court fee.">Niko legitimno ne traži kripto ili prepaid za sudsku taksu.</li>
            <li data-sr="Ako nestanu kad tražiš pauzu, to je odgovor." data-en="If they vanish when you ask for a pause, that is the answer.">Ako nestanu kad tražiš pauzu, to je odgovor.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
