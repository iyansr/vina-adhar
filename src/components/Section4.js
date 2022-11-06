import React from 'react';
import Graphic1 from '~icons/Graphic1';
import { COLORS } from '~utils/constant';
import Shape1 from './Shape1';
import Text from './Text';

const Section4 = () => {
  return (
    <section className="relative bg-sky-50 -mt-20 px-6 overflow-hidden" id="event">
      <div className="pt-24 bg-sky-50">
        <div className="flex justify-center" data-aos="zoom-in-up">
          <Graphic1 />
        </div>

        <div className="text-sm text-blue-900 text-center relative z-20" data-aos="zoom-in-up">
          <p className="mt-8">
            Kehadiran serta doa restu Bapak/Ibu/Saudara/i merupakan suatu kebahagiaan dan kehormatan
            bagi kami.
          </p>
          <p className="font-semibold text-blue-900 mt-2">{`Wassalamu'alaikum Warrahmatullahi Wabarrakatuh`}</p>
        </div>

        <div className="text-center font-semibold text-blue-900 mt-8 relative z-10">
          <p data-aos="fade-down">Minggu</p>
          <div className="flex justify-center items-center space-x-2 mt-2">
            <p className="font-bold text-5xl" data-aos="fade-right">
              13
            </p>
            <div className="text-left" data-aos="fade-left">
              <p>November</p>
              <p>2022</p>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-blue-900 relative z-10" data-aos="fade-right">
          <Text className="text-2xl ">Akad Nikah</Text>
          <div className="mt-4 text-lg">
            <p>09.00 - 11.00 WITA</p>
            <p>JL. Melati, Desa Kota Bangun Kec. Ranomeeto</p>
          </div>
        </div>
        <div className="mt-8 text-center text-blue-900 relative z-10" data-aos="fade-left">
          <Text className="text-2xl ">Resepsi</Text>
          <div className="mt-4 text-lg">
            <p>19.00 WITA - Selesai</p>
            <p>JL. Melati, Desa Kota Bangun Kec. Ranomeeto</p>
          </div>
        </div>
      </div>

      <Shape1
        className="absolute top-[108px] right-[-105px] rotate-45 z-[0]"
        height="300"
        fill={COLORS.Secondary}
      />
      <Shape1
        className="absolute bottom-[109px] left-[-105px] rotate-180 z-0"
        height="300"
        fill={COLORS.Secondary}
      />
    </section>
  );
};

export default Section4;
