# passport-jwt-authentication
To demo how to use passport and jwt to secure APIs written in node and express


Steps

Clone this application.
1. Run npm install
2. Add a .env file and add the following two properties
DB_PASS="<your mongodb password>"
jwtSecret="<a jwt key>"
3. Run npm start


Test using Postman

Add a new user - POST http://localhost:3001/api/auth/register
Pass the following sample data in body, in JSON format
{
    "username": "test1",
    "email": "a@a.com",
    "password": "1234"
}

Login - POST http://localhost:3001/api/auth/login
Pass the following sample data in body, in JSON format
{
    "username": "test1",
    "email": "a@a.com",
    "password": "1234"
}
