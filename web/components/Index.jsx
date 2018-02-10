import React, {Component} from 'react'
import TicTacToe from './Index/TicTacToe'
import WS from '../ws'

export default class Index extends Component {
  constructor(props) {
    super(props)

    this.state = {
      ws: new WS('/messaging'),
      config: {
        route: '/topic',
        callback: () => console.log('topic cb')
      },
      isSubscribed: false
    }

    this.toggle = this.toggle.bind(this)
    this.subscribe = this.subscribe.bind(this)
    this.disconnect = this.disconnect.bind(this)
  }

  toggle() {
    if (this.state.isSubscribed) {
      this.disconnect()
    } else {
      this.subscribe()
    }

    this.setState({ isSubscribed: !this.state.isSubscribed })
    window.stompClient = this.state.ws.stompClient
  }

  subscribe() {
    this.state.ws.subscribe(this.state.config)
  }

  disconnect() {
    this.state.ws.unsubscribeAll()
  }

  render() {
    return (
      <div class="container-fluid">
      <div class="panel panel-danger">
        <div className="panel-heading"><h3>Spring Boot React WebSocket</h3></div>
        <div className="panel-body">
        <br/>
        <button onClick={this.toggle} 
                type="button" 
                class="btn btn-success">
          {this.state.isSubscribed? 'disconnect' : 'connect and subscribe'}
        </button>
        <br/>
        <TicTacToe />
        </div>
        </div>
      </div>
    )
  }
}

