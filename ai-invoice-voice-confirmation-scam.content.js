if (!window.SCAM_CONTENT) window.SCAM_CONTENT = {};
window.SCAM_CONTENT["ai-invoice-voice-confirmation-scam"] = {
  raw_html: `
<section class="content-section">
  <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
  <p data-sr="Napadač menja podatke za plaćanje na fakturi ili šalje lažnu fakturu. Zatim zove finansije sintetičkim glasom koji zvuči kao poznati dobavljač i potvrđuje novi IBAN." data-en="The attacker alters payment details on an invoice or sends a fake invoice. Then they call finance with a synthetic voice that sounds like a known supplier and confirms a new IBAN.">Napadač menja podatke za plaćanje na fakturi ili šalje lažnu fakturu. Zatim zove finansije sintetičkim glasom koji zvuči kao poznati dobavljač i potvrđuje novi IBAN.</p>
  <p data-sr="U zdravoj proceduri promena računa dobavljača ide kroz pisan dokument ili digitalno potpisan kanal, ne kroz jedan telefonski poziv." data-en="In a sound process, supplier bank changes go through a signed document or digitally signed channel, not a single phone call.">U zdravoj proceduri promena računa dobavljača ide kroz pisan dokument ili digitalno potpisan kanal, ne kroz jedan telefonski poziv.</p>
</section>

<section class="content-section">
  <h2 data-sr="Hronološki tok (faze)" data-en="Timeline (phases)">Hronološki tok (faze)</h2>

  <article class="phase">
    <h3 data-sr="Faza 1 — Priprema fakture" data-en="Phase 1 — Invoice prep">Faza 1 — Priprema fakture</h3>
    <p data-sr="Napadač kompromituje imejl dobavljača ili šalje fakturu sa lookalike domena." data-en="The attacker compromises supplier email or sends an invoice from a lookalike domain.">Napadač kompromituje imejl dobavljača ili šalje fakturu sa lookalike domena.</p>
    <ul class="bullets">
      <li data-sr="PDF izgleda kao ranije fakture jer su ukradeni šabloni." data-en="The PDF looks like earlier invoices because templates were stolen.">PDF izgleda kao ranije fakture jer su ukradeni šabloni.</li>
      <li data-sr="Jedina razlika je IBAN ili SWIFT polje." data-en="The only difference is the IBAN or SWIFT field.">Jedina razlika je IBAN ili SWIFT polje.</li>
      <li data-sr="Tekst imejla naglašava da je promena računa trajna." data-en="The email text stresses the account change is permanent.">Tekst imejla naglašava da je promena računa trajna.</li>
      <li data-sr="Faktura stiže u istom ciklusu kao i obično da ne izazove sumnju." data-en="The invoice arrives in the same cycle as usual to avoid suspicion.">Faktura stiže u istom ciklusu kao i obično da ne izazove sumnju.</li>
    </ul>
    <div class="callout"><strong data-sr="Finansije su primile dokument sa novim podacima za uplatu.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Finansije su primile dokument sa novim podacima za uplatu." data-en="Finance received a document with new payment details.">Finansije su primile dokument sa novim podacima za uplatu.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 2 — Lažni poziv" data-en="Phase 2 — Fake call">Faza 2 — Lažni poziv</h3>
    <p data-sr="Neko zove i predstavlja se kao kontakt osoba dobavljača. Glas je blizak originalu zbog AI klona." data-en="Someone calls claiming to be the supplier contact. The voice is close to the original due to AI cloning.">Neko zove i predstavlja se kao kontakt osoba dobavljača. Glas je blizak originalu zbog AI klona.</p>
    <ul class="bullets">
      <li data-sr="Pozivalac zna broj fakture i iznos sa dokumenta." data-en="The caller knows the invoice number and amount from the document.">Pozivalac zna broj fakture i iznos sa dokumenta.</li>
      <li data-sr="Tvrdi da je promena računa posledica spajanja banaka." data-en="They claim the account change follows a bank merger.">Tvrdi da je promena računa posledica spajanja banaka.</li>
      <li data-sr="Traži da se plati danas da bi se izbegle kamate." data-en="They ask to pay today to avoid interest.">Traži da se plati danas da bi se izbegle kamate.</li>
      <li data-sr="Kratko trajanje poziva sprečava duboku proveru." data-en="A short call prevents deep verification.">Kratko trajanje poziva sprečava duboku proveru.</li>
    </ul>
    <div class="callout"><strong data-sr="Finansijski službenik veruje da je glas stvarni dobavljač.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Finansijski službenik veruje da je glas stvarni dobavljač." data-en="The finance staffer believes the voice is the real supplier.">Finansijski službenik veruje da je glas stvarni dobavljač.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching at this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="invoice-fraud.html" data-sr="Prevara fakture — ista osnova dokumenta." data-en="Invoice fraud — same document basis.">Prevara fakture — ista osnova dokumenta.</a></li>
        <li><a href="vendor-email-compromise.html" data-sr="Kompromitacija imejla dobavljača." data-en="Vendor email compromise.">Kompromitacija imejla dobavljača.</a></li>
      </ul>
    </div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 3 — Uplata" data-en="Phase 3 — Payment">Faza 3 — Uplata</h3>
    <p data-sr="Uplata se knjiži na IBAN napadača. U sistemu izgleda kao redovna isporuka." data-en="Payment is booked to the attacker's IBAN. In the system it looks like a routine settlement.">Uplata se knjiži na IBAN napadača. U sistemu izgleda kao redovna isporuka.</p>
    <ul class="bullets">
      <li data-sr="Potpisivanje u ERP-u prolazi jer je faktura vizuelno ispravna." data-en="ERP approval passes because the invoice looks correct.">Potpisivanje u ERP-u prolazi jer je faktura vizuelno ispravna.</li>
      <li data-sr="Niko ne upoređuje IBAN sa prethodnom fakturom u arhivi." data-en="No one compares the IBAN to a previous invoice in the archive.">Niko ne upoređuje IBAN sa prethodnom fakturom u arhivi.</li>
      <li data-sr="Veliki iznosi se ponekad dele na više transakcija." data-en="Large amounts are sometimes split across transactions.">Veliki iznosi se ponekad dele na više transakcija.</li>
    </ul>
    <div class="callout"><strong data-sr="Novac je napustio račun kupca.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Novac je napustio račun kupca." data-en="Money has left the buyer's account.">Novac je napustio račun kupca.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 4 — Otkrivanje od strane dobavljača" data-en="Phase 4 — Supplier discovery">Faza 4 — Otkrivanje od strane dobavljača</h3>
    <p data-sr="Pravi dobavljač javlja da uplata nije stigla uprkos dospeću." data-en="The real supplier reports non-payment despite the due date.">Pravi dobavljač javlja da uplata nije stigla uprkos dospeću.</p>
    <ul class="bullets">
      <li data-sr="Upoređivanje IBAN-a otkriva razliku." data-en="IBAN comparison reveals the difference.">Upoređivanje IBAN-a otkriva razliku.</li>
      <li data-sr="Dobavljač nikada nije menjao račun u tom periodu." data-en="The supplier never changed accounts in that period.">Dobavljač nikada nije menjao račun u tom periodu.</li>
      <li data-sr="Lažni poziv se ne može povezati sa stvarnim brojem kontakta." data-en="The fake call cannot be tied to the real contact number.">Lažni poziv se ne može povezati sa stvarnim brojem kontakta.</li>
    </ul>
    <div class="callout"><strong data-sr="Potvrđeno je da je uplata otišla na pogrešan primalac.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Potvrđeno je da je uplata otišla na pogrešan primalac." data-en="It is confirmed payment went to the wrong recipient.">Potvrđeno je da je uplata otišla na pogrešan primalac.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 5 — Istraga i banka" data-en="Phase 5 — Investigation and bank">Faza 5 — Istraga i banka</h3>
    <p data-sr="Firma prijavljuje incident banci i traži povrat sredstava; uspeh zavisi od brzine i pravila mreže." data-en="The company reports the incident to the bank and requests recovery; success depends on speed and network rules.">Firma prijavljuje incident banci i traži povrat sredstava; uspeh zavisi od brzine i pravila mreže.</p>
    <ul class="bullets">
      <li data-sr="Sačuvaju se snimci fakture, imejla i evidencija poziva." data-en="Invoice copies, emails, and call logs are preserved.">Sačuvaju se snimci fakture, imejla i evidencija poziva.</li>
      <li data-sr="IT pregleda domen i zaglavlja poruka." data-en="IT reviews domain and message headers.">IT pregleda domen i zaglavlja poruka.</li>
      <li data-sr="Pravni tim dokumentuje štetu za osiguranje ako postoji polisa." data-en="Legal documents the loss for insurance if a policy exists.">Pravni tim dokumentuje štetu za osiguranje ako postoji polisa.</li>
    </ul>
    <div class="callout"><strong data-sr="Prijava je podneta sa kompletnim dokazima u prvih sati otkrivanja.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Prijava je podneta sa kompletnim dokazima u prvih sati otkrivanja." data-en="A report is filed with complete evidence in the first hours of discovery.">Prijava je podneta sa kompletnim dokazima u prvih sati otkrivanja.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching at this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="payment-diversion.html" data-sr="Preusmerenje plaćanja." data-en="Payment diversion.">Preusmerenje plaćanja.</a></li>
        <li><a href="ceo-fraud.html" data-sr="CEO prevara — ako je kombinovano sa internim pritiskom." data-en="CEO fraud — if combined with internal pressure.">CEO prevara — ako je kombinovano sa internim pritiskom.</a></li>
      </ul>
    </div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 6 — Procedura koja štiti" data-en="Phase 6 — Protective procedure">Faza 6 — Procedura koja štiti</h3>
    <p data-sr="Uvedite obaveznu proveru IBAN-a sa prethodnom isplatom, digitalni potpis promene računa, i zabranu da telefon bude jedini dokaz." data-en="Require mandatory IBAN checks against a prior payment, a digitally signed account change, and ban phone-only proof.">Uvedite obaveznu proveru IBAN-a sa prethodnom isplatom, digitalni potpis promene računa, i zabranu da telefon bude jedini dokaz.</p>
    <ul class="bullets">
      <li data-sr="Kontakt broj za dobavljača uzimate iz ugovora, ne iz poslednjeg imejla." data-en="Take supplier phone numbers from the contract, not the latest email.">Kontakt broj za dobavljača uzimate iz ugovora, ne iz poslednjeg imejla.</li>
      <li data-sr="Za promenu računa tražite dva nezavisna kontakta u firmi dobavljača." data-en="For account changes require two independent contacts at the supplier.">Za promenu računa tražite dva nezavisna kontakta u firmi dobavljača.</li>
      <li data-sr="Označite u ERP-u prvu uplatu na novi IBAN kao visok rizik." data-en="Flag the first payment to a new IBAN as high risk in ERP.">Označite u ERP-u prvu uplatu na novi IBAN kao visok rizik.</li>
      <li data-sr="Obučite tim da sumnja na glas koji potvrđuje hitnu promenu." data-en="Train the team to distrust voice confirming urgent changes.">Obučite tim da sumnja na glas koji potvrđuje hitnu promenu.</li>
    </ul>
    <div class="callout"><strong data-sr="Politika dobavljačkih plaćanja je ažurirana i testirana.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Politika dobavljačkih plaćanja je ažurirana i testirana." data-en="The supplier payment policy is updated and tested.">Politika dobavljačkih plaćanja je ažurirana i testirana.</span></div>
  </article>
</section>

<section class="content-section">
  <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
  <ul class="bullets">
    <li data-sr="Novi IBAN na fakturi bez priloženog potpisanog aneksa." data-en="A new IBAN on the invoice without a signed amendment.">Novi IBAN na fakturi bez priloženog potpisanog aneksa.</li>
    <li data-sr="Telefonska potvrda promene računa." data-en="Phone-only confirmation of a bank change.">Telefonska potvrda promene računa.</li>
    <li data-sr="Hitnost koja krši vaš interni rok odobrenja." data-en="Urgency that breaks your internal approval timeline.">Hitnost koja krši vaš interni rok odobrenja.</li>
    <li data-sr="Glas koji se ne slaže sa akcentom ili frazama koje znate." data-en="A voice that does not match accent or phrases you know.">Glas koji se ne slaže sa akcentom ili frazama koje znate.</li>
    <li data-sr="Imejl Reply-To različit od From domena." data-en="Reply-To different from the From domain.">Imejl Reply-To različit od From domena.</li>
    <li data-sr="Lažni domen sa crticom ili dodatnim slovom." data-en="A fake domain with a hyphen or extra letter.">Lažni domen sa crticom ili dodatnim slovom.</li>
    <li data-sr="Zahtev da ignorišete standardnu proveru jer je direktor odobrio." data-en="A request to skip standard checks because the director approved.">Zahtev da ignorišete standardnu proveru jer je direktor odobrio.</li>
    <li data-sr="Faktura identična staroj osim IBAN polja." data-en="An invoice identical to an old one except the IBAN field.">Faktura identična staroj osim IBAN polja.</li>
    <li data-sr="Poziv sa skrivenim brojem ili međunarodnim pozivom za lokalnog dobavljača." data-en="A call from a hidden or international number for a local supplier.">Poziv sa skrivenim brojem ili međunarodnim pozivom za lokalnog dobavljača.</li>
    <li data-sr="Dobavljač tvrdi da nije slao imejl sa promenom, ali vi ste ga primili." data-en="The supplier says they did not send a change email, but you received one.">Dobavljač tvrdi da nije slao imejl sa promenom, ali vi ste ga primili.</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
  <ol class="steps">
    <li data-sr="Da li se IBAN poklapa sa poslednjom isplatom istom dobavljaču?" data-en="Does the IBAN match the last payment to the same supplier?">Da li se IBAN poklapa sa poslednjom isplatom istom dobavljaču?</li>
    <li data-sr="Da li postoji potpisan aneks o promeni računa?" data-en="Is there a signed amendment for the account change?">Da li postoji potpisan aneks o promeni računa?</li>
    <li data-sr="Da li možete pozvati dobavljača na broj iz ugovora, ne iz fakture?" data-en="Can you call the supplier on the contract number, not from the invoice?">Da li možete pozvati dobavljača na broj iz ugovora, ne iz fakture?</li>
    <li data-sr="Da li druga osoba u finansijama nezavisno proverava IBAN?" data-en="Does a second finance person independently verify the IBAN?">Da li druga osoba u finansijama nezavisno proverava IBAN?</li>
    <li data-sr="Da li je domen imejla identičan prethodnoj korespondenciji?" data-en="Is the email domain identical to prior correspondence?">Da li je domen imejla identičan prethodnoj korespondenciji?</li>
    <li data-sr="Da li je faktura ušla kroz isti kanal kao i ranije?" data-en="Did the invoice arrive through the same channel as before?">Da li je faktura ušla kroz isti kanal kao i ranije?</li>
    <li data-sr="Da li ERP prikazuje upozorenje za novog primaoca?" data-en="Does ERP show a warning for a new payee?">Da li ERP prikazuje upozorenje za novog primaoca?</li>
    <li data-sr="Da li biste platili ovu fakturu da je šef finansija na odmoru?" data-en="Would you pay this invoice if the CFO were on leave?">Da li biste platili ovu fakturu da je šef finansija na odmoru?</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Checklista" data-en="Checklist">Checklista</h2>
  <ul class="bullets">
    <li data-sr="Da li imamo arhivu IBAN po dobavljaču?" data-en="Do we archive IBANs per supplier?">Da li imamo arhivu IBAN po dobavljaču?</li>
    <li data-sr="Da li je promena računa uvek pisana?" data-en="Is account change always in writing?">Da li je promena računa uvek pisana?</li>
    <li data-sr="Da li znamo ko sme menjati podatke primaoca?" data-en="Do we know who may change payee details?">Da li znamo ko sme menjati podatke primaoca?</li>
    <li data-sr="Da li imamo prag za dodatnu proveru iznosa?" data-en="Do we have an amount threshold for extra checks?">Da li imamo prag za dodatnu proveru iznosa?</li>
    <li data-sr="Da li čitamo DNS i SPF za nove dobavljačke domene?" data-en="Do we read DNS/SPF for new supplier domains?">Da li čitamo DNS i SPF za nove dobavljačke domene?</li>
    <li data-sr="Da li je telefon sekundarni, ne primarni kanal potvrde?" data-en="Is phone secondary, not primary, for confirmation?">Da li je telefon sekundarni, ne primarni kanal potvrde?</li>
    <li data-sr="Da li imamo listu kontakta lica po dobavljaču?" data-en="Do we have a named contact list per supplier?">Da li imamo listu kontakta lica po dobavljaču?</li>
    <li data-sr="Da li obučavamo zaposlene o AI glasu?" data-en="Do we train staff on AI voice?">Da li obučavamo zaposlene o AI glasu?</li>
    <li data-sr="Da li je prva uplata na novi IBAN odložena jedan dan?" data-en="Is the first payment to a new IBAN delayed one day?">Da li je prva uplata na novi IBAN odložena jedan dan?</li>
    <li data-sr="Da li proveravamo ime primaoca banke kod banke?" data-en="Do we verify payee name with the bank?">Da li proveravamo ime primaoca banke kod banke?</li>
    <li data-sr="Da li imamo interni whistleblower kanal?" data-en="Do we have an internal whistleblower channel?">Da li imamo interni whistleblower kanal?</li>
    <li data-sr="Da li su svi šabloni faktura zaštićeni od neovlašćenih izmena?" data-en="Are invoice templates protected from unauthorized edits?">Da li su svi šabloni faktura zaštićeni od neovlašćenih izmena?</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Ako sumnja krene" data-en="If suspicion starts">Ako sumnja krene</h2>
  <ol class="steps">
    <li data-sr="Zaustavite uplatu do završetka provere." data-en="Stop payment until verification is complete.">Zaustavite uplatu do završetka provere.</li>
    <li data-sr="Uporedite IBAN sa poslednjom potpisanom listom ili izvodom." data-en="Compare the IBAN to the last signed list or statement.">Uporedite IBAN sa poslednjom potpisanom listom ili izvodom.</li>
    <li data-sr="Pozovite dobavljača na fiksni broj iz ugovora." data-en="Call the supplier on the contract landline.">Pozovite dobavljača na fiksni broj iz ugovora.</li>
    <li data-sr="Ne koristite broj koji vam je dao pozivalac." data-en="Do not use a number the caller gave you.">Ne koristite broj koji vam je dao pozivalac.</li>
    <li data-sr="Prosledite imejl IT za analizu zaglavlja." data-en="Forward the email to IT for header analysis.">Prosledite imejl IT za analizu zaglavlja.</li>
    <li data-sr="Obavestite pravni tim ako je iznos visok." data-en="Notify legal if the amount is high.">Obavestite pravni tim ako je iznos visok.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
  <ul class="bullets">
    <li data-sr="Da li je uplata već proknjižena?" data-en="Is the payment already posted?">Da li je uplata već proknjižena?</li>
    <li data-sr="Da li imaju kopiju fakture i imejla?" data-en="Do they have a copy of the invoice and email?">Da li imaju kopiju fakture i imejla?</li>
    <li data-sr="Da li je IBAN ikada ranije korišćen za tog dobavljača?" data-en="Was the IBAN ever used before for that supplier?">Da li je IBAN ikada ranije korišćen za tog dobavljača?</li>
    <li data-sr="Da li je neko telefonom potvrdio promenu?" data-en="Did someone confirm the change by phone?">Da li je neko telefonom potvrdio promenu?</li>
  </ul>
  <p data-sr="Rečenice koje rade:" data-en="Sentences that help:">Rečenice koje rade:</p>
  <ul class="bullets">
    <li data-sr="Promena računa bez pisanog dokumenta se ne plaća." data-en="Account changes without a written document are not paid.">Promena računa bez pisanog dokumenta se ne plaća.</li>
    <li data-sr="Hajde da nađemo stari IBAN u izvodu i uporedimo ga sa fakturom." data-en="Let's find the old IBAN on a statement and compare it to the invoice.">Hajde da nađemo stari IBAN u izvodu i uporedimo ga sa fakturom.</li>
    <li data-sr="Glas na telefonu nije zamena za potpis dobavljača." data-en="Voice on the phone is not a substitute for supplier signature.">Glas na telefonu nije zamena za potpis dobavljača.</li>
    <li data-sr="Banka treba odmah da zna ako je uplata sumnjiva." data-en="The bank should know immediately if the payment is suspicious.">Banka treba odmah da zna ako je uplata sumnjiva.</li>
  </ul>
</section>
`
};
