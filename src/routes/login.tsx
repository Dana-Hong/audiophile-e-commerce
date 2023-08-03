// libraries
import { Link, Navigate } from "react-router-dom";

// hooks
import useModalContext from "../hooks/useModalContext";
import useAuthContext from "../hooks/useAuthContext";
import useCartContext from "../hooks/useCartContext";

// components
import Button from "../components/ui/Button";
import Input from "../components/ui/inputs/Input";

// icons
import Logo from "../components/icons/Logo";
import { useState } from "react";

export type LoginForm = {
  email: string;
  password: string;
};

type LoginError = {
  all: string;
} & LoginForm;

export default function Login() {
  const { user, setUser } = useAuthContext();
  const { setCart } = useCartContext();
  const [loginForm, setLoginForm] = useState<LoginForm>({ email: "", password: "" } as LoginForm);
  const [error, setError] = useState<LoginError>({
    email: "",
    password: "",
    all: "",
  });
  const { modal } = useModalContext();

  function handleChange(e: React.ChangeEvent<HTMLInputElement>, id: keyof LoginForm) {
    setLoginForm((lf) => ({ ...lf, [id]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const response = await fetch("/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: loginForm.email, password: loginForm.password }),
    });

    const data = await response.json();

    if (response.ok) {
      const cartResponse = await fetch(`/api/cart`, {
        headers: {
          Authorization: `Bearer ${data.token}`,
        },
      });

      let cartData = await cartResponse.json();
      cartData = cartData[0];

      if (data.email && cartData.user_id) {
        const { items, user_id } = cartData;
        localStorage.setItem("user", JSON.stringify(data));
        localStorage.setItem("cart", JSON.stringify({ items, user_id }));
        setUser(data);
        setCart({ items, user_id });
        setError({ email: "", password: "", all: "" });
        return;
      }
    }

    if (!response.ok) {
      switch (data.type) {
        case "all": {
          setError({ email: "", password: "", all: data.message });
          break;
        }
        case "email": {
          setError({ email: data.message, password: "", all: "" });
          break;
        }
        case "password": {
          setError({ email: "", password: data.message, all: "" });
          break;
        }
      }
    }
  }

  if (user.email !== "") {
    return <Navigate to="/" />;
  }

  return (
    <main
      className={`${
        modal.cart || modal.orderConfirm ? "mt-[85px]" : ""
      } mx-auto flex w-full items-center bg-gray min-[493px]:min-h-[calc(100vh-577px-85px)] min-[768px]:min-h-[calc(100vh-445px-85px)] min-[870px]:min-h-[calc(100vh-425px-85px)] min-[1110px]:min-h-[calc(100vh-85px-388px)]`}
    >
      <div
        className={`flex w-full grow flex-col items-center justify-center gap-8 min-[1110px]:flex-row min-[1110px]:items-start`}
      >
        <section className="max-w-[730px] rounded-lg bg-white p-6 md:px-7 md:py-[30px] min-[1110px]:px-12">
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="flex flex-col items-center gap-4 rounded-lg"
          >
            <Logo className="fill-black" />
            <Input
              id="email"
              type="email"
              name="Email"
              value={loginForm.email}
              handleChange={(e) => handleChange(e, "email")}
              placeholder="alexei@mail.com"
              className={`${
                (error.all && loginForm.email === "") || error.email ? "border-red-500" : ""
              }`}
            />
            {error.email !== "" && (
              <p className="-mt-2 self-start text-xs text-red-500">{error.email}</p>
            )}
            <Input
              id="password"
              type="password"
              name="Password"
              value={loginForm.password}
              placeholder="******"
              handleChange={(e) => handleChange(e, "password")}
              className={`${
                (error.all && loginForm.password === "") || error.password ? "border-red-500" : ""
              }`}
            />
            {error.all && error.all !== "" ? (
              <p className="-mt-2 self-start text-xs text-red-500">{error.all}</p>
            ) : (
              error.password !== "" && (
                <p className="-mt-2 self-start text-xs text-red-500">{error.password}</p>
              )
            )}
            <Button className="mt-4">Log in</Button>
            <div className="text-sm">
              {" "}
              Don't have an account? Click{" "}
              <Link className="font-bold" to="/signup">
                {" "}
                here{" "}
              </Link>{" "}
              to sign up{" "}
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
