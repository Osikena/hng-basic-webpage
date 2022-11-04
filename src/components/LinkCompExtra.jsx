import 'bootstrap/dist/css/bootstrap.min.css'

function LinkCompExtra(props) {
  return (
    <a href={props.link} id={props.linkid} className="linkbtn">
      <p id='linktextmain'>{props.linktext}</p>
    </a>
  )
}

export default LinkCompExtra