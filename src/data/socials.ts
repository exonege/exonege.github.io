import type { SocialLink } from '../types';

export const socialLinks: SocialLink[] = [
  {
    id: 'youtube',
    label: 'YOUTUBE',
    href: '',
    icon: '/assets/icons/youtube.svg',
  },
  {
    id: 'twitter',
    label: 'TWITTER',
    href: '',
    icon: '/assets/icons/twitter.svg',
  },
  {
    id: 'discord',
    label: 'DISCORD',
    href: '',
    icon: '/assets/icons/discord.svg',
  },
  {
    id: 'mail',
    label: 'MAIL',
    href: '',
    icon: '/assets/icons/envelope-at-fill.svg',
    hideOnMobile: true,
  },
];

export const portfolioTabs: { id: 'personal' | 'work' | 'else'; label: string }[] = [
  { id: 'personal', label: 'PERSONAL PROJECTS' },
  { id: 'work', label: 'ACTUAL WORK' },
  { id: 'else', label: 'WHATEVER ELSE' },
];
