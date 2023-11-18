import Image from "next/image";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-3xl w-full md:max-w-[500px] shadow-2xl shadow-pale-blue">
        <div className="bg-gradient-to-b from-slate-blue to-royal-blue rounded-b-3xl md:rounded-3xl flex-1 flex flex-col items-center text-center p-6 md">
          <div className="text-pale-blue py-2">Your Result</div>
          <div className="rounded-full bg-gradient-to-b from-violet-blue to-persian-blue w-40 h-40 flex flex-col items-center justify-center">
            <div className="text-5xl font-bold flex items-center justify-center text-white mt-2">
              76
            </div>
            <div className="text-pale-blue pt-1">of 100</div>
          </div>
          <div className="text-lg py-4 text-white">Great</div>
          <div className="text-xs text-pale-blue px-5 ">
            You scored higher than 65% of the people who have taken these tests.
          </div>
        </div>
        <div className="p-6 flex flex-col flex-1">
          <div className="font-bold text-xl">Summary</div>
          <div className="flex flex-col gap-2 flex-1 pt-2">
            <div className="flex justify-between bg-light-red bg-opacity-10 rounded-md px-2 py-2">
              <div className="text-light-red flex">
                <Image
                  src="/icon-reaction.svg"
                  height={16}
                  width={16}
                  alt="Icon Memory"
                  className="mr-2"
                ></Image>
                Reaction
              </div>
              <div>
                <strong>80</strong> / 100
              </div>
            </div>
            <div className="flex justify-between bg-orangey-yellow bg-opacity-10 rounded-md px-2 py-2">
              <div className="flex text-orangey-yellow">
                <Image
                  src="/icon-memory.svg"
                  height={16}
                  width={16}
                  alt="Icon Memory"
                  className="mr-2"
                ></Image>
                Memory
              </div>
              <div>
                <strong>92</strong> / 100
              </div>
            </div>
            <div className="flex justify-between bg-green-teal bg-opacity-10 rounded-md px-2 py-2">
              <div className="flex text-green-teal">
                <Image
                  src="/icon-verbal.svg"
                  height={16}
                  width={16}
                  alt="Icon Memory"
                  className="mr-2"
                ></Image>
                Verbal
              </div>
              <div>
                <strong>61</strong> / 100
              </div>
            </div>
            <div className="flex justify-between bg-cobalt-blue bg-opacity-10 rounded-md px-2 py-2">
              <div className="flex text-cobalt-blue">
                {" "}
                <Image
                  src="/icon-visual.svg"
                  height={16}
                  width={16}
                  alt="Icon Memory"
                  className="mr-2"
                ></Image>
                Visual
              </div>
              <div>
                <strong>72</strong> / 100
              </div>
            </div>
          </div>
          <button className="bg-dark-gray-blue w-full py-2 text-white rounded-full mt-4 md:mt-0">
            Continue
          </button>
        </div>
      </div>

      <div className="text-royal-blue text-xs">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Thales de Souza Fonseca</a>.
      </div>
    </main>
  );
}
