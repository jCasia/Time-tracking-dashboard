import profileImg from '../assets/images/image-jeremy.png';
import Button from './Button';

const buttonLabels = ['Daily', 'Weekly', 'Monthly'];

const Profile = () => {
  return (
    <div className='bg-darkBlue rounded-xl'>
      <div className='flex justify-center items-center bg-colorBlue gap-4 py-7 rounded-xl'>
        <div className='bg-white rounded-full w-1/4'>
          <img src={profileImg} className='max-w-full object-cover p-0.5' />
        </div>
        <div className='flex flex-col'>
          <p className='font-light text-xs'>Report for</p>
          <p className='font-normal text-lg'>Jeremy Robson</p>
        </div>
      </div>
      <div className='flex justify-around p-4 text-sm'>
        {buttonLabels.map((item, index) => {
          return <Button label={item} key={index} id={item} />;
        })}
      </div>
    </div>
  );
};

export default Profile;
