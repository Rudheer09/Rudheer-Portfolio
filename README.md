# Rudheer Kudupudi — React Portfolio

Responsive personal portfolio built with React and Vite for the Beginner UI/UX portfolio task.

## Included task elements

- Home / introduction
- About section
- Skills and tools
- Selected projects, with concepts clearly labelled as concepts/work in progress
- Contact section with a message form, email, GitHub, and LinkedIn
- Form validation, sending state, and success/error feedback
- Responsive desktop, tablet, and mobile styling
- Semantic form labels, keyboard-focus styling, readable contrast, and reduced-motion support
- Production build and GitHub Actions workflow deploying Vite's generated `dist/` directory to GitHub Pages

## Contact form email delivery

The contact form uses a `mailto:` link to open the visitor's default email application with the recipient, subject, and message pre-filled. This avoids third-party form activation and does not require an API key. The visitor must press Send in their email application; if no email app is configured, they can use the email address shown on the page. Because this is a static website, the form does not send email silently from the browser.

## Deploy to GitHub Pages

1. Extract this ZIP.
2. Upload the contents of the inner `Rudheer_React_Portfolio` folder to the root of `https://github.com/Rudheer09/Rudheer-Portfolio`. The root should contain `index.html`, `package.json`, `vite.config.js`, `src/`, and `.github/workflows/deploy.yml`.
3. Remove any other GitHub Pages deployment workflow that might overwrite this one; keep this single Pages workflow.
4. Commit the changes to `main`.
5. In **Settings → Pages**, choose **GitHub Actions** as the source.
6. In **Actions**, wait for **Deploy React Portfolio to GitHub Pages** to complete successfully.
7. Open `https://rudheer09.github.io/Rudheer-Portfolio/` and test the navigation, mobile layout, links, and contact form.

Vite generates hashed CSS and JavaScript asset names for each production build. The workflow deploys the generated production output rather than the source HTML.

## Local development

```bash
npm install
npm run dev
```

## Verify a production build

```bash
npm run build
npm run preview
```

## Profile links

- Email: rudheerkudupudi@gmail.com
- GitHub: https://github.com/Rudheer09
- LinkedIn: https://www.linkedin.com/in/rudheer-kudupudi-7837b241b
