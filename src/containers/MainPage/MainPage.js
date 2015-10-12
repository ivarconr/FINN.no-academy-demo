import React, { Component, PropTypes } from 'react';
import candidates from './candidates';
import * as candidateActions from './candidateActions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


@connect(
  state => state,
  dispatch => bindActionCreators(candidateActions, dispatch)
)
export default class MainPage extends Component {

  static propTypes = {
    candidatesSelected: PropTypes.func.isRequired
  }

  handleCandidatesSelected = () => {
    this.props.candidatesSelected(candidates.slice(0, 2));
  }

  renderCandidates() {
    return candidates.map((cand) => {
      return (
        <li>
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
    const styles = require('./MainPage.scss');
    // require the logo image both from client and server
    return (
      <div className={styles.home}>
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
      </div>
    );
  }
}
