import React from "react"
import { Link } from "react-router-dom"
import "./style.css"
import QListItem from "./qlistitem"
import Createnewfaq from "../createnewfaq/createnewfaq"
import { withRouter } from "react-router-dom"

class Formadmin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: "",
      lastname: "",
      answer: "",
      questionId: "",
      isHidden: true,
      message: ""
    }
  }

  handleFirstname = event => {
    this.setState({
      firstname: event.target.value
    })
  }

  handleLastname = event => {
    this.setState({
      lastname: event.target.value
    })
  }

  handleAnswer = event => {
    this.setState({
      answer: event.target.value
    })
  }

//update this function with the id from the question Api
  handleQuestion = event => {
    this.setState({
      question: event.target.value
    })
  }

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  getFaqbuttontext = () => {
    if (this.state.isHidden) {
      return "create new faq"
    } else {
      return "close"
    }
  }

  getMessagereply = () => {
    if (this.state.message) {
      return <p>{this.state.message}</p>
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state)
    fetch("http://localhost:8080/answers", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    }).then(response => {
      if (response.ok) {
        fetch(`http://localhost:8080/questions/${this.state.questionId}`, {
          method: "PUT",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ answered: true })
        }).then(() => {
          this.setState({
            firstname: "",
            lastname: "",
            answer: "",
            message: "question answered!"
          })
        })
      } else {
        this.setState({ message: "all fields required" })
      }
    })
  }

  handleChosen = id => {
    console.log(id)
    this.setState({
      questionId: id
    })
  }

  render() {
    // shorthand version of const questions = this.props.questions
    const { questions } = this.props
    const notAnsweredQuestions = questions.filter((item => item.answered === false))
    const selectedQuestion = questions.find(question => (question._id === this.state.questionId))
    console.log("selected question", selectedQuestion)
    return (
      <div className="Formadmin">
        <div className="exitbuttondiv">
          <Link to="/"><button className="exitbutton">exit</button></Link>
        </div>
        <div className="adminpage">

          <div className="unanswered">
            <p id="colorwhite">unanswered questions: {notAnsweredQuestions.length}</p>
            <div className="questions">
              {notAnsweredQuestions.map(item => (
                <QListItem
                  handleChosen={this.handleChosen}
                  id={item._id}
                  question={item.question}
                  title={item.title}
                  category={item.category}
                  firstname={item.firstname}
                  email={item.email} />
              ))}
            </div>
          </div>

          <div className="admincontroller">
            <div className="answer">
              <p id="colorwhite">question</p>
              <input type="text" placeholder="category" value={selectedQuestion && selectedQuestion.category} />
              <input type="text" placeholder="name" value={selectedQuestion && selectedQuestion.firstname + " " + selectedQuestion.lastname} />
              <input type="text" placeholder="title" value={selectedQuestion && selectedQuestion.title} />
              <textarea id="admintextarea" placeholder="question" type="text" value={selectedQuestion && selectedQuestion.question} />

              <p id="colorwhite">answer</p>
              <form onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.firstname} onChange={this.handleFirstname} placeholder="first name" />
                <input type="text" value={this.state.lastname} onChange={this.handleLastname} placeholder="last name" />
                <textarea id="admintextarea" type="text" value={this.state.answer} onChange={this.handleAnswer} placeholder="answer" />
                <div id="message">
                  {this.getMessagereply()}
                </div>
                <button id="buttonstyle">reply</button>
              </form>

            </div>
          </div>

          <div className="buttoncreatenew">
            <button id="buttoncreatenew" onClick={this.toggleHidden}> {this.getFaqbuttontext()} </button>
            <div id="newfaqtoggle">
              {!this.state.isHidden && <Createnewfaq />}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Formadmin
