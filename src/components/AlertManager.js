import React from 'react';
import Alert from './Alert';
import './AlertManager.css';


class AlertManager extends React.Component {
    render() {
        const {arrAlert, disableBtn, color, clickAdd, clickDelete, textInput} = this.props;
        return (
            <React.Fragment>
                <section className="field_section">
                    <div className="field_section--container">
                        <h1 className="app_title">Alert manager</h1>
                        <div className="field_container">
                            <label htmlFor="field" className="field_label">Campo de formulario</label>
                            <input id="field" type="text" className="field" ref={textInput}/>
                            <button className={`field_btn ${disableBtn ? 'field_btn--disabled' : ''}`} onClick={clickAdd} disabled={disableBtn} >Add</button>
                        </div>
                    </div>
                </section>
                
                <ul className="alert_list">
                    {arrAlert.map((item, index) =>
                    <li className="alert_item" key={index}>
                        <Alert fieldText={item.fieldText} idGenerated={item.idGenerated} color={color} clickDelete={clickDelete} index={index}/>
                    </li>)}
                </ul>
            </React.Fragment>
        );
    }
}

export default AlertManager;