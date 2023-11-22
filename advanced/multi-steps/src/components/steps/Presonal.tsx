import useStep from "@/app/hook/step";
import Heading from "../Heading";
import Input from "../Input";
import Buttons from "./Buttons";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form } from "../ui/form";
import useSubscription from "@/app/hook/useSubscription";

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(8),
});

const Personal = () => {
  const { nextStep } = useStep();
  const { subscription, updateSubscription } = useSubscription();
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: subscription,
  });

  const submitForm = form.handleSubmit(async (data) => {
    updateSubscription(data);
    nextStep();
  });
  return (
    <>
      <div>
        <Heading
          title="Personal info"
          subtitle="Please provide your name, email address, and phone number."
        />
        <form>
          <Form {...form}>
            <div className="flex flex-col justify-between">
              <div className="flex flex-col gap-8 mb-16">
                <Input
                  name="name"
                  label="Name"
                  placeholder="e.g. Stephen King"
                  control={form.control}
                />
                <Input
                  name="email"
                  label="Email Address"
                  placeholder="teste@test.com"
                  control={form.control}
                />
                <Input
                  name="phone"
                  label="Phone Number"
                  placeholder="e.g. +1 123 123 123"
                  control={form.control}
                />
              </div>
            </div>
          </Form>
        </form>
      </div>
      <Buttons submitForm={submitForm} />
    </>
  );
};

export default Personal;
