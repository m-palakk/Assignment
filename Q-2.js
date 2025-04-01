let Str = "abcdDACDe"

function calculateFrequency (Str){
let obj = {}            
 let token = Str.toLowerCase().split('')
 
 for(let i =0; i<token.length;i++){  
   obj[token[i]]= 0
 }
 for(let i =0; i<token.length;i++){
    obj[token[i]] += 1
  }
  return obj;

  
}

const ans = calculateFrequency(Str);
console.log(ans);