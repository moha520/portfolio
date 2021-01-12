import React from 'react';

import homebg from '../images/homebg.mp4'

const Home = () => {
    return ( 
       


<video autoPlay loop muted>
             <source src={homebg} type='video/mp4'></source>


</video>


     );
}
 
export default Home;