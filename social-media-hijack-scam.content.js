window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["social-media-hijack-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi preuzimanje naloga na društvenim mrežama" data-en="Introduction: how social media hijack scams work">Uvod: kako radi preuzimanje naloga na društvenim mrežama</h2>
      <p data-sr="Napadač stiče pristup nalogu na društvenoj mreži — kroz fišing, krađu lozinke, SIM swap ili kompromitovanu aplikaciju. Preuzeti nalog se koristi za slanje prevara svim pratiocima: lažni giveaways, investicione ponude, zahtevi za novac od prijatelja u nevolji. Pratioci veruju porukama jer dolaze od poznatog lica." data-en="The attacker gains access to a social media account — through phishing, password theft, SIM swap or a compromised app. The hijacked account is used to send scams to all followers: fake giveaways, investment offers, money requests from a &ldquo;friend in trouble&rdquo;. Followers trust the messages because they come from a known person.">Napadač stiče pristup nalogu na društvenoj mreži — kroz fišing, krađu lozinke, SIM swap ili kompromitovanu aplikaciju. Preuzeti nalog se koristi za slanje prevara svim pratiocima: lažni giveaways, investicione ponude, zahtevi za novac od prijatelja u nevolji. Pratioci veruju porukama jer dolaze od poznatog lica.</p>
      <p data-sr="Nalog može biti preusmeren odmah za finansijsku prevaru ili zadržan duže za špijunažu i prikupljanje podataka. Kod influensera i javnih ličnosti, nalog se koristi za promovisanje lažnih kripto projekata ili ekskluzivnih investicija." data-en="The account may be redirected immediately for financial fraud or held longer for espionage and data collection. For influencers and public figures, the account is used to promote fake crypto projects or &ldquo;exclusive&rdquo; investments.">Nalog može biti preusmeren odmah za finansijsku prevaru ili zadržan duže za špijunažu i prikupljanje podataka. Kod influensera i javnih ličnosti, nalog se koristi za promovisanje lažnih kripto projekata ili ekskluzivnih investicija.</p>
      <div class="callout" data-sr="<strong>Model:</strong> fišing/kompromitovana lozinka → pristup nalogu → lažne poruke pratiocima → finansijska krađa ili dalja kompromitacija." data-en="<strong>Model:</strong> phishing/compromised password → account access → fake messages to followers → financial theft or further compromise."><strong>Model:</strong> fišing/kompromitovana lozinka → pristup nalogu → lažne poruke pratiocima → finansijska krađa ili dalja kompromitacija.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> napadač stekne kontrolu nad nalogom. Od tog trenutka sve poruke dolaze od legitimnog identiteta." data-en="<strong>Threshold:</strong> attacker gains control of the account. From that point all messages come from a legitimate identity."><strong>Prag:</strong> napadač stekne kontrolu nad nalogom. Od tog trenutka sve poruke dolaze od legitimnog identiteta.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika" data-en="How it works: mechanics">Kako generalno radi: mehanika</h2>
      <div class="grid-2">
        <div>
          <h3 data-sr="Kako se dobija pristup" data-en="How access is obtained">Kako se dobija pristup</h3>
          <ul class="bullets">
            <li data-sr="Fišing link koji izgleda kao obaveštenje od platforme — prijavite se da biste potvrdili nalog." data-en="Phishing link that looks like a platform notification — &ldquo;log in to verify your account&rdquo;.">Fišing link koji izgleda kao obaveštenje od platforme — prijavite se da biste potvrdili nalog.</li>
            <li data-sr="Lozinka preuzeta iz curenja podataka sa druge platforme gde je ista lozinka korišćena." data-en="Password taken from a data breach on another platform where the same password was used.">Lozinka preuzeta iz curenja podataka sa druge platforme gde je ista lozinka korišćena.</li>
            <li data-sr="SIM swap koji daje pristup SMS verifikaciji i resetovanju lozinke." data-en="SIM swap that gives access to SMS verification and password reset.">SIM swap koji daje pristup SMS verifikaciji i resetovanju lozinke.</li>
            <li data-sr="Kompromitovana aplikacija treće strane kojoj je odobren pristup nalogu." data-en="Compromised third-party app that was granted account access.">Kompromitovana aplikacija treće strane kojoj je odobren pristup nalogu.</li>
          </ul>
        </div>
        <div>
          <h3 data-sr="Kako se koristi preuzeti nalog" data-en="How the hijacked account is used">Kako se koristi preuzeti nalog</h3>
          <ul class="bullets">
            <li data-sr="Masovne DM poruke pratiocima sa lažnim giveawayima ili investicionim ponudama." data-en="Mass DM messages to followers with fake giveaways or investment offers.">Masovne DM poruke pratiocima sa lažnim giveawayima ili investicionim ponudama.</li>
            <li data-sr="Objave koje promovisuju lažne kripto projekte ili ekskluzivne platforme." data-en="Posts promoting fake crypto projects or &ldquo;exclusive&rdquo; platforms.">Objave koje promovisuju lažne kripto projekte ili ekskluzivne platforme.</li>
            <li data-sr="Poruke bliskim kontaktima sa zahtevom za hitnu finansijsku pomoć." data-en="Messages to close contacts requesting urgent financial help.">Poruke bliskim kontaktima sa zahtevom za hitnu finansijsku pomoć.</li>
            <li data-sr="Nalog se prodaje ili koristi za kasniji pristup privatnim porukama i podacima." data-en="Account is sold or used for later access to private messages and data.">Nalog se prodaje ili koristi za kasniji pristup privatnim porukama i podacima.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok" data-en="Chronological flow">Hronološki tok</h2>

      <div class="phase">
        <div class="label" data-sr="Faza 1: Dobijanje pristupa" data-en="Phase 1: Gaining access">Faza 1: Dobijanje pristupa</div>
        <p data-sr="Napadač dobija lozinku ili sesijski token kroz fišing, credential stuffing ili SIM swap." data-en="Attacker obtains password or session token through phishing, credential stuffing or SIM swap.">Napadač dobija lozinku ili sesijski token kroz fišing, credential stuffing ili SIM swap.</p>
        <ul class="bullets">
          <li data-sr="Vlasnik naloga ne dobija odmah nikakvo obaveštenje — napadač ne menja lozinku odmah." data-en="Account owner does not immediately receive any notification — attacker does not change password right away.">Vlasnik naloga ne dobija odmah nikakvo obaveštenje — napadač ne menja lozinku odmah.</li>
          <li data-sr="Napadač proverava sadržaj naloga i kontakte pre akcije." data-en="Attacker reviews account content and contacts before acting.">Napadač proverava sadržaj naloga i kontakte pre akcije.</li>
          <li data-sr="Kod vrednih naloga (influenseri, firme) napadač čeka pravi trenutak." data-en="For valuable accounts (influencers, businesses) attacker waits for the right moment.">Kod vrednih naloga (influenseri, firme) napadač čeka pravi trenutak.</li>
        </ul>
        <p class="phase-threshold" data-sr="Prag faze: napadač ima aktivnu sesiju ili lozinku." data-en="Phase threshold: attacker has an active session or password.">Prag faze: napadač ima aktivnu sesiju ili lozinku.</p>
      </div>

      <div class="phase">
        <div class="label" data-sr="Faza 2: Preuzimanje kontrole" data-en="Phase 2: Taking control">Faza 2: Preuzimanje kontrole</div>
        <p data-sr="Napadač menja email, lozinku ili telefon vezan za nalog. Vlasnik gubi pristup." data-en="Attacker changes email, password or phone linked to the account. Owner loses access.">Napadač menja email, lozinku ili telefon vezan za nalog. Vlasnik gubi pristup.</p>
        <ul class="bullets">
          <li data-sr="Vlasnik dobija obaveštenje o promeni — ali je već kasno jer je napadač promenio recovery opcije." data-en="Owner receives change notification — but it is already too late as attacker has changed recovery options.">Vlasnik dobija obaveštenje o promeni — ali je već kasno jer je napadač promenio recovery opcije.</li>
          <li data-sr="Napadač može i ne menjati lozinku i koristiti nalog paralelno neko vreme." data-en="Attacker may not change the password and use the account in parallel for some time.">Napadač može i ne menjati lozinku i koristiti nalog paralelno neko vreme.</li>
          <li data-sr="Dvofaktorska autentifikacija se zaobilazi ako je napadač već preuzeo SIM ili email." data-en="Two-factor authentication is bypassed if attacker has already taken over the SIM or email.">Dvofaktorska autentifikacija se zaobilazi ako je napadač već preuzeo SIM ili email.</li>
        </ul>
        <p class="phase-threshold" data-sr="Prag faze: vlasnik ne može da se prijavi, napadač ima punu kontrolu." data-en="Phase threshold: owner cannot log in, attacker has full control.">Prag faze: vlasnik ne može da se prijavi, napadač ima punu kontrolu.</p>
      </div>

      <div class="phase">
        <div class="label" data-sr="Faza 3: Eksploatacija pratilaca" data-en="Phase 3: Follower exploitation">Faza 3: Eksploatacija pratilaca</div>
        <p data-sr="Napadač šalje poruke pratiocima koristeći identitet vlasnika naloga. Pratioci veruju porukama." data-en="Attacker sends messages to followers using the account owner's identity. Followers trust the messages.">Napadač šalje poruke pratiocima koristeći identitet vlasnika naloga. Pratioci veruju porukama.</p>
        <ul class="bullets">
          <li data-sr="Hej, imam ekskluzivnu investicionu priiku — samo za prijatelje, danas poslednji dan." data-en="&ldquo;Hey, I have an exclusive investment opportunity — only for friends, last day today.&rdquo;">Hej, imam ekskluzivnu investicionu priiku — samo za prijatelje, danas poslednji dan.</li>
          <li data-sr="U nevolji sam, možeš li mi hitno poslati 200 evra — vratiću ti sutra." data-en="&ldquo;I am in trouble, can you urgently send me 200 euros — I will return it tomorrow.&rdquo;">U nevolji sam, možeš li mi hitno poslati 200 evra — vratiću ti sutra.</li>
          <li data-sr="Objava o giveawayu — prati nalog i pošalji 0.1 BTC da dobiješ 0.5 BTC nazad." data-en="Giveaway post — follow the account and send 0.1 BTC to receive 0.5 BTC back.">Objava o giveawayu — prati nalog i pošalji 0.1 BTC da dobiješ 0.5 BTC nazad.</li>
        </ul>
        <div class="branches">
          <strong data-sr="Grananja u ovoj fazi:" data-en="Branching in this phase:">Grananja u ovoj fazi:</strong>
          <ul>
            <li data-sr="Pratilac pošalje novac → direktan finansijski gubitak." data-en="Follower sends money → direct financial loss.">Pratilac pošalje novac → direktan finansijski gubitak.</li>
            <li data-sr="Pratilac klikne link → kompromituje i sopstveni nalog." data-en="Follower clicks link → compromises their own account too.">Pratilac klikne link → kompromituje i sopstveni nalog.</li>
          </ul>
        </div>
        <p class="phase-threshold" data-sr="Prag faze: pratioci počinju da reaguju i šalju novac ili podatke." data-en="Phase threshold: followers start reacting and sending money or data.">Prag faze: pratioci počinju da reaguju i šalju novac ili podatke.</p>
      </div>

      <div class="phase">
        <div class="label" data-sr="Faza 4: Otkrivanje" data-en="Phase 4: Discovery">Faza 4: Otkrivanje</div>
        <p data-sr="Vlasnik ili pratilac shvata da je nalog kompromitovan. Vlasnik pokušava oporavak naloga dok napadač i dalje eksploatiše." data-en="Owner or follower realises the account is compromised. Owner attempts account recovery while attacker continues exploiting.">Vlasnik ili pratilac shvata da je nalog kompromitovan. Vlasnik pokušava oporavak naloga dok napadač i dalje eksploatiše.</p>
        <ul class="bullets">
          <li data-sr="Pratioci javljaju vlasniku da su dobili čudne poruke od njega." data-en="Followers notify the owner that they received strange messages from them.">Pratioci javljaju vlasniku da su dobili čudne poruke od njega.</li>
          <li data-sr="Vlasnik vidi objave koje nije postavio ili poruke koje nije slao." data-en="Owner sees posts they did not make or messages they did not send.">Vlasnik vidi objave koje nije postavio ili poruke koje nije slao.</li>
          <li data-sr="Platforma može automatski detektovati sumnjive aktivnosti i zamrznuti nalog." data-en="Platform may automatically detect suspicious activity and freeze the account.">Platforma može automatski detektovati sumnjive aktivnosti i zamrznuti nalog.</li>
        </ul>
        <p class="phase-threshold" data-sr="Prag faze: vlasnik kontaktira podršku platforme radi oporavka." data-en="Phase threshold: owner contacts platform support for recovery.">Prag faze: vlasnik kontaktira podršku platforme radi oporavka.</p>
      </div>

      <div class="phase">
        <div class="label" data-sr="Faza 5: Posledice" data-en="Phase 5: Consequences">Faza 5: Posledice</div>
        <p data-sr="Nalog je oporavljen ili trajno izgubljen. Pratioci koji su reagovali pretrpeli su finansijsku štetu ili kompromituju sopstvene naloge." data-en="Account is recovered or permanently lost. Followers who reacted suffered financial loss or compromised their own accounts.">Nalog je oporavljen ili trajno izgubljen. Pratioci koji su reagovali pretrpeli su finansijsku štetu ili kompromituju sopstvene naloge.</p>
        <ul class="bullets">
          <li data-sr="Reputacijska šteta za vlasnika naloga čak i nakon oporavka." data-en="Reputational damage for account owner even after recovery.">Reputacijska šteta za vlasnika naloga čak i nakon oporavka.</li>
          <li data-sr="Finansijski gubici pratilaca koji su poslali novac ili kripto." data-en="Financial losses for followers who sent money or crypto.">Finansijski gubici pratilaca koji su poslali novac ili kripto.</li>
          <li data-sr="Privatne poruke i podaci koji su bili u nalogu sada su kod napadača." data-en="Private messages and data that were in the account are now with the attacker.">Privatne poruke i podaci koji su bili u nalogu sada su kod napadača.</li>
        </ul>
        <p class="phase-threshold" data-sr="Prag faze: nalog je oporavljen i vlasnik obaveštava pratioce o incidentu." data-en="Phase threshold: account is recovered and owner notifies followers about the incident.">Prag faze: nalog je oporavljen i vlasnik obaveštava pratioce o incidentu.</p>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="Poznat kontakt šalje poruku koja se razlikuje od uobičajenog stila komunikacije." data-en="Known contact sends a message that differs from their usual communication style.">Poznat kontakt šalje poruku koja se razlikuje od uobičajenog stila komunikacije.</li>
        <li data-sr="Investiciona ponuda ili zahtev za novac od nekoga ko to inače ne radi." data-en="Investment offer or money request from someone who does not normally do this.">Investiciona ponuda ili zahtev za novac od nekoga ko to inače ne radi.</li>
        <li data-sr="Giveaway koji traži slanje novca ili kripta da bi se dobilo više — uvek prevara." data-en="Giveaway asking to send money or crypto to receive more — always a scam.">Giveaway koji traži slanje novca ili kripta da bi se dobilo više — uvek prevara.</li>
        <li data-sr="Link u poruci od poznatog kontakta koji vodi na nepoznat sajt." data-en="Link in a message from a known contact leading to an unknown site.">Link u poruci od poznatog kontakta koji vodi na nepoznat sajt.</li>
        <li data-sr="Objave na profilu koje su stilski ili sadržajno drugačije od uobičajenih." data-en="Posts on the profile that are stylistically or content-wise different from usual.">Objave na profilu koje su stilski ili sadržajno drugačije od uobičajenih.</li>
        <li data-sr="Hitnost u poruci — samo danas, ne govori nikome, odmah mi treba." data-en="Urgency in the message — &ldquo;today only&rdquo;, &ldquo;don't tell anyone&rdquo;, &ldquo;I need it now&rdquo;.">Hitnost u poruci — samo danas, ne govori nikome, odmah mi treba.</li>
        <li data-sr="Kontakt ne reaguje na poruke van platforme ili odgovara nekarakteristično." data-en="Contact does not respond to messages outside the platform or responds uncharacteristically.">Kontakt ne reaguje na poruke van platforme ili odgovara nekarakteristično.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere" data-en="Verification checks">Provere</h2>
      <ul class="bullets">
        <li data-sr="Kontaktirajte osobu van platforme (telefon, drugi messenger) pre nego što reagujete." data-en="Contact the person outside the platform (phone, other messenger) before reacting.">Kontaktirajte osobu van platforme (telefon, drugi messenger) pre nego što reagujete.</li>
        <li data-sr="Nikad ne šaljite novac ili kripto na zahtev koji je stigao samo kroz društvenu mrežu." data-en="Never send money or crypto based on a request that came only through social media.">Nikad ne šaljite novac ili kripto na zahtev koji je stigao samo kroz društvenu mrežu.</li>
        <li data-sr="Proverite kada je nalog posljednji put bio aktivan i da li se stil objava promenio." data-en="Check when the account was last active and whether the posting style has changed.">Proverite kada je nalog posljednji put bio aktivan i da li se stil objava promenio.</li>
        <li data-sr="Giveaway koji traži uplatu nikad nije legitiman — nijedna platforma to ne radi." data-en="Any giveaway requiring payment is never legitimate — no platform does this.">Giveaway koji traži uplatu nikad nije legitiman — nijedna platforma to ne radi.</li>
        <li data-sr="Ako mislite da je vaš nalog kompromitovan — odmah promenite lozinku i aktivirajte 2FA." data-en="If you think your account is compromised — immediately change password and activate 2FA.">Ako mislite da je vaš nalog kompromitovan — odmah promenite lozinku i aktivirajte 2FA.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Checklista" data-en="Checklist">Checklista</h2>
      <ol class="bullets">
        <li data-sr="Da li je poruka stilski konzistentna sa uobičajenom komunikacijom te osobe?" data-en="Is the message stylistically consistent with that person's usual communication?">Da li je poruka stilski konzistentna sa uobičajenom komunikacijom te osobe?</li>
        <li data-sr="Da li sam kontaktirao osobu van platforme da potvrdim zahtev?" data-en="Have I contacted the person outside the platform to confirm the request?">Da li sam kontaktirao osobu van platforme da potvrdim zahtev?</li>
        <li data-sr="Da li ponuda ili zahtev ima elemente hitnosti ili tajnosti?" data-en="Does the offer or request contain elements of urgency or secrecy?">Da li ponuda ili zahtev ima elemente hitnosti ili tajnosti?</li>
        <li data-sr="Da li giveaway traži da pošaljem nešto da bih dobio više — to je uvek prevara?" data-en="Does the giveaway ask me to send something to receive more — is that always a scam?">Da li giveaway traži da pošaljem nešto da bih dobio više — to je uvek prevara?</li>
        <li data-sr="Da li koristim istu lozinku za ovu i druge platforme?" data-en="Am I using the same password for this and other platforms?">Da li koristim istu lozinku za ovu i druge platforme?</li>
        <li data-sr="Da li imam aktiviranu dvofaktorsku autentifikaciju na ovom nalogu?" data-en="Do I have two-factor authentication activated on this account?">Da li imam aktiviranu dvofaktorsku autentifikaciju na ovom nalogu?</li>
        <li data-sr="Da li sam odobrio pristup nekim aplikacijama trećih strana koje više ne koristim?" data-en="Have I granted access to third-party apps I no longer use?">Da li sam odobrio pristup nekim aplikacijama trećih strana koje više ne koristim?</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion arises: steps to take">Ako sumnja krene: redosled poteza</h2>
      <ol class="bullets">
        <li data-sr="Odmah promeniti lozinku na kompromitovanom nalogu." data-en="Immediately change the password on the compromised account.">Odmah promeniti lozinku na kompromitovanom nalogu.</li>
        <li data-sr="Aktivirati ili proveriti dvofaktorsku autentifikaciju." data-en="Activate or check two-factor authentication.">Aktivirati ili proveriti dvofaktorsku autentifikaciju.</li>
        <li data-sr="Proveriti sve aktivne sesije i odjaviti nepoznate uređaje." data-en="Check all active sessions and log out unknown devices.">Proveriti sve aktivne sesije i odjaviti nepoznate uređaje.</li>
        <li data-sr="Objaviti na profilu da je nalog bio kompromitovan i upozoriti pratioce." data-en="Post on the profile that the account was compromised and warn followers.">Objaviti na profilu da je nalog bio kompromitovan i upozoriti pratioce.</li>
        <li data-sr="Kontaktirati pratioce koji su možda već reagovali na lažne poruke." data-en="Contact followers who may have already reacted to fake messages.">Kontaktirati pratioce koji su možda već reagovali na lažne poruke.</li>
        <li data-sr="Prijaviti incident platformi i tražiti reviziju aktivnosti naloga." data-en="Report incident to the platform and request an activity audit.">Prijaviti incident platformi i tražiti reviziju aktivnosti naloga.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
      <ul class="bullets">
        <li data-sr="Da li si kontaktirao tu osobu van platforme da proveriš da li je zaista ona poslala poruku?" data-en="'Did you contact that person outside the platform to check whether they actually sent the message?">Da li si kontaktirao tu osobu van platforme da proveriš da li je zaista ona poslala poruku?</li>
        <li data-sr="Nijedna legitimna osoba ne traži hitno slanje novca ili kripta kroz DM na društvenim mrežama." data-en="'No legitimate person requests urgent money or crypto via DM on social media.">Nijedna legitimna osoba ne traži hitno slanje novca ili kripta kroz DM na društvenim mrežama.</li>
        <li data-sr="Ako ti je nalog hakovan — odmah promeni lozinku, uključi 2FA i obavesti pratioce." data-en="'If your account was hacked — immediately change password, enable 2FA and notify followers.">Ako ti je nalog hakovan — odmah promeni lozinku, uključi 2FA i obavesti pratioce.</li>
        <li data-sr="Proveri u podešavanjima koje aplikacije imaju pristup tvom nalogu i ukloni one koje ne poznaješ." data-en="'Check in settings which apps have access to your account and remove any you do not recognise.">Proveri u podešavanjima koje aplikacije imaju pristup tvom nalogu i ukloni one koje ne poznaješ.</li>
      </ul>
    </section>

    
  `
};
