import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import Details from '../Details/Details';
import AddMovie from '../AddMovie/AddMovie';



function App() {
  return (
    <div className="App">
      <h1 className="header">The Movies Saga!</h1>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>


        <Route exact path='/details' component={Details} />
        {/* Add Movie page */}
        <Route exact path='/add' component={AddMovie} />
      </Router>
    </div>
  );
}

export default App;
