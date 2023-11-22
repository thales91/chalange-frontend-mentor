import Heading from "../Heading";
import { z } from "zod";
import useStep from "@/app/hook/step";
import Buttons from "./Buttons";
import useSubscription from "@/app/hook/useSubscription";
import { Button } from "../ui/button";
import { plans } from "./Plan";
import { useMemo } from "react";
import { addOns } from "./AddOn";
import { MoneyFormat } from "@/lib/utils";

enum TYPE {
  MONTHLY = 0,
  YEARLY = 1,
}

interface resumeProps {
  plan?: string;
  recurrence: string;
  price?: number;
  online?: number;
  storage?: number;
  customize?: number;
  total?: number;
}

const Finishing = () => {
  const { nextStep, backStep } = useStep();
  const { subscription } = useSubscription();

  const submitForm = () => {
    nextStep();
  };

  const resume = useMemo((): resumeProps | undefined => {
    let result = {} as resumeProps;
    let total = 0;
    if (subscription.recurrence == TYPE.YEARLY) {
      total +=
        plans.find((item) => item.title === subscription.plan)?.priceYearly ||
        0;
      total += subscription.online
        ? addOns.find((item) => item.title === "Online service")?.priceYearly ||
          0
        : 0;
      total += subscription.storage
        ? addOns.find((item) => item.title === "Larger storage")?.priceYearly ||
          0
        : 0;
      total += subscription.customize
        ? addOns.find((item) => item.title === "Customizable Profile")
            ?.priceYearly || 0
        : 0;
      result = {
        plan: subscription.plan,
        recurrence: "yr",
        price: plans.find((item) => item.title === subscription.plan)
          ?.priceYearly,
        online: addOns.find((item) => item.title === "Online service")
          ?.priceYearly,
        storage: addOns.find((item) => item.title === "Larger storage")
          ?.priceYearly,
        customize: addOns.find((item) => item.title === "Customizable Profile")
          ?.priceYearly,
        total,
      };
    } else if (subscription.recurrence == TYPE.MONTHLY) {
      total +=
        plans.find((item) => item.title === subscription.plan)?.priceMonthly ||
        0;
      total += subscription.online
        ? addOns.find((item) => item.title === "Online service")
            ?.priceMonthly || 0
        : 0;
      total += subscription.storage
        ? addOns.find((item) => item.title === "Larger storage")
            ?.priceMonthly || 0
        : 0;
      total += subscription.customize
        ? addOns.find((item) => item.title === "Customizable Profile")
            ?.priceMonthly || 0
        : 0;
      result = {
        plan: subscription.plan,
        recurrence: "mo",
        price: plans.find((item) => item.title === subscription.plan)
          ?.priceMonthly,
        online: addOns.find((item) => item.title === "Online service")
          ?.priceMonthly,
        storage: addOns.find((item) => item.title === "Larger storage")
          ?.priceMonthly,
        customize: addOns.find((item) => item.title === "Customizable Profile")
          ?.priceMonthly,
        total,
      };
    }
    return result;
  }, [subscription]);
  console.log(resume);

  return (
    <>
      <div>
        <Heading
          title="Finishing up"
          subtitle="Double-check everything looks OK before confirming."
        />

        <div className="p-5 bg-alabaster rounded-md mb-10">
          <div className="flex justify-between pb-2 border-b border-magnolia ">
            <div>
              <div className="text-marine-blue font-semibold ">
                {subscription.plan}(
                {subscription.recurrence == 0 ? "Monthly" : "Yearly"})
              </div>
              <Button
                variant="link"
                className="text-cool-gray text-sm p-0 mt-0"
                onClick={() => backStep(2)}
              >
                (change)
              </Button>
            </div>
            <div className="font-bold">{`${MoneyFormat(resume?.price)}/${
              resume?.recurrence
            }`}</div>
          </div>
          <div className="flex flex-col gap-4 pt-4">
            {subscription.online && (
              <div className="flex justify-between">
                <div className="text-cool-gray">Online service</div>
                <div className="text-marine-blue">
                  +{resume?.online}/{resume?.recurrence}
                </div>
              </div>
            )}
            {subscription.storage && (
              <div className="flex justify-between">
                <div className="text-cool-gray">Larger storage</div>
                <div className="text-marine-blue">
                  +{resume?.storage}/{resume?.recurrence}
                </div>
              </div>
            )}
            {subscription.customize && (
              <div className="flex justify-between">
                <div className="text-light-gray">Customizable Profile</div>
                <div className="text-marine-blue">
                  +{resume?.customize}/{resume?.recurrence}
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-between px-5">
          <div className="text-cool-gray">
            total ({subscription.recurrence == 0 ? "per month" : "per year"})
          </div>
          <div className="text-purplish-blue">
            +{resume?.total}/{resume?.recurrence}
          </div>
        </div>
      </div>
      <Buttons submitForm={submitForm} />
    </>
  );
};

export default Finishing;
