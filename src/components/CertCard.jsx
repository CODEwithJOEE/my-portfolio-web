import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

// ⬅️ NEW imports
import {
  CERT_CARD,
  CERT_IMG_WRAPPER,
  CERT_MODAL_BACKDROP,
  CERT_MODAL_BODY,
} from "../styles/uiStyles";

export default function CertCard({ title, issuer, date, img }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!show) return;
    const onKey = (e) => e.key === "Escape" && setShow(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [show]);

  return (
    <>
      {/* Card */}
      <article
        onClick={() => setShow(true)}
        className={CERT_CARD}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setShow(true)}
        aria-label={`Open certificate: ${title}`}
      >
        <div className={CERT_IMG_WRAPPER}>
          <img
            src={img}
            alt={title}
            className="w-full object-cover"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.src = "/certificates/placeholder.jpg";
            }}
          />
        </div>

        <h3 className="mt-3 font-semibold">{title}</h3>
        <p className="text-sm opacity-80">
          Issued by {issuer} — {date}
        </p>
      </article>

      {/* Modal */}
      <AnimatePresence>
        {show && (
          <motion.div
            className={CERT_MODAL_BACKDROP}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShow(false)}
            aria-modal="true"
            role="dialog"
            aria-label={`${title} — enlarged`}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              className={CERT_MODAL_BODY}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
            >
              <img
                src={img}
                alt={title}
                className="w-full rounded-xl mb-3"
                loading="lazy"
              />
              <h3 className="text-lg font-semibold">{title}</h3>
              <p className="text-sm opacity-80">
                Issued by {issuer} — {date}
              </p>
              <button
                onClick={() => setShow(false)}
                className="mt-4 px-4 py-2 rounded-xl bg-sky-600 hover:bg-sky-500 text-white"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
