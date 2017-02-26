import React from 'react';

class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <div className="container">
          <h1 className="logo-font">
            {this.props.appName.toLowerCase()}
          </h1>
          <p>A place to share your knowledge.</p>
        </div>
      </div>
    )
  }
}

export default Banner;