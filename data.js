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
    hasPage: true,
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
  }
};
