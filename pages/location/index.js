import { observer } from "mobx-react-lite"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { locationStore } from "../../store/mobx/storeInitializer"

const Index = () => {
  const router = useRouter()
  const [locations, setLocations] = useState()
  const [likes, setLikes] = useState([])

  const isLiked = (id) => {
    const index = likes?.findIndex((x) => x == id)
    console.log(index, likes)
    return index != -1
  }
  const setLike = (id) => {
    const index = likes?.findIndex((x) => x == id)
    if (index == -1) {
      setLikes((prev) => [...prev, id])
    } else {
      const arr = likes
      arr.splice(index, 1)
      setLike(arr)
    }
  }

  useEffect(() => {
    if (locationStore.locations) {
      setLocations(locationStore.locations)
    }
  }, [locationStore.locations])

  const getImage = (url) => {
    if (url && url[0]) {
      const i = url[0]
      console.log(URL.createObjectURL(i))
      return URL.createObjectURL(i)
    }
  }

  const selectOne = (id) => {
    router.push({
      pathname: "/location/edit",
      query: { id: id },
    })
  }

  return (
    <div className="w-full h-full">
      <div className="space-y-5 rounded-lg">
        {locations?.map((location) => (
          <div
            className="p-3 space-y-5 bg-gray-100 rounded-lg"
            key={location.id}
          >
            <section
              className="rounded-lg overflow-hidden flex justify-center w-full"
              onClick={() => {
                selectOne(location.id)
              }}
            >
              <img src={getImage(location.image)} className='w-full'/>
            </section>
            <section className="flex justify-between py-2">
              <div>{location.address}</div>
              <div className="flex space-x-3">
                <div
                  className={`${
                    isLiked(location.id)
                      ? "bg-red-100 text-red-500"
                      : "text-base"
                  }`}
                  onClick={() => {
                    setLike(location.id)
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </div>
                <p>{location.like}</p>
              </div>
            </section>
            <section className="h-52 bg-blue-300">
              <p className="p-2">{location.description}</p>
            </section>
          </div>
        ))}
      </div>
      <div className="sticky bottom-0 z-10 px-3 py-2 bg-gray-50">
        <div className="flex space-x-5">
          <button
            onClick={() => {
              router.push("/")
            }}
            type="button"
            className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="inline-flex w-full justify-center items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            onClick={() => {
              router.push("location/add")
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default observer(Index)
