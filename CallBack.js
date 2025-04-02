function greet(name ,cb){
console.log("Hello"+ " "+ name);
 cb();
}

function goodBye(){
    console.log("Good Bye");
    
}

greet ("Palak" , goodBye)

