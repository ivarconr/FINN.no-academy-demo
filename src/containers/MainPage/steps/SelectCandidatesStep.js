import React, { Component, PropTypes } from 'react';
import CandidateItem from './CandidateItem';

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

  renderCandidates = () => {
    return this.props.candidates.map((cand, index) => {
      const checked = this.props.selectedCandidates.filter(selected => selected.fullname === cand.fullname).length > 0;
      return (
        <CandidateItem
          key={`cand-${index}`}
          checked={checked}
          candidate={cand}
          candidateAdd={this.props.candidateAdd}
          candidateRemove={this.props.candidateRemove}
        />
      );
    });
  }


  render() {
    return (
        <div>
          <div className="container">
            <h1>Velg Kandidater (1/4)</h1>
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
