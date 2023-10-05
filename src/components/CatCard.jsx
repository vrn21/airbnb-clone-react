import "./CatCard.css"

const CatCard = ({pfp,username,phoneNumber,mailID}) =>{
    


    return(
        <div className="cardT">
            <img src={pfp} className="pfp" />
            <p className="username"><strong>{username}</strong></p>
                <div className="phone-details">
                    <img className="phone-logo" src="https://i.pinimg.com/originals/69/27/aa/6927aab364de747a87f59686e830c4bf.png" alt="phone-symbol" />
                    <span className="phoneNo">{phoneNumber}</span>
                </div>
                <div className="mail-details">
                        <img className="mail-logo" src="https://static.vecteezy.com/system/resources/previews/020/009/601/original/email-and-mail-icon-black-free-png.png" alt="mail-symbol" />
                    <span className="mailID">{mailID}</span>
                </div>
        </div>
    )
    
}

export default CatCard;