import React from 'react';
import {CardNormal} from './CardNormal';
import {ModulesContent} from './ModulesContent';
import '../App.css';


export function Home(){

    const cardNormalData = [
        {
          title: "Logan Express",
          subtitle: "Enjoy a comfortable and convenient ride to and from the airport with Logan Express bus service.",
          logo: "/loganexpress2.jpg",
          price: "Free, $7 Parking",
          duration: "30 - 45 mins",
          barmeter: 96,
          footerText: "Map Your Trip with TransitApp",
        },
        {
          title: "MBTA Bus",
          subtitle: "Enjoy a comfortable and convenient ride to and from the airport with Logan Express bus service.",
          logo: "/mbtabus.jpg",
          price: "Free, $7 Parking",
          duration: "30 - 45 mins",
          barmeter: 85,
          footerText: "Map Your Trip with TransitApp",
        },
        {
          title: "MBTA T Train",
          subtitle: "The MBTA is the most economical and environmentally friendly way to get Logan.",
          logo: "/mbtatrain.jpg",
          price: "Free, $7 Parking",
          duration: "30 - 45 mins",
          barmeter: 65,
          footerText: "Map Your Trip with TransitApp",
        },
        {
          title: "Rail",
          subtitle: "Enjoy a comfortable and convenient ride to and from airport with Logan Express bus service.",
          logo: "/rail.jpg",
          price: "Free, $7 Parking",
          duration: "30 - 45 mins",
          barmeter: 60,
          footerText: "Purchase Tickets",
        },
        {
          title: "Water Ferry",
          subtitle: "Enjoy a comfortable and convenient ride to and from airport with Logan Express bus service.",
          logo: "/rail.jpg",
          price: "Free, $7 Parking",
          duration: "30 - 45 mins",
          barmeter: 50,
          footerText: "Purchase Tickets",
        },
        {
          title: "Water Taxi",
          subtitle: "Enjoy a comfortable and convenient ride to and from airport with Logan Express bus service.",
          logo: "/rail.jpg",
          price: "Free, $7 Parking",
          duration: "30 - 45 mins",
          barmeter: 40,
          footerText: "Purchase Tickets",
        },
        {
          title: "Rideshare / TNC",
          subtitle: "Enjoy a comfortable and convenient ride to and from airport with Logan Express bus service.",
          logo: "/rail.jpg",
          price: "Free, $7 Parking",
          duration: "30 - 45 mins",
          barmeter: 30,
          footerText: "Passenger Advisory",
        },
        {
          title: "Car",
          subtitle: "Enjoy a comfortable and convenient ride to and from airport with Logan Express bus service.",
          logo: "/rail.jpg",
          price: "Free, $7 Parking",
          duration: "30 - 45 mins",
          barmeter: 12,
          footerText: "Save Time, Reserve Parking",
        }
      
      ]
      
      const modulesContentData = [
        {
          logo: "/loganexpress2.jpg",
          descTitle: "Free Shuttle Services",
          descText: "Massport provides free shuttle bus service between airline terminals, the Rental Car Center, and Airport Station on the MBTA Blueline",
          button: "Purchase Tickets",
          linkTo: "",
          isHaveLinkTo: false
        },
        {
          logo: "/parkinglot.jpg",
          descTitle: "Pre-paid Parking",
          descText: "Book your parking spot here and save time on your travel day! Your arrival and departure time may be an estimate.",
          button: "Reserve Now",
          linkTo: "/reserve",
          isHaveLinkTo: true
        },
      ]
      
      const ref = React.createRef();
      
      
      function handleScrollToElement(event) {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
        
      const [showModal, setShowModal] = React.useState(false);
      
      function handleShowModal() {
        setShowModal(true);
        window.addEventListener('keydown', onKeyPressed);
      }
      
      function onKeyPressed(e){
        if(e.keyCode === 27){
          setShowModal(false);
          window.removeEventListener('keydown', onKeyPressed);
        }
      }
      
      function handleCloseModal(){
        setShowModal(false);
        window.removeEventListener('keydown', onKeyPressed);
      }
      

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
              effort by choosing greener ways to get to and from the Airport, and by using our <a className="Header-link" href="#" onClick={handleShowModal}>Carbon Calculator</a> to learn more about the carbon footprint of your trip.
            </div>
          </div>
        </div>
        <div className="Card-content">
            <div className="Card-link" onClick={handleScrollToElement}>
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
                <div className="Card-link-bar">
                    <div className="Link-bar-container">
                        <div className="Link-bar" style={{width: "70%"}}></div>
                        <span className="icon-leaf link-bar-icon"></span>    
                    </div>
                </div>
            </div>
            {cardNormalData.map(card => <CardNormal {...card} />)}
            
            
          </div>
          <div ref={ref} className="Modules-container">
            {modulesContentData.map(module => <ModulesContent {...module} />)}
          </div>
      </div>
        <div id="myModal" className={showModal ? 'modal-showed' : 'modal-closed'}>
            <div className="modal-content">
                <span className="close" onClick={handleCloseModal}>&times;</span>
                <p className="Body-text3">
                  We're comitted to lowering our carbon emmisions. You can help us in our
                  effort by choosing greener ways to get to and from the Airport, and by using our 
                  Carbon Calculator to learn more about the carbon footprint of your trip.
                </p>
            </div>
        </div>

    </div>
    );
}

export default Home;

