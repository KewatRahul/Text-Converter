
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import Texts from'./components/Texts';
import Contact from './components/Contact';
/*import { Link } from 'react-router-dom';*/
import {Switch} from "react-router-dom";
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";


const App = () =>{
  return (
    <Router>
   <>
   <Navbar />

   <div className='container'>
  
   <Switch>
   <Route exact path="/" component={Texts} />
   <Route path='/About' component={About} />
   <Route path='/Contact' component={Contact} />
          
          
   </Switch>
    
     
  
   </div>
   </>
   </Router>
  );
}

export default App;
