import React, { useState } from "react";
import axios from "axios";
// import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Tab from "./components/Tab";
import Instagram from "./components/Instagram";
import Facebook from "./components/Facebook";
import { FaCloudDownloadAlt } from "react-icons/fa";

interface VideoInfo {
  url: string;
  // Add any other properties based on the actual structure of response.data.info
}

function App() {
  const [url, setUrl] = useState<string>("");
  const [videoInfo, setVideoInfo] = useState<VideoInfo[] | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState<number | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(false);
  const [tab, setTab] = useState<string>("yt");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  const handleDownload = async () => {
    try {
      setLoading(true);
      const response = await axios.get<{ info: VideoInfo[] }>(
        `https://yt-insta-fb-reel-downloader.vercel.app/download?url=${url}`
      );

      if (response.data && response.data.info) {
        setVideoInfo(response.data.info);
        setCurrentVideoIndex(0);

        // Trigger video download
        if (response.data.info.length > 0) {
          const downloadLink = document.createElement("a");
          downloadLink.href = response.data.info[0].url;
          downloadLink.download = "video.mp4";
          downloadLink.target = "_blank";
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
        }
      } else {
        setCurrentVideoIndex(null);
        setVideoInfo(null);
      }
    } catch (error) {
      console.log(error);
      setVideoInfo(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div>
        {/* <Navbar /> */}

        <header className="sticky mb-2 top-0 left-0 right-0 h-16 flex items-center justify-around px-4 bg-slate-500 text-white">
          <div className="flex items-center max-lg:hidden">
            <FaCloudDownloadAlt className="fixed left-10 h-7 w-7" />
          </div>
          <nav className="flex gap-4">
            <div
              className="cursor-pointer text-white-600"
              onClick={() => {
                setTab("yt");
              }}
            >
              You Tube
            </div>
            <div
              className="cursor-pointer text-white-400"
              onClick={() => {
                setTab("insta");
              }}
            >
              Instagram
            </div>
            <div
              className="cursor-pointer text-white-600"
              onClick={() => {
                setTab("fb");
              }}
            >
              Facebook
            </div>
          </nav>
        </header>

        {tab === "yt" && (
          <div className="h-full mt-10 flex-grow flex flex-col items-center justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 dark:text-slate-700 mb-6 px-4 text-center">
              YouTube Video Downloader
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-600 mb-10 px-4 text-center">
              Enter the URL of the YouTube video you want to download.
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
                  className="mt-1 p-2 border border-red-600 rounded-md w-full focus:outline-none"
                />
                <button
                  disabled={loading}
                  onClick={handleDownload}
                  className="mt-4 p-2 bg-red-500 text-white rounded-md focus:outline-none focus:shadow-outline-blue"
                >
                  {loading ? "Loading..." : "Download"}
                </button>
              </div>
            </div>
          </div>
        )}

        {tab === "insta" && <Instagram />}
        {tab === "fb" && <Facebook />}
        <Footer />
      </div>
    </>
  );
}

export default App;
