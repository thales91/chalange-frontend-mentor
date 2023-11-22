import { useForm, useWatch } from "react-hook-form";
import Heading from "../Heading";
import PlanItem from "../PlanItem";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormField, FormMessage } from "../ui/form";
import { Switch } from "../ui/switch";
import useStep from "@/app/hook/step";
import Buttons from "./Buttons";
import useSubscription from "@/app/hook/useSubscription";

enum TYPE {
  MONTHLY = 0,
  YEARLY = 1,
}

const schema = z.object({
  plan: z.string().min(1),
  recurrence: z.boolean(),
});

export const plans = [
  {
    icon: "/images/icon-arcade.svg",
    title: "Arcade",
    priceMonthly: 9,
    priceYearly: 90,
  },
  {
    icon: "/images/icon-advanced.svg",
    title: "Advanced",
    priceMonthly: 12,
    priceYearly: 120,
  },
  {
    icon: "/images/icon-pro.svg",
    title: "Pro",
    priceMonthly: 15,
    priceYearly: 150,
  },
];

const Plan = () => {
  const { nextStep } = useStep();
  const { subscription, updateSubscription } = useSubscription();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      plan: subscription.plan || "Arcade",
      recurrence: subscription.recurrence == 0 ? false : true,
    },
  });

  const results = useWatch({ control: form.control, name: "recurrence" });
  const type = !results ? TYPE.MONTHLY : TYPE.YEARLY;

  const submitForm = form.handleSubmit(async (data) => {
    updateSubscription({ ...subscription, ...data, recurrence: type });
    nextStep();
  });

  return (
    <>
      <div>
        <Heading
          title="Select your plan"
          subtitle="You have the option of monthly or yearly billing."
        />

        <Form {...form}>
          <div className="flex flex-col md:flex-row gap-4">
            {plans.map((plan) => (
              <PlanItem
                key={plan.title}
                icon={plan.icon}
                title={plan.title}
                recurrence={results ? "yr" : "mo"}
                price={
                  type == TYPE.MONTHLY ? plan.priceMonthly : plan.priceYearly
                }
                name="plan"
                control={form.control}
                value={plan.title}
              />
            ))}
            <div
              className={`${
                form.formState.errors["plan"] && "text-strawberry-red"
              } `}
            >
              {form.formState.errors["plan"]?.message}
            </div>
          </div>
          <div className="rounded-md bg-alabaster flex justify-center py-2 mt-8">
            <div className="flex gap-2">
              <span
                className={`${
                  !results ? "text-marine-blue" : "text-light-gray"
                } font-bold text-sm
                transition 
      duration-1000 
      ease-linear`}
              >
                Monthly
              </span>
              <FormField
                control={form.control}
                name="recurrence"
                render={({ field }) => (
                  <>
                    <Switch
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <FormMessage />
                  </>
                )}
              />
              <span
                className={`${
                  results ? "text-marine-blue" : "text-light-gray"
                } font-bold text-sm
                transition 
      duration-1000 
      ease-linear`}
              >
                Yearly
              </span>
            </div>
          </div>
        </Form>
      </div>
      <Buttons submitForm={submitForm} />
    </>
  );
};

export default Plan;
