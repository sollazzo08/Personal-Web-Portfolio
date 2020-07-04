import React,{useState} from 'react'

//we need total number of movies and total number of movies per page
const Pagination = (props) => {

  console.log(props.totalMovies);
  const pages = [];
  var totalMovies = props.totalMovies;
  var totalPages = props.totalMovies;
  //dont forget current page
  //keep track of items per page which will be 9 
  
  //populate page numbers ikn pages array 
  
  const [click,handleClick] = useState(false);

  //list element for number of pages
  const pageNumbers =  pages.map((pageNumber) => {
    return(
      <a key={pageNumber} onClick={() => handleClick()}
      className="page-link" 
      href="#">{pageNumber}</a>
    )
  })
  return (
    <nav className="">
      <ul className="pagination">
        <li className="page-item">

          <a onClick={() => handleClick()}
             className="page-link" 
             href="#">Previous</a>
            {pageNumbers}
          <a onClick={() => handleClick()}
             className="page-link" 
             href="#">Next</a>
        </li>
      </ul>
    </nav>
  )
}


export default Pagination;