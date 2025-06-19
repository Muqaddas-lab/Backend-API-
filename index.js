// //1.import express
// const express = require('express');
// const app = express();
// const PORT = 3000;
// //2. Middleware to parse JSON
// app.use(express.json());
// app.use((req, res, next) => {
//   console.log('${req.method} ${req.url}');
//   next();
// }
// );
// //3. Basic Routes
// app.get('/home', (req, res) => {
//   res.send('Welcome to the Home Page!');
// });
// app.get('/about', (req, res) => {
//   res.send('This is the About Page!');
// }
// );
// //4. Route Parameters
// app.get('/user/:id', (req, res) => {
//   const userId = req.params.id;
//   res.send('User ID ${userId}');
// }
// );
// //5. Query Parameters
// app.get('/search', (req, res) => {
//   const query = req.query.q;
//   res.send('You Searched for: ${query}');
// }
// );
// // name 
// app.post('/submit', (req, res) => {
//   const {data} = req.body; 
//   res.send(`Received name: ${JSON.stringify(data)}`);
// });


// //6. Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// }
// );





// 1. Import Express
const express = require('express');
const logger = require('./Middleware/logger');
const usersRouter = require('./routers/users');
const calcRouters=require('./routers/calculator')
const bmiRoutes = require('./routers/bmiRoutes');
const palindromeRoutes = require('./routers/palindromeRoutes');



const app = express();
const PORT = 3000;
// 2. Middleware (Optional)
app.use(express.json()); // Built-in middleware to parse JSON
app.use(logger);

app.use('/users', usersRouter);
app.use('/calc', calcRouters);
app.use('/health', bmiRoutes);
app.use('/pal', palindromeRoutes); 
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    error: 'Something went wrong!'
  });
});

// 6. Start Server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});





