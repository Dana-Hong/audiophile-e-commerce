type RadioProps = {
  className?: string;
  name: string;
  id: string;
};
export default function Radio({ className, name, id }: RadioProps) {
  return (
    <div className="flex max-w-[305px] grow gap-2 rounded-lg border border-gray px-4 py-[18px] accent-orange">
      <input type="radio" id={id} name={name} />
      <label htmlFor={id} className="text-sm">
        {id}
      </label>
    </div>
  );
}
