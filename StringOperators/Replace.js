const paragraph = "I think Ruth's dog is cuter than your dog!";

console.log(paragraph.replace("Ruth's", "my"));

const regex = /Dog/i;
console.log(paragraph.replace(regex, "ferret"));


const global = /Dog/gi;
console.log(paragraph.replace(global, "ferret"));