import { useGlobalContext } from '../context';
import ellipsis from '../assets/images/icon-ellipsis.svg';
import { motion } from 'framer-motion';

import work from '../assets/images/icon-work.svg';
import play from '../assets/images/icon-play.svg';
import study from '../assets/images/icon-study.svg';
import exercise from '../assets/images/icon-exercise.svg';
import social from '../assets/images/icon-social.svg';
import selfCare from '../assets/images/icon-self-care.svg';

const ActivityCards = ({ activity, id }) => {
  const { daily, weekly } = useGlobalContext();
  const {
    title,
    img,
    timeframes: {
      daily: { current: dailyCurrent, previous: dailyPrevious },
      weekly: { current: weekCurrent, previous: weekPrevious },
      monthly: { current: monthCurrent, previous: monthPrevious },
    },
  } = activity;

  const images = [work, play, study, exercise, social, selfCare];

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 1.25,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      className='bg-lightRedWork rounded-xl overflow-hidden [&:nth-of-type(3)]:bg-softBlue  [&:nth-of-type(4)]:bg-lightRedStudy [&:nth-of-type(5)]:bg-limeGreen
    [&:nth-of-type(6)]:bg-VioletSocial last-of-type:bg-softOrange flex flex-col laptop:w-full '
    >
      <div className='relative h-10 overflow-hidden '>
        <img
          src={images[id]}
          alt={`${images} logo`}
          aria-hidden='true'
          className='absolute -top-1 right-3 w-13  '
        />
      </div>
      <div
        className='bg-darkBlue rounded-xl flex flex-col tablet:justify-between
      px-5 py-6 cursor-pointer hover:bg-desaturatedBlue transition ease-linear duration-500 tablet:flex-1 laptop:p-6'
      >
        <div className='flex justify-between items-center '>
          <p className='font-medium tablet:text-lg tabletm:text-2xl tabletl:text-lg laptopsm:text-xl laptop:text-lg'>
            {title}
          </p>
          <img src={ellipsis} alt='ellipsis' className='cursor-pointer' />
        </div>
        <div className='flex gap-5 justify-between items-center tablet:flex-col tablet:gap-2 tablet:items-start tabletl:gap-1 laptop:gap-3'>
          <p className='text-3xl font-light tablet:text-5xl tabletl:text-4xl laptopsm:text-5xl laptopm:text-6xl '>{`${
            daily ? dailyCurrent : weekly ? weekCurrent : monthCurrent
          }hrs`}</p>
          <p className='font-light text-paleBlue text-sm tablet:text-base '>
            {`Last Week - ${
              daily ? dailyPrevious : weekly ? weekPrevious : monthPrevious
            }hrs`}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ActivityCards;

// [&:nth-of-type(4)]:tablet:bg-paleBlue
