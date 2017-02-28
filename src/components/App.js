import React from 'react'
import { connect } from 'react-redux'

import Header from './Header'

const mapStateProps = state => ({
  appName: state.common.appName
})

class App extends React.Component {
  render() {
    return (
      <div>
        <Header appName={this.props.appName} />
        {this.props.children}
      </div>
    )
  }
}

App.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default connect(mapStateProps, () => ({}))(App)