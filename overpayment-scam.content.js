window.SCAM_CONTENT = window.SCAM_CONTENT || {};

window.SCAM_CONTENT["overpayment-scam"] = {
  raw_html: `
    <section class="card">
      <h2 data-sr="Uvod: kako radi prevara s preplatom" data-en="Introduction: how the overpayment scam works">Uvod: kako radi prevara s preplatom</h2>
      <p data-sr="Prevara s preplatom cilja prodavce koji nude robu ili usluge — na oglasnim sajtovima, platformama za slobodnjake ili direktnom komunikacijom. Kupac šalje uplatu koja je veća od dogovorenog iznosa, tvrdi da je greška, i traži povrat razlike. Prodavac vrati razliku sopstvenim sredstvima, originalna uplata se poništi ili bude lažna, i prodavac ostane bez robe, bez originalne uplate i minus za iznos vraćene razlike." data-en="The overpayment scam targets sellers offering goods or services — on classified ad sites, freelance platforms, or direct communication. The buyer sends a payment larger than agreed, claims it was a mistake, and requests a refund of the difference. The seller refunds the difference from their own funds, the original payment is reversed or was fake, and the seller ends up with no goods, no original payment, and minus the refunded difference.">Kupac šalje uplatu veću od dogovorene, traži povrat razlike, a originalna uplata se poništi. Prodavac gubi robu, originalnu uplatu i vraćenu razliku.</p>
      <p data-sr="Originalnu uplatu vrše lažnim čekom koji banka privremeno odobri pre nego ga poništi, ukradenom karticom čija transakcija kasnije bude osporena, ili bankovnim transferom koji se reklamacijom poništi. U svakom slučaju, prodavac koji vrati razliku gotovinom, putem PayPal-a ili instant transferom šalje stvaran novac — a original nikad ne stigne." data-en="The original payment is made with a fake cheque the bank temporarily clears before rejecting it, a stolen card whose transaction is later disputed, or a bank transfer that is reversed upon request. In each case, the seller who refunds the difference in cash, via PayPal, or instant transfer sends real money — while the original never clears.">Originalnu uplatu vrše lažnim čekom, ukradenom karticom ili transferom koji se poništi. Vraćena razlika je uvek stvaran novac.</p>
      <div class="callout" data-sr="<strong>Model:</strong> kupovina → preplata → zahtev za povratom razlike → prodavac vraća razliku → originalna uplata se poništi → gubitak." data-en="<strong>Model:</strong> purchase → overpayment → surplus refund request → seller refunds difference → original payment reversed → loss."><strong>Model:</strong> kupovina → preplata → zahtev za povratom razlike → prodavac vraća razliku → originalna uplata se poništi → gubitak.</div>
      <div class="callout" data-sr="<strong>Prag:</strong> originalna uplata koja je veća nego dogovorena može biti čekom, bankovnim transferom ili kartičnom transakcijom koja će biti poništena." data-en="<strong>Threshold:</strong> an original payment larger than agreed may be by cheque, bank transfer, or card transaction that will later be reversed."><strong>Prag:</strong> originalna uplata koja je veća nego dogovorena može biti čekom, bankovnim transferom ili kartičnom transakcijom koja će biti poništena.</div>
    </section>

    <section class="card">
      <h2 data-sr="Kako generalno radi: mehanika prevare s preplatom" data-en="How it works: overpayment scam mechanics">Kako generalno radi: mehanika prevare s preplatom</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Šta gradi legitimnost kupca" data-en="What builds the buyer's legitimacy">Šta gradi legitimnost kupca</div>
          <ul class="bullets">
            <li data-sr="kupac kontaktira s normalnom ponudom i legitimnim pitanjima o robi ili usluzi." data-en="buyer contacts with a normal offer and legitimate questions about the goods or service.">kupac kontaktira s normalnom ponudom i legitimnim pitanjima o robi ili usluzi.</li>
            <li data-sr="preplata se objašnjava kao greška (pogrešan iznos), zamolba (uplata za prijevoz) ili okolnost (računovodstvo kompanije)." data-en="the overpayment is explained as a mistake (wrong amount), a request (included courier fee), or a circumstance (company accounting).">preplata se objašnjava kao greška (pogrešan iznos), zamolba (uplata za prijevoz) ili okolnost (računovodstvo kompanije).</li>
            <li data-sr="kupac je ljubazan, ne žuri s isporukom i ne gura — što smanjuje sumnju kod prodavca." data-en="the buyer is polite, does not rush delivery, and does not push — which reduces the seller's suspicion.">kupac je ljubazan, ne žuri s isporukom i ne gura — što smanjuje sumnju kod prodavca.</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Kako se uvodi povrat razlike" data-en="How the refund request is introduced">Kako se uvodi povrat razlike</div>
          <ul class="bullets">
            <li data-sr="povrat se traži metodom koji je različit od originalne uplate — instant transfer, PayPal, kripto." data-en="the refund is requested by a method different from the original payment — instant transfer, PayPal, crypto.">povrat se traži metodom koji je različit od originalne uplate — instant transfer, PayPal, kripto.</li>
            <li data-sr="hitnost: 'treba mi novac za kurir danas„, “gazda čeka potvrdu„ — pritisak na brz povrat." data-en="urgency: “I need the money for the courier today', 'my boss is waiting for confirmation' — pressure for a quick refund.">hitnost: 'treba mi novac za kurir danas', 'gazda čeka potvrdu' — pritisak na brz povrat.</li>
            <li data-sr="prodavac koji čeka kliring originalne uplate čuje: 'ne brinite, sve je u redu, uplata je u obradi„." data-en="the seller who waits for the original payment to clear hears: “don't worry, everything is fine, it's in clearing'.">prodavac koji čeka kliring originalne uplate čuje: 'ne brinite, sve je u redu, uplata je u obradi'.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card">
      <h2 data-sr="Hronološki tok (faze + evolucije)." data-en="Timeline (phases + evolutions).">Hronološki tok (faze + evolucije)</h2>

      <article class="phase">
        <h3 class="phase-title" data-sr="Faza 1 — Kontakt i dogovaranje kupovine" data-en="Phase 1 — Contact and purchase agreement">Faza 1 — Kontakt i dogovaranje kupovine</h3>
        <p data-sr="Kupac kontaktira prodavca, postavlja razumna pitanja i dogovara kupovinu. Sve izgleda normalno do trenutka uplate." data-en="The buyer contacts the seller, asks reasonable questions, and agrees on the purchase. Everything appears normal until the payment.">Kupac kontaktira, postavlja razumna pitanja, dogovara kupovinu. Ništa nije sumnjivo do trenutka uplate.</p>
        <ul class="bullets">
          <li data-sr="signal: kupac traži da se plaćanje obavi čekom ili bankovnim transferom umesto platformom za zaštitu kupca." data-en="signal: buyer requests payment by cheque or bank transfer instead of a buyer-protection platform.">signal: kupac traži da se plaćanje obavi čekom ili bankovnim transferom umesto platformom za zaštitu kupca.</li>
          <li data-sr="signal: kupac koji kupuje bez postavljanja pitanja o kvalitetu ili stanju robe možda ne namerava da zadrži robu." data-en="signal: a buyer who purchases without asking about quality or condition of the goods may not intend to keep them.">signal: kupac koji kupuje bez postavljanja pitanja o kvalitetu ili stanju robe možda ne namerava da zadrži robu.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> dogovor je postignut i kupac šalje uplatu." data-en="<strong>Threshold:</strong> the deal is reached and the buyer sends payment."><strong>Prag faze:</strong> dogovor je postignut i kupac šalje uplatu.</div>
      </article>

      <article class="phase warn">
        <h3 class="phase-title" data-sr="Faza 2 — Preplata i objašnjenje" data-en="Phase 2 — Overpayment and explanation">Faza 2 — Preplata i objašnjenje</h3>
        <p data-sr="Uplata stiže u iznosu koji je veći od dogovorenog. Kupac se javlja sa objašnjenjem i zahtevom za povratom razlike — odmah, pre nego što se originalna uplata zapravo isknjiga na računu prodavca." data-en="The payment arrives for more than agreed. The buyer contacts with an explanation and a refund request — immediately, before the original payment actually clears in the seller's account.">Uplata je prevelika, kupac traži povrat razlike odmah — pre nego se original zaista isknjiga.</p>
        <ul class="bullets">
          <li data-sr="signal: pritisak za hitnim povratom razlike pre nego je originalna uplata potvrđena je definitivan alarm." data-en="signal: pressure for immediate refund of the difference before the original payment is confirmed is a definitive alarm.">signal: pritisak za hitnim povratom razlike pre nego je originalna uplata potvrđena je definitivan alarm.</li>
          <li data-sr="signal: traženi metod povrata razlikuje se od metoda originalne uplate." data-en="signal: the requested refund method differs from the original payment method.">signal: traženi metod povrata razlikuje se od metoda originalne uplate.</li>
        </ul>
        <div class="callout" data-sr="<strong>Prag faze:</strong> prodavac vraća razliku pre nego je originalna uplata zaista klirirala." data-en="<strong>Threshold:</strong> the seller refunds the difference before the original payment has actually cleared."><strong>Prag faze:</strong> prodavac vraća razliku pre nego je originalna uplata zaista klirirala.</div>
      </article>

      <article class="phase bad">
        <h3 class="phase-title" data-sr="Faza 3 — Poništenje originalne uplate i gubitak" data-en="Phase 3 — Original payment reversed and loss">Faza 3 — Poništenje originalne uplate i gubitak</h3>
        <p data-sr="Originalna uplata se poništi — čekovni fond je prazan, kartica je osporena ili transfer je povučen reklamacijom. Prodavac je vratio razliku sopstvenim sredstvima i ostao bez obe uplate i bez robe." data-en="The original payment is reversed — the cheque bounces, the card is disputed, or the transfer is recalled. The seller refunded the difference from their own funds and is left with neither payment nor the goods.">Originalna uplata je poništena. Prodavac je ostao bez robe i bez oba iznosa — originala i vraćene razlike.</p>
        <div class="branch">
          <p><strong data-sr="Grananja u ovoj fazi" data-en="Branching at this phase">Grananja u ovoj fazi</strong></p>
          <ul class="bullets">
            <li><a href="chargeback-fraud.html" data-sr="Lažni chargeback (zloupotreba povrata plaćanja)" data-en="Chargeback fraud (friendly fraud)">Lažni chargeback (zloupotreba povrata plaćanja)</a></li>
            <li><a href="payment-link-scam.html" data-sr="Prevara s linkom za plaćanje" data-en="Payment link scam">Prevara s linkom za plaćanje</a></li>
          </ul>
        </div>
        <div class="callout" data-sr="<strong>Prag faze:</strong> povrat razlike je izvršen i novac je izgubljen — originalna uplata nikad nije bila stvarna." data-en="<strong>Threshold:</strong> the refund was made and money is lost — the original payment was never real."><strong>Prag faze:</strong> povrat razlike je izvršen i novac je izgubljen — originalna uplata nikad nije bila stvarna.</div>
      </article>
    </section>

    <section class="card">
      <h2 data-sr="Crvene zastavice" data-en="Red flags">Crvene zastavice</h2>
      <ul class="bullets">
        <li data-sr="uplata je veća od dogovorenog iznosa i kupac odmah traži povrat razlike." data-en="the payment is larger than agreed and the buyer immediately requests a refund of the difference.">uplata je veća od dogovorenog iznosa i kupac odmah traži povrat razlike.</li>
        <li data-sr="pritisak za hitnim povratom razlike pre nego je originalna uplata zaista na raspolaganju." data-en="pressure for urgent refund before the original payment is actually available.">pritisak za hitnim povratom razlike pre nego je originalna uplata zaista na raspolaganju.</li>
        <li data-sr="metod traženog povrata razlikuje se od originalne uplate — PayPal, instant transfer, kripto." data-en="the requested refund method differs from the original payment — PayPal, instant transfer, crypto.">metod traženog povrata razlikuje se od originalne uplate — PayPal, instant transfer, kripto.</li>
        <li data-sr="kupac koji ne pita o kvalitetu ili stanju robe možda je od početka planirao chargeback." data-en="a buyer who does not ask about quality or condition may have planned a chargeback from the start.">kupac koji ne pita o kvalitetu ili stanju robe možda je od početka planirao chargeback.</li>
        <li data-sr="uplata čekom ili transferom koji ne ide preko standardne platforme sa zaštitom kupca." data-en="payment by cheque or transfer rather than a standard platform with buyer protection.">uplata čekom ili transferom koji ne ide preko standardne platforme sa zaštitom kupca.</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Checklista: 10 pitanja pre povrata ikakve razlike" data-en="Checklist: 10 questions before refunding any difference">Checklista: 10 pitanja pre povrata ikakve razlike</h2>
      <ul class="bullets">
        <li data-sr="Da li je originalna uplata zaista klirirala i dostupna na mom računu — ne samo prikazana kao „na čekanju“?" data-en="Has the original payment truly cleared and is it available in my account — not just showing as 'pending'?">Da li je originalna uplata zaista klirirala i dostupna na mom računu — ne samo prikazana kao 'na čekanju'?</li>
        <li data-sr="Da li mi banka može potvrditi da je uplata konačna i ne može biti poništena?" data-en="Can the bank confirm the payment is final and cannot be reversed?">Da li mi banka može potvrditi da je uplata konačna i ne može biti poništena?</li>
        <li data-sr="Zašto kupac traži povrat drugom metodom nego originalnom uplatom?" data-en="Why is the buyer requesting a refund by a different method than the original payment?">Zašto kupac traži povrat drugom metodom nego originalnom uplatom?</li>
        <li data-sr="Da li postoji vremenski pritisak koji me sprečava da sačekam potvrdu originalne uplate?" data-en="Is there time pressure preventing me from waiting for the original payment confirmation?">Da li postoji vremenski pritisak koji me sprečava da sačekam potvrdu originalne uplate?</li>
        <li data-sr="Da li kupac ima prethodni pozitivan rejting na platformi na kojoj kupujemo?" data-en="Does the buyer have a prior positive rating on the platform where we are transacting?">Da li kupac ima prethodni pozitivan rejting na platformi na kojoj kupujemo?</li>
        <li data-sr="Da li postoji razumno objašnjenje zašto je tačno onaj iznos bio pogrešan?" data-en="Is there a reasonable explanation for why exactly that amount was wrong?">Da li postoji razumno objašnjenje zašto je tačno onaj iznos bio pogrešan?</li>
        <li data-sr="Da li bih mogao/la da vratim razliku istom metodom kojom je original primljen?" data-en="Could I refund the difference by the same method as the original was received?">Da li bih mogao/la da vratim razliku istom metodom kojom je original primljen?</li>
        <li data-sr="Da li kupac prihvata odlaganje povrata dok banka ne potvrdi konačnost originalne uplate?" data-en="Does the buyer accept delaying the refund until the bank confirms the finality of the original payment?">Da li kupac prihvata odlaganje povrata dok banka ne potvrdi konačnost originalne uplate?</li>
        <li data-sr="Da li postoji ikakav razlog zašto bi kompetentna osoba poslala pogrešan iznos?" data-en="Is there any reason why a competent person would send the wrong amount?">Da li postoji ikakav razlog zašto bi kompetentna osoba poslala pogrešan iznos?</li>
        <li data-sr="Da li sam konsultovao/la banku ili platformu o ovoj situaciji pre nego sam delovao/la?" data-en="Did I consult the bank or platform about this situation before acting?">Da li sam konsultovao/la banku ili platformu o ovoj situaciji pre nego sam delovao/la?</li>
      </ul>
    </section>

    <section class="card">
      <h2 data-sr="Ako sumnja krene: redosled poteza" data-en="If suspicion starts: action order">Ako sumnja krene: redosled poteza</h2>
      <ol class="steps">
        <li data-sr="ne vraćajte razliku dok banka ne potvrdi da je originalna uplata konačna i nepovratna." data-en="do not refund the difference until the bank confirms the original payment is final and irreversible.">ne vraćajte razliku dok banka ne potvrdi da je originalna uplata konačna i nepovratna.</li>
        <li data-sr="kontaktirajte banku direktno i pitajte da li je uplata čekom ili transferom konačna." data-en="contact the bank directly and ask whether the cheque or transfer payment is final.">kontaktirajte banku direktno i pitajte da li je uplata čekom ili transferom konačna.</li>
        <li data-sr="ako je uplata već poništena, prijavite prevaru banci i platformi na kojoj je transakcija obavljena." data-en="if the payment has already been reversed, report the fraud to the bank and the platform where the transaction occurred.">ako je uplata već poništena, prijavite prevaru banci i platformi na kojoj je transakcija obavljena.</li>
        <li data-sr="sačuvajte sve zapise komunikacije s kupcem i dokaz uplate za policijsku prijavu." data-en="preserve all communication records with the buyer and proof of payment for a police report.">sačuvajte sve zapise komunikacije s kupcem i dokaz uplate za policijsku prijavu.</li>
      </ol>
    </section>

    <section class="card">
      <h2 data-sr="Ako pokušavaš da pomogneš nekome" data-en="If you are helping someone">Ako pokušavaš da pomogneš nekome</h2>
      <div class="grid-2">
        <div class="phase">
          <div class="label" data-sr="Pitanja koja pomažu" data-en="Helpful questions">Pitanja koja pomažu</div>
          <ul class="bullets">
            <li data-sr="Da li je originalna uplata zaista dostupna ili je samo prikazana kao „na čekanju“?" data-en="Is the original payment truly available or just showing as pending?">Da li je originalna uplata zaista dostupna ili je samo prikazana kao 'na čekanju'?</li>
            <li data-sr="Da li kupac pritiska na hitan povrat razlike pre nego banka potvrdi uplatu?" data-en="Is the buyer pressing for urgent refund before the bank confirms the payment?">Da li kupac pritiska na hitan povrat razlike pre nego banka potvrdi uplatu?</li>
          </ul>
        </div>
        <div class="phase">
          <div class="label" data-sr="Rečenice koje rade" data-en="Phrases that work">Rečenice koje rade</div>
          <ul class="bullets">
            <li data-sr="Nikad ne vraćaj razliku dok banka ne potvrdi da je originalna uplata konačna — to može biti dan ili dva." data-en="Never refund the difference until the bank confirms the original payment is final — that may take a day or two.">Nikad ne vraćaj razliku dok banka ne potvrdi da je originalna uplata konačna — to može biti dan ili dva.</li>
            <li data-sr="Ako kupac ne prihvata čekanje na bankovnu potvrdu, to je definitivan znak prevare." data-en="If the buyer does not accept waiting for bank confirmation, that is a definitive fraud sign.">Ako kupac ne prihvata čekanje na bankovnu potvrdu, to je definitivan znak prevare.</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="card sources" id="sources">
      <h2 data-sr="Povezane prevare" data-en="Related scams">Povezane prevare</h2>
      <ul class="bullets">
        <li><a href="chargeback-fraud.html" data-sr="Lažni chargeback (zloupotreba povrata plaćanja)" data-en="Chargeback fraud (friendly fraud)">Lažni chargeback (zloupotreba povrata plaćanja)</a></li>
        <li><a href="card-not-present-fraud.html" data-sr="Zloupotreba kartice bez fizičkog prisustva" data-en="Card-not-present fraud">Zloupotreba kartice bez fizičkog prisustva</a></li>
        <li><a href="payment-link-scam.html" data-sr="Prevara s linkom za plaćanje" data-en="Payment link scam">Prevara s linkom za plaćanje</a></li>
        <li><a href="marketplace-scam.html" data-sr="Prevare na oglasnicima" data-en="Marketplace scams">Prevare na oglasnicima</a></li>
      </ul>
    </section>
  `
};
