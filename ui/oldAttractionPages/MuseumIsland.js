import React from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';

class MuseumIsland extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  signOut() {
              document.cookie = ""
              console.log("Cookies: " + document.cookie)
              window.location.href = "/"
            }

  render() {
    return(
      <div>
        <div className="top-nav">
          <a href="/Homepage">Home</a>
          <a href="/Profile">Profile</a>
          <button onClick={this.signOut} className="signOut">Sign Out</button>
        </div>

        <div className="attraction-descr">
          <h1>Museum Island</h1>
          <br/>
          <p>
            {/*insert attraction info*/}
          </p>
          <br/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MuseumIsland />, document.getElementById('root'));

export default MuseumIsland;
