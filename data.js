// data.js
// Central registry for all scam pages (single source of truth).
// render.js reads: title, subtitle, hasPage, overlaps (and ignores extra fields safely).

window.SCAM_DB = {
  "romantic-scam": {
    core: true,
    title: { sr: "Romantične prevare", en: "Romance scams" },
    title_en: "Romance scams",
    title_sr: "Romantične prevare",
    summary_en: "A romance scam still begins with trust, attention, and emotional dependence, but today it is often reinforced with generated photos, polished voice notes, or fake video checks that make the relationship feel more real. The goal does not change: isolate the target from independent verification and turn intimacy into serial payments, sensitive data sharing, or an investment angle.",
    summary_sr: "Romantična prevara i dalje počinje pažnjom, poverenjem i emotivnim vezivanjem, ali danas često koristi generisane fotografije, ubedljivije glasovne poruke ili lažne video-provere da odnos deluje stvarnije. Cilj ostaje isti: da se žrtva odvoji od nezavisne provere i da se bliskost pretvori u seriju uplata, slanje podataka ili investicionu priču.",
    subtitle: {
      sr: "Odnos kao alat: prvo poverenje, zatim kriza, uplata, ponekad i prelaz u investicionu priču.",
      en: "Relationship as the tool: trust first, then crisis, payment, and sometimes a turn into an investment story."
    },
    hasPage: true,
    tags: ["odnos", "manipulacija"],
    overlaps: ["crypto-scam", "advance-fee-fraud", "sextortion-scam"],
    sources: [
      { name: "FTC – Romance Scams" },
      { name: "Europol / Interpol – online dating fraud guidance" }
    ]
  },

  "crypto-scam": {
    core: true,
    title: { sr: "Kripto investiciona prevara", en: "Crypto investment scam" },
    title_en: "Crypto investment scam",
    title_sr: "Kripto investiciona prevara",
    summary_en: "The pitch promises quick profit on a fake platform. They ask for deposits, then block withdrawals behind \"verification\", \"tax\", or \"fees\". Escalation is a fee series while the exit stays locked. Signal: funding is easy, cashing out demands another payment.",
    summary_sr: "Ulaz je brz profit prikazan na lažnoj platformi. Traže depozit, zatim blokiraju isplatu iza \"verifikacije\", \"poreza\" ili \"naknada\". Eskalacija je serija taksi dok povlačenje ostaje zaključano. Signal: uplata prolazi lako, isplata traži novu uplatu.",
    subtitle: {
      sr: "Profit kao mamac → lažna platforma → rast uloga → blokada povlačenja → takse kao uslov.",
      en: "Profit bait → fake platform → increasing stakes → withdrawals blocked → fees as a condition."
    },
    hasPage: true,
    tags: ["investicije"],
    overlaps: ["fake-call-scam", "phishing", "pig-butchering", "advance-fee-fraud", "recovery-scam", "investment-seminar"],
    sources: [
      { name: "FTC – Investment Scams" },
      { name: "FBI IC3 – Cryptocurrency Scams" }
    ]
  },

  "fake-call-scam": {
    core: true,
    title: { sr: "Lažni pozivi", en: "Fake calls" },
    title_en: "Fake calls",
    title_sr: "Lažni pozivi",
    summary_en: "A fake call is the live control channel of the scam: the caller sets the pace, blocks verification, and pushes the target toward a code, payment, approval, or remote-access step while the line stays open. Today that pressure can be reinforced with a cloned voice, a more convincing script, or follow-up messages that make the call feel official, but the core remains the same: keep the victim inside the conversation until they act.",
    summary_sr: "Lažni poziv je kanal upravljanja prevarom u realnom vremenu: pozivalac diktira tempo, zatvara proveru i gura metu ka kodu, uplati, potvrdi ili daljinskom pristupu dok linija ostaje otvorena. Danas taj pritisak često pojačavaju kloniran glas, ubedljiviji scenario ili prateće poruke koje poziv čine službenijim, ali suština ostaje ista: držati žrtvu u razgovoru dok ne uradi traženu radnju.",
    subtitle: {
      sr: "Poziv drži tempo i zatvara proveru: autoritet, hitnost i jedna pogrešna radnja.",
      en: "The call controls pace and shuts down verification: authority, urgency, and one wrong action."
    },
    hasPage: true,
    tags: ["autoritet"],
    overlaps: ["crypto-scam", "phishing", "tech-support-scam", "account-takeover", "impersonation-scam"],
    sources: [
      { name: "UK NCSC – Guidance" },
      { name: "FBI IC3 – Impersonation scams" }
    ]
  },

  "marketplace-scam": {
    core: true,
    title: { sr: "Prevare na oglasnicima", en: "Marketplace scams" },
    title_en: "Marketplace scams",
    title_sr: "Prevare na oglasnicima",
    summary_en: "A listing deal turns fraudulent when the conversation leaves the platform and becomes a private chat about deposits, courier arrangements, buyer protection, or payment links. Unlike a fake webshop, this pattern depends on direct one-to-one negotiation and the trust created by a \"normal\" listing conversation. Signal: the other side pushes you off-platform and turns a simple buy-sell exchange into a link, fee, or verification step.",
    summary_sr: "Dogovor sa oglasa postaje prevara kada razgovor izađe van platforme i pretvori se u privatni čet o depozitu, kuriru, zaštiti kupca ili linku za plaćanje. Za razliku od lažne internet prodavnice, ovde je ključ direktna komunikacija dva naloga i poverenje koje nastaje kroz običan dogovor o kupoprodaji. Signal: druga strana insistira na razgovoru van platforme i jednostavnu kupoprodaju pretvara u link, naknadu ili korak verifikacije.",
    subtitle: {
      sr: "Oglas + privatni čet + izmeštanje van platforme = prag za uplatu ili krađu podataka.",
      en: "Listing + private chat + moving off-platform = the threshold for payment or data theft."
    },
    hasPage: true,
    tags: ["oglasi"],
    overlaps: ["phishing", "smishing", "advance-fee-fraud", "fake-delivery", "marketplace-meetup-robbery"],
    sources: [
      { name: "Platform safety guidance (Meta/marketplaces)" },
      { name: "National CERT Srbija – izveštaji o incidentima" }
    ]
  },

  "template-scam": {
    title: { sr: "Šablon stranice", en: "Page template" },
    title_en: "Page template",
    title_sr: "Šablon stranice",
    summary_en: "Internal page used as a template for adding new scam pages. It is not a scam model; it exists for editing and layout consistency. Signal: treat it as a build artifact, not public catalog content.",
    summary_sr: "Interna stranica koja služi kao šablon za dodavanje novih prevara. Kartica nije model prevare; služi za uređivanje i dosledan layout. Signal: tretiraj kao pomoćni alat, ne kao sadržaj kataloga.",
    subtitle: {
      sr: "Template za nove stranice prevara (interna strana za editovanje).",
      en: "Template for new scam pages (internal editing page)."
    },
    hasPage: false,
    overlaps: [],
    sources: []
  },

  "phishing": {
    core: true,
    title: { sr: "Fišing", en: "Phishing" },
    title_en: "Phishing",
    title_sr: "Fišing",
    summary_en: "Phishing still tries to land you on a fake login, payment, or verification page, but today the lure is often sharper because the message can sound more natural, more personal, and more official than before. Artificial intelligence does not change the target action; it makes the fake email, text, or chat easier to trust long enough for the victim to type a password, card detail, code, or token.",
    summary_sr: "Fišing i dalje pokušava da vas dovede na lažnu prijavu, naplatu ili verifikaciju, ali danas je mamac često jači jer poruka može zvučati prirodnije, ličnije i službenije nego ranije. Veštačka inteligencija ne menja ciljnu radnju; ona čini lažni imejl, poruku ili čet dovoljno ubedljivim da žrtva unese lozinku, karticu, kod ili token.",
    subtitle: {
      sr: "Lažni link ili forma kao prag: unos podataka otvara put ka nalogu, kartici ili sledećoj potvrdi.",
      en: "Fake link or form as the threshold: data entry opens the path to the account, card, or the next approval step."
    },
    hasPage: true,
    tags: ["krađa podataka"],
    overlaps: ["smishing", "vishing", "account-takeover", "crypto-scam", "marketplace-scam", "fake-delivery"],
    sources: [
      { name: "CISA – Recognize and Report Phishing", url: "https://www.cisa.gov/avoid-phishing-attempts" },
      { name: "UK NCSC – Phishing attacks: dealing with suspicious messages", url: "https://www.ncsc.gov.uk/guidance/phishing" }
    ]
  },

  "oauth-consent-phishing": {
    title: { sr: "Fišing kroz dozvole za pristup nalogu", en: "OAuth consent phishing" },
    title_en: "OAuth consent phishing",
    title_sr: "Fišing kroz dozvole za pristup nalogu",
    summary_en: "The attacker sends a document or app link that opens a legitimate-looking consent screen and asks the user to approve access to mail, files, or profile data. The damage is silent because no password theft is needed. Signal: an unknown app asking for broad access just to open a file or complete a workflow.",
    summary_sr: "Napadač šalje dokument ili link ka aplikaciji koji otvara uverljiv ekran dozvola i traži od korisnika da odobri pristup pošti, fajlovima ili profilu. Šteta je tiha jer krađa lozinke nije potrebna. Signal: nepoznata aplikacija traži širok pristup samo da bi otvorila fajl ili završila workflow.",
    subtitle: {
      sr: "Poznat ekran dozvola, nepoznata aplikacija: jedan klik može dati pristup pošti i dokumentima.",
      en: "A familiar consent screen and an unknown app: one click can expose mail and documents."
    },
    hasPage: true,
    tags: ["krađa podataka", "cloud"],
    overlaps: ["phishing", "email-account-compromise", "account-takeover", "fake-hr-scam", "business-email-compromise"],
    sources: [
      { name: "CISA – Protecting Tokens and Assertions from Forgery, Theft, and Misuse", url: "https://www.cisa.gov/resources-tools/resources/protecting-tokens-and-assertions-forgery-theft-and-misuse" },
      { name: "Microsoft Entra – Protect against consent phishing", url: "https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/protect-against-consent-phishing" }
    ]
  },

  "quishing": {
    title: { sr: "Fišing preko QR koda", en: "Quishing" },
    title_en: "Quishing",
    title_sr: "Fišing preko QR koda",
    summary_en: "Quishing uses a QR code as the entry path into a fake login, payment, or approval page on the phone. Unlike ordinary phishing, the target often sees almost no URL context before the page opens, which makes verification weaker and reactions faster. Signal: a QR code asks for sign-in, card entry, or confirmation of an action that should happen only inside the official app or website.",
    summary_sr: "Quishing koristi QR kod kao ulaz u lažnu prijavu, naplatu ili stranicu za potvrdu na telefonu. Za razliku od običnog fišinga, meta pre otvaranja stranice vidi vrlo malo konteksta o adresi, pa je provera slabija, a reakcija brža. Signal: QR kod traži prijavu, karticu ili potvrdu radnje koja bi smela da se obavi samo u zvaničnoj aplikaciji ili na pravom sajtu.",
    subtitle: {
      sr: "QR kao prečica u lažni portal: malo teksta, malo provere, brza greška na telefonu.",
      en: "QR as a shortcut into a fake portal: little text, little verification, and a fast mistake on the phone."
    },
    hasPage: true,
    tags: ["qr", "krađa podataka"],
    overlaps: ["phishing", "qr-payment-scam", "parking-qr-scam", "fake-delivery", "marketplace-scam"],
    sources: [
      { name: "CISA – Recognize and Report Phishing", url: "https://www.cisa.gov/avoid-phishing-attempts" },
      { name: "FTC – Scammers hide harmful links in QR codes to steal your information", url: "https://consumer.ftc.gov/consumer-alerts/2023/12/scammers-hide-harmful-links-qr-codes-steal-your-information" }
    ]
  },

  "banking-app-screen-share": {
    title: { sr: "Deljenje ekrana bankovne aplikacije", en: "Banking app screen sharing scam" },
    title_en: "Banking app screen sharing scam",
    title_sr: "Deljenje ekrana bankovne aplikacije",
    summary_en: "Someone posing as bank support asks you to install remote software or share your screen while the banking app is open. They read balances, copy codes, or guide you to approve transfers. Signal: any request to show live banking screens to a stranger.",
    summary_sr: "Neko se predstavlja kao bankarska podrška i traži instalaciju programa za daljinski pristup ili deljenje ekrana dok je bankovna aplikacija otvorena. Čitaju stanje, kopiraju kodove ili vode ka odobrenju transakcija. Signal: bilo koji zahtev da strancu pokažete uživo bankovnu aplikaciju.",
    subtitle: {
      sr: "Lažna podrška → deljenje ekrana ili daljinski pristup → čitanje podataka i kodova → šteta.",
      en: "Fake support → screen share or remote access → reading data and codes → loss."
    },
    hasPage: true,
    tags: ["banka", "krađa podataka"],
    overlaps: ["phishing", "bank-impersonation", "tech-support-scam", "fake-call-scam", "account-takeover", "otp-interception"],
    sources: [
      { name: "CISA – Avoiding Social Engineering and Phishing Attacks", url: "https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks" },
      { name: "UK NCSC – Phishing guidance", url: "https://www.ncsc.gov.uk/guidance/phishing" }
    ]
  },

  "browser-session-hijack": {
    title: { sr: "Preotimanje sesije u pregledaču", en: "Browser session hijack" },
    title_en: "Browser session hijack",
    title_sr: "Preotimanje sesije u pregledaču",
    summary_en: "An attacker reuses a live or stolen browser session on another device, through malware, a malicious extension, physical access, or a copied token, and acts as you without re-entering the password. Signal: logins and actions you did not perform while the account stays logged in.",
    summary_sr: "Napadač ponovo iskoristi aktivnu ili ukradenu sesiju u pregledaču na drugom uređaju, preko malvera, zlonamerne ekstenzije, fizičkog pristupa ili kopiranog tokena, i deluje u vaše ime bez ponovnog unosa lozinke. Signal: prijave i radnje koje niste uradili dok nalog ostaje ulogovan.",
    subtitle: {
      sr: "Ukraden ili presretnut token sesije → rad u vaše ime u pregledaču → promene naloga i transakcije.",
      en: "Stolen or intercepted session token → acting as you in the browser → account and payment changes."
    },
    hasPage: true,
    tags: ["nalog", "malware"],
    overlaps: ["phishing", "session-cookie-theft", "malicious-app-scam", "browser-extension-scam", "account-takeover", "email-account-compromise"],
    sources: [
      { name: "CISA – Protecting Tokens and Assertions from Forgery, Theft, and Misuse", url: "https://www.cisa.gov/resources-tools/resources/protecting-tokens-and-assertions-forgery-theft-and-misuse" },
      { name: "OWASP – Session Management Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html" }
    ]
  },

  "cloud-account-compromise": {
    title: { sr: "Kompromitacija naloga u oblaku", en: "Cloud account compromise" },
    title_en: "Cloud account compromise",
    title_sr: "Kompromitacija naloga u oblaku",
    summary_en: "Attackers get into cloud mail, storage, or collaboration accounts through phishing, reused passwords, OAuth abuse, or leaked credentials, then change recovery settings, steal files, and impersonate you to contacts. Signal: unexpected sharing, new devices, or rules you did not create.",
    summary_sr: "Napadači ulaze u cloud poštu, skladište ili saradničke naloge kroz fišing, ponovljene lozinke, zloupotrebu OAuth-a ili curenje kredencijala, zatim menjaju podatke za oporavak, kradu fajlove i lažno se predstavljaju kontaktima. Signal: neočekivano deljenje, novi uređaji ili pravila koja niste napravili.",
    subtitle: {
      sr: "Ulaz u cloud nalog → promene bezbednosti → krađa podataka i zloupotreba poverenja.",
      en: "Cloud account entry → security changes → data theft and trust abuse."
    },
    hasPage: true,
    tags: ["cloud", "krađa podataka"],
    overlaps: ["phishing", "oauth-consent-phishing", "email-account-compromise", "account-takeover", "business-email-compromise", "mfa-fatigue-scam"],
    sources: [
      { name: "Microsoft – Security defaults and identity protection", url: "https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/concept-fundamentals-security-defaults" },
      { name: "UK NCSC – Protecting your online accounts", url: "https://www.ncsc.gov.uk/collection/top-tips-for-staying-secure-online/protect-your-email" }
    ]
  },

  "discord-moderator-scam": {
    title: { sr: "Lažni moderator na Discordu", en: "Discord moderator scam" },
    title_en: "Discord moderator scam",
    title_sr: "Lažni moderator na Discordu",
    summary_en: "A stranger DM claims to be staff or a moderator, cites a fake ToS violation, and asks you to verify, click a link, or prove ownership with a token or QR. Goal is account takeover, wallet drain, or malware. Signal: unsolicited mod DM plus urgency and a link.",
    summary_sr: "Stranac u DM tvrdi da je osoblje ili moderator, navodi lažno kršenje pravila i traži verifikaciju, klik na link ili dokaz vlasništva tokenom ili QR kodom. Cilj je preuzimanje naloga, ispražnjenje novčanika ili malware. Signal: neočekivana DM poruka moderatora uz hitnost i link.",
    subtitle: {
      sr: "Lažni moderator → lažno kršenje → link ili token → gubitak naloga ili sredstava.",
      en: "Fake moderator → fake violation → link or token → account or asset loss."
    },
    hasPage: true,
    tags: ["društvene mreže", "krađa podataka"],
    overlaps: ["phishing", "account-takeover", "impersonation-scam", "quishing", "tech-support-scam"],
    sources: [
      { name: "Discord – Official messages and safety", url: "https://discord.com/safety" },
      { name: "FTC – Social media scams", url: "https://consumer.ftc.gov/articles/social-media-scams" }
    ]
  },

  "egovernment-login-phishing": {
    title: { sr: "Fišing prijave na e‑upravu", en: "E‑government login phishing" },
    title_en: "E‑government login phishing",
    title_sr: "Fišing prijave na e‑upravu",
    summary_en: "Messages imitate tax, health, pension, or municipal portals and link to a fake login that harvests credentials and personal data. Follow-up may be identity misuse or payment fraud. Signal: portal link from SMS or email that does not match the official domain you use in the app.",
    summary_sr: "Poruke imitiraju poreske, zdravstvene, penzijske ili gradske portale i vode na lažnu prijavu koja prikuplja kredencijale i lične podatke. Nastavak može biti zloupotreba identiteta ili plaćanje. Signal: link ka portalu iz SMS-a ili imejla koji se ne poklapa sa zvaničnim domenom iz aplikacije.",
    subtitle: {
      sr: "Lažni državni portal → prijava → krađa podataka → zloupotreba identiteta ili novca.",
      en: "Fake government portal → login → data theft → identity or money abuse."
    },
    hasPage: true,
    tags: ["institucija", "phishing"],
    overlaps: ["phishing", "government-impersonation", "tax-authority-impersonation", "smishing", "email-account-compromise"],
    sources: [
      { name: "UK NCSC – Phishing guidance", url: "https://www.ncsc.gov.uk/guidance/phishing" },
      { name: "CISA – Avoid Phishing", url: "https://www.cisa.gov/avoid-phishing-attempts" }
    ]
  },

  "esim-activation-scam": {
    title: { sr: "Prevara pri aktivaciji digitalne SIM kartice", en: "eSIM activation scam" },
    title_en: "eSIM activation scam",
    title_sr: "Prevara pri aktivaciji digitalne SIM kartice",
    summary_en: "Fraudsters send a QR or link to activate eSIM or upgrade to eSIM and trick you into moving your mobile service to their control. They can then intercept calls and SMS OTPs. Signal: eSIM setup instructions from an unknown chat, email, or call instead of your carrier’s official flow.",
    summary_sr: "Prevaranti šalju QR ili link za aktivaciju eSIM ili nadogradnju na eSIM i nateraju vas da prebacite mobilnu uslugu pod njihovu kontrolu. Tada mogu presretati pozive i SMS OTP kodove. Signal: uputstva za eSIM od nepoznatog chata, imejla ili poziva umesto zvaničnog toka operatera.",
    subtitle: {
      sr: "Lažna aktivacija eSIM → prebacivanje linije → presretanje poziva i kodova.",
      en: "Fake eSIM activation → line transfer → interception of calls and codes."
    },
    hasPage: true,
    tags: ["telefon", "otp"],
    overlaps: ["phishing", "sim-swap", "port-out-scam", "otp-interception", "quishing", "smishing"],
    sources: [
      { name: "FTC – Cell phone account scams", url: "https://consumer.ftc.gov/articles/how-avoid-cell-phone-account-scams" },
      { name: "CISA – Avoid Phishing", url: "https://www.cisa.gov/avoid-phishing-attempts" }
    ]
  },

  "number-verification-scam": {
    title: { sr: "Prevara verifikacije broja", en: "Number verification scam" },
    title_en: "Number verification scam",
    title_sr: "Prevara verifikacije broja",
    summary_en: "Someone asks you to confirm your number by reading back a code that was actually sent to verify a new account or service on your line—now tied to the scammer. Variants include marketplace and two-factor backup number tricks. Signal: a stranger needs a code sent to your phone for a reason they explain vaguely.",
    summary_sr: "Neko traži da potvrdite broj čitanjem koda koji je zapravo poslat da verifikuje novi nalog ili uslugu na vašoj liniji—sada povezanu sa prevarantom. Varijante uključuju oglasnice i rezervni broj za dvofaktorsku potvrdu. Signal: stranac treba kod poslat na vaš telefon uz nejasno objašnjenje.",
    subtitle: {
      sr: "Lažna verifikacija → kod sa vašeg broja → novi nalog ili usluga na vašoj liniji.",
      en: "Fake verification → code from your number → new account or service on your line."
    },
    hasPage: true,
    tags: ["telefon", "otp"],
    overlaps: ["phishing", "otp-interception", "marketplace-scam", "sim-swap", "smishing", "account-takeover"],
    sources: [
      { name: "FTC – How to avoid cell phone account scams", url: "https://consumer.ftc.gov/articles/how-avoid-cell-phone-account-scams" },
      { name: "CISA – Avoid Phishing", url: "https://www.cisa.gov/avoid-phishing-attempts" }
    ]
  },

  "otp-bot": {
    title: { sr: "Prevara s botom za jednokratne kodove", en: "OTP bot scam" },
    title_en: "OTP bot scam",
    title_sr: "Prevara s botom za jednokratne kodove",
    summary_en: "Automated calls or chats impersonate a bank or delivery service, ask you to type or speak a one-time code for verification, and relay it to an attacker who is logging into your account or authorizing a payment in real time. Signal: robotic voice or chat asking for the exact digits of an SMS code.",
    summary_sr: "Automatski pozivi ili chatovi lažno se predstavljaju kao banka ili kurir, traže da ukucate ili izgovorite jednokratni kod radi verifikacije i prosleđuju ga napadaču koji se u isto vreme prijavljuje na vaš nalog ili autorizuje plaćanje. Signal: robotski glas ili chat koji traži tačne cifre SMS koda.",
    subtitle: {
      sr: "Lažni automatizovani poziv ili bot → iznošenje OTP koda → prijava ili plaćanje u vaše ime.",
      en: "Fake automated call or bot → revealing OTP → login or payment in your name."
    },
    hasPage: true,
    tags: ["otp", "vishing"],
    overlaps: ["phishing", "otp-interception", "vishing", "fake-call-scam", "bank-impersonation", "mfa-fatigue-scam"],
    sources: [
      { name: "CISA – Multi-Factor Authentication", url: "https://www.cisa.gov/news-events/news/use-multi-factor-authentication" },
      { name: "UK NCSC – OTP and scam calls", url: "https://www.ncsc.gov.uk/guidance/phishing" }
    ]
  },

  "saas-admin-impersonation": {
    title: { sr: "Lažni administrator poslovne platforme", en: "SaaS admin impersonation" },
    title_en: "SaaS admin impersonation",
    title_sr: "Lažni administrator poslovne platforme",
    summary_en: "Attackers pose as IT, workspace admin, or support for tools like email, chat, or HR SaaS and ask you to approve an app, reset MFA, or click an admin alert. Goal is tenant-wide access or your credentials. Signal: urgency about admin policy plus a link not from your internal IT channel.",
    summary_sr: "Napadači se predstavljaju kao IT, administrator radnog prostora ili podrška za alate kao što su pošta, chat ili HR SaaS i traže odobrenje aplikacije, reset MFA ili klik na admin upozorenje. Cilj je pristup celom tenantu ili vaši kredencijali. Signal: hitnost oko adminske politike uz link koji ne dolazi iz vašeg internog IT kanala.",
    subtitle: {
      sr: "Lažni admin alata → link ili dozvola → pristup organizacionom nalogu.",
      en: "Fake admin of a tool → link or approval → access to org accounts."
    },
    hasPage: true,
    tags: ["posao", "phishing"],
    overlaps: ["phishing", "oauth-consent-phishing", "business-email-compromise", "tech-support-scam", "account-takeover", "impersonation-scam"],
    sources: [
      { name: "Microsoft – Admin consent and phishing", url: "https://learn.microsoft.com/en-us/entra/identity/enterprise-apps/protect-against-consent-phishing" },
      { name: "UK NCSC – Phishing", url: "https://www.ncsc.gov.uk/guidance/phishing" }
    ]
  },

  "search-engine-ad-impersonation": {
    title: { sr: "Lažni oglas u pretrazi", en: "Search engine ad impersonation" },
    title_en: "Search engine ad impersonation",
    title_sr: "Lažni oglas u pretrazi",
    summary_en: "Paid ads at the top of search results mimic bank, wallet, or support sites and lead to phishing pages. Users trust placement over the URL. Signal: you clicked an ad to reach login or support instead of typing the known domain or using the app.",
    summary_sr: "Plaćeni oglasi na vrhu rezultata pretrage imitiraju banku, novčanik ili podršku i vode na fišing stranicu. Korisnici veruju poziciji više nego URL-u. Signal: na prijavu ili podršku ste došli klikom na oglas umesto ukucanog poznatog domena ili aplikacije.",
    subtitle: {
      sr: "Lažni oglas iznad rezultata → lažna stranica → krađa kredencijala ili novca.",
      en: "Fake ad above results → fake page → credential or money theft."
    },
    hasPage: true,
    tags: ["phishing", "reklama"],
    overlaps: ["phishing", "fake-webshop", "crypto-scam", "tech-support-scam", "malicious-app-scam"],
    sources: [
      { name: "FBI – Malvertising and search engine fraud", url: "https://www.fbi.gov/how-we-can-help-you/scams-and-safety/common-frauds-and-scams" },
      { name: "CISA – Phishing", url: "https://www.cisa.gov/avoid-phishing-attempts" }
    ]
  },

  "session-cookie-theft": {
    title: { sr: "Krađa sesijskog kolačića", en: "Session cookie theft" },
    title_en: "Session cookie theft",
    title_sr: "Krađa sesijskog kolačića",
    summary_en: "Malware, malicious extensions, network attacks, or phishing kits steal browser session cookies or tokens so the attacker can log in as you without the password. Signal: account activity from unknown locations while your password still works and you did not get typical phishing prompts.",
    summary_sr: "Malver, zlonamerne ekstenzije, mrežni napadi ili fišing kitovi kradu sesijske kolačiće ili tokene u pregledaču kako bi se napadač prijavio kao vi bez lozinke. Signal: aktivnost naloga sa nepoznatih lokacija dok lozinka i dalje radi i niste videli uobičajene fišing upite.",
    subtitle: {
      sr: "Ukradeni token sesije → prijava bez lozinke → promene na nalogu i transakcije.",
      en: "Stolen session token → passwordless login → account changes and transactions."
    },
    hasPage: true,
    tags: ["malware", "nalog"],
    overlaps: ["phishing", "browser-session-hijack", "browser-extension-scam", "malicious-app-scam", "account-takeover", "evil-twin-wifi-scam"],
    sources: [
      { name: "CISA – Protecting Tokens and Assertions", url: "https://www.cisa.gov/resources-tools/resources/protecting-tokens-and-assertions-forgery-theft-and-misuse" },
      { name: "OWASP – Session Management Cheat Sheet", url: "https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html" }
    ]
  },

  "sim-registration-scam": {
    title: { sr: "Prevara registracije SIM kartice", en: "SIM registration scam" },
    title_en: "SIM registration scam",
    title_sr: "Prevara registracije SIM kartice",
    summary_en: "Fraudsters impersonate a carrier or regulator and ask for photos of ID, SIM details, or registration fees to steal identity data or trick you into activating a SIM they control. Signal: unsolicited request for ID images or SIM PUK over chat or phone for mandatory registration.",
    summary_sr: "Prevaranti se predstavljaju kao operater ili regulator i traže fotografije ličnog dokumenta, podatke o SIM-u ili naknadu za registraciju radi krađe identiteta ili aktivacije SIM-a pod njihovom kontrolom. Signal: neočekivani zahtev za slikama dokumenta ili PUK-om preko chata ili telefona radi obavezne registracije.",
    subtitle: {
      sr: "Lažna registracija → lični podaci ili novac → kontrola linije ili identiteta.",
      en: "Fake registration → personal data or money → control of line or identity."
    },
    hasPage: true,
    tags: ["telefon", "identitet"],
    overlaps: ["phishing", "sim-swap", "port-out-scam", "smishing", "vishing", "identity-theft"],
    sources: [
      { name: "FTC – Cell phone account scams", url: "https://consumer.ftc.gov/articles/how-avoid-cell-phone-account-scams" },
      { name: "FBI – Common frauds", url: "https://www.fbi.gov/how-we-can-help-you/scams-and-safety/common-frauds-and-scams" }
    ]
  },

  "tax-refund-phishing": {
    title: { sr: "Fišing povrata poreza", en: "Tax refund phishing" },
    title_en: "Tax refund phishing",
    title_sr: "Fišing povrata poreza",
    summary_en: "Emails or SMS claim you are owed a tax refund, show a tempting amount, and link to a fake tax portal that harvests credentials, card data, or identity details. It differs from aggressive you owe tax calls by using reward framing. Signal: refund message with a link instead of official postal or portal workflow you already use.",
    summary_sr: "Imejl ili SMS tvrdi da vam pripada povrat poreza, prikazuje primamljiv iznos i vodi na lažni poreski portal koji prikuplja kredencijale, karticu ili identitet. Razlikuje se od agresivnih poziva dugujete porez jer koristi okvir nagrade. Signal: poruka o povratu sa linkom umesto zvaničnog poštanskog ili portal toka koji već koristite.",
    subtitle: {
      sr: "Lažna vest o povratu → link → forma → krađa podataka ili novca.",
      en: "Fake refund news → link → form → data or money theft."
    },
    hasPage: true,
    tags: ["porez", "phishing"],
    overlaps: ["phishing", "government-impersonation", "tax-authority-impersonation", "egovernment-login-phishing", "advance-fee-fraud", "smishing"],
    sources: [
      { name: "IRS (US) – Tax scams / phishing", url: "https://www.irs.gov/newsroom/tax-scams-consumer-alerts" },
      { name: "UK HMRC – Phishing and scams", url: "https://www.gov.uk/government/collections/hm-revenue-and-customs-phishing-and-scams" }
    ]
  },

  "telegram-admin-impersonation": {
    title: { sr: "Lažni administrator na Telegramu", en: "Telegram admin impersonation" },
    title_en: "Telegram admin impersonation",
    title_sr: "Lažni administrator na Telegramu",
    summary_en: "Scammers clone admin names, use fake support accounts, or send bot messages claiming your channel or account will be closed unless you verify via a link or bot token. Goal is account takeover, crypto theft, or malware. Signal: Telegram message demanding urgent verification from an account you never opened a ticket with.",
    summary_sr: "Prevaranti kloniraju imena admina, koriste lažne naloge podrške ili šalju bot poruke da će kanal ili nalog biti zatvoren ako se ne verifikujete linkom ili bot tokenom. Cilj je preuzimanje naloga, krađa kripta ili malware. Signal: Telegram poruka koja traži hitnu verifikaciju od naloga sa kojim niste nikad otvarali tiket.",
    subtitle: {
      sr: "Lažni admin ili bot → hitna verifikacija → link ili token → gubitak naloga.",
      en: "Fake admin or bot → urgent verification → link or token → account loss."
    },
    hasPage: true,
    tags: ["društvene mreže", "phishing"],
    overlaps: ["phishing", "impersonation-scam", "account-takeover", "crypto-scam", "discord-moderator-scam"],
    sources: [
      { name: "Telegram – Scams FAQ", url: "https://telegram.org/faq/general#q-what-are-scams-on-telegram" },
      { name: "CISA – Phishing", url: "https://www.cisa.gov/avoid-phishing-attempts" }
    ]
  },

  "whatsapp-takeover": {
    title: { sr: "Preuzimanje WhatsApp naloga", en: "WhatsApp takeover" },
    title_en: "WhatsApp takeover",
    title_sr: "Preuzimanje WhatsApp naloga",
    summary_en: "WhatsApp takeover happens when an attacker gets the registration code, a live session, or approval for a linked device and then starts acting from an account your contacts already trust. Unlike a generic account takeover, the damage spreads immediately through existing chats, groups, and saved history that make new requests look believable. Signal: a WhatsApp registration code or linked-device alert arrives when you are not reinstalling the app, changing phones, or linking a computer yourself.",
    summary_sr: "Preuzimanje WhatsApp naloga nastaje kada napadač dobije registracioni kod, aktivnu sesiju ili potvrdu za povezani uređaj, pa zatim deluje iz naloga kome kontakti već veruju. Za razliku od opšteg preuzimanja naloga, šteta se odmah širi kroz postojeće četove, grupe i istoriju razgovora koja novim porukama daje uverljivost. Signal: WhatsApp kod za registraciju ili obaveštenje o povezanom uređaju stiže kada ne reinstalirate aplikaciju, ne menjate telefon i ne povezujete računar.",
    subtitle: {
      sr: "Kod, sesija ili povezani uređaj → tuđa kontrola → poruke iz naloga koji ljudi već poznaju.",
      en: "Code, session, or linked device → outsider control → messages from an account people already trust."
    },
    hasPage: true,
    tags: ["telefon", "nalog"],
    overlaps: ["phishing", "account-takeover", "number-verification-scam", "otp-interception", "smishing", "impersonation-scam"],
    sources: [
      { name: "WhatsApp – Safety and security", url: "https://www.whatsapp.com/safety" },
      { name: "UK NCSC – WhatsApp verification scams", url: "https://www.ncsc.gov.uk/guidance/phishing" }
    ]
  },

  "whatsapp-device-linking-scam": {
    core: true,
    title: { sr: "WhatsApp: lažno povezivanje uređaja", en: "WhatsApp: fake device linking" },
    title_en: "WhatsApp: fake device linking",
    title_sr: "WhatsApp: lažno povezivanje uređaja",
    summary_en: "This pattern does not primarily rely on an SMS code but on guiding you into the Linked devices flow and making you scan a QR or approve a web session under a fake support, work, or migration pretext. Unlike the broader WhatsApp takeover model, it can succeed without reinstalling the app because the attacker rides an approved linked session. Signal: someone walks you step by step to the linked-devices menu and asks you to point your phone camera at their screen.",
    summary_sr: "Ovaj obrazac se ne oslanja prvenstveno na SMS kod, već na to da vas kroz priču o podršci, poslu ili migraciji dovede do menija za povezane uređaje i navede da skenirate QR ili odobrite veb sesiju. Za razliku od šireg WhatsApp takeover modela, može uspeti bez reinstalacije aplikacije jer napadač ulazi kroz odobrenu povezanu sesiju. Signal: neko vas korak po korak vodi do menija za povezane uređaje i traži da kamerom telefona skenirate njegov ekran.",
    subtitle: {
      sr: "Lažni razlog za QR ili veb sesiju, a rezultat je tuđi uređaj u vašem nalogu.",
      en: "A fake reason for a QR or web session, with someone else’s device ending up inside your account."
    },
    hasPage: true,
    tags: ["WhatsApp", "nalog"],
    overlaps: ["whatsapp-takeover", "phishing", "impersonation-scam", "account-takeover", "smishing", "linked-device-support-scam"],
    sources: [
      { name: "WhatsApp – Safety and security", url: "https://www.whatsapp.com/safety" },
      { name: "WhatsApp FAQ – Staying safe on WhatsApp", url: "https://faq.whatsapp.com/general/security-and-privacy/staying-safe-on-whatsapp" }
    ]
  },

  "whatsapp-group-join-qr-scam": {
    core: true,
    title: { sr: "WhatsApp: QR za ulazak u grupu", en: "WhatsApp: group join QR scam" },
    title_en: "WhatsApp: group join QR scam",
    title_sr: "WhatsApp: QR za ulazak u grupu",
    summary_en: "A fake \"join group\" QR leads to phishing, an APK, or data theft instead of a safe community.",
    summary_sr: "Lažni QR za ulazak u grupu vodi na fišing, APK ili krađu podataka umesto na bezbednu zajednicu.",
    subtitle: {
      sr: "Plakat ili poruka skeniraj za grupu → lažna stranica ili APK → krađa pristupa.",
      en: "Poster or \"scan to join group\" → fake page or APK → access theft."
    },
    hasPage: true,
    tags: ["WhatsApp", "QR"],
    overlaps: ["whatsapp-device-linking-scam", "whatsapp-apk-attachment-scam", "phishing", "quishing", "whatsapp-takeover", "smishing"],
    sources: [
      { name: "WhatsApp – Safety and security", url: "https://www.whatsapp.com/safety" },
      { name: "Microsoft Threat Intelligence – WhatsApp and malware campaigns", url: "https://www.microsoft.com/en-us/security/blog/2024/07/16/multi-stage-campaigns-targeting-mobile-devices-using-whatsapp-and-malware/" }
    ]
  },

  "whatsapp-screen-sharing-bank-scam": {
    core: true,
    title: { sr: "WhatsApp: deljenje ekrana sa bankom", en: "WhatsApp: screen sharing with a fake bank" },
    title_en: "WhatsApp: screen sharing with a fake bank",
    title_sr: "WhatsApp: deljenje ekrana sa bankom",
    summary_en: "The scam begins in WhatsApp chat and then moves into a voice or video call where the fake bank agent asks for screen sharing while the banking app is open. Unlike general banking-app screen sharing, this version exploits the seamless switch from trusted chat to live call inside the same app. Signal: the supposed bank operator insists that you stay on WhatsApp while opening the banking app, reading balances, or exposing OTP and approval screens.",
    summary_sr: "Prevara počinje u WhatsApp poruci, a zatim prelazi u glasovni ili video-poziv u kome lažni bankarski operater traži deljenje ekrana dok je bankovna aplikacija otvorena. Za razliku od opšte prevare sa deljenjem ekrana banke, ova varijanta koristi glatki prelaz iz navodno pouzdanog četa u poziv unutar iste aplikacije. Signal: navodni bankarski operater insistira da ostanete na WhatsApp-u dok otvarate banku, čitate stanje ili izlažete OTP i ekrane za potvrdu.",
    subtitle: {
      sr: "WhatsApp čet prelazi u video ili poziv, a ekran banke postaje izvor kodova i potvrda.",
      en: "WhatsApp chat turns into voice or video, and the banking screen becomes the source of codes and approvals."
    },
    hasPage: true,
    tags: ["WhatsApp", "banka"],
    overlaps: ["banking-app-screen-share", "bank-impersonation", "fake-call-scam", "otp-interception", "phishing", "tech-support-scam"],
    sources: [
      { name: "Singapore Police Force – Screen sharing bank scams advisory", url: "https://www.police.gov.sg/media-room/news/20230809_police_advisory_on_scammers_impersonating_bank_staff_and_government_officials" },
      { name: "WhatsApp – Safety and security", url: "https://www.whatsapp.com/safety" }
    ]
  },

  "whatsapp-fake-voting-authorization-scam": {
    core: true,
    title: { sr: "WhatsApp: lažno glasanje i ovlašćenje", en: "WhatsApp: fake voting and authorization" },
    title_en: "WhatsApp: fake voting and authorization",
    title_sr: "WhatsApp: lažno glasanje i ovlašćenje",
    summary_en: "Fake petitions, voting, or \"digital authorization\" in chat end on a link asking for a code, card, or payment.",
    summary_sr: "Lažne peticije, glasanje ili digitalno ovlašćenje u četu završe na linku koji traži kod, karticu ili uplatu.",
    subtitle: {
      sr: "Podrži kandidata ili potpiši peticiju → link → kod ili uplata.",
      en: "\"Support a candidate\" or \"sign a petition\" → link → code or payment."
    },
    hasPage: true,
    tags: ["WhatsApp", "fišing"],
    overlaps: ["phishing", "smishing", "whatsapp-takeover", "number-verification-scam", "quishing", "impersonation-scam"],
    sources: [
      { name: "Kaspersky – WhatsApp fake voting scam", url: "https://www.kaspersky.com/blog/whatsapp-fake-voting-scam/53142/" },
      { name: "WhatsApp – Safety and security", url: "https://www.whatsapp.com/safety" }
    ]
  },

  "whatsapp-verification-code-call-scam": {
    core: true,
    title: { sr: "WhatsApp: poziv i kod za verifikaciju", en: "WhatsApp: verification code call scam" },
    title_en: "WhatsApp: verification code call scam",
    title_sr: "WhatsApp: poziv i kod za verifikaciju",
    summary_en: "A call asks you to read aloud or send an SMS code while the attacker finishes signing in to your number.",
    summary_sr: "Poziv traži da naglas pročitate ili pošaljete kod iz SMS-a dok napadač završava prijavu na vaš broj.",
    subtitle: {
      sr: "Potvrdite identitet → čitate kod sa ekrana → napadač ga unosi kod vas.",
      en: "\"Confirm identity\" → you read the code from the screen → the attacker enters it for you."
    },
    hasPage: true,
    tags: ["WhatsApp", "poziv"],
    overlaps: ["fake-call-scam", "number-verification-scam", "whatsapp-takeover", "otp-interception", "smishing", "whatsapp-call-forwarding-ussd-scam"],
    sources: [
      { name: "WhatsApp – Safety and security", url: "https://www.whatsapp.com/safety" },
      { name: "FTC – How to recognize and avoid phishing scams", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" }
    ]
  },

  "whatsapp-unknown-group-invite-scam": {
    core: true,
    title: { sr: "WhatsApp: poziv u nepoznatu grupu", en: "WhatsApp: unknown group invite scam" },
    title_en: "WhatsApp: unknown group invite scam",
    title_sr: "WhatsApp: poziv u nepoznatu grupu",
    summary_en: "Mass invites to unknown groups use noise and links to extract payments or data.",
    summary_sr: "Masovni pozivi u nepoznate grupe koriste buku i linkove da izvuku uplatu ili podatke.",
    subtitle: {
      sr: "Ekskluzivna ponuda u grupi sa desetinama stranaca → linkovi i pritisak.",
      en: "\"Exclusive offer\" in a group with dozens of strangers → links and pressure."
    },
    hasPage: true,
    tags: ["WhatsApp", "grupa"],
    overlaps: ["whatsapp-group-join-qr-scam", "signal-group-investment-scam", "task-scam", "smishing", "phishing", "impersonation-scam"],
    sources: [
      { name: "WhatsApp – Safety and security", url: "https://www.whatsapp.com/safety" },
      { name: "Meta – New features on WhatsApp to help keep people safe", url: "https://about.fb.com/news/2024/08/new-features-on-whatsapp-to-help-keep-people-safe/" }
    ]
  },

  "whatsapp-apk-attachment-scam": {
    core: true,
    title: { sr: "WhatsApp: APK prilog", en: "WhatsApp: APK attachment scam" },
    title_en: "WhatsApp: APK attachment scam",
    title_sr: "WhatsApp: APK prilog",
    summary_en: "An APK in chat disguised as an update or document installs malware that reads messages and spreads the file further.",
    summary_sr: "APK u poruci predstavljen kao ažuriranje ili dokument instalira malver koji čita poruke i širi fajl dalje.",
    subtitle: {
      sr: "Zlatna verzija, tajna funkcija ili faktura.apk → instalacija van prodavnice.",
      en: "\"Gold version,\" \"secret feature,\" or invoice.apk → install outside the store."
    },
    hasPage: true,
    tags: ["WhatsApp", "malware"],
    overlaps: ["fake-app-sideload-verification-scam", "fake-captcha-malware-scam", "malicious-app-scam", "phishing", "whatsapp-takeover", "browser-push-malware-scam"],
    sources: [
      { name: "CISA – Avoid phishing attempts", url: "https://www.cisa.gov/avoid-phishing-attempts" },
      { name: "WhatsApp – Safety and security", url: "https://www.whatsapp.com/safety" }
    ]
  },

  "whatsapp-call-forwarding-ussd-scam": {
    core: true,
    title: { sr: "WhatsApp: prosleđivanje poziva (USSD)", en: "WhatsApp: call forwarding USSD scam" },
    title_en: "WhatsApp: call forwarding USSD scam",
    title_sr: "WhatsApp: prosleđivanje poziva (USSD)",
    summary_en: "Fake instructions to dial USSD turn on call or SMS forwarding to the attacker’s number.",
    summary_sr: "Lažna uputstva da ukucate USSD uključuju prosleđivanje poziva ili SMS-a ka broju napadača.",
    subtitle: {
      sr: "Unesi kod da aktiviraš WhatsApp → pozivi ili kodovi idu na tuđi broj.",
      en: "\"Enter code to activate WhatsApp\" → calls or codes go to another number."
    },
    hasPage: true,
    tags: ["WhatsApp", "poziv"],
    overlaps: ["otp-interception", "whatsapp-verification-code-call-scam", "sim-swap", "fake-call-scam", "smishing", "account-takeover"],
    sources: [
      { name: "UK NCSC – Phishing", url: "https://www.ncsc.gov.uk/guidance/phishing" },
      { name: "FTC – How to recognize and avoid phishing scams", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" }
    ]
  },

  "viber-bank-impersonation-scam": {
    core: true,
    title: { sr: "Viber: lažna banka", en: "Viber: bank impersonation scam" },
    title_en: "Viber: bank impersonation scam",
    title_sr: "Viber: lažna banka",
    summary_en: "A fake bank profile on Viber asks for OTP, card details, or payment to a \"safe account.\"",
    summary_sr: "Lažni bankarski profil na Viberu traži OTP, podatke kartice ili uplatu na siguran račun.",
    subtitle: {
      sr: "Poruka sa logotipom → sumnjiva transakcija → OTP ili siguran račun.",
      en: "Message with a logo → suspicious transaction → OTP or \"safe account.\""
    },
    hasPage: true,
    tags: ["Viber", "banka"],
    overlaps: ["bank-impersonation", "fake-call-scam", "otp-interception", "phishing", "viber-official-impersonation-scam", "viber-account-takeover-scam"],
    sources: [
      { name: "Viber Help", url: "https://help.viber.com/" },
      { name: "FTC – What to know about impersonator scams", url: "https://consumer.ftc.gov/articles/what-know-about-impersonator-scams" }
    ]
  },

  "viber-courier-phishing-scam": {
    core: true,
    title: { sr: "Viber: lažni kurir", en: "Viber: courier phishing scam" },
    title_en: "Viber: courier phishing scam",
    title_sr: "Viber: lažni kurir",
    summary_en: "A fake courier on Viber asks for extra payment, a link, or a QR for a \"held package\" unrelated to a real shipment.",
    summary_sr: "Lažni kurir na Viberu traži doplatu, link ili QR za zadržani paket bez veze sa pravom pošiljkom.",
    subtitle: {
      sr: "Paket zadržan → link ili broj računa → pritisak da platite odmah.",
      en: "\"Package on hold\" → link or account number → pressure to pay now."
    },
    hasPage: true,
    tags: ["Viber", "dostava"],
    overlaps: ["fake-delivery", "parcel-scam", "package-redelivery-scam", "phishing", "smishing", "viber-official-impersonation-scam"],
    sources: [
      { name: "Viber Help", url: "https://help.viber.com/" },
      { name: "FTC – Package delivery scams", url: "https://consumer.ftc.gov/consumer-alerts/2022/12/waiting-package-look-out-delivery-text-scams" }
    ]
  },

  "viber-official-impersonation-scam": {
    core: true,
    title: { sr: "Viber: lažni zvanični nalog", en: "Viber: fake official account scam" },
    title_en: "Viber: fake official account scam",
    title_sr: "Viber: lažni zvanični nalog",
    summary_en: "An account posing as support, municipality, police, or an official body asks for data, payment, or a code.",
    summary_sr: "Nalog koji se predstavlja kao podrška, opština, policija ili službeni organ traži podatke, uplatu ili kod.",
    subtitle: {
      sr: "Poruka službenika u Viberu → pritisak → uplata ili podaci.",
      en: "A \"public official\" Viber message → pressure → payment or data."
    },
    hasPage: true,
    tags: ["Viber", "impersonacija"],
    overlaps: ["government-impersonation", "police-impersonation", "utility-impersonation", "phishing", "fake-call-scam", "viber-account-takeover-scam"],
    sources: [
      { name: "Viber Help", url: "https://help.viber.com/" },
      { name: "FTC – What to know about impersonator scams", url: "https://consumer.ftc.gov/articles/what-know-about-impersonator-scams" }
    ]
  },

  "viber-account-takeover-scam": {
    core: true,
    title: { sr: "Viber: preuzimanje naloga", en: "Viber: account takeover scam" },
    title_en: "Viber: account takeover scam",
    title_sr: "Viber: preuzimanje naloga",
    summary_en: "Stealing a code, password, or session lets someone else sign in to Viber and message in your name.",
    summary_sr: "Krađa koda, lozinke ili sesije omogućava tuđu prijavu na Viber i slanje poruka u vaše ime.",
    subtitle: {
      sr: "SMS kod, lažni desktop ili pomoć prijatelja → tuđi Viber.",
      en: "SMS code, fake desktop, or \"friend help\" → someone else’s Viber."
    },
    hasPage: true,
    tags: ["Viber", "nalog"],
    overlaps: ["account-takeover", "phishing", "smishing", "viber-official-impersonation-scam", "whatsapp-takeover", "number-verification-scam"],
    sources: [
      { name: "Viber Help", url: "https://help.viber.com/" },
      { name: "FTC – How to recognize and avoid phishing scams", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" }
    ]
  },

  "smishing": {
    core: true,
    title: { sr: "Smišing", en: "Smishing" },
    title_en: "Smishing",
    title_sr: "Smišing",
    summary_en: "Smishing is phishing optimized for the phone: a short SMS about delivery, a fine, verification, or account trouble pushes the user toward a mobile link before there is time to inspect the sender or domain. Unlike ordinary phishing email, the message relies on a small screen, short wording, and instant reaction. Signal: a generic sender, compressed urgency, and a link that leads outside the official app to collect card, login, or payment data.",
    summary_sr: "Smišing je fišing prilagođen telefonu: kratka SMS poruka o dostavi, kazni, verifikaciji ili problemu sa nalogom gura korisnika ka mobilnom linku pre nego što uopšte proveri pošiljaoca ili adresu. Za razliku od običnog fišing imejla, oslanja se na mali ekran, kratak tekst i trenutnu reakciju. Signal: generičan pošiljalac, sabijena hitnost i link koji vodi van zvanične aplikacije da prikupi karticu, prijavu ili podatke za uplatu.",
    subtitle: {
      sr: "SMS + link + telefon: manje konteksta, manje provere, isti cilj kao fišing.",
      en: "SMS + link + phone: less context, less verification, the same goal as phishing."
    },
    hasPage: true,
    tags: ["krađa podataka"],
    overlaps: ["phishing", "vishing", "fake-delivery", "marketplace-scam"],
    sources: [
      { name: "FTC – How to recognize and report spam text messages", url: "https://consumer.ftc.gov/articles/how-recognize-and-report-spam-text-messages" },
      { name: "CISA – Avoid Phishing", url: "https://www.cisa.gov/avoid-phishing-attempts" }
    ]
  },

  "vishing": {
    core: true,
    title: { sr: "Višing", en: "Vishing" },
    title_en: "Vishing",
    title_sr: "Višing",
    summary_en: "Vishing is still a voice-led pressure attack, but synthetic speech and better scripts now make the caller sound calmer, more familiar, or more official than before. The goal remains unchanged: keep the victim inside the call long enough to extract a code, an approval, a payment, or sensitive data before any independent verification happens.",
    summary_sr: "Višing je i dalje prevara vođena glasom i pritiskom, ali sintetički govor i bolji scenariji danas mogu da učine pozivaoca smirenijim, poznatijim ili službenijim nego ranije. Cilj ostaje isti: zadržati žrtvu u razgovoru dovoljno dugo da preda kod, odobri radnju, pošalje novac ili otkrije osetljive podatke pre bilo kakve nezavisne provere.",
    subtitle: {
      sr: "Glas preuzima tempo: poziv, procedura, kod ili potvrda.",
      en: "Voice takes control of the pace: call, procedure, code, or approval."
    },
    hasPage: true,
    tags: ["autoritet", "telefon"],
    overlaps: ["fake-call-scam", "impersonation-scam", "account-takeover", "phishing", "smishing"],
    sources: [
      { name: "UK NCSC – Phishing and suspicious messages", url: "https://www.ncsc.gov.uk/guidance/phishing" },
      { name: "FBI – Common Fraud and Scams", url: "https://www.fbi.gov/how-we-can-help-you/scams-and-safety/common-frauds-and-scams" }
    ]
  },

  "account-takeover": {
    core: true,
    title: { sr: "Preuzimanje naloga", en: "Account takeover" },
    title_en: "Account takeover",
    title_sr: "Preuzimanje naloga",
    summary_en: "Account takeover still starts once a password, code, session, or recovery step is stolen, but artificial intelligence now helps the attacker get there through more convincing support chats, fake verifications, cloned voices, and cleaner identity imitation. The takeover itself is not new; what changes is how believable the path into the account can look before the control shift becomes visible.",
    summary_sr: "Preuzimanje naloga i dalje počinje tek kada su lozinka, kod, sesija ili korak oporavka već ukradeni, ali veštačka inteligencija danas pomaže da se do toga dođe kroz ubedljivije lažne podrške, verifikacije, klonirane glasove i čistije lažno predstavljanje. Samo preuzimanje nije novo; menja se to koliko uverljivo može da izgleda put do naloga pre nego što promena kontrole postane vidljiva.",
    subtitle: {
      sr: "Ulaz može biti lozinka, kod ili sesija; suština je promena kontrole nad nalogom.",
      en: "The entry may be a password, code, or session; the core is the shift of control over the account."
    },
    hasPage: true,
    tags: ["krađa podataka"],
    overlaps: ["phishing", "vishing", "fake-call-scam", "impersonation-scam", "tech-support-scam"],
    sources: [
      { name: "CISA – Require Multifactor Authentication", url: "https://www.cisa.gov/secure-our-world/require-multifactor-authentication" },
      { name: "FTC – How to recognize and avoid phishing scams", url: "https://consumer.ftc.gov/articles/how-recognize-avoid-phishing-scams" }
    ]
  },

  "mfa-fatigue-scam": {
    title: { sr: "Bombardovanje zahtevima za potvrdu prijave", en: "MFA fatigue scam" },
    title_en: "MFA fatigue scam",
    title_sr: "Bombardovanje zahtevima za potvrdu prijave",
    summary_en: "The attacker already has a password or session and sends repeated MFA push prompts until the user approves one out of fatigue or after a fake support call. One approval is enough for account access. Signal: unexpected MFA prompts arriving in a wave, often paired with a call asking you to confirm or read out a number.",
    summary_sr: "Napadač već ima lozinku ili sesiju i šalje niz MFA push zahteva dok korisnik jedan ne odobri iz umora ili posle lažnog poziva podrške. Jedno odobrenje je dovoljno za pristup nalogu. Signal: neočekivani MFA promptovi dolaze u talasu, često uz poziv koji traži potvrdu ili broj sa ekrana.",
    subtitle: {
      sr: "Lozinka je već kompromitovana, a MFA se lomi kroz umor, pritisak i jedan pogrešan klik.",
      en: "The password is already compromised, and MFA is broken through fatigue, pressure, and one wrong tap."
    },
    hasPage: true,
    tags: ["mfa", "account access"],
    overlaps: ["phishing", "fake-call-scam", "account-takeover", "otp-interception", "email-account-compromise"],
    sources: [
      { name: "CISA – Russian State-Sponsored Cyber Actors Demonstrate Ability to Bypass MFA", url: "https://www.cisa.gov/news-events/alerts/2022/03/08/russian-state-sponsored-cyber-actors-demonstrate-ability-bypass-mfa" },
      { name: "CISA – Require Multifactor Authentication", url: "https://www.cisa.gov/secure-our-world/require-multifactor-authentication" }
    ]
  },

  "tech-support-scam": {
    core: true,
    title: { sr: "Prevara lažne tehničke podrške", en: "Tech support scam" },
    title_en: "Tech support scam",
    title_sr: "Prevara lažne tehničke podrške",
    summary_en: "A tech support scam still begins with a fake warning and an urgent fix, but artificial intelligence can now make the voice, chat, or screen instructions sound more patient, more expert, and more believable. The real target action stays the same: remote access, code sharing, payment for a fake repair, or a security step that gives the scammer control of the device or account.",
    summary_sr: "Prevara lažne tehničke podrške i dalje počinje lažnim upozorenjem i pričom o hitnom rešenju, ali veštačka inteligencija danas može da učini glas, čet ili uputstva na ekranu strpljivijim, stručnijim i ubedljivijim. Stvarna ciljna radnja ostaje ista: daljinski pristup, slanje koda, uplata za lažnu popravku ili bezbednosni korak koji prevarantu daje kontrolu nad uređajem ili nalogom.",
    subtitle: {
      sr: "Lažna podrška → remote pristup ili 'čišćenje virusa' → naplata i krađa.",
      en: "Fake support → remote access or \"virus cleanup\" → fees and theft."
    },
    hasPage: true,
    tags: ["autoritet"],
    overlaps: ["scareware", "vishing", "fake-call-scam", "phishing", "account-takeover"],
    sources: [
      { name: "FTC – How to spot, avoid, and report tech support scams", url: "https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams" },
      { name: "Microsoft Support – Avoid and report Microsoft technical support scams", url: "https://support.microsoft.com/en-us/topic/avoid-and-report-microsoft-technical-support-scams-392515fa-c630-b41d-2039-a637d5eaaec2" }
    ]
  },

  "scareware": {
    core: true,
    title: { sr: "Lažna virusna upozorenja", en: "Scareware" },
    title_en: "Scareware",
    title_sr: "Lažna virusna upozorenja",
    summary_en: "The hook is a dramatic browser alert and a fake scan. They ask you to call, install software, or pay for a cleanup. Escalation adds lock screens and repeated \"critical\" warnings. Signal: aggressive pop-ups with a phone number and a payment ask.",
    summary_sr: "Okidač je dramatično upozorenje u pretraživaču uz lažni skener. Traže poziv, instalaciju ili uplatu za \"čišćenje\". Eskalacija dodaje blokade i ponovljena \"kritična\" upozorenja. Signal: agresivni pop-up sa brojem i zahtevom za uplatu.",
    subtitle: {
      sr: "Lažno upozorenje o virusu → panika → 'hitna' podrška ili instalacija.",
      en: "Fake virus warning → panic → \"urgent\" support or installation."
    },
    hasPage: true,
    overlaps: ["tech-support-scam", "phishing"],
    sources: [
      { name: "FTC – How to spot, avoid, and report tech support scams", url: "https://consumer.ftc.gov/articles/how-spot-avoid-and-report-tech-support-scams" },
      { name: "CISA – Avoiding Social Engineering and Phishing Attacks", url: "https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks" }
    ]
  },

  "advance-fee-fraud": {
    core: true,
    title: { sr: "Uplata unapred", en: "Advance-fee fraud" },
    title_en: "Advance-fee fraud",
    title_sr: "Uplata unapred",
    summary_en: "The hook is a promised payout, prize, refund, or \"release of funds\". They ask you to pay a fee first, then add new obstacles that require more payments. Escalation is serial, wrapped in formal language and fake documents. Signal: money is \"waiting\", but each step demands another fee.",
    summary_sr: "Udica je obećana isplata, nagrada, povraćaj ili \"oslobađanje sredstava\". Traže taksu unapred, zatim dodaju nove prepreke uz seriju uplata. Eskalacija se maskira formalnim tonom i lažnim dokumentima. Signal: novac \"čeka\", a svaki korak traži novu taksu.",
    subtitle: {
      sr: "Uplata unapred kao uslov: 'taksa' pre 'isplate' ili 'oslobađanja sredstava'.",
      en: "Upfront payment as a condition: \"fee\" before \"payout\" or \"release of funds\"."
    },
    hasPage: true,
    tags: ["uplate unapred"],
    overlaps: ["crypto-scam", "marketplace-scam", "rental-scam", "loan-scam", "recovery-scam", "job-scam", "giveaway-scam", "charity-scam"],
    sources: [
      { name: "FTC – How to avoid a scam", url: "https://consumer.ftc.gov/articles/how-avoid-scam" },
      { name: "FTC – Fake prize, sweepstakes, and lottery scams", url: "https://consumer.ftc.gov/articles/fake-prize-sweepstakes-lottery-scams" }
    ]
  },

  "pig-butchering": {
    core: true,
    title: { sr: "Dug odnos + investicija", en: "Pig butchering" },
    title_en: "Pig butchering",
    title_sr: "Dug odnos + investicija",
    summary_en: "Pig butchering still combines emotional grooming with a fake investment platform, but today the persona behind it can be reinforced with generated photos, translated chats, polished voice notes, or fake video proof that makes the relationship and the trading story feel more real. The core remains the same: trust first, deposit second, larger stakes next, and blocked withdrawals at the end.",
    summary_sr: "Pig butchering i dalje spaja emotivno vezivanje sa lažnom investicionom platformom, ali danas persona iza prevare često dobija generisane fotografije, prevedene poruke, ubedljivije glasovne poruke ili lažni video dokaz koji odnos i priču o ulaganju čine stvarnijim. Suština ostaje ista: prvo poverenje, zatim uplata, onda veći ulozi, a na kraju blokirano povlačenje.",
    subtitle: {
      sr: "Dug odnos + investicija: prvo poverenje, zatim ulog, pa blokada izlaza.",
      en: "Long relationship + investment: trust first, then deposits, then exit is blocked."
    },
    hasPage: true,
    tags: ["odnos", "investicije"],
    overlaps: ["romantic-scam", "crypto-scam", "advance-fee-fraud", "recovery-scam", "investment-seminar", "sextortion-scam"],
    sources: [
      {
        name: "FinCEN Alert (2023) — Pig Butchering",
        url: "https://www.fincen.gov/system/files/shared/FinCEN_Alert_Pig_Butchering_FINAL_508c.pdf"
      },
      { name: "FDIC OIG — Pig Butchering Scams", url: "https://www.fdicoig.gov/pig-butchering-scams" },
      { name: "FINRA — Relationship Investment Scams", url: "https://www.finra.org/investors/insights/avoiding-relationship-investment-scams" }
    ]
  },

  "recovery-scam": {
    core: true,
    title: { sr: "Prevara povraćaja novca", en: "Recovery scam" },
    title_en: "Recovery scam",
    title_sr: "Prevara povraćaja novca",
    summary_en: "Recovery scams still feed on an earlier loss, but artificial intelligence can now make the rescuer sound more legitimate through fake legal calls, generated documents, polished support messages, or convincing technical explanations. The aim does not change: every supposed tracing, release, or legal step is still blocked until the victim pays one more fee or hands over one more sensitive detail.",
    summary_sr: "Recovery prevare i dalje hrane novi napad starim gubitkom, ali veštačka inteligencija danas može da učini lažnog spasioca legitimnijim kroz lažne pravne pozive, generisane dokumente, bolje poruke podrške ili ubedljivija tehnička objašnjenja. Cilj se ne menja: svako navodno praćenje, oslobađanje sredstava ili pravni korak i dalje stoji iza još jedne uplate ili još jednog osetljivog podatka.",
    subtitle: {
      sr: "Raniji gubitak kao nova udica: povraćaj obećan tek posle sledeće naknade.",
      en: "An earlier loss turned into a new hook: recovery promised only after the next fee."
    },
    hasPage: true,
    tags: ["uplate unapred"],
    overlaps: ["advance-fee-fraud", "crypto-scam", "romantic-scam", "pig-butchering"],
    sources: [
      { name: "FTC – Refund and recovery scams", url: "https://consumer.ftc.gov/articles/refund-and-recovery-scams" },
      { name: "FBI – Common scams and crimes", url: "https://www.fbi.gov/how-we-can-help-you/scams-and-safety/common-scams-and-crimes" }
    ]
  },

  "impersonation-scam": {
    core: true,
    title: { sr: "Lažno predstavljanje (impersonation)", en: "Impersonation scam" },
    title_en: "Impersonation scam",
    title_sr: "Lažno predstavljanje",
    summary_en: "It starts with authority: bank, police, delivery, support. They ask for codes, passwords, or a payment as part of a \"procedure\". Escalation uses threats and artificial urgency. Signal: a demand for sensitive data paired with pressure to avoid verification.",
    summary_sr: "Početak je autoritet: banka, policija, dostava, podrška. Traže kodove, lozinke ili uplatu uz priču o \"proceduri\". Eskalacija ide kroz pretnje i hitnost. Signal: zahtev za osetljivim podacima uz pritisak da provera stane.",
    subtitle: {
      sr: "Banka/policija/firma/rođak: autoritet + hitnost + zahtev za kodovima ili uplatom.",
      en: "Bank/police/company/relative: authority + urgency + request for codes or payment."
    },
    hasPage: true,
    tags: ["autoritet"],
    overlaps: ["fake-call-scam", "vishing", "phishing", "account-takeover"],
    sources: [
      { name: "FTC – How to avoid a government impersonation scam", url: "https://consumer.ftc.gov/articles/how-avoid-government-impersonator-scam" },
      { name: "CISA – Avoiding Social Engineering and Phishing Attacks", url: "https://www.cisa.gov/news-events/news/avoiding-social-engineering-and-phishing-attacks" }
    ]
  },

  "job-scam": {
    core: true,
    title: { sr: "Prevara sa ponudom posla", en: "Job scam" },
    title_en: "Job scam",
    title_sr: "Prevara sa ponudom posla",
    summary_en: "A job scam still uses the promise of employment to collect fees, documents, account access, or identity data, but today the fake recruiter can appear much more polished through generated messages, cleaner profiles, and staged voice or video interviews. The logic stays the same: the job feels almost secured before the company, contract path, and payment model can be checked independently.",
    summary_sr: "Prevara sa poslom i dalje koristi obećanje zaposlenja da izvuče naknade, dokumenta, pristup nalogu ili podatke o identitetu, ali danas lažni regruter može delovati mnogo uglađenije kroz generisane poruke, sređenije profile i nameštene glasovne ili video razgovore. Logika ostaje ista: posao deluje gotovo dobijeno pre nego što se firma, ugovor i način isplate mogu nezavisno proveriti.",
    subtitle: {
      sr: "Ponuda posla kao ulaz: dokumenta, onboarding, naknade ili uvlačenje u tuđi tok novca i robe.",
      en: "A job offer as the entry point: documents, onboarding, fees, or being pulled into someone else’s money and goods flow."
    },
    hasPage: true,
    overlaps: ["advance-fee-fraud", "phishing", "impersonation-scam"],
    sources: [
      { name: "FTC – Job scams", url: "https://consumer.ftc.gov/articles/job-scams" },
      { name: "FBI – Common frauds and scams", url: "https://www.fbi.gov/how-we-can-help-you/scams-and-safety/common-frauds-and-scams" }
    ]
  },

  "mystery-shopper-scam": {
    core: true,
    title: { sr: "Prevara sa tajnim kupcem", en: "Mystery shopper scam" },
    title_en: "Mystery shopper scam",
    title_sr: "Prevara sa tajnim kupcem",
    summary_en: "A fake mystery shopper offer asks for gift cards, your own spend, or money moves under a reimbursement story.",
    summary_sr: "Lažna ponuda tajnog kupca traži kupovinu darovnih kartica, sopstveni trošak ili prenos novca pod izgovorom nadoknade.",
    subtitle: { sr: "Zadaci sa karticama i prenosima; nema proverljivog poslodavca.", en: "Tasks with cards and transfers; no verifiable employer." },
    hasPage: true,
    tags: ["posao"],
    overlaps: ["job-scam", "recruitment-scam", "work-from-home-scam", "fake-hr-scam", "advance-fee-fraud", "marketplace-scam"],
    sources: []
  },

  "employment-visa-job-scam": {
    core: true,
    title: { sr: "Prevara sa lažnom ponudom posla u inostranstvu i viznim naknadama", en: "Employment visa job scam" },
    title_en: "Employment visa job scam",
    title_sr: "Prevara sa lažnom ponudom posla u inostranstvu i viznim naknadama",
    summary_en: "A foreign job offer quickly turns into visa, agency, translation, or medical fees before a signed employment contract.",
    summary_sr: "Ponuda posla u drugoj zemlji brzo prelazi u naknade za vizu, agenciju, prevod ili medicinu pre potpisanog ugovora o radu.",
    subtitle: { sr: "Inostranstvo kao mamac; prvo novac, posao se odlikuje.", en: "Abroad as bait; money first, the job stays vague." },
    hasPage: true,
    tags: ["posao"],
    overlaps: ["job-scam", "recruitment-scam", "work-from-home-scam", "fake-hr-scam", "advance-fee-fraud", "identity-theft", "phishing"],
    sources: []
  },

  "hr-file-verification-phishing": {
    core: true,
    title: { sr: "Fišing lažnog kadrovskog portala za proveru dosijea", en: "HR file verification phishing" },
    title_en: "HR file verification phishing",
    title_sr: "Fišing lažnog kadrovskog portala za proveru dosijea",
    summary_en: "A fake HR portal scam can now look more credible because the message, portal copy, and follow-up recruiter tone are easier to tailor to the victim’s role and company. The goal is still straightforward: get personal data, documents, or account access under the story of updating an employee or candidate file.",
    summary_sr: "Fišing lažnog HR portala danas može delovati ubedljivije jer su poruka, tekst na portalu i prateći ton regrutera lakše prilagodljivi ulozi i firmi žrtve. Cilj je i dalje jednostavan: uzeti lične podatke, dokumenta ili pristup nalogu pod pričom o ažuriranju dosijea kandidata ili zaposlenog.",
    subtitle: { sr: "Lažna forma za zaposlene; cilj su podaci i pristup.", en: "Fake employee form; goal is data and access." },
    hasPage: true,
    tags: ["posao"],
    overlaps: ["job-scam", "recruitment-scam", "work-from-home-scam", "fake-hr-scam", "advance-fee-fraud", "phishing", "identity-theft"],
    sources: []
  },

  "timesheet-correction-scam": {
    core: true,
    title: { sr: "Prevara sa ispravkom evidencije rada i lažnim linkom za platu", en: "Timesheet correction scam" },
    title_en: "Timesheet correction scam",
    title_sr: "Prevara sa ispravkom evidencije rada i lažnim linkom za platu",
    summary_en: "A message claims your timesheet is wrong and asks you to sign in on a link for payout; the goal is account or data theft.",
    summary_sr: "Poruka tvrdi da je evidencija sata pogrešna i traži prijavu na link radi isplate; cilj je krađa naloga ili podataka.",
    subtitle: { sr: "Hitna ispravka plate kao izgovor za kradu prijave.", en: "Urgent pay fix as a pretext to steal login." },
    hasPage: true,
    tags: ["posao"],
    overlaps: ["job-scam", "recruitment-scam", "work-from-home-scam", "fake-hr-scam", "advance-fee-fraud", "phishing", "business-email-compromise"],
    sources: []
  },

  "fake-press-accreditation-scam": {
    core: true,
    title: { sr: "Prevara sa lažnom akreditacijom za štampu ili medijski događaj", en: "Fake press accreditation scam" },
    title_en: "Fake press accreditation scam",
    title_sr: "Prevara sa lažnom akreditacijom za štampu ili medijski događaj",
    summary_en: "Press accreditation or backstage access is offered for a fee before the organizer’s official registration.",
    summary_sr: "Nudi se novinarska akreditacija ili backstage pristup uz naknadu pre zvanične registracije organizatora.",
    subtitle: { sr: "Lažni press pass i hitna uplata.", en: "Fake press pass and urgent payment." },
    hasPage: true,
    tags: ["posao"],
    overlaps: ["job-scam", "recruitment-scam", "work-from-home-scam", "fake-hr-scam", "advance-fee-fraud", "impersonation-scam"],
    sources: []
  },

  "fake-copyright-strike-removal": {
    core: true,
    title: { sr: "Prevara sa lažnom prijavom autorskih prava i naplatom uklanjanja", en: "Fake copyright strike removal scam" },
    title_en: "Fake copyright strike removal scam",
    title_sr: "Prevara sa lažnom prijavom autorskih prava i naplatom uklanjanja",
    summary_en: "A message claims your channel has a copyright problem and asks for payment or access to remove the strike.",
    summary_sr: "Poruka tvrdi da je kanal u problemu zbog autorskih prava i traži uplatu ili pristup da se strike ukloni.",
    subtitle: { sr: "Lažni strike i hitna naplata.", en: "Fake strike and urgent billing." },
    hasPage: true,
    tags: ["posao"],
    overlaps: ["job-scam", "recruitment-scam", "work-from-home-scam", "fake-hr-scam", "advance-fee-fraud", "phishing", "impersonation-scam"],
    sources: []
  },

  "publisher-literary-agent-fee": {
    core: true,
    title: { sr: "Prevara sa lažnom naknadom izdavača ili književnog agenta", en: "Publisher or literary agent fee scam" },
    title_en: "Publisher or literary agent fee scam",
    title_sr: "Prevara sa lažnom naknadom izdavača ili književnog agenta",
    summary_en: "An author is offered publication for a reading, marketing, or editorial fee before a standard contract.",
    summary_sr: "Autoru se nudi izdavanje uz naknadu za čitanje, marketing ili redakciju pre standardnog ugovora.",
    subtitle: { sr: "Plaćanje pre ugovora i pre provere izdavača.", en: "Paying before contract and before verifying the publisher." },
    hasPage: true,
    tags: ["posao"],
    overlaps: ["job-scam", "recruitment-scam", "work-from-home-scam", "fake-hr-scam", "advance-fee-fraud"],
    sources: []
  },

  "virtual-assistant-payment-forwarding": {
    core: true,
    title: { sr: "Prevara virtuelnog asistenta sa prosleđivanjem uplata preko tuđeg računa", en: "Virtual assistant payment forwarding scam" },
    title_en: "Virtual assistant payment forwarding scam",
    title_sr: "Prevara virtuelnog asistenta sa prosleđivanjem uplata preko tuđeg računa",
    summary_en: "An assistant job boils down to receiving and sending money from your account for a small cut; that is a typical money mule setup.",
    summary_sr: "Posao asistenta se svodi na primanje i slanje novca sa tvog računa uz mali procenat; to je tipična money mule šema.",
    subtitle: { sr: "Administracija uplata kao pokriće za pranje novca.", en: "Payment admin as cover for laundering." },
    hasPage: true,
    tags: ["posao"],
    overlaps: ["job-scam", "recruitment-scam", "work-from-home-scam", "fake-hr-scam", "advance-fee-fraud", "money-mule-recruitment"],
    sources: []
  },

  "remote-payroll-setup-scam": {
    core: true,
    title: { sr: "Prevara sa lažnim postavljanjem isplate plate na daljinu", en: "Remote payroll setup scam" },
    title_en: "Remote payroll setup scam",
    title_sr: "Prevara sa lažnim postavljanjem isplate plate na daljinu",
    summary_en: "Fake HR asks for direct deposit details or account access to set up pay; the goal is stealing wages or identity.",
    summary_sr: "Lažni HR traži podatke direktnog zaduženja ili pristup nalogu radi podešavanja isplate; cilj je krađa zarade ili identiteta.",
    subtitle: { sr: "Forma za nalog pre prvog dana rada.", en: "Bank form before the first workday." },
    hasPage: true,
    tags: ["posao"],
    overlaps: ["job-scam", "recruitment-scam", "work-from-home-scam", "fake-hr-scam", "advance-fee-fraud", "phishing", "identity-theft"],
    sources: []
  },

  "freelancer-milestone-release-scam": {
    core: true,
    title: { sr: "Prevara sa lažnim oslobađanjem milestone uplate na freelancing platformi", en: "Freelancer milestone release scam" },
    title_en: "Freelancer milestone release scam",
    title_sr: "Prevara sa lažnim oslobađanjem milestone uplate na freelancing platformi",
    summary_en: "A client asks for a payment or deposit to release platform funds or pass verification; real escrow does not work that way.",
    summary_sr: "Klijent traži uplatu ili depozit da bi se oslobodio novca sa platforme ili da prođe verifikacija; pravi escrow ne radi tako.",
    subtitle: { sr: "Lažni escrow i naknada za otključavanje.", en: "Fake escrow and an unlock fee." },
    hasPage: true,
    tags: ["posao"],
    overlaps: ["job-scam", "recruitment-scam", "work-from-home-scam", "fake-hr-scam", "advance-fee-fraud", "marketplace-scam"],
    sources: []
  },

  "fake-recruiter-calendar-link": {
    core: true,
    title: { sr: "Prevara sa lažnim linkom kalendara regrutera", en: "Fake recruiter calendar link scam" },
    title_en: "Fake recruiter calendar link scam",
    title_sr: "Prevara sa lažnim linkom kalendara regrutera",
    summary_en: "An interview invite leads to a fake calendar or login page that steals account or data.",
    summary_sr: "Poziv na intervju vodi na lažnu stranicu kalendara ili prijavu koja krade nalog ili podatke.",
    subtitle: { sr: "Zakaži slot kao fišing.", en: "Book a slot as phishing." },
    hasPage: true,
    tags: ["posao"],
    overlaps: ["job-scam", "recruitment-scam", "work-from-home-scam", "fake-hr-scam", "advance-fee-fraud", "phishing"],
    sources: []
  },

  "employment-contract-processing-fee": {
    core: true,
    title: { sr: "Prevara sa naknadom za obradu ugovora o radu", en: "Employment contract processing fee scam" },
    title_en: "Employment contract processing fee scam",
    title_sr: "Prevara sa naknadom za obradu ugovora o radu",
    summary_en: "After a fake acceptance, a fee is asked for notary, contract registration, or admin processing before work starts.",
    summary_sr: "Nakon lažnog prijema traži se uplata za notara, registraciju ugovora ili administrativnu obradu pre početka rada.",
    subtitle: { sr: "Taksa za papir koji ne stiže.", en: "Fee for paper that never arrives." },
    hasPage: true,
    tags: ["posao"],
    overlaps: ["job-scam", "recruitment-scam", "work-from-home-scam", "fake-hr-scam", "advance-fee-fraud"],
    sources: []
  },

  "visa-sponsorship-employment-scam": {
    core: true,
    title: { sr: "Prevara sa lažnim sponzorstvom vize za zaposlenje", en: "Visa sponsorship employment scam" },
    title_en: "Visa sponsorship employment scam",
    title_sr: "Prevara sa lažnim sponzorstvom vize za zaposlenje",
    summary_en: "An employer claims to sponsor a visa for a documentation or priority fee; real sponsorship does not charge this way before verification.",
    summary_sr: "Tvrdi se da poslodavac sponzoriše vizu uz naknadu za dokumentaciju ili prioritet; pravi sponzor ne naplaćuje na isti način pre verifikacije.",
    subtitle: { sr: "Lažno sponzorstvo i serija taksi.", en: "Fake sponsorship and a fee series." },
    hasPage: true,
    tags: ["posao"],
    overlaps: ["job-scam", "recruitment-scam", "work-from-home-scam", "fake-hr-scam", "advance-fee-fraud", "identity-theft"],
    sources: []
  },

  "seasonal-work-placement-scam": {
    core: true,
    title: { sr: "Prevara sa lažnim sezonskim zapošljavanjem (hotel, skijalište, letovanje)", en: "Seasonal work placement scam" },
    title_en: "Seasonal work placement scam",
    title_sr: "Prevara sa lažnim sezonskim zapošljavanjem (hotel, skijalište, letovanje)",
    summary_en: "Seasonal work is offered with fees for housing, uniform, or agency before arrival; the job and housing do not exist.",
    summary_sr: "Nudi se sezonski posao uz naknadu za smeštaj, uniformu ili agenciju pre dolaska na lokaciju; posao i smeštaj ne postoje.",
    subtitle: { sr: "Sezona kao mamac; prvo uplata.", en: "Season as bait; pay first." },
    hasPage: true,
    tags: ["posao"],
    overlaps: ["job-scam", "recruitment-scam", "work-from-home-scam", "fake-hr-scam", "advance-fee-fraud"],
    sources: []
  },

  "au-pair-placement-scam": {
    core: true,
    title: { sr: "Prevara sa lažnim au pair programom i naknadom za plasman", en: "Au pair placement scam" },
    title_en: "Au pair placement scam",
    title_sr: "Prevara sa lažnim au pair programom i naknadom za plasman",
    summary_en: "Payment is asked for host family placement, visa, or insurance before an official programme and family contract.",
    summary_sr: "Traži se uplata za plasman kod porodice, vizu ili osiguranje pre zvaničnog programa i ugovora sa porodicom.",
    subtitle: { sr: "Plasman koji ne postoji.", en: "Placement that does not exist." },
    hasPage: true,
    tags: ["posao"],
    overlaps: ["job-scam", "recruitment-scam", "work-from-home-scam", "fake-hr-scam", "advance-fee-fraud"],
    sources: []
  },

  "cruise-ship-job-scam": {
    core: true,
    title: { sr: "Prevara sa lažnim poslom na krstarenju", en: "Cruise ship job scam" },
    title_en: "Cruise ship job scam",
    title_sr: "Prevara sa lažnim poslom na krstarenju",
    summary_en: "A ship job is offered with fees for medical, uniform, or agency registration before a cruise line contract.",
    summary_sr: "Nudi se posao na brodu uz naknadu za medicinu, uniformu ili agencijsku registraciju pre ugovora sa brodaricom.",
    subtitle: { sr: "Brod kao mamac; prvo troškovi.", en: "Ship as bait; costs first." },
    hasPage: true,
    tags: ["posao"],
    overlaps: ["job-scam", "recruitment-scam", "work-from-home-scam", "fake-hr-scam", "advance-fee-fraud"],
    sources: []
  },

  "airline-crew-recruitment-scam": {
    core: true,
    title: { sr: "Prevara sa lažnim zapošljavanjem kabinskog osoblja", en: "Airline crew recruitment scam" },
    title_en: "Airline crew recruitment scam",
    title_sr: "Prevara sa lažnim zapošljavanjem kabinskog osoblja",
    summary_en: "Training or a job is offered with fees for uniform, tests, or seat reservation before the airline’s official process.",
    summary_sr: "Nudi se trening ili posao uz naknadu za uniformu, test ili rezervaciju mesta pre zvaničnog procesa aviokompanije.",
    subtitle: { sr: "Lažni trening i taksa za ulaz.", en: "Fake training and entry tax." },
    hasPage: true,
    tags: ["posao"],
    overlaps: ["job-scam", "recruitment-scam", "work-from-home-scam", "fake-hr-scam", "advance-fee-fraud"],
    sources: []
  },

  "embassy-local-hire-scam": {
    core: true,
    title: { sr: "Prevara sa lažnim lokalnim zapošljavanjem u ambasadi", en: "Embassy local hire scam" },
    title_en: "Embassy local hire scam",
    title_sr: "Prevara sa lažnim lokalnim zapošljavanjem u ambasadi",
    summary_en: "An embassy job is offered with a security or registration fee before an official mission site competition.",
    summary_sr: "Nudi se posao u ambasadi uz naknadu za bezbednosnu proveru ili registraciju pre zvaničnog konkursa na sajtu misije.",
    subtitle: { sr: "Lažni diplomatski HR.", en: "Fake diplomatic HR." },
    hasPage: true,
    tags: ["posao"],
    overlaps: ["job-scam", "recruitment-scam", "work-from-home-scam", "fake-hr-scam", "advance-fee-fraud", "government-impersonation", "impersonation-scam"],
    sources: []
  },

  "security-clearance-job-scam": {
    core: true,
    title: { sr: "Prevara sa lažnom naplatom bezbednosne provere za posao", en: "Security clearance job scam" },
    title_en: "Security clearance job scam",
    title_sr: "Prevara sa lažnom naplatom bezbednosne provere za posao",
    summary_en: "Payment is asked to start or speed up a security clearance before hiring; real procedures do not charge the candidate this way.",
    summary_sr: "Traži se uplata da bi se pokrenula ili ubrzala bezbednosna provera pre zaposlenja; prave procedure ne naplaćuju kandidatu na isti način.",
    subtitle: { sr: "Lažna clearance taksa.", en: "Fake clearance tax." },
    hasPage: true,
    tags: ["posao"],
    overlaps: ["job-scam", "recruitment-scam", "work-from-home-scam", "fake-hr-scam", "advance-fee-fraud", "impersonation-scam"],
    sources: []
  },

  "background-check-fee-scam": {
    core: true,
    title: { sr: "Prevara sa naplatom background check pre zaposlenja", en: "Background check fee scam" },
    title_en: "Background check fee scam",
    title_sr: "Prevara sa naplatom background check pre zaposlenja",
    summary_en: "The candidate pays a third party for a background check before a contract; real employers usually cover cost or use an approved vendor.",
    summary_sr: "Kandidat plaća proveru prošlosti trećoj strani pre ugovora; pravi poslodavac uglavnom snosi trošak ili koristi odobrenog dobavljača.",
    subtitle: { sr: "Lažna provera i direktna uplata.", en: "Fake check and direct payment." },
    hasPage: true,
    tags: ["posao"],
    overlaps: ["job-scam", "recruitment-scam", "work-from-home-scam", "fake-hr-scam", "advance-fee-fraud"],
    sources: []
  },

  "certification-before-hire-scam": {
    core: true,
    title: { sr: "Prevara sa obaveznim sertifikatom pre zaposlenja (lažna obuka)", en: "Certification before hire scam" },
    title_en: "Certification before hire scam",
    title_sr: "Prevara sa obaveznim sertifikatom pre zaposlenja (lažna obuka)",
    summary_en: "You must buy a course or certificate from a specific provider before an offer; the job does not exist or the certificate is not recognized.",
    summary_sr: "Moraš kupiti kurs ili sertifikat od određenog provajdera pre ponude; posao ne postoji ili sertifikat nije priznat.",
    subtitle: { sr: "Lažna obuka kao uslov.", en: "Fake training as a condition." },
    hasPage: true,
    tags: ["posao"],
    overlaps: ["job-scam", "recruitment-scam", "work-from-home-scam", "fake-hr-scam", "advance-fee-fraud"],
    sources: []
  },

  "training-bond-scam": {
    core: true,
    title: { sr: "Prevara sa lažnim obavezujućim ugovorom o obuci i depozitom", en: "Training bond scam" },
    title_en: "Training bond scam",
    title_sr: "Prevara sa lažnim obavezujućim ugovorom o obuci i depozitom",
    summary_en: "A deposit or bond is requested so you will not leave training or work; terms are unfair and money is kept on false grounds.",
    summary_sr: "Traži se depozit ili garancija da ne napustiš obuku ili posao; uslovi su nepravedni i novac se zadržava pod lažnim izgovorom.",
    subtitle: { sr: "Veza za novac pre pravog rada.", en: "Money tie before real work." },
    hasPage: true,
    tags: ["posao"],
    overlaps: ["job-scam", "recruitment-scam", "work-from-home-scam", "fake-hr-scam", "advance-fee-fraud"],
    sources: []
  },

  "work-permit-medical-fee-scam": {
    core: true,
    title: { sr: "Prevara sa lažnim medicinskim ili administrativnim troškom za radnu dozvolu", en: "Work permit medical fee scam" },
    title_en: "Work permit medical fee scam",
    title_sr: "Prevara sa lažnim medicinskim ili administrativnim troškom za radnu dozvolu",
    summary_en: "Payment is asked for an exam, vaccine, or fast-track permit before an official appointment or before paying the government body.",
    summary_sr: "Traži se uplata za pregled, vakcinu ili fast track dozvolu pre zvaničnog termina ili pre uplate državnoj ustanovi.",
    subtitle: { sr: "Lažni medicinski korak.", en: "Fake medical step." },
    hasPage: true,
    tags: ["posao"],
    overlaps: ["job-scam", "recruitment-scam", "work-from-home-scam", "fake-hr-scam", "advance-fee-fraud"],
    sources: []
  },

  "fake-internship-stipend-scam": {
    core: true,
    title: { sr: "Prevara sa lažnom internskom stipendijom i naknadom", en: "Fake internship stipend scam" },
    title_en: "Fake internship stipend scam",
    title_sr: "Prevara sa lažnom internskom stipendijom i naknadom",
    summary_en: "An internship with a stipend is offered but materials, software, or uniform fees come first; the stipend never arrives.",
    summary_sr: "Nudi se staž uz stipendiju ali prvo traže uplatu za materijale, softver ili uniformu; stipendija ne stiže.",
    subtitle: { sr: "Lažna stipendija i pravi trošak.", en: "Fake stipend and real cost." },
    hasPage: true,
    tags: ["posao"],
    overlaps: ["job-scam", "recruitment-scam", "work-from-home-scam", "fake-hr-scam", "advance-fee-fraud"],
    sources: []
  },

  "scholarship-fee-scam": {
    core: true,
    title: { sr: "Prevara sa lažnom stipendijom i taksom za prijavu", en: "Scholarship fee scam" },
    title_en: "Scholarship fee scam",
    title_sr: "Prevara sa lažnom stipendijom i taksom za prijavu",
    summary_en: "A scholarship notice arrives with an application processing or insurance fee; the programme or fund does not exist.",
    summary_sr: "Stiže obaveštenje o stipendiji uz naknadu za obradu prijave ili osiguranje; program ili fond ne postoji.",
    subtitle: { sr: "Stipendija koja traži novac unapred.", en: "Scholarship that asks for money upfront." },
    hasPage: true,
    tags: ["posao"],
    overlaps: ["job-scam", "recruitment-scam", "work-from-home-scam", "fake-hr-scam", "advance-fee-fraud"],
    sources: []
  },

  "student-accommodation-scam": {
    core: true,
    title: { sr: "Prevara sa lažnim studentskim smeštajem", en: "Student accommodation scam" },
    title_en: "Student accommodation scam",
    title_sr: "Prevara sa lažnim studentskim smeštajem",
    summary_en: "A room or flat ad asks for a deposit before a viewing; the housing does not exist or the owner is fake.",
    summary_sr: "Oglas za sobu ili stan traži depozit pre obilaska; smeštaj ne postoji ili vlasnik nije pravi.",
    subtitle: { sr: "Depozit pre ključa.", en: "Deposit before keys." },
    hasPage: true,
    tags: ["posao"],
    overlaps: ["job-scam", "recruitment-scam", "work-from-home-scam", "fake-hr-scam", "advance-fee-fraud", "rental-scam"],
    sources: []
  },

  "fake-tutor-course-scam": {
    core: true,
    title: { sr: "Prevara sa lažnim kursem ili tutorstvom uz predplatu", en: "Fake tutor course scam" },
    title_en: "Fake tutor course scam",
    title_sr: "Prevara sa lažnim kursem ili tutorstvom uz predplatu",
    summary_en: "Guaranteed exam success is offered with an expensive lesson or material package that does not exist or is copied.",
    summary_sr: "Nudi se garantovan uspeh na ispitu uz skup paket časova ili materijala koji ne postoje ili su kopija.",
    subtitle: { sr: "Garantovan rezultat za novac unapred.", en: "Guaranteed result for upfront money." },
    hasPage: true,
    tags: ["posao"],
    overlaps: ["job-scam", "recruitment-scam", "work-from-home-scam", "fake-hr-scam", "advance-fee-fraud"],
    sources: []
  },

  "fake-diploma-legalization-scam": {
    core: true,
    title: { sr: "Prevara sa lažnom legalizacijom ili apostilom diplome", en: "Fake diploma legalization scam" },
    title_en: "Fake diploma legalization scam",
    title_sr: "Prevara sa lažnom legalizacijom ili apostilom diplome",
    summary_en: "Fast legalization or apostille is offered via a broker payment without going through the official chancellery or court.",
    summary_sr: "Nudi se brza legalizacija ili apostil uz uplatu posredniku bez slanja kroz zvaničnu kancleriju ili sud.",
    subtitle: { sr: "Lažni apostil.", en: "Fake apostille." },
    hasPage: true,
    tags: ["posao"],
    overlaps: ["job-scam", "recruitment-scam", "work-from-home-scam", "fake-hr-scam", "advance-fee-fraud", "apostille-legalization-scam"],
    sources: []
  },

  "child-talent-agency-scam": {
    core: true,
    title: { sr: "Prevara sa lažnom agencijom za dečje talente", en: "Child talent agency scam" },
    title_en: "Child talent agency scam",
    title_sr: "Prevara sa lažnom agencijom za dečje talente",
    summary_en: "A parent pays for casting, portfolio, or a contest that leads nowhere real; the child is used as emotional pressure.",
    summary_sr: "Roditelj plaća za casting, portfolio ili takmičenje koje ne vodi u pravi posao; dete se koristi kao emotivni pritisak.",
    subtitle: { sr: "Lažni casting i skup foto set.", en: "Fake casting and expensive photo set." },
    hasPage: true,
    tags: ["posao"],
    overlaps: ["job-scam", "recruitment-scam", "work-from-home-scam", "fake-hr-scam", "advance-fee-fraud"],
    sources: []
  },

  "festival-volunteer-fee-scam": {
    core: true,
    title: { sr: "Prevara sa naplatom za volontersko mesto na festivalu", en: "Festival volunteer fee scam" },
    title_en: "Festival volunteer fee scam",
    title_sr: "Prevara sa naplatom za volontersko mesto na festivalu",
    summary_en: "Payment is asked for volunteer accreditation, T-shirt, or training although real festivals rarely charge volunteers.",
    summary_sr: "Traži se uplata za volontersku akreditaciju, majicu ili obuku iako pravi festivali retko naplaćuju volontere.",
    subtitle: { sr: "Volonter koji plaća.", en: "Paying volunteer." },
    hasPage: true,
    tags: ["posao"],
    overlaps: ["job-scam", "recruitment-scam", "work-from-home-scam", "fake-hr-scam", "advance-fee-fraud"],
    sources: []
  },

  "event-staffing-fee-scam": {
    core: true,
    title: { sr: "Prevara sa naknadom za angažovanje na događaju (koncert, sajam)", en: "Event staffing fee scam" },
    title_en: "Event staffing fee scam",
    title_sr: "Prevara sa naknadom za angažovanje na događaju (koncert, sajam)",
    summary_en: "Paid event staff is offered with a uniform or roster fee before the organizer confirms engagement.",
    summary_sr: "Nudi se plaćeno osoblje za događaj uz naknadu za uniformu ili listu pre nego što organizator potvrdi angažman.",
    subtitle: { sr: "Lažna lista osoblja.", en: "Fake staff roster." },
    hasPage: true,
    tags: ["posao"],
    overlaps: ["job-scam", "recruitment-scam", "work-from-home-scam", "fake-hr-scam", "advance-fee-fraud"],
    sources: []
  },

  "deepfake-job-interview-scam": {
    core: true,
    title: { sr: "Prevara sa lažnim video intervjujem (montirani snimak ili lažni direktor)", en: "Deepfake job interview scam" },
    title_en: "Deepfake job interview scam",
    title_sr: "Prevara sa lažnim video intervjujem (montirani snimak ili lažni direktor)",
    summary_en: "A deepfake job interview scam uses a fake face, a pre-recorded executive clip, or a manipulated video call to make the employer look real before fees, documents, or account access requests appear. The scam still follows the old hiring pattern; artificial intelligence mainly makes the interview itself feel like proof.",
    summary_sr: "Prevara sa lažnim video intervjujem koristi lažno lice, snimljenu poruku rukovodioca ili izmenjen video-poziv da bi poslodavac delovao stvarno pre nego što se pojave zahtevi za novac, dokumenta ili pristup nalogu. Obrazac prevare je i dalje stari obrazac zapošljavanja; veštačka inteligencija pre svega čini da sam intervju izgleda kao dokaz.",
    subtitle: { sr: "Lažno lice firme na ekranu.", en: "Fake face of the company on screen." },
    hasPage: true,
    tags: ["posao"],
    overlaps: ["job-scam", "recruitment-scam", "work-from-home-scam", "fake-hr-scam", "advance-fee-fraud", "impersonation-scam", "phishing"],
    sources: []
  },

  "investment-seminar": {
    title: { sr: "Lažni investicioni mentor", en: "Fake investment \"mentor\"" },
    title_en: "Fake investment \"mentor\"",
    title_sr: "Lažni investicioni mentor",
    summary_en: "The setup is mentorship, \"signals\", and a promise of a repeatable system. They ask for course fees or deposits to a platform. Escalation pushes larger stakes and new charges. Signal: secrecy, urgency, and a flow built around sending money.",
    summary_sr: "Ulaz je mentorstvo, \"signali\" i obećanje ponovljive zarade. Traže uplatu za kurs ili depozit na platformu. Eskalacija gura veće uloge i nove naknade. Signal: tajnost, hitnost i tok koji se vrti oko uplate.",
    subtitle: {
      sr: "Mentorstvo kao fasada: guranje na platforme i veće uloge.",
      en: "Mentorship as a front: pushing platforms and larger deposits."
    },
    hasPage: true,
    tags: ["investicije"],
    overlaps: ["crypto-scam", "fake-call-scam", "advance-fee-fraud"],
    sources: []
  },

  "fake-delivery": {
    core: true,
    title: { sr: "Lažna dostava / kurir", en: "Fake delivery / courier" },
    title_en: "Fake delivery / courier",
    title_sr: "Lažna dostava / kurir",
    summary_en: "Fake delivery is the broad courier frame: a message, email, or call claims there is a parcel issue, address problem, customs hold, insurance cost, or delivery verification. Unlike parcel and redelivery subtypes, it does not need one specific narrative; the courier pretext is simply used to open a link, form, or call that extracts card data, codes, or payment. Signal: contact about a shipment arrives outside the seller’s official flow and asks for more than simple status tracking.",
    summary_sr: "Lažna dostava je širok kurirski okvir: poruka, imejl ili poziv tvrde da postoji problem sa pošiljkom, adresom, carinom, osiguranjem ili potvrdom dostave. Za razliku od užih parcel i redelivery podtipova, nije vezana za jednu priču; izgovor o kuriru samo služi da otvori link, formu ili poziv koji izvlači karticu, kod ili uplatu. Signal: kontakt o pošiljci stiže van zvaničnog toka prodavca i traži više od običnog praćenja statusa.",
    subtitle: {
      sr: "Kurir kao izgovor: link, forma ili poziv koji pretvaraju status pošiljke u prag za uplatu ili krađu podataka.",
      en: "Courier as the pretext: a link, form, or call that turns shipment status into a threshold for payment or data theft."
    },
    hasPage: true,
    tags: ["krađa podataka"],
    overlaps: ["smishing", "phishing", "marketplace-scam"],
    sources: [
      { name: "FTC – Think that text message is from USPS? It could be a scam", url: "https://consumer.ftc.gov/consumer-alerts/2025/04/think-text-message-usps-it-could-be-scam" },
      { name: "CISA – Recognize and Report Phishing", url: "https://www.cisa.gov/avoid-phishing-attempts" }
    ]
  },

  "rental-scam": {
    core: true,
    title: { sr: "Prevara sa iznajmljivanjem i rezervacijama", en: "Rental / booking scam" },
    title_en: "Rental / booking scam",
    title_sr: "Prevara sa iznajmljivanjem i rezervacijama",
    summary_en: "It starts with an attractive apartment or stay framed as \"last available\". They ask for a deposit outside trusted services. Escalation adds contracts and new requirements while viewings are avoided. Signal: refusal of a video tour plus pressure to pay today.",
    summary_sr: "Početak je odličan smeštaj uz priču o poslednjem terminu. Traže depozit van poznatih servisa. Eskalacija dodaje \"papire\" i nove zahteve dok obilazak izostaje. Signal: odbijanje video-obilaska uz pritisak za uplatu istog dana.",
    subtitle: {
      sr: "Depozit unapred za nešto što ne postoji ili nije dostupno.",
      en: "Upfront deposit for something that doesn't exist or isn't available."
    },
    hasPage: true,
    tags: ["oglasi", "uplate unapred"],
    overlaps: ["advance-fee-fraud", "marketplace-scam"],
    sources: [
      { name: "FTC – Rental listing scams", url: "https://consumer.ftc.gov/articles/rental-listing-scams" },
      { name: "FBI – Common frauds and scams", url: "https://www.fbi.gov/how-we-can-help-you/scams-and-safety/common-frauds-and-scams" }
    ]
  },

  "charity-scam": {
    title: { sr: "Prevara sa donacijama", en: "Charity scam" },
    title_en: "Charity scam",
    title_sr: "Prevara sa donacijama",
    summary_en: "A charity scam still relies on emotion and urgency, but artificial intelligence can now add fake witness videos, cloned voices, or more convincing appeals that make the story feel immediate and personal. The target action does not change: send money fast before you verify the organizer, the beneficiary, or the real donation channel.",
    summary_sr: "Prevara sa donacijama i dalje se oslanja na emociju i hitnost, ali veštačka inteligencija danas može da doda lažne snimke svedoka, klonirane glasove ili ubedljivije apele koji priču čine ličnijom i hitnijom. Ciljna radnja se ne menja: pošaljite novac brzo pre nego što proverite organizatora, korisnika pomoći ili pravi kanal za donaciju.",
    subtitle: {
      sr: "Emocija + hitnost: donacija bez kontrole.",
      en: "Emotion + urgency: donating without verification."
    },
    hasPage: true,
    tags: ["uplate unapred"],
    overlaps: ["impersonation-scam", "advance-fee-fraud"],
    sources: [
      { name: "FTC – Before giving to a charity", url: "https://consumer.ftc.gov/articles/giving-charity" },
      { name: "FBI – Common frauds and scams", url: "https://www.fbi.gov/how-we-can-help-you/scams-and-safety/common-frauds-and-scams" }
    ]
  },

  "giveaway-scam": {
    core: true,
    title: { sr: "Nagradna igra", en: "Giveaway scam" },
    title_en: "Giveaway scam",
    title_sr: "Nagradna igra",
    summary_en: "It starts with a \"prize\" you never entered for. They ask for a fee, card details, or a login via an off-brand link. Escalation adds more \"claim\" steps and more data requests. Signal: a prize is conditioned on payment or card entry.",
    summary_sr: "Okidač je \"nagrada\" bez učešća. Traže taksu, unos kartice ili prijavu preko linka van zvaničnih kanala. Eskalacija dodaje nove korake \"preuzimanja\" i dodatne podatke. Signal: nagrada dolazi uz uplatu ili unos kartice.",
    subtitle: {
      sr: "'Nagrada' kao udica: taksa ili link koji krade podatke.",
      en: "\"Prize\" as bait: a fee or a link that steals data."
    },
    hasPage: true,
    tags: ["uplate unapred"],
    overlaps: ["advance-fee-fraud", "phishing", "fake-delivery"],
    sources: [
      { name: "FTC – Fake prize, sweepstakes, and lottery scams", url: "https://consumer.ftc.gov/articles/fake-prize-sweepstakes-lottery-scams" },
      { name: "CISA – Avoid Phishing", url: "https://www.cisa.gov/avoid-phishing-attempts" }
    ]
  },

  "loan-scam": {
    core: true,
    title: { sr: "Prevara sa brzim kreditom", en: "Loan scam" },
    title_en: "Loan scam",
    title_sr: "Prevara sa brzim kreditom",
    summary_en: "It starts with a fast loan framed as \"no requirements\". They ask for a processing fee or \"verification\" before any contract. Escalation adds more fees under a \"system issue\" story. Signal: the loan arrives only after upfront payments.",
    summary_sr: "Ulaz je brz kredit uz priču \"bez uslova\". Traže trošak obrade ili \"verifikaciju\" pre ugovora. Eskalacija dodaje nove naknade kroz priču o \"problemu u sistemu\". Signal: kredit stiže tek posle uplate.",
    subtitle: {
      sr: "Brz kredit, ali prvo 'trošak obrade', 'osiguranje' ili 'verifikacija'.",
      en: "Fast loan, but first a \"processing fee\", \"insurance\", or \"verification\"."
    },
    hasPage: true,
    tags: ["investicije", "uplate unapred"],
    overlaps: ["advance-fee-fraud", "phishing"],
    sources: [
      { name: "FTC – What to know about advance-fee loans", url: "https://consumer.ftc.gov/articles/what-know-about-advance-fee-loans" },
      { name: "FBI – Common frauds and scams", url: "https://www.fbi.gov/how-we-can-help-you/scams-and-safety/common-frauds-and-scams" }
    ]
  },

  "sextortion-scam": {
    core: false,
    title: { sr: "Ucena intimnim sadržajem", en: "Sextortion" },
    title_en: "Sextortion",
    title_sr: "Ucena intimnim sadržajem",
    summary_en: "Sextortion still works through fear, shame, and a demand for payment, but now the threat may be reinforced with fabricated images, altered video, or fake proof designed to make the victim panic before thinking. The core stays the same: isolate the victim, create a deadline, and turn embarrassment into a fast payment or account handover.",
    summary_sr: "Ucena intimnim sadržajem i dalje radi kroz strah, sramotu i zahtev za uplatu, ali danas pretnju mogu da pojačaju izmišljene slike, izmenjeni video ili lažni dokaz napravljen da žrtva panično reaguje pre razmišljanja. Suština ostaje ista: odvojiti žrtvu od podrške, napraviti rok i pretvoriti stid u brzu uplatu ili predaju naloga.",
    subtitle: {
      sr: "Pritisak sramotom → zahtev za uplatu (često kripto) → ponovljeni zahtevi.",
      en: "Shame pressure → payment demand (often crypto) → repeated demands."
    },
    hasPage: true,
    tags: ["odnos", "manipulacija"],
    overlaps: ["romantic-scam", "account-takeover", "phishing"],
    sources: [
      { name: "FBI – Sextortion", url: "https://www.fbi.gov/how-we-can-help-you/scams-and-safety/common-scams-and-crimes/sextortion" },
      { name: "NCMEC – Sextortion", url: "https://www.missingkids.org/theissues/sextortion" }
    ]
  },

  "pyramid-scheme": {
    core: true,
    title: { sr: "Piramidalne šeme višenivojske prodaje", en: "Pyramid schemes (MLM)" },
    title_en: "Pyramid schemes (MLM)",
    title_sr: "Piramidalne šeme višenivojske prodaje",
    summary_en: "The setup is \"passive income\" and a team story. They ask you to buy packages and recruit new members to unlock earnings. Escalation pushes more expensive tiers and constant recruiting. Signal: recruitment dominates, product sales stay secondary.",
    summary_sr: "Polazna tačka je priča o pasivnom prihodu i timu. Traže kupovinu paketa i stalno dovođenje novih članova. Eskalacija gura skuplje pakete i pritisak na regrutaciju. Signal: regrutacija dominira, prodaja proizvoda ostaje sporedna.",
    subtitle: {
      sr: "Zarađuješ SAMO regrutovanjem novih članova - ne prodajom proizvoda. Matematički nemoguće.",
      en: "Earn ONLY by recruiting new members - not selling products. Mathematically impossible."
    },
    hasPage: true,
    tags: ["investicije", "regrutovanje"],
    overlaps: ["ponzi-scheme", "crypto-scam", "investment-seminar", "job-scam"],
    sources: [
      { name: "FTC — Multi-level marketing and pyramid schemes" }
    ]
  },

  "ponzi-scheme": {
    core: true,
    title: { sr: "Ponzi šeme", en: "Ponzi schemes" },
    title_en: "Ponzi schemes",
    title_sr: "Ponzi šeme",
    summary_en: "It starts with a stable high return with \"guarantees\". They ask for investment and encourage reinvesting payouts. Escalation holds while new money flows in, then withdrawals slow or stop. Signal: unclear business model and unreal stability of returns.",
    summary_sr: "Ulaz je stabilan visok prinos uz \"garancije\". Traže ulaganje i guraju reinvestiranje profita. Eskalacija traje dok priliv uplata radi, zatim povlačenje uspori ili stane. Signal: poslovni model maglovit, prinos deluje previše stabilno.",
    subtitle: {
      sr: "Pasivna investicija - prevarant plaća stare investitore novcem novih. Nema pravog poslovanja.",
      en: "Passive investment - scammer pays old investors with new money. No real business."
    },
    hasPage: true,
    tags: ["investicije"],
    overlaps: ["pyramid-scheme", "crypto-scam"],
    sources: [
      { name: "SEC — Ponzi Schemes" },
      { name: "FBI IC3 — Investment Fraud" }
    ]
  },

  "pump-dump": {
    core: true,
    title: { sr: "Manipulacija cenom", en: "Pump and Dump" },
    title_en: "Pump and Dump",
    title_sr: "Manipulacija cenom",
    summary_en: "Entry point: hype and an \"insider\" signal around a coin or stock. They ask you to buy fast, often via a group. Escalation rides wave after wave while organizers sell at the top. Signal: aggressive buy calls without verifiable data.",
    summary_sr: "Okidač je hype oko coina ili akcije i \"insajderski\" signal. Traže kupovinu odmah, često kroz grupu. Eskalacija ide kroz talase hype-a dok organizatori prodaju na vrhu. Signal: agresivni pozivi na kupovinu bez proverljivih podataka.",
    subtitle: {
      sr: "Veštačko podizanje cene akcije/kriptovalute, zatim prodaja - svi ostali gube.",
      en: "Artificially inflating stock/crypto price, then selling - everyone else loses."
    },
    hasPage: true,
    tags: ["investicije", "kripto", "akcije"],
    overlaps: ["crypto-scam"],
    sources: [
      { name: "SEC — Pump and Dump Schemes" },
      { name: "FBI IC3 — Market Manipulation" }
    ]
  },

  "business-email-compromise": {
    core: true,
    title: { sr: "Kompromitovanje poslovnog imejla", en: "Business email compromise (BEC)" },
    title_en: "Business email compromise (BEC)",
    title_sr: "Kompromitovanje poslovnog imejla",
    summary_en: "Attacker sends email appearing to come from a known executive, supplier, or lawyer and requests an urgent wire transfer or bank account change. Signal: unexpected payment request by email, new IBAN, pressure to skip phone verification.",
    summary_sr: "Napadač šalje imejl koji izgleda kao da dolazi od direktora, dobavljača ili pravnika i traži hitan transfer ili promenu računa za uplatu. Signal: neočekivan zahtev za uplatom imejlom, novi IBAN, pritisak da se preskoči telefonska provera.",
    subtitle: {
      sr: "Lažni imejl od direktora ili dobavljača → hitan transfer → novi IBAN → novac odlazi.",
      en: "Fake email from executive or supplier → urgent transfer → new IBAN → funds gone."
    },
    hasPage: true,
    tags: ["firma", "imejl"],
    overlaps: ["ceo-fraud", "vendor-email-compromise", "invoice-fraud", "mandate-fraud", "phishing", "impersonation-scam", "account-takeover"],
    sources: [
      { name: "FBI IC3 – Business Email Compromise", url: "https://www.ic3.gov/PSA/2023/PSA230609" },
      { name: "CISA – Business Email Compromise" }
    ]
  },

  "ceo-fraud": {
    core: true,
    title: { sr: "Prevara u ime direktora", en: "CEO fraud" },
    title_en: "CEO fraud",
    title_sr: "Prevara u ime direktora",
    summary_en: "CEO fraud still depends on authority, secrecy, and speed, but today the fake executive can be reinforced with cloned voice, a short video call, or cleaner internal language that makes the request feel harder to question. The core is unchanged: bypass the approval chain and get money moved before anyone verifies the order through a known internal route.",
    summary_sr: "CEO prevara i dalje zavisi od autoriteta, tajnosti i brzine, ali danas lažnog rukovodioca mogu da pojačaju kloniran glas, kratak video-poziv ili uredniji interni ton zbog kog zahtev deluje teže za osporavanje. Suština se ne menja: zaobići lanac odobrenja i pomeriti novac pre nego što iko proveri nalog kroz poznat interni kanal.",
    subtitle: {
      sr: "Imejl od 'direktora' → hitan poverljivi transfer → zaobilaženje procedure → novac nestaje.",
      en: "Email from 'CEO' → urgent confidential transfer → procedure bypass → funds gone."
    },
    hasPage: true,
    tags: ["firma", "imejl"],
    overlaps: ["business-email-compromise", "vendor-email-compromise", "invoice-fraud", "mandate-fraud", "impersonation-scam", "phishing", "ai-deepfake"],
    sources: [
      { name: "FBI IC3 – BEC / CEO Fraud" },
      { name: "Europol – Business Email Compromise" }
    ]
  },

  "vendor-email-compromise": {
    core: true,
    title: { sr: "Kompromitovanje imejla dobavljača", en: "Vendor email compromise" },
    title_en: "Vendor email compromise",
    title_sr: "Kompromitovanje imejla dobavljača",
    summary_en: "Vendor email compromise still turns trust in a known supplier into redirected payments, but the scam is more dangerous when a fake supplier voice, message tone, or follow-up call is added to confirm the change. The payment redirection is old; artificial intelligence mainly makes the change request sound more natural and less suspicious.",
    summary_sr: "Kompromitovanje imejla dobavljača i dalje pretvara poverenje u poznatog partnera u pogrešnu uplatu, ali je prevara opasnija kada se doda lažni glas dobavljača, ubedljiviji ton poruka ili naknadni poziv koji potvrđuje promenu. Samo preusmeravanje plaćanja nije novo; veštačka inteligencija pre svega čini zahtev za izmenu računa prirodnijim i manje sumnjivim.",
    subtitle: {
      sr: "Lažni dobavljač šalje 'novi IBAN' → firma plaća na pogrešan račun → prevara otkrivena kasno.",
      en: "Fake supplier sends 'new IBAN' → company pays invoice to wrong account → fraud discovered late."
    },
    hasPage: true,
    tags: ["firma", "imejl"],
    overlaps: ["business-email-compromise", "invoice-fraud", "mandate-fraud", "ceo-fraud", "phishing", "account-takeover"],
    sources: [
      { name: "Action Fraud – Mandate and Invoice Fraud" },
      { name: "FBI IC3 – BEC variants" }
    ]
  },

  "invoice-fraud": {
    core: true,
    title: { sr: "Prevara sa fakturama", en: "Invoice fraud" },
    title_en: "Invoice fraud",
    title_sr: "Prevara sa fakturama",
    summary_en: "Invoice fraud still uses a fake or altered invoice to redirect payment, but today the fraud can be strengthened with a synthetic confirmation call, a fake approver message, or better formatted paperwork that makes the document feel routine. The real target action remains the same: pay to the wrong account before anyone checks the bank details through a trusted process.",
    summary_sr: "Prevara sa fakturama i dalje koristi lažnu ili izmenjenu fakturu da preusmeri uplatu, ali danas prevaru mogu da pojačaju sintetički poziv potvrde, lažna poruka odobravaoca ili bolje sređena dokumentacija zbog koje faktura deluje rutinski. Stvarna ciljna radnja ostaje ista: platiti na pogrešan račun pre nego što neko proveri podatke za uplatu kroz pouzdan postupak.",
    subtitle: {
      sr: "Lažna ili izmenjena faktura → podaci za uplatu vode napadaču → firma plaća i ne zna.",
      en: "Fake or altered invoice → payment details lead to attacker → company pays unknowingly."
    },
    hasPage: true,
    tags: ["firma", "imejl"],
    overlaps: ["business-email-compromise", "vendor-email-compromise", "mandate-fraud", "ceo-fraud", "phishing"],
    sources: [
      { name: "Action Fraud – Invoice Fraud" },
      { name: "ACFE – Business Email Compromise and Invoice Fraud" }
    ]
  },

  "mandate-fraud": {
    core: true,
    title: { sr: "Prevara sa nalozima za plaćanje", en: "Mandate fraud" },
    title_en: "Mandate fraud",
    title_sr: "Prevara sa nalozima za plaćanje",
    summary_en: "Attacker contacts a company claiming to be a supplier or utility provider and requests changes to existing payment mandates or standing orders. Ongoing payments start flowing to the attacker's account. Signal: unsolicited account change request, pressure to update quickly without documentation.",
    summary_sr: "Napadač kontaktira firmu tvrdeći da su dobavljač ili komunalno preduzeće i traži izmenu postojećih naloga za plaćanje ili trajnih naloga. Redovne uplate počinju ići na napadačev račun. Signal: nesolicitan zahtev za promenom računa, pritisak za brzu izmenu bez dokumentacije.",
    subtitle: {
      sr: "Lažni dobavljač traži izmenu trajnog naloga → redovne uplate idu napadaču → otkrivanje kasno.",
      en: "Fake supplier requests mandate change → recurring payments go to attacker → discovered late."
    },
    hasPage: true,
    tags: ["firma", "imejl"],
    overlaps: ["business-email-compromise", "invoice-fraud", "vendor-email-compromise", "ceo-fraud", "impersonation-scam"],
    sources: [
      { name: "Action Fraud – Mandate Fraud" },
      { name: "UK Finance – Authorized Push Payment fraud" }
    ]
  },

  "payment-diversion": {
    core: true,
    title: { sr: "Preusmeravanje plaćanja", en: "Payment diversion" },
    title_en: "Payment diversion",
    title_sr: "Preusmeravanje plaćanja",
    summary_en: "Payment diversion still depends on one key lie: the money should go somewhere else. What artificial intelligence changes is the believability of the supporting contact, whether through a cloned executive voice, a fake supplier confirmation, or a cleaner message that sounds fully aligned with the business context. The action the scammer wants is still simple and dangerous: approve the new payment route without independent verification.",
    summary_sr: "Preusmeravanje plaćanja i dalje zavisi od jedne ključne laži: novac navodno treba da ode na drugo mesto. Ono što veštačka inteligencija menja jeste uverljivost pratećeg kontakta, bilo kroz kloniran glas rukovodioca, lažnu potvrdu dobavljača ili uredniju poruku koja zvuči potpuno uklopljeno u poslovni kontekst. Radnja koju prevarant želi i dalje je jednostavna i opasna: odobriti novi put plaćanja bez nezavisne provere.",
    subtitle: {
      sr: "Lažna instrukcija za uplatu → promena IBAN-a → redovne uplate idu napadaču → otkrivanje kasno.",
      en: "Fake payment instruction → IBAN change → payments go to attacker → discovered late."
    },
    hasPage: true,
    tags: ["firma", "imejl", "poziv"],
    overlaps: ["business-email-compromise", "invoice-fraud", "mandate-fraud", "ceo-fraud", "phishing", "impersonation-scam"],
    sources: [
      { name: "Action Fraud – Payment Diversion Fraud" },
      { name: "UK Finance – APP Fraud Statistics" }
    ]
  },

  "acquirer-impersonation": {
    core: true,
    title: { sr: "Lažni akvizer / procesor kartica", en: "Fake acquirer / card processor" },
    title_en: "Fake acquirer / card processor",
    title_sr: "Lažni akvizer / procesor kartica",
    summary_en: "Someone poses as your card acquirer or processor and asks for portal logins, API keys, or a fee to avoid termination. Signal: threat of losing card acceptance, new contact channel, payment to a personal or unfamiliar account.",
    summary_sr: "Neko se predstavlja kao vaš akvizer ili procesor kartica i traži pristup portalu, API ključeve ili naknadu da biste izbegli gašenje prihvata kartica. Signal: pretnja gubitkom prihvata kartica, novi kontakt kanal, uplata na lični ili nepoznat račun.",
    subtitle: {
      sr: "Lažni akvizer → pritisak i tehnički pristup → novac ili pristup sistemu odlazi napadaču.",
      en: "Fake acquirer → pressure and technical access → money or system access goes to the attacker."
    },
    hasPage: true,
    tags: ["firma", "kartice", "plaćanje"],
    overlaps: ["payment-diversion", "impersonation-scam", "fake-call-scam", "phishing", "business-email-compromise"],
    sources: [
      { name: "European Central Bank — Fraud awareness" },
      { name: "UK Finance — Merchant fraud guidance" }
    ]
  },

  "business-debit-mandate": {
    core: true,
    title: { sr: "Lažni poslovni direktni nalog (debit mandate)", en: "Fake business debit mandate" },
    title_en: "Fake business debit mandate",
    title_sr: "Lažni poslovni direktni nalog (debit mandate)",
    summary_en: "Attacker sends a fake SEPA or direct debit mandate or asks your finance team to approve debits to a new creditor ID. Signal: mandate arrives only by email, creditor name almost right, urgency before the next collection run.",
    summary_sr: "Napadač šalje lažan SEPA ili direktni nalog za zaduženje ili traži od finansija da odobre zaduženja na novi ID poverioca. Signal: mandat stiže samo imejlom, ime poverioca skoro tačno, hitnost pred sledećim ciklusom naplate.",
    subtitle: {
      sr: "Lažni mandat → odobrenje zaduženja → novac odlazi sa poslovnog računa → spor sa pravim poveriocem.",
      en: "Fake mandate → debit approved → funds leave the business account → slow dispute with the real creditor."
    },
    hasPage: true,
    tags: ["firma", "nalog", "plaćanje"],
    overlaps: ["mandate-fraud", "payment-diversion", "invoice-fraud", "business-email-compromise"],
    sources: [
      { name: "EBA — Payment fraud" },
      { name: "UK Finance — Authorized push payment fraud" }
    ]
  },

  "card-verification-microcharge": {
    core: true,
    title: { sr: "Verifikacija kartice lažnim mikroiznosom", en: "Card verification via fake micro-charge" },
    title_en: "Card verification via fake micro-charge",
    title_sr: "Verifikacija kartice lažnim mikroiznosom",
    summary_en: "You are told to confirm a card by reporting a small verification charge, but the charge is on a merchant the attacker controls or the page harvests your full card data. Signal: unusual merchant name on the charge, request to type the exact amount into a third-party site.",
    summary_sr: "Kažu vam da potvrdite karticu prijavom malog verifikacionog zaduženja, ali zaduženje ide na trgovca koga kontroliše napadač ili stranica prikuplja kompletne podatke kartice. Signal: neobičan naziv trgovca na izvodu, zahtev da tačan iznos ukucate na tuđem sajtu.",
    subtitle: {
      sr: "Lažna verifikacija → mikroiznos ili forma → podaci kartice ili novac odlaze napadaču.",
      en: "Fake verification → micro-charge or form → card data or money goes to the attacker."
    },
    hasPage: true,
    tags: ["kartice", "online", "firma"],
    overlaps: ["payment-diversion", "phishing", "fake-call-scam", "impersonation-scam"],
    sources: [
      { name: "FTC — Credit card fraud" },
      { name: "European Banking Authority — Consumer warnings" }
    ]
  },

  "direct-debit-setup": {
    core: true,
    title: { sr: "Lažno podešavanje direktnog zaduženja", en: "Fake direct debit setup" },
    title_en: "Fake direct debit setup",
    title_sr: "Lažno podešavanje direktnog zaduženja",
    summary_en: "Attacker impersonates a supplier or utility and sends a link or PDF to set up or renew direct debit, routing debits to their creditor identifier. Signal: setup only online without contract reference, new creditor details mid-relationship.",
    summary_sr: "Napadač glumi dobavljača ili komunalno preduzeće i šalje link ili PDF za podešavanje ili obnovu direktnog zaduženja, usmeravajući naplatu na svoj identifikator poverioca. Signal: podešavanje samo onlajn bez reference na ugovor, novi podaci poverioca usred odnosa.",
    subtitle: {
      sr: "Lažni link ili mandat → direktno zaduženje aktivirano → ponavljajući gubitak dok se ne blokira.",
      en: "Fake link or mandate → direct debit activated → repeating loss until blocked."
    },
    hasPage: true,
    tags: ["firma", "nalog", "plaćanje"],
    overlaps: ["mandate-fraud", "payment-diversion", "business-email-compromise", "invoice-fraud"],
    sources: [
      { name: "Citizens Advice — Direct debit fraud" },
      { name: "UK Finance — APP fraud prevention" }
    ]
  },

  "fake-instant-transfer-confirmation": {
    core: true,
    title: { sr: "Lažna potvrda instant plaćanja", en: "Fake instant payment confirmation" },
    title_en: "Fake instant payment confirmation",
    title_sr: "Lažna potvrda instant plaćanja",
    summary_en: "Buyer or partner sends a screenshot or PDF that looks like an instant payment receipt and asks you to ship or release goods before the credit really posts. Signal: pressure to act on image-only proof, bank inbox shows no incoming payment.",
    summary_sr: "Kupac ili partner šalje snimak ekrana ili PDF koji liči na potvrdu instant uplate i traži otpremu ili puštanje robe pre nego što stvarno legne kredit. Signal: pritisak da reagujete samo na sliku, u bankovnom okruženju nema dolazne uplate.",
    subtitle: {
      sr: "Lažna potvrda instant uplate → otpremate robu → prava uplata nikad ne stigne.",
      en: "Fake instant payment proof → you ship → the real payment never arrives."
    },
    hasPage: true,
    tags: ["firma", "plaćanje", "imejl"],
    overlaps: ["invoice-fraud", "payment-diversion", "business-email-compromise", "ceo-fraud"],
    sources: [
      { name: "UK Finance — Invoice and mandate fraud" },
      { name: "FBI IC3 — Business email compromise" }
    ]
  },

  "fake-payment-reversal": {
    core: true,
    title: { sr: "Lažno storniranje / povrat uplate", en: "Fake payment reversal / refund" },
    title_en: "Fake payment reversal / refund",
    title_sr: "Lažno storniranje / povrat uplate",
    summary_en: "Contact claims a wire or card payment was reversed or duplicated and asks you to send the money again or to a safe account. Signal: bank cannot confirm the reversal, caller refuses official channels, new account details.",
    summary_sr: "Kontakt tvrdi da je transfer ili plaćanje karticom stornirano ili duplirano i traži da ponovo pošaljete novac ili da ga uplatite na račun koji predstavlja kao bezbedan. Signal: banka ne potvrđuje storno, pozivalac odbija zvanične kanale, novi podaci za uplatu.",
    subtitle: {
      sr: "Priča o stornu → uplata na novi račun → dupli gubitak.",
      en: "Reversal story → payment to a new account → double loss."
    },
    hasPage: true,
    tags: ["firma", "poziv", "plaćanje"],
    overlaps: ["payment-diversion", "fake-call-scam", "invoice-fraud", "recovery-scam"],
    sources: [
      { name: "FBI IC3 — BEC variants" },
      { name: "UK Finance — APP fraud" }
    ]
  },

  "fake-psd2-sca-compliance": {
    core: true,
    title: { sr: "Lažna PSD2 / SCA usaglašenost", en: "Fake PSD2 / SCA compliance request" },
    title_en: "Fake PSD2 / SCA compliance request",
    title_sr: "Lažna PSD2 / SCA usaglašenost",
    summary_en: "Email or call demands urgent Strong Customer Authentication enrollment, app install, or test transaction citing PSD2. Signal: generic regulator wording, link to unknown domain, request to share OTP codes.",
    summary_sr: "Imejl ili poziv zahteva hitan upis u jaku klijent autentifikaciju, instalaciju aplikacije ili probnu transakciju pod izgovorom PSD2. Signal: generički regulatorni tekst, link na nepoznat domen, zahtev da podelite OTP kodove.",
    subtitle: {
      sr: "Lažno regulatorno usklađivanje → OTP ili aplikacija → pristup računu ili kartici.",
      en: "Fake compliance → OTP or app → account or card access."
    },
    hasPage: true,
    tags: ["firma", "banka", "bezbednost"],
    overlaps: ["phishing", "payment-diversion", "otp-interception", "bank-impersonation"],
    sources: [
      { name: "European Banking Authority — Fraud" },
      { name: "ECB — Payment security" }
    ]
  },

  "fake-sepa-compliance": {
    core: true,
    title: { sr: "Lažna SEPA usaglašenost / naknada", en: "Fake SEPA compliance / fee" },
    title_en: "Fake SEPA compliance / fee",
    title_sr: "Lažna SEPA usaglašenost / naknada",
    summary_en: "Message claims your IBAN or SEPA registration must be validated or renewed for a fee before the next payment run. Signal: fee to a private account, no match with your bank's real portal, unsolicited attachment.",
    summary_sr: "Poruka tvrdi da se IBAN ili SEPA registracija mora potvrditi ili obnoviti uz naknadu pre sledećeg ciklusa plaćanja. Signal: naknada na lični račun, ne poklapa se sa pravim portalom banke, nezatražen prilog.",
    subtitle: {
      sr: "Lažna SEPA priča → naknada unapred → novac odlazi, usluga ne postoji.",
      en: "Fake SEPA story → upfront fee → money sent, no real service."
    },
    hasPage: true,
    tags: ["firma", "plaćanje", "imejl"],
    overlaps: ["payment-diversion", "invoice-fraud", "advance-fee-fraud", "business-email-compromise"],
    sources: [
      { name: "ECB — SEPA fraud awareness" },
      { name: "European Commission — Payment services" }
    ]
  },

  "fake-swift-release-fee": {
    core: true,
    title: { sr: "Lažna SWIFT naknada za oslobađanje sredstava", en: "Fake SWIFT release fee" },
    title_en: "Fake SWIFT release fee",
    title_sr: "Lažna SWIFT naknada za oslobađanje sredstava",
    summary_en: "You are told an incoming international transfer is blocked until you pay a SWIFT, correspondent, or compliance fee to a specified account. Signal: fee larger than normal bank charges, account not your bank's official settlement account, pressure before funds release.",
    summary_sr: "Kažu vam da je dolazni međunarodni transfer blokiran dok ne platite SWIFT, korespondentsku ili usaglašenost naknadu na navedeni račun. Signal: naknada veća od uobičajenih bankarskih troškova, račun nije zvanični račun vaše banke, pritisak pred navodnim puštanjem sredstava.",
    subtitle: {
      sr: "Priča o blokiranom transferu → naknada napadaču → transfer i dalje ne postoji.",
      en: "Blocked transfer story → fee to attacker → the transfer still does not exist."
    },
    hasPage: true,
    tags: ["firma", "transfer", "imejl"],
    overlaps: ["payment-diversion", "advance-fee-fraud", "invoice-fraud", "ceo-fraud"],
    sources: [
      { name: "FBI IC3 — Wire transfer fraud" },
      { name: "SWIFT — Customer security programme (awareness)" }
    ]
  },

  "iban-change-confirmation": {
    core: true,
    title: { sr: "Lažna potvrda promene IBAN-a", en: "Fake IBAN change confirmation" },
    title_en: "Fake IBAN change confirmation",
    title_sr: "Lažna potvrda promene IBAN-a",
    summary_en: "Supplier or executive sends a formal-looking confirmation that banking details changed and asks you to acknowledge by email or to pay the next invoice to the new IBAN. Signal: confirmation only in email thread, no match with prior signed mandate, slight domain spoofing.",
    summary_sr: "Dobavljač ili rukovodilac šalje zvanično zvučeću potvrdu da su se bankarski podaci promenili i traži potvrdu imejlom ili uplatu sledeće fakture na novi IBAN. Signal: potvrda samo u imejl nizu, ne poklapa se sa ranijim potpisanim mandatom, sitno lažiranje domena.",
    subtitle: {
      sr: "Lažna potvrda promene računa → uplata na IBAN napadača → pravi dobavljač nikad ne vidi novac.",
      en: "Fake bank detail confirmation → payment to attacker's IBAN → real supplier never receives funds."
    },
    hasPage: true,
    tags: ["firma", "imejl", "BEC"],
    overlaps: ["invoice-fraud", "payment-diversion", "vendor-email-compromise", "business-email-compromise", "ceo-fraud"],
    sources: [
      { name: "FBI IC3 — Business Email Compromise" },
      { name: "Action Fraud — Mandate fraud" }
    ]
  },

  "mobile-wallet-verification": {
    core: true,
    title: { sr: "Lažna verifikacija mobilnog novčanika", en: "Fake mobile wallet verification" },
    title_en: "Fake mobile wallet verification",
    title_sr: "Lažna verifikacija mobilnog novčanika",
    summary_en: "SMS or call asks you to verify your mobile wallet by tapping a link, sharing a code, or moving a test amount to a supervisor number. Signal: request from unknown number, urgency during a payment you did not start, link to non-store app.",
    summary_sr: "SMS ili poziv traži da verifikujete mobilni novčanik klikom na link, deljenjem koda ili probnim iznosom na broj koji predstave kao nadzor. Signal: zahtev sa nepoznatog broja, hitnost tokom plaćanja koje niste pokrenuli, link ka aplikaciji van zvaničke prodavnice.",
    subtitle: {
      sr: "Lažna verifikacija novčanika → kod ili aplikacija → prazan račun ili neovlašćena uplata.",
      en: "Fake wallet verification → code or app → empty balance or unauthorized transfer."
    },
    hasPage: true,
    tags: ["mobilni", "plaćanje", "SMS"],
    overlaps: ["fake-call-scam", "smishing", "payment-diversion", "phishing"],
    sources: [
      { name: "FTC — Mobile payment scams" },
      { name: "UK Finance — Smishing guidance" }
    ]
  },

  "payment-gateway-onboarding": {
    core: true,
    title: { sr: "Lažno uvođenje u sistem platnog provajdera", en: "Fake payment gateway onboarding" },
    title_en: "Fake payment gateway onboarding",
    title_sr: "Lažno uvođenje u sistem platnog provajdera",
    summary_en: "Fake gateway or PSP asks for business documents, API keys, and a setup or compliance fee before enabling card acceptance. Signal: domain similar to a known brand, contract without verifiable company registration, fee to unrelated account.",
    summary_sr: "Lažni gateway ili PSP traži poslovnu dokumentaciju, API ključeve i naknadu za podešavanje ili usaglašenost pre uključivanja prihvata kartica. Signal: domen sličan poznatom brendu, ugovor bez proverljive registracije firme, uplata na nepovezan račun.",
    subtitle: {
      sr: "Lažni onboarding → poverljivi podaci i naknada → nema pravog provajdera.",
      en: "Fake onboarding → sensitive data and fee → no real provider."
    },
    hasPage: true,
    tags: ["firma", "e-commerce", "plaćanje"],
    overlaps: ["supplier-onboarding-scam", "phishing", "payment-diversion", "impersonation-scam"],
    sources: [
      { name: "UK Finance — Merchant fraud" },
      { name: "PCI Security Standards Council — Phishing awareness" }
    ]
  },

  "payroll-card": {
    core: true,
    title: { sr: "Lažna payroll / prepaid kartica", en: "Fake payroll / prepaid card" },
    title_en: "Fake payroll / prepaid card",
    title_sr: "Lažna payroll / prepaid kartica",
    summary_en: "HR or payroll email asks staff to activate a new payroll card on a third-party site, pay an issuance fee, or share card details by phone. Signal: URL not your employer's, fee before first load, instructions contradict internal HR portal.",
    summary_sr: "Imejl od HR ili plate traži od zaposlenih da aktiviraju novu platnu karticu na tuđem sajtu, plate naknadu za izdavanje ili podele podatke kartice telefonom. Signal: URL nije poslodavčev, naknada pre prvog učitavanja, uputstva se ne poklapaju sa internim HR portalom.",
    subtitle: {
      sr: "Lažna platna kartica → naknada ili podaci → novac ili identitet zaposlenog je u riziku.",
      en: "Fake payroll card → fee or data → employee money or identity at risk."
    },
    hasPage: true,
    tags: ["firma", "HR", "kartice"],
    overlaps: ["payroll-diversion", "payment-diversion", "ceo-fraud", "business-email-compromise"],
    sources: [
      { name: "FBI IC3 — Payroll diversion" },
      { name: "SHRM — Payroll fraud awareness" }
    ]
  },

  "refund-capture": {
    core: true,
    title: { sr: "Prevara lažnog povrata — preusmeravanje na tuđi račun", en: "Refund capture — redirect to wrong account" },
    title_en: "Refund capture — redirect to wrong account",
    title_sr: "Prevara lažnog povrata — preusmeravanje na tuđi račun",
    summary_en: "Caller or email says a refund is ready and asks you to provide new bank details or to confirm a link so the credit routes correctly, but the details belong to the attacker. Signal: refund you did not request, change of account over the phone without callback verification.",
    summary_sr: "Pozivalac ili imejl kaže da je povrat spreman i traži nove podatke za isplatu ili potvrdu linka da bi navodno kredit pravilno stigao, ali podaci pripadaju napadaču. Signal: povrat koji niste tražili, promena računa telefonom bez povratnog poziva na poznat broj.",
    subtitle: {
      sr: "Lažni povrat → vaši podaci zamenjeni → novac legne napadaču.",
      en: "Fake refund → your details swapped → money lands with the attacker."
    },
    hasPage: true,
    tags: ["firma", "poziv", "plaćanje"],
    overlaps: ["payment-diversion", "fake-call-scam", "invoice-fraud", "impersonation-scam"],
    sources: [
      { name: "Action Fraud — Refund fraud patterns" },
      { name: "FTC — Money transfer scams" }
    ]
  },

  "wallet-top-up": {
    core: true,
    title: { sr: "Lažno učitavanje (top-up) novčanika", en: "Fake wallet top-up" },
    title_en: "Fake wallet top-up",
    title_sr: "Lažno učitavanje (top-up) novčanika",
    summary_en: "Merchant, marketplace, or support chat instructs you to top up a specific wallet, voucher, or prepaid balance to unlock a payout or order. Signal: payment method unrelated to the real platform, non-reversible rails preferred, pressure to complete in minutes.",
    summary_sr: "Trgovac, pijaca ili čet podrške kaže da morate da učitate određeni novčanik, vaučer ili prepaid saldo da biste otključali isplatu ili porudžbinu. Signal: način plaćanja nije onaj koji prava platforma koristi, pritisak na neopozive kanale, rok od nekoliko minuta.",
    subtitle: {
      sr: "Lažni top-up → šaljete novac na nepoznat kanal → nema isplate ni robe.",
      en: "Fake top-up → you send funds to an unknown rail → no payout or goods."
    },
    hasPage: true,
    tags: ["online", "plaćanje", "trgovina"],
    overlaps: ["payment-diversion", "advance-fee-fraud", "phishing", "fake-call-scam"],
    sources: [
      { name: "FTC — Gift card and payment scams" },
      { name: "UK Finance — Purchase scams" }
    ]
  },

  "payroll-diversion": {
    core: true,
    title: { sr: "Preusmeravanje plata", en: "Payroll diversion" },
    title_en: "Payroll diversion",
    title_sr: "Preusmeravanje plata",
    summary_en: "Attacker impersonates an employee or HR and requests a payroll bank account change. Future salary payments go to the attacker. Signal: unsolicited account change request from HR or employee email, typically before payday.",
    summary_sr: "Napadač se lažno predstavlja kao zaposleni ili HR i traži promenu bankovnog računa za isplatu plata. Naredne plate idu napadaču. Signal: nezatražen zahtev za promenom računa od HR ili imejla zaposlenog, tipično pred isplatu.",
    subtitle: {
      sr: "Lažni HR ili zaposleni traži promenu računa za platu → plate idu napadaču → otkrivanje na isplatni dan.",
      en: "Fake HR or employee requests payroll account change → salary goes to attacker → discovered on payday."
    },
    hasPage: true,
    tags: ["firma", "HR", "imejl"],
    overlaps: ["payment-diversion", "business-email-compromise", "ceo-fraud", "invoice-fraud", "phishing", "impersonation-scam", "account-takeover"],
    sources: [
      { name: "FBI IC3 – Payroll Diversion Fraud Alert" },
      { name: "SHRM – HR Payroll Fraud Awareness" }
    ]
  },

  "procurement-tender-scam": {
    core: true,
    title: { sr: "Prevara na tenderu", en: "Procurement tender scam" },
    title_en: "Procurement tender scam",
    title_sr: "Prevara na tenderu",
    summary_en: "Fake procurement or tender notice attracts submissions with upfront fees. After payment the tender disappears or is won by a pre-selected party. Signal: unsolicited invitation, registration fees, no official verifiable source.",
    summary_sr: "Lažni tender privlači prijave uz naknadu unapred. Posle uplate tender nestaje ili ga dobija unapred izabrana firma. Signal: nesolicitovana pozivnica, naknade za registraciju, nema proverljivog zvaničnog izvora.",
    subtitle: {
      sr: "Lažna tender pozivnica → uplate naknade → tender ne postoji / ishod unapred određen → gubitak.",
      en: "Fake tender invitation → fee payments → tender nonexistent or rigged → loss."
    },
    hasPage: true,
    tags: ["firma", "tender", "nabavka"],
    overlaps: ["payment-diversion", "supplier-onboarding-scam", "grant-fund-scam", "advance-fee-fraud", "business-email-compromise", "impersonation-scam"],
    sources: [
      { name: "OLAF – Procurement Fraud Indicators" },
      { name: "ICC Commercial Crime Services" }
    ]
  },

  "supplier-onboarding-scam": {
    core: true,
    title: { sr: "Prevara pri registraciji dobavljača", en: "Supplier onboarding scam" },
    title_en: "Supplier onboarding scam",
    title_sr: "Prevara pri registraciji dobavljača",
    summary_en: "Fake supplier registers as a legitimate vendor, manipulates the onboarding process to gain approved payment status, then invoices for non-existent or inflated services. Signal: new supplier with thin verification, fast onboarding pressure, invoices for services not ordered.",
    summary_sr: "Lažna firma se registruje kao legitimni dobavljač, manipuliše onboarding procesom da dobije status odobrenog primaoca uplata, zatim fakturiše za nepostojeće ili napumpane usluge. Signal: novi dobavljač sa slabom verifikacijom, pritisak na brz onboarding, fakture za nenaručene usluge.",
    subtitle: {
      sr: "Lažna firma ulazi u sistem dobavljača → dobija odobrenje za uplate → fakturiše za nepostojeće usluge.",
      en: "Fake company enters supplier system → gets approved payment status → invoices for nonexistent services."
    },
    hasPage: true,
    tags: ["firma", "nabavka", "vendor"],
    overlaps: ["procurement-tender-scam", "payment-diversion", "invoice-fraud", "vendor-email-compromise", "business-email-compromise"],
    sources: [
      { name: "ACFE – Vendor Fraud Report" },
      { name: "UK Cabinet Office – Counter Fraud Standards" }
    ]
  },

  "grant-fund-scam": {
    core: true,
    title: { sr: "Prevara sa grantovima i fondovima", en: "Grant and fund scam" },
    title_en: "Grant and fund scam",
    title_sr: "Prevara sa grantovima i fondovima",
    summary_en: "Fake government agency, EU fund, or NGO contacts an organization claiming they have been selected for a grant. Upfront fees are required to release the funds. Signal: unsolicited grant notification, fees before disbursement, no verifiable official source.",
    summary_sr: "Lažna vladina agencija, EU fond ili NVO kontaktira organizaciju tvrdeći da su izabrani za grant. Naknade unapred su potrebne da se oslobode sredstva. Signal: nesolicitovano obaveštenje o grantu, naknade pre isplate, nema proverljivog zvaničnog izvora.",
    subtitle: {
      sr: "Obaveštenje o grantu → naknade za oslobađanje → serija uplata → grant ne postoji.",
      en: "Grant notification → release fees → payment series → grant does not exist."
    },
    hasPage: true,
    tags: ["firma", "grant", "fondovi"],
    overlaps: ["procurement-tender-scam", "advance-fee-fraud", "payment-diversion", "impersonation-scam", "business-email-compromise"],
    sources: [
      { name: "European Anti-Fraud Office (OLAF)" },
      { name: "Action Fraud – Grant Fraud" }
    ]
  },

  "eppo-impersonation": {
    core: true,
    title: { sr: "Lažno predstavljanje EPPO-a", en: "EPPO impersonation scam" },
    title_en: "EPPO impersonation scam",
    title_sr: "Lažno predstavljanje EPPO-a",
    summary_en: "Fraudsters pose as the European Public Prosecutor's Office, claim you are named in a cross-border case, and demand urgent payment of a security deposit, fine, or legal fee to avoid arrest or asset seizure. Signal: unsolicited EPPO contact, payment to a private account, refusal of official channels.",
    summary_sr: "Prevaranti se predstavljaju kao Evropska kancelarija javnog tužioca (EPPO), tvrde da ste uključeni u prekogranični predmet i traže hitnu uplatu depozita, kazne ili pravne takse da bi izbegli hapšenje ili oduzimanje imovine. Signal: nesolicitovani EPPO kontakt, uplata na privatni nalog, odbijanje zvaničnih kanala.",
    subtitle: {
      sr: "Kontakt u ime EPPO-a → hitan predmet → uplata ili podaci → pritisak → nestajanje.",
      en: "Contact in EPPO's name → urgent case → payment or data → pressure → disappearance."
    },
    hasPage: true,
    tags: ["eu", "institucija", "lažno predstavljanje"],
    overlaps: ["government-impersonation", "grant-fund-scam", "impersonation-scam", "advance-fee-fraud", "fake-eu-program-scam", "court-impersonation"],
    sources: [
      { name: "EPPO — Beware of scams impersonating the European Chief Prosecutor", url: "https://www.eppo.europa.eu/en/news/beware-scams-impersonating-european-chief-prosecutor" },
      { name: "EPPO — Report a crime", url: "https://www.eppo.europa.eu/en/reporting-crime-to-eppo" }
    ]
  },

  "olaf-impersonation": {
    core: true,
    title: { sr: "Lažno predstavljanje OLAF-a", en: "OLAF impersonation scam" },
    title_en: "OLAF impersonation scam",
    title_sr: "Lažno predstavljanje OLAF-a",
    summary_en: "Scammers impersonate the European Anti-Fraud Office, allege irregularities in EU funds or procurement, and request advance fees, compliance payments, or sensitive data to close a fake investigation. Signal: cold contact, payment before any verified procedure, email not on europa.eu.",
    summary_sr: "Prevaranti se predstavljaju kao Evropska antiprevarantska kancelarija (OLAF), navode neregularnosti oko EU sredstava ili nabavke i traže unapredne naknade, uplate usklađenosti ili osetljive podatke da bi zatvorili lažnu istragu. Signal: hladni kontakt, uplata pre bilo koje proverljive procedure, imejl koji nije na europa.eu.",
    subtitle: {
      sr: "Lažni OLAF → navodna istraga EU sredstava → naknada ili dokumentacija → eskalacija.",
      en: "Fake OLAF → alleged EU funds investigation → fee or paperwork → escalation."
    },
    hasPage: true,
    tags: ["eu", "institucija", "nabavka"],
    overlaps: ["government-impersonation", "grant-fund-scam", "procurement-tender-scam", "impersonation-scam", "advance-fee-fraud", "fake-eu-program-scam"],
    sources: [
      { name: "OLAF — Beware of hoax emails, letters and scam calls purporting to be from OLAF", url: "https://anti-fraud.ec.europa.eu/beware-hoax-emails-letters-and-scam-phone-calls-purporting-be-olaf_en" },
      { name: "OLAF — Home (EU Anti-Fraud Office)", url: "https://anti-fraud.ec.europa.eu/index_en" }
    ]
  },

  "ecc-net-impersonation": {
    core: true,
    title: { sr: "Lažno predstavljanje ECC mreže", en: "ECC-Net impersonation scam" },
    title_en: "ECC-Net impersonation scam",
    title_sr: "Lažno predstavljanje ECC mreže",
    summary_en: "Fraudsters mimic European Consumer Centres (ECC-Net), offer to recover money from a disputed purchase or scam, and ask for an administrative fee, escrow payment, or bank details. Signal: they initiate contact, promise fast refunds for a fee, domain does not match official consumer centre sites.",
    summary_sr: "Prevaranti imitiraju Evropske potrošačke centre (ECC-Net), nude povraćaj novca od sporne kupovine ili prevare i traže administrativnu naknadu, escrow uplatu ili bankarske podatke. Signal: oni iniciraju kontakt, obećavaju brz povraćaj uz naknadu, domen ne odgovara zvaničnim sajtovima centara.",
    subtitle: {
      sr: "Lažni ECC kontakt → obećanje povraćaja → naknada ili podaci → pritisak na rok.",
      en: "Fake ECC contact → refund promise → fee or data → deadline pressure."
    },
    hasPage: true,
    tags: ["eu", "potrošač", "lažno predstavljanje"],
    overlaps: ["government-impersonation", "recovery-scam", "impersonation-scam", "advance-fee-fraud", "phishing"],
    sources: [
      { name: "ECC-Net — Scam: fraudulent communications impersonating ECC-Net", url: "https://eccnet.eu/news/scam-fraudulent-consumer-protection-representatives-impersonating-ecc-net" },
      { name: "ECC-Net — European Consumer Centres Network", url: "https://eccnet.eu/european-consumer-centres-network" }
    ]
  },

  "eu-institution-recruitment-scam": {
    core: true,
    title: { sr: "Lažni zapošljavanje u EU instituciji", en: "Fake EU institution recruitment scam" },
    title_en: "Fake EU institution recruitment scam",
    title_sr: "Lažni zapošljavanje u EU instituciji",
    summary_en: "Fake recruiters claim to hire for the Commission, agencies, or Parliament, conduct quick online interviews, then charge for security clearance, training, or relocation before a contract exists. Signal: job offer without official portal application, fees before employment, personal email domains.",
    summary_sr: "Lažni regruteri tvrde da zapošljavaju u Komisiji, agencijama ili Parlamentu, rade brze onlajn intervjue, zatim naplaćuju bezbednosnu proveru, obuku ili relokaciju pre nego što ugovor postoji. Signal: ponuda posla bez prijave kroz zvanični portal, naknade pre zaposlenja, lični imejl domeni.",
    subtitle: {
      sr: "Ponuda EU posla → brza selekcija → naknada za proceduru → nema ugovora.",
      en: "EU job offer → fast selection → procedure fee → no contract."
    },
    hasPage: true,
    tags: ["eu", "posao", "regrutovanje"],
    overlaps: ["job-scam", "recruitment-scam", "fake-hr-scam", "government-impersonation", "impersonation-scam", "advance-fee-fraud"],
    sources: [
      { name: "EU Careers — Scam alerts (EPSO)", url: "https://eu-careers.europa.eu/en/news/scam-alerts" },
      { name: "EU Careers — Official recruitment portal", url: "https://eu-careers.europa.eu/" }
    ]
  },

  "eu-reimbursement-release-scam": {
    core: true,
    title: { sr: "Lažno oslobađanje EU refundacije", en: "Fake EU reimbursement release scam" },
    title_en: "Fake EU reimbursement release scam",
    title_sr: "Lažno oslobađanje EU refundacije",
    summary_en: "Targets are told an EU reimbursement, VAT refund, or programme payment is blocked and must be unlocked with a transfer fee, tax prepayment, or compliance charge. Signal: you did not submit the underlying claim through official channels, payment is requested to a non-EU account or crypto.",
    summary_sr: "Meta saznaje da je EU refundacija, povrat PDV-a ili isplata iz programa blokirana i da se mora otključati transfernom naknadom, porezom unapred ili troškom usklađenosti. Signal: niste podneli zahtev kroz zvanične kanale, traži se uplata na nalog van EU strukture ili kripto.",
    subtitle: {
      sr: "Obaveštenje o blokiranoj isplati → naknada za oslobađanje → nova prepreka → serija uplata.",
      en: "Notice of blocked payout → release fee → new obstacle → payment series."
    },
    hasPage: true,
    tags: ["eu", "grant", "uplata unapred"],
    overlaps: ["grant-fund-scam", "advance-fee-fraud", "government-impersonation", "payment-diversion", "fake-eu-program-scam"],
    sources: [
      { name: "European Commission — EU funding programmes", url: "https://commission.europa.eu/funding-tenders/find-funding/eu-funding-programmes_en" },
      { name: "European Commission — Before you apply: EU funding for beginners", url: "https://commission.europa.eu/funding-tenders/how-apply/you-apply-eu-funding-beginners_en" }
    ]
  },

  "erasmus-grant-scam": {
    core: true,
    title: { sr: "Lažni Erasmus grant", en: "Erasmus grant scam" },
    title_en: "Erasmus grant scam",
    title_sr: "Lažni Erasmus grant",
    summary_en: "Students or schools receive fake Erasmus+ award letters asking for registration, insurance, or visa processing fees paid outside official university or National Agency channels. Signal: no matching application in your institution's system, fees to a private person, pressure before semester start.",
    summary_sr: "Studenti ili škole dobijaju lažna pisma o Erasmus+ dodeli koja traže registracionu, osiguravajuću ili viznu naknadu plaćenu van zvaničnih kanala univerziteta ili nacionalne agencije. Signal: nema odgovarajuće prijave u sistemu ustanove, naknade privatnoj osobi, pritisak pre početka semestra.",
    subtitle: {
      sr: "Čestitka na grantu → naknada za korak u procesu → odlaganje isplate → sumnja.",
      en: "Grant congratulations → fee for a process step → delayed payout → suspicion."
    },
    hasPage: true,
    tags: ["eu", "obrazovanje", "grant"],
    overlaps: ["grant-fund-scam", "advance-fee-fraud", "education-ministry-impersonation", "impersonation-scam", "fake-eu-program-scam"],
    sources: [
      { name: "Erasmus+ — National Agencies", url: "https://erasmus-plus.ec.europa.eu/national-agencies" },
      { name: "Erasmus+ programme", url: "https://erasmus-plus.ec.europa.eu/" }
    ]
  },

  "horizon-project-fee": {
    core: true,
    title: { sr: "Lažne naknade uz Horizon projekat", en: "Horizon project fee scam" },
    title_en: "Horizon project fee scam",
    title_sr: "Lažne naknade uz Horizon projekat",
    summary_en: "Researchers or SMEs are told their Horizon Europe proposal was funded or shortlisted and must pay a consortium registration, ethics review, or bank guarantee fee to a third party. Signal: contact not from the Funding & Tenders Portal domain, fees not described in official grant agreement, unsolicited success news.",
    summary_sr: "Istraživači ili MSP saznaju da je njihov Horizon Europe predlog finansiran ili u užem izboru i moraju platiti registraciju konsorcijuma, etičku proveru ili bankarsku garanciju trećoj strani. Signal: kontakt nije sa domena portala za finansiranje i tendere, naknade nisu u zvaničnom ugovoru o grantu, neočekivana vest o uspehu.",
    subtitle: {
      sr: "Lažno odobrenje ili shortlist → naknada trećoj strani → dodatni troškovi → nema ugovora.",
      en: "Fake approval or shortlist → fee to third party → extra costs → no agreement."
    },
    hasPage: true,
    tags: ["eu", "nauka", "grant"],
    overlaps: ["grant-fund-scam", "procurement-tender-scam", "compliance-fee-scam", "advance-fee-fraud", "fake-eu-program-scam"],
    sources: [
      { name: "European Commission — Horizon Europe programme", url: "https://commission.europa.eu/funding-tenders/find-funding/eu-funding-programmes/horizon-europe_en" },
      { name: "EU Funding & Tenders Portal", url: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/home" }
    ]
  },

  "cohesion-fund-release-scam": {
    core: true,
    title: { sr: "Lažno oslobađanje kohezijskog fonda", en: "Cohesion fund release scam" },
    title_en: "Cohesion fund release scam",
    title_sr: "Lažno oslobađanje kohezijskog fonda",
    summary_en: "Municipalities, NGOs, or firms are notified of fake Cohesion or structural-funds approval and asked for advance audit fees, notary charges, or escrow before the first instalment. Signal: amount and programme name do not match official managing authority lists, contact avoids national managing authority phone numbers.",
    summary_sr: "Opštine, NVO ili firme dobijaju lažno odobrenje kohezijskih ili strukturnih fondova i traže unapred naknadu za reviziju, notara ili escrow pre prve rate. Signal: iznos i naziv programa ne odgovaraju listama nadležnog tela za upravljanje, kontakt izbegava zvanične brojeve tog tela.",
    subtitle: {
      sr: "Lažno odobrenje projekta → serija administrativnih uplata → isplata ne stiže.",
      en: "Fake project approval → series of admin payments → payout never arrives."
    },
    hasPage: true,
    tags: ["eu", "fondovi", "projekat"],
    overlaps: ["grant-fund-scam", "municipality-impersonation", "advance-fee-fraud", "fake-eu-program-scam", "public-procurement-document-fee-scam"],
    sources: [
      { name: "European Commission — Cohesion Fund", url: "https://commission.europa.eu/funding-tenders/find-funding/eu-funding-programmes/cohesion-fund-cf_en" },
      { name: "European Commission — Accessing EU funds (Regional policy)", url: "https://ec.europa.eu/regional_policy/funding/accessing-funds_en" }
    ]
  },

  "interreg-partnership-scam": {
    core: true,
    title: { sr: "Lažni Interreg partnerski poziv", en: "Interreg partnership scam" },
    title_en: "Interreg partnership scam",
    title_sr: "Lažni Interreg partnerski poziv",
    summary_en: "Organizations receive invitations to join a fake cross-border Interreg-style project, sign a partnership agreement, and pay a partnership fee, translation cost, or kick-off deposit before any official programme call match. Signal: partner not on official programme contact lists, fee before grant decision, generic project title.",
    summary_sr: "Organizacije dobijaju poziv da uđu u lažni prekogranični projekat u stilu Interrega, potpišu partnerski ugovor i plate partnersku naknadu, prevod ili depozit za početak pre bilo kakvog zvaničnog poziva. Signal: partner nije na zvaničnim listama programa, naknada pre odluke o grantu, generički naziv projekta.",
    subtitle: {
      sr: "Poziv u konsorcijum → potpis i naknada → čekanje zvaničnog poziva koji ne postoji.",
      en: "Consortium invite → signature and fee → waiting for a call that does not exist."
    },
    hasPage: true,
    tags: ["eu", "partnerstvo", "projekat"],
    overlaps: ["grant-fund-scam", "procurement-tender-scam", "fake-ngo-partnership-scam", "advance-fee-fraud", "fake-eu-program-scam"],
    sources: [
      { name: "Interreg — Programme map", url: "https://interreg.eu/programmes/" },
      { name: "Interreg — What is Interreg?", url: "https://interreg.eu/about/what-is-interreg/" }
    ]
  },

  "cap-subsidy-unlock-scam": {
    core: true,
    title: { sr: "Lažno otključavanje CAP subvencije", en: "CAP subsidy unlock scam" },
    title_en: "CAP subsidy unlock scam",
    title_sr: "Lažno otključavanje CAP subvencije",
    summary_en: "Farmers or agri-businesses get messages claiming their Common Agricultural Policy payment is on hold until an administration fee, inspection charge, or digital certificate payment is made to an agent. Signal: payment not through the national paying agency's published channels, SMS or WhatsApp as first contact.",
    summary_sr: "Poljoprivrednici ili agrofirme dobijaju poruke da je isplata iz zajedničke poljoprivredne politike (CAP) na čekanju dok se ne plati administrativna naknada, inspekcija ili digitalni sertifikat agentu. Signal: uplata nije kroz objavljene kanale nacionalne platežne agencije, prvi kontakt je SMS ili WhatsApp.",
    subtitle: {
      sr: "Obaveštenje o zadržanoj subvenciji → hitna naknada agentu → ponavljanje zahteva.",
      en: "Notice of held subsidy → urgent fee to agent → repeated demands."
    },
    hasPage: true,
    tags: ["eu", "poljoprivreda", "subvencija"],
    overlaps: ["grant-fund-scam", "government-impersonation", "advance-fee-fraud", "smishing", "fake-eu-program-scam"],
    sources: [{ name: "EU — CAP information" }]
  },

  "eu-project-evaluator-impersonation-scam": {
    core: true,
    title: { sr: "Lažni evaluator EU projekta", en: "EU project evaluator impersonation scam" },
    title_en: "EU project evaluator impersonation scam",
    title_sr: "Lažni evaluator EU projekta",
    summary_en: "Someone poses as an EU evaluator or monitoring expert, requests confidential project data or a fee for a site visit, compliance check, or score adjustment. Signal: evaluator pressures payment before the visit, uses a non-official email, cannot be verified through the managing authority.",
    summary_sr: "Neko se predstavlja kao EU evaluator ili stručnjak za monitoring, traži poverljive podatke projekta ili naknadu za obilazak, proveru usklađenosti ili korekciju ocene. Signal: evaluator pritiska uplatu pre obilaska, koristi nezvanični imejl, ne može se proveriti kod nadležnog tela za upravljanje.",
    subtitle: {
      sr: "Lažni evaluator → zahtev za pristup ili naknadu → pritisak → krađa podataka ili uplata.",
      en: "Fake evaluator → access or fee demand → pressure → data theft or payment."
    },
    hasPage: true,
    tags: ["eu", "projekat", "lažno predstavljanje"],
    overlaps: ["grant-fund-scam", "procurement-tender-scam", "fake-audit-inspection-scam", "impersonation-scam", "advance-fee-fraud"],
    sources: [{ name: "EU — Project implementation" }]
  },

  "ransomware-orgs": {
    core: true,
    title: { sr: "Ransomware napadi na organizacije", en: "Ransomware attacks on organizations" },
    title_en: "Ransomware attacks on organizations",
    title_sr: "Ransomware napadi na organizacije",
    summary_en: "Attacker gains access via phishing or exploit, spreads through the network, steals data, then encrypts systems and demands ransom for the decryption key and for silence on stolen data. Double extortion: pay or your data goes public.",
    summary_sr: "Napadač dobija pristup kroz phishing ili exploit, širi se mrežom, krade podatke, zatim enkriptuje sisteme i traži otkup za ključ za dekripciju i za ćutanje o ukradenim podacima. Dvostruka ucena: plati ili podaci postaju javni.",
    subtitle: {
      sr: "Pristup → eksfiltracija → enkripcija → otkup → rok → pretnja objavom → isplata.",
      en: "Access → exfiltration → encryption → ransom → deadline → publication threat → payment."
    },
    hasPage: true,
    tags: ["firma", "malver", "ucena"],
    overlaps: ["data-breach-extortion", "ddos-extortion", "phishing", "business-email-compromise", "account-takeover", "tech-support-scam", "payment-diversion"],
    sources: [
      { name: "CISA — Ransomware Guidance" },
      { name: "FBI IC3 — Ransomware Reporting" }
    ]
  },

  "data-breach-extortion": {
    core: true,
    title: { sr: "Ucena nakon krađe podataka", en: "Data breach extortion" },
    title_en: "Data breach extortion",
    title_sr: "Ucena nakon krađe podataka",
    summary_en: "Attacker breaches systems, steals sensitive data, then sends an extortion notice demanding payment to prevent public disclosure. Often paired with ransomware or used as a standalone extortion after a breach.",
    summary_sr: "Napadač probija sisteme, krade osetljive podatke, zatim šalje ucenjivačku poruku tražeći uplatu da bi sprečio javno obelodanjivanje. Često ide uz ransomware ili kao zasebna ucena posle proboja.",
    subtitle: {
      sr: "Proboj → krađa podataka → ucenička poruka → rok → pretnja objavom → uplata.",
      en: "Breach → data theft → extortion notice → deadline → disclosure threat → payment."
    },
    hasPage: true,
    tags: ["firma", "podaci", "ucena"],
    overlaps: ["ransomware-orgs", "identity-theft", "ddos-extortion", "phishing", "account-takeover", "impersonation-scam", "business-email-compromise"],
    sources: [
      { name: "CISA — Data Breach Response" },
      { name: "FTC — Data Breach Response Guide" }
    ]
  },

  "ddos-extortion": {
    core: true,
    title: { sr: "DDoS ucena", en: "DDoS extortion" },
    title_en: "DDoS extortion",
    title_sr: "DDoS ucena",
    summary_en: "Attacker launches or threatens a DDoS attack and demands payment to stop or prevent it. Often includes a warning-shot attack to prove capability. Target chooses between downtime cost and paying the ransom.",
    summary_sr: "Napadač lansira ili preti DDoS napadom i traži uplatu da ga zaustavi ili spreči. Često uključuje probni napad za demonstraciju. Meta bira između troška zastoja i isplate otkupa.",
    subtitle: {
      sr: "Probni napad ili pretnja → ucenička poruka → rok → eskalacija napada → pritisak → uplata.",
      en: "Warning attack or threat → extortion notice → deadline → attack escalation → pressure → payment."
    },
    hasPage: true,
    tags: ["firma", "napad", "ucena"],
    overlaps: ["ransomware-orgs", "data-breach-extortion", "phishing", "business-email-compromise"],
    sources: [
      { name: "CISA — DDoS Quick Guide" },
      { name: "FBI IC3 — DDoS Extortion Alerts" }
    ]
  },

  "identity-theft": {
    core: true,
    title: { sr: "Krađa identiteta", en: "Identity theft" },
    title_en: "Identity theft",
    title_sr: "Krađa identiteta",
    summary_en: "Identity theft still turns someone else’s personal data into accounts, credit, and purchases, but today the fraud may be helped by generated document images, synthetic identity packs, or more convincing verification messages. The core harm remains the same: the victim often discovers the abuse late, after debts, account openings, or service denials already appear in their name.",
    summary_sr: "Krađa identiteta i dalje pretvara tuđe lične podatke u naloge, kredite i kupovine, ali danas prevaru mogu da pojačaju generisane slike dokumenata, sintetički identiteti ili ubedljivije poruke za verifikaciju. Suštinska šteta ostaje ista: žrtva problem često otkriva kasno, tek kada se u njeno ime već pojave dugovi, novi nalozi ili odbijene usluge.",
    subtitle: {
      sr: "Prikupljanje podataka → otvaranje naloga ili kredita → finansijsko iskorišćavanje → žrtva otkriva dug.",
      en: "Data collection → account or credit opening → financial exploitation → victim discovers debt."
    },
    hasPage: true,
    tags: ["identitet", "krađa podataka", "finansije"],
    overlaps: ["synthetic-identity-fraud", "account-takeover", "phishing", "smishing", "vishing", "impersonation-scam", "data-breach-extortion"],
    sources: [
      { name: "FTC — Identity Theft Resources" },
      { name: "FBI IC3 — Identity Theft" }
    ]
  },

  "synthetic-identity-fraud": {
    core: true,
    title: { sr: "Sintetička krađa identiteta", en: "Synthetic identity fraud" },
    title_en: "Synthetic identity fraud",
    title_sr: "Sintetička krađa identiteta",
    summary_en: "Fraudster combines real identity fragments (SSN, birthdate) with fabricated data to create a new identity. Used to build credit profiles, take loans, then disappear — leaving the real person with ruined credit.",
    summary_sr: "Prevarant kombinuje stvarne delove identiteta (JMBG, datum rođenja) sa izmišljenim podacima da bi napravio novi identitet. Koristi se za gradnju kreditnog profila, uzimanje kredita, zatim nestajanje — ostavljajući pravu osobu sa uništenim kreditom.",
    subtitle: {
      sr: "Kombinovani identitet → kreditni profil → krediti i kupovine → bust-out → nestajanje.",
      en: "Combined identity → credit profile → loans and purchases → bust-out → disappearance."
    },
    hasPage: true,
    tags: ["identitet", "prevara", "finansije"],
    overlaps: ["identity-theft", "account-takeover", "phishing", "impersonation-scam"],
    sources: [
      { name: "FTC — Synthetic Identity Fraud" },
      { name: "Federal Reserve — Synthetic Identity Fraud Guide" }
    ]
  },

  "government-impersonation": {
    core: true,
    title: { sr: "Lažno predstavljanje državnih organa", en: "Government impersonation scams" },
    title_en: "Government impersonation scams",
    title_sr: "Lažno predstavljanje državnih organa",
    summary_en: "Government impersonation still uses official tone, deadlines, and consequences to pressure the victim, but artificial intelligence can now add a more convincing voice, multilingual delivery, or cleaner written notices that feel closer to real public communication. The goal is unchanged: use state authority as leverage to force payment, data handover, or urgent verification before the person reaches a real institution.",
    summary_sr: "Lažno predstavljanje državnih organa i dalje koristi službeni ton, rokove i posledice da pritisne žrtvu, ali veštačka inteligencija danas može da doda ubedljiviji glas, višejezičan nastup ili urednija službena obaveštenja koja deluju bliže pravoj komunikaciji institucija. Cilj se ne menja: državnim autoritetom iznuditi uplatu, predaju podataka ili hitnu verifikaciju pre nego što osoba dođe do stvarne ustanove.",
    subtitle: { sr: "Institucija kao pritisak: službeni ton, rok i posledica guraju uplatu, podatke ili verifikaciju.", en: "Institution as pressure: official tone, deadline, and consequence push payment, data, or verification." },
    hasPage: true,
    tags: ["institucija", "lažno predstavljanje", "phishing"],
    overlaps: ["tax-authority-impersonation", "police-impersonation", "court-impersonation", "municipality-impersonation", "fake-fine-scam", "impersonation-scam", "phishing", "vishing", "fake-municipal-worker-scam", "fake-bailiff-enforcement-officer-scam", "fake-police-search-pretext-scam"],
    sources: [{ name: "CISA — Government Impersonation Scams" }, { name: "FTC — Impersonation Scams" }]
  },

  "tax-authority-impersonation": {
    core: true,
    title: { sr: "Lažno predstavljanje poreske uprave", en: "Tax authority impersonation" },
    title_en: "Tax authority impersonation",
    title_sr: "Lažno predstavljanje poreske uprave",
    summary_en: "Fraudsters pose as tax inspectors demanding back taxes, threatening asset freezes or criminal prosecution unless an immediate payment is made by phone or wire.",
    summary_sr: "Prevaranti se predstavljaju kao poreski inspektori koji traže zaostale poreze, preteći blokadom imovine ili krivičnom prijavom ukoliko se odmah ne uplati.",
    subtitle: { sr: "Poziv ili pismo → poreska uprava → zaostali porez ili kazna → rok → pretnja blokadom → uplata.", en: "Call or letter → tax authority → back taxes or penalty → deadline → asset freeze threat → payment." },
    hasPage: true,
    tags: ["porez", "lažno predstavljanje", "ucena"],
    overlaps: ["government-impersonation", "fake-fine-scam", "phishing", "vishing", "advance-fee-fraud"],
    sources: [{ name: "IRS — Tax Scam Alerts" }, { name: "FTC — Tax Identity Theft" }]
  },

  "police-impersonation": {
    core: true,
    title: { sr: "Lažno predstavljanje policije", en: "Police impersonation scams" },
    title_en: "Police impersonation scams",
    title_sr: "Lažno predstavljanje policije",
    summary_en: "Police impersonation still relies on shock, accusation, and fear of arrest, but artificial intelligence can make the officer’s voice sound firmer, more official, or more locally credible than before. The requested action is still the key clue: real police do not solve a criminal allegation by making you transfer money, reveal codes, or stay on a live call while you act.",
    summary_sr: "Lažno predstavljanje policije i dalje se oslanja na šok, optužbu i strah od hapšenja, ali veštačka inteligencija može da učini glas navodnog službenika čvršćim, službenijim i lokalno uverljivijim nego ranije. Tražena radnja i dalje najviše otkriva prevaru: prava policija ne rešava navodnu istragu tako što od vas traži uplatu, kodove ili da ostanete na vezi dok nešto radite.",
    subtitle: { sr: "Poziv → policajac ili istražitelj → optužba za krivično delo → hitna radnja → uplata ili podaci.", en: "Call → police officer or investigator → criminal accusation → urgent action → payment or data." },
    hasPage: true,
    tags: ["policija", "lažno predstavljanje", "ucena"],
    overlaps: ["government-impersonation", "court-impersonation", "fake-fine-scam", "impersonation-scam", "vishing"],
    sources: [{ name: "Action Fraud — Police Impersonation" }, { name: "FTC — Impersonation Scams" }]
  },

  "court-impersonation": {
    core: true,
    title: { sr: "Lažni sudski pozivi i taksene prevare", en: "Fake court summons and fee scams" },
    title_en: "Fake court summons and fee scams",
    title_sr: "Lažni sudski pozivi i taksene prevare",
    summary_en: "Fraudsters send fake court summonses requiring immediate fee payment or data verification, threatening a default judgment or arrest warrant if the demand is ignored.",
    summary_sr: "Prevaranti šalju lažne sudske pozive koji zahtevaju hitno plaćanje taksi ili verifikaciju podataka, preteći presudom u odsustvu ili nalogom za hapšenje ako se zahtev ignoriše.",
    subtitle: { sr: "Pismo ili poziv → sud → sudski poziv → rok → sudske takse → pretnja presudom u odsustvu.", en: "Letter or call → court → court summons → deadline → court fees → default judgment threat." },
    hasPage: true,
    tags: ["sud", "lažno predstavljanje", "kazna"],
    overlaps: ["government-impersonation", "police-impersonation", "fake-fine-scam", "advance-fee-fraud", "impersonation-scam"],
    sources: [{ name: "FTC — Impersonation Scams" }, { name: "Action Fraud — Courier Fraud" }]
  },

  "municipality-impersonation": {
    core: true,
    title: { sr: "Lažno predstavljanje opštinskih organa", en: "Municipality impersonation scams" },
    title_en: "Municipality impersonation scams",
    title_sr: "Lažno predstavljanje opštinskih organa",
    summary_en: "Fraudsters pose as municipal inspectors or officials, claiming unpaid communal obligations, expired permits, or address registration issues and demanding immediate payment to avoid fines or deregistration.",
    summary_sr: "Prevaranti se predstavljaju kao opštinski inspektori ili službenici, tvrdeći o neizmirenim komunalnim obavezama, isteklim dozvolama ili problemima s prijavom adrese i traže hitnu uplatu da bi izbegli kaznu.",
    subtitle: { sr: "Pismo ili poseta → opštinski inspektor → neizmirene obaveze → rok → kazna ili deregistracija.", en: "Letter or visit → municipal inspector → unpaid obligations → deadline → fine or deregistration." },
    hasPage: true,
    tags: ["opština", "lažno predstavljanje", "takse"],
    overlaps: ["government-impersonation", "fake-permit-license-scam", "utility-bill-scam", "fake-fine-scam"],
    sources: [{ name: "Citizens Advice — Council Tax Scams" }]
  },

  "social-benefits-scam": {
    core: true,
    title: { sr: "Prevare s lažnim socijalnim beneficijama", en: "Social benefits scams" },
    title_en: "Social benefits scams",
    title_sr: "Prevare s lažnim socijalnim beneficijama",
    summary_en: "Fraudsters pose as social services workers offering benefits that require upfront fees or data verification, or threaten that existing benefits will stop unless personal data is submitted immediately.",
    summary_sr: "Prevaranti se predstavljaju kao radnici socijalnih službi nudeći naknade koje zahtevaju prethodne takse ili verifikaciju podataka, ili prete da će postojeće naknade prestati ako se lični podaci ne dostave odmah.",
    subtitle: { sr: "Poziv ili email → centar za socijalni rad → pravo na naknadu → verifikacija → podaci ili uplata takse.", en: "Call or email → social services → benefit entitlement → verification → data or fee payment." },
    hasPage: true,
    tags: ["socijalna pomoć", "lažno predstavljanje", "podaci"],
    overlaps: ["government-impersonation", "pension-impersonation", "healthcare-impersonation", "phishing", "advance-fee-fraud"],
    sources: [{ name: "DWP — Benefits Scam Guidance" }, { name: "FTC — Government Impersonation" }]
  },

  "pension-impersonation": {
    core: true,
    title: { sr: "Lažno predstavljanje PIO fonda", en: "Pension fund impersonation" },
    title_en: "Pension fund impersonation",
    title_sr: "Lažno predstavljanje PIO fonda",
    summary_en: "Fraudsters call posing as pension fund officials threatening suspension of pension payments due to unpaid contributions or a required recalculation that demands immediate data confirmation or fee payment.",
    summary_sr: "Prevaranti zovu predstavljajući se kao službenici PIO fonda, preteći suspenzijom isplate penzije zbog neplaćenih doprinosa ili obaveznog preračuna koji zahteva hitnu potvrdu podataka ili uplatu naknade.",
    subtitle: { sr: "Poziv ili pismo → PIO fond → neplaćeni doprinos ili preračun → rok → suspenzija penzije → uplata.", en: "Call or letter → pension fund → unpaid contribution or recalculation → deadline → pension suspension → payment." },
    hasPage: true,
    tags: ["penzija", "lažno predstavljanje", "podaci"],
    overlaps: ["government-impersonation", "social-benefits-scam", "healthcare-impersonation", "vishing", "impersonation-scam"],
    sources: [{ name: "FCA — Pension Scams" }, { name: "Action Fraud — Pension Fraud" }]
  },

  "healthcare-impersonation": {
    core: true,
    title: { sr: "Lažno predstavljanje zdravstvene kase", en: "Health insurance impersonation" },
    title_en: "Health insurance impersonation",
    title_sr: "Lažno predstavljanje zdravstvene kase",
    summary_en: "Fraudsters send SMS or make calls posing as health insurance representatives, demanding immediate card verification or co-payment refund processing to prevent coverage suspension.",
    summary_sr: "Prevaranti šalju SMS poruke ili zovu predstavljajući se kao predstavnici zdravstvene kase, zahtevajući hitnu verifikaciju kartice ili obradu povraćaja participacije kako bi sprečili suspenziju pokrića.",
    subtitle: { sr: "SMS ili poziv → zdravstvena kasa → verifikacija kartice → rok → suspenzija pokrića → podaci ili uplata.", en: "SMS or call → health insurance → card verification → deadline → coverage suspension → data or payment." },
    hasPage: true,
    tags: ["zdravstvo", "lažno predstavljanje", "podaci"],
    overlaps: ["government-impersonation", "pension-impersonation", "social-benefits-scam", "phishing", "smishing"],
    sources: [{ name: "CMS — Medicare Fraud" }, { name: "FTC — Health Care Fraud" }]
  },

  "education-ministry-impersonation": {
    core: true,
    title: { sr: "Prevare s lažnim ministarstvom prosvete", en: "Education authority impersonation" },
    title_en: "Education authority impersonation",
    title_sr: "Prevare s lažnim ministarstvom prosvete",
    summary_en: "Fraudsters email students or parents posing as education ministry or university officials, demanding unpaid fees or accreditation payments under threat of losing student status or diploma validity.",
    summary_sr: "Prevaranti šalju emailove studentima ili roditeljima predstavljajući se kao službenici ministarstva prosvete ili fakulteta, tražeći neplaćene takse ili akreditacione naknade pod pretnjom gubitka statusa studenta ili diplome.",
    subtitle: { sr: "Email ili poziv → ministarstvo ili fakultet → neplaćene takse ili akreditacija → rok → gubitak statusa.", en: "Email or call → ministry or university → unpaid fees or accreditation → deadline → status loss." },
    hasPage: true,
    tags: ["obrazovanje", "lažno predstavljanje", "takse"],
    overlaps: ["government-impersonation", "fake-permit-license-scam", "advance-fee-fraud", "phishing"],
    sources: [{ name: "FTC — Diploma Mill Fraud" }]
  },

  "fake-fine-scam": {
    core: true,
    title: { sr: "Lažne kazne i nalozi za plaćanje", en: "Fake fines and payment orders" },
    title_en: "Fake fines and payment orders",
    title_sr: "Lažne kazne i nalozi za plaćanje",
    summary_en: "Victims receive SMS or email claiming a traffic or administrative fine is due, with a link to a fake payment portal that steals card data or collects fraudulent payments.",
    summary_sr: "Žrtve primaju SMS ili email koji tvrdi da duguju saobraćajnu ili administrativnu kaznu, sa linkom ka lažnom portalu za uplatu koji krade podatke kartice ili naplaćuje prevarnu uplatu.",
    subtitle: { sr: "SMS ili email → organ saobraćajne kontrole → kazna → link → lažni portal → uplata.", en: "SMS or email → traffic or municipal authority → penalty → link → fake portal → payment." },
    hasPage: true,
    tags: ["kazna", "lažno predstavljanje", "uplata"],
    overlaps: ["government-impersonation", "police-impersonation", "toll-road-scam", "parking-qr-scam", "smishing", "phishing"],
    sources: [{ name: "Action Fraud — Fake Fine Scams" }, { name: "FTC — Text Message Scams" }]
  },

  "usb-baiting-scam": {
    title: { sr: "USB mamac (baiting)", en: "USB baiting scam" },
    title_en: "USB baiting scam",
    title_sr: "USB mamac (baiting)",
    summary_en: "Attackers leave or mail USB drives so curiosity leads someone to plug them in. Files may install malware, enable remote control, or encrypt data for ransom. Signal: an unrequested flash drive, odd packaging, or documents asking to enable macros.",
    summary_sr: "Napadači ostavljaju ili šalju USB da radoznalost navede nekoga da ga ubaci. Fajlovi mogu instalirati malver, omogućiti daljinski pristup ili šifrovati podatke radi otkupa. Signal: neočekivani fleš, čudna ambalaža ili dokumenti koji traže makroe.",
    subtitle: {
      sr: "Fizički mamac → ubacivanje → pokretanje fajla → malver ili otkup → širenje u mreži.",
      en: "Physical bait → insertion → file execution → malware or ransom → spread on the network."
    },
    hasPage: true,
    tags: ["usb", "malver", "firma"],
    overlaps: ["phishing", "malicious-app-scam", "fake-update-scam", "ransomware-orgs", "tech-support-scam", "browser-extension-scam"],
    sources: [
      { name: "UK NCSC — Mitigating malware and ransomware attacks", url: "https://www.ncsc.gov.uk/guidance/mitigating-malware-and-ransomware-attacks" },
      { name: "CISA — Recognize and Report Phishing", url: "https://www.cisa.gov/avoid-phishing-attempts" }
    ]
  },

  "utility-bill-scam": {
    core: true,
    title: { sr: "Lažni računi za komunalne usluge", en: "Fake utility bill scams" },
    title_en: "Fake utility bill scams",
    title_sr: "Lažni računi za komunalne usluge",
    summary_en: "Fraudsters send fake utility bills or call posing as electricity or water company representatives, threatening imminent disconnection unless an overdue payment is made immediately via a provided link or phone number.",
    summary_sr: "Prevaranti šalju lažne račune za komunalije ili zovu predstavljajući se kao predstavnici elektrodistribucije ili vodovoda, preteći hitnim isključenjem ukoliko se zaostali dug ne plati odmah putem dostavljenog linka ili broja telefona.",
    subtitle: { sr: "Pismo ili poziv → elektrodistribucija ili komunalno → zaostali dug → rok → pretnja isključenjem → hitna uplata.", en: "Letter or call → electricity or utility company → overdue debt → deadline → disconnection threat → urgent payment." },
    hasPage: true,
    tags: ["komunalije", "lažno predstavljanje", "uplata"],
    overlaps: ["government-impersonation", "municipality-impersonation", "energy-supplier-switch-scam", "telecom-contract-scam", "phishing", "smishing"],
    sources: [{ name: "Ofgem — Utility Scam Guidance" }]
  },

  "telecom-contract-scam": {
    core: true,
    title: { sr: "Prevare pri obnovi telekomunikacionih ugovora", en: "Telecom contract renewal scams" },
    title_en: "Telecom contract renewal scams",
    title_sr: "Prevare pri obnovi telekomunikacionih ugovora",
    summary_en: "Fraudsters call or visit posing as telecom operators, offering contract renewals or better deals, but the signed documents actually switch the victim to a more expensive provider or unauthorized plan.",
    summary_sr: "Prevaranti zovu ili dolaze na vrata predstavljajući se kao operateri telekoma, nudeći obnovu ugovora ili bolju ponudu, ali potpisani dokumenti zapravo prebacuju žrtvu na skupljeg operatera ili neovlašćeni plan.",
    subtitle: { sr: "Poziv ili poseta → telekom operater → istekao ugovor ili povoljnija ponuda → potpisivanje → neočekivane obaveze.", en: "Call or visit → telecom operator → expired contract or better offer → signing → unexpected obligations." },
    hasPage: true,
    tags: ["telekom", "lažno predstavljanje", "ugovor"],
    overlaps: ["government-impersonation", "utility-bill-scam", "energy-supplier-switch-scam", "impersonation-scam"],
    sources: [{ name: "Ofcom — Switching Scams" }]
  },

  "energy-supplier-switch-scam": {
    core: true,
    title: { sr: "Prevare pri prelasku na drugog dobavljača energije", en: "Energy supplier switch scams" },
    title_en: "Energy supplier switch scams",
    title_sr: "Prevare pri prelasku na drugog dobavljača energije",
    summary_en: "Door-to-door fraudsters pose as energy company representatives offering better tariffs, getting victims to sign documents that are actually supplier change contracts — without full understanding of the terms.",
    summary_sr: "Prevaranti od vrata do vrata se predstavljaju kao zastupnici energetskih kompanija nudeći bolje tarife, navodeći žrtve da potpišu dokumente koji su zapravo ugovori o promeni dobavljača — bez punog razumevanja uslova.",
    subtitle: { sr: "Kucanje na vrata → energetski konsultant → povoljnija tarifa → potpisivanje → neovlašćena promena dobavljača.", en: "Doorstep visit → energy consultant → better tariff → signing → unauthorized supplier switch." },
    hasPage: true,
    tags: ["energija", "lažno predstavljanje", "ugovor"],
    overlaps: ["government-impersonation", "utility-bill-scam", "telecom-contract-scam", "impersonation-scam"],
    sources: [{ name: "Ofgem — Mis-selling Guidance" }]
  },

  "evil-twin-wifi-scam": {
    title: { sr: "Evil twin Wi‑Fi prevara", en: "Evil twin Wi‑Fi scam" },
    title_en: "Evil twin Wi‑Fi scam",
    title_sr: "Evil twin Wi‑Fi prevara",
    summary_en: "A fake hotspot mimics the expected guest network name. After you connect, a captive portal or fake page harvests passwords, pushes a profile, or intercepts traffic. Signal: multiple similar SSIDs and a portal that asks for email or bank login for Wi‑Fi access.",
    summary_sr: "Lažna pristupna tačka imitira očekivani naziv gost mreže. Posle konekcije captive portal ili lažna stranica prikuplja lozinke, gura profil ili presreće saobraćaj. Signal: više sličnih SSID-ova i portal koji traži mejl ili bankovnu prijavu za pristup internetu.",
    subtitle: {
      sr: "Sličan SSID → konekcija → portal ili profil → prag (unos) → krađa naloga ili sesije.",
      en: "Similar SSID → connection → portal or profile → threshold (entry) → account or session theft."
    },
    hasPage: true,
    tags: ["wifi", "mreža", "krađa podataka"],
    overlaps: ["phishing", "account-takeover", "quishing", "fake-call-scam", "tech-support-scam", "malicious-app-scam"],
    sources: [
      { name: "CISA — Recognize and Report Phishing", url: "https://www.cisa.gov/avoid-phishing-attempts" },
      { name: "UK NCSC — Phishing guidance", url: "https://www.ncsc.gov.uk/guidance/phishing" }
    ]
  },

  "parking-qr-scam": {
    core: true,
    title: { sr: "Lažni QR kodovi na parkiralištima", en: "Fake parking QR code scams" },
    title_en: "Fake parking QR code scams",
    title_sr: "Lažni QR kodovi na parkiralištima",
    summary_en: "Fraudsters place fake QR code stickers on parking meters that redirect to a fake parking payment portal designed to steal card details or collect payments without issuing valid parking permits.",
    summary_sr: "Prevaranti postavljaju nalepnice sa lažnim QR kodovima na parkometrima koje preusmjeravaju na lažni portal za plaćanje parkinga koji krade podatke kartice ili naplaćuje uplate bez izdavanja valjanih parking dozvola.",
    subtitle: { sr: "Nalepnica na parkometru → QR kod → lažni portal → unos podataka kartice → krađa.", en: "Sticker on parking meter → QR code → fake portal → card data entry → theft." },
    hasPage: true,
    tags: ["parking", "QR", "uplata"],
    overlaps: ["government-impersonation", "fake-fine-scam", "toll-road-scam", "phishing"],
    sources: [{ name: "FBI — QR Code Fraud Alert" }, { name: "FTC — QR Code Scams" }]
  },

  "toll-road-scam": {
    core: true,
    title: { sr: "Prevare s lažnim putarinama", en: "Fake toll road scams" },
    title_en: "Fake toll road scams",
    title_sr: "Prevare s lažnim putarinama",
    summary_en: "Victims receive SMS or email claiming an unpaid toll is due on their vehicle, with a link to a fake payment portal that captures card data or collects fraudulent payments.",
    summary_sr: "Žrtve primaju SMS ili email koji tvrdi da za njihovo vozilo postoji neplaćena putarina, sa linkom ka lažnom portalu za plaćanje koji prikuplja podatke kartice ili naplaćuje prevarnu uplatu.",
    subtitle: { sr: "SMS ili email → putarine → neplaćena putarina → link → lažni portal → uplata ili krađa kartice.", en: "SMS or email → toll authority → unpaid toll → link → fake portal → payment or card theft." },
    hasPage: true,
    tags: ["putarina", "smishing", "uplata"],
    overlaps: ["government-impersonation", "fake-fine-scam", "parking-qr-scam", "customs-fee-scam", "smishing", "phishing"],
    sources: [{ name: "FBI — Smishing Toll Scams 2024" }, { name: "FTC — Toll Text Scams" }]
  },

  "customs-fee-scam": {
    core: true,
    title: { sr: "Lažne carine i taksene prevare", en: "Fake customs fee scams" },
    title_en: "Fake customs fee scams",
    title_sr: "Lažne carine i taksene prevare",
    summary_en: "Fraudsters send SMS or email claiming a parcel is held at customs requiring an urgent fee payment to release it, using a link that leads to a fake portal stealing card data.",
    summary_sr: "Prevaranti šalju SMS ili email koji tvrdi da je paket zadržan na carini i da je potrebno hitno platiti naknadu za oslobađanje, koristeći link koji vodi ka lažnom portalu koji krade podatke kartice.",
    subtitle: { sr: "SMS ili email → carina → zadržana pošiljka → naknada za oslobađanje → link → lažni portal → uplata.", en: "SMS or email → customs → held shipment → release fee → link → fake portal → payment." },
    hasPage: true,
    tags: ["carina", "lažno predstavljanje", "takse"],
    overlaps: ["government-impersonation", "toll-road-scam", "advance-fee-fraud", "phishing", "smishing", "fake-fine-scam"],
    sources: [{ name: "Action Fraud — Parcel Customs Scams" }, { name: "FTC — Package Delivery Scams" }]
  },

  "fake-permit-license-scam": {
    core: true,
    title: { sr: "Lažne agencije za dozvole i licence", en: "Fake permit and license agencies" },
    title_en: "Fake permit and license agencies",
    title_sr: "Lažne agencije za dozvole i licence",
    summary_en: "Fraudsters pose as permit agencies or government intermediaries, charging fees for permits or licenses that are either free, non-existent, or never delivered after payment.",
    summary_sr: "Prevaranti se predstavljaju kao agencije za dozvole ili vladini posrednici, naplaćujući naknade za dozvole ili licence koje su besplatne, ne postoje ili nikad ne budu izdate posle uplate.",
    subtitle: { sr: "Kontakt → agencija za dozvole → brza procedura → naknada → dozvola nikad ne stiže.", en: "Contact → permit agency → fast-track procedure → fee → permit never arrives." },
    hasPage: true,
    tags: ["dozvola", "lažno predstavljanje", "takse"],
    overlaps: ["government-impersonation", "municipality-impersonation", "education-ministry-impersonation", "fake-government-tender-portal-scam", "advance-fee-fraud"],
    sources: [{ name: "FTC — Government Impersonation Scams" }]
  },

  "immigration-visa-scam": {
    core: true,
    title: { sr: "Prevare s vizama i imigracijom", en: "Immigration and visa scams" },
    title_en: "Immigration and visa scams",
    title_sr: "Prevare s vizama i imigracijom",
    summary_en: "Fraudsters pose as immigration lawyers or official visa agencies, collecting documents and fees for visa or residency applications that are never submitted, delayed indefinitely, or result in fraudulent documents.",
    summary_sr: "Prevaranti se predstavljaju kao imigracioni advokati ili zvanične vizne agencije, prikupljajući dokumente i naknade za vize ili boravišne dozvole koje nikad ne budu podnete, odlažu se beskonačno ili rezultiraju lažnim dokumentima.",
    subtitle: { sr: "Kontakt → vizni konsultant ili agencija → prikupljanje dokumenata → naknade → lažna viza ili ništa.", en: "Contact → visa consultant or agency → document collection → fees → fake visa or nothing." },
    hasPage: true,
    tags: ["viza", "migracija", "lažno predstavljanje"],
    overlaps: ["government-impersonation", "advance-fee-fraud", "fake-permit-license-scam", "impersonation-scam"],
    sources: [{ name: "USCIS — Immigration Scams" }, { name: "FTC — Immigration Scams" }]
  },

  "public-procurement-document-fee-scam": {
    core: true,
    title: { sr: "Prevare s naknadama za tendersku dokumentaciju", en: "Public procurement document fee scams" },
    title_en: "Public procurement document fee scams",
    title_sr: "Prevare s naknadama za tendersku dokumentaciju",
    summary_en: "Companies receive fraudulent tender invitations demanding payment of documentation fees to access tender materials that either do not exist or are freely available through official channels.",
    summary_sr: "Kompanije primaju prevarante pozive na tender koji traže plaćanje naknade za dokumentaciju radi pristupa tenderskim materijalima koji ili ne postoje ili su besplatno dostupni kroz zvanične kanale.",
    subtitle: { sr: "Email ili pismo → organ javnih nabavki → poziv na tender → naknada za dokumentaciju → ništa.", en: "Email or letter → procurement authority → tender invitation → documentation fee → nothing." },
    hasPage: true,
    tags: ["javne nabavke", "takse", "prevara"],
    overlaps: ["government-impersonation", "fake-government-tender-portal-scam", "advance-fee-fraud", "business-email-compromise", "phishing"],
    sources: [{ name: "OECD — Procurement Fraud Guide" }]
  },

  "fake-government-tender-portal-scam": {
    core: true,
    title: { sr: "Lažni portali za javne nabavke", en: "Fake government tender portal scams" },
    title_en: "Fake government tender portal scams",
    title_sr: "Lažni portali za javne nabavke",
    summary_en: "Fraudsters build websites imitating official public procurement portals, requiring companies to register and pay fees to submit bids on tenders that do not exist on the real portal.",
    summary_sr: "Prevaranti grade sajtove koji imitiraju zvanične portale za javne nabavke, zahtevajući od kompanija da se registruju i plate naknade da bi podnele ponude za tendere koji ne postoje na pravom portalu.",
    subtitle: { sr: "Email ili link → lažni portal javnih nabavki → registracija → taksena naknada → pristup lažnom portalu.", en: "Email or link → fake procurement portal → registration → fee payment → access to fake portal." },
    hasPage: true,
    tags: ["javne nabavke", "portal", "prevara"],
    overlaps: ["government-impersonation", "public-procurement-document-fee-scam", "phishing", "business-email-compromise", "fake-permit-license-scam"],
    sources: [{ name: "OECD — Procurement Fraud Guide" }, { name: "FBI IC3 — Business Email Compromise" }]
  },

  "address-verification-scam": {
    core: true,
    title: { sr: "Prevara sa verifikacijom adrese", en: "Fake address verification scam" },
    title_en: "Fake address verification scam",
    title_sr: "Prevara sa verifikacijom adrese",
    summary_en: "Fraudsters claim a government or benefits register does not match your address and demand a fee or data submission through a link to avoid suspension of services or payments.",
    summary_sr: "Prevaranti tvrde da se adresa u državnom ili socijalnom registru ne poklapa i traže naknadu ili slanje podataka preko linka da bi se izbegla suspenzija usluga ili isplata.",
    subtitle: { sr: "Poruka → zvanična evidencija → neusklađena adresa → rok → uplata ili forma.", en: "Message → official register → address mismatch → deadline → payment or form." },
    hasPage: true,
    tags: ["adresa", "lažno predstavljanje", "podaci"],
    overlaps: ["government-impersonation", "municipality-impersonation", "social-benefits-scam", "phishing", "smishing"],
    sources: [{ name: "FTC — Impersonation Scams" }, { name: "CISA — Phishing" }]
  },

  "apostille-legalization-scam": {
    core: true,
    title: { sr: "Prevara sa apostilom i legalizacijom", en: "Fake apostille and legalization scam" },
    title_en: "Fake apostille and legalization scam",
    title_sr: "Prevara sa apostilom i legalizacijom",
    summary_en: "Fraudsters pose as consular or court intermediaries, charging upfront fees for apostille or legalization of documents that are never processed or are available through official channels at published rates.",
    summary_sr: "Prevaranti se predstavljaju kao konsularni ili sudski posrednici i naplaćuju unapred apostil ili legalizaciju dokumenata koji se nikad ne obrade ili su dostupni zvanično po objavljenim cenama.",
    subtitle: { sr: "Kontakt → posrednik → hitan rok → naknada → dokument ne stiže.", en: "Contact → intermediary → urgent deadline → fee → document never arrives." },
    hasPage: true,
    tags: ["dokumenti", "takse", "lažno predstavljanje"],
    overlaps: ["government-impersonation", "court-impersonation", "advance-fee-fraud", "phishing"],
    sources: [{ name: "FTC — Government Impersonation Scams" }]
  },

  "birth-certificate-issuance-scam": {
    core: true,
    title: { sr: "Prevara sa izdavanjem matičnih isprava", en: "Fake birth certificate issuance scam" },
    title_en: "Fake birth certificate issuance scam",
    title_sr: "Prevara sa izdavanjem matičnih isprava",
    summary_en: "Fraudsters offer expedited birth extracts or certificates for a wire fee, then deliver nothing, send a worthless PDF, or phish for identity data through a fake civil-registry portal.",
    summary_sr: "Prevaranti nude ubrzano izdavanje izvoda ili potvrda uz naknadu na račun, zatim ne isporuče ništa, pošalju bezvredan PDF ili fiše za lične podatke kroz lažni portal matične evidencije.",
    subtitle: { sr: "Oglas ili poruka → matična služba → hitno izdavanje → uplata → lažan dokument.", en: "Ad or message → civil registry → urgent issuance → payment → fake document." },
    hasPage: true,
    tags: ["matična knjiga", "dokumenti", "prevara"],
    overlaps: ["government-impersonation", "municipality-impersonation", "advance-fee-fraud", "phishing"],
    sources: [{ name: "FTC — Government Impersonation Scams" }]
  },

  "business-license-renewal-scam": {
    core: true,
    title: { sr: "Prevara sa obnovom poslovne dozvole", en: "Fake business license renewal scam" },
    title_en: "Fake business license renewal scam",
    title_sr: "Prevara sa obnovom poslovne dozvole",
    summary_en: "Fraudsters email or call business owners claiming a license is expiring, directing them to a fake renewal portal or private account payment to avoid closure or fines.",
    summary_sr: "Prevaranti šalju email ili zovu vlasnike firmi tvrdeći da dozvola ističe i usmeravaju na lažni portal obnove ili uplatu na privatni račun da bi se izbeglo zatvaranje ili kazna.",
    subtitle: { sr: "Obaveštenje → registrovana delatnost → istek dozvole → uplata → lažni portal.", en: "Notice → registered activity → license expiry → payment → fake portal." },
    hasPage: true,
    tags: ["firma", "dozvola", "lažno predstavljanje"],
    overlaps: ["government-impersonation", "fake-permit-license-scam", "tax-authority-impersonation", "phishing", "advance-fee-fraud"],
    sources: [{ name: "FTC — Business Scams" }, { name: "FBI IC3 — Business Email Compromise" }]
  },

  "esignature-certificate-renewal-scam": {
    core: true,
    title: { sr: "Prevara sa obnovom sertifikata e-potpisa", en: "Fake e-signature certificate renewal scam" },
    title_en: "Fake e-signature certificate renewal scam",
    title_sr: "Prevara sa obnovom sertifikata e-potpisa",
    summary_en: "Fraudsters warn that a qualified e-signature certificate will be revoked unless an urgent fee is paid or credentials are entered on a cloned CA or portal page.",
    summary_sr: "Prevaranti upozoravaju da će kvalifikovani sertifikat e-potpisa biti opozvan ako se odmah ne plati naknada ili ne unesu akreditivi na kloniranoj strani CA ili portala.",
    subtitle: { sr: "Email → CA ili portal → istek sertifikata → hitna uplata ili forma → krađa.", en: "Email → CA or portal → certificate expiry → urgent payment or form → theft." },
    hasPage: true,
    tags: ["e-potpis", "sertifikat", "fišing"],
    overlaps: ["government-impersonation", "phishing", "egovernment-login-phishing", "advance-fee-fraud"],
    sources: [{ name: "CISA — Phishing" }, { name: "UK NCSC — Phishing" }]
  },

  "health-card-renewal-scam": {
    core: true,
    title: { sr: "Prevara sa obnovom zdravstvene kartice", en: "Fake health card renewal scam" },
    title_en: "Fake health card renewal scam",
    title_sr: "Prevara sa obnovom zdravstvene kartice",
    summary_en: "Fraudsters send SMS or email claiming health coverage will stop unless the card is renewed immediately through a link that harvests personal data or card payments.",
    summary_sr: "Prevaranti šalju SMS ili email da će zdravstveno pokriće prestati ako se kartica odmah ne obnovi preko linka koji prikuplja lične podatke ili naplaćuje karticom.",
    subtitle: { sr: "Poruka → zdravstvena ustanova → istek kartice → link → podaci ili uplata.", en: "Message → health body → card expiry → link → data or payment." },
    hasPage: true,
    tags: ["zdravstvo", "kartica", "smishing"],
    overlaps: ["healthcare-impersonation", "government-impersonation", "social-benefits-scam", "phishing", "smishing"],
    sources: [{ name: "FTC — Health Care Fraud" }, { name: "CMS — Medicare Fraud" }]
  },

  "land-registry-fast-track-scam": {
    core: true,
    title: { sr: "Prevara sa brzim upisom u katastar", en: "Fake land registry fast-track scam" },
    title_en: "Fake land registry fast-track scam",
    title_sr: "Prevara sa brzim upisom u katastar",
    summary_en: "Fraudsters offer priority cadastre or title registration for a fee paid to a private account, with no real filing, while phishing for property and identity details.",
    summary_sr: "Prevaranti nude prioritetni katastarski ili vlasnički upis uz naknadu na privatni račun bez pravog podnošenja, dok fiše za podatke o nekretnini i identitetu.",
    subtitle: { sr: "Kontakt → katastar → brza procedura → uplata → nema predmeta.", en: "Contact → land registry → fast track → payment → no case file." },
    hasPage: true,
    tags: ["katastar", "nekretnina", "takse"],
    overlaps: ["government-impersonation", "municipality-impersonation", "advance-fee-fraud", "phishing"],
    sources: [{ name: "FTC — Real Estate Scams" }]
  },

  "labor-ministry-wage-compensation-scam": {
    core: true,
    title: { sr: "Prevara sa naknadom za neisplaćene zarade", en: "Fake labor ministry wage compensation scam" },
    title_en: "Fake labor ministry wage compensation scam",
    title_sr: "Prevara sa naknadom za neisplaćene zarade",
    summary_en: "Fraudsters impersonate labor authorities, claiming you are entitled to back-pay compensation and must pay an administrative fee or tax upfront to release the funds.",
    summary_sr: "Prevaranti se predstavljaju kao organi rada, tvrde da vam pripada naknada za neisplaćene zarade i traže unapred administrativnu naknadu ili porez da bi se sredstva pustila.",
    subtitle: { sr: "Poruka → inspekcija ili fond → dospelo pravo → taksa pre isplate → prevara.", en: "Message → inspector or fund → accrued right → fee before payout → fraud." },
    hasPage: true,
    tags: ["rad", "zarada", "lažno predstavljanje"],
    overlaps: ["government-impersonation", "tax-authority-impersonation", "advance-fee-fraud", "vishing", "phishing"],
    sources: [{ name: "FTC — Government Impersonation Scams" }]
  },

  "marriage-registry-fee-scam": {
    core: true,
    title: { sr: "Prevara sa taksama matične evidencije braka", en: "Fake marriage registry fee scam" },
    title_en: "Fake marriage registry fee scam",
    title_sr: "Prevara sa taksama matične evidencije braka",
    summary_en: "Fraudsters demand urgent payment for marriage registration, ceremony slots, or certificate fees through unofficial links or personal accounts before a fake deadline.",
    summary_sr: "Prevaranti traže hitnu uplatu za upis braka, termin venčanja ili takse za isprave preko nezvaničnih linkova ili ličnih računa pred lažni rok.",
    subtitle: { sr: "Poziv ili mejl → matičar → obavezna taksa → rok → uplata na tuđi račun.", en: "Call or email → registrar → mandatory fee → deadline → payment to wrong account." },
    hasPage: true,
    tags: ["brak", "matičar", "takse"],
    overlaps: ["government-impersonation", "municipality-impersonation", "advance-fee-fraud", "phishing"],
    sources: [{ name: "FTC — Wedding Scams" }]
  },

  "municipal-permit-scam": {
    core: true,
    title: { sr: "Prevara sa lažnom opštinskom dozvolom", en: "Fake municipal permit scam" },
    title_en: "Fake municipal permit scam",
    title_sr: "Prevara sa lažnom opštinskom dozvolom",
    summary_en: "Fraudsters pose as municipal clerks selling construction, terrace, or vending permits, or fast approvals, for fees sent to private accounts or fake payment portals.",
    summary_sr: "Prevaranti se predstavljaju kao opštinski službenici i prodaju dozvole za gradnju, terasu ili kiosk, ili brza odobrenja, uz naknadu na privatne račune ili lažne portale.",
    subtitle: { sr: "Kontakt → opština → dozvola ili taksa → uplata → nema predmeta.", en: "Contact → municipality → permit or fee → payment → no file." },
    hasPage: true,
    tags: ["opština", "dozvola", "prevara"],
    overlaps: ["municipality-impersonation", "government-impersonation", "fake-permit-license-scam", "advance-fee-fraud"],
    sources: [{ name: "FTC — Government Impersonation Scams" }]
  },

  "pension-recalculation-scam": {
    core: true,
    title: { sr: "Prevara sa lažnim preračunom penzije", en: "Fake pension recalculation scam" },
    title_en: "Fake pension recalculation scam",
    title_sr: "Prevara sa lažnim preračunom penzije",
    summary_en: "Fraudsters claim a pension must be recalculated and a verification fee or back tax paid immediately to avoid a cut or suspension, using vishing or phishing portals.",
    summary_sr: "Prevaranti tvrde da penzija mora da se preračuna i da se odmah plati naknada za verifikaciju ili porez unazad da bi se izbeglo smanjenje ili suspenzija, preko višinga ili fišing portala.",
    subtitle: { sr: "Poziv → fond → preračun → hitna uplata → lažni procedura.", en: "Call → fund → recalculation → urgent payment → fake procedure." },
    hasPage: true,
    tags: ["penzija", "preračun", "višing"],
    overlaps: ["pension-impersonation", "government-impersonation", "tax-authority-impersonation", "social-benefits-scam", "vishing"],
    sources: [{ name: "FCA — Pension Scams" }, { name: "Action Fraud — Pension Fraud" }]
  },

  "public-records-access-fee-scam": {
    core: true,
    title: { sr: "Prevara sa naplatom pristupa javnim evidencijama", en: "Fake public records access fee scam" },
    title_en: "Fake public records access fee scam",
    title_sr: "Prevara sa naplatom pristupa javnim evidencijama",
    summary_en: "Fraudsters charge for access to voter rolls, business registers, or court indexes that are free or billed only through official portals, often after a phishing email.",
    summary_sr: "Prevaranti naplaćuju pristup biračkim spiskovima, registru privrednih subjekata ili sudskim indeksima koji su besplatni ili se plaćaju samo zvanično, često posle fišing mejla.",
    subtitle: { sr: "Mejl → javna evidencija → registracija → naknada → nema pristupa.", en: "Email → public record → registration → fee → no access." },
    hasPage: true,
    tags: ["evidencija", "portal", "fišing"],
    overlaps: ["government-impersonation", "court-impersonation", "phishing", "advance-fee-fraud"],
    sources: [{ name: "FTC — Government Impersonation Scams" }]
  },

  "residence-registration-scam": {
    core: true,
    title: { sr: "Prevara sa prijavom prebivališta", en: "Fake residence registration scam" },
    title_en: "Fake residence registration scam",
    title_sr: "Prevara sa prijavom prebivališta",
    summary_en: "Fraudsters claim your residence is not registered correctly and demand an urgent online fee or data upload to avoid fines or loss of benefits, using cloned police or municipal pages.",
    summary_sr: "Prevaranti tvrde da prebivalište nije pravilno prijavljeno i traže hitnu online naknadu ili slanje podataka da bi se izbegle kazne ili gubitak beneficija, kroz klonirane stranice policije ili opštine.",
    subtitle: { sr: "SMS ili mejl → prijava adrese → rok → forma ili uplata → krađa podataka.", en: "SMS or email → address registration → deadline → form or payment → data theft." },
    hasPage: true,
    tags: ["prebivalište", "opština", "podaci"],
    overlaps: ["government-impersonation", "municipality-impersonation", "police-impersonation", "phishing", "smishing"],
    sources: [{ name: "FTC — Impersonation Scams" }]
  },

  "social-benefit-suspension-scam": {
    core: true,
    title: { sr: "Prevara sa lažnom suspenzijom socijalne pomoći", en: "Fake social benefit suspension scam" },
    title_en: "Fake social benefit suspension scam",
    title_sr: "Prevara sa lažnom suspenzijom socijalne pomoći",
    summary_en: "Fraudsters threaten to suspend child, housing, or disability benefits unless verification fees are paid or credentials are submitted on a fake social-services portal.",
    summary_sr: "Prevaranti prete suspenzijom dečijeg, stambenog ili invalidskog dodatka ako se ne plate naknade za verifikaciju ili ne unesu akreditivi na lažnom portalu socijalnih službi.",
    subtitle: { sr: "Poruka → centar za socijalni rad → suspenzija → verifikacija → uplata.", en: "Message → social services → suspension → verification → payment." },
    hasPage: true,
    tags: ["socijalna pomoć", "suspenzija", "fišing"],
    overlaps: ["social-benefits-scam", "government-impersonation", "healthcare-impersonation", "phishing", "vishing"],
    sources: [{ name: "DWP — Benefits Scam Guidance" }, { name: "FTC — Government Impersonation" }]
  },

  "bank-impersonation": {
    core: true,
    title: { sr: "Lažna banka (bankovni prevarant)", en: "Bank impersonation scam" },
    title_en: "Bank impersonation scam",
    title_sr: "Lažna banka (bankovni prevarant)",
    summary_en: "A bank impersonation scam still starts with a fake incident and ends with your approval, but artificial intelligence can now make the caller sound calmer, more professional, and more believable as a bank employee. The red flag remains the same: instead of the bank blocking risk on its own side, the caller pushes you into a live action that opens access, changes settings, or authorizes money movement.",
    summary_sr: "Prevara lažne banke i dalje počinje lažnim incidentom, a završava vašom potvrdom, ali veštačka inteligencija danas može da učini pozivaoca smirenijim, stručnijim i uverljivijim kao navodnog bankarskog službenika. Crvena zastavica ostaje ista: umesto da banka sama blokira rizik na svojoj strani, pozivalac vas gura u radnju uživo koja otvara pristup, menja podešavanja ili odobrava pomeranje novca.",
    subtitle: { sr: "Lažni bankarski incident kao poluga: kod, kartica, potvrda ili transfer predstavljeni su kao zaštita.", en: "A fake bank incident as leverage: code, card, approval, or transfer presented as protection." },
    hasPage: true,
    tags: ["banka", "lažno predstavljanje", "kartica"],
    overlaps: ["safe-account-scam", "courier-fraud", "otp-interception", "email-account-compromise", "card-not-present-fraud", "vishing", "impersonation-scam", "account-takeover", "atm-assistance-scam"],
    sources: [{ name: "UK Finance — Authorised Push Payment Fraud" }, { name: "FCA — Scam warnings" }]
  },

  "safe-account-scam": {
    core: true,
    title: { sr: "Prevara sa 'bezbednim nalogom'", en: "Safe account scam" },
    title_en: "Safe account scam",
    title_sr: "Prevara sa 'bezbednim nalogom'",
    summary_en: "This is the narrow transfer-focused subtype of bank or police impersonation: the whole story pushes the victim to move their own money to a so-called safe, holding, evidence, or transit account. Unlike broader bank impersonation, the main threshold here is the self-authorized transfer of most or all available funds. Signal: protecting money is framed as sending it away immediately rather than freezing the card, blocking the account, or confirming identity through ordinary bank channels.",
    summary_sr: "Ovo je uži, transferno fokusiran podtip bankarskog ili policijskog lažnog predstavljanja: cela priča gura žrtvu da sama prebaci svoj novac na navodno bezbedan, kontrolni, dokazni ili privremeni račun. Za razliku od šire bankarske impersonacije, glavni prag ovde je samostalno odobren transfer većeg dela ili svih sredstava. Signal: zaštita novca predstavlja se kao hitno slanje novca dalje, umesto kao blokada kartice, zamrzavanje računa ili provera identiteta kroz redovan bankarski kanal.",
    subtitle: { sr: "Nije blokada nego transfer: lažni bezbedni račun pretvara zaštitu u samostalnu uplatu prevarantu.", en: "Not a freeze but a transfer: the fake safe account turns protection into a self-authorized payment to the scammer." },
    hasPage: true,
    tags: ["banka", "transfer", "policija"],
    overlaps: ["bank-impersonation", "courier-fraud", "cash-to-gold-scam", "otp-interception", "vishing", "impersonation-scam"],
    sources: [{ name: "UK Finance — Authorised Push Payment Fraud" }, { name: "Action Fraud UK — Safe Account Scam" }]
  },

  "courier-fraud": {
    core: true,
    title: { sr: "Kurirska prevara", en: "Courier fraud" },
    title_en: "Courier fraud",
    title_sr: "Kurirska prevara",
    summary_en: "A fake bank officer or police officer calls you about fraud on your account and sends a courier to collect your bank card and PIN for 'safe keeping'.",
    summary_sr: "Lažni bankovni ili policijski službenik zove zbog navodne prevare na vašem računu i šalje kurira da preuzme vašu bankovnu karticu i PIN radi 'čuvanja'.",
    subtitle: { sr: "Banka/policija → prevara na računu → kurir po karticu → PIN otkrivanje → neovlašćena potrošnja", en: "Bank/police → account fraud → courier for card → PIN disclosure → unauthorized spending" },
    hasPage: true,
    tags: ["banka", "kartica", "kurir"],
    overlaps: ["bank-impersonation", "safe-account-scam", "cash-to-gold-scam", "card-not-present-fraud", "vishing", "impersonation-scam"],
    sources: [{ name: "UK Finance — Courier Fraud" }, { name: "Action Fraud UK" }]
  },

  "cash-to-gold-scam": {
    core: true,
    title: { sr: "Prevara sa gotovinom i zlatom", en: "Cash-to-gold scam" },
    title_en: "Cash-to-gold scam",
    title_sr: "Prevara sa gotovinom i zlatom",
    summary_en: "A fake officer tells a victim to withdraw large amounts of cash or buy gold, which a courier then collects, claiming the money needs to be 'held as evidence' or 'protected'.",
    summary_sr: "Lažni službenik kaže žrtvi da podigne veliku sumu gotovine ili kupi zlato, koje zatim preuzima kurir, uz tvrdnju da novac treba 'čuvati kao dokaz' ili 'zaštititi'.",
    subtitle: { sr: "Banka/policija → pretnja po ušteđevinu → podizanje gotovine ili kupovina zlata → kurir preuzima → novac nestaje", en: "Bank/police → threat to savings → cash withdrawal or gold purchase → courier collects → money gone" },
    hasPage: true,
    tags: ["gotovina", "zlato", "kurir"],
    overlaps: ["safe-account-scam", "courier-fraud", "bank-impersonation", "vishing", "impersonation-scam"],
    sources: [{ name: "UK Finance — Cash/Gold Courier Fraud" }, { name: "Action Fraud UK" }]
  },

  "sim-swap": {
    core: true,
    title: { sr: "Zamena SIM kartice radi preuzimanja naloga", en: "SIM swap fraud" },
    title_en: "SIM swap fraud",
    title_sr: "Zamena SIM kartice radi preuzimanja naloga",
    summary_en: "Fraudsters convince your mobile network to transfer your phone number to a SIM they control, intercepting OTP codes and taking over your bank and email accounts.",
    summary_sr: "Prevaranti ubede vašeg mobilnog operatera da prebaci vaš broj telefona na SIM koji oni kontrolišu, presreću OTP kodove i preuzimaju vaše bankovne i imejl naloge.",
    subtitle: { sr: "Krađa podataka → lažni zahtev operateru → prenos broja → presretanje OTP → preuzimanje naloga", en: "Data theft → fake carrier request → number transfer → OTP interception → account takeover" },
    hasPage: true,
    tags: ["SIM", "mobilni", "OTP"],
    overlaps: ["port-out-scam", "otp-interception", "email-account-compromise", "account-takeover", "identity-theft", "phishing"],
    sources: [{ name: "FCC — SIM Swapping" }, { name: "FTC — SIM Card Swap Scams" }]
  },

  "port-out-scam": {
    core: true,
    title: { sr: "Port-out prevara (prenos broja)", en: "Port-out scam" },
    title_en: "Port-out scam",
    title_sr: "Port-out prevara (prenos broja)",
    summary_en: "Like SIM swap but the fraudster ports your phone number to a different carrier entirely, cutting you off and routing all your calls and texts to their device.",
    summary_sr: "Slično SIM swap-u, ali prevarant prenosi vaš broj telefona na drugog operatera, prekida vaš signal i preusmjerava sve pozive i poruke na njihov uređaj.",
    subtitle: { sr: "Krađa podataka → zahtev za prenosom broja → novi operater → gubitak signala → presretanje SMS/OTP", en: "Data theft → port request → new carrier → signal loss → SMS/OTP interception" },
    hasPage: true,
    tags: ["SIM", "prenos broja", "mobilni"],
    overlaps: ["sim-swap", "otp-interception", "email-account-compromise", "account-takeover", "identity-theft"],
    sources: [{ name: "FCC — Number Porting and Port Freezes" }, { name: "FTC — Port-Out Scams" }]
  },

  "otp-interception": {
    core: true,
    title: { sr: "Presretanje jednokratnog koda", en: "OTP interception" },
    title_en: "OTP interception",
    title_sr: "Presretanje jednokratnog koda",
    summary_en: "Fraudsters trick victims into revealing one-time passwords via fake bank calls, SS7 attacks, SIM swaps, or real-time phishing proxies, enabling immediate account access or payment authorization.",
    summary_sr: "Prevaranti nateraju žrtve da otkriju jednokratne lozinke putem lažnih bankovnih poziva, SS7 napada, SIM swap-a ili phishing proksija u realnom vremenu, što im omogućava pristup nalozima ili autorizaciju plaćanja.",
    subtitle: { sr: "Napadač prikuplja podatke → inicira transakciju → traži OTP → meta preda kod → transakcija prolazi", en: "Attacker gathers data → initiates transaction → requests OTP → target hands over code → transaction clears" },
    hasPage: true,
    tags: ["OTP", "banka", "SMS"],
    overlaps: ["bank-impersonation", "safe-account-scam", "sim-swap", "port-out-scam", "email-account-compromise", "phishing", "vishing", "account-takeover"],
    sources: [{ name: "ENISA — OTP Bypass Techniques" }, { name: "UK Finance — Fraud the Facts" }]
  },

  "email-account-compromise": {
    core: true,
    title: { sr: "Kompromitovanje imejl naloga", en: "Email account compromise" },
    title_en: "Email account compromise",
    title_sr: "Kompromitovanje imejl naloga",
    summary_en: "Attackers gain access to a victim's email account, monitor it for financial communications, and either use it to reset bank or other accounts or impersonate the victim to redirect payments.",
    summary_sr: "Napadači pristupe imejl nalogu žrtve, prate ga radi finansijskih komunikacija i koriste ga za resetovanje bankovnih ili drugih naloga ili lažno predstavljaju žrtvu radi preusmeravanja plaćanja.",
    subtitle: { sr: "Phishing/lozinka → pristup imejlu → izviđanje → resetovanje naloga ili preusmeravanje plaćanja → gubitak", en: "Phishing/password → email access → reconnaissance → account reset or payment redirect → loss" },
    hasPage: true,
    tags: ["imejl", "nalog", "phishing"],
    overlaps: ["bank-impersonation", "card-not-present-fraud", "sim-swap", "otp-interception", "account-takeover", "phishing", "business-email-compromise"],
    sources: [{ name: "FBI IC3 — Email Account Compromise" }, { name: "CISA — Protecting Against Email Compromise" }]
  },

  "card-not-present-fraud": {
    core: true,
    title: { sr: "Zloupotreba kartice bez fizičkog prisustva", en: "Card-not-present fraud" },
    title_en: "Card-not-present fraud",
    title_sr: "Zloupotreba kartice bez fizičkog prisustva",
    summary_en: "Criminals use stolen card details (number, expiry, CVV) to make online purchases or phone transactions where the physical card is never required, often after a data breach or phishing attack.",
    summary_sr: "Kriminalci koriste ukradene podatke kartice (broj, rok važnosti, CVV) za online kupovine ili telefonske transakcije gde fizička kartica nije potrebna, često posle proboja podataka ili phishing napada.",
    subtitle: { sr: "Krađa podataka kartice → online/telefonska kupovina → transakcija bez kartice → finansijski gubitak", en: "Card data theft → online/phone purchase → transaction without card → financial loss" },
    hasPage: true,
    tags: ["kartica", "online", "CNP"],
    overlaps: ["chargeback-fraud", "email-account-compromise", "phishing", "identity-theft", "courier-fraud", "account-takeover"],
    sources: [{ name: "UK Finance — Card Not Present Fraud" }, { name: "Europol — Payment Fraud" }]
  },

  "chargeback-fraud": {
    core: true,
    title: { sr: "Lažna zloupotreba povrata plaćanja", en: "Chargeback fraud (friendly fraud)" },
    title_en: "Chargeback fraud (friendly fraud)",
    title_sr: "Lažna zloupotreba povrata plaćanja",
    summary_en: "A buyer purchases goods or services legitimately, then falsely disputes the charge with their bank to get a refund while keeping the goods, exploiting the chargeback protection mechanism.",
    summary_sr: "Kupac legitimno kupi robu ili uslugu, zatim lažno ospori naplatu u svojoj banci da bi dobio povrat novca a zadržao robu, zloupotrebljavajući mehanizam zaštite chargeback-om.",
    subtitle: { sr: "Kupovina → primanje robe/usluge → lažna disputa kod banke → povrat novca → prodavac oštećen", en: "Purchase → receiving goods/service → false bank dispute → refund → merchant defrauded" },
    hasPage: true,
    tags: ["chargeback", "kartica", "prevara"],
    overlaps: ["card-not-present-fraud", "email-account-compromise", "identity-theft"],
    sources: [{ name: "Visa — Chargeback Management Guidelines" }, { name: "Mastercard — Dispute Resolution" }]
  },

  "overpayment-scam": {
    core: true,
    title: { sr: "Prevara s preplatom", en: "Overpayment scam" },
    title_en: "Overpayment scam",
    title_sr: "Prevara s preplatom",
    summary_en: "A buyer sends more money than agreed, then asks the seller to refund the surplus — but the original payment is fake or reversed, leaving the seller out of pocket for both goods and the refund.",
    summary_sr: "Kupac šalje više novca nego što je dogovoreno, zatim traži povrat razlike — ali originalna uplata je lažna ili se poništi, pa prodavac ostane bez robe i bez vraćenog novca.",
    subtitle: { sr: "Kupac → preplata → zahtev za povratom razlike → originalna uplata se poništi → prodavac gubi robu i novac", en: "Buyer → overpayment → surplus refund request → original payment reversed → seller loses goods and money" },
    hasPage: true,
    tags: ["preplata", "refund", "kartica"],
    overlaps: ["chargeback-fraud", "card-not-present-fraud", "payment-link-scam", "marketplace-scam"],
    sources: [{ name: "FTC — Overpayment Scams" }, { name: "UK Finance — Fraud the Facts" }]
  },

  "payment-link-scam": {
    core: true,
    title: { sr: "Prevara s linkom za plaćanje", en: "Payment link scam" },
    title_en: "Payment link scam",
    title_sr: "Prevara s linkom za plaćanje",
    summary_en: "The payment link itself is the trap: it arrives as an invoice, a checkout, a buyer-protection step, a delivery fee, or even a fake way for a seller to receive money. Unlike the fake buyer-protection pattern, the main threshold is not a whole escrow story but the direct card entry or authorization on a page that imitates checkout. Signal: the link asks for payment or card data outside the standard purchase flow you already know from the real service.",
    summary_sr: "Sam link za plaćanje je zamka: stiže kao faktura, checkout, korak zaštite kupca, doplata dostave ili čak kao lažni način da prodavac primi novac. Za razliku od prevare sa lažnom zaštitom kupca, glavni prag ovde nije cela priča o posredovanju, nego direktan unos kartice ili potvrda na imitaciji checkout stranice. Signal: link traži plaćanje ili karticu van standardnog toka kupovine koji već poznajete sa pravog servisa.",
    subtitle: { sr: "Link je proizvod prevare: jedna stranica glumi checkout i pretvara karticu ili potvrdu u štetu.", en: "The link is the product of the scam: one page mimics checkout and turns card entry or approval into loss." },
    hasPage: true,
    tags: ["link", "plaćanje", "phishing"],
    overlaps: ["qr-payment-scam", "instant-payment-scam", "bank-transfer-diversion-scam", "overpayment-scam", "phishing", "smishing"],
    sources: [{ name: "UK Finance — Payment Fraud" }, { name: "NCSC — Suspicious Link Guidance" }]
  },

  "qr-payment-scam": {
    core: true,
    title: { sr: "QR prevara pri plaćanju", en: "QR payment scam" },
    title_en: "QR payment scam",
    title_sr: "QR prevara pri plaćanju",
    summary_en: "QR payment scams focus on the payment destination itself: a code on a bill, counter, terminal, or printed notice sends money to the wrong payee or opens a false checkout that looks like a quick transfer. Unlike quishing, the main objective is immediate misdirection of payment rather than a broader login theft flow. Signal: the QR appears in a payment context, but the recipient, amount, or confirmation path does not match what you expected to pay.",
    summary_sr: "QR prevare pri plaćanju fokusiraju se na samog primaoca uplate: kod na računu, pultu, terminalu ili uplatnici šalje novac pogrešnom primaocu ili otvara lažni checkout koji izgleda kao brza naplata. Za razliku od quishing modela, ovde je glavni cilj neposredno preusmeravanje uplate, a ne širi tok krađe prijave. Signal: QR stoji u kontekstu plaćanja, ali primalac, iznos ili put potvrde ne odgovaraju onome što ste zapravo nameravali da platite.",
    subtitle: { sr: "Kod stoji tamo gde očekujete račun, ali novac završava drugom primaocu ili u lažnom checkout toku.", en: "The code appears where you expect a bill, but the money goes to a different payee or a fake checkout flow." },
    hasPage: true,
    tags: ["QR", "plaćanje", "terminal"],
    overlaps: ["payment-link-scam", "instant-payment-scam", "bank-transfer-diversion-scam", "phishing"],
    sources: [{ name: "FBI PSA — QR Code Fraud" }, { name: "FTC — QR Code Scams" }]
  },

  "instant-payment-scam": {
    core: true,
    title: { sr: "Prevara s instant plaćanjem", en: "Instant payment scam" },
    title_en: "Instant payment scam",
    title_sr: "Prevara s instant plaćanjem",
    summary_en: "Fraudsters exploit the irreversibility of instant payment systems to pressure victims into immediate transfers, often by posing as buyers, sellers, or support agents with a fabricated urgency.",
    summary_sr: "Prevaranti iskorišćavaju nepovratnost instant platnih sistema da bi pritiskali žrtve na hitne transfere, često se lažno predstavljajući kao kupci, prodavci ili agenti podrške uz izmišljenu urgentnost.",
    subtitle: { sr: "Lažni kupac/prodavac/podrška → urgentni zahtev → instant transfer → nepovratno → novac nestaje", en: "Fake buyer/seller/support → urgent request → instant transfer → irreversible → money gone" },
    hasPage: true,
    tags: ["instant", "plaćanje", "hitnost"],
    overlaps: ["payment-link-scam", "qr-payment-scam", "bank-transfer-diversion-scam", "safe-account-scam", "bank-impersonation"],
    sources: [{ name: "EBA — Instant Payments Fraud Indicators" }, { name: "UK Finance — APP Fraud" }]
  },

  "bank-transfer-diversion-scam": {
    core: true,
    title: { sr: "Preusmeravanje bankovnog transfera", en: "Bank transfer diversion scam" },
    title_en: "Bank transfer diversion scam",
    title_sr: "Preusmeravanje bankovnog transfera",
    summary_en: "Fraudsters intercept or impersonate legitimate payment instructions — via compromised email, fake vendor requests, or spoofed bank messages — causing victims to transfer funds to the wrong account.",
    summary_sr: "Prevaranti presreću ili lažno predstavljaju legitimne instrukcije za plaćanje — putem kompromitovanog imejla, lažnih zahteva dobavljača ili spoofovanih bankovnih poruka — uzrokujući da žrtve prebace novac na pogrešan nalog.",
    subtitle: { sr: "Legitimna instrukcija za plaćanje → intercept ili lažna zamena → promena bankovnog naloga → transfer → novac na nalog prevaranta", en: "Legitimate payment instruction → intercept or fake replacement → account number change → transfer → money to fraudster" },
    hasPage: true,
    tags: ["transfer", "preusmeravanje", "imejl"],
    overlaps: ["payment-link-scam", "instant-payment-scam", "email-account-compromise", "business-email-compromise", "impersonation-scam"],
    sources: [{ name: "UK Finance — APP Fraud" }, { name: "Europol — Payment Fraud" }]
  },

  "contactless-card-scam": {
    core: true,
    title: { sr: "Prevara beskontaktnom karticom", en: "Contactless card scam" },
    title_en: "Contactless card scam",
    title_sr: "Prevara beskontaktnom karticom",
    summary_en: "Criminals use portable NFC readers to skim contactless card data in public spaces or process unauthorized low-value payments by placing a reader near a victim's wallet or bag.",
    summary_sr: "Kriminalci koriste prenosne NFC čitače za prikupljanje beskontaktnih podataka kartice na javnim mestima ili procesiraju neovlašćene transakcije malog iznosa postavljanjem čitača pored novčanika ili torbe žrtve.",
    subtitle: { sr: "NFC čitač pored novčanika → prikupljanje podataka ili neovlašćena transakcija → gubitak bez kontakta sa karticom", en: "NFC reader near wallet → data collection or unauthorized transaction → loss without card contact" },
    hasPage: true,
    tags: ["NFC", "beskontaktno", "kartica"],
    overlaps: ["card-skimming", "atm-skimming", "pos-skimming", "card-not-present-fraud", "nfc-relay-scam", "tap-to-pay-relay-scam"],
    sources: [{ name: "UK Finance — Contactless Fraud" }, { name: "Europol — Payment Fraud" }]
  },

  "card-skimming": {
    core: true,
    title: { sr: "Skimovanje kartice (opšte)", en: "Card skimming" },
    title_en: "Card skimming",
    title_sr: "Skimovanje kartice (opšte)",
    summary_en: "Criminals attach or install devices that read magnetic stripe or chip data when a card is inserted or swiped, capturing data for later cloning or CNP fraud.",
    summary_sr: "Kriminalci postavljaju ili instaliraju uređaje koji čitaju podatke magnetne trake ili čipa kada se kartica ubaci ili prevuče, prikupljajući podatke za kasniji klon ili CNP prevaru.",
    subtitle: { sr: "Skimmer na uređaju → kartica prevučena ili ubačena → podaci prikupljeni → klon ili CNP kupovine → gubitak", en: "Skimmer on device → card swiped or inserted → data captured → clone or CNP purchases → loss" },
    hasPage: true,
    tags: ["skimmer", "kartica", "magnetna traka"],
    overlaps: ["atm-skimming", "pos-skimming", "contactless-card-scam", "card-not-present-fraud", "card-swap-at-pos", "card-trapping-scam"],
    sources: [{ name: "Europol — Skimming Fraud" }, { name: "EMVCo — Card Security" }]
  },

  "atm-skimming": {
    core: true,
    title: { sr: "Skimovanje na bankomatu", en: "ATM skimming" },
    title_en: "ATM skimming",
    title_sr: "Skimovanje na bankomatu",
    summary_en: "Criminals install skimming devices on ATM card slots and hidden cameras or PIN overlays to capture both card data and PIN, enabling them to create cloned cards and withdraw cash.",
    summary_sr: "Kriminalci instaliraju skimming uređaje na utor za karticu bankomata i skrivene kamere ili overlay za PIN, što im omogućava prikupljanje podataka kartice i PIN-a radi izrade klona i podizanja gotovine.",
    subtitle: { sr: "Skimmer na bankomatu → kartica ubačena + PIN pritisnut → podaci i PIN prikupljeni → klon kartice → podizanje gotovine", en: "Skimmer on ATM → card inserted + PIN entered → card data and PIN captured → cloned card → cash withdrawal" },
    hasPage: true,
    tags: ["bankomat", "skimmer", "PIN"],
    overlaps: ["card-skimming", "pos-skimming", "contactless-card-scam", "card-not-present-fraud", "cash-trapping-scam", "card-trapping-scam", "atm-shoulder-surfing", "friendly-helper-atm-scam", "atm-assistance-scam"],
    sources: [{ name: "Europol — ATM Skimming" }, { name: "EAST — European ATM Security Team" }]
  },

  "pos-skimming": {
    core: true,
    title: { sr: "Skimovanje na POS terminalu", en: "POS skimming" },
    title_en: "POS skimming",
    title_sr: "Skimovanje na POS terminalu",
    summary_en: "Criminals install skimming devices on point-of-sale terminals in shops, restaurants, or petrol stations, capturing card data during legitimate payments — often aided by a complicit employee.",
    summary_sr: "Kriminalci instaliraju skimming uređaje na POS terminale u prodavnicama, restoranima ili benzinskim pumpama, prikupljajući podatke kartice tokom legitimnih plaćanja — često uz pomoć saučesničkog zaposlenog.",
    subtitle: { sr: "Skimmer na POS terminalu → kartica prevučena → podaci prikupljeni → CNP kupovine ili klon kartice → gubitak", en: "Skimmer on POS terminal → card swiped → data captured → CNP purchases or cloned card → loss" },
    hasPage: true,
    tags: ["POS", "terminal", "skimmer"],
    overlaps: ["card-skimming", "atm-skimming", "contactless-card-scam", "card-not-present-fraud", "card-swap-at-pos"],
    sources: [{ name: "Europol — POS Fraud" }, { name: "UK Finance — Card Fraud" }]
  },

  "card-swap-at-pos": {
    core: true,
    title: { sr: "Zamena kartice na POS-u", en: "Card swap at POS" },
    title_en: "Card swap at POS",
    title_sr: "Zamena kartice na POS-u",
    summary_en: "At checkout someone distracts you or takes your card and returns a different one, runs the payment on the wrong account, or swaps the terminal outcome so you approve a higher amount than intended.",
    summary_sr: "Na kasi vas neko odvlači pažnju ili uzme karticu i vrati drugu, pokrene plaćanje na pogrešan nalog, ili zameni ishod na terminalu tako da odobrite veći iznos nego što ste nameravali.",
    subtitle: { sr: "Kontakt na kasi → kartica iz ruke ili odvlačenje pažnje → pogrešan terminal ili tuđa kartica → gubitak", en: "Contact at checkout → card out of hand or distraction → wrong terminal or switched card → loss" },
    hasPage: true,
    tags: ["POS", "kartica", "plaćanje"],
    overlaps: ["pos-skimming", "card-skimming", "distraction-theft-scam", "card-not-present-fraud"],
    sources: [{ name: "UK Finance — Card Fraud" }, { name: "Europol — Payment Fraud" }]
  },

  "atm-shoulder-surfing": {
    core: true,
    title: { sr: "Shoulder surfing na bankomatu", en: "ATM shoulder surfing" },
    title_en: "ATM shoulder surfing",
    title_sr: "Shoulder surfing na bankomatu",
    summary_en: "A person stands too close at an ATM or payment terminal and watches you enter your PIN or card details, then uses a stolen or swapped card with the captured PIN or passes data onward.",
    summary_sr: "Osoba stoji preblizu na bankomatu ili terminalu i gleda unos PIN-a ili podataka kartice, zatim koristi ukradenu ili zamenjenu karticu s uhvaćenim PIN-om ili prosleđuje podatke dalje.",
    subtitle: { sr: "Gužva ili red → preblizu pozicioniranje → gledanje PIN-a → zloupotreba kartice", en: "Crowd or queue → standing too close → PIN observation → card misuse" },
    hasPage: true,
    tags: ["bankomat", "PIN", "krađa"],
    overlaps: ["atm-skimming", "card-skimming", "distraction-theft-scam", "friendly-helper-atm-scam"],
    sources: [{ name: "EAST — European ATM Security Team" }, { name: "Europol — ATM Skimming" }]
  },

  "friendly-helper-atm-scam": {
    core: true,
    title: { sr: "Prijateljski pomoćnik kod bankomata", en: "Friendly helper ATM scam" },
    title_en: "Friendly helper ATM scam",
    title_sr: "Prijateljski pomoćnik kod bankomata",
    summary_en: "A stranger offers help at an ATM, takes your card, steers the transaction, or watches your PIN, then drains the account or hands the card to an accomplice.",
    summary_sr: "Nepoznata osoba nudi pomoć kod bankomata, uzima karticu, usmerava transakciju ili gleda PIN, zatim isprazni račun ili preda karticu saučesniku.",
    subtitle: { sr: "Pomoć uz bankomat → kartica ili meni pod tuđom kontrolom → podizanje ili transfer → gubitak", en: "\"Help\" at ATM → card or menu under someone else's control → withdrawal or transfer → loss" },
    hasPage: true,
    tags: ["bankomat", "pomoc", "prevara"],
    overlaps: ["atm-assistance-scam", "distraction-theft-scam", "atm-shoulder-surfing", "atm-skimming"],
    sources: [{ name: "EAST — European ATM Security Team" }, { name: "UK Finance — Card Fraud" }]
  },

  "cash-trapping-scam": {
    core: true,
    title: { sr: "Cash trapping (zamka za novac)", en: "Cash trapping scam" },
    title_en: "Cash trapping scam",
    title_sr: "Cash trapping (zamka za novac)",
    summary_en: "A device or glue in the cash slot makes banknotes stick inside the ATM; a helper or a follow-up trick steals the cash or tricks you into leaving while they retrieve it.",
    summary_sr: "Uređaj ili lepak u otvoru za novac zadržava novčanice u bankomatu; pomoćnik ili sledeći korak ukrade novac ili vas navede da odete dok on uzme kes.",
    subtitle: { sr: "Podizanje → novac ne izlazi → lažna pomoć ili čekanje → krađa gotovine", en: "Withdrawal → cash does not come out → fake help or waiting → cash theft" },
    hasPage: true,
    tags: ["bankomat", "gotovina", "zamka"],
    overlaps: ["card-trapping-scam", "atm-skimming", "friendly-helper-atm-scam", "atm-assistance-scam"],
    sources: [{ name: "EAST — European ATM Security Team" }, { name: "Europol — ATM Skimming" }]
  },

  "card-trapping-scam": {
    core: true,
    title: { sr: "Card trapping (zamka za karticu)", en: "Card trapping scam" },
    title_en: "Card trapping scam",
    title_sr: "Card trapping (zamka za karticu)",
    summary_en: "The ATM retains your card because of a trap device or manipulated reader; someone offers to help, harvests the card and PIN, or uses the delay to skim or swap.",
    summary_sr: "Bankomat zadržava karticu zbog zamke ili manipulisanog čitača; neko nudi pomoć, uzima karticu i PIN ili iskoristi odlaganje za skimming ili zamenu.",
    subtitle: { sr: "Kartica ostaje u uređaju → lažna pomoć → krađa kartice ili podataka", en: "Card stays in device → fake help → card or data theft" },
    hasPage: true,
    tags: ["bankomat", "kartica", "zamka"],
    overlaps: ["cash-trapping-scam", "atm-skimming", "friendly-helper-atm-scam", "card-skimming"],
    sources: [{ name: "EAST — European ATM Security Team" }, { name: "Europol — Skimming Fraud" }]
  },

  "atm-assistance-scam": {
    core: true,
    title: { sr: "Lažna pomoć kod bankomata", en: "ATM assistance scam" },
    title_en: "ATM assistance scam",
    title_sr: "Lažna pomoć kod bankomata",
    summary_en: "Fraud poses as bank staff or a Good Samaritan and walks you through menus to send money, change limits, or reveal codes while controlling pace and what you see on screen.",
    summary_sr: "Prevarant se predstavlja kao osoblje banke ili dobar čovek i vodi vas kroz menije da pošaljete novac, promenite limite ili otkrijete kodove dok kontroliše tempo i ono što vidite na ekranu.",
    subtitle: { sr: "Lažni savetnik uz bankomat → pogrešan meni ili iznos → transfer ili praznjenje računa", en: "Fake adviser at ATM → wrong menu or amount → transfer or account drain" },
    hasPage: true,
    tags: ["bankomat", "pomoc", "prevara"],
    overlaps: ["friendly-helper-atm-scam", "distraction-theft-scam", "atm-shoulder-surfing", "bank-impersonation"],
    sources: [{ name: "UK Finance — Card Fraud" }, { name: "EAST — European ATM Security Team" }]
  },

  "tap-to-pay-relay-scam": {
    core: true,
    title: { sr: "Tap-to-pay relay prevara", en: "Tap-to-pay relay scam" },
    title_en: "Tap-to-pay relay scam",
    title_sr: "Tap-to-pay relay prevara",
    summary_en: "Your phone or card is induced to complete a tap payment while the merchant terminal or reader is effectively remote, relaying the authorization so you pay at a location or amount you did not intend.",
    summary_sr: "Telefon ili kartica se navede na tap plaćanje dok je terminal ili čitač efektivno udaljen, prenosi autorizaciju tako da platite na mestu ili u iznosu koji niste nameravali.",
    subtitle: { sr: "Kontakt sa sumnjivim NFC uređajem → prenos sesije → transakcija van vaše kontrole", en: "Contact with suspicious NFC device → session relay → transaction beyond your control" },
    hasPage: true,
    tags: ["NFC", "tap", "plaćanje"],
    overlaps: ["nfc-relay-scam", "contactless-card-scam", "card-not-present-fraud"],
    sources: [{ name: "UK Finance — Contactless Fraud" }, { name: "Europol — Payment Fraud" }]
  },

  "nfc-relay-scam": {
    core: true,
    title: { sr: "NFC relay napad", en: "NFC relay scam" },
    title_en: "NFC relay scam",
    title_sr: "NFC relay napad",
    summary_en: "Two linked devices extend the NFC channel so a tap or read at your card or phone is completed at another reader, enabling misuse without you standing at the real checkout.",
    summary_sr: "Dva povezana uređaja produžavaju NFC kanal tako da se tap ili očitavanje na vašoj kartici ili telefonu završi na drugom čitaču, što omogućava zloupotrebu bez da stojite na pravoj kasi.",
    subtitle: { sr: "Povezani uređaji → produženi NFC → transakcija na drugoj lokaciji", en: "Linked devices → extended NFC → transaction at another location" },
    hasPage: true,
    tags: ["NFC", "relay", "kartica"],
    overlaps: ["tap-to-pay-relay-scam", "contactless-card-scam", "card-not-present-fraud"],
    sources: [{ name: "UK Finance — Contactless Fraud" }, { name: "EMVCo — Card Security" }]
  },

  "fake-crypto-exchange-scam": {
    core: true,
    title: { sr: "Lažna kripto menjačnica", en: "Fake crypto exchange scam" },
    title_en: "Fake crypto exchange scam",
    title_sr: "Lažna kripto menjačnica",
    summary_en: "Fraudsters operate fake cryptocurrency exchanges or swap platforms that accept deposits but block withdrawals, fabricate trading fees, or simply disappear with deposited funds.",
    summary_sr: "Prevaranti upravljaju lažnim kripto menjačnicama ili swap platformama koje primaju depozite ali blokiraju povlačenja, izmišljaju naknade za trgovanje ili jednostavno nestaju s deponovanim sredstvima.",
    subtitle: { sr: "Kontakt → lažna kripto menjačnica → depozit → blokada povlačenja → takse/verifikacija → sredstva nestaju", en: "Contact → fake crypto exchange → deposit → withdrawal block → fees/verification → funds disappear" },
    hasPage: true,
    tags: ["kripto", "menjačnica", "depozit"],
    overlaps: ["crypto-scam", "phishing", "identity-theft", "account-takeover", "pig-butchering"],
    sources: [{ name: "CFTC — Crypto Fraud Alerts" }, { name: "FCA — Crypto Scam Warning" }]
  },

  "grandparent-scam": {
    core: true,
    title: { sr: "Prevara s unukom (hitna pomoć)", en: "Grandparent scam" },
    title_en: "Grandparent scam",
    title_sr: "Prevara s unukom (hitna pomoć)",
    summary_en: "The grandparent scam still uses family panic and secrecy, but a cloned or more realistic voice can now make the first seconds of the call much harder to doubt. What does not change is the structure: a sudden family crisis, pressure not to tell anyone, and a demand for money before the grandparent can reach the real family member.",
    summary_sr: "Prevara s unukom i dalje koristi porodičnu paniku i tajnost, ali kloniran ili ubedljiviji glas danas može da učini prvih nekoliko sekundi razgovora mnogo težim za prepoznavanje. Ono što se ne menja jeste struktura: iznenadna porodična kriza, pritisak da se nikom ne kaže i zahtev za novcem pre nego što baka ili deda dođu do pravog člana porodice.",
    subtitle: { sr: "Poziv → lažni unuk u nevolji → hitni novac → tajnost → poklon kartice ili kurir", en: "Call → fake grandchild in trouble → urgent money → secrecy → gift cards or courier" },
    hasPage: true,
    tags: ["stariji", "unuk", "hitnost"],
    overlaps: ["family-emergency-scam", "gift-card-scam", "vishing", "impersonation-scam", "courier-fraud"],
    sources: [{ name: "FTC — Grandparent Scam" }, { name: "AARP — Impostor Scams" }]
  },

  "family-emergency-scam": {
    core: true,
    title: { sr: "Prevara s hitnom porodičnom situacijom", en: "Family emergency scam" },
    title_en: "Family emergency scam",
    title_sr: "Prevara s hitnom porodičnom situacijom",
    summary_en: "A family emergency scam still relies on panic, authority, and secrecy, but today the fraud can be amplified with a cloned family voice, a more convincing doctor or lawyer call, or follow-up messages that make the crisis feel real. The real target action remains simple: stop the victim from verifying and get money sent fast.",
    summary_sr: "Prevara s hitnom porodičnom situacijom i dalje se oslanja na paniku, autoritet i tajnost, ali danas je mogu pojačati kloniran glas člana porodice, ubedljiviji poziv navodnog doktora ili advokata ili prateće poruke koje krizu čine stvarnom. Stvarna ciljna radnja ostaje jednostavna: sprečiti žrtvu da proveri priču i naterati je da brzo pošalje novac.",
    subtitle: { sr: "Poziv → hitna porodična kriza → zahtev za tajnošću → uplata gotovine ili poklon kartice → gubitak", en: "Call → urgent family crisis → secrecy demand → cash or gift card payment → loss" },
    hasPage: true,
    tags: ["stariji", "porodica", "hitnost"],
    overlaps: ["grandparent-scam", "gift-card-scam", "vishing", "impersonation-scam", "bank-impersonation"],
    sources: [{ name: "FTC — Imposter Scams" }, { name: "AARP — Family Scams" }]
  },

  "lottery-scam": {
    core: true,
    title: { sr: "Prevara s lažnom lutrijom", en: "Lottery scam" },
    title_en: "Lottery scam",
    title_sr: "Prevara s lažnom lutrijom",
    summary_en: "Victims receive notice that they have won a lottery they never entered and must pay 'fees', 'taxes', or 'customs charges' to release the prize — which does not exist.",
    summary_sr: "Žrtve dobijaju obaveštenje da su dobile lutriju na kojoj nikad nisu učestvovale i moraju platiti 'takse', 'poreze' ili 'carinske troškove' za oslobađanje nagrade — koja ne postoji.",
    subtitle: { sr: "Obaveštenje o dobitku → lutrija na kojoj niste učestvovali → takse za oslobađanje → serija uplata → nagrada ne postoji", en: "Prize notification → lottery you never entered → release fees → payment series → prize does not exist" },
    hasPage: true,
    tags: ["lutrija", "nagrada", "takse"],
    overlaps: ["sweepstakes-scam", "prize-scam", "advance-fee-fraud", "smishing", "phishing"],
    sources: [{ name: "FTC — Prize and Lottery Scams" }, { name: "Europol — Fraud Notices" }]
  },

  "sweepstakes-scam": {
    core: true,
    title: { sr: "Prevara s nagradnom igrom", en: "Sweepstakes scam" },
    title_en: "Sweepstakes scam",
    title_sr: "Prevara s nagradnom igrom",
    summary_en: "Fraudsters notify victims of a sweepstakes win and demand upfront payments for 'processing', 'insurance', or 'delivery' before the prize can be claimed — the prize never arrives.",
    summary_sr: "Prevaranti obaveštavaju žrtve o dobitku u nagradnoj igri i traže unapredne uplate za 'obradu', 'osiguranje' ili 'dostavu' pre nego se nagrada preuzme — nagrada nikad ne stigne.",
    subtitle: { sr: "Dobitak u nagradnoj igri → naknade za obradu → serija uplata → nagrada ne stigne → gubitak", en: "Sweepstakes win → processing fees → payment series → prize never arrives → loss" },
    hasPage: true,
    tags: ["nagradna igra", "nagrada", "unapredna uplata"],
    overlaps: ["lottery-scam", "prize-scam", "advance-fee-fraud", "smishing", "phishing"],
    sources: [{ name: "FTC — Sweepstakes Scams" }, { name: "AARP — Sweepstakes Fraud" }]
  },

  "prize-scam": {
    core: true,
    title: { sr: "Prevara s lažnom nagradom", en: "Prize scam" },
    title_en: "Prize scam",
    title_sr: "Prevara s lažnom nagradom",
    summary_en: "Victims are told they have won a valuable prize — car, holiday, cash — but must pay upfront fees to claim it. Every payment unlocks a new reason why another payment is needed.",
    summary_sr: "Žrtvama se kaže da su dobile vrednu nagradu — auto, odmor, gotovinu — ali moraju platiti unapredne naknade za preuzimanje. Svaka uplata otvara novi razlog zašto je potrebna sledeća.",
    subtitle: { sr: "Dobitna obaveštenje → vredna nagrada → unapredna naknada → serija uplata → nagrada ne postoji → gubitak", en: "Win notification → valuable prize → upfront fee → payment series → prize does not exist → loss" },
    hasPage: true,
    tags: ["nagrada", "lažni dobitak", "unapredna uplata"],
    overlaps: ["lottery-scam", "sweepstakes-scam", "advance-fee-fraud", "gift-card-scam", "smishing"],
    sources: [{ name: "FTC — Prize Scams" }, { name: "ACCC — Scamwatch Prize Fraud" }]
  },

  "gift-card-scam": {
    core: true,
    title: { sr: "Prevara s poklon karticama", en: "Gift card scam" },
    title_en: "Gift card scam",
    title_sr: "Prevara s poklon karticama",
    summary_en: "Fraudsters — posing as government agencies, tech support, family members, or employers — demand payment exclusively via gift cards and request the card codes over the phone or by message.",
    summary_sr: "Prevaranti — lažno se predstavljajući kao vladine agencije, tehnička podrška, članovi porodice ili poslodavci — zahtevaju plaćanje isključivo poklon karticama i traže kodove kartica telefonom ili porukom.",
    subtitle: { sr: "Lažni autoritet → hitna uplata → isključivo poklon kartice → kodovi kartice telefonom → gubitak", en: "Fake authority → urgent payment → exclusively gift cards → card codes by phone → loss" },
    hasPage: true,
    tags: ["poklon kartice", "stariji", "hitnost"],
    overlaps: ["grandparent-scam", "family-emergency-scam", "prize-scam", "tech-support-scam", "impersonation-scam"],
    sources: [{ name: "FTC — Gift Card Scams" }, { name: "AARP — Gift Card Fraud" }]
  },

  "fake-medical-scam": {
    core: true,
    title: { sr: "Lažna medicinska usluga ili dijagnoza", en: "Fake medical scam" },
    title_en: "Fake medical scam",
    title_sr: "Lažna medicinska usluga ili dijagnoza",
    summary_en: "Fraudsters pose as doctors, clinics, or health organizations to sell fake diagnoses, unnecessary procedures, or fictitious treatments, extracting payments from elderly victims who fear illness.",
    summary_sr: "Prevaranti se lažno predstavljaju kao doktori, klinike ili zdravstvene organizacije da bi prodali lažne dijagnoze, nepotrebne procedure ili izmišljene tretmane, iznuđujući uplate od starijih žrtava koje se plaše bolesti.",
    subtitle: { sr: "Lažni doktor/klinika → lažna dijagnoza → hitni tretman → uplata → nema usluge ili je bezvredna", en: "Fake doctor/clinic → fake diagnosis → urgent treatment → payment → no service or worthless" },
    hasPage: true,
    tags: ["medicinska", "lažni doktor", "stariji"],
    overlaps: ["fake-medicine-scam", "charity-scam", "impersonation-scam", "advance-fee-fraud"],
    sources: [{ name: "FTC — Health Fraud Scams" }, { name: "FDA — Fraudulent Health Products" }]
  },

  "fake-medicine-scam": {
    core: true,
    title: { sr: "Lažni lekovi i zdravstveni preparati", en: "Fake medicine scam" },
    title_en: "Fake medicine scam",
    title_sr: "Lažni lekovi i zdravstveni preparati",
    summary_en: "Fraudsters sell counterfeit or ineffective medications, supplements, or miracle cures — often targeting seniors with chronic conditions — through unsolicited calls, mail, or fake online pharmacies.",
    summary_sr: "Prevaranti prodaju falsifikovane ili neefikasne lekove, suplemente ili čudotvorne lekove — često ciljajući starije s hroničnim stanjima — putem neželjenih poziva, pošte ili lažnih online apoteka.",
    subtitle: { sr: "Kontakt → čudotvorni lek ili suplement → uplata unapred → dostava bezvrednog ili nepostojećeg proizvoda", en: "Contact → miracle cure or supplement → upfront payment → delivery of worthless or nonexistent product" },
    hasPage: true,
    tags: ["lekovi", "suplementi", "stariji"],
    overlaps: ["fake-medical-scam", "charity-scam", "advance-fee-fraud", "smishing"],
    sources: [{ name: "FDA — Fake Online Pharmacies" }, { name: "FTC — Health Scams" }]
  },

  "tech-support-remote-access-scam": {
    core: true,
    title: { sr: "Lažna tehnička podrška s remote pristupom", en: "Tech support remote access scam" },
    title_en: "Tech support remote access scam",
    title_sr: "Lažna tehnička podrška s remote pristupom",
    summary_en: "Fraudsters — posing as Microsoft, Apple, or antivirus support — convince victims their computer has a virus and must grant remote access to 'fix it', then steal banking credentials or drain accounts.",
    summary_sr: "Prevaranti — lažno se predstavljajući kao Microsoft, Apple ili antivirusna podrška — ubeđuju žrtve da njihov računar ima virus i moraju dati remote pristup za 'popravku', zatim kradu bankovne podatke ili praznjavaju naloge.",
    subtitle: { sr: "Lažna podrška → virus/problem na računaru → remote pristup → krađa podataka ili praznjavalnje naloga → gubitak", en: "Fake support → virus/computer problem → remote access → credential theft or account drain → loss" },
    hasPage: true,
    tags: ["tehnička podrška", "remote pristup", "stariji"],
    overlaps: ["tech-support-scam", "scareware", "bank-impersonation", "account-takeover", "phishing"],
    sources: [{ name: "Microsoft — Tech Support Scam Guide" }, { name: "FTC — Tech Support Scams" }]
  },

  "subscription-trap": {
    core: true,
    title: { sr: "Zamka pretplate (subscription trap)", en: "Subscription trap" },
    title_en: "Subscription trap",
    title_sr: "Zamka pretplate (subscription trap)",
    summary_en: "Victims are enrolled in recurring paid subscriptions — often through fake free trials, pre-checked checkboxes, or deceptive sign-up flows — and face complex cancellation procedures designed to extract maximum payments.",
    summary_sr: "Žrtve su uključene u ponavljajuće plaćene pretplate — često kroz lažne besplatne probe, unapred označena polja ili obmanjujuće tokove registracije — i suočavaju se s kompleksnim procedurama otkaza dizajniranim za maksimalne uplate.",
    subtitle: { sr: "Besplatna proba → automatska pretplata → kompleksni otkaz → serija naplata → gubitak", en: "Free trial → automatic subscription → complex cancellation → payment series → loss" },
    hasPage: true,
    tags: ["pretplata", "free trial", "automatska naplata"],
    overlaps: ["advance-fee-fraud", "phishing", "fake-medical-scam", "subscription-cancellation-scam", "trial-to-subscription-rollover", "refund-scam"],
    sources: [{ name: "FTC — Negative Option Marketing" }, { name: "European Consumer Centre — Subscription Traps" }]
  },

  "free-trial-trap": {
    core: true,
    title: { sr: "Zamka besplatne probe", en: "Free trial trap" },
    title_en: "Free trial trap",
    title_sr: "Zamka besplatne probe",
    summary_en: "A service advertised as free or very cheap automatically converts to a paid subscription after a trial period, using obscured terms, pre-checked consent boxes, and complex cancellation to extract recurring payments.",
    summary_sr: "Usluga reklamirana kao besplatna ili veoma jeftina automatski prelazi u plaćenu pretplatu po isteku probe, koristeći skrivene uslove, unapred označena polja za saglasnost i komplikovani otkaz za izvlačenje ponavljajućih naplata.",
    subtitle: { sr: "Besplatna proba → skriveni uslov pretplate → automatska naplata → otkaz nemoguć → serija naplata → gubitak", en: "Free trial → hidden subscription condition → automatic billing → cancellation blocked → payment series → loss" },
    hasPage: true,
    tags: ["besplatna proba", "pretplata", "automatska naplata"],
    overlaps: ["subscription-trap", "advance-fee-fraud", "phishing"],
    sources: [{ name: "FTC — Free Trial Offers" }, { name: "European Consumer Centre — Subscription Traps" }]
  },

  "utility-impersonation": {
    core: true,
    title: { sr: "Lažni komunalni servis", en: "Utility impersonation scam" },
    title_en: "Utility impersonation scam",
    title_sr: "Lažni komunalni servis",
    summary_en: "Fraudsters pose as electricity, gas, water, or telecom suppliers and threaten immediate service disconnection unless an overdue bill is paid on the spot — by gift card, cash, or instant transfer.",
    summary_sr: "Prevaranti se lažno predstavljaju kao dobavljači struje, gasa, vode ili telekoma i prete hitnom obustavu usluge ukoliko se zaostalo dugovanje ne plati odmah — poklon karticom, gotovinom ili instant transferom.",
    subtitle: { sr: "Lažni komunalni servis → zaostalo dugovanje → hitna obustava → poklon kartice ili instant transfer → gubitak", en: "Fake utility supplier → overdue bill → immediate disconnection → gift cards or instant transfer → loss" },
    hasPage: true,
    tags: ["komunalije", "lažno predstavljanje", "hitnost"],
    overlaps: ["bank-impersonation", "impersonation-scam", "gift-card-scam", "vishing", "smishing"],
    sources: [{ name: "FTC — Utility Scams" }, { name: "AARP — Utility Impostor Fraud" }]
  },

  "charity-disaster-scam": {
    core: true,
    title: { sr: "Lažna humanitarna organizacija (katastrofa)", en: "Charity disaster scam" },
    title_en: "Charity disaster scam",
    title_sr: "Lažna humanitarna organizacija (katastrofa)",
    summary_en: "Fraudsters exploit natural disasters, wars, or public health crises to create fake charities or impersonate real ones, collecting donations that never reach victims.",
    summary_sr: "Prevaranti iskorišćavaju prirodne katastrofe, ratove ili krize javnog zdravlja da bi osnovali lažne humanitarne organizacije ili lažno se predstavljali kao prave, prikupljajući donacije koje nikad ne stignu do žrtava.",
    subtitle: { sr: "Katastrofa ili kriza → lažna humanitarna organizacija → hitna donacija → novac odlazi prevarantu → gubitak", en: "Disaster or crisis → fake charity → urgent donation → money goes to fraudster → loss" },
    hasPage: true,
    tags: ["humanitarna", "katastrofa", "donacija"],
    overlaps: ["charity-scam", "disaster-relief-scam", "crowdfunding-scam", "advance-fee-fraud", "phishing"],
    sources: [{ name: "FTC — Charity Scams" }, { name: "BBB Wise Giving Alliance" }]
  },

  "fake-eu-program-scam": {
    core: true,
    title: { sr: "Lažni EU program ili fond", en: "Fake EU program scam" },
    title_en: "Fake EU program scam",
    title_sr: "Lažni EU program ili fond",
    summary_en: "Fraudsters impersonate EU institutions or programs — Horizon, Cohesion Funds, Erasmus — contacting organizations or individuals with fake grant approvals that require upfront administrative fees to release.",
    summary_sr: "Prevaranti lažno se predstavljaju kao EU institucije ili programi — Horizon, Kohezijski fondovi, Erasmus — kontaktiraju organizacije ili fizička lica s lažnim odobrenjima grantova koja zahtevaju unapredne administrativne naknade za oslobađanje.",
    subtitle: { sr: "Lažni EU program → odobreni grant → administrativne naknade → serija uplata → grant ne postoji → gubitak", en: "Fake EU program → approved grant → administrative fees → payment series → grant does not exist → loss" },
    hasPage: true,
    tags: ["EU fond", "grant", "lažno predstavljanje"],
    overlaps: ["grant-intermediary-scam", "compliance-fee-scam", "fake-ngo-partnership-scam", "advance-fee-fraud", "impersonation-scam"],
    sources: [{ name: "European Anti-Fraud Office (OLAF)" }, { name: "EC — Report EU Fraud" }]
  },

  "fake-ngo-partnership-scam": {
    core: true,
    title: { sr: "Lažno partnerstvo s NGO", en: "Fake NGO partnership scam" },
    title_en: "Fake NGO partnership scam",
    title_sr: "Lažno partnerstvo s NGO",
    summary_en: "Fraudsters create fictitious NGOs or impersonate real ones to offer fake partnership agreements, grant co-financing, or project collaboration — requiring upfront registration, compliance, or processing fees.",
    summary_sr: "Prevaranti osnivaju fiktivne NGO organizacije ili lažno se predstavljaju kao prave radi nuđenja lažnih partnerstava, suko-finansiranja grantova ili projektne saradnje — zahtevajući unapredne naknade za registraciju, usaglašenost ili obradu.",
    subtitle: { sr: "Lažni NGO → partnerski sporazum ili grant → naknade za obradu ili usaglašenost → serija uplata → partnerstvo ne postoji → gubitak", en: "Fake NGO → partnership agreement or grant → processing or compliance fees → payment series → partnership does not exist → loss" },
    hasPage: true,
    tags: ["NGO", "partnerstvo", "grant"],
    overlaps: ["fake-eu-program-scam", "grant-intermediary-scam", "compliance-fee-scam", "advance-fee-fraud"],
    sources: [{ name: "FATF — NPO Abuse" }, { name: "Transparency International — NGO Fraud" }]
  },

  "crowdfunding-scam": {
    core: true,
    title: { sr: "Prevara s crowdfundingom", en: "Crowdfunding scam" },
    title_en: "Crowdfunding scam",
    title_sr: "Prevara s crowdfundingom",
    summary_en: "Fraudsters create fake crowdfunding campaigns — for medical treatment, disaster relief, business projects, or creative work — collecting donations for causes or projects that do not exist or will never be delivered.",
    summary_sr: "Prevaranti osnivaju lažne crowdfunding kampanje — za medicinski tretman, pomoć u katastrofama, poslovne projekte ili kreativne radove — prikupljajući donacije za uzroke ili projekte koji ne postoje ili neće biti isporučeni.",
    subtitle: { sr: "Lažna crowdfunding kampanja → emotivna priča → donacije → projekat ne postoji ili se ne isporuči → gubitak", en: "Fake crowdfunding campaign → emotional story → donations → project does not exist or is never delivered → loss" },
    hasPage: true,
    tags: ["crowdfunding", "donacija", "lažna kampanja"],
    overlaps: ["charity-disaster-scam", "disaster-relief-scam", "charity-scam", "advance-fee-fraud"],
    sources: [{ name: "FTC — Crowdfunding Fraud" }, { name: "GoFundMe — Fraud Policy" }]
  },

  "disaster-relief-scam": {
    core: true,
    title: { sr: "Prevara s pomoći u katastrofi", en: "Disaster relief scam" },
    title_en: "Disaster relief scam",
    title_sr: "Prevara s pomoći u katastrofi",
    summary_en: "Following a disaster, fraudsters set up fake relief funds, impersonate aid organizations, or offer fake government assistance — extracting payments or personal data from victims and donors.",
    summary_sr: "Nakon katastrofe, prevaranti osnivaju lažne fondove za pomoć, lažno se predstavljaju kao organizacije za pomoć ili nude lažnu državnu pomoć — iznuđujući uplate ili lične podatke od žrtava i donatora.",
    subtitle: { sr: "Katastrofa → lažni fond za pomoć ili državna pomoć → uplata ili podaci → novac nestaje → gubitak", en: "Disaster → fake relief fund or government aid → payment or data → money disappears → loss" },
    hasPage: true,
    tags: ["katastrofa", "pomoć", "lažni fond"],
    overlaps: ["charity-disaster-scam", "crowdfunding-scam", "charity-scam", "advance-fee-fraud", "impersonation-scam"],
    sources: [{ name: "FEMA — Disaster Fraud Warning" }, { name: "FTC — Disaster Relief Scams" }]
  },

  "donation-crypto-scam": {
    core: true,
    title: { sr: "Prevara s kripto donacijama", en: "Donation crypto scam" },
    title_en: "Donation crypto scam",
    title_sr: "Prevara s kripto donacijama",
    summary_en: "Fraudsters solicit cryptocurrency donations for fake causes — disaster relief, charity projects, or political campaigns — using anonymous wallets that cannot be traced or recovered.",
    summary_sr: "Prevaranti traže kripto donacije za lažne uzroke — pomoć u katastrofama, humanitarne projekte ili političke kampanje — koristeći anonimne novčanike koji se ne mogu pratiti ni povratiti.",
    subtitle: { sr: "Lažni uzrok ili kampanja → kripto donacija → anonimni novčanik → nepovratno → gubitak", en: "Fake cause or campaign → crypto donation → anonymous wallet → irreversible → loss" },
    hasPage: true,
    tags: ["kripto", "donacija", "anonimno"],
    overlaps: ["charity-disaster-scam", "crowdfunding-scam", "crypto-scam", "advance-fee-fraud"],
    sources: [{ name: "CFTC — Crypto Charity Fraud" }, { name: "FTC — Cryptocurrency Scams" }]
  },

  "grant-intermediary-scam": {
    core: true,
    title: { sr: "Lažni posrednik za grant", en: "Grant intermediary scam" },
    title_en: "Grant intermediary scam",
    title_sr: "Lažni posrednik za grant",
    summary_en: "Fraudsters pose as grant consultants or intermediaries who claim to have insider access to funding programs, charging upfront fees for application services or guarantee deposits that never secure any grant.",
    summary_sr: "Prevaranti se lažno predstavljaju kao grant konsultanti ili posrednici koji tvrde da imaju insajderski pristup programima finansiranja, naplaćujući unapredne naknade za usluge apliciranja ili garantne depozite koji nikad ne osiguraju grant.",
    subtitle: { sr: "Lažni grant posrednik → insajderski pristup fondu → unapredne naknade → aplikacija nikad ne uspe → gubitak", en: "Fake grant intermediary → insider fund access → upfront fees → application never succeeds → loss" },
    hasPage: true,
    tags: ["grant", "posrednik", "konsultant"],
    overlaps: ["fake-eu-program-scam", "fake-ngo-partnership-scam", "compliance-fee-scam", "advance-fee-fraud", "procurement-tender-scam"],
    sources: [{ name: "SBA — Grant Scam Warnings" }, { name: "EC — OLAF Fraud Alerts" }]
  },

  "compliance-fee-scam": {
    core: true,
    title: { sr: "Prevara s taksama za usaglašenost", en: "Compliance fee scam" },
    title_en: "Compliance fee scam",
    title_sr: "Prevara s taksama za usaglašenost",
    summary_en: "Fraudsters demand upfront fees for fake regulatory compliance, certification, or audit requirements — framed as mandatory steps before a grant, contract, or business deal can proceed.",
    summary_sr: "Prevaranti zahtevaju unapredne naknade za lažne regulatorne usaglašenosti, sertifikacije ili revizijske zahteve — prikazane kao obavezni koraci pre nego grant, ugovor ili poslovni dogovor može nastaviti.",
    subtitle: { sr: "Lažni regulatorni zahtev → obavezna naknada za usaglašenost → serija naknade → grant ili ugovor nikad ne nastavi → gubitak", en: "Fake regulatory requirement → mandatory compliance fee → fee series → grant or contract never proceeds → loss" },
    hasPage: true,
    tags: ["usaglašenost", "sertifikacija", "regulatorna naknada"],
    overlaps: ["fake-eu-program-scam", "grant-intermediary-scam", "fake-ngo-partnership-scam", "advance-fee-fraud", "payment-diversion"],
    sources: [{ name: "OLAF — Compliance Fraud" }, { name: "FTC — Business Opportunity Scams" }]
  },

  "vendor-registration-fee": {
    core: true,
    title: { sr: "Prevara naknadom za registraciju dobavljača", en: "Vendor registration fee scam" },
    title_en: "Vendor registration fee scam",
    title_sr: "Prevara naknadom za registraciju dobavljača",
    summary_en: "A fake buyer or portal demands payment to list a company as an approved vendor before procurement participation; fees multiply and registered vendor status does not exist with the real buyer.",
    summary_sr: "Lažni kupac ili portal traži uplatu da bi firma bila upisana kao odobren dobavljač pre učešća u nabavci; naknade se umnožavaju, a status registrovanog dobavljača ne postoji kod pravog naručioca.",
    subtitle: { sr: "Poziv → lažni kupac ili portal → naknada za registraciju dobavljača → dodatne verifikacije → status ne postoji → gubitak.", en: "Invitation → fake buyer or portal → vendor registration fee → extra verifications → status does not exist → loss." },
    hasPage: true,
    tags: ["nabavka","dobavljač","registracija"],
    overlaps: ["supplier-onboarding-scam","procurement-tender-scam","compliance-fee-scam","government-impersonation","advance-fee-fraud","invoice-collection-scam"],
    sources: [{ name: "OLAF — Procurement Fraud" }, { name: "FTC — Business Impersonation" }, { name: "ICC — Commercial Crime Services" }]
  },

  "sanctions-screening-fee": {
    core: true,
    title: { sr: "Prevara naknadom za proveru sankcionih lista", en: "Sanctions screening fee scam" },
    title_en: "Sanctions screening fee scam",
    title_sr: "Prevara naknadom za proveru sankcionih lista",
    summary_en: "The fraudster claims mandatory sanctions list screening or KYC for a deal or grant and demands payment to a third party; real processes do not route through random accounts from email.",
    summary_sr: "Prevarant tvrdi da je obavezna provera sankcionih lista ili KYC za posao ili grant i traži uplatu trećem licu; pravi postupci ne idu preko nasumičnog računa iz imejla.",
    subtitle: { sr: "Obaveštenje → lažni regulator ili kupac → naknada za screening → dodatni izveštaji → plaćanje bez dokumenta → gubitak.", en: "Notice → fake regulator or buyer → screening fee → extra reports → payment without document → loss." },
    hasPage: true,
    tags: ["sankcije","KYC","nabavka"],
    overlaps: ["procurement-tender-scam","compliance-fee-scam","government-impersonation","advance-fee-fraud","invoice-collection-scam"],
    sources: [{ name: "OLAF — Procurement Fraud" }, { name: "FTC — Business Impersonation" }, { name: "ICC — Commercial Crime Services" }]
  },

  "aml-clearance-certificate": {
    core: true,
    title: { sr: "Prevara lažnim AML sertifikatom ili clearance", en: "Fake AML clearance certificate scam" },
    title_en: "Fake AML clearance certificate scam",
    title_sr: "Prevara lažnim AML sertifikatom ili clearance",
    summary_en: "An AML clearance certificate or confirmation is offered that supposedly enables payout or contract signing; the document is worthless and the fee goes to the fraudster.",
    summary_sr: "Nudi se izdavanje AML clearance sertifikata ili potvrde koja navodno omogućava isplatu ili potpis ugovora; dokument je bezvredan, a naknada ide prevarantu.",
    subtitle: { sr: "Zahtev → lažni compliance organ → naknada za sertifikat → ispravka ili drugi nivo → nema priznanja kod banke → gubitak.", en: "Demand → fake compliance body → certificate fee → correction tier → no bank recognition → loss." },
    hasPage: true,
    tags: ["AML","sertifikat","usaglašenost"],
    overlaps: ["procurement-tender-scam","compliance-fee-scam","government-impersonation","advance-fee-fraud","invoice-collection-scam"],
    sources: [{ name: "OLAF — Procurement Fraud" }, { name: "FTC — Business Impersonation" }, { name: "ICC — Commercial Crime Services" }]
  },

  "customs-broker-fee": {
    core: true,
    title: { sr: "Prevara naknadom lažnog carinskog posrednika", en: "Fake customs broker fee scam" },
    title_en: "Fake customs broker fee scam",
    title_sr: "Prevara naknadom lažnog carinskog posrednika",
    summary_en: "A fake customs broker demands upfront fees to release a shipment or finish import; the shipment does not exist or customs is already handled legitimately.",
    summary_sr: "Lažni carinski broker traži unapredne naknade da oslobodi pošiljku ili završi uvoz; pošiljka ne postoji ili je carina već rešena kroz legitimne kanale.",
    subtitle: { sr: "Poruka o pošiljci → lažni broker → naknada za obradu → dodatne takse → nestanak kontakta → gubitak.", en: "Shipment message → fake broker → processing fee → extra charges → contact gone → loss." },
    hasPage: true,
    tags: ["carina","broker","uvoz"],
    overlaps: ["procurement-tender-scam","compliance-fee-scam","government-impersonation","advance-fee-fraud","invoice-collection-scam"],
    sources: [{ name: "OLAF — Procurement Fraud" }, { name: "FTC — Business Impersonation" }, { name: "ICC — Commercial Crime Services" }]
  },

  "import-license-scam": {
    core: true,
    title: { sr: "Prevara naknadom za lažnu uvoznu licencu", en: "Import license fee scam" },
    title_en: "Import license fee scam",
    title_sr: "Prevara naknadom za lažnu uvoznu licencu",
    summary_en: "Payment is demanded for an import license or special approval supposedly missing for goods; official procedure does not go through a private account from an unexpected contact.",
    summary_sr: "Traži se uplata za uvoznu licencu ili posebno odobrenje koje navodno fali za robu; zvanična procedura ne ide preko privatnog računa iz neočekovanog kontakta.",
    subtitle: { sr: "Obaveštenje o robi → lažni organ ili broker → naknada za licencu → eskalacija → roba ili licenca ne postoje → gubitak.", en: "Goods notice → fake authority or broker → license fee → escalation → goods or license missing → loss." },
    hasPage: true,
    tags: ["uvoz","licenca","carina"],
    overlaps: ["procurement-tender-scam","compliance-fee-scam","government-impersonation","advance-fee-fraud","invoice-collection-scam"],
    sources: [{ name: "OLAF — Procurement Fraud" }, { name: "FTC — Business Impersonation" }, { name: "ICC — Commercial Crime Services" }]
  },

  "export-compliance-scam": {
    core: true,
    title: { sr: "Prevara naknadom za lažnu izvoznu usaglašenost", en: "Export compliance fee scam" },
    title_en: "Export compliance fee scam",
    title_sr: "Prevara naknadom za lažnu izvoznu usaglašenost",
    summary_en: "A special export compliance, certificate, or registration is claimed with payment before shipment; legitimate export steps do not follow this billing pattern.",
    summary_sr: "Tvrdi se da je potrebna posebna izvozna usaglašenost, sertifikat ili registracija uz uplatu pre otpreme; legitimni izvozni koraci ne slede ovaj model naplate.",
    subtitle: { sr: "Upit ili ugovor → lažni konsultant → naknada za usaglašenost → dodatni dokumenti → isporuka ne počinje → gubitak.", en: "Inquiry or contract → fake consultant → compliance fee → extra documents → delivery never starts → loss." },
    hasPage: true,
    tags: ["izvoz","usaglašenost","dokumenti"],
    overlaps: ["procurement-tender-scam","compliance-fee-scam","government-impersonation","advance-fee-fraud","invoice-collection-scam"],
    sources: [{ name: "OLAF — Procurement Fraud" }, { name: "FTC — Business Impersonation" }, { name: "ICC — Commercial Crime Services" }]
  },

  "trademark-renewal-scam": {
    core: true,
    title: { sr: "Prevara lažnom obnovom žiga", en: "Trademark renewal scam" },
    title_en: "Trademark renewal scam",
    title_sr: "Prevara lažnom obnovom žiga",
    summary_en: "A notice claims a trademark expires and must be urgently renewed with an international registry; payment goes to a fraudster and rights are not renewed with the real office.",
    summary_sr: "Stiže obaveštenje da žig ističe i mora se hitno platiti obnova kod međunarodnog registra; plaćanje ide prevarantu, a prava žiga se ne produžavaju kod pravog zavoda.",
    subtitle: { sr: "Pismo ili imejl → lažni registar → naknada za obnovu → dodatne takse → žig nije obnovljen → gubitak.", en: "Letter or email → fake registry → renewal fee → extra charges → mark not renewed → loss." },
    hasPage: true,
    tags: ["žig","obnova","lažni račun"],
    overlaps: ["fake-permit-license-scam","procurement-tender-scam","compliance-fee-scam","government-impersonation","advance-fee-fraud","invoice-collection-scam"],
    sources: [{ name: "OLAF — Procurement Fraud" }, { name: "FTC — Business Impersonation" }, { name: "ICC — Commercial Crime Services" }]
  },

  "patent-registration-scam": {
    core: true,
    title: { sr: "Prevara naknadom za lažnu patentnu registraciju", en: "Patent registration fee scam" },
    title_en: "Patent registration fee scam",
    title_sr: "Prevara naknadom za lažnu patentnu registraciju",
    summary_en: "Fast or guaranteed patent protection is offered for an upfront fee; real filing goes through official applications and does not guarantee approval via a one-off third-party fee.",
    summary_sr: "Nudi se brza ili garantovana patentna zaštita uz unaprednu naknadu; pravi postupak ide kroz zvanične prijave i ne garantuje odobrenje uz jednokratnu taksu trećem licu.",
    subtitle: { sr: "Reklama ili hladni poziv → lažna agencija → naknada za prijavu → dodatni koraci → patent se ne vodi → gubitak.", en: "Ad or cold call → fake agency → filing fee → extra steps → no real filing → loss." },
    hasPage: true,
    tags: ["patent","prijava","lažna agencija"],
    overlaps: ["fake-permit-license-scam","procurement-tender-scam","compliance-fee-scam","government-impersonation","advance-fee-fraud","invoice-collection-scam"],
    sources: [{ name: "OLAF — Procurement Fraud" }, { name: "FTC — Business Impersonation" }, { name: "ICC — Commercial Crime Services" }]
  },

  "iso-certification-scam": {
    core: true,
    title: { sr: "Prevara lažnom ISO sertifikacijom", en: "Fake ISO certification scam" },
    title_en: "Fake ISO certification scam",
    title_sr: "Prevara lažnom ISO sertifikacijom",
    summary_en: "An ISO certificate is sold via a short online procedure and payment, without a real audit; the certificate is not accepted in tenders or by buyers.",
    summary_sr: "Prodaje se ISO sertifikat uz kratku online proceduru i uplatu, bez pravog audita; sertifikat nije priznat u tenderima ili kod kupaca.",
    subtitle: { sr: "Ponuda → lažno telo za sertifikaciju → naknada → PDF bez akreditacije → tender odbija dokument → gubitak.", en: "Offer → fake certification body → fee → non-accredited PDF → tender rejects document → loss." },
    hasPage: true,
    tags: ["ISO","sertifikat","tender"],
    overlaps: ["fake-permit-license-scam","procurement-tender-scam","compliance-fee-scam","government-impersonation","advance-fee-fraud","invoice-collection-scam"],
    sources: [{ name: "OLAF — Procurement Fraud" }, { name: "FTC — Business Impersonation" }, { name: "ICC — Commercial Crime Services" }]
  },

  "ce-marking-scam": {
    core: true,
    title: { sr: "Prevara naknadom za lažno CE označavanje", en: "Fake CE marking scam" },
    title_en: "Fake CE marking scam",
    title_sr: "Prevara naknadom za lažno CE označavanje",
    summary_en: "Payment is demanded for a CE certificate or stamp supposedly enabling EU export; CE is not bought as a stamp from a random consultant via email.",
    summary_sr: "Traži se uplata za CE sertifikat ili pečat koji navodno omogućava izvoz u EU; CE nije kupovina pečata kod nasumičnog konsultanta iz imejla.",
    subtitle: { sr: "Upit o izvozu → lažni notifikovani organ → naknada → lažni dokument → carina ili kupac odbija → gubitak.", en: "Export inquiry → fake notified body → fee → fake document → customs or buyer rejects → loss." },
    hasPage: true,
    tags: ["CE","izvoz","sertifikat"],
    overlaps: ["fake-permit-license-scam","procurement-tender-scam","compliance-fee-scam","government-impersonation","advance-fee-fraud","invoice-collection-scam"],
    sources: [{ name: "OLAF — Procurement Fraud" }, { name: "FTC — Business Impersonation" }, { name: "ICC — Commercial Crime Services" }]
  },

  "haccp-certification-scam": {
    core: true,
    title: { sr: "Prevara lažnom HACCP sertifikacijom", en: "Fake HACCP certification scam" },
    title_en: "Fake HACCP certification scam",
    title_sr: "Prevara lažnom HACCP sertifikacijom",
    summary_en: "An HACCP certificate is offered for quick payment without site inspection; the document fails buyer, chain, or inspection requirements.",
    summary_sr: "Nudi se HACCP sertifikat uz brzu uplatu bez inspekcije objekta; dokument ne zadovoljava zahteve kupaca, lanaca ili inspekcije.",
    subtitle: { sr: "Ponuda → lažni auditor → naknada → PDF bez posete → kupac traži pravi audit → gubitak.", en: "Offer → fake auditor → fee → PDF without visit → buyer demands real audit → loss." },
    hasPage: true,
    tags: ["HACCP","hrana","sertifikat"],
    overlaps: ["fake-permit-license-scam","procurement-tender-scam","compliance-fee-scam","government-impersonation","advance-fee-fraud","invoice-collection-scam"],
    sources: [{ name: "OLAF — Procurement Fraud" }, { name: "FTC — Business Impersonation" }, { name: "ICC — Commercial Crime Services" }]
  },

  "gdpr-compliance-scam": {
    core: true,
    title: { sr: "Prevara naknadom za lažnu GDPR usaglašenost", en: "Fake GDPR compliance fee scam" },
    title_en: "Fake GDPR compliance fee scam",
    title_sr: "Prevara naknadom za lažnu GDPR usaglašenost",
    summary_en: "A demand arrives for urgent payment for GDPR registration or a fine that can be settled by paying; GDPR is not resolved by paying a random firm from a threatening email.",
    summary_sr: "Stiže zahtev za hitnu uplatu radi GDPR registracije ili kazne koja se može pojesti plaćanjem; GDPR se ne rešava plaćanjem nasumičnoj firmi iz pretnjivog imejla.",
    subtitle: { sr: "Imejl sa pretnjom → lažni data protection servis → naknada → novi izveštaji → kontinuirani pritisak → gubitak.", en: "Threat email → fake data protection service → fee → new reports → ongoing pressure → loss." },
    hasPage: true,
    tags: ["GDPR","podaci","lažna taksa"],
    overlaps: ["procurement-tender-scam","compliance-fee-scam","government-impersonation","advance-fee-fraud","invoice-collection-scam"],
    sources: [{ name: "OLAF — Procurement Fraud" }, { name: "FTC — Business Impersonation" }, { name: "ICC — Commercial Crime Services" }]
  },

  "accessibility-compliance-scam": {
    core: true,
    title: { sr: "Prevara naknadom za lažnu pristupačnost (web)", en: "Accessibility compliance fee scam" },
    title_en: "Accessibility compliance fee scam",
    title_sr: "Prevara naknadom za lažnu pristupačnost (web)",
    summary_en: "A site must be urgently certified for accessibility with payment; real work follows standards and review, not a one-off bill from an unexpected invoice.",
    summary_sr: "Tvrdi se da sajt mora hitno biti sertifikovan za pristupačnost uz uplatu; pravi rad ide kroz standarde i reviziju, ne kroz jednokratnu taksu iz neočekovanog obračuna.",
    subtitle: { sr: "Obaveštenje → lažni WCAG servis → naknada → dodatni skener troškovi → sajt ne menja se → gubitak.", en: "Notice → fake WCAG service → fee → extra scanner costs → site unchanged → loss." },
    hasPage: true,
    tags: ["pristupačnost","WCAG","sajt"],
    overlaps: ["procurement-tender-scam","compliance-fee-scam","government-impersonation","advance-fee-fraud","invoice-collection-scam"],
    sources: [{ name: "OLAF — Procurement Fraud" }, { name: "FTC — Business Impersonation" }, { name: "ICC — Commercial Crime Services" }]
  },

  "fire-safety-inspection-scam": {
    core: true,
    title: { sr: "Prevara lažnom protivpožarnom inspekcijom", en: "Fake fire safety inspection scam" },
    title_en: "Fake fire safety inspection scam",
    title_sr: "Prevara lažnom protivpožarnom inspekcijom",
    summary_en: "A fake fire or safety inspector demands urgent payment for checks, signage, or protocol; real inspections do not ask for payment to a private account from email.",
    summary_sr: "Lažni vatrogasni ili bezbednosni inspektor traži hitnu uplatu za proveru, oznake ili protokol; pravi inspekcijski postupci ne traže uplatu na privatni račun iz imejla.",
    subtitle: { sr: "Poziv ili poseta → lažni inspektor → naknada za pregled → kazna ili ponovna provera → uplata → nestanak → gubitak.", en: "Call or visit → fake inspector → inspection fee → fine or re-check → payment → gone → loss." },
    hasPage: true,
    tags: ["vatrogasna","inspekcija","taksa"],
    overlaps: ["procurement-tender-scam","compliance-fee-scam","government-impersonation","advance-fee-fraud","invoice-collection-scam"],
    sources: [{ name: "OLAF — Procurement Fraud" }, { name: "FTC — Business Impersonation" }, { name: "ICC — Commercial Crime Services" }]
  },

  "workplace-safety-audit-scam": {
    core: true,
    title: { sr: "Prevara naknadom za lažni bezbednosni audit na radu", en: "Workplace safety audit scam" },
    title_en: "Workplace safety audit scam",
    title_sr: "Prevara naknadom za lažni bezbednosni audit na radu",
    summary_en: "A mandatory safety audit is offered with payment before inspection; a real labour inspectorate does not bill this way or send invoices via unverified email.",
    summary_sr: "Nudi se obavezni bezbednosni audit uz uplatu pre nastanka inspekcije; pravi radni inspektorat ne naplaćuje ovako i ne šalje račun preko nepotvrđenog mejla.",
    subtitle: { sr: "Obaveštenje → lažni konsultant → naknada za audit → dodatna obuka → inspekcija ne potvrđuje zahtev → gubitak.", en: "Notice → fake consultant → audit fee → extra training → inspection denies request → loss." },
    hasPage: true,
    tags: ["bezbednost","audit","rad"],
    overlaps: ["procurement-tender-scam","compliance-fee-scam","government-impersonation","advance-fee-fraud","invoice-collection-scam"],
    sources: [{ name: "OLAF — Procurement Fraud" }, { name: "FTC — Business Impersonation" }, { name: "ICC — Commercial Crime Services" }]
  },

  "eu-tender-access-fee": {
    core: true,
    title: { sr: "Prevara naknadom za pristup EU tenderu", en: "EU tender access fee scam" },
    title_en: "EU tender access fee scam",
    title_sr: "Prevara naknadom za pristup EU tenderu",
    summary_en: "Payment is demanded to unlock access to an EU tender portal or documents; real tenders are public on official sites without such a third-party fee.",
    summary_sr: "Traži se uplata da bi se otključao pristup EU tender portalu ili dokumentaciji; pravi tenderi su javni na zvaničnim sajtovima bez takve takse trećem licu.",
    subtitle: { sr: "Poziv → lažni EU ili agencija → naknada za pristup → dodatni moduli → tender ne postoji → gubitak.", en: "Invitation → fake EU or agency → access fee → extra modules → tender missing → loss." },
    hasPage: true,
    tags: ["EU","tender","portal"],
    overlaps: ["fake-eu-program-scam","procurement-tender-scam","compliance-fee-scam","government-impersonation","advance-fee-fraud","invoice-collection-scam"],
    sources: [{ name: "OLAF — Procurement Fraud" }, { name: "FTC — Business Impersonation" }, { name: "ICC — Commercial Crime Services" }]
  },

  "procurement-portal-clone": {
    core: true,
    title: { sr: "Prevara kloniranim portalom javnih nabavki", en: "Procurement portal clone scam" },
    title_en: "Procurement portal clone scam",
    title_sr: "Prevara kloniranim portalom javnih nabavki",
    summary_en: "A site copies the look of an official public procurement portal; a firm registers and pays, but data and money go to a fraudster and the bid does not enter the real system.",
    summary_sr: "Pravi se sajt koji kopira izgled zvaničnog portala javnih nabavki; firma se registruje i plaća, ali podaci i novac idu prevarantu, a prijava ne ulazi u pravi sistem.",
    subtitle: { sr: "Link iz imejla → klon portal → registracija → naknada → lažna potvrda → pravi portal nema prijavu → gubitak.", en: "Email link → clone portal → registration → fee → fake confirmation → real portal has no bid → loss." },
    hasPage: true,
    tags: ["portal","klon","nabavka"],
    overlaps: ["public-procurement-document-fee-scam","phishing","procurement-tender-scam","compliance-fee-scam","government-impersonation","advance-fee-fraud","invoice-collection-scam"],
    sources: [{ name: "OLAF — Procurement Fraud" }, { name: "FTC — Business Impersonation" }, { name: "ICC — Commercial Crime Services" }]
  },

  "bid-clarification-fee": {
    core: true,
    title: { sr: "Prevara naknadom za razjašnjenje ponude", en: "Bid clarification fee scam" },
    title_en: "Bid clarification fee scam",
    title_sr: "Prevara naknadom za razjašnjenje ponude",
    summary_en: "After a bid, a demand arrives to pay for clarification or extra documents; real processes publish clarifications publicly or free under the rules.",
    summary_sr: "Nakon prijave na tender stiže zahtev za uplatom da bi se dobilo razjašnjenje ili dodatni dokument; pravi postupci objavljuju razjašnjenja javno ili besplatno u okviru pravila.",
    subtitle: { sr: "Prijava → lažni sekretarijat → naknada za Q&A → sledeći paket dokumenata → ponuda se ne priznaje → gubitak.", en: "Submission → fake secretariat → Q&A fee → next document pack → bid not recognized → loss." },
    hasPage: true,
    tags: ["tender","razjašnjenje","naknada"],
    overlaps: ["procurement-tender-scam","compliance-fee-scam","government-impersonation","advance-fee-fraud","invoice-collection-scam"],
    sources: [{ name: "OLAF — Procurement Fraud" }, { name: "FTC — Business Impersonation" }, { name: "ICC — Commercial Crime Services" }]
  },

  "contract-signature-release-fee": {
    core: true,
    title: { sr: "Prevara naknadom za oslobađanje potpisanog ugovora", en: "Contract signature release fee scam" },
    title_en: "Contract signature release fee scam",
    title_sr: "Prevara naknadom za oslobađanje potpisanog ugovora",
    summary_en: "The signed contract is claimed to be held in archive and a fee is needed to send or register it; a real contract is not held hostage for payment to a third party.",
    summary_sr: "Tvrdi se da je potpisani ugovor u arhivi i da se mora platiti naknada da bi se poslao ili registrovao; pravi ugovor ne drži se kao taoca za uplatu trećem licu.",
    subtitle: { sr: "Dobijena pobeda → lažni pravni odsek → naknada za release → pečat ili registracija → novac odlazi → ugovor ne stiže → gubitak.", en: "Win claimed → fake legal dept → release fee → stamp or registration → money sent → no contract → loss." },
    hasPage: true,
    tags: ["ugovor","potpis","naknada"],
    overlaps: ["procurement-tender-scam","compliance-fee-scam","government-impersonation","advance-fee-fraud","invoice-collection-scam"],
    sources: [{ name: "OLAF — Procurement Fraud" }, { name: "FTC — Business Impersonation" }, { name: "ICC — Commercial Crime Services" }]
  },

  "project-amendment-fee": {
    core: true,
    title: { sr: "Prevara naknadom za lažnu izmenu projekta ili ugovora", en: "Project amendment fee scam" },
    title_en: "Project amendment fee scam",
    title_sr: "Prevara naknadom za lažnu izmenu projekta ili ugovora",
    summary_en: "A demand arrives to pay for processing an annex amendment or scope change; real changes go through a written agreement between parties, not an urgent fee to a fake coordinator.",
    summary_sr: "Stiže zahtev za uplatom da bi se obradila izmena aneksa ili promena obima posla; prave izmene idu kroz pisani sporazum strana, ne kroz hitnu taksu lažnom koordinatoru.",
    subtitle: { sr: "Projekat u toku → lažni PMO → naknada za aneks → verifikacija → još jedna stavka → posao staje → gubitak.", en: "Project running → fake PMO → annex fee → verification → another line item → work stalls → loss." },
    hasPage: true,
    tags: ["projekat","aneks","naknada"],
    overlaps: ["procurement-tender-scam","compliance-fee-scam","government-impersonation","advance-fee-fraud","invoice-collection-scam"],
    sources: [{ name: "OLAF — Procurement Fraud" }, { name: "FTC — Business Impersonation" }, { name: "ICC — Commercial Crime Services" }]
  },

  "deliverable-acceptance-fee": {
    core: true,
    title: { sr: "Prevara naknadom za prihvatanje isporuke", en: "Deliverable acceptance fee scam" },
    title_en: "Deliverable acceptance fee scam",
    title_sr: "Prevara naknadom za prihvatanje isporuke",
    summary_en: "Payment is demanded so a commission will accept a deliverable or invoice; acceptance is not billed as a fee to a third party outside the contract chain.",
    summary_sr: "Traži se uplata da bi komisija prihvatila isporuku ili fakturu; prihvatanje posla ne naplaćuje se kao taksa trećem licu izvan lanca ugovora.",
    subtitle: { sr: "Isporuka gotova → lažna komisija → naknada za acceptance → finalni sertifikat → uplata → isplata ne dolazi → gubitak.", en: "Deliverable done → fake commission → acceptance fee → final certificate → payment → no payout → loss." },
    hasPage: true,
    tags: ["isporuka","prijem","naknada"],
    overlaps: ["procurement-tender-scam","compliance-fee-scam","government-impersonation","advance-fee-fraud","invoice-collection-scam"],
    sources: [{ name: "OLAF — Procurement Fraud" }, { name: "FTC — Business Impersonation" }, { name: "ICC — Commercial Crime Services" }]
  },

  "ngo-consortium-joining-fee": {
    core: true,
    title: { sr: "Prevara naknadom za ulazak u lažni NGO konzorcijum", en: "Fake NGO consortium joining fee scam" },
    title_en: "Fake NGO consortium joining fee scam",
    title_sr: "Prevara naknadom za ulazak u lažni NGO konzorcijum",
    summary_en: "An organization is invited to join a consortium for a project or grant with a membership or registration fee; the consortium and funding do not exist and money goes to a fraudster.",
    summary_sr: "Poziva se organizacija da uđe u konzorcijum za projekat ili grant uz članarinu ili registraciju; konzorcijum i finansiranje ne postoje, a novac ide prevarantu.",
    subtitle: { sr: "Poziv → lažni vodeći partner → naknada za ulazak → KYC ili compliance → grant se ne otvara → gubitak.", en: "Invitation → fake lead partner → joining fee → KYC or compliance → grant never opens → loss." },
    hasPage: true,
    tags: ["NGO","konzorcijum","grant"],
    overlaps: ["fake-ngo-partnership-scam","grant-fund-scam","procurement-tender-scam","compliance-fee-scam","government-impersonation","advance-fee-fraud"],
    sources: [{ name: "OLAF — Procurement Fraud" }, { name: "FTC — Business Impersonation" }, { name: "ICC — Commercial Crime Services" }]
  },

  "procurement-award-scam": {
    core: true,
    title: { sr: "Prevara s dodeljivanjem ugovora", en: "Procurement award scam" },
    title_en: "Procurement award scam",
    title_sr: "Prevara s dodeljivanjem ugovora",
    summary_en: "Fraudsters impersonate procurement officers or tender committees and inform companies they have won a public contract, then demand upfront fees for signing, bonding, or compliance before the contract can be executed.",
    summary_sr: "Prevaranti se lažno predstavljaju kao službenici javnih nabavki ili tenderske komisije i obaveštavaju kompanije da su dobile javni ugovor, zatim traže unapredne naknade za potpis, garanciju ili usaglašenost pre izvršenja ugovora.",
    subtitle: { sr: "Lažna pobeda na tenderu → unapredne naknade za potpis ili garanciju → serija naknada → ugovor ne postoji → gubitak", en: "Fake tender win → upfront fees for signing or bond → fee series → contract does not exist → loss" },
    hasPage: true,
    tags: ["tender", "javna nabavka", "lažni ugovor"],
    overlaps: ["procurement-tender-scam", "fake-audit-inspection-scam", "invoice-collection-scam", "grant-fund-scam", "advance-fee-fraud"],
    sources: [{ name: "OLAF — Procurement Fraud" }, { name: "CIPS — Contract Award Scams" }]
  },

  "fake-audit-inspection-scam": {
    core: true,
    title: { sr: "Lažna revizija ili inspekcija", en: "Fake audit inspection scam" },
    title_en: "Fake audit inspection scam",
    title_sr: "Lažna revizija ili inspekcija",
    summary_en: "Fraudsters pose as auditors, tax inspectors, or regulatory bodies and demand immediate payment of fines, compliance fees, or audit deposits — threatening company shutdown or criminal prosecution if not paid on the spot.",
    summary_sr: "Prevaranti se lažno predstavljaju kao revizori, poreski inspektori ili regulatorna tela i traže hitnu uplatu kazni, naknada za usaglašenost ili revizijskih depozita — preteći gašenjem firme ili krivičnim gonjenjem ukoliko se odmah ne plati.",
    subtitle: { sr: "Lažni inspektor → kazna ili revizijski depozit → hitna uplata → pretnja krivičnim gonjenjem → gubitak", en: "Fake inspector → fine or audit deposit → urgent payment → criminal prosecution threat → loss" },
    hasPage: true,
    tags: ["inspekcija", "revizija", "lažni inspektor"],
    overlaps: ["procurement-award-scam", "invoice-collection-scam", "compliance-fee-scam", "impersonation-scam", "advance-fee-fraud"],
    sources: [{ name: "HMRC — Fake Inspector Fraud" }, { name: "FTC — Government Impersonation" }]
  },

  "invoice-collection-scam": {
    core: true,
    title: { sr: "Prevara s naplatom lažnih faktura", en: "Invoice collection scam" },
    title_en: "Invoice collection scam",
    title_sr: "Prevara s naplatom lažnih faktura",
    summary_en: "Fraudsters send fake invoices for services never ordered — directory listings, domain renewals, advertising, or regulatory registrations — relying on accounts payable staff paying without verification.",
    summary_sr: "Prevaranti šalju lažne fakture za usluge koje nikad nisu naručene — unose u poslovne imenike, obnova domena, oglašavanje ili regulatorne registracije — računajući na to da finansijsko osoblje plaća bez provere.",
    subtitle: { sr: "Lažna faktura za nenaručenu uslugu → automatska uplata → usluga ne postoji → ponovljena faktura → gubitak", en: "Fake invoice for unordered service → automatic payment → service does not exist → repeated invoice → loss" },
    hasPage: true,
    tags: ["faktura", "lažna naplata", "poslovne usluge"],
    overlaps: ["procurement-award-scam", "fake-audit-inspection-scam", "procurement-tender-scam", "advance-fee-fraud"],
    sources: [{ name: "FTC — Fake Invoice Scams" }, { name: "ICC — Commercial Crime Services" }]
  },

  "fake-webshop": {
    core: true,
    title: { sr: "Lažna internet prodavnica", en: "Fake webshop" },
    title_en: "Fake webshop",
    title_sr: "Lažna internet prodavnica",
    summary_en: "A fake webshop builds the illusion of a full store: catalogue, cart, checkout, discounts, and shipping text all look complete enough to justify a direct order. Unlike marketplace scams, the buyer is not negotiating with another user but trusting a whole storefront that exists mainly to capture payment before delivery fails, counterfeit goods arrive, or support disappears. Signal: the shop has checkout and urgency but weak business identity, thin support, and no reliable post-sale path.",
    summary_sr: "Lažna internet prodavnica gradi utisak celog trgovinskog sistema: katalog, korpa, checkout, popusti i tekst o dostavi deluju dovoljno zaokruženo da opravdaju direktnu porudžbinu. Za razliku od marketplace prevare, kupac ne pregovara sa drugim korisnikom, već veruje celoj prodavnici koja postoji uglavnom zato da uzme uplatu pre nego što isporuka propadne, stigne krivotvorina ili podrška nestane. Signal: prodavnica ima checkout i hitnost, ali slab identitet prodavca, tanak kontakt i nepouzdan put posle kupovine.",
    subtitle: { sr: "Nije čet sa prodavcem nego cela lažna prodavnica: katalog, checkout, uplata, pa prekid isporuke ili podrške.", en: "Not a chat with a seller but a whole fake shop: catalogue, checkout, payment, then delivery or support collapses." },
    hasPage: true,
    tags: ["lažna prodavnica", "online kupovina", "krivotvorina"],
    overlaps: ["social-media-shop-scam", "counterfeit-goods-scam", "marketplace-scam", "phishing", "advance-fee-fraud"],
    sources: [{ name: "EUROPOL — Online Shopping Fraud" }, { name: "BBB — Fake Online Store" }]
  },

  "social-media-shop-scam": {
    core: true,
    title: { sr: "Prevara s prodavnicom na društvenim mrežama", en: "Social media shop scam" },
    title_en: "Social media shop scam",
    title_sr: "Prevara s prodavnicom na društvenim mrežama",
    summary_en: "A social-media shop scam begins in the feed, story, reel, or DM and then pushes the buyer into direct messaging, manual payment, and improvised customer support. Unlike a fake webshop, the sale depends on profile credibility, comments, screenshots, and chat pressure rather than a full storefront. Signal: the order is finalized in messages, the payment goes by transfer or crypto, and the seller keeps delaying checkout inside a real commerce system.",
    summary_sr: "Prevara sa prodavnicom na društvenim mrežama počinje u feed-u, story-ju, reel-u ili DM-u, a zatim gura kupca u privatne poruke, ručnu uplatu i improvizovanu korisničku podršku. Za razliku od lažne internet prodavnice, prodaja ovde zavisi od kredibiliteta profila, komentara, screenshotova i pritiska u četu, a ne od celog storefront sistema. Signal: porudžbina se završava u porukama, uplata ide transferom ili kriptom, a prodavac stalno odlaže pravi checkout u stvarnom prodajnom sistemu.",
    subtitle: { sr: "Profil, DM i ručna uplata umesto prodavnice: poverenje gradi nalog, ne checkout sistem.", en: "Profile, DM, and manual payment instead of a store: trust is built by the account, not by a checkout system." },
    hasPage: true,
    tags: ["društvene mreže", "Instagram", "lažna prodavnica"],
    overlaps: ["fake-webshop", "counterfeit-goods-scam", "marketplace-scam", "phishing"],
    sources: [{ name: "FTC — Social Media Shopping Fraud" }, { name: "Which? — Instagram Scams" }]
  },

  "counterfeit-goods-scam": {
    core: true,
    title: { sr: "Prevara s krivotvorenom robom", en: "Counterfeit goods scam" },
    title_en: "Counterfeit goods scam",
    title_sr: "Prevara s krivotvorenom robom",
    summary_en: "Sellers advertise genuine branded goods at heavily discounted prices but deliver obvious fakes, poor-quality imitations, or completely different items.",
    summary_sr: "Prodavci oglašavaju originalnu brendiranu robu po znatno sniženim cenama, ali isporučuju očigledne krivotvorine, imitacije lošeg kvaliteta ili potpuno drugu robu.",
    subtitle: { sr: "Oglas s originalnom markom → uplata → isporuka krivotvorine ili pogrešne robe → povrat odbijen → gubitak", en: "Authentic brand ad → payment → counterfeit or wrong item delivered → refund denied → loss" },
    hasPage: true,
    tags: ["krivotvorina", "lažni brend", "imitacija"],
    overlaps: ["fake-webshop", "social-media-shop-scam", "marketplace-scam"],
    sources: [{ name: "OECD — Trade in Counterfeit Goods" }, { name: "EUIPO — Counterfeiting Report" }]
  },

  "refund-scam": {
    core: true,
    title: { sr: "Prevara s povratom novca", en: "Refund scam" },
    title_en: "Refund scam",
    title_sr: "Prevara s povratom novca",
    summary_en: "Refund scams invent a billing problem in the present tense: an overcharge, duplicate payment, cancelled service, or mistaken refund that supposedly must be corrected right now. Unlike recovery scams, the target does not arrive as someone already trying to reclaim an old loss; the attacker creates a fresh refund scenario and then uses remote access, fake overpayment, or return-transfer pressure to extract money. Signal: the supposed refund still requires you to send money out, grant access, or \"confirm\" figures on your screen.",
    summary_sr: "Refund prevare izmišljaju problem sa naplatom u sadašnjem vremenu: preplatu, duplu naplatu, otkazanu uslugu ili pogrešan povraćaj koji navodno mora odmah da se ispravi. Za razliku od recovery prevare, meta ovde ne dolazi kao neko ko već pokušava da vrati stari gubitak; napadač prvo stvara novu refund situaciju, a zatim kroz daljinski pristup, lažnu preplatu ili pritisak za vraćanje razlike izvlači novac. Signal: navodni povraćaj i dalje traži da vi pošaljete novac, date pristup ili potvrdite iznose na svom ekranu.",
    subtitle: { sr: "Lažni povraćaj nije spas nego nova naplata: podrška otvara refund, a zatim vas vodi ka slanju novca ili pristupa.", en: "A fake refund is not relief but a new extraction: support opens a refund and then walks you into sending money or access." },
    hasPage: true,
    tags: ["povrat", "refund", "lažna podrška"],
    overlaps: ["fake-returns-scam", "chargeback-fraud", "tech-support-remote-access-scam", "impersonation-scam"],
    sources: [{ name: "FTC — Refund Scams" }, { name: "Action Fraud — Refund Fraud" }]
  },

  "fake-returns-scam": {
    core: true,
    title: { sr: "Prevara s lažnim povratom robe", en: "Fake returns scam" },
    title_en: "Fake returns scam",
    title_sr: "Prevara s lažnim povratom robe",
    summary_en: "Fraudsters exploit merchant return policies by claiming items were not received, filing false 'item not as described' claims, or returning empty boxes or different items to extract refunds.",
    summary_sr: "Prevaranti iskorišćavaju politike povrata prodavaca tvrdnjom da artikli nisu primljeni, podnošenjem lažnih reklamacija 'artikal nije kao opisano' ili vraćanjem praznih kutija ili druge robe radi izvlačenja povrata.",
    subtitle: { sr: "Kupovina → lažna reklamacija ili prazna kutija → povrat novca od prodavca → prodavac gubi robu i novac", en: "Purchase → fake claim or empty box → seller refund → seller loses goods and money" },
    hasPage: true,
    tags: ["povrat robe", "reklamacija", "lažni povrat"],
    overlaps: ["refund-scam", "chargeback-fraud", "marketplace-scam"],
    sources: [{ name: "NRF — Return Fraud Report" }, { name: "eBay — Returns Abuse" }]
  },

  "parcel-scam": {
    core: true,
    title: { sr: "Prevara s paketom", en: "Parcel scam" },
    title_en: "Parcel scam",
    title_sr: "Prevara s paketom",
    summary_en: "Parcel scams use the existence of a package itself as the bait, even when the target may not be expecting one: a held shipment, customs issue, insurance check, or tracking problem creates just enough plausibility to make the link worth opening. Unlike package-redelivery scams, the story is not limited to a failed delivery attempt and may branch into customs, verification, or malware delivery. Signal: the parcel notice asks you to do more than check status and quickly turns into payment, login, or download.",
    summary_sr: "Prevare sa paketom koriste samo postojanje pošiljke kao mamac, čak i kada korisnik možda ništa ni ne očekuje: zadržana pošiljka, carina, osiguranje ili problem sa praćenjem daju taman dovoljno verovatnoće da se link otvori. Za razliku od prevare sa ponovnom dostavom, priča ovde nije ograničena na neuspešan pokušaj uručenja i lako prelazi u carinu, verifikaciju ili malver. Signal: obaveštenje o paketu brzo traži više od praćenja statusa i prelazi u plaćanje, prijavu ili preuzimanje.",
    subtitle: { sr: "Paket je samo ulaz: od statusa pošiljke brzo se prelazi u link, uplatu, prijavu ili fajl.", en: "The parcel is only the entry point: shipment status quickly turns into a link, payment, login, or file." },
    hasPage: true,
    tags: ["paket", "dostava", "smishing"],
    overlaps: ["package-redelivery-scam", "fake-delivery", "smishing", "phishing"],
    sources: [{ name: "Action Fraud — Parcel Scams" }, { name: "Royal Mail — Fake Delivery Text" }]
  },

  "package-redelivery-scam": {
    core: true,
    title: { sr: "Prevara s ponovnom dostavom paketa", en: "Package redelivery scam" },
    title_en: "Package redelivery scam",
    title_sr: "Prevara s ponovnom dostavom paketa",
    summary_en: "Package redelivery scams are narrower than generic parcel scams: the whole script is built around a failed first attempt and a small fee to try again. The low amount is part of the trap, because a minor card charge or verification step feels more credible than a large customs demand. Signal: the message says delivery already failed and pushes a small redelivery fee, card check, or address confirmation through a link outside the courier’s official workflow.",
    summary_sr: "Prevare sa ponovnom dostavom uže su od opšteg parcel modela: ceo scenario zasniva se na navodno neuspelom prvom pokušaju i maloj naknadi da bi se pokušalo ponovo. Nizak iznos je deo zamke, jer mala kartična naplata ili kratka potvrda adrese deluju uverljivije od velike carinske dažbine. Signal: poruka tvrdi da je dostava već propala i gura malu naknadu za redelivery, proveru kartice ili potvrdu adrese kroz link van zvaničnog toka kurira.",
    subtitle: { sr: "Nije svaki paket isti: ovde je mamac baš drugi pokušaj i mala naknada koja otvara put ka kartici ili kodu.", en: "Not every parcel script is the same: here the bait is the second attempt and a small fee that opens the path to card or code theft." },
    hasPage: true,
    tags: ["kurir", "ponovna dostava", "smishing"],
    overlaps: ["parcel-scam", "fake-delivery", "smishing", "phishing", "qr-payment-scam"],
    sources: [{ name: "NCSC — Fake Delivery Texts" }, { name: "Europol — Smishing Campaigns" }]
  },

  "travel-booking-scam": {
    core: true,
    title: { sr: "Prevara s rezervacijom putovanja", en: "Travel booking scam" },
    title_en: "Travel booking scam",
    title_sr: "Prevara s rezervacijom putovanja",
    summary_en: "Fraudulent travel agencies or booking sites sell non-existent flights, hotels, or holiday packages, collecting full payment before disappearing or providing invalid bookings.",
    summary_sr: "Lažne turističke agencije ili sajtovi za rezervacije prodaju nepostojeće letove, hotele ili pakete odmora, prikupljajući punu uplatu pre nestanka ili pružanja nevažećih rezervacija.",
    subtitle: { sr: "Lažna agencija ili sajt → rezervacija odmora → puna uplata → rezervacija nevažeća → nestanak → gubitak", en: "Fake agency or site → holiday booking → full payment → booking invalid → disappearance → loss" },
    hasPage: true,
    tags: ["putovanje", "rezervacija", "turistička prevara"],
    overlaps: ["airline-refund-scam", "ticket-scam", "advance-fee-fraud", "fake-webshop"],
    sources: [{ name: "ABTA — Holiday Fraud" }, { name: "FTC — Travel Scams" }]
  },

  "airline-refund-scam": {
    core: true,
    title: { sr: "Prevara s povratom avio karti", en: "Airline refund scam" },
    title_en: "Airline refund scam",
    title_sr: "Prevara s povratom avio karti",
    summary_en: "Fraudsters pose as airline customer service and offer refunds for delayed or cancelled flights, redirecting victims to phishing sites or collecting card details over the phone.",
    summary_sr: "Prevaranti se lažno predstavljaju kao korisnička podrška aviokompanije i nude povrat novca za odložene ili otkazane letove, preusmeravajući žrtve na phishing sajtove ili prikupljajući kartične podatke telefonom.",
    subtitle: { sr: "Lažna avio podrška → povrat za otkazani let → phishing sajt ili poziv → kartični podaci → gubitak", en: "Fake airline support → refund for cancelled flight → phishing site or call → card data → loss" },
    hasPage: true,
    tags: ["aviokompanije", "povrat karte", "lažna podrška"],
    overlaps: ["travel-booking-scam", "ticket-scam", "refund-scam", "phishing", "vishing"],
    sources: [{ name: "CAA — Airline Refund Fraud" }, { name: "Action Fraud — Flight Scams" }]
  },

  "ticket-scam": {
    core: true,
    title: { sr: "Prevara s lažnim ulaznicama", en: "Ticket scam" },
    title_en: "Ticket scam",
    title_sr: "Prevara s lažnim ulaznicama",
    summary_en: "Fraudsters sell fake, duplicated, or invalid tickets for concerts, sports events, or travel — collecting payment and either delivering worthless tickets or nothing at all.",
    summary_sr: "Prevaranti prodaju lažne, duplirane ili nevažeće ulaznice za koncerte, sportske događaje ili putovanja — prikupljaju uplatu i isporučuju bezvredne ulaznice ili ništa.",
    subtitle: { sr: "Lažni prodavac ulaznica → kupovina → uplata → ulaznica nevažeća ili ne stigne → gubitak", en: "Fake ticket seller → purchase → payment → invalid ticket or no ticket → loss" },
    hasPage: true,
    tags: ["ulaznice", "koncerti", "lažni prodavac"],
    overlaps: ["travel-booking-scam", "airline-refund-scam", "marketplace-scam", "advance-fee-fraud"],
    sources: [{ name: "GET ME IN — Ticket Scam Guide" }, { name: "FTC — Event Ticket Scams" }]
  },

  "escrow-scam": {
    core: true,
    title: { sr: "Prevara s lažnim eskrou servisom", en: "Escrow scam" },
    title_en: "Escrow scam",
    title_sr: "Prevara s lažnim eskrou servisom",
    summary_en: "Fraudsters in high-value transactions propose using a fake escrow service to 'secure' the deal, then disappear with the deposited funds once payment is made.",
    summary_sr: "Prevaranti u transakcijama visoke vrednosti predlažu korišćenje lažnog eskrou servisa za 'osiguranje' posla, zatim nestaju s deponovanim sredstvima po izvršenoj uplati.",
    subtitle: { sr: "Lažni eskrou servis → depozit za osiguranje transakcije → sredstva zarobljena → nestanak → gubitak", en: "Fake escrow service → deposit to secure transaction → funds trapped → disappearance → loss" },
    hasPage: true,
    tags: ["eskrou", "depozit", "transakcija visoke vrednosti"],
    overlaps: ["real-estate-purchase-scam", "rental-scam", "marketplace-scam", "advance-fee-fraud"],
    sources: [{ name: "FBI — Escrow Wire Fraud" }, { name: "IC3 — Real Estate Fraud" }]
  },

  "real-estate-purchase-scam": {
    core: true,
    title: { sr: "Prevara pri kupovini nekretnine", en: "Real estate purchase scam" },
    title_en: "Real estate purchase scam",
    title_sr: "Prevara pri kupovini nekretnine",
    summary_en: "Fraudsters sell non-existent or fraudulently listed properties, divert closing payments to fake accounts, or charge upfront fees for viewings and documentation of properties they do not own.",
    summary_sr: "Prevaranti prodaju nepostojeće ili lažno oglasite nekretnine, preusmeravaju plaćanja zaključivanja na lažne račune ili naplaćuju unapredne naknade za razgledanje i dokumentaciju nekretnina koje ne poseduju.",
    subtitle: { sr: "Lažna nekretnina → unapredne naknade ili preusmeren zaključni transfer → vlasništvo ne prenosi → gubitak", en: "Fake property → upfront fees or diverted closing transfer → ownership does not transfer → loss" },
    hasPage: true,
    tags: ["nekretnina", "kupovina stana", "lažni oglas"],
    overlaps: ["escrow-scam", "rental-scam", "advance-fee-fraud", "payment-diversion", "impersonation-scam"],
    sources: [{ name: "FBI — Real Estate Wire Fraud" }, { name: "RICS — Property Fraud Alert" }]
  },

  "ai-deepfake": {
    core: true,
    title: { sr: "Prevare sa lažnim snimcima uz pomoć veštačke inteligencije", en: "AI Deepfake scams" },
    title_en: "AI Deepfake scams",
    title_sr: "Prevare sa lažnim snimcima uz pomoć veštačke inteligencije",
    summary_en: "AI deepfake scams are less one scam type than a new proof layer: a synthetic face or altered video is used to replace normal identity checks and speed up whatever fraud sits behind it. The target action still depends on the underlying scam, but the victim is pushed to trust the clip more than procedure, context, or independent verification.",
    summary_sr: "Prevare sa lažnim snimcima uz pomoć veštačke inteligencije nisu jedna jedina vrsta prevare, već novi sloj lažnog dokaza: sintetičko lice ili izmenjeni video služe da zamene normalnu proveru identiteta i ubrzaju bilo koju prevaru koja stoji iza toga. Ciljna radnja i dalje zavisi od bazne prevare, ali žrtva se gura da veruje snimku više nego proceduri, kontekstu i nezavisnoj proveri.",
    subtitle: {
      sr: "Veštačka inteligencija ne menja cilj prevare nego dokazni sloj: lažno lice ili video služe da zamene proveru identiteta.",
      en: "AI changes the proof layer more than the goal: a fake face or video stands in for real identity verification."
    },
    hasPage: true,
    tags: ["tehnologija", "manipulacija"],
    overlaps: ["crypto-scam", "investment-seminar", "fake-call-scam", "impersonation-scam"],
    sources: [
      { name: "FBI — Deepfake fraud warnings" },
      { name: "Europol — Deepfake threat assessment" }
    ]
  },

  "malicious-app-scam": {
    core: true,
    title: { sr: "Zlonamerna aplikacija", en: "Malicious app scam" },
    title_en: "Malicious app scam",
    title_sr: "Zlonamerna aplikacija",
    summary_en: "The user installs an app that looks legitimate but requests excessive permissions. After granting accessibility or SMS access the app silently exfiltrates passwords, OTP codes and credentials to the attacker. Signal: requests for accessibility permission or SMS access in an app with no reason for them.",
    summary_sr: "Korisnik instalira aplikaciju koja izgleda legitimno ali trazi prekomerne dozvole. Posle odobravanja pristupacnosti ili SMS-a aplikacija tiho salje lozinke, OTP kodove i kredencijale napadacu. Signal: zahtev za pristupacnoscu ili SMS-om u aplikaciji koja nema razlog za to.",
    subtitle: {
      sr: "Instalacija aplikacije  dozvole  eksfiltracija podataka  preuzimanje naloga.",
      en: "App installation  permissions  data exfiltration  account takeover."
    },
    hasPage: true,
    overlaps: ["app-clone-scam", "fake-update-scam", "browser-extension-scam", "account-takeover", "phishing"],
    sources: []
  },

  "app-clone-scam": {
    core: true,
    title: { sr: "Klon aplikacija", en: "App clone scam" },
    title_en: "App clone scam",
    title_sr: "Klon aplikacija",
    summary_en: "The attacker copies an official app, adds malicious code and distributes it through fake stores or phishing links. The clone looks identical to the original. Every login sends credentials to the attacker in real time. Signal: download link outside Google Play or App Store.",
    summary_sr: "Napadac kopira zvanicnu aplikaciju, dodaje maliciozni kod i distribuira je kroz lazne prodavnice ili phishing linkove. Klon izgleda identicno originalu. Svaka prijava salje kredencijale napadacu u realnom vremenu. Signal: link za preuzimanje van Google Play ili App Store.",
    subtitle: {
      sr: "Lazna kopija aplikacije  prijava  kradja kredencijala  preuzimanje naloga.",
      en: "Fake app copy  login  credential theft  account takeover."
    },
    hasPage: true,
    overlaps: ["malicious-app-scam", "fake-update-scam", "browser-extension-scam", "account-takeover", "phishing"],
    sources: []
  },

  "fake-update-scam": {
    core: true,
    title: { sr: "Lazni update", en: "Fake update scam" },
    title_en: "Fake update scam",
    title_sr: "Lazni update",
    summary_en: "A pop-up or notification mimics an official system or app update and directs the user to download a malware package. After installation the malware can be a keylogger, RAT or ransomware. Signal: update notification appearing on a website with no relation to the software being updated.",
    summary_sr: "Pop-up ili obavestenje imitira zvanicno azuriranje sistema ili aplikacije i navodi korisnika na preuzimanje malver paketa. Posle instalacije malver moze biti keylogger, RAT ili ransomware. Signal: obavestenje o azuriranju koje se pojavljuje na sajtu bez veze sa softverom koji se azurira.",
    subtitle: {
      sr: "Lazno obavestenje o azuriranju  preuzimanje fajla  malver aktivan  eksfiltracija ili ransomware.",
      en: "Fake update notification  file download  malware active  exfiltration or ransomware."
    },
    hasPage: true,
    overlaps: ["malicious-app-scam", "app-clone-scam", "browser-extension-scam", "scareware", "phishing"],
    sources: []
  },

  "browser-extension-scam": {
    core: true,
    title: { sr: "Zlonamerni dodatak za pregledač", en: "Browser extension scam" },
    title_en: "Browser extension scam",
    title_sr: "Zlonamerni dodatak za pregledač",
    summary_en: "The attacker distributes a browser extension disguised as a useful tool. After installation it reads all pages the user visits, steals session cookies and can modify payment data before the user confirms a transaction. Signal: extension requesting to read and modify all website data.",
    summary_sr: "Napadac distribuira browser prosirenje maskirano kao koristan alat. Posle instalacije cita sve stranice koje korisnik posjecuje, krade sesijske kolacice i moze mijenjati platne podatke prije nego korisnik potvrdi transakciju. Signal: prosirenje koje trazi pravo citanja i izmjene podataka na svim sajtovima.",
    subtitle: {
      sr: "Instalacija prosirenja  dozvola pristupa stranicama  kradja sesija  preuzimanje naloga.",
      en: "Extension installation  page access permission  session theft  account takeover."
    },
    hasPage: true,
    overlaps: ["malicious-app-scam", "app-clone-scam", "fake-update-scam", "account-takeover", "phishing"],
    sources: []
  },

  "tabnapping-login-scam": {
    title: { sr: "Tabnapping: lažna prijava u pregledaču", en: "Tabnapping login scam" },
    title_en: "Tabnapping login scam",
    title_sr: "Tabnapping: lažna prijava u pregledaču",
    summary_en: "A hidden or background tab silently replaces a real login page with a copy so you type credentials into the attacker’s form after you return to the tab. Signal: the login tab looks familiar but the address bar or certificate detail does not match the real site.",
    summary_sr: "Sakriven ili pozadinski tab tiha zamenjuje pravu stranicu za prijavu kopijom, pa unosite kredencijale u napadačevu formu kad se vratite na tab. Signal: tab za prijavu deluje poznato, ali adresna traka ili detalji sertifikata ne odgovaraju pravom sajtu.",
    subtitle: {
      sr: "Otvoren legitiman sajt → tab u pozadini → zamena stranice za prijavu → unos lozinke → preuzimanje naloga.",
      en: "Legit tab open → background wait → login page swapped → password entry → account takeover."
    },
    hasPage: true,
    tags: ["fišing", "nalog", "pregledač"],
    overlaps: ["phishing", "browser-session-hijack", "account-takeover", "browser-extension-scam"],
    sources: []
  },

  "browser-push-malware-scam": {
    title: { sr: "Prevara lažnim obaveštenjima pregledača i zlonamernim programom", en: "Browser push notification malware scam" },
    title_en: "Browser push notification malware scam",
    title_sr: "Prevara lažnim obaveštenjima pregledača i zlonamernim programom",
    summary_en: "A site tricks you into allowing web push notifications, then floods fake alerts that open malware pages or subscription traps. Signal: notification claims you are infected or must update, and leads off-domain.",
    summary_sr: "Sajt navede na dozvolu za web push obaveštenja, zatim dolaze lažna upozorenja koja otvaraju stranice sa malverom ili zamkama za pretplatu. Signal: obaveštenje tvrdi infekciju ili ažuriranje i vodi van pravog domena.",
    subtitle: {
      sr: "Dozvola za obaveštenja → lažni push → klik → preuzimanje ili lažna podrška.",
      en: "Notification permission → fake pushes → click → download or fake support."
    },
    hasPage: true,
    tags: ["malware", "pregledač"],
    overlaps: ["fake-update-scam", "scareware", "malicious-app-scam", "phishing", "browser-extension-scam"],
    sources: []
  },

  "linked-device-support-scam": {
    core: true,
    title: { sr: "Prevara povezanog uređaja preko lažne podrške", en: "Linked-device fake support scam" },
    title_en: "Linked-device fake support scam",
    title_sr: "Prevara povezanog uređaja preko lažne podrške",
    summary_en: "A fake support flow claims that security can be restored only if you link devices, add a trusted device, or confirm a new session under guidance. Unlike classic remote-support fraud, the attacker does not always need full desktop control; one approval, QR scan, or authenticator step can be enough to open a session or payment path. Signal: the technician leads you through account-security menus instead of directing you to a public support page or known official number.",
    summary_sr: "Lažna podrška tvrdi da bezbednost može da se vrati samo ako povežete uređaje, dodate pouzdan uređaj ili pod vođstvom odobrite novu sesiju. Za razliku od klasične prevare sa daljinskom podrškom, napadaču nije uvek potrebna puna kontrola računara; dovoljan može biti jedan QR, jedno odobrenje ili korak u autentifikatoru da otvori sesiju ili put ka naplati. Signal: tehničar vas vodi kroz menije bezbednosti naloga umesto na javnu stranicu podrške ili poznat zvanični broj.",
    subtitle: {
      sr: "Lažni tehničar traži povezivanje uređaja ili QR potvrdu prijave.",
      en: "A fake \"technician\" asks for device linking or a QR sign-in confirmation."
    },
    hasPage: true,
    tags: ["podrška", "nalog", "QR"],
    overlaps: ["tech-support-scam", "tech-support-remote-access-scam", "phishing", "quishing", "browser-push-malware-scam", "account-takeover"],
    sources: [
      { name: "FBI – Tech support fraud", url: "https://www.fbi.gov/how-we-can-help-you/safety-resources/scams-and-safety/common-scams-and-crimes/tech-support-fraud" },
      { name: "CISA – Recognize and report phishing", url: "https://www.cisa.gov/secure-our-world/recognize-and-report-phishing" }
    ]
  },

  "account-recovery-chat-app-impersonation-scam": {
    core: true,
    title: { sr: "Lažni oporavak naloga preko čet aplikacije", en: "Account recovery impersonation via chat apps" },
    title_en: "Account recovery impersonation via chat apps",
    title_sr: "Lažni oporavak naloga preko čet aplikacije",
    summary_en: "A chat message from a \"friend,\" relative, or fake service contact asks for a code, screenshot, or forwarded SMS under the story of account recovery, a mistaken message, or urgent verification. Unlike ordinary phishing, the pressure comes from conversational trust and the expectation of a quick favor, not from a fake form as the main threshold. Signal: the request sounds personal, but the next step is still handing over the exact code or message that protects your own account or payment.",
    summary_sr: "Poruka u četu od prijatelja, rođaka ili lažnog servisnog kontakta traži kod, snimak ekrana ili prosleđen SMS pod pričom o oporavku naloga, greškom poslatoj poruci ili hitnoj verifikaciji. Za razliku od običnog fišinga, pritisak ovde dolazi iz poverenja u razgovoru i iz očekivanja da se učini mali uslužni korak, a ne iz forme kao glavnog praga. Signal: zahtev zvuči lično, ali sledeći korak je ipak predaja tačnog koda ili poruke koja štiti vaš nalog ili plaćanje.",
    subtitle: {
      sr: "Poruka glumi prijatelja ili servis i traži kod koji štiti nalog.",
      en: "The message poses as a friend or a \"service\" and asks for the code that protects the account."
    },
    hasPage: true,
    tags: ["čet", "nalog", "impersonacija"],
    overlaps: ["impersonation-scam", "account-recovery-scam", "smishing", "account-takeover", "social-media-hijack-scam", "phishing"],
    sources: [
      { name: "FTC – How to recognize and avoid phishing scams", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" },
      { name: "UK NCSC – Phishing attacks collection", url: "https://www.ncsc.gov.uk/collection/phishing-attacks" }
    ]
  },

  "browser-notification-phishing-scam": {
    core: true,
    title: { sr: "Fišing preko obaveštenja pregledača", en: "Browser notification phishing scam" },
    title_en: "Browser notification phishing scam",
    title_sr: "Fišing preko obaveštenja pregledača",
    summary_en: "Browser notification phishing starts after the victim has already granted push permission, so the attacker no longer needs a fresh SMS or email each time; repeated alerts can keep driving the same target back to a fake login, payment, or verification page. Unlike the browser-push malware variant, the primary threshold here is credential or payment capture, not software installation. Signal: recurring browser alerts claim account trouble, billing, or security action and lead to a sign-in or payment form outside the official service.",
    summary_sr: "Fišing preko browser obaveštenja počinje tek pošto je žrtva već dala push dozvolu, pa napadaču više nije potreban novi SMS ili imejl za svaki pokušaj; isti korisnik može više puta biti vraćen na lažnu prijavu, naplatu ili verifikaciju. Za razliku od browser-push malver varijante, glavni prag ovde nije instalacija nego krađa naloga ili naplata. Signal: ponavljana browser obaveštenja tvrde da postoji problem sa nalogom, naplatom ili bezbednošću i vode na formu za prijavu ili plaćanje van zvanične usluge.",
    subtitle: {
      sr: "Dozvola za push → ponavljajući lažni alerti → klik → lažna prijava ili uplata.",
      en: "Push permission → repeated fake alerts → click → fake login or payment."
    },
    hasPage: true,
    tags: ["pregledač", "fišing", "push"],
    overlaps: ["phishing", "smishing", "browser-push-malware-scam", "account-takeover", "fake-call-scam", "tech-support-scam"],
    sources: [
      { name: "CISA – Avoid phishing attempts", url: "https://www.cisa.gov/avoid-phishing-attempts" },
      { name: "FTC – How to recognize and avoid phishing scams", url: "https://consumer.ftc.gov/articles/how-recognize-and-avoid-phishing-scams" }
    ]
  },

  "qr-fine-payment-scam": {
    core: true,
    title: { sr: "QR kod za lažnu kaznu ili državni račun", en: "QR fine and government bill payment scam" },
    title_en: "QR fine and government bill payment scam",
    title_sr: "QR kod za lažnu kaznu ili državni račun",
    summary_en: "This scam places the QR code directly inside the story of a fine, administrative fee, parking bill, or public payment so that scanning feels like a fast civic shortcut rather than a suspicious link. Unlike generic quishing, the authority of the bill itself is part of the deception, and unlike ordinary fake-fine scams, the QR format removes friction and pushes immediate action. Signal: the notice looks official, but the QR leads to a payment or sign-in path outside the public body’s normal channels.",
    summary_sr: "Ova prevara stavlja QR kod direktno u priču o kazni, administrativnoj taksi, parking računu ili javnoj uplati, pa skeniranje deluje kao brz građanski prečac, a ne kao sumnjiv link. Za razliku od opšteg quishing modela, ovde je i sam autoritet računa deo obmane, a za razliku od obične lažne kazne, QR format uklanja trenje i gura trenutnu reakciju. Signal: obaveštenje deluje službeno, ali QR vodi ka uplati ili prijavi van normalnih kanala tog javnog tela.",
    subtitle: {
      sr: "QR na kazni, računu ili uplatnici → skeniranje → lažni portal → kartica ili prijava.",
      en: "QR on a \"fine,\" bill, or payment slip → scan → fake portal → card or login."
    },
    hasPage: true,
    tags: ["QR", "plaćanje", "država"],
    overlaps: ["quishing", "fake-fine-scam", "government-impersonation", "parking-qr-scam", "toll-road-scam", "smishing"],
    sources: [
      { name: "FTC – Scammers hide harmful links in QR codes", url: "https://consumer.ftc.gov/consumer-alerts/2023/12/scammers-hide-harmful-links-qr-codes-steal-your-information" },
      { name: "UK NCSC – Phishing", url: "https://www.ncsc.gov.uk/guidance/avoiding-phishing-attacks" }
    ]
  },

  "fake-captcha-malware-scam": {
    title: { sr: "Lažna CAPTCHA i preuzimanje malvera", en: "Fake CAPTCHA malware download scam" },
    title_en: "Fake CAPTCHA malware download scam",
    title_sr: "Lažna CAPTCHA i preuzimanje malvera",
    summary_en: "A page pretends you must click a fake CAPTCHA or press special keys; the action starts a download or runs a script that fetches malware. Signal: CAPTCHA is only an image with a download button, or Ctrl+V is requested into Run.",
    summary_sr: "Stranica glumi da morate da kliknete lažnu CAPTCHA-u ili pritisnete posebne tastere; radnja pokreće preuzimanje ili skriptu koja dovlači malver. Signal: CAPTCHA je samo slika sa dugmetom za preuzimanje ili se traži Ctrl+V u Run.",
    subtitle: {
      sr: "Lažna provera čoveka → klik ili tasterski trik → fajl ili skripta → malver.",
      en: "Fake human check → click or keyboard trick → file or script → malware."
    },
    hasPage: true,
    tags: ["malware", "fišing"],
    overlaps: ["fake-update-scam", "malicious-app-scam", "phishing", "scareware"],
    sources: []
  },

  "mfa-seed-phishing-scam": {
    title: { sr: "Fišing sa tajnim ključem aplikacije za kodove", en: "MFA authenticator seed phishing scam" },
    title_en: "MFA authenticator seed phishing scam",
    title_sr: "Fišing sa tajnim ključem aplikacije za kodove",
    summary_en: "A fake IT or security flow asks you to export or photograph the secret key (seed) for your authenticator app, or to paste it into a form, which clones your MFA generator. Signal: any request for the long seed string or QR setup data outside the real account security page.",
    summary_sr: "Lažni IT ili bezbednosni tok traži da izvezete ili uslikate tajni ključ (seed) za aplikaciju za kodove, ili da ga nalepite u formu, čime se klonira MFA generator. Signal: bilo koji zahtev za dugim nizom seed-a ili QR podacima za podešavanje van prave stranice bezbednosti naloga.",
    subtitle: {
      sr: "Lažna podrška ili provera → otkrivanje seed-a → napadač generiše iste kodove.",
      en: "Fake support or check → seed exposed → attacker generates the same codes."
    },
    hasPage: true,
    tags: ["mfa", "fišing", "nalog"],
    overlaps: ["phishing", "mfa-fatigue-scam", "account-takeover", "seed-phrase-scam", "otp-interception"],
    sources: []
  },

  "fake-app-sideload-verification-scam": {
    title: { sr: "Lažna provera Android instalacije van prodavnice aplikacija", en: "Fake app sideload verification scam" },
    title_en: "Fake app sideload verification scam",
    title_sr: "Lažna provera Android instalacije van prodavnice aplikacija",
    summary_en: "After you sideload an APK or unofficial app, a follow-up page or in-app screen demands an extra security verification payment or remote session to unlock features—often delivering more malware or theft. Signal: paid verification for an app you already installed outside the official store.",
    summary_sr: "Posle sideload APK-a ili nezvanične aplikacije, stranica ili ekran u aplikaciji traži dodatnu bezbednosnu verifikaciju uz uplatu ili daljinsku sesiju da bi se otključale funkcije — često dovodi do dodatnog malvera ili krađe. Signal: plaćena verifikacija za aplikaciju koju ste već instalirali van zvanične prodavnice.",
    subtitle: {
      sr: "Instalacija van prodavnice → lažna verifikacija → uplata ili daljinski pristup → šteta.",
      en: "Off-store install → fake verification → payment or remote access → loss."
    },
    hasPage: true,
    tags: ["aplikacija", "malware"],
    overlaps: ["malicious-app-scam", "app-clone-scam", "tech-support-scam", "fake-update-scam", "phishing"],
    sources: []
  },

  "account-marketplace-middleman-scam": {
    title: { sr: "Lažni posrednik na tržištu naloga (igre, društvene mreže)", en: "Account marketplace middleman scam" },
    title_en: "Account marketplace middleman scam",
    title_sr: "Lažni posrednik na tržištu naloga (igre, društvene mreže)",
    summary_en: "A third party offers to hold payment while you buy or sell a game or social account, then takes the account or money using fake escrow chat, spoofed invoices, or verification fees. Signal: middleman not named by the real platform and off-platform payment.",
    summary_sr: "Treća strana nudi da zadrži novac dok kupujete ili prodajete nalog za igru ili mrežu, zatim uzima nalog ili novac kroz lažni eskrou čet, lažne fakture ili naknade za verifikaciju. Signal: posrednik nije naveden od strane prave platforme i uplata ide van zvaničnog sistema.",
    subtitle: {
      sr: "Dogovor u četu → lažni posrednik → uplata ili predaja naloga → nestanak.",
      en: "Chat deal → fake middleman → payment or handover → disappearance."
    },
    hasPage: true,
    tags: ["oglasi", "nalog"],
    overlaps: ["marketplace-scam", "escrow-scam", "phishing", "account-takeover", "advance-fee-fraud"],
    sources: []
  },

  "fake-livestream-giveaway-wallet-scam": {
    title: { sr: "Lažni kripto giveaway na live streamu (lažni novčanik)", en: "Fake livestream crypto giveaway wallet scam" },
    title_en: "Fake livestream crypto giveaway wallet scam",
    title_sr: "Lažni kripto giveaway na live streamu (lažni novčanik)",
    summary_en: "A cloned or hacked live stream shows a celebrity or project doubling crypto if you send to a shown address or connect a wallet; funds go to scammers or a drainer site. Signal: only chat and a wallet address, urgency, and no official domain link.",
    summary_sr: "Kloniran ili hakovani prenos uživo pokazuje poznatu osobu ili projekat koji duplira kripto ako pošaljete na prikazanu adresu ili povežete novčanik; sredstva odlaze prevarantima ili na drainer sajt. Signal: samo čet i adresa novčanika, hitnost i nema linka ka zvaničnom domenu.",
    subtitle: {
      sr: "Lažni live → QR/adresa → slanje ili connect → gubitak sredstava.",
      en: "Fake live → QR/address → send or connect → loss."
    },
    hasPage: true,
    tags: ["kripto", "prevara"],
    overlaps: ["wallet-drainer", "giveaway-scam", "phishing", "crypto-scam", "account-takeover"],
    sources: []
  },

  "money-mule-recruitment": {
    core: true,
    title: { sr: "Regrutovanje finansijske mule", en: "Money mule recruitment" },
    title_en: "Money mule recruitment",
    title_sr: "Regrutovanje finansijske mule",
    summary_en: "Money mule recruitment is not just a bad remote job but a direct attempt to turn the victim’s own bank account into a transit point for stolen or fraudulent funds. Unlike reshipping, the key asset here is the person’s account and identity, not their home address or package handling. Signal: the \"job\" is mainly receiving and forwarding other people’s money for a commission, especially before there is any real work contract or ordinary payroll setup.",
    summary_sr: "Regrutovanje finansijske mule nije samo loš posao na daljinu, već direktan pokušaj da se sopstveni bankovni račun i identitet pretvore u tranzitnu tačku za ukraden ili prevarom pribavljen novac. Za razliku od reshipping modela, glavni resurs ovde nisu kućna adresa i paketi, nego račun i identitet same osobe. Signal: posao se u suštini svodi na primanje i prosleđivanje tuđeg novca za procenat, posebno pre nego što uopšte postoji pravi ugovor ili redovan model isplate zarade.",
    subtitle: {
      sr: "Nije posao nego kanal za tuđi novac: vaš račun postaje alat za skrivanje porekla sredstava.",
      en: "Not a job but a channel for other people’s money: your account becomes a tool for masking the origin of funds."
    },
    hasPage: true,
    overlaps: ["reshipping-scam", "work-from-home-scam", "recruitment-scam", "identity-theft", "job-scam"],
    sources: []
  },

  "reshipping-scam": {
    core: true,
    title: { sr: "Reshipping prevara", en: "Reshipping scam" },
    title_en: "Reshipping scam",
    title_sr: "Reshipping prevara",
    summary_en: "Reshipping scams recruit the victim to receive goods at home, relabel them, and forward them onward, which makes the person’s address the visible endpoint of a wider fraud chain. Unlike money mule recruitment, the core asset here is physical package handling rather than the use of a bank account for incoming funds. Signal: the role is presented as logistics or quality control, but the company wants your home as a warehouse and keeps the source of the goods vague.",
    summary_sr: "Reshipping prevare regrutuju žrtvu da robu prima kod kuće, prelepljuje i šalje dalje, pa njena adresa postaje vidljiva krajnja tačka šireg lanca prevare. Za razliku od regrutovanja finansijske mule, ključni resurs ovde nije bankovni račun za prijem novca, nego fizičko rukovanje paketima. Signal: uloga se predstavlja kao logistika ili kontrola kvaliteta, ali firma zapravo želi da vaš stan postane skladište, dok poreklo robe ostaje mutno.",
    subtitle: {
      sr: "Kućna adresa umesto kancelarije: paketi stižu vama, a trag robe i istrage ostaje na vama.",
      en: "A home address instead of an office: the packages come to you, and so does the trace of the goods and the investigation."
    },
    hasPage: true,
    overlaps: ["money-mule-recruitment", "work-from-home-scam", "recruitment-scam", "identity-theft", "job-scam"],
    sources: []
  },

  "work-from-home-scam": {
    core: true,
    title: { sr: "Lazni posao od kuce", en: "Work from home scam" },
    title_en: "Work from home scam",
    title_sr: "Lazni posao od kuce",
    summary_en: "Work-from-home scams sell the idea of easy remote earnings with little supervision, simple tasks, and fast onboarding. Unlike the broader job-scam umbrella, the remote setting itself is central: it justifies advance equipment fees, home-based receiving or forwarding, and fake onboarding that starts before any real team, office, or workflow can be verified. Signal: the role is vague but the pressure to pay, send documents, or use your own bank account arrives before the first real workday.",
    summary_sr: "Prevare sa radom od kuće prodaju ideju lake udaljene zarade sa malo kontrole, jednostavnim zadacima i brzim onboardingom. Za razliku od šireg job-scam okvira, ovde je upravo udaljeni format ključan: on služi da opravda unaprednu uplatu za opremu, kućni prijem ili prosleđivanje pošiljaka i lažni onboarding koji počinje pre nego što se proveri tim, kancelarija ili pravi tok rada. Signal: uloga je mutna, ali pritisak da platite, pošaljete dokumenta ili koristite sopstveni račun stiže pre prvog stvarnog radnog dana.",
    subtitle: {
      sr: "Rad od kuće kao izgovor: udaljenost prikriva naknade, krađu podataka i uvlačenje u tuđe tokove novca ili robe.",
      en: "Remote work as the pretext: distance hides fees, data theft, and recruitment into someone else’s money or goods flow."
    },
    hasPage: true,
    overlaps: ["money-mule-recruitment", "reshipping-scam", "recruitment-scam", "fake-hr-scam", "job-scam"],
    sources: []
  },

  "recruitment-scam": {
    core: true,
    title: { sr: "Prevara sa regrutovanjem", en: "Recruitment scam" },
    title_en: "Recruitment scam",
    title_sr: "Prevara sa regrutovanjem",
    summary_en: "Recruitment scams still revolve around the recruiter persona, but artificial intelligence can now make that recruiter look more polished through tailored outreach, cleaner language, staged interviews, and more believable company-facing communication. The core remains the same: the process moves faster than a real hiring channel should, and the candidate is pushed toward fees, documents, access, or mule-style tasks before the employer is independently verifiable.",
    summary_sr: "Prevare sa regrutovanjem i dalje se vrte oko figure regrutera, ali veštačka inteligencija danas može da učini tog regrutera ubedljivijim kroz prilagođen kontakt, čistiji jezik, nameštene intervjue i uverljiviju komunikaciju u ime firme. Suština ostaje ista: proces ide brže nego što bi pravi kanal zapošljavanja smeo, a kandidat se gura ka naknadama, dokumentima, pristupu ili mule zadacima pre nego što se poslodavac može nezavisno proveriti.",
    subtitle: {
      sr: "Regruter kao maska legitimiteta: kontakt je personalizovan, ali prag ostaju naknade, dokumenta ili pristup nalogu.",
      en: "The recruiter as the legitimacy mask: the contact is personalized, but the threshold is still fees, documents, or account access."
    },
    hasPage: true,
    overlaps: ["fake-hr-scam", "work-from-home-scam", "money-mule-recruitment", "identity-theft", "job-scam"],
    sources: []
  },

  "fake-hr-scam": {
    core: true,
    title: { sr: "Lažna kadrovska služba", en: "Fake HR scam" },
    title_en: "Fake HR scam",
    title_sr: "Lažna kadrovska služba",
    summary_en: "The attacker poses as an HR person from a legitimate company and initiates a fake onboarding to collect complete personal data — ID, passport, banking details, signature. Data is sold or used for identity theft. Signal: onboarding portal not on the company's official domain, or email domain differing by one character.",
    summary_sr: "Napadac se predstavlja kao HR osoba legitimne kompanije i inicira lazni onboarding za prikupljanje kompletnih licnih podataka — LK, pasos, bankarski podaci, potpis. Podaci se prodaju ili koriste za kradju identiteta. Signal: onboarding portal nije na zvanicnom domenu, ili imejl domen se razlikuje za jedan karakter.",
    subtitle: {
      sr: "Lazni HR onboarding  slanje dokumenata  kradja identiteta ili malver.",
      en: "Fake HR onboarding  sending documents  identity theft or malware."
    },
    hasPage: true,
    overlaps: ["recruitment-scam", "work-from-home-scam", "identity-theft", "phishing", "job-scam"],
    sources: []
  },
  "wallet-drainer": {
    core: true,
    title: { sr: "Wallet drainer", en: "Wallet drainer" },
    title_en: "Wallet drainer",
    title_sr: "Wallet drainer",
    summary_en: "A malicious smart contract drains a crypto wallet through a single transaction signature. The user connects their wallet to a fake site and signs what appears to be a mint or claim. The signature grants unlimited token approval to the drainer contract which immediately empties the wallet. Signal: signature request showing setApprovalForAll or unlimited ERC-20 approve.",
    summary_sr: "Maliciozni pametni ugovor koji praznid kripto novcanik kroz jedan jedini potpis transakcije. Korisnik poveze novcanik na lazni sajt i potpise nesto sto izgleda kao mint ili claim. Potpis daje neogranicen approval drainer ugovoru koji odmah praznid novcanik. Signal: zahtev za potpis koji prikazuje setApprovalForAll ili unlimited ERC-20 approve.",
    subtitle: {
      sr: "Mamac/airdrop → lazni sajt → wallet connect → potpis transakcije → approval → automatsko praznjenje novcanika.",
      en: "Bait/airdrop → fake site → wallet connect → transaction signature → approval → automated wallet drain."
    },
    hasPage: true,
    overlaps: ["airdrop-scam", "nft-scam", "recovery-scam", "fake-crypto-exchange-scam", "phishing"],
    sources: []
  },
  "airdrop-scam": {
    core: true,
    title: { sr: "Airdrop prevara", en: "Airdrop scam" },
    title_en: "Airdrop scam",
    title_sr: "Airdrop prevara",
    summary_en: "A fake airdrop announcement directs users to a claim site that activates a wallet drainer. The ad comes from a hacked project account and the site is visually identical to the official one. The claim signature grants drainer approval instead of distributing tokens. Signal: claim site URL differing from the official domain by one character.",
    summary_sr: "Lazni airdrop oglas usmerava korisnike na claim sajt koji aktivira wallet drainer. Oglas dolazi sa hakovanog naloga projekta a sajt je vizuelno identican zvanicnom. Potpis za claim daje drainer approval umesto distribucije tokena. Signal: URL claim sajta koji se razlikuje od zvanicnog domena za jedan karakter.",
    subtitle: {
      sr: "Lazni airdrop oglas → claim sajt → wallet connect → potpis drainera → praznjenje novcanika.",
      en: "Fake airdrop ad → claim site → wallet connect → drainer signature → wallet drain."
    },
    hasPage: true,
    overlaps: ["wallet-drainer", "nft-scam", "recovery-scam", "phishing", "impersonation-scam"],
    sources: []
  },
  "rug-pull": {
    core: true,
    title: { sr: "Rug pull", en: "Rug pull" },
    title_en: "Rug pull",
    title_sr: "Rug pull",
    summary_en: "Crypto project founders collect investor capital through token sale or NFT mint, then suddenly withdraw all liquidity and disappear. The project is built to appear legitimate with a team, whitepaper, roadmap and community. The moment of withdrawal is sudden with no warning. Signal: anonymous team, unlocked liquidity, no independent smart contract audit.",
    summary_sr: "Osnivaci kripto projekta prikupe kapital od investitora kroz token prodaju ili NFT mint, a zatim naglo povuku svu likvidnost i nestanu. Projekat je izgraden da izgleda legitimno sa timom, whitepaperom, roadmapom i zajednicom. Trenutak povlacenja je uvek iznenadan bez upozorenja. Signal: anoniman tim, likvidnost nije locked, nema nezavisnog audita pametnog ugovora.",
    subtitle: {
      sr: "Lansiranje projekta → hype/marketing → token prodaja → vrhunac cene → povlacenje likvidnosti → kolaps → bekstvo osnivaca.",
      en: "Project launch → hype/marketing → token sale → price peak → liquidity withdrawal → collapse → founders' escape."
    },
    hasPage: true,
    overlaps: ["ponzi-scheme", "nft-scam", "recovery-scam", "fake-crypto-exchange-scam", "pig-butchering"],
    sources: []
  },
  "nft-scam": {
    core: true,
    title: { sr: "NFT prevara", en: "NFT scam" },
    title_en: "NFT scam",
    title_sr: "NFT prevara",
    summary_en: "NFT scams combine fake mint sites with wallet drainers, collection rug pulls where founders disappear after mint, and fake secondary market manipulation. Victims lose ETH paid for the mint or their entire wallet if a drainer is activated. Signal: mint site URL differing from official, anonymous team, unaudited contract, setApprovalForAll in signature request.",
    summary_sr: "NFT prevare kombinuju lazne mint sajtove sa wallet drainerima, rug pull kolekcije gde osnivaci nestanu posle minta i laznu manipulaciju sekundarnog trzista. Signal: URL mint sajta koji se razlikuje od zvanicnog, anoniman tim, neauditovan ugovor, setApprovalForAll u zahtevu za potpis.",
    subtitle: {
      sr: "NFT hype/oglas → lazni mint sajt → wallet connect → potpis → drain/rug pull → sredstva na napadacevim adresama.",
      en: "NFT hype/ad → fake mint site → wallet connect → signature → drain/rug pull → funds at attacker's addresses."
    },
    hasPage: true,
    overlaps: ["wallet-drainer", "airdrop-scam", "rug-pull", "recovery-scam", "impersonation-scam"],
    sources: []
  },

  "co-financing-fee-scam": {
    title: "Prevara sufinansiranja",
    title_en: "Co-financing fee scam",
    summary_sr: "Lažno obaveštenje o odobrenom grantu ili ugovoru zahteva uplatu 'sopstvenog udela' pre isplate. Isplata nikad ne stiže, a serija naknada se nastavlja dok meta ne ostane bez sredstava.",
    summary_en: "Fake grant or contract approval notification demands payment of an 'own share' before disbursement. The payment never arrives and a series of fees continues until the target runs out of funds.",
    subtitle: {
      sr: "Lažno odobrenje → 'sopstveni udeo' → uplata → blokada isplate → serija naknada → nestanak.",
      en: "Fake approval → 'own share' → payment → disbursement blocked → fee series → disappearance."
    },
    hasPage: true,
    overlaps: ["grant-fund-scam", "compliance-fee-scam", "advance-fee-fraud", "grant-intermediary-scam", "impersonation-scam"],
    sources: []
  },

  "project-partnership-fee-scam": {
    title: "Prevara naknadom za projektno partnerstvo",
    title_en: "Project partnership fee scam",
    summary_sr: "Lažni poziv za EU konzorcijum ili projektno partnerstvo zahteva 'garanciju ozbiljnosti' pre ulaska. Pristup konzorcijumu se nikad ne otvara, a naknade se umnožavaju.",
    summary_en: "Fake EU consortium or project partnership invitation demands a 'seriousness guarantee' before entry. Consortium access never opens and fees multiply.",
    subtitle: {
      sr: "Lažni konzorcijum → NDA/profil → 'garancija ozbiljnosti' → uplata → blokada → serija naknada → nestanak.",
      en: "Fake consortium → NDA/profile → 'seriousness guarantee' → payment → block → fee series → disappearance."
    },
    hasPage: true,
    overlaps: ["grant-fund-scam", "co-financing-fee-scam", "advance-fee-fraud", "impersonation-scam", "compliance-fee-scam"],
    sources: []
  },

  "bid-bond-scam": {
    title: "Prevara licitacijskom garancijom",
    title_en: "Bid bond scam",
    summary_sr: "Lažni tender zahteva uplatu premije licitacijske garancije pre razmatranja ponude. Bid bond dokument nikad ne stiže, a serija procedura nastaje da opravda dalje uplate.",
    summary_en: "Fake tender demands payment of a bid bond premium before the bid is considered. The bid bond document never arrives and a series of procedures emerges to justify further payments.",
    subtitle: {
      sr: "Lažni tender → bid bond kao uslov → uplata premije → garancija ne stiže → nova naknada → nestanak.",
      en: "Fake tender → bid bond as condition → premium payment → bond never arrives → new fee → disappearance."
    },
    hasPage: true,
    overlaps: ["performance-bond-scam", "advance-payment-guarantee-scam", "procurement-tender-scam", "procurement-award-scam", "advance-fee-fraud"],
    sources: []
  },

  "performance-bond-scam": {
    title: "Prevara garancijom izvršenja",
    title_en: "Performance bond scam",
    summary_sr: "Lažni nalogodavac zahteva uplatu premije garancije izvršenja pre potpisivanja ugovora. Nalogodavac nikad ne potpiše, a recovery val nudi lažni povrat premije.",
    summary_en: "Fake contracting authority demands payment of a performance bond premium before contract signing. The contracting authority never signs and a recovery wave offers a fake premium refund.",
    subtitle: {
      sr: "Lažni ugovor → garancija izvršenja kao uslov → uplata premije → potpis blokiran → nova naknada → nestanak.",
      en: "Fake contract → performance bond as condition → premium payment → signature blocked → new fee → disappearance."
    },
    hasPage: true,
    overlaps: ["bid-bond-scam", "advance-payment-guarantee-scam", "procurement-award-scam", "advance-fee-fraud", "recovery-scam"],
    sources: []
  },

  "advance-payment-guarantee-scam": {
    title: "Prevara garancijom avansnog plaćanja",
    title_en: "Advance payment guarantee scam",
    summary_sr: "Lažni ugovor s avansnom komponentom zahteva uplatu premije garancije avansa pre isplate. Avans nikad ne stiže, a serija naknada troši više od vrednosti avansa.",
    summary_en: "Fake contract with an advance component demands payment of an advance guarantee premium before disbursement. The advance never arrives and the fee series consumes more than the advance value.",
    subtitle: {
      sr: "Lažni ugovor s avansom → 'garancija avansa' → uplata premije → avans blokiran → serija naknada → nestanak.",
      en: "Fake contract with advance → 'advance guarantee' → premium payment → advance blocked → fee series → disappearance."
    },
    hasPage: true,
    overlaps: ["bid-bond-scam", "performance-bond-scam", "co-financing-fee-scam", "advance-fee-fraud", "recovery-scam"],
    sources: []
  },

  "kyc-aml-verification-fee-scam": {
    title: "Prevara naknadom za KYC/AML verifikaciju",
    title_en: "KYC/AML verification fee scam",
    summary_sr: "Lažna institucija blokira isplatu granta ili transakcije iza 'obavezne KYC/AML verifikacije' i naplaćuje naknadu za obradu. Verifikacija je lažna, isplata nikad ne stiže.",
    summary_en: "Fake institution blocks grant disbursement or transaction behind 'mandatory KYC/AML verification' and charges a processing fee. The verification is fake and the payment never arrives.",
    subtitle: {
      sr: "Lažna institucija → 'KYC/AML verifikacija' → naknada za obradu → blokada → serija naknada → nestanak.",
      en: "Fake institution → 'KYC/AML verification' → processing fee → block → fee series → disappearance."
    },
    hasPage: true,
    overlaps: ["co-financing-fee-scam", "compliance-fee-scam", "advance-fee-fraud", "bank-impersonation", "otp-interception"],
    sources: []
  },

  "consultant-guarantee-scam": {
    title: "Prevara garancijom konsultanta",
    title_en: "Consultant guarantee scam",
    summary_sr: "Lažni konsultant nudi 'garantovano odobrenje' granta uz avansnu proviziju. Provizija se plaća, odobrenje nikad ne dolazi, a naknade se umnožavaju dok meta ne odustane.",
    summary_en: "Fake consultant offers 'guaranteed grant approval' in exchange for an upfront commission. The commission is paid, approval never arrives, and fees multiply until the target gives up.",
    subtitle: {
      sr: "Lažni konsultant → garantovano odobrenje → provizija unapred → blokada → nova naknada → nestanak.",
      en: "Fake consultant → guaranteed approval → upfront commission → block → new fee → disappearance."
    },
    hasPage: true,
    overlaps: ["grant-fund-scam", "grant-intermediary-scam", "co-financing-fee-scam", "advance-fee-fraud", "impersonation-scam"],
    sources: []
  },

  "fake-training-certification-for-grants-scam": {
    title: "Prevara lažnom obukom za grantove",
    title_en: "Fake training certification for grants scam",
    summary_sr: "Napadač tvrdi da je obuka ili sertifikacija obavezan uslov za apliciranje za grant. Meta plaća naknadu, dobija nevažeći sertifikat, a serija 'akreditacijskih naknada' sledi.",
    summary_en: "Attacker claims training or certification is a mandatory condition for applying for a grant. Target pays the fee, receives an invalid certificate, and a series of 'accreditation fees' follows.",
    subtitle: {
      sr: "Lažni uslov obuke → uplata → lažni sertifikat → 'akreditacijska naknada' → rok aplikacije istekao → nestanak.",
      en: "Fake training requirement → payment → fake certificate → 'accreditation fee' → application deadline passed → disappearance."
    },
    hasPage: true,
    overlaps: ["grant-fund-scam", "consultant-guarantee-scam", "compliance-fee-scam", "co-financing-fee-scam", "advance-fee-fraud"],
    sources: []
  },

  "invoice-factoring-advance-scam": {
    title: "Prevara avansom faktoringa faktura",
    title_en: "Invoice factoring advance scam",
    summary_sr: "Lažna faktoring kompanija prihvata fakture, naplaćuje naknadu za obradu, ali avans nikad ne isplaćuje. Dostavljene fakture mogu biti zloupotrebljene za BEC prevaru.",
    summary_en: "Fake factoring company accepts invoices, charges a processing fee, but never disburses the advance. Submitted invoices may be misused for BEC fraud.",
    subtitle: {
      sr: "Lažna faktoring kompanija → naknada za obradu → avans blokiran → serija naknada → nestanak + rizik zloupotrebe faktura.",
      en: "Fake factoring company → processing fee → advance blocked → fee series → disappearance + invoice misuse risk."
    },
    hasPage: true,
    overlaps: ["advance-payment-guarantee-scam", "invoice-collection-scam", "advance-fee-fraud", "business-email-compromise", "kyc-aml-verification-fee-scam"],
    sources: []
  },

  "sponsorship-event-partnership-scam": {
    title: "Prevara sponzorstvom i partnerstvom za događaje",
    title_en: "Sponsorship event partnership scam",
    summary_sr: "Lažni organizator konferencije nudi sponzorski paket uz rezervacionu naknadu. Događaj ne postoji ili ne donosi obećane koristi, a naknada se ne vraća.",
    summary_en: "Fake conference organiser offers a sponsorship package with a reservation fee. The event does not exist or delivers none of the promised benefits and the fee is not refunded.",
    subtitle: {
      sr: "Lažni event → sponzorska ponuda → rezervaciona naknada → nestanak ili lažni događaj bez obećanih koristi.",
      en: "Fake event → sponsorship offer → reservation fee → disappearance or fake event without promised benefits."
    },
    hasPage: true,
    overlaps: ["project-partnership-fee-scam", "fake-ngo-partnership-scam", "advance-fee-fraud", "impersonation-scam", "co-financing-fee-scam"],
    sources: []
  },

  "spear-phishing": {
    title: "Spear phishing",
    title_en: "Spear phishing",
    summary_sr: "Ciljani phishing napad sa personalizovanom porukom baziranom na istraživanju žrtve — ime, uloga, kolega ili nedavni događaj.",
    summary_en: "Targeted phishing attack with a personalized message based on victim research — name, role, colleague or recent event.",
    subtitle: { sr: "Istraživanje žrtve → personalizovana poruka → lažni link/prilog → kompromitacija → lateralno kretanje.", en: "Victim research → personalized message → fake link/attachment → compromise → lateral movement." },
    hasPage: true,
    overlaps: ["phishing", "whaling", "impersonation-scam", "business-email-compromise", "account-takeover"],
    sources: []
  },

  "whaling": {
    title: "Whaling",
    title_en: "Whaling",
    summary_sr: "Ciljani phishing napad usmeren na direktore i rukovodioce. Poruke imitiraju internu komunikaciju i traže hitne transfere ili poverljive podatke.",
    summary_en: "Targeted phishing attack aimed at directors and executives. Messages mimic internal communication and request urgent transfers or confidential data.",
    subtitle: { sr: "Istraživanje rukovodioca → lažna interna poruka → hitni transfer/podaci → finansijska šteta.", en: "Executive research → fake internal message → urgent transfer/data → financial loss." },
    hasPage: true,
    overlaps: ["spear-phishing", "phishing", "business-email-compromise", "impersonation-scam", "account-takeover"],
    sources: []
  },

  "qr-code-sticker-scam": {
    title: "QR nalepnica prevara",
    title_en: "QR code sticker scam",
    summary_sr: "Napadač lepi lažni QR kod na parking automat, meni ili plakat, prekrivajući pravi kod. Korisnik plaća napadaču umesto legitimnom primaocu.",
    summary_en: "Attacker places a fake QR sticker over a real QR code on a parking meter, menu or poster. The user pays the attacker instead of the legitimate recipient.",
    subtitle: { sr: "Lažni QR nalepnica → lažna plaćanje stranica → unos kartice → krađa platnih podataka.", en: "Fake QR sticker → fake payment page → card entry → payment data theft." },
    hasPage: true,
    overlaps: ["qr-payment-scam", "parking-qr-scam", "payment-link-scam", "card-not-present-fraud"],
    sources: []
  },

  "domain-renewal-scam": {
    title: "Prevara sa obnovom domena",
    title_en: "Domain renewal scam",
    summary_sr: "Lažna faktura za obnovu domena sa visokom cenom ili preusmeravanjem na drugog registrara. Kompanija plaća ili nesvesno prenosi domen.",
    summary_en: "Fake invoice for domain renewal with inflated price or redirecting to another registrar. Company pays or unknowingly transfers the domain.",
    subtitle: { sr: "Lažno obaveštenje o isteku → lažna faktura → uplata → domen ne obnovljen ili prenet napadaču.", en: "Fake expiry notice → fake invoice → payment → domain not renewed or transferred to attacker." },
    hasPage: true,
    overlaps: ["directory-listing-scam", "invoice-fraud", "business-email-compromise", "impersonation-scam", "fake-seo-service-scam"],
    sources: []
  },

  "directory-listing-scam": {
    title: "Prevara sa poslovnim imenicima",
    title_en: "Directory listing scam",
    summary_sr: "Firma prima fakturu za listu u poslovnom imeniku koji ne postoji ili nema vrednosti. Faktura izgleda kao obnova prethodne usluge.",
    summary_en: "Company receives an invoice for listing in a business directory that does not exist or has no value. The invoice looks like a renewal of a previous service.",
    subtitle: { sr: "Lažni imenik/oglas → faktura za listiranje → uplata → bez vrednosti ili usluga nije isporučena.", en: "Fake directory/ad → listing invoice → payment → no value or service not delivered." },
    hasPage: true,
    overlaps: ["domain-renewal-scam", "fake-award-scam", "fake-seo-service-scam", "invoice-fraud", "impersonation-scam"],
    sources: []
  },

  "fake-seo-service-scam": {
    title: "Lažna SEO usluga",
    title_en: "Fake SEO service scam",
    summary_sr: "Agencija obećava visoke pozicije na Google uz mesečne naknade ali ne isporučuje rezultate. Ugovor se ne može raskinuti bez penala.",
    summary_en: "Agency promises top Google rankings with monthly fees but delivers no results. The contract cannot be cancelled without penalties.",
    subtitle: { sr: "Agresivni kontakt → obećanje pozicija → ugovor/pretplata → bez rezultata → nestanak ili nove naknade.", en: "Aggressive contact → ranking promise → contract/subscription → no results → disappearance or new fees." },
    hasPage: true,
    overlaps: ["directory-listing-scam", "domain-renewal-scam", "fake-award-scam", "invoice-fraud", "impersonation-scam"],
    sources: []
  },

  "fake-award-scam": {
    title: "Lažne nagrade za firme",
    title_en: "Fake award scam",
    summary_sr: "Firma dobija obaveštenje o nagradi uz naknadu za sertifikat ili publicitet. Nagrada nije proverljiva i nema marketinšku vrednost.",
    summary_en: "Company receives an award notification with a fee for a certificate or publicity package. The award is unverifiable and has no marketing value.",
    subtitle: { sr: "Obaveštenje o nagradi → sertifikat/publicity paket → uplata naknade → bezvredna nagrada.", en: "Award notification → certificate/publicity package → fee payment → worthless award." },
    hasPage: true,
    overlaps: ["directory-listing-scam", "fake-seo-service-scam", "domain-renewal-scam", "invoice-fraud", "impersonation-scam"],
    sources: []
  },

  "fake-insurance-scam": {
    title: "Lažno osiguranje",
    title_en: "Fake insurance scam",
    summary_sr: "Polisa se prodaje po niskim cenama ali ne isplaćuje odštetu jer kompanija nije registrovana ili polica nije validna.",
    summary_en: "Policy sold at low prices but does not pay out because the company is not registered or the policy is not valid.",
    subtitle: { sr: "Agresivni prodajni kontakt → jeftina polisa → uplata premija → odbijen zahtev ili nestanak kompanije.", en: "Aggressive sales contact → cheap policy → premium payment → denied claim or company disappearance." },
    hasPage: true,
    overlaps: ["advance-fee-fraud", "impersonation-scam", "investment-fraud", "fake-broker-scam", "clone-firm-scam"],
    sources: []
  },

  "payday-loan-scam": {
    title: "Prevara sa kratkoročnim kreditom",
    title_en: "Payday loan scam",
    summary_sr: "Lažna firma nudi hitni kredit ali traži avansne naknade pre isplate. Kredit nikad ne stiže, naknade se gube.",
    summary_en: "Fake firm offers urgent loan but demands advance fees before disbursement. The loan never arrives and the fees are lost.",
    subtitle: { sr: "Lažna kreditna firma → odobrenje kredita → avansna naknada → nestanak firme ili novi zahtevi.", en: "Fake loan firm → loan approval → advance fee → firm disappearance or new demands." },
    hasPage: true,
    overlaps: ["debt-relief-scam", "credit-repair-scam", "advance-fee-fraud", "loan-scam", "impersonation-scam"],
    sources: []
  },

  "debt-relief-scam": {
    title: "Prevara sa oprostom duga",
    title_en: "Debt relief scam",
    summary_sr: "Firma obećava smanjenje ili brisanje duga uz avansne naknade ali ne isporučuje rezultate.",
    summary_en: "Firm promises debt reduction or elimination with advance fees but delivers no results.",
    subtitle: { sr: "Kontakt sa osobom u dugu → obećanje smanjenja → uplata naknade → bez rezultata ili nestanak.", en: "Contact with indebted person → reduction promise → fee payment → no results or disappearance." },
    hasPage: true,
    overlaps: ["payday-loan-scam", "credit-repair-scam", "advance-fee-fraud", "loan-scam", "impersonation-scam"],
    sources: []
  },

  "credit-repair-scam": {
    title: "Prevara sa popravkom kreditnog skora",
    title_en: "Credit repair scam",
    summary_sr: "Firma obećava brzo brisanje negativnih unosa iz kreditnog izveštaja uz visoke naknade. Rezultati su privremeni ili nepostojeći.",
    summary_en: "Firm promises quick removal of negative entries from credit report for high fees. Results are temporary or nonexistent.",
    subtitle: { sr: "Loš kreditni skor → lažna firma za popravku → uplata naknade → lažni rezultati ili nestanak.", en: "Bad credit score → fake repair firm → fee payment → fake results or disappearance." },
    hasPage: true,
    overlaps: ["payday-loan-scam", "debt-relief-scam", "advance-fee-fraud", "loan-scam", "identity-theft"],
    sources: []
  },

  "investment-fraud": {
    title: "Investiciona prevara",
    title_en: "Investment fraud",
    summary_sr: "Investiciona prevara i dalje počiva na obećanju prinosa, hitnosti i prividu stručnosti, ali danas može biti pojačana lažnim promo-snimcima, uverljivijim analizama, botovima za dopisivanje i lažnim preporukama poznatih ličnosti. Veštačka inteligencija ne menja cilj; i dalje treba da uplatite novac pre nego što proverite ko stoji iza ponude i kako zapravo funkcioniše ulaganje.",
    summary_en: "Investment fraud still relies on promised returns, urgency, and the appearance of expertise, but today it can be reinforced with fake promo clips, more polished analysis, chat bots, and false celebrity endorsements. Artificial intelligence does not change the goal; it still pushes the victim to send money before verifying who is behind the offer and how the investment actually works.",
    subtitle: { sr: "Kontakt → obećanje prinosa → urgentnost → uplata → bez prinosa → nestanak ili novi zahtevi.", en: "Contact → return promise → urgency → payment → no returns → disappearance or new demands." },
    hasPage: true,
    overlaps: ["fake-broker-scam", "clone-firm-scam", "forex-scam", "binary-options-scam", "crypto-scam", "ponzi-scheme"],
    sources: []
  },

  "fake-broker-scam": {
    title: "Lažni broker",
    title_en: "Fake broker scam",
    summary_sr: "Lažni broker i dalje koristi navodne profite i ličnog savetnika da izvuče veće uplate, ali danas taj savetnik može imati ubedljiviji glas, urednije poruke, pa čak i lažni video identitet. Ono što se ne menja jeste ciljna radnja: uplatite još, verujte prikazanom profitu i ne proveravajte nezavisno platformu, licencu i mogućnost isplate.",
    summary_en: "A fake broker still uses visible profits and a personal adviser to pull in larger deposits, but today that adviser may have a more convincing voice, cleaner messages, or even a fake video identity. What does not change is the target action: send more money, trust the displayed profits, and skip independent checks of the platform, the licence, and the withdrawal path.",
    subtitle: { sr: "Reklama/kontakt → registracija → mala uplata → lažni profit → veća uplata → nestanak platforme.", en: "Ad/contact → registration → small deposit → fake profit → larger deposit → platform disappearance." },
    hasPage: true,
    overlaps: ["investment-fraud", "clone-firm-scam", "forex-scam", "binary-options-scam", "crypto-scam", "recovery-scam"],
    sources: []
  },

  "clone-firm-scam": {
    title: "Prevara sa klonom firme",
    title_en: "Clone firm scam",
    summary_sr: "Lažna firma kopira ime i registraciju legitimne regulisane kompanije i nudi investicije ili usluge. Kontakt detalji se razlikuju.",
    summary_en: "Fake firm copies the name and registration of a legitimate regulated company and offers investments or services. Contact details differ.",
    subtitle: { sr: "Lažna firma → lažna licenca/registracija → uplata → nestanak ili odbijanje isplate.", en: "Fake firm → fake license/registration → payment → disappearance or withdrawal refusal." },
    hasPage: true,
    overlaps: ["fake-broker-scam", "investment-fraud", "forex-scam", "impersonation-scam", "advance-fee-fraud"],
    sources: []
  },

  "forex-scam": {
    title: "Forex prevara",
    title_en: "Forex scam",
    summary_sr: "Lažna trading platforma ili neregulisani broker prima depozite i odbija isplate ili nestaje sa novcem.",
    summary_en: "Fake trading platform or unregulated broker accepts deposits and refuses withdrawals or disappears with funds.",
    subtitle: { sr: "Forex reklama → registracija → depozit → lažni profit → blokirano povlačenje → nestanak.", en: "Forex ad → registration → deposit → fake profit → blocked withdrawal → disappearance." },
    hasPage: true,
    overlaps: ["binary-options-scam", "fake-broker-scam", "investment-fraud", "clone-firm-scam", "recovery-scam"],
    sources: []
  },

  "binary-options-scam": {
    title: "Prevara sa binarnim opcijama",
    title_en: "Binary options scam",
    summary_sr: "Neregulisana platforma manipuliše rezultatima tradinga da bi osigurala gubitke korisnika.",
    summary_en: "Unregulated platform manipulates trading results to ensure user losses.",
    subtitle: { sr: "Reklama visokih prinosa → registracija → depozit → manipulisani rezultati → veći depozit → nestanak.", en: "High return ad → registration → deposit → manipulated results → larger deposit → disappearance." },
    hasPage: true,
    overlaps: ["forex-scam", "fake-broker-scam", "investment-fraud", "clone-firm-scam", "recovery-scam"],
    sources: []
  },

  "account-recovery-scam": {
    title: "Prevara sa oporavkom naloga",
    title_en: "Account recovery scam",
    summary_sr: "Lažna podrška nudi oporavak hakovanog naloga uz naknadu ili tražeći pristupne podatke. Meta gubi i nalog i novac.",
    summary_en: "Fake support offers recovery of a hacked account for a fee or by requesting access credentials. The victim loses both the account and money.",
    subtitle: { sr: "Hakovani nalog → lažna podrška → naknada ili podaci → gubitak novca ili novi napad.", en: "Hacked account → fake support → fee or credentials → money loss or new attack." },
    hasPage: true,
    overlaps: ["social-media-hijack-scam", "account-takeover", "phishing", "impersonation-scam", "recovery-scam"],
    sources: []
  },

  "social-media-hijack-scam": {
    title: "Preuzimanje naloga na društvenim mrežama",
    title_en: "Social media hijack scam",
    summary_sr: "Preuzimanje naloga na društvenim mrežama i dalje služi da se poverenje pratioca pretvori u novu prevaru, ali danas kompromitovan nalog može slati ubedljivije poruke, lažne glasovne beleške ili generisane objave koje deluju kao pravi vlasnik. Stvarna meta ostaje ista: navesti pratioce da pošalju novac, kliknu na link, unesu podatke ili predaju sopstveni kod za verifikaciju.",
    summary_en: "A hijacked social media account still turns follower trust into a second scam, but today the compromised profile can send more convincing messages, fake voice notes, or generated posts that feel closer to the real owner. The real target action stays the same: get followers to send money, click a link, enter data, or hand over their own verification code.",
    subtitle: { sr: "Fišing/lozinka → pristup nalogu → lažne ponude pratiocima → finansijska krađa.", en: "Phishing/password → account access → fake offers to followers → financial theft." },
    hasPage: true,
    overlaps: ["account-recovery-scam", "account-takeover", "phishing", "influencer-impersonation-scam", "fake-celebrity-scam"],
    sources: []
  },

  "influencer-impersonation-scam": {
    title: "Lažni influenser",
    title_en: "Influencer impersonation scam",
    summary_sr: "Napadač kreira lažni nalog koji oponaša poznatog influensera i promoviše lažne investicije ili giveawaye.",
    summary_en: "Attacker creates a fake account mimicking a known influencer and promotes fake investments or giveaways.",
    subtitle: { sr: "Lažni nalog influensera → lažna investicija/giveaway → uplata → nestanak.", en: "Fake influencer account → fake investment/giveaway → payment → disappearance." },
    hasPage: true,
    overlaps: ["fake-celebrity-scam", "social-media-hijack-scam", "ai-voice-clone-scam", "impersonation-scam", "investment-fraud"],
    sources: []
  },

  "fake-celebrity-scam": {
    title: "Lažna zvezda",
    title_en: "Fake celebrity scam",
    summary_sr: "Napadač se predstavlja kao poznata ličnost i kontaktira žrtvu nudeći ulaganje ili ličnu vezu uz finansijsku komponentu.",
    summary_en: "Attacker poses as a famous person and contacts victims offering investment or a personal connection with a financial component.",
    subtitle: { sr: "Lažni nalog zvezde → personalizovana poruka → poverenje → uplata/investicija → blokiranje.", en: "Fake celebrity account → personalized message → trust building → payment/investment → blocking." },
    hasPage: true,
    overlaps: ["influencer-impersonation-scam", "ai-voice-clone-scam", "social-media-hijack-scam", "romantic-scam", "investment-fraud"],
    sources: []
  },

  "ai-voice-clone-scam": {
    title: "Prevara sa kloniranim glasom uz pomoć veštačke inteligencije",
    title_en: "AI voice clone scam",
    summary_sr: "Ova prevara koristi nekoliko sekundi ili minuta nečijeg javnog glasa da napravi hitan audio zahtev za novac, kodove ili osetljivu pomoć. Za razliku od šire kategorije lažnih snimaka, ovde nema vizuelnog sloja; cela obmana se oslanja na to da poznat glas kod žrtve ugasi potrebu za dodatnom proverom identiteta.",
    summary_en: "This scam uses a few seconds or minutes of someone’s public voice to create an urgent audio request for money, codes, or sensitive help. Unlike the broader deepfake category, there is no visual layer here; the whole deception relies on a familiar voice making the victim feel that no further identity check is needed.",
    subtitle: { sr: "Poznat glas kao lažna potvrda identiteta: audio gradi poverenje, a hitnost gura uplatu ili kod.", en: "A familiar voice as fake identity proof: audio builds trust while urgency pushes payment or a code." },
    hasPage: true,
    overlaps: ["fake-celebrity-scam", "influencer-impersonation-scam", "impersonation-scam", "grandparent-scam", "family-emergency-scam"],
    sources: []
  },

  "home-improvement-scam": {
    title: "Prevara sa adaptacijom stana",
    title_en: "Home improvement scam",
    summary_sr: "Izvođač uzima avans za radove koji nisu početi ili ne budu završeni prema dogovoru. Kontakt se prekida.",
    summary_en: "Contractor takes a deposit for work that is never started or not completed as agreed. Contact is then cut off.",
    subtitle: { sr: "Ponuda za radove → visoki avans → radovi ne počnu ili se ne završe → nestanak izvođača.", en: "Work offer → high advance → work not started or not completed → contractor disappearance." },
    hasPage: true,
    overlaps: ["moving-scam", "deposit-scam", "advance-fee-fraud", "escrow-scam", "real-estate-purchase-scam", "door-to-door-home-repair-scam", "locksmith-scam", "fake-insulation-scam"],
    sources: []
  },

  "moving-scam": {
    title: "Prevara sa selidbom",
    title_en: "Moving scam",
    summary_sr: "Kompanija za selidbu uzima predmete kao taoce i traži viši iznos od dogovorenog za isporuku.",
    summary_en: "Moving company takes belongings hostage and demands higher than agreed amount for delivery.",
    subtitle: { sr: "Ponuda → ugovor/dogovor → preuzimanje predmeta → tražnja višeg iznosa → predmeti blokirani.", en: "Offer → contract/agreement → taking belongings → demand for higher amount → belongings held hostage." },
    hasPage: true,
    overlaps: ["home-improvement-scam", "deposit-scam", "advance-fee-fraud", "escrow-scam", "real-estate-purchase-scam"],
    sources: []
  },

  "mortgage-scam": {
    title: "Hipotekarna prevara",
    title_en: "Mortgage scam",
    summary_sr: "Lažni broker ili savetnik uzima naknade za uređivanje hipoteke koja nikad nije odobrena.",
    summary_en: "Fake broker or advisor collects fees for arranging a mortgage that is never approved.",
    subtitle: { sr: "Lažni broker → obećanje hipoteke → naknade za obradu → nestanak ili odbijanje.", en: "Fake broker → mortgage promise → processing fees → disappearance or denial." },
    hasPage: true,
    overlaps: ["deposit-scam", "real-estate-investment-scam", "home-improvement-scam", "advance-fee-fraud", "clone-firm-scam"],
    sources: []
  },

  "deposit-scam": {
    title: "Prevara sa depozitom",
    title_en: "Deposit scam",
    summary_sr: "Lažni oglas za iznajmljivanje traži depozit bez ikakve imovine iza njega. Novac se ne vraća.",
    summary_en: "Fake rental listing requests a deposit with no actual property behind it. Money is not returned.",
    subtitle: { sr: "Lažni oglas → lični kontakt → urgentnost → uplata depozita → nestanak.", en: "Fake listing → personal contact → urgency → deposit payment → disappearance." },
    hasPage: true,
    overlaps: ["real-estate-purchase-scam", "real-estate-investment-scam", "mortgage-scam", "advance-fee-fraud", "escrow-scam"],
    sources: []
  },

  "real-estate-investment-scam": {
    title: "Prevara sa investiranjem u nekretnine",
    title_en: "Real estate investment scam",
    summary_sr: "Projekat prikuplja investicije za nekretnine koje ne postoje ili nisu završene. Povrat investicije nikad ne stiže.",
    summary_en: "Project collects investments for properties that do not exist or are never completed. Return on investment never arrives.",
    subtitle: { sr: "Prezentacija projekta → obećanje prinosa → uplata → gradnja nikad ne počne → nestanak.", en: "Project presentation → return promise → payment → construction never starts → disappearance." },
    hasPage: true,
    overlaps: ["deposit-scam", "mortgage-scam", "home-improvement-scam", "investment-fraud", "advance-fee-fraud"],
    sources: []
  },

  "seed-phrase-scam": {
    core: true,
    title: { sr: "Prevara sa frazom za oporavak novčanika", en: "Seed phrase scam" },
    title_en: "Seed phrase scam",
    title_sr: "Prevara sa frazom za oporavak novčanika",
    summary_en: "Someone asks you to type, photograph, or \"verify\" your wallet recovery words in a form, chat, or fake support page. The phrase gives full control of the wallet. Signal: any request for the full recovery phrase outside your own offline backup routine.",
    summary_sr: "Neko traži da ukucate, uslikate ili proverite reči za oporavak novčanika u formi, četu ili lažnoj strani za podršku. Fraza daje punu kontrolu nad novčanikom. Signal: bilo koji zahtev za celom recovery frazom van vaše sopstvene offline rezerve.",
    subtitle: {
      sr: "Kontakt → lažna podrška ili bezbednosna provera → traženje seed fraze → prazan novčanik.",
      en: "Contact → fake support or \"security check\" → seed phrase requested → empty wallet."
    },
    hasPage: true,
    overlaps: ["wallet-drainer", "phishing", "fake-crypto-exchange-scam", "recovery-scam", "account-takeover"],
    sources: []
  },

  "wallet-approval-scam": {
    core: true,
    title: { sr: "Prevara sa odobrenjem novčanika", en: "Wallet approval scam" },
    title_en: "Wallet approval scam",
    title_sr: "Prevara sa odobrenjem novčanika",
    summary_en: "A site or app asks you to approve token or NFT access that is broader than the action shown on screen. Unlimited approvals let a contract move assets later. Signal: approval scope is \"unlimited\" or applies to your whole collection for a small claimed action.",
    summary_sr: "Sajt ili aplikacija traži odobrenje za pristup tokenima ili NFT-ovima šire nego što akcija na ekranu sugeriše. Neograničena odobrenja omogućavaju ugovoru da kasnije premesti sredstva. Signal: opseg odobrenja je neograničen ili važi za celu kolekciju zbog male navodne akcije.",
    subtitle: {
      sr: "Lažni sajt → povezivanje novčanika → zahtev za široko odobrenje → automatsko pražnjenje.",
      en: "Fake site → wallet connect → broad approval request → automated drain."
    },
    hasPage: true,
    overlaps: ["wallet-drainer", "airdrop-scam", "nft-scam", "phishing", "seed-phrase-scam"],
    sources: []
  },

  "fake-trading-platform-scam": {
    core: true,
    title: { sr: "Lažna platforma za trejding", en: "Fake trading platform scam" },
    title_en: "Fake trading platform scam",
    title_sr: "Lažna platforma za trejding",
    summary_en: "You register on a platform that shows simulated profits and blocks real withdrawals. Fees and taxes are invented to extract more payments. Signal: withdrawal always fails until you pay another unplanned charge.",
    summary_sr: "Registrujete se na platformi koja prikazuje simulirane profite i blokira pravo podizanje sredstava. Naknade i porezi se smišljaju da izvuku još uplata. Signal: podizanje uvek ne uspeva dok ne platite još jednu neplaniranu stavku.",
    subtitle: {
      sr: "Oglas → registracija → uplata → lažni profit → blokada povlačenja → novi troškovi.",
      en: "Ad → registration → deposit → fake profit → withdrawal blocked → new fees."
    },
    hasPage: true,
    overlaps: ["fake-broker-scam", "investment-fraud", "pig-butchering", "fake-crypto-exchange-scam", "crypto-scam"],
    sources: []
  },

  "task-scam": {
    core: true,
    title: { sr: "Prevara sa zadacima (task)", en: "Task scam" },
    title_en: "Task scam",
    title_sr: "Prevara sa zadacima (task)",
    summary_en: "Task scams simulate work by paying small amounts for clicks, ratings, or micro-actions until the victim trusts the dashboard and the visible balance. The real threshold appears when premium tasks, balance release, or higher tiers require a deposit from the worker to the platform. Unlike generic work-from-home ads, the scam depends on fake progress, visible earnings, and repeated top-ups to keep the victim chasing money already shown on screen. Signal: the platform starts by paying a little, then demands your money to unlock the rest of your own \"earnings.\"",
    summary_sr: "Task prevare glume rad tako što prvo isplaćuju male iznose za klikove, ocene ili mikro-zadatke, sve dok žrtva ne poveruje kontrolnoj tabli i prikazanom saldu. Pravi prag dolazi kada premium zadaci, oslobađanje salda ili viši nivo zahtevaju depozit od samog radnika ka platformi. Za razliku od opštih oglasa za rad od kuće, ova prevara zavisi od lažnog napretka, vidljive zarade i ponovljenih dopuna koje žrtvu teraju da juri novac već prikazan na ekranu. Signal: platforma najpre nešto isplati, a zatim traži vaš novac da biste otključali ostatak sopstvene zarade.",
    subtitle: {
      sr: "Lažna zarada na ekranu postaje mamac za sledeći depozit: rad služi da opravda uplatu, ne obrnuto.",
      en: "Fake on-screen earnings become bait for the next deposit: the work exists to justify the payment, not the other way around."
    },
    hasPage: true,
    overlaps: ["job-scam", "work-from-home-scam", "advance-fee-fraud", "money-mule-recruitment", "pig-butchering"],
    sources: []
  },

  "web3-job-wallet-drain-scam": {
    core: true,
    title: { sr: "Web3 posao koji prazni novčanik", en: "Web3 job wallet drain scam" },
    title_en: "Web3 job wallet drain scam",
    title_sr: "Web3 posao koji prazni novčanik",
    summary_en: "A hiring chat sends a link to \"test\" a dApp, sign a contract, or connect a wallet for payroll. The signature or approval drains crypto. Signal: job onboarding requires wallet signatures or seed backup on a third-party site.",
    summary_sr: "Čet za zapošljavanje šalje link da testirate dApp, potpišete ugovor ili povežete novčanik za platu. Potpis ili odobrenje prazni kripto. Signal: zapošljavanje traži potpise novčanika ili rezervu seeda na tuđem sajtu.",
    subtitle: {
      sr: "Lažni oglas → intervju u četu → link za alat → potpis/odobrenje → drain.",
      en: "Fake ad → chat interview → \"tool\" link → signature/approval → drain."
    },
    hasPage: true,
    overlaps: ["wallet-drainer", "job-scam", "task-scam", "phishing", "wallet-approval-scam"],
    sources: []
  },

  "fake-cold-wallet-replacement-scam": {
    core: true,
    title: { sr: "Lažna zamena hardverskog novčanika", en: "Fake cold wallet replacement scam" },
    title_en: "Fake cold wallet replacement scam",
    title_sr: "Lažna zamena hardverskog novčanika",
    summary_en: "You receive an unsolicited package claiming to be a security replacement for your hardware wallet, or support says to swap devices. The enclosed wallet is preconfigured to steal funds. Signal: unexpected hardware arrives without you opening a ticket with the real vendor.",
    summary_sr: "Dobijate neočekivani paket koji navodno zamenjuje hardverski novčanik iz bezbednosnih razloga, ili podrška kaže da zamenite uređaj. Uređaj u paketu je unapred podešen da ukrade sredstva. Signal: hardver stiže bez vašeg tiketa kod pravog prodavca.",
    subtitle: {
      sr: "Poruka ili paket → lažna zamena → podešen uređaj ili uputstvo za migraciju → krađa.",
      en: "Message or package → fake replacement → preset device or \"migration\" steps → theft."
    },
    hasPage: true,
    overlaps: ["wallet-drainer", "tech-support-scam", "impersonation-scam", "phishing", "seed-phrase-scam"],
    sources: []
  },

  "authorized-push-payment-scam": {
    core: true,
    title: { sr: "Prevara potvrđenim plaćanjem iz aplikacije banke", en: "Authorized push payment (APP) scam" },
    title_en: "Authorized push payment (APP) scam",
    title_sr: "Prevara potvrđenim plaćanjem iz aplikacije banke",
    summary_en: "A caller or message convinces you to authorize a bank payment yourself in your app, often after a fake fraud alert. Because you approved it, the bank may treat it as authorized. Signal: instructions to open the banking app and confirm a payment to a \"safe\" or \"holding\" account while on the call.",
    summary_sr: "Pozivalac ili poruka ubedi da sami autorizujete uplatu u aplikaciji banke, često posle lažnog upozorenja o prevari. Pošto ste potvrdili, banka to može tretirati kao ovlašćenu uplatu. Signal: uputstvo da otvorite bankarsku aplikaciju i potvrdite uplatu na siguran račun tokom poziva.",
    subtitle: {
      sr: "Kontakt → lažni incident → pritisak → potvrda u aplikaciji → novac kod prevaranta.",
      en: "Contact → fake incident → pressure → in-app confirmation → money to scammer."
    },
    hasPage: true,
    overlaps: ["fake-call-scam", "payment-diversion", "account-takeover", "phishing", "impersonation-scam"],
    sources: []
  },

  "merchant-terminal-replacement-scam": {
    core: true,
    title: { sr: "Prevara zamene POS terminala", en: "Merchant terminal replacement scam" },
    title_en: "Merchant terminal replacement scam",
    title_sr: "Prevara zamene POS terminala",
    summary_en: "Someone poses as your acquirer or bank and ships a \"new\" payment terminal or asks you to install an update that captures card data or redirects settlements. Signal: terminal swap was not initiated through your known account manager or official portal.",
    summary_sr: "Neko se predstavlja kao vaš akviziter ili banka i šalje novi platni terminal ili traži instalaciju ažuriranja koje hvata podatke sa kartice ili menja obračun. Signal: zamena terminala nije pokrenuta preko poznatog menadžera naloga ili zvaničnog portala.",
    subtitle: {
      sr: "Poziv ili kurir → lažna zamena terminala → krađa podataka ili sredstava.",
      en: "Call or courier → fake terminal swap → data or funds theft."
    },
    hasPage: true,
    overlaps: ["fake-call-scam", "pos-skimming", "card-skimming", "payment-diversion", "impersonation-scam"],
    sources: []
  },

  "ai-executive-voice-payment-scam": {
    core: true,
    title: { sr: "Prevara sa glasom direktora uz pomoć veštačke inteligencije", en: "AI executive voice payment scam" },
    title_en: "AI executive voice payment scam",
    title_sr: "Prevara sa glasom direktora uz pomoć veštačke inteligencije",
    summary_en: "A cloned executive voice is used to force an urgent transfer, often after a fake email thread or just before the final payment step. This is still CEO fraud at its core; artificial intelligence mainly makes the authority feel immediate and personal enough to bypass normal approvals.",
    summary_sr: "Klonirani glas direktora koristi se da iznudi hitan transfer, često posle lažne imejl prepiske ili tik pred završni korak plaćanja. U suštini je to i dalje CEO prevara; veštačka inteligencija pre svega čini autoritet neposrednim i ličnim dovoljno da se preskoče redovne procedure odobrenja.",
    subtitle: {
      sr: "Lažni glas → hitnost → zaobilazak procedure → uplata → otkrivanje kasno.",
      en: "Fake voice → urgency → bypass procedure → payment → late discovery."
    },
    hasPage: true,
    overlaps: ["ceo-fraud", "fake-call-scam", "payment-diversion", "business-email-compromise", "impersonation-scam"],
    sources: []
  },

  "ai-invoice-voice-confirmation-scam": {
    core: true,
    title: { sr: "Prevara sa lažnom glasovnom potvrdom fakture uz pomoć veštačke inteligencije", en: "AI invoice voice confirmation scam" },
    title_en: "AI invoice voice confirmation scam",
    title_sr: "Prevara sa lažnom glasovnom potvrdom fakture uz pomoć veštačke inteligencije",
    summary_en: "After payment details are changed on an invoice, a synthetic supplier voice is used to calm doubts and confirm the new bank account. The underlying scam is still invoice or vendor-payment fraud; the artificial intelligence layer mainly turns the phone call into fake proof that the change is legitimate.",
    summary_sr: "Posle izmene podataka za plaćanje na fakturi, sintetički glas navodnog dobavljača služi da umiri sumnju i potvrdi novi račun. Bazna prevara je i dalje prevara sa fakturom ili isplatom dobavljaču; sloj veštačke inteligencije pre svega pretvara telefonski poziv u lažni dokaz da je promena legitimna.",
    subtitle: {
      sr: "Izmenjena faktura → lažni poziv potvrde → uplata → otkrivanje kod dobavljača.",
      en: "Altered invoice → fake \"confirmation\" call → payment → discovery at supplier."
    },
    hasPage: true,
    overlaps: ["invoice-fraud", "vendor-email-compromise", "ceo-fraud", "fake-call-scam", "business-email-compromise"],
    sources: []
  },

  "deepfake-executive-video-call-scam": {
    core: true,
    title: { sr: "Prevara sa lažnim video-pozivom rukovodioca", en: "Deepfake executive video call scam" },
    title_en: "Deepfake executive video call scam",
    title_sr: "Prevara sa lažnim video-pozivom rukovodioca",
    summary_en: "A deepfake executive video call is used to make the order feel undeniable right before an IBAN change, payment, or data release. The logic is still the same as CEO fraud or payment diversion; the visual layer simply makes the request feel more internal, more urgent, and harder to challenge in the moment.",
    summary_sr: "Lažni video-poziv rukovodioca služi da zahtev deluje neoborivo baš pred promenu IBAN-a, uplatu ili slanje podataka. Logika je i dalje ista kao kod CEO prevare ili preusmeravanja plaćanja; vizuelni sloj samo čini da zahtev deluje internije, hitnije i teže za osporavanje u tom trenutku.",
    subtitle: {
      sr: "Video autoritet → hitno odobrenje → uplata ili podaci.",
      en: "Video authority → rushed approval → payment or data."
    },
    hasPage: true,
    tags: ["AI", "video", "posao"],
    overlaps: ["ceo-fraud", "business-email-compromise", "vendor-email-compromise", "ai-executive-voice-payment-scam", "invoice-fraud", "phishing"],
    sources: [
      { name: "FBI IC3", url: "https://www.ic3.gov/" },
      { name: "FTC – What to know about impersonator scams", url: "https://consumer.ftc.gov/articles/what-know-about-impersonator-scams" }
    ]
  },

  "deepfake-celebrity-endorsement-scam": {
    core: true,
    title: { sr: "Prevara sa lažnim snimkom poznate ličnosti", en: "Deepfake celebrity endorsement scam" },
    title_en: "Deepfake celebrity endorsement scam",
    title_sr: "Prevara sa lažnim snimkom poznate ličnosti",
    summary_en: "A deepfake celebrity endorsement scam uses a famous face as mass-market credibility for ads, streams, giveaways, or investment pitches that would otherwise look too crude to trust. The target action is still ordinary and dangerous: pay, register, or connect something because the victim treats the clip as proof that the celebrity truly stands behind the offer.",
    summary_sr: "Prevara sa lažnom podrškom poznate ličnosti koristi poznato lice kao masovni kredibilitet za oglase, prenose uživo, nagradne igre ili investicione ponude koje bi bez toga delovale previše sirovo da im se veruje. Ciljna radnja i dalje je obična i opasna: platiti, registrovati se ili nešto povezati zato što žrtva snimak doživljava kao dokaz da ta osoba zaista stoji iza ponude.",
    subtitle: {
      sr: "Lažni lik → lažna garancija → uplata.",
      en: "Fake likeness → false guarantee → payment."
    },
    hasPage: true,
    tags: ["AI", "deepfake", "investicije"],
    overlaps: ["fake-celebrity-scam", "influencer-impersonation-scam", "crypto-scam", "advance-fee-fraud", "phishing", "recovery-scam"],
    sources: [
      { name: "FBI IC3", url: "https://www.ic3.gov/" },
      { name: "FTC – How to avoid scams that use artificial intelligence", url: "https://consumer.ftc.gov/articles/how-avoid-scams-use-artificial-intelligence" }
    ]
  },

  "ai-family-emergency-voice-scam": {
    core: true,
    title: { sr: "Prevara sa glasom člana porodice uz pomoć veštačke inteligencije", en: "AI family emergency voice scam" },
    title_en: "AI family emergency voice scam",
    title_sr: "Prevara sa glasom člana porodice uz pomoć veštačke inteligencije",
    summary_en: "A synthetic family voice is used to make a crisis sound immediately real before the victim can stop, think, or call back on a known number. The base scam is still a family emergency or grandparent scam; artificial intelligence mainly removes the old doubt that the voice on the line might not be the loved one.",
    summary_sr: "Sintetički glas člana porodice koristi se da kriza odmah zvuči stvarno pre nego što žrtva stigne da zastane, razmisli ili pozove poznati broj. Bazna prevara je i dalje porodična hitna situacija ili prevara s unukom; veštačka inteligencija pre svega uklanja staru sumnju da glas na liniji možda nije voljena osoba.",
    subtitle: {
      sr: "Klon glasa → hitnina → tajnost → uplata.",
      en: "Voice clone → urgency → secrecy → payment."
    },
    hasPage: true,
    tags: ["AI", "glas", "porodica"],
    overlaps: ["ai-voice-clone-scam", "family-emergency-scam", "grandparent-scam", "gift-card-scam", "vishing", "impersonation-scam"],
    sources: [
      { name: "FBI IC3", url: "https://www.ic3.gov/" },
      { name: "FTC – How to avoid scams that use artificial intelligence", url: "https://consumer.ftc.gov/articles/how-avoid-scams-use-artificial-intelligence" }
    ]
  },

  "ai-lawyer-police-callback-scam": {
    core: true,
    title: { sr: "Prevara sa pozivom lažnog advokata ili policije uz pomoć veštačke inteligencije", en: "AI lawyer or police callback scam" },
    title_en: "AI lawyer or police callback scam",
    title_sr: "Prevara sa pozivom lažnog advokata ili policije uz pomoć veštačke inteligencije",
    summary_en: "The victim is pushed to call back a supposed station, office, or lawyer, only to reach a fake authority voice that sounds organized and official. The scam still follows classic authority fraud: create fear, turn the callback into false reassurance, and then ask for payment, data, or secrecy.",
    summary_sr: "Žrtva se navodi da sama uzvrati poziv navodnoj stanici, kancelariji ili advokatu, a zapravo dobija lažni autoritet koji zvuči organizovano i službeno. Prevara i dalje prati klasični obrazac autoriteta: stvoriti strah, pretvoriti povratni poziv u lažnu potvrdu i zatim tražiti uplatu, podatke ili tajnost.",
    subtitle: {
      sr: "Institucionalni ton → lažni broj povratnog poziva → uplata.",
      en: "Institutional tone → fake callback number → payment."
    },
    hasPage: true,
    tags: ["AI", "glas", "autoritet"],
    overlaps: ["police-impersonation", "government-impersonation", "family-emergency-scam", "ai-voice-clone-scam", "vishing", "recovery-scam"],
    sources: [
      { name: "FBI IC3", url: "https://www.ic3.gov/" },
      { name: "FTC – What to know about impersonator scams", url: "https://consumer.ftc.gov/articles/what-know-about-impersonator-scams" }
    ]
  },

  "ai-multilingual-authority-scam": {
    core: true,
    title: { sr: "Prevara sa višejezičnim glasom lažnog autoriteta uz pomoć veštačke inteligencije", en: "AI multilingual authority scam" },
    title_en: "AI multilingual authority scam",
    title_sr: "Prevara sa višejezičnim glasom lažnog autoriteta uz pomoć veštačke inteligencije",
    summary_en: "This scam uses fluent language switching and a synthetic official voice to make customs, border control, or an international office sound more believable to people dealing with travel, shipments, or work abroad. The goal is still the classic one: create pressure through authority and then demand a fee, deposit, or urgent verification.",
    summary_sr: "Ova prevara koristi tečno prebacivanje između jezika i sintetički službeni glas da carina, granica ili međunarodna kancelarija zvuče uverljivije ljudima koji imaju veze sa putovanjem, pošiljkom ili radom u inostranstvu. Cilj je i dalje klasičan: autoritetom stvoriti pritisak, a zatim tražiti taksu, depozit ili hitnu verifikaciju.",
    subtitle: {
      sr: "Više jezika → lažni autoritet → taksa ili depozit.",
      en: "Multiple languages → fake authority → fee or deposit."
    },
    hasPage: true,
    tags: ["AI", "glas", "carina"],
    overlaps: ["government-impersonation", "courier-fraud", "advance-fee-fraud", "vishing", "phishing", "recovery-scam"],
    sources: [
      { name: "FBI IC3", url: "https://www.ic3.gov/" },
      { name: "FTC – What to know about impersonator scams", url: "https://consumer.ftc.gov/articles/what-know-about-impersonator-scams" }
    ]
  },

  "ai-invoice-approval-scam": {
    core: true,
    title: { sr: "Prevara sa lažnim odobrenjem fakture uz pomoć veštačke inteligencije", en: "AI invoice approval scam" },
    title_en: "AI invoice approval scam",
    title_sr: "Prevara sa lažnim odobrenjem fakture uz pomoć veštačke inteligencije",
    summary_en: "A fake approver message, voice note, or call is inserted right where the finance team expects internal confirmation, making the payment look cleared when it is not. The base scam is still invoice fraud or payment diversion; artificial intelligence mainly makes the approval feel authentic enough to override hesitation.",
    summary_sr: "Lažna poruka, glasovna beleška ili poziv odobravaoca ubacuju se baš tamo gde finansije očekuju internu potvrdu, pa uplata deluje odobreno iako nije. Bazna prevara je i dalje prevara sa fakturom ili preusmeravanjem plaćanja; veštačka inteligencija pre svega čini da odobrenje deluje dovoljno autentično da preskoči kolebanje.",
    subtitle: {
      sr: "Lažni odobravalac → zaobilazak kontrole → uplata.",
      en: "Fake approver → control bypass → payment."
    },
    hasPage: true,
    tags: ["AI", "glas", "faktura"],
    overlaps: ["ceo-fraud", "ai-invoice-voice-confirmation-scam", "vendor-email-compromise", "invoice-fraud", "payment-diversion", "ai-executive-voice-payment-scam"],
    sources: [
      { name: "FBI IC3", url: "https://www.ic3.gov/" },
      { name: "FTC – How to avoid scams that use artificial intelligence", url: "https://consumer.ftc.gov/articles/how-avoid-scams-use-artificial-intelligence" }
    ]
  },

  "ai-romance-verification-scam": {
    core: true,
    title: { sr: "Romantična prevara sa video-proverom identiteta uz pomoć veštačke inteligencije", en: "AI romance verification scam" },
    title_en: "AI romance verification scam",
    title_sr: "Romantična prevara sa video-proverom identiteta uz pomoć veštačke inteligencije",
    summary_en: "A match uses a fake or altered video check to answer the victim’s biggest doubt: whether the person is real. The underlying scam is still romance fraud; the artificial-intelligence layer simply supplies a false moment of certainty before money, document, or verification requests begin.",
    summary_sr: "Navodni partner koristi lažnu ili izmenjenu video-proveru da odgovori na najveću sumnju žrtve: da li ta osoba uopšte postoji. Bazna prevara je i dalje romantična prevara; sloj veštačke inteligencije samo daje lažni trenutak sigurnosti pre nego što krenu zahtevi za novac, dokumenta ili verifikaciju.",
    subtitle: {
      sr: "Lažni video dokaz → poverenje → novac.",
      en: "Fake video proof → trust → money."
    },
    hasPage: true,
    tags: ["AI", "video", "romansa"],
    overlaps: ["pig-butchering", "military-romance-scam", "wrong-number-romance-scam", "ai-voice-clone-scam", "romantic-scam", "sextortion-scam"],
    sources: [
      { name: "FBI IC3", url: "https://www.ic3.gov/" },
      { name: "FTC – What to know about impersonator scams", url: "https://consumer.ftc.gov/articles/what-know-about-impersonator-scams" }
    ]
  },

  "vehicle-history-report-scam": {
    core: true,
    title: { sr: "Prevara s lažnim izveštajem o vozilu", en: "Vehicle history report scam" },
    title_en: "Vehicle history report scam",
    title_sr: "Prevara s lažnim izveštajem o vozilu",
    summary_en: "Sellers or third parties push paid links for vehicle history reports that are fake, empty, or copied from free sources while the real goal is card data or an unnecessary fee.",
    summary_sr: "Prodavci ili treća lica guraju plaćene linkove za istoriju vozila koji su lažni, prazni ili prepisani sa besplatnih izvora, dok je pravi cilj kartični podatak ili nepotrebna naknada.",
    subtitle: { sr: "Oglas za auto → link za izveštaj → uplata ili forma → nema korisnih podataka ili krađa podataka.", en: "Car ad → report link → payment or form → no useful data or data theft." },
    hasPage: true,
    tags: ["auto", "izveštaj", "oglas"],
    overlaps: ["marketplace-scam", "fake-car-dealership-scam", "phishing", "advance-fee-fraud"],
    sources: [{ name: "FTC — Auto shopping and financing" }, { name: "EU Consumer Protection — online purchases" }]
  },

  "car-escrow-scam": {
    core: true,
    title: { sr: "Prevara s lažnim eskrouom za automobil", en: "Car escrow scam" },
    title_en: "Car escrow scam",
    title_sr: "Prevara s lažnim eskrouom za automobil",
    summary_en: "Buyer and seller are told to use a fake escrow site that mimics real services; funds are released to fraudsters while no vehicle changes hands.",
    summary_sr: "Kupac i prodavac se uvode na lažni eskrou sajt koji imitira prave servise; novac završi kod prevaranata dok se vozilo ne prenosi.",
    subtitle: { sr: "Dogovor o autu → lažni eskrou → uplata depozita → servis traži dodatne takse → novac je izgubljen.", en: "Car deal → fake escrow → deposit → extra fees → money lost." },
    hasPage: true,
    tags: ["auto", "eskrou", "uplata"],
    overlaps: ["escrow-scam", "marketplace-scam", "vehicle-history-report-scam", "advance-fee-fraud"],
    sources: [{ name: "FBI IC3 — Internet crime patterns" }, { name: "Action Fraud — vehicle sale fraud" }]
  },

  "fake-car-dealership-scam": {
    core: true,
    title: { sr: "Lažni online auto-salon", en: "Fake online car dealership scam" },
    title_en: "Fake online car dealership scam",
    title_sr: "Lažni online auto-salon",
    summary_en: "A polished website or ads list vehicles at attractive prices; deposits and transport fees are collected for cars that do not exist or are not for sale.",
    summary_sr: "Uredan sajt ili oglasi nude vozila po povoljnim cenama; uzimaju se kapare i troškovi transporta za automobile koji ne postoje ili nisu na prodaju.",
    subtitle: { sr: "Oglas → sajt salona → kapara/transport → nestanak prodavca → nema vozila.", en: "Ad → dealer site → deposit/shipping → seller gone → no car." },
    hasPage: true,
    tags: ["auto", "salon", "oglas"],
    overlaps: ["marketplace-scam", "car-escrow-scam", "vehicle-history-report-scam", "advance-fee-fraud"],
    sources: [{ name: "AA — vehicle buying scams (guidance)" }, { name: "Which? — car buying scams" }]
  },

  "test-drive-theft-scam": {
    core: true,
    title: { sr: "Krađa vozila na probnoj vožnji", en: "Test drive vehicle theft scam" },
    title_en: "Test drive vehicle theft scam",
    title_sr: "Krađa vozila na probnoj vožnji",
    summary_en: "A stranger gains temporary control of a vehicle during a test drive or handover using distraction, swapped keys, or fake identity, then disappears with the car.",
    summary_sr: "Stranac privremeno preuzme kontrolu nad vozilom na probnoj vožnji ili predaji uz distrakciju, zamenjene ključeve ili lažni identitet, pa nestane s automobilom.",
    subtitle: { sr: "Dogovor za probnu vožnju → preuzimanje vozila → odvajanje od vlasnika → nestanak.", en: "Test drive arranged → vehicle taken → separated from owner → gone." },
    hasPage: true,
    tags: ["auto", "probna vožnja", "krađa"],
    overlaps: ["marketplace-scam", "fake-car-dealership-scam", "impersonation-scam", "identity-theft"],
    sources: [{ name: "Police.uk — vehicle crime prevention" }, { name: "NHTSA — vehicle safety and theft awareness" }]
  },

  "event-pass-qr-scam": {
    core: true,
    title: { sr: "Prevara s lažnim QR propusnicama", en: "Fake event pass QR scam" },
    title_en: "Fake event pass QR scam",
    title_sr: "Prevara s lažnim QR propusnicama",
    summary_en: "Fraudsters distribute QR codes or links for venue entry, parking, or VIP access that lead to phishing pages, malware, or fake tickets instead of a real credential.",
    summary_sr: "Prevaranti dele QR kodove ili linkove za ulaz, parking ili VIP pristup koji vode na fišing, malware ili lažnu ulaznicu umesto pravog pristupa.",
    subtitle: { sr: "QR na ulazu ili u poruci → skeniranje → lažna stranica ili lažna karta → gubitak novca ili podataka.", en: "QR at gate or in message → scan → fake page or ticket → money or data lost." },
    hasPage: true,
    tags: ["QR", "događaj", "ulaz"],
    overlaps: ["ticket-scam", "parking-qr-scam", "quishing", "phishing"],
    sources: [{ name: "NCSC — QR code security" }, { name: "Europol — cyber-enabled fraud" }]
  },

  "ticket-resale-clone-page-scam": {
    core: true,
    title: { sr: "Klon sajt za preprodaju ulaznica", en: "Ticket resale clone website scam" },
    title_en: "Ticket resale clone website scam",
    title_sr: "Klon sajt za preprodaju ulaznica",
    summary_en: "A website clones the look of a known ticket brand; buyers pay for tickets that are never issued while card details may also be harvested.",
    summary_sr: "Sajt kopira izgled poznate ulazničke marke; kupci plate ulaznice koje se nikad ne izdaju, a mogu ukrasti i kartične podatke.",
    subtitle: { sr: "Pretraga → lažni sajt → uplata → nema ulaznice → sajt nestane.", en: "Search → fake site → payment → no ticket → site vanishes." },
    hasPage: true,
    tags: ["ulaznice", "klon", "sajt"],
    overlaps: ["ticket-scam", "fake-webshop", "phishing", "marketplace-scam"],
    sources: [{ name: "FTC — Event ticket scams" }, { name: "Get Safe Online — ticket fraud" }]
  },

  "fake-return-label-scam": {
    core: true,
    title: { sr: "Lažna povratna pošiljka i nalepnica", en: "Fake return label scam" },
    title_en: "Fake return label scam",
    title_sr: "Lažna povratna pošiljka i nalepnica",
    summary_en: "Victims receive instructions or labels for returns that route goods to fraudsters or trigger fake refund portals that steal payment data.",
    summary_sr: "Žrtve dobiju uputstva ili nalepnice za povrat koji usmeravaju robu prevarantima ili otvaraju lažne portale za povrat koji kradu platne podatke.",
    subtitle: { sr: "Poruka o povratu → lažna nalepnica ili link → roba ili novac završi kod prevaranta.", en: "Return message → fake label or link → goods or money to fraudster." },
    hasPage: true,
    tags: ["povrat", "kurir", "online kupovina"],
    overlaps: ["marketplace-scam", "parcel-scam", "phishing", "refund-scam"],
    sources: [{ name: "Citizens Advice — online shopping problems" }, { name: "FTC — refund and recovery scams" }]
  },

  "travel-compensation-claim-scam": {
    core: true,
    title: { sr: "Lažna naknada za putovanje (claim)", en: "Travel compensation claim scam" },
    title_en: "Travel compensation claim scam",
    title_sr: "Lažna naknada za putovanje (claim)",
    summary_en: "Cold messages offer easy compensation for delays or cancellations; victims pay fees or enter card data on fake airline or regulator portals.",
    summary_sr: "Hladni kontakti nude laku naknadu za kašnjenje ili otkaz; žrtve plate takse ili unesu karticu na lažnim portalima avio ili regulatora.",
    subtitle: { sr: "Poruka o naknadi → lažni obrazac → taksa ili kartica → nema isplate.", en: "Compensation message → fake form → fee or card → no payout." },
    hasPage: true,
    tags: ["putovanje", "naknada", "avio"],
    overlaps: ["travel-booking-scam", "airline-refund-scam", "phishing", "advance-fee-fraud"],
    sources: [{ name: "CAA — passenger rights (official guidance)" }, { name: "EU ECC — air passenger rights" }]
  },

  "flight-rebooking-scam": {
    core: true,
    title: { sr: "Prevara lažnim prebukiranjem leta", en: "Flight rebooking scam" },
    title_en: "Flight rebooking scam",
    title_sr: "Prevara lažnim prebukiranjem leta",
    summary_en: "SMS, email, or calls claim a flight was changed and push a link or phone number to rebook, leading to phishing or payment to criminals.",
    summary_sr: "SMS, imejl ili poziv tvrde da je let promenjen i guraju link ili broj za prebukiranje, što vodi u fišing ili uplatu prevarantima.",
    subtitle: { sr: "Obaveštenje o letu → lažni link/podrška → uplata ili krađa naloga → let nije promenjen.", en: "Flight notice → fake link/support → payment or account theft → no real change." },
    hasPage: true,
    tags: ["avio", "SMS", "fišing"],
    overlaps: ["airline-refund-scam", "travel-booking-scam", "smishing", "phishing"],
    sources: [{ name: "IATA — passenger communications awareness" }, { name: "Which? — flight scams" }]
  },

  "modeling-casting-fee-scam": {
    core: true,
    title: { sr: "Lažna naknada za kasting i modeling", en: "Modeling and casting fee scam" },
    title_en: "Modeling and casting fee scam",
    title_sr: "Lažna naknada za kasting i modeling",
    summary_en: "Fake agencies promise work after upfront fees for portfolios, registrations, or casting slots; the job never materializes and requests multiply.",
    summary_sr: "Lažne agencije obećavaju posao posle unapred plaćenog portfolija, registracije ili termina kastinga; posao ne postoji, a zahtevi se množe.",
    subtitle: { sr: "Poziv na kasting → naknada unapred → dodatne takse → nema ugovora o radu.", en: "Casting invite → upfront fee → more charges → no real contract." },
    hasPage: true,
    tags: ["posao", "modeling", "naknada"],
    overlaps: ["job-scam", "recruitment-scam", "advance-fee-fraud", "fake-hr-scam"],
    sources: [{ name: "Action Fraud — employment fraud" }, { name: "BBB — modeling scams" }]
  },

  "online-dating-verification-fee-scam": {
    core: true,
    title: { sr: "Lažna verifikacija na aplikacijama za upoznavanje", en: "Dating app verification fee scam" },
    title_en: "Dating app verification fee scam",
    title_sr: "Lažna verifikacija na aplikacijama za upoznavanje",
    summary_en: "A dating verification fee scam still asks for a small paid check before meeting, but today the request may be reinforced with a more convincing profile, better messages, or even a fake video reassurance that the person is real. The goal stays the same: move the victim from chat into card entry, a subscription trap, or a fake identity check.",
    summary_sr: "Lažna verifikacija na aplikacijama za upoznavanje i dalje traži malu plaćenu proveru pre susreta, ali danas zahtev mogu da pojačaju ubedljiviji profil, bolje poruke ili čak lažni video koji navodno potvrđuje identitet. Cilj ostaje isti: prebaciti žrtvu iz četa ka unosu kartice, zamci za pretplatu ili lažnoj proveri identiteta.",
    subtitle: { sr: "Chat → link za verifikaciju → mala uplata → pretplata ili krađa kartice.", en: "Chat → verification link → small charge → subscription or card theft." },
    hasPage: true,
    tags: ["upoznavanje", "verifikacija", "aplikacija"],
    overlaps: ["romantic-scam", "pig-butchering", "phishing", "subscription-trap"],
    sources: [{ name: "FTC — romance scams" }, { name: "Get Safe Online — online dating" }]
  },

  "wrong-number-romance-scam": {
    core: true,
    title: { sr: "Romansa koja počinje pogrešnim brojem", en: "Wrong-number romance scam" },
    title_en: "Wrong-number romance scam",
    title_sr: "Romansa koja počinje pogrešnim brojem",
    summary_en: "A wrong-number romance scam still begins with an accidental-looking message, but artificial intelligence can now help the persona feel more polished through better photos, translated chats, and faster, smoother conversation. The core stays the same: a harmless mistake turns into daily intimacy, then into emotional trust, money requests, or an investment story.",
    summary_sr: "Romansa koja počinje pogrešnim brojem i dalje kreće porukom koja deluje slučajno, ali veštačka inteligencija danas može da učini personu uglađenijom kroz bolje fotografije, prevedene poruke i brži, tečniji razgovor. Suština ostaje ista: bezazlena greška prerasta u svakodnevnu bliskost, pa u emotivno poverenje, zahteve za novac ili priču o ulaganju.",
    subtitle: { sr: "Nije upoznavanje nego slučajna poruka koja postaje kanal za bliskost, krizu ili investicioni mamac.", en: "Not dating at first but an accidental message that becomes a channel for intimacy, crisis, or investment bait." },
    hasPage: true,
    tags: ["romansa", "SMS", "chat"],
    overlaps: ["romantic-scam", "pig-butchering", "advance-fee-fraud", "crypto-scam"],
    sources: [{ name: "FBI IC3 — romance scams" }, { name: "FTC — text message scams" }]
  },

  "lost-pet-recovery-scam": {
    core: true,
    title: { sr: "Prevara pronalaženja izgubljenog ljubimca", en: "Lost pet recovery fee scam" },
    title_en: "Lost pet recovery fee scam",
    title_sr: "Prevara pronalaženja izgubljenog ljubimca",
    summary_en: "After a public lost-pet post, someone claims to have found the animal and demands shipping, insurance, or GPS fees before return; the pet is not with them.",
    summary_sr: "Posle javnog oglasa za izgubljenog ljubimca, neko tvrdi da ga je našao i traži naknadu za transport, osiguranje ili GPS pre povrata; ljubimac kod njih nije.",
    subtitle: { sr: "Oglas → kontakt našao sam → hitna uplata → nestanak i nema ljubimca.", en: "Post → I found them → urgent payment → ghosted → no pet." },
    hasPage: true,
    tags: ["ljubimac", "naplata", "oglas"],
    overlaps: ["marketplace-scam", "advance-fee-fraud", "recovery-scam", "courier-fraud"],
    sources: [{ name: "RSPCA — pet theft and fraud awareness" }, { name: "BBB — pet scam reports" }]
  },

  "pigeon-drop-scam": {
    title: { sr: "Pigeon drop prevara", en: "Pigeon drop scam" },
    title_en: "Pigeon drop scam",
    title_sr: "Pigeon drop prevara",
    summary_sr: "Na ulici nalaze novac ili vrednu stvar, uvode partnera u podelu, a žrtva izvlači svoj novac pre nego što nestanu sa zajedničkim kesom.",
    summary_en: "On the street they \"find\" money or valuables, bring in a partner to split it, and the victim pulls out their own cash before the pair vanishes with the shared bag.",
    subtitle: { sr: "Nalaz → poverenje → depozit žrtve → razmena kesama → nestanak.", en: "\"Find\" → trust → victim's \"deposit\" → bag swap → disappearance." },
    hasPage: true,
    overlaps: ["distraction-theft-scam", "street-gold-ring-scam", "advance-fee-fraud", "impersonation-scam"],
    sources: []
  },

  "distraction-theft-scam": {
    title: { sr: "Prevara pažnjom (distraction theft)", en: "Distraction theft scam" },
    title_en: "Distraction theft scam",
    title_sr: "Prevara pažnjom (distraction theft)",
    summary_sr: "Jedan ili više ljudi odvlače pažnju razgovorom, pomoći ili lažnim hitnim situacijama dok drugi uzima novčanik, telefon ili kartice.",
    summary_en: "One or more people divert attention with talk, \"help\", or fake emergencies while another takes a wallet, phone, or cards.",
    subtitle: { sr: "Kontakt → odvlačenje pažnje → džeparenje ili uzimanje torbe → brz odlazak.", en: "Contact → distraction → pickpocketing or bag grab → quick exit." },
    hasPage: true,
    overlaps: ["pigeon-drop-scam", "street-gold-ring-scam", "impersonation-scam", "fake-delivery", "friendly-helper-atm-scam", "atm-assistance-scam", "atm-shoulder-surfing", "card-swap-at-pos"],
    sources: []
  },

  "street-gold-ring-scam": {
    title: { sr: "Prevara sa zlatanim prstenom na ulici", en: "Street gold ring scam" },
    title_en: "Street gold ring scam",
    title_sr: "Prevara sa zlatanim prstenom na ulici",
    summary_sr: "Neko slučajno pronalazi prsten, nudi ga jeftino ili traži malu naknadu, a predmet je bezvredna imitacija.",
    summary_en: "Someone \"accidentally\" finds a ring, offers it cheap or asks a small fee, while the item is a worthless imitation.",
    subtitle: { sr: "Nalaz prstena → priča o vrednosti → mala uplata → žrtva ostaje sa metalom bez vrednosti.", en: "\"Found\" ring → value story → small payment → victim keeps worthless metal." },
    hasPage: true,
    overlaps: ["pigeon-drop-scam", "distraction-theft-scam", "marketplace-scam", "advance-fee-fraud"],
    sources: []
  },

  "tow-truck-scam": {
    title: { sr: "Lažni ili pretenciozni šlep", en: "Bogus or predatory tow truck scam" },
    title_en: "Bogus or predatory tow truck scam",
    title_sr: "Lažni ili pretenciozni šlep",
    summary_sr: "Pojavi se šlep bez jasnog dogovora, vezuje vozilo i traži skupe takse, gotovinu ili prevoz do nepoznatog servisa.",
    summary_en: "A tow shows up without clear terms, hooks the vehicle, and demands high fees, cash, or haul to an unknown yard.",
    subtitle: { sr: "kontakt → vezivanje → nejasna cena → pritisak za keš → odlazak.", en: "contact → hook-up → unclear price → cash pressure → exit." },
    hasPage: true,
    overlaps: ["fake-roadside-assistance-scam", "fake-mechanic-inspection-scam", "distraction-theft-scam", "advance-fee-fraud", "impersonation-scam"],
    sources: []
  },

  "fake-parking-attendant-scam": {
    title: { sr: "Lažni parking službenik", en: "Fake parking attendant scam" },
    title_en: "Fake parking attendant scam",
    title_sr: "Lažni parking službenik",
    summary_sr: "Nepoznat traži gotovinu za parkiranje ili plaćanje karticom bez zvaničnog uređaja; novac ide prevarantu, a vozilo i dalje može biti kažnjeno.",
    summary_en: "A stranger asks cash for \"parking\" or a card tap without an official meter; money goes to a fraudster while the car may still be ticketed.",
    subtitle: { sr: "kontakt → uplatnica ili keš → lažna legitimacija → odlazak → gubitak.", en: "contact → cash or tap → fake authority → exit → loss." },
    hasPage: true,
    overlaps: ["impersonation-scam", "distraction-theft-scam", "tow-truck-scam", "fake-roadside-assistance-scam"],
    sources: []
  },

  "counterfeit-cash-pass-off": {
    title: { sr: "Lažan novac u razmeni ili kusuru", en: "Counterfeit cash pass-off" },
    title_en: "Counterfeit cash pass-off",
    title_sr: "Lažan novac u razmeni ili kusuru",
    summary_sr: "U brzoj razmeni novca ili kusuru dobijaš krivotvorene novčanice koje izgledaju dobre tek kasnije na svetlu ili u banci.",
    summary_en: "In a fast exchange or as change you receive counterfeit notes that look \"fine\" until checked in better light or at a bank.",
    subtitle: { sr: "brzina → razmena → lažan novac → otkrivanje kasno → gubitak.", en: "speed → exchange → fake notes → late discovery → loss." },
    hasPage: true,
    overlaps: ["pigeon-drop-scam", "distraction-theft-scam", "fake-banknote-check-scam", "impersonation-scam"],
    sources: []
  },

  "fake-banknote-check-scam": {
    title: { sr: "Lažna provera novčanice", en: "Fake banknote check scam" },
    title_en: "Fake banknote check scam",
    title_sr: "Lažna provera novčanice",
    summary_sr: "Stranac traži da mu proveriš novčanicu uzimajući tvoj novčanik ili menjajući novčanice, pa ostaneš sa lažnim ili praznim.",
    summary_en: "A stranger asks you to \"check\" a banknote while taking your wallet or switching bills, leaving you with fakes or short cash.",
    subtitle: { sr: "zahtev → novčanik vidljiv → zamena ili džeparenje → gubitak.", en: "request → wallet visible → swap or pickpocket → loss." },
    hasPage: true,
    overlaps: ["pigeon-drop-scam", "distraction-theft-scam", "counterfeit-cash-pass-off", "impersonation-scam"],
    sources: []
  },

  "wallet-swap-scam": {
    title: { sr: "Zamena novčanika", en: "Wallet swap scam" },
    title_en: "Wallet swap scam",
    title_sr: "Zamena novčanika",
    summary_sr: "Tokom gubitka ili nalaska novčanika, predmet se brzo zamenjuje istovetnim praznim ili sa hartijom umesto novca.",
    summary_en: "During a \"lost\" or \"found\" wallet moment, the item is quickly swapped for an identical empty one or paper instead of cash.",
    subtitle: { sr: "priča → predaja novčanika → zamena → vraćanje pogrešnog → gubitak.", en: "story → handover → swap → wrong one returned → loss." },
    hasPage: true,
    overlaps: ["pigeon-drop-scam", "distraction-theft-scam", "counterfeit-cash-pass-off", "impersonation-scam"],
    sources: []
  },

  "bag-switch-scam": {
    title: { sr: "Zamena torbe ili kofera", en: "Bag or suitcase switch scam" },
    title_en: "Bag or suitcase switch scam",
    title_sr: "Zamena torbe ili kofera",
    summary_sr: "Identična ili slična torba zamenjuje tvoju na aerodromu, stanici ili u prevozu dok si okrenut ka drugom zadatku.",
    summary_en: "An identical or similar bag replaces yours at a station, airport, or in transit while you face another task.",
    subtitle: { sr: "gužva → kratko odvajanje pogleda → zamena → odlazak → prazna torba.", en: "crowd → brief look away → swap → exit → empty bag." },
    hasPage: true,
    overlaps: ["distraction-theft-scam", "impersonation-scam", "advance-fee-fraud"],
    sources: []
  },

  "fake-raffle-ticket-scam": {
    title: { sr: "Lažne tombolne ili lutrijske karte", en: "Fake raffle or lottery ticket scam" },
    title_en: "Fake raffle or lottery ticket scam",
    title_sr: "Lažne tombolne ili lutrijske karte",
    summary_sr: "Prodaju se karte za nagradnu igru ili humanitarni fond koji ne postoji ili gde dobitak nikad ne stiže.",
    summary_en: "Tickets are sold for a raffle or charity that does not exist or where prizes never arrive.",
    subtitle: { sr: "priča → kupovina karte → očekivanje → nema izvlačenja → gubitak.", en: "story → ticket buy → expectation → no draw → loss." },
    hasPage: true,
    overlaps: ["charity-scam", "distraction-theft-scam", "pigeon-drop-scam", "advance-fee-fraud"],
    sources: []
  },

  "staged-accident-scam": {
    title: { sr: "Insceniran sudar (ulična prevara)", en: "Staged accident scam" },
    title_en: "Staged accident scam",
    title_sr: "Insceniran sudar (ulična prevara)",
    summary_sr: "Namerno blag ili lažni kontakt sa vozilom koristi se da se izvuče gotovina, priznanje krivice ili uplata na licu mesta.",
    summary_en: "A deliberate minor or fake vehicle contact is used to extract cash, a blame admission, or on-the-spot payment.",
    subtitle: { sr: "kontakt → šok → pritisak → uplata ili potpis → eskalacija priče.", en: "contact → shock → pressure → payment or signature → story escalation." },
    hasPage: true,
    overlaps: ["distraction-theft-scam", "tow-truck-scam", "impersonation-scam", "advance-fee-fraud"],
    sources: []
  },

  "car-mirror-scam": {
    title: { sr: "Prevara puklo ogledalo", en: "Car mirror scam" },
    title_en: "Car mirror scam",
    title_sr: "Prevara puklo ogledalo",
    summary_sr: "Neko tvrdi da si mu polomio retrovizor dok si prolazio i traži odmah novac za popravku, često bez stvarne štete ili sa starom štetom.",
    summary_en: "Someone claims you broke their mirror while passing and demands immediate repair cash, often with no real damage or old damage.",
    subtitle: { sr: "uzvik → krivica → brza uplata → odlazak → sumnja kasno.", en: "shout → blame → fast payment → exit → doubt later." },
    hasPage: true,
    overlaps: ["staged-accident-scam", "distraction-theft-scam", "tow-truck-scam", "impersonation-scam"],
    sources: []
  },

  "flat-tire-distraction-scam": {
    title: { sr: "Busna guma kao odvlačenje pažnje", en: "Flat tire distraction scam" },
    title_en: "Flat tire distraction scam",
    title_sr: "Busna guma kao odvlačenje pažnje",
    summary_sr: "Guma je namerno oštećena ili prikazana kao pukla dok drugi pristupaju torbi ili kabini.",
    summary_en: "A tire is damaged or shown as flat while others reach for a bag or the cabin.",
    subtitle: { sr: "pomoć → okretanje od vozila → krađa ili prilaz → gubitak predmeta.", en: "\"help\" → turning from vehicle → theft or access → loss of items." },
    hasPage: true,
    overlaps: ["distraction-theft-scam", "impersonation-scam", "advance-fee-fraud"],
    sources: []
  },

  "spill-on-clothes-distraction-scam": {
    title: { sr: "Prolivanje na odeću (odvlačenje)", en: "Spill-on-clothes distraction scam" },
    title_en: "Spill-on-clothes distraction scam",
    title_sr: "Prolivanje na odeću (odvlačenje)",
    summary_sr: "Tečnost se prospe na tebe da bi se sklonila pažnja s torbe ili novčanika dok pomažu da obrišu fleku.",
    summary_en: "Liquid is spilled on you to shift attention from bag or wallet while they \"help\" clean the stain.",
    subtitle: { sr: "izvinjenje → dodir odeće i torbe → krađa → brz odlazak.", en: "apology → touching clothes and bag → theft → quick exit." },
    hasPage: true,
    overlaps: ["distraction-theft-scam", "impersonation-scam", "advance-fee-fraud"],
    sources: []
  },

  "broken-phone-blame-scam": {
    title: { sr: "Krivica za pukli telefon", en: "Broken phone blame scam" },
    title_en: "Broken phone blame scam",
    title_sr: "Krivica za pukli telefon",
    summary_sr: "Stranac tvrdi da si mu polomio telefon u sudaru na ulici i traži odmah naknadu, iako je uređaj već bio oštećen ili lažan.",
    summary_en: "A stranger claims you broke their phone in a bump and demands immediate payment, though the device was already damaged or fake.",
    subtitle: { sr: "sudar → prikaz ekrana → pritisak → uplata → odlazak.", en: "bump → showing screen → pressure → payment → exit." },
    hasPage: true,
    overlaps: ["distraction-theft-scam", "impersonation-scam", "advance-fee-fraud"],
    sources: []
  },

  "fake-roadside-assistance-scam": {
    title: { sr: "Lažna pomoć na putu", en: "Fake roadside assistance scam" },
    title_en: "Fake roadside assistance scam",
    title_sr: "Lažna pomoć na putu",
    summary_sr: "Pojavi se pomoć bez tvog poziva, traži avans ili skupe delove za lažni kvar, ili odvlači pažnju dok drugi pristupa vozilu.",
    summary_en: "\"Help\" appears without your call, asks advance pay or pricey parts for a fake fault, or distracts while another accesses the vehicle.",
    subtitle: { sr: "zaustavljanje → dijagnoza → uplata → neefektivna popravka → gubitak.", en: "stop → diagnosis → payment → ineffective \"fix\" → loss." },
    hasPage: true,
    overlaps: ["tow-truck-scam", "distraction-theft-scam", "impersonation-scam"],
    sources: []
  },

  "fake-mechanic-inspection-scam": {
    title: { sr: "Lažni mehaničar ili inspekcija vozila", en: "Fake mechanic inspection scam" },
    title_en: "Fake mechanic inspection scam",
    title_sr: "Lažni mehaničar ili inspekcija vozila",
    summary_sr: "Nepoznat tvrdi da vidi curenje, dim ili opasnost i traži odmah novac za hitnu intervenciju na parkingu.",
    summary_en: "A stranger claims they see a leak, smoke, or danger and demands cash for an urgent \"fix\" in a lot.",
    subtitle: { sr: "upozorenje → strah → avans → rad bez papira → nestanak.", en: "warning → fear → advance → informal work → gone." },
    hasPage: true,
    overlaps: ["tow-truck-scam", "fake-roadside-assistance-scam", "distraction-theft-scam", "impersonation-scam"],
    sources: []
  },

  "street-performer-distraction-theft": {
    title: { sr: "Ulični nastup kao odvlačenje za krađu", en: "Street performer distraction theft" },
    title_en: "Street performer distraction theft",
    title_sr: "Ulični nastup kao odvlačenje za krađu",
    summary_sr: "Gužva oko nastupa, žonglera ili plesača koristi se da džeparoš ili partner pristupi torbama i džepovima.",
    summary_en: "A crowd around a show is used so a pickpocket or partner can reach bags and pockets.",
    subtitle: { sr: "gužva → fokus na scenu → krađa → gubitak → shvatanje kasno.", en: "crowd → focus on act → theft → loss → late realization." },
    hasPage: true,
    overlaps: ["distraction-theft-scam", "impersonation-scam", "advance-fee-fraud"],
    sources: []
  },

  "jewelry-cleaning-scam": {
    title: { sr: "Čišćenje nakita na ulici", en: "Street jewelry cleaning scam" },
    title_en: "Street jewelry cleaning scam",
    title_sr: "Čišćenje nakita na ulici",
    summary_sr: "Nude brzo čišćenje prstena ili lanca; nakit se zameni, ošteti ili ukrade dok ga češljaju.",
    summary_en: "They offer a quick ring or chain \"clean\"; the jewelry is swapped, damaged, or stolen while they work.",
    subtitle: { sr: "pristup → predaja nakita → manipulacija → vraćanje pogrešnog → gubitak.", en: "approach → handing jewelry → handling → wrong return → loss." },
    hasPage: true,
    overlaps: ["street-gold-ring-scam", "distraction-theft-scam", "pigeon-drop-scam", "advance-fee-fraud"],
    sources: []
  },

  "gem-swap-scam": {
    title: { sr: "Zamena kamena u nakitu", en: "Gem swap scam" },
    title_en: "Gem swap scam",
    title_sr: "Zamena kamena u nakitu",
    summary_sr: "Tokom procene ili popravke dragulj se izvadi i vrati sa jeftinijim kamenom ili staklom.",
    summary_en: "During appraisal or repair the stone is removed and returned with a cheaper gem or glass.",
    subtitle: { sr: "poverenje → predaja na minut → zamena → dokumentacija odsutna → gubitak vrednosti.", en: "trust → handover for a \"minute\" → swap → no paperwork → value loss." },
    hasPage: true,
    overlaps: ["street-gold-ring-scam", "distraction-theft-scam", "pigeon-drop-scam", "advance-fee-fraud"],
    sources: []
  },

  "marketplace-meetup-robbery": {
    title: { sr: "Pljačka pri ličnom sastanku sa oglasa", en: "Marketplace meetup robbery" },
    title_en: "Marketplace meetup robbery",
    title_sr: "Pljačka pri ličnom sastanku sa oglasa",
    summary_sr: "Dogovor oko telefona, satova ili gotovine završi se susretom gde te prisile da predaš robu ili novac pod pretnjom.",
    summary_en: "A deal for phones, watches, or cash ends in a meetup where you are forced to hand over goods or money under threat.",
    subtitle: { sr: "chat → neutralna lokacija → pritisak ili sila → gubitak → blokiranje kontakta.", en: "chat → neutral spot → pressure or force → loss → blocked contact." },
    hasPage: true,
    overlaps: ["marketplace-scam", "distraction-theft-scam", "test-drive-theft-scam", "impersonation-scam"],
    sources: []
  },

  "fake-donation-box-scam": {
    title: { sr: "Lažna kutija za donacije", en: "Fake donation box scam" },
    title_en: "Fake donation box scam",
    title_sr: "Lažna kutija za donacije",
    summary_sr: "Kutija ili sto izgleda humanitarno, ali novac ne ide registrovanoj organizaciji i nema transparentnosti.",
    summary_en: "A box or table looks charitable, but money does not go to a registered organization and there is no transparency.",
    subtitle: { sr: "emocija → mali prilog → nema potvrde → novac nestaje.", en: "emotion → small donation → no receipt → money gone." },
    hasPage: true,
    overlaps: ["charity-scam", "distraction-theft-scam", "pigeon-drop-scam", "advance-fee-fraud"],
    sources: []
  },

  "restaurant-bill-distraction-scam": {
    title: { sr: "Račun u restoranu uz odvlačenje pažnje", en: "Restaurant bill distraction scam" },
    title_en: "Restaurant bill distraction scam",
    title_sr: "Račun u restoranu uz odvlačenje pažnje",
    summary_sr: "Tokom plaćanja ili dok vraćaju kusur, ekipa odvlači pažnju konobara ili gosta da uzme više novca ili karticu.",
    summary_en: "While paying or getting change, a team distracts staff or the guest to take extra cash or a card.",
    subtitle: { sr: "gužva na šanku → konfuzija iznosa → krađa ili prevara → kratko trajanje scene.", en: "crowd at counter → amount confusion → theft or fraud → short scene." },
    hasPage: true,
    overlaps: ["distraction-theft-scam", "menu-switch-scam", "impersonation-scam"],
    sources: []
  },

  "menu-switch-scam": {
    title: { sr: "Zamena menija ili cene", en: "Menu or price switch scam" },
    title_en: "Menu or price switch scam",
    title_sr: "Zamena menija ili cene",
    summary_sr: "Prikazuje se jedan meni pri ulasku, a na kraju drugi sa višim cenama ili sumnjivim dodacima.",
    summary_en: "One menu is shown on entry and another with higher prices or dubious add-ons appears at the end.",
    subtitle: { sr: "ulazak → porudžbina → druga lista → spor → pritisak da platiš više.", en: "entry → order → different list → dispute → pressure to pay more." },
    hasPage: true,
    overlaps: ["distraction-theft-scam", "restaurant-bill-distraction-scam", "impersonation-scam"],
    sources: []
  },

  "weighing-scale-scam": {
    title: { sr: "Manipulacija vagom (pijaca, štand)", en: "Weighing scale manipulation scam" },
    title_en: "Weighing scale manipulation scam",
    title_sr: "Manipulacija vagom (pijaca, štand)",
    summary_sr: "Vaga ili tara prikazuje veću težinu ili cenu, ili se roba meri uz trik da platiš više nego što si mislio.",
    summary_en: "A scale or tare shows extra weight or price, or goods are weighed with a trick so you pay more than expected.",
    subtitle: { sr: "biranje robe → merenje → sumnjiv iznos → pritisak da platiš → odlazak.", en: "choosing goods → weighing → dubious total → pressure to pay → leaving." },
    hasPage: true,
    overlaps: ["marketplace-scam", "distraction-theft-scam", "advance-fee-fraud", "impersonation-scam"],
    sources: []
  },

  "fake-utility-meter-reader-scam": {
    title: { sr: "Lažni čitač brojila (struja/voda/gas)", en: "Fake utility meter reader scam" },
    title_en: "Fake utility meter reader scam",
    title_sr: "Lažni čitač brojila (struja/voda/gas)",
    summary_sr: "Nepoznata osoba ulazi pod izgovorom očitavanja brojila ili provere instalacije i koristi pristup da ukrade, pregleda dokumenta ili proda nepotreban servis.",
    summary_en: "A stranger enters claiming to read meters or check installation and uses access to steal, inspect documents, or sell an unneeded \"service\".",
    subtitle: { sr: "Kucanje → uniforma ili kartica koja nije proverena → ulazak → krađa ili pritisak za uplatu.", en: "Knock → uniform or unchecked ID → entry → theft or pressure to pay." },
    hasPage: true,
    overlaps: ["utility-impersonation", "government-impersonation", "fake-gas-inspector-scam", "fake-electrician-doorstep-scam"],
    sources: []
  },

  "fake-social-worker-doorstep-scam": {
    title: { sr: "Lažni socijalni radnik na vratima", en: "Fake social worker doorstep scam" },
    title_en: "Fake social worker doorstep scam",
    title_sr: "Lažni socijalni radnik na vratima",
    summary_sr: "Posetilac se predstavlja kao socijalna služba, pedijatrija ili provera dobrobiti da bi ušao, prikupio podatke o deci ili starijima ili tražio novac.",
    summary_en: "A visitor poses as social services, paediatrics, or a \"welfare check\" to enter, collect data about children or elders, or ask for money.",
    subtitle: { sr: "Lažni identitet → hitna poseta → ulazak ili podaci → zloupotreba poverenja.", en: "False identity → urgent visit → entry or data → abuse of trust." },
    hasPage: true,
    overlaps: ["government-impersonation", "impersonation-scam", "grandparent-scam", "healthcare-impersonation"],
    sources: []
  },

  "fake-gas-inspector-scam": {
    title: { sr: "Lažni gasni inspektor na vratima", en: "Fake gas inspector doorstep scam" },
    title_en: "Fake gas inspector doorstep scam",
    title_sr: "Lažni gasni inspektor na vratima",
    summary_sr: "Inspektor tvrdi da postoji curenje ili obavezan pregled, traži ulazak i novac za hitnu popravku ili delove koji nisu potrebni.",
    summary_en: "\"Inspector\" claims a leak or mandatory inspection, demands entry and money for urgent repairs or \"parts\" that are not needed.",
    subtitle: { sr: "Hitnost i strah od gasa → ulazak ili uplata → radovi bez stvarnog problema.", en: "Urgency and gas fear → entry or payment → work without a real problem." },
    hasPage: true,
    overlaps: ["fake-utility-meter-reader-scam", "fake-electrician-doorstep-scam", "home-improvement-scam", "fake-audit-inspection-scam"],
    sources: []
  },

  "fake-electrician-doorstep-scam": {
    title: { sr: "Lažni električar na vratima", en: "Fake electrician doorstep scam" },
    title_en: "Fake electrician doorstep scam",
    title_sr: "Lažni električar na vratima",
    summary_sr: "Pozvan ili nekazan posetilac tvrdi da proverava instalaciju, opasnu žicu ili brojilo, pa traži gotovinu za lažni hitni rad.",
    summary_en: "An invited or unsolicited visitor claims to check wiring, a \"dangerous cable\", or the meter, then asks cash for a fake urgent job.",
    subtitle: { sr: "Tehnički žargon → strah → mali radovi uz visoku cenu → nestanak.", en: "Technical jargon → fear → small jobs at high price → disappearance." },
    hasPage: true,
    overlaps: ["fake-gas-inspector-scam", "fake-plumber-emergency-scam", "fake-utility-meter-reader-scam", "home-improvement-scam"],
    sources: []
  },

  "fake-plumber-emergency-scam": {
    title: { sr: "Lažni vodoinstalater (lažna hitna intervencija)", en: "Fake plumber emergency scam" },
    title_en: "Fake plumber emergency scam",
    title_sr: "Lažni vodoinstalater (lažna hitna intervencija)",
    summary_sr: "Najavljuje se curenje u zgradi ili komšija ispod i traži odmah ulazak i plaćanje za popravku koja nije tražena niti potrebna.",
    summary_en: "A leak in the building or the \"downstairs neighbour\" is claimed and immediate entry and payment are demanded for an unnecessary repair.",
    subtitle: { sr: "Hitna priča → ulazak bez provere → avans → radovi bez papira.", en: "Emergency story → entry without verification → advance → informal work." },
    hasPage: true,
    overlaps: ["fake-electrician-doorstep-scam", "home-improvement-scam", "fake-gas-inspector-scam", "advance-fee-fraud"],
    sources: []
  },

  "doorstep-paving-scam": {
    title: { sr: "Prevara asfaltiranjem / popločavanjem na vratima", en: "Doorstep paving scam" },
    title_en: "Doorstep paving scam",
    title_sr: "Prevara asfaltiranjem / popločavanjem na vratima",
    summary_sr: "Ekipa ostaje višak materijala i nudi jeftino asfaltiranje ili popločavanje, pa radi loš posao uz pritisak za gotovinu odmah.",
    summary_en: "A crew has \"leftover materials\" and offers cheap paving or tarmac, then does poor work while pressuring for immediate cash.",
    subtitle: { sr: "Hladni poziv na vratima → niska cena → loš kvalitet → pritisak za gotovinu.", en: "Cold call at door → low price → poor quality → cash pressure." },
    hasPage: true,
    overlaps: ["home-improvement-scam", "driveway-resurfacing-scam", "roofing-storm-damage-scam", "advance-fee-fraud"],
    sources: []
  },

  "roofing-storm-damage-scam": {
    title: { sr: "Prevara popravkom krova posle oluje", en: "Roofing storm damage scam" },
    title_en: "Roofing storm damage scam",
    title_sr: "Prevara popravkom krova posle oluje",
    summary_sr: "Posle nevremena nepoznati krovopokrivač tvrdi da je krov oštećen, traži avans za hitnu popravku i nestaje ili ostavlja privremeni rad bez garancije.",
    summary_en: "After bad weather an unknown \"roofer\" claims the roof is damaged, asks an advance for urgent repair, then disappears or leaves temporary work with no warranty.",
    subtitle: { sr: "Nevreme → obilazak → strah od curenja → avans → nedovršen ili lažan rad.", en: "Bad weather → inspection → leak fear → advance → unfinished or fake work." },
    hasPage: true,
    overlaps: ["home-improvement-scam", "doorstep-paving-scam", "driveway-resurfacing-scam", "deposit-scam"],
    sources: []
  },

  "driveway-resurfacing-scam": {
    title: { sr: "Prevara ponovnim asfaltiranjem ulaza", en: "Driveway resurfacing scam" },
    title_en: "Driveway resurfacing scam",
    title_sr: "Prevara ponovnim asfaltiranjem ulaza",
    summary_sr: "Ponuda za brzo asfaltiranje ili premaz ulaza po sumnjivo niskoj ceni završava se tankim slojem, lošim materijalom i tražnjom punog iznosa odmah.",
    summary_en: "An offer for quick tarmac or driveway coating at a suspiciously low price ends in a thin layer, poor materials, and a demand for the full amount immediately.",
    subtitle: { sr: "Jeftina ponuda → brz rad → loš kvalitet → pritisak za gotovinu.", en: "Cheap offer → fast work → poor quality → cash pressure." },
    hasPage: true,
    overlaps: ["doorstep-paving-scam", "home-improvement-scam", "roofing-storm-damage-scam", "advance-fee-fraud"],
    sources: []
  },

  "home-security-system-scam": {
    title: { sr: "Prevara lažnim prodavcem sistema zaštite na vratima", en: "Fake home security system doorstep scam" },
    title_en: "Fake home security system doorstep scam",
    title_sr: "Prevara lažnim prodavcem sistema zaštite na vratima",
    summary_sr: "Nepozvani prodavac nudi alarm ili kamere, pritiska na dug ugovor i skrivene mesečne naknade.",
    summary_en: "An unsolicited seller offers alarms or cameras and pressures for a long contract and hidden monthly fees.",
    subtitle: { sr: "Besplatan pregled → strah od provale → ugovor i oprema → skrivene naknade.", en: "Free review → burglary fear → contract and equipment → hidden fees." },
    hasPage: true,
    overlaps: ["home-improvement-scam","government-impersonation","fake-electrician-doorstep-scam","fake-social-worker-doorstep-scam","doorstep-paving-scam","door-to-door-subscription-scam","alarm-sign-placement-scam"],
    sources: []
  },

  "locksmith-scam": {
    title: { sr: "Prevara lažnim bravarom na vratima ili posle oglasa", en: "Fake locksmith scam" },
    title_en: "Fake locksmith scam",
    title_sr: "Prevara lažnim bravarom na vratima ili posle oglasa",
    summary_sr: "Posle oglasa ekipa traži mnogo više nego što je rečeno i može oštetiti bravu.",
    summary_en: "After an ad the crew charges far more than quoted and may damage the lock.",
    subtitle: { sr: "Hitno zaključano → visok račun → oštećen cilindar → pritisak za plaćanje.", en: "Locked out → high bill → damaged cylinder → payment pressure." },
    hasPage: true,
    overlaps: ["home-improvement-scam","government-impersonation","fake-electrician-doorstep-scam","fake-social-worker-doorstep-scam","doorstep-paving-scam","lock-tampering-extortion-scam","fake-plumber-emergency-scam","advance-fee-fraud"],
    sources: []
  },

  "door-to-door-home-repair-scam": {
    title: { sr: "Prevara popravkom kuće od vrata do vrata", en: "Door-to-door home repair scam" },
    title_en: "Door-to-door home repair scam",
    title_sr: "Prevara popravkom kuće od vrata do vrata",
    summary_sr: "Ekipa kuca i nudi ostatak posla ili hitnu popravku po sumnjivo niskoj ceni.",
    summary_en: "A crew knocks offering leftover work or urgent repair at a suspiciously low price.",
    subtitle: { sr: "Ponuda za krov, fasadu ili kanalizaciju → pregled → avans → loš rad ili nestanak.", en: "Offer for roof, facade, or drains → inspection → advance → poor work or disappearance." },
    hasPage: true,
    overlaps: ["home-improvement-scam","government-impersonation","fake-electrician-doorstep-scam","fake-social-worker-doorstep-scam","doorstep-paving-scam","roofing-storm-damage-scam","fake-insulation-scam"],
    sources: []
  },

  "fake-municipal-worker-scam": {
    title: { sr: "Prevara lažnim komunalnim radnikom na vratima", en: "Fake municipal worker doorstep scam" },
    title_en: "Fake municipal worker doorstep scam",
    title_sr: "Prevara lažnim komunalnim radnikom na vratima",
    summary_sr: "Prevarant koristi bedž i žargon da zvuči kao zvanična obilazak.",
    summary_en: "A fraudster uses a badge and jargon to sound like an official visit.",
    subtitle: { sr: "Lažni bedž → hitna provera → taksa ili podaci → zloupotreba.", en: "Fake badge → urgent check → fee or data → abuse." },
    hasPage: true,
    overlaps: ["home-improvement-scam","government-impersonation","fake-electrician-doorstep-scam","fake-social-worker-doorstep-scam","doorstep-paving-scam","municipality-impersonation","fake-utility-meter-reader-scam"],
    sources: []
  },

  "fake-health-worker-home-visit-scam": {
    title: { sr: "Prevara lažnim zdravstvenim radnikom (kućna poseta)", en: "Fake health worker home visit scam" },
    title_en: "Fake health worker home visit scam",
    title_sr: "Prevara lažnim zdravstvenim radnikom (kućna poseta)",
    summary_sr: "Koristi se priča o vakcinaciji, kontroli terapije ili besplatnom aparatu.",
    summary_en: "A story about vaccination, therapy checks, or a free device is used.",
    subtitle: { sr: "Lažni mantil → kućna poseta → podaci ili naplata → zloupotreba.", en: "Fake coat → home visit → data or billing → abuse." },
    hasPage: true,
    overlaps: ["home-improvement-scam","government-impersonation","fake-electrician-doorstep-scam","fake-social-worker-doorstep-scam","doorstep-paving-scam","healthcare-impersonation","medical-device-doorstep-scam","fake-social-worker-doorstep-scam"],
    sources: []
  },

  "fake-bailiff-enforcement-officer-scam": {
    title: { sr: "Prevara lažnim sudskim izvršiteljem na vratima", en: "Fake bailiff enforcement officer scam" },
    title_en: "Fake bailiff enforcement officer scam",
    title_sr: "Prevara lažnim sudskim izvršiteljem na vratima",
    summary_sr: "Koriste se lažni papiri koji liče na sudski nalog.",
    summary_en: "Fake papers resembling a court order are used.",
    subtitle: { sr: "Uniforma → nalog → uplata da izbegneš zaplenu → novac odlazi.", en: "Uniform → order → pay to avoid seizure → money gone." },
    hasPage: true,
    overlaps: ["home-improvement-scam","government-impersonation","fake-electrician-doorstep-scam","fake-social-worker-doorstep-scam","doorstep-paving-scam","court-impersonation","police-impersonation","advance-fee-fraud"],
    sources: []
  },

  "fake-police-search-pretext-scam": {
    title: { sr: "Prevara lažnim policajcem uz priču o pretresu ili istragi", en: "Fake police search pretext scam" },
    title_en: "Fake police search pretext scam",
    title_sr: "Prevara lažnim policajcem uz priču o pretresu ili istragi",
    summary_sr: "Koristi se žargon i hitnost da spreči poziv na 192 ili 911.",
    summary_en: "Jargon and urgency block calling emergency police.",
    subtitle: { sr: "Lažni znak → pretres → uzimanje novca ili predmeta → nestanak.", en: "Fake badge → search → taking cash or items → disappearance." },
    hasPage: true,
    overlaps: ["home-improvement-scam","government-impersonation","fake-electrician-doorstep-scam","fake-social-worker-doorstep-scam","doorstep-paving-scam","police-impersonation","distraction-theft-scam"],
    sources: []
  },

  "fake-auction-house-scam": {
    title: { sr: "Prevara lažnom aukcijskom kućom (preuzimanje na adresi)", en: "Fake auction house handover scam" },
    title_en: "Fake auction house handover scam",
    title_sr: "Prevara lažnom aukcijskom kućom (preuzimanje na adresi)",
    summary_sr: "Koristi se ime poznate aukcijske kuće ili sajt koji liči na pravi.",
    summary_en: "A known auction house name or lookalike site is used.",
    subtitle: { sr: "Poziv da preuzmeš lot → taksa ili depozit na pragu → nema predmeta.", en: "Call to collect a lot → fee or deposit at the door → no item." },
    hasPage: true,
    overlaps: ["home-improvement-scam","government-impersonation","fake-electrician-doorstep-scam","fake-social-worker-doorstep-scam","doorstep-paving-scam","advance-fee-fraud","courier-fraud","marketplace-scam"],
    sources: []
  },

  "cemetery-plot-scam": {
    title: { sr: "Prevara prodajom grobnog mesta od vrata do vrata", en: "Cemetery plot doorstep scam" },
    title_en: "Cemetery plot doorstep scam",
    title_sr: "Prevara prodajom grobnog mesta od vrata do vrata",
    summary_sr: "Koristi se lažna mapa, pečat ili ime udruženja koje zvuči zvanično.",
    summary_en: "A fake map, stamp, or association name that sounds official is used.",
    subtitle: { sr: "Ponuda mesta → uplata → nema dokumenta ili mesto ne postoji.", en: "Plot offer → payment → no deed or plot does not exist." },
    hasPage: true,
    overlaps: ["home-improvement-scam","government-impersonation","fake-electrician-doorstep-scam","fake-social-worker-doorstep-scam","doorstep-paving-scam","advance-fee-fraud","funeral-assistance-scam"],
    sources: []
  },

  "door-to-door-subscription-scam": {
    title: { sr: "Prevara pretplate od vrata do vrata (časopisi, donacije, servisi)", en: "Door-to-door subscription scam" },
    title_en: "Door-to-door subscription scam",
    title_sr: "Prevara pretplate od vrata do vrata (časopisi, donacije, servisi)",
    summary_sr: "Često se vezuje za lažnu humanitarnu priču ili nagradnu pretplatu.",
    summary_en: "Often tied to a fake charity story or a prize subscription.",
    subtitle: { sr: "Ponuda → kratak razgovor → potpis ili QR → mesečna naplata.", en: "Offer → short talk → signature or QR → monthly billing." },
    hasPage: true,
    overlaps: ["home-improvement-scam","government-impersonation","fake-electrician-doorstep-scam","fake-social-worker-doorstep-scam","doorstep-paving-scam","charity-scam","trial-to-subscription-rollover"],
    sources: []
  },

  "fake-pest-control-scam": {
    title: { sr: "Prevara lažnom deratizacijom ili dezinsekcijom na vratima", en: "Fake pest control doorstep scam" },
    title_en: "Fake pest control doorstep scam",
    title_sr: "Prevara lažnom deratizacijom ili dezinsekcijom na vratima",
    summary_sr: "Koristi se pečat ili flajer koji liči na zvaničnu službu.",
    summary_en: "A stamp or flyer resembling an official service is used.",
    subtitle: { sr: "Obavezna deratizacija → ulazak → skuplja tretman → loš ili lažan rad.", en: "Mandatory pest treatment → entry → expensive treatment → poor or fake work." },
    hasPage: true,
    overlaps: ["home-improvement-scam","government-impersonation","fake-electrician-doorstep-scam","fake-social-worker-doorstep-scam","doorstep-paving-scam","fake-gas-inspector-scam","fake-sanitation-inspector-scam"],
    sources: []
  },

  "fake-insulation-scam": {
    title: { sr: "Prevara lažnom izolacijom fasade ili potkrovlja na vratima", en: "Fake insulation doorstep scam" },
    title_en: "Fake insulation doorstep scam",
    title_sr: "Prevara lažnom izolacijom fasade ili potkrovlja na vratima",
    summary_sr: "Koristi se priča o susednoj kući koja je juče završena.",
    summary_en: "A story about a neighbour house finished yesterday is used.",
    subtitle: { sr: "Višak materijala → jeftina izolacija → avans → loš sloj ili nestanak.", en: "Leftover materials → cheap insulation → advance → thin layer or disappearance." },
    hasPage: true,
    overlaps: ["home-improvement-scam","government-impersonation","fake-electrician-doorstep-scam","fake-social-worker-doorstep-scam","doorstep-paving-scam","roofing-storm-damage-scam","door-to-door-home-repair-scam"],
    sources: []
  },

  "fake-cleaning-service-scam": {
    title: { sr: "Prevara lažnim servisom dubinskog čišćenja na vratima", en: "Fake cleaning service doorstep scam" },
    title_en: "Fake cleaning service doorstep scam",
    title_sr: "Prevara lažnim servisom dubinskog čišćenja na vratima",
    summary_sr: "Koristi se profesionalna oprema da izgleda kao poznata firma.",
    summary_en: "Professional gear is used to look like a known firm.",
    subtitle: { sr: "Besplatan test → ulazak → skup hemija → pritisak za uplatu.", en: "Free test → entry → expensive chemicals → pressure to pay." },
    hasPage: true,
    overlaps: ["home-improvement-scam","government-impersonation","fake-electrician-doorstep-scam","fake-social-worker-doorstep-scam","doorstep-paving-scam","distraction-theft-scam","advance-fee-fraud"],
    sources: []
  },

  "lock-tampering-extortion-scam": {
    title: { sr: "Prevara oštećenom bravom ili cilindrom i ucenom", en: "Lock tampering extortion scam" },
    title_en: "Lock tampering extortion scam",
    title_sr: "Prevara oštećenom bravom ili cilindrom i ucenom",
    summary_sr: "Isti tim može biti povezan sa prvobitnim oštećenjem.",
    summary_en: "The same team may be linked to the original damage.",
    subtitle: { sr: "Brava ne radi → lažni bravar → skup račun ili ponovni napad.", en: "Lock fails → fake locksmith → high bill or repeat hit." },
    hasPage: true,
    overlaps: ["home-improvement-scam","government-impersonation","fake-electrician-doorstep-scam","fake-social-worker-doorstep-scam","doorstep-paving-scam","locksmith-scam","distraction-theft-scam"],
    sources: []
  },

  "fake-insurance-adjuster-doorstep-scam": {
    title: { sr: "Prevara lažnim likvidatorom osiguranja na vratima posle štete", en: "Fake insurance adjuster doorstep scam" },
    title_en: "Fake insurance adjuster doorstep scam",
    title_sr: "Prevara lažnim likvidatorom osiguranja na vratima posle štete",
    summary_sr: "Koristi se ime poznatog osiguravača i uverljiva mapa štete.",
    summary_en: "A known insurer name and a convincing damage map are used.",
    subtitle: { sr: "Lažni likvidator → pregled štete → naknada unapred → nema isplate.", en: "Fake adjuster → damage review → fee upfront → no payout." },
    hasPage: true,
    overlaps: ["home-improvement-scam","government-impersonation","fake-electrician-doorstep-scam","fake-social-worker-doorstep-scam","doorstep-paving-scam","impersonation-scam","roofing-storm-damage-scam"],
    sources: []
  },

  "disaster-cleanup-advance-scam": {
    title: { sr: "Prevara avansom za čišćenje ili sanaciju posle katastrofe", en: "Disaster cleanup advance fee scam" },
    title_en: "Disaster cleanup advance fee scam",
    title_sr: "Prevara avansom za čišćenje ili sanaciju posle katastrofe",
    summary_sr: "Koristi se hitnost i strah od plijesni ili daljeg curenja.",
    summary_en: "Urgency and fear of mould or further leaking are used.",
    subtitle: { sr: "Hitna ekipa → avans za čišćenje → ne dolaze ili rade minimalno.", en: "Urgent crew → advance for cleanup → no-show or minimal work." },
    hasPage: true,
    overlaps: ["home-improvement-scam","government-impersonation","fake-electrician-doorstep-scam","fake-social-worker-doorstep-scam","doorstep-paving-scam","advance-fee-fraud","fake-insulation-scam"],
    sources: []
  },

  "fake-labor-inspector-scam": {
    title: { sr: "Prevara lažnim inspektorom rada na vratima (kućni rad)", en: "Fake labor inspector doorstep scam" },
    title_en: "Fake labor inspector doorstep scam",
    title_sr: "Prevara lažnim inspektorom rada na vratima (kućni rad)",
    summary_sr: "Koristi se žargon zakona rada i pretnja zatvaranjem firme.",
    summary_en: "Labor-law jargon and a threat to close a business are used.",
    subtitle: { sr: "Lažni inspektor → prijava nelegalnog rada → taksa → zloupotreba.", en: "Fake inspector → illegal work claim → fee → abuse." },
    hasPage: true,
    overlaps: ["home-improvement-scam","government-impersonation","fake-electrician-doorstep-scam","fake-social-worker-doorstep-scam","doorstep-paving-scam","fake-municipal-worker-scam","impersonation-scam"],
    sources: []
  },

  "fake-sanitation-inspector-scam": {
    title: { sr: "Prevara lažnim sanitarim inspektorom na vratima", en: "Fake sanitation inspector doorstep scam" },
    title_en: "Fake sanitation inspector doorstep scam",
    title_sr: "Prevara lažnim sanitarim inspektorom na vratima",
    summary_sr: "Koristi se beli mantil i mapa zgrade koja izgleda zvanično.",
    summary_en: "A white coat and a building map look official.",
    subtitle: { sr: "Lažni sanitar → kontaminacija → tretman ili taksa → prevara.", en: "Fake sanitarian → contamination → treatment or fee → fraud." },
    hasPage: true,
    overlaps: ["home-improvement-scam","government-impersonation","fake-electrician-doorstep-scam","fake-social-worker-doorstep-scam","doorstep-paving-scam","fake-pest-control-scam","healthcare-impersonation"],
    sources: []
  },

  "fake-food-inspector-scam": {
    title: { sr: "Prevara lažnim inspektorom hrane na vratima (ketering, prodaja)", en: "Fake food inspector doorstep scam" },
    title_en: "Fake food inspector doorstep scam",
    title_sr: "Prevara lažnim inspektorom hrane na vratima (ketering, prodaja)",
    summary_sr: "Koristi se pečat i šifarnik koji liče na inspekciju.",
    summary_en: "A stamp and code list resembling inspection are used.",
    subtitle: { sr: "Lažni inspektor → uzorci → taksa → nema zvaničnog izveštaja.", en: "Fake inspector → samples → fee → no official report." },
    hasPage: true,
    overlaps: ["home-improvement-scam","government-impersonation","fake-electrician-doorstep-scam","fake-social-worker-doorstep-scam","doorstep-paving-scam","fake-sanitation-inspector-scam","impersonation-scam"],
    sources: []
  },

  "seasonal-holiday-donation-scam": {
    title: { sr: "Prevara sezonskom humanitarnom kampanjom na pragu (praznici)", en: "Seasonal holiday donation doorstep scam" },
    title_en: "Seasonal holiday donation doorstep scam",
    title_sr: "Prevara sezonskom humanitarnom kampanjom na pragu (praznici)",
    summary_sr: "Koristi se ime slično poznatoj kampanji ili religijskoj zajednici.",
    summary_en: "A name similar to a known campaign or religious community is used.",
    subtitle: { sr: "Praznična priča → kes ili QR → nema tragova udruženja.", en: "Holiday story → cash or QR → no trail of the organisation." },
    hasPage: true,
    overlaps: ["home-improvement-scam","government-impersonation","fake-electrician-doorstep-scam","fake-social-worker-doorstep-scam","doorstep-paving-scam","charity-scam","funeral-donation-scam"],
    sources: []
  },

  "burglary-pretext-survey-scam": {
    title: { sr: "Prevara anketom kao izgovor posle provale ili prikupljanja informacija", en: "Burglary pretext survey scam" },
    title_en: "Burglary pretext survey scam",
    title_sr: "Prevara anketom kao izgovor posle provale ili prikupljanja informacija",
    summary_sr: "Koristi se lažna studentska ili marketing priča.",
    summary_en: "A fake student or marketing story is used.",
    subtitle: { sr: "Anketa → pitanja o rasporedu i alarmu → kasnija provala ili prodaja podataka.", en: "Survey → questions on schedule and alarm → later burglary or data sale." },
    hasPage: true,
    overlaps: ["home-improvement-scam","government-impersonation","fake-electrician-doorstep-scam","fake-social-worker-doorstep-scam","doorstep-paving-scam","distraction-theft-scam","home-inventory-survey-scam"],
    sources: []
  },

  "fake-neighborhood-watch-scam": {
    title: { sr: "Prevara lažnom susedskom stražom ili bezbednosnim programom", en: "Fake neighborhood watch scam" },
    title_en: "Fake neighborhood watch scam",
    title_sr: "Prevara lažnom susedskom stražom ili bezbednosnim programom",
    summary_sr: "Koristi se logo koji liči na policiju ili opštinu.",
    summary_en: "A logo resembling police or the municipality is used.",
    subtitle: { sr: "Flajer → članarina → znak na kući → nema prave mreže.", en: "Flyer → membership → house sign → no real network." },
    hasPage: true,
    overlaps: ["home-improvement-scam","government-impersonation","fake-electrician-doorstep-scam","fake-social-worker-doorstep-scam","doorstep-paving-scam","alarm-sign-placement-scam","impersonation-scam"],
    sources: []
  },

  "parcel-interception-handoff-scam": {
    title: { sr: "Prevara prevremenim preuzimanjem paketa na adresi (lažni kurir)", en: "Parcel interception handoff scam" },
    title_en: "Parcel interception handoff scam",
    title_sr: "Prevara prevremenim preuzimanjem paketa na adresi (lažni kurir)",
    summary_sr: "Koristi se ime poznatog kurira i lažna SMS poruka.",
    summary_en: "A known courier name and a fake SMS are used.",
    subtitle: { sr: "Lažni kurir → preusmerena pošiljka → taksa → nema paketa.", en: "Fake courier → rerouted parcel → fee → no package." },
    hasPage: true,
    overlaps: ["home-improvement-scam","government-impersonation","fake-electrician-doorstep-scam","fake-social-worker-doorstep-scam","doorstep-paving-scam","fake-delivery","courier-fraud","smishing"],
    sources: []
  },

  "fake-chimney-sweep-scam": {
    title: { sr: "Prevara lažnim dimnjačarem na vratima", en: "Fake chimney sweep doorstep scam" },
    title_en: "Fake chimney sweep doorstep scam",
    title_sr: "Prevara lažnim dimnjačarem na vratima",
    summary_sr: "Koristi se prljavština sa štapića kao dokaz zagušenja.",
    summary_en: "Dirt on a stick is used as proof of blockage.",
    subtitle: { sr: "Obavezni čišćenje dimnjaka → avans → loš ili lažan rad.", en: "Mandatory chimney clean → advance → poor or fake work." },
    hasPage: true,
    overlaps: ["home-improvement-scam","government-impersonation","fake-electrician-doorstep-scam","fake-social-worker-doorstep-scam","doorstep-paving-scam","fake-gas-inspector-scam","door-to-door-home-repair-scam"],
    sources: []
  },

  "home-inventory-survey-scam": {
    title: { sr: "Prevara popisom imovine u stanu pod izgovorom osiguranja ili ankete", en: "Home inventory survey scam" },
    title_en: "Home inventory survey scam",
    title_sr: "Prevara popisom imovine u stanu pod izgovorom osiguranja ili ankete",
    summary_sr: "Koristi se tablet sa logotipom koji liči na poznat brend.",
    summary_en: "A tablet with a logo resembling a known brand is used.",
    subtitle: { sr: "Lažni popis → fotografije vrednosti → krađa ili ciljana provala.", en: "Fake inventory → photos of valuables → theft or targeted burglary." },
    hasPage: true,
    overlaps: ["home-improvement-scam","government-impersonation","fake-electrician-doorstep-scam","fake-social-worker-doorstep-scam","doorstep-paving-scam","burglary-pretext-survey-scam","impersonation-scam"],
    sources: []
  },

  "alarm-sign-placement-scam": {
    title: { sr: "Prevara postavljanjem table pod alarmom radi obilaska ili prodaje", en: "Alarm sign placement scam" },
    title_en: "Alarm sign placement scam",
    title_sr: "Prevara postavljanjem table pod alarmom radi obilaska ili prodaje",
    summary_sr: "Koristi se lažna povezanost sa poznatim alarmnim brendom.",
    summary_en: "A false link to a known alarm brand is used.",
    subtitle: { sr: "Tabla → utisak zaštite → kucanje partnera → prodaja sistema.", en: "Sign → sense of security → partner knocks → system sale." },
    hasPage: true,
    overlaps: ["home-improvement-scam","government-impersonation","fake-electrician-doorstep-scam","fake-social-worker-doorstep-scam","doorstep-paving-scam","home-security-system-scam","fake-neighborhood-watch-scam"],
    sources: []
  },

  "interview-software-install-scam": {
    title: { sr: "Prevara intervjuom i instalacijom softvera", en: "Interview software install scam" },
    title_en: "Interview software install scam",
    title_sr: "Prevara intervjuom i instalacijom softvera",
    summary_sr: "Lažni poslodavac zakazuje intervju i traži instalaciju alata za rad, koji je zapravo malver ili daljinski pristup.",
    summary_en: "A fake employer schedules an interview and asks you to install a \"work tool\" that is actually malware or remote access.",
    subtitle: { sr: "Ponuda posla → intervju → link ili fajl → instalacija → kompromitovan uređaj.", en: "Job offer → interview → link or file → install → compromised device." },
    hasPage: true,
    overlaps: ["job-scam", "fake-hr-scam", "phishing", "tech-support-remote-access-scam", "malicious-app-scam"],
    sources: []
  },

  "equipment-reimbursement-scam": {
    title: { sr: "Prevara naknadom za opremu (reimbursement)", en: "Equipment reimbursement scam" },
    title_en: "Equipment reimbursement scam",
    title_sr: "Prevara naknadom za opremu (reimbursement)",
    summary_sr: "Poslodavac traži da žrtva kupi laptop ili opremu uz obećanje naknade, a novac i posao ne postoje.",
    summary_en: "An \"employer\" asks the victim to buy a laptop or equipment with a promise of reimbursement, while the money and job do not exist.",
    subtitle: { sr: "Ponuda → lista opreme → tvoja uplata → obećana naknada koja ne stiže.", en: "Offer → equipment list → your payment → promised reimbursement never arrives." },
    hasPage: true,
    overlaps: ["job-scam", "advance-fee-fraud", "fake-hr-scam", "recruitment-scam"],
    sources: []
  },
  "fake-mining-investment": {
    title: { sr: "Prevara lažnim rudarenjem u oblaku", en: "Fake mining investment scam" },
    title_en: "Fake mining investment scam",
    title_sr: "Prevara lažnim rudarenjem u oblaku",
    summary_sr: "Lažni cloud mining prodaje haš snagu i isplate koje nisu proverljive; eskalacija ide kroz nadogradnje i naknade dok kontakt ne nestane.",
    summary_en: "Fake cloud mining sells hash power and payouts you cannot verify; escalation runs through upgrades and fees until contact vanishes.",
    subtitle: { sr: "Oglas → uplata → panel → nadogradnja → naknade → nestanak.", en: "Ad → payment → panel → upgrade → fees → disappearance." },
    hasPage: true,
    overlaps: ["crypto-scam", "investment-fraud", "ponzi-scheme", "fake-broker-scam", "recovery-scam"],
    sources: [
      { name: "FBI IC3 — Cryptocurrency scams" },
      { name: "FTC — Cryptocurrency and scams" }
    ]
  },
  "defi-liquidity-scam": {
    title: { sr: "DeFi prevara likvidnostnim poolom", en: "DeFi liquidity pool scam" },
    title_en: "DeFi liquidity pool scam",
    title_sr: "DeFi prevara likvidnostnim poolom",
    summary_sr: "Lažni DeFi interfejs traži wallet connect i štetan approve ili transfer likvidnosti na adresu napadača.",
    summary_en: "A fake DeFi interface asks for wallet connect and a harmful approval or liquidity transfer to the attacker.",
    subtitle: { sr: "Mamac → lažni DEX → connect → approve → gubitak.", en: "Bait → fake DEX → connect → approve → loss." },
    hasPage: true,
    overlaps: ["wallet-drainer", "rug-pull", "phishing", "fake-crypto-exchange-scam", "crypto-scam"],
    sources: [
      { name: "FBI IC3 — Cryptocurrency scams" },
      { name: "FTC — Cryptocurrency and scams" }
    ]
  },
  "copy-trading-scam": {
    title: { sr: "Prevara kopiranjem trejdova", en: "Copy trading scam" },
    title_en: "Copy trading scam",
    title_sr: "Prevara kopiranjem trejdova",
    summary_sr: "Lažna copy-trading platforma prikazuje lažne performanse trejdera i blokira isplatu naknadama.",
    summary_en: "A fake copy-trading platform shows fake trader performance and blocks payout with fees.",
    subtitle: { sr: "Reklama → trejder → depozit → lažni PnL → blokada.", en: "Ad → trader → deposit → fake PnL → block." },
    hasPage: true,
    overlaps: ["fake-broker-scam", "forex-scam", "investment-fraud", "crypto-scam", "pig-butchering"],
    sources: [
      { name: "FBI IC3 — Cryptocurrency scams" },
      { name: "FTC — Cryptocurrency and scams" }
    ]
  },
  "signal-group-investment-scam": {
    title: { sr: "Prevara investicionom signal grupom", en: "Signal group investment scam" },
    title_en: "Signal group investment scam",
    title_sr: "Prevara investicionom signal grupom",
    summary_sr: "Plaćena signal grupa i VIP pretplata na kopiranje vode na lažnog brokera i gubitak depozita.",
    summary_en: "A paid signal group and VIP copy subscription lead to a fake broker and deposit loss.",
    subtitle: { sr: "Grupa → pretplata → signali → broker → gubitak.", en: "Group → subscription → signals → broker → loss." },
    hasPage: true,
    overlaps: ["copy-trading-scam", "pump-dump", "fake-broker-scam", "crypto-scam", "discord-moderator-scam"],
    sources: [
      { name: "FBI IC3 — Cryptocurrency scams" },
      { name: "FTC — Cryptocurrency and scams" }
    ]
  },
  "insider-tip-investment-scam": {
    title: { sr: "Prevara insajderskim tipom za investiciju", en: "Insider tip investment scam" },
    title_en: "Insider tip investment scam",
    title_sr: "Prevara insajderskim tipom za investiciju",
    summary_sr: "Lažna poverljiva informacija traži brzu uplatu i eskalira naknadama; dokumenta nisu proverljiva kod regulatora.",
    summary_en: "Fake confidential information asks for quick payment and escalates with fees; documents are not verifiable with regulators.",
    subtitle: { sr: "Kontakt → NDA → uplata → lažni dokaz → naknade.", en: "Contact → NDA → payment → fake proof → fees." },
    hasPage: true,
    overlaps: ["investment-fraud", "advance-fee-fraud", "fake-broker-scam", "clone-firm-scam", "impersonation-scam"],
    sources: [
      { name: "FBI IC3 — Cryptocurrency scams" },
      { name: "FTC — Cryptocurrency and scams" }
    ]
  },
  "managed-account-scam": {
    title: { sr: "Prevara upravljanim nalogom (MAM/PAMM)", en: "Managed account scam (MAM/PAMM)" },
    title_en: "Managed account scam (MAM/PAMM)",
    title_sr: "Prevara upravljanim nalogom (MAM/PAMM)",
    summary_sr: "Lažni menadžer ili account manager traži API, lozinku ili depozit i prikazuje lažne rezultate do blokade.",
    summary_en: "A fake manager or account manager asks for API, password or deposit and shows fake results until a block.",
    subtitle: { sr: "Menadžer → pristup → lažni PnL → blokada.", en: "Manager → access → fake PnL → block." },
    hasPage: true,
    overlaps: ["fake-broker-scam", "forex-scam", "account-takeover", "wallet-drainer", "investment-fraud"],
    sources: [
      { name: "FBI IC3 — Cryptocurrency scams" },
      { name: "FTC — Cryptocurrency and scams" }
    ]
  },
  "unlicensed-wealth-advisor": {
    title: { sr: "Nelicencirani wealth advisor", en: "Unlicensed wealth advisor scam" },
    title_en: "Unlicensed wealth advisor scam",
    title_sr: "Nelicencirani wealth advisor",
    summary_sr: "Lažni savetnik za bogatstvo prodaje pakete i preusmerava na neregistrovanu investicionu platformu.",
    summary_en: "A fake wealth adviser sells packages and redirects to an unregistered investment platform.",
    subtitle: { sr: "Webinar → paket → broker link → depozit → gubitak.", en: "Webinar → package → broker link → deposit → loss." },
    hasPage: true,
    overlaps: ["fake-broker-scam", "clone-firm-scam", "investment-fraud", "investment-seminar", "crypto-scam"],
    sources: [
      { name: "FBI IC3 — Cryptocurrency scams" },
      { name: "FTC — Cryptocurrency and scams" }
    ]
  },
  "pre-ipo-scam": {
    title: { sr: "Prevara lažnim pre-IPO učešćem", en: "Pre-IPO investment scam" },
    title_en: "Pre-IPO investment scam",
    title_sr: "Prevara lažnim pre-IPO učešćem",
    summary_sr: "Lažna privatna emisija akcija traži uplatu bez registrovanog prospekta i eskalira naknadama.",
    summary_en: "A fake private share issue asks for payment without a registered prospectus and escalates with fees.",
    subtitle: { sr: "NDA → uplata → lažni sertifikat → naknade.", en: "NDA → payment → fake certificate → fees." },
    hasPage: true,
    overlaps: ["investment-fraud", "advance-fee-fraud", "clone-firm-scam", "fake-broker-scam", "insider-tip-investment-scam"],
    sources: [
      { name: "FBI IC3 — Cryptocurrency scams" },
      { name: "FTC — Cryptocurrency and scams" }
    ]
  },
  "ai-trading-bot-scam": {
    title: { sr: "Prevara sa botom za trgovanje uz pomoć veštačke inteligencije", en: "AI trading bot scam" },
    title_en: "AI trading bot scam",
    title_sr: "Prevara sa botom za trgovanje uz pomoć veštačke inteligencije",
    summary_sr: "Lažni bot za trgovanje uz pomoć veštačke inteligencije obećava automatsku zaradu, traži depozit ili API pristup i zatim vas drži na platformi koja manipuliše prikazanim rezultatom. Bazna prevara je i dalje investiciona prevara ili lažna platforma za trejding; sloj veštačke inteligencije samo prodaje priču da mašina navodno radi pametnije i brže od čoveka.",
    summary_en: "A fake AI trading bot promises automated profits, asks for a deposit or API access, and then keeps the victim on a platform that manipulates the displayed results. The base scam is still investment fraud or a fake trading platform; the artificial-intelligence layer simply sells the story that the machine supposedly trades smarter and faster than a human.",
    subtitle: { sr: "Bot → depozit → lažni rezultati → blokada.", en: "Bot → deposit → fake results → block." },
    hasPage: true,
    overlaps: ["binary-robot-scam", "fake-broker-scam", "forex-scam", "crypto-scam", "investment-fraud"],
    sources: [
      { name: "FBI IC3 — Cryptocurrency scams" },
      { name: "FTC — Cryptocurrency and scams" }
    ]
  },
  "binary-robot-scam": {
    title: { sr: "Prevara binarnim opcijama robotom", en: "Binary options robot scam" },
    title_en: "Binary options robot scam",
    title_sr: "Prevara binarnim opcijama robotom",
    summary_sr: "Lažni robot šalje signale na neregulisanoj platformi koja kontroliše ishod i prazni depozit.",
    summary_en: "A fake robot sends signals on an unregulated platform that controls outcomes and empties the deposit.",
    subtitle: { sr: "Robot → depozit → lažni win rate → gubitak.", en: "Robot → deposit → fake win rate → loss." },
    hasPage: true,
    overlaps: ["binary-options-scam", "ai-trading-bot-scam", "fake-broker-scam", "forex-scam", "investment-fraud"],
    sources: [
      { name: "FBI IC3 — Cryptocurrency scams" },
      { name: "FTC — Cryptocurrency and scams" }
    ]
  },
  "crypto-staking-reward-scam": {
    title: { sr: "Prevara lažnim staking nagradama", en: "Crypto staking reward scam" },
    title_en: "Crypto staking reward scam",
    title_sr: "Prevara lažnim staking nagradama",
    summary_sr: "Lažni staking sajt prikazuje nerealne APY i prazni novčanik odobrenjem ili transferom.",
    summary_en: "A fake staking site shows unrealistic APY and empties the wallet via approval or transfer.",
    subtitle: { sr: "Connect → stake → approve → gubitak.", en: "Connect → stake → approve → loss." },
    hasPage: true,
    overlaps: ["defi-liquidity-scam", "wallet-drainer", "rug-pull", "fake-crypto-exchange-scam", "crypto-scam"],
    sources: [
      { name: "FBI IC3 — Cryptocurrency scams" },
      { name: "FTC — Cryptocurrency and scams" }
    ]
  },
  "crypto-node-masternode-scam": {
    title: { sr: "Prevara lažnim čvorom ili masternode-om", en: "Crypto node or masternode scam" },
    title_en: "Crypto node or masternode scam",
    title_sr: "Prevara lažnim čvorom ili masternode-om",
    summary_sr: "Prodaju lažnu licencu čvora ili hosting uz uplate dok infrastruktura ne postoji.",
    summary_en: "They sell a fake node licence or hosting with payments while infrastructure does not exist.",
    subtitle: { sr: "Uplata → lažni status → naknade → nestanak.", en: "Payment → fake status → fees → disappearance." },
    hasPage: true,
    overlaps: ["fake-mining-investment", "crypto-staking-reward-scam", "ponzi-scheme", "investment-fraud", "crypto-scam"],
    sources: [
      { name: "FBI IC3 — Cryptocurrency scams" },
      { name: "FTC — Cryptocurrency and scams" }
    ]
  },
  "fake-token-presale": {
    title: { sr: "Prevara lažnom token presale prodajom", en: "Fake token presale scam" },
    title_en: "Fake token presale scam",
    title_sr: "Prevara lažnom token presale prodajom",
    summary_sr: "Lažna presale stranica prikuplja kripto za tokene koji se ne isporučuju ili nisu od zvaničnog tima.",
    summary_en: "A fake presale page collects crypto for tokens that are not delivered or are not from the official team.",
    subtitle: { sr: "Whitelist → uplata → nema tokena → izgovori.", en: "Whitelist → payment → no tokens → excuses." },
    hasPage: true,
    overlaps: ["rug-pull", "nft-whitelist-scam", "wallet-drainer", "defi-liquidity-scam", "crypto-scam"],
    sources: [
      { name: "FBI IC3 — Cryptocurrency scams" },
      { name: "FTC — Cryptocurrency and scams" }
    ]
  },
  "meme-coin-pump-group": {
    title: { sr: "Prevara pump grupom za meme coin", en: "Meme coin pump group scam" },
    title_en: "Meme coin pump group scam",
    title_sr: "Prevara pump grupom za meme coin",
    summary_sr: "Zatvorena grupa koordiniše pump dok organizatori prodaju ranije; članovi gube na vrhu.",
    summary_en: "A closed group coordinates a pump while insiders sell early; members lose at the top.",
    subtitle: { sr: "Članarina → pump → dump → gubitak.", en: "Membership → pump → dump → loss." },
    hasPage: true,
    overlaps: ["pump-dump", "signal-group-investment-scam", "rug-pull", "fake-token-presale", "crypto-scam"],
    sources: [
      { name: "FBI IC3 — Cryptocurrency scams" },
      { name: "FTC — Cryptocurrency and scams" }
    ]
  },
  "stablecoin-yield-scam": {
    title: { sr: "Prevara yield na stablecoin-u", en: "Stablecoin yield scam" },
    title_en: "Stablecoin yield scam",
    title_sr: "Prevara yield na stablecoin-u",
    summary_sr: "Obećavaju visok fiksni prinos na stablecoin bez rizika preko lažne platforme i naknada pre isplate.",
    summary_en: "They promise high fixed stablecoin yield with no risk via a fake platform and fees before payout.",
    subtitle: { sr: "Depozit → lažni APR → blokada → porez priča.", en: "Deposit → fake APR → block → tax story." },
    hasPage: true,
    overlaps: ["defi-liquidity-scam", "crypto-staking-reward-scam", "investment-fraud", "crypto-scam", "ponzi-scheme"],
    sources: [
      { name: "FBI IC3 — Cryptocurrency scams" },
      { name: "FTC — Cryptocurrency and scams" }
    ]
  },
  "nft-whitelist-scam": {
    title: { sr: "Prevara lažnim NFT whitelist pozivom", en: "NFT whitelist scam" },
    title_en: "NFT whitelist scam",
    title_sr: "Prevara lažnim NFT whitelist pozivom",
    summary_sr: "Lažni whitelist link vodi na mint koji je drainer ili lažna kolekcija.",
    summary_en: "A fake whitelist link leads to a mint that is a drainer or fake collection.",
    subtitle: { sr: "DM → mint → potpis → gubitak.", en: "DM → mint → signature → loss." },
    hasPage: true,
    overlaps: ["nft-scam", "wallet-drainer", "fake-token-presale", "discord-moderator-scam", "phishing"],
    sources: [
      { name: "FBI IC3 — Cryptocurrency scams" },
      { name: "FTC — Cryptocurrency and scams" }
    ]
  },
  "recovery-wallet-drainer": {
    title: { sr: "Recovery prevara koja prazni novčanik", en: "Recovery scam that drains the wallet" },
    title_en: "Recovery scam that drains the wallet",
    title_sr: "Recovery prevara koja prazni novčanik",
    summary_sr: "Lažni recovery servis traži potpis ili alat koji je zapravo wallet drainer.",
    summary_en: "A fake recovery service asks for a signature or tool that is actually a wallet drainer.",
    subtitle: { sr: "Gubitak → recovery → potpis → dupli gubitak.", en: "Loss → recovery → signature → double loss." },
    hasPage: true,
    overlaps: ["recovery-scam", "wallet-drainer", "wallet-approval-scam", "phishing", "crypto-scam"],
    sources: [
      { name: "FBI IC3 — Cryptocurrency scams" },
      { name: "FTC — Cryptocurrency and scams" }
    ]
  },
  "arbitrage-bot-scam": {
    title: { sr: "Prevara arbitraža botom", en: "Arbitrage bot scam" },
    title_en: "Arbitrage bot scam",
    title_sr: "Prevara arbitraža botom",
    summary_sr: "Lažni arbitražni bot prikazuje lažne spreadove na lažnoj menjačnici i blokira isplatu.",
    summary_en: "A fake arbitrage bot shows fake spreads on a fake exchange and blocks payout.",
    subtitle: { sr: "Bot → depozit → lažni spread → blokada.", en: "Bot → deposit → fake spread → block." },
    hasPage: true,
    overlaps: ["ai-trading-bot-scam", "fake-broker-scam", "fake-crypto-exchange-scam", "crypto-scam", "investment-fraud"],
    sources: [
      { name: "FBI IC3 — Cryptocurrency scams" },
      { name: "FTC — Cryptocurrency and scams" }
    ]
  },
  "otc-crypto-broker-scam": {
    title: { sr: "Prevara lažnim OTC kripto brokerom", en: "OTC crypto broker scam" },
    title_en: "OTC crypto broker scam",
    title_sr: "Prevara lažnim OTC kripto brokerom",
    summary_sr: "Lažni OTC desk traži collateral i eskalira naknadama bez isporuke bloka.",
    summary_en: "A fake OTC desk asks for collateral and escalates fees without delivering a block.",
    subtitle: { sr: "Upit → KYC → depozit → izgovori → nestanak.", en: "Inquiry → KYC → deposit → excuses → disappearance." },
    hasPage: true,
    overlaps: ["fake-broker-scam", "advance-fee-fraud", "fake-crypto-exchange-scam", "crypto-scam", "impersonation-scam"],
    sources: [
      { name: "FBI IC3 — Cryptocurrency scams" },
      { name: "FTC — Cryptocurrency and scams" }
    ]
  },
  "crypto-tax-unlock-scam": {
    title: { sr: "Prevara lažnim porezom pre isplate kripta", en: "Crypto tax unlock scam" },
    title_en: "Crypto tax unlock scam",
    title_sr: "Prevara lažnim porezom pre isplate kripta",
    summary_sr: "Traže uplatu poreza u kriptu pre isplate zarade na lažnoj platformi; iznos raste posle svake uplate.",
    summary_en: "They ask for tax in crypto before payout on a fake platform; the amount rises after each payment.",
    subtitle: { sr: "Profit → porez → serija uplata → gubitak.", en: "Profit → tax → payment series → loss." },
    hasPage: true,
    overlaps: ["investment-fraud", "advance-fee-fraud", "fake-broker-scam", "crypto-compliance-unlock-scam", "crypto-scam"],
    sources: [
      { name: "FBI IC3 — Cryptocurrency scams" },
      { name: "FTC — Cryptocurrency and scams" }
    ]
  },
  "crypto-compliance-unlock-scam": {
    title: { sr: "Prevara lažnim compliance ili AML otključavanjem", en: "Crypto compliance unlock scam" },
    title_en: "Crypto compliance unlock scam",
    title_sr: "Prevara lažnim compliance ili AML otključavanjem",
    summary_sr: "Lažni compliance tim traži naknade i dokumenta da otključa sredstva koja zapravo ne postoje ili nisu blokirana.",
    summary_en: "A fake compliance team asks for fees and documents to unlock funds that do not exist or are not really blocked.",
    subtitle: { sr: "Blokada → compliance → naknade → ponavljanje.", en: "Block → compliance → fees → repeat." },
    hasPage: true,
    overlaps: ["crypto-tax-unlock-scam", "phishing", "fake-crypto-exchange-scam", "fake-broker-scam", "account-takeover"],
    sources: [
      { name: "FBI IC3 — Cryptocurrency scams" },
      { name: "FTC — Cryptocurrency and scams" }
    ]
  },
  "funeral-donation-scam": {
    title: { sr: "Prevara lažnom donacijom za sahranu", en: "Fake funeral donation scam" },
    title_en: "Fake funeral donation scam",
    title_sr: "Prevara lažnom donacijom za sahranu",
    summary_en: "A fraudster spreads a story about a family urgently raising funeral funds and asks for a fast donation to a personal account, wallet, or suspicious link that steals data.",
    summary_sr: "Prevarant širi priču o porodici koja hitno skuplja sredstva za sahranu i traži brzu donaciju na privatni račun, novčanik ili sumnjiv link koji krade podatke.",
    subtitle: { sr: "Priča → hitnost → donacija → privatni kanal → gubitak novca ili podataka.", en: "Story → urgency → donation → private rails → money or data loss." },
    hasPage: true,
    tags: ["prevare", "edukacija"],
    overlaps: ["charity-scam", "identity-theft", "phishing", "advance-fee-fraud"],
    sources: []
  },
  "missing-child-donation-scam": {
    title: { sr: "Prevara lažnom donacijom za nestalo dete", en: "Missing child donation scam" },
    title_en: "Missing child donation scam",
    title_sr: "Prevara lažnom donacijom za nestalo dete",
    summary_en: "A fake campaign uses a stolen or invented photo and asks for shares plus donations, often via a fake link or account number that does not belong to the family.",
    summary_sr: "Lažna kampanja koristi ukradenu ili izmišljenu fotografiju i traži deljenje uz donaciju, često kroz lažni link ili broj računa koji ne pripada porodici.",
    subtitle: { sr: "Emotivna priča → deljenje → hitna uplata → lažni kanal → gubitak.", en: "Emotional story → sharing → urgent payment → fake channel → loss." },
    hasPage: true,
    tags: ["prevare", "edukacija"],
    overlaps: ["charity-scam", "identity-theft", "smishing", "phishing"],
    sources: []
  },
  "pet-adoption-scam": {
    title: { sr: "Prevara lažnim usvajanjem ljubimca", en: "Pet adoption scam" },
    title_en: "Pet adoption scam",
    title_sr: "Prevara lažnim usvajanjem ljubimca",
    summary_en: "A listing for a free or cheap pet asks for a deposit, shipping, or insurance upfront, while the animal does not exist or never arrives.",
    summary_sr: "Oglas za besplatno ili jeftino štene traži depozit, transport ili osiguranje unapred, a životinja ne postoji ili nikad ne stiže.",
    subtitle: { sr: "Oglas → privatni chat → naknada unapred → nestanak prodavca.", en: "Listing → private chat → upfront fee → seller disappears." },
    hasPage: true,
    tags: ["prevare", "edukacija"],
    overlaps: ["marketplace-scam", "advance-fee-fraud", "romantic-scam", "identity-theft"],
    sources: []
  },
  "breeder-transport-fee-scam": {
    title: { sr: "Prevara naknadom za transport od uzgajivača", en: "Breeder transport fee scam" },
    title_en: "Breeder transport fee scam",
    title_sr: "Prevara naknadom za transport od uzgajivača",
    summary_en: "A fake breeder requests a series of fees for shipping, quarantine, insurance, or customs before the pet supposedly ships, then cuts contact.",
    summary_sr: "Lažni uzgajivač traži seriju naknada za transport, karantin, osiguranje ili carinu pre nego što ljubimac navodno krene, a zatim prekine kontakt.",
    subtitle: { sr: "Rezervacija → transport → dodatne takse → nestanak.", en: "Reservation → shipping → extra fees → disappearance." },
    hasPage: true,
    tags: ["prevare", "edukacija"],
    overlaps: ["marketplace-scam", "advance-fee-fraud", "fake-delivery", "identity-theft"],
    sources: []
  },
  "military-romance-scam": {
    title: { sr: "Vojna romantična prevara", en: "Military romance scam" },
    title_en: "Military romance scam",
    title_sr: "Vojna romantična prevara",
    summary_en: "The contact poses as a deployed service member, builds a bond, then asks for money for travel, leave, a courier, or an emergency while claiming military rules block communication.",
    summary_sr: "Kontakt se predstavlja kao vojnik na misiji, gradi odnos, zatim traži novac za put, dozvolu, kurir ili hitnu pomoć uz izgovor da vojska blokira komunikaciju.",
    subtitle: { sr: "Uniforma kao autoritet → odnos → hitna uplata → novi izgovori.", en: "Uniform as authority → bond → urgent payment → new excuses." },
    hasPage: true,
    tags: ["prevare", "edukacija"],
    overlaps: ["romantic-scam", "pig-butchering", "advance-fee-fraud", "impersonation-scam", "identity-theft"],
    sources: []
  },
  "sugar-scam": {
    title: { sr: "Prevara lažnim sugar aranžmanom", en: "Sugar arrangement scam" },
    title_en: "Sugar arrangement scam",
    title_sr: "Prevara lažnim sugar aranžmanom",
    summary_en: "A fake arrangement asks for a deposit, membership, paid identity verification, or a tax before the first meeting, and money leaves without the promised relationship.",
    summary_sr: "Lažni aranžman traži depozit, članarinu, verifikaciju identiteta uz uplatu ili porez pre prvog susreta, a novac odlazi bez dogovorenog odnosa.",
    subtitle: { sr: "Dogovor → pravila → naknada unapred → nestanak.", en: "Agreement → rules → upfront fee → disappearance." },
    hasPage: true,
    tags: ["prevare", "edukacija"],
    overlaps: ["romantic-scam", "pig-butchering", "advance-fee-fraud", "identity-theft"],
    sources: []
  },
  "medical-appointment-phishing": {
    title: { sr: "Fišing lažnog termina kod lekara", en: "Medical appointment phishing" },
    title_en: "Medical appointment phishing",
    title_sr: "Fišing lažnog termina kod lekara",
    summary_en: "A message or email pretends to be a clinic, asks to confirm an appointment or pay a copay through a link that leads to a fake form for data or money theft.",
    summary_sr: "Poruka ili mejl glumi kliniku, traži potvrdu termina ili plaćanje participacije preko linka koji vodi na lažnu formu za krađu podataka ili novca.",
    subtitle: { sr: "SMS/mejl → termin → link → forma → krađa.", en: "SMS/email → appointment → link → form → theft." },
    hasPage: true,
    tags: ["prevare", "edukacija"],
    overlaps: ["healthcare-impersonation", "phishing", "fake-medical-scam", "smishing", "identity-theft"],
    sources: []
  },
  "fake-lab-result-phishing": {
    title: { sr: "Fišing lažnih laboratorijskih nalaza", en: "Fake lab result phishing" },
    title_en: "Fake lab result phishing",
    title_sr: "Fišing lažnih laboratorijskih nalaza",
    summary_en: "A notice claims results are ready or abnormal and asks you to sign in on a fake portal to download a PDF or pay, stealing login or card data.",
    summary_sr: "Obaveštenje tvrdi da je nalaz spreman ili abnormalan i traži prijavu na lažnom portalu radi preuzimanja PDF-a ili plaćanja, što krade pristupne podatke.",
    subtitle: { sr: "Obaveštenje → strah ili žurba → link → lažni portal.", en: "Notice → fear or rush → link → fake portal." },
    hasPage: true,
    tags: ["prevare", "edukacija"],
    overlaps: ["healthcare-impersonation", "phishing", "fake-medical-scam", "vishing", "identity-theft"],
    sources: []
  },
  "organ-donor-transplant-fee-scam": {
    title: { sr: "Prevara lažnom naknadom za transplantaciju organa", en: "Fake organ transplant fee scam" },
    title_en: "Fake organ transplant fee scam",
    title_sr: "Prevara lažnom naknadom za transplantaciju organa",
    summary_en: "A fraudster claims a waitlist can be sped up with a fee or a donation to a health fund, which is not how legitimate transplant systems work.",
    summary_sr: "Prevarant tvrdi da se lista čeka može ubrzati uz naknadu ili donaciju u zdravstveni fond, što nije kako zvanični transplantacioni sistemi funkcionišu.",
    subtitle: { sr: "Poziv → obećanje prioriteta → uplata → prevara.", en: "Contact → priority promise → payment → fraud." },
    hasPage: true,
    tags: ["prevare", "edukacija"],
    overlaps: ["fake-medical-scam", "charity-scam", "advance-fee-fraud", "impersonation-scam", "healthcare-impersonation", "identity-theft"],
    sources: []
  },
  "funeral-home-scam": {
    title: { sr: "Prevara pogrebnog preduzeća ili lažnog agenta", en: "Funeral home or fake funeral agent scam" },
    title_en: "Funeral home or fake funeral agent scam",
    title_sr: "Prevara pogrebnog preduzeća ili lažnog agenta",
    summary_en: "A fake agent or unmarked intermediary sells an expensive package, adds hidden invoice lines, or demands advance payment to a suspicious account outside normal funeral home practice.",
    summary_sr: "Lažni agent ili neoznačeni posrednik prodaje skup paket usluga, dodaje skrivene stavke na račun ili traži avans na sumnjiv račun van uobičajene prakse ustanove.",
    subtitle: { sr: "Kontakt → paket → pritisak → uplata van standardnog toka.", en: "Contact → package → pressure → payment outside normal flow." },
    hasPage: true,
    tags: ["prevare", "edukacija"],
    overlaps: ["charity-scam", "advance-fee-fraud", "impersonation-scam", "identity-theft"],
    sources: []
  },
  "pharmacy-impersonation-scam": {
    title: { sr: "Prevara lažnom apotekom ili dostavom lekova", en: "Pharmacy impersonation scam" },
    title_en: "Pharmacy impersonation scam",
    title_sr: "Prevara lažnom apotekom ili dostavom lekova",
    summary_en: "A call or site impersonates a pharmacy, asks for prescription details and payment for medicine that never arrives or is not legitimate, or redirects to a fake form.",
    summary_sr: "Poziv ili sajt glumi apoteku, traži podatke recepta i plaćanje za lek koji ne stiže ili nije registrovan, ili preusmerava na lažnu formu.",
    subtitle: { sr: "Kontakt → recept → uplata → nema isporuke.", en: "Contact → prescription → payment → no delivery." },
    hasPage: true,
    tags: ["prevare", "edukacija"],
    overlaps: ["healthcare-impersonation", "fake-medical-scam", "phishing", "fake-medicine-scam", "identity-theft"],
    sources: []
  },
  "elder-tech-support-scam": {
    title: { sr: "Prevara lažnom tehničkom podrškom za starije osobe", en: "Elder tech support scam" },
    title_en: "Elder tech support scam",
    title_sr: "Prevara lažnom tehničkom podrškom za starije osobe",
    summary_en: "A call or pop-up claims the computer is infected, asks for remote access or a payment for activation, leading to account and money theft.",
    summary_sr: "Poziv ili iskačući prozor tvrdi da je računar zaražen, traži daljinski pristup ili uplatu za aktivaciju, što vodi u krađu naloga i novca.",
    subtitle: { sr: "Upozorenje → daljinski pristup → uplata → šteta.", en: "Warning → remote access → payment → harm." },
    hasPage: true,
    tags: ["prevare", "edukacija"],
    overlaps: ["tech-support-scam", "tech-support-remote-access-scam", "impersonation-scam", "identity-theft"],
    sources: []
  },
  "caregiver-payroll-scam": {
    title: { sr: "Prevara lažnim poslom negovača ili platnom listom", en: "Caregiver payroll scam" },
    title_en: "Caregiver payroll scam",
    title_sr: "Prevara lažnim poslom negovača ili platnom listom",
    summary_en: "A fake care employer charges for a uniform, training, checks, or software before the first day of work, while the job does not exist.",
    summary_sr: "Lažni poslodavac za negu traži naknadu za uniformu, obuku, proveru ili softver pre prvog dana rada, a posao ne postoji.",
    subtitle: { sr: "Oglas → intervju → naknada unapred → tišina.", en: "Listing → interview → upfront fee → silence." },
    hasPage: true,
    tags: ["prevare", "edukacija"],
    overlaps: ["job-scam", "identity-theft", "advance-fee-fraud", "fake-hr-scam"],
    sources: []
  },
  "home-care-service-scam": {
    title: { sr: "Prevara lažnom kućnom negom", en: "Fake home care service scam" },
    title_en: "Fake home care service scam",
    title_sr: "Prevara lažnom kućnom negom",
    summary_en: "A fake agency sells visit packages or 24/7 care for a large advance, while service is not delivered or sham reports are produced.",
    summary_sr: "Lažna agencija prodaje paket poseta ili 24/7 negu uz veliki avans, a usluga se ne isporučuje ili se štancuju lažni izveštaji.",
    subtitle: { sr: "Ponuda → ugovor → avans → nema nege.", en: "Offer → contract → advance → no care." },
    hasPage: true,
    tags: ["prevare", "edukacija"],
    overlaps: ["fake-medical-scam", "advance-fee-fraud", "impersonation-scam", "identity-theft", "healthcare-impersonation"],
    sources: []
  },
  "funeral-assistance-scam": {
    title: { sr: "Prevara lažnom pomoći oko sahrane", en: "Fake funeral assistance scam" },
    title_en: "Fake funeral assistance scam",
    title_sr: "Prevara lažnom pomoći oko sahrane",
    summary_en: "An advisor offers fast paperwork, cheaper services, or help with documents for an upfront fee, without real coordination with institutions.",
    summary_sr: "Savetnik nudi brzu proceduru, jeftinije usluge ili pomoć oko dokumentacije uz naknadu unapred, bez stvarnog kontakta sa ustanovama.",
    subtitle: { sr: "Ponuda → dokumenta → uplata → nema usluge.", en: "Offer → paperwork → payment → no service." },
    hasPage: true,
    tags: ["prevare", "edukacija"],
    overlaps: ["charity-scam", "advance-fee-fraud", "government-impersonation", "identity-theft"],
    sources: []
  },
  "adoption-paperwork-scam": {
    title: { sr: "Prevara naknadama za dokumenta usvajanja", en: "Adoption paperwork fee scam" },
    title_en: "Adoption paperwork fee scam",
    title_sr: "Prevara naknadama za dokumenta usvajanja",
    summary_en: "A fake intermediary or lawyer requests repeated fees for stamps, translations, and urgent charges before an official process they do not control.",
    summary_sr: "Lažni posrednik ili advokat traži seriju naknada za overe, prevode i hitne takse pre zvaničnog procesa koji on ne vodi.",
    subtitle: { sr: "Kontakt → lista naknada → žurba → gubitak.", en: "Contact → fee list → rush → loss." },
    hasPage: true,
    tags: ["prevare", "edukacija"],
    overlaps: ["advance-fee-fraud", "impersonation-scam", "identity-theft", "charity-scam"],
    sources: []
  },
  "surrogacy-fertility-arrangement-scam": {
    title: { sr: "Prevara lažnim surrogacy ili fertilitet aranžmanom", en: "Fake surrogacy or fertility arrangement scam" },
    title_en: "Fake surrogacy or fertility arrangement scam",
    title_sr: "Prevara lažnim surrogacy ili fertilitet aranžmanom",
    summary_en: "A fake clinic or broker demands a large deposit for a program that does not exist, uses invented surrogate profiles, and avoids licensed channels.",
    summary_sr: "Lažna klinika ili posrednik traži veliki depozit za program koji ne postoji, koristi lažne profile surrogate majki i izbegava licencirane kanale.",
    subtitle: { sr: "Oglas → ugovor → depozit → nestanak.", en: "Ad → contract → deposit → disappearance." },
    hasPage: true,
    tags: ["prevare", "edukacija"],
    overlaps: ["fake-medical-scam", "advance-fee-fraud", "impersonation-scam", "identity-theft", "healthcare-impersonation"],
    sources: []
  },
  "genealogy-inheritance-hunter-scam": {
    title: { sr: "Prevara lovca na nasledstvo preko genealogije", en: "Genealogy inheritance hunter scam" },
    title_en: "Genealogy inheritance hunter scam",
    title_sr: "Prevara lovca na nasledstvo preko genealogije",
    summary_en: "Contact claims unknown inheritance exists and asks for research fees, taxes, or release payments before any genuine document appears.",
    summary_sr: "Kontakt tvrdi da postoji nepoznato nasledstvo i traži naknadu za istraživanje, takse ili oslobađanje sredstava pre nego što se pokaže zvaničan dokument.",
    subtitle: { sr: "Priča → taksa → dokumenti koji ne stižu → ponavljanje.", en: "Story → fee → documents never arrive → repeat." },
    hasPage: true,
    tags: ["prevare", "edukacija"],
    overlaps: ["identity-theft", "advance-fee-fraud", "phishing", "impersonation-scam"],
    sources: []
  },
  "nursing-home-placement-scam": {
    title: { sr: "Prevara lažnim smeštajem u dom starosti", en: "Nursing home placement scam" },
    title_en: "Nursing home placement scam",
    title_sr: "Prevara lažnim smeštajem u dom starosti",
    summary_en: "An agent sells a guaranteed nursing home spot for a fee or advance, without a contract with a real facility and without verifiable contacts.",
    summary_sr: "Agent prodaje garantovano mesto u domu uz nagradu ili avans, bez ugovora sa stvarnom ustanovom i bez proverljivog kontakta.",
    subtitle: { sr: "Hitnost → uplata → mesto ne postoji.", en: "Urgency → payment → spot does not exist." },
    hasPage: true,
    tags: ["prevare", "edukacija"],
    overlaps: ["advance-fee-fraud", "impersonation-scam", "identity-theft", "fake-medical-scam", "healthcare-impersonation"],
    sources: []
  },
  "home-caregiver-theft-scam": {
    title: { sr: "Krađa i zloupotreba poverenja kućnog negovača", en: "Home caregiver theft and trust abuse scam" },
    title_en: "Home caregiver theft and trust abuse scam",
    title_sr: "Krađa i zloupotreba poverenja kućnog negovača",
    summary_en: "A hired or fake caregiver uses home access to steal cash, cards, or data, or isolates an older person from family to control finances.",
    summary_sr: "Zaposleni ili lažni negovatelj koristi pristup kući da ukrade gotovinu, kartice ili podatke, ili izoluje stariju osobu od porodice radi kontrole finansija.",
    subtitle: { sr: "Poverenje → pristup → pritisak ili krađa → šteta.", en: "Trust → access → pressure or theft → harm." },
    hasPage: true,
    tags: ["prevare", "edukacija"],
    overlaps: ["identity-theft", "impersonation-scam", "account-takeover", "romantic-scam"],
    sources: []
  },
  "medication-substitution-scam": {
    title: { sr: "Prevara zamene ili lažnih lekova", en: "Medication substitution scam" },
    title_en: "Medication substitution scam",
    title_sr: "Prevara zamene ili lažnih lekova",
    summary_en: "An online seller ships the wrong, expired, or fake product instead of prescribed medicine, or charges for an unregistered generic.",
    summary_sr: "Online prodavac šalje pogrešan, istekao ili lažan preparat umesto propisanog leka, ili traži uplatu za generik koji nije registrovan.",
    subtitle: { sr: "Cena → uplata → isporuka ne odgovara porudžbini.", en: "Price → payment → delivery does not match order." },
    hasPage: true,
    tags: ["prevare", "edukacija"],
    overlaps: ["fake-medical-scam", "fake-medicine-scam", "marketplace-scam", "phishing", "healthcare-impersonation", "identity-theft"],
    sources: []
  },
  "medical-device-doorstep-scam": {
    title: { sr: "Prevara medicinskim aparatom na vratima", en: "Medical device doorstep scam" },
    title_en: "Medical device doorstep scam",
    title_sr: "Prevara medicinskim aparatom na vratima",
    summary_en: "A visitor offers a free check or a medical device with a contract that locks in expensive installment obligations.",
    summary_sr: "Posetilac nudi besplatnu proveru ili zdravstveni aparat uz potpis ugovora o ratama koji vezuje na skupe obaveze.",
    subtitle: { sr: "Poseta → potpis → rata → visok dug.", en: "Visit → signature → installments → heavy debt." },
    hasPage: true,
    tags: ["prevare", "edukacija"],
    overlaps: ["fake-medical-scam", "impersonation-scam", "advance-fee-fraud", "tech-support-scam", "healthcare-impersonation"],
    sources: []
  },
  "free-health-check-sales-scam": {
    title: { sr: "Prevara besplatnom zdravstvenom proverom kao prodajom", en: "Free health check sales scam" },
    title_en: "Free health check sales scam",
    title_sr: "Prevara besplatnom zdravstvenom proverom kao prodajom",
    summary_en: "A free blood pressure check or screening at a mall or booth turns into aggressive supplement sales, packages, or bookings with upfront payment.",
    summary_sr: "Besplatno merenje pritiska ili skrining u tržnom centru ili na štandu prerasta u agresivnu prodaju suplemenata, paketa ili zakazivanje uz avans.",
    subtitle: { sr: "Besplatno → dijagnoza bez lekara → prodaja.", en: "Free → non-doctor diagnosis → sales pitch." },
    hasPage: true,
    tags: ["prevare", "edukacija"],
    overlaps: ["fake-medical-scam", "investment-seminar", "advance-fee-fraud", "impersonation-scam", "healthcare-impersonation"],
    sources: []
  },
  "school-pickup-impersonation-scam": {
    title: { sr: "Prevara lažnim preuzimanjem deteta iz škole", en: "School pickup impersonation scam" },
    title_en: "School pickup impersonation scam",
    title_sr: "Prevara lažnim preuzimanjem deteta iz škole",
    summary_en: "A message or call impersonates the school, child, or a third party and demands an urgent pickup change or payment for an activity, enabling abduction planning or data theft.",
    summary_sr: "Poruka ili poziv glumi školu, dete ili treću osobu i traži hitnu promenu plana preuzimanja ili uplatu za aktivnost, što služi za kidnaping scenar ili krađu podataka.",
    subtitle: { sr: "Hitnost → promena plana → rizik po dete i porodicu.", en: "Urgency → plan change → risk to child and family." },
    hasPage: true,
    tags: ["prevare", "edukacija"],
    overlaps: ["impersonation-scam", "identity-theft", "smishing", "phishing"],
    sources: []
  },
  "miracle-cure-seminar-scam": {
    title: { sr: "Prevara seminarom čudotvornog leka", en: "Miracle cure seminar scam" },
    title_en: "Miracle cure seminar scam",
    title_sr: "Prevara seminarom čudotvornog leka",
    summary_en: "A seminar sells a revolutionary treatment with tickets, product bundles, and cure promises without evidence, often with on-site pressure.",
    summary_sr: "Seminar prodaje revolucionarni tretman uz ulaznicu, paket proizvoda i obećanje izlečenja bez dokaza, često uz pritisak na mesto.",
    subtitle: { sr: "Prezentacija → strah → kupovina na licu mesta.", en: "Presentation → fear → on-site purchase." },
    hasPage: true,
    tags: ["prevare", "edukacija"],
    overlaps: ["fake-medical-scam", "investment-seminar", "advance-fee-fraud", "charity-scam"],
    sources: []
  },
  "faith-healer-scam": {
    title: { sr: "Prevara lažnog iscelitelja ili duhovnog učitelja", en: "Faith healer scam" },
    title_en: "Faith healer scam",
    title_sr: "Prevara lažnog iscelitelja ili duhovnog učitelja",
    summary_en: "A healer asks for donations, ritual fees, or purchases of blessed items while promising cures and steering away from legitimate medical care.",
    summary_sr: "Iscelitelj traži donacije, naknade za ritual ili kupovinu posvećenih predmeta uz obećanje izlečenja koje se odlikuje izbegavanjem zvanične medicine.",
    subtitle: { sr: "Obećanje → uplata → ponavljanje bez rezultata.", en: "Promise → payment → repeat without results." },
    hasPage: true,
    tags: ["prevare", "edukacija"],
    overlaps: ["fake-medical-scam", "charity-scam", "advance-fee-fraud", "impersonation-scam", "healthcare-impersonation"],
    sources: []
  },
  "fake-religious-blessing-scam": {
    title: { sr: "Prevara lažnim verskim blagoslovom ili darom", en: "Fake religious blessing scam" },
    title_en: "Fake religious blessing scam",
    title_sr: "Prevara lažnim verskim blagoslovom ili darom",
    summary_en: "Someone poses as clergy or an intermediary and asks for money for a blessing, candle, or ritual paid upfront to a suspicious account.",
    summary_sr: "Prevarant se predstavlja kao sveštenik ili posrednik i traži novac za blagoslov, sveću ili ritual koji se plaća unapred na sumnjiv račun.",
    subtitle: { sr: "Autoritet → dar → uplata → nema dokaza o ritualu.", en: "Authority → offering → payment → no proof of ritual." },
    hasPage: true,
    tags: ["prevare", "edukacija"],
    overlaps: ["charity-scam", "advance-fee-fraud", "impersonation-scam", "identity-theft", "healthcare-impersonation"],
    sources: []
  },
  "fertility-clinic-advance-fee-scam": {
    title: { sr: "Prevara avansom lažne klinike za plodnost", en: "Fertility clinic advance fee scam" },
    title_en: "Fertility clinic advance fee scam",
    title_sr: "Prevara avansom lažne klinike za plodnost",
    summary_en: "A fake clinic demands a large deposit for IVF or treatment, sends generic instructions, and avoids a license and address you can verify in a registry.",
    summary_sr: "Lažna klinika traži veliki depozit za IVF ili tretman, šalje generičke uputstva i izbegava licencu i adresu koja se proverava u registru.",
    subtitle: { sr: "Konsultacija → depozit → odlaganje → nestanak.", en: "Consultation → deposit → delays → disappearance." },
    hasPage: true,
    tags: ["prevare", "edukacija"],
    overlaps: ["fake-medical-scam", "advance-fee-fraud", "impersonation-scam", "identity-theft", "healthcare-impersonation"],
    sources: []
  },
  "home-nursing-subscription-scam": {
    title: { sr: "Prevara pretplatom na kućnu negu", en: "Home nursing subscription scam" },
    title_en: "Home nursing subscription scam",
    title_sr: "Prevara pretplatom na kućnu negu",
    summary_en: "A subscription for unlimited visits or telemedicine has hard cancellation, hidden clauses, or monthly charges without real services.",
    summary_sr: "Ponuda pretplate za neograničene posete ili telemedicinu ima teško otkazivanje, skrivene clause ili naplatu mesečno bez stvarnih usluga.",
    subtitle: { sr: "Ugovor → pretplata → otkaz ne prolazi → dug.", en: "Contract → subscription → cancel fails → debt." },
    hasPage: true,
    tags: ["prevare", "edukacija"],
    overlaps: ["fake-medical-scam", "subscription-trap", "advance-fee-fraud", "impersonation-scam", "healthcare-impersonation", "identity-theft"],
    sources: []
  },
  "elder-fraud-support-service-scam": {
    title: { sr: "Prevara servisa za žrtve prevare starijih", en: "Elder fraud support service scam" },
    title_en: "Elder fraud support service scam",
    title_sr: "Prevara servisa za žrtve prevare starijih",
    summary_en: "After an incident, a new contact offers recovery for a fee, protective software, or legal help with upfront payment, continuing the same pattern.",
    summary_sr: "Nakon incidenta, novi kontakt nudi povrat novca uz proviziju, softver za zaštitu ili advokatsku pomoć uz uplatu unapred, što je nastavak iste šeme.",
    subtitle: { sr: "Poziv → obećanje povrata → uplata → gubitak.", en: "Call → recovery promise → payment → loss." },
    hasPage: true,
    tags: ["prevare", "edukacija"],
    overlaps: ["tech-support-scam", "recovery-scam", "advance-fee-fraud", "impersonation-scam", "identity-theft"],
    sources: []
  },
  "bereavement-identity-theft-scam": {
    title: { sr: "Krađa identiteta posle žalosti ili smrti u porodici", en: "Bereavement identity theft scam" },
    title_en: "Bereavement identity theft scam",
    title_sr: "Krađa identiteta posle žalosti ili smrti u porodici",
    summary_en: "A fraudster uses public obituaries or social posts to contact grieving relatives with fake bills, data updates, or inheritance claims.",
    summary_sr: "Prevarant koristi javne osmrtnice ili objave na mreži da kontaktira ožalošćene sa lažnim računom, ažuriranjem podataka ili nasledstvom.",
    subtitle: { sr: "Javni podatak → kontakt → forma ili uplata → krađa.", en: "Public data → contact → form or payment → theft." },
    hasPage: true,
    tags: ["prevare", "edukacija"],
    overlaps: ["identity-theft", "charity-scam", "phishing", "account-takeover"],
    sources: []
  },
  "hospice-billing-scam": {
    title: { sr: "Prevara lažnim računom ili doplatom za hospis", en: "Hospice billing scam" },
    title_en: "Hospice billing scam",
    title_sr: "Prevara lažnim računom ili doplatom za hospis",
    summary_en: "A message or call demands an insurance top-up, coverage activation, or payment for a bill that does not match the real hospice provider.",
    summary_sr: "Poruka ili poziv traži doplatu osiguranja, aktivaciju pokrića ili plaćanje računa koji ne odgovara stvarnoj ustanovi koja brine o pacijentu.",
    subtitle: { sr: "Račun → žurba → link ili račun prevaranta.", en: "Invoice → rush → link or fraudster account." },
    hasPage: true,
    tags: ["prevare", "edukacija"],
    overlaps: ["healthcare-impersonation", "fake-medical-scam", "phishing", "advance-fee-fraud", "identity-theft"],
    sources: []
  },
  "marketplace-buyer-protection-scam": {
    title: { sr: "Prevara lažnom zaštitom kupca na oglasniku", en: "Fake marketplace buyer protection scam" },
    title_en: "Fake marketplace buyer protection scam",
    title_sr: "Prevara lažnom zaštitom kupca na oglasniku",
    summary_en: "This scam borrows the language of escrow and buyer protection to make off-platform payment feel safer than staying inside the marketplace. Unlike a generic payment-link scam, the hook is not just the page but the story that a special protected flow exists outside the real platform. Signal: the seller or buyer says the platform has a separate protection page, courier page, or mediator link that still requires you to leave the listing system to pay or verify.",
    summary_sr: "Ova prevara pozajmljuje jezik eskroua i zaštite kupca da bi uplata van platforme delovala bezbednije nego ostanak u samom oglasnom sistemu. Za razliku od opšte prevare sa linkom za plaćanje, mamac ovde nije samo stranica nego priča da postoji poseban zaštićen tok izvan prave platforme. Signal: prodavac ili kupac tvrde da platforma ima posebnu stranicu zaštite, kurira ili posrednika, ali vas ipak tera da izađete iz sistema oglasa radi plaćanja ili verifikacije.",
    subtitle: { sr: "Zaštita kupca služi kao paravan: čim morate van platforme, zaštita prestaje da bude prava.", en: "Buyer protection is the cover story: the moment you must leave the platform, the protection stops being real." },
    hasPage: true,
    tags: ["potrošač"],
    overlaps: ["marketplace-scam","refund-scam","phishing","advance-fee-fraud"],
    sources: [
      { name: "FTC — Consumer advice" },
      { name: "European Consumer Centre — travel and online purchases" }
    ]
  },
  "courier-insurance-scam": {
    title: { sr: "Prevara lažnim osiguranjem pošiljke", en: "Courier parcel insurance fee scam" },
    title_en: "Courier parcel insurance fee scam",
    title_sr: "Prevara lažnim osiguranjem pošiljke",
    summary_en: "A fake courier or seller asks extra payment for insurance, customs, or secure delivery via a link that steals data or drains the card.",
    summary_sr: "Lažni kurir ili prodavac traži dodatnu uplatu za osiguranje, carinu ili sigurnu dostavu na link koji krade podatke ili prazni karticu.",
    subtitle: { sr: "Poruka o paketu → naknada za osiguranje → lažni link → krađa podataka → gubitak.", en: "Parcel message → insurance fee → fake link → data theft → loss." },
    hasPage: true,
    tags: ["potrošač"],
    overlaps: ["parcel-scam","package-redelivery-scam","marketplace-scam","phishing"],
    sources: [
      { name: "FTC — Consumer advice" },
      { name: "European Consumer Centre — travel and online purchases" }
    ]
  },
  "hotel-overbooking-scam": {
    title: { sr: "Prevara lažnim prebukiravanjem u hotelu", en: "Fake hotel overbooking scam" },
    title_en: "Fake hotel overbooking scam",
    title_sr: "Prevara lažnim prebukiravanjem u hotelu",
    summary_en: "A fake agent or site claims the hotel is overbooked and offers alternative lodging for an extra fee or a fake charge to reconfirm the booking.",
    summary_sr: "Lažni agent ili sajt tvrde da je hotel prebukiran i nude alternativni smeštaj uz dodatnu uplatu ili lažnu naknadu za ponovnu potvrdu rezervacije.",
    subtitle: { sr: "Poziv ili mejl o prebukiranju → uplata ili novi link → rezervacija ne postoji → gubitak.", en: "Call or email about overbooking → payment or new link → no valid booking → loss." },
    hasPage: true,
    tags: ["hotel","putovanje"],
    overlaps: ["travel-booking-scam","rental-scam","refund-scam","advance-fee-fraud"],
    sources: [
      { name: "FTC — Consumer advice" },
      { name: "European Consumer Centre — travel and online purchases" }
    ]
  },
  "fake-tour-operator-scam": {
    title: { sr: "Prevara lažnim tur operaterom", en: "Fake tour operator scam" },
    title_en: "Fake tour operator scam",
    title_sr: "Prevara lažnim tur operaterom",
    summary_en: "A fake agency sells tours or packages with bogus credentials and full prepayment, while the service does not exist or is cancelled without refund.",
    summary_sr: "Lažna agencija prodaje obilaske, izlete ili pakete sa lažnim licencama i punom avansom, a usluga ne postoji ili se otkazuje bez povrata.",
    subtitle: { sr: "Oglas → rezervacija → uplata → nema obilaska → gubitak.", en: "Ad → booking → payment → no tour → loss." },
    hasPage: true,
    tags: ["putovanje","turizam"],
    overlaps: ["travel-booking-scam","ticket-scam","marketplace-scam","advance-fee-fraud"],
    sources: [
      { name: "FTC — Consumer advice" },
      { name: "European Consumer Centre — travel and online purchases" }
    ]
  },
  "timeshare-resale-scam": {
    title: { sr: "Prevara prevprodajom timeshare-a", en: "Timeshare resale scam" },
    title_en: "Timeshare resale scam",
    title_sr: "Prevara prevprodajom timeshare-a",
    summary_en: "A fake buyer or agency promises a quick timeshare resale for marketing, tax, or escrow fees, but no sale exists.",
    summary_sr: "Lažni kupac ili agencija obećava brzu prodaju vašeg timeshare-a uz naknadu za marketing, porez ili eskrou, a prodaja ne postoji.",
    subtitle: { sr: "Kontakt → naknada za prodaju → serija uplata → nema kupca → gubitak.", en: "Contact → fee to sell → payment series → no buyer → loss." },
    hasPage: true,
    tags: ["nekretnine","putovanje"],
    overlaps: ["travel-booking-scam","advance-fee-fraud","refund-scam","marketplace-scam"],
    sources: [
      { name: "FTC — Consumer advice" },
      { name: "European Consumer Centre — travel and online purchases" }
    ]
  },
  "airport-transfer-prepayment-scam": {
    title: { sr: "Prevara unaprednom uplatom za transfer sa aerodroma", en: "Airport transfer prepayment scam" },
    title_en: "Airport transfer prepayment scam",
    title_sr: "Prevara unaprednom uplatom za transfer sa aerodroma",
    summary_en: "A fake site or driver asks full prepayment for a transfer to an unknown account, but the driver or booking does not exist on the flight day.",
    summary_sr: "Lažni sajt ili vozač traži punu uplatu transfera unapred na nepoznat račun, a vozač ili rezervacija ne postoje na dan leta.",
    subtitle: { sr: "Rezervacija transfera → uplata unapred → nema vozača → gubitak.", en: "Transfer booking → upfront payment → no driver → loss." },
    hasPage: true,
    tags: ["aerodrom","putovanje"],
    overlaps: ["travel-booking-scam","marketplace-scam","phishing","advance-fee-fraud"],
    sources: [
      { name: "FTC — Consumer advice" },
      { name: "European Consumer Centre — travel and online purchases" }
    ]
  },
  "fake-property-agent-viewing-fee": {
    title: { sr: "Prevara naknadom za gledanje nekretnine", en: "Fake property agent viewing fee scam" },
    title_en: "Fake property agent viewing fee scam",
    title_sr: "Prevara naknadom za gledanje nekretnine",
    summary_en: "A fake agent charges a fee to schedule or unlock a viewing for a property the real owner is not offering.",
    summary_sr: "Lažni agent traži naknadu da zakazuje ili otključa gledanje stana koji ne iznajmljuje ili ne prodaje ovlašćeno lice.",
    subtitle: { sr: "Oglas → naknada za termin → uplata → nema ključa → gubitak.", en: "Listing → appointment fee → payment → no keys → loss." },
    hasPage: true,
    tags: ["nekretnine","oglas"],
    overlaps: ["rental-scam","travel-booking-scam","marketplace-scam","advance-fee-fraud"],
    sources: [
      { name: "FTC — Consumer advice" },
      { name: "European Consumer Centre — travel and online purchases" }
    ]
  },
  "fake-storage-unit-fee": {
    title: { sr: "Prevara naknadom za skladišni prostor", en: "Fake storage unit fee scam" },
    title_en: "Fake storage unit fee scam",
    title_sr: "Prevara naknadom za skladišni prostor",
    summary_en: "A fake storage owner asks a deposit or first month’s rent for a unit that does not exist or is unavailable.",
    summary_sr: "Lažni vlasnik skladišta traži depozit ili prvu mesečnu naknadu za jedinicu koja ne postoji ili nije dostupna.",
    subtitle: { sr: "Oglas → uplata → nema ključa ili jedinice → gubitak.", en: "Ad → payment → no key or unit → loss." },
    hasPage: true,
    tags: ["skladište","oglas"],
    overlaps: ["marketplace-scam","rental-scam","advance-fee-fraud","phishing"],
    sources: [
      { name: "FTC — Consumer advice" },
      { name: "European Consumer Centre — travel and online purchases" }
    ]
  },
  "fake-ride-share-driver": {
    title: { sr: "Prevara lažnim vozačem ride-share servisa", en: "Fake ride-share driver scam" },
    title_en: "Fake ride-share driver scam",
    title_sr: "Prevara lažnim vozačem ride-share servisa",
    summary_en: "Someone poses as an app driver and asks for off-app payment, or a fake profile accepts a ride then changes terms.",
    summary_sr: "Osoba se predstavlja kao vozač aplikacije i traži plaćanje van aplikacije, ili lažni profil prihvata vožnju pa menja uslove.",
    subtitle: { sr: "Dogovor → plaćanje van aplikacije → nema zaštite → prevara ili naplata.", en: "Arrangement → off-app payment → no protection → fraud or overcharge." },
    hasPage: true,
    tags: ["prevoz","aplikacija"],
    overlaps: ["travel-booking-scam","impersonation-scam","marketplace-scam","refund-scam"],
    sources: [
      { name: "FTC — Consumer advice" },
      { name: "European Consumer Centre — travel and online purchases" }
    ]
  },
  "fake-ticket-inspector": {
    title: { sr: "Prevara lažnim kontrolorom karata", en: "Fake ticket inspector scam" },
    title_en: "Fake ticket inspector scam",
    title_sr: "Prevara lažnim kontrolorom karata",
    summary_en: "A fake inspector on public transport asks a fine or top-up in cash or to an unknown account instead of an official ticket.",
    summary_sr: "Lažni kontrolor u javnom prevozu traži kaznu ili doplatu gotovinom ili na nepoznat račun umesto zvanične karte.",
    subtitle: { sr: "Zaustavljanje → kazna → uplata → nema zvaničnog dokumenta → gubitak.", en: "Stop → fine → payment → no official document → loss." },
    hasPage: true,
    tags: ["prevoz","karta"],
    overlaps: ["ticket-scam","travel-booking-scam","impersonation-scam","refund-scam"],
    sources: [
      { name: "FTC — Consumer advice" },
      { name: "European Consumer Centre — travel and online purchases" }
    ]
  },
  "fake-luggage-porter": {
    title: { sr: "Prevara lažnim nosačem prtljaga", en: "Fake luggage porter scam" },
    title_en: "Fake luggage porter scam",
    title_sr: "Prevara lažnim nosačem prtljaga",
    summary_en: "Someone in uniform looks like airport staff, takes bags or asks tips and fees for fast track, but is not authorised.",
    summary_sr: "Osoba u uniformi liči na zaposlenog aerodroma, uzima prtljag ili traži napojnicu i taksu za brzi prolaz, a nije ovlašćena.",
    subtitle: { sr: "Pristup → prtljag ili novac → nestanak ili prinuda → gubitak.", en: "Approach → bag or money → disappearance or pressure → loss." },
    hasPage: true,
    tags: ["aerodrom","prtljag"],
    overlaps: ["travel-booking-scam","impersonation-scam","ticket-scam","refund-scam"],
    sources: [
      { name: "FTC — Consumer advice" },
      { name: "European Consumer Centre — travel and online purchases" }
    ]
  },
  "fake-hotel-receptionist": {
    title: { sr: "Prevara lažnom hotelskom recepcijom", en: "Fake hotel reception scam" },
    title_en: "Fake hotel reception scam",
    title_sr: "Prevara lažnom hotelskom recepcijom",
    summary_en: "A fake front desk call or message asks to re-verify a card or pay a fee before arrival, but it is not the hotel.",
    summary_sr: "Lažni poziv ili poruka sa recepcije traži ponovnu verifikaciju kartice ili uplatu takse pre dolaska, a nije hotel.",
    subtitle: { sr: "Poziv ili SMS → unos kartice ili uplata → krađa → gubitak.", en: "Call or SMS → card entry or payment → theft → loss." },
    hasPage: true,
    tags: ["hotel","poziv"],
    overlaps: ["travel-booking-scam","vishing","phishing","refund-scam"],
    sources: [
      { name: "FTC — Consumer advice" },
      { name: "European Consumer Centre — travel and online purchases" }
    ]
  },
  "fake-shop-employee-refund": {
    title: { sr: "Prevara lažnim zaposlenim u prodavnici (povrat)", en: "Fake shop employee refund scam" },
    title_en: "Fake shop employee refund scam",
    title_sr: "Prevara lažnim zaposlenim u prodavnici (povrat)",
    summary_en: "A fake employee offers a card refund via a reader or link that misroutes money or steals details.",
    summary_sr: "Lažni zaposleni u prodavnici nudi povrat na karticu uz čitač ili link koji preusmerava novac ili krade podatke.",
    subtitle: { sr: "Kontakt u radnji → povrat → transakcija → gubitak.", en: "In-store contact → refund → transaction → loss." },
    hasPage: true,
    tags: ["maloprodaja","povrat"],
    overlaps: ["refund-scam","marketplace-scam","phishing","advance-fee-fraud"],
    sources: [
      { name: "FTC — Consumer advice" },
      { name: "European Consumer Centre — travel and online purchases" }
    ]
  },
  "art-commission-overpayment": {
    title: { sr: "Prevara preplatom za umetničku porudžbinu", en: "Art commission overpayment scam" },
    title_en: "Art commission overpayment scam",
    title_sr: "Prevara preplatom za umetničku porudžbinu",
    summary_en: "A buyer overpays for art and asks for an urgent refund of the difference to another account before the bank reverses the original payment.",
    summary_sr: "Kupac šalje preveliku uplatu za umetničko delo i traži hitan povrat razlike na drugi račun pre nego što banka poništi originalnu uplatu.",
    subtitle: { sr: "Narudžbina → preplata → zahtev za povratom → original se poništava → gubitak.", en: "Order → overpayment → refund request → original reversed → loss." },
    hasPage: true,
    tags: ["umetnost","preplata"],
    overlaps: ["overpayment-scam","marketplace-scam","refund-scam","advance-fee-fraud"],
    sources: [
      { name: "FTC — Consumer advice" },
      { name: "European Consumer Centre — travel and online purchases" }
    ]
  },
  "subscription-cancellation-scam": {
    title: { sr: "Prevara lažnim otkazom pretplate", en: "Subscription cancellation scam" },
    title_en: "Subscription cancellation scam",
    title_sr: "Prevara lažnim otkazom pretplate",
    summary_en: "Fake support contacts you and asks a fee or card data to cancel a subscription you can cancel free in the account.",
    summary_sr: "Lažna podrška kontaktira vas i traži naknadu ili podatke kartice da otkaže pretplatu koju možete otkazati besplatno u nalogu.",
    subtitle: { sr: "Poziv ili mejl → otkaz uz naknadu → uplata → pretplata i dalje traje.", en: "Call or email → paid cancellation → payment → subscription continues." },
    hasPage: true,
    tags: ["pretplata","podrška"],
    overlaps: ["subscription-trap","free-trial-trap","refund-scam","vishing"],
    sources: [
      { name: "FTC — Consumer advice" },
      { name: "European Consumer Centre — travel and online purchases" }
    ]
  },
  "trial-to-subscription-rollover": {
    title: { sr: "Prevara automatskim produženjem probe u pretplatu", en: "Trial-to-subscription rollover scam" },
    title_en: "Trial-to-subscription rollover scam",
    title_sr: "Prevara automatskim produženjem probe u pretplatu",
    summary_en: "Hidden post-trial subscription terms or hard-to-see consent trigger billing; cancellation is deliberately difficult.",
    summary_sr: "Skriveni uslovi pretplate posle probe ili teško uočljiva saglasnost automatski pokreću naplatu; otkaz je namerno otežan.",
    subtitle: { sr: "Besplatna proba → skriveni uslov → naplata → otkaz težak → gubitak.", en: "Free trial → hidden term → charge → hard cancel → loss." },
    hasPage: true,
    tags: ["pretplata","proba"],
    overlaps: ["subscription-trap","free-trial-trap","phishing","refund-scam"],
    sources: [
      { name: "FTC — Consumer advice" },
      { name: "European Consumer Centre — travel and online purchases" }
    ]
  },
  "product-recall-refund-scam": {
    title: { sr: "Prevara lažnim povratom zbog povlačenja proizvoda", en: "Product recall refund scam" },
    title_en: "Product recall refund scam",
    title_sr: "Prevara lažnim povratom zbog povlačenja proizvoda",
    summary_en: "A message claims a product recall and offers a refund via a link or compensation registration that steals data.",
    summary_sr: "Poruka tvrdi da je proizvod povučen sa tržišta i nudi povrat preko linka ili registracije naknade koji krade podatke.",
    subtitle: { sr: "Obaveštenje → link → podaci kartice → krađa.", en: "Notice → link → card data → theft." },
    hasPage: true,
    tags: ["povlačenje","SMS"],
    overlaps: ["refund-scam","smishing","phishing","marketplace-scam"],
    sources: [
      { name: "FTC — Consumer advice" },
      { name: "European Consumer Centre — travel and online purchases" }
    ]
  },
  "counterfeit-warranty-activation": {
    title: { sr: "Prevara lažnom aktivacijom garancije", en: "Counterfeit warranty activation scam" },
    title_en: "Counterfeit warranty activation scam",
    title_sr: "Prevara lažnom aktivacijom garancije",
    summary_en: "A fake site or call asks a fee to activate a warranty already included, or to extend a cheap fake policy.",
    summary_sr: "Lažni sajt ili poziv traže naknadu da aktivirate garanciju koja je već uključena ili da produžite jeftino lažnu polisu.",
    subtitle: { sr: "Registracija → uplata → nema pokrivenosti → gubitak.", en: "Registration → payment → no coverage → loss." },
    hasPage: true,
    tags: ["garancija","uređaj"],
    overlaps: ["marketplace-scam","fake-webshop","refund-scam","phishing"],
    sources: [
      { name: "FTC — Consumer advice" },
      { name: "European Consumer Centre — travel and online purchases" }
    ]
  },
  "car-delivery-reservation-scam": {
    title: { sr: "Prevara rezervacijom dostave automobila", en: "Car delivery reservation scam" },
    title_en: "Car delivery reservation scam",
    title_sr: "Prevara rezervacijom dostave automobila",
    summary_en: "A fake seller or transport firm asks a deposit to ship a car that does not exist or never arrives.",
    summary_sr: "Lažni prodavac ili transport firma traži depozit za prevoz vozila koji ne postoji ili nikad ne stiže.",
    subtitle: { sr: "Oglas → depozit za transport → nema vozila → gubitak.", en: "Listing → transport deposit → no vehicle → loss." },
    hasPage: true,
    tags: ["automobil","dostava"],
    overlaps: ["marketplace-scam","travel-booking-scam","advance-fee-fraud","phishing"],
    sources: [
      { name: "FTC — Consumer advice" },
      { name: "European Consumer Centre — travel and online purchases" }
    ]
  },
  "home-appliance-preorder-scam": {
    title: { sr: "Prevara predporudžbinom bele tehnike", en: "Home appliance preorder scam" },
    title_en: "Home appliance preorder scam",
    title_sr: "Prevara predporudžbinom bele tehnike",
    summary_en: "A fake site offers a popular appliance at a deal with full prepayment and long delivery, but the shop does not exist.",
    summary_sr: "Lažni sajt nudi popularan aparat po akcijskoj ceni uz punu predplatu i dugačak rok isporuke, a prodavnica ne postoji.",
    subtitle: { sr: "Akcija → predplata → nema isporuke → gubitak.", en: "Deal → prepayment → no delivery → loss." },
    hasPage: true,
    tags: ["bela tehnika","webshop"],
    overlaps: ["fake-webshop","marketplace-scam","refund-scam","advance-fee-fraud"],
    sources: [
      { name: "FTC — Consumer advice" },
      { name: "European Consumer Centre — travel and online purchases" }
    ]
  },
  "fake-holiday-apartment-deposit": {
    title: { sr: "Prevara depozitom za lažan apartman za odmor", en: "Fake holiday apartment deposit scam" },
    title_en: "Fake holiday apartment deposit scam",
    title_sr: "Prevara depozitom za lažan apartman za odmor",
    summary_en: "A scammer copies a real apartment listing, asks a deposit off-platform, but keys and address do not match.",
    summary_sr: "Lažni oglašivač kopira oglase pravog apartmana, traži depozit van platforme, a ključ i adresa ne odgovaraju.",
    subtitle: { sr: "Oglas → depozit van platforme → nema smeštaja → gubitak.", en: "Listing → off-platform deposit → no lodging → loss." },
    hasPage: true,
    tags: ["apartman","odmor"],
    overlaps: ["travel-booking-scam","rental-scam","marketplace-scam","refund-scam"],
    sources: [
      { name: "FTC — Consumer advice" },
      { name: "European Consumer Centre — travel and online purchases" }
    ]
  },
  "travel-visa-support-scam": {
    title: { sr: "Prevara lažnom podrškom za vizu", en: "Travel visa support scam" },
    title_en: "Travel visa support scam",
    title_sr: "Prevara lažnom podrškom za vizu",
    summary_en: "A fake agency promises a fast visa or slot for a high fee and fake paperwork, without embassy authorisation.",
    summary_sr: "Lažna agencija obećava brzu vizu ili termin uz visoku naknadu i lažne dokumente, bez ovlašćenja ambasade.",
    subtitle: { sr: "Ponuda → uplata → nema termina → gubitak.", en: "Offer → payment → no appointment → loss." },
    hasPage: true,
    tags: ["viza","putovanje"],
    overlaps: ["travel-booking-scam","advance-fee-fraud","phishing","refund-scam"],
    sources: [
      { name: "FTC — Consumer advice" },
      { name: "European Consumer Centre — travel and online purchases" }
    ]
  },
  "fake-baggage-fee-scam": {
    title: { sr: "Prevara lažnom prtljažnom taksom", en: "Fake baggage fee scam" },
    title_en: "Fake baggage fee scam",
    title_sr: "Prevara lažnom prtljažnom taksom",
    summary_en: "A message or site asks for extra baggage or overage payment before a flight that was already paid through an official channel.",
    summary_sr: "Poruka ili sajt traži dodatnu uplatu za prtljag ili prekoračenje pre leta, iako je let već plaćen kroz zvanični kanal.",
    subtitle: { sr: "Obaveštenje → link ili račun → uplata → nema promene na karti → gubitak.", en: "Notice → link or account → payment → no ticket change → loss." },
    hasPage: true,
    tags: ["aviokompanija","prtljag"],
    overlaps: ["travel-booking-scam","airline-refund-scam","phishing","refund-scam"],
    sources: [
      { name: "FTC — Consumer advice" },
      { name: "European Consumer Centre — travel and online purchases" }
    ]
  },
  "airport-tax-release-scam": {
    title: { sr: "Prevara lažnim oslobađanjem aerodromske takse", en: "Airport tax release scam" },
    title_en: "Airport tax release scam",
    title_sr: "Prevara lažnim oslobađanjem aerodromske takse",
    summary_en: "A fake message claims the flight is held until you pay a special fee or customs deposit via a non-airport link.",
    summary_sr: "Lažna poruka tvrdi da je let zadržan dok se ne plati posebna taksa ili carinski depozit preko linka koji nije aerodrom.",
    subtitle: { sr: "Upozorenje → uplata → nema uticaja na kartu → gubitak.", en: "Warning → payment → no effect on ticket → loss." },
    hasPage: true,
    tags: ["aerodrom","SMS"],
    overlaps: ["travel-booking-scam","airline-refund-scam","phishing","refund-scam"],
    sources: [
      { name: "FTC — Consumer advice" },
      { name: "European Consumer Centre — travel and online purchases" }
    ]
  },
  "cruise-upgrade-scam": {
    title: { sr: "Prevara lažnim nadogradnjama na krstarenju", en: "Cruise upgrade scam" },
    title_en: "Cruise upgrade scam",
    title_sr: "Prevara lažnim nadogradnjama na krstarenju",
    summary_en: "A fake agent offers a higher cabin class for payment outside the cruise line account, but no upgrade exists in the system.",
    summary_sr: "Lažni agent nudi kabinu više klase ili balkon uz uplatu van zvaničnog brodarskog naloga, a nadogradnja ne postoji u sistemu.",
    subtitle: { sr: "Ponuda → uplata agentu → nema nadogradnje → gubitak.", en: "Offer → pay agent → no upgrade → loss." },
    hasPage: true,
    tags: ["krstarenje","putovanje"],
    overlaps: ["travel-booking-scam","ticket-scam","refund-scam","advance-fee-fraud"],
    sources: [
      { name: "FTC — Consumer advice" },
      { name: "European Consumer Centre — travel and online purchases" }
    ]
  },
  "duty-free-preorder-scam": {
    title: { sr: "Prevara lažnom duty-free predporudžbinom", en: "Duty-free preorder scam" },
    title_en: "Duty-free preorder scam",
    title_sr: "Prevara lažnom duty-free predporudžbinom",
    summary_en: "A fake site offers duty-free pickup at the airport with full prepayment, but the order does not exist in the shop system.",
    summary_sr: "Lažni sajt nudi duty-free robu za preuzimanje na aerodromu uz punu uplatu unapred, a porudžbina ne postoji u sistemu prodavnice.",
    subtitle: { sr: "Sajt → uplata → nema porudžbine na šalteru → gubitak.", en: "Site → payment → no order at counter → loss." },
    hasPage: true,
    tags: ["duty-free","aerodrom"],
    overlaps: ["travel-booking-scam","fake-webshop","marketplace-scam","refund-scam"],
    sources: [
      { name: "FTC — Consumer advice" },
      { name: "European Consumer Centre — travel and online purchases" }
    ]
  },
  "sports-hospitality-package-scam": {
    title: { sr: "Prevara lažnim VIP paketom za sportski događaj", en: "Sports hospitality package scam" },
    title_en: "Sports hospitality package scam",
    title_sr: "Prevara lažnim VIP paketom za sportski događaj",
    summary_en: "A fake seller offers tickets, a lounge, and catering for a match with full payment outside the club or official ticket channel.",
    summary_sr: "Lažni prodavac nudi ulaznice, ložu i hranu za meč uz punu uplatu van zvaničnog kanala kluba ili distributera ulaznica.",
    subtitle: { sr: "Ponuda → uplata → nema mesta → gubitak.", en: "Offer → payment → no seats → loss." },
    hasPage: true,
    tags: ["sport","ulaznice"],
    overlaps: ["ticket-scam","travel-booking-scam","marketplace-scam","refund-scam"],
    sources: [
      { name: "FTC — Consumer advice" },
      { name: "European Consumer Centre — travel and online purchases" }
    ]
  },

  "fake-prosecutor-office-fee-scam": {
    core: true,
    title: { sr: "Lažni pozivi iz tužilaštva i naplata taksi", en: "Fake prosecutor office summons and fee scams" },
    title_en: "Fake prosecutor office summons and fee scams",
    title_sr: "Lažni pozivi iz tužilaštva i naplata taksi",
    summary_en: "Fraudsters pose as prosecutors or prosecution clerks, cite a criminal or civil case number, and demand urgent fees for summons service, evidence release, or case deposits to a private account. Signal: first contact by phone or chat, payment not through official treasury channels, refusal of callback on a published prosecutor office line.",
    summary_sr: "Prevaranti se predstavljaju kao javni tužilac ili služba tužilaštva, navode broj krivičnog ili građanskog predmeta i traže hitne takse za dostavu poziva, oslobađanje dokaza ili depozit predmeta na privatni račun. Signal: prvi kontakt telefonom ili četom, uplata ne ide kroz zvanične budžetske kanale, odbijanje povratnog poziva na objavljeni broj tužilaštva.",
    subtitle: { sr: "Poziv ili pismo → tužilaštvo → predmet → taksa ili depozit → pritisak → nova taksa → nestanak.", en: "Call or letter → prosecution office → case → fee or deposit → pressure → new fee → disappearance." },
    hasPage: true,
    tags: ["tužilaštvo", "lažno predstavljanje", "takse"],
    overlaps: ["court-impersonation", "government-impersonation", "police-impersonation", "advance-fee-fraud", "impersonation-scam", "eppo-impersonation"],
    sources: [{ name: "Government impersonation — verification guidance" }]
  },

  "fake-public-notary-fee-scam": {
    core: true,
    title: { sr: "Lažne takse javnog beležnika", en: "Fake public notary fee scam" },
    title_en: "Fake public notary fee scam",
    title_sr: "Lažne takse javnog beležnika",
    summary_en: "Someone claims a document must be notarized urgently by a named notary or intermediary and asks for a fee, courier charge, or advance payment to a private account before you meet a real notary. Signal: payment before a verified appointment, pressure to skip your own notary choice, contact channel not matching the official notary chamber lookup.",
    summary_sr: "Neko tvrdi da se isprava mora hitno overiti kod imenovanog beležnika ili posrednika i traži naknadu, trošak kurira ili avans na privatni račun pre susreta sa pravim beležnikom. Signal: uplata pre proverenog termina, pritisak da se preskoči sopstveni izbor beležnika, kanal kontakta ne odgovara proveri preko komore javnih beležnika.",
    subtitle: { sr: "Obaveštenje → beležnik ili posrednik → avans ili kurir → rok → uplata → nema overe.", en: "Notice → notary or intermediary → advance or courier → deadline → payment → no notarization." },
    hasPage: true,
    tags: ["beležnik", "dokumenti", "takse"],
    overlaps: ["government-impersonation", "court-impersonation", "apostille-legalization-scam", "advance-fee-fraud", "impersonation-scam"],
    sources: [{ name: "FTC — Government impersonation scams" }]
  },

  "fake-company-beneficial-owner-filing-scam": {
    core: true,
    title: { sr: "Lažna prijava stvarnog vlasnika u registru privrednih subjekata", en: "Fake beneficial owner registry filing scam" },
    title_en: "Fake beneficial owner registry filing scam",
    title_sr: "Lažna prijava stvarnog vlasnika u registru privrednih subjekata",
    summary_en: "An email or call claims your company must file or correct beneficial ownership data urgently and pay a processing, penalty, or portal unlock fee to avoid registry blocks or fines. Signal: fee to a private account, link not from the official business registry domain, threat of same-day deletion without a published legal basis you can verify.",
    summary_sr: "Imejl ili poziv tvrdi da firma mora hitno da podnese ili ispravi podatke o stvarnom vlasniku i plati naknadu za obradu, kaznu ili otključavanje portala da bi se izbegla blokada registra ili kazna. Signal: uplata na privatni račun, link koji nije sa zvaničnog domena registra privrednih subjekata, pretnja brisanjem istog dana bez objavljene pravne osnove koju možete proveriti.",
    subtitle: { sr: "Upozorenje → registar → RBO / vlasnik → naknada → rok → serija uplata → nema podneska.", en: "Warning → registry → UBO / owner → fee → deadline → payment series → no filing." },
    hasPage: true,
    tags: ["firma", "registar", "lažno predstavljanje"],
    overlaps: ["government-impersonation", "public-records-access-fee-scam", "business-license-renewal-scam", "phishing", "advance-fee-fraud", "compliance-fee-scam"],
    sources: [{ name: "Business registry — official channels only" }]
  },

  "fake-municipal-debt-settlement-scam": {
    core: true,
    title: { sr: "Lažno rešavanje duga prema opštini", en: "Fake municipal debt settlement scam" },
    title_en: "Fake municipal debt settlement scam",
    title_sr: "Lažno rešavanje duga prema opštini",
    summary_en: "Fraudsters impersonate municipal finance or legal departments, claim you owe back taxes, utility arrears, or administrative fines, and offer a one-time reduced settlement if you pay today to a specified account or link. Signal: amount does not match your known bills, payment bypasses the municipality's published payment IDs, contact refuses the clerk's window or official portal.",
    summary_sr: "Prevaranti se predstavljaju kao finansijska ili pravna služba opštine, tvrde da dugujete poreze, komunalije ili administrativne kazne i nude jednokratno smanjenje ako danas platite na navedeni račun ili link. Signal: iznos ne odgovara poznatim računima, uplata zaobilazi objavljene pozive na uplatu opštine, kontakt odbija šalter ili zvanični portal.",
    subtitle: { sr: "Poziv → opština → dug → popust uz hitnu uplatu → novi razlog → gubitak.", en: "Call → municipality → debt → discount with urgent pay → new reason → loss." },
    hasPage: true,
    tags: ["opština", "dug", "lažno predstavljanje"],
    overlaps: ["municipality-impersonation", "government-impersonation", "utility-bill-scam", "tax-authority-impersonation", "advance-fee-fraud", "vishing"],
    sources: [{ name: "FTC — Utility and government impersonation" }]
  },

  "fake-vehicle-registration-renewal-scam": {
    core: true,
    title: { sr: "Lažna obnova saobraćajne dozvole ili registracije vozila", en: "Fake vehicle registration renewal scam" },
    title_en: "Fake vehicle registration renewal scam",
    title_sr: "Lažna obnova saobraćajne dozvole ili registracije vozila",
    summary_en: "SMS or email says your vehicle registration or roadworthiness expires soon and you must pay or confirm through a linked portal that steals card data or sends money to a private beneficiary. Signal: link domain not the official traffic or ministry site you normally use, fee unrelated to published official tariffs, request for card PIN or remote access.",
    summary_sr: "SMS ili imejl kaže da registracija vozila ili važenje saobraćajne dozvole uskoro ističe i da morate platiti ili potvrditi preko linka koji krade podatke kartice ili šalje novac na privatnog primaoca. Signal: domen linka nije zvanični saobraćajni ili ministerski sajt koji inače koristite, naknada nije u skladu sa objavljenim tarifama, zahtev za PIN kartice ili daljinski pristup.",
    subtitle: { sr: "Poruka → istek registracije → link → uplata → nema obnove u sistemu.", en: "Message → expiry → link → payment → no renewal in system." },
    hasPage: true,
    tags: ["vozilo", "registracija", "smishing"],
    overlaps: ["government-impersonation", "fake-permit-license-scam", "smishing", "phishing", "advance-fee-fraud", "toll-road-scam"],
    sources: [{ name: "Smishing — vehicle and toll themes" }]
  },

  "fake-esf-programme-fee-scam": {
    core: true,
    title: { sr: "Lažne naknade uz ESF / socijalne programe EU", en: "Fake ESF social fund programme fee scam" },
    title_en: "Fake ESF social fund programme fee scam",
    title_sr: "Lažne naknade uz ESF / socijalne programe EU",
    summary_en: "Organizations or trainers receive letters mimicking ESF-style social cohesion programmes, demanding partnership fees, audit prepayments, or bank charges before grant letters exist. Signal: managing authority not reachable at published numbers, fees to consultants not in the official project pipeline, programme name mismatch with open calls.",
    summary_sr: "Organizacije ili treneri dobijaju pisma koja imitiraju programe u stilu ESF i socijalne kohezije, sa zahtevom za partnersku naknadu, avans revizije ili bankarski trošak pre nego što postoji zvanično pismo o grantu. Signal: telo za upravljanje nije dostupno na objavljenim brojevima, naknade idu konsultantima koji nisu u zvaničnom lancu projekta, naziv programa ne odgovara otvorenim pozivima.",
    subtitle: { sr: "Poziv → ESF etiketa → naknada pre ugovora → nova prepreka → isplata ne stiže.", en: "Invite → ESF label → fee before contract → new block → payout never arrives." },
    hasPage: true,
    tags: ["eu", "esf", "grant"],
    overlaps: ["grant-fund-scam", "cohesion-fund-release-scam", "eu-reimbursement-release-scam", "horizon-project-fee", "advance-fee-fraud", "fake-eu-program-scam"],
    sources: [{ name: "European Commission — ESF+ overview" }]
  },

  "fake-eurojust-legal-recovery-scam": {
    core: true,
    title: { sr: "Lažno predstavljanje Eurojusta i naplata pravnog povraćaja", en: "Fake Eurojust legal recovery fee scam" },
    title_en: "Fake Eurojust legal recovery fee scam",
    title_sr: "Lažno predstavljanje Eurojusta i naplata pravnog povraćaja",
    summary_en: "Cold contact claims Eurojust is handling asset return or cross-border enforcement in your name and requires legal, escrow, or clearance fees before funds are released. Signal: unsolicited contact, payment to private accounts, eurojust.europa.eu domain not used for the email, refusal when you offer to call the published Eurojust switchboard.",
    summary_sr: "Hladni kontakt tvrdi da Eurojust vodi povraćaj imovine ili prekogranično izvršenje u vaše ime i traži pravnu, escrow ili clearing naknadu pre isplate. Signal: nesolicitovani kontakt, uplata na privatne račune, imejl nije sa domena eurojust.europa.eu, odbijanje kada ponudite poziv na objavljeni centralni broj Eurojusta.",
    subtitle: { sr: "Obaveštenje → Eurojust → predmet → naknada za oslobađanje → eskalacija → nestanak.", en: "Notice → Eurojust → case → release fee → escalation → disappearance." },
    hasPage: true,
    tags: ["eu", "lažno predstavljanje", "uplata unapred"],
    overlaps: ["eppo-impersonation", "olaf-impersonation", "government-impersonation", "advance-fee-fraud", "recovery-scam", "grant-fund-scam"],
    sources: [{ name: "Eurojust — official contact" }]
  },

  "fake-ema-medicine-approval-fee-scam": {
    core: true,
    title: { sr: "Lažne naknade za odobrenje leka (EMA)", en: "Fake EMA medicine approval fee scam" },
    title_en: "Fake EMA medicine approval fee scam",
    title_sr: "Lažne naknade za odobrenje leka (EMA)",
    summary_en: "Manufacturers or researchers are told their product needs an urgent EMA processing, priority review, or publication fee paid to an agent to avoid rejection. Signal: EMA does not bill product owners this way by cold email, payment not through official regulatory fee routes you can verify on ema.europa.eu, generic letter without your real application reference.",
    summary_sr: "Proizvođačima ili istraživačima se kaže da proizvod zahteva hitnu EMA obradu, prioritetni pregled ili naknadu za objavu kod agenta da bi se izbeglo odbijanje. Signal: EMA ne naplaćuje vlasnicima proizvoda na ovaj način hladnim imejlom, uplata ne ide kroz zvanične regulatorne kanale koje proveravate na ema.europa.eu, generičko pismo bez pravog referentnog broja prijave.",
    subtitle: { sr: "Imejl → EMA → hitna taksa → agent → serija uplata → odobrenje ne postoji.", en: "Email → EMA → urgent fee → agent → fee series → no approval." },
    hasPage: true,
    tags: ["eu", "lekovi", "regulator"],
    overlaps: ["fake-eu-program-scam", "compliance-fee-scam", "phishing", "business-email-compromise", "advance-fee-fraud", "impersonation-scam"],
    sources: [{ name: "EMA — reporting falsified medicines" }]
  },

  "fake-echa-compliance-registration-scam": {
    core: true,
    title: { sr: "Lažna ECHA registracija ili REACH usklađenost", en: "Fake ECHA REACH compliance registration scam" },
    title_en: "Fake ECHA REACH compliance registration scam",
    title_sr: "Lažna ECHA registracija ili REACH usklađenost",
    summary_en: "Chemical or product firms receive demands to pay for REACH registration, SDS updates, or ECHA portal unlocks through a third-party account or unknown portal clone. Signal: domain not echa.europa.eu, fee demanded under threat of immediate market ban without a traceable official notice, copy-paste legal text with wrong substance names.",
    summary_sr: "Hemijske ili proizvodne firme dobijaju zahteve da plate REACH registraciju, ažuriranje SDS-a ili otključavanje ECHA portala preko računa treće strane ili nepoznatog klona portala. Signal: domen nije echa.europa.eu, naknada pod pretnjom trenutne zabrane tržišta bez proverljivog zvaničnog obaveštenja, kopiran pravni tekst sa pogrešnim nazivima supstanci.",
    subtitle: { sr: "Upozorenje → ECHA → registracija → uplata agentu → nova greška u dokumentu → ponavljanje.", en: "Warning → ECHA → registration → pay agent → new document error → repeat." },
    hasPage: true,
    tags: ["eu", "hemija", "usklađenost"],
    overlaps: ["compliance-fee-scam", "gdpr-compliance-scam", "fake-eu-program-scam", "phishing", "advance-fee-fraud", "government-impersonation"],
    sources: [{ name: "ECHA — official website" }]
  },

  "fake-procurement-blacklist-removal-scam": {
    core: true,
    title: { sr: "Lažno skidanje sa crne liste javnih nabavki", en: "Fake procurement blacklist removal scam" },
    title_en: "Fake procurement blacklist removal scam",
    title_sr: "Lažno skidanje sa crne liste javnih nabavki",
    summary_en: "A caller or email claims your company is blocked from tenders until a reinstatement, appeal, or database correction fee is paid to a consultant or special account. Signal: no matching notice in the real procurement portal you use, fee unrelated to any published procedure, pressure to pay before you can speak to the contracting authority on a known line.",
    summary_sr: "Pozivalac ili imejl tvrdi da je firma blokirana za tendere dok se ne plati naknada za povrat, žalbu ili ispravku baze konsultantu ili posebnom računu. Signal: nema odgovarajućeg obaveštenja na pravom portalu javnih nabavki koji koristite, naknada nije vezana za objavljenu proceduru, pritisak da se plati pre razgovora sa naručiocem na poznatom broju.",
    subtitle: { sr: "Upozorenje → crna lista → naknada za uklanjanje → dodatna verifikacija → gubitak.", en: "Warning → blacklist → removal fee → extra verification → loss." },
    hasPage: true,
    tags: ["nabavka", "firma", "lažno predstavljanje"],
    overlaps: ["procurement-tender-scam", "vendor-registration-fee", "compliance-fee-scam", "procurement-award-scam", "advance-fee-fraud", "business-email-compromise"],
    sources: [{ name: "OLAF — procurement fraud" }]
  },
  "fake-monastery-restoration-donation-scam": {
    title: { sr: "Prevara lažnom hitnom donacijom za obnovu manastira", en: "Fake monastery urgent restoration donation scam" },
    title_en: "Fake monastery urgent restoration donation scam",
    title_sr: "Prevara lažnom hitnom donacijom za obnovu manastira",
    summary_en: "A contact claims a monastery urgently needs money for restoration, the roof, or the iconostasis and asks for payment to a personal account or suspicious link, with no way to verify through official church administration.",
    summary_sr: "Kontakt tvrdi da manastiru hitno treba novac za obnovu, krov ili ikonostas i traži uplatu na lični račun ili sumnjiv link, bez mogućnosti provere preko zvanične crkvene uprave.",
    subtitle: { sr: "Hitna priča → donacija → privatni račun → nema traga kod stvarnog manastira.", en: "Urgent story → donation → private account → no trail at the real monastery." },
    hasPage: true,
    tags: ["prevare", "edukacija", "vera"],
    overlaps: ["charity-scam", "fake-religious-blessing-scam", "faith-healer-scam", "impersonation-scam", "advance-fee-fraud", "phishing"],
    sources: []
  },
  "fake-church-building-fund-scam": {
    title: { sr: "Prevara lažnim fondom za izgradnju crkve", en: "Fake church building fund scam" },
    title_en: "Fake church building fund scam",
    title_sr: "Prevara lažnim fondom za izgradnju crkve",
    summary_en: "A fraudster collects donations for church construction or extension to a personal account or through a fake campaign, with no link to a real parish office or building site.",
    summary_sr: "Prevarant prikuplja donacije za izgradnju ili dogradnju crkve na lični račun ili preko lažne kampanje, bez veze sa stvarnim župnim uredom ili gradilištem.",
    subtitle: { sr: "Kampanja → uplata → nema adrese gradilišta ni zvaničnog primaoca.", en: "Campaign → payment → no building address or official payee." },
    hasPage: true,
    tags: ["prevare", "edukacija", "vera"],
    overlaps: ["charity-scam", "fake-religious-blessing-scam", "impersonation-scam", "advance-fee-fraud", "phishing"],
    sources: []
  },
  "fake-memorial-mass-payment-scam": {
    title: { sr: "Prevara lažnom naplatom pomenskog ili misnog intencija", en: "Fake memorial mass payment scam" },
    title_en: "Fake memorial mass payment scam",
    title_sr: "Prevara lažnom naplatom pomenskog ili misnog intencija",
    summary_en: "A fake contact requests payment for a memorial service, Mass intention, or registry entry while promising the service will be held, but money goes to a private account outside the parish office.",
    summary_sr: "Lažni kontakt traži uplatu za pomensku službu, misni intencij ili zapis uz obećanje da će se služba održati, a novac ide na privatni račun van župnog ureda.",
    subtitle: { sr: "Zahtev za uplatom → nema potvrde župnog ureda → sumnjiv primalac.", en: "Payment request → no parish confirmation → suspicious recipient." },
    hasPage: true,
    tags: ["prevare", "edukacija", "vera"],
    overlaps: ["funeral-donation-scam", "charity-scam", "fake-religious-blessing-scam", "impersonation-scam", "advance-fee-fraud"],
    sources: []
  },
  "fake-pilgrimage-booking-scam": {
    title: { sr: "Prevara lažnom rezervacijom hodočašća", en: "Fake pilgrimage booking scam" },
    title_en: "Fake pilgrimage booking scam",
    title_sr: "Prevara lažnom rezervacijom hodočašća",
    summary_en: "A fake agency or spiritual organizer sells a pilgrimage slot with full prepayment, while the trip or permits do not exist with the real organizer's system.",
    summary_sr: "Lažna agencija ili duhovni organizator prodaje mesto na hodočašću uz punu uplatu unapred, a putovanje ili dozvole ne postoje u sistemu stvarnog organizatora.",
    subtitle: { sr: "Ponuda mesta → uplata → nema avionske karte ni smeštaja.", en: "Seat offer → payment → no flight or lodging." },
    hasPage: true,
    tags: ["prevare", "edukacija", "putovanje"],
    overlaps: ["travel-booking-scam", "charity-scam", "advance-fee-fraud", "impersonation-scam", "phishing"],
    sources: []
  },
  "fake-holy-relic-sale-scam": {
    title: { sr: "Prevara lažnom prodajom svetih moštiju ili relikvija", en: "Fake holy relic sale scam" },
    title_en: "Fake holy relic sale scam",
    title_sr: "Prevara lažnom prodajom svetih moštiju ili relikvija",
    summary_en: "A seller claims to offer an authentic relic or blessed object, demands high upfront payment, and avoids museum, church, or scientific provenance checks.",
    summary_sr: "Prodavac tvrdi da nudi autentičnu relikviju ili predmet koji je blagosloven, traži visoku uplatu unapred i izbegava muzejsku, crkvenu ili naučnu proveru porekla.",
    subtitle: { sr: "Oglas → uplata → predmet ne može da se verifikuje kod crkve.", en: "Listing → payment → item cannot be verified with the church." },
    hasPage: true,
    tags: ["prevare", "edukacija", "oglasi"],
    overlaps: ["marketplace-scam", "fake-religious-blessing-scam", "advance-fee-fraud", "impersonation-scam"],
    sources: []
  },
  "fake-religious-visa-permit-scam": {
    title: { sr: "Prevara lažnom verskom vizom ili dozvolom", en: "Fake religious visa or permit scam" },
    title_en: "Fake religious visa or permit scam",
    title_sr: "Prevara lažnom verskom vizom ili dozvolom",
    summary_en: "A fraudster charges for a religious visa, pilgrimage permit, or special entry clearance to a country or shrine when no such process exists or it is only handled through official consulates.",
    summary_sr: "Prevarant traži novac za versku vizu, hodočasničku dozvolu ili posebnu potvrdu za ulazak u zemlju ili svetište, iako takav postupak ne postoji ili se rešava samo kroz zvanične konsulate.",
    subtitle: { sr: "Lažna taksa → uplata → nema broja konsulata koji potvrđuje.", en: "Fake fee → payment → no consulate number confirms it." },
    hasPage: true,
    tags: ["prevare", "edukacija", "putovanje"],
    overlaps: ["travel-booking-scam", "travel-visa-support-scam", "government-impersonation", "advance-fee-fraud", "phishing", "identity-theft"],
    sources: []
  },
  "fake-funeral-debt-collection-scam": {
    title: { sr: "Prevara lažnim naplatom duga za sahranu", en: "Fake funeral debt collection scam" },
    title_en: "Fake funeral debt collection scam",
    title_sr: "Prevara lažnim naplatom duga za sahranu",
    summary_en: "A call or message claims the family owes a remaining funeral bill or extra service fee and demands urgent payment to an account that does not belong to a known funeral provider.",
    summary_sr: "Poziv ili poruka tvrdi da porodica duguje ostatak računa za sahranu ili dodatnu uslugu i traži hitnu uplatu na račun koji ne pripada poznatom pogrebnom preduzeću.",
    subtitle: { sr: "Zvaničan ton → dug → uplata → pogrebno ne potvrđuje.", en: "Official tone → debt → payment → funeral home does not confirm." },
    hasPage: true,
    tags: ["prevare", "edukacija", "pogreb"],
    overlaps: ["funeral-home-scam", "funeral-donation-scam", "fake-call-scam", "advance-fee-fraud", "phishing"],
    sources: []
  },
  "fake-cemetery-maintenance-fee-scam": {
    title: { sr: "Prevara lažnom naknadom za održavanje groblja", en: "Fake cemetery maintenance fee scam" },
    title_en: "Fake cemetery maintenance fee scam",
    title_sr: "Prevara lažnom naknadom za održavanje groblja",
    summary_en: "A message demands an annual or urgent cemetery maintenance fee for turf or lighting, but payment goes to an account that does not match the cemetery or municipal operator on the official site.",
    summary_sr: "Poruka traži godišnju ili hitnu naknadu za održavanje groba, travu ili osvetljenje, a uplata ide na račun koji ne odgovara groblju ili komunalnom preduzeću sa zvaničnog sajta.",
    subtitle: { sr: "Obaveštenje → taksa → lažni primalac.", en: "Notice → fee → fake recipient." },
    hasPage: true,
    tags: ["prevare", "edukacija", "pogreb"],
    overlaps: ["cemetery-plot-scam", "funeral-home-scam", "government-impersonation", "advance-fee-fraud", "phishing"],
    sources: []
  },
  "fake-inheritance-probate-release-scam": {
    title: { sr: "Prevara lažnom naknadom za oslobađanje nasledstva u postupku", en: "Fake inheritance probate release scam" },
    title_en: "Fake inheritance probate release scam",
    title_sr: "Prevara lažnom naknadom za oslobađanje nasledstva u postupku",
    summary_en: "A contact claims inheritance is blocked by a court, notary, or state fee and demands payment to release it, although legal probate does not collect such amounts via private accounts.",
    summary_sr: "Kontakt tvrdi da nasledstvo stoji na čekanju zbog suda, notara ili državne takse i traži uplatu da bi se predmet oslobodio, iako pravni postupak ne naplaćuje takve iznose preko privatnog računa.",
    subtitle: { sr: "Pismo ili poziv → taksa za oslobađanje → lažni primalac.", en: "Letter or call → release fee → fake recipient." },
    hasPage: true,
    tags: ["prevare", "edukacija", "nasledstvo"],
    overlaps: ["genealogy-inheritance-hunter-scam", "advance-fee-fraud", "bereavement-identity-theft-scam", "phishing", "identity-theft"],
    sources: []
  },
  "fake-executor-advance-fee-scam": {
    title: { sr: "Prevara lažnim avansom izvršioca testamenta", en: "Fake executor advance fee scam" },
    title_en: "Fake executor advance fee scam",
    title_sr: "Prevara lažnim avansom izvršioca testamenta",
    summary_en: "Someone poses as an executor or official representative and asks for an advance for procedure costs, tax, or travel before identity and authority are confirmed with the family or lawyer.",
    summary_sr: "Neko se predstavlja kao izvršilac ili službeni ovlašćenik i traži avans za troškove postupka, poreza ili puta, pre nego što se potvrdi identitet i punomoćje kod porodice ili advokata.",
    subtitle: { sr: "Lažni izvršilac → avans → nema punomoćja.", en: "Fake executor → advance → no authority." },
    hasPage: true,
    tags: ["prevare", "edukacija", "nasledstvo"],
    overlaps: ["genealogy-inheritance-hunter-scam", "advance-fee-fraud", "impersonation-scam", "identity-theft", "phishing"],
    sources: []
  },
  "fake-will-verification-fee-scam": {
    title: { sr: "Prevara lažnom naknadom za verifikaciju testamenta", en: "Fake will verification fee scam" },
    title_en: "Fake will verification fee scam",
    title_sr: "Prevara lažnom naknadom za verifikaciju testamenta",
    summary_en: "A demand arrives to verify a will, seal, or signature for a fee via a link or third-party account, although notarization follows rules that do not use such a channel.",
    summary_sr: "Stiže zahtev da se testament, pečat ili potpis overi uz plaćanje preko linka ili na račun trećeg lica, iako overa ide kroz notara ili sud po pravilima koja ne traže takav kanal.",
    subtitle: { sr: "Verifikacija → link → krađa podataka ili novca.", en: "Verification → link → data or money theft." },
    hasPage: true,
    tags: ["prevare", "edukacija", "nasledstvo"],
    overlaps: ["genealogy-inheritance-hunter-scam", "phishing", "advance-fee-fraud", "identity-theft"],
    sources: []
  },
  "fake-repatriation-remains-scam": {
    title: { sr: "Prevara lažnom uslugom prenosa posmrtnih ostataka", en: "Fake repatriation of remains scam" },
    title_en: "Fake repatriation of remains scam",
    title_sr: "Prevara lažnom uslugom prenosa posmrtnih ostataka",
    summary_en: "A fake agency or diplomatic channel demands urgent payment for transport, embalming, or permits to move remains abroad, with no embassy or airline number you can verify.",
    summary_sr: "Lažna agencija ili diplomatski kanal traži hitnu uplatu za transport, embalming ili dozvole za prenos pokojnika u inostranstvo, bez broja ambasade ili avio kompanije koji možeš proveriti.",
    subtitle: { sr: "Hitnost → troškovi transporta → lažni primalac.", en: "Urgency → transport costs → fake recipient." },
    hasPage: true,
    tags: ["prevare", "edukacija", "pogreb"],
    overlaps: ["funeral-home-scam", "travel-booking-scam", "advance-fee-fraud", "impersonation-scam", "phishing"],
    sources: []
  },
  "fake-hospital-discharge-fee-scam": {
    title: { sr: "Prevara lažnom naknadom za otpust iz bolnice", en: "Fake hospital discharge fee scam" },
    title_en: "Fake hospital discharge fee scam",
    title_sr: "Prevara lažnom naknadom za otpust iz bolnice",
    summary_en: "A message or call claims an extra payment is needed to finish discharge, paperwork, or medication, although the hospital bills through normal invoicing or insurance, not a private account.",
    summary_sr: "Poruka ili poziv tvrdi da je potrebna dodatna uplata da bi se završio otpust, dobili papir ili lekovi, iako bolnica to naplaćuje kroz uobičajen račun ili osiguranje, ne preko privatnog računa.",
    subtitle: { sr: "Otpust → taksa → lažni račun.", en: "Discharge → fee → fake account." },
    hasPage: true,
    tags: ["prevare", "edukacija", "zdravlje"],
    overlaps: ["healthcare-impersonation", "fake-medical-scam", "medical-appointment-phishing", "phishing", "advance-fee-fraud"],
    sources: []
  },
  "fake-surgery-scheduling-fee-scam": {
    title: { sr: "Prevara lažnom naknadom za zakazivanje operacije", en: "Fake surgery scheduling fee scam" },
    title_en: "Fake surgery scheduling fee scam",
    title_sr: "Prevara lažnom naknadom za zakazivanje operacije",
    summary_en: "A fake coordinator demands payment to free an OR slot or priority, while public facilities do not sell slots to personal accounts and private clinics issue quotes and invoices in the institution's name.",
    summary_sr: "Lažni koordinator traži uplatu da bi se oslobodio termin ili prioritet u sali, iako javne ustanove ne prodaju termine na lični račun, a privatne klinike daju ponudu i račun na ime ustanove.",
    subtitle: { sr: "Termin operacije → avans → klinika ne potvrđuje.", en: "Surgery slot → deposit → clinic does not confirm." },
    hasPage: true,
    tags: ["prevare", "edukacija", "zdravlje"],
    overlaps: ["fake-medical-scam", "healthcare-impersonation", "advance-fee-fraud", "medical-appointment-phishing"],
    sources: []
  },
  "fake-waiting-list-priority-scam": {
    title: { sr: "Prevara lažnim prioritetom na listi čekanja", en: "Fake priority waiting-list placement scam" },
    title_en: "Fake priority waiting-list placement scam",
    title_sr: "Prevara lažnim prioritetom na listi čekanja",
    summary_en: "Someone offers to move you up a waitlist for an exam, surgery, or device for a fee, although queue order in public systems cannot be bought through a third party.",
    summary_sr: "Neko nudi da vas gurne napred na listi čekanja za pregled, operaciju ili aparat uz naknadu, iako redosled u javnom sistemu ne može da se kupi preko trećeg lica.",
    subtitle: { sr: "Prioritet → mito → ustanova to ne nudi.", en: "Priority → bribe → facility does not offer it." },
    hasPage: true,
    tags: ["prevare", "edukacija", "zdravlje"],
    overlaps: ["fake-medical-scam", "healthcare-impersonation", "advance-fee-fraud", "impersonation-scam"],
    sources: []
  },
  "fake-home-medical-device-subscription-scam": {
    title: { sr: "Prevara pretplatom na kućni medicinski aparat", en: "Fake home medical device subscription scam" },
    title_en: "Fake home medical device subscription scam",
    title_sr: "Prevara pretplatom na kućni medicinski aparat",
    summary_en: "An offer for a free or cheap home-care device turns into a contract with hidden monthly costs, hard cancellation, or billed spare parts that never arrive.",
    summary_sr: "Ponuda besplatnog ili jeftinog aparata za kućnu negu pretvara se u ugovor sa skrivenim mesecnim troškovima, teškim otkazom ili naplatom rezervnih delova koji ne stižu.",
    subtitle: { sr: "Ponuda aparata → ugovor → dug bez isporuke.", en: "Device offer → contract → debt without delivery." },
    hasPage: true,
    tags: ["prevare", "edukacija", "zdravlje"],
    overlaps: ["home-nursing-subscription-scam", "fake-medical-scam", "subscription-trap", "advance-fee-fraud", "medical-device-doorstep-scam"],
    sources: []
  },
  "fake-telemedicine-consultation-scam": {
    title: { sr: "Prevara lažnom telemedicinskom konsultacijom", en: "Fake telemedicine consultation scam" },
    title_en: "Fake telemedicine consultation scam",
    title_sr: "Prevara lažnom telemedicinskom konsultacijom",
    summary_en: "A fake doctor or platform sells a video consult or e-prescription for upfront payment, with no verifiable medical license or link to the facility where the patient is treated.",
    summary_sr: "Lažni lekar ili platforma prodaje video pregled ili e-recept uz uplatu unapred, bez licence koja se proverava kod komore ili bez povezivanja sa ustanovom u kojoj pacijent već leči.",
    subtitle: { sr: "Video poziv → uplata → nema medicinskog nalaza.", en: "Video call → payment → no clinical record." },
    hasPage: true,
    tags: ["prevare", "edukacija", "zdravlje"],
    overlaps: ["fake-medical-scam", "healthcare-impersonation", "home-nursing-subscription-scam", "advance-fee-fraud", "phishing"],
    sources: []
  },
  "fake-prescription-renewal-phishing-scam": {
    title: { sr: "Prevara fišingom za obnovu recepta", en: "Fake prescription renewal phishing scam" },
    title_en: "Fake prescription renewal phishing scam",
    title_sr: "Prevara fišingom za obnovu recepta",
    summary_en: "SMS or email asks you to renew a prescription through a link posing as a pharmacy or health portal to steal accounts, cards, or health data.",
    summary_sr: "SMS ili mejl traži da obnovite recept kroz link koji glumi apoteku ili zdravstveni portal, radi krađe naloga, kartice ili zdravstvenih podataka.",
    subtitle: { sr: "Obnova recepta → lažni link → krađa.", en: "Renewal → fake link → theft." },
    hasPage: true,
    tags: ["prevare", "edukacija", "zdravlje"],
    overlaps: ["phishing", "smishing", "fake-medical-scam", "medical-appointment-phishing", "identity-theft"],
    sources: []
  },
  "fake-patient-portal-mfa-scam": {
    title: { sr: "Prevara lažnom potvrdom prijave ili prijavom na pacijentski portal", en: "Fake patient portal MFA scam" },
    title_en: "Fake patient portal MFA scam",
    title_sr: "Prevara lažnom potvrdom prijave ili prijavom na pacijentski portal",
    summary_en: "A message demands urgent confirmation on a patient portal, account reactivation, or approval of an MFA prompt so an attacker can enter the health account and personal data.",
    summary_sr: "Poruka traži hitnu potvrdu na pacijentskom portalu, ponovnu aktivaciju naloga ili odobrenje MFA notifikacije, da bi napadač ušao u zdravstveni nalog i lične podatke.",
    subtitle: { sr: "Portal → MFA → preuzimanje naloga.", en: "Portal → MFA → account takeover." },
    hasPage: true,
    tags: ["prevare", "edukacija", "zdravlje"],
    overlaps: ["mfa-fatigue-scam", "phishing", "account-takeover", "healthcare-impersonation", "medical-appointment-phishing"],
    sources: []
  },
  "fake-rehabilitation-centre-deposit-scam": {
    title: { sr: "Prevara lažnim depozitom za rehabilitacioni centar", en: "Fake rehabilitation centre deposit scam" },
    title_en: "Fake rehabilitation centre deposit scam",
    title_sr: "Prevara lažnim depozitom za rehabilitacioni centar",
    summary_en: "A fake rehabilitation clinic demands a large deposit for stay or therapy, sends generic instructions, and avoids an address and operating license you can verify in a registry.",
    summary_sr: "Lažna klinika za rehabilitaciju traži veliki depozit za smeštaj ili terapiju, šalje generičke uputstva i izbegava adresu i dozvolu za rad koju možeš proveriti u registru.",
    subtitle: { sr: "Mesto u centru → depozit → centar ne postoji.", en: "Centre slot → deposit → centre does not exist." },
    hasPage: true,
    tags: ["prevare", "edukacija", "zdravlje"],
    overlaps: ["fertility-clinic-advance-fee-scam", "fake-medical-scam", "advance-fee-fraud", "healthcare-impersonation"],
    sources: []
  },
  "fake-long-term-care-placement-fee-scam": {
    title: { sr: "Prevara lažnom naknadom za smeštaj u dugotrajnoj nezi", en: "Fake long-term care placement fee scam" },
    title_en: "Fake long-term care placement fee scam",
    title_sr: "Prevara lažnom naknadom za smeštaj u dugotrajnoj nezi",
    summary_en: "An intermediary charges a fee to secure a long-term care bed, although real facilities have official admission procedures without paying a third party for queue position.",
    summary_sr: "Posrednik traži naknadu da osigura mesto u domu ili jedinici dugotrajne nege, iako stvarni domovi imaju zvaničan postupak prijema bez plaćanja trećem licu za red.",
    subtitle: { sr: "Mesto u domu → provizija → dom ne potvrđuje posrednika.", en: "Care home slot → fee → facility does not confirm broker." },
    hasPage: true,
    tags: ["prevare", "edukacija", "zdravlje"],
    overlaps: ["elder-fraud-support-service-scam", "advance-fee-fraud", "impersonation-scam", "fake-medical-scam"],
    sources: []
  },
  "fake-diploma-verification-portal-scam": {
    title: { sr: "Prevara lažnim portalom za proveru diplome", en: "Fake diploma verification portal scam" },
    title_en: "Fake diploma verification portal scam",
    title_sr: "Prevara lažnim portalom za proveru diplome",
    summary_en: "A fake site asks for personal data and a fee to verify a diploma in minutes, while real checks run through the issuing institution or prescribed state channels with published payees.",
    summary_sr: "Lažni sajt traži lične podatke i naknadu da proveriš diplomu za nekoliko minuta, dok prava provera ide preko ustanove koja je diplomu izdala ili propisanih državnih kanala sa objavljenim primaocima uplata.",
    subtitle: { sr: "Lažni portal → podaci → uplata → nema zvanične potvrde.", en: "Fake portal → data → payment → no official confirmation." },
    hasPage: true,
    tags: ["prevare", "edukacija", "diploma"],
    overlaps: ["phishing", "advance-fee-fraud", "education-ministry-impersonation", "fake-diploma-legalization-scam"],
    sources: []
  },
  "fake-student-transcript-release-fee-scam": {
    title: { sr: "Prevara naknadom za otpuštanje studentskog izvoda", en: "Fake student transcript release fee scam" },
    title_en: "Fake student transcript release fee scam",
    title_sr: "Prevara naknadom za otpuštanje studentskog izvoda",
    summary_en: "A message claims your transcript is blocked until you pay a release or e-sign fee, while real ordering runs through student services or the institution portal with verifiable payees.",
    summary_sr: "Poruka tvrdi da je izvod blokiran dok ne platiš naknadu za slanje ili e-potpis, dok se pravo naručivanje radi preko studentske službe ili portala ustanove sa proverljivim primaocima.",
    subtitle: { sr: "Lažno obaveštenje → uplata → nema izvoda.", en: "Fake notice → payment → no transcript." },
    hasPage: true,
    tags: ["prevare", "edukacija", "studenti"],
    overlaps: ["phishing", "advance-fee-fraud", "education-ministry-impersonation", "fake-diploma-verification-portal-scam"],
    sources: []
  },
  "fake-exam-rescheduling-fee-scam": {
    title: { sr: "Prevara naknadom za prebacivanje ispita", en: "Fake exam rescheduling fee scam" },
    title_en: "Fake exam rescheduling fee scam",
    title_sr: "Prevara naknadom za prebacivanje ispita",
    summary_en: "Someone offers to move an exam slot for a fee through a link or third party, while real changes follow published faculty rules and official channels only.",
    summary_sr: "Neko nudi prebacivanje termina ispita uz naknadu preko linka ili trećeg lica, dok prave izmene idu po objavljenim pravilima fakulteta i samo kroz zvanične kanale.",
    subtitle: { sr: "Hitni termin → uplata → ustanova ne potvrđuje.", en: "Urgent slot → payment → institution does not confirm." },
    hasPage: true,
    tags: ["prevare", "edukacija", "studenti"],
    overlaps: ["phishing", "advance-fee-fraud", "education-ministry-impersonation", "fake-student-transcript-release-fee-scam"],
    sources: []
  },
  "fake-university-seat-reservation-scam": {
    title: { sr: "Prevara lažnom rezervacijom mesta na fakultetu", en: "Fake university seat reservation scam" },
    title_en: "Fake university seat reservation scam",
    title_sr: "Prevara lažnom rezervacijom mesta na fakultetu",
    summary_en: "A third party sells a guaranteed study place or queue jump for a fee, although admission follows official enrollment procedures without paying an intermediary for a seat.",
    summary_sr: "Treće lice prodaje garantovano mesto ili preskakanje reda uz naknadu, iako upis ide po zvaničnom postupku prijema bez plaćanja posredniku za mesto.",
    subtitle: { sr: "Mesto na studijama → provizija → ustanova to ne nudi.", en: "Study place → fee → institution does not offer it." },
    hasPage: true,
    tags: ["prevare", "edukacija", "studenti"],
    overlaps: ["advance-fee-fraud", "education-ministry-impersonation", "scholarship-fee-scam", "fake-internship-stipend-scam"],
    sources: []
  },
  "fake-student-housing-allocation-fee-scam": {
    title: { sr: "Prevara naknadom za dodelu studentskog smeštaja", en: "Fake student housing allocation fee scam" },
    title_en: "Fake student housing allocation fee scam",
    title_sr: "Prevara naknadom za dodelu studentskog smeštaja",
    summary_en: "A message demands payment to unlock a dorm bed or private listing, while real allocation uses published dorm rules or rental contracts without a mystery unlock fee.",
    summary_sr: "Poruka traži uplatu da otključaš mesto u domu ili kod privatnog smeštaja, dok prava dodela ide po objavljenim pravilima domova ili ugovoru o zakupu bez tajanstvene naknade za otključavanje.",
    subtitle: { sr: "Smeštaj → uplata unapred → nema ključa.", en: "Housing → upfront payment → no keys." },
    hasPage: true,
    tags: ["prevare", "edukacija", "studenti"],
    overlaps: ["student-accommodation-scam", "rental-scam", "advance-fee-fraud", "phishing"],
    sources: []
  },
  "fake-language-certificate-fast-track-scam": {
    title: { sr: "Prevara brzim jezičkim sertifikatom", en: "Fake language certificate fast-track scam" },
    title_en: "Fake language certificate fast-track scam",
    title_sr: "Prevara brzim jezičkim sertifikatom",
    summary_en: "An agent sells an urgent language exam certificate or verification for a fee, bypassing real test centres and registries that issue credentials on fixed schedules.",
    summary_sr: "Posrednik prodaje hitan sertifikat ili overu jezika uz naknadu, zaobilazeći prave ispitne centre i registre koji izdaju potvrde po fiksnom rasporedu.",
    subtitle: { sr: "Brza diploma → uplata → test centar ne potvrđuje.", en: "Fast certificate → payment → test centre does not confirm." },
    hasPage: true,
    tags: ["prevare", "edukacija", "sertifikat"],
    overlaps: ["fake-training-certification-for-grants-scam", "advance-fee-fraud", "fake-diploma-verification-portal-scam", "phishing"],
    sources: []
  },
  "fake-academic-plagiarism-clearance-scam": {
    title: { sr: "Prevara čišćenjem plagijata na radu", en: "Fake academic plagiarism clearance scam" },
    title_en: "Fake academic plagiarism clearance scam",
    title_sr: "Prevara čišćenjem plagijata na radu",
    summary_en: "Someone offers to clear a plagiarism flag or unlock submission for a fee outside the institution’s official academic integrity process.",
    summary_sr: "Neko nudi da ukloni zabeležbu o plagijatu ili otključa predaju rada uz naknadu van zvaničnog postupka ustanove za akademsku čestitost.",
    subtitle: { sr: "Plagijat → uplata → služba to ne radi preko trećeg lica.", en: "Plagiarism → payment → office does not do this via third parties." },
    hasPage: true,
    tags: ["prevare", "edukacija", "studenti"],
    overlaps: ["phishing", "advance-fee-fraud", "education-ministry-impersonation", "fake-copyright-strike-removal"],
    sources: []
  },
  "fake-recruiter-relocation-housing-scam": {
    title: { sr: "Prevara smeštajem uz lažnog regrutera", en: "Fake recruiter relocation housing scam" },
    title_en: "Fake recruiter relocation housing scam",
    title_sr: "Prevara smeštajem uz lažnog regrutera",
    summary_en: "A fake recruiter pairs a job offer with paid housing deposits or transfers to a third party before a real employer confirms relocation support.",
    summary_sr: "Lažni regruter vezuje ponudu posla sa depozitom za smeštaj ili uplatom trećem licu pre nego što pravi poslodavac potvrdi pomoć oko preseljenja.",
    subtitle: { sr: "Posao → depozit za stan → posao ne postoji.", en: "Job → rent deposit → job does not exist." },
    hasPage: true,
    tags: ["prevare", "posao", "smeštaj"],
    overlaps: ["recruitment-scam", "job-scam", "rental-scam", "advance-fee-fraud", "employment-contract-processing-fee"],
    sources: []
  },
  "fake-water-contamination-emergency-scam": {
    title: { sr: "Prevara lažnom hitnom kontaminacijom vode", en: "Fake water contamination emergency scam" },
    title_en: "Fake water contamination emergency scam",
    title_sr: "Prevara lažnom hitnom kontaminacijom vode",
    summary_en: "Callers or SMS claim unsafe water and demand fees for urgent tests, filters, or technician slots, while real notices come through the utility’s public channels.",
    summary_sr: "Pozivi ili SMS tvrdi da je voda nebezbedna i traže naknadu za hitne testove, filtere ili termine tehničara, dok prava obaveštenja idu preko javnih kanala distributera.",
    subtitle: { sr: "Hitna voda → uplata → nema zvaničnog izveštaja.", en: "Urgent water story → payment → no official report." },
    hasPage: true,
    tags: ["prevare", "dom", "komunalije"],
    overlaps: ["utility-bill-scam", "government-impersonation", "advance-fee-fraud", "fake-sanitation-inspector-scam", "phishing"],
    sources: []
  },
  "fake-insurance-excess-refund-scam": {
    title: { sr: "Prevara lažnim povraćajem participacije", en: "Fake insurance excess refund scam" },
    title_en: "Fake insurance excess refund scam",
    title_sr: "Prevara lažnim povraćajem participacije",
    summary_en: "Messages claim an insurer owes a co-payment refund and ask for card data or a fee to release it, while real refunds run through the policy’s official contact only.",
    summary_sr: "Poruke tvrdi da osiguranje duguje povraćaj participacije i traže podatke sa kartice ili naknadu da ga otpuste, dok pravi povraćaji idu samo kroz zvanični kontakt sa police.",
    subtitle: { sr: "Povraćaj → link → krađa ili taksa.", en: "Refund → link → theft or fee." },
    hasPage: true,
    tags: ["prevare", "osiguranje", "fišing"],
    overlaps: ["refund-scam", "phishing", "smishing", "fake-insurance-scam", "advance-fee-fraud", "fake-insurance-adjuster-doorstep-scam"],
    sources: []
  },
  "fake-utility-subsidy-enrollment-scam": {
    title: { sr: "Prevara lažnom prijavom za subvenciju na struju ili grejanje", en: "Fake utility subsidy enrollment scam" },
    title_en: "Fake utility subsidy enrollment scam",
    title_sr: "Prevara lažnom prijavom za subvenciju na struju ili grejanje",
    summary_en: "Ads or SMS push enrolment in a state or local energy subsidy with upfront registration fees to a private party, while real programmes publish free official application paths.",
    summary_sr: "Oglasi ili SMS guraju prijavu za državnu ili lokalnu subvenciju na struju ili grejanje uz predplatu registracije privatnom licu, dok pravi programi objavljuju besplatan zvaničan kanal prijave.",
    subtitle: { sr: "Subvencija → predplata → nema sredstava.", en: "Subsidy → prepayment → no funds." },
    hasPage: true,
    tags: ["prevare", "komunalije", "država"],
    overlaps: ["utility-bill-scam", "government-impersonation", "cap-subsidy-unlock-scam", "advance-fee-fraud", "phishing"],
    sources: []
  },
  "fake-boiler-inspection-fee-scam": {
    title: { sr: "Prevara naknadom za lažni pregled kotla", en: "Fake boiler inspection fee scam" },
    title_en: "Fake boiler inspection fee scam",
    title_sr: "Prevara naknadom za lažni pregled kotla",
    summary_en: "Cold messages demand immediate payment to book a mandatory gas or boiler inspection, while real service uses appointments and payees you verify with the distributor or manufacturer.",
    summary_sr: "Hladni kontakti traže odmah uplatu za navodno obavezan pregled kotla ili gasa, dok pravi servis koristi zakazivanje i primaoca koji proveravaš kod distributera ili proizvođača.",
    subtitle: { sr: "Pregled → uplata → nema ovlašćenog izveštaja.", en: "Inspection → payment → no authorised report." },
    hasPage: true,
    tags: ["prevare", "dom", "gas"],
    overlaps: ["fake-gas-inspector-scam", "home-improvement-scam", "fake-plumber-emergency-scam", "utility-bill-scam", "advance-fee-fraud"],
    sources: []
  },
  "fake-post-storm-tree-removal-deposit-scam": {
    title: { sr: "Prevara depozitom za uklanjanje drveta posle oluje", en: "Fake post-storm tree removal deposit scam" },
    title_en: "Fake post-storm tree removal deposit scam",
    title_sr: "Prevara depozitom za uklanjanje drveta posle oluje",
    summary_en: "Crews demand deposits for urgent crane or tree work after storms, then vanish or escalate fees, while legitimate contractors provide written scope and verifiable insurance.",
    summary_sr: "Ekipe traže depozit za hitan rad dizalice ili sečenja posle oluje, pa nestanu ili eskaliraju naknade, dok legitimni izvođači daju pisan opseg i proverljivo osiguranje.",
    subtitle: { sr: "Oluja → depozit → nema ekipe.", en: "Storm → deposit → no crew." },
    hasPage: true,
    tags: ["prevare", "dom", "oluja"],
    overlaps: ["roofing-storm-damage-scam", "disaster-cleanup-advance-scam", "fake-insurance-adjuster-doorstep-scam", "home-improvement-scam", "advance-fee-fraud"],
    sources: []
  },
  "fake-smart-meter-installation-scam": {
    title: { sr: "Prevara lažnom ugradnjom pametnog brojila", en: "Fake smart meter installation scam" },
    title_en: "Fake smart meter installation scam",
    title_sr: "Prevara lažnom ugradnjom pametnog brojila",
    summary_en: "SMS or calls mimic the power distributor and ask fees or card data to schedule a smart meter swap, while real notices use official domains and info lines only.",
    summary_sr: "SMS ili pozivi glume distributera struje i traže naknadu ili podatke sa kartice za zamenu brojila, dok prava obaveštenja koriste samo zvanične domene i infolinije.",
    subtitle: { sr: "Brojilo → uplata → termin ne postoji.", en: "Meter → payment → slot does not exist." },
    hasPage: true,
    tags: ["prevare", "komunalije", "struja"],
    overlaps: ["fake-utility-meter-reader-scam", "utility-bill-scam", "smishing", "phishing", "fake-electrician-doorstep-scam", "advance-fee-fraud"],
    sources: []
  }
};