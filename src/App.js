import './App.css';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Characters from './Components/Characters'
import CharacterDetails from './Components/CharacterDetails.js'


function App() {
  return (
    <Router>
  <Routes>
  <Route exact path='/' element={<Characters/>} />
  <Route exact path='/character/:id' element={<CharacterDetails/>} />

  </Routes>
  </Router>
  );
}

export default App;
