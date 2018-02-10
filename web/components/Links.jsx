import React, {Component} from 'react'
import {Link} from 'react-router'
import activeComponent from 'react-router-active-component'

let NavLink = activeComponent('li')

export default class Links extends Component {
  render() {
    return (
      <ul class="nav navbar-nav">
          <NavLink to="/" onlyActiveOnIndex>Home</NavLink>
         
      </ul>
    )
  }
}
