import React from "react"
// import { Link } from "react-router-dom"
import Faqitem from "./faqitem"
// import CurrentFAQ from "./currentFAQ"

export default class Faqlist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      faq: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/newfaq").then(response => (
      response.json()
    )).then(json => {
      console.log(json)
      this.setState({ faq: json })
    })
  }

  render() {
    const selectedCategory = this.props.match.params.category
    const filteredByCategory = this.state.faq.filter((item => item.category === selectedCategory))
    console.log("selected:", selectedCategory)
    // const selectedCategory = this.props.match.params.category
    // const filteredByCategory = CurrentFAQ.filter((item => item.category === selectedCategory))
    // console.log("selected:", selectedCategory)
    return (
      <div className="Faq-list">
        {filteredByCategory.map(item => (
          <Faqitem
            key={item.id}
            id={item.id}
            category={item.category}
            question={item.question}
            answer={item.answer} />
        ))}
      </div>
    )
  }
}
