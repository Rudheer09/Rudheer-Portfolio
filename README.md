# Personal Branding Portfolio | Rudheer
### ShadowFox UI/UX Design Internship — Beginner Level Task

A modern, responsive, and high-performance personal portfolio website built with clean semantic **HTML5**, modern **Vanilla CSS3**, and modular **ES6+ JavaScript**.

---

## 🌟 Live Preview & Design Highlights

- **Target Persona:** B.Tech CSE-AI Student & Aspiring AI & Software Developer
- **Institution:** Institution details not provided
- **Design Philosophy:** Minimalist, intentional, human-centered UI/UX with high visual hierarchy, clean typography, smooth transitions, and zero unnecessary fluff.
- **Zero Heavy Dependencies:** Built from scratch without bloated CSS or JS libraries for maximum speed, accessibility, and maintainability.

---

## 🧭 Information Architecture & User Flow

The portfolio follows an intentional narrative user flow:
$$\text{Hero / Home} \longrightarrow \text{About} \longrightarrow \text{Skills \& Tools} \longrightarrow \text{Featured Projects} \longrightarrow \text{Contact}$$

1. **Hero / Home:**
   - Name, professional status indicator with active pulsing dot (*Available for Internships & AI/Dev Roles*).
   - Dynamic headline and concise elevator pitch.
   - Primary Call-to-Action (*View Projects*), Secondary CTA (*Contact Me*), and interactive *Resume Summary* modal trigger.
   - Interactive developer profile terminal preview displaying core tech stack, live metrics (8.8+ CGPA, 4+ Projects), and code snippet.

2. **About Me:**
   - Academic background (*B.Tech CSE-AI at Institution details not provided, Chennai, 2023–2027*).
   - Engineering philosophy and career interests (*Deep Learning, Full-Stack Development, Algorithmic Problem Solving, Human-Centered Design*).
   - Three core capability pillars: *Full-Stack Craft*, *AI & Intelligence*, and *Algorithmic Rigor*.

3. **Skills & Tools:**
   - Multi-category interactive filter tabs (*All, Programming, Web Tech, AI & DSA, Tools & Workflow*).
   - Clean modular cards featuring:
     - **Programming:** Java, Python, JavaScript (ES6+)
     - **Web Tech:** HTML5 & CSS3, beginner JavaScript
     - **AI & DSA:** AI/Machine Learning (introductory AI concepts), Data Structures & Algorithms
     - **Tools & Workflow:** Git & GitHub, 
   - Visual proficiency badges, category labels, and concise descriptions.

4. **Featured Projects:**
   - Filterable project grid with category tabs (*All, AI & ML, Web Apps, Algorithms*).
   - Two repository-linked cards using projects from the GitHub profile:
     - **Team 3 – Drone Collision Prevention:** Team capstone prototype.
     - **Django Library Management Web App:** Django and SQLite web application.
   - Interactive **View Project** modals with conservative summaries and direct repository links.

5. **Contact:**
   - Dual-column layout with direct contact cards:
     - Email address with **1-click Copy to Clipboard** feature and instant toast feedback.
     - Geographic location (*India*).
     - LinkedIn & GitHub profiles.
     - Availability indicator card.
   - Interactive contact form with real-time validation for Name, Email, Subject, and Message, live character counter (`X / 500`), loading spinner state, and success notifications.

6. **Navigation & Footer:**
   - Sticky header with glassmorphism backdrop blur.
   - Reading progress bar at the very top.
   - Dark / Light mode toggle with automatic OS preference detection and `localStorage` persistence.
   - Responsive mobile navigation drawer with accessible hamburger toggle and backdrop dismiss.
   - Active scroll spy highlighting the current section in the navbar.
   - Footer with navigation links, copyright, and smooth **Back to Top** button.

---

## 🎨 Design System & UI/UX Specifications

| Token | Dark Mode (Default) | Light Mode |
|---|---|---|
| **Primary Background** | `#0b0f17` (Deep Slate Black) | `#f8fafc` (Clean Slate) |
| **Card / Surface** | `rgba(17, 24, 39, 0.75)` | `rgba(255, 255, 255, 0.85)` |
| **Primary Accent** | `#3b82f6` (Electric Sapphire) | `#2563eb` (Royal Blue) |
| **Secondary Accent** | `#10b981` (Emerald Green) | `#059669` (Forest Emerald) |
| **Primary Text** | `#f8fafc` | `#0f172a` |
| **Secondary Text** | `#94a3b8` | `#475569` |
| **Primary Typography** | `Plus Jakarta Sans` (Google Fonts) | `Plus Jakarta Sans` (Google Fonts) |
| **Code Typography** | `JetBrains Mono` (Google Fonts) | `JetBrains Mono` (Google Fonts) |

