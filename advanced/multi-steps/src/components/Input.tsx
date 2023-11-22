import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input as InputUI } from "./ui/input";
interface InputProps {
  name: string;
  placeholder: string;
  control: any;
  label: string;
}

const Input: React.FC<InputProps> = ({ name, placeholder, control, label }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field, fieldState, formState }) => {
        return (
          <FormItem>
            <div className="flex justify-between">
              <FormLabel className="text-marine-blue">{label}</FormLabel>
              <FormMessage />
            </div>
            <FormControl>
              <InputUI
                placeholder={placeholder}
                {...field}
                className={`${
                  fieldState.error
                    ? "border-strawberry-red"
                    : "border-marine-blue"
                }`}
              />
            </FormControl>
          </FormItem>
        );
      }}
    />
  );
};

export default Input;
