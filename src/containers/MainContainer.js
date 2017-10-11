import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getExercises } from '../actions/PageActions';

class MainContainer extends Component {
    componentWillMount() {
      const data = {
        api: "exercises/get-exercises",
        clientKey: "8e28b8db-6395-4417-9df9-10dd0efb5ef9",
        paging:{
            limit:12,
            offset:0
        }
    }
        this.props.asd(data);
    }

  render() {
      console.log(this.props)
    return (
      <div className="App">
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect(
    (state) => ({card:state.main.cards,
        counter: state.main.counter}),
    (dispatch) => ({
        asd: (body) => dispatch(getExercises(body))
    })
)(MainContainer) ;
