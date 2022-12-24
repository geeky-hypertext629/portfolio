const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded({extended:true}));
const ejs=require('ejs');
app.set('view engine','ejs');

app.use("/public", express.static(__dirname + '/public'));
app.get("/contact",function(req,res)
{
    res.render("contact.ejs");
})
app.get("/",function(req,res)
{
    res.render("index.ejs");
})

app.listen(process.env.PORT || 3000,function(req,res)
{
    console.log("Server running at port 3000");
})