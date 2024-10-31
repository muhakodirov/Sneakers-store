import { FiCommand } from "react-icons/fi";
export default function Loading() {
  return (
    <div className="flex justify-center content-center mt-52">
      <FiCommand className="loading-icon text-teal-500 text-7xl animate-spin-custom" />
    </div>
  )
}
