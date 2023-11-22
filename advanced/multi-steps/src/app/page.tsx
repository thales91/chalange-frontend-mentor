import Form from "@/components/Form";
import Step from "@/components/Steps";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center md:justify-center md:pt-20 md:p-24 bg-magnolia z-0">
      <div className="grid grid-cols-1 md:grid-cols-side-by-side md:shadow-xl z-20 rounded-lg">
        {/* <!-- Sidebar start --> */}
        <div className="md:p-5 md:bg-white md:h-full md:rounded-l-lg">
          <div className="md:h-full bg-mobile-image md:bg-sidebar-image bg-cover bg-no-repeat h-36 p-5 md:p-10 flex flex-row justify-center items-start top-0 md:flex-col md:justify-start gap-4 z-0 left-0">
            <Step step={1} title="Step 1" subtitle="Your info" />
            <Step step={2} title="Step 2" subtitle="Select plan" />
            <Step step={3} title="Step 3" subtitle="Add-ons" />
            <Step step={4} title="Step 4" subtitle="Summary" />
          </div>
        </div>
        {/* <!-- Sidebar end --> */}
        <div className=" md:p-5 bg-white rounded-lg mx-5 md:mx-0 -top-10 md:top-0 relative shadow-xl md:shadow-none md">
          {/* <!-- Step 1 start --> */}
          <Form />
          <div className="hidden">
            Personal info Please provide your name, email address, and phone
            number. Name e.g. Stephen King Email Address e.g.
            stephenking@lorem.com Phone Number e.g. +1 234 567 890 Next Step
            {/* <!-- Step 1 end --> */}
            {/* <!-- Step 2 start --> */}
            Select your plan You have the option of monthly or yearly billing.
            Arcade $9/mo Advanced $12/mo Pro $15/mo Monthly Yearly Go Back Next
            Step
            {/* <!-- Step 2 end --> */}
            {/* <!-- Step 3 start --> */}
            Pick add-ons Add-ons help enhance your gaming experience. Online
            service Access to multiplayer games +$1/mo Larger storage Extra 1TB
            of cloud save +$2/mo Customizable Profile Custom theme on your
            profile +$2/mo Go Back Next Step
            {/* <!-- Step 3 end --> */}
            {/* <!-- Step 4 start --> */}
            Finishing up Double-check everything looks OK before confirming.
            {/* <!-- Dynamically add subscription and add-on selections here --> */}
            Total (per month/year) Go Back Confirm
            {/* <!-- Step 4 end --> */}
            {/* <!-- Step 5 start --> */}
            Thank you! Thanks for confirming your subscription! We hope you have
            fun using our platform. If you ever need support, please feel free
            to email us at support@loremgaming.com.
          </div>
          {/* <!-- Step 5 end --> */}
        </div>
      </div>
    </main>
  );
}
