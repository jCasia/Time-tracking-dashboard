import profileImg from '../assets/images/image-jeremy.png';
import Button from './Button';

const buttonLabels = ['Daily', 'Weekly', 'Monthly'];

const Profile = () => {
  return (
    <div className='bg-darkBlue rounded-xl tablet:col-start-1 tablet:col-span-2 tabletl:col-start-1 tabletl:col-span-3 laptop:col-start-1 laptop:col-span-1 laptop:row-start-1 laptop:row-span-2 laptop:grid laptop:grid-cols-1 laptop:grid-rows-[1fr_auto]'>
      <div className='flex justify-center items-center bg-colorBlue gap-4 py-7 rounded-xl laptopsm:gap-7 laptop:flex-col laptop:p-8 laptop:items-start laptop:gap-10 laptop:justify-start '>
        <div className='bg-white rounded-full w-1/4 tabletl:w-1/6 laptop:w-2/5'>
          <img
            src={profileImg}
            alt='Profile image'
            className='max-w-full object-cover p-0.5'
            aria-hidden='true'
          />
        </div>
        <div className='flex flex-col'>
          <p className='font-light text-xs text-paleBlue tablet:text-lg tabletl:text-xl laptop:text-base'>
            Report for
          </p>
          <p className='font-light text-lg tablet:text-2xl tabletl:text-3xl laptop:text-[40px] laptop:leading-tight laptop:tracking-wide '>
            Jeremy Robson
          </p>
        </div>
      </div>
      <div className='flex justify-around p-4 text-sm laptop:flex-col laptop:items-start laptop:gap-4 laptop:p-7 '>
        {buttonLabels.map((item, index) => {
          return <Button label={item} key={index} id={item} />;
        })}
      </div>
    </div>
  );
};

export default Profile;
