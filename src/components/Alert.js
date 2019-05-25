import React from 'react';
import './Alert.css';

class Alert extends React.Component {
    render() {
        const {fieldText, idGenerated, color, deleteAlert, clickDelete, index} = this.props;

        return (
            <div className={`alert_container ${color} ${deleteAlert === true ? 'hidden' : ''}`} id={index}>
                <div className="alert_container--text">
                    <p className="alert_text">{fieldText}</p>
                    <small className="alert_id">ID: {idGenerated}</small>
                </div>
                <button className="alert_btn" id={index} onClick={clickDelete}><i className="far fa-times-circle"></i></button>
            </div>
        );
    }
}

export default Alert;