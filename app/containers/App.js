import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    const cities = this.props.cities;
    return (
          <div>
            <h1>City is { cities[0].cityName }!</h1>
            <h2>Country is {cities[0].country}</h2>
          </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    cities: state.cityReducer.cities
  }
}

export default connect(mapStateToProps)(App)
