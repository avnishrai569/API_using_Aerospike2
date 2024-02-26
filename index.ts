//avnish
import * as dotenv from "dotenv";
import express from "express";
//import cors from "cors";  
import helmet from "helmet";
//import mysql  from "mysql2";
// import { loginRoute } from "./routes";
//import {route} from "./routes";
dotenv.config();   
import {AerospikeService} from "./Aerospike";
import { Aerospike_route } from "./Aerospike_route";



const PORT: number = 5000;
const app: express.Application = express();


app.use(helmet());
app.use(express.json());

// const LoginRoute = new loginRoute(app);
// LoginRoute.configureRoutes();

const aerospike_route = new Aerospike_route(app);
aerospike_route.configureRoutes();

console.log("PORT", PORT);
app.listen(PORT ,() => {
    console.log(`Listening on port ${PORT}`);
});
