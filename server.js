import express from "express"
import bodyParser from "body-parser"
import mongoose from "mongoose"
import cors from "cors"
import uuid from "uuid/v4"
import bcrypt from "bcrypt-nodejs"

// console.log("Hello world!")

// Express setup, including JSON body parsing.
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Tells express to add the "Access-Control-Allow-Origin" header to allow requests from anywhere.
app.use(cors())

const mongoUrl = process.env.MONGO_URL || "mongodb://localhost/faq-api"
mongoose.connect(mongoUrl, { useMongoClient: true })

// Connect to MongoDB, on the "products-api" database. If the db doesn't exist, mongo will create it.
// commented out before deploy
// mongoose.connect("mongodb://localhost/faq-api", { useMongoClient: true })

// This makes mongo use ES6 promises, instead of its own implementation
mongoose.Promise = Promise

// Log when mongo connects, or encounters errors when trying to connect.
mongoose.connection.on("error", err => console.error("Connection error:", err))
mongoose.connection.once("open", () => console.log("Connected to mongodb"))

// Set up connection for refs between question and answer
const Schema = mongoose.Schema

// This is the beginning of a model for the Product object.   // Add more attributes to your product here.
const Question = mongoose.model("Question", {
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  question: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  answered: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const Answer = mongoose.model("Answer", {
  firstname: String,
  lastname: String,
  answer: String,
  date: { type: Date, default: Date.now },
  questionId: {type: Schema.Types.ObjectId, ref: "Question"}
})

const Newfaq = mongoose.model("Newfaq", {
  question: String,
  answer: String,
  category: String,
  date: { type: Date, default: Date.now }
})

const Login = mongoose.model("Login", {
    username: String,
    password: String,
    accessToken: {
      type: String,
      default: () => uuid()
    }
  })


app.get("/", (req, res) => {
  res.send("FAQ API")
})

// Endpoint to create a product. Send a POST to /products with a JSON body
// with the keys and values you want to persist in the database.
app.post("/questions", (req, res) => {
  const question = new Question(req.body)

  question.save()
    .then(() => { res.status(201).send("Question created") })
    .catch(err => { res.status(400).send(err) })
})

// Add more endpoints here!

app.get("/questions", (req, res) => {
  Question.find().then((allQuestions) => {
    res.json(allQuestions)
  })
})

app.post("/answers", (req, res) => {
  const answer = new Answer(req.body)

  answer.save()
    .then(() => { res.status(201).send("Answer created") })
    .catch(err => { res.status(400).send(err) })
})

app.get("/answers", (req, res) => {
  Answer.find().then((allAnswers) => {
    res.json(allAnswers)
  })
})

app.post("/newfaq", (req, res) => {
  const newfaq = new Newfaq(req.body)

  newfaq.save()
    .then(() => { res.status(201).send("Newfaq created") })
    .catch(err => { res.status(400).send(err) })
})

app.get("/newfaq", (req, res) => {
  Newfaq.find().then((allNewfaqs) => {
    res.json(allNewfaqs)
  })
})

app.put("/questions/:id", (req, res) => {
  const condition = { _id: req.params.id }
  Question.update(condition, req.body)
    .then(() => { res.status(201).send("FAQ item updated in MongoDB") })
    .catch(err => { res.status(400).send(err) })
})

//
// // Uppdatera t.ex. svaret på en specifik fråga i databasen
// app.put("/faqitems/:id", (req, res) => { // Frontend gör post-request med id på den fråga som ska uppdateras
//   const condition = { _id: req.params.id } // Villkor för item:et som ska uppdateras
//   FaqItem.update(condition, req.body) // Uppdatera databasen med objekt som finns i requestens body
//     .then(() => { res.status(201).send("FAQ item updated in Mongodb") }) // Promise: Skicka 201 till frontend när databasen är uppdaterad
//     .catch(err => { res.status(400).send(err) }) // Promise: Skicka status 400 +
//     // felmeddelande om det inte gick att uppdatera
// })

// app.post("/login", (req, res) => {
//   const login = new Login(req.body)
//
//   login.save()
//     .then(() => { res.status(201).send("login created") })
//     .catch(err => { res.status(400).send(err) })
// })
//
// app.post("/users", (req, res) => {
//   const user = new Login(req.body {
//     if (user.password) {
//       user.password = bcrypt.hashSync(user.password)
//     }
//     user.save().then(() => {
//       res.status(201).json({ message: "created!" })
//     }).catch(err => {
//       res.status(400).json({ message: "oh no", errors: err.errors })
//     })
//   }
// })

app.post("/users", (req, res) => {
  const { password } = req.body
  const hash = bcrypt.hashSync(password)

 const user = new Login({
    username: req.body.username,
    password: hash
  })

 user.save().then(() => {
    res.status(201).json({ message: "user created!" })
  }).catch(err => {
    res.status(400).json({ message: "You got an error!", errors: err.errors })
  })
})

app.get("/users", (req, res) => {
  Login.find().then((allUsers) => {
    res.json(allUsers)
  })
})


app.post("/login", (req, res) => {
  Login.findOne({ username: req.body.username }).then(user => {
    if (user && bcrypt.compareSync(req.body.password, user.password)) {
      res.json({ message: "Success!", token: user.token, userId: user.id })
    } else {
      res.status(401).json({ message: "Authentication failure" })
    }
  })
})

app.get("/login", (req, res) => {
  Login.find().then((allLogins) => {
    res.json(allLogins)
  })
})

// app.listen(8080, () => console.log("FAQ API listening on port 8080!"))
const port = process.env.PORT || 8080
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
