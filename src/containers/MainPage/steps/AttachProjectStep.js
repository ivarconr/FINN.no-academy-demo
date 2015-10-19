import React, { Component, PropTypes } from 'react';

export default class AttachProjectStep extends Component {

  static propTypes = {
    handleProjectSelected: PropTypes.func.isRequired
  }

  render() {

    return (
      <div>
        <div className="container">
          <h1>Velg Prosjekt (2/3)</h1>
        </div>
          <div className="container">
          <form>
            <button onClick={(evt) => {evt.preventDefault(); this.props.handleProjectSelected();}}>Videre</button>
          </form>
        </div>
    </div>
      );
  }
}
