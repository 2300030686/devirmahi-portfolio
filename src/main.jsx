import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Download,
  Menu,
  X,
  ExternalLink,
  Cloud,
  Database,
  Code2,
  Container,
  Award,
  Terminal,
} from "lucide-react";
import "./styles.css";

const profile = {
  name: "TIRUMANISETTY DEVIR MAHI",
  shortName: "Devir Mahi",
  email: "2300030686cse@gmail.com",
  phone: "6281759570",
  github: "https://github.com/2300030686",
  linkedin: "https://www.linkedin.com/in/mahi-042179361/",
};

const skills = [
  {
    icon: Code2,
    title: "Programming",
    items: ["C", "Java", "Python", "SQL"],
  },
  {
    icon: Terminal,
    title: "Web & Application",
    items: ["HTML", "CSS", "JavaScript", "Flask"],
  },
  {
    icon: Container,
    title: "Cloud Native",
    items: ["Kubernetes", "Docker", "Velero", "YAML"],
  },
  {
    icon: Cloud,
    title: "Cloud",
    items: [
      "AWS Basics",
      "Oracle Cloud Infrastructure",
      "Cloud Computing",
    ],
  },
  {
    icon: Database,
    title: "Databases",
    items: ["MongoDB", "SQLite"],
  },
];

const projects = [
  {
    number: "01",
    title: "Kubernetes Backup, Restore & Migration",
    description:
      "An application-level Kubernetes backup and restore solution designed around disaster recovery and cross-cluster migration of cloud-native workloads.",
    stack: [
      "Kubernetes",
      "Velero",
      "Docker",
      "Python",
      "Flask",
      "YAML",
      "AWS",
    ],
    featured: true,
    github:
      "https://github.com/2300030686/kubernetes-backup-restore-migration",
  },
  {
    number: "02",
    title: "AI-Powered Pet Adoption Portal",
    description:
      "A cloud-based pet adoption platform with pet listings, user registration, adoption request management, and AWS deployment.",
    stack: [
      "HTML",
      "CSS",
      "JavaScript",
      "Python/Flask",
      "MongoDB",
      "AWS",
      "AI",
    ],
    featured: true,
    github: "https://github.com/2300030686/AI_Powered-Pet-Adoption-Portal.git",
  },
  {
    
  number: "03",
  title: "Event Management Full-Stack",
  description:
    "A full-stack event management application designed to streamline event creation, management, and user interaction through a modern web application.",
  stack: [
    "HTML",
    "CSS",
    "JavaScript",
    "Full Stack",
    "Web Development",
  ],
  featured: true,
  github: "https://github.com/2300030686/event-management-fullstack.git",

  },
];

