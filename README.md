# Rudheer Kudupudi — React Portfolio

A responsive personal portfolio built with React and Vite. The contact section uses email and social links only; **there is no contact form or “Send a Message” section** in `src/App.jsx`.

## Deploy to GitHub Pages with GitHub Actions

> Important: To remove the old “Send a Message” form from the live site, replace the old website files with this React project. Uploading new files on top of old files does not delete leftover files.

1. Download and extract this ZIP.
2. Open the extracted `Rudheer_React_Portfolio` folder.
3. In your GitHub repository `Rudheer-Portfolio`, remove the old portfolio files/folders that are not part of this React project (especially any old `index.html`, `style.css`, `script.js`, and old website folders). Do not delete the repository itself.
4. Upload the **contents** of this folder to the repository root. The root must contain `index.html`, `package.json`, `vite.config.js`, `src/`, and `.github/workflows/deploy.yml`.
5. Commit the changes to the `main` branch.
6. Open **Settings → Pages** and set **Source** to **GitHub Actions**.
7. Open **Actions** and wait for **Deploy React Portfolio to GitHub Pages** to finish with a green check.
8. Open https://rudheer09.github.io/Rudheer-Portfolio/ and hard-refresh with `Ctrl + F5`.

The workflow installs dependencies, builds the React app, and publishes the `dist/` folder. `vite.config.js` is configured for the repository URL above. If you rename the repository, update its `base` path.

## Run locally

Install Node.js 20 or newer, then run:

```bash
npm install
npm run dev
```

## Before submitting

- Replace or verify project descriptions so they accurately reflect your real work. The Attendance Companion and Mobile Racing Dashboard are concepts, not completed products.
- Test the email-copy button, social links, and responsive layout after deployment.
