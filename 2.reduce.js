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

const total = 2 * 50 + 10 * 1 + 1 * 100 + 5 * 70;

console.log(
    listOfObject.reduce(
        (accum, currItem) => {
            return accum += currItem.price * currItem.qty;
        }, 0
    )
);
//console.log(reduce((total, amount, index, array) => { total += amount return total/array. length }, 0));

//[1,2,3,4,5] => function(init, 1): o1 -> function(o1, 2): o2 ->  reduce
//[1,2,3,4,5] => [function(1), function(2), function(3), function(4), function(5)] => [10,20,30,40,50] -> map