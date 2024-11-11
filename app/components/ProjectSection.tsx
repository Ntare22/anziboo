import Image from "next/image"
import Farmers from "@/app/assets/farmers.png"

export default function ProjectSection() {
  return (
    <div id="project" className="py-8 lg:flex lg:justify-center lg:px-32">
      <div className="lg:w-1/2">
        <Image alt="farmers" src={Farmers} />
      </div>
      <div className="text-center mx-5 lg:w-1/2 lg:text-left lg:flex lg:flex-col lg:justify-center">
        <h1 className="text-3xl font-extrabold lg:text-4xl">Meet Our Farmers</h1>
        <p className="text-[#757575] mt-5 lg:text-xl lg:mx-0 lg:w-5/6 lg:mt-5">Our Business Plan is a written document describing a company's core business activites, Objectives, and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea accordingly their budgets and according thir reuirements.</p>
      </div>
    </div>
  )
}
