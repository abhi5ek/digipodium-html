function addNums(a,b){
     c=a+b;
     console.log(c);
};

addNums(2385, 2844);
console.log(c);  // c works as a global variable


const getPercentage = function(m1,m2,m3,m4,m5=90){
    console.log(m1, m2, m3, m4, m5);
    let percent = (m1+m2+m3+m4+m5)/5;
    // console.log(percent);

    return percent;
};

const res = getPercentage(80, 90, 70, 60);
console.log(res);


const getFactorial = (n) => {
    let f = 1;
    for(let i = 1; i<=n ;i++){
        f = f*i;
    }

    return f;

};

const ans = getFactorial(5);

console.log(ans);