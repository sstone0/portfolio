const Button = ({ title }) => {
  return (
    <button className='cursor-pointer rounded-md bg-gray-400 p-2 px-4 font-bold text-black transition-all hover:bg-blue-500 hover:text-white'>
      <span className='font text-sm'>{title}</span>
    </button>
  );
};

export default Button;
