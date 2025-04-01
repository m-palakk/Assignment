Array.prototype.myFilter = function(cb){
    let temp = [];
    for(let i =0; i<this.length;i++){
       if(cb(this[i],i,this)) temp.push(this[i]);

    }
    return temp;

};

const nums = [23,5,43,78,0];
const less_than = nums.myFilter((arr) =>{
    return arr > 5;

});
console.log(less_than);