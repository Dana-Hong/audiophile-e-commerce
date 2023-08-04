import { FormData } from "../../../routes/checkout";
import { LoginForm } from "../../../routes/login";
import { SignupForm } from "../../../routes/signup";

type InputProps = {
  className?: string;
  name: string;
  placeholder: string;
  type: "email" | "text" | "tel" | "password";
  id: keyof FormData | keyof LoginForm | keyof SignupForm;
  value: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>, id: string) => void;
};

export default function Input({
  value,
  id,
  name,
  placeholder,
  type,
  handleChange,
  className,
}: InputProps) {
  return (
    <div className="flex w-full grow flex-col gap-2 md:max-w-[305px]">
      <label htmlFor={id} className="text-xs font-bold">
        {name}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        className={`rounded-lg border  border-gray px-6 py-4 text-sm focus:outline-4 focus:outline-gray ${className}`}
        onChange={(e) => handleChange(e, id)}
      />
    </div>
  );
}
