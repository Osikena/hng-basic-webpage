import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import ProfileImg from '../images/Profile Pic.svg'
import ProfileImgHover from '../images/Profile Pic Hover.svg'
import { Navbar, Nav, Container } from 'react-bootstrap'
import BackImage from '../icons/Share.svg'
import BackImageSmall from '../icons/Share Small.svg'

function TopArrangment() {

    const [hover, setHover] = useState(false)
    
  return (
    <div className="container-fluid" id='TopArrangment-container'>

        <Navbar collapseOnSelect expand='lg' id='bottom-navbar'>
            <Container id='cont'>
                <Navbar.Toggle data-bs-target='#bottom-navbar-navbarScroll' id='bottom-navbar-toggle' > 
                    <img src={BackImageSmall} alt="BackImageSmall" id='toggleimg' />
                </Navbar.Toggle>
                <Navbar.Collapse id='bottom-navbar-navbarScroll'>
                    <Nav className='ms-auto' id='TopArrangment-top-btn-container'>
                        <img src={BackImage} alt="BackImage" id='backimg' height={40} width={40} />
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
        <img src={hover? ProfileImgHover : ProfileImg} alt="ProfileImg" id='profile__img' height={88} width={88} 
            onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}/>

        <h5 id='twitter'>Osikena Twitter</h5>
        <h6 id='slack'>Osikena Slack</h6>

    </div>
  )
}

export default TopArrangment
