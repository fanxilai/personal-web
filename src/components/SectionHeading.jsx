export default function SectionHeading({ index, eyebrow, title }) {
  return (
    <header className="section-heading">
      <div className="section-heading-meta">
        <span>{index}</span>
        <span>{eyebrow}</span>
      </div>
      <h2>{title}</h2>
    </header>
  );
}
