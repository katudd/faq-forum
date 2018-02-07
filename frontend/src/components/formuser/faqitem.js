import React from "react"
// import { Link } from "react-router-dom"

export default class Faqitem extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isHidden: true
    }
  }

  handleClick = () => {
    const toggleMode = !this.state.isHidden
    this.setState({ isHidden: toggleMode })
  }

  render() {
    const Answer = () => (
      <div className="accordion-answer-content">
        <p>{this.props.answer}</p>
      </div>
    )

    return (
      <div className="accordion-container">
        <div className="accordion-question" onClick={this.handleClick} role="presentation"onKeyDown={this.handleClick}>
          <h2>{this.props.question}</h2>
        </div>
        <div className="accordion-answer">
          <ul>
            <li>{!this.state.isHidden && <Answer />}</li>
          </ul>
        </div>
      </div>

    )
  }

}
