import React, { Component, PropTypes } from 'react';
import candidates from './candidates';
import * as candidateActions from './candidateActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import StepManager from './StepManager';


@connect(
  state => state,
  dispatch => bindActionCreators(candidateActions, dispatch)
)
export default class MainPage extends Component {

  static propTypes = {
    candidatesSelected: PropTypes.func.isRequired,
    candidateAdd: PropTypes.func.isRequired,
    candidateRemove: PropTypes.func.isRequired,
    candidateReducer: PropTypes.object.isRequired,
    projectSelected: PropTypes.func.isRequired,
    goToPrevStep: PropTypes.func.isRequired
  }

  render() {
    const styles = require('./MainPage.scss');
    return (
      <div className={styles.home}>
        <StepManager
          candidates={candidates}
          currentStep={this.props.candidateReducer.currentStep}
          project={this.props.candidateReducer.project}
          message={this.props.candidateReducer.message}
          selectedCandidates={this.props.candidateReducer.selectedCandidates}
          {...this.props}
          />
      </div>
    );
  }
}
