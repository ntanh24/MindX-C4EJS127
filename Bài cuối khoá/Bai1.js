const input = ["BINH","HUNG","PHUOC","CAO","KHANH"]
function allLongestStrings(input) {
  let maxLength=0
  let newArray=[]
  for (let i=0;i<input.length; i++){
    if(input[i].length>=maxLength){
      maxLength=input[i].length
    }
  }
  for(let i=0;i<input.length; i++){
    if(input[i].length===maxLength){
      newArray.push(input[i])
    }
  }
  return newArray
}

console.log(allLongestStrings(input)) //cau lenh thuc thi ham