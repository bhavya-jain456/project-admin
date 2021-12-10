const express = require('express');
const router = express.Router()
const users=require("../mongodb/users.js");
const admin=require("../mongodb/admin.js")
console.log("efg")

 router.get("/login",(req,res)=>{
  console.log("efg")
   return res.render('login');
  res.send("hello")
 
});
// router.post("/login",async (req,res)=>{

//   sessions=req.session;
//   sessions.userid=req.body.id;
//   // if(req.body.id==1){
//   //   const user = await user.find({username: req.body.username})
//   //   res.locals.user=user
//   //   console.log(res.locals.user)
//   //   // next()
//   //   }
//     // else{
//     //   const user = await admin.find({username: req.body.username})
//     //   res.locals.user=user
//     //   next()
//     // }
// })


router.get("/register",(req,res)=>{
  res.render("register.ejs");
});
router.post("/register",async  (req,res)=>{
  console.log(req.body)
  // const hashedPassword = await bcrypt.hash(req.body.password,10)
  // const user=new users({
  //   id:req.body.id,
  //     username:req.body.username,
  //     password:hashedPassword,
  //     phone:req.body.phone
  // })
  // session.id=req.body.id
  // const newUser = await user.save()
  //     res.status(201)      
  //     res.redirect("/login");
})
async function login(req, res,next){
    console.log(res.local.user)
  // if(res.user.length==0){
  //   res.status(400).render("register.ejs")
  // }
  // else{
  //    if(await bcrypt.compare(req.body.password,res.user[0].password)){
  //     res.render('userprofile.ejs')
  //        }
  //    else{
  //        res.send("Password didn't match")
  //    }
  //   }
    next()
}
module.exports = router ;