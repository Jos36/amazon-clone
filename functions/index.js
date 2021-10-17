const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");

const stripe = require("stripe")(
  "sk_test_51Jkm6OCBNOvPOiqZwGJ8fa9KHkKUzyElk7dfAJPLK7wjTvZvvjwsMlpYk2FO3Vx9lm8XUwqVAbNiyifZb2MeWSdZ00LgYsbH6o"
);

//App config
const app = express();

//midwares
app.use(cors({ origin: true }));
app.use(express.json());

//routes

app.get("/", (req, res) => res.status(200).send("hellow woorld"));

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log(`payment req recived for this amount ` + total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//listen comand
exports.api = functions.https.onRequest(app);
