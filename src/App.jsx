import { useState } from 'react'
import { ArrowDownRight, ArrowUpRight, Github, Linkedin, Mail, Copy, Check, Code2, Layers3, Sparkles, Menu, X, ExternalLink } from 'lucide-react'

const EMAIL = 'rudheerkudupudi@gmail.com'
const projects = [
  { n: '01', type: 'JAVASCRIPT', title: 'JavaScript', desc: 'JavaScript practice and development work from my learning journey.', tags: ['JavaScript', 'Web development'], mark: 'JS / BUILD', color: 'lavender', url: 'https://github.com/Rudheer09/tkmagesh' },
  { n: '02', type: 'DSA CAPSTONE', title: 'DSA Capstone Project', desc: 'A team project: a working prototype designed to help prevent drones from colliding.', tags: ['Java', 'Data structures & algorithms'], mark: 'SAFE FLIGHT', color: 'mint', url: 'https://github.com/Rudheer09/Team-3-DSA-Capstone-Project' },
  { n: '03', type: 'WEB DEVELOPMENT', title: 'Portfolio', desc: 'My responsive personal portfolio showcasing my skills, projects, and development journey.', tags: ['React', 'Responsive UI'], mark: 'PORTFOLIO', color: 'peach', url: 'https://github.com/Rudheer09/Rudheer-Portfolio' },
]
const skills = ['HTML & CSS', 'JavaScript', 'React', 'Java', 'Data Structures & Algorithms', 'Object-Oriented Programming', 'Git & GitHub', 'Python', 'SQL & SQLite', 'UI/UX Fundamentals', 'Responsive Design', 'Problem Solving']

