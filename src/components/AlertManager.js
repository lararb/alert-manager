import React from 'react';
import Alert from './Alert';
import './AlertManager.css';


class AlertManager extends React.Component {
    render() {
        const {arrAlert, disableBtn, color, deleteAlert, clickAdd, clickDelete} = this.props;
        return (
            <React.Fragment>
                <section className="field_section">
                    <h1 className="title">Alert manager</h1>
                    <label htmlFor="field"></label>
                    <input id="field" type="text" className="field"/>
                    <button className="field_btn" onClick={clickAdd} disabled={disableBtn} >Add</button>
                </section>
                
                <ul className="alert_list">
                    {arrAlert.map((item, index) =>
                    <li className="alert_item" key={index}>
                        <Alert fieldText={item.fieldText} idGenerated={item.idGenerated} color={color} deleteAlert={deleteAlert} clickDelete={clickDelete} index={index}/>
                    </li>)}
                </ul>
            </React.Fragment>
        );
    }
}

export default AlertManager;