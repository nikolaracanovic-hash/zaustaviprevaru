if (!window.SCAM_CONTENT) window.SCAM_CONTENT = {};
window.SCAM_CONTENT["authorized-push-payment-scam"] = {
  raw_html: `
<section class="content-section">
  <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
  <p data-sr="Kod autorizovanog push plaćanja (APP) vi sami potvrdite uplatu u mobilnoj aplikaciji banke. Prevarant vas uvodi kroz priču o hakeru, policiji ili blokadi računa da biste poslali novac na njihov račun uz uverenje da je to sigurno skladište." data-en="With authorized push payment (APP) you confirm a transfer in your bank's mobile app. The scammer walks you through a story about hackers, police, or account blocks so you send money to their account, told it is a safe holding account.">Kod autorizovanog push plaćanja (APP) vi sami potvrdite uplatu u mobilnoj aplikaciji banke. Prevarant vas uvodi kroz priču o hakeru, policiji ili blokadi računa da biste poslali novac na njihov račun uz uverenje da je to sigurno skladište.</p>
  <p data-sr="Pošto ste vi potvrdili transakciju, banka može tretirati uplatu kao ovlašćenu, što otežava povrat." data-en="Because you confirmed the transaction, the bank may treat the transfer as authorized, which complicates recovery.">Pošto ste vi potvrdili transakciju, banka može tretirati uplatu kao ovlašćenu, što otežava povrat.</p>
</section>

<section class="content-section">
  <h2 data-sr="Hronološki tok (faze)" data-en="Timeline (phases)">Hronološki tok (faze)</h2>

  <article class="phase">
    <h3 data-sr="Faza 1 — Prvi kontakt" data-en="Phase 1 — First contact">Faza 1 — Prvi kontakt</h3>
    <p data-sr="Poziv, SMS ili poruka u aplikaciji tvrde da ste u opasnosti ili da je račun kompromitovan. Broj može izgledati kao banka." data-en="A call, SMS, or in-app message claims you are at risk or the account is compromised. The number may look like the bank.">Poziv, SMS ili poruka u aplikaciji tvrde da ste u opasnosti ili da je račun kompromitovan. Broj može izgledati kao banka.</p>
    <ul class="bullets">
      <li data-sr="Govoreći vas uvode u hitnost bez pauze za razmišljanje." data-en="The speaker creates urgency without pause to think.">Govoreći vas uvode u hitnost bez pauze za razmišljanje.</li>
      <li data-sr="Traže da ostanete na liniji tokom celog procesa." data-en="They ask you to stay on the line for the whole process.">Traže da ostanete na liniji tokom celog procesa.</li>
      <li data-sr="Može se pominjati policija ili bezbednosni tim banke." data-en="Police or the bank security team may be mentioned.">Može se pominjati policija ili bezbednosni tim banke.</li>
      <li data-sr="Lažni incident zvuči konkretno sa izmišljenim kodom slučaja." data-en="The fake incident sounds concrete with a made-up case code.">Lažni incident zvuči konkretno sa izmišljenim kodom slučaja.</li>
    </ul>
    <div class="callout"><strong data-sr="Meta veruje da govori sa institucijom zbog tona i hitnosti.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Meta veruje da govori sa institucijom zbog tona i hitnosti." data-en="The target believes they speak to an institution because of tone and urgency.">Meta veruje da govori sa institucijom zbog tona i hitnosti.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 2 — Uputstvo u aplikaciji" data-en="Phase 2 — In-app coaching">Faza 2 — Uputstvo u aplikaciji</h3>
    <p data-sr="Prevarant korak po korak govori šta da kliknete u bankarskoj aplikaciji: novi prenos, novi primalac, iznos." data-en="The scammer step-by-step tells you what to tap in the banking app: new transfer, new recipient, amount.">Prevarant korak po korak govori šta da kliknete u bankarskoj aplikaciji: novi prenos, novi primalac, iznos.</p>
    <ul class="bullets">
      <li data-sr="Tvrdi da je to privremeni transfer na zaštićen račun banke." data-en="They claim it is a temporary transfer to a protected bank account.">Tvrdi da je to privremeni transfer na zaštićen račun banke.</li>
      <li data-sr="Može tražiti da pročitate naglas kodove koje vidite, pod izgovorom verifikacije." data-en="They may ask you to read aloud codes you see, under the guise of verification.">Može tražiti da pročitate naglas kodove koje vidite, pod izgovorom verifikacije.</li>
      <li data-sr="Kaže da ne smete da prekinete poziv jer bi transfer pao." data-en="They say you must not hang up or the transfer will fail.">Kaže da ne smete da prekinete poziv jer bi transfer pao.</li>
      <li data-sr="Veliki iznosi se dele u više manjih uplata radi zaobilaska limita." data-en="Large sums split into smaller transfers to bypass limits.">Veliki iznosi se dele u više manjih uplata radi zaobilaska limita.</li>
    </ul>
    <div class="callout"><strong data-sr="Korisnik je uneo podatke primaoca koje mu je dao pozivalac.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Korisnik je uneo podatke primaoca koje mu je dao pozivalac." data-en="The user entered payee details given by the caller.">Korisnik je uneo podatke primaoca koje mu je dao pozivalac.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching at this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="fake-call-scam.html" data-sr="Lažni pozivi — isti kanal telefona." data-en="Fake calls — same phone channel.">Lažni pozivi — isti kanal telefona.</a></li>
        <li><a href="payment-diversion.html" data-sr="Preusmerenje plaćanja — sličan cilj lažnog primaoca." data-en="Payment diversion — similar fake payee goal.">Preusmerenje plaćanja — sličan cilj lažnog primaoca.</a></li>
      </ul>
    </div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 3 — Potvrda (push)" data-en="Phase 3 — Confirmation (push)">Faza 3 — Potvrda (push)</h3>
    <p data-sr="Korisnik unese PIN, biometriju ili odobri notifikaciju. Banka beleži da je korisnik svesno potvrdio." data-en="The user enters PIN, biometrics, or approves a notification. The bank records that the user knowingly confirmed.">Korisnik unese PIN, biometriju ili odobri notifikaciju. Banka beleži da je korisnik svesno potvrdio.</p>
    <ul class="bullets">
      <li data-sr="Upozorenje u aplikaciji može biti ignorisano jer pozivalac tumači tekst." data-en="An in-app warning may be ignored because the caller interprets the text.">Upozorenje u aplikaciji može biti ignorisano jer pozivalac tumači tekst.</li>
      <li data-sr="Više uzastopnih potvrda u kratkom roku." data-en="Multiple confirmations in a short time.">Više uzastopnih potvrda u kratkom roku.</li>
      <li data-sr="Primalac je fizičko lice ili firma koja nije vama poznata." data-en="The recipient is an individual or firm unknown to you.">Primalac je fizičko lice ili firma koja nije vama poznata.</li>
    </ul>
    <div class="callout"><strong data-sr="Novac je otpremljen sa naloga korisnika.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Novac je otpremljen sa naloga korisnika." data-en="Money has left the user's account.">Novac je otpremljen sa naloga korisnika.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 4 — Dalje pritiske" data-en="Phase 4 — Further pressure">Faza 4 — Dalje pritiske</h3>
    <p data-sr="Ako ostane sredstva, traže još jednu finalnu uplatu da bi se prva oslobodila." data-en="If funds remain, they ask for one more final payment to release the first.">Ako ostane sredstva, traže još jednu finalnu uplatu da bi se prva oslobodila.</p>
    <ul class="bullets">
      <li data-sr="Isti pozivalac ili novi službenik nastavlja priču." data-en="The same caller or a new officer continues the story.">Isti pozivalac ili novi službenik nastavlja priču.</li>
      <li data-sr="Uvode krivicu da ste pogrešno kucali pa morate ispravku." data-en="They introduce guilt that you typed wrong and must correct.">Uvode krivicu da ste pogrešno kucali pa morate ispravku.</li>
      <li data-sr="Traže da obrišete istoriju poruka ili aplikacije." data-en="They ask you to delete message history or apps.">Traže da obrišete istoriju poruka ili aplikacije.</li>
    </ul>
    <div class="callout"><strong data-sr="Žrtva je poslala više od jedne uplate u istom danu.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Žrtva je poslala više od jedne uplate u istom danu." data-en="The victim sent more than one payment the same day.">Žrtva je poslala više od jedne uplate u istom danu.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 5 — Otkrivanje" data-en="Phase 5 — Discovery">Faza 5 — Otkrivanje</h3>
    <p data-sr="Korisnik zove pravu banku ili policiju i saznaje da poziv nije bio autentičan." data-en="The user calls the real bank or police and learns the call was not authentic.">Korisnik zove pravu banku ili policiju i saznaje da poziv nije bio autentičan.</p>
    <ul class="bullets">
      <li data-sr="Istorija poziva pokazuje strani ili skriveni broj." data-en="Call history shows a foreign or hidden number.">Istorija poziva pokazuje strani ili skriveni broj.</li>
      <li data-sr="Banka otvara internu istragu ali ne garantuje povrat." data-en="The bank opens an internal investigation but does not guarantee return.">Banka otvara internu istragu ali ne garantuje povrat.</li>
      <li data-sr="Korisnik shvata da je primalac bio prevarant." data-en="The user realizes the payee was the scammer.">Korisnik shvata da je primalac bio prevarant.</li>
    </ul>
    <div class="callout"><strong data-sr="Potvrđeno je da institucija nije naručila transfer.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Potvrđeno je da institucija nije naručila transfer." data-en="It is confirmed the institution did not order the transfer.">Potvrđeno je da institucija nije naručila transfer.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching at this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="recovery-scam.html" data-sr="Recovery — lažni advokat posle gubitka." data-en="Recovery scam — fake lawyer after loss.">Recovery — lažni advokat posle gubitka.</a></li>
        <li><a href="account-takeover.html" data-sr="ATO — ako su traženi i kodovi za nalog." data-en="Account takeover — if account codes were also requested.">ATO — ako su traženi i kodovi za nalog.</a></li>
      </ul>
    </div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 6 — Prijava i štit" data-en="Phase 6 — Reporting and shield">Faza 6 — Prijava i štit</h3>
    <p data-sr="Prijavite incident banki, zatražite blokadu daljih transakcija, promenite lozinke, i sačuvajte snimke aplikacije. Razmotrite prijavu policiji." data-en="Report the incident to the bank, request blocking further transactions, change passwords, and save app screenshots. Consider police reporting.">Prijavite incident banki, zatražite blokadu daljih transakcija, promenite lozinke, i sačuvajte snimke aplikacije. Razmotrite prijavu policiji.</p>
    <ul class="bullets">
      <li data-sr="Zatražite pisan odgovor banke o ishodu žalbe." data-en="Ask the bank for a written outcome of your complaint.">Zatražite pisan odgovor banke o ishodu žalbe.</li>
      <li data-sr="Aktivirajte dodatna upozorenja za transfere ako ih banka nudi." data-en="Enable extra transfer alerts if the bank offers them.">Aktivirajte dodatna upozorenja za transfere ako ih banka nudi.</li>
      <li data-sr="Dogovorite kućno pravilo: nikakvi transferi uz aktivni poziv trećeg lica." data-en="Set a household rule: no transfers while on a live call with a third party.">Dogovorite kućno pravilo: nikakvi transferi uz aktivni poziv trećeg lica.</li>
      <li data-sr="Ne odgovarajte na povratne pozive koji traže još podataka." data-en="Do not answer return calls asking for more data.">Ne odgovarajte na povratne pozive koji traže još podataka.</li>
    </ul>
    <div class="callout"><strong data-sr="Nalog je zaštićen od daljih neovlašćenih transakcija koliko to alati banke dozvoljavaju.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Nalog je zaštićen od daljih neovlašćenih transakcija koliko to alati banke dozvoljavaju." data-en="The account is protected from further unauthorized transactions as far as bank tools allow.">Nalog je zaštićen od daljih neovlašćenih transakcija koliko to alati banke dozvoljavaju.</span></div>
  </article>
</section>

<section class="content-section">
  <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
  <ul class="bullets">
    <li data-sr="Bilo ko traži da ostanete na liniji dok plaćate." data-en="Anyone asks you to stay on the line while you pay.">Bilo ko traži da ostanete na liniji dok plaćate.</li>
    <li data-sr="Transfer na račun koji vam nije poznat kao vaša banka." data-en="Transfer to an account you do not recognize as your bank.">Transfer na račun koji vam nije poznat kao vaša banka.</li>
    <li data-sr="Priča o sigurnom računu ili skladištu za vaš novac." data-en="A story about a safe account or vault for your money.">Priča o sigurnom računu ili skladištu za vaš novac.</li>
    <li data-sr="Zabrana da proverite broj pozivom na poleđini kartice." data-en="A ban on verifying the number by calling the card-back number.">Zabrana da proverite broj pozivom na poleđini kartice.</li>
    <li data-sr="Zahtev da prebacite sve što imate na računu." data-en="A request to move everything you have in the account.">Zahtev da prebacite sve što imate na računu.</li>
    <li data-sr="Više uzastopnih manjih uplata umesto jedne." data-en="Several small back-to-back payments instead of one.">Više uzastopnih manjih uplata umesto jedne.</li>
    <li data-sr="Lažni policajac koji traži novac telefonom." data-en="A fake police officer asking for money by phone.">Lažni policajac koji traži novac telefonom.</li>
    <li data-sr="SMS sa linkom ka lažnoj aplikaciji banke." data-en="An SMS with a link to a fake bank app.">SMS sa linkom ka lažnoj aplikaciji banke.</li>
    <li data-sr="Tvrda optužba da ste učestvovali u kriminalu bez pisanog poziva." data-en="A hard accusation you took part in crime without a written summons.">Tvrda optužba da ste učestvovali u kriminalu bez pisanog poziva.</li>
    <li data-sr="Nagrada ili povrat novca ako prvo platite taksu." data-en="A reward or refund if you pay a fee first.">Nagrada ili povrat novca ako prvo platite taksu.</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
  <ol class="steps">
    <li data-sr="Da li ste prekinuli poziv i nazvali broj sa zadnje strane kartice?" data-en="Did you hang up and dial the number on the back of your card?">Da li ste prekinuli poziv i nazvali broj sa zadnje strane kartice?</li>
    <li data-sr="Da li primalac uplatnice postoji u vašoj adresnoj knjizi banke od ranije?" data-en="Does the payee exist in your bank address book from before?">Da li primalac uplatnice postoji u vašoj adresnoj knjizi banke od ranije?</li>
    <li data-sr="Da li banka ikada traži transfer na lični račun službenika?" data-en="Would your bank ever ask for a transfer to an employee's personal account?">Da li banka ikada traži transfer na lični račun službenika?</li>
    <li data-sr="Da li možete sačekati jedan sat i ponovo pročitati upozorenje u aplikaciji?" data-en="Can you wait one hour and reread the warning in the app?">Da li možete sačekati jedan sat i ponovo pročitati upozorenje u aplikaciji?</li>
    <li data-sr="Da li neko traži da fotografišete ekran sa kodom za potvrdu?" data-en="Is someone asking you to photograph the screen with a confirmation code?">Da li neko traži da fotografišete ekran sa kodom za potvrdu?</li>
    <li data-sr="Da li je jezik previše agresivan za pravu banku?" data-en="Is the language too aggressive for a real bank?">Da li je jezik previše agresivan za pravu banku?</li>
    <li data-sr="Da li biste ovaj transfer objasnili članu porodice bez stida?" data-en="Would you explain this transfer to a family member without embarrassment?">Da li biste ovaj transfer objasnili članu porodice bez stida?</li>
    <li data-sr="Da li postoji pisani dokument sa pečatom koji traži isti novčani korak?" data-en="Is there a stamped written document requesting the same money move?">Da li postoji pisani dokument sa pečatom koji traži isti novčani korak?</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Checklista" data-en="Checklist">Checklista</h2>
  <ul class="bullets">
    <li data-sr="Da li sam na telefonu sa nepoznatim brojem tokom plaćanja?" data-en="Am I on the phone with an unknown number while paying?">Da li sam na telefonu sa nepoznatim brojem tokom plaćanja?</li>
    <li data-sr="Da li sam ikada uneo podatke primaoca po usmenom diktatu?" data-en="Have I ever entered payee details from verbal dictation?">Da li sam ikada uneo podatke primaoca po usmenom diktatu?</li>
    <li data-sr="Da li znam da policija ne traži novac telefonom?" data-en="Do I know police do not ask for money by phone?">Da li znam da policija ne traži novac telefonom?</li>
    <li data-sr="Da li sam proverio primalaca u izvodu pre potvrde?" data-en="Did I verify the recipient in the statement before confirming?">Da li sam proverio primalaca u izvodu pre potvrde?</li>
    <li data-sr="Da li aplikacija prikazuje upozorenje koje ignorišem?" data-en="Does the app show a warning I am ignoring?">Da li aplikacija prikazuje upozorenje koje ignorišem?</li>
    <li data-sr="Da li je neko rekao da ne govorim porodici?" data-en="Did someone tell me not to tell family?">Da li je neko rekao da ne govorim porodici?</li>
    <li data-sr="Da li je hitnost merena u minutima?" data-en="Is urgency measured in minutes?">Da li je hitnost merena u minutima?</li>
    <li data-sr="Da li sam već poslao jednu uplatu danas po istoj priči?" data-en="Have I already sent one payment today under the same story?">Da li sam već poslao jednu uplatu danas po istoj priči?</li>
    <li data-sr="Da li bih mogao da odložim do sutra?" data-en="Could I delay until tomorrow?">Da li bih mogao da odložim do sutra?</li>
    <li data-sr="Da li znam puno ime i adresu primaoca?" data-en="Do I know the payee's full name and address?">Da li znam puno ime i adresu primaoca?</li>
    <li data-sr="Da li sam ikada video ovaj IBAN u pravoj fakturi?" data-en="Have I ever seen this IBAN on a real invoice?">Da li sam ikada video ovaj IBAN u pravoj fakturi?</li>
    <li data-sr="Da li imam drugi kanal da potvrdim hitan zahtev?" data-en="Do I have another channel to confirm an urgent request?">Da li imam drugi kanal da potvrdim hitan zahtev?</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Ako sumnja krene" data-en="If suspicion starts">Ako sumnja krene</h2>
  <ol class="steps">
    <li data-sr="Stavite telefon na stranu bez gašenja poziva i nazovite banku sa zvaničnog broja." data-en="Set the phone aside without ending the call and call the bank from the official number.">Stavite telefon na stranu bez gašenja poziva i nazovite banku sa zvaničnog broja.</li>
    <li data-sr="Ne potvrđujte transakciju dok ne završite taj drugi poziv." data-en="Do not confirm the transaction until you finish that second call.">Ne potvrđujte transakciju dok ne završite taj drugi poziv.</li>
    <li data-sr="Ako ste već poslali, odmah prijavite banki tačan iznos i vreme." data-en="If you already sent, immediately report the exact amount and time to the bank.">Ako ste već poslali, odmah prijavite banki tačan iznos i vreme.</li>
    <li data-sr="Sačuvajte snimke ekrana i istoriju poziva." data-en="Save screenshots and call history.">Sačuvajte snimke ekrana i istoriju poziva.</li>
    <li data-sr="Promenite lozinke za banku ako ste delili bilo koje kodove." data-en="Change bank passwords if you shared any codes.">Promenite lozinke za banku ako ste delili bilo koje kodove.</li>
    <li data-sr="Razgovarajte sa nekim ko nije u panici pre sledećeg koraka." data-en="Talk to someone who is not panicking before the next step.">Razgovarajte sa nekim ko nije u panici pre sledećeg koraka.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
  <ul class="bullets">
    <li data-sr="Da li su na telefonu dok rade u bankovnoj aplikaciji?" data-en="Are they on the phone while using the banking app?">Da li su na telefonu dok rade u bankovnoj aplikaciji?</li>
    <li data-sr="Da li im je neko rekao da ne prekidaju poziv?" data-en="Were they told not to hang up?">Da li im je neko rekao da ne prekidaju poziv?</li>
    <li data-sr="Da li znaju ime i adresu primaoca?" data-en="Do they know the payee name and address?">Da li znaju ime i adresu primaoca?</li>
    <li data-sr="Da li su već poslali novac?" data-en="Have they already sent money?">Da li su već poslali novac?</li>
  </ul>
  <p data-sr="Rečenice koje rade:" data-en="Sentences that help:">Rečenice koje rade:</p>
  <ul class="bullets">
    <li data-sr="Prava banka neće da te vodi korak po korak kroz prenos na tuđi račun tokom poziva." data-en="A real bank will not walk you step by step through a transfer to someone else's account during a call.">Prava banka neće da te vodi korak po korak kroz prenos na tuđi račun tokom poziva.</li>
    <li data-sr="Hajde da prekinemo poziv i nazovemo broj sa poleđine kartice zajedno." data-en="Let's end the call and dial the card-back number together.">Hajde da prekinemo poziv i nazovemo broj sa poleđine kartice zajedno.</li>
    <li data-sr="Policija ne rešava kazne ili depozite preko instant uplate." data-en="Police do not settle fines or deposits via instant payment.">Policija ne rešava kazne ili depozite preko instant uplate.</li>
    <li data-sr="Ako si već poslao, svaki sledeći minut za prijavu banci je važan." data-en="If you already sent, every next minute for reporting to the bank matters.">Ako si već poslao, svaki sledeći minut za prijavu banci je važan.</li>
  </ul>
</section>
`
};
