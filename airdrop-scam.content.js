if (!window.SCAM_CONTENT) window.SCAM_CONTENT = {};
window.SCAM_CONTENT["airdrop-scam"] = {
  raw_html: `
<section class="content-section">
  <h2 data-sr="Uvod: kako radi airdrop prevara" data-en="Introduction: how the airdrop scam works">Uvod: kako radi airdrop prevara</h2>
  <p data-sr="Korisnik dobija obaveštenje da mu je 'pao' airdrop — besplatni tokeni koje treba da 'claim-uje'. Link vodi na lažni sajt koji izgleda kao zvanična stranica projekta. Na sajtu se zahteva konekcija novčanika i potpis koji aktivira wallet drainer — maliciozni pametni ugovor koji isprazni sav sadržaj novčanika." data-en="The user receives a notification that an airdrop has landed for them — free tokens they need to claim. The link leads to a fake site that looks like the project's official page. The site requests wallet connection and a signature that activates a wallet drainer — a malicious smart contract that empties the wallet's entire contents.">Korisnik dobija obaveštenje da mu je 'pao' airdrop — besplatni tokeni koje treba da 'claim-uje'. Link vodi na lažni sajt koji izgleda kao zvanična stranica projekta. Na sajtu se zahteva konekcija novčanika i potpis koji aktivira wallet drainer — maliciozni pametni ugovor koji isprazni sav sadržaj novčanika.</p>
  <p data-sr="Airdrop prevare su efikasne jer kombinuju besplatan novac kao mamac sa poznatim brendom projekta za kredibilitet. Korisnik misli da dobija nešto — umesto toga gubi sve što ima u novčaniku. Distribucija se vrši masovno kroz hakovane naloge i Discord servere pa isti link vidi hiljade korisnika u kratkom vremenskom periodu." data-en="Airdrop scams are effective because they combine free money as bait with a known project brand for credibility. The user thinks they are receiving something — instead they lose everything in their wallet. Distribution happens massively through hacked accounts and Discord servers so the same link reaches thousands of users in a short time.">Airdrop prevare su efikasne jer kombinuju besplatan novac kao mamac sa poznatim brendom projekta za kredibilitet. Korisnik misli da dobija nešto — umesto toga gubi sve što ima u novčaniku. Distribucija se vrši masovno kroz hakovane naloge i Discord servere pa isti link vidi hiljade korisnika u kratkom vremenskom periodu.</p>
</section>

<section class="content-section">
  <h2 data-sr="Model" data-en="Model">Model</h2>
  <div class="phase">
    <div class="label" data-sr="Lanac" data-en="Chain">Lanac</div>
    <p data-sr="Lažni airdrop oglas → lažni claim sajt → wallet connect → potpis → approval drainera → pražnjenje novčanika → funds na napadačevim adresama" data-en="Fake airdrop ad → fake claim site → wallet connect → signature → drainer approval → wallet drain → funds at attacker's addresses">Lažni airdrop oglas → lažni claim sajt → wallet connect → potpis → approval drainera → pražnjenje novčanika → funds na napadačevim adresama</p>
  </div>
  <div class="callout">
    <strong data-sr="Prag:" data-en="Threshold:">Prag:</strong>
    <span data-sr="Potpis 'claim' transakcije. Ona ne isplaćuje airdrop nego daje approval draineru koji odmah praznid novčanik." data-en="Signing the claim transaction. It does not pay out the airdrop but grants approval to the drainer which immediately drains the wallet.">Potpis 'claim' transakcije. Ona ne isplaćuje airdrop nego daje approval draineru koji odmah praznid novčanik.</span>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Kako generalno radi: mehanika" data-en="How it works: mechanics">Kako generalno radi: mehanika</h2>
  <div class="grid-2">
    <div class="phase">
      <div class="label" data-sr="Šta gradi uverljivost" data-en="What builds credibility">Šta gradi uverljivost</div>
      <ul class="bullets">
        <li data-sr="Oglas dolazi od hakovanog naloga projekta koji korisnik prati i veruje mu." data-en="The ad comes from a hacked account of a project the user follows and trusts.">Oglas dolazi od hakovanog naloga projekta koji korisnik prati i veruje mu.</li>
        <li data-sr="Lažni sajt koristi iste vizuelne elemente kao zvanični — logo, boje, fontove, strukturu stranice." data-en="The fake site uses the same visual elements as the official one — logo, colors, fonts, page structure.">Lažni sajt koristi iste vizuelne elemente kao zvanični — logo, boje, fontove, strukturu stranice.</li>
        <li data-sr="Posle konekcije novčanika sajt prikazuje personalizovani iznos airdrop-a što deluje autentično." data-en="After connecting the wallet the site shows a personalized airdrop amount which seems authentic.">Posle konekcije novčanika sajt prikazuje personalizovani iznos airdrop-a što deluje autentično.</li>
        <li data-sr="Vremenski rok za 'claim' stvara pritisak da korisnik ne traži vreme na provere." data-en="The deadline for claiming creates pressure so the user does not waste time on checks.">Vremenski rok za 'claim' stvara pritisak da korisnik ne traži vreme na provere.</li>
      </ul>
    </div>
    <div class="phase">
      <div class="label" data-sr="Kako se uvodi radnja" data-en="How the action is introduced">Kako se uvodi radnja</div>
      <ul class="bullets">
        <li data-sr="Claim dugme pokreće zahtev za potpis koji interno poziva drainer kontrakt umesto distribucije tokena." data-en="The claim button triggers a signature request that internally calls the drainer contract instead of token distribution.">Claim dugme pokreće zahtev za potpis koji interno poziva drainer kontrakt umesto distribucije tokena.</li>
        <li data-sr="MetaMask prikazuje generički tekst ili hex podatke koji korisniku ništa ne govore." data-en="MetaMask shows generic text or hex data that tells the user nothing.">MetaMask prikazuje generički tekst ili hex podatke koji korisniku ništa ne govore.</li>
        <li data-sr="Pražnjenje je automatizovano i dešava se u sekundi od potpisa bez daljnje interakcije." data-en="The drain is automated and happens within seconds of the signature without further interaction.">Pražnjenje je automatizovano i dešava se u sekundi od potpisa bez daljnje interakcije.</li>
        <li data-sr="Napadač targetira adrese sa visokim balansom — prethodno skenira novčanike koji se konektuju." data-en="The attacker targets addresses with high balances — previously scanning wallets that connect.">Napadač targetira adrese sa visokim balansom — prethodno skenira novčanike koji se konektuju.</li>
      </ul>
    </div>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Hronološki tok (faze + evolucije)" data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

  <article class="phase">
    <h3 data-sr="Faza 1 — Hakovanje distribucijskog naloga" data-en="Phase 1 — Hacking the distribution account">Faza 1 — Hakovanje distribucijskog naloga</h3>
    <p data-sr="Napadač hakuje Twitter, Discord ili Telegram nalog poznatog projekta. Odmah objavljuje lažni airdrop oglas sa linkom na lažni claim sajt." data-en="The attacker hacks the Twitter, Discord or Telegram account of a known project. They immediately post a fake airdrop announcement with a link to the fake claim site.">Napadač hakuje Twitter, Discord ili Telegram nalog poznatog projekta. Odmah objavljuje lažni airdrop oglas sa linkom na lažni claim sajt.</p>
    <ul class="bullets">
      <li data-sr="Oglas je objavljen sa zvaničnog naloga pa mnogi korisnici odmah veruju da je legitiman." data-en="The ad is published from the official account so many users immediately believe it is legitimate.">Oglas je objavljen sa zvaničnog naloga pa mnogi korisnici odmah veruju da je legitiman.</li>
      <li data-sr="Napadač ima mali vremenski prozor pre nego što projekat uhvati da mu je nalog hakovan i ukloni oglas." data-en="The attacker has a small time window before the project realizes their account is hacked and removes the ad.">Napadač ima mali vremenski prozor pre nego što projekat uhvati da mu je nalog hakovan i ukloni oglas.</li>
      <li data-sr="Lažni sajt je registrovan unapred sa domenом koji je gotovo identičan originalnom." data-en="The fake site is pre-registered with a domain almost identical to the original.">Lažni sajt je registrovan unapred sa domenом koji je gotovo identičan originalnom.</li>
    </ul>
    <div class="callout"><strong data-sr="Hiljade korisnika vidi oglas pre nego što ga projekat ukloni.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Hiljade korisnika vidi oglas pre nego što ga projekat ukloni." data-en="Thousands of users see the ad before the project removes it.">Hiljade korisnika vidi oglas pre nego što ga projekat ukloni.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 2 — Poseta lažnom sajtu" data-en="Phase 2 — Visiting the fake site">Faza 2 — Poseta lažnom sajtu</h3>
    <p data-sr="Korisnik klikće na link iz oglasa i posećuje lažni sajt. Vizuelno je identičan originalnom. Sajt odmah traži konekciju novčanika." data-en="The user clicks the link from the ad and visits the fake site. It is visually identical to the original. The site immediately requests wallet connection.">Korisnik klikće na link iz oglasa i posećuje lažni sajt. Vizuelno je identičan originalnom. Sajt odmah traži konekciju novčanika.</p>
    <ul class="bullets">
      <li data-sr="URL je gotovo identičan originalu — razlika je samo u jednom karakteru ili TLD-u." data-en="The URL is almost identical to the original — the difference is only one character or the TLD.">URL je gotovo identičan originalu — razlika je samo u jednom karakteru ili TLD-u.</li>
      <li data-sr="Sajt prikazuje countdown timer za 'claim' koji ubrzava donošenje odluka." data-en="The site displays a countdown timer for the claim that accelerates decision-making.">Sajt prikazuje countdown timer za 'claim' koji ubrzava donošenje odluka.</li>
      <li data-sr="Nema HTTPS upozorenja jer napadač koristi validan SSL sertifikat za lažni domen." data-en="There are no HTTPS warnings because the attacker uses a valid SSL certificate for the fake domain.">Nema HTTPS upozorenja jer napadač koristi validan SSL sertifikat za lažni domen.</li>
    </ul>
    <div class="callout"><strong data-sr="Korisnik konektuje novčanik — napadač vidi balans i priprema drainer parametre.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Korisnik konektuje novčanik — napadač vidi balans i priprema drainer parametre." data-en="The user connects their wallet — the attacker sees the balance and prepares drainer parameters.">Korisnik konektuje novčanik — napadač vidi balans i priprema drainer parametre.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 3 — Lažni claim i drainer signature" data-en="Phase 3 — Fake claim and drainer signature">Faza 3 — Lažni claim i drainer signature</h3>
    <p data-sr="Sajt prikazuje personalizovani iznos airdrop-a i 'Claim' dugme. Klik pokreće zahtev za potpis koji interno aktivira drainer kontrakt." data-en="The site shows a personalized airdrop amount and a Claim button. Clicking triggers a signature request that internally activates the drainer contract.">Sajt prikazuje personalizovani iznos airdrop-a i 'Claim' dugme. Klik pokreće zahtev za potpis koji interno aktivira drainer kontrakt.</p>
    <ul class="bullets">
      <li data-sr="Zahtev za potpis u MetaMask-u prikazuje generički tekst kao 'Claim Airdrop v1' bez tehničkih detalja." data-en="The signature request in MetaMask shows generic text like Claim Airdrop v1 without technical details.">Zahtev za potpis u MetaMask-u prikazuje generički tekst kao 'Claim Airdrop v1' bez tehničkih detalja.</li>
      <li data-sr="Klik na 'detalje' u MetaMask-u otkriva pravi poziv — setApprovalForAll ili unlimited approve." data-en="Clicking details in MetaMask reveals the actual call — setApprovalForAll or unlimited approve.">Klik na 'detalje' u MetaMask-u otkriva pravi poziv — setApprovalForAll ili unlimited approve.</li>
      <li data-sr="Korisnik potpisuje jer izgleda identično legitimnim claim transakcijama koje je potpisivao ranije." data-en="The user signs because it looks identical to legitimate claim transactions they have signed before.">Korisnik potpisuje jer izgleda identično legitimnim claim transakcijama koje je potpisivao ranije.</li>
    </ul>
    <div class="callout"><strong data-sr="Korisnik potpisuje — drainer kontrakt ima approval za sve tokene i pražnjenje počinje automatski.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Korisnik potpisuje — drainer kontrakt ima approval za sve tokene i pražnjenje počinje automatski." data-en="The user signs — the drainer contract has approval for all tokens and draining starts automatically.">Korisnik potpisuje — drainer kontrakt ima approval za sve tokene i pražnjenje počinje automatski.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching at this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="wallet-drainer.html" data-sr="Wallet drainer — tehnički mehanizam koji airdrop prevara aktivira." data-en="Wallet drainer — the technical mechanism that the airdrop scam activates.">Wallet drainer — tehnički mehanizam koji airdrop prevara aktivira.</a></li>
        <li><a href="nft-scam.html" data-sr="NFT prevara — airdrop lažnih NFT-ova koji aktiviraju drainer pri claim-u." data-en="NFT scam — airdrop of fake NFTs that activate a drainer upon claiming.">NFT prevara — airdrop lažnih NFT-ova koji aktiviraju drainer pri claim-u.</a></li>
      </ul>
    </div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 4 — Pražnjenje i nestanak napadača" data-en="Phase 4 — Draining and attacker disappearance">Faza 4 — Pražnjenje i nestanak napadača</h3>
    <p data-sr="Bot automatski prazni novčanik u sekundi od potpisa. Napadač uklanja lažni sajt i oglas. Hakovanom nalogu projekta vraća se pristup ili ostaje bez njega." data-en="The bot automatically drains the wallet within seconds of the signature. The attacker removes the fake site and ad. Access to the hacked project account is either returned or remains lost.">Bot automatski prazni novčanik u sekundi od potpisa. Napadač uklanja lažni sajt i oglas. Hakovanom nalogu projekta vraća se pristup ili ostaje bez njega.</p>
    <ul class="bullets">
      <li data-sr="Tokeni prolaze kroz više relay adresa da bi se otežalo praćenje." data-en="Tokens pass through multiple relay addresses to make tracing difficult.">Tokeni prolaze kroz više relay adresa da bi se otežalo praćenje.</li>
      <li data-sr="Napadač prodaje tokene ili ih šalje u mixer odmah po pražnjenju." data-en="The attacker sells tokens or sends them to a mixer immediately after draining.">Napadač prodaje tokene ili ih šalje u mixer odmah po pražnjenju.</li>
      <li data-sr="Projekat objavljuje upozorenje o hakovanom nalogu ali mnogi korisnici su već kliknuli link." data-en="The project publishes a warning about the hacked account but many users have already clicked the link.">Projekat objavljuje upozorenje o hakovanom nalogu ali mnogi korisnici su već kliknuli link.</li>
    </ul>
    <div class="callout"><strong data-sr="Novčanik je prazan i napadač je zatvorio operaciju.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Novčanik je prazan i napadač je zatvorio operaciju." data-en="The wallet is empty and the attacker has closed the operation.">Novčanik je prazan i napadač je zatvorio operaciju.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 5 — Otkrivanje i recovery prevara" data-en="Phase 5 — Discovery and recovery scams">Faza 5 — Otkrivanje i recovery prevara</h3>
    <p data-sr="Žrtva vidi prazan novčanik i shvata šta se desilo. Odmah se pojavljuju napadači koji nude 'povrat' izgubljenih sredstava za malu uplatu." data-en="The victim sees an empty wallet and realizes what happened. Attackers immediately appear offering recovery of lost funds for a small fee.">Žrtva vidi prazan novčanik i shvata šta se desilo. Odmah se pojavljuju napadači koji nude 'povrat' izgubljenih sredstava za malu uplatu.</p>
    <ul class="bullets">
      <li data-sr="Recovery prevaranti targetiraju žrtve koje su javno objavile gubitak na Twitter-u ili Discord-u." data-en="Recovery scammers target victims who publicly announced their loss on Twitter or Discord.">Recovery prevaranti targetiraju žrtve koje su javno objavile gubitak na Twitter-u ili Discord-u.</li>
      <li data-sr="Niko ne može da povrati blockchain transakcije — svako ko to tvrdi je novi napadač." data-en="Nobody can reverse blockchain transactions — anyone claiming otherwise is a new attacker.">Niko ne može da povrati blockchain transakcije — svako ko to tvrdi je novi napadač.</li>
      <li data-sr="Blockchain explorer na Etherscan-u ili sličnom pokazuje kompletan tok novca posle pražnjenja." data-en="The blockchain explorer on Etherscan or similar shows the complete money tražil after draining.">Blockchain explorer na Etherscan-u ili sličnom pokazuje kompletan tok novca posle pražnjenja.</li>
    </ul>
    <div class="callout"><strong data-sr="Žrtva dokumentuje gubitak i razume da je blockchain transakcija nepovratna.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Žrtva dokumentuje gubitak i razume da je blockchain transakcija nepovratna." data-en="The victim documents the loss and understands that the blockchain transaction is irreversible.">Žrtva dokumentuje gubitak i razume da je blockchain transakcija nepovratna.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 6 — Ublažavanje i prevencija" data-en="Phase 6 — Mitigation and prevention">Faza 6 — Ublažavanje i prevencija</h3>
    <p data-sr="Žrtva reaguje opozivom preostalih approvale i prelaskom na novu adresu. Prijava projektu i zajednici pomaže u upozoravanju ostalih." data-en="The victim reacts by revoking remaining approvals and moving to a new address. Reporting to the project and community helps warn others.">Žrtva reaguje opozivom preostalih approvale i prelaskom na novu adresu. Prijava projektu i zajednici pomaže u upozoravanju ostalih.</p>
    <ul class="bullets">
      <li data-sr="Opoziv svih sumnjivnih approvale na revoke.cash štiti od potencijalnih budućih pražnjenja." data-en="Revoking all suspicious approvals on revoke.cash protects against potential future drains.">Opoziv svih sumnjivnih approvale na revoke.cash štiti od potencijalnih budućih pražnjenja.</li>
      <li data-sr="Nova adresa novčanika nema poznate approvale i bezbeднija je za nastavak aktivnosti." data-en="A new wallet address has no known approvals and is safer for continuing activities.">Nova adresa novčanika nema poznate approvale i bezbeднija je za nastavak aktivnosti.</li>
      <li data-sr="Prijavljivanje lažnog sajta na PhishTank ili sličnim platformama pomaže u brzom uklanjanju." data-en="Reporting the fake site to PhishTank or similar platforms helps with quick removal.">Prijavljivanje lažnog sajta na PhishTank ili sličnim platformama pomaže u brzom uklanjanju.</li>
    </ul>
    <div class="callout"><strong data-sr="Svi approvali su opozvani i preostala sredstva su na novoj bezbednoj adresi.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Svi approvali su opozvani i preostala sredstva su na novoj bezbednoj adresi." data-en="All approvals are revoked and remaining funds are on a new safe address.">Svi approvali su opozvani i preostala sredstva su na novoj bezbednoj adresi.</span></div>
  </article>
</section>

<section class="content-section">
  <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
  <ul class="bullets">
    <li data-sr="Airdrop oglas dolazi od naloga koji je u poslednjih sat vremena promenio sadržaj ili stil objava." data-en="The airdrop ad comes from an account that has changed its posting content or style in the last hour.">Airdrop oglas dolazi od naloga koji je u poslednjih sat vremena promenio sadržaj ili stil objava.</li>
    <li data-sr="Domen sajta za claim razlikuje se od zvaničnog za jedan karakter, tačku ili alternativni TLD." data-en="The claim site domain differs from the official one by one character, period or alternative TLD.">Domen sajta za claim razlikuje se od zvaničnog za jedan karakter, tačku ili alternativni TLD.</li>
    <li data-sr="Projekat nije nikada ranije najavio ovaj airdrop na zvaničnim kanalima." data-en="The project never previously announced this airdrop on official channels.">Projekat nije nikada ranije najavio ovaj airdrop na zvaničnim kanalima.</li>
    <li data-sr="Zahtev za potpis prikazuje setApprovalForAll ili unlimited approve umesto standardnog claim poziva." data-en="The signature request shows setApprovalForAll or unlimited approve instead of a standard claim call.">Zahtev za potpis prikazuje setApprovalForAll ili unlimited approve umesto standardnog claim poziva.</li>
    <li data-sr="Sajt prikazuje personalizovani iznos airdrop-a odmah posle konekcije novčanika." data-en="The site shows a personalized airdrop amount immediately after wallet connection.">Sajt prikazuje personalizovani iznos airdrop-a odmah posle konekcije novčanika.</li>
    <li data-sr="Countdown timer za claim stvara urgentnost koja sprečava pažljivo proveravanje." data-en="A countdown timer for claiming creates urgency that prevents careful verification.">Countdown timer za claim stvara urgentnost koja sprečava pažljivo proveravanje.</li>
    <li data-sr="Discord ili Twitter projekta sadrži upozorenje da je nalog hakovan — obično dolazi ubrzo posle lažnog oglasa." data-en="The project's Discord or Twitter contains a warning that the account was hacked — usually comes shortly after the fake ad.">Discord ili Twitter projekta sadrži upozorenje da je nalog hakovan — obično dolazi ubrzo posle lažnog oglasa.</li>
    <li data-sr="Oglas distribuira direktne poruke od nepoznatih naloga u kriptografskim Discord serverima." data-en="The ad distributes direct messages from unknown accounts in crypto Discord servers.">Oglas distribuira direktne poruke od nepoznatih naloga u kriptografskim Discord serverima.</li>
    <li data-sr="Claim sajt ne postoji na zvaničnom sajtu projekta i nema informacija o njemu u arhivama zajednice." data-en="The claim site does not exist on the project's official website and has no information about it in community archives.">Claim sajt ne postoji na zvaničnom sajtu projekta i nema informacija o njemu u arhivama zajednice.</li>
    <li data-sr="Airdrop iznos je nelogično visok u poređenju sa svim dosadašnjim airdropovima ovog projekta." data-en="The airdrop amount is unrealistically high compared to all previous airdrops of this project.">Airdrop iznos je nelogično visok u poređenju sa svim dosadašnjim airdropovima ovog projekta.</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Provere: 8 brzih provera pre claim-ovanja airdrop-a" data-en="Checks: 8 quick checks before claiming an airdrop">Provere: 8 brzih provera pre claim-ovanja airdrop-a</h2>
  <ol class="steps">
    <li data-sr="Poseti zvanični sajt projekta direktno iz bookmarks-a ili preciznim kucanjem URL-a — da li postoji pomen ovog airdrop-a?" data-en="Visit the project's official site directly from bookmarks or by typing the URL precisely — is there any mention of this airdrop?">Poseti zvanični sajt projekta direktno iz bookmarks-a ili preciznim kucanjem URL-a — da li postoji pomen ovog airdrop-a?</li>
    <li data-sr="Proveri zvanični Twitter projekta direktno — da li su objavili isti oglas i da li nalog izgleda normalno?" data-en="Check the project's official Twitter directly — did they post the same announcement and does the account look normal?">Proveri zvanični Twitter projekta direktno — da li su objavili isti oglas i da li nalog izgleda normalno?</li>
    <li data-sr="Pročitaj detalje zahteva za potpis u MetaMask-u pre potpisivanja — da li poziva setApprovalForAll?" data-en="Read the signature request details in MetaMask before signing — does it call setApprovalForAll?">Pročitaj detalje zahteva za potpis u MetaMask-u pre potpisivanja — da li poziva setApprovalForAll?</li>
    <li data-sr="Proveri contract adresu claim sajta na Etherscan — da li je verifikovana i da li je zvanična?" data-en="Check the claim site's contract address on Etherscan — is it verified and is it official?">Proveri contract adresu claim sajta na Etherscan — da li je verifikovana i da li je zvanična?</li>
    <li data-sr="Potraži informacije o ovom airdrop-u u kriptografskim zajednicama na Reddit-u ili Telegram grupi projekta." data-en="Search for information about this airdrop in crypto communities on Reddit or the project's Telegram group.">Potraži informacije o ovom airdrop-u u kriptografskim zajednicama na Reddit-u ili Telegram grupi projekta.</li>
    <li data-sr="Proveri domen URL-a karakter po karakter — da li je tačno identičan zvaničnom domenu projekta?" data-en="Check the URL domain character by character — is it exactly identical to the project's official domain?">Proveri domen URL-a karakter po karakter — da li je tačno identičan zvaničnom domenu projekta?</li>
    <li data-sr="Sačekaj 15 minuta i proveri da li projekat objavljuje upozorenje o hakovanom nalogu." data-en="Wait 15 minutes and check whether the project posts a warning about a hacked account.">Sačekaj 15 minuta i proveri da li projekat objavljuje upozorenje o hakovanom nalogu.</li>
    <li data-sr="Ako nisi siguran, koristi novi prazan novčanik bez sredstava za testiranje claim-a pre nego što koristisš glavni." data-en="If unsure use a new empty wallet without funds to test the claim before using your main wallet.">Ako nisi siguran, koristi novi prazan novčanik bez sredstava za testiranje claim-a pre nego što koristisš glavni.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Checklista: pitanja pre claim-a airdrop-a" data-en="Checklist: questions before claiming an airdrop">Checklista: pitanja pre claim-a airdrop-a</h2>
  <ul class="bullets">
    <li data-sr="Da li je ovaj airdrop najavljen na zvaničnom sajtu projekta?" data-en="Is this airdrop announced on the project's official website?">Da li je ovaj airdrop najavljen na zvaničnom sajtu projekta?</li>
    <li data-sr="Da li je domen claim sajta tačno identičan zvaničnom domenu projekta?" data-en="Is the claim site domain exactly identical to the project's official domain?">Da li je domen claim sajta tačno identičan zvaničnom domenu projekta?</li>
    <li data-sr="Da li je oglas za airdrop objavila zvanična kompanija, a ne hakovani nalog?" data-en="Was the airdrop ad published by the official company and not a hacked account?">Da li je oglas za airdrop objavila zvanična kompanija, a ne hakovani nalog?</li>
    <li data-sr="Da li sam pročitao šta potpis zapravo traži a ne samo šta sajt prikazuje?" data-en="Have I read what the signature actually requests and not just what the site displays?">Da li sam pročitao šta potpis zapravo traži a ne samo šta sajt prikazuje?</li>
    <li data-sr="Da li zahtev za potpis poziva setApprovalForAll ili unlimited approve?" data-en="Does the signature request call setApprovalForAll or unlimited approve?">Da li zahtev za potpis poziva setApprovalForAll ili unlimited approve?</li>
    <li data-sr="Da li postoji countdown timer koji me guši da ne proverim?" data-en="Is there a countdown timer pressuring me not to verify?">Da li postoji countdown timer koji me guši da ne proverim?</li>
    <li data-sr="Da li sam pronašao informacije o ovom airdrop-u u nezavisnim zajednicama, a ne samo na claim sajtu?" data-en="Have I found information about this airdrop in independent communities, not just on the claim site?">Da li sam pronašao informacije o ovom airdrop-u u nezavisnim zajednicama, a ne samo na claim sajtu?</li>
    <li data-sr="Da li je projekt objavio upozorenje o hakovanom nalogu u poslednjih sat-dva?" data-en="Has the project posted a warning about a hacked account in the last hour or two?">Da li je projekt objavio upozorenje o hakovanom nalogu u poslednjih sat-dva?</li>
    <li data-sr="Da li koristim namenski novčanik za testiranje novih claim-ova odvojen od glavnog novčanika?" data-en="Am I using a dedicated test wallet for new claims separated from my main wallet?">Da li koristim namenski novčanik za testiranje novih claim-ova odvojen od glavnog novčanika?</li>
    <li data-sr="Da li sam proverio contract adresu na Etherscan pre potpisivanja?" data-en="Have I checked the contract address on Etherscan before signing?">Da li sam proverio contract adresu na Etherscan pre potpisivanja?</li>
    <li data-sr="Da li je iznos airdrop-a realan u odnosu na dosadašnje distribucije ovog projekta?" data-en="Is the airdrop amount realistic compared to this project's previous distributions?">Da li je iznos airdrop-a realan u odnosu na dosadašnje distribucije ovog projekta?</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
  <ol class="steps">
    <li data-sr="Odmah idi na revoke.cash i opozovi sve approvale koji su aktivni na kompromitovanoj adresi." data-en="Immediately go to revoke.cash and revoke all active approvals on the compromised address.">Odmah idi na revoke.cash i opozovi sve approvale koji su aktivni na kompromitovanoj adresi.</li>
    <li data-sr="Prebaci sve preostale tokene na novu, čistu adresu novčanika odmah." data-en="Transfer all remaining tokens to a new, clean wallet address immediately.">Prebaci sve preostale tokene na novu, čistu adresu novčanika odmah.</li>
    <li data-sr="Proveri Etherscan transakcije da dokumentuješ šta je uzeto i na koje adrese je otišlo." data-en="Check Etherscan transactions to document what was taken and to which addresses it went.">Proveri Etherscan transakcije da dokumentuješ šta je uzeto i na koje adrese je otišlo.</li>
    <li data-sr="Prijavi hakovani nalog projektu direktno kroz zvanični kanal — ne onome ko se predstavlja kao podrška." data-en="Report the hacked account to the project directly through the official channel — not to whoever presents themselves as support.">Prijavi hakovani nalog projektu direktno kroz zvanični kanal — ne onome ko se predstavlja kao podrška.</li>
    <li data-sr="Ignoriši sve ko ti nudi 'povrat' izgubljenih sredstava — to je nova prevara." data-en="Ignore everyone who offers recovery of lost funds — that is a new scam.">Ignoriši sve ko ti nudi 'povrat' izgubljenih sredstava — to je nova prevara.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
  <ul class="bullets">
    <li data-sr="Da li su kliknuli na airdrop link koji je dobili kroz Discord ili Twitter poruku?" data-en="Did they click an airdrop link received through a Discord or Twitter message?">Da li su kliknuli na airdrop link koji je dobili kroz Discord ili Twitter poruku?</li>
    <li data-sr="Da li su konektovali novčanik i potpisali nešto na claim sajtu?" data-en="Did they connect their wallet and sign something on the claim site?">Da li su konektovali novčanik i potpisali nešto na claim sajtu?</li>
    <li data-sr="Da li je balans novčanika prazan ili su tokeni nestali?" data-en="Is the wallet balance empty or have tokens disappeared?">Da li je balans novčanika prazan ili su tokeni nestali?</li>
    <li data-sr="Da li ih je neko kontaktirao nudeći povrat izgubeljnih tokena?" data-en="Has anyone contacted them offering recovery of lost tokens?">Da li ih je neko kontaktirao nudeći povrat izgubeljnih tokena?</li>
  </ul>
  <p data-sr="Rečenice koje rade:" data-en="Sentences that help:">Rečenice koje rade:</p>
  <ul class="bullets">
    <li data-sr="Idi odmah na revoke.cash — ako ima preostalih tokena svaka sekunda je važna." data-en="Go to revoke.cash immediately — if there are remaining tokens every second matters.">Idi odmah na revoke.cash — ako ima preostalih tokena svaka sekunda je važna.</li>
    <li data-sr="Blockchain je nepovratan — niko ne može da ti vrati tokene koji su otišli, svaki ko to tvrdi je novi napadač." data-en="Blockchain is irreversible — nobody can return tokens that left, anyone claiming otherwise is a new attacker.">Blockchain je nepovratan — niko ne može da ti vrati tokene koji su otišli, svaki ko to tvrdi je novi napadač.</li>
    <li data-sr="Prebaci sve preostalo na novu adresu sada — kompromitovana adresa se ne koristi više." data-en="Move everything remaining to a new address now — the compromised address is not to be used anymore.">Prebaci sve preostalo na novu adresu sada — kompromitovana adresa se ne koristi više.</li>
    <li data-sr="Ne objavljuj gubitak javno odmah — recovery prevaranti prate takve objave i brzo te kontaktiraju." data-en="Do not publicly announce the loss immediately — recovery scammers monitor such posts and contact you quickly.">Ne objavljuj gubitak javno odmah — recovery prevaranti prate takve objave i brzo te kontaktiraju.</li>
  </ul>
</section>


`
};
