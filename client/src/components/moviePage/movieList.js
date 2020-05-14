import React, { Component } from 'react'
import axios from 'axios'
import NavBar from '../homepage/navbar/Navbar';
class MovieList extends React.Component{

  constructor(props){
    super(props);
    this.state = {favMovies: []}  
  }
  

  
  componentDidMount() {
    let currentComponent = this;
      axios.get('https://api.themoviedb.org/3/account/sollazzo08/favorite/movies?api_key=1ab8913d6521679e752e5bc29f4a1e56&session_id=380b11ff558240f74bca4a51c89126cc5ce2c00d&language=en-US&sort_by=created_at.asc&page=1')
      .then(function (response) {
       
        console.log(response.data.results);
        currentComponent.setState({favMovies: response.data.results})
      })
      .catch(function (error) {
        console.log(error);
      })
  }
  
render(){
  const favMovies = this.state.favMovies;
  const movieList = favMovies.map((movie) =>
    
      <li className="list-group-item"key={movie.original_title}>
        {movie.original_title}
      </li>
  );
  
     return (
       <div>
         <NavBar />
      <div className="container">
        <h3 className="text-center">My List of Favorite Movies</h3>
        <ul className="list-group">
          {movieList}
       </ul>
      </div>
       </div>
     )
}
  
}

export default MovieList;