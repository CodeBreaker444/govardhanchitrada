import React, { Component } from 'react';
import Center from 'react-center'
import Button from 'react-bootstrap/Button'

class Footer extends Component {
  download() {

    const response = {
            file: 'https://www.dropbox.com/s/51f9u5731m18qqy/GOVARDHAN_RESUME.pdf?dl=1',
          };
        return window.location.href = response.file;

  }
  render() {
    return (
      <footer>
      <Center>
      <Button onClick={this.download}  className="but" variant="outline-danger" >RESUME</Button>
      </Center>
      </footer>
    );
  }
}

export default Footer;
