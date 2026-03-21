if (!window.SCAM_CONTENT) window.SCAM_CONTENT = {};
window.SCAM_CONTENT["escrow-scam"] = {
  raw_html: `
<section class="content-section">
  <h2 data-sr="Uvod: kako radi escrow prevara" data-en="Intro: how the escrow scam works">Uvod: kako radi escrow prevara</h2>
  <p data-sr="Kupac ili prodavac u online transakciji predlaže korišćenje escrow servisa koji će držati novac dok se roba ne isporuči. Escrow servis je lažan — kontroliše ga prevarant. Posle uplate, novac nestaje, a roba nikad ne stiže. Alternativna varijanta: prevarant prodaje robu i predlaže lažni escrow koji oslobađa novac prodavcu pre stvarne isporuke." data-en="A buyer or seller in an online transaction proposes using an 'escrow service' that will hold money until goods are delivered. The escrow service is fake — controlled by the fraudster. After payment, the money disappears, and goods never arrive. Alternative variant: the fraudster sells goods and proposes a fake escrow that releases money to the seller before actual delivery.">Kupac ili prodavac u online transakciji predlaže korišćenje escrow servisa koji će držati novac dok se roba ne isporuči. Escrow servis je lažan — kontroliše ga prevarant. Posle uplate, novac nestaje, a roba nikad ne stiže. Alternativna varijanta: prevarant prodaje robu i predlaže lažni escrow koji oslobađa novac prodavcu pre stvarne isporuke.</p>
</section>

<section class="content-section">
  <h2 data-sr="Model" data-en="Model">Model</h2>
  <div class="phase">
    <div class="label" data-sr="Lanac" data-en="Chain">Lanac</div>
    <p data-sr="Predlog za escrow → lažni escrow servis → uplata → roba ne stiže ili escrow oslobađa novac pre isporuke → gubitak" data-en="Escrow proposal → fake escrow service → payment → goods do not arrive or escrow releases money before delivery → loss">Predlog za escrow → lažni escrow servis → uplata → roba ne stiže ili escrow oslobađa novac pre isporuke → gubitak</p>
  </div>
  <div class="callout">
    <strong data-sr="Prag:" data-en="Threshold:">Prag:</strong>
    <span data-sr="Koristite isključivo proverene escrow servise (Escrow.com, Payoneer Escrow) — nikad servis koji predlaže druga strana u transakciji." data-en="Use only verified escrow services (Escrow.com, Payoneer Escrow) — never a service proposed by the other party in a transaction.">Koristite isključivo proverene escrow servise (Escrow.com, Payoneer Escrow) — nikad servis koji predlaže druga strana u transakciji.</span>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Kako generalno radi" data-en="How it generally works">Kako generalno radi</h2>
  <div class="grid-2">
    <article>
      <h3 data-sr="Varijanta A: Prevarant kao prodavac" data-en="Variant A: Fraudster as seller">Varijanta A: Prevarant kao prodavac</h3>
      <ul class="bullets">
        <li data-sr="Prodavac predlaže bezbedan escrow koji će biti neutralna strana dok kupac ne potvrdi prijem robe." data-en="The seller proposes a secure escrow' that will be a neutral party until the buyer confirms receipt of goods.">Prodavac predlaže bezbedan escrow koji će biti neutralna strana dok kupac ne potvrdi prijem robe.</li>
        <li data-sr="Escrow servis koji predlaže prodavac kontroliše isti prevarant ili partner — nije neutralan." data-en="The escrow service the seller proposes is controlled by the same fraudster or a partner — it is not neutral.">Escrow servis koji predlaže prodavac kontroliše isti prevarant ili partner — nije neutralan.</li>
        <li data-sr="Posle uplate u escrow, prodavac dobija potvrdu od svog lažnog escrow-a i nestaje s robom." data-en="After payment to escrow, the seller receives confirmation from their fake escrow and disappears with the goods.">Posle uplate u escrow, prodavac dobija potvrdu od svog lažnog escrow-a i nestaje s robom.</li>
      </ul>
    </article>
    <article>
      <h3 data-sr="Varijanta B: Prevarant kao kupac" data-en="Variant B: Fraudster as buyer">Varijanta B: Prevarant kao kupac</h3>
      <ul class="bullets">
        <li data-sr="Kupac predlaže escrow da zaštiti prodavca i insistira na svom escrow servisu za brže oslobađanje novca." data-en="The buyer proposes escrow to protect the seller and insists on their own escrow service for 'faster money release.">Kupac predlaže escrow da zaštiti prodavca i insistira na svom escrow servisu za brže oslobađanje novca.</li>
        <li data-sr="Lažni escrow šalje prodavcu lažnu potvrdu o uplati pre nego novac zaista stigne." data-en="The fake escrow sends the seller a fake payment confirmation before money actually arrives.">Lažni escrow šalje prodavcu lažnu potvrdu o uplati pre nego novac zaista stigne.</li>
        <li data-sr="Prodavac šalje robu na osnovu lažne potvrde — novac nikad ne stiže jer nije ni bio uplaćen." data-en="The seller ships goods based on the fake confirmation — money never arrives because it was never deposited.">Prodavac šalje robu na osnovu lažne potvrde — novac nikad ne stiže jer nije ni bio uplaćen.</li>
      </ul>
    </article>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Hronološki tok" data-en="Chronological flow">Hronološki tok</h2>

  <div class="phase">
    <div class="label" data-sr="Faza 1: Predlog escrow servisa od druge strane" data-en="Phase 1: Escrow service proposal from the other party">Faza 1: Predlog escrow servisa od druge strane</div>
    <p data-sr="Druga strana u transakciji predlaže korišćenje specificiranog escrow servisa koji je siguran i brz. Nikad ne traži da vi izaberete servis." data-en="The other party in the transaction proposes using a specified escrow service that is 'secure' and 'fast.' They never ask you to choose the service.">Druga strana u transakciji predlaže korišćenje specificiranog escrow servisa koji je siguran i brz. Nikad ne traži da vi izaberete servis.</p>
    <ul class="bullets">
      <li data-sr="Ako druga strana predlaže escrow servis, insistirajte da se dogovorite o poznatom i proverenom servisu — Escrow.com, Payoneer." data-en="If the other party proposes an escrow service, insist on agreeing to a known and verified service — Escrow.com, Payoneer.">Ako druga strana predlaže escrow servis, insistirajte da se dogovorite o poznatom i proverenom servisu — Escrow.com, Payoneer.</li>
      <li data-sr="Proverite reputaciju predloženog escrow servisa u registrima finansijskih institucija matične države." data-en="Check the reputation of the proposed escrow service in financial institution registers of the home country.">Proverite reputaciju predloženog escrow servisa u registrima finansijskih institucija matične države.</li>
      <li data-sr="Lažni escrow sajtovi izgledaju profesionalno ali nemaju licencu finansijskog posrednika ni proverljivu reputaciju." data-en="Fake escrow websites look professional but do not have a financial intermediary license or verifiable reputation.">Lažni escrow sajtovi izgledaju profesionalno ali nemaju licencu finansijskog posrednika ni proverljivu reputaciju.</li>
    </ul>
    <div class="callout" data-sr="<strong>Prag faze:</strong> Escrow servis mora biti nezavisan od druge strane u transakciji — odbijte svaki predlog od direktnog kontrahenta." data-en="Phase threshold: The escrow service must be independent of the other party in the transaction — refuse any proposal from the direct counterparty."><strong>Prag faze:</strong> Escrow servis mora biti nezavisan od druge strane u transakciji — odbijte svaki predlog od direktnog kontrahenta.</div>
  </div>

  <div class="phase">
    <div class="label" data-sr="Faza 2: Verifikacija escrow servisa" data-en="Phase 2: Escrow service verification">Faza 2: Verifikacija escrow servisa</div>
    <p data-sr="Lažni escrow sajt ima kompletan profesionalan izgled — stranice O nama, Kako funkcioniše, Sigurnost — ali domen je mlad i nema verifikovane recenzije." data-en="The fake escrow site has a complete professional look — 'About us', 'How it works', 'Security' pages — but the domain is young and has no verified reviews.">Lažni escrow sajt ima kompletan profesionalan izgled — stranice O nama, Kako funkcioniše, Sigurnost — ali domen je mlad i nema verifikovane recenzije.</p>
    <ul class="bullets">
      <li data-sr="Proverite datum registracije domena WHOIS pretragom — lažni escrow sajtovi su često mladi (manje od 6 meseci)." data-en="Check the domain registration date via WHOIS — fake escrow sites are often young (less than 6 months).">Proverite datum registracije domena WHOIS pretragom — lažni escrow sajtovi su često mladi (manje od 6 meseci).</li>
      <li data-sr="Proverite da li je escrow servis registrovan kao finansijska institucija ili posrednik u relevantnoj nadležnosti." data-en="Check whether the escrow service is registered as a financial institution or intermediary in the relevant jurisdiction.">Proverite da li je escrow servis registrovan kao finansijska institucija ili posrednik u relevantnoj nadležnosti.</li>
      <li data-sr="Pretražite naziv escrow servisa uz ključnu reč scam ili fraud za nezavisne recenzije." data-en="Search the escrow service name with the keyword scam or 'fraud' for independent reviews.">Pretražite naziv escrow servisa uz ključnu reč scam ili fraud za nezavisne recenzije.</li>
    </ul>
    <div class="callout" data-sr="<strong>Prag faze:</strong> Koristite samo Escrow.com ili Payoneer Escrow — to su jedini provereni servisi za većinu online transakcija." data-en="Phase threshold: Use only Escrow.com or Payoneer Escrow — these are the only verified services for most online transactions."><strong>Prag faze:</strong> Koristite samo Escrow.com ili Payoneer Escrow — to su jedini provereni servisi za većinu online transakcija.</div>
  </div>

  <div class="phase">
    <div class="label" data-sr="Faza 3: Uplata u lažni escrow" data-en="Phase 3: Payment to fake escrow">Faza 3: Uplata u lažni escrow</div>
    <p data-sr="Kupac uplaćuje pun iznos u lažni escrow koji kontroliše prevarant. Escrow šalje potvrdu o uplati kupcu i prodavcu." data-en="The buyer deposits the full amount into the fake escrow controlled by the fraudster. The escrow sends payment confirmations to the buyer and seller.">Kupac uplaćuje pun iznos u lažni escrow koji kontroliše prevarant. Escrow šalje potvrdu o uplati kupcu i prodavcu.</p>
    <ul class="bullets">
      <li data-sr="Potvrda uplate u escrow je lažni dokument koji nema nikakvu finansijsku vrednost." data-en="The escrow payment confirmation is a fake document with no financial value.">Potvrda uplate u escrow je lažni dokument koji nema nikakvu finansijsku vrednost.</li>
      <li data-sr="Pravi escrow servisi šalju potvrde s transakcijskim brojevima koji mogu biti verifikovani direktno na njihovom sajtu." data-en="Real escrow services send confirmations with transaction numbers that can be verified directly on their website.">Pravi escrow servisi šalju potvrde s transakcijskim brojevima koji mogu biti verifikovani direktno na njihovom sajtu.</li>
      <li data-sr="Verifikujte uplatu direktno na sajtu escrow servisa — ne putem e-pošte od escrow-a." data-en="Verify the payment directly on the escrow service's website — not via email from the escrow.">Verifikujte uplatu direktno na sajtu escrow servisa — ne putem e-pošte od escrow-a.</li>
    </ul>
    <div class="callout" data-sr="<strong>Prag faze:</strong> Verifikujte status escrow uplate direktno na sajtu servisa, ne samo putem e-pošte." data-en="Phase threshold: Verify the escrow payment status directly on the service's website, not just via email."><strong>Prag faze:</strong> Verifikujte status escrow uplate direktno na sajtu servisa, ne samo putem e-pošte.</div>
  </div>

  <div class="phase">
    <div class="label" data-sr="Faza 4: Nestanak ili odbijanje oslobađanja sredstava" data-en="Phase 4: Disappearance or refusal to release funds">Faza 4: Nestanak ili odbijanje oslobađanja sredstava</div>
    <p data-sr="Roba ne stiže. Escrow servis ne odgovara na zahteve za povratom. Ili: escrow traži dodatne naknade za oslobađanje sredstava — tipičan advance-fee model." data-en="Goods do not arrive. The escrow service does not respond to refund requests. Or: the escrow requests additional fees for 'releasing funds' — typical advance-fee model.">Roba ne stiže. Escrow servis ne odgovara na zahteve za povratom. Ili: escrow traži dodatne naknade za oslobađanje sredstava — tipičan advance-fee model.</p>
    <ul class="bullets">
      <li data-sr="Svaki zahtev za uplatom unapred od strane escrow-a za oslobađanje sredstava je definitivan signal lažnog escrow-a." data-en="Any upfront payment request from the escrow for releasing funds' is a definitive signal of a fake escrow.">Svaki zahtev za uplatom unapred od strane escrow-a za oslobađanje sredstava je definitivan signal lažnog escrow-a.</li>
      <li data-sr="Pokrenite chargeback kod banke odmah s dokumentacijom lažnog escrow-a i neisporuke robe." data-en="Initiate a chargeback with the bank immediately with fake escrow documentation and non-delivery of goods.">Pokrenite chargeback kod banke odmah s dokumentacijom lažnog escrow-a i neisporuke robe.</li>
      <li data-sr="Prijavite slučaj policiji i finansijskim regulatorima s punom dokumentacijom." data-en="Report the case to the police and financial regulators with full documentation.">Prijavite slučaj policiji i finansijskim regulatorima s punom dokumentacijom.</li>
    </ul>
    <div class="callout" data-sr="<strong>Prag faze:</strong> Pokrenite chargeback odmah — ne plaćajte dodatne naknade escrow-u koji ne može osloboditi vaše vlastite fondove." data-en="Phase threshold: Initiate a chargeback immediately — do not pay additional fees to an escrow that cannot release your own funds."><strong>Prag faze:</strong> Pokrenite chargeback odmah — ne plaćajte dodatne naknade escrow-u koji ne može osloboditi vaše vlastite fondove.</div>
  </div>

  <div class="phase">
    <div class="label" data-sr="Faza 5: Prodavac varijanta — lažna potvrda uplate" data-en="Phase 5: Seller variant — fake payment confirmation">Faza 5: Prodavac varijanta — lažna potvrda uplate</div>
    <p data-sr="Prodavac prima e-poštu od escrow-a da je novac primljen i da roba može biti poslata. Escrow potvrda je lažna — novac nikad nije bio uplaćen." data-en="The seller receives an email from the escrow that money has been received and goods can be sent. The escrow confirmation is fake — money was never deposited.">Prodavac prima e-poštu od escrow-a da je novac primljen i da roba može biti poslata. Escrow potvrda je lažna — novac nikad nije bio uplaćen.</p>
    <ul class="bullets">
      <li data-sr="Uvek verifikujte uplatu direktno na sajtu escrow servisa pre slanja robe — e-pošta nije dokaz uplate." data-en="Always verify the payment directly on the escrow service's website before shipping goods — email is not proof of payment.">Uvek verifikujte uplatu direktno na sajtu escrow servisa pre slanja robe — e-pošta nije dokaz uplate.</li>
      <li data-sr="Pravi escrow potvrde imaju transakcijski broj koji se može verifikovati na sajtu escrow servisa." data-en="Real escrow confirmations have a transaction number that can be verified on the escrow service's website.">Pravi escrow potvrde imaju transakcijski broj koji se može verifikovati na sajtu escrow servisa.</li>
      <li data-sr="Ni pod kojim okolnostima ne šaljite robu dok uplata nije verifikovana direktno na escrow platformi." data-en="Under no circumstances send goods until payment is verified directly on the escrow platform.">Ni pod kojim okolnostima ne šaljite robu dok uplata nije verifikovana direktno na escrow platformi.</li>
    </ul>
    <div class="callout" data-sr="<strong>Prag faze:</strong> Verifikujte escrow potvrdu direktno na platforminom sajtu — nikad ne šaljite robu na osnovu e-pošte." data-en="Phase threshold: Verify the escrow confirmation directly on the platform's website — never ship goods based on email."><strong>Prag faze:</strong> Verifikujte escrow potvrdu direktno na platforminom sajtu — nikad ne šaljite robu na osnovu e-pošte.</div>
  </div>

  <div class="phase">
    <div class="label" data-sr="Faza 6: Nestanak i prijava" data-en="Phase 6: Disappearance and reporting">Faza 6: Nestanak i prijava</div>
    <p data-sr="Escrow servis nestaje. Kontakti ne odgovaraju. Sajt se gasi ili preimenuje." data-en="The escrow service disappears. Contacts do not respond. The website shuts down or is renamed.">Escrow servis nestaje. Kontakti ne odgovaraju. Sajt se gasi ili preimenuje.</p>
    <ul class="bullets">
      <li data-sr="Pokrenite chargeback odmah s dokumentacijom lažnog escrow-a, komunikacije i neisporuke." data-en="Initiate a chargeback immediately with fake escrow documentation, communication, and non-delivery.">Pokrenite chargeback odmah s dokumentacijom lažnog escrow-a, komunikacije i neisporuke.</li>
      <li data-sr="Prijavite lažni escrow finansijskim regulatorima i policiji s punom dokumentacijom." data-en="Report the fake escrow to financial regulators and police with full documentation.">Prijavite lažni escrow finansijskim regulatorima i policiji s punom dokumentacijom.</li>
      <li data-sr="Prijavite domenski hosting i CERT za uklanjanje lažnog escrow sajta." data-en="Report the domain hosting and CERT for removal of the fake escrow site.">Prijavite domenski hosting i CERT za uklanjanje lažnog escrow sajta.</li>
    </ul>
    <div class="callout" data-sr="<strong>Prag faze:</strong> Prijavite finansijskim regulatorima odmah — lažni finansijski servisi su regulatorni slučaj, ne samo policijski." data-en="Phase threshold: Report to financial regulators immediately — fake financial services are a regulatory case, not only a police case."><strong>Prag faze:</strong> Prijavite finansijskim regulatorima odmah — lažni finansijski servisi su regulatorni slučaj, ne samo policijski.</div>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
  <ul class="bullets">
    <li data-sr="Escrow servis predlaže druga strana u transakciji — to je signal da escrow nije neutralan." data-en="The escrow service is proposed by the other party in the transaction — that is a signal the escrow is not neutral.">Escrow servis predlaže druga strana u transakciji — to je signal da escrow nije neutralan.</li>
    <li data-sr="Domen escrow servisa je mlad — registrovan u poslednjih 6 meseci prema WHOIS pretraži." data-en="The escrow service's domain is young — registered in the past 6 months according to WHOIS search.">Domen escrow servisa je mlad — registrovan u poslednjih 6 meseci prema WHOIS pretraži.</li>
    <li data-sr="Escrow servis nije u registrima finansijskih institucija relevantnih država." data-en="The escrow service is not in financial institution registers of relevant countries.">Escrow servis nije u registrima finansijskih institucija relevantnih država.</li>
    <li data-sr="Escrow traži unaprednu naknadu za oslobađanje sredstava — to je advance-fee model unutar escrow-a." data-en="The escrow requests an upfront fee for releasing funds' — that is an advance-fee model within escrow.">Escrow traži unaprednu naknadu za oslobađanje sredstava — to je advance-fee model unutar escrow-a.</li>
    <li data-sr="Potvrda escrow-a dolazi samo e-poštom bez mogućnosti verifikacije direktno na sajtu servisa." data-en="The escrow confirmation comes only by email without the possibility of verification directly on the service's website.">Potvrda escrow-a dolazi samo e-poštom bez mogućnosti verifikacije direktno na sajtu servisa.</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Provere" data-en="Checks">Provere</h2>
  <ul class="bullets">
    <li data-sr="Koristite isključivo proverene escrow servise — Escrow.com, Payoneer Escrow — nikad servis koji predlaže prodavac." data-en="Use only verified escrow services — Escrow.com, Payoneer Escrow — never a service proposed by the seller.">Koristite isključivo proverene escrow servise — Escrow.com, Payoneer Escrow — nikad servis koji predlaže prodavac.</li>
    <li data-sr="Proverite domen escrow servisa WHOIS pretragom — mladi domeni su visok rizik." data-en="Check the escrow service's domain via WHOIS — young domains are high risk.">Proverite domen escrow servisa WHOIS pretragom — mladi domeni su visok rizik.</li>
    <li data-sr="Proverite da li je escrow servis registrovan kao finansijska institucija u relevantnoj nadležnosti." data-en="Check whether the escrow service is registered as a financial institution in the relevant jurisdiction.">Proverite da li je escrow servis registrovan kao finansijska institucija u relevantnoj nadležnosti.</li>
    <li data-sr="Verifikujte svaku escrow transakciju direktno na sajtu servisa — ne samo putem e-pošte." data-en="Verify every escrow transaction directly on the service's website — not just via email.">Verifikujte svaku escrow transakciju direktno na sajtu servisa — ne samo putem e-pošte.</li>
    <li data-sr="Odbijte svaki zahtev za dodatnom naknadom od escrow-a za oslobađanje vaših sredstava." data-en="Refuse any request for additional fees from the escrow for releasing' your funds.">Odbijte svaki zahtev za dodatnom naknadom od escrow-a za oslobađanje vaših sredstava.</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Checklista pre korišćenja escrow servisa" data-en="Checklist before using an escrow service">Checklista pre korišćenja escrow servisa</h2>
  <ul class="bullets">
    <li data-sr="Da li je escrow servis nezavisan od druge strane u transakciji — nisam ga prihvatio na preporuku prodavca/kupca?" data-en="Is the escrow service independent of the other party in the transaction — have I not accepted it on the recommendation of the seller/buyer?">Da li je escrow servis nezavisan od druge strane u transakciji — nisam ga prihvatio na preporuku prodavca/kupca?</li>
    <li data-sr="Da li je escrow servis proverljiv u registrima finansijskih institucija?" data-en="Is the escrow service verifiable in financial institution registers?">Da li je escrow servis proverljiv u registrima finansijskih institucija?</li>
    <li data-sr="Da li je domen escrow servisa stariji od godinu dana prema WHOIS pretraži?" data-en="Is the escrow service's domain older than one year according to WHOIS search?">Da li je domen escrow servisa stariji od godinu dana prema WHOIS pretraži?</li>
    <li data-sr="Da li transakcijski broj u potvrdi može biti verifikovan direktno na sajtu escrow servisa?" data-en="Can the transaction number in the confirmation be verified directly on the escrow service's website?">Da li transakcijski broj u potvrdi može biti verifikovan direktno na sajtu escrow servisa?</li>
    <li data-sr="Da li escrow traži dodatne naknade za oslobađanje sredstava — ako da, to je lažan escrow?" data-en="Is the escrow requesting additional fees for releasing' funds — if yes, is it a fake escrow?">Da li escrow traži dodatne naknade za oslobađanje sredstava — ako da, to je lažan escrow?</li>
    <li data-sr="Da li sam sačuvao svu komunikaciju i dokumentaciju transakcije za eventualnu prijavu?" data-en="Have I saved all communication and transaction documentation for a potential report?">Da li sam sačuvao svu komunikaciju i dokumentaciju transakcije za eventualnu prijavu?</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion arises: order of actions">Ako sumnja krene: redosled poteza</h2>
  <ul class="bullets">
    <li data-sr="Pokrenite chargeback kod banke odmah s dokumentacijom lažnog escrow-a i neisporuke." data-en="Initiate a chargeback with the bank immediately with fake escrow documentation and non-delivery.">Pokrenite chargeback kod banke odmah s dokumentacijom lažnog escrow-a i neisporuke.</li>
    <li data-sr="Prijavite escrow servis finansijskim regulatorima matične države servisa." data-en="Report the escrow service to financial regulators of the service's home country.">Prijavite escrow servis finansijskim regulatorima matične države servisa.</li>
    <li data-sr="Prijavite slučaj policiji s punom dokumentacijom transakcije i komunikacije." data-en="Report the case to the police with full transaction and communication documentation.">Prijavite slučaj policiji s punom dokumentacijom transakcije i komunikacije.</li>
    <li data-sr="Prijavite domenski hosting CERT-u za uklanjanje lažnog escrow sajta." data-en="Report the domain hosting to CERT for removal of the fake escrow site.">Prijavite domenski hosting CERT-u za uklanjanje lažnog escrow sajta.</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
  <ul class="bullets">
    <li data-sr="Pitaj: Ko je predložio escrow servis — prodavac ili kupac?" data-en="Ask: Who proposed the escrow service — the seller or the buyer?">Pitaj: Ko je predložio escrow servis — prodavac ili kupac?</li>
    <li data-sr="Pitaj: Da li escrow servis traži naknade pre oslobađanja sredstava?" data-en="Ask: Is the escrow service requesting fees before releasing funds?">Pitaj: Da li escrow servis traži naknade pre oslobađanja sredstava?</li>
    <li data-sr="Rečenice koje pomažu: Pravi escrow servis ne može da predloži strana sa kojom posluješ — to je sukob interesa. Koristite samo Escrow.com ili Payoneer Escrow za proverene transakcije." data-en="Sentences that help: A real escrow service cannot be proposed by the party you are dealing with — that is a conflict of interest.' 'Use only Escrow.com or Payoneer Escrow for verified transactions.">Rečenice koje pomažu: Pravi escrow servis ne može da predloži strana sa kojom posluješ — to je sukob interesa. Koristite samo Escrow.com ili Payoneer Escrow za proverene transakcije.</li>
    <li data-sr="Pomozi osobi da pokrene chargeback i prijavi slučaj finansijskim regulatorima odmah." data-en="Help the person initiate a chargeback and report the case to financial regulators immediately.">Pomozi osobi da pokrene chargeback i prijavi slučaj finansijskim regulatorima odmah.</li>
  </ul>
</section>


`
};
