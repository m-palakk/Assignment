Array.prototype.myMap = function(cb){
    let temp = [] ;
    for(let i = 0; i <this.length;i++){
        temp.push(cb(this[i],i,this));

    }
    return temp;
};

const arr = [2,4,6,8];
const multiply = arr.myMap((num,i,arr)=>{
    return num * 4;


});
console.log(multiply);