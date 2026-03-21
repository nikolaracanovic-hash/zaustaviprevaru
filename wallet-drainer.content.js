if (!window.SCAM_CONTENT) window.SCAM_CONTENT = {};
window.SCAM_CONTENT["wallet-drainer"] = {
  raw_html: `
<section class="content-section">
  <h2 data-sr="Uvod: kako radi wallet drainer" data-en="Introduction: how the wallet drainer works">Uvod: kako radi wallet drainer</h2>
  <p data-sr="Wallet drainer je maliciozni pametni ugovor koji se aktivira kada korisnik poveže kripto novčanik sa lažnim sajtom i potpiše određenu transakciju. Potpisivanjem se ne vrši samo ta transakcija — daje se odobrenje (approval) koje napadaču daje pravo da premešta sve tokene iz novčanika u bilo kom trenutku. Čitav novčanik se isprazni u jednoj ili više automatizovanih transakcija." data-en="A wallet drainer is a malicious smart contract that activates when the user connects their crypto wallet to a fake site and signs a specific transaction. Signing does not just execute that transaction — it grants an approval giving the attacker the right to move all tokens from the wallet at any time. The entire wallet is drained in one or more automated transactions.">Wallet drainer je maliciozni pametni ugovor koji se aktivira kada korisnik poveže kripto novčanik sa lažnim sajtom i potpiše određenu transakciju. Potpisivanjem se ne vrši samo ta transakcija — daje se odobrenje (approval) koje napadaču daje pravo da premešta sve tokene iz novčanika u bilo kom trenutku. Čitav novčanik se isprazni u jednoj ili više automatizovanih transakcija.</p>
  <p data-sr="Ono što čini wallet drainer posebno opasnim je to da žrtva ne vidi šta potpisuje. Zahtev za potpis izgleda kao standardna verifikacija ili potvrda minta. Napadač prikazuje jednu informaciju u UI-u dok potpis zapravo odobrava neograničen pristup svim sredstvima." data-en="What makes the wallet drainer particularly dangerous is that the victim does not see what they are signing. The signature request looks like a standard verification or mint confirmation. The attacker displays one thing in the UI while the signature actually approves unlimited access to all funds.">Ono što čini wallet drainer posebno opasnim je to da žrtva ne vidi šta potpisuje. Zahtev za potpis izgleda kao standardna verifikacija ili potvrda minta. Napadač prikazuje jednu informaciju u UI-u dok potpis zapravo odobrava neograničen pristup svim sredstvima.</p>
</section>

<section class="content-section">
  <h2 data-sr="Model" data-en="Model">Model</h2>
  <div class="phase">
    <div class="label" data-sr="Lanac" data-en="Chain">Lanac</div>
    <p data-sr="Mamac/oglas/airdrop → lažni sajt → wallet connect → potpis transakcije → approval → automatsko pražnjenje novčanika → sredstva na napadačevim adresama" data-en="Bait/ad/airdrop → fake site → wallet connect → transaction signature → approval → automated wallet drain → funds at attacker's addresses">Mamac/oglas/airdrop → lažni sajt → wallet connect → potpis transakcije → approval → automatsko pražnjenje novčanika → sredstva na napadačevim adresama</p>
  </div>
  <div class="callout">
    <strong data-sr="Prag:" data-en="Threshold:">Prag:</strong>
    <span data-sr="Potpis transakcije koja daje approval. Napadač u tom trenutku ima pravo da premešta sve tokene — pražnjenje može doći odmah ili kasni da bi se prikupilo više žrtava." data-en="Signing the transaction that grants approval. The attacker at that point has the right to move all tokens — the drain can come immediately or is delayed to accumulate more victims.">Potpis transakcije koja daje approval. Napadač u tom trenutku ima pravo da premešta sve tokene — pražnjenje može doći odmah ili kasni da bi se prikupilo više žrtava.</span>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Kako generalno radi: mehanika" data-en="How it works: mechanics">Kako generalno radi: mehanika</h2>
  <div class="grid-2">
    <div class="phase">
      <div class="label" data-sr="Šta gradi uverljivost" data-en="What builds credibility">Šta gradi uverljivost</div>
      <ul class="bullets">
        <li data-sr="Lažni sajt je vizuelno identičan originalnom projektu — isti logo, iste boje, isti tekst." data-en="The fake site is visually identical to the original project — same logo, same colors, same text.">Lažni sajt je vizuelno identičan originalnom projektu — isti logo, iste boje, isti tekst.</li>
        <li data-sr="Mamac je obično airdrop, ekskluzivni mint, besplatan NFT ili 'claim rewards' dugme." data-en="The bait is usually an airdrop, exclusive mint, free NFT or claim rewards button.">Mamac je obično airdrop, ekskluzivni mint, besplatan NFT ili 'claim rewards' dugme.</li>
        <li data-sr="Oglas se distribuira putem hakovanog Discord servera, lažnog Twitter naloga ili plaćenih oglasa." data-en="The ad is distributed via a hacked Discord server, fake Twitter account or paid ads.">Oglas se distribuira putem hakovanog Discord servera, lažnog Twitter naloga ili plaćenih oglasa.</li>
        <li data-sr="Domen je gotovo identičan originalnom sa jednom razlikom — homoglifom, dodatnim slovom ili drugačijim TLD-om." data-en="The domain is almost identical to the original with one difference — a homoglyph, extra letter or different TLD.">Domen je gotovo identičan originalnom sa jednom razlikom — homoglifom, dodatnim slovom ili drugačijim TLD-om.</li>
      </ul>
    </div>
    <div class="phase">
      <div class="label" data-sr="Kako se uvodi radnja" data-en="How the action is introduced">Kako se uvodi radnja</div>
      <ul class="bullets">
        <li data-sr="Korisnik konektuje novčanik jer to izgleda kao standardni web3 korak koji se radi svuda." data-en="The user connects their wallet because that looks like a standard web3 step done everywhere.">Korisnik konektuje novčanik jer to izgleda kao standardni web3 korak koji se radi svuda.</li>
        <li data-sr="Zahtev za potpis prikazuje generički tekst dok u pozadini poziva setApprovalForAll ili unlimited ERC-20 approve." data-en="The signature request displays generic text while in the background calling setApprovalForAll or unlimited ERC-20 approve.">Zahtev za potpis prikazuje generički tekst dok u pozadini poziva setApprovalForAll ili unlimited ERC-20 approve.</li>
        <li data-sr="Pražnjenje se dešava automatski čim se prikupi dovoljan broj potpisa ili odmah za veće svote." data-en="The drain happens automatically as soon as enough signatures are collected or immediately for larger amounts.">Pražnjenje se dešava automatski čim se prikupi dovoljan broj potpisa ili odmah za veće svote.</li>
        <li data-sr="Gas fee se plaća iz novčanika žrtve dok se tokeni šalju na mixing adrese da bi se sakrilo poreklo." data-en="The gas fee is paid from the victim's wallet while tokens are sent to mixing addresses to hide their origin.">Gas fee se plaća iz novčanika žrtve dok se tokeni šalju na mixing adrese da bi se sakrilo poreklo.</li>
      </ul>
    </div>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Hronološki tok (faze + evolucije)" data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

  <article class="phase">
    <h3 data-sr="Faza 1 — Distribucija mamca" data-en="Phase 1 — Bait distribution">Faza 1 — Distribucija mamca</h3>
    <p data-sr="Napadač distribuira mamac kroz hakovane naloge, plaćene oglase ili direktne poruke u kriptografskim Discord serverima. Mamac obećava besplatne tokene, ekskluzivni mint ili 'claim' nagrada." data-en="The attacker distributes the bait through hacked accounts, paid ads or direct messages in crypto Discord servers. The bait promises free tokens, exclusive mint or rewards claim.">Napadač distribuira mamac kroz hakovane naloge, plaćene oglase ili direktne poruke u kriptografskim Discord serverima. Mamac obećava besplatne tokene, ekskluzivni mint ili 'claim' nagrada.</p>
    <ul class="bullets">
      <li data-sr="Poruka dolazi od hakovanog naloga projekta koji korisnik prati i smatra pouzdanim." data-en="The message comes from a hacked account of a project the user follows and considers trustworthy.">Poruka dolazi od hakovanog naloga projekta koji korisnik prati i smatra pouzdanim.</li>
      <li data-sr="Vremenski pritisak je uvek prisutan — 'samo 24h', 'ograničen supply', 'whitelist uskoro ističe'." data-en="Time pressure is always present — only 24h, limited supply, whitelist expiring soon.">Vremenski pritisak je uvek prisutan — 'samo 24h', 'ograničen supply', 'whitelist uskoro ističe'.</li>
      <li data-sr="Link vodi na sajt koji izgleda identično originalnom projektu ali je na drugom domenu." data-en="The link leads to a site that looks identical to the original project but is on a different domain.">Link vodi na sajt koji izgleda identično originalnom projektu ali je na drugom domenu.</li>
    </ul>
    <div class="callout"><strong data-sr="Korisnik klikće na link i posećuje lažni sajt.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Korisnik klikće na link i posećuje lažni sajt." data-en="The user clicks the link and visits the fake site.">Korisnik klikće na link i posećuje lažni sajt.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 2 — Wallet connect" data-en="Phase 2 — Wallet connect">Faza 2 — Wallet connect</h3>
    <p data-sr="Sajt traži konekciju novčanika kao standardni web3 korak. Korisnik konektuje jer je to normalna procedura za sve legitimne DApps." data-en="The site requests wallet connection as a standard web3 step. The user connects because that is normal procedure for all legitimate DApps.">Sajt traži konekciju novčanika kao standardni web3 korak. Korisnik konektuje jer je to normalna procedura za sve legitimne DApps.</p>
    <ul class="bullets">
      <li data-sr="Samo konekcija novčanika ne daje napadaču pristup — štetna radnja dolazi tek sa potpisom." data-en="Just connecting the wallet does not give the attacker access — the harmful action only comes with the signature.">Samo konekcija novčanika ne daje napadaču pristup — štetna radnja dolazi tek sa potpisom.</li>
      <li data-sr="Sajt odmah prikazuje lažni balans ili 'eligibility' status da bi pojačao motivaciju za nastavak." data-en="The site immediately shows a fake balance or eligibility status to increase motivation to continue.">Sajt odmah prikazuje lažni balans ili 'eligibility' status da bi pojačao motivaciju za nastavak.</li>
      <li data-sr="Napadač vidi adresu novčanika i balans tokena čim se konekcija uspostavi." data-en="The attacker sees the wallet address and token balance as soon as the connection is established.">Napadač vidi adresu novčanika i balans tokena čim se konekcija uspostavi.</li>
    </ul>
    <div class="callout"><strong data-sr="Novčanik je konektovan — napadač vidi stanje i identifikuje vredne tokene za pražnjenje.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Novčanik je konektovan — napadač vidi stanje i identifikuje vredne tokene za pražnjenje." data-en="The wallet is connected — the attacker sees the balance and identifies valuable tokens for draining.">Novčanik je konektovan — napadač vidi stanje i identifikuje vredne tokene za pražnjenje.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 3 — Maliciozni potpis" data-en="Phase 3 — Malicious signature">Faza 3 — Maliciozni potpis</h3>
    <p data-sr="Sajt traži potpis 'za mint', 'za claim' ili 'za verifikaciju'. Zahtev za potpis u MetaMask-u ili sličnom novčaniku prikazuje kriptovani tekst ili generičku poruku. Korisnik potpisuje ne shvatajući da time odobrava neograničen pristup." data-en="The site requests a signature for mint, for claim or for verification. The signature request in MetaMask or a similar wallet shows encrypted text or a generic message. The user signs without realizing they are approving unlimited access.">Sajt traži potpis 'za mint', 'za claim' ili 'za verifikaciju'. Zahtev za potpis u MetaMask-u ili sličnom novčaniku prikazuje kriptovani tekst ili generičku poruku. Korisnik potpisuje ne shvatajući da time odobrava neograničen pristup.</p>
    <ul class="bullets">
      <li data-sr="setApprovalForAll odobrava napadaču da premesti sve NFT-ove iz novčanika bez daljeg odobrenja." data-en="setApprovalForAll approves the attacker to more all NFTs from the wallet without further approval.">setApprovalForAll odobrava napadaču da premesti sve NFT-ove iz novčanika bez daljeg odobrenja.</li>
      <li data-sr="Unlimited ERC-20 approve daje pravo na prenos neograničene količine tokena određenog ugovora." data-en="Unlimited ERC-20 approve grants the right to transfer unlimited amounts of a specific contract's tokens.">Unlimited ERC-20 approve daje pravo na prenos neograničene količine tokena određenog ugovora.</li>
      <li data-sr="Novčanici retko prikazuju razumljivo upozorenje o tome šta potpis zapravo odobrava." data-en="Wallets rarely display a readable warning about what the signature actually approves.">Novčanici retko prikazuju razumljivo upozorenje o tome šta potpis zapravo odobrava.</li>
    </ul>
    <div class="callout"><strong data-sr="Korisnik potpisuje transakciju — approval je na blockchain-u i napadač ima pravo na pražnjenje u bilo kom trenutku.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Korisnik potpisuje transakciju — approval je na blockchain-u i napadač ima pravo na pražnjenje u bilo kom trenutku." data-en="The user signs the transaction — the approval is on the blockchain and the attacker has the right to drain at any time.">Korisnik potpisuje transakciju — approval je na blockchain-u i napadač ima pravo na pražnjenje u bilo kom trenutku.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching at this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="airdrop-scam.html" data-sr="Airdrop prevara — isti drainer mehanizam distribuiran kroz lažne airdrop obaveštenja." data-en="Airdrop scam — same drainer mechanism distributed through fake airdrop notifications.">Airdrop prevara — isti drainer mehanizam distribuiran kroz lažne airdrop obaveštenja.</a></li>
        <li><a href="nft-scam.html" data-sr="NFT prevara — drainer koji ciljano praznid NFT kolekcije sa setApprovalForAll." data-en="NFT scam — drainer specifically targeting NFT collections with setApprovalForAll.">NFT prevara — drainer koji ciljano praznid NFT kolekcije sa setApprovalForAll.</a></li>
      </ul>
    </div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 4 — Automatsko pražnjenje" data-en="Phase 4 — Automated draining">Faza 4 — Automatsko pražnjenje</h3>
    <p data-sr="Bot napadača automatski prati sve nove approvals i pokreće pražnjenje čim detektuje potpis. Sve vredne tokene i NFT-ove premešta na seriju relay adresa pre nego što žrtva uopšte završi sesiju na sajtu." data-en="The attacker's bot automatically monitors all new approvals and initiates draining as soon as it detects a signature. All valuable tokens and NFTs are moved to a series of relay addresses before the victim even ends the session on the site.">Bot napadača automatski prati sve nove approvals i pokreće pražnjenje čim detektuje potpis. Sve vredne tokene i NFT-ove premešta na seriju relay adresa pre nego što žrtva uopšte završi sesiju na sajtu.</p>
    <ul class="bullets">
      <li data-sr="Pražnjenje se dešava u sekundi od potpisa — nema vremena za reakciju ili opoziv." data-en="The drain happens within seconds of the signature — there is no time for reaction or revocation.">Pražnjenje se dešava u sekundi od potpisa — nema vremena za reakciju ili opoziv.</li>
      <li data-sr="Tokeni prolaze kroz seriju adresa i mixere da bi se otežalo praćenje porekla." data-en="Tokens pass through a series of addresses and mixers to make tracing their origin difficult.">Tokeni prolaze kroz seriju adresa i mixere da bi se otežalo praćenje porekla.</li>
      <li data-sr="Žrtva može ne primetiti pražnjenje odmah jer se balans u novčaniku ažurira s kašnjenjem." data-en="The victim may not immediately notice the drain because the wallet balance updates with a delay.">Žrtva može ne primetiti pražnjenje odmah jer se balans u novčaniku ažurira s kašnjenjem.</li>
    </ul>
    <div class="callout"><strong data-sr="Svi tokeni su premešeni i napadačev bot je zatvorio poziciju — povratak nije moguć.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Svi tokeni su premešeni i napadačev bot je zatvorio poziciju — povratak nije moguć." data-en="All tokens are moved and the attacker's bot has closed the position — reversal is not possible.">Svi tokeni su premešeni i napadačev bot je zatvorio poziciju — povratak nije moguć.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 5 — Otkrivanje gubitka" data-en="Phase 5 — Discovering the loss">Faza 5 — Otkrivanje gubitka</h3>
    <p data-sr="Žrtva otvara novčanik i vidi prazan balans. Blockchain explorer potvrđuje transakcije koje su premestile tokene. Nema načina da se poništi blockchain transakcija." data-en="The victim opens their wallet and sees an empty balance. The blockchain explorer confirms transactions that moved tokens. There is no way to reverse a blockchain transaction.">Žrtva otvara novčanik i vidi prazan balans. Blockchain explorer potvrđuje transakcije koje su premestile tokene. Nema načina da se poništi blockchain transakcija.</p>
    <ul class="bullets">
      <li data-sr="Blockchain transakcije su nepovratne — nema banke ni institucije koja može da vrati sredstva." data-en="Blockchain transactions are irreversible — there is no bank or institution that can return the funds.">Blockchain transakcije su nepovratne — nema banke ni institucije koja može da vrati sredstva.</li>
      <li data-sr="Napadači koji se bave recovery prevarama kontaktiraju žrtve nudeći 'povrat' u zamenu za novu uplatu." data-en="Attackers specializing in recovery scams contact victims offering a recovery in exchange for a new payment.">Napadači koji se bave recovery prevarama kontaktiraju žrtve nudeći 'povrat' u zamenu za novu uplatu.</li>
      <li data-sr="Blockchain explorer može pokazati sve transakcije ali sredstva su prodata ili sakriven kroz mixing." data-en="The blockchain explorer can show all transactions but funds have been sold or hidden through mixing.">Blockchain explorer može pokazati sve transakcije ali sredstva su prodata ili sakriven kroz mixing.</li>
    </ul>
    <div class="callout"><strong data-sr="Žrtva potvrđuje gubitak na blockchain exploreru i razume da je povrat nemoguć.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Žrtva potvrđuje gubitak na blockchain exploreru i razume da je povrat nemoguć." data-en="The victim confirms the loss on the blockchain explorer and understands that recovery is impossible.">Žrtva potvrđuje gubitak na blockchain exploreru i razume da je povrat nemoguć.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching at this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="recovery-scam.html" data-sr="Recovery prevara — napadač nudi lažni povrat sredstava za dodatnu uplatu." data-en="Recovery scam — attacker offers fake fund recovery in exchange for additional payment.">Recovery prevara — napadač nudi lažni povrat sredstava za dodatnu uplatu.</a></li>
      </ul>
    </div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 6 — Pokušaj ublažavanja" data-en="Phase 6 — Mitigation attempt">Faza 6 — Pokušaj ublažavanja</h3>
    <p data-sr="Ako žrtva reaguje brzo i pražnjenje još nije kompletno, opoziv approvala može zaustaviti dalji gubitak. Alati kao revoke.cash prikazuju sve aktivne approvale i omogućavaju njihovo ukidanje." data-en="If the victim reacts quickly and the drain is not yet complete, revoking the approval can stop further loss. Tools like revoke.cash show all active approvals and allow their cancellation.">Ako žrtva reaguje brzo i pražnjenje još nije kompletno, opoziv approvala može zaustaviti dalji gubitak. Alati kao revoke.cash prikazuju sve aktivne approvale i omogućavaju njihovo ukidanje.</p>
    <ul class="bullets">
      <li data-sr="Opoziv approvala košta gas fee i mora se uraditi pre nego što bot pokrene pražnjenje." data-en="Revoking the approval costs a gas fee and must be done before the bot initiates the drain.">Opoziv approvala košta gas fee i mora se uraditi pre nego što bot pokrene pražnjenje.</li>
      <li data-sr="Promena novčanika i prelaz na novu adresu je najsigurniji potez posle kompromitovanog potpisa." data-en="Changing the wallet and moving to a new address is the safest more after a compromised signature.">Promena novčanika i prelaz na novu adresu je najsigurniji potez posle kompromitovanog potpisa.</li>
      <li data-sr="Prijava incidenta projektu čiji je nalog bio hakovan pomaže u upozorenju ostalih korisnika." data-en="Reporting the incident to the project whose account was hacked helps warn other users.">Prijava incidenta projektu čiji je nalog bio hakovan pomaže u upozorenju ostalih korisnika.</li>
    </ul>
    <div class="callout"><strong data-sr="Žrtva je opozivala sve sumnjive approvale i prebacila preostala sredstva na novu adresu.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Žrtva je opozivala sve sumnjive approvale i prebacila preostala sredstva na novu adresu." data-en="The victim has revoked all suspicious approvals and transferred remaining funds to a new address.">Žrtva je opozivala sve sumnjive approvale i prebacila preostala sredstva na novu adresu.</span></div>
  </article>
</section>

<section class="content-section">
  <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
  <ul class="bullets">
    <li data-sr="Domen sajta je gotovo identičan poznatom projektu ali postoji jedna razlika u karakteru ili TLD-u." data-en="The site domain is almost identical to a known project but there is one difference in a character or TLD.">Domen sajta je gotovo identičan poznatom projektu ali postoji jedna razlika u karakteru ili TLD-u.</li>
    <li data-sr="Oglas za mint, airdrop ili claim dolazi kroz Discord ili Twitter od naloga koji nije zvanični." data-en="The ad for mint, airdrop or claim comes through Discord or Twitter from an account that is not official.">Oglas za mint, airdrop ili claim dolazi kroz Discord ili Twitter od naloga koji nije zvanični.</li>
    <li data-sr="Zahtev za potpis prikazuje kriptovane podatke ili generičku poruku bez jasnog opisa šta se odobrava." data-en="The signature request shows encrypted data or a generic message without a clear description of what is being approved.">Zahtev za potpis prikazuje kriptovane podatke ili generičku poruku bez jasnog opisa šta se odobrava.</li>
    <li data-sr="Sajt traži setApprovalForAll ili unlimited approve za token koji nema veze sa navedenom akcijom." data-en="The site requests setApprovalForAll or unlimited approve for a token unrelated to the stated action.">Sajt traži setApprovalForAll ili unlimited approve za token koji nema veze sa navedenom akcijom.</li>
    <li data-sr="Ponuda je vremenski ograničena sa urgentnim jezikom — sati, minuti, 'poslednja šansa'." data-en="The offer is time-limited with urgent language — hours, minutes, last chance.">Ponuda je vremenski ograničena sa urgentnim jezikom — sati, minuti, 'poslednja šansa'.</li>
    <li data-sr="Oglas dolazi u direktnoj poruci od nepoznate osobe ili od naloga koji prati od nedavno." data-en="The ad arrives in a direct message from an unknown person or from an account recently followed.">Oglas dolazi u direktnoj poruci od nepoznate osobe ili od naloga koji prati od nedavno.</li>
    <li data-sr="Projekat nikad ranije nije najavio airdrop ili mint koji se sada oglasom promovišu." data-en="The project never previously announced the airdrop or mint now being promoted through the ad.">Projekat nikad ranije nije najavio airdrop ili mint koji se sada oglasom promovišu.</li>
    <li data-sr="Posle konekcije novčanika sajt prikazuje 'eligibility' ili balans koji ne odgovara stvarnom stanju." data-en="After connecting the wallet the site shows an eligibility or balance that does not match the actual state.">Posle konekcije novčanika sajt prikazuje 'eligibility' ili balans koji ne odgovara stvarnom stanju.</li>
    <li data-sr="Revoke.cash ili Etherscan pokazuju aktivne approvale za kontrakte koji nisu poznati projekti." data-en="Revoke.cash or Etherscan show active approvals for contracts that are not known projects.">Revoke.cash ili Etherscan pokazuju aktivne approvale za kontrakte koji nisu poznati projekti.</li>
    <li data-sr="Discord server projekta je bio hakovan u prethodnim satima i lažne poruke se brišu." data-en="The project's Discord server was hacked in the preceding hours and fake messages are being deleted.">Discord server projekta je bio hakovan u prethodnim satima i lažne poruke se brišu.</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Provere: 8 brzih provera pre wallet connect i potpisa" data-en="Checks: 8 quick checks before wallet connect and signing">Provere: 8 brzih provera pre wallet connect i potpisa</h2>
  <ol class="steps">
    <li data-sr="Proveri domen URL-a karakter po karakter — da li je tačno identičan zvaničnom domenu projekta?" data-en="Check the URL domain character by character — is it exactly identical to the project's official domain?">Proveri domen URL-a karakter po karakter — da li je tačno identičan zvaničnom domenu projekta?</li>
    <li data-sr="Poseti zvanični Twitter ili sajt projekta direktno i proveri da li su oni objavili isti oglas." data-en="Visit the project's official Twitter or website directly and verify whether they posted the same announcement.">Poseti zvanični Twitter ili sajt projekta direktno i proveri da li su oni objavili isti oglas.</li>
    <li data-sr="Proveri da li je Discord nalog koji je objavio poruku zaista oficijalni tim projekta — pogledaj role i join datum." data-en="Check whether the Discord account that posted the message is actually the official project team — check roles and join date.">Proveri da li je Discord nalog koji je objavio poruku zaista oficijalni tim projekta — pogledaj role i join datum.</li>
    <li data-sr="Pročitaj šta zahtev za potpis traži pre potpisivanja — u MetaMask-u ili sličnom klikni na detalje." data-en="Read what the signature request asks for before signing — in MetaMask or similar click on details.">Pročitaj šta zahtev za potpis traži pre potpisivanja — u MetaMask-u ili sličnom klikni na detalje.</li>
    <li data-sr="Ako potpis poziva setApprovalForAll, unlimited approve ili neuobičajeni kontrakt — odbij odmah." data-en="If the signature calls setApprovalForAll, unlimited approve or an unusual contract — reject immediately.">Ako potpis poziva setApprovalForAll, unlimited approve ili neuobičajeni kontrakt — odbij odmah.</li>
    <li data-sr="Proveri contract adresu ponuđenog projekta na Etherscan i verifikuj da je ona zvanična." data-en="Check the offered project's contract address on Etherscan and verify it is the official one.">Proveri contract adresu ponuđenog projekta na Etherscan i verifikuj da je ona zvanična.</li>
    <li data-sr="Koristi revoke.cash redovno da vidiš i ukineš sve aktivne approvale na svim lancima." data-en="Use revoke.cash regularly to see and cancel all active approvals on all chains.">Koristi revoke.cash redovno da vidiš i ukineš sve aktivne approvale na svim lancima.</li>
    <li data-sr="Ako imaš veliku vrednost u novčaniku, koristi hardware wallet koji zahteva fizičku potvrdu za svaki potpis." data-en="If you have high value in your wallet use a hardware wallet that requires physical confirmation for every signature.">Ako imaš veliku vrednost u novčaniku, koristi hardware wallet koji zahteva fizičku potvrdu za svaki potpis.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Checklista: pitanja pre wallet connect i potpisa" data-en="Checklist: questions before wallet connect and signing">Checklista: pitanja pre wallet connect i potpisa</h2>
  <ul class="bullets">
    <li data-sr="Da li je domen sajta tačno identičan zvaničnom domenu projekta bez ikakve razlike?" data-en="Is the site domain exactly identical to the project's official domain without any difference?">Da li je domen sajta tačno identičan zvaničnom domenu projekta bez ikakve razlike?</li>
    <li data-sr="Da li je ovaj airdrop, mint ili claim najavljen na zvaničnim kanalima projekta?" data-en="Was this airdrop, mint or claim announced on the project's official channels?">Da li je ovaj airdrop, mint ili claim najavljen na zvaničnim kanalima projekta?</li>
    <li data-sr="Da li sam pročitao šta zahtev za potpis zapravo traži, a ne samo šta sajt kaže da radi?" data-en="Have I read what the signature request actually asks for, not just what the site says it does?">Da li sam pročitao šta zahtev za potpis zapravo traži, a ne samo šta sajt kaže da radi?</li>
    <li data-sr="Da li potpis poziva setApprovalForAll ili unlimited approve na ERC-20 tokene?" data-en="Does the signature call setApprovalForAll or unlimited approve on ERC-20 tokens?">Da li potpis poziva setApprovalForAll ili unlimited approve na ERC-20 tokene?</li>
    <li data-sr="Da li je oglas stigao direktnom porukom ili od naloga koji nije zvanični tim projekta?" data-en="Did the ad arrive via direct message or from an account that is not the official project team?">Da li je oglas stigao direktnom porukom ili od naloga koji nije zvanični tim projekta?</li>
    <li data-sr="Da li postoji vremenski pritisak u ponudi koji me navodi da ne razmislim?" data-en="Is there time pressure in the offer pushing me not to think?">Da li postoji vremenski pritisak u ponudi koji me navodi da ne razmislim?</li>
    <li data-sr="Da li sam proverio contract adresu projekta na Etherscan i potvrdio da je zvanična?" data-en="Have I checked the project's contract address on Etherscan and confirmed it is official?">Da li sam proverio contract adresu projekta na Etherscan i potvrdio da je zvanična?</li>
    <li data-sr="Da li koristim hardware wallet za veće vrednosti ili sam koristio hot wallet za ovu akciju?" data-en="Am I using a hardware wallet for larger values or did I use a hot wallet for this action?">Da li koristim hardware wallet za veće vrednosti ili sam koristio hot wallet za ovu akciju?</li>
    <li data-sr="Da li sam proverio revoke.cash za aktivne approvale na ovom novčaniku?" data-en="Have I checked revoke.cash for active approvals on this wallet?">Da li sam proverio revoke.cash za aktivne approvale na ovom novčaniku?</li>
    <li data-sr="Da li postoje upozorenja o ovom sajtu ili projektu u kriptografskim zajednicama?" data-en="Are there warnings about this site or project in crypto communities?">Da li postoje upozorenja o ovom sajtu ili projektu u kriptografskim zajednicama?</li>
    <li data-sr="Da li je Discord projekta bio u poslednje vreme hakovam i da li se poruke brišu?" data-en="Has the project's Discord recently been hacked and are messages being deleted?">Da li je Discord projekta bio u poslednje vreme hakovam i da li se poruke brišu?</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
  <ol class="steps">
    <li data-sr="Odmah idi na revoke.cash i opozovi sve approvale koji izgledaju sumnjivo ili nepoznato." data-en="Immediately go to revoke.cash and revoke all approvals that look suspicious or unknown.">Odmah idi na revoke.cash i opozovi sve approvale koji izgledaju sumnjivo ili nepoznato.</li>
    <li data-sr="Prebaci preostale tokene na novu, čistu adresu novčanika pre nego što bot pokrene pražnjenje." data-en="Transfer remaining tokens to a new, clean wallet address before the bot initiates the drain.">Prebaci preostale tokene na novu, čistu adresu novčanika pre nego što bot pokrene pražnjenje.</li>
    <li data-sr="Proveri Etherscan transakcije na kompromitovanoj adresi i dokumentuj koje su transakcije izvršene." data-en="Check Etherscan transactions on the compromised address and document which transactions were executed.">Proveri Etherscan transakcije na kompromitovanoj adresi i dokumentuj koje su transakcije izvršene.</li>
    <li data-sr="Prijavi incident projektu čiji je nalog bio hakovan kako bi mogli upozoriti ostale korisnike." data-en="Report the incident to the project whose account was hacked so they can warn other users.">Prijavi incident projektu čiji je nalog bio hakovan kako bi mogli upozoriti ostale korisnike.</li>
    <li data-sr="Ne veruj nijednom 'recovery' servisu koji ti se javi nudeći povrat izgubljenih tokena — to je nova prevara." data-en="Do not trust any recovery service that contacts you offering to return lost tokens — that is a new scam.">Ne veruj nijednom 'recovery' servisu koji ti se javi nudeći povrat izgubljenih tokena — to je nova prevara.</li>
    <li data-sr="Prijavi lažni sajt antivirusnim servisima i registrarima domena za brže uklanjanje." data-en="Report the fake site to antivirus services and domain registrars for faster removal.">Prijavi lažni sajt antivirusnim servisima i registrarima domena za brže uklanjanje.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
  <ul class="bullets">
    <li data-sr="Da li su konektovali novčanik na sajt koji su dobili kroz poruku ili oglas?" data-en="Did they connect their wallet to a site they received through a message or ad?">Da li su konektovali novčanik na sajt koji su dobili kroz poruku ili oglas?</li>
    <li data-sr="Da li su potpisali neku transakciju ili zahtev za potpis na tom sajtu?" data-en="Did they sign any transaction or signature request on that site?">Da li su potpisali neku transakciju ili zahtev za potpis na tom sajtu?</li>
    <li data-sr="Da li je balans novčanika prazan ili manji nego što bi trebalo biti?" data-en="Is the wallet balance empty or smaller than it should be?">Da li je balans novčanika prazan ili manji nego što bi trebalo biti?</li>
    <li data-sr="Da li je neko već kontaktirao nudeći 'povrat' izgubljenih sredstava?" data-en="Has anyone already contacted them offering recovery of lost funds?">Da li je neko već kontaktirao nudeći 'povrat' izgubljenih sredstava?</li>
  </ul>
  <p data-sr="Rečenice koje rade:" data-en="Sentences that help:">Rečenice koje rade:</p>
  <ul class="bullets">
    <li data-sr="Blockchain transakcije su nepovratne — novac koji je otišao ne može se povratiti bez obzira šta ti nudi 'recovery' servis." data-en="Blockchain transactions are irreversible — money that left cannot be returned regardless of what any recovery service offers.">Blockchain transakcije su nepovratne — novac koji je otišao ne može se povratiti bez obzira šta ti nudi 'recovery' servis.</li>
    <li data-sr="Idi odmah na revoke.cash i opozovi sve approvale dok ima sredstava — svaka sekunda je važna." data-en="Go to revoke.cash immediately and revoke all approvals while there are still funds — every second matters.">Idi odmah na revoke.cash i opozovi sve approvale dok ima sredstava — svaka sekunda je važna.</li>
    <li data-sr="Prebaci sve preostalo na novu adresu sada — kompromitovana adresa ne sme da se koristi." data-en="Move everything remaining to a new address now — the compromised address must not be used.">Prebaci sve preostalo na novu adresu sada — kompromitovana adresa ne sme da se koristi.</li>
    <li data-sr="Svaki ko ti se sad javi nudeći 'povrat' je novi napadač koji pokušava da uzme još — ignoriši ih." data-en="Everyone who contacts you now offering recovery is a new attacker trying to take more — ignore them.">Svaki ko ti se sad javi nudeći 'povrat' je novi napadač koji pokušava da uzme još — ignoriši ih.</li>
  </ul>
</section>


`
};
