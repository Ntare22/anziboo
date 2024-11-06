import Image from "next/image";
import UoN from "@/app/assets/uon.png"
import Inbar from "@/app/assets/inbar.png"
import Jasiri from "@/app/assets/jasiri.png"
import PnP from "@/app/assets/pnp.png"

export default function PartnersSection() {
  return (
    <div className="bg-red-500">
      <div>
        <h1 className="font-extrabold">Our Partners</h1>
        <p>Several selected partners, who already believe in our mission.</p>
      </div>
      <Image alt="university of nairobi" src={UoN} />
      <Image alt="university of nairobi" src={Inbar} />
      <Image alt="university of nairobi" src={Jasiri} />
      <Image alt="university of nairobi" src={PnP} />
    </div>
  )
}
