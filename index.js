const { user } = require("pg/lib/defaults");
const Sequelize=require("sequelize");  
const sequelize=new Sequelize("db1",'postgres','asdfgf',{
    host:'localhost',
    dialect:"postgres",
    define:{
        freezeTableName:true
        }
},
);

sequelize.authenticate().then(()=>{
    console.log("Connection Success");
}).catch(()=>{
    console.log(("error"));
});

// async function myFunction(){
//     await sequelize.authenticate();
//     console.log("connection Success");
// }


// myFunction();

const User=sequelize.define('user',{
    user_id:{
       type:Sequelize.DataTypes.INTEGER ,
       primaryKey:true,
       autoIncrement:true
    },
    username:{
        type:Sequelize.DataTypes.STRING,
         allowNull:false,
    },
    email:{
        type:Sequelize.DataTypes.STRING,
         allowNull:true,
    },
    password:{
        type:Sequelize.DataTypes.STRING
        
    },
    age:{
        type:Sequelize.DataTypes.INTEGER,
        defaultValue:21
    }
},{
   // freezeTableName:true,
    timestamps:false,
    initialAutoIncrement: 1000,
    } );

   // User.drop();
//User.sync({force:true}).then((data)=>{
User.sync({alter:true}).then((data)=>{
    console.log("Syancoronized successfull");
 const usr=   User.build({username:"cravindr",email:"cravindr@gmail.com",password:"asdfgf",age:45});
 //console.log(usr);
 usr.save();
 }).then((data)=>{
console.log(data);
 }
 ).catch((err)=>{
    console.log(err);
})
;

//sequelize.drop();
//sequelize.drop({match:/_test$/});
console.log("Another");
console.log("Another1");