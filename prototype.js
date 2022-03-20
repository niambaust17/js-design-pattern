const bmw =
{
    model: 'X5',
    price: 10000,
    maxSpeed: 350,
    getDetail()
    {
        return `${ this.model } ${ this.price } ${ this.maxSpeed }`
    }

}

const johnCar = Object.create(bmw, { owner: { value: 'John' } });

console.log(johnCar.model); // X5
console.log(johnCar.getDetail()); // X5 10000 350
console.log(johnCar.owner); // John

console.log(johnCar.__proto__ === bmw); // true