---

## 📁 Project Structure

```text
├── index.html          # Semantic HTML5 markup, SEO meta tags, ARIA accessibility
├── css/
│   └── style.css       # Design tokens, responsive grid/flexbox, light/dark themes
├── js/
│   └── main.js         # Theme toggle, mobile drawer, scroll spy, modals, form validation
├── assets/             # Project assets and graphics
└── README.md           # Documentation, run guide, and submission notes
```

---

## 🚀 How to Run Locally

You can run this project locally using any of the methods below:

### Option 1: Direct Browser Open (Zero Setup)
Simply double-click `index.html` in your file explorer, or right-click and choose **Open with > Google Chrome / Microsoft Edge / Firefox**.

### Option 2: Python Built-in HTTP Server
If you have Python installed, open terminal in this folder and run:
```bash
python -m http.server 8000
```
Then visit `http://localhost:8000` in your web browser.

### Option 3: VS Code Live Server
1. Open this directory in **Visual Studio Code**.
2. Install the **Live Server** extension (by Ritwick Dey).
3. Right-click `index.html` and click **"Open with Live Server"**.

### Option 4: Node.js (npx serve)
If you have Node.js installed:
```bash
npx serve .
```

---

## 🌐 Deploy for ShadowFox Submission (GitHub Pages)

This folder is prepared for GitHub Pages deployment with the included `.github/workflows/deploy.yml` workflow.

1. Create a **public** repository on GitHub named `rudheer-portfolio` (or another name you prefer).
2. Upload the **contents of this folder** to the repository root (the `index.html` file must be at the root, not inside another `Beginner/` folder).
3. Commit the upload to the `main` branch.
4. Open **Settings → Pages** and set the build/deployment source to **GitHub Actions** if prompted.
5. Open **Actions** and wait for **Deploy portfolio to GitHub Pages** to complete successfully.
6. Open **Settings → Pages → Visit site** to get the actual published URL. A project site normally uses `https://Rudheer09.github.io/rudheer-portfolio/` if the repository is named `rudheer-portfolio`; verify the URL in GitHub rather than assuming it is live.

Official guide: https://docs.github.com/en/pages/quickstart

The website is static HTML/CSS/JavaScript. The contact form opens the visitor's email app using a prefilled email; it does not send messages through a server-side backend.

## 📋 ShadowFox Internship Submission Checklist

- [x] **Hero / Home:** Name, B.Tech CSE-AI role, strong headline, bio, View Projects & Contact CTAs.
- [x] **About:** Educational background (Institution details not provided), career interests, and visual layout.
- [x] **Skills / Tools:** Java, Python, JavaScript, HTML, CSS, beginner JavaScript, AI/ML, DSA, Git, GitHub, Figma.
- [x] **Projects:** 4 repository-linked cards with descriptions, tech labels, and View Project modals; two cards use conservative summaries pending a fuller repository review.
- [x] **Contact details:** Email and LinkedIn profile have been configured. The contact form validates fields and opens the visitor’s email app; it does not send mail through a backend.
- [ ] **Responsive Design:** CSS breakpoints exist; run the visual checks on desktop, tablet, and mobile before submission.
- [x] **Modern UI/UX Polish:** Dark/Light theme toggle, reading progress bar, micro-interactions, accessibility contrast, and footer.


## Before publishing (important)

- [ ] Confirm your institution, study dates, and any academic metrics before adding them. The template intentionally avoids inventing these details.
- [x] Email configured: `rudheerkudupudi@gmail.com`. The contact form opens the visitor’s email app; it does not send mail through a backend.
- [x] LinkedIn configured: `https://www.linkedin.com/in/rudheer-kudupudi-7837b241b`.
- [x] Replaced fictional project claims with four public repository links: `Team-3-DSA-Capstone-Project`, `Django-Web-application`, `tkmagesh`, and `Demo`. The last two descriptions are intentionally conservative because their full project details were not confirmed.
- [ ] Test the page in desktop, tablet, and mobile widths, and verify every interaction before submitting to ShadowFox.
- [ ] Upload the contents to your GitHub repository, enable GitHub Actions under Settings → Pages, and test the published URL.


## Recent cleanup
- Removed the TKMagesh and Demo repository cards.
- Simplified the skills section to beginner-level skills.
- Email links now open a Gmail compose page in the browser, avoiding the operating-system mail-handler chooser.

- Updated portfolio wording to reflect beginner-level skills and ongoing learning rather than advanced proficiency claims.
