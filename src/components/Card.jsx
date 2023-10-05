import Data from '../assets/Data'
import './Card.css'
import SingleCard from './SingleCard';


const Card = () => {
    const eachCard = Data.map(eachElement => (
        <div className='cards-div'>
        <SingleCard
        key={eachElement.id}
        {...eachElement}
        />

        </div>
    ));

    return <div>{eachCard}</div>;
};



export default Card;