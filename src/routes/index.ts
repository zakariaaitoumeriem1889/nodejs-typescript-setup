import { Request, Response, Router } from 'express';

const routes: Router = Router();

routes.get('/ping', (req: Request, res: Response) => {
	res.send('Pong!');
});

export default routes;
