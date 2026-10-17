# Rudheer Kudupudi — React Portfolio

A responsive personal portfolio built with React and Vite for the **Beginner UI/UX portfolio task**.

## Included

- Home / introduction
- About
- Skills / tools
- Selected projects (concepts are labelled honestly)
- Contact section with email, GitHub and LinkedIn links
- Responsive styling for desktop, tablet and mobile
- React + Vite production build
- GitHub Actions workflow that deploys the built `dist/` folder to GitHub Pages

The contact **form is intentionally not included**; the contact section uses direct email and social links instead.

## Publish to `Rudheer09/Rudheer-Portfolio`

1. Extract this ZIP.
2. Open the inner `Rudheer_React_Portfolio` folder.
3. In the GitHub repository `https://github.com/Rudheer09/Rudheer-Portfolio`, remove the old portfolio source files and any old Pages deployment workflows that could publish over this one. Keep unrelated project files only if you know they are needed; there should be just one workflow deploying GitHub Pages.
4. Upload the **contents** of this folder to the repository root. The root must contain `index.html`, `package.json`, `vite.config.js`, `src/`, and `.github/workflows/deploy.yml`.
5. Commit the changes to the `main` branch.
6. Open **Settings → Pages** and set **Source** to **GitHub Actions**.
7. Open **Actions** and wait for **Deploy React Portfolio to GitHub Pages** to finish with a green check.
8. Click the site URL from the successful deployment, or open `https://rudheer09.github.io/Rudheer-Portfolio/`.

## Important troubleshooting

- Do **not** publish the source `index.html` directly from the branch. The included workflow builds the app and deploys only the generated `dist/` directory.
- If the website shows plain unstyled HTML, check that the latest successful workflow is **Deploy React Portfolio to GitHub Pages** and disable/delete other workflows that deploy Pages. A second workflow can overwrite the correct React deployment.
- Vite creates hashed CSS/JS asset filenames for each production build, so updated asset URLs change with the build. Visitors should not need to hard-refresh for each update.

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

## Links

- Email: rudheerkudupudi@gmail.com
- GitHub: https://github.com/Rudheer09
- LinkedIn: https://www.linkedin.com/in/rudheer-kudupudi-7837b241b
