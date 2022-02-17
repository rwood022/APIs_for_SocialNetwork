const express = require('express');
const mongodb = require("mongodb").MongoClient;
const data = require("./models");

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://localhost:27017/apiSocialNetworkingDB`;

let db;

mongodb.connect(
    connectionStringURI,
    { useNewUrlParser: true, useUnifiedTopology: true },
  (err, client) => {
    db = client.db();
    // Drops any documents, if they exist
    db.collection('').deleteMany({});
    // Adds data to database
    db.collection('').insertMany(data, (err, res) => {
      if (err) {
        return console.log(err);
      }
      console.log(res.ops);
    });

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  }
);

app.use(express.json());
