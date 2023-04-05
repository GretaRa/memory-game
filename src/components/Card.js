const Card = ({title, source}) => {
  return(
    <div className="card bg-[#EBBAB9] border-[#B89291] border-2  rounded-md p-3">
      <img className=" rounded-md h-72 w-72 object-cover" src={source} alt="plant"></img>
      <p className="text-3xl text-center pt-2">{title}</p>
    </div>
  )
}

export default Card