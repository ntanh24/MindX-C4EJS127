let a = prompt("Đăng nhập: ");
let kt = true;

if (a == "admin") {
    let pass = prompt("Nhập mật khẩu: ");
    {
        if (pass == "mindx") {
            console.log("Chào mừng!");
        }
        else if (a == "") {
            console.log("Đã huỷ!"); //question
        }
        else {
            console.log("Mật khẩu sai!");
        }
    }
}
else {
    if (a == "" || a =="esc") {
        console.log("Canceled!");
    }
    else {
        console.log("Tôi Không biết bạn!");
    }
}

