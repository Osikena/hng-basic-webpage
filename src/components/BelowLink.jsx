import 'bootstrap/dist/css/bootstrap.min.css'
import Slack from '../icons/Slack Logo.svg'
import GitHub from '../icons/GitHub Logo.svg'

function BelowLink() {
  return (
    <div className="container-fluid" id='BelowLink-container'>

      <div id='BelowLink-slack-div'>
        <img src={Slack} alt="Slack" width={24} height={24} id='BelowLink-slack' />
      </div>

      <div id='BelowLink-gitHub-div'>
        <img src={GitHub} alt="GitHub" width={24} height={24} id='BelowLink-gitHub' />
      </div>
      
    </div>
  )
}

export default BelowLink
