// To use import, in package.json... "type": "module". 
// Morgan package to log data into the console.        
// Cors is used for cross domain, data sharing.                              
import { log } from "console";
import express from "express";
import morgan from "morgan";
import cors from 'cors';
import {config} from 'dotenv';
import router from './router/route.js';

/** import connection file */
import connect from './database/connect.js';

const app = express();

/** app middleware */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

/** applciation port */
const PORT = process.env.PORT || 8080;

/** routes */
app.use('/api', router); /** api/v1*/

app.get('/', (req,  res) => {
    try{
        res.json('Get Request');
    } catch(error){
        res.json(error)
    }
})

//! Database Connection
/** start server only when we have valid connections with the Database */
connect().then(() => {
    try{
        app.listen(PORT, () => {
            console.log(`Server listening to http://localhost:${PORT}`);
        })
    }catch(error){
        console.log('Cannot connect to the server');
    }
}).catch(error => {
    console.log('Invalid Database Connection');
})

