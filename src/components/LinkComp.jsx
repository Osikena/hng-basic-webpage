import 'bootstrap/dist/css/bootstrap.min.css'

function LinkComp(props) {
  return (
    // <div className="container-fluid" id='LinkComp-container'>
        <a href={props.link} id={props.linkid} className="linkbtn">
          <p id='linktextmain'>{props.linktext}</p>
          <p id='linktextsub'>{props.linksubtext}</p>
        </a>
    // </div>
    
  )
}

export default LinkComp
