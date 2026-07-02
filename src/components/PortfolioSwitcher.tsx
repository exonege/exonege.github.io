import { useState } from 'react';
import type { PortfolioCategory } from '../types';
import { portfolioTabs } from '../data/socials';

interface PortfolioSwitcherProps {
  active: PortfolioCategory;
  onChange: (category: PortfolioCategory) => void;
}

/** How long the little rotate "kick" animation runs for, in ms. Matches the original vanilla-JS timing. */
const KICK_DURATION_MS = 50;

/**
 * The PERSONAL / WORK / WHATEVER ELSE tab row. Reproduces the original
 * button-square "kick" animation (outgoing button rotates one way, incoming
 * the other, both settle back to 0deg) using transient React state instead
 * of directly mutating style.transform.
 */
export default function PortfolioSwitcher({ active, onChange }: PortfolioSwitcherProps) {
  const [kicked, setKicked] = useState<Partial<Record<PortfolioCategory, number>>>({});

  function handleClick(id: PortfolioCategory) {
    if (id === active) return;

    setKicked((prev) => ({ ...prev, [active]: 10, [id]: -10 }));
    onChange(id);

    window.setTimeout(() => {
      setKicked((prev) => ({ ...prev, [active]: 0, [id]: 0 }));
    }, KICK_DURATION_MS);
  }

  return (
    <section className="row">
      {portfolioTabs.map((tab) => (
        <button
          key={tab.id}
          type="button"
          className={`button-rect${active === tab.id ? ' active' : ''}`}
          style={{ transform: `rotate(${kicked[tab.id] ?? 0}deg)` }}
          onClick={() => handleClick(tab.id)}
        >
          <span>{tab.label}</span>
        </button>
      ))}
    </section>
  );
}
