import React from 'react';

class Alert extends React.Component {
    render() {

        const {fieldText, idGenerated} = this.props;

        return (
            <div className="alert_container">
              <p className="alert_text">{fieldText}</p>
              <small className="alert_id">{idGenerated}</small>
              <button className="alert_btn">X</button>
            </div>
        );
    }
}

export default Alert;