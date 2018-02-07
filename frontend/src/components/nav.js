import React from "react"
import { Link } from "react-router-dom"
import Login from "./formadmin/login"
import Categories from "./formuser/categories/categories"
import telogo from "./formuser/categories/telogo.png"

export default class Nav extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: true
    }
  }

  toggleHiddenlogin = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  getAdminbuttontext = () => {
    if (this.state.isHidden) {
      return "admin"
    } else {
      return "exit"
    }
  }

  render() {
    return (
      <div>
        {/* <button> <Link to="/formuser"> Formuser </Link></button> */}
        <button className="adminbutton" onClick={this.toggleHiddenlogin}> {this.getAdminbuttontext()} </button>
        {!this.state.isHidden && <Login onLogin={this.toggleHiddenlogin} />}
      </div>
    )
  }
}
