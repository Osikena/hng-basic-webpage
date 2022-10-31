import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import ProfileImg from '../images/Coprate Photo.jpg'
import ProfileImgHover from '../images/Profile Pic Hover.svg'
import { Navbar, Nav, Container } from 'react-bootstrap'
import BackImage from '../icons/Share.svg'
import BackImageSmall from '../icons/Share Small.svg'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function TopArrangment() {

    const [hover, setHover] = useState(false)

    const renderTooltip = (props) => (
        <Tooltip id="image-tooltip" {...props}>Share Link</Tooltip>
    );
    
  return (
    <div className="container-fluid" id='TopArrangment-container'>

        <Navbar collapseOnSelect expand='lg' id='bottom-navbar'>

            <Container id='cont'>

                <Navbar.Toggle data-bs-target='#bottom-navbar-navbarScroll' id='bottom-navbar-toggle'> 
                    <img src={BackImageSmall} alt="BackImageSmall" id='toggleimg' height={40} width={40} />
                </Navbar.Toggle>

                <Navbar.Collapse id='bottom-navbar-navbarScroll'>

                    <Nav id='TopArrangment-top-btn-container'>
                        <OverlayTrigger placement="left" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
                            <img src={BackImage} alt="BackImage" id='backimg' height={40} width={40} />
                        </OverlayTrigger>
                    </Nav>

                </Navbar.Collapse>

            </Container>
            
        </Navbar>
        
        <img src={hover? ProfileImgHover : ProfileImg} alt="ProfileImg" id='profile__img' height={88} width={88} 
            onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} />

        <h5 id='twitter'>@abdulosikena</h5>
        <h6 id='slack'>Osikena</h6>

    </div>
  )
}

export default TopArrangment
