import React from "react"
import { BiUpload } from "react-icons/bi"

const single = () => {

  const words = [
    "Lion",
    "4 legs",
    "Roar",
    "Mane",
  ]

  return (
    <>
      <main className={`grid grid-rows-6 h-full`}>
        <div className={`p-1 row-span-2 grid grid-cols-12`}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg"
            alt=""
            className={`col-span-8`}
          />
          <div
            className={`col-span-4 p-2`}
          >
            <p className={`text-4xl`}>Lion</p>
            <p>Leo</p>
          </div>

        </div>
        <div className={`flex`}>
          {words.map((word, index) => (
            <div
              key={index}
              className={`px-4 py-2 m-2 border border-gray-400 rounded-full w-max h-max bg-gradient-to-t from-green-300 to-blue-400`}
            >
              <p className={`col-span-2`}>{word}</p>
            </div>)
          )}
        </div>
        <div className={`h-max bg-green-100 mx-4 p-2 border border-gray-300`}>
          <p>
            The lion (Panthera leo) is a species in the family Felidae and a member of the genus Panthera. It has a
            muscular, deep-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail.
          </p>
        </div>
        <div className={`grid grid-rows-2  gap-4 mx-5 mt-8`}>
          <div className={`grid`}>
            <button
              type="button"
              className="grid place-items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              VIEW ENHANCEMENTS
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
              EDIT CONTENT
            </button>
          </div>

        </div>


      </main>
    </>
  )
}

export default single