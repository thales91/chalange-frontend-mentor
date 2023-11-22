import { Children } from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="min-h-[400px] md:min-h-[600px] md:min-w-[523px] flex flex-col p-10 relative">
      {children}
    </div>
  );
};

export default Container;
