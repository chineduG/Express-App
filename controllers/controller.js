//! Controllers for APIs
import  {Questions} from "../models/questionScheme.js";
import Result from '../models/resultScheme.js ';



/** Get all questons */
export async function getQuestions(req, res){
    // res.json('questions api get request');
    try{
        const q = await Questions.find();
            res.json(q)
        } catch(error){
            res.json({error})
        }
    }

/** Insert all questions */
export async function postQuestions(req, res){
    try{
         Questions.insertMany({questions:[0], answers:[1]});
            res.json({msg:'Saved'})
        } catch(error){
        res.json({error})
    }
}

/** Delete all questions */
export async function deleteQuestions(req, res){
    // res.json('questions api delete request');
    try{
        await Questions.deleteMany();
        res.json({msg:'Message deleted successfully'});
    } catch(error){
        res.json({error})
    }
}
 
/** Get all result */
export async function getResult(req, res){
    res.json('result api get request')
}

/** Post all result */
export async function postResult(req, res){
    res.json('result api post request')
}

/** Delete all result */
export async function deleteResult(req, res){
    res.json('result api delete request')
}