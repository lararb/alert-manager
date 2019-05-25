import React from 'react';
import './Alert.css';

class Alert extends React.Component {
    render() {

        const {fieldText, idGenerated, color} = this.props;

        return (
            <div className={`alert_container ${color}`}>
              <p className="alert_text">{fieldText}</p>
              <small className="alert_id">{idGenerated}</small>
              <button className="alert_btn">X</button>
            </div>
        );
    }
}

export default Alert;