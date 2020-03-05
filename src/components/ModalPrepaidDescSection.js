import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

export function ModalPrepaidDescSection({title, subtitle}){

    return (
        <div className="Modal-prepaid-desc-section">
            <div className="Modal-prepaid-desc-section-title">
                <h4><u>{title}</u> <FontAwesomeIcon className="Blue-dark-icon" icon={faCheckCircle} /></h4>                    
            </div>
            <div className="Modal-prepaid-desc-section-subtitle">
                <p className="Body-text2">{subtitle}</p>
            </div>
        </div>
    );
}