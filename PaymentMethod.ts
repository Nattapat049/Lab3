class PaymentMethod{
    constructor(private_CraditCard : string, Price:number){}
    get CreditCard():string{
        return this.CreditCard;
    }
    get price():number{
        return this.price;
    }
    getPaymentMethodInfo(): string {
        return `${this._CreditCard} - ${this._price}`
    }
}
class CreditCard{
    constructor(private paymentmethod:PaymentMethod[]){}

    showPayment():void{
        console.log("Payment:");
        this.paymentmethod.forEach(method =>{
            console.log(method.getPaymentMethodInfo());
        });
    }
}
class Cash{
    constructor(private prices: {price, quantity: number}[]) {}

    calculateTotal():number{
        let totol
    }
}
