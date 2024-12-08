import Button from "./Button"
import './MainContent.css'

const MainContent = () => {
  return (
    <div className="main_container">
        <div className="main_container_text">
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES</p>
            <div className="buttons">
                <Button text="Shop Now" BackVal={true} FontVal={true}/>
                <Button text="Category" BackVal={false} FontVal={false} />
            </div>
            <div className="extra_text">
                <p>Also Avaliable On</p>
                <div className="market_places">
                    <img src="./images/flipkart-img.png" alt="flipkart-logo" />
                    <img src="./images/amazon-img.png" alt="amazon-logo" />
                </div>
            </div>
        </div>
        <div className="main_container_img"><img src="./images/shoe_image.png" alt="shoe_image"/></div>
    </div>
  )
}

export default MainContent