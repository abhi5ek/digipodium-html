const prices = [ 2300 , 499 , 233 , 199 , 450 , 3400 , 1800];
const filteredprice1 = prices.filter( (p) => { return p<500} );
console.log(filteredprice1);

// create a filter to get names with length greaer than 5

const name2 = [ 'Raju' , 'Kaliay' , 'pinki'];
const result = name2.filter( (p) => {return p.length>5 });
console.log(result);