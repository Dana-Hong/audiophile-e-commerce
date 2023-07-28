type NumbersProps = {
  number: number;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
};

export default function Numbers({ number, setNumber }: NumbersProps) {
  // function handleChange() {
  //   const itemExists = checkout.filter((item) => item.name === name);
  //   if (itemExists) {
  //     setCheckout((c) => [...c, { ...itemExists[0], quantity: number }]);
  //     return;
  //   }
  //   setCheckout((c) => [...c, { name, image, price, quantity: number }]);
  // }

  return (
    <div className="flex items-center bg-gray">
      <IncrementButton sign="-" setNumber={setNumber} />
      <input
        type="number"
        className="-ml-4 w-8 basis-1/3 translate-x-2 bg-gray text-center"
        value={number}
        min={0}
        max={50}
        onChange={(e) => setNumber(Number(e.target.value))}
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
      setNumber((n) => (n > 1 ? n - 1 : n));
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
