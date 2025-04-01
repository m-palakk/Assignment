
const obj = {a: { b: { c: 1 } }, d: 1 };


const sol = (obj, prefix = '') => {
    let output = {};

    for (let key in obj) {
        let val = obj[key];
        let newKey = prefix === '' ? key : prefix + '.' + key;  

        if (val !== null && typeof val === 'object') {  
            let recursion_output = sol(val, newKey);  
            output = { ...output, ...recursion_output };
        } else {
            output[newKey] = val;
        }
    }

    return output;  
};





console.log(sol(obj));  
