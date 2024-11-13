'use client'
import Image from 'next/image';
import { Carousel } from 'primereact/carousel';
import Farmer from '@/app/assets/farmer.jpg'

interface Client {
  id: number;
  image?: string;
  names: string;
  quote: string;
}

const clientTestimonies: Client[] = [
  {
    id: 1,
    image: "",
    names: "Fasika Solomon Legesse",
    quote: "lorem ipsums aspdfjsljg sfkas;dlfj asldfas;fdlkaj fsalfakl sdfsfas afasdf asdfasdf asdfasdf"
  },
  {
    id: 2,
    image: "",
    names: "Joe Kamau",
    quote: "lorem ipsums aspdfjsljg sfkas;dlfj asldfas;fdlkaj fsalfakl sdfsfas afasdf asdfasdf asdfasdf"
  }
]

export default function HappyClients() {
  const clientTestimonyTemplate = (client: Client) => {
    return (
      <div className='py-8 flex flex-col text-center items-center justify-center lg:flex lg:flex-row lg:text-left'>
        <div>
          <Image src={Farmer} alt='farmer' height={300} className='rounded-full' />
        </div>
        <div className='py-5 lg:py-0 lg:ml-5'>
          <h1 className='font-extrabold text-2xl'>{client.names}</h1>
          <p className='w-full lg:w-4/5 py-3'>{client.quote}</p>
        </div>
      </div>
    )
  }
  return (
    <div className='lg:flex lg:justify-center lg:px-32 lg:mx-24'>
      <Carousel 
        value={clientTestimonies} 
        numVisible={1} 
        numScroll={1} 
        className="custom-carousel"
        circular
        autoplayInterval={5000} 
        itemTemplate={clientTestimonyTemplate}
      />
    </div>
  )
}
