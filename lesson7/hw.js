// Bài 1:
console.log("Bài 1:")
let a = parseInt(prompt("Nhập số thứ nhất: "))
let b = parseInt(prompt("Nhập số thứ hai: "))
const kq1 = Math.sqrt(a)
const kq2 = Math.sqrt(b)
console.log(`Căn bậc hai của a là: ${kq1}`)
console.log(`Căn bậc hai của b là: ${kq2}`)

// Bài 2:
console.log("Bài 2:")
let cc = parseInt(prompt("Nhập chiều cao: "))
let cd = parseInt(prompt("Nhập cạnh đáy: "))
const S = (cc * cd) / 2
console.log(`Diện tích tam giác là: ${S}`)

// Bài 3:
console.log("Bài 3:")
let F = parseInt(prompt("Nhập độ F: "))
const C = (F - 32) / 1.8
console.log(`GIá trị độ C là: ${C}`);

// Bài 4:
console.log("Bài 4:");
let km = parseInt(prompt("Nhập km: "))
const m = km * 1000
console.log(`Giá trị chuyển đổi là: ${m}`)