
export class Recipe {
    public name: string;
    public description: string;
    public imagePath: string;

    constructor(paramName: string, paramDesc: string, paramImagePath: string) {
        this.name = paramName;
        this.description = paramDesc;
        this.imagePath = paramImagePath;
    }
}
