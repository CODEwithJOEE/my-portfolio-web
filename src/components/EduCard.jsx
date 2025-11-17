import { EDU_CARD, EDU_ACCENT_BAR } from "../styles/uiStyles";

export default function EduCard({ name, subtitle, bullets }) {
  return (
    <article className={EDU_CARD}>
      {/* Accent bar on the left */}
      <span className={EDU_ACCENT_BAR} />

      <div className="px-4 py-3 md:px-5 md:py-4">
        <h3 className="font-semibold">{name}</h3>
        <p className="mt-1 text-xs opacity-75">{subtitle}</p>

        <ul className="mt-3 list-disc pl-5 space-y-2 leading-relaxed text-sm">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
