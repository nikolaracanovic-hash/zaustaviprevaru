window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["domain-renewal-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi prevara sa obnovom domena" data-en="Introduction: how the domain renewal scam works">Uvod: kako radi prevara sa obnovom domena</h2>
      <p data-sr="Firma ili vlasnik sajta dobija fakturu za obnovu domena koja izgleda kao da dolazi od registrara. Iznos je znatno viši od tržišnog ili se traži prenos domena na drugog registrara. Uplata ide napadaču — domen ostaje neobnovljen ili je prenet bez znanja vlasnika." data-en="A company or website owner receives a domain renewal invoice that looks like it comes from their registrar. The amount is significantly above market rate or transfer to another registrar is requested. Payment goes to the attacker — the domain remains unrenewed or is transferred without the owner's knowledge.">Firma ili vlasnik sajta dobija fakturu za obnovu domena koja izgleda kao da dolazi od registrara. Iznos je znatno viši od tržišnog ili se traži prenos domena na drugog registrara. Uplata ide napadaču — domen ostaje neobnovljen ili je prenet bez znanja vlasnika.</p>
      <p data-sr="Prevara funkcioniše jer vlasnici domena retko proveravaju ko im je registrar i koliko košta obnova. Faktura stiže u pravo vreme — blizu datuma isteka — što pojačava osećaj hitnosti i smanjuje kritičko razmišljanje." data-en="The scam works because domain owners rarely check who their registrar is and what renewal costs. The invoice arrives at the right time — close to the expiry date — which increases the sense of urgency and reduces critical thinking.">Prevara funkcioniše jer vlasnici domena retko proveravaju ko im je registrar i koliko košta obnova. Faktura stiže u pravo vreme — blizu datuma isteka — što pojačava osećaj hitnosti i smanjuje kritičko razmišljanje.</p>
      <div class="callout" data-sr="<strong>Model:</strong> lažno obaveštenje o isteku → lažna faktura → uplata → domen ne obnovljen ili prenet napadaču." data-en="<strong>Model:</strong> fake expiry notice → fake invoice → payment → domain not renewed or transferred to attacker."><strong>Model:</strong> lažno obaveštenje o isteku → lažna faktura → uplata → domen ne obnovljen ili prenet napadaču.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> uplata iznosa na lažnoj fakturi. Novac ide napadaču a domen ostaje istekao ili je prenesen." data-en="<strong>Threshold:</strong> payment of the amount on the fake invoice. Money goes to the attacker and the domain remains expired or has been transferred."><strong>Prag:</strong> uplata iznosa na lažnoj fakturi. Novac ide napadaču a domen ostaje istekao ili je prenesen.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika" data-en="How it works: mechanics">Kako generalno radi: mehanika</h2>
      <div class="grid-2">
        <div>
          <h3 data-sr="Šta gradi uverljivost" data-en="What builds credibility">Šta gradi uverljivost</h3>
          <ul class="bullets">
            <li data-sr="Faktura izgleda kao da dolazi od poznatog registrara — logo, formatiranje, kontakt podaci." data-en="Invoice looks like it comes from a known registrar — logo, formatting, contact details.">Faktura izgleda kao da dolazi od poznatog registrara — logo, formatiranje, kontakt podaci.</li>
            <li data-sr="Naziv domena je tačan — napadač prikuplja podatke o domenima koji ističu iz javnih WHOIS baza." data-en="Domain name is correct — attacker collects data about expiring domains from public WHOIS databases.">Naziv domena je tačan — napadač prikuplja podatke o domenima koji ističu iz javnih WHOIS baza.</li>
            <li data-sr="Datum isteka je blizu — što pojačava hitnost i strah od gubitka domena." data-en="Expiry date is close — which increases urgency and fear of losing the domain.">Datum isteka je blizu — što pojačava hitnost i strah od gubitka domena.</li>
            <li data-sr="Email adresa pošiljaoca imitira zvaničan domen registrara uz malu izmenu." data-en="Sender email address imitates the official registrar domain with a small change.">Email adresa pošiljaoca imitira zvaničan domen registrara uz malu izmenu.</li>
          </ul>
        </div>
        <div>
          <h3 data-sr="Kako se uvodi novac" data-en="How money is introduced">Kako se uvodi novac</h3>
          <ul class="bullets">
            <li data-sr="Lažna faktura za obnovu sa iznosom 5–10x višim od tržišne cene." data-en="Fake renewal invoice with amount 5–10x above market price.">Lažna faktura za obnovu sa iznosom 5–10x višim od tržišne cene.</li>
            <li data-sr="Zahtev za hitnim plaćanjem uz upozorenje da će domen biti izgubljen." data-en="Request for urgent payment with warning that the domain will be lost.">Zahtev za hitnim plaćanjem uz upozorenje da će domen biti izgubljen.</li>
            <li data-sr="Alternativno: zahtev za prenos domena uz besplatnu obnovu kod novog registrara pod kontrolom napadača." data-en="Alternatively: request to transfer domain with &ldquo;free renewal&rdquo; at a new registrar under attacker control.">Alternativno: zahtev za prenos domena uz besplatnu obnovu kod novog registrara pod kontrolom napadača.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok" data-en="Chronological flow">Hronološki tok</h2>

      <div class="phase">
        <div class="label" data-sr="Faza 1: Prikupljanje podataka" data-en="Phase 1: Data collection">Faza 1: Prikupljanje podataka</div>
        <p data-sr="Napadač pretražuje WHOIS baze i sakuplja podatke o domenima koji uskoro ističu — naziv domena, ime vlasnika, email kontakt." data-en="Attacker searches WHOIS databases and collects data about domains expiring soon — domain name, owner name, email contact.">Napadač pretražuje WHOIS baze i sakuplja podatke o domenima koji uskoro ističu — naziv domena, ime vlasnika, email kontakt.</p>
        <ul class="bullets">
          <li data-sr="WHOIS podaci su javno dostupni — napadač može automatski prikupiti hiljade zapisa." data-en="WHOIS data is publicly available — attacker can automatically collect thousands of records.">WHOIS podaci su javno dostupni — napadač može automatski prikupiti hiljade zapisa.</li>
          <li data-sr="Napad je masovan — ista faktura se šalje hiljadama vlasnika domena." data-en="The attack is mass — the same invoice is sent to thousands of domain owners.">Napad je masovan — ista faktura se šalje hiljadama vlasnika domena.</li>
        </ul>
        <p class="phase-threshold" data-sr="Prag faze: lažna faktura je poslata na email vlasnika domena." data-en="Phase threshold: fake invoice has been sent to the domain owner's email.">Prag faze: lažna faktura je poslata na email vlasnika domena.</p>
      </div>

      <div class="phase">
        <div class="label" data-sr="Faza 2: Lažna faktura" data-en="Phase 2: Fake invoice">Faza 2: Lažna faktura</div>
        <p data-sr="Vlasnik domena dobija email ili pismo sa fakturom za obnovu. Iznos je veći nego obično ali ne toliko da odmah izgleda sumnjivo." data-en="Domain owner receives email or letter with renewal invoice. Amount is larger than usual but not so much that it immediately looks suspicious.">Vlasnik domena dobija email ili pismo sa fakturom za obnovu. Iznos je veći nego obično ali ne toliko da odmah izgleda sumnjivo.</p>
        <ul class="bullets">
          <li data-sr="Faktura navodi tačan naziv domena i datum isteka — deluje legitimno." data-en="Invoice states the exact domain name and expiry date — looks legitimate.">Faktura navodi tačan naziv domena i datum isteka — deluje legitimno.</li>
          <li data-sr="Email adresa pošiljaoca je slična zvaničnoj: npr. billing@domain-services.net umesto pravog registrara." data-en="Sender email is similar to official: e.g. &ldquo;billing@domain-services.net&rdquo; instead of the real registrar.">Email adresa pošiljaoca je slična zvaničnoj: npr. billing@domain-services.net umesto pravog registrara.</li>
          <li data-sr="Link za plaćanje vodi na lažan portal koji izgleda kao stranica registrara." data-en="Payment link leads to a fake portal that looks like the registrar's page.">Link za plaćanje vodi na lažan portal koji izgleda kao stranica registrara.</li>
        </ul>
        <p class="phase-threshold" data-sr="Prag faze: vlasnik domena klikće na link ili pristupa uplati bez provere." data-en="Phase threshold: domain owner clicks the link or proceeds to payment without verification.">Prag faze: vlasnik domena klikće na link ili pristupa uplati bez provere.</p>
      </div>

      <div class="phase">
        <div class="label" data-sr="Faza 3: Uplata ili prenos" data-en="Phase 3: Payment or transfer">Faza 3: Uplata ili prenos</div>
        <p data-sr="Vlasnik plaća fakturu ili inicira prenos domena. U oba slučaja novac odlazi napadaču a domen nije zaštićen." data-en="Owner pays the invoice or initiates domain transfer. In both cases money goes to the attacker and the domain is not protected.">Vlasnik plaća fakturu ili inicira prenos domena. U oba slučaja novac odlazi napadaču a domen nije zaštićen.</p>
        <ul class="bullets">
          <li data-sr="Nakon uplate nema potvrde od pravog registrara — domen ostaje neobnovljen." data-en="After payment there is no confirmation from the real registrar — domain remains unrenewed.">Nakon uplate nema potvrde od pravog registrara — domen ostaje neobnovljen.</li>
          <li data-sr="Kod prenosa: vlasnik dobija auth kod i prenos pokretača lažnom registraru koji preuzima domen." data-en="In transfer case: owner receives auth code and initiates transfer to fake registrar who takes over the domain.">Kod prenosa: vlasnik dobija auth kod i prenos pokretača lažnom registraru koji preuzima domen.</li>
        </ul>
        <div class="branches">
          <strong data-sr="Grananja u ovoj fazi:" data-en="Branching in this phase:">Grananja u ovoj fazi:</strong>
          <ul>
            <li data-sr="Vlasnik plati lažnu fakturu → novac izgubljen, domen i dalje ističe." data-en="Owner pays fake invoice → money lost, domain still expires.">Vlasnik plati lažnu fakturu → novac izgubljen, domen i dalje ističe.</li>
            <li data-sr="Vlasnik preda auth kod → domen prenet napadaču koji može tražiti otkup." data-en="Owner hands over auth code → domain transferred to attacker who may demand ransom.">Vlasnik preda auth kod → domen prenet napadaču koji može tražiti otkup.</li>
          </ul>
        </div>
        <p class="phase-threshold" data-sr="Prag faze: vlasnik shvata da domen nije obnovljen ili je prenet." data-en="Phase threshold: owner realises the domain was not renewed or has been transferred.">Prag faze: vlasnik shvata da domen nije obnovljen ili je prenet.</p>
      </div>

      <div class="phase">
        <div class="label" data-sr="Faza 4: Otkrivanje i posledice" data-en="Phase 4: Discovery and consequences">Faza 4: Otkrivanje i posledice</div>
        <p data-sr="Sajt prestaje da radi ili domen postaje nedostupan. Vlasnik kontaktira pravog registrara i shvata šta se desilo." data-en="Site stops working or domain becomes unavailable. Owner contacts the real registrar and realises what happened.">Sajt prestaje da radi ili domen postaje nedostupan. Vlasnik kontaktira pravog registrara i shvata šta se desilo.</p>
        <ul class="bullets">
          <li data-sr="Prenos domena je teško poništiti — ICANN process traje i nije zagarantovan." data-en="Domain transfer is hard to reverse — ICANN process takes time and is not guaranteed.">Prenos domena je teško poništiti — ICANN process traje i nije zagarantovan.</li>
          <li data-sr="Napadač može koristiti domen za phishing ili ga prodati nazad vlasniku." data-en="Attacker can use domain for phishing or sell it back to the owner.">Napadač može koristiti domen za phishing ili ga prodati nazad vlasniku.</li>
          <li data-sr="Poslovni email vezan za domen prestaje da funkcioniše — dodatna šteta." data-en="Business email linked to domain stops working — additional damage.">Poslovni email vezan za domen prestaje da funkcioniše — dodatna šteta.</li>
        </ul>
        <p class="phase-threshold" data-sr="Prag faze: vlasnik angažuje pravog registrara i pokušava povrat domena." data-en="Phase threshold: owner engages real registrar and attempts domain recovery.">Prag faze: vlasnik angažuje pravog registrara i pokušava povrat domena.</p>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Email pošiljaoca se ne poklapa sa zvaničnim domenom vašeg registrara." data-en="Sender email does not match the official domain of your registrar.">Email pošiljaoca se ne poklapa sa zvaničnim domenom vašeg registrara.</li>
        <li data-sr="Iznos na fakturi je znatno viši od uobičajene cene obnove domena." data-en="Amount on invoice is significantly higher than the usual domain renewal price.">Iznos na fakturi je znatno viši od uobičajene cene obnove domena.</li>
        <li data-sr="Faktura dolazi od kompanije čije ime niste videli ranije kao svog registrara." data-en="Invoice comes from a company whose name you have not seen before as your registrar.">Faktura dolazi od kompanije čije ime niste videli ranije kao svog registrara.</li>
        <li data-sr="Pritisak za hitnom uplatom — domen ističe za 3 dana." data-en="Pressure for urgent payment — &ldquo;domain expires in 3 days&rdquo;.">Pritisak za hitnom uplatom — domen ističe za 3 dana.</li>
        <li data-sr="Link za plaćanje vodi na domen koji nije domen vašeg registrara." data-en="Payment link leads to a domain that is not your registrar's domain.">Link za plaćanje vodi na domen koji nije domen vašeg registrara.</li>
        <li data-sr="Faktura traži prenos domena na novog registrara kao uslov obnove." data-en="Invoice requests domain transfer to a new registrar as a condition for renewal.">Faktura traži prenos domena na novog registrara kao uslov obnove.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere pre uplate" data-en="Checks before payment">Provere pre uplate</h2>
      <ul class="bullets">
        <li data-sr="Prijavite se direktno na nalog kod vašeg registrara i proverite status domena tamo." data-en="Log in directly to your account at your registrar and check domain status there.">Prijavite se direktno na nalog kod vašeg registrara i proverite status domena tamo.</li>
        <li data-sr="Proverite ko je vaš registrar u WHOIS bazi — npr. who.is ili lookup.icann.org." data-en="Check who your registrar is in the WHOIS database — e.g. who.is or lookup.icann.org.">Proverite ko je vaš registrar u WHOIS bazi — npr. who.is ili lookup.icann.org.</li>
        <li data-sr="Nikad ne klikajte link u fakturi — uvek idite direktno na sajt registrara." data-en="Never click the link in the invoice — always go directly to the registrar's website.">Nikad ne klikajte link u fakturi — uvek idite direktno na sajt registrara.</li>
        <li data-sr="Proverite email adresu pošiljaoca — mora biti zvaničan domen registrara." data-en="Check the sender's email address — it must be the registrar's official domain.">Proverite email adresu pošiljaoca — mora biti zvaničan domen registrara.</li>
        <li data-sr="Proverite tržišnu cenu obnove domena pre plaćanja bilo koje fakture." data-en="Check the market price of domain renewal before paying any invoice.">Proverite tržišnu cenu obnove domena pre plaćanja bilo koje fakture.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Checklista pre uplate" data-en="Checklist before payment">Checklista pre uplate</h2>
      <ol class="bullets">
        <li data-sr="Da li sam se prijavio direktno na nalog kod registrara i proverio status domena?" data-en="Have I logged in directly to my registrar account and checked domain status?">Da li sam se prijavio direktno na nalog kod registrara i proverio status domena?</li>
        <li data-sr="Da li pošiljalac fakture odgovara registraru koji je evidentiran u WHOIS?" data-en="Does the invoice sender match the registrar recorded in WHOIS?">Da li pošiljalac fakture odgovara registraru koji je evidentiran u WHOIS?</li>
        <li data-sr="Da li iznos fakture odgovara tržišnoj ceni obnove?" data-en="Does the invoice amount match the market renewal price?">Da li iznos fakture odgovara tržišnoj ceni obnove?</li>
        <li data-sr="Da li link za plaćanje vodi na zvaničan domen registrara?" data-en="Does the payment link lead to the official registrar domain?">Da li link za plaćanje vodi na zvaničan domen registrara?</li>
        <li data-sr="Da li faktura traži prenos domena — zašto bi to bio uslov obnove?" data-en="Does the invoice request domain transfer — why would that be a condition for renewal?">Da li faktura traži prenos domena — zašto bi to bio uslov obnove?</li>
        <li data-sr="Da li sam postavio automatsku obnovu domena kod pravog registrara?" data-en="Have I set up automatic domain renewal with the real registrar?">Da li sam postavio automatsku obnovu domena kod pravog registrara?</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion arises: steps to take">Ako sumnja krene: redosled poteza</h2>
      <ol class="bullets">
        <li data-sr="Prijaviti se direktno na nalog kod registrara i proveriti stvarni status domena." data-en="Log in directly to registrar account and check the actual domain status.">Prijaviti se direktno na nalog kod registrara i proveriti stvarni status domena.</li>
        <li data-sr="Ako je uplata izvršena — kontaktirati banku za mogući povrat." data-en="If payment was made — contact bank for possible refund.">Ako je uplata izvršena — kontaktirati banku za mogući povrat.</li>
        <li data-sr="Ako je prenos pokrenut — odmah kontaktirati pravog registrara i zatražiti zaustavljanje prenosa." data-en="If transfer was initiated — immediately contact real registrar and request transfer stop.">Ako je prenos pokrenut — odmah kontaktirati pravog registrara i zatražiti zaustavljanje prenosa.</li>
        <li data-sr="Aktivirati zaključavanje domena (Registrar Lock) kod pravog registrara." data-en="Activate domain lock (Registrar Lock) with the real registrar.">Aktivirati zaključavanje domena (Registrar Lock) kod pravog registrara.</li>
        <li data-sr="Prijaviti incident ICANN-u i nadležnom telu za zaštitu potrošača." data-en="Report incident to ICANN and the relevant consumer protection body.">Prijaviti incident ICANN-u i nadležnom telu za zaštitu potrošača.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
      <ul class="bullets">
        <li data-sr="Ko je tvoj registrar domena — i da li pošiljalac fakture odgovara tom registraru?" data-en="'Who is your domain registrar — and does the invoice sender match that registrar?">Ko je tvoj registrar domena — i da li pošiljalac fakture odgovara tom registraru?</li>
        <li data-sr="Prijavi se direktno na nalog kod registrara i pogledaj status domena — bez klika na link iz fakture." data-en="'Log in directly to your registrar account and check domain status — without clicking the link in the invoice.">Prijavi se direktno na nalog kod registrara i pogledaj status domena — bez klika na link iz fakture.</li>
        <li data-sr="Koliko obično košta obnova domena — da li je ovaj iznos normalan?" data-en="'How much does domain renewal usually cost — is this amount normal?">Koliko obično košta obnova domena — da li je ovaj iznos normalan?</li>
        <li data-sr="Aktiviraj automatsku obnovu kod pravog registrara da ovaj problem ne bi mogao više da se pojavi." data-en="'Activate automatic renewal with the real registrar so this problem cannot happen again.">Aktiviraj automatsku obnovu kod pravog registrara da ovaj problem ne bi mogao više da se pojavi.</li>
      </ul>
    </section>

    
  `
};
