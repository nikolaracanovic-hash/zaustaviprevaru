if (!window.SCAM_CONTENT) window.SCAM_CONTENT = {};
window.SCAM_CONTENT["wallet-approval-scam"] = {
  raw_html: `
<section class="content-section">
  <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
  <p data-sr="Odobrenje u novčaniku može značiti da ugovor sme da troši vaše tokene ili NFT-ove u granicama koje ste potpisali. Lažni sajt prikazuje jednu radnju dok potpis daje mnogo šire pravo." data-en="A wallet approval can mean a contract may spend your tokens or NFTs within the limits you signed. A fake site shows one action while the signature grants much broader rights.">Odobrenje u novčaniku može značiti da ugovor sme da troši vaše tokene ili NFT-ove u granicama koje ste potpisali. Lažni sajt prikazuje jednu radnju dok potpis daje mnogo šire pravo.</p>
  <p data-sr="Seed fraza nije jedini način gubitka; neograničeno odobrenje na ERC-20 ili setApprovalForAll na NFT kolekciju može isprazniti novčanik bez novog potpisa kasnije." data-en="The seed phrase is not the only loss path; unlimited ERC-20 approval or NFT setApprovalForAll can empty a wallet without another signature later.">Seed fraza nije jedini način gubitka; neograničeno odobrenje na ERC-20 ili setApprovalForAll na NFT kolekciju može isprazniti novčanik bez novog potpisa kasnije.</p>
</section>

<section class="content-section">
  <h2 data-sr="Hronološki tok (faze)" data-en="Timeline (phases)">Hronološki tok (faze)</h2>

  <article class="phase">
    <h3 data-sr="Faza 1 — Mamac" data-en="Phase 1 — Bait">Faza 1 — Mamac</h3>
    <p data-sr="Korisnik vidi oglas, airdrop, nagradu ili pozivnicu za test aplikacije. Link vodi na sajt koji traži povezivanje novčanika kao normalan korak." data-en="The user sees an ad, airdrop, reward, or app test invite. The link leads to a site that asks for a wallet connect as a normal step.">Korisnik vidi oglas, airdrop, nagradu ili pozivnicu za test aplikacije. Link vodi na sajt koji traži povezivanje novčanika kao normalan korak.</p>
    <ul class="bullets">
      <li data-sr="Domen liči na poznat projekat uz jednu sitnu razliku." data-en="The domain resembles a known project with one small difference.">Domen liči na poznat projekat uz jednu sitnu razliku.</li>
      <li data-sr="Vremenski rokovi nagoveštavaju da će prilika uskoro nestati." data-en="Deadlines suggest the opportunity will soon disappear.">Vremenski rokovi nagoveštavaju da će prilika uskoro nestati.</li>
      <li data-sr="Discord ili Twitter poruke dolaze sa naloga koji deluje zvanično." data-en="Discord or Twitter messages come from accounts that look official.">Discord ili Twitter poruke dolaze sa naloga koji deluje zvanično.</li>
      <li data-sr="Sajt odmah nudi dugme Connect bez objašnjenja šta sledi posle odobrenja." data-en="The site immediately offers a Connect button without explaining what follows approval.">Sajt odmah nudi dugme Connect bez objašnjenja šta sledi posle odobrenja.</li>
    </ul>
    <div class="callout"><strong data-sr="Novčanik je povezan sa sajtom koji nije proveren karakter po karakter na zvaničnom domenu.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Novčanik je povezan sa sajtom koji nije proveren karakter po karakter na zvaničnom domenu." data-en="The wallet is connected to a site not verified character by character against the official domain.">Novčanik je povezan sa sajtom koji nije proveren karakter po karakter na zvaničnom domenu.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 2 — Zahtev za potpis" data-en="Phase 2 — Signature request">Faza 2 — Zahtev za potpis</h3>
    <p data-sr="Aplikacija novčanika prikazuje zahtev za transakciju ili poruku koju je teško pročitati. Sajt tvrdi da je to mint, claim ili mala naknada." data-en="The wallet app shows a transaction or message that is hard to read. The site claims it is a mint, claim, or small fee.">Aplikacija novčanika prikazuje zahtev za transakciju ili poruku koju je teško pročitati. Sajt tvrdi da je to mint, claim ili mala naknada.</p>
    <ul class="bullets">
      <li data-sr="Pojavljuje se neograničen iznos odobrenja za token koji držite." data-en="An unlimited approval amount appears for a token you hold.">Pojavljuje se neograničen iznos odobrenja za token koji držite.</li>
      <li data-sr="Za NFT se traži odobrenje za celu kolekciju, ne samo za jedan komad." data-en="For NFTs, approval is requested for the whole collection, not just one item.">Za NFT se traži odobrenje za celu kolekciju, ne samo za jedan komad.</li>
      <li data-sr="Adresa pametnog ugovora nije ista kao javno objavljena adresa projekta." data-en="The smart contract address is not the same as the project's publicly published address.">Adresa pametnog ugovora nije ista kao javno objavljena adresa projekta.</li>
      <li data-sr="Agent u četu žuri da potvrdite pre nego što pročitate detalje." data-en="The chat agent rushes you to confirm before you read the details.">Agent u četu žuri da potvrdite pre nego što pročitate detalje.</li>
    </ul>
    <div class="callout"><strong data-sr="Korisnik je potvrdio transakciju koja daje široko odobrenje nepoznatom ugovoru.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Korisnik je potvrdio transakciju koja daje široko odobrenje nepoznatom ugovoru." data-en="The user confirmed a transaction granting broad approval to an unknown contract.">Korisnik je potvrdio transakciju koja daje široko odobrenje nepoznatom ugovoru.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching at this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="wallet-drainer.html" data-sr="Wallet drainer — često isti mehanizam odobrenja." data-en="Wallet drainer — often the same approval mechanism.">Wallet drainer — često isti mehanizam odobrenja.</a></li>
        <li><a href="airdrop-scam.html" data-sr="Airdrop prevara — čest ulazni kanal." data-en="Airdrop scam — common entry channel.">Airdrop prevara — čest ulazni kanal.</a></li>
      </ul>
    </div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 3 — Eksploatacija odobrenja" data-en="Phase 3 — Exploiting the approval">Faza 3 — Eksploatacija odobrenja</h3>
    <p data-sr="Napadač ili bot koristi odobrenje da prebaci tokene kada je mreža povoljna ili kada je balans dovoljan." data-en="The attacker or bot uses the approval to move tokens when the network is favorable or the balance is sufficient.">Napadač ili bot koristi odobrenje da prebaci tokene kada je mreža povoljna ili kada je balans dovoljan.</p>
    <ul class="bullets">
      <li data-sr="Transferi ne zahtevaju da žrtva bude na sajtu u trenutku ispraznjavanja." data-en="Transfers do not require the victim to be on the site at drain time.">Transferi ne zahtevaju da žrtva bude na sajtu u trenutku ispraznjavanja.</li>
      <li data-sr="Više tokena može otići u jednoj seriji transakcija." data-en="Multiple tokens may leave in one series of transactions.">Više tokena može otići u jednoj seriji transakcija.</li>
      <li data-sr="Gas naknadu često plaća žrtvin novčanik pri prvom pozivu ugovora." data-en="Gas is often paid from the victim wallet on the contract's first call.">Gas naknadu često plaća žrtvin novčanik pri prvom pozivu ugovora.</li>
      <li data-sr="Pražnjenje može kasniti satima da bi se sakupilo više sredstava." data-en="The drain may be delayed by hours to accumulate more funds.">Pražnjenje može kasniti satima da bi se sakupilo više sredstava.</li>
    </ul>
    <div class="callout"><strong data-sr="Izlazni transferi su potvrđeni na lancu.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Izlazni transferi su potvrđeni na lancu." data-en="Outgoing transfers are confirmed on-chain.">Izlazni transferi su potvrđeni na lancu.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 4 — Prvo otkrivanje" data-en="Phase 4 — First discovery">Faza 4 — Prvo otkrivanje</h3>
    <p data-sr="Korisnik primećuje pad balansa, čudne transakcije ili obaveštenje berze o pravilu sredstvima." data-en="The user notices a balance drop, odd transactions, or an exchange notice about funds.">Korisnik primećuje pad balansa, čudne transakcije ili obaveštenje berze o pravilu sredstvima.</p>
    <ul class="bullets">
      <li data-sr="Explorer pokazuje interakciju sa ugovorom koji ne prepoznajete." data-en="The explorer shows interaction with a contract you do not recognize.">Explorer pokazuje interakciju sa ugovorom koji ne prepoznajete.</li>
      <li data-sr="Lista odobrenja na alatima tipa revoke.cash prikazuje nepoznate zapise." data-en="Approval lists on tools like revoke.cash show unknown entries.">Lista odobrenja na alatima tipa revoke.cash prikazuje nepoznate zapise.</li>
      <li data-sr="NFT nestaju iz prikaza iako niste slali prodaju." data-en="NFTs disappear from display though you did not send a sale.">NFT nestaju iz prikaza iako niste slali prodaju.</li>
    </ul>
    <div class="callout"><strong data-sr="Korisnik potvrđuje da odobrenje postoji i da transferi nisu njihova namera.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Korisnik potvrđuje da odobrenje postoji i da transferi nisu njihova namera." data-en="The user confirms an approval exists and transfers were not their intent.">Korisnik potvrđuje da odobrenje postoji i da transferi nisu njihova namera.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 5 — Oporavak delimičan" data-en="Phase 5 — Partial recovery">Faza 5 — Oporavak delimičan</h3>
    <p data-sr="Opoziv odobrenja sprečava nove transfer ali ne vraća ono što je već odvedeno." data-en="Revoking approval stops new transfers but does not return what already left.">Opoziv odobrenja sprečava nove transfer ali ne vraća ono što je već odvedeno.</p>
    <ul class="bullets">
      <li data-sr="Opoziv zahteva novu transakciju i gas." data-en="Revocation requires a new transaction and gas.">Opoziv zahteva novu transakciju i gas.</li>
      <li data-sr="Ako je ostalo nešto na adresi, prebacivanje na čist novčanik smanjuje rizik." data-en="If anything remains on the address, moving it to a clean wallet reduces risk.">Ako je ostalo nešto na adresi, prebacivanje na čist novčanik smanjuje rizik.</li>
      <li data-sr="Treba proći sva lanca na kojima koristite isti novčanik." data-en="You should check every chain where you use the same wallet.">Treba proći sva lanca na kojima koristite isti novčanik.</li>
      <li data-sr="Hardverski novčanik ne menja pravilo da odobrenje može biti dato iz aplikacije." data-en="A hardware wallet does not change the rule that approval can be given from the app.">Hardverski novčanik ne menja pravilo da odobrenje može biti dato iz aplikacije.</li>
    </ul>
    <div class="callout"><strong data-sr="Sva sumnjiva odobrenja su opozvana na svim relevantnim lancima.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Sva sumnjiva odobrenja su opozvana na svim relevantnim lancima." data-en="All suspicious approvals are revoked on all relevant chains.">Sva sumnjiva odobrenja su opozvana na svim relevantnim lancima.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching at this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="nft-scam.html" data-sr="NFT prevara — često setApprovalForAll." data-en="NFT scam — often setApprovalForAll.">NFT prevara — često setApprovalForAll.</a></li>
        <li><a href="seed-phrase-scam.html" data-sr="Seed fraza — drugi put do potpunog gubitka kontrole." data-en="Seed phrase — another path to full loss of control.">Seed fraza — drugi put do potpunog gubitka kontrole.</a></li>
      </ul>
    </div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 6 — Prevencija ubuduće" data-en="Phase 6 — Prevention going forward">Faza 6 — Prevencija ubuduće</h3>
    <p data-sr="Rutina: čitati detalje svake transakcije, odbijati neograničena odobrenja, i koristiti zaseban novčanik za eksperimente." data-en="Routine: read every transaction detail, reject unlimited approvals, and use a separate wallet for experiments.">Rutina: čitati detalje svake transakcije, odbijati neograničena odobrenja, i koristiti zaseban novčanik za eksperimente.</p>
    <ul class="bullets">
      <li data-sr="Redovno pregledajte revoke.cash ili ekvivalent za svaki lanac." data-en="Regularly review revoke.cash or an equivalent per chain.">Redovno pregledajte revoke.cash ili ekvivalent za svaki lanac.</li>
      <li data-sr="Ne potpisujte na sajtovima koji nisu bookmarkovani iz zvaničnog izvora." data-en="Do not sign on sites not bookmarked from an official source.">Ne potpisujte na sajtovima koji nisu bookmarkovani iz zvaničnog izvora.</li>
      <li data-sr="Ograničite iznos odobrenja kada aplikacija to dozvoljava." data-en="Limit approval amounts when the app allows.">Ograničite iznos odobrenja kada aplikacija to dozvoljava.</li>
      <li data-sr="Obučite tim da ne koristi isti novčanik za lično i za test oglase." data-en="Train the team not to use the same wallet for personal and test ads.">Obučite tim da ne koristi isti novčanik za lično i za test oglase.</li>
    </ul>
    <div class="callout"><strong data-sr="Usvojena je politika potpisa i odobrenja pre bilo kog novog povezivanja na nepoznate sajtove.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Usvojena je politika potpisa i odobrenja pre bilo kog novog povezivanja na nepoznate sajtove." data-en="A signing and approval policy is adopted before any new connection to unknown sites.">Usvojena je politika potpisa i odobrenja pre bilo kog novog povezivanja na nepoznate sajtove.</span></div>
  </article>
</section>

<section class="content-section">
  <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
  <ul class="bullets">
    <li data-sr="Zahtev za unlimited approve na ERC-20." data-en="Request for unlimited ERC-20 approve.">Zahtev za unlimited approve na ERC-20.</li>
    <li data-sr="setApprovalForAll za celu NFT kolekciju radi sitne nagrade." data-en="setApprovalForAll for an entire NFT collection for a tiny reward.">setApprovalForAll za celu NFT kolekciju radi sitne nagrade.</li>
    <li data-sr="Sajt ne objašnjava adresu pametnog ugovora u čitljivom obliku." data-en="The site does not explain the smart contract address in readable form.">Sajt ne objašnjava adresu pametnog ugovora u čitljivom obliku.</li>
    <li data-sr="MetaMask ili drugi novčanik prikazuje upozorenje koje ignorišete na nagovor." data-en="MetaMask or another wallet shows a warning you ignore on urging.">MetaMask ili drugi novčanik prikazuje upozorenje koje ignorišete na nagovor.</li>
    <li data-sr="Link dolazi iz DM-a od nepoznatog naloga." data-en="The link comes from a DM from an unknown account.">Link dolazi iz DM-a od nepoznatog naloga.</li>
    <li data-sr="Tvrdnja da je odobrenje privremeno ili samo za čitanje." data-en="A claim that approval is temporary or read-only.">Tvrdnja da je odobrenje privremeno ili samo za čitanje.</li>
    <li data-sr="Gas fee je neobično visok u odnosu na navodnu akciju." data-en="The gas fee is unusually high for the stated action.">Gas fee je neobično visok u odnosu na navodnu akciju.</li>
    <li data-sr="Projekat nije najavio interakciju sa tim ugovorom na zvaničnom kanalu." data-en="The project did not announce interaction with that contract on an official channel.">Projekat nije najavio interakciju sa tim ugovorom na zvaničnom kanalu.</li>
    <li data-sr="Više različitih tokena se traži u istom koraku bez jasnog razloga." data-en="Multiple different tokens are requested in one step without a clear reason.">Više različitih tokena se traži u istom koraku bez jasnog razloga.</li>
    <li data-sr="Čet agent traži da brzo završite jer ističe whitelist." data-en="The chat agent asks you to finish quickly because a whitelist expires.">Čet agent traži da brzo završite jer ističe whitelist.</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
  <ol class="steps">
    <li data-sr="Da li u novčaniku piše unlimited ili neograničeno uz token?" data-en="Does the wallet show unlimited next to the token?">Da li u novčaniku piše unlimited ili neograničeno uz token?</li>
    <li data-sr="Da li se traži odobrenje za celu kolekciju NFT?" data-en="Is approval requested for an entire NFT collection?">Da li se traži odobrenje za celu kolekciju NFT?</li>
    <li data-sr="Da li adresa ugovora odgovara onoj na zvaničnom sajtu projekta?" data-en="Does the contract address match the one on the project's official site?">Da li adresa ugovora odgovara onoj na zvaničnom sajtu projekta?</li>
    <li data-sr="Da li je domen sajta tačno isti kao zvanični?" data-en="Is the site domain exactly the same as the official one?">Da li je domen sajta tačno isti kao zvanični?</li>
    <li data-sr="Da li možete sačekati i pitati zajednicu na zvaničnom serveru pre potpisa?" data-en="Can you wait and ask the community on the official server before signing?">Da li možete sačekati i pitati zajednicu na zvaničnom serveru pre potpisa?</li>
    <li data-sr="Da li postoji razlog da dajete bilo kakvo odobrenje za uslugu koju ne plaćate?" data-en="Is there a reason to grant any approval for a service you are not paying for?">Da li postoji razlog da dajete bilo kakvo odobrenje za uslugu koju ne plaćate?</li>
    <li data-sr="Da li biste koristili novi prazan novčanik za ovaj eksperiment?" data-en="Would you use a new empty wallet for this experiment?">Da li biste koristili novi prazan novčanik za ovaj eksperiment?</li>
    <li data-sr="Da li ste proverili revoke.cash poslednjih nedelja dana?" data-en="Have you checked revoke.cash in the past week?">Da li ste proverili revoke.cash poslednjih nedelja dana?</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Checklista" data-en="Checklist">Checklista</h2>
  <ul class="bullets">
    <li data-sr="Da li čitam detalje transakcije pre potvrde?" data-en="Do I read transaction details before confirming?">Da li čitam detalje transakcije pre potvrde?</li>
    <li data-sr="Da li znam šta znači unlimited approve?" data-en="Do I know what unlimited approve means?">Da li znam šta znači unlimited approve?</li>
    <li data-sr="Da li znam šta znači setApprovalForAll?" data-en="Do I know what setApprovalForAll means?">Da li znam šta znači setApprovalForAll?</li>
    <li data-sr="Da li koristim bookmark za DApp umesto linka iz poruke?" data-en="Do I use a bookmark for the DApp instead of a link from a message?">Da li koristim bookmark za DApp umesto linka iz poruke?</li>
    <li data-sr="Da li imam listu ugovora kojima verujem?" data-en="Do I have a list of contracts I trust?">Da li imam listu ugovora kojima verujem?</li>
    <li data-sr="Da li bih odbio potpis ako bih morao da objasnim zašto drugoj osobi?" data-en="Would I refuse the signature if I had to explain why to another person?">Da li bih odbio potpis ako bih morao da objasnim zašto drugoj osobi?</li>
    <li data-sr="Da li je novčanik koji koristim hot wallet sa puno sredstava?" data-en="Is the wallet I use a hot wallet with large funds?">Da li je novčanik koji koristim hot wallet sa puno sredstava?</li>
    <li data-sr="Da li znam kako da opozovem odobrenje ako zatreba?" data-en="Do I know how to revoke approval if needed?">Da li znam kako da opozovem odobrenje ako zatreba?</li>
    <li data-sr="Da li tim deli iste prakse potpisivanja?" data-en="Does the team share the same signing practices?">Da li tim deli iste prakse potpisivanja?</li>
    <li data-sr="Da li dokumentujem svaku novu DApp integraciju?" data-en="Do I document each new DApp integration?">Da li dokumentujem svaku novu DApp integraciju?</li>
    <li data-sr="Da li proveravam explorer posle svake sumnjive sesije?" data-en="Do I check the explorer after every suspicious session?">Da li proveravam explorer posle svake sumnjive sesije?</li>
    <li data-sr="Da li imam plan ako ugledam nepoznato odobrenje?" data-en="Do I have a plan if I see an unknown approval?">Da li imam plan ako ugledam nepoznato odobrenje?</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Ako sumnja krene" data-en="If suspicion starts">Ako sumnja krene</h2>
  <ol class="steps">
    <li data-sr="Odbijte preostale potpise u novčaniku odmah." data-en="Reject remaining signatures in the wallet immediately.">Odbijte preostale potpise u novčaniku odmah.</li>
    <li data-sr="Otvorite revoke.cash ili sličan alat i opozovite nepoznata odobrenja." data-en="Open revoke.cash or a similar tool and revoke unknown approvals.">Otvorite revoke.cash ili sličan alat i opozovite nepoznata odobrenja.</li>
    <li data-sr="Prebacite preostala sredstva na novu adresu ako je moguće pre sledećeg transfera." data-en="Move remaining funds to a new address if possible before the next transfer.">Prebacite preostala sredstva na novu adresu ako je moguće pre sledećeg transfera.</li>
    <li data-sr="Sačuvajte URL i adrese ugovora za prijavu." data-en="Save URLs and contract addresses for reporting.">Sačuvajte URL i adrese ugovora za prijavu.</li>
    <li data-sr="Ne instalirajte alate za povrat koje šalju nepoznati kontakti." data-en="Do not install recovery tools sent by unknown contacts.">Ne instalirajte alate za povrat koje šalju nepoznati kontakti.</li>
    <li data-sr="Obavestite projekat ako je lažni sajt koristio njihov brend." data-en="Notify the project if the fake site used their brand.">Obavestite projekat ako je lažni sajt koristio njihov brend.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
  <ul class="bullets">
    <li data-sr="Da li su potvrdili transakciju koja spominje approve ili setApproval?" data-en="Did they confirm a transaction mentioning approve or setApproval?">Da li su potvrdili transakciju koja spominje approve ili setApproval?</li>
    <li data-sr="Da li su povezali novčanik na sajt sa oglasa?" data-en="Did they connect a wallet to a site from an ad?">Da li su povezali novčanik na sajt sa oglasa?</li>
    <li data-sr="Da li još imaju sredstva na adresi?" data-en="Do they still have funds on the address?">Da li još imaju sredstva na adresi?</li>
    <li data-sr="Da li znaju kako da koriste explorer za svoju adresu?" data-en="Do they know how to use an explorer for their address?">Da li znaju kako da koriste explorer za svoju adresu?</li>
  </ul>
  <p data-sr="Rečenice koje rade:" data-en="Sentences that help:">Rečenice koje rade:</p>
  <ul class="bullets">
    <li data-sr="Odobrenje je kao ključ koji nekom daje pravo da troši vaše tokene dok ga ne opozovete." data-en="Approval is like a key that lets someone spend your tokens until you revoke it.">Odobrenje je kao ključ koji nekom daje pravo da troši vaše tokene dok ga ne opozovete.</li>
    <li data-sr="Hajde prvo da opozovemo sve što je nepoznato, pa onda prebacimo ostatak." data-en="Let's first revoke everything unknown, then move what is left.">Hajde prvo da opozovemo sve što je nepoznato, pa onda prebacimo ostatak.</li>
    <li data-sr="Ne potpisuj ništa novo dok ne prođemo listu odobrenja zajedno." data-en="Do not sign anything new until we review the approval list together.">Ne potpisuj ništa novo dok ne prođemo listu odobrenja zajedno.</li>
    <li data-sr="Ako je novčanik kompromitovan odobrenjem, razmisli o novom novčaniku za velike iznose." data-en="If the wallet is compromised by approval, consider a new wallet for large amounts.">Ako je novčanik kompromitovan odobrenjem, razmisli o novom novčaniku za velike iznose.</li>
  </ul>
</section>
`
};
