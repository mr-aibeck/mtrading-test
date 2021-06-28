import React from "react"
import Link from '../../components/Link'
import { useHistory, withRouter } from "react-router-dom"
import checkIcon from "../../images/check.png"
import "./index.sass"

function SuccessPage({ location }) {
  let history = useHistory()

  const handleClick = () => {
    history.push({
      pathname: "/",
    })
  }

  return (
    <div className="success">
      <div className="success__icon">
        <img src={checkIcon} alt="Success" />
      </div>

      <div className="success__title">Success</div>

      <div className="success__details">
        You have successfully deposited
        <span className="success__amount">{location?.state?.amount || 0} USD</span>
        to account
        <Link href="#">6373717</Link>
      </div>

      <button className="button button_primary success__button" onClick={handleClick}>LAUNCH WEBTRADER</button>
    </div>
  )
}

export default withRouter(SuccessPage)
