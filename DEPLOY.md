# Deployment Guide

## Quick Deploy to Railway

### Prerequisites
- GitHub account
- Railway account (sign up at railway.app)

### Steps

1. **Push to GitHub** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Anti-scam trilingual site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/antiscam-site.git
   git push -u origin main
   ```

2. **Deploy on Railway**:
   - Go to [railway.app](https://railway.app)
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Railway will auto-detect `railway.toml` and deploy

3. **Custom Domain** (optional):
   - In Railway project settings → Networking
   - Add custom domain or use Railway subdomain
   - HTTPS is automatic

### Configuration Files

- **`railway.toml`**: Railway build and deploy settings
- **`nixpacks.toml`**: Build environment (Python 3.11)
- **`.railwayignore`**: Files to exclude from deployment

### Environment

- **Builder**: Nixpacks
- **Runtime**: Python 3.11
- **Server**: Python HTTP server on port 8080
- **Health check**: `/` with 300s timeout

## Alternative Hosting Options

### Netlify

1. Drag & drop the project folder to Netlify
2. Or connect GitHub repo
3. Build settings: None (static site)
4. Publish directory: `.` (root)

### Vercel

```bash
npm i -g vercel
vercel
```

Or connect GitHub repo via Vercel dashboard.

### GitHub Pages

```bash
# Enable GitHub Pages in repository settings
# Set source to main branch, root directory
# Site will be available at: https://USERNAME.github.io/REPO_NAME
```

### Cloudflare Pages

1. Connect GitHub repository
2. Build settings: None
3. Deploy

## Testing Before Deploy

Run full test suite:
```bash
pytest tests/ -v
```

Check for browser compatibility:
```bash
pytest tests/test_browser.py -v --headed
```

Serve locally to verify:
```bash
python -m http.server 8080
# Visit http://localhost:8080
```

## Post-Deploy Checklist

- [ ] All 24 pages load correctly
- [ ] Language toggle works (SR → ĆIR → EN → SR)
- [ ] Theme toggle works (light ↔ dark)
- [ ] Search on prevare.html works
- [ ] All internal links work
- [ ] No console errors
- [ ] Mobile responsive
- [ ] All 3 languages display correctly

## Monitoring

Railway provides:
- Deployment logs
- Runtime metrics
- Automatic HTTPS
- CDN distribution

## Rollback

Railway keeps deployment history. To rollback:
1. Go to project deployments
2. Select previous working deployment
3. Click "Redeploy"

## Troubleshooting

### Port Issues
Railway expects port 8080. Configured in:
- `railway.toml`: `startCommand`
- `nixpacks.toml`: `start.cmd`

### Build Failures
Check Railway logs for:
- Python version mismatch
- Missing files
- Permission issues

### 404 Errors
Ensure all HTML files are in root directory and not gitignored.

## Performance Tips

1. **Enable CDN**: Automatic on Railway
2. **Compress assets**: Already minimal (no build step)
3. **Cache headers**: Handled by Railway
4. **Lazy loading**: Images load on-demand

## Security

- No backend = no server vulnerabilities
- Static content only
- HTTPS enforced automatically
- No user data collection
- No cookies required

---

**Ready to deploy!** 🚀

Railway link will be: `https://your-project-name.up.railway.app`
