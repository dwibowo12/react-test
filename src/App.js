import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="Content-wrapper">
      <div className="Main-content">
        <div className="Header-content">
          <div className="Header-title">
            <h1>Transportation Options</h1>
          </div>
          <div className="Header-desc">
            <div className="Body-text1">
              We're comitted to lowering our carbon emmisions. You can help us in our
              effort by choosing greener ways to get to and from the Airport, and by using our <a className="Header-link" href="#">Carbon Calculator</a> to learn more about the carbon footprint of your trip.
            </div>
          </div>
        </div>
        <div className="Card-content">
            <div className="Card-link">
              <div className="Card-link-title">
                <h2>Find an Eco-friendly Route!</h2>
              </div>
              <div className="Card-link-desc">
                <div className="Body-text2">
                  For every 100 people who take public transportation to or from the airport,
                  our collective carbon footprint drops by about 1,000kg.
                </div>
                <br/>
                <div className="Body-text2">
                  Let us help you plan the most eco-friendly route for your trip!
                </div>
                <br />
                <div className="Body-text3">
                  <div className="Card-link-linktext">Get Started Now <span className="icon-right-circled right-card-link"/></div>
                </div>
              </div>
            </div>
            <div className="Card-normal">
              <div className="Card-normal-image">
                <img className="Card-image-source" src={process.env.PUBLIC_URL + '/loganexpress2.jpg'} />
              </div>
              <div className="Card-normal-desc">
                <div className="Card-normal-title">
                Logan Express
                </div>
                <div className="Card-normal-subtitle">
                Enjoy a comfortable and convenient ride to and from the airport with Logan Express bus service.
                </div>
                <div className="Card-normal-text">
                  <div className="Card-normal-text-content"><span className="icon-dollar card-normal-desc-icon"/>Free, $7 Parking</div>
                  <div className="Card-normal-text-content"><span className="icon-clock card-normal-desc-icon"/>30 - 45 mins</div>
                </div>
                <div className="Card-normal-bar">    
                  <div className="Bar-container">
                    <div className="Bar" style={{width: "65%"}}></div>
                    <span className="icon-leaf bar-icon" />                       
                  </div>
                </div>
              </div>
              <div className="Card-normal-footer">
                <div className="Body-text3">
                  Map Your Trip with TransitApp <span className="icon-chevron-right-open chevron-card-footer" />
                </div>
              </div>
            </div>
            <div className="Card-normal">
              <div className="Card-normal-image">
                <img className="Card-image-source" src={process.env.PUBLIC_URL + '/mbtabus.jpg'} />
              </div>
              <div className="Card-normal-desc">
                <div className="Card-normal-title">
                MBTA Bus
                </div>
                <div className="Card-normal-subtitle">
                Enjoy a comfortable and convenient ride to and from the airport with Logan Express bus service.
                </div>
                <div className="Card-normal-text">
                  <div className="Card-normal-text-content"><span className="icon-dollar card-normal-desc-icon"/>Free, $7 Parking</div>
                  <div className="Card-normal-text-content"><span className="icon-clock card-normal-desc-icon"/>30 - 45 mins</div>
                </div>
                <div className="Card-normal-bar">    
                  <div className="Bar-container">
                    <div className="Bar"></div>
                    <span className="icon-leaf bar-icon" />                       
                  </div>
                </div>
              </div>
              <div className="Card-normal-footer">
                <div className="Body-text3">
                  Map Your Trip with TransitApp <span className="icon-chevron-right-open chevron-card-footer" />
                </div>
              </div>
            </div>
            <div className="Card-normal">
              <div className="Card-normal-image">
                <img className="Card-image-source" src={process.env.PUBLIC_URL + '/mbtatrain.jpg'} />
              </div>
              <div className="Card-normal-desc">
                <div className="Card-normal-title">
                MBTA T Train
                </div>
                <div className="Card-normal-subtitle">
                The MBTA is the most economical and environmentally friendly way to get Logan.
                </div>
                <div className="Card-normal-text">
                  <div className="Card-normal-text-content"><span className="icon-dollar card-normal-desc-icon"/>Free, $7 Parking</div>
                  <div className="Card-normal-text-content"><span className="icon-clock card-normal-desc-icon"/>30 - 45 mins</div>
                </div>
                <div className="Card-normal-bar">    
                  <div className="Bar-container">
                    <div className="Bar"></div>
                    <span className="icon-leaf bar-icon" />
                  </div>
                </div>
              </div>
              <div className="Card-normal-footer">
                <div className="Body-text3">
                  Map Your Trip with TransitApp <span className="icon-chevron-right-open chevron-card-footer" />
                </div>
              </div>
            </div>
            <div className="Card-normal">
              <div className="Card-normal-image">
                <img className="Card-image-source" src={process.env.PUBLIC_URL + '/rail.jpg'} />
              </div>
              <div className="Card-normal-desc">
                <div className="Card-normal-title">
                Rail
                </div>
                <div className="Card-normal-subtitle">
                Enjoy a comfortable and convenient ride to and from airport with Logan Express bus service.
                </div>
                <div className="Card-normal-text">
                  <div className="Card-normal-text-content"><span className="icon-dollar card-normal-desc-icon"/>Free, $7 Parking</div>
                  <div className="Card-normal-text-content"><span className="icon-clock card-normal-desc-icon"/>30 - 45 mins</div>
                </div>
                <div className="Card-normal-bar">    
                  <div className="Bar-container">
                    <div className="Bar"></div>
                    <span className="icon-leaf bar-icon" />                       
                  </div>
                </div>
              </div>
              <div className="Card-normal-footer">
                <div className="Body-text3">
                  Map Your Trip with TransitApp <span className="icon-chevron-right-open chevron-card-footer" />
                </div>
              </div>
            </div>
            <div className="Card-normal">
              <div className="Card-normal-image">
                <img className="Card-image-source" src={process.env.PUBLIC_URL + '/loganexpress2.jpg'} />
              </div>
              <div className="Card-normal-desc">
                <div className="Card-normal-title">
                Logan Express
                </div>
                <div className="Card-normal-subtitle">
                Enjoy a comfortable and convenient ride to and from the airport with Logan Express bus service.
                </div>
                <div className="Card-normal-text">
                  <div className="Card-normal-text-content"><span className="icon-dollar card-normal-desc-icon"/>Free, $7 Parking</div>
                  <div className="Card-normal-text-content"><span className="icon-clock card-normal-desc-icon"/>30 - 45 mins</div>
                </div>
                <div className="Card-normal-bar">    
                  <div className="Bar-container">
                    <div className="Bar"></div>
                    <span className="icon-leaf bar-icon" />                       
                  </div>
                </div>
              </div>
              <div className="Card-normal-footer">
                <div className="Body-text3">
                  Map Your Trip with TransitApp <span className="icon-chevron-right-open chevron-card-footer" />
                </div>
              </div>
            </div>
          </div>
          <div className="Modules-content">
            <div className="Module-body">
              <div className="Module-image">
                <img className="Module-image-source" src={process.env.PUBLIC_URL + '/loganexpress2.jpg'} />
              </div>
              <div className="Module-desc">
                <div className="Module-desc-title">
                  <h5>Free Shuttle Services</h5>
                </div>
                <div className="Module-desc-text">
                  <div className="Body-text2">Massport provides free shuttle bus service between airline terminals, the Rental Car Center, and Airport Station on the MBTA Blueline</div>
                </div>
                <div className="Module-desc-button">
                  <button className="Module-desc-button-content">
                    Purchase Tickets <span className="icon-chevron-right-open chevron-button" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="Modules-content">
            <div className="Module-body">
              <div className="Module-image">
                <img className="Module-image-source" src={process.env.PUBLIC_URL + '/parkinglot.jpg'} />
              </div>
              <div className="Module-desc">
                <div className="Module-desc-title">
                  <h5>Pre-paid Parking</h5>
                </div>
                <div className="Module-desc-text">
                  <div className="Body-text2">Book your parking spot here and save time on your travel day! Your arrival and departure time may be an estimate.</div>
                </div>
                <div className="Module-desc-button">
                  <button className="Module-desc-button-content">
                    Reserve Now <span className="icon-chevron-right-open chevron-button" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        
      </div>
    </div>
  );
}

export default App;
