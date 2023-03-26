// To use import, in package.json... "type": "module". 
// Morgan package to log data into the console.        
// Cors is used for cross domain, data sharing.                              
import { log } from "console";
import express from "express";
import morgan from "morgan";
import cors from 'cors';
import {config} from 'dotenv';


const app = express();


/** app middleware */
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
config();

/** applciation port */
const PORT = process.env.PORT || 8080;


/** routes */
app.get('/', (req,  res) => {
    try{
        res.json('Get Request');
    } catch(error){
        res.json(error)
    }
})


app.listen(PORT, () => {
    console.log(`Server listening to http://localhost:${PORT}`);
})