import RibbonHolder from './RibbonHolder';
import SocialLinks from './SocialLinks';
import { socialLinks } from '../data/socials';

const SCROLL_TEXT = 'SCROLL-DOWN-SCROLL-DOWN-SCROLL-DOWN-SCROLL-DOWN-';

export default function Header() {
  return (
    <header className="page page-header">
      <RibbonHolder cornerText={SCROLL_TEXT} />

      <section className="font-small center-pad">
        <p className="font-huge">EXONEGE</p>

        <p>GENERAL_INFO: // ANY PRONOUNS // POLISH //</p>

        <br />

        <p style={{ textAlign: 'left' }}>DESC: // DOING SH*T FOR FUN, AND BECAUSE I FIND IT COOL.</p>
        <p style={{ textAlign: 'right' }}>FOR YOU TO ENJOY . . .</p>
        <p>. . . OR NOT. I WONT TELL YOU WHAT TO DO.</p>
      </section>

      <SocialLinks links={socialLinks} />
    </header>
  );
}
