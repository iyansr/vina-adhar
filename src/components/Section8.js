import Image from 'next/future/image';
import React from 'react';
import Carousel from './Carousel';
import Shape1 from './Shape1';
import Text from './Text';
import Lightbox from 'yet-another-react-lightbox';
import { COLORS } from '~utils/constant';

const potraits = Array(6)
  .fill('')
  .map((_, index) => ({ url: `/images/fina/${index + 1}.JPG` }));
const landscape = Array(5)
  .fill('')
  .map((_, index) => ({ url: `/images/fina/_${index + 1}.${index + 1 === 4 ? 'jpg' : 'JPG'}` }));

const Section8 = () => {
  const [index1, setIndex1] = React.useState(-1);
  const [index2, setIndex2] = React.useState(-1);
  return (
    <section className="bg-primary-1 px-6 mt-8 py-8 text-blue-900 relative overflow-hidden z-20">
      <div className="text-center" data-aos="fade-down">
        <Text className="text-2xl ">Gallery</Text>
      </div>
      <div className="text-center mt-10 relative z-10 -mx-6" data-aos="fade-right">
        <Carousel slidesToScroll={2} slidesToShow={2} autoplay infinite={true}>
          {landscape.map((s, i) => (
            <div key={String(i)} className="flex items-center h-full">
              <Image
                onClick={() => setIndex1(i)}
                src={s.url}
                className="object-cover h-full aspect-video"
                width={426}
                height={240}
                quality={70}
              />
            </div>
          ))}
        </Carousel>
      </div>
      <div className="text-center -mt-2  relative z-10 -mx-6" data-aos="fade-left">
        <Carousel slidesToScroll={3} slidesToShow={3} autoplay infinite={true}>
          {potraits.map((s, i) => (
            <div key={String(i)} className="flex items-center h-full">
              <Image
                onClick={() => setIndex2(i)}
                src={s.url}
                className="object-cover h-full aspect-[9/16]"
                height={426}
                width={240}
                quality={70}
              />
            </div>
          ))}
        </Carousel>
      </div>

      <Lightbox
        open={index1 >= 0}
        index={index1}
        close={() => setIndex1(-1)}
        slides={landscape.map((p) => ({ src: p.url }))}
      />
      <Lightbox
        open={index2 >= 0}
        index={index2}
        close={() => setIndex2(-1)}
        slides={potraits.map((p) => ({ src: p.url }))}
      />

      <Shape1
        className="absolute top-[1px] right-[-105px] rotate-45 z-[0]"
        height="300"
        fill={COLORS.Secondary}
      />
      <Shape1
        className="absolute bottom-[-112px] left-[-89px] z-[0]"
        height="300"
        fill={COLORS.Secondary}
      />
    </section>
  );
};

export default Section8;
