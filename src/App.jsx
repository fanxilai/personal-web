import { useRef } from "react";
import BorderGlow from "./components/BorderGlow";
import Carousel, { CarouselIcon } from "./components/Carousel";
import DotField from "./components/DotField";
import { profile, projects, strengths } from "./data/portfolio";
import usePortfolioAnimations from "./hooks/usePortfolioAnimations";

const navItems = [
  { label: "经历", href: "#profile" },
  { label: "项目", href: "#projects" },
  { label: "能力", href: "#strengths" },
  { label: "联系", href: "#contact" },
];

function GlowCard({ as: Component = "div", className = "", children, animated = false }) {
  return (
    <BorderGlow className={`${className} motion-card`} animated={animated}>
      <Component className="glow-card-content">{children}</Component>
    </BorderGlow>
  );
}

function Header() {
  return (
    <header className="site-header" aria-label="主导航">
      <a className="brand" href="#hero" aria-label="返回首页">
        <span className="brand-mark">FXL</span>
        <span>{profile.name}</span>
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
      <div className="hero-shade" />
      <Header />
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="hero-context">{profile.title}</p>
          <h1 className="hero-title-compact">樊熙来本科阶段作品集</h1>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <a className="primary-button" href="#projects">
              查看科研项目
            </a>
            <a className="ghost-button" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
          </div>
        </div>
        <aside className="hero-panel" aria-label="教育背景摘要">
          <span className="panel-label">Education Profile</span>
          <strong>{profile.school}</strong>
          <dl>
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
        </aside>
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
        <div className="section-marquee" aria-hidden="true">
          PROFILE
        </div>
        <div className="section-heading">
          <span>01 / 教育背景与研究基础</span>
          <h2>交通运输专业本科阶段的课程基础、科研训练与项目经历。</h2>
        </div>
        <div className="profile-grid">
          <GlowCard className="profile-card main-profile" animated>
            <p className="profile-kicker">{profile.period}</p>
            <h3>{profile.name}</h3>
            <p>{profile.summary}</p>
            <div className="contact-lines">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>{profile.phone}</a>
            </div>
          </GlowCard>
          <GlowCard className="profile-card stat-board">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="stat-item">
                <strong>{stat.value}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </GlowCard>
          <GlowCard className="profile-card highlight-card">
            <h3>主要经历</h3>
            <ul>
              {profile.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </GlowCard>
          <GlowCard className="profile-card skill-strip">
            <h3>工具与方法</h3>
            <div>
              {profile.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
}

function ProjectVisual({ visual, title }) {
  if (visual.kind === "ho") {
    return (
      <div className="project-media media-collage">
        {visual.images.map((image, index) => (
          <figure key={image.alt} className={index === 0 ? "large-photo" : "small-photo"}>
            <img src={image.src} alt={image.alt} loading="lazy" />
            <figcaption>{image.alt}</figcaption>
          </figure>
        ))}
      </div>
    );
  }

  if (visual.kind === "wri") {
    return (
      <div className="project-media research-panel">
        <div className="panel-topline">交通低碳研究支持</div>
        <div className="research-grid">
          <div>
            <span>Policy Review</span>
            <strong>政策与路线图梳理</strong>
          </div>
          <div>
            <span>Data Work</span>
            <strong>资料清洗与指标整理</strong>
          </div>
          <div>
            <span>Translation</span>
            <strong>英文资料翻译</strong>
          </div>
        </div>
        <figure className="chart-inset">
          <img src={visual.chart} alt={`${title} 数据图表资料`} loading="lazy" />
        </figure>
      </div>
    );
  }

  if (visual.kind === "optimization") {
    return (
      <div className="project-media optimization-panel">
        <div className="panel-topline">Crew Scheduling Model</div>
        <div className="objective-box">
          <span>Objective</span>
          <strong>Minimize total crew cost</strong>
        </div>
        <div className="constraint-list">
          <span>ST / CO / CR</span>
          <span>HD</span>
          <span>Base Transfer</span>
          <span>Role Substitution</span>
          <span>Wage Balance</span>
        </div>
        <div className="case-table">
          {visual.cases.map((item) => (
            <div key={item.name}>
              <strong>{item.name}</strong>
              <span>Cost {item.cost}</span>
              <span>Check warnings {item.check}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="project-media modeling-panel">
      <div className="panel-topline">Mathematical Modeling Workflow</div>
      <div className="model-flow">
        {visual.steps.map((step, index) => (
          <div key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
          </div>
        ))}
      </div>
      <div className="formula-box">
        <span>Representative model</span>
        <strong>冰厚估计 + 承载力校核 + 安全范围计算</strong>
      </div>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <GlowCard className="project-card" as="article">
      <ProjectVisual visual={project.visual} title={project.title} />
      <div className="project-body">
        <div className="project-meta">
          <span>{project.type}</span>
          <span>{project.time}</span>
        </div>
        <h3>{project.title}</h3>
        <p className="project-accent">{project.accent}</p>
        <p>{project.description}</p>
        <ul>
          {project.contributions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <div className="metric-row">
          {project.metrics.map((metric) => (
            <div key={`${project.title}-${metric.label}`}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </GlowCard>
  );
}

function ProjectsSection() {
  return (
    <section className="section projects-section motion-section" id="projects">
      <div className="section-shell">
        <div className="section-marquee" aria-hidden="true">
          PROJECTS
        </div>
        <div className="section-heading wide">
          <span>02 / 科研、建模与交通研究经历</span>
          <h2>按研究问题、方法和个人工作展示本科阶段的主要项目。</h2>
        </div>
        <div className="projects-list">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StrengthsSection() {
  const strengthItems = strengths.map((item, index) => ({
    id: item.title,
    title: item.title,
    description: item.text,
    icon: <CarouselIcon value={String(index + 1).padStart(2, "0")} />,
  }));

  return (
    <section className="section strengths-section motion-section" id="strengths">
      <div className="section-shell">
        <div className="section-marquee" aria-hidden="true">
          CAPABILITIES
        </div>
        <div className="section-heading">
          <span>03 / 研究训练与方法能力</span>
          <h2>面向交通运输研究的课程基础、建模能力、程序实现和资料整理能力。</h2>
        </div>
        <div className="strength-carousel-stage">
          <Carousel
            items={strengthItems}
            baseWidth={560}
            autoplay
            autoplayDelay={3600}
            pauseOnHover
            loop
          />
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="contact-section motion-section" id="contact">
      <div className="section-shell contact-shell">
        <div>
          <div className="section-marquee contact-marquee" aria-hidden="true">
            CONTACT
          </div>
          <span className="section-index">04 / 联系方式</span>
          <h2>希望进一步交流交通运输方向的科研训练与研究生阶段学习规划。</h2>
        </div>
        <GlowCard className="contact-panel">
          <p>{profile.title}</p>
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}>{profile.phone}</a>
        </GlowCard>
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
          dotRadius={1.5}
          dotSpacing={18}
          cursorRadius={460}
          bulgeStrength={52}
          glowRadius={180}
          gradientFrom="rgba(85, 247, 236, 0.24)"
          gradientTo="rgba(133, 181, 60, 0.12)"
          glowColor="#55f7ec"
        />
        <ProfileSection />
        <ProjectsSection />
        <StrengthsSection />
        <ContactSection />
      </main>
    </div>
  );
}

export default App;
