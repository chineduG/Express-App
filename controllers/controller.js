//! Controllers for APIs

/** Get all questons */
export async function getQuestions(req, res){
    res.json('questions api get request');
}

/** Insert all questions */
export async function postQuestions(req, res){
    res.json('questions api post request');
}

/** Delete all questions */
export async function deleteQuestions(req, res){
    res.json('questions api delete request');
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