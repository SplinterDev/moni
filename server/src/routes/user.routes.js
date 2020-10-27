import { Router } from "express";
import UserController from "../controllers/user.controller";

const router = Router();

router.get('/', UserController.list);
router.post('/', UserController.create);
router.get('/:id', UserController.get);
router.delete('/:id', UserController.remove);
router.patch('/:id',UserController.update);

module.exports = router;