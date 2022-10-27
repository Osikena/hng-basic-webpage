import 'bootstrap/dist/css/bootstrap.min.css'
import Zuri from '../icons/Zuri Logo.svg'
import Ingressive from '../icons/Ingressive For Good Logo.svg'


function Footer() {
  return (
    <div className="row" id='Footer-row'>

        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4" id='Footer-row-col-1'>
            <img src={Zuri} alt="Zuri" />
        </div>

        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 text-center" id='Footer-row-col-2'>
            <h4 id='Footer-col-text'>HNG Internship 9 Frontend Task</h4>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4" id='Footer-row-col-3'>
            <img src={Ingressive} alt="Ingressive" />
        </div>

    </div>
  )
}

export default Footer
