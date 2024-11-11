import Image from "next/image"
import BioCoating from "@/app/assets/biocoating.svg"
import CircuitBoard from "@/app/assets/circuit-board.svg"
import Fertilizer from "@/app/assets/fertilizer.svg"
import DrugPatches from "@/app/assets/drug-patches.svg"

export default function ProductsSection() {
  return (
    <div id="products" className="lg:flex lg:items-center lg:justify-center lg:py-8 lg:px-40">
      <div className="text-center px-5 py-4 lg:text-left">
        <div className="bg-[#FFF5DB] w-28 h-28 absolute z-10 rounded-tl-[4rem]"></div>
        <div className="z-20 relative lg:mt-14">
          <h1 className="text-3xl font-extrabold lg:text-4xl">Our Products</h1>
          <p className="py-2 text-[#757575] mx-5 lg:text-xl lg:mx-0 lg:w-2/3 lg:mt-4">Anziboo offers a comprehensive range of bamboo-based products designed to promote sustainability and innovation.</p>
        </div>
      </div>
      <div className="grid justify-items-center gap-6 lg:grid-cols-2 lg:gap-4 lg:w-5/6">
        <div className="hidden lg:block lg:bg-[#F4F9FF] lg:h-1/2 lg:w-1/2 lg:absolute lg:right-0 lg:rounded-tl-[8rem]"></div>
        <div className="bg-white p-5 w-2/3 grid justify-items-center rounded-xl drop-shadow-lg lg:w-full">
          <div className="bg-[#F1F7FF] p-1 rounded-lg">
            <Image alt="pcbs" src={CircuitBoard} height="60"  />
          </div>
          <h1 className="text-center font-extrabold text-lg py-2">Printed Circuit Boards(PCBs)</h1>
          <p className="text-center">Eco-friendly PCBs from sustainable bamboo, offering a greener alternative for clean technology applications.</p>
        </div>
        <div className="bg-white p-5 w-2/3  grid justify-items-center rounded-xl drop-shadow-lg lg:w-full">
          <div className="bg-[#FFF7E3] p-1 rounded-lg">
            <Image alt="pcbs" src={Fertilizer} height="60"  />
          </div>
          <h1 className="text-center font-extrabold text-lg py-2">Biogel Fertilizers</h1>
          <p className="text-center">i-kuza biogel fertilizers enhance soil health by sustainably delivering nutrients and improving water retention, ensuring stronger, more resilient crops.</p>
        </div>
        <div className="bg-white p-5 w-2/3  grid justify-items-center rounded-xl drop-shadow-lg lg:w-full">
          <div className="bg-[#FFF2F8] p-1 rounded-lg">
            <Image alt="pcbs" src={BioCoating} height="60" />
          </div>
          <h1 className="text-center font-extrabold text-lg py-2">Biocoating</h1>
          <p className="text-center">Anziboo's biocoating extends the shelf life of fruits and vegetables by creating a natural, biodegradable barrier that preserves freshness and reduces spoilage.</p>
        </div>
        <div className="bg-white p-5 w-2/3  grid justify-items-center rounded-xl drop-shadow-lg lg:w-full">
          <div className="bg-[#DEFFEE] p-1 rounded-lg">
            <Image alt="pcbs" src={DrugPatches} height="60"  />
          </div>
          <h1 className="text-center font-extrabold text-lg py-2">Drug Delivery Batches</h1>
          <p className="text-center">Anziboo's drug delivery patches utilize advanced biogel technology to provide controlled, sustained release of medications, improving patient compliance and treatment outcomes.</p>
        </div>
      </div>
    </div>
  )
}
