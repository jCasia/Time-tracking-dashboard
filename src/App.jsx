import Profile from './components/Profile';
import ActivityCards from './components/ActivityCards';
import data from './data.json';
import { useGlobalContext } from './context';

function App() {
  const { cardData } = useGlobalContext();

  return (
    <main className='max-w-full min-h-screen bg-veryDarkBlue text-white font-Rubik '>
      <div className='flex flex-col gap-6 justify-center item-center px-6 py-16'>
        <Profile />
        {data.map((item, index) => {
          return <ActivityCards key={index} activity={item} id={index} />;
        })}
      </div>
    </main>
  );
}

export default App;
