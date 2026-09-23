import { useState, type PointerEvent } from "react";
import { usePageMotion } from "./hooks/usePageMotion";
import {
  ArrowUpRight,
  ArrowDown,
  Github,
  Linkedin,
  Menu,
  X,
  Download,
  Check,
  GitBranch,
  ShieldCheck,
} from "lucide-react";
import { projects } from "./data/projects";
import { experiences } from "./data/experience";

const links = [
  ["Work", "#projects"],
  ["Experience", "#experience"],
  ["About", "#about"],
  ["Contact", "#contact"],
];
const stack = [
  ["Interfaces", "React, Next.js, TypeScript, JavaScript, Redux, HTML & CSS"],
  [
    "Services & data",
    "Node.js, Express, FastAPI, Python, MongoDB, PostgreSQL, Redis, BullMQ",
  ],
  [
    "AI & integrations",
    "MCP, RAG, pgvector, OpenAI, Claude, Stripe, Nylas, Webhooks",
  ],
  [
    "Delivery & infrastructure",
    "AWS, Docker, CI/CD, Git, Jenkins, testing, migrations & runbooks",
  ],
];

function tilt(event: PointerEvent<HTMLDivElement>) {
  if (
    event.pointerType !== "mouse" ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
    return;
  const rect = event.currentTarget.getBoundingClientRect();
  event.currentTarget.style.setProperty(
    "--tilt-x",
    `${((event.clientY - rect.top) / rect.height - 0.5) * -5}deg`,
  );
  event.currentTarget.style.setProperty(
    "--tilt-y",
    `${((event.clientX - rect.left) / rect.width - 0.5) * 5}deg`,
  );
}
function resetTilt(event: PointerEvent<HTMLDivElement>) {
  event.currentTarget.style.setProperty("--tilt-x", "0deg");
  event.currentTarget.style.setProperty("--tilt-y", "0deg");
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showAll, setShowAll] = useState(false);
  usePageMotion(showAll);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);
  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Ranga Sashank home">
          rs<span>.</span>
        </a>
        <nav
          aria-label="Main navigation"
          className={menuOpen ? "navigation is-open" : "navigation"}
        >
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <a className="header-contact" href="mailto:grsashank2003@gmail.com">
          Let’s talk <ArrowUpRight size={16} />
        </a>
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>
      <main id="main">
        <section className="hero wrap" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" /> BASED IN BRITISH COLUMBIA, CANADA
            </p>
            <h1>
              Real problems.
              <br />
              Thoughtful software<span className="orange">.</span>
            </h1>
            <div className="hero-intro">
              <span className="intro-line" />
              <div>
                <p className="name">I’m Ranga Sashank Gurram.</p>
                <h2>
                  Forward Deployed Engineer
                  <br />& Full Stack Developer.
                </h2>
              </div>
            </div>
            <p className="hero-description">
              I work with people to understand what they need, then build the
              systems that make it happen. Currently delivering client solutions
              and shipping full-stack products at Meaningful.
            </p>
            <div className="actions">
              <a className="button dark" href="#projects">
                Explore my work <ArrowDown size={17} />
              </a>
              <a className="text-link" href="#contact">
                Get in touch <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
          <div
            className="portrait-block"
            onPointerMove={tilt}
            onPointerLeave={resetTilt}
            onPointerCancel={resetTilt}
          >
            <svg
              className="portrait-orbit"
              viewBox="0 0 120 120"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="60" cy="60" r="47" />
              <ellipse
                cx="60"
                cy="60"
                rx="22"
                ry="47"
                transform="rotate(35 60 60)"
              />
              <path d="M12 60h96M60 12v96" />
              <circle className="orbit-point" cx="100" cy="35" r="5" />
            </svg>
            <div className="portrait-frame">
              <img
                src="/profile-pic.jpg"
                alt="Ranga Sashank Gurram"
                fetchPriority="high"
              />
              <span className="photo-index">
                01 / THE PERSON BEHIND THE CODE
              </span>
            </div>
            <div className="portrait-caption">
              <span>
                <span className="status-dot" /> Currently at Meaningful
              </span>
              <span>Victoria / Vancouver</span>
            </div>
          </div>
          <div className="hero-foot">
            <span>FROM DISCOVERY TO DEPLOYMENT</span>
            <span>
              Client delivery <i /> Full-stack systems <i /> Applied AI
            </span>
            <a href="#projects" aria-label="Scroll to selected work">
              <ArrowDown size={18} />
            </a>
          </div>
        </section>

        <section className="work-section" id="projects">
          <div className="wrap section-inner">
            <div className="section-heading">
              <div>
                <p className="eyebrow">01 / SELECTED WORK</p>
                <h2>Built to do something useful.</h2>
              </div>
              <p>
                Projects in release engineering, agent security,
                <br className="desktop-break" /> and software that connects
                people.
              </p>
            </div>
            <div className="project-grid">
              {visibleProjects.map((project, index) => (
                <article className="project" key={project.id}>
                  <div
                    className={`project-visual visual-${project.id}`}
                    onPointerMove={tilt}
                    onPointerLeave={resetTilt}
                    onPointerCancel={resetTilt}
                  >
                    {project.id === "releasepilot" ? (
                      <div className="product-art">
                        <div className="art-top">
                          <GitBranch size={19} />
                          <span>ReleasePilot</span>
                          <span className="art-label">RELEASE READINESS</span>
                        </div>
                        <div className="release-decision">
                          <span className="decision-icon">
                            <Check size={26} />
                          </span>
                          <div>
                            <small>EVIDENCE → DECISION</small>
                            <strong>Ready when the evidence is.</strong>
                          </div>
                        </div>
                        <div className="pipeline">
                          <span>PR + CI</span>
                          <span>Runbooks</span>
                          <span>
                            Risk report <ArrowUpRight size={14} />
                          </span>
                        </div>
                        <div className="art-bottom">
                          <span>GO</span>
                          <span>CAUTION</span>
                          <span>NO_GO</span>
                          <small>Deterministic policy guardrails</small>
                        </div>
                      </div>
                    ) : project.id === "keytrace" ? (
                      <div className="product-art key-art">
                        <div className="art-top">
                          <ShieldCheck size={20} />
                          <span>KeyTrace</span>
                          <span className="art-label">AGENT SECURITY</span>
                        </div>
                        <div className="key-statement">
                          Every action.
                          <br />A verifiable decision.
                        </div>
                        <div className="trace-flow">
                          <span>Agent</span>
                          <span>→</span>
                          <span className="gateway">Go + Rust</span>
                          <span>→</span>
                          <span>Audit log</span>
                        </div>
                        <div className="key-bottom">
                          <span className="status-dot" /> Verify identity.
                          Enforce policy. Record the decision.
                        </div>
                      </div>
                    ) : (
                      <img
                        src={project.image}
                        alt={`${project.title} project preview`}
                        loading="lazy"
                      />
                    )}
                    <span className="project-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="project-body">
                    <div className="project-title">
                      <h3>{project.title}</h3>
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`View ${project.title} on GitHub`}
                        >
                          <ArrowUpRight size={24} />
                        </a>
                      )}
                    </div>
                    <p>{project.description}</p>
                    <div className="tags">
                      {project.techStack.slice(0, 6).map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Source code <Github size={15} />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View project <ArrowUpRight size={15} />
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <button
              className="button outline more-projects"
              onClick={() => setShowAll(!showAll)}
              aria-expanded={showAll}
            >
              {showAll
                ? "Show selected work"
                : `More projects (${projects.length - 4})`}{" "}
              {showAll ? <ArrowUpRight size={16} /> : <ArrowDown size={16} />}
            </button>
          </div>
        </section>

        <section
          className="wrap section-inner experience-section"
          id="experience"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / EXPERIENCE</p>
              <h2>
                Close to the problem.
                <br />
                Responsible for the solution.
              </h2>
            </div>
            <p>
              From stakeholder conversations to production.
              <br className="desktop-break" /> Ownership across the whole
              delivery cycle.
            </p>
          </div>
          <div className="experience-list">
            {experiences.map((exp) => (
              <article className="experience" key={exp.id}>
                <div className="experience-meta">
                  <span className="period">{exp.period}</span>
                  <h3>{exp.company}</h3>
                  <span>{exp.location}</span>
                </div>
                <div className="experience-content">
                  <h4>{exp.role}</h4>
                  <ul>
                    {exp.description.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="tags">
                    {exp.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section" id="about">
          <div className="wrap section-inner about-grid">
            <div>
              <p className="eyebrow">03 / A LITTLE ABOUT ME</p>
              <h2>
                I like making
                <br />
                complex things
                <br />
                <em>work for people.</em>
              </h2>
              <p className="about-description">
                I’m a University of Victoria Computer Science graduate
                specializing in Software Systems. My work brings together client
                discovery, full-stack development, and careful production
                delivery.
              </p>
              <p className="about-description">
                I care about the parts beyond a working demo: clear interfaces,
                reliable data, secure boundaries, and documentation that helps
                the next person.
              </p>
              <div className="education">
                <strong>BSc Computer Science · University of Victoria</strong>
                <span>Software Systems · August 2026</span>
                <span>
                  Runner-up, 2025 Engineering & Computer Science Co-op Student
                  of the Year
                </span>
              </div>
              <div className="resume-links">
                <a
                  href="/resumes/Ranga_Sashank_Gurram_Forward_Deployed_Engineer_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  FDE resume <Download size={16} />
                </a>
                <a
                  href="/resumes/Ranga_Sashank_Gurram_Full_Stack_Developer_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                >
                  Full-stack resume <Download size={16} />
                </a>
              </div>
            </div>
            <div className="toolkit">
              <p className="eyebrow">WHAT I WORK WITH</p>
              {stack.map(([title, tools], index) => (
                <div className="toolkit-row" key={title}>
                  <span>0{index + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{tools}</p>
                  </div>
                </div>
              ))}
              <div className="working-note">
                <span className="orange">↳</span> Understand the workflow. Build
                with care. See it through.
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="wrap contact-section">
          <p className="eyebrow">04 / NEXT CONVERSATION</p>
          <h2>
            Have a problem
            <br />
            worth solving<span className="orange">?</span>
          </h2>
          <div className="contact-bottom">
            <p>
              Let’s talk about your team, your product,
              <br />
              or something you’re trying to build.
            </p>
            <a className="contact-email" href="mailto:grsashank2003@gmail.com">
              grsashank2003@gmail.com <ArrowUpRight />
            </a>
          </div>
        </section>
      </main>
      <footer className="wrap">
        <a className="wordmark" href="#home">
          rs<span>.</span>
        </a>
        <span>© {new Date().getFullYear()} Ranga Sashank Gurram</span>
        <div>
          <a
            href="https://github.com/rangasashank"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={16} /> GitHub
          </a>
          <a
            href="https://linkedin.com/in/ranga-sashank-gurram-2028701a6"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
export default App;
