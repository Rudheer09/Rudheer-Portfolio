# Rudheer Kudupudi — React Portfolio

A responsive React + Vite portfolio deployed to GitHub Pages through GitHub Actions.

## Deploy correctly (important)

1. Extract this ZIP.
2. Open the **contents** of `Rudheer_React_Portfolio` (not the outer folder itself).
3. In `Rudheer09/Rudheer-Portfolio`, remove old website files and old deployment workflow files that conflict with this one. Keep only one Pages deployment workflow: `.github/workflows/deploy.yml` from this project.
4. Upload the project contents to the repository root. At the root you should see `index.html`, `package.json`, `vite.config.js`, `src/`, and `.github/`.
5. Commit the changes to `main`.
6. In **Settings → Pages**, set **Source** to **GitHub Actions**.
7. Open **Actions** and wait for **Deploy React Portfolio to GitHub Pages** to finish with a green check.
8. Click the website URL shown in the successful deployment job.

## Why the old page may still appear

The deployed site must be built from Vite's `dist/` directory. This workflow runs `npm run build`, verifies that `dist/index.html` and `dist/assets/` exist, and deploys only `dist/`. If the live site still shows the old design, open **Actions** and confirm the latest successful run is this workflow and that no other workflow is also deploying Pages. Do not upload `src/` or the source `index.html` as the published site manually; deploy the build artifact instead.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Personal links

- Email: rudheerkudupudi@gmail.com
- GitHub: https://github.com/Rudheer09
- LinkedIn: https://www.linkedin.com/in/rudheer-kudupudi-7837b241b

## Project accuracy

Some portfolio cards are concepts/work in progress, and are labelled as such. Update the descriptions as projects become real and have working demos or repositories.
