// branches.js
// Central grananje (jedino mesto gde se prevare povezuju).
// Format: from_scam + from_step → to_scam + note
// from_step je "konceptualni prag" (r1/r2..., c1/c2..., m1..., p1..., s1..., fc1..., af1..., rc1...)
// render.js trenutno prikazuje grananja po prevari (by scam) i može kasnije i po step-u.

window.SCAM_BRANCHES = [
  /* =========================================================
     ROMANTIC (romantic-scam)
  ========================================================= */
  {
    from_scam: "romantic-scam",
    from_step: "r2",
    to_scam: "pig-butchering",
    note: "Ritam + poverenje → uvod u “zajedničko ulaganje” kao plan."
  },
  {
    from_scam: "romantic-scam",
    from_step: "r2",
    to_scam: "crypto-scam",
    note: "Mentorstvo + “sigurna platforma” → prva probna uplata."
  },
  {
    from_scam: "romantic-scam",
    from_step: "r4",
    to_scam: "advance-fee-fraud",
    note: "Rok + “sitni trošak” kao uslov (karta, dokument, carina)."
  },
  {
    from_scam: "romantic-scam",
    from_step: "r4",
    to_scam: "fake-call-scam",
    note: "Otpor ili usporavanje → poziv radi vođenja i pritiska."
  },
  {
    from_scam: "romantic-scam",
    from_step: "r5",
    to_scam: "recovery-scam",
    note: "Posle gubitka → “povrat” uz novu uplatu."
  },
  {
    from_scam: "romantic-scam",
    from_step: "r6",
    to_scam: "sextortion-scam",
    note: "Kompromitujući materijal → ucena uplatom (često kripto)."
  },

  /* =========================================================
     MARKETPLACE (marketplace-scam)
  ========================================================= */
  // m1: kontakt + žurba + prebacivanje van platforme
  {
    from_scam: "marketplace-scam",
    from_step: "m1",
    to_scam: "phishing",
    note: "Privatan kanal + link “potvrde” → krađa podataka."
  },

  // m2: link “kurir/dostava/plaćanje”
  {
    from_scam: "marketplace-scam",
    from_step: "m2",
    to_scam: "phishing",
    note: "Forma liči na dostavu/platformu i traži karticu/kod."
  },
  {
    from_scam: "marketplace-scam",
    from_step: "m2",
    to_scam: "smishing",
    note: "Ista priča preko SMS-a: dostava/pošiljka/naplata."
  },
  {
    from_scam: "marketplace-scam",
    from_step: "m2",
    to_scam: "fake-delivery",
    note: "Priča se zakuca na pošiljku/osiguranje/carinu."
  },

  // m3: lažni dokaz uplate
  {
    from_scam: "marketplace-scam",
    from_step: "m3",
    to_scam: "fake-call-scam",
    note: "Poziv “podrške/kurira/banke” radi kontrole tempa i novih koraka."
  },
  {
    from_scam: "marketplace-scam",
    from_step: "m3",
    to_scam: "advance-fee-fraud",
    note: "Novi “trošak” da bi se navodno oslobodilo/ubrzalo."
  },

  // m4: kapara/rezervacija
  {
    from_scam: "marketplace-scam",
    from_step: "m4",
    to_scam: "advance-fee-fraud",
    note: "Kapara postaje prag → serija novih taksi."
  },

  // m5: posle štete
  {
    from_scam: "marketplace-scam",
    from_step: "m5",
    to_scam: "recovery-scam",
    note: "“Povrat” uz novu uplatu (refund, unlock, admin fee)."
  },

  // m6: ukradeni kod/lozinka
  {
    from_scam: "marketplace-scam",
    from_step: "m6",
    to_scam: "account-takeover",
    note: "Preuzimanje naloga → nove poruke, nove prevare, promene podataka."
  },

  /* =========================================================
     PHISHING (phishing)
  ========================================================= */
  {
    from_scam: "phishing",
    from_step: "p1",
    to_scam: "account-takeover",
    note: "Kredencijali/kodovi → kontrola naloga i reset lozinki."
  },
  {
    from_scam: "phishing",
    from_step: "p2",
    to_scam: "fake-call-scam",
    note: "Poziv “podrške” posle klika radi vođenja uživo."
  },
  {
    from_scam: "phishing",
    from_step: "p2",
    to_scam: "tech-support-scam",
    note: "Remote alat kao “pomoć” → kontrola uređaja."
  },
  {
    from_scam: "phishing",
    from_step: "p3",
    to_scam: "advance-fee-fraud",
    note: "“Mala taksa” ili “verifikacija” kao uslov za nastavak."
  },
  {
    from_scam: "phishing",
    from_step: "p4",
    to_scam: "recovery-scam",
    note: "Posle štete → ponuda “povrata” uz uplatu unapred."
  },

  /* =========================================================
     SMISHING (smishing)
  ========================================================= */
  {
    from_scam: "smishing",
    from_step: "s1",
    to_scam: "phishing",
    note: "SMS link vodi na lažnu formu (login/kartica/OTP)."
  },
  {
    from_scam: "smishing",
    from_step: "s1",
    to_scam: "fake-delivery",
    note: "SMS “pošiljka” ulazi u priču o dostavi/osiguranju/carini."
  },
  {
    from_scam: "smishing",
    from_step: "s2",
    to_scam: "fake-call-scam",
    note: "Poziv posle klika radi vođenja uživo i kontrole tempa."
  },
  {
    from_scam: "smishing",
    from_step: "s3",
    to_scam: "account-takeover",
    note: "Kod/OTP → preuzimanje naloga i serijske posledice."
  },
  {
    from_scam: "smishing",
    from_step: "s4",
    to_scam: "recovery-scam",
    note: "Posle gubitka → “refund” uz novu uplatu."
  },

  /* =========================================================
     FAKE CALLS (fake-call-scam)
  ========================================================= */
  {
    from_scam: "fake-call-scam",
    from_step: "fc1",
    to_scam: "impersonation-scam",
    note: "Poziv formalizovan kroz banku/policiju/kurira kao autoritet."
  },
  {
    from_scam: "fake-call-scam",
    from_step: "fc2",
    to_scam: "account-takeover",
    note: "OTP/kodovi → preuzimanje naloga (email, bank app, mreže)."
  },
  {
    from_scam: "fake-call-scam",
    from_step: "fc2",
    to_scam: "phishing",
    note: "Link “verifikacije” tokom poziva → unos podataka."
  },
  {
    from_scam: "fake-call-scam",
    from_step: "fc3",
    to_scam: "tech-support-scam",
    note: "AnyDesk/TeamViewer → kontrola uređaja + dalji transferi."
  },
  {
    from_scam: "fake-call-scam",
    from_step: "fc4",
    to_scam: "advance-fee-fraud",
    note: "Taksa/obrada kao uslov (siguran račun, oslobađanje, zaštita)."
  },
  {
    from_scam: "fake-call-scam",
    from_step: "fc5",
    to_scam: "recovery-scam",
    note: "Posle incidenta → “stručnjaci” nude povrat uz novu uplatu."
  },

  /* =========================================================
     ADVANCE-FEE (advance-fee-fraud)
  ========================================================= */
  {
    from_scam: "advance-fee-fraud",
    from_step: "af1",
    to_scam: "recovery-scam",
    note: "Posle gubitka → ponuda “povrata” uz uplatu unapred."
  },
  {
    from_scam: "advance-fee-fraud",
    from_step: "af2",
    to_scam: "fake-call-scam",
    note: "Poziv radi pritiska i ubrzanja sledeće uplate."
  },
  {
    from_scam: "advance-fee-fraud",
    from_step: "af3",
    to_scam: "phishing",
    note: "Link “verifikacije” ili “potvrde uplate” vodi u krađu podataka."
  },

  /* =========================================================
     CRYPTO (crypto-scam)
  ========================================================= */
  {
    from_scam: "crypto-scam",
    from_step: "c1",
    to_scam: "pig-butchering",
    note: "Odnos + ulaganje kao plan → sistemsko povećavanje uloga."
  },
  {
    from_scam: "crypto-scam",
    from_step: "c3",
    to_scam: "fake-call-scam",
    note: "Poziv radi vođenja uživo do transfera ili “brzog rešenja”."
  },
  {
    from_scam: "crypto-scam",
    from_step: "c5",
    to_scam: "advance-fee-fraud",
    note: "Withdrawal lock: porez/AML/depozit kao uslov povlačenja."
  },
  {
    from_scam: "crypto-scam",
    from_step: "c5",
    to_scam: "tech-support-scam",
    note: "Remote alat radi “pomoći” oko povlačenja i verifikacije."
  },
  {
    from_scam: "crypto-scam",
    from_step: "c7",
    to_scam: "recovery-scam",
    note: "Posle gubitka → recovery kontakt uz uplatu unapred."
  },

  /* =========================================================
     RECOVERY (recovery-scam)
  ========================================================= */
  {
    from_scam: "recovery-scam",
    from_step: "rc1",
    to_scam: "advance-fee-fraud",
    note: "Recovery start fee → serija novih taksi (admin, release, tax)."
  },
  {
    from_scam: "recovery-scam",
    from_step: "rc2",
    to_scam: "fake-call-scam",
    note: "Poziv radi autoriteta i vođenja kroz uplatu."
  },
  {
    from_scam: "recovery-scam",
    from_step: "rc3",
    to_scam: "phishing",
    note: "Link “case portal” ili “verifikacija” → krađa podataka."
  },
  {
    from_scam: "recovery-scam",
    from_step: "rc4",
    to_scam: "tech-support-scam",
    note: "Remote pristup kao “pomoć” → kontrola uređaja."
  },

  /* =========================================================
     SUPPORTING LINKS (optional nodes)
  ========================================================= */
  {
    from_scam: "giveaway-scam",
    from_step: "g1",
    to_scam: "advance-fee-fraud",
    note: "Nagrada → taksa kao uslov isplate."
  },
  {
    from_scam: "loan-scam",
    from_step: "l1",
    to_scam: "advance-fee-fraud",
    note: "Kredit → obrada/osiguranje kao uslov."
  },
  {
    from_scam: "rental-scam",
    from_step: "rs1",
    to_scam: "advance-fee-fraud",
    note: "Depozit unapred → novi troškovi."
  }
];
