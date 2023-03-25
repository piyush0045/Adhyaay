import Navbar from "./components/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./components/Home";
import About from './components/About'
import Contact from "./components/Contact";
import Service from "./components/Service";
import Portfolio from "./components/Portfolio";

const App = () => {
  return (
    <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path = "/" element = {<Home/>}/>
    <Route path = "/about" element = {<About/>}/>
    <Route path = "/portfolio" element = {<Portfolio/>}/>
    <Route path = "/service" element = {<Service/>}/>
    <Route path = "/contact" element = {<Contact/>}/>

    
  </Routes>
  </BrowserRouter>
   );
}
 
export default App;