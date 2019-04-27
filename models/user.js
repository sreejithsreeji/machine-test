const con=require('../dbconfig.js');
const moment=require('moment');
const util=require('../util.js');
let register=(user)=>{
    const body={
        fullname:user.fullname,
        email:user.email,
        password:util.createHash(user.password),
        profile:null,
        token:util.createHash(new Date().getMilliseconds()+user.email),
        token_created_time:moment().format('YYYY-MM-DD hh:mm:ss'),
        created_at:moment().format('YYYY-MM-DD hh:mm:ss')
    };
    const sql='insert into users set ?';
   // const tokenSql='insert into token_management set ?';

    const promises=[];

    return  new Promise((resolve, reject) => {
        con.query(sql,[body],(err,rows,fields)=>{
            if(err) reject(err);
            resolve(rows)
        });
    });
/*    const tokenPromise= new Promise((resolve, reject) => {
        con.query(sql,[data],(err,rows,fields)=>{
            if(err) reject(err);
            resolve(rows)
        });
    });*/
 /*   promises.push(insertPromise);
    promises.push(tokenPromise);*/


};

let getUser=(id,parameter)=>{
    const sql='select id,fullname,email,token,profile from users where '+parameter+' =?';
    return new Promise((resolve, reject) => {
        con.query(sql,[id],(err,rows,fields)=>{
            if(err) reject(err);
            resolve(rows);
        });
    })
};
let generateToken=(data)=>{
    const token=util.createHash(data);
    return token;
};
let saveToken=(email,token)=>{
    const data={
        email:email,
        token:token,
        token_created_time:moment().format('YYYY-MM-DD hh:mm:ss')
    }
    let sql='update users set ? where email=?';
    return new Promise((resolve, reject) => {
        con.query(sql,[data,email],(err,rows,fields)=>{
            if(err) reject(err);
            resolve(rows);
        });
    })
};

let validateToken=(token)=>{
    const sql='select token,token_created_time from users where token=?';
    return new Promise((resolve, reject) => {
        con.query(sql,[token],(err,rows,fields)=>{
            if(err) reject(err);
            const response=rows[0];

            console.log(response)
            const expiredTime=moment(response.token_created_time).add(2,'hours').format('yyyy-mm-dd hh:mm:ss');

            if(moment().format()>expiredTime){

                resolve(false);
            }
            else{
                resolve(true);
            }
        });
    })
};

let updateUser=(user,token)=>{

    let sql='update users set ? where token=?';
    return new Promise((resolve, reject) => {
        con.query(sql,[user,token],(err,rows,fields)=>{
            if(err) reject(err);
            resolve(rows);
        });
    })
};

let isEmailExists=(email)=>{
    console.log(email)
    let sql='select * from users where email =?';
    return new Promise((resolve, reject) => {
        con.query(sql,[email],(err,rows,fields)=>{
            if(err) reject(err);
            resolve(rows);
        });
    })
}

module.exports={
    register,
    getUser,
    generateToken,
    saveToken,
    validateToken,
    updateUser,
    isEmailExists
}