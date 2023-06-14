import { data } from './data';
import Profile from './components/Profile';
import ActivityCards from './components/ActivityCards';

function App() {
  return (
    <main className='max-w-full min-h-screen bg-veryDarkBlue text-white font-Rubik '>
      <div className='flex flex-col gap-6 justify-center item-center px-6 py-16'>
        <Profile />
        {data.map((item, index) => {
          return <ActivityCards key={index} activity={item} />;
        })}
      </div>
    </main>
  );
}

export default App;
