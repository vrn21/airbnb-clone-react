import './Card.css';



const Card = () => {
    
    const AI101 = {
        "creator":"Tony stark",
        "image" :"https://upload.wikimedia.org/wikipedia/en/f/f2/Robert_Downey_Jr._as_Tony_Stark_in_Avengers_Infinity_War.jpg" ,
        "title":"Lets create an AI with Tony stark, the iron man",
        "country": "USA",
        "noOfRatings": 9,
        "rating": 5.0,
        "price": 69
    }


     return(
        <div className="card">
            <img className="img" src={AI101.image} />
                <div>
                    <span className="star" > * </span>
                    <span className='rating'> {AI101.rating}  </span>
                    <span className="noOfRatings"> ({AI101.noOfRatings})  | </span>
                    <span className='country'> {AI101.country} </span>
                    </div>
                    <p className='courseName'> {AI101.title}</p>
                    <p className='price' ><strong>from {AI101.price}&#36;</strong> / person</p>
                

        </div>
     ) 
}

export default Card;