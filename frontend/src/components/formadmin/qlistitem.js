import React from "react"

export default class QListItem extends React.Component {
  handleClick = () => {
    this.props.handleChosen(this.props.id)
  }
  render() {
    return (
      <div className="q-item" onClick={this.handleClick}>
        <p>category: {this.props.category}</p>
        <p>title: {this.props.title}</p>
        {/* <p>Question: {this.props.question}</p> */}
      </div>
    )
  }
}
