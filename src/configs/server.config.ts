import { app } from '@/configs/app.config';
import { Network } from '@/configs/network.config';
import http from 'node:http';

export function connectServer(port: number) {
	const hostname: string = Network.ip === '127.0.0.1' ? '127.0.0.1' : '0.0.0.0';
	http.createServer(app).listen(port, hostname);
	console.log(`🌐 Express app Server is running at:`);
	Network.hosts.forEach((hostname: string) => {
		console.log(`   - http://${hostname}:${port}`);
	});
}
