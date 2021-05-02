import React, { Component } from 'react';
import { Navbar, Nav} from 'react-bootstrap';
import Profile from './Profile';
import Slider from './Slider';

class App extends Component {

    constructor(props){
      super(props);
      this.state = {
        currentTab : 'profile'
      }
    }

    render() {
    return (
    <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">My GitHub Profile</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link eventKey={1} href="/#" onClick={() => this.setState({currentTab: 'slider'})}>Slider</Nav.Link>
          <Nav.Link eventKey={2} href="/#" onClick={() => this.setState({currentTab: 'profile'})}>Profile</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <div>
      { this.state.currentTab ==='slider' ? <Slider /> : false}
      { this.state.currentTab ==='profile' ? <Profile /> : false}
    </div>
    </div>
    );
  }
}

export default App;
