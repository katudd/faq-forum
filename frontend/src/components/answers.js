import React from "react"

class Answers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answersApi: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/answers").then(response => (
      response.json()
    )).then(json => {
      this.setState({ answersApi: json })
    })
  }

  render() {
    return (
      <div>
        Answers
      </div>
    )
  }

}

export default Answers
