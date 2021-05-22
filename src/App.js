import 'bootstrap/dist/css/bootstrap.css'
import Logo from './logo.png'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './components/Menu' 
import CreateSurvey from './components/CreateSurvey';
import Publish from './components/Publish';
import { useState } from 'react';
import {Link} from 'react-router-dom'

function App() { 
  const [question,setQuestion] = useState([]);
  console.log(question);
  return (
   <div className="App">
   <div className='col-md-10 offset-md-1 col-12 text-center'>
   
    
    <BrowserRouter>
    <Link to='/'>
    <img className='col-md-6' alt='logo' src={Logo}/>
    </Link>
    <Switch>

      <Route path='/' component={Menu} exact/>
      <Route path='/create'  exact >
        <CreateSurvey question={question} setQuestion={setQuestion}/></Route>
      <Route path='/publish'  exact>
        <Publish question={question} />
      </Route>
    </Switch>
    </BrowserRouter>
   </div>
   </div>
  );
}


export default App;
