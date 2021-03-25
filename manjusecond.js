const listOfObject = [{
        name: "Amulspree",
        qty: 2,
        price: 50,
    },
    {
        name: "Clinic Plus",
        qty: 10,
        price: 1,
    },
    {
        name: "Vim",
        qty: 1,
        price: 100,
    },
    {
        name: "Detol",
        qty: 5,
        price: 70,
    },
];

// let nameAge = listOfObject.map((item) => console.log(`myname : ${item.name} qty : ${item.qty} 
// price : ${item.price}`);
let sl = 1;

function printItem() {
    //console.log(`${sl++}  |   ${this.name}    |   ${this.price}   | ${this.qty}   | ${this.qty * this.price}`);
    return `INSERT INTO some table (col_name, col_price, col_qty, col_total) VALUES('${this.name}'
    , ${this.price}, ${this.qty}, ${this.price * this.qty});`
}

console.log(listOfObject.map(item => printItem.call(item)).join(';'));