class Bmw
{
    constructor()
    {
        this.model = 'Model 1';
        this.price = 1000;
        this.maxSpeed = 50;
    }

    setModel = (model) =>
    {
        this.model = model;
        return this;
    }

    setPrice = (price) =>
    {
        this.price = price;
        return this;
    }

    setSpeed = (speed) =>
    {
        this.maxSpeed = speed;
        return this;
    }

    build = () =>
    {
        return {
            model: this.model,
            price: this.price,
            maxSpeed: this.maxSpeed,
        }
    }
}

console.log(new Bmw());
// Bmw {
//   setModel: [Function: setModel],
//   setPrice: [Function: setPrice],
//   setSpeed: [Function: setSpeed],
//   build: [Function: build],
//   model: 'Model 1',
//   price: 1000,
//   maxSpeed: 50
// }
console.log(new Bmw().setModel('Model-2').setPrice(2000).setSpeed(60).build()); // { model: 'Model-2', price: 2000, maxSpeed: 60 }
console.log(new Bmw().setModel('Model-3').setPrice(3000).setSpeed(70).build()); // { model: 'Model-3', price: 3000, maxSpeed: 70 }
console.log(new Bmw().setModel('Model-4').setPrice(4000).setSpeed(80).build()); // { model: 'Model-4', price: 4000, maxSpeed: 80 }