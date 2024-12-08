import Button from './Button'
import './MainContainer.css'

const MainContainer = () => {
  return (
    <div className="mainContainer">
        <div className="main_heading">CONTACT US</div>
        <p>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA.</p>
        <div className="main_content">
            <div className="main_forms">
                <div className="support_call_chat">
                    {/* bg-true-blackbg-else-whitebg-backgroundColor
                    tc-true-blackcolor-else-whitecolor-textColor */}
                    <Button text='VIA SUPPORT CHAT' bg={true} tc={false} widthlength={false}/>
                    <Button text='VIA CALL' bg={true} tc={false} widthlength={false}/>
                </div>
                <Button text='VIA EMAIL FORM'bg={false} tc={true} widthlength={true}/>
                <label htmlFor="name">Name</label>
                <input type="text" id='name' className='name_email'/>
                <label htmlFor="email">Email</label>
                <input type="text" id='email' className='name_email'/>
                <label htmlFor="text">Text</label>
                <textarea rows="6" id='text'/>
                <div className="submit_button_div">
                <Button text='SUBMIT' bg={true} tc={false} widthlength={false}/>
                </div>
            </div>
            <img src="./images/contact-animate.svg" alt="contact-animate-pic" />
        </div>
    </div>
  )
}

export default MainContainer