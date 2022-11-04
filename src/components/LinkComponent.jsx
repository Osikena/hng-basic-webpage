import 'bootstrap/dist/css/bootstrap.min.css'
import LinkComp from './LinkComp'
import LinkCompExtra from './LinkCompExtra'
import LinkCompRoute from './LinkCompExtra'

function LinkComponent() {
  return (
    <div className="container-fluid" id='LandingPage-link-container'>
      
        <LinkCompExtra link="https://training.zuri.team/" linkid="btn__zuri" linktext="Zuri Team" />

        <LinkComp link="http://books.zuri.team" linkid="books" linktext="Software Development Books for Newbies" 
        linksubtext="Get the best cooding and design books to begin your journey" />

        <LinkComp link="https://books.zuri.team/python-for-beginners?ref_id=Osikena" linkid="book__python" linktext="Python For Beginners" 
        linksubtext="Buy one and get a free beginners tutorial video" />

        <LinkComp link="https://background.zuri.team" linkid="pitch" linktext="DeviCheck" 
        linksubtext="We see you anywhere" />

        <LinkComp link="https://books.zuri.team/design-rules" linkid="book__design" linktext="Zuri Free Design Book" 
        linksubtext="Begin your journey with us taking the first step for you" />

        <LinkCompRoute link="/contact" linkid="contact" linktext="Contact Me" />

    </div>
  )
}

export default LinkComponent
