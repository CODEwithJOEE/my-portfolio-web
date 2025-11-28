// src/Section/Experience.jsx
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import ExperienceCard from "../components/ExperienceCard";
import { experienceSummary } from "../data/experienceSummary";
import { experienceItems } from "../data/experienceItems";
import PaginationNav from "../components/PaginationNav";
import {
  SECTION,
  SECTION_TITLE,
  BTN_PILL,
  BTN_PILL_ACTIVE,
} from "../styles/uiStyles";
export default function Experience() {
  const [page, setPage] = useState(1);
  const totalPages = experienceItems.length;

  const current = useMemo(() => experienceItems[page - 1], [page]);

  return (
    <div className={SECTION}>
      <h2 className={SECTION_TITLE}>Experience</h2>

      <ul className="list-disc pl-6 space-y-2">
        {experienceSummary.map((s) => (
          <li key={s} className="leading-relaxed">
            {s}
          </li>
        ))}
      </ul>

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <ExperienceCard {...current} />
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-sm opacity-80">
          Showing <strong>{page}</strong> of <strong>{totalPages}</strong>
        </p>
        <PaginationNav
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
          ariaLabel="Experience pagination"
        />
      </div>
    </div>
  );
}
