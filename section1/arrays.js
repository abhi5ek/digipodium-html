const arr1 = [345, 'hello', false, console.log];

console.log(arr1);
console.log(typeof arr1);

const movies = ['bahubali','my fault','asur','vampire Diaries','interstellar','avengers','RRR'];
console.log(movies.length);


// indexing
console.log(movies[3]);
console.log(movies[10]);

console.log(movies.at(-4));
console.log(movies.at(-2));

movies[2] = 'Inception';

console.log(movies);

// slicing
console.log(movies.slice(1, 4));

console.log(movies.slice(1, -1));  //prints till last element

console.log(movies.slice(2));  //prints till last element

console.log(movies.slice(2 ,100));  //prints till last element


// adding elements in array
movies.push('Flash');  // adds element at the end
movies.unshift("Pathaan")   // adds element at the beginning

console.log(movies);

// removing Elements from array 
movies.pop();    // removes element from the end
movies.shift();    // removes element from the beginning

console.log(movies);


movies.splice(3,2);   // removes multiple number of elements from any position

console.log(movies);


console.log( ['ironman',...movies, 'batman'] );
console.log( [...movies.slice(0,3),'new element', ...movies.slice(3)] );
