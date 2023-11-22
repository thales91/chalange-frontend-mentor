"use client";
import useStep from "@/app/hook/step";
import Plan from "./steps/Plan";
import Personal from "./steps/Presonal";
import Container from "./Container";
import AddOn from "./steps/AddOn";
import Finishing from "./steps/Finishing";
import Thankyou from "./steps/ThankYou";

const Form = () => {
  const { step } = useStep();

  let content = <Personal />;

  if (step == 2) {
    content = <Plan />;
  }

  if (step == 3) {
    content = <AddOn />;
  }
  if (step == 4) {
    content = <Finishing />;
  }
  if (step == 5) {
    content = <Thankyou />;
  }

  return <Container>{content}</Container>;
};

export default Form;
