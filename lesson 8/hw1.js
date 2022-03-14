console.log("Máy tính cơ bản");
let a = parseFloat(prompt("Nhập số a: "))
let b = parseFloat(prompt("Nhập số b: "))
let kq;
const cpt = prompt('Chọn phép tính (either +, -, *, / ): ')
if (cpt == '+' || cpt == '-' || cpt == '*' || cpt == '/'){
    /*
    if (cpt == '+'){
        kq = a + b;
    }
    else if (cpt == '-'){
        kq = a - b;
    }
    else if (cpt == '*'){
        kq =  a * b;
    }
    else if (cpt == '/'){
        kq = a / b;
    }
    */
    switch (cpt) {
    case '+':
        kq = a + b;
        break;
    case '-':
        kq = a - b;
        break;
    case '*':
        kq = a * b;
        break;
    case '/':
        kq = a / b;
        break;
    default:
        break;
    }

    console.log(`Kết quả của phép tính là: ${a} ${cpt} ${b} = ${kq}`);
}
else{
    console.log("Phép tính không hợp lệ");
}
