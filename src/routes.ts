import { Router } from 'express';

import { CreateUserController } from './controllers/user/CreateUserController';
import { AuthUserController } from './controllers/user/AuthUserController';
import { isAuthenticated } from './middlewares/isAuthenticated';

const router = Router();

// ROTAS DE USUÁRIOS //
router.post('/register', new CreateUserController().handle); // Rota para criar um usuário
router.post('/session', new AuthUserController().handle); // Rota para autenticar um usuário
router.post('/me', isAuthenticated, new AuthUserController().handle); // Rota para retornar dados do usuário autenticado



export { router };