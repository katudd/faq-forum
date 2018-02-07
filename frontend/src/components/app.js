import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
// import Formuser from "../components/formuser/formuser"
import Formadmin from "../components/formadmin/formadmin"
import Nav from "../components/nav"
import Faqlist from "./formuser/faqlist"
import Categories from "./formuser/categories/categories"
import Createnewfaq from "../components/createnewfaq/createnewfaq"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      questionAPI: []
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/questions").then(response => (
      response.json()
    )).then(json => {
      console.log(json)
      this.setState({ questionAPI: json })
    })
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Nav /> */}
          {/* <Questionbutton /> */}
          {/* <Route
            exact
            path="/formuser"
            render={routeProps =>
              <Formuser
                {...routeProps}
                questions={this.state.questionAPI} />
            } /> */}
          <Route
            exact
            path="/"
            component={Categories} />
          <Route
            path="/category"
            component={Categories} />
          <Route
            path="/category/:category"
            render={routeProps =>
              <Faqlist
                {...routeProps}
                questions={this.state.questionAPI} />
            } />
          <Route
            exact
            path="/formadmin"
            render={routeProps =>
              <Formadmin
                {...routeProps}
                questions={this.state.questionAPI} />
            } />
          <Route
            exact
            path="/formadmin/createnewfaq"
            component={Createnewfaq} />
          {/* <Route
            exact
            path="/login"
            component={Login} /> */}
        </div>
      </BrowserRouter>
    )
  }

}

export default App
