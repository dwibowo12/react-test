import React from 'react';
import { Link } from 'react-router-dom';


export function ModulesContent({logo, descTitle, descText, button, linkTo, isHaveLinkTo }) {
    const [show, setShow] = React.useState(false);


    function handleClick(){
        setShow(true);
        setTimeout(() => {
            setShow(false);
          }, 2000);
    }

    function ButtonModule(){
      
      if (!isHaveLinkTo) {
        return (
          <div className="Module-desc-button">
            <button className="Module-desc-button-content" onClick={handleClick}>
              {button} <span className="icon-chevron-right-open chevron-button" />
            </button>
          </div>
        );
      } else {
        return (
          <div className="Module-desc-button">
            <Link to={linkTo}>
              <button className="Module-desc-button-content">
                {button} <span className="icon-chevron-right-open chevron-button" />
              </button>
            </Link>
          </div>
            
        );
      }
      
    }



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
                <ButtonModule />
                <div className={show ? 'modal-desc' : 'modal-desc-hidden'}>
                    {button} menu currently not available.
                </div>
              </div>
            </div>
          </div>
          
    );


}