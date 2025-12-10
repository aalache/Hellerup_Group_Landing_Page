import { ScaleLoader } from "react-spinners"


const Loading = () => {
  return (
    <div className="h-screen w-full bg-black flex items-center justify-center gap-4 ">
        <ScaleLoader
            color={'#bf0603'}
            size={200}
        />
        <div className="flex items-end justify-center gap-1">
            <span className="text-white  md:text-lg">Loading</span>
            <span className="h-[3px] w-[3px] relative bottom-1.5 rounded-full bg-white animate-pulse"></span>
            <span className="h-[3px] w-[3px] relative bottom-1.5 rounded-full bg-white animate-pulse animation-delay-100"></span>
            <span className="h-[3px] w-[3px] relative bottom-1.5 rounded-full bg-white animate-pulse animation-delay-400"></span>
        </div>

    </div>
  )
}

export default Loading