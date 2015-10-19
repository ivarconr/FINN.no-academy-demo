import React, { Component, PropTypes } from 'react';

export default class MessageStep extends Component {

  static propTypes = {
    selectedCandidates: PropTypes.array,
    goToPrevStep: PropTypes.func
  }

  handleSendMessage = (evt) => {
    evt.preventDefault();

  }

  render() {

    return (
      <div>
        <div className="container">
          <h1>Velg Prosjekt (3/4)</h1>
        </div>
          <div className="container">
          <form>
            <p>Skriv en melding til kandidatene</p>
            <textarea cols="60" rows="5"></textarea>
            <br />
            <button className="btn" onClick={this.props.goToPrevStep}>Forrige</button>
            <button className="btn  btn-lg btn-success" onClick={this.handleSendMessage}>send melding</button>
          </form>
        </div>
    </div>
      );
  }
}
