import React from "react"
import { BiUpload } from "react-icons/bi"

const single = () => {
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
            disabled={true}
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-transparent shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
            placeholder="Add Animal Name"
            value={`Animal Name : Lion`}
          />
        </div>
        <div className={`mt-4 mx-3`}>
          <input
            disabled={true}
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-transparent shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
            placeholder="Add Scientific Name"
            value={`Animal Scientific Name : Panthera leo`}
          />
        </div>
        <div className={`row-span-2 mt-4 mx-3 grid`}>
          <textarea
            disabled={true}
            type="email"
            name="email"
            id="email"
            className="block w-full rounded-md border-transparent shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
            placeholder="Add Description"
            value={`Description : The lion (Panthera leo) is a species in the family Felidae and a member of the genus Panthera. It has a muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually`}
          />
        </div>
        <div className={`grid grid-rows-2  gap-4 mx-5 mt-8`}>
          <div className={`grid`}>
            <button
              type="button"
              className="grid place-items-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
            >
              DELETE
            </button>
          </div>
          <div className={`grid grid-cols-2 gap-4`}>
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
              UPDATE
            </button>
          </div>

        </div>


      </main>
    </>
  )
}

export default single