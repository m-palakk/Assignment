function counter(){
    let count = 0;
     return function increment (){
     return count += 1;
       
    }

}
let ans = counter();

console.log(ans());
