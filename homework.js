// HOMEWORK

// WAP in JS to print names of an array starting with 's'
const arr = ['abhishek','sumit','shri','sita','anmol'];
console.log(arr)
const disp = arr.filter( (p) => {return p.startsWith('s') });
console.log(disp);

// WAP in JS to print element of an array which are perfect squares 
const arr2 = [3, 16, 4, 67, 89, 81, 100];
console.log(arr2)
const disp2 = arr2.filter( (p) => { return Number.isInteger(p**0.5)});
console.log(disp2);

// WAP in JS to print all the prime numbers present in an array
const arr3 = [1,2,3,4,5,6,7,8,9,10];
console.log(arr3);
const ans = arr3.filter( (p) => { return getPrime(p)==2});
console.log(ans);

function getPrime(num){
    var cnt=0;
    for(var i=1;i<=num;i++){
        if(num>1 && num%i==0)
        cnt++;
    }
    return cnt;
} 