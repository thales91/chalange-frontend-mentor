import Form from "./components/Form";
import Input from "./components/Input";

export default function Home(teste: any) {
  console.log(teste);
  return (
    <main className="flex min-h-screen flex-col md:items-center justify-center md:p-24 md:bg-charcoal-grey">
      <div className="bg-white md:p-5 rounded-3xl grid grid-cols-1 md:grid-cols-side-by-side min-h-[640px]">
        <div className="p-7 md:p-10 order-2 md:order-1">
          <h1 className="text-5xl mt-3 py-5 font-bold">Stay updated!</h1>
          <div className="py-5">
            Join 60,000+ product managers receiving monthly updates on:
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 relative">
              <div className="rounded-full bg-tomato text-white w-5 h-5 after:absolute after:left-1.5 after:top-1 after:w-1.5 after:h-2 after:border-white after:border-b-2 after:border-r-2 after:rotate-45"></div>
              Product discovery and building what matters
            </div>
            <div className="flex gap-2 relative">
              <div className="rounded-full bg-tomato text-white w-5 h-5 after:absolute after:left-1.5 after:top-1 after:w-1.5 after:h-2 after:border-white after:border-b-2 after:border-r-2 after:rotate-45"></div>
              Measuring to ensure updates are a success
            </div>
            <div className="flex gap-2 relative">
              <div className="rounded-full bg-tomato text-white w-5 h-5 after:absolute after:left-1.5 after:top-1 after:w-1.5 after:h-2 after:border-white after:border-b-2 after:border-r-2 after:rotate-45"></div>
              And much more!
            </div>
          </div>
          <Form />
        </div>
        <div className="order-1 md:order-2 md:bg-sidebar-image bg-no-repeat bg-contain  bg-mobile-image h-[300px] md:h-auto w-full"></div>
      </div>
    </main>
  );
}
