import clsx from "clsx"
import Image from "next/image"
import { SwiperSlide, useSwiper } from "swiper/react"
import BaseSwiper from "../../../Base/Swiper"
import { landingPageStyles } from "../../styles"
import iconArrow from "/public/images/icon-arrow-left.svg"
import imgExpect1 from "/public/images/landing-page/expect1.png"
import imgExpect2 from "/public/images/landing-page/expect2.png"
import imgExpect3 from "/public/images/landing-page/expect3.png"
import imgExpect4 from "/public/images/landing-page/expect4.png"
import imgExpect5 from "/public/images/landing-page/expect5.png"
import imgExpect6 from "/public/images/landing-page/expect6.png"

const expects = [
  {
    img: imgExpect1,
    title: "Conference",
    description:
      "We bring together world-class speakers and industry experts to create a forum for the exchange of ideas and experiences on current state of the Blockchain, Gamefi, NFT, Metaverse, DeFi. Join us to attend +10 sessions, panels talk, keynotes and fireside chats from the brightest brains of the industry ",
  },
  {
    img: imgExpect2,
    title: "ILAP Startups Showcase",
    description:
      "Top 6 selected potential startups from ILAP, an accelerator program hosted by Icetea Labs - Polygon - Alpha DAO, will have a pitch session at the event. Early investment opportunities are open to discuss directly with the project's leader",
  },
  {
    img: imgExpect3,
    title: "Business Expo Area",
    description:
      "Boost your Brand Awareness with face-to-face marketing, showcasing your latest work and leading to Direct Sales Opportunities companies exhibiting throughout the venue. Futurist sponsorships are a great way to gain exposure to new audiences and drive results. Sponsorship opportunities available now",
  },
  {
    img: imgExpect4,
    title: "Networking zone & Private Party",
    description:
      "We arrange several networking zones at the hall where you have space to connect in-person with your new friends. VIP passes reserve access to Exclusive Dinner and Private meeting room which is designed for intimidating chat and discussing the finer points of potential deal with VIPs, speakers, sponsors, and project’s leaders",
  },
  {
    img: imgExpect5,
    title: "Gamefi Tournament (optional)",
    description:
      "Experience  trending blockchain and traditional games on site to test your merit against one another despite that you are a professional or casual gamer. Fight by yourself or grab new friends and create a team to experience competitive gaming like never before and gain attracting awards with our finely tuned tournaments. Streaming and pre-sign-up available",
  },
  {
    img: imgExpect6,
    title: "NFT Gallery (Optional)",
    description:
      "Bridging the gap between the crypto and art world featuring an NFT Pop up Gallery, with Interactive Displays giving users a physical connection to a collection. Available for purchase",
  },
]

const btnArrowStyles =
  "w-[44px] h-[44px] p-[8.8px] relative rounded-full bg-[#44C4EC1A] cursor-pointer hover:bg-[#44c4ec33] transition-colors"

const SwiperButtons = () => {
  const swiper = useSwiper()
  return (
    <div className="mt-7 flex gap-2 md:gap-3">
      <div className={btnArrowStyles} onClick={() => swiper.slidePrev()}>
        <Image src={iconArrow} alt="" layout="responsive" />
      </div>
      <div
        className={clsx(btnArrowStyles, "rotate-180")}
        onClick={() => swiper.slideNext()}
      >
        <Image src={iconArrow} alt="" layout="responsive" />
      </div>
    </div>
  )
}

const Expect = () => {
  return (
    <div className="mt-[60px] xs:mt-20 md:mt-[120px]">
      <h3 className={landingPageStyles.heading3}>What to expect?</h3>
      <BaseSwiper>
        {expects.map((expect) => (
          <SwiperSlide style={{ height: "100%" }} key={expect.title}>
            <div
              className={clsx(
                "mt-6 flex flex-col justify-between items-center",
                "xs:mt-10",
                "sm:flex-row",
                "md:mt-20",
              )}
            >
              <div className="text-center mr-5 sm:text-left sm:max-w-[380px] md:max-w-[430px] lg:max-w-[480px]">
                <h4
                  className={clsx(
                    "text-20/28 font-semibold",
                    "xs:text-2xl",
                    "md:text-32/42",
                  )}
                >
                  {expect.title}
                </h4>
                <p
                  className={clsx(
                    "mt-1 xs:mt-2 text-13/18 font-light",
                    "xs:text-base",
                    "md:text-20/26 md:font-normal md:text-justify md:tracking-[0.01em]",
                  )}
                >
                  {expect.description}
                </p>
                <div className="hidden sm:block">
                  <SwiperButtons />
                </div>
              </div>
              <div className="relative w-full rounded-[20px] mt-4 md:mt-0 md:max-w-[508px]">
                <Image src={expect.img} alt="" layout="responsive" priority />
              </div>
              <div className="flex justify-center items-center sm:hidden">
                <SwiperButtons />
              </div>
            </div>
            <div className="swiper-lazy-preloader swiper-lazy-preloader-white" />
          </SwiperSlide>
        ))}
      </BaseSwiper>
    </div>
  )
}

export default Expect
