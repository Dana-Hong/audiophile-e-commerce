import { useState } from "react";

export default function Numbers({}) {
  const [number, setNumber] = useState<number>(1);

  return (
    <div className="flex items-center bg-gray">
      <IncrementButton sign="-" setNumber={setNumber} />
      <input
        type="number"
        className="w-8 basis-1/3 translate-x-2 bg-gray text-center"
        defaultValue={number}
        value={number}
        min={0}
        max={100}
        onChange={(e) =>
          setNumber((n) => (n > 0 || n < 50 ? Number(e.target.value) : n))
        }
      />
      <IncrementButton sign="+" setNumber={setNumber} />
    </div>
  );
}

function IncrementButton({
  sign,
  setNumber,
}: {
  sign: string;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
}) {
  function handleClick(sign: string) {
    console.log(sign);
    if (sign === "+") {
      setNumber((n) => (n < 50 ? n + 1 : n));
    }
    if (sign === "-") {
      setNumber((n) => (n > 0 ? n - 1 : n));
    }
  }
  return (
    <button
      onClick={() => handleClick(sign)}
      className="block basis-1/3 p-4 hover:text-orange active:font-bold"
    >
      {sign}
    </button>
  );
}
