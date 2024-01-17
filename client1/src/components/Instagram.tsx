import React, { useState, ChangeEvent } from "react";
import axios from "axios";

function Instagram() {
  const [url, setUrl] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const handleDownload = async () => {
    try {
      setLoading(true);

      // Make a GET request to your server's endpoint
      const response = await axios.get(
        `http://localhost:3000/insta-reel-download?url=${url}`
      );

      // Handle the response from the server
      console.log(response.data);

      // Extract the video URL from the response
      const videoUrl = response.data.data[0].url; // Assuming the URL is present in the first data entry

      // Create a hidden link with the video URL and trigger the download
      const link = document.createElement("a");
      link.href = videoUrl;
      link.download = "downloaded_reel.mp4";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setLoading(false);
    } catch (error) {
      console.log("Error -", error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-full mt-10 flex-grow flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-slate-700 mb-6 px-4 text-center">
          Instagram Reel Downloader
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-600 mb-10 px-4 text-center">
          Enter the URL of the Instagram reel you want to download.
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
              value={url}
              onChange={handleInputChange}
              className="mt-1 p-2 border border-pink-400 rounded-md w-full focus:outline-none"
            />
            <button
              disabled={loading}
              onClick={handleDownload}
              className="mt-4 p-2 bg-pink-400 text-white rounded-md focus:outline-none focus:shadow-outline-blue"
            >
              {loading ? "Loading..." : "Download"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Instagram;
