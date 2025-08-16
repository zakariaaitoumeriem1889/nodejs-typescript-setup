import finder, { PackageWithPath } from 'find-package-json';

export class PackageJson {
	static get private(): boolean {
		return this.instance.private ? Boolean(this.instance.private) : false;
	}

	private static get instance(): PackageWithPath {
		return finder(__dirname).next().value!;
	}
}
