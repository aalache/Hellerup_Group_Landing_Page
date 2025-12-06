

const ImageCard = ({id,image}) => {

  let gridStyle = ""

  console.log("ID:" , id);

  switch (id ) {
    case 1  :  gridStyle = "col-span-4 md:col-span-3 "; break;
    case 2 :  gridStyle = "col-span-2 md:col-span-1 "; break;
    case 3 :  gridStyle = "col-span-4 md:col-span-3 "; break;
    case 4 :  gridStyle = "col-span-2 md:col-span-1"; break;
  }


  return (
      <img src={image} alt="" className={`${gridStyle} w-full h-full object-cover`}/>
  )
}

export default ImageCard