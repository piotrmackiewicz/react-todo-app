import 'dotenv/config';
import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import router from './routes'

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

let databaseConnection = "Waiting for Database response...";
mongoose.connect("mongodb://mongodb:27017/test", {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
mongoose.connection.on("error", error => {
  console.log("Database connection error:", error);
  databaseConnection = "Error connecting to Database";
});
mongoose.connection.once("open", () => {
  console.log("Connected to Database!");
  databaseConnection = "Connected to Database";
});
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

app.use('/api', router);

const server = app.listen('5000', () => {
  const host = 'localhost'
  const port = server.address().port;

  console.log("Backend is listening at http://%s:%s", host, port)
});
