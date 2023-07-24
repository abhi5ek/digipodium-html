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





