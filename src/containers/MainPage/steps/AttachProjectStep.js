import React, { Component, PropTypes } from 'react';

export default class AttachProjectStep extends Component {

  static propTypes = {
    handleProjectSelected: PropTypes.func.isRequired
  }

  render() {

    return (
      <form>
        <button onClick={(evt) => {evt.preventDefault(); this.props.handleProjectSelected();}}>Videre</button>
      </form>
      );
  }
}
