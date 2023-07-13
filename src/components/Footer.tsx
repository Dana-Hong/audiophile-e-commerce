import Logo from "./Logo";
import Facebook from "./icons/Facebook";
import Twitter from "./icons/Twitter";
import Instagram from "./icons/Instagram";

export default function Footer() {
  return (
    <footer className="w-full bg-almostBlack">
      <div className="mx-auto max-w-[1110px] px-10 text-sm text-white md:px-40 min-[1110px]:px-0">
        <div className="mx-auto h-[4px] w-24 bg-orange md:mx-0"></div>
        <div className="flex w-full flex-col items-center gap-12 pt-12 md:items-start md:pt-14 lg:justify-between min-[1110px]:flex-row min-[1110px]:pt-[71px]">
          <Logo />
          <nav>
            <ul className="flex flex-col items-center gap-4 text-sm font-bold uppercase leading-6 tracking-[2px] md:flex-row">
              <li>
                <a href="/" className="hover:text-orange">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-orange">
                  Headphones
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-orange">
                  Speakers
                </a>
              </li>
              <li>
                <a href="/" className="hover:text-orange">
                  Earphones
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <p className="mx-auto max-w-md py-12 text-center opacity-50 md:mx-0 md:max-w-2xl md:text-left min-[1110px]:max-w-[540px]">
          Audiophile is an all in one stop to fulfill your audio needs. We're a
          small team of music lovers and sound specialists who are devoted to
          helping you get the most out of personal audio. Come and visit our
          demo facility - we&apos;re open 7 days a week.
        </p>
        <div className="mx-auto flex w-full flex-col items-center md:flex-row md:justify-between">
          <p className="opacity-50">Copyright 2021. All Rights Reserved</p>
          <div className="flex items-center justify-center gap-4 pt-12 pb-10 min-[1110px]:-translate-y-20">
            <Facebook className="cursor-pointer fill-white hover:fill-orange" />
            <Twitter className="cursor-pointer fill-white hover:fill-orange" />
            <Instagram className="cursor-pointer fill-white hover:fill-orange" />
          </div>
        </div>
      </div>
    </footer>
  );
}
