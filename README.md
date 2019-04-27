# Machine test server
Wesa api.
## Getting Started
    git clone https://github.com/sreejithsreeji/machine-test
### Prerequisites
Nodejs
mysql
### Dependencies
create .env file using the format prescribed in the test-env.json	
		
### Starting environment
    cd test
    npm start
This will start the server in **localhost:{PORT}**
#### Sample Request
REGISTER USER
 POST http://localhost:5000/users
 BODY {
      "fullname":"sreejith",
      "email":"m.srijti@gmail.com",
      "password":"1232456",
      "profile":"wer"	
      }
    
    UPDATE USER PROFILE  
  PATCH http://localhost:5000/users/:token
  sample http://localhost:5000/users/55720d6f2095c1dd81c1fde539a52856a2236a477a6b12e144da2b9813e833eb
  BODY {
             "fullname":"sreeji",
             "email":"m.srijti@gmail.com",
             "password":"1232456",
             "profile":"wer"	
             } 
GENERATE TOKEN             
GET http://localhost:5000/users/token/generate?email={email}
sample request http://localhost:5000/users/token/generate?email=m.srijithsri@gmail.com
response:{
             "status": true,
             "message": "Token generated sucessfully",
             "token": "1376c88b98ab1bcd16dca459509e8bf01799210da4b8f2d42735166d6f4461cf"
         }
