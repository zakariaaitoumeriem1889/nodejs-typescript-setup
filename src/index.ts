import { app, connectServer, port } from '@/configs';
import routes from '@/routes';

app.use(routes);

connectServer(port);
