type InputProps = {
  className?: string;
  name: string;
  placeholder: string;
  type: "email" | "text" | "tel";
};
export default function Input({ className, name, placeholder, type }: InputProps) {
  return (
    <div className="flex w-full grow flex-col gap-2 md:max-w-[305px]">
      <label htmlFor="input" className="text-xs font-bold">
        {name}
      </label>
      <input
        id="input"
        type={type}
        placeholder={placeholder}
        className="rounded-lg border border-gray px-6 py-4 text-sm"
      />
    </div>
  );
}
