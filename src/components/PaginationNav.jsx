import { BTN_PILL, BTN_PILL_ACTIVE } from "../styles/uiStyles";
export default function PaginationNav({
  page,
  totalPages,
  onPageChange,
  ariaLabel = "Pagination",
  navClass = "inline-flex items-center gap-2",
  // Defaults now come from uiStyles
  prevNextClass = BTN_PILL,
  pageClass = BTN_PILL,
  pageActiveClass = BTN_PILL_ACTIVE,
}) {
  const basePageClass = pageClass;
  const activePageClass = pageActiveClass;

  const go = (p) => {
    const next = Math.min(Math.max(1, p), totalPages);
    if (next !== page) onPageChange(next);
  };

  return (
    <nav className={navClass} aria-label={ariaLabel}>
      <button
        onClick={() => go(page - 1)}
        disabled={page === 1}
        className={prevNextClass}
      >
        Prev
      </button>

      <div className="inline-flex items-center gap-1">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
          <button
            key={n}
            onClick={() => go(n)}
            className={`${basePageClass} ${
              n === page
                ? activePageClass + " !bg-sky-600 !text-white !border-sky-600"
                : ""
            }`}
            aria-current={n === page ? "page" : undefined}
          >
            {n}
          </button>
        ))}
      </div>

      <button
        onClick={() => go(page + 1)}
        disabled={page === totalPages}
        className={prevNextClass}
      >
        Next
      </button>
    </nav>
  );
}
