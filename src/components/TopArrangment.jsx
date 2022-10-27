import 'bootstrap/dist/css/bootstrap.min.css'
import ProfileImg from '../icons/GitHub Logo.svg'

function TopArrangment() {
  return (
    <div className="container-fluid" id='TopArrangment-container'>

        <img src={ProfileImg} alt="ProfileImg" id='profile__img' height={88} width={88}/>
        <h5 id='twitter'>Osikena Twitter</h5>
        <h6 id='slack' >Osikena Slack</h6>

    </div>
  )
}

export default TopArrangment
