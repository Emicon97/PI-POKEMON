import LandingPage from '../Components/LandingPage/LandingPage.jsx';
import MainRoute from '../Components/MainRoute/Smart/MainRoute.jsx';
import { Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path='/' render={ () => <LandingPage/>} />
      <Route exact path='/home' render={ () => <MainRoute/>} />
      {/* <Route exact path='/:pokemonId' render={ () => <Details/>} /> */}
    </div>
  );
}

export default App;
