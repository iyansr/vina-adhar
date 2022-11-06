import Section1 from '~components/Section1';
import Section10 from '~components/Section10';
import Section2 from '~components/Section2';
import Section3 from '~components/Section3';
import Section4 from '~components/Section4';
import Section5 from '~components/Section5';
import Section6 from '~components/Section6';
import Section7 from '~components/Section7';
import Section8 from '~components/Section8';
import Section9 from '~components/Section9';
import Thanks from '~components/Thanks';
import { LazyLoadComponent } from 'react-lazy-load-image-component';
import VideoSection from '~components/VideoSection';
import Music from '~components/Music';

export default function Home() {
  return (
    <div>
      <Section1 />
      <Section2 />
      {/* <LazyLoadComponent>
        <VideoSection />
      </LazyLoadComponent> */}

      <LazyLoadComponent>
        <Section3 />
      </LazyLoadComponent>

      <LazyLoadComponent>
        <Section4 />
      </LazyLoadComponent>

      <LazyLoadComponent>
        <Section5 />
      </LazyLoadComponent>

      <LazyLoadComponent>
        <Section6 />
      </LazyLoadComponent>

      <LazyLoadComponent>
        <Section7 />
      </LazyLoadComponent>

      <LazyLoadComponent>
        <Section8 />
      </LazyLoadComponent>

      <LazyLoadComponent>
        <Section10 />
      </LazyLoadComponent>
      <LazyLoadComponent>
        <Section9 />
      </LazyLoadComponent>

      <LazyLoadComponent>
        <Thanks />
      </LazyLoadComponent>

      {/* <Music /> */}
    </div>
  );
}
