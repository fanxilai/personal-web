import { useMemo, useRef } from "react";
import BorderGlow from "./components/BorderGlow";
import CapabilityGrid from "./components/CapabilityGrid";
import DotField from "./components/DotField";
import ProjectShowcase from "./components/ProjectShowcase";
import SectionHeading from "./components/SectionHeading";
import { capabilities, profile, projects } from "./data/portfolio";
import usePortfolioAnimations from "./hooks/usePortfolioAnimations";

const navItems = [
  { label: "简介", href: "#profile" },
  { label: "项目", href: "#projects" },
  { label: "能力", href: "#capabilities" },
  { label: "联系", href: "#contact" },
];

function Header() {
  return (
    <header className="site-header" aria-label="主导航">
      <a className="brand" href="#hero" aria-label="返回首页">
        <span className="brand-mark">FXL</span>
        <div className="brand-copy">
          <strong>{profile.name}</strong>
          <span>{profile.title}</span>
        </div>
      </a>
      <nav>
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="header-contact" href={`mailto:${profile.email}`}>
        联系我
      </a>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="hero">
      <video className="hero-video" src={profile.heroVideo} autoPlay muted loop playsInline preload="metadata" />
      <div className="hero-overlay" />
      <Header />
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-name">{profile.englishName}</p>
          <h1 className="hero-title">{profile.name}本科阶段作品集</h1>
          <p className="hero-subtitle">{profile.subtitle}</p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-interest-row">
            {profile.researchInterests.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              查看精选项目
            </a>
            <a className="ghost-button" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
        </div>

        <BorderGlow className="hero-meta-panel" backgroundColor="#161f2a" borderRadius={28} animated>
          <div className="hero-meta-panel-inner">
            <span className="panel-label">Academic Profile</span>
            <strong>{profile.title}</strong>
            <dl>
              <div>
                <dt>学校</dt>
                <dd>{profile.school}</dd>
              </div>
              <div>
                <dt>学院</dt>
                <dd>{profile.college}</dd>
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
          </div>
        </BorderGlow>
      </div>
      <a className="scroll-cue" href="#profile">
        <span />
        向下浏览
      </a>
    </section>
  );
}

function ProfileSection() {
  return (
    <section className="section profile-section motion-section" id="profile">
      <div className="section-shell">
        <SectionHeading
          index="01"
          marquee="PROFILE"
          eyebrow="个人简介"
          title="以交通运输问题为线索，系统整理本科阶段的课程训练、研究参与与项目经验。"
          lead="页面表达更偏个人研究主页而不是模板化简历，重点展示研究兴趣、训练路径和已完成的项目积累。"
          wide
        />

        <div className="profile-layout">
          <BorderGlow className="profile-card intro-card motion-card" backgroundColor="#161f2a" borderRadius={28}>
            <div className="profile-card-inner">
              <p className="profile-label">{profile.period}</p>
              <h3>{profile.name}</h3>
              <p>{profile.summary}</p>
              <p>{profile.statement}</p>
              <div className="contact-lines">
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
                <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>{profile.phone}</a>
              </div>
            </div>
          </BorderGlow>

          <BorderGlow className="profile-card stats-card motion-card" backgroundColor="#171f29" borderRadius={28}>
            <div className="stats-grid">
              {profile.stats.map((item) => (
                <div key={item.label}>
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </BorderGlow>

          <BorderGlow className="profile-card highlights-card motion-card" backgroundColor="#18212d" borderRadius={28}>
            <div className="profile-card-inner">
              <span className="card-mini-title">Research Notes</span>
              <ul>
                {profile.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </BorderGlow>

          <BorderGlow className="profile-card methods-card motion-card" backgroundColor="#17202b" borderRadius={28}>
            <div className="profile-card-inner">
              <span className="card-mini-title">Methods & Tools</span>
              <div className="method-tags">
                {profile.methods.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
          </BorderGlow>
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
        <SectionHeading
          index="02"
          marquee="PROJECTS"
          eyebrow="精选项目"
          title="以研究问题、方法路径与个人承担内容为主线，展示本科阶段最具代表性的项目工作。"
          lead="前两项作为重点展示，后两项用更紧凑的方式补充方法训练与建模基础。"
          wide
        />

        <div className="featured-projects">
          {featuredProjects.map((project) => (
            <ProjectShowcase key={project.slug} project={project} />
          ))}
        </div>

        <div className="compact-projects">
          {compactProjects.map((project) => (
            <ProjectShowcase key={project.slug} project={project} />
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
        <SectionHeading
          index="03"
          marquee="CAPABILITIES"
          eyebrow="研究能力"
          title="把能力拆解为课程基础、建模方法、程序实现、资料整理与学术表达，而不是普通的“个人优势”列表。"
          lead="页面气质更偏高端个人站，但内容表达仍然保持研究训练导向。"
          wide
        />
        <CapabilityGrid items={capabilities} />
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact-section motion-section" id="contact">
      <div className="section-shell contact-shell">
        <div className="contact-copy">
          <div className="section-marquee contact-marquee" aria-hidden="true">
            CONTACT
          </div>
          <span className="section-index">04 / 联系方式</span>
          <h2>期待继续在交通运输领域接受更系统的研究训练，并围绕运输组织、优化与数据分析展开深入学习。</h2>
        </div>

        <BorderGlow className="contact-panel motion-card" backgroundColor="#17202b" borderRadius={30}>
          <div className="contact-panel-inner">
            <p>{profile.subtitle}</p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>{profile.phone}</a>
          </div>
        </BorderGlow>
      </div>
    </section>
  );
}

function App() {
  const appRef = useRef(null);
  usePortfolioAnimations(appRef);

  return (
    <div className="app-root" ref={appRef}>
      <div className="opening-curtain" aria-hidden="true" />
      <Hero />
      <main className="content-below-hero">
        <DotField
          className="below-hero-dotfield"
          dotRadius={1.35}
          dotSpacing={19}
          cursorRadius={420}
          bulgeStrength={42}
          glowRadius={150}
          gradientFrom="rgba(176, 206, 241, 0.2)"
          gradientTo="rgba(139, 196, 255, 0.1)"
          glowColor="#9dc4f4"
        />
        <ProfileSection />
        <ProjectsSection />
        <CapabilitiesSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
