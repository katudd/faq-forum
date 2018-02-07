import React from "react"
import { Link } from "react-router-dom"

console.log("I'm in CategoryButton Component")

class CategoryButton extends React.Component {

  render() {
    return (
      <div className="oneCategory">
        <Link className="link" to={`/category/${this.props.item}`}>
          <button className="buttoncat" value={this.props.item}>
            <p className="category-navigation">
              {this.props.item}
            </p>
          </button>
        </Link>
      </div>
    )
  }

}

export default CategoryButton
