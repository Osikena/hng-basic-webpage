import 'bootstrap/dist/css/bootstrap.min.css'
import '../pagescss/LandingPage.css'
import '../pagesresponsivecss/LandingPageResponsive.css'
import Footer from '../components/Footer'
import BelowLink from '../components/BelowLink'
import TopArrangment from '../components/TopArrangment'
import LinkComponent from '../components/LinkComponent'

function LandingPage() {
  return (
    <div className="container-fluid" id='LandingPage-main-container'>
        
        <TopArrangment />

        <LinkComponent />
        
        <BelowLink />

        <Footer />

    </div>
  )
}

export default LandingPage
