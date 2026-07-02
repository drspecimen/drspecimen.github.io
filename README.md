# Samson Ishola — Portfolio

Personal portfolio site hosted on GitHub Pages.

**Live:** https://drspecimen.github.io (or your custom domain)

## Structure

```
/
├── index.html              # Main portfolio page
├── assets/
│   ├── css/
│   │   ├── style.css       # Core design system
│   │   └── writing.css     # Technical writing section styles
│   ├── js/
│   │   └── main.js         # Boot animation, nav, scroll
│   └── img/                # Screenshots — add here, reference in writing entries
│       ├── infracore-dashboard.png
│       ├── infracore-alerts.png
│       ├── lms-builder.png
│       └── lms-cert.png
└── projects/               # Optional: standalone project detail pages
    └── infra-core.html
```

## Adding a new technical writing entry

Open `index.html` and find the comment `<!-- Add more entries here -->`.
Copy the template comment block, fill in:

- `id` — a unique slug e.g. `note-sportzense-v2`
- `wt-date` — "Month Year"
- `wt-tag` — "Topic · Stack"
- `wt-title` — one-line description
- `writing-content` — your write-up in plain HTML

To add a real screenshot instead of a placeholder:
1. Save your image to `assets/img/yourfilename.png`
2. Replace the `screenshot-placeholder` div with:
```html
<img src="assets/img/yourfilename.png" alt="Description">
```

## Adding a new project

Copy one of the `project-card` blocks in the Projects section.
Update the `project-id` number (SYS // 004 etc), status, title, description, metrics, and stack tags.

## Deploying to GitHub Pages

1. Create a repo named `drspecimen.github.io` (or any name for project pages)
2. Push all files to the `main` branch
3. Go to repo Settings → Pages → Source: `main` branch, `/ (root)`
4. Your site will be live at `https://drspecimen.github.io` within a few minutes

## Custom domain (optional)

Add a file named `CNAME` in the root with just your domain:
```
portfolio.drspecimen.online
```
Then add a CNAME record in your DNS pointing to `drspecimen.github.io`.
