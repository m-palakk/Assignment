let pro1 = new Promise ((resolve,reject) => {
    setTimeout (() =>{
        resolve (3)
    },3000)
})


let pro2 = new Promise ((resolve,reject) =>{
    setTimeout (() =>{
        resolve (15)
    },3000)
})

let ans = pro1.then((val1) =>{
    return pro2.then((val2) =>{
     console.log(val1 + val2 ) ;
    })
})




