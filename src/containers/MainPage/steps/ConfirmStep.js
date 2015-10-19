import React, { Component, PropTypes } from 'react';

export default class ConfirmStep extends Component {

  static propTypes = {
    handleProjectSelected: PropTypes.func.isRequired
  }

  render() {

    return (
      <div>
        <div className="container">
          <h1>Bekreft (3/3)</h1>
        </div>
          <div className="container">
          <form>
            <button onClick={(evt) => {evt.preventDefault(); this.props.handleConfirm();}}>Videre</button>
          </form>
        </div>
    </div>
      );
  }
}
