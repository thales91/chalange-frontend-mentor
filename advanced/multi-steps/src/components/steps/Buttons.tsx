import useStep from "@/app/hook/step";
import { Button } from "../ui/button";

interface ButtonsProps {
  submitForm: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({ submitForm }) => {
  const { step, backStep } = useStep();

  return (
    <div className="flex justify-between fixed bottom-0 bg-white md:bg-transparent w-full left-0 p-5 md:px-14 md:absolute">
      <div>
        {/* {step > 1 && ( */}
        <Button variant="ghost" onClick={() => backStep()}>
          Go Back
        </Button>
        {/* )} */}
      </div>
      <Button type="submit" onClick={submitForm}>
        {step === 4 ? "Confirm" : "Next Step"}
      </Button>
    </div>
  );
};

export default Buttons;
