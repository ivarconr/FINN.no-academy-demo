import React, { Component, PropTypes } from 'react';
import gravatar from 'gravatar';

export default class ConfirmStep extends Component {

  static propTypes = {
    selectedCandidates: PropTypes.array,
  }

  renderCandidates() {
    return this.props.selectedCandidates.map(candidate => {
      const image = gravatar.url(candidate.email);

      return (
        <li>
          <img src={image} />
          <span>{candidate.fullname}</span>
        </li>
      );
    });
  }

  render() {

    const candidates = this.renderCandidates();

    return (
        <div className="container">
          <h1>Siste steg (4/4)</h1>
          <ul className="list-unstyled">
            {candidates}
          </ul>

      </div>
    );
  }
}
