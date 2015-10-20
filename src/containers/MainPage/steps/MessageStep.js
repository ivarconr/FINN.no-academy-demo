import React, { Component, PropTypes } from 'react';

export default class MessageStep extends Component {

  static propTypes = {
    message: PropTypes.string,
    selectedCandidates: PropTypes.array,
    messageWritten: PropTypes.func,
    goToPrevStep: PropTypes.func
  }

  handleSendMessage = (evt) => {
    evt.preventDefault();
  }

  handleChange = (evt) => {
    this.message = evt.target.value.trim();
  }

  handleSaveMessage = () => {
    this.props.messageWritten(this.message);
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
            <textarea cols="60" rows="5" onChange={this.handleChange} defaultValue={this.props.message} onBlur={this.handleSaveMessage}></textarea>
            <br />
            <button className="btn" onClick={this.props.goToPrevStep}>Forrige</button>
            <button className="btn  btn-lg btn-success" onClick={this.handleSendMessage}>send melding</button>
          </form>
        </div>
    </div>
      );
  }
}
