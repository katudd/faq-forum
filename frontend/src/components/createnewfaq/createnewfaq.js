import React from "react"
import "./style.css"

class Createnewfaq extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: "",
      answer: "",
      category: "",
      message: ""
    }
  }

    handleQuestion = event => {
      this.setState({
        question: event.target.value
      })
    }

    handleAnswer = event => {
      this.setState({
        answer: event.target.value
      })
    }

    handleCategory = event => {
      this.setState({
        category: event.target.value
      })
    }

  handleSubmit = event => {
    event.preventDefault()
    if (this.validateFields() === true) {
      event.preventDefault()
      fetch("http://localhost:8080/newfaq", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(this.state)
      }).then(response => {
        if (response.ok) {
          this.setState({
            question: "",
            answer: "",
            category: "",
            message: "question posted to web!"
          }, () => { console.log("State has been reset", response, response.status) })
        }
      })
    } else {
      this.setState({ message: "all fields required" })
    }
  }

  validateFields = () => {
    if (this.state.question && this.state.category) {
      return true
    }
    return false
  }

  getMessage = () => {
    if (this.state.message) {
      return <p id="message">{this.state.message}</p>
    }
  }

  render() {
    return (
      <div>
        <form className="newfaqbox" onSubmit={this.handleSubmit}>
          <p id="colorwhite">create new faq</p>
          <textarea
            id="usertextarea"
            type="text"
            value={this.state.question}
            onChange={this.handleQuestion}
            placeholder="question"
            spellCheck="false" />
          <textarea
            id="usertextarea"
            type="text"
            value={this.state.answer}
            onChange={this.handleAnswer}
            placeholder="answer"
            spellCheck="false" />
          <select
            type="text"
            value={this.state.category}
            onChange={this.handleCategory}
            placeholder="category">
            <option value="" selected disabled hidden>Choose category here</option>
            <option
              value="OP-1">OP-1
            </option>
            <option
              value="pocket operator">pocket operator
            </option>
            <option
              value="OD-11">OD-11
            </option>
            <option
              value="checkout and shipping">checkout & shipping
            </option>
            <option
              value="other">other
            </option>
          </select>
          <div className="message">
            <p>{this.getMessage()}</p>
          </div>
          <button id="buttocreatenew" type="submit">post</button>
        </form>
      </div>
    )
  }
}

export default Createnewfaq
