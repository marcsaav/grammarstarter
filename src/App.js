import { BroswerRouter as Router, Route} from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login'

function App() {
  return (
    <Router>
      <div className='App'>
      <Route exact path='/' component={Login} />
      <Route exact path='/home' component={Home} />
      </div>
    </Router>
  );
}

export default App;
