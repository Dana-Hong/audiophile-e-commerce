import { FormData } from "../../../routes/checkout";

type DropdownProps = {
  name: string;
  id: keyof FormData;
  optionsList: string[];
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
};

export default function Dropdown({ name, id, optionsList, formData, setFormData }: DropdownProps) {
  function handleChange(e: React.ChangeEvent<HTMLSelectElement>, key: keyof FormData) {
    setFormData((fd) => ({ ...fd, [key]: e.target.value }));
  }

  const options = optionsList.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  return (
    <div className="flex w-full grow flex-col gap-2 md:max-w-[305px]">
      <label htmlFor="select" className="text-xs font-bold">
        {name}
      </label>
      <select
        onChange={(e) => handleChange(e, id as keyof FormData)}
        name={name}
        id={id}
        className="w-full rounded-lg border border-gray px-6 py-4 text-sm"
        value={formData[id as keyof FormData]}
      >
        {options}
      </select>
    </div>
  );
}
