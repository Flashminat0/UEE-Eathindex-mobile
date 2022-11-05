import React from "react"
import { BiUpload } from "react-icons/bi"

const AddFill = () => {
  return (
    <>
      <main className={`grid grid-rows-6 h-full`}>
        <div className={`bg-gray-400 row-span-3`}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg"
            alt="" />
        </div>
        <div className={`mt-4 mx-3`}>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
            placeholder="Add Animal Name"
            value={`Lion`}
          />
        </div>
        <div className={`mt-4 mx-3`}>
          <input
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
            placeholder="Add Scientific Name"
            value={`Panthera leo`}
          />
        </div>
        <div className={`row-span-2 mt-4 mx-3 grid`}>
          <textarea
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
            placeholder="Add Description"
            value={`The lion (Panthera leo) is a species in the family Felidae and a member of the genus Panthera. It has a muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually`}
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
            ADD
          </button>
        </div>


      </main>
    </>
  )
}

export default AddFill