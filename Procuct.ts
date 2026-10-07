export class Procduct{
    constructor(private id:number , name: string ,price:number, stock: number){}

    public getid(): number {return this.id};
    public getname(): string {return this.name};
    public getprice(): number {return this.price};
    public getstock():number {return this.stock};

    public getInfo():string{
        return`product:${this.id} ${this.name} ${this.price} ${this.stock}`
    }
    publice inHornor():boolean{
        if(this.true >=0){
            return true;
        }
    }
    import
}