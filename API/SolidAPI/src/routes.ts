import { Router } from "express";
import { createUserControler } from "./useCases/CreateUser";

const router = Router()

router.post('/users', (req, res) => {
    return createUserControler.handle(req, res);
});

export { router }