import React from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';
import UpdateBioModal from './modals/updateBioModal';
import UpdateProfilePicModal from './modals/updateProfilePicModal';
import GradPhoto from '../../../img/grad_photo.png';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAlignLeft,faUser,faImage} from '@fortawesome/free-solid-svg-icons';


class SideBar extends React.Component{
  render(){

    return (
      <div>
          <UpdateBioModal />
          <UpdateProfilePicModal />
    <div class="vertical-nav bg-dark">
      <div class="px-3 py-3 my-0 bg-dark text-light">
        <div class="media d-flex align-items-center">
          <img src={GradPhoto} alt="" width="60px" height="" class="rounded-lg shadow-lg mr-4" />
          <div class="media-body">
            <h4 class="m-0">Michael</h4>
            <p class="mb-0 te">Administrator</p>
          </div>
       </div>
      </div>
      
      <hr className="my-0 bg-light" />
  
        <p class="text-light my-2 pl-4 font-weight-bold text-uppercase">Panel</p>
        
     <ul class="nav flex-column">
       <li class="nav-item">
         <Link class="nav-link bg-light text-dark text-left shadow-lg" to="/">
           <FontAwesomeIcon icon={faUser} size='1x' />View Profile</Link>
        
       </li>
       <li class="nav-item">
         <button type="button" class="nav-link bg-light text-dark btn-block text-left shadow-lg" 
                 data-toggle="modal" 
                 data-target="#UpdateBioModal"> 
                <FontAwesomeIcon icon={faAlignLeft} size='1x' />Update Info
              
        </button>
       </li>
       <li class="nav-item">
        <button type="button" class="nav-link bg-light text-dark btn-block text-left shadow-lg" 
                data-toggle="modal" 
                data-target="#UpdateProfilePicture"> 
                <FontAwesomeIcon icon={faImage} size='1x'/>Update Profile Picture
       </button>
      </li>
     </ul>
   
     
    </div>
  </div>
    )}
   
}

export default SideBar;