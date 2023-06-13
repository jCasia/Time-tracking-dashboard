const Button = ({ label }) => {
  return (
    <button
      type='button'
      className='first-of-type:text-desaturatedBlue last-of-type:text-desaturatedBlue'
    >
      {label}
    </button>
  );
};

export default Button;
