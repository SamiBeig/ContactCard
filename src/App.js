import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';

class CreateAllCards extends Component {
  render() {
  return (
  
  <div><ContactCard name="Tom" mobileNumber='(646)-929-2049' workNumber='323-425-9491' email="tomford@gmail.com"/> 
  
  <ContactCard name="Nick" mobileNumber='(123)-456-7811' workNumber='N/A' email="NickWright@gmail.com"/> 
  
  <ContactCard name="Ross" mobileNumber='(198)-765-4311' workNumber='92901930491' email="RossRick@gmail.com"/> 

  </div>
  )
  }
  

};

//Contact card component
class ContactCard extends Component{
  render(){
    return <div> <p>Contact Card</p> <ul> <li>{this.props.name}</li> <li>{this.props.email}</li> <li>{this.props.mobileNumber}</li> <li>{this.props.workNumber}</li></ul></div>
  }
};

ContactCard.propTypes = {
  name: PropTypes.string.isRequired,
  mobileNumber: PropTypes.string.isRequired,
  workNumber: PropTypes.string,
  email: PropTypes.string.isRequired
}

//ReactDOM.render(<App/>);
//ReactDOM.render(<createTom />, document.getElementById('tom');
//ReactDOM.render(<createNick />, document.getElementById('nick'));
//ReactDOM.render(<createAllCards/>, document.getElementById("tom"))

export {CreateAllCards, ContactCard} ;
