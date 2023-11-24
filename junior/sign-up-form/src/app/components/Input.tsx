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
            <div className="flex justify-between">
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
              <div className="text-tomato">{fieldState.error?.message}</div>
            </div>

            <input
              placeholder={placeholder}
              type="text"
              className={`
              focus:border-purple 
              ${
                fieldState.error?.message
                  ? "border-tomato focus:border-tomato text-tomato placeholder-tomato/70  bg-tomato/20"
                  : "border-grey"
              } 
              focus:outline-none 
              placeholder-smokey-grey
              border 
              text-off-black 
              font-bold 
              focus:border-purple 
              rounded-sm 
              px-3 
              py-2`}
              {...field}
              onChange={(event) => field.onChange(event.target.value)}
            />
          </>
        )}
      />
    </div>
  );
};

export default Input;
