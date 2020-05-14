import React, { Component } from 'react'
import SideBar from './sidebar/sidebar';
import AdminDash from './dashboard/adminDash';
import '../adminPage/adminPageWrapper.css';
class AdminPage extends Component {
  render() {
    return (
      <div>      
        <SideBar />   
          <div className="container">
            <AdminDash />
          </div>
       </div>
    )
  }
}

export default AdminPage;