import React, { Component, PropTypes } from 'react';

export default class AttachProjectStep extends Component {

  static propTypes = {
    project: PropTypes.string,
    projectSelected: PropTypes.func.isRequired,
    goToPrevStep: PropTypes.func.isRequired
  }

  handleProjectSelected = (evt) => {
    evt.preventDefault();
    const project = this.refs.prosjekt.value;
    this.props.projectSelected(project);
  }

  render() {
    return (
      <div>
        <div className="container">
          <h1>Velg Prosjekt (2/4)</h1>
        </div>
          <div className="container">
          <form>
            <select className="form-control" ref="prosjekt" defaultValue={this.props.project}>
              <option value="Prosjekt 1">Prosjekt 1</option>
              <option value="Prosjekt 2">Prosjekt 2</option>
              <option value="Prosjekt 3">Prosjekt 3</option>
              <option value="Prosjekt 4">Prosjekt 4</option>
              <option value="Prosjekt 5">Prosjekt 5</option>
            </select>
            <br />
            <button className="btn" onClick={this.props.goToPrevStep}>Forrige</button>
            <button className="btn btn-lg btn-success" onClick={this.handleProjectSelected}>Velg prosjekt</button>
          </form>
        </div>
    </div>
      );
  }
}
