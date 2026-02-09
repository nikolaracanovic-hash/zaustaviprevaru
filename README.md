# Anti-scam Educational Website

Comprehensive educational resource about online scams with detailed analysis, prevention strategies, and trilingual support.

## Features

- **22 documented scam types** with detailed breakdowns
- **Bilingual support**: Serbian, English
- **Phase-by-phase analysis** of each scam type
- **Pattern recognition tools** (scripts, red flags, branching points)
- **Dark/Light theme** toggle
- **Responsive design**
- **No backend required** - pure static site

## Languages

- 🇷🇸 **Srpski** - Serbian
- 🇬🇧 **English**

## Technology Stack

- **Frontend**: Vanilla JavaScript, CSS3, HTML5
- **Testing**: pytest, Playwright
- **Deployment**: Railway (static hosting)

## Local Development

1. Clone the repository
2. Open `index.html` in a browser, or serve via:
   ```bash
   python -m http.server 8080
   ```
3. Visit `http://localhost:8080`

## Testing

Run all tests:
```bash
pytest tests/ -v
```

Run browser tests:
```bash
pytest tests/test_browser.py -v
```

## Project Structure

```
├── index.html              # Homepage
├── prevare.html           # Scam catalog/index
├── *.html                 # Individual scam pages (22 total)
├── *.content.js           # Content data for each scam
├── data.js                # Scam metadata
├── ui.js                  # Language/theme controls
├── render.js              # Dynamic content rendering
├── branches.js            # Scam branching logic
├── style.css              # Global styles
└── tests/                 # Test suite
```

## Scam Types Covered

1. Romantic scams (Romance/Pig butchering)
2. Phishing (Email/SMS/Voice)
3. Cryptocurrency scams
4. Job scams
5. Tech support scams
6. Marketplace scams
7. Advance-fee fraud
8. Impersonation scams
9. Sextortion
10. Account takeover
11. Fake delivery/package scams
12. Recovery scams
13. Rental scams
14. Investment seminars
15. Charity scams
16. Giveaway scams
17. Loan scams
18. Vishing
19. Smishing
20. Fake call scams
21. Scareware
22. And more...

## Content Philosophy

- **No fluff**: Dense, actionable information
- **Pattern-focused**: Recognition over memorization
- **Skeptical tone**: Direct, no comfort language
- **Evidence-based**: Sourced from official reports (FTC, FBI, IC3)

## Deployment

### Railway

1. Connect GitHub repository to Railway
2. Railway auto-detects configuration from `railway.toml`
3. Static site served via Python HTTP server on port 8080
4. Automatic HTTPS and CDN

### Manual Deploy

Any static hosting works:
- Netlify
- Vercel
- GitHub Pages
- Cloudflare Pages

## License

Educational use only. Content focused on prevention and awareness.

## Contributing

This is an educational resource. Contributions should:
- Maintain skeptical, direct tone
- Include sources for claims
- Follow bilingual pattern (SR/EN)
- Add tests for new content

## Contact

For questions or reports about scam patterns, please open an issue.

---

**Note**: This website provides educational information only. For active scam situations, contact local law enforcement and relevant financial institutions immediately.
