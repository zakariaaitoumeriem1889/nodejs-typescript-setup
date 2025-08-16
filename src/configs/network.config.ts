import { PackageJson } from '@/configs/pkgJson.config';
import localIpUrl from 'local-ip-url';

export type PrivateStatus = 'public' | 'private';

export class Network {
	public static get ip() {
		return localIpUrl(this.private);
	}

	public static get hosts(): string[] {
		const host: string[] = ['localhost', '127.0.0.1'];
		if (this.ip !== '127.0.0.1') {
			host.push(this.ip);
		}
		return host;
	}

	private static get private(): PrivateStatus {
		return PackageJson.private ? 'private' : 'public';
	}
}
