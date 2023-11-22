import useSubscription from "@/app/hook/useSubscription";
import Heading from "../Heading";
import { Form, FormField } from "../ui/form";
import AddOnItem from "../AddOnItem";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Buttons from "./Buttons";
import useStep from "@/app/hook/step";

const schema = z.object({
  online: z.boolean().default(false),
  storage: z.boolean().default(false),
  customize: z.boolean().default(false),
});

export const addOns = [
  {
    title: "Online service",
    description: "Access to multiplayer games",
    priceMonthly: 1,
    priceYearly: 10,
    name: "online",
  },
  {
    title: "Larger storage",
    description: "Extra 1TB of cloud save",
    priceMonthly: 2,
    priceYearly: 20,
    name: "storage",
  },
  {
    title: "Customizable Profile",
    description: "storage Extra 1TB of cloud save",
    priceMonthly: 2,
    priceYearly: 20,
    name: "customize",
  },
];

const AddOn = () => {
  const { subscription, updateSubscription } = useSubscription();
  const { nextStep } = useStep();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      online: subscription.online || false,
      storage: subscription.storage || false,
      customize: subscription.customize || false,
    },
  });

  const submitForm = form.handleSubmit(async (data) => {
    updateSubscription({ ...subscription, ...data });
    nextStep();
  });

  return (
    <>
      <div>
        <Heading
          title="Pick add-ons"
          subtitle="Add-ons help enhance your gaming experience."
        />

        <Form {...form}>
          <div className="flex flex-col gap-4">
            {addOns.map((addOn) => (
              <AddOnItem
                key={addOn.title}
                title={addOn.title}
                description={addOn.description}
                recurrence={subscription.recurrence == 1 ? "yr" : "mo"}
                price={
                  subscription.recurrence == 0
                    ? addOn.priceMonthly
                    : addOn.priceYearly
                }
                name={addOn.name}
                control={form.control}
              />
            ))}
          </div>
        </Form>
      </div>
      <Buttons submitForm={submitForm} />
    </>
  );
};

export default AddOn;
