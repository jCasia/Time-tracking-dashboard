import { useGlobalContext } from '../context';

const Button = ({ label, id }) => {
  const { activeId, setActiveId, setDaily, setWeekly, setMonthly } =
    useGlobalContext();

  const isActive = activeId === id;

  const toggleSingle = (id) => {
    setActiveId(id);

    if (id === 'Daily') {
      setMonthly(false);
      setWeekly(false);
      setDaily(true);
    }
    if (id === 'Weekly') {
      setDaily(false);
      setMonthly(false);
      setWeekly(true);
    }
    if (id === 'Monthly') {
      setDaily(false);
      setWeekly(false);
      setMonthly(true);
    }
  };

  return (
    <button
      type='button'
      className={`text-desaturatedBlue ${
        isActive && 'text-white'
      } tablet:text-lg`}
      onClick={() => toggleSingle(id)}
    >
      {label}
    </button>
  );
};

export default Button;
