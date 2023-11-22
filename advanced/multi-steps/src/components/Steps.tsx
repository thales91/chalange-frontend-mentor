"use client";
import useStep from "@/app/hook/step";

interface StepProps {
  step: number;
  title: string;
  subtitle: string;
}

const Step: React.FC<StepProps> = ({ title, subtitle, step }) => {
  const stepState = useStep();
  return (
    <div className="flex gap-3 items-center">
      <div
        className={`
      rounded-full 
      h-9 
      w-9 
      border-alabaster  
      border 
      flex 
      justify-center 
      items-center
      transition 
      duration-1000 
      ease-linear
      ${step === stepState.step ? "bg-alabaster" : "bg-transparent"}
      `}
      >
        <span
          className={`
          font-bold
          transition 
          duration-1000 
          ease-in-out
        ${step === stepState.step ? "text-marine-blue" : "text-alabaster"}
        `}
        >
          {step}
        </span>
      </div>
      <div className="uppercase hidden md:block">
        <div className="text-light-gray font-light">{title}</div>
        <div className="text-alabaster font-semibold">{subtitle}</div>
      </div>
    </div>
  );
};

export default Step;
