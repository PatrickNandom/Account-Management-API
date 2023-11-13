const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const loggerMiddleware = require('./middlewares/loggerMiddleware');
// const router = require('./routes/index');
const incomeRoutes = require("./routes/incomeRoutes");
const expenseRoutes = require("./routes/expenseRoutes");

app.use(cors());

const corsOptions = {
    "origigin": "http://localhost:5500"
}

// .env configuration 
require('dotenv').config();

// configuring the bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//middlewares
app.use(loggerMiddleware);

// app.use('/', router.route);
app.use("/income", incomeRoutes);
app.use("/expense", expenseRoutes);


//connecting to port
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
})