import './Hero.css';

const Hero = () =>{
    return(
        <div className='hero'>
            <div className='hero-images'>
                <img className='houses' src="https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?cs=srgb&dl=pexels-thgusstavo-santana-2102587.jpg&fm=jpg" alt="house4rent" />
                 <img className='houses' src="https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?cs=srgb&dl=pexels-fomstock-com-1115804.jpg&fm=jpg"  />
                <img className='houses' src="https://images.unsplash.com/photo-1598911096723-af003b4ea77a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvdXNlJTIwdGVycmFjZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" alt="" srcset="" />
                <img className='houses' src="https://images.pexels.com/photos/16827798/pexels-photo-16827798/free-photo-of-clear-sky-over-buildings.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" srcset="" /> 
            </div>
            <h1>Online Experiences</h1>
            <p>Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}

export default Hero;