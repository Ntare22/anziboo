import Image from "next/image"
import Link from "next/link"
import linkedIn from '@/app/assets/linkedin.png'

export default function FooterSection() {
  return (
    <footer className="py-2">
      <div className="flex items-center justify-center">
        <div className="w-8 pt-2">
          <Link href="">
            <Image alt="linkedin" src={linkedIn} />
          </Link>
        </div>
      </div>
      <p className="text-center py-2 text-gray-500">&copy; Anziboo Ventures Ltd.</p>
    </footer>
  )
}
