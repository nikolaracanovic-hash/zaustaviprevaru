if (!window.SCAM_CONTENT) window.SCAM_CONTENT = {};
window.SCAM_CONTENT["nft-scam"] = {
  raw_html: `
<section class="content-section">
  <h2 data-sr="Uvod: kako radi NFT prevara" data-en="Introduction: how the NFT scam works">Uvod: kako radi NFT prevara</h2>
  <p data-sr="NFT prevare su skup različitih tehnika prevare koje svi koriste NFT ekosistem kao vektor. Najčešći oblici su: lažni mint gde se proda NFT koji ne postoji ili nema obećanu vrednost, fake royalties gde se manipuliše cenokom za sekundarnu tržišnicu, wallet drainer koji se aktivira pri 'free mint' claim-u, i rug pull NFT kolekcije gde osnivači nestanu posle minta." data-en="NFT scams are a set of different scam techniques that all use the NFT ecosystem as a vector. The most common forms are: fake mint where an NFT is sold that does not exist or lacks promised value, fake royalties where the secondary market price is manipulated, a wallet drainer activated during a free mint claim, and an NFT collection rug pull where founders disappear after the mint.">NFT prevare su skup različitih tehnika prevare koje svi koriste NFT ekosistem kao vektor. Najčešći oblici su: lažni mint gde se proda NFT koji ne postoji ili nema obećanu vrednost, fake royalties gde se manipuliše cenokom za sekundarnu tržišnicu, wallet drainer koji se aktivira pri 'free mint' claim-u, i rug pull NFT kolekcije gde osnivači nestanu posle minta.</p>
  <p data-sr="NFT prevare su posebno efikasne jer kombinuju FOMO mehanizam ekskluzivnosti sa tehničkom nejasnošću oko toga šta kupac zapravo dobija. Korisnici često ne razumeju šta potpisuju pri mint transakciji i ne znaju kako da provere legitimnost projekta pre investicije." data-en="NFT scams are particularly effective because they combine the exclusivity FOMO mechanism with technical ambiguity about what the buyer actually receives. Users often do not understand what they are signing in a mint transaction and do not know how to verify project legitimacy before investing.">NFT prevare su posebno efikasne jer kombinuju FOMO mehanizam ekskluzivnosti sa tehničkom nejasnošću oko toga šta kupac zapravo dobija. Korisnici često ne razumeju šta potpisuju pri mint transakciji i ne znaju kako da provere legitimnost projekta pre investicije.</p>
</section>

<section class="content-section">
  <h2 data-sr="Model" data-en="Model">Model</h2>
  <div class="phase">
    <div class="label" data-sr="Lanac" data-en="Chain">Lanac</div>
    <p data-sr="Hype/oglas za NFT kolekciju → lažni mint sajt ili drain claim → wallet connect → potpis transakcije → drain/gubitak NFT ili rug pull → sredstva na napadačevim adresama" data-en="Hype/ad for NFT collection → fake mint site or drain claim → wallet connect → transaction signature → drain/NFT loss or rug pull → funds at attacker's addresses">Hype/oglas za NFT kolekciju → lažni mint sajt ili drain claim → wallet connect → potpis transakcije → drain/gubitak NFT ili rug pull → sredstva na napadačevim adresama</p>
  </div>
  <div class="callout">
    <strong data-sr="Prag:" data-en="Threshold:">Prag:</strong>
    <span data-sr="Potpis mint transakcije ili claim-a. Zavisi od vrste NFT prevare: drainer dobija approval, rug pull prikuplja ETH od minta, lažni mint uzima novac za NFT koji ne postoji." data-en="Signing the mint transaction or claim. Depends on the NFT scam type: drainer gets approval, rug pull collects ETH from mint, fake mint takes money for an NFT that does not exist.">Potpis mint transakcije ili claim-a. Zavisi od vrste NFT prevare: drainer dobija approval, rug pull prikuplja ETH od minta, lažni mint uzima novac za NFT koji ne postoji.</span>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Kako generalno radi: mehanika" data-en="How it works: mechanics">Kako generalno radi: mehanika</h2>
  <div class="grid-2">
    <div class="phase">
      <div class="label" data-sr="Šta gradi uverljivost" data-en="What builds credibility">Šta gradi uverljivost</div>
      <ul class="bullets">
        <li data-sr="Kolekcija ima profesionalnu umetnost, aktivnu Twitter zajednicu i Discord server sa hiljadama člažna." data-en="The collection has professional art, an active Twitter community and a Discord server with thousands of members.">Kolekcija ima profesionalnu umetnost, aktivnu Twitter zajednicu i Discord server sa hiljadama člažna.</li>
        <li data-sr="Projekat obećava 'utilities' — pristup ekskluzivnom sadržaju, pasivni prihod, 'metaverse' integraciju." data-en="The project promises utilities — access to exclusive content, passive income, metaverse integration.">Projekat obećava 'utilities' — pristup ekskluzivnom sadržaju, pasivni prihod, 'metaverse' integraciju.</li>
        <li data-sr="Influenceri promovisali su kolekciju uz obećanje da će cena na sekundarnom tržištu porasti." data-en="Influencers promote the collection with a promise that the secondary market price will increase.">Influenceri promovisali su kolekciju uz obećanje da će cena na sekundarnom tržištu porasti.</li>
        <li data-sr="Free mint ili low-cost mint deluje bezrizično jer korisnik plaća samo gas fee." data-en="A free mint or low-cost mint seems risk-free because the user only pays the gas fee.">Free mint ili low-cost mint deluje bezrizično jer korisnik plaća samo gas fee.</li>
      </ul>
    </div>
    <div class="phase">
      <div class="label" data-sr="Kako se uvodi radnja" data-en="How the action is introduced">Kako se uvodi radnja</div>
      <ul class="bullets">
        <li data-sr="Mint transakcija izgleda standardno ali sadrži drainer call koji daje approval za ceo novčanik." data-en="The mint transaction looks standard but contains a drainer call that grants approval for the entire wallet.">Mint transakcija izgleda standardno ali sadrži drainer call koji daje approval za ceo novčanik.</li>
        <li data-sr="Lažni mint sajt je vizuelno identičan zvaničnom ali na drugom domenu sa drainer ugovorom." data-en="The fake mint site is visually identical to the official one but on a different domain with a drainer contract.">Lažni mint sajt je vizuelno identičan zvaničnom ali na drugom domenu sa drainer ugovorom.</li>
        <li data-sr="Rug pull kolekcije naplaćuje mint fee od svakog kupca, a zatim osnivači nestaju pre dostave obećanih utility-ja." data-en="A collection rug pull charges a mint fee from each buyer, then founders disappear before delivering promised utilities.">Rug pull kolekcije naplaćuje mint fee od svakog kupca, a zatim osnivači nestaju pre dostave obećanih utility-ja.</li>
        <li data-sr="Wash trading na sekundarnom tržištu čini NFT-ove atraktivnim dajući lažan utisak potražnje." data-en="Wash trading on the secondary market makes NFTs attractive by giving a false impression of demand.">Wash trading na sekundarnom tržištu čini NFT-ove atraktivnim dajući lažan utisak potražnje.</li>
      </ul>
    </div>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Hronološki tok (faze + evolucije)" data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

  <article class="phase">
    <h3 data-sr="Faza 1 — Izgradnja hype-a" data-en="Phase 1 — Building hype">Faza 1 — Izgradnja hype-a</h3>
    <p data-sr="Projekat gradi zajednicu kroz Discord, Twitter i influencer marketing. Umetnost i roadmap su profesionalni. Whitelist kampanja stvara ekskluzivnost i FOMO." data-en="The project builds a community through Discord, Twitter and influencer marketing. Art and roadmap are professional. A whitelist campaign creates exclusivity and FOMO.">Projekat gradi zajednicu kroz Discord, Twitter i influencer marketing. Umetnost i roadmap su profesionalni. Whitelist kampanja stvara ekskluzivnost i FOMO.</p>
    <ul class="bullets">
      <li data-sr="Roadmap obećava dugoročne utilities koje nikad neće biti isporučene." data-en="The roadmap promises long-term utilities that will never be delivered.">Roadmap obećava dugoročne utilities koje nikad neće biti isporučene.</li>
      <li data-sr="Whitelist kampanja navodi korisnike da invite prijatelje povećavajući doseg projekta." data-en="The whitelist campaign leads users to invite friends increasing the project's reach.">Whitelist kampanja navodi korisnike da invite prijatelje povećavajući doseg projekta.</li>
      <li data-sr="Tim projekta je anoniman ili koristi pseudonime koji se ne mogu proveriti." data-en="The project team is anonymous or uses pseudonyms that cannot be verified.">Tim projekta je anoniman ili koristi pseudonime koji se ne mogu proveriti.</li>
    </ul>
    <div class="callout"><strong data-sr="Zajednica je izgrađena i mint datum je objavljen sa visokim očekivanjima.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Zajednica je izgrađena i mint datum je objavljen sa visokim očekivanjima." data-en="The community is built and the mint date is announced with high expectations.">Zajednica je izgrađena i mint datum je objavljen sa visokim očekivanjima.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 2 — Mint i prikupljanje kapitala" data-en="Phase 2 — Mint and capital collection">Faza 2 — Mint i prikupljanje kapitala</h3>
    <p data-sr="Mint se otvara uz veliku potražnju. Korisnici brzo plaćaju mint cenu da ne bi propustili whitelist mesto. Svaka transakcija šalje ETH osnivačima." data-en="The mint opens with high demand. Users quickly pay the mint price to not miss their whitelist spot. Each transaction sends ETH to founders.">Mint se otvara uz veliku potražnju. Korisnici brzo plaćaju mint cenu da ne bi propustili whitelist mesto. Svaka transakcija šalje ETH osnivačima.</p>
    <ul class="bullets">
      <li data-sr="Mint je brzo sold out što stvara utisak da su NFT-ovi vredni i traženi." data-en="The mint sells out quickly which creates the impression that NFTs are valuable and in demand.">Mint je brzo sold out što stvara utisak da su NFT-ovi vredni i traženi.</li>
      <li data-sr="Gas fee war povećava ukupne troškove za korisnike koji žele da budu u prvom mituv." data-en="Gas fee wars increase total costs for users who want to be in the first mint.">Gas fee war povećava ukupne troškove za korisnike koji žele da budu u prvom mituv.</li>
      <li data-sr="Osnivači uzimaju procenat od svake mint transakcije direktno u novčanik koji je pod njihovom kontrolom." data-en="Founders take a percentage of each mint transaction directly into a wallet under their control.">Osnivači uzimaju procenat od svake mint transakcije direktno u novčanik koji je pod njihovom kontrolom.</li>
    </ul>
    <div class="callout"><strong data-sr="Mint je završen i osnivači su prikupili planiranu sumu — sada odlučuju kad da nestanu.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Mint je završen i osnivači su prikupili planiranu sumu — sada odlučuju kad da nestanu." data-en="The mint is finished and founders have collected the planned sum — now deciding when to disappear.">Mint je završen i osnivači su prikupili planiranu sumu — sada odlučuju kad da nestanu.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 3 — Lažni drainer mint" data-en="Phase 3 — Fake drainer mint">Faza 3 — Lažni drainer mint</h3>
    <p data-sr="Paralelno, napadači kreiraju lažni mint sajt koristeći isti vizualni identitet legitimnog projekta. Ovaj sajt sadrži drainer ugovor — 'free mint' koji umesto NFT-a daje approval za pražnjenje celog novčanika." data-en="In parallel, attackers create a fake mint site using the same visual identity as a legitimate project. This site contains a drainer contract — a free mint that instead of an NFT grants approval for draining the entire wallet.">Paralelno, napadači kreiraju lažni mint sajt koristeći isti vizualni identitet legitimnog projekta. Ovaj sajt sadrži drainer ugovor — 'free mint' koji umesto NFT-a daje approval za pražnjenje celog novčanika.</p>
    <ul class="bullets">
      <li data-sr="Lažni sajt se distribuira kroz hakovane Discord kanale projekta ili lažne Twitter naloge." data-en="The fake site is distributed through the project's hacked Discord channels or fake Twitter accounts.">Lažni sajt se distribuira kroz hakovane Discord kanale projekta ili lažne Twitter naloge.</li>
      <li data-sr="Korisnik koji je hteo da mint-uje legitimni NFT završava na drainer sajtu i potpisuje drainer." data-en="A user who wanted to mint a legitimate NFT ends up on the drainer site and signs the drainer.">Korisnik koji je hteo da mint-uje legitimni NFT završava na drainer sajtu i potpisuje drainer.</li>
      <li data-sr="Gubitak je dupli — korisnik ne dobija NFT i gubi sva sredstva iz novčanika." data-en="The loss is double — the user does not get the NFT and loses all funds from the wallet.">Gubitak je dupli — korisnik ne dobija NFT i gubi sva sredstva iz novčanika.</li>
    </ul>
    <div class="callout"><strong data-sr="Korisnik potpisuje drainer — approval je na blockchain-u i pražnjenje počinje automatski.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Korisnik potpisuje drainer — approval je na blockchain-u i pražnjenje počinje automatski." data-en="The user signs the drainer — the approval is on the blockchain and draining starts automatically.">Korisnik potpisuje drainer — approval je na blockchain-u i pražnjenje počinje automatski.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching at this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="wallet-drainer.html" data-sr="Wallet drainer — tehnički mehanizam koji se aktivira lažnim NFT mint-om." data-en="Wallet drainer — technical mechanism activated by a fake NFT mint.">Wallet drainer — tehnički mehanizam koji se aktivira lažnim NFT mint-om.</a></li>
        <li><a href="airdrop-scam.html" data-sr="Airdrop prevara — isti mehanizam sa free airdrop umesto free mint." data-en="Airdrop scam — same mechanism with a free airdrop instead of free mint.">Airdrop prevara — isti mehanizam sa free airdrop umesto free mint.</a></li>
      </ul>
    </div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 4 — Post-mint pump i sekundarno tržište" data-en="Phase 4 — Post-mint pump and secondary market">Faza 4 — Post-mint pump i sekundarno tržište</h3>
    <p data-sr="Posle minta, osnivači ili wash traderi pumaju cenu na sekundarnom tržištu da bi privukli nove kupce. Rani minterji prodaju po visokim cenama. Investitori koji kupuju na sekundarnom tržištu ostaju sa NFT-ovima bez vrednosti posle rug pull-a." data-en="After the mint, founders or wash traders pump the price on the secondary market to attract new buyers. Early minters sell at high prices. Investors buying on the secondary market are left with worthless NFTs after the rug pull.">Posle minta, osnivači ili wash traderi pumaju cenu na sekundarnom tržištu da bi privukli nove kupce. Rani minterji prodaju po visokim cenama. Investitori koji kupuju na sekundarnom tržištu ostaju sa NFT-ovima bez vrednosti posle rug pull-a.</p>
    <ul class="bullets">
      <li data-sr="Wash trading između kontrolisanih adresa čini volumen koji atraktivno izgleda." data-en="Wash trading between controlled addresses creates volume that looks attractive.">Wash trading između kontrolisanih adresa čini volumen koji atraktivno izgleda.</li>
      <li data-sr="Osnivači postepeno prodaju NFT-ove na sekundarnom tržištu dok cena još uvek pada." data-en="Founders gradually sell NFTs on the secondary market while the price is still high.">Osnivači postepeno prodaju NFT-ove na sekundarnom tržištu dok cena još uvek pada.</li>
      <li data-sr="Royalty fee koji ide osnivačima donosi pasivni prihod čak i ako nisu oni who su prodali." data-en="The royalty fee going to founders brings passive income even if they are not the ones who sold.">Royalty fee koji ide osnivačima donosi pasivni prihod čak i ako nisu oni who su prodali.</li>
    </ul>
    <div class="callout"><strong data-sr="Osnivači su zadovoljni prikupljenim prihodom i pripremaju se za rug pull.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Osnivači su zadovoljni prikupljenim prihodom i pripremaju se za rug pull." data-en="Founders are satisfied with collected revenue and are preparing for the rug pull.">Osnivači su zadovoljni prikupljenim prihodom i pripremaju se za rug pull.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 5 — Rug pull i nestanak" data-en="Phase 5 — Rug pull and disappearance">Faza 5 — Rug pull i nestanak</h3>
    <p data-sr="Osnivači brišu Discord server, Twitter nalog i sajt. Obećane utilities nikada nisu isporučene. NFT-ovi su beskorisni — nema community, nema razvoja, nema podrške." data-en="Founders delete the Discord server, Twitter account and site. Promised utilities were never delivered. NFTs are worthless — no community, no development, no support.">Osnivači brišu Discord server, Twitter nalog i sajt. Obećane utilities nikada nisu isporučene. NFT-ovi su beskorisni — nema community, nema razvoja, nema podrške.</p>
    <ul class="bullets">
      <li data-sr="Za razliku od token rug pull-a, NFT-ovi ostaju u novčanicima ali bez vrednosti i tržišta." data-en="Unlike a token rug pull, NFTs remain in wallets but without value or market.">Za razliku od token rug pull-a, NFT-ovi ostaju u novčanicima ali bez vrednosti i tržišta.</li>
      <li data-sr="Osnivači su povukli ETH od minta i royalties i nestali pod pseudonimima." data-en="Founders have withdrawn ETH from the mint and royalties and disappeared under pseudonyms.">Osnivači su povukli ETH od minta i royalties i nestali pod pseudonimima.</li>
      <li data-sr="Zajednica ostaje bez podrške i mogućnosti prodaje NFT-ova." data-en="The community is left without support and the ability to sell NFTs.">Zajednica ostaje bez podrške i mogućnosti prodaje NFT-ova.</li>
    </ul>
    <div class="callout"><strong data-sr="Svi kanali projekta su ugašeni i investitori su sa bezvrednim NFT-ovima bez tržišta.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Svi kanali projekta su ugašeni i investitori su sa bezvrednim NFT-ovima bez tržišta." data-en="All project channels are shut down and investors are left with worthless NFTs with no market.">Svi kanali projekta su ugašeni i investitori su sa bezvrednim NFT-ovima bez tržišta.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching at this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="rug-pull.html" data-sr="Rug pull — detaljan opis mehanizma nestanka osnivača." data-en="Rug pull — detailed description of the founder disappearance mechanism.">Rug pull — detaljan opis mehanizma nestanka osnivača.</a></li>
        <li><a href="recovery-scam.html" data-sr="Recovery prevara — prevaranti targetiraju žrtve NFT prevara nudeći oporavak." data-en="Recovery scam — scammers target NFT scam victims offering recovery.">Recovery prevara — prevaranti targetiraju žrtve NFT prevara nudeći oporavak.</a></li>
      </ul>
    </div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 6 — Otkrivanje i reakcija" data-en="Phase 6 — Discovery and reaction">Faza 6 — Otkrivanje i reakcija</h3>
    <p data-sr="Investitori shvataju da su prevareni kada projekat prestaje sa komunikacijom. Blockchain explorer potvrđuje transakcije. Recovery prevaranti kontaktiraju žrtve." data-en="Investors realize they have been scammed when the project stops communicating. The blockchain explorer confirms transactions. Recovery scammers contact victims.">Investitori shvataju da su prevareni kada projekat prestaje sa komunikacijom. Blockchain explorer potvrđuje transakcije. Recovery prevaranti kontaktiraju žrtve.</p>
    <ul class="bullets">
      <li data-sr="Dokumentacija transakcija na Etherscan-u je jedini trag koji može biti koristan u istraži." data-en="Transaction documentation on Etherscan is the only traže that can be useful in an investigation.">Dokumentacija transakcija na Etherscan-u je jedini trag koji može biti koristan u istraži.</li>
      <li data-sr="Svaki recovery servis koji nudi povrat NFT-ova ili ETH je nova prevara." data-en="Any recovery service offering return of NFTs or ETH is a new scam.">Svaki recovery servis koji nudi povrat NFT-ova ili ETH je nova prevara.</li>
      <li data-sr="Kolektivna prijava zajednice povećava šanse za istragu ali ne garantuje povrat sredstava." data-en="A collective community report increases the chances of investigation but does not guarantee fund recovery.">Kolektivna prijava zajednice povećava šanse za istragu ali ne garantuje povrat sredstava.</li>
    </ul>
    <div class="callout"><strong data-sr="Žrtve su dokumentovale gubitak i razumeju da su blockchain transakcije nepovratne.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Žrtve su dokumentovale gubitak i razumeju da su blockchain transakcije nepovratne." data-en="Victims have documented their losses and understand that blockchain transactions are irreversible.">Žrtve su dokumentovale gubitak i razumeju da su blockchain transakcije nepovratne.</span></div>
  </article>
</section>

<section class="content-section">
  <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
  <ul class="bullets">
    <li data-sr="Tim projekta je anoniman i koristi pseudonime bez proverljive istorije izvan projekta." data-en="The project team is anonymous and uses pseudonyms without verifiable history outside the project.">Tim projekta je anoniman i koristi pseudonime bez proverljive istorije izvan projekta.</li>
    <li data-sr="Obećane utilities su vague ili daleko u budućnosti bez konkretnih rokova i deliverables." data-en="Promised utilities are vague or far in the future without concrete deadlines and deliverables.">Obećane utilities su vague ili daleko u budućnosti bez konkretnih rokova i deliverables.</li>
    <li data-sr="Mint sajt URL razlikuje se od onoga koji je saopštilo zvanično projekat." data-en="The mint site URL differs from what the official project communicated.">Mint sajt URL razlikuje se od onoga koji je saopštilo zvanično projekat.</li>
    <li data-sr="Zahtev za potpis pri mint-u poziva setApprovalForAll umesto standardnog mint poziva." data-en="The signature request during mint calls setApprovalForAll instead of a standard mint call.">Zahtev za potpis pri mint-u poziva setApprovalForAll umesto standardnog mint poziva.</li>
    <li data-sr="Pametni ugovor nije auditovan ili audit dolazi od nepoznate firme." data-en="The smart contract is not audited or the audit comes from an unknown firm.">Pametni ugovor nije auditovan ili audit dolazi od nepoznate firme.</li>
    <li data-sr="Influenceri promovišu projekat bez otkrivanja plaćene saradnje." data-en="Influencers promote the project without disclosing paid collaboration.">Influenceri promovišu projekat bez otkrivanja plaćene saradnje.</li>
    <li data-sr="Moderatori u Discord serveru brišu pitanja o identitetu tima i auditu ugovora." data-en="Moderators in the Discord server delete questions about team identity and contract audits.">Moderatori u Discord serveru brišu pitanja o identitetu tima i auditu ugovora.</li>
    <li data-sr="Sekundarni tržišni volumen je neobično visok za kako dugo projekat postoji." data-en="The secondary market volume is unusually high for how long the project has existed.">Sekundarni tržišni volumen je neobično visok za kako dugo projekat postoji.</li>
    <li data-sr="Free mint oglas dolazi kroz Discord ili Twitter poruku a ne kroz zvanični kanal projekta." data-en="The free mint ad arrives through a Discord or Twitter message and not through the project's official channel.">Free mint oglas dolazi kroz Discord ili Twitter poruku a ne kroz zvanični kanal projekta.</li>
    <li data-sr="Projekt ne može da demonstrira ni jedan ispunjen obećan utility od lansiranja." data-en="The project cannot demonstrate a single fulfilled promised utility since launch.">Projekt ne može da demonstrira ni jedan ispunjen obećan utility od lansiranja.</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Provere: 8 brzih provera pre NFT mint-a" data-en="Checks: 8 quick checks before an NFT mint">Provere: 8 brzih provera pre NFT mint-a</h2>
  <ol class="steps">
    <li data-sr="Proveri URL mint sajta karakter po karakter i potvrdid da je identičan zvaničnom domenu projekta." data-en="Check the mint site URL character by character and confirm it is identical to the project's official domain.">Proveri URL mint sajta karakter po karakter i potvrdid da je identičan zvaničnom domenu projekta.</li>
    <li data-sr="Pročitaj detalje zahteva za potpis u MetaMask-u — da li poziva setApprovalForAll ili neuobičajeni kontrakt?" data-en="Read the signature request details in MetaMask — does it call setApprovalForAll or an unusual contract?">Pročitaj detalje zahteva za potpis u MetaMask-u — da li poziva setApprovalForAll ili neuobičajeni kontrakt?</li>
    <li data-sr="Proveri contract adresu projekta na Etherscan i verifikuj da je ona ona koju je projekat zvanično objavio." data-en="Check the project's contract address on Etherscan and verify it is the one officially published by the project.">Proveri contract adresu projekta na Etherscan i verifikuj da je ona ona koju je projekat zvanično objavio.</li>
    <li data-sr="Istraži tim projekta — da li su identiteti proverljivi izvan projekta?" data-en="Research the project team — are identities verifiable outside the project?">Istraži tim projekta — da li su identiteti proverljivi izvan projekta?</li>
    <li data-sr="Proveri da li je pametni ugovor auditovan od poznate firme i pročitaj audit rezultate." data-en="Check whether the smart contract has been audited by a known firm and read the audit results.">Proveri da li je pametni ugovor auditovan od poznate firme i pročitaj audit rezultate.</li>
    <li data-sr="Potraži nezavisne recenzije projekta na Reddit-u, Twitter-u i NFT zajednicama." data-en="Search for independent project reviews on Reddit, Twitter and NFT communities.">Potraži nezavisne recenzije projekta na Reddit-u, Twitter-u i NFT zajednicama.</li>
    <li data-sr="Proveri da li influenceri koji promovisali projekat otkrivaju plaćenu saradnju." data-en="Check whether influencers promoting the project disclose paid collaboration.">Proveri da li influenceri koji promovisali projekat otkrivaju plaćenu saradnju.</li>
    <li data-sr="Koristi Token Sniffer ili sličan alat za automatsku analizu rizika mint ugovora." data-en="Use Token Sniffer or a similar tool for automatic risk analysis of the mint contract.">Koristi Token Sniffer ili sličan alat za automatsku analizu rizika mint ugovora.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Checklista: pitanja pre NFT minta" data-en="Checklist: questions before an NFT mint">Checklista: pitanja pre NFT minta</h2>
  <ul class="bullets">
    <li data-sr="Da li je URL mint sajta tačno identičan zvaničnom domenu projekta?" data-en="Is the mint site URL exactly identical to the project's official domain?">Da li je URL mint sajta tačno identičan zvaničnom domenu projekta?</li>
    <li data-sr="Da li je mint sajt onaj koji je projekat zvanično objavio na svim kanalima?" data-en="Is the mint site the one officially published by the project on all channels?">Da li je mint sajt onaj koji je projekat zvanično objavio na svim kanalima?</li>
    <li data-sr="Da li sam pročitao šta zahtev za potpis zapravo radi, a ne samo šta sajt kaže?" data-en="Have I read what the signature request actually does, not just what the site says?">Da li sam pročitao šta zahtev za potpis zapravo radi, a ne samo šta sajt kaže?</li>
    <li data-sr="Da li je pametni ugovor auditovan od nezavisne poznate firme?" data-en="Has the smart contract been audited by an independent known firm?">Da li je pametni ugovor auditovan od nezavisne poznate firme?</li>
    <li data-sr="Da li mogu da proverim identitete člažna tima izvan projekta?" data-en="Can I verify team member identities outside the project?">Da li mogu da proverim identitete člažna tima izvan projekta?</li>
    <li data-sr="Da li obećane utilities imaju konkretne rokove i deliverables koji su prethodno bili ispunjeni?" data-en="Do the promised utilities have concrete deadlines and deliverables that have previously been fulfilled?">Da li obećane utilities imaju konkretne rokove i deliverables koji su prethodno bili ispunjeni?</li>
    <li data-sr="Da li zajednica dozvoljava pitanja o timu i ugovoru ili se skepticizam briše?" data-en="Does the community allow questions about the team and contract or is skepticism deleted?">Da li zajednica dozvoljava pitanja o timu i ugovoru ili se skepticizam briše?</li>
    <li data-sr="Da li influenceri koji promovisali projekat otkrivaju plaćenu saradnju?" data-en="Do influencers promoting the project disclose paid collaboration?">Da li influenceri koji promovisali projekat otkrivaju plaćenu saradnju?</li>
    <li data-sr="Da li je sekundarni tržišni volumen realan ili postoje znaci wash trading-a?" data-en="Is the secondary market volume realistic or are there signs of wash trading?">Da li je sekundarni tržišni volumen realan ili postoje znaci wash trading-a?</li>
    <li data-sr="Da li ulažem samo ono što mogu da izgubim — potpuno, bez mogućnosti povratka?" data-en="Am I only investing what I can completely lose — without any possibility of recovery?">Da li ulažem samo ono što mogu da izgubim — potpuno, bez mogućnosti povratka?</li>
    <li data-sr="Da li postoje nezavisna upozorenja o ovom projektu ili kolekciji u kriptografskim zajednicama?" data-en="Are there independent warnings about this project or collection in crypto communities?">Da li postoje nezavisna upozorenja o ovom projektu ili kolekciji u kriptografskim zajednicama?</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
  <ol class="steps">
    <li data-sr="Ako si potpisao nešto, odmah idi na revoke.cash i opozovi sve sumnjive approvale." data-en="If you signed something, immediately go to revoke.cash and revoke all suspicious approvals.">Ako si potpisao nešto, odmah idi na revoke.cash i opozovi sve sumnjive approvale.</li>
    <li data-sr="Prebaci sve preostale tokene na novu, čistu adresu pre nego što bot pokrene pražnjenje." data-en="Transfer all remaining tokens to a new, clean address before the bot initiates draining.">Prebaci sve preostale tokene na novu, čistu adresu pre nego što bot pokrene pražnjenje.</li>
    <li data-sr="Dokumentuj sve transakcije na Etherscan-u i komunik. osnivača projekta za eventualnu prijavu." data-en="Document all transactions on Etherscan and project founder communications for a potential report.">Dokumentuj sve transakcije na Etherscan-u i komunik. osnivača projekta za eventualnu prijavu.</li>
    <li data-sr="Ignoriši sve koji nude 'povrat' ETH ili NFT-ova — to je nova prevara koja targetira žrtve." data-en="Ignore everyone offering ETH or NFT recovery — that is a new scam targeting victims.">Ignoriši sve koji nude 'povrat' ETH ili NFT-ova — to je nova prevara koja targetira žrtve.</li>
    <li data-sr="Poveži se sa zajednicom žrtava i podnesite kolektivnu prijavu relevantnim organima." data-en="Connect with the victim community and submit a collective report to relevant authorities.">Poveži se sa zajednicom žrtava i podnesite kolektivnu prijavu relevantnim organima.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
  <ul class="bullets">
    <li data-sr="Da li su mint-ovali NFT na sajtu koji su dobili kroz Discord ili Twitter poruku?" data-en="Did they mint an NFT on a site received through a Discord or Twitter message?">Da li su mint-ovali NFT na sajtu koji su dobili kroz Discord ili Twitter poruku?</li>
    <li data-sr="Da li je balans novčanika prazan ili su tokeni nestali posle mint-a?" data-en="Is the wallet balance empty or have tokens disappeared after the mint?">Da li je balans novčanika prazan ili su tokeni nestali posle mint-a?</li>
    <li data-sr="Da li je projekat prestao sa komunikacijom i da li su Discord i Twitter nestali?" data-en="Has the project stopped communicating and have Discord and Twitter disappeared?">Da li je projekat prestao sa komunikacijom i da li su Discord i Twitter nestali?</li>
    <li data-sr="Da li ih je neko kontaktirao nudeći povrat NFT-ova ili ETH za malu naknadu?" data-en="Has anyone contacted them offering NFT or ETH recovery for a small fee?">Da li ih je neko kontaktirao nudeći povrat NFT-ova ili ETH za malu naknadu?</li>
  </ul>
  <p data-sr="Rečenice koje rade:" data-en="Sentences that help:">Rečenice koje rade:</p>
  <ul class="bullets">
    <li data-sr="Ako si potpisao nešto na lažnom sajtu, idi odmah na revoke.cash — svaka sekunda je važna." data-en="If you signed something on a fake site, go to revoke.cash immediately — every second matters.">Ako si potpisao nešto na lažnom sajtu, idi odmah na revoke.cash — svaka sekunda je važna.</li>
    <li data-sr="Blockchain transakcije su nepovratne — niko ne može da ti vrati ETH ili NFT-ove koji su otišli." data-en="Blockchain transactions are irreversible — nobody can return ETH or NFTs that have gone.">Blockchain transakcije su nepovratne — niko ne može da ti vrati ETH ili NFT-ove koji su otišli.</li>
    <li data-sr="Svako ko ti sad nudi 'povrat' je novi napadač — ignoriši ih bez odgovora." data-en="Anyone who now offers you recovery is a new attacker — ignore them without responding.">Svako ko ti sad nudi 'povrat' je novi napadač — ignoriši ih bez odgovora.</li>
    <li data-sr="Dokumentuj sve sada i poveži se sa zajednicom žrtava — kolektivna prijava je efikasnija." data-en="Document everything now and connect with the victim community — a collective report is more effective.">Dokumentuj sve sada i poveži se sa zajednicom žrtava — kolektivna prijava je efikasnija.</li>
  </ul>
</section>


`
};
