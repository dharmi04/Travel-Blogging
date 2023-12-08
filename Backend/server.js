const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./Routes/routes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors())
// app.use(
//   session({
//     secret: process.env.SECRET || 'your-secret-key',
//     resave: true,
//     saveUninitialized: true,
//     cookie: { secure: false },
//   })
// );
app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
app.use('/api', routes);

// connecting
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`Connected to db and listening to port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
