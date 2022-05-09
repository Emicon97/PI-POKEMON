import { Route } from 'react-router-dom';

import LandingPage from '../Components/LandingPage/LandingPage.jsx';
import MainRoute from '../Components/MainRoute/Main/MainRoute.jsx';
import Creator from '../Components/Creator/Creator.jsx';
import Details from '../Components/Details/Main/Details.jsx';

import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' render={ () => <LandingPage/>} />
      <Route exact path='/home' render={ () => <MainRoute/>} />
      <Route exact path='/creation' render={() => <Creator/>}/>
      <Route exact path='/pokemon/:pokemonId' render={ ({match}) => 
        <Details pokemon={({match})}/>
      } />
    </div>
  );
}

export default App;
