import work from '../assets/images/icon-work.svg';
import ell from '../assets/images/icon-ellipsis.svg';

const ActivityCards = () => {
  return (
    <div className='bg-lightRedWork rounded-xl overflow-hidden'>
      <div className='relative h-10 overflow-hidden'>
        <img src={work} className='absolute -top-3 right-3 ' />
      </div>
      <div
        className='bg-darkBlue rounded-xl z-10 flex items-center justify-between
      px-5 py-6'
      >
        <div className='flex flex-col gap-0.5'>
          <p className='font-medium'>Work</p>
          <p className='text-3xl font-light'>32hrs</p>
        </div>
        <div className='flex flex-col gap-5 '>
          <img src={ell} className='self-end' />
          <p className='font-light text-paleBlue text-sm'>Last Week - 36hrs</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCards;
