import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class MyNavLink extends Component {
  render() {
    return (
      <NavLink activeClassName="router-active" className="nav-link" {...this.props} />
    )
  }
}

// MyNavLink用法：<MyNavLink to="/home">Home</MyNavLink>
