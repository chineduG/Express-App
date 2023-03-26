import Router from "express";
const router = Router();

/** import controllers */
import * as controllers from '../controllers/controller.js';

/** Questions Routes API */
// router.get('/questions', controllers.getQuestions);
// router.post('/questions', controllers.postQuestions);

/** Clean code  */
router.route('/questions')
    .get(controllers.getQuestions) /** Get Request */
    .post(controllers.postQuestions) /** Post request */
    .delete(controllers.deleteQuestions); /** Delete Request */


router.route('/result')
    .get(controllers.getResult) /** Get result request */
    .post(controllers.postResult) /** Post result request */
    .delete(controllers.deleteResult); /** Delete result request */
export default router;