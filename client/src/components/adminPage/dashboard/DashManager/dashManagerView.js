import React, { Component } from 'react';
import MovieList from '../../../moviePage/movieList';


class DashManagerView extends Component {




  render() {

    
    return (
     //This section of code was heavily influenced by bootstraps Modals
     <div className="modal bg-dark" id="dashManagerView" tabindex="-1" role="dialog" aria-hidden="true">
     <div className="modal-dialog" role="document">
       <div className="modal-content">
         <div className="modal-header text-center">
         <h5 className="modal-title text-center">Favorite Movie List</h5>
           <button type="button" className="close" data-dismiss="modal" aria-label="Close">
             <span aria-hidden="true">&times;</span>
           </button>
         </div>
           <div className="modal-body">
             <MovieList />
           </div>
         <div className="modal-footer">
           <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
          
         </div>
       </div>
     </div>
   </div>
    )
  }
}

export default DashManagerView;