class BmwFactory
{
    create(type)
    {
        if (type === 'X5') { return new Bmw(type, 10000, 350) }
        if (type === 'X6') { return new Bmw(type, 15000, 370) }
    }
}

class Bmw
{
    constructor(model, price, maxSpeed)
    {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;
    }
}

const factory = new BmwFactory();

const bmwX5 = factory.create('X5');
const bmwX6 = factory.create('X6');

console.log(bmwX5) // Bmw { model: 'X5', price: 10000, maxSpeed: 350 }
console.log(bmwX6) // Bmw { model: 'X6', price: 15000, maxSpeed: 370 }