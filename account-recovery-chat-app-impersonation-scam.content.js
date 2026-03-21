if (!window.SCAM_CONTENT) window.SCAM_CONTENT = {};
window.SCAM_CONTENT["account-recovery-chat-app-impersonation-scam"] = {
  raw_html: `
<section class="content-section">
  <h2 data-sr="Uvod: lažni oporavak preko Vibera, WhatsAppa ili Telegrama" data-en="Introduction: fake recovery via Viber, WhatsApp, or Telegram">Uvod: lažni oporavak preko Vibera, WhatsAppa ili Telegrama</h2>
  <p data-sr="Kontakt dolazi od broja koji liči na prijatelja ili od novog broja uz objašnjenje telefon mi se pokvario; osoba kaže da je zaključan nalog, da joj treba mali favor ili da je poslala kod greškom na vaš broj." data-en="The contact comes from a number that looks like a friend’s or from a new number with a my phone broke story; the person says their account is locked, they need a small favor, or they sent a code to your number by mistake.">Kontakt dolazi od broja koji liči na prijatelja ili od novog broja uz objašnjenje telefon mi se pokvario; osoba kaže da je zaključan nalog, da joj treba mali favor ili da je poslala kod greškom na vaš broj.</p>
  <p data-sr="Zapravo neko glumi tu osobu ili šalje poruku sa već ukradenog naloga; sledeći korak je da vi prosledite SMS, snimak ekrana ili kod za oporavak, čime im dajete ključ od svog naloga ili od banke." data-en="Someone is impersonating that person or messaging from an already stolen account; the next step is for you to forward an SMS, a screenshot, or a recovery code, handing them the key to your account or bank.">Zapravo neko glumi tu osobu ili šalje poruku sa već ukradenog naloga; sledeći korak je da vi prosledite SMS, snimak ekrana ili kod za oporavak, čime im dajete ključ od svog naloga ili od banke.</p>
  <div class="callout">
    <strong data-sr="Prag:" data-en="Threshold:">Prag:</strong>
    <span data-sr="Slanje jednokratnog koda, koda za reset lozinke, prosleđivanje SMS-a od banke ili slike ekrana sa aktivnom sesijom." data-en="Sending a one-time code, a password-reset code, forwarding a bank SMS, or a screenshot of an active session.">Slanje jednokratnog koda, koda za reset lozinke, prosleđivanje SMS-a od banke ili slike ekrana sa aktivnom sesijom.</span>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Model" data-en="Model">Model</h2>
  <div class="phase">
    <div class="label" data-sr="Lanac" data-en="Chain">Lanac</div>
    <p data-sr="Poruka u četu → priča o blokadi naloga ili hitnom zadatku → zahtev za kod, snimak ili prosleđivanje SMS-a → preuzimanje naloga ili potvrda plaćanja → zloupotreba kontakata." data-en="Chat message → story about a locked account or urgent task → request for a code, screenshot, or SMS forward → account takeover or payment confirmation → abuse of contacts.">Poruka u četu → priča o blokadi naloga ili hitnom zadatku → zahtev za kod, snimak ili prosleđivanje SMS-a → preuzimanje naloga ili potvrda plaćanja → zloupotreba kontakata.</p>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Kako generalno radi: mehanika" data-en="How it works: mechanics">Kako generalno radi: mehanika</h2>
  <div class="grid-2">
    <div class="phase">
      <div class="label" data-sr="Zašto čet funkcioniše" data-en="Why chat works">Zašto čet funkcioniše</div>
      <ul class="bullets">
        <li data-sr="Broj ili profil izgleda poznato, a poruka je kratka i lična." data-en="The number or profile looks familiar and the message is short and personal.">Broj ili profil izgleda poznato, a poruka je kratka i lična.</li>
        <li data-sr="Ljudi su navikli da pomognu prijatelju za deset sekundi bez drugog kanala provere." data-en="People are used to helping a friend in ten seconds without a second verification channel.">Ljudi su navikli da pomognu prijatelju za deset sekundi bez drugog kanala provere.</li>
        <li data-sr="Kodovi iz SMS-a deluju kao slučajna brojčana poruka koju samo treba proslediti." data-en="SMS codes look like random numeric messages you just forward.">Kodovi iz SMS-a deluju kao slučajna brojčana poruka koju samo treba proslediti.</li>
        <li data-sr="Hitnost i stid od odbijanja prijatelju skraćuju pauzu za razmišljanje." data-en="Urgency and shame about refusing a friend shorten the pause for thinking.">Hitnost i stid od odbijanja prijatelju skraćuju pauzu za razmišljanje.</li>
      </ul>
    </div>
    <div class="phase">
      <div class="label" data-sr="Šta se dešava posle koda" data-en="What happens after the code">Šta se dešava posle koda</div>
      <ul class="bullets">
        <li data-sr="Napadač završava prijavu na vaš nalog ili potvrđuje transakciju umesto vas." data-en="The attacker finishes signing in to your account or confirms a transaction instead of you.">Napadač završava prijavu na vaš nalog ili potvrđuje transakciju umesto vas.</li>
        <li data-sr="Menjaju se lozinka, broj za oporavak i podešavanja bezbednosti dok vi još uveravate drugu stranu." data-en="Password, recovery number, and security settings change while you are still reassuring the other side.">Menjaju se lozinka, broj za oporavak i podešavanja bezbednosti dok vi još uveravate drugu stranu.</li>
        <li data-sr="Sa ukradenog naloga šalju istu šemu vašim kontaktima." data-en="From the stolen account they send the same scheme to your contacts.">Sa ukradenog naloga šalju istu šemu vašim kontaktima.</li>
        <li data-sr="Ako je u pitanju banka, sledi serija brzih odobrenja ili prenosa." data-en="If a bank is involved, a series of quick approvals or transfers follows.">Ako je u pitanju banka, sledi serija brzih odobrenja ili prenosa.</li>
      </ul>
    </div>
  </div>
</section>

<section class="content-section">
  <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching)">Hronološki tok (faze + grananja)</h2>

  <article class="phase">
    <h3 data-sr="Faza 1 — Poruka od poznatog broja ili naloga" data-en="Phase 1 — Message from a familiar number or account">Faza 1 — Poruka od poznatog broja ili naloga</h3>
    <p data-sr="Otvara se razgovor sa pozdravom koji liči na stil osobe koju poznajete ili sa kratkim objašnjenjem zašto je novi broj; može stići i sa društvenog naloga koji je već kompromitovan." data-en="A chat opens with a greeting that mimics someone you know or a short explanation for a new number; it may also come from a social account that is already compromised.">Otvara se razgovor sa pozdravom koji liči na stil osobe koju poznajete ili sa kratkim objašnjenjem zašto je novi broj; može stići i sa društvenog naloga koji je već kompromitovan.</p>
    <ul class="bullets">
      <li data-sr="Tekst sadrži male jezičke greške koje ta osoba inače ne pravi ili drugačiji žargon." data-en="The text has small language slips that person usually avoids or different slang.">Tekst sadrži male jezičke greške koje ta osoba inače ne pravi ili drugačiji žargon.</li>
      <li data-sr="Razlog za novi broj zvuči hitno: krađa telefona, pad telefona, hitan put." data-en="The reason for a new number sounds urgent: stolen phone, broken phone, urgent trip.">Razlog za novi broj zvuči hitno: krađa telefona, pad telefona, hitan put.</li>
      <li data-sr="Osoba izbegava glasovni poziv ili video sa izgovorom o slabom signalu." data-en="The person avoids a voice or video call citing poor signal.">Osoba izbegava glasovni poziv ili video sa izgovorom o slabom signalu.</li>
      <li data-sr="Traži se diskrecija: nemoj da pričaš roditeljima dok ne rešim." data-en="Discretion is requested: don’t tell parents until I fix this.">Traži se diskrecija: nemoj da pričaš roditeljima dok ne rešim.</li>
    </ul>
    <div class="callout"><strong data-sr="Meta odgovara u dobroj veri i prihvata da postoji problem koji treba rešiti.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Meta odgovara u dobroj veri i prihvata da postoji problem koji treba rešiti." data-en="The target replies in good faith and accepts there is a problem to solve.">Meta odgovara u dobroj veri i prihvata da postoji problem koji treba rešiti.</span></div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 2 — Priča o zaključanom nalogu ili grešci u kodu" data-en="Phase 2 — Story about a locked account or wrong code">Faza 2 — Priča o zaključanom nalogu ili grešci u kodu</h3>
    <p data-sr="Objašnjava se da im je potreban kod koji je slučajno stigao vama, da platforma šalje kod na stari broj, ili da morate da potvrdite identitet da bi oni vratili pristup." data-en="They explain they need a code that accidentally reached you, that the platform sends a code to the old number, or that you must confirm identity so they can regain access.">Objašnjava se da im je potreban kod koji je slučajno stigao vama, da platforma šalje kod na stari broj, ili da morate da potvrdite identitet da bi oni vratili pristup.</p>
    <ul class="bullets">
      <li data-sr="Traži se da im pošaljete bilo koji kod koji stigne u sledećih pet minuta." data-en="You are asked to send any code that arrives in the next five minutes.">Traži se da im pošaljete bilo koji kod koji stigne u sledećih pet minuta.</li>
      <li data-sr="Može se tražiti snimak ekrana sa porukom od banke ili servisa." data-en="They may ask for a screenshot of a message from the bank or service.">Može se tražiti snimak ekrana sa porukom od banke ili servisa.</li>
      <li data-sr="Pominje se rok posle koga će nalog biti obrisan ili novac zamrznut." data-en="A deadline is mentioned after which the account will be deleted or money frozen.">Pominje se rok posle koga će nalog biti obrisan ili novac zamrznut.</li>
      <li data-sr="Ponekad se traži da prosledite poruku na drugi broj koji je tehničar servisa." data-en="Sometimes you are asked to forward a message to another number that belongs to service tech.">Ponekad se traži da prosledite poruku na drugi broj koji je tehničar servisa.</li>
    </ul>
    <div class="callout"><strong data-sr="Meta pristaje da prati uputstva koja uključuju kodove ili sadržaj SMS-a.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Meta pristaje da prati uputstva koja uključuju kodove ili sadržaj SMS-a." data-en="The target agrees to follow instructions involving codes or SMS content.">Meta pristaje da prati uputstva koja uključuju kodove ili sadržaj SMS-a.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching in this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="impersonation-scam.html" data-sr="Šire lažno predstavljanje" data-en="Broader impersonation">Šire lažno predstavljanje</a></li>
        <li><a href="smishing.html" data-sr="SMS varijante istog obrasca" data-en="SMS variants of the same pattern">SMS varijante istog obrasca</a></li>
        <li><a href="phishing.html" data-sr="Fišing ako se traži i link" data-en="Phishing if a link is also requested">Fišing ako se traži i link</a></li>
      </ul>
    </div>
  </article>

  <article class="phase warn">
    <h3 data-sr="Faza 3 — Slanje koda, SMS-a ili snimka ekrana" data-en="Phase 3 — Sending a code, SMS, or screenshot">Faza 3 — Slanje koda, SMS-a ili snimka ekrana</h3>
    <p data-sr="Meta prosleđuje jednokratni kod, fotografiju ekrana sa celom porukom banke ili odgovara na lažni upit platforme koji je zapravo pokušaj prijave napadača." data-en="The target forwards a one-time code, a photo of the full bank message, or responds to a fake platform prompt that is actually the attacker’s sign-in attempt.">Meta prosleđuje jednokratni kod, fotografiju ekrana sa celom porukom banke ili odgovara na lažni upit platforme koji je zapravo pokušaj prijave napadača.</p>
    <ul class="bullets">
      <li data-sr="Kodovi za dvofaktorsku zaštitu važe kratko, što se iskorišćava da požurite bez čitanja teksta poruke." data-en="Two-factor codes are short-lived, which is used to rush you without reading the SMS text.">Kodovi za dvofaktorsku zaštitu važe kratko, što se iskorišćava da požurite bez čitanja teksta poruke.</li>
      <li data-sr="Snimak ekrana može otkriti i deo broja računa ili ličnih podataka pored koda." data-en="A screenshot can reveal part of the account number or personal data beside the code.">Snimak ekrana može otkriti i deo broja računa ili ličnih podataka pored koda.</li>
      <li data-sr="Ako je reč o kodu koji je pogrešno poslat, napadač već ima vaš broj u toku prijave." data-en="If it is a code sent by mistake, the attacker already has your number in a sign-in flow.">Ako je reč o kodu koji je pogrešno poslat, napadač već ima vaš broj u toku prijave.</li>
      <li data-sr="Ponekad sledi drugi kod odmah posle prvog jer prvi nije prošao." data-en="Sometimes a second code follows right after the first because the first failed.">Ponekad sledi drugi kod odmah posle prvog jer prvi nije prošao.</li>
    </ul>
    <div class="callout"><strong data-sr="Jednokratni kod, sadržaj SMS-a ili snimak ekrana je poslat u čet.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Jednokratni kod, sadržaj SMS-a ili snimak ekrana je poslat u čet." data-en="A one-time code, SMS content, or screenshot is sent in the chat.">Jednokratni kod, sadržaj SMS-a ili snimak ekrana je poslat u čet.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching in this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="account-takeover.html" data-sr="Preuzimanje naloga" data-en="Account takeover">Preuzimanje naloga</a></li>
        <li><a href="social-media-hijack-scam.html" data-sr="Preuzimanje naloga na mrežama" data-en="Social media account hijack">Preuzimanje naloga na mrežama</a></li>
      </ul>
    </div>
  </article>

  <article class="phase bad">
    <h3 data-sr="Faza 4 — Preuzimanje naloga ili zloupotreba banke" data-en="Phase 4 — Account takeover or bank abuse">Faza 4 — Preuzimanje naloga ili zloupotreba banke</h3>
    <p data-sr="Napadač završava prijavu, menja podatke za oporavak i isključuje upozorenja; kod banke može dodati primaoca, potvrdi prenos ili kupovinu." data-en="The attacker finishes sign-in, changes recovery details, and turns off alerts; with a bank they may add a payee, confirm a transfer, or a purchase.">Napadač završava prijavu, menja podatke za oporavak i isključuje upozorenja; kod banke može dodati primaoca, potvrdi prenos ili kupovinu.</p>
    <ul class="bullets">
      <li data-sr="Vi više ne možete da se prijavite jer je promenjena lozinka ili broj telefona." data-en="You can no longer sign in because the password or phone number was changed.">Vi više ne možete da se prijavite jer je promenjena lozinka ili broj telefona.</li>
      <li data-sr="Izlaze objave, poruke ili zahtevi za novac u vaše ime." data-en="Posts, messages, or money requests go out in your name.">Izlaze objave, poruke ili zahtevi za novac u vaše ime.</li>
      <li data-sr="Bankovne obaveštenja pokazuju uređaj ili lokaciju koje ne prepoznajete." data-en="Bank notifications show a device or location you do not recognize.">Bankovne obaveštenja pokazuju uređaj ili lokaciju koje ne prepoznajete.</li>
      <li data-sr="Napadač može ostati u četu sa vašim kontaktima i dalje glumiti vas." data-en="The attacker may stay in chat with your contacts and keep impersonating you.">Napadač može ostati u četu sa vašim kontaktima i dalje glumiti vas.</li>
    </ul>
    <div class="callout"><strong data-sr="Nalog ili finansijski instrument je pod tuđom kontrolom.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Nalog ili finansijski instrument je pod tuđom kontrolom." data-en="The account or financial instrument is under someone else’s control.">Nalog ili finansijski instrument je pod tuđom kontrolom.</span></div>
  </article>

  <article class="phase bad">
    <h3 data-sr="Faza 5 — Lanac poruka ka prijateljima i porodici" data-en="Phase 5 — Chain of messages to friends and family">Faza 5 — Lanac poruka ka prijateljima i porodici</h3>
    <p data-sr="Sa ukradenog naloga ili broja šalju se iste poruke vašim kontaktima; deo njih takođe pošalje kod jer veruje da ste to zaista vi." data-en="The same messages go to your contacts from the stolen account or number; some of them also send a code because they believe it is really you.">Sa ukradenog naloga ili broja šalju se iste poruke vašim kontaktima; deo njih takođe pošalje kod jer veruje da ste to zaista vi.</p>
    <ul class="bullets">
      <li data-sr="Poruke često traže mali iznos za taksi ili kartu da bi priča delovala bezazleno." data-en="Messages often ask for a small amount for a taxi or a ticket so the story looks harmless.">Poruke često traže mali iznos za taksi ili kartu da bi priča delovala bezazleno.</li>
      <li data-sr="Kontakti vide vašu profil sliku ili istoriju četa i manje sumnjaju." data-en="Contacts see your profile photo or chat history and doubt less.">Kontakti vide vašu profil sliku ili istoriju četa i manje sumnjaju.</li>
      <li data-sr="Vi saznajete za lanac tek kada neko nazove van aplikacije." data-en="You learn about the chain only when someone calls outside the app.">Vi saznajete za lanac tek kada neko nazove van aplikacije.</li>
      <li data-sr="Brisanje poruka na vašem telefonu ne zaustavlja širenje kod drugih." data-en="Deleting messages on your phone does not stop spread to others.">Brisanje poruka na vašem telefonu ne zaustavlja širenje kod drugih.</li>
    </ul>
    <div class="callout"><strong data-sr="Više ljudi je uključeno u isti obrazac zloupotrebe koda.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Više ljudi je uključeno u isti obrazac zloupotrebe koda." data-en="Multiple people are caught in the same code-abuse pattern.">Više ljudi je uključeno u isti obrazac zloupotrebe koda.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching in this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="advance-fee-fraud.html" data-sr="Naplata unapred uz emotivnu priču" data-en="Advance payment with an emotional story">Naplata unapred uz emotivnu priču</a></li>
        <li><a href="payment-link-scam.html" data-sr="Link za plaćanje posle četa" data-en="Payment link after chat">Link za plaćanje posle četa</a></li>
      </ul>
    </div>
  </article>

  <article class="phase">
    <h3 data-sr="Faza 6 — Sanacija, obaveštavanje mreže i zvanični kanali" data-en="Phase 6 — Cleanup, network alert, and official channels">Faza 6 — Sanacija, obaveštavanje mreže i zvanični kanali</h3>
    <p data-sr="Potrebno je prijaviti kompromitovanje platformi, blokirati karticu ako je bilo bankarskih kodova, obavestiti kontakte drugim kanalom i resetovati pristup kroz zvanične formulara za oporavak." data-en="You need to report compromise to the platform, block the card if bank codes were involved, warn contacts through another channel, and reset access through official recovery forms.">Potrebno je prijaviti kompromitovanje platformi, blokirati karticu ako je bilo bankarskih kodova, obavestiti kontakte drugim kanalom i resetovati pristup kroz zvanične formulara za oporavak.</p>
    <ul class="bullets">
      <li data-sr="Kratka poruka ili poziv porodici ne šalji kodove ni meni u četu dok ne čujemo glas smanjuje štetu." data-en="A short call or text to family—don’t send codes even to me in chat until we hear a voice—reduces harm.">Kratka poruka ili poziv porodici ne šalji kodove ni meni u četu dok ne čujemo glas smanjuje štetu.</li>
      <li data-sr="Platforme imaju stranice za prijavu ukradenog naloga koje ne traže kod u četu sa prijateljem." data-en="Platforms have stolen-account reporting pages that do not require a code in chat with a friend.">Platforme imaju stranice za prijavu ukradenog naloga koje ne traže kod u četu sa prijateljem.</li>
      <li data-sr="Banka može blokirati daljnje transakcije ako se javite odmah sa vremenom incidenta." data-en="The bank can block further transactions if you report immediately with the incident time.">Banka može blokirati daljnje transakcije ako se javite odmah sa vremenom incidenta.</li>
      <li data-sr="Snimci četa i brojevi pomažu pri policijskoj ili platformskoj prijavi." data-en="Chat screenshots and numbers help with police or platform reports.">Snimci četa i brojevi pomažu pri policijskoj ili platformskoj prijavi.</li>
    </ul>
    <div class="callout"><strong data-sr="Šteta je zaustavljena koliko je moguće i mreža je upozorena van sumnjivog četa.</span>" data-en="Phase threshold:">Prag faze:</strong> <span data-sr="Šteta je zaustavljena koliko je moguće i mreža je upozorena van sumnjivog četa." data-en="Harm is stopped as much as possible and the network is warned outside the suspicious chat.">Šteta je zaustavljena koliko je moguće i mreža je upozorena van sumnjivog četa.</span></div>
    <div class="branch">
      <strong data-sr="Grananja u ovoj fazi:" data-en="Branching in this phase:">Grananja u ovoj fazi:</strong>
      <ul class="bullets">
        <li><a href="account-recovery-scam.html" data-sr="Lažne usluge oporavka ako potražite pomoć na Google-u" data-en="Fake recovery services if you search Google for help">Lažne usluge oporavka ako potražite pomoć na Google-u</a></li>
        <li><a href="recovery-scam.html" data-sr="Recovery scam posle gubitka" data-en="Recovery scam after a loss">Recovery scam posle gubitka</a></li>
      </ul>
    </div>
  </article>
</section>

<section class="content-section">
  <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
  <ul class="bullets">
    <li data-sr="Traže da im prosledite SMS koji eksplicitno kaže da ga ne delite." data-en="They ask you to forward an SMS that explicitly says not to share it.">Traže da im prosledite SMS koji eksplicitno kaže da ga ne delite.</li>
    <li data-sr="Traže šestocifreni ili osmocifreni kod koji je upravo stigao na vaš telefon." data-en="They ask for a six- or eight-digit code that just arrived on your phone.">Traže šestocifreni ili osmocifreni kod koji je upravo stigao na vaš telefon.</li>
    <li data-sr="Izbegavaju glasovni ili video poziv i insistiraju na četu." data-en="They avoid a voice or video call and insist on chat.">Izbegavaju glasovni ili video poziv i insistiraju na četu.</li>
    <li data-sr="Poruka dolazi sa novog broja uz dramatičnu priču bez dokaza koji biste znali da proverite." data-en="The message comes from a new number with a dramatic story and no proof you know how to verify.">Poruka dolazi sa novog broja uz dramatičnu priču bez dokaza koji biste znali da proverite.</li>
    <li data-sr="Traži se snimak celog ekrana sa bankovnom ili servisnom porukom." data-en="A full-screen screenshot of a bank or service message is requested.">Traži se snimak celog ekrana sa bankovnom ili servisnom porukom.</li>
    <li data-sr="Tekst zvuči kao prevod ili kao generički šablon, ne kao ta osoba." data-en="The text reads like a translation or a generic template, not like that person.">Tekst zvuči kao prevod ili kao generički šablon, ne kao ta osoba.</li>
    <li data-sr="Pritisak da ne čekate i da ne pitate nikoga drugog." data-en="Pressure not to wait and not to ask anyone else.">Pritisak da ne čekate i da ne pitate nikoga drugog.</li>
    <li data-sr="Nakon što pošaljete kod, traže još jedan jer sistem nije prihvatio." data-en="After you send a code, they ask for another because the system did not accept it.">Nakon što pošaljete kod, traže još jedan jer sistem nije prihvatio.</li>
    <li data-sr="Isti obrazac poruke stiže od više kontakata u kratkom roku." data-en="The same message pattern arrives from several contacts in a short time.">Isti obrazac poruke stiže od više kontakata u kratkom roku.</li>
    <li data-sr="Osoba tvrdi da je podrška platforme, ali piše vam sa ličnog broja." data-en="The person claims to be platform support but writes from a personal number.">Osoba tvrdi da je podrška platforme, ali piše vam sa ličnog broja.</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Provere: 8 brzih provera" data-en="Checks: 8 quick checks">Provere: 8 brzih provera</h2>
  <ol class="steps">
    <li data-sr="Uzmite broj iz imenika i nazovite osobu van aplikacije za čet." data-en="Take the number from your contacts and call the person outside the chat app.">Uzmite broj iz imenika i nazovite osobu van aplikacije za čet.</li>
    <li data-sr="Postavite pitanje na koje samo prava osoba zna odgovor, bez osećaja da je test." data-en="Ask a question only the real person would know, without making it feel like a test.">Postavite pitanje na koje samo prava osoba zna odgovor, bez osećaja da je test.</li>
    <li data-sr="Pročitajte ceo SMS sa kodom: često piše za šta je kod i da ga ne delite." data-en="Read the full SMS with the code: it often states what it is for and not to share it.">Pročitajte ceo SMS sa kodom: često piše za šta je kod i da ga ne delite.</li>
    <li data-sr="Zatvorite čet i uđite na zvaničan sajt servisa ukucan ručno ako sumnjate." data-en="Close the chat and open the service’s official site typed manually if you are unsure.">Zatvorite čet i uđite na zvaničan sajt servisa ukucan ručno ako sumnjate.</li>
    <li data-sr="Proverite da li je nalog prijatelja na mreži objavio sumnjive linkove pre vaše poruke." data-en="Check whether the friend’s social account posted suspicious links before your message.">Proverite da li je nalog prijatelja na mreži objavio sumnjive linkove pre vaše poruke.</li>
    <li data-sr="Ako ste već poslali kod, odmah promenite lozinku i odjavite sesije na servisu." data-en="If you already sent a code, immediately change the password and sign out sessions on the service.">Ako ste već poslali kod, odmah promenite lozinku i odjavite sesije na servisu.</li>
    <li data-sr="Kontaktirajte banku ako je kod bio od banke ili je slikan ekran sa pristupom." data-en="Contact the bank if the code was from the bank or a screen showed access.">Kontaktirajte banku ako je kod bio od banke ili je slikan ekran sa pristupom.</li>
    <li data-sr="Sačuvajte ceo tok četa i identitet broja pre blokiranja." data-en="Save the full chat flow and the number identity before blocking.">Sačuvajte ceo tok četa i identitet broja pre blokiranja.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Checklista: pitanja pre slanja bilo kog koda" data-en="Checklist: questions before sending any code">Checklista: pitanja pre slanja bilo kog koda</h2>
  <ul class="bullets">
    <li data-sr="Da li sam čuo glas ove osobe na pozivu van četa?" data-en="Have I heard this person’s voice on a call outside chat?">Da li sam čuo glas ove osobe na pozivu van četa?</li>
    <li data-sr="Da li SMS eksplicitno zabranjuje deljenje koda?" data-en="Does the SMS explicitly forbid sharing the code?">Da li SMS eksplicitno zabranjuje deljenje koda?</li>
    <li data-sr="Da li bih isti kod poslao potpuno strancu?" data-en="Would I send the same code to a complete stranger?">Da li bih isti kod poslao potpuno strancu?</li>
    <li data-sr="Da li postoji hitnost koja sprečava da sačekam deset minuta?" data-en="Is there urgency that prevents waiting ten minutes?">Da li postoji hitnost koja sprečava da sačekam deset minuta?</li>
    <li data-sr="Da li mogu da potvrdim priču kroz drugi kanal koji sam ja pokrenuo?" data-en="Can I confirm the story through another channel I initiated?">Da li mogu da potvrdim priču kroz drugi kanal koji sam ja pokrenuo?</li>
    <li data-sr="Da li traže snimak ekrana umesto da sami koriste zvaničan oporavak?" data-en="Are they asking for a screenshot instead of using official recovery themselves?">Da li traže snimak ekrana umesto da sami koriste zvaničan oporavak?</li>
    <li data-sr="Da li je ovo ista šema o kojoj sam čuo u vestima ili od banke?" data-en="Is this the same pattern you heard about in news or from the bank?">Da li je ovo ista šema o kojoj sam čuo u vestima ili od banke?</li>
    <li data-sr="Da li bih tražio od deteta ili roditelja da uradi isto što traže od mene?" data-en="Would I ask a child or parent to do what they are asking me to do?">Da li bih tražio od deteta ili roditelja da uradi isto što traže od mene?</li>
    <li data-sr="Da li poruka traži tajnost prema ostatku porodice?" data-en="Does the message ask for secrecy from the rest of the family?">Da li poruka traži tajnost prema ostatku porodice?</li>
    <li data-sr="Da li je jezik poruke drugačiji od uobičajenog stila te osobe?" data-en="Is the message language different from that person’s usual style?">Da li je jezik poruke drugačiji od uobičajenog stila te osobe?</li>
    <li data-sr="Da li je novi broj registrovan na isto ime u aplikaciji za čet?" data-en="Is the new number registered to the same name in the chat app?">Da li je novi broj registrovan na isto ime u aplikaciji za čet?</li>
    <li data-sr="Da li mogu prvo da pitam nekoga od poverenja pre nego što odgovorim?" data-en="Can I ask someone I trust first before replying?">Da li mogu prvo da pitam nekoga od poverenja pre nego što odgovorim?</li>
  </ul>
</section>

<section class="content-section">
  <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: order of actions">Ako sumnja krene: redosled poteza</h2>
  <ol class="steps">
    <li data-sr="Ne šaljite kodove, slike ekrana ni prosleđujte SMS dok ne završite proveru." data-en="Do not send codes, screenshots, or forward SMS until you finish verification.">Ne šaljite kodove, slike ekrana ni prosleđujte SMS dok ne završite proveru.</li>
    <li data-sr="Pozovite osobu na broj koji ste vi sačuvali, ne na broj koji vam piše u četu." data-en="Call the person on a number you saved, not the number writing in chat.">Pozovite osobu na broj koji ste vi sačuvali, ne na broj koji vam piše u četu.</li>
    <li data-sr="Ako ne možete da čujete glas, prekinite komunikaciju i obavestite zajedničke kontakte drugim putem." data-en="If you cannot hear a voice, stop communicating and warn mutual contacts another way.">Ako ne možete da čujete glas, prekinite komunikaciju i obavestite zajedničke kontakte drugim putem.</li>
    <li data-sr="Ako je kod već poslat, odmah resetujte pristup naloga i obavestite banku." data-en="If a code was already sent, immediately reset account access and notify the bank.">Ako je kod već poslat, odmah resetujte pristup naloga i obavestite banku.</li>
    <li data-sr="Prijavite ukradeni nalog platformi i tražite zamrzavanje aktivnosti." data-en="Report the stolen account to the platform and ask for activity freeze.">Prijavite ukradeni nalog platformi i tražite zamrzavanje aktivnosti.</li>
    <li data-sr="Blokirajte broj ili nalog koji je tražio kod i sačuvajte dokaze." data-en="Block the number or account that asked for the code and preserve evidence.">Blokirajte broj ili nalog koji je tražio kod i sačuvajte dokaze.</li>
  </ol>
</section>

<section class="content-section">
  <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
  <ul class="bullets">
    <li data-sr="Da li su već prosledili kod ili sliku SMS-a u čet?" data-en="Did they already forward a code or an SMS image in chat?">Da li su već prosledili kod ili sliku SMS-a u čet?</li>
    <li data-sr="Da li su razgovarali glasom sa osobom koja je tražila pomoć?" data-en="Did they speak by voice with the person who asked for help?">Da li su razgovarali glasom sa osobom koja je tražila pomoć?</li>
    <li data-sr="Da li im je isti kontakt tražio i novac posle koda?" data-en="Did the same contact also ask for money after the code?">Da li im je isti kontakt tražio i novac posle koda?</li>
    <li data-sr="Da li im je banka poslala upozorenje o prijavi ili transakciji?" data-en="Did the bank send a warning about a sign-in or transaction?">Da li im je banka poslala upozorenje o prijavi ili transakciji?</li>
  </ul>
  <p data-sr="Rečenice koje rade:" data-en="Sentences that help:">Rečenice koje rade:</p>
  <ul class="bullets">
    <li data-sr="Kod iz SMS-a je kao ključ od stana — ne šalje se preko četa nikome, ni meni." data-en="An SMS code is like an apartment key — you don’t send it in chat to anyone, not even me.">Kod iz SMS-a je kao ključ od stana — ne šalje se preko četa nikome, ni meni.</li>
    <li data-sr="Hajde da je nazovemo na starom broju pre nego što odgovorimo bilo šta." data-en="Let’s call her on the old number before we reply with anything.">Hajde da je nazovemo na starom broju pre nego što odgovorimo bilo šta.</li>
    <li data-sr="Prava podrška nikad ne traži da neko drugi čita tvoj bankarski kod." data-en="Real support never asks someone else to read your bank code.">Prava podrška nikad ne traži da neko drugi čita tvoj bankarski kod.</li>
    <li data-sr="Ako je poslato, odmah ćemo ući u aplikaciju banke zajedno i proveriti sesije." data-en="If it was sent, we will open the bank app together right away and check sessions.">Ako je poslato, odmah ćemo ući u aplikaciju banke zajedno i proveriti sesije.</li>
  </ul>
</section>


`
};
