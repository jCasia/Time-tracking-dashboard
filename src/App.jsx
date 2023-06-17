import Profile from './components/Profile';
import ActivityCards from './components/ActivityCards';
import data from './data.json';

function App() {
  return (
    <main className='max-w-full min-h-screen bg-veryDarkBlue text-white font-Rubik laptop:grid laptop:place-items-center  '>
      <div className='flex flex-col gap-6 justify-center item-center px-6 py-16 tablet:grid tablet:grid-rows-4 tablet:grid-cols-2 tabletl:grid-rows-3 tabletl:grid-cols-3 laptop:grid-cols-4 laptop:grid-rows-2 laptop:max-w-6xl laptop:p-0 laptop:mx-6 laptop:h-[525px] '>
        <Profile />
        {data.map((item, index) => {
          return <ActivityCards key={index} activity={item} id={index} />;
        })}
      </div>
    </main>
  );
}

export default App;
