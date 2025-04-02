function mul (a){
    return function (b){
        return a*b;
    }

}
let mulBy2 = mul(2);

console.log(mulBy2(5));
