let reset = () => {
    let body = document.querySelector('body');

    body.style.backgroundColor = "white";
}


let changecolor = () => {
    let body = document.querySelector('body');

    let c1 = Math.random() * 255;
    let c2 = Math.random() * 255;
    let c3 = Math.random() * 255;

    body.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
}


let colorinput = document.querySelector('#color');
let hexinput = document.querySelector('#hex');

colorinput.addEventListener('input', () => {
    let color = colorinput.value;
    hexinput.value = color;
    document.body.style.backgroundColor = color;
})


function copy() {
    let copyText = document.getElementById("hex");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}
  