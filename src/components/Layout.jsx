import { CARD, LAYOUT_MAIN, LAYOUT_FOOTER } from "../styles/uiStyles";

export default function Layout({ left, right, footer }) {
  return (
    <div>
      <main className={LAYOUT_MAIN}>
        {/* Left column */}
        <Card className="p-0">{left}</Card>

        {/* Right column */}
        <Card className="min-h-[380px]">{right}</Card>
      </main>

      {footer && (
        <footer className={LAYOUT_FOOTER}>
          {footer} © {new Date().getFullYear()} Joe Portfolio. All rights
          reserved.
        </footer>
      )}
    </div>
  );
}

function Card({ children, className = "" }) {
  return (
    <section className={[CARD, "p-5 md:p-8", className].join(" ")}>
      {children}
    </section>
  );
}
