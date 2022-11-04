import 'bootstrap/dist/css/bootstrap.min.css'
import '../pagesresponsivecss/LandingPageResponsive.css'
import HomePage from './HomePage'
import { Route, Routes } from 'react-router-dom'
import ContactPage from './ContactPage'

function SwitchPage() {
  return (
    <div className="container fluid" id='SwitchPage-container'>
    
        <Routes>

        <Route path='/' element={<HomePage />} />

          <Route path='hng-basic-webpage' element={<HomePage />} />
          
          <Route path='/contact' element={<ContactPage />} />

        </Routes>
        
    </div>
  )
}

export default SwitchPage
