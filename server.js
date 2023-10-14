const legoData = require("./modules/legoSets");
const path = require("path");
const express = require('express');
const app = express();

const HTTP_PORT = process.env.PORT || 8080;
app.use(express.static("public"));

// Serve the home.html file for the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

// Serve the about.html file for the /about route
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get("/lego/sets", async (req,res)=>{
  let sets = await legoData.getAllSets();
  res.send(sets);
});

app.get("/lego/sets/id-demo", async (req,res)=>{
  try{
    let set = await legoData.getSetByNum("001-1");
    res.send(set);
  }catch(err){
    res.send(err);
  }
});

app.get("/lego/sets/theme-demo", async (req,res)=>{
  try{
    let sets = await legoData.getSetsByTheme("tech");
    res.send(sets);
  }catch(err){
    res.send(err);
  }
});
// Custom 404 handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

legoData.initialize().then(() => {
    app.listen(HTTP_PORT, () => { console.log(`server listening on: ${HTTP_PORT}`) });
});
