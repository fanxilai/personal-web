export default function SectionHeading({ index, marquee, eyebrow, title, lead = "", wide = false }) {
  return (
    <div className={`section-heading ${wide ? "wide" : ""}`}>
      <div className="section-marquee" aria-hidden="true">
        {marquee}
      </div>
      <span>{index} / {eyebrow}</span>
      <h2>{title}</h2>
      {lead ? <p>{lead}</p> : null}
    </div>
  );
}
