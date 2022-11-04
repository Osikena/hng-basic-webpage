import 'bootstrap/dist/css/bootstrap.min.css'

function LinkComp(props) {
  return (
    <a href={props.link} id={props.linkid} className="linkbtn">
      <p id='linktextmain'>{props.linktext}</p>
      <p id='linktextsub'>{props.linksubtext}</p>
    </a>
  )
}

export default LinkComp
