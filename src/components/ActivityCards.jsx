import ellipsis from '../assets/images/icon-ellipsis.svg';

const ActivityCards = ({ activity }) => {
  const { title, img, timeframe } = activity;

  return (
    <div
      className='bg-lightRedWork rounded-xl overflow-hidden [&:nth-of-type(3)]:bg-softBlue [&:nth-of-type(4)]:bg-lightRedStudy [&:nth-of-type(5)]:bg-limeGreen
    [&:nth-of-type(6)]:bg-VioletSocial last-of-type:bg-softOrange '
    >
      <div className='relative h-10 overflow-hidden'>
        <img src={img} className='absolute -top-1 right-3 w-13  ' />
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
          <p className='text-3xl font-light'>32hrs</p>
          <p className='font-light text-paleBlue text-sm'>Last Week - 36hrs</p>
        </div>
      </div>
    </div>
  );
};

export default ActivityCards;
