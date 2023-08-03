// library imports
import { FormEvent, useContext, useState } from "react";
import { Link } from "react-router-dom";

// hooks
import useModalContext from "../hooks/useOrderConfirmContext";

// context
import { CheckoutContext } from "../context/CheckoutContext";

// components
import OrderConfirmModal from "../components/modals/OrderConfirmation";
import Button from "../components/ui/Button";
import Input from "../components/ui/inputs/Input";
import Dropdown from "../components/ui/inputs/Dropdown";
import Radio from "../components/ui/inputs/Radio";
import Categories from "../components/Categories";

// icons
import Trash from "../components/icons/Trash";

// utils
import { formatPrice } from "../utils/utils";

// data
import countriesData from "../countryData.json";

export type FormData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  zip: string;
  city: string;
  country: string;
  region: string;
  paymentDetails: "visa" | "mastercard";
};

export default function Checkout() {
  const { modal, setModal } = useModalContext();
  const { checkout, setCheckout } = useContext(CheckoutContext);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    address: "",
    zip: "",
    city: "",
    country: "United States",
    region: "New York",
    paymentDetails: "visa",
  } as FormData);
  const countries = countriesData.map((c) => c.countryName);
  const regions = countriesData
    .filter((c) => c.countryName === formData.country)[0]
    .regions.map((r) => r.name);

  const checkoutItems = checkout.map((item) => {
    const { name, category, slug, shortname, image, price, quantity } = item;
    const formattedPrice = formatPrice(price);
    return (
      <div key={name} className="flex items-center gap-4">
        <Link to={`../${category}/${slug}`}>
          <img src={image} alt="" className="h-16 w-16 rounded-lg" />
        </Link>
        <div className="flex grow flex-col">
          <div className="flex items-center justify-between">
            <Link to={`../${category}/${slug}`} className="font-bold hover:underline">
              {shortname}
            </Link>
            <p className="w-5 opacity-50">x{quantity}</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-sm opacity-50">{formattedPrice}</p>
            <div onClick={() => handleClick(name)}>
              <Trash className="h-5 w-5 cursor-pointer hover:fill-orange" />
            </div>
          </div>
        </div>
      </div>
    );
  });

  const subTotal = checkout.reduce((acc, curr) => (acc + curr.price) * curr.quantity, 0);

  async function handleContinueAndPay(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await fetch("/api/orders/", {
      method: "POST",
      body: JSON.stringify({ items: checkout, price: subTotal }),
      headers: {
        // Authorization: `Bearer ${user.token}`,
        "Content-type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      console.log(json.error);
    }
    if (response.ok) {
      console.log("New workout added", json);
    }
    setModal({ cart: false, orderConfirm: true });
  }

  function handleClick(name: string) {
    setCheckout((c) => c.filter((item) => item.name !== name));
  }

  function handleTextChange(e: React.ChangeEvent<HTMLInputElement>, id: keyof FormData) {
    setFormData((fd) => ({ ...fd, [id]: e.target.value }));
  }

  return (
    <main
      className={`${
        modal.cart || modal.orderConfirm ? "pt-[85px]" : ""
      } relative gap-8 bg-gray px-6 md:gap-20 md:px-10 min-[1150px]:gap-32 min-[1150px]:px-0`}
    >
      {modal.orderConfirm && <OrderConfirmModal />}
      <div className="mx-auto flex min-h-[calc(100vh-85px-657px)] max-w-[1150px] flex-col items-center justify-center gap-8 pt-4 pb-24 md:min-[1110px]:min-h-[calc(100vh-85px-425px)] min-[1110px]:min-h-[calc(100vh-85px-388px)] min-[1110px]:items-start">
        <Link
          to="/"
          className="mx-auto block w-full self-start bg-gray pb-6 text-[15px] font-medium text-opacity-50 opacity-50 hover:text-orange hover:opacity-100 min-[1110px]:ml-4"
        >
          Go Back
        </Link>
        {checkout.length === 0 ? (
          <div className="w-full rounded-lg bg-white">
            <div className="flex flex-col items-center justify-center gap-4 px-6 pt-6 md:flex-row">
              <p className="text-lg font-medium">Your cart is empty.</p>
              <Button link path="/">
                Home
              </Button>
            </div>
            <Categories />
          </div>
        ) : (
          <div className="flex w-full flex-col items-center justify-center gap-8 min-[1110px]:flex-row min-[1110px]:items-start">
            <section className="max-w-[730px] rounded-lg bg-white p-6 md:px-7 md:py-[30px] min-[1110px]:px-12">
              <form action="#" className="flex flex-col gap-8">
                <h1 className="text-2xl font-bold uppercase">Checkout</h1>
                <div className="flex flex-col gap-4">
                  <h2 className="text-sm font-bold uppercase text-orange">Billing details</h2>
                  <div className="flex flex-wrap gap-4">
                    <Input
                      placeholder="Alexei Ward"
                      name="Name"
                      type="text"
                      value={formData.name}
                      className="grow"
                      id="name"
                      handleChange={(e) => handleTextChange(e, "name")}
                    />
                    <Input
                      placeholder="alexei@mail.com"
                      name="Email"
                      type="email"
                      value={formData.email}
                      className="grow"
                      id="email"
                      handleChange={(e) => handleTextChange(e, "email")}
                    />
                    <Input
                      placeholder="+1 202-555-0136"
                      name="Phone Number"
                      type="tel"
                      value={formData.phone}
                      className="grow"
                      id="phone"
                      handleChange={(e) => handleTextChange(e, "phone")}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <h2 className="text-sm font-bold uppercase text-orange">Shipping Info</h2>
                  <div className="flex flex-wrap gap-4">
                    <Input
                      placeholder="1137 Williams Avenue"
                      name="Address"
                      type="text"
                      value={formData.address}
                      className="grow"
                      id="address"
                      handleChange={(e) => handleTextChange(e, "address")}
                    />
                    <Input
                      placeholder="10001"
                      name="Zip Code"
                      type="text"
                      value={formData.zip}
                      id="zip"
                      handleChange={(e) => handleTextChange(e, "zip")}
                    />
                    <Input
                      placeholder="New York"
                      name="City"
                      type="text"
                      value={formData.city}
                      id="city"
                      handleChange={(e) => handleTextChange(e, "city")}
                    />
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <Dropdown
                      name="Country"
                      id="country"
                      formData={formData}
                      optionsList={countries}
                      setFormData={setFormData}
                    />
                    <Dropdown
                      name="Region"
                      id="region"
                      formData={formData}
                      optionsList={regions}
                      setFormData={setFormData}
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <fieldset className="flex flex-wrap gap-4">
                    <legend className="mb-4 block text-sm font-bold uppercase text-orange">
                      Payment Details
                    </legend>
                    <Radio
                      name="paymentDetails"
                      label="Visa"
                      id="visa"
                      formData={formData}
                      setFormData={setFormData}
                    />
                    <Radio
                      name="paymentDetails"
                      label="Mastercard"
                      id="mastercard"
                      formData={formData}
                      setFormData={setFormData}
                    />
                  </fieldset>
                </div>
              </form>
            </section>
            <section className="w-full max-w-[730px] rounded-lg bg-white p-6 md:px-7 md:py-8 min-[1110px]:max-w-[350px] min-[1110px]:px-8">
              <form onSubmit={(e) => handleContinueAndPay(e)} className="flex flex-col gap-8">
                <h1 className="text-lg font-bold uppercase">Summary</h1>
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-6 pb-2">{checkoutItems}</div>
                  <div className="gap flex flex-col">
                    <div className="flex justify-between">
                      <p className="uppercase opacity-50">Total</p>
                      <p className="text-lg font-bold">{formatPrice(subTotal)}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="uppercase opacity-50">Shipping</p>
                      <p className="text-lg font-bold">{formatPrice(subTotal * 0.01)}</p>
                    </div>
                    <div className="flex justify-between">
                      <p className="uppercase opacity-50">VAT</p>
                      <p className="text-lg font-bold">{formatPrice(subTotal * 0.13)}</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="uppercase opacity-50">Grand Total</p>
                    <p className="text-lg font-bold text-orange">
                      {formatPrice(subTotal + subTotal * 0.13)}
                    </p>
                  </div>
                  <Button className="self-center">Continue &#38; Pay</Button>
                </div>
              </form>
            </section>
          </div>
        )}
      </div>
    </main>
  );
}
