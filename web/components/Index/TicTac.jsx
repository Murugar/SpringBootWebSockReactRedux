import React, {Component} from 'react'
import $ from 'jquery'

export default class TicTac extends Component {
  constructor(props) {
    super(props)
    this.state = { data: '' }
    this.ajax = this.ajax.bind(this)
  }

  ajax() {
    $.get(this.props.url).then(data => {
      console.log('data', data)
      this.setState({data})
    })
  }

  render() {
    return (
      <div class="col-sm-3">
        <div class="panel panel-warning">
        <div class="panel-heading">{this.props.title}</div>
        <div class="panel-body">
        <button onClick={this.ajax} type="button" class="btn btn-primary">click me</button>
        <br/>
        <br/>
        <div class="pre-scrollable max-height-600px text-primary">
          {this.state.data}
        </div>
        </div>
        </div>
      </div>
    )
  }
}
