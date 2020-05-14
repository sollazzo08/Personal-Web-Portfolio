import React from 'react';
import axios from 'axios';

class Modal2 extends React.Component{

  constructor(props){
    super(props);
    this.state =({
      success: false,
      url : ""
    })
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    
  }

  handleChange(e) {
    e.preventDefault();
    this.setState({
      success : false,
      url : "" 
    })
  }

 // Perform the upload
 handleUpload = (ev) => {
  let file = this.uploadInput.files[0]; //files is a blob?
  console.log(file);
  
  // Split the filename to get the name and type
  let fileParts = this.uploadInput.files[0].name.split('.');
  console.log(fileParts);
  
  let fileName = fileParts[0];
  let fileType = fileParts[1];
  console.log("Preparing the upload");
  /*
    http://localhost:9000/sign_s3
    http://ec2-3-17-26-49.us-east-2.compute.amazonaws.com:9000/sign_s3
  */
  axios.post("http://ec2-3-17-26-49.us-east-2.compute.amazonaws.com:9000/sign_s3",{
    fileName : fileName,
    fileType : fileType
  })
  .then(response => {
    var returnData = response.data.data.returnData;
    console.log(returnData);
    
    var signedRequest = returnData.signedRequest;
    console.log(signedRequest);
    
    var url = returnData.url;
    console.log(url);
    
    this.setState({url: url})
    console.log("Recieved a signed request " + signedRequest);
    /*
      http://localhost:9000/image
      http://ec2-3-17-26-49.us-east-2.compute.amazonaws.com:9000/image
    */
    axios.post("http://ec2-3-17-26-49.us-east-2.compute.amazonaws.com:9000/image", {                      
      url : url
    }).then(() => console.log("Sent url to db"))
      .catch((err) => console.log(err));
   // Put the fileType in the headers for the upload
    var options = {
      headers: {
        'Content-Type': fileType
      }
    };
    axios.put(signedRequest,file,options)
    .then(result => {
      console.log("Response from s3")
      console.log(options);
      
      this.setState({success: true});
    })
    .catch(error => {
      alert("ERROR " + JSON.stringify(error));
    })
  })
  .catch(error => {
    alert(JSON.stringify(error));
  })
}

  render(){
    const SuccessMessage = () => (
      <div style={{padding:20}}>
        <h3 style={{color: 'green'}}>SUCCESSFUL UPLOAD</h3>
        {/*<a href={this.state.url}>Access the file here</a>*/}
        <br/>
      </div>
    )
    return(

      //This section of code was heavily influenced by bootstraps Modals
      <div class="modal fade bg-dark" id="UpdateProfilePicture" tabindex="-1" role="dialog" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Update Profile Picture</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>

            <div class="modal-body">
              {this.state.success ? <SuccessMessage/> : null}
              <input onChange={this.handleChange} ref={(ref) => { this.uploadInput = ref; }} type="file"/>
              <br/>
              <br/>
              <button className="btn btn-success" onClick={this.handleUpload}>UPLOAD</button>
            </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    )
  }

}

export default Modal2;