console.log("Kiểm tra số nguyên tố");
let a =parseInt(prompt("Nhập số a: "))
let kq = true;

if (a < 2){
    kq = false;
}
else {
    for (let i = 2; i < a-1; i++)
    {
        if (a % i == '0'){
            kq = false;
        }
    }
}

if (kq == true){
    console.log(`${a} là số nguyên tố`);
}
else{
    console.log(`${a} không phải là số nguyên tố`);
}