
const CareerCard = ({ title,dept,location,description }) => {

  return (
    <div className="p-3  bg-red-950/70 sm:bg-red-950/40 hover:bg-red-950/70 backdrop-blur-md transition-all duration-150 rounded-md group">
        {/* Job Title */}
        <h2 className="text-lg sm:text-xl font-bold text-gray-400 group-hover:text-gray-200 transition-all duration-100 mb-2">{title}</h2>

        {/* Department */}
        <p className="text-sm text-gray-500 mb-1">
        <span className="font-semibold">Department: </span>{dept}
        </p>

        {/* Location */}
        <p className="text-sm text-gray-500 mb-3">
        <span className="font-semibold">Location: </span>{location}
        </p>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        {/* Button */}
        {/* <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition">
        View Details
        </button> */}
    </div>
  )
}

export default CareerCard