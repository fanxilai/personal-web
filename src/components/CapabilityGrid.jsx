import BorderGlow from "./BorderGlow";

export default function CapabilityGrid({ items }) {
  return (
    <div className="capability-grid">
      {items.map((item, index) => (
        <BorderGlow
          key={item.title}
          className="capability-card motion-card"
          backgroundColor={index % 3 === 0 ? "#151e29" : "#18212d"}
          borderRadius={24}
        >
          <div className="capability-card-inner">
            <span>{String(index + 1).padStart(2, "0")}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        </BorderGlow>
      ))}
    </div>
  );
}
