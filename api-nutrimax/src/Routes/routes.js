import { Router } from "express";
import UserController from "../Controllers/UserController.js";


const routes = Router();

routes.post('/', UserController.login)
routes.post('/register', UserController.register)


export { routes };