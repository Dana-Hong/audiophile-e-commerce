import { FormData } from "../../../routes/checkout";

type RadioProps = {
  className?: string;
  name: string;
  label: string;
  id: string;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

export default function Radio({ className, label, formData, setFormData, name, id }: RadioProps) {
  const checked = formData[name as keyof FormData] === id.toLocaleLowerCase();
  function handleClick(id: keyof FormData) {
    setFormData((fd) => ({ ...fd, [name]: id }));
  }
  return (
    <label
      htmlFor={id}
      className={`flex max-w-[305px] grow gap-2 rounded-lg border border-gray px-4 py-[18px] accent-orange ${className}`}
    >
      <input
        type="radio"
        id={id}
        name={name}
        checked={checked}
        value={formData[id as keyof FormData]}
        onChange={() => handleClick(id as keyof FormData)}
      />
      <span className="text-sm">{label}</span>
    </label>
  );
}
