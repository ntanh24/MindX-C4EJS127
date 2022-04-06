const input = [60, 40, 55, 75, 64]
function alternatingSums(input) {
  let a=0
  let b=0
  for (let i=0;i<input.length; i++){
    if(i%2===0){
      a+=input[i]
    }
    else{
      b+=input[i]
    }
  }
  return [a,b]
}

console.log(alternatingSums(input)) //cau lenh thuc thi ham