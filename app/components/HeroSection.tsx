import Image from "next/image";
import AnzibooLogo from "@/app/assets/anziboo.png"
import BambooImage from "@/app/assets/bamboo.png"
import BambooImageFull from "@/app/assets/bamboo-full-page.png"
import Link from "next/link";

export default function HeroSection() {
  return (
    <div id="whatwedo" className="h-full">
      <div className="relative lg:flex lg:w-full">
        <div className="absolute z-40 h-full flex items-center lg:relative lg:w-2/3 lg:px-48 lg:py-32">
          <div className="px-5 lg:h-full lg:overflow">
            <Image alt="anziboo logo" src={AnzibooLogo} />
            <p>At Anziboo, we are pioneering the future of sustainable agriculture and biotechnology by leveraging the untapped potential of bamboo. </p>
            <Link href="#contact">
              <button className="mt-3 bg-[#F9BF4B] text-white rounded-full font-bold px-5 py-3">Contact Now</button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 lg:flex lg:justify-end">
          <div className="w-full h-full bg-white z-30 opacity-50 absolute lg:w-auto lg:h-auto"></div>
          <Image alt="bamboo image" src={BambooImage} className="lg:hidden" />
          <Image alt="bamboo image" src={BambooImageFull} className="hidden lg:block" />
        </div>
      </div>
    </div>
  )
}
