import Image from 'next/future/image';
import React from 'react';
import { COLORS } from '~utils/constant';
import Carousel from './Carousel';
import Shape1 from './Shape1';
import Text from './Text';

const Card = ({ description, title, year, image }) => {
  return (
    <div className="bg-sky-50 rounded-md shadow-md overflow-hidden p-2 min-h-[335px]">
      <div className="flex items-center justify-center space-x-2 py-2">
        <Text>{title}</Text>
        {/* <span>|</span>
        <span className="text-sm font-medium">{year}</span> */}
      </div>
      <Image src={image} className="object-cover aspect-video" width={640} height={480} />

      <div className="mt-4">
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
};

const story = [
  {
    title: 'Awal berkenalan',
    year: '2012',
    description:
      'Kisah ini berawal tahun 2016 saat itu kami berkenalan lewat medsos yaitu instagram dan sepanjang perkenalan tenyata dia kakak kelas saya di sma 5 kendari dan kami bertemu di salah satu cafe yang berada dikota kendari ',
    image: '/images/fina/_3.JPG',
  },
  {
    title: 'Relationship',
    year: '06 Maret 2019',
    description:
      'Kemudian, di awal tahun 2017 kami menjalin hubungan yang penuh suka, duka dan lika liku hubungan kami dan kami ldr selama 6 tahun dan kembali bertemu setelah loct contact selama 2 tahun',
    image: '/images/fina/_4.JPG',
  },
  {
    title: 'Melamar',
    year: '22 Juli 2022',
    description:
      'Setelah kenal beberapa tahun kami memutuskan untuk berkomitmen ke jenjang yang lebih serius dimana Tanggal 25 september 2022 kami mengadakan acara pelamaran yang di saksikan oleh keluarga besar kami berdua ',
    image: '/images/fina/_5.JPG',
  },
  {
    title: 'Melamar',
    year: '22 Juli 2022',
    description: 'Hingga diputuskanlah akad nikah kami pada tanggal 13 november 2022 ',
    image: '/images/fina/_1.JPG',
  },
];

const Section6 = () => {
  return (
    <section className="bg-primary-1 px-6 mt-8 py-8 text-blue-900 relative overflow-hidden z-20">
      <div className="text-center" data-aos="fade-down">
        <Text className="text-2xl ">Our Story</Text>
      </div>
      <div className="text-center mt-8 relative z-10 -mx-6" data-aos="fade-up">
        <Carousel>
          {story.map((s, i) => (
            <div key={String(i)} className={'pl-4 py-1'}>
              <Card {...s} />
            </div>
          ))}
        </Carousel>
      </div>

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

export default Section6;
