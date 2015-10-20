import React, { Component, PropTypes } from 'react';
import gravatar from 'gravatar';

export default class ConfirmStep extends Component {

  static propTypes = {
    selectedCandidates: PropTypes.array,
    message: PropTypes.string,
    project: PropTypes.string,
    goToPrevStep: PropTypes.func.isRequired
  }

  render() {
    const candidates = this.props.selectedCandidates.map((cand, index) => {
      const gravatarUrl = gravatar.url(cand.email);
      console.log(gravatarUrl);
      return (
        <li key={`cand-${index}`}>
          <img src={gravatarUrl} /> {cand.fullname}
        </li>
      );
    });

    return (
      <div>
        <div className="container">
          <h1>Bekreft sending (4/4)</h1>
        </div>
          <div className="container">
          <p>
            Hurra din melding ble sendt!
            <br />
            Prosjekt: {this.props.project}
            <br />
            Melding: {this.props.message}
          </p>
          <ul>
            {candidates}
          </ul>
          <form>
            <button onClick={this.props.goToPrevStep}> Tilbake</button>
            <button className="btn  btn-lg btn-success">Send melding til valgte kandidater</button>
          </form>
        </div>
    </div>
      );
  }
}
