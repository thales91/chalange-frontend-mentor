"use client";
import Input from "./Input";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  differenceInCalendarDays,
  differenceInDays,
  differenceInMonths,
  differenceInYears,
  lastDayOfMonth,
} from "date-fns";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  day: z.number().min(1).max(31),
  month: z.number().min(1).max(12),
  year: z.number().min(1).max(new Date().getFullYear()),
});

const Calculator = () => {
  const { control, register, handleSubmit, setError } = useForm<
    z.infer<typeof schema>
  >({
    resolver: zodResolver(schema),
  });
  const [data, setData] = useState({
    day: "",
    month: "",
    year: "",
  });
  const onSubmit = handleSubmit((data) => {
    const { day, month, year } = data;
    const today = new Date();
    const dtNascimento = new Date(year, month - 1, day);
    register("day", { value: day, valueAsNumber: true });
    const anos = differenceInYears(today, dtNascimento);
    const meses = differenceInMonths(
      today,
      new Date(dtNascimento.getTime() + anos * 31536000000)
    ); // Aproximadamente o número de milissegundos em um ano

    debugger;
    const dias = differenceInDays(
      today,
      new Date(dtNascimento.getTime() + anos * 31536000000 + meses * 2592000000)
    );

    const ultimoDiaMes = lastDayOfMonth(new Date(year, month - 1, 1));
    if (day > ultimoDiaMes.getDate()) {
      setError("day", { message: "Invalid day" });
      return;
    }
    setData({
      day: dias.toString(),
      month: meses.toString(),
      year: anos.toString(),
    });
  });
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="flex flex-row gap-3 pb-12 border-b border-light-grey">
          <Input control={control} placeholder="DD" name="day" label="DAY" />
          <Input
            control={control}
            placeholder="MM"
            name="month"
            label="MONTH"
          />
          <Input
            control={control}
            placeholder="YYYY"
            name="year"
            label="YEAR"
          />
        </div>
        <div className="flex justify-end relative -top-12">
          <button
            type="submit"
            className="bg-purple 
          hover:bg-off-black 
          transition 
          duration-300 
          ease-linear 
          text-white 
          font-bold rounded-full 
          h-24 
          w-24 
          px-6 
          py-3 
          -top-8"
          >
            <Image src="./icon-arrow.svg" alt="" width={50} height={50} />
          </button>
        </div>
      </form>
      <div className="font-bold">
        <div className="flex ">
          <h1 className="text-8xl text-purple">{data.year || "--"}</h1>{" "}
          <h1 className="text-8xl text-off-black">years</h1>
        </div>
        <div className="flex">
          <h1 className="text-8xl text-purple">{data.month || "--"}</h1>{" "}
          <h1 className="text-8xl text-off-black">months</h1>
        </div>
        <div className="flex">
          <h1 className="text-8xl text-purple">{data.day || "--"}</h1>{" "}
          <h1 className="text-8xl text-off-black">days</h1>
        </div>
      </div>
    </>
  );
};

export default Calculator;
