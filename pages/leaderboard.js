import React from "react"

const Leaderboard = () => {
  const districts = [
    { id: 1, name: "Colombo", money: "23 USD" },
    { id: 2, name: "Gampaha", money: "13 USD" },
    { id: 3, name: "Puttlam", money: "8 USD" },
  ]

  return (
    <main className={`w-full mx-auto text-center`}>
      <div className={`text-6xl  border-4 rounded-md border-gray-400 m-20 p-7`}>
        <p>
          LEADER BOARD
        </p>
      </div>
      <div>
        {districts.map((district) => (
          <div key={district.id}>
            <div className={`rounded-md font-semibold bg-gradient-to-t from-blue-400 to-green-400 mb-4 p-5 grid place-items-center grid-cols-12 mx-6`}>
              <p className={`col-span-2`}>
                {district.id}
              </p>
              <p>
                {district.name}
              </p>
              <p className={`col-start-10 col-span-2`}>
                {district.money}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Leaderboard