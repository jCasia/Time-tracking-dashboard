import profileImg from '../assets/images/image-jeremy.png';
import Button from './Button';

const buttonLabels = ['Daily', 'Weekly', 'Monthly'];

const Profile = () => {
  return (
    <div className='bg-darkBlue rounded-xl tablet:col-start-1 tablet:col-span-2 tabletl:col-start-1 tabletl:col-span-3'>
      <div className='flex justify-center items-center bg-colorBlue gap-4 py-7 rounded-xl'>
        <div className='bg-white rounded-full w-1/4 tabletl:w-1/6'>
          <img src={profileImg} className='max-w-full object-cover p-0.5' />
        </div>
        <div className='flex flex-col'>
          <p className='font-light text-xs tablet:text-lg tabletl:text-xl'>
            Report for
          </p>
          <p className='font-normal text-lg tablet:text-2xl tabletl:text-3xl'>
            Jeremy Robson
          </p>
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
