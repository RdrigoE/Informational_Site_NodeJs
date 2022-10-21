const express = require('express');
const app = express();
const port = 3000;

const dir = process.cwd().slice(0,-7)

app.use(express.static(`${dir}`))


app.get('/',(req,res) => {
    res.sendFile(`${dir}/home.html`);
});

app.get('/home',(req,res) => {
    res.sendFile(`${dir}/home.html`);
});

app.get('/about',(req,res) => {
    res.sendFile(`${dir}/about.html`);
});


app.get('/contact-me',(req,res) => {
    res.sendFile(`${dir}/contact-me.html`);
});

app.use((req, res, next) => {
    res.status(404).sendFile(`${dir}/404.html`);
  });

app.listen(port);