import FoodBackground from "../assets/images/FoodBackground.png";

const BackGround = () => {
  return(
    <div>
        <img src={FoodBackground} className="w-full max-h-[600px] object-cover"></img>
    </div>
  )
}

export default BackGround;