# Dosi & Dosi Associates — Website

A single-page scrolling website. No build step, no dependencies.

## Files

| File | Purpose |
|---|---|
| `index.html` | The whole site (one page, all sections) |
| `styles.css` | Styling |
| `script.js` | Mobile nav, scroll reveal, contact form |
| `videos/` | The 4 client testimonial videos |
| `vercel.json` | Vercel hosting config (clean URLs + caching) |
| `.gitignore` | Files to exclude from Git |

## View it locally

Double-click `index.html`. Works in any browser. The videos may not autoplay
in some browsers — that's normal, the user clicks play.

## Deploy to GitHub + Vercel (browser only, ~7 minutes)

### 1. Upload to GitHub
- Go to [github.com](https://github.com) → New repository
- Name: `dosi-dosi-associates` → keep settings default → Create
- On the empty repo page, click **"uploading an existing file"**
- Drag ALL files from inside this folder (including the `videos` folder)
- Commit message: "Initial site" → Commit changes

### 2. Connect Vercel
- Go to [vercel.com/signup](https://vercel.com/signup) → Continue with GitHub
- Add New Project → Import the repo → Framework: **Other** → Deploy
- ~30 seconds later you get a live URL like `https://dosi-dosi-associates.vercel.app`

Every future edit on GitHub auto-redeploys to Vercel.

## Editing the site later

Open `index.html` in any text editor (or edit directly on GitHub.com via the
pencil icon on each file). All content is plain text between HTML tags. No
framework, no rebuild needed.

Common edits:
- **Phone numbers / email**: search for `92298` or `dosiandosi` in `index.html`
- **Add a new testimonial**: copy any `.testimonial-card` block in the
  `<!-- TESTIMONIALS -->` section, change name + video filename
- **Change services**: search for `<!-- SERVICES -->` in `index.html`

## Custom domain (optional)

In Vercel project → Settings → Domains → Add your domain. Vercel gives you 2
DNS records to point at your domain registrar. Done in ~10 min.
