const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
<<<<<<< HEAD
=======
require("dotenv").config();
const panelmembers = require("./models/PanelMSchema");
const router = require("./routes/router");
>>>>>>> 3ae0aeb80901592109cf82762a7d218780805634

const app = express();

//import routes
const postRoutes = require('./routes/posts');

//app middleware
app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

<<<<<<< HEAD
//route middleware
app.use(postRoutes);
=======
app.use(router);
>>>>>>> 3ae0aeb80901592109cf82762a7d218780805634

const PORT =9000;
const DB_URL = 'mongodb+srv://nirashaj:12345@cluster0.ny2do.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(DB_URL)
.then(() => {
    console.log('DB Connected');
})
.catch((err) => {
    console.log('DB Connection Error', err);
})

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`);
});
