import React, { Component } from 'react'
import loading from '../loader1.gif'

export default class Spinner extends Component {
  render() {
    let { text} = this.props;
    return (
      <div className='text-center my-5'>
        <img src={loading} alt="loading"></img>
        <h4>{text}</h4>
      </div>
    )
  }
}
