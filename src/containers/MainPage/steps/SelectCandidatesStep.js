import React, { Component, PropTypes } from 'react';

export default class SelectCandidatesStep extends Component {

  static propTypes = {
    candidates: PropTypes.array,
    selectedCandidates: PropTypes.array,
    selectCandidates: PropTypes.func.isRequired
  }

  handleCandidatesSelected = () => {
    this.props.selectCandidates(this.props.candidates.slice(0, 2));
  }

  renderCandidates() {
    return this.props.candidates.map((cand, index) => {
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

    return (
        <div>
          <div className="container">
            <h1>Velg Kandidater</h1>
          </div>
            <div className="container">
              <ul className="list-unstyled">
                {this.renderCandidates()}
              </ul>
              <section className="row">
                <button
                  className="btn btn-lg btn-success"
                  onClick={this.handleCandidatesSelected}>Kontakt valgte kandidater</button>
              </section>
          </div>
      </div>
    );
  }
}
