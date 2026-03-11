window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["grant-fund-scam"] = {
  raw_html: `
    <!-- 1) UVOD -->
    <section class="card">
      <h2 data-sr="Uvod: kako radi prevara sa grantovima i fondovima" data-en="Introduction: how grant and fund scam works">
        Uvod: kako radi prevara sa grantovima i fondovima
      </h2>

      <p
        data-sr="Prevara sa grantovima je napad u kome organizacija dobija obaveštenje da je izabrana za grant, fond ili finansijsku podršku od strane napadača koji se lažno predstavlja kao vladina agencija, EU institucija, međunarodna fondacija ili donator. Da bi primila sredstva, organizacija mora platiti niz naknada: registracija, porez, bankarska garancija, inspekcija. Sredstva nikad ne stižu."
        data-en="Grant fraud is an attack in which an organization receives a notification that it has been selected for a grant, fund, or financial support from an attacker who impersonates a government agency, EU institution, international foundation, or donor. To receive the funds, the organization must pay a series of fees: registration, tax, bank guarantee, inspection. The funds never arrive."
      >Prevara sa grantovima je napad u kome organizacija dobija obaveštenje da je izabrana za grant, fond ili finansijsku podršku od strane napadača koji se lažno predstavlja kao vladina agencija, EU institucija, međunarodna fondacija ili donator. Da bi primila sredstva, organizacija mora platiti niz naknada: registracija, porez, bankarska garancija, inspekcija. Sredstva nikad ne stižu.</p>

      <p
        data-sr="Ovo je adaptacija advance fee prevare za organizacioni kontekst. Efikasnost leži u tome što organizacije koje apliciraju za grantove znaju da grantovi postoje i da ih institucije dodeljuju — napadač iskorišćava tu kontekstualnu legitimnost. Naknada od par hiljada evra izgleda zanemarivo u poređenju s grantom od 100.000 ili više."
        data-en="This is an adaptation of the advance fee fraud for an organizational context. Its effectiveness lies in organizations that apply for grants knowing grants exist and that institutions award them — the attacker exploits that contextual legitimacy. A fee of a few thousand euros looks insignificant compared to a grant of 100,000 or more."
      >Ovo je adaptacija advance fee prevare za organizacioni kontekst. Efikasnost leži u tome što organizacije koje apliciraju za grantove znaju da grantovi postoje i da ih institucije dodeljuju — napadač iskorišćava tu kontekstualnu legitimnost. Naknada od par hiljada evra izgleda zanemarivo u poređenju s grantom od 100.000 ili više.</p>

      <div class="callout"
        data-sr="<strong>Model:</strong> identifikacija organizacije → priprema lažne dokumentacije → obaveštenje o odabiru → naknada za oslobađanje → eskalacija (porez, garancija, inspekcija) → serija uplata → grant ne postoji → recovery talaš."
        data-en="<strong>Model:</strong> organization identification → fake documentation preparation → selection notification → release fee → escalation (tax, guarantee, inspection) → payment series → grant does not exist → recovery wave."
      ><strong>Model:</strong> identifikacija organizacije → priprema lažne dokumentacije → obaveštenje o odabiru → naknada za oslobađanje → eskalacija (porez, garancija, inspekcija) → serija uplata → grant ne postoji → recovery talaš.</div>

      <div class="callout"
        data-sr="<strong>Prag:</strong> organizacija izvrši prvu uplatu pre nego što proveri zvaničnu listu primalaca granta kod navedene institucije."
        data-en="<strong>Threshold:</strong> organization makes the first payment before verifying the official list of grant recipients with the stated institution."
      ><strong>Prag:</strong> organizacija izvrši prvu uplatu pre nego što proveri zvaničnu listu primalaca granta kod navedene institucije.</div>
    </section>

    <!-- 2) KAKO GENERALNO RADI -->
    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika prevare" data-en="How it works: scam mechanics">
        Kako generalno radi: mehanika prevare
      </h2>

      <p
        data-sr="Napadač se oslanja na psihologiju neočekivane dobre vesti i na legitimnost grant sistema. Organizacija nije aplicirala za ovaj konkretni grant — ali napadač kaže da je automatski izabrana na osnovu prethodnih aktivnosti, registracije, ili recenzije. Svaki zahtev za naknadom je objašnjen kao standardna procedura."
        data-en="The attacker relies on the psychology of unexpected good news and on the legitimacy of the grant system. The organization did not apply for this specific grant — but the attacker says it was automatically selected based on previous activities, registration, or review. Each fee request is explained as standard procedure."
      >Napadač se oslanja na psihologiju neočekivane dobre vesti i na legitimnost grant sistema. Organizacija nije aplicirala za ovaj konkretni grant — ali napadač kaže da je automatski izabrana na osnovu prethodnih aktivnosti, registracije, ili recenzije. Svaki zahtev za naknadom je objašnjen kao standardna procedura.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gradi autoritet lažnog granta" data-en="What builds authority of the fake grant">Šta gradi autoritet lažnog granta</div>
          <ul class="bullets">
            <li data-sr="logotipi EU institucija, UN, državnih fondova ili poznatih fondacija." data-en="logos of EU institutions, UN, government funds, or known foundations.">logotipi EU institucija, UN, državnih fondova ili poznatih fondacija.</li>
            <li data-sr="referentni broj granta i datum dodele koji zvuče legitimno." data-en="grant reference number and award date that sound legitimate.">referentni broj granta i datum dodele koji zvuče legitimno.</li>
            <li data-sr="lično obraćanje organizaciji sa tačnim podacima." data-en="personal addressing of the organization with accurate details.">lično obraćanje organizaciji sa tačnim podacima.</li>
            <li data-sr="obimna dokumentacija koja izgleda kao zvanični grant paket." data-en="extensive documentation that looks like an official grant package.">obimna dokumentacija koja izgleda kao zvanični grant paket.</li>
            <li data-sr="visok iznos granta koji čini naknade vrednim rizika." data-en="high grant amount that makes fees worth the risk.">visok iznos granta koji čini naknade vrednim rizika.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Kako se uvodi serija naknada" data-en="How the fee series is introduced">Kako se uvodi serija naknada</div>
          <ul class="bullets">
            <li data-sr="naknada za oslobađanje ili transfer sredstava." data-en="fee for releasing or transferring funds.">naknada za oslobađanje ili transfer sredstava.</li>
            <li data-sr="porez na grant u zemlji donatora koji se mora platiti unapred." data-en="tax on the grant in the donor country that must be paid in advance.">porez na grant u zemlji donatora koji se mora platiti unapred.</li>
            <li data-sr="bankarska garancija kao uslov za prijem sredstava." data-en="bank guarantee as condition for receiving funds.">bankarska garancija kao uslov za prijem sredstava.</li>
            <li data-sr="naknada za inspekciju ili compliance proveru." data-en="fee for inspection or compliance check.">naknada za inspekciju ili compliance proveru.</li>
            <li data-sr="naknada za ubrzanu obradu jer je limit kandidata uskoro popunjen." data-en="fee for expedited processing because the candidate limit is almost reached.">naknada za ubrzanu obradu jer je limit kandidata uskoro popunjen.</li>
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
        data-sr="Napad se odvija kroz seriju naknada. Svaka naknada je objašnjena kao poslednja prepreka pre nego što sredstva stignu — sve do trenutka kad organizacija postane sumnjičava."
        data-en="The attack unfolds through a series of fees. Each fee is explained as the final obstacle before funds arrive — until the organization becomes suspicious."
      >Napad se odvija kroz seriju naknada. Svaka naknada je objašnjena kao poslednja prepreka pre nego što sredstva stignu — sve do trenutka kad organizacija postane sumnjičava.</p>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Identifikacija ciljane organizacije" data-en="Phase 1 — Target organization identification">
          Faza 1 — Identifikacija ciljane organizacije
        </h3>
        <p
          data-sr="Napadač identifikuje organizacije koje apliciraju za grantove ili koje su javno vidljive u NVO, naučnom, obrazovnom ili poslovnom sektoru. Javne baze grantova, NVO registri i poslovni registri daju popis aktivnih aplikanta. Napadač bira organizacije koje su vidljive ali ne toliko poznate da bi odmah proverile grant u javnom registru."
          data-en="The attacker identifies organizations that apply for grants or are publicly visible in the NGO, scientific, educational, or business sector. Public grant databases, NGO registries, and business registries provide a list of active applicants. The attacker selects organizations that are visible but not so well-known that they would immediately check the grant in the public registry."
        >Napadač identifikuje organizacije koje apliciraju za grantove ili koje su javno vidljive u NVO, naučnom, obrazovnom ili poslovnom sektoru. Javne baze grantova, NVO registri i poslovni registri daju popis aktivnih aplikanta. Napadač bira organizacije koje su vidljive ali ne toliko poznate da bi odmah proverile grant u javnom registru.</p>
        <ul class="bullets">
          <li data-sr="signal: organizacija je podnela prijave za grantove i to je javno." data-en="signal: organization has submitted grant applications and this is public.">signal: organizacija je podnela prijave za grantove i to je javno.</li>
          <li data-sr="signal: organizacija aktivna u sektoru koji fondovi redovno pokrivaju." data-en="signal: organization active in sector that funds regularly cover.">signal: organizacija aktivna u sektoru koji fondovi redovno pokrivaju.</li>
        </ul>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> napadač ima listu i tip granta koji je dovoljno uverljiv za taj sektor."
          data-en="<strong>Phase threshold:</strong> attacker has list and grant type convincing enough for that sector."
        ><strong>Prag faze:</strong> napadač ima listu i tip granta koji je dovoljno uverljiv za taj sektor.</div>
      </article>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Priprema lažne grant dokumentacije" data-en="Phase 2 — Fake grant documentation preparation">
          Faza 2 — Priprema lažne grant dokumentacije
        </h3>
        <p
          data-sr="Napadač priprema dokumentaciju: dopis o odabiru, detalji granta, uslovi prihvatanja, instrukcije za prvu naknadu. Koristi ukradene logotipe i vizualne elemente EU fondova, UN agencija ili državnih tela. Kontakt imejl je na lookalike domenu ili besplatnom servisu. Potpisi su lažirani."
          data-en="The attacker prepares documentation: selection letter, grant details, acceptance conditions, instructions for the first fee. Uses stolen logos and visual elements of EU funds, UN agencies, or government bodies. Contact email is on a lookalike domain or free service. Signatures are forged."
        >Napadač priprema dokumentaciju: dopis o odabiru, detalji granta, uslovi prihvatanja, instrukcije za prvu naknadu. Koristi ukradene logotipe i vizualne elemente EU fondova, UN agencija ili državnih tela. Kontakt imejl je na lookalike domenu ili besplatnom servisu. Potpisi su lažirani.</p>
        <ul class="bullets">
          <li data-sr="signal: kontakt imejl nije na zvaničnom domenu institucije." data-en="signal: contact email not on official institutional domain.">signal: kontakt imejl nije na zvaničnom domenu institucije.</li>
          <li data-sr="signal: dokumenti sadrže logotipe ali bez proverljivog QR koda ili verifikacionog broja." data-en="signal: documents contain logos but without verifiable QR code or verification number.">signal: dokumenti sadrže logotipe ali bez proverljivog QR koda ili verifikacionog broja.</li>
        </ul>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> dokumentacija gotova i šalje se targetiranoj organizaciji."
          data-en="<strong>Phase threshold:</strong> documentation ready and sent to targeted organization."
        ><strong>Prag faze:</strong> dokumentacija gotova i šalje se targetiranoj organizaciji.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Obaveštenje o odabiru" data-en="Phase 3 — Selection notification">
          Faza 3 — Obaveštenje o odabiru
        </h3>
        <p
          data-sr="Organizacija prima obaveštenje da je odabrana za grant. Ton je formalan i pozitivan. Suma granta je visoka. Napadač kaže da je organizacija nominovana na osnovu prethodnih aktivnosti ili automatski izabrana iz registra. Da bi prihvatila grant, organizacija mora u roku od nekoliko dana platiti prvu naknadu."
          data-en="The organization receives notification that it has been selected for a grant. The tone is formal and congratulatory. The grant amount is high. The attacker says the organization was nominated based on previous activities or automatically selected from the registry. To accept the grant, the organization must pay the first fee within a few days."
        >Organizacija prima obaveštenje da je odabrana za grant. Ton je formalan i pozitivan. Suma granta je visoka. Napadač kaže da je organizacija nominovana na osnovu prethodnih aktivnosti ili automatski izabrana iz registra. Da bi prihvatila grant, organizacija mora u roku od nekoliko dana platiti prvu naknadu.</p>
        <ul class="bullets">
          <li data-sr="fraze: „čestitamo, vaša organizacija je odabrana za grant od [iznos]."." data-en="phrases: &ldquo;congratulations, your organization has been selected for a grant of [amount]&rdquo;.">fraze: „čestitamo, vaša organizacija je odabrana za grant od [iznos]"“.</li>
          <li data-sr="fraze: „da bismo inicirali transfer, potrebna je registraciona naknada od [iznos]."." data-en="phrases: &ldquo;to initiate the transfer, a registration fee of [amount] is required&rdquo;.">fraze: „da bismo inicirali transfer, potrebna je registraciona naknada od [iznos]"“.</li>
          <li data-sr="fraze: „organizacija nije aplicirala ali je automatski odabrana na osnovu javno dostupnih podataka."." data-en="phrases: &ldquo;organization did not apply but was automatically selected based on publicly available data&rdquo;.">fraze: „organizacija nije aplicirala ali je automatski odabrana na osnovu javno dostupnih podataka"“.</li>
        </ul>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="impersonation-scam.html" data-sr="Lažno predstavljanje" data-en="Impersonation scam">Lažno predstavljanje</a></li>
            <li data-sr="Advance fee formula adaptirana za grant kontekst." data-en="Advance fee formula adapted for grant context.">Advance fee formula adaptirana za grant kontekst.</li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> organizacija prima obaveštenje i uzima ga ozbiljno bez provere."
          data-en="<strong>Phase threshold:</strong> organization receives notification and takes it seriously without verification."
        ><strong>Prag faze:</strong> organizacija prima obaveštenje i uzima ga ozbiljno bez provere.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Prva naknada: registracija ili oslobađanje" data-en="Phase 4 — First fee: registration or release">
          Faza 4 — Prva naknada: registracija ili oslobađanje
        </h3>
        <p
          data-sr="Organizacija plaća prvu naknadu. Napadač potvrđuje prijem i kaže da je grant sada u procesu. Stiže nova dokumentacija koja potvrđuje da je procedura počela. Organizacija veruje jer je dobila potvrdu. Napadač priprema sledeći zahtev."
          data-en="The organization pays the first fee. The attacker confirms receipt and says the grant is now in process. New documentation arrives confirming the procedure has started. The organization believes this because they received confirmation. The attacker prepares the next demand."
        >Organizacija plaća prvu naknadu. Napadač potvrđuje prijem i kaže da je grant sada u procesu. Stiže nova dokumentacija koja potvrđuje da je procedura počela. Organizacija veruje jer je dobila potvrdu. Napadač priprema sledeći zahtev.</p>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> prva uplata izvršena — prevara je aktivna."
          data-en="<strong>Phase threshold:</strong> first payment made — fraud is active."
        ><strong>Prag faze:</strong> prva uplata izvršena — prevara je aktivna.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Eskalacija: porezi, garancije, inspekcije" data-en="Phase 5 — Escalation: taxes, guarantees, inspections">
          Faza 5 — Eskalacija: porezi, garancije, inspekcije
        </h3>
        <p
          data-sr="Posle prve uplate napadač uvodi nove prepreke. Porez koji mora biti plaćen u zemlji donatora. Bankarska garancija. Inspekcijska naknada. Anti-money laundering provera. Svaka nova naknada je praćena profesionalnom dokumentacijom i novim rokom. Organizacija je sve dublje jer je već platila i ne želi izgubiti grant."
          data-en="After the first payment the attacker introduces new obstacles. Tax that must be paid in the donor country. Bank guarantee. Inspection fee. Anti-money laundering check. Each new fee is accompanied by professional documentation and a new deadline. The organization is increasingly committed because it has already paid and does not want to lose the grant."
        >Posle prve uplate napadač uvodi nove prepreke. Porez koji mora biti plaćen u zemlji donatora. Bankarska garancija. Inspekcijska naknada. Anti-money laundering provera. Svaka nova naknada je praćena profesionalnom dokumentacijom i novim rokom. Organizacija je sve dublje jer je već platila i ne želi izgubiti grant.</p>
        <ul class="bullets">
          <li data-sr="fraze: „zbog propisa u [zemlji], porez od X% mora biti plaćen pre transfera."." data-en="phrases: &ldquo;due to regulations in [country], a tax of X% must be paid before transfer&rdquo;.">fraze: „zbog propisa u [zemlji], porez od X% mora biti plaćen pre transfera"“.</li>
          <li data-sr="fraze: „vaša banka zahteva garanciju od [iznos] za prijem ovog iznosa."." data-en="phrases: &ldquo;your bank requires a guarantee of [amount] to receive this amount&rdquo;.">fraze: „vaša banka zahteva garanciju od [iznos] za prijem ovog iznosa"“.</li>
        </ul>
        <div class="callout"
          data-sr="<strong>Prag faze:</strong> organizacija nastavlja da plaća — sunk cost efekat i nada drže je u procesu."
          data-en="<strong>Phase threshold:</strong> organization continues paying — sunk cost effect and hope keep it in the process."
        ><strong>Prag faze:</strong> organizacija nastavlja da plaća — sunk cost efekat i nada drže je u procesu.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Grant ne stiže: novi razlozi" data-en="Phase 6 — Grant does not arrive: new reasons">
          Faza 6 — Grant ne stiže: novi razlozi
        </h3>
        <p
          data-sr="Grant uvek dolazi uskoro. Ali uvek se pojavljuje novi razlog za kašnjenje koji zahteva novu naknadu: problem sa korespondentnom bankom, nova regulativa, compliance provera. Ovaj ciklus traže dok organizacija ne prestane da plaća ili ne shvati prevaru."
          data-en="The grant always arrives soon. But a new reason for delay always appears requiring a new fee: problem with correspondent bank, new regulation, compliance check. This cycle continues until the organization stops paying or realizes the fraud."
        >Grant uvek dolazi uskoro. Ali uvek se pojavljuje novi razlog za kašnjenje koji zahteva novu naknadu: problem sa korespondentnom bankom, nova regulativa, compliance provera. Ovaj ciklus traže dok organizacija ne prestane da plaća ili ne shvati prevaru.</p>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li data-sr="Lažna smena osoblja: novi menadžer slučaja koji traži ponovnu verifikaciju." data-en="Fake staff change: new case manager who requests re-verification.">Lažna smena osoblja: novi menadžer slučaja koji traži ponovnu verifikaciju.</li>
            <li><a href="procurement-tender-scam.html" data-sr="Prevara na tenderu" data-en="Procurement tender scam">Prevara na tenderu</a></li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Prag faze:</strong> organizacija prestaje da plaća ili postavi direktno pitanje o grantu instituciji."
          data-en="<strong>Phase threshold:</strong> organization stops paying or asks the institution directly about the grant."
        ><strong>Prag faze:</strong> organizacija prestaje da plaća ili postavi direktno pitanje o grantu instituciji.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 7 — Recovery talaš" data-en="Phase 7 — Recovery wave">
          Faza 7 — Recovery talaš
        </h3>
        <p
          data-sr="Posle otkrivanja prevare, ili dok je organizacija još uvek u procesu, stiže novi kontakt. Navodni advokat, inspektor ili agent za žalbe nudi pomoć oko povraćaja izgubljenih naknada. Za ovu pomoć potrebna je nova uplata unapred. Ovo je direktni nastavak napada."
          data-en="After the fraud is discovered, or while the organization is still in the process, a new contact arrives. A supposed lawyer, inspector, or complaints agent offers help recovering the lost fees. For this help, a new upfront payment is required. This is a direct continuation of the attack."
        >Posle otkrivanja prevare, ili dok je organizacija još uvek u procesu, stiže novi kontakt. Navodni advokat, inspektor ili agent za žalbe nudi pomoć oko povraćaja izgubljenih naknada. Za ovu pomoć potrebna je nova uplata unapred. Ovo je direktni nastavak napada.</p>

        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="recovery-scam.html" data-sr="Prevara povraćaja novca" data-en="Recovery scam">Prevara povraćaja novca</a></li>
          </ul>
        </div>

        <div class="callout"
          data-sr="<strong>Filter:</strong> nijedan legitimni pravni zastupnik ne kontaktuje žrtvu sam sa ponudom — uvek je žrtva ta koja angažuje advokata, ne obrnuto."
          data-en="<strong>Filter:</strong> no legitimate legal representative contacts a victim on their own with an offer — it is always the victim who engages a lawyer, not the other way around."
        ><strong>Filter:</strong> nijedan legitimni pravni zastupnik ne kontaktuje žrtvu sam sa ponudom — uvek je žrtva ta koja angažuje advokata, ne obrnuto.</div>
      </article>
    </section>

    <!-- 4) CRVENE ZASTAVICE -->
    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="obaveštenje o grantu stiže bez prethodne prijave od strane organizacije." data-en="grant notification arrives without prior application by the organization.">obaveštenje o grantu stiže bez prethodne prijave od strane organizacije.</li>
        <li data-sr="organizacija je automatski odabrana bez standardnog aplikacionog procesa." data-en="organization was automatically selected without standard application process.">organizacija je automatski odabrana bez standardnog aplikacionog procesa.</li>
        <li data-sr="kontakt imejl nije na zvaničnom domenu navedene institucije." data-en="contact email not on official domain of stated institution.">kontakt imejl nije na zvaničnom domenu navedene institucije.</li>
        <li data-sr="postoji naknada koja mora biti plaćena pre nego što grant stigne." data-en="there is a fee that must be paid before the grant arrives.">postoji naknada koja mora biti plaćena pre nego što grant stigne.</li>
        <li data-sr="grant nije na zvaničnoj listi dodeljenih grantova institucije." data-en="grant is not on the institution's official awarded grants list.">grant nije na zvaničnoj listi dodeljenih grantova institucije.</li>
        <li data-sr="serija naknada koje se uvode jedna za drugom sa novim obrazloženjem." data-en="series of fees introduced one after another with new justification.">serija naknada koje se uvode jedna za drugom sa novim obrazloženjem.</li>
        <li data-sr="neobično visok iznos granta za tip organizacije koja ga prima." data-en="unusually high grant amount for the type of organization receiving it.">neobično visok iznos granta za tip organizacije koja ga prima.</li>
        <li data-sr="rok za prihvatanje granta je kratak i pod pritiskom." data-en="deadline for accepting the grant is short and pressured.">rok za prihvatanje granta je kratak i pod pritiskom.</li>
      </ul>
    </section>

    <!-- 5) PROVERE -->
    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera pre uplata na grantu" data-en="Checks: 8 quick checks before grant payments">Provere: 8 brzih provera pre uplata na grantu</h2>

      <p
        data-sr="Provere moraju ići kroz kanal koji je nezavisan od dokumentacije koja je stigla. Logotip na dokumentu nije dokaz legitimnosti institucije."
        data-en="Checks must go through a channel independent of the documentation that arrived. A logo on a document is not proof of institutional legitimacy."
      >Provere moraju ići kroz kanal koji je nezavisan od dokumentacije koja je stigla. Logotip na dokumentu nije dokaz legitimnosti institucije.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Provere institucije i granta" data-en="Institution and grant checks">Provere institucije i granta</div>
          <ul class="bullets">
            <li data-sr="pronađi zvanični sajt institucije samostalno (ne kroz link u dokumentu) i proveri listu dodeljenih grantova." data-en="find the institution's official website independently (not through link in document) and check the awarded grants list.">pronađi zvanični sajt institucije samostalno (ne kroz link u dokumentu) i proveri listu dodeljenih grantova.</li>
            <li data-sr="kontaktiraj instituciju kroz broj ili imejl sa njenog zvaničnog sajta i pitaj za ovaj grant." data-en="contact the institution through number or email from its official website and ask about this grant.">kontaktiraj instituciju kroz broj ili imejl sa njenog zvaničnog sajta i pitaj za ovaj grant.</li>
            <li data-sr="proveri da li institucija dodeljuje ovaj tip grantova u ovoj veličini." data-en="check whether the institution awards this type of grants in this size.">proveri da li institucija dodeljuje ovaj tip grantova u ovoj veličini.</li>
            <li data-sr="proveri domen kontakta: je li to zvanični domen institucije ili lookalike." data-en="check contact domain: is it the institution's official domain or a lookalike.">proveri domen kontakta: je li to zvanični domen institucije ili lookalike.</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Proceduralne provere" data-en="Procedural checks">Proceduralne provere</div>
          <ul class="bullets">
            <li data-sr="legitimni grantovi ne zahtevaju naknade pre isplate — ovo je apsolutno pravilo." data-en="legitimate grants do not require fees before disbursement — this is an absolute rule.">legitimni grantovi ne zahtevaju naknade pre isplate — ovo je apsolutno pravilo.</li>
            <li data-sr="da li smo aplicirali za ovaj grant — ako nismo, pitamo se zašto smo odabrani." data-en="did we apply for this grant — if not, we ask ourselves why we were selected.">da li smo aplicirali za ovaj grant — ako nismo, pitamo se zašto smo odabrani.</li>
            <li data-sr="konsultuj pravnika ili računovođu pre svake uplate." data-en="consult a lawyer or accountant before each payment.">konsultuj pravnika ili računovođu pre svake uplate.</li>
            <li data-sr="da li isti grant postoji u više verzija prema različitim organizacijama." data-en="does the same grant exist in multiple versions targeting different organizations.">da li isti grant postoji u više verzija prema različitim organizacijama.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 6) CHECKLISTA -->
    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja pre svake uplate na grantu" data-en="Checklist: 12 questions before any grant payment">Checklista: 12 pitanja pre svake uplate na grantu</h2>

      <p class="muted"
        data-sr="Brzo čitanje. Više loših odgovora znači aktivan obrazac prevare."
        data-en="Quick read. Multiple bad answers indicate an active fraud pattern."
      >Brzo čitanje. Više loših odgovora znači aktivan obrazac prevare.</p>

      <ul class="bullets">
        <li data-sr="Da li smo aplicirali za ovaj specifičan grant?" data-en="Did we apply for this specific grant?">Da li smo aplicirali za ovaj specifičan grant?</li>
        <li data-sr="Da li je grant objavljen na zvaničnoj listi dodeljenih grantova institucije?" data-en="Is the grant published on the institution's official awarded grants list?">Da li je grant objavljen na zvaničnoj listi dodeljenih grantova institucije?</li>
        <li data-sr="Da li kontakt imejl odgovara zvaničnom domenu navedene institucije?" data-en="Does the contact email match the official domain of the stated institution?">Da li kontakt imejl odgovara zvaničnom domenu navedene institucije?</li>
        <li data-sr="Da li smo kontaktirali instituciju kroz njen zvanični kanal i potvrdili grant?" data-en="Did we contact the institution through its official channel and confirm the grant?">Da li smo kontaktirali instituciju kroz njen zvanični kanal i potvrdili grant?</li>
        <li data-sr="Da li grant zahteva uplatu bilo koje naknade pre isplate sredstava?" data-en="Does the grant require payment of any fee before funds are disbursed?">Da li grant zahteva uplatu bilo koje naknade pre isplate sredstava?</li>
        <li data-sr="Da li je rok za prihvatanje granta manji od 14 dana?" data-en="Is the deadline for accepting the grant less than 14 days?">Da li je rok za prihvatanje granta manji od 14 dana?</li>
        <li data-sr="Da li iznos granta odgovara grantovima koje ova institucija standardno dodeljuje?" data-en="Does the grant amount match grants this institution standardly awards?">Da li iznos granta odgovara grantovima koje ova institucija standardno dodeljuje?</li>
        <li data-sr="Da li postoji prethodna serija naknada posle koje grant još uvek nije stigao?" data-en="Is there a prior series of fees after which the grant still has not arrived?">Da li postoji prethodna serija naknada posle koje grant još uvek nije stigao?</li>
        <li data-sr="Da li svaki novi razlog kašnjenja dolazi sa zahtevom za novom naknadom?" data-en="Does each new reason for delay come with a new fee request?">Da li svaki novi razlog kašnjenja dolazi sa zahtevom za novom naknadom?</li>
        <li data-sr="Da li smo konsultovali pravnika ili računovođu pre svake uplate?" data-en="Did we consult a lawyer or accountant before each payment?">Da li smo konsultovali pravnika ili računovođu pre svake uplate?</li>
        <li data-sr="Da li je neko van organizacije potvrdio legitimnost ovog granta?" data-en="Has anyone outside the organization confirmed the legitimacy of this grant?">Da li je neko van organizacije potvrdio legitimnost ovog granta?</li>
        <li data-sr="Da li smo pretražili naziv granta i institucije online za moguća upozorenja?" data-en="Did we search for the grant name and institution online for possible warnings?">Da li smo pretražili naziv granta i institucije online za moguća upozorenja?</li>
      </ul>
    </section>

    <!-- 7) AKO SUMNJA KRENE -->
    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="zaustavi sve uplate — ne plaćaj sledeću naknadu bez verifikacije." data-en="stop all payments — do not pay the next fee without verification.">zaustavi sve uplate — ne plaćaj sledeću naknadu bez verifikacije.</li>
        <li data-sr="kontaktiraj navedenu instituciju direktno kroz broj ili imejl sa njenog zvaničnog sajta." data-en="contact the stated institution directly through number or email from its official website.">kontaktiraj navedenu instituciju direktno kroz broj ili imejl sa njenog zvaničnog sajta.</li>
        <li data-sr="ako je uplata već izvršena: kontaktuj banku odmah i zatraži recall." data-en="if payment was already made: contact your bank immediately and request recall.">ako je uplata već izvršena: kontaktuj banku odmah i zatraži recall.</li>
        <li data-sr="sačuvaj svu dokumentaciju: imejlove, grant paket, uplatnice." data-en="preserve all documentation: emails, grant package, payment receipts.">sačuvaj svu dokumentaciju: imejlove, grant paket, uplatnice.</li>
        <li data-sr="prijavi slučaj policiji i antikorupcijskim telima." data-en="report the case to police and anti-corruption bodies.">prijavi slučaj policiji i antikorupcijskim telima.</li>
        <li data-sr="obavesti sektor i kolegijalne organizacije — isti napadač možda cilja više organizacija." data-en="notify your sector and peer organizations — the same attacker may be targeting multiple organizations.">obavesti sektor i kolegijalne organizacije — isti napadač možda cilja više organizacija.</li>
      </ol>

      <div class="callout"
        data-sr="<strong>Apsolutno pravilo:</strong> nijedan legitimni grant, fond ili donacija ne zahteva uplatu naknade pre isplate sredstava. Ovo važi bez izuzetka."
        data-en="<strong>Absolute rule:</strong> no legitimate grant, fund, or donation requires payment of a fee before disbursement. This applies without exception."
      ><strong>Apsolutno pravilo:</strong> nijedan legitimni grant, fond ili donacija ne zahteva uplatu naknade pre isplate sredstava. Ovo važi bez izuzetka.</div>
    </section>

    <!-- 8) AKO POMAŽEŠ NEKOME -->
    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>

      <p
        data-sr="Organizacije duboko u procesu veruju u grant jer su uložile novac i vreme. Direktna tvrdnja da je to prevara aktivira odbrambenu reakciju. Efikasnije je ići kroz konkretnu proveru: da li je grant na zvaničnoj listi, da li institucija potvrđuje."
        data-en="Organizations deep in the process believe in the grant because they have invested money and time. Directly stating it is a fraud activates a defensive reaction. More effective is going through concrete verification: is the grant on the official list, does the institution confirm."
      >Organizacije duboko u procesu veruju u grant jer su uložile novac i vreme. Direktna tvrdnja da je to prevara aktivira odbrambenu reakciju. Efikasnije je ići kroz konkretnu proveru: da li je grant na zvaničnoj listi, da li institucija potvrđuje.</p>

      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Možemo li zajedno pronaći ovaj grant na zvaničnoj listi institucije?" data-en="Can we find this grant together on the institution's official list?">Možemo li zajedno pronaći ovaj grant na zvaničnoj listi institucije?</li>
            <li data-sr="Da li smo pozvali instituciju na njen zvanični broj i pitali za grant?" data-en="Did we call the institution on its official number and ask about the grant?">Da li smo pozvali instituciju na njen zvanični broj i pitali za grant?</li>
            <li data-sr="Da li bi nam bila potrebna naknada ako bismo odbili grant umesto prihvatili?" data-en="Would we need to pay a fee if we declined the grant instead of accepting it?">Da li bi nam bila potrebna naknada ako bismo odbili grant umesto prihvatili?</li>
          </ul>
        </div>

        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Hajde da proverimo zvaničnu listu — ako je grant realan, biće tamo." data-en="Let's check the official list — if the grant is real, it will be there.">Hajde da proverimo zvaničnu listu — ako je grant realan, biće tamo.</li>
            <li data-sr="Pozovimo instituciju direktno — broj je na njenom zvaničnom sajtu." data-en="Let's call the institution directly — the number is on its official website.">Pozovimo instituciju direktno — broj je na njenom zvaničnom sajtu.</li>
            <li data-sr="Nijedan pravi grant ne traži naknadu pre isplate — ovo je jedno od pravila bez izuzetaka." data-en="No real grant requires a fee before disbursement — this is one of the rules without exceptions.">Nijedan pravi grant ne traži naknadu pre isplate — ovo je jedno od pravila bez izuzetaka.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- 9) POVEZANE PREVARE -->
    <section class="card">
      <h2 data-sr="Povezane prevare" data-en="Related scams">Povezane prevare</h2>
      <div class="branch">
        <ul class="bullets">
          <li><a href="procurement-tender-scam.html" data-sr="Prevara na tenderu" data-en="Procurement tender scam">Prevara na tenderu</a></li>
          <li><a href="payment-diversion.html" data-sr="Preusmeravanje plaćanja" data-en="Payment diversion">Preusmeravanje plaćanja</a></li>
          <li><a href="impersonation-scam.html" data-sr="Lažno predstavljanje" data-en="Impersonation scam">Lažno predstavljanje</a></li>
          <li><a href="business-email-compromise.html" data-sr="Kompromitovanje poslovnog imejla (BEC)" data-en="Business email compromise (BEC)">Kompromitovanje poslovnog imejla (BEC)</a></li>
          <li><a href="supplier-onboarding-scam.html" data-sr="Prevara pri registraciji dobavljača" data-en="Supplier onboarding scam">Prevara pri registraciji dobavljača</a></li>
        </ul>
      </div>
    </section>
  `
};
