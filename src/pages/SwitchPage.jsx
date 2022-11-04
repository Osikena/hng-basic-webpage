import 'bootstrap/dist/css/bootstrap.min.css'
import '../pagesresponsivecss/LandingPageResponsive.css'
import TopArrangment from '../components/TopArrangment'
import LinkComponent from '../components/LinkComponent'
import BelowLink from '../components/BelowLink'
import HomePage from './HomePage'
import { Route, Routes } from 'react-router-dom'
import ContactPage from './ContactPage'

function SwitchPage() {
  return (
    <div className="container-fluid" id='SwitchPage-container'>
      
      {/* <HomePage /> */}
      <ContactPage />
        {/* <Routes> */}

          {/* <Route path='/' element={<HomePage />} /> */}

          {/* <ContactPage /> */}

          {/* <HomePage /> */}

          {/* <Route path='/contact' element={<ContactPage />} /> */}

        {/* </Routes> */}

    </div>
  )
}

export default SwitchPage
