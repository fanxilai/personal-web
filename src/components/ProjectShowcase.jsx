import BorderGlow from "./BorderGlow";

function ProjectVisual({ project }) {
  const { visual, title } = project;

  if (visual.kind === "ho") {
    return (
      <div className="project-visual visual-ho">
        <figure className="project-figure primary">
          <img src={visual.images[0].src} alt={visual.images[0].alt} loading="lazy" />
        </figure>
        <figure className="project-figure secondary">
          <img src={visual.images[1].src} alt={visual.images[1].alt} loading="lazy" />
        </figure>
      </div>
    );
  }

  if (visual.kind === "wri") {
    return (
      <div className="project-visual visual-wri">
        <div className="visual-label">Transport & Carbon Research</div>
        <div className="visual-copy">
          <span>Policy Review</span>
          <span>Data Structuring</span>
          <span>Research Support</span>
        </div>
        <figure className="project-chart">
          <img src={visual.chart} alt={`${title} 图表`} loading="lazy" />
        </figure>
      </div>
    );
  }

  if (visual.kind === "optimization") {
    return (
      <div className="project-visual visual-optimization">
        <div className="visual-label">Crew Scheduling Model</div>
        <div className="case-grid">
          {visual.cases.map((item) => (
            <div key={item.name}>
              <strong>{item.name}</strong>
              <span>Cost {item.cost}</span>
              <span>Check {item.check}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="project-visual visual-modeling">
      <div className="visual-label">Modeling Workflow</div>
      <div className="step-grid">
        {visual.steps.map((step, index) => (
          <div key={step}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{step}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ProjectShowcase({ project }) {
  return (
    <BorderGlow
      className={`project-showcase motion-card ${project.level}`}
      backgroundColor={project.level === "featured" ? "#ffffff" : "#f8fbf8"}
      borderRadius={26}
    >
      <article className="project-showcase-inner">
        <ProjectVisual project={project} />
        <div className="project-content">
          <div className="project-meta">
            <span>{project.type}</span>
            <span>{project.time}</span>
          </div>
          <h3>{project.title}</h3>
          <p className="project-accent">{project.accent}</p>
          <p className="project-description">{project.description}</p>
          <ul className="project-points">
            {project.contributions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="project-metrics">
            {project.metrics.map((metric) => (
              <div key={`${project.slug}-${metric.label}`}>
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </article>
    </BorderGlow>
  );
}
