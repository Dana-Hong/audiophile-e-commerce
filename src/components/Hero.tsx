import Button from "./Button";

export default function Hero() {
  return (
    <section className="mx-auto max-w-[1440px] bg-hero-mobile bg-cover bg-bottom bg-no-repeat text-center text-white min-[400px]:bg-hero-tablet min-[1110px]:bg-hero-desktop min-[1110px]:text-left">
      <div className="mx-auto w-full max-w-[1110px] py-28 min-[400px]:py-32">
        <div className="flex flex-col items-center gap-4 min-[1110px]:items-start">
          <h2 className="text-sm uppercase tracking-[10px] opacity-50">New Product</h2>
          <h1 className="z-10 text-4xl font-bold md:max-w-[396px] md:text-[56px] md:leading-[58px] md:tracking-[2px]">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="max-w-[350px] pt-2 pb-3 text-[15px] font-medium leading-6 opacity-75">
            Experience natural, lifelike audio and exceptional build quality made for the passionate
            music enthusiast.
          </p>
          <Button className="z-10">See product</Button>
        </div>
      </div>
    </section>
  );
}
