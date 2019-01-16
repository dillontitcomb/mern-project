import axios from 'axios';
import { PropTypes } from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const handleTestButtonClick = () => {
  console.log('Clicked!');
  axios
    .get('/api/profile/test/writefile')
    .then(res => console.log(res))
    .catch(err => console.log(err));
};
const handleSecondTestButtonClick = () => {
  console.log('2nd Button Clicked!');
  axios
    .get('/api/profile/test/readfile')
    .then(res => console.log(res))
    .catch(err => console.log(err));
};

class Landing extends Component {
  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard');
    }
  }
  render() {
    return (
      <div className="landing">
        <div className="dark-overlay landing-inner text-light">
          <div className="container">
            <div className="row">
              <div className="col-md-12 text-center">
                <h1 className="display-3 mb-4">Developer Connector</h1>
                <p className="lead">
                  Create a developer profile/portfolio, share posts and get help
                  from other developers
                </p>
                <hr />
                <Link to="/register" className="btn btn-lg btn-info mr-2">
                  Sign Up
                </Link>
                <Link to="/login" className="btn btn-lg btn-light">
                  Login
                </Link>
                <button
                  className="btn btn-lg btn-secondary"
                  onClick={handleTestButtonClick}
                >
                  Test Button
                </button>
                <button
                  className="btn btn-lg btn-secondary"
                  onClick={handleSecondTestButtonClick}
                >
                  Second Test Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Landing.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);
