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
    candidateReducer: PropTypes.object.isRequired,
    projectSelected: PropTypes.func.isRequired,
  }

  handleCandidatesSelected = () => {
    this.props.candidatesSelected(candidates.slice(0, 2));
  }

  handleProjectSelected = (project) => {
    this.props.projectSelected(project);
  }

  renderCandidates() {
    return candidates.map((cand, index) => {
      return (
        <li key={`cand-${index}`}>
          <div className="row">
            <div className="col-xs-8">
              <p>{cand.fullname}</p>
            </div>
            <div className="col-xs-4">
              <button className="btn btn-default">Select</button>
            </div>
          </div>
        </li>
      );
    });
  }


  render() {
    const styles = require('./MainPage.scss');
    return (
      <div className={styles.home}>
        <StepManager
          candidates={candidates}
          currentStep={this.props.candidateReducer.currentStep}
          selectCandidates={this.handleCandidatesSelected}
          handleProjectSelected={this.handleProjectSelected}
          />
      </div>
    );
  }
}
