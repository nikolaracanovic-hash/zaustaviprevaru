// cases.js
// Case library: real-world style primeri po prevari.
// render.js ih prikazuje u <div data-cases></div> na stranici prevare.
// Pravilo: bez ličnih podataka (brojevi, adrese, IBAN, pravi linkovi).
// Fokus: tok, okidač, prag, evolucija (grananje).

window.SCAM_CASES = [
  /* =========================================================
     ROMANTIC-SCAM (6+)
  ========================================================= */
  {
    id: "rs-001",
    scam: "romantic-scam",
    title: "IG → privatni chat → rok → prvi zahtev",
    date: "2026-01-07",
    stage_hint: "r4",
    summary: ["Privatan kanal", "Rok u prvoj ozbiljnoj poruci", "Zahtev deluje kao sitna formalnost"],
    artifacts: [{ type: "note", label: "Prag", value: "Prva uplata kao 'sitnica'." }],
    transcript: [
      { side: "them", text: "Lakše mi je privatno, ovde je gužva." },
      { side: "me", text: "Može, ali voleo bih video poziv kratko." },
      { side: "them", text: "Sutra. Danas imam hitan problem, treba mi mala pomoć." },
      { side: "me", text: "Koji problem?" },
      { side: "them", text: "Rok je večeras, samo jedna taksa." }
    ]
  },
  {
    id: "rs-002",
    scam: "romantic-scam",
    title: "Romansa → 'tajnost' → izolacija",
    date: "2026-01-08",
    stage_hint: "r3",
    summary: ["Tajnost kao test", "Okolina predstavljena kao prepreka", "Pitanja o finansijama kroz 'upoznavanje'"],
    artifacts: [{ type: "note", label: "Signal", value: "Tajnost gura bezbednosne rupe." }],
    transcript: [
      { side: "them", text: "Ovo je između nas, ljudi bi to pokvarili." },
      { side: "me", text: "Zašto bi bilo problem da neko zna?" },
      { side: "them", text: "Zavidni su. Reci mi samo kako stojiš sa poslom i obavezama." }
    ]
  },
  {
    id: "rs-003",
    scam: "romantic-scam",
    title: "Video poziv se stalno odlaže → 'kamera problem'",
    date: "2026-01-09",
    stage_hint: "r2",
    summary: ["Ritam poruka stabilan", "Dokazi se odlažu", "Uvek novi izgovor za video"],
    artifacts: [{ type: "note", label: "Okidač", value: "Traženje dokaza → minimalni dokaz umesto realnog." }],
    transcript: [
      { side: "me", text: "Ajmo video poziv 2 minuta." },
      { side: "them", text: "Sad sam na putu… sutra. Kamera mi pravi problem." },
      { side: "me", text: "Može glas?" },
      { side: "them", text: "Može, ali kratko, gužva." }
    ]
  },
  {
    id: "rs-004",
    scam: "romantic-scam",
    title: "Rok + 'paket na carini' → taksa",
    date: "2026-01-10",
    stage_hint: "r4",
    summary: ["Priča o paketu", "Carina kao prepreka", "Uplata kao uslov"],
    artifacts: [{ type: "note", label: "Evolucija", value: "Romance → advance-fee." }],
    transcript: [
      { side: "them", text: "Poslao sam ti paket, stoji na carini." },
      { side: "me", text: "Kako to rešavaš?" },
      { side: "them", text: "Samo taksa danas, posle stiže." }
    ]
  },
  {
    id: "rs-005",
    scam: "romantic-scam",
    title: "Romansa → 'zajednički plan' → investicija",
    date: "2026-01-11",
    stage_hint: "r8",
    summary: ["Emocija postane garancija", "Ulaganje kao racionalni korak", "Mentorstvo i koraci"],
    artifacts: [{ type: "note", label: "Evolucija", value: "Romance → crypto / pig-butchering." }],
    transcript: [
      { side: "them", text: "Hoću da gradimo zajedno, imam plan koji radi." },
      { side: "me", text: "Kakav plan?" },
      { side: "them", text: "Platforma, stabilan profit. Kreni sa malim iznosom." }
    ]
  },
  {
    id: "rs-006",
    scam: "romantic-scam",
    title: "Ucenjivački ton posle odbijanja",
    date: "2026-01-12",
    stage_hint: "r7",
    summary: ["Ton se menja", "Krivica", "Rok i posledice"],
    artifacts: [{ type: "note", label: "Signal", value: "Sumnja postane moralni konflikt." }],
    transcript: [
      { side: "me", text: "Ovo mi deluje čudno, stop." },
      { side: "them", text: "Posle svega? Sad mi to radiš?" },
      { side: "them", text: "Ako sad staneš, sve propada." }
    ]
  },

  /* =========================================================
     MARKETPLACE-SCAM (6+)
  ========================================================= */
  {
    id: "mp-001",
    scam: "marketplace-scam",
    title: "‘Kupac’ link za kurira → forma traži karticu",
    date: "2026-01-07",
    stage_hint: "m2",
    summary: ["Žurba", "Link liči na dostavu", "Forma traži karticu/OTP"],
    artifacts: [{ type: "note", label: "Prag", value: "Unos kartice ili OTP." }],
    transcript: [
      { side: "them", text: "Kurir je spreman, evo link za potvrdu." },
      { side: "me", text: "Traži karticu." },
      { side: "them", text: "Standardno, samo potvrda." }
    ]
  },
  {
    id: "mp-002",
    scam: "marketplace-scam",
    title: "Lažni dokaz uplate → 'pending' → novi trošak",
    date: "2026-01-08",
    stage_hint: "m3",
    summary: ["Screenshot uplate", "Izgovor pending", "Novi fee kao uslov"],
    artifacts: [{ type: "note", label: "Evolucija", value: "Marketplace → advance-fee / fake-call." }],
    transcript: [
      { side: "them", text: "Evo potvrda uplate, samo pošalji." },
      { side: "me", text: "Priliv se ne vidi." },
      { side: "them", text: "Pending je, sistem. Plati mali fee da pusti." }
    ]
  },
  {
    id: "mp-003",
    scam: "marketplace-scam",
    title: "Kapara za rezervaciju → serija ‘troškova’",
    date: "2026-01-09",
    stage_hint: "m4",
    summary: ["Kapara kao prag", "Posle toga osiguranje", "Rokovi se skraćuju"],
    artifacts: [{ type: "note", label: "Evolucija", value: "Marketplace → advance-fee." }],
    transcript: [
      { side: "them", text: "Držim ti do večeras, samo kapara." },
      { side: "me", text: "Ok, koliko?" },
      { side: "them", text: "Posle toga ide osiguranje dostave." }
    ]
  },
  {
    id: "mp-004",
    scam: "marketplace-scam",
    title: "Prebacivanje na Viber → linkovi i pritisak",
    date: "2026-01-10",
    stage_hint: "m1",
    summary: ["Off-platform", "Gubi se zaštita", "Lakše ubacivanje linka"],
    artifacts: [{ type: "note", label: "Signal", value: "Privatan kanal + hitnost." }],
    transcript: [
      { side: "them", text: "Piši na Viber, ovde mi baguje." },
      { side: "me", text: "Zašto?" },
      { side: "them", text: "Brže je. Evo ti link za uplatu." }
    ]
  },
  {
    id: "mp-005",
    scam: "marketplace-scam",
    title: "Posle štete stiže ‘refund pomoć’",
    date: "2026-01-11",
    stage_hint: "m5",
    summary: ["Recovery ulaz", "Admin fee", "Novo presvlačenje identiteta"],
    artifacts: [{ type: "note", label: "Evolucija", value: "Marketplace → recovery." }],
    transcript: [
      { side: "them", text: "Podrška: možemo refundirati, treba admin fee." },
      { side: "me", text: "Zašto plaćam refund?" },
      { side: "them", text: "Procedura, rok danas." }
    ]
  },
  {
    id: "mp-006",
    scam: "marketplace-scam",
    title: "Link vodi na ‘dostava nije uspela’ SMS",
    date: "2026-01-12",
    stage_hint: "m2",
    summary: ["Chat → SMS nastavak", "Kratak link", "Forma za karticu"],
    artifacts: [{ type: "note", label: "Evolucija", value: "Marketplace → smishing." }],
    transcript: [
      { side: "them", text: "Samo potvrdi dostavu, stiže SMS." },
      { side: "me", text: "Stigao SMS sa linkom." },
      { side: "them", text: "Klikni i završi, kurir čeka." }
    ]
  },

  /* =========================================================
     PHISHING (6+)
  ========================================================= */
  {
    id: "ph-001",
    scam: "phishing",
    title: "Email ‘nalog suspendovan’ → lažni login",
    date: "2026-01-07",
    stage_hint: "p1",
    summary: ["Autoritet + hitnost", "Link ka login formi", "Posle unosa kreću resetovi"],
    artifacts: [{ type: "note", label: "Prag", value: "Unos kredencijala." }],
    transcript: [
      { side: "them", text: "Nalog suspendovan. Potvrdi u roku 30 min." },
      { side: "me", text: "Link traži login." },
      { side: "them", text: "Verifikacija identiteta." }
    ]
  },
  {
    id: "ph-002",
    scam: "phishing",
    title: "‘Faktura’ → portal → OTP",
    date: "2026-01-08",
    stage_hint: "p2",
    summary: ["Poslovni kontekst", "Portal traži prijavu", "Zatim kod/OTP"],
    artifacts: [{ type: "note", label: "Evolucija", value: "Phishing → takeover." }],
    transcript: [
      { side: "them", text: "Nova faktura, otvori dokument." },
      { side: "me", text: "Traži prijavu." },
      { side: "them", text: "Samo potvrdi kod iz aplikacije." }
    ]
  },
  {
    id: "ph-003",
    scam: "phishing",
    title: "‘Dostava’ email → ‘mali fee’ → kartica",
    date: "2026-01-09",
    stage_hint: "p3",
    summary: ["Mala doplata", "Kartica + CVV", "Novi fee posle prve naplate"],
    artifacts: [{ type: "note", label: "Evolucija", value: "Phishing → advance-fee." }],
    transcript: [
      { side: "them", text: "Pošiljka zahteva doplatu, klik link." },
      { side: "me", text: "Traži karticu." },
      { side: "them", text: "Posle toga ide potvrda, brzo." }
    ]
  },
  {
    id: "ph-004",
    scam: "phishing",
    title: "‘Security alert’ → poziv podrške",
    date: "2026-01-10",
    stage_hint: "p2",
    summary: ["Klik → potom poziv", "Vođenje uživo", "Traženje kodova"],
    artifacts: [{ type: "note", label: "Evolucija", value: "Phishing → fake-call." }],
    transcript: [
      { side: "them", text: "Bezbednosni incident, kliknite link." },
      { side: "me", text: "Kliknuo sam." },
      { side: "them", text: "Zovem iz podrške, vodim vas kroz korake." }
    ]
  },
  {
    id: "ph-005",
    scam: "phishing",
    title: "Phishing → preuzimanje mrežnog naloga → poruke prijateljima",
    date: "2026-01-11",
    stage_hint: "p1",
    summary: ["Login ukraden", "Nalog koristi se za nove mete", "Traži hitnu pomoć od kontakata"],
    artifacts: [{ type: "note", label: "Signal", value: "Poruke kontaktima kao širenje." }],
    transcript: [
      { side: "me", text: "Drug mi šalje: ‘hitno mi treba pomoć’." },
      { side: "them", text: "Pošalji brzo, vraćam sutra." },
      { side: "me", text: "Nalog deluje preuzet." }
    ]
  },
  {
    id: "ph-006",
    scam: "phishing",
    title: "‘KYC update’ → dokumenta + ‘fee’",
    date: "2026-01-12",
    stage_hint: "p3",
    summary: ["Forma traži dokumenta", "Zatim fee", "Serija zahteva"],
    artifacts: [{ type: "note", label: "Evolucija", value: "Phishing → advance-fee / recovery." }],
    transcript: [
      { side: "them", text: "KYC update je obavezan, upload dokumenta." },
      { side: "me", text: "Sad traži uplatu." },
      { side: "them", text: "Procedura, rok danas." }
    ]
  },

  /* =========================================================
     SMISHING (6+)
  ========================================================= */
  {
    id: "sm-001",
    scam: "smishing",
    title: "SMS ‘pošiljka zadržana’ → kartica",
    date: "2026-01-07",
    stage_hint: "s1",
    summary: ["Kratko + hitno", "Tema dostave", "Kartica u formi"],
    artifacts: [{ type: "note", label: "Prag", value: "Unos kartice/OTP." }],
    transcript: [
      { side: "them", text: "Pošiljka zadržana. Potvrdi: [link]" },
      { side: "me", text: "Traži karticu i CVV." }
    ]
  },
  {
    id: "sm-002",
    scam: "smishing",
    title: "SMS → klik → poziv podrške",
    date: "2026-01-08",
    stage_hint: "s2",
    summary: ["Klik aktivira poziv", "Vođenje uživo", "Traži kod"],
    artifacts: [{ type: "note", label: "Evolucija", value: "Smishing → fake-call." }],
    transcript: [
      { side: "them", text: "Nalog zahteva potvrdu: [link]" },
      { side: "me", text: "Kliknuo sam." },
      { side: "them", text: "Pozdrav, vodim vas kroz verifikaciju." }
    ]
  },
  {
    id: "sm-003",
    scam: "smishing",
    title: "SMS ‘kazna’ → rok danas",
    date: "2026-01-09",
    stage_hint: "s1",
    summary: ["Tema kazne", "Rok", "Link ka uplati"],
    artifacts: [{ type: "note", label: "Signal", value: "Kazna + rok = pritisak." }],
    transcript: [
      { side: "them", text: "Kazna dospela. Rok danas. Uplati: [link]" },
      { side: "me", text: "Link vodi na formu." }
    ]
  },
  {
    id: "sm-004",
    scam: "smishing",
    title: "SMS ‘banka’ → OTP kao ‘blokada’",
    date: "2026-01-10",
    stage_hint: "s3",
    summary: ["Autoritet banke", "OTP tražen", "Takeover rizik"],
    artifacts: [{ type: "note", label: "Evolucija", value: "Smishing → account takeover." }],
    transcript: [
      { side: "them", text: "Sumnjiva transakcija. Potvrdi kod da blokiramo." },
      { side: "me", text: "To je OTP." }
    ]
  },
  {
    id: "sm-005",
    scam: "smishing",
    title: "SMS ‘pretplata ističe’ → login forma",
    date: "2026-01-11",
    stage_hint: "s1",
    summary: ["Pretplata/servis", "Link", "Login forma"],
    artifacts: [{ type: "note", label: "Signal", value: "Kratak link + login na telefonu." }],
    transcript: [
      { side: "them", text: "Pretplata ističe danas. Potvrdi nalog: [link]" },
      { side: "me", text: "Traži email i lozinku." }
    ]
  },
  {
    id: "sm-006",
    scam: "smishing",
    title: "Posle naplate stiže ‘refund’ poruka",
    date: "2026-01-12",
    stage_hint: "s4",
    summary: ["Gubitak", "Odmah recovery kontakt", "Admin fee"],
    artifacts: [{ type: "note", label: "Evolucija", value: "Smishing → recovery." }],
    transcript: [
      { side: "them", text: "Refund je moguć. Potreban admin fee: [link]" },
      { side: "me", text: "Refund traži uplatu?" }
    ]
  },

  /* =========================================================
     FAKE-CALL-SCAM (6)
  ========================================================= */
  {
    id: "fc-001",
    scam: "fake-call-scam",
    title: "Poziv ‘banka’ → OTP",
    date: "2026-01-07",
    stage_hint: "fc2",
    summary: ["Incident narativ", "Zabrana prekida", "OTP kao ‘zaštita’"],
    artifacts: [{ type: "note", label: "Prag", value: "OTP / potvrda u aplikaciji." }],
    transcript: [
      { side: "them", text: "Zovemo iz bezbednosti banke, sumnjiva transakcija." },
      { side: "them", text: "Stiže kod, pročitajte da blokiramo." },
      { side: "me", text: "To je OTP." }
    ]
  },
  {
    id: "fc-002",
    scam: "fake-call-scam",
    title: "Poziv ‘policija’ → tajnost → ‘siguran račun’",
    date: "2026-01-08",
    stage_hint: "fc4",
    summary: ["Istraga kao okvir", "Tajnost", "Transfer na ‘siguran račun’"],
    artifacts: [{ type: "note", label: "Evolucija", value: "Fake-call → advance-fee / recovery." }],
    transcript: [
      { side: "them", text: "U istrazi ste, ovo je poverljivo." },
      { side: "them", text: "Sredstva prebacite na siguran račun da ih zaštitimo." },
      { side: "me", text: "Zašto bih prebacivao svoj novac?" }
    ]
  },
  {
    id: "fc-003",
    scam: "fake-call-scam",
    title: "Poziv ‘kurir’ → doplata → link",
    date: "2026-01-09",
    stage_hint: "fc4",
    summary: ["Kurir priča", "Mali fee", "Link ka formi"],
    artifacts: [{ type: "note", label: "Evolucija", value: "Fake-call → smishing/phishing." }],
    transcript: [
      { side: "them", text: "Paket stoji, treba doplata, šaljem link." },
      { side: "me", text: "Zašto doplata ide preko linka?" }
    ]
  },
  {
    id: "fc-004",
    scam: "fake-call-scam",
    title: "AnyDesk ‘brza pomoć’",
    date: "2026-01-10",
    stage_hint: "fc3",
    summary: ["Remote alat", "Kontrola uređaja", "Vođenje kroz aplikacije"],
    artifacts: [{ type: "note", label: "Signal", value: "Remote u finansijskom toku." }],
    transcript: [
      { side: "them", text: "Instaliraj AnyDesk, rešavamo odmah." },
      { side: "me", text: "Traži dozvole i kod." }
    ]
  },
  {
    id: "fc-005",
    scam: "fake-call-scam",
    title: "Poziv posle phishing klika",
    date: "2026-01-11",
    stage_hint: "fc1",
    summary: ["Klik", "Posle toga poziv", "Vođenje i pritisak"],
    artifacts: [{ type: "note", label: "Evolucija", value: "Phishing → fake-call." }],
    transcript: [
      { side: "me", text: "Kliknuo sam link iz maila." },
      { side: "them", text: "Zovem iz podrške, ostanite na liniji." },
      { side: "them", text: "Sada potvrdite korak u aplikaciji." }
    ]
  },
  {
    id: "fc-006",
    scam: "fake-call-scam",
    title: "Posle incidenta stiže ‘recovery stručnjak’",
    date: "2026-01-12",
    stage_hint: "fc5",
    summary: ["Gubitak", "Novi identitet", "Upfront fee"],
    artifacts: [{ type: "note", label: "Evolucija", value: "Fake-call → recovery." }],
    transcript: [
      { side: "them", text: "Možemo vratiti sredstva, treba start fee." },
      { side: "me", text: "Zašto fee za povrat?" }
    ]
  },

  /* =========================================================
     ADVANCE-FEE-FRAUD (6)
  ========================================================= */
  {
    id: "af-001",
    scam: "advance-fee-fraud",
    title: "Oslobađanje sredstava → taksa → nova taksa",
    date: "2026-01-07",
    stage_hint: "af1",
    summary: ["Uplata kao uslov", "Novi uslov posle uplate", "Final step se ponavlja"],
    artifacts: [{ type: "note", label: "Signal", value: "Razlog se menja, funkcija ostaje." }],
    transcript: [
      { side: "them", text: "Sredstva čekaju, treba mala taksa." },
      { side: "me", text: "Uplatio sam." },
      { side: "them", text: "Sad treba depozit radi verifikacije." }
    ]
  },
  {
    id: "af-002",
    scam: "advance-fee-fraud",
    title: "Kredit ‘odobren’ → obrada → osiguranje",
    date: "2026-01-08",
    stage_hint: "af1",
    summary: ["Odobrenje kao mamac", "Obrada kao prag", "Osiguranje kao sledeći fee"],
    artifacts: [{ type: "note", label: "Evolucija", value: "Advance-fee → recovery." }],
    transcript: [
      { side: "them", text: "Odobreno, samo obrada danas." },
      { side: "me", text: "Posle toga isplata?" },
      { side: "them", text: "Još osiguranje, standardno." }
    ]
  },
  {
    id: "af-003",
    scam: "advance-fee-fraud",
    title: "Nagrada → porez → kurir",
    date: "2026-01-09",
    stage_hint: "af1",
    summary: ["Nagrada kao okvir", "Porez kao uslov", "Kurir fee posle toga"],
    artifacts: [{ type: "note", label: "Signal", value: "Sledeća taksa se pojavi čim prva prođe." }],
    transcript: [
      { side: "them", text: "Osvojili ste nagradu, porez je potreban danas." },
      { side: "me", text: "Uplata gde?" },
      { side: "them", text: "Posle toga kurir i osiguranje." }
    ]
  },
  {
    id: "af-004",
    scam: "advance-fee-fraud",
    title: "Crypto withdrawal fee → ‘unlock’",
    date: "2026-01-10",
    stage_hint: "af2",
    summary: ["Povlačenje traži fee", "Posle fee novi fee", "Rokovi se skraćuju"],
    artifacts: [{ type: "note", label: "Evolucija", value: "Crypto → advance-fee." }],
    transcript: [
      { side: "me", text: "Hoću da povučem." },
      { side: "them", text: "AML fee je potreban, posle unlock." },
      { side: "me", text: "Zašto plaćam povlačenje?" }
    ]
  },
  {
    id: "af-005",
    scam: "advance-fee-fraud",
    title: "Posle odbijanja stiže poziv pritiska",
    date: "2026-01-11",
    stage_hint: "af2",
    summary: ["Usporavanje", "Poziv uživo", "Pretnje posledicama"],
    artifacts: [{ type: "note", label: "Evolucija", value: "Advance-fee → fake-call." }],
    transcript: [
      { side: "them", text: "Zovem iz podrške, rok ističe danas." },
      { side: "them", text: "Ako stopirate, sredstva se zamrzavaju." },
      { side: "me", text: "Zvuči kao pritisak." }
    ]
  },
  {
    id: "af-006",
    scam: "advance-fee-fraud",
    title: "‘Refund fee’ posle gubitka",
    date: "2026-01-12",
    stage_hint: "af1",
    summary: ["Gubitak", "Refund narativ", "Uplata unapred"],
    artifacts: [{ type: "note", label: "Evolucija", value: "Advance-fee → recovery." }],
    transcript: [
      { side: "them", text: "Refund je moguć, treba admin fee." },
      { side: "me", text: "Refund traži uplatu?" }
    ]
  },

  /* =========================================================
     CRYPTO-SCAM (6)
  ========================================================= */
  {
    id: "cr-001",
    scam: "crypto-scam",
    title: "Mali depozit → profit na ekranu → veći depozit",
    date: "2026-01-07",
    stage_hint: "c2",
    summary: ["Rani ‘profit’", "Ritam poruka", "Pritisak ka većem iznosu"],
    artifacts: [{ type: "note", label: "Signal", value: "Koraci umesto provere infrastrukture." }],
    transcript: [
      { side: "them", text: "Kreni sa malim iznosom, samo da vidiš." },
      { side: "me", text: "Vidim rast." },
      { side: "them", text: "Odlično, sad VIP nivo i veći limit." }
    ]
  },
  {
    id: "cr-002",
    scam: "crypto-scam",
    title: "Povlačenje → ‘AML fee’ → ‘unlock’",
    date: "2026-01-08",
    stage_hint: "c5",
    summary: ["Withdrawal lock", "Fee kao uslov", "Final step se ponavlja"],
    artifacts: [{ type: "note", label: "Evolucija", value: "Crypto → advance-fee." }],
    transcript: [
      { side: "me", text: "Hoću povlačenje." },
      { side: "them", text: "AML fee je obavezan, posle unlock." },
      { side: "me", text: "Zašto fee za povlačenje?" }
    ]
  },
  {
    id: "cr-003",
    scam: "crypto-scam",
    title: "Support traži AnyDesk da ‘reši blokadu’",
    date: "2026-01-09",
    stage_hint: "c5",
    summary: ["Remote alat", "Vođenje uživo", "Tempo pod kontrolom"],
    artifacts: [{ type: "note", label: "Signal", value: "Remote u finansijskom toku." }],
    transcript: [
      { side: "them", text: "Instaliraj AnyDesk, rešavamo blokadu odmah." },
      { side: "me", text: "Traži dozvole i kod." }
    ]
  },
  {
    id: "cr-004",
    scam: "crypto-scam",
    title: "Romansa → investicija → prva uplata",
    date: "2026-01-10",
    stage_hint: "c1",
    summary: ["Odnos kao garancija", "Mentorstvo", "Mali test depozit"],
    artifacts: [{ type: "note", label: "Evolucija", value: "Romance → crypto." }],
    transcript: [
      { side: "them", text: "Ovo je prilika, probaj sa malim iznosom." },
      { side: "me", text: "Zašto baš kripto?" },
      { side: "them", text: "Profit je stabilan, samo prati korake." }
    ]
  },
  {
    id: "cr-005",
    scam: "crypto-scam",
    title: "Poziv posle povlačenja: ‘rešavamo odmah’",
    date: "2026-01-11",
    stage_hint: "c5",
    summary: ["Poziv", "Pritisak", "Uplata kao ‘procedura’"],
    artifacts: [{ type: "note", label: "Evolucija", value: "Crypto → fake-call → advance-fee." }],
    transcript: [
      { side: "them", text: "Zovem iz podrške, rešavamo povlačenje sad." },
      { side: "them", text: "Treba mala uplata da pusti sistem." },
      { side: "me", text: "To je fee za povlačenje." }
    ]
  },
  {
    id: "cr-006",
    scam: "crypto-scam",
    title: "Posle prekida stiže ‘recovery agent’",
    date: "2026-01-12",
    stage_hint: "c7",
    summary: ["Gubitak", "Novi identitet", "Upfront fee"],
    artifacts: [{ type: "note", label: "Evolucija", value: "Crypto → recovery." }],
    transcript: [
      { side: "them", text: "Možemo vratiti sredstva, start fee danas." },
      { side: "me", text: "Zašto fee za povrat?" }
    ]
  },

  /* =========================================================
     PIG-BUTCHERING (6)
  ========================================================= */
  {
    id: "pb-001",
    scam: "pig-butchering",
    title: "‘Pogrešan broj’ → privatni kanal → stabilan ritam",
    date: "2026-01-07",
    stage_hint: "pb1",
    summary: ["Slučajan ulaz", "Brz prelaz na privatni kanal", "Ritam poruka kao navika"],
    artifacts: [{ type: "note", label: "Prag", value: "Privatni kanal + svakodnevni ritam." }],
    transcript: [
      { side: "them", text: "Izvini, mislim da sam pogrešio broj." },
      { side: "me", text: "Nema veze. Ko si?" },
      { side: "them", text: "Lakše mi je na WhatsApp, ovde mi poruke kasne." },
      { side: "me", text: "Može." },
      { side: "them", text: "Super. Inače, kako ti izgleda dan, posao, obaveze?" }
    ]
  },
  {
    id: "pb-002",
    scam: "pig-butchering",
    title: "Odnos → ‘mentor’ → test depozit → profit na ekranu",
    date: "2026-01-08",
    stage_hint: "pb3",
    summary: ["Planovi i bliskost", "Mentorstvo i koraci", "Mali depozit kao test", "Profit kao dokaz"],
    artifacts: [{ type: "note", label: "Prag", value: "Prvi depozit + dashboard profita." }],
    transcript: [
      { side: "them", text: "Volim što razmišljaš ozbiljno, zato ti kažem iskreno." },
      { side: "them", text: "Imam mentora, šalje signale. Kreni sa malim iznosom, čisto test." },
      { side: "me", text: "Kako znam da platforma nije fejk?" },
      { side: "them", text: "Videćeš profit na ekranu. Samo prati korake." }
    ]
  },
  {
    id: "pb-003",
    scam: "pig-butchering",
    title: "Povlačenje → ‘AML/KYC fee’ → ‘unlock’ → novi fee",
    date: "2026-01-09",
    stage_hint: "pb6",
    summary: ["Withdrawal lock", "Fee kao uslov", "‘Final step’ se ponavlja", "Evolucija u advance-fee"],
    artifacts: [{ type: "note", label: "Evolucija", value: "Pig-butchering → advance-fee." }],
    transcript: [
      { side: "me", text: "Hoću da povučem veći iznos." },
      { side: "them", text: "Sistem traži AML/KYC fee, posle unlock." },
      { side: "me", text: "Zašto se plaća fee za povlačenje?" },
      { side: "them", text: "Procedura, rok je danas. Posle toga izlazi sve." }
    ]
  },
  {
    id: "pb-004",
    scam: "pig-butchering",
    title: "‘VIP prozor’ → pritisak da se pozajmi novac",
    date: "2026-01-10",
    stage_hint: "pb5",
    summary: ["Ekskluzivnost i hitnost", "Veći depozit kao ‘nivo’", "Test granice: pozajmica/kredit"],
    artifacts: [{ type: "note", label: "Signal", value: "Predlog zaduživanja kao eskalacija." }],
    transcript: [
      { side: "them", text: "Ovo je VIP prozor, zatvara se večeras." },
      { side: "me", text: "Nemam toliko slobodno." },
      { side: "them", text: "Možeš da pozajmiš na kratko, posle vraćaš iz profita." }
    ]
  },
  {
    id: "pb-005",
    scam: "pig-butchering",
    title: "‘Support’ ulazi u priču → formalni ton → rok danas",
    date: "2026-01-11",
    stage_hint: "pb6",
    summary: ["Presvlačenje identiteta", "Procedura i case ID", "Rok kao prekidač provere"],
    artifacts: [{ type: "note", label: "Evolucija", value: "Pig-butchering → fake-call / advance-fee." }],
    transcript: [
      { side: "them", text: "Uvešću te na support, oni završavaju release." },
      { side: "them", text: "Case ID je otvoren, rok je danas." },
      { side: "me", text: "Zašto sve mora danas?" }
    ]
  },
  {
    id: "pb-006",
    scam: "pig-butchering",
    title: "Posle prekida: ‘recovery agent’ nudi povrat uz start fee",
    date: "2026-01-12",
    stage_hint: "pb7",
    summary: ["Gašenje kanala", "Novi identitet posle gubitka", "Upfront fee kao prag"],
    artifacts: [{ type: "note", label: "Evolucija", value: "Pig-butchering → recovery." }],
    transcript: [
      { side: "them", text: "Mi radimo tracing i povrat, vidimo tvoj slučaj." },
      { side: "me", text: "Kako ste došli do mog slučaja?" },
      { side: "them", text: "Treba start fee da pokrenemo postupak." }
    ]
  },

  /* =========================================================
     RECOVERY-SCAM (12)
  ========================================================= */
  {
    id: "rc-001",
    scam: "recovery-scam",
    title: "Agent za povrat → start fee → release fee",
    date: "2026-01-08",
    stage_hint: "rc1",
    summary: ["Kontakt zna detalje", "Fee kao uslov", "Serija zahteva"],
    artifacts: [{ type: "note", label: "Signal", value: "Uplata unapred kao uslov povrata." }],
    transcript: [
      { side: "them", text: "Imamo vaš slučaj, možemo vratiti sredstva." },
      { side: "me", text: "Kako?" },
      { side: "them", text: "Procedura traži start fee danas." },
      { side: "them", text: "Zatim release fee i sredstva izlaze." }
    ]
  },
  {
    id: "rc-002",
    scam: "recovery-scam",
    title: "‘Regulator’ → ‘zamrznuta sredstva’ → tax clearance",
    date: "2026-01-09",
    stage_hint: "rc2",
    summary: ["Formalni ton", "Frozen funds priča", "Tax kao uslov"],
    artifacts: [{ type: "note", label: "Evolucija", value: "Recovery → advance-fee." }],
    transcript: [
      { side: "them", text: "Sredstva su zamrznuta, dodeljen je case number." },
      { side: "me", text: "Kako se oslobađa?" },
      { side: "them", text: "Potrebna je tax clearance uplata do kraja dana." }
    ]
  },
  {
    id: "rc-003",
    scam: "recovery-scam",
    title: "‘Forensics/tracing’ → report fee → unlock fee",
    date: "2026-01-10",
    stage_hint: "rc1",
    summary: ["Tranzakcije kao dokaz", "Report fee", "Unlock fee posle toga"],
    artifacts: [{ type: "note", label: "Signal", value: "Izveštaj kao prodaja, posle toga fee serija." }],
    transcript: [
      { side: "them", text: "Pratimo transakcije, treba report fee." },
      { side: "me", text: "Posle izveštaja ide povrat?" },
      { side: "them", text: "Posle ide unlock da pusti sredstva." }
    ]
  },
  {
    id: "rc-004",
    scam: "recovery-scam",
    title: "Clone firm email → PDF ‘ugovor’ → uplata",
    date: "2026-01-11",
    stage_hint: "rc3",
    summary: ["Brend + logo", "Sličan domen", "Uplata kao ‘admin’"],
    artifacts: [{ type: "note", label: "Signal", value: "Logo nije dokaz, domen je ključ." }],
    transcript: [
      { side: "them", text: "Šaljemo ugovor u PDF, procedura povrata." },
      { side: "me", text: "Tražite uplatu admin fee." },
      { side: "them", text: "To je standardno, bez toga povrat ne ide." }
    ]
  },
  {
    id: "rc-005",
    scam: "recovery-scam",
    title: "‘Support’ → AnyDesk kao ‘pomoć’",
    date: "2026-01-12",
    stage_hint: "rc4",
    summary: ["Remote", "Vođenje uživo", "Kontrola tempa"],
    artifacts: [{ type: "note", label: "Evolucija", value: "Recovery → tech-support." }],
    transcript: [
      { side: "them", text: "Instaliraj AnyDesk, pokazaćemo povrat korak-po-korak." },
      { side: "me", text: "Zašto remote?" },
      { side: "them", text: "Brže je, rok je danas." }
    ]
  },
  {
    id: "rc-006",
    scam: "recovery-scam",
    title: "‘Chargeback service’ → processing fee → novi fee",
    date: "2026-01-13",
    stage_hint: "rc1",
    summary: ["Chargeback narativ", "Fee unapred", "Serija novih zahteva"],
    artifacts: [{ type: "note", label: "Signal", value: "Povrat uslovljen uplatom." }],
    transcript: [
      { side: "them", text: "Refund kroz banku ide brzo, treba processing fee." },
      { side: "me", text: "Zašto fee pre refund?" },
      { side: "them", text: "Procedura, posle ide admin i release." }
    ]
  },

  /* --- dodatnih 6 za recovery-scam (rc-007..rc-012) --- */
  {
    id: "rc-007",
    scam: "recovery-scam",
    title: "‘Prethodni agent je pogrešio’ → novi fee za ‘restart’",
    date: "2026-01-14",
    stage_hint: "rc2",
    summary: ["Novi identitet", "Greška kao izgovor", "Restart fee", "Final step se vraća"],
    artifacts: [{ type: "note", label: "Signal", value: "Novi agent se pojavljuje čim postaviš pitanje." }],
    transcript: [
      { side: "them", text: "Prethodni agent je pogrešio u proceduri." },
      { side: "them", text: "Treba restart fee da se otvori novi case." },
      { side: "me", text: "Znači opet uplata?" }
    ]
  },
  {
    id: "rc-008",
    scam: "recovery-scam",
    title: "‘Court filing’ → notary fee → ‘tax clearance’",
    date: "2026-01-15",
    stage_hint: "rc2",
    summary: ["Advokat maska", "Sudske takse", "Notar", "Porez kao sledeći uslov"],
    artifacts: [{ type: "note", label: "Evolucija", value: "Recovery → advance-fee serija." }],
    transcript: [
      { side: "them", text: "Podneli smo zahtev, treba court filing fee." },
      { side: "me", text: "Zašto ja plaćam postupak unapred?" },
      { side: "them", text: "Posle ide notary, pa tax clearance da pusti isplatu." }
    ]
  },
  {
    id: "rc-009",
    scam: "recovery-scam",
    title: "‘Report’ kao proizvod → posle report-a ‘release fee’",
    date: "2026-01-16",
    stage_hint: "rc1",
    summary: ["Prodaja izveštaja", "Autoritet kroz PDF", "Novi fee posle isporuke"],
    artifacts: [{ type: "note", label: "Signal", value: "Izveštaj nije povrat; povrat se gura u sledeću uplatu." }],
    transcript: [
      { side: "them", text: "Izveštaj je spreman, treba report fee." },
      { side: "me", text: "Ok, i povrat?" },
      { side: "them", text: "Za povrat treba release fee, to je odvojena procedura." }
    ]
  },
  {
    id: "rc-010",
    scam: "recovery-scam",
    title: "‘Bank compliance’ → uplata na ‘siguran račun’ kao ‘test’",
    date: "2026-01-17",
    stage_hint: "rc4",
    summary: ["Autoritet banke", "Test transfer", "Siguran račun narativ", "Pace control"],
    artifacts: [{ type: "note", label: "Evolucija", value: "Recovery → fake-call / impersonation." }],
    transcript: [
      { side: "them", text: "Zovem iz compliance tima, radimo test transfer." },
      { side: "me", text: "Test transfer na čiji račun?" },
      { side: "them", text: "Na siguran račun, posle vraćamo u celosti." }
    ]
  },
  {
    id: "rc-011",
    scam: "recovery-scam",
    title: "‘Insurance bond’ depozit → ‘final release’ rok",
    date: "2026-01-18",
    stage_hint: "rc2",
    summary: ["Depozit kao osiguranje", "Final release rok", "Final fee se ponavlja"],
    artifacts: [{ type: "note", label: "Signal", value: "Bond depozit je samo novi naziv za uplatu kao uslov." }],
    transcript: [
      { side: "them", text: "Pre isplate treba insurance bond depozit." },
      { side: "me", text: "Kad se bond vraća?" },
      { side: "them", text: "Vraća se posle final release-a, rok ističe danas." }
    ]
  },
  {
    id: "rc-012",
    scam: "recovery-scam",
    title: "‘0% posle povrata’ → ipak traže ‘start fee’",
    date: "2026-01-19",
    stage_hint: "rc1",
    summary: ["Mamac: % posle", "Preokret: start fee", "Serija: admin + release"],
    artifacts: [{ type: "note", label: "Signal", value: "Ponuda bez rizika se okrene u uplatu unapred." }],
    transcript: [
      { side: "them", text: "Uzimamo proviziju tek posle povrata, bez rizika." },
      { side: "me", text: "Super, onda nema uplata?" },
      { side: "them", text: "Ipak treba start fee da otvorimo postupak." }
    ]
  }
];
