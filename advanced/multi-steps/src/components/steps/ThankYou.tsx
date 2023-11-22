const Thankyou = () => {
  return (
    <div className="flex flex-col justify-center items-center md:h-5/6 md:w-5/6 md:absolute">
      <img src="/images/icon-thank-you.svg" alt="thank" />
      <div className="text-marine-blue text-2xl font-bold py-4">Thank you!</div>
      <div className="text-cool-gray text-center">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </div>
    </div>
  );
};

export default Thankyou;
