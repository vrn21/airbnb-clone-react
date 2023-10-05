import './Card.css'



const SingleCard = (props) => {
    var BadgeText = null
    if (props.openSpots == 0 ){
        var BadgeText = "SOLD OUT"
    }else if (props.country == "USA") {
        var BadgeText = "ONLINE"
    }
     return(
        <div className="card-single">
            <img className="img" src={props.image} />
                <div>
                    {(props.openSpots == 0 ) ? <div className='card--badge'>{BadgeText}</div>:null}
                    <span className="star" > * </span>
                    <span className='rating'> {props.rating}  </span>
                    <span className="noOfRatings"> {props.noOfRatings}  | </span>
                    <span className='country'> {props.country} </span>
                    </div>
                    <p className='courseName'> {props.title}</p>
                    <p className='price' ><strong>from {props.price}&#36;</strong> / person</p>
                
                </div>
     ) 
}

export default SingleCard