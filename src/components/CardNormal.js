import React from 'react';

export function CardNormal({ title, subtitle, logo, price, duration, barmeter, footerText }) {
    
  var className = 'Bar';
  if(barmeter <= 15){
      className = 'Bar b15';
  } else if(barmeter <= 30){
      className = 'Bar b30';
  } else if(barmeter <= 50) {
      className = 'Bar b50';
  } else if(barmeter <= 65) {
    className = 'Bar b65';
  } else if(barmeter <= 85) {
    className = 'Bar b85';
  } else {
    className = 'Bar b100';
  }

  var leafClass = '';
    if(barmeter <= 15){
        leafClass = 'b15';
    } else if(barmeter <= 30){
        leafClass = 'b30';
    } else if(barmeter <= 50) {
        leafClass = 'b50';
    } else if(barmeter <= 65) {
        leafClass = 'b65';
    } else if(barmeter <= 85) {
        leafClass = 'b85';
    } else {
        leafClass = 'b100';
    }

    const [outlined, setOutlined] = React.useState(false);
    const [showModal, setShowModal] = React.useState(false);



    function handleOpenModal(){
        setShowModal(true);
        setOutlined(true);
        window.addEventListener('keydown', onKeyPressed);
    }

    function onKeyPressed(e){
        if(e.keyCode === 27){
            setShowModal(false);
            setOutlined(false);
            window.removeEventListener('keydown', onKeyPressed);
        }
        
    }

    function handleCloseModal(){
        setShowModal(false);
        setOutlined(false);
        window.removeEventListener('keydown', onKeyPressed);
    }

  return (
    <div>
        <div className={outlined ? 'Card-normal outlined' : 'Card-normal'} onClick={handleOpenModal}>
            <div className="Card-normal-image">
                <img className="Card-image-source" src={process.env.PUBLIC_URL + logo } />
            </div>
            <div className="Card-normal-desc">
                <div className="Card-normal-title">{title}</div>
                <div className="Card-normal-subtitle">{subtitle}</div>
                <div className="Card-normal-text">
                    <div className="Card-normal-text-content"><span className="icon-dollar card-normal-desc-icon"/>{price}</div>
                    <div className="Card-normal-text-content"><span className="icon-clock card-normal-desc-icon"/>{duration}</div>
                </div>
                <div className="Card-normal-bar">    
                    <div className="Bar-container">
                        <div className={className} style={{width: `${barmeter}%`}}></div>
                        <span className={"tooltip icon-leaf bar-icon " + leafClass} >
                            <span className="tooltiptext">{title} is the greenest option for travelling to and from the airport!</span>
                        </span>    
                    </div>
                </div>
            </div>
            <div className="Card-normal-footer" onClick={handleOpenModal}>
                <div className="Body-text3">
                    {footerText} <span className="icon-chevron-right-open chevron-card-footer" />
                </div>
            </div>
        </div>
        <div id="myModal" className={showModal ? 'modal-showed' : 'modal-closed'} >
            <div className="modal-content" >
                <span className="close" onClick={handleCloseModal}>&times;</span>
                <div className="Modal-image-container">
                    <img className="Card-image-source" src={process.env.PUBLIC_URL + logo } />
                </div>
                <div className="Modal-desc-text">
                    <h3>{title}</h3>&nbsp;&nbsp;
                    <div className="modal-text-content Body-text3">
                        <div className="modal-text-content-price">
                            <span className="icon-dollar card-normal-desc-icon"/>{price} &nbsp;&nbsp;&nbsp;
                        </div>
                        <div className="modal-text-content-duration">
                            <span className="icon-clock card-normal-desc-icon"/>{duration}
                        </div>
                    </div>
                    <div className="modal-showed Body-text2">{subtitle}</div>
                </div>
            </div>
        </div>
    </div>
  );
}