
export class Ingredient {
    public name: string;
    public amount: number;

    constructor(paramName: string, paramAmount: number) {
        this.name = paramName;
        this.amount = paramAmount;
    }
}

// constructor(public name:string, public amount: number){}
