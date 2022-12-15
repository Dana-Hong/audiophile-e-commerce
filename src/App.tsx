import BestGear from "./components/BestGear";
import Categories from "./components/Categories";
import CategoryPreview from "./components/CategoryPreview";
import Paragraph from "./components/Paragraph";

import "./index.css";
import ProductPreview from "./ProductPreview";

function App() {
      return (
            <div className="App relative min-h-screen">
                  <nav className="fixed top-0 bottom-0 right-0 left-0 flex hidden items-center justify-center bg-black text-[15px] uppercase tracking-[2px] text-white sm:text-lg">
                        <ul className="flex flex-col items-center gap-20 md:flex-row">
                              <li>
                                    <a href="#">Home</a>
                              </li>
                              <li>
                                    <a href="#">Headphones</a>
                              </li>
                              <li>
                                    <a href="#">Speakers</a>
                              </li>
                              <li>
                                    <a href="#">Earphones</a>
                              </li>
                        </ul>
                  </nav>
                  <header className="relative bg-header py-8">
                        <div className="mx-auto flex w-[87%] max-w-[1110px] items-center justify-between md:justify-start lg:justify-between">
                              <img
                                    src="../assets/shared/tablet/icon-hamburger.svg"
                                    alt=""
                                    className="lg:hidden"
                              />
                              <img
                                    src="../assets/shared/desktop/logo.svg"
                                    alt=""
                                    className="md:ml-10 lg:ml-0"
                              />
                              <nav className="hidden text-[13px] uppercase tracking-[2px] text-white lg:block">
                                    <ul className="flex flex-col items-center gap-5 md:flex-row">
                                          <li>
                                                <a href="#">Home</a>
                                          </li>
                                          <li>
                                                <a href="#">Headphones</a>
                                          </li>
                                          <li>
                                                <a href="#">Speakers</a>
                                          </li>
                                          <li>
                                                <a href="#">Earphones</a>
                                          </li>
                                    </ul>
                              </nav>
                              <img
                                    src="../assets/shared/desktop/icon-cart.svg"
                                    alt=""
                                    className="md:ml-auto lg:ml-0"
                              />
                        </div>
                        <div className="absolute bottom-0 left-1/2 h-[1px] w-screen min-w-[375px] max-w-[1110px] translate-x-[-50%] bg-white opacity-[.2]"></div>
                  </header>
                  <ProductPreview
                        name="XX99 Mark II Headphones"
                        new={true}
                        text="The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound."
                        imageFirst={true}
                        smImage="../assets/product-xx99-mark-two-headphones/mobile/image-category-page-preview.jpg"
                        mdImage="../assets/product-xx99-mark-two-headphones/tablet/image-category-page-preview.jpg"
                        lgImage="../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
                  />
                  <ProductPreview
                        name="XX99 Mark I Headphones"
                        new={false}
                        text="As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go."
                        imageFirst={false}
                        smImage="../assets/product-xx99-mark-one-headphones/mobile/image-category-page-preview.jpg"
                        mdImage="../assets/product-xx99-mark-one-headphones/tablet/image-category-page-preview.jpg"
                        lgImage="../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg"
                  />
                  <ProductPreview
                        name="XX59 Headphones"
                        new={true}
                        text="Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move."
                        imageFirst={true}
                        smImage="../assets/product-xx59-headphones/mobile/image-category-page-preview.jpg"
                        mdImage="../assets/product-xx59-headphones/tablet/image-category-page-preview.jpg"
                        lgImage="../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg"
                  />

                  <main className="mx-auto flex hidden flex-col items-center gap-6">
                        <section className="relative w-full bg-header">
                              <div className="mx-auto max-w-[1110px]">
                                    <div className="absolute top-1/2 left-1/2 flex max-w-[415px] translate-y-[-50%]  translate-x-[-50%] flex-col items-center gap-10 text-white lg:left-10 lg:translate-x-[unset] lg:items-start min-[1280px]:left-[unset]">
                                          <div className="flex flex-col items-center gap-6 lg:items-start">
                                                <span className="text-[14px] uppercase tracking-[10px] opacity-50">
                                                      New product
                                                </span>
                                                <h1 className="inline text-center text-4xl font-bold uppercase leading-10 tracking-[1.3px] sm:text-[3.5rem] sm:leading-[3.5rem] sm:tracking-[2px] lg:text-left">
                                                      XX99 Mark II Headphones
                                                </h1>
                                                <Paragraph
                                                      text="Experience natural, lifelike audio and exceptional build
                                          quality made for the passionate music enthusiast."
                                                      colour="white"
                                                      additional="max-w-[350px] lg:text-left"
                                                />
                                          </div>
                                          <button className="w-[160px] max-w-[160px] bg-orange py-4 text-center text-[13px] font-bold uppercase tracking-[1px]">
                                                See product
                                          </button>
                                    </div>
                                    <picture>
                                          <source
                                                media="(min-width: 1024px)"
                                                srcSet="../assets/home/desktop/image-hero.jpg"
                                                sizes=""
                                          />
                                          <source
                                                media="(min-width: 768px)"
                                                srcSet="../assets/home/tablet/image-header.jpg"
                                                sizes=""
                                          />
                                          <img
                                                src="../assets/home/mobile/image-header.jpg"
                                                alt=""
                                          />
                                    </picture>
                              </div>
                        </section>
                        <Categories />
                        <section className="flex w-[87%] max-w-[1110px] flex-col items-center rounded-lg bg-orange bg-[url('../assets/home/desktop/pattern-circles.svg')] bg-cover bg-center bg-[bottom_5px] bg-no-repeat py-14 md:w-[89%] lg:flex-row lg:justify-evenly">
                              <div className="mt-8 flex max-w-[350px] flex-col items-center gap-6">
                                    <h2 className="w-min text-center text-4xl font-bold leading-10 text-white lg:text-left lg:text-[3.5rem] lg:leading-[3.5rem]">
                                          ZX9 SPEAKER
                                    </h2>
                                    <Paragraph
                                          text={`Upgrade to premium speakers that are phenomenally built to
                                          deliver truly remarkable sound.`}
                                          colour={"white"}
                                    />
                                    <button className="w-[160px] max-w-[160px] bg-black py-4 text-center text-[13px] font-bold uppercase tracking-[1px] text-white">
                                          See product
                                    </button>
                              </div>
                              <picture className="order-first lg:translate-y-[55px]">
                                    <source
                                          media="(min-width: 1024px)"
                                          srcSet="../assets/home/desktop/image-speaker-zx9.png"
                                          sizes=""
                                    />
                                    <source
                                          media="(min-width: 768px)"
                                          srcSet=""
                                          sizes=""
                                    />
                                    <img
                                          src="./assets/home/mobile/image-speaker-zx9.png"
                                          alt=""
                                          className="h-[207px] md:h-[237px] lg:h-[480px]"
                                    />
                              </picture>
                        </section>
                        {/* className="relative mx-6 flex flex-col items-center justify-center
                        rounded-lg" */}
                        <section className="w-[87%] max-w-[1110px] rounded-lg bg-[url('../assets/home/mobile/image-speaker-zx7.jpg')] bg-cover py-[100px] pl-6 md:w-[89%] md:bg-[url('../assets/home/tablet/image-speaker-zx7.jpg')] md:px-16 lg:bg-[url('../assets/home/desktop/image-speaker-zx7.jpg')]">
                              {/* className="absolute left-6 top-1/2 flex translate-y-[-50%] flex-col gap-8"> */}
                              <div className="flex flex-col gap-8">
                                    <h3 className="text-[1.75rem] font-bold leading-10 tracking-[2px]">
                                          ZX7 SPEAKER
                                    </h3>
                                    <button className="w-[160px] max-w-[160px] border-2 py-4 text-center text-[13px] font-bold uppercase tracking-[1px]">
                                          See product
                                    </button>
                              </div>
                              {/* <picture className="order-first block w-full">
                                    <source
                                          media="(min-width: 1440px)"
                                          srcSet="../assets/home/desktop/image-speaker-zx7.jpg"
                                          sizes=""
                                    />
                                    <source
                                          media="(min-width: 768px)"
                                          srcSet="../assets/home/tablet/image-speaker-zx7.jpg"
                                          sizes=""
                                    />
                                    <img
                                          src="../assets/home/mobile/image-speaker-zx7.jpg"
                                          alt=""
                                          className="block rounded-lg"
                                    />
                              </picture> */}
                        </section>
                        <section className="flex w-[87%] max-w-[1110px] flex-col gap-6 rounded-lg sm:flex-row">
                              <div className="flex flex-col justify-center gap-8 rounded-lg bg-gray py-10 pl-6 sm:w-1/2 lg:pl-24">
                                    <h3 className="text-[1.75rem] font-bold leading-10 tracking-[2px]">
                                          YX1 EARPHONES
                                    </h3>
                                    <button className="w-[160px] max-w-[160px] border-2 py-4 text-center text-[13px] font-bold uppercase tracking-[1px]">
                                          See product
                                    </button>
                              </div>
                              <picture className="order-first sm:w-1/2">
                                    <source
                                          media="(min-width: 1440px)"
                                          srcSet="../assets/home/desktop/image-earphones-yx1.jpg"
                                          sizes=""
                                    />
                                    <source
                                          media="(min-width: 768px)"
                                          srcSet="../assets/home/tablet/image-earphones-yx1.jpg"
                                          sizes=""
                                    />
                                    <img
                                          src="../assets/home/mobile/image-earphones-yx1.jpg"
                                          alt=""
                                          className="rounded-lg"
                                    />
                              </picture>
                        </section>
                        <BestGear />
                  </main>
                  <footer className="bg-almostBlack pb-9">
                        <div className="mx-auto flex w-[87%] max-w-[1110px] flex-col items-center gap-12 md:items-start">
                              <div className="h-1 w-[100px]"></div>
                              <div className="flex w-full flex-col items-center gap-12 md:items-start lg:flex-row lg:justify-between">
                                    <img
                                          src="../assets/shared/desktop/logo.svg"
                                          alt=""
                                          className="max-w-[143px]"
                                    />
                                    <nav className="text-[13px] uppercase tracking-[2px] text-white">
                                          <ul className="flex flex-col items-center gap-5 md:flex-row">
                                                <li>
                                                      <a href="#">Home</a>
                                                </li>
                                                <li>
                                                      <a href="#">Headphones</a>
                                                </li>
                                                <li>
                                                      <a href="#">Speakers</a>
                                                </li>
                                                <li>
                                                      <a href="#">Earphones</a>
                                                </li>
                                          </ul>
                                    </nav>
                              </div>
                              <div className="grid grid-cols-2 gap-12">
                                    <Paragraph
                                          text="Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we're open 7 days a week."
                                          colour="white"
                                          additional="md:text-left col-span-full lg:col-span-1"
                                    />
                                    <Paragraph
                                          text="Copyright 2021. All Rights Reserved"
                                          colour="white"
                                          additional="md:row-start-2 md:col-span-1 md:justify-self-start col-span-full"
                                    />
                                    <div className="col-span-full flex justify-center gap-4 md:col-span-1 md:row-start-2 md:justify-self-end lg:col-start-2 lg:row-start-1 lg:self-end">
                                          <img
                                                src="../assets/shared/desktop/icon-facebook.svg"
                                                alt=""
                                          />
                                          <img
                                                src="../assets/shared/desktop/icon-twitter.svg"
                                                alt=""
                                          />
                                          <img
                                                src="../assets/shared/desktop/icon-instagram.svg"
                                                alt=""
                                          />
                                    </div>
                              </div>
                        </div>
                  </footer>

                  {/* <div className="card">
                        <button
                              className="z"
                              onClick={() => setCount((count) => count + 1)}
                        >
                              count is {count}
                        </button>
                        <p>
                              Edit <code>src/App.tsx</code> and save to test HMR
                        </p>
                  </div>
                  <p className="read-the-docs">Click on the Vite and React logos to learn more</p> */}
            </div>
      );
}

export default App;
