const user = { name : 'Raju' , email : 'raju@gmail.com' , password: '7689'};

console.log(user.name)
console.log( user['email']);

user.address = 'Lucknow';

console.log(  user );

user.passowrd = '1234'; // will overwrite in password 
console.log( user );

let customkey = 'email';
console.log(user[customkey]);
user[customkey] = 'raju377@gmail.com';

let smartphone = {
    brand : 'samsung',
    model : 'S21',
    price : 70000,
    color : 'Grey',
};

smartphone.color = ['Black', 'White', 'Blue'];
console.log(smartphone.color[2]);
smartphone.color.push('Red');
console.log(smartphone); 



const smartphoneList = [
    { brand : 'Samsung' , model : 'S21' , price : 70000, color :['Black', 'Blue']},
    { brand : 'Samsung' , model : 'S23' , price : 86000, color :['Black', 'Blue']},
    { brand : 'Apple' , model : 'iPhone 12' , price : 80000, color :['White', 'Red','Yellow']},
    { brand : 'OnePlus' , model : '9 Pro' , price : 60000, color :['Blue', 'White']},
    { brand : 'OnePlus' , model : 'Nord' , price : 35000, color :['Blue', 'White']},
    { brand : 'Xiaomi' , model : 'Mi 11' , price : 50000, color :['Black', 'Gold']},
];

// syntav to access price of oneplus 9 pro
console.log(smartphoneList[2].price);

// add color red to oneplus
smartphoneList[2].color.push('Red');
console.log(smartphoneList[2].color);

// remove all the colors of apple except first color
smartphoneList[1].color.splice(1);  
console.log(smartphoneList[1].color);

// use filter to get all phones with price less than 70000
const temp = smartphoneList.filter( (phone) => { return phone.price < 70000});
console.log(temp);

// 
// const temp2 = smartphoneList.filter( (phone) => { return phone.brand.toLowerCase() == 'OnePlus'.toLowerCase()});
const temp2 = smartphoneList.filter( (phone) => { return phone.brand.toLowerCase().includes('sun'.toLowerCase())});
console.log(temp2);

// use filter to get all phones with color blue
const temp3 = smartphoneList.filter( (phone) => { return phone.color.includes('Blue')});
console.log(temp3);

// use filter to get all phones with color blue and price less than 70000
const temp4 = smartphoneList.filter( (phone) => { return phone.color.includes('Blue') && phone.price<70000});
console.log(temp4);

const brands = smartphoneList.map( (phone) => { return phone.brand} ); //also returns duplicate brands
console.log(brands);


const brands2 = smartphoneList.map( (phone) => { return phone.brand} ); //doesn't return duplicate brands
console.log(new Set(brands2));








