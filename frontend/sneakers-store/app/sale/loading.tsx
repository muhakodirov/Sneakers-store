import { FiCommand } from "react-icons/fi";
export default function Loading() {
  const array = [1,2,3,4, 5, 6]
  return (
    <div className="flex justify-center content-center ">
      <FiCommand className="loading-icon text-teal-500 text-7xl animate-spin-custom" />
    </div>
  )
}
