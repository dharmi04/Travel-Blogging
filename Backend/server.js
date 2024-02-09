const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const routes = require('./Routes/routes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors(
  {
    origin: ["https://travel-blogging-qemkynokn-dharmi04.vercel.app/"],
    methods: ["POST", "GET"],
    credentials: true
  }
))
// app.use(
//   session({
//     secret: process.env.SECRET || 'your-secret-key',
//     resave: true,
//     saveUninitialized: true,
//     cookie: { secure: false },
//   })
// );
// app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));
// const cors_proxy = require('cors-anywhere');

// const host = process.env.HOST || '0.0.0.0';
// const port = process.env.PORT || 8080;

// cors_proxy.createServer({
//   originWhitelist: [], // Allow all origins
//   requireHeader: ['origin', 'x-requested-with'],
//   removeHeaders: ['cookie', 'cookie2'],
// }).listen(port, host, function () {
//   console.log('CORS Anywhere is running on ' + host + ':' + port);
// });

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
