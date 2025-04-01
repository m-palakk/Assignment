function secoundLargest(arr){
    if(arr.length<2){
        return undefined;
    }
let largest = 0;
let secound_largest = 0;
for(let i=0; i<arr.length;i++)
{
    if(arr[i] > largest){
        secound_largest = largest;
        largest = arr[i];
    }
    else if(arr[i] > secound_largest && arr[i] !== largest){
        secound_largest = arr[i];
    }
}
return secound_largest;
}


console.log(secoundLargest([2, 4, 6, 8]));
console.log(secoundLargest([ 8]));