const certifications = [
  {
  title: "Microsoft Certified: Azure Fundamentals",
  issuer: "MICROSOFT",
  link:
    "https://learn.microsoft.com/en-us/users/tirumanisettydevirmahi-8287/credentials/d0ed863fe840846e",
  },
  {
    title: "MongoDB Associate Developer",
    issuer: "MongoDB",
    link:
      "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/4bae4a8d-700c-478f-aa69-3b4ef8f7723c-tirumani-setty-devir-mahi-7a547c9e-6e72-4c72-9b6f-28dc8e1503b0-certificate.pdf",
  },
  {
    title: "Automation Anywhere",
    issuer: "AUTOMATION ANYWHERE",
    link:
      "https://certificates.automationanywhere.com/f205f295-39e4-471e-ae76-72ac2f69f6f7",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Architect Associate",
    issuer: "ORACLE",
    link:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=DC16E4EF84C5D1FBCA55BF4CADAA4F67FE7F4A8F87064534E79F78E28CC5F859",
  },
  {
    title: "Oracle Redwood Application 2025 Developer Associate",
    issuer: "ORACLE",
    link:
      "https://catalog-education.oracle.com/pls/certview/sharebadge?id=815382E4DA2669D1F6CC2A469F1D894A5F4481E67C3CE137CCBB128646F747BD",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site">

      {/* NAVBAR */}
      <header
        className={`navbar ${
          scrolled ? "navbar-scrolled" : ""
        }`}
      >
        <a
          className="brand"
          href="#home"
          onClick={closeMenu}
        >
          <span className="brand-mark">DM</span>
          <span>DEVIR MAHI</span>
        </a>

        <nav
          className={
            menuOpen ? "nav-links open" : "nav-links"
          }
        >
          {[
            "About",
            "Skills",
            "Projects",
            "Certifications",
            "Education",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={closeMenu}
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="nav-actions">

          <a
            className="icon-link desktop-only"
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <Github size={19} />
          </a>

          <a
            className="icon-link desktop-only"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={19} />
          </a>

          <a
            className="resume-button desktop-only"
            href="/resume.pdf"
            download
          >
            Resume
            <Download size={16} />
          </a>

          <button
            className="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>

        </div>
      </header>

      <main>

        {/* HERO */}
        <section id="home" className="hero section">
          <div className="hero-grid">

            <div className="hero-copy">

              <div className="eyebrow">
                <span className="status-dot"></span>
                OPEN TO OPPORTUNITIES
              </div>

              <h1>
                Building reliable
                <br />
                <span>cloud-native</span> software.
              </h1>

              <p className="hero-text">
                I'm <strong>TIRUMANISETTY DEVIR MAHI</strong>,
                a Computer Science undergraduate specializing in
                Cloud Native Software Engineering. I enjoy turning
                ideas into practical applications and learning
                modern technologies.
              </p>

              <div className="hero-buttons">

                <a
                  className="primary-button"
                  href="#projects"
                >
                  Explore my work
                  <ArrowUpRight size={18} />
                </a>

                <a
                  className="secondary-button"
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  Connect on LinkedIn
                </a>

              </div>

              <div className="quick-links">

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={17} />
                  GitHub
                </a>

                <a href={`mailto:${profile.email}`}>
                  <Mail size={17} />
                  Email me
                </a>

              </div>

            </div>

            <div className="hero-visual">

              <div className="orb orb-one"></div>
              <div className="orb orb-two"></div>

              <div className="code-card">

                <div className="window-bar">
                  <span></span>
                  <span></span>
                  <span></span>
                  <em>cloud-native.yml</em>
                </div>

                <pre>
                  <code>
                    <span className="code-muted">
                      apiVersion:
                    </span>{" "}
                    apps/v1
                    {"\n"}
                    <span className="code-muted">
                      kind:
                    </span>{" "}
                    Deployment
                    {"\n"}
                    <span className="code-muted">
                      metadata:
                    </span>
                    {"\n"}{"  "}
                    <span className="code-muted">
                      name:
                    </span>{" "}
                    recovery-app
                    {"\n"}
                    <span className="code-muted">
                      spec:
                    </span>
                    {"\n"}{"  "}
                    <span className="code-muted">
                      replicas:
                    </span>{" "}
                    3
                    {"\n"}{"  "}
                    <span className="code-muted">
                      strategy:
                    </span>{" "}
                    resilient
                    {"\n"}{"  "}
                    <span className="code-accent">
                      backup:
                    </span>{" "}
                    velero
                    {"\n"}{"  "}
                    <span className="code-accent">
                      migration:
                    </span>{" "}
                    enabled
                  </code>
                </pre>

                <div className="code-footer">
                  <span>●</span>
                  Kubernetes workflow ready
                </div>

              </div>

              <div className="floating-card">
                <Cloud size={19} />

                <div>
                  <small>FOCUS</small>
                  <strong>Cloud Native</strong>
                </div>
              </div>

            </div>

          </div>

          <div className="scroll-cue">
            SCROLL TO EXPLORE
            <span></span>
          </div>

        </section>

        {/* ABOUT */}
        <section id="about" className="section section-light">

          <div className="section-heading">

            <div className="section-kicker">
              01 — ABOUT
            </div>

            <h2>
              Curious by nature.
              <br />
              <span>Practical by design.</span>
            </h2>

          </div>

          <div className="about-grid">

            <div className="about-lead">

              <p className="large-copy">
                I'm a motivated Computer Science undergraduate
                with a strong foundation in Python, Java, SQL,
                cloud technologies, and application development.
              </p>

              <p>
                I’m passionate about emerging technologies and
                continuous learning. My approach combines
                problem-solving, teamwork, adaptability, and
                hands-on project work.
              </p>

            </div>

            <div className="about-facts">

              <div>
                <span>EDUCATION</span>
                <strong>B.Tech — KL University</strong>
                <small>
                  Cloud Native Software Engineering
                </small>
              </div>

              <div>
                <span>CGPA</span>
                <strong>8.82</strong>
                <small>2023 — 2027</small>
              </div>

              <div>
                <span>LOCATION</span>
                <strong>India</strong>
                <small>
                  Open to technology opportunities
                </small>
              </div>

            </div>

          </div>

        </section>

        {/* SKILLS */}
        <section id="skills" className="section section-dark">

          <div className="section-heading light">

            <div className="section-kicker">
              02 — SKILLS
            </div>

            <h2>
              Tools I use to
              <br />
              <span>build and learn.</span>
            </h2>

          </div>

          <div className="skills-grid">

            {skills.map(
              ({ icon: Icon, title, items }) => (
                <article
                  className="skill-card"
                  key={title}
                >

                  <Icon size={23} />

                  <h3>{title}</h3>

                  <div className="tag-list">
                    {items.map((item) => (
                      <span key={item}>
                        {item}
                      </span>
                    ))}
                  </div>

                </article>
              )
            )}

          </div>

        </section>

        {/* PROJECTS */}
        <section
          id="projects"
          className="section section-light"
        >

          <div className="section-heading split">

            <div>

              <div className="section-kicker">
                03 — SELECTED WORK
              </div>

              <h2>
                Projects with
                <br />
                <span>purpose.</span>
              </h2>

            </div>

            <a
              className="text-link"
              href={profile.github}
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
              <ArrowUpRight size={17} />
            </a>

          </div>

          <div className="projects-list">

            {projects.map((project) => (

              <article
                className={`project-card ${
                  project.featured ? "featured" : ""
                }`}
                key={project.title}
              >

                <div className="project-number">
                  {project.number}
                </div>

                <div className="project-main">

                  <div className="project-title-row">

                    <h3>{project.title}</h3>

                    {project.featured && (
                      <span className="featured-badge">
                        FEATURED
                      </span>
                    )}

                  </div>

                  <p>{project.description}</p>

                  <div className="tag-list">

                    {project.stack.map((item) => (
                      <span key={item}>
                        {item}
                      </span>
                    ))}

                  </div>

                </div>

                <a
                  className="project-arrow"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.title}`}
                >
                  <ExternalLink size={20} />
                </a>

              </article>

            ))}

          </div>

        </section>

        {/* CERTIFICATIONS */}
        <section
          id="certifications"
          className="section section-light alt"
        >

          <div className="section-heading">

            <div className="section-kicker">
              04 — CERTIFICATIONS
            </div>

            <h2>
              Credentials that
              <br />
              <span>keep me moving.</span>
            </h2>

          </div>

          <div className="cert-grid">

            {certifications.map((cert, i) => (

              <a
                className="cert-card"
                key={cert.title}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${cert.title} certificate`}
              >

                <div className="cert-icon">
                  <Award size={21} />
                </div>

                <span>
                  0{i + 1}
                </span>

                <h3>
                  {cert.title}
                </h3>

                <small>
                  View Certificate ↗
                </small>

              </a>

            ))}

          </div>

        </section>

        {/* EDUCATION */}
        <section
          id="education"
          className="section section-dark"
        >

          <div className="section-heading light">

            <div className="section-kicker">
              05 — EDUCATION
            </div>

            <h2>
              The foundation
              <br />
              <span>behind the work.</span>
            </h2>

          </div>

          <div className="education-timeline">

            <div className="timeline-item current">

              <div className="timeline-dot"></div>

              <div>

                <span>
                  2023 — 2027
                </span>

                <h3>
                  Bachelor of Technology (B.Tech)
                </h3>

                <p>
                  KL University · Cloud Native
                  Software Engineering
                </p>

                <strong>
                  CGPA 8.82
                </strong>

              </div>

            </div>

            <div className="timeline-item">

              <div className="timeline-dot"></div>

              <div>

                <span>
                  2021 — 2023
                </span>

                <h3>
                  Intermediate
                </h3>

                <p>
                  Sarada Educational Institutions
                </p>

                <strong>
                  868 / 1000
                </strong>

              </div>

            </div>

            <div className="timeline-item">

              <div className="timeline-dot"></div>

              <div>

                <span>
                  2021
                </span>

                <h3>
                  Secondary Education
                </h3>

                <p>
                  Subhodaya E.M School · State Board
                </p>

                <strong>
                  594 / 600
                </strong>

              </div>

            </div>

          </div>

        </section>

        {/* CONTACT */}
        <section
          id="contact"
          className="section contact-section"
        >

          <div className="contact-card">

            <div className="section-kicker">
              06 — CONTACT
            </div>

            <h2>
              Let's build something
              <br />
              <span>useful together.</span>
            </h2>

            <p>
              I'm open to internships, entry-level software
              opportunities, and conversations around
              cloud-native development.
            </p>

            <div className="contact-actions">

              <a
                className="primary-button"
                href={`mailto:${profile.email}`}
              >
                Send me an email
                <Mail size={18} />
              </a>

              <a
                className="secondary-button dark-button"
                href={profile.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={18} />
                GitHub
              </a>

              <a
                className="secondary-button dark-button"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={18} />
                LinkedIn
              </a>

            </div>

            <div className="contact-details">

              <span>
                {profile.email}
              </span>

              <span>
                {profile.phone}
              </span>

            </div>

          </div>

        </section>

      </main>

      {/* FOOTER */}
      <footer>

        <span>
          © {new Date().getFullYear()} TIRUMANISETTY DEVIR MAHI
        </span>

        <span>
          Built with React · Cloud Native mindset
        </span>

      </footer>

    </div>
  );
}

createRoot(
  document.getElementById("root")
).render(<App />);