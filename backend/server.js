const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const postRoutes = require('./routes/posts');

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);

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
