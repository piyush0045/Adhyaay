import background from '../assets/background.jpg'
import styled from 'styled-components';




const Home = () => {
    return ( 
     <div style={{backgroundImage: `url(${background})`,backgroundPosition: 'center', objectFit: 'scale-down',height: '100vh'}}>
        <p>Fest</p>
     </div>
     );
}
 
export default Home;