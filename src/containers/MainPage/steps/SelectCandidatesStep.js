import React, { Component, PropTypes } from 'react';

export default class SelectCandidatesStep extends Component {

  static propTypes = {
    candidates: PropTypes.array,
    selectedCandidates: PropTypes.array,
    candidatesSelected: PropTypes.func.isRequired,
    candidateAdd: PropTypes.func.isRequired,
    candidateRemove: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props);
    this.state = {selected: this.props.selectedCandidates || []};
  }

  isSelected = (cand) => {
    return this.props.selectedCandidates.filter(selected => selected.fullname === cand.fullname).length > 0;
  }

  handleSelectCandidate(cand) {
    if (this.isSelected(cand)) {
      this.props.candidateRemove(cand);
    } else {
      this.props.candidateAdd(cand);
    }
  }

  renderCandidates = () => {
    return this.props.candidates.map((cand, index) => {
      const checked = this.isSelected(cand);

      return (
        <li key={`cand-${index}`}>
          <div className="row">
            <div className="col-xs-8">
              <p>{cand.fullname}</p>
            </div>
            <div className="col-xs-4">
              <div className="checkbox">
                <label>
                  <input type="checkbox" checked={checked} onChange={this.handleSelectCandidate.bind(this, cand)} /> velg
                </label>
              </div>
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
            <h1>Velg Kandidater (1/3)</h1>
          </div>
            <div className="container">
              <ul className="list-unstyled">
                {this.renderCandidates.bind(this)()}
              </ul>
              <section className="row">
                <button
                  className="btn btn-lg btn-success"
                  onClick={this.props.candidatesSelected}>Kontakt valgte kandidater</button>
              </section>
          </div>
      </div>
    );
  }
}
