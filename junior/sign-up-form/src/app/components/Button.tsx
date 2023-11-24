interface ButtonProps {
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      type="submit"
      onClick={onClick}
      className="
        mt-4
        w-full 
          bg-dark-slate-grey 
          py-3 
          hover:bg-gradient-to-r 
          hover:to-tomato 
          hover:from-tomato/80
          hover:shadow-lg
          hover:shadow-tomato
          text-white
          rounded-md"
    >
      {children}
    </button>
  );
};

export default Button;
