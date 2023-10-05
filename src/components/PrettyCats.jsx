import CatCard from './CatCard'
import { CatData } from './../assets/TempData'
import './PrettyCats.css'

const PrettyCats = () => {

    const cards = CatData.map((cat) =>{
        return(
            <CatCard
                pfp = {cat.pfp}
                username = {cat.username}
                phoneNumber = {cat.phoneNumber}
                mailID = {cat.mailID}
            />
        )
    } )
    
    return(
        <div>
            <h1>Take a look at all the pretty cats available here</h1>
            <div className='catCards'>
                {cards}
            </div>    
        </div>
    )
}

export default PrettyCats