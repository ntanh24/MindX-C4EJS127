let obj = {
    foo: {a: "hello", b: "world"},
    bar: ["example", "mem", null, {xyz: 6}, 88],
    qux: [4, 8, 12]
}

// obj.bar[3].xyz = 606;
// console.log(obj);

let obj2 = Object.assign(obj, {...obj, bar:["example", "mem", null, {xyz: 606}, 88]})
console.log(obj2);