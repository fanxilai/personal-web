import { useMemo, useRef } from "react";
import CapabilityGrid from "./components/CapabilityGrid";
import ProjectShowcase from "./components/ProjectShowcase";
import SectionHeading from "./components/SectionHeading";
import { capabilities, profile, projects } from "./data/portfolio";
import usePortfolioAnimations from "./hooks/usePortfolioAnimations";

const navItems = [
  { label: "个人简介", href: "#profile" },
  { label: "研究与实践", href: "#projects" },
  { label: "个人能力", href: "#capabilities" },
  { label: "联系方式", href: "#contact" },
];

function Header() {
  return (
    <header className="site-header" aria-label="主导航">
      <div className="utility-bar">
        <span>北京交通大学 · 交通运输学院</span>
        <span>Undergraduate Portfolio</span>
        <a href={`mailto:${profile.email}`}>{profile.email}</a>
      </div>

      <div className="masthead">
        <a className="brand" href="#hero" aria-label="返回首页">
          <span className="brand-mark">FXL</span>
          <span className="brand-name">{profile.englishName}</span>
          <small>{profile.title}</small>
        </a>
      </div>

      <nav className="primary-nav">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  const featuredProject = projects[0];

  return (
    <section className="editorial-hero" id="hero">
      <div className="section-shell">
        <div className="hero-intro">
          <div className="hero-kicker">
            <span>{profile.englishName}</span>
            <span>{profile.period}</span>
          </div>
          <h1>
            {profile.name}
            <span>交通运输本科阶段作品集</span>
          </h1>
          <div className="hero-intro-footer">
            <p>{profile.subtitle}</p>
            <p>{profile.summary}</p>
          </div>
        </div>

        <div className="hero-feature-grid">
          <div className="hero-media">
            <video src={profile.heroVideo} autoPlay muted loop playsInline preload="metadata" />
            <div className="hero-feature-caption">
              <span>Featured Research</span>
              <strong>{featuredProject.title}</strong>
              <a href="#projects">查看项目</a>
            </div>
          </div>

          <aside className="hero-directory">
            <div>
              <span className="directory-label">Research Interests</span>
              <h2>研究方向</h2>
              <ul>
                {profile.researchInterests.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <dl>
              <div>
                <dt>学校</dt>
                <dd>{profile.school}</dd>
              </div>
              <div>
                <dt>专业</dt>
                <dd>{profile.major}</dd>
              </div>
              <div>
                <dt>方向</dt>
                <dd>{profile.direction}</dd>
              </div>
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}

function ProfileSection() {
  return (
    <section className="section profile-section motion-section" id="profile">
      <div className="section-shell">
        <SectionHeading
          index="01"
          eyebrow="Profile"
          title="本科阶段学习与研究经历"
        />

        <div className="profile-editorial-grid">
          <article className="profile-narrative motion-item">
            <span className="content-label">学习与研究</span>
            <h3>{profile.name}</h3>
            <p>{profile.summary}</p>
            <p>{profile.statement}</p>
            <div className="contact-lines">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>{profile.phone}</a>
            </div>
          </article>

          <div className="profile-stats motion-item">
            {profile.stats.map((item) => (
              <div key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>

          <div className="profile-notes motion-item">
            <span className="content-label">Selected Experience</span>
            <ul>
              {profile.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="methods-index motion-item">
          <span className="content-label">Methods & Tools</span>
          <div>
            {profile.methods.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const featuredProjects = useMemo(() => projects.filter((item) => item.level === "featured"), []);
  const compactProjects = useMemo(() => projects.filter((item) => item.level === "compact"), []);

  return (
    <section className="section projects-section motion-section" id="projects">
      <div className="section-shell">
        <SectionHeading index="02" eyebrow="Selected Work" title="本科阶段研究与实践方向" />

        <div className="featured-projects">
          {featuredProjects.map((project, index) => (
            <ProjectShowcase key={project.slug} project={project} index={index + 1} />
          ))}
        </div>

        <div className="compact-projects">
          {compactProjects.map((project, index) => (
            <ProjectShowcase key={project.slug} project={project} index={featuredProjects.length + index + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  return (
    <section className="section capabilities-section motion-section" id="capabilities">
      <div className="section-shell">
        <SectionHeading index="03" eyebrow="Capabilities" title="个人能力模块" />
        <CapabilityGrid items={capabilities} />
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact-section motion-section" id="contact">
      <div className="section-shell">
        <SectionHeading index="04" eyebrow="Contact" title="希望在交通运输领域继续深入学习与研究。" />
        <div className="contact-directory motion-item">
          <p>{profile.subtitle}</p>
          <div>
            <span>Email</span>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </div>
          <div>
            <span>Phone</span>
            <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>{profile.phone}</a>
          </div>
        </div>
        <footer className="site-footer">
          <span>© 2026 {profile.name}</span>
          <a href="#hero">返回顶部 ↑</a>
        </footer>
      </div>
    </section>
  );
}

function App() {
  const appRef = useRef(null);
  usePortfolioAnimations(appRef);

  return (
    <div className="app-root" ref={appRef}>
      <Header />
      <main>
        <Hero />
        <ProfileSection />
        <ProjectsSection />
        <CapabilitiesSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
