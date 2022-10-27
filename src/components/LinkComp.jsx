import 'bootstrap/dist/css/bootstrap.min.css'

function LinkComp(props) {
  return (
    // <div className="container-fluid" id='LinkComp-container'>
        <a href={props.link} id={props.linkid} className="linkbtn">{props.linktext}</a>
    // </div>
    
  )
}

export default LinkComp
