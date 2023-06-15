import { useGlobalContext } from '../context';
import ellipsis from '../assets/images/icon-ellipsis.svg';

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
    <div
      className='bg-lightRedWork rounded-xl overflow-hidden [&:nth-of-type(3)]:bg-softBlue [&:nth-of-type(4)]:bg-lightRedStudy [&:nth-of-type(5)]:bg-limeGreen
    [&:nth-of-type(6)]:bg-VioletSocial last-of-type:bg-softOrange '
    >
      <div className='relative h-10 overflow-hidden'>
        <img src={images[id]} className='absolute -top-1 right-3 w-13  ' />
      </div>
      <div
        className='bg-darkBlue rounded-xl flex flex-col
      px-5 py-6'
      >
        <div className='flex justify-between items-center'>
          <p className='font-medium'>{title}</p>
          <img src={ellipsis} />
        </div>
        <div className='flex gap-5 justify-between items-center '>
          <p className='text-3xl font-light'>{`${
            daily ? dailyCurrent : weekly ? weekCurrent : monthCurrent
          } hrs`}</p>
          <p className='font-light text-paleBlue text-sm'>
            {`Last Week - ${
              daily ? dailyPrevious : weekly ? weekPrevious : monthPrevious
            } hrs`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCards;
