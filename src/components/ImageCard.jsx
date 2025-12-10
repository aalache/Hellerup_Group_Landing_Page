

const ImageCard = ({id,image,category}) => {
  
  let gridStyle = ""

  switch (category) {
    case "sports":
      switch (id ) {
        case 1  :  gridStyle = "col-span-4 md:col-span-3 "; break;
        case 2 :  gridStyle = "col-span-2 md:col-span-1 "; break;
        case 3 :  gridStyle = "col-span-4 md:col-span-3 "; break;
        case 4 :  gridStyle = "col-span-2 md:col-span-1"; break;
      }    
      break;
    
    case "fashion":
      switch (id ) {
        case 1  :  gridStyle = "col-span-2  sm:col-span-1  "; break;
        case 2 :  gridStyle = "col-span-2 sm:col-span-1 "; break;
        case 3 :  gridStyle = "col-span-2 sm:col-span-2 "; break;
        case 4 :  gridStyle = "col-span-2 sm:col-span-1"; break;
        case 5 :  gridStyle = "col-span-2 sm:col-span-2"; break;
        case 6 :  gridStyle = "col-span-2 sm:col-span-1"; break;
      }    
      break;
  }



 



  return (
      <img src={image} alt="" className={`${gridStyle} w-full h-full object-cover`}/>
  )
}

export default ImageCard