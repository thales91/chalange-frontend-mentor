import Image from "next/image";
import Button from "../components/Button";

interface IParams {
  params: {};
  searchParams: {
    email: string;
  };
}

const Page = ({ searchParams }: IParams) => {
  console.log(searchParams);
  return (
    <main className="flex min-h-screen flex-col md:items-center md:justify-center md:p-24 md:bg-dark-slate-grey">
      <div className="bg-white p-14 max-w-[400px] h-screen md:h-auto rounded-2xl flex flex-col justify-between">
        <div className="flex-1 flex flex-col justify-center">
          <div>
            <Image
              src="./icon-success.svg"
              height={60}
              width={60}
              alt="success icon"
            ></Image>
          </div>
          <h1 className="text-5xl py-5 text-dark-slate-grey font-bold">
            Thanks for subscribing!
          </h1>
          <div className="text-xs">
            A confirmation email has been sent to{" "}
            <strong>{searchParams.email}</strong>. Please open it and click the
            button inside to confirm your subscription.
          </div>
        </div>
        <div className="mt-4">
          <Button>Dismiss message</Button>
        </div>
      </div>
    </main>
  );
};

export default Page;
