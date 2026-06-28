export default function CapabilityGrid({ items }) {
  return (
    <div className="capability-list">
      {items.map((item, index) => (
        <article className="capability-row motion-item" key={item.title}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}
