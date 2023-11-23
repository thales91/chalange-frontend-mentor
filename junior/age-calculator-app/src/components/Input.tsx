import { Controller } from "react-hook-form";

interface InputProps {
  label: string;
  name: string;
  placeholder?: string;
  control: any;
}
const Input: React.FC<InputProps> = ({ label, name, control, placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => (
          <>
            <label
              htmlFor=""
              className={`
            ${
              fieldState.error?.message ? "text-light-red" : "text-smokey-grey"
            } 
            font-semibold`}
            >
              {label}
            </label>
            <input
              placeholder={placeholder}
              type="number"
              className={`
              focus:border-purple 
              ${
                fieldState.error?.message
                  ? "border-light-red focus:border-light-red"
                  : "border-off-white "
              } 
              max-w-[150px] 
              focus:outline-none 
              placeholder-smokey-grey
              border 
              text-off-black 
              font-bold 
              focus:border-purple 
              rounded-sm 
              text-[32px] 
              px-3 
              py-2`}
              {...field}
              onChange={(event) => field.onChange(+event.target.value)}
            />
            <div className="text-light-red">{fieldState.error?.message}</div>
          </>
        )}
      />
    </div>
  );
};

export default Input;
