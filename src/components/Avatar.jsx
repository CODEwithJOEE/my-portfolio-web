import { useState } from "react";
import { PROFILE, PROFILE_SECTION, NO_IMAGE } from "../styles/uiStyles";
export default function Avatar({
  src,
  alt,
  size = "full", // "full" | "md" | "sm"
  className = "",
}) {
  const [error, setError] = useState(false);

  const sizeClasses =
    size === "sm" ? "w-12 h-12" : size === "md" ? "w-24 h-24" : "w-full h-full";

  return (
    <div
      className={`${PROFILE_SECTION}
        ${sizeClasses} ${className}
      `}
    >
      {!error ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className={PROFILE}
          onError={() => setError(true)}
        />
      ) : (
        <div className={NO_IMAGE}>No Image</div>
      )}
    </div>
  );
}
