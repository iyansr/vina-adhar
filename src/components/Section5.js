import React from 'react';
import useInterval from '~hooks/useInterval';
import { COLORS } from '~utils/constant';
import Shape1 from './Shape1';

const Time = ({ count, unit }) => {
  return (
    <div className="text-center mt-10 text-sky-800">
      <p className="font-semibold text-2xl text-blue-900">{count}</p>
      <p className="text-sm">{unit}</p>
    </div>
  );
};

const Section5 = () => {
  const { dd, hh, mm, ss, isTimeOut } = useInterval('2022-11-13 19:00:00');

  const mapSrc = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3979.8963147394325!2d122.4715958!3d-4.0415769!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7f6460c46b9e807a!2zNMKwMDInMjkuNyJTIDEyMsKwMjgnMTcuNyJF!5e0!3m2!1sen!2sid!4v1667742587674!5m2!1sen!2sid`;
  const mapSrcRedirect = `https://goo.gl/maps/75ejMfg99xDCtyVQ6`;
  const calendarSrc = `https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NTcxZ3NzYWZpOGxvbGdsYzd0NWlwOTU1aTcgaWtoeWFuN0Bt&tmsrc=ikhyan7%40gmail.com`;
  return (
    <section className="bg-sky-50 px-6 text-blue-900 relative overflow-hidden" id="peta">
      <div className="text-center mt-16" data-aos="fade-right">
        <p className="text-sm font-semibold">Rumah Kediaman Mempelai Wanita</p>
        <p className="text-sm mt-2">JL. Melati, Desa Kota Bangun Kec. Ranomeeto</p>
      </div>

      <div className="px-12 mt-4 flex flex-col justify-center relative z-10" data-aos="fade-down">
        <div className="border-2 border-primary-1 h-64 rounded-xl flex items-center justify-center text-sm overflow-hidden p-3">
          <div className="rounded-xl w-full h-full">
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <button
          data-aos="fade-left"
          onClick={() => {
            window?.open(mapSrcRedirect, '_blank');
          }}
          className="bg-primary-1 text-sm rounded-full px-4 py-2 text-white mx-auto mt-4 hover:scale-95  "
        >
          Arahkan Maps
        </button>
      </div>

      <div className="relative z-10" data-aos="fade-down">
        <h3 className="text-center font-semibold text-2xl text-blue-900 mt-16">13 November 2022</h3>
      </div>

      <div className="flex w-full justify-center mt-6 relative z-10" data-aos="zoom-in">
        <img
          src="/images/save-date.png"
          alt="Save The Date"
          className="h-28"
          style={{ filter: 'hue-rotate(290deg)' }}
        />
      </div>

      {isTimeOut ? (
        <div className="flex items-center justify-center space-x-8 -mt-4" data-aos="fade-up">
          <Time count={'00'} unit="Hari" />
          <Time count={'00'} unit="Jam" />
          <Time count={'00'} unit="Menit" />
          <Time count={'00'} unit="Detik" />
        </div>
      ) : (
        <div className="flex items-center justify-center space-x-8 -mt-4" data-aos="fade-up">
          <Time count={dd} unit="Hari" />
          <Time count={hh} unit="Jam" />
          <Time count={mm} unit="Menit" />
          <Time count={ss} unit="Detik" />
        </div>
      )}

      <div className="px-12 mt-4 flex flex-col justify-center relative z-10" data-aos="fade-up">
        <button
          onClick={() => {
            window?.open(calendarSrc, '_blank');
          }}
          className="bg-primary-1 rounded-full text-sm px-4 py-2 text-white mx-auto mt-4 hover:scale-95  "
        >
          Tambah ke Kalender
        </button>
      </div>

      <Shape1
        className="absolute top-[108px] right-[-105px] rotate-45 z-[0]"
        height="300"
        fill={COLORS.Secondary}
      />
      <Shape1
        className="absolute bottom-[109px] left-[-105px] rotate-180 z-[0]"
        height="300"
        fill={COLORS.Secondary}
      />
    </section>
  );
};

export default Section5;
