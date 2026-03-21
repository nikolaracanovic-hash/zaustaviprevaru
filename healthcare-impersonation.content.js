window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["healthcare-impersonation"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi lažno predstavljanje zdravstvene kase" data-en="Introduction: how health insurance impersonation works">Uvod: kako radi lažno predstavljanje zdravstvene kase</h2>
      <p data-sr="Lažno predstavljanje zdravstvene kase koristi dve tačke ranjivosti: zabrinutost za zdravstvenu zaštitu i nepoznavanje zdravstvene administracije. Tri tipične poruke: kartica istekla, greška u evidenciji, povraćaj participacije." data-en="Health insurance impersonation exploits two vulnerable points: concern about healthcare coverage and unfamiliarity with health administrative procedures. The fraudster sends SMS or calls on behalf of the health insurance fund, RFZO, or health ministry with one of three messages: the card has expired and must be renewed immediately, an error was detected in health data, or there is a co-payment overpayment that can be refunded if data is confirmed.">Lažno predstavljanje zdravstvene kase koristi dve tačke ranjivosti: zabrinutost za zdravstvenu zaštitu i nepoznavanje zdravstvene administracije. Tri tipične poruke: kartica istekla, greška u evidenciji, povraćaj participacije.</p>
      <p data-sr="Šema funkcioniše jer zdravstvena kartica postoji, ističe, a povraćaj participacije zvuči privlažno. Prevarant kombinuje realne situacije s lažnim zahtevom." data-en="The scheme is effective because the health card is a concrete document everyone has, it does actually expire, and the idea of a co-payment refund sounds financially attractive. The fraudster combines these real situations with a fake urgent demand.">Šema funkcioniše jer zdravstvena kartica postoji, ističe, a povraćaj participacije zvuči privlažno. Prevarant kombinuje realne situacije s lažnim zahtevom.</p>
      <div class="callout" data-sr="<strong>Model:</strong> SMS ili poziv → zdravstvena kasa → kartica/greška/refund → verifikacija podataka → podaci kartice ili uplata → krađa." data-en="<strong>Model:</strong> SMS or call → health insurance → card/error/refund → data verification → card data or payment → theft."><strong>Model:</strong> SMS ili poziv → zdravstvena kasa → kartica/greška/refund → verifikacija podataka → podaci kartice ili uplata → krađa.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> meta prima zahtev za hitnom verifikacijom zdravstvene kartice uz pretnju suspenzijom zdravstvenog pokrića." data-en="<strong>Threshold:</strong> the target receives an urgent health card verification request with a coverage suspension threat."><strong>Prag:</strong> meta prima zahtev za hitnom verifikacijom zdravstvene kartice uz pretnju suspenzijom zdravstvenog pokrića.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika zdravstvene prevare" data-en="How it works: health insurance scam mechanics">Kako generalno radi: mehanika zdravstvene prevare</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gradi autoritet zdravstvene kase" data-en="What builds health fund authority">Šta gradi autoritet zdravstvene kase</div>
          <ul class="bullets">
            <li data-sr="naziv fonda (RFZO, zdravstvena kasa) i referentni broj kartice ili predmeta." data-en="fund name (RFZO, health fund) and card reference number or case number.">naziv fonda (RFZO, zdravstvena kasa) i referentni broj kartice ili predmeta.</li>
            <li data-sr="referenca na konkretnu filijalu u mestu boravišta žrtve." data-en="reference to a specific branch in the victim's place of residence.">referenca na konkretnu filijalu u mestu boravišta žrtve.</li>
            <li data-sr="pretnja suspenzijom zdravstvene zaštite koja uključuje hitnu situaciju." data-en="threat of health coverage suspension including emergency situations.">pretnja suspenzijom zdravstvene zaštite koja uključuje hitnu situaciju.</li>
            <li data-sr="lažni link ka portalu koji vizualno imitira zvanični portal zdravstvene kase." data-en="fake link to a portal that visually imitates the official health fund portal.">lažni link ka portalu koji vizualno imitira zvanični portal zdravstvene kase.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Kako se uvodi zahtev za podacima" data-en="How the data demand is introduced">Kako se uvodi zahtev za podacima</div>
          <ul class="bullets">
            <li data-sr="verifikacija kartice zahteva unos broja kartice, datuma rođenja i JMBG." data-en="card verification requires entering the card number, date of birth, and ID number.">verifikacija kartice zahteva unos broja kartice, datuma rođenja i JMBG.</li>
            <li data-sr="povraćaj participacije zahteva broj tekućeg računa za uplatu refunda." data-en="co-payment refund requires a bank account number for the refund payment.">povraćaj participacije zahteva broj tekućeg računa za uplatu refunda.</li>
            <li data-sr="rok od 24–48 sati uz pretnju gubitkom zdravstvene zaštite." data-en="24–48 hour deadline with a threat of loss of healthcare coverage.">rok od 24–48 sati uz pretnju gubitkom zdravstvene zaštite.</li>
            <li data-sr="link u SMS-u koji vodi na lažni portal za unos podataka." data-en="link in SMS that leads to a fake portal for data entry.">link u SMS-u koji vodi na lažni portal za unos podataka.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)" data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — SMS ili poziv sa upozorenjem" data-en="Phase 1 — SMS or call with warning">Faza 1 — SMS ili poziv sa upozorenjem</h3>
        <p data-sr="SMS ili poziv s upozorenjem. Kratka poruka: kartica istekla, greška u evidenciji. Rok 24–48h." data-en="The target receives an SMS or call from the health fund with a warning. The message is short and direct: the health card has expired, records are incomplete, or there is a system error. The resolution deadline is short — usually 24–48 hours.">SMS ili poziv s upozorenjem. Kratka poruka: kartica istekla, greška u evidenciji. Rok 24–48h.</p>
        <ul class="bullets">
          <li data-sr="signal: RFZO i zdravstvene kase kontaktiraju pismenim putem, ne SMS-om." data-en="signal: RFZO and health funds contact in writing, not by SMS.">signal: RFZO i zdravstvene kase kontaktiraju pismenim putem, ne SMS-om.</li>
          <li data-sr="signal: SMS sadrži link koji ne odgovara zvaničnoj domeni zdravstvene kase." data-en="signal: SMS contains a link that does not match the health fund's official domain.">signal: SMS sadrži link koji ne odgovara zvaničnoj domeni zdravstvene kase.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta klikne link ili odgovori na poziv i počne da unosi podatke." data-en="<strong>Threshold:</strong> the target clicks the link or responds to the call and starts entering data."><strong>Prag faze:</strong> meta klikne link ili odgovori na poziv i počne da unosi podatke.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Lažni portal za verifikaciju" data-en="Phase 2 — Fake verification portal">Faza 2 — Lažni portal za verifikaciju</h3>
        <p data-sr="Lažni portal imitira zvanični sajt. Traži karticu, JMBG, datum rođenja, opciono broj računa. Svi podaci idu prevarantu." data-en="The fake portal imitates the official health fund website. It requests the health card number, ID number, date of birth, and optionally a bank account number. All entered data goes directly to the fraudster. The portal can be identical to the original.">Lažni portal imitira zvanični sajt. Traži karticu, JMBG, datum rođenja, opciono broj računa. Svi podaci idu prevarantu.</p>
        <ul class="bullets">
          <li data-sr="signal: URL adresa portala se razlikuje od zvanične domene — slova su zamenjena ili dodat sufiks." data-en="signal: the portal URL differs from the official domain — letters are substituted or a suffix is added.">signal: URL adresa portala se razlikuje od zvanične domene — slova su zamenjena ili dodat sufiks.</li>
          <li data-sr="signal: zvanični portal nikad ne traži verifikaciju samo na osnovu SMS linka." data-en="signal: the official portal never requests verification based solely on an SMS link.">signal: zvanični portal nikad ne traži verifikaciju samo na osnovu SMS linka.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="identity-theft.html" data-sr="Krađa identiteta" data-en="Identity theft">Krađa identiteta</a></li>
            <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
          </ul>
        </div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Predaja podataka i krađa" data-en="Phase 3 — Data submission and theft">Faza 3 — Predaja podataka i krađa</h3>
        <p data-sr="Podaci se predaju. Koriste se za krađu identiteta, lažne kredite ili preuzimanje naloga. Potvrda verifikacije ne stiže ili je lažna." data-en="The target enters data. Data is used for identity theft, opening fake loans, bank account takeover, or sale on data black markets. The target receives no verification confirmation message or receives a fake one.">Podaci se predaju. Koriste se za krađu identiteta, lažne kredite ili preuzimanje naloga. Potvrda verifikacije ne stiže ili je lažna.</p>
        <div class="callout" data-sr="<strong>Indikator:</strong> zdravstvena kasa nikad ne verifikuje karticu kroz SMS link. Obnova se vrši lično ili kroz zvanični portal." data-en="<strong>Indicator:</strong> the health fund never verifies a card through an SMS link. Card renewal is done in person at the branch or through the official registered portal."><strong>Indikator:</strong> zdravstvena kasa nikad ne verifikuje karticu kroz SMS link. Obnova se vrši lično ili kroz zvanični portal.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 4 — Otkrivanje i posledice" data-en="Phase 4 — Discovery and consequences">Faza 4 — Otkrivanje i posledice</h3>
        <p data-sr="Meta saznaje o prevari kroz lažni kredit, neovlašćene transakcije ili proverom da kartica nije istekla." data-en="The target discovers the fraud when a fake loan arrives, when they notice unauthorized transactions on their account, or when they try to use their health card and learn it is active and not expired. Damage can be financial (fake loans) or identity-related (personal data misuse).">Meta saznaje o prevari kroz lažni kredit, neovlašćene transakcije ili proverom da kartica nije istekla.</p>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="zdravstvena kasa šalje SMS s linkom za verifikaciju kartice." data-en="health fund sends SMS with a link for card verification.">zdravstvena kasa šalje SMS s linkom za verifikaciju kartice.</li>
        <li data-sr="URL portala u linku se razlikuje od zvanične domene zdravstvene kase." data-en="portal URL in the link differs from the health fund's official domain.">URL portala u linku se razlikuje od zvanične domene zdravstvene kase.</li>
        <li data-sr="portal traži JMBG, datum rođenja i broj tekućeg računa u jednom obrascu." data-en="portal requests ID number, date of birth, and bank account number in one form.">portal traži JMBG, datum rođenja i broj tekućeg računa u jednom obrascu.</li>
        <li data-sr="rok od 24–48 sati uz pretnju gubitkom zdravstvene zaštite." data-en="24–48 hour deadline with a threat of loss of healthcare coverage.">rok od 24–48 sati uz pretnju gubitkom zdravstvene zaštite.</li>
        <li data-sr="kontakt nudi povraćaj participacije koji zahteva broj tekućeg računa." data-en="contact offers a co-payment refund requiring a bank account number.">kontakt nudi povraćaj participacije koji zahteva broj tekućeg računa.</li>
        <li data-sr="verifikacija nije moguća u filijali ili na zvaničnom portalu bez SMS linka." data-en="verification is not possible at the branch or official portal without the SMS link.">verifikacija nije moguća u filijali ili na zvaničnom portalu bez SMS linka.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 10 pitanja pre verifikacije zdravstvene kartice" data-en="Checklist: 10 questions before health card verification">Checklista: 10 pitanja pre verifikacije zdravstvene kartice</h2>
      <ul class="bullets">
        <li data-sr="Da li je zdravstvena kasa ranije pisala o ovom problemu poštom?" data-en="Has the health fund previously written about this problem by post?">Da li je zdravstvena kasa ranije pisala o ovom problemu poštom?</li>
        <li data-sr="Da li URL portala u linku odgovara zvaničnoj domeni zdravstvene kase?" data-en="Does the portal URL in the link match the health fund's official domain?">Da li URL portala u linku odgovara zvaničnoj domeni zdravstvene kase?</li>
        <li data-sr="Da li je kartica zaista istekla prema datumu koji piše na njoj?" data-en="Has the card actually expired according to the date printed on it?">Da li je kartica zaista istekla prema datumu koji piše na njoj?</li>
        <li data-sr="Da li portal traži istovremeno JMBG, datum rođenja i broj računa?" data-en="Does the portal simultaneously request ID number, date of birth, and account number?">Da li portal traži istovremeno JMBG, datum rođenja i broj računa?</li>
        <li data-sr="Da li se verifikacija može obaviti lično u filijali zdravstvene kase?" data-en="Can verification be done in person at the health fund branch?">Da li se verifikacija može obaviti lično u filijali zdravstvene kase?</li>
        <li data-sr="Da li kontakt dozvoljava odlazak u filijalu umesto online verifikacije?" data-en="Does the contact allow visiting the branch instead of online verification?">Da li kontakt dozvoljava odlazak u filijalu umesto online verifikacije?</li>
        <li data-sr="Da li SMS link dolazi od zvaničnog broja koji je javno objavljen za zdravstvenu kasu?" data-en="Does the SMS link come from an official number publicly listed for the health fund?">Da li SMS link dolazi od zvaničnog broja koji je javno objavljen za zdravstvenu kasu?</li>
        <li data-sr="Da li zdravstvena kasa uopšte vrši verifikacije kartica kroz SMS linkove?" data-en="Does the health fund actually perform card verifications through SMS links?">Da li zdravstvena kasa uopšte vrši verifikacije kartica kroz SMS linkove?</li>
        <li data-sr="Da li postoji povraćaj participacije koji je prethodno odobren i o njemu obavešten?" data-en="Is there a co-payment refund that was previously approved and communicated?">Da li postoji povraćaj participacije koji je prethodno odobren i o njemu obavešten?</li>
        <li data-sr="Da li pauza od 24h menja situaciju ili poruka insistira na hitnosti?" data-en="Does a 24-hour pause change the situation or does the message insist on urgency?">Da li pauza od 24h menja situaciju ili poruka insistira na hitnosti?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="ne klikaj link iz SMS-a — proveri datum na zdravstvenoj kartici fizički." data-en="do not click the SMS link — check the expiry date on the physical health card.">ne klikaj link iz SMS-a — proveri datum na zdravstvenoj kartici fizički.</li>
        <li data-sr="pozovi zvanični broj zdravstvene kase iz imenika i pitaj o kartici i verifikaciji." data-en="call the health fund's official number from the phone book and ask about the card and verification.">pozovi zvanični broj zdravstvene kase iz imenika i pitaj o kartici i verifikaciji.</li>
        <li data-sr="ako si uneo podatke, odmah obavesti banku i zatraži blokiranje kartice." data-en="if you entered data, immediately notify the bank and request card blocking.">ako si uneo podatke, odmah obavesti banku i zatraži blokiranje kartice.</li>
        <li data-sr="sačuvaj SMS poruku kao dokaz i prijavi incident zdravstvenoj kasi i policiji." data-en="save the SMS as evidence and report the incident to the health fund and police.">sačuvaj SMS poruku kao dokaz i prijavi incident zdravstvenoj kasi i policiji.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li smo proverili datum na fizičkoj kartici?" data-en="Have we checked the date on the physical card?">Da li smo proverili datum na fizičkoj kartici?</li>
            <li data-sr="Da li URL portala odgovara zvaničnoj domeni?" data-en="Does the portal URL match the official domain?">Da li URL portala odgovara zvaničnoj domeni?</li>
            <li data-sr="Da li su uneli JMBG i broj računa na stranom sajtu?" data-en="Did they enter an ID number and account number on an external website?">Da li su uneli JMBG i broj računa na stranom sajtu?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Zdravstvena kasa ne verifikuje kartice kroz SMS linkove." data-en="The health fund does not verify cards through SMS links.">Zdravstvena kasa ne verifikuje kartice kroz SMS linkove.</li>
            <li data-sr="Hajde da odemo u filijalu i proverimo karticu lično — to je jedini siguran put." data-en="Let's go to the branch and check the card in person — that is the only safe path.">Hajde da odemo u filijalu i proverimo karticu lično — to je jedini siguran put.</li>
            <li data-sr="Ako su uneti podaci, banka mora biti obaveštena odmah." data-en="If data was entered, the bank must be notified immediately.">Ako su uneti podaci, banka mora biti obaveštena odmah.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
