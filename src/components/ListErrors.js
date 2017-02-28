import React from 'react'

class ListErrors extends React.Component {
  render() {
    if (this.props.errors) {
      return (
        <ul className='error-messages'>
          {
            Object.keys(this.props.errors).map(key => {
              return (
                <li key={key}>{key} {this.props.errors[key]}</li>
              )
            })
          }
        </ul>
      )
    } else
      return null
  }
}

export default ListErrors