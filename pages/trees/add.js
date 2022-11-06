import { useRouter } from "next/router"
import React, { useEffect, useState } from "react"
import { BiUpload } from "react-icons/bi"
import { treeStore } from "../../store/mobx/storeInitializer"

const Add = () => {
  const [file, setFile] = useState()
  const [name, setName] = useState("")
  const [sciName, setSciName] = useState("")
  const [description, setDescription] = useState("")
  const [tag, setTag] = useState()
  const [Tags, setTags] = useState([])
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
    const id = treeStore.trees.length + 1
    const location = {
      id: id,
      name: name,
      sciName: sciName,
      image: file,
      tags: Tags,
      description: description,
    }
    treeStore.addTree(location)
    router.push("/trees")
  }

  const addTags = (tag) => {
    setTags((prev) => [...prev, tag])
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
    <div className="pb-20">
      <form
        className="px-2 space-y-3 w-full flex flex-col"
        onSubmit={submitHandler}
      >
        <div className="mt-1 sm:col-span-2 sm:mt-0">
          {image ? (
            <img src={image} className='w-full'/>
          ) : (
            <div className="flex max-w-lg justify-center rounded-md bg-gray-200 pt-5 pb-6">
              <div className="space-y-1 text-center w-full">
                <div className="flex text-sm text-gray-600 flex-col">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md font-medium focus-within:outline-none focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 hover:text-green-500"
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
              setName(e.target.value)
            }}
            value={name}
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            placeholder="Add Tree Name"
          />
        </div>
        <div className="rounded-md border border-gray-300 px-3 py-2 shadow-sm focus-within:border-green-600 focus-within:ring-1 focus-within:ring-green-600">
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e) => {
              setSciName(e.target.value)
            }}
            value={sciName}
            className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
            placeholder="Add Scientific Name"
          />
        </div>
        <div className="grid grid-cols-3 w-full gap-5 px-2">
          {Tags.map((tag) => (
            <div className="h-8 bg-gradient-to-b from-green-300 to-blue-400 w-20 rounded-full text-center grid place-items-center scale-125">
              {tag}
            </div>
          ))}
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Add Tags
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <div className="relative flex flex-grow items-stretch focus-within:z-10">
              <input
                type="email"
                name="email"
                id="email"
                onChange={(e) => {
                  setTag(e.target.value)
                }}
                value={tag}
                className="block w-full rounded-none rounded-l-md border-gray-300 pl-10 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="Insert Tag"
              />
            </div>
            <button
              onClick={() => {
                addTags(tag)
                setTag("")
              }}
              type="button"
              className="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <span>Add</span>
            </button>
          </div>
        </div>
        <div>
          <div className="mt-1">
            <textarea
              onChange={(e) => {
                setDescription(e.target.value)
              }}
              value={description}
              rows={4}
              placeholder="Add Description"
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
              router.push("/trees")
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
