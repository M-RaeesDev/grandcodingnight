import Image from 'next/image'
import wedding from "../../public/images/wedding.jpg"
import business from "../../public/images/businessstartup.jpg"
import construction from "../../public/images/construction.jpg"
import education from "../../public/images/education.jpg"
const CardComponent = () => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Card 1 */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <div className="relative w-full h-48">
          <Image
            src={wedding}
            alt="Card Image 1"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl">Wedding Loan</h2>
          <p className="text-gray-700 text-base">
          A wedding loan helps finance wedding expenses, offering flexibility to manage costs without draining savings.
          </p>
        </div>
        <div className="px-6 py-4">
          <button className="bg-[#2A254B] text-white py-2 px-4 rounded-full hover:bg-blue-700">
            See Detail
          </button>
        </div>
      </div>

      {/* Card 2 */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <div className="relative w-full h-48">
          <Image
            src={business}
            alt="Card Image 2"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl">business Loan</h2>
          <p className="text-gray-700 text-base">
          A business startup loan provides funding to launch or grow your new business, covering initial costs and operational needs.          </p>
        </div>
        <div className="px-6 py-4">
          <button className="bg-[#2A254B] text-white py-2 px-4 rounded-full hover:bg-blue-700">
            See Detail
          </button>
        </div>
      </div>

      {/* Card 3 */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <div className="relative w-full h-48">
          <Image
            src={construction}
            alt="Card Image 3"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl">Construction Loan</h2>
          <p className="text-gray-700 text-base">

          A home construction loan funds the building process of your dream home, covering materials, labor, and related costs.          </p>
        </div>
        <div className="px-6 py-4">
          <button className="bg-[#2A254B] text-white py-2 px-4 rounded-full hover:bg-blue-700">
            See Detail
          </button>
        </div>
      </div>

      {/* Card 4 */}
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
        <div className="relative w-full h-48">
          <Image
            src={education}
            alt="Card Image 4"
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="px-6 py-4">
          <h2 className="font-bold text-xl">Education Loan</h2>
          <p className="text-gray-700 text-base">
          An education loan provides financial support for tuition and related expenses to pursue academic or professional studies.          </p>
        </div>
        <div className="px-6 py-4">
          <button className="bg-[#2A254B] text-white py-2 px-4 rounded-full hover:bg-blue-700">
            See Detail
          </button>
        </div>
      </div>
    </div>
  )
}

export default CardComponent
