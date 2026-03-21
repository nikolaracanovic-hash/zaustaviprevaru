window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["public-records-access-fee-scam"] = {
  raw_html: `

    <section class="card">
      <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
      <p data-sr="Prevarant šalje poziv da platite naknadu za izvod iz biračkog spiska, registra firmi, sudskog indeksa ili slične javne baze." data-en="The fraudster sends an invitation to pay for a voter extract, business register, court index, or similar public database.">Prevarant šalje poziv da platite naknadu za izvod iz biračkog spiska, registra firmi, sudskog indeksa ili slične javne baze.</p>
      <p data-sr="Nakon uplate link ne radi ili traži još uplata za otključavanje." data-en="After payment the link fails or asks for more payments to unlock.">Nakon uplate link ne radi ili traži još uplata za otključavanje.</p>
      <div class="callout" data-sr="<strong>Model:</strong> Lažni portal → registracija → naknada → nema dokumenta." data-en="<strong>Model:</strong> Fake portal → registration → fee → no document."><strong>Model:</strong> Lažni portal → registracija → naknada → nema dokumenta.</div>
    </section>

    <section class="card">
      <h2 data-sr="Zašto ljudi pristaju" data-en="Why people comply">Zašto ljudi pristaju</h2>
      <p data-sr="Novinari, istražitelji i građani žele brz pristup podacima." data-en="Journalists, researchers, and citizens want fast access to data.">Novinari, istražitelji i građani žele brz pristup podacima.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Signali" data-en="Signals">Signali</div>
          <ul class="bullets">
            <li data-sr="Taksa za dokument koji je besplatno dostupan na zvaničnom portalu." data-en="A fee for a document freely available on an official portal.">Taksa za dokument koji je besplatno dostupan na zvaničnom portalu.</li>
            <li data-sr="Domen portala je sličan ali ne identičan državnom." data-en="The portal domain is similar but not identical to the state one.">Domen portala je sličan ali ne identičan državnom.</li>
            <li data-sr="Zahtev za broj kartice za verifikaciju korisnika." data-en="Card number requested for user verification.">Zahtev za broj kartice za verifikaciju korisnika.</li>
            <li data-sr="Nema jasnog broja predmeta ili reference uplate." data-en="No clear case or payment reference.">Nema jasnog broja predmeta ili reference uplate.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Cilj" data-en="Goal">Cilj</div>
          <ul class="bullets">
            <li data-sr="Naplata pristupa koji ne postoji." data-en="Charging for access that does not exist.">Naplata pristupa koji ne postoji.</li>
            <li data-sr="Krađa kartice kroz lažnu naplatu." data-en="Card theft via fake billing.">Krađa kartice kroz lažnu naplatu.</li>
            <li data-sr="Prikupljanje mejla i lozinke za dalji fišing." data-en="Collecting email and password for further phishing.">Prikupljanje mejla i lozinke za dalji fišing.</li>
            <li data-sr="Serija nivoa pristupa sa dodatnim naknadama." data-en="Tiers of access with extra fees.">Serija nivoa pristupa sa dodatnim naknadama.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching)">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Jedan uplaćen korak često vodi ka narednom zahtevu." data-en="One paid step often leads to the next demand.">Jedan uplaćen korak često vodi ka narednom zahtevu.</p>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Ulaz: mejl, oglas ili pretraga" data-en="Phase 1 — Entry: email, ad, or search">Faza 1 — Ulaz: mejl, oglas ili pretraga</h3>
        <p data-sr="Klik na oglas ili mejl koji obećava brz izvod iz evidencije." data-en="Click on an ad or email promising a fast registry extract.">Klik na oglas ili mejl koji obećava brz izvod iz evidencije.</p>
        <p data-sr="Stranica traži registraciju pre prikaza bilo čega." data-en="The page demands registration before showing anything.">Stranica traži registraciju pre prikaza bilo čega.</p>
        <ul class="bullets">
            <li data-sr="Poruka koristi reči kao što su hitno, zadnji dan ili suspenzija prava." data-en="The message uses words like urgent, last day, or suspension of rights.">Poruka koristi reči kao što su hitno, zadnji dan ili suspenzija prava.</li>
            <li data-sr="Pošiljalac nije adresa na koju ste ranije primali poštu od iste ustanove." data-en="The sender is not an address where you previously received mail from that body.">Pošiljalac nije adresa na koju ste ranije primali poštu od iste ustanove.</li>
            <li data-sr="Traži se klik na link umesto obaveštenja u fizičkom obliku." data-en="A link click is requested instead of a paper notice.">Traži se klik na link umesto obaveštenja u fizičkom obliku.</li>
            <li data-sr="Broj pozivaoca se ne poklapa sa javno objavljenim brojem." data-en="The caller number does not match a publicly listed number.">Broj pozivaoca se ne poklapa sa javno objavljenim brojem.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta odluči da veruje poruci pre zvanične provere." data-en="<strong>Threshold:</strong> the target decides to trust the message before official verification."><strong>Prag faze:</strong> meta odluči da veruje poruci pre zvanične provere.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Rokovi, iznosi i pritisak" data-en="Phase 2 — Deadlines, amounts, and pressure">Faza 2 — Rokovi, iznosi i pritisak</h3>
        <p data-sr="Prikazuje se mali besplatni deo da bi se potvrdila autentičnost." data-en="A small free snippet is shown to prove authenticity.">Prikazuje se mali besplatni deo da bi se potvrdila autentičnost.</p>
        <p data-sr="Cena pristupa deluje niska pa se ne proverava domen." data-en="Access price feels low so the domain is not checked.">Cena pristupa deluje niska pa se ne proverava domen.</p>
        <ul class="bullets">
            <li data-sr="Iznos takse deluje mali u odnosu na obećanu korist ili iznos koji vam pripada." data-en="The fee feels small compared to the promised benefit or amount owed.">Iznos takse deluje mali u odnosu na obećanu korist ili iznos koji vam pripada.</li>
            <li data-sr="Objašnjenje koristi generičke fraze bez broja predmeta koji proveravate vi." data-en="The explanation uses generic phrases without a case number you can verify yourself.">Objašnjenje koristi generičke fraze bez broja predmeta koji proveravate vi.</li>
            <li data-sr="Prevarant ponavlja da zakon zahteva uplatu danas." data-en="The fraudster repeats that the law requires payment today.">Prevarant ponavlja da zakon zahteva uplatu danas.</li>
            <li data-sr="Traže se podaci koji nisu potrebni za prvi korak u praksi." data-en="Data is requested that is not needed for the first step in practice.">Traže se podaci koji nisu potrebni za prvi korak u praksi.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="vishing.html" data-sr="Višing" data-en="Vishing">Višing</a></li>
            <li><a href="phishing.html" data-sr="Fišing" data-en="Phishing">Fišing</a></li>
            <li><a href="smishing.html" data-sr="Smišing" data-en="Smishing">Smišing</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta prihvati priču o roku bez nezavisne potvrde." data-en="<strong>Threshold:</strong> the target accepts the deadline story without independent confirmation."><strong>Prag faze:</strong> meta prihvati priču o roku bez nezavisne potvrde.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Forma, link ili uplatnica" data-en="Phase 3 — Form, link, or payment slip">Faza 3 — Forma, link ili uplatnica</h3>
        <p data-sr="Naplata karticom ili uplatnica na nejasan primalac." data-en="Card charge or slip to an unclear payee.">Naplata karticom ili uplatnica na nejasan primalac.</p>
        <p data-sr="Traže se dodatni nivoi pristupa uz nove naknade." data-en="More access tiers appear with new fees.">Traže se dodatni nivoi pristupa uz nove naknade.</p>
        <ul class="bullets">
            <li data-sr="Forma traži broj kartice, CVV ili lozinku naloga." data-en="The form asks for card number, CVV, or account password.">Forma traži broj kartice, CVV ili lozinku naloga.</li>
            <li data-sr="Uplatnica ima primalca koji nije budžetski ili jasan organ." data-en="The payment slip beneficiary is not a treasury or clear agency.">Uplatnica ima primalca koji nije budžetski ili jasan organ.</li>
            <li data-sr="Traži se prenos na kripto ili digitalni novčanik." data-en="A transfer to crypto or a digital wallet is requested.">Traži se prenos na kripto ili digitalni novčanik.</li>
            <li data-sr="Potvrda o uplati se šalje preko četa umesto kroz portal." data-en="Payment proof is sent via chat instead of through a portal.">Potvrda o uplati se šalje preko četa umesto kroz portal.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta počne unos novca ili osetljivih podataka." data-en="<strong>Threshold:</strong> the target begins entering money or sensitive data."><strong>Prag faze:</strong> meta počne unos novca ili osetljivih podataka.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Prag: novac ili podaci napuštaju vas" data-en="Phase 4 — Threshold: money or data leaves you">Faza 4 — Prag: novac ili podaci napuštaju vas</h3>
        <p data-sr="Novac je skinut ali dokument ne može da se preuzme." data-en="Money is taken but the document cannot be downloaded.">Novac je skinut ali dokument ne može da se preuzme.</p>
        <p data-sr="Nalog na portalu prestaje da radi posle uplate." data-en="The portal account stops working after payment.">Nalog na portalu prestaje da radi posle uplate.</p>
        <ul class="bullets">
            <li data-sr="Novac odlazi na račun koji brzo isprazne ili prebace." data-en="Money moves to an account that is emptied or forwarded quickly.">Novac odlazi na račun koji brzo isprazne ili prebace.</li>
            <li data-sr="Podaci se koriste za prijavu na druge servise." data-en="Data is used to sign up for other services.">Podaci se koriste za prijavu na druge servise.</li>
            <li data-sr="Prevarant traži još jednu sitnu uplatu radi završetka." data-en="The fraudster asks for one more small payment to finish.">Prevarant traži još jednu sitnu uplatu radi završetka.</li>
            <li data-sr="Korisnik dobija lažnu potvrdu u PDF-u bez pravnog efekta." data-en="The user receives a fake PDF confirmation with no legal effect.">Korisnik dobija lažnu potvrdu u PDF-u bez pravnog efekta.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="identity-theft.html" data-sr="Krađa identiteta" data-en="Identity theft">Krađa identiteta</a></li>
            <li><a href="advance-fee-fraud.html" data-sr="Unapred plaćena taksa" data-en="Advance fee fraud">Unapred plaćena taksa</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> izvrši se štetna transakcija ili otključa se pristup nalozima." data-en="<strong>Threshold:</strong> a harmful transaction runs or account access is unlocked."><strong>Prag faze:</strong> izvrši se štetna transakcija ili otključa se pristup nalozima.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Otkrivanje" data-en="Phase 5 — Discovery">Faza 5 — Otkrivanje</h3>
        <p data-sr="Zvanični portal daje isti podatak besplatno ili po tarifi koju proveravate." data-en="The official portal offers the same data free or at a tariff you can verify.">Zvanični portal daje isti podatak besplatno ili po tarifi koju proveravate.</p>
        <p data-sr="Domen lažnog portala je prijavljen kao prevara." data-en="The fake portal domain is reported as a scam.">Domen lažnog portala je prijavljen kao prevara.</p>
        <ul class="bullets">
            <li data-sr="Zvanična služba kaže da nema predmeta na vaše ime." data-en="The real desk says there is no case in your name.">Zvanična služba kaže da nema predmeta na vaše ime.</li>
            <li data-sr="Banka označi uplate kao sumnjive." data-en="The bank flags the transfers as suspicious.">Banka označi uplate kao sumnjive.</li>
            <li data-sr="Isti šablon poruke prijavljuju i drugi korisnici." data-en="Others report the same message pattern.">Isti šablon poruke prijavljuju i drugi korisnici.</li>
            <li data-sr="Link više ne radi ili vodi na drugu temu." data-en="The link no longer works or leads to another topic.">Link više ne radi ili vodi na drugu temu.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta shvati da zvanična evidencija ne potvrđuje priču." data-en="<strong>Threshold:</strong> the target realizes official records do not confirm the story."><strong>Prag faze:</strong> meta shvati da zvanična evidencija ne potvrđuje priču.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Sanacija" data-en="Phase 6 — Remediation">Faza 6 — Sanacija</h3>
        <p data-sr="Prijaviti transakciju banci i platformi pretrage ako je oglas." data-en="Report the transaction to the bank and search platform if it was an ad.">Prijaviti transakciju banci i platformi pretrage ako je oglas.</p>
        <p data-sr="Koristiti bookmark zvaničnog portala evidencije." data-en="Use a bookmark to the official records portal.">Koristiti bookmark zvaničnog portala evidencije.</p>
        <ul class="bullets">
            <li data-sr="Promeniti lozinke ako su unete na sumnjivoj stranici." data-en="Change passwords if they were entered on a suspicious site.">Promeniti lozinke ako su unete na sumnjivoj stranici.</li>
            <li data-sr="Ukloniti dozvole aplikacijama ako ste ih dali tokom procesa." data-en="Remove app permissions if you granted them during the process.">Ukloniti dozvole aplikacijama ako ste ih dali tokom procesa.</li>
            <li data-sr="Prijaviti prevaru nadležnom telu za potrošače ili policiji." data-en="Report the scam to consumer bodies or police.">Prijaviti prevaru nadležnom telu za potrošače ili policiji.</li>
            <li data-sr="Obavestiti porodicu da ne šalju dokumente na isti broj." data-en="Tell family not to send documents to the same number.">Obavestiti porodicu da ne šalju dokumente na isti broj.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching in this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="recovery-scam.html" data-sr="Prevara povrata" data-en="Recovery scam">Prevara povrata</a></li>
            <li><a href="government-impersonation.html" data-sr="Državni organi" data-en="Government impersonation">Državni organi</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta prelazi na zvaničan kanal i zaustavlja dalje gubitke." data-en="<strong>Threshold:</strong> the target switches to an official channel and stops further loss."><strong>Prag faze:</strong> meta prelazi na zvaničan kanal i zaustavlja dalje gubitke.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
<ul class="bullets">
            <li data-sr="Taksa za podatak koji je javno besplatno objavljen." data-en="A fee for data publicly posted for free.">Taksa za podatak koji je javno besplatno objavljen.</li>
            <li data-sr="Registracija sa lozinkom ista kao na drugim sajtovima." data-en="Registration reusing passwords from other sites.">Registracija sa lozinkom ista kao na drugim sajtovima.</li>
            <li data-sr="Lažni HTTPS i ikona katanca bez pravog entiteta." data-en="Fake HTTPS and padlock without a real entity.">Lažni HTTPS i ikona katanca bez pravog entiteta.</li>
            <li data-sr="Zahtev za pun CVV uz besplatan probni pristup." data-en="Full CVV requested with a free trial access.">Zahtev za pun CVV uz besplatan probni pristup.</li>
            <li data-sr="PDF koji se nikad ne generiše." data-en="A PDF that is never generated.">PDF koji se nikad ne generiše.</li>
            <li data-sr="Mejl sa opštim pozdravom bez vašeg imena." data-en="Email with a generic greeting without your name.">Mejl sa opštim pozdravom bez vašeg imena.</li>
            <li data-sr="Cena u devizama bez jasnog pravnog osnova." data-en="Price in foreign currency without a clear legal basis.">Cena u devizama bez jasnog pravnog osnova.</li>
            <li data-sr="Zabrana kontaktiranja državnog portala." data-en="Forbidden to contact the state portal.">Zabrana kontaktiranja državnog portala.</li>
            <li data-sr="Ponuda arhivske pretrage uz nejasnu uslugu." data-en="Archive search offer with vague service.">Ponuda arhivske pretrage uz nejasnu uslugu.</li>
            <li data-sr="Lažni broj predmeta u mejlu." data-en="Fake case number in the email.">Lažni broj predmeta u mejlu.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
<ol class="steps">
        <li data-sr="Otvorite zvanični portal ručno ukucan i uporedite uslove pristupa." data-en="Open the official portal by typing it and compare access rules.">Otvorite zvanični portal ručno ukucan i uporedite uslove pristupa.</li>
        <li data-sr="Proverite da li postoji besplatna pretraga pre plaćanja." data-en="Check whether free search exists before paying.">Proverite da li postoji besplatna pretraga pre plaćanja.</li>
        <li data-sr="Ne koristite istu lozinku kao za mejl ili banku." data-en="Do not reuse your email or bank password.">Ne koristite istu lozinku kao za mejl ili banku.</li>
        <li data-sr="Proverite ko je vlasnik domena javnim WHOIS alatom ako je dostupan." data-en="Check domain ownership with a public WHOIS tool if available.">Proverite ko je vlasnik domena javnim WHOIS alatom ako je dostupan.</li>
        <li data-sr="Ne unosite karticu ako dokument možete dobiti na šalteru." data-en="Do not enter a card if you can get the document at a desk.">Ne unosite karticu ako dokument možete dobiti na šalteru.</li>
        <li data-sr="Potražite recenzije portala nezavisno od njihovog sajta." data-en="Look for portal reviews independent of their site.">Potražite recenzije portala nezavisno od njihovog sajta.</li>
        <li data-sr="Uporedite tarifu sa zvaničnim cenovnikom države." data-en="Compare the fee with the state official price list.">Uporedite tarifu sa zvaničnim cenovnikom države.</li>
        <li data-sr="Obavestite kolege koji istražuju istu temu." data-en="Tell colleagues researching the same topic.">Obavestite kolege koji istražuju istu temu.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
<ul class="bullets">
            <li data-sr="Da li zvanični portal nudi isti podatak besplatno?" data-en="Does the official portal offer the same data for free?">Da li zvanični portal nudi isti podatak besplatno?</li>
            <li data-sr="Da li je domen identičan državnom?" data-en="Is the domain identical to the state one?">Da li je domen identičan državnom?</li>
            <li data-sr="Da li traže CVV?" data-en="Do they ask for CVV?">Da li traže CVV?</li>
            <li data-sr="Da li postoji jasan pravni osnov za naknadu?" data-en="Is there a clear legal basis for the fee?">Da li postoji jasan pravni osnov za naknadu?</li>
            <li data-sr="Da li mogu dobiti izvod na šalteru?" data-en="Can I get an extract at a desk?">Da li mogu dobiti izvod na šalteru?</li>
            <li data-sr="Da li mejl dolazi sa sumnjivog domena?" data-en="Does the email come from a suspicious domain?">Da li mejl dolazi sa sumnjivog domena?</li>
            <li data-sr="Da li portal ima kontakt adresu i firmu?" data-en="Does the portal have a contact address and company?">Da li portal ima kontakt adresu i firmu?</li>
            <li data-sr="Da li traže prenos na treće lice?" data-en="Do they want transfer to a third party?">Da li traže prenos na treće lice?</li>
            <li data-sr="Da li je cena u skladu sa tarifnikom?" data-en="Does the price match the tariff?">Da li je cena u skladu sa tarifnikom?</li>
            <li data-sr="Da li postoji broj predmeta koji proveravate?" data-en="Is there a case number you can verify?">Da li postoji broj predmeta koji proveravate?</li>
            <li data-sr="Da li rezultat pretrage deluje generisan šablonom?" data-en="Does the search result look template-generated?">Da li rezultat pretrage deluje generisan šablonom?</li>
            <li data-sr="Da li HTTPS sertifikat odgovara imenu domena?" data-en="Does the HTTPS certificate match the domain name?">Da li HTTPS sertifikat odgovara imenu domena?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
<ol class="steps">
        <li data-sr="Zatvorite karticu unos ako niste sigurni." data-en="Close the card entry if you are unsure.">Zatvorite karticu unos ako niste sigurni.</li>
        <li data-sr="Proverite zvaničan portal paralelno." data-en="Check the official portal in parallel.">Proverite zvaničan portal paralelno.</li>
        <li data-sr="Prijaviti transakciju ako je već plaćeno." data-en="Report the transaction if already paid.">Prijaviti transakciju ako je već plaćeno.</li>
        <li data-sr="Promeniti lozinku ako ste je ponovili sa drugim servisom." data-en="Change the password if you reused it elsewhere.">Promeniti lozinku ako ste je ponovili sa drugim servisom.</li>
        <li data-sr="Deljenje upozorenja u profesionalnoj mreži." data-en="Share a warning in your professional network.">Deljenje upozorenja u profesionalnoj mreži.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si uneo karticu?" data-en="Did you enter a card?">Da li si uneo karticu?</li>
            <li data-sr="Koji je bio tačan URL?" data-en="What was the exact URL?">Koji je bio tačan URL?</li>
            <li data-sr="Da li si preuzeo bilo koji dokument?" data-en="Did you download any document?">Da li si preuzeo bilo koji dokument?</li>
            <li data-sr="Koliko puta su tražili uplatu?" data-en="How many times did they ask for payment?">Koliko puta su tražili uplatu?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Javni podaci često imaju zvaničan besplatan ili tarifni kanal." data-en="Public data often has an official free or tariff channel.">Javni podaci često imaju zvaničan besplatan ili tarifni kanal.</li>
            <li data-sr="Hajde da uporedimo domen sa državnim bookmarkom." data-en="Let us compare the domain to a state bookmark.">Hajde da uporedimo domen sa državnim bookmarkom.</li>
            <li data-sr="Bolje otići na šalter nego izgubiti karticu." data-en="Better go to a desk than lose the card.">Bolje otići na šalter nego izgubiti karticu.</li>
            <li data-sr="Istraživački timovi dele liste sumnjivih portala." data-en="Research teams share lists of suspicious portals.">Istraživački timovi dele liste sumnjivih portala.</li>
          </ul>
        </div>
      </div>
    </section>
`
};
