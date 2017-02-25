import React from 'react';
import { connect } from 'react-redux';

const mapStateProps = state => ({
  appName : state.appName
})

class App extends React.Component{
  render(){
    return (
      <div>
      { this.props.appName }
      </div>
    )
  }
}

export default connect( mapStateProps, () => {} )(App);