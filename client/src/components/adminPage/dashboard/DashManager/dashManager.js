import React, { Component } from 'react'
import '../DashManager/dashManager.css'
import DashManagerView from './dashManagerView';
import {Link} from 'react-router-dom';


 class DashManager extends Component {

   constructor(props){
     super(props);
     this.state = {viewClicked: false};
     this.handleViewClick = this.handleViewClick.bind(this);
    }
    
    handleViewClick(e){
      e.preventDefault();
      this.setState({viewClicked: true});
    }
    handleClick(e){
      alert("Not working yet, coming soon.")
    }
    render() {
 
    const viewClicked = this.state.viewClicked;

    return (
      <div>
        <div className="custom-container text-light">
          <div className="row mx-auto h-50 border border-top-0 border-left-0 border-right-0">
            <div className="col-sm-6 my-auto">
               <Link className="dashLinks" style={{textDecoration: 'none'}} to={"/admin"} data-toggle="modal" data-target="#dashManagerView"onClick={this.handleViewClick}>View</Link>
              {/* <a style={{textDecoration: 'none'}} className="dashLinks" href="#" onClick={this.handleViewClick}>View</a>*/} 
            </div>
            <div className="col-sm-6 my-auto">
               <a style={{textDecoration: 'none'}} className="dashLinks" href="#" onClick={this.handleClick}>Add </a>
            
            </div>
          </div>
          <div className="row h-50">
            <div className="col-sm-6 my-auto">
               <a style={{textDecoration: 'none'}} className="dashLinks" href="#" onClick={this.handleClick}>Delete</a>
            </div>
            <div className="col-sm-6 my-auto">
               <a style={{textDecoration: 'none'}} className="dashLinks" href="#" onClick={this.handleClick}>Change</a>
            </div>
          </div>   
        </div>
       
        
        <PromptViewDash viewClicked={viewClicked}/>
        
    </div>
    )
  }
}

export default DashManager;

  function PromptViewDash(props) {
  
    const viewClicked = props.viewClicked;
  
    if(viewClicked){
      return <DashManagerView  />   
    } else 
      return null;
    
  }
