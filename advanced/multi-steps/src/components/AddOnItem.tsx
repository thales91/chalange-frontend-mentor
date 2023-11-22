import Image from "next/image";
import { FormField } from "./ui/form";
import { MoneyFormat } from "@/lib/utils";

interface PlanItemProps {
  description: string;
  title: string;
  price: number;
  name: string;
  recurrence: string;
  control: any;
}

const AddOnItem: React.FC<PlanItemProps> = ({
  description,
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
      render={({ field, fieldState, formState }) => (
        <label className="relative cursor-pointer w-full">
          <div
            className={`rounded border border-light-gray ${
              field.value ? "border-purplish-blue bg-pastel-blue/10" : ""
            } hover:border-purplish-blue p-5 flex flex-row gap-4 items-center`}
          >
            <input
              type="checkbox"
              checked={field.value}
              className="group before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-purplish-blue checked:bg-purplish-blue checked:before:bg-purplish-blue hover:before:opacity-10"
              {...field}
            />
            <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="1"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="flex-1">
              <div className="font-bold text-marine-blue">{title}</div>
              <div className="text-light-gray">{description}</div>
            </div>
            <div className="text-purplish-blue">
              +{`${MoneyFormat(price)}/${recurrence}`}
            </div>
          </div>
        </label>
      )}
    />
  );
};

export default AddOnItem;
