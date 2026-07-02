import type { SocialLink } from '../types';

interface SocialLinksProps {
  links: SocialLink[];
}

export default function SocialLinks({ links }: SocialLinksProps) {
  return (
    <section className="row center-pad">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className={link.hideOnMobile ? 'mobile-hide' : undefined}
        >
          <button type="button" className="button-square">
            <img src={link.icon} alt={link.label} />
          </button>
        </a>
      ))}
    </section>
  );
}
