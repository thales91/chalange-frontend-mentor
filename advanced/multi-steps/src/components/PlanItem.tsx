import Image from "next/image";
import { FormField } from "./ui/form";
import { MoneyFormat } from "@/lib/utils";

interface PlanItemProps {
  value: string;
  icon: string;
  title: string;
  price: number;
  name: string;
  recurrence: string;
  control: any;
}

const PlanItem: React.FC<PlanItemProps> = ({
  value,
  icon,
  title,
  price,
  name,
  recurrence,
  control,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <label className="relative cursor-pointer w-full">
          <input
            type="radio"
            className="peer hidden"
            {...field}
            value={value}
          />
          <div className="rounded border border-light-gray hover:border-purplish-blue peer-checked:border-purplish-blue peer-checked:bg-pastel-blue/10 p-5 flex flex-row gap-4 md:flex-col md:h-40 ">
            <div className="md:flex-1">
              <Image src={icon} alt="icon" width={40} height={40} />
            </div>
            <div>
              <div className="font-bold text-marine-blue">{title}</div>
              <div className="text-light-gray">{`${MoneyFormat(
                price
              )}/${recurrence}`}</div>
            </div>
          </div>
        </label>
      )}
    />
  );
};

export default PlanItem;
