import 'bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom'

function LinkCompRoute() {

  const navigate = useNavigate()

  return (
    <a href={navigate(props.link)} id={props.linkid} className="linkbtn">
      <p id='linktextmain'>{props.linktext}</p>
    </a>
  )
}

export default LinkCompRoute
