# Dosi & Dosi Associates — Website

A 7-page static website. No build step, no dependencies — just HTML, CSS and a
tiny bit of JavaScript. Works in any browser and can be hosted anywhere.

## Files

| File | Purpose |
|---|---|
| `index.html` | Homepage (all 6 sections) |
| `about.html` | About page |
| `services.html` | Services (3 offerings) |
| `results.html` | Results / Case Studies |
| `testimonials.html` | Testimonials page (with 4 video slots) |
| `insights.html` | Insights / Blog links |
| `contact.html` | Contact page with enquiry form |
| `styles.css` | All styling (shared across pages) |
| `script.js` | Mobile nav, scroll reveal, contact form |

## View it locally

Just double-click `index.html` and it opens in your browser. Every link works.

## Deploy it (free options)

- **Netlify Drop** — drag this folder onto `app.netlify.com/drop`. Live in 30s.
- **Vercel** — `vercel` CLI in this folder, or drag-and-drop at `vercel.com/new`.
- **GitHub Pages** — push to a repo, enable Pages, point to `main` branch.
- **Any shared hosting** — upload these files via FTP to your `public_html`
  folder. Done.

## How to add the 4 video testimonials later

Open `testimonials.html` and find the 4 placeholder cards (search for
`video-placeholder-slot`). Each card has a commented block above it explaining
the two options:

**Option A — Hosted video (recommended):**
Upload each video to YouTube (unlisted is fine) or Vimeo, then replace the
`<div class="video-placeholder-slot">...</div>` block with:

```html
<div class="video-wrap">
  <iframe src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="Client Testimonial" allowfullscreen loading="lazy"></iframe>
</div>
```

**Option B — Local MP4 file:**
Create a `videos/` folder next to the HTML files, drop the mp4s in, then:

```html
<div class="video-wrap">
  <video controls preload="metadata">
    <source src="videos/testimonial-1.mp4" type="video/mp4">
  </video>
</div>
```

Then fill in the `.name`, `.role`, and `.pull` (short pull-quote) fields.

## How to edit content

Everything is plain HTML — open any `.html` file in a text editor (VS Code,
Sublime, even Notepad) and change the text between tags. No framework, no
re-build.

## Contact form

The form on `contact.html` opens the user's default email client pre-filled
with their details (no backend needed). If you want real form submissions
delivered to your inbox, either:

- Use Netlify Forms (just add `netlify` attribute to the `<form>` tag — works
  automatically on Netlify hosting), or
- Use a free service like Formspree / Getform (change the form `action` URL).

## Credits

- Typography: Fraunces (display) + Inter (body) — both from Google Fonts
- Palette: Navy (`#0B1A2B`), Gold (`#B8894B`), warm off-white (`#F8F6F1`)
