export class Recipe {
	public name: string;
	public description: string;
	public imagePathUrl: string;

	constructor(name: string, description: string, imagePathUrl: string) {
		this.name = name;
		this.description = description;
		this.imagePathUrl = imagePathUrl;
	}
}