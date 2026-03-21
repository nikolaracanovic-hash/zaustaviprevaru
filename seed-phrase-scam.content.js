if (!window.SCAM_CONTENT) window.SCAM_CONTENT = {};
window.SCAM_CONTENT["seed-phrase-scam"] = {
  raw_html: `
<section class="content-section">
  <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
  <p data-sr="Seed fraza (recovery phrase) je master ključ za kripto novčanik. Ko je ima, može da prebaci sredstva bez vaše lozinke na aplikaciji. Prevarant je uvek u fazonu provera, sinhronizacija, deblokada ili nagrada." data-en="The seed phrase (recovery phrase) is the master key to a crypto wallet. Whoever has it can move funds without your app password. The scammer frames it as verification, sync, unlock, or a reward.">Seed fraza (recovery phrase) je master ključ za kripto novčanik. Ko je ima, može da prebaci sredstva bez vaše lozinke na aplikaciji. Prevarant je uvek u fazonu provera, sinhronizacija, deblokada ili nagrada.</p>
  <p data-sr="Nijedan pravi tim novčanika, berze ili podrške ne traži celu frazu u četu, imejlu ili veb formi." data-en="No real wallet, exchange, or support team asks for the full phrase in chat, email, or a web form.">Nijedan pravi tim novčanika, berze ili podrške ne traži celu frazu u četu, imejlu ili veb formi.</p>
</section>

<section class="content-section">
  <h2 data-sr="Hronološki tok (faze)" data-en="Timeline (phases)">Hronološki tok (faze)</h2>

  <article class="phase">
    <h3 data-sr="Faza 1 — Prvi kontakt" data-en="Phase 1 — First contact">Faza 1 — Prvi kontakt</h3>
    <p data-sr="Meta dobija poruku, oglas, ili obaveštenje o problemu sa nalogom. Kanal može biti društvena mreža, imejl, SMS ili lažna stranica za podršku." data-en="The target gets a message, ad, or account problem notification. The channel may be social media, email, SMS, or a fake support page.">Meta dobija poruku, oglas, ili obaveštenje o problemu sa nalogom. Kanal može biti društvena mreža, imejl, SMS ili lažna stranica za podršku.</p>
    <ul class="bullets">
      <li data-sr="Poruka izgleda hitno i traži da odmah otvorite link ili odgovorite u četu." data-en="The message looks urgent and asks you to open a link or reply in chat immediately.">Poruka izgleda hitno i traži da odmah otvorite link ili odgovorite u četu.</li>
      <li data-sr="Pošiljalac koristi logo poznatog novčanika ili berze bez zvaničnog domena." data-en="The sender uses a known wallet or exchange logo without an official domain.">Pošiljalac koristi logo poznatog novčanika ili berze bez zvaničnog domena.</li>
      <li data-sr="Ponekad postoji mali isplata ili nagrada da bi se povezalo poverenje pre traženja fraze." data-en="Sometimes a small payout or reward is used to build trust before the phrase is requested.">Ponekad postoji mali isplata ili nagrada da bi se povezalo poverenje pre traženja fraze.</li>
      <li data-sr="Link vodi na sajt koji vizuelno liči na podršku ali domen nije identičan zvaničnom." data-en="The link leads to a site that looks like support but the domain is not identical to the official one.">Link vodi na sajt koji vizuelno liči na podršku ali domen nije identičan zvaničnom.</li>
    </ul>
    <div class="callout"><strong data-sr="Meta je kliknula na link ili započela čet sa agentom.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Meta je kliknula na link ili započela čet sa agentom." data-en="The target clicked a link or started a chat with an agent.">Meta je kliknula na link ili započela čet sa agentom.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 2 — Izgovor" data-en="Phase 2 — Pretext">Faza 2 — Izgovor</h3>
    <p data-sr="Prevarant objašnjava zašto je seed fraza neophodna: navodna haker aktivnost, ažuriranje, migracija na novi uređaj, ili refund." data-en="The scammer explains why the seed phrase is supposedly necessary: claimed hack activity, upgrade, migration to a new device, or a refund.">Prevarant objašnjava zašto je seed fraza neophodna: navodna haker aktivnost, ažuriranje, migracija na novi uređaj, ili refund.</p>
    <ul class="bullets">
      <li data-sr="Jezik je tehnički dovoljno ubedljiv da zbuni osobu koja nije čula za seed etiku." data-en="The wording is technical enough to confuse someone who has not heard seed safety basics.">Jezik je tehnički dovoljno ubedljiv da zbuni osobu koja nije čula za seed etiku.</li>
      <li data-sr="Pritisak da se završi brzo, pre nego što proverite zvaničnu dokumentaciju." data-en="Pressure to finish quickly before you check official documentation.">Pritisak da se završi brzo, pre nego što proverite zvaničnu dokumentaciju.</li>
      <li data-sr="Traže da isključite sumnjive upozorenja u novčaniku jer su navodno lažna." data-en="They ask you to dismiss suspicious warnings in the wallet as supposedly false.">Traže da isključite sumnjive upozorenja u novčaniku jer su navodno lažna.</li>
      <li data-sr="Mogu predložiti deljenje ekrana umesto teksta, ali cilj ostaje isti." data-en="They may suggest screen sharing instead of typing, but the goal remains the same.">Mogu predložiti deljenje ekrana umesto teksta, ali cilj ostaje isti.</li>
    </ul>
    <div class="callout"><strong data-sr="Meta prihvata narativ da je deljenje fraze legitimna radnja.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Meta prihvata narativ da je deljenje fraze legitimna radnja." data-en="The target accepts the narrative that sharing the phrase is a legitimate action.">Meta prihvata narativ da je deljenje fraze legitimna radnja.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching at this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="phishing.html" data-sr="Fišing — lažne stranice koje imitiraju podršku." data-en="Phishing — fake pages that mimic support.">Fišing — lažne stranice koje imitiraju podršku.</a></li>
        <li><a href="fake-crypto-exchange-scam.html" data-sr="Lažna berza — sličan scenario verifikacije naloga." data-en="Fake crypto exchange — similar account verification scenario.">Lažna berza — sličan scenario verifikacije naloga.</a></li>
      </ul>
    </div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 3 — Prikupljanje fraze" data-en="Phase 3 — Capturing the phrase">Faza 3 — Prikupljanje fraze</h3>
    <p data-sr="Meta ukuca reči u formu, pošalje ih u četu, uslika list, ili otkrije ekran tokom pomoći." data-en="The target types words into a form, sends them in chat, photographs a sheet, or exposes the screen during help.">Meta ukuca reči u formu, pošalje ih u četu, uslika list, ili otkrije ekran tokom pomoći.</p>
    <ul class="bullets">
      <li data-sr="Forma traži 12 ili 24 polja redom, što je jasan znak seed fraze." data-en="The form asks for 12 or 24 fields in order, which is a clear seed phrase pattern.">Forma traži 12 ili 24 polja redom, što je jasan znak seed fraze.</li>
      <li data-sr="Čet traži frazu kao jedan blok teksta sa razmacima između reči." data-en="The chat asks for the phrase as one text block with spaces between words.">Čet traži frazu kao jedan blok teksta sa razmacima između reči.</li>
      <li data-sr="Agent tvrdi da će ručno uneti podatke umesto vas, ali i dalje treba da im pročitate reči." data-en="The agent claims they will enter data manually but still need you to read the words aloud.">Agent tvrdi da će ručno uneti podatke umesto vas, ali i dalje treba da im pročitate reči.</li>
      <li data-sr="Snimak ekrana ili fotografija rezervne kartice otkriva istu informaciju kao kucanje." data-en="A screenshot or photo of a backup card reveals the same information as typing.">Snimak ekrana ili fotografija rezervne kartice otkriva istu informaciju kao kucanje.</li>
    </ul>
    <div class="callout"><strong data-sr="Kompletna fraza je dostupna napadaču u čitljivom obliku.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Kompletna fraza je dostupna napadaču u čitljivom obliku." data-en="The complete phrase is available to the attacker in readable form.">Kompletna fraza je dostupna napadaču u čitljivom obliku.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 4 — Ispražnjavanje" data-en="Phase 4 — Emptying">Faza 4 — Ispražnjavanje</h3>
    <p data-sr="Sa seed frazom napadač uveze novčanik na svom uređaju i šalje transakcije na svoje adrese. Brzina zavisi od lanca i vrednosti." data-en="With the seed phrase the attacker imports the wallet on their device and sends transactions to their own addresses. Speed depends on chain and value.">Sa seed frazom napadač uveze novčanik na svom uređaju i šalje transakcije na svoje adrese. Brzina zavisi od lanca i vrednosti.</p>
    <ul class="bullets">
      <li data-sr="Transferi mogu ići u više koraka preko posrednih adresa." data-en="Transfers may go in multiple steps through intermediary addresses.">Transferi mogu ići u više koraka preko posrednih adresa.</li>
      <li data-sr="Žrtva i dalje vidi aplikaciju na svom telefonu dok se sredstva već premeštaju." data-en="The victim still sees the app on their phone while funds are already moving.">Žrtva i dalje vidi aplikaciju na svom telefonu dok se sredstva već premeštaju.</li>
      <li data-sr="Nema centralnog dugmeta za poništavanje na blockchain mrežama." data-en="There is no central undo button on blockchain networks.">Nema centralnog dugmeta za poništavanje na blockchain mrežama.</li>
      <li data-sr="Napadač može zameniti i lozinku ili dodati novi uređaj u nekim modelima čuvanja." data-en="The attacker may also change the password or add a new device in some storage models.">Napadač može zameniti i lozinku ili dodati novi uređaj u nekim modelima čuvanja.</li>
    </ul>
    <div class="callout"><strong data-sr="Izlazne transakcije su vidljive u exploreru za tu adresu.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Izlazne transakcije su vidljive u exploreru za tu adresu." data-en="Outgoing transactions are visible in the explorer for that address.">Izlazne transakcije su vidljive u exploreru za tu adresu.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching at this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="wallet-drainer.html" data-sr="Wallet drainer — drugačiji prag, ali isti krajnji gubitak sredstava." data-en="Wallet drainer — different threshold, same end loss of funds.">Wallet drainer — drugačiji prag, ali isti krajnji gubitak sredstava.</a></li>
        <li><a href="recovery-scam.html" data-sr="Recovery prevara — sledeći talas nakon gubitka." data-en="Recovery scam — next wave after a loss.">Recovery prevara — sledeći talas nakon gubitka.</a></li>
      </ul>
    </div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 5 — Otkrivanje" data-en="Phase 5 — Discovery">Faza 5 — Otkrivanje</h3>
    <p data-sr="Korisnik vidi prazan balans ili obaveštenje o transferu koji nije naručio. Tek tada shvata da je fraza bila kompromitovana." data-en="The user sees an empty balance or a transfer notification they did not authorize. Only then do they realize the phrase was compromised.">Korisnik vidi prazan balans ili obaveštenje o transferu koji nije naručio. Tek tada shvata da je fraza bila kompromitovana.</p>
    <ul class="bullets">
      <li data-sr="Istorija transakcija na lancu pokazuje nepoznate primaoce." data-en="On-chain history shows unknown recipients.">Istorija transakcija na lancu pokazuje nepoznate primaoce.</li>
      <li data-sr="Korisnik može pokušati da promeni lozinku aplikacije, što ne vraća sredstva." data-en="The user may try to change the app password, which does not return funds.">Korisnik može pokušati da promeni lozinku aplikacije, što ne vraća sredstva.</li>
      <li data-sr="Stres i žurba čine osobu podložnom novim kontaktima koji nude povrat." data-en="Stress and hurry make the person vulnerable to new contacts offering recovery.">Stres i žurba čine osobu podložnom novim kontaktima koji nude povrat.</li>
    </ul>
    <div class="callout"><strong data-sr="Gubitak je potvrđen upoređivanjem stanja sa explorerom.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Gubitak je potvrđen upoređivanjem stanja sa explorerom." data-en="The loss is confirmed by comparing balances with the explorer.">Gubitak je potvrđen upoređivanjem stanja sa explorerom.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 6 — Šta dalje (bez obećanja povrata)" data-en="Phase 6 — What next (no recovery promises)">Faza 6 — Šta dalje (bez obećanja povrata)</h3>
    <p data-sr="Jedina sigurna reakcija je nova seed fraza na novom novčaniku i nikad više ne koristiti staru frazu. Pravni i bankarski mehanizmi retko pokrivaju čist on-chain transfer." data-en="The only safe response is a new seed on a new wallet and never using the old phrase again. Legal and banking mechanisms rarely cover a plain on-chain transfer.">Jedina sigurna reakcija je nova seed fraza na novom novčaniku i nikad više ne koristiti staru frazu. Pravni i bankarski mehanizmi retko pokrivaju čist on-chain transfer.</p>
    <ul class="bullets">
      <li data-sr="Kreirajte novi novčanik i prebacite preostala sredstva samo ako ih još uvek ima na drugim adresama koje nisu kompromitovane." data-en="Create a new wallet and move remaining funds only if they still exist on other uncompromised addresses.">Kreirajte novi novčanik i prebacite preostala sredstva samo ako ih još uvek ima na drugim adresama koje nisu kompromitovane.</li>
      <li data-sr="Prijavite lažnu stranicu registrarima i pretraživačima radi uklanjanja." data-en="Report the fake site to registrars and search engines for takedown.">Prijavite lažnu stranicu registrarima i pretraživačima radi uklanjanja.</li>
      <li data-sr="Ne plaćajte nikome unapred za forenzički povrat." data-en="Do not pay anyone upfront for forensic recovery.">Ne plaćajte nikome unapred za forenzički povrat.</li>
      <li data-sr="Dokumentujte URL, čet i vremena za eventualnu prijavu organima." data-en="Document URLs, chat, and times for possible reporting to authorities.">Dokumentujte URL, čet i vremena za eventualnu prijavu organima.</li>
    </ul>
    <div class="callout"><strong data-sr="Nova rezerva je napravljena offline i stara fraza više nije u upotrebi.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Nova rezerva je napravljena offline i stara fraza više nije u upotrebi." data-en="A new backup is made offline and the old phrase is no longer in use.">Nova rezerva je napravljena offline i stara fraza više nije u upotrebi.</span></div>
  </article>
</section>

<section class="content-section">
  <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
  <ul class="bullets">
    <li data-sr="Bilo ko traži kompletnu seed frazu u bilo kom kanalu." data-en="Anyone asks for the complete seed phrase in any channel.">Bilo ko traži kompletnu seed frazu u bilo kom kanalu.</li>
    <li data-sr="Forma sa tačno 12 ili 24 polja za reči." data-en="A form with exactly 12 or 24 word fields.">Forma sa tačno 12 ili 24 polja za reči.</li>
    <li data-sr="Tvrdnja da morate sinhronizovati novčanik sa veb stranicom." data-en="A claim that you must sync the wallet with a website.">Tvrdnja da morate sinhronizovati novčanik sa veb stranicom.</li>
    <li data-sr="Hitnost i zabrana konsultacije sa drugom osobom." data-en="Urgency and a ban on consulting someone else.">Hitnost i zabrana konsultacije sa drugom osobom.</li>
    <li data-sr="Lažni live chat na domenu koji nije zvaničan." data-en="Fake live chat on a domain that is not official.">Lažni live chat na domenu koji nije zvaničan.</li>
    <li data-sr="Zahtev da fotografirate backup karticu ili da delite ekran sa listom reči." data-en="A request to photograph the backup card or screen-share the word list.">Zahtev da fotografirate backup karticu ili da delite ekran sa listom reči.</li>
    <li data-sr="Ponuda da vrati zaradu ako prvo podelite frazu." data-en="An offer to return earnings if you share the phrase first.">Ponuda da vrati zaradu ako prvo podelite frazu.</li>
    <li data-sr="Imejl sa adrese koja liči na zvaničnu ali ima suptilnu grešku u domenu." data-en="Email from an address that looks official but has a subtle domain error.">Imejl sa adrese koja liči na zvaničnu ali ima suptilnu grešku u domenu.</li>
    <li data-sr="Bot u Telegramu koji traži frazu za verifikaciju nagrade." data-en="A Telegram bot asking for the phrase to verify a reward.">Bot u Telegramu koji traži frazu za verifikaciju nagrade.</li>
    <li data-sr="Uputstvo da ignorirate crvena upozorenja u aplikaciji novčanika." data-en="Instructions to ignore red warnings in the wallet app.">Uputstvo da ignorirate crvena upozorenja u aplikaciji novčanika.</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
  <ol class="steps">
    <li data-sr="Da li zvanična dokumentacija novčanika ikada traži celu frazu na mreži?" data-en="Does the wallet's official documentation ever ask for the full phrase online?">Da li zvanična dokumentacija novčanika ikada traži celu frazu na mreži?</li>
    <li data-sr="Da li je domen koji vidite identičan zvaničnom, karakter po karakter?" data-en="Is the domain you see identical to the official one, character by character?">Da li je domen koji vidite identičan zvaničnom, karakter po karakter?</li>
    <li data-sr="Da li možete zatvoriti čet i ponovo otvoriti podršku samo preko aplikacije ili zvaničnog sajta?" data-en="Can you close the chat and reopen support only via the app or official site?">Da li možete zatvoriti čet i ponovo otvoriti podršku samo preko aplikacije ili zvaničnog sajta?</li>
    <li data-sr="Da li neko ostaje na liniji dok vi unosite osetljive podatke?" data-en="Does someone stay on the line while you enter sensitive data?">Da li neko ostaje na liniji dok vi unosite osetljive podatke?</li>
    <li data-sr="Da li forma traži reči redom kao seed listu?" data-en="Does the form ask for words in order like a seed list?">Da li forma traži reči redom kao seed listu?</li>
    <li data-sr="Da li postoji pritisak da ne pitate porodicu ili IT?" data-en="Is there pressure not to ask family or IT?">Da li postoji pritisak da ne pitate porodicu ili IT?</li>
    <li data-sr="Da li je kontakt inicirao neki bonus ili neočekivana isplata?" data-en="Was contact initiated by a bonus or unexpected payout?">Da li je kontakt inicirao neki bonus ili neočekivana isplata?</li>
    <li data-sr="Da li možete sačekati 24 sata i ponovo pročitati uputstvo proizvođača pre bilo koje akcije?" data-en="Can you wait 24 hours and reread the vendor guide before any action?">Da li možete sačekati 24 sata i ponovo pročitati uputstvo proizvođača pre bilo koje akcije?</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Checklista" data-en="Checklist">Checklista</h2>
  <ul class="bullets">
    <li data-sr="Da li ikada unosim seed frazu u bilo koji veb formular?" data-en="Do I ever enter the seed phrase into any web form?">Da li ikada unosim seed frazu u bilo koji veb formular?</li>
    <li data-sr="Da li je moja seed fraza zapisana samo na fizičkom mediju koji kontrolišem?" data-en="Is my seed phrase written only on physical media I control?">Da li je moja seed fraza zapisana samo na fizičkom mediju koji kontrolišem?</li>
    <li data-sr="Da li znam da niko legitiman ne traži frazu u četu?" data-en="Do I know that no legitimate party asks for the phrase in chat?">Da li znam da niko legitiman ne traži frazu u četu?</li>
    <li data-sr="Da li proveravam URL pre nego što se ulogujem?" data-en="Do I verify the URL before I log in?">Da li proveravam URL pre nego što se ulogujem?</li>
    <li data-sr="Da li koristim uređaj bez deljenja ekrana sa nepoznatim agentom?" data-en="Am I using the device without screen sharing with an unknown agent?">Da li koristim uređaj bez deljenja ekrana sa nepoznatim agentom?</li>
    <li data-sr="Da li imam drugi kanal da potvrdim upozorenje o hakeru na nalogu?" data-en="Do I have another channel to confirm a hacker warning about the account?">Da li imam drugi kanal da potvrdim upozorenje o hakeru na nalogu?</li>
    <li data-sr="Da li bih poslao ovu poruku prijatelju da ga pitam da li je normalna?" data-en="Would I forward this message to a friend to ask if it is normal?">Da li bih poslao ovu poruku prijatelju da ga pitam da li je normalna?</li>
    <li data-sr="Da li aplikacija prikazuje upozorenje koje ignorišem na tuđi nagovor?" data-en="Does the app show a warning I am ignoring on someone else's urging?">Da li aplikacija prikazuje upozorenje koje ignorišem na tuđi nagovor?</li>
    <li data-sr="Da li postoji obećanje novca pre nego što sam tražio bilo kakvu uslugu?" data-en="Is money promised before I asked for any service?">Da li postoji obećanje novca pre nego što sam tražio bilo kakvu uslugu?</li>
    <li data-sr="Da li je osoba koja zove predstavljena samo imenom bez službenog broja za povratni poziv?" data-en="Is the caller identified only by name without an official callback number?">Da li je osoba koja zove predstavljena samo imenom bez službenog broja za povratni poziv?</li>
    <li data-sr="Da li čuvam seed na istom mestu kao i šifru telefona?" data-en="Do I store the seed in the same place as my phone passcode?">Da li čuvam seed na istom mestu kao i šifru telefona?</li>
    <li data-sr="Da li planiram test migracije na novi uređaj bez zvaničnog vodiča proizvođača?" data-en="Am I planning a test migration to a new device without the vendor's official guide?">Da li planiram test migracije na novi uređaj bez zvaničnog vodiča proizvođača?</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Ako sumnja krene" data-en="If suspicion starts">Ako sumnja krene</h2>
  <ol class="steps">
    <li data-sr="Prekinite unos i zatvorite stranicu bez klikanja na dodatne linkove." data-en="Stop entering data and close the page without clicking further links.">Prekinite unos i zatvorite stranicu bez klikanja na dodatne linkove.</li>
    <li data-sr="Otvorite zvanični sajt novčanika direktno, kucanjem URL-a ili iz prodavnice aplikacija." data-en="Open the wallet's official site by typing the URL or from the app store.">Otvorite zvanični sajt novčanika direktno, kucanjem URL-a ili iz prodavnice aplikacija.</li>
    <li data-sr="Ako ste već otkucali deo fraze, smatrajte celu frazu kompromitovanom i planirajte novu." data-en="If you already typed part of the phrase, treat the whole phrase as compromised and plan a new one.">Ako ste već otkucali deo fraze, smatrajte celu frazu kompromitovanom i planirajte novu.</li>
    <li data-sr="Ne argumentujte sa prevarantom; samo prekinite komunikaciju." data-en="Do not argue with the scammer; just end communication.">Ne argumentujte sa prevarantom; samo prekinite komunikaciju.</li>
    <li data-sr="Sačuvajte snimke ekrana poruka za prijavu." data-en="Save screenshots of messages for reporting.">Sačuvajte snimke ekrana poruka za prijavu.</li>
    <li data-sr="Ako su sredstva još na adresi, prebacite ih na novi novčanik sa novom frazom što pre." data-en="If funds are still on the address, move them to a new wallet with a new phrase as soon as possible.">Ako su sredstva još na adresi, prebacite ih na novi novčanik sa novom frazom što pre.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
  <ul class="bullets">
    <li data-sr="Da li su već uneli ili poslali listu reči nekome na mreži?" data-en="Did they already enter or send a word list to someone online?">Da li su već uneli ili poslali listu reči nekome na mreži?</li>
    <li data-sr="Da li im je neko rekao da ne govore porodici dok ne završe verifikaciju?" data-en="Were they told not to tell family until verification is done?">Da li im je neko rekao da ne govore porodici dok ne završe verifikaciju?</li>
    <li data-sr="Da li im novčanik još pokazuje sredstva ili je balans nula?" data-en="Does their wallet still show funds or is the balance zero?">Da li im novčanik još pokazuje sredstva ili je balans nula?</li>
    <li data-sr="Da li su u kontaktu sa recovery agentom koji traži dodatnu uplatu?" data-en="Are they in contact with a recovery agent asking for another payment?">Da li su u kontaktu sa recovery agentom koji traži dodatnu uplatu?</li>
  </ul>
  <p data-sr="Rečenice koje rade:" data-en="Sentences that help:">Rečenice koje rade:</p>
  <ul class="bullets">
    <li data-sr="Niko od podrške ne sme da traži celu seed frazu; to je uvek prevara." data-en="Support must never ask for the full seed phrase; that is always a scam.">Niko od podrške ne sme da traži celu seed frazu; to je uvek prevara.</li>
    <li data-sr="Prekinimo sada; ako je frazu podelila, treba novi novčanik i hitan prenos preostalog." data-en="Let's stop now; if the phrase was shared, they need a new wallet and urgent transfer of anything left.">Prekinimo sada; ako je frazu podelila, treba novi novčanik i hitan prenos preostalog.</li>
    <li data-sr="Ne plaćaj nikome koji kaže da može da vrati blokčejn transakciju." data-en="Do not pay anyone who says they can reverse a blockchain transaction.">Ne plaćaj nikome koji kaže da može da vrati blokčejn transakciju.</li>
    <li data-sr="Zajedno ćemo otvoriti zvaničnu stranicu proizvođača novčanika, ne link iz poruke." data-en="We will open the wallet vendor's official page together, not the link from the message.">Zajedno ćemo otvoriti zvaničnu stranicu proizvođača novčanika, ne link iz poruke.</li>
  </ul>
</section>
`
};
