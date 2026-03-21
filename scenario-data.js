window.SCENARIO_SYSTEM = {
  categories: [
    { id: "payments", sr: "Plaćanja i banke", en: "Payments & Banking" },
    { id: "identity", sr: "Krađa naloga i identiteta", en: "Account & Identity Theft" },
    { id: "business", sr: "Poslovne prevare", en: "Business Fraud" },
    { id: "investment", sr: "Investicije i kripto", en: "Investment & Crypto" },
    { id: "marketplace", sr: "Oglasi, kupovina i prodaja", en: "Marketplace & Shopping" },
    { id: "delivery", sr: "Dostava, putovanja i nekretnine", en: "Delivery, Travel & Property" },
    { id: "tech", sr: "Tehnička podrška i malver", en: "Tech Support & Malware" },
    { id: "extortion", sr: "Ucena i zaključavanje", en: "Extortion & Lockout" },
    { id: "charity", sr: "Donacije, fondovi i socijalna davanja", en: "Donations, Funds & Benefits" },
    { id: "seniors", sr: "Porodične i ciljane prevare", en: "Family & Targeted Scams" },
    { id: "other", sr: "Ostalo", en: "Other" }
  ],
  entries: [
    {
      slug: "scenario-romance-private-chat-request",
      url: "scenario-romance-private-chat-request.html",
      date: "2026-01-07",
      category: "investment",
      related_scam: "romantic-scam",
      title_sr: "Instagram → privatni čet → rok → prvi zahtev",
      title_en: "Instagram → private chat → deadline → first request",
      summary_sr: "Kontakt prelazi van platforme, bliskost se ubrzava, a prvi novčani zahtev ulazi kao mala i hitna pomoć.",
      summary_en: "The contact moves off-platform, intimacy is accelerated, and the first money request enters as a small urgent favor.",
      formula_sr: "Mreža → privatni kanal → ubrzana bliskost → rok → mala pomoć → prvi transfer.",
      formula_en: "Social app → private channel → accelerated intimacy → deadline → small favor → first transfer.",
      threshold_sr: "Prag: prelazak na privatni kanal i prihvatanje prvog novčanog zahteva kao male usluge.",
      threshold_en: "Threshold: moving to a private channel and accepting the first money request as a small favor.",
      overview_sr: [
        "Ovaj scenario pokazuje rani trenutak romantične prevare: odnos još izgleda nov, ali je tempo već podešen tako da se privatni kanal i hitnost predstave kao prirodan nastavak poznanstva.",
        "Prvi zahtev nije velik i zato služi kao test. Ako prođe bez otpora, napadač dobija potvrdu da emotivni ton već može da nosi finansijsku radnju."
      ],
      overview_en: [
        "This scenario shows the early moment of a romance scam: the relationship still looks new, but the pace is already set so that a private channel and urgency feel like a natural continuation of the contact.",
        "The first request is not large, and that is exactly why it works as a test. If it passes without resistance, the attacker gets confirmation that emotional tone can already carry a financial action."
      ],
      signals_sr: [
        "Prelazak na privatni kanal dolazi veoma rano i predstavlja se kao praktična sitnica.",
        "Video-poziv ili proverljiv kontakt stalno se odlažu, ali emocionalni ton brzo raste.",
        "Rok ulazi pre nego što odnos dobije normalan ritam i proverljivost.",
        "Zahtev se pakuje kao mala pomoć, a ne kao otvorena finansijska tražnja.",
        "Meta se gura da reaguje iz bliskosti, a ne iz proverene činjenice."
      ],
      signals_en: [
        "The move to a private channel happens very early and is framed as a practical detail.",
        "A video call or other verifiable contact keeps slipping, while emotional tone rises quickly.",
        "Urgency enters before the relationship gains a normal rhythm and any verification.",
        "The request is packaged as a small favor rather than an explicit financial demand.",
        "The target is pushed to react from closeness rather than from verified facts."
      ],
      transcript_sr: [
        { side: "them", text: "Lakše mi je privatno, ovde je gužva." },
        { side: "me", text: "Može, ali voleo bih kratak video-poziv." },
        { side: "them", text: "Sutra. Danas imam hitan problem, treba mi mala pomoć." },
        { side: "me", text: "Koji problem?" },
        { side: "them", text: "Rok je večeras, samo jedna taksa." }
      ],
      transcript_en: [
        { side: "them", text: "It is easier for me in private, this app is crowded." },
        { side: "me", text: "Okay, but I would like a short video call." },
        { side: "them", text: "Tomorrow. Today I have an urgent problem and I need a small favor." },
        { side: "me", text: "What problem?" },
        { side: "them", text: "The deadline is tonight, it is just one fee." }
      ],
      bridge_sr: "Ovaj scenario pripada romantičnoj prevari: cilj nije jedna poruka, već odnos koji emotivnu bliskost pretvara u finansijsku poslušnost. Kada prvi zahtev prođe, priča se lako širi na paket, put, lečenje, dokumenta ili novu krizu.",
      bridge_en: "This scenario belongs to a romance scam: the goal is not one message, but a relationship that turns emotional closeness into financial compliance. Once the first request passes, the story easily expands into a parcel, travel, medical cost, document problem, or a new emergency.",
      source_note_sr: "Scenario je urednički rekonstruisan iz javno poznatih obrazaca romantičnih prevara i interne case biblioteke sajta.",
      source_note_en: "This scenario is an editorial reconstruction based on publicly known romance scam patterns and the site's internal case library."
    },
    {
      slug: "scenario-marketplace-courier-link",
      url: "scenario-marketplace-courier-link.html",
      date: "2026-01-07",
      category: "marketplace",
      related_scam: "marketplace-scam",
      title_sr: "Oglas → kupac šalje link za kurira → forma traži karticu",
      title_en: "Listing → buyer sends a courier link → form asks for a card",
      summary_sr: "Naizgled obična prodaja brzo prelazi u lažni logistički korak, a link za kurira zapravo uvodi formu za karticu ili OTP.",
      summary_en: "An ordinary sale quickly turns into a fake logistics step, and the courier link actually introduces a card or OTP form.",
      formula_sr: "Oglas → privatni dogovor → lažni kurir → forma za karticu → naplata ili takeover.",
      formula_en: "Listing → private deal → fake courier → card form → charge or takeover.",
      threshold_sr: "Prag: otvaranje linka i unos podataka o kartici ili potvrde na lažnoj stranici dostave.",
      threshold_en: "Threshold: opening the link and entering card details or a confirmation on the fake delivery page.",
      overview_sr: [
        "Scenario radi zato što zadržava okvir obične kupoprodaje. Umesto otvorene prevare, druga strana uvodi navodno praktičan korak oko dostave i naplate.",
        "Najveća greška se dešava kada meta prihvati da logistika ide van platforme i da prodavac treba da potvrdi karticom prijem novca ili kurirsku proceduru."
      ],
      overview_en: [
        "This scenario works because it stays inside the frame of a normal sale. Instead of looking like an obvious scam, the other side introduces a supposedly practical delivery and payment step.",
        "The biggest mistake happens when the target accepts that logistics should happen off-platform and that the seller needs to confirm money receipt or courier procedure with a card."
      ],
      signals_sr: [
        "Kupac gura razgovor ka linku pre nego što se završi normalan dogovor na platformi.",
        "Link se predstavlja kao kurirska potvrda, ali traži karticu ili drugi osetljiv podatak.",
        "Druga strana objašnjava da prodavac mora da potvrdi prijem novca kroz formu.",
        "Žurba se uvodi tako da se normalna logika prodaje potisne pod izgovorom da kurir čeka.",
        "Poruka koristi ton rutine, iako tražena radnja nema smisla za običnog prodavca."
      ],
      signals_en: [
        "The buyer pushes the conversation toward a link before a normal deal is finished on the platform.",
        "The link is presented as a courier confirmation, but it asks for a card or another sensitive detail.",
        "The other side explains that the seller must confirm receipt of money through a form.",
        "Urgency is introduced so normal sale logic is pushed aside under the excuse that the courier is waiting.",
        "The message uses routine language even though the requested action makes no sense for a normal seller."
      ],
      transcript_sr: [
        { side: "them", text: "Kurir je spreman, evo link za potvrdu." },
        { side: "me", text: "Traži karticu." },
        { side: "them", text: "Standardno, samo potvrda." }
      ],
      transcript_en: [
        { side: "them", text: "The courier is ready, here is the confirmation link." },
        { side: "me", text: "It asks for my card." },
        { side: "them", text: "That is standard, it is only a confirmation." }
      ],
      bridge_sr: "Ovaj scenario pripada prevari na oglasnicima: šteta ne nastaje iz lažne prodavnice, već iz direktnog razgovora koji se namerno izmešta van zaštite platforme i pretvara u lažni payment ili delivery korak.",
      bridge_en: "This scenario belongs to marketplace fraud: the damage does not come from a fake webshop, but from a direct conversation that is deliberately moved outside platform protection and turned into a fake payment or delivery step.",
      source_note_sr: "Scenario je urednički rekonstruisan iz javno poznatih obrazaca prevara na oglasnicima i interne case biblioteke sajta.",
      source_note_en: "This scenario is an editorial reconstruction based on publicly known marketplace fraud patterns and the site's internal case library."
    },
    {
      slug: "scenario-phishing-account-suspension",
      url: "scenario-phishing-account-suspension.html",
      date: "2026-01-07",
      category: "identity",
      related_scam: "phishing",
      title_sr: "Imejl o suspenziji naloga → lažna prijava",
      title_en: "Account suspension email → fake login",
      summary_sr: "Poruka imitira bezbednosni incident i vodi ka stranici koja traži prijavu kao navodni uslov za deblokadu.",
      summary_en: "The message imitates a security incident and leads to a page that asks for login as a supposed condition for restoring access.",
      formula_sr: "Bezbednosni alarm → klik na link → lažna prijava → unos podataka → takeover.",
      formula_en: "Security alarm → click the link → fake login → enter data → takeover.",
      threshold_sr: "Prag: unos korisničkog imena, lozinke ili dodatnog koda na stranici koju kontroliše napadač.",
      threshold_en: "Threshold: entering a username, password, or extra code on a page controlled by the attacker.",
      overview_sr: [
        "Ovaj scenario pokazuje osnovni fišing mehanizam u čistom obliku. Autoritet i hitnost ne služe da objasne problem, već da skrate proveru domena i same radnje.",
        "Kada meta prihvati da problem mora da se rešava baš preko ponuđenog linka, napadač dobija trenutak u kojem žrtva sama predaje pristup."
      ],
      overview_en: [
        "This scenario shows the core phishing mechanism in its clean form. Authority and urgency are not there to explain the problem, but to shorten domain checking and action verification.",
        "Once the target accepts that the issue must be solved through the provided link, the attacker gets the moment in which the victim hands over access personally."
      ],
      signals_sr: [
        "Poruka uvodi blokadu ili suspenziju kao razlog da se klik uradi odmah.",
        "Link otvara prijavu umesto da korisnik ode na zvaničan sajt ili aplikaciju.",
        "Tema bezbednosti se koristi da bi se normalna provera predstavila kao gubitak vremena.",
        "Posle unosa podataka često dolazi još jedan korak, kao što je OTP ili potvrda na telefonu.",
        "Dizajn može da liči na pravi servis, ali logika radnje ostaje sumnjiva."
      ],
      signals_en: [
        "The message introduces a lock or suspension as the reason to click immediately.",
        "The link opens a login page instead of sending the user to the official site or app.",
        "Security language is used to frame normal verification as a waste of time.",
        "After entering credentials, another step often follows, such as an OTP or a phone confirmation.",
        "The design may resemble the real service, but the logic of the action remains suspicious."
      ],
      transcript_sr: [
        { side: "them", text: "Nalog suspendovan. Potvrdi u roku 30 minuta." },
        { side: "me", text: "Link traži login." },
        { side: "them", text: "Verifikacija identiteta." }
      ],
      transcript_en: [
        { side: "them", text: "Account suspended. Confirm within 30 minutes." },
        { side: "me", text: "The link asks me to log in." },
        { side: "them", text: "Identity verification." }
      ],
      bridge_sr: "Ovaj scenario pripada fišingu: prag nije sama poruka, nego trenutak kada meta unosi podatke u lažnu infrastrukturu. Posle toga tok lako prelazi u preuzimanje naloga, reset oporavka ili dalji zahtev za kodom.",
      bridge_en: "This scenario belongs to phishing: the threshold is not the message itself, but the moment when the target enters data into fake infrastructure. After that, the flow easily turns into account takeover, recovery reset, or a further code request.",
      source_note_sr: "Scenario je urednički rekonstruisan iz javno poznatih obrazaca fišinga i interne case biblioteke sajta.",
      source_note_en: "This scenario is an editorial reconstruction based on publicly known phishing patterns and the site's internal case library."
    },
    {
      slug: "scenario-smishing-parcel-hold",
      url: "scenario-smishing-parcel-hold.html",
      date: "2026-01-07",
      category: "identity",
      related_scam: "smishing",
      title_sr: "SMS o zadržanoj pošiljci → kartica u formi",
      title_en: "Parcel-on-hold SMS → card details in a form",
      summary_sr: "Kratka SMS poruka koristi temu dostave i uvodi mobilni klik ka formi koja traži karticu, CVV ili potvrdu.",
      summary_en: "A short SMS uses a delivery theme and pushes a mobile click toward a form asking for a card, CVV, or confirmation.",
      formula_sr: "SMS + kratki rok → link na telefonu → forma za karticu → naplata ili dalji pritisak.",
      formula_en: "SMS + short deadline → phone link → card form → charge or further pressure.",
      threshold_sr: "Prag: unos kartice, CVV-a ili autorizacije na mobilnoj stranici koja glumi dostavu.",
      threshold_en: "Threshold: entering the card, CVV, or an authorization on a mobile page that impersonates delivery.",
      overview_sr: [
        "Smishing skraćuje priču do minimuma. Nema dužeg ubeđivanja, već kratka poruka koja pogađa rutinu i oslanja se na to da se link otvori bez razmišljanja.",
        "Tema pošiljke radi zato što meta ne očekuje veliku prevaru, nego sitan administrativni korak koji mora brzo da se završi na telefonu."
      ],
      overview_en: [
        "Smishing compresses the story to the minimum. There is no long persuasion, just a short message that hits routine and relies on the link being opened without reflection.",
        "The parcel theme works because the target is not expecting a major scam, but a small administrative step that must be finished quickly on the phone."
      ],
      signals_sr: [
        "Poruka je veoma kratka, ali odmah uvodi problem i link.",
        "Tema dostave koristi sitan trošak ili potvrdu kao izgovor za unos kartice.",
        "Link se otvara na telefonu, gde je domen teže proveriti.",
        "Radnja se predstavlja kao mala doplata, ali forma traži više podataka nego što bi bilo razumno.",
        "Posle prve greške često sledi još jedan korak, kao što su OTP ili lažni refund."
      ],
      signals_en: [
        "The message is very short, but it introduces the problem and the link immediately.",
        "The delivery theme uses a small fee or confirmation as an excuse to ask for the card.",
        "The link opens on the phone, where the domain is harder to verify.",
        "The action is framed as a small extra charge, but the form asks for more data than would be reasonable.",
        "After the first mistake, another step often follows, such as an OTP or a fake refund."
      ],
      transcript_sr: [
        { side: "them", text: "Pošiljka zadržana. Potvrdi: link." },
        { side: "me", text: "Traži karticu i CVV." }
      ],
      transcript_en: [
        { side: "them", text: "Parcel on hold. Confirm here: link." },
        { side: "me", text: "It asks for my card and CVV." }
      ],
      bridge_sr: "Ovaj scenario pripada smišingu: kanal je SMS, tempo je kraći nego u imejlu, a greška se često dešava na telefonu gde su domen i logika radnje manje vidljivi.",
      bridge_en: "This scenario belongs to smishing: the channel is SMS, the pace is shorter than in email, and the mistake often happens on the phone where the domain and action logic are less visible.",
      source_note_sr: "Scenario je urednički rekonstruisan iz javno poznatih obrazaca SMS prevara i interne case biblioteke sajta.",
      source_note_en: "This scenario is an editorial reconstruction based on publicly known SMS fraud patterns and the site's internal case library."
    },
    {
      slug: "scenario-fake-call-safe-account",
      url: "scenario-fake-call-safe-account.html",
      date: "2026-01-08",
      category: "payments",
      related_scam: "fake-call-scam",
      title_sr: "Poziv policija → tajnost → siguran račun",
      title_en: "Police call → secrecy → safe account",
      summary_sr: "Poziv koristi navodnu istragu da izoluje metu i prebaci je sa provere činjenica na transfer novca pod autoritetom.",
      summary_en: "The call uses a supposed investigation to isolate the target and move them from fact-checking to money transfer under authority.",
      formula_sr: "Autoritet + tajnost → zabrana provere → siguran račun → sopstveni transfer kao navodna zaštita.",
      formula_en: "Authority + secrecy → no verification → safe account → self-initiated transfer as supposed protection.",
      threshold_sr: "Prag: prihvatanje da se novac prebaci na navodno siguran račun pod instrukcijama iz poziva.",
      threshold_en: "Threshold: accepting that money should be transferred to a supposed safe account under instructions given during the call.",
      overview_sr: [
        "Ovaj scenario ne krade podatke kroz formu, već upravlja metom u realnom vremenu. Poziv drži ritam, izoluje žrtvu i pretvara sumnju u poslušnost prema navodnoj istrazi.",
        "Tajnost je ključni alat. Kada meta prihvati da ne sme nikome da kaže i ne sme da prekine poziv, napadač dobija skoro potpunu kontrolu nad tempom i odlukama."
      ],
      overview_en: [
        "This scenario does not steal data through a form, but controls the target in real time. The call keeps the pace, isolates the victim, and turns doubt into obedience to a supposed investigation.",
        "Secrecy is the key tool. Once the target accepts that they must tell nobody and must not end the call, the attacker gains near-total control over pace and decisions."
      ],
      signals_sr: [
        "Poziv uvodi istragu ili službeni postupak kao razlog za hitnost i tajnost.",
        "Meta se odvaja od normalne provere drugim kanalom ili razgovorom sa porodicom.",
        "Transfer se predstavlja kao zaštita sopstvenih sredstava, a ne kao klasična uplata.",
        "Pozivalac insistira da linija ostane otvorena do završetka radnje.",
        "Autoritet služi da apsurdna radnja izgleda kao službena procedura."
      ],
      signals_en: [
        "The call introduces an investigation or official procedure as the reason for urgency and secrecy.",
        "The target is pulled away from normal verification through another channel or a conversation with family.",
        "The transfer is presented as protection of the victim's own funds rather than as a standard payment.",
        "The caller insists that the line stay open until the action is completed.",
        "Authority is used to make an absurd action look like an official procedure."
      ],
      transcript_sr: [
        { side: "them", text: "U istrazi ste, ovo je poverljivo." },
        { side: "them", text: "Sredstva prebacite na siguran račun da ih zaštitimo." },
        { side: "me", text: "Zašto bih prebacivao svoj novac?" }
      ],
      transcript_en: [
        { side: "them", text: "You are part of an investigation, this is confidential." },
        { side: "them", text: "Move the funds to a safe account so we can protect them." },
        { side: "me", text: "Why would I move my own money?" }
      ],
      bridge_sr: "Ovaj scenario pripada lažnim pozivima, ali grana direktno ka payment šteti. Umesto koda ili linka, meta sama izvršava transfer verujući da time učestvuje u službenoj zaštiti sredstava.",
      bridge_en: "This scenario belongs to fake calls, but it branches directly into payment damage. Instead of a code or a link, the target performs the transfer personally while believing they are taking part in an official protection process.",
      source_note_sr: "Scenario je urednički rekonstruisan iz javno poznatih obrazaca lažnih poziva i interne case biblioteke sajta.",
      source_note_en: "This scenario is an editorial reconstruction based on publicly known fake-call patterns and the site's internal case library."
    },
    {
      slug: "scenario-advance-fee-release-loop",
      url: "scenario-advance-fee-release-loop.html",
      date: "2026-01-07",
      category: "charity",
      related_scam: "advance-fee-fraud",
      title_sr: "Oslobađanje sredstava → taksa → nova taksa",
      title_en: "Funds release → fee → another fee",
      summary_sr: "Navodno dostupna sredstva stoje iza prve male takse, ali se posle svake uplate pojavljuje novi uslov koji menja ime, ne i funkciju.",
      summary_en: "Supposedly available funds sit behind a first small fee, but after every payment a new condition appears that changes its name, not its function.",
      formula_sr: "Navodna isplata → mala taksa → novi uslov → još jedna uplata → beskrajni final step.",
      formula_en: "Supposed payout → small fee → new condition → another payment → endless final step.",
      threshold_sr: "Prag: prihvatanje da se uplata unapred smatra razumnim uslovom za oslobađanje već obećanih sredstava.",
      threshold_en: "Threshold: accepting that an upfront payment is a reasonable condition for releasing funds that were already promised.",
      overview_sr: [
        "Scenario radi na logici zaključanog dobitka ili oslobađanja sredstava. Meta veruje da novac već postoji i da ga od cilja deli samo još jedna formalnost.",
        "Prva uplata je presudna zato što menja psihologiju odluke. Posle nje napadač samo menja naziv naknade i održava iluziju da je izlaz na dohvat ruke."
      ],
      overview_en: [
        "This scenario works on the logic of a locked payout or the release of funds. The target believes the money already exists and that only one more formality stands between them and the result.",
        "The first payment is decisive because it changes the psychology of the decision. After that, the attacker only changes the name of the fee and keeps the illusion that the exit is within reach."
      ],
      signals_sr: [
        "Isplata ili oslobađanje sredstava stalno su blizu, ali nikada ne dolaze bez nove uplate.",
        "Razlog za uplatu se menja od takse do depozita ili verifikacije, ali funkcija ostaje ista.",
        "Svaka nova uplata se predstavlja kao poslednji korak u nizu.",
        "Meta dobija osećaj da mora da završi ono što je već počela i platila.",
        "Nijedan prethodni fee ne smanjuje sledeći, već samo otvara novi uslov."
      ],
      signals_en: [
        "The payout or release of funds is always close, but it never arrives without another payment.",
        "The reason for the payment changes from fee to deposit or verification, but the function stays the same.",
        "Every new payment is framed as the last step in the sequence.",
        "The target gets the feeling that they must finish what they have already started and already paid for.",
        "No previous fee reduces the next one; it only opens a new condition."
      ],
      transcript_sr: [
        { side: "them", text: "Sredstva čekaju, treba mala taksa." },
        { side: "me", text: "Uplatio sam." },
        { side: "them", text: "Sad treba depozit radi verifikacije." }
      ],
      transcript_en: [
        { side: "them", text: "The funds are waiting, a small fee is required." },
        { side: "me", text: "I paid it." },
        { side: "them", text: "Now a verification deposit is required." }
      ],
      bridge_sr: "Ovaj scenario pripada advance-fee modelu: stvarna roba, nagrada ili isplata nisu cilj, već mamac koji opravdava prvu uplatu unapred. Posle toga tok lako prelazi u poziv pritiska ili lažni recovery.",
      bridge_en: "This scenario belongs to the advance-fee model: the actual prize, goods, or payout are not the goal, but the bait that justifies the first upfront payment. After that, the flow easily moves into a pressure call or fake recovery.",
      source_note_sr: "Scenario je urednički rekonstruisan iz javno poznatih advance-fee obrazaca i interne case biblioteke sajta.",
      source_note_en: "This scenario is an editorial reconstruction based on publicly known advance-fee patterns and the site's internal case library."
    },
    {
      slug: "scenario-crypto-withdrawal-unlock",
      url: "scenario-crypto-withdrawal-unlock.html",
      date: "2026-01-08",
      category: "investment",
      related_scam: "crypto-scam",
      title_sr: "Povlačenje → AML fee → unlock",
      title_en: "Withdrawal → AML fee → unlock",
      summary_sr: "Lažni profit postoji dok je na ekranu, ali kada meta pokuša da povuče novac, platforma uvodi fee kao uslov za oslobađanje sredstava.",
      summary_en: "The fake profit exists while it stays on the screen, but once the target tries to withdraw money, the platform introduces a fee as a condition for releasing funds.",
      formula_sr: "Lažni profit → pokušaj povlačenja → AML fee → unlock priča → nova naknada.",
      formula_en: "Fake profit → withdrawal attempt → AML fee → unlock story → another charge.",
      threshold_sr: "Prag: prihvatanje da se dodatna uplata smatra normalnim uslovom za povlačenje sopstvenog profita.",
      threshold_en: "Threshold: accepting that an extra payment is a normal condition for withdrawing one's own profit.",
      overview_sr: [
        "Ovaj scenario pokazuje gde se kripto investiciona prevara najjasnije otkriva. Uplata na platformu prolazi lako, ali izlaz se pretvara u proceduru sa fee uslovima koji se stalno obnavljaju.",
        "Napadač računa na to da je meta već emotivno i finansijski vezana za prikazani profit. Zato fee izgleda kao poslednja prepreka, a ne kao znak da profita zapravo nema."
      ],
      overview_en: [
        "This scenario shows the point where a crypto investment scam becomes the clearest. Depositing into the platform is easy, but the exit turns into a procedure with fee conditions that keep renewing themselves.",
        "The attacker relies on the fact that the target is already emotionally and financially attached to the displayed profit. That is why the fee looks like the last obstacle rather than proof that the profit is not real."
      ],
      signals_sr: [
        "Platforma prikazuje rast bez problema, ali povlačenje traži dodatni novac.",
        "Naknada se objašnjava regulatornim, AML ili verifikacionim rečnikom.",
        "Posle prve uplate za povlačenje dolazi još jedan novi uslov.",
        "Rok se uvodi tačno kada meta želi da izađe iz priče.",
        "Podrška ne rešava problem, već brani logiku da se isplata otključava novom uplatom."
      ],
      signals_en: [
        "The platform shows growth without friction, but the withdrawal requires extra money.",
        "The fee is explained through regulatory, AML, or verification language.",
        "After the first withdrawal payment, another new condition arrives.",
        "A deadline appears exactly when the target wants to leave the scheme.",
        "Support does not solve the problem; it defends the logic that the payout is unlocked by another payment."
      ],
      transcript_sr: [
        { side: "me", text: "Hoću da povučem." },
        { side: "them", text: "AML fee je obavezan, posle unlock." },
        { side: "me", text: "Zašto fee za povlačenje?" }
      ],
      transcript_en: [
        { side: "me", text: "I want to withdraw." },
        { side: "them", text: "The AML fee is mandatory, then the account will unlock." },
        { side: "me", text: "Why is there a fee for withdrawal?" }
      ],
      bridge_sr: "Ovaj scenario pripada kripto investicionoj prevari, ali se u završnici ponaša kao advance-fee model. Platforma služi da izgradi profit na ekranu, a fee logika služi da izvuče još uplata bez stvarnog izlaza.",
      bridge_en: "This scenario belongs to a crypto investment scam, but in the final phase it behaves like an advance-fee model. The platform exists to build profit on the screen, and the fee logic exists to extract more payments without any real exit.",
      source_note_sr: "Scenario je urednički rekonstruisan iz javno poznatih obrazaca kripto investicionih prevara i interne case biblioteke sajta.",
      source_note_en: "This scenario is an editorial reconstruction based on publicly known crypto investment scam patterns and the site's internal case library."
    }
  ]
};
