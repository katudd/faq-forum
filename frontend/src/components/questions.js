import React from "react"

class Questions extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questionsApi: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/answers").then(response => (
      response.json()
    )).then(json => {
      this.setState({ questionsApi: json })
    })
  }

  render() {
    return (
      <div>
        Questions
      </div>
    )
  }

}

export default Questions
