"use client";
import { useForm } from "react-hook-form";
import Input from "./Input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "./Button";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z.string().email(),
});

const Form = () => {
  const { control, handleSubmit } = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
  });

  const router = useRouter();

  const onSubmit = (data: z.infer<typeof schema>) => {
    console.log(data);

    router.push("/success?email=" + data.email);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="pt-8">
      <div>
        <Input
          label="Email address"
          name="email"
          control={control}
          placeholder="email@company.com"
        />
      </div>
      <div>
        <Button>Subscribe to monthly newsletter</Button>
      </div>
    </form>
  );
};

export default Form;
