import React from "react"
import { BiUpload } from "react-icons/bi"

const AddFill = () => {
  return (
    <>
      <main className={`grid grid-rows-6 h-full`}>
        <p className={`text-4xl mx-auto font-semibold`}>ADD ENHANCEMENT</p>
        <div className={`mt-4 mx-3`}>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
            placeholder=""
            value={`What is a group of lions called?`} 
          />
        </div>
        <div className={`row-span-2 mt-4 mx-3 grid`}>
          <textarea
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
            placeholder="Add Description"
            value={`The name for a group of lions is a ‘pride’.`}
          />
        </div>
        <div className={`grid grid-cols-2 gap-4 mx-5 mt-8`}>
          <button
            type="button"
            className="grid place-items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            CANCEL
          </button>
          <button
            type="button"
            className="grid place-items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            ADD ENHANCEMENT
          </button>
        </div>


      </main>
    </>
  )
}

export default AddFill