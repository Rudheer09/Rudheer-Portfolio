# Rudheer Kudupudi — React Portfolio

A responsive portfolio built with React, Vite, and Lucide icons. GitHub Actions builds the React app and deploys the generated `dist/` folder to GitHub Pages.

## Deploy to GitHub Pages

1. Extract this ZIP.
2. Upload the **contents** of this folder (including `src/`, `.github/`, `package.json`, `index.html`, and `vite.config.js`) to the root of your repository named `Rudheer-Portfolio`.
3. Commit the files to the `main` branch.
4. In **Settings → Pages**, set **Source** to **GitHub Actions**.
5. Open **Actions** and wait for **Deploy React Portfolio to GitHub Pages** to finish successfully.
6. Visit `https://rudheer09.github.io/Rudheer-Portfolio/`.

The workflow installs packages, runs the production build, and deploys `dist`. The Vite base path is configured for the repository URL above. If you rename the repository, update `base` in `vite.config.js` to match.

## Run locally

Install Node.js 20+ or 22, then run:

```bash
npm install
npm run dev
```

## Before submitting

- Confirm project descriptions reflect your real work; the Attendance Companion and Mobile Racing Dashboard are currently presented as concepts.
- Test the email button, social links, and mobile layout after deployment.
- Keep `index.html` and `package.json` at the repository root; do not upload only the contents of `src/`.
