import { observer } from "mobx-react-lite"
import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { locationStore } from "../../store/mobx/storeInitializer"

const Edit = () => {
  const router = useRouter()
  const { id } = router.query
  const [file, setFile] = useState()
  const [newFile, setNewFile] = useState()
  const [address, setAddress] = useState("")
  const [description, setDescription] = useState("")
  const [toggle, setToggle] = useState(false)

  useEffect(() => {
    if (router) {
      const location = locationStore.getOneLocation(id)
      setFile(location.image)
      setAddress(location.address)
      setDescription(location.description)
    }
  }, [router])

  const getImage = (url) => {
    if (url && url[0]) {
      const i = url[0]
      return URL.createObjectURL(i)
    }
  }

  const setFiles = (event) => {
    if (event.target.files && event.target.files[0]) {
      const newFiles = []
      for (let j = 0; j < event.target.files.length; j++) {
        newFiles.push(event.target.files[j])
      }
      setNewFile(newFiles)
    }
  }
  const submitHandler = (event) => {
    event.preventDefault()
    const location = {
      id: id,
      address: address,
      description: description,
      like: 0,
      image: newFile ? newFile : file,
    }
    locationStore.updateLocation(id, location)
    router.push("/location")
  }

  const deleteLocation = () => {
    locationStore.deleteLocation(id)
    router.push("/location")
  }

  return (
    <div>
      {location && (
        <div className="p-3 space-y-5 bg-gray-100 rounded-lg">
          <form
            className="px-2 space-y-3 w-full flex flex-col"
            onSubmit={submitHandler}
          >
            <div className="mt-1 sm:col-span-2 sm:mt-0">
              {toggle ? (
                <div className="mt-1 sm:col-span-2 sm:mt-0">
                  <div className="flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                      <div className="flex text-sm text-gray-600 flex-col">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-white font-medium text-green-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 hover:text-green-500"
                        >
                          <span>Upload your images</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            onChange={setFiles}
                          />
                        </label>
                        <p className="text-xs text-gray-500">
                          PNG, JPG, GIF files are allowed
                        </p>
                      </div>
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p
                        className="text-xs text-gray-500"
                        onClick={() => {
                          setToggle(!toggle)
                        }}
                      >
                        Browse to choose a file
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <section
                  className="w-full"
                  onClick={() => {
                    setToggle(!toggle)
                  }}
                >
                  <img src={getImage(file)} className="w-full" />
                </section>
              )}
            </div>
            <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600">
              <input
                type="text"
                name="name"
                id="name"
                onChange={(e) => {
                  setAddress(e.target.value)
                }}
                value={address}
                className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                placeholder="Home Location Address"
              />
            </div>
            <div>
              <div className="mt-1">
                <textarea
                  onChange={(e) => {
                    setDescription(e.target.value)
                  }}
                  value={description}
                  rows={4}
                  placeholder="Home Description"
                  name="comment"
                  id="comment"
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500 sm:text-sm"
                  defaultValue={""}
                />
              </div>
            </div>
            <section>
              <button
                onClick={() => {
                  router.push("/location")
                  deleteLocation()
                }}
                type="button"
                className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Delete
              </button>
            </section>
            <div className="flex space-x-5">
              <button
                onClick={() => {
                  router.push("/location")
                }}
                type="button"
                className="inline-flex w-full items-center justify-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex w-full justify-center items-center rounded-md border border-transparent bg-green-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  )
}

export default observer(Edit)
