import CatCard from './CatCard'
import { CatData } from './../assets/TempData'
import './PrettyCats.css';

const PrettyCats = () => {
    
    return(
        <div>
            <h1>Take a look at all the pretty cats available here</h1>

            <div className='catCards'>
                <CatCard 
                    pfp = {CatData[0].pfp} 
                    username = {CatData[0].username} 
                    phoneNumber = {CatData[0].phoneNumber} 
                    mailID = {CatData[0].mailID} 
                />

                <CatCard 
                    pfp = {CatData[1].pfp} 
                    username = {CatData[1].username} 
                    phoneNumber = {CatData[1].phoneNumber} 
                    mailID = {CatData[1].mailID} 
                />

                <CatCard 
                    pfp = {CatData[2].pfp} 
                    username = {CatData[2].username} 
                    phoneNumber = {CatData[2].phoneNumber} 
                    mailID = {CatData[2].mailID} 
                />

                <CatCard 
                    pfp = {CatData[3].pfp} 
                    username = {CatData[3].username} 
                    phoneNumber = {CatData[3].phoneNumber} 
                    mailID = {CatData[3].mailID} 
                />
         
            </div>    

        </div>
    )
}

export default PrettyCats