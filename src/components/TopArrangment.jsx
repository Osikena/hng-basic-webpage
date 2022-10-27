import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import ProfileImg from '../icons/GitHub Logo.svg'
import ProfileImgHover from '../icons/Slack Logo.svg'
// import BackImage from '../icons/Slack Logo.svg'

function TopArrangment() {

    const [hover, setHover] = useState(false)

  return (
    <div className="container-fluid" id='TopArrangment-container'>
        
        {/* <div>
            <img src={BackImage} alt="ProfileImg" id='profile__img' height={88} width={88} />
        </div> */}

        <img src={hover? ProfileImgHover : ProfileImg} alt="ProfileImg" id='profile__img' height={88} width={88} 
            onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}/>

        <h5 id='twitter'>Osikena Twitter</h5>
        <h6 id='slack'>Osikena Slack</h6>

    </div>
  )
}

export default TopArrangment
