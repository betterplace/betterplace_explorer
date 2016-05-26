import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router'
import ReactDOM from 'react-dom'
import VolunteeringList from './VolunteeringList'

var Explorer = React.createClass({
  getInitialState() {
    return {
      records: []
    };
  },
  componentDidMount() {
    fetch('https://api.betterplace.org/de/api_v4/volunteering')
      .then(function(response) { return response.json() })
      .then(function(json) { this.setState({ records: json.data }) }.bind(this))
  },
  render: function() {
    return (<VolunteeringList records={this.state.records} />)
  }
});

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Explorer}/>
  </Router>
), document.getElementById('betterplace-explorer'))
