import React, { Component, PropTypes } from 'react';

export default class ConfirmStep extends Component {

  static propTypes = {
    handleProjectSelected: PropTypes.func.isRequired
  }

  render() {

    return (
      <div>
        <div className="container">
          <h1>Bekreft (4/4)</h1>
        </div>
          <div className="container">
          <p>Hurra din melding ble sendt!</p>
        </div>
    </div>
      );
  }
}
