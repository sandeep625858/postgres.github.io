//npm install pg
//npm install express
const express=require('express');
const app=express();
const { Pool } = require('pg')
const pool = new Pool({
	user:'postgres',
	database:'postgres',
	password:'sandeep02',
	port:5432,
	host:'localhost',
})
/*pool.connect((err,client,done)=>{
	if (err) throw err
	client.query('CREATE TABLE tb(id serial PRIMARY KEY,name VARCHAR (200) UNIQUE NOT NULL)',(error,result)=>{
		console.log("Table Created");
	})
})*/
/*pool.connect((err,client,done)=>{
	if (err) throw err
	client.query("INSERT INTO tb (id,name) VALUES(1, 'Sandeep'),(2, 'Abhishek '),(3, 'Harsh'),(4, 'Raju')",(error,result)=>{
		console.log("value inserted");
	})
})*/
pool.connect((err,client,done)=>{
	if (err) throw err
	client.query("SELECT * FROM tb",(error,result)=>{
		console.log(result.rows);
	})
})
