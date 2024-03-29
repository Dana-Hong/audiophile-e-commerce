// libraries
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

// hooks
import useAuthContext from "../hooks/useAuthContext";
import useCartContext from "../hooks/useCartContext";
import useModalContext from "../hooks/useModalContext";

// components
import Button from "../components/ui/Button";
import Input from "../components/ui/inputs/Input";

// icons
import Logo from "../components/icons/Logo";
import { API_BASE_URL } from "../utils/utils";

export type SignupForm = {
  email: string;
  password: string;
  passwordconfirm: string;
};

type SignupError = {
  email: string;
  password: string;
};
export default function Signup() {
  const { modal } = useModalContext();
  const { setCart } = useCartContext();
  const { user, setUser } = useAuthContext();
  const [signupForm, setSignupForm] = useState<SignupForm>({
    email: "",
    password: "",
    passwordconfirm: "",
  });

  const [error, setError] = useState<SignupError>({
    email: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>, id: keyof SignupForm) {
    setSignupForm((sf) => ({ ...sf, [id]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const passwordsMatch = signupForm.password === signupForm.passwordconfirm;
    if (!passwordsMatch) {
      setError({ email: "", password: "Passwords do not match." });
      return;
    }
    const response = await fetch(`${API_BASE_URL}/api/user/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: signupForm.email, password: signupForm.password }),
    });

    const data = await response.json();

    const cartResponse = await fetch(`${API_BASE_URL}/api/cart`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${data.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ items: [], price: 0 }),
    });

    const cartData = await cartResponse.json();

    if (data.email && cartData._id) {
      const { items, user_id } = cartData;
      localStorage.setItem("user", JSON.stringify(data));
      localStorage.setItem("cart", JSON.stringify({ items, user_id }));
      setUser(data);
      setCart({ items, user_id });
      setError({ email: "", password: "" });
      return;
    }

    switch (data.type) {
      case "email": {
        setError({ email: data.message, password: "" });
        break;
      }
      case "password": {
        setError({ email: "", password: data.message });
        break;
      }
    }
  }

  if (user.email !== "") {
    return <Navigate to="/" />;
  }

  return (
    <main
      className={`${
        modal.cart ? "mt-[85px]" : ""
      } mx-auto flex w-full items-center bg-gray min-[493px]:min-h-[calc(100vh-577px-85px)] min-[768px]:min-h-[calc(100vh-445px-85px)] min-[870px]:min-h-[calc(100vh-425px-85px)] min-[1110px]:min-h-[calc(100vh-85px-388px)]`}
    >
      <div
        className={`flex w-full grow flex-col items-center justify-center gap-8 min-[1110px]:flex-row min-[1110px]:items-start`}
      >
        <section className="max-w-[730px] rounded-lg bg-white p-6 md:px-7 md:py-[30px] min-[1110px]:px-12">
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 rounded-lg">
            <Logo className="fill-black" />
            <Input
              id="email"
              type="email"
              name="Email"
              placeholder="johndoe@gmail.com"
              value={signupForm.email}
              handleChange={(e) => handleChange(e, "email")}
              className={`${error.email ? "border-red-500" : ""}`}
            />
            {error.email !== "" && (
              <p className="-mt-2 self-start text-xs text-red-500">{error.email}</p>
            )}
            <Input
              id="password"
              type="password"
              name="Password"
              placeholder="******"
              value={signupForm.password}
              handleChange={(e) => handleChange(e, "password")}
              className={`${error.password ? "border-red-500" : ""}`}
            />
            <Input
              id="passwordconfirm"
              type="password"
              name="Confirm Password"
              placeholder="******"
              value={signupForm.passwordconfirm}
              handleChange={(e) => handleChange(e, "passwordconfirm")}
              className={`${error.password === "Passwords do not match." ? "border-red-500" : ""}`}
            />
            {error.password !== "" && (
              <p className=" -mt-2 max-w-[305px] self-start text-xs text-red-500">
                {error.password}
              </p>
            )}
            <Button className="mt-4">Sign up</Button>
            <div className="text-sm">
              Already have an account? Click{" "}
              <Link className="font-bold" to="/login">
                here
              </Link>{" "}
              to log in
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
