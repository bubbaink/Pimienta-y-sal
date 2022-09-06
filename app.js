const express = require("express")
const app = express()
const path = require("path")
app.use(express.static(path.join(__dirname, 'public')));

const indexRouter = require('./routes/main');
const detailRouter = require("./routes/detail")

/* app.get('/', (req, res) =>
   res.sendFile(path.resolve(__dirname, 'views', 'index.html'))
); */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter);
app.use("/detalle", detailRouter);

app.listen(3000, ()=>{
    console.log("Servidor corriendo en el puerto 3000");
})