const express = require('express');
const router = require('./routes/api/user');
const { connect } = require('mongoose');
const mongoose = require("mongoose");
const data = require("./models");

const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

const connectionStringURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/apiSocialNetworkingDB';

let db;

mongoose.connect(connectionStringURI, {
  useUnifiedTopology: true,
  useUnifiedTopology: false, 
}, err => {
  if(err) throw err;
  console.log('Connected to MongoDB!!!')
  });

// mongodb.connect(
//     connectionStringURI,
//     { useNewUrlParser: true, useUnifiedTopology: true },
//   (err, client) => {
//     db = client.db();
//     // Drops any documents, if they exist
//     db.collection('apiSocialNetworkingDB').deleteMany({});
//     // Adds data to database
//     db.collection('apiSocialNetworkingDB').insertMany(data, (err, res) => {
//       if (err) {
//         return console.log(err);
//       }
//       console.log(res.ops);
//     });

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });


