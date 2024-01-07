import { FaCloudDownloadAlt } from "react-icons/fa";

function Navbar() {
  return (
    <header className="sticky mb-2 top-0 left-0 right-0 h-16 flex items-center justify-around px-4 bg-violet-600 text-white">
      <div className="flex items-center">
        <FaCloudDownloadAlt className="fixed left-10 h-7 w-7" />
        <span className="sr-only">Acme Inc</span>
      </div>
      <nav className="flex gap-4">
        <div className="hover:underline">
          About
        </div>
        <div className="hover:underline">
          Guide
        </div>
        <div className="hover:underline">
          Help
        </div>
      </nav>
    </header>
  )
}

export default Navbar