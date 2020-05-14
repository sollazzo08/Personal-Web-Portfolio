import React, { Component } from 'react'
import DashManger from './DashManager/dashManager';

class AdminDash extends Component {

  render() {

    return (
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-md-4">
            <h3 className="text-light text-center">Movie List</h3>
              <div className="card border-0">
                <div className="card-img bg-dark text-center">
                  <DashManger /> 
                </div>
              </div>       
           </div>
         </div>   
      </div>
    )
  }
}

export default AdminDash;