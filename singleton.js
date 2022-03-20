class Bmw
{
    constructor(model, price, maxSpeed)
    {
        this.model = model;
        this.price = price;
        this.maxSpeed = maxSpeed;

        if (!Bmw.instance)
        {
            Bmw.instance = this;
        }

        return Bmw.instance;
    }

    // constructor()
    // {
    //     if (Bmw.instance)
    //     {
    //         console.error("You can only create one instance!");
    //     }

    //     Bmw.instance = this;
    // }

    getDetail = () =>
    {
        return `${ this.model } ${ this.price } ${ this.maxSpeed }`;
    }
}

// Object.freeze(new Bmw());
// let X6 = new Bmw(); // You can only create one instance!
// let X7 = new Bmw(); // You can only create one instance!

const instance = new Bmw('X5', 10000, 350);
// prevents new properties from being added to the object
Object.freeze(instance);

const X6 = new Bmw('X6', 15000, 370);
const X7 = new Bmw();
console.log(X6 === X7); // true
console.log(instance);
// Bmw {
//   getDetail: [Function: getDetail],
//   model: 'X5',
//   price: 10000,
//   maxSpeed: 350
// }
console.log(X6.getDetail()); // X5 10000 350
console.log(X7);
// Bmw {
//   getDetail: [Function: getDetail],
//   model: 'X5',
//   price: 10000,
//   maxSpeed: 350
// }