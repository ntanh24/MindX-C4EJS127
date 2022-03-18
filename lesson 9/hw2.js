function min(a, b) {
    if (a > b) {
        return b;
    }
    else if (a < b) {
        return a;
    }
    else {
        return confirm('Hai số bằng nhau');
    }
}
let n1 = parseFloat(prompt("Nhập a: "))
let n2 = parseFloat(prompt("Nhập b: "))
let kq = min(n1, n2);
console.log(`Kết quả là: ${kq}`);