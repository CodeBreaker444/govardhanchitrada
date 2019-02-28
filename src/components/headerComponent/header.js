import React, { Component } from 'react'
import Center from 'react-center'
import github from '../../Assets/images/g.png'
import facebook from '../../Assets/images/f.png'
import google from '../../Assets/images/p.png'

class Header extends Component {
  render() {
    return (
      <header>
      <Center>

      <div className="name" data-text="GOVARDHAN CHITRADA" >
      GOVARDHAN CHITRADA
      </div>
      </Center>
      <div className="certification">
      <a href="https://aspen.eccouncil.org/VerifyBadge?type=certification&a=gKkUAMYPYHgImtCVy44ASiOsvA4SzO2OVNv%2Fl+wxYTA%3D&fbclid=IwAR3H3_zaHg8o-2BUVQftjaGmks9DHCf_2KNcxpQWCBCRZjZT5eZRRh6n2qM" rel="noopener noreferrer" target="_blank">(Certified Ethical Hacker)</a>
      </div>
      <Center>
      <nav>
      <ul>
      <li className="first">
      <a href="https://github.com/codebreaker444" rel="noopener noreferrer" target="_blank"><img src={github} className="nav-img" alt="govardhanchitrada govardhan" />Github</a>
      </li>
      <li>
      <a href="https://play.google.com/store/apps/dev?id=8331274631553271784" rel="noopener noreferrer" target="_blank"><img src={google} alt="govardhanchitrada govardhan" className="nav-img"/>Googleplay</a>
      </li>
      <li className="last">
      <a href="https://www.facebook.com/cod3br3ak3r" rel="noopener noreferrer" target="_blank"><img src={facebook} alt="govardhanchitrada govardhan" className="nav-img"/>Facebook</a>
      </li>
      </ul>
      </nav>
      </Center>

      </header>
    );
  }
}

export default Header;
