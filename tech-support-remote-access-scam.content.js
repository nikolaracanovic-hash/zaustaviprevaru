window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["tech-support-remote-access-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi prevara lažne tehničke podrške sa daljinskim pristupom" data-en="Introduction: how the tech support remote access scam works">Uvod: kako radi prevara lažne tehničke podrške sa daljinskim pristupom</h2>
      <p data-sr="Lažna podrška tvrdi da računar ima virus. Žrtva instalira aplikaciju za daljinski pristup za 'popravku'." data-en="The attacker poses as tech support from Microsoft, Apple, an antivirus company, or an internet provider and claims a virus, security vulnerability, or active attack has been detected on the victim's computer. The victim is directed to install a remote access application (TeamViewer, AnyDesk, Quick Assist) for 'diagnosis and repair'.">Lažna podrška tvrdi da računar ima virus. Žrtva instalira aplikaciju za daljinski pristup za 'popravku'.</p>
      <p data-sr="Po dobijanju pristupa, napadač prazni bankovne naloge, krade podatke ili instalira malver za kasniji pristup." data-en="Once the victim grants access, the attacker: takes control of the screen, opens the banking app and drains the account; steals passwords, files, and card data; installs malware for later access; fake-displays 'viruses' through Windows Event Viewer or CMD which normally show errors and cause panic.">Po dobijanju pristupa, napadač prazni bankovne naloge, krade podatke ili instalira malver za kasniji pristup.</p>
      <div class="callout" data-sr="<strong>Model:</strong> lažna podrška ili scareware → virus na računaru → daljinski pristup za popravku → krađa podataka ili pražnjenje naloga → gubitak." data-en="<strong>Model:</strong> fake support or scareware → virus on computer → remote access for repair → credential theft or account drain → loss."><strong>Model:</strong> lažna podrška ili scareware → virus na računaru → daljinski pristup za popravku → krađa podataka ili pražnjenje naloga → gubitak.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> Microsoft, Apple ni antivirusna kompanija nikad vas ne zovu spontano zbog virusa na vašem računaru — takav poziv je uvek prevara." data-en="<strong>Threshold:</strong> Microsoft, Apple, and antivirus companies never call you spontaneously about a virus on your computer — such a call is always a scam."><strong>Prag:</strong> Microsoft, Apple ni antivirusna kompanija nikad vas ne zovu spontano zbog virusa na vašem računaru — takav poziv je uvek prevara.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika prevare lažne tehničke podrške sa daljinskim pristupom" data-en="How it works: tech support remote access scam mechanics">Kako generalno radi: mehanika prevare lažne tehničke podrške sa daljinskim pristupom</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Kanali inicijacije prevare" data-en="Scam initiation channels">Kanali inicijacije prevare</div>
          <ul class="bullets">
            <li data-sr="direktan poziv koji tvrdi da je od Microsoft-a, Apple-a ili antivirusne kompanije." data-en="direct call claiming to be from Microsoft, Apple, or an antivirus company.">direktan poziv koji tvrdi da je od Microsoft-a, Apple-a ili antivirusne kompanije.</li>
            <li data-sr="scareware popup u pretraživaču koji blokira ekran i prikazuje lažno upozorenje o virusu s brojem za poziv." data-en="scareware popup in the browser that blocks the screen and displays a fake virus warning with a call number.">scareware popup u pretraživaču koji blokira ekran i prikazuje lažno upozorenje o virusu s brojem za poziv.</li>
            <li data-sr="lažna e-mail poruka s upozorenjem o kompromitovanom nalogu s pozivom na broj podrške." data-en="fake email message with a compromised account warning calling to a support number.">lažna e-mail poruka s upozorenjem o kompromitovanom nalogu s pozivom na broj podrške.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Šta napadač radi sa daljinskim pristupom" data-en="What the attacker does with remote access">Šta napadač radi sa daljinskim pristupom</div>
          <ul class="bullets">
            <li data-sr="otvara bankovnu aplikaciju i iscrpljuje nalog dok žrtva gleda ili je ekran 'zacrnjuje' tokom operacije." data-en="opens the banking app and drains the account while the victim watches or blackens the screen during the operation.">otvara bankovnu aplikaciju i iscrpljuje nalog dok žrtva gleda ili je ekran 'zacrnjuje' tokom operacije.</li>
            <li data-sr="čita i beleži sve lozinke, podatke kartice i bankove podatke vidljive na ekranu ili u pregledaču." data-en="reads and records all passwords, card data, and banking details visible on screen or in the browser.">čita i beleži sve lozinke, podatke kartice i bankove podatke vidljive na ekranu ili u pregledaču.</li>
            <li data-sr="instalira malver za kasniji pristup bez znanja žrtve." data-en="installs malware for later access without the victim's knowledge.">instalira malver za kasniji pristup bez znanja žrtve.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)" data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Uspostavljanje pretnje (virus ili napad)" data-en="Phase 1 — Establishing the threat (virus or attack).">Faza 1 — Uspostavljanje pretnje (virus ili napad)</h3>
        <p data-sr="Pretnja je konkretna i hitna. Profesionalan ton i tehnički termini smanjuju sumnju — posebno kod starijih." data-en="Contact comes via call, scareware popup, or email. The threat is clear: the computer is compromised and must be fixed immediately. The attacker is professional and uses technical terminology.">Pretnja je konkretna i hitna. Profesionalan ton i tehnički termini smanjuju sumnju — posebno kod starijih.</p>
        <ul class="bullets">
          <li data-sr="signal: nijedna legitimna kompanija ne zove spontano zbog virusa na vašem računaru." data-en="signal: no legitimate company calls spontaneously about a virus on your computer.">signal: nijedna legitimna kompanija ne zove spontano zbog virusa na vašem računaru.</li>
          <li data-sr="signal: popup koji 'blokira' pretraživač je scareware — zatvorite je Task Manager-om, ne pozivanjem broja." data-en="signal: a popup that 'blocks' the browser is scareware — close it with Task Manager, not by calling the number.">signal: popup koji 'blokira' pretraživač je scareware — zatvorite je Task Manager-om, ne pozivanjem broja.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> žrtva prihvata pretnju kao realnu i voljno je da instalira aplikaciju za daljinski pristup." data-en="<strong>Threshold:</strong> the victim accepts the threat as real and is willing to install the remote access application."><strong>Prag faze:</strong> žrtva prihvata pretnju kao realnu i voljno je da instalira aplikaciju za daljinski pristup.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Instalacija daljinskog pristupa i eksploatacija" data-en="Phase 2 — Remote access installation and exploitation">Faza 2 — Instalacija daljinskog pristupa i eksploatacija</h3>
        <p data-sr="Po instalaciji aplikacije za daljinski pristup, napadač preuzima kontrolu. Operacija iscrpljenja naloga traže minutima." data-en="The victim installs TeamViewer, AnyDesk, or Quick Assist and gives the attacker the access code. The attacker takes over the screen. The operation takes 5 to 30 minutes — sufficient for draining bank accounts.">Po instalaciji aplikacije za daljinski pristup, napadač preuzima kontrolu. Operacija iscrpljenja naloga traže minutima.</p>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="scareware.html" data-sr="Lažna virusna upozorenja" data-en="Scareware">Lažna virusna upozorenja</a></li>
            <li><a href="tech-support-scam.html" data-sr="Prevara lažne tehničke podrške" data-en="Tech support scam">Prevara lažne tehničke podrške</a></li>
            <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
            <li><a href="bank-impersonation.html" data-sr="Lažna banka (bankovni prevarant)" data-en="Bank impersonation scam">Lažna banka (bankovni prevarant)</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> po davanju koda za pristup, isključite računar odmah — to je jedini način da prekinete napad." data-en="<strong>Threshold:</strong> upon giving the access code, turn off the computer immediately — that is the only way to stop the attack."><strong>Prag faze:</strong> po davanju koda za pristup, isključite računar odmah — to je jedini način da prekinete napad.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="spontani poziv koji tvrdi da je od Microsoft-a, Apple-a ili antivirusne kompanije zbog virusa." data-en="spontaneous call claiming to be from Microsoft, Apple, or an antivirus company about a virus.">spontani poziv koji tvrdi da je od Microsoft-a, Apple-a ili antivirusne kompanije zbog virusa.</li>
        <li data-sr="popup u pretraživaču koji blokira ekran i prikazuje broj telefona za 'hitnu podršku'." data-en="browser popup that blocks the screen and displays a phone number for emergency support'.">popup u pretraživaču koji blokira ekran i prikazuje broj telefona za 'hitnu podršku'.</li>
        <li data-sr="zahtev za instalacijom aplikacije za daljinski pristup — TeamViewer, AnyDesk, Quick Assist." data-en="request to install a remote access application — TeamViewer, AnyDesk, Quick Assist.">zahtev za instalacijom aplikacije za daljinski pristup — TeamViewer, AnyDesk, Quick Assist.</li>
        <li data-sr="pokazivanje Windows Event Viewer-a ili CMD-a kao 'dokaza virusa' — to su normalni sistemski zapisi." data-en="showing Windows Event Viewer or CMD as proof of virus' — those are normal system logs.">pokazivanje Windows Event Viewer-a ili CMD-a kao 'dokaza virusa' — to su normalni sistemski zapisi.</li>
        <li data-sr="zahtev za plaćanjem 'podrške' poklon karticama, kriptom ili western union-om." data-en="payment request for support by gift cards, crypto, or western union.">zahtev za plaćanjem 'podrške' poklon karticama, kriptom ili western union-om.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 10 pitanja pre instalacije aplikacije za daljinski pristup" data-en="Checklist: 10 questions before installing a remote access application">Checklista: 10 pitanja pre instalacije aplikacije za daljinski pristup</h2>
      <ul class="bullets">
        <li data-sr="Da li Microsoft, Apple ili antivirusna kompanija ikad zovu spontano zbog virusa na računaru?" data-en="Do Microsoft, Apple, or antivirus companies ever call spontaneously about a virus on your computer?">Da li Microsoft, Apple ili antivirusna kompanija ikad zovu spontano zbog virusa na računaru?</li>
        <li data-sr="Da li je popup u pretraživaču koji prikazuje upozorenje o virusu legitiman — ili je scareware?" data-en="Is a browser popup displaying a virus warning legitimate — or is it scareware?">Da li je popup u pretraživaču koji prikazuje upozorenje o virusu legitiman — ili je scareware?</li>
        <li data-sr="Da li sam rekao/la bliskoj osobi o ovom pozivu pre instalacije ikakvog softvera?" data-en="Did I tell a close person about this call before installing any software?">Da li sam rekao/la bliskoj osobi o ovom pozivu pre instalacije ikakvog softvera?</li>
        <li data-sr="Da li 'tehnički radnik' želi pristup mojim bankovnim aplikacijama ili lozinkama — što nije deo 'popravke računara'?" data-en="Does the tech worker want access to my banking apps or passwords — which is not part of 'computer repair'?">Da li 'tehnički radnik' želi pristup mojim bankovnim aplikacijama ili lozinkama — što nije deo 'popravke računara'?</li>
        <li data-sr="Da li se Event Viewer ili CMD greške koje se prikazuju zaista razlikuju od normalnih sistemskih zapisa?" data-en="Do the Event Viewer or CMD errors being shown actually differ from normal system logs?">Da li se Event Viewer ili CMD greške koje se prikazuju zaista razlikuju od normalnih sistemskih zapisa?</li>
        <li data-sr="Da li postoji urgentnost koja onemogućava proveru s IKT stručnjakom kojeg poznam?" data-en="Is there urgency that prevents checking with an IT professional I know?">Da li postoji urgentnost koja onemogućava proveru s IKT stručnjakom kojeg poznam?</li>
        <li data-sr="Da li se 'podrška' plaća poklon karticama ili kriptom — što nema smisla za tehničku kompaniju?" data-en="Is support' paid by gift cards or crypto — which makes no sense for a tech company?">Da li se 'podrška' plaća poklon karticama ili kriptom — što nema smisla za tehničku kompaniju?</li>
        <li data-sr="Da li sam isključio/la računar odmah po sumnji umesto nastavljanja razgovora?" data-en="Did I turn off the computer immediately upon suspicion instead of continuing the conversation?">Da li sam isključio/la računar odmah po sumnji umesto nastavljanja razgovora?</li>
        <li data-sr="Da li sam promenio/la sve lozinke i kontaktirao/la banku odmah po incidentu?" data-en="Did I change all passwords and contact the bank immediately after the incident?">Da li sam promenio/la sve lozinke i kontaktirao/la banku odmah po incidentu?</li>
        <li data-sr="Da li je moj računar pregledao nezavisni IT stručnjak po incidentu radi nalaza malvera?" data-en="Was my computer reviewed by an independent IT specialist after the incident to find malware?">Da li je moj računar pregledao nezavisni IT stručnjak po incidentu radi nalaza malvera?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="isključite računar odmah — to prekida svaki aktivan daljinski pristup." data-en="turn off the computer immediately — that breaks any active remote access.">isključite računar odmah — to prekida svaki aktivan daljinski pristup.</li>
        <li data-sr="kontaktirajte banku i zamrznite nalog ako ste dozvolili pristup." data-en="contact the bank and freeze the account if you allowed access.">kontaktirajte banku i zamrznite nalog ako ste dozvolili pristup.</li>
        <li data-sr="promenite sve lozinke s drugog uređaja pre ponovnog uključivanja računara." data-en="change all passwords from another device before turning the computer back on.">promenite sve lozinke s drugog uređaja pre ponovnog uključivanja računara.</li>
        <li data-sr="dajte računar IT stručnjaku na pregled radi uklanjanja eventualno instaliranog malvera." data-en="give the computer to an IT specialist for inspection to remove any installed malware.">dajte računar IT stručnjaku na pregled radi uklanjanja eventualno instaliranog malvera.</li>
        <li data-sr="prijavite incident policiji s brojem pozivatelja, imenom kompanije i opisom šta je traženo." data-en="report the incident to police with the caller's number, company name, and description of what was requested.">prijavite incident policiji s brojem pozivatelja, imenom kompanije i opisom šta je traženo.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li si instalirao/la TeamViewer, AnyDesk ili Quick Assist na zahtev nekog ko te zvao?" data-en="Did you install TeamViewer, AnyDesk, or Quick Assist at the request of someone who called you?">Da li si instalirao/la TeamViewer, AnyDesk ili Quick Assist na zahtev nekog ko te zvao?</li>
            <li data-sr="Da li je ta osoba imala pristup tvojem ekranu i šta je radila dok je imala pristup?" data-en="Did that person have access to your screen and what did they do while they had access?">Da li je ta osoba imala pristup tvojem ekranu i šta je radila dok je imala pristup?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Isključi računar odmah — dok je isključen ne mogu pristupiti ničemu. Uradimo to zajedno sada." data-en="Turn off the computer immediately — while it is off they cannot access anything. Let's do that together now.">Isključi računar odmah — dok je isključen ne mogu pristupiti ničemu. Uradimo to zajedno sada.</li>
            <li data-sr="Microsoft i Apple nikad ne zovu spontano — svaki takav poziv je prevara, bez izuzetka." data-en="Microsoft and Apple never call spontaneously — every such call is a scam, without exception.">Microsoft i Apple nikad ne zovu spontano — svaki takav poziv je prevara, bez izuzetka.</li>
          </ul>
        </div>
      </div>
    </section>

    
  `
};
