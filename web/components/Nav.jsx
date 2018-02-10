import React, {Component} from 'react'
import {Link} from 'react-router'

export default class Nav extends Component {
  render() {
    return (
      <nav class="navbar navbar-inverse">
        <div class="container">
          {/*<!-- Brand and toggle get grouped for better mobile display -->*/}
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <Link to="/" class="navbar-brand">The App</Link>
          </div>
          {/*injecting here our Bar component*/}
          {this.props.children}
          {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          
          
           
          </div>
          {/*<!-- /.navbar-collapse -->*/}
        </div>
        {/*<!-- /.container-fluid -->*/}
      </nav>
    )
  }
}
