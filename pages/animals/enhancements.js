import React from "react"
import { BiUpload } from "react-icons/bi"

const single = () => {

  const Enhancements = [
    {
      question: "What is a group of lions called?",
      answer: "The name for a group of lions is a ‘pride’.",
    },
    {
      question: "What noise do lions make?",
      answer: "Lions make a loud roar.",
    },
    {
      question: "What is a lion’s favourite food?",
      answer: "Lions love to eat meat.",
    },
    {
      question: "What is a lion’s favourite drink?",
      answer: "Lions love to drink water.",
    },
    {
      question: "What is a lion’s favourite activity?",
      answer: "Lions love to sleep.",
    },
  ]

  return (
    <>
      <main className={`grid grid-rows-3 h-full`}>
        <div className={`p-1 row-span-1 grid grid-cols-12`}>
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


        <div className={`row-span-2 text-center grid place-items-center relative mt-5`}>
          {Enhancements.map((Enhancement, index) => (
            <div
              key={index}
              className={`px-4 py-2 m-2 border border-gray-300 rounded-md w-max h-max bg-gray-200`}
            >
              <p className={`text-lg font-semibold `}>{Enhancement.question}</p>
              <p className={`col-span-2`}>{Enhancement.answer}</p>
            </div>),
          )}
          <div>
            <button
              type="button"
              className="grid place-items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              ADD ENHANCEMENT
            </button>
          </div>
        </div>

      </main>
    </>
  )
}

export default single