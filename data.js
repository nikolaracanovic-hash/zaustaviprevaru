// data.js
// Central registry for all scam pages (single source of truth).
// render.js reads: title, subtitle, hasPage, overlaps (and ignores extra fields safely).

window.SCAM_DB = {
  "romantic-scam": {
    core: true,
    title: { sr: "Romantične prevare", en: "Romance scams" },
    title_en: "Romance scams",
    title_sr: "Romantične prevare",
    summary_en: "It starts with attention and fast bonding in chat. They ask for gift cards, transfers for travel or medical bills, then pivot into an \"investment\" story. Escalation runs on deadlines and new obstacles. Signal: no meeting or video call, each \"final step\" requires another payment.",
    summary_sr: "Početak je pažnja i brzo zbližavanje kroz chat. Traže poklon-kartice, uplatu za put ili lečenje, zatim uvode \"investiciju\" kao izlaz iz krize. Eskalacija ide kroz rokove i nove prepreke. Signal: susret ili video-poziv izostaje, svaka \"poslednja stavka\" traži novu uplatu.",
    subtitle: {
      sr: "Emocionalna manipulacija → novac, podaci, zatim prelazak u investicione šeme.",
      en: "Emotional manipulation → money/data extraction → often branches into investment schemes."
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
    summary_en: "Opening move: a call that looks official via spoofed caller ID. They ask for codes, confirmations, or a \"security\" action while keeping you on the line. Escalation uses scripted steps and escalating urgency. Signal: a sensitive request arrives during the call, paired with pressure to stay connected.",
    summary_sr: "Okidač je poziv koji deluje zvanično kroz lažni prikaz broja. Traže kodove, potvrde ili \"bezbednosnu\" radnju dok drže liniju otvorenom. Eskalacija ide kroz skriptovane korake i sve jači pritisak. Signal: osetljiv zahtev stiže tokom poziva uz insistiranje da razgovor traje.",
    subtitle: {
      sr: "Autoritet u realnom vremenu: pritisak preko telefona bez prostora za proveru.",
      en: "Real-time authority: pressure over the phone with no room to verify."
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
    summary_en: "Entry point: a great deal or a fast buyer on a listing platform. They ask for upfront payment or push a \"payment/delivery\" link that steals card details and codes. Escalation shifts into \"secure mediation\" and new links. Signal: off-platform chat plus urgency around paying.",
    summary_sr: "Prvi korak je povoljna cena ili brza prodaja preko oglasa. Traže uplatu unapred ili šalju \"link za plaćanje/dostavu\" koji krade karticu i kodove. Eskalacija prelazi u \"sigurno posredovanje\" i nove linkove. Signal: komunikacija van platforme uz žurbu oko uplate.",
    subtitle: {
      sr: "Kupoprodaja preko oglasa → uplata unapred ili lažni link za \"dostavu/plaćanje\".",
      en: "Buying/selling via listings → upfront payment or fake \"delivery/payment\" link."
    },
    hasPage: true,
    tags: ["oglasi"],
    overlaps: ["phishing", "smishing", "advance-fee-fraud", "fake-delivery"],
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
    summary_en: "It begins with a message that imitates a bank or service. They ask you to enter password, card data, or a 2FA code on a fake form. Escalation adds more prompts and account takeover. Signal: a link leads to a form that requests sensitive data.",
    summary_sr: "Prevara kreće porukom koja glumi banku ili servis. Traže unos lozinke, kartice ili 2FA koda na lažnoj formi. Eskalacija dodaje nove upite i vodi u preuzimanje naloga. Signal: link vodi na formu koja traži osetljive podatke.",
    subtitle: {
      sr: "Link ili forma: cilj su lozinke, kartice, kodovi i pristup nalozima.",
      en: "Link or form: the goal is passwords, cards, codes, and account access."
    },
    hasPage: true,
    tags: ["krađa podataka"],
    overlaps: ["smishing", "vishing", "account-takeover", "crypto-scam", "marketplace-scam", "fake-delivery"],
    sources: []
  },

  "smishing": {
    core: true,
    title: { sr: "Smišing", en: "Smishing" },
    title_en: "Smishing",
    title_sr: "Smišing",
    summary_en: "It starts with an SMS about delivery, fines, or \"verification\". They ask you to click a link and enter card or login details. Escalation runs via repeated messages and new links. Signal: generic sender plus a shortened link or a strange domain.",
    summary_sr: "Napad počinje SMS porukom o dostavi, kazni ili \"verifikaciji\". Traže klik na link i unos kartice ili naloga. Eskalacija ide kroz ponovljene poruke i nove linkove. Signal: generičan pošiljalac uz skraćen link ili čudan domen.",
    subtitle: {
      sr: "SMS poruke sa linkom → krađa podataka ili kartice.",
      en: "SMS with a link → stealing data or card details."
    },
    hasPage: true,
    tags: ["krađa podataka"],
    overlaps: ["phishing", "vishing", "fake-delivery", "marketplace-scam"],
    sources: []
  },

  "vishing": {
    core: true,
    title: { sr: "Višing", en: "Vishing" },
    title_en: "Vishing",
    title_sr: "Višing",
    summary_en: "It starts as an urgent call framed as security or an incident. They ask for codes and personal data while guiding you through a \"procedure\". Escalation includes a transfer to a \"supervisor\" and stronger pressure. Signal: demands for codes during the call and hostility toward verification.",
    summary_sr: "Ulaz je hitan poziv sa pričom o bezbednosti ili incidentu. Traže kodove i podatke tokom razgovora uz vođenje kroz \"proceduru\". Eskalacija uključuje prebacivanje na \"supervizora\" i jači pritisak. Signal: zahtev za kodovima tokom poziva uz otpor prema proveri.",
    subtitle: {
      sr: "Poziv kao napad: autoritet + hitnost + izvlačenje kodova, lozinki ili uplata.",
      en: "Calls as an attack: authority + urgency + extracting codes, passwords, or payments."
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
    summary_en: "It starts with a login alert or a forced \"verification\" message. They ask for password, OTP, or a reset action, then change recovery data. Escalation spreads by messaging your contacts from the hijacked account. Signal: unexpected codes and password resets you did not request.",
    summary_sr: "Polazna tačka je upozorenje o prijavi ili poruka o \"verifikaciji\". Traže lozinku, kod ili reset radnju, zatim menjaju podatke za oporavak. Eskalacija ide kroz poruke tvojim kontaktima sa preuzetog naloga. Signal: stižu kodovi i resetovi koje korisnik nije tražio.",
    subtitle: {
      sr: "Krađa koda ili lozinke → kontrola naloga, promene podataka, preusmeravanje uplata.",
      en: "Stealing code/password → account control, data changes, payment redirection."
    },
    hasPage: true,
    tags: ["krađa podataka"],
    overlaps: ["phishing", "vishing", "fake-call-scam", "impersonation-scam", "tech-support-scam"],
    sources: []
  },

  "tech-support-scam": {
    core: true,
    title: { sr: "Prevara lažne tehničke podrške", en: "Tech support scam" },
    title_en: "Tech support scam",
    title_sr: "Prevara lažne tehničke podrške",
    summary_en: "It starts with a virus warning or a \"support\" contact offering an urgent fix. They ask for remote access and payment for a service. Escalation adds tools installed on the device and new charges. Signal: pop-up phone numbers plus demands for remote control.",
    summary_sr: "Početak je upozorenje o virusu ili kontakt \"podrške\" sa pričom o hitnom rešavanju. Traže remote pristup i uplatu za servis. Eskalacija uključuje instalaciju alata i nove troškove. Signal: pop-up brojevi i zahtev za daljinski pristup.",
    subtitle: {
      sr: "Lažna podrška → remote pristup ili 'čišćenje virusa' → naplata i krađa.",
      en: "Fake support → remote access or \"virus cleanup\" → fees and theft."
    },
    hasPage: true,
    tags: ["autoritet"],
    overlaps: ["scareware", "vishing", "fake-call-scam", "phishing", "account-takeover"],
    sources: []
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
    sources: []
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
    sources: []
  },

  "pig-butchering": {
    core: true,
    title: { sr: "Dug odnos + investicija", en: "Pig butchering" },
    title_en: "Pig butchering",
    title_sr: "Dug odnos + investicija",
    summary_en: "It begins as a long relationship that turns into investing, often crypto. They ask for deposits on a fake platform, show profits, then push bigger stakes. Escalation ends with blocked withdrawals and added fees. Signal: emotional bonding plus a platform where deposits work and withdrawals fail.",
    summary_sr: "Prevara kreće dugim odnosom koji prelazi u \"investiciju\", često kripto. Traže uplatu na lažnoj platformi, prikazuju dobit, zatim guraju veće uloge. Eskalacija završava blokadom povlačenja i dodatnim taksama. Signal: emotivno vezivanje plus platforma gde uplata radi, povlačenje staje.",
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
    summary_en: "Entry point: a promise to recover lost funds from earlier scams. They ask for an upfront fee, then add taxes, court fees, and \"unlock\" payments. Escalation is a loop of new charges while the result stays out of reach. Signal: recovery is conditioned on another payment.",
    summary_sr: "Ulaz je obećanje povraćaja izgubljenog novca. Traže naknadu unapred, zatim dodaju porez, takse i \"unlock\" uplate. Eskalacija je krug novih troškova dok rezultat izostaje. Signal: povraćaj zavisi od nove uplate.",
    subtitle: {
      sr: "'Povraćaj' kao mamac: nova naknada da bi se 'vratio' izgubljen novac.",
      en: "\"Recovery\" as bait: a new fee to supposedly get lost money back."
    },
    hasPage: true,
    tags: ["uplate unapred"],
    overlaps: ["advance-fee-fraud", "crypto-scam", "romantic-scam", "pig-butchering"],
    sources: []
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
    sources: []
  },

  "job-scam": {
    core: true,
    title: { sr: "Prevara sa ponudom posla", en: "Job scam" },
    title_en: "Job scam",
    title_sr: "Prevara sa ponudom posla",
    summary_en: "It starts with a quick job offer with minimal screening. They ask for documents and tests, then introduce fees for training, equipment, or certificates. Escalation adds more costs or payment-forwarding tasks. Signal: vague role details and a payment request before a contract.",
    summary_sr: "Prevara kreće brzom ponudom posla uz minimalnu proveru. Traže dokumenta i \"test\", zatim ubacuju naknade za obuku, opremu ili sertifikat. Eskalacija dodaje nove troškove ili šemu preusmeravanja uplata. Signal: opis posla mutan i uplata stiže pre ugovora.",
    subtitle: {
      sr: "Ponuda posla: dokumenta, 'obuka', naknade, preusmeravanja i krađa identiteta.",
      en: "Job offer: documents, \"training\", fees, redirections, and identity theft."
    },
    hasPage: true,
    overlaps: ["advance-fee-fraud", "phishing", "impersonation-scam"],
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
    summary_en: "It starts with a package message and a \"courier\" link. They ask for card details, a payment, or a code confirmation. Escalation uses reminders and threats about returns. Signal: a delivery-looking link on a non-official domain plus a request for card data.",
    summary_sr: "Okidač je poruka o paketu i \"kurirski\" link. Traže karticu, uplatu ili potvrdu koda. Eskalacija ide kroz podsetnike i pretnje povratom paketa. Signal: link liči na dostavu, domen odstupa od zvanične firme, traži karticu ili kod.",
    subtitle: {
      sr: "'Dostava' i 'carina' kao izgovor: link, forma, kodovi, preusmeravanje uplata.",
      en: "\"Delivery\" and \"customs\" as pretext: link, form, codes, payment redirection."
    },
    hasPage: true,
    tags: ["krađa podataka"],
    overlaps: ["smishing", "phishing", "marketplace-scam"],
    sources: []
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
    sources: []
  },

  "charity-scam": {
    title: { sr: "Prevara sa donacijama", en: "Charity scam" },
    title_en: "Charity scam",
    title_sr: "Prevara sa donacijama",
    summary_en: "The hook is an emotional story with a short deadline. They ask for money to a private account or crypto, often using stolen images. Escalation repeats appeals and adds \"urgent\" needs. Signal: organizer lacks verifiable details and pushes fast payment.",
    summary_sr: "Ulaz je emotivna priča uz rok \"danas\". Traže uplatu na privatni račun ili kripto, često uz ukradene slike. Eskalacija ponavlja apel i traži dodatne iznose. Signal: organizator bez proverljivih podataka uz pritisak za brzu uplatu.",
    subtitle: {
      sr: "Emocija + hitnost: donacija bez kontrole.",
      en: "Emotion + urgency: donating without verification."
    },
    hasPage: true,
    tags: ["uplate unapred"],
    overlaps: ["impersonation-scam", "advance-fee-fraud"],
    sources: []
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
    sources: []
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
    sources: []
  },

  "sextortion-scam": {
    core: false,
    title: { sr: "Ucena intimnim sadržajem", en: "Sextortion" },
    title_en: "Sextortion",
    title_sr: "Ucena intimnim sadržajem",
    summary_en: "It starts with a threat to expose private content. They ask for a crypto payment to \"delete\" it. Escalation continues after payment with new threats and new amounts. Signal: short deadlines, intimidation, and a wallet address.",
    summary_sr: "Početak je poruka sa pretnjom objave privatnog sadržaja. Traže kripto uplatu za \"brisanje\". Eskalacija ide kroz nove pretnje posle prve uplate. Signal: kratak rok, zastrašivanje i kripto adresa.",
    subtitle: {
      sr: "Pritisak sramotom → zahtev za uplatu (često kripto) → ponovljeni zahtevi.",
      en: "Shame pressure → payment demand (often crypto) → repeated demands."
    },
    hasPage: true,
    tags: ["odnos", "manipulacija"],
    overlaps: ["romantic-scam", "account-takeover", "phishing"],
    sources: []
  },

  "pyramid-scheme": {
    core: true,
    title: { sr: "Piramidalne šeme (MLM)", en: "Pyramid schemes (MLM)" },
    title_en: "Pyramid schemes (MLM)",
    title_sr: "Piramidalne šeme (MLM)",
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
    title: { sr: "Kompromitovanje poslovnog imejla (BEC)", en: "Business email compromise (BEC)" },
    title_en: "Business email compromise (BEC)",
    title_sr: "Kompromitovanje poslovnog imejla (BEC)",
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
    title: { sr: "CEO prevara", en: "CEO fraud" },
    title_en: "CEO fraud",
    title_sr: "CEO prevara",
    summary_en: "Attacker impersonates a company CEO or CFO via email and targets finance staff with an urgent, confidential transfer request designed to bypass normal approvals. Signal: executive requesting a wire by email, not reachable by phone, secrecy demanded.",
    summary_sr: "Napadač glumi direktora ili finansijskog direktora firme putem imejla i cilja zaposlene u finansijama sa hitnim tajnim zahtevom za transfer koji zaobilazi uobičajene procedure. Signal: direktor traži uplatu imejlom, nije dostupan telefonom, zahteva tajnost.",
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
    summary_en: "Attacker compromises or spoofs a supplier's email account and notifies the company of 'updated bank details'. Future payments are redirected to the attacker's account. Signal: account change request by email only, no phone confirmation, slight domain difference.",
    summary_sr: "Napadač kompromituje ili lažira imejl nalog dobavljača i obaveštava firmu o 'promeni bankovnog računa'. Sledeće uplate idu napadaču. Signal: zahtev za promenom računa samo imejlom, bez telefonske potvrde, sitna razlika u domenu.",
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
    summary_en: "Attacker sends a fake invoice or intercepts and modifies a real one so payment details point to their account. The invoice looks legitimate: correct company name, plausible amount, official appearance. Signal: unexpected invoice, new bank account, slight sender address difference.",
    summary_sr: "Napadač šalje lažnu fakturu ili presreće i menja pravu fakturu tako da podaci za uplatu vode na njihov račun. Faktura izgleda legitimno: tačno ime firme, uvjerljiv iznos, zvaničan izgled. Signal: neočekivana faktura, novi podaci za uplatu, sitna razlika u adresi pošiljaoca.",
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
    summary_en: "Attacker intercepts or fakes a payment instruction and redirects it to their account. Arrives as email, phone call, or modified document. Signal: any unsolicited request to change payment details without independent phone verification on a known number.",
    summary_sr: "Napadač presreće ili falsifikuje instrukciju za plaćanje i preusmerava je na sopstveni račun. Stiže kao imejl, poziv ili izmenjen dokument. Signal: svaki nezatražen zahtev za promenom podataka za uplatu bez nezavisne telefonske verifikacije na poznatom broju.",
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
    summary_en: "Attacker uses stolen personal data to open accounts, take out credit, and make purchases in the victim's name. Victim discovers the problem through unexpected debt notices, credit inquiries, or denied services.",
    summary_sr: "Napadač koristi ukradene lične podatke za otvaranje naloga, uzimanje kredita i kupovinu u ime žrtve. Žrtva otkriva problem kroz neočekivane obaveze o dugu, kreditne provere ili odbijene usluge.",
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
    summary_en: "Fraudsters impersonate government agencies — tax authority, police, courts, pension funds — to create fake official pressure and extract payments or personal data from victims.",
    summary_sr: "Prevaranti se lažno predstavljaju kao državni organi — poreska uprava, policija, sudovi, PIO fond — da bi stvorili lažni zvanični pritisak i izvukli uplate ili lične podatke.",
    subtitle: { sr: "Kontakt → institucija → urgentni zahtev → rok → uplata ili podaci → grananje u specifičnu prevaru.", en: "Contact → institution → urgent demand → deadline → payment or data → branching into specific scam." },
    hasPage: true,
    tags: ["institucija", "lažno predstavljanje", "phishing"],
    overlaps: ["tax-authority-impersonation", "police-impersonation", "court-impersonation", "municipality-impersonation", "fake-fine-scam", "impersonation-scam", "phishing", "vishing"],
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
    summary_en: "Callers claim to be police officers or investigators, accuse victims of crimes found on their bank accounts, and demand immediate payment or data transfer to a safe account to avoid arrest.",
    summary_sr: "Prevaranti se predstavljaju kao policajci ili istražitelji, optužuju žrtve za krivična dela navodno nađena na njihovim računima i traže hitnu uplatu ili prenos na bezbedni nalog da bi izbegli hapšenje.",
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
    summary_sr: "Prevaranti šalju emailove studentima ili roditeljima predstavljajući se kao službenici ministarstva prosvete ili fakulteta, tražeći neplaćene takse ili akreditacione naknade pod prijetnjom gubitka statusa studenta ili diplome.",
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

  "bank-impersonation": {
    core: true,
    title: { sr: "Lažna banka (bankovni prevarant)", en: "Bank impersonation scam" },
    title_en: "Bank impersonation scam",
    title_sr: "Lažna banka (bankovni prevarant)",
    summary_en: "Fraudsters call or message posing as your bank's fraud or security team, invent a threat to your account, and pressure you into transferring funds, handing over a card, or sharing OTP codes.",
    summary_sr: "Prevaranti zovu ili pišu lažno se predstavljajući kao odeljenje za bezbednost vaše banke, izmišljaju pretnju po račun i pritišću vas da prebacite novac, predate karticu ili otkrijete OTP kod.",
    subtitle: { sr: "Kontakt → banka/bezbednost → pretnja po račun → rok → transfer/OTP/kartica → grananje", en: "Contact → bank/security → account threat → deadline → transfer/OTP/card → branching" },
    hasPage: true,
    tags: ["banka", "lažno predstavljanje", "kartica"],
    overlaps: ["safe-account-scam", "courier-fraud", "otp-interception", "email-account-compromise", "card-not-present-fraud", "vishing", "impersonation-scam", "account-takeover"],
    sources: [{ name: "UK Finance — Authorised Push Payment Fraud" }, { name: "FCA — Scam warnings" }]
  },

  "safe-account-scam": {
    core: true,
    title: { sr: "Prevara sa 'bezbednim nalogom'", en: "Safe account scam" },
    title_en: "Safe account scam",
    title_sr: "Prevara sa 'bezbednim nalogom'",
    summary_en: "A fake bank or police officer tells you your account has been compromised and instructs you to move all your money to a 'safe account' they control.",
    summary_sr: "Lažni bankovni službenik ili policajac govori vam da je vaš račun kompromitovan i instruira vas da prebacite sav novac na 'bezbedni nalog' koji oni kontrolišu.",
    subtitle: { sr: "Banka/policija → kompromitovani račun → 'bezbedni nalog' → hitni transfer → novac nestaje", en: "Bank/police → compromised account → 'safe account' → urgent transfer → money gone" },
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
    title: { sr: "SIM swap (zamena SIM kartice)", en: "SIM swap fraud" },
    title_en: "SIM swap fraud",
    title_sr: "SIM swap (zamena SIM kartice)",
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
    title: { sr: "Presretanje OTP koda", en: "OTP interception" },
    title_en: "OTP interception",
    title_sr: "Presretanje OTP koda",
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
    title: { sr: "Lažni chargeback (zloupotreba povrata plaćanja)", en: "Chargeback fraud (friendly fraud)" },
    title_en: "Chargeback fraud (friendly fraud)",
    title_sr: "Lažni chargeback (zloupotreba povrata plaćanja)",
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
    summary_en: "Fraudsters send fake payment links via message or email that mimic legitimate payment pages, capturing card details or redirecting funds to their own accounts.",
    summary_sr: "Prevaranti šalju lažne linkove za plaćanje putem poruke ili imejla koji imitiraju legitimne stranice za plaćanje, prikupljaju podatke kartice ili preusmeravaju sredstva na vlastite naloge.",
    subtitle: { sr: "Kontakt → lažni link za plaćanje → unos podataka kartice → krađa podataka ili preusmeravanje sredstava", en: "Contact → fake payment link → card data entry → data theft or fund redirection" },
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
    summary_en: "Fraudsters replace legitimate QR codes on payment terminals or in public spaces with malicious ones, redirecting payments to attacker-controlled accounts.",
    summary_sr: "Prevaranti zamenjuju legitimne QR kodove na platnim terminalima ili na javnim mestima zlonamernim, preusmeravajući plaćanja na naloge pod njihovom kontrolom.",
    subtitle: { sr: "Legitimni QR → zamena zlonamernim → skeniranje → uplata na nalog prevaranta umesto prodavca", en: "Legitimate QR → replaced with malicious → scan → payment to fraudster's account instead of merchant" },
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
    overlaps: ["card-skimming", "atm-skimming", "pos-skimming", "card-not-present-fraud"],
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
    overlaps: ["atm-skimming", "pos-skimming", "contactless-card-scam", "card-not-present-fraud"],
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
    overlaps: ["card-skimming", "pos-skimming", "contactless-card-scam", "card-not-present-fraud"],
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
    overlaps: ["card-skimming", "atm-skimming", "contactless-card-scam", "card-not-present-fraud"],
    sources: [{ name: "Europol — POS Fraud" }, { name: "UK Finance — Card Fraud" }]
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
    summary_en: "A fraudster calls posing as a grandchild in urgent trouble — arrested, in hospital, in an accident — and pressures the grandparent to send cash or gift cards immediately, before telling anyone.",
    summary_sr: "Prevarant zove lažno se predstavljajući kao unuk u hitnoj situaciji — uhapšen, u bolnici, u nesreći — i pritiska baku ili dedu da pošalje gotovinu ili poklon kartice odmah, pre nego kaže ikome.",
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
    summary_en: "Fraudsters impersonate a relative in crisis — or a lawyer, police officer, or doctor acting on their behalf — to extract urgent payments while demanding the victim tell no one.",
    summary_sr: "Prevaranti se lažno predstavljaju kao rođak u krizi — ili kao advokat, policajac ili doktor koji deluje u ime njega — da bi iznudili hitne uplate uz zahtev da žrtva ne kaže nikome.",
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
    overlaps: ["advance-fee-fraud", "phishing", "fake-medical-scam"],
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
    summary_en: "A fraudulent online store takes orders and payments for goods that are never shipped, ships low-quality counterfeits, or disappears after collecting payments.",
    summary_sr: "Lažna internet prodavnica prima narudžbine i uplate za robu koja nikad ne bude isporučena, isporučuje jeftine krivotvorine ili nestaje posle prikupljanja uplata.",
    subtitle: { sr: "Lažna prodavnica → kupovina → uplata → roba ne stigne ili je krivotvorina → povrat nemoguć → gubitak", en: "Fake store → purchase → payment → goods never arrive or are counterfeit → refund impossible → loss" },
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
    summary_en: "Fraudulent sellers on Instagram, Facebook, or TikTok advertise goods at steep discounts, collect payments via bank transfer or crypto, and never ship anything.",
    summary_sr: "Lažni prodavci na Instagramu, Facebooku ili TikToku oglašavaju robu s velikim popustima, prikupljaju uplate bankovnim transferom ili kriptom i nikad ne isporučuju ništa.",
    subtitle: { sr: "Oglas na društvenoj mreži → narudžbina → uplata transferom → roba ne stigne → nestanak → gubitak", en: "Social media ad → order → transfer payment → goods never arrive → disappearance → loss" },
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
    summary_en: "Fraudsters pose as customer support and offer a refund for a fake overcharge or cancelled service, then manipulate victims into sending money back — often after overpaying via remote access.",
    summary_sr: "Prevaranti se lažno predstavljaju kao korisnička podrška i nude povrat novca za lažnu previsoku naplatu ili otkazanu uslugu, zatim manipulišu žrtvama da vrate novac — često posle preplate putem daljinskog pristupa.",
    subtitle: { sr: "Lažna podrška → preplata ili otkazana usluga → povrat novca → uplata ili daljinski pristup → prenos novca → gubitak", en: "Fake support → overcharge or cancelled service → refund offer → payment or remote access → money transfer → loss" },
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
    summary_en: "Fraudsters send fake parcel delivery notifications requesting payment of customs or redelivery fees via phishing links, collecting card details or installing malware.",
    summary_sr: "Prevaranti šalju lažne obavesti o dostavi paketa zahtevajući plaćanje carinskih ili ponovnih dostava putem phishing linkova, prikupljajući kartične podatke ili instalirajući malware.",
    subtitle: { sr: "Lažna obaveštenje o paketu → phishing link → kartični podaci ili malware → krađa podataka ili novca → gubitak", en: "Fake parcel notification → phishing link → card details or malware → data or money theft → loss" },
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
    summary_en: "Fraudsters send SMS or emails impersonating couriers and claiming a delivery failed, requesting a small redelivery fee via a phishing link to collect card data.",
    summary_sr: "Prevaranti šalju SMS ili e-poruke lažno se predstavljajući kao kuriri i tvrdeći da dostava nije uspela, zahtevajući malu naknadu za ponovnu dostavu putem phishing linka radi prikupljanja kartičnih podataka.",
    subtitle: { sr: "Lažni kurir → neuspela dostava → naknada za ponovnu dostavu → phishing link → kartični podaci → gubitak", en: "Fake courier → failed delivery → redelivery fee → phishing link → card data → loss" },
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
    title: { sr: "Prevare sa AI lažnim snimcima", en: "AI Deepfake scams" },
    title_en: "AI Deepfake scams",
    title_sr: "Prevare sa AI lažnim snimcima",
    summary_en: "It starts with a convincing voice or video of a known person. They ask for an urgent transfer, codes, or a \"discreet\" payment outside normal channels. Escalation relies on speed, secrecy, and repeated follow-ups. Signal: the request clashes with normal process and blocks verification.",
    summary_sr: "Ulaz je uverljiv glas ili video poznate osobe. Traže hitan transfer, kodove ili \"diskretnu\" uplatu mimo standardnih kanala. Eskalacija se oslanja na brzinu i tajnost uz ponovljene poruke. Signal: zahtev odskače od uobičajene procedure uz izbegavanje provere.",
    subtitle: {
      sr: "Lažni video/audio poznatih ljudi → AI kreira lice/glas → ljudi veruju jer izgleda i zvuči stvarno.",
      en: "Fake video/audio of famous people → AI creates face/voice → people believe because it looks and sounds real."
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
    summary_sr: "Pop-up ili obavjestenje imitira zvanicno azuriranje sistema ili aplikacije i navodi korisnika na preuzimanje malver paketa. Posle instalacije malver moze biti keylogger, RAT ili ransomware. Signal: obavjestenje o azuriranju koje se pojavljuje na sajtu bez veze sa softverom koji se azurira.",
    subtitle: {
      sr: "Lazno obavjestenje o azuriranju  preuzimanje fajla  malver aktivan  eksfiltracija ili ransomware.",
      en: "Fake update notification  file download  malware active  exfiltration or ransomware."
    },
    hasPage: true,
    overlaps: ["malicious-app-scam", "app-clone-scam", "browser-extension-scam", "scareware", "phishing"],
    sources: []
  },

  "browser-extension-scam": {
    core: true,
    title: { sr: "Zlonameran browser dodatak", en: "Browser extension scam" },
    title_en: "Browser extension scam",
    title_sr: "Zlonameran browser dodatak",
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

  "money-mule-recruitment": {
    core: true,
    title: { sr: "Regrutovanje finansijske mule", en: "Money mule recruitment" },
    title_en: "Money mule recruitment",
    title_sr: "Regrutovanje finansijske mule",
    summary_en: "A fake job ad recruits the victim as a payment agent to receive and forward money. The funds come from fraud or theft. The victim keeps a commission but is legally liable for money laundering. Signal: job requiring use of your own bank account for third-party money flows.",
    summary_sr: "Lazni oglas za posao regrutuje zrtvu kao agenta za placanje koji prima i prosledjuje novac. Novac potice od prevara ili kradje. Zrtva zadrzava proviziju ali je pravno odgovorna za pranje novca. Signal: posao koji trazi koristenje sopstvenog bankovnog naloga za tudji novac.",
    subtitle: {
      sr: "Lazni posao agenta za placanje  prijem novca  prosledjivanje  krivicna odgovornost.",
      en: "Fake payment agent job  receiving money  forwarding  criminal liability."
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
    summary_en: "A fake job recruits the victim as a shipping agent who receives packages of stolen goods at their home address and forwards them abroad. When police trace the packages they lead to the victim's address. Signal: job requiring home address as receiving point for business goods.",
    summary_sr: "Lazni posao regrutuje zrtvu kao shipping agenta koji prima pakete sa ukradenom robom na kucnu adresu i prosledjuje ih u inostranstvo. Kad policija prati pakete stizu do adrese zrtve. Signal: posao koji trazi kucnu adresu kao tacku prijema poslovne robe.",
    subtitle: {
      sr: "Lazni shipping agent  kucna adresa  ukradena roba  istraga dolazi do zrtve.",
      en: "Fake shipping agent  home address  stolen goods  investigation traces to victim."
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
    summary_en: "Ads promise high pay for minimal remote work. The real goal is a payment for training or equipment before work starts, collecting personal data through fake onboarding, or drawing the victim into a mule scheme. Signal: upfront payment required or banking data requested before the first working day.",
    summary_sr: "Oglasi obecavaju visoku zaradu za minimalan rad od kuce. Pravi cilj je uplata za obuku ili opremu pre pocetka rada, prikupljanje licnih podataka kroz lazni onboarding, ili uvlacenje u mule shemu. Signal: uplata unapred ili bankarski podaci pre prvog radnog dana.",
    subtitle: {
      sr: "Oglas za posao od kuce  onboarding  uplata unapred ili kradja identiteta.",
      en: "Remote work ad  onboarding  advance payment or identity theft."
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
    summary_en: "A fake recruiter contacts candidates directly offering a high-paying job that matches their profile. The real goal is collecting personal data, charging invented processing fees or drawing the victim into a mule scheme. Signal: recruiter contacts you without a prior application and everyone who applies immediately passes.",
    summary_sr: "Lazni recruiter kontaktira kandidate direktno nudeci visoko placen posao koji odgovara njihovom profilu. Pravi cilj je prikupljanje licnih podataka, naplata izmisljenih troskova obrade ili uvlacenje u mule shemu. Signal: recruiter te kontaktira bez prijave i svi odmah prolaze.",
    subtitle: {
      sr: "Lazni recruiter  ponuda posla  onboarding  troskovi ili kradja identiteta.",
      en: "Fake recruiter  job offer  onboarding  fees or identity theft."
    },
    hasPage: true,
    overlaps: ["fake-hr-scam", "work-from-home-scam", "money-mule-recruitment", "identity-theft", "job-scam"],
    sources: []
  },

  "fake-hr-scam": {
    core: true,
    title: { sr: "Lazni HR", en: "Fake HR scam" },
    title_en: "Fake HR scam",
    title_sr: "Lazni HR",
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
    summary_sr: "Obećavanje visokih garantovanih prinosa uz pritisak za brzu uplatu pre nego što ponuda istekne. Ulaganje nestaje ili platforma nestaje.",
    summary_en: "Promise of high guaranteed returns with pressure for quick payment before the offer expires. Investment disappears or platform vanishes.",
    subtitle: { sr: "Kontakt → obećanje prinosa → urgentnost → uplata → bez prinosa → nestanak ili novi zahtevi.", en: "Contact → return promise → urgency → payment → no returns → disappearance or new demands." },
    hasPage: true,
    overlaps: ["fake-broker-scam", "clone-firm-scam", "forex-scam", "binary-options-scam", "crypto-scam", "ponzi-scheme"],
    sources: []
  },

  "fake-broker-scam": {
    title: "Lažni broker",
    title_en: "Fake broker scam",
    summary_sr: "Lažna investiciona platforma prikazuje lažne profite da bi privukla veće uplate pre nestanka.",
    summary_en: "Fake investment platform shows fake profits to attract larger deposits before disappearing.",
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
    summary_sr: "Napadač stiče pristup nalogu i koristi ga za prevare prema pratiocima — lažne ponude, giveaways ili zahteve za novac.",
    summary_en: "Attacker gains access to an account and uses it to scam followers — fake offers, giveaways or money requests.",
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
    title: "Prevara sa AI klonom glasa",
    title_en: "AI voice clone scam",
    summary_sr: "Napadač koristi veštačku inteligenciju za kloniranje glasa poznate osobe i upućuje hitni poziv za novac ili podatke.",
    summary_en: "Attacker uses artificial intelligence to clone the voice of a known person and makes an urgent call requesting money or data.",
    subtitle: { sr: "Prikupljanje glasovnih uzoraka → AI kloniranje → lažni poziv → hitni zahtev → uplata.", en: "Voice sample collection → AI cloning → fake call → urgent request → payment." },
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
    overlaps: ["moving-scam", "deposit-scam", "advance-fee-fraud", "escrow-scam", "real-estate-purchase-scam"],
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
  }
};