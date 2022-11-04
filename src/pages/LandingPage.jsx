import 'bootstrap/dist/css/bootstrap.min.css'
import '../pagescss/LandingPage.css'
import '../pagesresponsivecss/LandingPageResponsive.css'
import Footer from '../components/Footer'
import SwitchPage from './SwitchPage'

function LandingPage() {
  return (
    <div className="container-fluid" id='LandingPage-main-container'>
      
        <SwitchPage />
          
        <Footer />

    </div>
  )
}

export default LandingPage
