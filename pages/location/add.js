import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { BiUpload } from "react-icons/bi"
import { locationStore } from "../../store/mobx/storeInitializer"

const Add = () => {
  const [file, setFile] = useState()
  const [address, setAddress] = useState("")
  const [description, setDescription] = useState("")
  const [image, setImage] = useState()

  const router = useRouter()

  const setFiles = (event) => {
    if (event.target.files && event.target.files[0]) {
      const newFiles = []
      for (let j = 0; j < event.target.files.length; j++) {
        newFiles.push(event.target.files[j])
      }
      setFile(newFiles)
    }
  }
  const submitHandler = (event) => {
    event.preventDefault()
    const id = locationStore.locations.length + 1
    const location = {
      id: id,
      address: address,
      description: description,
      like: 0,
      image: file,
    }
    locationStore.addLocation(location)
    router.push("/location")
  }

  useEffect(() => {
    if (file) {
      if (file && file[0]) {
        const i = file[0]
        setImage(URL.createObjectURL(i))
      }
    }
  }, [file])

  return (
    <div className="flex h-screen items-center justify-center">
      <form
        className="px-2 space-y-3 w-full flex flex-col"
        onSubmit={submitHandler}
      >
        <div className="mt-1 sm:col-span-2 sm:mt-0">
          {image ? (
            <img src={image} className="w-full" />
          ) : (
            <div className="flex max-w-lg justify-center rounded-md bg-gray-200 pt-5 pb-6">
              <div className="space-y-1 text-center w-full">
                <div className="flex text-sm text-gray-600 flex-col">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md font-medium focus-within:outline-none focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 hover:text-green-500"
                  >
                    <span>Upload your location Image</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      onChange={setFiles}
                    />
                  </label>
                  <p className="text-xs py-5">
                    PNG, JPG, GIF files are allowed
                  </p>
                </div>
                <div className="bg-gray-100 w-full border-2 border-dashed border-gray-300">
                  <div className="flex justify-center">
                    <BiUpload className={`h-20 w-20 text-gray-600`} />
                  </div>
                  <p className="text-xs text-gray-500">
                    Browse to choose a file
                  </p>
                </div>
              </div>
            </div>
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
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

export default Add
