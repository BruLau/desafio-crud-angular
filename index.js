const server = require('./Database/app')
const dotenv = require ("dotenv");
dotenv.config();
const PORT = process.env.PORT || 3001;

server.listen(PORT, ()=> {console.log ("listening on port 3001")})