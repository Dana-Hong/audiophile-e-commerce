import Button from "./components/ui/Button";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex flex-col">
      <main className="mx-auto flex min-h-[calc(100vh-657px-85px)] max-w-[1110px] items-center justify-center min-[493px]:min-h-[calc(100vh-577px-85px)] min-[768px]:min-h-[calc(100vh-445px-85px)] min-[870px]:min-h-[calc(100vh-425px-85px)] min-[1110px]:min-h-[calc(100vh-388px-85px)]">
        <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
          <h1 className="self-start text-5xl font-semibold">Oops!</h1>
          <p className="text-2xl">
            Sorry, it looks like we couldn't find what you were looking for.
          </p>
          <div className="flex gap-4">
            <Button link path="/">
              Home
            </Button>
            <Button variant="secondary">Checkout</Button>
          </div>
        </div>
      </main>
    </div>
  );
}
