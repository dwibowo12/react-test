import React from 'react';

export function ModulesContent({logo, descTitle, descText, button }) {

    
    
    return (
        <div className="Modules-content">
            <div className="Module-body">
              <div className="Module-image">
                <img className="Module-image-source" src={process.env.PUBLIC_URL + logo} />
              </div>
              <div className="Module-desc">
                <div className="Module-desc-title">
                  <h5>{descTitle}</h5>
                </div>
                <div className="Module-desc-text">
                  <div className="Body-text2">{descText}</div>
                </div>
                <div className="Module-desc-button">
                  <button className="Module-desc-button-content">
                    {button} <span className="icon-chevron-right-open chevron-button" />
                  </button>
                </div>
              </div>
            </div>
          </div>
    );
}