function App() {
  const [copied, setCopied] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [formStatus, setFormStatus] = useState({ type: '', message: '' })
  const [sending, setSending] = useState(false)
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${EMAIL}`
    }
  }
  const closeMenu = () => setMenuOpen(false)
  const updateForm = (event) => setForm({ ...form, [event.target.name]: event.target.value })
  const submitContact = (event) => {
    event.preventDefault()
    const subject = form.subject.trim() || 'Portfolio contact message'
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    setFormStatus({ type: 'success', message: 'Your email app should open with the message ready. Please press Send there to deliver it.' })
    window.location.href = mailto
  }

  return <>
    <div className="grain" aria-hidden="true" />
    <header className="nav wrap">
      <a className="brand" href="#home" aria-label="Rudheer home"><span className="brand-mark">R<span>.</span></span><span className="brand-name">RUDHEER KUDUPUDI<small>STUDENT · DEVELOPER</small></span></a>
      <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
        <a href="#about" onClick={closeMenu}>About</a><a href="#skills" onClick={closeMenu}>Skills</a><a href="#work" onClick={closeMenu}>Work</a><a href="#contact" onClick={closeMenu}>Contact</a>
        <a className="nav-cta" href={`mailto:${EMAIL}`}>Let’s talk <ArrowUpRight size={15}/></a>
      </nav>
    </header>

    <main>
      <section className="hero wrap" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-dot"/> AVAILABLE TO LEARN & COLLABORATE</div>
          <h1>Curious mind.<br/><span>Building things</span><br/>for the real world<span className="accent">.</span></h1>
          <p className="hero-intro">Hey, I’m Rudheer — a student and aspiring developer who enjoys turning ideas into useful, thoughtful digital experiences.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <ArrowDownRight size={17}/></a><a className="button button-quiet" href={`mailto:${EMAIL}`}>Get in touch <ArrowUpRight size={16}/></a></div>
          <div className="hero-meta"><span><Code2 size={15}/> Learning by building</span><span><Layers3 size={15}/> UI · Web · Ideas</span></div>
        </div>
        <div className="hero-art" aria-label="Abstract decorative graphic">
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
          <div className="art-core"><span>R<span className="accent">.</span></span><small>MAKE IT<br/>MEAN SOMETHING</small></div>
          <div className="floating-card card-top"><span className="tiny-icon"><Sparkles size={15}/></span><span>Always curious<small>Learning in progress</small></span></div>
          <div className="floating-card card-bottom"><span className="code-symbol">&lt;/&gt;</span><span>From idea to interface<small>One iteration at a time</small></span></div>
          <span className="art-index">FIG. 001 — PERSONAL EXPLORATION</span>
        </div>
        <a className="scroll-cue" href="#about"><span className="scroll-line"/> SCROLL TO EXPLORE</a>
      </section>

      <section className="section wrap about-section" id="about">
        <div className="section-label"><span>01</span> / ABOUT</div>
        <div className="about-grid"><h2>Learning the craft.<br/><span>Making it useful.</span></h2><div className="about-copy"><p>I’m interested in the space where technology meets people: interfaces that feel clear, tools that solve everyday problems, and projects that teach me something new.</p><p>I’m building my foundation across web development, programming, and UI/UX fundamentals. This portfolio is a living snapshot of that journey—not a claim to have mastered it all.</p><div className="text-link-row"><a className="text-link" href="https://github.com/Rudheer09" target="_blank" rel="noreferrer">Explore GitHub <ArrowUpRight size={15}/></a><a className="text-link" href="https://www.linkedin.com/in/rudheer-kudupudi-7837b241b" target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={15}/></a></div></div></div>
      </section>

      <section className="section wrap skills-section" id="skills">
        <div className="section-label"><span>02</span> / TOOLKIT</div>
        <div className="skills-heading"><h2>Tools I’m using<br/><span>to grow.</span></h2><p>A practical foundation, built one concept and one project at a time.</p></div>
        <div className="skill-list">{skills.map((skill, i) => <div className="skill-chip" key={skill}><span className="skill-number">{String(i + 1).padStart(2, '0')}</span><span>{skill}</span></div>)}</div>
      </section>

      <section className="section wrap work-section" id="work">
        <div className="section-label"><span>03</span> / SELECTED WORK</div>
        <div className="work-heading"><h2>Ideas in progress<span className="accent">.</span></h2><p>A few projects and concepts that reflect what I’m exploring right now.</p></div>
        <div className="project-grid">{projects.map(project => <a className={`project-card ${project.color}`} key={project.n} href={project.url} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} repository on GitHub`}>
          <div className="project-top"><span>{project.n} / {project.type}</span><span className="project-arrow"><ArrowUpRight size={19}/></span></div>
          <div className="project-art"><span className="project-art-label">{project.mark}</span><div className="art-lines"><i/><i/><i/></div><span className="art-square"/></div>
          <div className="project-info"><h3>{project.title}</h3><p>{project.desc}</p><div className="tag-row">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div></div>
        </a>)}</div>
        <p className="project-note"><span className="note-star">✳</span> Select any project to open its GitHub repository in a new tab.</p>
      </section>

      <section className="section wrap contact-section" id="contact">
        <div className="section-label"><span>04</span> / CONTACT</div>
        <div className="contact-heading"><h2>Have an idea?<br/><span>Let’s make it real.</span></h2><p>I’m open to learning opportunities, meaningful collaborations, and conversations about technology. Send me a message using the form below.</p></div>
        <div className="contact-panel">
          <div className="contact-left"><div className="contact-form-intro"><Mail size={19}/><span>Send a message<small>Fields marked * are required.</small></span></div>
            <form className="contact-form" onSubmit={submitContact}>
              <div className="form-row">
                <label>Your name *<input name="name" value={form.name} onChange={updateForm} autoComplete="name" required maxLength={100} placeholder="Jane Smith" /></label>
                <label>Your email *<input name="email" type="email" value={form.email} onChange={updateForm} autoComplete="email" required maxLength={254} placeholder="jane@example.com" /></label>
              </div>
              <label>Subject<input name="subject" value={form.subject} onChange={updateForm} maxLength={150} placeholder="What would you like to discuss?" /></label>
              <label>Message *<textarea name="message" value={form.message} onChange={updateForm} required minLength={10} maxLength={5000} rows={5} placeholder="Write your message here..." /></label>
              <div className="form-submit-row"><button className="button button-primary" type="submit" disabled={sending}>{sending ? 'Sending…' : 'Send message'} <ArrowUpRight size={16}/></button><span className="form-privacy">Opens your email app so you can send the message.</span></div>
              {formStatus.message && <p className={`form-status ${formStatus.type}`} role="status" aria-live="polite">{formStatus.message}</p>}
            </form>
          </div>
          <aside className="contact-right"><div className="contact-monogram">R<span>.</span></div><p>LET’S BUILD SOMETHING USEFUL.</p><div className="contact-details"><span>Email</span><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div><div className="social-links"><a href="https://github.com/Rudheer09" target="_blank" rel="noreferrer">GitHub <ExternalLink size={14}/></a><a href="https://www.linkedin.com/in/rudheer-kudupudi-7837b241b" target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={14}/></a></div><button className="button button-copy" onClick={copyEmail}>{copied ? <Check size={16}/> : <Copy size={16}/>} {copied ? 'Email copied!' : 'Copy email address'}</button></aside>
        </div>
      </section>
    </main>
    <footer className="footer wrap"><a className="footer-brand" href="#home">R<span>.</span></a><span>DESIGNED & BUILT BY RUDHEER KUDUPUDI</span><a href="#home">BACK TO TOP ↑</a><span>© {new Date().getFullYear()}</span></footer>
  </>
}

export default App
