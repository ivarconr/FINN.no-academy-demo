import React, { Component, PropTypes } from 'react';

export default class CandidateItem extends Component {
  static propTypes = {
    candidate: PropTypes.object,
    checked: PropTypes.bool,
    candidateAdd: PropTypes.func.isRequired,
    candidateRemove: PropTypes.func.isRequired
  }

  handleSelectCandidate(cand) {
    if (this.props.checked) {
      this.props.candidateRemove(cand);
    } else {
      this.props.candidateAdd(cand);
    }
  }

  render() {
    const cand = this.props.candidate;

    return (
      <li >
        <div className="row">
          <div className="col-xs-8">
            <p>{cand.fullname}</p>
          </div>
          <div className="col-xs-4">
            <div className="checkbox">
              <label>
                <input type="checkbox" checked={this.props.checked} onChange={this.handleSelectCandidate.bind(this, cand)} /> velg
              </label>
            </div>
          </div>
        </div>
      </li>
    );
  }
}
