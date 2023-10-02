import Data from '../assets/Data';
import './Card.css';

console.log(Data)

const Card = () =>{
    const eachCard = Data.map( (eachElement) => {
        return(
            <singleCard 
                image = {eachElement.image}
                rating = {eachElement.rating}
                noOfRatings = {eachElement.noOfRatings}
                country = {eachElement.country}
                title = {eachElement.title}
                price = {eachElement.price}

            />
        )
    })

    return (
        <div>
            {eachCard}
        </div>
    )
}


const singleCard = (props) => {

     return(
        <div className="card">
            <img className="img" src={props.image} />
                <div>
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

export default Card;