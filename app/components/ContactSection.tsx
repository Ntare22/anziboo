export default function ContactSection() {
  return (
    <div id="contact">
      <div className="bg-[#F4F9FF] py-8">
        <div className="text-center py-4">
          <h1 className="text-3xl font-extrabold lg:text-4xl">Subscribe Newsletter</h1>
          <p className="px-4 pt-3">We will update good news and promotion service not spam</p>
        </div>
        <div className="flex items-center justify-center py-4">
          <input placeholder="Enter your email address" className="text-sm py-2 px-3 w-2/3 rounded-full border border-black lg:w-1/6" />
          <button className="z-20 bg-[#2639ED] py-2 px-3 ml-2 text-white rounded-full lg:px-6">Send</button>
        </div>
      </div>
    </div>
  )
}
