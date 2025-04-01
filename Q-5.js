
function deleteItemAtIndext(arr, i) {

    return arr.slice(0, i).concat(arr.slice(i+1));
}

let arr = [10,20,30,40,50];
const new_arr = deleteItemAtIndext(arr,2)

console.log(arr);
console.log(new_arr);