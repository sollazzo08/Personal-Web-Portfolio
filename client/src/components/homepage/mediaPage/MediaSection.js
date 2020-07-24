import React from 'react';
import './MediaPage.css';
import actionFilmImg from '../../../img/actionFilm.png';
import musicImg from '../../../img/musicImg.png';
import stockImg from '../../../img/stockImg.png';
import TypeIt from 'typeit-react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class MediaSection extends React.Component {

  constructor(props){
    super(props)
    //Hold state of image url
    this.state = {  
      img: '',
      name:'',
      bio:''
    };
  };

  componentDidMount() {
/*
   http://localhost:9000/image
   http://ec2-3-17-26-49.us-east-2.compute.amazonaws.com:9000/image
*/
    fetch('http://localhost:9000/image'   
    )      //Fetch most recently added image from database
      .then((res) => res.json())
      .then((data) => {
         // console.log(data[0].url);
          var imageURL = data[0].url;
          this.setState({
            img: imageURL
          })
        }
      )
/*
   http://localhost:9000/userInfo
   http://ec2-3-17-26-49.us-east-2.compute.amazonaws.com:9000/userInfo
*/  
      axios.get('http://localhost:9000/userInfo', {
     
      })
      .then(response => {
        this.setState({
          name: response.data[0].name,
          bio: response.data[0].bio
        })
        
      })
      .catch(err => console.log(err))
      
       
  }


  
 render() {

    const {img} = this.state;

   return (
   <div>
    <div className="container d-flex border-0 rounded shadow-lg bg-dark text-light px-0 mt-4">
     <div className="profile-image border-0 rounded mx-0 my-0 bg-dark row h-100">
       <div className="col-sm-12 my-auto text-center">
         <img className="mx-auto" src={img} height="300" alt=""/>       
       </div>
     </div>
     <div className="bio ">
      <h5 className="mb-0 display-4">{this.state.name}</h5>
        <div className="desc text-light">
          <p>{this.state.bio}</p>
          <p className="mb-0"></p>
        </div>  
     </div> 
    </div>
    <div className="container bg-dark mt-5 pb-2">
      <div className="row border-0 roudned ">
        <div className="col-lg-4">
          <h3 className="text-light text-center">Movies</h3>
          <div className="card border-0">
            <div className="card-img bg-dark text-center" >
              <Link to={{pathname: '/movieList'}}>  
                <img className="mx-auto bg-dark img-shake" src={actionFilmImg} height="250" alt=""/>    
              </Link>
            </div>
          </div>
        </div>              
        <div className="col-lg-4">
          <h3 className="text-light text-center">Stocks</h3>
          <div className="card border-0">
            <div className="card-img bg-dark text-center">
              <Link to={{pathname: 'stockList' }} >
              <img className="mx-auto bg-dark img-shake" src={stockImg} height="250" alt=""/>  
              </Link>
            </div>
          </div>
        </div>      
        <div className="col-lg-4">
          <h3 className="text-light text-center">Music</h3>
          <div className="card border-0">
            <div className="card-img bg-dark text-center">
              <img className="mx-auto bg-dark img-shake" src={musicImg} height="250" alt=""/>  
            </div>
          </div>
        </div>
      </div>
    </div>
    
</div>  
    
 
   );
 } 
};


export default MediaSection;