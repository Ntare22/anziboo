import Image from 'next/image'
import Fasika from '@/app/assets/Fasika.png'
import Joe from '@/app/assets/joe.png'
import Dr from '@/app/assets/dr.png'
import Sales from '@/app/assets/sales.png'
import linkedIn from '@/app/assets/linkedin.png'
import Link from 'next/link'

const team = [
  {
    id: 1,
    image: Fasika,
    names: "Fasika Legesse",
    linkedIn: "https://www.linkedin.com/in/fasika-legesse-76120a1a9/",
  },
  {
    id: 2,
    image: Joe,
    names: "Joe Kamau",
    linkedIn: "https://www.linkedin.com/in/joe-kamau-21620344/",
  },
  {
    id: 3,
    image: Dr,
    names: "FirstName LastName",
    linkedIn: "https://www.linkedin.com/in/jimntare/",
  },
  {
    id: 4,
    image: Sales,
    names: "FirstName LastName",
    linkedIn: "https://www.linkedin.com/in/jimntare/",
  }
]

export default function WhoWeAreSection() {
  return (
    <div>
      <h1 className='font-black text-center text-4xl py-5'>Who are we</h1>
      <div id="whoweare" className='flex flex-col items-center lg:justify-center lg:flex-row'>
        {
          team.map((person) => (
            <div className='relative py-5 lg:p-5' key={person.id}>
              <div className="inset-0 absolute group flex items-center justify-center">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-50"></div>
                <div className="hidden group-hover:block relative text-black flex items-center">
                  <p className='text-center font-extrabold text-xl'>{person.names}</p>
                  <div className='px-32 flex justify-center lg:px-40'>
                    <Link href={person.linkedIn} target='_blank'>
                      <Image alt='linkedIn' src={linkedIn} />
                    </Link>
                  </div>
                </div>
              </div>
              <Image alt='fasika' src={person.image} height={300} width={300} />
            </div>
          ))
        }
      </div>
    </div>
  )
}
