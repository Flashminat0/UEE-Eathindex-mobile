import { observer } from "mobx-react-lite"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { locationStore, treeStore } from "../../store/mobx/storeInitializer"

const Index = () => {
  const router = useRouter()
  const [trees, setTrees] = useState()

  useEffect(() => {
    if (treeStore.trees) {
      setTrees(treeStore.trees)
    }
  }, [treeStore.trees])
  console.log(trees)
  const getImage = (url) => {
    if (url && url[0]) {
      const i = url[0]
      console.log(URL.createObjectURL(i))
      return URL.createObjectURL(i)
    }
  }

  const selectOne = (id) => {
    router.push({
      pathname: "/trees/edit",
      query: { id: id },
    })
  }

  return (
    <div className="w-full h-full">
      <div className="space-y-5 rounded-lg">
        {trees?.map((tree) => (
          <div
            className="p-3 space-y-5 bg-gray-100 rounded-lg"
            key={location.id}
          >
            <section
              className="flex"
              onClick={() => {
                selectOne(tree.id)
              }}
            >
              <div className="w-2/3">
                <img src={getImage(tree.image)} />
              </div>
              <div className="w-1/3 text-center">
                <p className="font-bold text-xl">{tree.name}</p>
                <p className="text-lg">{tree.sciName}</p>
              </div>
            </section>
            <section className="flex justify-between px-2">
              <div className="grid grid-cols-3 gap-6 w-full">
                {tree.tags.map((tag) => (
                  <div className="h-8  bg-gradient-to-b from-green-300 to-blue-400 w-20 rounded-full text-center grid place-items-center scale-125">
                    {tag}
                  </div>
                ))}
              </div>
            </section>
            <section className="h-52 bg-blue-100">
              <p className="p-2">{tree.description}</p>
            </section>
          </div>
        ))}
      </div>
      <div className="sticky bottom-0 z-10 px-3 py-2 bg-gray-50">
        <div className="w-full py-2">
          <button
            onClick={() => {
              router.push("/")
            }}
            type="button"
            className="inline-flex w-full py-2 items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            ADD ENHANCE
          </button>
        </div>
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
              router.push("trees/add")
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
