const express=require("express")
const app=express()
const cors=require("cors")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const Register=require("./registersSchema.js")
const port=3002

app.use(bodyParser.urlencoded({
	extended:true
	}))
app.use(bodyParser.json())

app.use(cors())
mongoose.connect("mongodb+srv://Sowmyamaddi:MmSs26@cluster0.tncohz0.mongodb.net/firstdb?retryWrites=true&w=majority")
  .then(()=>{
  	console.log("connection succesfully")
  })
  .catch((err)=>{
  	console.log(err)
  })
app.get("/",(req,res)=>{
	res.send("dummy result")
})
app.post("/register",(req,res)=>{
	//const {email,passcode}=req.body;
	const email="user24@gmail.com",passcode="23456"
	const newFrontendUser=new Register({
		username:email,
		password:passcode
	})
	newFrontendUser.save()
})
app.listen(port,()=>console.log("server is running"))
