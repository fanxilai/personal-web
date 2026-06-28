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
        <div className="visual-heading">
          <span>Transport & Carbon Research</span>
          <strong>Policy / Data / Research</strong>
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
        <div className="visual-heading">
          <span>Crew Scheduling Model</span>
          <strong>Three Cases</strong>
        </div>
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
      <div className="visual-heading">
        <span>Mathematical Modeling</span>
        <strong>Research Workflow</strong>
      </div>
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

export default function ProjectShowcase({ project, index }) {
  return (
    <article className={`project-entry motion-item ${project.level}`}>
      <ProjectVisual project={project} />
      <div className="project-content">
        <div className="project-index">{String(index).padStart(2, "0")}</div>
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
        <dl className="project-metrics">
          {project.metrics.map((metric) => (
            <div key={`${project.slug}-${metric.label}`}>
              <dt>{metric.label}</dt>
              <dd>{metric.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </article>
  );
}
