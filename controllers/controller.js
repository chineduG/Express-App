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
    // res.json('result api get request')
    try{
        const r = await await Result.find();
        res.json(r);
    }catch(error){
        res.json({error})
    }
  }

/** Post all result */
export async function postResult(req, res){
    // res.json('result api post request')
    try{
        const {username, result, attempts, points, achived} = req.body;
        if(!username && !result) throw new Error('Data Saved Successfully');

        Result.create({username, result, attempts, points, achived});
    } catch(error){
        res.json(error)
    }
}

/** Delete all result */
export async function deleteResult(req, res){
    // res.json('result api delete request')
    try{
        await Result.deletemany();
        res.json({msg: 'Result deleted successfully'});
    } catch(error){
        res.json(error)
    }
    
}