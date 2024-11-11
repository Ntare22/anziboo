import Image from "next/image"
import UoN from "@/app/assets/uon.png"
import Inbar from "@/app/assets/inbar.png"
import Jasiri from "@/app/assets/jasiri.png"
import PnP from "@/app/assets/pnp.png"

export default function PartnersSection() {
  return (
    <div className="flex flex-col items-center lg:flex-row  lg:justify-center lg:py-8">
      <div className="text-center pt-5 lg:text-left lg:w-1/3 lg:pt-0">
        <p className="text-3xl font-extrabold lg:text-4xl">Our Partners</p>
        <p className="text-[#757575] mx-5 lg:text-xl lg:mx-0 lg:w-5/6 lg:mt-4">Several selected partners, who already believe in our mission.</p>
      </div>
      <Image alt="university of nairobi" src={UoN} className="py-4 lg:p-4" />
      <Image alt="inbar" src={Inbar} className="py-4 lg:p-4" />
      <Image alt="jasiri" src={Jasiri} className="py-4 lg:p-4" />
      <Image alt="pnp" src={PnP} className="py-4 lg:p-4" />
    </div>
  )
}
