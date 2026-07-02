import RibbonHolder from './RibbonHolder';
import PortfolioSwitcher from './PortfolioSwitcher';
import type { PortfolioCategory } from '../types';

interface AboutSectionProps {
  active: PortfolioCategory;
  onChange: (category: PortfolioCategory) => void;
}

export default function AboutSection({ active, onChange }: AboutSectionProps) {
  return (
    <section className="page page-about">
      <RibbonHolder invert />
      <PortfolioSwitcher active={active} onChange={onChange} />
    </section>
  );
}
