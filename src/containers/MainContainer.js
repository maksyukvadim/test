import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getExercises } from '../actions/PageActions';
import Card from '../components/Card';
import { filterBodyZone } from '../utils/';

class MainContainer extends Component {
    componentWillMount() {
        this.props.getExercises(12, 0);
    }

  render() {
      const { listEercises } = this.props;
    return (
      <div className="mainContainer">
          {filterBodyZone(listEercises).map(item => <Card key={item.fileName} {...item} />)}
      </div>
    );
  }
}

export default connect(
    (state) => ({listEercises:state.main.listEercises}),
    (dispatch) => ({
        getExercises: (body) => dispatch(getExercises(body))
    })
)(MainContainer) ;
