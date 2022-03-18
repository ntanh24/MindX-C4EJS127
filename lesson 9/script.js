// arr.pop() xoá phần tử ở cuối
// console.log(arr);

// vòng lặp for
// let b = 5
// b++
// console.log(b)

array = [1, 2, 4, 12318, 274, 100000, 12731897] //create
//    for (let index = 1; index <= 5; index++) {
//        console.log(index);
//    }
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0) {
        console.log(array[i]);
    }
}

//update
array[2] = 10
array.push("hello")
array.unshift("hello")


// delete
array[2] = ""
console.log(array);
// splice, split
array.pop()
array.shift()
