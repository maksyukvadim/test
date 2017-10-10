import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment } from '../actions/PageActions';
console.log(typeof increment);
class MainContainer extends Component {
    componentWillMount() {
        //this.props.asd();
console.log(typeof this.props.asd);

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
    (state) => ({card:state.cards,
        counter: state.counter}),
    (dispatch) => ({
        asd: (a) => dispatch(increment(a))
    })
)(MainContainer) ;
