"use client";
import { useRouter } from "next/navigation";

import { BsArrowLeftShort } from "react-icons/bs";

const BackButton = () => {
  const router = useRouter();
  const BackHandle = () => {
    router.back();
  };
  return (
    <button
      onClick={() => BackHandle()}
      className="my-5 flex items-center bg-white dark:bg-dark-blue shadow- rounded-md px-4 py-2"
    >
      <BsArrowLeftShort size={24} /> Back
    </button>
  );
};

export default BackButton;
