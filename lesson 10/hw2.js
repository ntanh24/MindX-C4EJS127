let obj = {
    a: 1,
    b: 2,
    c: 3
}

let properties = Object.keys(obj);

let result = properties.map((ele) => ele.toUpperCase());
console.log(result);