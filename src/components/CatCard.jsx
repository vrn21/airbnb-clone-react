import "./CatCard.css"
import {CatData} from '../assets/TempData.js'


const TempCard = (props) =>{
    


    return(
        <div className="cardT">
            <img src={props.pfp} className="pfp" />
            <p className="username"><strong>{props.username}</strong></p>
                <div className="phone-details">
                    <img className="phone-logo" src="https://i.pinimg.com/originals/69/27/aa/6927aab364de747a87f59686e830c4bf.png" alt="phone-symbol" />
                    <span className="phoneNo">{props.phoneNumber}</span>
                </div>
                <div className="mail-details">
                        <img className="mail-logo" src="https://static.vecteezy.com/system/resources/previews/020/009/601/original/email-and-mail-icon-black-free-png.png" alt="mail-symbol" />
                    <span className="mailID">{props.mailID}</span>
                </div>
        </div>
    )
    
}

export default TempCard;