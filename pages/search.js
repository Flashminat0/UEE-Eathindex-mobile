import React from "react"
import { HiSearch } from "react-icons/hi"

const images = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbIHw3oUEi2EAMDD6AHDe2j37Y2JuEozh6tg&usqp=CAU",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/plant-guide-office-plants-1663799307.jpg",
  "https://secure.img1-cg.wfcdn.com/im/72551637/resize-h600-w600%5Ecompr-r85/1093/109315834/Live+Plants.jpg",
  "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/ab/43d910ae7d11e88e82d728f9399c9e/plant_Profile_logo.jpg?auto=format%2Ccompress&dpr=1",
  "https://www.bhg.com/thmb/RRBd35mDZYsjOFpOcgRpY1Jvj-U=/1280x1408/filters:fill(auto,1)/dieffenbachia-houseplant-de43c42e-a1187ad0c7e0462a8f44c11ffc1fb046.jpg",
  "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-combo-packs-plants-top-5-air-purifier-and-oxygen-enriching-plant-pack-16969387507852_512x512.jpg?v=1634230232"
]

const Search = () => {
  return (
    <div className={`grid grid-rows-12`}>
      <div className={`p-5`}>
        <p className={`text-3xl font-semibold`}>Search</p>
      </div>
      <div className={`grid grid-cols-6 px-5`}>
        <div className={`col-span-5`}>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Plants"
          />
        </div>
        <div className={`grid place-items-center`}>
          <HiSearch className={`scale-150`} />
        </div>
      </div>
      <div className={`p-5 `}>
        <div className={`text-xl font-semibold`}>ALL RESULTS</div>
        <div className={`grid grid-cols-3 gap-5 mt-5`}>
          {images.map((image, index) => (
            <div
              key={index}
              className={`grid grid-rows-2 object-contain overflow-hidden border-2 border-gray-300 rounded-md`}
            >
              <div className={`row-span-2 scale-125`}>
                <img src={image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default Search