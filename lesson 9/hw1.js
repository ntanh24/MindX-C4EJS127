console.log("Kiểm tra tuổi");
/*
function checkAge(age) {
    if (age > 18) {
        return true;
    }
    else {
        return confirm('Did parents allow you?');
    }
}
*/
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}
let a = parseInt(prompt("Nhập tuổi: "))
let kq = checkAge(a)
console.log(`Kết quả là: ${kq}`);