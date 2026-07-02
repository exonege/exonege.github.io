interface CornerRibbonProps {
  position: 'top' | 'bottom';
  text: string;
}

/**
 * One diagonal, endlessly scrolling banner. The text is duplicated into two
 * spans so the CSS keyframe (translate -50%) loops seamlessly.
 */
export default function CornerRibbon({ position, text }: CornerRibbonProps) {
  return (
    <div className={`corner-ribbon ribbon-${position}`} aria-hidden="true">
      <div>
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}
