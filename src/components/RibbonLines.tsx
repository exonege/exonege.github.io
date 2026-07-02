interface RibbonLinesProps {
  /** Applies the .invert filter, used on the about section. */
  invert?: boolean;
}

/**
 * The pair of animated dashed lines pinned to the top and bottom of a page
 * section. Purely decorative, so it's marked aria-hidden.
 */
export default function RibbonLines({ invert = false }: RibbonLinesProps) {
  const invertClass = invert ? ' invert' : '';

  return (
    <div className="ribbon-holder" aria-hidden="true">
      <div className={`line-ribbon top line-ribbon-scroll-delay${invertClass}`} />
      <div className={`line-ribbon bottom${invertClass}`} />
    </div>
  );
}
