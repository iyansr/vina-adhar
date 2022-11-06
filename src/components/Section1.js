import React from 'react';
import Shape1 from './Shape1';
import Text from './Text';

const Section1 = () => {
  return (
    <section className="relative bg-primary-1 overflow-hidden px-11 py-8" id="utama">
      <div className="relative z-20">
        <div className="p-4 text-center pt-8 text-3xl text-blue-900">
          <Text className="font-medium">The Wedding of</Text>
          <Text className="font-medium mt-2">Vina & Adhar</Text>
        </div>
        <img src="/images/fina/top.png" alt="Cover" className="object-cover mt-8" />
      </div>
      <Shape1
        className="absolute top-[108px] right-[-105px] rotate-45 z-[1]"
        height="300"
        fill="#BDE0FE"
      />
      <Shape1
        alt=""
        className="absolute bottom-[109px] left-[-105px] rotate-180 z-10"
        height="300"
        fill="#BDE0FE"
      />
    </section>
  );
};

export default Section1;
