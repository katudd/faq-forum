import React from "react"
import CategoryButton from "./categorybutton"
import Formuser from "../formuser"
import telogo from "./telogo.png"
import Nav from "../../nav"

const categories = [
  "OP-1",
  "pocket operator",
  "OD-11",
  "checkout and shipping",
  "other"
]

export default class Categories extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isHidden: true
    }
  }

  toggleHiddenbox = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
    this.setState({
      statusMessage: ""
    })
  }

  getQuestionStatus = status => {
    this.setState({
      statusMessage: status
    })
    setTimeout(() => {
      this.setState({
        statusMessage: ""
      })
    }, 2000)
  }

  // askQuesetionbuttontext

  askQuesetionbuttontext = () => {
    if (this.state.isHidden) {
      return "ask us a question"
    } else {
      return "close"
    }
  }

  render() {
    return (
      <div>
        <Nav />
        <div className="headertext">
          <img src={telogo} alt="TELOGO" width="30%" />
          <h1 id="nomargin"> frequently asked questions</h1>
          <h2 id="notopmargin">choose your category</h2>
        </div>
        <div className="buttoncategorys">
          {categories.map(item => (
            <CategoryButton
              item={item} />
          ))}
        </div>
        <div className="questionbutton">
          <button className="buttoncat" onClick={this.toggleHiddenbox}>{this.askQuesetionbuttontext()} </button>
          <div id="newfaqtoggle">
            {!this.state.isHidden &&
              <Formuser
                onAsk={this.toggleHiddenbox}
                onStatus={this.getQuestionStatus} />}
          </div>
        </div>
        <div className="statussent">
          <h1 id="green">{this.state.statusMessage}</h1>
        </div>
      </div>
    )
  }
}
