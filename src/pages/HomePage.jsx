import 'bootstrap/dist/css/bootstrap.min.css'
import '../pagescss/LandingPage.css'
import '../pagesresponsivecss/LandingPageResponsive.css'
import TopArrangment from '../components/TopArrangment'
import LinkComponent from '../components/LinkComponent'
import BelowLink from '../components/BelowLink'

function HomePage() {
  return (
    <div className='container-fluid' id='HomePage-container'>
      
        <TopArrangment />

        <LinkComponent />

        <BelowLink />

    </div>
  )
}

export default HomePage
