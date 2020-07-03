import React, { Component } from 'react';
import '../DashManager/dashManager.css';
import DashManagerView from './dashManagerView';
import { Link } from 'react-router-dom';

class DashManager extends Component {
  
  constructor(props) {
    super(props);
    this.state = 
        { viewClicked: false,
          searchMovieInput: "",
          movieInfo: {
              title: "",
              poster: "",
              genre: "",
              meta: {
                popularity: null,
                releaseDate: null
              }

          }
        };
    this.handleViewClick = this.handleViewClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
  }
  handleChange(e) {
   
    this.setState({
      [e.target.name]: e.target.value
    })

  }
  addMovie(e){
    e.preventDefault();
    console.log("I was clicked");

    const movieInfo = {
      title: this.state.title,
      poster: this.state.poster,
      genre: this.state.genre,
        meta: {
          popularity: this.state.popularity,
          releaseDate: this.state.releaseDate
        }
    }
    /*
    axios.get('http://localhost:9000/movie'(moiveInfo))
    */
  }
  handleViewClick(e) {
    e.preventDefault();
    this.setState({ viewClicked: true });
  }
  handleClick(e) {
    alert('Not working yet, coming soon.');
  }
  render() {
    const viewClicked = this.state.viewClicked;
    console.log(this.state.movie);
    
    return (
      <div>
        <div className="custom-container text-light">
          <div className='row mx-auto h-50 border border-top-0 border-left-0 border-right-0'>
            <div className='col-sm-6 my-auto'>
              <Link
                className='dashLinks'
                style={{ textDecoration: 'none' }}
                to={'/admin'}
                data-toggle='modal'
                data-target='#dashManagerView'
                onClick={this.handleViewClick}>
                View
              </Link>
              {/* <a style={{textDecoration: 'none'}} className="dashLinks" href="#" onClick={this.handleViewClick}>View</a>*/}
            </div>
            <div className='col-sm-6 my-auto'>
              <a
                style={{ textDecoration: 'none' }}
                className='dashLinks'
                href='#'
                onClick={this.handleClick}>
                Add
              </a>
              <div className="container-fluid">
                <form className="form-group" onSubmit={this.addMovie}>
                <input className="form-control"
                        name="movie"
                        value={this.state.movie}
                        onChange={this.handleChange}
                        />
                 <button className="btn btn-light">Add Movie</button>       
                </form>
              </div>
            </div>
          </div>
          <div className='row h-50'>
            <div className='col-sm-6 my-auto'>
              <a
                style={{ textDecoration: 'none' }}
                className='dashLinks'
                href='#'
                onClick={this.handleClick}>
                Delete
              </a>
            </div>
            <div className='col-sm-6 my-auto'>
              <a
                style={{ textDecoration: 'none' }}
                className='dashLinks'
                href='#'
                onClick={this.handleClick}>
                Change
              </a>
            </div>
          </div>
        </div>

        <PromptViewDash viewClicked={viewClicked} />
      </div>
    );
  }
}

export default DashManager;

function PromptViewDash(props) {
  const viewClicked = props.viewClicked;

  if (viewClicked) {
    return <DashManagerView />;
  } else return null;
}
