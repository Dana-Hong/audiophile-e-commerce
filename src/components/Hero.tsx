import Button from "./Button";
import HeroMobile from "../assets/home/mobile/image-header.jpg";
import HeroTablet from "../assets/home/tablet/image-header.jpg";

export default function Hero() {
  return (
    <section className="bg-black text-center text-white min-[1110px]:text-left">
      <div className="min-[400px]:bg-hero-tablet relative mx-auto w-full max-w-[1110px] bg-hero-mobile bg-cover bg-center bg-no-repeat min-[768px]:bg-hero-desktop">
        <div className="flex flex-col items-center gap-4 py-28 min-[1110px]:items-start">
          <h2 className="text-sm uppercase tracking-[10px] opacity-50">
            New Product
          </h2>
          <h1 className="z-10 text-4xl font-bold md:max-w-[396px] md:text-[56px] md:leading-[58px] md:tracking-[2px]">
            XX99 MARK II HEADPHONES
          </h1>
          <p className="max-w-[350px] pt-2 pb-3 text-[15px] font-medium leading-6 opacity-75">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button className="z-10">See product</Button>
        </div>{" "}
      </div>
    </section>
  );
}
