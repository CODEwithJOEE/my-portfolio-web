import { isExternalLink } from "../data/contactData";
import { CONTACT_CHIP } from "../styles/uiStyles";

export default function ContactChip({ name, Icon, color, link, download }) {
  const external = !download && isExternalLink(link);

  return (
    <a
      href={link}
      aria-label={name}
      className={CONTACT_CHIP}
      {...(download ? { download: true } : {})}
      {...(external ? { target: "_blank", rel: "noopener noreferrer me" } : {})}
    >
      <span className="text-lg" style={{ color }}>
        <Icon size={18} />
      </span>
      <span>{name}</span>
    </a>
  );
}
