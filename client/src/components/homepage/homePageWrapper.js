import React from 'react';
import NavBar from './navbar/Navbar';
import MediaPage from './mediaPage/MediaSection';


function HomePageWrapper(){

    return(
      <div>
        <NavBar />
        <MediaPage /> 
      </div>
    )
}

export default HomePageWrapper;