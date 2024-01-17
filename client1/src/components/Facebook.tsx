

function Facebook() {
  return (
    <div className="h-full mt-10 flex-grow flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-slate-700 mb-6 px-4 text-center">
          Facebook shorts/reel Downloader
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-600 mb-10 px-4 text-center">
          Enter the URL of the Facebook reel you want to download.
        </p>
        <div className=" flex flex-col items-center justify-center">
          <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
            <label
              htmlFor="price"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Enter your URL
            </label>
            <input
              type="text"
              // value={url}
              // onChange={handleInputChange}
              className="mt-1 p-2 border border-blue-600 rounded-md w-full focus:outline-none"
            />
            <button
              // disabled={}
              // onClick={}
              className="mt-4 p-2 bg-blue-600 text-white rounded-md focus:outline-none focus:shadow-outline-blue"
            >
              {/* {loading ? "Loading..." : "Download"} */}
              download
            </button>
          </div>
          {/* <img className="fixed right-0 bottom-10" src={yt} alt="yt gif" /> */}
        </div>
      </div>
  )
}

export default Facebook