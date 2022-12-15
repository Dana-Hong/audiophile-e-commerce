import Paragraph from "./Paragraph";

const BestGear = () => {
      return (
            <section className="mx-6 mt-6 mb-[7.5rem] flex w-[87%] max-w-[1110px] flex-col items-center md:gap-[4rem] lg:flex-row">
                  <div className="mx-auto mt-10 flex w-[84%] flex-col gap-8 lg:mx-0 lg:mr-6 lg:max-w-[445px]">
                        <h3 className="text-center text-[1.75rem] font-bold uppercase leading-10 tracking-[1px] md:text-[40px] lg:text-left">
                              {"Bringing you the "}
                              <span className="text-orange">best</span>
                              {" audio gear"}
                        </h3>
                        <Paragraph
                              text="Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment."
                              colour="black"
                              additional="lg:text-left"
                        />
                  </div>
                  <picture className="order-first lg:order-last lg:ml-auto">
                        <source
                              media="(min-width: 1024px)"
                              srcSet="../assets/shared/desktop/image-best-gear.jpg"
                              sizes=""
                              className="rounded-lg"
                        />
                        <source
                              media="(min-width: 768px)"
                              srcSet="../assets/shared/tablet/image-best-gear.jpg"
                              sizes=""
                              className="rounded-lg"
                        />
                        <img
                              src="../assets/shared/mobile/image-best-gear.jpg"
                              alt=""
                              className="rounded-lg"
                        />
                  </picture>
            </section>
      );
};

export default BestGear;
