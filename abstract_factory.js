const bmwProducer = (type) =>
{
    if (type === 'X5') return bmwX5Factory;
    return bmwX6Factory;
}

const bmwX5Factory = () =>
{
    return new BmwX5();
}

const bmwX6Factory = () =>
{
    return new BmwX6();
}

class BmwX5
{
    info()
    {
        return "BmwX5";
    }
}

class BmwX6
{
    info()
    {
        return "BmwX6";
    }
}

let bmwX5 = bmwProducer('X5');
let bmwX6 = bmwProducer('X6');

console.log(bmwX5);
console.log(bmwX6);