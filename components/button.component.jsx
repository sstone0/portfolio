const Button = ({ label, title }) => {
	return (
		<div className=" rounded-md p-2 px-4 bg-gray-400 text-black cursor-pointer">
			<span className="text-xs">{title}</span>
		</div>
	);
};

export default Button;
