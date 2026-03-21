window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["fake-instant-transfer-confirmation"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: lažna instant potvrda pre otpreme" data-en="Introduction: fake instant confirmation before shipment">Uvod: lažna instant potvrda pre otpreme</h2>
      <p data-sr="Kupac ili posrednik šalje sliku ekrana ili PDF koji liči na instant potvrdu uplate, a traži otpremu pre knjiženja kredita." data-en="Buyer or broker sends a screenshot or PDF resembling instant payment proof and asks you to ship before credit posts.">Kupac ili posrednik šalje sliku ekrana ili PDF koji liči na instant potvrdu uplate, a traži otpremu pre knjiženja kredita.</p>
      <p data-sr="Slika ne može se nezavisno verifikovati u vašem poslovnom bankarstvu, ali pritisak na rok isporuke je jak." data-en="The image cannot be independently verified in your business banking, but delivery deadline pressure is strong.">Slika ne može se nezavisno verifikovati u vašem poslovnom bankarstvu, ali pritisak na rok isporuke je jak.</p>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + grananja)" data-en="Timeline (phases + branching)">Hronološki tok (faze + grananja)</h2>
      <p class="muted" data-sr="Faze su operativni tok: šta meta vidi, šta se traži, gde se pali grananje." data-en="Phases are an operational flow: what the target sees, what is demanded, where branching fires.">Faze su operativni tok: šta meta vidi, šta se traži, gde se pali grananje.</p>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Priprema kontakta" data-en="Phase 1 — Contact setup">Faza 1 — Priprema kontakta</h3>
        <p data-sr="Napadač prikuplja javne podatke o vašoj firmi, nedavnim uplatama ili imenima u finansijama." data-en="The attacker gathers public data on your company, recent payments, or finance names.">Napadač prikuplja javne podatke o vašoj firmi, nedavnim uplatama ili imenima u finansijama.</p>
        <p data-sr="Poziv ili imejl dolazi u vreme kada očekujete završetak transakcije." data-en="Call or email arrives when you expect a transaction to finish.">Poziv ili imejl dolazi u vreme kada očekujete završetak transakcije.</p>
        <ul class="bullets">
            <li data-sr="Meta vidi broj koji deluje lokalno ili koristi poznato ime banke u uvodnoj poruci." data-en="Target sees a number that looks local or uses a familiar bank name in the opener.">Meta vidi broj koji deluje lokalno ili koristi poznato ime banke u uvodnoj poruci.</li>
            <li data-sr="Govornik zna iznos i datum uplate sa javnih obaveštenja ili curenja." data-en="Speaker knows amount and payment date from public notices or leaks.">Govornik zna iznos i datum uplate sa javnih obaveštenja ili curenja.</li>
            <li data-sr="Traži se hitnost zbog navodnog rizika od blokade računa." data-en="Urgency is cited due to alleged account freeze risk.">Traži se hitnost zbog navodnog rizika od blokade računa.</li>
            <li data-sr="Koristi se žargon kliringa koji zvuči uverljivo nepažljivom slušaocu." data-en="Clearing jargon is used that sounds convincing to a casual listener.">Koristi se žargon kliringa koji zvuči uverljivo nepažljivom slušaocu.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="fake-call-scam.html" data-sr="Lažni poziv" data-en="Fake call scam">Lažni poziv</a></li>
            <li><a href="bank-impersonation.html" data-sr="Lažna banka" data-en="Bank impersonation">Lažna banka</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> napadač ima dovoljno detalja da zvuči kao interna podrška." data-en="<strong>Phase threshold:</strong> attacker has enough detail to sound like internal support."><strong>Prag faze:</strong> napadač ima dovoljno detalja da zvuči kao interna podrška.</div>
      </article>
      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 2 — Narativ o grešci u sistemu" data-en="Phase 2 — System error narrative">Faza 2 — Narativ o grešci u sistemu</h3>
        <p data-sr="Objašnjava se da je sistem označio transakciju kao duplu ili je batch storniran." data-en="The story claims the system flagged a duplicate or the batch was reversed.">Objašnjava se da je sistem označio transakciju kao duplu ili je batch storniran.</p>
        <p data-sr="Predlaže se brza korekcija putem novog naloga kako bi se izbegao audit." data-en="A quick correction via a new transfer is proposed to avoid audit trouble.">Predlaže se brza korekcija putem novog naloga kako bi se izbegao audit.</p>
        <ul class="bullets">
            <li data-sr="Signal: ne možete dobiti isti službeni dokument koji pozivalac citira." data-en="signal: you cannot obtain the same official document the caller cites.">Signal: ne možete dobiti isti službeni dokument koji pozivalac citira.</li>
            <li data-sr="Signal: traže da ne koristite onlajn bankarstvo dok ne završite korak." data-en="signal: you are told not to use online banking until you finish the step.">Signal: traže da ne koristite onlajn bankarstvo dok ne završite korak.</li>
            <li data-sr="Signal: traže da potvrdite broj kartice ili PIN radi verifikacije." data-en="signal: they ask you to confirm card number or PIN for verification.">Signal: traže da potvrdite broj kartice ili PIN radi verifikacije.</li>
            <li data-sr="Signal: kontakt traži poverljivost prema rukovodstvu." data-en="signal: contact demands secrecy from management.">Signal: kontakt traži poverljivost prema rukovodstvu.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta prihvata da postoji tehnička greška bez provere u aplikaciji." data-en="<strong>Phase threshold:</strong> target accepts a technical fault exists without checking the app."><strong>Prag faze:</strong> meta prihvata da postoji tehnička greška bez provere u aplikaciji.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 3 — Uputstvo za novu uplatu" data-en="Phase 3 — New payment instruction">Faza 3 — Uputstvo za novu uplatu</h3>
        <p data-sr="Slede tačan iznos, IBAN i rok od nekoliko minuta." data-en="Exact amount, IBAN, and a few-minute deadline follow.">Slede tačan iznos, IBAN i rok od nekoliko minuta.</p>
        <p data-sr="Ponekad se šalje lažni sken naloga banke kao dokaz." data-en="Sometimes a fake bank slip image is sent as proof.">Ponekad se šalje lažni sken naloga banke kao dokaz.</p>
        <ul class="bullets">
            <li data-sr="Signal: IBAN je u drugoj zemlji bez poslovnog razloga." data-en="signal: IBAN is in another country with no business reason.">Signal: IBAN je u drugoj zemlji bez poslovnog razloga.</li>
            <li data-sr="Signal: ime primaoca nije ime vaše banke ili partnera." data-en="signal: beneficiary name is not your bank or partner name.">Signal: ime primaoca nije ime vaše banke ili partnera.</li>
            <li data-sr="Signal: traže plaćanje kriptovalutom ili darovnom karticom kao brzi ispravak." data-en="signal: crypto or gift card is requested as a quick fix.">Signal: traže plaćanje kriptovalutom ili darovnom karticom kao brzi ispravak.</li>
            <li data-sr="Signal: isti broj zove ponovo ako odložite." data-en="signal: the same number calls again if you delay.">Signal: isti broj zove ponovo ako odložite.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="payment-diversion.html" data-sr="Preusmeravanje plaćanja" data-en="Payment diversion">Preusmeravanje plaćanja</a></li>
            <li><a href="invoice-fraud.html" data-sr="Prevara sa fakturama" data-en="Invoice fraud">Prevara sa fakturama</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> meta je spremna da pošalje ispravak pre zvanične provere." data-en="<strong>Phase threshold:</strong> target is ready to send correction before official verification."><strong>Prag faze:</strong> meta je spremna da pošalje ispravak pre zvanične provere.</div>
      </article>
      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 4 — Izvršen transfer" data-en="Phase 4 — Transfer executed">Faza 4 — Izvršen transfer</h3>
        <p data-sr="Novac odlazi na račun napadača i brzo se raspolže." data-en="Money reaches the attacker&#x27;s account and is moved quickly.">Novac odlazi na račun napadača i brzo se raspolže.</p>
        <p data-sr="U vašem izvodu stoji autorizovana uplata koju ste vi odobrili." data-en="Your statement shows an authorized payment you approved.">U vašem izvodu stoji autorizovana uplata koju ste vi odobrili.</p>
        <ul class="bullets">
            <li data-sr="Signal: u opisu stoji reč ispravak, refund ili test." data-en="signal: description contains correction, refund, or test.">Signal: u opisu stoji reč ispravak, refund ili test.</li>
            <li data-sr="Signal: iznos je neobično zaobljen ili tačno jednak limitu kartice." data-en="signal: amount is oddly round or exactly at card limit.">Signal: iznos je neobično zaobljen ili tačno jednak limitu kartice.</li>
            <li data-sr="Signal: nema korespondentnog pisma u e-bankingu o istom događaju." data-en="signal: no matching letter appears in e-banking for the same event.">Signal: nema korespondentnog pisma u e-bankingu o istom događaju.</li>
            <li data-sr="Signal: pravi partner i dalje traži isti dug." data-en="signal: real counterparty still requests the same debt.">Signal: pravi partner i dalje traži isti dug.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> sredstva su napustila vaš račun kao legitimna klijentska naredba." data-en="<strong>Phase threshold:</strong> funds left your account as a legitimate client instruction."><strong>Prag faze:</strong> sredstva su napustila vaš račun kao legitimna klijentska naredba.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 5 — Otkrivanje" data-en="Phase 5 — Discovery">Faza 5 — Otkrivanje</h3>
        <p data-sr="Banka ili partner na zvaničnom kanalu kaže da storno nije postojao." data-en="Bank or partner on an official channel says no reversal occurred.">Banka ili partner na zvaničnom kanalu kaže da storno nije postojao.</p>
        <p data-sr="Uočava se da je priča bila kontradiktorna sa stanjem računa." data-en="The story contradicts the actual account state.">Uočava se da je priča bila kontradiktorna sa stanjem računa.</p>
        <ul class="bullets">
            <li data-sr="Signal: zapis poziva ne postoji u CRM-u." data-en="signal: no call log exists in CRM.">Signal: zapis poziva ne postoji u CRM-u.</li>
            <li data-sr="Signal: broj pozivaoca ne pripada objavljenim linijama banke." data-en="signal: caller ID does not match published bank lines.">Signal: broj pozivaoca ne pripada objavljenim linijama banke.</li>
            <li data-sr="Signal: dva ista plaćanja nisu vidljiva u sistemu." data-en="signal: two identical payments are not visible in the system.">Signal: dva ista plaćanja nisu vidljiva u sistemu.</li>
            <li data-sr="Signal: zaposleni se seća pritiska na tajnost." data-en="signal: employee recalls secrecy pressure.">Signal: zaposleni se seća pritiska na tajnost.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> postoji zvanična potvrma da narativ lažnog storna nije tačan." data-en="<strong>Phase threshold:</strong> official confirmation exists that the reversal story was false."><strong>Prag faze:</strong> postoji zvanična potvrma da narativ lažnog storna nije tačan.</div>
      </article>
      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 6 — Sekundarni talas" data-en="Phase 6 — Secondary wave">Faza 6 — Sekundarni talas</h3>
        <p data-sr="Ponekad stiže recovery ponuda uz naknadu unapred." data-en="A recovery offer with upfront fee sometimes arrives.">Ponekad stiže recovery ponuda uz naknadu unapred.</p>
        <p data-sr="Ili novi poziv traži još jednu uplatu da se prva vrati." data-en="Or a new call asks for another payment to return the first.">Ili novi poziv traži još jednu uplatu da se prva vrati.</p>
        <ul class="bullets">
            <li data-sr="Signal: recovery firma zna detalje incidenta bez vaše prijave." data-en="signal: recovery firm knows incident details without your report.">Signal: recovery firma zna detalje incidenta bez vaše prijave.</li>
            <li data-sr="Signal: traže kripto ili pre-paid za uslugu praćenja novca." data-en="signal: crypto or prepaid is requested for tracing service.">Signal: traže kripto ili pre-paid za uslugu praćenja novca.</li>
            <li data-sr="Signal: traže da ne kontaktirate banku." data-en="signal: you are told not to contact the bank.">Signal: traže da ne kontaktirate banku.</li>
            <li data-sr="Signal: garantuju povrat uz procenat unapred." data-en="signal: they guarantee recovery for an upfront percentage.">Signal: garantuju povrat uz procenat unapred.</li>
        </ul>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="recovery-scam.html" data-sr="Prevara povraćaja novca" data-en="Recovery scam">Prevara povraćaja novca</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> žrtva je emotivno umorna i sklona drugom gubitku." data-en="<strong>Phase threshold:</strong> victim is emotionally tired and prone to a second loss."><strong>Prag faze:</strong> žrtva je emotivno umorna i sklona drugom gubitku.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
            <li data-sr="Za dokaz se prihvata samo slika, ne i izvod iz banke primaoca." data-en="Only an image is accepted as proof, not the beneficiary bank statement.">Za dokaz se prihvata samo slika, ne i izvod iz banke primaoca.</li>
            <li data-sr="Kupac odbija čekanje na vidljiv kredit u aplikaciji." data-en="Buyer refuses to wait for visible credit in the app.">Kupac odbija čekanje na vidljiv kredit u aplikaciji.</li>
            <li data-sr="PDF nema jedinstveni referentni broj koji banka može potvrditi." data-en="PDF lacks a unique reference the bank can verify.">PDF nema jedinstveni referentni broj koji banka može potvrditi.</li>
            <li data-sr="Isti vizuelni šablon potvrde korišćen je u više nepovezanih firmi." data-en="Same visual confirmation template used across unrelated firms.">Isti vizuelni šablon potvrde korišćen je u više nepovezanih firmi.</li>
            <li data-sr="Zahtev za otpremu van radnog vremena banaka." data-en="Shipment demanded outside bank business hours.">Zahtev za otpremu van radnog vremena banaka.</li>
            <li data-sr="Kupac menja adresu isporuke u poslednjem trenutku." data-en="Buyer changes delivery address at the last moment.">Kupac menja adresu isporuke u poslednjem trenutku.</li>
            <li data-sr="Kontakt dolazi sa ličnog imejla umesto domena firme." data-en="Contact comes from personal email instead of company domain.">Kontakt dolazi sa ličnog imejla umesto domena firme.</li>
            <li data-sr="Pritisak da potpišete CMR ili otpremnicu pre provere uplate." data-en="Pressure to sign CMR or waybill before payment check.">Pritisak da potpišete CMR ili otpremnicu pre provere uplate.</li>
            <li data-sr="Iznos na slici se ne poklapa sa iznosom fakture." data-en="Amount on image does not match invoice amount.">Iznos na slici se ne poklapa sa iznosom fakture.</li>
            <li data-sr="Kupac ne želi akreditiv ili eskrou koji bi zaštitio obe strane." data-en="Buyer refuses letter of credit or escrow that protects both sides.">Kupac ne želi akreditiv ili eskrou koji bi zaštitio obe strane.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Provere: brze provere pre odluke" data-en="Checks: quick checks before you act">Provere: brze provere pre odluke</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Kontakt i narativ" data-en="Contact and story">Kontakt i narativ</div>
          <ul class="bullets">
            <li data-sr="Uporedite narativ sa stanjem računa u aplikaciji bez pomoći pozivaoca." data-en="Compare the story to account state in the app without the caller&#x27;s help.">Uporedite narativ sa stanjem računa u aplikaciji bez pomoći pozivaoca.</li>
            <li data-sr="Pozovite banku na broj sa kartice ili zvaničnog sajta." data-en="Call the bank using the number on the card or official site.">Pozovite banku na broj sa kartice ili zvaničnog sajta.</li>
            <li data-sr="Pitajte partnera da li su primali uplatu pre nego što šaljete ispravak." data-en="Ask the counterparty whether they received funds before you send correction.">Pitajte partnera da li su primali uplatu pre nego što šaljete ispravak.</li>
            <li data-sr="Proverite da li ista priča postoji u pismenoj korespondenciji banke." data-en="Check whether the same story exists in written bank correspondence.">Proverite da li ista priča postoji u pismenoj korespondenciji banke.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Banka i dokumenti" data-en="Bank and documents">Banka i dokumenti</div>
          <ul class="bullets">
            <li data-sr="Zatražite službeni dokument o stornu koji sadrži referencu transakcije." data-en="Request an official reversal document with transaction reference.">Zatražite službeni dokument o stornu koji sadrži referencu transakcije.</li>
            <li data-sr="Uporedite vreme poziva sa radnim vremenom odeljenja koje navode." data-en="Compare call time with stated department hours.">Uporedite vreme poziva sa radnim vremenom odeljenja koje navode.</li>
            <li data-sr="Uvedite pravilo dvostrukog odobrenja za ispravke preko 500 EUR." data-en="Introduce dual approval for corrections over a set threshold.">Uvedite pravilo dvostrukog odobrenja za ispravke preko 500 EUR.</li>
            <li data-sr="Sačuvajte snimak ekrana stanja pre i posle razgovora." data-en="Save screenshots of state before and after the conversation.">Sačuvajte snimak ekrana stanja pre i posle razgovora.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Checklista" data-en="Checklist">Checklista</h2>
      <ul class="bullets">
            <li data-sr="Da li smo proverili stanje u aplikaciji pre nove uplate?" data-en="Did we check app state before a new payment?">Da li smo proverili stanje u aplikaciji pre nove uplate?</li>
            <li data-sr="Da li je broj pozivaoca isti kao na sajtu banke?" data-en="Is the caller number the same as on the bank site?">Da li je broj pozivaoca isti kao na sajtu banke?</li>
            <li data-sr="Da li postoji pismo banke koje potvrđuje storno?" data-en="Is there a bank letter confirming reversal?">Da li postoji pismo banke koje potvrđuje storno?</li>
            <li data-sr="Da li je druga osoba videla isti nalog pre odobrenja?" data-en="Did a second person see the same instruction before approval?">Da li je druga osoba videla isti nalog pre odobrenja?</li>
            <li data-sr="Da li se ime primaoca poklapa sa partnerom iz ugovora?" data-en="Does beneficiary name match the contract counterparty?">Da li se ime primaoca poklapa sa partnerom iz ugovora?</li>
            <li data-sr="Da li je tražena tajnost prema internom revizoru?" data-en="Was secrecy toward internal auditor requested?">Da li je tražena tajnost prema internom revizoru?</li>
            <li data-sr="Da li je iznos ispravka jednak originalnoj uplati?" data-en="Is correction amount equal to the original payment?">Da li je iznos ispravka jednak originalnoj uplati?</li>
            <li data-sr="Da li postoji zapis poziva u tiket sistemu?" data-en="Is there a call log in the ticket system?">Da li postoji zapis poziva u tiket sistemu?</li>
            <li data-sr="Da li je kanal plaćanja isti kao u prethodnim isplatama?" data-en="Is the payment rail the same as in prior payouts?">Da li je kanal plaćanja isti kao u prethodnim isplatama?</li>
            <li data-sr="Da li smo tražili pauzu od jednog sata pre odluke?" data-en="Did we ask for a one-hour pause before deciding?">Da li smo tražili pauzu od jednog sata pre odluke?</li>
            <li data-sr="Da li IT vidi sumnjive forward na imejlu finansija?" data-en="Does IT see suspicious forwards on finance mail?">Da li IT vidi sumnjive forward na imejlu finansija?</li>
            <li data-sr="Da li smo obavestili pravni tim kada je tražen ispravak?" data-en="Did we inform legal when correction was requested?">Da li smo obavestili pravni tim kada je tražen ispravak?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="Zaustavite dalje transfere dok traje provera na zvaničnom kanalu." data-en="Stop further transfers while verification runs on an official channel.">Zaustavite dalje transfere dok traje provera na zvaničnom kanalu.</li>
        <li data-sr="Pozovite banku na broj sa izjave, ne na broj iz poruke." data-en="Call the bank using the statement number, not the number from the message.">Pozovite banku na broj sa izjave, ne na broj iz poruke.</li>
        <li data-sr="Zatražite pismeni trag o statusu transakcije koji možete uporediti sa internim sistemom." data-en="Request a written transaction status trail you can compare to internal systems.">Zatražite pismeni trag o statusu transakcije koji možete uporediti sa internim sistemom.</li>
        <li data-sr="Sačuvajte poruke, snimke ekrana i zaglavlja kao dokaz." data-en="Preserve messages, screenshots, and headers as evidence.">Sačuvajte poruke, snimke ekrana i zaglavlja kao dokaz.</li>
        <li data-sr="Obavestite internu bezbednost i pravni tim prema proceduri." data-en="Inform internal security and legal per procedure.">Obavestite internu bezbednost i pravni tim prema proceduri.</li>
        <li data-sr="Ako je novac otišao, tražite od banke postupak povraćaja i zabeležite vreme prijave." data-en="If money left, ask the bank for recall steps and log the report time.">Ako je novac otišao, tražite od banke postupak povraćaja i zabeležite vreme prijave.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are trying to help someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Koji zvanični broj ste koristili kada ste proverili priču?" data-en="Which official number did you use to verify the story?">Koji zvanični broj ste koristili kada ste proverili priču?</li>
            <li data-sr="Da li se traženi korak poklapa sa uputstvom na sajtu banke ili partnera?" data-en="Does the requested step match guidance on the bank or partner website?">Da li se traženi korak poklapa sa uputstvom na sajtu banke ili partnera?</li>
            <li data-sr="Ko je odobrio uplatu i da li je bilo drugog para očiju?" data-en="Who approved the payment and was there a second review?">Ko je odobrio uplatu i da li je bilo drugog para očiju?</li>
            <li data-sr="Imate li pisan trag od banke, ne samo reč pozivaoca?" data-en="Do you have written proof from the bank, not only the caller&#x27;s word?">Imate li pisan trag od banke, ne samo reč pozivaoca?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Hajde da proverimo status samo kroz aplikaciju ili broj sa kartice." data-en="Let&#x27;s check status only through the app or number on the card.">Hajde da proverimo status samo kroz aplikaciju ili broj sa kartice.</li>
            <li data-sr="Ne šaljemo novac dok druga osoba ne potvrdi isti nalog." data-en="We do not send money until a second person confirms the same instruction.">Ne šaljemo novac dok druga osoba ne potvrdi isti nalog.</li>
            <li data-sr="Sačuvaćemo dokaze pre bilo kakvog brisanja poruka." data-en="We will preserve evidence before any message deletion.">Sačuvaćemo dokaze pre bilo kakvog brisanja poruka.</li>
            <li data-sr="Ako je sumnja, banka može staviti privremeni blokad na osetljive transakcije." data-en="If in doubt, the bank can place a temporary block on sensitive transactions.">Ako je sumnja, banka može staviti privremeni blokad na osetljive transakcije.</li>
          </ul>
        </div>
      </div>
    </section>
`
};
