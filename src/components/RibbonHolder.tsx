import CornerRibbon from './CornerRibbon';

interface RibbonHolderProps {
  /** Applies the .invert filter to the line-ribbons, used on the about section. */
  invert?: boolean;
  /** Whether to render the diagonal "SCROLL-DOWN" banners, used on the header. */
  cornerText?: string;
}

/**
 * The decorative ribbon layer for a page section: two animated dashed lines
 * pinned top/bottom, plus (optionally) two diagonal scrolling banners.
 *
 * Everything shares one `.ribbon-holder` wrapper — that div is what clips
 * the oversized, rotated corner-ribbon banners down to the section's
 * bounds (overflow: hidden). Splitting the corner ribbons into a sibling
 * element outside this wrapper is what causes them to overflow the page.
 */
export default function RibbonHolder({ invert = false, cornerText }: RibbonHolderProps) {
  const invertClass = invert ? ' invert' : '';

  return (
    <div className="ribbon-holder" aria-hidden="true">
      <div className={`line-ribbon top line-ribbon-scroll-delay${invertClass}`} />
      <div className={`line-ribbon bottom${invertClass}`} />

      {cornerText && (
        <>
          <CornerRibbon position="top" text={cornerText} />
          <CornerRibbon position="bottom" text={cornerText} />
        </>
      )}
    </div>
  );
}
