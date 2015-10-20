import React, {Component, PropTypes} from 'react';
import * as constants from './candidateConstants';
import {
  SelectCandidatesStep,
  AttachProjectStep,
  MessageStep,
  ConfirmStep
} from './steps';

export default class StepManager extends Component {
  static propTypes = {
    currentStep: PropTypes.string.isRequired
  }

    render() {
      switch (this.props.currentStep) {
        case constants.steps.SELECT:
          return <SelectCandidatesStep {...this.props}/>;
        case constants.steps.ATTACH_PROJECT:
          return <AttachProjectStep {...this.props}/>;
        case constants.steps.MESSAGE:
          return <MessageStep {...this.props}/>;
        case constants.steps.CONFIRM:
          return <ConfirmStep {...this.props}/>;
        default:
          return null;
      }
    }
}
