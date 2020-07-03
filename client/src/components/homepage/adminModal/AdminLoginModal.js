import React from 'react';
import './AdminLoginModal.css';
import { withRouter } from 'react-router-dom'; //needed for history.push()
import axios from 'axios';

class AdminLoginModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      /* isLoggedIn: false*/
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let name = event.target.name;
    let val = event.target.value;
    this.setState({ [name]: val });
  }

  handleSubmit(event) {
    event.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    /*
   http://localhost:9000/user/login
   http://ec2-3-17-26-49.us-east-2.compute.amazonaws.com:9000/user/login
  */
    axios
      .post('http://localhost:9000/user/login', user)
      .then((res) => {
        if (res.status === 200) this.props.history.push('/admin');
        //console.log(res.data)
      })
      .catch((error) => {
        console.log(error);
        alert('Error loggin in please try again');
      });
    //this.setState({email: '', password: ''})
  }

  render() {
    return (
      //This section of code was heavily influenced by bootstraps Modals
      <div
        className='modal bg-dark'
        id='promptAdmin'
        tabindex='-1'
        role='dialog'
        aria-hidden='true'>
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <div className='modal-header text-center'>
              <h5 className='modal-title text-center'>Admin Login</h5>
              <button type='button' className='close' data-dismiss='modal' aria-label='Close'>
                <span aria-hidden='true'>&times;</span>
              </button>
            </div>
            <div className='modal-body'>
              <form onSubmit={this.handleSubmit} className='form-section'>
                <h5>Email</h5>
                <input
                  type='email'
                  name='email'
                  placeholder='Enter Email'
                  className='form-control'
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
                <h5>Password</h5>
                <input
                  type='password'
                  name='password'
                  placeholder='Enter Password'
                  className='form-control'
                  value={this.state.password}
                  onChange={this.handleChange}
                  required
                />
                <br />
                <input className='btn btn-success' type='submit' value='Login' />
              </form>
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-danger' data-dismiss='modal'>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AdminLoginModal);
