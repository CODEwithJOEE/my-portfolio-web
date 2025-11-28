// src/Section/Certificates.jsx
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CERTS } from "../data/certificates";
import CertCard from "../components/CertCard";
import PaginationNav from "../components/PaginationNav";
import {
  SECTION,
  SECTION_TITLE,
  BTN_PILL,
  BTN_PILL_ACTIVE,
} from "../styles/uiStyles";
export default function Certificates() {
  const pageSize = 2;
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(CERTS.length / pageSize);
  const start = (page - 1) * pageSize;
  const end = start + pageSize;

  const pageItems = useMemo(() => CERTS.slice(start, end), [start, end]);

  return (
    <div className={SECTION}>
      <h2 className={SECTION_TITLE}>Certificates</h2>
      <p className={"text-center opacity-80"}>
        Proof of skills and achievements
      </p>

      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className="grid gap-4 sm:grid-cols-2"
          aria-label={`Certificates page ${page} of ${totalPages}`}
        >
          {pageItems.map((c) => (
            <CertCard key={c.title + c.date} {...c} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <p className="text-sm opacity-80">
          Showing <strong>{start + 1}</strong>–
          <strong>{Math.min(end, CERTS.length)}</strong> of{" "}
          <strong>{CERTS.length}</strong>
        </p>

        <PaginationNav
          page={page}
          totalPages={totalPages}
          onPageChange={setPage}
          ariaLabel="Certificates pagination"
        />
      </div>
    </div>
  );
}
