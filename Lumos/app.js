const express = require ("express");
const mongoose = require("mongoose");

const User = require("./model/user");
require("dotenv/config");
const app = express();
// const customMiddleware = (req ,res , next )=>{
// 	console.log("welcome to middle ware");
// 	next()
// }

// app.use(customMiddleware);

app.use(express.json());
app.get("/",(req,res)=>{
// res.send("first request !");

	console.log("First request");
});
app.get("/users",(req,res)=>{


	let users = ["pavan ", "sta", "ios"," valorant"];
		res.send({
			users : User ,
		});

	// console.log("First request");
});

app.post("/create_user", async  (req, res) =>{
	// console.log(req.body.name);
try{
	const myuser = new User(req.body);
	await myuser.save();
	res.send(myuser); 
} catch(err){
	res.send({message: err});
}
});
mongoose.connect(
	process.env.DB_CONNECTION_STRING,
	{useUnifedToplogy:true,useNewUrlParser:true},
	(req,res)=>{

	console.log("Connected to the database");
});

app.listen(3000,()=>{
	console.log("Listening to 3000");  
});  