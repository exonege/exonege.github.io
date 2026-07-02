/** The three portfolio filters shown on the about section. */
export type PortfolioCategory = 'personal' | 'work' | 'else';

/** A single social link rendered as a square icon button. */
export interface SocialLink {
  id: string;
  label: string;
  href: string;
  icon: string;
  /** Hidden on small viewports, matching the original .mobile-hide rule. */
  hideOnMobile?: boolean;
}
