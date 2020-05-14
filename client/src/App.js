import React from 'react';
import './css/style.css';
import AdminPage from './components/adminPage/adminPageWrapper';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import HomePageWrapper from './components/homepage/homePageWrapper';
import MoviePage from './components/moviePage/moviePageWrapper';


function App() {

  return (
    
  <Router>
   <div>
     
     <Switch>
     <HomePageWrapper path="/" exact component={HomePageWrapper}/> 
     <Route path="/admin" component={AdminPage} />
     <Route path='/movieList' component={MoviePage} />
     </Switch>
      
     </div> 
  </Router>   
  );
}



export default App;
