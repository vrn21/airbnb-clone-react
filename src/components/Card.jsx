import './Card.css';

const Card = () => {
     return(
        <div className="card">
            <img className="img" src="https://upload.wikimedia.org/wikipedia/en/f/f2/Robert_Downey_Jr._as_Tony_Stark_in_Avengers_Infinity_War.jpg" alt ="tony stark iron man"/>
                <div>
                    <span className="star" > * </span>
                    <span className='rating'>5.0  </span>
                    <span className="noOfRatings"> (6)  | </span>
                    <span className='country'> USA </span>
                    </div>
                    <p className='courseName'>Lets create an AI with Tony Stark, the iron man</p>
                    <p className='price' ><strong>from 69&#36;</strong> / person</p>
                
                

           

        </div>
     ) 
}

export default Card;