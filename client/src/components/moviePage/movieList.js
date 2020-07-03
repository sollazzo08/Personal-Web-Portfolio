import React, { Component } from 'react';
import axios from 'axios';
import NavBar from '../homepage/navbar/Navbar';
import './moiveList.css';
import Pagination from '@material-ui/lab/Pagination';
import {Container, Grid} from '@material-ui/core/';

class MovieList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      favMovies: []
    };
   
  }


  getMovieInfo = () => {
    axios.get(
        'https://api.themoviedb.org/3/account/sollazzo08/favorite/movies?api_key=1ab8913d6521679e752e5bc29f4a1e56&session_id=380b11ff558240f74bca4a51c89126cc5ce2c00d&language=en-US&sort_by=created_at.asc&page=1'
      )
      .then((response) => {
        var favMovieList = response.data.results;
          if (response) {
            this.setState({ favMovies: favMovieList}); 
          }
      });
  }

  componentDidMount() {
    this.getMovieInfo();
  }

  render() {
       
    const favMovies = this.state.favMovies;
 
    const movie = favMovies.map((info, index) => (
      index <= 8 && 
      <div className='col-md-4' key={info.id}>
        <h3>{info.title}</h3>
          <img className='posters' src={`https://image.tmdb.org/t/p/w400${info.poster_path}`} />
            <div className='row meta-text pt-2'>
              <div className='col-sm-6 px-0'>
                <p> Rating: {Math.trunc(info.popularity)}</p>
              </div>
              <div className='col-sm-6 px-0'>
                <p> Release Date: {info.release_date}</p>
              </div>
            </div>
      </div>
    ));

    return (

      <div>
        <NavBar />
        <div className='container-fluid text-light pt-4'>
          {/* First row of Movies */}
          <div className='row test'>
              {movie}
          </div>
        </div>
      <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
      >       
      <Pagination color="white" background="red"/>
      </Grid>
      </div>
    );
  }
}

export default MovieList;
