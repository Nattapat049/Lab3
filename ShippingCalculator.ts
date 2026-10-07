abstract class ShippingCalculator{
    constructor(public shipping:number){}

    abstract turnOn():void;
}

class StandardShipping extends ShippingCalculator{
    turnOn():void{
    }
class ExpressShipping extends ShippingCalculator{
    turnOn():void{
        console.log(`${this.shipping}`);
    }
}