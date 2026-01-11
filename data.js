// data.js
// Central registry for all scam pages (single source of truth).
// render.js reads: title, subtitle, hasPage, overlaps (and ignores extra fields safely).
// title/subtitle support bilingual objects: { sr, en }.

window.SCAM_DB = {
  "romantic-scam": {
    core: true,
    title: { sr: "Romantične prevare", en: "Romance scams" },
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
    title: { sr: "Crypto investment scam", en: "Crypto investment scam" },
    subtitle: {
      sr: "Profit kao mamac → lažna platforma → rast uloga → blokada povlačenja → takse kao uslov.",
      en: "Profit bait → fake platform → increasing stakes → withdrawals blocked → fees as a condition."
    },
    hasPage: true,
    tags: ["investicije"],
    overlaps: ["fake-call-scam", "phishing", "pig-butchering", "advance-fee-fraud", "recovery-scam"],
    sources: [
      { name: "FTC – Investment Scams" },
      { name: "FBI IC3 – Cryptocurrency Scams" }
    ]
  },

  "fake-call-scam": {
    core: true,
    title: { sr: "Lažni pozivi", en: "Fake calls" },
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
    title: { sr: "Marketplace prevare", en: "Marketplace scams" },
    subtitle: {
      sr: "Kupoprodaja preko oglasa → uplata unapred ili lažni link za “dostavu/plaćanje”.",
      en: "Buying/selling via listings → upfront payment or fake “delivery/payment” link."
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
    title: { sr: "Phishing", en: "Phishing" },
    subtitle: {
      sr: "Link ili forma: cilj su lozinke, kartice, kodovi i pristup nalozima.",
      en: "Link or form: the goal is passwords, cards, codes, and account access."
    },
    hasPage: true, // <-- BITNO: sada postoji phishing.html
    tags: ["krađa podataka"],
    overlaps: ["smishing", "account-takeover", "crypto-scam", "marketplace-scam", "fake-delivery"],
    sources: []
  },

  "smishing": {
    core: true,
    title: { sr: "Smishing", en: "Smishing" },
    subtitle: {
      sr: "SMS poruke sa linkom → krađa podataka ili kartice.",
      en: "SMS with a link → stealing data or card details."
    },
    hasPage: true,
    tags: ["krađa podataka"],
    overlaps: ["phishing", "fake-delivery", "marketplace-scam"],
    sources: []
  },

  "vishing": {
    core: true,
    title: { sr: "Vishing", en: "Vishing" },
    subtitle: {
      sr: "Poziv kao napad: autoritet + hitnost + izvlačenje kodova, lozinki ili uplata.",
      en: "Calls as an attack: authority + urgency + extracting codes, passwords, or payments."
    },
    hasPage: false,
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
    subtitle: {
      sr: "Krađa koda ili lozinke → kontrola naloga, promene podataka, preusmeravanje uplata.",
      en: "Stealing code/password → account control, data changes, payment redirection."
    },
    hasPage: false,
    tags: ["krađa podataka"],
    overlaps: ["phishing", "fake-call-scam", "impersonation-scam"],
    sources: []
  },

  "tech-support-scam": {
    core: true,
    title: { sr: "Tech support prevara", en: "Tech support scam" },
    subtitle: {
      sr: "Lažna podrška → remote pristup ili ‘čišćenje virusa’ → naplata i krađa.",
      en: "Fake support → remote access or “virus cleanup” → fees and theft."
    },
    hasPage: false,
    tags: ["autoritet"],
    overlaps: ["scareware", "fake-call-scam", "phishing"],
    sources: []
  },

  "scareware": {
    core: true,
    title: { sr: "Scareware", en: "Scareware" },
    subtitle: {
      sr: "Lažno upozorenje o virusu → panika → ‘hitna’ podrška ili instalacija.",
      en: "Fake virus warning → panic → “urgent” support or installation."
    },
    hasPage: false,
    overlaps: ["tech-support-scam", "phishing"],
    sources: []
  },

  "advance-fee-fraud": {
    core: true,
    title: { sr: "Advance-fee fraud", en: "Advance-fee fraud" },
    subtitle: {
      sr: "Uplata unapred kao uslov: ‘taksa’ pre ‘isplate’ ili ‘oslobađanja sredstava’.",
      en: "Upfront payment as a condition: “fee” before “payout” or “release of funds”."
    },
    hasPage: true,
    tags: ["uplate unapred"],
    overlaps: ["crypto-scam", "marketplace-scam", "rental-scam", "loan-scam", "recovery-scam"],
    sources: []
  },

  "pig-butchering": {
    core: true,
    title: { sr: "Pig butchering", en: "Pig butchering" },
    subtitle: {
      sr: "Dug odnos + investicija: prvo poverenje, zatim ulog, pa blokada izlaza.",
      en: "Long relationship + investment: trust first, then deposits, then exit is blocked."
    },
    hasPage: true,
    tags: ["odnos", "investicije"],
    overlaps: ["romantic-scam", "crypto-scam", "advance-fee-fraud", "recovery-scam"],
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
    title: { sr: "Recovery scam", en: "Recovery scam" },
    subtitle: {
      sr: "‘Povraćaj’ kao mamac: nova naknada da bi se ‘vratio’ izgubljen novac.",
      en: "“Recovery” as bait: a new fee to supposedly get lost money back."
    },
    hasPage: true,
    tags: ["uplate unapred"],
    overlaps: ["advance-fee-fraud", "crypto-scam"],
    sources: []
  },

  "impersonation-scam": {
    core: true,
    title: { sr: "Lažno predstavljanje (impersonation)", en: "Impersonation scam" },
    subtitle: {
      sr: "Banka/policija/firma/rođak: autoritet + hitnost + zahtev za kodovima ili uplatom.",
      en: "Bank/police/company/relative: authority + urgency + request for codes or payment."
    },
    hasPage: false,
    tags: ["autoritet"],
    overlaps: ["fake-call-scam", "phishing", "account-takeover"],
    sources: []
  },

  "job-scam": {
    core: true,
    title: { sr: "Job scam", en: "Job scam" },
    subtitle: {
      sr: "Ponuda posla: dokumenta, ‘obuka’, naknade, preusmeravanja i krađa identiteta.",
      en: "Job offer: documents, “training”, fees, redirections, and identity theft."
    },
    hasPage: false,
    overlaps: ["advance-fee-fraud", "phishing", "impersonation-scam"],
    sources: []
  },

  "investment-seminar": {
    title: { sr: "Lažni investicioni ‘mentor’", en: "Fake investment “mentor”" },
    subtitle: {
      sr: "Mentorstvo kao fasada: guranje na platforme i veće uloge.",
      en: "Mentorship as a front: pushing platforms and larger deposits."
    },
    hasPage: false,
    tags: ["investicije"],
    overlaps: ["crypto-scam", "fake-call-scam", "advance-fee-fraud"],
    sources: []
  },

  "fake-delivery": {
    core: true,
    title: { sr: "Lažna dostava / kurir", en: "Fake delivery / courier" },
    subtitle: {
      sr: "‘Dostava’ i ‘carina’ kao izgovor: link, forma, kodovi, preusmeravanje uplata.",
      en: "“Delivery” and “customs” as pretext: link, form, codes, payment redirection."
    },
    hasPage: false,
    tags: ["krađa podataka"],
    overlaps: ["smishing", "phishing", "marketplace-scam"],
    sources: []
  },

  "rental-scam": {
    core: true,
    title: { sr: "Rent / booking prevara", en: "Rental / booking scam" },
    subtitle: {
      sr: "Depozit unapred za nešto što ne postoji ili nije dostupno.",
      en: "Upfront deposit for something that doesn’t exist or isn’t available."
    },
    hasPage: false,
    tags: ["oglasi", "uplate unapred"],
    overlaps: ["advance-fee-fraud", "marketplace-scam"],
    sources: []
  },

  "charity-scam": {
    title: { sr: "Charity scam", en: "Charity scam" },
    subtitle: {
      sr: "Emocija + hitnost: donacija bez kontrole.",
      en: "Emotion + urgency: donating without verification."
    },
    hasPage: false,
    tags: ["uplate unapred"],
    overlaps: ["impersonation-scam", "advance-fee-fraud"],
    sources: []
  },

  "giveaway-scam": {
    core: true,
    title: { sr: "Giveaway / nagradna igra", en: "Giveaway scam" },
    subtitle: {
      sr: "‘Nagrada’ kao udica: taksa ili link koji krade podatke.",
      en: "“Prize” as bait: a fee or a link that steals data."
    },
    hasPage: false,
    tags: ["uplate unapred"],
    overlaps: ["advance-fee-fraud", "phishing", "fake-delivery"],
    sources: []
  },

  "loan-scam": {
    core: true,
    title: { sr: "Loan scam", en: "Loan scam" },
    subtitle: {
      sr: "Brz kredit, ali prvo ‘trošak obrade’, ‘osiguranje’ ili ‘verifikacija’.",
      en: "Fast loan, but first a “processing fee”, “insurance”, or “verification”."
    },
    hasPage: false,
    tags: ["investicije", "uplate unapred"],
    overlaps: ["advance-fee-fraud", "phishing"],
    sources: []
  },

  "sextortion-scam": {
    core: false,
    title: { sr: "Sextortion", en: "Sextortion" },
    subtitle: {
      sr: "Pritisak sramotom → zahtev za uplatu (često kripto) → ponovljeni zahtevi.",
      en: "Shame pressure → payment demand (often crypto) → repeated demands."
    },
    hasPage: false,
    tags: ["odnos", "manipulacija"],
    overlaps: ["romantic-scam", "account-takeover", "phishing"],
    sources: []
  }
};
