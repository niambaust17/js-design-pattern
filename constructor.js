class Bmw
{
    constructor(model, price, maxSpeed)
    {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
        this.getDetail = () =>
        {
            return `${ this.model } ${ this.price } ${ this.maxSpeed }`;
        }
    }
}

const X5 = new Bmw('X5', 10000, 350);

console.log(X5.model); // X5
console.log(X5.price); // 10000
console.log(X5.maxSpeed); // 350
console.log(X5.getDetail()); // X5 10000 350