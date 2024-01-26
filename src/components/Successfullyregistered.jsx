import React, { Component } from 'react'

class Successfullyregistered extends Component {
    constructor(props) {
      super(props)
      props = this.props;
      this.state = {

      }
    }
  render() {
    return (
      <>
        <div className='srcontainer'>
            <p>You have Registered Successfully</p>
            <p><a href='#' onClick={this.props.switch}> Sign In</a></p>
        </div>
      </>
    )
  }
}

export default Successfullyregistered;