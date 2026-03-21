window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["hr-file-verification-phishing"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod" data-en="Introduction">Uvod</h2>
      <p data-sr="Stiže obaveštenje da moraš potvrditi dosije, beneficije, porez, bankovni račun za platu ili lične podatke na novom HR sistemu. Link vodi na kopiju internog portala ili lažnu prijavu za zaposlene." data-en="A notice says you must confirm your file, benefits, tax data, payroll account, or personal details on a new HR system. The link leads to a copied internal portal or a fake employee login page.">Stiže obaveštenje da moraš potvrditi dosije, beneficije, porez, bankovni račun za platu ili lične podatke na novom HR sistemu. Link vodi na kopiju internog portala ili lažnu prijavu za zaposlene.</p>
      <p data-sr="Za razliku od šireg fake HR modela, ovde mamac nije sama ponuda posla nego navodna obavezna administrativna radnja unutar već postojećeg radnog ili kandidatskog procesa. Napad računa na to da zaposleni i kandidati rutinski klikću na HR obaveštenja kad deluju interno." data-en="Unlike the broader fake HR pattern, the bait here is not the job offer itself but a supposedly mandatory administrative step inside an existing employment or candidate process. The scam relies on employees and applicants routinely clicking HR notices when they look internal.">Za razliku od šireg fake HR modela, ovde mamac nije sama ponuda posla nego navodna obavezna administrativna radnja unutar već postojećeg radnog ili kandidatskog procesa. Napad računa na to da zaposleni i kandidati rutinski klikću na HR obaveštenja kad deluju interno.</p>
      <div class="callout" data-sr="<strong>Model:</strong> HR obaveštenje → link za verifikaciju dosijea → lažni portal → prijava, dokumenta ili bankovni podaci → zloupotreba." data-en="<strong>Model:</strong> HR notice → file verification link → fake portal → login, documents, or banking data → abuse."><strong>Model:</strong> HR obaveštenje → link za verifikaciju dosijea → lažni portal → prijava, dokumenta ili bankovni podaci → zloupotreba.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi" data-en="How it generally works">Kako generalno radi</h2>
      <p data-sr="Koristi se strah od gubitka plate, beneficija, pristupa internom sistemu ili statusa kandidature ako potvrda ne bude završena odmah. Napad je uspešan jer liči na svakodnevni interni proces, ne na otvorenu pretnju." data-en="Fear of losing pay, benefits, internal-system access, or candidate status if confirmation is not completed immediately is exploited. The attack works because it looks like an everyday internal process, not an open threat.">Koristi se strah od gubitka plate, beneficija, pristupa internom sistemu ili statusa kandidature ako potvrda ne bude završena odmah. Napad je uspešan jer liči na svakodnevni interni proces, ne na otvorenu pretnju.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta privlači žrtvu" data-en="What pulls the victim in">Šta privlači žrtvu</div>
          <ul class="bullets">
        <li data-sr="Poruka izgleda kao interno obaveštenje sa logotipom firme." data-en="The message looks like an internal notice with a company logo.">Poruka izgleda kao interno obaveštenje sa logotipom firme.</li>
        <li data-sr="Komunikacija izgleda interno: naziv HR-a, payroll-a, beneficija ili employee records." data-en="The communication looks internal: HR, payroll, benefits, or employee records wording.">Komunikacija izgleda interno: naziv HR-a, payroll-a, beneficija ili employee records.</li>
        <li data-sr="Traže se dokumenta ili potvrde odmah pod pričom da sistem ističe ili menja pravila." data-en="Documents or confirmations are requested immediately under a story that the system is expiring or changing rules.">Traže se dokumenta ili potvrde odmah pod pričom da sistem ističe ili menja pravila.</li>
        <li data-sr="Pritisak da potvrdiš isti dan kako plata, beneficije ili kandidatura ne bi ostali blokirani." data-en="Pressure to confirm the same day so pay, benefits, or candidacy do not stay blocked.">Pritisak da potvrdiš isti dan kako plata, beneficije ili kandidatura ne bi ostali blokirani.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Gde je prevara" data-en="Where the fraud is">Gde je prevara</div>
          <ul class="bullets">
        <li data-sr="Domen linka je blago drugačiji od pravog (dodatak, zamena slova, generički hosting)." data-en="The link domain is slightly off the real one (extra word, letter swap, generic hosting).">Domen linka je blago drugačiji od pravog (dodatak, zamena slova, generički hosting).</li>
        <li data-sr="Portal traži prijavu, sken dokumenata, bankovne podatke ili MFA kod, iako pravi HR to obično rešava u postojećem sistemu." data-en="The portal asks for login data, document scans, bank details, or an MFA code even though real HR would usually handle this inside an existing system.">Portal traži prijavu, sken dokumenata, bankovne podatke ili MFA kod, iako pravi HR to obično rešava u postojećem sistemu.</li>
        <li data-sr="Ne možeš potvrditi identitet kontakta kroz javni HR broj sa sajta poslodavca." data-en="You cannot verify the contact through public HR on the employer website.">Ne možeš potvrditi identitet kontakta kroz javni HR broj sa sajta poslodavca.</li>
        <li data-sr="Priča o HR verifikaciji se menja kada tražiš pauzu od 24 sata." data-en="The story about HR verification changes when you ask for a 24-hour pause.">Priča o HR verifikaciji se menja kada tražiš pauzu od 24 sata.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching)">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Šest faza tipičnog toka; grananja ka srodnim poslovnim prevarama." data-en="Six phases of a typical flow; branching to related job scams.">Šest faza tipičnog toka; grananja ka srodnim poslovnim prevarama.</p>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Prvi kontakt" data-en="Phase 1 — First contact">Faza 1 — Prvi kontakt</h3>
        <p data-sr="Stiže poruka ili imejl da treba da potvrdiš dosije, poreski obrazac, beneficije, bankovni račun za platu ili dokumenta kandidata. Poruka deluje kao nastavak internog procesa i zato često ne pali alarm kao klasičan fišing." data-en="A message or email says you must confirm your file, tax form, benefits, payroll bank account, or candidate documents. It feels like a continuation of an internal process, which is why it often does not trigger alarm like classic phishing.">Stiže poruka ili imejl da treba da potvrdiš dosije, poreski obrazac, beneficije, bankovni račun za platu ili dokumenta kandidata. Poruka deluje kao nastavak internog procesa i zato često ne pali alarm kao klasičan fišing.</p>
        <ul class="bullets">
          <li data-sr="Signal: nisi aplicirao na zvanični oglas kod poslodavca koji možeš proveriti." data-en="Signal: you did not apply to an official vacancy with an employer you can verify.">Signal: nisi aplicirao na zvanični oglas kod poslodavca koji možeš proveriti.</li>
          <li data-sr="Signal: kontakt koristi besplatni imejl ili broj koji ne odgovara firmi." data-en="Signal: the contact uses a free email or number that does not match the company.">Signal: kontakt koristi besplatni imejl ili broj koji ne odgovara firmi.</li>
          <li data-sr="Signal: poruka govori o dosijeu ili payroll-u, ali ne pominje tačan interni kanal koji već koristiš." data-en="Signal: the message talks about your file or payroll but does not mention the exact internal channel you already use.">Signal: poruka govori o dosijeu ili payroll-u, ali ne pominje tačan interni kanal koji već koristiš.</li>
          <li data-sr="Signal: jezik je šablonski, sa generičkim HR naslovima ili mešavinom internog i spoljnog tona." data-en="Signal: the language is templated, with generic HR headings or a mix of internal and external tone.">Signal: jezik je šablonski, sa generičkim HR naslovima ili mešavinom internog i spoljnog tona.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> odgovoriš na ponudu ili klikneš na link." data-en="<strong>Phase threshold:</strong> you reply to the offer or click the link."><strong>Prag faze:</strong> odgovoriš na ponudu ili klikneš na link.</div>
      </article>
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Brza selekcija" data-en="Phase 2 — Fast selection">Faza 2 — Brza selekcija</h3>
        <p data-sr="Posle prve poruke stiže poziv da hitno završite verifikaciju ili da pristupite novom HR ekranu. Umesto pravog razgovora o poslu ili internom procesu, sve se svodi na to da što pre otvorite link i unesete podatke." data-en="After the first notice, you are pushed to urgently complete the verification or enter a new HR screen. Instead of a real discussion about the role or process, everything narrows to opening the link and entering data as fast as possible.">Posle prve poruke stiže poziv da hitno završite verifikaciju ili da pristupite novom HR ekranu. Umesto pravog razgovora o poslu ili internom procesu, sve se svodi na to da što pre otvorite link i unesete podatke.</p>
        <ul class="bullets">
          <li data-sr="Signal: traže se lični podaci i dokumenta pre nego što vidiš pravi interni portal ili pisani trag procesa." data-en="Signal: personal data and documents are requested before you see the real internal portal or a written process trail.">Signal: traže se lični podaci i dokumenta pre nego što vidiš pravi interni portal ili pisani trag procesa.</li>
          <li data-sr="Signal: link vodi na prijavu koja izgleda interno, ali ne koristi domen ili subdomen firme." data-en="Signal: the link leads to a login that looks internal but does not use the company’s real domain or subdomain.">Signal: link vodi na prijavu koja izgleda interno, ali ne koristi domen ili subdomen firme.</li>
          <li data-sr="Signal: odbijaju video poziv, HR broj sa sajta ili prijavu preko postojećeg sistema." data-en="Signal: they refuse a video call, the HR number on the website, or login through the existing system.">Signal: odbijaju video poziv, HR broj sa sajta ili prijavu preko postojećeg sistema.</li>
          <li data-sr="Signal: pritisak da potvrdiš odmah da plata, beneficije ili kandidatura ne bi ostali blokirani." data-en="Signal: pressure to confirm immediately so pay, benefits, or candidacy do not stay blocked.">Signal: pritisak da potvrdiš odmah da plata, beneficije ili kandidatura ne bi ostali blokirani.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> prihvatiš da si u procesu zapošljavanja." data-en="<strong>Phase threshold:</strong> you accept that you are in a hiring process."><strong>Prag faze:</strong> prihvatiš da si u procesu zapošljavanja.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Prag: uplata ili osetljivi podaci" data-en="Phase 3 — Threshold: payment or sensitive data">Faza 3 — Prag: uplata ili osetljivi podaci</h3>
        <p data-sr="U ovoj fazi link otvara lažni HR portal koji traži korisničko ime, lozinku, MFA kod, sken dokumenta, broj računa za platu ili čak karticu radi verifikacije. Ako nema forme, ubacuje se naknada za administraciju, obradu ugovora ili potvrdu dosijea." data-en="At this stage the link opens a fake HR portal asking for username, password, an MFA code, ID scans, payroll account details, or even card data for verification. If there is no form, an admin, contract-processing, or file-confirmation fee is introduced.">U ovoj fazi link otvara lažni HR portal koji traži korisničko ime, lozinku, MFA kod, sken dokumenta, broj računa za platu ili čak karticu radi verifikacije. Ako nema forme, ubacuje se naknada za administraciju, obradu ugovora ili potvrdu dosijea.</p>
        <ul class="bullets">
          <li data-sr="Signal: uplata ide na privatni račun, kripto ili prepaid karticu." data-en="Signal: payment goes to a private account, crypto, or prepaid card.">Signal: uplata ide na privatni račun, kripto ili prepaid karticu.</li>
          <li data-sr="Signal: traže se kod sa kartice, selfie sa dokumentom ili pristup nalogu." data-en="Signal: card codes, a selfie with ID, or account access are requested.">Signal: traže se kod sa kartice, selfie sa dokumentom ili pristup nalogu.</li>
          <li data-sr="Signal: ugovor ne postoji ili je u pripremi dok se traži novac." data-en="Signal: no contract exists or it is being prepared while money is requested.">Signal: ugovor ne postoji ili je u pripremi dok se traži novac.</li>
          <li data-sr="Signal: traže MFA kod ili prijavu na portal preko linka iz poruke, umesto kroz postojeći sistem." data-en="Signal: they ask for an MFA code or a portal login through the message link instead of the existing system.">Signal: traže MFA kod ili prijavu na portal preko linka iz poruke, umesto kroz postojeći sistem.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="job-scam.html" data-sr="Prevara sa ponudom posla" data-en="Job scam">Prevara sa ponudom posla</a></li>
            <li><a href="recruitment-scam.html" data-sr="Prevara sa regrutovanjem" data-en="Recruitment scam">Prevara sa regrutovanjem</a></li>
            <li><a href="work-from-home-scam.html" data-sr="Lažni rad od kuće" data-en="Work from home scam">Lažni rad od kuće</a></li>
            <li><a href="fake-hr-scam.html" data-sr="Lažni HR" data-en="Fake HR scam">Lažni HR</a></li>
            <li><a href="advance-fee-fraud.html" data-sr="Uplata unapred" data-en="Advance-fee fraud">Uplata unapred</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> uplatiš ili pošalješ osetljive podatke." data-en="<strong>Phase threshold:</strong> you pay or send sensitive data."><strong>Prag faze:</strong> uplatiš ili pošalješ osetljive podatke.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Eskalacija" data-en="Phase 4 — Escalation">Faza 4 — Eskalacija</h3>
        <p data-sr="Posle prvog unosa podataka ili prve uplate priča se širi: dokument je mutan, obrazac nije sinhronizovan, bankovni račun za platu nije potvrđen ili kandidatura navodno ne može dalje bez još jednog koraka. Ton postaje tvrđi jer napadač računa da si već ušao u proces i da ti je nezgodno da staneš." data-en="After the first data submission or payment, the story expands: a document is blurry, the form did not sync, the payroll account was not confirmed, or the candidacy cannot proceed without one more step. The tone hardens because the attacker assumes you are already invested and less likely to stop.">Posle prvog unosa podataka ili prve uplate priča se širi: dokument je mutan, obrazac nije sinhronizovan, bankovni račun za platu nije potvrđen ili kandidatura navodno ne može dalje bez još jednog koraka. Ton postaje tvrđi jer napadač računa da si već ušao u proces i da ti je nezgodno da staneš.</p>
        <ul class="bullets">
          <li data-sr="Signal: svaka uplata je predstavljena kao poslednja pre sledećeg koraka." data-en="Signal: each payment is framed as the last before the next step.">Signal: svaka uplata je predstavljena kao poslednja pre sledećeg koraka.</li>
          <li data-sr="Signal: pretnja da gubiš poziciju ako pitaš porodicu ili mentora." data-en="Signal: threat that you lose the role if you ask family or a mentor.">Signal: pretnja da gubiš poziciju ako pitaš porodicu ili mentora.</li>
          <li data-sr="Signal: novi HR menadžer, payroll ili IT administrator potvrđuje isti zahtev iz drugog naloga." data-en="Signal: a new HR manager, payroll, or IT admin account reinforces the same demand.">Signal: novi HR menadžer, payroll ili IT administrator potvrđuje isti zahtev iz drugog naloga.</li>
          <li data-sr="Signal: traže se dodatni dokumenti koji nisu potrebni za pravi angažman." data-en="Signal: additional documents are requested that a real engagement would not need.">Signal: traže se dodatni dokumenti koji nisu potrebni za pravi angažman.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> pristaneš na drugu uplatu ili širiš pristup podacima." data-en="<strong>Phase threshold:</strong> you agree to another payment or widen data access."><strong>Prag faze:</strong> pristaneš na drugu uplatu ili širiš pristup podacima.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 5 — Zloupotreba identiteta ili mule zadatak" data-en="Phase 5 — Identity abuse or mule task">Faza 5 — Zloupotreba identiteta ili mule zadatak</h3>
        <p data-sr="Prikupljeni dokumenti i podaci mogu završiti u krađi identiteta, preuzimanju mejla ili naloga za posao, promeni bankovnog računa za platu ili uvlačenju u mule zadatke. Ako je žrtva već uverena da proces postoji, sledeći korak lako postaje tehnička pomoć oko novca ili pošiljaka." data-en="Collected documents and data can feed identity theft, takeover of work-related email or accounts, payroll-account changes, or recruitment into mule tasks. Once the victim believes the process is real, the next step can easily become technical help around money or packages.">Prikupljeni dokumenti i podaci mogu završiti u krađi identiteta, preuzimanju mejla ili naloga za posao, promeni bankovnog računa za platu ili uvlačenju u mule zadatke. Ako je žrtva već uverena da proces postoji, sledeći korak lako postaje tehnička pomoć oko novca ili pošiljaka.</p>
        <ul class="bullets">
          <li data-sr="Signal: posao je primanje i prosleđivanje sredstava sa tvog računa." data-en="Signal: the job is receiving and forwarding funds from your account.">Signal: posao je primanje i prosleđivanje sredstava sa tvog računa.</li>
          <li data-sr="Signal: traže se pristup e-bankarstvu radi navodne verifikacije." data-en="Signal: e-banking access is requested for alleged verification.">Signal: traže se pristup e-bankarstvu radi navodne verifikacije.</li>
          <li data-sr="Signal: traže kupovinu darovnih kartica i slanje kodova." data-en="Signal: they ask you to buy gift cards and send codes.">Signal: traže kupovinu darovnih kartica i slanje kodova.</li>
          <li data-sr="Signal: uputstva zabranjuju razgovor sa bankom o primitku." data-en="Signal: instructions forbid talking to the bank about incoming funds.">Signal: uputstva zabranjuju razgovor sa bankom o primitku.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> izvršiš prenos, kupovinu kartica ili podeliš pristup." data-en="<strong>Phase threshold:</strong> you move funds, buy cards, or share access."><strong>Prag faze:</strong> izvršiš prenos, kupovinu kartica ili podeliš pristup.</div>
      </article>
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 6 — Nestanak" data-en="Phase 6 — Disappearance">Faza 6 — Nestanak</h3>
        <p data-sr="Kontakt se gasi kada nema više novca ili kada insistiraš na zvaničnom potpisu pre nove uplate. Ugovor ili isplata ne stižu." data-en="Contact stops when there is no more money or when you insist on official signing before another payment. Contract or pay never arrives.">Kontakt se gasi kada nema više novca ili kada insistiraš na zvaničnom potpisu pre nove uplate. Ugovor ili isplata ne stižu.</p>
        <ul class="bullets">
          <li data-sr="Signal: broj i imejl više ne rade." data-en="Signal: number and email no longer work.">Signal: broj i imejl više ne rade.</li>
          <li data-sr="Signal: ista priča se pojavljuje kao upozorenje na forumima." data-en="Signal: the same story appears as a warning on forums.">Signal: ista priča se pojavljuje kao upozorenje na forumima.</li>
          <li data-sr="Signal: novi kontakt nudi povraćaj uz novu uplatu." data-en="Signal: a new contact offers recovery for another payment.">Signal: novi kontakt nudi povraćaj uz novu uplatu.</li>
          <li data-sr="Signal: profil regrutera je obrisan ili promenjen." data-en="Signal: the recruiter profile was deleted or changed.">Signal: profil regrutera je obrisan ili promenjen.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="recovery-scam.html" data-sr="Prevara povraćaja" data-en="Recovery scam">Prevara povraćaja</a></li>
            <li><a href="money-mule-recruitment.html" data-sr="Regrutovanje money mule" data-en="Money mule recruitment">Regrutovanje money mule</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> prekineš komunikaciju ili prijaviš prevaru." data-en="<strong>Phase threshold:</strong> you stop communication or report fraud."><strong>Prag faze:</strong> prekineš komunikaciju ili prijaviš prevaru.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Link u poruci ne poklapa se tačno sa domenom na kome inače otvaraš HR ili portal za zaposlene." data-en="The link domain does not exactly match the domain where you normally open HR or the employee portal.">Link u poruci ne poklapa se tačno sa domenom na kome inače otvaraš HR ili portal za zaposlene.</li>
        <li data-sr="Traži se korisničko ime, šifra ili MFA za sinhronizaciju dosijea." data-en="Username, password, or MFA are requested to sync the employee file.">Traži se korisničko ime, šifra ili MFA za sinhronizaciju dosijea.</li>
        <li data-sr="Forma traži broj kartice, CVV ili lični račun za platu na stranici koja nije interna." data-en="The form asks for card data, CVV, or payroll account details on a page that is not internal.">Forma traži broj kartice, CVV ili lični račun za platu na stranici koja nije interna.</li>
        <li data-sr="Pritisak da završiš u roku od jednog sata ili pre sledeće obračunske plate." data-en="Pressure to finish within one hour or before the next payroll run.">Pritisak da završiš u roku od jednog sata ili pre sledeće obračunske plate.</li>
        <li data-sr="Poruka stiže van radnog vremena HR-a ili sa naloga koji nema trag u internoj komunikaciji." data-en="The message arrives outside HR hours or from an account with no trace in internal communication.">Poruka stiže van radnog vremena HR-a ili sa naloga koji nema trag u internoj komunikaciji.</li>
        <li data-sr="Nema potpisa osobe koju poznaješ iz pravog HR-a ili payroll-a." data-en="There is no signature from someone you know in real HR or payroll.">Nema potpisa osobe koju poznaješ iz pravog HR-a ili payroll-a.</li>
        <li data-sr="Attachment je HTML ili ZIP fajl koji otvara lažnu prijavu ili traži instalaciju." data-en="The attachment is an HTML or ZIP file that opens a fake login or pushes an installation.">Attachment je HTML ili ZIP fajl koji otvara lažnu prijavu ili traži instalaciju.</li>
        <li data-sr="Telefonski broj ili portal iz poruke ne postoje na zvaničnom sajtu poslodavca." data-en="The phone number or portal in the message does not exist on the employer’s official site.">Telefonski broj ili portal iz poruke ne postoje na zvaničnom sajtu poslodavca.</li>
        <li data-sr="Isti šablon poruke prijavljen je kao fišing kod drugih zaposlenih ili kandidata." data-en="The same message template has been reported as phishing by other employees or candidates.">Isti šablon poruke prijavljen je kao fišing kod drugih zaposlenih ili kandidata.</li>
        <li data-sr="Kad tražiš da sam otvoriš pravi HR portal ručno, insistiraju da koristiš baš njihov link." data-en="When you say you will open the real HR portal manually, they insist you use their link.">Kad tražiš da sam otvoriš pravi HR portal ručno, insistiraju da koristiš baš njihov link.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Identitet i kanal" data-en="Identity and channel">Identitet i kanal</div>
          <ul class="bullets">
        <li data-sr="Da li postoji javni broj poslodavca koji potvrđuje proces koji ti se predstavlja." data-en="Whether a public employer number confirms the process presented to you.">Da li postoji javni broj poslodavca koji potvrđuje proces koji ti se predstavlja.</li>
        <li data-sr="Da li si aplicirao kroz zvanični sajt ili portal koji možeš nezavisno otvoriti." data-en="Whether you applied through an official site or portal you can open independently.">Da li si aplicirao kroz zvanični sajt ili portal koji možeš nezavisno otvoriti.</li>
        <li data-sr="Da li imejl dolazi sa domena koji se poklapa sa javno objavljenim kontaktom." data-en="Whether the email domain matches a publicly listed contact.">Da li imejl dolazi sa domena koji se poklapa sa javno objavljenim kontaktom.</li>
        <li data-sr="Da li bi lokalna potrošačka ili studentska organizacija prihvatila isti scenario kao normalan." data-en="Whether a local consumer or student group would accept the same scenario as normal.">Da li bi lokalna potrošačka ili studentska organizacija prihvatila isti scenario kao normalan.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Novac i dokumenta" data-en="Money and documents">Novac i dokumenta</div>
          <ul class="bullets">
        <li data-sr="Da li banka vidi tipičnu prevaru kada opišeš primaoca i svrhu uplate." data-en="Whether the bank flags a typical scam when you describe payee and purpose.">Da li banka vidi tipičnu prevaru kada opišeš primaoca i svrhu uplate.</li>
        <li data-sr="Da li bi poslao isti zahtev advokatu pre bilo kakve uplate." data-en="Would you send the same demand to a lawyer before any payment.">Da li bi poslao isti zahtev advokatu pre bilo kakve uplate.</li>
        <li data-sr="Da li postoji pisan ugovor pre troška u ime posla." data-en="Whether a written contract exists before spending on behalf of the job.">Da li postoji pisan ugovor pre troška u ime posla.</li>
        <li data-sr="Da li pauza od 48 sati menja ton kontakta u pretnju." data-en="Does a 48-hour pause change the contact’s tone to threats.">Da li pauza od 48 sati menja ton kontakta u pretnju.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 12 pitanja" data-en="Checklist: 12 questions">Checklista: 12 pitanja</h2>
      <p class="muted" data-sr="Više negativnih odgovora ukazuje na prevaru." data-en="Multiple negative answers point to a scam.">Više negativnih odgovora ukazuje na prevaru.</p>
      <ul class="bullets">
        <li data-sr="Da li mogu naći istu ponudu na zvaničnom sajtu ili konkursu za HR verifikaciji dosijea." data-en="Can I find the same offer on an official site or vacancy for HR file verification.">Da li mogu naći istu ponudu na zvaničnom sajtu ili konkursu za HR verifikaciji dosijea.</li>
        <li data-sr="Da li sam platio pre nego što sam video potpisan ugovor." data-en="Did I pay before seeing a signed contract.">Da li sam platio pre nego što sam video potpisan ugovor.</li>
        <li data-sr="Da li kontakt odbija poziv na javni HR broj sa poznatog broja." data-en="Does the contact refuse a call to public HR from a known number.">Da li kontakt odbija poziv na javni HR broj sa poznatog broja.</li>
        <li data-sr="Da li uplata ide na privatno lice, kripto ili prepaid." data-en="Does payment go to a private person, crypto, or prepaid.">Da li uplata ide na privatno lice, kripto ili prepaid.</li>
        <li data-sr="Da li me tera da ne pitam banku o primitku ili svrhu." data-en="Do they push me not to ask the bank about receipt or purpose.">Da li me tera da ne pitam banku o primitku ili svrhu.</li>
        <li data-sr="Da li traže kod sa kartice, selfie sa dokumentom ili remote pristup." data-en="Are card codes, an ID selfie, or remote access requested.">Da li traže kod sa kartice, selfie sa dokumentom ili remote pristup.</li>
        <li data-sr="Da li je plata daleko iznad tržišta za istu ulogu." data-en="Is pay far above market for the same role.">Da li je plata daleko iznad tržišta za istu ulogu.</li>
        <li data-sr="Da li je intervju samo čet bez identifikacije firme uživo." data-en="Is the interview only chat without live company identification.">Da li je intervju samo čet bez identifikacije firme uživo.</li>
        <li data-sr="Da li je isti tekst priče kopiran na mreži kao prevara." data-en="Is the same story copied online as a scam.">Da li je isti tekst priče kopiran na mreži kao prevara.</li>
        <li data-sr="Da li sam prosleđivao novac ili pakete za posao." data-en="Did I forward money or packages for the job.">Da li sam prosleđivao novac ili pakete za posao.</li>
        <li data-sr="Da li bih ovo prijavio karijernom centru ili mentoru." data-en="Would you report this to a career centre or mentor.">Da li bih ovo prijavio karijernom centru ili mentoru.</li>
        <li data-sr="Da li pauza od jednog dana menja ton u pretnju." data-en="Does a one-day pause change the tone to threats.">Da li pauza od jednog dana menja ton u pretnju.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Prekini uplate i ne šalji nove dokumenta." data-en="Stop payments and do not send new documents.">Prekini uplate i ne šalji nove dokumenta.</li>
        <li data-sr="Sačuvaj poruke, slike ekrana i uplatnice." data-en="Save messages, screenshots, and payment slips.">Sačuvaj poruke, slike ekrana i uplatnice.</li>
        <li data-sr="Pozovi banku ako su podeljeni podaci kartice ili izvršena uplata." data-en="Call the bank if card details were shared or a payment was made.">Pozovi banku ako su podeljeni podaci kartice ili izvršena uplata.</li>
        <li data-sr="Proveri zvanični kontakt poslodavca, ne adresu iz poruke." data-en="Check the official employer contact, not the address from the message.">Proveri zvanični kontakt poslodavca, ne adresu iz poruke.</li>
        <li data-sr="Prijavi prevaru policiji i platformi gde je kontakt nastao." data-en="Report fraud to police and the platform where contact began.">Prijavi prevaru policiji i platformi gde je kontakt nastao.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
      <p data-sr="Zaposleni veruju IT obaveštenju. Uporedite link karakter po karakter sa adresom u starom HR imejlu." data-en="Employees trust IT notices. Compare the link character by character with addresses in old HR email.">Zaposleni veruju IT obaveštenju. Uporedite link karakter po karakter sa adresom u starom HR imejlu.</p>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
        <li data-sr="Da li si ikada video da pravi poslodavac traži isti korak za HR verifikaciji dosijea." data-en="Have you ever seen a real employer ask for the same step for HR file verification.">Da li si ikada video da pravi poslodavac traži isti korak za HR verifikaciji dosijea.</li>
        <li data-sr="Da li bi tvoja banka odobrila ovaj korak kao deo posla." data-en="Would your bank approve this step as part of a job.">Da li bi tvoja banka odobrila ovaj korak kao deo posla.</li>
        <li data-sr="Možemo li naći istu ponudu na zvaničnom sajtu ili konkursu." data-en="Can we find the same offer on an official site or vacancy.">Možemo li naći istu ponudu na zvaničnom sajtu ili konkursu.</li>
        <li data-sr="Da li postoji neko u tvojoj mreži ko radi u toj oblasti za kratku proveru." data-en="Is there someone in your network in that field for a quick check.">Da li postoji neko u tvojoj mreži ko radi u toj oblasti za kratku proveru.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
        <li data-sr="Pravi poslodavac retko traži tvoj lični trošak pre potpisanog ugovora." data-en="A real employer rarely asks for your personal spend before a signed contract.">Pravi poslodavac retko traži tvoj lični trošak pre potpisanog ugovora.</li>
        <li data-sr="Kod sa darovne kartice ili prenos na treći nalog je visok rizik prevare." data-en="Gift card codes or transfers to a third account are high scam risk.">Kod sa darovne kartice ili prenos na treći nalog je visok rizik prevare.</li>
        <li data-sr="Pauza od 24 sata bez gubitka mesta je razuman test." data-en="A 24-hour pause without losing the spot is a fair test.">Pauza od 24 sata bez gubitka mesta je razuman test.</li>
        <li data-sr="Ako nestanu kad tražiš zvanični HR broj sa sajta, to je odgovor." data-en="If they vanish when you ask for official HR from the website, that is the answer.">Ako nestanu kad tražiš zvanični HR broj sa sajta, to je odgovor.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
