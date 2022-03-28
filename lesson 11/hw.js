let changecolor = ()=>{
    let body = document.querySelector('body');

    let c1 = Math.random() * 255;
    let c2 = Math.random() * 255;
    let c3 = Math.random() * 255;

    body.style.backgroundColor = `rgb(${c1}, ${c2}, ${c3})`;
}

let i = 0
let changeindex = ()=>{
    let button = document.getElementById('btn');

    button.innerHTML = i++
}