import 'bootstrap/dist/css/bootstrap.min.css'
import '../pagescss/LandingPage.css'
import LinkComp from '../components/LinkComp'
import Footer from '../components/Footer'
import BelowLink from '../components/BelowLink'
import TopArrangment from '../components/TopArrangment'

function LandingPage() {
  return (
    <div className="container-fluid" id='LandingPage-main-container'>
        
        <TopArrangment />

        <div className="container-fluid" id='LandingPage-link-container'>

            <LinkComp link="https://training.zuri.team/" linkid="btn__zuri" linktext="Zuri" />

            <LinkComp link="http://books.zuri.team" linkid="books" linktext="Books" />

            <LinkComp link="https://books.zuri.team/python-for-beginners?ref_id=Osikena" linkid="book__python" linktext="Python" />

            <LinkComp link="https://background.zuri.team" linkid="pitch" linktext="Pitch" />

            <LinkComp link="https://books.zuri.team/design-rules" linkid="book__design" linktext="Design Book" />

        </div>

        <BelowLink />

        <Footer />

    </div>
  )
}

export default LandingPage
