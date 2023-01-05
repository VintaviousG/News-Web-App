const express = require('express');
const app = express();
const port = 4000;


app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

//app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.send('4000: Home Page World!');
});







const newsRouter = require('./routes/news')
app.use('/news',newsRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

